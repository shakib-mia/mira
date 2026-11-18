"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { site } from "@/lib/site";
const links = [
	{ label: "The studio", href: "/about" },
	{ label: "Services", href: "/services" },
	{ label: "Bridal", href: "/bridal-studio" },
	{ label: "Our people", href: "/experts" },
	{ label: "Gallery", href: "/gallery" },
	{ label: "Journal", href: "/journal" },
];
export function Header() {
	const [open, setOpen] = useState(false);
	const pathname = usePathname();
	return (
		<>
			<a className="skip-link" href="#main-content">
				Skip to content
			</a>
			<header className="header">
				<div className="header-inner">
					<Link
						href="/"
						className="wordmark"
						aria-label="Mira Studio home"
						onClick={() => setOpen(false)}
					>
						MIRA<span className="wordmark-star">✳</span>
						<small>STUDIO</small>
					</Link>
					<nav className="desktop-nav" aria-label="Main navigation">
						{links.map((l) => (
							<Link
								key={l.href}
								className={pathname === l.href ? "active" : ""}
								href={l.href}
							>
								{l.label}
							</Link>
						))}
					</nav>
					<Link href="/contact" className="header-book">
						Book an appointment <ArrowUpRight size={16} />
					</Link>
					<button
						className="menu-toggle"
						aria-label={open ? "Close menu" : "Open menu"}
						aria-expanded={open}
						onClick={() => setOpen(!open)}
					>
						{open ? <X size={26} /> : <Menu size={26} />}
					</button>
				</div>
			</header>
			<div
				className={`mobile-panel ${open ? "is-open" : ""}`}
				aria-hidden={!open}
			>
				<nav aria-label="Mobile navigation">
					{links.map((l, i) => (
						<Link
							style={{
								transitionDelay: open ? `${i * 45}ms` : "0ms",
							}}
							key={l.href}
							href={l.href}
							onClick={() => setOpen(false)}
						>
							{l.label}
							<ArrowUpRight size={20} />
						</Link>
					))}
					<Link href="/contact" onClick={() => setOpen(false)}>
						Book an appointment
						<ArrowUpRight size={20} />
					</Link>
				</nav>
				<span>MUMBAI · BANDRA WEST</span>
			</div>
		</>
	);
}
export function Footer() {
	return (
		<footer className="footer">
			<div className="footer-top">
				<div>
					<p className="eyebrow light">
						YOUR NEXT CHAPTER STARTS HERE
					</p>
					<h2>
						Good things happen
						<br />
						when you <em>feel like you.</em>
					</h2>
					<Link href="/contact" className="text-link light-link">
						Make an appointment <ArrowUpRight size={20} />
					</Link>
				</div>
				<div className="footer-symbol">✳</div>
			</div>
			<div className="footer-grid">
				<div className="footer-brand">
					<Link href="/" className="wordmark footer-logo">
						MIRA<span className="wordmark-star">✳</span>
						<small>STUDIO</small>
					</Link>
					<p>
						Beauty, on your terms.
						<br />
						Made with care in Mumbai.
					</p>
				</div>
				<div>
					<h3>EXPLORE</h3>
					<Link href="/about">The studio</Link>
					<Link href="/services">Services</Link>
					<Link href="/bridal-studio">Bridal studio</Link>
					<Link href="/experts">Our people</Link>
					<Link href="/gallery">Gallery</Link>
					<Link href="/journal">The journal</Link>
				</div>
				<div>
					<h3>COME FIND US</h3>
					<p>{site.address}</p>
					<p>
						{site.hours}
						<br />
						Monday · Closed
					</p>
					<a href={`tel:${site.phoneHref}`}>{site.phone}</a>
					<a href={`mailto:${site.email}`}>{site.email}</a>
				</div>
				<div>
					<h3>STAY IN TOUCH</h3>
					<p>
						Questions, ideas, or a look you&apos;ve been saving?
						We&apos;d love to hear from you.
					</p>
					<a
						href={site.whatsapp}
						target="_blank"
						rel="noopener noreferrer"
					>
						WhatsApp us <ArrowUpRight size={15} />
					</a>
					<a
						href="https://www.instagram.com/"
						target="_blank"
						rel="noopener noreferrer"
					>
						Instagram <ArrowUpRight size={15} />
					</a>
				</div>
			</div>
			<div className="footer-bottom">
				<span>© 2027 MIRA STUDIO. A fictional concept brand.</span>
				<span>MUMBAI, INDIA · MADE FOR INDIVIDUALS</span>
				<Link href="/contact">Contact & appointments ↗</Link>
			</div>
		</footer>
	);
}
