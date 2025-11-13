import type { Metadata } from "next";
import "./globals.css";
import { generalSans } from "./fonts";
import Sidebar from "../components/AppSidebar";
import Navbar from "../components/Navbar";
import { ThemeProvider } from "../components/theme-provider";
import { SidebarProvider } from "@/components/ui/sidebar"
import AppSidebar from "@/components/AppSidebar";
import { cookies } from "next/headers";

export const metadata: Metadata = {
  title: "DashBoard",
  description: "NextJS DashBoard",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const cookieStore = await cookies();
  const defaultOpen = cookieStore.get("sidebar_state")?.value === "true";
  
  return (
    
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${generalSans.variable}`}
      >
        <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
        >
        <SidebarProvider defaultOpen={defaultOpen}>
          <AppSidebar />
          
          <main className="w-full">
        <Navbar />
        <div className="px-4">{children}</div>

          </main>
        </SidebarProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
