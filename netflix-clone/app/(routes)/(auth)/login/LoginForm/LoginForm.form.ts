import { z } from "zod"

export const formSchema = z.object({
    email: z.string().min(2,{
        message:"El email es demasiado corto",
}),
    password: z.string().min(2, {
        message: "Requerido",
    }),
});
