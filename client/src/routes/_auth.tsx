import { LoginForm } from '@/components/login-form'
import { createFileRoute, Outlet } from '@tanstack/react-router'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export const Route = createFileRoute('/_auth')({
  component: RouteComponent,
})

function RouteComponent() {
  return  <>
    <Card style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '100vh', width: '100vw'}}>
      <CardContent className="flex items-center space-x-4 rounded-2xl border p-[45px] shadow-lg"><LoginForm></LoginForm></CardContent>
    </Card>
  </>
}
