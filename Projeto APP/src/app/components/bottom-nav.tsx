import { Link, useLocation } from "react-router";
import { Home, Dumbbell, Apple, TrendingUp, Award } from "lucide-react";

export function BottomNav() {
  const location = useLocation();

  const navItems = [
    { path: "/dashboard", icon: Home, label: "Home" },
    { path: "/workout", icon: Dumbbell, label: "Workout" },
    { path: "/nutrition", icon: Apple, label: "Nutrition" },
    { path: "/progress", icon: TrendingUp, label: "Progress" },
    { path: "/achievements", icon: Award, label: "Awards" },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white/80 backdrop-blur-xl border-t border-[#F0F1F3]">
      <div className="max-w-md mx-auto flex justify-around items-center px-4 py-1">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <Link
              key={item.path}
              to={item.path}
              className="flex flex-col items-center justify-center py-3 px-2 min-w-[64px] transition-all active:scale-95"
            >
              <div className={`mb-1 transition-all ${isActive ? 'transform scale-110' : ''}`}>
                <item.icon
                  className={`w-6 h-6 ${
                    isActive ? 'text-[#2ECC71]' : 'text-[#9CA3AF]'
                  }`}
                  strokeWidth={isActive ? 2.5 : 2}
                />
              </div>
              <span
                className={`text-[11px] font-medium ${
                  isActive ? 'text-[#2ECC71]' : 'text-[#9CA3AF]'
                }`}
              >
                {item.label}
              </span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
