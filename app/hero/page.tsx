import { Button } from "@/components/ui/button";
import Image from "next/image";
import students from "../../public/images/students.svg";

export default function Hero() {
  return (
    <div>
      <div className="gradient w-full h-svh opacity-70 top-0 bg-fixed">
      <div className="z-1">
        <Image src={students} alt='students'/>
      </div>
      <Button/>
      </div>
    </div>
  );
}