const featureCards = [
  {
    title: "Custom Integrations",
    description: "Easily connect tools and systems you already use.",
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Customer Support",
    description: "Get help whenever you need it from our team.",
    image:
      "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Priority Access",
    description: "Unlock early features and faster turnaround for requests.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Task Prioritization",
    description: "Automatically sort and manage your workflows.",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Real-time Analytics",
    description: "Track performance metrics as they happen.",
    image:
      "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Secure Data",
    description: "Enterprise-grade security for your information.",
    image:
      "https://images.unsplash.com/photo-1510511459019-5dda7724fd87?auto=format&fit=crop&w=1200&q=80",
  },
];

export default function FeaturesHighlightSection() {
  return (
    <section id="features" className="bg-slate-50 px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-[74rem]">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl md:text-5xl lg:text-6xl">
            Everything you need to succeed
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm text-slate-600 sm:text-base md:text-lg">
            Powerful features designed to help your business grow and thrive
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featureCards.map((card) => {
            return (
              <article
                key={card.title}
                className="group overflow-hidden rounded-3xl border border-slate-200 bg-white transition-all duration-200 hover:border-blue-500 hover:shadow-[0_12px_30px_rgba(37,99,235,0.18)]"
              >
                <div
                  className="h-56 w-full bg-cover bg-center transition-transform duration-300 ease-out group-hover:scale-[1.02] group-hover:brightness-105"
                  style={{ backgroundImage: `url(${card.image})` }}
                  aria-hidden
                />
                <div className="p-8">
                  <h3 className='font-["ui-sans-serif,system-ui,sans-serif,\\"Apple_Color_Emoji\\",\\"Segoe_UI_Emoji\\",\\"Segoe_UI_Symbol\\",\\"Noto_Color_Emoji\\""] text-lg leading-7 font-bold text-slate-900 group-hover:text-blue-600 sm:text-xl'>
                    {card.title}
                  </h3>
                  <p className='mt-4 font-["ui-sans-serif,system-ui,sans-serif,\\"Apple_Color_Emoji\\",\\"Segoe_UI_Emoji\\",\\"Segoe_UI_Symbol\\",\\"Noto_Color_Emoji\\""] text-sm leading-relaxed font-normal text-[oklch(0.446_0.043_257.281)] sm:text-base sm:leading-[26px]'>
                    {card.description}
                  </p>

                  <a
                    href="#contact"
                    className="mt-6 inline-flex items-center gap-2 text-base font-semibold text-blue-600 opacity-0 transition-opacity duration-200 group-hover:opacity-100 sm:text-lg"
                  >
                    Learn more <span aria-hidden>›</span>
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
