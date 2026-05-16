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
