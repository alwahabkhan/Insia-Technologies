const stats = [
  { value: "10x", label: "Faster Decision Making" },
  { value: "99.9%", label: "Uptime Reliability" },
  { value: "1,000+", label: "Active Teams" },
];

export default function StatsBannerSection() {
  return (
    <section
      className="relative overflow-hidden"
      aria-label="Performance statistics"
    >
      <div className="w-full overflow-hidden">
        <div
          className="relative bg-cover bg-center"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1600&q=80)",
          }}
        >
          <div className="absolute inset-0 bg-[#0b1b47]/85" aria-hidden />
          <div className="relative grid gap-8 px-8 py-14 text-center md:grid-cols-3 md:py-16">
            {stats.map((stat) => (
              <div key={stat.label} className="group">
                <p className='font-["ui-sans-serif,system-ui,sans-serif,\\"Apple_Color_Emoji\\",\\"Segoe_UI_Emoji\\",\\"Segoe_UI_Symbol\\",\\"Noto_Color_Emoji\\""] text-[72px] leading-[72px] font-bold tracking-tight text-white transition-transform duration-200 ease-out group-hover:-translate-y-0.5 group-hover:scale-[1.02]'>
                  {stat.value}
                </p>
                <p className='mt-2 font-["ui-sans-serif,system-ui,sans-serif,\\"Apple_Color_Emoji\\",\\"Segoe_UI_Emoji\\",\\"Segoe_UI_Symbol\\",\\"Noto_Color_Emoji\\""] text-base leading-6 font-normal text-[#ffffff]'>
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
