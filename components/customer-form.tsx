"use client";

import { useForm } from "@conform-to/react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
// imimport { useState } from "react";
import { customerFormSchema } from "@/lib/zodSchemas";
import { CreateCustomer } from "@/app/actions";
import { useActionState } from "react";
import { parseWithZod } from "@conform-to/zod";

const CustomerForm = () => {
  // const [isPending, setIsPending] = useState(false);
  const [lastResult, action, isPending] = useActionState(
    CreateCustomer,
    undefined,
  );

  const [form, fields] = useForm({
    lastResult,
    onValidate({ formData }) {
      return parseWithZod(formData, { schema: customerFormSchema });
    },
    shouldValidate: "onBlur",
    shouldRevalidate: "onInput",
  });
  // const { pending } = useFormStatus();
  return (
    <Card className="mx-auto max-w-sm px-4">
      <CardHeader>
        <CardTitle className="text-xl">Customer Sign Up</CardTitle>
        <CardDescription>
          Enter your information to create an account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form
          onSubmit={form.onSubmit}
          action={action}
          className="space-y-4"
          id={form.id}
          noValidate
        >
          <div className="space-y-4">
            <Label htmlFor="first-name" className="text-sm font-semibold">
              First Name
            </Label>
            <Input
              key={fields.firstName.key}
              name={fields.firstName.name}
              defaultValue={fields.firstName.initialValue}
              id="first-name"
              placeholder="Joe"
              type="text"
            />
            <p className="text-red-500 text-sm">{fields.firstName.errors}</p>

            <Label htmlFor="last-name" className="text-sm font-semibold">
              Last Name
            </Label>
            <Input
              key={fields.lastName.key}
              name={fields.lastName.name}
              defaultValue={fields.lastName.initialValue}
              id="last-name"
              placeholder="JSmith"
              type="text"
            />
            <p className="text-red-500 text-sm">{fields.lastName.errors}</p>

            <Label htmlFor="email" className="text-sm font-semibold">
              Email
            </Label>
            <Input
              key={fields.email.key}
              name={fields.email.name}
              defaultValue={fields.email.initialValue}
              id="emailt"
              placeholder="joe@email.com"
              type="text"
            />
            <p className="text-red-500 text-sm">{fields.email.errors}</p>

            <Label htmlFor="password" className="text-sm font-semibold">
              Password
            </Label>
            <Input
              key={fields.password.key}
              name={fields.password.name}
              defaultValue={fields.password.initialValue}
              id="passwordt-name"
              placeholder="****"
              type="password"
            />
            <p className="text-red-500 text-sm">{fields.password.errors}</p>
          </div>
          <Button
            type="submit"
            disabled={isPending}
            className="w-full bg-blue-500 hover:bg-blue-600 font-semibold"
          >
            {isPending ? "Saving..." : "Save"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default CustomerForm;
