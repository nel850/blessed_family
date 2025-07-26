import { HeartHandshake, CheckCircle, ArrowLeft } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import Link from "next/link"

export default function EndOfLifeCarePage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-40 pb-16 bg-gradient-to-br from-accent/10 to-primary/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Link
              href="/services"
              className="inline-flex items-center text-secondary hover:text-primary transition-colors mb-6"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to All Services
            </Link>

            <Badge className="mb-6 bg-accent/10 text-accent border-accent/20">
              <HeartHandshake className="w-4 h-4 mr-2" />
              Compassionate End-of-Life Care
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent mb-6">
              End-of-Life Care
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Compassionate care focused on comfort, dignity, and peace during life's final journey.
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
                During the final stages of life, we provide compassionate end-of-life care focused on comfort, dignity,
                and peace. Working closely with hospice providers and family members, we manage pain and symptoms with
                sensitivity and grace. Our approach is holistic—offering emotional, physical, and spiritual support not
                just to our residents, but also to their loved ones. We strive to ensure that every resident's final
                journey is one of respect, comfort, and love.
              </p>

              <div className="bg-gradient-to-r from-accent/5 to-primary/5 rounded-3xl p-8 mb-12">
                <h2 className="text-3xl font-bold text-accent mb-6">Our End-of-Life Care Services:</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-highlight" />
                      <span className="text-gray-700">Comfort-focused care</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-highlight" />
                      <span className="text-gray-700">Pain and symptom management</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-highlight" />
                      <span className="text-gray-700">Hospice coordination</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-highlight" />
                      <span className="text-gray-700">Family support and guidance</span>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-highlight" />
                      <span className="text-gray-700">Emotional support</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-highlight" />
                      <span className="text-gray-700">Spiritual care coordination</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-highlight" />
                      <span className="text-gray-700">Dignity preservation</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-highlight" />
                      <span className="text-gray-700">Peaceful environment</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <h3 className="text-2xl font-bold text-accent mb-4">Compassionate Support When It Matters Most</h3>
                <p className="text-gray-600 mb-8">
                  We're here to provide comfort and support during this difficult time. Contact us to learn more about
                  our end-of-life care services.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button className="bg-gradient-to-r from-accent to-primary hover:from-primary hover:to-accent text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                    <Link href="/contact">Speak with Our Team</Link>
                  </Button>
                  <Button
                    variant="outline"
                    className="border-accent text-accent hover:bg-accent hover:text-white bg-transparent"
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
