import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Hero() {
  return (
    <div>
      <div className="gradient w-full h-svh opacity-70 top-0 bg-fixed">
      <div className="z-1">
        <Image src={"/images/students.svg"} alt='students'/>
      </div>
      <Button/>
      </div>
    </div>
  );
}