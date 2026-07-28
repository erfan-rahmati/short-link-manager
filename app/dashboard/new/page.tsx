import { CreateLinkForm } from "@/components/create-link-form";

export default function NewLinkPage() {
  console.log("NEW LINK PAGE RENDER");

  return (
    <main>
      <h1>
        Create new link
      </h1>

      <CreateLinkForm />
    </main>
  );
}