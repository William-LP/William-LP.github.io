import { appData } from '@/app/data/AppData'


const Education = () => {
    return (
        <section id="education" className='py-12 bg-white dark:bg-gray-900'>
            <div className='container mx-auto px-6 max-w-4xl'>
                <h2 className='text-2xl font-bold text-gray-900 dark:text-white mb-8'>Education</h2>
                <div className='space-y-6'>
                    {appData.education.map((education) => (

                        <div key={education.degree} className='flex gap-6'>
                            <div className='flex-shrink-0 w-20 text-sm text-gray-500 dark:text-gray-400 pt-1'>
                                {education.period.from} - {education.period.to}
                            </div>


                            <div className='flex-1'>
                                <h3 className='text-lg font-semibold text-gray-900 dark:text-white' >{education.degree}</h3>
                                <p className='text-gray-600 dark:text-gray-400 mb-2'>{education.school} • {education.location}</p>
                                <p className='text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-3'>{education.description}</p>
                                <div className='flex flex-wrap gap-2'>
                                    {education.academicAchievement?.map((item) => (
                                        <span key={item} className='px-2 py-1 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded'>
                                            {item}
                                        </span>
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

export default Education