import Link from "next/link";
import {
  RiBriefcase4Fill,
  RiTeamFill,
  RiTodoFill,
  RiArrowDownSLine,
  RiDownloadFill,
  RiMailSendFill
} from "react-icons/ri";

import { Button } from "@/components/Other/UI/button";
import DevImg from "@/components/Other/DevImg/DevImg";
import Badge from "@/components/Other/Bagde/Badge";
import Socials from "@/components/Other/Socials/Socials";

const InitialHome = () => {

  return (
    <section
      className="py-12 md:pt-24 xl:py-24 xl:pt-0 relative"
    >
      <div className="container mx-auto">
        <div className="flex justify-between gap-x-8">
          <div
            className="flex max-w-[600px] flex-col justify-center
           mx-auto xl:mx-0 text-center xl:text-left"
          >
            <div
              className="text-sm uppercase font-semibold
            mb-4 text-primary tracking-[4px]"
            >
              Tech Lead
            </div>
            <h1 className="h1 mb-4">Hello! I am Anderson Lima!</h1>
            <p className="subtitle max-w-[490px] mx-auto xl:mx-0">
            I am a passionate web developer with over 7 years of experience in creating innovative solutions for startups and digital marketing agencies.
            </p>
            <div
              className="flex flex-col gap-y-3 md:flex-row gap-x-3
             mx-auto xl:mx-0 mb-12"
            >

              <Link
                target="_blank"
                href="https://drive.google.com/file/d/1-kh_Qrf7ef2CdM7-8wrXkWtXv0UfKPdP/view?usp=sharing"
                aria-label="cv"
              >
                <Button variant="secondary" className="gap-x-2">
                  Download CV
                  <RiDownloadFill size={18} />
                </Button>
              </Link>
            </div>
            <Socials
              containerStyles="flex gap-x-6 mx-auto xl:mx-0"
              iconsStyles="text-foreground text-[22px] 
            hover:text-primary transition-all"
            />
          </div>
          <div className="hidden xl:flex relative">
            <Badge
              containerStyles="absolute top-[24%] -left-[5rem]  animate-up-down-3"
              icon={<RiBriefcase4Fill />}
              endCountNum={new Date().getFullYear() - 2017}
              badgeText="Years of Experience"
            />

            <Badge
              containerStyles="absolute top-[80%] -left-[1rem]  animate-up-down-2"
              icon={<RiTodoFill />}
              endCountNum={24}
              badgeText="Projects"
            />

            <Badge containerStyles="absolute top-[55%] -right-8 animate-up-down-1"
              icon={<RiTeamFill />} endCountNum={9}
              badgeText="Satisfied companies" />
            <DevImg
              alt="initial image"
              priority
              containerStyles=" w-[510px] animate-up-down
            h-[510px] relative flex items-center"
              imgSrc="/developer.png"
            />
          </div>
        </div>
        <div
          className="hidden xl:flex absolute left-2/4 bottom-44
        xl:bottom-12 animate-bounce"
        >
          <RiArrowDownSLine className="text-3xl text-primary" />
        </div>
      </div>
    </section>
  );
};

export default InitialHome;
