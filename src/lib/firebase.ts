import { initializeApp, getApps, getApp, FirebaseApp } from "firebase/app";
import {
  getFirestore,
  collection,
  getDocs,
  getDoc,
  doc,
  setDoc,
  deleteDoc,
  Firestore,
  addDoc,
  serverTimestamp,
  onSnapshot,
  Unsubscribe,
} from "firebase/firestore";

// Firebase credentials configuration from environment variables (client-safe)
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
};

/**
 * Checks if Firebase has been configured with real non-placeholder credentials
 */
export function isFirebaseConfigured(): boolean {
  return Boolean(
    firebaseConfig.apiKey &&
      firebaseConfig.projectId &&
      !firebaseConfig.apiKey.includes("your_api_key") &&
      !firebaseConfig.projectId.includes("your_project_id")
  );
}

// Safe singleton Firebase app initialization
let app: FirebaseApp | undefined = undefined;
let db: Firestore | undefined = undefined;

if (typeof window !== "undefined" || isFirebaseConfigured()) {
  try {
    if (isFirebaseConfigured()) {
      app = getApps().length ? getApp() : initializeApp(firebaseConfig);
      db = getFirestore(app);
    }
  } catch (error) {
    console.warn("Firebase initialization skipped or encountered error:", error);
  }
}

export { app, db };

// ==============================================================================
// INITIAL SEED DATASETS FOR UWU LEOS (PURE TYPESCRIPT CONSTANTS)
// ==============================================================================

export const INITIAL_PROJECTS = [
  {
    id: "proj-uwu-1",
    slug: "project-sipnana-badulla",
    title: "Project Sipnana: Rural School Educational Aid Drive",
    category: "Education",
    directorate: "Directorate of Education & STEM",
    icon: "BookOpen",
    color: "blue",
    summary:
      "Providing comprehensive book sets, essential stationery packs, and classroom learning equipment to underprivileged primary schools across the Passara and Badulla education zones.",
    impactMetric: "450+ Students Supported",
    date: "December 2024",
    location: "Passara Central & Rural Schools, Badulla",
    status: "Completed",
    volunteers: "45+ Leo Volunteers",
    beneficiaries: "4 Underprivileged Rural Schools",
    highlights: [
      "Distributed over 1,200 exercise books and complete stationery packs.",
      "Renovated primary reading corners with curated storybook libraries.",
      "Conducted interactive STEM curiosity sessions for Grade 3-5 students.",
    ],
    image: "",
  },
  {
    id: "proj-uwu-2",
    slug: "uwu-annual-blood-donation",
    title: "UWU Annual Mega Blood Donation & Health Camp",
    category: "Healthcare",
    directorate: "Directorate of Health & Wellbeing",
    icon: "Activity",
    color: "rose",
    summary:
      "Organized in direct collaboration with the Badulla Teaching Hospital Blood Bank, collecting vital blood units and providing free baseline health screenings for university staff and local residents.",
    impactMetric: "220+ Blood Units Collected",
    date: "November 2024",
    location: "UWU Main Auditorium, Badulla",
    status: "Annual Flagship",
    volunteers: "60+ Leo Volunteers",
    beneficiaries: "Badulla Teaching Hospital Blood Bank",
    highlights: [
      "220+ screened and verified donors in a single day.",
      "Free BMI, blood pressure, and basic glucose screening for 350+ attendees.",
      "First aid and emergency preparedness booth led by medical officers.",
    ],
    image: "",
  },
  {
    id: "proj-uwu-3",
    slug: "green-uva-reforestation",
    title: "Project Green Uva: Central Highlands Reforestation",
    category: "Environment",
    directorate: "Directorate of Environmental Conservation",
    icon: "Trees",
    color: "emerald",
    summary:
      "Planting native forest trees, soil-binding grasses, and medicinal plants across critical water catchment areas surrounding Namunukula and Badulla to combat hillside erosion.",
    impactMetric: "1,500+ Saplings Planted",
    date: "October 2024",
    location: "Namunukula Catchment & Ella Hills, Badulla",
    status: "Completed",
    volunteers: "50+ Leo Volunteers",
    beneficiaries: "Uva Province Water Catchment Ecosystem",
    highlights: [
      "1,500+ indigenous trees and Kumbuk saplings planted.",
      "Eco-trail cleanup removing 180kg of non-biodegradable waste from Ella.",
      "Long-term growth monitoring partnered with local forest rangers.",
    ],
    image: "",
  },
  {
    id: "proj-uwu-4",
    slug: "manusath-derana-relief-drive",
    title: "Passara Community Food & Winter Relief Mission",
    category: "Community",
    directorate: "Directorate of Community Services",
    icon: "HeartHandshake",
    color: "amber",
    summary:
      "Delivering essential dry rations, warm winter clothing, and emergency flood relief packages to vulnerable tea estate families in the high-altitude Passara region.",
    impactMetric: "180+ Families Aided",
    date: "September 2024",
    location: "Passara Tea Estate Sector, Badulla",
    status: "Completed",
    volunteers: "35+ Leo Volunteers",
    beneficiaries: "Tea Estate Farming Families",
    highlights: [
      "Distributed 180 essential grocery and dry ration hampers.",
      "Provided warm clothing packs and blankets for elderly residents.",
      "Organized community tea and counseling session with village elders.",
    ],
    image: "",
  },
  {
    id: "proj-uwu-5",
    slug: "tech-ignite-stem-workshop",
    title: "TechIgnite: Digital Literacy & Coding for Rural Youth",
    category: "Education",
    directorate: "Directorate of Information Technology",
    icon: "Laptop",
    color: "cyan",
    summary:
      "Introducing basic computer skills, Scratch visual programming, and internet safety awareness to rural secondary students with limited access to modern computer labs.",
    impactMetric: "120+ Students Trained",
    date: "August 2024",
    location: "Badulla District Rural Schools",
    status: "Completed",
    volunteers: "25+ Leo IT Mentors",
    beneficiaries: "Grade 7-10 Underprivileged Students",
    highlights: [
      "Hands-on computer basics and block-coding workshops.",
      "Setup of refurbished computer workstations in 2 village schools.",
      "Digital career guidance by UWU Computer Science undergraduates.",
    ],
    image: "",
  },
  {
    id: "proj-uwu-6",
    slug: "leo-leadership-bootcamp-uwu",
    title: "Leostride: Undergraduate Leadership & Public Speaking",
    category: "Youth Development",
    directorate: "Directorate of Member Development",
    icon: "Users",
    color: "purple",
    summary:
      "An intensive weekend leadership workshop designed to equip first-year university undergraduates with public speaking, project management, and team collaboration skills.",
    impactMetric: "85+ New Leaders Trained",
    date: "July 2024",
    location: "UWU Campus, Badulla",
    status: "Annual Flagship",
    volunteers: "20+ Executive Trainers",
    beneficiaries: "UWU Undergraduates",
    highlights: [
      "Keynote sessions from Guiding Lions and corporate leaders.",
      "Live crisis-management simulations and debate challenges.",
      "Induction of 40+ new enthusiastic Leo members.",
    ],
    image: "",
  },
];

