"use client";

import { useActionState } from "react";

import { createLinkAction } from "@/src/actions/create-link";
import type { CreateLinkActionState } from "@/src/types/action-state";

const initialState: CreateLinkActionState = {
  success: false,
  errors: {},
  link: null,
};

export function CreateLinkForm() {
  const [state, formAction, pending] = useActionState(
    createLinkAction,
    initialState
  );

  return (
    <form action={formAction} className="space-y-6">
      <div>
        <label className="mb-1 block text-sm font-medium">
          Destination URL
        </label>

        <input
          name="destinationUrl"
          placeholder="https://example.com"
          className="w-full rounded border p-2"
        />

        {state.errors.destinationUrl && (
          <p className="mt-1 text-sm text-red-500">
            {state.errors.destinationUrl[0]}
          </p>
        )}
      </div>

      <div>
        <label className="mb-1 block text-sm font-medium">
          Slug
        </label>

        <input
          name="slug"
          placeholder="my-link"
          className="w-full rounded border p-2"
        />

        {state.errors.slug && (
          <p className="mt-1 text-sm text-red-500">
            {state.errors.slug[0]}
          </p>
        )}
      </div>

      <div>
        <label className="mb-1 block text-sm font-medium">
          Title
        </label>

        <input
          name="title"
          placeholder="My Website"
          className="w-full rounded border p-2"
        />

        {state.errors.title && (
          <p className="mt-1 text-sm text-red-500">
            {state.errors.title[0]}
          </p>
        )}
      </div>

      <button
        type="submit"
        disabled={pending}
        className="rounded bg-black px-4 py-2 text-white disabled:opacity-50"
      >
        {pending ? "Creating..." : "Create Link"}
      </button>

      {state.success && (
        <p className="text-green-600">
          Link created successfully.
        </p>
      )}
    </form>
  );
}