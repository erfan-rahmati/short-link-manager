import { CreateLinkForm } from "@/components/create-link-form";

export default function NewLinkPage() {
  return (
    <main className="mx-auto max-w-2xl p-8">
      <h1 className="mb-8 text-3xl font-bold">
        Create Link
      </h1>

      <CreateLinkForm />
    </main>
  );
}