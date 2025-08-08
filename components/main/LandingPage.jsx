import InputInfo from "../input_info";
import RadioGroupButtons from "@/components/radio_group";
import Image from "next/image";
import { useState } from "react";

export default function LandingPage() {
  const [radioValue, setRadioValue] = useState("metric");
  const [heightValue, setHeightValue] = useState(0);
  const [weightValue, setWeightValue] = useState(0);
  const [resultOn, setResultOn] = useState(false);
  const [bmi, setBMI] = useState();

  async function calculateBMI() {
    if (!weightValue || !heightValue) return;

    const res = await fetch("/api/bmi", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        weight: Number(weightValue),
        height: Number(heightValue),
        unit: radioValue, // or 'metric'
      }),
    });

    const data = await res.json();
    setBMI(data); // { bmi: "23.41", category: "Normal weight", unit: "imperial" }
    setResultOn(true);
  }

  return (
    <section className="relative w-full h-full items-center gap-30 px-30 py-25 flex z-10">
      {/* small thing in the back */}
      <div className="absolute w-[73%] h-[90%] bg-gradient-to-r from-white to-blue-200 z-0 top-0 left-0 rounded-br-2xl ">
        <Image src={"/Blue Globe.png"} width={100} height={100} />
      </div>

      {/* left part description */}
      <div className="flex flex-col justify-center flex-1/2 gap-4 z-40">
        {/* main text */}
        <h1 className="font-bold text-[3rem] pr-5 leading-12 text-[#243349]">
          Body Mass Index Calculator
        </h1>

        {/* sub text */}
        <p className="font-semibold text-[0.8rem] pr-3 text-[#64707a]">
          Better understand your weight in relation to your height using our
          body mass index (BM) calculator. While BMI is not the sole determinant
          of a healthy weight, it offers a valuable starting point to evaluate
          your overall health. and well-being.
        </p>
      </div>

      {/* right the calculator thing */}
      <div className="flex-col flex-1/2 justify-center z-10">
        <div className="flex flex-col py-5 px-6 rounded-md shadow-2xl gap-4 flex-1/2 z-10 bg-white">
          {/* title */}
          <h3 className="text-[#243349] font-semibold text-[1.2rem]">
            Enter your details below
          </h3>

          {/* radio section */}
          <div className="flex">
            {/* the two radio with label */}
            <RadioGroupButtons
              radioValue={radioValue}
              setRadioValue={setRadioValue}
            />
          </div>

          {/* the height and the weight */}
          <div className="flex gap-5">
            {/* two input field */}
            <InputInfo
              Label={"Height"}
              unit={radioValue == "metric" ? "cm" : "in"}
              value={heightValue}
              setValue={setHeightValue}
            />
            <InputInfo
              Label={"Weight"}
              unit={radioValue != "imperial" ? "kg" : "lbs"}
              value={weightValue}
              setValue={setWeightValue}
            />
          </div>

          {/* the final thing here the result shows */}
          {resultOn ? (
            <div
              onClick={() => {
                setBMI({});
                calculateBMI();
              }}
              className="px-5 py-6 bg-[#335ff6] rounded-r-full flex justify-around items-center gap-2 cursor-pointer"
            >
              <div className="flex flex-col">
                <h4 className="font-bold text-[0.7rem]">Your Bmi is..</h4>
                <p className="text-3xl font-bold">{bmi.bmi}</p>
              </div>

              <p className="text-[0.7rem]">
                Your BMI suggests you're a{" "}
                <span className="text-[0.8rem] font-bold">{bmi.category}</span>
              </p>
            </div>
          ) : (
            <div
              onClick={() => calculateBMI()}
              className="px-5 py-6 bg-[#335ff6] rounded-r-full flex flex-col gap-2 cursor-pointer"
            >
              <h3 className="font-semibold text-[1rem]">Welcome!</h3>
              <p className="font-bold text-[0.7rem] text-gray-300">
                Enter your height and weight and you'll see your BMI result here
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
