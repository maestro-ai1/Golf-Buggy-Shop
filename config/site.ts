// Master Single Source of Truth for Buggies For Sale Australia (Buggies Unlimited Style)

export interface Product {
  slug: string;
  sku: string;
  name: string;
  price: number;
  rrp?: number;
  category: string;
  subcategory: string;
  brand: string;
  fitsMakes?: string[];
  shortDescription: string;
  description: string;
  specs: Record<string, string>;
  options?: string[];
  badge?: string;
  images: string[];
  inStock: boolean;
  featured?: boolean;
  rating: number;
  reviewsCount: number;
  tags: string[];
  leadTime?: string;
}

export interface Category {
  slug: string;
  name: string;
  h1: string;
  shortDescription: string;
  introCopy: string;
  subcategories: { slug: string; name: string; description: string }[];
  image: string;
  featured?: boolean;
}

export interface BlogPost {
  slug: string;
  title: string;
  seoTitle: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  targetKeyword: string;
  image: string;
  content: string[];
}

export const SITE = {
  name: 'Buggies For Sale',
  legalName: 'Buggies For Sale Australia Pty Ltd',
  tagline: 'Australia’s Premier Buggy, Golf Cart & Parts Superstore',
  domain: 'buggiesforsale.com.au',
  locale: 'en-AU',
  currency: 'AUD',
  currencySymbol: '$',
  target: 'vercel',
  primaryColor: '#0B2545', // Deep Automotive Navy
  accentRed: '#D32F2F',    // Energetic Buggies Unlimited Red
  accentOrange: '#EA580C', // Alert / Specials Orange
  gscVerification: 'GSC_VERIFICATION_PLACEHOLDER',
  indexNowKey: 'bfs-indexnow-key-2026',
  cartKey: 'bfs-cart-v1',
  trustpilotScore: 4.9,
  trustpilotTotalReviews: 1024,
  trustpilotSince: 2023,
};

export const CONTACT = {
  phone: '0420 128 746',
  phoneInternational: '+61420128746',
  email: 'sales@buggiesforsale.com.au',
  abn: '53 635 284 267',
  address: 'Commercial Logistics & Freight Hub, Sydney NSW 2148 [AUSTRALIA-WIDE DEPOTS]',
  hq: 'Sydney, New South Wales, Australia',
  country: 'Australia',
  hours: 'Mon-Fri: 8:00 AM – 6:00 PM AEST | Sat: 9:00 AM – 3:00 PM',
  whatsappUrl: 'https://wa.me/61420128746',
};

export const SHOP = {
  minOrder: 500,
  freeShippingThreshold: 1000,
  shippingFee: 95,
  cryptoDiscount: 5,
  paymentMethods: [
    'Direct Bank Transfer (EFT)',
    'PayID Instant Transfer',
    'Visa / Mastercard / Amex',
    'Cryptocurrency (BTC / USDT - 5% Discount)',
    'Commercial Fleet Invoice / PO',
  ],
};

export const FORMS = {
  provider: 'smtp',
  smtpFrom: 'sales@buggiesforsale.com.au',
  web3formsKey: 'YOUR_WEB3FORMS_ACCESS_KEY',
};

export const REPLY = {
  brand: { primary: '#0B2545', headerDark: '#07172C' },
  currency: { code: 'AUD', symbol: '$' },
  orderPrefix: 'BFS',
  headerTagline: 'Australia’s Buggy Superstore · Sydney, Brisbane, Melbourne Depots',
  dispatchLine: 'Depot dispatch within 24-48 business hours via insured heavy freight carrier.',
  bizNumber: { label: 'ABN', value: '53 635 284 267' },
  channels: { email: 'sales@buggiesforsale.com.au', whatsapp: '0420 128 746', whatsappCountryCode: '61' },
  deadlineHours: 48,
  paymentMethods: [
    {
      id: 'eft',
      label: 'Direct Bank Transfer (EFT / PayID)',
      opening: 'Please transfer {amount} using order reference {ref}.',
      closing: 'Payment confirmed same business day. Delivery allocated immediately upon receipt.',
      instantRailNote: 'PayID: sales@buggiesforsale.com.au (Instant settlement)',
    },
    {
      id: 'crypto',
      label: 'Cryptocurrency (5% Discount applied)',
      opening: 'Transfer {amount} in BTC or USDT to receive an extra 5% instant checkout saving.',
      closing: 'Blockchain confirmation required before freight booking.',
      discount: { percent: 5, label: '5% Crypto Discount' },
    },
  ],
};

export const CHAT = {
  channels: [
    { type: 'whatsapp', label: 'WhatsApp Live Support', value: '61420128746', url: 'https://wa.me/61420128746' },
    { type: 'phone', label: 'Call 0420 128 746', value: '0420 128 746', url: 'tel:+61420128746' },
    { type: 'email', label: 'Email Sales & Support', value: 'sales@buggiesforsale.com.au', url: 'mailto:sales@buggiesforsale.com.au' },
    { type: 'sms', label: 'SMS Text Message', value: '0420 128 746', url: 'sms:+61420128746' },
  ],
};

