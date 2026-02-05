import Link from "next/link"
import { TrendingUp } from "lucide-react"

export default function Onboarding3() {
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
        {/* Illustration */}
        <div className="mb-12">
          {/* Body Avatar Evolution */}
          <div className="flex items-end justify-center gap-8 mb-10">
            {[
              {
                stage: "Start",
                height: "h-20",
                color: "bg-[#E5E7EB]",
                width: "w-14",
              },
              {
                stage: "Week 4",
                height: "h-24",
                color: "bg-[#4A90E2]",
                width: "w-14",
              },
              {
                stage: "Week 8",
                height: "h-32",
                color: "bg-[#2ECC71]",
                width: "w-14",
              },
            ].map((stage, index) => (
              <div key={index} className="flex flex-col items-center">
                <div
                  className={`rounded-full transition-all ${stage.width} ${stage.height} ${stage.color} shadow-[0_8px_24px_rgba(0,0,0,0.06)]`}
                />
                <div className="text-[13px] text-[#6B7280] mt-3 font-medium">
                  {stage.stage}
                </div>
              </div>
            ))}
          </div>

          {/* Progress Bar */}
          <div className="w-full max-w-xs bg-[#F5F6F8] rounded-full h-2 overflow-hidden">
            <div className="h-full w-3/4 bg-gradient-to-r from-[#4A90E2] to-[#2ECC71] rounded-full" />
          </div>
        </div>

        {/* Icon */}
        <div className="w-16 h-16 bg-[#2ECC71] rounded-[20px] flex items-center justify-center mb-8 shadow-[0_8px_30px_rgba(46,204,113,0.25)]">
          <TrendingUp className="w-8 h-8 text-white" strokeWidth={2.5} />
        </div>

        {/* Headline */}
        <h1 className="text-[32px] font-bold text-[#1F2933] mb-4 leading-[1.2] tracking-tight text-balance">
          {"See your evolution every day"}
        </h1>

        {/* Subtext */}
        <p className="text-[17px] text-[#6B7280] max-w-sm leading-relaxed font-normal">
          Visual progress tracking keeps you motivated and shows real results
        </p>
      </div>

      {/* Progress Dots */}
      <div className="flex gap-2 mb-8">
        <div className="w-1 h-1 bg-[#E5E7EB] rounded-full" />
        <div className="w-1 h-1 bg-[#E5E7EB] rounded-full" />
        <div className="w-8 h-1 bg-[#2ECC71] rounded-full" />
        <div className="w-1 h-1 bg-[#E5E7EB] rounded-full" />
      </div>

      {/* CTA Button */}
      <Link
        href="/onboarding-4"
        className="w-full bg-[#2ECC71] text-white py-[18px] rounded-[20px] font-semibold text-[17px] shadow-[0_8px_30px_rgba(46,204,113,0.25)] hover:bg-[#27AE60] active:scale-[0.98] transition-all text-center"
      >
        Continue
      </Link>
    </div>
  )
}
