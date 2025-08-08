import {
  Baby,
  BicepsFlexed,
  Cake,
  PersonStanding,
  VenusAndMars,
} from "lucide-react";
import Budget from "../budget";

export default function LowerPage() {
  return (
    <section className="w-full bg-white px-25 pt-10 pb-20 flex flex-col gap-10">
      <div className="flex  gap-20">
        <div className="flex flex-col gap-6 flex-2/3">
          <h2 className="text-[#313e52] text-3xl font-bold">
            Limitations of BMI
          </h2>
          <p className="text-[#9297a6] text-[0.8rem] font-semibold ">
            Although BMI is often a practical indicator of healthy weight, it is
            not suited for every person. Specific groups should carefully
            consider their BMI out comes, and in certain cases, the measurement
            may not be beneficial to use.
          </p>
        </div>

        {/* the budget */}
        <Budget
          icon={<VenusAndMars color="#d27050" size={30} />}
          title={"Gender"}
          description={
            "The development and body fat composition of girls and boys vary with age. Consequently, a child's age and gender are considered when evaluating their BMI."
          }
        />
      </div>

      <div className="flex justify-end items-center gap-6">
        <Budget
          icon={<Cake color="#75b0ae" size={30} />}
          title={"Age"}
          description={
            "in aging individuals, increased body fat and muscle loss may cause BMI to underestimate body fat content."
          }
        />
        <Budget
          icon={<BicepsFlexed color="#a27dd7" size={30} />}
          title={"Muscle"}
          description={
            "BMI may misclassify muscular individuals as overweight or obese, as ut doesn't differentiate muscle from fat."
          }
        />
      </div>

      <div className="flex justify-center items-center gap-6">
        <Budget
          icon={<Baby color="#e5bf43" size={30} />}
          title={"Pregnancy"}
          description={
            "Expectant mothers experience weight gain due to their growing baby Maintaining a healthy pre-pregnancy BMI is advisable to minimist health risks for both mother and child."
          }
        />
        <Budget
          icon={<PersonStanding color="#c55f8a" size={30} />}
          title={"Race"}
          description={
            "Certain health concerns may affect individuals of some Black and Asian origins at lower BMIs than others, To learn more, it is advised to discuss this with your GP or practice nurse."
          }
        />
      </div>
    </section>
  );
}
