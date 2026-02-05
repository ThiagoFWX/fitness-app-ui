"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Target, TrendingUp, Calendar } from "lucide-react"

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
  {
    id: "beginner",
    title: "Beginner",
    description: "Just getting started",
  },
  {
    id: "intermediate",
    title: "Intermediate",
    description: "Some experience",
  },
]

export default function GoalSelection() {
  const router = useRouter()
  const [selectedGoal, setSelectedGoal] = useState<string | null>(null)
  const [selectedLevel, setSelectedLevel] = useState<string | null>(null)

  const handleContinue = () => {
    if (selectedGoal && selectedLevel) {
      router.push("/dashboard")
    }
  }

  return (
    <div className="min-h-screen bg-white flex flex-col p-8 max-w-md mx-auto">
      {/* Header */}
      <div className="mb-10 pt-8">
        <h1 className="text-[34px] font-bold text-[#1F2933] mb-3 tracking-tight leading-[1.1]">
          {"What's your goal?"}
        </h1>
        <p className="text-[17px] text-[#6B7280] leading-relaxed font-normal">
          {"We'll personalize your experience"}
        </p>
      </div>

      {/* Goals */}
      <div className="space-y-4 mb-10">
        {goals.map((goal) => (
          <button
            key={goal.id}
            onClick={() => setSelectedGoal(goal.id)}
            className={`w-full text-left p-6 rounded-[24px] transition-all active:scale-[0.98] ${
              selectedGoal === goal.id
                ? "bg-[#2ECC71] text-white shadow-[0_8px_30px_rgba(46,204,113,0.25)]"
                : "bg-[#FAFBFC] text-[#1F2933] hover:bg-[#F5F6F8] border border-[#F0F1F3]"
            }`}
          >
            <div className="flex items-start gap-4">
              <div
                className={`w-12 h-12 rounded-[16px] flex items-center justify-center flex-shrink-0 ${
                  selectedGoal === goal.id
                    ? "bg-white/15"
                    : "bg-white border border-[#F0F1F3]"
                }`}
              >
                <goal.icon
                  className={`w-6 h-6 ${
                    selectedGoal === goal.id ? "text-white" : "text-[#2ECC71]"
                  }`}
                  strokeWidth={2.5}
                />
              </div>
              <div className="flex-1 pt-1">
                <h3 className="font-semibold text-[18px] mb-1.5 tracking-tight">
                  {goal.title}
                </h3>
                <p
                  className={`text-[15px] leading-relaxed ${
                    selectedGoal === goal.id
                      ? "text-white/75"
                      : "text-[#6B7280]"
                  }`}
                >
                  {goal.description}
                </p>
              </div>
            </div>
          </button>
        ))}
      </div>

      {/* Level */}
      <div className="mb-10">
        <h2 className="text-[22px] font-bold text-[#1F2933] mb-5 tracking-tight">
          {"What's your level?"}
        </h2>
        <div className="space-y-4">
          {levels.map((level) => (
            <button
              key={level.id}
              onClick={() => setSelectedLevel(level.id)}
              className={`w-full text-left p-6 rounded-[24px] transition-all active:scale-[0.98] ${
                selectedLevel === level.id
                  ? "bg-[#4A90E2] text-white shadow-[0_8px_30px_rgba(74,144,226,0.25)]"
                  : "bg-[#FAFBFC] text-[#1F2933] hover:bg-[#F5F6F8] border border-[#F0F1F3]"
              }`}
            >
              <h3 className="font-semibold text-[18px] mb-1.5 tracking-tight">
                {level.title}
              </h3>
              <p
                className={`text-[15px] leading-relaxed ${
                  selectedLevel === level.id
                    ? "text-white/75"
                    : "text-[#6B7280]"
                }`}
              >
                {level.description}
              </p>
            </button>
          ))}
        </div>
      </div>

      {/* CTA Button */}
      <button
        onClick={handleContinue}
        disabled={!selectedGoal || !selectedLevel}
        className={`w-full py-[18px] rounded-[20px] font-semibold text-[17px] transition-all ${
          selectedGoal && selectedLevel
            ? "bg-[#2ECC71] text-white shadow-[0_8px_30px_rgba(46,204,113,0.25)] hover:bg-[#27AE60] active:scale-[0.98]"
            : "bg-[#F5F6F8] text-[#D1D5DB] cursor-not-allowed"
        }`}
      >
        Continue
      </button>
    </div>
  )
}
