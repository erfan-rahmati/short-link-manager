import { CreateLinkForm } from "@/components/create-link-form";

export default function NewLinkPage() {
  return (
    <main
      className="
        mx-auto
        max-w-3xl
        space-y-8
        p-6
        md:p-8
      "
    >
      <section>
        <h1
          className="
            text-3xl
            font-bold
            tracking-tight
          "
        >
          ساخت لینک کوتاه
        </h1>

        <p
          className="
            mt-2
            text-muted-foreground
          "
        >
          لینک‌های طولانی خود را به لینک‌های کوتاه و قابل مدیریت تبدیل کنید.
        </p>
      </section>

      <CreateLinkForm />
    </main>
  );
}
