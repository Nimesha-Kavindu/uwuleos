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
  leisticYear: "2026/2027",
  district: "Leo District 306 D10",
  sponsoringClub: "Lions Club of Uva Capital",
  charterSince: "2022",
  photosDriveUrl: "https://drive.google.com/drive/folders/1BapXO32FyR8vGl3pGjfhtKtJTeGF5wh7",
  stats: [
    { label: "Advisory Mentors", value: "03", desc: "Academic & Lions Governance" },
    { label: "Executive Officers", value: "11", desc: "Top Table Management" },
    { label: "Portfolio Directors", value: "08", desc: "Community & Campus Impact" },
    { label: "Assistants & Project Officers", value: "10", desc: "Operations & Logistics" },
    { label: "Creative & Media Crew", value: "06", desc: "Design & Publications" },
  ],
  advisoryCouncil: [
    {
      id: "adv-1",
      category: "Academic Mentorship",
      roleBadge: "UWU FACULTY MENTOR",
      title: "University Staff Advisor",
      name: "Senior Professor Saman K. Herath",
      designation: "Senior Professor & University Staff Advisor",
      institution: "Uva Wellassa University of Sri Lanka",
      scope:
        "Provides overarching strategic counsel on university policy adherence, academic faculty liaison, student development ethics, and campus governance integration.",
      email: "staff.advisor@uwu.ac.lk",
      initials: "SH",
      image: "",
    },
    {
      id: "adv-2",
      category: "Academic Mentorship",
      roleBadge: "UWU FACULTY MENTOR",
      title: "University Staff Advisor",
      name: "Prof. K.G.O. Senarathna",
      designation: "Professor & University Staff Advisor",
      institution: "Uva Wellassa University of Sri Lanka",
      scope:
        "Guides undergraduate research alignment, university administrative liaison, and service-learning project frameworks.",
      email: "advisor.senarathna@uwu.ac.lk",
      initials: "KS",
      image: "",
    },
    {
      id: "adv-3",
      category: "LCI District Governance",
      roleBadge: "LIONS DISTRICT ADVISOR",
      title: "Leo Club Advisor (Guiding Lion)",
      name: "Lion Shiraz Khan MAF",
      designation: "Guiding Lion & District Officer",
      institution: "Lions Club of Uva Capital • Leo District 306 D10",
      scope:
        "Ensures adherence to the Lions Clubs International Constitution, mentors club officers on youth leadership stewardship, and coordinates district funding pipelines.",
      email: "shiraz.khan@lions306d10.org",
      initials: "SK",
      image: "",
    },
  ],
  president: {
    id: "exco-pres",
    roleBadge: "CLUB PRESIDENT & CEO",
    designation: "Club President",
    name: "Leo Duvidu Bandara",
    faculty: "Faculty of Applied Sciences",
    institution: "Uva Wellassa University",
    term: "Leistic Year 2026/2027",
    responsibilities:
      "Presides over all executive and general assemblies, directs overall strategic vision, represents UWU Leos at District 306 D10 conventions, and stewards inter-faculty service initiatives.",
    email: "president.uwuleos@gmail.com",
    motto: "“Leading with passion, serving with purpose for Uva Wellassa and beyond.”",
    initials: "DB",
    image: "/Leo Board 26-27/President/df2aa047-ca6c-45ec-928d-769430b9d241.jpg",
  },
  ipp: {
    id: "exco-ipp",
    roleBadge: "IMMEDIATE PAST PRESIDENT",
    designation: "Immediate Past President (IPP)",
    name: "Leo Deshan Thilakarathna",
    faculty: "Faculty of Management",
    scope:
      "Advises the current executive board, ensures continuity of flagship initiatives, and mentors incoming cabinet officers.",
    email: "ipp.uwuleos@gmail.com",
    initials: "DT",
    image: "/Leo Board 26-27/Immediate Past President/Deshan Thilakarathna_.jpg",
  },
  excoOfficers: [
    {
      id: "exco-vp1",
      roleBadge: "TOP TABLE OFFICER",
      designation: "1st Vice President",
      name: "Leo Lasitha Rajapaksha",
      faculty: "Faculty of Management",
      scope:
        "Directs project directorate coordination, supervises internal operational logistics, and represents the president in executive assemblies.",
      email: "vp1.uwuleos@gmail.com",
      initials: "LR",
      color: "cyan",
      image: "/Leo Board 26-27/1 st Vice President/Lasitha Rajapaksha.jpg",
    },
    {
      id: "exco-vp2",
      roleBadge: "TOP TABLE OFFICER",
      designation: "2nd Vice President",
      name: "Leo Amaya Nethmini",
      faculty: "Faculty of Science & Technology",
      scope:
        "Assists with portfolio administration, membership engagement programs, and inter-club collaborative projects.",
      email: "vp2.uwuleos@gmail.com",
      initials: "AN",
      color: "blue",
      image: "/Leo Board 26-27/2nd Vice President/Amaya Nethmini.jpg",
    },
    {
      id: "exco-sec",
      roleBadge: "TOP TABLE OFFICER",
      designation: "Club Secretary",
      name: "Leo Kaveetha Meewalaarachchi",
      faculty: "Faculty of Science & Technology",
      scope:
        "Stewards official records, meeting minutes, monthly district activity reporting via Lion Portal / MyLCI, and inter-club correspondence.",
      email: "secretary.uwuleos@gmail.com",
      initials: "KM",
      color: "blue",
      image: "",
    },
    {
      id: "exco-tre",
      roleBadge: "TOP TABLE OFFICER",
      designation: "Club Treasurer",
      name: "Leo Shehara Bandarathilaka",
      faculty: "Faculty of Management",
      scope:
        "Manages treasury accounts, oversees project funding allocations, financial auditing, and ensures fiscal accountability to Lions District 306 D10.",
      email: "treasurer.uwuleos@gmail.com",
      initials: "SB",
      color: "emerald",
      image: "/Leo Board 26-27/Treasure/Shehara Bandarathilaka_.png",
    },
    {
      id: "exco-asst-sec-1",
      roleBadge: "EXECUTIVE COUNCIL",
      designation: "Assistant Secretary",
      name: "Leo Emalshi Chathubashini",
      faculty: "Faculty of Animal Science & Export Agriculture",
      scope:
        "Maintains official membership rolls, secretarial dispatch logistics, and meeting attendance verification.",
      email: "asst.sec1.uwuleos@gmail.com",
      initials: "EC",
      color: "amber",
      image: "/Leo Board 26-27/Assistant Secretary/Emalshi Chathubashini_.jpg",
    },
    {
      id: "exco-asst-sec-2",
      roleBadge: "EXECUTIVE COUNCIL",
      designation: "Assistant Secretary",
      name: "Leo Dewmini Sachinthika",
      faculty: "Faculty of Applied Sciences",
      scope:
        "Assists in secretarial documentation, circular distribution, and district dispatch filing.",
      email: "asst.sec2.uwuleos@gmail.com",
      initials: "DS",
      color: "amber",
      image: "/Leo Board 26-27/Assistant Secretary/772522771_1645573247568702_5879711890159380531_n.jpg",
    },
    {
      id: "exco-asst-tre",
      roleBadge: "EXECUTIVE COUNCIL",
      designation: "Assistant Treasurer",
      name: "Leo Thaveesha Laknindu",
      faculty: "Faculty of Management",
      scope:
        "Assists in financial bookkeeping, project budget tracking, receipts verification, and treasury records.",
      email: "asst.treasurer.uwuleos@gmail.com",
      initials: "TL",
      color: "emerald",
      image: "",
    },
    {
      id: "exco-coord",
      roleBadge: "EXECUTIVE COUNCIL",
      designation: "Chief Coordinator",
      name: "Leo Dasun Sankalpa",
      faculty: "Faculty of Science & Technology",
      scope:
        "Coordinates cross-portfolio logistics, venue management, inter-faculty communications, and assembly operations.",
      email: "coordinator.uwuleos@gmail.com",
      initials: "DS",
      color: "indigo",
      image: "/Leo Board 26-27/Chief Coordinator/772376168_1645574540901906_6380901330463408379_n.jpg",
    },
    {
      id: "exco-chief-editor",
      roleBadge: "EXECUTIVE COUNCIL",
      designation: "Chief Editor",
      name: "Leo Sachitha Rasanjana",
      faculty: "Faculty of Management",
      scope:
        "Directs club publications, press releases, editorial articles, and the official Leistic annual magazine.",
      email: "editor.uwuleos@gmail.com",
      initials: "SR",
      color: "purple",
      image: "/Leo Board 26-27/Chief editor/Sachitha rasanjana_.jpg",
    },
    {
      id: "exco-chief-designer",
      roleBadge: "EXECUTIVE COUNCIL",
      designation: "Chief Designer",
      name: "Leo Malindu Kaushal",
      faculty: "Faculty of Technological Studies",
      scope:
        "Leads visual branding, official digital artwork, event promotional campaigns, and brand guideline compliance.",
      email: "designer.uwuleos@gmail.com",
      initials: "MK",
      color: "rose",
      image: "",
    },
  ],
  directors: [
    {
      id: "dir-1",
      portfolio: "Director in Club Relationship",
      name: "Leo Anjana Jayasinghe",
      faculty: "Faculty of Applied Sciences",
      scope:
        "Strengthens fellowship with sister Leo clubs, twin club partnerships, and District 306 D10 inter-club relations.",
      email: "clubrelations.uwuleos@gmail.com",
      initials: "AJ",
      category: "External Relations",
      color: "blue",
      icon: "Users",
      image: "/Leo Board 26-27/Director in club relationship/Anjana Jayasinghe .JPG",
    },
    {
      id: "dir-2",
      portfolio: "Director in PR & Publicity",
      name: "Leo Geethal Prasad",
      faculty: "Faculty of Management",
      scope:
        "Directs digital media campaigns, public communications, social media storytelling, and press coverage for club projects.",
      email: "pr.uwuleos@gmail.com",
      initials: "GP",
      category: "Media & Comms",
      color: "indigo",
      icon: "Megaphone",
      image: "/Leo Board 26-27/Director in PR & Publicity/Geethal Prasad.jpg",
    },
    {
      id: "dir-3",
      portfolio: "Director of Fundraising",
      name: "Leo Sajini Hettiarachchi",
      faculty: "Faculty of Management",
      scope:
        "Leads project funding campaigns including the Linda Project, corporate sponsorships, and sustainable revenue initiatives.",
      email: "fundraising.uwuleos@gmail.com",
      initials: "SH",
      category: "Finance & Growth",
      color: "amber",
      icon: "TrendingUp",
      image: "/Leo Board 26-27/Director of Fundraising/Sajini Hettiarachchi_.jpg",
    },
    {
      id: "dir-4",
      portfolio: "Director in Youth Empowerment & Education",
      name: "Leo K. Kawya Manushi",
      faculty: "Faculty of Science & Technology",
      scope:
        "Drives Project Eduspark continuous O/L seminar series, rural student mentoring, and youth skill-building workshops.",
      email: "education.uwuleos@gmail.com",
      initials: "KM",
      category: "Youth & Education",
      color: "cyan",
      icon: "BookOpen",
      image: "/Leo Board 26-27/Director in Youth Empowerment and Education/K.Kawya Manushi_.jpg",
    },
    {
      id: "dir-5",
      portfolio: "Director in Environment & Sustainable Development",
      name: "Leo Osadee Abeysekara",
      faculty: "Faculty of Animal Science & Export Agriculture",
      scope:
        "Heads Haritha Hetak environmental campaign, tree planting, catchment area restoration, and eco-sustainability drives.",
      email: "environment.uwuleos@gmail.com",
      initials: "OA",
      category: "Sustainability",
      color: "emerald",
      icon: "Trees",
      image: "/Leo Board 26-27/Director in environment and sustainable development/Osadee Abeysekara ( B.A.O.W.S Abeysekara ).jpg",
    },
    {
      id: "dir-6",
      portfolio: "Director in Health & Humanitarian Care",
      name: "Leo Ishani Ruwanthika",
      faculty: "Faculty of Applied Sciences",
      scope:
        "Coordinates annual mega blood donations, health awareness clinics, humanitarian relief drives, and emergency aid.",
      email: "health.uwuleos@gmail.com",
      initials: "IR",
      category: "Public Health",
      color: "rose",
      icon: "Activity",
      image: "/Leo Board 26-27/Director in Health and Humanitarian Care/Ishani Ruwanthika_.jpg",
    },
    {
      id: "dir-7",
      portfolio: "Director in Membership",
      name: "Leo Deshika Lakshani Karunarathne",
      faculty: "Faculty of Management",
      scope:
        "Manages undergraduate membership drives, new member orientations, engagement tracking, and leadership mentoring.",
      email: "membership.uwuleos@gmail.com",
      initials: "DK",
      category: "Member Growth",
      color: "purple",
      icon: "UserCheck",
      image: "/Leo Board 26-27/Director in membership/Deshika Lakshani Karunarathne_.jpg",
    },
    {
      id: "dir-8",
      portfolio: "Director in Social Welfare & Cultural Affairs",
      name: "Leo Director — Social Welfare",
      faculty: "Faculty of Applied Sciences",
      scope:
        "Coordinates welfare visits, cultural celebrations, Ashirwada Pooja, and community harmony programs across Uva province.",
      email: "welfare.uwuleos@gmail.com",
      initials: "SW",
      category: "Community Welfare",
      color: "amber",
      icon: "HeartHandshake",
      image: "",
    },
  ],
  assistantDirectors: [
    {
      id: "asst-dir-1",
      portfolio: "Club Relationship",
      designation: "Assistant Director in Club Relationship",
      name: "Leo Paramasivam Yasodhani",
      faculty: "Faculty of Applied Sciences",
      scope: "Assists with inter-club correspondence and regional fellowship events.",
      email: "asst.clubrel@uwuleos.org",
      initials: "PY",
      image: "/Leo Board 26-27/Assistant director in Club relationship/Paramasivam Yasodhani.png",
    },
    {
      id: "asst-dir-2",
      portfolio: "Fundraising",
      designation: "Assistant Director in Fundraising",
      name: "Leo Kasun Harshana",
      faculty: "Faculty of Management",
      scope: "Supports fundraising drives, sponsorship outreach, and event merchandise.",
      email: "asst.fundraising1@uwuleos.org",
      initials: "KH",
      image: "/Leo Board 26-27/Assistant director in fundraising/Kasun Harshana .jpg",
    },
    {
      id: "asst-dir-3",
      portfolio: "Fundraising",
      designation: "Assistant Director in Fundraising",
      name: "Leo Sajani Nanayakkara",
      faculty: "Faculty of Management",
      scope: "Co-leads the Linda Project campaign and sponsor relationship management.",
      email: "asst.fundraising2@uwuleos.org",
      initials: "SN",
      image: "/Leo Board 26-27/Assistant director in fundraising/Sajani Nanayakkara.jpg",
    },
    {
      id: "asst-dir-4",
      portfolio: "Health & Humanitarian Care",
      designation: "Assistant Director in Health Care",
      name: "Leo Vihanga Kavindi",
      faculty: "Faculty of Applied Sciences",
      scope: "Assists with blood donation logistics, health clinics, and volunteer scheduling.",
      email: "asst.health@uwuleos.org",
      initials: "VK",
      image: "/Leo Board 26-27/Assistant director in health and humanitarian care/Vihanga Kavindi.jpg",
    },
    {
      id: "asst-dir-5",
      portfolio: "Membership",
      designation: "Assistant Director in Membership",
      name: "Leo Oshindee Nethra",
      faculty: "Faculty of Science & Technology",
      scope: "Supports member induction programs, attendance records, and member engagement.",
      email: "asst.membership@uwuleos.org",
      initials: "ON",
      image: "/Leo Board 26-27/Assistant director in Membership/Oshindee Nethra_.png",
    },
    {
      id: "asst-dir-6",
      portfolio: "Environment & Sustainable Development",
      designation: "Assistant Director in Environment",
      name: "Leo Shanika Sewwandi",
      faculty: "Faculty of Animal Science & Export Agriculture",
      scope: "Assists with sapling sourcing, tree planting fieldwork, and green audits.",
      email: "asst.environment@uwuleos.org",
      initials: "SS",
      image: "/Leo Board 26-27/Assistant Director in environment and sustainable development/Shanika Sewwandi.jpg",
    },
    {
      id: "proj-sec-1",
      portfolio: "Project Secretariat",
      designation: "Project Secretary",
      name: "Leo Dulshi Yasara",
      faculty: "Faculty of Applied Sciences",
      scope: "Maintains project minutes, progress records, and district documentation.",
      email: "proj.sec1@uwuleos.org",
      initials: "DY",
      image: "/Leo Board 26-27/Project Secretaries/Dulshi yasara.png",
    },
    {
      id: "proj-sec-2",
      portfolio: "Project Secretariat",
      designation: "Project Secretary",
      name: "Leo Project Secretary",
      faculty: "Faculty of Science & Technology",
      scope: "Assists project directors with secretarial logs, notices, and completion reports.",
      email: "proj.sec2@uwuleos.org",
      initials: "PS",
      image: "/Leo Board 26-27/Project Secretaries/IMG_1786585674322.jpg",
    },
    {
      id: "proj-tre-1",
      portfolio: "Project Treasury",
      designation: "Project Treasurer",
      name: "Leo L. Dehemi Parindi Silva",
      faculty: "Faculty of Management",
      scope: "Manages project-specific ledgers, expenditure vouchers, and financial settlements.",
      email: "proj.treasurer1@uwuleos.org",
      initials: "DS",
      image: "/Leo Board 26-27/Project Treasurer/L.Dehemi Parindi Silva.jpg",
    },
    {
      id: "proj-tre-2",
      portfolio: "Project Treasury",
      designation: "Project Treasurer",
      name: "Leo Vishwa Rupasinghe",
      faculty: "Faculty of Management",
      scope: "Assists with fundraising financial auditing, ticketing, and event accounting.",
      email: "proj.treasurer2@uwuleos.org",
      initials: "VR",
      image: "/Leo Board 26-27/Project Treasurer/Vishwa Rupasinghe.jpg",
    },
  ],
  creativeCrew: [
    {
      id: "crew-content-ed",
      portfolio: "Editorial Wing",
      designation: "Content Editor",
      name: "Leo Sethuni Wijewardhana",
      faculty: "Faculty of Applied Sciences",
      scope: "Crafts creative articles, project reflections, and English editorial publications.",
      email: "content.editor@uwuleos.org",
      initials: "SW",
      image: "/Leo Board 26-27/Content Editor/Sethuni Wijewardhana .jpg",
    },
    {
      id: "crew-asst-ed",
      portfolio: "Editorial Wing",
      designation: "Assistant Editor",
      name: "Leo Maheesha Sarasi",
      faculty: "Faculty of Management",
      scope: "Assists with newsletter proofreading, bilingual translations, and media scripts.",
      email: "asst.editor@uwuleos.org",
      initials: "MS",
      image: "/Leo Board 26-27/Assistant Editor/Maheesha Sarasi.jpg",
    },
    {
      id: "crew-editorial-mem",
      portfolio: "Editorial Wing",
      designation: "Editorial Crew Member",
      name: "Leo Editorial Crew Member",
      faculty: "Faculty of Science & Technology",
      scope: "Contributes articles, interviews, and photography reporting for the editorial board.",
      email: "editorial.crew@uwuleos.org",
      initials: "EC",
      image: "/Leo Board 26-27/Editorial Crew members/FB_IMG_1789220139760.jpg",
    },
    {
      id: "crew-asst-designer",
      portfolio: "Design Wing",
      designation: "Assistant Designer",
      name: "Leo Assistant Designer",
      faculty: "Faculty of Technological Studies",
      scope: "Creates promotional banners, digital flyers, and social media creative assets.",
      email: "asst.designer@uwuleos.org",
      initials: "AD",
      image: "/Leo Board 26-27/Assistant Designer/WhatsApp Image 2026-09-01 at 16.37.00.jpeg",
    },
    {
      id: "crew-design-1",
      portfolio: "Design Wing",
      designation: "Design Crew Member",
      name: "Leo Kavindu Deshan",
      faculty: "Faculty of Technological Studies",
      scope: "Digital artwork creation, UI graphics, brand design, and web illustrations.",
      email: "kavindu.design@uwuleos.org",
      initials: "KD",
      image: "/Leo Board 26-27/Design crew member/Kavindu Deshan.jpg",
    },
    {
      id: "crew-design-2",
      portfolio: "Design Wing",
      designation: "Design Crew Member",
      name: "Leo Sayuri De Silva",
      faculty: "Faculty of Applied Sciences",
      scope: "Event branding assets, certificates design, and social media visuals.",
      email: "sayuri.design@uwuleos.org",
      initials: "SD",
      image: "/Leo Board 26-27/Design crew member/Sayuri De Silva.jpg",
    },
  ],
  signatureProjects: [
    {
      id: "sig-proj-1",
      title: "Project Eduspark",
      subtitle: "Continuous Educational Project",
      scope: "Comprehensive educational seminar series for G.C.E. O/L students across rural schools in Uva Province.",
      category: "Education & Youth Empowerment",
      tag: "Continuous",
    },
    {
      id: "sig-proj-2",
      title: "Linda Fundraising Project",
      subtitle: "Club Sustainable Financing",
      scope: "Flagship fundraising initiative mobilizing community and university support for welfare projects.",
      category: "Fundraising & Finance",
      tag: "Fundraiser",
    },
    {
      id: "sig-proj-3",
      title: "Haritha Hetak Project",
      subtitle: "Green Tomorrow Sustainability",
      scope: "Large-scale reforestation, eco-awareness, and environmental conservation drive.",
      category: "Environment & Sustainability",
      tag: "Eco Drive",
    },
  ],
  milestoneEvents: [
    {
      id: "event-ashirwada",
      title: "Ashirwada Pooja",
      date: "July 04, 2026",
      venue: "Campus Temple & Sacred Grounds",
      desc: "Spiritual blessing ceremony inaugurating the 2026/2027 Leistic Year leadership journey.",
    },
    {
      id: "event-photoshoot",
      title: "Official Photoshoot 2026/27",
      date: "July 11, 2026",
      venue: "UWU Campus, Badulla",
      desc: "Official executive board and portfolio portrait session for district registries and publications.",
    },
    {
      id: "event-leos-night",
      title: "Leos Night 2026",
      date: "August 02, 2026",
      venue: "Grand Ballroom, Badulla",
      desc: "Grand fellowship evening uniting Leos, Lions mentors, and university delegates.",
    },
  ],
  governance: {
    title: "Official Governance Hierarchy & Lion Mentorship",
    description:
      "Operating under the charter of Lions Clubs International and the mentorship of the Lions Club of Uva Capital (District 306 D10), our leadership hierarchy enforces transparency, undergraduate-led accountability, and strict adherence to the LCI Leo Club Constitution.",
    badges: [
      { label: "Charter / Since", value: "2022" },
      { label: "District Code", value: "District 306 D10" },
      { label: "Sponsoring Parent", value: "Lions Club of Uva Capital" },
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

export const INITIAL_HERO_SLIDES = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=85",
    tag: "UVA WELLASSA UNIVERSITY",
    title: "Undergraduates Leading Through Service",
    subtitle: "Fostering leadership, fellowship, and social responsibility",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=1200&q=85",
    tag: "PROJECT SIPNANA",
    title: "Rural School Upliftment in Uva",
    subtitle: "Distributing books, stationery & STEM support in Passara",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=1200&q=85",
    tag: "ENVIRONMENT & GREEN UVA",
    title: "Central Highlands Reforestation Drive",
    subtitle: "Preserving biodiversity & water catchments across Badulla",
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1200&q=85",
    tag: "COMMUNITY HEALTHCARE",
    title: "UWU Annual Mega Blood Donation",
    subtitle: "Replenishing critical reserves for Badulla Teaching Hospital",
  },
];

