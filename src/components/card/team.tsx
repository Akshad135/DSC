import React from "react";
import { Separator } from "../ui/separator";

interface Props {
  person: Team;
}

const TeamCard = ({ person }: Props) => {
  return (
    <div className="space-y-2">
      <div className="bg-[#D9D9D9] h-60 rounded-tl-3xl rounded-br-3xl"></div>
      <div className="flex items-center space-x-3 ">
        <Separator className="bg-white w-7 h-[0.5px] ml-2" />
        <span className="font-light text-base">{person.position}</span>
      </div>
      <h1 className="text-2xl leading-none font-bold bg-gradient-to-b from-gradient-first via-gradient-second to-gradient-third bg-clip-text text-transparent uppercase ml-2">
        {person.name}
      </h1>
    </div>
  );
};

export default TeamCard;
