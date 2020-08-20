<template>
  <BaseField
    @input="setRequired"
    :base-text="TextText"
    :base-id="TextId"
    :base-name="getDefaultName"
    :base-type="`text`"
    :not-required="NotRequired"
  ></BaseField>
</template>

<script>
import BaseField from "../base_field/BaseField.vue";
export default {
  components: { BaseField },
  name: "TextField",
  props: {
    TextText: {
      type: String,
    },
    TextId: {
      type: String,
    },
    TextName: {
      type: String,
    },
    NotRequired: {
      type: Boolean,
    },
  },
  computed: {
    getDefaultName: function () {
      if (this.TextName === undefined) {
        return this.TextText;
      } else {
        return this.TextName;
      }
    },
  },
  data() {
    return {
      pls: ``,
    };
  },
  methods: {
    setRequired(input) {
      if (this.NotRequired) {
        let n = input;
        if (input === undefined) {
          //looking for if its required or not
          n = `n/a`;
        } else {
          n = input;
        }
        this.$emit("validating", this.getDefaultName, this.TextId, n, true);
      } else {
        this.validateInput(input);
      }
    },
    validateInput: function (input) {
      if (input !== undefined && input !== "") {
        // making sure its not undefined or an empty string
        this.$emit("validating", this.getDefaultName, this.TextId, input, true);
      } else {
        this.$emit(
          "validating",
          this.getDefaultName,
          this.TextId,
          input,
          false
        );
      }
    },
  },
  mounted() {
    this.setRequired(undefined);
  },
};
</script>

<style scoped></style>
