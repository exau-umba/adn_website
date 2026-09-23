import { useState } from 'react'

const CONTACT_EMAIL = 'contact@adnproservice.com'
const initialForm = { nom: '', email: '', message: '', site: '' }

export default function ContactSection() {
  const [form, setForm] = useState(initialForm)
  const [status, setStatus] = useState('idle')
  const [feedback, setFeedback] = useState('')

  const handleChange = (event) => {
    const { name, value } = event.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    setStatus('sending')
    setFeedback('')

    try {
      const response = await fetch('/contact.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      const result = await response.json().catch(() => ({}))

      if (!response.ok || !result.ok) {
        throw new Error(result.message || "L'envoi a echoue.")
      }

      setStatus('success')
      setFeedback('Merci ! Votre demande a bien ete envoyee. Nous vous repondrons rapidement.')
      setForm(initialForm)
    } catch (error) {
      setStatus('error')
      setFeedback(`${error.message} Vous pouvez aussi nous ecrire a ${CONTACT_EMAIL}.`)
    }
  }

  return (
    <section id="contact" className="js-section relative overflow-hidden bg-white py-20">
      <div className="section-bg-glow section-bg-glow--left" />
      <div className="relative z-10 mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-2">
        <div>
          <p className="text-xs font-bold uppercase tracking-widest text-[#08047a]">Contact</p>
          <h2 className="mt-4 font-heading text-3xl font-bold text-[#08047a] md:text-4xl">Parlons de votre besoin</h2>
          <p className="mt-4 max-w-xl text-slate-600">
            Une équipe vous répond rapidement pour vous proposer un service adapté à votre domicile ou votre entreprise.
          </p>
          <div className="mt-6 space-y-2 text-sm text-slate-700">
            <p>Avenue Tombalbaye, dans l'enceinte de la paroisse de Notre Dame de Fatima <br /> Kinshasa-Gombe</p>
            <p>+243 892 579 709</p>
            <p>
              <a href={`mailto:${CONTACT_EMAIL}`} className="hover:text-[#08047a]">
                {CONTACT_EMAIL}
              </a>
            </p>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="js-card rounded-[1.6rem] border border-slate-200 bg-[#f8f9ff] p-6 shadow-sm md:p-8"
        >
          <div className="grid gap-4">
            <input
              type="text"
              name="nom"
              required
              value={form.nom}
              onChange={handleChange}
              placeholder="Votre nom"
              className="rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none transition focus:border-[#08047a]"
            />
            <input
              type="email"
              name="email"
              required
              value={form.email}
              onChange={handleChange}
              placeholder="Votre email"
              className="rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none transition focus:border-[#08047a]"
            />
            <textarea
              rows="5"
              name="message"
              required
              value={form.message}
              onChange={handleChange}
              placeholder="Expliquez votre besoin..."
              className="rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none transition focus:border-[#08047a]"
            />
            {/* Champ piege anti-spam, invisible pour les visiteurs */}
            <input
              type="text"
              name="site"
              value={form.site}
              onChange={handleChange}
              tabIndex="-1"
              autoComplete="off"
              aria-hidden="true"
              className="hidden"
            />
            <button
              type="submit"
              disabled={status === 'sending'}
              className="rounded-full bg-[#08047a] px-5 py-3 text-sm font-bold text-white disabled:cursor-wait disabled:opacity-70"
            >
              {status === 'sending' ? 'Envoi en cours...' : 'Envoyer ma demande'}
            </button>
            {feedback && (
              <p
                role="status"
                className={`text-sm font-medium ${status === 'success' ? 'text-green-700' : 'text-red-700'}`}
              >
                {feedback}
              </p>
            )}
          </div>
        </form>
      </div>
    </section>
  )
}
