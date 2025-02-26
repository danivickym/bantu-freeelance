"use client"

import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"
import { BriefcaseIcon } from "lucide-react"
import Link from "next/link"

export function Navbar() {
  return (
    <header className="border-b">
      <nav className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
        <Link href="/" className="flex items-center space-x-2 transition-opacity hover:opacity-80">
          <BriefcaseIcon className="h-6 w-6" strokeWidth={2} aria-hidden="true" />
          <span className="font-bold text-xl">Bantu</span>
        </Link>
        
        <div className="hidden md:flex items-center space-x-6">
          <Link href="/projects" className="text-muted-foreground hover:text-foreground transition-colors duration-200">
            Find Work
          </Link>
          <Link href="/freelancers" className="text-muted-foreground hover:text-foreground transition-colors duration-200">
            Hire Freelancers
          </Link>
          <Link href="/how-it-works" className="text-muted-foreground hover:text-foreground transition-colors duration-200">
            How it Works
          </Link>
        </div>

        <div className="flex items-center space-x-4">
          <ModeToggle />
          <Button variant="outline" asChild className="transition duration-200">
            <Link href="/login">Log in</Link>
          </Button>
          <Button asChild className="transition duration-200">
            <Link href="/signup">Sign up</Link>
          </Button>
        </div>
      </nav>
    </header>
  )
}