export const INITIAL_MAGAZINES = [
  {
    id: "mag-1",
    title: "ROAR: The Official Leistic Annual Magazine",
    edition: "Volume 06 • Leistic Year 2024/2025",
    category: "Annual Flagship",
    date: "December 2024",
    pages: "52 Pages",
    directorate: "Directorate of PR & Media",
    editor: "Leo Editorial Board — Uva Wellassa University",
    driveUrl: "https://drive.google.com/file/d/1sample-drive-roar-vol6/view?usp=sharing",
    summary:
      "The flagship annual retrospective chronicling university humanitarian missions, leadership milestones, rural community transformations, and undergraduate creative essays.",
    highlights: [
      "Presidential Retrospective: The 2024 Service Roadmap",
      "Special Feature: 100+ Hours in Passara Rural Classrooms",
      "Voices of Uva: Undergraduate Poetry and Research Articles",
      "District 306 D10 Fellowship & Twin Club Collaborations",
    ],
    isFeatured: true,
  },
  {
    id: "mag-2",
    title: "Project Sipnana: Rural Education Special Gazette",
    edition: "Special Impact Report • Issue 03",
    category: "Special Issue",
    date: "October 2024",
    pages: "36 Pages",
    directorate: "Directorate of Education & STEM",
    editor: "Project Sipnana Committee",
    driveUrl: "https://drive.google.com/file/d/1sample-drive-sipnana-gazette/view?usp=sharing",
    summary:
      "A comprehensive photographic case study and student evaluation report detailing school library restorations and rural STEM labs established in Badulla.",
    highlights: [
      "Field Reports from 4 Primary Education Zones",
      "STEM Workshop Curriculums & Student Feedback",
      "Donor Transparency & Financial Allocation Ledger",
    ],
    isFeatured: false,
  },
  {
    id: "mag-3",
    title: "Green Uva Chronicle: Central Highlands Eco-Bulletin",
    edition: "Conservation Edition • Vol 02",
    category: "Environment",
    date: "August 2024",
    pages: "28 Pages",
    directorate: "Directorate of Environmental Conservation",
    editor: "Green Uva Environmental Cell",
    driveUrl: "https://drive.google.com/file/d/1sample-drive-green-uva-bulletin/view?usp=sharing",
    summary:
      "Dedicated to the biodiversity preservation of Namunukula ridge and Ella eco-trails, featuring native flora catalogs and catchment water table research.",
    highlights: [
      "Flora & Fauna of Namunukula Catchment Areas",
      "Soil Erosion Mitigation via Kumbuk Tree Planting",
      "Campus Green Audit: Moving Towards Zero Single-Use Plastics",
    ],
    isFeatured: false,
  },
  {
    id: "mag-4",
    title: "The Leo Pulse: Quarterly District Dispatch",
    edition: "Quarterly Bulletin • Q2 2024",
    category: "Quarterly Bulletin",
    date: "June 2024",
    pages: "24 Pages",
    directorate: "Directorate of Member Development",
    editor: "Secretarial & Media Wing",
    driveUrl: "https://drive.google.com/file/d/1sample-drive-leo-pulse-q2/view?usp=sharing",
    summary:
      "A crisp quarterly gazette covering new member induction ceremonies, executive assembly resolutions, and inter-university fellowship retreats.",
    highlights: [
      "Induction of 40+ First-Year Undergraduates",
      "Leadership Bootcamp Workshops & Public Speaking Drills",
      "Upcoming Multi-District 306 Convention Agenda",
    ],
    isFeatured: false,
  },
  {
    id: "mag-5",
    title: "Blood Aid & Community Health Retrospective",
    edition: "Health Directorate Special Issue",
    category: "Special Issue",
    date: "April 2024",
    pages: "20 Pages",
    directorate: "Directorate of Health & Wellbeing",
    editor: "Health Camp Committee",
    driveUrl: "https://drive.google.com/file/d/1sample-drive-health-retrospective/view?usp=sharing",
    summary:
      "Medical officer reflections, donor statistics, and health awareness articles from the Badulla Annual Mega Blood Donation.",
    highlights: [
      "Badulla Hospital Blood Bank Donor Statistics",
      "Undergraduate First-Aid Guidelines & Emergency Tips",
    ],
    isFeatured: false,
  },
  {
    id: "mag-6",
    title: "Leostride Leadership & Public Speaking Handbook",
    edition: "Training Publication • Issue 01",
    category: "Quarterly Bulletin",
    date: "February 2024",
    pages: "32 Pages",
    directorate: "Directorate of Member Development",
    editor: "Youth Leadership Cell",
    driveUrl: "https://drive.google.com/file/d/1sample-drive-leadership-handbook/view?usp=sharing",
    summary:
      "Essential guide on university project management, meeting etiquette, district reporting standards, and speech craft for new Leos.",
    highlights: [
      "Standard Leo Meeting Procedures & Protocols",
      "District 306 D10 Reporting & MyLCI Guide",
    ],
    isFeatured: false,
  },
];

