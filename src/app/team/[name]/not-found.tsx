import Link from "next/link";

export default function NotFound() {
	return (
		<div className="text-center">
			<p className="mt-10">This team member could not be found.</p>
			<Link href="/">Back to Home</Link>
		</div>
	);
}
