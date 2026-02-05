"use client"

import { useState } from "react"
import Image from "next/image"
import { BottomNav } from "@/components/bottom-nav"
import { Clock, Users, Check } from "lucide-react"

const recipe = {
  name: "Mediterranean Power Bowl",
  description: "Fresh, colorful and packed with nutrients",
  prepTime: "15 min",
  servings: "2 servings",
  ingredients: [
    "2 cups quinoa, cooked",
    "1 cup cherry tomatoes, halved",
    "1 cucumber, diced",
    "1/2 cup chickpeas",
    "1/4 cup feta cheese",
    "2 tbsp olive oil",
    "1 lemon, juiced",
    "Fresh herbs (parsley, mint)",
  ],
  instructions: [
    "Cook quinoa according to package directions",
    "Chop all vegetables into bite-sized pieces",
    "Combine all ingredients in a large bowl",
    "Drizzle with olive oil and lemon juice",
    "Toss gently and serve fresh",
  ],
  macros: [
    { label: "Calories", value: "420", color: "text-primary" },
    { label: "Protein", value: "25g", color: "text-chart-2" },
    { label: "Fat", value: "15g", color: "text-warning" },
  ],
}

export default function Nutrition() {
  const [madeRecipe, setMadeRecipe] = useState(false)

  return (
    <main className="min-h-dvh bg-background pb-20">
      <div className="mx-auto max-w-md">
        {/* Header */}
        <header className="px-6 pt-14 pb-2">
          <p className="text-sm font-medium text-muted-foreground">Nutrition</p>
          <h1 className="mt-1 text-2xl font-bold tracking-tight text-foreground">
            {"Today's Recipe"}
          </h1>
        </header>

        {/* Content */}
        <div className="flex flex-col gap-4 px-5 pt-4">
          {/* Recipe card */}
          <section className="overflow-hidden rounded-2xl border border-border bg-card">
            <div className="h-48 overflow-hidden">
              <Image
                src="/images/nutrition-hero.jpg"
                alt="Mediterranean Power Bowl"
                width={600}
                height={400}
                className="h-full w-full object-cover"
                priority
              />
            </div>
            <div className="p-5">
              <h2 className="text-lg font-bold tracking-tight text-foreground">
                {recipe.name}
              </h2>
              <p className="mt-1 text-sm text-muted-foreground">
                {recipe.description}
              </p>

              {/* Meta */}
              <div className="mt-4 flex items-center gap-3">
                <span className="flex items-center gap-1.5 rounded-full bg-muted px-3 py-1.5 text-xs font-medium text-muted-foreground">
                  <Clock className="h-3.5 w-3.5" strokeWidth={2} />
                  {recipe.prepTime}
                </span>
                <span className="flex items-center gap-1.5 rounded-full bg-muted px-3 py-1.5 text-xs font-medium text-muted-foreground">
                  <Users className="h-3.5 w-3.5" strokeWidth={2} />
                  {recipe.servings}
                </span>
              </div>

              {/* Macros */}
              <div className="mt-5 grid grid-cols-3 gap-0 rounded-xl border border-border overflow-hidden">
                {recipe.macros.map((macro, i) => (
                  <div
                    key={i}
                    className={`flex flex-col items-center py-4 ${
                      i < recipe.macros.length - 1 ? "border-r border-border" : ""
                    }`}
                  >
                    <span className={`text-xl font-bold tracking-tight ${macro.color}`}>
                      {macro.value}
                    </span>
                    <span className="mt-0.5 text-[10px] font-medium text-muted-foreground">
                      {macro.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Ingredients */}
          <section className="rounded-2xl border border-border bg-card p-5">
            <h3 className="mb-4 text-sm font-semibold text-foreground">
              Ingredients
            </h3>
            <ul className="flex flex-col gap-3">
              {recipe.ingredients.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-primary" />
                  <span className="text-sm leading-relaxed text-foreground">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </section>

          {/* Instructions */}
          <section className="rounded-2xl border border-border bg-card p-5">
            <h3 className="mb-4 text-sm font-semibold text-foreground">
              Instructions
            </h3>
            <ol className="flex flex-col gap-4">
              {recipe.instructions.map((step, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-foreground text-xs font-bold text-background">
                    {i + 1}
                  </span>
                  <span className="pt-0.5 text-sm leading-relaxed text-foreground">
                    {step}
                  </span>
                </li>
              ))}
            </ol>
          </section>

          {/* Action */}
          <button
            onClick={() => setMadeRecipe(!madeRecipe)}
            className={`w-full rounded-2xl py-4 text-sm font-semibold transition-all active:scale-[0.98] ${
              madeRecipe
                ? "bg-primary text-primary-foreground"
                : "bg-foreground text-background hover:opacity-90"
            }`}
          >
            {madeRecipe ? (
              <span className="flex items-center justify-center gap-2">
                <Check className="h-4 w-4" strokeWidth={3} />
                Recipe completed!
              </span>
            ) : (
              "I made this"
            )}
          </button>
        </div>
      </div>

      <BottomNav />
    </main>
  )
}
