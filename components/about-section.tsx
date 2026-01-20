export function AboutSection() {
  return (
    <section
      id="about"
      className="px-4 py-12 lg:py-24 sm:px-6 lg:px-8 bg-secondary"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="mb-12 text-4xl font-bold md:text-5xl text-foreground">
          About
        </h2>

        <div className="grid gap-12 md:grid-cols-5">
          <div className="md:col-span-3">
            <h3 className="mb-4 text-2xl font-bold text-foreground">Summary</h3>
            <p className="mb-4 leading-relaxed text-muted-foreground">
              Front-End Developer with 7 years of experience building and
              maintaining production-grade web applications. Owns projects
              end-to-end, from concept through production, with a focus on
              scalable UI architecture, performance, and long-term
              maintainability.
            </p>
            <p className="leading-relaxed text-muted-foreground">
              Enjoys learning new technologies and understanding how things work
              under the hood.
            </p>
          </div>

          <div className="md:md:col-span-2">
            <h3 className="mb-4 text-2xl font-bold text-foreground">
              Key Focus Areas
            </h3>
            <ul className="space-y-3">
              {[
                "Accessibility",
                "Performance Optimization",
                // "Search Engine Optimization",
                "Security Best Practices",
                "Developer Experience",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="font-bold text-accent">→</span>
                  <span className="text-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
