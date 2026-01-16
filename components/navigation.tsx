"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { navItems } from "@/lib/data";

// const navItems = [
//   { name: "About", href: "#about" },
//   { name: "Experience", href: "#experience" },
//   { name: "Projects", href: "#projects" },
//   { name: "Skills", href: "#skills" },
//   { name: "Articles", href: "#articles" },
//   { name: "Contact", href: "#contact" },
// ]

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur-sm border-border">
      <div className="max-w-4xl px-4 mx-auto sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="shrink-0">
            <a
              href="#"
              className="text-2xl font-bold transition-colors text-foreground hover:text-accent"
            >
              Tuong Le
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="items-center hidden gap-1 md:flex">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="px-3 py-2 text-sm font-medium transition-colors rounded-md text-muted-foreground hover:text-foreground hover:bg-secondary"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Mobile Navigation */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon" aria-label="menu button">
                <Menu className="w-5 h-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="flex flex-col gap-4 mt-8">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="block px-4 py-3 text-lg font-medium transition-colors text-foreground hover:text-accent"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
