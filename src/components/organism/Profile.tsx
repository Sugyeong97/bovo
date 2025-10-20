import ProfileImage from "../molecules/ProfileImage";
import ProfileInfo from "../molecules/ProfileInfo";

export default function Profile() {
    return (
        <section className="w-full flex flex-col gap-5 overflow-x-hidden">
            <div className="w-full p-5 border border-secondary rounded flex gap-3">
                <ProfileImage imgSrc="/images/test.jpg" />
                <ProfileInfo name="조보경" birthday="1997.10.31" etc1="취미: 라이프위버로 앞서가는 탱커 당겨오기" etc2="특기: 임수경 웃기기 (매우잘함)" />
            </div>

            <h1 className="text-2xl text-center mt-24">그와 생일이 같은 인물들</h1>

            <div className="w-full p-5 border border-secondary rounded flex gap-3">
                <ProfileImage imgSrc="/images/kuromi.jpg" />
                <ProfileInfo name="쿠로미" birthday="2005.10.31" etc1="소속: 마리랜드의 숲" etc2="작품: 부탁해! 마이멜로디 시리즈" etc3="취미: 일기 쓰기" />
            </div>

            <div className="w-full p-5 border border-secondary rounded flex gap-3">
                <ProfileImage imgSrc="/images/bws.jpg" />
                <ProfileInfo name="변우석" birthday="1991.10.31" etc1="소속: 바로엔터테인먼트" etc2="작품: 선재 업고 튀어" etc3="종교: 가톨릭 (세례명은 프란치스코이다.)" />
            </div>
        </section>
    );
}
