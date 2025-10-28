export default function Narrative() {
    return (
        <main className="prose prose-lg max-w-4xl mx-auto px-4 py-8">
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
                        Just a few days in, I realized I wasn’t just learning Next.js—I was bending it to my will.<br />
                        My cousin’s original requirements? Already surpassed. Routing, SSR, API routes,<br />
                        dynamic pages—I had it all humming. What started as a challenge quickly became a playground.
                    </p>
                </article>
                <article className="flex flex-col justify-center space-x-5 border-b border-gray-300 pb-4 bg-sky-100">
                    <h2 id='4th-article' className="text-2xl font-semibold mb-2">Full-Stack Evolution</h2>
                    <p className="max-w-3xl text-lg text-gray-700 leading-relaxed transition-transform hover:scale-110">
                        Once the frontend felt solid, I dove into the backend. I started sketching out architecture<br />
                        with PlantUML—visualizing flows, data models, and service boundaries.<br />
                        Then came Playwright: basic automation to test flows like checkout, login, and product search.<br />
                        Suddenly, I wasn’t just building—I was engineering. At that point I called the project TechMart.
                    </p>
                </article>
                <article className="flex flex-col justify-center space-x-5 border-b border-gray-300 pb-4 bg-purple-100">
                    <h2 id='5th-article' className="text-2xl font-semibold mb-2">Infrastructure Awakening</h2>
                    <p className="max-w-3xl text-lg text-gray-700 leading-relaxed transition-transform hover:scale-110">
                        I wanted reliability, not just functionality. So I added Docker to containerize<br />
                        the app—clean, portable, and ready for deployment.<br />
                        Then came GitHub Actions: CI pipelines that lint, test, and deploy with every push.<br />
                        From local dev to cloud-ready in one sprint.
                    </p>
                </article>
                <article className="flex flex-col justify-center space-x-5 border-b border-gray-300 pb-4 bg-green-100">
                    <h2 id='6th-article' className="text-2xl font-semibold mb-2">LinkedIn and CV</h2>
                    <p className="max-w-3xl text-lg text-gray-700 leading-relaxed transition-transform hover:scale-110">
                        I processed my showcase turned into a production-grade, great news but something was still missing.<br />
                        So, I participated in a job hunt workshop and realized I have to update my CV and my LinkedIn profile<br />
                        made those changes step by step, until now I have a polished CV and proactive LinkedIn profile with TechMart brand posts. <br />
                    </p>
                </article>
                <article className="flex flex-col justify-center space-x-5 border-b border-gray-300 pb-4 bg-green-100">
                    <h2 id='7th-article' className="text-2xl font-semibold mb-2">UI/UX Approved?</h2>
                    <p className="max-w-3xl text-lg text-gray-700 leading-relaxed transition-transform hover:scale-110">
                        👧 I had a tiny visitor — my cousin’s daughter, a soon-to-be 2nd grader.<br />
                        She peeked over my shoulder while I was deep into manual exploratory testing and asked:“Muhannad, are you buying a new phone?”<br />
                        That moment made me smile — because it meant my frontend was so clear, even a 7-year-old thought she was on a real e-commerce site.<br />
                        I replied with a metaphor she could grasp:“No, I’m building the site that sells phones — like my own Shein version.
                    </p>
                </article>
                <article className="flex flex-col justify-center space-x-5 border-b border-gray-300 pb-4 bg-purple-100">
                    <h2 id='8th-article' className="text-2xl font-semibold mb-2">🛠️ From Chaos to Confidence: Optimizing TechMart’s CI Pipeline</h2>
                    <p className="max-w-3xl text-lg text-gray-700 leading-relaxed transition-transform hover:scale-110">
                        I set out to ensure quality and precision across TechMart’s codebase, so I kicked off a GitHub Actions CI pipeline. Simple goal, complex journey.<br />
                        The beginning was rocky—wrangling YAML syntax, sequencing steps, and learning the quirks of GitHub’s runner environment.<br />
                        I thought I had it nailed… until the first run: 58 out of 62 tests failed, despite passing locally.<br />
                        That’s when the real work began.<br />
                        I re-engineered the pipeline with a mock-driven approach, tailored for SSR and metadata fetches.<br />
                        Each test was dissected, optimized, and rebuilt to reflect real-world behavior. The result? 100% pass rate, both locally and in CI.<br />
                        And the cherry on top: I slashed the runtime from ~17 minutes to just ~5 minutes, with test execution clocking in at ~37 seconds.
                    </p>
                </article>
                <article className="flex flex-col justify-center space-x-5 border-b border-gray-300 pb-4 bg-green-100">
                    <h2 id="9th-article" className="text-2xl font-semibold mb-2">🧑‍💻 Guest Role</h2>
                    <p className="max-w-3xl text-lg text-gray-700 leading-relaxed transition-transform hover:scale-110">
                        TechMart was engineered with <strong>AuthContext</strong>, <strong>bcrypt.js</strong>, and <strong>JWT-based authentication</strong> using hash and salt.<br />
                        All routes are role-protected by default. But during a casual UX research sprint, I discovered that most users dislike being forced to log in just to explore.<br />
                        So I introduced a new role: <strong>Guest</strong>.<br />
                        Guests can browse freely, add items to their cart, and even proceed with a minimal checkout flow—no signup required.<br />
                        I validated this direction with a live LinkedIn poll, and the results confirmed the need for frictionless access.
                    </p>
                </article>
                <article className="flex flex-col justify-center space-x-5 border-b border-gray-300 pb-4 bg-green-100">
                    <h2 id="10th-article" className="text-2xl font-semibold mb-2">🌍 Internationalization</h2>
                    <p className="max-w-3xl text-lg text-gray-700 leading-relaxed transition-transform hover:scale-110">
                        TechMart isn’t just another e-commerce site—it’s a breakthrough. In a region where most platforms overlook Arabic,<br />
                        TechMart steps in as the first fully local, trilingual e-commerce solution, offering seamless service in <strong>English, Arabic, and Hebrew</strong>.

                    </p>
                </article>
                <article className="flex flex-col justify-center space-x-5 border-b border-gray-300 pb-4 bg-purple-100">
                    <h2 id="11th-article" className="text-2xl font-semibold mb-2">🌍 How TechMart Speaks Three Languages

                    </h2>
                    <p className="max-w-3xl text-lg text-gray-700 leading-relaxed transition-transform hover:scale-110">
                        TechMart uses i18n for internationalization, supporting both static and dynamic content.<br/>
                        Every label, placeholder, and message adapts to the user’s language.<br/>
                        Implemented dir="rtl" and dir="ltr" dynamically based on language context, ensuring proper layout flow for Arabic and Hebrew.
                        Content is stored in a item_translations table, allowing seamless switching and future scalability. Even admin tools and chatbot responses are localized.
                        The result? A platform that feels native—no matter the language.


                    </p>
                </article>
                <article className="flex flex-col justify-center space-x-5 border-b border-gray-300 pb-4 bg-green-100">
                    <h2 id="12th-article" className="text-2xl font-semibold mb-2">💡From Rule-Based to RAG: A 2-Day Sprint That Changed Everything
                    </h2>
                    <p className="max-w-3xl text-lg text-gray-700 leading-relaxed transition-transform hover:scale-110">
                        I upgraded TechMart’s chatbot from a static rule-based system to a dynamic Retrieval-Augmented Generation (RAG) assistant.<br/>
                        It now understands multilingual queries, recommends products contextually, and even distinguishes between tablets and smartwatches.<br/>
                        What started as a two-week sprint turned into a two-day breakthrough.


                    </p>
                </article>
                <article className="flex flex-col justify-center space-x-5 border-b border-gray-300 pb-4 bg-purple-100">
                    <h2 id="13h-article" className="text-2xl font-semibold mb-2">💪 RAG-Powered Commerce: FastAPI, OpenRouter, and LangChain in Production
                    </h2>
                    <p className="max-w-3xl text-lg text-gray-700 leading-relaxed transition-transform hover:scale-110">
                        TechMart now runs a FastAPI backend that wraps a LangChain RAG agent, connected to OpenRouter for multilingual LLM access.<br/>
                        The frontend fetches real-time responses, and the system is fully modular — with category-aware chunking, user/guest filtering, and admin-level controls.

                    </p>
                </article>

            </section>
        </main>
    )
}