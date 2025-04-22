import Button from "@/components/Button";

export default function MaxButton({
  balance,
  setAmount,
  decimals,
  className,
}: {
  balance: BigInt;
  setAmount: (amount: number) => void;
  decimals?: number;
  className?: string;
}) {
  return (
    <Button
      variant="empty"
      color="text"
      square
      onClick={() => setAmount(((Number(balance) - 1)> 0 ? (Number(balance)  - 1) : 0) / 10 ** (decimals || 18))}
      className={`h-full !text-secondary hover:!text-primary text-2xl tracking-[0.03em] font-gruppo hover:cursor-pointer ${className}`}
    >
      MAX
    </Button>
  );
}
