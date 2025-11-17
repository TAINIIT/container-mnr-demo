import { NextResponse } from "next/server";
import { getContainerById } from "@/app/lib/mockData";

interface Params {
  params: { id: string };
}

export async function GET(_req: Request, { params }: Params) {
  const container = getContainerById(params.id);
  if (!container) {
    return new NextResponse("Not found", { status: 404 });
  }
  return NextResponse.json(container);
}
