"use client";
import { Mail, Github, Linkedin } from "lucide-react";
import { type FormEvent, useState } from "react";
import { contacts } from "@/lib/data";

export function ContactSection() {
  const icons = [Mail, Github, Linkedin];
  const mappedContacts = contacts.map((contact, index) => ({
    ...contact,
    ContactIcon: icons[index],
  }));

  return (
    <section id="contact" className="px-4 py-12 lg:py-24 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="mb-12 text-4xl font-bold md:text-5xl text-foreground">
          Get in Touch
        </h2>

        {/* Contact Info */}
        <div className="space-y-8">
          <p className="max-w-3xl text-lg text-muted-foreground">
            I'm always interested in hearing about new opportunities and
            collaborations. Feel free to reach out through any of these
            channels.
          </p>

          <div className="flex flex-col gap-6">
            {mappedContacts.map(({ title, link, content, ContactIcon }) => (
              <a
                key={title}
                href={link}
                target="_blank"
                className="flex items-center gap-3 transition-colors text-muted-foreground hover:text-foreground group"
              >
                <ContactIcon className="w-6 h-6 transition-transform text-accent group-hover:scale-110" />
                <div>
                  <p className="font-semibold text-foreground">{title}</p>
                  <p className="text-sm">{content}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
