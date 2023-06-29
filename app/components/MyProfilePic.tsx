import Image from "next/image";

export default function MyProfilePic() {
  return (
    <section className="w-full">
      <Image
        className="mx-auto mt-8 rounded-full border-4 border-black dark:border-slate-500 shadow-black drop-shadow-xl"
        src="/images/kuro.jpeg"
        width={200}
        height={200}
        alt="Kuro Fazli"
        priority={true}
      />
    </section>
  );
}
