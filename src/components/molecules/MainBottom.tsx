import Image from "next/image";

export default function MainBottom() {
    return (
        <section className="w-full h-full p-7 border border-gray-400 rounded-xl shadow-3xl bg-white flex flex-col items-start">
            <div className="w-full h-1/2 rounded-lg overflow-hidden relative">
                <Image alt="" src={`/images/pinkRibon.jpg`} layout="fill" objectFit="cover"></Image>
            </div>
        </section>
    );
}