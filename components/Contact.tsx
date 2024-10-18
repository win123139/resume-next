import React from "react";
import {FlipWords} from "@/components/ui/FlipWords";
import {FloatingDock} from "@/components/ui/FloatingDock";
import {links} from "@/data";
const Contact = () => {
    const words = ["Love     ", "Hate     ", "Contact"];
    return (

        <div className="py-20" id="">
            <h1 className="heading">
                <FlipWords words={words} duration={500} className="text-sky-500" />
                <span>ME ?</span>
            </h1>

            <div className="flex items-center justify-center pt-10 w-full">
                <FloatingDock
                    mobileClassName="translate-y-20" // only for demo, remove for production
                    items={links}
                />
            </div>
        </div>
    );
};


export default Contact;