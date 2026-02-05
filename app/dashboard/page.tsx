"use client"

import { useState } from "react"
import Link from "next/link"
import { BottomNav } from "@/components/bottom-nav"
import { Check, ChevronRight, Dumbbell, Apple, Flame } from "lucide-react"

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

  const circumference = 2 * Math.PI * 52
  const offset = circumference * (1 - healthScore / 100)

  return (
    <main className="min-h-dvh bg-muted pb-24">
      <div className="mx-auto max-w-md">
        {/* Header */}
        <header className="bg-background px-6 pt-14 pb-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-[13px] font-medium text-muted-foreground">
                Good morning
              </p>
              <h1 className="mt-0.5 text-2xl font-bold tracking-tight text-foreground">
                Alex
              </h1>
            </div>
            <div className="flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1.5">
              <Flame className="h-4 w-4 text-primary" strokeWidth={2.5} />
              <span className="text-sm font-bold text-primary">5</span>
            </div>
          </div>
        </header>

        {/* Content */}
        <div className="flex flex-col gap-3 px-5 pt-4">
          {/* Health Score Card */}
          <section className="rounded-2xl bg-card p-6 shadow-[0_1px_3px_0_rgba(0,0,0,0.04)]">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-widest text-muted-foreground">
                  {"Today's Score"}
                </p>
                <p className="mt-1 text-lg font-bold text-foreground">
                  {completedCount} of {totalCount}
                </p>
                <p className="mt-0.5 text-[13px] text-muted-foreground">tasks completed</p>
              </div>
              <div className="relative h-[108px] w-[108px] flex-shrink-0">
                <svg className="h-[108px] w-[108px] -rotate-90" viewBox="0 0 116 116">
                  <circle
                    cx="58"
                    cy="58"
                    r="52"
                    fill="none"
                    strokeWidth="7"
                    className="stroke-muted"
                  />
                  <circle
                    cx="58"
                    cy="58"
                    r="52"
                    fill="none"
                    strokeWidth="7"
                    strokeLinecap="round"
                    strokeDasharray={circumference}
                    strokeDashoffset={offset}
                    className="stroke-primary transition-all duration-700 ease-out"
                  />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-[28px] font-bold tracking-tight text-foreground leading-none">
                    {healthScore}
                  </span>
                  <span className="mt-0.5 text-[10px] font-semibold text-muted-foreground">
                    / 100
                  </span>
                </div>
              </div>
            </div>
          </section>

          {/* Progress Banner */}
          <Link
            href="/progress"
            className="flex items-center justify-between rounded-2xl bg-foreground p-5 shadow-[0_4px_14px_0_rgba(31,41,51,0.15)] active:scale-[0.98] transition-transform"
          >
            <div>
              <h3 className="text-sm font-semibold text-background">
                Your Progress
              </h3>
              <p className="mt-1 text-[13px] text-background/50">
                See your body transformation
              </p>
            </div>
            <ChevronRight className="h-5 w-5 text-background/30" strokeWidth={2} />
          </Link>

          {/* Daily Checklist */}
          <section className="rounded-2xl bg-card p-5 shadow-[0_1px_3px_0_rgba(0,0,0,0.04)]">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-sm font-semibold text-foreground">
                Daily Checklist
              </h2>
              <span className="rounded-full bg-primary/10 px-2.5 py-1 text-[11px] font-bold text-primary">
                {completedCount}/{totalCount}
              </span>
            </div>
            <div className="flex flex-col gap-0.5">
              {checklist.map((item) => (
                <button
                  key={item.id}
                  onClick={() => toggleTask(item.id)}
                  className="flex w-full items-center gap-3 rounded-xl p-3 text-left transition-colors hover:bg-muted/50 active:scale-[0.98]"
                >
                  <div
                    className={`flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-md transition-all ${
                      item.completed
                        ? "bg-primary shadow-[0_1px_4px_0_rgba(46,204,113,0.3)]"
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
              className="flex flex-col gap-3 rounded-2xl bg-card p-5 shadow-[0_1px_3px_0_rgba(0,0,0,0.04)] transition-all hover:shadow-[0_2px_8px_0_rgba(0,0,0,0.06)] active:scale-[0.98]"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10">
                <Dumbbell className="h-5 w-5 text-primary" strokeWidth={2} />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-foreground">
                  Start Workout
                </h3>
                <p className="mt-0.5 text-[13px] text-muted-foreground">
                  15 min session
                </p>
              </div>
            </Link>
            <Link
              href="/nutrition"
              className="flex flex-col gap-3 rounded-2xl bg-card p-5 shadow-[0_1px_3px_0_rgba(0,0,0,0.04)] transition-all hover:shadow-[0_2px_8px_0_rgba(0,0,0,0.06)] active:scale-[0.98]"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-secondary/10">
                <Apple className="h-5 w-5 text-secondary" strokeWidth={2} />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-foreground">
                  {"Today's Recipe"}
                </h3>
                <p className="mt-0.5 text-[13px] text-muted-foreground">
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
