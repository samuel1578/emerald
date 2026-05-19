export type Tour = {
  id: string
  title: string
  location: string
  image: string
  duration: string
  rating: number
  reviews: number
  price: number
  category: "Cultural" | "Adventure" | "Luxury" | "Wellness" | "Family"
  description: string
  isFeatured: boolean
}

export type Campaign = {
  id: string
  title: string
  destination: string
  tag: string
  status: "upcoming" | "active" | "past"
  featured: boolean
  featuredOrder: number
  teaserImage: string
  targetDate: string
  dateRange: string
  duration: string
  maxGuests: number
  pricing: { currency: string; singleOccupancy: number; doubleOccupancy: number }
  includes: string[]
  excludes: string[]
  description: string
  whatsappNumber: string
}

export const tours: Tour[] = [
  {
    id: "santorini-sunsets",
    title: "Santorini Sunsets & Wineries",
    location: "Greece",
    image: "/hero/santorini.jpg",
    duration: "7 days",
    rating: 4.9,
    reviews: 248,
    price: 2890,
    category: "Luxury",
    description: "Cliffside villas, private catamarans and golden-hour vineyards across the Aegean.",
    isFeatured: true,
  },
  {
    id: "bali-hidden",
    title: "Bali — Hidden Temples Route",
    location: "Indonesia",
    image: "/hero/bali.jpg",
    duration: "10 days",
    rating: 4.8,
    reviews: 412,
    price: 2150,
    category: "Cultural",
    description: "Rice terraces, secret beaches and ancient ceremonies guided by Balinese elders.",
    isFeatured: true,
  },
  {
    id: "serengeti-safari",
    title: "Serengeti Migration Safari",
    location: "Tanzania",
    image: "/hero/safari.jpg",
    duration: "8 days",
    rating: 5.0,
    reviews: 187,
    price: 4980,
    category: "Adventure",
    description: "Track the great migration in private 4x4s with tented camps under the stars.",
    isFeatured: true,
  },
  {
    id: "alps-emerald",
    title: "Emerald Alps Hiking Trail",
    location: "Switzerland",
    image: "/hero/alps.jpg",
    duration: "6 days",
    rating: 4.9,
    reviews: 156,
    price: 3120,
    category: "Adventure",
    description: "Glacial lakes, ridge-line trails and Michelin-starred mountain lodges.",
    isFeatured: true,
  },
  {
    id: "morocco-souk",
    title: "Marrakech & Sahara Nights",
    location: "Morocco",
    image: "/hero/morocco.jpg",
    duration: "9 days",
    rating: 4.7,
    reviews: 321,
    price: 1980,
    category: "Cultural",
    description: "Spice souks, riad palaces and starlit dunes with a private Berber camp.",
    isFeatured: true,
  },
  {
    id: "tokyo-neon",
    title: "Tokyo — Neon & Tradition",
    location: "Japan",
    image: "/hero/tokyo.jpg",
    duration: "8 days",
    rating: 4.9,
    reviews: 289,
    price: 3450,
    category: "Cultural",
    description: "From Shibuya nights to Kyoto tea houses — a study in contrast and craft.",
    isFeatured: true,
  },
  {
    id: "maldives-overwater",
    title: "Maldives Overwater Escape",
    location: "Maldives",
    image: "/hero/maldives.jpg",
    duration: "5 days",
    rating: 5.0,
    reviews: 412,
    price: 5680,
    category: "Wellness",
    description: "Overwater villas, candlelit dinners on sandbanks, and silent reef snorkels.",
    isFeatured: true,
  },
  {
    id: "iceland-aurora",
    title: "Iceland Aurora Expedition",
    location: "Iceland",
    image: "/hero/iceland.jpg",
    duration: "6 days",
    rating: 4.8,
    reviews: 198,
    price: 3290,
    category: "Adventure",
    description: "Glacier caves, black-sand beaches and northern lights from a remote lodge.",
    isFeatured: true,
  },
]

