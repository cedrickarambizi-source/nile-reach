import { Link } from "@tanstack/react-router";
import { type Project, screenshotUrl, faviconUrl } from "@/lib/projects";
import { Cta, ExternalLinkIcon } from "./Cta";

export function ProjectCard({ project }: { project: Project }) {
  const shot = screenshotUrl(project.domain);
  const favicon = faviconUrl(project.domain);

  return (
    <article
      className="group relative flex flex-col bg-white rounded-[20px] border border-black/5 overflow-hidden shadow-[0_4px_24px_rgba(0,0,0,0.06)] hover:shadow-[0_18px_50px_rgba(15,15,45,0.14)] hover:-translate-y-1.5 transition-all duration-500"
      style={{ transitionTimingFunction: "cubic-bezier(0.16,1,0.3,1)" }}
    >
      {/* Preview */}
      <div className="relative aspect-[16/10] overflow-hidden bg-gradient-to-br from-indigo-50 via-white to-violet-50">
        {shot ? (
          <img
            src={shot}
            alt={`${project.name} website preview`}
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-[900ms] group-hover:scale-[1.04]"
            style={{ transitionTimingFunction: "cubic-bezier(0.16,1,0.3,1)" }}
          />
        ) : (
          <div className="absolute inset-0 grid place-items-center">
            <div className="text-center">
              <div className="text-4xl font-semibold tracking-tight bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">
                {project.name.split(" ")[0]}
              </div>
              <p className="mt-2 text-[11px] uppercase tracking-[0.22em] text-[#5C6864]">Case study</p>
            </div>
          </div>
        )}
        <div className="absolute top-3 left-3 inline-flex items-center gap-2 rounded-full bg-white/90 backdrop-blur px-2.5 py-1 text-[11px] font-medium text-[#10201C] border border-black/5">
          {favicon && (
            <img src={favicon} alt="" className="size-3.5 rounded-sm" />
          )}
          {project.badge}
        </div>
      </div>

      {/* Body */}
      <div className="flex flex-col flex-1 p-6">
        <p className="text-[11px] uppercase tracking-[0.22em] text-[#175E52] mb-2">{project.industry}</p>
        <h3 className="text-[19px] font-semibold text-[#10201C] leading-snug">{project.name}</h3>
        <p className="mt-3 text-[14px] text-[#5C6864] leading-relaxed line-clamp-3">{project.description}</p>

        <ul className="mt-5 flex flex-wrap gap-1.5">
          {project.services.slice(0, 4).map((s) => (
            <li
              key={s}
              className="text-[11px] rounded-full border border-black/8 bg-[#F2F0E9] text-[#3F4B47] px-2.5 py-1"
            >
              {s}
            </li>
          ))}
          {project.services.length > 4 && (
            <li className="text-[11px] text-[#5C6864] px-1 py-1">+{project.services.length - 4}</li>
          )}
        </ul>

        <div className="mt-6 pt-5 border-t border-black/5 flex items-center gap-4 text-sm">
          <Link
            to="/work"
            hash={project.slug}
            className="inline-flex items-center gap-1.5 font-medium text-[#10201C] hover:text-[#175E52] transition-colors"
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
