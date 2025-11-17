import type { ContainerStatus, MnrStatus } from "@/app/lib/mockData";
import classNames from "classnames";

export function OpsStatusBadge({ status }: { status: ContainerStatus }) {
  const textMap: Record<ContainerStatus, string> = {
    STACKING: "Stacking",
    READY_TO_SURVEY: "Ready to Survey",
    ON_MNR_AREA: "On MnR Area",
    STACKED_BACK: "Stacked back"
  };

  const colorMap: Record<ContainerStatus, string> = {
    STACKING: "bg-slate-100 text-slate-700",
    READY_TO_SURVEY: "bg-amber-100 text-amber-800",
    ON_MNR_AREA: "bg-blue-100 text-blue-800",
    STACKED_BACK: "bg-emerald-100 text-emerald-800"
  };

  return (
    <span
      className={classNames(
        "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium",
        colorMap[status]
      )}
    >
      {textMap[status]}
    </span>
  );
}

export function MnrStatusBadge({ status }: { status: MnrStatus }) {
  const textMap: Record<MnrStatus, string> = {
    SU_NOT_YET_QUOTE: "SU – Not yet quote",
    SU_GRADED: "SU – Graded",
    SU_SENT_QUOTATION: "SU – Sent quotation",
    LO_APPROVED: "LO – Approved",
    LO_REJECTED: "LO – Rejected"
  };

  const colorMap: Record<MnrStatus, string> = {
    SU_NOT_YET_QUOTE: "bg-amber-100 text-amber-800",
    SU_GRADED: "bg-sky-100 text-sky-800",
    SU_SENT_QUOTATION: "bg-blue-100 text-blue-800",
    LO_APPROVED: "bg-emerald-100 text-emerald-800",
    LO_REJECTED: "bg-rose-100 text-rose-800"
  };

  return (
    <span
      className={classNames(
        "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium",
        colorMap[status]
      )}
    >
      {textMap[status]}
    </span>
  );
}
