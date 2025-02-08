import { LoginForm } from '@/components/login-form'
import { Card, CardContent } from '@/components/ui/card'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_auth/login')({
  component: RouteComponent,
})

function RouteComponent() {
  return <> 
    <Card style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '100vh', width: '100vw'}}>
      <CardContent className="flex items-center space-x-4 rounded-2xl border p-[45px] shadow-lg">
        <LoginForm></LoginForm>
      </CardContent>
    </Card>
  </>
}
