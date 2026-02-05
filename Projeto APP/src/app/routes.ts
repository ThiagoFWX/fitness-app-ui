import { createBrowserRouter } from "react-router";
import { Onboarding1 } from "./components/onboarding/onboarding-1";
import { Onboarding2 } from "./components/onboarding/onboarding-2";
import { Onboarding3 } from "./components/onboarding/onboarding-3";
import { Onboarding4 } from "./components/onboarding/onboarding-4";
import { GoalSelection } from "./components/goal-selection";
import { Dashboard } from "./components/dashboard";
import { Workout } from "./components/workout";
import { Nutrition } from "./components/nutrition";
import { Progress } from "./components/progress";
import { Achievements } from "./components/achievements";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Onboarding1,
  },
  {
    path: "/onboarding-2",
    Component: Onboarding2,
  },
  {
    path: "/onboarding-3",
    Component: Onboarding3,
  },
  {
    path: "/onboarding-4",
    Component: Onboarding4,
  },
  {
    path: "/goals",
    Component: GoalSelection,
  },
  {
    path: "/dashboard",
    Component: Dashboard,
  },
  {
    path: "/workout",
    Component: Workout,
  },
  {
    path: "/nutrition",
    Component: Nutrition,
  },
  {
    path: "/progress",
    Component: Progress,
  },
  {
    path: "/achievements",
    Component: Achievements,
  },
]);
