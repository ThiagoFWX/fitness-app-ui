"use client"

import { useState } from "react"
import Link from "next/link"
import { BottomNav } from "@/components/bottom-nav"
import { Check, ChevronRight, Dumbbell, Apple } from "lucide-react"

export default function Dashboard() {
  const [checklist, setChecklist] = useState([
    { id: 1, text: "Morning workout", completed: true },
    { id: 2, text: "Drink 8 glasses of water", completed: true },
    { id: 3, text: "Healthy breakfast", completed: true },
    { id: 4, text: "10-minute stretch", completed: false },
    { id: 5, text: "Evening walk", completed: false },
  ])

  const completedCount = checklist.filter((item) => item.completed).length
  const totalCount = checklist.length
  const healthScore = Math.round((completedCount / totalCount) * 100)

  const toggleTask = (id: number) => {
    setChecklist((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    )
  }

  const circumference = 2 * Math.PI * 54
  const offset = circumference * (1 - healthScore / 100)

  return (
    <main className="min-h-dvh bg-background pb-20">
      <div className="mx-auto max-w-md">
        {/* Header */}
        <header className="px-6 pt-14 pb-6">
          <p className="text-sm font-medium text-muted-foreground">
            Good morning
          </p>
          <h1 className="mt-1 text-2xl font-bold tracking-tight text-foreground">
            Alex
          </h1>
        </header>

        {/* Content */}
        <div className="flex flex-col gap-4 px-5">
          {/* Health Score */}
          <section className="rounded-2xl border border-border bg-card p-6">
            <div className="flex items-start justify-between">
              <div>
                <h2 className="text-sm font-semibold text-foreground">
                  {"Today's Score"}
                </h2>
                <p className="mt-1 text-xs text-muted-foreground">
                  {completedCount} of {totalCount} tasks done
                </p>
              </div>
              <div className="relative h-28 w-28 flex-shrink-0">
                <svg className="h-28 w-28 -rotate-90" viewBox="0 0 120 120">
                  <circle
                    cx="60"
                    cy="60"
                    r="54"
                    fill="none"
                    strokeWidth="8"
                    className="stroke-muted"
                  />
                  <circle
                    cx="60"
                    cy="60"
                    r="54"
                    fill="none"
                    strokeWidth="8"
                    strokeLinecap="round"
                    strokeDasharray={circumference}
                    strokeDashoffset={offset}
                    className="stroke-primary transition-all duration-700 ease-out"
                  />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-2xl font-bold tracking-tight text-foreground">
                    {healthScore}
                  </span>
                  <span className="text-[10px] font-medium text-muted-foreground">
                    / 100
                  </span>
                </div>
              </div>
            </div>
          </section>

          {/* Progress Banner */}
          <Link
            href="/progress"
            className="flex items-center justify-between rounded-2xl bg-foreground p-5 active:scale-[0.98] transition-transform"
          >
            <div>
              <h3 className="text-sm font-semibold text-background">
                Your Progress
              </h3>
              <p className="mt-1 text-xs text-background/60">
                See your body transformation
              </p>
            </div>
            <ChevronRight className="h-5 w-5 text-background/40" strokeWidth={2} />
          </Link>

          {/* Daily Checklist */}
          <section className="rounded-2xl border border-border bg-card p-5">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-sm font-semibold text-foreground">
                Daily Checklist
              </h2>
              <span className="rounded-full bg-primary/10 px-2.5 py-1 text-xs font-semibold text-primary">
                {completedCount}/{totalCount}
              </span>
            </div>
            <div className="flex flex-col gap-1">
              {checklist.map((item) => (
                <button
                  key={item.id}
                  onClick={() => toggleTask(item.id)}
                  className="flex w-full items-center gap-3 rounded-xl p-3 text-left transition-colors hover:bg-muted/50 active:scale-[0.98]"
                >
                  <div
                    className={`flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-md transition-all ${
                      item.completed
                        ? "bg-primary"
                        : "border-2 border-border"
                    }`}
                  >
                    {item.completed && (
                      <Check
                        className="h-3 w-3 text-primary-foreground"
                        strokeWidth={3}
                      />
                    )}
                  </div>
                  <span
                    className={`text-sm font-medium transition-colors ${
                      item.completed
                        ? "text-muted-foreground line-through"
                        : "text-foreground"
                    }`}
                  >
                    {item.text}
                  </span>
                </button>
              ))}
            </div>
          </section>

          {/* Quick Actions */}
          <div className="grid grid-cols-2 gap-3">
            <Link
              href="/workout"
              className="flex flex-col gap-3 rounded-2xl border border-border bg-card p-5 transition-colors hover:border-primary/30 active:scale-[0.98]"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10">
                <Dumbbell className="h-5 w-5 text-primary" strokeWidth={2} />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-foreground">
                  Start Workout
                </h3>
                <p className="mt-0.5 text-xs text-muted-foreground">
                  15 min session
                </p>
              </div>
            </Link>
            <Link
              href="/nutrition"
              className="flex flex-col gap-3 rounded-2xl border border-border bg-card p-5 transition-colors hover:border-primary/30 active:scale-[0.98]"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-chart-2/10">
                <Apple className="h-5 w-5 text-chart-2" strokeWidth={2} />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-foreground">
                  {"Today's Recipe"}
                </h3>
                <p className="mt-0.5 text-xs text-muted-foreground">
                  {"Healthy & easy"}
                </p>
              </div>
            </Link>
          </div>
        </div>
      </div>

      <BottomNav />
    </main>
  )
}
