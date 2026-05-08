/* ============================================
   CANOODLE - Application Logic
   A dating app for dogs
   ============================================ */

// ============================================
// DATA: 12 dogs for the deck + 1 "your dog"
// ============================================

const DOGS = [
  {
    id: 'bruno', name: 'Bruno', age: 4, breed: 'Beagle', breedSlug: 'beagle',
    distance: 0.4, type: 'The Schemer', gender: 'M', size: 'Medium', energy: 4,
    sniffScore: 96, verified: true, vaccinated: true,
    bio: "Professional treat negotiator. CEO of barking at delivery drivers. Will make eye contact while doing crimes. Enjoys: long walks, longer naps, suspiciously good at opening doors.",
    bowl: "Kibble + 1 illegal chicken nugget (he doesn't think we know).",
    stats: { squirrels: 247, naps: 6, treats: 9001, mailmen: 4 },
    badges: ['Certified Zoomie Expert', 'Mailman Survivor', 'Knows Sit (Sometimes)', 'Treat Hoarder'],
    status: 'Barking at a leaf',
    vibe: ['Sniffer', 'Loner', 'Strategist'],
    goodWith: ['Big dogs', 'Small dogs', 'Suspicious of cats'],
    pickup: "Are you a tennis ball? Because I'd chase you forever.",
  },
  {
    id: 'mochi', name: 'Mochi', age: 2, breed: 'Shiba Inu', breedSlug: 'shiba',
    distance: 1.2, type: 'The Drama Queen', gender: 'F', size: 'Small', energy: 3,
    sniffScore: 88, verified: true, vaccinated: true,
    bio: "Doesn't run, walks dramatically. 47% judging you, 53% wondering when dinner is. Will scream like a small human if dinner is 3 minutes late.",
    bowl: "Wild salmon. (She has notes on the regular kind.)",
    stats: { squirrels: 12, naps: 9, treats: 4321, mailmen: 0 },
    badges: ['Vacuum Nemesis', 'Side-Eye Specialist', 'Refuses Belly Rubs (Conditional)', 'Tantrum Tutor'],
    status: 'Pretending not to hear you',
    vibe: ['Lounger', 'Sniffer'],
    goodWith: ['Small dogs', 'Cats (begrudgingly)'],
    pickup: "I usually don't talk to other dogs. But you seem… acceptable.",
  },
  {
    id: 'tofu', name: 'Tofu', age: 1, breed: 'Golden Retriever', breedSlug: 'retriever/golden',
    distance: 0.8, type: 'The Himbo', gender: 'M', size: 'Large', energy: 5,
    sniffScore: 99, verified: true, vaccinated: true,
    bio: "Sees a stranger, falls in love. Hasn't had a single negative thought in 14 months. Specialist in: aggressive cuddling, sock theft, looking concerned during loud noises.",
    bowl: "Whatever fell on the floor today. So, jackpot.",
    stats: { squirrels: 0, naps: 12, treats: 12000, mailmen: -2 },
    badges: ['Friend To All', 'Sock Thief', 'Has Never Said No', 'Therapy Dog (Self-Appointed)'],
    status: 'Online (vibrating with joy)',
    vibe: ['Wrestler', 'Fetcher', 'Zoomer'],
    goodWith: ['Big dogs', 'Small dogs', 'Puppies', 'Cats', 'Kids', 'Mailmen', 'Strangers', 'Other strangers'],
    pickup: "Hi! Hi! Hi! Hi! Hi! Are we friends now? We're friends now.",
  },
  {
    id: 'pickles', name: 'Pickles', age: 4, breed: 'Dachshund', breedSlug: 'dachshund',
    distance: 2.1, type: 'The Goblin', gender: 'M', size: 'Tiny', energy: 3,
    sniffScore: 79, verified: false, vaccinated: true,
    bio: "Long boy. Short legs. Big opinions. Will bite the air if you take too long with my food. Burrito connoisseur. Has tried to fight a Great Dane (and, in his head, won).",
    bowl: "Beef stew. He earned it (he says).",
    stats: { squirrels: 89, naps: 8, treats: 7777, mailmen: 12 },
    badges: ['Aggressively Long', 'Burrito Connoisseur', 'Tiny Rage', 'Has Strong Opinions'],
    status: 'Rolling in something gross',
    vibe: ['Sniffer', 'Wrestler', 'Tunneler'],
    goodWith: ['Other small dogs', 'Suspicious of everyone else'],
    pickup: "I'm 90% spine and 100% your problem.",
  },
  {
    id: 'luna', name: 'Luna', age: 5, breed: 'Border Collie', breedSlug: 'collie/border',
    distance: 3.4, type: 'The Anxious Intellectual', gender: 'F', size: 'Medium', energy: 5,
    sniffScore: 92, verified: true, vaccinated: true,
    bio: "Knows 47 commands. Currently writing a thesis on why you shouldn't leave me alone. Counts sheep professionally. Has a spreadsheet of your daily habits. Gifted, but tired.",
    bowl: "Premium kibble + a bedtime treat. Same as last week. Schedule maintained.",
    stats: { squirrels: 156, naps: 3, treats: 5000, mailmen: 8 },
    badges: ['IQ: Off The Charts', 'Has Spreadsheet of Your Habits', 'Sheep Adjacent', 'Will Outrun You'],
    status: 'Online now (suspiciously calm)',
    vibe: ['Fetcher', 'Chaser', 'Strategist'],
    goodWith: ['Big dogs', 'Active dogs', 'Anyone who can keep up'],
    pickup: "I've calculated our compatibility. Statistically, we're a strong match.",
  },
  {
    id: 'kevin', name: 'Kevin', age: 7, breed: 'Pug', breedSlug: 'pug',
    distance: 0.2, type: 'The Old Soul', gender: 'M', size: 'Small', energy: 1,
    sniffScore: 84, verified: true, vaccinated: true,
    bio: "Snores like a chainsaw. Wheezes for attention. Has never NOT been the main character. Has seen things. Doesn't want to talk about it. Available evenings, mostly.",
    bowl: "Soft food, small portions. Big snore to follow.",
    stats: { squirrels: 2, naps: 14, treats: 8888, mailmen: 0 },
    badges: ['Snore Champion', 'Drama Coordinator', 'Cannot Be Outside in Summer', 'Wise (Self-Reported)'],
    status: 'Snoring (loudly)',
    vibe: ['Lounger', 'Philosopher'],
    goodWith: ['Calm dogs', 'Couches', 'Snacks'],
    pickup: "I don't run. I don't fetch. But I do love deeply.",
  },
  {
    id: 'daisy', name: 'Daisy', age: 2, breed: 'Husky', breedSlug: 'husky',
    distance: 1.8, type: 'The Drama Queen', gender: 'F', size: 'Large', energy: 5,
    sniffScore: 87, verified: true, vaccinated: true,
    bio: "Will scream like a human if dinner is 3 minutes late. Loves snow, hates being alone for 4 minutes. Sings at 11pm. My playlist? Just me, howling.",
    bowl: "Meatballs. (After a 4-minute protest.)",
    stats: { squirrels: 67, naps: 5, treats: 6543, mailmen: 6 },
    badges: ['Vocal Virtuoso', 'Tantrum Tutor', 'Husband Material', 'Snow Crusader'],
    status: 'Crying about nothing',
    vibe: ['Zoomer', 'Wrestler', 'Chaser'],
    goodWith: ['Big dogs', 'Active dogs', 'Tolerant neighbors'],
    pickup: "I scream. I cry. I love. Are you ready for this commitment?",
  },
  {
    id: 'olive', name: 'Olive', age: 3, breed: 'Pomeranian', breedSlug: 'pomeranian',
    distance: 0.9, type: 'The Diva', gender: 'F', size: 'Tiny', energy: 4,
    sniffScore: 81, verified: true, vaccinated: true,
    bio: "Refuses to walk in mud. Has a wardrobe. 3 lbs of pure attitude. Don't pick me up unless I asked. (I will tell you when I asked.)",
    bowl: "Hand-fed kibble. Small bowl. Small bow on the bowl.",
    stats: { squirrels: 34, naps: 7, treats: 5800, mailmen: 9 },
    badges: ['Wardrobe Stylist', 'Refuses Mud', 'Tiny Tyrant', 'Bow Connoisseur'],
    status: 'Posing for photos',
    vibe: ['Lounger', 'Sniffer'],
    goodWith: ['Polite dogs only'],
    pickup: "I'm fashionably late and worth the wait.",
  },
  {
    id: 'rocco', name: 'Rocco', age: 4, breed: 'French Bulldog', breedSlug: 'bulldog/french',
    distance: 1.5, type: 'The Goblin', gender: 'M', size: 'Small', energy: 2,
    sniffScore: 76, verified: false, vaccinated: true,
    bio: "Compact chaos unit. Snorts before committing crimes. Approximately 60% gas, 40% personality. Has a face only my mom could love. (She loves it. A lot.)",
    bowl: "Whatever was on the menu. Plus what he stole from the menu.",
    stats: { squirrels: 8, naps: 11, treats: 5500, mailmen: 3 },
    badges: ['Snort Master', 'Gas Sommelier', 'Sits On Things He Shouldn\'t', 'Permanently Confused'],
    status: 'Plotting',
    vibe: ['Wrestler', 'Lounger'],
    goodWith: ['Patient dogs', 'Anyone with a couch'],
    pickup: "I look angry. I'm not. Probably. Let's vibe.",
  },
  {
    id: 'hank', name: 'Hank', age: 5, breed: 'Boxer', breedSlug: 'boxer',
    distance: 4.2, type: 'The Bouncer', gender: 'M', size: 'Large', energy: 4,
    sniffScore: 89, verified: true, vaccinated: true,
    bio: "Looks intimidating. Cries during sad commercials. Will protect you from: deliveries, plastic bags, my own shadow. Won't protect you from: belly rub demands.",
    bowl: "Big bowl. Big smile. Big nap incoming.",
    stats: { squirrels: 23, naps: 7, treats: 8200, mailmen: 1 },
    badges: ['Soft Heart, Big Bark', 'Cried at Up', 'Bodyguard / Cuddler', 'Plastic Bag Defeater'],
    status: 'Online now',
    vibe: ['Fetcher', 'Wrestler', 'Lounger'],
    goodWith: ['Everyone', 'Cats (with introduction)', 'Movies'],
    pickup: "I look tough but I'm 90% love and 10% drool.",
  },
  {
    id: 'coco', name: 'Coco', age: 3, breed: 'Poodle', breedSlug: 'poodle',
    distance: 2.7, type: 'The Schemer', gender: 'F', size: 'Medium', energy: 3,
    sniffScore: 94, verified: true, vaccinated: true,
    bio: "Smarter than you. Knows it. Refuses to fetch unless treats are pre-negotiated. Has lawyer on retainer (imaginary, but powerful). Will judge your shoes.",
    bowl: "Organic. Negotiated. Approved. Final.",
    stats: { squirrels: 34, naps: 4, treats: 6800, mailmen: 2 },
    badges: ['Negotiation Expert', 'Allergic To Mediocrity', 'Has Strong Opinions', 'Curls On Fleek'],
    status: 'Reviewing the menu',
    vibe: ['Fetcher', 'Sniffer', 'Strategist'],
    goodWith: ['Smart dogs', 'Polite dogs'],
    pickup: "I'm hypoallergenic, multilingual, and emotionally available on Tuesdays.",
  },
  {
    id: 'maple', name: 'Maple', age: 3, breed: 'Australian Shepherd', breedSlug: 'australian/shepherd',
    distance: 5.1, type: 'The Anxious Intellectual', gender: 'F', size: 'Medium', energy: 5,
    sniffScore: 91, verified: true, vaccinated: true,
    bio: "Herder of: my humans, the cat, leaves, vacuum cleaners, your patience. Eyes you with great purpose. Always one squirrel away from total enlightenment.",
    bowl: "Kibble + a bone-shaped biscuit. Earned through honest work.",
    stats: { squirrels: 312, naps: 4, treats: 7100, mailmen: 5 },
    badges: ['Herder Of Vibes', 'Two-Toned Eyes', 'Will Outrun You', 'Squirrel Philosopher'],
    status: 'Herding leaves',
    vibe: ['Chaser', 'Fetcher', 'Strategist'],
    goodWith: ['Active dogs', 'Sheep', 'Ducks'],
    pickup: "I can teach you 12 tricks in an afternoon. (You will learn 2.)",
  },
];

