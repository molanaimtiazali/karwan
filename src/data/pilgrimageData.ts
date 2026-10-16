export interface DestinationItem {
  id: string;
  name: string;
  arabicName: string;
  city: string;
  country: 'Iraq' | 'Saudi Arabia' | 'Iran';
  description: string;
  significance: string;
  landmarks: string[];
  recommendedDays: number;
  hotelProximity: string;
  image: string;
}

export interface ZiyaratPackage {
  id: string;
  title: string;
  arabicTitle: string;
  category: 'iraq' | 'iran' | 'umrah' | 'combined';
  durationDays: number;
  departureDates: string;
  pricePKR: number;
  priceUSD: number;
  hotels: {
    city: string;
    hotelName: string;
    distanceToHaram: string;
    rating: number;
  }[];
  inclusions: string[];
  highlights: string[];
  seatsLeft: number;
  itinerary: {
    day: string;
    title: string;
    activities: string;
  }[];
}

export interface GalleryFolder {
  id: string;
  name: string;
  arabicName: string;
  location: string;
  photoCount: number;
  coverImage: string;
  photos: {
    id: string;
    title: string;
    subtitle: string;
    category: string;
    image: string;
    year: string;
  }[];
}

export interface Testimonial {
  id: string;
  name: string;
  urduName?: string;
  city: string;
  country: string;
  pilgrimage: string;
  year: string;
  rating: number;
  review: string;
  travelGroup: string;
}

export const CONTACT_INFO = {
  agencyName: "Karwan-e-Sada-e-Najaf",
  agencyUrdu: "کاروانِ صدائے نجف",
  tagline: "Spiritual Pilgrimage Agency for Iran, Iraq & Umrah",
  leader: "Zulfiqar Ali",
  leaderUrdu: "ذوالفقار علی",
  phones: [
    { number: "0314-8681093", clean: "+923148681093", label: "Primary / WhatsApp" },
    { number: "0300-9463305", clean: "+923009463305", label: "Helpline 2" },
    { number: "0333-4648446", clean: "+923334648446", label: "Helpline 3" }
  ],
  email: "molanaimtiazali@gmail.com",
  officeAddress: "Main Ferozepur Road / Gulberg III, Lahore, Pakistan",
  whatsappNumber: "+923148681093",
  whatsappLink: "https://wa.me/923148681093?text=" + encodeURIComponent("Salam Alaykum Zulfiqar Ali Sahab, I want to inquire about upcoming Ziyarat packages with Karwan-e-Sada-e-Najaf."),
  leaderImage: "/src/assets/images/zulfiqar_ali_leader.jpg"
};

export interface HeroSlide {
  id: string;
  city: string;
  title: string;
  arabicTitle: string;
  caption: string;
  image: string;
  badge: string;
}

export const HERO_SLIDES: HeroSlide[] = [
  {
    id: 'makkah',
    city: 'Makkah Mukarramah',
    badge: 'Holy Kaaba',
    title: 'The Sacred House of Allah (Baitullah)',
    arabicTitle: 'مـكـة الـمـكـرمـة — بـيـت الله الـحـرام',
    caption: 'Perform Tawaf and Sa’i with ease and serenity through our Executive Umrah packages.',
    image: '/src/assets/images/hero_slide_makkah_kaaba_1792137010021.jpg'
  },
  {
    id: 'madinah',
    city: 'Madinah Munawwarah',
    badge: 'Masjid-e-Nabvi',
    title: 'Sanctuary of Prophet Muhammad (P.B.U.H) & Baqi',
    arabicTitle: 'الـمـديـنـة الـمـنـورة — مـسـجـد الـنـبـي (ص)',
    caption: 'Walking-distance hotels to the Green Dome, Rawdah Sharifah, and Jannat-ul-Baqi.',
    image: '/src/assets/images/hero_slide_madinah_nabvi_1792137010324.jpg'
  },
  {
    id: 'najaf',
    city: 'Najaf Ashraf',
    badge: 'Moula Ali (A.S) Ka Roza',
    title: 'The Golden Shrine of Ameer-ul-Momineen (A.S)',
    arabicTitle: 'الـنـجـف الأشـرف — روضـة مـولـى عـلـي (ع)',
    caption: 'Spiritual epicenter of justice, Kufa, Sahla, and Wadi-us-Salam with daily guided Aamal.',
    image: '/src/assets/images/hero_slide_najaf_ali_1792137012346.jpg'
  },
  {
    id: 'karbala',
    city: 'Karbala Moalla',
    badge: 'Bain-ul-Haramain',
    title: 'Imam Hussain (A.S) & Hazrat Abbas Alamdar (A.S)',
    arabicTitle: 'كـربـلاء الـمـعـلّـى — بـيـن الـحـرمـيـن الـشـريـفـيـن',
    caption: 'Direct accommodation within 200 meters of Bain-ul-Haramain and Friday night Majalis.',
    image: '/src/assets/images/hero_slide_karbala_bainulharamain_1792137011286.jpg'
  },
  {
    id: 'group',
    city: 'Karbala Group',
    badge: 'Karwan-e-Sada-e-Najaf',
    title: 'Our Caravan Group at Bain-ul-Haramain',
    arabicTitle: 'قـافـلـة كـاروانِ صـدائے نـجـف فـي كـربـلاء',
    caption: 'Proudly serving blessed zaireen with complete honesty, comfort, and religious accompaniment.',
    image: '/src/assets/images/hero_bain_ul_haramain_1792136186878.jpg'
  }
];

