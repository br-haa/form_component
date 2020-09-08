<template>
  <div class="check-box-holder">
    <check-box @input="validateInput"></check-box>
    <div>
      <p class="consent-text">
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
  p {
    margin-left: 1rem;
    font-size: 1rem;
    @media (max-width: 640px) {
      font-size: .8rem;
    }
  }
}
</style>
