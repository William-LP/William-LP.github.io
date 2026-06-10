"use client"

import { useState } from 'react'
import { XIcon, ExternalLinkIcon } from 'lucide-react'
import Link from 'next/link'
import { appData } from '@/app/data/AppData'

type Certification = (typeof appData.certifications)[number]

const Certifications = () => {
    const [selected, setSelected] = useState<Certification | null>(null)

    return (
        <section id="certifications" className='py-12 bg-white dark:bg-gray-900'>
            <div className='container mx-auto px-6 max-w-4xl'>
                <h2 className='text-2xl font-bold text-gray-900 dark:text-white mb-8'>Certifications</h2>
                <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4'>
                    {appData.certifications.map((certification) => (
                        <button
                            key={certification.title}
                            type='button'
                            onClick={() => setSelected(certification)}
                            className='group relative flex flex-col p-4 cursor-pointer'
                        >
                            <div className='h-40 flex items-center justify-center'>
                                <img src={`/certifications/${certification.image}`} alt={certification.title} className='h-40 w-auto object-contain transition-transform duration-300 ease-out group-hover:scale-105 group-hover:drop-shadow-xl' />
                            </div>
                        </button>
                    ))}
                </div>
            </div>

            {/* Drawer */}
            <div className={`fixed inset-0 z-50 ${selected ? '' : 'pointer-events-none'}`}>
                <div
                    onClick={() => setSelected(null)}
                    className={`absolute inset-0 bg-black/50 transition-opacity duration-300 ${selected ? 'opacity-100' : 'opacity-0'}`}
                />
                <div className={`absolute right-0 top-0 h-full w-full max-w-md bg-white dark:bg-gray-900 shadow-2xl transition-transform duration-300 ease-out ${selected ? 'translate-x-0' : 'translate-x-full'}`}>
                    {selected && (
                        <div className='flex flex-col h-full overflow-y-auto p-8'>
                            <button
                                type='button'
                                onClick={() => setSelected(null)}
                                aria-label='Close'
                                className='self-end p-2 -mr-2 text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white'
                            >
                                <XIcon />
                            </button>

                            <div className='h-40 flex items-center justify-center my-4'>
                                <img src={`/certifications/${selected.image}`} alt={selected.title} className='h-40 w-auto object-contain' />
                            </div>

                            <h3 className='text-xl font-bold text-gray-900 dark:text-white text-center'>{selected.title}</h3>
                            <p className='text-sm text-gray-600 dark:text-gray-400 text-center mt-1'>{selected.issuer}</p>
                            {selected.expirationDate && (
                                <p className='text-xs text-gray-500 dark:text-gray-500 text-center mt-1'>Expires {selected.expirationDate}</p>
                            )}

                            <p className='text-sm text-gray-600 dark:text-gray-300 leading-relaxed mt-6'>{selected.description}</p>

                            {selected.link && (
                                <Link
                                    href={selected.link}
                                    target='_blank'
                                    className='inline-flex items-center gap-2 mt-6 text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline'
                                >
                                    View credential <ExternalLinkIcon className='w-4 h-4' />
                                </Link>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </section>
    )
}

export default Certifications
