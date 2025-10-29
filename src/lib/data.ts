export const mediaCategories = [
  {
    name: "Concert",
    value: "concert",
    images: [
      {
        title: "The Maine - Back in Manila",
        description: "John posted these photos on his Instagram.",
        device: "Shot on iPhone 15 Pro Max",
        image: "/images/media/concerts/IMG_4065.JPEG",
      },
      {
        title: "The Maine - Back in Manila",
        description: "John posted these photos on his Instagram.",
        device: "Shot on iPhone 15 Pro Max",
        image: "/images/media/concerts/IMG_4797.JPEG",
      },

      {
        title: "The Maine - Back in Manila",
        description: "Band used this photo for their Instagram post.",
        device: "Shot on iPhone 15 Pro Max",
        image: "/images/media/concerts/IMG_4689.JPEG",
      },
      {
        title: "The Maine - Back in Manila",
        description: "John posted these photos on his Instagram.",
        device: "Shot on iPhone 15 Pro Max",
        image: "/images/media/concerts/IMG_4793.JPEG",
      },
      {
        title: "The Maine - Back in Manila",
        description: "September 2024",
        device: "Shot on iPhone 15 Pro Max",
        image: "/images/media/concerts/IMG_4054.JPEG",
      },

      {
        title: "The Maine - Back in Manila",
        description: "September 2024",
        device: "Shot on iPhone 15 Pro Max",
        image: "/images/media/concerts/IMG_4454.JPEG",
      },
    ],
  },
  // {
  //   name: "Toys",
  //   value: "toys",
  //   images: [
  //     {
  //       title: "C1",
  //       description: "",
  //       image: "images/media/concerts/IMG_4054.JPEG",
  //     },
  //     {
  //       title: "C2",
  //       description: "",
  //       image: "images/media/concerts/IMG_4689.JPEG",
  //     },
  //     {
  //       title: "C3",
  //       description: "",
  //       image: "images/media/concerts/IMG_4065.JPEG",
  //     },
  //     {
  //       title: "C4",
  //       description: "",
  //       image: "images/media/concerts/IMG_4976.JPEG",
  //     },
  //     {
  //       title: "C5",
  //       description: "",
  //       image: "images/media/concerts/IMG_4454.JPEG",
  //     },
  //     {
  //       title: "C5",
  //       description: "",
  //       image: "images/media/concerts/IMG_4797.JPEG",
  //     },
  //   ],
  // },
  {
    name: "Pets",
    value: "pets",
    images: [
      {
        title: "Seungming",
        description: "",
        device: "Sony A6700, 17-70mm f/2.8",
        image: "/images/media/pets/DSC01914.JPG",
      },
      {
        title: "Sophie",
        description: "",
        device: "Sony A6700, 17-70mm f/2.8",
        image: "/images/media/pets/DSC01937.JPG",
      },
      {
        title: "Daijin",
        description: "",
        device: "Sony A6700, 17-70mm f/2.8",
        image: "/images/media/pets/DSC05865.JPG",
      },
      {
        title: "Seungming",
        description: "",
        device: "Sony A6700, 17-70mm f/2.8",
        image: "/images/media/pets/DSC04661.JPG",
      },
      {
        title: "Sophie",
        description: "",
        device: "Sony A6700, 17-70mm f/2.8",
        image: "/images/media/pets/DSC04726.JPG",
      },
      {
        title: "Daijin",
        description: "",
        device: "Sony A6700, 17-70mm f/2.8",
        image: "/images/media/pets/DSC04611.JPG",
      },
    ],
  },
  {
    name: "Travel",
    value: "travel",
    images: [
      {
        title: "Hong Kong 2024",
        description: "",
        device: "Sony ZVE-10, 16-50mm F3.5-5.6 Kit Lens",
        image: "/images/media/travel/DSC02391.JPEG",
      },

      {
        title: "Hong Kong 2024",
        description: "",
        device: "Sony ZVE-10, 16-50mm F3.5-5.6 Kit Lens",
        image: "/images/media/travel/DSC02757.JPEG",
      },
      {
        title: "Hong Kong 2024",
        description: "",
        device: "Sony ZVE-10, 16-50mm F3.5-5.6 Kit Lens",
        image: "/images/media/travel/DSC02845.JPEG",
      },

      {
        title: "Hong Kong 2024",
        description: "",
        device: "Sony ZVE-10, 16-50mm F3.5-5.6 Kit Lens",
        image: "/images/media/travel/DSC02889.JPEG",
      },
      // {
      //   title: "Hong Kong 2024",
      //   description: "",
      //   device: "Sony ZVE-10, 16-50mm F3.5-5.6 Kit Lens",
      //   image: "/images/media/travel/DSC02672.JPEG",
      // },
      {
        title: "Hong Kong 2024",
        description: "",
        device: "Sony ZVE-10, 16-50mm F3.5-5.6 Kit Lens",
        image: "/images/media/travel/DSC02792.JPEG",
      },
      {
        title: "Hong Kong 2024",
        description: "",
        device: "Sony ZVE-10, 16-50mm F3.5-5.6 Kit Lens",
        image: "/images/media/travel/DSC02871.JPEG",
      },
    ],
  },
];