export const BRAND = {
  foundingYear: '2023',
  foundingLocation: 'Sydney, New South Wales, Australia',
  description: 'Buggies For Sale is Australia’s specialized superstore for commercial golf carts, lifted electric buggies, heavy-duty UTV side-by-sides, remote-control caddies, and genuine performance parts with nationwide freight delivery.',
  milestones: [
    { year: '2023', event: 'Launched Buggies For Sale platform establishing Sydney central parts and freight hub.' },
    { year: '2024', event: 'Surpassed 1,000+ verified Australian customer deliveries and expanded remote golf buggy range.' },
    { year: '2025', event: 'Partnered with leading Australian commercial golf clubs, holiday parks, and mining stations for electric fleet supply.' },
    { year: '2026', event: 'Expanded nationwide network across Brisbane, Melbourne, Adelaide, and Perth regional freight hubs.' },
  ],
  differentiation: [
    'Guaranteed Exact Fitment on Club Car, EZGO, Yamaha & UTV models',
    '100% Pre-Delivery Inspected (PDI) in Australia prior to crating and dispatch',
    'Full Australian Parts & Support Guarantee with local technical mechanics on call',
    'Australia-wide tailgate freight delivery straight to private residences, farms, or golf clubs',
  ],
  awards: [
    'Australia E-Commerce Excellence Nominee (Outdoor & Powersports 2024)',
    'Verified 4.9/5 Rating across 1,000+ customer deliveries',
  ],
  sameAs: [
    'https://facebook.com/buggiesforsaleau',
    'https://instagram.com/buggiesforsaleau',
    'https://youtube.com/@buggiesforsaleau',
  ],
};

export const POPULAR_MAKES = [
  { id: 'club-car', name: 'Club Car', models: ['Precedent', 'DS', 'Tempo', 'Onward', 'Carryall'] },
  { id: 'ezgo', name: 'E-Z-GO', models: ['TXT', 'RXV', 'Valor', 'Express', 'Liberty'] },
  { id: 'yamaha', name: 'Yamaha', models: ['Drive (G29)', 'Drive2', 'G14-G22', 'UMAX'] },
  { id: 'mgi', name: 'MGI Golf', models: ['Zip Navigator AT', 'Zip X5', 'Zip X3', 'Quad Co-Pilot'] },
  { id: 'polaris', name: 'Polaris & UTVs', models: ['Apex 1000', 'Ranger 1000', 'RZR Trail', 'General'] },
  { id: 'motocaddy', name: 'Motocaddy', models: ['M7 GPS', 'M5 GPS', 'M1 DHC', 'S1 Electric'] },
];

export const CATEGORIES: Category[] = [
  {
    slug: 'off-road',
    name: 'Off-Road & Recreational Buggies',
    h1: 'Off-Road Buggies For Sale Australia',
    shortDescription: 'Heavy-duty Side-by-Sides (SSV), 4x4 UTV workhorses, dune buggies, go-karts, and electric trail buggies built for rugged Australian terrain.',
    introCopy: 'Explore Australia’s most formidable lineup of off-road buggies for sale. Whether you require an all-wheel-drive farm UTV, high-adrenaline sand dune rail, or whisper-quiet electric hunting buggy, our range is engineered to tackle sand dunes, mud trails, rocky properties, and regional acreage with unyielding durability.',
    image: 'https://images.unsplash.com/photo-1579882392193-455a3a29f8c6?auto=format&fit=crop&w=800&q=80',
    featured: true,
    subcategories: [
      { slug: 'side-by-sides-utvs', name: 'Side-by-Sides (SSV) & UTVs', description: 'Dual and 4-seater agricultural workhorses and high-performance recreational trail machines.' },
      { slug: 'dune-buggies-go-karts', name: 'Dune Buggies & Go-Karts', description: 'Roll-cage protected sand rails, petrol buggies, and track go-karts for all ages.' },
      { slug: 'youth-kids-buggies', name: 'Youth & Kids Buggies', description: 'Speed-governed, remote-kill safety equipped youth buggies designed for family fun.' },
      { slug: 'electric-off-road', name: 'Electric Off-Road Buggies', description: 'Zero-emission high-torque 72V lithium battery powered silent utility and hunting buggies.' },
    ],
  },
  {
    slug: 'golf-buggies',
    name: 'Golf Buggies & Carts',
    h1: 'Golf Buggies For Sale Australia — Electric, Remote & Ride-On',
    shortDescription: 'Cutting-edge remote control golf caddies, motorized lithium electric buggies, premium 3 & 4-wheel push carts, and multi-passenger ride-on resort carts.',
    introCopy: 'Tee off with Australia’s highest-rated golf buggies for sale. We stock industry-leading motorized caddies, ultra-compact remote control buggies with gyroscope tracking, lightweight push carts, and luxury ride-on electric carts suited for private estate living and golf course management.',
    image: 'https://images.unsplash.com/photo-1593111774642-a164b711d95a?auto=format&fit=crop&w=800&q=80',
    featured: true,
    subcategories: [
      { slug: 'remote-control-golf', name: 'Remote Control Golf Buggies', description: 'Full directional handheld and gesture remote buggies with downhill speed regulation and auto-tracking.' },
      { slug: 'motorised-electric-golf', name: 'Motorised / Electric Golf Buggies', description: 'Reliable handle-controlled electric buggies powered by ultra-light lithium phosphate batteries.' },
      { slug: 'push-pull-golf-buggies', name: 'Push & Pull Golf Buggies (3 & 4 Wheel)', description: 'Foldable, aircraft-grade aluminium manual buggies with ball-bearing smooth rolling wheels.' },
      { slug: 'ride-on-golf-carts', name: 'Ride-On Golf Carts / Estate Vehicles', description: '2, 4, and 6-seater premium electric golf carts for fairways, gated communities, and resorts.' },
    ],
  },
  {
    slug: 'parts-accessories',
    name: 'Parts & Accessories',
    h1: 'Buggy Parts & Accessories Australia',
    shortDescription: 'Replacement lithium batteries, all-terrain tyres & wheels, lift kits, winches, windshields, weather covers, and maintenance tooling.',
    introCopy: 'Keep your machine performing at peak factory specification. Our comprehensive Australian parts depot houses genuine replacement components, lithium battery conversion kits, all-weather canopies, and high-tensile trail recovery gear for all major buggy models.',
    image: 'https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=800&q=80',
    featured: true,
    subcategories: [
      { slug: 'off-road-parts', name: 'Off-Road Parts & Upgrades', description: 'Replacement carburetors, suspension lifts, all-terrain beadlock rims, and heavy-duty 4500lb winches.' },
      { slug: 'golf-buggy-parts', name: 'Golf Buggy Parts & Tech', description: 'Drop-in lithium 24V/36V/48V batteries, quick chargers, umbrella extensions, and smartphone GPS mounts.' },
      { slug: 'universal-maintenance', name: 'Universal Maintenance', description: 'High-grade synthetic oils, filter kits, heavy-duty ratchet tie-downs, and waterproof weather covers.' },
    ],
  },
  {
    slug: 'brand-hub',
    name: 'Brand Hub',
    h1: 'Shop Leading Buggy Brands in Australia',
    shortDescription: 'Explore factory-backed models and genuine parts from Club Car, E-Z-GO, Yamaha, Polaris, MGI Golf, Motocaddy, and Segway Powersports.',
    introCopy: 'Shop with supreme confidence by brand. Buggies For Sale is an authorized retailer and distributor for the world’s preeminent buggy manufacturers. Every machine is supplied with full Australian factory warranty, local technical service access, and guaranteed spare parts support.',
    image: 'https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?auto=format&fit=crop&w=800&q=80',
    featured: true,
    subcategories: [
      { slug: 'club-car', name: 'Club Car Australia', description: 'Aircraft aluminium AlumiCore chassis and luxury fairway electric carts.' },
      { slug: 'mgi-golf', name: 'MGI Golf Australia', description: 'Aussie designed world-leading remote control and motorized golf buggies.' },
      { slug: 'motocaddy', name: 'Motocaddy', description: 'Award-winning electric golf buggies with integrated high-resolution touchscreen GPS.' },
      { slug: 'polaris-commercial', name: 'Polaris & UTV Class', description: 'Legendary off-road durability, all-wheel drive stability, and unmatched towing capacity.' },
    ],
  },
  {
    slug: 'clearance',
    name: 'Clearance & Deals',
    h1: 'Clearance Buggies For Sale — Ex-Demo & Overstock Deals',
    shortDescription: 'Limited-quantity ex-demo models, previous year run-out buggies, and factory refurbished carts with full warranty at substantial discounts.',
    introCopy: 'Discover massive savings on quality checked ex-display models, seasonal run-outs, and overstocked warehouse inventory. Every clearance buggy undergoes a rigorous 42-point mechanical and battery diagnostic inspection prior to listing.',
    image: 'https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&w=800&q=80',
    featured: false,
    subcategories: [
      { slug: 'ex-demo-golf', name: 'Ex-Demo Golf Caddies', description: 'Showroom display and demo day models with 100% battery capacity.' },
      { slug: 'factory-overstock-utv', name: 'Factory Overstock UTVs', description: 'Brand new previous model year buggies with full Australian manufacturer warranty.' },
    ],
  },
];

