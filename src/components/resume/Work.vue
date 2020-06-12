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

const workHistories = [
  {
    title: "SitePro",
    headline: ".NET Software Developer",
    dates: "Apr 2019 - Current",
    subtitle: "Lubbock, TX",
    notes: [
      "Wrote .NET and Node.js supported Vue.js and Razor web applications implemented with IDesign architecture",
      "Developed both focused and generic reusable frontend components that saw unilateral adoption from every web team",
      "Lead multiple successful projects within my team and advocated best practices with regard to design, time-management, and code correctness"
    ].map(toLabel)
  },
  {
    title: "Books In Demand",
    headline: "Software Developer",
    dates: "Oct 2018 - Apr 2019",
    subtitle: "Lubbock, TX",
    notes: [
      "Sole developer for end-to-end business solutions, including inventory reconciliation, web-scraping, and product valuation",
      "Implemented inventory loss prevention techniques that isolated up to $50,000 in stranded inventory monthly",
      "Technologies used: Entity Framework, C#/VB .NET, xUnit Test Framework, PhantomJS/CasperJS, MySQL, SQLite"
    ].map(toLabel)
  }
].map(toComplex);

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