export const DESTINATIONS: Record<'iraq' | 'umrah' | 'iran', DestinationItem[]> = {
  iraq: [
    {
      id: 'najaf',
      name: 'Najaf Ashraf',
      arabicName: 'الـنـجـف الأشـرف',
      city: 'Najaf',
      country: 'Iraq',
      description: 'The city of Ameer-ul-Momineen Imam Ali Ibn Abi Talib (A.S). Home to the sacred golden shrine and the historic Wadi-us-Salam, the world’s largest cemetery.',
      significance: 'Spiritual epicenter of Islamic wisdom, justice, and the holy shrine of the Commander of the Faithful.',
      landmarks: ['Haram Imam Ali (A.S)', 'Wadi-us-Salam Cemetery', 'Masjid-e-Kufa', 'Masjid-e-Sahla', 'House of Imam Ali (A.S)', 'Maytham al-Tammar'],
      recommendedDays: 4,
      hotelProximity: '150 to 250 meters from Bab al-Qibla',
      image: '/src/assets/images/single_haram_imam_ali_najaf_1792137452644.jpg'
    },
    {
      id: 'karbala',
      name: 'Karbala Moalla',
      arabicName: 'كـربـلاء الـمـعـلّـى',
      city: 'Karbala',
      country: 'Iraq',
      description: 'The sacred land of supreme sacrifice and unconditional devotion. Experience the divine tranquility of Bain-ul-Haramain between Imam Hussain (A.S) and Hazrat Abbas (A.S).',
      significance: 'Where the timeless legacy of Ashura and Karbala lives on in every heartbeat.',
      landmarks: ['Haram Imam Hussain (A.S)', 'Haram Hazrat Abbas Alamdar (A.S)', 'Bain-ul-Haramain', 'Khaimagah (Tents)', 'Til-e-Zainabia', 'Maqam Hazrat Ali Akbar & Asghar', 'Mazar-e-Hurr'],
      recommendedDays: 7,
      hotelProximity: '200 meters from Bain-ul-Haramain',
      image: '/src/assets/images/single_haram_imam_hussain_karbala_1792137453021.jpg'
    },
    {
      id: 'kazmain',
      name: 'Kazmain Sharifain',
      arabicName: 'الـكـاظـمـيـة الـمـقـدسـة',
      city: 'Baghdad / Kadhimiya',
      country: 'Iraq',
      description: 'The twin golden domes of the 7th Imam Musa al-Kadhim (A.S) and the 9th Imam Muhammad al-Taqi (al-Jawad) (A.S) on the banks of the Tigris.',
      significance: 'Renowned as Bab al-Hawaej (The Door of Needs) where prayers are swiftly answered.',
      landmarks: ['Twin Golden Domes of Al-Kadhimiya', 'Tomb of Sheikh Kulayni', 'Tomb of Sheikh Mufid', 'Bab al-Murad'],
      recommendedDays: 2,
      hotelProximity: '300 meters from Haram entrance',
      image: '/src/assets/images/single_haram_kazmain_1792137453889.jpg'
    },
    {
      id: 'samarra',
      name: 'Samarra & Balad',
      arabicName: 'سـامـراء وبـلـد',
      city: 'Samarra',
      country: 'Iraq',
      description: 'The resting sanctuary of the 10th Imam Ali al-Hadi (A.S), the 11th Imam Hasan al-Askari (A.S), Bibi Narjis Khatoon, Bibi Hakima Khatoon, and the sacred Cellar of Occultation (Sardab).',
      significance: 'Sacred birthplace and cellar of Imam al-Mahdi (A.T.F.S) and the shrine of Sayyid Muhammad in Balad.',
      landmarks: ['Al-Askari Holy Shrine', 'Maqam Sardab Ghaibat', 'Tomb of Sayyid Muhammad (Sab-e-Dujail) in Balad'],
      recommendedDays: 1,
      hotelProximity: 'Guided day-trip with heavy private VIP security escorts',
      image: '/src/assets/images/single_haram_kazmain_1792137453889.jpg'
    }
  ],
  umrah: [
    {
      id: 'makkah',
      name: 'Makkah Mukarramah',
      arabicName: 'مـكـة الـمـكـرمـة',
      city: 'Makkah',
      country: 'Saudi Arabia',
      description: 'The House of Allah Subhanahu wa Ta’ala, the Holy Kaaba, and the fountain of Zamzam. Perform Tawaf, Sa’i between Safa and Marwa in serenity.',
      significance: 'The holiest sanctuary on Earth where every good deed and prayer is multiplied exponentially.',
      landmarks: ['The Holy Kaaba & Mataf', 'Maqam Ibrahim', 'Hajar al-Aswad', 'Safa & Marwa', 'Jabal al-Nour (Cave of Hira)', 'Cave of Thawr', 'Mina & Arafat', 'Jannat al-Mualla'],
      recommendedDays: 6,
      hotelProximity: 'Luxury 5-Star clock tower / Ajyad front row, 150m walking distance',
      image: '/src/assets/images/dest_umrah_makkah_madina_1792136188268.jpg'
    },
    {
      id: 'madinah',
      name: 'Madinah Munawwarah',
      arabicName: 'الـمـديـنـة الـمـنـورة',
      city: 'Madinah',
      country: 'Saudi Arabia',
      description: 'The illuminated city of the Holy Prophet Muhammad (P.B.U.H) and the sacred resting grounds of Jannat-ul-Baqi holding the Ahlulbayt (A.S).',
      significance: 'Masjid-e-Nabvi and the fragrant Rawdah Sharifah, a garden from the gardens of Paradise.',
      landmarks: ['Masjid-e-Nabvi & The Green Dome', 'Rawdah Sharifah (Riyazul Jannah)', 'Jannat-ul-Baqi Cemetery', 'Masjid Quba', 'Masjid al-Qiblatayn', 'Mount Uhud & Martyrs Cemetery', 'Seven Mosques (Khandaq)'],
      recommendedDays: 5,
      hotelProximity: 'Central Northern / Southern Markaziya, 100m to courtyard',
      image: '/src/assets/images/dest_umrah_makkah_madina_1792136188268.jpg'
    }
  ],
  iran: [
    {
      id: 'mashhad',
      name: 'Mashhad Sharif',
      arabicName: 'مـشـهـد الـمـقـدسـة',
      city: 'Mashhad',
      country: 'Iran',
      description: 'The majestic, world-renowned Astan Quds Razavi sanctuary of the 8th Imam Ali Ibn Musa al-Reza (A.S), known as Sultan-e-Khurasan and Zamin-e-Ahoo.',
      significance: 'One of the most architecturally breathtaking and spiritually peaceful sanctuaries with grand courtyards and libraries.',
      landmarks: ['Haram Imam Reza (A.S)', 'Goharshad Mosque', 'Courtyard of Inqilab & Azadi', 'Bagh-e-Naderi', 'Tomb of Khwaja Aba Salat & Khwaja Murad', 'Neyshabur Historic Ziyarats'],
      recommendedDays: 6,
      hotelProximity: 'Shirazi / Imam Reza Boulevard, 5-minute walk to Bab al-Jawad',
      image: '/src/assets/images/dest_iran_mashhad_qom_1792136189334.jpg'
    },
    {
      id: 'qom',
      name: 'Qom Sharif',
      arabicName: 'قـم الـمـقـدسـة',
      city: 'Qom',
      country: 'Iran',
      description: 'The city of learning, virtue, and sanctuary of Hazrat Fatimah Masuma (S.A), daughter of Imam Musa Kazim (A.S) and sister of Imam Reza (A.S).',
      significance: 'World center of Islamic jurisprudence (Hawza Ilmiyya) and the sacred Jamkaran Mosque.',
      landmarks: ['Haram Hazrat Masuma-e-Qom (S.A)', 'Masjid-e-Jamkaran', 'Chehel Akhtaroon', 'Kuh-e-Khizr', 'Hawza Ilmiyya & Ayatullah Sanctuaries'],
      recommendedDays: 4,
      hotelProximity: 'Astaneh Square, directly overlooking the courtyard',
      image: '/src/assets/images/dest_iran_mashhad_qom_1792136189334.jpg'
    }
  ]
};

