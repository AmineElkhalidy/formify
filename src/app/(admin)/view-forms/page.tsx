import React from "react";
import FormList from "@/app/forms/FormList";
import { getUserForms } from "@/app/actions/getUserForms";
import { InferSelectModel } from "drizzle-orm";
import { forms as dbForms } from "@/db/schema";

const page = async () => {
  const forms: InferSelectModel<typeof dbForms>[] = await getUserForms();

  return (
    <div className="p-4">
      <h3 className="text-2xl font-semibold mt-6 mb-3">My Forms</h3>

      <FormList forms={forms} />
    </div>
  );
};

export default page;
