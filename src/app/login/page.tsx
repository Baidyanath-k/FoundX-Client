"use client";

import FormInput from "@/src/components/FXForm/FormInput";
import FormWrapper from "@/src/components/FXForm/FormWrapper";
import PasswordInput from "@/src/components/FXForm/PasswordInput";
import GlassLoading from "@/src/components/UI/GlassLoading";
import { useUserLoginTanStack } from "@/src/hooks/authTenstack.hook";
import loginValidationSchema from "@/src/ZodValidationSchema/loginSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@nextui-org/button";

import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { FieldValues, SubmitHandler } from "react-hook-form";

const Login = () => {
  const searchParams = useSearchParams();

  const redirect = searchParams.get("redirect");

  const router = useRouter();

  const {
    mutate: handleUserLogin,
    isPending,
    isSuccess,
  } = useUserLoginTanStack();

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    const userData = {
      ...data,
    };

    // console.log(userData);
    handleUserLogin(userData);
  };

  if (!isPending && isSuccess) {
    if (redirect) {
      router.push(redirect);
    } else {
      router.push("/");
    }
  }

  return (
    <>
      {isPending && <GlassLoading />}
      <div className="flex h-screen w-full flex-col items-center justify-center">
        <h3 className="my-2 text-2xl font-bold">Login with FoundX</h3>
        <p className="mb-4">Welcome Back! Let&lsquo;s Get Started</p>
        <div className="w-[35%]">
          <FormWrapper
            onSubmit={onSubmit}
            resolver={zodResolver(loginValidationSchema)}
          >
            <div className="py-3">
              <FormInput
                name="email"
                label="Enter Your Email"
                inputKey="outside"
                labelPlacement="outside"
                type="text"
              />
            </div>
            <div className="py-3">
              <PasswordInput
                name="password"
                label="Password"
                inputKey="outside"
                labelPlacement="outside"
              />
            </div>

            <Button
              className="my-3 w-full rounded-md bg-default-900 font-semibold text-default"
              size="lg"
              type="submit"
            >
              Login
            </Button>
          </FormWrapper>
          <div className="text-center">
            Don&lsquo;t have account ?{" "}
            <Link href={"/registration"}>Register</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
