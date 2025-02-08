import { LoginForm } from '@/components/login-form'
import { Card, CardContent } from '@/components/ui/card'
import { createFileRoute } from '@tanstack/react-router'
import { motion } from "framer-motion"
import compassRose from './../../assets/compass-rose.png';

export const Route = createFileRoute('/_auth/login')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div>
      <Card style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '100vh', width: '100vw'}}>
        <CardContent className="flex-row items-center space-x-4 rounded-2xl border p-[45px] shadow-lg">
          <motion.img className="justify-self-center"
            src={compassRose}
            alt="animated image"
            style={{ width: '80px', height: '80px' }}
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 3 }}
          />
          <LoginForm></LoginForm>
        </CardContent>
      </Card>
    </div>
  )
}
