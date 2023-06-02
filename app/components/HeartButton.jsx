"use client";

import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

import useFavorite from "../../app/hooks/useFavorite";

import ClientOnly from "./ClientOnly";

const HeartButton = ({ listingId, currentUser }) => {
  const { hasFavorited, toggleFavorite } = useFavorite({
    listingId,
    currentUser,
  });

  return (
    <div
      onClick={toggleFavorite}
      className="
        relative
        hover:opacity-80
        transition
        cursor-pointer
      "
    >
      <AiOutlineHeart
        size={30}
        className={`
        ${hasFavorited ? "fill-rose-500" : "fill-white"}
          absolute
          -top-[2px]
          -right-[2px]
        `}
      />
      <AiFillHeart
        size={26}
        className={hasFavorited ? "fill-rose-500" : "fill-neutral-300"}
      />
    </div>
  );
};

export default HeartButton;
