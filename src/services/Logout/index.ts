"use server"

import { cookies } from "next/headers";

export const Logout = () => {
    cookies().delete("accessToken");
    cookies().delete("refreshToken");
}