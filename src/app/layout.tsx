import { Footer, Nav } from "@/components/semantics";
import { constructMetadata, constructViewport } from "@/utils/meta";
import ThemeRegistry from "@/providers/ThemeRegistry";
import { Inter } from "next/font/google";
import Header from "./_components/Header";
import "@/styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = constructMetadata();
export const viewport = constructViewport();

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={inter.className + " box-border overflow-x-hidden"}>
				<Header />
				<ThemeRegistry options={{ key: "mui-theme" }}>{children}</ThemeRegistry>
			</body>
		</html>
	);
}
