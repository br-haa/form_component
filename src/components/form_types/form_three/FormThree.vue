<template>
  <div class="form3">
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
  name: "FormThree",
};
</script>

<style scoped></style>
