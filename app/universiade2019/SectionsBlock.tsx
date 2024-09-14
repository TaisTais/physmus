import ImgTextOn from '@/components/ImgTextOn'
import React from 'react'
import { sections } from './sections'

export default function SectionsBlock() {

    function handleClassName(index: number) {
        switch (index) {
            case 0:
                return "2xl:w-[22%] lg:w-[30%] sm:w-[80%] w-[90%]";
    
            case 1:
                return "2xl:w-[23%] lg:w-[20%] sm:w-[80%] w-[90%]";
    
            case 2:
                return "2xl:w-[18%] lg:w-[38%] sm:w-[80%] w-[90%]";
            
            case 3:
                return "2xl:w-[30%] lg:w-[38%] sm:w-[80%] w-[90%]";
    
            case 4:
                return "2xl:w-[23%] lg:w-[20%] sm:w-[80%] w-[90%]";
    
            case 5:
                return "2xl:w-[32%] lg:w-[30%] sm:w-[80%] w-[90%]";

            case 6:
                return "2xl:w-[40%] lg:w-[38%] sm:w-[80%] w-[90%]";

            case 7:
                return "2xl:w-[23%] lg:w-[20%] sm:w-[80%] w-[90%]";

            case 8:
                return "2xl:w-[40%] lg:w-[38%] sm:w-[80%] w-[90%]";

            case 9:
                return "2xl:w-[32%] lg:w-[30%] sm:w-[80%] w-[90%]";

            case 10:
                return "2xl:w-[40%] lg:w-[38%] sm:w-[80%] w-[90%]";

            case 11:
                return "2xl:w-[23%] lg:w-[20%] sm:w-[80%] w-[90%]";

            case 12:
                return "2xl:w-[32%] lg:w-[30%] sm:w-[80%] w-[90%]";
    
            default:
                break;
        }
    }

  return (
    // <div className="mx-auto grid grid-flow-row-dense grid-cols-2 grid-rows-6 gap-6 md:w-full md:grid-cols-12 md:grid-rows-4">
    <div className="mx-auto flex flex-wrap gap-6 justify-center">
        {sections.map((section, index) => (
          <ImgTextOn
            key={index}
            className={handleClassName(index)}
            title={section.title}
            src={section.src}
            url={`/universiade2019/${section.url}`}
            width={700}
            height={700}
          />
        ))}
    </div>
  )
}