export const PACKAGES: ZiyaratPackage[] = [
  {
    id: 'iraq-special-15d',
    title: 'Complete Iraq Ziyarat',
    arabicTitle: 'قافلة العراق المباركة',
    category: 'iraq',
    durationDays: 15,
    departureDates: '15th Nov 2026 & 1st Dec 2026',
    pricePKR: 445000,
    priceUSD: 1600,
    hotels: [
      { city: 'Karbala', hotelName: 'Durrat al-Hussain / Barakat Al-Arbaeen', distanceToHaram: '200m from Bain-ul-Haramain', rating: 4 },
      { city: 'Najaf Ashraf', hotelName: 'Qasr Al-Dur / Rawdatul Saliheen', distanceToHaram: '180m from Bab al-Qibla', rating: 4 },
      { city: 'Kazmain Sharifain', hotelName: 'Al-Shams Palace Hotel', distanceToHaram: '250m from Bab al-Murad', rating: 4 }
    ],
    inclusions: [
      'Return Air Tickets (FlyDubai / Qatar Airways / Iraqi Airways)',
      'Direct Iraq Visa Sticker & Group clearance',
      'Star Hotel stays close to Harams (Walking distance)',
      '3-Time Traditional Pakistani Halal Buffet cooked by Pakistani Chefs',
      'VIP AC Coaches for all intercity travel (Najaf, Karbala, Kazmain, Samarra, Balad, Kufa, Sahla)',
      'Spiritual guidance, daily Aamal, and Majalis led by Zulfiqar Ali & scholars',
      'Local Iraqi SIM cards & 24/7 dedicated medical & elderly assistance'
    ],
    highlights: [
      'Full Ziyarats of Najaf, Kufa, Sahla, Karbala, Kazmain, Samarra & Balad',
      'Night stay in Karbala with Juma prayers at Bain-ul-Haramain',
      'Daily theological lectures and question-answer sessions'
    ],
    seatsLeft: 9,
    itinerary: [
      { day: 'Day 1-4', title: 'Arrival in Najaf Ashraf', activities: 'Welcome reception, Ziyarat of Ameer-ul-Momineen (A.S), Wadi-us-Salam, Masjid-e-Kufa, Masjid-e-Sahla, and house of Imam Ali (A.S).' },
      { day: 'Day 5-11', title: 'Karbala', activities: 'Arrival in Karbala, Bain-ul-Haramain rituals, Haram Imam Hussain (A.S), Hazrat Abbas (A.S), Khaimagah, Til-e-Zainabia, Hurr, and Friday congregation.' },
      { day: 'Day 12-13', title: 'Kazmain Sharifain', activities: 'Ziyarat of Imam Musa Kazim (A.S) and Imam Muhammad Taqi (A.S), historic scholars tombs.' },
      { day: 'Day 14', title: 'Samarra & Balad Day Trip', activities: 'Imam Ali Naqi (A.S), Imam Hasan Askari (A.S), Cellar of Occultation (Sardab), and Sayyid Muhammad in Balad.' },
      { day: 'Day 15', title: 'Return to Pakistan', activities: 'Farewell Ziyarat in Najaf / Baghdad airport departure.' }
    ]
  },
  {
    id: 'umrah-executive-12d',
    title: 'Executive Umrah & Madinah Pilgrimage',
    arabicTitle: 'العمرة المباركة وزيارة المدينة',
    category: 'umrah',
    durationDays: 12,
    departureDates: '10th Nov 2026 & 25th Dec 2026',
    pricePKR: 485000,
    priceUSD: 1750,
    hotels: [
      { city: 'Makkah Mukarramah', hotelName: 'Swissotel Makkah / Pullman Zamzam', distanceToHaram: '150m from Clock Tower courtyard', rating: 5 },
      { city: 'Madinah Munawwarah', hotelName: 'Dar Al-Taqwa / Oberoi Markaziya', distanceToHaram: '80m from Masjid-e-Nabvi courtyard', rating: 5 }
    ],
    inclusions: [
      'Saudi Umrah Electronic Multiple Visa',
      'Direct Flights from Lahore / Karachi / Islamabad (PIA / Saudia)',
      '5-Star Luxury Hotels directly facing or within brief walk to Harams',
      'Daily International & Pakistani Breakfast + Dinner Buffet',
      'Haramain High-Speed Bullet Train Tickets between Makkah & Madinah',
      'Guided historical Ziyarats in Makkah & Madinah (Jabal al-Nour, Quba, Uhud, Baqi)',
      'Ihram training sessions, Umrah booklets & gift bag for every pilgrim'
    ],
    highlights: [
      'Guaranteed easy access to Rawdah Sharifah (Riyazul Jannah) permits',
      'Scholarly explanation of Umrah rituals and Quranic history',
      'Small VIP group size with high personalized care'
    ],
    seatsLeft: 6,
    itinerary: [
      { day: 'Day 1-6', title: 'Makkah Mukarramah', activities: 'Arrival in Jeddah, transfer to Makkah in Ihram, perform Umrah under Zulfiqar Ali guidance, Tawaf, Sa’i, and Ziyarat of historical sites.' },
      { day: 'Day 7', title: 'High-Speed Train to Madinah', activities: 'Comfortable transfer on the bullet train, evening arrival at the gates of Prophet’s Mosque.' },
      { day: 'Day 8-12', title: 'Madinah Munawwarah', activities: 'Prayers in Rawdah Sharifah, Salaam at Jannat-ul-Baqi, Ziyarat of Masjid Quba, Mount Uhud, and departure.' }
    ]
  },
  {
    id: 'iran-spiritual-14d',
    title: 'Iran Ziyarat Tour (Mashhad & Qom)',
    arabicTitle: 'قافلة أنيس النفوس - إيران',
    category: 'iran',
    durationDays: 14,
    departureDates: '20th Nov 2026 & 10th Jan 2027',
    pricePKR: 385000,
    priceUSD: 1380,
    hotels: [
      { city: 'Mashhad', hotelName: 'Almas 2 Luxury Hotel / Madinah Reza', distanceToHaram: '200m to Bab al-Reza', rating: 5 },
      { city: 'Qom', hotelName: 'Qom International Hotel / Karimeh', distanceToHaram: 'Directly in Astaneh Square', rating: 4 }
    ],
    inclusions: [
      'Return Airfare (Mahan Air / Air Arabia / Kish Air)',
      'Iran Electronic Visa processing with approval guarantee',
      'Top-Tier 4-Star & 5-Star accommodations',
      '3 meals daily featuring traditional Pakistani & Persian specialities',
      'Domestic flight / VIP sleeper train between Tehran, Qom, and Mashhad',
      'Guided historical tours to Neyshabur, Jamkaran, Chehel Akhtaroon',
      'Daily Dars-e-Qur’an and Ziyarat-e-Jami’ah Kabirah recitations'
    ],
    highlights: [
      'Extensive prayer time in the illuminated courtyards of Imam Reza (A.S)',
      'Exclusive night aamal at the Jamkaran Holy Mosque',
      'Neyshabur visit including Qadamgah of Imam Reza (A.S)'
    ],
    seatsLeft: 12,
    itinerary: [
      { day: 'Day 1-5', title: 'Qom & Jamkaran', activities: 'Arrival in Tehran, direct transfer to Qom, Ziyarat of Bibi Masuma (S.A), visit to Jamkaran Mosque on Tuesday night, Chehel Akhtaroon.' },
      { day: 'Day 6-12', title: 'Mashhad (Astan Quds)', activities: 'Flight to Mashhad, welcome Ziyarat at Haram Imam Reza (A.S), daily Aamal, library visit, Neyshabur day tour.' },
      { day: 'Day 13-14', title: 'Tehran & Return', activities: 'Shah Abdol-Azim in Ray, Behesht-e-Zahra, return flight to Pakistan.' }
    ]
  },
  {
    id: 'iraq-iran-combined-21d',
    title: 'Combined Iraq & Iran Grand Ziyarat',
    arabicTitle: 'القافلة الكبرى - العراق وإيران',
    category: 'combined',
    durationDays: 21,
    departureDates: '5th Dec 2026',
    pricePKR: 690000,
    priceUSD: 2480,
    hotels: [
      { city: 'Karbala & Najaf', hotelName: 'Top Tier 4-Star Deluxe Haramein properties', distanceToHaram: 'Walking distance (180m)', rating: 4 },
      { city: 'Mashhad & Qom', hotelName: 'Astan Luxury Partners Hotel', distanceToHaram: 'Walking distance (200m)', rating: 5 }
    ],
    inclusions: [
      'All international flights & transit connections',
      'Both Iraq and Iran Visas completely handled',
      '21 Days full accommodation in premium hotels near shrines',
      'All 3 meals daily (Pakistani dishes + local delicacies)',
      'Complete ground transportation in luxury coaches',
      'Comprehensive caravan companionship and guidance by Zulfiqar Ali',
      'Full ziyarat coverage across 7 holy cities'
    ],
    highlights: [
      'The ultimate pilgrimage journey covering all major sanctuaries in one trip',
      'Seamless transit between Iraq and Iran with zero luggage hassle',
      'Deep scholarly lectures and historical analysis of Islamic shrines'
    ],
    seatsLeft: 4,
    itinerary: [
      { day: 'Day 1-11', title: 'Iraq Sacred Pilgrimage', activities: 'Full itinerary of Najaf, Kufa, Sahla, Karbala, Kazmain, Samarra and Balad.' },
      { day: 'Day 12-20', title: 'Iran Sacred Pilgrimage', activities: 'Direct transit flight to Iran, covering Qom, Jamkaran, Mashhad and Neyshabur.' },
      { day: 'Day 21', title: 'Homeward Bound', activities: 'Return flight to Pakistan carrying holy turbah, ab-e-zamzam, and blessings.' }
    ]
  }
];

