import { Button } from "@/components/ui/button";
import { Info, Play } from "lucide-react";

export default function SliderVideo(){
    return (
    <div className="relative w-full -[80vw] md:h-[56.25vw] lg:h-[45vw]">
            <video autoPlay loop muted className="brightness-50 object-fill w-full h-[80vw] md:h-[56.25vw] lg:h-[45vw]"src="/videos/video-1.mp4"/>
        
        <div className="flex flex-col justify-end absolute w-full md:w-[36%] px-4 md:px-0 md:left-[4%] z-20 top-0 -bottom-7 md:bottom-[36%]">
            <div className="pt-24 md:pt-0">
                    <h2 className="text-2xl md:text-5xl lg:text-8xl font-bold drop-shadow-xl">Serflix</h2>
                    <p className="max-w-md mt-2 text-xs md:text-base">Serflix cuenta con un catálogo de series y películas de cualquier género. ¡Comedia, terror, películas basadas en hechos reales, anime y mucho más! Añade tus series a favoritos y disfruta de tu  catálogo personalizado!
                    </p>
                    <div className="flex flex-col md:flex-row gap-4 mt-5">
                        <Button size="lg" variant="secondary" className="rounded bg-white hover:bg-gray-300 cursor-pointer">
                            <Play className="w-6 h-6 mr-2 fill-black text-black" />
                            <p className="text-black font-semibold">Reproducir</p>
                        </Button>
                        <Button size="lg" variant="secondary" className="bg-black rounded hover:bg-gray-500/70 cursor-pointer">
                            <Info className="w-6 fill-black"/>
                            <p className="font-semibold">Más información</p>
                        </Button>
                    </div>
            </div>
            </div>
            <div className="bg-transparent bg-no-repeat bg-contain w-full opacity-100 top-auto h-[14.7vw] -bottom-16 absolute gradient-video"/>
    </div>
        
    )
}