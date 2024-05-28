import { headers } from "next/headers";
import { type NextRequest, NextResponse } from "next/server";
import { Team } from "../db";

const memo: { [key: string]: TeamMember | undefined } = {};
const teamMemberMap: { [key: string]: TeamMember } = {};

for (const department of Object.values(Team)) {
	for (const category of Object.values(department)) {
		for (const memberData of category.members) {
			const memberName = memberData.top.name
				.toLowerCase()
				.split(" ")[0] as string;
			teamMemberMap[memberName] = memberData;
		}
	}
}

export async function GET(
	_req: NextRequest,
	{ params }: { params: { name: string } },
) {
	const name = params.name;
	const memberNameLower = name.toLowerCase();

	if (memo[memberNameLower]) {
		return NextResponse.json(memo[memberNameLower], { status: 200 });
	}

	const memberData = teamMemberMap[memberNameLower];

	if (!memberData) {
		return NextResponse.json({ message: "Member not found" }, { status: 404 });
	}

	memo[memberNameLower] = memberData;

	return NextResponse.json(memberData, { status: 200 });
}

export async function OPTIONS(_req: NextRequest, _res: NextResponse) {
	return NextResponse.json({ message: "GET, HEAD" }, { status: 200 });
}

export async function HEAD(_req: NextRequest, _res: NextResponse) {
	const headerList = headers();
	return NextResponse.json({ message: headerList });
}
