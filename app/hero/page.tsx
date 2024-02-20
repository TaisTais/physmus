import Image from "next/image";

export default function Hero() {
  return (
    <div>
      <div className="bg-gradient-to-br from-light-sky from-15% via-light-yellow to-light-orange h-screen">
        <Image src={"/sport-students.svg"} alt='students' width={300} height={300}/>
      </div>
    </div>
  );
}