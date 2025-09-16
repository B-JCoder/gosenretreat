import Image from "next/image"
import { GraduationCap, Users, Laptop, HeartPulse, Brain, Activity } from "lucide-react"

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-slate-900 to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* Left Side: Image + Highlights */}
          <div className="space-y-10">
            {/* Image */}
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/peaceful-therapy-session-with-therapist-and-patien.jpg"
                  alt="Remote therapy session"
                  width={600}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-[#F7C6D9] rounded-full opacity-60"></div>
            </div>

            {/* Highlights */}
          

 <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6">
              <div className="text-center p-5 bg-white/10 rounded-xl shadow border border-white/20 hover:bg-white/20 transition">
                <div className="w-12 h-12 bg-[#A8D5BA] rounded-full flex items-center justify-center mx-auto mb-3">
                  <GraduationCap className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold text-white">7+ Years Experience</h3>
                <p className="text-sm text-gray-300 mt-1">Medical & psychiatric expertise</p>
              </div>

              <div className="text-center p-5 bg-white/10 rounded-xl shadow border border-white/20 hover:bg-white/20 transition">
                <div className="w-12 h-12 bg-[#FF6F91] rounded-full flex items-center justify-center mx-auto mb-3">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold text-white">All Ages</h3>
                <p className="text-sm text-gray-300 mt-1">Children, adolescents & adults</p>
              </div>

              <div className="text-center p-5 bg-white/10 rounded-xl shadow border border-white/20 hover:bg-white/20 transition sm:col-span-2">
                <div className="w-12 h-12 bg-[#F7C6D9] rounded-full flex items-center justify-center mx-auto mb-3">
                  <Laptop className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold text-white">Telepsychiatry</h3>
                <p className="text-sm text-gray-300 mt-1">Secure & convenient online sessions</p>
              </div>
            </div>
          </div>

          {/* Right Side: Content */}
          <div className="space-y-6">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                About <span className="text-[#A8D5BA]">Gosen Retreat</span>
              </h2>
              <div className="w-20 h-1 bg-[#FF6F91] rounded-full"></div>
            </div>

            <p className="text-lg text-gray-300 leading-relaxed">
              At Gosen Retreat, we believe mental health care should be accessible, compassionate, and tailored to
              each individual's journey. Founded by Carine Robert, PMHNP-BC, with over 7 years of experience in
              medical and psychiatric care, Gosen Retreat is a trusted space where clients feel heard, supported, and
              empowered.
            </p>

            {/* Specialization */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <h3 className="text-xl font-semibold text-[#A8D5BA] mb-4">We specialize in treating:</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-gray-300">
                <div className="flex items-center">
                  <HeartPulse className="w-5 h-5 text-[#FF6F91] mr-3" /> Anxiety
                </div>
                <div className="flex items-center">
                  <Brain className="w-5 h-5 text-[#FF6F91] mr-3" /> Depression
                </div>
                <div className="flex items-center">
                  <Activity className="w-5 h-5 text-[#FF6F91] mr-3" /> ADHD
                </div>
                <div className="flex items-center">
                  <Brain className="w-5 h-5 text-[#FF6F91] mr-3" /> Bipolar Disorder
                </div>
                <div className="flex items-center">
                  <HeartPulse className="w-5 h-5 text-[#FF6F91] mr-3" /> Chronic Illness & Emotional Impact
                </div>
                <div className="flex items-center">
                  <Activity className="w-5 h-5 text-[#FF6F91] mr-3" /> Stress & Life Transitions
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}





















