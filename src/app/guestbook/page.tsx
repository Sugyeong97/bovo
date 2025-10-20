import AbleList from "@/components/molecules/AbleList";
import EnableList from "@/components/molecules/EnableList";
import BaseLayout from "@/components/organism/BaseLayout";
import Guestbook from "@/components/organism/Guestbook";

export default function Page() {
    return (
        <BaseLayout>
            <section className="w-full h-full p-7 mr-24 border border-light-gray rounded-xl bg-white flex flex-col items-start z-10 shadow-inner">
                <Guestbook />
            </section>
            <div className="absolute top-0 right-2">
                <ul className="mt-5 w-24 h-1/2 flex flex-col gap-2">
                    <EnableList href="/" title="홈" />
                    <EnableList href="/profile" title="프로필" />
                    <EnableList href="/gallery" title="사진첩" />
                    <AbleList href="/guestbook" title="방명록" />
                </ul>
            </div>
        </BaseLayout>
    );
}