"use client";

import { useAuth } from "@/components/auth/AuthProvider";
import { isComped } from "@/lib/access";
import {
  type PlusSubscription,
  billingEnabled,
  subscribePlus,
} from "@/lib/subscription";
import {
  type ReactNode,
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

interface SubscriptionContextValue {
  loading: boolean;
  // True when the reader may open paid content: either billing is not configured yet
  // (pre-launch, nothing is gated) or the reader has Plus (active sub or comped).
  isPlus: boolean;
  // True only for an actual paid Stripe subscription (not comped), so the UI can show a
  // "manage subscription" link to subscribers but not to comped accounts.
  subscribed: boolean;
  // The active subscription's details (renewal, plan, cancel state) for the settings page.
  subscription: PlusSubscription | null;
  billingEnabled: boolean;
}

const SubscriptionContext = createContext<SubscriptionContextValue | null>(
  null,
);

const inert = (): SubscriptionContextValue => ({
  loading: false,
  isPlus: !billingEnabled,
  subscribed: false,
  subscription: null,
  billingEnabled,
});

// Holds the signed-in reader's STRATA Plus status, synced from the Stripe extension's
// Firestore data. The reader never depends on this; only the content gate and the
// companion do. With billing off, it reports everyone as Plus so nothing is locked.
export function SubscriptionProvider({ children }: { children: ReactNode }) {
  const { user } = useAuth();
  const [subscription, setSubscription] = useState<PlusSubscription | null>(
    null,
  );
  const [loading, setLoading] = useState(billingEnabled);

  useEffect(() => {
    if (!billingEnabled || !user) {
      setSubscription(null);
      setLoading(false);
      return;
    }
    setLoading(true);
    return subscribePlus(user.uid, (sub) => {
      setSubscription(sub);
      setLoading(false);
    });
  }, [user]);

  const value = useMemo<SubscriptionContextValue>(() => {
    const subscribed = subscription !== null;
    return {
      loading,
      // Billing off, an active subscription, or a comped account all count as Plus.
      isPlus: !billingEnabled || subscribed || isComped(user?.email),
      subscribed,
      subscription,
      billingEnabled,
    };
  }, [loading, subscription, user]);

  return (
    <SubscriptionContext.Provider value={value}>
      {children}
    </SubscriptionContext.Provider>
  );
}

export function useSubscription(): SubscriptionContextValue {
  return useContext(SubscriptionContext) ?? inert();
}