export const INITIAL_TESTIMONIALS = [
  {
    id: "test-1",
    quote:
      "Being part of the Leo Club of Uva Wellassa University shaped my leadership character. Leading rural school renovation drives in Passara showed me the tangible difference university undergraduates can create when united by a single vision.",
    author: "Leo Rashmi Jayawardena",
    role: "Immediate Past President (2023/24)",
    faculty: "Faculty of Applied Sciences",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=250&q=80",
    tag: "LEADERSHIP & SERVICE",
  },
  {
    id: "test-2",
    quote:
      "Serving as Director of Health & Wellbeing gave me firsthand experience in orchestrating hospital partnerships and mobilizing 200+ blood donors in a single day. The professional maturity you gain here is unmatched.",
    author: "Leo Kavindu Bandara",
    role: "Director of Health & Wellbeing (2024/25)",
    faculty: "Faculty of Management",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=250&q=80",
    tag: "COMMUNITY HEALTH",
  },
  {
    id: "test-3",
    quote:
      "The Leo Club of UWU exemplifies what Lions Clubs International stands for: youthful energy, unshakeable integrity, and deep compassion for the less privileged communities across Uva Province.",
    author: "Lion Dr. Sunil Wickramasinghe PMJF",
    role: "Guiding Lion • Lions Club of Uva Capital",
    faculty: "District 306 D10 Advisory",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=250&q=80",
    tag: "LIONS HERITAGE",
  },
];

