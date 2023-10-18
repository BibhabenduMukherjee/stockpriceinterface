"use client";

import { Home, Plus, Settings } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";

import { cn } from "@/lib/utils";


interface SidebarProps {
  isPro: boolean;
}

export const Sidebar = () => {
  
  const router = useRouter();
  const pathname = usePathname();

  const onNavigate = (url: string, pro: boolean) => {
    // if (!pro) {
    //   return proModal.onOpen();
    // }

    return router.push(url);
  }

  const routes = [
    {
      icon: Home,
      href: '/',
      label: "Home",
      pro: true,
    },
    {
      icon: Plus,
      href: '/companion/new',
      label: "Prediction",
      pro: false,
    },
    {
      icon: Settings,
      href: '/settings',
      label: "Settings",
      pro: true,
    },
  ];

  return (
    <div className="space-y-4 flex flex-col h-full text-primary bg-secondary">
      <div className="p-4 flex-1 flex justify-center">
        <div className="space-y-2">
          {routes.map((route) => (
            <div
              onClick={() => onNavigate(route.href, route.pro)}
              key={route.href}
              className={cn(
                "text-muted-foreground text-xs group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-primary hover:bg-primary/10 rounded-lg transition",
                pathname === route.href && "bg-primary/10 text-primary",
              )}
            >
              <div className="flex flex-col gap-y-2 items-center flex-1">
                <route.icon className="h-5 w-5" />
                {route.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
//DSA what is happening with the system and you have to ove with the main