export const GALLERY_FOLDERS: GalleryFolder[] = [
  {
    id: 'najaf',
    name: 'Najaf Ashraf Archive',
    arabicName: 'ألبوم النجف الأشرف',
    location: 'Najaf & Kufa, Iraq',
    photoCount: 14,
    coverImage: '/src/assets/images/single_haram_imam_ali_najaf_1792137452644.jpg',
    photos: [
      {
        id: 'najaf-1',
        title: 'Golden Dome of Imam Ali (A.S)',
        subtitle: 'Bab al-Qibla single holy shrine and courtyard',
        category: 'Najaf',
        image: '/src/assets/images/single_haram_imam_ali_najaf_1792137452644.jpg',
        year: '2026'
      },
      {
        id: 'najaf-2',
        title: 'Karwan Group at Bain-ul-Haramain',
        subtitle: 'Our group of Zaireen holding Karwan-e-Sada-e-Najaf banner',
        category: 'Najaf / Karbala',
        image: '/src/assets/images/hero_bain_ul_haramain_1792136186878.jpg',
        year: '2026'
      },
      {
        id: 'najaf-3',
        title: 'Masjid-e-Kufa Aamal Session',
        subtitle: 'Zulfiqar Ali guiding group through Maqam of Prophets',
        category: 'Najaf',
        image: '/src/assets/images/single_haram_imam_ali_najaf_1792137452644.jpg',
        year: '2025'
      }
    ]
  },
  {
    id: 'karbala',
    name: 'Karbala Archive',
    arabicName: 'ألبوم كربلاء المقدسة',
    location: 'Karbala, Iraq',
    photoCount: 22,
    coverImage: '/src/assets/images/single_haram_imam_hussain_karbala_1792137453021.jpg',
    photos: [
      {
        id: 'karbala-1',
        title: 'Single Holy Shrine of Imam Hussain (A.S)',
        subtitle: 'Radiant golden dome and red flag of Imam Hussain (A.S)',
        category: 'Karbala',
        image: '/src/assets/images/single_haram_imam_hussain_karbala_1792137453021.jpg',
        year: '2026'
      },
      {
        id: 'karbala-2',
        title: 'Bain-ul-Haramain Official Caravan Banner',
        subtitle: 'Karwan-e-Sada-e-Najaf group between both shrines',
        category: 'Karbala',
        image: '/src/assets/images/hero_bain_ul_haramain_1792136186878.jpg',
        year: '2026'
      },
      {
        id: 'karbala-3',
        title: 'Shab-e-Juma Majlis at Karbala',
        subtitle: 'Heartfelt zikr and ziarat under the leadership of Zulfiqar Ali',
        category: 'Karbala',
        image: '/src/assets/images/single_haram_imam_hussain_karbala_1792137453021.jpg',
        year: '2025'
      }
    ]
  },
  {
    id: 'makkah',
    name: 'Makkah Mukarramah Archive',
    arabicName: 'ألبوم مكة المكرمة',
    location: 'Makkah, Saudi Arabia',
    photoCount: 16,
    coverImage: '/src/assets/images/dest_umrah_makkah_madina_1792136188268.jpg',
    photos: [
      {
        id: 'makkah-1',
        title: 'Tawaf Around the Holy Kaaba',
        subtitle: 'Zaireen performing Umrah rituals during sunset',
        category: 'Makkah',
        image: '/src/assets/images/dest_umrah_makkah_madina_1792136188268.jpg',
        year: '2026'
      },
      {
        id: 'makkah-2',
        title: 'View from Hotel Facing Haram',
        subtitle: 'Just a 2-minute walk from Swissotel to Mataf',
        category: 'Makkah',
        image: '/src/assets/images/dest_umrah_makkah_madina_1792136188268.jpg',
        year: '2025'
      }
    ]
  },
  {
    id: 'madinah',
    name: 'Madinah Munawwarah Archive',
    arabicName: 'ألبوم المدينة المنورة',
    location: 'Madinah, Saudi Arabia',
    photoCount: 18,
    coverImage: '/src/assets/images/dest_umrah_makkah_madina_1792136188268.jpg',
    photos: [
      {
        id: 'madinah-1',
        title: 'Courtyard of Masjid-e-Nabvi',
        subtitle: 'The majestic green dome and giant hydraulic umbrellas',
        category: 'Madinah',
        image: '/src/assets/images/dest_umrah_makkah_madina_1792136188268.jpg',
        year: '2026'
      },
      {
        id: 'madinah-2',
        title: 'Jannat-ul-Baqi Ziyarat Gathering',
        subtitle: 'Recitation of Ziyarat for the Imams of Baqi (A.S)',
        category: 'Madinah',
        image: '/src/assets/images/dest_umrah_makkah_madina_1792136188268.jpg',
        year: '2025'
      }
    ]
  },
  {
    id: 'mashhad',
    name: 'Mashhad & Qom Archive',
    arabicName: 'ألبوم مشهد وقم المقدسة',
    location: 'Mashhad & Qom, Iran',
    photoCount: 20,
    coverImage: '/src/assets/images/dest_iran_mashhad_qom_1792136189334.jpg',
    photos: [
      {
        id: 'mashhad-1',
        title: 'Haram Imam Reza (A.S) Courtyard',
        subtitle: 'Grand central fountain pool and golden dome reflection',
        category: 'Mashhad',
        image: '/src/assets/images/dest_iran_mashhad_qom_1792136189334.jpg',
        year: '2026'
      },
      {
        id: 'qom-1',
        title: 'Sanctuary of Bibi Masuma (S.A)',
        subtitle: 'Qom Sharif evening serenity and ziyarat recitation',
        category: 'Qom',
        image: '/src/assets/images/dest_iran_mashhad_qom_1792136189334.jpg',
        year: '2025'
      }
    ]
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't-1',
    name: 'Syed Zeeshan Haider Rizvi & Family',
    urduName: 'سید ذیشان حیدر رضوی',
    city: 'Lahore',
    country: 'Pakistan',
    pilgrimage: 'Iraq Moalla (Arbaeen & Regular)',
    year: '2025',
    rating: 5,
    review: 'Alhamdulillah, traveling with Karwan-e-Sada-e-Najaf under Zulfiqar Ali was the most spiritually elevating experience of our lives. The hotel in Karbala was genuinely 3 minutes from Bain-ul-Haramain, which made it effortless for my elderly parents. The Pakistani meals cooked daily were pure home quality.',
    travelGroup: 'Family of 4'
  },
  {
    id: 't-2',
    name: 'Dr. Muhammad Ali Kazmi',
    urduName: 'ڈاکٹر محمد علی کاظمی',
    city: 'Karachi',
    country: 'Pakistan',
    pilgrimage: 'Combined Iraq & Iran Ziyarat',
    year: '2025',
    rating: 5,
    review: 'Zulfiqar Ali is not just an organizer; he is a caring mentor. In every holy shrine, whether Masjid Kufa, Samarra, or Mashhad, he personally guided us through every single Aamal and historical context. Zero hidden charges, absolute honesty and transparency.',
    travelGroup: 'Couple Tour'
  },
  {
    id: 't-3',
    name: 'Begum Shabana Fatima',
    urduName: 'بیگم شبانہ فاطمہ',
    city: 'Islamabad',
    country: 'Pakistan',
    pilgrimage: 'Executive Umrah & Madinah',
    year: '2026',
    rating: 5,
    review: 'Our Umrah trip with Karwan-e-Sada-e-Najaf was flawlessly organized. From the Swissotel directly facing the Haram in Makkah to the high-speed bullet train to Madinah, every transit was smooth and dignified. The permit for Rawdah Sharifah was arranged without any stress.',
    travelGroup: 'Mother & Daughter'
  },
  {
    id: 't-4',
    name: 'Haji Ghulam Abbas Naqvi',
    urduName: 'حاجی غلام عباس نقوی',
    city: 'Rawalpindi',
    country: 'Pakistan',
    pilgrimage: 'Iraq Moalla Ziyarat',
    year: '2025',
    rating: 5,
    review: 'What impressed me most was the dedication to elderly zaireen. Wheelchairs were always ready, and the transport was always VIP air-conditioned buses. Whenever we needed Zulfiqar Ali Sahab, he was right with the group. May Allah bless Karwan-e-Sada-e-Najaf.',
    travelGroup: 'Senior Citizen Group'
  }
];

