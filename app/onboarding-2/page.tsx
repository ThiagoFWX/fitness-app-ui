import Link from "next/link"
import { Dumbbell, CheckSquare, Apple } from "lucide-react"

const features = [
  {
    icon: Dumbbell,
    title: "Guided home workouts",
    description: "Follow along with easy exercises designed for any level",
    accent: "bg-primary/10 text-primary",
  },
  {
    icon: CheckSquare,
    title: "Daily checklist habits",
    description: "Build consistency with small tasks that compound over time",
    accent: "bg-secondary/10 text-secondary",
  },
  {
    icon: Apple,
    title: "Simple nutrition tips",
    description: "Healthy eating made practical with easy recipes",
    accent: "bg-primary/10 text-primary",
  },
]

export default function Onboarding2() {
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
          <div>
            <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-primary">
              How It Works
            </p>
            <h1 className="text-[28px] font-bold leading-[1.15] tracking-tight text-foreground">
              Three simple pillars
            </h1>
            <p className="mt-2 text-[15px] leading-relaxed text-muted-foreground">
              Everything you need to transform your fitness, nothing you don{"'"}t.
            </p>

            {/* Feature cards */}
            <div className="mt-8 flex flex-col gap-3">
              {features.map((feature, i) => (
                <div
                  key={i}
                  className="flex items-start gap-4 rounded-2xl border border-border bg-card p-5 shadow-[0_1px_3px_0_rgba(0,0,0,0.04)]"
                >
                  <div
                    className={`flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl ${feature.accent.split(" ")[0]}`}
                  >
                    <feature.icon
                      className={`h-5 w-5 ${feature.accent.split(" ")[1]}`}
                      strokeWidth={2}
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-sm font-semibold text-foreground">
                      {feature.title}
                    </h3>
                    <p className="mt-1 text-[13px] leading-relaxed text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-5 pt-8">
            {/* Progress indicator */}
            <div className="flex items-center gap-1.5">
              <div className="h-1 w-2 rounded-full bg-border" />
              <div className="h-1 w-8 rounded-full bg-primary" />
              <div className="h-1 w-2 rounded-full bg-border" />
              <div className="h-1 w-2 rounded-full bg-border" />
            </div>

            {/* CTA */}
            <Link
              href="/onboarding-3"
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
