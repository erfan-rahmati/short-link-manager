"use client";

import { useTransition } from "react";

import { deleteLinkAction } from "@/src/actions/delete-link";


export function DeleteLinkButton({
  id,
}: {
  id: string;
}) {

  const [pending, startTransition] = useTransition();


  function handleDelete() {

    const confirmed =
      window.confirm(
        "Are you sure you want to delete this link?"
      );


    if (!confirmed) return;


    startTransition(async () => {

      await deleteLinkAction(id);

      window.location.reload();

    });

  }


  return (
    <button
      onClick={handleDelete}
      disabled={pending}
      className="
        rounded-md
        bg-red-500
        px-3
        py-1
        text-sm
        text-white
        disabled:opacity-50
      "
    >
      {
        pending
          ? "Deleting..."
          : "Delete"
      }
    </button>
  );
}