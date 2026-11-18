import type { Metadata } from "next";
import { Breadcrumb, Eyebrow } from "@/components/ui";
import { GalleryView } from "@/components/gallery-view";
export const metadata:Metadata={title:"Beauty Portfolio & Gallery",description:"Explore MIRA STUDIO's editorial beauty gallery: Indian bridal inspiration, makeup, hair styling, skincare, nails and salon interiors in Mumbai.",alternates:{canonical:"/gallery"}};
export default function Gallery(){return <><section className="page-container page-intro"><Breadcrumb items={[{label:"Gallery"}]}/><Eyebrow>THE MIRA LOOKBOOK</Eyebrow><h1 className="display">Beautiful is<br/><em>never one thing.</em></h1><div className="intro-bottom"><span className="intro-number">THE EDIT</span><p className="body-copy large">An evolving moodboard of the work, the moments and the little details that inspire us.</p></div></section><section className="page-container"><GalleryView/></section></>}
