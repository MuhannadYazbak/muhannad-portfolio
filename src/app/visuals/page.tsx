'use client'
import { useState } from 'react'
import Image from 'next/image'

export default function VisualsPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  const handleImageClick = (src: string) => {
    setSelectedImage(src)
  }

  const closeModal = () => {
    setSelectedImage(null)
  }

  return (
    <main className='p-6'>
      <h1 className='text-4xl font-bold text-red-500'>Visuals and Milestones</h1>
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {[
          { src: '/banner.png', caption: 'TechMart Banner' },
          { src: '/AllureReport.png', caption: 'Allure Report' },
          { src: '/AllureDuration.png', caption: 'Allure Tests Durations' },
          { src: '/TechMartHome.png', caption: 'TechMart Home Flow' },
          { src: '/TechMartCheckout.png', caption: 'TechMart Checkout Flow' },
          { src: '/NewAllureReport.png', caption: 'Locally 100% passing' },
          { src: '/CIPassed.png', caption: 'CI pipeline 100% passing and optimized' },
          { src: '/AllGreenBlazingFast.png', caption: 'All 62 tests passed in 36.4s '},
          { src: '/guestAtHome.png', caption: 'Guest role - Home Page'},

        ].map(({ src, caption }) => (
          <figure key={src} onClick={() => handleImageClick(src)} className="cursor-pointer">
            <Image
              alt={caption}
              src={src}
              height={300}
              width={400}
              className="object-contain bg-white p-2 rounded transition-transform hover:scale-125 shadow-md hover:shadow-xl"
            />
            <figcaption className="text-sm text-gray-600 mt-2 text-center">{caption}</figcaption>
          </figure>
        ))}
      </section>

      {/* Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          onClick={closeModal}
        >
          <div className="relative">
            <Image
              src={selectedImage}
              alt="Full view"
              width={800}
              height={600}
              className="rounded shadow-lg"
            />
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-white text-2xl font-bold"
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </main>
  )
}