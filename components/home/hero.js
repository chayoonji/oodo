import Animation from "./animation";
import Link from "next/link";

export default function Hero() {
  return (
    <>
      <div></div>
      <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
          안녕하세요
          <br className="hidden lg:inline-block" />
          차윤지(92113877) 포트폴리오사이트입니다.
        </h1>
        <p className="mb-8 leading-relaxed">
          made by 2022 Team [ W.W.W ] 강채린(92113437), 김솔(92113542),
          차윤지(92113877)
        </p>
        <div className="flex justify-center">
          <Link href="/about">
            <a className="btn-project">프로젝트 보러가기</a>
          </Link>
        </div>
      </div>
      <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
        <Animation />
      </div>
      <div></div>
    </>
  );
}
