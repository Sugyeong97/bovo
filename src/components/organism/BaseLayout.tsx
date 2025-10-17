import { ReactNode } from "react";
import MainTop from "../molecules/MainTop";
import MainBottom from "../molecules/MainBottom";

interface BaseLayoutProps {
    children: ReactNode;
}

export default function BaseLayout({ children }: BaseLayoutProps) {
    return (
        <main className="w-screen h-screen py-10 flex items-center justify-center bg-main-color text-text-main-color">
            <div className="w-full h-full max-w-7xl bg-light-gray rounded flex">
                {/* 좌측 */}
                <article className="p-5 w-full h-full flex flex-col flex-1">
                    <MainTop />
                    <MainBottom />
                </article>

                {/* 우측 */}
                <article className="p-5 w-full h-full flex flex-col flex-2">
                    <section className="pb-3 pl-5 w-full">
                        HBD
                    </section>
                    <div className="w-full h-full flex relative">
                        {children}
                    </div>
                </article>
            </div>
        </main>
    );
}
