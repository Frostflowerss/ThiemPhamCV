export type Project = {
  id: string;
  titleVI: string;
  titleEN: string;
  roleVI: string;
  roleEN: string;
  period: string;
  locationVI: string;
  locationEN?: string;
  classVI?: string;
  classEN?: string;
  descriptionVI: string;
  descriptionEN: string;
  highlightsVI?: string[];
  highlightsEN?: string[];
  images: string[];
};

export const projects: Project[] = [
  {
    id: "long-thanh-airport",
    titleVI: "Sân bay quốc tế Long Thành",
    titleEN: "Long Thanh International Airport",
    roleVI: "Điều phối BIM / Quản lý BIM",
    roleEN: "BIM Coordinator / BIM Manager",
    period: "2022 – Present",
    locationVI: "Đồng Nai",
    locationEN: "Dong Nai",
    classVI: "Công trình cấp: Đặc biệt",
    classEN: "Construction class: Special",
    descriptionVI:
      "Điều phối BIM và kiểm soát chất lượng mô hình; phối hợp liên bộ môn theo BEP và tiêu chuẩn dự án.",
    descriptionEN:
      "Coordinated BIM and model quality control; supported interdisciplinary coordination aligned with BEP and project standards.",
    highlightsVI: ["Lập/duy trì BEP, QC mô hình", "Phối hợp liên bộ môn", "Bàn giao hồ sơ theo tiến độ"],
    highlightsEN: ["BEP & model QC", "Interdisciplinary coordination", "Schedule-driven deliverables"],
    images: ["/projects/p1.jpg", "/projects/p2.jpg", "/projects/p3.jpg"],
  },
  {
    id: "viettel-tower-da-nang",
    titleVI: "Tòa nhà Viettel Đà Nẵng",
    titleEN: "Viettel Tower Da Nang",
    roleVI: "Điều phối BIM",
    roleEN: "BIM Coordinator",
    period: "2022 – 2024",
    locationVI: "Đà Nẵng",
    locationEN: "Da Nang",
    classVI: "Công trình cấp: I",
    classEN: "Construction class: I",
    descriptionVI:
      "Triển khai mô hình Revit và bộ hồ sơ phục vụ thi công; tối ưu cấu trúc thông tin và chuẩn hoá naming/LOD theo giai đoạn.",
    descriptionEN:
      "Implemented Revit models and construction documentation; optimized information structure and standardized naming/LOD by phase.",
    highlightsVI: ["Triển khai Revit", "Bàn giao bản vẽ", "Chuẩn hoá tiêu chuẩn"],
    highlightsEN: ["Revit implementation", "Drawing set delivery", "Standardization"],
    images: ["/projects/p2.jpg"],
  },
  {
    id: "vtv-s1-central-square",
    titleVI: "Trường quay VTV.S1 & Quảng trường trung tâm",
    titleEN: "VTV.S1 Studio & Central Square",
    roleVI: "Điều phối BIM",
    roleEN: "BIM Coordinator",
    period: "2023 – 2024",
    locationVI: "—",
    locationEN: "",
    classVI: "Công trình cấp: II",
    classEN: "Construction class: II",
    descriptionVI:
      "Điều phối mô hình, đối soát xung đột và hỗ trợ team triển khai bản vẽ kỹ thuật theo tiến độ bàn giao.",
    descriptionEN:
      "Coordinated models, supported clash review, and assisted technical drawing delivery aligned with schedule.",
    highlightsVI: ["Hỗ trợ đối soát xung đột", "Phối hợp team", "Đầu ra theo tiến độ"],
    highlightsEN: ["Clash review support", "Team coordination", "Schedule-driven output"],
    images: ["/projects/p3.jpg"],
  },
];
