import { BottomNav } from "@/components/bottom-nav"
import { Target, Zap, Calendar, Trophy } from "lucide-react"

const weeklyData = [
  { day: "Mon", value: 80, active: true },
  { day: "Tue", value: 90, active: true },
  { day: "Wed", value: 75, active: true },
  { day: "Thu", value: 85, active: true },
  { day: "Fri", value: 95, active: true },
  { day: "Sat", value: 0, active: false },
  { day: "Sun", value: 0, active: false },
]

const stats = [
  { label: "Streak", value: "5", unit: "days", icon: Target, color: "text-primary", bg: "bg-primary/10" },
  { label: "Workouts", value: "18", unit: "total", icon: Zap, color: "text-chart-2", bg: "bg-chart-2/10" },
  { label: "Active", value: "23", unit: "this mo.", icon: Calendar, color: "text-warning", bg: "bg-warning/10" },
]

export default function Progress() {
  return (
    <main className="min-h-dvh bg-background pb-20">
      <div className="mx-auto max-w-md">
        {/* Header */}
        <header className="px-6 pt-14 pb-2">
          <p className="text-sm font-medium text-muted-foreground">Progress</p>
          <h1 className="mt-1 text-2xl font-bold tracking-tight text-foreground">
            Your Progress
          </h1>
        </header>

        {/* Content */}
        <div className="flex flex-col gap-4 px-5 pt-4">
          {/* Body Evolution */}
          <section className="rounded-2xl border border-border bg-card p-6">
            <h2 className="mb-6 text-sm font-semibold text-foreground">
              Body Evolution
            </h2>
            <div className="flex items-end justify-center gap-8 mb-2">
              {[
                { label: "Week 1", h: 48, opacity: 0.25 },
                { label: "Week 4", h: 72, opacity: 0.55 },
                { label: "Week 8", h: 96, opacity: 1, current: true },
              ].map((stage, i) => (
                <div key={i} className="flex flex-col items-center gap-3">
                  <div
                    className="w-12 rounded-full bg-primary transition-all"
                    style={{ height: `${stage.h}px`, opacity: stage.opacity }}
                  />
                  <div className="flex flex-col items-center gap-1">
                    <span className="text-xs font-medium text-muted-foreground">
                      {stage.label}
                    </span>
                    {stage.current && (
                      <span className="rounded-full bg-primary/10 px-2 py-0.5 text-[10px] font-semibold text-primary">
                        Current
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Overall bar */}
            <div className="mt-6 rounded-xl bg-muted p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-medium text-muted-foreground">
                  Overall Progress
                </span>
                <span className="text-xs font-bold text-primary">75%</span>
              </div>
              <div className="h-1.5 w-full overflow-hidden rounded-full bg-background">
                <div
                  className="h-full rounded-full bg-primary transition-all"
                  style={{ width: "75%" }}
                />
              </div>
            </div>
          </section>

          {/* Weekly chart */}
          <section className="rounded-2xl border border-border bg-card p-6">
            <h2 className="mb-6 text-sm font-semibold text-foreground">
              This Week
            </h2>
            <div className="flex items-end justify-between gap-2" style={{ height: 140 }}>
              {weeklyData.map((day, i) => (
                <div key={i} className="flex flex-1 flex-col items-center gap-2">
                  <div className="flex w-full items-end justify-center" style={{ height: 110 }}>
                    <div
                      className={`w-full max-w-[32px] rounded-t-lg transition-all ${
                        day.active ? "bg-primary" : "bg-muted"
                      }`}
                      style={{
                        height: day.active ? `${(day.value / 100) * 100}%` : "12%",
                      }}
                    />
                  </div>
                  <span
                    className={`text-[10px] font-semibold ${
                      day.active ? "text-foreground" : "text-muted-foreground"
                    }`}
                  >
                    {day.day}
                  </span>
                </div>
              ))}
            </div>
            <p className="mt-4 text-center text-xs text-muted-foreground">
              Daily health score completion
            </p>
          </section>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-3">
            {stats.map((stat, i) => (
              <div
                key={i}
                className="flex flex-col items-center rounded-2xl border border-border bg-card p-4"
              >
                <div
                  className={`flex h-10 w-10 items-center justify-center rounded-xl ${stat.bg}`}
                >
                  <stat.icon className={`h-4 w-4 ${stat.color}`} strokeWidth={2} />
                </div>
                <span className="mt-3 text-xl font-bold tracking-tight text-foreground">
                  {stat.value}
                </span>
                <span className="mt-0.5 text-[10px] font-medium text-muted-foreground">
                  {stat.unit}
                </span>
              </div>
            ))}
          </div>

          {/* Milestone */}
          <section className="flex items-center gap-4 rounded-2xl bg-foreground p-5">
            <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-background">
              <Trophy className="h-5 w-5 text-warning" strokeWidth={2} />
            </div>
            <div className="flex-1">
              <h3 className="text-sm font-semibold text-background">
                Next Milestone
              </h3>
              <p className="mt-0.5 text-xs text-background/60">
                Complete 7 more workouts for a special badge!
              </p>
            </div>
          </section>
        </div>
      </div>

      <BottomNav />
    </main>
  )
}
