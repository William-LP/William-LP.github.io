'use client'

import { appData } from '@/app/data/AppData'
import { PdfResume } from '.'
import { FileTextIcon, LoaderIcon } from 'lucide-react'

import { PDFDownloadLink } from "@react-pdf/renderer";


const PdfDownloadButton = () => {
    return (
        <div className="relative group inline-block" >
            <PDFDownloadLink
                document={<PdfResume />}
                fileName={`${appData.aboutMe.name}'s resume.pdf`}
                className='p-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
            >
                {({ loading }) =>
                    loading ? <LoaderIcon /> : <FileTextIcon />
                }
            </PDFDownloadLink>
            <div className="absolute top-full mb-2 left-1/2 -translate-x-1/2 scale-0 group-hover:scale-100 transition-all bg-black text-white text-xs rounded py-1 px-2 z-10 whitespace-nowrap">
                Download as PDF
            </div>
        </div>
    )
}

export default PdfDownloadButton