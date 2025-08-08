export default function Card({ title, description, icon, color }) {
  return (
    <div className="flex flex-col px-2 py-15 flex-1/3 gap-4">
      <div
        className={`size-15  rounded-full flex justify-center items-center`}
        style={{
          backgroundColor:
            color == 1
              ? "#fcddee"
              : color == 2
              ? "#f3e4d5"
              : color == 3
              ? "#c7e6e5"
              : null,
        }}
      >
        {icon}
      </div>
      <h4 className="text-[#243349] font-semibold text-[1.2rem]">{title}</h4>
      <p className="text-[#64707a] text-[0.8rem]">{description}</p>
    </div>
  );
}
