export type Project = {
  id: string;
  image: string;

  periodVI: string;
  periodEN: string;

  titleVI: string;
  titleEN: string;

  roleVI: string;
  roleEN: string;

  locationVI: string;
  locationEN: string;
};

export const projects: Project[] = [
  {
    id: "p1",
    image: "/projects/p1.jpg",

    periodVI: "2022 – Hiện tại",
    periodEN: "2022 – Present",

    titleVI: "Sân bay quốc tế Long Thành",
    titleEN: "Long Thanh International Airport",

    roleVI: "Điều phối BIM / Quản lý BIM",
    roleEN: "BIM Coordinator / BIM Manager",

    locationVI: "Đồng Nai",
    locationEN: "Dong Nai",
  },
  {
    id: "p2",
    image: "/projects/p2.jpg",

    periodVI: "2022 – 2024",
    periodEN: "2022 – 2024",

    titleVI: "Tòa nhà Viettel Đà Nẵng",
    titleEN: "Viettel Tower Da Nang",

    roleVI: "Điều phối BIM",
    roleEN: "BIM Coordinator",

    locationVI: "Đà Nẵng",
    locationEN: "Da Nang",
  },
  {
    id: "p3",
    image: "/projects/p3.jpg",

    periodVI: "2023 – 2024",
    periodEN: "2023 – 2024",

    titleVI: "Trường quay VTV S1 & Quảng trường trung tâm",
    titleEN: "VTV S1 Studio & Central Square",

    roleVI: "Điều phối BIM",
    roleEN: "BIM Coordinator",

    locationVI: "Hà Nội",
    locationEN: "Hanoi",
  },
  {
    id: "p4",
    image: "/projects/p4.jpg",

    periodVI: "2021 – 2023",
    periodEN: "2021 – 2023",

    titleVI: "Khu nghỉ dưỡng Lâm Phú Yên",
    titleEN: "Lam Resort Phu Yen",

    roleVI: "Triển khai BIM",
    roleEN: "BIM Implementation",

    locationVI: "Phú Yên",
    locationEN: "Phu Yen",
  },
  {
    id: "p5",
    image: "/projects/p5.jpg",

    periodVI: "2020 – 2022",
    periodEN: "2020 – 2022",

    titleVI: "Dự án nhà ở xã hội X2",
    titleEN: "Social Housing Project X2",

    roleVI: "Triển khai chính",
    roleEN: "Main Deployment",

    locationVI: "Hà Nội",
    locationEN: "Hanoi",
  },
];
