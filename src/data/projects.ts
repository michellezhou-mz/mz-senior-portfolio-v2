import petpals from "@/assets/work-petpals.jpg";
import google from "@/assets/work-google.jpg";
import catalogue from "@/assets/work-catalogue.jpg";
import ceba from "@/assets/work-ceba.jpg";
import deceased from "@/assets/work-deceased.jpg";

export type Project = {
  slug: string;
  title: string;
  tagline: string;
  discipline: string;
  year: string;
  context: string;
  role: string;
  image: string;
  accent: "forest" | "plum" | "sand";
  featured?: boolean;
};

export const projects: Project[] = [
  {
    slug: "ceba",
    title: "Ceba",
    tagline: "Leading design of a consumer-facing AI assistant across multiple initiatives.",
    discipline: "E2E Product Design · Strategy · Discovery",
    year: "2023 — 2024",
    context: "CommBank",
    role: "Lead Product Designer",
    image: ceba,
    accent: "forest",
    featured: true,
  },
  {
    slug: "deceased-estates",
    title: "Deceased Estates",
    tagline: "Navigating a final journey with care, clarity, and dignity.",
    discipline: "E2E Product Design",
    year: "2023",
    context: "CommBank",
    role: "Senior Product Designer",
    image: deceased,
    accent: "sand",
    featured: true,
  },
  {
    slug: "the-catalogue",
    title: "The Catalogue",
    tagline: "Launching a new online marketplace driven by expert advice.",
    discipline: "Product Design",
    year: "2022",
    context: "Startup",
    role: "Product Designer",
    image: catalogue,
    accent: "plum",
  },
  {
    slug: "google-certificates-community",
    title: "Google Certificates Community",
    tagline: "Connecting online learners during their portfolio projects.",
    discipline: "Product Design",
    year: "2022",
    context: "Google",
    role: "Product Designer",
    image: google,
    accent: "forest",
  },
  {
    slug: "pet-pals",
    title: "Pet Pals",
    tagline: "The best for your pet, at your fingertips.",
    discipline: "Service Design · CX Strategy",
    year: "2021",
    context: "Self-initiated",
    role: "Service Designer",
    image: petpals,
    accent: "sand",
  },
];
