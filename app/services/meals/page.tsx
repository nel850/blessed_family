import { Utensils, CheckCircle, ArrowLeft } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import Link from "next/link"

export default function MealsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-40 pb-16 bg-gradient-to-br from-highlight/10 to-accent/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Link
              href="/services"
              className="inline-flex items-center text-secondary hover:text-primary transition-colors mb-6"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to All Services
            </Link>

            <Badge className="mb-6 bg-highlight/10 text-primary border-highlight/20">
              <Utensils className="w-4 h-4 mr-2" />
              Nutritious Home-Cooked Meals
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-highlight to-accent bg-clip-text text-transparent mb-6">
              Nutritious Meals
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Home-cooked meals made with fresh ingredients, tailored to meet dietary needs and personal preferences.
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
                Healthy food is a cornerstone of quality care. We provide home-cooked meals made with fresh ingredients,
                tailored to meet each resident's dietary needs and personal preferences. Whether managing diabetes, high
                blood pressure, or other conditions, we offer delicious, nourishing meals—including special diets like
                low-sodium and heart-healthy options. Residents enjoy mealtimes that feel like home—nutritious,
                comforting, and shared in good company.
              </p>

              <div className="bg-gradient-to-r from-highlight/5 to-accent/5 rounded-3xl p-8 mb-12">
                <h2 className="text-3xl font-bold text-primary mb-6">Our Meal Services Include:</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-highlight" />
                      <span className="text-gray-700">Fresh, home-cooked meals</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-highlight" />
                      <span className="text-gray-700">Dietary restriction accommodations</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-highlight" />
                      <span className="text-gray-700">Diabetic-friendly options</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-highlight" />
                      <span className="text-gray-700">Low-sodium preparations</span>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-highlight" />
                      <span className="text-gray-700">Heart-healthy choices</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-highlight" />
                      <span className="text-gray-700">Personal preference consideration</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-highlight" />
                      <span className="text-gray-700">Social dining experience</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-highlight" />
                      <span className="text-gray-700">Nutritional monitoring</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <h3 className="text-2xl font-bold text-primary mb-4">Nourishing Meals, Shared with Care</h3>
                <p className="text-gray-600 mb-8">
                  Experience the comfort of home-cooked meals tailored to your loved one's needs and preferences.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button className="bg-gradient-to-r from-highlight to-accent hover:from-accent hover:to-highlight text-primary shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                    <Link href="/contact">Schedule a Meal Tasting</Link>
                  </Button>
                  <Button
                    variant="outline"
                    className="border-highlight text-primary hover:bg-highlight hover:text-white bg-transparent"
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