export const INITIAL_PILLARS = [
  {
    id: "education",
    title: "Educational Upliftment & STEM",
    tagline: "Empowering rural schools and students across Uva",
    description:
      "Annual school book donation drives, rural school library renovations, and STEM workshops for schoolchildren in Badulla and Monaragala.",
    icon: "GraduationCap",
    color: "blue",
  },
  {
    id: "environment",
    title: "Environment & Green Uva",
    tagline: "Preserving Central Highlands biodiversity",
    description:
      "Reforestation drives, university campus sustainability initiatives, plastic-free campaigns, and nature trail preservation in Uva Province.",
    icon: "TreePine",
    color: "emerald",
  },
  {
    id: "healthcare",
    title: "Community Health & Blood Aid",
    tagline: "Saving lives and promoting rural wellbeing",
    description:
      "Annual university mega blood donation campaign, rural medical and eye screening camps, and mental health awareness programs.",
    icon: "HeartHandshake",
    color: "rose",
  },
  {
    id: "youth-empowerment",
    title: "Undergraduate Leadership & Skills",
    tagline: "Developing next-generation leaders",
    description:
      "Professional development workshops, public speaking bootcamps, executive training, and inter-university fellowship events.",
    icon: "Users",
    color: "indigo",
  },
  {
    id: "disaster-relief",
    title: "Disaster Relief & Community Aid",
    tagline: "Rapid response to communities in crisis",
    description:
      "Emergency flood and landslide relief operations, food distribution for underprivileged families, and community winter warmth packs in Passara.",
    icon: "ShieldAlert",
    color: "amber",
  },
  {
    id: "vision-care",
    title: "Vision for All & Eye Care",
    tagline: "Lions global heritage in sight preservation",
    description:
      "Free pediatric and elderly eye screening camps, distribution of corrective spectacles, and cataract surgery financial assistance drives.",
    icon: "Eye",
    color: "cyan",
  },
];

