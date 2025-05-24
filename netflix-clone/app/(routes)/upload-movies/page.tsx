import { Logo } from "@/components/Shared/Logo";
import NormalMovie from "./components/NormalMovie/NormalMovie";
import TrendingMovie from "./components/TrendingMovie/TrendingMovie";

export default function UploadMoviesPage() {
    return (
        <div className="bg-zin-900 h-full flex flex-col justify-center items-center">
            <Logo />
            <h1 className="text-2xl my-8 font-semibold">Sube tus películas favoritas🍿</h1>
            <div className="max-w-2xl mx-auto grid grid-cols-2 gap-4">
                <NormalMovie/>
                <TrendingMovie/>
            </div>
        </div>
    )
}