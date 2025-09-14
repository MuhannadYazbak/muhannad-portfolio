'use client'

import { useState } from "react";

export default function ResumeDownload() {
    const [counter, setCounter] = useState(0)

    const handleDownload = () => {
        setCounter(prev => prev + 1)
    }

    return (
        <div className='flex flex-col'>
            <div className="flex flex-row items-center gap-2 mt-4">
                <span>- Resume:&nbsp;</span>
                <a
                    className="text-blue-300 hover:text-blue-500"
                    href="/MuhannadCV.pdf"
                    download
                    onClick={handleDownload}
                >
                    Download My Resume
                </a>
            </div>
            <div className="bg-gray-400 hover:bg-gray-500 px-2 rounded w-fit">
                Download Counter: {counter}
            </div>
        </div>
    )
}