export const destinations = [
  { name: "Santorini", country: "Greece", image: "/hero/santorini.jpg", tours: 12 },
  { name: "Bali", country: "Indonesia", image: "/hero/bali.jpg", tours: 18 },
  { name: "Serengeti", country: "Tanzania", image: "/hero/safari.jpg", tours: 9 },
  { name: "Swiss Alps", country: "Switzerland", image: "/hero/alps.jpg", tours: 14 },
  { name: "Marrakech", country: "Morocco", image: "/hero/morocco.jpg", tours: 11 },
  { name: "Tokyo", country: "Japan", image: "/hero/tokyo.jpg", tours: 16 },
  { name: "Maldives", country: "Maldives", image: "/hero/maldives.jpg", tours: 8 },
  { name: "Reykjavík", country: "Iceland", image: "/hero/iceland.jpg", tours: 10 },
]

export const testimonials = [
  {
    quote: "Emeralds Eagle made me see travel differently. I never thought a trip this seamless was possible from Accra — every detail was handled before I even thought to ask.",
    name: "Kwame Asante",
    role: "Graduate Student, University of Ghana",
    avatar: "/avatars/a1.jpg",
  },
  {
    quote: "I've used agencies before but nothing like this. From the airport pickup to the last dinner, it felt like travelling with people who actually cared.",
    name: "Abena Mensah",
    role: "Marketing Manager, Accra",
    avatar: "/avatars/a2.jpg",
  },
  {
    quote: "As a business owner I don't have time for stress. Emeralds Eagle gave me a holiday that actually felt like a holiday. I've already referred four colleagues.",
    name: "Kofi Boateng",
    role: "Business Owner, Kumasi",
    avatar: "/avatars/a3.jpg",
  },
  {
    quote: "The itinerary read like a film script and felt like one too. This is what travel should be — intentional, warm, and completely unforgettable.",
    name: "Akosua Darko",
    role: "Lecturer, KNUST",
    avatar: "/avatars/a4.jpg",
  },
]

export const campaigns: Campaign[] = [
  {
    id: "ghana-june-2026",
    title: "Xperience Ghana",
    destination: "Ghana",
    tag: "Cultural",
    status: "upcoming",
    featured: true,
    featuredOrder: 1,
    teaserImage: "/events/Teaser.jpeg",
    targetDate: "2026-06-01T00:00:00.000Z",
    dateRange: "June 2026",
    duration: "TBC",
    maxGuests: 20,
    pricing: { currency: "USD", singleOccupancy: 2200, doubleOccupancy: 3600 },
    includes: [
      "Accommodation",
      "Airport pickup & drop-off",
      "Transportation",
      "Tours in Accra, Cape Coast, Elmina, Tamale, Aburi & Akosombo/Safari Valley",
      "Tour activities & entry fees",
      "Selected meals",
      "Tour guide/support",
    ],
    excludes: ["International flights", "Visa fees", "Personal expenses", "Extra meals & drinks", "Travel insurance"],
    description:
      "Experience the best of Ghana — from the streets of Accra to the shores of Cape Coast. A fully guided cultural journey built for the curious traveller.",
    whatsappNumber: "+233503578007",
  },
  {
    id: "aurora-iceland",
    title: "Aurora Nights · Iceland",
    destination: "Iceland",
    tag: "Adventure",
    status: "upcoming",
    featured: false,
    featuredOrder: 2,
    teaserImage: "/hero/iceland.jpg",
    targetDate: "2026-03-14T00:00:00.000Z",
    dateRange: "Mar 14 — 20, 2026",
    duration: "6 nights",
    maxGuests: 24,
    pricing: { currency: "USD", singleOccupancy: 0, doubleOccupancy: 0 },
    includes: [],
    excludes: [],
    description: "Six nights chasing the northern lights with astrophotographers and chefs.",
    whatsappNumber: "+233503578007",
  },
  {
    id: "sahara-morocco",
    title: "Sahara Symphony · Morocco",
    destination: "Morocco",
    tag: "Cultural",
    status: "upcoming",
    featured: false,
    featuredOrder: 3,
    teaserImage: "/hero/morocco.jpg",
    targetDate: "2026-04-08T00:00:00.000Z",
    dateRange: "Apr 8 — 15, 2026",
    duration: "7 nights",
    maxGuests: 24,
    pricing: { currency: "USD", singleOccupancy: 0, doubleOccupancy: 0 },
    includes: [],
    excludes: [],
    description: "A private dune camp concert with Tuareg musicians and Berber feast.",
    whatsappNumber: "+233503578007",
  },
  {
    id: "cherry-blossom-japan",
    title: "Cherry Blossom Trail · Japan",
    destination: "Japan",
    tag: "Seasonal",
    status: "upcoming",
    featured: false,
    featuredOrder: 4,
    teaserImage: "/hero/tokyo.jpg",
    targetDate: "2026-04-02T00:00:00.000Z",
    dateRange: "Apr 2 — 12, 2026",
    duration: "10 nights",
    maxGuests: 24,
    pricing: { currency: "USD", singleOccupancy: 0, doubleOccupancy: 0 },
    includes: [],
    excludes: [],
    description: "From Tokyo to Kyoto, follow the sakura wave across five cities.",
    whatsappNumber: "+233503578007",
  },
  {
    id: "migration-tanzania",
    title: "Migration Spectacle · Tanzania",
    destination: "Tanzania",
    tag: "Wildlife",
    status: "upcoming",
    featured: false,
    featuredOrder: 5,
    teaserImage: "/hero/safari.jpg",
    targetDate: "2026-07-22T00:00:00.000Z",
    dateRange: "Jul 22 — 30, 2026",
    duration: "8 nights",
    maxGuests: 24,
    pricing: { currency: "USD", singleOccupancy: 0, doubleOccupancy: 0 },
    includes: [],
    excludes: [],
    description: "Witness the great river crossings from private camps along the Mara.",
    whatsappNumber: "+233503578007",
  },
]

