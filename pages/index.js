import LandingPage from "@/components/main/LandingPage";
import LowerPage from "@/components/main/lowerPage";
import MidPage from "@/components/main/MidPage";

export default function Home() {
  return (
    <div className="w-screen h-screen bg-white">
      {/* main container */}
      <LandingPage />
      {/* mid Part */}
      <MidPage />
      {/* lower Part */}
      <LowerPage />
    </div>
  );
}
