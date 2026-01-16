import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowDown } from "lucide-react";
import { ShootingStars } from "@/components/ui/shadcn-io/shooting-stars";

export function HeroSection() {
  return (
    <section className="min-h-[calc(100vh-4rem)] flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="min-h-[calc(100vh-4rem)] w-full flex justify-center items-center bg-black relative overflow-hidden rounded-lg">
        {/* Background with stars */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.1)_0%,rgba(0,0,0,0)_70%)]" />
          <div className="shooting-stars-bg absolute inset-0" />
        </div>

        {/* Content */}
        <div className="z-10">
          <div className="text-center md:text-left">
            <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-6xl text-foreground ">
              Frontend Developer
            </h1>

            <p className="max-w-2xl mb-8 text-base leading-relaxed md:text-xl text-muted-foreground ">
              I build responsive, well-structured websites optimized for
              clarity, usability, and performance, delivering excellent Core Web
              Vitals, Lighthouse, and PageSpeed scores.
            </p>

            <div className="flex flex-wrap gap-2 mb-8 ">
              {[
                "Nextjs",
                "Reactjs",
                "TypeScript",
                "Tailwind CSS",
                "Shadcn",
                "PayloadCMS",
              ].map((tech) => (
                <Badge key={tech} variant="secondary" className="text-sm">
                  {tech}
                </Badge>
              ))}
            </div>

            <div className="flex flex-col gap-4 sm:flex-row ">
              <Button asChild size="lg" className="gap-2">
                <a href="#projects">View Projects</a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href="/tuongle-cv.pdf" download>
                  Download CV
                </a>
              </Button>
            </div>
          </div>
        </div>
        {/* <div className="relative z-10 flex flex-col items-center justify-center h-full text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Multi-Color Stars
          </h1>
          <p className="text-base md:text-lg text-gray-300 max-w-xl mx-auto px-4">
            Multiple layers of shooting stars with different colors and speeds
          </p>
        </div> */}
        {/* Multiple shooting star layers with different colors and speeds */}
        <ShootingStars
          starColor="#9E00FF"
          trailColor="#2EB9DF"
          minSpeed={15}
          maxSpeed={35}
          minDelay={1000}
          maxDelay={3000}
        />
        <ShootingStars
          starColor="#FF0099"
          trailColor="#FFB800"
          minSpeed={10}
          maxSpeed={25}
          minDelay={2000}
          maxDelay={4000}
        />
        <ShootingStars
          starColor="#00FF9E"
          trailColor="#00B8FF"
          minSpeed={20}
          maxSpeed={40}
          minDelay={1500}
          maxDelay={3500}
        />
      </div>

      {/* Background with stars */}
      {/* <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.15)_0%,rgba(0,0,0,0)_80%)]" />
        <div className="shooting-stars-stars-bg absolute inset-0" />
      </div>

      <div className="w-full max-w-4xl">
        <div className="text-center md:text-left">
          <h1 className="mb-6 text-5xl font-bold tracking-tight md:text-6xl text-foreground">
            Frontend Developer
          </h1>

          <p className="max-w-2xl mb-8 text-lg leading-relaxed md:text-xl text-muted-foreground">
            I build accessible, performant web applications with React and
            Next.js. Focused on component architecture, web performance
            optimization, and developer experience.
          </p>

          <div className="flex flex-wrap gap-2 mb-8">
            {[
              "Nextjs",
              "Reactjs",
              "TypeScript",
              "Tailwind CSS",
              "PayloadCMS",
            ].map((tech) => (
              <Badge key={tech} variant="secondary" className="text-sm">
                {tech}
              </Badge>
            ))}
          </div>

          <div className="flex flex-col gap-4 sm:flex-row">
            <Button asChild size="lg" className="gap-2">
              <a href="#projects">View Projects</a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href="/cv.pdf" download>
                Download CV
              </a>
            </Button>
          </div>
        </div>
      </div>

      <ShootingStars
        starColor="#9E00FF"
        trailColor="#2EB9DF"
        minSpeed={15}
        maxSpeed={35}
        minDelay={1000}
        maxDelay={3000}
      />
      <ShootingStars
        starColor="#FF0099"
        trailColor="#FFB800"
        minSpeed={10}
        maxSpeed={25}
        minDelay={2000}
        maxDelay={4000}
      />
      <ShootingStars
        starColor="#00FF9E"
        trailColor="#00B8FF"
        minSpeed={20}
        maxSpeed={40}
        minDelay={1500}
        maxDelay={3500}
      />
      <style
        dangerouslySetInnerHTML={{
          __html: `
        .shooting-stars-bg {
          background-image:
            radial-gradient(1px 1px at 20px 30px, #eee, rgba(0,0,0,0)),
            radial-gradient(1px 1px at 40px 70px, #fff, rgba(0,0,0,0)),
            radial-gradient(1px 1px at 50px 160px, #ddd, rgba(0,0,0,0)),
            radial-gradient(1px 1px at 90px 40px, #fff, rgba(0,0,0,0)),
            radial-gradient(1px 1px at 130px 80px, #fff, rgba(0,0,0,0)),
            radial-gradient(1px 1px at 160px 120px, #ddd, rgba(0,0,0,0));
          background-repeat: repeat;
          background-size: 200px 200px;
          animation: shooting-stars-twinkle 4s ease-in-out infinite;
          opacity: 0.3;
        }
        @keyframes shooting-stars-twinkle {
          0% { opacity: 0.3; }
          50% { opacity: 0.6; }
          100% { opacity: 0.3; }
        }
      `,
        }}
      /> */}
    </section>
  );
}
