import { getMainCategories } from "@/lib/queries/main-categories";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/hero-cards";
import ErrorHandler from "./errors/ErrorHandler";
import Link from "next/link";
import ImageComponent from "./ImageComponent";


export default async function MainCategories(){

  const [ mainCategories ] = await Promise.allSettled([ getMainCategories() ])
  if (mainCategories.status == "rejected") return (
    <ErrorHandler
      error={mainCategories.reason as unknown}
      place="Категории"
      notFound={false}
    />
  )

  function CardElement({
    href,
    title,
    description,
    imageSrc
  }: {
    href: string,
    title: string,
    description: string | null,
    imageSrc: string | undefined
  }) {
    return (
      <Link href={href} className="hover:scale-105 rounded-xl transition-all duration-200">
        <Card className="flex items-center relative overflow-hidden min-h-40">
          <CardHeader className="lg:px-14 px-8">
            <CardTitle className="text-background lg:text-2xl sm:text-xl text-lg drop-shadow-md z-20">{title}</CardTitle>
            <CardDescription className="text-background sm:text-base text-sm drop-shadow-md z-20">{description}</CardDescription>
          </CardHeader>
          <div className="w-full h-full absolute z-[15] lg:bg-black/10 bg-black/20"/>
          <ImageComponent
            src={imageSrc}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1400px) 80vw, 1400px"
            className="z-10 object-cover object-center"
          />
        </Card>
      </Link>
    )
  }

  return (
    <div className="sm:w-4/5 container">
      <div className="flex flex-col gap-5 mb-32">
        <CardElement 
          href="/universiade2019"
          title={mainCategories.value.universiade.title}
          description={mainCategories.value.universiade.description}
          imageSrc={mainCategories.value.universiade.image.data?.attributes.url}
        />
        <CardElement 
          href="/sports"
          title={mainCategories.value.sports.title}
          description={mainCategories.value.sports.description}
          imageSrc={mainCategories.value.sports.image.data?.attributes.url}
        />
        <CardElement 
          href="/gto"
          title={mainCategories.value.gto.title}
          description={mainCategories.value.gto.description}
          imageSrc={mainCategories.value.gto.image.data?.attributes.url}
        />
      </div>
    </div>
  );
}
