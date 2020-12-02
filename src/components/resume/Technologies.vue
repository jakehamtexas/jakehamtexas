<template>
  <resume-area :title="'Technologies'">
    <simple-list :list-items="technologies" />
  </resume-area>
</template>

<script>
import { toLabel } from "../../getKey";
import { ResumeArea, SimpleList } from "./private";

const specialDotUnicode = 2024;
const dotNetCore =
  String.fromCharCode(parseInt(specialDotUnicode, 16)) + "NET Core";
const technologies = [
  dotNetCore,
  "Vue.js",
  "Node.js",
  "Flutter/Dart",
  "Microsoft Azure Cloud Platform",
  "MSSQL Server",
  "Typescript",
  "ES6",
  "Docker",
  "Git",
  "Linux VMs",
  "Redis",
  "Cosmos",
  "Entity Framework Core",
  "Webpack",
  "Express",
  "Rust 🦀",
  "SCSS"
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
