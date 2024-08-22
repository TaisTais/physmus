import ErrorHandler from "@/components/errors/ErrorHandler"
import ImageComponent from "@/components/ImageComponent"
import Link from "next/link"
import { getExhibits } from '@/lib/queries/exhibits'
import PaginationControls from "@/components/PaginationControls"

const DEFAULT_PAGE_SIZE = 24

export default async function Content({
    searchParams,
    className
}: {
    searchParams: { [key: string]: string | string[] | undefined },
    className?: string
}) {

    const page = searchParams['page'] ?? '1'
    const per = searchParams['per'] ?? DEFAULT_PAGE_SIZE
    const search = searchParams['search'] as string | undefined

    const [ dataResult ] = await Promise.allSettled([
        getExhibits({
          page: Number(page), 
          per: Number(per),
          search,
        })
    ]);
    if (dataResult.status === "rejected") return (
        <ErrorHandler
          error={dataResult.reason as unknown}
          place="Экспонаты" 
          notFound
          goBack={false}
        />
    );

    return (
        <div className={className}>
            <div className='grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-6 gap-8'>
                {dataResult.value.data.map(exhibit => {
                    const firstImage = exhibit.attributes.images.data.length > 0 ? exhibit.attributes.images.data[0].attributes.url : undefined
                    return (
                        <Link 
                            key={exhibit.id}
                            href={`/exhibits/${exhibit.id}`} 
                            className='lg:text-base text-sm text-center rounded-3xl bg-primary shadow-md hover:scale-105 hover:shadow-lg transition-all duration-300'
                        >
                            <ImageComponent 
                                src={firstImage}
                                alt="Фото"
                                fill={false}
                                width={380}
                                height={380}
                                className='w-full md:aspect-[4/3] aspect-square mx-auto object-cover rounded-t-3xl'
                            />
                            <div className='p-6 text-left'>
                                <h2 className='font-medium lg:text-lg mb-0.5'>{exhibit.attributes.title}</h2>
                                <h3 className='text-xs'>{exhibit.attributes.description}</h3>
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