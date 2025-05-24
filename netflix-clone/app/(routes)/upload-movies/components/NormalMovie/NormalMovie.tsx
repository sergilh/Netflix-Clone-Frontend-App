'use client'
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Upload } from "lucide-react";
import axios from "axios";
import { dataMovies } from "./NormalMovie.data";
import { toast } from "sonner";

export default function NormalMovie() {
    const [loading, setLoading] = useState(false)
    
    const uploadMovies = async () => {
        setLoading(true);
        try {
            await axios.post("/api/create-movies", { movies: dataMovies })
            toast.success("Películas subidas con éxito")
            setLoading(false);
        } catch (error) {
            toast.success("Oops!Ha habido un error al subir las películas")
            console.log(error)
            setLoading(false);

        }
    }
    return (
        <div className="border rounded-lg border-white-400 p-6
         hover:bg-[#e50914] transition-all
         duration-300 cursor-pointer">
            <h1 className="text-xl font-bold mb-4">Subir películas normales</h1>
            <Button className="w-full cursor-pointer bg-white text-black" variant={"outline"} disabled={loading}
                onClick={uploadMovies}>Subir películas
                <Upload className="w-4 h-4 ml-2"/>
            </Button>
        </div>
    )
}