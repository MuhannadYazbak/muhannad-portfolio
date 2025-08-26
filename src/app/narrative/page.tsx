export default function Narrative() {
    return (
        <main className="container w-full items-center ml-3">
            <h1 id='header' className='text-4xl font-bold text-red-500 mb-4 '>TechMart Narrative Stories</h1>
            <section id='container' className="flex flex-col gap-5">
                <article className="flex flex-col justify-center space-x-5 border-b border-gray-300 pb-4">
                    <h2 id='1st-article' className="text-2xl font-semibold mb-2">Origin</h2>
                    <p className="max-w-3xl text-lg text-gray-700 leading-relaxed transition-transform hover:scale-110">
                        It all started when I visited my cousin, a mobile store/lab owner who casually asked<br />
                        Muhannad are you able to develop a website? and he described some basic requirments.<br />
                        Few days later I decided to develop a Full-Stack showcase fulfilling his requirments</p>
                </article>
                <article className="flex flex-col justify-center space-x-5 border-b border-gray-300 pb-4">
                    <h2 id='2nd-article' className="text-2xl font-semibold mb-2">Unexpected Pivot</h2>
                    <p className="max-w-3xl text-lg text-gray-700 leading-relaxed transition-transform hover:scale-110">
                        TechMart was originally supposed to be built with React.js.<br />
                        I opened my terminal, typed <code>npx create-react-app</code>, and boom—deprecated.<br />
                        The official docs nudged me toward <code>create-next-app</code>, and that’s when the pivot happened.<br />
                        What started as a simple frontend idea quickly evolved into a full-stack eCommerce showcase.<br />
                        I didn’t just switch frameworks—I switched mindsets.
                    </p>
                </article>
                <article className="flex flex-col justify-center space-x-5 border-b border-gray-300 pb-4" hidden>
                    <h2 id='3rd-article' className="text-2xl font-semibold mb-2">Beyond Full-Stack</h2>
                    <p className="max-w-3xl text-lg text-gray-700 leading-relaxed transition-transform hover:scale-110">3rd story</p>
                </article>
                <article className="flex flex-col justify-center space-x-5 border-b border-gray-300 pb-4" hidden>
                    <h2 id='4th-article' className="text-2xl font-semibold mb-2">LinkedIn Posts and profile makeover</h2>
                    <p className="max-w-3xl text-lg text-gray-700 leading-relaxed transition-transform hover:scale-110">4th story</p>
                </article>

            </section>
        </main>
    )
}