export default function Register() {
  return (
    <>
      {" "}
      <p className="nav-btn-primary text-4xl font-black text-center pb-2">
        회원가입
      </p>
      <div className="grid sm:grid-cols-2 grid-cols-1 p-2 justify-center bg-neutral-900 mx-auto ">
        <div className="">
          <div className="flex flex-row gap-4 p-4  justify-center items-center ">
            <p className="w-40 sm:w-32">아이디</p>
            <input
              type="text"
              placeholder="아이디를 입력하세요."
              maxLength={20}
              className="bg-neutral-800 w-40 sm:w-96 p-1 rounded-sm "
            />
          </div>{" "}
          <div className="flex flex-row gap-4 p-4 justify-center items-center ">
            <p className="w-40 sm:w-32">비밀번호 확인</p>
            <input
              type="text"
              placeholder="아이디를 입력하세요."
              maxLength={20}
              className="bg-neutral-800 w-40 sm:w-96 p-1 rounded-sm "
            />
          </div>{" "}
          <div className="flex flex-row gap-4 p-4 justify-center items-center ">
            <p className="w-40 sm:w-32">닉네임</p>
            <input
              type="text"
              placeholder="아이디를 입력하세요."
              maxLength={20}
              className="bg-neutral-800 w-40 sm:w-96 p-1 rounded-sm "
            />
          </div>{" "}
          <div className="flex flex-row gap-4 p-4 justify-center items-center ">
            <p className="w-40 sm:w-32">은행</p>
            <input
              type="text"
              placeholder="아이디를 입력하세요."
              maxLength={20}
              className="bg-neutral-800 w-40 sm:w-96 p-1 rounded-sm "
            />
          </div>{" "}
          <div className="flex flex-row gap-4 p-4 justify-center items-center ">
            <p className="w-40 sm:w-32">예금주</p>
            <input
              type="text"
              placeholder="아이디를 입력하세요."
              maxLength={20}
              className="bg-neutral-800 w-40 sm:w-96 p-1 rounded-sm "
            />
          </div>{" "}
        </div>
        <div className="">
          <div className="flex flex-row gap-4 p-4 justify-center items-center ">
            <p className="w-40 sm:w-32">비밀번호</p>
            <input
              type="text"
              placeholder="아이디를 입력하세요."
              maxLength={20}
              className="bg-neutral-800 w-40 sm:w-96 p-1 rounded-sm "
            />
          </div>{" "}
          <div className="flex flex-row gap-4 p-4 justify-center items-center ">
            <p className="w-40 sm:w-32">출금 비밀번호</p>
            <input
              type="text"
              placeholder="아이디를 입력하세요."
              maxLength={20}
              className="bg-neutral-800 w-40 sm:w-96 p-1 rounded-sm "
            />
          </div>{" "}
          <div className="flex flex-row gap-4 p-4 justify-center items-center ">
            <p className="w-40 sm:w-32">전화번호</p>
            <input
              type="text"
              placeholder="아이디를 입력하세요."
              maxLength={20}
              className="bg-neutral-800 w-40 sm:w-96 p-1 rounded-sm "
            />
          </div>{" "}
          <div className="flex flex-row gap-4 p-4 justify-center items-center ">
            <p className="w-40 sm:w-32">계좌번호</p>
            <input
              type="text"
              placeholder="아이디를 입력하세요."
              maxLength={20}
              className="bg-neutral-800 w-40 sm:w-96 p-1 rounded-sm "
            />
          </div>{" "}
          <div className="flex flex-row gap-4 p-4 justify-center items-center ">
            <p className="w-40 sm:w-32">가입코드</p>
            <input
              type="text"
              placeholder="아이디를 입력하세요."
              maxLength={20}
              className="bg-neutral-800 w-40 sm:w-96 p-1 rounded-sm "
            />
          </div>{" "}
        </div>
      </div>
    </>
  );
}
