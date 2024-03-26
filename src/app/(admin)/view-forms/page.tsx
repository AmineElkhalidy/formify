import React from "react";
import FormList from "@/app/forms/FormList";
import { getUserForms } from "@/app/actions/getUserForms";
import { InferSelectModel } from "drizzle-orm";
import { forms as dbForms } from "@/db/schema";
import { SessionProvider } from "next-auth/react";
import FormGenerator from "@/app/form-generator";

const page = async () => {
  const forms: InferSelectModel<typeof dbForms>[] = await getUserForms();

  return (
    <>
      <header className="flex items-center justify-between flex-wrap gap-4 py-6">
        <h2 className="text-3xl font-semibold">Dashboard</h2>
        <SessionProvider>
          <FormGenerator />
        </SessionProvider>
      </header>
      <hr className="my-4" />

      <div>
        <h3 className="text-2xl font-semibold mt-6 mb-3">My Forms</h3>

        <FormList forms={forms} />
      </div>
    </>
  );
};

export default page;
