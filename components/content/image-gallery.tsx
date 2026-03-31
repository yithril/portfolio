"use client";

import { useId, useRef, useState } from "react";
import Image from "next/image";

import { ProjectThumbnail } from "@/components/content/project-thumbnail";
import { cn } from "@/lib/utils";

type ImageGalleryProps = {
  items: string[];
  title: string;
  className?: string;
  compact?: boolean;
  tall?: boolean;
};

export function ImageGallery({ items, title, className, compact = false, tall = false }: ImageGalleryProps) {
  const galleryId = useId();
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  if (items.length === 0) {
    return <ProjectThumbnail label={`${title} screenshots coming soon`} />;
  }

  const handleScroll = () => {
    const container = scrollRef.current;

    if (!container) {
      return;
    }

    const nextIndex = Math.round(container.scrollLeft / container.clientWidth);
    setActiveIndex(nextIndex);
  };

  const scrollToIndex = (index: number) => {
    const container = scrollRef.current;

    if (!container) {
      return;
    }

    const boundedIndex = Math.max(0, Math.min(index, items.length - 1));
    container.scrollTo({
      left: boundedIndex * container.clientWidth,
      behavior: "smooth",
    });
    setActiveIndex(boundedIndex);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "ArrowRight") {
      event.preventDefault();
      scrollToIndex(activeIndex + 1);
    }

    if (event.key === "ArrowLeft") {
      event.preventDefault();
      scrollToIndex(activeIndex - 1);
    }

    if (event.key === "Home") {
      event.preventDefault();
      scrollToIndex(0);
    }

    if (event.key === "End") {
      event.preventDefault();
      scrollToIndex(items.length - 1);
    }
  };

  return (
    <div className={cn("space-y-3", className)}>
      <div className="relative">
        <div
          aria-atomic="true"
          aria-label={`${title} screenshot gallery`}
          aria-live="polite"
          aria-roledescription="carousel"
          className={cn(
            "flex snap-x snap-mandatory overflow-x-auto overscroll-x-contain scroll-smooth rounded-[20px] touch-pan-x [scrollbar-width:none] [&::-webkit-scrollbar]:hidden",
            compact ? "aspect-[16/10]" : tall ? "aspect-[4/5]" : "aspect-[16/9]",
          )}
          id={galleryId}
          onKeyDown={handleKeyDown}
          onScroll={handleScroll}
          ref={scrollRef}
          role="region"
          tabIndex={0}
        >
          {items.map((item, index) => (
            <div
              aria-label={`Screenshot ${index + 1} of ${items.length}`}
              aria-roledescription="slide"
              className="group relative min-w-full snap-center overflow-hidden border border-border bg-background-elevated [scroll-snap-stop:always]"
              key={item}
            >
              <Image
                alt={`${title} screenshot ${index + 1}`}
                className={cn(
                  "transition-transform duration-[400ms] ease-out group-hover:scale-[1.03]",
                  compact ? "object-cover object-top" : "object-contain",
                )}
                fill
                sizes={
                  compact
                    ? "(max-width: 767px) 100vw, (max-width: 1279px) 50vw, 33vw"
                    : "(max-width: 1023px) 100vw, 50vw"
                }
                src={item}
              />
            </div>
          ))}
        </div>

        {items.length > 1 ? (
          <>
            <button
              aria-label="Previous screenshot"
              aria-controls={galleryId}
              className="absolute left-3 top-1/2 hidden min-h-10 min-w-10 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-background/80 text-text-primary backdrop-blur-sm transition-colors hover:bg-background-elevated disabled:cursor-not-allowed disabled:opacity-50 md:inline-flex"
              disabled={activeIndex === 0}
              onClick={() => scrollToIndex(activeIndex - 1)}
              type="button"
            >
              ‹
            </button>
            <button
              aria-label="Next screenshot"
              aria-controls={galleryId}
              className="absolute right-3 top-1/2 hidden min-h-10 min-w-10 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-background/80 text-text-primary backdrop-blur-sm transition-colors hover:bg-background-elevated disabled:cursor-not-allowed disabled:opacity-50 md:inline-flex"
              disabled={activeIndex === items.length - 1}
              onClick={() => scrollToIndex(activeIndex + 1)}
              type="button"
            >
              ›
            </button>
          </>
        ) : null}
      </div>

      {items.length > 1 ? (
        <div className="flex items-center justify-between gap-3">
          <p className="text-xs text-text-muted">
            {activeIndex + 1} / {items.length}
          </p>
          <div className="flex items-center gap-2">
            {items.map((item, index) => (
              <button
                aria-label={`Go to screenshot ${index + 1}`}
                className={cn(
                  "h-2.5 rounded-full transition-all",
                  index === activeIndex ? "w-8 bg-accent-tech" : "w-2.5 bg-border-strong",
                )}
                key={item}
                onClick={() => scrollToIndex(index)}
                type="button"
              />
            ))}
          </div>
        </div>
      ) : null}
    </div>
  );
}
