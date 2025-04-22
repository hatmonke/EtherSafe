"use client";
import { useReadContracts } from "wagmi";
import abi from "../abi";
import {
  ScorchAddress,
  chainId,
  ScorchDecimals,
  ScorchRewardDecimals,
  ScorchName,
  gasCoin,
} from "@/utils/config";
import { useState, useEffect } from "react";
import Image from "next/image";
import ETH from "../../../public/images/Eth.svg";
import OTC from "../../../public/images/Logo.png";
import GradientBorder from "@/components/GradientBorder";
import GradientSpan from "@/components/GradientSpan";

export default function ScorchContractPanel() {
  const [totalBurned, setTotalBurned] = useState(0);
  const [totalBurnRewards, setTotalBurnRewards] = useState(0);
  const [availableRewards, setAvailableRewards] = useState(0);

  const { data, isError, isLoading, refetch } = useReadContracts({
    contracts: [
      {
        address: ScorchAddress,
        abi: abi,
        functionName: "getStats",
        chainId: chainId,
      },
      {
        address: ScorchAddress,
        abi: abi,
        functionName: "getSafeTokenValue",
        chainId: chainId,
      },
    ],
  });
  console.log(data);
  useEffect(() => {
    if (data && data[0].result) {
      console.log(data);
      const burnStats = Object.values(
        data[0].result as unknown as bigint[]
      ) as unknown as bigint[];
      setTotalBurned(Number(burnStats[0]) / 10 ** ScorchDecimals);
      setTotalBurnRewards(Number(burnStats[1]) / 10 ** ScorchRewardDecimals);
      setAvailableRewards(Number(burnStats[2]) / 10 ** ScorchRewardDecimals);
    }
  }, [data]);

  return (
    <div className="flex flex-col gap-2">
      <div className="grid items-end grid-cols-3 gap-2 text-center">
        <div className="flex flex-col items-center justify-center gap-2">
          <h2 className="text-5xl font-gruppo">
            <GradientSpan>Burnt</GradientSpan>
          </h2>
          <GradientBorder className="w-full">
            <div className="flex flex-col p-2 rounded bg-basebg/90">
              <p className="text-text/60 font-gruppo">Total</p>
              <div className="flex flex-col items-center justify-center gap-2">
                <p className="text-3xl font-bold">
                  {Intl.NumberFormat("en-US", {
                    notation: "compact",
                    maximumFractionDigits: 0,
                  }).format(totalBurned)}{" "}
                </p>
                <Image
                  src={OTC}
                  className="max-h-[25px] w-auto"
                  alt={ScorchName}
                />
              </div>
            </div>
          </GradientBorder>
        </div>
        <div className="flex flex-col items-center justify-center col-span-2 gap-2">
          <h2 className="text-5xl font-gruppo">
            <GradientSpan>Reserves</GradientSpan>
          </h2>
          <div className="grid w-full grid-cols-2 gap-2">
            <GradientBorder className="w-full">
              <div className="flex flex-col p-2 rounded bg-basebg/90">
                <p className="text-text/60 font-gruppo">Distributed</p>
                <div className="flex flex-col items-center justify-center gap-2">
                  <p className="text-3xl font-bold">
                    {Intl.NumberFormat("en-US", {
                      notation: "compact",
                      maximumFractionDigits: 4,
                    }).format(totalBurnRewards)}{" "}
                  </p>
                  <Image
                    src={ETH}
                    className="max-h-[25px] w-auto"
                    alt={gasCoin}
                  />
                </div>
              </div>
            </GradientBorder>
            <GradientBorder className="w-full">
              <div className="flex flex-col p-2 rounded bg-basebg/90">
                <p className="text-text/60 font-gruppo">Available</p>
                <div className="flex flex-col items-center justify-center gap-2">
                  <p className="text-3xl font-bold">
                    {Intl.NumberFormat("en-US", {
                      notation: "compact",
                      maximumFractionDigits: 4,
                    }).format(availableRewards)}{" "}
                  </p>
                  <Image
                    src={ETH}
                    className="max-h-[25px] w-auto"
                    alt={gasCoin}
                  />
                </div>
              </div>
            </GradientBorder>
          </div>
        </div>
      </div>
      <GradientBorder className="">
        <div className="flex flex-col p-2 rounded bg-basebg/90">
          <p className="px-2 text-text/60 font-gruppo">Current Exchange Rate</p>
          <div className="flex flex-row items-center justify-center gap-2">
            <div className="flex items-center justify-center gap-2">
              <p className="text-3xl font-bold">1</p>
              <Image
                src={OTC}
                className="max-h-[25px] w-auto"
                alt={ScorchName}
              />
            </div>
            =
            <p className="text-3xl font-bold">
              {Intl.NumberFormat("en-US", {
                notation: "compact"
              }).format(data ? Number(data[1].result)/10**18 : 0)}{" "}
            </p>
            <Image src={ETH} className="max-h-[25px] w-auto" alt={gasCoin} />
          </div>
        </div>
      </GradientBorder>
    </div>
  );
}
