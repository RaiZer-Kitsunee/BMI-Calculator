import { Label } from "./ui/label";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";

export default function RadioGroupButtons({ radioValue, setRadioValue }) {
  const handleChange = (value) => {
    console.log("Selected value:", value);
    setRadioValue(value);
  };

  return (
    <RadioGroup
      className={"flex gap-10"}
      defaultValue={radioValue}
      onValueChange={handleChange}
    >
      <div className="flex items-center gap-3">
        <RadioGroupItem value="metric" id="r1" />
        <Label
          className={"font-bold text-[0.9rem] text-[#243349]"}
          htmlFor="r1"
        >
          Metric
        </Label>
      </div>
      <div className="flex items-center gap-3">
        <RadioGroupItem value="imperial" id="r2" />
        <Label
          className={"font-bold text-[0.9rem] text-[#243349]"}
          htmlFor="r2"
        >
          Imperial
        </Label>
      </div>
    </RadioGroup>
  );
}
