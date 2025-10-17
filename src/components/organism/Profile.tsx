import ProfileImage from "../molecules/ProfileImage";
import ProfileInfo from "../molecules/ProfileInfo";

export default function Profile() {
    return (
        <div className="w-full p-5 border border-secondary rounded flex gap-3">
            <ProfileImage imgSrc="/images/kuromi.jpg" />
            <ProfileInfo name="쿠로미" birthday="1031" organization="일본" />
        </div>
    );
}
