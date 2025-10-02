import Image from "next/image";
import MainBottom from "../molecules/MainBottom";
import MainTop from "../molecules/MainTop";
import Link from "next/link";

// top contents
const NumberOfVisitors = <>TODAY <span className="text-point-color">230613</span> | TOTAL <span className="text-point-color">19971031</span></>;
const todayMessage = <>HBD</>;

const Profile = <div className="w-full h-1/2 rounded-lg overflow-hidden relative"><Image alt="" src={`/images/pinkRibon.jpg`} layout="fill" objectFit="cover"></Image></div>;

export default function MainPage() {
  return (
    <div className="w-full h-full max-w-7xl bg-light-gray rounded flex ">
      {/* 좌측 */}
      <article className="p-5 w-full h-full flex flex-col flex-1">
        <MainTop elementContent={NumberOfVisitors} />
        <MainBottom bottomElement={Profile} />
      </article>

      {/* 우측 */}
      <article className="p-5 w-full h-full flex flex-col flex-2">
        <MainTop elementContent={todayMessage} />
        {/* <MainBottom /> */}
        <div className="w-full h-full flex relative">
          <section className="w-full h-full p-7 mr-24 border border-light-gray rounded-xl shadow-3xl bg-white flex flex-col items-start z-10"></section>
          <div className="absolute top-0 right-2">
            <ul className="mt-5 w-24 h-1/2 flex flex-col gap-2">
              <li className="w-full h-12 rounded bg-white border-light-gray z-20"><Link href={`/`} className="w-full h-full flex items-center justify-center">홈</Link></li>
              <li className="w-full h-12 rounded bg-main-color border-light-gray"><Link href={`/profile`} className="w-full h-full flex items-center justify-center">프로필</Link></li>
              <li className="w-full h-12 rounded bg-main-color border-light-gray"><Link href={`/gallery`} className="w-full h-full flex items-center justify-center">사진첩</Link></li>
              <li className="w-full h-12 rounded bg-main-color border-light-gray"><Link href={`/`} className="w-full h-full flex items-center justify-center">방명록</Link></li>
            </ul>
          </div>
        </div>
      </article>
    </div>
  );
}
