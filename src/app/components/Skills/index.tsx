import React from 'react'
import { appData } from '@/app/data/AppData'

const Skills = () => {
    return (
        <section id="skills" className='py-12 bg-gray-50 dark:bg-gray-800'>
            <div className='container mx-auto px-6 max-w-4xl'>
                <h2 className='text-2xl font-bold text-gray-900 dark:text-white mb-8'>Skills</h2>
                <div className='grid md:grid-cols-2 gap-8'>
                    {appData.skills.map((skill) => (
                        <div key={skill.Category}>
                            <h3 className='text-lg font-semibold text-gray-900 dark:text-white mb-4'>{skill.Category}</h3>
                            <div className='flex flex-wrap gap-2'>
                                {skill.tech.map((tech) => (
                                    <div className="relative group inline-block" key={tech.name}>
                                        <img
                                            src={`https://skillicons.dev/icons?i=${tech.skilliconsShortCode}`}
                                            alt={tech.name}
                                            title={tech.name}
                                            className="w-10 h-10 hover:scale-110 transition-transform"
                                        />
                                        <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 scale-0 group-hover:scale-100 transition-all bg-black text-white text-xs rounded py-1 px-2 z-10 whitespace-nowrap">
                                            {tech.name}
                                        </div>
                                    </div>

                                ))}

                            </div>
                        </div>
                    ))}

                </div>
            </div>

        </section>
    )
}

export default Skills
