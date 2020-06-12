<template>
  <resume-area :title="'Education'" :should-show-separator-bottom="false">
    <resume-body-info-group :item="education" />
  </resume-area>
</template>
<script>
import { ResumeArea, ResumeBodyInfoGroup } from "./private";
const education = {
  title: "Texas Tech University",
  headline: "Computer Science/Mathematics",
  dates: "Aug 2014 - May 2017",
  subtitle: "Lubbock, TX"
};
export default {
  components: {
    ResumeArea,
    ResumeBodyInfoGroup
  },
  data: () => ({
    education
  })
};
</script>
