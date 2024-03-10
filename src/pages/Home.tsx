import SearchForm from "@/components/Form/SearchForm";
import { LogoIcon } from "@/components/Icon";

function Home() {
  return (
    <main className="w-full  bg-primary-main-gradient px-[30px]">
      <div className="mx-auto flex min-h-svh max-w-5xl flex-col items-center justify-center">
        <LogoIcon className="absolute h-[85px] w-[73px]" />

        <SearchForm />
      </div>
    </main>
  );
}

export default Home;
