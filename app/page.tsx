export default function PortfolioSite() {
const projects = [
  {
    title: "Fantasy Lute Sequence",
    description:
      "Cinematic medieval fantasy sequence focused on emotional atmosphere and subtle character storytelling.",
    tag: "Fantasy / Cinematic",
    video: "/videos/Dark fantasy.mp4",
  },
{
  title: "Syringe Dream",
  description:
    "Surreal psychological cinematic sequence exploring tension, symbolism, and unsettling atmosphere.",
  tag: "Surreal / Psychological",
  video: "/videos/srynge.mp4",
},
{
  title: "Neon Drive",
  description:
    "Atmospheric futuristic driving sequence with cinematic motion and dystopian lighting.",
  tag: "Cyberpunk / Motion",
  video: "/videos/car.mp4",
},
{
  title: "Ritual Visions",
  description:
    "Dark fantasy cinematic sequence with atmospheric lighting and surreal emotional imagery.",
  tag: "Fantasy / Dark Atmosphere",
  video: "/videos/ritavesk.mp4",
},
{
  title: "Resident Nightmare",
  description:
    "Dark horror-inspired cinematic environment with atmospheric tension and immersive mood.",
  tag: "Horror / Sci-Fi",
  video: "/videos/realrpd.mp4",
},
{
  title: "Emotional Breakdown",
  description:
    "Dark emotional cinematic sequence focused on tension and dramatic atmosphere.",
  tag: "Drama / Cinematic",
  video: "/videos/anger.mp4",
},

  {
    title: "Neon Dystopia",
    description:
      "Cyberpunk cinematic environment featuring atmospheric rain and futuristic worldbuilding.",
    tag: "Sci-Fi / Cyberpunk",
    video: "/videos/futuristic.mp4",
  },

  {
    title: "Dream Ocean",
    description:
      "Surreal dreamlike visual sequence exploring emotional symbolism and cinematic pacing.",
    tag: "Surreal / Art Film",
    video: "/videos/Surreal dreamlike.mp4",
  },
];

  return (
    <div className="min-h-screen bg-black text-white font-sans">
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-900 via-black to-black opacity-80" />

        <div className="relative max-w-6xl mx-auto px-6 py-28">
          <div className="max-w-3xl space-y-8">
            <p className="uppercase tracking-[0.35em] text-sm text-zinc-400">
              AI Filmmaker / Generative Visual Artist
            </p>

            <h1 className="text-6xl md:text-8xl font-semibold leading-none tracking-tight">
              Cinematic
              <br />
              AI Worlds
            </h1>

            <p className="text-zinc-400 text-lg md:text-xl leading-relaxed max-w-2xl">
              Atmospheric AI-driven storytelling focused on cinematic visuals,
              emotional environments, sci‑fi worlds, and fantasy aesthetics.
            </p>

<div className="flex flex-wrap gap-4 pt-4">

  <a
    href="#reel"
    className="px-6 py-3 rounded-2xl bg-white text-black font-medium hover:scale-105 transition-transform inline-block"
  >
    Watch Reel
  </a>

  <a
    href="#projects"
    className="px-6 py-3 rounded-2xl border border-white/20 hover:bg-white/5 transition-colors inline-block"
  >
    View Projects
  </a>

  <a
    href="mailto:alexei.pertsev2@gmail.com"
    className="px-6 py-3 rounded-2xl border border-white/20 hover:bg-white/5 transition-colors inline-block"
  >
    Contact
  </a>


            </div>
          </div>
        </div>
      </section>

      {/* REEL */}
<section id="reel" className="max-w-6xl mx-auto px-6 py-24">
        <div className="mb-10">
          <p className="text-sm uppercase tracking-[0.3em] text-zinc-500 mb-4">
            Showreel
          </p>

          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight">
            Selected Cinematic Work
          </h2>
        </div>

<div className="aspect-video rounded-[2rem] border border-white/10 overflow-hidden">
  <video
    autoPlay
    muted
    loop
    playsInline
    controls
    className="w-full h-full object-cover"
  >
    <source src="/videos/reel.mp4" type="video/mp4" />
  </video>
</div>
      </section>
      <section className="max-w-6xl mx-auto px-6 pb-24">

  <div className="mb-10">
    <p className="text-sm uppercase tracking-[0.3em] text-zinc-500 mb-4">
      Showreel
    </p>

    <h2 className="text-4xl md:text-5xl font-semibold tracking-tight">
      The Floor Above
    </h2>
  </div>

  <div className="aspect-video rounded-[2rem] border border-white/10 overflow-hidden">
    <video
      autoPlay
      muted
      loop
      playsInline
      controls
      className="w-full h-full object-cover"
    >
      <source src="/videos/horror.mp4" type="video/mp4" />
    </video>
  </div>

</section>

      {/* PROJECTS */}
<section id="projects" className="max-w-6xl mx-auto px-6 pb-24">
        <div className="mb-12">
          <p className="text-sm uppercase tracking-[0.3em] text-zinc-500 mb-4">
            Projects
          </p>

          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight">
            Atmospheric Visual Stories
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group rounded-[2rem] border border-white/10 bg-zinc-950 overflow-hidden hover:border-white/20 transition-all"
            >
<div className="aspect-video overflow-hidden">
  <video
    autoPlay
    muted
    loop
    playsInline
    className="w-full h-full object-cover"
  >
   <source src={project.video} type="video/mp4" />
  </video>
  
</div>  

              <div className="p-6 space-y-4">
                <div className="flex items-center justify-between gap-4">
                  <h3 className="text-2xl font-medium tracking-tight">
                    {project.title}
                  </h3>
                </div>

                <p className="text-zinc-400 leading-relaxed text-sm">
                  {project.description}
                </p>

                <div>
                  <span className="inline-block px-3 py-1 rounded-full border border-white/10 text-xs text-zinc-400">
                    {project.tag}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section className="border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-16">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-zinc-500 mb-4">
              About
            </p>

            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-8">
              AI-driven cinematic storytelling
            </h2>
          </div>

          <div className="space-y-6 text-zinc-400 leading-relaxed text-lg">
            <p>
              I create atmospheric cinematic visuals using generative AI video
              workflows, combining storytelling, visual direction, prompting,
              editing, and worldbuilding.
            </p>

            <p>
              Focused on dark fantasy, sci‑fi environments, emotional realism,
              and cinematic pacing.
            </p>
          </div>
        </div>
      </section>

<section className="max-w-6xl mx-auto px-6 pb-24">

  <div className="mb-10">
    <p className="text-sm uppercase tracking-[0.3em] text-zinc-500 mb-4">
      Production
    </p>

    <h2 className="text-4xl md:text-5xl font-semibold tracking-tight">
      Synthetic Elegance
    </h2>
  </div>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

    <div className="aspect-video rounded-[2rem] border border-white/10 overflow-hidden">
      <video
        autoPlay
        muted
        loop
        playsInline
        controls
        className="w-full h-full object-cover"
      >
        <source src="/videos/editorial1.mp4" type="video/mp4" />
      </video>
    </div>

        <div className="aspect-video rounded-[2rem] border border-white/10 overflow-hidden">
      <video
        autoPlay
        muted
        loop
        playsInline
        controls
        className="w-full h-full object-cover"
      >
        <source src="/videos/editorial2.mp4" type="video/mp4" />
      </video>
    </div>

        <div className="aspect-video rounded-[2rem] border border-white/10 overflow-hidden">
      <video
        autoPlay
        muted
        loop
        playsInline
        controls
        className="w-full h-full object-cover"
      >
        <source src="/videos/editorial3.mp4" type="video/mp4" />
      </video>
    </div>

    <div className="aspect-video rounded-[2rem] border border-white/10 overflow-hidden">
      <video
        autoPlay
        muted
        loop
        playsInline
        controls
        className="w-full h-full object-cover"
      >
        <source src="/videos/editorial4.mp4" type="video/mp4" />
      </video>
    </div>

  </div>

</section>

      {/* FOOTER */}
      <footer className="border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <p className="font-medium">Alexey Pertsev</p>
            <p className="text-zinc-500 text-sm mt-1">
              AI Filmmaker / Generative Visual Artist
            </p>
          </div>

          <div className="flex gap-6 text-sm text-zinc-500">
            <a href="#" className="hover:text-white transition-colors">
              Vimeo
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Behance
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Instagram
            </a>
            <a href="#" className="hover:text-white transition-colors">
              LinkedIn
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
