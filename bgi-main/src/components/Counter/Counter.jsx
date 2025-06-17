"use client";
import Link from "next/link";
import CounterCard from "./CounterCard";

const counterData = [
  {
    id: 1,
    counterShape: "/images/star_icon.png",
    counterNumber: 500,
    counterDesc: "Total Projects Completed",
    counterSuffex: "+",
  },
  {
    id: 2,
    counterShape: "/images/star_icon.png",
    counterNumber: 480,
    counterDesc: "SATISFIED CUSTOMERS",
    counterSuffex: "+",
  },
  {
    id: 3,
    counterNumber: 4,
    counterDesc: "AVERAGE CLIENTS RATINGS",
    counterSuffex: ".7*",
  },
];

const Counter = () => {
  return (
    <section className="pt-[74px] pb-[54px] bg-BodyBg2 bg-no-repeat bg-cover bg-center">
      <div className="Container">
        <div className="grid lg:grid-cols-2 lg:items-center gap-8 lg:gap-0 pb-7">
          <div>
            <h1 className="font-FiraSans font-semibold text-white text-[16px] leading-[26px] sm:text-[25px] sm:leading-[35px] md:text-[30px] md:leading-[40px] lg:text-[38px] lg:leading-[48px] xl:text-[42px] xl:leading-[52px]">
              Start with a complimentary SEO audit
            </h1>
          </div>
          <Link href={"/about"} className="flex lg:justify-end">
            <button className="primary-btn !bg-BodyBg !text-PrimaryColor">{`Get Started Now`}</button>
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7 xl:gap-10 lg:grid-cols-3 items-center justify-center border-t-[2px] border-BorderColor2 pt-4">
          {counterData.map(
            ({
              id,
              counterShape,
              counterNumber,
              counterDesc,
              counterSuffex,
            }) => {
              return (
                <div key={id}>
                  <CounterCard
                    counterShape={counterShape}
                    counterNumber={counterNumber}
                    counterDesc={counterDesc}
                    counterSuffex={counterSuffex}
                  />
                </div>
              );
            }
          )}
        </div>
      </div>
    </section>
  );
};

export default Counter;
