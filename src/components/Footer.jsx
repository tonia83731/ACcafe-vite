import { useState } from "react";

import SocialMediaLink from "./Others/SocialMediaLink";
import Subscribe from "./Others/Subscribe";
import { SuccessTag, ErrorTag } from "./Others/SubscribeNotiTag";


export default function Footer() {
  const [inputValue, setInputValue] = useState("")
  const [isTrueOpen, setIsTrueOpen] = useState(false);
  const [isFalseOpen, setIsFalseOpen] = useState(false);
  const isValidEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email);
  };
  const handleSubscribeChange = (e) => {
    setInputValue(e.target.value)
  }
  const handleSubscribeSubmit = (e) => {
    e.preventDefault()
    if(isValidEmail(inputValue)){
      setIsTrueOpen(true)
    } else {
      setIsFalseOpen(true)
    }


  }
  return (
    <footer className="bg-olive-100 text-white-100 w-full h-[210px] mt-auto text-center flex flex-col justify-center">
      <Subscribe
        inputValue={inputValue}
        onSubscribeChange={handleSubscribeChange}
        onSubscribeSubmit={handleSubscribeSubmit}
      />
      {isFalseOpen && <ErrorTag onCloseClick={() => setIsFalseOpen(false)} />}
      {isTrueOpen && <SuccessTag onCloseClick={() => setIsTrueOpen(false)} />}
      <SocialMediaLink />
      <p className="">&#169;2023 AC café. All rights reserved.</p>
      <div>
        <a href="" className="opacity-50">
          FrontStage Login
        </a>
        <span className="opacity-50"> | </span>
        <a
          href="/ACcafe-vite/back-login"
          className="opacity-50 hover:opacity-100"
        >
          BackStage Login
        </a>
      </div>
    </footer>
  );
}
