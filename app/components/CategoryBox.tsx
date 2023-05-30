"use client";

import qs from "query-string";
import { useRouter, useSearchParams } from "next/navigation";
import { useCallback } from "react";
import { IconType } from "react-icons";

interface CategoryBoxProps {
  icon: IconType;
  label: string;
  selected?: boolean;
}

const CategoryBox: React.FC<CategoryBoxProps> = ({
  icon: Icon,
  label,
  selected,
}) => {
  const router = useRouter();
  const params = useSearchParams();

  const handleClick = useCallback(() => {
    let currentQuery = {};

    if (params) {
      currentQuery = qs.parse(params.toString());
    }

    const updatedQuery: any = {
      ...currentQuery,
      category: label,
    };

    if (params?.get("category") === label) {
      delete updatedQuery.category;
    }

    const url = qs.stringifyUrl(
      {
        url: "/",
        query: updatedQuery,
      },
      { skipNull: true }
    );

    router.push(url);
  }, [label, router, params]);

  return (
    <div
      onClick={handleClick}
      className={`
        flex 
        items-center 
        justify-center 
        gap-1
        px-3
        py-2
        rounded-md
        transition
        cursor-pointer
        mb-4
        ${selected ? "border-b-neutral-800" : "border-transparent"}
        ${selected ? "text-black" : "text-neutral-500"}
        ${selected ? "bg-gray-100" : "bg-transparent"}
      `}
    >
      <Icon size={28} />
      <div className="font-medium text-sm">{label}</div>
    </div>
  );
};

export default CategoryBox;
