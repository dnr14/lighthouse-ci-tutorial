import { useRouter } from "next/router";

export default function Home() {
  const { back } = useRouter();
  return (
    <main>
      <section>
        <h1>홈 페이지</h1>
        <div>
          <button type={"button"} onClick={() => back()}>
            뒤로가기
          </button>
        </div>
      </section>
    </main>
  );
}