export const INITIAL_CLUB_PROFILE = {
  id: "leo-uwu",
  name: "Leo Club of Uva Wellassa University",
  shortName: "UWU Leos",
  type: "club",
  district: "District 306 D10",
  multipleDistrict: "Multiple District 306",
  country: "Sri Lanka",
  charterYear: 2018,
  sponsoringLionsClub: "Lions Club of Uva Capital",
  tagline: "Value Addition • Youth Leadership • Community Service",
  motto: "Leadership, Experience, Opportunity",
  description:
    "The premier youth service organization of Uva Wellassa University of Sri Lanka (District 306 D10), empowering undergraduates to lead meaningful humanitarian projects, foster fellowship, and uplift communities across Uva Province and beyond.",
  logos: {
    main: "/logos/uwu-leo-logo.png",
    lion: "/logos/lions-international.png",
    leo: "/logos/uwu-leo-seal.png",
    district: "/logos/district-306c2.png",
  },
  contact: {
    email: "leoclub@uwu.ac.lk",
    phone: "+94 55 222 6580",
    address: "Uva Wellassa University, Passara Road, Badulla 90000, Sri Lanka",
    meetingSchedule: "Bi-weekly General Meeting - Alternate Wednesdays at 4:30 PM (UWU Campus / Hybrid)",
    socials: {
      facebook: "https://facebook.com/uwuleos",
      instagram: "https://instagram.com/uwuleos",
      linkedin: "https://linkedin.com/company/leo-club-of-uva-wellassa-university",
      youtube: "https://youtube.com/@uwuleos",
      twitter: "",
    },
  },
};

