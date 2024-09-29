// use zod
// use React Hook Form resolver --> this is connection zod and react Hook form

import { z } from "zod";

const loginValidationSchema = z.object({
    email: z.string().trim().email("Please enter valid Email!"),
    password: z.string().trim().min(6, "Password needs to be at least 6 Characters")
})

export default loginValidationSchema;