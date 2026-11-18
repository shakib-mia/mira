import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import { Header, Footer } from "@/components/chrome";
import { images, site } from "@/lib/site";
import "./globals.css";

const display = Cormorant_Garamond({
	subsets: ["latin"],
	weight: ["400", "500", "600"],
	variable: "--font-display",
	display: "swap",
});
const body = DM_Sans({
	subsets: ["latin"],
	variable: "--font-body",
	display: "swap",
});
export const metadata: Metadata = {
	metadataBase: new URL(site.url),
	title: {
		default: "MIRA STUDIO — Beauty, on your terms | Mumbai",
		template: "%s | MIRA STUDIO",
	},
	description:
		"A contemporary beauty studio in Bandra, Mumbai. Personalised hair, skin, makeup and bridal artistry by people who know their craft.",
	alternates: { canonical: "/" },
	openGraph: {
		type: "website",
		siteName: site.name,
		locale: "en_IN",
		images: [
			{
				url: images.hero,
				width: 1200,
				height: 630,
				alt: "MIRA STUDIO beauty atelier",
			},
		],
	},
	twitter: { card: "summary_large_image" },
};
export default function RootLayout({ children }: { children: ReactNode }) {
	const schema = {
		"@context": "https://schema.org",
		"@type": ["BeautySalon", "LocalBusiness"],
		name: site.name,
		url: site.url,
		telephone: site.phone,
		email: site.email,
		description:
			"Contemporary hair, skin, makeup and bridal beauty studio in Bandra West, Mumbai.",
		address: {
			"@type": "PostalAddress",
			streetAddress: "First Floor, 31 Linking Road, Bandra West",
			addressLocality: "Mumbai",
			addressRegion: "Maharashtra",
			postalCode: "400050",
			addressCountry: "IN",
		},
		openingHoursSpecification: [
			{
				"@type": "OpeningHoursSpecification",
				dayOfWeek: [
					"Tuesday",
					"Wednesday",
					"Thursday",
					"Friday",
					"Saturday",
					"Sunday",
				],
				opens: "10:00",
				closes: "20:00",
			},
		],
		priceRange: "₹₹₹",
	};
	return (
		<html lang="en">
			<body className={`${display.variable} ${body.variable}`}>
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
				/>
				<Header />
				<main id="main-content">{children}</main>
				<Footer />
			</body>
		</html>
	);
}
