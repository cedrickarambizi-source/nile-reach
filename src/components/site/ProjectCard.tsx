import { Link } from "@tanstack/react-router";
import { type Project } from "@/lib/projects";
import { Cta, ExternalLinkIcon } from "./Cta";
import { SiteShot, SiteFavicon } from "./RemoteImage";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article
      className="group relative flex flex-col bg-white rounded-none border border-black/5 overflow-hidden shadow-[0_4px_24px_rgba(0,0,0,0.06)] hover:shadow-[0_18px_50px_rgba(15,15,45,0.14)] hover:-translate-y-1.5 transition-all duration-500"
      style={{ transitionTimingFunction: "cubic-bezier(0.16,1,0.3,1)" }}
    >
      {/* Preview */}
      <div className="relative">
        <SiteShot
          domain={project.domain}
          name={project.name}
          className="aspect-[16/10]"
          imgClassName="transition-transform duration-[900ms] group-hover:scale-[1.04]"
        />
        <div className="absolute top-3 left-3 inline-flex items-center gap-2 rounded-full bg-white/90 backdrop-blur px-2.5 py-1 text-[11px] font-medium text-[#1A1A1A] border border-black/5">
          <SiteFavicon domain={project.domain} className="size-3.5 rounded-sm" />
          {project.badge}
        </div>
      </div>


      {/* Body */}
      <div className="flex flex-col flex-1 p-6">
        <p className="text-[11px] uppercase tracking-[0.22em] text-[#A6192E] mb-2">{project.industry}</p>
        <h3 className="text-[19px] font-semibold text-[#1A1A1A] leading-snug">{project.name}</h3>
        <p className="mt-3 text-[14px] text-[#5A5A5A] leading-relaxed line-clamp-3">{project.description}</p>

        <ul className="mt-5 flex flex-wrap gap-1.5">
          {project.services.slice(0, 4).map((s) => (
            <li
              key={s}
              className="text-[11px] rounded-full border border-black/8 bg-[#F2F2F2] text-[#3F4B47] px-2.5 py-1"
            >
              {s}
            </li>
          ))}
          {project.services.length > 4 && (
            <li className="text-[11px] text-[#5A5A5A] px-1 py-1">+{project.services.length - 4}</li>
          )}
        </ul>

        <div className="mt-6 pt-5 border-t border-black/5 flex items-center gap-4 text-sm">
          <Link
            to="/work"
            hash={project.slug}
            className="inline-flex items-center gap-1.5 font-medium text-[#1A1A1A] hover:text-[#A6192E] transition-colors"
          >
            View project <span aria-hidden>→</span>
          </Link>
          {project.website && (
            <Cta href={project.website} variant="solid-dark" size="sm" className="ml-auto">
              Live site
              <ExternalLinkIcon />
            </Cta>
          )}
        </div>
      </div>
    </article>
  );
}
