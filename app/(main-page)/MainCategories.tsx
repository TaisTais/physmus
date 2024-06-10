import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/hero-cards";
import Link from "next/link";
import ImageComponent from "../../components/ImageComponent";

export default function MainCategories({
  categories
}: {
  categories: {
    description: string | null;
    title: string;
    link: string;
    image: {
      data: {
        attributes: {
          url: string;
        };
      } | null;
    };
  }[];
}) {
  return (
    <div className="sm:w-4/5 container">
      <div className="flex flex-col gap-5 mb-32">
        {categories.map((category, indx) => (
          <CategoriesCard 
            key={indx}
            href={category.link}
            title={category.title}
            description={category.description}
            imageSrc={category.image.data?.attributes.url}
          />
        ))}
      </div>
    </div>
  );
}

function CategoriesCard({
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