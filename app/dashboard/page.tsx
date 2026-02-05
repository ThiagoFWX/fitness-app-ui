"use client"

import { useState } from "react"
import Link from "next/link"
import { BottomNav } from "@/components/bottom-nav"
import { Check, ChevronRight, Sparkles } from "lucide-react"

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

  return (
    <div className="min-h-screen bg-[#FAFBFC] pb-24">
      <div className="max-w-md mx-auto">
        {/* Header */}
        <div className="bg-white px-8 pt-16 pb-8 rounded-b-[32px] border-b border-[#F0F1F3]">
          <h1 className="text-[28px] font-bold text-[#1F2933] mb-2 tracking-tight leading-tight">
            Good morning, Alex
          </h1>
          <p className="text-[17px] text-[#6B7280] font-normal">
            Ready to make today count?
          </p>
        </div>

        {/* Content */}
        <div className="p-6 space-y-5">
          {/* Health Score Circle */}
          <div className="bg-white rounded-[28px] p-8 border border-[#F0F1F3]">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-[20px] font-bold text-[#1F2933] tracking-tight">
                {"Today's Health Score"}
              </h2>
              <Sparkles
                className="w-5 h-5 text-[#2ECC71]"
                strokeWidth={2.5}
              />
            </div>
            <div className="flex items-center justify-center mb-6">
              <div className="relative w-44 h-44">
                <svg className="w-44 h-44 transform -rotate-90">
                  <circle
                    cx="88"
                    cy="88"
                    r="78"
                    stroke="#F5F6F8"
                    strokeWidth="14"
                    fill="none"
                  />
                  <circle
                    cx="88"
                    cy="88"
                    r="78"
                    stroke="#2ECC71"
                    strokeWidth="14"
                    fill="none"
                    strokeDasharray={`${2 * Math.PI * 78}`}
                    strokeDashoffset={`${
                      2 * Math.PI * 78 * (1 - healthScore / 100)
                    }`}
                    strokeLinecap="round"
                    className="transition-all duration-500"
                  />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-[48px] font-bold text-[#1F2933] tracking-tight leading-none">
                    {healthScore}
                  </span>
                  <span className="text-[15px] text-[#9CA3AF] mt-1 font-medium">
                    out of 100
                  </span>
                </div>
              </div>
            </div>
            <p className="text-center text-[15px] text-[#6B7280] leading-relaxed">
              Complete more tasks to improve your score
            </p>
          </div>

          {/* Body Avatar Preview */}
          <Link
            href="/progress"
            className="bg-gradient-to-br from-[#4A90E2] to-[#2ECC71] rounded-[28px] p-8 flex items-center justify-between active:scale-[0.98] transition-all shadow-[0_8px_30px_rgba(46,204,113,0.2)]"
          >
            <div>
              <h3 className="text-[20px] font-bold text-white mb-2 tracking-tight">
                Your Progress
              </h3>
              <p className="text-[15px] text-white/80 leading-relaxed">
                See your body transformation
              </p>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-14 h-20 bg-white/20 rounded-full backdrop-blur-sm" />
              <ChevronRight
                className="w-6 h-6 text-white"
                strokeWidth={2.5}
              />
            </div>
          </Link>

          {/* Daily Checklist */}
          <div className="bg-white rounded-[28px] p-7 border border-[#F0F1F3]">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-[20px] font-bold text-[#1F2933] tracking-tight">
                Daily Checklist
              </h2>
              <span className="text-[15px] font-semibold text-[#2ECC71] bg-[#2ECC71]/10 px-3 py-1 rounded-full">
                {completedCount}/{totalCount}
              </span>
            </div>
            <div className="space-y-3">
              {checklist.map((item) => (
                <button
                  key={item.id}
                  onClick={() => toggleTask(item.id)}
                  className="w-full flex items-center gap-3.5 p-4 rounded-[16px] hover:bg-[#FAFBFC] active:scale-[0.98] transition-all"
                >
                  <div
                    className={`w-6 h-6 rounded-[10px] flex items-center justify-center flex-shrink-0 transition-all ${
                      item.completed
                        ? "bg-[#22C55E] scale-110"
                        : "bg-white border-[2.5px] border-[#E5E7EB]"
                    }`}
                  >
                    {item.completed && (
                      <Check
                        className="w-4 h-4 text-white"
                        strokeWidth={3}
                      />
                    )}
                  </div>
                  <span
                    className={`text-[16px] text-left font-medium transition-all ${
                      item.completed
                        ? "text-[#9CA3AF] line-through"
                        : "text-[#1F2933]"
                    }`}
                  >
                    {item.text}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Quick Actions */}
          <div className="grid grid-cols-2 gap-4">
            <Link
              href="/workout"
              className="bg-white rounded-[24px] p-6 border border-[#F0F1F3] hover:border-[#2ECC71] active:scale-[0.98] transition-all"
            >
              <div className="w-12 h-12 bg-[#2ECC71]/10 rounded-[16px] flex items-center justify-center mb-4">
                <span className="text-2xl" role="img" aria-label="Workout">
                  {"💪"}
                </span>
              </div>
              <h3 className="font-semibold text-[17px] text-[#1F2933] mb-1.5 tracking-tight">
                Start Workout
              </h3>
              <p className="text-[14px] text-[#9CA3AF] leading-relaxed">
                15 min session
              </p>
            </Link>
            <Link
              href="/nutrition"
              className="bg-white rounded-[24px] p-6 border border-[#F0F1F3] hover:border-[#4A90E2] active:scale-[0.98] transition-all"
            >
              <div className="w-12 h-12 bg-[#4A90E2]/10 rounded-[16px] flex items-center justify-center mb-4">
                <span className="text-2xl" role="img" aria-label="Nutrition">
                  {"🥗"}
                </span>
              </div>
              <h3 className="font-semibold text-[17px] text-[#1F2933] mb-1.5 tracking-tight">
                {"Today's Recipe"}
              </h3>
              <p className="text-[14px] text-[#9CA3AF] leading-relaxed">
                {"Healthy & easy"}
              </p>
            </Link>
          </div>
        </div>
      </div>

      <BottomNav />
    </div>
  )
}
