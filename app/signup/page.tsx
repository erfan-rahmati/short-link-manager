import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  SignupForm
} from "@/components/signup-form";


export default function SignupPage() {

  return (
    <main className="flex min-h-screen items-center justify-center px-4">

      <Card className="w-full max-w-md">

        <CardHeader>
          <CardTitle>
            Create an account
          </CardTitle>
        </CardHeader>


        <CardContent>
          <SignupForm />
        </CardContent>


      </Card>

    </main>
  );
}