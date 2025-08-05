"use client"

import React, { useState } from 'react'
import { appData } from '@/app/data/AppData'
import { MoonIcon, SunIcon, MenuIcon, XIcon } from 'lucide-react'
import { Theme } from '@/app/types/Theme'

const TopBar = ({ theme, setTheme }: { theme: Theme, setTheme: () => void }) => {

    const [responsiveMenuDisplayed, setResponsiveMenuDisplayed] = useState(false)

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
                    <div className='flex items-center space-x-2'>
                        <button className='p-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white' onClick={setTheme} >
                            {theme === Theme.dark ? <SunIcon /> : <MoonIcon />}
                        </button>
                        <button className="md:hidden p-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white" onClick={() => setResponsiveMenuDisplayed(!responsiveMenuDisplayed)}>
                            {responsiveMenuDisplayed ? <XIcon /> : <MenuIcon />}
                        </button>
                    </div>
                </div>
                {responsiveMenuDisplayed && (
                    <div className='md:hidden border-t border-gray-200 dark:border-gray-700 mt-4 pt-4'>
                        <div className="space-y-2">

                            {appData.header.sections.map((section) => (
                                <a href={`#${section.toLowerCase()}`} key={section} className="block py-2 text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">{section}</a>
                            ))}

                        </div>
                    </div>
                )}
            </div>

        </header>
    )
}

export default TopBar
