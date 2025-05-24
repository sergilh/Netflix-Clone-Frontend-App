import { NextResponse } from "next/server";
import { db } from '@/lib/db'

export async function POST(request: Request) {
    const { movies } =
        await request.json();
    
        if (!movies || movies.length===0) {
            return new NextResponse("Movies data required", { status:400})
        }
    try {
        const movieCreated = await Promise.all(movies.map(async(movie) => {
            const {  title, movieVideo, duration, trailerVideo, age, genre, thumbnailUrl } = movie;
            if ( !title || !movieVideo || !duration || !trailerVideo || !age || !genre || !thumbnailUrl) {
                throw new Error(`Missing data for movie: ${title}`)
            }

            return await db.movie.create({
                data: {
                    title: title,
                    movieVideo: movieVideo,
                    trailerVideo: trailerVideo,
                    age: age,
                    genre: genre,
                    thumbnailUrl: thumbnailUrl,
                    duration: duration,
                    createdAt: new Date()
                
                }
            })
        }))

        return NextResponse.json(movieCreated,{status:201})
        
    } catch (error) {
        console.log(error)
        return new NextResponse("Internal error",{status:500})
    }
}

