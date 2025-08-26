import Image from "next/image"

export default function Navbar() {
  return (
    <nav className="bg-gray-900 text-white px-6 py-4 shadow-md justify-between">
      <div id='logo'>
        <Image alt='TechMart Logo' src='/logo.png' height={50} width={50} className="x-6"/>
      </div>
      <div className="flex justify-between items-center max-w-6xl mx-auto">
        <span className="text-xl font-bold tracking-tight hover:text-gray-300">
          Muhannad Portfolio
        </span>
        <div className="space-x-3 text-sm font-medium">
          <a href="/" className="hover:text-gray-300 transition">Home</a>
          <a href="/projects" className="hover:text-gray-300 transition">Projects</a>
          <a href="/contact" className="hover:text-gray-300 transition">Contact</a>
          <a href="/resume" className="hover:text-gray-300 transition">Resume</a>
          <a href="/visuals" className="hover:text-gray-300 transition">Visuals</a>
          <a href="/narrative" className="hover:text-gray-300 transition">Narrative</a>
        </div>
      </div>
    </nav>
  )
}