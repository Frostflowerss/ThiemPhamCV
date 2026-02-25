export type Project = {
  id: string;

  titleVI: string;
  titleEN: string;

  roleVI: string;
  roleEN: string;

  periodVI: string;
  periodEN: string;

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

    periodVI: "2022 – Hiện tại",
    periodEN: "2022 – Present",

    locationVI: "Đồng Nai",
    locationEN: "Dong Nai",

    classVI: "Công trình cấp: Đặc biệt",
    classEN: "Construction class: Special",

    descriptionVI:
      "Điều phối BIM và kiểm soát chất lượng mô hình; phối hợp liên bộ môn theo BEP và tiêu chuẩn dự án.",

    descriptionEN:
      "Coordinated BIM and model quality control; supported interdisciplinary coordination aligned with BEP and project standards.",

    highlightsVI: [
      "Lập và duy trì BEP",
      "Kiểm soát chất lượng mô hình",
      "Phối hợp liên bộ môn",
      "Bàn giao hồ sơ theo tiến độ",
    ],

    highlightsEN: [
      "BEP development & maintenance",
      "Model quality control",
      "Interdisciplinary coordination",
      "Schedule-driven deliverables",
    ],

    images: [
      "/projects/p1.jpg",
    ],
  },

  {
    id: "viettel-tower-da-nang",

    titleVI: "Tòa nhà Viettel Đà Nẵng",
    titleEN: "Viettel Tower Da Nang",

    roleVI: "Điều phối BIM",
    roleEN: "BIM Coordinator",

    periodVI: "2022 – 2024",
    periodEN: "2022 – 2024",

    locationVI: "Đà Nẵng",
    locationEN: "Da Nang",

    classVI: "Công trình cấp: I",
    classEN: "Construction class: I",

    descriptionVI:
      "Triển khai mô hình Revit và bộ hồ sơ phục vụ thi công; tối ưu cấu trúc thông tin và chuẩn hoá naming/LOD theo giai đoạn.",

    descriptionEN:
      "Implemented Revit models and construction documentation; optimized information structure and standardized naming/LOD by phase.",

    highlightsVI: [
      "Triển khai mô hình Revit",
      "Bàn giao bộ bản vẽ thi công",
      "Chuẩn hoá quy trình & tiêu chuẩn",
    ],

    highlightsEN: [
      "Revit model implementation",
      "Construction drawing delivery",
      "Process & standard optimization",
    ],

    images: [
      "/projects/p2.jpg",
    ],
  },

  {
    id: "vtv-s1-central-square",

    titleVI: "Trường quay VTV.S1 & Quảng trường trung tâm",
    titleEN: "VTV.S1 Studio & Central Square",

    roleVI: "Điều phối BIM",
    roleEN: "BIM Coordinator",

    periodVI: "2023 – 2024",
    periodEN: "2023 – 2024",

    locationVI: "Hà Nội",
    locationEN: "Hanoi",

    classVI: "Công trình cấp: II",
    classEN: "Construction class: II",

    descriptionVI:
      "Điều phối mô hình, đối soát xung đột và hỗ trợ team triển khai bản vẽ kỹ thuật theo tiến độ bàn giao.",

    descriptionEN:
      "Coordinated BIM models, supported clash detection, and assisted technical drawing delivery aligned with project schedule.",

    highlightsVI: [
      "Đối soát xung đột",
      "Phối hợp nhóm triển khai",
      "Đảm bảo đầu ra theo tiến độ",
    ],

    highlightsEN: [
      "Clash detection support",
      "Team coordination",
      "Schedule-aligned delivery",
    ],

    images: [
      "/projects/p3.jpg",
    ],
  },
    {
    id: "long-thanh-airport",

    titleVI: "Sân bay quốc tế Long Thành",
    titleEN: "Long Thanh International Airport",

    roleVI: "Điều phối BIM / Quản lý BIM",
    roleEN: "BIM Coordinator / BIM Manager",

    periodVI: "2022 – Hiện tại",
    periodEN: "2022 – Present",

    locationVI: "Đồng Nai",
    locationEN: "Dong Nai",

    classVI: "Công trình cấp: Đặc biệt",
    classEN: "Construction class: Special",

    descriptionVI:
      "Điều phối BIM và kiểm soát chất lượng mô hình; phối hợp liên bộ môn theo BEP và tiêu chuẩn dự án.",

    descriptionEN:
      "Coordinated BIM and model quality control; supported interdisciplinary coordination aligned with BEP and project standards.",

    highlightsVI: [
      "Lập và duy trì BEP",
      "Kiểm soát chất lượng mô hình",
      "Phối hợp liên bộ môn",
      "Bàn giao hồ sơ theo tiến độ",
    ],

    highlightsEN: [
      "BEP development & maintenance",
      "Model quality control",
      "Interdisciplinary coordination",
      "Schedule-driven deliverables",
    ],

    images: [
      "/projects/p4.jpg",
    ],
  },
    {
    id: "long-thanh-airport",

    titleVI: "Sân bay quốc tế Long Thành",
    titleEN: "Long Thanh International Airport",

    roleVI: "Điều phối BIM / Quản lý BIM",
    roleEN: "BIM Coordinator / BIM Manager",

    periodVI: "2022 – Hiện tại",
    periodEN: "2022 – Present",

    locationVI: "Đồng Nai",
    locationEN: "Dong Nai",

    classVI: "Công trình cấp: Đặc biệt",
    classEN: "Construction class: Special",

    descriptionVI:
      "Điều phối BIM và kiểm soát chất lượng mô hình; phối hợp liên bộ môn theo BEP và tiêu chuẩn dự án.",

    descriptionEN:
      "Coordinated BIM and model quality control; supported interdisciplinary coordination aligned with BEP and project standards.",

    highlightsVI: [
      "Lập và duy trì BEP",
      "Kiểm soát chất lượng mô hình",
      "Phối hợp liên bộ môn",
      "Bàn giao hồ sơ theo tiến độ",
    ],

    highlightsEN: [
      "BEP development & maintenance",
      "Model quality control",
      "Interdisciplinary coordination",
      "Schedule-driven deliverables",
    ],

    images: [
      "/projects/p5.jpg",
    ],
  },
    {
    id: "long-thanh-airport",

    titleVI: "Sân bay quốc tế Long Thành",
    titleEN: "Long Thanh International Airport",

    roleVI: "Điều phối BIM / Quản lý BIM",
    roleEN: "BIM Coordinator / BIM Manager",

    periodVI: "2022 – Hiện tại",
    periodEN: "2022 – Present",

    locationVI: "Đồng Nai",
    locationEN: "Dong Nai",

    classVI: "Công trình cấp: Đặc biệt",
    classEN: "Construction class: Special",

    descriptionVI:
      "Điều phối BIM và kiểm soát chất lượng mô hình; phối hợp liên bộ môn theo BEP và tiêu chuẩn dự án.",

    descriptionEN:
      "Coordinated BIM and model quality control; supported interdisciplinary coordination aligned with BEP and project standards.",

    highlightsVI: [
      "Lập và duy trì BEP",
      "Kiểm soát chất lượng mô hình",
      "Phối hợp liên bộ môn",
      "Bàn giao hồ sơ theo tiến độ",
    ],

    highlightsEN: [
      "BEP development & maintenance",
      "Model quality control",
      "Interdisciplinary coordination",
      "Schedule-driven deliverables",
    ],

    images: [
      "/projects/p6.jpg",
    ],
  },
];
