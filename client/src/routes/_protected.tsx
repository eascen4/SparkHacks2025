import AppSidebar from "@/components/AppSidebar";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { createFileRoute, Link, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/_protected")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      <SidebarProvider>
        <AppSidebar />
        <SidebarTrigger />
        <Outlet />
      </SidebarProvider>
    </>
  );
}
