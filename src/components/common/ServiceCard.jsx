import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'

export default function ServiceCard({ icon: Icon, title, description }) {
  return (
    <Card className="bg-black/50 border-gray-800 hover:border-gold transition-all duration-300 hover:shadow-lg hover:shadow-gold/20">
      <CardHeader className="text-center">
        <div className="flex justify-center mb-4">
          <div className="p-4 rounded-full bg-gold/10 text-gold">
            <Icon size={32} />
          </div>
        </div>
        <CardTitle className="text-gold mb-2">{title}</CardTitle>
        <CardDescription className="text-gray-light">
          {description}
        </CardDescription>
      </CardHeader>
    </Card>
  )
}
