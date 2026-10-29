import { Destination } from '../types/destination';

export const DESTINATIONS: Destination[] = [
  {
    id: 'manali',
    slug: 'manali',
    name: 'Manali',
    state: 'Himachal Pradesh',
    country: 'India',
    tagline: 'High-altitude Himalayan valley of pine forests and snowy passes',
    description:
      'Perched at 2,050 meters along the Beas River, Manali is a gateway to the high Himalayas. From the bohemian lanes of Old Manali scented with cedarwood to thrilling snow sports on Solang Valley and expeditions over the Rohtang Pass, it caters equally to peaceful retreat seekers and adrenaline lovers.',
    heroImage:
      'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=1600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1593181629936-11c609b8db9b?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1586861635167-e5223aadc9fe?auto=format&fit=crop&w=800&q=80',
    ],
    categories: ['mountain', 'adventure', 'romantic', 'weekend'],
    recommendedSeasons: ['summer', 'winter', 'autumn'],
    bestMonths: 'October to June',
    estimatedBudget: {
      min: 14000,
      max: 28000,
      currency: '₹',
      tier: 'moderate',
      periodDescription: '4-5 Days per person (Excl. flights)',
      breakdown: {
        accommodation: '₹1,500 - ₹4,000 / night (Cozy guesthouse or riverside boutique)',
        food: '₹700 - ₹1,400 / day (Local trout, Himachali siddu, cafe cuisine)',
        activities: '₹2,500 - ₹6,000 (Solang paragliding, river rafting, Rohtang permit)',
        localTransport: '₹2,000 - ₹4,500 (Shared cabs or rented Enfield / scooter)',
      },
    },
    idealDuration: '4 - 5 Days',
    featured: true,
    popularityRank: 1,
    attractions: [
      {
        name: 'Solang Valley',
        description: 'Spectacular bowl for paragliding, zorbing, quad biking, and winter skiing.',
        tag: 'Adventure Sports',
      },
      {
        name: 'Old Manali & Hadimba Temple',
        description: 'Centuries-old wooden pagoda temple nested inside ancient deodar woods.',
        tag: 'Heritage & Vibe',
      },
      {
        name: 'Rohtang Pass & Atal Tunnel',
        description: 'Dramatic gateway connecting Kullu to the stark landscapes of Lahaul Valley.',
        tag: 'High Pass',
      },
      {
        name: 'Jogini Waterfalls',
        description: 'Picturesque pine trail hike from Vashisht village ending at cascading falls.',
        tag: 'Nature Hike',
      },
    ],
    travelTips: [
      {
        title: 'Rohtang Pass Permits',
        content: 'Vehicles visiting Rohtang require a mandatory daily NGT permit bookable online 48 hours in advance.',
      },
      {
        title: 'Acclimatization',
        content: 'Take it easy on day one before heading higher up toward Solang or Atal Tunnel.',
      },
      {
        title: 'Best Stay Location',
        content: 'Stay in Old Manali or Naggar for scenic serenity; stay near the Mall Road only if you prefer quick shopping.',
      },
    ],
    climateSummary: 'Sub-zero winters with heavy snow from Dec to Feb; crisp, cool summers averaging 15°C to 25°C.',
    howToReach: {
      air: 'Bhuntar Airport (KUU) is 50 km away, with daily ATR flights from Delhi and Chandigarh.',
      rail: 'Chandigarh Junction (310 km) or Ambala Cantt; connecting by Volvo luxury overnight buses.',
      road: 'Well-connected by NH-3 with smooth expressways from Chandigarh (approx. 7-8 hours).',
    },
  },
  {
    id: 'goa',
    slug: 'goa',
    name: 'Goa',
    state: 'Goa',
    country: 'India',
    tagline: 'Sun-drenched Arabian coast with Portuguese charm, seafood, and palm coves',
    description:
      'India’s sunshine state blends 100 kilometers of tropical coastline with centuries of Indo-Portuguese heritage. Whether you seek the vibrant sunset beach clubs of the North or the tranquil, pastel-colored colonial villages and secret coves of South Goa, every journey here moves to the rhythm of susegad.',
    heroImage:
      'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1587922546307-776227941871?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80',
    ],
    categories: ['beach', 'romantic', 'weekend', 'heritage'],
    recommendedSeasons: ['winter', 'autumn', 'monsoon'],
    bestMonths: 'November to March',
    estimatedBudget: {
      min: 16000,
      max: 38000,
      currency: '₹',
      tier: 'moderate',
      periodDescription: '4-5 Days per person (Excl. flights)',
      breakdown: {
        accommodation: '₹2,000 - ₹5,500 / night (Beach cottage or restored Portuguese heritage villa)',
        food: '₹900 - ₹2,000 / day (Fresh coastal fish thalis, artisanal bakeries, beach shacks)',
        activities: '₹1,500 - ₹4,500 (Water sports, sunset catamaran, spice plantation tour)',
        localTransport: '₹400 - ₹900 / day (Self-drive scooter rental or rental hatchbacks)',
      },
    },
    idealDuration: '4 - 6 Days',
    featured: true,
    popularityRank: 2,
    attractions: [
      {
        name: 'Palolem & Butterfly Beach',
        description: 'Crescent-shaped white sand bay flanked by coconut palms and dolphin cruises.',
        tag: 'South Coast',
      },
      {
        name: 'Fontainhas Latin Quarter',
        description: 'UNESCO-recognized heritage district of vibrant ochre, blue, and mint colonial houses in Panaji.',
        tag: 'Heritage Walk',
      },
      {
        name: 'Cabo de Rama Fort',
        description: 'Cliffside ancient fort offering panoramic cliff views over the sapphire Arabian Sea.',
        tag: 'Sunset Point',
      },
      {
        name: 'Dudhsagar Waterfalls',
        description: 'Four-tiered sea of milk cascading down lush Western Ghats jungle cliffs.',
        tag: 'Nature Safari',
      },
    ],
    travelTips: [
      {
        title: 'Scooter Rental Essentials',
        content: 'Always carry a valid driving license and insist on a helmet. Traffic police check strictly.',
      },
      {
        title: 'North vs South',
        content: 'Choose North Goa (Anjuna, Vagator, Ashwem) for buzzy nightlife and cafes; choose South (Agonda, Benaulim) for quiet sands.',
      },
      {
        title: 'Monsoon Appeal',
        content: 'June to September offers emerald green rice paddies, dramatic rain, and 50% cheaper luxury stays.',
      },
    ],
    climateSummary: 'Tropical seaside climate. Warm winters around 28°C; lush monsoons with heavy ocean breezes.',
    howToReach: {
      air: 'Goa International Airport (Dabolim - GOI) or Manohar International Airport (Mopa - GOX).',
      rail: 'Madgaon Junction (MAO) or Thivim (THVM), served by high-speed Vande Bharat and Konkan trains.',
      road: 'Scenic drive along NH-66 connecting Mumbai, Pune, and Bengaluru.',
    },
  },
  {
    id: 'jaipur',
    slug: 'jaipur',
    name: 'Jaipur',
    state: 'Rajasthan',
    country: 'India',
    tagline: 'The Pink City of formidable forts, astronomical marvels, and royal palaces',
    description:
      'The crown jewel of the Golden Triangle, Jaipur is a living tapestry of royal Rajput chivalry, pink terracotta architecture, bustling artisan bazaars, and opulent hilltop fortresses overlooking desert lakes.',
    heroImage:
      'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1603288940316-4e43bf1655dd?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&w=800&q=80',
    ],
    categories: ['heritage', 'weekend', 'romantic'],
    recommendedSeasons: ['winter', 'autumn'],
    bestMonths: 'October to March',
    estimatedBudget: {
      min: 11000,
      max: 26000,
      currency: '₹',
      tier: 'budget',
      periodDescription: '3-4 Days per person (Excl. flights)',
      breakdown: {
        accommodation: '₹1,400 - ₹3,800 / night (Heritage Haveli hotel or boutique palace stay)',
        food: '₹600 - ₹1,300 / day (Dal Baati Churma, Pyaaz Kachori, rooftop thali dinners)',
        activities: '₹1,200 - ₹3,000 (Composite monument entry ticket, night fort light show)',
        localTransport: '₹1,500 - ₹3,000 (App autos, metro, or dedicated day cab)',
      },
    },
    idealDuration: '3 - 4 Days',
    featured: true,
    popularityRank: 3,
    attractions: [
      {
        name: 'Amer Fort & Sheesh Mahal',
        description: 'Imposing hilltop fort featuring intricate mirrored palace halls and marble courtyards.',
        tag: 'Royal Fort',
      },
      {
        name: 'Hawa Mahal',
        description: 'Iconic five-story honeycombed facade with 953 jharokhas built for royal women.',
        tag: 'Architectural Wonder',
      },
      {
        name: 'Nahargarh Fort Sunset',
        description: 'Perched on the Aravalli edge providing sweeping sunset panoramas across the entire pink city.',
        tag: 'Sunset Viewpoint',
      },
      {
        name: 'Jantar Mantar',
        description: 'UNESCO World Heritage astronomical observatory housing the world’s largest stone sundial.',
        tag: 'Science & Heritage',
      },
    ],
    travelTips: [
      {
        title: 'Composite Ticket Saver',
        content: 'Buy the Department of Archaeology composite ticket at Amer or Hawa Mahal to save 40% on entry to 7 monuments.',
      },
      {
        title: 'Early Fort Visits',
        content: 'Reach Amer Fort before 9:00 AM to beat tourist buses and photograph the morning light in peace.',
      },
      {
        title: 'Bazaar Etiquette',
        content: 'Johari Bazaar and Bapu Bazaar are great for blue pottery, textiles, and juttis—gentle bargaining is expected.',
      },
    ],
    climateSummary: 'Hot summers, pleasant autumns, and delightfully cool winter days around 22°C.',
    howToReach: {
      air: 'Jaipur International Airport (JAI) with frequent direct flights across India and international hubs.',
      rail: 'Jaipur Junction (JP) connects directly to Delhi in under 4 hours via Vande Bharat and Shatabdi.',
      road: 'Smooth 4-hour drive from New Delhi via Delhi-Jaipur Expressway (NE4).',
    },
  },
  {
    id: 'rishikesh',
    slug: 'rishikesh',
    name: 'Rishikesh',
    state: 'Uttarakhand',
    country: 'India',
    tagline: 'Yoga capital of the world and adrenaline hub cradled by the holy Ganges',
    description:
      'Where the holy river Ganga tumbles out of the Shivalik foothills into the northern plains, Rishikesh balances contemplative spirituality with heart-pumping adventure. Walk across suspension bridges, listen to evening chants echoing off ghats, or shoot through Grade IV rapids.',
    heroImage:
      'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1596761611086-42a188be9684?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?auto=format&fit=crop&w=800&q=80',
    ],
    categories: ['spiritual', 'adventure', 'weekend'],
    recommendedSeasons: ['autumn', 'winter', 'summer'],
    bestMonths: 'September to May',
    estimatedBudget: {
      min: 9000,
      max: 20000,
      currency: '₹',
      tier: 'budget',
      periodDescription: '3-4 Days per person (Excl. flights)',
      breakdown: {
        accommodation: '₹1,000 - ₹3,000 / night (Ashram, riverside retreat, or backpacker hostel)',
        food: '₹500 - ₹1,100 / day (Pure vegetarian sattvic thalis, organic river cafes)',
        activities: '₹1,200 - ₹4,000 (Ganga rafting 16-24km, cliff jump, bungee or flying fox)',
        localTransport: '₹600 - ₹1,500 (Walking, shared Vikram autos, or scooter rentals)',
      },
    },
    idealDuration: '3 - 4 Days',
    featured: true,
    popularityRank: 4,
    attractions: [
      {
        name: 'Triveni Ghat Evening Ganga Aarti',
        description: 'Soul-stirring dusk ritual of ringing temple bells, conch shells, and floating leaf lamps.',
        tag: 'Spiritual Ritual',
      },
      {
        name: 'Shivpuri River Rafting',
        description: 'Exhilarating 16km to 24km white-water expedition tackling the Roller Coaster and Golf Course rapids.',
        tag: 'Adventure',
      },
      {
        name: 'The Beatles Ashram (Chaurasi Kutia)',
        description: 'Lush meditation retreat where The Beatles stayed in 1968, adorned with striking graffiti murals.',
        tag: 'History & Art',
      },
      {
        name: 'Neer Garh Waterfalls',
        description: 'Multi-tiered natural swimming pools nestled inside a green valley above Tapovan.',
        tag: 'Nature Walk',
      },
    ],
    travelTips: [
      {
        title: 'Dietary Notice',
        content: 'Rishikesh is a strictly vegetarian and alcohol-free sacred town. Delicious organic food abounds.',
      },
      {
        title: 'Rafting Season',
        content: 'White-water rafting is strictly closed during the monsoon months (July to mid-September) for safety.',
      },
      {
        title: 'Footwear Advice',
        content: 'Wear slip-on shoes or trekking sandals, as shoes must be removed frequently at ghats and temples.',
      },
    ],
    climateSummary: 'Temperate mountain climate with refreshing riverside breezes; cool winter evenings around 10°C.',
    howToReach: {
      air: 'Jolly Grant Airport, Dehradun (DED) is just 20 km away (35-minute taxi ride).',
      rail: 'Yog Nagari Rishikesh (YNRK) or Haridwar Junction (25 km), connected directly to major metros.',
      road: 'Comfortable 5-hour drive from Delhi along the Delhi-Meerut Expressway.',
    },
  },
  {
    id: 'kashmir',
    slug: 'kashmir',
    name: 'Kashmir Valley',
    state: 'Jammu & Kashmir',
    country: 'India',
    tagline: 'The legendary paradise of mirrored lakes, alpine meadows, and snow peaks',
    description:
      'Rightly hailed as paradise on earth, Kashmir captivates with ornate cedarwood houseboats bobbing on Dal Lake, blooming saffron fields, pine-fringed golf courses in Gulmarg, and glacier valleys in Pahalgam.',
    heroImage:
      'https://images.unsplash.com/photo-1595815771614-ade9d652a65d?auto=format&fit=crop&w=1600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1595815771614-ade9d652a65d?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1517824806704-9040b037703b?auto=format&fit=crop&w=800&q=80',
    ],
    categories: ['mountain', 'romantic', 'nature'],
    recommendedSeasons: ['summer', 'autumn', 'winter'],
    bestMonths: 'March to November (and Dec-Feb for snow)',
    estimatedBudget: {
      min: 24000,
      max: 52000,
      currency: '₹',
      tier: 'premium',
      periodDescription: '5-6 Days per person (Excl. flights)',
      breakdown: {
        accommodation: '₹3,500 - ₹8,500 / night (Traditional Dal Lake houseboat or alpine wooden resort)',
        food: '₹1,000 - ₹2,200 / day (Wazwan delicacies, Rogan Josh, saffron Kehwa with almonds)',
        activities: '₹3,000 - ₹7,000 (Gulmarg Gondola Phase 1 & 2, Shikara ride, Betaab Valley pass)',
        localTransport: '₹3,500 - ₹7,000 (Private tourist taxi for Srinagar, Gulmarg, Pahalgam circuit)',
      },
    },
    idealDuration: '5 - 7 Days',
    featured: true,
    popularityRank: 5,
    attractions: [
      {
        name: 'Dal Lake & Floating Vegetable Market',
        description: 'Early morning shikara glide through water channels where lotus leaves and farmers trade produce.',
        tag: 'Iconic Lake',
      },
      {
        name: 'Gulmarg Gondola (Phase 2)',
        description: 'One of the world’s highest cable cars rising to 3,979 meters on Apharwat Peak.',
        tag: 'Alpine High',
      },
      {
        name: 'Betaab Valley & Aru Valley',
        description: 'Pristine meadow surrounded by thick pine woods and crystalline Lidder river streams in Pahalgam.',
        tag: 'Valley Landscape',
      },
      {
        name: 'Mughal Gardens (Shalimar & Nishat)',
        description: 'Terraced Persian-style pleasure gardens with bubbling fountains and majestic Chinar trees.',
        tag: 'Historic Gardens',
      },
    ],
    travelTips: [
      {
        title: 'Gulmarg Gondola Advance Booking',
        content: 'Phase 2 Gondola tickets frequently sell out weeks in advance; book online as early as possible.',
      },
      {
        title: 'Postpaid SIM Requirement',
        content: 'Prepaid SIM cards from outside Jammu & Kashmir do not work due to security regulations. Carry a postpaid connection.',
      },
      {
        title: 'Authentic Kehwa & Pashmina',
        content: 'Buy shawls and carpets only from government-certified craft emporiums to ensure genuine handwoven GI-tagged cashmere.',
      },
    ],
    climateSummary: 'Crisp alpine summers (18°C-26°C); golden chinar autumns in Oct-Nov; magical winter snowfall.',
    howToReach: {
      air: 'Sheikh ul-Alam International Airport, Srinagar (SXR) with daily direct flights.',
      rail: 'Jammu Tawi (JAT) or Udhampur; scenic railway connection via Banihal.',
      road: 'National Highway 44 connecting Jammu to Srinagar via the Chenani-Nashri Tunnel.',
    },
  },
  {
    id: 'kerala',
    slug: 'kerala',
    name: 'Kerala Backwaters & Munnar',
    state: 'Kerala',
    country: 'India',
    tagline: 'God’s own country of tea-carpeted hills, spice mists, and tranquil backwaters',
    description:
      'From the mist-cloaked tea plantations of Munnar perched high in the Western Ghats to the palm-fringed labyrinth of Alleppey’s backwaters, Kerala offers a restorative embrace of nature, Ayurvedic wellness, and tropical coastal charm.',
    heroImage:
      'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80',
    ],
    categories: ['nature', 'romantic', 'beach'],
    recommendedSeasons: ['winter', 'monsoon', 'autumn'],
    bestMonths: 'September to March',
    estimatedBudget: {
      min: 19000,
      max: 42000,
      currency: '₹',
      tier: 'moderate',
      periodDescription: '5-6 Days per person (Excl. flights)',
      breakdown: {
        accommodation: '₹2,500 - ₹6,000 / night (Eco tea plantation retreat & traditional Kettuvallam stay)',
        food: '₹800 - ₹1,800 / day (Banana leaf sadhya, Karimeen pollichathu, appam with stew)',
        activities: '₹2,000 - ₹5,000 (Periyar spice walk, Kathakali show, village canoe tour)',
        localTransport: '₹3,000 - ₹6,000 (Dedicated private cab across Kochi-Munnar-Alleppey)',
      },
    },
    idealDuration: '5 - 7 Days',
    featured: true,
    popularityRank: 6,
    attractions: [
      {
        name: 'Alleppey Backwater Houseboat Cruise',
        description: 'Drift past coir villages, water lilies, and paddy fields on a thatched wooden luxury barge.',
        tag: 'Backwaters',
      },
      {
        name: 'Munnar Tea Plantations & Eravikulam',
        description: 'Rolling velvet green hills and home to the endangered Nilgiri Tahr mountain goat.',
        tag: 'Highland Escapes',
      },
      {
        name: 'Fort Kochi Heritage Quarter',
        description: 'Colonial walkways, Chinese fishing nets, spice warehouses, and quaint art cafes.',
        tag: 'Coastal Heritage',
      },
      {
        name: 'Marari Beach',
        description: 'Secluded golden shoreline lined with swaying palms and tranquil fishing hamlets.',
        tag: 'Quiet Coast',
      },
    ],
    travelTips: [
      {
        title: 'Shikara vs Houseboat',
        content: 'For an eco-friendly and intimate view of shallow canals, take a small wooden motor canoe (shikara) rather than a large houseboat.',
      },
      {
        title: 'Ayurveda Caution',
        content: 'Book Ayurvedic massages only from certified green-leaf accredited centers to ensure trained therapists and authentic oils.',
      },
      {
        title: 'Mountain Road Motion',
        content: 'The 4-hour drive up to Munnar has winding hairpins. Keep motion sickness medicine handy if sensitive.',
      },
    ],
    climateSummary: 'Tropical and humid on the coast (28°C-32°C); delightfully cool and brisk in Munnar (14°C-22°C).',
    howToReach: {
      air: 'Cochin International Airport (COK), the world’s first fully solar-powered airport.',
      rail: 'Ernakulam Junction (ERS) or Aluva railway stations with cross-country connectivity.',
      road: 'Scenic highways connecting via NH-544 and NH-85 into the highlands.',
    },
  },
  {
    id: 'ladakh',
    slug: 'ladakh',
    name: 'Ladakh',
    state: 'Ladakh',
    country: 'India',
    tagline: 'Land of high passes, celestial monasteries, and indigo high-altitude lakes',
    description:
      'A moonscape plateau set between the Karakoram and Great Himalaya ranges, Ladakh is unmatched for raw majesty. Here, centuries-old Buddhist gompas crown sheer crags, double-humped camels roam high-altitude sand dunes, and the Milky Way blazes over Pangong Tso.',
    heroImage:
      'https://images.unsplash.com/photo-1581793745862-99fde7fa73d2?auto=format&fit=crop&w=1600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1581793745862-99fde7fa73d2?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=800&q=80',
    ],
    categories: ['adventure', 'mountain', 'nature'],
    recommendedSeasons: ['summer', 'autumn'],
    bestMonths: 'May to September',
    estimatedBudget: {
      min: 28000,
      max: 58000,
      currency: '₹',
      tier: 'premium',
      periodDescription: '6-7 Days per person (Excl. flights)',
      breakdown: {
        accommodation: '₹3,000 - ₹7,000 / night (Ladakhi eco-hotel or glamping dome at Nubra/Pangong)',
        food: '₹800 - ₹1,800 / day (Thukpa, tingmo, momos, yak cheese, apricot juice)',
        activities: '₹2,500 - ₹5,000 (Inner Line Permits, monastery tickets, camel safari)',
        localTransport: '₹6,000 - ₹12,000 (Regulated local 4x4 SUV taxi union rates or Royal Enfield)',
      },
    },
    idealDuration: '6 - 8 Days',
    featured: true,
    popularityRank: 7,
    attractions: [
      {
        name: 'Pangong Tso',
        description: 'Endorheic salt lake changing hues from azure to turquoise under the cobalt sky.',
        tag: 'Alpine Lake',
      },
      {
        name: 'Nubra Valley & Hunder Sand Dunes',
        description: 'Cold desert valley famous for Bactrian double-humped camels and the giant Maitreya Buddha at Diskit.',
        tag: 'Cold Desert',
      },
      {
        name: 'Thiksey Monastery',
        description: 'Magnificent 12-story gompa resembling Lhasa’s Potala Palace overlooking the Indus Valley.',
        tag: 'Tibetan Buddhism',
      },
      {
        name: 'Khardung La Pass',
        description: 'One of the world’s highest motorable mountain passes situated at 5,359 meters.',
        tag: 'High Pass Challenge',
      },
    ],
    travelTips: [
      {
        title: 'Mandatory 48-Hour Acclimatization',
        content: 'Flying into Leh (3,500m) requires at least 48 hours of complete rest to prevent Acute Mountain Sickness (AMS). Drink 4L of water daily.',
      },
      {
        title: 'Inner Line Permit (ILP)',
        content: 'Mandatory for Nubra Valley, Pangong Tso, and Hanle; easily procured through the Ladakh official portal.',
      },
      {
        title: 'Cash & Connectivity',
        content: 'ATMs and data connectivity (only postpaid Jio/Airtel/BSNL) are unreliable outside Leh town. Carry sufficient cash.',
      },
    ],
    climateSummary: 'High-altitude cold desert. Warm sunny summer days (15°C to 25°C) with brisk nights plunging below freezing.',
    howToReach: {
      air: 'Kushok Bakula Rimpochee Airport, Leh (IXL) with early morning flights from Delhi.',
      rail: 'Nearest railhead is Jammu Tawi or Chandigarh, followed by multi-day mountain road journey.',
      road: 'Manali-Leh Highway or Srinagar-Leh Highway (open June through October only).',
    },
  },
  {
    id: 'darjeeling',
    slug: 'darjeeling',
    name: 'Darjeeling',
    state: 'West Bengal',
    country: 'India',
    tagline: 'Queen of the Hills framing the eternal snowy crest of Kanchenjunga',
    description:
      'Perched on the crest of the Lesser Himalayas, Darjeeling is celebrated globally for its muscatel tea gardens, the heritage UNESCO Himalayan Toy Train, colonial libraries, and heart-stopping morning vistas of Mount Kanchenjunga.',
    heroImage:
      'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1586861635167-e5223aadc9fe?auto=format&fit=crop&w=800&q=80',
    ],
    categories: ['mountain', 'heritage', 'nature', 'romantic'],
    recommendedSeasons: ['summer', 'autumn', 'winter'],
    bestMonths: 'October to May',
    estimatedBudget: {
      min: 13000,
      max: 27000,
      currency: '₹',
      tier: 'budget',
      periodDescription: '4-5 Days per person (Excl. flights)',
      breakdown: {
        accommodation: '₹1,500 - ₹4,200 / night (Colonial plantation homestay or mountain view lodge)',
        food: '₹600 - ₹1,300 / day (Darjeeling First Flush tea, steaming momos, Nepali thali)',
        activities: '₹1,500 - ₹3,500 (Toy Train joyride ticket, Tiger Hill sunrise, Zoo pass)',
        localTransport: '₹1,800 - ₹3,800 (Shared jeeps from Siliguri and town point cabs)',
      },
    },
    idealDuration: '4 - 5 Days',
    featured: true,
    popularityRank: 8,
    attractions: [
      {
        name: 'Tiger Hill Sunrise',
        description: 'Early morning viewpoint witnessing the sun ignite the summit of Mount Kanchenjunga in gold.',
        tag: 'Sunrise Crest',
      },
      {
        name: 'Darjeeling Himalayan Railway (Toy Train)',
        description: 'UNESCO World Heritage century-old narrow-gauge steam locomotive whistling through mountain loops.',
        tag: 'UNESCO Heritage',
      },
      {
        name: 'Happy Valley Tea Estate',
        description: 'Historic organic tea garden offering plucking demonstrations and artisanal tea cupping sessions.',
        tag: 'Tea Tourism',
      },
      {
        name: 'Padmaja Naidu Himalayan Zoological Park',
        description: 'Renowned conservation center breeding Red Pandas and Snow Leopards.',
        tag: 'Wildlife Conservation',
      },
    ],
    travelTips: [
      {
        title: 'Toy Train Joyride Booking',
        content: 'The steam-engine joyride between Darjeeling and Ghum is in heavy demand; book on IRCTC 30 days prior.',
      },
      {
        title: 'Tiger Hill Morning Departure',
        content: 'Leave your hotel by 3:30 AM to beat the heavy jeep queue ascending Tiger Hill summit before dawn.',
      },
      {
        title: 'Tea Selection',
        content: 'First Flush (harvested in spring) is light and floral; Second Flush (harvested in June) has the famous muscatel character.',
      },
    ],
    climateSummary: 'Temperate hill climate. Crisp summers around 15°C to 20°C; chilly winters dipping to 2°C.',
    howToReach: {
      air: 'Bagdogra Airport (IXB) is 70 km away, connected to major Indian cities.',
      rail: 'New Jalpaiguri (NJP) is the main railway hub with trains from Kolkata and Delhi.',
      road: 'Scenic 3.5-hour shared jeep or private taxi ride ascending hill roads via Rohini or Kurseong.',
    },
  },
  {
    id: 'udaipur',
    slug: 'udaipur',
    name: 'Udaipur',
    state: 'Rajasthan',
    country: 'India',
    tagline: 'The City of Lakes with gleaming marble palaces mirrored in still waters',
    description:
      'Surrounded by the ancient Aravalli Hills and shimmering lakes, Udaipur is widely considered India’s most romantic city. Its regal marble palaces, tranquil boat rides on Lake Pichola, and rooftop dining under star-filled skies create an indelible fairytale ambiance.',
    heroImage:
      'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1603288940316-4e43bf1655dd?auto=format&fit=crop&w=800&q=80',
    ],
    categories: ['romantic', 'heritage', 'weekend'],
    recommendedSeasons: ['winter', 'autumn', 'monsoon'],
    bestMonths: 'September to March',
    estimatedBudget: {
      min: 15000,
      max: 36000,
      currency: '₹',
      tier: 'moderate',
      periodDescription: '3-4 Days per person (Excl. flights)',
      breakdown: {
        accommodation: '₹2,200 - ₹5,500 / night (Lakeside heritage Haveli with jharokha balconies)',
        food: '₹800 - ₹1,800 / day (Mewari thali, Ker Sangri, candlelit lakeview dinners)',
        activities: '₹1,500 - ₹3,500 (City Palace audio tour, Lake Pichola boat cruise, Bagore Ki Haveli dance)',
        localTransport: '₹1,000 - ₹2,500 (Walking Old City, auto-rickshaws, or lake boat transfers)',
      },
    },
    idealDuration: '3 - 4 Days',
    featured: false,
    popularityRank: 9,
    attractions: [
      {
        name: 'City Palace Complex',
        description: 'Rajasthan’s largest palace complex featuring ornate glass mosaics, mirror courtyards, and lake views.',
        tag: 'Royal Residence',
      },
      {
        name: 'Lake Pichola Sunset Boat Cruise',
        description: 'Glide past the floating Lake Palace (Jag Niwas) and Jag Mandir island under golden light.',
        tag: 'Lake Cruise',
      },
      {
        name: 'Bagore Ki Haveli Dharohar Dance',
        description: 'Evening Rajasthani folk music, puppet art, and vibrant brass-pot balancing performances.',
        tag: 'Cultural Showcase',
      },
      {
        name: 'Monsoon Palace (Sajjangarh)',
        description: 'Hilltop fortress built to watch monsoon clouds gather over the Mewar valleys.',
        tag: 'Panoramic Sunset',
      },
    ],
    travelTips: [
      {
        title: 'Walk the Old City',
        content: 'Streets around Lal Ghat and Gangaur Ghat are narrow; walking or taking small auto-rickshaws is much faster than cars.',
      },
      {
        title: 'Sunset Timing',
        content: 'Book the 5:00 PM sunset boat from Rameshwar Ghat for magical twilight reflections.',
      },
      {
        title: 'Artisan Miniature Paintings',
        content: 'Udaipur is renowned for fine Mewar miniature painting on silk and paper; seek out authentic family ateliers.',
      },
    ],
    climateSummary: 'Subtropical desert climate; winters are mild and pleasant (12°C to 26°C); monsoons fill the lakes.',
    howToReach: {
      air: 'Maharana Pratap Airport (UDR) is 22 km from the old city.',
      rail: 'Udaipur City Railway Station (UDZ) connects directly to Delhi, Mumbai, and Jaipur.',
      road: 'Scenic drive from Ahmedabad (approx. 4.5 hours) or Jaipur via NH-48.',
    },
  },
  {
    id: 'hampi',
    slug: 'hampi',
    name: 'Hampi',
    state: 'Karnataka',
    country: 'India',
    tagline: 'Surreal boulder-strewn kingdom of the ancient Vijayanagara Empire',
    description:
      'Scattered across a Martian landscape of rust-colored granite boulders and banana plantations, Hampi was once one of the richest medieval metropolises in the world. Its UNESCO-listed monoliths, musical pillars, and riverside ruins inspire profound awe.',
    heroImage:
      'https://images.unsplash.com/photo-1600100397608-f46399a9b6eb?auto=format&fit=crop&w=1600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1600100397608-f46399a9b6eb?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1587922546307-776227941871?auto=format&fit=crop&w=800&q=80',
    ],
    categories: ['heritage', 'adventure', 'nature'],
    recommendedSeasons: ['winter', 'autumn'],
    bestMonths: 'October to February',
    estimatedBudget: {
      min: 10000,
      max: 22000,
      currency: '₹',
      tier: 'budget',
      periodDescription: '3-4 Days per person (Excl. flights)',
      breakdown: {
        accommodation: '₹1,200 - ₹3,200 / night (Riverside guesthouse or heritage resort)',
        food: '₹500 - ₹1,100 / day (South Indian banana leaf breakfast, wood-fired cafe pizzas)',
        activities: '₹1,000 - ₹2,500 (ASI monument pass, coracle boat ride on Tungabhadra)',
        localTransport: '₹400 - ₹800 / day (Bicycle or moped rental)',
      },
    },
    idealDuration: '3 - 4 Days',
    featured: false,
    popularityRank: 10,
    attractions: [
      {
        name: 'Vittala Temple & Stone Chariot',
        description: 'Architectural masterpiece featuring the famous carved stone chariot and musical resonant pillars.',
        tag: 'UNESCO Monument',
      },
      {
        name: 'Virupaksha Temple',
        description: 'Living 7th-century temple dedicated to Shiva rising on the banks of Tungabhadra River.',
        tag: 'Sacred Complex',
      },
      {
        name: 'Matanga Hill Sunrise',
        description: 'The highest point in central Hampi offering unforgettable 360-degree views of boulder valleys.',
        tag: 'Sunrise Panorama',
      },
      {
        name: 'Coracle Ride across Tungabhadra',
        description: 'Traditional circular reed boat journey past ancient carvings and granite gorges.',
        tag: 'River Experience',
      },
    ],
    travelTips: [
      {
        title: 'Bicycle Exploration',
        content: 'Renting a bicycle or moped is the best way to explore the expansive ruins at your own pace.',
      },
      {
        title: 'Sun Protection',
        content: 'The boulder landscape offers little shade; carry a wide-brimmed hat, sunglasses, and plenty of water.',
      },
      {
        title: 'Licensed Guides',
        content: 'Hire an official ASI-certified guide at Vittala Temple to understand the fascinating history carved into the stone.',
      },
    ],
    climateSummary: 'Dry tropical climate. Very hot in summers (up to 40°C); pleasant and breezy in winters (16°C-30°C).',
    howToReach: {
      air: 'Jindal Vijayanagar Airport (VDY) in Bellary (35 km) or Hubballi Airport (140 km).',
      rail: 'Hosapete Junction (HPT) is 12 km from Hampi, connected to Bengaluru and Goa.',
      road: 'Well-paved 6-hour highway drive from Bengaluru via NH-48 and NH-50.',
    },
  },
  {
    id: 'varanasi',
    slug: 'varanasi',
    name: 'Varanasi',
    state: 'Uttar Pradesh',
    country: 'India',
    tagline: 'The timeless spiritual heart of India on the sacred banks of the Ganga',
    description:
      'Continuously inhabited for over 3,000 years, Kashi (Varanasi) is the spiritual epicenter of India. Life, death, philosophy, and devotion unfold continuously along its 84 ghats bathed in golden morning light.',
    heroImage:
      'https://images.unsplash.com/photo-1561359313-0639aad49ca6?auto=format&fit=crop&w=1600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1561359313-0639aad49ca6?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80',
    ],
    categories: ['spiritual', 'heritage'],
    recommendedSeasons: ['winter', 'autumn'],
    bestMonths: 'October to March',
    estimatedBudget: {
      min: 9500,
      max: 21000,
      currency: '₹',
      tier: 'budget',
      periodDescription: '3-4 Days per person (Excl. flights)',
      breakdown: {
        accommodation: '₹1,200 - ₹3,500 / night (Heritage ghat-facing Haveli or comfortable inn)',
        food: '₹500 - ₹1,000 / day (Banarasi Kachori Sabzi, Malaiyo froth dessert, thick lassi in clay kulhads)',
        activities: '₹1,000 - ₹2,500 (Dawn rowing boat ride, Sarnath Buddhist park entry, Ganga Aarti boat view)',
        localTransport: '₹600 - ₹1,500 (Ghat walking and e-rickshaws)',
      },
    },
    idealDuration: '3 - 4 Days',
    featured: false,
    popularityRank: 11,
    attractions: [
      {
        name: 'Dashashwamedh Ghat Evening Aarti',
        description: 'Choreographed spectacle of priests lifting huge multi-tiered brass oil lamps amidst conch sounds.',
        tag: 'Ghat Ceremony',
      },
      {
        name: 'Dawn Boat Ride on River Ganga',
        description: 'Witnessing the city awaken with morning prayers, yoga, and bathers along the mist-shrouded ghats.',
        tag: 'Morning Ritual',
      },
      {
        name: 'Kashi Vishwanath Corridor',
        description: 'Historic golden-spired Shiva temple recently expanded into a grand stone corridor to the river.',
        tag: 'Spiritual Center',
      },
      {
        name: 'Sarnath Deer Park & Stupa',
        description: 'Tranquil site 10 km away where Lord Buddha gave his first sermon after enlightenment.',
        tag: 'Buddhist Heritage',
      },
    ],
    travelTips: [
      {
        title: 'Morning Boat Experience',
        content: 'Negotiate a hand-rowed wooden boat rather than a noisy motorboat for a serene, authentic dawn journey.',
      },
      {
        title: 'Navigating the Galis',
        content: 'The old city alleyways (galis) are a maze; use recognizable landmarks like ghat names rather than GPS maps.',
      },
      {
        title: 'Street Food Hygiene',
        content: 'Varanasi has legendary food; choose stalls with high turnover where kachoris and sweets are fried fresh.',
      },
    ],
    climateSummary: 'Subtropical river basin. Pleasant cool winters (9°C to 24°C); hot dry summers.',
    howToReach: {
      air: 'Lal Bahadur Shastri International Airport (VNS) with frequent direct flights.',
      rail: 'Varanasi Junction (BSB) or Pt. Deen Dayal Upadhyaya Junction (DDU).',
      road: 'Connected via NH-19 expressway network from Lucknow, Patna, and Delhi.',
    },
  },
  {
    id: 'meghalaya',
    slug: 'meghalaya',
    name: 'Meghalaya & Cherrapunji',
    state: 'Meghalaya',
    country: 'India',
    tagline: 'Abode of clouds, living root bridges, and roaring emerald waterfalls',
    description:
      'Perched in Northeast India, Meghalaya is a misty wonderland of subtropical forests, limestone caverns, crystal-clear rivers, and indigenous Khasi bio-engineering seen in ancient living root bridges crafted from living fig trees.',
    heroImage:
      'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=800&q=80',
    ],
    categories: ['nature', 'adventure', 'romantic'],
    recommendedSeasons: ['monsoon', 'autumn', 'winter'],
    bestMonths: 'September to May (June-Aug for dramatic monsoon water)',
    estimatedBudget: {
      min: 17000,
      max: 35000,
      currency: '₹',
      tier: 'moderate',
      periodDescription: '5-6 Days per person (Excl. flights)',
      breakdown: {
        accommodation: '₹1,800 - ₹4,500 / night (Pine hillside resort in Shillong or rustic Sohra homestay)',
        food: '₹700 - ₹1,400 / day (Khasi Jadoh, bamboo shoot curry, fresh orange honey)',
        activities: '₹1,500 - ₹4,000 (Root bridge trekking guide, Dawki boating, Mawsmai cave entry)',
        localTransport: '₹3,500 - ₹6,500 (Dedicated tourist cab across Shillong, Sohra, Dawki circuit)',
      },
    },
    idealDuration: '5 - 6 Days',
    featured: false,
    popularityRank: 12,
    attractions: [
      {
        name: 'Double Decker Living Root Bridge',
        description: 'Nongriat village wonder grown over generations by guiding Ficus elastica roots across mountain streams.',
        tag: 'Bio-Engineering',
      },
      {
        name: 'Nohkalikai Falls',
        description: 'India’s tallest plunge waterfall dropping 340 meters from cliff tops into a deep turquoise pool.',
        tag: 'Epic Waterfall',
      },
      {
        name: 'Dawki & Umngot River',
        description: 'Crystal river so translucent that wooden boats appear to float in mid-air over the riverbed pebbles.',
        tag: 'Glass River',
      },
      {
        name: 'Mawsmai & Arwah Caves',
        description: 'Fascinating limestone cave systems with prehistoric fossils and subterranean stalactites.',
        tag: 'Cave Exploration',
      },
    ],
    travelTips: [
      {
        title: 'Nongriat Stair Climb',
        content: 'Trekking to the Double Decker Root Bridge involves 3,500 steep stone steps each way. Carry trekking poles and stay overnight in Nongriat if possible.',
      },
      {
        title: 'Rain Gear',
        content: 'Sohra (Cherrapunji) receives extraordinary precipitation; carry a sturdy waterproof jacket and water-resistant pack cover.',
      },
      {
        title: 'Respect Cleanliness',
        content: 'Villages in Meghalaya (including Mawlynnong) have a proud culture of cleanliness. Avoid single-use plastics and carry waste back.',
      },
    ],
    climateSummary: 'Subtropical highland climate. Lush, cloud-shrouded rainfall in monsoon; cool, crisp winters (8°C-18°C).',
    howToReach: {
      air: 'Shillong Airport (Umroi - SHL) or Guwahati Airport (GAU - 120 km away with nationwide flights).',
      rail: 'Guwahati Railway Station (GHY) is the major transit point with shared and private cabs.',
      road: 'Scenic 3-hour hill drive on NH-6 connecting Guwahati to Shillong past Umiam Lake.',
    },
  },
];

