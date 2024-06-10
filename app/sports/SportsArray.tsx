import { cn } from '@/lib/utils'
import Link from 'next/link';
import React from 'react'

export default function SportsArray({
    data,
    color,
    className
}: {
    data: {
        id: string;
        attributes: {
            title: string;
        };
    }[];
    color: string | null;
    className?: string
}) {

    return (
        <div className={cn(
            "grid grid-cols-1 sm:grid-cols-2 gap-6",
            className
        )}>
            {data.map(sport => (
                <Link
                    key={sport.id}
                    href={`/sports/${sport.id}`}
                    className={cn(
                        'py-6 px-10 text-background font-medium rounded-2xl shadow-md',
                        'opacity-85 hover:opacity-100 hover:shadow-lg hover:scale-105 transition-all duration-300'
                    )}
                    style={{backgroundColor: color ?? undefined}}
                >
                    <span className=' opacity-100'>{sport.attributes.title}</span>
                </Link>
            ))}
        </div>
    )
}
