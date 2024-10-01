import { z } from "zod";


const registerValidationSchema = z.object({
    name: z.string().trim().min(1, "Please Enter your name!!"),
    email: z.string().trim().email("Please enter valid Email!"),
    mobileNumber: z
        .string()
        .regex(/^\d{11}$/, "Please enter a valid mobile number!"),
    password: z.string().min(6, "Must be at least 6 characters."),
})


export default registerValidationSchema;