"use client";

import { useAuth } from "@/components/auth/AuthProvider";
import { billingEnabled, subscribePlus } from "@/lib/subscription";
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
  // (pre-launch, nothing is gated) or the reader has an active STRATA Plus subscription.
  isPlus: boolean;
  billingEnabled: boolean;
}

const SubscriptionContext = createContext<SubscriptionContextValue | null>(
  null,
);

const inert = (): SubscriptionContextValue => ({
  loading: false,
  isPlus: !billingEnabled,
  billingEnabled,
});

// Holds the signed-in reader's STRATA Plus status, synced from the Stripe extension's
// Firestore data. The reader never depends on this; only the content gate and the
// companion do. With billing off, it reports everyone as Plus so nothing is locked.
export function SubscriptionProvider({ children }: { children: ReactNode }) {
  const { user } = useAuth();
  const [active, setActive] = useState(false);
  const [loading, setLoading] = useState(billingEnabled);

  useEffect(() => {
    if (!billingEnabled || !user) {
      setActive(false);
      setLoading(false);
      return;
    }
    setLoading(true);
    return subscribePlus(user.uid, (a) => {
      setActive(a);
      setLoading(false);
    });
  }, [user]);

  const value = useMemo<SubscriptionContextValue>(
    () => ({ loading, isPlus: !billingEnabled || active, billingEnabled }),
    [loading, active],
  );

  return (
    <SubscriptionContext.Provider value={value}>
      {children}
    </SubscriptionContext.Provider>
  );
}

export function useSubscription(): SubscriptionContextValue {
  return useContext(SubscriptionContext) ?? inert();
}
