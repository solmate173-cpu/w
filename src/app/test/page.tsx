import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Test',
}

export default function TestPage() {
  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold">Test Page</h1>
    </div>
  )
}
