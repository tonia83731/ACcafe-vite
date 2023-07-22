

import SocialMediaLink from "./Others/SocialMediaLink";
import Subscribe from "./Others/Subscribe";
import { SuccessTag, ErrorTag } from "./Others/SubscribeNotiTag";

export default function Footer() {
  return (
    <footer className="bg-olive-100 text-white-100 w-full h-[210px] mt-auto text-center flex flex-col justify-center">
      <Subscribe />
      {/* <ErrorTag/> */}
      {/* <SuccessTag/> */}
      <SocialMediaLink />
      <p className="">&#169;2023 AC café. All rights reserved.</p>
    </footer>
  );
}
