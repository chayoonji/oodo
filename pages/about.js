import Link from "next/link";

export default function about() {
  return (
    <>
      <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <Link href="/">
            <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
                viewBox="0 0 24 24"
              >
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
              </svg>
              <span className="ml-3 text-xl">CHA 포트폴리오</span>
            </a>
          </Link>

          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <Link href="/">
              <a className="mr-5 hover:text-gray-900">홈</a>
            </Link>

            <Link href="/about">
              <a className="mr-5 hover:text-gray-900">프로젝트</a>
            </Link>

            <a
              href="https://open.kakao.com/o/sRWIj4Se"
              className="mr-5 hover:text-gray-900"
            >
              연락하기
            </a>
          </nav>
        </div>
      </header>
      <br></br>
      <br></br>
      <br></br>
      <div className="parapa">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            1. Blog
            <br></br>
            <br className="hidden lg:inline-block" />
            개인 포트폴리오사이트입니다.{" "}
          </h1>
          <Link href="https://github.com/chayoonji/chachachablogwa.git">
            <a className="btn-project">프로젝트 보러가기</a>
          </Link>
          <p className="mb-8 leading-relaxed">
            made-2022-06
            <br></br>
            used HTML, CSS, JS
          </p>
        </div>
        <div className="dodospa">
          {" "}
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              2. Big-C-project
              <br></br>
              <br className="hidden lg:inline-block" />
              달력프로젝트입니다.
            </h1>
            <Link href="https://2022-2-calendar.vercel.app/">
              <a className="btn-project">프로젝트 보러가기</a>
            </Link>
            <p className="mb-8 leading-relaxed">
              실패했습니다.
              <br></br>
              Used Next.js
            </p>
          </div>
        </div>
        <div className="daoa">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              3. Calendar
              <br></br>
              <br className="hidden lg:inline-block" />
              팀프로젝트입니다.
            </h1>
            <Link href="https://calendartodopa.vercel.app/">
              <a className="btn-project">프로젝트 보러가기</a>
            </Link>
            <p className="mb-8 leading-relaxed">
              made-2022-12
              <br></br>
              Next.js
            </p>
          </div>
        </div>

        <div></div>
        <div className="dasda">
          <footer className="body-font">
            <div className="">
              <div className="container px-5 py-6 mx-auto flex items-center sm:flex-row flex-col">
                <Link href="/">
                  <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
                    <span className="ml-3 text-xl">CHA 포트폴리오</span>
                  </a>
                </Link>

                <p className="text-sm text-gray-500 sm:ml-6 sm:mt-0 mt-4">
                  © 2022 Tailblocks —
                  <a
                    href="https://twitter.com/knyttneve"
                    rel="noopener noreferrer"
                    className="text-gray-600 ml-1"
                    target="_blank"
                  >
                    @@@@
                  </a>
                </p>
                <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
                  <a className="text-gray-500">
                    <svg
                      fill="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                    </svg>
                  </a>
                  <a className="ml-3 text-gray-500">
                    <svg
                      fill="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                    </svg>
                  </a>
                  <a className="ml-3 text-gray-500">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <rect
                        width="20"
                        height="20"
                        x="2"
                        y="2"
                        rx="5"
                        ry="5"
                      ></rect>
                      <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                    </svg>
                  </a>
                  <a className="ml-3 text-gray-500">
                    <svg
                      fill="currentColor"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="0"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke="none"
                        d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                      ></path>
                      <circle cx="4" cy="4" r="2" stroke="none"></circle>
                    </svg>
                  </a>
                </span>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
}
