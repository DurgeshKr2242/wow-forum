import Image from "next/image";

import { RiAddFill } from "react-icons/ri";
import { AiOutlineHome } from "react-icons/ai";

import demoAvatar from "../../public/demoAvatar.webp";
import SingleQuestion from "../../components/Forum/SingleQuestion";


export default function Home() {
  return (
    <div className="flex items-start justify-center w-full text-Black bg-White">
      <div className="w-full max-w-[1200px] pt-24 flex  items-start justify-center">
        <div className="w-[20%] flex flex-col items-start gap-4">
          <p className="pl-6 font-medium">MENU</p>
          <div className="flex flex-col items-start w-full gap-1">
            <p className="flex items-center font-medium gap-4 py-2 bg-Blue/20 text-Blue w-full pl-2 border-l-[8px] border-Blue">
              <AiOutlineHome className="text-lg" /> Explore Topics
            </p>
            <p className="flex items-center w-full gap-4 py-2 pl-4 font-medium ">
              <AiOutlineHome className="text-lg" />
              My Topics
            </p>
            <p className="flex items-center w-full gap-4 py-2 pl-4 font-medium ">
              <AiOutlineHome className="text-lg" />
              My Answers
            </p>
          </div>
        </div>

        <div className="flex w-[60%] flex-col items-center justify-center gap-8">
          <SingleQuestion />
          <SingleQuestion />
          <SingleQuestion />
          <SingleQuestion />
        </div>

        <div className="w-[20%] flex flex-col items-start gap-10 pl-4">
          <button className="flex font-medium items-center gap-2 justify-center text-White bg-Blue w-full py-2.5 rounded-md">
            <RiAddFill className="text-xl" /> Start a New Topic
          </button>

          <div className="flex flex-col w-full h-full gap-4 py-6 shadow-sm">
            <p className="font-medium">Top User</p>
            {[1, 2, 3, 4, 5].map((items) => {
              return (
                <div
                  key={items}
                  className="flex items-center justify-between w-full"
                >
                  <div className="flex items-center gap-4">
                    <div className="relative w-8 h-8 rounded-full">
                      <Image
                        src={demoAvatar}
                        alt="demoAvatar"
                        fill
                        className="rounded-full"
                      />
                    </div>
                    <p className="font-medium text-Blue">Durgesh K</p>
                  </div>
                  <p>15.5k</p>
                </div>
              );
            })}
            <div className="w-full h-[1px] bg-Black/30" />
            <div className="flex items-center justify-between w-full">
              <div className="flex items-center gap-4">
                <div className="relative w-8 h-8 rounded-full">
                  <Image
                    src={demoAvatar}
                    alt="demoAvatar"
                    fill
                    className="rounded-full"
                  />
                </div>
                <p className="font-medium text-Blue">You</p>
              </div>
              <p>15.5k</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
