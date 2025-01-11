import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#2A332C] text-white flex items-center justify-center">
      <div className="text-center">
        <h2 className="text-6xl font-light mb-4">404</h2>
        <p className="text-xl text-gray-400 mb-8">Page not found</p>
        <Link 
          href="/" 
          className="border border-gray-600 px-6 py-2.5 hover:bg-white hover:text-black transition-colors"
        >
          Return Home
        </Link>
      </div>
    </div>
  )
}
