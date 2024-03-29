import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme/theme-provider";
import MaxWidthWrapper from "@/components/max-width-wrapper/max-width-wrapper";

const poppins = Poppins({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Blog Convex",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={poppins.className}>
        <ThemeProvider attribute="class" defaultTheme="system">
          <main className="min-h-screen flex flex-col items-center">
            <MaxWidthWrapper>
              <div className="flex-1 w-full flex flex-col gap-8 items-center">
                {children}
              </div>
            </MaxWidthWrapper>
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
