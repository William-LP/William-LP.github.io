import React from 'react'
import { appData } from '@/app/data/AppData'
import Link from 'next/link'
import { MoonIcon } from 'lucide-react'

const TopBar = () => {
    return (
        <header className='pt-6 bg-white dark:bg-gray-900'>
            <div className='container mx-auto px-6 max-w-4xl'>
                <div className='flex justify-between items-center'>
                    <div className='flex items-center gap-4'>
                        {appData.header.availableForHire && (<div className='flex items-center gap-2 text-sm'>
                            <div className="bg-green-500 animate-pulse w-2 h-2 rounded-full"></div>
                            <span className='text-green-600 dark:text-green-400 font-medium'>Available for hire</span>
                        </div>
                        )}
                    </div>
                    <div className='hidden md:flex items-center space-x-6'>
                        {appData.header.sections.map((section) => (
                            <a className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors" key={section} href={`#${section.toLocaleLowerCase()}`}>{section}</a>
                        ))}
                    </div>
                    {/* <div className='flex items-center space-x-2'>
                        <button className='p-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white' >
                            <MoonIcon />
                        </button>
                        <button className='md:hidden p-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white' >
                            <MoonIcon />
                        </button>
                    </div> */}
                </div>
            </div>
        </header>
    )
}

export default TopBar
