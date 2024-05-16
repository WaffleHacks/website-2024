import { Inter } from "next/font/google";
import "./globals.css";
import { Footer, Nav } from "@/src/components/semantics";
import { constructMetadata } from "@/src/utils";
import ThemeRegistry from "@/src/utils/ThemeRegistry";
const inter = Inter({ subsets: ["latin"] });

export const metadata = constructMetadata();

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<ThemeRegistry options={{ key: "mui-theme" }}>
					{/* <Nav />
            {children}
          <Footer /> */}
					{children}
				</ThemeRegistry>
			</body>
		</html>
	);
}
