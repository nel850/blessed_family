import {
  Heart,
  Users,
  Stethoscope,
  Utensils,
  Activity,
  HeartHandshake,
  CheckCircle,
  Palette,
  Music,
  Gamepad2,
  Flower,
  Calendar,
} from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import Link from "next/link"

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-40 pb-16 bg-gradient-to-br from-primary via-secondary to-accent relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-20 text-white">
            <Badge className="mb-6 bg-white/20 text-white border-white/30 backdrop-blur-sm">
              <Stethoscope className="w-4 h-4 mr-2" />
              Comprehensive Care Services
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Tailored to Meet Every Need</h1>
            <p className="text-xl text-white/90 max-w-4xl mx-auto leading-relaxed">
              From daily personal care to specialized medical support, we provide a complete range of services designed
              to enhance quality of life and promote independence.
            </p>
          </div>
        </div>
      </section>

      {/* Core Services */}
      <section className="py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
            {/* Personal Care */}
            <Card className="bg-white border-primary/10 shadow-xl hover:shadow-2xl transition-all duration-300 group">
              <CardHeader className="text-center pb-4">
                <div className="bg-gradient-to-br from-highlight to-yellow-300 p-4 rounded-2xl w-fit mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Heart className="h-10 w-10 text-primary" />
                </div>
                <CardTitle className="text-2xl font-bold text-primary">Personal Care</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-highlight" />
                  <span>Bathing & grooming assistance</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-highlight" />
                  <span>Dressing & mobility support</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-highlight" />
                  <span>Toileting & incontinence care</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-highlight" />
                  <span>Transfer & positioning help</span>
                </div>
              </CardContent>
            </Card>

            {/* Memory Care */}
            <Card className="bg-white border-secondary/10 shadow-xl hover:shadow-2xl transition-all duration-300 group">
              <CardHeader className="text-center pb-4">
                <div className="bg-gradient-to-br from-accent to-secondary p-4 rounded-2xl w-fit mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Users className="h-10 w-10 text-white" />
                </div>
                <CardTitle className="text-2xl font-bold text-primary">Memory Care</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-highlight" />
                  <span>Alzheimer's & dementia care</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-highlight" />
                  <span>Cognitive stimulation activities</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-highlight" />
                  <span>Behavioral management</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-highlight" />
                  <span>Family education & support</span>
                </div>
              </CardContent>
            </Card>

            {/* Medical Support */}
            <Card className="bg-white border-accent/10 shadow-xl hover:shadow-2xl transition-all duration-300 group">
              <CardHeader className="text-center pb-4">
                <div className="bg-gradient-to-br from-secondary to-primary p-4 rounded-2xl w-fit mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Stethoscope className="h-10 w-10 text-white" />
                </div>
                <CardTitle className="text-2xl font-bold text-primary">Medical Support</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-highlight" />
                  <span>Medication management</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-highlight" />
                  <span>Healthcare coordination</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-highlight" />
                  <span>Appointment transportation</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-highlight" />
                  <span>Emergency response</span>
                </div>
              </CardContent>
            </Card>

            {/* Nutritious Meals */}
            <Card className="bg-white border-highlight/20 shadow-xl hover:shadow-2xl transition-all duration-300 group">
              <CardHeader className="text-center pb-4">
                <div className="bg-gradient-to-br from-highlight to-accent p-4 rounded-2xl w-fit mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Utensils className="h-10 w-10 text-primary" />
                </div>
                <CardTitle className="text-2xl font-bold text-primary">Nutritious Meals</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-highlight" />
                  <span>Home-cooked balanced meals</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-highlight" />
                  <span>Special dietary accommodations</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-highlight" />
                  <span>Diabetic & low-sodium options</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-highlight" />
                  <span>Snacks & hydration support</span>
                </div>
              </CardContent>
            </Card>

            {/* Activities & Engagement */}
            <Card className="bg-white border-primary/10 shadow-xl hover:shadow-2xl transition-all duration-300 group">
              <CardHeader className="text-center pb-4">
                <div className="bg-gradient-to-br from-primary to-highlight p-4 rounded-2xl w-fit mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Activity className="h-10 w-10 text-white" />
                </div>
                <CardTitle className="text-2xl font-bold text-primary">Daily Activities</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-highlight" />
                  <span>Arts & crafts sessions</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-highlight" />
                  <span>Music & movement therapy</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-highlight" />
                  <span>Garden & outdoor activities</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-highlight" />
                  <span>Social events & outings</span>
                </div>
              </CardContent>
            </Card>

            {/* End-of-Life Care */}
            <Card className="bg-white border-secondary/10 shadow-xl hover:shadow-2xl transition-all duration-300 group">
              <CardHeader className="text-center pb-4">
                <div className="bg-gradient-to-br from-accent to-primary p-4 rounded-2xl w-fit mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <HeartHandshake className="h-10 w-10 text-white" />
                </div>
                <CardTitle className="text-2xl font-bold text-primary">End-of-Life Care</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-highlight" />
                  <span>Comfort & dignity focus</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-highlight" />
                  <span>Pain management support</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-highlight" />
                  <span>Family guidance & support</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-highlight" />
                  <span>Spiritual care coordination</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Activities Section */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <Badge className="mb-6 bg-accent/10 text-accent border-accent/20">
              <Calendar className="w-4 h-4 mr-2" />
              Engaging Daily Activities
            </Badge>
            <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-6">
              Stay Active, Stay Engaged
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              We believe that staying active and engaged is crucial to a fulfilling life. Our diverse activity program
              promotes social interaction, mental stimulation, and physical well-being.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group border border-primary/10">
              <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl p-4 w-fit mb-4 group-hover:scale-110 transition-transform duration-300">
                <Palette className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-2">Arts & Crafts</h3>
              <p className="text-gray-600">Creative expression through painting, drawing, and hands-on projects</p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group border border-secondary/10">
              <div className="bg-gradient-to-br from-secondary/10 to-accent/10 rounded-xl p-4 w-fit mb-4 group-hover:scale-110 transition-transform duration-300">
                <Music className="h-8 w-8 text-secondary" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-2">Music Therapy</h3>
              <p className="text-gray-600">Therapeutic music sessions and sing-alongs to boost mood and memory</p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group border border-accent/10">
              <div className="bg-gradient-to-br from-accent/10 to-highlight/10 rounded-xl p-4 w-fit mb-4 group-hover:scale-110 transition-transform duration-300">
                <Gamepad2 className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-2">Games & Puzzles</h3>
              <p className="text-gray-600">Mental stimulation through board games, puzzles, and brain exercises</p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group border border-highlight/20">
              <div className="bg-gradient-to-br from-highlight/10 to-primary/10 rounded-xl p-4 w-fit mb-4 group-hover:scale-110 transition-transform duration-300">
                <Flower className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-2">Gardening</h3>
              <p className="text-gray-600">Outdoor gardening activities in our beautiful, secure garden space</p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-primary/5 via-secondary/5 to-accent/5 rounded-3xl p-12 text-center">
            <h3 className="text-3xl font-bold text-primary mb-4">Personalized Activity Programs</h3>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Our caregivers tailor activities to each resident's physical and cognitive abilities, ensuring everyone
              can enjoy a full and enriching lifestyle that promotes independence and joy.
            </p>
            <Button className="bg-gradient-to-r from-secondary to-accent hover:from-accent hover:to-secondary text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <Link href="/contact">Schedule a Tour to See Our Programs</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
