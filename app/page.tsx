import Link from "next/link"
import Image from "next/image"

export default function Onboarding1() {
  return (
    <main className="flex min-h-dvh flex-col bg-background">
      <div className="mx-auto flex w-full max-w-md flex-1 flex-col">
        {/* Top bar */}
        <div className="flex items-center justify-between px-6 pt-14 pb-4">
          <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            FitLife
          </span>
          <Link
            href="/goals"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Skip
          </Link>
        </div>

        {/* Hero image */}
        <div className="relative mx-5 overflow-hidden rounded-3xl">
          <Image
            src="/images/onboarding-hero.jpg"
            alt="Person exercising at home"
            width={600}
            height={480}
            className="aspect-[4/3] w-full object-cover"
            priority
          />
        </div>

        {/* Content */}
        <div className="flex flex-1 flex-col justify-between px-6 pt-8 pb-10">
          <div>
            <h1 className="text-3xl font-bold leading-tight tracking-tight text-foreground text-balance">
              Get in shape at home without confusion
            </h1>
            <p className="mt-3 text-base leading-relaxed text-muted-foreground">
              Simple workouts, daily habits and visual progress tracking
            </p>
          </div>

          <div className="flex flex-col gap-6">
            {/* Progress indicator */}
            <div className="flex items-center gap-1.5">
              <div className="h-1 w-8 rounded-full bg-primary" />
              <div className="h-1 w-2 rounded-full bg-border" />
              <div className="h-1 w-2 rounded-full bg-border" />
              <div className="h-1 w-2 rounded-full bg-border" />
            </div>

            {/* CTA */}
            <Link
              href="/onboarding-2"
              className="flex w-full items-center justify-center rounded-2xl bg-foreground py-4 text-base font-semibold text-background transition-opacity hover:opacity-90 active:scale-[0.98]"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}