export const PRODUCTS: Product[] = [
  {
    slug: 'club-car-tempo-lithium-2-seater-golf-cart',
    sku: 'BFS-CC-TEMPO-LI',
    name: 'Club Car Tempo Lithium 2-Seater Electric Golf Cart',
    price: 13950,
    rrp: 15400,
    category: 'golf-buggies',
    subcategory: 'ride-on-golf-carts',
    brand: 'Club Car',
    fitsMakes: ['Club Car'],
    shortDescription: 'Rustproof AlumiCore automotive frame, zero-maintenance commercial lithium-ion battery, dual USB charging ports, premium sculpted seating, and tinted fold-down windshield.',
    description: 'The global benchmark in fairway luxury and community estate transport. Club Car Tempo combines classic automotive styling with modern lithium-ion acceleration. The rustproof aircraft-grade aluminium chassis will never corrode in salty coastal Australian climates. Includes dual USB charge ports, split folding windshield, and integrated golf bag rack.',
    specs: {
      Frame: 'AlumiCore Rust-Proof Aircraft Aluminium',
      Battery: '48V Commercial Lithium-Ion with 6-Year Battery Warranty',
      Speed: 'Factory set 24 km/h with turf-friendly acceleration',
      Brakes: 'Self-adjusting rear mechanical drum with park lock',
      Accessories: 'Dual sand bottles, club washer, split windscreen included',
      Passenger: '2-Passenger with deep foam marine-grade vinyl upholstery',
    },
    options: ['Pearl Metallic White', 'Navy Blue', 'British Racing Green'],
    badge: 'Best Seller Fairway',
    images: [
      'https://images.unsplash.com/photo-1593111774642-a164b711d95a?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?auto=format&fit=crop&w=800&q=80',
    ],
    inStock: true,
    featured: true,
    rating: 5.0,
    reviewsCount: 67,
    tags: ['Golf cart for sale', 'Club Car Australia', 'Ride on golf buggy', 'Electric golf cart'],
    leadTime: 'In Stock — Sydney & Brisbane Depot',
  },
  {
    slug: 'mgi-zip-navigator-at-remote-golf-buggy',
    sku: 'BFS-MGI-ZIPNAV',
    name: 'MGI Zip Navigator All-Terrain Remote Control Golf Buggy',
    price: 1999,
    rrp: 2299,
    category: 'golf-buggies',
    subcategory: 'remote-control-golf',
    brand: 'MGI Golf',
    fitsMakes: ['MGI Golf'],
    shortDescription: 'Patented Gyroscope Straight Tracker technology, twin 230W whisper-quiet calibrated motors, 24V 380Wh Click & Go Lithium battery, and full directional remote.',
    description: 'The pinnacle of remote control caddies. Walk the course untethered while your golf clubs glide smoothly over undulating fairways. The patented gyroscope system detects terrain shifts automatically and keeps the buggy tracking laser-straight across severe hill slopes. Features effortless one-action zip fold design and rear anti-tip wheel.',
    specs: {
      Control: 'Full Directional Ergonomic Handheld Remote (50m Range)',
      Motors: 'Twin 230W Calibrated Low-Noise Motors',
      Battery: '24V 380Wh Advanced Lithium (up to 36 holes per charge)',
      Folded: '70cm x 47cm x 42cm (Ultra-Compact Boot Friendly)',
      Weight: '13.0kg without battery / 15.9kg with battery',
      Features: 'Downhill Speed Regulation, Auto Electronic Brake, GPS Caddy Mount',
      Warranty: '3-Year Manufacturer Warranty',
    },
    options: ['Titanium Grey', 'Gloss Onyx Black'],
    badge: 'Top Rated Remote',
    images: [
      'https://images.unsplash.com/photo-1535131749006-b7f58c99034b?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1593111774642-a164b711d95a?auto=format&fit=crop&w=800&q=80',
    ],
    inStock: true,
    featured: true,
    rating: 5.0,
    reviewsCount: 142,
    tags: ['Remote golf buggy', 'Electric golf caddy', 'MGI Zip Navigator', 'Golf buggies for sale'],
    leadTime: 'In Stock — Dispatched within 24 Hours',
  },
  {
    slug: 'apex-1000-pro-4x4-utv',
    sku: 'BFS-APEX-1000-PRO',
    name: 'Apex 1000 Pro EPS 4x4 Side-by-Side UTV Workhorse',
    price: 18990,
    rrp: 21500,
    category: 'off-road',
    subcategory: 'side-by-sides-utvs',
    brand: 'Apex Off-Road',
    fitsMakes: ['Polaris & UTVs'],
    shortDescription: '1000cc V-Twin EFI engine (85 HP), electronic power steering, selectable 4WD with diff-lock, hydraulic tipping cargo bed, and 4500lb winch included.',
    description: 'Built specifically for grueling Australian station work and adrenaline-fuelled trail hunting. The Apex 1000 Pro features a high-output 1000cc V-Twin liquid cooled engine delivering massive low-end torque. Complete with ROPS certified roll cage, independent dual A-arm nitrogen shocks, 350kg dump bed capacity, and heavy-duty tow bar rated for 800kg.',
    specs: {
      Engine: '976cc Liquid-Cooled V-Twin EFI (85 HP)',
      Transmission: 'Automatic CVT (L/H/N/R/P) with Engine Braking',
      Drive: 'Selectable 2WD / 4WD with Front & Rear Diff Lock',
      Suspension: 'Dual A-Arm Independent with Adjustable Nitrogen Shocks',
      Payload: '450kg Gross / 350kg Cargo Bed',
      Towing: '800kg Braked Capacity',
      Wheels: '14-inch Aluminium Rims with 27-inch 6-Ply Mud Tyres',
      Warranty: '2-Year Australian Factory Warranty',
    },
    options: ['Desert Camo', 'Tactical Matte Charcoal', 'Outback White'],
    badge: 'Best Seller 4x4',
    images: [
      'https://images.unsplash.com/photo-1579882392193-455a3a29f8c6?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=800&q=80',
    ],
    inStock: true,
    featured: true,
    rating: 4.9,
    reviewsCount: 38,
    tags: ['4x4 UTV', 'Side by Side for sale', 'Farm buggy Australia', '1000cc Buggy'],
    leadTime: 'Depot Ready (Sydney / Brisbane / Melbourne)',
  },
  {
    slug: 'sandstorm-200cc-dune-buggy-go-kart',
    sku: 'BFS-SS-200-TRAIL',
    name: 'Sandstorm 200cc Trail & Dune Buggy Go-Kart',
    price: 3690,
    rrp: 4100,
    category: 'off-road',
    subcategory: 'dune-buggies-go-karts',
    brand: 'Sandstorm Racing',
    fitsMakes: ['Polaris & UTVs'],
    shortDescription: '200cc 4-Stroke GY6 engine, automatic CVT with reverse, full tubular roll cage, twin sports bucket seats with 4-point harnesses, and digital dashboard.',
    description: 'A pure adrenaline machine designed for farm trails, private dirt tracks, and open acreage. Features electric key start, adjustable slide seats, dual hydraulic disc brakes, and rugged off-road knobby tyres. Fitted with heavy-gauge steel roll cage, padded safety padding, and twin LED headlights for twilight riding.',
    specs: {
      Engine: '200cc 4-Stroke Air-Cooled OHV Single Cylinder',
      Starter: 'Electric Push Button with Backup Pull Start',
      Transmission: 'Automatic F-N-R (Forward, Neutral, Reverse)',
      TopSpeed: 'Governable up to 55 km/h',
      Brakes: 'Dual Ventilated Hydraulic Disc Brakes',
      Seating: 'Dual Racing Bucket Seats with 4-Point Harness Belts',
      WeightCapacity: '180kg Max Rider Load',
    },
    options: ['Desert Orange', 'Matte Black', 'Electric Blue'],
    badge: 'Popular Fun Buggy',
    images: [
      'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1579882392193-455a3a29f8c6?auto=format&fit=crop&w=800&q=80',
    ],
    inStock: true,
    featured: true,
    rating: 4.8,
    reviewsCount: 56,
    tags: ['Dune buggies for sale', 'Go kart for sale Australia', '200cc Buggy', 'Youth off road'],
    leadTime: 'Sydney & Brisbane Warehouse Stock',
  },
  {
    slug: 'volterra-electric-silent-4x4-hunting-buggy',
    sku: 'BFS-VOLT-72V-EV',
    name: 'Volterra 72V Lithium Silent 4x4 Off-Road Utility Buggy',
    price: 16490,
    rrp: 18200,
    category: 'off-road',
    subcategory: 'electric-off-road',
    brand: 'Volterra EV',
    fitsMakes: ['Club Car', 'Polaris & UTVs'],
    shortDescription: '10kW AC Brushless motor, 72V 105Ah LiFePO4 battery pack (80km real-world range), whisper quiet operation, regenerative braking, and 400kg payload.',
    description: 'Engineered for eco-resorts, wildlife sanctuaries, nocturnal animal management, and low-decibel property patrols. The Volterra 72V electric buggy delivers instant 120Nm torque with zero noise, zero exhaust emissions, and minimal ongoing maintenance. Fast onboard charging plugs straight into any standard 240V Aussie wall socket.',
    specs: {
      Motor: '10kW High-Efficiency AC Induction Motor',
      Battery: '72V 105Ah Smart Lithium Iron Phosphate (LiFePO4)',
      Range: 'Up to 80-90km per single overnight charge',
      Charging: 'Onboard 15A Smart Charger (5-6 hours 0-100%)',
      Drive: 'Shaft Driven Direct Dual Differential',
      Payload: '400kg Tipping Rear Deck',
      SoundLevel: '< 35 dB (Practically inaudible on turf)',
    },
    options: ['Matte Olive Green', 'Desert Sand Tan'],
    badge: '100% Electric Silent',
    images: [
      'https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1579882392193-455a3a29f8c6?auto=format&fit=crop&w=800&q=80',
    ],
    inStock: true,
    featured: true,
    rating: 4.9,
    reviewsCount: 29,
    tags: ['Electric buggy Australia', 'Silent hunting buggy', 'Lithium UTV', 'Eco buggy for sale'],
    leadTime: 'Fast Tailgate Delivery Available',
  },
  {
    slug: 'torq-junior-110cc-kids-youth-buggy',
    sku: 'BFS-TORQ-JR-110',
    name: 'Torq Junior 110cc Kids Safety Off-Road Buggy',
    price: 2490,
    rrp: 2850,
    category: 'off-road',
    subcategory: 'youth-kids-buggies',
    brand: 'Torq Powersports',
    fitsMakes: ['Polaris & UTVs'],
    shortDescription: '110cc 4-stroke fully automatic engine, parent wireless remote engine kill switch, speed limiter screw, dual headrests, and heavy roll cage.',
    description: 'The safest, most confidence-inspiring entry buggy for youth riders aged 6 to 14. Built with parents in mind: features a remote wireless cutoff fob that stops the engine instantly from up to 80 meters away, plus a mechanical throttle limiter to lock top speed down to a gentle walking pace while beginners learn.',
    specs: {
      Engine: '110cc 4-Stroke Electric Start (Reliable Honda clone)',
      SafetyFob: 'Parent Remote Engine Kill Fob (80m range)',
      SpeedLimiter: 'Adjustable from 8 km/h to 35 km/h',
      Seat: 'Adjustable slider distance with dual 5-point race harnesses',
      Suspension: 'Front dual wishbone, rear heavy mono-shock',
      Dimensions: '155cm L x 98cm W x 115cm H',
    },
    options: ['Racing Red', 'Lime Green', 'Carbon Stealth'],
    badge: 'Parent Remote Kill Included',
    images: [
      'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1579882392193-455a3a29f8c6?auto=format&fit=crop&w=800&q=80',
    ],
    inStock: true,
    featured: true,
    rating: 4.9,
    reviewsCount: 88,
    tags: ['Kids buggies for sale', 'Childrens buggy Australia', 'Youth buggy with remote kill', 'Junior go kart'],
    leadTime: 'Direct Depot Dispatch',
  },
  {
    slug: 'motocaddy-m7-gps-remote-golf-caddy',
    sku: 'BFS-MOTO-M7GPS',
    name: 'Motocaddy M7 GPS Remote Electric Golf Buggy',
    price: 2199,
    rrp: 2499,
    category: 'golf-buggies',
    subcategory: 'remote-control-golf',
    brand: 'Motocaddy',
    fitsMakes: ['Motocaddy'],
    shortDescription: 'World’s first remote buggy with fully integrated crystal-clear 3.5” touchscreen GPS displaying over 40,000 pre-loaded golf courses worldwide.',
    description: 'Combining state-of-the-art course intelligence with responsive wireless remote navigation. The high-resolution touchscreen provides pinpoint front, middle, and back distances, hazard information, and smartphone notifications via Bluetooth, whilst the rechargeable remote control steers effortlessly across challenging golf terrain.',
    specs: {
      Display: '3.5-inch Sunlight-Readable Full Colour LCD Touchscreen',
      GPS: '40,000 Preloaded Courses (No ongoing subscription fee)',
      Remote: 'Rechargeable Ergonomic Handset with Keypad Lock',
      Battery: 'Super-lightweight Waterproof Lithium 28.8V High Power',
      Braking: 'Automatic Downhill Braking (DHC) System',
    },
    options: ['Gunmetal Grey Finish'],
    badge: 'Integrated Touch GPS',
    images: [
      'https://images.unsplash.com/photo-1535131749006-b7f58c99034b?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1593111774642-a164b711d95a?auto=format&fit=crop&w=800&q=80',
    ],
    inStock: true,
    featured: false,
    rating: 4.9,
    reviewsCount: 51,
    tags: ['Motocaddy M7', 'Remote GPS buggy', 'Electric golf buggy with screen', 'Golf buggies for sale'],
    leadTime: 'In Stock for Immediate Courier',
  },
  {
    slug: 'outback-pro-lithium-golf-buggy-battery-upgrade-kit',
    sku: 'BFS-LITH-24V-KIT',
    name: 'OutbackPro 24V 20Ah Drop-In Lithium Golf Buggy Battery Kit',
    price: 495,
    rrp: 599,
    category: 'parts-accessories',
    subcategory: 'golf-buggy-parts',
    brand: 'OutbackPro Tech',
    fitsMakes: ['MGI Golf', 'Club Car', 'Yamaha', 'E-Z-GO'],
    shortDescription: 'Ultra-lightweight 2.4kg replacement for heavy lead-acid batteries. 2000+ cycle life, built-in smart BMS, Anderson connector, and smart charger included.',
    description: 'Upgrade your sluggish golf buggy in under 2 minutes. Shed over 7kg of dead weight off your buggy frame, dramatically boosting hill-climbing power and preserving motor longevity. Delivers consistent voltage through 18 or 36 holes in a single charge without voltage sagging.',
    specs: {
      Voltage: '24V (25.6V Nominal) / Capacity: 20Ah (512Wh)',
      Weight: '2.4kg (Over 70% lighter than equivalent AGM lead-acid)',
      Lifespan: '2,000 to 3,000 Deep Discharge Cycles',
      Protections: 'Integrated Battery Management System (Overcharge, Short Circuit, Temp)',
      Warranty: '3-Year Australian Replacement Warranty',
    },
    options: ['Standard Anderson Plug', 'Torberry Adapter Lead'],
    badge: 'Top Selling Battery',
    images: [
      'https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?auto=format&fit=crop&w=800&q=80',
    ],
    inStock: true,
    featured: false,
    rating: 5.0,
    reviewsCount: 114,
    tags: ['Golf buggy lithium battery', '24V buggy battery Australia', 'MGI battery replacement', 'Buggy parts'],
    leadTime: 'Express Air Freight Available',
  },
  {
    slug: 'heavy-duty-4500lb-synthetic-rope-utv-winch-kit',
    sku: 'BFS-WINCH-4500-SYN',
    name: 'OutbackRecovery 4500lb Heavy-Duty UTV Winch with Synthetic Rope',
    price: 389,
    rrp: 480,
    category: 'parts-accessories',
    subcategory: 'off-road-parts',
    brand: 'OutbackRecovery',
    fitsMakes: ['Polaris & UTVs', 'Club Car'],
    shortDescription: 'IP68 waterproof sealed 1.9HP permanent magnet motor, 15m high-density Dyneema synthetic rope, wireless remote, and aluminium hawse fairlead.',
    description: 'Never get bogged in remote Australian sand dunes, creeks, or farm mud again. This 4500lb winch is precision-engineered for side-by-sides, recreational buggies, and farm quads. The synthetic rope is safer, lighter, and will not splinter or recoil lethally like traditional steel cable.',
    specs: {
      RatedPull: '4,500 lbs (2,041 kg) Single Line',
      Motor: '12V DC 1.9HP High-Torque Permanent Magnet',
      Rope: '15m x 6mm Premium Dyneema Synthetic Line',
      Control: 'Dual Control: Dash Rocker Switch + Wireless Pocket Remote',
      Waterproofing: 'IP68 Submersible Sealed Contactor',
    },
    options: ['Standard Black Winch Kit'],
    badge: 'Essential Trail Recovery',
    images: [
      'https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1579882392193-455a3a29f8c6?auto=format&fit=crop&w=800&q=80',
    ],
    inStock: true,
    featured: false,
    rating: 4.8,
    reviewsCount: 73,
    tags: ['UTV Winch', 'Buggy accessories Australia', 'Off road winch kit', 'Side by side parts'],
    leadTime: 'Same Day Dispatch',
  },
  {
    slug: 'all-terrain-14-inch-wheel-tire-combo-club-car-ezgo',
    sku: 'BFS-WHEEL-14AT',
    name: 'Stealth 14-inch Matte Black Wheel & 23-inch All-Terrain Tire Combo (Set of 4)',
    price: 1195,
    rrp: 1390,
    category: 'parts-accessories',
    subcategory: 'off-road-parts',
    brand: 'OutbackPro Tech',
    fitsMakes: ['Club Car', 'E-Z-GO', 'Yamaha'],
    shortDescription: 'Set of 4 mounted and balanced 14x7 aluminium alloy wheels with 23x10-14 all-terrain 4-ply trail tyres. Includes lug nuts and center caps.',
    description: 'Transform your cart with aggressive off-road stance and unmatched turf grip. Precision cast aluminium wheels in matte black finish, pre-mounted on 23-inch directional all-terrain tyres. Direct bolt-on fitment for lifted Club Car, EZGO, and Yamaha carts with 4x4 (4x101.6mm) bolt patterns.',
    specs: {
      WheelSize: '14x7 inch Matte Black Cast Aluminium',
      TireSize: '23x10-14 4-Ply All-Terrain Knobby',
      BoltPattern: '4x4 inch (4x101.6mm Standard Golf Cart)',
      Fitment: 'Requires 4-inch or 6-inch Lift Kit',
      Includes: '16x Metric Lug Nuts + 4x Snap-in Center Caps',
    },
    options: ['Standard Chrome Lugs', 'Black Spline Lugs'],
    badge: 'Popular Wheel Combo',
    images: [
      'https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1593111774642-a164b711d95a?auto=format&fit=crop&w=800&q=80',
    ],
    inStock: true,
    featured: true,
    rating: 4.9,
    reviewsCount: 44,
    tags: ['Golf cart wheels and tires', 'Lifted golf cart tires', 'Club car wheels', 'Buggies Unlimited wheels'],
    leadTime: 'Pre-Mounted Ready to Install',
  },
];

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: 'best-buggies-for-sale-australia-buyers-guide',
    title: 'The Ultimate Guide to Buying Buggies in Australia: Off-Road vs Golf Carts Explained',
    seoTitle: 'Best Buggies For Sale Australia Buyer Guide',
    excerpt: 'Comparing 4x4 UTV side-by-sides, dune buggies, electric farm carts, and remote golf buggies across Australian terrains, towing rules, and licensing.',
    category: 'Buying Guides',
    date: '12 October 2026',
    readTime: '7 min read',
    targetKeyword: 'buggies for sale',
    image: 'https://images.unsplash.com/photo-1579882392193-455a3a29f8c6?auto=format&fit=crop&w=800&q=80',
    content: [
      'Finding the ideal buggy in Australia hinges on matching terrain demands with intended duty cycle. From expansive cattle properties in Queensland to undulating sand dunes in Lancelin or championship fairways across Melbourne’s sandbelt, modern buggies have evolved into precision machines.',
      'In this exhaustive 2026 guide, our Australian vehicle specialists break down engine displacements, electric lithium configurations, rollover protection systems (ROPS), and why buying from an Australian-backed supplier with ready parts inventory safeguards your investment.',
      'Key considerations include whether you require agricultural utility rating (heavy towing and tipping beds) or recreational agile geometry with high-travel long suspension arms. Read on to see our category winners.',
    ],
  },
  {
    slug: 'remote-control-vs-motorised-golf-buggies-which-is-better',
    title: 'Remote Control vs Electric Golf Buggies: Which Fairway Caddy Outperforms in 2026?',
    seoTitle: 'Remote vs Electric Golf Buggies Guide Australia',
    excerpt: 'Detailed comparison of gyroscope navigation, battery weights, downhill braking control, and physical fatigue reduction over 18 holes.',
    category: 'Golf Tech',
    date: '28 September 2026',
    readTime: '6 min read',
    targetKeyword: 'remote control golf buggies for sale',
    image: 'https://images.unsplash.com/photo-1535131749006-b7f58c99034b?auto=format&fit=crop&w=800&q=80',
    content: [
      'Walking 18 holes of golf burns significant calories, but hauling or steering a clumsy cart leads to back strain and late-round fatigue. Modern golfers are rapidly migrating to automated caddies.',
      'Remote control models with gyroscopic straight-tracking automatically correct path deviation on severe side hills. Meanwhile, ergonomic handle-controlled motorised buggies offer bulletproof simplicity at a lower price point.',
      'We examine battery draw, boot pack-down dimensions, and how down-hill braking (DHC) prevents carts from runaway descents on steep greens.',
    ],
  },
  {
    slug: 'youth-kids-buggy-safety-checklist-australian-parents',
    title: 'Kids Off-Road Buggy Safety: Essential Features Australian Parents Must Insist On',
    seoTitle: 'Kids Buggies For Sale Safety Checklist',
    excerpt: 'Why wireless remote engine kill fobs, 4-point harnesses, roll cages, and throttle governors are non-negotiable for young riders.',
    category: 'Safety & Family',
    date: '15 September 2026',
    readTime: '5 min read',
    targetKeyword: 'kids buggies for sale australia',
    image: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&w=800&q=80',
    content: [
      'Introducing children to motorsports builds hand-eye coordination, spatial awareness, and mechanical appreciation. However, safety protocol must remain paramount.',
      'Unlike two-wheel motorbikes that tip easily, 4-wheel buggies offer a wide footprint and protective tubular roll cage. Ensure your child buggy includes a remote wireless kill switch that parents can trigger from up to 80 meters away.',
      'Learn how to calibrate speed limiters from 8 km/h walking pace through to open throttle as skills mature.',
    ],
  },
  {
    slug: 'electric-72v-lithium-vs-petrol-utv-buggies',
    title: 'Electric vs Petrol UTV Buggies: Running Costs, Noise & Torque Compared on Aussie Farms',
    seoTitle: 'Electric vs Petrol Buggies For Sale Comparison',
    excerpt: 'Real-world data on fuel savings, silent animal stalking, zero air filter clogging, and battery lifespans in 40°C Australian summer conditions.',
    category: 'Farm & Utility',
    date: '02 September 2026',
    readTime: '8 min read',
    targetKeyword: 'electric off road buggies for sale',
    image: 'https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&w=800&q=80',
    content: [
      'With regional diesel and petrol prices fluctuating, Australian farmers and landholders are scrutinising utility vehicle running costs. High-torque 72V Lithium UTVs represent the fastest growing commercial vehicle sector.',
      'Electric motors provide 100% torque from 0 RPM, allowing effortless towing of loaded trailers up steep inclines without clutch slipping or gearbox overheating.',
      'Discover why eco-resorts, livestock breeders, and commercial property managers are seeing return on investment within 18 months of transitioning to electric buggy fleets.',
    ],
  },
  {
    slug: 'golf-buggy-lithium-battery-upgrade-guide',
    title: '24V & 48V Lithium Golf Buggy Conversions: Lifespan, Weight & Speed Benefits',
    seoTitle: 'Golf Buggy Lithium Battery Upgrade Guide Australia',
    excerpt: 'How drop-in LiFePO4 batteries save 20kg of lead weight, boost motor torque on steep hills, and double battery lifespan to 2000+ cycles.',
    category: 'Golf Tech',
    date: '10 August 2026',
    readTime: '7 min read',
    targetKeyword: 'golf buggy lithium battery upgrade',
    image: 'https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=800&q=80',
    content: [
      'Heavy AGM and flooded lead-acid batteries are rapidly becoming obsolete across Australian golf clubs. A single drop-in lithium battery kit slashes more than 70% of battery weight.',
      'Lighter buggies experience zero fairway rutting, preserve electric motor brushes, and climb 30-degree inclines effortlessly without sluggish voltage sagging.',
      'Learn about internal battery management systems (BMS) that prevent overcharging and ensure fire-safe operation in Australian club storage sheds.',
    ],
  },
  {
    slug: 'top-buggy-brands-australia-2026-review',
    title: 'The Best Buggy Brands in Australia: Reliability, Warranty & Parts Availability Compared',
    seoTitle: 'Best Buggy Brands Australia 2026 Review',
    excerpt: 'Independent review of Club Car, Polaris, MGI Golf, Can-Am, Motocaddy, and Segway Powersports across Australian supply chains.',
    category: 'Brand Intelligence',
    date: '18 June 2026',
    readTime: '10 min read',
    targetKeyword: 'best buggies for sale australia',
    image: 'https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?auto=format&fit=crop&w=800&q=80',
    content: [
      'A buggy is only as reliable as the parts distribution network supporting it. In this 2026 Australian industry review, we benchmark leading brands on parts delivery speed, frame durability, and consumer warranty honouring.',
      'MGI Golf leads the motorized caddy sector with unmatched local engineering, while Polaris and Club Car dominate fairway and station reliability.',
      'Consult our comprehensive scoring matrix before committing to your next buggy investment.',
    ],
  },
];

