import { FaHandPeace } from "react-icons/fa";
import Posts from "./components/Posts";
export default function Home() {
  return (
    <main className="px-6 mx-auto">
      <div className="flex justify-center mt-12 mb-12 text-xl md:text-3xl text-center dark:text-white whitespace-nowrap">
        Hello and Welcome
        <FaHandPeace className="ml-2" />
        <span className="ml-2">
          I&apos;m <span className="font-bold">Kuro</span>
        </span>
      </div>
      <Posts />
    </main>
  );
}
