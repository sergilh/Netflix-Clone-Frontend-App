import NavBar from "@/components/Shared/Navbar/Navbar";
import SliderVideo from "./(routes)/(home)/components/SliderVideo/SliderVideo";

export default function Home() {
  return (
    <div className="relative bg-zinc-900">
      <NavBar />
      <SliderVideo/>
    </div>
  );
}
