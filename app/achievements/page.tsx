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
  },
  {
    id: 2,
    icon: Award,
    title: "First Workout",
    description: "Completed your first workout",
    unlocked: true,
    date: "Feb 1, 2026",
  },
  {
    id: 3,
    icon: Star,
    title: "Perfect Week",
    description: "Complete 7 days in a row",
    unlocked: false,
    date: null,
  },
  {
    id: 4,
    icon: Target,
    title: "20 Workouts",
    description: "Complete 20 total workouts",
    unlocked: false,
    date: null,
  },
  {
    id: 5,
    icon: Zap,
    title: "Early Bird",
    description: "Complete 10 morning workouts",
    unlocked: false,
    date: null,
  },
  {
    id: 6,
    icon: Trophy,
    title: "30 Day Challenge",
    description: "Complete 30 days in a row",
    unlocked: false,
    date: null,
  },
]

const unlockedCount = achievements.filter((a) => a.unlocked).length
const totalCount = achievements.length

export default function Achievements() {
  return (
    <main className="min-h-dvh bg-background pb-20">
      <div className="mx-auto max-w-md">
        {/* Header */}
        <header className="px-6 pt-14 pb-2">
          <p className="text-sm font-medium text-muted-foreground">Achievements</p>
          <h1 className="mt-1 text-2xl font-bold tracking-tight text-foreground">
            {unlockedCount} of {totalCount} unlocked
          </h1>
        </header>

        {/* Content */}
        <div className="flex flex-col gap-4 px-5 pt-4">
          {/* Streak banner */}
          <section className="rounded-2xl bg-warning p-5">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-warning-foreground/20">
                <Flame className="h-6 w-6 text-warning-foreground" strokeWidth={2} />
              </div>
              <div className="flex-1">
                <div className="flex items-baseline gap-1.5">
                  <span className="text-3xl font-bold tracking-tight text-warning-foreground">
                    5
                  </span>
                  <span className="text-sm font-medium text-warning-foreground/80">
                    day streak
                  </span>
                </div>
                <p className="mt-0.5 text-xs text-warning-foreground/60">
                  2 more for Perfect Week
                </p>
              </div>
            </div>
            <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-warning-foreground/20">
              <div
                className="h-full rounded-full bg-warning-foreground transition-all"
                style={{ width: "71%" }}
              />
            </div>
          </section>

          {/* Progress overview */}
          <section className="flex items-center justify-between rounded-2xl border border-border bg-card px-5 py-4">
            <div>
              <h2 className="text-sm font-semibold text-foreground">
                Overall Progress
              </h2>
              <p className="mt-0.5 text-xs text-muted-foreground">
                Keep going, you are doing great
              </p>
            </div>
            <span className="rounded-full bg-primary/10 px-2.5 py-1 text-xs font-bold text-primary">
              {unlockedCount}/{totalCount}
            </span>
          </section>

          {/* Achievement list */}
          <div className="flex flex-col gap-3">
            {achievements.map((a) => (
              <div
                key={a.id}
                className={`flex items-start gap-4 rounded-2xl border bg-card p-5 transition-all ${
                  a.unlocked ? "border-border" : "border-border opacity-50"
                }`}
              >
                <div
                  className={`flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl ${
                    a.unlocked ? "bg-primary" : "bg-muted"
                  }`}
                >
                  <a.icon
                    className={`h-5 w-5 ${
                      a.unlocked ? "text-primary-foreground" : "text-muted-foreground"
                    }`}
                    strokeWidth={2}
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-sm font-semibold text-foreground">
                    {a.title}
                  </h3>
                  <p className="mt-0.5 text-xs text-muted-foreground">
                    {a.description}
                  </p>
                  {a.unlocked && a.date ? (
                    <span className="mt-2 inline-flex items-center gap-1.5 rounded-full bg-muted px-2.5 py-1 text-[10px] font-medium text-muted-foreground">
                      <span className="h-1 w-1 rounded-full bg-primary" />
                      Unlocked {a.date}
                    </span>
                  ) : (
                    <span className="mt-2 inline-flex rounded-full bg-muted px-2.5 py-1 text-[10px] font-medium text-muted-foreground">
                      Locked
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Motivation */}
          <section className="rounded-2xl bg-foreground p-6 text-center">
            <Target className="mx-auto h-8 w-8 text-primary" strokeWidth={1.5} />
            <h3 className="mt-4 text-lg font-bold text-background">
              Keep pushing forward!
            </h3>
            <p className="mx-auto mt-2 max-w-[240px] text-xs leading-relaxed text-background/60">
              {"Every small step counts towards your goal. You're doing great."}
            </p>
          </section>
        </div>
      </div>

      <BottomNav />
    </main>
  )
}
