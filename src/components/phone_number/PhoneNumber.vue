<template>
  <BaseField
    @input="setRequired"
    :base-text="`Phone`"
    :base-id="`Phone`"
    :base-name="`phone`"
    :base-type="`tel`"
    :not-required="NotRequired"
  ></BaseField>
</template>

<script>
import BaseField from "../base_field/BaseField.vue";
export default {
  components: { BaseField },
  name: "PhoneNumber",
  props: {
    NotRequired: {
      type: Boolean
    }
  },
  methods: {
    setRequired(input) {
      if (this.NotRequired) {
        let n = input;
        if (input === undefined) {
          n = `n/a`;
        } else {
          n = input;
        }
        this.$emit("validating", "Phone", n, true);
      } else {
        this.validateInput(input);
      }
    },
    validateInput(input) {
      const phonePattern = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
      if (phonePattern.test(input)) {
        console.log("checking phone " + input);
        this.$emit("validating", "Phone", "Phone", input, true);
      } else {
        this.$emit("validating", "Phone", "Phone", input, false);
      }
    }
  },
  mounted() {
    this.setRequired(undefined);
  }
};
</script>

<style scoped></style>
