import Link from "next/link"
import { Check } from "lucide-react"

const habits = [
  { id: 1, text: "Morning workout", completed: true },
  { id: 2, text: "Drink 8 glasses of water", completed: true },
  { id: 3, text: "Healthy breakfast", completed: true },
  { id: 4, text: "10-minute stretch", completed: false },
]

export default function Onboarding4() {
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
            {/* Checklist illustration */}
            <div className="mb-10 w-full max-w-xs rounded-2xl border border-border bg-card p-5">
              <div className="flex flex-col gap-3">
                {habits.map((habit) => (
                  <div
                    key={habit.id}
                    className="flex items-center gap-3 rounded-xl bg-muted/50 p-3.5"
                  >
                    <div
                      className={`flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-md ${
                        habit.completed
                          ? "bg-primary"
                          : "border-2 border-border bg-card"
                      }`}
                    >
                      {habit.completed && (
                        <Check
                          className="h-3 w-3 text-primary-foreground"
                          strokeWidth={3}
                        />
                      )}
                    </div>
                    <span
                      className={`text-sm font-medium ${
                        habit.completed
                          ? "text-muted-foreground line-through"
                          : "text-foreground"
                      }`}
                    >
                      {habit.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Copy */}
            <h1 className="text-center text-3xl font-bold leading-tight tracking-tight text-foreground text-balance">
              Small daily actions create real results
            </h1>
            <p className="mx-auto mt-3 max-w-xs text-center text-base leading-relaxed text-muted-foreground">
              Build lasting habits with simple daily checklists
            </p>
          </div>

          <div className="flex flex-col gap-6 pt-8">
            {/* Progress indicator */}
            <div className="flex items-center gap-1.5">
              <div className="h-1 w-2 rounded-full bg-border" />
              <div className="h-1 w-2 rounded-full bg-border" />
              <div className="h-1 w-2 rounded-full bg-border" />
              <div className="h-1 w-8 rounded-full bg-primary" />
            </div>

            {/* CTA */}
            <Link
              href="/goals"
              className="flex w-full items-center justify-center rounded-2xl bg-foreground py-4 text-base font-semibold text-background transition-opacity hover:opacity-90 active:scale-[0.98]"
            >
              {"I'm ready"}
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}
