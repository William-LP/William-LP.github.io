"use client"

import TopBar from '@/app/components/TopBar'
import AboutMe from '@/app/components/AboutMe'
import Experience from '@/app/components/Experience'
import Education from '@/app/components/Education'
import Projects from '@/app/components/Projects'
import Skills from '@/app/components/Skills'
import Hobbies from '@/app/components/Hobbies'
import Footer from '@/app/components/Footer'
import { useState } from 'react'
import { Theme } from './types/Theme'

export default function Home() {

  const [theme, setTheme] = useState<Theme>(Theme.light)

  const toggleTheme = () => {
    const html = document.documentElement;
    const currentTheme = html.getAttribute('data-theme');

    if (currentTheme === 'dark') {
      setTheme(Theme.light)
      html.setAttribute('data-theme', 'light');
    } else {
      setTheme(Theme.dark)
      html.setAttribute('data-theme', 'dark');
    }
  };

  return (
    <div className='min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300'>
      <TopBar theme={theme} setTheme={toggleTheme} />
      <AboutMe />
      <Experience />
      <Education />
      <Skills theme={theme} />
      <Projects />
      <Hobbies />
      <Footer />
    </div>
  );
}
