<template>
  <resume-area :title="'Skills'">
    <simple-list :list-items="skills" />
  </resume-area>
</template>
<script>
import { toLabel } from "../../getKey";
import { ResumeArea, SimpleList } from "./private";
const skills = ["OOP", "IDesign", "Microservice Architecture", "Jira"].map(
  toLabel
);
export default {
  components: {
    ResumeArea,
    SimpleList
  },
  data: () => ({
    skills
  })
};
</script>
