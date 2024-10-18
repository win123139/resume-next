
import Hero from "@/components/Hero";
import {FloatingNav} from "@/components/ui/FloatingNavbar";
import {FaHome} from "react-icons/fa";
import {Timeline} from "@/components/ui/TimeLine";
import {timelineData} from "@/data";
import Grid from "@/components/Grid";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";

export default function Home() {
  return (
      <main
          className="relative bg-black flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
          <div className="max-w-7xl w-full ">
              <FloatingNav navItems={[
                  {name: 'Home', link: '/', icon: <FaHome />}
                  ]} />
              <Hero/>
              <Timeline data={timelineData} />
              <Grid/>
              <Experience/>
              <Contact/>
          </div>
      </main>
);
}
