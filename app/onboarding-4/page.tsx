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
    <div className="min-h-screen bg-white flex flex-col items-center justify-between p-8 max-w-md mx-auto">
      {/* Skip Button */}
      <div className="w-full flex justify-end pt-2">
        <Link
          href="/goals"
          className="text-[15px] font-medium text-[#9CA3AF] hover:text-[#1F2933] transition-colors"
        >
          Skip
        </Link>
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col items-center justify-center text-center px-4">
        {/* Checklist Illustration */}
        <div className="w-full max-w-xs mb-12">
          <div className="bg-[#FAFBFC] rounded-[32px] p-6 border border-[#F0F1F3]">
            <div className="space-y-3">
              {habits.map((habit) => (
                <div
                  key={habit.id}
                  className="flex items-center gap-3 bg-white rounded-[16px] p-4 shadow-[0_2px_8px_rgba(0,0,0,0.04)] border border-[#F5F6F8]"
                >
                  <div
                    className={`w-6 h-6 rounded-[10px] flex items-center justify-center flex-shrink-0 ${
                      habit.completed
                        ? "bg-[#22C55E]"
                        : "bg-white border-[2px] border-[#E5E7EB]"
                    }`}
                  >
                    {habit.completed && (
                      <Check
                        className="w-4 h-4 text-white"
                        strokeWidth={3}
                      />
                    )}
                  </div>
                  <span
                    className={`text-[15px] font-medium ${
                      habit.completed
                        ? "text-[#9CA3AF] line-through"
                        : "text-[#1F2933]"
                    }`}
                  >
                    {habit.text}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Headline */}
        <h1 className="text-[32px] font-bold text-[#1F2933] mb-4 leading-[1.2] tracking-tight text-balance">
          {"Small daily actions create real results"}
        </h1>

        {/* Subtext */}
        <p className="text-[17px] text-[#6B7280] max-w-sm leading-relaxed font-normal">
          Build lasting habits with simple daily checklists
        </p>
      </div>

      {/* Progress Dots */}
      <div className="flex gap-2 mb-8">
        <div className="w-1 h-1 bg-[#E5E7EB] rounded-full" />
        <div className="w-1 h-1 bg-[#E5E7EB] rounded-full" />
        <div className="w-1 h-1 bg-[#E5E7EB] rounded-full" />
        <div className="w-8 h-1 bg-[#2ECC71] rounded-full" />
      </div>

      {/* CTA Button */}
      <Link
        href="/goals"
        className="w-full bg-[#2ECC71] text-white py-[18px] rounded-[20px] font-semibold text-[17px] shadow-[0_8px_30px_rgba(46,204,113,0.25)] hover:bg-[#27AE60] active:scale-[0.98] transition-all text-center"
      >
        {"I'm ready"}
      </Link>
    </div>
  )
}
