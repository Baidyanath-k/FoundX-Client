"use client";

import { Input } from "@nextui-org/input";
import { useFormContext } from "react-hook-form";

interface TProps {
  inputKey: "inside" | "outside" | "outside-left" | undefined;
  labelPlacement: "inside" | "outside" | "outside-left";
  name: string;
  label: string;
  placeholder?: string;
  type: string;
  required?: boolean;
  size?: "sm" | "md" | "lg";
  variant?: "flat" | "bordered" | "underlined" | "faded";
}

const FormInput = ({
  variant = "bordered",
  size = "md",
  inputKey,
  labelPlacement,
  required = false,
  label,
  placeholder,
  type,
  name,
}: TProps) => {
  // formState:{errors} use shoe zod error show
  const {
    register,
    formState: { errors },
  } = useFormContext();

  // console.log(errors);
  return (
    <Input
      {...register(name)}
      isInvalid={!!errors[name]}
      errorMessage={
        errors && errors[name] ? (errors[name].message as string) : ""
      }
      type={type}
      label={label}
      placeholder={placeholder}
      variant={variant}
      size={size}
      required={required}
      key={inputKey}
      labelPlacement={labelPlacement}
    />
  );
};

export default FormInput;
