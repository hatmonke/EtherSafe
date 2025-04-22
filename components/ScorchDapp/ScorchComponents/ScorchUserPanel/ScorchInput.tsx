import { useState } from "react";
import { ScorchDecimals } from "@/utils/config";
import MaxButton from "@/components/MaxButton";
import Image from "next/image";
import OTC from "../../../../public/images/Logo.png";

type ScorchInputProps = {
    balance: bigint;
    amount: number;
    setAmount: (amount: number) => void;
    refetch?: () => void;
}


export default function ScorchInput({
    balance,
    amount,
    setAmount,
    refetch,
  }: ScorchInputProps) {
    const [error, setError] = useState(false);
    const [helperText, setHelperText] = useState("");
  
    function handleAmountChange(e: React.ChangeEvent<HTMLInputElement>) {
      const value = e.target.value;
      const parsedValue = (Number(value));
      // if not a number, return 0
      if (isNaN(parsedValue)) {
        setAmount(0);
        return;
      }
      if (parsedValue > Number(balance) / 10 ** ScorchDecimals) {
        setError(true);
        setHelperText("Insufficient balance");
      } else {
        setError(false);
        setHelperText("");
      }
      if (parsedValue === 0) {
        setAmount(0);
      } else {
        setAmount(parsedValue);
        refetch && refetch();
      }
    }
  
    return (
      <div className="flex flex-col w-full h-full">
        <div
          className={`my-2 grid grid-flow-col overflow-hidden rounded-md border border-secondary bg-basebg text-text font-bold ${
            error ? "border-red-500" : ""
          }`}
        >
          <div className="relative h-16">
            <input
              type="number"
              style={{  appearance:"textfield" }}
              min="0"
              step={0.01}
              className={`w-full rounded-l-md p-2 pl-5 text-xl bg-basebg text-text border-0 active:ring-0 focus:ring-0 focus:outline-none`}
              value={Number(amount)}
              onChange={handleAmountChange}
              aria-label="Amount to stake"
            />
            <div className="absolute text-slate-200/60 left-1/4 bottom-1">
              {Intl.NumberFormat("en-US", {
                  notation: "compact",
                  }).format(Number(balance) / 10 ** ScorchDecimals)
              }
            </div>
          </div>
          <div className="flex items-center justify-around w-full h-full gap-2 p-2 pr-5">
            <MaxButton
              balance={balance}
              setAmount={setAmount}
              decimals={ScorchDecimals}
            />
            <Image src={OTC} className="w-auto h-8" alt="Scorch" />
          </div>
        </div>
        {error ? (
          <div className="h-5">
            <p className="text-red-500">{helperText}</p>
          </div>
        ) : (
          <div className="h-5"></div>
        )}
      </div>
    );
  }
  