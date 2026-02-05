import { useState } from "react";
import { BottomNav } from "./bottom-nav";
import { Clock, Users, Check, ChefHat } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Nutrition() {
  const [madeRecipe, setMadeRecipe] = useState(false);

  const recipe = {
    name: "Mediterranean Power Bowl",
    description: "Fresh, colorful and packed with nutrients",
    prepTime: "15 min",
    servings: "2 servings",
    calories: "420 kcal",
    protein: "25g protein",
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
  };

  return (
    <div className="min-h-screen bg-[#FAFBFC] pb-24">
      <div className="max-w-md mx-auto">
        {/* Header */}
        <div className="bg-white px-8 pt-16 pb-8 rounded-b-[32px] border-b border-[#F0F1F3]">
          <div className="flex items-center gap-2 mb-2">
            <ChefHat className="w-6 h-6 text-[#2ECC71]" strokeWidth={2.5} />
            <h1 className="text-[28px] font-bold text-[#1F2933] tracking-tight leading-tight">
              Today's Recipe
            </h1>
          </div>
          <p className="text-[17px] text-[#6B7280] font-normal">
            Healthy eating made simple
          </p>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Recipe Card */}
          <div className="bg-white rounded-[28px] overflow-hidden border border-[#F0F1F3]">
            {/* Image */}
            <div className="h-52 overflow-hidden">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1667499745120-f9bcef8f584e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGh5JTIwbWVhbCUyMHNhbGFkJTIwYm93bHxlbnwxfHx8fDE3NzAzMjI5NjN8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Mediterranean Power Bowl"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Recipe Info */}
            <div className="p-7">
              <h2 className="text-[24px] font-bold text-[#1F2933] mb-2 tracking-tight">
                {recipe.name}
              </h2>
              <p className="text-[15px] text-[#6B7280] mb-5 leading-relaxed">
                {recipe.description}
              </p>

              {/* Meta Info */}
              <div className="flex flex-wrap gap-3 mb-6 text-[14px]">
                <div className="flex items-center gap-2 text-[#6B7280] bg-[#FAFBFC] px-3 py-2 rounded-full font-medium">
                  <Clock className="w-4 h-4" strokeWidth={2.5} />
                  <span>{recipe.prepTime}</span>
                </div>
                <div className="flex items-center gap-2 text-[#6B7280] bg-[#FAFBFC] px-3 py-2 rounded-full font-medium">
                  <Users className="w-4 h-4" strokeWidth={2.5} />
                  <span>{recipe.servings}</span>
                </div>
              </div>

              {/* Nutrition Info */}
              <div className="flex gap-0 p-1 bg-[#FAFBFC] rounded-[20px] border border-[#F0F1F3]">
                <div className="flex-1 text-center py-4">
                  <div className="text-[24px] font-bold text-[#2ECC71] tracking-tight">420</div>
                  <div className="text-[13px] text-[#9CA3AF] font-medium mt-0.5">Calories</div>
                </div>
                <div className="w-px bg-[#E5E7EB]" />
                <div className="flex-1 text-center py-4">
                  <div className="text-[24px] font-bold text-[#4A90E2] tracking-tight">25g</div>
                  <div className="text-[13px] text-[#9CA3AF] font-medium mt-0.5">Protein</div>
                </div>
                <div className="w-px bg-[#E5E7EB]" />
                <div className="flex-1 text-center py-4">
                  <div className="text-[24px] font-bold text-[#F59E0B] tracking-tight">15g</div>
                  <div className="text-[13px] text-[#9CA3AF] font-medium mt-0.5">Fat</div>
                </div>
              </div>
            </div>
          </div>

          {/* Ingredients */}
          <div className="bg-white rounded-[28px] p-7 border border-[#F0F1F3]">
            <h3 className="text-[20px] font-bold text-[#1F2933] mb-5 tracking-tight">
              Ingredients
            </h3>
            <ul className="space-y-3.5">
              {recipe.ingredients.map((ingredient, index) => (
                <li key={index} className="flex items-start gap-3.5">
                  <div className="w-1.5 h-1.5 bg-[#2ECC71] rounded-full mt-2.5 flex-shrink-0" />
                  <span className="text-[16px] text-[#1F2933] leading-relaxed">
                    {ingredient}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Instructions */}
          <div className="bg-white rounded-[28px] p-7 border border-[#F0F1F3]">
            <h3 className="text-[20px] font-bold text-[#1F2933] mb-5 tracking-tight">
              Instructions
            </h3>
            <ol className="space-y-4">
              {recipe.instructions.map((instruction, index) => (
                <li key={index} className="flex items-start gap-3.5">
                  <div className="w-7 h-7 bg-[#2ECC71] text-white rounded-full flex items-center justify-center text-[14px] font-bold flex-shrink-0">
                    {index + 1}
                  </div>
                  <span className="text-[16px] text-[#1F2933] pt-1 leading-relaxed">
                    {instruction}
                  </span>
                </li>
              ))}
            </ol>
          </div>

          {/* Action Button */}
          <button
            onClick={() => setMadeRecipe(!madeRecipe)}
            className={`w-full py-[18px] rounded-[20px] font-semibold text-[17px] transition-all ${
              madeRecipe
                ? 'bg-[#22C55E] text-white shadow-[0_8px_30px_rgba(34,197,94,0.25)] active:scale-[0.98]'
                : 'bg-[#2ECC71] text-white shadow-[0_8px_30px_rgba(46,204,113,0.25)] active:scale-[0.98] hover:bg-[#27AE60]'
            }`}
          >
            {madeRecipe ? (
              <span className="flex items-center justify-center gap-2">
                <Check className="w-5 h-5" strokeWidth={3} />
                Recipe completed! 🎉
              </span>
            ) : (
              "I made this"
            )}
          </button>
        </div>
      </div>

      <BottomNav />
    </div>
  );
}
