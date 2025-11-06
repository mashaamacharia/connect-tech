"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, X } from "lucide-react"
import { usePathname } from "next/navigation"
import { useState } from "react"

const navLinks = [
  { href: "/services", label: "Services" },
  { href: "/talent", label: "AI Talent" },
  { href: "/industries", label: "Industries" },
  { href: "/insights", label: "Insights" },
  { href: "/media", label: "Media" },
  { href: "/about", label: "About Us" },
]

export function Header() {
  const pathname = usePathname()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const handleLinkClick = () => {
    // Close mobile menu and scroll to top will be handled by ScrollToTop component
    setIsMobileMenuOpen(false)
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/95 backdrop-blur-sm supports-[backdrop-filter]:bg-white/90 shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2" onClick={handleLinkClick}>
            <Image
              src="/images/design-mode/ctt-logo-horizontal.png"
              alt="Connect Tech+Talent Logo"
              width={180}
              height={40}
              className="h-10 w-auto"
              priority
            />
          </Link>
          <nav className="hidden items-center space-x-8 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={handleLinkClick}
                className={`text-sm font-medium transition-colors hover:text-gray-900 ${
                  pathname === link.href || (pathname.startsWith(link.href) && link.href !== "/")
                    ? "text-gray-900"
                    : "text-gray-600"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Button
              variant="outline"
              className="text-sm font-medium border-gray-300 text-gray-700 hover:bg-gray-50 bg-transparent"
              asChild
            >
              <Link href="/contact" onClick={handleLinkClick}>
                Contact Us
              </Link>
            </Button>
          </nav>
          <div className="md:hidden">
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-full max-w-xs bg-white p-6 z-50">
                <div className="mb-6 flex items-center justify-between">
                  <Link href="/" className="flex items-center space-x-2" onClick={handleLinkClick}>
                    <Image
                      src="/images/design-mode/ctt-logo-horizontal.png"
                      alt="Connect Tech+Talent Logo"
                      width={150}
                      height={33}
                      className="h-8 w-auto"
                    />
                  </Link>
                  <SheetTrigger asChild>
                    <Button variant="ghost" size="icon" onClick={handleLinkClick}>
                      <X className="h-6 w-6" />
                      <span className="sr-only">Close menu</span>
                    </Button>
                  </SheetTrigger>
                </div>
                <nav className="flex flex-col space-y-4">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={handleLinkClick}
                      className={`block rounded-md px-3 py-2 text-base font-medium transition-colors hover:bg-gray-100 ${
                        pathname === link.href || (pathname.startsWith(link.href) && link.href !== "/")
                          ? "bg-gray-100 text-gray-900"
                          : "text-gray-600 hover:text-gray-900"
                      }`}
                    >
                      {link.label}
                    </Link>
                  ))}
                  <Button
                    variant="outline"
                    className="w-full text-base font-medium border-gray-300 text-gray-700 hover:bg-gray-50 bg-transparent"
                    asChild
                  >
                    <Link href="/contact" onClick={handleLinkClick}>
                      Contact Us
                    </Link>
                  </Button>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}
