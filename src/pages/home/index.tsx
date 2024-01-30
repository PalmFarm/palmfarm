import Image from "next/image";
import { Inter } from "next/font/google";
import { Icon } from "../../components/common/Icon";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex min-h-screen font-Pretendard flex-col mb-20 ${inter.className}`}
    >
      <div className="px-5 py-3 flex justify-between">
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/logo.svg"
          alt="PalmFarm Logo"
          width={30}
          height={25.56}
          priority
        />
        <div className="flex space-x-6">
          <Icon.Search className="stroke-slate-300" />
          <Icon.Bell className="stroke-slate-300" />
        </div>
      </div>
      <div className="z-10 max-w-5xl p-5 w-full items-center justify-between font-mono text-sm lg:flex">
        <p className="flex w-full text-xl font-Pretendard font-semibold">
          당근님이 현재 진행 중인 활동이에요
        </p>
        <div className="fixed bottom-0 left-0 flex h-fit w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="https://www.instagram.com/palmfarm_official/"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{" "}
            <Image
              src="/textlogo.svg"
              alt="PalmFarm Text Logo"
              className="dark:invert"
              width={40}
              height={24}
              priority
            />
          </a>
        </div>
      </div>

      <div className="border-b-8 px-5 border-slate-100 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
        {/* 예정 활동 Dday */}
        <div className="flex w-full items-stretch px-5 py-2 space-x-9 justify-center rounded-xl shadow-md">
          <div className="grid content-center border-2 border-brand-1 w-16 h-16 rounded-full">
            D-1
          </div>
          <div className="grid place-items-center">
            <p>양수리 딸기 체험 농장</p>
            <p className="text-xs w-fit rounded-4 border border-transparent px-6 py-1 bg-brand-2">
              준비물 확인하기
            </p>
          </div>
        </div>
        {/* 단계별 진행상황 --추후 컴포넌트화 필요*/}
        <div className="flex bg-brand-2 w-full my-8 p-5 items-end justify-center rounded-xl drop-shadow-lg">
          <div className="grid space-y-2 place-items-center">
            <p className="grid content-center bg-brand-1 w-2.5 h-2.5 rounded-full" />
            <p className="text-xs">목록 선택</p>
          </div>
          <p className="border-dashed border-t-2 h-7 border-brand-1 px-3" />
          <div className="grid space-y-2 content-center place-items-center">
            <Image
              src="/carrot.svg"
              alt="PalmFarm Carrot"
              className="pl-1 rotate-12"
              width={20}
              height={12}
              priority
            />
            <p className="grid content-center bg-brand-1 w-2.5 h-2.5 rounded-full" />
            <p className="text-xs">신청서 작성</p>
          </div>
          <p className="border-dashed border-t-2 h-7 border-slate-300 px-3" />
          <div className="grid space-y-2 place-items-center">
            <p className="grid content-center bg-slate-300 w-2.5 h-2.5 rounded-full" />
            <p className="text-xs">농촌 체험</p>
          </div>
          <p className="border-dashed border-t-2 h-7 border-slate-300 px-3" />
          <div className="grid space-y-2 place-items-center">
            <p className="grid content-center bg-slate-300 w-2.5 h-2.5 rounded-full" />
            <p className="text-xs">후기 작성</p>
          </div>
        </div>
      </div>
      <div className="border-b-8 border-slate-100 space-y-4 px-5 py-6">
        <div>
          <p className="">농촌 체험 추천 목록</p>
          <div className="flex space-x-6 text-nowrap overflow-x-scroll hide-scrollbar px-0.5 py-3.5">
            {/* 컴포넌트화 필요 */}
            <div className="flex w-fit px-3 py-2.5 space-x-9 justify-center rounded-xl shadow-md">
              스포츠
            </div>
            <div className="flex w-fit px-3 py-2.5 space-x-9 justify-center rounded-xl shadow-md">
              작물 재배
            </div>
            <div className="flex w-fit px-3 py-2.5 space-x-9 justify-center rounded-xl shadow-md">
              요리 체험
            </div>
            <div className="flex w-fit px-3 py-2.5 space-x-9 justify-center rounded-xl shadow-md">
              공예
            </div>
            <div className="flex w-fit px-3 py-2.5 space-x-9 justify-center rounded-xl shadow-md">
              공예
            </div>
          </div>
        </div>
        <div>
          <p className="">농촌 생활 컨텐츠</p>

          {/* Link tag로 감싸면 이미지 사이즈가 화면 폭에 맞게 조정됨ㅠ -> 해결 필요
          <div className="flex overflow-x-scroll hide-scrollbar py-3.5">
            <Link
              className="flex-nowrap mx-3"
              href="https://youtu.be/dLBWVtO1d2c?si=5g-t90Y3V3vKozCG"
            >
              <Image
                src="/assets/imgs/thumbnail1.png"
                alt="전과자 농활"
                className="inline-block rounded-lg"
                width={188}
                height={102}
                priority
              />
            </Link>
            <Link
              className="flex-nowrap mx-3"
              href="https://youtu.be/H6BjkYTWgg4?si=AmiFdfa35a8Bl046"
            >
              <Image
                src="/assets/imgs/thumbnail2.png"
                alt="한국외대 농활"
                className="inline-block rounded-lg"
                width={188}
                height={102}
                priority
              />
            </Link>
            <Link
              className="flex-nowrap mx-3"
              href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
            >
              <Image
                src="/assets/imgs/thumbnail2.png"
                alt="한국외대 농활"
                className="inline-block rounded-lg"
                width={188}
                height={102}
                priority
              />
            </Link>
          </div> */}

          <div className="flex flex-nowrap space-x-6 overflow-x-scroll hide-scrollbar py-3.5">
            {/* 컴포넌트화 필요 */}
            {/* <Link href="https://youtu.be/dLBWVtO1d2c?si=5g-t90Y3V3vKozCG"> */}
            <Image
              src="/assets/imgs/thumbnail1.png"
              alt="전과자 농활"
              className="rounded-lg"
              width={188}
              height={102}
              priority
            />
            {/* </Link> */}
            {/* <Link href="https://youtu.be/H6BjkYTWgg4?si=AmiFdfa35a8Bl046"> */}
            <Image
              src="/assets/imgs/thumbnail2.png"
              alt="한국외대 농활"
              className="rounded-lg"
              width={188}
              height={102}
              priority
            />
            {/* </Link>
            <Link href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"> */}
            <Image
              src="/assets/imgs/thumbnail2.png"
              alt="한국외대 농활"
              className="rounded-lg"
              width={188}
              height={102}
              priority
            />
            {/* </Link> */}
          </div>
        </div>
      </div>

      <div className="border-b-8 border-slate-100 px-5 py-6">
        <p className="">관심 목록</p>
        <div className="flex space-x-2 py-3.5">
          <div className="bg-no-repeat bg-center flex w-full items-stretch py-3 px-2 rounded-xl shadow-md">
            <Image
              src="/assets/imgs/sweetPotato.png"
              alt="PalmFarm Text Logo"
              className="rounded-lg"
              width={98}
              height={91}
            />
            <div className="pl-3 grid items-center">
              <h2>고구마캐기 체험 </h2>
              <p className="text-sm self-center">부천 그린파크 농장</p>
              <p className="text-xs truncate">
                경기 부천시 대장로 118번길 29 주목농
              </p>
            </div>
          </div>
          <p className="self-center text-sm overflow-x-hidden">더 보기{">"}</p>
        </div>
      </div>

      <div className="px-5 py-6">
        {/* 간격 전체적으로 다시 잡기 */}
        <p className="">작성한 후기</p>
        <div className="flex w-full items-stretch px-5 py-2 rounded-xl shadow-md">
          <div className="self-center p-2 rounded-xl shadow-md">
            <Icon.User />
          </div>
          <div className="pl-3 grid items-center">
            <p className="text-brand-1">★★★★☆</p>
            <div className="flex items-stretch space-x-2">
              <h2>완주 두억행복드림마을 </h2>
              <p className="border-l-2 pl-2 border-slate-300 text-xs self-center">
                2023.10.2
              </p>
            </div>
            <p className="text-xs truncate">
              도시에서 생활하는 아이들이 이런 숲 속을 잘 알지...
            </p>
          </div>
        </div>
      </div>

      {/* BottomNav - 따로 빼기 */}
      <div className="fixed bottom-0 left-0 z-50 w-full h-16 bg-white border-t border-gray-200 dark:bg-gray-700 dark:border-gray-600">
        <div className="grid h-full max-w-lg grid-cols-5 mx-auto font-medium">
          <button
            type="button"
            className="inline-flex flex-col items-center justify-center hover:bg-gray-50 dark:hover:bg-gray-800 group"
          >
            <svg
              className="w-6 h-6 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
            </svg>
            <span className="text-sm text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500">
              홈
            </span>
          </button>
          <button
            type="button"
            className="inline-flex flex-col items-center justify-center hover:bg-gray-50 dark:hover:bg-gray-800 group"
          >
            <Icon.Edit className="w-5 h-5 mb-1 stroke-gray-500" />
            <span className="text-sm text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500">
              활동 신청
            </span>
          </button>
          <button
            type="button"
            className="inline-flex flex-col items-center justify-center hover:bg-gray-50 dark:hover:bg-gray-800 group"
          >
            <Icon.Mail className="w-5 h-5 mb-1 stroke-gray-500" />
            <span className="text-sm text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500">
              커뮤니티
            </span>
          </button>
          <button
            type="button"
            className="inline-flex flex-col items-center justify-center hover:bg-gray-50 dark:hover:bg-gray-800 group"
          >
            <Icon.Home className="w-5 h-5 mb-1 stroke-gray-500" />
            <span className="text-sm text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500">
              팜팜마켓
            </span>
          </button>
          <button
            type="button"
            className="inline-flex flex-col items-center justify-center hover:bg-gray-50 dark:hover:bg-gray-800 group"
          >
            <Icon.User className="w-5 h-5 mb-1 stroke-gray-500" />
            <span className="text-sm text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500">
              프로필
            </span>
          </button>
        </div>
      </div>
    </main>
  );
}
