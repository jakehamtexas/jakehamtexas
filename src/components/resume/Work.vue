<template>
  <resume-area :title="'Work'" :should-show-separator-top="true">
    <resume-body-info-group
      v-for="workHistory of workHistories"
      :item="workHistory"
      :key="workHistory.key"
    />
  </resume-area>
</template>

<script>
import { ResumeArea, ResumeBodyInfoGroup } from "./private";
import { toComplex, toLabel } from "../../getKey";

const toWorkHistory = workHistory => ({
  ...workHistory,
  subtitle: "Lubbock, TX",
  notes: workHistory.notes.map(toLabel)
});

const workHistories = [
  {
    title: "ARMtech Insurance Services",
    headline: "Test/Software Engineer",
    dates: "Jul 2020 - Current",
    notes: [
      "Used Gitlab CI, with multi-project and scheduled pipelines, alongside Docker to create fast and robust CI solutions for large scale domain services",
      "Wrote custom static analysis tool for checking security configurations",
      "Rapidly modernized existing testing clients with Typescript, functional programming and OOP design patterns, linting/formatting enforcement with husky/prettier/eslint",
      "Prototyped an extensible finite-state-machine-based performance profiling test client",
      "Added custom tooling to and extended test cases for Cypress-based UI test client",
      "Led an iOS client application rewrite that brought ease of use and powerful features to company adjusters",
      "Mentored junior developers in and outside work, and offered constructive feedback for peers in code review"
    ]
  },
  {
    title: "SitePro",
    headline: ".NET Software Developer",
    dates: "Apr 2019 - Jul 2020",
    notes: [
      "Wrote .NET and Node.js supported Vue.js and Razor web applications",
      "Developed both focused and generic reusable frontend components that saw unilateral adoption from every web team",
      `Lead development effort in frontend and wrote entire backend for an administrative subscription product that created $60,000 dollars of annual revenue at inception, with widespread client acclaim`,
      "Lead service bus architecture implementation and domain service refactoring which increased modularity and agility for service provisioning and scaling"
    ]
  },
  {
    title: "Books In Demand",
    headline: "Software Developer",
    dates: "Oct 2018 - Apr 2019",
    notes: [
      "Sole developer for end-to-end business solutions, including inventory reconciliation, web-scraping, and product valuation",
      "Implemented inventory loss prevention techniques that isolated up to $50,000 in stranded inventory monthly",
      "Technologies used: Entity Framework, C#/VB .NET, xUnit Test Framework, PhantomJS/CasperJS, MySQL, SQLite"
    ]
  }
]
  .map(toWorkHistory)
  .map(toComplex);

export default {
  components: {
    ResumeArea,
    ResumeBodyInfoGroup
  },
  data: () => ({
    workHistories
  })
};
</script>
