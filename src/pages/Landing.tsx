import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Bot, Upload, Target, Zap, CheckCircle, ArrowRight, Menu, Moon, Sun, Star, FileText, Search, Send } from 'lucide-react'
import { Link, useNavigate } from "react-router-dom"
import { useTheme } from "@/components/theme-provider"

const Image = (props: React.ImgHTMLAttributes<HTMLImageElement>) => (
    <img {...props} />
)

export default function Landing() {

  const { theme, setTheme } = useTheme();
  const navigate = useNavigate();

  function handleThemeToggle() {
    setTheme(theme === "dark" ? "light" : "dark");
  }

  const handleLoginClick = () => {
    navigate('/login');
  };

  const handleSignUpClick = () => {
    navigate('/signup');
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <div className="flex items-center space-x-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
              <Bot className="h-5 w-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold">JobAgent AI</span>
          </div>

          <nav className="hidden md:flex items-center space-x-6">
            <Link to="#features" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Features
            </Link>
            <Link to="#how-it-works" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              How It Works
            </Link>
            <Link to="#testimonials" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Success Stories
            </Link>
            <Link to="#pricing" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Pricing
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            <Button 
                variant="outline" 
                size="icon" 
                className="cursor-pointer"
                onClick={() => handleThemeToggle()}
            >
                <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
                <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
                <span className="sr-only">Toggle theme</span>
            </Button>
            <Button variant="ghost" size="sm" className="hidden md:inline-flex cursor-pointer" onClick={handleLoginClick}>
              Log In
            </Button>
            <Button className="cursor-pointer" size="sm" onClick={handleSignUpClick}>Create Account</Button>
            <Button variant="ghost" size="sm" className="md:hidden cursor-pointer">
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 md:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <Badge variant="secondary" className="w-fit bg-primary/10 text-primary hover:bg-primary/20">
                  🤖 AI-Powered Job Search
                </Badge>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Your AI Agent Finds & Applies to Jobs While You Sleep
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Upload your resume and let our AI agent automatically find, optimize, and apply to jobs that match your skills. 
                  Get higher ATS scores and land more interviews.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button size="lg" className="h-12 px-8 cursor-pointer" onClick={handleSignUpClick}>
                  <Upload className="mr-2 h-4 w-4" />
                  Upload Resume & Start
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button variant="outline" size="lg" className="h-12 px-8 cursor-pointer">
                  Watch Demo
                </Button>
              </div>
              <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                <div className="flex items-center space-x-1">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Completely free</span>
                </div>
                <div className="flex items-center space-x-1">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>No setup required</span>
                </div>
                <div className="flex items-center space-x-1">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Automated workflow</span>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-xl blur-3xl"></div>
                <Card className="relative bg-card border-border">
                  <CardHeader>
                    <div className="flex items-center space-x-2">
                      <Bot className="h-5 w-5 text-primary" />
                      <span className="font-semibold">AI Agent Dashboard</span>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">Jobs Found</span>
                        <span className="font-semibold">247</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">Applications Sent</span>
                        <span className="font-semibold">89</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">Interview Requests</span>
                        <span className="font-semibold text-green-500">12</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">Avg ATS Score</span>
                        <span className="font-semibold text-primary">94%</span>
                      </div>
                    </div>
                    <div className="pt-2">
                      <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                        <div className="h-2 w-2 bg-green-500 rounded-full animate-pulse"></div>
                        <span>AI Agent is actively searching...</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-muted/50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <Badge variant="secondary" className="bg-primary/10 text-primary">Features</Badge>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Intelligent Job Search Automation</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Our AI agent works 24/7 to find the perfect job opportunities, optimize your applications, and maximize your chances of success.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
            <div className="grid gap-6">
              <Card className="bg-card border-border">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                      <Upload className="h-5 w-5 text-primary" />
                    </div>
                    <CardTitle>Smart Resume Analysis</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Upload your resume and our AI instantly analyzes your skills, experience, and career goals to create a personalized job search strategy.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-card border-border">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                      <Target className="h-5 w-5 text-primary" />
                    </div>
                    <CardTitle>ATS Score Optimization</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Automatically optimize your resume for each job application to achieve higher ATS scores and pass initial screening filters.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-card border-border">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                      <Zap className="h-5 w-5 text-primary" />
                    </div>
                    <CardTitle>Automated Applications</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Our AI agent applies to relevant jobs on your behalf, customizing cover letters and ensuring all requirements are met.
                  </p>
                </CardContent>
              </Card>
            </div>
            <div className="flex items-center justify-center">
              <div className="relative">
                <Image
                  src="/placeholder.svg?height=400&width=500"
                  alt="AI Job Search Dashboard"
                  width={500}
                  height={400}
                  className="aspect-video overflow-hidden rounded-xl object-cover shadow-lg border border-border"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent rounded-xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <Badge variant="secondary" className="bg-primary/10 text-primary">How It Works</Badge>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Get Started in 3 Simple Steps</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Our AI agent makes job searching effortless. Just upload, configure, and let the magic happen.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-center gap-8 py-12 lg:grid-cols-3">
            <Card className="bg-card border-border text-center">
              <CardHeader>
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <FileText className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>1. Upload Your Resume</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Simply upload your resume and our AI will analyze your skills, experience, and career preferences to understand your profile.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-card border-border text-center">
              <CardHeader>
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <Search className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>2. AI Finds Perfect Matches</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Our intelligent agent searches thousands of job boards and company websites to find opportunities that match your profile and preferences.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-card border-border text-center">
              <CardHeader>
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <Send className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>3. Automated Applications</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  The AI optimizes your resume for each job, writes personalized cover letters, and submits applications with high ATS scores.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-muted/50">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-4 md:grid-cols-2">
            <Card className="bg-card border-border text-center">
              <CardHeader>
                <CardTitle className="text-3xl font-bold text-primary">50K+</CardTitle>
                <CardDescription>Jobs Applied To</CardDescription>
              </CardHeader>
            </Card>
            <Card className="bg-card border-border text-center">
              <CardHeader>
                <CardTitle className="text-3xl font-bold text-primary">94%</CardTitle>
                <CardDescription>Average ATS Score</CardDescription>
              </CardHeader>
            </Card>
            <Card className="bg-card border-border text-center">
              <CardHeader>
                <CardTitle className="text-3xl font-bold text-primary">3.2x</CardTitle>
                <CardDescription>More Interview Requests</CardDescription>
              </CardHeader>
            </Card>
            <Card className="bg-card border-border text-center">
              <CardHeader>
                <CardTitle className="text-3xl font-bold text-primary">2,500+</CardTitle>
                <CardDescription>Happy Job Seekers</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <Badge variant="secondary" className="bg-primary/10 text-primary">Success Stories</Badge>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Loved by Job Seekers Worldwide</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                See how our AI agent has helped thousands of professionals land their dream jobs.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3">
            <Card className="bg-card border-border">
              <CardHeader>
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  "JobAgent AI found me 3 interview opportunities in just one week! The ATS optimization really works - I was getting rejected before, now I'm getting calls."
                </p>
              </CardContent>
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <Image
                    src="/placeholder.svg?height=40&width=40"
                    alt="Sarah Chen"
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                  <div>
                    <p className="text-sm font-medium">Sarah Chen</p>
                    <p className="text-xs text-muted-foreground">Software Engineer</p>
                  </div>
                </div>
              </CardHeader>
            </Card>
            
            <Card className="bg-card border-border">
              <CardHeader>
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  "I was skeptical at first, but the AI applied to 50+ jobs while I slept. Got 5 interviews and landed my dream job at a Fortune 500 company!"
                </p>
              </CardContent>
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <Image
                    src="/placeholder.svg?height=40&width=40"
                    alt="Marcus Johnson"
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                  <div>
                    <p className="text-sm font-medium">Marcus Johnson</p>
                    <p className="text-xs text-muted-foreground">Marketing Manager</p>
                  </div>
                </div>
              </CardHeader>
            </Card>
            
            <Card className="bg-card border-border">
              <CardHeader>
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  "The personalized cover letters and resume optimization saved me hours of work. My response rate increased by 300%!"
                </p>
              </CardContent>
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <Image
                    src="/placeholder.svg?height=40&width=40"
                    alt="Emily Rodriguez"
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                  <div>
                    <p className="text-sm font-medium">Emily Rodriguez</p>
                    <p className="text-xs text-muted-foreground">Data Analyst</p>
                  </div>
                </div>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

    </div>
  )

}


