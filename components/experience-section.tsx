import { Badge } from "@/components/ui/badge";
import { experiences } from "@/lib/data";

export function ExperienceSection() {
  return (
    <section id="experience" className="py-12 lg:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-12">
          Experience
        </h2>

        <div className="space-y-8">
          {experiences.map((exp, idx) => (
            <div key={idx} className="relative">
              <div className="flex gap-4 md:gap-6">
                {/* Timeline */}
                <div className="hidden md:flex flex-col items-center">
                  <div className="w-4 h-4 bg-accent rounded-full ring-4 ring-background" />
                  {idx !== experiences.length - 1 && (
                    <div className="w-0.5 h-24 bg-border mt-4" />
                  )}
                </div>

                {/* Content */}
                <div className="flex-1 pb-8">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-3">
                    <div>
                      <h3 className="text-2xl font-bold text-foreground">
                        {exp.role}
                      </h3>
                      <p className="text-accent font-semibold">{exp.company}</p>
                    </div>
                    <span className="text-sm text-muted-foreground whitespace-nowrap">
                      {exp.period}
                    </span>
                  </div>

                  {/* <p className="text-muted-foreground mb-4">{exp.description}</p> */}

                  <ul className="space-y-2 mb-4">
                    {exp.bullets.map((bullet, bulletIdx) => (
                      <li
                        key={bulletIdx}
                        className="text-muted-foreground flex gap-3"
                      >
                        <span className="text-accent">•</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {exp.tech.map((tech) => (
                      <Badge key={tech} variant="outline" className="text-sm">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
