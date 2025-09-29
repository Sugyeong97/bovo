import MainTop from "../molecules/MainTop";

export default function MainPage() {
  return (
    <div className="w-full h-full px-3 max-w-7xl bg-gray-50">
        <MainTop />
        <div className="w-1/3 h-96 bg-white border border-black rounded-3xl -z-10 shadow-3xl"></div>
    </div>
  );
}
