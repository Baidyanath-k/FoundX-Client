"use client";
import { Input } from "@nextui-org/input";
import { useFormContext } from "react-hook-form";

interface TProps {
  key: "inside" | "outside" | "outside-left";
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
  key,
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

  console.log(errors);
  return (
    <Input
      {...register(name)}
      isInvalid={!!errors[name]}
      errorMessage={errors[name] ? (errors[name].message as string) : ""}
      type={type}
      label={label}
      placeholder={placeholder}
      variant={variant}
      size={size}
      required={required}
      key={key}
      labelPlacement={labelPlacement}
    />
  );
};

export default FormInput;
