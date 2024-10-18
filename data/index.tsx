import Image from "next/image";
import {
    SiPhp,
    SiVuedotjs,
    SiReact,
    SiLaravel,
    SiNextdotjs,
    SiCodeigniter,
    SiNuxtdotjs,
    SiNodedotjs,
    SiGmail,
    SiFacebook,
    SiLinkedin,
    SiRabbitmq,
    SiMysql
} from "react-icons/si";
import {
    IconBrandGithub,
} from "@tabler/icons-react";
export const timelineData = [
    {
        title: "2024",
        content: (
            <div>
                <h1 className="text-neutral-800 dark:text-emerald-50 text-xs md:text-3xl font-normal mb-8">
                    Seoul System Vina
                </h1>
                <div className="grid grid-cols-1 gap-2 mb-6">
                    <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
                        <SiCodeigniter />
                        Codeigniter
                    </div>
                    <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
                        <SiNextdotjs/>
                        Next
                    </div>
                    <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
                        <SiLaravel/>
                        Laravel
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                    <Image
                        src="/ssv.jpg"
                        alt="startup template"
                        width={500}
                        height={500}
                        className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                    />
                </div>
            </div>
        ),
    },
    {
        title: "2020",
        content: (
            <div>
                <h1 className="text-neutral-800 dark:text-emerald-50 text-xs md:text-3xl font-normal mb-8">
                    Orient Software
                </h1>
                <div className="grid grid-cols-1 gap-2 mb-6">
                    <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
                        <SiPhp/>
                        Yii
                    </div><div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
                        <SiRabbitmq />
                        Micro  Service
                    </div>
                    <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
                        <SiVuedotjs/>
                        Vue
                    </div>
                    <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
                        <SiReact/>
                        React
                    </div>
                    <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
                        <SiLaravel/>
                        Laravel
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                    <Image
                        src="/orient.png"
                        alt="startup template"
                        width={500}
                        height={500}
                        className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                    />
                </div>
            </div>
        ),
    },
    {
        title: "2016",
        content: (
            <div>
                <h1 className="text-neutral-800 dark:text-emerald-50 text-xs md:text-3xl font-normal mb-8">
                    RikkeiSoft
                </h1>
                <div className="grid grid-cols-1 gap-2 mb-6">
                    <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
                        <SiNodedotjs/>
                        Nodejs
                    </div>
                    <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
                        <SiVuedotjs/>
                        Vue
                    </div>
                    <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
                        <SiNuxtdotjs/>
                        Nuxt
                    </div>
                    <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
                        <SiLaravel/>
                        Laravel
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                    <Image
                        src="/rikkei.png"
                        alt="startup template"
                        width={500}
                        height={500}
                        className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                    />
                </div>
            </div>
        ),
    },
    {
        title: "2013",
        content: (
            <div>
                <h1 className="text-neutral-800 dark:text-emerald-50 text-xs md:text-3xl font-normal mb-8">
                    Cominit
                </h1>
                <div className="grid grid-cols-1 gap-2 mb-6">
                    <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
                        <SiPhp/>
                        Yii
                    </div>
                    <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
                        <SiMysql/>
                        MySql
                    </div>


                </div>
                <div className="grid grid-cols-2 gap-4">
                    <Image
                        src="/cominit.png"
                        alt="startup template"
                        width={500}
                        height={500}
                        className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                    />

                </div>
            </div>
        ),
    },
];
export const gridItems = [
    {
        id: 1,
        title: "I prioritize client collaboration, fostering open communication ",
        description: "",
        className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
        imgClassName: "absolute  w-full",
        titleClassName: "justify-center md:justify-start lg:justify-end",
        img: "/b5.svg",
        spareImg: "/grid.svg",
    },
    {
        id: 2,
        title: "I'm very flexible with time zone communications",
        description: "",
        className: "lg:col-span-2 md:col-span-3 md:row-span-2",
        imgClassName: "",
        titleClassName: "justify-start",
        img: "",
        spareImg: "",
    },
    {
        id: 3,
        title: "I have a can-do attitude",
        description: "",
        className: "lg:col-span-2 md:col-span-3 md:row-span-2",
        imgClassName: "",
        titleClassName: "justify-center",
        img: "/can_do.png",
        spareImg: "",
    },
    // {
    //     id: 4,
    //     title: "Tech enthusiast with a passion for development.",
    //     description: "",
    //     className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    //     imgClassName: "",
    //     titleClassName: "justify-start",
    //     img: "/grid.svg",
    //     spareImg: "/b4.svg",
    // },
    //
    // {
    //     id: 5,
    //     title: "Currently building a JS Animation library",
    //     description: "The Inside Scoop",
    //     className: "md:col-span-3 md:row-span-2",
    //     imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    //     titleClassName: "justify-center md:justify-start lg:justify-center",
    //     img: "/b5.svg",
    //     spareImg: "/grid.svg",
    // },
    // {
    //     id: 6,
    //     title: "Do you want to start a project together?",
    //     description: "",
    //     className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    //     imgClassName: "",
    //     titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    //     img: "",
    //     spareImg: "",
    // },
];

export const workExperience = [
    {
        id: 1,
        title: "Backend",
        desc: "Laravel, Yii, Codeignite and Nodejs",
        className: "md:col-span-2",
        thumbnail: "/php.svg",
    },
    {
        id: 2,
        title: "Frontend",
        desc: "React, Vue, Nuxt and Next",
        className: "md:col-span-2", // change to md:col-span-2
        thumbnail: "/vue.svg",
    },
    {
        id: 3,
        title: "AWS",
        desc: "Amazon Web Service and Linux base server",
        className: "md:col-span-2", // change to md:col-span-2
        thumbnail: "/aws.svg",
    },
    {
        id: 4,
        title: "English",
        desc: "Toeic 700",
        className: "md:col-span-2",
        thumbnail: "/english.svg",
    },
];

export const links = [
    {
        title: "Gmail",
        icon: (
            <SiGmail  className="h-full w-full text-neutral-500 dark:text-red-500" />
        ),
        href: "mailto: bathien1408@gmail.com",
    },

    {
        title: "Facebook",
        icon: (
            <SiFacebook  className="h-full w-full text-neutral-500 dark:text-neutral-300" />
        ),
        href: "#",
    },
    {
        title: "Linkedin",
        icon: (
            <SiLinkedin  className="h-full w-full text-neutral-500 dark:text-neutral-300" />
        ),
        href: "https://www.linkedin.com/in/thi%E1%BB%87n-nguy%E1%BB%85n-b%C3%A1-149817148/",
    },

    {
        title: "GitHub",
        icon: (
            <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
        ),
        href: "#",
    },
];
