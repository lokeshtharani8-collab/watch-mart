import { WatchProduct } from '../types/watch';

export const WATCH_PRODUCTS: WatchProduct[] = [
  // --- CASIO (6 items) ---
  {
    id: 'casio-01',
    brand: 'Casio',
    model: 'AQ-230GA-9DMQ',
    name: 'Casio Vintage Dual-Time Champagne Dial AQ-230GA-9DMQ',
    category: 'Analog-Digital',
    price: 4995,
    originalPrice: 5995,
    discount: 17,
    rating: 4.8,
    reviews: 320,
    image: 'https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=800&q=80',
    additionalImages: [
      'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1524592094714-0f0654e20314?auto=format&fit=crop&w=800&q=80'
    ],
    description: 'An iconic retro design featuring a gold-toned stainless steel link bracelet, vintage champagne dial, and integrated digital display for dual-time convenience.',
    features: [
      'Dual Time Zone analog-digital synchronization',
      '1/100-second stopwatch and daily alarm',
      'Water resistant construction for daily wear',
      'Adjustable fold-over deployment clasp'
    ],
    specifications: {
      dialColor: 'Champagne Gold',
      strapMaterial: 'Stainless Steel (Gold Tone)',
      caseDiameter: '38.8 mm',
      waterResistance: '30 Meters (3 ATM)',
      movement: 'Japanese Quartz Dual-Time',
      warranty: '2 Years Manufacturer Warranty'
    },
    availability: 'In Stock',
    gender: 'Unisex',
    featured: true
  },
  {
    id: 'casio-02',
    brand: 'Casio',
    model: 'G-Shock GA-2100-1A1DR',
    name: 'Casio G-Shock Carbon Core Guard All-Black GA-2100-1A1DR',
    category: 'Analog-Digital',
    price: 9195,
    originalPrice: 10495,
    discount: 12,
    rating: 4.9,
    reviews: 580,
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80',
    description: 'The world-famous "CasiOak" with thin carbon core guard structure, octagonal bezel, stealth matte black finish, and 200M water resistance.',
    features: [
      'Carbon Core Guard shock resistant structure',
      '200-meter water resistance suitable for diving',
      'Double LED Super Illuminator light',
      'World time for 31 time zones & 5 daily alarms'
    ],
    specifications: {
      dialColor: 'Stealth Matte Black',
      strapMaterial: 'Resin',
      caseDiameter: '45.4 mm',
      waterResistance: '200 Meters (20 ATM)',
      movement: 'Quartz Analog-Digital',
      warranty: '2 Years Manufacturer Warranty'
    },
    availability: 'In Stock',
    gender: 'Men',
    featured: true
  },
  {
    id: 'casio-03',
    brand: 'Casio',
    model: 'Vintage A168WA-1DF',
    name: 'Casio Vintage ElectroLuminescence Silver A168WA-1DF',
    category: 'Digital',
    price: 2695,
    originalPrice: 2995,
    discount: 10,
    rating: 4.7,
    reviews: 412,
    image: 'https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?auto=format&fit=crop&w=800&q=80',
    description: 'A timeless retro classic with vivid ElectroLuminescent backlight, alarm, 1/100-sec stopwatch, and polished chrome stainless steel band.',
    features: [
      'Bright EL backlight for effortless night viewing',
      'Daily alarm and hourly time signal',
      'Auto-calendar up to year 2099',
      'Chrome plated resin case with steel band'
    ],
    specifications: {
      dialColor: 'Digital LCD Gray',
      strapMaterial: 'Stainless Steel',
      caseDiameter: '36.3 mm',
      waterResistance: 'Water Resistant (Splashes)',
      movement: 'Quartz Digital',
      warranty: '2 Years Manufacturer Warranty'
    },
    availability: 'In Stock',
    gender: 'Unisex',
    featured: false
  },
  {
    id: 'casio-04',
    brand: 'Casio',
    model: 'Edifice EFR-552D-1AVUDF',
    name: 'Casio Edifice Chronograph Sport Steel EFR-552D-1AVUDF',
    category: 'Chronograph',
    price: 8495,
    originalPrice: 10995,
    discount: 23,
    rating: 4.6,
    reviews: 198,
    image: 'https://images.unsplash.com/photo-1614164185128-e4ec99c436d7?auto=format&fit=crop&w=800&q=80',
    description: 'Motorsport-inspired speed and intelligence chronograph with layered dial, date window, and screw-lock case back.',
    features: [
      '1-second stopwatch with split time capacity',
      'Sporty 3-dial display with textured backdrop',
      'Solid stainless steel band with safety clasp',
      '100-meter water resistance'
    ],
    specifications: {
      dialColor: 'Carbon Texture Black',
      strapMaterial: 'Solid Stainless Steel',
      caseDiameter: '47 mm',
      waterResistance: '100 Meters (10 ATM)',
      movement: 'Japanese Chronograph Quartz',
      warranty: '2 Years Manufacturer Warranty'
    },
    availability: 'In Stock',
    gender: 'Men',
    featured: false
  },
  {
    id: 'casio-05',
    brand: 'Casio',
    model: 'Enticer MTP-VD01D-1EVUDF',
    name: 'Casio Enticer Men Black Dial Stainless Steel MTP-VD01D',
    category: 'Analog',
    price: 2995,
    originalPrice: 3495,
    discount: 14,
    rating: 4.5,
    reviews: 260,
    image: 'https://images.unsplash.com/photo-1547996160-71dfabb1d0a5?auto=format&fit=crop&w=800&q=80',
    description: 'Crisp everyday analog watch with prominent numeric hour markers, date display at 3 o’clock, and 50-meter water resistance.',
    features: [
      'Classic 3-hand analog format with date window',
      'Anti-reflective mineral glass crystal',
      'Stainless steel bracelet with triple-fold buckle',
      'Long-life 3-year SR626SW battery'
    ],
    specifications: {
      dialColor: 'Jet Black',
      strapMaterial: 'Stainless Steel',
      caseDiameter: '45 mm',
      waterResistance: '50 Meters (5 ATM)',
      movement: 'Japanese Quartz',
      warranty: '2 Years Manufacturer Warranty'
    },
    availability: 'In Stock',
    gender: 'Men',
    featured: false
  },
  {
    id: 'casio-06',
    brand: 'Casio',
    model: 'G-Shock Mudmaster GG-B100-1A3DR',
    name: 'Casio G-Shock Master of G Mudmaster Green GG-B100',
    category: 'Analog-Digital',
    price: 24995,
    originalPrice: 28995,
    discount: 14,
    rating: 4.9,
    reviews: 145,
    image: 'https://images.unsplash.com/photo-1533139502658-0198f920d8e8?auto=format&fit=crop&w=800&q=80',
    description: 'Engineered for extreme land conditions with Quad Sensor (Compass, Altimeter/Barometer, Thermometer, Accelerometer) and Bluetooth link.',
    features: [
      'Quad sensor tracking with Smartphone Link connectivity',
      'Mud-resistant buttons and carbon fiber insert bezel',
      'Step tracker and mission log memory',
      'Super Illuminator high-luminosity LED'
    ],
    specifications: {
      dialColor: 'Tactical Black & Khaki',
      strapMaterial: 'Heavy Duty Resin (Army Green)',
      caseDiameter: '53.1 mm',
      waterResistance: '200 Meters (20 ATM)',
      movement: 'Quad Sensor Bluetooth Quartz',
      warranty: '2 Years Manufacturer Warranty'
    },
    availability: 'Low Stock (Only 2 Left)',
    gender: 'Men',
    featured: true
  },

  // --- TITAN (6 items) ---
  {
    id: 'titan-01',
    brand: 'Titan',
    model: 'Titan 1805NM01',
    name: 'Titan 1805 Workwear All-Black Analog Watch 1805NM01',
    category: 'Analog',
    price: 5495,
    originalPrice: 6995,
    discount: 21,
    rating: 4.7,
    reviews: 340,
    image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=800&q=80',
    description: 'Sophisticated modern boardroom styling featuring a dark anthracite dial, slim indices, and black ion-plated stainless steel mesh bracelet.',
    features: [
      'Sleek modern case profile suited for business attire',
      'Durable ion-plated black metal casing',
      'Scratch-resistant sapphire-coated glass',
      'Precision quartz movement crafted by Titan'
    ],
    specifications: {
      dialColor: 'Anthracite Black',
      strapMaterial: 'Stainless Steel Mesh (Black IP)',
      caseDiameter: '42 mm',
      waterResistance: '50 Meters (5 ATM)',
      movement: 'Titan In-House Quartz',
      warranty: '2 Years Manufacturer Warranty'
    },
    availability: 'In Stock',
    gender: 'Men',
    featured: true
  },
  {
    id: 'titan-02',
    brand: 'Titan',
    model: 'Neo Splash 1805SL02',
    name: 'Titan Neo Splash Navy Blue Dial Chronograph 1805SL02',
    category: 'Chronograph',
    price: 6495,
    originalPrice: 7995,
    discount: 19,
    rating: 4.6,
    reviews: 210,
    image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=800&q=80',
    description: 'Dynamic sunray ocean blue dial with tri-counter chronograph, contrasting rose gold markings, and genuine brown calfskin leather strap.',
    features: [
      'Multi-function chronograph with 24-hour sub-dial',
      'Sunburst textured dial with rose-gold accents',
      'Genuine padded leather strap with contrast stitch',
      '50-meter water resistance'
    ],
    specifications: {
      dialColor: 'Sunray Navy Blue',
      strapMaterial: 'Genuine Leather (Rich Brown)',
      caseDiameter: '43.5 mm',
      waterResistance: '50 Meters (5 ATM)',
      movement: 'Chronograph Quartz',
      warranty: '2 Years Manufacturer Warranty'
    },
    availability: 'In Stock',
    gender: 'Men',
    featured: true
  },
  {
    id: 'titan-03',
    brand: 'Titan',
    model: 'Raga Viva 2608WM01',
    name: 'Titan Raga Viva Rose Gold Mother-of-Pearl 2608WM01',
    category: 'Analog',
    price: 4995,
    originalPrice: 5995,
    discount: 17,
    rating: 4.8,
    reviews: 285,
    image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80',
    description: 'Elegance personified with natural shimmering mother-of-pearl dial, Swarovski crystal indices, and intricate jewelry bracelet.',
    features: [
      'Natural Mother-of-Pearl dial with iridescent sheen',
      'Swarovski crystal studded hour markers',
      'Rose gold jewelry self-adjustable clasp',
      'Dainty 28mm case tailored for graceful wrists'
    ],
    specifications: {
      dialColor: 'White Mother of Pearl',
      strapMaterial: 'Rose Gold Plated Brass',
      caseDiameter: '28 mm',
      waterResistance: '30 Meters (3 ATM)',
      movement: 'Titan Quartz',
      warranty: '2 Years Manufacturer Warranty'
    },
    availability: 'In Stock',
    gender: 'Women',
    featured: false
  },
  {
    id: 'titan-04',
    brand: 'Titan',
    model: 'Edge Ceramic 1696QC01',
    name: 'Titan Edge Ultra-Slim Ceramic Black 1696QC01',
    category: 'Analog',
    price: 21995,
    originalPrice: 24995,
    discount: 12,
    rating: 4.9,
    reviews: 88,
    image: 'https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?auto=format&fit=crop&w=800&q=80',
    description: 'One of the slimmest ceramic watches in the world at just 4.4mm total thickness. Pure minimalist design with scratch-proof high-tech ceramic.',
    features: [
      'World-renowned 1.15mm ultra-slim movement',
      'Hypoallergenic high-tech ceramic case and bracelet',
      'Scratch-resistant Sapphire crystal glass',
      'Satin matte black contemporary look'
    ],
    specifications: {
      dialColor: 'Minimalist Matte Black',
      strapMaterial: 'High-Tech Ceramic',
      caseDiameter: '41 mm',
      waterResistance: '30 Meters (3 ATM)',
      movement: 'Titan Edge Ultra-Thin Quartz',
      warranty: '2 Years Manufacturer Warranty'
    },
    availability: 'Low Stock (Only 2 Left)',
    gender: 'Men',
    featured: true
  },
  {
    id: 'titan-05',
    brand: 'Titan',
    model: 'Smart 3 90155AP01',
    name: 'Titan Smart 3 AMOLED Display Smartwatch 90155AP01',
    category: 'Smart Watch',
    price: 7995,
    originalPrice: 11995,
    discount: 33,
    rating: 4.5,
    reviews: 420,
    image: 'https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?auto=format&fit=crop&w=800&q=80',
    description: 'A 1.96-inch high-resolution AMOLED display with Bluetooth calling, AI voice assistant, 110+ sports modes, and 7-day battery life.',
    features: [
      '1.96" Ultra AMOLED Always-On Display with 410x502 resolution',
      'Clear Bluetooth calling with noise cancellation microphone',
      'Comprehensive health monitoring (SpO2, 24/7 Heart Rate, Sleep)',
      'IP68 water and dust resistance'
    ],
    specifications: {
      dialColor: 'Full Touch AMOLED',
      strapMaterial: 'Silicone (Midnight Blue)',
      caseDiameter: '45 mm',
      waterResistance: 'IP68 Certified',
      movement: 'Digital Smart OS',
      warranty: '1 Year Manufacturer Warranty'
    },
    availability: 'In Stock',
    gender: 'Unisex',
    featured: false
  },
  {
    id: 'titan-06',
    brand: 'Titan',
    model: 'Octane Hyper Lume 90086KM02',
    name: 'Titan Octane Hyper Lume Racing Chronograph 90086KM02',
    category: 'Chronograph',
    price: 9995,
    originalPrice: 12995,
    discount: 23,
    rating: 4.7,
    reviews: 130,
    image: 'https://images.unsplash.com/photo-1524592094714-0f0654e20314?auto=format&fit=crop&w=800&q=80',
    description: 'High-intensity SuperLumiNova dials and hands paired with a tachymeter bezel and precision split-second stopwatch.',
    features: [
      'Hyper Lume technology for hours of vivid glow',
      'Tachymeter bezel for velocity calculation',
      'Solid dual-tone stainless steel links',
      '100M water resistance with threaded back'
    ],
    specifications: {
      dialColor: 'Gunmetal Grey & Electric Orange',
      strapMaterial: 'Stainless Steel',
      caseDiameter: '46 mm',
      waterResistance: '100 Meters (10 ATM)',
      movement: 'High-Torque Chronograph',
      warranty: '2 Years Manufacturer Warranty'
    },
    availability: 'In Stock',
    gender: 'Men',
    featured: false
  },

  // --- SONATA (5 items) ---
  {
    id: 'sonata-01',
    brand: 'Sonata',
    model: 'Poze SP70014SM01',
    name: 'Sonata Poze Minimalist Silver Mesh Dial SP70014SM01',
    category: 'Analog',
    price: 1395,
    originalPrice: 1795,
    discount: 22,
    rating: 4.4,
    reviews: 490,
    image: 'https://images.unsplash.com/photo-1539185441755-769473a23570?auto=format&fit=crop&w=800&q=80',
    description: 'Youthful aesthetic with a clean silver dial, rose gold baton hands, and a flexible steel mesh band designed for daily flair.',
    features: [
      'Ultra affordable contemporary fashion design',
      'Lightweight stainless steel Milanese mesh strap',
      'Mineral glass scratch resistant face',
      'Reliable quartz mechanism'
    ],
    specifications: {
      dialColor: 'Brushed Silver',
      strapMaterial: 'Stainless Steel Mesh',
      caseDiameter: '40 mm',
      waterResistance: '30 Meters (3 ATM)',
      movement: 'Sonata Precision Quartz',
      warranty: '1 Year Manufacturer Warranty'
    },
    availability: 'In Stock',
    gender: 'Unisex',
    featured: true
  },
  {
    id: 'sonata-02',
    brand: 'Sonata',
    model: 'Volt Digital 77085PP01',
    name: 'Sonata Volt Rugged Sport Digital Watch 77085PP01',
    category: 'Digital',
    price: 995,
    originalPrice: 1295,
    discount: 23,
    rating: 4.3,
    reviews: 310,
    image: 'https://images.unsplash.com/photo-1546868871-7041f2a55e12?auto=format&fit=crop&w=800&q=80',
    description: 'Built for sports enthusiasts with multi-alarm functionality, stopwatch, shock-resistant case, and night glow EL display.',
    features: [
      'Digital stopwatch with lap memory',
      'Dual alarm and hourly chime notifications',
      'Tough polyurethane shock dampening exterior',
      'Vibrant night light'
    ],
    specifications: {
      dialColor: 'Positive LCD Digital',
      strapMaterial: 'Polyurethane Strap',
      caseDiameter: '48 mm',
      waterResistance: '30 Meters (3 ATM)',
      movement: 'Digital Quartz Module',
      warranty: '1 Year Manufacturer Warranty'
    },
    availability: 'In Stock',
    gender: 'Men',
    featured: false
  },
  {
    id: 'sonata-03',
    brand: 'Sonata',
    model: 'Sleek Analog 77042YM01',
    name: 'Sonata Sleek Classic Golden Dial 77042YM01',
    category: 'Analog',
    price: 1895,
    originalPrice: 2295,
    discount: 17,
    rating: 4.5,
    reviews: 180,
    image: 'https://images.unsplash.com/photo-1614164185128-e4ec99c436d7?auto=format&fit=crop&w=800&q=80',
    description: 'Festive traditional gold-plated dress watch featuring clean golden indices, a champagne dial, and a comfortable link bracelet.',
    features: [
      'Traditional celebratory Indian aesthetic',
      'Long-lasting electroplated gold finish',
      'Clear legible hour markers',
      'Secure fold-over clasp'
    ],
    specifications: {
      dialColor: 'Champagne Gold',
      strapMaterial: 'Gold-Plated Metal',
      caseDiameter: '38 mm',
      waterResistance: '30 Meters (3 ATM)',
      movement: 'Quartz Analog',
      warranty: '1 Year Manufacturer Warranty'
    },
    availability: 'In Stock',
    gender: 'Men',
    featured: false
  },
  {
    id: 'sonata-04',
    brand: 'Sonata',
    model: 'Poze Retro SP70020KM02',
    name: 'Sonata Poze Dual-Tone Emerald Dial SP70020KM02',
    category: 'Analog',
    price: 1695,
    originalPrice: 2195,
    discount: 22,
    rating: 4.6,
    reviews: 215,
    image: 'https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=800&q=80',
    description: 'Stand out from the crowd with a sunburst deep emerald green dial surrounded by dual-tone silver and gold steel bracelet links.',
    features: [
      'Rich deep emerald sunburst dial with gold indices',
      'Dual-tone silver & gold polished link strap',
      'Water resistant for rain and splashes',
      'Scratch-resistant mineral crystal glass'
    ],
    specifications: {
      dialColor: 'Sunburst Emerald Green',
      strapMaterial: 'Dual Tone Stainless Steel',
      caseDiameter: '41 mm',
      waterResistance: '30 Meters (3 ATM)',
      movement: 'Sonata Quartz',
      warranty: '1 Year Manufacturer Warranty'
    },
    availability: 'In Stock',
    gender: 'Men',
    featured: true
  },
  {
    id: 'sonata-05',
    brand: 'Sonata',
    model: 'SF Sport Chrono 77092PP02',
    name: 'Sonata SF Digital-Analog Explorer 77092PP02',
    category: 'Analog-Digital',
    price: 1995,
    originalPrice: 2495,
    discount: 20,
    rating: 4.4,
    reviews: 140,
    image: 'https://images.unsplash.com/photo-1533139502658-0198f920d8e8?auto=format&fit=crop&w=800&q=80',
    description: 'Tough adventurer timepiece combining analog 3-hand readout with dual digital windows for date, stopwatch, and timer.',
    features: [
      'Combo analog 3-hand and digital screen',
      'Sturdy bezel with impact-absorbing corners',
      'Comfort-fit breathable silicone strap',
      '30-meter splash resistance'
    ],
    specifications: {
      dialColor: 'Matte Grey & Red Accents',
      strapMaterial: 'Silicone Rubber',
      caseDiameter: '47 mm',
      waterResistance: '30 Meters (3 ATM)',
      movement: 'Combo Quartz Module',
      warranty: '1 Year Manufacturer Warranty'
    },
    availability: 'In Stock',
    gender: 'Men',
    featured: false
  },

  // --- FASTRACK (5 items) ---
  {
    id: 'fastrack-01',
    brand: 'Fastrack',
    model: 'Fastrack Analog 38045PP02',
    name: 'Fastrack Casual Black Dial Sporty Analog 38045PP02',
    category: 'Analog',
    price: 1595,
    originalPrice: 1995,
    discount: 20,
    rating: 4.5,
    reviews: 520,
    image: 'https://images.unsplash.com/photo-1524592094714-0f0654e20314?auto=format&fit=crop&w=800&q=80',
    description: 'Signature college & casual everyday analog watch from Fastrack featuring asymmetric hour markers and a flexible silicone band.',
    features: [
      'Bold youth styling with contrasting color hands',
      'Sweat-proof and washable soft silicone strap',
      'Lightweight polycarbonate case',
      '30-meter water resistance'
    ],
    specifications: {
      dialColor: 'Matte Black with Neon Hands',
      strapMaterial: 'Silicone',
      caseDiameter: '42 mm',
      waterResistance: '30 Meters (3 ATM)',
      movement: 'Fastrack Quartz Movement',
      warranty: '1 Year Manufacturer Warranty'
    },
    availability: 'In Stock',
    gender: 'Unisex',
    featured: true
  },
  {
    id: 'fastrack-02',
    brand: 'Fastrack',
    model: 'Reflex Beat+ 38084PP01',
    name: 'Fastrack Reflex Beat+ Smartwatch with 1.69" Display',
    category: 'Smart Watch',
    price: 1995,
    originalPrice: 3995,
    discount: 50,
    rating: 4.4,
    reviews: 630,
    image: 'https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?auto=format&fit=crop&w=800&q=80',
    description: 'Brimming with features including 60+ sports modes, 24x7 heart rate & SpO2 tracking, camera & music controls, and IP68 water resistance.',
    features: [
      '1.69" UltraVU Curved Touchscreen Display',
      '60+ Active Sports Tracking Modes',
      'Sleep, Heart Rate, and SpO2 Health Suite',
      'Up to 5 Days Battery Backup'
    ],
    specifications: {
      dialColor: 'Full HD Touch Screen',
      strapMaterial: 'Silicone (Jet Black)',
      caseDiameter: '44 mm',
      waterResistance: 'IP68 Water Resistant',
      movement: 'Smart OS',
      warranty: '1 Year Manufacturer Warranty'
    },
    availability: 'In Stock',
    gender: 'Unisex',
    featured: true
  },
  {
    id: 'fastrack-03',
    brand: 'Fastrack',
    model: 'Stunners 3240SM01',
    name: 'Fastrack Stunners Blue Dial Steel Analog 3240SM01',
    category: 'Analog',
    price: 2495,
    originalPrice: 3295,
    discount: 24,
    rating: 4.6,
    reviews: 290,
    image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=800&q=80',
    description: 'Polished silver stainless steel links meet an electric blue textured dial with geometric hour markers for sharp party style.',
    features: [
      'Vivid electric blue sunray pattern dial',
      'Solid link stainless steel bracelet',
      'Date display at 4 o’clock',
      '50-meter water resistance'
    ],
    specifications: {
      dialColor: 'Electric Blue',
      strapMaterial: 'Stainless Steel',
      caseDiameter: '43 mm',
      waterResistance: '50 Meters (5 ATM)',
      movement: 'Japanese Quartz',
      warranty: '1 Year Manufacturer Warranty'
    },
    availability: 'In Stock',
    gender: 'Men',
    featured: false
  },
  {
    id: 'fastrack-04',
    brand: 'Fastrack',
    model: 'Monochrome Bold 38072PP03',
    name: 'Fastrack Monochrome Bold Olive Green 38072PP03',
    category: 'Analog',
    price: 1795,
    originalPrice: 2295,
    discount: 21,
    rating: 4.3,
    reviews: 175,
    image: 'https://images.unsplash.com/photo-1547996160-71dfabb1d0a5?auto=format&fit=crop&w=800&q=80',
    description: 'Military inspired olive green dial and strap with oversized numbers at 3, 6, 9, and 12 for instant visibility on the go.',
    features: [
      'Bold tactical colorway in olive drab',
      'Comfort-molded silicone band with stainless buckle',
      'Scratch-resistant acrylic crystal',
      'Water resistant to 30 meters'
    ],
    specifications: {
      dialColor: 'Tactical Olive Green',
      strapMaterial: 'Silicone Rubber',
      caseDiameter: '44 mm',
      waterResistance: '30 Meters (3 ATM)',
      movement: 'Quartz Analog',
      warranty: '1 Year Manufacturer Warranty'
    },
    availability: 'In Stock',
    gender: 'Men',
    featured: false
  },
  {
    id: 'fastrack-05',
    brand: 'Fastrack',
    model: 'Tees Sporty Dial 38011PP01',
    name: 'Fastrack Tees White Dial Minimalist Casual 38011PP01',
    category: 'Analog',
    price: 1195,
    originalPrice: 1495,
    discount: 20,
    rating: 4.5,
    reviews: 380,
    image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80',
    description: 'Clean minimalist white dial with colorful geometric hour indicators. An effortless accessory for college and casual outings.',
    features: [
      'Featherweight resin case with clean white face',
      'Vibrant pop color accents',
      'Smooth silicone strap that won’t pinch skin',
      'Water resistant for casual daily wear'
    ],
    specifications: {
      dialColor: 'Pure White',
      strapMaterial: 'White Silicone',
      caseDiameter: '39 mm',
      waterResistance: '30 Meters (3 ATM)',
      movement: 'Quartz Analog',
      warranty: '1 Year Manufacturer Warranty'
    },
    availability: 'In Stock',
    gender: 'Unisex',
    featured: false
  },

  // --- ALLEN SOLLY (5 items) ---
  {
    id: 'as-01',
    brand: 'Allen Solly',
    model: 'Ascot Royal Navy AS0001',
    name: 'Allen Solly Ascot Royal Navy Chrono Dial AS0001',
    category: 'Analog',
    price: 3495,
    originalPrice: 4995,
    discount: 30,
    rating: 4.6,
    reviews: 240,
    image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=800&q=80',
    description: 'Tailored for smart casual Friday dressing. Features a deep royal navy blue textured dial with rose gold markers and stitched leather strap.',
    features: [
      'British heritage inspired dress profile',
      'Supple genuine leather band with Allen Solly crest',
      'Sub-dial styling for date and day display',
      'Water resistant to 50 meters'
    ],
    specifications: {
      dialColor: 'Royal Navy Blue',
      strapMaterial: 'Genuine Leather (Cognac Brown)',
      caseDiameter: '42 mm',
      waterResistance: '50 Meters (5 ATM)',
      movement: 'Multi-Function Quartz',
      warranty: '2 Years Manufacturer Warranty'
    },
    availability: 'In Stock',
    gender: 'Men',
    featured: true
  },
  {
    id: 'as-02',
    brand: 'Allen Solly',
    model: 'Classique Leather AS0005',
    name: 'Allen Solly Classique Brown Leather Analog AS0005',
    category: 'Analog',
    price: 2995,
    originalPrice: 4295,
    discount: 30,
    rating: 4.5,
    reviews: 195,
    image: 'https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=800&q=80',
    description: 'Timeless Roman numeral markers on a clean eggshell dial, encased in polished gold tones with rich textured brown leather.',
    features: [
      'Roman numeral markers for executive charm',
      'Gold ion-plated stainless steel casing',
      'High grade genuine leather strap with edge stitch',
      'Mineral crystal protective face'
    ],
    specifications: {
      dialColor: 'Eggshell Off-White',
      strapMaterial: 'Genuine Leather (Dark Tan)',
      caseDiameter: '40 mm',
      waterResistance: '30 Meters (3 ATM)',
      movement: 'Japanese Quartz',
      warranty: '2 Years Manufacturer Warranty'
    },
    availability: 'In Stock',
    gender: 'Men',
    featured: false
  },
  {
    id: 'as-03',
    brand: 'Allen Solly',
    model: 'Regal Rose Gold AS0009',
    name: 'Allen Solly Regal Rose Gold Crystal Watch AS0009',
    category: 'Analog',
    price: 3795,
    originalPrice: 5495,
    discount: 31,
    rating: 4.7,
    reviews: 160,
    image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80',
    description: 'Exquisite jewelry watch crafted with rose gold ion plating, glittering crystal bezel border, and brushed silver dial.',
    features: [
      'Glitter crystal encrusted outer bezel ring',
      'Shimmering rose gold mesh chain',
      'Jewelry clasp with easy clasp adjustment',
      'Water resistant for everyday splashes'
    ],
    specifications: {
      dialColor: 'Brushed Silver & Rose Gold',
      strapMaterial: 'Stainless Steel Mesh (Rose Gold)',
      caseDiameter: '34 mm',
      waterResistance: '30 Meters (3 ATM)',
      movement: 'Precision Quartz',
      warranty: '2 Years Manufacturer Warranty'
    },
    availability: 'In Stock',
    gender: 'Women',
    featured: true
  },
  {
    id: 'as-04',
    brand: 'Allen Solly',
    model: 'Heritage Steel AS0012',
    name: 'Allen Solly Heritage Silver Stainless Steel AS0012',
    category: 'Analog',
    price: 3295,
    originalPrice: 4795,
    discount: 31,
    rating: 4.4,
    reviews: 130,
    image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=800&q=80',
    description: 'Classic silver bracelet watch with a slate grey dial and polished steel hands, perfect for transitioning from office to evening dinner.',
    features: [
      'Versatile slate grey dial with sunburst reflection',
      'Stainless steel 5-link bracelet',
      'Push button deployment clasp',
      'Water resistant to 50 meters'
    ],
    specifications: {
      dialColor: 'Slate Grey Sunburst',
      strapMaterial: 'Stainless Steel',
      caseDiameter: '41 mm',
      waterResistance: '50 Meters (5 ATM)',
      movement: 'Quartz Movement',
      warranty: '2 Years Manufacturer Warranty'
    },
    availability: 'In Stock',
    gender: 'Men',
    featured: false
  },
  {
    id: 'as-05',
    brand: 'Allen Solly',
    model: 'Urban Sleek Black AS0018',
    name: 'Allen Solly Urban Sleek Matte Black AS0018',
    category: 'Analog',
    price: 3695,
    originalPrice: 5295,
    discount: 30,
    rating: 4.6,
    reviews: 145,
    image: 'https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?auto=format&fit=crop&w=800&q=80',
    description: 'Contemporary monochromatic black watch with subtle orange tip second hand and black IP Milanese mesh strap.',
    features: [
      'Stealth black casing with contrasting orange second hand',
      'Ultra comfortable breathable mesh bracelet',
      'Low profile 8mm case thickness',
      'Hardened mineral crystal'
    ],
    specifications: {
      dialColor: 'Matte Charcoal Black',
      strapMaterial: 'Black Stainless Steel Mesh',
      caseDiameter: '42 mm',
      waterResistance: '30 Meters (3 ATM)',
      movement: 'Quartz',
      warranty: '2 Years Manufacturer Warranty'
    },
    availability: 'In Stock',
    gender: 'Men',
    featured: false
  },

  // --- TIMEX (6 items) ---
  {
    id: 'timex-01',
    brand: 'Timex',
    model: 'Expedition Scout TW4B04700',
    name: 'Timex Expedition Scout 40mm Green TW4B04700',
    category: 'Analog',
    price: 4995,
    originalPrice: 6295,
    discount: 21,
    rating: 4.8,
    reviews: 640,
    image: 'https://images.unsplash.com/photo-1524592094714-0f0654e20314?auto=format&fit=crop&w=800&q=80',
    description: 'A rugged field watch classic built with a matte brass case, Indiglo night-light, 24-hour military time markers, and durable green nylon strap.',
    features: [
      'Patented INDIGLO light-up watch dial',
      'QuickDate window at 3 o’clock',
      'Durable field-tested tactical nylon slip-thru strap',
      '50-meter water resistance'
    ],
    specifications: {
      dialColor: 'Matte Black Field Dial',
      strapMaterial: 'Heavy Duty Woven Nylon (Olive)',
      caseDiameter: '40 mm',
      waterResistance: '50 Meters (5 ATM)',
      movement: 'Quartz 3-Hand with Indiglo',
      warranty: '2 Years Manufacturer Warranty'
    },
    availability: 'In Stock',
    gender: 'Men',
    featured: true
  },
  {
    id: 'timex-02',
    brand: 'Timex',
    model: 'Weekender TW2R42500',
    name: 'Timex Weekender 38mm Slip-Thru Cream Dial TW2R42500',
    category: 'Analog',
    price: 3995,
    originalPrice: 4995,
    discount: 20,
    rating: 4.7,
    reviews: 480,
    image: 'https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=800&q=80',
    description: 'The quintessential weekend watch with polished chrome case, cream dial, 24-hour markers, and an interchangeable NATO striped fabric strap.',
    features: [
      'Signature Indiglo night-light system',
      'Interchangeable slip-thru strap mechanism',
      'Crisp 12/24 hour easy-read dial typography',
      '30-meter water resistance'
    ],
    specifications: {
      dialColor: 'Vintage Cream',
      strapMaterial: 'Striped Nylon NATO',
      caseDiameter: '38 mm',
      waterResistance: '30 Meters (3 ATM)',
      movement: 'Quartz Analog with Indiglo',
      warranty: '2 Years Manufacturer Warranty'
    },
    availability: 'In Stock',
    gender: 'Unisex',
    featured: false
  },
  {
    id: 'timex-03',
    brand: 'Timex',
    model: 'Waterbury Traditional TW2U14700',
    name: 'Timex Waterbury Traditional Chronograph TW2U14700',
    category: 'Chronograph',
    price: 9495,
    originalPrice: 11995,
    discount: 21,
    rating: 4.8,
    reviews: 210,
    image: 'https://images.unsplash.com/photo-1614164185128-e4ec99c436d7?auto=format&fit=crop&w=800&q=80',
    description: 'Honoring heritage craftsmanship since 1854. Solid stainless steel construction with bi-compax chronograph subdials and rich leather strap.',
    features: [
      'Waterbury Clock Company heritage collection',
      'Chronograph measures up to 1/20th of a second',
      'Genuine oiled leather strap from Red Wing',
      'Indiglo night-light and luminous hands'
    ],
    specifications: {
      dialColor: 'Deep Midnight Navy',
      strapMaterial: 'Genuine Oiled Leather (Dark Brown)',
      caseDiameter: '42 mm',
      waterResistance: '50 Meters (5 ATM)',
      movement: 'Chronograph Quartz',
      warranty: '2 Years Manufacturer Warranty'
    },
    availability: 'In Stock',
    gender: 'Men',
    featured: true
  },
  {
    id: 'timex-04',
    brand: 'Timex',
    model: 'Q Timex Reissue TW2T80700',
    name: 'Q Timex Reissue 1979 Diver Pepsi Bezel TW2T80700',
    category: 'Analog',
    price: 13995,
    originalPrice: 16995,
    discount: 18,
    rating: 4.9,
    reviews: 310,
    image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=800&q=80',
    description: 'Faithful reproduction of the iconic 1979 quartz diver watch featuring red/blue "Pepsi" rotating bezel, woven steel bracelet, and functional battery hatch.',
    features: [
      'Authentic 1970s woven stainless steel bracelet',
      'Day-date display at 3 o’clock',
      'Bi-directional rotating red and blue Pepsi bezel',
      'Functional coin-slot battery hatch on case back'
    ],
    specifications: {
      dialColor: 'Matte Navy Blue with Lume Markers',
      strapMaterial: 'Woven Stainless Steel Mesh',
      caseDiameter: '38 mm',
      waterResistance: '50 Meters (5 ATM)',
      movement: 'Seiko Epson Quartz',
      warranty: '2 Years Manufacturer Warranty'
    },
    availability: 'Low Stock (Only 2 Left)',
    gender: 'Men',
    featured: true
  },
  {
    id: 'timex-05',
    brand: 'Timex',
    model: 'Marlin Automatic TW2T22700',
    name: 'Timex Marlin Automatic 40mm Leather TW2T22700',
    category: 'Analog',
    price: 19995,
    originalPrice: 22995,
    discount: 13,
    rating: 4.9,
    reviews: 175,
    image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=800&q=80',
    description: 'Mid-century gentleman aesthetic powered by a 21-jewel automatic movement with exhibition case back showing the ticking mechanics.',
    features: [
      '21-Jewel mechanical automatic self-winding movement',
      'Exhibition display case back showcasing rotor',
      'Domed acrylic crystal for warm vintage look',
      'Supple genuine leather crocodile-embossed strap'
    ],
    specifications: {
      dialColor: 'Sunburst Silver',
      strapMaterial: 'Genuine Leather (Black Crocodile Pattern)',
      caseDiameter: '40 mm',
      waterResistance: '30 Meters (3 ATM)',
      movement: 'Japanese 21-Jewel Automatic',
      warranty: '2 Years Manufacturer Warranty'
    },
    availability: 'In Stock',
    gender: 'Men',
    featured: false
  },
  {
    id: 'timex-06',
    brand: 'Timex',
    model: 'Command Urban Digital TW5M28900',
    name: 'Timex Command Urban Shock Digital TW5M28900',
    category: 'Digital',
    price: 5495,
    originalPrice: 6995,
    discount: 21,
    rating: 4.6,
    reviews: 190,
    image: 'https://images.unsplash.com/photo-1533139502658-0198f920d8e8?auto=format&fit=crop&w=800&q=80',
    description: 'Built to survive extreme punishment with shock-resistant resin case, vibration alarm, dual hydration timer, and 100M water resistance.',
    features: [
      'Shock resistant to ISO international standards',
      'Vibration alarm and hydration tracker alert',
      'Indiglo night-light with night-mode toggle',
      '100-meter water resistance'
    ],
    specifications: {
      dialColor: 'High Contrast Negative Digital Display',
      strapMaterial: 'Resin (Camo Grey)',
      caseDiameter: '47 mm',
      waterResistance: '100 Meters (10 ATM)',
      movement: 'Digital Quartz Module',
      warranty: '2 Years Manufacturer Warranty'
    },
    availability: 'In Stock',
    gender: 'Men',
    featured: false
  },

  // --- FOSSIL (6 items) ---
  {
    id: 'fossil-01',
    brand: 'Fossil',
    model: 'Grant Chronograph FS4735',
    name: 'Fossil Grant Chronograph Cream Dial Brown Leather FS4735',
    category: 'Chronograph',
    price: 9995,
    originalPrice: 13995,
    discount: 29,
    rating: 4.8,
    reviews: 580,
    image: 'https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=800&q=80',
    description: 'Inspired by vintage clocks with Roman numerals, layered subdials, polished stainless steel case, and rich saddle brown leather band.',
    features: [
      'Tri-subdial chronograph stopwatch system',
      'Classic Roman numeral markers with beveled depth',
      'Interchangeable 22mm genuine leather strap',
      'Water resistant to 50 meters'
    ],
    specifications: {
      dialColor: 'Warm Cream / Antique White',
      strapMaterial: 'Genuine Leather (Rich Brown)',
      caseDiameter: '44 mm',
      waterResistance: '50 Meters (5 ATM)',
      movement: 'Chronograph Quartz',
      warranty: '2 Years Manufacturer Warranty'
    },
    availability: 'In Stock',
    gender: 'Men',
    featured: true
  },
  {
    id: 'fossil-02',
    brand: 'Fossil',
    model: 'Neutra Minimalist FS5380',
    name: 'Fossil Neutra Minimalist Chrono Navy Dial FS5380',
    category: 'Chronograph',
    price: 8995,
    originalPrice: 12495,
    discount: 28,
    rating: 4.7,
    reviews: 320,
    image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=800&q=80',
    description: 'Mid-century modernist design with architectural clean lines, sunray navy blue dial, slim subdials, and amber brown leather.',
    features: [
      'Streamlined minimalist chronograph aesthetics',
      'Sunburst cobalt dial with applied baton indices',
      'Quick-release leather strap pins',
      '50-meter water resistance'
    ],
    specifications: {
      dialColor: 'Sunray Navy Blue',
      strapMaterial: 'Genuine Leather (Amber Brown)',
      caseDiameter: '44 mm',
      waterResistance: '50 Meters (5 ATM)',
      movement: 'Quartz Chronograph',
      warranty: '2 Years Manufacturer Warranty'
    },
    availability: 'In Stock',
    gender: 'Men',
    featured: false
  },
  {
    id: 'fossil-03',
    brand: 'Fossil',
    model: 'Machine Black Stainless Steel FS4656',
    name: 'Fossil Machine Smoke Black Stainless Steel FS4656',
    category: 'Chronograph',
    price: 11495,
    originalPrice: 14995,
    discount: 23,
    rating: 4.8,
    reviews: 410,
    image: 'https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?auto=format&fit=crop&w=800&q=80',
    description: 'Industrial knurled top ring, diamond-textured accents, and smoke-black ion plating make this timepiece an imposing modern statement.',
    features: [
      'Industrial textured knurled bezel ring',
      'Triple-link black ion-plated stainless steel bracelet',
      'Full chronograph counters with date at 4 o’clock',
      'Durable mineral glass crystal'
    ],
    specifications: {
      dialColor: 'Smoke Black with Bronze Accents',
      strapMaterial: 'Ion-Plated Stainless Steel',
      caseDiameter: '45 mm',
      waterResistance: '50 Meters (5 ATM)',
      movement: 'Chronograph Quartz',
      warranty: '2 Years Manufacturer Warranty'
    },
    availability: 'In Stock',
    gender: 'Men',
    featured: true
  },
  {
    id: 'fossil-04',
    brand: 'Fossil',
    model: 'Jacqueline Blush ES3712',
    name: 'Fossil Jacqueline Rose Gold Blush Leather ES3712',
    category: 'Analog',
    price: 7495,
    originalPrice: 9995,
    discount: 25,
    rating: 4.7,
    reviews: 350,
    image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80',
    description: 'Classic sophistication featuring an ultra-slim profile, shimmering rose gold case, Roman numerals, and soft blush pink leather strap.',
    features: [
      'Slender 8mm case profile designed for petite wrists',
      'Date window at 6 o’clock position',
      'Supple genuine leather band in blush pink tone',
      'Water resistant to 30 meters'
    ],
    specifications: {
      dialColor: 'Sunburst White / Opal',
      strapMaterial: 'Genuine Leather (Soft Blush Pink)',
      caseDiameter: '36 mm',
      waterResistance: '30 Meters (3 ATM)',
      movement: '3-Hand Quartz with Date',
      warranty: '2 Years Manufacturer Warranty'
    },
    availability: 'In Stock',
    gender: 'Women',
    featured: false
  },
  {
    id: 'fossil-05',
    brand: 'Fossil',
    model: 'Gen 6 Smartwatch FTW4061',
    name: 'Fossil Gen 6 Smartwatch Smoke Stainless FTW4061',
    category: 'Smart Watch',
    price: 16995,
    originalPrice: 24995,
    discount: 32,
    rating: 4.6,
    reviews: 290,
    image: 'https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?auto=format&fit=crop&w=800&q=80',
    description: 'Powered by Snapdragon Wear 4100+ with 2x faster charging, blood oxygen (SpO2) sensor, continuous heart rate, and Google Wear OS.',
    features: [
      'Snapdragon Wear 4100+ high performance chipset',
      'Fast charging: 80% charge in just 30 minutes',
      'SpO2, cardio fitness, and sleep tracker metrics',
      'Customizable Always-On touchscreen dials'
    ],
    specifications: {
      dialColor: '1.28" Color AMOLED Display',
      strapMaterial: 'Smoke Stainless Steel',
      caseDiameter: '44 mm',
      waterResistance: '3 ATM Swimproof',
      movement: 'Wear OS Smart Chipset',
      warranty: '2 Years Manufacturer Warranty'
    },
    availability: 'In Stock',
    gender: 'Men',
    featured: true
  },
  {
    id: 'fossil-06',
    brand: 'Fossil',
    model: 'Townsman Automatic ME3061',
    name: 'Fossil Townsman Skeleton Automatic Brown ME3061',
    category: 'Analog',
    price: 15495,
    originalPrice: 19995,
    discount: 23,
    rating: 4.9,
    reviews: 230,
    image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=800&q=80',
    description: 'Open-heart skeleton dial reveals the intricate mechanical self-winding movement beating beneath the glass. No battery required.',
    features: [
      'Automatic self-winding mechanical engine',
      'Open-heart skeleton dial revealing balance wheel',
      'Dual exhibition front and back crystal',
      'Hand-finished genuine leather strap'
    ],
    specifications: {
      dialColor: 'Skeleton Anthracite & Rose Gold',
      strapMaterial: 'Genuine Leather (Dark Brown)',
      caseDiameter: '44 mm',
      waterResistance: '50 Meters (5 ATM)',
      movement: 'Mechanical Automatic Self-Winding',
      warranty: '2 Years Manufacturer Warranty'
    },
    availability: 'In Stock',
    gender: 'Men',
    featured: false
  },

  // --- TOMMY HILFIGER (5 items) ---
  {
    id: 'th-01',
    brand: 'Tommy Hilfiger',
    model: 'Hendrix 1791575',
    name: 'Tommy Hilfiger Hendrix Multi-Function Steel 1791575',
    category: 'Analog',
    price: 9995,
    originalPrice: 13995,
    discount: 29,
    rating: 4.7,
    reviews: 310,
    image: 'https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=800&q=80',
    description: 'Preppy American style with modern sports accents. Features signature red, white, and blue stripe hand accents and solid stainless steel links.',
    features: [
      'Signature Tommy Hilfiger red-white-blue emblem',
      'Multi-function 3 sub-dials: Day, Date, 24-Hour',
      'Polished stainless steel bezel and link bracelet',
      'Water resistant to 50 meters'
    ],
    specifications: {
      dialColor: 'Classic White with Navy Subdials',
      strapMaterial: 'Stainless Steel Bracelet',
      caseDiameter: '43 mm',
      waterResistance: '50 Meters (5 ATM)',
      movement: 'Multi-Function Quartz',
      warranty: '2 Years International Warranty'
    },
    availability: 'In Stock',
    gender: 'Men',
    featured: true
  },
  {
    id: 'th-02',
    brand: 'Tommy Hilfiger',
    model: 'Bank Chronograph 1791778',
    name: 'Tommy Hilfiger Bank Blue Dial Chrono 1791778',
    category: 'Chronograph',
    price: 11995,
    originalPrice: 15995,
    discount: 25,
    rating: 4.8,
    reviews: 245,
    image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=800&q=80',
    description: 'Executive chronograph featuring a commanding blue sunray dial, tachymeter bezel, rose gold pushers, and genuine calfskin leather.',
    features: [
      'Rich sunburst navy blue dial with gold markers',
      'Precision chronograph stop watch functionality',
      'Supple navy blue leather band with contrast stitching',
      'Water resistant to 50 meters'
    ],
    specifications: {
      dialColor: 'Sunburst Navy Blue',
      strapMaterial: 'Genuine Leather (Navy Blue)',
      caseDiameter: '44 mm',
      waterResistance: '50 Meters (5 ATM)',
      movement: 'Chronograph Quartz',
      warranty: '2 Years International Warranty'
    },
    availability: 'In Stock',
    gender: 'Men',
    featured: true
  },
  {
    id: 'th-03',
    brand: 'Tommy Hilfiger',
    model: 'Mason Blue Dial 1791788',
    name: 'Tommy Hilfiger Mason Gunmetal Gray Mesh 1791788',
    category: 'Analog',
    price: 10495,
    originalPrice: 14495,
    discount: 28,
    rating: 4.6,
    reviews: 180,
    image: 'https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?auto=format&fit=crop&w=800&q=80',
    description: 'Sleek gunmetal ion-plated case with matching stainless steel Milanese mesh bracelet and understated multi-function day-date indicators.',
    features: [
      'Ultra modern gunmetal grey ion plating',
      'Breathable stainless steel Milanese mesh bracelet',
      'Sub-dials indicating date, day, and 24-hour cycle',
      'Scratch-resistant mineral crystal'
    ],
    specifications: {
      dialColor: 'Gunmetal Grey',
      strapMaterial: 'Stainless Steel Mesh (Gunmetal)',
      caseDiameter: '45 mm',
      waterResistance: '50 Meters (5 ATM)',
      movement: 'Quartz Multi-Function',
      warranty: '2 Years International Warranty'
    },
    availability: 'In Stock',
    gender: 'Men',
    featured: false
  },
  {
    id: 'th-04',
    brand: 'Tommy Hilfiger',
    model: 'Pippa Rose Gold 1782142',
    name: 'Tommy Hilfiger Pippa Carnation Rose Gold 1782142',
    category: 'Analog',
    price: 8995,
    originalPrice: 11995,
    discount: 25,
    rating: 4.7,
    reviews: 210,
    image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80',
    description: 'Delicate feminine design with carnation gold plating, clean sunray dial featuring the iconic TH monogram logo, and fine mesh band.',
    features: [
      'Carnation gold plated finish with high-gloss polish',
      'Subtle engraved monogram pattern on dial',
      'Ultra-thin 6.8mm case profile',
      'Quick-adjust jewelry sliding clasp'
    ],
    specifications: {
      dialColor: 'Soft Carnation Gold Sunray',
      strapMaterial: 'Stainless Steel Mesh (Rose Gold)',
      caseDiameter: '35 mm',
      waterResistance: '30 Meters (3 ATM)',
      movement: 'Quartz 2-Hand',
      warranty: '2 Years International Warranty'
    },
    availability: 'In Stock',
    gender: 'Women',
    featured: false
  },
  {
    id: 'th-05',
    brand: 'Tommy Hilfiger',
    model: 'Denim Street Style 1791801',
    name: 'Tommy Hilfiger Casual Silicone Blue 1791801',
    category: 'Analog',
    price: 6995,
    originalPrice: 9495,
    discount: 26,
    rating: 4.5,
    reviews: 165,
    image: 'https://images.unsplash.com/photo-1524592094714-0f0654e20314?auto=format&fit=crop&w=800&q=80',
    description: 'Energetic street-style timepiece with embossed Tommy Hilfiger wordmark on deep navy silicone band and bold contrast hands.',
    features: [
      'Embossed logo silicone band with comfortable flex',
      'Matte navy resin casing with lightweight feel',
      'High-contrast luminescent hour and minute hands',
      'Water resistant to 50 meters'
    ],
    specifications: {
      dialColor: 'Matte Navy Blue with White Numerals',
      strapMaterial: 'High-Grade Silicone (Navy)',
      caseDiameter: '44 mm',
      waterResistance: '50 Meters (5 ATM)',
      movement: 'Quartz 3-Hand',
      warranty: '2 Years International Warranty'
    },
    availability: 'In Stock',
    gender: 'Unisex',
    featured: false
  }
];

