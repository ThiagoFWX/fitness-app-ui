import Link from "next/link"
import Image from "next/image"

export default function Onboarding1() {
  return (
    <main className="flex min-h-dvh flex-col bg-background">
      <div className="mx-auto flex w-full max-w-md flex-1 flex-col">
        {/* Top bar */}
        <div className="flex items-center justify-between px-6 pt-14 pb-4">
          <span className="text-sm font-bold tracking-tight text-foreground">
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
        <div className="relative mx-5 overflow-hidden rounded-3xl bg-muted">
          <Image
            src="/images/onboarding-hero.jpg"
            alt="Person exercising at home in a modern space"
            width={600}
            height={480}
            className="aspect-[5/4] w-full object-cover"
            priority
          />
          {/* Soft gradient overlay at bottom for depth */}
          <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-background/30 to-transparent" />
        </div>

        {/* Content */}
        <div className="flex flex-1 flex-col justify-between px-6 pt-8 pb-10">
          <div>
            <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-primary">
              Your Journey Starts Here
            </p>
            <h1 className="text-[28px] font-bold leading-[1.15] tracking-tight text-foreground text-balance">
              Train smarter at home, see real results
            </h1>
            <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">
              Simple workouts, daily habits and visual progress tracking designed for your lifestyle.
            </p>
          </div>

          <div className="flex flex-col gap-5 pt-6">
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
              className="flex w-full items-center justify-center rounded-2xl bg-primary py-4 text-[15px] font-semibold text-primary-foreground shadow-[0_4px_14px_0_rgba(46,204,113,0.3)] transition-all hover:shadow-[0_6px_20px_0_rgba(46,204,113,0.4)] active:scale-[0.98]"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}
