import ImageComponent from "@/components/ImageComponent"
import ErrorHandler from "@/components/errors/ErrorHandler"
import { getSportsmans } from "@/lib/queries/sportsman"
import Link from "next/link"

export default async function SportsmansList({
    searchParams,
    sportId,
    className
}: {
    searchParams: { [key: string]: string | string[] | undefined },
    sportId: string,
    className?: string
}) {

    const defaultPageSize = 35

    const page = searchParams['page'] ?? '1'
    const per = searchParams['per'] ?? defaultPageSize
    const search = searchParams['search'] as string | undefined

    const [ dataResult ] = await Promise.allSettled([
        getSportsmans({
          page: Number(page), 
          per: Number(per),
          search,
          universiade: true,
          sportId
        })
    ]);
    if (dataResult.status === "rejected") return (
        <ErrorHandler
          error={dataResult.reason as unknown}
          place="Спортсмены" 
          notFound={false}
        />
    );

    return (
        <div className={className}>
            <div className='flex lg:flex-row flex-col justify-between gap-6 border-b-2 border-accent-sfu pb-2'>
                <h1 className='font-semibold lg:text-xl text-base'>
                    Спортсмены
                </h1>
            </div>
            <div className='grid xl:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-6 gap-8 mt-6'>
                {dataResult.value.data.map(sportsman => {
                    const firstImage = sportsman.attributes.images.data.length > 0 ? sportsman.attributes.images.data[0].attributes.url : undefined
                    return (
                        <div key={sportsman.id} className='text-center'>
                            <Link href={`/sportsmans/${sportsman.id}`} className='font-semibold lg:text-base text-sm hover:text-accent-sfu transition-all'>
                                <ImageComponent 
                                    src={firstImage}
                                    alt="Фото"
                                    fill={false}
                                    width={150}
                                    height={150}
                                    className='mx-auto aspect-square object-cover rounded-2xl mb-2'
                                />
                                {sportsman.attributes.fio}
                            </Link>
                            <h2 className='font-medium lg:text-sm text-xs text-primary-foreground mt-1'>{sportsman.attributes.sport.data?.attributes.name}</h2>
                            <h3 className='lg:text-sm text-xs'>{sportsman.attributes.rank}</h3>
                        </div>
                    )}
                )}
            </div>
        </div>
    )
}