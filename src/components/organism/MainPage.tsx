import MainBottom from "../molecules/MainBottom";
import MainTop from "../molecules/MainTop";

const TodayMarkUp = <span className="text-point-color">230613</span>;
const TotalMarkUp = <span className="text-point-color">19971031</span>;

export default function MainPage() {
  return (
    <div className="w-full h-full max-w-7xl bg-light-gray rounded grid grid-cols-3">
      {/* 좌측 */}
      <article className="p-5 w-full h-full flex flex-col col-span-1">
        <MainTop />
        <MainBottom />
      </article>

      {/* 우측 */}
      <article className="p-5 w-full h-full col-span-2">
        <MainTop />
        <div className="w-full h-full bg-white border border-gray-400 rounded-xl"></div>
      </article>
    </div>
  );
}
