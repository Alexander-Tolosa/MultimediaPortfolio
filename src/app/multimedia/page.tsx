import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { multimediaActivities, multimediaCourse } from "@/data/multimedia";
import type { MultimediaActivity } from "@/data/multimedia";
import { MinimalFooter } from "@/components/layout/MinimalFooter";

export const metadata: Metadata = {
  title: "Multimedia Activities | Alexander Tolosa",
  description: "Multimedia Systems coursework, works and activities by Alexander Tolosa.",
};

const label = "text-[11px] uppercase tracking-[0.08em] text-brand-text-muted";

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="shrink-0 rounded border border-brand-border px-2 py-0.5 text-[10px] uppercase tracking-[0.08em] text-brand-text-muted">
      {children}
    </span>
  );
}

function Header({ a }: { a: MultimediaActivity }) {
  return (
    <div className="flex items-start justify-between gap-3">
      <h3 className="text-[15px] font-medium text-foreground">{a.title}</h3>
      <Tag>{a.kind}</Tag>
    </div>
  );
}

function VideoCard({ a }: { a: MultimediaActivity }) {
  return (
    <div id={a.id} className="scroll-mt-12">
      <video
        controls
        preload="metadata"
        src={a.video}
        className="aspect-video w-full rounded border border-brand-border bg-black/40"
      />
      <div className="mt-3">
        <Header a={a} />
        <p className="mt-1 text-[14px] leading-relaxed text-brand-text-muted">{a.description}</p>
      </div>
    </div>
  );
}

export default function MultimediaPage() {
  const videos = multimediaActivities.filter((a) => a.video);
  const others = multimediaActivities.filter((a) => !a.video);

  return (
    <div className="mx-auto w-full max-w-[640px] md:max-w-[760px] lg:max-w-[860px] px-6 pb-10 pt-[84px] lg:pl-6 lg:pr-6 lg:pt-10">
      <Link
        href="/"
        className="group inline-flex min-h-8 items-center gap-1.5 text-[14px] font-medium text-brand-text-muted hover:text-foreground transition-colors cursor-pointer"
      >
        <ArrowLeft size={14} className="transition-transform group-hover:-translate-x-0.5" />
        Back
      </Link>

      <h1 className="mt-6 flex items-center gap-4 text-[14px] font-medium text-foreground">
        <span className="text-brand-text-muted">05.</span> {multimediaCourse.title}
        <span className="h-px flex-1 bg-brand-border" />
      </h1>

      <p className="mt-5 text-[16px] leading-relaxed text-foreground">{multimediaCourse.intro}</p>

      {/* What I learned */}
      <p className={`mt-10 ${label}`}>What I learned</p>
      <p className="mt-3 text-[16px] leading-relaxed text-foreground">{multimediaCourse.learned}</p>

      {/* Works & activities */}
      <p className={`mt-12 ${label}`}>Works &amp; activities</p>

      {videos.length > 0 && (
        <div className="mt-4 grid grid-cols-1 gap-6 md:grid-cols-2">
          {videos.map((a) => (
            <VideoCard key={a.id} a={a} />
          ))}
        </div>
      )}

      <div className="mt-10 space-y-12">
        {others.map((a) => (
          <section key={a.id} id={a.id} className="scroll-mt-12">
            <Header a={a} />
            <p className="mt-1 text-[14px] leading-relaxed text-brand-text-muted">{a.description}</p>

            {a.panels && (
              <div className="mt-4 grid grid-cols-2 gap-3 md:grid-cols-4">
                {a.panels.map((src, i) => (
                  <div key={src} className="relative overflow-hidden rounded border border-brand-border">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={src} alt={`${a.title} panel ${i + 1}`} className="aspect-[4/3] w-full object-cover" />
                    <span className="absolute bottom-1 left-1 rounded bg-black/70 px-1.5 py-0.5 text-[10px] text-white">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                ))}
              </div>
            )}

            {(a.image || a.embed) && (
              <div className="mt-4 flex flex-col items-start gap-4 md:flex-row md:items-stretch">
                {a.image && (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={a.image}
                    alt={a.title}
                    className={`w-full shrink-0 rounded border border-brand-border ${a.imageSize === "lg" ? "" : "max-w-[280px]"}`}
                  />
                )}
                {a.embed && (
                  <iframe
                    src={a.embed}
                    title={`${a.title} video`}
                    allow="autoplay; fullscreen"
                    allowFullScreen
                    className={`aspect-video w-full flex-1 rounded ${a.image ? "md:aspect-auto" : ""} border border-brand-border bg-black/40`}
                  />
                )}
              </div>
            )}

            {a.details && (
              <div className="mt-4 space-y-2 text-[14px] leading-relaxed text-brand-text-muted">
                {a.details.map((d, i) => (
                  <p key={i}>{d}</p>
                ))}
              </div>
            )}

            {a.pdf && (
              <a
                href={a.pdf}
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-block text-[11px] uppercase tracking-[0.08em] text-foreground underline underline-offset-4"
              >
                Open PDF
              </a>
            )}
          </section>
        ))}
      </div>

      <MinimalFooter />
    </div>
  );
}
