/* eslint-disable react/prop-types */
// 'use client';
import Link from "next/link";

const WorkCard = ({
  workNumber,
  workIcon,
  workTitle,
  workDesc,
  workUrl,
  workBtn,
}) => {
  return (
    <div className="group px-[38px] lg:px-6 xl:px-[38px] pt-10 pb-7 rounded-lg relative z-10 overflow-hidden bg-white">
      <div className="absolute top-9 -right-14 transition-all duration-500 group-hover:right-10">
        <h6 className="font-FiraSans text-PrimaryColor text-lg relative before:absolute before:top-1/2 before:-translate-y-1/2 before:-left-9 before:bg-PrimaryColor before:w-8 before:h-[1px]">
          {workNumber}
        </h6>
      </div>
      <div className="size-[76px] rounded-full bg-BodyBg flex items-center justify-center relative z-10 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-PrimaryColor before:rounded-full before:scale-0 before:-z-10 before:transition-all before:duration-500 group-hover:before:scale-100 mb-6">
        <img
          src={workIcon}
          draggable="false"
          className="transition-all duration-500 group-hover:brightness-0 group-hover:invert-[1]"
        />
      </div>
      <Link href={workUrl} passHref >
        <button className="font-FiraSans text-left font-medium text-xl text-HeadingColor">
          {workTitle}
        </button>
      </Link>
      <p className="font-FiraSans text-TextColor2 pt-3 pb-6">{workDesc}</p>
      <Link href={workUrl} passHref >
        <button className="text-PrimaryColor text-2xl">{workBtn}</button>
      </Link>
    </div>
  );
};

export default WorkCard;
