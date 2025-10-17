import Image from "next/image";

interface ProfileImageProps {
    imgSrc?: string;
}

export default function ProfileImage({ imgSrc = "" }: ProfileImageProps) {
    return (
        <div className="w-60 h-60 rounded-full relative overflow-hidden">
            <Image alt="" src={imgSrc} layout="fill" />
        </div>
    );
}