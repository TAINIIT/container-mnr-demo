import Link from "next/link";
import { OpsStatusBadge, MnrStatusBadge } from "./StatusBadge";
import type { Container } from "@/app/lib/mockData";

export default function ContainerCard({ container }: { container: Container }) {
  return (
    <div className="rounded-xl border bg-white p-4 shadow-sm flex flex-col gap-2">
      <div className="flex items-center justify-between">
        <h3 className="font-semibold text-slate-900">{container.containerNo}</h3>
        <span className="text-xs px-2 py-1 rounded-full bg-slate-100 text-slate-600">
          {container.shippingLine}
        </span>
      </div>
      <div className="flex items-center gap-2 text-xs text-slate-600">
        <span>Loại: {container.type}</span>
        <span>•</span>
        <span>Grade: {container.grade ?? "-"}</span>
      </div>
      <div className="flex items-center justify-between mt-1">
        <div className="flex flex-col gap-1">
          <OpsStatusBadge status={container.opsStatus} />
          <MnrStatusBadge status={container.mnrStatus} />
        </div>
        <Link
          href={`/containers/${container.id}`}
          className="text-xs font-medium text-brand-600 hover:text-brand-700"
        >
          Xem chi tiết →
        </Link>
      </div>
    </div>
  );
}
