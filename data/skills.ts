export type Skill = { name: string; levelLabel: string; value: number; group: "BIM" | "Design" | "Office" };

export const skills: Skill[] = [
  { name: "Autodesk Revit", levelLabel: "Expert", value: 92, group: "BIM" },
  { name: "Autodesk Naviswork", levelLabel: "Expert", value: 88, group: "BIM" },
  { name: "Autodesk AutoCAD", levelLabel: "Beginner", value: 55, group: "Design" },
  { name: "SketchUp", levelLabel: "Beginner", value: 55, group: "Design" },
  { name: "Lumion", levelLabel: "Skillful", value: 72, group: "Design" },

  { name: "Adobe Photoshop", levelLabel: "Expert", value: 90, group: "Design" },
  { name: "Adobe Illustrator", levelLabel: "Experienced", value: 78, group: "Design" },
  { name: "Adobe InDesign", levelLabel: "Experienced", value: 76, group: "Design" },
  { name: "Microsoft Power BI", levelLabel: "Experienced", value: 74, group: "Office" },
  { name: "Microsoft Office", levelLabel: "Experienced", value: 78, group: "Office" },
];