export const INITIAL_DOCUMENTS = [
  {
    id: "doc-1",
    title: "Leo Club of UWU Constitution & By-Laws",
    category: "Governance & Statutes",
    description:
      "Official club constitution, governance framework, election procedures, and membership duties accredited by Leo District 306 D10.",
    format: "PDF Document",
    size: "1.4 MB",
    driveUrl: "https://drive.google.com/file/d/1official-uwu-leo-constitution/view?usp=sharing",
    updatedAt: "2025/26 Leistic Year",
  },
  {
    id: "doc-2",
    title: "Undergraduate Membership Application Form",
    category: "Membership & Induction",
    description:
      "Official registration and profile submission form for prospective university undergraduate members.",
    format: "PDF / DOCX",
    size: "450 KB",
    driveUrl: "https://drive.google.com/file/d/1membership-application-template/view?usp=sharing",
    updatedAt: "October 2024",
  },
  {
    id: "doc-3",
    title: "Project Proposal & Budget Approval Template",
    category: "Project Management",
    description:
      "Standardized project proposal blueprint including executive summary, committee roster, action timeline, and itemized budget estimates.",
    format: "DOCX Document",
    size: "380 KB",
    driveUrl: "https://drive.google.com/file/d/1project-proposal-budget-template/view?usp=sharing",
    updatedAt: "November 2024",
  },
  {
    id: "doc-4",
    title: "Post-Project Evaluation & Accountability Report",
    category: "Reporting & Auditing",
    description:
      "Mandatory project completion reporting template detailing community impact metrics, verified expenditure, and photo documentation.",
    format: "DOCX Document",
    size: "320 KB",
    driveUrl: "https://drive.google.com/file/d/1post-project-evaluation-report/view?usp=sharing",
    updatedAt: "November 2024",
  },
  {
    id: "doc-5",
    title: "Fieldwork & Volunteer Activity Consent Form",
    category: "Safety & Compliance",
    description:
      "Standard volunteer participation and travel consent form for university field trips, disaster relief, and outstation medical drives.",
    format: "PDF Document",
    size: "210 KB",
    driveUrl: "https://drive.google.com/file/d/1fieldwork-consent-form-template/view?usp=sharing",
    updatedAt: "January 2025",
  },
];

