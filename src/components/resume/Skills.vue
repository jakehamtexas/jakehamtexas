<template>
  <resume-area :title="'Skills'">
    <simple-list :list-items="skills" />
  </resume-area>
</template>
<script>
import { toLabel } from "../../getKey";
import { ResumeArea, SimpleList } from "./private";
const skills = [
  "OOP",
  "Eventbus Microservice Architecture",
  "Jira",
  "Sprint Planning",
  "Domain Refactoring",
  "Mentorship"
].map(toLabel);
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
