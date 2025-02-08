import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useToast } from "@/hooks/use-toast";
import { Link, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import axios from "axios";

export function LoginForm({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"form">) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { toast } = useToast();
  const navigate = useNavigate({ from: "/login" });

  const mutation = useMutation({
    mutationFn: async (data: { email: string; password: string }) => {
      const response = await axios.post("/api/auth/login", data);
      return response.data;
    },
    onSuccess: () => {
      toast({
        title: "Login Successful",
        description: "You have been logged in successfully",
      });
      navigate({ to: "/current" });
    },
    onError: (error: unknown) => {
      let errorMessage = "An unexpected error occurred";
      
      if (axios.isAxiosError(error)) {
        errorMessage = error.response?.data?.message || error.message;
      }

      toast({
        title: "Login Failed",
        description: errorMessage,
        variant: "destructive",
      });
    },
  });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    mutation.mutate({ email, password });
  };

  return (
    <form className={cn("flex flex-col gap-6", className)} {...props}>
      <div className="flex flex-col items-center gap-2 text-center">
        <h1 className="text-2xl font-bold">Login to your account</h1>
        <p className="text-balance text-sm text-muted-foreground">
          Enter your email below to login to your account
        </p>
      </div>
      <div className="grid gap-6">
        <div className="grid gap-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            placeholder="netid@uic.edu"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="grid gap-2">
          <div className="flex items-center">
            <Label htmlFor="password">Password</Label>
            <Link to="/current" className="ml-auto text-sm underline-offset-4 hover:underline">
              Forgot your password?
            </Link>
          </div>
          <Input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <Button onClick={(e) => submit(e)} className="w-full">
          Login
        </Button>
      </div>
      <div className="text-center text-sm">
        Don&apos;t have an account?{" "}
        <Link to="/signup">Sign Up</Link>
      </div>
    </form>
  );
}
