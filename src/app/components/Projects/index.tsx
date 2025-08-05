import Link from 'next/link'
import React from 'react'
import { appData } from '@/app/data/AppData'
import { ExternalLinkIcon, GithubIcon } from 'lucide-react'

const Projects = () => {
  return (
    <section id="projects" className='py-12 bg-white dark:bg-gray-900'>
      <div className='container mx-auto px-6 max-w-4xl'>
        <h2 className='text-2xl font-bold text-gray-900 dark:text-white mb-8'>
          Projects
        </h2>
        <div className='space-y-8'>
          {appData.projects.map((project) => (
            <div key={project.title} className='flex gap-6'>
              <div className="flex-shrink-0 w-20 h-20 flex items-center justify-center">
                <img src={`/projects/${project.logoSrc.dark}`} alt="Project Logo" className="w-10 h-10 object-contain dark:hidden" />
                <img src={`/projects/${project.logoSrc.light}`} alt="Project Logo" className="w-10 h-10 object-contain hidden dark:block" />
              </div>
              <div className='flex-1'>
                <div className='flex items-start justify-between mb-2'>
                  <div className='flex flex-row justify-center items-center gap-x-2'>
                    <h3 className='text-lg font-semibold text-gray-900 dark:text-white'>{project.title}</h3>
                    <span>•</span>
                    <p className='text-gray-600 dark:text-gray-400'>{project.date}</p>
                  </div>

                  <div className='flex gap-3 ml-4'>
                    {project.githubRepo && (
                      <Link className='text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white' target='_blank' href={project.githubRepo}>
                        <GithubIcon />
                      </Link>
                    )}
                    {project.link && (
                      <Link className='text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white' target='_blank' href={project.link}>
                        <ExternalLinkIcon />
                      </Link>
                    )}
                  </div>

                </div>
                <p className='text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-3'>{project.description}</p>
                <div className='flex flex-wrap gap-2' >
                  {project.techStack?.map((item) => (
                    <span key={item} className='px-2 py-1 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded'>{item}</span>
                  ))}
                </div>
              </div>

            </div>
          ))}


        </div>

      </div>

    </section>
  )
}

export default Projects
