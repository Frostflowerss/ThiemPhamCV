export type Skill = {
  name: string; // software name (proper noun)
  levelVI: string;
  levelEN: string;
  value: number;
};

export const skills: Skill[] = [
  { name: "Autodesk Revit", levelVI: "Chuyên gia", levelEN: "Expert", value: 92 },
  { name: "Autodesk Navisworks", levelVI: "Chuyên gia", levelEN: "Expert", value: 90 },
  { name: "Autodesk AutoCAD", levelVI: "Cơ bản", levelEN: "Beginner", value: 55 },
  { name: "SketchUp", levelVI: "Cơ bản", levelEN: "Beginner", value: 55 },
  { name: "Lumion", levelVI: "Khá", levelEN: "Skillful", value: 68 },

  { name: "Adobe Photoshop", levelVI: "Chuyên gia", levelEN: "Expert", value: 90 },
  { name: "Adobe Illustrator", levelVI: "Thành thạo", levelEN: "Experienced", value: 78 },
  { name: "Adobe InDesign", levelVI: "Thành thạo", levelEN: "Experienced", value: 78 },
  { name: "Microsoft Power BI", levelVI: "Thành thạo", levelEN: "Experienced", value: 78 },
  { name: "Microsoft Office", levelVI: "Thành thạo", levelEN: "Experienced", value: 78 },
];
