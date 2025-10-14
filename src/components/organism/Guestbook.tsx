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
      setIsPasswordCorrect(false);
    }
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        className="border"
      />
      <button onClick={handleButton}>버튼</button>
      <p className={isPasswordCorrect ? `text-black` : `text-white`}>
        암호가 맞으면 글자가 보이게
      </p>
    </div>
  );
}
