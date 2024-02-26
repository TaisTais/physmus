import Hero from "./Hero";

export default function Home() {

  return (
    <main className=" ">
      <div className="">
        <div className="">
          <Hero/>
        </div>
      </div>
    </main>
  );
}


        // {mainDescription.value.description}
        // <div className="grid gap-6">
        //   {mainDescription.value.icons.data.map((icon, index) => (
        //     <Image 
        //       key={index}
        //       src={icon.attributes.url}
        //       width={300}
        //       height={300}
        //       alt="Icon"
        //     />
        //   ))}
        // </div>