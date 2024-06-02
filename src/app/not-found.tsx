"use client";
import { CenterLayout, Picture } from "@/components";
import { Container, Typography } from "@mui/joy";
import { Button } from "@nextui-org/button";
import Image from "next/image";

export default function NotFound() {
	return (
		<CenterLayout
			Element={`main`}
			className={`
				flex flex-col items-center justify-center
				min-h-screen
			`}
		>
			<Container sx={{ my: 20 }} maxWidth="sm">
				<Typography level="h1" component="h1" gutterBottom>
					404
				</Typography>
				<Typography level="h2" gutterBottom>
					Page not found.
				</Typography>
				<Typography level="body-md" gutterBottom>
					Sorry, we couldn’t find the page you’re looking for.
				</Typography>
				<Button>Go to the home page</Button>
			</Container>
			<Picture
				className={`
					z-[-10]
				`}
			>
				<Image
					src="/assets/svgs/dom/404.svg"
					className={``}
					alt="404"
					width={300}
					height={300}
				/>
			</Picture>
		</CenterLayout>
	);
}
