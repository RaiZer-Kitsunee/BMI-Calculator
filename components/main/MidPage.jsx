import CardPart from "@/components/main/Parts/cardPart";
import InfoPart from "@/components/main/Parts/infoPart";

export default function MidPage() {
  return (
    <section className="w-full bg-white">
      <InfoPart />
      <CardPart />
    </section>
  );
}
