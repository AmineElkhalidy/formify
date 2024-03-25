import React from "react";
import { forms } from "@/db/schema";
import { InferSelectModel } from "drizzle-orm";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

type Form = InferSelectModel<typeof forms>;

type Props = {
  forms: Form[];
};

const FormList = (props: Props) => {
  return (
    <div className="grid md:grid-cols-2 m-5 p-4 gap-4">
      {props.forms.map((form: Form) => (
        <Card key={form.id} className="max-w-[350px] flex flex-col">
          <CardHeader>
            <CardTitle className="font-medium">{form.name}</CardTitle>
            <CardDescription>{form.description}</CardDescription>
          </CardHeader>
          <CardFooter>
            <Link className="w-1/2" href={`/forms/edit/${form.formID}`}>
              <Button className="w-1/2">View</Button>
            </Link>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};

export default FormList;