const MY_DOG = {
  id: 'biscuit', name: 'Biscuit', age: 3, breed: 'Golden Retriever', breedSlug: 'retriever/golden',
  type: 'The Himbo', gender: 'M', size: 'Large', energy: 5,
  bio: "Eats anything not nailed down. Loves: tennis balls, my mom, the mailman (we are besties now). Hates: the vacuum and 7am.",
  bowl: "Kibble. Then more kibble. Then a tennis ball (not edible, but tried).",
  stats: { squirrels: 142, naps: 8, treats: 14000, mailmen: 0 },
  badges: ['Vacuum Nemesis', 'Tennis Ball CEO', 'Sock Thief'],
  status: 'Online',
};

// ============================================
// HOROSCOPES, PICKUP LINES, THOUGHTS, BIO IDEAS
// ============================================

// Compatibility reports — Biscuit (Himbo) × each personality type
const COMPATIBILITY = {
  'The Schemer': {
    pct: 91,
    headline: 'Sweet chaos meets master plan',
    summary: 'Your golden heart, their tactical brilliance. They make the plans. You bring the joy. Both of you bring the snacks.',
    strengths: [
      'Aligned snack ambitions',
      'They scheme. You go along happily. Everyone wins.',
      'Mutual love of meeting new dogs at every corner',
    ],
    challenge: 'They will negotiate the playdate terms. You will agree to all of them. This is, somehow, fine.',
    activity: 'A long sniff walk where they map every scent. You are along for the ride. Bring water.',
    horoscope: 'Tuesday brings a stolen treat. Forgiveness comes by Thursday. Both of you grow from it.',
  },
  'The Drama Queen': {
    pct: 93,
    headline: 'A symphony of feelings',
    summary: 'They feel things, loudly. You love everything, also loudly. Together: pure cinema.',
    strengths: [
      'Both fluent in expressing emotions',
      'Shared belief that dinner timing is sacred',
      'Will sing together at sunset — you with joy, them with feelings',
    ],
    challenge: 'Their drama is real. Your concern is also real. You will figure it out together.',
    activity: 'A long walk where they vent and you listen with your whole body. Couples therapy, but free.',
    horoscope: 'Saturday: a small injustice. Sunday: a treat. The healing arc is short.',
  },
  'The Himbo': {
    pct: 99,
    headline: 'Pure joy on four paws',
    summary: 'Two Himbos. One world. The mailman has multiplied his friend count by two.',
    strengths: [
      'Mutual love of everyone and everything',
      'Will fetch in tandem until the universe ends',
      'Aligned philosophy: tennis ball = good',
    ],
    challenge: 'Neither of you knows when to stop. This is also a strength.',
    activity: 'Endless fetch, synchronized zoomies, then a nap so deep you both dream of treats.',
    horoscope: 'Every day is Tuesday. Tuesdays are good. Snacks are coming. You are ready.',
  },
  'The Anxious Intellectual': {
    pct: 88,
    headline: "You're the calm. They're the storm of thoughts.",
    summary: 'They overthink. You under-think. Together: balanced. Oddly balanced.',
    strengths: [
      'Your unconditional love calms their racing mind',
      'They organize. You bring tennis balls. Division of labor.',
      'Mutual respect, even if one of you has a spreadsheet',
    ],
    challenge: 'They will analyze the date. You will enjoy it. Both reactions are valid.',
    activity: 'A structured fetch session with clear goals. They thrive. You wag.',
    horoscope: 'Wednesday brings a schedule change. You handle it. They eventually do too.',
  },
  'The Goblin': {
    pct: 85,
    headline: 'Big love, low to the ground',
    summary: 'You are tall and joyful. They are short and chaotic. Both are correct. Both are loved.',
    strengths: [
      'Your patience matches their goblin energy',
      'You will protect them from things 1.5x their size (which is everything)',
      'Mutual appreciation for rolling in stuff',
    ],
    challenge: 'They are 60% personality. You are 100% love. The math works out.',
    activity: 'A burrow-and-fetch combo: they dig under things, you fetch the things they dug up.',
    horoscope: 'Friday: a new hiding spot is discovered. Saturday: it becomes home.',
  },
  'The Old Soul': {
    pct: 90,
    headline: 'Young heart, wise companion',
    summary: 'You bound. They observe. They have seen many tennis balls. You are still amazed by every one.',
    strengths: [
      'Your enthusiasm reminds them of their youth',
      'Their wisdom keeps you out of trouble',
      'Shared love of sunbeams and snacks',
    ],
    challenge: 'You sprint. They saunter. Plan walks accordingly.',
    activity: 'A slow walk with frequent sniff breaks. You will love every one of them.',
    horoscope: 'Sunday afternoon is sacred. Both of you nap. The world keeps turning. It\'s fine.',
  },
  'The Diva': {
    pct: 87,
    headline: 'The Himbo and Their Highness',
    summary: 'You are eager to please. They appreciate that. The hierarchy is established and beautiful.',
    strengths: [
      'You love them. They allow it.',
      'You bring the joy. They bring the style.',
      'A power couple, but in matching outfits',
    ],
    challenge: 'Mud is not on the agenda. Plan accordingly.',
    activity: 'A photo walk in pretty parks. They pose. You are in the background, also adorable.',
    horoscope: 'Wednesday: a new accessory arrives. The world rejoices. You included.',
  },
  'The Bouncer': {
    pct: 95,
    headline: 'Big hearts, bigger paws',
    summary: 'Two soft souls in big bodies. The world should be afraid. The world should not be afraid.',
    strengths: [
      'Mutual gentleness with smaller dogs',
      'Both will cry during sad commercials',
      'Will protect the playdate from leaves, plastic bags, and your shadow',
    ],
    challenge: 'When one of you sees a butterfly, the other has to pretend not to be scared.',
    activity: 'A slow stroll with frequent stops to sniff and snack. Big-boy energy, soft-boy heart.',
    horoscope: 'Tuesday: a thunder. Wednesday: a treat. The cycle continues, gently.',
  },
};

const ZODIAC = {
  'The Schemer': {
    sign: 'Beagle Rising · Mercury in Treats',
    reading: 'A bag of cheese is in your future. You will look innocent. The vet will not be fooled. Walk with confidence. Steal with grace.'
  },
  'The Drama Queen': {
    sign: 'Husky Sun · Moon in Theatrics',
    reading: 'Today, the universe has wronged you. (Dinner is 4 minutes late.) Your howl is heard across realms. Express yourself. The neighbors deserve it.'
  },
  'The Himbo': {
    sign: 'Golden Sun · Venus in Tennis Balls',
    reading: 'You will love a stranger. Then another stranger. Then your own reflection. A tennis ball is also nearby. Life is, fundamentally, good.'
  },
  'The Anxious Intellectual': {
    sign: 'Border Collie Rising · Mars in Overthinking',
    reading: 'You have already noticed the squirrel. The squirrel does not yet know it has been noticed. Use this knowledge wisely. Or don\'t. Both have consequences.'
  },
  'The Goblin': {
    sign: 'Dachshund Sun · Pluto in Mischief',
    reading: 'Chaos is on your side today. You will fit in a place you should not. You will emerge changed. So will the place. Embrace it.'
  },
  'The Old Soul': {
    sign: 'Pug Rising · Saturn in The Couch',
    reading: 'You have lived 700 years in dog years. You know things. The young pups frolic; you observe. A treat is owed to you. Collect it.'
  },
  'The Diva': {
    sign: 'Pomeranian Sun · Venus in Bows',
    reading: 'Today is your day. Also tomorrow. And the next day. Walk slowly. Pose often. The paparazzi (your humans) await.'
  },
  'The Bouncer': {
    sign: 'Boxer Rising · Mars in Gentle',
    reading: 'You look strong. You feel soft. A small dog will boss you around today and you will allow it. This is the way.'
  },
};

const THOUGHTS_BY_TYPE = {
  'The Schemer': [
    'If I bark at the bag of treats, will it become friends?',
    'My human thinks the door is locked. My human is wrong.',
    'If I look sad enough, the small human will share the chicken nugget.',
    "I have a 12-step plan to acquire that sandwich. Step 1: existing.",
  ],
  'The Drama Queen': [
    'Dinner is THREE MINUTES LATE. I have informed the neighbors.',
    "I haven't been petted in… checks watch… 14 seconds. Outrageous.",
    'I will sing the song of my people. The song is loud. The song has feelings.',
    'Why did you LEAVE me. For 6 minutes. With my OTHER human. I am UNDONE.',
  ],
  'The Himbo': [
    'I love you. Also you. Also that mailman. Also that leaf. Also you again.',
    "Wait, am I a good boy? I'm a good boy! WAIT, AM I A GOOD BOY?!",
    "Tennis ball. Tennis ball. TENNIS BALL.",
    "Hi! Hi! Hi! Hi! Hi! Hi! Hi!",
  ],
  'The Anxious Intellectual': [
    'I have notes on the way you fold towels. The notes are extensive.',
    "There are 47 birds in the yard. I have counted. I will report back.",
    'If I herd the cat into the kitchen, the household runs more efficiently.',
    'You have not given me a job in 9 minutes. I am unraveling.',
  ],
  'The Goblin': [
    "I will fit in this box. I am the box now.",
    "What if I bit the air. Would they notice. They would notice.",
    "My legs are short but my crimes are tall.",
    "I rolled in something. You're welcome.",
  ],
  'The Old Soul': [
    "In my day, treats were treats. Now look at this. Disrespectful.",
    "I have witnessed three regimes. The couch endures.",
    'A nap is a small death. I will return.',
    "Young dogs run. I observe. We are different. I am better.",
  ],
  'The Diva': [
    "I do not 'sit' in mud.",
    "Has my photo been posted today? It should be. Multiple platforms.",
    "I require a bow. The pink one. Yes, that one. Hurry.",
    "If I wag, it is intentional. If I sigh, it is a critique.",
  ],
  'The Bouncer': [
    "That bag rustled. I will protect us. From the bag.",
    "I look intimidating. I am, in fact, ruined by gentle eye contact.",
    "Did you cry during the movie? Because same.",
    "I will bark. Then immediately apologize with my whole body.",
  ],
};

const PICKUP_LINES = [
  "Are you a tennis ball? Because I'd chase you forever.",
  "Are you a mailman? Because my heart is barking.",
  "If you were a bone, I'd bury you in my heart.",
  "Are you the vacuum? No? Then I'm in love.",
  "Roses are red, my fur is too — wait, that's just dirt. Anyway, hi.",
  "I don't normally sniff like this on the first date, but…",
  "Is it me, or does this fire hydrant feel especially flirty today?",
  "I have 4 paws, 2 ears, and 1 heart. They're all yours.",
];