export const vlogs = [
  {
    title: "48 Hours in Santorini — Beyond the Postcards",
    duration: "14:22",
    views: "1.2M",
    image: "/hero/santorini.jpg",
    category: "City Guide",
  },
  {
    title: "Inside a Maldives Overwater Villa",
    duration: "9:48",
    views: "842K",
    image: "/hero/maldives.jpg",
    category: "Luxury",
  },
  {
    title: "The Sahara at 3 A.M.",
    duration: "12:05",
    views: "2.1M",
    image: "/hero/morocco.jpg",
    category: "Cinematic",
  },
  {
    title: "Tokyo: 7 Hidden Alleys Locals Love",
    duration: "11:30",
    views: "1.6M",
    image: "/hero/tokyo.jpg",
    category: "Culture",
  },
  {
    title: "Trekking the Emerald Alps",
    duration: "17:14",
    views: "612K",
    image: "/hero/alps.jpg",
    category: "Adventure",
  },
  {
    title: "Bali's Forgotten Temples",
    duration: "13:09",
    views: "1.9M",
    image: "/hero/bali.jpg",
    category: "Culture",
  },
]

export const ghanaNorthDestinations = [
  {
    id: "mole-national-park",
    name: "Mole National Park",
    region: "Northern Region, Ghana",
    description:
      "Ghana's largest wildlife refuge, home to over 94 mammal species including elephants, antelopes, baboons, and buffaloes, plus over 300 bird species.",
    image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=1200&q=80",
    tags: ["Wildlife", "Nature", "Safari"],
  },
  {
    id: "larabanga-mosque",
    name: "Larabanga Mosque",
    region: "Northern Region, Ghana",
    description:
      "A 13th-century mosque and one of the holiest sites in Ghana, celebrated for its striking Sudano-Sahelian architecture.",
    image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=1200&q=80",
    tags: ["History", "Culture", "Architecture"],
  },
  {
    id: "mognori-eco-village",
    name: "Mognori Eco-Village",
    region: "Northern Region, Ghana",
    description:
      "A community showcasing sustainable living and local traditions, offering canoe safaris and immersive cultural experiences.",
    image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1200&q=80",
    tags: ["Culture", "Eco-Tourism", "Adventure"],
  },
  {
    id: "salaga-slave-market",
    name: "Salaga Slave Market",
    region: "Northern Region, Ghana",
    description:
      "A historic market that played a significant role in the trans-Saharan trade, now a site of memory and education.",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&w=1200&q=80",
    tags: ["History", "Heritage"],
  },
  {
    id: "nalerigu-defence-wall",
    name: "Nalerigu Defence Wall",
    region: "Northern Region, Ghana",
    description:
      "A 16th-century wall built to protect against raiders, now recognised as part of the documented slave route.",
    image: "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1200&q=80",
    tags: ["History", "Heritage", "Architecture"],
  },
  {
    id: "tamale-central-market",
    name: "Tamale Central Market",
    region: "Northern Region, Ghana",
    description:
      "A vibrant, bustling market at the heart of the north, offering local goods, crafts, and authentic souvenirs.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1200&q=80",
    tags: ["Culture", "Shopping", "Local Life"],
  },
  {
    id: "wechiau-hippo-sanctuary",
    name: "Wechiau Hippo Sanctuary",
    region: "Northern Region, Ghana",
    description: "A community-managed sanctuary protecting hippos and diverse wildlife along the Black Volta River.",
    image: "https://images.unsplash.com/photo-1564760055775-d63b17a55c44?auto=format&fit=crop&w=1200&q=80",
    tags: ["Wildlife", "Nature", "Eco-Tourism"],
  },
  {
    id: "daboya",
    name: "Daboya",
    region: "Northern Region, Ghana",
    description: "A historic 16th-century town renowned for its handmade textiles and rich weaving traditions.",
    image: "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?auto=format&fit=crop&w=1200&q=80",
    tags: ["Culture", "Heritage", "Crafts"],
  },
  {
    id: "kparia-waterfalls",
    name: "Kparia Waterfalls",
    region: "Northern Region, Ghana",
    description:
      "A scenic waterfall nestled within the grounds of Mole National Park, a hidden reward for adventurous visitors.",
    image: "https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?auto=format&fit=crop&w=1200&q=80",
    tags: ["Nature", "Adventure"],
  },
  {
    id: "gambaga-escarpment",
    name: "Gambaga Escarpment",
    region: "Northern Region, Ghana",
    description: "A dramatic highland offering breathtaking panoramic views and rewarding hiking trails.",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1200&q=80",
    tags: ["Nature", "Adventure", "Hiking"],
  },
]

