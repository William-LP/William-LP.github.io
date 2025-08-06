'use client'

import { PDFViewer } from '@react-pdf/renderer'
import { PdfResume } from '../components/PdfResume'


export default function PdfViewerClient() {
    return (
        <PDFViewer style={{ width: '100%', height: '100vh' }}>
            <PdfResume />
        </PDFViewer>
    )
}
