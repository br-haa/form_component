<template>
  <div class="form2">
    <div class="name-grid">
      <slot name="FirstName"></slot>
      <slot name="LastName"></slot>
    </div>
    <slot name="Email"></slot>
    <slot name="Phone"></slot>
    <slot name="Address"></slot>
    <slot name="City"></slot>
    <div class="state-zip-grid">
      <slot name="States"></slot>
      <slot name="Zip"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "FormTwo",
};
</script>

<style scoped lang="scss">
.form2 {
  display: grid;
  grid-gap: 1.5rem;
  grid-template-columns: 1fr 1fr 1fr;
  margin-bottom: 1.5rem;
  @media (max-width: 1080px) {
    grid-template-columns: 1fr;
  }
  .addedFieldsGrid {
    grid-column: span 3;
    display: grid;
    grid-gap: 1.5rem;
    grid-template-columns: 1fr 1fr 1fr;
    @media (max-width: 1080px) {
      grid-template-columns: 1fr;
      grid-column: span 1;
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
}
</style>
