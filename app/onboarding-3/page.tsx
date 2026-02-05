import Link from "next/link"
import { TrendingUp } from "lucide-react"

export default function Onboarding3() {
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

        {/* Content */}
        <div className="flex flex-1 flex-col justify-between px-6 pt-6 pb-10">
          <div className="flex flex-1 flex-col items-center justify-center">
            {/* Visual progress illustration */}
            <div className="mb-10 w-full max-w-xs">
              <div className="flex items-end justify-center gap-6">
                {[
                  { label: "Start", h: "h-16", opacity: "opacity-30" },
                  { label: "Week 4", h: "h-24", opacity: "opacity-60" },
                  { label: "Week 8", h: "h-36", opacity: "opacity-100" },
                ].map((stage, i) => (
                  <div key={i} className="flex flex-col items-center gap-3">
                    <div
                      className={`w-14 rounded-full bg-primary ${stage.h} ${stage.opacity} transition-all`}
                    />
                    <span className="text-xs font-medium text-muted-foreground">
                      {stage.label}
                    </span>
                  </div>
                ))}
              </div>
              <div className="mt-8 h-1.5 w-full overflow-hidden rounded-full bg-muted">
                <div className="h-full w-3/4 rounded-full bg-primary transition-all" />
              </div>
            </div>

            {/* Icon */}
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary">
              <TrendingUp className="h-7 w-7 text-primary-foreground" strokeWidth={2} />
            </div>

            {/* Copy */}
            <h1 className="text-center text-3xl font-bold leading-tight tracking-tight text-foreground text-balance">
              See your evolution every day
            </h1>
            <p className="mx-auto mt-3 max-w-xs text-center text-base leading-relaxed text-muted-foreground">
              Visual progress tracking keeps you motivated and shows real results
            </p>
          </div>

          <div className="flex flex-col gap-6 pt-8">
            {/* Progress indicator */}
            <div className="flex items-center gap-1.5">
              <div className="h-1 w-2 rounded-full bg-border" />
              <div className="h-1 w-2 rounded-full bg-border" />
              <div className="h-1 w-8 rounded-full bg-primary" />
              <div className="h-1 w-2 rounded-full bg-border" />
            </div>

            {/* CTA */}
            <Link
              href="/onboarding-4"
              className="flex w-full items-center justify-center rounded-2xl bg-foreground py-4 text-base font-semibold text-background transition-opacity hover:opacity-90 active:scale-[0.98]"
            >
              Continue
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}
