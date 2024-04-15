import type { Metadata } from "next";


export const metadata: Metadata = {
 title: 'SEO Title',
 description: 'SEO Title',
 keywords: ['About Page','Francisco Monleon','información'],
};


export default function AboutPage():JSX.Element {
  return (
      <span className="text-7xl">About Page</span>
  )
}