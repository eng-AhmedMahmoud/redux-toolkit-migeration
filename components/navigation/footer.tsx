import Link from "next/link";
import { Company } from "@/lib/meta";
import { Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="w-full h-16 border-t z-50 backdrop-filter backdrop-blur-xl bg-opacity-5 ">
      <div className="flex flex-wrap items-center justify-center sm:justify-between gap-4 sm:gap-0 w-full h-full px-2 sm:py-0 py-3 sm:px-4 lg:px-8 text-sm text-muted-foreground">
        <p className="text-center">
          &copy; {new Date().getFullYear()}{" "}
          <Link
            className="font-semibold"
            href={Company.link}
          >
            {Company.name}
          </Link>
          .
        </p>
        {Company.branding !== false && (
          <div className="text-center hidden md:block">
            <div className="flex justify-center space-x-4">
            <Link
              href="https://github.com/eng-AhmedMahmoud/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100"
            >
              <Github size={24} />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link
                href="https://www.linkedin.com/in/ahmed-mahmoud-abouraia/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100"
            >
              <Linkedin size={24} />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link
              href="mailto:ahmed.bis.iti@gmail.com"
              className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100"
            >
              <Mail size={24} />
              <span className="sr-only">Email</span>
            </Link>
          </div>
          </div>
        )}
      </div>
    </footer>
  );
}