const BIO_TEMPLATES = [
  (trait) => `Professional ${trait}. Specializes in 3am zoomies, aggressive cuddling, and stealing socks. Ask me about my villain origin story.`,
  (trait) => `${trait[0].toUpperCase() + trait.slice(1)} coordinator. Loves: treats, naps, the mailman (sworn enemy turned best friend). Hates: the vacuum, 7am, doors.`,
  (trait) => `Mostly ${trait}. Will bark at: leaves, my reflection, your boyfriend. Will not bark at: actual intruders. We're working on it.`,
  (trait) => `Fluent in ${trait}. CEO of barking at deliveries. Currently accepting applications for: best friends, treat suppliers, belly rub volunteers.`,
];

// ============================================
// CHAT DATA
// ============================================

const INITIAL_CHATS = [
  {
    dogId: 'tofu', unread: true, time: '2m',
    messages: [
      { from: 'them', text: "OMG HI HI HI Biscuit you are so handsome!! 😭", t: '11:42' },
      { from: 'them', text: "Tofu has been talking about you all morning (he talks a lot. about everyone. but mostly you)", t: '11:42' },
      { from: 'me', text: "haha thanks! Biscuit's energy levels are… concerning today", t: '11:43' },
      { from: 'them', text: "PERFECT MATCH then. Want to tire them both out at the park?", t: '11:43' },
    ],
  },
  {
    dogId: 'luna', unread: true, time: '15m',
    messages: [
      { from: 'them', text: "Hi! I noticed Biscuit's profile said he loves fetching. Luna has prepared a 14-page playdate proposal.", t: '11:28' },
      { from: 'them', text: "(she's anxious. it's color-coded.)", t: '11:29' },
    ],
  },
  {
    dogId: 'mochi', unread: false, time: '1h',
    messages: [
      { from: 'me', text: "hey! cute photos", t: '10:40' },
      { from: 'them', text: "thanks i guess", t: '10:52' },
      { from: 'them', text: "wait that came out wrong. mochi says hi.", t: '10:52' },
      { from: 'them', text: "she's judging your dog from afar. it's a compliment.", t: '10:53' },
    ],
  },
  {
    dogId: 'bruno', unread: false, time: '3h',
    messages: [
      { from: 'them', text: "Bruno would like to formally propose a treat exchange.", t: '8:22' },
      { from: 'me', text: "lol terms?", t: '8:30' },
      { from: 'them', text: "1 zoomie at the park = 2 chicken treats. Final offer.", t: '8:31' },
    ],
  },
  {
    dogId: 'kevin', unread: false, time: '1d',
    messages: [
      { from: 'them', text: "kevin sends his regards. he's napping. that's the message.", t: 'Yesterday' },
    ],
  },
];

// ============================================
// PLANS, BORK BOARD
// ============================================

const PLANS = [
  {
    dogId: 'tofu', date: 'Saturday, May 11', time: '10:00 AM',
    location: 'Riverside Dog Park', notes: 'Bring tennis balls. Tofu lives for them.', confirmed: true,
  },
  {
    dogId: 'bruno', date: 'Sunday, May 12', time: '4:30 PM',
    location: 'Pawsitive Cafe', notes: 'Treat negotiations to follow.', confirmed: true,
  },
];

// Tail Tales — daily story per dog (Instagram-stories style)
const TALES = {
  bruno:   "Today I barked at the mailman. He waved. Still figuring out what this means.",
  mochi:   "Watched the snow fall for 14 minutes. Felt nothing. Walked away dramatically.",
  tofu:    "Saw a leaf. Loved it. Saw another leaf. Loved that one too.",
  pickles: "Made a tunnel under the couch. Got stuck in own tunnel. Will try again tomorrow.",
  luna:    "Counted 47 birds in the yard today. The birds know nothing of my plans.",
  kevin:   "Slept. Woke. Ate. Slept again. The week is going well.",
  daisy:   "Howled at exactly 11pm. Neighbor responded. We have a duo now.",
  olive:   "New bow arrived. Pink. Photoshoot at 3pm. Be there.",
  rocco:   "Snorted at a butterfly. The butterfly snorted back. Friend made.",
  hank:    "Saw a small dog. Befriended the small dog. Was bossed by the small dog. Best day.",
  coco:    "Refused breakfast on principle. Got better breakfast. The system works.",
  maple:   "Herded one (1) leaf today. Productive.",
};

const MEET_CUTES = [
  { dogA: 'bruno', dogB: 'mochi', story: "Bruno and Mochi sniffed the same fire hydrant at 11:47am. Their eyes met. The rest is history." },
  { dogA: 'tofu', dogB: 'luna', story: "Tofu found Luna's lost tennis ball under a bench and returned it. She forgave him for being too much sometimes. They were inseparable by sunset." },
  { dogA: 'daisy', dogB: 'kevin', story: "Daisy was howling at the moon. From across the park, Kevin howled back (in his sleep). They've been best friends ever since." },
  { dogA: 'pickles', dogB: 'olive', story: "Pickles got stuck under a park bench. Olive walked by and judged him for 4 minutes. Then she got stuck too. They're now inseparable." },
  { dogA: 'coco', dogB: 'hank', story: "Coco refused to share her tennis ball. Hank waited 47 minutes. He's still waiting. She's noticed. She thinks it's sweet, actually." },
  { dogA: 'maple', dogB: 'rocco', story: "Maple was herding leaves. Rocco watched, fascinated. Now they herd leaves together. Productivity has doubled." },
  { dogA: 'tofu', dogB: 'hank', story: "Tofu approached Hank cautiously, scared of his size. Hank rolled onto his back. They were friends in 4 seconds." },
  { dogA: 'olive', dogB: 'tofu', story: "Olive was posing for a photo. Tofu photobombed it. The photo went viral on Bork Board. They are now a duo." },
  { dogA: 'bruno', dogB: 'coco', story: "Bruno stole Coco's stick. Coco stole Bruno's heart. Even trade." },
  { dogA: 'mochi', dogB: 'pickles', story: "Mochi pretended not to see Pickles. Pickles pretended not to see Mochi. They have been pretending together for weeks. It's working." },
  { dogA: 'luna', dogB: 'maple', story: "Luna had a 14-page playdate proposal. Maple had a flowchart. They merged the documents and now run the park's social calendar." },
  { dogA: 'daisy', dogB: 'tofu', story: "Daisy was crying about something specific. Tofu didn't understand but cried with her in solidarity. They're a vibe now." },
];

const BORK_FEED = [
  { type: 'event', title: 'The Big Bork', meta: 'Sat 10am · Riverside Park · 23 dogs going',
    text: 'Group walk + treat exchange. Wear something orange.' },
  { type: 'post', author: 'Tofu', avatar: 'tofu', time: '12m',
    text: "Tennis ball update: there is now A SECOND tennis ball. I am rich. #blessed #tennisballcollector" },
  { type: 'post', author: 'Pickles', avatar: 'pickles', time: '1h',
    text: 'Got stuck under the couch. Again. Was rescued. Plotting comeback. #longbois #goblincore' },
  { type: 'event', title: 'Yappy Hour', meta: 'Fri 6pm · The Hydrant Bar · 14 dogs going',
    text: 'Dog-friendly cafe meetup. Treats provided. Humans welcome.' },
  { type: 'post', author: 'Daisy', avatar: 'daisy', time: '2h',
    text: 'DINNER WAS 7 MINUTES LATE TODAY. Statement to follow. #justice #huskylife' },
  { type: 'post', author: 'Coco', avatar: 'coco', time: '4h',
    text: 'Refused to fetch today. Negotiated 3 treats. Won. #knowyourworth' },
];

// ============================================
// STATE
// ============================================

const state = {
  currentTab: 'sniff',
  deckIndex: 0,
  swipeHistory: [],
  conversations: {},
  borkMode: false,
  currentConvDogId: null,
  matchesAvailable: ['mochi', 'tofu', 'luna', 'rocco', 'maple'], // who matches when sniffed
  photosLoaded: false,
};

INITIAL_CHATS.forEach(c => { state.conversations[c.dogId] = { messages: [...c.messages], unread: c.unread, time: c.time }; });

// ============================================
// HELPERS
// ============================================

const $ = (s) => document.querySelector(s);
const $$ = (s) => Array.from(document.querySelectorAll(s));
const dogById = (id) => DOGS.find(d => d.id === id) || (id === MY_DOG.id ? MY_DOG : null);
const pick = (arr) => arr[Math.floor(Math.random() * arr.length)];
const fmtAge = (a) => `${a} ${a === 1 ? 'yr' : 'yrs'}`;
const fmtDist = (d) => d < 1 ? `${Math.round(d * 1000)} m` : `${d.toFixed(1)} mi`;
const energyDots = (n) => '⚡'.repeat(n) + '·'.repeat(5 - n);

function showToast(msg, ms = 1800) {
  const t = $('#toast');
  t.textContent = msg;
  t.classList.remove('hidden');
  clearTimeout(t._timer);
  t._timer = setTimeout(() => t.classList.add('hidden'), ms);
}

function dogPhotoUrl(dog, size = 800) {
  // Returns the cached Dog CEO photo URL, or a placeholder
  return dog._photo || `https://placedog.net/${size}/${size}?id=${(dog.id.charCodeAt(0) + dog.id.charCodeAt(1)) % 200 + 1}`;
}

// ============================================
// AUDIO — cute synthesized puppy yips
// ============================================

