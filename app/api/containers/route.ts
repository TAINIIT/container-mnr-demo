import { NextResponse } from "next/server";
import { containersMock } from "@/app/lib/mockData";

export async function GET() {
  return NextResponse.json(containersMock);
}
