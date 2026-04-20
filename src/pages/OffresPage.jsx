import Header from '../components/Header'
import OffresSection from '../components/OffresSection'
import Footer from '../components/Footer'

export default function OffresPage() {
  return (
    <div id="top" className="min-h-screen bg-[#f8f9ff] text-slate-900">
      <Header />
      <main className="pt-20">
        <OffresSection />
      </main>
      <Footer />
    </div>
  )
}
