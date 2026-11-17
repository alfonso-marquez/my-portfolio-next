// Photo projects shown on /media. Each one gets a cover tile on /media and its own page at
// /media/<slug> with every photo. `cover` is the tile image; `hidden` keeps a project in the
// data without listing it or building its page.
export type PhotoProject = {
  slug: string;
  title: string;
  gig: string;
  date?: string;
  venue?: string;
  note?: string; // one line under the heading, e.g. a credit
  hidden?: boolean;
  cover: string;
  coverRatio?: number; // crops the /media tile to this width / height, e.g. for very tall photos
  images: { image: string; description?: string; device?: string; full?: boolean }[]; // full: own row, full width
};

export const photoProjects: PhotoProject[] = [
  {
    slug: "shanni",
    title: "SHANNi",
    gig: "Cure for Loneliness EP Launch",
    date: "October 31, 2026",
    cover: "/images/media/shanni/shanni-21.jpg",
    images: [
      { image: "/images/media/shanni/shanni-21.jpg" },
      { image: "/images/media/shanni/shanni-0.jpg" },
      { image: "/images/media/shanni/shanni-4.jpg" },
      { image: "/images/media/shanni/shanni-16.jpg" },
      { image: "/images/media/shanni/shanni-17.jpg" },
      { image: "/images/media/shanni/shanni-22.jpg" },
      { image: "/images/media/shanni/shanni-23.jpg" },
      { image: "/images/media/shanni/shanni-29.jpg" },
      { image: "/images/media/shanni/shanni-32.jpg" },
      { image: "/images/media/shanni/shanni-34.jpg" },
    ],
  },
  {
    slug: "one-click-straight",
    title: "One Click Straight",
    gig: "Shanni's Cure for Loneliness EP Launch",
    date: "October 31, 2026",
    cover: "/images/media/one-click-straight/ocs-cover.jpg",
    images: [
      { image: "/images/media/one-click-straight/ocs-cover.jpg", full: true },
      { image: "/images/media/one-click-straight/ocs-dsc07577.jpg" },
      { image: "/images/media/one-click-straight/ocs-dsc07596.jpg" },
      { image: "/images/media/one-click-straight/ocs-dsc07603.jpg" },
      { image: "/images/media/one-click-straight/ocs-dsc07613.jpg" },
      { image: "/images/media/one-click-straight/ocs-dsc07652.jpg" },
      { image: "/images/media/one-click-straight/ocs-dsc07679.jpg" },
      { image: "/images/media/one-click-straight/ocs-dsc07688.jpg" },
      { image: "/images/media/one-click-straight/ocs-dsc07694.jpg" },
      { image: "/images/media/one-click-straight/ocs-dsc07705.jpg" },
      { image: "/images/media/one-click-straight/ocs-dsc07735.jpg" },
      { image: "/images/media/one-click-straight/ocs-dsc07756.jpg" },
      { image: "/images/media/one-click-straight/ocs-dsc07771.jpg" },
    ],
  },
  {
    slug: "the-itchyworms",
    title: "The Itchyworms",
    gig: "Shanni's Cure for Loneliness EP Launch",
    date: "October 31, 2026",
    cover: "/images/media/itchyworms/itchyworms-dsc07234.jpg",
    images: [
      { image: "/images/media/itchyworms/itchyworms-dsc07234.jpg" },
      { image: "/images/media/itchyworms/itchyworms-dsc07371.jpg" },
      { image: "/images/media/itchyworms/itchyworms-dsc07372.jpg" },
      { image: "/images/media/itchyworms/itchyworms-dsc07239.jpg" },
      { image: "/images/media/itchyworms/itchyworms-dsc07246.jpg" },
      { image: "/images/media/itchyworms/itchyworms-dsc07269.jpg" },
      { image: "/images/media/itchyworms/itchyworms-dsc07289.jpg" },
      { image: "/images/media/itchyworms/itchyworms-dsc07297.jpg" },
      { image: "/images/media/itchyworms/itchyworms-dsc07305.jpg" },
      { image: "/images/media/itchyworms/itchyworms-dsc07315.jpg" },
    ],
  },
  {
    slug: "ena-mori",
    title: "Ena Mori",
    gig: "Shanni's Cure for Loneliness EP Launch",
    date: "October 31, 2026",
    cover: "/images/media/ena-mori/ena-mori-dsc07466.jpg",
    images: [
      { image: "/images/media/ena-mori/ena-mori-dsc07466.jpg" },
      { image: "/images/media/ena-mori/ena-mori-dsc07382.jpg" },
      { image: "/images/media/ena-mori/ena-mori-dsc07418.jpg" },
      { image: "/images/media/ena-mori/ena-mori-dsc07436.jpg" },
      { image: "/images/media/ena-mori/ena-mori-dsc07437.jpg" },
      { image: "/images/media/ena-mori/ena-mori-dsc07449.jpg" },
      { image: "/images/media/ena-mori/ena-mori-dsc07462.jpg" },
      { image: "/images/media/ena-mori/ena-mori-dsc07465.jpg" },
    ],
  },
  {
    slug: "suyen",
    title: "Suyen",
    gig: "Shanni's Cure for Loneliness EP Launch",
    date: "October 31, 2026",
    cover: "/images/media/suyen/suyen-dsc07120.jpg",
    images: [
      { image: "/images/media/suyen/suyen-dsc07120.jpg" },
      { image: "/images/media/suyen/suyen-dsc07021.jpg" },
      { image: "/images/media/suyen/suyen-dsc07070.jpg" },
      { image: "/images/media/suyen/suyen-dsc07104.jpg" },
      { image: "/images/media/suyen/suyen-dsc07151.jpg" },
      { image: "/images/media/suyen/suyen-dsc07154.jpg" },
      { image: "/images/media/suyen/suyen-dsc07171.jpg" },
      { image: "/images/media/suyen/suyen-dsc07174.jpg" },
      { image: "/images/media/suyen/suyen-dsc07197.jpg" },
      { image: "/images/media/suyen/suyen-dsc07201.jpg" },
      { image: "/images/media/suyen/suyen-dsc07213.jpg" },
    ],
  },
  {
    slug: "uncle-jonny",
    title: "Uncle Jonny",
    gig: "Shanni's Cure for Loneliness EP Launch",
    date: "October 31, 2026",
    cover: "/images/media/uncle-jonny/uncle-jonny-dsc06950.jpg",
    images: [
      { image: "/images/media/uncle-jonny/uncle-jonny-dsc06950.jpg" },
      { image: "/images/media/uncle-jonny/uncle-jonny-dsc06921.jpg" },
      { image: "/images/media/uncle-jonny/uncle-jonny-dsc06933.jpg" },
      { image: "/images/media/uncle-jonny/uncle-jonny-dsc06943.jpg" },
      { image: "/images/media/uncle-jonny/uncle-jonny-dsc06945.jpg" },
      { image: "/images/media/uncle-jonny/uncle-jonny-dsc06959.jpg" },
      { image: "/images/media/uncle-jonny/uncle-jonny-dsc06962.jpg" },
      { image: "/images/media/uncle-jonny/uncle-jonny-dsc06965.jpg" },
      { image: "/images/media/uncle-jonny/uncle-jonny-dsc06966.jpg" },
    ],
  },
  {
    slug: "planetana",
    title: "Planetana",
    gig: "Shanni's Cure for Loneliness EP Launch",
    date: "October 31, 2026",
    cover: "/images/media/planetana/planetana-dsc06879.jpg",
    images: [
      { image: "/images/media/planetana/planetana-dsc06879.jpg" },
      { image: "/images/media/planetana/planetana-dsc06876.jpg" },
      { image: "/images/media/planetana/planetana-dsc06877.jpg" },
      { image: "/images/media/planetana/planetana-dsc06886.jpg" },
      { image: "/images/media/planetana/planetana-dsc06898.jpg" },
      { image: "/images/media/planetana/planetana-dsc06906.jpg" },
    ],
  },
  {
    slug: "johnoy-danao",
    title: "Johnoy Danao",
    gig: "20 Years of Wabi-Sabi",
    date: "October 23, 2026",
    venue: "Street Kohi",
    cover: "/images/media/wabi-sabi/johnoy-09.jpg",
    images: [
      { image: "/images/media/wabi-sabi/johnoy-09.jpg" },
      { image: "/images/media/wabi-sabi/johnoy-02.jpg" },
      { image: "/images/media/wabi-sabi/johnoy-05.jpg" },
      { image: "/images/media/wabi-sabi/johnoy-06.jpg" },
      { image: "/images/media/wabi-sabi/johnoy-07.jpg" },
      { image: "/images/media/wabi-sabi/johnoy-08.jpg" },
      { image: "/images/media/wabi-sabi/johnoy-01.jpg" },
      { image: "/images/media/wabi-sabi/johnoy-10.jpg" },
      { image: "/images/media/wabi-sabi/johnoy-11.jpg" },
    ],
  },
  {
    slug: "reese-lansangan",
    title: "Reese Lansangan",
    gig: "20 Years of Wabi-Sabi",
    date: "October 23, 2026",
    venue: "Street Kohi",
    cover: "/images/media/wabi-sabi/reese-03.jpg",
    images: [
      { image: "/images/media/wabi-sabi/reese-03.jpg" },
      { image: "/images/media/wabi-sabi/reese-01.jpg" },
      { image: "/images/media/wabi-sabi/reese-02.jpg" },
      { image: "/images/media/wabi-sabi/reese-04.jpg" },
      { image: "/images/media/wabi-sabi/reese-05.jpg" },
      { image: "/images/media/wabi-sabi/reese-07.jpg" },
      { image: "/images/media/wabi-sabi/reese-08.jpg" },
      { image: "/images/media/wabi-sabi/reese-09.jpg" },
      { image: "/images/media/wabi-sabi/reese-10.jpg" },
      { image: "/images/media/wabi-sabi/reese-11.jpg" },
      { image: "/images/media/wabi-sabi/reese-12.jpg" },
      { image: "/images/media/wabi-sabi/reese-13.jpg" },
      { image: "/images/media/wabi-sabi/reese-14.jpg" },
    ],
  },
  {
    slug: "tota",
    title: "totâ",
    gig: "20 Years of Wabi-Sabi",
    date: "October 23, 2026",
    venue: "Street Kohi",
    cover: "/images/media/wabi-sabi/tota-02.jpg",
    images: [
      { image: "/images/media/wabi-sabi/tota-02.jpg" },
      { image: "/images/media/wabi-sabi/tota-01.jpg" },
      { image: "/images/media/wabi-sabi/tota-04.jpg" },
      { image: "/images/media/wabi-sabi/tota-05.jpg" },
      { image: "/images/media/wabi-sabi/tota-07.jpg" },
      { image: "/images/media/wabi-sabi/tota-08.jpg" },
      { image: "/images/media/wabi-sabi/tota-09.jpg" },
      { image: "/images/media/wabi-sabi/tota-10.jpg" },
    ],
  },
  {
    slug: "mayas-anklet",
    title: "Maya's Anklet",
    gig: "20 Years of Wabi-Sabi",
    date: "October 23, 2026",
    venue: "Street Kohi",
    cover: "/images/media/wabi-sabi/maya-04.jpg",
    images: [
      { image: "/images/media/wabi-sabi/maya-04.jpg" },
      { image: "/images/media/wabi-sabi/maya-01.jpg" },
      { image: "/images/media/wabi-sabi/maya-02.jpg" },
      { image: "/images/media/wabi-sabi/maya-05.jpg" },
      { image: "/images/media/wabi-sabi/maya-dsc06249.jpg" },
    ],
  },
  {
    slug: "badwave",
    title: "badwave",
    gig: "NAPAKA MUSICK",
    date: "November 23, 2025",
    cover: "/images/media/napaka-musick/badwave-dsc08583.jpg",
    images: [
      { image: "/images/media/napaka-musick/badwave-dsc08583.jpg" },
      { image: "/images/media/napaka-musick/badwave-dsc08486.jpg", full: true },
      { image: "/images/media/napaka-musick/badwave-3.jpg" },
      { image: "/images/media/napaka-musick/badwave-4.jpg" },
      { image: "/images/media/napaka-musick/badwave-5.jpg" },
    ],
  },
  {
    slug: "brickcity",
    title: "Brickcity",
    gig: "NAPAKA MUSICK",
    date: "November 23, 2025",
    cover: "/images/media/napaka-musick/brickcity-3.jpg",
    images: [
      { image: "/images/media/napaka-musick/brickcity-3.jpg" },
      { image: "/images/media/napaka-musick/brickcity-1.jpg" },
      { image: "/images/media/napaka-musick/brickcity-2.jpg" },
      { image: "/images/media/napaka-musick/brickcity-4.jpg" },
    ],
  },
  {
    slug: "daintsu",
    title: "daintsu",
    gig: "NAPAKA MUSICK",
    date: "November 23, 2025",
    cover: "/images/media/napaka-musick/daintsu-dsc07959.jpg",
    images: [
      { image: "/images/media/napaka-musick/daintsu-dsc07959.jpg" },
      { image: "/images/media/napaka-musick/daintsu-dsc07983.jpg" },
      { image: "/images/media/napaka-musick/daintsu-dsc07954.jpg" },
      { image: "/images/media/napaka-musick/daintsu-dsc07968.jpg" },
      { image: "/images/media/napaka-musick/daintsu-dsc08085.jpg" },
      { image: "/images/media/napaka-musick/daintsu-dsc08088.jpg" },
    ],
  },
  {
    slug: "the-maine",
    title: "The Maine",
    gig: "Back in Manila '24",
    cover: "/images/media/concerts/IMG_4797.JPEG",
    coverRatio: 4 / 5,
    images: [
      { image: "/images/media/concerts/IMG_4797.JPEG", description: "John posted these photos on his Instagram.", device: "Shot on iPhone 15 Pro Max" },
      { image: "/images/media/concerts/IMG_4065.JPEG", description: "John posted these photos on his Instagram.", device: "Shot on iPhone 15 Pro Max" },
      { image: "/images/media/concerts/IMG_4689.JPEG", description: "Band used this photo for their Instagram post.", device: "Shot on iPhone 15 Pro Max" },
      { image: "/images/media/concerts/IMG_4793.JPEG", description: "John posted these photos on his Instagram.", device: "Shot on iPhone 15 Pro Max" },
      { image: "/images/media/concerts/IMG_4054.JPEG", device: "Shot on iPhone 15 Pro Max" },
      { image: "/images/media/concerts/IMG_4454.JPEG", device: "Shot on iPhone 15 Pro Max" },
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
      "shadcn/ui",
    ],
  },
  {
    title: "AI Image Gallery",
    description:
      "Image Uploading Gallery with AI Image Analysis for Description, Tags, and Dominant Colors.",
    image: "/images/projects/ai-image-gallery-screenshot.png",
    status: "development",
    repoUrl: "https://github.com/alfonso-marquez",
    tech: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "shadcn/ui",
      "Supabase",
      "Postgres",
      "AWS Rekognition",
      "AWS Bedrock",
      "AI",
      "OpenAI",
    ],
  },
  {
    title: "Custom CRM",
    description: "Under development. So here is my cat in the meantime.",
    image: "/images/projects/crm-placeholder-cat.jpg",
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
