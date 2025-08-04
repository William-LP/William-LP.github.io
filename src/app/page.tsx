import TopBar from '@/app/components/TopBar'
import AboutMe from '@/app/components/AboutMe'
import Experience from '@/app/components/Experience'
import Education from '@/app/components/Education'
import Projects from '@/app/components/Projects'
import Skills from '@/app/components/Skills'
import Hobbies from '@/app/components/Hobbies'
import Footer from '@/app/components/Footer'

export default function Home() {
  return (
    <div className='min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300'>
      <TopBar />
      <AboutMe />
      <Experience />
      <Education />
      <Skills />
      <Projects />
      <Hobbies />
      <Footer />
    </div>
  );
}
