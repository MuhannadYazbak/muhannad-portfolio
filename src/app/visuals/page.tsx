'use client'
import { useState } from 'react'
import Image from 'next/image'

type ProjectType = 'all' | 'techmart' | 'crm'

interface VisualItem {
  src: string
  caption: string
  project: 'techmart' | 'crm'
}

export default function VisualsPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [activeFilter, setActiveFilter] = useState<ProjectType>('all')

  const techMartVisuals: VisualItem[] = [
    { src: '/banner.png', caption: 'TechMart Banner', project: 'techmart' },
    { src: '/techmart.png', caption: 'TechMart System Blueprint', project: 'techmart' },
    { src: '/AllureReport.png', caption: 'Allure Report', project: 'techmart' },
    { src: '/AllureDuration.png', caption: 'Allure Tests Durations', project: 'techmart' },
    { src: '/TechMartHome.png', caption: 'TechMart Home Flow', project: 'techmart' },
    { src: '/TechMartCheckout.png', caption: 'TechMart Checkout Flow', project: 'techmart' },
    { src: '/NewAllureReport.png', caption: 'Locally 100% passing', project: 'techmart' },
    { src: '/CIPassed.png', caption: 'CI pipeline 100% passing and optimized', project: 'techmart' },
    { src: '/AllGreenBlazingFast.png', caption: 'All 62 tests passed in 36.4s', project: 'techmart' },
    { src: '/LandingWithGuest.png', caption: 'Guest role - Landing Page', project: 'techmart' },
    { src: '/guestAtHome.png', caption: 'Guest role - Home Page', project: 'techmart' },
    { src: '/userHome.png', caption: 'User role - Home Page Hebrew', project: 'techmart' },
    { src: '/dynamicItemGuest.png', caption: 'Guest role - Dynamic Item details Arabic', project: 'techmart' },
    { src: '/adminDashboard.png', caption: 'Admin role - Admin Dashboard English', project: 'techmart' },
    { src: '/adminDashboardTranslated.png', caption: 'Admin role - Admin Dashboard Arabic', project: 'techmart' },
    { src: '/adminEditItemTranslated.png', caption: 'Admin role - Admin Edit Item Arabic', project: 'techmart' },
    { src: '/RAG-smart.png', caption: 'RAG agent understood what is Dev Laptop', project: 'techmart' },
    { src: '/RAG-smart2.png', caption: 'RAG agent looked into user orders and retrieved right data', project: 'techmart' },
    { src: '/GUI-TechMartRAG.png', caption: 'RAG agent (GUI) understood what is Dev Laptop', project: 'techmart' },
  ]
  const crmVisuals: VisualItem[] = [
    // --- Auth & Access Control ---
    { src: '/tenantLogin.jpg', caption: 'Tenant Login – Multi-Tenant Auth Portal', project: 'crm' },
    { src: '/forgotPassword.jpg', caption: 'Self-Service Auth – Password Recovery Request', project: 'crm' },
    { src: '/resetPasswordEmail.jpg', caption: 'Transactional Email – Resend Token Invalidation Flow', project: 'crm' },
    { src: '/resetPassword.jpg', caption: 'Secure Password Reset – Token Verification & Update', project: 'crm' },

    // --- Legal Vertical ---
    { src: '/tenantLegal.jpg', caption: 'Legal Vertical – Case Lifecycle & Tenant Workspace', project: 'crm' },
    { src: '/clientLegalView.jpg', caption: 'Legal Workspace – Granular Case Tabs & Client Management', project: 'crm' },
    { src: '/clientLegalAddEvidence.jpg', caption: 'Legal Workspace – Dynamic Evidence & File Ingestion Modal', project: 'crm' },

    // --- Insurance Vertical ---
    { src: '/tenantInsurance.jpg', caption: 'Insurance Vertical – Policies & Asset Management Workspace', project: 'crm' },
    { src: '/clientView.jpg', caption: 'Insurance Workspace – Policy Lifecycle & Tabbed Client Dashboard', project: 'crm' },
    { src: '/clientManage.jpg', caption: 'Insurance Workspace – Interactive Policy Drawer UI', project: 'crm' },

    // --- General Vertical ---
    { src: '/tenantGeneral.jpg', caption: 'General Vertical – Notes, Documents & Client Invoicing Core', project: 'crm' }, // Note: Added .jpg extension

    // --- System Administration ---
    { src: '/adminLogin.jpg', caption: 'System Admin – Elevated Credential Portal', project: 'crm' },
    { src: '/adminPortal.jpg', caption: 'System Admin Console – Tenant Lifecycle & Status Control', project: 'crm' },

    // --- CI/CD & Testing Infrastructure ---
    { src: '/githubActions1.jpg', caption: 'GitHub Actions – Zero-Flake E2E CI/CD Pipeline', project: 'crm' },
    { src: '/githubActions2.jpg', caption: 'Playwright POM Suite – 100% Green Headless Execution (<1m 40s)', project: 'crm' },
  ]



  const allVisuals = [...techMartVisuals, ...crmVisuals]

  const filteredVisuals = allVisuals.filter((item) => {
    if (activeFilter === 'all') return true
    return item.project === activeFilter
  })

  const handleImageClick = (src: string) => {
    setSelectedImage(src)
  }

  const closeModal = () => {
    setSelectedImage(null)
  }

  return (
    <main className="prose prose-lg max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-red-500 mb-6">Visuals and Milestones</h1>

      {/* Project Selector Tabs */}
      <div className="flex flex-wrap gap-3 mb-8 not-prose">
        <button
          onClick={() => setActiveFilter('all')}
          className={`px-4 py-2 rounded-lg font-medium transition-all text-sm cursor-pointer ${activeFilter === 'all'
              ? 'bg-red-500 text-white shadow-md'
              : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
            }`}
        >
          All Projects ({allVisuals.length})
        </button>
        <button
          onClick={() => setActiveFilter('techmart')}
          className={`px-4 py-2 rounded-lg font-medium transition-all text-sm cursor-pointer ${activeFilter === 'techmart'
              ? 'bg-red-500 text-white shadow-md'
              : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
            }`}
        >
          🛒 TechMart ({techMartVisuals.length})
        </button>
        <button
          onClick={() => setActiveFilter('crm')}
          className={`px-4 py-2 rounded-lg font-medium transition-all text-sm cursor-pointer ${activeFilter === 'crm'
              ? 'bg-red-500 text-white shadow-md'
              : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
            }`}
        >
          🏢 Multi-Tenant CRM ({crmVisuals.length})
        </button>
      </div>

      {/* Visuals Grid */}
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {filteredVisuals.map(({ src, caption }) => (
          <figure key={src} onClick={() => handleImageClick(src)} className="cursor-pointer m-0">
            <Image
              alt={caption}
              src={src}
              height={300}
              width={400}
              className="object-contain bg-white p-2 rounded transition-transform hover:scale-105 shadow-md hover:shadow-xl w-full h-auto"
            />
            <figcaption className="text-sm text-gray-600 dark:text-gray-400 mt-2 text-center">
              {caption}
            </figcaption>
          </figure>
        ))}
      </section>

      {/* Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4"
          onClick={closeModal}
        >
          <div className="relative max-w-4xl max-h-[90vh]">
            <Image
              src={selectedImage}
              alt="Full view"
              width={1000}
              height={750}
              className="rounded shadow-lg object-contain max-h-[85vh] w-auto"
            />
            <button
              onClick={closeModal}
              className="absolute -top-10 right-0 text-white text-3xl font-bold hover:text-red-400 transition-colors"
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </main>
  )
}