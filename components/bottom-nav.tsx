"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Home, Dumbbell, Apple, TrendingUp, Award } from "lucide-react"

const navItems = [
  { path: "/dashboard", icon: Home, label: "Home" },
  { path: "/workout", icon: Dumbbell, label: "Workout" },
  { path: "/nutrition", icon: Apple, label: "Nutrition" },
  { path: "/progress", icon: TrendingUp, label: "Progress" },
  { path: "/achievements", icon: Award, label: "Awards" },
]

export function BottomNav() {
  const pathname = usePathname()

  return (
    <nav
      className="fixed bottom-0 left-0 right-0 z-50 border-t border-border/60 bg-card/90 backdrop-blur-2xl"
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="mx-auto flex max-w-md items-center justify-around px-2 pb-[env(safe-area-inset-bottom)]">
        {navItems.map((item) => {
          const isActive = pathname === item.path
          return (
            <Link
              key={item.path}
              href={item.path}
              aria-current={isActive ? "page" : undefined}
              className={`flex flex-col items-center justify-center gap-1 px-3 py-3 transition-colors ${
                isActive ? "text-primary" : "text-muted-foreground"
              }`}
            >
              <div className="relative">
                <item.icon
                  className="h-[22px] w-[22px]"
                  strokeWidth={isActive ? 2.5 : 1.8}
                />
                {isActive && (
                  <div className="absolute -bottom-1.5 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-primary" />
                )}
              </div>
              <span className="text-[10px] font-medium leading-none">
                {item.label}
              </span>
            </Link>
          )
        })}
      </div>
    </nav>
  )
}