export const FAQ_ITEMS = [
  {
    q: 'How does freight delivery work for large buggies and golf carts across Australia?',
    a: 'We operate dedicated freight logistics with heavy-carrier partners servicing Sydney, Melbourne, Brisbane, Adelaide, Perth, and regional Australia. Complete buggies are shipped crated or on specialised transport skids equipped with hydraulic tailgate unload directly to your driveway, farm gate, or business depot.',
  },
  {
    q: 'What is the minimum order value and free shipping threshold?',
    a: 'To guarantee premium freight handling and commercial wholesale pricing, our minimum order value is $500 [MINIMUM ORDER]. Orders exceeding $1,000 [FREE DELIVERY THRESHOLD] qualify for subsidized or free depot freight across major metropolitan zones.',
  },
  {
    q: 'Can I pay with cryptocurrency or direct bank transfer (EFT/PayID)?',
    a: 'Yes. We accept direct Australian bank transfer (EFT), instant PayID (sales@buggiesforsale.com.au), Visa/Mastercard/Amex, and major cryptocurrencies (BTC/USDT). When checking out with cryptocurrency, you receive an automatic 5% discount on eligible models.',
  },
  {
    q: 'Are your buggies pre-delivery inspected (PDI) before dispatch?',
    a: 'Every single buggy undergoes a comprehensive 42-point mechanical and electrical diagnostic check by our qualified technicians in Australia prior to crating. This covers brake fluid pressures, electrical harness continuity, battery health diagnostics, and torque-spec bolt inspection.',
  },
  {
    q: 'What warranty is provided with buggies and lithium batteries?',
    a: 'All buggies come with full Australian consumer warranties ranging from 12 months on recreational youth karts to 2-3 years on commercial UTVs and MGI/Club Car golf carts. Lithium battery packs feature a minimum 3-year performance guarantee under Australian Consumer Law.',
  },
  {
    q: 'Do you supply genuine spare parts, replacement tyres, and upgrades?',
    a: 'Yes. Our central Australian warehouse stocks hundreds of genuine parts including replacement lithium battery packs, chargers, all-terrain beadlock tyres, drive belts, winches, suspension arms, and weather covers ready for immediate dispatch.',
  },
  {
    q: 'Do I need a driver licence or club registration to operate these buggies?',
    a: 'Recreational buggies, go-karts, and private golf caddies on private land, farms, and golf courses do not require state road licensing. However, certain local councils and road authorities permit conditional registration for estate and road-crossing operations when equipped with lights and mirrors.',
  },
  {
    q: 'Can I submit a wholesale or commercial fleet inquiry for resorts or golf clubs?',
    a: 'Absolutely. We service golf clubs, commercial caravan parks, retirement estates, and industrial facilities with bulk multi-vehicle fleet pricing, custom liveries, and commercial lease terms. Contact our wholesale team at sales@buggiesforsale.com.au or 0420 128 746.',
  },
];
