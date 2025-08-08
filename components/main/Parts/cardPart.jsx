import Card from "@/components/card";
import { Dumbbell, MoonStar, UtensilsCrossed } from "lucide-react";

export default function CardPart() {
  return (
    <div className="flex justify-center px-22 bg-white gap-4">
      <Card
        color={1}
        icon={<UtensilsCrossed color="#d63e80" />}
        title={"Healthy eating"}
        description={
          "Healthy eating promotes weight control, disease prevention, better digestion immunity, mental clarity, and mood."
        }
      />

      <Card
        color={2}
        icon={<Dumbbell color="#d7a674" />}
        title={"regular exercise"}
        description={
          "exercise improves fitness, aids weight control, elevates mood, and reduces disease risk, fostering wellness and longevity."
        }
      />
      <Card
        color={3}
        icon={<MoonStar color="#43aca9" />}
        title={"Adequate sleep"}
        description={
          "Sleep enhances mental clarity, emotional stability, and physical wellness, promoting overall restoration and rejuvenation."
        }
      />
    </div>
  );
}
