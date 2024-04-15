import type { Metadata } from "next";

export const metadata: Metadata = {
 title: 'Contact Page',
 description: 'Esta es la página de contacto de la empresa',
};


export default function ContactPage():JSX.Element {
  return (
    <>
      <span className="text-7xl">Contact Page</span>
    </>
  )
}