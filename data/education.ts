export type Education = {
  period: string;
  school: string;
  degree: string;
  location: string;
};

export type Course = {
  year: string;
  title: string;
  provider: string;
  note: string;
  location: string;
};

export const education: Education[] = [
  {
    period: "2016 – 2021",
    school: "Trường Đại học Kiến trúc Hà Nội",
    degree: "Cử nhân Kiến trúc (The degree of Architect)",
    location: "Hà Nội",
  },
];

export const courses: Course[] = [
  {
    year: "2023",
    title: "BIM Coordinator Course",
    provider: "Vecas – Autodesk",
    note: "Chứng nhận Điều phối BIM (BIM Coordinator Certificate)",
    location: "Hà Nội",
  },
  {
    year: "2025",
    title: "The Application of GIS in Construction Planning",
    provider: "Vecas",
    note: "Chứng nhận hoàn thành khoá học GIS (Certificate of Completion)",
    location: "Hà Nội",
  },
];
