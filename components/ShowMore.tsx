"use client"

import { ShowMoreProps } from "@/types"
import { useRouter } from "next/navigation"
import CustomButon from "./CustomButton";
import { updateSearchParams } from "@/utils";

const ShowMore = ({ pageNumber, isNext }: ShowMoreProps) => {
  const router = useRouter();
  const handleNav = () => {
    const newLimit = (pageNumber+1)*10;
    const newPathName = updateSearchParams("limit", `${newLimit}`);
    router.push(newPathName, { scroll: false });
  }
  return (
    <div className="gap-5 mt-10 w-full flex-center">
      {!isNext && (
        <CustomButon btnType="button" title="Show More" containerStyles="bg-primary-blue rounded-full text-white" handleClick={handleNav}/>
      )}
    </div>
  )
}

export default ShowMore