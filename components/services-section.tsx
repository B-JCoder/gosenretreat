import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function ServicesSection() {
  const services = [
    {
      icon: "🧠",
      title: "Therapy & Counseling",
      description: "Comprehensive therapeutic approaches tailored to your individual needs and goals.",
      features: [
        "Supportive Therapy (emotional validation, resilience building)",
        "Cognitive Behavioral Therapy (CBT) (reframing thoughts & behaviors)",
        "Mindfulness-Based Therapy (meditation, grounding, stress relief)",
      ],
    },
    {
      icon: "💊",
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
      icon: "💻",
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
    {
      icon: "🏆",
      title: "Board-Certified PMHNP",
      description: "Over 27 years of experience in psychiatry & medical care",
    },
    {
      icon: "🌍",
      title: "Multilingual Care",
      description: "Services in English, French, and Haitian Creole",
    },
    {
      icon: "❤️",
      title: "Compassionate Care",
      description: "Culturally responsive, evidence-based treatment",
    },
    {
      icon: "📅",
      title: "Flexible Scheduling",
      description: "Convenient telehealth options that fit your life",
    },
  ]

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-balance">
            Our <span className="text-[#A8D5BA]">Services</span>
          </h2>
          <div className="w-20 h-1 bg-[#FF6F91] rounded-full mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto text-pretty leading-relaxed">
            Comprehensive mental health support combining therapy and medication management
          </p>
        </div>

        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">Why Choose Gosen Retreat</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChooseUs.map((benefit, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-xl bg-gradient-to-br from-[#A8D5BA]/10 to-[#F7C6D9]/10 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-[#A8D5BA] to-[#F7C6D9] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">{benefit.icon}</span>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">{benefit.title}</h4>
                <p className="text-sm text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <CardContent className="p-8">
                {/* Icon */}
                <div className="w-16 h-16 bg-gradient-to-br from-[#A8D5BA] to-[#F7C6D9] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl">{service.icon}</span>
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start text-gray-600">
                      <div className="w-2 h-2 bg-[#A8D5BA] rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <Button
                  variant="outline"
                  className="w-full border-green-600 text-green-700 hover:bg-green-600 hover:text-white transition-colors duration-300 bg-transparent"
                >
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-[#A8D5BA] to-[#F7C6D9] rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 text-balance">
              What to Expect in Your First Session
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6 text-white/90">
              <div className="flex items-center justify-center">
                <span className="mr-2">🤝</span>
                <span>A safe and open space to share your concerns</span>
              </div>
              <div className="flex items-center justify-center">
                <span className="mr-2">📋</span>
                <span>A full review of your history and goals</span>
              </div>
              <div className="flex items-center justify-center">
                <span className="mr-2">💬</span>
                <span>Discussion of therapy and/or medication options</span>
              </div>
              <div className="flex items-center justify-center">
                <span className="mr-2">📝</span>
                <span>A personalized treatment plan designed just for you</span>
              </div>
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
