export default function MiraggioApplication() {
  const openPaper = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="bg-white text-black min-h-screen font-sans">
      {/* HERO SECTION */}
      <section className="h-screen flex flex-col items-center justify-center relative px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <p className="uppercase tracking-[0.3em] text-sm mb-4 text-gray-500">
            MIRAGGIO Application
          </p>

          <h1 className="text-5xl md:text-7xl font-light leading-tight mb-6">
            Every Bag <br /> Carries A Story.
          </h1>

          <p className="text-gray-600 text-lg mb-10">
            Here’s mine.
          </p>

          {/* BAG IMAGE */}
          <div className="flex justify-center mb-10">
            <img
              src="https://images.unsplash.com/photo-1594223274512-ad4803739b7c?q=80&w=1200&auto=format&fit=crop"
              alt="Miraggio Style Bag"
              className="w-[320px] h-[420px] object-cover rounded-3xl shadow-2xl"
            />
          </div>

          <button
            onClick={() => openPaper('note')}
            className="px-8 py-4 rounded-full border border-black hover:bg-black hover:text-white transition-all duration-300 text-lg"
          >
            Open Bag
          </button>
        </div>
      </section>

      {/* NOTE SECTION */}
      <section
        id="note"
        className="min-h-screen flex items-center justify-center px-6 py-20 bg-gray-50"
      >
        <div className="bg-white max-w-4xl w-full p-10 md:p-16 rounded-[2rem] shadow-xl border border-gray-100 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-2 bg-black"></div>

          <p className="uppercase tracking-[0.3em] text-sm text-gray-400 mb-8">
            Why MIRAGGIO?
          </p>

          <h2 className="text-3xl md:text-5xl font-light leading-tight mb-10">
            I’m drawn to brands that are still building.
          </h2>

          <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
            <p>
              MIRAGGIO feels ambitious, modern, fast-moving, and customer obsessed — exactly the kind of environment where I do my best work.
            </p>

            <p>
              Across my experience in operations, growth, customer engagement, business development, and international education, I’ve consistently taken ownership beyond my role and focused on improving systems, experiences, and outcomes.
            </p>

            <p>
              What excites me most is the opportunity to contribute to a brand that’s growing rapidly while creating meaningful customer experiences.
            </p>
          </div>

          <button
            onClick={() => openPaper('resume')}
            className="mt-12 px-8 py-4 rounded-full bg-black text-white hover:opacity-90 transition-all duration-300"
          >
            See What I Bring
          </button>
        </div>
      </section>

      {/* RESUME SECTION */}
      <section
        id="resume"
        className="min-h-screen px-6 py-24 flex items-center justify-center"
      >
        <div className="max-w-6xl w-full">
          <div className="text-center mb-16">
            <p className="uppercase tracking-[0.3em] text-sm text-gray-400 mb-6">
              What I Bring
            </p>

            <h2 className="text-4xl md:text-6xl font-light">
              Growth. Ownership. Execution.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: 'Business Development',
                text: 'Experience across conversions, partnerships, and stakeholder management at IDP Education and Masters’ Union.',
              },
              {
                title: 'Operations',
                text: 'Managed cross-functional coordination, process improvement, and operational execution in fast-paced environments.',
              },
              {
                title: 'Customer Experience',
                text: 'Worked directly with students and customers to improve engagement, retention, and satisfaction outcomes.',
              },
              {
                title: 'Leadership',
                text: 'Led teams, mentored colleagues, and drove ownership-focused execution across projects and campaigns.',
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-[2rem] p-8 shadow-sm hover:shadow-xl transition-all duration-300"
              >
                <h3 className="text-2xl font-medium mb-4">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>

          {/* EXPERIENCE TIMELINE */}
          <div className="mt-20 bg-gray-50 rounded-[2rem] p-10 md:p-16">
            <h3 className="text-3xl font-light mb-10">Selected Experience</h3>

            <div className="space-y-10">
              <div>
                <h4 className="text-xl font-medium">Masters’ Union — Program Manager</h4>
                <p className="text-gray-600 mt-2">
                  Led a 7-member team, improved conversion efficiency, and shortened enquiry-to-enrolment cycle from 20 to 15 days.
                </p>
              </div>

              <div>
                <h4 className="text-xl font-medium">IDP Education — Education Consultant</h4>
                <p className="text-gray-600 mt-2">
                  Counseled students for overseas education pathways while managing conversions, financing, and university partnerships.
                </p>
              </div>

              <div>
                <h4 className="text-xl font-medium">Decathlon — Business Operations Associate</h4>
                <p className="text-gray-600 mt-2">
                  Improved customer satisfaction, optimized operations, and contributed to revenue recovery initiatives.
                </p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-20 pb-20">
            <h3 className="text-4xl font-light mb-6">
              I’d love to bring this energy to MIRAGGIO.
            </h3>

            <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
              <a
                href="#"
                className="px-8 py-4 rounded-full bg-black text-white hover:opacity-90 transition-all duration-300"
              >
                Download Resume
              </a>

              <a
                href="https://www.linkedin.com"
                target="_blank"
                className="px-8 py-4 rounded-full border border-black hover:bg-black hover:text-white transition-all duration-300"
              >
                LinkedIn
              </a>

              <a
                href="mailto:shreyawarwick@gmail.com"
                className="px-8 py-4 rounded-full border border-black hover:bg-black hover:text-white transition-all duration-300"
              >
                Contact Me
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
