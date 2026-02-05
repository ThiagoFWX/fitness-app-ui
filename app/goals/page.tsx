"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Target, TrendingUp, Calendar, ArrowRight, Check } from "lucide-react"

const goals = [
  {
    id: "lose-weight",
    icon: Target,
    title: "Lose weight",
    description: "Burn calories and get lean",
  },
  {
    id: "get-fit",
    icon: TrendingUp,
    title: "Get fit",
    description: "Build strength and endurance",
  },
  {
    id: "consistency",
    icon: Calendar,
    title: "Build consistency",
    description: "Create lasting healthy habits",
  },
]

const levels = [
  { id: "beginner", title: "Beginner", description: "Just getting started" },
  { id: "intermediate", title: "Intermediate", description: "Some experience" },
]

export default function GoalSelection() {
  const router = useRouter()
  const [selectedGoals, setSelectedGoals] = useState<Set<string>>(new Set())
  const [selectedLevel, setSelectedLevel] = useState<string | null>(null)

  const toggleGoal = (id: string) => {
    setSelectedGoals((prev) => {
      const next = new Set(prev)
      if (next.has(id)) {
        next.delete(id)
      } else {
        next.add(id)
      }
      return next
    })
  }

  const canContinue = selectedGoals.size > 0 && selectedLevel

  const handleContinue = () => {
    if (canContinue) {
      router.push("/dashboard")
    }
  }

  return (
    <main className="flex min-h-dvh flex-col bg-background">
      <div className="mx-auto flex w-full max-w-md flex-1 flex-col px-6 pt-16 pb-10">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold tracking-tight text-foreground">
            {"What are your goals?"}
          </h1>
          <p className="mt-2 text-base text-muted-foreground">
            {"Select all that apply. We'll personalize your experience."}
          </p>
        </div>

        {/* Goals */}
        <div className="flex flex-col gap-3">
          {goals.map((goal) => {
            const isSelected = selectedGoals.has(goal.id)
            return (
              <button
                key={goal.id}
                onClick={() => toggleGoal(goal.id)}
                aria-pressed={isSelected}
                className={`flex w-full items-start gap-4 rounded-2xl border p-5 text-left transition-all active:scale-[0.98] ${
                  isSelected
                    ? "border-primary bg-primary/5"
                    : "border-border bg-card hover:border-muted-foreground/20"
                }`}
              >
                <div
                  className={`flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl ${
                    isSelected ? "bg-primary" : "bg-muted"
                  }`}
                >
                  <goal.icon
                    className={`h-5 w-5 ${
                      isSelected ? "text-primary-foreground" : "text-muted-foreground"
                    }`}
                    strokeWidth={2}
                  />
                </div>
                <div className="flex-1 pt-0.5">
                  <h3 className="text-sm font-semibold text-foreground">
                    {goal.title}
                  </h3>
                  <p className="mt-0.5 text-sm text-muted-foreground">
                    {goal.description}
                  </p>
                </div>
                <div
                  className={`flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-md border-2 transition-all ${
                    isSelected
                      ? "border-primary bg-primary"
                      : "border-border"
                  }`}
                >
                  {isSelected && (
                    <Check className="h-3 w-3 text-primary-foreground" strokeWidth={3} />
                  )}
                </div>
              </button>
            )
          })}
        </div>

        {/* Level */}
        <div className="mt-10">
          <h2 className="mb-4 text-xl font-bold tracking-tight text-foreground">
            {"What's your level?"}
          </h2>
          <div className="flex flex-col gap-3">
            {levels.map((level) => {
              const isSelected = selectedLevel === level.id
              return (
                <button
                  key={level.id}
                  onClick={() => setSelectedLevel(level.id)}
                  className={`flex w-full items-center justify-between rounded-2xl border p-5 text-left transition-all active:scale-[0.98] ${
                    isSelected
                      ? "border-foreground bg-foreground text-background"
                      : "border-border bg-card hover:border-muted-foreground/20"
                  }`}
                >
                  <div>
                    <h3
                      className={`text-sm font-semibold ${
                        isSelected ? "text-background" : "text-foreground"
                      }`}
                    >
                      {level.title}
                    </h3>
                    <p
                      className={`mt-0.5 text-sm ${
                        isSelected ? "text-background/70" : "text-muted-foreground"
                      }`}
                    >
                      {level.description}
                    </p>
                  </div>
                  <div
                    className={`h-5 w-5 flex-shrink-0 rounded-full border-2 transition-all ${
                      isSelected
                        ? "border-background bg-background"
                        : "border-border"
                    }`}
                  >
                    {isSelected && (
                      <div className="flex h-full w-full items-center justify-center">
                        <div className="h-1.5 w-1.5 rounded-full bg-foreground" />
                      </div>
                    )}
                  </div>
                </button>
              )
            })}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-auto pt-10">
          <button
            onClick={handleContinue}
            disabled={!canContinue}
            className={`flex w-full items-center justify-center gap-2 rounded-2xl py-4 text-base font-semibold transition-all ${
              canContinue
                ? "bg-primary text-primary-foreground hover:opacity-90 active:scale-[0.98]"
                : "bg-muted text-muted-foreground/40 cursor-not-allowed"
            }`}
          >
            Continue
            {canContinue && <ArrowRight className="h-4 w-4" strokeWidth={2.5} />}
          </button>
        </div>
      </div>
    </main>
  )
}
