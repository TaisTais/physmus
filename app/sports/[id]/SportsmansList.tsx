import ImageComponent from "@/components/ImageComponent"
import PaginationControls from "@/components/PaginationControls"
import ErrorHandler from "@/components/errors/ErrorHandler"
import { getSportsmans } from "@/lib/queries/sportsman"
import Link from "next/link"

const DEFAULT_PAGE_SIZE = 35

export default async function SportsmansList({
    searchParams,
    sportId,
    className
}: {
    searchParams: { [key: string]: string | string[] | undefined },
    sportId: string,
    className?: string
}) {

    const page = searchParams['page'] ?? '1'
    const per = searchParams['per'] ?? DEFAULT_PAGE_SIZE
    const search = searchParams['search'] as string | undefined

    const [ dataResult ] = await Promise.allSettled([
        getSportsmans({
          page: Number(page), 
          per: Number(per),
          search,
          sportId
        })
    ]);
    if (dataResult.status === "rejected") return (
        <ErrorHandler
          error={dataResult.reason as unknown}
          place="Наша гордость" 
          notFound={false}
        />
    );

    return (
        <div className={className}>
            <div className='w-full max-w-none prose flex lg:flex-row flex-col justify-between gap-6 border-b-2 border-foreground pb-2'>
                <h3 className="">
                    Наша гордость
                </h3>
            </div>
            <div className='grid xl:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-6 gap-8 mt-6'>
                {dataResult.value.data.map(sportsman => {
                    const firstImage = sportsman.attributes.images.data.length > 0 ? sportsman.attributes.images.data[0].attributes.url : undefined
                    return (
                        <Link 
                            key={sportsman.id}
                            href={`/sportsmans/${sportsman.id}`} 
                            className='lg:text-base text-sm text-center rounded-3xl bg-primary shadow-md hover:scale-105 hover:shadow-lg transition-all duration-300'
                        >
                            <ImageComponent 
                                src={firstImage}
                                alt="Фото"
                                fill={false}
                                width={150}
                                height={150}
                                className='w-full md:aspect-[5/6] aspect-square mx-auto object-cover rounded-t-3xl'
                            />
                            <div className='p-3'>
                                <h2 className='font-medium mb-0.5'>{sportsman.attributes.fio}</h2>
                                <h3 className='text-xs'>{sportsman.attributes.rank}</h3>
                            </div>
                        </Link>
                    )}
                )}
            </div>
            <PaginationControls
                length={dataResult.value.meta.pagination.total}
                defaultPageSize={DEFAULT_PAGE_SIZE}
                pageParam='page'
                perParam='per'
                showMore={false}
            />
        </div>
    )
}