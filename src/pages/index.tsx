import Link from "next/link";

export default function Home() {
    return (
        <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center">
            <h1 className="text-5xl font-bold mb-4">Peru N</h1>
            <h2 className="text-xl text-gray-400 mb-8">
                Software Architect | Cloud | Security | Emerging Tech
            </h2>
            <div className="flex gap-6">
                <Link href="/projects" className="px-6 py-3 bg-blue-600 rounded-md">Projects</Link>
                <Link href="/blog" className="px-6 py-3 bg-green-600 rounded-md">Blog</Link>
                <Link href="/diagrams" className="px-6 py-3 bg-purple-600 rounded-md">Diagrams</Link>
                <Link href="/about" className="px-6 py-3 bg-gray-700 rounded-md">About Me</Link>
            </div>
        </div>
    )
}
