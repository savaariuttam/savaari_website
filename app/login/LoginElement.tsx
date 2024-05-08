import React from "react";
import Input from "./Input";
import { useRouter } from "next/navigation";
const LoginElement = () => {
  const router = useRouter();
  return (
    <>
      <form id="login-id" action="/custlogin" method="POST">
        <div className="heading-one">
          <h3>Welcome to Online Savaari!</h3>
          <p>Enter your login details to continue</p>
        </div>
        <div className="form-content">
          <Input
            label="Username / Email / Mobile No."
            type="text"
            name="username"
            placeholder="Username / Email / Mobile No."
            required
          />
          <Input
            label="Password"
            type="password"
            name="password"
            placeholder="******"
            required
          />

          <div className="form-group">
            <label className="custom-checkbox">
              Remember me
              <input type="checkbox" defaultChecked />
              <span className="checkmark"></span>
            </label>
          </div>
          <div className="form-group">
            <input
              className="btn btn-block btn-blue form-control"
              type="submit"
              value="Login"
              onClick={() => router.push("/dashboard")}
            />
          </div>
          <div className="form-group">
            <a href="/password_reset_request/" style={{ textAlign: "left" }}>
              Forgot Password
            </a>
          </div>
        </div>
        <p className="text-center">OR</p>
      </form>
      <div className="form-group">
        <input
          id="otp"
          className="btn btn-block btn-blue form-control"
          type="button"
          value="Login with OTP"
        />
      </div>
      <p className="small font-normal">
        By proceeding, you agree with our{" "}
        <a href="/term" target="_blank">
          Terms of Service
        </a>
        ,{" "}
        <a href="/privacy/" target="_blank">
          Privacy Policy
        </a>{" "}
        &amp;{" "}
        <a href="#" target="_blank">
          User Agreement
        </a>
        .
      </p>
    </>
  );
};
export default LoginElement;
