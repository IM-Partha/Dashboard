"use client"

import * as React from "react"
import {
  AudioWaveform,
  Bot,
  Command,
  GalleryVerticalEnd,
  LayoutGrid,
  ShoppingCart,
  Calendar,
  User,
  Copy,
  Table,
  Files,
  LayoutTemplate,
  FileText,
} from "lucide-react"

import { NavMain } from "@/components/nav-main"
import { NavUser } from "@/components/nav-user"
import { TeamSwitcher } from "@/components/team-switcher"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"

// This is sample data.
const data = {
  user: {
    name: "Partha Debnath",
    email: "randomuser@pimjo.com",
    avatar: "https://i.pravatar.cc/150?u=partha",
  },
  teams: [
    {
      name: "Dashboard",
      logo: GalleryVerticalEnd,
      plan: "Enterprise",
    },
    {
      name: "Acme Corp.",
      logo: AudioWaveform,
      plan: "Startup",
    },
    {
      name: "Evil Corp.",
      logo: Command,
      plan: "Free",
    },
  ],
  navMain: [
    {
      title: "Dashboard",
      url: "#",
      icon: LayoutGrid,
      isActive: true,
      items: [
        {
          title: "Overview",
          url: "#",
        },
      ],
    },
    {
      title: "AI Assistant",
      url: "#",
      icon: Bot,
      badge: "NEW",
      items: [
        {
          title: "Chat",
          url: "#",
        },
      ],
    },
    {
      title: "E-commerce",
      url: "#",
      icon: ShoppingCart,
      items: [
        {
          title: "Products",
          url: "#",
        },
        {
          title: "Add Products",
          url: "#",
        },
        {
          title: "Add Products",
          url: "#",
        },
      ],
    },
    {
      title: "Calendar",
      url: "#",
      icon: Calendar,
    },
    {
      title: "User Profile",
      url: "#",
      icon: User,
    },
    {
      title: "Task",
      url: "#",
      icon: Copy,
      items: [
        {
          title: "List",
          url: "#",
        },
      ],
    },
    {
      title: "Forms",
      url: "#",
      icon: FileText,
      items: [
        {
          title: "Elements",
          url: "#",
        },
      ],
    },
    {
      title: "Tables",
      url: "#",
      icon: Table,
      items: [
        {
          title: "Data Table",
          url: "#",
        },
      ],
    },
    {
      title: "Pages",
      url: "#",
      icon: Files,
      items: [
        {
          title: "Blank Page",
          url: "#",
        },
      ],
    },
    {
      title: "Layouts",
      url: "#",
      icon: LayoutTemplate,
      badge: "NEW",
      items: [
        {
          title: "Sidebar",
          url: "#",
        },
      ],
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
