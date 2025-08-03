import { Button } from "@/components/ui/button"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useNavigate } from "react-router-dom"

export default function Signup() {
    const navigate = useNavigate();

    const handleLoginClick = () => {
        navigate('/login');
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-background">
            <Card className="w-full max-w-md text-foreground bg-card">
                <CardHeader>
                    <CardTitle>Create new account</CardTitle>
                    <CardDescription>
                    Enter your email below to create your account
                    </CardDescription>
                    <CardAction>
                    <Button className="cursor-pointer" variant="link" onClick={handleLoginClick}>Log in</Button>
                    </CardAction>
                </CardHeader>
                <CardContent>
                    <form>
                    <div className="flex flex-col gap-6">
                        <div className="grid gap-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                            id="email"
                            type="email"
                            placeholder="m@example.com"
                            required
                        />
                        </div>
                        <div className="grid gap-2">
                        <div className="flex items-center">
                            <Label htmlFor="password">Password</Label>
                        </div>
                        <Input id="password" type="password" required />
                        </div>
                    </div>
                    </form>
                </CardContent>
                <CardFooter className="flex-col gap-2">
                    <div className="flex text-sm gap-1.5">
                        <div>
                            Already have an account ?
                        </div>
                        <button 
                            onClick={handleLoginClick} 
                            className="ml-auto underline inline-block text-sm underline-offset-4 hover:underline cursor-pointer bg-transparent border-none p-0"
                        >
                            Log in
                        </button>
                    </div>
                    <Button type="submit" className="w-full cursor-pointer">
                    Create account
                    </Button>
                    <Button variant="outline" className="w-full cursor-pointer">
                    Register with Google
                    </Button>
                </CardFooter>
                </Card>
        </div>
    )
}