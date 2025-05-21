"use client"

import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import axios from "axios"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { formSchema } from "./RegisterForm.form"
import { toast } from "sonner"


export default function RegisterForm() {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
            password: "",
          repeatPassword:""
            
        },
      })
     
  const onSubmit = async(values: z.infer<typeof formSchema>) => {
        try {
          await axios.post('/api/auth/register', values);

          toast.success(
            "Usuario registrado correctamente",
          )
        } catch (error) {
          
          console.log(error);
          toast.error(
            "Ha ocurrido un error al registrar el usuario",
          )
        }
      }
    return (
             <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="Correo electrónico" {...field} className="h-14 rounded" />
              </FormControl>
              <FormMessage className="text-red-500"/>
            </FormItem>
          )}
                />
                <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="Contraseña" {...field} className="h-14 rounded" type="password" />
              </FormControl>
              <FormMessage  className="text-red-500"/>
            </FormItem>
          )}
                />
                <FormField
          control={form.control}
          name="repeatPassword"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="Repite la contraseña" {...field} className="h-14 rounded" type="password"/>
              </FormControl>
              <FormMessage className="text-red-500" />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full bg-[#E50914] rounded cursor-pointer hover:bg-gray-900">Submit</Button>
      </form>
    </Form>
    )
}