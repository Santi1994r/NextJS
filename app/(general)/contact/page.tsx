import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "SR - Contact Page",
    description: "Descripcion de  la pagina de Contacto"
};

export default function ContactPage() {
    return (
        <>
            <h1 className=" text-5xl text-red-400">Contact Page</h1>
        </>
    )
}