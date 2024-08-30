import localFont from "next/font/local";
import "@/styles/globals.css";

const geistSans = localFont({
	src: "../fonts/GeistVF.woff",
	variable: "--font-geist-sans",
});
const geistMono = localFont({
	src: "../fonts/GeistMonoVF.woff",
	variable: "--font-geist-mono",
});

export const generateMetadata = ({ params: { lang } }: { params: { lang: string } }) => {
	return {
		title: `NextJS i18n Template - ${lang.toUpperCase()}`,
		description: "Generated by Create Next App and i18next",
	};
}

export default function RootLayout({
	children,
	params: { lang },
}: Readonly<{
	children: React.ReactNode, params: { lang: string };
}>) {
	return (
		<html lang={lang}>
			<body className={`${geistSans.variable} ${geistMono.variable}`}>
				{children}
			</body>
		</html>
	);
}
