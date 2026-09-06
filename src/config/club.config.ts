export interface ClubConfig {
  id: string;
  name: string;
  shortName: string;
  type: "multiple-district" | "district" | "club";
  district: string;
  multipleDistrict: string;
  country: string;
  charterYear: number;
  sponsoringLionsClub?: string;
  tagline: string;
  motto: string;
  description: string;
  logos: {
    main: string;
    lion: string;
    leo: string;
    district?: string;
  };
  contact: {
    email: string;
    phone: string;
    address: string;
    meetingSchedule: string;
    socials: {
      facebook?: string;
      instagram?: string;
      linkedin?: string;
      youtube?: string;
      twitter?: string;
    };
  };
  impactStats: {
    stat1: { value: string; label: string };
    stat2: { value: string; label: string };
    stat3: { value: string; label: string };
    stat4: { value: string; label: string };
    description: string;
  };
  affiliationDetails: {
    lciTitle: string;
    lciDescription: string;
    card1: {
      title: string;
      subtitle: string;
      linkText: string;
      linkUrl: string;
    };
    card2: {
      title: string;
      subtitle: string;
    };
    card3: {
      title: string;
      subtitle: string;
    };
  };
  pillars: {
    id: string;
    title: string;
    tagline: string;
    description: string;
    icon: string;
    color: string;
  }[];
  featuredProjects: {
    id: string;
    slug: string;
    title: string;
    category: string;
    categoryColor: string;
    image: string;
    summary: string;
    impactMetric: string;
    date: string;
    location: string;
    status: "Completed" | "Ongoing" | "Upcoming";
  }[];
  upcomingEvents: {
    id: string;
    title: string;
    date: string;
    day: string;
    month: string;
    time: string;
    venue: string;
    category: string;
    description: string;
  }[];
  boardMembers: {
    id: string;
    name: string;
    designation: string;
    roleCategory: "top-table" | "director" | "advisor";
    photo: string;
    motto?: string;
    email?: string;
    linkedin?: string;
  }[];
  testimonials: {
    id: string;
    quote: string;
    author: string;
    role: string;
    avatar: string;
  }[];
}

