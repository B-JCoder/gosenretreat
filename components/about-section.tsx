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
                alt="Peaceful therapy session"
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
                Compassionate Care for Your <span className="text-[#A8D5BA]">Mental Wellness</span>
              </h2>
              <div className="w-20 h-1 bg-[#FF6F91] rounded-full"></div>
            </div>

            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p className="text-lg">
                At Gosen Retreat, we believe that mental wellness is not a destination, but a journey of self-discovery
                and healing. Founded with a mission to provide accessible, compassionate care, we specialize in creating
                safe spaces where individuals can explore their thoughts, emotions, and experiences.
              </p>

              <p className="text-lg">
                Our approach combines evidence-based therapeutic practices with personalized care plans, ensuring that
                each client receives the support they need to thrive. We understand that seeking help takes courage, and
                we honor that bravery with respect, privacy, and unwavering support.
              </p>

              <p className="text-lg">
                Whether you're navigating life transitions, managing anxiety, processing trauma, or simply seeking
                greater self-awareness, our team is here to guide you toward a healthier, more balanced life.
              </p>
            </div>

            {/* Key values */}
            <div className="grid grid-cols-2 gap-6 pt-6">
              <div className="text-center p-4 bg-white/10 backdrop-blur-sm rounded-xl shadow-sm border border-white/20">
                <div className="w-12 h-12 bg-[#A8D5BA] rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-white font-bold text-lg">C</span>
                </div>
                <h3 className="font-semibold text-white">Compassion</h3>
                <p className="text-sm text-gray-300 mt-1">Empathetic understanding in every interaction</p>
              </div>

              <div className="text-center p-4 bg-white/10 backdrop-blur-sm rounded-xl shadow-sm border border-white/20">
                <div className="w-12 h-12 bg-[#F7C6D9] rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-white font-bold text-lg">P</span>
                </div>
                <h3 className="font-semibold text-white">Privacy</h3>
                <p className="text-sm text-gray-300 mt-1">Complete confidentiality and secure sessions</p>
              </div>

              <div className="text-center p-4 bg-white/10 backdrop-blur-sm rounded-xl shadow-sm border border-white/20">
                <div className="w-12 h-12 bg-[#A8D5BA] rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-white font-bold text-lg">E</span>
                </div>
                <h3 className="font-semibold text-white">Expertise</h3>
                <p className="text-sm text-gray-300 mt-1">Licensed professionals with specialized training</p>
              </div>

              <div className="text-center p-4 bg-white/10 backdrop-blur-sm rounded-xl shadow-sm border border-white/20">
                <div className="w-12 h-12 bg-[#F7C6D9] rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-white font-bold text-lg">A</span>
                </div>
                <h3 className="font-semibold text-white">Accessibility</h3>
                <p className="text-sm text-gray-300 mt-1">Convenient online sessions that fit your schedule</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
