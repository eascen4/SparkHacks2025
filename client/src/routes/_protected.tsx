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
    <div className="flex min-h-screen">
      <SidebarProvider>
        <AppSidebar />
        <SidebarTrigger />
        <div className="flex-grow p-6 ml-4 flex justify-center items-center">
          <Outlet />
        </div>
      </SidebarProvider>
    </div>
  );
}