export const TRAVEL_STYLES = [
  {
    key: 'mountain',
    title: 'Mountain Escapes',
    description: 'Crisp alpine air, pine trails, snowy peaks, and scenic valley hideaways.',
    image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=800&q=80',
    count: '6 Destinations',
  },
  {
    key: 'beach',
    title: 'Beach Holidays',
    description: 'Tropical coves, palm-lined sands, vibrant sunset shacks, and seaside calm.',
    image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=800&q=80',
    count: '3 Destinations',
  },
  {
    key: 'adventure',
    title: 'Adventure Trips',
    description: 'High passes, white-water rapids, paragliding, and rugged frontier trails.',
    image: 'https://images.unsplash.com/photo-1581793745862-99fde7fa73d2?auto=format&fit=crop&w=800&q=80',
    count: '5 Destinations',
  },
  {
    key: 'heritage',
    title: 'Heritage & Culture',
    description: 'Centuries-old fortresses, royal havelis, UNESCO ruins, and living history.',
    image: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=800&q=80',
    count: '5 Destinations',
  },
  {
    key: 'nature',
    title: 'Nature & Wildlife',
    description: 'Emerald backwaters, living root bridges, tea slopes, and national parks.',
    image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=800&q=80',
    count: '6 Destinations',
  },
  {
    key: 'romantic',
    title: 'Romantic Getaways',
    description: 'Palace sunsets, private houseboats, cozy fireplaces, and lakeside dinners.',
    image: 'https://images.unsplash.com/photo-1595815771614-ade9d652a65d?auto=format&fit=crop&w=800&q=80',
    count: '6 Destinations',
  },
  {
    key: 'weekend',
    title: 'Weekend Trips',
    description: 'Quick rejuvenating escapes within convenient road and rail proximity.',
    image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80',
    count: '4 Destinations',
  },
  {
    key: 'spiritual',
    title: 'Spiritual Journeys',
    description: 'Sacred river ghats, ancient ashrams, ringing temple bells, and meditation spaces.',
    image: 'https://images.unsplash.com/photo-1561359313-0639aad49ca6?auto=format&fit=crop&w=800&q=80',
    count: '3 Destinations',
  },
];