// Development projects data used by the DevProjects component
export type DevProjectStatus =
  | "deployed"
  | "development"
  | "planned"
  | "archived";

export type DevProject = {
  title: string;
  description: string;
  image: string;
  status: DevProjectStatus;
  siteUrl?: string; // Live site if deployed
  repoUrl?: string; // GitHub repo as fallback or reference
  tech?: string[]; // Technology stack to render as tags/badges
  darkMode?: boolean; // Whether dark mode is implemented
};

export const devProjects: DevProject[] = [
  {
    title: "My Portfolio",
    description:
      "Work in Progress. This is my personal portfolio website showcasing my projects and skills.",
    image: "/images/projects/portfolio-screenshot.png",
    status: "deployed",
    siteUrl: "https://alfonso-marquez-portfolio.vercel.app",
    repoUrl: "https://github.com/alfonso-marquez/my-portfolio-next",
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "shadcn/ui"],
    darkMode: true,
  },
  {
    title: "Photo Library App",
    description: "Collaborative Library for Photo Enthusiasts.",
    image: "/images/projects/photo-library-screenshot.png",
    status: "deployed",
    siteUrl: "/",
    repoUrl: "https://github.com/alfonso-marquez/go-rocky-exam",
    tech: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Supabase",
      "Postgres",
    ],
    darkMode: false,
  },
  {
    title: "AI Image Gallery",
    description: "Under development Image Gallery with AI Analysis images.",
    image: "/images/projects/ai-image-gallery-screenshot.png",
    status: "development",
    repoUrl: "https://github.com/alfonso-marquez",
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Supabase", "AWS"],
    darkMode: true,
  },
  {
    title: "Coming Soon",
    description: "Still in planning stage. So here is my cat in the meantime.",
    image: "/images/media/pets/DSC04611.JPG",
    status: "planned",
    repoUrl: "https://github.com/alfonso-marquez",
    tech: ["TBD"],
  },
];

// Currently activities data for About page
export type CurrentlyData = {
  learning: {
    title: string;
    platform: string;
    progress: number; // 0-100
  };
  playing: {
    title: string;
    platform: string;
    hoursPlayed?: number;
  };
  backlogs: {
    courses: number;
    games: number;
  };
};

export const currentlyData: CurrentlyData = {
  learning: {
    title: "React - The Complete Guide (incl. Next.js, Redux)",
    platform: "Udemy",
    progress: 26,
  },
  playing: {
    title: "Final Fantasy Rebirth",
    platform: "PS5",
    hoursPlayed: 2,
  },
  backlogs: {
    courses: 6,
    games: 7,
  },
};
