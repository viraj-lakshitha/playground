"use client";
import { ChangeEvent, FC, FormEvent, useState } from "react";
import { isEmpty } from "lodash";
import { isEmail } from "@/utils/common";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/firebase.config";
import { useRouter } from "next/navigation";

const SignUp: FC = () => {
  const router = useRouter();
  const [errors, setErrors] = useState<string[] | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [signUpForm, setSignUpForm] = useState<{
    email: string;
    password: string;
  }>({
    email: "",
    password: "",
  });

  const onChange = (
    event: ChangeEvent<HTMLInputElement>,
    field: "email" | "password"
  ) => {
    setErrors(null);
    setSignUpForm((prev) => ({
      ...prev,
      [field]: event.target.value,
    }));
  };

  const onSubmit = async (event: FormEvent) => {
    event.preventDefault();
    let errorMessages = [];
    if (Object.values(signUpForm).some((e) => isEmpty(e))) {
      errorMessages.push("Please fill the form");
      if (errorMessages.length !== 0) {
        setErrors(errorMessages);
        return;
      }
    }

    if (!isEmail(signUpForm.email)) {
      errorMessages.push("Please enter valid email address");
      if (errorMessages.length !== 0) {
        setErrors(errorMessages);
        return;
      }
    }

    setIsLoading(true);
    createUserWithEmailAndPassword(auth, signUpForm.email, signUpForm.password)
      .then(() => router.push("/signin"))
      .catch(console.error)
      .finally(() => setIsLoading(false));
  };

  return (
    <div className="grid grid-cols-12 min-h-screen min-w-screen">
      <div className="col-start-1 col-end-10 bg-blue-500" />
      <form
        onSubmit={(e) => onSubmit(e)}
        className="col-start-11 flex justify-center items-center"
      >
        <div className="flex flex-col gap-y-4 p-5">
          <h1 className="text-2xl font-bold text-center">SignUp</h1>
          <h5 className="text-xs text-center">
            Explore Firebase capabilities with Next and Tailwind
          </h5>
          <hr />
          <div className="flex gap-5 justify-between">
            <label>Email</label>
            <input
              type="email"
              onChange={(e) => onChange(e, "email")}
              value={signUpForm.email}
              className="border p-1 focus:outline-none"
            />
          </div>
          <div className="flex gap-5 justify-between">
            <label>Password</label>
            <input
              type="password"
              onChange={(e) => onChange(e, "password")}
              value={signUpForm.password}
              className="border p-1 focus:outline-none"
            />
          </div>
          {errors && (
            <p className="text-red-500 text-[12px] font-bold">{errors}</p>
          )}
          <button
            type="submit"
            className="bg-blue-500 rounded-md p-2 text-white flex justify-center"
          >
            {isLoading ? (
              <svg
                aria-hidden="true"
                className="w-6 h-6 animate-spin fill-blue-600"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="blue-400"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="white"
                />
              </svg>
            ) : (
              "Register"
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