export const INITIAL_LEADERSHIP = {
  leisticYear: "2024/2025",
  district: "District 306 D10",
  sponsoringClub: "Lions Club of Badulla",
  stats: [
    { label: "Advisory Mentors", value: "02", desc: "Academic & Lions Governance" },
    { label: "Executive Officers", value: "05", desc: "Top Table Management" },
    { label: "Portfolio Directorates", value: "08", desc: "Community & Campus Impact" },
    { label: "Faculties Represented", value: "04", desc: "Uva Wellassa University" },
  ],
  advisoryCouncil: [
    {
      id: "adv-1",
      category: "Academic Mentorship",
      roleBadge: "UWU FACULTY MENTOR",
      title: "University Staff Advisor",
      name: "Staff Advisor — Uva Wellassa University",
      designation: "Senior Lecturer & Academic Mentor",
      institution: "Uva Wellassa University of Sri Lanka",
      scope:
        "Provides strategic counsel on university policy adherence, academic faculty liaison, student development ethics, and campus governance integration.",
      email: "staff.advisor@uwu.ac.lk",
      initials: "SA",
      image: "",
    },
    {
      id: "adv-2",
      category: "LCI District Governance",
      roleBadge: "LIONS DISTRICT ADVISOR",
      title: "Leo Club Advisor (Guiding Lion)",
      name: "Club Advisor — Lions Club of Badulla",
      designation: "Guiding Lion & Past District Officer",
      institution: "Lions Club of Badulla • Leo District 306 D10",
      scope:
        "Ensures adherence to the Lions Clubs International Constitution, mentors club officers on youth leadership stewardship, and coordinates district funding pipelines.",
      email: "advisor.badulla@lions306d10.org",
      initials: "CA",
      image: "",
    },
  ],
  president: {
    id: "exco-pres",
    roleBadge: "CHIEF EXECUTIVE OFFICER",
    designation: "Club President",
    name: "Leo Club President",
    faculty: "Faculty of Applied Sciences",
    institution: "Uva Wellassa University",
    term: "Leistic Year 2024/2025",
    responsibilities:
      "Presides over all executive and general assemblies, directs overall strategic vision, represents UWU Leos at District 306 D10 conventions, and stewards inter-faculty service initiatives.",
    email: "president.uwuleos@gmail.com",
    motto: "“Leading with passion, serving with purpose for Uva Wellassa and beyond.”",
    initials: "CP",
    image: "",
  },
  excoOfficers: [
    {
      id: "exco-vp",
      roleBadge: "EXECUTIVE COUNCIL",
      designation: "Club Vice President",
      name: "Leo Vice President",
      faculty: "Faculty of Management",
      scope:
        "Directs project directorate coordination, supervises internal operational logistics, and represents the president in executive assemblies.",
      email: "vp.uwuleos@gmail.com",
      initials: "VP",
      color: "cyan",
      image: "",
    },
    {
      id: "exco-sec",
      roleBadge: "EXECUTIVE COUNCIL",
      designation: "Club Secretary",
      name: "Leo Secretary",
      faculty: "Faculty of Science & Technology",
      scope:
        "Stewards official records, meeting minutes, monthly district activity reporting via Lion Portal / MyLCI, and inter-club correspondence.",
      email: "secretary.uwuleos@gmail.com",
      initials: "CS",
      color: "blue",
      image: "",
    },
    {
      id: "exco-tre",
      roleBadge: "EXECUTIVE COUNCIL",
      designation: "Club Treasurer",
      name: "Leo Treasurer",
      faculty: "Faculty of Management",
      scope:
        "Manages treasury accounts, oversees project funding allocations, financial auditing, and ensures fiscal accountability to Lions District 306 D10.",
      email: "treasurer.uwuleos@gmail.com",
      initials: "CT",
      color: "emerald",
      image: "",
    },
    {
      id: "exco-asst-sec",
      roleBadge: "EXECUTIVE COUNCIL",
      designation: "Assistant Secretary",
      name: "Leo Assistant Secretary",
      faculty: "Faculty of Animal Science & Export Agriculture",
      scope:
        "Maintains official membership rolls, secretarial dispatch logistics, meeting attendance verification, and circular distribution.",
      email: "asst.secretary.uwuleos@gmail.com",
      initials: "AS",
      color: "amber",
      image: "",
    },
  ],
  directors: [
    {
      id: "dir-1",
      portfolio: "Community Services & Relief",
      name: "Director of Community Services",
      faculty: "Faculty of Applied Sciences",
      scope:
        "Coordinates rural welfare missions, humanitarian relief distribution in Passara and Badulla, and emergency community support.",
      email: "community.uwuleos@gmail.com",
      initials: "DCS",
      category: "Service & Welfare",
      color: "rose",
      icon: "HeartHandshake",
      image: "",
    },
    {
      id: "dir-2",
      portfolio: "Project Sipnana & STEM",
      name: "Director of Education & STEM",
      faculty: "Faculty of Science & Technology",
      scope:
        "Directs Project Sipnana, rural school book distribution campaigns, science laboratory workshops, and youth scholarship initiatives.",
      email: "sipnana.uwuleos@gmail.com",
      initials: "DES",
      category: "Youth & Education",
      color: "blue",
      icon: "BookOpen",
      image: "",
    },
    {
      id: "dir-3",
      portfolio: "Green Uva & Environment",
      name: "Director of Environmental Conservation",
      faculty: "Faculty of Animal Science & Export Agriculture",
      scope:
        "Oversees Central Highlands reforestation, eco-trail cleanups across Ella/Dunhinda, and campus sustainability drives.",
      email: "environment.uwuleos@gmail.com",
      initials: "DEV",
      category: "Sustainability",
      color: "emerald",
      icon: "Trees",
      image: "",
    },
    {
      id: "dir-4",
      portfolio: "Healthcare & Blood Aid",
      name: "Director of Health & Wellbeing",
      faculty: "Faculty of Applied Sciences",
      scope:
        "Leads the Annual Mega Blood Donation campaign with Badulla Teaching Hospital, health screening clinics, and first-aid workshops.",
      email: "health.uwuleos@gmail.com",
      initials: "DHW",
      category: "Public Health",
      color: "red",
      icon: "Activity",
      image: "",
    },
    {
      id: "dir-5",
      portfolio: "PR, Branding & Media",
      name: "Director of Public Relations",
      faculty: "Faculty of Management",
      scope:
        "Stewards official press circulars, graphic design, social media storytelling, and publishes the annual ROAR magazine.",
      email: "pr.uwuleos@gmail.com",
      initials: "DPR",
      category: "Media & Comms",
      color: "indigo",
      icon: "Megaphone",
      image: "",
    },
    {
      id: "dir-6",
      portfolio: "Information Technology & Web",
      name: "Director of Information Technology",
      faculty: "Faculty of Science & Technology",
      scope:
        "Engineers and maintains the official UWU Leos digital platforms, event registration portals, and digital archive systems.",
      email: "it.uwuleos@gmail.com",
      initials: "DIT",
      category: "Digital & Systems",
      color: "cyan",
      icon: "Laptop",
      image: "",
    },
    {
      id: "dir-7",
      portfolio: "Member Development & Training",
      name: "Director of Member Development",
      faculty: "Faculty of Applied Sciences",
      scope:
        "Directs new member orientation, undergraduate leadership bootcamps, public speaking clinics, and district reporting standards.",
      email: "membership.uwuleos@gmail.com",
      initials: "DMD",
      category: "Leadership & Training",
      color: "purple",
      icon: "Users",
      image: "",
    },
    {
      id: "dir-8",
      portfolio: "Sports, Fellowship & Culture",
      name: "Director of Sports & Fellowship",
      faculty: "Faculty of Management",
      scope:
        "Coordinates undergraduate fellowship excursions, inter-faculty sports tournaments, cultural celebrations, and twinning galas.",
      email: "fellowship.uwuleos@gmail.com",
      initials: "DSF",
      category: "Fellowship & Unity",
      color: "amber",
      icon: "Sparkles",
      image: "",
    },
  ],
  governance: {
    title: "Official Governance Hierarchy & Lion Mentorship",
    description:
      "Operating under the charter of Lions Clubs International and the guidance of the Lions Club of Badulla, our leadership hierarchy enforces transparency, student-led accountability, and strict adherence to the LCI Standard Form Leo Club Constitution.",
    badges: [
      { label: "Charter Year", value: "2018" },
      { label: "District Code", value: "306 D10" },
      { label: "Lions Parent", value: "Lions Club of Badulla" },
      { label: "Campus Base", value: "Uva Wellassa University" },
    ],
  },
};

