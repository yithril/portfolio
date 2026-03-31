import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About | Jonathan Hop",
  description:
    "Senior Full Stack Engineer with a background in education. Former teacher, self-taught developer, now building practical systems and applied AI products.",
};

import { EyebrowLabel } from "@/components/hero/eyebrow-label";
import { Section } from "@/components/layout/section";
import { ScrollReveal } from "@/components/motion/scroll-reveal";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Divider } from "@/components/ui/divider";
import { aboutChapters, aboutHighlights, aboutIdentityLine, aboutIntro } from "@/lib/site-data";

const timelineColors = ["creative", "warm", "tech", "creative"] as const;
const chapterVariants = ["warm", "tech", "creative", "warm"] as const;
const statColors = ["text-accent-creative", "text-accent-tech", "text-accent-warm", "text-accent-creative"] as const;

export default function AboutPage() {
  const [ch1, ch2, ch3, ch4] = aboutChapters;

  return (
    <>
      {/* ── Centered intro ── */}
      <Section className="pt-10 sm:pt-14 lg:pt-18">
        <ScrollReveal>
          <div className="mx-auto max-w-2xl space-y-5 text-center">
            <EyebrowLabel className="mx-auto">About</EyebrowLabel>
            <h1 className="font-heading text-4xl font-bold tracking-[-0.03em] text-text-primary sm:text-5xl">
              Engineering, teaching,&nbsp;and building things that last.
            </h1>
            <p className="text-base leading-7 text-text-secondary sm:text-lg">{aboutIntro}</p>
          </div>
        </ScrollReveal>
      </Section>

      {/* ── Identity timeline ── */}
      <Section className="py-0">
        <ScrollReveal>
          <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2">
            {aboutIdentityLine.map((step, i) => (
              <span key={step} className="flex items-center gap-x-3">
                <Badge variant={timelineColors[i]} className="text-xs font-semibold tracking-[0.12em] uppercase sm:text-sm">
                  {step}
                </Badge>
                {i < aboutIdentityLine.length - 1 && (
                  <span className="text-text-muted" aria-hidden="true">
                    →
                  </span>
                )}
              </span>
            ))}
          </div>
        </ScrollReveal>
      </Section>

      <Section className="pt-8">
        <Divider />
      </Section>

      {/* ── Chapter 1: Teaching Abroad — image left, text right ── */}
      <Section className="pt-8 sm:pt-12">
        <ScrollReveal direction="left">
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
            {ch1.image ? (
              <div className="flex flex-col gap-3">
                <div className="overflow-hidden rounded-[var(--radius-card)] shadow-[var(--shadow-surface)]">
                  <Image
                    src={ch1.image}
                    alt={ch1.caption ?? ch1.title}
                    width={720}
                    height={480}
                    className="h-auto w-full object-contain"
                  />
                </div>
                {ch1.caption && (
                  <p className="text-center text-xs text-text-muted">{ch1.caption}</p>
                )}
              </div>
            ) : null}
            <div className="flex flex-col gap-5">
              <EyebrowLabel variant={chapterVariants[0]}>{ch1.label}</EyebrowLabel>
              <h2 className="font-heading text-2xl font-bold tracking-[-0.03em] text-text-primary sm:text-3xl">
                {ch1.title}
              </h2>
              <p className="text-base leading-7 text-text-secondary sm:text-lg">{ch1.body}</p>
            </div>
          </div>
        </ScrollReveal>
      </Section>

      <Section className="pt-8 sm:pt-12">
        <Divider />
      </Section>

      {/* ── Chapter 2: Going all-in — text left, image right ── */}
      <Section className="pt-8 sm:pt-12">
        <ScrollReveal direction="right">
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <div className="flex flex-col gap-5">
              <EyebrowLabel variant={chapterVariants[1]}>{ch2.label}</EyebrowLabel>
              <h2 className="font-heading text-2xl font-bold tracking-[-0.03em] text-text-primary sm:text-3xl">
                {ch2.title}
              </h2>
              <p className="text-base leading-7 text-text-secondary sm:text-lg">{ch2.body}</p>
            </div>
            {ch2.image ? (
              <div className="flex flex-col gap-3">
                <div className="overflow-hidden rounded-[var(--radius-card)] shadow-[var(--shadow-surface)]">
                  <Image
                    src={ch2.image}
                    alt={ch2.caption ?? ch2.title}
                    width={720}
                    height={480}
                    className="h-auto w-full object-contain"
                  />
                </div>
                {ch2.caption && (
                  <p className="text-center text-xs text-text-muted">{ch2.caption}</p>
                )}
              </div>
            ) : null}
          </div>
        </ScrollReveal>
      </Section>

      <Section className="pt-8 sm:pt-12">
        <Divider />
      </Section>

      {/* ── Chapter 3: Building + Teaching — image left, text right, stat cards below ── */}
      <Section className="pt-8 sm:pt-12">
        <ScrollReveal direction="left">
          <div className="space-y-10">
            <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
              {ch3.image ? (
                <div className="flex flex-col gap-3">
                  <div className="overflow-hidden rounded-[var(--radius-card)] shadow-[var(--shadow-surface)]">
                    <Image
                      src={ch3.image}
                      alt={ch3.caption ?? ch3.title}
                      width={720}
                      height={480}
                      className="h-auto w-full object-contain"
                    />
                  </div>
                  {ch3.caption && (
                    <p className="text-center text-xs text-text-muted">{ch3.caption}</p>
                  )}
                </div>
              ) : null}
              <div className="flex flex-col gap-5">
                <EyebrowLabel variant={chapterVariants[2]}>{ch3.label}</EyebrowLabel>
                <h2 className="font-heading text-2xl font-bold tracking-[-0.03em] text-text-primary sm:text-3xl">
                  {ch3.title}
                </h2>
                <p className="text-base leading-7 text-text-secondary sm:text-lg">{ch3.body}</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
              {aboutHighlights.map((stat, i) => (
                <Card key={stat.label} className="space-y-1 text-center">
                  <p className={`font-heading text-3xl font-bold tracking-[-0.03em] ${statColors[i]}`}>
                    {stat.value}
                  </p>
                  <p className="text-xs leading-5 text-text-muted">{stat.label}</p>
                </Card>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </Section>

      <Section className="pt-8 sm:pt-12">
        <Divider />
      </Section>

      {/* ── Chapter 4: World Traveler — text left, image right ── */}
      <Section className="pt-8 sm:pt-12">
        <ScrollReveal direction="right">
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <div className="flex flex-col gap-5">
              <EyebrowLabel variant={chapterVariants[3]}>{ch4.label}</EyebrowLabel>
              <h2 className="font-heading text-2xl font-bold tracking-[-0.03em] text-text-primary sm:text-3xl">
                {ch4.title}
              </h2>
              <p className="text-base leading-7 text-text-secondary sm:text-lg">{ch4.body}</p>
            </div>
            {ch4.image ? (
              <div className="flex flex-col gap-3">
                <div className="overflow-hidden rounded-[var(--radius-card)] shadow-[var(--shadow-surface)]">
                  <Image
                    src={ch4.image}
                    alt={ch4.caption ?? ch4.title}
                    width={720}
                    height={480}
                    className="h-auto w-full object-contain"
                  />
                </div>
                {ch4.caption && (
                  <p className="text-center text-xs text-text-muted">{ch4.caption}</p>
                )}
              </div>
            ) : null}
          </div>
        </ScrollReveal>
      </Section>

      {/* ── Closing statement ── */}
      <Section>
        <ScrollReveal>
          <div className="mx-auto max-w-xl space-y-2 text-center">
            <p className="font-heading text-xl font-semibold tracking-[-0.02em] text-text-primary sm:text-2xl">
              Today: senior engineer, practical AI, education and systems work.
            </p>
            <p className="text-sm leading-6 text-text-muted">
              Based in Detroit, Michigan. Open to senior engineering and technical leadership roles.
            </p>
          </div>
        </ScrollReveal>
      </Section>
    </>
  );
}
