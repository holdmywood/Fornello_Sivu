import type { Metadata } from 'next'
import { buildAlternates } from '@/lib/metadata'

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Rekisteri- ja tietosuojaseloste – Fornello Oy',
    description: 'Fornello Oy:n rekisteri- ja tietosuojaseloste.',
    alternates: buildAlternates('/tietosuojaseloste'),
  }
}

const sections = [
  {
    heading: '1. Rekisterinpitäjä',
    content: 'Fornello Oy, Latoluomantie 30, 29100 Luvia\n0500 110 220\ninfo@fornello.fi',
  },
  {
    heading: '2. Rekisteristä vastaava yhteyshenkilö',
    content: 'Juhani Koskiranta, juhani.koskiranta@fornello.fi, 0500 110 220',
  },
  {
    heading: '3. Rekisterin nimi',
    content:
      'Yrityksen asiakasrekisteri, markkinointirekisteri, sidosryhmärekisteri, järjestelmän käyttäjärekisteri sekä verkkopalvelun käyttäjärekisteri.',
  },
  {
    heading: '4. Oikeusperuste ja henkilötietojen käsittelyn tarkoitus',
    content: null,
    bullets: [
      'henkilön suostumus',
      'sopimus, jossa rekisteröity on osapuolena',
      'Henkilötietolaki (523/1999) 10 §',
      'Rekisterinpitäjän oikeutettu etu (esim. asiakassuhde, työsuhde, jäsenyys).',
    ],
    intro:
      'EU:n yleisen tietosuoja-asetuksen mukainen oikeusperuste henkilötietojen käsittelylle on',
    outro:
      'Henkilötietojen käsittelyn tarkoitus on yhteydenpito asiakkaisiin, asiakassuhteen ylläpito, markkinointi tms. Tietoja ei käytetä automatisoituun päätöksentekoon tai profilointiin.',
  },
  {
    heading: '5. Rekisterin tietosisältö',
    content:
      'Rekisteriin tallennettavia tietoja ovat: henkilön nimi, asema, yritys/organisaatio, yhteystiedot (puhelinnumero, sähköpostiosoite, osoite), www-sivustojen osoitteet, verkkoyhteyden IP-osoite, tunnukset/profiilit sosiaalisen median palveluissa, tiedot tilatuista palveluista ja niiden muutoksista, laskutustiedot, muut asiakassuhteeseen ja tilattuihin palveluihin liittyvät tiedot (mm. metsävaratiedot). Tietoja säilytetään enintään 10 vuoden ajan, minkä jälkeen ne hävitetään anonymisoidusti.',
  },
  {
    heading: '6. Säännönmukaiset tietolähteet',
    content:
      'Rekisteriin tallennettavat tiedot saadaan asiakkaalta mm. www-lomakkeilla lähetetyistä viesteistä, sähköpostitse, puhelimitse, sosiaalisen median palvelujen kautta, sopimuksista, asiakastapaamisista ja muista tilanteista, joissa asiakas luovuttaa tietojaan.',
  },
  {
    heading: '7. Tietojen säännönmukaiset luovutukset ja tietojen siirto EU:n tai ETA:n ulkopuolelle',
    content:
      'Tietoja ei luovuteta säännönmukaisesti muille tahoille. Tietoja voidaan julkaista siltä osin kuin niin on sovittu asiakkaan kanssa. Tietoja voidaan siirtää rekisterinpitäjän toimesta myös EU:n tai ETA:n ulkopuolelle.',
  },
  {
    heading: '8. Rekisterin suojauksen periaatteet',
    content:
      'Rekisterin käsittelyssä noudatetaan huolellisuutta ja tietojärjestelmien avulla käsiteltävät tiedot suojataan asianmukaisesti. Kun rekisteritietoja säilytetään Internet-palvelimilla, niiden laitteiston fyysisestä ja digitaalisesta tietoturvasta huolehditaan asiaankuuluvasti. Rekisterinpitäjä huolehtii siitä, että tallennettuja tietoja sekä palvelimien käyttöoikeuksia ja muita henkilötietojen turvallisuuden kannalta kriittisiä tietoja käsitellään luottamuksellisesti ja vain niiden työntekijöiden toimesta, joiden työnkuvaan se kuuluu.',
  },
  {
    heading: '9. Tarkastusoikeus ja oikeus vaatia tiedon korjaamista',
    content:
      'Jokaisella rekisterissä olevalla henkilöllä on oikeus tarkistaa rekisteriin tallennetut tietonsa ja vaatia mahdollisen virheellisen tiedon korjaamista tai puutteellisen tiedon täydentämistä. Mikäli henkilö haluaa tarkistaa hänestä tallennetut tiedot tai vaatia niihin oikaisua, pyyntö tulee lähettää kirjallisesti rekisterinpitäjälle. Rekisterinpitäjä voi pyytää tarvittaessa pyynnön esittäjää todistamaan henkilöllisyytensä. Rekisterinpitäjä vastaa asiakkaalle EU:n tietosuoja-asetuksessa säädetyssä ajassa (pääsääntöisesti kuukauden kuluessa).',
  },
  {
    heading: '10. Muut henkilötietojen käsittelyyn liittyvät oikeudet',
    content:
      'Rekisterissä olevalla henkilöllä on oikeus pyytää häntä koskevien henkilötietojen poistamiseen rekisteristä ("oikeus tulla unohdetuksi"). Niin ikään rekisteröidyillä on muut EU:n yleisen tietosuoja-asetuksen mukaiset oikeudet kuten henkilötietojen käsittelyn rajoittaminen tietyissä tilanteissa. Pyynnöt tulee lähettää kirjallisesti rekisterinpitäjälle. Rekisterinpitäjä voi pyytää tarvittaessa pyynnön esittäjää todistamaan henkilöllisyytensä. Rekisterinpitäjä vastaa asiakkaalle EU:n tietosuoja-asetuksessa säädetyssä ajassa (pääsääntöisesti kuukauden kuluessa).',
  },
]

export default function TietosuojaselostePage() {
  return (
    <section className="bg-cream-50 py-20 px-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-bark-900 mb-2">
          Rekisteri- ja tietosuojaseloste
        </h1>
        <p className="text-sm text-bark-500 mb-10">
          Tämä on Fornello Oy:n henkilötietolain (10 ja 24 §) ja EU:n yleisen tietosuoja-asetuksen
          (GDPR) mukainen rekisteri- ja tietosuojaseloste. Laadittu 15.4.2018. Viimeisin muutos
          9.5.2019.
        </p>

        <div className="space-y-8">
          {sections.map((s) => (
            <div key={s.heading} className="bg-white rounded-xl p-6 shadow-sm border border-cream-100">
              <h2 className="text-base font-semibold text-bark-900 mb-3">{s.heading}</h2>
              {'intro' in s && s.intro && (
                <p className="text-bark-600 text-sm leading-relaxed mb-2">{s.intro}</p>
              )}
              {'bullets' in s && s.bullets && (
                <ul className="list-disc list-inside space-y-1 mb-3 text-sm text-bark-600">
                  {s.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              )}
              {'outro' in s && s.outro && (
                <p className="text-bark-600 text-sm leading-relaxed">{s.outro}</p>
              )}
              {s.content && (
                <p className="text-bark-600 text-sm leading-relaxed whitespace-pre-line">
                  {s.content}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
