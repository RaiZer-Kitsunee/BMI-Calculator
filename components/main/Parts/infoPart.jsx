import Image from "next/image";

export default function InfoPart() {
  return (
    <div className="flex">
      {/* image */}
      <div className="flex-1/2 flex pl-10 justify-center items-center">
        <div className="relative bg-[#e7f5fe] w-[80%] h-[80%] rounded-xl flex justify-center">
          <Image
            className="absolute bottom-0"
            src={"/Hyperphagie.png"}
            width={270}
            height={100}
          />
        </div>
      </div>

      <div className="flex flex-col gap-4 flex-1/2 py-15 pl-20 pr-45">
        <h3 className="text-[#243349] text-3xl font-bold">
          What your BMI result means
        </h3>
        <p className="text-[#64707a] text-[0.8rem] font-semibold">
          A BMI range of 18.5 to 24.9 is considered a 'healthy weight'
          Maintaining a healthy weight may lover your chances of experiencing
          health issues later on, such as obesity and type 2 diabetes. Aim for a
          nutritious diet with reduced fat and sugar content, incorporating
          ample fruits and vegetables. Additionally, strive for regular physical
          activity, ideally about 30 minutes daily for five days a week.
        </p>
      </div>
    </div>
  );
}
