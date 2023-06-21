import { Star } from "@phosphor-icons/react";

import AvatarImage from "../assets/pessoa.png";
import CarImage from "../assets/carro.png";

export function Avatar() {
  return (
    <div className="relative flex-1">
      <div className="flex flex-col gap-1 items-center w-fit">
        <div className="relative flex justify-center w-20 h-20">
          <img
            src={AvatarImage}
            alt="Foto do motorista"
            className="w-20 h-20 rounded-full z-10 shadow-xl"
          />
          <div className="absolute text-sm rounded-full bg-[#372D3B] text-[#FBF8FC] bottom-0 flex items-center gap-1 px-3 z-10">
            <Star weight="fill" />
            <span>5.0</span>
          </div>
        </div>
        <h2 className="font-bold text-sm">Boris C.</h2>
      </div>

      <img
        className="absolute left-14 top-1/2 -translate-y-1/2 h-16"
        src={CarImage}
        alt="Carro do motorista"
      />
    </div>
  );
}
