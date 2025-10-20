import { ReactNode } from "react";
import MainBottom from "../molecules/MainBottom";

interface BaseLayoutProps {
    children: ReactNode;
}

export default function BaseLayout({ children }: BaseLayoutProps) {
    return (
        <main className="w-screen h-screen py-10 flex items-center justify-center bg-main-color text-text-main-color">
            <div className="w-full h-full max-w-7xl bg-light-gray rounded flex">
                {/* 좌측 */}
                <section className="p-5 w-full h-full flex flex-col flex-1">
                    <article className="w-full h-12 text-center pt-1">TODAY <span className="text-point-color">230613</span> | TOTAL <span className="text-point-color">19971031</span></article>
                    <MainBottom />
                </section>


                {/* 우측 */}
                <section className="p-5 w-full flex flex-col flex-2">
                    <article className="w-full h-12 pl-5 pt-1">HBD</article>
                    <div className="w-full h-screen flex relative overflow-auto">
                        {children}
                    </div>
                </section>
            </div>
        </main>
    );
}