export const CLUBS_DATA: Record<string, ClubConfig> = {
  "leo-md-306": {
    id: "leo-md-306",
    name: "Leos of Sri Lanka & Maldives (Leo MD 306)",
    shortName: "Leo MD 306",
    type: "multiple-district",
    district: "Multiple District 306",
    multipleDistrict: "MD 306",
    country: "Sri Lanka & Maldives",
    charterYear: 1969,
    tagline: "Inspiring Lives • Empowering Youth • Leading Change",
    motto: "Leadership, Experience, Opportunity",
    description:
      "Multiple District 306 unites young change-makers across Sri Lanka and the Maldives to create meaningful humanitarian impact, foster executive leadership skills, and serve vulnerable communities.",
    logos: {
      main: "/logos/leo-md306.png",
      lion: "/logos/lions-international.png",
      leo: "/logos/leo-emblem.png",
      district: "/logos/md306-emblem.png",
    },
    contact: {
      email: "secretariat@leomd306.org",
      phone: "+94 11 258 4567",
      address: "Lions Activity Centre, Vidya Mawatha, Colombo 07, Sri Lanka",
      meetingSchedule: "Monthly Council Meeting - 1st Saturday at 4:00 PM",
      socials: {
        facebook: "https://facebook.com/LeoMultipleDistrict306",
        instagram: "https://instagram.com/leomd306",
        linkedin: "https://linkedin.com/company/leo-md-306",
        youtube: "https://youtube.com/@leomd306",
      },
    },
    impactStats: {
      stat1: { value: "12", label: "Districts" },
      stat2: { value: "210+", label: "Clubs" },
      stat3: { value: "10,000+", label: "Members" },
      stat4: { value: "5,000+", label: "Projects" },
      description:
        "Where Multiple District 306 stands today, across Sri Lanka and the Maldives.",
    },
    affiliationDetails: {
      lciTitle: "Lions Clubs International",
      lciDescription:
        "Lions Clubs International (LCI), founded by Melvin Jones in 1917, is the largest service organization in the world with 1.4 million members. The organization is dedicated to humanitarian efforts, promoting peace, and fostering cross-cultural understanding through its global network of over 46,000 clubs. LCI's motto, 'We Serve,' reflects its commitment to helping communities in need, regardless of language, religion, or politics.",
      card1: {
        title: "Lions International",
        subtitle: "Since 1917. The largest service organization in the world.",
        linkText: "Read the history",
        linkUrl: "/about#lions-history",
      },
      card2: {
        title: "Leo",
        subtitle: "Leadership. Experience. Opportunity. Since 1957.",
      },
      card3: {
        title: "Leo MD 306",
        subtitle: "Sri Lanka and the Maldives. Led by young people.",
      },
    },
    pillars: [
      {
        id: "environment",
        title: "Environment & Green Earth",
        tagline: "Preserving biodiversity and climate action",
        description: "Large-scale tree plantation, beach cleanup drives, coral restoration, and zero-waste awareness across island nations.",
        icon: "TreePine",
        color: "emerald",
      },
      {
        id: "hunger",
        title: "Hunger Relief & Nutrition",
        tagline: "Combating food insecurity with compassion",
        description: "Community soup kitchens, dry ration distribution for low-income families, and school nutritional lunch programs.",
        icon: "Utensils",
        color: "amber",
      },
      {
        id: "vision-health",
        title: "Vision & Healthcare",
        tagline: "Restoring sight and essential health screenings",
        description: "Free pediatric eye screening camps, spectacle donations, mobile medical clinics, and blood donation drives.",
        icon: "Eye",
        color: "blue",
      },
      {
        id: "youth-empowerment",
        title: "Youth Leadership & Education",
        tagline: "Equipping next-generation leaders",
        description: "Public speaking academies, career mentorship summits, STEM workshops, and rural school infrastructure upgrades.",
        icon: "GraduationCap",
        color: "indigo",
      },
      {
        id: "childhood-cancer",
        title: "Childhood Cancer Support",
        tagline: "Standing with courageous young fighters",
        description: "Pediatric oncology ward upliftment, medicinal funding, and happiness campaigns for recovering children.",
        icon: "Ribbon",
        color: "rose",
      },
      {
        id: "disaster-relief",
        title: "Disaster Relief & Aid",
        tagline: "Rapid emergency response when disaster strikes",
        description: "Immediate relief package distribution during floods, landslides, and economic emergencies.",
        icon: "ShieldAlert",
        color: "cyan",
      },
    ],
    featuredProjects: [
      {
        id: "proj-1",
        slug: "haritha-dharani-island-green",
        title: "Project Haritha Dharani: 50,000 Mangrove & Forest Restoration",
        category: "Environment",
        categoryColor: "bg-emerald-100 text-emerald-800 border-emerald-200",
        image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=1200&q=80",
        summary: "A nationwide coastal mangrove conservation drive restoring over 25 hectares of critical wetland ecosystems across Kalpitiya, Negombo, and Mannar.",
        impactMetric: "52,400 Trees Planted",
        date: "August 2024",
        location: "Coastal Belt, Sri Lanka",
        status: "Completed",
      },
      {
        id: "proj-2",
        slug: "sight-first-schools",
        title: "Sight For Youth: Nationwide School Vision & Spectacle Drive",
        category: "Vision Care",
        categoryColor: "bg-blue-100 text-blue-800 border-blue-200",
        image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1200&q=80",
        summary: "Screening over 15,000 rural primary school students and providing high-quality custom prescription spectacles free of charge.",
        impactMetric: "3,200 Free Glasses Donated",
        date: "October 2024",
        location: "Central & Uva Provinces",
        status: "Ongoing",
      },
      {
        id: "proj-3",
        slug: "suwa-diviya-hunger-relief",
        title: "Project Suwa Diviya: Zero-Hunger Community Kitchens",
        category: "Hunger Relief",
        categoryColor: "bg-amber-100 text-amber-800 border-amber-200",
        image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=1200&q=80",
        summary: "Delivering wholesome nutritious meals and dry ration packs to underserved urban families and elder care centers.",
        impactMetric: "28,000+ Hot Meals Served",
        date: "September 2024",
        location: "Western & Southern Districts",
        status: "Completed",
      },
    ],
    upcomingEvents: [
      {
        id: "ev-1",
        title: "Leo Multiple District Annual Youth Leadership Summit 2025",
        date: "March 22, 2025",
        day: "22",
        month: "MAR",
        time: "09:00 AM - 05:00 PM",
        venue: "BMICH Main Hall, Colombo",
        category: "Conferences",
        description: "The flagship leadership conference gathering over 800 young delegates for workshops, keynote panels, and national project awards.",
      },
      {
        id: "ev-2",
        title: "Island-Wide Mega Blood & Plasma Donation Drive",
        date: "April 12, 2025",
        day: "12",
        month: "APR",
        time: "08:30 AM - 03:30 PM",
        venue: "National Blood Center, Narahenpita & Regional Centers",
        category: "Healthcare",
        description: "Join hands with 50+ Leo clubs across all districts to replenish critical blood reserves for national hospitals.",
      },
      {
        id: "ev-3",
        title: "Maldives Coral Restoration & Marine Fellowship Camp",
        date: "May 18, 2025",
        day: "18",
        month: "MAY",
        time: "Full Weekend Program",
        venue: "Kaafu Atoll, Maldives",
        category: "Environment",
        description: "Cross-border fellowship event featuring underwater coral nursery transplantation and beach cleanup with local youth councils.",
      },
    ],
    boardMembers: [
      {
        id: "bm-1",
        name: "Leo Senura Jayasinghe",
        designation: "Multiple District President",
        roleCategory: "top-table",
        photo: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80",
        motto: "Leadership is not a title, it's the courage to serve and empower others.",
        email: "president@leomd306.org",
        linkedin: "https://linkedin.com",
      },
      {
        id: "bm-2",
        name: "Leo Dilani Perera",
        designation: "Multiple District Vice President",
        roleCategory: "top-table",
        photo: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80",
        motto: "When passion meets purpose, extraordinary transformations happen in our communities.",
        email: "vp@leomd306.org",
        linkedin: "https://linkedin.com",
      },
      {
        id: "bm-3",
        name: "Leo Kaveen Fernando",
        designation: "Multiple District Secretary",
        roleCategory: "top-table",
        photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80",
        motto: "Precision in execution, boundless empathy in service.",
        email: "secretary@leomd306.org",
        linkedin: "https://linkedin.com",
      },
      {
        id: "bm-4",
        name: "Leo Thisuri Ranasinghe",
        designation: "Multiple District Treasurer",
        roleCategory: "top-table",
        photo: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=600&q=80",
        motto: "Integrity and transparency are the pillars of sustainable humanitarian impact.",
        email: "treasurer@leomd306.org",
        linkedin: "https://linkedin.com",
      },
      {
        id: "bm-5",
        name: "Leo Rashmika Bandara",
        designation: "Director of Community Service",
        roleCategory: "director",
        photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80",
        motto: "Hands to serve, hearts to care.",
        email: "service@leomd306.org",
        linkedin: "https://linkedin.com",
      },
      {
        id: "bm-6",
        name: "Leo Amanda De Silva",
        designation: "Director of Public Relations & Media",
        roleCategory: "director",
        photo: "https://images.unsplash.com/photo-1534751516642-a1714f5a5078?auto=format&fit=crop&w=600&q=80",
        motto: "Amplifying voices of change across every platform.",
        email: "pr@leomd306.org",
        linkedin: "https://linkedin.com",
      },
    ],
    testimonials: [
      {
        id: "t-1",
        quote:
          "Joining Leos MD 306 gave me the platform to lead national-scale community initiatives, collaborate with international youth leaders, and gain confidence I never knew I had.",
        author: "Leo Minoli Wickremasinghe",
        role: "District 306 A1 • Past Club President",
        avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80",
      },
      {
        id: "t-2",
        quote:
          "The Leo movement is the world's greatest training ground for young humanitarians. Watching our youth lead 5,000+ impactful projects across Sri Lanka and the Maldives is truly inspiring.",
        author: "Lion Rohantha Samaraweera PMJF",
        role: "Council Chairperson • Lions Multiple District 306",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80",
      },
    ],
  },
  "leo-colombo-millennium": {
    id: "leo-colombo-millennium",
    name: "Leo Club of Colombo Millennium",
    shortName: "Leo Colombo Millennium",
    type: "club",
    district: "District 306 A2",
    multipleDistrict: "Multiple District 306",
    country: "Sri Lanka",
    charterYear: 2008,
    sponsoringLionsClub: "Lions Club of Colombo Millennium",
    tagline: "United in Service • Driven by Purpose",
    motto: "Leadership, Experience, Opportunity",
    description:
      "A vibrant, award-winning premier Leo Club in District 306 A2 dedicated to community upliftment, educational scholarships, and environmental sustainability.",
    logos: {
      main: "/logos/leo-colombo.png",
      lion: "/logos/lions-international.png",
      leo: "/logos/leo-emblem.png",
      district: "/logos/district-306a2.png",
    },
    contact: {
      email: "contact@leocolombomillennium.org",
      phone: "+94 77 345 6789",
      address: "Colombo 03, Sri Lanka",
      meetingSchedule: "2nd & 4th Sunday at 4:30 PM (Physical/Hybrid)",
      socials: {
        facebook: "https://facebook.com/LeoColomboMillennium",
        instagram: "https://instagram.com/leocolombomillennium",
        linkedin: "https://linkedin.com/company/leo-colombo-millennium",
      },
    },
    impactStats: {
      stat1: { value: "1", label: "Chartered Club" },
      stat2: { value: "65+", label: "Active Leos" },
      stat3: { value: "12,500+", label: "Volunteer Hours" },
      stat4: { value: "180+", label: "Projects Done" },
      description: "Where Leo Club of Colombo Millennium stands today in our journey of service.",
    },
    affiliationDetails: {
      lciTitle: "Lions Clubs International",
      lciDescription:
        "Sponsored by the Lions Club of Colombo Millennium under District 306 A2, our club is part of the world's largest humanitarian service network.",
      card1: {
        title: "Lions International",
        subtitle: "Since 1917. 1.4M+ members worldwide serving communities.",
        linkText: "Read the history",
        linkUrl: "/about#lions-history",
      },
      card2: {
        title: "Leo Movement",
        subtitle: "Leadership. Experience. Opportunity. Since 1957.",
      },
      card3: {
        title: "District 306 A2",
        subtitle: "Committed to excellence, fellowship, and service.",
      },
    },
    pillars: [
      {
        id: "education",
        title: "Sipnana Educational Aid",
        tagline: "Empowering rural students with books and lab equipment",
        description: "Annual school book donation drives, scholarship stipends, and smart classroom setups in rural schools.",
        icon: "GraduationCap",
        color: "blue",
      },
      {
        id: "green-future",
        title: "Eco-Future & Green Cities",
        tagline: "Urban reforestation and clean water filtration",
        description: "Community compost projects, public park revamps, and clean drinking water purification filters for schools.",
        icon: "TreePine",
        color: "emerald",
      },
      {
        id: "health-care",
        title: "Elder Care & Health Camps",
        tagline: "Dignity and comfort for senior citizens",
        description: "Regular medical checkups, cataract surgeries sponsorship, and recreational fellowship days for elder care homes.",
        icon: "HeartHandshake",
        color: "rose",
      },
    ],
    featuredProjects: [
      {
        id: "p-col-1",
        slug: "sipnana-scholarships",
        title: "Project Sipnana: 500 Rural Student Educational Packs",
        category: "Education",
        categoryColor: "bg-indigo-100 text-indigo-800 border-indigo-200",
        image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=1200&q=80",
        summary: "Provided complete annual book bundles, school bags, and stationery sets to 500 underprivileged primary school children in Monaragala.",
        impactMetric: "500 Students Supported",
        date: "January 2025",
        location: "Monaragala District",
        status: "Completed",
      },
      {
        id: "p-col-2",
        slug: "clean-water-schools",
        title: "Project Jeevithaya: Clean Water RO Filtration in 5 Schools",
        category: "Healthcare",
        categoryColor: "bg-cyan-100 text-cyan-800 border-cyan-200",
        image: "https://images.unsplash.com/photo-1541888946425-d0fbb18086f6?auto=format&fit=crop&w=1200&q=80",
        summary: "Installed commercial-grade Reverse Osmosis water purification filtration systems to safeguard rural kids against Chronic Kidney Disease.",
        impactMetric: "2,400+ Daily Beneficiaries",
        date: "November 2024",
        location: "Anuradhapura",
        status: "Completed",
      },
    ],
    upcomingEvents: [
      {
        id: "ev-col-1",
        title: "16th Annual Installation Ceremony of Club Officers",
        date: "July 15, 2025",
        day: "15",
        month: "JUL",
        time: "05:30 PM",
        venue: "Cinnamon Grand, Colombo",
        category: "Ceremony",
        description: "Induction of the incoming executive board for the Leistic Year 2025/2026 and celebration of past accomplishments.",
      },
    ],
    boardMembers: [
      {
        id: "bm-col-1",
        name: "Leo Dineth Gunasekara",
        designation: "Club President",
        roleCategory: "top-table",
        photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80",
        motto: "Lead with empathy, execute with passion.",
        email: "president@leocolombomillennium.org",
      },
      {
        id: "bm-col-2",
        name: "Leo Shenali Silva",
        designation: "Club Secretary",
        roleCategory: "top-table",
        photo: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80",
        motto: "Organized action creates boundless social good.",
        email: "secretary@leocolombomillennium.org",
      },
    ],
    testimonials: [
      {
        id: "t-col-1",
        quote: "Being in Colombo Millennium has shaped my professional career and taught me true project management through service.",
        author: "Leo Pravin S.",
        role: "Club Member • 3 Years in Service",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
      },
    ],
  },
};
