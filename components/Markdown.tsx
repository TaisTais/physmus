"use client"

import React from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehypeRaw from "rehype-raw"
import { cn, getShortDescription } from '@/lib/utils'
import { ChevronDown, ChevronUp } from 'lucide-react'
import ImageComponent from './ImageComponent'

export default function Markdown({
  data,
  moreButton,
  className,
}: {
  data?: string | null;
  moreButton?: boolean;
  className?: string;
}) {

  const [more, setMore] = React.useState(false);

  const maxLength = 140;

  if (!!!data || data.length <= 1) return null;

  const MarkdownComponents: object = {
    img: (props: {src: string, alt: string}) => {
      console.log(props)
      return (
        <span className='mb-[2em]'>
          <ImageComponent 
            src={props.src} 
            alt={props.alt} 
            fill={false}
            width={1336}
            height={1070}
            className="object-contain lg:w-2/3 w-full h-auto mx-auto mb-1 overflow-hidden rounded-3xl"
          />
          <span className='block w-full mx-auto text-center italic'>{props.alt}</span>
        </span>
      )
    },
    p: (paragraph: { children?: boolean; node?: any}) => {
        return <p>{paragraph.children}</p>
    },
  }
  
  return (
    <article 
      className={cn(
        "prose prose-p:my-0 prose-ul:my-0 prose-li:my-0 prose-headings:mb-0 prose-headings:pb-2 prose-headings:border-b-2 prose-headings:border-foreground prose-headings:text-foreground prose-blockquote:text-muted-foreground prose-strong:text-foreground prose-a:text-primary-foreground max-w-none w-full",
        className
      )}
    >
      <ReactMarkdown 
        className="!text-foreground whitespace-pre-wrap transition-all duration-300 ease-in-out max-h-fit"
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeRaw]}
        components={MarkdownComponents}
      >
        {(moreButton === undefined || moreButton === false)
            ? data 
            : more ? data : getShortDescription(data, maxLength)
        }
      </ReactMarkdown>
      {moreButton && (data.split(" ").length > maxLength) ? (
        <div
          className="!text-foreground mt-3 flex cursor-pointer items-center gap-1 text-xs uppercase hover:underline"
          onClick={() => setMore((value) => !value)}
        >
          {more ? (
            <>
              <p>Свернуть</p>
              <ChevronUp className="h-6 w-6 stroke-1" />
            </>
          ) : (
            <>
              <p>Читать далее</p>
              <ChevronDown className="h-6 w-6 stroke-1" />
            </>
          )}
        </div>
      ) : null}
    </article>
  )
}