export const INITIAL_FAQS = [
  {
    q: "How can corporations or sponsors collaborate with UWU Leos for CSR?",
    a: "We collaborate with companies, NGOs, and foundations on impactful community initiatives. We offer end-to-end project planning, student volunteer mobilization across 4 faculties, transparent accounting, and media coverage across Leo District 306 D10.",
  },
  {
    q: "How quickly does the Secretariat respond to messages?",
    a: "Our Secretariat and Executive Council check official correspondence daily. Standard inquiries receive a response within 24 to 48 hours. For urgent matters, you can reach us on our hotline.",
  },
  {
    q: "Can other Leo or Lions clubs organize joint twinning projects?",
    a: "Yes! We welcome national and international twinning partnerships. Select 'Project Collaboration' in the form or email our secretariat directly.",
  },
  {
    q: "Where and when are regular club meetings conducted?",
    a: "General meetings are held bi-weekly on the 1st & 3rd Sundays at the Uva Wellassa University main campus auditorium or student center, with hybrid Zoom access for alumni and remote members.",
  },
];

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
  } catch (err: any) {
    if (err?.code === "unavailable" || err?.message?.includes("offline")) {
      // Graceful local fallback when Firestore database is offline or unseeded
    } else {
      console.warn(`Firestore read notice for collection "${collectionName}":`, err?.message || err);
    }
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
  } catch (err: any) {
    if (err?.code === "unavailable" || err?.message?.includes("offline")) {
      // Graceful local fallback when Firestore database is offline or unseeded
    } else {
      console.warn(`Firestore read notice for document ${collectionName}/${docId}:`, err?.message || err);
    }
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
 * Subscribe to real-time updates on a single Firestore document
 */
export function subscribeFirestoreDoc<T>(
  collectionName: string,
  docId: string,
  fallbackData: T,
  callback: (data: T) => void
): Unsubscribe | (() => void) {
  if (!isFirebaseConfigured() || !db) {
    callback(fallbackData);
    return () => {};
  }

  try {
    const docRef = doc(db, collectionName, docId);
    return onSnapshot(
      docRef,
      (snap) => {
        if (!snap.exists()) {
          callback(fallbackData);
          return;
        }
        callback({ ...snap.data(), id: snap.id } as T);
      },
      (err) => {
        console.warn(`Firestore real-time subscription error for ${collectionName}/${docId}:`, err);
        callback(fallbackData);
      }
    );
  } catch (err) {
    console.warn(`Failed to initialize Firestore doc listener for ${collectionName}/${docId}:`, err);
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

    // 9. Club Profile & Contact Info
    await saveFirestoreDoc("settings", "club_profile", INITIAL_CLUB_PROFILE);
    count++;

    // 10. Hero Carousel Slides
    await saveFirestoreDoc("settings", "hero_slides", { slides: INITIAL_HERO_SLIDES });
    count++;

    // 11. Testimonials / Reflections
    await saveFirestoreDoc("settings", "testimonials", { testimonials: INITIAL_TESTIMONIALS });
    count++;

    // 12. Pillars / Service Causes
    await saveFirestoreDoc("settings", "pillars", { pillars: INITIAL_PILLARS });
    count++;

    // 13. FAQs
    await saveFirestoreDoc("settings", "faqs", { faqs: INITIAL_FAQS });
    count++;

    return {
      success: true,
      seededCount: count,
      message: `Successfully seeded ${count} documents across Projects, Magazines, Documents, Events, Gallery, Leadership, Impact Stats, Club Profile, Hero Slides, Testimonials, Pillars, and FAQs into Firestore!`,
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
