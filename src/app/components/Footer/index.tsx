import { appData } from '@/app/data/AppData'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
    return (
        <footer className='py-8 border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900'>
            <div className='container mx-auto px-6 max-w-4xl' >
                <div className='flex flex-col md:flex-row justify-between items-center text-sm'>
                    <div className='text-gray-600 dark:text-gray-400 mb-4 md:mb-0'>
                        © {new Date().getFullYear()} {appData.aboutMe.name}. All rights reserved.
                    </div>
                    <div className='flex gap-4' >


                        {appData.aboutMe.socials.map((link) => {
                            const Icon = link.icon

                            return (
                                <Link target='_blank' key={link.href} href={link.href} className='className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'>
                                    <Icon className="w-5 h-5" />
                                </Link>
                            )
                        })}



                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
