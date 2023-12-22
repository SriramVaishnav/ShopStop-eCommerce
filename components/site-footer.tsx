import Link from "next/link"

import { siteConfig } from "@/config/site"

export function SiteFooter() {
  return (
    <footer className="border-t">
      <div className="mx-auto max-w-7xl overflow-hidden px-6 py-12 sm:py-20 lg:px-8">
        <nav
          className="-mb-6 columns-2 sm:flex sm:justify-center sm:space-x-12"
          aria-label="Footer"
        >
          {siteConfig.footer.map((item) => (
            <div key={item.name} className="pb-6">
              <Link href={item.href} className="text-sm leading-6">
                {item.name}
              </Link>
            </div>
          ))}
        </nav>
        <p
          className="mt-10 block text-center text-sm leading-5"
        >
          &copy; {new Date().getFullYear()} Developed by <a href="https://sriramvaishnav.com" target="_blank" className="text-purple-600 hover:underline">Sriram Vaishnav</a>
        </p>
      </div>
    </footer>
  )
}
