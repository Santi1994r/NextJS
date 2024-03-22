import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-evenly py-10">
       
       <h1>Aprendiendo Next!!</h1>
       <Link href="/about" className=" hover:text-cyan-700 ">About me</Link>
       <h2>--Santiago Ruiz--</h2>
    </main>
  );
}
