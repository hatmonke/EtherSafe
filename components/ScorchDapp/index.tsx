import ScorchContractPanel from "./ScorchComponents/ScorchContractPanel";
import ScorchUserPanel from "./ScorchComponents/ScorchUserPanel";

export default function ScorchDapp(){
    return(
    <>
        <div className="flex flex-col gap-2">
            <ScorchContractPanel />
            <ScorchUserPanel />
        </div>
    </>
    )
}