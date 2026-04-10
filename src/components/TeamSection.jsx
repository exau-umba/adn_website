const team = [
  { name: 'Marie L.', role: 'Gouvernante', img: '/images/team-1.jpg' },
  { name: 'Thomas D.', role: 'Chauffeur privé', img: '/images/team-2.jpg' },
  { name: 'Awa K.', role: "Garde d'enfants", img: '/images/team-3.jpg' },
  { name: 'Julien S.', role: 'Home manager', img: '/images/team-4.jpg' },
]

export default function TeamSection() {
  return (
    <section className="js-section relative overflow-hidden py-20">
      <div className="section-bg-glow section-bg-glow--center" />
      <div className="relative z-10 mx-auto max-w-7xl px-6">
      <div className="flex items-end justify-between">
        <h2 className="font-heading text-3xl font-bold text-[#08047a] md:text-4xl">Nos Agents Ambassadeurs</h2>
        <button className="rounded-full border border-[#0061a6]/30 px-5 py-2 text-sm font-semibold text-[#0061a6]">Rejoindre l'Équipe</button>
      </div>
      <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {team.map((member) => (
          <article key={member.name} className="js-card">
            <img src={member.img} alt={member.name} className="h-72 w-full rounded-3xl object-cover" />
            <p className="mt-3 text-lg font-bold">{member.name}</p>
            <p className="text-sm text-[#0061a6]">{member.role}</p>
          </article>
        ))}
      </div>
      </div>
    </section>
  )
}
