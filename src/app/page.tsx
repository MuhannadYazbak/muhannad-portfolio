import ResumeDownload from './components/resumeDownload'

export default async function Home() {
  return (
    <main className="prose prose-lg max-w-4xl mx-auto px-4 py-8">
      <h1 className='text-4xl font-bold text-indigo-500'>Muhannad Yazbak's Portfolio</h1>
      <section className="text-gray-800 leading-relaxed rounded-lg p-6 mb-8 shadow-sm">
        <article id='headline'>Hi, <strong>I'm Muhannad Yazbak</strong> - Full-Stack Developer and QA Automation Engineer with a dual academic background in Medical Laboratory Science and Information Systems.<br />
          I specialize in building scalable web applications and intelligent automation systems — from health-tech platforms to AI-powered assistants.<br />
          My latest solo challenge: upgrading TechMart’s chatbot from rule-based logic to a RAG-powered assistant using FastAPI, LangChain, and OpenRouter. I use AI as a personal development partner — from debugging to architecture.<br />
          Passionate about improving lives through technology, I bring precision from the lab and agility from the cloud.

        </article>
      </section>
      <h2 className='italic text-l'>📫 Let's connect:</h2>
      <p>- Email:  yazbakm@gmail.com</p>
      <p>- Phone:  00972548034062</p>
      <p>- LinkedIn: <a className='text-blue-300 hover:text-blue-400' href='https://www.linkedin.com/in/muhannad-yazbak/'>https://www.linkedin.com/in/muhannad-yazbak/</a></p>
      <p>-GitHub: <a className='text-blue-300 hover:text-blue-400' href='http://www.github.com/MuhannadYazbak'> http://www.github.com/MuhannadYazbak</a></p>
      <ResumeDownload />
    </main>
  )
}

