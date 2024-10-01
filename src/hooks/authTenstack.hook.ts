import { useMutation } from "@tanstack/react-query";
import { FieldValues } from "react-hook-form";
import { toast } from 'sonner';
import { loginUserService } from "../services/login";
import { registrationUserService } from "../services/registration";

export const useUserRegistration = () => {
    return useMutation<any, Error, FieldValues>({
        mutationKey: ["USER_REGISTRATION"],
        mutationFn: async (userData) => await registrationUserService(userData),
        onSuccess: () => {
            toast.success('User registration Successfully');
        },
        onError: (error) => {
            toast.error(error.message)
        }
    });
};

export const useUserLoginTanStack = () => {

    return useMutation<any, Error, FieldValues>({
        mutationKey: ["USER_LOGIN"],
        mutationFn: async (userData) => await loginUserService(userData),
        onSuccess: () => {
            toast.success("User Login Successfully");
        },
        onError: (error) => {
            toast.error(error.message);
        },
    });
}