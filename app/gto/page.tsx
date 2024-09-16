import Breadcrumbs from "@/components/Breadcrumbs";
import ErrorHandler from "@/components/errors/ErrorHandler";
import Markdown from "@/components/Markdown";
import { getGto } from "@/lib/queries/gto";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default async function Gto() {

    const [ dataResult ] = await Promise.allSettled([
        getGto()
    ]);
    if (dataResult.status === "rejected") return (
        <ErrorHandler
            error={dataResult.reason as unknown}
            place="Комплекс ГТО" 
            notFound
            goBack={false}
        />
    );

    return (
        <div className='sm:w-4/5 container my-16'>
            <Breadcrumbs data={[{ title: "Комплекс ГТО", slug: "gto" }]} />

            <h1 className='font-bold lg:text-2xl text-lg'>Комплекс ГТО</h1>

            <div className='my-16'>
                <Markdown data={dataResult.value.text}/>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
                    {dataResult.value.links.map((item, indx) => (
                        <Link
                            key={indx}
                            href={item.link}
                            className={cn(
                                'py-6 px-10 text-primary-foreground bg-primary font-medium rounded-2xl shadow-md',
                                'opacity-90 hover:opacity-100 hover:shadow-lg hover:scale-105 transition-all duration-300'
                            )}
                        >
                            <span className=' opacity-100'>{item.title}</span>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}