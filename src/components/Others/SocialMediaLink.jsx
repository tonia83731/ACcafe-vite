import { ReactComponent as Facebook } from "../../assets/social_media/Facebook.svg";
import { ReactComponent as Instagram } from "../../assets/social_media/Instagram.svg";
import { ReactComponent as Twitter } from "../../assets/social_media/Twitter.svg";
import { ReactComponent as Youtube } from "../../assets/social_media/Youtube.svg";
import { ReactComponent as Line } from "../../assets/social_media/Line.svg";

export default function SocialMediaLink() {
  return (
    <div className="w-1/6 min-w-[210px] mx-auto my-3 flex justify-between">
      <a href="" className="social-media-link">
        <Facebook />
      </a>
      <a href="" className="social-media-link">
        <Instagram />
      </a>
      <a href="" className="social-media-link">
        <Twitter />
      </a>
      <a href="" className="social-media-link">
        <Youtube />
      </a>
      <a href="" className="social-media-link">
        <Line />
      </a>
    </div>
  );
}