import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Brain, Heart, Users, Shield, Lightbulb, Smile, MessageCircle, Activity } from "lucide-react"

export default function ServicesSection() {
  const services = [
    {
      icon: MessageCircle,
      title: "Virtual Counseling",
      description: "One-on-one therapy sessions with licensed professionals from the comfort of your home.",
      features: ["Individual therapy", "Cognitive behavioral therapy", "Secure video sessions", "Flexible scheduling"],
    },
    {
      icon: Lightbulb,
      title: "Mindfulness Coaching",
      description: "Learn practical mindfulness techniques to manage stress, anxiety, and improve overall well-being.",
      features: ["Meditation guidance", "Stress reduction techniques", "Breathing exercises", "Daily practice support"],
    },
    {
      icon: Shield,
      title: "Trauma Recovery Support",
      description: "Specialized care for those healing from traumatic experiences with evidence-based approaches.",
      features: ["EMDR therapy", "Trauma-informed care", "Safe processing techniques", "Gradual healing approach"],
    },
    {
      icon: Users,
      title: "Family & Group Sessions",
      description: "Strengthen relationships and build support networks through guided group and family therapy.",
      features: ["Family counseling", "Couples therapy", "Support groups", "Communication skills"],
    },
  ]

  // Added mental health benefits section with relevant icons
  const mentalHealthBenefits = [
    {
      icon: Brain,
      title: "Cognitive Enhancement",
      description: "Improve focus, memory, and decision-making abilities",
    },
    {
      icon: Heart,
      title: "Emotional Wellness",
      description: "Build resilience and emotional intelligence",
    },
    {
      icon: Activity,
      title: "Stress Management",
      description: "Learn effective coping strategies for daily challenges",
    },
    {
      icon: Smile,
      title: "Life Satisfaction",
      description: "Increase overall happiness and life fulfillment",
    },
  ]

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-balance">
            Our <span className="text-[#A8D5BA]">Mental Wellness</span> Services
          </h2>
          <div className="w-20 h-1 bg-[#FF6F91] rounded-full mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto text-pretty leading-relaxed">
            Comprehensive mental health support tailored to your unique needs and goals
          </p>
        </div>

        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">Benefits of Mental Health Care</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {mentalHealthBenefits.map((benefit, index) => {
              const IconComponent = benefit.icon
              return (
                <div
                  key={index}
                  className="text-center p-6 rounded-xl bg-gradient-to-br from-[#A8D5BA]/10 to-[#F7C6D9]/10 hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-[#A8D5BA] to-[#F7C6D9] rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">{benefit.title}</h4>
                  <p className="text-sm text-gray-600">{benefit.description}</p>
                </div>
              )
            })}
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon
            return (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                <CardContent className="p-8">
                  {/* Icon */}
                  <div className="w-16 h-16 bg-gradient-to-br from-[#A8D5BA] to-[#F7C6D9] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>

                  {/* Features */}
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-600">
                        <div className="w-2 h-2 bg-[#A8D5BA] rounded-full mr-3"></div>
                        {feature}
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
            )
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-[#A8D5BA] to-[#F7C6D9] rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 text-balance">
              Ready to Start Your Healing Journey?
            </h3>
            <p className="text-white/90 mb-6 text-lg max-w-2xl mx-auto text-pretty">
              Take the first step towards better mental health with a free consultation
            </p>
            <Button size="lg" className="bg-white text-[#A8D5BA] hover:bg-gray-100 px-8 py-4 text-lg font-semibold">
              Schedule Free Consultation
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
