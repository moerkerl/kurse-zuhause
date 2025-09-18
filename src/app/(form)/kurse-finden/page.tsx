import MultiStepForm from '@/components/MultiStepForm'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Kurs finden | Kurse Zuhause',
  description: 'Finden Sie in wenigen Schritten den passenden Kursleiter für Ihre Bedürfnisse.',
}

export default function KurseFindenPage() {
  return (
    <div>
      <MultiStepForm />
    </div>
  )
}