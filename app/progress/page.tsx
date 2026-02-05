import { BottomNav } from "@/components/bottom-nav"
import { TrendingUp, Calendar, Target, Zap } from "lucide-react"

const weeklyData = [
  { day: "Mon", completed: true, value: 80 },
  { day: "Tue", completed: true, value: 90 },
  { day: "Wed", completed: true, value: 75 },
  { day: "Thu", completed: true, value: 85 },
  { day: "Fri", completed: true, value: 95 },
  { day: "Sat", completed: false, value: 0 },
  { day: "Sun", completed: false, value: 0 },
]

const stats = [
  {
    label: "Current Streak",
    value: "5",
    unit: "days",
    icon: Target,
    color: "text-[#2ECC71]",
    bg: "bg-[#2ECC71]/10",
  },
  {
    label: "Total Workouts",
    value: "18",
    unit: "sessions",
    icon: Zap,
    color: "text-[#4A90E2]",
    bg: "bg-[#4A90E2]/10",
  },
  {
    label: "Active Days",
    value: "23",
    unit: "this month",
    icon: Calendar,
    color: "text-[#F59E0B]",
    bg: "bg-[#F59E0B]/10",
  },
]

export default function Progress() {
  return (
    <div className="min-h-screen bg-[#FAFBFC] pb-24">
      <div className="max-w-md mx-auto">
        {/* Header */}
        <div className="bg-white px-8 pt-16 pb-8 rounded-b-[32px] border-b border-[#F0F1F3]">
          <h1 className="text-[28px] font-bold text-[#1F2933] mb-2 tracking-tight leading-tight">
            Your Progress
          </h1>
          <p className="text-[17px] text-[#6B7280] font-normal">
            Keep up the amazing work!
          </p>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Body Evolution */}
          <div className="bg-white rounded-[28px] p-8 border border-[#F0F1F3]">
            <h2 className="text-[20px] font-bold text-[#1F2933] mb-7 tracking-tight">
              Body Evolution
            </h2>
            <div className="flex items-end justify-center gap-10 mb-6">
              {[
                {
                  week: "Week 1",
                  height: "h-20",
                  color: "bg-[#E5E7EB]",
                  width: "w-14",
                },
                {
                  week: "Week 4",
                  height: "h-28",
                  color: "bg-[#4A90E2]",
                  width: "w-14",
                },
                {
                  week: "Week 8",
                  height: "h-36",
                  color: "bg-[#2ECC71]",
                  width: "w-14",
                },
              ].map((stage, index) => (
                <div key={index} className="flex flex-col items-center">
                  <div
                    className={`rounded-full transition-all ${stage.width} ${stage.height} ${stage.color} shadow-[0_8px_24px_rgba(0,0,0,0.08)]`}
                  />
                  <div className="text-[13px] text-[#9CA3AF] mt-3.5 font-semibold">
                    {stage.week}
                  </div>
                  {index === 2 && (
                    <div className="text-[12px] text-[#2ECC71] font-bold mt-1 bg-[#2ECC71]/10 px-2.5 py-0.5 rounded-full">
                      Current
                    </div>
                  )}
                </div>
              ))}
            </div>
            <div className="bg-[#FAFBFC] rounded-[20px] p-5 mt-7 border border-[#F0F1F3]">
              <div className="flex items-center justify-between mb-3">
                <span className="text-[15px] text-[#6B7280] font-semibold">
                  Overall Progress
                </span>
                <span className="text-[17px] font-bold text-[#2ECC71]">
                  75%
                </span>
              </div>
              <div className="w-full bg-white rounded-full h-2.5 overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-[#4A90E2] to-[#2ECC71] rounded-full transition-all duration-500"
                  style={{ width: "75%" }}
                />
              </div>
            </div>
          </div>

          {/* Weekly Chart */}
          <div className="bg-white rounded-[28px] p-8 border border-[#F0F1F3]">
            <h2 className="text-[20px] font-bold text-[#1F2933] mb-7 tracking-tight">
              This Week
            </h2>
            <div className="flex items-end justify-between h-48 mb-5 gap-2">
              {weeklyData.map((day, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center gap-3 flex-1"
                >
                  <div className="w-full flex items-end justify-center h-40">
                    <div
                      className={`w-full rounded-t-[12px] transition-all duration-500 ${
                        day.completed
                          ? "bg-[#2ECC71] shadow-[0_4px_12px_rgba(46,204,113,0.2)]"
                          : "bg-[#F5F6F8]"
                      }`}
                      style={{
                        height: day.completed
                          ? `${(day.value / 100) * 100}%`
                          : "15%",
                      }}
                    />
                  </div>
                  <span
                    className={`text-[13px] font-semibold ${
                      day.completed ? "text-[#1F2933]" : "text-[#9CA3AF]"
                    }`}
                  >
                    {day.day}
                  </span>
                </div>
              ))}
            </div>
            <p className="text-center text-[15px] text-[#6B7280] leading-relaxed">
              Daily health score completion
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-3 gap-4">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-white rounded-[24px] p-5 border border-[#F0F1F3] text-center"
              >
                <div
                  className={`w-12 h-12 ${stat.bg} rounded-[16px] flex items-center justify-center mx-auto mb-3`}
                >
                  <stat.icon
                    className={`w-5 h-5 ${stat.color}`}
                    strokeWidth={2.5}
                  />
                </div>
                <div className="text-[28px] font-bold text-[#1F2933] mb-1 tracking-tight leading-none">
                  {stat.value}
                </div>
                <div className="text-[11px] text-[#9CA3AF] leading-tight font-medium">
                  {stat.unit}
                </div>
              </div>
            ))}
          </div>

          {/* Milestone Card */}
          <div className="bg-gradient-to-br from-[#4A90E2] to-[#2ECC71] rounded-[28px] p-8 shadow-[0_12px_40px_rgba(46,204,113,0.25)]">
            <div className="flex items-center gap-5">
              <div className="w-16 h-16 bg-white rounded-[20px] flex items-center justify-center text-3xl flex-shrink-0 shadow-[0_4px_12px_rgba(0,0,0,0.1)]">
                {"🏆"}
              </div>
              <div className="flex-1">
                <h3 className="text-[20px] font-bold text-white mb-2 tracking-tight">
                  Next Milestone
                </h3>
                <p className="text-[15px] text-white/85 leading-relaxed">
                  Complete 7 more workouts for a special badge!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <BottomNav />
    </div>
  )
}
