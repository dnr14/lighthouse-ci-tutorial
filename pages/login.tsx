import { useRouter } from "next/router";

export default function LoginPage() {
  const { back } = useRouter();
  return (
    <main>
      <section>
        <h1>로그인 페이지</h1>
        <div>
          <button type={"button"} onClick={() => back()}>
            뒤로가기
          </button>
        </div>
      </section>
    </main>
  );
}
