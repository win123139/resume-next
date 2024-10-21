import { FaIdCard  } from "react-icons/fa6";

// import MagicButton from "./MagicButton";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import MagicButton from "@/components/ui/MagicButton";
import {SparklesCore} from "@/components/ui/Sparkles";

const Hero = () => {
    return (
        <div className="pb-20 pt-10">

            {/**
             *  UI: grid
             *  change bg color to bg-black-100 and reduce grid color from
             *  0.2 to 0.03
             */}


            <div className="flex justify-center relative my-20 z-10">
                <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
                    {/*<h2 className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">*/}
                    {/*    Dynamic Web by Thien*/}
                    {/*</h2>*/}

                    {/**
                     *  Link: https://ui.aceternity.com/components/text-generate-effect
                     *
                     *  change md:text-6xl, add more responsive code
                     */}
                    <div
                        className="h-[40rem] w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md">
                        <TextGenerateEffect
                            words="Hello World, I'm Thien FullStack Developer"
                            className="text-center text-[20px] md:text-5xl lg:text-6xl"
                        />
                        <TextGenerateEffect
                            words=""
                            className="text-center text-[20px] md:text-5xl lg:text-6xl"
                        />
                        <div className="w-[180rem] h-40 relative">
                            {/* Gradients */}
                            <div
                                className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm"/>
                            <div
                                className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4"/>
                            <div
                                className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm"/>
                            <div
                                className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4"/>

                            {/* Core component */}
                            <SparklesCore
                                background="transparent"
                                minSize={0.4}
                                maxSize={1}
                                particleDensity={1200}
                                className="w-full h-full"
                                particleColor="#FFFFFF"
                            />

                            {/* Radial Gradient to prevent sharp edges */}
                            <div
                                className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
                        </div>
                    </div>

                    <a href="/CV.DevPHP.NguyenBaThien.pdf" id="#about" download> <MagicButton title="Get My CV" icon={<FaIdCard />} position="right"/> </a>

                </div>
            </div>
        </div>
    );
};

export default Hero;