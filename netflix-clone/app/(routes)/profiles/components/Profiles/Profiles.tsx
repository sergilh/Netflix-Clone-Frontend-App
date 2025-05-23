'use client'
import { Button } from "@/components/ui/button";
import { ProfilesProps } from "./Profiles.types";

export function Profiles(props: ProfilesProps) {
    const { users } = props
    console.log({users})
    return (
        <div>
            <div className="flex gap-7">
            <p>Usuarios de perfiles</p>
            </div>
            
            <div className="mt-16 flex items-center justify-center">
                <Button onClick={()=>console.log("click")} className="border border-white/50 text-white/50 hover:text-white hover:border-white cursor-pointer">Administrar perfiles</Button>
            </div>
        </div>
    )
}