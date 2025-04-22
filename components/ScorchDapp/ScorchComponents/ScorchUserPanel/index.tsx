"use client";
import {  useAccount, useReadContract } from "wagmi";
import abi from "../../abi";
import {
  ScorchAddress,
  chainId,
  ScorchDecimals
} from "@/utils/config";
import { useState } from "react";
import Image from "next/image";
import ETH from "../../../../public/images/Eth.svg";
import GradientBorder from "@/components/GradientBorder";
import ScorchInput from "./ScorchInput";
import ScorchButton from "../ScorchButton";

export default function ScorchUserPanel() {
  const { address } = useAccount();

  const [balance, setBalance] = useState(0n);
  const [amountToBurn, setAmountToBurn] = useState(0);

  const { data, error, isLoading, isError, refetch } = useReadContract({
    address: ScorchAddress,
    abi: abi,
    functionName: "balanceOf",
    args: [address ?? "0x0000000000000000000000000000000000000000"],
    chainId: chainId
  });

  const {
    data: dataEth,
    error: errorEth,
    isLoading: isLoadingEth,
    isError: isErrorEth,
    refetch: refetchEth,
  } = useReadContract({
    address: ScorchAddress,
    abi: abi,
    functionName: "getEthOut",
    args: [BigInt(amountToBurn * 10 ** ScorchDecimals)],
    chainId: chainId
  });

  return (
    <>
      <GradientBorder className="w-full">
        <div className="flex flex-col p-4 rounded bg-basebg/90">
          <div className="flex flex-col items-center justify-center gap-2">
            <ScorchInput
              balance={data ?? 0n}
              amount={amountToBurn}
              setAmount={setAmountToBurn}
              refetch={refetchEth}
            />
          </div>
          <div
            className={`my-2 flex justify-between items-center px-5 overflow-hidden rounded-md border border-secondary bg-basebg text-text font-bold `}
          >
            <div className="flex items-center justify-start w-full h-16">
                <p className="text-xl font-bold">
                   {Intl.NumberFormat("en-US", {
                    maximumSignificantDigits: 4,
                  }).format(dataEth ? Number(dataEth) / 10 ** 18 : 0)}
                </p>
            </div>
            <div className="flex items-center justify-around gap-2 ">
              <Image src={ETH} className="w-auto h-10" alt="Scorch" />
            </div>
          </div>
          <ScorchButton amount={BigInt(amountToBurn * 10 ** ScorchDecimals)} refetch={refetch} />
        </div>
      </GradientBorder>
    </>
  );
}
