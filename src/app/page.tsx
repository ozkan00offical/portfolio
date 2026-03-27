import Awards from "@/components/ui/awards";
import Experience from "@/components/ui/experiences";
import Projects from "@/components/ui/projects";
import Trainings from "@/components/ui/trainings";
import Hero from "@/components/ui/hero";
import ContactInfo from "@/components/ui/contact";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <Experience />
      <Trainings />
      <Projects />
      <Awards />
      <ContactInfo />
    </div>
  )
}
