"use client"

import { useState } from "react"
import { BottomNav } from "@/components/bottom-nav"
import { Clock, Repeat, Check } from "lucide-react"
import { ImageWithFallback } from "@/components/image-with-fallback"

const exercises = [
  {
    id: 1,
    name: "Push-ups",
    sets: "3 sets",
    reps: "12 reps",
    duration: "2 min",
  },
  {
    id: 2,
    name: "Squats",
    sets: "3 sets",
    reps: "15 reps",
    duration: "3 min",
  },
  {
    id: 3,
    name: "Plank",
    sets: "3 sets",
    reps: "30 sec",
    duration: "2 min",
  },
  {
    id: 4,
    name: "Lunges",
    sets: "3 sets",
    reps: "10 each leg",
    duration: "3 min",
  },
  {
    id: 5,
    name: "Mountain climbers",
    sets: "3 sets",
    reps: "20 reps",
    duration: "2 min",
  },
]

export default function Workout() {
  const [completedExercises, setCompletedExercises] = useState<number[]>([])

  const toggleExercise = (id: number) => {
    setCompletedExercises((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    )
  }

  const allCompleted = completedExercises.length === exercises.length

  return (
    <div className="min-h-screen bg-[#FAFBFC] pb-24">
      <div className="max-w-md mx-auto">
        {/* Header with Image */}
        <div className="relative">
          <div className="h-64 overflow-hidden">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1758599879895-97aa69b6dd83?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob21lJTIwd29ya291dCUyMGV4ZXJjaXNlJTIwd29tYW58ZW58MXx8fHwxNzcwMzI4ODI0fDA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Workout"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
          <div className="absolute bottom-8 left-8 right-8">
            <h1 className="text-[34px] font-bold text-white mb-3 tracking-tight leading-tight">
              {"Today's Workout"}
            </h1>
            <div className="flex items-center gap-5 text-white/90 text-[15px] font-medium">
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-full">
                <Clock className="w-4 h-4" strokeWidth={2.5} />
                <span>15 min</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-full">
                <Repeat className="w-4 h-4" strokeWidth={2.5} />
                <span>5 exercises</span>
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 space-y-4">
          {/* Progress Banner */}
          <div className="bg-white rounded-[24px] p-5 border border-[#F0F1F3]">
            <div className="flex items-center justify-between mb-3">
              <span className="text-[15px] font-semibold text-[#6B7280]">
                Progress
              </span>
              <span className="text-[17px] font-bold text-[#2ECC71]">
                {completedExercises.length}/{exercises.length}
              </span>
            </div>
            <div className="w-full bg-[#F5F6F8] rounded-full h-2.5 overflow-hidden">
              <div
                className="h-full bg-[#2ECC71] rounded-full transition-all duration-500"
                style={{
                  width: `${(completedExercises.length / exercises.length) * 100}%`,
                }}
              />
            </div>
          </div>

          {/* Exercise Cards */}
          {exercises.map((exercise) => {
            const isCompleted = completedExercises.includes(exercise.id)
            return (
              <div
                key={exercise.id}
                className={`bg-white rounded-[24px] p-6 border transition-all ${
                  isCompleted
                    ? "opacity-50 border-[#F0F1F3]"
                    : "border-[#F0F1F3] hover:border-[#2ECC71]"
                }`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-[19px] font-bold text-[#1F2933] mb-3 tracking-tight">
                      {exercise.name}
                    </h3>
                    <div className="flex items-center gap-4 text-[14px] text-[#9CA3AF] font-medium">
                      <span>{exercise.sets}</span>
                      <span className="text-[#E5E7EB]">{"•"}</span>
                      <span>{exercise.reps}</span>
                      <span className="text-[#E5E7EB]">{"•"}</span>
                      <span className="flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5" strokeWidth={2.5} />
                        {exercise.duration}
                      </span>
                    </div>
                  </div>
                  <button
                    onClick={() => toggleExercise(exercise.id)}
                    className={`w-9 h-9 rounded-[12px] flex items-center justify-center flex-shrink-0 transition-all active:scale-95 ${
                      isCompleted
                        ? "bg-[#22C55E] scale-110"
                        : "bg-white border-[2.5px] border-[#E5E7EB] hover:border-[#2ECC71]"
                    }`}
                  >
                    {isCompleted && (
                      <Check
                        className="w-5 h-5 text-white"
                        strokeWidth={3}
                      />
                    )}
                  </button>
                </div>
              </div>
            )
          })}

          {/* Complete Button */}
          <button
            disabled={!allCompleted}
            className={`w-full py-[18px] rounded-[20px] font-semibold text-[17px] transition-all ${
              allCompleted
                ? "bg-[#2ECC71] text-white shadow-[0_8px_30px_rgba(46,204,113,0.25)] active:scale-[0.98]"
                : "bg-[#F5F6F8] text-[#D1D5DB] cursor-not-allowed"
            }`}
          >
            {allCompleted ? "Workout Complete!" : "Complete all exercises"}
          </button>
        </div>
      </div>

      <BottomNav />
    </div>
  )
}
