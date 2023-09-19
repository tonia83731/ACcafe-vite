import { ReactComponent as Logo } from "../assets/favicon.svg";
import { Link } from "react-router-dom";
import { GreenBtn } from "../components/Others/Button";

export default function BackLoginPage() {
  return (
    <section className="bg-grullo-60 w-100 min-h-screen">
      <div className="px-8 pt-16 tablet:px-0 tablet:w-2/5 tablet:mx-auto">
        <div className="w-full flex justify-center items-center col-start-3 col-span-4 mb-4 breakpoint4:col-start-2 breakpoint4:col-span-3">
          <span className="logo-icon backstage">
            <Logo />
          </span>
          <span className="font-bold text-2xl ml-2 title">AC Café</span>
        </div>
        <form action="" className="flex flex-col justify-center items-center">
          <div className="flex flex-col w-full">
            <label htmlFor="email-back-login" className="font-medium">
              Email
            </label>
            <input
              type="email"
              placeholder="Please enter your email..."
              className="w-full rounded px-4 bg-white-80 focus:border-2 focus:border-grullo-80 h-10"
              id="email-back-login"
            />
          </div>
          <div className="flex flex-col w-full mt-2">
            <label htmlFor="password-back-login" className="font-medium">
              Password
            </label>
            <input
              type="password"
              placeholder="Please enter your password..."
              className="w-full rounded px-4 bg-white-80 focus:border-2 focus:border-grullo-80 h-10"
              id="password-back-login"
            />
          </div>
          <GreenBtn className="w-full px-2 mt-5">Login</GreenBtn>
        </form>
        <Link
          to="/ACcafe-vite/"
          className="pt-8 text-end underline text-olive-60 hover:text-olive-80"
        >
          <div>To Frontstage</div>
        </Link>
      </div>
    </section>
  );
}