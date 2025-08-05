"use client"

import { appData } from '@/app/data/AppData'
import { useState } from 'react'


const Experience = () => {
    const [showMore, setShowMore] = useState(false)
    return (
        <section id="experience" className='py-12 bg-gray-50 dark:bg-gray-800'>
            <div className='container mx-auto px-6 max-w-4xl'>
                <h2 className='text-2xl font-bold text-gray-900 dark:text-white mb-8'>Experience</h2>
                <div className='space-y-8'>
                    {appData.experience.slice(0, showMore ? appData.experience.length : 3).map((experience) => (
                        <div key={experience.description} className='flex gap-6'>
                            <div className='flex-shrink-0 w-20 text-sm text-gray-500 dark:text-gray-400 pt-1'>
                                {experience.period.from} - {experience.period.to}
                            </div>
                            <div className='flex-1'>
                                <h3 className='text-lg font-semibold text-gray-900 dark:text-white'>
                                    {experience.title}
                                </h3>
                                <p className='text-gray-600 dark:text-gray-400 mb-2'>{experience.company}</p>
                                {experience.description && (
                                    <div className='text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-3' dangerouslySetInnerHTML={{ __html: experience.description }} />
                                )}
                                <div className='flex flex-wrap gap-2'>
                                    {experience.techStack.map((item) => (
                                        <span key={item} className='px-2 py-1 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded'>{item}</span>
                                    ))}
                                </div>

                            </div>

                        </div>

                    ))}
                    <div className="flex justify-center items-center">
                        <button
                            onClick={() => setShowMore(!showMore)}
                            className="px-4 py-2 bg-gray-100 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600 hover:bg-gray-200 text-sm text-gray-800 rounded-md shadow-sm"
                        >
                            {showMore ? "Show less experiences" : `Show all ${appData.experience.length} experiences`}
                        </button>
                    </div>



                </div>
            </div>
        </section>
    )
}

export default Experience