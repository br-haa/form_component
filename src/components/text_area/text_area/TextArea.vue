<template>
  <TextAreaBase
    @input="setRequired"
    :area-text="TextText"
    :area-id="TextId"
    :area-name="getDefaultName"
    :area-type="`text`"
    :not-required="NotRequired"
    :span-size="getSpanSize"
    :passed="passed"
  ></TextAreaBase>
</template>

<script>
import TextAreaBase from "../text_area_base/TextAreaBase.vue";
export default {
  components: { TextAreaBase },
  name: "TextArea",
  props: {
    TextText: {
      type: String,
      default: "Message",
    },
    TextId: {
      type: String,
      default: "Message",
    },
    TextName: {
      type: String,
      default: "Message",
    },
    NotRequired: {
      type: Boolean,
    },
    FormType: {
      type: Number,
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
    getSpanSize: function () {
      if (this.FormType === 1) {
        return 2;
      } else {
        return 3;
      }
    },
  },
  data() {
    return {
      passed: false,
    };
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
        this.$emit("validating", this.getDefaultName, this.TextId, n, true);
      } else {
        this.validateInput(input);
      }
    },
    validateInput: function (input) {
      if (input !== undefined && input !== "") {
        this.$emit("validating", this.getDefaultName, this.TextId, input, true);
        this.passed = true;
      } else {
        this.$emit(
          "validating",
          this.getDefaultName,
          this.TextId,
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
