<template>
  <DropdownBase
    @input="setRequired"
    :base-text="BaseText"
    :Options="Options"
    :base-id="BaseId"
    :base-name="BaseName"
    :not-required="NotRequired"
    :passed="passed"
  ></DropdownBase>
</template>

<script>
import DropdownBase from "../dropdown_base/DropdownBase.vue";
export default {
  components: { DropdownBase },
  name: "DropdownField",
  props: {
    BaseText: {
      type: String,
    },
    Options: {
      type: Array,
    },
    BaseId: {
      type: String,
    },
    BaseName: {
      type: String,
    },
    NotRequired: {
      type: Boolean,
    },
    duplicate: {
      type: Number,
    },
  },
  data() {
    return {
      passed: false,
    };
  },
  computed: {
    getDefaultName: function () {
      if (this.BaseName === undefined) {
        return this.BaseText;
      } else {
        return this.BaseName;
      }
    },
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
        this.$emit("validating", this.getDuplicate, this.getDuplicate, n, true);
      } else {
        this.validateInput(input);
      }
    },
    validateInput(input) {
      if (input !== undefined && input !== "") {
        // making sure its not undefined or an empty string
        this.$emit("validating", this.getDefaultName, this.BaseId, input, true);
        this.passed = true;
      } else {
        this.$emit(
          "validating",
          this.getDefaultName,
          this.BaseId,
          input,
          false
        );
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
