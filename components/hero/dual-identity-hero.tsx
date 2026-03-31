"use client";

import { motion, useReducedMotion } from "framer-motion";

import { Grid } from "@/components/layout/grid";
import { HeroCTAGroup } from "@/components/hero/hero-cta-group";
import { IdentityPanel } from "@/components/hero/identity-panel";
import { EyebrowLabel } from "@/components/hero/eyebrow-label";
import { heroChips, heroContent, identityPanels } from "@/lib/site-data";
import { Badge } from "@/components/ui/badge";
import { duration, ease } from "@/lib/motion";

function heroVariant(yOffset: number, delay: number, prefersReduced: boolean) {
  return {
    initial: { opacity: 0, y: prefersReduced ? 0 : yOffset },
    animate: { opacity: 1, y: 0 },
    transition: {
      duration: prefersReduced ? duration.fast : duration.hero,
      ease: ease.smooth,
      delay: prefersReduced ? 0 : delay,
    },
  };
}

function heroRightVariant(delay: number, prefersReduced: boolean) {
  return {
    initial: { opacity: 0, x: prefersReduced ? 0 : 24 },
    animate: { opacity: 1, x: 0 },
    transition: {
      duration: prefersReduced ? duration.fast : duration.slow,
      ease: ease.smooth,
      delay: prefersReduced ? 0 : delay,
    },
  };
}

export function DualIdentityHero() {
  const prefersReduced = useReducedMotion() ?? false;

  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.95fr)] lg:items-start">
      <div className="space-y-7">
        <motion.div {...heroVariant(distance.sm, 0, prefersReduced)}>
          <EyebrowLabel>{heroContent.eyebrow}</EyebrowLabel>
        </motion.div>

        <div className="space-y-5">
          <motion.h1
            className="max-w-3xl font-heading text-[2.6rem] leading-[1.02] font-bold tracking-[-0.05em] text-text-primary sm:text-6xl lg:text-[5.25rem]"
            {...heroVariant(distance.md, 0.1, prefersReduced)}
          >
            {heroContent.title}
          </motion.h1>
          <motion.p
            className="max-w-2xl text-base leading-8 text-text-secondary sm:text-lg"
            {...heroVariant(distance.md, 0.2, prefersReduced)}
          >
            {heroContent.description}
          </motion.p>
        </div>

        <motion.div {...heroVariant(distance.md, 0.3, prefersReduced)}>
          <HeroCTAGroup primary={heroContent.primaryCta} secondary={heroContent.secondaryCta} />
        </motion.div>

        <motion.div
          className="flex flex-wrap gap-3"
          {...heroVariant(distance.md, 0.38, prefersReduced)}
        >
          {heroChips.map((item) => (
            <Badge key={item} variant="neutral">
              {item}
            </Badge>
          ))}
        </motion.div>
      </div>

      <motion.div {...heroRightVariant(0.15, prefersReduced)}>
        <Grid className="gap-5">
          {identityPanels.map((panel) => (
            <IdentityPanel key={panel.title} panel={panel} />
          ))}
        </Grid>
      </motion.div>
    </div>
  );
}

const distance = { sm: 12, md: 20 };
