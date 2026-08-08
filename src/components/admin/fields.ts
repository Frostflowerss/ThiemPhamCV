export type FieldType = "text" | "textarea" | "number" | "tags";

export interface FieldSpec {
  name: string;
  label: string;
  type: FieldType;
  full?: boolean;
}

export type TableName =
  | "profile"
  | "projects"
  | "experiences"
  | "education"
  | "skills";

export const FIELD_SPECS: Record<TableName, FieldSpec[]> = {
  profile: [
    { name: "name", label: "Tên", type: "text" },
    { name: "location", label: "Địa điểm", type: "text" },
    { name: "email", label: "Email", type: "text" },
    { name: "accent", label: "Màu accent (hex)", type: "text" },
    { name: "avatar_url", label: "Avatar URL", type: "text", full: true },
    { name: "title_vi", label: "Chức danh (VI)", type: "text" },
    { name: "title_en", label: "Chức danh (EN)", type: "text" },
    { name: "bio_vi", label: "Giới thiệu (VI)", type: "textarea", full: true },
    { name: "bio_en", label: "Giới thiệu (EN)", type: "textarea", full: true },
  ],
  projects: [
    { name: "slug", label: "Slug", type: "text" },
    { name: "year", label: "Năm", type: "number" },
    { name: "sort", label: "Thứ tự", type: "number" },
    { name: "cover_url", label: "Ảnh bìa URL", type: "text", full: true },
    { name: "tags", label: "Tags (phẩy)", type: "tags", full: true },
    { name: "title_vi", label: "Tên (VI)", type: "text" },
    { name: "title_en", label: "Tên (EN)", type: "text" },
    { name: "role_vi", label: "Vai trò (VI)", type: "text" },
    { name: "role_en", label: "Vai trò (EN)", type: "text" },
    { name: "summary_vi", label: "Tóm tắt (VI)", type: "textarea", full: true },
    { name: "summary_en", label: "Tóm tắt (EN)", type: "textarea", full: true },
    { name: "body_vi", label: "Nội dung (VI)", type: "textarea", full: true },
    { name: "body_en", label: "Nội dung (EN)", type: "textarea", full: true },
  ],
  experiences: [
    { name: "company", label: "Công ty", type: "text" },
    { name: "sort", label: "Thứ tự", type: "number" },
    { name: "start_date", label: "Bắt đầu", type: "text" },
    { name: "end_date", label: "Kết thúc (trống = hiện tại)", type: "text" },
    { name: "role_vi", label: "Vị trí (VI)", type: "text" },
    { name: "role_en", label: "Vị trí (EN)", type: "text" },
    { name: "desc_vi", label: "Mô tả (VI)", type: "textarea", full: true },
    { name: "desc_en", label: "Mô tả (EN)", type: "textarea", full: true },
  ],
  education: [
    { name: "school", label: "Trường", type: "text" },
    { name: "sort", label: "Thứ tự", type: "number" },
    { name: "start_date", label: "Bắt đầu", type: "text" },
    { name: "end_date", label: "Kết thúc", type: "text" },
    { name: "field_vi", label: "Ngành (VI)", type: "text" },
    { name: "field_en", label: "Ngành (EN)", type: "text" },
  ],
  skills: [
    { name: "name", label: "Kỹ năng", type: "text" },
    { name: "sort", label: "Thứ tự", type: "number" },
  ],
};

export const TABLE_LABELS: Record<TableName, string> = {
  profile: "Hồ sơ",
  projects: "Dự án",
  experiences: "Kinh nghiệm",
  education: "Học vấn",
  skills: "Kỹ năng",
};
