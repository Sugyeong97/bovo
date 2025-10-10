import Link from "next/link";

interface EnableListProps {
    href?: string;
    title?: string;
}

export default function EnableList({ href = "/", title = "" }: EnableListProps) {
    return (
        <li className="w-full h-12 rounded bg-main-color border-light-gray">
            <Link href={href} className="w-full h-full flex items-center justify-center">{title}</Link>
        </li>
    );
}