export const ghanaVoltaDestinations = [
  {
    id: "wli-waterfalls",
    name: "Wli Waterfalls",
    region: "Volta Region, Ghana",
    description:
      "Ghana's tallest waterfall and one of West Africa's most spectacular, surrounded by lush rainforest teeming with fruit bats and rare birds.",
    image: "https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=1200&q=80",
    tags: ["Nature", "Adventure", "Hiking"],
  },
  {
    id: "lake-volta",
    name: "Lake Volta",
    region: "Volta Region, Ghana",
    description:
      "One of the world's largest man-made lakes, offering breathtaking sunsets, fishing communities, and serene boat cruises.",
    image: "https://images.unsplash.com/photo-1504208369682-b1d7b49dad5c?auto=format&fit=crop&w=1200&q=80",
    tags: ["Nature", "Boating", "Scenic"],
  },
  {
    id: "tafi-atome-monkey-sanctuary",
    name: "Tafi Atome Monkey Sanctuary",
    region: "Volta Region, Ghana",
    description:
      "A sacred forest sanctuary where wild Mona monkeys roam freely among visitors, protected by generations of local tradition.",
    image: "https://images.unsplash.com/photo-1540573133985-87b6da6d54a9?auto=format&fit=crop&w=1200&q=80",
    tags: ["Wildlife", "Eco-Tourism", "Culture"],
  },
  {
    id: "amedzofe",
    name: "Amedzofe",
    region: "Volta Region, Ghana",
    description:
      "Ghana's highest settlement, draped in mist and montane forest, offering canopy walks, waterfalls, and sweeping valley views.",
    image: "https://images.unsplash.com/photo-1464822759023-fed107ef2ee4?auto=format&fit=crop&w=1200&q=80",
    tags: ["Nature", "Hiking", "Scenic"],
  },
  {
    id: "tagbo-falls",
    name: "Tagbo Falls",
    region: "Volta Region, Ghana",
    description:
      "A stunning two-tiered waterfall near Hohoe, reached through a rewarding trail of tropical forest and cool mountain streams.",
    image: "https://images.unsplash.com/photo-1588392382834-a891154bca4d?auto=format&fit=crop&w=1200&q=80",
    tags: ["Nature", "Adventure", "Hiking"],
  },
  {
    id: "keta-lagoon",
    name: "Keta Lagoon",
    region: "Volta Region, Ghana",
    description:
      "A vast coastal lagoon complex, rich in migratory birds and fishing heritage, straddling land and Atlantic shoreline.",
    image: "https://images.unsplash.com/photo-1505118380757-91f5f5632de0?auto=format&fit=crop&w=1200&q=80",
    tags: ["Nature", "Scenic", "Birdwatching"],
  },
  {
    id: "keta-slave-fort",
    name: "Keta Slave Fort",
    region: "Volta Region, Ghana",
    description:
      "A haunting colonial-era fort on the Keta coastline, bearing witness to the region's painful role in the Atlantic slave trade.",
    image: "https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?auto=format&fit=crop&w=1200&q=80",
    tags: ["History", "Heritage"],
  },
  {
    id: "hohoe-town",
    name: "Hohoe Town",
    region: "Volta Region, Ghana",
    description:
      "A lively gateway town to the Volta highlands, known for its waterfalls, vibrant market culture, and warm Ewe hospitality.",
    image: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&w=1200&q=80",
    tags: ["Culture", "Local Life", "Adventure"],
  },
]

