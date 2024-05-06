import ErrorHandler from '@/components/errors/ErrorHandler';
import { getSports } from '@/lib/queries/sports';
import { cn, getColor } from '@/lib/utils'
import Link from 'next/link';
import React from 'react'

export default async function SportsArray({
    categoryId,
    categoryIndx,
    className
}: {
    categoryId: string,
    categoryIndx: number,
    className?: string
}) {

    const [ dataResult ] = await Promise.allSettled([
        getSports({
            categoryId
        })
    ]);
    if (dataResult.status === "rejected") return (
        <ErrorHandler
            error={dataResult.reason as unknown}
            place="Виды спорта"
            notFound
            goBack={false}
        />
    );

    return (
        <div className={cn(
            "grid grid-cols-1 sm:grid-cols-2 gap-6",
            className
        )}>
            {dataResult.value.data.map(sport => (
                <Link
                    href={`/sports/${sport.id}`}
                    key={sport.id}
                    className='py-6 px-10 text-background font-medium rounded-2xl hover:scale-105 transition-all duration-200'
                    style={{backgroundColor: `hsl(var(${getColor(Number(categoryIndx))}))`}}
                >
                    {sport.attributes.name}
                </Link>
            ))}
        </div>
    )
}
