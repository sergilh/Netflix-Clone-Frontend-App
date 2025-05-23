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
 


export default function FormAddProfile(props: FormAddProfileProps) {
    const { setOpen } = props;
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            profileName: "",
            avatarUrl:undefined
        },
      })
     
      const onSubmit=(values: z.infer<typeof formSchema>)=> {
   
        console.log(values)
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
                                          <Image src={image.urlImage} alt="imageProfile" width={100} height={100} className={field.value === image.urlImage ? "cursor-pointer border-white":""} />
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
        <Button type="submit">Submit</Button>
      </form>
    </Form>
    )
}