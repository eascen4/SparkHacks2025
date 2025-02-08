import { Toaster } from "@/components/ui/toaster";
import { QueryClient } from "@tanstack/react-query";
import { createRootRoute, createRootRouteWithContext, Link, Outlet } from "@tanstack/react-router";

export const Route = createRootRouteWithContext<{
  queryClient: QueryClient
}>()({
  component: () => (<><Outlet /> <Toaster /></>)
});
