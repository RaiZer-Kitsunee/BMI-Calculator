import { Input } from "./ui/input";

export default function InputInfo({ Label, value, setValue, unit }) {
  return (
    <div className="flex flex-col">
      <Label className={"text-[0.7rem] font-semibold text-gray-400"} htmlFor="">
        {Label}
      </Label>
      <div className="flex items-center border py-1 px-4 rounded-md border-gray-400">
        <Input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="border-none outline-2 p-0 m-0 shadow-none focus:outline-none text-black font-bold"
          type="number"
        />
        <p className="text-blue-400 font-bold text-[1.1rem]">{unit}</p>
      </div>
    </div>
  );
}
