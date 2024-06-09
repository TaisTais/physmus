import Hero from "@/components/Hero";
import MainCategories from "@/components/MainCategories";

export default function Home() {

  return (
    <div className="flex flex-col gap-6">
      <Hero/>
      <MainCategories/>
    </div>
  );
}