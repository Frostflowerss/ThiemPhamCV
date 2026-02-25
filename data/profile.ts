export type ContactLink = { label: string; value: string; href?: string };

export type Profile = {
  name: string;
  title: string;
  subtitle?: string;
  avatarSrc: string;
  contacts: ContactLink[];
  summaryVN: string;
  summaryEN: string;
  downloadCvHref: string;
};

export const profile: Profile = {
  name: "PHẠM NGỌC THIÊM",
  title: "ARCHITECT",
  subtitle: "6+ Years experience",
  avatarSrc: "/uploads/avatar.png",
  downloadCvHref: "/uploads/cv.pdf",
  contacts: [
    { label: "Phone", value: "(+84) 888284998" },
    { label: "Email", value: "pnt.architect.work@gmail.com", href: "mailto:pnt.architect.work@gmail.com" },
    { label: "Address", value: "S.106 Vinhomes Smart City, Tây Mỗ, Nam Từ Liêm, Hà Nội" },
  ],
  summaryVN:
    "Kiến trúc sư với hơn 6 năm kinh nghiệm trong các dự án nhà ở, cơ sở giáo dục và quy hoạch đô thị. Thành thạo phối hợp BIM (triển khai mô hình, điều phối, kiểm soát chất lượng), đồng thời hỗ trợ nhóm tối ưu quy trình và tiêu chuẩn hoá tài liệu kỹ thuật.",
  summaryEN:
    "Architect with 6+ years of experience in residential, educational, and urban planning projects. Skilled in BIM coordination, model implementation, quality control, and technical documentation, supporting team collaboration and workflow standardization.",
};
