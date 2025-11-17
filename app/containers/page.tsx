import LayoutShell from "../components/LayoutShell";
import { containersMock } from "../lib/mockData";
import { OpsStatusBadge, MnrStatusBadge } from "../components/StatusBadge";
import Link from "next/link";

export default function ContainersPage() {
  return (
    <LayoutShell>
      <div className="space-y-4">
        <div>
          <h1 className="text-xl md:text-2xl font-semibold text-slate-900">
            Danh sách container (demo)
          </h1>
          <p className="text-sm text-slate-600">
            Dữ liệu mẫu được mock trong hệ thống. Khi làm bản thật sẽ đọc từ database.
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-sm border">
          <div className="px-4 py-3 border-b flex items-center justify-between">
            <div>
              <h2 className="font-semibold text-slate-900">Container</h2>
              <p className="text-xs text-slate-500">
                Có thể bấm vào từng dòng để xem chi tiết flow MnR.
              </p>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead className="bg-slate-50 text-xs uppercase text-slate-500 border-b">
                <tr>
                  <th className="px-4 py-2 text-left">Container</th>
                  <th className="px-4 py-2 text-left">Shipping line</th>
                  <th className="px-4 py-2 text-left">Loại</th>
                  <th className="px-4 py-2 text-left">Ops status</th>
                  <th className="px-4 py-2 text-left">MnR status</th>
                  <th className="px-4 py-2 text-left">Grade</th>
                  <th className="px-4 py-2 text-right">Chi tiết</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {containersMock.map(c => (
                  <tr key={c.id} className="hover:bg-slate-50">
                    <td className="px-4 py-2 font-medium text-slate-900">
                      {c.containerNo}
                    </td>
                    <td className="px-4 py-2 text-slate-700">{c.shippingLine}</td>
                    <td className="px-4 py-2 text-slate-700">{c.type}</td>
                    <td className="px-4 py-2">
                      <OpsStatusBadge status={c.opsStatus} />
                    </td>
                    <td className="px-4 py-2">
                      <MnrStatusBadge status={c.mnrStatus} />
                    </td>
                    <td className="px-4 py-2 text-slate-700">{c.grade ?? "-"}</td>
                    <td className="px-4 py-2 text-right">
                      <Link
                        href={`/containers/${c.id}`}
                        className="inline-flex items-center text-xs font-medium text-brand-600 hover:text-brand-700"
                      >
                        Xem chi tiết →
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </LayoutShell>
  );
}
