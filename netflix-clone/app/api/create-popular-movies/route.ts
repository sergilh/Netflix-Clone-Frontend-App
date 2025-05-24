import { db } from '@/lib/db'
import { NextResponse } from "next/server";

export async function POST(request: Request) {
    const { movies } = await request.json();

    if (!movies || movies.length===0) {
        return new NextResponse("Movies data required", { status:400})
    }

    try {
        const createdMovies = await Promise.all(movies.map(async (movie) => {
            const { title, thumbnailUrl, trailerVideo, movieVideo, ranking, age, duration, genre } = movie;

            if (!title || !thumbnailUrl || !trailerVideo || !movieVideo || !ranking || !age || !duration || !genre) {
                throw new Error(`Missing data for movie: ${title}`)
            }

            return await db.popularMovie.create({
                data: {
                    title: title,
                    thumbnailUrl: thumbnailUrl,
                    trailerVideo: trailerVideo,
                    movieVideo: movieVideo,
                    ranking: ranking,
                    age: age,
                    duration: duration,
                    genre: genre,
                }
                
            })
        }))
            
        return NextResponse.json(createdMovies)
    } catch (error) {
        console.log(error)
        return new NextResponse("Internal Error",{status:500})
    }
}