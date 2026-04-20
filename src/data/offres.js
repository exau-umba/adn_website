export const offres = [
  {
    id: 'agent-polyvalent',
    titre: 'Agent polyvalent',
    type: 'CDI',
    lieu: 'Congo-Kinshasa',
    datePublication: '2026-03-10',
    dateFin: '2026-06-30',
    nombrePersonnel: 8,
    description: 'Interventions multiservices sur sites clients avec suivi des standards qualite ADN Pro Service.',
    details:
      'Vous assurez des interventions de nettoyage, manutention legere et support logistique selon les besoins des clients.',
  },
  {
    id: 'agent-entretien',
    titre: 'Agent d entretien',
    type: 'CDD',
    lieu: 'Congo-Lubumbashi',
    datePublication: '2026-02-20',
    dateFin: '2026-05-15',
    nombrePersonnel: 5,
    description: 'Nettoyage professionnel de bureaux et espaces communs avec respect des protocoles hygiene.',
    details:
      'Vous intervenez dans des bureaux et sites industriels en respectant les procedures hygiene, securite et qualite.',
  },
  {
    id: 'agent-securite',
    titre: 'Agent de securite',
    type: 'Temps plein',
    lieu: 'Congo-Kinshasa',
    datePublication: '2026-01-05',
    dateFin: '2026-04-01',
    nombrePersonnel: 12,
    description: 'Surveillance des acces, rondes et reporting des incidents pour la surete des installations.',
    details:
      'Vous effectuez les controles d acces, les rondes et les comptes rendus d incidents pour garantir la securite des sites.',
  },
]

export function estOffreExpiree(dateFin) {
  const aujourdHui = new Date()
  aujourdHui.setHours(0, 0, 0, 0)

  const fin = new Date(dateFin)
  fin.setHours(0, 0, 0, 0)

  return fin < aujourdHui
}

export function formatDateFR(dateISO) {
  return new Date(dateISO).toLocaleDateString('fr-FR', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  })
}
