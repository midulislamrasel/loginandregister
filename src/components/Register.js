import React, { useContext, useState } from "react";
import { AuthContext } from "../context/UserContext";

export default function Register() {
  const [successful, setSuccessful] = useState(false);
  //-----------Context use------------
  const { createUser } = useContext(AuthContext);
  //--------onCilik Event -----------
  const handleRegister = (event) => {
    setSuccessful(false);
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    form.reset();
    console.log(name, email, password);
    //--------firebase use-----
    createUser(email, password)
      .then((result) => {
        const user = result.user;
        setSuccessful(true);
        console.log(user);
      })
      .catch((error) => {
        console.error("Error", error);
      });
  };
  const handleGoogle = () => {
    // googleSingIn()
    //   .then((result) => {
    //     const user = result.user;
    //     console.log(user);
    //   })
    //   .catch((error) => {
    //     console.error("Error", error);
    //   });
  };
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleRegister} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                name="name"
                type="text"
                placeholder="name"
                className="input input-bordered"
              />
            </div>
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
              {successful && <p className="text-emerald-500">Successfull</p>}
              <button className="btn btn-primary">Register</button>
            </div>
          </form>
          <button
            onClick={handleGoogle}
            className="btn bg-emerald-700 text-gray-100 mx-auto"
          >
            Google
          </button>
        </div>
      </div>
    </div>
  );
}
