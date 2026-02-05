import Link from "next/link"
import { Dumbbell, CheckSquare, Apple } from "lucide-react"

const features = [
  {
    icon: Dumbbell,
    title: "Guided home workouts",
    description: "Follow along with easy exercises designed for any level",
  },
  {
    icon: CheckSquare,
    title: "Daily checklist habits",
    description: "Build consistency with small tasks that compound over time",
  },
  {
    icon: Apple,
    title: "Simple nutrition tips",
    description: "Healthy eating made practical with easy recipes",
  },
]

export default function Onboarding2() {
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
          <div>
            <h1 className="text-3xl font-bold leading-tight tracking-tight text-foreground">
              How it works
            </h1>
            <p className="mt-2 text-base leading-relaxed text-muted-foreground">
              Three simple steps to transform your fitness
            </p>

            {/* Feature cards */}
            <div className="mt-10 flex flex-col gap-4">
              {features.map((feature, i) => (
                <div
                  key={i}
                  className="flex items-start gap-4 rounded-2xl border border-border bg-card p-5"
                >
                  <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-primary/10">
                    <feature.icon
                      className="h-5 w-5 text-primary"
                      strokeWidth={2}
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-sm font-semibold text-foreground">
                      {feature.title}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-6 pt-8">
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
