const plans = [
  {
    name: 'Agent A (Standard)',
    price: 'Niveau Standard',
    period: '',
    features: ['Bon comportement', 'Travail acceptable', 'Peut etre place chez clients simples'],
  },
  {
    name: 'Agent B (Bon niveau)',
    price: 'Niveau Confirmé',
    period: '',
    features: ['Expérience confirmée', 'Serieux et discipline', 'Recommandé pour clients exigeants'],
    highlighted: true,
  },
  {
    name: 'Agent VIP (Premium)',
    price: 'Niveau Premium',
    period: '',
    features: [
      'Très fiable avec excellente attitude',
      'Expérience solide',
      'Peut travailler chez expatriés, ONG et hauts responsables',
      'Salaire plus élevé possible',
    ],
  },
]

export default function TarifsSection() {
  return (
    <section id="tarifs" className="js-section relative overflow-hidden bg-[#f2f3f9] py-20">
      <div className="section-bg-glow section-bg-glow--right" />
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <p className="text-center text-xs font-bold uppercase tracking-widest text-[#08047a]">Tarifs</p>
        <h2 className="mt-3 text-center font-heading text-3xl font-bold text-[#08047a] md:text-4xl">Classement des agents par categorie client</h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-slate-600">
          Nos agents sont classes par niveau d&apos;experience, de fiabilite et d&apos;exigence client pour garantir le bon profil au bon foyer.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {plans.map((plan) => (
            <article
              key={plan.name}
              className={`js-card rounded-[1.6rem] border p-7 shadow-sm ${
                plan.highlighted ? 'border-[#08047a] bg-[#08047a] text-white' : 'border-slate-200 bg-white'
              }`}
            >
              <h3 className={`text-xl font-bold ${plan.highlighted ? 'text-white' : 'text-slate-900'}`}>{plan.name}</h3>
              <p className={`mt-4 text-3xl font-black ${plan.highlighted ? 'text-[#ffdf95]' : 'text-[#08047a]'}`}>
                {plan.price}
                <span className={`ml-1 text-base font-semibold ${plan.highlighted ? 'text-white/80' : 'text-slate-500'}`}>{plan.period}</span>
              </p>
              <ul className={`mt-5 space-y-2 text-sm ${plan.highlighted ? 'text-white/90' : 'text-slate-600'}`}>
                {plan.features.map((feature) => (
                  <li key={feature}>- {feature}</li>
                ))}
              </ul>
              <button
                className={`mt-7 w-full rounded-full px-5 py-3 text-sm font-bold ${
                  plan.highlighted ? 'bg-white text-[#08047a]' : 'bg-[#08047a] text-white'
                }`}
              >
                Demander cet agent
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
