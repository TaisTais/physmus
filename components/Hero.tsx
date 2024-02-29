import Image from "next/image";
import { getMainDescription } from "@/lib/queries/main";
import { getMainCategories } from "@/lib/queries/main-categories";
import ErrorHandler from "@/components/errors/ErrorHandler";
import { Card,CardDescription,CardFooter,CardHeader,CardTitle, } from "@/components/ui/hero-cards";
import { Link } from "lucide-react";

export default async function Hero() {
  
  const [ mainDescription ] = await Promise.allSettled([ getMainDescription() ])
  if (mainDescription.status === "rejected") return (
    <ErrorHandler
      error={mainDescription.reason as unknown}
      place="Описание"
      notFound={false}
    />
  )

  const [ mainCategories ] = await Promise.allSettled([ getMainCategories() ])
  if (mainCategories.status == "rejected") return (
    <ErrorHandler
      error={mainCategories.reason as unknown}
      place="Категории"
      notFound={false}
    />
  )

  return (
    <>
      <div className="bg-hero mb-32 bg-no-repeat bg-cover bg-center">
        <div className="container justify-center items-center flex flex-row h-auto pt-10"> 
          <div className="flex flex-col gap-8 mr-8 ">
            <h1 className="text title text-primary-foreground">Виртуальный музей спорта СФУ</h1>
            <div className="text sub-title text-primary-foreground">
              {mainDescription.value.description}
            </div>
            <div className="flex flex-row gap-6">
              {mainDescription.value.icons.data.map((item, index) => (
                <Image key={index} src={item.attributes.url} alt={""} width={100} height={100} />
              ))}
            </div>
          </div>
          < Image src={"/sport-students.svg"} alt='students' width={750} height={100} />
        </div>
      </div>
      <div className="container h-auto">
        <div className="flex flex-col gap-5 mb-32">
          <Link href='/universiade2019'>
            <Card className="">
              <CardHeader>
                <CardTitle>{mainCategories.value.title[0]}</CardTitle>
                <CardDescription>{mainCategories.value.description[0]}</CardDescription>
              </CardHeader>
              <CardFooter>
              </CardFooter>
            </Card>
          </Link>

          <Link href='/sports'>
            <Card className="hero-card bg-sports-card">
            <CardHeader>
              <CardTitle>{mainCategories.value.title[1]}</CardTitle>
              <CardDescription>{mainCategories.value.description[1]}</CardDescription>
            </CardHeader>
            <CardFooter>
            </CardFooter>
            </Card>
          </Link>

          <Link href='/gto'>
            <Card className="hero-card bg-gto-card">
            <CardHeader>
              <CardTitle className="">{mainCategories.value.title[2]}</CardTitle>
              <CardDescription>{mainCategories.value.description[2]}</CardDescription>
            </CardHeader>
            <CardFooter>
            </CardFooter>
            </Card>
          </Link>
        </div>
      </div>
    </>
  );
}