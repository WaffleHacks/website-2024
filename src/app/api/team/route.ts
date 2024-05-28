import { headers } from "next/headers";
import { type NextRequest, NextResponse } from "next/server";
import { Team } from "./db";

export const GET = async (_req: NextRequest, _res: NextResponse) => {
	return NextResponse.json(Team, {
		status: 200,
	});
};

export async function OPTIONS(_req: NextRequest, _res: NextResponse) {
	return NextResponse.json({ message: "GET, HEAD" });
}

export async function HEAD(_req: NextRequest, _res: NextResponse) {
	const headerList = headers();
	return NextResponse.json({ message: headerList });
}
