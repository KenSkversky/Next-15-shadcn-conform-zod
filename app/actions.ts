"use server";

import { parseWithZod } from "@conform-to/zod";
import { customerFormSchema } from "@/lib/zodSchemas";

import { redirect } from "next/navigation";

export async function CreateCustomer(prevState: unknown, formData: FormData) {
  const submission = parseWithZod(formData, { schema: customerFormSchema });
  if (submission.status !== "success") {
    return submission.reply();
  }
  return redirect("/success");
}
