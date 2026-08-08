export type Lang = "vi" | "en";

export interface Profile {
  id: string;
  name: string;
  title_vi: string | null;
  title_en: string | null;
  bio_vi: string | null;
  bio_en: string | null;
  location: string | null;
  email: string | null;
  accent: string | null;
  avatar_url: string | null;
}

export interface Project {
  id: string;
  slug: string;
  title_vi: string;
  title_en: string;
  summary_vi: string | null;
  summary_en: string | null;
  body_vi: string | null;
  body_en: string | null;
  role_vi: string | null;
  role_en: string | null;
  year: number | null;
  cover_url: string | null;
  tags: string[];
  sort: number;
}

export interface Experience {
  id: string;
  company: string;
  role_vi: string | null;
  role_en: string | null;
  desc_vi: string | null;
  desc_en: string | null;
  start_date: string | null;
  end_date: string | null;
  sort: number;
}

export interface Education {
  id: string;
  school: string;
  field_vi: string | null;
  field_en: string | null;
  start_date: string | null;
  end_date: string | null;
  sort: number;
}

export interface Skill {
  id: string;
  name: string;
  sort: number;
}

export interface GalleryImage {
  id: string;
  project_id: string | null;
  image_url: string;
  caption_vi: string | null;
  caption_en: string | null;
  sort: number;
}
