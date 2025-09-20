import React from "react";
import ContactSection from "@/components/Home/ContactSection";
import HeroSection from "@/components/Home/HeroSection";
import HomeProjectSection from "@/components/Home/HomeProjectSection";
import LatestBlog from "@/components/Home/LatestBlog";
import { BlurFade } from "@/components/magicui/blur-fade";

const page = () => {
  return (
    <div className="px-4 md:px-32 lg:px-52 xl:px-64 2xl:px-96 flex flex-col gap-6">
      <BlurFade direction="right" duration={2}>
        <HeroSection />
        <HomeProjectSection
          liveLink="/"
          image="/me.png"
          projectDetail="An AI Captions and Hashtags generator which provides interactive and engaging Captions for your Social media posts to grow your reach and engagement."
          projectTitle="Building #CapTag (Captions and Hashtags)"
        />
      </BlurFade>
      <LatestBlog />
      <HomeProjectSection
        liveLink="https://demodesign-gsk2.vercel.app/"
        image="/dvhomepage.png"
        projectTitle="Full Stack Intern at DataVidhya"
        projectDetail="Developed the complete website where I worked at Frontend and Backend both using NextJs with Prisma and Postgres."
      />
      <ContactSection />
    </div>
  );
};
export default page;
