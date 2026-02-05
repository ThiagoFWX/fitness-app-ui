"use client"

import { useState } from "react"
import Image from "next/image"
import { BottomNav } from "@/components/bottom-nav"
import { Clock, Repeat, Check } from "lucide-react"

const exercises = [
  { id: 1, name: "Push-ups", sets: "3 sets", reps: "12 reps", duration: "2 min" },
  { id: 2, name: "Squats", sets: "3 sets", reps: "15 reps", duration: "3 min" },
  { id: 3, name: "Plank", sets: "3 sets", reps: "30 sec", duration: "2 min" },
  { id: 4, name: "Lunges", sets: "3 sets", reps: "10 each leg", duration: "3 min" },
  { id: 5, name: "Mountain Climbers", sets: "3 sets", reps: "20 reps", duration: "2 min" },
]

export default function Workout() {
  const [completedExercises, setCompletedExercises] = useState<number[]>([])

  const toggleExercise = (id: number) => {
    setCompletedExercises((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    )
  }

  const allCompleted = completedExercises.length === exercises.length
  const progress = (completedExercises.length / exercises.length) * 100

  return (
    <main className="min-h-dvh bg-background pb-20">
      <div className="mx-auto max-w-md">
        {/* Hero header */}
        <div className="relative">
          <div className="h-56 overflow-hidden">
            <Image
              src="/images/workout-hero.jpg"
              alt="Workout session"
              width={600}
              height={400}
              className="h-full w-full object-cover"
              priority
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 px-6 pb-6">
            <h1 className="text-2xl font-bold tracking-tight text-background">
              {"Today's Workout"}
            </h1>
            <div className="mt-3 flex items-center gap-3">
              <span className="flex items-center gap-1.5 rounded-full bg-background/10 px-3 py-1 text-xs font-medium text-background/90 backdrop-blur-sm">
                <Clock className="h-3.5 w-3.5" strokeWidth={2} />
                15 min
              </span>
              <span className="flex items-center gap-1.5 rounded-full bg-background/10 px-3 py-1 text-xs font-medium text-background/90 backdrop-blur-sm">
                <Repeat className="h-3.5 w-3.5" strokeWidth={2} />
                5 exercises
              </span>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-col gap-3 px-5 pt-5">
          {/* Progress */}
          <div className="flex items-center justify-between rounded-2xl border border-border bg-card px-5 py-4">
            <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">
              Progress
            </span>
            <div className="flex items-center gap-3">
              <div className="h-1.5 w-24 overflow-hidden rounded-full bg-muted">
                <div
                  className="h-full rounded-full bg-primary transition-all duration-500"
                  style={{ width: `${progress}%` }}
                />
              </div>
              <span className="text-xs font-bold text-foreground">
                {completedExercises.length}/{exercises.length}
              </span>
            </div>
          </div>

          {/* Exercise cards */}
          {exercises.map((exercise) => {
            const isCompleted = completedExercises.includes(exercise.id)
            return (
              <div
                key={exercise.id}
                className={`rounded-2xl border bg-card p-5 transition-all ${
                  isCompleted ? "border-border opacity-50" : "border-border"
                }`}
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="text-sm font-semibold text-foreground">
                      {exercise.name}
                    </h3>
                    <div className="mt-2 flex items-center gap-2 text-xs text-muted-foreground">
                      <span>{exercise.sets}</span>
                      <span className="text-border">{"/"}</span>
                      <span>{exercise.reps}</span>
                      <span className="text-border">{"/"}</span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-3 w-3" strokeWidth={2} />
                        {exercise.duration}
                      </span>
                    </div>
                  </div>
                  <button
                    onClick={() => toggleExercise(exercise.id)}
                    aria-label={isCompleted ? `Mark ${exercise.name} incomplete` : `Mark ${exercise.name} complete`}
                    className={`flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg transition-all active:scale-90 ${
                      isCompleted
                        ? "bg-primary"
                        : "border-2 border-border hover:border-primary/40"
                    }`}
                  >
                    {isCompleted && (
                      <Check className="h-4 w-4 text-primary-foreground" strokeWidth={3} />
                    )}
                  </button>
                </div>
              </div>
            )
          })}

          {/* Complete button */}
          <button
            disabled={!allCompleted}
            className={`mt-2 w-full rounded-2xl py-4 text-sm font-semibold transition-all ${
              allCompleted
                ? "bg-primary text-primary-foreground active:scale-[0.98]"
                : "bg-muted text-muted-foreground/40 cursor-not-allowed"
            }`}
          >
            {allCompleted ? "Workout Complete!" : "Complete all exercises"}
          </button>
        </div>
      </div>

      <BottomNav />
    </main>
  )
}