export const ghanaCapeCoastDestinations = [
  {
    id: "cape-coast-castle",
    name: "Cape Coast Castle",
    region: "Central Region, Ghana",
    description:
      "A UNESCO World Heritage Site and former hub of the transatlantic slave trade, its whitewashed walls and dungeons tell a story the world must never forget.",
    image: "https://images.unsplash.com/photo-1577717903315-1691ae25ab3f?auto=format&fit=crop&w=1200&q=80",
    tags: ["History", "Heritage", "UNESCO"],
  },
  {
    id: "kakum-national-park",
    name: "Kakum National Park",
    region: "Central Region, Ghana",
    description:
      "A pristine rainforest reserve famous for its exhilarating canopy walkway suspended 30 metres above the forest floor, home to forest elephants and over 400 bird species.",
    image: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1200&q=80",
    tags: ["Nature", "Adventure", "Wildlife"],
  },
  {
    id: "elmina-castle",
    name: "Elmina Castle",
    region: "Central Region, Ghana",
    description:
      "The oldest European building in sub-Saharan Africa, built by the Portuguese in 1482, now a powerful monument to memory and resilience.",
    image: "https://images.unsplash.com/photo-1604608672516-f1b9b5b5b5b5?auto=format&fit=crop&w=1200&q=80",
    tags: ["History", "Heritage", "UNESCO"],
  },
  {
    id: "assin-manso-slave-river",
    name: "Assin Manso Slave River",
    region: "Central Region, Ghana",
    description:
      "The ancestral river where enslaved people took their last bath on Ghanaian soil before the march to the coast — a deeply moving site of diaspora pilgrimage.",
    image: "https://images.unsplash.com/photo-1551524164-687a55dd1126?auto=format&fit=crop&w=1200&q=80",
    tags: ["History", "Heritage", "Culture"],
  },
  {
    id: "hans-cottage-botel",
    name: "Hans Cottage Botel",
    region: "Central Region, Ghana",
    description:
      "A unique lakeside hotel where crocodiles bask freely around the restaurant and grounds, offering a surprisingly relaxed encounter with nature.",
    image: "https://images.unsplash.com/photo-1590845947698-94ed5e3d2db6?auto=format&fit=crop&w=1200&q=80",
    tags: ["Nature", "Wildlife", "Leisure"],
  },
  {
    id: "brenu-beach",
    name: "Brenu Beach",
    region: "Central Region, Ghana",
    description:
      "A pristine, largely undiscovered stretch of Atlantic coastline fringed by coconut palms, ideal for long walks and quiet reflection.",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
    tags: ["Beach", "Leisure", "Nature"],
  },
  {
    id: "cape-coast-cultural-centre",
    name: "Cape Coast Cultural Centre",
    region: "Central Region, Ghana",
    description:
      "A vibrant hub of Ghanaian craft, art, and tradition at the heart of Cape Coast town, perfect for collecting handmade keepsakes.",
    image: "https://images.unsplash.com/photo-1535827841776-24afc1e255ac?auto=format&fit=crop&w=1200&q=80",
    tags: ["Culture", "Arts", "Shopping"],
  },
]

