import React from "react";
import ProcessCard from "./ProcessCard";

export default function ProcessCardCollection() {
  return (
    <>
      <div className="space-y-10 flex-1 max-tablet-s3:ml-auto">
        <div>
          <h1 className=" text-3xl font-bold bg-gradient-to-t from-sky-700 to-blue-400  bg-clip-text  text-transparent">
            Our Process
          </h1>
        </div>

        <div className="flex flex-col gap-y-2">
          <ProcessCard
            title="Data Assessment"
            desc="We analyze your existing data infrastructure and requirements"
          />
          <ProcessCard
            title="Model development"
            desc="Custom ML model development and training"
          />
          <ProcessCard
            title="integration"
            desc="Seamless integration with your existing systems"
          />
          <ProcessCard
            title="testing & validation"
            desc="Rigorous testing to ensure accuracy and reliability"
          />
          <ProcessCard
            title="deployment & monitoring"
            desc="Production deployment with continuous monitoring"
          />
        </div>
      </div>
    </>
  );
}
