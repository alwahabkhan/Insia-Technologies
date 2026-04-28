const workSteps = [
  {
    step: "01",
    title: "Discover",
    description: "We understand your requirements and business goals.",
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80",
  },
  {
    step: "02",
    title: "Design",
    description: "Create intuitive UI/UX for your product.",
    image:
      "https://images.unsplash.com/photo-1507209696998-3c532be9b2b5?auto=format&fit=crop&w=1200&q=80",
  },
  {
    step: "03",
    title: "Develop",
    description: "Build scalable solutions with modern technology.",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80",
  },
  {
    step: "04",
    title: "Deliver",
    description: "Launch your product and provide ongoing support.",
    image:
      "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=1200&q=80",
  },
];

export default function HowWeWorkSection() {
  return (
    <section id="process" className="bg-slate-50 px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-[74rem]">
        <div className="text-center">
          <h2 className="text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">
            How We Work
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-slate-600">
            A clear, collaborative process from idea to launch.
          </p>
        </div>

        <div className="mt-10 h-[74vh] min-h-[380px] w-full overflow-hidden rounded-3xl border border-slate-200 bg-white">
          <div
            className="h-full w-full bg-cover bg-center"
            style={{
              backgroundImage:
                "url(https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1600&q=80)",
            }}
            aria-hidden
          />
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {workSteps.map((step) => (
            <article
              key={step.step}
              className="group overflow-hidden rounded-2xl border border-slate-200 bg-white transition-all duration-200 hover:border-blue-500 hover:shadow-[0_10px_25px_rgba(37,99,235,0.2)]"
            >
              <div
                className="relative h-48 w-full bg-cover bg-center transition-transform duration-300 ease-out group-hover:scale-[1.02] group-hover:brightness-105"
                style={{ backgroundImage: `url(${step.image})` }}
                aria-hidden
              >
                <div className="absolute inset-0 bg-slate-900/35 transition-colors duration-300 group-hover:bg-slate-900/30" />
                <span className="absolute left-3 top-3 inline-flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-sm font-bold text-white">
                  {step.step}
                </span>
              </div>

              <div className="p-5">
                <h3 className='font-["ui-sans-serif,system-ui,sans-serif,\\"Apple_Color_Emoji\\",\\"Segoe_UI_Emoji\\",\\"Segoe_UI_Symbol\\",\\"Noto_Color_Emoji\\""] text-[20px] leading-7 font-bold text-slate-900 group-hover:text-blue-600'>
                  {step.title}
                </h3>
                <p className='mt-3 font-["ui-sans-serif,system-ui,sans-serif,\\"Apple_Color_Emoji\\",\\"Segoe_UI_Emoji\\",\\"Segoe_UI_Symbol\\",\\"Noto_Color_Emoji\\""] text-sm leading-[23px] font-normal text-[oklch(0.446_0.043_257.281)]'>
                  {step.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
