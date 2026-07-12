"use client"

import { useState } from "react"

export default function Projects() {
  const [isTechMartOpen, setIsTechMartOpen] = useState(false);
  const [isSelfHealingOpen, setIsSelfHealingOpen] = useState(false);
  const [isInsuranceAppOpen, setIsInsuranceAppOpen] = useState(false);

  return (
    <main className="prose prose-lg max-w-4xl mx-auto px-4 py-8 dark:prose-invert text-slate-800 dark:text-slate-200">
      <h1 className='text-4xl font-bold text-indigo-600 dark:text-indigo-400 mb-8'>Projects</h1>

      {/* ================= 1. TECHMART PARENT ECOSYSTEM ================= */}
      <section id="techmart-ecosystem" className="space-y-4">
        {/* Accordion Toggle Header Button */}
        <button 
          onClick={() => setIsTechMartOpen(!isTechMartOpen)}
          className="flex items-center justify-between w-full text-left p-4 bg-slate-50 hover:bg-slate-100 dark:bg-slate-900/40 dark:hover:bg-slate-800/60 border border-slate-200 dark:border-slate-800 rounded-xl transition-all duration-200 group no-underline cursor-pointer"
          style={{ textDecoration: 'none' }}
        >
          <div className="pr-4">
            <h2 className='text-2xl text-indigo-600 dark:text-indigo-400 font-bold m-0 flex items-center gap-2'>
              🛒 TechMart – Full-Stack E-Commerce Ecosystem
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-400 mt-2 mb-0 font-normal normal-case">
              An enterprise-ready, multi-cloud platform comprised of a modular Next.js store, a containerized Python RAG AI microservice, and a decoupled database layer.
            </p>
          </div>
          <span className={`text-xl text-indigo-600 dark:text-indigo-400 font-bold transition-transform duration-200 shrink-0 ${isTechMartOpen ? 'rotate-90' : ''}`}>
            ▶
          </span>
        </button>

        {/* Collapsible Content Section */}
        {isTechMartOpen && (
          <div className="pl-6 border-l-2 border-slate-200 dark:border-slate-800 space-y-12 mt-6">
            
            {/* SUB-SECTION A: Core E-Commerce Platform */}
            <div id='ecommerce' className="space-y-4 pt-2">
              <h3 className='text-xl text-slate-800 dark:text-slate-200 font-semibold m-0'>A. Core Frontend & Checkout Architecture</h3>
              <p>TechMart is a full-stack e-commerce web application designed to be scalable and modular, acting as a blueprint for production-grade web systems.</p>

              <h4 className='italic text-base font-medium text-slate-500 dark:text-slate-400 m-0'>Tech Stack:</h4>
              <p className="text-sm text-slate-700 dark:text-slate-300">Next.js, TypeScript, Tailwind CSS, MySQL, bcrypt.js, AuthContext, localStorage</p>

              <h4 className='italic text-base font-medium text-slate-500 dark:text-slate-400 m-0'>Key Features:</h4>
              <ul className='list-disc pl-5 space-y-1'>
                <li><strong>Product Catalog:</strong> Engineered with rapid dynamic filtering criteria.</li>
                <li><strong>Secure Access:</strong> Custom authentication flows via bcrypt.js and scoped AuthContext instances.</li>
                <li><strong>Payment Integration:</strong> Mockoon layer serving as a simulated payment validation gateway.</li>
                <li><strong>Management Console:</strong> Custom administrative dashboards controlling application catalog datasets.</li>
              </ul>

              <div className='pt-2 text-sm'>
                <span className="font-semibold text-slate-700 dark:text-slate-300">Links: </span>
                <a className='text-blue-600 dark:text-blue-400 hover:underline inline-flex items-center gap-1' href='https://www.github.com/MuhannadYazbak/ecommerce' target='_blank' rel='noreferrer'>
                  TechMart Core Repo ↗
                </a>
              </div>
            </div>

            <hr className="border-slate-200 dark:border-slate-800 my-4" />

            {/* SUB-SECTION B: RAG AI Agent */}
            <div id='chatbot' className='space-y-4'>
              <h3 className='text-xl text-slate-800 dark:text-slate-200 font-semibold m-0'>B. Autonomous RAG-Based AI Agent Microservice</h3>
              <p>An advanced, decoupled AI Assistant microservice. Moving away from legacy rule-based chat structures, this service leverages Retrieval-Augmented Generation (RAG) to serve dynamic, context-aware responses by querying a vector knowledge base for platform support and product discovery.</p>

              <h4 className='italic text-base font-medium text-slate-500 dark:text-slate-400 m-0'>Tech Stack:</h4>
              <p className="text-sm text-slate-700 dark:text-slate-300">Python, FastAPI, LangChain, OpenAI API, Vector Databases, Docker</p>

              <h4 className='italic text-base font-medium text-slate-500 dark:text-slate-400 m-0'>Key Features:</h4>
              <ul className='list-disc pl-5 space-y-2'>
                <li><strong>Native Multilingual Support:</strong> Processes and queries dynamically across Arabic, Hebrew, and English pipelines.</li>
                <li><strong>Semantic Intelligence:</strong> Embeddings parsing routes targeted queries to vector data arrays, preventing LLM hallucinations.</li>
                <li><strong>Low-Latency Core:</strong> Built as an asynchronous standalone FastAPI service for optimized background computing loops.</li>
              </ul>

              <div className='pt-2 text-sm'>
                <span className="font-semibold text-slate-700 dark:text-slate-300">Links: </span>
                <a className='text-blue-600 dark:text-blue-400 hover:underline inline-flex items-center gap-1' href='https://www.github.com/MuhannadYazbak/techmart-rag' target='_blank' rel='noreferrer'>
                  AI Agent Microservice Repo ↗
                </a>
              </div>
            </div>

            <hr className="border-slate-200 dark:border-slate-800 my-4" />

            {/* SUB-SECTION C: Cloud & Infrastructure */}
            <div id='deployment' className="space-y-4 pb-4">
              <h3 className='text-xl text-slate-800 dark:text-slate-200 font-semibold m-0'>C. Distributed Cloud Topology & Live Environment</h3>
              <p>Instead of a heavy monolithic structure, TechMart uses a multi-cloud approach ensuring operational separation of concerns and high compute performance:</p>
              
              <ul className='list-disc pl-5 space-y-2'>
                <li><strong>Edge UI Delivery (Vercel):</strong> Hosts the global Next.js UI layer at edge locations with optimized asset compilation and deployment triggers.</li>
                <li><strong>Containerized Compute Layer (Render):</strong> Runs continuous container builds to isolate the FastAPI automation and Mockoon sandbox tasks.</li>
                <li><strong>Decoupled Persistence (Aiven):</strong> A fully isolated cloud MySQL node protecting customer transaction registries.</li>
              </ul>
              
              <div className='pt-2 text-sm'>
                <span className='font-semibold text-slate-700 dark:text-slate-300'>Links: </span>
                <a className='text-blue-600 dark:text-blue-400 hover:underline inline-flex items-center gap-1 font-medium' href='https://ecommerce-t7tm.vercel.app' target='_blank' rel='noreferrer'>
                  Launch Live TechMart Application Live ↗
                </a>
              </div>
            </div>

          </div>
        )}
      </section>

      <hr className="my-12 border-slate-300 dark:border-slate-700" />

      
      {/* ================= 2. SelfHealing Playwright Agent ================= */}
      <section id="selfHealingPlaywright" className="space-y-4">
        {/* Accordion Toggle Header Button */}
        <button 
          onClick={() => setIsSelfHealingOpen(!isSelfHealingOpen)}
          className="flex items-center justify-between w-full text-left p-4 bg-slate-50 hover:bg-slate-100 dark:bg-slate-900/40 dark:hover:bg-slate-800/60 border border-slate-200 dark:border-slate-800 rounded-xl transition-all duration-200 group no-underline cursor-pointer"
          style={{ textDecoration: 'none' }}
        >
          <div className="pr-4">
            <h2 className='text-2xl text-indigo-600 dark:text-indigo-400 font-bold m-0 flex items-center gap-2'>
              🤖 Autonomous Playwright Self-Healing Test Agent
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-400 mt-2 mb-0 font-normal normal-case">
              An AI-driven testing ecosystem that explores targeted user journeys, repairs brittle locators on the fly via LLM contextual logic, and generates functional E2E specs.
            </p>
          </div>
          <span className={`text-xl text-indigo-600 dark:text-indigo-400 font-bold transition-transform duration-200 shrink-0 ${isSelfHealingOpen ? 'rotate-90' : ''}`}>
            ▶
          </span>
        </button>

        {/* Collapsible Content Section */}
        {isSelfHealingOpen && (
          <div className="pl-6 border-l-2 border-slate-200 dark:border-slate-800 space-y-6 mt-6">
            <p className="mt-2 text-slate-700 dark:text-slate-300">An AI-driven E2E testing agent designed to eliminate manual selector maintenance and speed up QA workflows. The system autonomously explores a target URL, executes required user journeys, dynamically repairs broken locators using an LLM reasoning backend, and exports both standard Playwright test code and structured execution logs.</p>

            <h3 className='italic text-lg font-medium text-slate-800 dark:text-slate-200 m-0'>Key Features</h3>
            <ul className='list-disc pl-5 space-y-2'>
              <li><strong>Dynamic Self-Healing Engine:</strong> Intercepts locator runtime breaks, ships broken DOM nodes to the LLM context, and provisions clean heals immediately.</li>
              <li><strong>Automated Code Generation:</strong> Compiles and outputs functional, localized `spec.ts` files out of complex human exploratory tasks.</li>
              <li><strong>Structured Diagnostics:</strong> Delivers detailed execution JSON logs tracking element path adjustments, visual layouts, and logic metrics.</li>
              <li><strong>Monorepo Infrastructure:</strong> Assembled with a fast Next.js frontend, Python microservices, and an optimized GitHub Actions runner suite using cached file systems.</li>
            </ul>

            <h3 className='italic text-lg font-medium text-slate-800 dark:text-slate-200 m-0'>Technical Stack</h3>
            <ul className='list-disc pl-5 space-y-2'>
              <li><span className="font-semibold">🧑‍💻 Frontend:</span> Next.js (TypeScript), React, Tailwind CSS</li>
              <li><span className="font-semibold">🕹️ Backend:</span> FastAPI (Python), Uvicorn, LLM Integration (OpenRouter API)</li>
              <li><span className="font-semibold">🤖 Automation & CI/CD:</span> Playwright (Page Object Model design principles), GitHub Actions, npm/pip dependency caching layers</li>
            </ul>

            <h3 className='italic text-lg font-medium text-slate-800 dark:text-slate-200 m-0'>Architectural Impact</h3>
            <ul className='list-disc pl-5 space-y-2'>
              <li><strong>Zero-Touch Maintenance:</strong> Removes the friction of updating brittle CSS selectors or XPaths manually by migrating locator remediation to a runtime AI layer.</li>
              <li><strong>Accelerated Time-to-Green:</strong> Lowers onboarding limits by producing ready-made test files straight from a single raw site URL input.</li>
            </ul>

            <div className='pt-2 text-sm pb-2'>
              <span className="font-semibold text-slate-700 dark:text-slate-300">Links: </span>
              <a className='text-blue-600 dark:text-blue-400 hover:underline inline-flex items-center gap-1' href='https://github.com/MuhannadYazbak/Playwright-selfHealing-Agent' target='_blank' rel='noreferrer'>
                Self-Healing Automations Repo ↗
              </a>
            </div>
          </div>
        )}
      </section>

      <hr className="my-12 border-slate-300 dark:border-slate-700" />

      {/* ================= 3. Insurance App ================= */}
      <section id="insuranceApp" className="space-y-4">
        {/* Accordion Toggle Header Button */}
        <button 
          onClick={() => setIsInsuranceAppOpen(!isInsuranceAppOpen)}
          className="flex items-center justify-between w-full text-left p-4 bg-slate-50 hover:bg-slate-100 dark:bg-slate-900/40 dark:hover:bg-slate-800/60 border border-slate-200 dark:border-slate-800 rounded-xl transition-all duration-200 group no-underline cursor-pointer"
          style={{ textDecoration: 'none' }}
        >
          <div className="pr-4">
            <h2 className='text-2xl text-indigo-600 dark:text-indigo-400 font-bold m-0 flex items-center gap-2'>
              📜 Localized Insurance App
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-400 mt-2 mb-0 font-normal normal-case">
              A localized desktop app for an insurance agent to manage his clients
            </p>
          </div>
          <span className={`text-xl text-indigo-600 dark:text-indigo-400 font-bold transition-transform duration-200 shrink-0 ${isSelfHealingOpen ? 'rotate-90' : ''}`}>
            ▶
          </span>
        </button>

        {/* Collapsible Content Section */}
        {isInsuranceAppOpen && (
          <div className="pl-6 border-l-2 border-slate-200 dark:border-slate-800 space-y-6 mt-6">
            <p className="mt-2 text-slate-700 dark:text-slate-300">Desktop personalized CRM and ERP for insurance aget. Managing clients, policies, claims and notes.</p>

            <h3 className='italic text-lg font-medium text-slate-800 dark:text-slate-200 m-0'>Key Features</h3>
            <ul className='list-disc pl-5 space-y-2'>
              <li><strong>Clients Manager:</strong> Adding, searching and viewing clients and their policies,claims or notes.</li>
              <li><strong>Global Search:</strong> A wider search with insurance vendor, policy type, ID number or any piece of Information to facilitate reaching the right policy. </li>
              <li><strong>Dashboard:</strong> Administrative dashboard with sum of primes, active policies and alerts for expiring policies within 30 days.</li>
              <li><strong>Notes History:</strong> A global notes section, all notes and by status to keep the progresses flowing.</li>
              <li><strong>Files storage:</strong> File Archive Storage: Custom local desktop drag-and-drop ingestion system that securely archives documents onto the local file system with timestamp-prefixed tracking and disk-level deletion capabilities.</li>
            </ul>

            <h3 className='italic text-lg font-medium text-slate-800 dark:text-slate-200 m-0'>Technical Stack</h3>
            <ul className='list-disc pl-5 space-y-2'>
              <li><span className="font-semibold">🧑‍💻 Frontend:</span> Vite, React.js (TypeScript), Tailwind CSS</li>
              <li><span className="font-semibold">🕹️ Backend:</span> Node.js, Electron (Desktop Wrapper)</li>
              <li><span className="font-semibold">📈 Database:</span> Sqlite</li>
            </ul>

            <h3 className='italic text-lg font-medium text-slate-800 dark:text-slate-200 m-0'>Architectural Impact</h3>
            <ul className='list-disc pl-5 space-y-2'>
              <li><strong>Fully local:</strong> No more monthly fees, or data leakage fears </li>
              <li><strong>Backup pipeline:</strong> Automated Disaster Recovery Pipeline: An integrated background pipeline utilizing Google Drive OAuth2 integration to automatically compress regional file assets and upload scheduled encrypted database backups daily.</li>
            </ul>

            <div className='pt-2 text-sm pb-2'>
              <span className="font-semibold text-slate-700 dark:text-slate-300">Links: </span>
              <a className='text-blue-600 dark:text-blue-400 hover:underline inline-flex items-center gap-1' href='https://github.com/MuhannadYazbak/insurance-app' target='_blank' rel='noreferrer'>
                Insurance-App Repo ↗
              </a>
            </div>
          </div>
        )}
      </section>
    </main>
  )
}