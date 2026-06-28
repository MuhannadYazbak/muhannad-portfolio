export default async function Projects() {
  return (
    <main className="prose prose-lg max-w-4xl mx-auto px-4 py-8 dark:prose-invert">
      <h1 className='text-4xl font-bold text-indigo-500 mb-4'>Projects</h1>
      
      {/* 1. TechMart Main Platform */}
      <section id='ecommerce' className="space-y-4">
        <h2 className='text-xl text-indigo-400 font-bold m-0'>🛒 TechMart – E-Commerce Platform</h2>
        
        <h3 className='italic text-lg font-medium m-0'>Description:</h3>
        <p>TechMart is a full-stack e-commerce web application built with modern technologies. It features product listings, cart functionality, user authentication, and admin controls. Designed to be scalable and modular, it’s a showcase of building production-grade systems.</p>
        
        <h3 className='italic text-lg font-medium m-0'>Tech Stack:</h3>
        <p>Next.js, TypeScript, Tailwind CSS, MySQL, bcrypt.js, AuthContext, localStorage, Docker, Vercel</p>
        
        <h3 className='italic text-lg font-medium m-0'>Key Features:</h3>
        <ul className='list-disc pl-5 space-y-1'>
          <li>🛍️ Product catalog with dynamic filtering</li>
          <li>🔐 Custom user authentication using bcrypt.js and AuthContext</li>
          <li>💳 Mockoon integration as fake payments API</li>
          <li>🧑‍💼 Admin dashboard for managing products</li>
          <li>📦 Cart and checkout flow</li>
          <li>🐳 Dockerized for local development</li>
        </ul>
        
        <div className='pt-2'>
          <span className="font-semibold">Links: </span>
          <a className='text-blue-300 hover:text-blue-400 underline' href='https://www.github.com/MuhannadYazbak/ecommerce' target='_blank' rel='noreferrer'>
            TechMart Repo
          </a>
        </div>
      </section>
      
      <hr className="my-8" />
      
      {/* 2. RAG AI Chatbot */}
      <section id='chatbot' className='space-y-4'>
        <h2 className='text-xl text-indigo-400 font-bold m-0'>🤖 TechMart RAG-Based AI Agent</h2>
        
        <h3 className='italic text-lg font-medium m-0'>Description:</h3>
        <p>An advanced, production-ready AI Assistant microservice designed for the TechMart e-commerce platform. Moving away from legacy rule-based systems, this chatbot leverages Retrieval-Augmented Generation (RAG) to provide dynamic, context-aware responses by querying a semantic vector knowledge base. It delivers highly accurate product discovery, user guidance, and customer support in real-time.</p>

        <h3 className='italic text-lg font-medium m-0'>Tech Stack:</h3>
        <p>Python, FastAPI, LangChain, OpenAI API, Vector Database (VectorDB), Docker</p>

        <h3 className='italic text-lg font-medium m-0'>Key Features:</h3>
        <ul className='list-disc pl-5 space-y-2'>
          <li>
            <span className='font-semibold'>🌐 Native Multilingual Support:</span> Flawlessly processes and responds to user queries in Arabic, Hebrew, and English.
          </li>
          <li>
            <span className='font-semibold'>🧠 Semantic Search & RAG:</span> Utilizes advanced text embeddings and a Vector Database to retrieve precise platform context before generating responses, eliminating hallucinations.
          </li>
          <li>
            <span className='font-semibold'>⚡ High-Performance Microservice:</span> Built as a decoupled, asynchronous FastAPI backend, ensuring low-latency communication with the TechMart frontend.
          </li>
          <li>
            <span className='font-semibold'>🛠️ Enterprise-Ready Orchestration:</span> Managed using LangChain for robust prompt engineering and conversational memory flow.
          </li>
        </ul>

        <div className='pt-2'>
          <span className='font-semibold'>Links: </span>
          <a className='text-blue-300 hover:text-blue-400 underline' href='https://www.github.com/MuhannadYazbak/techmart-rag' target='_blank' rel='noreferrer'>
            AI Agent Repo
          </a>
        </div>
      </section>
      
      <hr className="my-8" />
      
      {/* 3. Cloud Infrastructure */}
      <section id='deployment' className="space-y-4">
        <h2 className='text-xl text-indigo-400 font-bold m-0'>🚀 Cloud Infrastructure & Architecture</h2>
        <p>Instead of a monolithic layout, TechMart is engineered as a decoupled, multi-cloud system designed for performance and separation of concerns:</p>
        <ul className='list-disc pl-5 space-y-2'>
          <li>
            <span className="font-semibold">Frontend Ecosystem (Vercel):</span> Hosts the Next.js and TypeScript user interface at the edge, ensuring lightning-fast global delivery, optimized asset caching, and automated CI/CD deployments.
          </li>
          <li>
            <span className="font-semibold">AI Backend Microservice & Mock Layer (Render):</span> Powers the asynchronous FastAPI RAG engine and a specialized Mockoon service acting as a simulated external payment gateway. Render handles continuous container builds directly from GitHub.
          </li>
          <li>
            <span className="font-semibold">Managed Cloud Database (Aiven):</span> A fully managed cloud MySQL database instance that isolates storage operations from the compute layer, guaranteeing reliable transactional integrity for users, orders, and products.
          </li>
        </ul>
        <div className='pt-2'>
          <span className='font-semibold'>Links: </span>
          <a className='text-blue-300 hover:text-blue-400 underline' href='https://ecommerce-t7tm.vercel.app' target='_blank' rel='noreferrer'>
            Live Site: TechMart
          </a>
        </div>
      </section>
    </main>
  )
}