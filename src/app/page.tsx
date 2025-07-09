import Scene from "@/components/Scene";
import Image from "next/image";

export default function Home() {
  return (
    <main className="">
      <div className="w-full h-[300vh]">
        <div className="h-screen sticky top-0">
          <Scene />
        </div>
      </div>
      <div className="h-screen"></div>
    </main>
  );
}