export const ghanaAshantDestinations = [
  {
    id: "manhyia-palace-museum",
    name: "Manhyia Palace Museum",
    region: "Ashanti Region, Ghana",
    description:
      "The official seat of the Asantehene, Ghana's most powerful traditional king — its museum reveals the grandeur, gold, and history of the mighty Ashanti Empire.",
    image: "https://images.unsplash.com/photo-1568515387631-8b650bbcdb90?auto=format&fit=crop&w=1200&q=80",
    tags: ["Culture", "History", "Royalty"],
  },
  {
    id: "lake-bosomtwe",
    name: "Lake Bosomtwe",
    region: "Ashanti Region, Ghana",
    description:
      "Ghana's only natural lake, formed by a meteorite impact, cradled by green hills and sacred to the Ashanti as the lake of souls.",
    image: "https://images.unsplash.com/photo-1571406252241-db0280bd38db?auto=format&fit=crop&w=1200&q=80",
    tags: ["Nature", "Scenic", "Leisure"],
  },
  {
    id: "kejetia-market",
    name: "Kejetia Market",
    region: "Ashanti Region, Ghana",
    description:
      "One of West Africa's largest markets, a sensory explosion of colour, sound, and commerce at the beating heart of Kumasi.",
    image: "https://images.unsplash.com/photo-1518982380512-5a3c6513a0d3?auto=format&fit=crop&w=1200&q=80",
    tags: ["Culture", "Shopping", "Local Life"],
  },
  {
    id: "bonwire-kente-village",
    name: "Bonwire Kente Village",
    region: "Ashanti Region, Ghana",
    description:
      "The birthplace of Kente cloth, where master weavers produce the iconic silk and cotton fabric that has come to symbolise African identity worldwide.",
    image: "https://images.unsplash.com/photo-1609780447631-05b93e5a88ea?auto=format&fit=crop&w=1200&q=80",
    tags: ["Culture", "Crafts", "Heritage"],
  },
  {
    id: "ntonso-adinkra-village",
    name: "Ntonso Adinkra Village",
    region: "Ashanti Region, Ghana",
    description:
      "A village dedicated to the art of Adinkra printing, where artisans hand-stamp symbolic patterns onto cloth using natural dyes in a tradition centuries old.",
    image: "https://images.unsplash.com/photo-1612437118882-6d0f4d0ed4b3?auto=format&fit=crop&w=1200&q=80",
    tags: ["Culture", "Crafts", "Heritage"],
  },
  {
    id: "okomfo-anokye-sword-site",
    name: "Okomfo Anokye Sword Site",
    region: "Ashanti Region, Ghana",
    description:
      "The legendary site where the great priest Okomfo Anokye planted a sword that has never been removed — a sacred symbol of Ashanti unity and power.",
    image: "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1200&q=80",
    tags: ["History", "Culture", "Mythology"],
  },
  {
    id: "ashanti-cultural-centre",
    name: "Ashanti Cultural Centre",
    region: "Ashanti Region, Ghana",
    description:
      "Kumasi's premier cultural institution, housing traditional regalia, crafts, and exhibits that bring the Ashanti Kingdom's rich heritage to life.",
    image: "https://images.unsplash.com/photo-1583422409516-2895a77efded?auto=format&fit=crop&w=1200&q=80",
    tags: ["Culture", "Arts", "History"],
  },
]

export const ghanaAllRegions = [
  {
    slug: "north",
    name: "Northern Region",
    tagline: "Savanna, wildlife & ancient history",
    count: 10,
    image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=1200&q=80",
    data: ghanaNorthDestinations,
  },
  {
    slug: "volta",
    name: "Volta Region",
    tagline: "Waterfalls, highlands & sacred forests",
    count: 8,
    image: "https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=1200&q=80",
    data: ghanaVoltaDestinations,
  },
  {
    slug: "cape-coast",
    name: "Cape Coast",
    tagline: "History, memory & Atlantic shores",
    count: 7,
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
    data: ghanaCapeCoastDestinations,
  },
  {
    slug: "ashanti",
    name: "Ashanti Region",
    tagline: "Gold, kente & the kingdom of Kumasi",
    count: 7,
    image: "https://images.unsplash.com/photo-1571406252241-db0280bd38db?auto=format&fit=crop&w=1200&q=80",
    data: ghanaAshantDestinations,
  },
]
