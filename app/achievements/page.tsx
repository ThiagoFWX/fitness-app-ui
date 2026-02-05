import { BottomNav } from "@/components/bottom-nav"
import { Flame, Award, Star, Target, Zap, Trophy } from "lucide-react"

const achievements = [
  {
    id: 1,
    icon: Flame,
    title: "5 Day Streak",
    description: "Completed 5 days in a row",
    unlocked: true,
    date: "Feb 5, 2026",
    color: "bg-[#F59E0B]",
  },
  {
    id: 2,
    icon: Award,
    title: "First Workout",
    description: "Completed your first workout",
    unlocked: true,
    date: "Feb 1, 2026",
    color: "bg-[#2ECC71]",
  },
  {
    id: 3,
    icon: Star,
    title: "Perfect Week",
    description: "Complete 7 days in a row",
    unlocked: false,
    date: null,
    color: "bg-[#4A90E2]",
  },
  {
    id: 4,
    icon: Target,
    title: "20 Workouts",
    description: "Complete 20 total workouts",
    unlocked: false,
    date: null,
    color: "bg-[#8B5CF6]",
  },
  {
    id: 5,
    icon: Zap,
    title: "Early Bird",
    description: "Complete 10 morning workouts",
    unlocked: false,
    date: null,
    color: "bg-[#F59E0B]",
  },
  {
    id: 6,
    icon: Trophy,
    title: "30 Day Challenge",
    description: "Complete 30 days in a row",
    unlocked: false,
    date: null,
    color: "bg-[#EF4444]",
  },
]

const unlockedCount = achievements.filter((a) => a.unlocked).length
const totalCount = achievements.length

export default function Achievements() {
  return (
    <div className="min-h-screen bg-[#FAFBFC] pb-24">
      <div className="max-w-md mx-auto">
        {/* Header */}
        <div className="bg-white px-8 pt-16 pb-8 rounded-b-[32px] border-b border-[#F0F1F3]">
          <h1 className="text-[28px] font-bold text-[#1F2933] mb-2 tracking-tight leading-tight">
            Achievements
          </h1>
          <p className="text-[17px] text-[#6B7280] font-normal">
            {unlockedCount} of {totalCount} unlocked
          </p>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Streak Banner */}
          <div className="bg-gradient-to-br from-[#F59E0B] to-[#F97316] rounded-[28px] p-8 shadow-[0_12px_40px_rgba(245,158,11,0.25)]">
            <div className="flex items-center justify-between mb-5">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-white rounded-[20px] flex items-center justify-center shadow-[0_4px_12px_rgba(0,0,0,0.1)]">
                  <Flame
                    className="w-9 h-9 text-[#F59E0B]"
                    strokeWidth={2.5}
                  />
                </div>
                <div>
                  <div className="text-[40px] font-bold text-white tracking-tight leading-none">
                    5
                  </div>
                  <div className="text-[15px] text-white/80 font-medium mt-1">
                    Day Streak
                  </div>
                </div>
              </div>
              <div className="text-right">
                <div className="text-[15px] text-white/90 mb-1 font-medium">
                  Keep going!
                </div>
                <div className="text-[13px] text-white/70">
                  2 more for Perfect Week
                </div>
              </div>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-full h-2.5 overflow-hidden">
              <div
                className="h-full bg-white rounded-full transition-all duration-500"
                style={{ width: "71%" }}
              />
            </div>
          </div>

          {/* Progress Overview */}
          <div className="bg-white rounded-[28px] p-7 border border-[#F0F1F3]">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-[20px] font-bold text-[#1F2933] tracking-tight">
                Your Progress
              </h2>
              <span className="text-[15px] font-bold text-[#2ECC71] bg-[#2ECC71]/10 px-3 py-1.5 rounded-full">
                {unlockedCount}/{totalCount}
              </span>
            </div>
            <div className="w-full bg-[#F5F6F8] rounded-full h-2.5 overflow-hidden">
              <div
                className="h-full bg-[#2ECC71] rounded-full transition-all duration-500"
                style={{
                  width: `${(unlockedCount / totalCount) * 100}%`,
                }}
              />
            </div>
          </div>

          {/* Achievements Grid */}
          <div className="space-y-4">
            <h2 className="text-[20px] font-bold text-[#1F2933] px-1 tracking-tight">
              All Achievements
            </h2>
            {achievements.map((achievement) => (
              <div
                key={achievement.id}
                className={`rounded-[24px] p-6 transition-all border ${
                  achievement.unlocked
                    ? "bg-white border-[#F0F1F3]"
                    : "bg-white/50 border-[#F0F1F3] opacity-60"
                }`}
              >
                <div className="flex items-start gap-4">
                  <div
                    className={`w-16 h-16 rounded-[20px] flex items-center justify-center flex-shrink-0 ${
                      achievement.unlocked
                        ? `${achievement.color} shadow-[0_4px_16px_rgba(0,0,0,0.15)]`
                        : "bg-[#F5F6F8]"
                    }`}
                  >
                    <achievement.icon
                      className={`w-8 h-8 ${
                        achievement.unlocked ? "text-white" : "text-[#D1D5DB]"
                      }`}
                      strokeWidth={2.5}
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-[18px] text-[#1F2933] mb-1.5 tracking-tight">
                      {achievement.title}
                    </h3>
                    <p className="text-[15px] text-[#6B7280] mb-3 leading-relaxed">
                      {achievement.description}
                    </p>
                    {achievement.unlocked && achievement.date && (
                      <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#FAFBFC] rounded-full border border-[#F0F1F3]">
                        <div className="w-1.5 h-1.5 bg-[#2ECC71] rounded-full" />
                        <span className="text-[13px] text-[#6B7280] font-medium">
                          Unlocked {achievement.date}
                        </span>
                      </div>
                    )}
                    {!achievement.unlocked && (
                      <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#F5F6F8] rounded-full">
                        <span className="text-[13px] text-[#9CA3AF] font-medium">
                          Locked
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Motivation Card */}
          <div className="bg-gradient-to-br from-[#4A90E2] to-[#2ECC71] rounded-[28px] p-8 text-center shadow-[0_12px_40px_rgba(46,204,113,0.25)]">
            <div className="text-5xl mb-4">{"🎯"}</div>
            <h3 className="text-[22px] font-bold text-white mb-3 tracking-tight">
              Keep pushing forward!
            </h3>
            <p className="text-[15px] text-white/85 leading-relaxed max-w-xs mx-auto">
              {"You're doing great. Every small step counts towards your goal."}
            </p>
          </div>
        </div>
      </div>

      <BottomNav />
    </div>
  )
}
