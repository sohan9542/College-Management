import React from 'react';
import { Viewer } from '@react-pdf-viewer/core'; // install this library
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout'; // install this library
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import { Worker } from '@react-pdf-viewer/core'; // install this library
import { useState } from 'react';
import pdfFile from '../../Image/Noti.pdf'
const Pdf = () => {
    const defaultLayoutPluginInstance = defaultLayoutPlugin();
    const [defaultpdffile] = useState(pdfFile)
    return (
        <div className="overflow-y-auto">
            {
                defaultpdffile && <>
                  <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.6.347/build/pdf.worker.min.js">
                        <Viewer fileUrl={defaultpdffile}
                            plugins={[defaultLayoutPluginInstance]} />
                    </Worker>
                </>
            }
        </div>
    )
}

export default Pdf
