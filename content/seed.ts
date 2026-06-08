import type { Movement, Reading } from "@/lib/types";

// Genre fixtures for the NON-Genesis genres, to validate the kind-aware renderer.
// Genesis content lives in genesis.ts; do not duplicate it here.
// ps-13   sitting   poem        (one passage, no historical ground, pray-mode address)
// lev-19  sitting   law         (statute-cluster, per-statute address modes, misreading)
// rom-7   sitting   argument    (span crosses the chapter line, misreading)
// prov-10 sitting   wisdom      (saying-cluster, tensions / canon arguing back)
// rev-13  sitting   apocalyptic (vision, symbols glossary, reframes-mode address)
// job-1   sitting   composite   (mixed-kind passages; thesis lives in JOB_MOVEMENT capstone)

export const SEED: Reading[] = [
  {
    id: 'ps-13', bookId: 'psalms', tier: 'sitting',
    span: 'Psalm 13', chapterIndex: 13,
    title: 'How long',
    thread: 'A lament with no story behind it. What grounds it is the form: four times “how long,” then a turn.',
    closeEnd: 'The complaint is kept in the prayer book, teeth and all. That is the point.',
    passages: [
      {
        ref: 'Psalm 13', kind: 'poem', form: 'poetry', title: 'How long', inTextTurn: 5,
        verses: [
          { n: 1, text: 'How long, O LORD? Will You forget me forever? How long will You hide Your face from me?' },
          { n: 2, text: 'How long must I wrestle in my soul, with sorrow in my heart each day? How long will my enemy dominate me?' },
          { n: 3, text: 'Consider me and respond, O LORD my God. Give light to my eyes, lest I sleep in death,' },
          { n: 4, text: 'lest my enemy say, “I have overcome him,” and my foes rejoice when I fall.' },
          { n: 5, text: 'But I have trusted in Your loving devotion; my heart will rejoice in Your salvation.' },
          { n: 6, text: 'I will sing to the LORD, for He has been good to me.' },
        ],
        ground: { kind: 'genre', src: 'Westermann · Alter', text: 'A lament, the most common kind of psalm. It has no story behind it. The heading tying it to David was added later and tells us nothing about a setting. What grounds it is the form itself: four times “how long,” then a turn. Israel kept these as scripts for the worst days, and the striking thing is that a prayer this accusing was not edited out. The complaint is holy too.' },
        meaning: 'The psalm does the thing religion usually forbids. It accuses God to his face, four times, and calls it prayer. Then in verse 5 it turns, not because anything changed, the enemy is still there, the face is still hidden, but because the one praying decides to trust anyway. Lament is not the opposite of faith. It is faith with its teeth bared.',
        lenses: {
          theo: 'You are allowed to say this. The Bible hands you the words to accuse God and keeps them in the prayer book. Trust here is not a feeling that the trouble lifted. It is a decision made inside the trouble, with the face still hidden.',
          arch: 'The cry into a silence that will not answer is the oldest human sound. To name the silence and keep speaking into it anyway is how a self holds together when nothing outside confirms it. (Speaking into the silence as the act that keeps the self whole.)',
        },
        addr: { mode: 'pray', text: 'When you are in the worst of it, these are words you can take on your own lips. You do not have to pretend you are fine to pray it.' },
        ask: 'What would you say to God if you were allowed to accuse, and could you still get to verse 5?',
      },
    ],
  },

  {
    id: 'lev-19', bookId: 'leviticus', tier: 'sitting',
    span: 'Leviticus 19:9–19', chapterIndex: 19,
    title: 'Holy in the ordinary',
    thread: 'Laws against fraud and revenge sit in the same breath as a ban on mixed fabrics. To the writers there was no seam.',
    closeEnd: 'Some of these still have their hand on you. Some are a window into someone else’s world. Telling them apart is the work.',
    passages: [
      {
        ref: 'Leviticus 19:9–19', kind: 'statute-cluster', form: 'list', title: 'Holy in the ordinary',
        statutes: [
          { n: 9, text: 'When you reap the harvest of your land, you are not to reap to the very edges of your field or gather the gleanings of your harvest.' },
          { n: 10, text: 'You must not strip your vineyard bare or gather its fallen grapes. Leave them for the poor and the foreigner. I am the LORD your God.' },
          { n: 11, text: 'You must not steal. You must not lie or deceive one another.' },
          { n: 13, text: 'You must not defraud your neighbor or rob him. You must not withhold until morning the wages due a hired hand.' },
          { n: 14, text: 'You must not curse the deaf or place a stumbling block before the blind, but you shall fear your God. I am the LORD.' },
          { n: 15, text: 'You must not pervert justice; you must not show partiality to the poor or favoritism to the rich; you are to judge your neighbor fairly.' },
          { n: 17, text: 'You must not harbor hatred against your brother in your heart. Directly rebuke your neighbor, so that you will not incur guilt on account of him.' },
          { n: 18, text: 'Do not seek revenge or bear a grudge against any of your people, but love your neighbor as yourself. I am the LORD.' },
          { n: 19, text: 'You are to keep My statutes. You shall not crossbreed two different kinds of livestock; you shall not sow your fields with two kinds of seed; and you shall not wear clothing made of two kinds of material.' },
        ],
        perItem: {
          18: { addr: { mode: 'claims', text: 'This one has never stopped making its claim on you. It is the whole law in five words.' } },
          19: { addr: { mode: 'none-but', text: 'This does not bind you. It is worth seeing anyway, because it shows you that to these writers the loom and the wage stood on the same ground.' } },
        },
        ground: { kind: 'historical', src: 'Milgrom · Douglas · Westermann', text: 'This is the Holiness Code, and its method is what trips a modern reader. Laws against fraud and slander and revenge sit in the same breath as a ban on mixed fabrics, with no seam between them. To the writers there was no seam. Holiness reached the whole of life, the field, the wage, the grudge, the loom, and the same refrain stamps all of it: I am the LORD. The gleaning laws are a welfare system written into agriculture. The mixed-kind rules are boundary markers, ways a small people stayed distinct.' },
        misreading: { named: 'These are arbitrary rules from a primitive God.', why: 'The cluster is mostly justice and mercy, with a few identity markers folded in. Reading the whole list, not one cherry-picked verse, shows a sustained ethic of how the strong treat the weak.' },
        meaning: 'Two kinds of command are braided here on purpose. Some are timeless and burn straight through: do not hold back a worker’s wages, do not curse the deaf, love your neighbor as yourself. Some marked Israel off from the nations around it and do not bind you: the fabrics, the seed. The flattening is the teaching. To these writers, how you pay a laborer and what you weave were both answers to the same question, what does it look like to belong to this God in ordinary life.',
        addr: { mode: 'claims', text: 'The luminous ones in this list are not ancient history. They are a standing demand about how you treat the people with the least power to make you.' },
        ask: 'Which of these still has its hand on you, and which are you reading as a window into someone else’s world?',
      },
    ],
  },

  {
    id: 'rom-7', bookId: 'romans', tier: 'sitting',
    span: 'Romans 7:1–8:4', chapterIndex: 7, crossesChapters: true,
    title: 'The thing I do not want',
    thread: 'Read 7 alone and you get despair. Read the unit and you get despair broken. The chapter break here is in the wrong place.',
    closeEnd: 'The cry of verse 24 only makes sense because of the answer that lands in 8:1. Do not stop at the wretched line.',
    passages: [
      {
        ref: 'Romans 7:14–25', kind: 'argument', form: 'prose', title: 'The thing I do not want',
        verses: [
          { n: 14, text: 'We know that the law is spiritual; but I am unspiritual, sold as a slave to sin.' },
          { n: 15, text: 'I do not understand what I do. For what I want to do, I do not do. But what I hate, I do.' },
          { n: 18, text: 'I know that nothing good lives in me, that is, in my flesh; for I have the desire to do what is good, but I cannot carry it out.' },
          { n: 19, text: 'For I do not do the good I want to do. Instead, I keep on doing the evil I do not want to do.' },
          { n: 22, text: 'For in my inner being I delight in God’s law.' },
          { n: 23, text: 'But I see another law at work in my body, warring against the law of my mind and holding me captive to the law of sin that dwells within me.' },
          { n: 24, text: 'What a wretched man I am! Who will rescue me from this body of death?' },
          { n: 25, text: 'Thanks be to God, through Jesus Christ our Lord! So then, with my mind I serve the law of God, but with my flesh I serve the law of sin.' },
        ],
        ground: { kind: 'occasion', src: 'Dunn · Wright · Cranfield', text: 'Paul is writing to a church in Rome he did not found, working out how Jew and Gentile stand together before God, and he is mid-argument. The chapter break before verse 1 and after verse 25 are both later additions, both in the wrong place. Romans 7 and 8 are one breath, and the wretched cry of verse 24 only makes sense because of the answer that lands in 8:1.' },
        misreading: { named: 'This is Paul confessing his own daily defeat as a Christian.', why: 'The “I” is fought over. Many read it as humanity under the law before rescue, a rhetorical “I,” not Paul’s diary. Reading it as private failure misses that the passage is an argument about the law’s limits, and that it resolves, the very next sentence, into no condemnation.' },
        meaning: 'This is the most honest description of the divided will ever written: wanting the good and watching yourself do the opposite, as if hijacked from inside. Paul’s point is not “try harder.” It is that the law can name the good and cannot produce it. Knowing the right thing has never been the same as being able to do it. The cry is real, and it is not the end of the sentence.',
        lenses: {
          theo: 'The law diagnoses, it does not cure. It can show you the gap between what you want and what you do, and it is powerless to close it. That gap is exactly where grace has to enter, which is why the passage ends not in resolve but in rescue: thanks be to God.',
          arch: 'The self at war with itself, the “I” that wants one thing and a deeper current that does another, is the oldest map of the divided psyche. Naming the split is the first honest step; pretending to a unity you do not have is the lie. (The divided will brought into the light.)',
        },
        addr: { mode: 'names', text: 'You know the exact experience: wanting to do the good and watching yourself not do it, as if something in you overrode the choice.' },
        soft: 'The passage does not leave you in the cry. The next line is rescue.',
        ask: 'Where do you most do the thing you do not want, and what would it change to stop reading that as proof you are bad and start reading it as the gap grace is for?',
      },
    ],
  },

  {
    id: 'prov-10', bookId: 'proverbs', tier: 'sitting',
    span: 'Proverbs 10 (selected)', chapterIndex: 10,
    title: 'Coaching, not contract',
    thread: 'A run of sharp couplets from the schoolroom. Some of them make promises the rest of the canon refuses to keep.',
    closeEnd: 'Proverbs tells you how life usually tilts. Job and Ecclesiastes are in the same scroll-family to remind you it is a tilt, not a guarantee.',
    passages: [
      {
        ref: 'Proverbs 10 (selected)', kind: 'saying-cluster', form: 'list', title: 'Coaching, not contract',
        sayings: [
          { n: 1, text: 'The proverbs of Solomon: A wise son brings joy to his father, but a foolish son grief to his mother.' },
          { n: 2, text: 'Ill-gotten treasures profit nothing, but righteousness brings deliverance from death.' },
          { n: 3, text: 'The LORD does not let the righteous go hungry, but He denies the craving of the wicked.' },
          { n: 4, text: 'Idle hands make one poor, but diligent hands bring wealth.' },
          { n: 9, text: 'He who walks in integrity walks securely, but he who perverts his ways will be found out.' },
          { n: 22, text: 'The blessing of the LORD enriches, and He adds no sorrow to it.' },
          { n: 27, text: 'The fear of the LORD prolongs life, but the years of the wicked will be cut short.' },
        ],
        perItem: {
          3: { note: 'Job will break this verse in half.' },
          22: { note: 'Read as a promise, this is the seed of every prosperity gospel.' },
        },
        ground: { kind: 'genre', src: 'Fox · von Rad · The Wisdom of Amenemope', text: 'Proverbs collects the wisdom of the ancient schoolroom, sayings polished for memory and aimed at the young. One stretch of the book runs close behind an older Egyptian instruction, the Wisdom of Amenemope. These are not laws or prophecies. They are distilled observation, how the world usually goes, and the antithetical form, this but that, is a teaching device, not a logical proof.' },
        misreading: { named: 'Do right and you are guaranteed to be safe, fed, and prosperous.', why: 'A proverb is a general truth, not a contract. It tells you the way life mostly tilts. The book sits in a canon that kept Job and Ecclesiastes alongside it precisely to argue with anyone who reads a proverb as a promise.' },
        meaning: 'Proverbs is coaching, not contract. It tells you that diligence and integrity usually serve you better than sloth and crookedness, and it says so in couplets built to lodge in a young memory. The danger is the small step from "this is how life generally goes" to "this is how God guarantees life will go for me." The book knows the shape of a good life. It does not promise the outcome.',
        tensions: [
          { claim: 'The righteous never go hungry (10:3).', counter: 'Job is blameless and loses everything. The righteous do starve.', where: 'Job 1–2' },
          { claim: 'The God-fearer is rewarded with long life (10:27).', counter: 'The same fate, death, meets the wise and the fool alike, and who can say it is just?', where: 'Ecclesiastes 2:14–16' },
        ],
        addr: { mode: 'claims', text: 'Take these as a posture to live by, not a deal to hold God to. They shape you. They do not insure you.' },
        ask: 'Which of these have you been reading as a promise God owes you, and what happens to your faith when the promise does not pay out?',
      },
    ],
  },

  {
    id: 'rev-13', bookId: 'revelation', tier: 'sitting',
    span: 'Revelation 13', chapterIndex: 13,
    title: 'The beast and the number',
    thread: 'The most decoded chapter in the Bible, and the one that most resists decoding. It was a code its first readers could crack and its rulers could not.',
    closeEnd: 'The beast is not a riddle about the distant future. It is the empire of the moment, drawn as a monster, so a crushed community could be told the thing devouring them is already doomed.',
    passages: [
      {
        ref: 'Revelation 13:1–18 (selected)', kind: 'vision', form: 'prose', title: 'The beast and the number',
        verses: [
          { n: 1, text: 'Then I saw a beast with ten horns and seven heads rising out of the sea. There were ten royal crowns on its horns and blasphemous names on its heads.' },
          { n: 2, text: 'The beast I saw was like a leopard, with the feet of a bear and the mouth of a lion. And the dragon gave the beast his power and his throne and great authority.' },
          { n: 3, text: 'One of the heads of the beast appeared to have been mortally wounded. But the mortal wound was healed, and the whole world marveled and followed the beast.' },
          { n: 4, text: 'They worshiped the dragon who had given authority to the beast, and they worshiped the beast, saying, “Who is like the beast, and who can wage war against it?”' },
          { n: 7, text: 'Then the beast was permitted to wage war against the saints and to conquer them, and it was given authority over every tribe and people and tongue and nation.' },
          { n: 10, text: '“If anyone is destined for captivity, into captivity he will go; if anyone is to die by the sword, by the sword he must be killed.” Here is a call for the perseverance and faith of the saints.' },
          { n: 17, text: 'so that no one could buy or sell unless he had the mark—the name of the beast or the number of its name.' },
          { n: 18, text: 'Here is a call for wisdom: Let the one who has insight calculate the number of the beast, for it is the number of a man, and that number is 666.' },
        ],
        ground: { kind: 'occasion', src: 'Bauckham · Koester · Collins', text: 'Revelation is resistance literature, written to churches under the weight of Rome near the end of the first century, in a code its first readers could crack and its rulers could not. Apocalyptic was already a genre. Daniel had done the same against an earlier empire, speaking of present tyranny in cosmic images so the powerless could see their moment from above.' },
        symbols: [
          { image: 'The beast from the sea', meant: 'Rome and the emperor cult.', note: 'The sea is the west, where Rome lay, and the place of chaos in Hebrew imagination.' },
          { image: 'The dragon behind it', meant: 'The satanic power standing behind the empire.', note: 'Named in chapter 12 as the ancient serpent.' },
          { image: 'The head wounded and healed', meant: 'The Nero redivivus legend, the rumor that the dead emperor would return.' },
          { image: 'The number 666', meant: 'Most likely Nero Caesar, by gematria.', note: 'Hebrew letters double as numbers, and the consonants of "Nero Caesar" sum to 666. Some manuscripts read 616, which fits a variant spelling, strong evidence the target was a specific man.' },
          { image: 'The mark for buying and selling', meant: 'The economic pressure to take part in emperor worship.', note: 'Trade-guild life was saturated with the imperial cult.' },
        ],
        misreading: { named: 'The beast and 666 are a cipher for a figure or technology in our own time.', why: 'The text says the number is "the number of a man" and asks first-century readers to calculate it. They could; it pointed at Nero. Treating it as a timeless code for microchips or modern politicians is exactly the decoding the genre was never built for.' },
        meaning: 'To people being killed for refusing to call Caesar lord, John says the empire that looks unbeatable is a beast wearing borrowed authority, and its wound is already mortal. The grotesque imagery is not there to frighten you about the end of the world. It is there to shrink the empire to scale. Seen from the throne room, Rome is not eternal and not in charge, and the call is not to decode the future but to endure the present without bowing.',
        lenses: {
          theo: 'The vision relativizes every empire. Whatever claims total allegiance and the power to feed you or starve you is, seen truly, a beast on a short leash. That is the whole consolation: the thing crushing you is not the thing in charge.',
          arch: 'The monster rising from the sea is the oldest image of chaos heaving up against order. To name the devouring power as a beast is to strip it of its claim to be a god. (Naming the monster as the first refusal of its power.)',
        },
        addr: { mode: 'reframes', text: 'If something in your world presents itself as the only power that matters, with the reach to ruin you for not bowing, this was written to let you see it from above, where it is smaller than it says.' },
        ask: 'What in your life presents itself as the final power, the thing you cannot cross without being ruined, and what would change if you saw it as already on a short leash?',
      },
    ],
  },

  {
    id: 'job-1', bookId: 'job', tier: 'sitting',
    span: 'Job (the shape of the book)', chapterIndex: 1, crossesChapters: true,
    title: 'The man who would not lie to be comforted',
    unitLabel: 'Scene',
    thread: 'A book in two materials. Prose at the edges, poetry in the vast middle, and the seam between them is the argument.',
    closeEnd: 'God never answers why. He answers with the size of the world, and then says the friends were wrong and the man who accused him spoke rightly.',
    passages: [
      {
        label: 'Frame', ref: 'Job 1–2', kind: 'scene', form: 'prose', title: 'The wager',
        verses: [
          { n: 8, text: 'Then the LORD said to Satan, “Have you considered My servant Job? For there is no one on earth like him, a man who is blameless and upright, who fears God and shuns evil.”' },
          { n: 9, text: 'Satan answered the LORD, “Does Job fear God for nothing?' },
          { n: 11, text: 'But stretch out Your hand and strike all that he has, and he will surely curse You to Your face.”' },
          { n: 12, text: '“Very well,” said the LORD to Satan. “Everything he has is in your hands, but you must not lay a hand on the man himself.” Then Satan went out from the presence of the LORD.' },
          { n: 21, text: 'saying: “Naked I came from my mother’s womb, and naked I will return. The LORD gave, and the LORD has taken away. Blessed be the name of the LORD.”' },
        ],
        ground: { kind: 'genre', src: 'Newsom · Greenberg · Alter', text: 'The book opens like a folk tale: there once was a man. The frame, the heavenly wager and the tidy restoration at the very end, is old and probably circulated long before the poetry was written into the middle of it. Its God makes a bet with a figure the text calls Satan, in Hebrew ha-satan, “the accuser,” a title and a courtroom role, not yet the devil of later tradition, over whether a man only loves God for the payout.' },
        meaning: 'The whole book is set in motion by a question about motive: will a person hold on to God when there is nothing in it for them. The frame’s Job passes the test with a famous line of acceptance. But the frame is only the setup. The man who says “Blessed be the name of the LORD” here is about to spend thirty-nine chapters refusing to pretend.',
        addr: { mode: 'names', text: 'You know the suspicion buried in the wager: that your faith might only be gratitude for good weather, and you do not fully know what it is until the weather turns.' },
        ask: 'Would your trust survive losing the things that currently make it easy?',
      },
      {
        label: 'Dispute', ref: 'Job 4–5', kind: 'argument', form: 'prose', title: 'Eliphaz: the clean answer',
        verses: [
          { n: 7, text: 'Consider now, I plead: Who, being innocent, has ever perished? Or where have the upright been destroyed?' },
          { n: 8, text: 'As I have observed, those who plow iniquity and those who sow trouble reap the same.' },
          { n: 17, text: 'Blessed indeed is the man whom God corrects; so do not despise the discipline of the Almighty.' },
        ],
        ground: { kind: 'occasion', src: 'Newsom · Clines', text: 'Three friends come to sit with Job, and for seven days they say nothing, which is the one thing they do well. Then they start to explain. Eliphaz goes first, and he speaks the most reasonable, most pious theology in the ancient world: suffering is the wage of sin, so confess and be restored. It is the same retribution logic Proverbs trades in. The book lets the friends say it at enormous length.' },
        misreading: { named: 'If you are suffering, you must have done something to deserve it. The innocent do not perish.', why: 'This is the friends’ entire case, and it is the most natural religious explanation of pain. The book stages it for thirty-five chapters in order to demolish it. In 42:7 God says to Eliphaz, plainly, that he and his friends did not speak rightly. Their tidy theology is the thing Job exists to refute.' },
        meaning: 'Eliphaz is not a villain. He is everyone who has ever told a sufferer that they must have brought it on themselves, usually meaning well, always to protect the belief that the world is fair and so they themselves are safe. The friends defend God’s justice by sacrificing Job’s innocence. The book treats that trade as the real blasphemy.',
        addr: { mode: 'claims', text: 'You have been Eliphaz. When someone’s pain threatened your sense that the world is fair, you reached for a reason it was their fault.' },
        ask: 'Whose suffering have you quietly explained away to keep your own world feeling safe?',
      },
      {
        label: 'Refusal', ref: 'Job 27', kind: 'poem', form: 'poetry', title: 'Job will not confess a lie',
        verses: [
          { n: 4, text: 'my lips will not speak wickedness, and my tongue will not utter deceit.' },
          { n: 5, text: 'I will never say that you are right; I will maintain my integrity until I die.' },
          { n: 6, text: 'I will cling to my righteousness and never let go. As long as I live, my conscience will not accuse me.' },
        ],
        ground: { kind: 'genre', src: 'Alter', text: 'Job’s answer to the friends is not an argument that he is sinless in general. It is a refusal to confess sins he did not commit just to make the theology come out even. The poetry here is some of the fiercest in the Bible: a man insisting, against every comforter, that he will not buy peace with a lie about himself or about God.' },
        meaning: 'This is the hinge of the book’s integrity. Job could end his suffering, in the friends’ system, by confessing. He refuses. He would rather hold an honest complaint against heaven than a dishonest peace with it. The book sides with him. Honest accusation, it turns out, is closer to faith than false confession.',
        lenses: {
          theo: 'Job’s refusal to lie about himself is treated as righteousness, not rebellion. The God of this book would rather be argued with honestly than flattered falsely. That alone breaks most of what religion usually rewards.',
          arch: 'To refuse the explanation everyone is pressing on you, and to hold your own experience as true against the crowd, is the costly work of staying a self under pressure to dissolve into the group’s story. (Holding the truth of your own experience against every comforter.)',
        },
        addr: { mode: 'names', text: 'You know the pull to confess to something you did not do, just to end the pressure and be allowed back into comfort.' },
        ask: 'Where are you being asked to call yourself the problem so that someone else’s view of the world can stay intact?',
      },
      {
        label: 'Whirlwind', ref: 'Job 38–42', kind: 'vision', form: 'prose', title: 'Out of the storm',
        verses: [
          { n: 2, text: '“Who is this who obscures My counsel by words without knowledge?' },
          { n: 4, text: 'Where were you when I laid the foundations of the earth? Tell Me, if you have understanding.' },
          { n: 31, text: 'Can you bind the chains of the Pleiades or loosen the belt of Orion?' },
          { n: 8, text: 'Would you really annul My justice? Would you condemn Me to justify yourself?' },
          { n: 3, text: 'You asked, ‘Who is this who conceals My counsel without knowledge?’ Surely I spoke of things I did not understand, things too wonderful for me to know.' },
        ],
        ground: { kind: 'genre', src: 'Newsom · Brown', text: 'After all the speeches, God finally shows up, and does the most unexpected thing in the book: he never answers the question. He does not explain the suffering, does not mention the wager, does not defend himself in the friends’ terms. He asks Job some seventy questions about the workings of creation, the sea, the stars, the wild animals, the storm. Then Job, who demanded an answer, falls silent, not crushed but somehow satisfied.' },
        meaning: 'The book’s strangest move is that the non-answer works. God does not tell Job why. He shows Job the size and wildness of a world that was never built to his scale, full of creatures that have nothing to do with human usefulness, and somehow that is enough. The comfort is not an explanation. It is a presence, and a sense of proportion. Job wanted a verdict and got a horizon.',
        lenses: {
          theo: 'God answers the problem of suffering by refusing the question’s terms. He does not justify the pain. He widens the frame until the demand for a tidy reason looks too small for the world it is asking about. That is either the deepest answer or the honest admission that there is none, and the book lets it be both.',
          arch: 'The voice from the storm is the self confronted by the vastness it did not make and cannot control. Standing in that and not being destroyed, ceasing to need the world to be explicable on your terms, is its own kind of healing. (The ego quieted by the immensity it did not author.)',
        },
        misreading: { named: 'God bullies Job into submission with a display of power.', why: 'Read as intimidation, the speech is ugly. But God then says Job spoke rightly and the friends did not. The one who accused him is vindicated; the ones who defended him are rebuked. That is not the behavior of a God who just wanted Job to shut up.' },
        tensions: [
          { claim: 'The frame restores Job double; virtue is repaid in the end.', counter: 'The thirty-nine chapters of poetry spend their whole length refusing exactly that logic, and the voice from the storm never once invokes it.', where: 'Job 3–41 vs 42:10–17' },
        ],
        addr: { mode: 'reframes', text: 'When you are demanding a reason for your pain and none comes, this is the book that says the absence of an answer is not the absence of God, and that a wider horizon can do what an explanation cannot.' },
        ask: 'What would change if you stopped requiring your suffering to mean something and let it simply be witnessed?',
      },
    ],
  },
];

