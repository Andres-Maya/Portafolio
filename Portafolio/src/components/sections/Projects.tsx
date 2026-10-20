'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'
import { githubReposUrl, projects, type Project } from '@/lib/data'
import { Carousel } from '../Carousel'
import { Icon } from '../Icon'
import { useLanguage } from '../LanguageProvider'
import { Chip, SectionHeading } from '../ui'

// Alterna las capturas extra de un proyecto; la imagen principal queda debajo como base.
function useSlideshow(length: number) {
  const [current, setCurrent] = useState(-1)
  useEffect(() => {
    if (!length || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const timer = window.setInterval(() => setCurrent((index) => (index + 1 < length ? index + 1 : -1)), 4000)
    return () => window.clearInterval(timer)
  }, [length])
  return current
}

function ProjectPreview({ project, alt, label }: { project: Project; alt: string; label: string }) {
  const slides = project.slides ?? []
  const current = useSlideshow(slides.length)
  if (!project.image) return null

  return (
    <a
      className="group/preview relative z-[1] -mt-1 mb-[22px] block overflow-hidden rounded-xl border border-line bg-[#101521]"
      href={project.demo}
      target="_blank"
      rel="noopener"
      aria-label={label}
    >
      <Image
        src={project.image}
        alt={alt}
        className="mx-auto block max-h-[260px] w-full object-contain transition-transform duration-400 group-hover/preview:scale-[1.03]"
        sizes="(max-width: 760px) 92vw, 700px"
      />
      {slides.map((slide, index) => (
        <Image
          key={index}
          src={slide}
          alt=""
          className={`absolute inset-0 size-full bg-[#101521] object-contain transition-[opacity,transform] duration-[600ms,400ms] group-hover/preview:scale-[1.03] ${current === index ? 'opacity-100' : 'opacity-0'}`}
          sizes="(max-width: 760px) 92vw, 700px"
        />
      ))}
      <span className="absolute top-3 right-3 grid size-[34px] place-items-center rounded-full border border-white/22 bg-white/14 text-white backdrop-blur-[6px] transition-[background-color,transform] duration-300 group-hover/preview:scale-[1.08] group-hover/preview:bg-accent" aria-hidden="true">
        <Icon name="external" className="size-[15px]" />
      </span>
    </a>
  )
}

export function Projects() {
  const { t } = useLanguage()

  return (
    <section id="proyectos" className="bg-cream py-[85px] md:py-[125px]">
      <div className="wrap relative z-[6]">
        <SectionHeading eyebrow={t.projects.eyebrow} title={t.projects.title} intro={t.projects.intro} />
        <Carousel name="projects" width="760px">
          {projects.map((project, index) => {
            const item = t.projects.items[index]
            return (
              <article
                key={project.number}
                className="group relative flex min-h-[340px] flex-col overflow-hidden rounded-2xl border border-line bg-paper/88 px-5 py-[23px] shadow-[0_22px_60px_color-mix(in_srgb,var(--ink)_8%,transparent)] transition duration-300 before:absolute before:-top-[100px] before:-right-[90px] before:size-[200px] before:rounded-full before:bg-accent-soft before:transition-transform before:duration-400 hover:border-[color-mix(in_srgb,var(--accent)_38%,var(--line))] hover:-translate-y-[5px] hover:before:scale-[1.2] xs:px-7 xs:py-[26px] md:min-h-[315px] dark:bg-[rgba(17,17,17,.9)] dark:before:bg-accent/12"
              >
                <div className="relative z-[1] mb-6 flex items-center justify-between">
                  <span className="font-head text-[13px] font-extrabold text-accent">{project.number}</span>
                  <span className="text-[9px] font-extrabold uppercase tracking-[.12em] text-muted">{item.label}</span>
                </div>
                <ProjectPreview project={project} alt={item.imageAlt} label={t.projects.links[project.demoLabel ?? 'demo']} />
                <h3 className="relative z-[1] mb-[15px] font-head text-[clamp(23px,2.6vw,31px)] font-bold tracking-[-.045em]">{item.title}</h3>
                <p className="relative z-[1] max-w-[680px] text-sm leading-[1.55] text-muted">{item.description}</p>
                <div className="relative z-[1] mt-3 flex flex-wrap gap-2">
                  {item.tags.map((tag) => <Chip key={tag}>{tag}</Chip>)}
                </div>
                <div className="relative z-[1] mt-auto flex flex-wrap gap-[18px] pt-[18px]">
                  {project.links.map(([label, url]) => (
                    <a key={url} className="inline-flex items-center gap-[7px] text-xs font-extrabold text-accent" href={url} target="_blank" rel="noopener">
                      <span>{t.projects.links[label]}</span>
                      <Icon name="external" className="size-[13px]" />
                    </a>
                  ))}
                </div>
              </article>
            )
          })}
        </Carousel>
        <a className="reveal mx-auto mt-[38px] flex w-fit items-center gap-3 border-b border-ink pb-[5px] text-xs font-extrabold" href={githubReposUrl} target="_blank" rel="noopener">
          <span>{t.projects.all}</span>
          <Icon name="arrow" />
        </a>
      </div>
    </section>
  )
}
