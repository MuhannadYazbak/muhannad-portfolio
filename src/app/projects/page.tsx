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
        <h2 className='text-xl text-indigo-400'>🤖 TechMart Rule-Based Chatbot</h2>
        <h3 className='italic text-l'>Description:</h3>
        <p>A custom-built chatbot designed to assist users on the TechMart platform. It uses rule-based logic to answer FAQs, guide users through product discovery, and simulate conversational flow. Built with modularity in mind, it’s a great example of your backend logic and UX thinking.</p>
        <h3 className='italic text-l'>Tech Stack:</h3>
        <p>JavaScript, Node.js, Express, JSON-based rule engine</p>
        <h3 className='italic text-l'>Key Features:</h3>
        <ul>
          <li>
            <p>💬 Rule-based conversational flow</p>
          </li>
          <li>
            <p>🧠 Modular logic for easy extension</p>
          </li>
          <li>
            <p>📦 Integrated with TechMart frontend</p>
          </li>
          <li>
            <p>🛠️ Built for future upgrade to NLP-based chatbot
              Status:
              Completed MVP — ready for integration and enhancement
              Links:</p>
          </li>
          <li>
            <a className='text-blue-300 hover:text-blue-400' href='https://www.github.com/MuhannadYazbak/techmart-chatobt'>Chatbot</a>
          </li>
        </ul>
      </section>
    </main>
  )
}