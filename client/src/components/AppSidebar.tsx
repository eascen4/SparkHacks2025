import { Link } from "@tanstack/react-router";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "./ui/sidebar";
import { GearIcon } from "@radix-ui/react-icons"; 
import { motion } from "framer-motion"
import compassRose from '../assets/compass-rose.png';

const AppSidebar = () => {
  return (
    <Sidebar className="flex flex-col h-full">
      <SidebarContent className="flex-1">
        <SidebarGroup>
          <SidebarGroupLabel className="text-2xl font-bold">
            <motion.img
              src={compassRose}
              alt="Logo"
              style={{ width: '48px', height: '48px', padding: '4px'}}
            /> TradeSpark
            </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link to="/create">Create Trade</Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link to="/current">Current Trades</Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

\      <div className="p-4 border-t">
        <SidebarMenuItem>
          <SidebarMenuButton asChild>
            <Link to="/settings" className="flex items-center gap-2">
              <GearIcon className="w-5 h-5" />
              Settings
            </Link>
          </SidebarMenuButton>
        </SidebarMenuItem>
      </div>
    </Sidebar>
  );
};

export default AppSidebar;


