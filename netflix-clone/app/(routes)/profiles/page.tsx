import { db } from "@/lib/db"
import { auth } from "@/auth"
import { redirect } from "next/navigation"
import { Profiles } from "./components/Profiles"

export default async function ProfilePage() {
    const session = await auth()

    if (!session?.user) {
        redirect("/login")
    }
    //Para asegurarse de que no se pueda entrar manualmente desde la ruta
    const userSerflix = await db.userNetflix.findMany({
        where: {
            userId:session?.user?.id
        }
    })
    console.log({userSerflix})
    return (
        <div className="h-full flex flex-col justify-center items-center
         bg-zinc-900">
            <div>
            <h1 className="text-4xl mb-6">¿Quién eres? Elige tu perfil</h1>
            </div>

            <Profiles users={userSerflix} />
            
         </div>
    )
}