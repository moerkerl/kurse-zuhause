'use client'

import { useRouter } from 'next/navigation'
import LPHero from '@/components/LPHero'
import LPBenefits from '@/components/LPBenefits'
import LPSection from '@/components/LPSection'
import LPSteps from '@/components/LPSteps'
import LPTestimonial from '@/components/LPTestimonial'
import LPOffers from '@/components/LPOffers'
import AnimatedText from '@/components/AnimatedText'

export default function EnglischkursZuhause() {
  const router = useRouter()

  const benefits = [
    {
      icon: '🇬🇧',
      title: 'Englischunterricht zuhause oder online',
      description: 'Flexibel bei Ihnen zuhause oder bequem online'
    },
    {
      icon: '🌍',
      title: 'Für Beruf und Freizeit',
      description: 'Business English oder Konversation für den Alltag'
    },
    {
      icon: '🏆',
      title: 'Native Speaker & zertifizierte Lehrer',
      description: 'Muttersprachler und Cambridge-zertifizierte Lehrkräfte'
    }
  ]

  const steps = [
    {
      number: 1,
      title: 'Auf „Jetzt Englischkurs finden" klicken',
      description: 'Beantworten Sie online ein paar kurze Fragen, um passende Englischlehrer zu identifizieren.'
    },
    {
      number: 2,
      title: 'Englischlehrer kennenlernen',
      description: 'Sie erhalten eine Auswahl geprüfter Englischlehrer und können denjenigen wählen, der am besten zu Ihnen passt.'
    },
    {
      number: 3,
      title: 'Englischkurs starten',
      description: 'Nach einer unverbindlichen Probelektion beginnt der Englischkurs – flexibel zuhause oder online.'
    }
  ]

  const testimonials = [
    {
      name: 'Thomas M., Zürich',
      text: 'Dank meinem Englischlehrer von Kurse-Zuhause konnte ich mich erfolgreich auf internationale Meetings vorbereiten. Mein Business English ist jetzt auf einem ganz neuen Level!',
      rating: 5
    },
    {
      name: 'Sarah L., Bern',
      text: 'Die Cambridge Advanced Prüfung war mein Ziel – mit der professionellen Unterstützung meines Englischlehrers habe ich sie mit Bravour bestanden!',
      rating: 5
    }
  ]

  const offers = [
    {
      icon: '💼',
      title: 'Business English',
      description: 'Professionelles Englisch für internationale Geschäfte'
    },
    {
      icon: '🎓',
      title: 'Prüfungsvorbereitung',
      description: 'Cambridge, TOEFL, IELTS und mehr'
    },
    {
      icon: '✈️',
      title: 'Conversation & Travel',
      description: 'Selbstsicheres Englisch für Reisen und Alltag'
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
              <AnimatedText text="perfekten Englischkurs" />
            </span>
          </>
        }
        subtitle="Master English with confidence – mit erfahrenen Englischlehrern, die Ihre Ziele verstehen."
        buttonText="Jetzt Englischkurs finden"
        imageSrc="/images/erwachsener-finanzmathematik-lernen-homeoffice-tutor-analyse-mathe-helden.jpg"
        imageAlt="Individueller Englischunterricht mit geprüften Lehrpersonen"
        onButtonClick={() => router.push('/kurse-finden')}
      />

      {/* Benefits */}
      <LPBenefits benefits={benefits} />

      {/* Problem Section */}
      <LPSection
        title="Wenn Englisch zur Barriere wird"
        content=""
        bulletPoints={[
          'Verpasste Karrierechancen durch mangelnde Englischkenntnisse',
          'Unsicherheit in internationalen Meetings',
          'Schwierigkeiten beim Verstehen von Filmen und Büchern',
          'Hemmungen beim Sprechen mit Native Speakers'
        ]}
        buttonText="Jetzt Englischkurs finden"
        imageSrc="/images/student-uni-kombinatorik-lernen-cafe-tutorin-diagramm-mathe-helden.jpg"
        imageAlt="Person mit Englischlernfrust und Schwierigkeiten"
        imagePosition="left"
        backgroundColor="gray"
        onButtonClick={() => router.push('/kurse-finden')}
      />

      {/* Solution Section - Custom Layout */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Title, Subtitle, Button */}
            <div className="space-y-6">
              <p className="text-[#047857] font-semibold uppercase tracking-wide text-sm">
                Learn English the Smart Way
              </p>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
                Persönlicher Englischunterricht - Ihre Lösung
              </h2>
              <p className="text-lg text-gray-600">
                Wir verbinden Sie mit erfahrenen Englischlehrern und Native Speakers, die individuell auf Ihre Ziele eingehen – ob für Karriere, Studium oder persönliche Entwicklung.
              </p>
              <button
                onClick={() => router.push('/kurse-finden')}
                className="bg-[#047857] text-white px-8 py-4 rounded-lg hover:bg-[#065f46] transition-colors font-semibold shadow-lg cursor-pointer"
              >
                Jetzt Englischkurs finden
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
                </svg>
              </div>

              {/* Bullet Points Card */}
              <div className="relative bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl shadow-xl border border-blue-100">
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="text-2xl">🎯</span>
                    </div>
                    <div>
                      <p className="text-gray-600 mb-1">Goal-oriented</p>
                      <h3 className="font-semibold text-gray-900">Fokussiert auf Ihre persönlichen Englischziele</h3>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="text-2xl">💬</span>
                    </div>
                    <div>
                      <p className="text-gray-600 mb-1">Interactive</p>
                      <h3 className="font-semibold text-gray-900">Viel Sprechen und praktische Übungen</h3>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="text-2xl">🚀</span>
                    </div>
                    <div>
                      <p className="text-gray-600 mb-1">Fast Progress</p>
                      <h3 className="font-semibold text-gray-900">Schnelle und nachhaltige Lernerfolge</h3>
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
        title="In 3 Schritten zum passenden Englischkurs"
        steps={steps}
        ctaText="Jetzt Englischkurs finden"
        onCTAClick={() => router.push('/kurse-finden')}
      />

      {/* Testimonials */}
      <LPTestimonial
        title="Was unsere Englischlernenden sagen"
        testimonials={testimonials}
      />

      {/* Offers */}
      <LPOffers
        title="Unser Englischkurs-Angebot"
        offers={offers}
      />

      {/* Final CTA Section */}
      <section className="py-20 lg:py-24 bg-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
              Open Doors with English
            </h2>

            <div className="space-y-6 text-lg text-gray-700 text-left">
              <p>
                Mit Kurse-Zuhause finden Sie in wenigen Klicks den perfekten Englischlehrer. Über 1'000 zufriedene Schüler haben bereits ihre Englischziele erreicht – vom Business English bis zur Cambridge-Prüfung.
              </p>

              <p>
                In unserer globalisierten Welt ist Englisch der Schlüssel zu unzähligen Möglichkeiten. Starten Sie noch heute und erschliessen Sie sich neue Horizonte!
              </p>
            </div>

            <button
              onClick={() => router.push('/kurse-finden')}
              className="bg-[#047857] text-white px-8 py-4 rounded-lg hover:bg-[#065f46] transition-colors font-semibold text-lg shadow-lg cursor-pointer"
            >
              Jetzt Englischkurs finden
            </button>
          </div>
        </div>
      </section>
    </>
  )
}