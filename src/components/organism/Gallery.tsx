'use client';
import { imgArr } from "@/firebase/gallery";
import Image from "next/image";

export default function Gallery() {
    return (
        <section className="w-full overflow-x-hidden">
            <article className="w-full">
                {imgArr.map((v, idx) => (
                    <div key={idx} className="w-full py-3">
                        <div className="relative w-full" style={{ paddingBottom: '75%' }}>
                            <Image alt={v.comment} src={v.imgSrc} fill={true} sizes="(max-width: 600px) 100vw, 500px" className="object-cover" />
                        </div>
                        <div className="text-center py-5 text-lg">{v.comment}</div>
                        <div className="bg-gray-100 h-[2px]"></div>
                    </div>
                ))}
            </article>
        </section>
    );
}