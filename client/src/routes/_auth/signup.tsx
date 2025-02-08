import { SignUpForm } from '@/components/signup-form'
import { Card, CardContent } from '@/components/ui/card'
import { createFileRoute } from '@tanstack/react-router'
import compassRose from './../../assets/compass-rose.png';
import { motion } from "framer-motion";
export const Route = createFileRoute('/_auth/signup')({
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
          <SignUpForm></SignUpForm>
        </CardContent>
      </Card>
    </div>
  )
}
