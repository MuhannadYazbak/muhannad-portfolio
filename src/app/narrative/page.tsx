export default function Narrative() {
    return (
        <main className="container w-full items-center ml-3">
            <h1 id='header' className='text-4xl font-bold text-red-500 mb-4 '>TechMart Narrative Stories</h1>
            <section id='container' className="flex flex-col gap-5">
                <article className="flex flex-col justify-center space-x-5 border-b border-gray-300 pb-4 bg-green-100">
                    <h2 id='1st-article' className="text-2xl font-semibold mb-2">Origin</h2>
                    <p className="max-w-3xl text-lg text-gray-700 leading-relaxed transition-transform hover:scale-110">
                        It all started when I visited my cousin, a mobile store/lab owner who casually asked<br />
                        Muhannad are you able to develop a website? and he described some basic requirments.<br />
                        Few days later I decided to develop a Full-Stack showcase fulfilling his requirments</p>
                </article>
                <article className="flex flex-col justify-center space-x-5 border-b border-gray-300 pb-4 bg-sky-100">
                    <h2 id='2nd-article' className="text-2xl font-semibold mb-2">Unexpected Pivot</h2>
                    <p className="max-w-3xl text-lg text-gray-700 leading-relaxed transition-transform hover:scale-110">
                        TechMart was originally supposed to be built with React.js.<br />
                        I opened my terminal, typed <code>npx create-react-app</code>, and boom—deprecated.<br />
                        The official docs nudged me toward <code>create-next-app</code>, and that’s when the pivot happened.<br />
                        What started as a simple frontend idea quickly evolved into a full-stack eCommerce showcase.<br />
                        I didn’t just switch frameworks—I switched mindsets.
                    </p>
                </article>
                <article className="flex flex-col justify-center space-x-5 border-b border-gray-300 pb-4 bg-sky-100">
                    <h2 id='3rd-article' className="text-2xl font-semibold mb-2">Mastery in Motion</h2>
                    <p className="max-w-3xl text-lg text-gray-700 leading-relaxed transition-transform hover:scale-110">
                        Just a few days in, I realized I wasn’t just learning Next.js—I was bending it to my will.<br/>
                        My cousin’s original requirements? Already surpassed. Routing, SSR, API routes,<br/>
                        dynamic pages—I had it all humming. What started as a challenge quickly became a playground.
                    </p>
                </article>
                <article className="flex flex-col justify-center space-x-5 border-b border-gray-300 pb-4 bg-sky-100">
                    <h2 id='4th-article' className="text-2xl font-semibold mb-2">Full-Stack Evolution</h2>
                    <p className="max-w-3xl text-lg text-gray-700 leading-relaxed transition-transform hover:scale-110">
                        Once the frontend felt solid, I dove into the backend. I started sketching out architecture<br/>
                        with PlantUML—visualizing flows, data models, and service boundaries.<br/>
                        Then came Playwright: basic automation to test flows like checkout, login, and product search.<br/>
                        Suddenly, I wasn’t just building—I was engineering. At that point I called the project TechMart.
                    </p>
                </article>
                <article className="flex flex-col justify-center space-x-5 border-b border-gray-300 pb-4 bg-purple-100">
                    <h2 id='5th-article' className="text-2xl font-semibold mb-2">Infrastructure Awakening</h2>
                    <p className="max-w-3xl text-lg text-gray-700 leading-relaxed transition-transform hover:scale-110">
                        I wanted reliability, not just functionality. So I added Docker to containerize<br/>
                        the app—clean, portable, and ready for deployment.<br/>
                        Then came GitHub Actions: CI pipelines that lint, test, and deploy with every push.<br/>
                        From local dev to cloud-ready in one sprint.
                    </p>
                </article>
                <article className="flex flex-col justify-center space-x-5 border-b border-gray-300 pb-4 bg-green-100">
                    <h2 id='6th-article' className="text-2xl font-semibold mb-2">LinkedIn and CV</h2>
                    <p className="max-w-3xl text-lg text-gray-700 leading-relaxed transition-transform hover:scale-110">
                        I processed my showcase turned into a production-grade, great news but something was still missing.<br/>
                        So, I participated in a job hunt workshop and realized I have to update my CV and my LinkedIn profile<br/>
                        made those changes step by step, until now I have a polished CV and proactive LinkedIn profile with TechMart brand posts. <br/>
                    </p>
                </article>
                <article className="flex flex-col justify-center space-x-5 border-b border-gray-300 pb-4 bg-green-100">
                    <h2 id='7th-article' className="text-2xl font-semibold mb-2">UI/UX Approved?</h2>
                    <p className="max-w-3xl text-lg text-gray-700 leading-relaxed transition-transform hover:scale-110">
                        👧 I had a tiny visitor — my cousin’s daughter, a soon-to-be 2nd grader.<br/>
                        She peeked over my shoulder while I was deep into manual exploratory testing and asked:“Muhannad, are you buying a new phone?”<br/>
                        That moment made me smile — because it meant my frontend was so clear, even a 7-year-old thought she was on a real e-commerce site.<br/>
                        I replied with a metaphor she could grasp:“No, I’m building the site that sells phones — like my own Shein version.
                    </p>
                </article>

            </section>
        </main>
    )
}