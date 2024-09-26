import BookOpen from "@/assets/icons/BookOpen.svg";
import ChartPieSlice from "@/assets/icons/ChartPieSlice.svg";
import ChatsTeardrop from "@/assets/icons/ChatsTeardrop.svg";
import FolderNotch from "@/assets/icons/FolderNotch.svg";
import IdentificationBadge from "@/assets/icons/IdentificationBadge.svg";
import IdentificationCard from "@/assets/icons/IdentificationCard.svg";
import Notebook from "@/assets/icons/Notebook.svg";
import ShoppingBagOpen from "@/assets/icons/ShoppingBagOpen.svg";
import UsersThree from "@/assets/icons/UsersThree.svg";
import Bug from "@/assets/icons/BugBeetle.svg";
import User from "@/assets/icons/User.svg";
import Broadcast from "@/assets/icons/Broadcast.svg";
import Act1 from "@/assets/images/3D05.png";
import Act2 from "@/assets/images/Female05.png";
import Act3 from "@/assets/images/3D08.png";
import Act4 from "@/assets/images/Male07.png";
import Act5 from "@/assets/images/Male11.png";
import Contact1 from "@/assets/images/Female15.png";
import Contact2 from "@/assets/images/Male08.png";
import Contact3 from "@/assets/images/Male06.png";
import Contact4 from "@/assets/images/Female08.png";
import Contact5 from "@/assets/images/Female09.png";
import Contact6 from "@/assets/images/3D03.png";

export const dashboardSidemenuContent = [
  {
    title: "Dashboard",
    icon: ChartPieSlice,
    url: "/solutions/digitization",
  },
  {
    title: "Guests",
    icon: ShoppingBagOpen,
    
    url: "/solutions/speech",
  },
  {
    title: "Events",
    icon: FolderNotch,
    
    url: "https://www.tarento.com/case-studies/anuvaad-domain-specific-translation-engine-for-the-supreme-court-of-india/",
  },
  {
    title: "Gifts",
    icon: BookOpen,
    
    url: "",
  },
];

export const pageSidemenuContent = [
  {
    title: "User Profile",
    icon: IdentificationCard,
    contents: [
      {
        title: "Overview",
      },
      {
        title: "Projects",
      },
      {
        title: "Campaigns",
      },
      {
        title: "Documents",
      },
      {
        title: "Followers",
      },
    ],
    url: "/solutions/digitization",
  },
  {
    title: "Account",
    icon: IdentificationBadge,
    contents: [
      {
        title: "Text",
      },
      {
        title: "Speech",
      },
      {
        title: "Voice ",
      },
    ],
    url: "/solutions/speech",
  }
];

export const notificationGroupContent1 = [
  {
    title: "You have a bug that needs to be fixed.",
    timeStamp: "Just now",
    icon: Bug,
  },
  { title: "New user registered", timeStamp: "59 minutes ago", icon: User },
  {
    title: "You have a bug that needs to be fixed.",
    timeStamp: "12 hours ago",
    icon: Bug,
  },
  {
    title: "Andi Lane subscribed to you",
    timeStamp: "Today, 11:59 AM",
    icon: Broadcast,
  },
];

export const notificationGroupContent2 = [
  {
    title: "You have a bug that needs to be fixed.",
    timeStamp: "Just now",
    icon: Act1,
  },
  { title: "Released a new version", timeStamp: "59 minutes ago", icon: Act2 },
  {
    title: "Submitted a bug",
    timeStamp: "12 hours ago",
    icon: Act3,
  },
  {
    title: "Modified A data in Page X",
    timeStamp: "Today, 11:59 AM",
    icon: Act4,
  },
  {
    title: "Deleted a page in Project X",
    timeStamp: "Feb 2, 2023",
    icon: Act5,
  },
];

export const notificationGroupContent3 = [
  {
    title: "Natali Craig",
    timeStamp: "Just now",
    icon: Contact1,
  },
  { title: "Drew Cano", timeStamp: "59 minutes ago", icon: Contact2 },
  {
    title: "Orlando Diggs",
    timeStamp: "12 hours ago",
    icon: Contact3,
  },
  {
    title: "Andi Lane",
    timeStamp: "Today, 11:59 AM",
    icon: Contact4,
  },
  {
    title: "Kate Morrison",
    timeStamp: "Today, 11:59 AM",
    icon: Contact5,
  },
  {
    title: "Koray Okumus",
    timeStamp: "Today, 11:59 AM",
    icon: Contact6,
  },
];

