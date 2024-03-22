import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "SR - Pricing Page",
    description: "Descripcion de  la pagina de Precios"
};


export default function PricingPage() {
    return (
        <>
            <h1 className=" text-5xl text-red-400 p-24">Pricing Page</h1>
        </>
    )
}