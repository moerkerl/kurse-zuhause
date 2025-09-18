'use client'

import { useRouter } from 'next/navigation'
import LPHero from '@/components/LPHero'
import LPBenefits from '@/components/LPBenefits'
import LPSection from '@/components/LPSection'
import LPSteps from '@/components/LPSteps'
import LPTestimonial from '@/components/LPTestimonial'
import LPOffers from '@/components/LPOffers'
import AnimatedText from '@/components/AnimatedText'

export default function Home() {
  const router = useRouter()
  
  const benefits = [
    {
      icon: '🏠',
      title: 'Unterricht zuhause oder online',
      description: 'Flexibel bei Ihnen zuhause oder bequem online'
    },
    {
      icon: '👥',
      title: 'Für alle Altersgruppen',
      description: 'Von Kindern bis Erwachsenen und Senioren'
    },
    {
      icon: '🌍',
      title: 'Vielfältiges Kursangebot',
      description: 'Sprachen, Nachhilfe, Musik, Informatik und mehr'
    }
  ]

  const steps = [
    {
      number: 1,
      title: 'Auf „Jetzt Kurs finden" klicken',
      description: 'Beantworten Sie online ein paar kurze Fragen, um passende Kursleiter zu identifizieren.'
    },
    {
      number: 2,
      title: 'Lehrer kennenlernen',
      description: 'Sie erhalten eine Auswahl geprüfter Kursleiter und können denjenigen wählen, der am besten zu Ihnen passt.'
    },
    {
      number: 3,
      title: 'Kurs starten',
      description: 'Nach einer unverbindlichen Probelektion beginnt der Kurs – flexibel zuhause oder online.'
    }
  ]

  const testimonials = [
    {
      name: 'Frau Meier, Zürich',
      text: 'Dank Kurse-Zuhause habe ich endlich den Mut, Englisch im Beruf aktiv einzusetzen. Mein Lehrer hat mir Schritt für Schritt Sicherheit gegeben.',
      rating: 5
    },
    {
      name: 'Familie Weber, Bern',
      text: 'Meine Tochter hatte große Schwierigkeiten in Mathematik. Mit dem passenden Nachhilfelehrer hat sie nicht nur ihre Noten verbessert, sondern auch Spaß am Lernen gefunden.',
      rating: 5
    }
  ]

  const offers = [
    {
      icon: '📚',
      title: 'Individuelle Förderung',
      description: 'Massgeschneiderte Lernpläne für optimale Ergebnisse'
    },
    {
      icon: '🎓',
      title: 'Prüfungsvorbereitung',
      description: 'Gezielte Vorbereitung auf alle wichtigen Prüfungen'
    },
    {
      icon: '🌐',
      title: 'Vielfältige Kurse',
      description: 'Von Sprachen über Nachhilfe bis zu kreativen Fächern'
    }
  ]

  return (
    <>
      {/* Hero Section */}
      <LPHero
        title={
          <>
            <span className="inline-block">In wenigen Klicks zum</span>{' '}
            <span className="inline-block">
              <AnimatedText text="perfekten Kurs" />
            </span>
          </>
        }
        subtitle="Ob Sprachen, Nachhilfe, Musik oder andere Fähigkeiten – wir zeigen Ihnen sofort passende Kurse und Lehrer."
        buttonText="Jetzt Kurs finden"
        imageSrc="/images/erwachsener-finanzmathematik-lernen-homeoffice-tutor-analyse-mathe-helden.jpg"
        imageAlt="Individuelle Kurse mit geprüften Lehrpersonen"
      />

      {/* Benefits */}
      <LPBenefits benefits={benefits} />

      {/* Problem Section */}
      <LPSection
        title="Wenn Lernen zur Herausforderung wird"
        content=""
        bulletPoints={[
          'Schwierigkeiten beim Verstehen oder Anwenden',
          'Unsicherheit in Schule, Beruf oder Alltag',
          'Fehlende Motivation durch trockenen Unterricht',
          'Angst vor Fehlern und Versagen'
        ]}
        buttonText="Jetzt Kurs finden"
        imageSrc="/images/student-uni-kombinatorik-lernen-cafe-tutorin-diagramm-mathe-helden.jpg"
        imageAlt="Person mit Lernfrust und Schwierigkeiten"
        imagePosition="left"
        backgroundColor="gray"
      />

      {/* Solution Section - Custom Layout */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Title, Subtitle, Button */}
            <div className="space-y-6">
              <p className="text-[#047857] font-semibold uppercase tracking-wide text-sm">
                Lernen mit System und Freude
              </p>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
                Persönlicher Unterricht - Ihre Lösung
              </h2>
              <p className="text-lg text-gray-600">
                Wir verbinden Sie mit erfahrenen Kursleitern, die individuell auf Ihre Bedürfnisse eingehen – ob für Schule, Beruf oder Freizeit.
              </p>
              <button 
                onClick={() => router.push('/kurse-finden')}
                className="bg-[#047857] text-white px-8 py-4 rounded-lg hover:bg-[#065f46] transition-colors font-semibold shadow-lg cursor-pointer"
              >
                Jetzt Kurs finden
              </button>
            </div>

            {/* Right Column - Bullet Points with Graphic */}
            <div className="relative">
              {/* Background Graphic */}
              <div className="absolute inset-0 flex items-center justify-center opacity-10">
                <svg className="w-full h-full max-w-md" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="200" cy="200" r="180" stroke="#047857" strokeWidth="2" strokeDasharray="10 10" />
                  <circle cx="200" cy="200" r="140" stroke="#047857" strokeWidth="2" strokeDasharray="8 8" />
                  <circle cx="200" cy="200" r="100" stroke="#047857" strokeWidth="2" strokeDasharray="6 6" />
                  <path d="M200 80 L250 150 L230 230 L170 230 L150 150 Z" stroke="#047857" strokeWidth="2" fill="none" />
                  <circle cx="200" cy="80" r="10" fill="#047857" />
                  <circle cx="250" cy="150" r="10" fill="#047857" />
                  <circle cx="230" cy="230" r="10" fill="#047857" />
                  <circle cx="170" cy="230" r="10" fill="#047857" />
                  <circle cx="150" cy="150" r="10" fill="#047857" />
                </svg>
              </div>

              {/* Bullet Points Card */}
              <div className="relative bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl shadow-xl border border-blue-100">
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="text-2xl">⚡</span>
                    </div>
                    <div>
                      <p className="text-gray-600 mb-1">Individuell abgestimmt</p>
                      <h3 className="font-semibold text-gray-900">Unterricht nach Ihrem Niveau und Tempo</h3>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="text-2xl">✅</span>
                    </div>
                    <div>
                      <p className="text-gray-600 mb-1">Praktisch & anwendbar</p>
                      <h3 className="font-semibold text-gray-900">Direkt im Alltag und Beruf nutzbar</h3>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="text-2xl">🎯</span>
                    </div>
                    <div>
                      <p className="text-gray-600 mb-1">Nachhaltig</p>
                      <h3 className="font-semibold text-gray-900">Bleibende Erfolge statt kurzfristiger Tricks</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3 Steps */}
      <LPSteps
        title="In 3 Schritten zum passenden Kurs"
        steps={steps}
        ctaText="Jetzt Kurs finden"
      />

      {/* Testimonials */}
      <LPTestimonial
        title="Was unsere Kunden sagen"
        testimonials={testimonials}
      />

      {/* Offers */}
      <LPOffers
        title="Unsere Angebote"
        offers={offers}
      />

      {/* Final CTA Section */}
      <section className="py-20 lg:py-24 bg-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
              Verpassen Sie nicht die Chance auf echte Kompetenz
            </h2>
            
            <div className="space-y-6 text-lg text-gray-700 text-left">
              <p>
                Mit Kurse-Zuhause finden Sie in wenigen Klicks den passenden Kursleiter für Ihre Bedürfnisse. Über 1&apos;000 zufriedene Kunden haben bereits von unserem Angebot profitiert.
              </p>
              
              <p>
                Warten Sie nicht länger – je früher Sie starten, desto schneller können Sie Ihre Ziele erreichen.
              </p>
            </div>
            
            <button 
              onClick={() => router.push('/kurse-finden')}
              className="bg-[#047857] text-white px-8 py-4 rounded-lg hover:bg-[#065f46] transition-colors font-semibold text-lg shadow-lg cursor-pointer"
            >
              Jetzt Kurs finden
            </button>
          </div>
        </div>
      </section>
    </>
  )
}