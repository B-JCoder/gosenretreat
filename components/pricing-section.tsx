import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Check, Star } from "lucide-react"

export default function PricingSection() {
  const plans = [
    {
      name: "Starter",
      price: "$89",
      period: "per session",
      description: "Perfect for those beginning their mental wellness journey",
      features: [
        "50-minute individual sessions",
        "Secure video platform",
        "Session notes & resources",
        "Email support",
        "Flexible scheduling",
      ],
      buttonText: "Get Started",
      popular: false,
      bgColor: "bg-white",
      textColor: "text-gray-900",
      buttonColor: "bg-[#A8D5BA] hover:bg-[#96c7a8] text-white",
    },
    {
      name: "Standard",
      price: "$299",
      period: "per month",
      description: "Comprehensive care with regular sessions and additional support",
      features: [
        "4 sessions per month (50 min each)",
        "Priority scheduling",
        "Between-session messaging",
        "Personalized wellness plan",
        "Progress tracking tools",
        "Crisis support access",
        "Resource library access",
      ],
      buttonText: "Most Popular",
      popular: true,
      bgColor: "bg-gradient-to-br from-[#A8D5BA] to-[#F7C6D9]",
      textColor: "text-white",
      buttonColor: "bg-white text-[#A8D5BA] hover:bg-gray-100",
    },
    {
      name: "Premium",
      price: "$499",
      period: "per month",
      description: "Intensive support with unlimited access and specialized care",
      features: [
        "8 sessions per month (50 min each)",
        "Unlimited messaging support",
        "Same-day scheduling available",
        "Specialized therapy options",
        "Family session included",
        "24/7 crisis support",
        "Wellness coaching calls",
        "Custom treatment plans",
      ],
      buttonText: "Get Premium",
      popular: false,
      bgColor: "bg-white",
      textColor: "text-gray-900",
      buttonColor: "bg-[#FF6F91] hover:bg-[#e55a7a] text-white",
    },
  ]

  return (
    <section id="pricing" className="py-20 bg-gradient-to-br from-gray-900 to-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-balance">
            Choose Your <span className="text-[#A8D5BA]">Wellness Plan</span>
          </h2>
          <div className="w-20 h-1 bg-[#FF6F91] rounded-full mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto text-pretty leading-relaxed">
            Flexible pricing options designed to make mental healthcare accessible and affordable
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`relative border-0 shadow-xl ${plan.bgColor} ${
                plan.popular ? "scale-105 ring-4 ring-[#A8D5BA]/20" : ""
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-[#FF6F91] text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center">
                    <Star className="w-4 h-4 mr-1 fill-current" />
                    Most Popular
                  </div>
                </div>
              )}

              <CardContent className="p-8">
                {/* Plan Header */}
                <div className="text-center mb-8">
                  <h3 className={`text-2xl font-bold mb-2 ${plan.textColor}`}>{plan.name}</h3>
                  <div className={`mb-4 ${plan.textColor}`}>
                    <span className="text-4xl font-bold">{plan.price}</span>
                    <span className="text-lg opacity-80">/{plan.period.split(" ")[1]}</span>
                  </div>
                  <p className={`${plan.textColor} opacity-80 text-sm`}>{plan.description}</p>
                </div>

                {/* Features */}
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className={`flex items-start ${plan.textColor}`}>
                      <Check className="w-5 h-5 mr-3 mt-0.5 flex-shrink-0 text-current" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <Button className={`w-full py-3 text-lg font-semibold ${plan.buttonColor}`}>{plan.buttonText}</Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Info */}
        <div className="text-center mt-16">
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">All Plans Include</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-gray-300">
              <div className="flex items-center justify-center">
                <Check className="w-5 h-5 text-[#A8D5BA] mr-2" />
                <span>HIPAA Compliant Platform</span>
              </div>
              <div className="flex items-center justify-center">
                <Check className="w-5 h-5 text-[#A8D5BA] mr-2" />
                <span>Licensed Therapists</span>
              </div>
              <div className="flex items-center justify-center">
                <Check className="w-5 h-5 text-[#A8D5BA] mr-2" />
                <span>No Long-term Contracts</span>
              </div>
            </div>
            <p className="text-gray-300 mt-6">
              Not sure which plan is right for you?
              <Button variant="link" className="text-[#A8D5BA] p-0 ml-1 h-auto">
                Schedule a free consultation
              </Button>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
