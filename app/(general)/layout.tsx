import { Metadata } from "next";
import { Navbar } from '@/components';

export const metadata: Metadata = {
  title: "SEO General",
  description: "SEO Title General",
};

export default function GeneralLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <>
          <main className=" flex flex-col items-center p-8">
            <Navbar/>
            {children}
          </main>
        </>
      </body>
    </html>
  );
}
