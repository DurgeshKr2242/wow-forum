import React from "react";
import { AiOutlineArrowUp } from "react-icons/ai";
import { RiMessage3Fill } from "react-icons/ri";
const SingleQuestion = () => {
  return (
    <div className="flex items-start justify-center w-full max-w-2xl shadow-sm hover:shadow-md gap-8 py-6 px-4">
      <div className="flex flex-col items-center justify-center gap-1">
        <button>
          <AiOutlineArrowUp className="text-xl " />
        </button>
        <p>56</p>
        <button>
          <AiOutlineArrowUp className="text-xl rotate-180" />
        </button>
      </div>

      <div className="flex flex-col gap-2">
        <div className="flex flex-col items-start justify-center border-b-[1px] border-Black/30 pb-6 gap-4">
          <p className="text-xl font-bold">What does the Fox say?</p>
          <p className="text-Black/60 text-[15px]">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus,
            placeat porro dolore quae laboriosam a vel nihil, harum molestiae
            esse alias nulla, cum pariatur fugiat! Enim quod excepturi eaque
            repudiandae. Assumenda aspernatur quaerat consequatur saepe ratione
            incidunt praesentium id alias, labore aliquam exercitationem sequi
            delectus quas ad ipsa.{" "}
          </p>
        </div>

        <div className="w-full flex justify-between items-center py-2">
          <div className="flex items-center gap-8">
            <p className="text-sm text-Black/50">
              Posted By <span className="text-Blue">Durgesh Kumar</span>
            </p>
            <p className="text-sm text-Black/50">12 hr ago</p>
          </div>

          <p className="flex text-sm items-center gap-2 text-Black/50">
            <RiMessage3Fill className="text-base" /> 50+
          </p>
        </div>
      </div>
    </div>
  );
};

export default SingleQuestion;
