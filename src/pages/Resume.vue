<template>
  <q-page class="flex flex-center resume">
    <personal-info />
    <work />
    <skills />
    <technologies />
    <education />
  </q-page>
</template>
<script>
import { toLabel, toComplex } from "../getKey";
import {
  PersonalInfo,
  Work,
  Technologies,
  Education,
  Skills
} from "components/resume";
export default {
  name: "Resume",
  components: {
    PersonalInfo,
    Work,
    Technologies,
    Education,
    Skills
  }
};
</script>
<style lang="scss">
.resume {
  span,
  li {
    font-size: 15px;
  }
}
</style>
