export type ContainerStatus = "STACKING" | "READY_TO_SURVEY" | "ON_MNR_AREA" | "STACKED_BACK";

export type MnrStatus =
  | "SU_NOT_YET_QUOTE"
  | "SU_GRADED"
  | "SU_SENT_QUOTATION"
  | "LO_APPROVED"
  | "LO_REJECTED";

export interface Container {
  id: string;
  containerNo: string;
  shippingLine: string;
  type: string;
  opsStatus: ContainerStatus;
  mnrStatus: MnrStatus;
  grade?: string;
  gateInTime?: string;
}

export const containersMock: Container[] = [
  {
    id: "1",
    containerNo: "MSCU1234567",
    shippingLine: "MSC",
    type: "20DC",
    opsStatus: "READY_TO_SURVEY",
    mnrStatus: "SU_NOT_YET_QUOTE",
    grade: "B",
    gateInTime: "2025-11-15T09:30:00Z"
  },
  {
    id: "2",
    containerNo: "MAEU7654321",
    shippingLine: "MAERSK",
    type: "40HC",
    opsStatus: "ON_MNR_AREA",
    mnrStatus: "SU_SENT_QUOTATION",
    grade: "C",
    gateInTime: "2025-11-15T10:15:00Z"
  },
  {
    id: "3",
    containerNo: "ONEU9988776",
    shippingLine: "ONE",
    type: "40DC",
    opsStatus: "STACKED_BACK",
    mnrStatus: "LO_APPROVED",
    grade: "A",
    gateInTime: "2025-11-14T16:45:00Z"
  }
];

export function getContainerById(id: string): Container | undefined {
  return containersMock.find(c => c.id === id);
}
