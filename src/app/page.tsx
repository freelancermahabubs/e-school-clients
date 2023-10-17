import Image from "next/image";
import styles from "./page.module.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FooterNotes from "@/components/FooterNotes";
import Adress from "@/components/Adress";
import BestStudents from "@/components/BestStudents";
import TeachersPost from "@/components/TeachersPost";
import Notice from "@/components/Notice";
import OverviewCounter from "@/components/OverviewCounter";
import EducationMenu from "@/components/EducationMenu";
import AboutUs from "@/components/AboutUs";
import HeroSection from "@/components/HeroSection";

export default function Home() {
  return (
    <main>
      <Header />
      <div className="wrapper">
        <HeroSection />
        <AboutUs />
        <EducationMenu />
        <OverviewCounter />
        <Notice />
        <TeachersPost />
        <BestStudents />
        <Adress />
        <FooterNotes />
      </div>

      <Footer />
    </main>
  );
}
