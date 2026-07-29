import { Card } from "@/components/ui/card";

type AuthCardProps = {
  title: string;
  description?: string;
  children: React.ReactNode;
};

export function AuthCard({ title, description, children }: AuthCardProps) {
  return (
    <Card
      className="
        w-full
        max-w-md
        rounded-3xl
        border
        bg-card
        p-8
        shadow-xl
      "
    >
      <div className="mb-6 text-center">
        <div
          className="
            mx-auto
            mb-4
            flex
            h-12
            w-12
            items-center
            justify-center
            rounded-xl
            bg-primary
            text-xl
            font-bold
            text-primary-foreground
          "
        >
          🔗
        </div>

        <h1
          className="
            text-2xl
            font-bold
          "
        >
          {title}
        </h1>

        {description && (
          <p
            className="
                mt-2
                text-sm
                text-muted-foreground
              "
          >
            {description}
          </p>
        )}
      </div>

      {children}
    </Card>
  );
}
