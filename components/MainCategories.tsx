import { getMainCategories } from "@/lib/queries/main-categories";
import { Card,CardDescription,CardFooter,CardHeader,CardTitle, heroCardTriggerStyle } from "@/components/ui/hero-cards";
import { Link } from "lucide-react";
import ErrorHandler from "./errors/ErrorHandler";


export default async function MainCategories(){
  const [ mainCategories ] = await Promise.allSettled([ getMainCategories() ])
  if (mainCategories.status == "rejected") return (
    <ErrorHandler
      error={mainCategories.reason as unknown}
      place="Категории"
      notFound={false}
    />
  )
  
  return (
    <div>
    <div className="w-4/5 container bg-orange-500 h-36">
        <div className="flex flex-col gap-5 mb-32">
          <Link href='/universiade2019'>
            <Card className={heroCardTriggerStyle()}>
              <CardHeader>
                <CardTitle>{mainCategories.value?.title}</CardTitle>
                <CardDescription>{mainCategories.value?.description}</CardDescription>
              </CardHeader>
              <CardFooter>
              </CardFooter>
            </Card>
          </Link>

          <Link href='/sports'>
            <Card className="hero-card bg-sports-card">
            <CardHeader>
              <CardTitle>{mainCategories.value?.title}</CardTitle>
              <CardDescription>{mainCategories.value?.description}</CardDescription>
            </CardHeader>
            <CardFooter>
            </CardFooter>
            </Card>
          </Link>

          <Link href='/gto'>
            <Card className="hero-card bg-gto-card">
            <CardHeader>
              <CardTitle className="">{mainCategories.value?.title}</CardTitle>
              <CardDescription>{mainCategories.value?.description}</CardDescription>
            </CardHeader>
            <CardFooter>
            </CardFooter>
            </Card>
          </Link>
        </div>
      </div>
      </div>
  );
}
