import { ReactComponent as Logo } from "../assets/favicon.svg";
import { GreenBtn } from "../components/Others/Button";
import { useEffect, useState } from "react";

import { signin } from "../api/admin";
import { checkPermission } from "../api/admin";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "axios";
import { useAuth } from "../context/LoginContext";

export default function BackLoginPage() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("")
  const [password, setPassWord] = useState("")
  const {login} = useAuth()

  const handleLoginSubmit = async (event) => {
    event.preventDefault();
    login(username, password)
    if (username.length === 0 || password.length === 0) return;
    const { success, token } = await signin({
      username,
      password,
    });
    // console.log(success);
    if (success) {
      localStorage.setItem('token', token);
      // const token = response.data.token;
      // const expired = response.data.expired;
      // document.cookie = `token=${token};expires=${new Date(expired)};`;
      // 登入成功訊息
      Swal.fire({
        position: "top",
        title: "登入成功！",
        timer: 1000,
        icon: "success",
        showConfirmButton: false,
      });
      navigate("/ACcafe-vite/back-products");
      return;
    }
    // 登入失敗訊息
    Swal.fire({
      position: "top",
      title: "登入失敗！",
      timer: 1000,
      icon: "error",
      showConfirmButton: false,
    });
  }

  useEffect(() => {
    const checkTokenIsValid = async () => {
      const authToken = localStorage.getItem("token");
      // console.log(authToken)
      axios.defaults.headers.common["Authorization"] = authToken;
      const result = await checkPermission({
        username,
        password,
      });
      // console.log(result)
      if (result) {
        navigate("/ACcafe-vite/back-products");
      }
      // navigate("/ACcafe-vite/back-login");
    };

    checkTokenIsValid();
  }, [navigate]);

  return (
    <section className="bg-grullo-60 w-100 min-h-screen">
      <div className="px-8 pt-16 tablet:px-0 tablet:w-2/5 tablet:mx-auto">
        <div className="w-full flex justify-center items-center col-start-3 col-span-4 mb-4 breakpoint4:col-start-2 breakpoint4:col-span-3">
          <span className="logo-icon backstage">
            <Logo />
          </span>
          <span className="font-bold text-2xl ml-2 title">AC Café</span>
        </div>
        <form
          action=""
          className="flex flex-col justify-center items-center"
          onSubmit={handleLoginSubmit}
        >
          <div className="flex flex-col w-full">
            <label htmlFor="email-back-login" className="font-medium">
              Email
            </label>
            <input
              type="email"
              placeholder="Please enter your email..."
              className="w-full rounded px-4 bg-white-80 focus:border-2 focus:border-grullo-80 h-10"
              id="email-back-login"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
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
              value={password}
              onChange={(event) => setPassWord(event.target.value)}
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