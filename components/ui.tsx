"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "motion/react";
import { ArrowRight, ArrowUpRight, Plus } from "lucide-react";
import { useState, type ReactNode } from "react";
import { site } from "@/lib/site";
export function Reveal({children,className="",delay=0}: {children:ReactNode;className?:string;delay?:number}) { return <motion.div className={className} initial={{opacity:0,y:28}} whileInView={{opacity:1,y:0}} viewport={{once:true,amount:0.12}} transition={{duration:.75,delay,ease:[.22,1,.36,1]}}>{children}</motion.div> }
export function Photo({src,alt,className="",priority=false,sizes="(max-width: 768px) 100vw, 50vw"}: {src:string;alt:string;className?:string;priority?:boolean;sizes?:string}) {return <div className={`photo-frame ${className}`}><Image src={src} alt={alt} fill unoptimized priority={priority} sizes={sizes} className="cover-image" /></div>}
export function Eyebrow({children,light=false}: {children:ReactNode;light?:boolean}) {return <span className={`eyebrow ${light?"light":""}`}><span className="eyebrow-line"/>{children}</span>}
export function Cta({href,children,light=false}: {href:string;children:ReactNode;light?:boolean}) {return <Link className={`cta ${light?"cta-light":""}`} href={href}><span>{children}</span><span className="cta-icon"><ArrowUpRight size={18}/></span></Link>}
export function TextLink({href,children}: {href:string;children:ReactNode}) {return <Link href={href} className="text-link">{children}<ArrowUpRight size={18}/></Link>}
export function Breadcrumb({items}: {items:{label:string;href?:string}[]}) {const pathname=usePathname();const schema={"@context":"https://schema.org","@type":"BreadcrumbList",itemListElement:[{ "@type":"ListItem",position:1,name:"Home",item:site.url},...items.map((item,i)=>({"@type":"ListItem",position:i+2,name:item.label,item:`${site.url}${item.href??pathname}`}))]};return <><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(schema)}}/><nav className="breadcrumb" aria-label="Breadcrumb"><Link href="/">Home</Link>{items.map((item,i)=><span key={i} className="crumb-piece"><span>/</span>{item.href?<Link href={item.href}>{item.label}</Link>:<span aria-current="page">{item.label}</span>}</span>)}</nav></>}
export function FAQs({items}: {items:{q:string;a:string}[]}) {const [active,setActive]=useState<number|null>(0);return <div className="faq-list">{items.map((item,i)=><div className={`faq-item ${active===i?"faq-open":""}`} key={item.q}><button aria-expanded={active===i} onClick={()=>setActive(active===i?null:i)}><span>{String(i+1).padStart(2,"0")}</span><strong>{item.q}</strong><Plus size={19}/></button>{active===i&&<p>{item.a}</p>}</div>)}</div>}
export function SectionEnd({href,text}: {href:string;text:string}) {return <Link href={href} className="section-end">{text}<ArrowRight size={22}/></Link>}
