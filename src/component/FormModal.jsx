import { useState } from "react";
import { useDataProvider } from "../context/DataProvider";
import { useNavigate } from "react-router-dom";
import { useAuthUser } from "../context/AuthContextProvider";

export function FormModal() {
  const [emailError, setEmailError] = useState(false);
  const [loginError, setLoginError] = useState(false);
  const { logged, setLogged, signup, login } = useAuthUser();
  const [signupForm, setSignupForm] = useState(false);

  const title = signupForm ? (
    <h2 className="block text-gray-700 text-sm font-bold mb-2 text-xl mt-5">
      Sign up
    </h2>
  ) : (
    <h2 className="block text-gray-700 text-sm font-bold mb-2 text-xl mt-5">
      Login
    </h2>
  );
  const buttonSignupLogin = signupForm ? (
    <button
      id="signup-btn"
      type="button"
      className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
      onClick={() => setSignupForm(!signupForm)}
    >
      <a className="">Login</a>
    </button>
  ) : (
    <button
      id="signup-btn"
      type="button"
      className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
      onClick={() => setSignupForm(!signupForm)}
    >
      <a className="">Sign up</a>
    </button>
  );

  const {
    activeNav,
    setActiveNav,
    handleActiveNav,
    isOpen,
    handleOnClose,
    formData,
    handleFormOnChange,
  } = useDataProvider();

  const navigate = useNavigate();
  const handleSubmitSignup = async (e) => {
    e.preventDefault();
    try {
      let user = await signup(formData);
      console.log(user);
      setEmailError(false);
      handleOnClose();
    } catch (err) {
      console.log("ERROR: ", err.code);
      if (err.code === "auth/email-already-in-use") {
        setEmailError(true);
      }
    }
  };

  const handleSubmitLogin = async (e) => {
    e.preventDefault();
    try {
      let user = await login(formData);
      console.log(user);
      navigate("/ships-list");
      setLoginError(false);
      handleOnClose();
      setLogged(user);
    } catch (err) {
      if (err.code === "auth/invalid-credential") {
        setLoginError(true);
      }
    }
  };

  const onSubmitAction = signupForm ? handleSubmitSignup : handleSubmitLogin;

  if (!isOpen) return null;

  const showEmailMessageError = emailError ? "error-email" : "hidden";
  const showLoginMessageError = loginError ? "error-email" : "hidden";

  return (
    <>
      <div className="fixed z-10 inset-0 overflow-y-auto">
        <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <div className="fixed inset-0 transition-opacity" aria-hidden="true">
            <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
          </div>

          <span
            className="hidden sm:inline-block sm:align-middle sm:h-screen"
            aria-hidden="true"
          >
            &#8203;
          </span>

          <div className="border-white border-2 bg-gray-dark inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
            <div className="flex justify-center">{title}</div>
            <span className={showLoginMessageError}>
              <strong>Email already in use</strong>
            </span>
            <form onSubmit={onSubmitAction}>
              <div className="bg-white px-4 pb-4 sm:p-6 sm:pb-4">
                <div className="mb-4">
                  <label
                    htmlFor="email"
                    className="block text-gray-700 text-sm font-bold mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="@mail.com"
                    onChange={handleFormOnChange}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  />
                  <span className={showEmailMessageError}>
                    <strong>Email already in use</strong>
                  </span>
                  <label
                    htmlFor="password"
                    className="block text-gray-700 text-sm font-bold mb-2 mt-2"
                  >
                    Password
                  </label>

                  <input
                    type="password"
                    id="password"
                    name="password"
                    placeholder="********"
                    minLength={8}
                    onChange={handleFormOnChange}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  />
                  {buttonSignupLogin}
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                <button
                  onClick={() => {
                    handleOnClose();
                    setEmailError(false);
                    setLoginError(false);
                  }}
                  type="button"
                  className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:ml-3 sm:w-auto sm:text-sm"
                >
                  Enviar
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
