"use client";
import { useState } from "react";
import Swal from "sweetalert2";

export default function Guestbook() {
    const [inputValue, setInputValue] = useState(""); // 입력 필드의 값
    const [isPasswordCorrect, setIsPasswordCorrect] = useState(false); // 암호 일치 여부
    const correctPassword = "971031";

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
    };

    const handleButton = () => {
        if (inputValue == correctPassword) {
            setIsPasswordCorrect(true);
        } else {
            Swal.fire({
                title: '💡 HINT 💡',
                text: '🎉 BIRTHDAY 🎊',
                confirmButtonText: '확인'
            });
            setIsPasswordCorrect(false);
        }
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
                    className="w-full h-full px-5 py-3 border flex-3 text-secondary"
                />
                <button onClick={handleButton} className="flex-1 w-full ml-3 bg-secondary text-light-gray">확인</button>
            </article>

            <article className="p-5">
                <p className={isPasswordCorrect ? `block` : `hidden`}>
                    생일 축하해 보경아<br />
                    내가 언젠가는 꼭 이런 사이트 너한테 만들어 주고 싶었어<br />
                    맘에 들어?<br />
                    이거 만들면서 코딩 더 많이 알게됐다😎<br />
                    팬들이 가수들 사이트 만들고 그럴 때 졸라 열심히 하잖아<br />
                    그 기분을 이제 알겠다 ㅋㅋㅋㅋ<br />
                    내가 좀 더 공부해서 내년엔 온라인 롤링페이퍼 받을 수 있게 해줄게 ㅋㅋㅋㅋㅋㅋ<br />

                    이거 좀 더 잘 만들어주고 싶었는데..ㅠㅠ<br />
                    졸라 얼레벌레..<br />

                    내가 요즘 말이 잘 안나와<br />
                    회사다녀서 그런가봐..<br />
                    생각도 없어<br />
                    그래서 해주고 싶었던 말이 많았는데<br />
                    일요일에 보자<br />


                </p>
            </article>
        </section>
    );
}