export const favourites = ["Overview", "Projects"];
export const recents = ["Campaigns", "Documents", "Followers"];

export const WidgetChartData = [
  {
    widgetName: "Total events",
    mainValue: "28",
    growth: "11.01",
    isRevRelated: false,
    fontClass: "text-dark dark:text-dark",
    className: "bg-primary-blue",
    icnClr: "",
  },
  {
    widgetName: "Total Guests",
    mainValue: "1,219",
    growth: "0.03",
    isRevRelated: false,
    fontClass: "text-dark dark:text-white dark;invert",
    className: "bg-primary-light dark:bg-white/15",
    icnClr: "dark:invert",
  },
  {
    widgetName: "Total Gifts Received",
    mainValue: "695",
    growth: "15.03",
    isRevRelated: false,
    fontClass: "text-dark dark:text-white",
    className: "bg-primary-light dark:bg-white/15 ",
    icnClr: "dark:invert",
  },
  {
    widgetName: "Total Gifts Given",
    mainValue: "48",
    growth: "6.08",
    isRevRelated: false,
    fontClass: "text-dark dark:text-dark",
    className: "bg-primary-purple",
    icnClr: "",
  },
];

type Location = {
  city: string;
  coordinates: [number, number]; // Ensures that coordinates will always be a tuple
  value: number;
  progress: number;
};
export const locations: Location[] = [
  {
    city: "New York",
    coordinates: [40.7128, -74.006],
    value: 720,
    progress: 78,
  },
  {
    city: "San Francisco",
    coordinates: [37.7749, -122.4194],
    value: 300,
    progress: 26,
  },
  {
    city: "Sydney",
    coordinates: [-33.8688, 151.2093],
    value: 2500,
    progress: 34,
  },
  {
    city: "Singapore",
    coordinates: [1.3521, 103.8198],
    value: 61,
    progress: 70,
  },
];

export const invoices = [
  { name: 'John Doe', totalGifts: 50,
    giftValue:"$200",
    mode:"Cash,Jwellery"
   },
    { name: 'Jane Smith', totalGifts: 14 ,
      giftValue:"$128",
      mode:"Cheque"
    },
    { name: 'Bob Johnson', totalGifts: 4,
      giftValue:"$135",
      mode:"NFT"
     },
    { name: 'Alice Brown', totalGifts: 65,
      giftValue:"$756",
      mode:"Cheque,Cash"
     },{ name: 'Bob Johnson', totalGifts: 4,
      giftValue:"$135",
      mode:"NFT"
     },
    { name: 'Alice Brown', totalGifts: 65,
      giftValue:"$756",
      mode:"Cheque,Cash"
     },
     
    { name: 'Charlie Davis', totalGifts: 28,
      giftValue:"$149",
      mode:"Cheque,Cash,Jwellery"
     },{ name: 'Bob Johnson', totalGifts: 4,
      giftValue:"$135",
      mode:"NFT"
     },
    { name: 'Alice Brown', totalGifts: 65,
      giftValue:"$756",
      mode:"Cheque,Cash"
     },
];

export const stackedBhartDataGiftProjection = [
  { month: "January", invitations: 186, guestCount: 80 },
  { month: "February", invitations: 305, guestCount: 200 },
  { month: "March", invitations: 237, guestCount: 120 },
  { month: "April", invitations: 73, guestCount: 50 },
  { month: "May", invitations: 209, guestCount: 130 },
  { month: "June", invitations: 214, guestCount: 140 },
];


