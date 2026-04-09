import { FaCircleCheck } from 'react-icons/fa6'

export default function WhySection() {
  const points = [
    'Agents verifies (references et antecedents controles)',
    'Suivi en temps reel et service client dedie',
    'Securite et assurance responsabilite civile',
    'Formation continue des agents',
  ]

  return (
    <section id="pourquoi" className="js-section relative overflow-hidden py-20">
      <div className="section-bg-noise" />
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="grid gap-10 rounded-[2rem] bg-[#08047a] p-8 text-white md:p-12 lg:grid-cols-2">
        <div>
          <h2 className="font-heading text-3xl font-bold md:text-4xl">Pourquoi nous choisir ?</h2>
          <ul className="mt-6 space-y-4 text-indigo-100">
            {points.map((point) => (
              <li key={point} className="flex items-start gap-3">
                <FaCircleCheck className="mt-0.5 shrink-0 text-[#ffdf95]" aria-hidden="true" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>
        <img src="/images/why.jpg" alt="Client satisfait" className="h-80 w-full rounded-3xl object-cover" />
        </div>
      </div>
    </section>
  )
}