export const INITIAL_ANNOUNCEMENTS = [
  {
    id: "ann-1",
    title: "Official Call for Project Sipnana Phase III Volunteers",
    category: "Youth & STEM",
    priority: "urgent" as const,
    date: "Dec 12, 2024",
    summary:
      "Registration is open for undergraduates to participate in rural educational aid delivery across Passara secondary schools.",
    linkUrl: "https://forms.gle/sample-link",
    scope: "All UWU Undergraduates",
  },
  {
    id: "ann-2",
    title: "Executive Board Monthly Review Assembly (January 2025)",
    category: "Administration",
    priority: "high" as const,
    date: "Jan 05, 2025",
    summary:
      "Quarterly review of project directorates, financial audit reports, and Multiple District 306 conference delegations.",
    scope: "Executive Board & Directors",
  },
  {
    id: "ann-3",
    title: "Central Highlands Tree Planting Phase II Scheduling",
    category: "Environment",
    priority: "normal" as const,
    date: "Jan 18, 2025",
    summary:
      "Partnering with the Forest Conservation Department for planting 1,000 indigenous saplings along the Namunukula ridge.",
    scope: "Public & Leo Members",
  },
];

export const INITIAL_EVENTS = [
  {
    id: "ev-1",
    title: "UWU Leos Annual Leadership Training & Induction 2025",
    date: "March 28, 2025",
    day: "28",
    month: "MAR",
    time: "03:30 PM - 06:30 PM",
    venue: "Management Auditorium, UWU Campus, Badulla",
    category: "Leadership",
    description:
      "Induction of prospective undergraduate members, executive leadership training, and team-building workshops.",
  },
  {
    id: "ev-2",
    title: "Project Sipnana Phase II – Monaragala School Upliftment",
    date: "April 19, 2025",
    day: "19",
    month: "APR",
    time: "08:00 AM - 04:00 PM",
    venue: "Monaragala Rural Primary School",
    category: "Community",
    description:
      "Delivering essential school stationery, conducting interactive creative workshops, and renovating library facilities for rural students.",
  },
  {
    id: "ev-3",
    title: "Uva Youth Clean-Up & Environmental Trek",
    date: "May 10, 2025",
    day: "10",
    month: "MAY",
    time: "07:00 AM - 02:00 PM",
    venue: "Ella & Dunhinda Conservation Area",
    category: "Environment",
    description:
      "Promoting eco-tourism, removing plastic waste from natural catchment areas, and installing trail conservation signage.",
  },
  {
    id: "ev-4",
    title: "Leo District 306 D10 Mid-Year Youth Summit",
    date: "June 14, 2025",
    day: "14",
    month: "JUN",
    time: "09:00 AM - 05:00 PM",
    venue: "Provincial Council Auditorium, Badulla",
    category: "Leadership",
    description:
      "Regional youth leadership congress connecting undergraduates with provincial changemakers and community leaders.",
  },
  {
    id: "ev-5",
    title: "Annual Leistic Installation & Fellowship Gala",
    date: "July 26, 2025",
    day: "26",
    month: "JUL",
    time: "04:30 PM - 09:30 PM",
    venue: "Heritage Grand Ballroom, Bandarawela",
    category: "Fellowship",
    description:
      "Official installation ceremony of the incoming Executive Board and recognition of outstanding undergraduate project leaders.",
  },
];

