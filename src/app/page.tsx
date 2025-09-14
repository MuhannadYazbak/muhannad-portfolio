import ResumeDownload from './components/resumeDownload'

export default async function Home() {
  return (
    <main className="prose prose-lg max-w-4xl mx-auto px-4 py-8">
      <h1 className='text-4xl font-bold text-red-500'>Muhannad Yazbak's Portfolio</h1>
      <section className="text-gray-800 leading-relaxed rounded-lg p-6 mb-8 shadow-sm">
        <article id='headline'>Hi, <strong>I'm Muhannad Yazbak</strong> — a Full-Stack Developer and QA Automation Engineer with a dual academic background in Medical Laboratory Science and Information Systems.<br />
          I specialize in building scalable web applications and robust automation suites using modern technologies like Next.js, Docker, Playwright, and CI/CD pipelines. My work blends precision, performance, and a deep curiosity for how systems behave in real-world environments.<br />
          My latest project, TechMart, began as a solo learning challenge and is now evolving into a product-grade e-commerce platform. It taught me more than any course could — from architecture decisions to deployment strategies.
          I'm passionate about health-tech innovation and excited to contribute to systems that improve lives through technology.</article>
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

