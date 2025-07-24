import Image from "next/image";
export default function SignIn() {
  return (
    <>
      {" "}
      <p className="nav-btn-primary text-4xl font-black text-center pb-2">
        로그인
      </p>
      <div className="flex flex-col mt-5 items-center align-middle justify-center">
        {" "}
        <div className="p-4 border-2 border-yellow-800 w-96 mx-auto bg-neutral-900">
          <div className="flex flex-row mb-2">
            <button
              className="bg-[#313131] p-4"
              aria-label="아이디 입력 아이콘"
            >
              <Image
                src="/icon_profile.png"
                width={20}
                height={20}
                alt="아이디 아이콘"
              />
            </button>
            <input
              type="text"
              className="bg-[#313131] flex flex-1 font-bold text-white px-2"
              name="username"
              placeholder="아이디를 입력해주세요!"
              aria-label="아이디 입력"
            />
          </div>
          <div className="flex flex-row mb-2">
            <button
              className="bg-[#313131] p-4"
              aria-label="비밀번호 입력 아이콘"
            >
              <Image
                src="/icon_pass.png"
                width={20}
                height={20}
                alt="비밀번호 아이콘"
              />
            </button>
            <input
              type="password"
              className="bg-[#313131] flex flex-1 font-bold text-white px-2"
              name="password"
              placeholder="비밀번호를 입력해주세요!"
              aria-label="비밀번호 입력"
            />
          </div>
          {/* Login Button */}
          <button className="btn-gold-bg w-full p-2 rounded-md text-lg font-extrabold mb-2">
            로그인
          </button>
          {/* Sign-up Button */}
          <button className="btn-silver-gradient w-full p-2 rounded-md text-lg font-extrabold">
            회원가입
          </button>
        </div>
      </div>
    </>
  );
}
