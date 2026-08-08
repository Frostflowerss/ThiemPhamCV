import type { Lang } from "./types";

export const dict = {
  vi: {
    nav_home: "Trang chủ",
    nav_projects: "Dự án",
    nav_cv: "CV",
    hero_cta: "Xem dự án",
    hero_contact: "Liên hệ",
    projects_title: "Dự án tiêu biểu",
    projects_empty: "Chưa có dự án nào.",
    back: "Quay lại",
    role: "Vai trò",
    year: "Năm",
    cv_title: "Sơ yếu lý lịch",
    cv_print: "In / Lưu PDF",
    exp: "Kinh nghiệm",
    edu: "Học vấn",
    skills: "Kỹ năng",
    contact: "Liên hệ",
    error: "Không tải được dữ liệu. Vui lòng thử lại.",
    loading: "Đang tải…",
    present: "Hiện tại",
  },
  en: {
    nav_home: "Home",
    nav_projects: "Projects",
    nav_cv: "CV",
    hero_cta: "View projects",
    hero_contact: "Contact",
    projects_title: "Selected work",
    projects_empty: "No projects yet.",
    back: "Back",
    role: "Role",
    year: "Year",
    cv_title: "Curriculum Vitae",
    cv_print: "Print / Save PDF",
    exp: "Experience",
    edu: "Education",
    skills: "Skills",
    contact: "Contact",
    error: "Failed to load data. Please try again.",
    loading: "Loading…",
    present: "Present",
  },
} as const;

export type DictKey = keyof (typeof dict)["vi"];
export const t = (lang: Lang, key: DictKey) => dict[lang][key];

/** Pick a bilingual field, falling back to the other language. */
export function pick(row: object, base: string, lang: Lang): string {
  const r = row as Record<string, unknown>;
  const primary = r[`${base}_${lang}`];
  const fallback = r[`${base}_${lang === "vi" ? "en" : "vi"}`];
  return (primary as string) || (fallback as string) || "";
}
