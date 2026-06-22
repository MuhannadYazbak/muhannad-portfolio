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
      <section id='chatbot'>
        <h2 className='text-xl text-indigo-400'>🤖 TechMart RAG-Based AI Agent</h2>
        <h3 className='italic text-l'>Description:</h3>
        <p>An advanced, production-ready AI Assistant microservice designed for the TechMart e-commerce platform. Moving away from legacy rule-based systems, this chatbot leverages Retrieval-Augmented Generation (RAG) to provide dynamic, context-aware responses by querying a semantic vector knowledge base. It delivers highly accurate product discovery, user guidance, and customer support in real-time.</p>
        <h3 className='italic text-l'>Tech Stack:</h3>
        <p>Python, FastAPI, LangChain, OpenAI API, Vector Database (VectorDB), Docker</p>
        <h3 className='italic text-l'>Key Features:</h3>
        <ul>
          <li>
            <p>🌐 Native Multilingual Support: Flawlessly processes and responds to user queries in Arabic, Hebrew, and English.</p>
          </li>
          <li>
            <p>🧠 Semantic Search & RAG: Utilizes advanced text embeddings and a Vector Database to retrieve precise platform context before generating responses, eliminating hallucinations.</p>
          </li>
          <li>
            <p>⚡ High-Performance Microservice: Built as a decoupled, asynchronous FastAPI backend, ensuring low-latency communication with the TechMart frontend.</p>
          </li>
          <li>
            <p>🛠️ Enterprise-Ready Orchestration: Managed using LangChain for robust prompt engineering and conversational memory flow.
              Status:
              Fully Operational Microservice — Integrated into TechMart Ecosystem
              Links:</p>
          </li>
          <li>
            <a className='text-blue-300 hover:text-blue-400' href='https://www.github.com/MuhannadYazbak/techmart-rag'>AI Agent</a>
          </li>
        </ul>
      </section>
    </main>
  )
}