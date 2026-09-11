import Image from "next/image";
import { Atmosphere } from "@/components/atmosphere";
import { ContactForm } from "@/components/contact-form";
import {
  about,
  certifications,
  experience,
  facts,
  profile,
  projects,
  skillGroups,
} from "@/data/portfolio";

function Eyebrow({ children }: { children: string }) {
  return <p className="eyebrow">{children}</p>;
}

export default function Home() {
  return (
    <main id="top" className="flex-1">
      <section className="stage stage-hero border-b border-line">
        <Atmosphere scan />
        <div className="relative mx-auto max-w-6xl px-5 pb-24 pt-20 sm:px-8 sm:pb-32 sm:pt-28">
          <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(260px,380px)] lg:gap-16">
            <div>
              <div className="mb-8 inline-flex items-center gap-2 border border-paper/20 bg-ink/40 px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.2em] text-paper backdrop-blur-sm">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-paper opacity-45" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-paper" />
                </span>
                {profile.availability}
              </div>

              <p className="font-mono text-[12px] uppercase tracking-[0.28em] text-mist">
                {profile.role}
              </p>
              <h1 className="display mt-5 max-w-4xl text-5xl leading-[1.05] tracking-tight text-paper sm:text-7xl">
                {profile.greeting}
              </h1>
              <p className="mt-7 max-w-2xl text-lg leading-8 text-mist">{profile.summary}</p>

              <div className="mt-10 flex flex-wrap gap-3">
                <a href="#about" className="btn btn-fill">
                  About me
                </a>
                <a href="#contact" className="btn btn-ghost">
                  Say hello
                </a>
              </div>
            </div>

            <figure className="portrait order-first mx-auto w-full  lg:order-last lg:mx-0 lg:max-w-none">
              <div className="portrait-frame">
                <Image
                  src={profile.photo}
                  alt={profile.photoAlt}
                  fill
                  priority
                />
              </div>
              <figcaption className="mt-3 font-mono text-[11px] uppercase tracking-[0.2em] text-mist">
                {profile.name}
              </figcaption>
            </figure>
          </div>

          <dl className="mt-16 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {facts.map((item) => (
              <div key={item.label} className="card px-5 py-6">
                <dt className="font-mono text-[10px] uppercase tracking-[0.2em] text-mist">{item.label}</dt>
                <dd className="display mt-2 text-3xl text-paper sm:text-4xl">{item.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section id="about" className="stage stage-cream border-b border-line">
        <Atmosphere />
        <div className="relative mx-auto grid max-w-6xl gap-12 px-5 py-24 sm:px-8 lg:grid-cols-[1fr_1.1fr]">
          <div>
            <Eyebrow>01 — About</Eyebrow>
            <h2 className="display mt-5 text-4xl leading-tight sm:text-5xl">{about.heading}</h2>
          </div>
          <div className="space-y-5 text-base leading-8 text-mist">
            {about.body.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            <ul className="mt-8 grid gap-3 border-t border-line pt-8">
              {about.focus.map((item) => (
                <li key={item} className="flex gap-3 font-mono text-[13px] text-paper">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-paper" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section id="skills" className="stage stage-wash border-b border-line">
        <Atmosphere />
        <div className="relative mx-auto max-w-6xl px-5 py-24 sm:px-8">
          <Eyebrow>02 — Skills</Eyebrow>
          <h2 className="display mt-5 max-w-xl text-4xl leading-tight sm:text-5xl">What I use</h2>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {skillGroups.map((group) => (
              <article key={group.title} className="card p-6">
                <h3 className="font-mono text-[12px] uppercase tracking-[0.2em] text-paper">
                  {group.title}
                </h3>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li key={item} className="chip">
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="experience" className="stage stage-cream border-b border-line">
        <Atmosphere />
        <div className="relative mx-auto max-w-6xl px-5 py-24 sm:px-8">
          <Eyebrow>03 — Experience</Eyebrow>
          <h2 className="display mt-5 max-w-2xl text-4xl leading-tight sm:text-5xl">My path</h2>
          <ol className="mt-14">
            {experience.map((job, index) => (
              <li
                key={`${job.company}-${job.role}`}
                className="grid gap-6 border-t border-line py-10 lg:grid-cols-[220px_1fr]"
              >
                <div>
                  <p className="display text-3xl text-paper/20">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <p className="mt-3 font-mono text-[12px] uppercase tracking-[0.16em] text-mist">
                    {job.period}
                  </p>
                  <p className="mt-1 text-sm text-mist">{job.location}</p>
                </div>
                <div>
                  <h3 className="display text-3xl text-paper">
                    {job.role}
                    <span className="italic text-mist"> · {job.company}</span>
                  </h3>
                  <ul className="mt-5 space-y-3 text-[15px] leading-7 text-mist">
                    {job.points.map((point) => (
                      <li key={point} className="pl-4 [border-left:1px_solid_var(--line)]">
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section id="work" className="stage stage-wash border-b border-line">
        <Atmosphere />
        <div className="relative mx-auto max-w-6xl px-5 py-24 sm:px-8">
          <Eyebrow>04 — Work</Eyebrow>
          <h2 className="display mt-5 max-w-2xl text-4xl leading-tight sm:text-5xl">Things I’ve built</h2>
          <div className="mt-12 grid gap-4 md:grid-cols-2">
            {projects.map((project) => (
              <article key={project.title} className="card flex flex-col p-7">
                <div className="flex items-baseline justify-between gap-4">
                  <h3 className="display text-2xl text-paper">{project.title}</h3>
                  <span className="font-mono text-[11px] text-mist">{project.year}</span>
                </div>
                <p className="mt-4 flex-1 text-[15px] leading-7 text-mist">{project.summary}</p>
                <ul className="mt-6 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <li key={tag} className="chip">
                      {tag}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* <section className="stage stage-cream border-b border-line">
        <Atmosphere />
        <div className="relative mx-auto max-w-6xl px-5 py-24 sm:px-8">
          <Eyebrow>05 — Certificates</Eyebrow>
          <h2 className="display mt-5 text-4xl leading-tight sm:text-5xl">Certifications</h2>
          <ul className="mt-10">
            {certifications.map((cert) => (
              <li
                key={cert.name}
                className="grid gap-2 border-t border-line py-6 transition-colors hover:bg-panel/50 sm:grid-cols-[1fr_auto] sm:items-baseline"
              >
                <div>
                  <p className="display text-2xl text-paper">{cert.name}</p>
                  <p className="mt-1 font-mono text-[12px] text-mist">{cert.issuer}</p>
                </div>
                <p className="font-mono text-[12px] text-paper">{cert.year}</p>
              </li>
            ))}
          </ul>
        </div>
      </section> */}

      <section id="contact" className="stage stage-wash border-b border-line">
        <Atmosphere />
        <div className="relative mx-auto grid max-w-6xl gap-12 px-5 py-24 sm:px-8 lg:grid-cols-2">
          <div>
            <Eyebrow>06 — Contact</Eyebrow>
            <h2 className="display mt-5 text-4xl leading-tight sm:text-5xl">Say hello</h2>
            <p className="mt-5 max-w-md text-base leading-8 text-mist">
              If you want to chat, ask a question, or just say hi — send a note.
            </p>
            <dl className="mt-10 space-y-4 font-mono text-[13px]">
              <div>
                <dt className="text-[11px] uppercase tracking-[0.2em] text-mist">Email</dt>
                <dd className="mt-1">
                  <a className="text-paper underline-offset-4 hover:underline" href={`mailto:${profile.email}`}>
                    {profile.email}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-[11px] uppercase tracking-[0.2em] text-mist">Location</dt>
                <dd className="mt-1 text-paper">{profile.location}</dd>
              </div>
              <div className="flex gap-5 pt-2">
                <a className="nav-link text-mist hover:text-paper" href={profile.linkedin}>
                  LinkedIn
                </a>
                <a className="nav-link text-mist hover:text-paper" href={profile.github}>
                  GitHub
                </a>
              </div>
            </dl>
          </div>
          <div className="card p-6 sm:p-8">
            <p className="mb-6 font-mono text-[11px] uppercase tracking-[0.2em] text-mist">Write to me</p>
            <ContactForm />
          </div>
        </div>
      </section>
    </main>
  );
}
