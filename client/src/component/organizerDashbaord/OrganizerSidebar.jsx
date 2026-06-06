"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Building2,
  CalendarPlus,
  CalendarDays,
  Users,
  Home,
  LogOut,
  Ticket,
} from "lucide-react";

const menuItems = [
  {
    title: "Overview",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Organization",
    href: "/dashboard/organization",
    icon: Building2,
  },
  {
    title: "Add Event",
    href: "/dashboard/add-event",
    icon: CalendarPlus,
  },
  {
    title: "Manage Event",
    href: "/dashboard/manage-event",
    icon: CalendarDays,
  },
  {
    title: "Attendees",
    href: "/dashboard/attendees",
    icon: Users,
  },
];

export default function OrganizerSidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-72 min-h-screen bg-black border-r border-white/10 flex flex-col justify-between p-6">
      
      {/* Top Section */}
      <div>
        {/* Logo */}
        <div className="flex items-center gap-3 mb-10">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-700 flex items-center justify-center shadow-lg shadow-cyan-500/20">
            <Ticket size={20} className="text-white" />
          </div>

          <h2 className="text-2xl font-bold bg-gradient-to-r from-cyan-500 to-blue-700 bg-clip-text text-transparent">
            Ticketo
          </h2>
        </div>

        {/* Navigation */}
        <nav className="space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon;

            const isActive =
              pathname === item.href ||
              (item.href !== "/dashboard" &&
                pathname.startsWith(item.href));

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 ${
                  isActive
                    ? "bg-gradient-to-r from-cyan-500/20 to-blue-700/20 text-cyan-400 border border-cyan-500/30"
                    : "text-gray-400 hover:text-white hover:bg-white/5"
                }`}
              >
                <Icon size={20} />
                <span className="font-medium">{item.title}</span>
              </Link>
            );
          })}
        </nav>
      </div>

      {/* Bottom Section */}
      <div className="space-y-3">
        <Link
          href="/"
          className="flex items-center gap-3 px-4 py-3 rounded-xl text-gray-400 hover:text-white hover:bg-white/5 transition"
        >
          <Home size={20} />
          <span>Back to Home</span>
        </Link>

        <button
          className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-red-400 hover:bg-red-500/10 transition"
        >
          <LogOut size={20} />
          <span>Sign Out</span>
        </button>
      </div>
    </aside>
  );
}