export const EDITORIAL_STORIES = [
  {
    id: 'story-mountains',
    title: 'A Weekend in the Mountains: Escaping to Pine Valleys',
    subtitle: 'From morning walks in cedar forests to evening tea overlooking snowy ridges.',
    readTime: '4 min read',
    category: 'Mountain Escapes',
    image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=800&q=80',
    destinationSlug: 'manali',
    content:
      'High in the mountains, time decelerates. Whether you choose the artistic cafes of Old Manali or the tranquil tea slopes of Darjeeling, an alpine weekend allows your mind to reset. Pack light woolens, seek out independent village homestays, and prioritize early mornings when mist clears over snowy peaks.',
  },
  {
    id: 'story-rajasthan',
    title: 'Exploring Rajasthan’s Heritage: Amber Walls & Mirrored Courtyards',
    subtitle: 'Navigating Jaipur and Udaipur with an eye for architecture and artisan traditions.',
    readTime: '5 min read',
    category: 'Heritage & Culture',
    image: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=800&q=80',
    destinationSlug: 'jaipur',
    content:
      'The Rajput kings built with drama and defensive prowess. In Jaipur, the honeycombed Hawa Mahal caught summer breezes for royal ladies, while Udaipur’s City Palace mirrored sunset light across Pichola. Take composite passes to avoid ticketing lines, visit forts early at 8:30 AM, and sample authentic Dal Baati at heritage diners.',
  },
  {
    id: 'story-coastal',
    title: 'A Relaxing Coastal Escape: Beyond the Crowded Beaches',
    subtitle: 'Finding quiet sand coves, Portuguese architecture, and slow seafood dining in South Goa.',
    readTime: '4 min read',
    category: 'Beach Holidays',
    image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=800&q=80',
    destinationSlug: 'goa',
    content:
      'True Goan relaxation is found away from crowded highway strips. Rent a scooter to explore the pastel yellow chapels of Fontainhas, then head south toward Cabo de Rama and Agonda. Watch fishermen bring in the day’s mackerel catch while drinking fresh coconut water at a family-run shack.',
  },
];