export const INITIAL_GALLERY_PHOTOS = [
  {
    id: "gal-1",
    category: "community",
    title: "Youth Mangrove Planting & Coastal Conservation",
    url: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=1000&q=80",
    date: "October 2024",
  },
  {
    id: "gal-2",
    category: "fellowship",
    title: "Multiple District Annual Youth Leadership Gala",
    url: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=1000&q=80",
    date: "November 2024",
  },
  {
    id: "gal-3",
    category: "community",
    title: "Sight For Youth School Screening Camp",
    url: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1000&q=80",
    date: "December 2024",
  },
  {
    id: "gal-4",
    category: "ceremonies",
    title: "16th Annual Installation of Executive Officers",
    url: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1000&q=80",
    date: "July 2024",
  },
  {
    id: "gal-5",
    category: "community",
    title: "Suwa Diviya Community Kitchens & Food Ration Drive",
    url: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=1000&q=80",
    date: "September 2024",
  },
  {
    id: "gal-6",
    category: "fellowship",
    title: "Inter-District Youth Sports & Leadership Camp",
    url: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=1000&q=80",
    date: "August 2024",
  },
];

export const INITIAL_IMPACT_STATS = {
  id: "main_stats",
  stat1: { value: "1", label: "University Club" },
  stat2: { value: "150+", label: "Active Undergrads" },
  stat3: { value: "6,500+", label: "Volunteer Hours" },
  stat4: { value: "60+", label: "Signature Projects" },
  description:
    "Where the Leo Club of Uva Wellassa University stands today in our mission of service and youth empowerment.",
};

