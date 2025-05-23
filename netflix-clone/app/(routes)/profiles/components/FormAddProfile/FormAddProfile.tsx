"use client"
import { FormAddProfileProps } from "./FormAddProfile.types";

 
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { formSchema } from "./FormAddProfile.form";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { dataProfilesImages } from "./FormAddProfile.data";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import axios from "axios";
import { toast } from "sonner";


export default function FormAddProfile(props: FormAddProfileProps) {
    const { setOpen } = props;
    const router = useRouter()
    const  [loading, setLoading] = useState(false)
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            profileName: "",
            avatarUrl:undefined
        },
      })
     
    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        try {
              setLoading(true)
            const response = await axios.post("api/userSerflix", values);
            if (response.status !== 200) {
                toast.error("Oops! Ha ocurrido un error")
            } else {
                
                toast.success("El perfil se ha creado correctamente")
            }
            router.refresh();
            setOpen(false)
            
          } catch (error) {
              setLoading(false)
              console.log(error)
                toast.error("Oops! Ha ocurrido un error")
          }

      }
    return (
        <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="profileName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nombre de perfil</FormLabel>
              <FormControl>
                <Input placeholder="Juan" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
                />
                <FormField
          control={form.control}
          name="avatarUrl"
          render={({ field }) => (
            <FormItem className="space-y-3">
              <FormLabel>Selecciona tu imagen de perfil</FormLabel>
                  <FormControl>
                  <RadioGroup
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  className="flex  space-y-1"
                      >
                          {dataProfilesImages.map((image) => {
                              return (
                          <FormItem key={image.urlImage} className="flex flex-col-reverse justify-center items-center space-x-5 space-y-0 cursor-pointer">
                                      <FormControl className="text-white ml-3 mt-1">
                                          <RadioGroupItem value={image.urlImage}/>
                                      </FormControl>
                                      <FormLabel className="font-normal flex justify-center w-full">
                                          <Image src={image.urlImage} alt="imageProfile" width={100} height={100} className={field.value === image.urlImage ? "cursor-pointer border border-white":""} />
                                      </FormLabel>
                            </FormItem>
                                  
                              )
                          })}
                </RadioGroup>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" disabled={loading} className="bg-gray-900 rounded hover:bg-white hover:text-black cursor-pointer" type="submit">Crear Perfil</Button>
      </form>
    </Form>
    )
}