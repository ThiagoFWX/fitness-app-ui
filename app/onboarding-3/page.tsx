import Link from "next/link"
import { TrendingUp } from "lucide-react"

export default function Onboarding3() {
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

        {/* Content */}
        <div className="flex flex-1 flex-col justify-between px-6 pt-6 pb-10">
          <div className="flex flex-1 flex-col items-center justify-center">
            {/* Visual progress illustration */}
            <div className="mb-10 w-full max-w-[260px]">
              <div className="flex items-end justify-center gap-7">
                {[
                  { label: "Start", h: 48, pct: 25 },
                  { label: "Week 4", h: 72, pct: 55 },
                  { label: "Week 8", h: 100, pct: 100 },
                ].map((stage, i) => (
                  <div key={i} className="flex flex-col items-center gap-3">
                    <div
                      className="w-14 rounded-2xl bg-primary transition-all"
                      style={{
                        height: `${stage.h}px`,
                        opacity: stage.pct / 100,
                      }}
                    />
                    <span className="text-[11px] font-medium text-muted-foreground">
                      {stage.label}
                    </span>
                  </div>
                ))}
              </div>
              <div className="mt-8 h-1.5 w-full overflow-hidden rounded-full bg-muted">
                <div className="h-full w-3/4 rounded-full bg-primary transition-all" />
              </div>
            </div>

            {/* Icon badge */}
            <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary shadow-[0_4px_14px_0_rgba(46,204,113,0.3)]">
              <TrendingUp className="h-7 w-7 text-primary-foreground" strokeWidth={2} />
            </div>

            {/* Copy */}
            <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-primary">
              Track Progress
            </p>
            <h1 className="text-center text-[28px] font-bold leading-[1.15] tracking-tight text-foreground text-balance">
              See your evolution every day
            </h1>
            <p className="mx-auto mt-3 max-w-[260px] text-center text-[15px] leading-relaxed text-muted-foreground">
              Visual progress tracking keeps you motivated and shows real results
            </p>
          </div>

          <div className="flex flex-col gap-5 pt-8">
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
              className="flex w-full items-center justify-center rounded-2xl bg-primary py-4 text-[15px] font-semibold text-primary-foreground shadow-[0_4px_14px_0_rgba(46,204,113,0.3)] transition-all hover:shadow-[0_6px_20px_0_rgba(46,204,113,0.4)] active:scale-[0.98]"
            >
              Continue
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}
