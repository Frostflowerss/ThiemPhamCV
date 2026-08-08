"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { saveRow, type ActionResult } from "@/app/pntarch/actions";
import { FIELD_SPECS, type TableName, type FieldSpec } from "./fields";

type Row = Record<string, unknown>;

export function RecordForm({
  table,
  initial,
  onDone,
}: {
  table: TableName;
  initial: Row;
  onDone: () => void;
}) {
  const router = useRouter();
  const specs = FIELD_SPECS[table];
  const [values, setValues] = useState<Row>(() => normalise(initial, specs));
  const [saving, setSaving] = useState(false);
  const [msg, setMsg] = useState<{ ok: boolean; text: string } | null>(null);

  function set(name: string, v: unknown) {
    setValues((prev) => ({ ...prev, [name]: v }));
  }

  async function save() {
    setSaving(true);
    setMsg(null);
    const payload = serialise(values, specs, initial.id as string | undefined);
    const res: ActionResult = await saveRow(table, payload);
    setSaving(false);
    if (res.ok) {
      setMsg({ ok: true, text: "Đã lưu." });
      router.refresh();
      setTimeout(onDone, 400);
    } else {
      setMsg({ ok: false, text: res.error ?? "Lưu thất bại." });
    }
  }

  return (
    <div className="rounded-xl border border-line bg-surface p-5">
      <div className="grid gap-4 sm:grid-cols-2">
        {specs.map((f) => (
          <div key={f.name} className={f.full ? "sm:col-span-2" : ""}>
            <label htmlFor={f.name} className="mb-1 block text-xs font-medium text-muted">
              {f.label}
            </label>
            {f.type === "textarea" ? (
              <textarea
                id={f.name}
                rows={3}
                value={(values[f.name] as string) ?? ""}
                onChange={(e) => set(f.name, e.target.value)}
                className="w-full resize-y rounded-lg border border-line bg-bg px-3 py-2 text-sm outline-none focus:border-accent"
              />
            ) : (
              <input
                id={f.name}
                type={f.type === "number" ? "number" : "text"}
                value={(values[f.name] as string) ?? ""}
                onChange={(e) => set(f.name, e.target.value)}
                className="w-full rounded-lg border border-line bg-bg px-3 py-2 text-sm outline-none focus:border-accent"
              />
            )}
          </div>
        ))}
      </div>

      {msg && (
        <p
          role="status"
          className={`mt-4 rounded-lg px-3 py-2 text-sm ${
            msg.ok
              ? "border border-green-500/40 bg-green-500/10 text-green-500"
              : "border border-red-500/40 bg-red-500/10 text-red-500"
          }`}
        >
          {msg.text}
        </p>
      )}

      <div className="mt-5 flex gap-2">
        <button
          onClick={save}
          disabled={saving}
          className="rounded-lg bg-accent px-4 py-2 text-sm font-medium text-white disabled:opacity-50"
        >
          {saving ? "Đang lưu…" : "Lưu"}
        </button>
        <button
          onClick={onDone}
          className="rounded-lg border border-line px-4 py-2 text-sm hover:border-accent"
        >
          Hủy
        </button>
      </div>
    </div>
  );
}

function normalise(row: Row, specs: FieldSpec[]): Row {
  const out: Row = { id: row.id };
  for (const f of specs) {
    const v = row[f.name];
    out[f.name] = f.type === "tags" && Array.isArray(v) ? v.join(", ") : v ?? "";
  }
  return out;
}

function serialise(values: Row, specs: FieldSpec[], id?: string): Row {
  const out: Row = {};
  if (id) out.id = id;
  for (const f of specs) {
    const raw = values[f.name];
    if (f.type === "number") {
      out[f.name] = raw === "" || raw == null ? null : Number(raw);
    } else if (f.type === "tags") {
      out[f.name] = String(raw ?? "")
        .split(",")
        .map((s) => s.trim())
        .filter(Boolean);
    } else {
      out[f.name] = raw === "" ? null : raw;
    }
  }
  return out;
}
