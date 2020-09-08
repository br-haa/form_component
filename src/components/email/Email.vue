<template>
  <BaseField
    @input="setRequired"
    :base-text="EmailText"
    :base-id="`Email`"
    :base-name="`email`"
    :base-type="`email`"
    :not-required="NotRequired"
    :passed="passed"
  ></BaseField>
</template>

<script>
import BaseField from "../base_field/BaseField.vue";
export default {
  components: { BaseField },
  name: "Email",

  data() {
    return {
      Value: "",
      passed: false,
    };
  },
  props: {
    NotRequired: {
      type: Boolean,
    },
    EmailText: {
      type: String,
      default: "Email",
    },
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
        this.$emit("validating", "Email", n, true);
      } else {
        this.validateInput(input);
      }
    },
    validateInput: function (input) {
      const emailPattern = /^[\w.-]+@([\w-]+\.)+[a-zA-Z]+$/;
      if (emailPattern.test(input)) {
        console.log("validEmail " + input);
        this.$emit("validating", "Email", "Email", input, true);
        this.passed = true;
      } else {
        this.$emit("validating", "Email", "Email", input, false);
        this.passed = false;
      }
    },
  },
  mounted() {
    this.setRequired(undefined);
  },
};
</script>

<style scoped></style>
