import Link from "next/link";

interface AbleListProps {
    href?: string;
    title?: string;
}

export default function AbleList({ href = "/", title = "" }: AbleListProps) {
    return (
        <li className="w-full h-12 rounded bg-white border-light-gray z-20">
            <Link href={href} className="w-full h-full flex items-center justify-center">{title}</Link>
        </li>
    );
}