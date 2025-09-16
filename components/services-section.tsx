import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Heart, Globe, Calendar, Award, Brain, Pill, Laptop } from "lucide-react"

export default function ServicesSection() {
  const services = [
    {
      icon: <Brain className="w-6 h-6 text-white" />,
      title: "Therapy & Counseling",
      description: "Comprehensive therapeutic approaches tailored to your individual needs and goals.",
      features: [
        "Supportive Therapy (emotional validation, resilience building)",
        "Cognitive Behavioral Therapy (CBT) (reframing thoughts & behaviors)",
        "Mindfulness-Based Therapy (meditation, grounding, stress relief)",
      ],
    },
    {
      icon: <Pill className="w-6 h-6 text-white" />,
      title: "Medication Management",
      description:
        "Safe, evidence-based prescribing and ongoing monitoring to ensure the best results for your mental health.",
      features: [
        "Comprehensive medication evaluation",
        "Ongoing monitoring and adjustments",
        "Evidence-based prescribing practices",
        "Collaborative treatment approach",
      ],
    },
    {
      icon: <Laptop className="w-6 h-6 text-white" />,
      title: "Telepsychiatry",
      description: "Secure and flexible online sessions—making care more accessible for busy lifestyles.",
      features: [
        "HIPAA-compliant video sessions",
        "Flexible scheduling options",
        "Accessible from anywhere",
        "Same quality as in-person care",
      ],
    },
  ]

  const whyChooseUs = [
    { icon: <Award className="w-6 h-6 text-white" />, title: "Board-Certified PMHNP", description: "27+ years of psychiatry & medical care" },
    { icon: <Globe className="w-6 h-6 text-white" />, title: "Multilingual Care", description: "English, French & Haitian Creole" },
    { icon: <Heart className="w-6 h-6 text-white" />, title: "Compassionate Care", description: "Culturally responsive treatment" },
    { icon: <Calendar className="w-6 h-6 text-white" />, title: "Flexible Scheduling", description: "Telehealth options that fit your life" },
  ]

  return (
    <section
      id="services"
      className="relative py-20 bg-cover bg-center"
      style={{ backgroundImage: "url('https://i.pinimg.com/1200x/1b/27/6d/1b276d52035821c5f6cd032f0bf707f5.jpg')" }}
    >
      <div className="absolute inset-0 bg-black/40"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our <span className="text-[#A8D5BA]">Services</span>
          </h2>
          <div className="w-20 h-1 bg-[#FF6F91] rounded-full mx-auto mb-6"></div>
          <p className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Comprehensive mental health support combining therapy and medication management
          </p>
        </div>

      

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all border-0 shadow-lg bg-white/90 backdrop-blur">
              <CardContent className="p-8">
                {/* Icon */}
                <div className="w-14 h-14 bg-gradient-to-br from-[#A8D5BA] to-[#F7C6D9] rounded-xl flex items-center justify-center mb-6">
                  {service.icon}
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-700 mb-6 leading-relaxed">{service.description}</p>

                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-start text-gray-700">
                      <div className="w-2 h-2 bg-[#A8D5BA] rounded-full mr-3 mt-2"></div>
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  variant="outline"
                  className="w-full border-green-600 text-green-700 hover:bg-green-600 hover:text-white transition"
                >
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
  {/* Why Choose Us */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8">Why Choose Gosen Retreat</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChooseUs.map((benefit, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-xl bg-gradient-to-br from-[#A8D5BA]/30 to-[#F7C6D9]/30 hover:shadow-lg transition-all"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-[#A8D5BA] to-[#F7C6D9] rounded-full flex items-center justify-center mx-auto mb-4">
                  {benefit.icon}
                </div>
                <h4 className="font-semibold mb-2">{benefit.title}</h4>
                <p className="text-sm text-white/90">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
        {/* CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-[#A8D5BA] to-[#F7C6D9] rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              What to Expect in Your First Session
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6 text-white/90">
              <div className="flex items-center justify-center">🤝 Safe & open space</div>
              <div className="flex items-center justify-center">📋 Review of history & goals</div>
              <div className="flex items-center justify-center">💬 Therapy/medication options</div>
              <div className="flex items-center justify-center">📝 Personalized plan</div>
            </div>
            <Button size="lg" className="bg-white text-[#A8D5BA] hover:bg-gray-100 px-8 py-4 text-lg font-semibold">
              Schedule Your Appointment Now
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
