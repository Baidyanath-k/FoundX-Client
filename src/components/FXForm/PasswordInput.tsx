"use client";
import { Input } from "@nextui-org/input";
import React from "react";
import { useFormContext } from "react-hook-form";
import { EyeFilledIcon } from "./Icon/EyeFilledIcon";
import { EyeSlashFilledIcon } from "./Icon/EyeSlashFilledIcon";

interface TProps {
  inputKey: "inside" | "outside" | "outside-left" | undefined;
  labelPlacement: "inside" | "outside" | "outside-left";
  name: string;
  label: string;
  placeholder?: string;
  // type: string;
  required?: boolean;
  size?: "sm" | "md" | "lg";
  variant?: "flat" | "bordered" | "underlined" | "faded";
}

const PasswordInput = ({
  variant = "bordered",
  size = "md",
  inputKey,
  labelPlacement,
  required = false,
  label,
  placeholder,
  // type,
  name,
}: TProps) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  const [isVisible, setIsVisible] = React.useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);

  return (
    <Input
      {...register(name)}
      isInvalid={!!errors[name]}
      errorMessage={ errors[name] ? (errors[name].message as string) : ""
      }
      // type={type}
      label={label}
      placeholder={placeholder}
      variant={variant}
      size={size}
      required={required}
      key={inputKey}
      labelPlacement={labelPlacement}
      endContent={
        <button
          className="focus:outline-none"
          type="button"
          onClick={toggleVisibility}
          aria-label="toggle password visibility"
        >
          {isVisible ? (
            <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
          ) : (
            <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
          )}
        </button>
      }
      type={isVisible ? "text" : "password"}
    />
  );
};

export default PasswordInput;
