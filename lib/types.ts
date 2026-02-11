export type StrapiImage = {
  url: string;
  alternativeText?: string | null;
  width?: number | null;
  height?: number | null;
};

export type EventItem = {
  id: number;
  title: string;
  startsAt: string;
  endsAt?: string | null;
  locationName?: string | null;
  address?: string | null;
  signupUrl?: string | null;
  featured?: boolean;
  excerpt?: string | null;
};

export type SermonItem = {
  id: number;
  title: string;
  speaker?: string | null;
  series?: string | null;
  date: string;
  youtubeUrl?: string | null;
  audioUrl?: string | null;
  featured?: boolean;
  excerpt?: string | null;
};

export type Pastor = {
  id: number;
  name: string;
  role?: string | null;
  bio?: string | null;
  quote?: string | null;
};

export type Ministry = {
  id: number;
  name: string;
  excerpt?: string | null;
  contact?: string | null;
  pageUrl?: string | null;
};

export type FAQItem = {
  id: number;
  question: string;
  answer: string;
  category?: string | null;
};
