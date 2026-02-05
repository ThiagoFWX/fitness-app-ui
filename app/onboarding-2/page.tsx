import Link from "next/link"
import { Dumbbell, CheckSquare, Apple } from "lucide-react"

const features = [
  {
    icon: Dumbbell,
    title: "Guided home workouts",
    description: "Follow along with easy exercises",
  },
  {
    icon: CheckSquare,
    title: "Daily checklist habits",
    description: "Build consistency with small tasks",
  },
  {
    icon: Apple,
    title: "Simple nutrition tips",
    description: "Healthy eating made easy",
  },
]

export default function Onboarding2() {
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
      <div className="flex-1 flex flex-col items-center justify-center text-center px-4 w-full">
        {/* Headline */}
        <h1 className="text-[32px] font-bold text-[#1F2933] mb-3 leading-[1.2] tracking-tight">
          How it works
        </h1>
        <p className="text-[17px] text-[#6B7280] mb-12 max-w-sm leading-relaxed font-normal">
          Three simple steps to transform your fitness
        </p>

        {/* Feature Cards */}
        <div className="w-full space-y-4 mb-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-[#FAFBFC] rounded-[24px] p-6 text-left border border-[#F0F1F3]"
            >
              <div className="w-12 h-12 bg-[#2ECC71] rounded-[16px] flex items-center justify-center mb-4 shadow-[0_4px_16px_rgba(46,204,113,0.15)]">
                <feature.icon
                  className="w-6 h-6 text-white"
                  strokeWidth={2.5}
                />
              </div>
              <h3 className="text-[18px] font-semibold text-[#1F2933] mb-2 tracking-tight">
                {feature.title}
              </h3>
              <p className="text-[15px] text-[#6B7280] leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Progress Dots */}
      <div className="flex gap-2 mb-8">
        <div className="w-1 h-1 bg-[#E5E7EB] rounded-full" />
        <div className="w-8 h-1 bg-[#2ECC71] rounded-full" />
        <div className="w-1 h-1 bg-[#E5E7EB] rounded-full" />
        <div className="w-1 h-1 bg-[#E5E7EB] rounded-full" />
      </div>

      {/* CTA Button */}
      <Link
        href="/onboarding-3"
        className="w-full bg-[#2ECC71] text-white py-[18px] rounded-[20px] font-semibold text-[17px] shadow-[0_8px_30px_rgba(46,204,113,0.25)] hover:bg-[#27AE60] active:scale-[0.98] transition-all text-center"
      >
        Continue
      </Link>
    </div>
  )
}
