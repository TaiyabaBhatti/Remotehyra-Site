import React from "react";
import Wrapper from "../../components/ui/Wrapper";
import Headline from "./Headline";
import RankingCard from "./RankingCard";

export default function AboutPage() {
  return (
    <>
      <Wrapper properties="max-w-6xl m-auto min-h-screen">
        <Headline
          classTitle="section-black"
          title="Transforming Ideas into
            Digital Reality"
          subtitle="We combine cutting-edge AI technology with deep industry expertise to deliver solutions that drive real business value."
        />
      </Wrapper>

      <section className="bg-darkbrown">
        <Wrapper properties="max-w-6xl m-auto bg-gradient-to-tr from-blue-400 to-pink-300 rounded-4xl">
          <div className="flex flex-row gap-y-5 items-center flex-wrap justify-between">
            <RankingCard title="Project Taken" numeric="100+" desc="" />
            <RankingCard title="Happy Clients" numeric="98%" desc="" />
            <RankingCard title="Team Members" numeric="25+" desc="" />
            <RankingCard title="Experience" numeric="5+" desc="" />
          </div>
        </Wrapper>
      </section>
    </>
  );
}
