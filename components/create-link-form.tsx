"use client";

import { useActionState } from "react";

import { createLinkAction } from "@/src/actions/create-link";

import type {
  CreateLinkActionState,
} from "@/src/types/action-state";

import {
  Button,
} from "@/components/ui/button";

import {
  Input,
} from "@/components/ui/input";

import {
  Label,
} from "@/components/ui/label";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";


const initialState: CreateLinkActionState = {
  success: false,
  errors: {},
  link: null,
  message: "",
};


export function CreateLinkForm() {

  const [
    state,
    formAction,
    pending,
  ] = useActionState(
    createLinkAction,
    initialState
  );


  return (

    <Card className="w-full max-w-xl">

      <CardHeader>

        <CardTitle>
          Create New Short Link
        </CardTitle>

      </CardHeader>


      <CardContent>


        <form
          action={formAction}
          className="space-y-6"
        >


          <div className="space-y-2">

            <Label htmlFor="destinationUrl">
              Destination URL
            </Label>


            <Input
              id="destinationUrl"
              name="destinationUrl"
              placeholder="https://example.com"
              required
            />


            {
              state.errors.destinationUrl && (
                <p className="text-sm text-red-500">
                  {state.errors.destinationUrl[0]}
                </p>
              )
            }


          </div>



          <div className="space-y-2">


            <Label htmlFor="slug">
              Custom Slug
            </Label>


            <Input
              id="slug"
              name="slug"
              placeholder="my-awesome-link"
              required
            />


            {
              state.errors.slug && (
                <p className="text-sm text-red-500">
                  {state.errors.slug[0]}
                </p>
              )
            }


          </div>



          <div className="space-y-2">


            <Label htmlFor="title">
              Title (optional)
            </Label>


            <Input
              id="title"
              name="title"
              placeholder="My Website"
            />


            {
              state.errors.title && (
                <p className="text-sm text-red-500">
                  {state.errors.title[0]}
                </p>
              )
            }


          </div>




          {
            state.errors.general && (
              <p className="text-sm text-red-500">
                {state.errors.general[0]}
              </p>
            )
          }



          {
            state.message && (
              <p
                className={
                  state.success
                  ? "text-sm text-green-600"
                  : "text-sm text-red-500"
                }
              >
                {state.message}
              </p>
            )
          }




          <Button
            type="submit"
            disabled={pending}
            className="w-full"
          >

            {
              pending
              ? "Creating..."
              : "Create Link"
            }

          </Button>



        </form>


      </CardContent>


    </Card>

  );
}