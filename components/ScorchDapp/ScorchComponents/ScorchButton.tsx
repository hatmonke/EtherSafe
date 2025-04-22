import Button from "@/components/Button";

import { useSimulateContract, useWriteContract, useWaitForTransactionReceipt } from 'wagmi' 

import { ScorchAddress } from "@/utils/config";

import Notification from "@/components/Notification";
import { useEffect } from "react";
import abi from "../abi";
import GradientBorder from "@/components/GradientBorder";
import GradientSpan from "@/components/GradientSpan";
import { TopAndBottomToCenter } from "@/components/Transitions";

type ScorchButtonProps = {
  refetch: () => void;
  amount: bigint;
  disabled?: boolean;
};

export default function ScorchButton({
  amount,
  refetch,
  disabled,
}: ScorchButtonProps) {
  const {
    data,
    error: prepareError,
    isError: isPrepareError,
  } = useSimulateContract({
    address: ScorchAddress,
    abi: abi,
    functionName: "useTheSafe",
    args: [amount],
  });

  const { writeContract, error, data: writeData } = useWriteContract();

  const { isLoading, isSuccess } = useWaitForTransactionReceipt({
    hash: writeData,
  });


  function onClick() {
    if (!writeContract) return;
    writeContract(data!.request);
  }

  function OnWriteError() {
    if (!error) return;
    console.log(error);
    Notification({
      success: false,
      title: "Error",
      message: `${error?.message}`,
    });
  }

  function OnWriteSuccess() {
    if (!isSuccess) return;
    Notification({
      success: true,
      title: "Success",
      message: `Transaction Sent!`,
    });
    refetch();
  }

  useEffect(() => {
    OnWriteSuccess();
  }, [isSuccess]);

  useEffect(() => {
    OnWriteError();
  }, [error]);

  return (
    <GradientBorder>
      <Button
        className="!border-0 !bg-opacity-0 group font-gruppo !text-3xl"
        size="transition"
        fullWidth
        disabled={!Boolean(data?.request) || disabled} 
        onClick={() => onClick()}
        loading={isLoading}
      >
        <TopAndBottomToCenter className="w-full px-4 py-2">
          <GradientSpan className="duration-500 group-hover:text-basebg">
            Exchange
          </GradientSpan>
        </TopAndBottomToCenter>
      </Button>
    </GradientBorder>
  );
}
