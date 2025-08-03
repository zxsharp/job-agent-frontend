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
import { useState } from "react"

export default function Signup() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleLoginClick = () => {
        navigate('/login');
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { id, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [id]: value
        }));
        // Clear error when user starts typing
        if (error) setError('');
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setError('');

        try {
            const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/auth/signup`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || 'Signup failed');
            }

            const data = await response.json();
            // Handle successful signup (e.g., store token, redirect)
            localStorage.setItem('token', data.token);
            navigate('/dashboard'); // or wherever you want to redirect after signup
        } catch (err) {
            setError(err instanceof Error ? err.message : 'An error occurred during signup');
        } finally {
            setIsLoading(false);
        }
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
                    <form onSubmit={handleSubmit}>
                        {error && (
                            <div className="mb-4 p-3 text-sm text-red-600 bg-red-50 border border-red-200 rounded-md">
                                {error}
                            </div>
                        )}
                        <div className="flex flex-col gap-6">
                            <div className="grid gap-2">
                                <Label htmlFor="email">Email</Label>
                                <Input
                                    id="email"
                                    type="email"
                                    placeholder="m@example.com"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>
                            <div className="grid gap-2">
                                <div className="flex items-center">
                                    <Label htmlFor="password">Password</Label>
                                </div>
                                <Input 
                                    id="password" 
                                    type="password" 
                                    value={formData.password}
                                    onChange={handleInputChange}
                                    required 
                                />
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
                    <Button 
                        type="submit" 
                        className="w-full cursor-pointer"
                        onClick={handleSubmit}
                        disabled={isLoading}
                    >
                        {isLoading ? 'Creating account...' : 'Create account'}
                    </Button>
                    <Button variant="outline" className="w-full cursor-pointer">
                    Register with Google
                    </Button>
                </CardFooter>
                </Card>
        </div>
    )
}