// ==============================================================================
// FIRESTORE CRUD & REAL-TIME HELPERS
// ==============================================================================

/**
 * Fetch all documents from a Firestore collection with fallback to initial static data
 */
export async function getFirestoreCollection<T extends { id: string }>(
  collectionName: string,
  fallbackData: T[] = []
): Promise<T[]> {
  if (!isFirebaseConfigured() || !db) {
    return fallbackData;
  }

  try {
    const colRef = collection(db, collectionName);
    const snap = await getDocs(colRef);
    if (snap.empty) {
      return fallbackData;
    }

    const items: T[] = [];
    snap.forEach((docSnap) => {
      const data = docSnap.data() as T;
      items.push({ ...data, id: docSnap.id });
    });

    return items;
  } catch (err) {
    console.warn(`Firestore read failed for collection "${collectionName}":`, err);
    return fallbackData;
  }
}

/**
 * Fetch a single document from a Firestore collection
 */
export async function getFirestoreDoc<T>(
  collectionName: string,
  docId: string,
  fallbackData: T
): Promise<T> {
  if (!isFirebaseConfigured() || !db) {
    return fallbackData;
  }

  try {
    const docRef = doc(db, collectionName, docId);
    const snap = await getDoc(docRef);
    if (!snap.exists()) {
      return fallbackData;
    }
    return { ...snap.data(), id: snap.id } as T;
  } catch (err) {
    console.warn(`Firestore read failed for document ${collectionName}/${docId}:`, err);
    return fallbackData;
  }
}

/**
 * Subscribe to real-time updates on a Firestore collection
 */
export function subscribeFirestoreCollection<T extends { id: string }>(
  collectionName: string,
  fallbackData: T[] = [],
  callback: (items: T[]) => void
): Unsubscribe | (() => void) {
  if (!isFirebaseConfigured() || !db) {
    callback(fallbackData);
    return () => {};
  }

  try {
    const colRef = collection(db, collectionName);
    return onSnapshot(
      colRef,
      (snap) => {
        if (snap.empty) {
          callback(fallbackData);
          return;
        }
        const items: T[] = [];
        snap.forEach((docSnap) => {
          const data = docSnap.data() as T;
          items.push({ ...data, id: docSnap.id });
        });
        callback(items);
      },
      (err) => {
        console.warn(`Firestore real-time subscription error for ${collectionName}:`, err);
        callback(fallbackData);
      }
    );
  } catch (err) {
    console.warn(`Failed to initialize Firestore listener for ${collectionName}:`, err);
    callback(fallbackData);
    return () => {};
  }
}

/**
 * Save or update a document in a Firestore collection
 */
