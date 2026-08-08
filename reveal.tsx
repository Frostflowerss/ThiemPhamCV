"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import type {
  Profile,
  Project,
  Experience,
  Education,
  Skill,
} from "@/lib/types";
import { RecordForm } from "./record-form";
import { ListSection } from "./section";
import { TABLE_LABELS, type TableName } from "./fields";

const TABS: TableName[] = [
  "profile",
  "projects",
  "experiences",
  "education",
  "skills",
];

export function AdminDashboard({
  profile,
  projects,
  experiences,
  education,
  skills,
}: {
  profile: Profile | null;
  projects: Project[];
  experiences: Experience[];
  education: Education[];
  skills: Skill[];
}) {
  const router = useRouter();
  const [tab, setTab] = useState<TableName>("profile");

  async function logout() {
    await fetch("/api/auth/logout", { method: "POST" });
    router.replace("/pntarch/login");
    router.refresh();
  }

  return (
    <div className="mx-auto max-w-4xl px-5 py-10">
      <header className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="font-display text-2xl font-semibold">Bảng điều khiển</h1>
          <p className="text-sm text-muted">Cập nhật nội dung website</p>
        </div>
        <button
          onClick={logout}
          className="rounded-lg border border-line px-4 py-2 text-sm hover:border-accent"
        >
          Đăng xuất
        </button>
      </header>

      <nav className="mb-6 flex flex-wrap gap-1 border-b border-line">
        {TABS.map((t) => (
          <button
            key={t}
            onClick={() => setTab(t)}
            aria-current={tab === t ? "page" : undefined}
            className={`-mb-px border-b-2 px-4 py-2 text-sm transition-colors ${
              tab === t
                ? "border-accent text-ink"
                : "border-transparent text-muted hover:text-ink"
            }`}
          >
            {TABLE_LABELS[t]}
          </button>
        ))}
      </nav>

      {tab === "profile" && (
        <RecordForm
          table="profile"
          initial={(profile as unknown as Record<string, unknown>) ?? { id: "" }}
          onDone={() => router.refresh()}
        />
      )}

      {tab === "projects" && (
        <ListSection
          table="projects"
          rows={projects as never[]}
          primaryField="title_vi"
          secondaryField="slug"
        />
      )}

      {tab === "experiences" && (
        <ListSection
          table="experiences"
          rows={experiences as never[]}
          primaryField="company"
          secondaryField="role_vi"
        />
      )}

      {tab === "education" && (
        <ListSection
          table="education"
          rows={education as never[]}
          primaryField="school"
          secondaryField="field_vi"
        />
      )}

      {tab === "skills" && (
        <ListSection
          table="skills"
          rows={skills as never[]}
          primaryField="name"
        />
      )}
    </div>
  );
}
