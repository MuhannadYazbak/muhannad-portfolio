'use client'

import { useState, useEffect } from "react";


export default function ResumeDownload() {

    const [counter, setCounter] = useState<number | null>(null);

    useEffect(() => {
        const fetchCount = async () => {
            const res = await fetch('/api/increment-download');
            const data = await res.json();
            setCounter(data.count);
        };
        fetchCount();
    }, []);

    const incrementDownloadCount = async () => {
        const res = await fetch('/api/increment-download', { method: 'POST' });
        const data = await res.json();
        setCounter(data.count);
    };


    return (
        <div className='flex flex-col'>
            <div className="flex flex-row items-center gap-2 mt-4">
                <span>- Resume:&nbsp;</span>
                <a
                    className="text-blue-300 hover:text-blue-500"
                    href="/MuhannadCV.pdf"
                    download
                    onClick={incrementDownloadCount}
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