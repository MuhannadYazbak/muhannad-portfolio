import ResumeDownload from './components/resumeDownload'

export default async function Home() {
  return (
    <main className="prose prose-lg max-w-4xl mx-auto px-4 py-8 dark:prose-invert">
      <h1 className='text-4xl font-bold text-indigo-500 mb-6'>Muhannad Yazbak's Portfolio</h1>
      
      <section className="text-gray-800 dark:text-gray-200 leading-relaxed rounded-lg p-6 mb-8 shadow-sm border border-gray-100 dark:border-gray-800">
        <article id='headline' className="space-y-4">
          <p>
            Hi, <strong>I'm Muhannad Yazbak</strong> – a Full-Stack Developer and QA Automation Engineer with a dual academic background in Medical Laboratory Science and Information Systems. I specialize in building scalable web applications and intelligent automation systems.
          </p>
          <p>
            My latest production milestone: **TechMart**, a fully decoupled, multi-cloud e-commerce platform. I engineered its asynchronous RAG-powered AI assistant using FastAPI, LangChain, and OpenRouter, and orchestrated the entire ecosystem across Vercel, Render, and Aiven Cloud MySQL. 
          </p>
          <p>
            I treat modern AI technologies as active development partners for rapid debugging, CI/CD pipeline optimization, and system architecture. Bringing precision from the lab and agility from the cloud, I build software designed to perform under pressure.
          </p>
        </article>
      </section>

      <h2 className='text-xl font-semibold text-indigo-400 mt-6 mb-2'>📫 Let's connect:</h2>
      <ul className='list-none pl-0 space-y-1 text-base'>
        <li><strong>Email:</strong> <a className='text-blue-400 hover:text-blue-500 underline' href='mailto:yazbakm@gmail.com'>yazbakm@gmail.com</a></li>
        <li><strong>Phone:</strong> <span className='text-gray-700 dark:text-gray-300'>00972548034062</span></li>
        <li><strong>LinkedIn:</strong> <a className='text-blue-400 hover:text-blue-500 underline' href='https://www.linkedin.com/in/muhannad-yazbak/' target='_blank' rel='noreferrer'>linkedin.com/in/muhannad-yazbak</a></li>
        <li><strong>GitHub:</strong> <a className='text-blue-400 hover:text-blue-500 underline' href='https://github.com/MuhannadYazbak' target='_blank' rel='noreferrer'>github.com/MuhannadYazbak</a></li>
      </ul>

      <div className="mt-8">
        <ResumeDownload />
      </div>
    </main>
  )
}