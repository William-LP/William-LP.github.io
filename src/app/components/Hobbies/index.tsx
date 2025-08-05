import React from 'react'
import { appData } from '@/app/data/AppData'

const Hobbies = () => {
    return (
        <section id="hobbies" className='py-12 bg-gray-50 dark:bg-gray-800'>
            <div className='container mx-auto px-6 max-w-4xl'>
                <h2 className='text-2xl font-bold text-gray-900 dark:text-white mb-8'>Hobbies</h2>
                <div className={`grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-12`}>
                    {
                        appData.hobbies.map((hobby) => (
                            <div key={hobby.name} className='w-full'>
                                <h3 className='text-lg font-semibold text-gray-900 dark:text-white mb-2 text-center'>{hobby.name}</h3>
                                <p className='text-center text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-3'>{hobby.description}</p>
                            </div>
                        ))
                    }



                </div>
            </div>

        </section>
    )
}

export default Hobbies
