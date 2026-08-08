"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { deleteRow } from "@/app/pntarch/actions";
import { RecordForm } from "./record-form";
import { type TableName } from "./fields";

type Row = Record<string, unknown> & { id: string };

/** List + inline editor for a multi-row table. */
export function ListSection({
  table,
  rows,
  primaryField,
  secondaryField,
}: {
  table: TableName;
  rows: Row[];
  primaryField: string;
  secondaryField?: string;
}) {
  const router = useRouter();
  const [editing, setEditing] = useState<string | null>(null); // id or "new"
  const [busy, setBusy] = useState<string | null>(null);

  async function remove(id: string) {
    if (!confirm("Xóa mục này?")) return;
    setBusy(id);
    const res = await deleteRow(table, id);
    setBusy(null);
    if (res.ok) router.refresh();
    else alert(res.error ?? "Xóa thất bại.");
  }

  return (
    <div className="space-y-3">
      {rows.length === 0 && (
        <p className="rounded-lg border border-dashed border-line px-4 py-8 text-center text-sm text-muted">
          Chưa có dữ liệu.
        </p>
      )}

      {rows.map((row) =>
        editing === row.id ? (
          <RecordForm
            key={row.id}
            table={table}
            initial={row}
            onDone={() => setEditing(null)}
          />
        ) : (
          <div
            key={row.id}
            className="flex items-center justify-between rounded-lg border border-line bg-surface px-4 py-3"
          >
            <div className="min-w-0">
              <p className="truncate font-medium">{String(row[primaryField] ?? "—")}</p>
              {secondaryField && (
                <p className="truncate text-sm text-muted">
                  {String(row[secondaryField] ?? "")}
                </p>
              )}
            </div>
            <div className="flex shrink-0 gap-2">
              <button
                onClick={() => setEditing(row.id)}
                className="rounded-md border border-line px-3 py-1.5 text-sm hover:border-accent"
              >
                Sửa
              </button>
              <button
                onClick={() => remove(row.id)}
                disabled={busy === row.id}
                className="rounded-md border border-red-500/40 px-3 py-1.5 text-sm text-red-500 hover:bg-red-500/10 disabled:opacity-50"
              >
                {busy === row.id ? "…" : "Xóa"}
              </button>
            </div>
          </div>
        )
      )}

      {editing === "new" ? (
        <RecordForm
          table={table}
          initial={{ id: "" }}
          onDone={() => setEditing(null)}
        />
      ) : (
        <button
          onClick={() => setEditing("new")}
          className="w-full rounded-lg border border-dashed border-line py-3 text-sm text-muted transition-colors hover:border-accent hover:text-ink"
        >
          + Thêm mục
        </button>
      )}
    </div>
  );
}
