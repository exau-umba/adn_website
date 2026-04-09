const realisations = [
  { title: 'Residence secondaire a Paris', img: '/images/real-1.jpg' },
  { title: 'Accompagnement senior', img: '/images/real-2.jpg' },
  { title: 'Gestion hoteliere privee', img: '/images/real-3.jpg' },
  { title: 'Transfert aeroport VIP', img: '/images/real-4.jpg' },
]

export default function RealisationsSection() {
  return (
    <section className="js-section bg-[#f2f3f9] py-20">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-center font-heading text-3xl font-bold text-[#08047a] md:text-4xl">Nos Realisations</h2>
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {realisations.map((item) => (
            <article key={item.title} className="js-card group relative overflow-hidden rounded-3xl">
              <img src={item.img} alt={item.title} className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-105 md:h-64" />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-5">
                <p className="font-bold text-white">{item.title}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
