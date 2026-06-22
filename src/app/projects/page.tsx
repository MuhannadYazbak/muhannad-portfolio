export default async function Projects() {

  return (
    <main className="prose prose-lg max-w-4xl mx-auto px-4 py-8">
      <h1 className='text-4xl font-bold text-red-500 mb-4'>Projects</h1>
      <section id='ecommerce'>
        <h2 className='text-xl text-indigo-400'>🛒 TechMart – E-Commerce Platform</h2>
        <h3 className='italic text-l'>Description:</h3>
        <p>TechMart is a full-stack e-commerce web application built with modern technologies. It features product listings, cart functionality, user authentication, and admin controls. Designed to be scalable and modular, it’s a showcase of your ability to build production-grade systems.</p>
        <h3 className='italic text-l'>Tech Stack:</h3>
        <p>Next.js, TypeScript, Tailwind CSS, MySQL, bcrypt.js, AuthContext, localStorage, Docker, Vercel</p>
        <h3 className='italic text-l'>Key Features:</h3>
        <ul>
          <li>
            <p>🛍️ Product catalog with dynamic filtering</p>
          </li>
          <li>
            <p>🔐 Custom user authentication using bcrypt.js and AuthContext</p>
          </li>
          <li>
            <p>💳 Mockoon integration as fake payments API</p>
          </li>
          <li>
            <p>🧑‍💼 Admin dashboard for managing products</p>
          </li>
          <li>
            <p>📦 Cart and checkout flow</p>
          </li>
          <li>
            <p>🐳 Dockerized for local development</p>
          </li>
          <li>
            <p>🚀 Deployed on Vercel with CI/CD
              Status:
              Actively developed — evolving toward
              Links:</p>
          </li>
          <li>
            <a className='text-blue-300 hover:text-blue-400' href='https://www.github.com/MuhannadYazbak/ecommerce'>TechMart</a>
          </li>
        </ul>
      </section>
      <hr />
      <section id='chatbot' className='space-y-4'>
  <h2 className='text-xl text-indigo-400 font-bold'>🤖 TechMart RAG-Based AI Agent</h2>
  
  <div>
    <h3 className='italic text-lg font-medium'>Description:</h3>
    <p>An advanced, production-ready AI Assistant microservice designed for the TechMart e-commerce platform. Moving away from legacy rule-based systems, this chatbot leverages Retrieval-Augmented Generation (RAG) to provide dynamic, context-aware responses by querying a semantic vector knowledge base. It delivers highly accurate product discovery, user guidance, and customer support in real-time.</p>
  </div>

  <div>
    <h3 className='italic text-lg font-medium'>Tech Stack:</h3>
    <p>Python, FastAPI, LangChain, OpenAI API, Vector Database (VectorDB), Docker</p>
  </div>

  <div>
    <h3 className='italic text-lg font-medium'>Key Features:</h3>
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
  </div>

  <div className='pt-2'>
    <p><span className='font-semibold'>Status:</span> Fully Operational Microservice — Integrated into TechMart Ecosystem</p><br/>
    <p className='mt-1'>
      <span className='font-semibold'>Links: </span>
      <a className='text-blue-300 hover:text-blue-400 underline' href='https://www.github.com/MuhannadYazbak/techmart-rag' target='_blank' rel='noreferrer'>
        AI Agent Repository
      </a>
    </p>
  </div>
</section>
    </main>
  )
}