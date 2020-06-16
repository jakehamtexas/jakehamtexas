<template>
  <div class="personal-info">
    <div class="title">
      <h2>Jake Hamilton</h2>
      <span class="subtitle">Full Stack Software Developer</span>
    </div>
    <table class="contact-info">
      <tr class v-for="contactField of contactFields" :key="contactField.key">
        <td class="bold">{{ contactField.name }}:</td>
        <td>
          <a
            v-if="contactField.isTel || contactField.isEmail"
            :href="getHref(contactField)"
          >
            {{ contactField.value }}
          </a>
          <span v-else>
            {{ contactField.value }}
          </span>
        </td>
      </tr>
    </table>

    <span class="objective">{{ objective }}</span>
  </div>
</template>

<script>
import { toLabel, toComplex } from "../../getKey";

const contactFields = [
  {
    name: "Location",
    value: "Lubbock, TX 79424"
  },
  {
    name: "Phone",
    value: "(806) 300-4835",
    isTel: true
  },
  {
    name: "Email",
    value: "jakehamtexas@gmail.com",
    isEmail: true
  }
].map(toComplex);

const objective =
  "Enthusiastic full-stack software engineer with exceptional skills in front-end engineering eager to contribute to an established organization. Infectious attitude of hard work, continuous self-improvement, and attention to detail. Insatiable desire to learn and grow alongside like-minded people.";

export default {
  data: () => ({
    contactFields,
    objective
  }),
  methods: {
    getHref({ value, isEmail, isTel }) {
      if (isTel) {
        return `tel:${value}`;
      }
      if (isEmail) {
        return `mailto:${value}`;
      }
    }
  }
};
</script>

<style lang="scss">
.personal-info {
  margin-bottom: 10px;
  width: 100%;
  h2 {
    margin: 10px 0 10px 0;
  }
  .title {
    margin-bottom: 10px;
  }
  .contact-info {
    padding: 10px 0 10px 0;

    .bold {
      font-weight: 600;
    }
    td {
      width: 50%;
    }
  }
  a {
    text-decoration: none;
    color: inherit;
  }
}
</style>
