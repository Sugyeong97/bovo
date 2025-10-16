'use client'
import { useState } from "react";

export default function Guestbook() {
    const [inputValue, setInputValue] = useState(""); // 입력 필드의 값
    const [isPasswordCorrect, setIsPasswordCorrect] = useState(false); // 암호 일치 여부

    const correctPassword = "971031";

    const handleButton = () => {
        if (inputValue == correctPassword) {
            setIsPasswordCorrect(true);
        } else {
            alert("birthday");
            setIsPasswordCorrect(false);
        }
    };

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
    };

    return (
        <section className="w-full">
            <article className="w-full h-24 p-5 bg-light-gray flex">
                <label htmlFor="guestbook-password" className="sr-only">방명록 비밀번호</label>
                <input
                    id="guestbook-password"
                    name="password"
                    type="text"
                    placeholder="비밀번호를 입력해 주세요."
                    value={inputValue}
                    onChange={handleInputChange}
                    className="w-full h-full p-3 border flex-3"
                />
                <button onClick={handleButton} className="flex-1 w-full ml-3 bg-main-color">버튼</button>
            </article>

            <article className="p-5">
                <p className={isPasswordCorrect ? `text-black` : `text-black`}> {/* 뒤에가 화이트 */}
                    생일 축하해 보경아<br />
                    내가 언젠가는 꼭 이런 사이트 너한테 만들어 주고 싶었어<br />
                    내가 좀 더 공부해서 내년엔 온라인 롤링페이퍼 받을 수 있게 해줄게 ㅋㅋㅋㅋㅋㅋ<br />
                </p>
            </article>
        </section>
    );
}