export async function saveFirestoreDoc(
  collectionName: string,
  docId: string,
  data: Record<string, any>
): Promise<boolean> {
  if (!isFirebaseConfigured() || !db) {
    return false;
  }

  try {
    const docRef = doc(db, collectionName, docId);
    await setDoc(docRef, { ...data, updatedAt: serverTimestamp() }, { merge: true });
    return true;
  } catch (err) {
    console.error(`Firestore save failed for ${collectionName}/${docId}:`, err);
    return false;
  }
}

/**
 * Delete a document from Firestore
 */
export async function deleteFirestoreDoc(
  collectionName: string,
  docId: string
): Promise<boolean> {
  if (!isFirebaseConfigured() || !db) {
    return false;
  }

  try {
    const docRef = doc(db, collectionName, docId);
    await deleteDoc(docRef);
    return true;
  } catch (err) {
    console.error(`Firestore delete failed for ${collectionName}/${docId}:`, err);
    return false;
  }
}

/**
 * Seed initial datasets into Firestore with 1 click
 */
export async function seedFirestoreData(): Promise<{
  success: boolean;
  seededCount: number;
  message: string;
}> {
  if (!isFirebaseConfigured() || !db) {
    return {
      success: false,
      seededCount: 0,
      message: "Firebase credentials are not configured in environment variables.",
    };
  }

  try {
    let count = 0;

    // 1. Projects
    for (const proj of INITIAL_PROJECTS) {
      await saveFirestoreDoc("projects", proj.id, proj);
      count++;
    }

    // 2. Magazines
    for (const mag of INITIAL_MAGAZINES) {
      await saveFirestoreDoc("magazines", mag.id, mag);
      count++;
    }

    // 3. Documents
    for (const docItem of INITIAL_DOCUMENTS) {
      await saveFirestoreDoc("documents", docItem.id, docItem);
      count++;
    }

    // 4. Announcements
    for (const ann of INITIAL_ANNOUNCEMENTS) {
      await saveFirestoreDoc("announcements", ann.id, ann);
      count++;
    }

    // 5. Events
    for (const ev of INITIAL_EVENTS) {
      await saveFirestoreDoc("events", ev.id, ev);
      count++;
    }

    // 6. Gallery
    for (const gal of INITIAL_GALLERY_PHOTOS) {
      await saveFirestoreDoc("gallery", gal.id, gal);
      count++;
    }

    // 7. Leadership
    await saveFirestoreDoc("leadership", "current", INITIAL_LEADERSHIP);
    count++;

    // 8. Impact Stats
    await saveFirestoreDoc("settings", "impact_stats", INITIAL_IMPACT_STATS);
    count++;

    return {
      success: true,
      seededCount: count,
      message: `Successfully seeded ${count} documents across Projects, Magazines, Documents, Events, Gallery, Leadership, and Stats into Firestore!`,
    };
  } catch (err: any) {
    console.error("Firestore seeding failed:", err);
    return {
      success: false,
      seededCount: 0,
      message: `Seeding error: ${err?.message || "Unknown error"}`,
    };
  }
}

/**
 * Save a new student membership applicant to Firestore
 */
export async function submitMembershipApplicant(applicantData: {
  name: string;
  regNo: string;
  faculty: string;
  academicYear: string;
  email: string;
  phone: string;
  interests: string;
}): Promise<{ success: boolean; id?: string }> {
  if (!isFirebaseConfigured() || !db) {
    return { success: false };
  }

  try {
    const colRef = collection(db, "membership_applicants");
    const docRef = await addDoc(colRef, {
      ...applicantData,
      status: "pending",
      appliedDate: new Date().toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
      }),
      createdAt: serverTimestamp(),
    });
    return { success: true, id: docRef.id };
  } catch (err) {
    console.error("Failed to submit applicant to Firestore:", err);
    return { success: false };
  }
}

/**
 * Submit contact message to Firestore
 */
export async function submitContactForm(messageData: {
  name: string;
  email: string;
  subject: string;
  message: string;
}): Promise<{ success: boolean }> {
  if (!isFirebaseConfigured() || !db) {
    return { success: false };
  }

  try {
    const colRef = collection(db, "contact_inquiries");
    await addDoc(colRef, {
      ...messageData,
      status: "unread",
      timestamp: serverTimestamp(),
      receivedDate: new Date().toISOString(),
    });
    return { success: true };
  } catch (err) {
    console.error("Failed to submit contact message to Firestore:", err);
    return { success: false };
  }
}