let audioCtx = null;
function getAudioCtx() {
  if (!audioCtx) {
    try {
      audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    } catch (e) {
      return null;
    }
  }
  if (audioCtx && audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
  return audioCtx;
}

// Master gain — bumped LOUD so match moments hit
let masterGain = null;
function getMaster() {
  const ctx = getAudioCtx();
  if (!ctx) return null;
  if (!masterGain) {
    masterGain = ctx.createGain();
    masterGain.gain.value = 0.85;
    masterGain.connect(ctx.destination);
  }
  return masterGain;
}

// One cute puppy "yip" — pitch sweep with noise attack and band-pass filter
function playYip(when = 0, pitch = 1.0, gainScale = 1.0) {
  const ctx = getAudioCtx();
  const master = getMaster();
  if (!ctx || !master) return;
  const t = ctx.currentTime + when;
  const dur = 0.18;

  // Body: a downward pitch sweep (the "wo" → "of")
  const osc = ctx.createOscillator();
  osc.type = 'triangle';
  const f1 = 1100 * pitch;
  const f2 = 520 * pitch;
  osc.frequency.setValueAtTime(f1, t);
  osc.frequency.exponentialRampToValueAtTime(f2, t + 0.07);
  osc.frequency.linearRampToValueAtTime(f2 * 0.82, t + dur);

  // Second oscillator (slight detune) — fuller chord
  const osc2 = ctx.createOscillator();
  osc2.type = 'sawtooth';
  osc2.frequency.setValueAtTime(f1 * 1.005, t);
  osc2.frequency.exponentialRampToValueAtTime(f2 * 1.005, t + 0.07);

  // Sub harmonic — adds chest/warmth
  const sub = ctx.createOscillator();
  sub.type = 'sine';
  sub.frequency.setValueAtTime(f1 * 0.5, t);
  sub.frequency.exponentialRampToValueAtTime(f2 * 0.5, t + 0.07);
  const subGain = ctx.createGain();
  subGain.gain.value = 0.35;

  // Band-pass for warmth (no harshness)
  const bp = ctx.createBiquadFilter();
  bp.type = 'bandpass';
  bp.frequency.setValueAtTime(900 * pitch, t);
  bp.frequency.linearRampToValueAtTime(550 * pitch, t + dur);
  bp.Q.value = 3.2;

  // Envelope — fast attack, soft decay (LOUDER)
  const gain = ctx.createGain();
  gain.gain.setValueAtTime(0, t);
  gain.gain.linearRampToValueAtTime(0.55 * gainScale, t + 0.005);
  gain.gain.exponentialRampToValueAtTime(0.001, t + dur);

  // Tiny "ch" attack via short white-noise burst (the consonant punch)
  const noiseDur = 0.03;
  const buf = ctx.createBuffer(1, ctx.sampleRate * noiseDur, ctx.sampleRate);
  const data = buf.getChannelData(0);
  for (let i = 0; i < data.length; i++) data[i] = (Math.random() * 2 - 1) * 0.5;
  const noise = ctx.createBufferSource();
  noise.buffer = buf;
  const noiseHP = ctx.createBiquadFilter();
  noiseHP.type = 'highpass';
  noiseHP.frequency.value = 1800;
  const noiseGain = ctx.createGain();
  noiseGain.gain.setValueAtTime(0.28 * gainScale, t);
  noiseGain.gain.exponentialRampToValueAtTime(0.001, t + 0.045);

  // Routing
  osc.connect(bp);
  osc2.connect(bp);
  sub.connect(subGain);
  subGain.connect(bp);
  bp.connect(gain);
  noise.connect(noiseHP);
  noiseHP.connect(noiseGain);
  noiseGain.connect(gain);
  gain.connect(master);

  osc.start(t);
  osc2.start(t);
  sub.start(t);
  noise.start(t);
  osc.stop(t + dur + 0.02);
  osc2.stop(t + dur + 0.02);
  sub.stop(t + dur + 0.02);
}

// Match: a happy chorus of 4 yips with rising excitement
function playMatchBarks() {
  playYip(0.00, 1.00, 1.0);
  playYip(0.13, 1.12, 1.0);
  playYip(0.27, 0.92, 1.05);
  playYip(0.42, 1.18, 1.1);
}

// Welcome screen "Let's sniff": one big happy ruff
function playWelcomeBark() {
  playYip(0.00, 0.95, 1.1);
  playYip(0.16, 1.10, 1.0);
}

// Tiny yip for tapping the decorative paws
function playTinyYip(pitch = 1.0) {
  playYip(0, pitch * 1.15, 0.55);
}

// Single soft yip for super-sniff or other small moments
function playSingleYip() {
  playYip(0, 1.05, 0.85);
}

// ============================================
// PHOTO LOADING (Dog CEO API)
// ============================================

async function loadDogPhotos() {
  const allDogs = [...DOGS, MY_DOG];
  const promises = allDogs.map(async (d) => {
    try {
      const r = await fetch(`https://dog.ceo/api/breed/${d.breedSlug}/images/random`);
      if (!r.ok) throw new Error('not ok');
      const j = await r.json();
      if (j.status === 'success') {
        d._photo = j.message;
        return;
      }
      throw new Error('no success');
    } catch {
      try {
        const r2 = await fetch('https://dog.ceo/api/breeds/image/random');
        const j2 = await r2.json();
        d._photo = j2.message;
      } catch {
        d._photo = null;
      }
    }
  });
  await Promise.allSettled(promises);
  state.photosLoaded = true;
  // Re-render visible screens that depend on photos
  renderDeck();
  renderTailTales();
  renderChatList();
  renderPlans();
  renderBorkFeed();
  renderMyPup();
  populateWelcomeHero();
}

// ============================================
// NAVIGATION
// ============================================

function goToTab(tab) {
  state.currentTab = tab;
  $$('.page').forEach(p => p.classList.remove('active'));
  const target = $(`#page-${tab}`);
  if (target) target.classList.add('active');
  $$('.tab').forEach(b => b.classList.toggle('active', b.dataset.tab === tab));

  if (tab === 'chat') renderChatList();
  if (tab === 'plans') renderPlans();
  if (tab === 'bork') renderBorkFeed();
  if (tab === 'pup') renderMyPup();
  if (tab === 'sniff') { renderDeck(); renderTailTales(); }
}

function startApp() {
  // Wake up audio context on first user gesture so barks can play later
  getAudioCtx();
  // Big happy welcome bark when entering
  playWelcomeBark();
  setTimeout(() => {
    $('#page-welcome').classList.remove('active');
    $('#tabs').classList.remove('hidden');
    goToTab('sniff');
    setTimeout(() => showToast('Swipe right to sniff, left to pass 🐾', 2400), 400);
  }, 280);
}

// =================================================================
// WELCOME SCREEN — clean hero card stack + tappable brand letters
// =================================================================

function populateWelcomeHero() {
  // Pick a wholesome dog for the front card; the other 2 are color-only
  const front = dogById('tofu') || DOGS[0];
  const photo = $('#hero-photo-front');
  const name = $('#hero-name-front');
  if (photo) photo.src = dogPhotoUrl(front, 600);
  if (name) name.textContent = front.name;
}

function wireWelcomeInteractions() {
  // Tap a brand letter → tiny yip + bounce
  $$('#brand-name span').forEach(s => {
    s.addEventListener('click', (e) => {
      e.stopPropagation();
      getAudioCtx();
      playTinyYip(0.9 + Math.random() * 0.4);
    });
  });
  // Tap the hero card → tiny yip
  const hero = $('#welcome-hero');
  if (hero) {
    hero.addEventListener('click', () => {
      getAudioCtx();
      playTinyYip(1.05);
    });
  }
}

// ============================================
// SNIFF DECK
// ============================================

function renderDeck() {
  const deck = $('#deck');
  const empty = $('#empty-state');
  deck.innerHTML = '';

  const remaining = DOGS.slice(state.deckIndex);
  if (remaining.length === 0) {
    empty.classList.remove('hidden');
    return;
  }
  empty.classList.add('hidden');

  // Render up to 3 cards (top + 2 stacked behind)
  const visible = remaining.slice(0, 3);
  visible.forEach((dog, i) => {
    const card = makeCard(dog, i);
    deck.appendChild(card);
  });

  const top = deck.querySelector('.card[data-stack="0"]');
  if (top) attachCardGestures(top);
}

const VIBE_EMOJI = {
  'Wrestler': '🤼', 'Fetcher': '🎾', 'Zoomer': '💨', 'Sniffer': '👃',
  'Lounger': '🛋️', 'Loner': '🌙', 'Chaser': '🏃', 'Tunneler': '🕳️',
  'Strategist': '🧠', 'Philosopher': '📚',
};

function makeCard(dog, stackPos) {
  const card = document.createElement('div');
  card.className = 'card';
  card.dataset.stack = stackPos;
  card.dataset.dogId = dog.id;

  const energyBars = Array.from({length: 5}, (_, i) =>
    `<span class="energy-bar ${i < dog.energy ? 'on' : ''}"></span>`
  ).join('');

  card.innerHTML = `
    <img class="card-photo" src="${dogPhotoUrl(dog)}" alt="${dog.name}" onerror="this.onerror=null;this.src='https://placedog.net/640/640?id=${Math.abs(dog.id.length * 7) % 200 + 1}';" />
    <div class="card-gradient"></div>
    <div class="card-photo-dots">
      <span class="photo-dot active"></span>
      <span class="photo-dot"></span>
      <span class="photo-dot"></span>
    </div>
    <div class="card-top-row">
      <div class="card-status">${dog.status}</div>
      <div class="card-score-badge" title="Sniff Score">
        <span class="score-spark">✨</span>
        <span class="score-num">${dog.sniffScore}%</span>
      </div>
    </div>
    ${dog.verified ? '<div class="card-verified" title="Photo verified">✓</div>' : ''}
    <div class="card-stamp card-stamp-sniff">SNIFF</div>
    <div class="card-stamp card-stamp-pass">PASS</div>
    <div class="card-info">
      <div class="card-name-row">
        <span class="card-name">${dog.name}</span>
        <span class="card-age">${dog.age}</span>
      </div>
      <div class="card-meta">
        <span>${dog.breed}</span>
        <span class="card-meta-dot"></span>
        <span>📍 ${fmtDist(dog.distance)}</span>
        <span class="card-meta-dot"></span>
        <span>${dog.size}</span>
      </div>
      <div class="card-type">${dog.type}</div>
      <div class="card-chips">
        ${dog.vibe.slice(0, 3).map(v => `<span class="card-chip">${VIBE_EMOJI[v] || '🐾'} ${v}</span>`).join('')}
        <span class="card-chip card-chip-energy">
          <span class="energy-bars">${energyBars}</span>
          <span>Energy ${dog.energy}/5</span>
        </span>
      </div>
    </div>
  `;

  // Tap card opens profile (only if it's the top card and there was no swipe)
  card.addEventListener('click', (e) => {
    if (card.dataset.stack !== '0') return;
    if (card._wasSwiping) { card._wasSwiping = false; return; }
    showDogProfile(dog);
  });

  return card;
}

function attachCardGestures(card) {
  let startX = 0, startY = 0, dx = 0, dy = 0, dragging = false;

  const stampSniff = card.querySelector('.card-stamp-sniff');
  const stampPass = card.querySelector('.card-stamp-pass');

  function down(e) {
    const p = e.touches ? e.touches[0] : e;
    startX = p.clientX; startY = p.clientY; dx = 0; dy = 0; dragging = true;
    card.classList.add('swiping');
  }

  function move(e) {
    if (!dragging) return;
    const p = e.touches ? e.touches[0] : e;
    dx = p.clientX - startX;
    dy = p.clientY - startY;
    if (Math.abs(dx) > 6 || Math.abs(dy) > 6) card._wasSwiping = true;
    const rot = dx * 0.06;
    card.style.transform = `translate(${dx}px, ${dy}px) rotate(${rot}deg)`;
    const opacity = Math.min(Math.abs(dx) / 100, 1);
    if (dx > 0) {
      stampSniff.style.opacity = opacity;
      stampPass.style.opacity = 0;
    } else if (dx < 0) {
      stampPass.style.opacity = opacity;
      stampSniff.style.opacity = 0;
    } else {
      stampSniff.style.opacity = 0;
      stampPass.style.opacity = 0;
    }
  }

  function up() {
    if (!dragging) return;
    dragging = false;
    card.classList.remove('swiping');
    stampSniff.style.opacity = 0;
    stampPass.style.opacity = 0;

    const threshold = 100;
    if (dx > threshold) {
      handleSwipe('sniff');
    } else if (dx < -threshold) {
      handleSwipe('pass');
    } else if (dy < -threshold && Math.abs(dy) > Math.abs(dx)) {
      handleSwipe('super');
    } else {
      card.style.transform = '';
    }
  }

  card.addEventListener('mousedown', down);
  card.addEventListener('mousemove', move);
  card.addEventListener('mouseup', up);
  card.addEventListener('mouseleave', up);
  card.addEventListener('touchstart', down, { passive: true });
  card.addEventListener('touchmove', move, { passive: true });
  card.addEventListener('touchend', up);
}

function burstHearts() {
  const burst = document.querySelector('#btn-sniff .heart-burst');
  if (!burst) return;
  burst.classList.remove('go');
  void burst.offsetWidth;
  burst.classList.add('go');
}

const VERDICTS = {
  sniff: [
    { emoji: '❤️', text: 'Sniffed!' },
    { emoji: '✨', text: 'Yes!' },
    { emoji: '🐾', text: 'Cute!' },
  ],
  pass: [
    { emoji: '👋', text: 'Maybe next time' },
    { emoji: '🌸', text: 'Not today' },
    { emoji: '💭', text: 'Passed' },
  ],
  super: [
    { emoji: '⭐', text: 'Super sniff!' },
  ],
};

function showVerdict(action) {
  const el = $('#swipe-verdict');
  if (!el) return;
  const variants = VERDICTS[action];
  if (!variants) return;
  const v = pick(variants);
  el.querySelector('.verdict-emoji').textContent = v.emoji;
  el.querySelector('.verdict-text').textContent = v.text;
  // restart animation
  el.classList.remove('show-sniff', 'show-pass', 'show-super');
  void el.offsetWidth;
  el.classList.add('show-' + action);
  // clear class after animation so it can fire again
  clearTimeout(el._timer);
  el._timer = setTimeout(() => {
    el.classList.remove('show-sniff', 'show-pass', 'show-super');
  }, 1000);
}

function handleSwipe(action) {
  const top = $('#deck .card[data-stack="0"]');
  if (!top) return;
  const dogId = top.dataset.dogId;
  const dog = dogById(dogId);

  if (action === 'sniff') {
    top.classList.add('gone-right');
    burstHearts();
    showVerdict('sniff');
    state.swipeHistory.push({ id: dogId, action });
    state.deckIndex++;
    setTimeout(() => {
      // Match check: certain dogs always match for the demo
      if (state.matchesAvailable.includes(dogId)) {
        showMatch(dog);
      } else {
        renderDeck();
      }
    }, 320);
  } else if (action === 'pass') {
    top.classList.add('gone-left');
    showVerdict('pass');
    state.swipeHistory.push({ id: dogId, action });
    state.deckIndex++;
    setTimeout(() => renderDeck(), 320);
  } else if (action === 'super') {
    top.classList.add('gone-up');
    showVerdict('super');
    state.swipeHistory.push({ id: dogId, action });
    state.deckIndex++;
    setTimeout(() => {
      showMatch(dog, true);
    }, 320);
  }
}

function rewindSwipe() {
  if (state.swipeHistory.length === 0) {
    showToast("Nothing to undo. Yet.");
    return;
  }
  state.deckIndex = Math.max(0, state.deckIndex - 1);
  state.swipeHistory.pop();
  renderDeck();
  showToast("Rewound. Look again.");
}

// ============================================
// MATCH MODAL + CONFETTI
// ============================================

function showMatch(dog, isSuper = false) {
  $('#match-photo-mine').src = dogPhotoUrl(MY_DOG);
  $('#match-photo-theirs').src = dogPhotoUrl(dog);
  $('#match-sub').textContent = isSuper
    ? `${dog.name} got your Super Sniff. They're into it.`
    : `You and ${dog.name} sniffed each other.`;
  $('#match-modal').classList.remove('hidden');

  state.lastMatchId = dog.id;
  if (!state.conversations[dog.id]) {
    state.conversations[dog.id] = { messages: [], unread: false, time: 'now' };
  }

  fireConfetti();
  playMatchBarks();
  setTimeout(() => showMascot(isSuper ? 'super' : 'match'), 600);
}

function closeMatch() {
  $('#match-modal').classList.add('hidden');
  renderDeck();
}

function showCompatibility(otherId) {
  const other = dogById(otherId);
  if (!other) return;
  const report = COMPATIBILITY[other.type] || COMPATIBILITY['The Himbo'];
  const myZ = ZODIAC[MY_DOG.type] || ZODIAC['The Himbo'];
  const theirZ = ZODIAC[other.type] || ZODIAC['The Himbo'];

  $('#compat-scroll').innerHTML = `
    <div class="compat-hero">
      <div class="compat-hero-bg"></div>
      <div class="compat-hero-photos">
        <img src="${dogPhotoUrl(MY_DOG)}" class="compat-photo compat-photo-mine" alt="${MY_DOG.name}" />
        <span class="compat-x">×</span>
        <img src="${dogPhotoUrl(other)}" class="compat-photo compat-photo-theirs" alt="${other.name}" />
      </div>
      <div class="compat-names">${MY_DOG.name} <span class="compat-amp">&amp;</span> ${other.name}</div>
      <div class="compat-pct-wrap">
        <div class="compat-pct">${report.pct}<span class="compat-pct-sym">%</span></div>
        <div class="compat-pct-label">cosmic compatibility</div>
      </div>
    </div>

    <div class="compat-section">
      <div class="compat-headline">${report.headline}</div>
      <p class="compat-summary">${report.summary}</p>
    </div>

    <div class="compat-section">
      <div class="compat-section-label">The signs</div>
      <div class="compat-signs">
        <div class="compat-sign-card">
          <img class="compat-sign-photo" src="${dogPhotoUrl(MY_DOG)}" alt="" />
          <div class="compat-sign-name">${MY_DOG.name}</div>
          <div class="compat-sign-type">${MY_DOG.type}</div>
          <div class="compat-sign-detail">${myZ.sign}</div>
        </div>
        <div class="compat-sign-card">
          <img class="compat-sign-photo" src="${dogPhotoUrl(other)}" alt="" />
          <div class="compat-sign-name">${other.name}</div>
          <div class="compat-sign-type">${other.type}</div>
          <div class="compat-sign-detail">${theirZ.sign}</div>
        </div>
      </div>
    </div>

    <div class="compat-section">
      <div class="compat-section-label">Strengths together</div>
      <ul class="compat-list">
        ${report.strengths.map(s => `<li><span class="compat-bullet compat-good">✓</span><span>${escapeHtml(s)}</span></li>`).join('')}
      </ul>
    </div>

    <div class="compat-section">
      <div class="compat-section-label">Watch out for</div>
      <ul class="compat-list">
        <li><span class="compat-bullet compat-warn">!</span><span>${escapeHtml(report.challenge)}</span></li>
      </ul>
    </div>

    <div class="compat-section">
      <div class="compat-section-label">Best first activity</div>
      <div class="compat-activity">
        <span class="compat-activity-emoji">🌳</span>
        <p>${escapeHtml(report.activity)}</p>
      </div>
    </div>

    <div class="compat-section">
      <div class="compat-section-label">Your weekly horoscope</div>
      <div class="compat-horoscope">
        <span class="compat-horoscope-emoji">🌙</span>
        <p>${escapeHtml(report.horoscope)}</p>
      </div>
    </div>

    <div class="compat-cta-wrap">
      <button class="btn btn-primary btn-full" onclick="closeCompatibility(); goToTab('chat'); setTimeout(()=>openConversation('${otherId}'), 200);">Send ${other.name} a message</button>
      <button class="btn btn-ghost btn-full" onclick="closeCompatibility()">Close</button>
    </div>
  `;
  $('#compat-modal').classList.remove('hidden');
  $('#compat-scroll').scrollTop = 0;
  setTimeout(() => showMascot('compat'), 800);
}

function closeCompatibility() {
  $('#compat-modal').classList.add('hidden');
}

function fireConfetti() {
  if (typeof confetti !== 'function') return;
  const colors = ['#FF8E3C', '#EE4266', '#FFD23F', '#2D5A3D', '#FFB270'];
  // Initial burst
  confetti({
    particleCount: 80, spread: 70, origin: { y: 0.55 }, colors,
    shapes: ['circle', 'square'], scalar: 1.1,
  });
  // Side cannons
  setTimeout(() => {
    confetti({ particleCount: 40, angle: 60, spread: 55, origin: { x: 0, y: 0.7 }, colors });
    confetti({ particleCount: 40, angle: 120, spread: 55, origin: { x: 1, y: 0.7 }, colors });
  }, 220);
  setTimeout(() => {
    confetti({ particleCount: 60, spread: 100, origin: { y: 0.4 }, colors, shapes: ['circle'] });
  }, 480);
}

// ============================================
// DOG PROFILE MODAL (full screen)
// ============================================

function showDogProfile(dog) {
  const z = ZODIAC[dog.type] || ZODIAC['The Himbo'];
  const stats = dog.stats;
  const content = $('#dog-modal-content');
  content.innerHTML = `
    <div class="dog-hero">
      <img src="${dogPhotoUrl(dog)}" alt="${dog.name}" />
      <div class="dog-hero-overlay"></div>
      <div class="dog-hero-info">
        <div class="dog-hero-name">${dog.name}, ${dog.age}</div>
        <div class="dog-hero-meta">${dog.breed} · ${fmtDist(dog.distance)} · ${dog.size} · ${dog.gender === 'M' ? 'He' : 'She'}/${dog.gender === 'M' ? 'Him' : 'Her'}</div>
        <div style="margin-top:8px;">
          <span class="card-type">${dog.type}</span>
        </div>
      </div>
    </div>

    <div class="dog-section">
      <div class="section-label">Sniff Score™</div>
      <div class="score-badge">⭐ ${dog.sniffScore}% · A strong match</div>
    </div>

    <div class="dog-section">
      <div class="section-label">About ${dog.name}</div>
      <p class="bio-text">${dog.bio}</p>
    </div>

    ${dog.bowl ? `
    <div class="dog-section">
      <div class="section-label">Tonight in ${dog.name}'s bowl</div>
      <div class="bowl-card">
        <span class="bowl-emoji">🥣</span>
        <p class="bowl-text">${dog.bowl}</p>
      </div>
    </div>
    ` : ''}

    <div class="dog-section">
      <div class="section-label">Stats</div>
      <div class="stats-grid">
        <div class="stat-card"><div class="stat-emoji">🐿️</div><div class="stat-value">${stats.squirrels.toLocaleString()}</div><div class="stat-label">Squirrels chased</div></div>
        <div class="stat-card"><div class="stat-emoji">😴</div><div class="stat-value">${stats.naps}</div><div class="stat-label">Naps today</div></div>
        <div class="stat-card"><div class="stat-emoji">🦴</div><div class="stat-value">${stats.treats.toLocaleString()}</div><div class="stat-label">Treats demanded</div></div>
        <div class="stat-card"><div class="stat-emoji">📬</div><div class="stat-value">${stats.mailmen < 0 ? 'Friends' : stats.mailmen}</div><div class="stat-label">${stats.mailmen < 0 ? 'with mailman' : 'Mailmen survived'}</div></div>
      </div>
    </div>

    <div class="dog-section">
      <div class="section-label">Badges</div>
      <div class="badges-row">
        ${dog.badges.map(b => `<span class="badge-pill"><span class="b-emoji">${badgeEmoji(b)}</span>${b}</span>`).join('')}
      </div>
    </div>

    <div class="dog-section">
      <div class="section-label">Dog Zodiac</div>
      <div class="zodiac-card">
        <div class="zodiac-sign">${z.sign}</div>
        <div class="zodiac-reading">${z.reading}</div>
      </div>
    </div>

    <div class="dog-section">
      <div class="section-label">What ${dog.name} is thinking right now</div>
      <div class="thinking-card">
        <div class="thinking-card-bubble" id="thinking-bubble">"${pick(THOUGHTS_BY_TYPE[dog.type] || THOUGHTS_BY_TYPE['The Himbo'])}"</div>
        <button class="thinking-card-btn" onclick="rerollThought('${dog.type}')">🧠 Read mind again</button>
      </div>
    </div>

    <div class="dog-section">
      <div class="section-label">${dog.name}'s Pickup Line</div>
      <p class="bio-text" style="font-style:italic; color: var(--graphite);">"${dog.pickup}"</p>
    </div>

    <div class="dog-section">
      <div class="section-label">Vibes</div>
      <div class="badges-row">
        ${dog.vibe.map(v => `<span class="badge-pill">${v}</span>`).join('')}
        <span class="badge-pill">⚡ Energy ${dog.energy}/5</span>
        <span class="badge-pill">${dog.vaccinated ? '💉 Vaccinated' : '⚠️ Vax unknown'}</span>
      </div>
    </div>

    <div class="dog-section">
      <div class="section-label">Good with</div>
      <div class="badges-row">
        ${dog.goodWith.map(g => `<span class="badge-pill">✓ ${g}</span>`).join('')}
      </div>
    </div>

    <div class="dog-action-bar">
      <button class="btn btn-ghost" onclick="closeDogProfile(); handleSwipeFromProfile('pass')">Pass</button>
      <button class="btn btn-primary" onclick="closeDogProfile(); handleSwipeFromProfile('sniff')">Sniff</button>
    </div>
  `;
  $('#dog-modal').classList.remove('hidden');
}

function badgeEmoji(b) {
  const map = {
    'Certified Zoomie Expert': '💨', 'Mailman Survivor': '📬', 'Treat Hoarder': '🦴',
    'Knows Sit (Sometimes)': '🪑', 'Vacuum Nemesis': '🧹', 'Side-Eye Specialist': '👀',
    'Refuses Belly Rubs (Conditional)': '🚫', 'Tantrum Tutor': '😤', 'Friend To All': '💛',
    'Sock Thief': '🧦', 'Has Never Said No': '✨', 'Therapy Dog (Self-Appointed)': '🩺',
    'Aggressively Long': '📏', 'Burrito Connoisseur': '🌯', 'Tiny Rage': '😡',
    'Has Strong Opinions': '📢', 'IQ: Off The Charts': '🎓', 'Has Spreadsheet of Your Habits': '📊',
    'Sheep Adjacent': '🐑', 'Will Outrun You': '🏃', 'Snore Champion': '😴', 'Drama Coordinator': '🎭',
    'Cannot Be Outside in Summer': '☀️', 'Wise (Self-Reported)': '🧙', 'Vocal Virtuoso': '🎤',
    'Husband Material': '💍', 'Snow Crusader': '❄️', 'Wardrobe Stylist': '👗', 'Refuses Mud': '✨',
    'Tiny Tyrant': '👑', 'Bow Connoisseur': '🎀', 'Snort Master': '🐽', 'Gas Sommelier': '💨',
    "Sits On Things He Shouldn't": '🪑', 'Permanently Confused': '❓',
    'Soft Heart, Big Bark': '💕', 'Cried at Up': '😢', 'Bodyguard / Cuddler': '🛡️',
    'Plastic Bag Defeater': '🛍️', 'Negotiation Expert': '🤝', 'Allergic To Mediocrity': '✨',
    'Curls On Fleek': '💇', 'Herder Of Vibes': '✨', 'Two-Toned Eyes': '👀', 'Squirrel Philosopher': '🐿️',
    'Tennis Ball CEO': '🎾',
  };
  return map[b] || '🐾';
}

function rerollThought(type) {
  const bubble = document.getElementById('thinking-bubble');
  if (!bubble) return;
  const thoughts = THOUGHTS_BY_TYPE[type] || THOUGHTS_BY_TYPE['The Himbo'];
  let next = pick(thoughts);
  // Avoid same thought twice in a row
  for (let i = 0; i < 3 && '"' + next + '"' === bubble.textContent; i++) next = pick(thoughts);
  bubble.style.opacity = 0;
  setTimeout(() => { bubble.textContent = `"${next}"`; bubble.style.opacity = 1; }, 150);
}

function closeDogProfile() {
  $('#dog-modal').classList.add('hidden');
}

function handleSwipeFromProfile(action) {
  const top = $('#deck .card[data-stack="0"]');
  if (!top) return;
  if (action === 'sniff') top.classList.add('gone-right');
  else top.classList.add('gone-left');
  setTimeout(() => {
    state.swipeHistory.push({ id: top.dataset.dogId, action });
    state.deckIndex++;
    if (action === 'sniff' && state.matchesAvailable.includes(top.dataset.dogId)) {
      showMatch(dogById(top.dataset.dogId));
    } else {
      renderDeck();
    }
  }, 320);
}

// ============================================
// CHAT TAB
// ============================================

function renderChatList() {
  const list = $('#chat-list');
  const newSniffs = ['olive', 'hank', 'coco']; // dogs who sniffed you, no chat yet
  const matched = Object.keys(state.conversations);

  let html = '';

  // New sniffs strip
  html += `
    <div class="new-sniffs-strip">
      <div class="new-sniffs-label">New sniffs · they like you</div>
      <div class="new-sniffs-row">
        ${newSniffs.map(id => {
          const d = dogById(id);
          if (!d) return '';
          return `<div class="sniff-chip" onclick="showDogProfile(dogById('${id}'))">
            <img class="sniff-chip-img" src="${dogPhotoUrl(d)}" alt="${d.name}" />
            <div class="sniff-chip-name">${d.name}</div>
          </div>`;
        }).join('')}
      </div>
    </div>
  `;

  // Conversations
  matched.forEach(dogId => {
    const conv = state.conversations[dogId];
    const dog = dogById(dogId);
    if (!dog) return;
    const last = conv.messages[conv.messages.length - 1];
    const preview = last ? (last.from === 'me' ? 'You: ' : '') + last.text : 'Say hi!';
    html += `
      <div class="chat-row ${conv.unread ? 'unread' : ''}" onclick="openConversation('${dogId}')">
        <img class="chat-avatar" src="${dogPhotoUrl(dog)}" alt="${dog.name}" />
        <div class="chat-text">
          <div class="chat-name">${dog.name} <span class="heart">🐾</span></div>
          <div class="chat-preview">${escapeHtml(preview).slice(0, 60)}</div>
        </div>
        <div class="chat-time">${conv.time || 'now'}</div>
      </div>
    `;
  });

  list.innerHTML = html;
}

function escapeHtml(s) {
  return String(s).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
}

// ============================================
// CONVERSATION MODAL
// ============================================

function openConversation(dogId) {
  state.currentConvDogId = dogId;
  const conv = state.conversations[dogId];
  const dog = dogById(dogId);
  if (!dog) return;
  conv.unread = false;

  $('#conv-name').textContent = `${dog.name}`;
  $('#conv-sub').textContent = `with their human · online now`;
  $('#conv-avatar').src = dogPhotoUrl(dog);

  renderMessages();
  $('#conv-modal').classList.remove('hidden');
  $('#conv-input-text').value = '';

  // Scroll to bottom
  setTimeout(() => {
    const m = $('#conv-messages');
    m.scrollTop = m.scrollHeight;
  }, 50);
}

function renderMessages() {
  const dogId = state.currentConvDogId;
  const conv = state.conversations[dogId];
  const m = $('#conv-messages');
  if (!conv || !conv.messages.length) {
    m.innerHTML = `<div class="msg-meta" style="margin-top:30px;">You sniffed each other. Say hi!</div>`;
    return;
  }
  m.innerHTML = conv.messages.map(msg => {
    if (msg.type === 'meetup') {
      return `<div class="msg msg-meetup">
        <div class="msg-meetup-title">📅 Meetup proposed</div>
        <div class="msg-meetup-detail"><strong>When:</strong> ${msg.when}</div>
        <div class="msg-meetup-detail"><strong>Where:</strong> ${msg.where}</div>
        ${msg.note ? `<div class="msg-meetup-detail">"${msg.note}"</div>` : ''}
        <div class="msg-meetup-actions">
          <button class="msg-meetup-yes" onclick="acceptMeetup()">Accept</button>
          <button class="msg-meetup-no" onclick="declineMeetup()">Decline</button>
        </div>
      </div>`;
    }
    if (msg.type === 'firstDatePack') {
      return `<div class="msg msg-pack">
        <div class="pack-header">
          <span class="pack-emoji">🎀</span>
          <div>
            <div class="pack-title">First Date Pack</div>
            <div class="pack-sub">${MY_DOG.name} × ${escapeHtml(msg.with)}</div>
          </div>
        </div>
        <ul class="pack-list">
          <li class="pack-item" style="animation-delay: 0.05s"><span class="pack-check">✓</span><span class="pack-icon">🎾</span><span>2 tennis balls (1 to share, 1 for emergencies)</span></li>
          <li class="pack-item" style="animation-delay: 0.20s"><span class="pack-check">✓</span><span class="pack-icon">💧</span><span>Water for both pups</span></li>
          <li class="pack-item" style="animation-delay: 0.35s"><span class="pack-check">✓</span><span class="pack-icon">🦴</span><span>Backup snack (just in case)</span></li>
          <li class="pack-item" style="animation-delay: 0.50s"><span class="pack-check">✓</span><span class="pack-icon">📸</span><span>Camera ready (capture the moment)</span></li>
          <li class="pack-item" style="animation-delay: 0.65s"><span class="pack-check">✓</span><span class="pack-icon">🌳</span><span>Meet near the big tree (better photos)</span></li>
          <li class="pack-item pack-icebreaker" style="animation-delay: 0.85s"><span class="pack-check">💬</span><span class="pack-icon">&nbsp;</span><span><em>Icebreaker: "${escapeHtml(msg.icebreaker)}"</em></span></li>
        </ul>
      </div>`;
    }
    return `<div class="msg msg-${msg.from}">${escapeHtml(msg.text)}</div>`;
  }).join('');

  // Typing indicator (walking paw prints)
  if (state.typing) {
    m.innerHTML += `
      <div class="msg msg-them msg-typing">
        <span class="typing-paw">🐾</span>
        <span class="typing-paw">🐾</span>
        <span class="typing-paw">🐾</span>
      </div>
    `;
  }
}

function sendMessage() {
  const input = $('#conv-input-text');
  let text = input.value.trim();
  if (!text) return;
  if (state.borkMode) {
    text = borkTranslate(text);
  }
  const conv = state.conversations[state.currentConvDogId];
  conv.messages.push({ from: 'me', text });
  input.value = '';
  renderMessages();
  const m = $('#conv-messages');
  m.scrollTop = m.scrollHeight;

  // Show walking-paw typing indicator, then auto-reply
  state.typing = true;
  renderMessages();
  m.scrollTop = m.scrollHeight;
  setTimeout(() => {
    state.typing = false;
    const reply = autoReply(state.currentConvDogId, text);
    if (reply) {
      conv.messages.push({ from: 'them', text: reply });
    }
    renderMessages();
    m.scrollTop = m.scrollHeight;
  }, 1200 + Math.random() * 700);
}

function autoReply(dogId, theirMessage) {
  const dog = dogById(dogId);
  const replies = {
    'tofu': ['HII!! 🥹', 'wait this is so exciting', 'Tofu is wagging so hard the table is shaking', 'omg yes lets do it'],
    'mochi': ['k', 'mochi acknowledges your message', "she's pretending she didn't see it but she did", 'mhm.'],
    'bruno': ['Bruno demands the chicken treats', "treaty negotiations open", 'send proof of treats first', 'pictures or it didn\'t happen'],
    'luna': ['ok give me 4 hours to draft a response', 'I\'ve made a flowchart', 'have you considered: yes', 'noted. logged. analyzed.'],
    'kevin': ['kevin says hello', 'he\'s asleep again', 'mmhm', '...he means well'],
    'pickles': ['pickles barked at the screen. translation pending.', 'ok but is there food', 'long boi approves', 'short legs, big yes'],
    'olive': ['I was just thinking about you. obviously.', 'we should match outfits', 'yes. yes yes yes.', 'try to keep up'],
    'hank': ['HENK SAYS HI 🥹', 'he\'s drooling. that\'s a yes.', 'big boi big yes', 'aw shucks'],
    'coco': ['I\'ll need to review your CV first. kidding. (am I?)', 'acceptable.', 'we can negotiate terms', 'continue.'],
    'rocco': ['*snort*', 'rocco fell asleep mid-message', 'bork.', 'ok ok ok ok'],
    'maple': ['I have herded my thoughts into a yes', 'let\'s sync calendars', 'maple approves with 4 paws', 'noted in three colors'],
    'daisy': ['I HAVE BEEN WAITING FOREVER TO HEAR FROM YOU', 'this is the best day OF MY LIFE', '🎤 *howling intensifies*', 'YESSSS'],
  };
  const arr = replies[dogId] || ['🐾', 'borf!', 'WOOF', 'love that for us'];
  return pick(arr);
}

function toggleBorkMode() {
  state.borkMode = !state.borkMode;
  const btn = $('#btn-bork-toggle');
  btn.classList.toggle('on', state.borkMode);
  $('#bork-state').textContent = state.borkMode ? 'ON' : 'OFF';
  if (state.borkMode) {
    showToast('🐶 Bork Translator engaged. Speak human, send dog.');
    showMascot('bork');
  }
}

function borkTranslate(text) {
  // Replace each word with a dog noise
  const words = text.split(/\s+/);
  const ALL_CAPS = text === text.toUpperCase() && /[A-Z]/.test(text);
  const punct = text.match(/[!?]+$/);
  const out = words.map(w => {
    const len = w.replace(/[^a-zA-Z]/g, '').length;
    if (!len) return w;
    let bork;
    if (len <= 2) bork = pick(['bork', 'arf', 'yip', 'borf']);
    else if (len <= 5) bork = pick(['woof', 'bork bork', 'arf arf', 'WOOF', 'borf borf']);
    else if (len <= 8) bork = pick(['WOOOF WOOF', 'bork bork bork', 'BARK BARK', 'awoo woof', 'BORF BORK']);
    else bork = pick(['AWOOOOOOO BARK BARK', 'BORK BORK BORK BORK', 'WOOF WOOF WOOOF BORK', 'AGGRESSIVE TAIL WAG']);
    if (ALL_CAPS) bork = bork.toUpperCase();
    return bork;
  });
  let result = out.join(' ');
  if (punct) result = result.replace(/[!?]*$/, '') + punct[0];
  if (Math.random() < 0.4) result += ' 🐾';
  return result;
}

function proposeMeetup() {
  const conv = state.conversations[state.currentConvDogId];
  if (!conv) return;
  conv.messages.push({
    type: 'meetup',
    when: 'Saturday at 10:00 AM',
    where: 'Riverside Dog Park',
    note: 'Bring tennis balls!',
    from: 'me',
  });
  renderMessages();
  const m = $('#conv-messages');
  m.scrollTop = m.scrollHeight;
  showToast("Meetup proposed 📅");
  showMascot('meetup');
}

const ICEBREAKERS = [
  "So, what's your stance on squirrels?",
  "Tennis balls or fetch sticks? (Trick question. Both.)",
  "When's your prime nap window?",
  "Mailman: friend or foe?",
  "Is the vacuum a personal enemy of yours too?",
  "Best snack you've ever stolen?",
];

function acceptMeetup() {
  const conv = state.conversations[state.currentConvDogId];
  const dog = dogById(state.currentConvDogId);
  conv.messages.push({ from: 'them', text: '🎉 it\'s a date. (a play date.)' });
  renderMessages();
  showToast("Added to your Pawty calendar 🐾");

  // Drop the First Date Pack a beat later, as a generated card
  setTimeout(() => {
    conv.messages.push({
      type: 'firstDatePack',
      from: 'me',
      with: dog ? dog.name : 'them',
      icebreaker: pick(ICEBREAKERS),
    });
    renderMessages();
    const m = $('#conv-messages');
    m.scrollTop = m.scrollHeight;
  }, 700);
}

function declineMeetup() {
  const conv = state.conversations[state.currentConvDogId];
  conv.messages.push({ from: 'them', text: 'next time! 💛' });
  renderMessages();
}

function closeConversation() {
  $('#conv-modal').classList.add('hidden');
  state.currentConvDogId = null;
  renderChatList();
}

// ============================================
// PLANS TAB
// ============================================

function renderPlans() {
  const list = $('#plans-list');
  list.innerHTML = PLANS.map(p => {
    const dog = dogById(p.dogId);
    if (!dog) return '';
    return `
      <div class="plan-card">
        <div class="plan-header">
          <div class="plan-avatars">
            <img src="${dogPhotoUrl(MY_DOG)}" alt="my dog" />
            <img src="${dogPhotoUrl(dog)}" alt="${dog.name}" />
          </div>
          <div class="plan-title-wrap">
            <div class="plan-with">${MY_DOG.name} & ${dog.name}</div>
            <div class="plan-when"><strong>${p.date}</strong> · ${p.time}</div>
          </div>
        </div>
        <div class="plan-where">${p.location}</div>
        ${p.notes ? `<div style="font-size:13px;color:var(--graphite);font-style:italic;">"${p.notes}"</div>` : ''}
        <div class="plan-actions">
          <button>Directions</button>
          <button onclick="openConversation('${p.dogId}')">Message</button>
          <button class="primary">I'm in</button>
        </div>
      </div>
    `;
  }).join('') + `
    <div style="text-align:center; padding: 24px; color: var(--graphite); font-size:13px;">
      <div style="font-size:32px; margin-bottom:8px;">🦴</div>
      That's it for now. Sniff more dogs to fill this up!
    </div>
  `;
}

// ============================================
// BORK BOARD
// ============================================

function renderBorkFeed() {
  const feed = $('#bork-feed');
  // Featured Meet-Cute card pinned at top
  const initialCute = state.currentMeetCute || MEET_CUTES[0];
  let html = `
    <div class="meetcute-card" id="meetcute-card">
      <div class="meetcute-label">✨ Today's meet-cute</div>
      <div class="meetcute-photos">
        <img id="meetcute-img-a" src="${dogPhotoUrl(dogById(initialCute.dogA))}" alt="" />
        <span class="meetcute-heart">🐾</span>
        <img id="meetcute-img-b" src="${dogPhotoUrl(dogById(initialCute.dogB))}" alt="" />
      </div>
      <p class="meetcute-story" id="meetcute-story">${escapeHtml(initialCute.story)}</p>
      <button class="meetcute-btn" onclick="rollMeetCute()">
        <span>🎲</span><span>Generate another</span>
      </button>
    </div>
  `;
  state.currentMeetCute = initialCute;

  html += BORK_FEED.map(item => {
    if (item.type === 'event') {
      return `
        <div class="bork-card bork-event">
          <div class="bork-event-title">${item.title}</div>
          <div class="bork-event-meta">${item.meta}</div>
          <div class="bork-card-text">${item.text}</div>
          <button class="bork-event-rsvp" style="margin-top:10px;">RSVP 🐾</button>
        </div>
      `;
    }
    const dog = dogById(item.avatar);
    return `
      <div class="bork-card">
        <div class="bork-card-header">
          ${dog ? `<img class="bork-card-avatar" src="${dogPhotoUrl(dog)}" alt="${item.author}" />` : '<div class="bork-card-avatar"></div>'}
          <div style="flex:1;">
            <div class="bork-card-name">${item.author}</div>
            <div class="bork-card-time">${item.time}</div>
          </div>
        </div>
        <div class="bork-card-text">${formatTags(item.text)}</div>
      </div>
    `;
  }).join('');
  feed.innerHTML = html;
}

// =================================================================
// TAIL TALES — story strip + story modal
// =================================================================

function renderTailTales() {
  const strip = $('#tail-tales-strip');
  if (!strip) return;
  const dogIds = Object.keys(TALES);
  if (!state.viewedTales) state.viewedTales = new Set();
  strip.innerHTML = dogIds.map(id => {
    const d = dogById(id);
    if (!d) return '';
    const viewed = state.viewedTales.has(id);
    return `
      <button class="tale-chip ${viewed ? 'viewed' : ''}" onclick="openTale('${id}')">
        <span class="tale-ring">
          <img src="${dogPhotoUrl(d, 200)}" alt="${d.name}" />
        </span>
        <span class="tale-chip-name">${d.name.toLowerCase()}</span>
      </button>
    `;
  }).join('');
}

function openTale(dogId) {
  const dog = dogById(dogId);
  const tale = TALES[dogId];
  if (!dog || !tale) return;
  if (!state.viewedTales) state.viewedTales = new Set();

  $('#tale-bg').style.backgroundImage = `url("${dogPhotoUrl(dog, 600)}")`;
  $('#tale-author-photo').src = dogPhotoUrl(dog, 200);
  $('#tale-author-name').textContent = dog.name;
  $('#tale-author-meta').textContent = `${dog.breed} · just now`;
  $('#tale-text').textContent = `"${tale}"`;
  $('#tale-modal').classList.remove('hidden');

  // Animate progress bar (auto-dismiss after 6s)
  const prog = $('#tale-progress');
  prog.style.transition = 'none';
  prog.style.transform = 'scaleX(0)';
  void prog.offsetWidth;
  prog.style.transition = 'transform 6s linear';
  prog.style.transform = 'scaleX(1)';

  state.currentTaleId = dogId;
  state.viewedTales.add(dogId);

  // Auto-close after 6 seconds
  clearTimeout(state._taleTimer);
  state._taleTimer = setTimeout(() => closeTale(), 6000);

  playTinyYip(0.95 + Math.random() * 0.3);
}

function closeTale() {
  $('#tale-modal').classList.add('hidden');
  clearTimeout(state._taleTimer);
  renderTailTales(); // re-render with viewed state
}

function nextTale() {
  // Move to next dog in TALES object
  const ids = Object.keys(TALES);
  const cur = ids.indexOf(state.currentTaleId);
  if (cur === -1 || cur === ids.length - 1) {
    closeTale();
    return;
  }
  openTale(ids[cur + 1]);
}

function prevTale() {
  const ids = Object.keys(TALES);
  const cur = ids.indexOf(state.currentTaleId);
  if (cur <= 0) return;
  openTale(ids[cur - 1]);
}

// =================================================================
// MASCOT BISCUIT — corner reactions to actions
// =================================================================

const MASCOT_LINES = {
  match:    ["Yes yes yes!", "Wagging.", "BEST DAY.", "Sniff approved.", "Locked in."],
  pass:     ["Onto the next.", "Yeah, no.", "Sniff continues.", "Next."],
  super:    ["Bold move!", "Dramatic. Love it.", "Going for it!"],
  compat:   ["Reading this twice 🤓", "We're a vibe.", "Cosmic stuff."],
  bork:     ["Now you're speaking my language.", "WOOF WOOF (translation: hi)"],
  meetup:   ["Bring snacks!", "Don't forget the tennis ball."],
  meetcute: ["Awwww.", "Cinema.", "I'd watch this."],
  treat:    ["TREATS! TREATS!! 🦴", "Where did these come from", "I'm a good boy"],
};

function showMascot(category, customText) {
  const m = $('#mascot');
  const bubble = $('#mascot-bubble');
  if (!m || !bubble) return;
  $('#mascot-photo').src = dogPhotoUrl(MY_DOG, 160);
  const text = customText || pick(MASCOT_LINES[category] || ['🐾']);
  bubble.textContent = text;
  m.classList.remove('hidden', 'show');
  void m.offsetWidth;
  m.classList.add('show');
  clearTimeout(state._mascotTimer);
  state._mascotTimer = setTimeout(() => {
    m.classList.remove('show');
    setTimeout(() => m.classList.add('hidden'), 300);
  }, 2200);
}

// =================================================================
// TREAT SHOWER — easter egg: tap brand 5x in 3s
// =================================================================

function startTreatShower() {
  const shower = $('#treat-shower');
  if (!shower) return;
  shower.classList.remove('hidden');
  shower.innerHTML = '';
  const items = ['🦴', '🐾', '🎾', '❤️', '✨', '🐶', '🌟'];
  const N = 38;
  for (let i = 0; i < N; i++) {
    const el = document.createElement('span');
    el.className = 'treat-particle';
    el.textContent = pick(items);
    el.style.left = (Math.random() * 100) + '%';
    el.style.fontSize = (18 + Math.random() * 22) + 'px';
    el.style.animationDuration = (1.6 + Math.random() * 1.6) + 's';
    el.style.animationDelay = (Math.random() * 0.6) + 's';
    el.style.transform = `rotate(${(Math.random() * 60 - 30)}deg)`;
    shower.appendChild(el);
  }
  showToast('🦴 TREAT SHOWER!');
  // Bark chorus
  playMatchBarks();
  setTimeout(() => playMatchBarks(), 600);
  setTimeout(() => {
    shower.classList.add('hidden');
    shower.innerHTML = '';
  }, 3500);
  showMascot('treat');
}

let _brandTaps = [];
function onBrandTap() {
  const now = Date.now();
  _brandTaps = _brandTaps.filter(t => now - t < 3000);
  _brandTaps.push(now);
  if (_brandTaps.length >= 5) {
    _brandTaps = [];
    startTreatShower();
  }
}

function rollMeetCute() {
  // Pick a different one than current
  let next = pick(MEET_CUTES);
  for (let i = 0; i < 6 && next === state.currentMeetCute; i++) next = pick(MEET_CUTES);
  state.currentMeetCute = next;
  showMascot('meetcute');
  const card = $('#meetcute-card');
  const story = $('#meetcute-story');
  const imgA = $('#meetcute-img-a');
  const imgB = $('#meetcute-img-b');
  if (!card) return;
  // Soft fade transition
  card.classList.add('rolling');
  setTimeout(() => {
    if (story) story.textContent = next.story;
    if (imgA) imgA.src = dogPhotoUrl(dogById(next.dogA));
    if (imgB) imgB.src = dogPhotoUrl(dogById(next.dogB));
    card.classList.remove('rolling');
  }, 220);
}

function formatTags(text) {
  return text.replace(/#(\w+)/g, '<span class="hashtag">#$1</span>');
}

// ============================================
// MY PUP TAB
// ============================================

function renderMyPup() {
  const c = $('#my-pup-content');
  const totalSniffs = state.swipeHistory.filter(s => s.action === 'sniff' || s.action === 'super').length;
  const matchCount = Object.keys(state.conversations).length;
  const meetupCount = PLANS.length;

  c.innerHTML = `
    <div class="pup-hero">
      <img src="${dogPhotoUrl(MY_DOG)}" alt="${MY_DOG.name}" />
      <button class="pup-edit">Edit</button>
      <div class="pup-hero-info">
        <div class="pup-hero-name">${MY_DOG.name}, ${MY_DOG.age}</div>
        <div class="pup-hero-meta">${MY_DOG.breed} · ${MY_DOG.size} · ${MY_DOG.type}</div>
      </div>
    </div>

    <div class="pup-stats-row">
      <div class="pup-stat"><div class="pup-stat-value">${totalSniffs}</div><div class="pup-stat-label">Sniffs sent</div></div>
      <div class="pup-stat"><div class="pup-stat-value">${matchCount}</div><div class="pup-stat-label">Matches</div></div>
      <div class="pup-stat"><div class="pup-stat-value">${meetupCount}</div><div class="pup-stat-label">Meetups</div></div>
    </div>

    <div class="gold-card">
      <div class="gold-card-title">Canoodle Gold</div>
      <div class="gold-card-sub">See who sniffed you · 5 Super Sniffs / week · Boost · Bork Translator unlimited</div>
      <button class="gold-card-btn">Try free for 7 days</button>
    </div>

    <div class="pup-section-title">${MY_DOG.name}'s bio</div>
    <div class="pup-list">
      <div class="pup-list-row">
        <span class="row-emoji">📝</span>
        <span class="row-text" style="font-size:13.5px;color:var(--graphite);">"${MY_DOG.bio}"</span>
      </div>
    </div>

    <div class="pup-section-title">Settings</div>
    <div class="pup-list">
      <div class="pup-list-row" onclick="showToast('Discovery: 25 mi · all sizes · vaccinated only')">
        <span class="row-emoji">🎯</span><span class="row-text">Discovery</span><span class="row-arrow">›</span>
      </div>
      <div class="pup-list-row" onclick="showToast('Notifications: matches, messages, meetups (no marketing)')">
        <span class="row-emoji">🔔</span><span class="row-text">Notifications</span><span class="row-arrow">›</span>
      </div>
      <div class="pup-list-row" onclick="showToast('Privacy: location obscured · last name hidden')">
        <span class="row-emoji">🔒</span><span class="row-text">Privacy</span><span class="row-arrow">›</span>
      </div>
      <div class="pup-list-row" onclick="showToast('We protect dogs from creeps. Report anyone, anytime.')">
        <span class="row-emoji">🛡️</span><span class="row-text">Trust & Safety</span><span class="row-arrow">›</span>
      </div>
      <div class="pup-list-row" onclick="showToast('Help us, help dogs.')">
        <span class="row-emoji">❓</span><span class="row-text">Help & Support</span><span class="row-arrow">›</span>
      </div>
    </div>

    <div class="pup-section-title">More</div>
    <div class="pup-list">
      <div class="pup-list-row" onclick="showToast('Add a second dog (Gold feature)')">
        <span class="row-emoji">➕</span><span class="row-text">Add another dog</span><span class="row-arrow">›</span>
      </div>
      <div class="pup-list-row" onclick="showToast('We will be sad. But ok.')">
        <span class="row-emoji">👋</span><span class="row-text">Log out</span><span class="row-arrow">›</span>
      </div>
    </div>

    <div style="text-align:center;padding:28px 16px 12px;color:var(--fog);font-size:11px;">
      Canoodle v1.0 — Made with 🐾 for dogs everywhere.
    </div>
  `;
}

// ============================================
// EVENT WIRING
// ============================================

function wireEvents() {
  // Welcome → start app
  $('#btn-start').addEventListener('click', startApp);

  // Tab bar
  $$('.tab').forEach(t => {
    t.addEventListener('click', () => goToTab(t.dataset.tab));
  });

  // Action bar
  $('#btn-pass').addEventListener('click', () => handleSwipe('pass'));
  $('#btn-sniff').addEventListener('click', () => handleSwipe('sniff'));
  $('#btn-super').addEventListener('click', () => handleSwipe('super'));
  $('#btn-rewind').addEventListener('click', rewindSwipe);
  $('#btn-boost').addEventListener('click', () => showToast('🚀 Boosted! ' + MY_DOG.name + ' is top dog for 30 minutes.'));
  $('#btn-filter').addEventListener('click', () => showToast('Filters: 25 mi · all sizes · all energies'));
  $('#btn-reset').addEventListener('click', () => {
    state.deckIndex = 0;
    state.swipeHistory = [];
    renderDeck();
    showToast('Pack reloaded 🐾');
  });

  // Match modal
  $('#btn-match-message').addEventListener('click', () => {
    const id = state.lastMatchId;
    closeMatch();
    if (id) {
      goToTab('chat');
      setTimeout(() => openConversation(id), 200);
    }
  });
  $('#btn-match-keep').addEventListener('click', closeMatch);
  $('#btn-match-compat').addEventListener('click', () => {
    const id = state.lastMatchId;
    if (!id) return;
    closeMatch();
    setTimeout(() => showCompatibility(id), 100);
  });
  $('#btn-compat-close').addEventListener('click', closeCompatibility);

  // Dog modal
  $('#btn-dog-close').addEventListener('click', closeDogProfile);

  // Conversation
  $('#btn-conv-back').addEventListener('click', closeConversation);
  $('#btn-conv-info').addEventListener('click', () => {
    const dog = dogById(state.currentConvDogId);
    if (dog) showDogProfile(dog);
  });
  $('#btn-send').addEventListener('click', sendMessage);
  $('#conv-input-text').addEventListener('keydown', (e) => {
    if (e.key === 'Enter') { e.preventDefault(); sendMessage(); }
  });
  $('#btn-bork-toggle').addEventListener('click', toggleBorkMode);
  $('#btn-meetup').addEventListener('click', proposeMeetup);

  // Chat tabs (matches/new/plans) — visual only
  $$('.chat-tab').forEach(t => {
    t.addEventListener('click', () => {
      $$('.chat-tab').forEach(x => x.classList.remove('active'));
      t.classList.add('active');
      if (t.dataset.chatTab === 'plans') goToTab('plans');
    });
  });
  $$('.plan-tab').forEach(t => {
    t.addEventListener('click', () => {
      $$('.plan-tab').forEach(x => x.classList.remove('active'));
      t.classList.add('active');
    });
  });

  // Tail Tales modal controls
  const taleClose = $('#btn-tale-close');
  const taleNext = $('#tale-tap-next');
  const talePrev = $('#tale-tap-prev');
  if (taleClose) taleClose.addEventListener('click', closeTale);
  if (taleNext) taleNext.addEventListener('click', nextTale);
  if (talePrev) talePrev.addEventListener('click', prevTale);

  // Easter egg — tap header brand 5 times in 3 seconds
  $$('.header-brand').forEach(el => el.addEventListener('click', onBrandTap));
}

// Make some functions global for inline onclick handlers
window.showDogProfile = showDogProfile;
window.dogById = dogById;
window.openConversation = openConversation;
window.closeDogProfile = closeDogProfile;
window.handleSwipeFromProfile = handleSwipeFromProfile;
window.acceptMeetup = acceptMeetup;
window.declineMeetup = declineMeetup;
window.rerollThought = rerollThought;
window.showToast = showToast;
window.rollMeetCute = rollMeetCute;
window.showCompatibility = showCompatibility;
window.closeCompatibility = closeCompatibility;
window.goToTab = goToTab;
window.openTale = openTale;
window.closeTale = closeTale;

// ============================================
// INIT
// ============================================

function init() {
  wireEvents();
  wireWelcomeInteractions();
  populateWelcomeHero();
  // Start photo loading immediately so deck is ready when user taps "Let's go"
  loadDogPhotos();
  // Render initial state of pages (will use placeholders until photos load)
  renderDeck();
  renderTailTales();
  renderChatList();
  renderPlans();
  renderBorkFeed();
  renderMyPup();
}

document.addEventListener('DOMContentLoaded', init);
