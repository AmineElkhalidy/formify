import React from "react";
import FormList from "@/app/forms/FormList";
import { getUserForms } from "@/app/actions/getUserForms";
import { InferSelectModel } from "drizzle-orm";
import { forms as dbForms } from "@/db/schema";

const page = async () => {
  const forms: InferSelectModel<typeof dbForms>[] = await getUserForms();

  return (
    <div>
      <h3 className="text-2xl font-semibold pl-4">My Forms</h3>

      <FormList forms={forms} />
    </div>
  );
};

export default page;
