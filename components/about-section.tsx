import Image from "next/image"

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-slate-900 to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
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
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-[#F7C6D9] rounded-full opacity-60"></div>
          </div>

          {/* Content */}
          <div className="space-y-6">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-balance">
                About <span className="text-[#A8D5BA]">Gosen Retreat</span>
              </h2>
              <div className="w-20 h-1 bg-[#FF6F91] rounded-full"></div>
            </div>

            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p className="text-lg">
                At Gosen Retreat, we believe mental health care should be accessible, compassionate, and tailored to
                each individual's journey. Founded by Carine Robert, PMHNP-BC, with over 27 years of experience in
                medical and psychiatric care, Gosen Retreat is a trusted space where clients feel heard, supported, and
                empowered.
              </p>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <h3 className="text-xl font-semibold text-[#A8D5BA] mb-3">We specialize in treating:</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-gray-300">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-[#FF6F91] rounded-full mr-3"></div>
                    Anxiety
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-[#FF6F91] rounded-full mr-3"></div>
                    Depression
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-[#FF6F91] rounded-full mr-3"></div>
                    ADHD
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-[#FF6F91] rounded-full mr-3"></div>
                    Bipolar Disorder
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-[#FF6F91] rounded-full mr-3"></div>
                    Chronic Illness & Emotional Impact
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-[#FF6F91] rounded-full mr-3"></div>
                    Stress & Life Transitions
                  </div>
                </div>
              </div>

              <p className="text-lg">
                Our approach blends therapy + medication management with evidence-based methods such as Cognitive
                Behavioral Therapy (CBT), mindfulness practices, and supportive care.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6 pt-6">
              <div className="text-center p-4 bg-white/10 backdrop-blur-sm rounded-xl shadow-sm border border-white/20">
                <div className="w-12 h-12 bg-[#A8D5BA] rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-white text-xl">🎓</span>
                </div>
                <h3 className="font-semibold text-white">27+ Years Experience</h3>
                <p className="text-sm text-gray-300 mt-1">Medical & psychiatric care expertise</p>
              </div>

              <div className="text-center p-4 bg-white/10 backdrop-blur-sm rounded-xl shadow-sm border border-white/20">
                <div className="w-12 h-12 bg-[#F7C6D9] rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-white text-xl">🌍</span>
                </div>
                <h3 className="font-semibold text-white">Multilingual</h3>
                <p className="text-sm text-gray-300 mt-1">English, French, Haitian Creole</p>
              </div>

              <div className="text-center p-4 bg-white/10 backdrop-blur-sm rounded-xl shadow-sm border border-white/20">
                <div className="w-12 h-12 bg-[#A8D5BA] rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-white text-xl">👥</span>
                </div>
                <h3 className="font-semibold text-white">All Ages</h3>
                <p className="text-sm text-gray-300 mt-1">Children, adolescents, and adults</p>
              </div>

              <div className="text-center p-4 bg-white/10 backdrop-blur-sm rounded-xl shadow-sm border border-white/20">
                <div className="w-12 h-12 bg-[#F7C6D9] rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-white text-xl">💻</span>
                </div>
                <h3 className="font-semibold text-white">Telepsychiatry</h3>
                <p className="text-sm text-gray-300 mt-1">Secure online sessions</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
