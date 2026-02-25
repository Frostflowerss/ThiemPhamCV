export type Project = {
  id: string;
  title: string;
  role: string;
  period: string;
  location: string;
  classText?: string;
  description: string;
  highlights?: string[];
  images: string[];
};

export const projects: Project[] = [
  {
    id: "long-thanh-airport",
    title: "Long Thanh International Airport",
    role: "BIM Coordinator / BIM Manager",
    period: "2022 – Present",
    location: "Đồng Nai",
    classText: "Construction class: Special",
    description:
      "Điều phối BIM và kiểm soát chất lượng mô hình; phối hợp liên bộ môn theo BEP và tiêu chuẩn dự án.",
    highlights: ["BEP & model QC", "Interdisciplinary coordination", "Delivery-ready documentation"],
    images: ["/projects/p1.jpg", "/projects/p2.jpg", "/projects/p3.jpg"],
  },
  {
    id: "viettel-tower-da-nang",
    title: "Viettel Tower Đà Nẵng",
    role: "BIM Coordinator",
    period: "2022 – 2024",
    location: "Đà Nẵng",
    classText: "Construction class: I",
    description:
      "Triển khai mô hình Revit và bộ hồ sơ phục vụ thi công, tối ưu cấu trúc thông tin và chuẩn hoá naming/LOD theo giai đoạn.",
    highlights: ["Revit implementation", "Drawing set delivery", "Standardization"],
    images: ["/projects/p2.jpg"],
  },
  {
    id: "vtv-s1-central-square",
    title: "Trường quay VTV.S1 & Quảng trường trung tâm",
    role: "BIM Coordinator",
    period: "2023 – 2024",
    location: "—",
    classText: "Construction class: II",
    description:
      "Điều phối mô hình, đối soát xung đột và hỗ trợ team triển khai bản vẽ kỹ thuật theo tiến độ bàn giao.",
    highlights: ["Clash review support", "Coordination", "Schedule-driven output"],
    images: ["/projects/p3.jpg"],
  },
  {
    id: "Test xem sao",
    title: "Trường quay VTV.S1 & Quảng trường trung tâm",
    role: "BIM Coordinator",
    period: "2023 – 2024",
    location: "—",
    classText: "Construction class: II",
    description:
      "Điều phối mô hình, đối soát xung đột và hỗ trợ team triển khai bản vẽ kỹ thuật theo tiến độ bàn giao.",
    highlights: ["Clash review support", "Coordination", "Schedule-driven output"],
    images: ["/projects/p4.jpg"],
  },
  {
    id: "vádfádf",
    title: "Trường quay VTV.S1 & Quảng trường trung tâm",
    role: "BIM Coordinator",
    period: "2023 – 2024",
    location: "—",
    classText: "Construction class: II",
    description:
      "Điều phối mô hình, đối soát xung đột và hỗ trợ team triển khai bản vẽ kỹ thuật theo tiến độ bàn giao.",
    highlights: ["Clash review support", "Coordination", "Schedule-driven output"],
    images: ["/projects/p5.jpg"],
  },
];
