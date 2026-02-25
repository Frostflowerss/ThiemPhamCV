export type Experience = {
  period: string;
  location: string;
  role: string;
  company: string;
  highlightsVN: string[];
  highlightsEN: string[];
};

export const experience: Experience[] = [
  {
    period: "2019 – 2021",
    location: "Hà Nội",
    role: "Thực tập – Triển khai (Drafting – Concept)",
    company: "EBROS C&T VIỆT NAM (Joint Stock Company)",
    highlightsVN: [
      "Thiết kế và phát triển ý tưởng cho dự án quy mô nhỏ (nhà ở, cơ sở tín ngưỡng).",
      "Triển khai bản vẽ kiến trúc – nội thất và phối cảnh (interior/exterior).",
      "Chuẩn bị bộ hồ sơ kỹ thuật phục vụ thi công.",
    ],
    highlightsEN: [
      "Designed and developed concepts for small-scale projects (residential, spiritual spaces).",
      "Produced architectural/interior drawings and rendered perspectives.",
      "Prepared construction documentation sets.",
    ],
  },
  {
    period: "2021 – 2022",
    location: "Hà Nội",
    role: "KTS Concept (Conceptual Architect)",
    company: "DLLC – Urban Development & Architectural Design Consultant JSC",
    highlightsVN: [
      "Tham gia hình thành ý tưởng và phát triển thiết kế cho dự án giáo dục/quy hoạch.",
      "Phối hợp phát triển concept và phương án tổng thể.",
      "Chuẩn bị bản vẽ kỹ thuật và phối cảnh phục vụ trình duyệt.",
    ],
    highlightsEN: [
      "Initiated and developed design concepts for educational and urban planning projects.",
      "Participated in master planning and concept development.",
      "Prepared technical drawings and rendered perspectives for presentations.",
    ],
  },
  {
    period: "2022 – Present",
    location: "Hà Nội",
    role: "Revit Specialist – BIM Coordinator – BIM Manager",
    company: "VNCC (VietNam National Construction Consultants) Consultant JSC",
    highlightsVN: [
      "Phát triển mô hình và triển khai bản vẽ kiến trúc/công nghiệp từ concept đến hồ sơ thi công.",
      "Điều phối BIM cho dự án quy mô lớn; kiểm soát chất lượng mô hình và phối hợp liên bộ môn.",
      "Tham gia lập/duy trì BEP, hỗ trợ đào tạo nội bộ và chuẩn hoá tiêu chuẩn BIM.",
    ],
    highlightsEN: [
      "Developed models and drawings for architectural/industrial projects from schematic to construction documentation.",
      "Coordinated BIM for large-scale projects; managed model QC and interdisciplinary coordination.",
      "Supported BEP, internal Revit training, and BIM standards adoption.",
    ],
  },
];
