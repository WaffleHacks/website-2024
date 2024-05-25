"use client";
import { Button, Container, Typography } from "@mui/joy";
import Image from "next/image";

const NotFound = (): JSX.Element => {
	return (
		<>
			<Container>
				<Typography level="h1" component="h1" gutterBottom>
					404
				</Typography>
				<Typography level="h2" gutterBottom>
					Page not found.
				</Typography>
				<Typography level="body-md" gutterBottom>
					Sorry, we couldn’t find the page you’re looking for.
				</Typography>
				<button>Go to the home page</button>
			</Container>
		</>
	);
};

export default NotFound;
