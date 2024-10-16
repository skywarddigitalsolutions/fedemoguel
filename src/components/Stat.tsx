import NumberTicker from "./ui/magic/NumberTicker";

export const Stat = ({
  number,
  label,
  unit,
}: {
  number: string;
  label: string;
  unit: string;
}) => {
  return (
    <div>
      <h3 className="text-4xl font-extrabold">
        {unit !== "%" && <span className="text-rojo font-extrabold">+</span>}
        {unit === "k" ? (
          <NumberTicker value={Number(number)} decimalPlaces={2} />
        ) : (
          <NumberTicker value={Number(number)} />
        )}
        <span>{unit}</span>
      </h3>
      <div className="text-sm text-zinc-400">{label}</div>
    </div>
  );
};
