import { NextResponse } from "next/server";
import { db } from '@/lib/db'
import { currentUser } from "@/lib/auth";

export async function POST(request: Request) {
    const user= await currentUser()
    const { avatarUrl, profileName } = await request.json()
    console.log(avatarUrl)
    console.log(profileName)

    try {

        if (!user) {
            return new NextResponse("Unauthorized",{status:401})
        }
        if (!profileName || !avatarUrl || !user.id) {
            return new NextResponse("Invalid data",{status:400})
        }
        const userCreated = await db.userNetflix.create({
            data: {
                profileName,
                avatarUrl,
                userId:user.id
                
            }
        })
        return NextResponse.json(userCreated)
    } catch (error) {
        console.log(error);
        return new NextResponse("Internal error", { status: 500 })
    }
}

export async function DELETE(request: Request) {
    const user = await currentUser();
    console.log(user)
    try {
        if (!user) {
            return new NextResponse("Unauthorized",{status:401})
        }
        const { userId } = await request.json();

        if (!userId) {
            return new NextResponse("Id is required",{status:400})
        }

        const userDeleted = await db.userNetflix.delete({
            where: {
                id: userId
            }
        })
        return NextResponse.json(userDeleted)
    } catch (error) {

        console.log(error)
        return new NextResponse("Internal error",{status:500})
        
    }
}