import React from "react";
import Link from "next/link";
import { multimediaActivities } from "@/data/multimedia";

export function MultimediaActivities() {
  return (
    <section id="multimedia-activities" className="pt-12 scroll-mt-12 select-text">
      <div className="mb-5 flex items-baseline justify-between gap-4">
        <h2 className="text-[14px] font-medium text-brand-text-muted">Multimedia Activities</h2>
      </div>

      <div className="divide-y divide-brand-border">
        {multimediaActivities.map((a) => (
          <div key={a.id} className="grid grid-cols-[1fr_auto] items-baseline gap-6 py-4">
            <p className="text-[15px] text-foreground">{a.title}</p>
            <p className="text-[14px] text-brand-text-muted">{a.kind}</p>
          </div>
        ))}
      </div>

      <div className="mt-6">
        <Link
          href="/multimedia"
          className="text-[14px] font-medium text-brand-text-muted hover:text-foreground transition-colors"
        >
          View all activities →
        </Link>
      </div>
    </section>
  );
}
