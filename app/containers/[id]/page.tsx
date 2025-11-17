import LayoutShell from "@/app/components/LayoutShell";
import { getContainerById } from "@/app/lib/mockData";
import { OpsStatusBadge, MnrStatusBadge } from "@/app/components/StatusBadge";
import Link from "next/link";

interface Params {
  params: { id: string };
}

export default function ContainerDetailPage({ params }: Params) {
  const container = getContainerById(params.id);

  if (!container) {
    return (
      <LayoutShell>
        <div className="space-y-2">
          <h1 className="text-xl font-semibold text-slate-900">
            Container không tồn tại
          </h1>
          <Link href="/containers" className="text-sm text-brand-600">
            ← Quay lại danh sách container
          </Link>
        </div>
      </LayoutShell>
    );
  }

  return (
    <LayoutShell>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-xl md:text-2xl font-semibold text-slate-900">
              {container.containerNo}
            </h1>
            <p className="text-sm text-slate-600">
              Shipping line: {container.shippingLine} • Loại: {container.type}
            </p>
          </div>
          <Link
            href="/containers"
            className="text-sm text-brand-600 hover:text-brand-700"
          >
            ← Quay lại danh sách
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          <div className="md:col-span-2 space-y-4">
            <div className="rounded-xl border bg-white p-4 shadow-sm space-y-3">
              <h2 className="text-sm font-semibold text-slate-900">
                Thông tin trạng thái
              </h2>
              <div className="flex flex-wrap gap-3 text-sm">
                <div className="flex flex-col gap-1">
                  <span className="text-xs text-slate-500">Ops status</span>
                  <OpsStatusBadge status={container.opsStatus} />
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-xs text-slate-500">MnR status</span>
                  <MnrStatusBadge status={container.mnrStatus} />
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-xs text-slate-500">Grade</span>
                  <span className="text-sm text-slate-800">
                    {container.grade ?? "Chưa gán"}
                  </span>
                </div>
              </div>
            </div>

            <div className="rounded-xl border bg-white p-4 shadow-sm space-y-3">
              <h2 className="text-sm font-semibold text-slate-900">
                Ảnh minh hoạ (demo)
              </h2>
              <p className="text-xs text-slate-500">
                Ở bản chính thức, khu vực này sẽ hiển thị ảnh trước/sau sửa chữa, video, v.v.
              </p>
              <div className="grid grid-cols-2 gap-3">
                <div className="aspect-video rounded-lg bg-slate-100 flex items-center justify-center text-xs text-slate-500">
                  Hình Survey – Before
                </div>
                <div className="aspect-video rounded-lg bg-slate-100 flex items-center justify-center text-xs text-slate-500">
                  Hình Damage detail
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="rounded-xl border bg-white p-4 shadow-sm space-y-2">
              <h2 className="text-sm font-semibold text-slate-900">
                Ghi chú demo
              </h2>
              <p className="text-xs text-slate-600">
                Đây là bản demo UI. Backend hiện đang dùng dữ liệu mock. Khi triển khai
                bản thật, các nút thao tác, lịch sử status, quotation, kết quả approve
                sẽ xuất hiện ở khu vực này.
              </p>
            </div>
          </div>
        </div>
      </div>
    </LayoutShell>
  );
}
