<template>
  <resume-area :title="'Technologies'">
    <simple-list :list-items="technologies" />
  </resume-area>
</template>

<script>
import { toLabel } from "../../getKey";
import { ResumeArea, SimpleList } from "./private";
const technologies = [
  ".NET Core",
  "Vue.js",
  "Node.js",
  "Flutter/Dart",
  "Azure DevOps",
  "Microsoft Azure Cloud Platform",
  "MSSQL Server",
  "Typescript",
  "ES6",
  "Docker",
  "Git",
  "Redis",
  "Cosmos",
  "Entity Framework Core",
  "Webpack",
  "Express",
  "Rust 🦀"
].map(toLabel);
export default {
  components: {
    ResumeArea,
    SimpleList
  },
  data: () => ({
    technologies
  })
};
</script>