export const FAQS = [
  {
    q: 'What is the visa process for Iraq and Iran through Karwan-e-Sada-e-Najaf?',
    a: 'We handle 100% of the visa processing for Iraq and Iran. All you need to submit is your valid passport (minimum 6 months validity) and recent passport-sized photographs with white background. We acquire the electronic approval and official group visas directly.'
  },
  {
    q: 'How close are the selected hotels to the holy shrines?',
    a: 'We strictly select hotels within comfortable walking distance: in Karbala (within 200m of Bain-ul-Haramain), in Najaf (within 180m of Bab al-Qibla), in Makkah (150m from clock tower courtyard), and in Madinah (within Northern Markaziya 100m). This allows pilgrims of all ages to visit the Harams for every prayer.'
  },
  {
    q: 'Are Pakistani meals provided, and can special dietary needs be accommodated?',
    a: 'Yes, three hot, fresh buffet meals are cooked daily by experienced Pakistani chefs who travel with our logistics network. Dishes include traditional daal, chicken karahi, mutton pulao, fresh rotis, seasonal fruits, and chai. Diabetic or soft dietary options are provided upon request.'
  },
  {
    q: 'Can elderly pilgrims or wheelchair users join the caravan comfortably?',
    a: 'Absolutely. Over 30% of our pilgrims are senior citizens. We provide wheelchair support, ground-floor/elevator hotel rooms, accessible AC buses, and dedicated volunteers to ensure elderly zaireen perform their ziyarats safely without strain.'
  },
  {
    q: 'How does registration work, and what is the payment schedule?',
    a: 'You can submit the online registration form or contact us directly on WhatsApp (0314-8681093). A minimal booking deposit secures your seat and airfare booking, with the remaining balance settled 15 days prior to departure.'
  }
];

export const PREPARATION_CHECKLIST = [
  { category: 'Documents', items: ['Original Passport with min 6-month validity', 'Color copies of CNIC & Passport', 'Confirmed return e-ticket printouts', 'Vaccination certificate copies', 'Emergency contact card with Zulfiqar Ali Sahab’s number'] },
  { category: 'Spiritual Essentials', items: ['Turbah (Khak-e-Shifa) & Tasbeeh', 'Mafatih al-Jinan or Ziyarat Booklets', 'Personal prayer mat (Mustahab)', 'Pocket notebook for Duas from friends & relatives'] },
  { category: 'Clothing & Comfort', items: ['Modest, breathable cotton clothes for hot days', 'Light woolen jacket/shawl for cool desert nights in Najaf & Karbala', 'Comfortable walking sandals / slip-on shoes for Harams', 'Drawstring bag for shoes inside courtyards'] },
  { category: 'Health & Personal Care', items: ['15-day supply of personal prescribed medications', 'Oral rehydration salts (ORS), pain relievers, throat lozenges', 'Unscented lip balm & sun protection lotion', 'Small hand sanitizer and travel tissue packs'] }
];
