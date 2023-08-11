import React, { useContext, useState } from "react";
import { AuthContext } from "../context/UserContext";

function Login() {
  //========Context=========
  const { userlogin } = useContext(AuthContext);
  const [successful, setSuccessful] = useState(false);
  const handleLogin = (event) => {
    event.preventDefault();
    setSuccessful(false);
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    //========================
    userlogin(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        form.reset();
        setSuccessful(true);
      })
      .catch((error) => {
        console.error("Error", error);
      });
  };
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                name="email"
                type="email"
                placeholder="email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                name="password"
                type="password"
                placeholder="password"
                className="input input-bordered"
              />
            </div>
            <div className="form-control mt-6">
              {successful && (
                <p className="text-emerald-500">Login successful</p>
              )}
              <button className="btn btn-primary">Login</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
export default Login;
