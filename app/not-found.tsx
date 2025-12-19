import Link from 'next/link'

export default function NotFound() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-hero">
      <div className="container-custom">
        <div className="max-w-lg mx-auto text-center">
          <div className="text-8xl font-bold text-white mb-4">404</div>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Pagina Niet Gevonden</h1>
          <p className="text-white/80 mb-8">
            De pagina die u zoekt bestaat niet of is verplaatst.
            Laten we u terug naar huis brengen.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/" className="btn-white w-full sm:w-auto">
              Naar Homepage
            </Link>
            <Link href="/contact" className="inline-flex items-center justify-center px-8 py-4 font-semibold text-white border-2 border-white/50 rounded-full transition-all duration-300 hover:bg-white/10 w-full sm:w-auto">
              Contact Opnemen
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
