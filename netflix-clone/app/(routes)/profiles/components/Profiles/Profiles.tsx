'use client'
import Image from "next/image";
import axios from "axios";
import { Button } from "@/components/ui/button";
import { ProfilesProps } from "./Profiles.types";
import { AddProfile } from "./AddProfile";
import { cn } from "@/lib/utils";
import { useState } from "react";
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
  } from "@/components/ui/alert-dialog"
import { Trash2 } from "lucide-react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { useCurrentSerflixUser } from "@/hooks/use-current-user";
import { UserNetflix } from "@prisma/client";
  

export function Profiles(props: ProfilesProps) {
    const [manageProfiles, setManageProfiles] = useState(false)
    const { users } = props
    const { changeCurrentUser, currentUser } = useCurrentSerflixUser();
    const route = useRouter()
    
    const onClickUser = (user: UserNetflix) => {
        changeCurrentUser(user);
        route.push("/")
    }

    const deleteUser = async (userId: string) => {
        try {
            axios.delete("/api/userSerflix",
                { data: { userId } });
            setManageProfiles(false)
            route.refresh()
        } catch (error) {
            console.log(error);
            toast.error("Oops!Ha ocurrido un error")
        }
    }
    return (
        <div>
            <div className="flex gap-7">
                {users.map((user) => {
                    return (
                        <div key={user.id} className="text-center relative cursor-pointer" onClick={()=>onClickUser(user)}>
                            <Image src={user.avatarUrl || ""} alt="profile-image" width={130} height={130} className={cn(manageProfiles ? "blur-md" : "",
                            "border-transparent hover:border-2 hover:border-white rounded-md")}/>
                            <p className="mt-3 text-2xl">{user.profileName}</p>

                            <div className={cn("top-14 cursor-pointer w-full flex gap-4 items-center justify-center z-20",
                                manageProfiles ? "absolute" : "hidden")}>
                                    <AlertDialog>
                                    <AlertDialogTrigger asChild>
                                        <div className="bg-white rounded-full hover:bg-red-100 p-1">
                                            <Trash2 className="w-6 h-6 text-red-500"/>
                                        </div>
                                        </AlertDialogTrigger>
                                        <AlertDialogContent className="bg-zinc-900">
                                            <AlertDialogHeader>
                                            <AlertDialogTitle>Seguro que quieres eliminar este perfil?</AlertDialogTitle>
                                            </AlertDialogHeader>
                                            <AlertDialogFooter>
                                            <AlertDialogCancel>Volver</AlertDialogCancel>
                                            <AlertDialogAction className="text-red-500 border-red-500 border" onClick={()=>deleteUser(user.id)}>Eliminar</AlertDialogAction>
                                            </AlertDialogFooter>
                                        </AlertDialogContent>
                                        </AlertDialog>

                                </div>
                        </div>
                    )
                })}
            <AddProfile/>
            </div>
            
            <div className="mt-16 flex items-center justify-center">
                <Button onClick={()=>setManageProfiles(!manageProfiles)} className="border border-white/50 text-white/50 hover:text-white hover:border-white cursor-pointer">Administrar perfiles</Button>
            </div>
        </div>
    )
}