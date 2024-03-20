import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "SR - About Page",
    description: "Descripcion de  la pagina de Acerca de"
};

export default function AboutPage() {
    return (
        <main className=" flex flex-col items-center justify-center p-24">
            <h1 className=" text-5xl text-red-400">About Page</h1>
        </main>
    )
};