"use client";

import { signIn } from "next-auth/react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

type Inputs = {
  email: string;
  password: string;
};

const LoginUser = ({ session }: any) => {
  const params = useSearchParams();
  let callbackUrl = params.get("callbackUrl") || "/";
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<Inputs>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  useEffect(() => {
    if (session && session.user) {
      router.push(callbackUrl);
    }
  }, [callbackUrl, params, router, session]);

  const formSubmit: SubmitHandler<Inputs> = async (form) => {
    const { email, password } = form;
    signIn("credentials", {
      email,
      password,
    });
  };

  return (
    <div className='max-w-sm mx-auto card bg-base-300 my-4'>
      <div className='card-body'>
        <h1 className='card-title'>Sign in</h1>
        {params.get("error") && (
          <div className='alert text-error'>
            {params.get("error") === "CredentialsSignIn"
              ? "Invalid email or password"
              : params.get("error")}
          </div>
        )}
        {params.get("success") && (
          <div className='alert alert-success'>{params.get("success")}</div>
        )}
        <form onSubmit={handleSubmit(formSubmit)}>
          <div className='my-2'>
            <label htmlFor='email' className='label'>
              Email
            </label>
            <input
              type='text'
              id='email'
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /[a-z0-9+@[a-z]+\.[a-z]{2,3}$/,
                  message: "Email is invalid",
                },
              })}
              className='input input-bordered w-full max-w-sm'
              placeholder='Write your email here...'
            />
            {errors.email?.message && (
              <div className='text-error'>{errors.email.message}</div>
            )}
          </div>
          <div className='my-2'>
            <label htmlFor='password' className='label'>
              Password
            </label>
            <input
              type='password'
              id='password'
              {...register("password", {
                required: "Password is required",
              })}
              className='input input-bordered w-full max-w-sm'
              placeholder='Write your email here...'
            />
            {errors.password?.message && (
              <div className='text-error'>{errors.password.message}</div>
            )}
          </div>
          <div className='my-4'>
            <button
              type='submit'
              disabled={isSubmitting}
              className='btn btn-primary w-full'>
              {isSubmitting && (
                <span className='loading loading-spinner'></span>
              )}
              Sign In
            </button>
            <button type="button" onClick={()=>signIn("google")}>Google</button>
          </div>
        </form>
        <p>
          Need new account ?
          {/* <Link href={`/register?callbackUrl/${callbackUrl}`} className='link'> */}
          Register
          {/* </Link> */}
        </p>
      </div>
    </div>
  );
};

export default LoginUser;
