interface ProfileInfoProps {
    name?: string;
    birthday?: string;
    organization?: string;
}

export default function ProfileInfo({ name = "", birthday = "", organization = "" }: ProfileInfoProps) {
    return (
        <ul className="h-full pl-5 pt-10">
            <li>이름: {name}</li>
            <li>생일: {birthday}</li>
            <li>소속: {organization}</li>
        </ul>
    );
}