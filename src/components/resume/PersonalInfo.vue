<template>
  <div class="personal-info">
    <div class="title">
      <div class="download-btn__wrapper">
        <span class="name">Jake Hamilton</span>
        <download-button v-if="!isMobile" />
      </div>
      <span class="subtitle">Full-Stack Software Developer</span>
    </div>
    <table class="contact-info">
      <tr class v-for="contactField of contactFields" :key="contactField.key">
        <td class="bold">
          <span>{{ contactField.name }}:</span>
        </td>
        <td>
          <a
            v-if="contactField.isTel || contactField.isEmail"
            :href="getHref(contactField)"
          >
            <span>
              {{ contactField.value }}
            </span>
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
import DownloadButton from "./DownloadButton";
import { toLabel, toComplex } from "../../getKey";
import { IsMobileMixin } from "../../mixins";

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
  "Enthusiastic full-stack software engineer with exceptional skills in front-end engineering eager to contribute to an established organization. Infectious attitude of hard work, continuous self-improvement, and attention to detail. Insatiable desire to learn and grow alongside like-minded craftspeople.";

export default {
  components: {
    DownloadButton
  },
  mixins: [IsMobileMixin],
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
  .title {
    margin-bottom: 10px;
    .download-btn__wrapper {
      display: flex;
      justify-content: space-between;
      align-items: center;
      .name {
        margin: 10px 0 10px 0;
        font-size: 3.75rem;
      }
    }
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
