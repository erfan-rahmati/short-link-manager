"use client";

import { useActionState, useState } from "react";

import { updateLinkAction } from "@/src/actions/update-link";

import type { UpdateLinkActionState } from "@/src/actions/update-link";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { Input } from "@/components/ui/input";

import { Label } from "@/components/ui/label";

import { Button } from "@/components/ui/button";

const initialState: UpdateLinkActionState = {
  success: false,
  errors: {},
  message: "",
};

type UpdateLinkFormProps = {
  id: string;

  link: {
    destinationUrl: string;
    title: string | null;
  };
};

export function UpdateLinkForm({ id, link }: UpdateLinkFormProps) {
  const updateAction = updateLinkAction.bind(null, id);

  const [state, formAction, pending] = useActionState(
    updateAction,
    initialState,
  );

  const [destinationUrl, setDestinationUrl] = useState(link.destinationUrl);

  const [title, setTitle] = useState(link.title ?? "");

  return (
    <Card>
      <CardHeader>
        <CardTitle>ویرایش لینک</CardTitle>
      </CardHeader>

      <CardContent>
        <form action={formAction} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="destinationUrl">آدرس مقصد</Label>

            <Input
              id="destinationUrl"
              name="destinationUrl"
              value={destinationUrl}
              onChange={(e) => setDestinationUrl(e.target.value)}
              required
            />

            {state.errors.destinationUrl && (
              <div
                className="
                  rounded-lg
                  border
                  border-destructive/30
                  bg-destructive/10
                  px-4
                  py-3
                  text-sm
                  text-destructive
                "
              >
                {state.errors.destinationUrl[0]}
              </div>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="title">عنوان</Label>

            <Input
              id="title"
              name="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />

            {state.errors.title && (
              <div
                className="
                  rounded-lg
                  border
                  border-destructive/30
                  bg-destructive/10
                  px-4
                  py-3
                  text-sm
                  text-destructive
                "
              >
                {state.errors.title[0]}
              </div>
            )}
          </div>

          {state.errors.general && (
            <div
              className="
                rounded-lg
                border
                border-destructive/30
                bg-destructive/10
                px-4
                py-3
                text-sm
                text-destructive
              "
            >
              {state.errors.general[0]}
            </div>
          )}

          {state.message && (
            <div
              className={`
                rounded-lg
                border
                px-4
                py-3
                text-sm
                ${
                  state.success
                    ? `
                      border-emerald-300
                      bg-emerald-50
                      text-emerald-700
                    `
                    : `
                      border-destructive/30
                      bg-destructive/10
                      text-destructive
                    `
                }
              `}
            >
              {state.message}
            </div>
          )}

          <Button type="submit" disabled={pending} className="w-full">
            {pending ? "در حال ذخیره..." : "ذخیره تغییرات"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
