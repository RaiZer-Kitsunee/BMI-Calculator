export default function Budget({ icon, title, description }) {
  return (
    <div className="px-5 py-7 bg-white flex flex-col shadow-2xl gap-3 rounded-md w-85">
      <div className="flex justify-start items-center gap-3 ">
        {icon}
        <h3 className="text-[#313e52] font-bold">{title}</h3>
      </div>

      <p className="text-[#9297a6] text-[0.7rem] font-semibold ">
        {description}
      </p>
    </div>
  );
}