// The thesis of Job lives here, not in any single reading. A composite book is one
// movement whose Capstone holds the meaning of the whole.
export const JOB_MOVEMENT: Movement = {
  id: 'job', index: 1, title: 'Job', range: 'Job (whole)', composite: true,
  throughline: 'A blameless man loses everything, refuses the explanation everyone offers, and is answered not with a reason but with the size of the world.',
  chapterStart: 1, chapterEnd: 42,
  situation: {
    skicker: 'The ground beneath the book', title: 'A folk tale with a furnace inside it',
    paragraphs: [
      'Job is built from two materials by, almost certainly, two hands. An old prose folk tale about a patient man who loses everything and gets it back wraps a long, savage poem in which the same man is anything but patient, and refuses every easy comfort.',
      'The seam is not a flaw to explain away. It is the argument. The frame believes in the fair exchange of virtue for reward. The poetry does not, and will not, and the book keeps both, daring you to notice.',
    ],
    sources: 'Newsom · Greenberg · Alter',
  },
  capstone: {
    skicker: 'The shape of the whole book', title: 'No answer, and somehow enough',
    paragraphs: [
      'The friends gave the clean answer: you suffer because you sinned, so confess and be restored. The book lets them say it for thirty-five chapters, then God says to their faces that they were wrong, and that Job, who spent those chapters accusing heaven, spoke rightly. Honest complaint is vindicated over false comfort.',
      'And God never explains the suffering. He answers the question with the size of creation and the wildness of a world not built to human scale. Job wanted a verdict and got a horizon, and the book’s most unsettling claim is that the horizon was enough.',
      'Then the frame pays him back double, which the poetry never asked for. The restoration does not resolve the book. It sits on top of it, a folk tale’s happy ending stretched over a poem that refused the whole logic of endings like that.',
    ],
    tensions: [
      { claim: 'The frame restores Job double; in the end, virtue is repaid.', counter: 'The poetry spends thirty-nine chapters dismantling exactly that principle, and the voice from the storm never invokes it.', where: 'Job 3–41 vs 42:10–17' },
    ],
    sources: 'Newsom · Clines · Alter',
  },
};
