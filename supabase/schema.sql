-- ============================================================
-- pntarch — Supabase schema (Postgres)
-- Run in Supabase SQL Editor.
-- ============================================================

-- PROFILE (single row)
create table if not exists profile (
  id            uuid primary key default gen_random_uuid(),
  name          text not null,
  title_vi      text,
  title_en      text,
  bio_vi        text,
  bio_en        text,
  location      text,
  email         text,
  accent        text default '#3B82F6',
  avatar_url    text,
  created_at    timestamptz not null default now()
);

-- PROJECTS
create table if not exists projects (
  id            uuid primary key default gen_random_uuid(),
  slug          text unique not null,
  title_vi      text not null,
  title_en      text not null,
  summary_vi    text,
  summary_en    text,
  body_vi       text,
  body_en       text,
  role_vi       text,
  role_en       text,
  year          int,
  cover_url     text,
  tags          text[] default '{}',
  sort          int default 0,
  created_at    timestamptz not null default now()
);

-- EXPERIENCES
create table if not exists experiences (
  id            uuid primary key default gen_random_uuid(),
  company       text not null,
  role_vi       text,
  role_en       text,
  desc_vi       text,
  desc_en       text,
  start_date    text,
  end_date      text,
  sort          int default 0,
  created_at    timestamptz not null default now()
);

-- EDUCATION
create table if not exists education (
  id            uuid primary key default gen_random_uuid(),
  school        text not null,
  field_vi      text,
  field_en      text,
  start_date    text,
  end_date      text,
  sort          int default 0,
  created_at    timestamptz not null default now()
);

-- SKILLS
create table if not exists skills (
  id            uuid primary key default gen_random_uuid(),
  name          text not null,
  sort          int default 0,
  created_at    timestamptz not null default now()
);

-- GALLERY
create table if not exists gallery (
  id            uuid primary key default gen_random_uuid(),
  project_id    uuid references projects(id) on delete cascade,
  image_url     text not null,
  caption_vi    text,
  caption_en    text,
  sort          int default 0,
  created_at    timestamptz not null default now()
);

-- ============================================================
-- Row Level Security: public read-only. Writes go through the
-- service role key (server-side, bypasses RLS) in the admin panel.
-- ============================================================
alter table profile     enable row level security;
alter table projects    enable row level security;
alter table experiences enable row level security;
alter table education   enable row level security;
alter table skills      enable row level security;
alter table gallery     enable row level security;

create policy "public read profile"     on profile     for select using (true);
create policy "public read projects"    on projects    for select using (true);
create policy "public read experiences" on experiences for select using (true);
create policy "public read education"    on education   for select using (true);
create policy "public read skills"       on skills      for select using (true);
create policy "public read gallery"      on gallery     for select using (true);

-- ============================================================
-- Storage bucket for images (public read).
-- ============================================================
insert into storage.buckets (id, name, public)
values ('media', 'media', true)
on conflict (id) do nothing;

create policy "public read media"
  on storage.objects for select
  using (bucket_id = 'media');
