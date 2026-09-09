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

import initialProjectsData from "@/data/projects.json";
import initialMagazinesData from "@/data/magazines.json";
import initialLeadershipData from "@/data/leadership.json";
import initialDocumentsData from "@/data/documents.json";

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
// INITIAL SEED DATASETS FOR UWU LEOS
// ==============================================================================

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
 * Fetch all documents from a Firestore collection with fallback to initial static JSON/local data
 */
export async function getFirestoreCollection<T extends { id: string }>(
  collectionName: string,
  fallbackData: T[]
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
  fallbackData: T[],
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
    for (const proj of initialProjectsData) {
      await saveFirestoreDoc("projects", proj.id, proj);
      count++;
    }

    // 2. Magazines
    for (const mag of initialMagazinesData) {
      await saveFirestoreDoc("magazines", mag.id, mag);
      count++;
    }

    // 3. Documents
    for (const docItem of initialDocumentsData) {
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
    await saveFirestoreDoc("leadership", "current", initialLeadershipData);
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
