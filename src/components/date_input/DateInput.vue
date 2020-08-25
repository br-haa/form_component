<template>
  <DateBase
    @input="setRequired"
    :base-text="DateText"
    :base-id="`date`"
    :base-name="`date`"
    :base-type="`date`"
    :not-required="NotRequired"
  ></DateBase>
</template>

<script>
import DateBase from "../date_base/DateBase.vue";
export default {
  components: { DateBase },
  name: "DateInput",

  data() {
    return {
      Value: "",
      test: "",
    };
  },
  props: {
    NotRequired: {
      type: Boolean,
    },
    DateText: {
      type: String,
      default: "Date",
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
        this.$emit("validating", "Date", n, true);
      } else {
        this.validateInput(input);
      }
    },
    validateInput: function (input) {
      if (input !== undefined && input !== "") {
        this.$emit("validating", "Date", "Date", input, true);
      } else {
        this.$emit("validating", "Date", "Date", input, false);
      }
    },
  },
  mounted() {
    this.setRequired(undefined);
  },
};
</script>

<style scoped></style>
