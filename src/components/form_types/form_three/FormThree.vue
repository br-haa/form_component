<template>
  <div :class="{ inline: inline, form3: !inline }">
    <div class="name-grid">
      <slot name="FirstName"></slot>
      <slot name="LastName"></slot>
    </div>
    <slot name="Email"></slot>
    <slot name="Phone"></slot>
    <slot name="StatesTwo"></slot>
  </div>
</template>

<script>
export default {
  name: "FormThree",
  props: {
    inline: {
      type: Boolean,
    },
  },
};
</script>

<style scoped lang="scss">
.form3 {
  display: grid;
  grid-gap: 1.5rem;
  grid-template-columns: 1fr 1fr 1fr;
  margin-bottom: 1.5rem;
  @media (max-width: 1080px) {
    grid-template-columns: 1fr;
  }
  .long-span {
    grid-column: span 3;
    @media (max-width: 1080px) {
      grid-column: span 1;
    }
  }
}
.name-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1.5rem;
  @media (max-width: 1080px) {
    grid-template-columns: 1fr;
  }
}
.state-zip-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1.5rem;
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
