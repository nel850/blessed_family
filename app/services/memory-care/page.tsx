import { Users, CheckCircle, ArrowLeft } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import Link from "next/link"

export default function MemoryCarePage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-40 pb-16 bg-gradient-to-br from-secondary/10 to-accent/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Link
              href="/services"
              className="inline-flex items-center text-secondary hover:text-primary transition-colors mb-6"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to All Services
            </Link>

            <Badge className="mb-6 bg-secondary/10 text-secondary border-secondary/20">
              <Users className="w-4 h-4 mr-2" />
              Specialized Memory Care
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent mb-6">
              Dementia & Memory Care
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Specialized care designed for residents with Alzheimer's and other forms of dementia in a secure,
              structured environment.
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-700 leading-relaxed mb-8">
                Our memory care program is thoughtfully designed to meet the unique needs of residents with Alzheimer's
                and other forms of dementia. We provide a secure, calm, and structured environment where each individual
                can thrive. Our caregivers are specially trained in dementia care techniques, including redirection,
                routine reinforcement, and gentle communication. We focus on preserving dignity and creating moments of
                joy, while supporting cognitive function through meaningful engagement.
              </p>

              <div className="bg-gradient-to-r from-secondary/5 to-accent/5 rounded-3xl p-8 mb-12">
                <h2 className="text-3xl font-bold text-secondary mb-6">Our Memory Care Approach:</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-highlight" />
                      <span className="text-gray-700">Secure, structured environment</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-highlight" />
                      <span className="text-gray-700">Specialized dementia care training</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-highlight" />
                      <span className="text-gray-700">Gentle redirection techniques</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-highlight" />
                      <span className="text-gray-700">Routine reinforcement</span>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-highlight" />
                      <span className="text-gray-700">Dignity preservation focus</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-highlight" />
                      <span className="text-gray-700">Meaningful engagement activities</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-highlight" />
                      <span className="text-gray-700">Cognitive function support</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-highlight" />
                      <span className="text-gray-700">Family education and support</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <h3 className="text-2xl font-bold text-secondary mb-4">Specialized Care for Your Loved One</h3>
                <p className="text-gray-600 mb-8">
                  Learn more about our memory care program and how we can provide the specialized support your family
                  needs.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button className="bg-gradient-to-r from-secondary to-accent hover:from-accent hover:to-secondary text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                    <Link href="/contact">Schedule a Consultation</Link>
                  </Button>
                  <Button
                    variant="outline"
                    className="border-secondary text-secondary hover:bg-secondary hover:text-white bg-transparent"
                  >
                    <Link href="/services">View All Services</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
