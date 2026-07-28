import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

export default function SignupPage() {
  return (
    <main className="flex min-h-screen items-center justify-center px-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-2xl">
            Create an account
          </CardTitle>
        </CardHeader>

        <CardContent>
          <form className="space-y-5">
            <div className="space-y-2">
              <Label htmlFor="name">
                Name
              </Label>

              <Input
                id="name"
                name="name"
                placeholder="John Doe"
                required
              />
            </div>


            <div className="space-y-2">
              <Label htmlFor="email">
                Email
              </Label>

              <Input
                id="email"
                name="email"
                type="email"
                placeholder="you@example.com"
                required
              />
            </div>


            <div className="space-y-2">
              <Label htmlFor="password">
                Password
              </Label>

              <Input
                id="password"
                name="password"
                type="password"
                placeholder="********"
                required
              />
            </div>


            <Button
              type="submit"
              className="w-full"
            >
              Create account
            </Button>
          </form>
        </CardContent>
      </Card>
    </main>
  );
}