export const orderHistory = [
  {
    id: "a1b2c3d4-e5f6-7g8h-9i0j-k1l2m3n4o5p6",
    title: "Summer Festival",
    description: "A family-friendly festival with food, games, and live music.",
    date: "2024-06-20T12:00:00",
    location: "Central Park, New York",
    organizer: "Alen Kuriakose",
  },
  {
    id: "b1c2d3e4-f5g6-h7i8-j9k0-l1m2n3o4p5q6",
    title: "Charity Marathon",
    description: "A 10K marathon to raise funds for local charities.",
    date: "2024-08-15T07:00:00",
    location: "Downtown Chicago, IL",
    organizer: "Alen Kuriakose"
  },
  {
    id: "c1d2e3f4-g5h6-i7j8-k9l0-m1n2o3p4q5r6",
    title: "Art Exhibition",
    description: "Showcasing contemporary artists from around the world.",
    date: "2024-10-10T18:00:00",
    location: "Louvre Museum, Paris",
    organizer: "Alen Kuriakose"
  },
  {
    id: "d1e2f3g4-h5i6-j7k8-l9m0-n1o2p3q4r5s6",
    title: "Food Truck Festival",
    description: "A gathering of the best food trucks in the city.",
    date: "2024-07-05T11:00:00",
    location: "Los Angeles, CA",
    organizer: "Alen Kuriakose"
  },
  {
    id: "e1f2g3h4-i5j6-k7l8-m9n0-o1p2q3r4s5t6",
    title: "Tech Expo",
    description: "A showcase of the latest innovations in technology.",
    date: "2024-09-18T09:00:00",
    location: "Silicon Valley, CA",
    organizer: "Alen Kuriakose"
  },
  {
    id: "f1g2h3i4-j5k6-l7m8-n9o0-p1q2r3s4t5u6",
    title: "Film Festival",
    description: "Screenings of indie films from emerging directors.",
    date: "2024-11-03T19:00:00",
    location: "Cannes, France",
    organizer: "Alen Kuriakose"
  },
  {
    id: "g1h2i3j4-k5l6-m7n8-o9p0-q1r2s3t4u5v6",
    title: "Book Fair",
    description: "Annual book fair with authors, signings, and readings.",
    date: "2024-10-20T10:00:00",
    location: "London, UK",
    organizer: "Alen Kuriakose"
  },
  {
    id: "h1i2j3k4-l5m6-n7o8-p9q0-r1s2t3u4v5w6",
    title: "Music Concert",
    description: "A live performance by popular rock bands.",
    date: "2024-07-25T20:00:00",
    location: "Madison Square Garden, NY",
    organizer: "Alen Kuriakose"
  },
  {
    id: "i1j2k3l4-m5n6-o7p8-q9r0-s1t2u3v4w5x6",
    title: "Startup Meetup",
    description: "Networking event for entrepreneurs and startups.",
    date: "2024-09-30T18:00:00",
    location: "San Francisco, CA",
    organizer: "Alen Kuriakose"
  },
  {
    id: "j1k2l3m4-n5o6-p7q8-r9s0-t1u2v3w4x5y6",
    title: "Yoga Retreat",
    description: "A weekend retreat for relaxation and mindfulness.",
    date: "2024-08-12T08:00:00",
    location: "Bali, Indonesia",
    organizer: "Alen Kuriakose"
  },
  {
    id: "k1l2m3n4-o5p6-q7r8-s9t0-u1v2w3x4y5z6",
    title: "Wine Tasting",
    description: "Sample wines from vineyards around the world.",
    date: "2024-11-22T17:00:00",
    location: "Napa Valley, CA",
    organizer: "Alen Kuriakose"
  },
  {
    id: "l1m2n3o4-p5q6-r7s8-t9u0-v1w2x3y4z5a6",
    title: "Photography Workshop",
    description: "Learn advanced photography techniques from experts.",
    date: "2024-07-15T09:00:00",
    location: "Sydney, Australia",
    organizer: "Alen Kuriakose"
  },
  {
    id: "m1n2o3p4-q5r6-s7t8-u9v0-w1x2y3z4a5b6",
    title: "Garden Show",
    description: "A display of beautiful gardens and landscaping ideas.",
    date: "2024-06-10T10:00:00",
    location: "Royal Botanic Gardens, London",
    organizer: "Alen Kuriakose"
  },
  {
    id: "n1o2p3q4-r5s6-t7u8-v9w0-x1y2z3a4b5c6",
    title: "Cooking Class",
    description: "Learn to cook gourmet meals with top chefs.",
    date: "2024-09-05T14:00:00",
    location: "Rome, Italy",
    organizer: "Alen Kuriakose"
  },
  {
    id: "o1p2q3r4-s5t6-u7v8-w9x0-y1z2a3b4c5d6",
    title: "Sustainability Conference",
    description: "A conference on environmental sustainability and green energy.",
    date: "2024-10-02T09:00:00",
    location: "Berlin, Germany",
    organizer: "Alen Kuriakose"
  },
  {
    id: "p1q2r3s4-t5u6-v7w8-x9y0-z1a2b3c4d5e6",
    title: "Historical Tour",
    description: "A guided tour of ancient historical landmarks.",
    date: "2024-12-12T08:00:00",
    location: "Athens, Greece",
    organizer: "Alen Kuriakose"
  }
];



export const status = {
  "In Progress": "inprogress",
  'Approved': "approved",
  "Rejected": "rejected",
  "Pending": "pending",
  "Complete": "complete",
}as const;
