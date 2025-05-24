'use client'
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Upload } from "lucide-react";
import axios from "axios";
import { toast } from "sonner";
import { trendingMovies } from "./TrendingMovie.data";

export default function TrendingMovie() {
    const[loading,setLoading]=useState(false)
    const createMovies = async () => {
        try {
            setLoading(true);
            await axios.post("/api/create-popular-movies", {
                movies:trendingMovies
            })
            toast.success("Películas subidas con éxito");
            setLoading(false)
            
        } catch (error) {
            toast.success("Oops!Ha habido un error al subir las películas")
            console.log(error)
            setLoading(false)
        }
    }
    return (
        <div className="border rounded-lg border-white-400 p-6
         hover:bg-[#e50914] transition-all
         duration-300 cursor-pointer">
            <h1 className="text-xl font-bold mb-4">Subir películas populares</h1>
            <Button className="w-full cursor-pointer bg-white text-black " disabled={loading} onClick={createMovies} variant={"outline"} 
                >Subir películas
                <Upload className="w-4 h-4 ml-2"/>
            </Button>
        </div>
    )
}