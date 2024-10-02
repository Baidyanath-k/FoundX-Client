"use client";

import FormInput from "@/src/components/FXForm/FormInput";
import FormWrapper from "@/src/components/FXForm/FormWrapper";
import PasswordInput from "@/src/components/FXForm/PasswordInput";
import { useUserRegistration } from "@/src/hooks/authTenstack.hook";
import registerValidationSchema from "@/src/ZodValidationSchema/registratioSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@nextui-org/button";
import Link from "next/link";
import { FieldValues, SubmitHandler } from "react-hook-form";

const Registration = () => {
  // const {
  //   mutate: handleUserRegistration,
  //   isPending,
  //   data,
  //   isError,
  //   isSuccess,
  // } = useMutation({
  //   mutationKey: ["USER_REGISTRATION"],
  //   mutationFn: async (userData) => await registrationUserService(userData),
  //   onSuccess: () => {
  //     alert("User Create Succefully!");
  //   },
  // });

  const {mutate: handleUserRegistration} = useUserRegistration();

  // console.log(data, isPending, isError, isSuccess);
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    const userData = {
      ...data,
      profilePhoto:
        "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
    };
    // console.log(userData);

    handleUserRegistration(userData);
  };
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center">
      <h3 className="my-2 text-2xl font-bold">Register with FoundX</h3>
      <p className="mb-4">Welcome Back! Let&lsquo;s Get Started</p>
      <div className="w-[35%]">
        <FormWrapper
          onSubmit={onSubmit}
          resolver={zodResolver(registerValidationSchema)}
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
            <FormInput
              name="name"
              label="Enter Your Name"
              inputKey="outside"
              labelPlacement="outside"
              type="text"
            />
          </div>

          <div className="py-3">
            <FormInput
              name="mobileNumber"
              label="Enter Your Mobile Number"
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
            Register
          </Button>
        </FormWrapper>
        <div className="text-center">
          Have an account ? <Link href={"/login"}>Login</Link>
        </div>
      </div>
    </div>
  );
};

export default Registration;
