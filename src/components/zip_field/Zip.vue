<template>
  <BaseField
    @input="setRequired"
    :base-text="ZipText"
    :base-id="`Zip`"
    :base-name="`zip`"
    :base-type="`zip`"
    :not-required="NotRequired"
    :passed="passed"
  ></BaseField>
</template>

<script>
import BaseField from "../base_field/BaseField.vue";
export default {
  components: { BaseField },
  name: "Zip",

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
    ZipText: {
      type: String,
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
        this.$emit("validating", "Zip", n, true);
      } else {
        this.validateInput(input);
      }
    },
    validateInput: function (input) {
      const emailPattern = /^[0-9]{5}(?:-[0-9]{4})?$/;
      if (emailPattern.test(input)) {
        console.log("validZip " + input);
        this.$emit("validating", "Zip", "Zip", input, true);
        this.passed = true;
      } else {
        this.$emit("validating", "Zip", "Zip", input, false);
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
