"use client";

import { Button } from "@/components/ui/button";
import { MoonIcon, SunIcon, Menu } from "lucide-react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { useSession } from "next-auth/react";  // Import useSession
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function Navbar() {
  const { setTheme } = useTheme();
  const { data: session } = useSession();  // Use the useSession hook

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-xl font-bold">HST Ad-Deen Foundation</span>
        </Link>

        <nav className="hidden md:flex items-center space-x-6">
          <Link href="/about" className="text-foreground/60 hover:text-foreground">
            About Us
          </Link>
          <Link href="/projects" className="text-foreground/60 hover:text-foreground">
            Projects
          </Link>
          <Link href="/guidance" className="text-foreground/60 hover:text-foreground">
            Religious Guidance
          </Link>
          <Link href="/contact" className="text-foreground/60 hover:text-foreground">
            Contact
          </Link>

          {session ? (
            // If the user is signed in, display their name
            <Button variant="secondary" asChild>
                <Link href="/profile">{`Hello, ${session.user?.name}`}</Link>
            </Button>
          ) : (
            // If the user is not signed in, show the 'Sign Up' button
            <Button variant="secondary" asChild>
              <Link href="/auth/signup">Sign Up</Link>
            </Button>
          )}

          <Button variant="secondary" asChild>
            <Link href="/donate">Donate</Link>
          </Button>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon">
                <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                <span className="sr-only">Toggle theme</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => setTheme("light")}>Light</DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("dark")}>Dark</DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("system")}>System</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </nav>
      </div>
    </header>
  );
}
