<template>
  <div class="form1">
    <slot name="FirstName"></slot>
    <slot name="LastName"></slot>
    <slot name="Email"></slot>
    <slot name="Phone"></slot>
  </div>
</template>

<script>
export default {
  name: "Form1",
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
  .addedFieldsGrid {
    grid-column: span 2;
    display: grid;
    grid-gap: 1.5rem;
    grid-template-columns: 1fr 1fr;
    @media (max-width: 1080px) {
      grid-template-columns: 1fr;
      grid-column: span 1;
    }
  }
}
</style>
