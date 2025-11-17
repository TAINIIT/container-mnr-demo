import LayoutShell from "./components/LayoutShell";
import { containersMock } from "./lib/mockData";
import ContainerCard from "./components/ContainerCard";

export default function HomePage() {
  const total = containersMock.length;
  const readyToSurvey = containersMock.filter(
    c => c.opsStatus === "READY_TO_SURVEY"
  ).length;
  const onMnR = containersMock.filter(
    c => c.opsStatus === "ON_MNR_AREA"
  ).length;
  const approved = containersMock.filter(
    c => c.mnrStatus === "LO_APPROVED"
  ).length;

  return (
    <LayoutShell>
      <div className="space-y-6">
        <div className="flex flex-col gap-2">
          <h1 className="text-xl md:text-2xl font-semibold text-slate-900">
            Dashboard demo hệ thống sửa chữa container
          </h1>
          <p className="text-sm text-slate-600">
            Đây là bản demo chạy trên dữ liệu giả để anh trình diễn flow với khách hàng.
          </p>
        </div>

        {/* KPI cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="rounded-xl border bg-white p-4 shadow-sm">
            <div className="text-xs text-slate-500">Tổng container (demo)</div>
            <div className="mt-2 text-2xl font-semibold text-slate-900">{total}</div>
          </div>
          <div className="rounded-xl border bg-white p-4 shadow-sm">
            <div className="text-xs text-slate-500">Ready to Survey</div>
            <div className="mt-2 text-2xl font-semibold text-amber-600">{readyToSurvey}</div>
          </div>
          <div className="rounded-xl border bg-white p-4 shadow-sm">
            <div className="text-xs text-slate-500">On MnR Area</div>
            <div className="mt-2 text-2xl font-semibold text-blue-600">{onMnR}</div>
          </div>
          <div className="rounded-xl border bg-white p-4 shadow-sm">
            <div className="text-xs text-slate-500">LO – Approved</div>
            <div className="mt-2 text-2xl font-semibold text-emerald-600">{approved}</div>
          </div>
        </div>

        {/* List cards */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <h2 className="text-base font-semibold text-slate-900">
              Container gần đây
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            {containersMock.map(c => (
              <ContainerCard key={c.id} container={c} />
            ))}
          </div>
        </div>
      </div>
    </LayoutShell>
  );
}
