<template>
  <div :class="{ inline: inline, form1: !inline }">
    <slot name="FirstName"></slot>
    <slot name="LastName"></slot>
    <slot name="Email"></slot>
    <slot name="Phone"></slot>
  </div>
</template>

<script>
export default {
  name: "Form1",
  props: {
    inline: {
      type: Boolean,
    },
  },
};
</script>

<style scoped lang="scss">
.form1 {
  display: grid;
  grid-gap: 1.5rem;
  grid-template-columns: 1fr 1fr;
  margin-bottom: 1.5rem;
  @media (max-width: 1080px) {
    grid-template-columns: 1fr;
  }
}
.inline {
  display: grid;
  grid-gap: 1.5rem;
  grid-template-columns: 1fr;
  margin-bottom: 1.5rem;
  @media (max-width: 1080px) {
    grid-template-columns: 1fr;
  }
}
</style>
