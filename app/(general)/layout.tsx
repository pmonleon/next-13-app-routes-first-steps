import { Navbar } from "@/components";
import { ReactNode } from "react";

type Props = {
    children: ReactNode
}

export default function GeneralLayout({
 children}:Props):JSX.Element {
  return (
    <>
      <Navbar />
      <main className="flex flex-col items-center p-24">
        <span className="text-lg">Layout anidado</span>
        { children }
      </main>
    </>
  );
}