"use client"

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { appData } from '@/app/data/AppData'
import { KeyRoundIcon } from 'lucide-react'
import { useState } from 'react'


const AboutMe = () => {
    const [copied, setCopied] = useState(false)
    const valueToCopy = appData.aboutMe.pgpPublicKey || ""

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(valueToCopy)
            setCopied(true)
            setTimeout(() => setCopied(false), 1500)
        } catch (err) {
            console.error('Failed to copy: ', err)
        }
    }
    return (
        <section id="home" className='py-10 bg-white dark:bg-gray-900'>
            <div className='container mx-auto px-6 max-w-4xl'>
                <div className='flex flex-col lg:flex-row gap-8 items-start'>
                    <div className='flex-shrink-0'>
                        <div className='w-32 h-32 rounded-2xl overflow-hidden'>
                            <Image
                                height={128}
                                width={128}
                                className="w-full h-full object-cover"
                                alt="profilePicture"
                                src="/profile_picture.jpg" />
                        </div>
                    </div>
                    <div className='flex-1 space-y-4'>
                        <div>
                            <h1 className='text-4xl font-bold text-gray-900 dark:text-white mb-2'>{appData.aboutMe.name}</h1>
                            <p className='text-xl text-gray-600 dark:text-gray-400 mb-4'>{appData.aboutMe.occupation}</p>
                            <p className='text-gray-600 dark:text-gray-400 leading-relaxed max-w-2xl'>{appData.aboutMe.introText}</p>
                        </div>
                        <div className='flex flex-wrap gap-6 text-sm text-gray-600 dark:text-gray-400'>
                            {appData.aboutMe.contact.email && (<Link href={`mailto:${appData.aboutMe.contact.email}`} className='hover:text-gray-900 dark:hover:text-white'>
                                {appData.aboutMe.contact.email}
                            </Link>)}

                            {appData.aboutMe.contact.phone && (<Link href={`tel:${appData.aboutMe.contact.phone}`} className='hover:text-gray-900 dark:hover:text-white'>{appData.aboutMe.contact.phone}</Link>)}
                            {appData.aboutMe.contact.location && (<span>{appData.aboutMe.contact.location}</span>)}
                        </div>
                        <div className='flex gap-4'>
                            {appData.aboutMe.socials.map((link) => {
                                const Icon = link.icon
                                return (
                                    <Link target='_blank' key={link.href} href={link.href} className='text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'>
                                        <Icon className="w-5 h-5" />
                                    </Link>
                                )
                            })}

                            {appData.aboutMe.pgpPublicKey && (
                                <div className="relative group inline-block">
                                    <KeyRoundIcon onClick={handleCopy} className="w-4 h-4 cursor-pointer" />
                                    <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 scale-0 group-hover:scale-100 transition-all bg-black text-white text-xs rounded py-1 px-2 z-10 whitespace-nowrap">
                                        {copied ? "PGP Key Copied !" : "Copy PGP Key"}
                                    </div>
                                </div>
                            )}

                        </div>


                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutMe
