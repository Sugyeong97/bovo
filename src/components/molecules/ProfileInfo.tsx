interface ProfileInfoProps {
    name?: string;
    birthday?: string;
    etc1?: string;
    etc2?: string;
    etc3?: string;
    etc4?: string;
    etc5?: string;
}

export default function ProfileInfo({ name = "", birthday = "", etc1 = "", etc2 = "", etc3 = "", etc4 = "", etc5 = "" }: ProfileInfoProps) {
    return (
        <ul className="h-full pl-5 pt-10 flex flex-col gap-3">
            <li>이름: {name}</li>
            <li>생일: {birthday}</li>
            <li>{etc1}</li>
            <li>{etc2}</li>
            <li>{etc3}</li>
            <li>{etc4}</li>
            <li>{etc5}</li>
        </ul>
    );
}