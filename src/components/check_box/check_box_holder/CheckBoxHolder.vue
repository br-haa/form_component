<template>
  <div class="check-box-holder">
    <check-box
      @input="validateInput"
      :theme="theme"
      :accentSkew="accentSkew"
    ></check-box>
    <div>
      <p class="consent-text" :style="{ color: getTextColor }">
        {{ ConsentText }}
      </p>
    </div>
  </div>
</template>

<script>
import CheckBox from "../check_box/CheckBox.vue";
export default {
  components: { CheckBox },
  name: "CheckBoxHolder",
  props: {
    ConsentText: {
      type: String,
      default:
        "I understand and agree that submitting this form does not create an attorney client relationship and the information I submit is not confidential or privileged",
    },
    theme: {
      type: Object,
    },
    accentSkew: {
      type: Number,
    },
    DarkBackground: {
      type: Boolean,
    },
  },
  computed: {
    getTextColor() {
      if (this.DarkBackground) {
        return "white";
      } else {
        return "inherit";
      }
    },
  },
  methods: {
    validateInput(CheckStatus) {
      if (CheckStatus) {
        this.$emit("validating", "Consent", "Consent", "true", true);
      } else {
        this.$emit("validating", "Consent", "Consent", "false", false);
      }
    },
  },
  mounted() {
    this.validateInput();
  },
};
</script>

<style scoped lang="scss">
.check-box-holder {
  grid-column: span 2;
  display: flex;
  align-items: center;
  margin-top: 1rem;
  p {
    margin-left: 1rem;
    font-size: 1rem;
    @media (max-width: 640px) {
      font-size: 0.8rem;
    }
  }
}
</style>