export interface BrandInfo {
  name: string;
  country: string;
  founded: string;
  tagline: string;
  description: string;
  logoText: string;
  badgeColor: string;
  accentColor: string;
  image: string;
}

export const POPULAR_BRANDS: BrandInfo[] = [
  {
    name: 'Casio',
    country: 'Japan',
    founded: '1946',
    tagline: 'Creativity and Contribution',
    description: 'World pioneer of indestructible G-Shock, iconic Vintage digital timepieces, and precision Edifice chronographs.',
    logoText: 'CASIO',
    badgeColor: 'bg-blue-900 text-white',
    accentColor: 'border-blue-700',
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=600&q=80'
  },
  {
    name: 'Titan',
    country: 'India',
    founded: '1984',
    tagline: 'Be More',
    description: 'India’s most celebrated watchmaker, renowned for world-record slim Edge watches, elegant Raga collection, and executive Workwear.',
    logoText: 'TITAN',
    badgeColor: 'bg-amber-950 text-amber-100',
    accentColor: 'border-amber-700',
    image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=600&q=80'
  },
  {
    name: 'Sonata',
    country: 'India',
    founded: '1997',
    tagline: 'Style Meets Everyday Value',
    description: 'The preferred choice for millions of Indians offering trendy Poze series, festive golden classics, and tough SF sport chronos.',
    logoText: 'SONATA',
    badgeColor: 'bg-emerald-900 text-white',
    accentColor: 'border-emerald-600',
    image: 'https://images.unsplash.com/photo-1539185441755-769473a23570?auto=format&fit=crop&w=600&q=80'
  },
  {
    name: 'Fastrack',
    country: 'India',
    founded: '1998',
    tagline: 'Move On',
    description: 'Youth-centric and rebellious designs with bold analog expressions, reflex smartwatches, and vibrant urban color palettes.',
    logoText: 'FASTRACK',
    badgeColor: 'bg-orange-900 text-orange-100',
    accentColor: 'border-orange-500',
    image: 'https://images.unsplash.com/photo-1524592094714-0f0654e20314?auto=format&fit=crop&w=600&q=80'
  },
  {
    name: 'Allen Solly',
    country: 'United Kingdom / India',
    founded: '1744',
    tagline: 'Friday Dressing & Contemporary Class',
    description: 'Sophisticated British heritage infused with modern lifestyle aesthetic, premium leather bands, and elegant sunburst dials.',
    logoText: 'ALLEN SOLLY',
    badgeColor: 'bg-slate-900 text-white',
    accentColor: 'border-slate-700',
    image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=600&q=80'
  },
  {
    name: 'Timex',
    country: 'USA',
    founded: '1854',
    tagline: 'Takes a Licking and Keeps on Ticking',
    description: 'Over 170 years of American watchmaking heritage featuring patented Indiglo night-lights, Expedition field watches, and vintage Q reissues.',
    logoText: 'TIMEX',
    badgeColor: 'bg-red-950 text-red-100',
    accentColor: 'border-red-700',
    image: 'https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=600&q=80'
  },
  {
    name: 'Fossil',
    country: 'USA',
    founded: '1984',
    tagline: 'Made for This',
    description: 'Authentic vintage American design seamlessly combined with modern craftsmanship, Grant chronographs, and skeleton automatics.',
    logoText: 'FOSSIL',
    badgeColor: 'bg-stone-900 text-amber-200',
    accentColor: 'border-amber-600',
    image: 'https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?auto=format&fit=crop&w=600&q=80'
  },
  {
    name: 'Tommy Hilfiger',
    country: 'USA',
    founded: '1985',
    tagline: 'Classic American Cool',
    description: 'Iconic red-white-and-blue preppy luxury styling, bold multi-function sub-dials, and high-fashion executive stainless bracelets.',
    logoText: 'TOMMY HILFIGER',
    badgeColor: 'bg-blue-950 text-white',
    accentColor: 'border-red-600',
    image: 'https://images.unsplash.com/photo-1614164185128-e4ec99c436d7?auto=format&fit=crop&w=600&q=80'
  }
];
