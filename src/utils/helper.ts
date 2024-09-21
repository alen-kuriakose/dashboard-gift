import BookOpen from "@/assets/icons/BookOpen.svg";
import ChartPieSlice from "@/assets/icons/ChartPieSlice.svg";
import ChatsTeardrop from "@/assets/icons/ChatsTeardrop.svg";
import FolderNotch from "@/assets/icons/FolderNotch.svg";
import IdentificationBadge from "@/assets/icons/IdentificationBadge.svg";
import IdentificationCard from "@/assets/icons/IdentificationCard.svg";
import Notebook from "@/assets/icons/Notebook.svg";
import ShoppingBagOpen from "@/assets/icons/ShoppingBagOpen.svg";
import UsersThree from "@/assets/icons/UsersThree.svg";

export const dashboardSidemenuContent = [
  {
    title: "Campaigns",
    icon:ChartPieSlice,
    contents: [
      {
        title: "Optical",
      },
      {
        title: "Text  ",
      },
    ],
    url: "/solutions/digitization",
  },
  {
    title: "Earnings",
    icon:ShoppingBagOpen,
    contents: [
      {
        title: "Text",
        },
      {
        title: "Speech",
        },
      {
        title: "Voice Over",
        },
    ],
    url: "/solutions/speech",
  },
  {
    title: "Guests",
    icon:FolderNotch,
    contents: [
      {
        title: "Translation",
        },
      {
        title: "Transliteration",
        },
      {
        title: "Transcription",
        },
      {
        title: "Summarization",
        },
      {
        title: "Quiz ",
        },
      {
        title: "Sentiment ",
        },
    ],
    url: "https://www.tarento.com/case-studies/anuvaad-domain-specific-translation-engine-for-the-supreme-court-of-india/",
  },
  
];

export const pageSidemenuContent = [
  {
    title: "Event Creation",
    icon:IdentificationCard,
    contents: [
      {
        title: "Optical  ",
        },
      {
        title: "Text  ",
        },
    ],
    url: "/solutions/digitization",
  },
  {
    title: "Account",
    icon:IdentificationBadge,
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
  },
  {
    title: "Corporate",
    icon:UsersThree,
    contents: [
      {
        title: "Translation",
        },
      {
        title: "Transliteration",
        },
      {
        title: "Transcription",
        },
      {
        title: "Summarization",
        },
      {
        title: "Quiz",
        },
      {
        title: "Sentiment ",
        },
    ],
    url: "https://www.tarento.com/case-studies/anuvaad-domain-specific-translation-engine-for-the-supreme-court-of-india/",
  },
  {
    title: "Blog",
    icon:Notebook,
    contents: [
      {
        title: "Digital ",
        },
      {
        title: "Enterprise ",
        },
    ],
    url: "Social",
  },
  {
    title: "Social",
    icon:ChatsTeardrop,
    contents: [
      {
        title: "Digital ",
        },
      {
        title: "Enterprise",
        },
    ],
    url: "Social",
  },
];
