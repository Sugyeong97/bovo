import { ReactNode } from "react";
import MainTop from "../molecules/MainTop";
import MainBottom from "../molecules/MainBottom";
import Image from "next/image";

interface BaseLayoutProps {
    children: ReactNode;
}

// top contents
const NumberOfVisitors = <>TODAY <span className="text-point-color">230613</span> | TOTAL <span className="text-point-color">19971031</span></>;
const Profile = <div className="w-full h-1/2 rounded-lg overflow-hidden relative"><Image alt="" src={`/images/pinkRibon.jpg`} layout="fill" objectFit="cover"></Image></div>;

export default function BaseLayout({ children }: BaseLayoutProps) {
    return (
        <main className="w-screen h-screen py-10 flex items-center justify-center bg-main-color text-text-main-color">
            <div className="w-full h-full max-w-7xl bg-light-gray rounded flex">
                {/* 좌측 */}
                <article className="p-5 w-full h-full flex flex-col flex-1">
                    <MainTop elementContent={NumberOfVisitors} />
                    <MainBottom bottomElement={Profile} />
                </article>

                {/* 우측 */}
                <article className="p-5 w-full h-full flex flex-col flex-2">
                    <section className="pb-3 pl-5 w-full">
                        보경아 생일 축하해 !
                    </section>
                    <div className="w-full h-full flex relative">
                        {children}
                    </div>
                </article>
            </div>
        </main>
    );
}
