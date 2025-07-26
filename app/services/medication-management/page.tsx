import { Pill, CheckCircle, ArrowLeft } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import Link from "next/link"

export default function MedicationManagementPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-40 pb-16 bg-gradient-to-br from-primary/10 to-highlight/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Link
              href="/services"
              className="inline-flex items-center text-secondary hover:text-primary transition-colors mb-6"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to All Services
            </Link>

            <Badge className="mb-6 bg-primary/10 text-primary border-primary/20">
              <Pill className="w-4 h-4 mr-2" />
              Safe Medication Management
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-primary to-highlight bg-clip-text text-transparent mb-6">
              Medication Management
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Professional medication administration and monitoring to ensure safety and peace of mind.
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
                Our skilled caregivers ensure that residents receive their medications safely and on schedule, with
                careful attention to dosing, timing, and side effects. We maintain detailed medication records and work
                closely with doctors and pharmacists to ensure seamless coordination of care. By taking the stress out
                of medication routines, we provide peace of mind to residents and their families.
              </p>

              <div className="bg-gradient-to-r from-primary/5 to-highlight/5 rounded-3xl p-8 mb-12">
                <h2 className="text-3xl font-bold text-primary mb-6">Our Medication Management Services:</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-highlight" />
                      <span className="text-gray-700">Safe medication administration</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-highlight" />
                      <span className="text-gray-700">Precise timing and dosing</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-highlight" />
                      <span className="text-gray-700">Side effect monitoring</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-highlight" />
                      <span className="text-gray-700">Detailed record keeping</span>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-highlight" />
                      <span className="text-gray-700">Doctor coordination</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-highlight" />
                      <span className="text-gray-700">Pharmacy collaboration</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-highlight" />
                      <span className="text-gray-700">Family communication</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-highlight" />
                      <span className="text-gray-700">Emergency protocols</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <h3 className="text-2xl font-bold text-primary mb-4">Safe, Professional Medication Care</h3>
                <p className="text-gray-600 mb-8">
                  Trust our experienced team to manage your loved one's medications with precision and care.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button className="bg-gradient-to-r from-primary to-highlight hover:from-highlight hover:to-primary text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                    <Link href="/contact">Learn More</Link>
                  </Button>
                  <Button
                    variant="outline"
                    className="border-primary text-primary hover:bg-primary hover:text-white bg-transparent"
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
