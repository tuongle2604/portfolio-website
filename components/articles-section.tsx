import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { articles } from "@/lib/data"

export function ArticlesSection() {
  return (
    <section id="articles" className="py-24 px-4 sm:px-6 lg:px-8 bg-secondary">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-12">Writing</h2>

        <div className="space-y-4">
          {articles.map((article, idx) => (
            <Card key={idx} className="hover:shadow-md transition-shadow">
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <CardTitle className="text-lg hover:text-accent transition-colors">
                      <a href={article.url} target="_blank" rel="noopener noreferrer">
                        {article.title}
                      </a>
                    </CardTitle>
                    <CardDescription>{article.description}</CardDescription>
                  </div>
                  <span className="text-sm text-muted-foreground whitespace-nowrap">{article.date}</span>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <Button asChild variant="ghost" className="gap-2 h-auto p-0">
                  <a href={article.url} target="_blank" rel="noopener noreferrer">
                    Read more <ArrowRight className="w-4 h-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
