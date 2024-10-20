import React from "react";
import {Button} from "@/components/ui/MovingBorder";
import {workExperience} from "@/data";
import {TypewriterEffectSmooth} from "@/components/ui/Typewriter";
const Experience = () => {
    const words = [
        {
            text: "My",
        },
        {
            text: "Tech stack",
            className: "dark:text-sky-500",
        }
    ];
  return (
        <div className="py-20" id="">
            <div className="heading flex flex-col items-center justify-center">
                <TypewriterEffectSmooth words={words} className="heading text-xl md:text-2xl"/>
            </div>

            <div className="w-full mt-12 grid lg:grid-cols-4 grid-cols-1 gap-10">
                {workExperience.map((card) => (
                <Button
                    key={card.id}
                    //   random duration will be fun , I think , may be not
                    duration={5000}
                    borderRadius="1.75rem"
                    style={{
                        //   add these two
                        background: "rgb(4,7,29)",
                        backgroundColor:
                            "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
                        // add this border radius to make it more rounded so that the moving border is more realistic
                        borderRadius: `calc(2.75rem* 0.96)`,
                    }}
                    className="flex-1 text-black dark:text-white border-neutral-200 dark:border-slate-800"
                >
                    <div className="flex lg:flex-row flex-col  p-3 py-6 md:p-5 lg:p-10 gap-2">
                        <img src={card.thumbnail} alt={card.thumbnail} className="lg:w-32 md:w-20 w-16 fill-white-100"/>
                        <div className="lg:ms-5">
                            <h1 className="text-start text-xl md:text-2xl font-bold">
                                {card.title}
                            </h1>
                            <p className="text-start text-white-100 mt-3 font-semibold">
                                {card.desc}
                            </p>
                        </div>
                    </div>
                </Button>
                    ))}
            </div>
        </div>
      );

};

export default Experience;