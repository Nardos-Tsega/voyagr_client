import { BiMenuAltLeft } from "react-icons/bi";
import { FaInstagram } from "react-icons/fa";

export default function Sidebar() {
  return (
    <div className="flex flex-col items-center border-r justify-between border-[#665F5B] px-2 min-h-screen py-6">
      <div className="rounded-full px-2 py-2">
        <BiMenuAltLeft size="24" />
      </div>
      <div>
        <h1 className="-rotate-90 font-monoton text-2xl">VoyagR</h1>
      </div>
      <div className="rounded-full px-2 py-2">
        <FaInstagram size="24" />
      </div>
    </div>
  );
}
