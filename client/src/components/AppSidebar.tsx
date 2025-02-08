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
import { motion } from "framer-motion";
import compassRose from '../assets/compass-rose.png';

const AppSidebar = () => {
  return (
    <Sidebar className="flex flex-col h-full">
      <SidebarContent className="flex-1">
        <SidebarGroup>
          <SidebarGroupLabel className="text-3xl font-bold">
            <motion.img
              src={compassRose}
              alt="Logo"
              style={{ width: '50px', height: '50px', padding: '4px' }}
            /> TradeSpark
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem className="list-none">
                <SidebarMenuButton asChild>
                  <Link to="/create" className="text-xl mt-3">Create Trade</Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem className="list-none">
                <SidebarMenuButton asChild>
                  <Link to="/current" className="text-xl">Current Trades</Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <div className="p-4 border-t">
        <SidebarMenuItem className="list-none">
          <SidebarMenuButton asChild>
            <Link to="/settings" className="flex items-center gap-2 text-xl">
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


