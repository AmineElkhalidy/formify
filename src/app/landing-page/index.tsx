"use client";

import React from "react";
import FormGenerator from "../form-generator";

const LandingPage = () => {
  return (
    <section className="flex flex-col items-center justify-center px-4 space-y-4 w-full">
      <h1 className="text-4xl font-bold text-center sm:text-5xl md:text-6xl leading-10">
        Create your forms <br></br>in{" "}
        <span className="text-emerald-500">seconds</span> not{" "}
        <span className="text-destructive">hours</span>
      </h1>
      <p className="max-w-[600px] mt-4 text-center text-gray-500 md:textl-xl">
        Generate, publish and share your form right away with AI. Dive into
        insightful results, charts and analytics.
      </p>
      <FormGenerator />
    </section>
  );
};

export default LandingPage;
