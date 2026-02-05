import Link from "next/link"
import { ImageWithFallback } from "@/components/image-with-fallback"

export default function Onboarding1() {
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
        <div className="w-full max-w-[280px] mb-12 rounded-[32px] overflow-hidden">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1587428598275-44ed722aafa9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXRuZXNzJTIwcGVyc29uJTIwZXhlcmNpc2luZyUyMG1pbmltYWx8ZW58MXx8fHwxNzcwMzI4ODI0fDA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Person exercising at home"
            className="w-full h-72 object-cover"
          />
        </div>

        {/* Headline */}
        <h1 className="text-[32px] font-bold text-[#1F2933] mb-4 leading-[1.2] tracking-tight text-balance">
          {"Get in shape at home without confusion"}
        </h1>

        {/* Subtext */}
        <p className="text-[17px] text-[#6B7280] max-w-sm leading-relaxed font-normal">
          Simple workouts, daily habits and visual progress
        </p>
      </div>

      {/* Progress Dots */}
      <div className="flex gap-2 mb-8">
        <div className="w-8 h-1 bg-[#2ECC71] rounded-full" />
        <div className="w-1 h-1 bg-[#E5E7EB] rounded-full" />
        <div className="w-1 h-1 bg-[#E5E7EB] rounded-full" />
        <div className="w-1 h-1 bg-[#E5E7EB] rounded-full" />
      </div>

      {/* CTA Button */}
      <Link
        href="/onboarding-2"
        className="w-full bg-[#2ECC71] text-white py-[18px] rounded-[20px] font-semibold text-[17px] shadow-[0_8px_30px_rgba(46,204,113,0.25)] hover:bg-[#27AE60] active:scale-[0.98] transition-all text-center"
      >
        Start
      </Link>
    </div>
  )
}
