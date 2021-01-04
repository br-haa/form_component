<template>
  <form-base
    v-if="!MainFormSwitch"
    :cta-text="CtaText"
    :hide-form="HideForm"
    :is-modal="IsModal"
    :form-reactor="FormReactor"
    :Bjn="Bjn"
    :form-type="FormType"
    :added-fields="AddFields"
    :added-dropdowns="AddDropdowns"
    :button-text="ButtonText"
    :client-link="ClientLink"
    :post-values="PostValues"
    :consent="consent"
    :inline="inline"
    :zap-post="ZapPost"
    :form-test="FormTest"
    :consent-text="ConsentText"
    :hsla="theme.hsla"
    :accent-skew="theme.accentSkew"
    :custom-placeholders="CustomPlaceholders"
    :dark-background="theme.isDark"
    :theme="theme"
    v-on:modal-control="ModalSwitch()"
  >
    <slot></slot>
  </form-base>
</template>

<script>
import FormBase from "../form_base/FormBase.vue";
export default {
  name: "FormController",
  components: { FormBase },
  props: {
    loadForm: {
      type: Boolean,
      default: false,
    },
    FormType: {
      type: Number,
      default: 1,
    },
    FormReactor: {
      type: String,
    },
    Bjn: {
      type: String,
    },
    AddFields: {
      type: Array,
    },
    AddDropdowns: {
      type: Array,
    },
    ButtonText: {
      type: String,
    },
    CtaText: {
      type: String,
    },
    ClientLink: {
      type: String,
      default: "",
    },
    IsModal: {
      type: Boolean,
      default: false,
    },
    HideForm: {
      type: Boolean,
      default: false,
    },
    PostValues: {
      type: Array,
    },
    consent: {
      type: Boolean,
      default: true,
    },
    inline: {
      type: Boolean,
      default: false,
    },
    ZapPost: {
      type: String,
    },
    FormTest: {
      type: Boolean,
      default: false,
    },
    ConsentText: {
      type: String,
    },
    DarkBackground: {
      type: Boolean,
    },
    theme: {
      type: Object,
      default() {
        return {
          hsla: { h: 220, s: 100, l: 30, a: 1 },
          textColor: { h: 220, s: 30, l: 25, a: 1 },
          accent: { h: 220, s: 100, l: 30, a: 1 },
          background: 100,
          isDark: false,
        };
      },
    },
    hsla: {
      type: Object,
      default() {
        return {
          h: 200,
          s: 100,
          l: 50,
          a: 1,
        };
      },
    },
    accentSkew: {
      type: Number,
      default: 1.85,
    },
    CustomPlaceholders: {
      type: Object,
    },
  },
  data() {
    return {
      MainFormSwitch: false,
    };
  },
  watch: {
    HideForm: function () {
      this.ModalSwitch();
    },
  },

  methods: {
    ModalSwitch: function () {
      this.MainFormSwitch = !this.MainFormSwitch;
    },
    ModalLoad: function () {
      if (this.IsModal) {
        this.MainFormSwitch = true;
      } else {
        this.MainFormSwitch = this.loadForm;
      }
    },
  },
  mounted() {
    this.ModalLoad();
  },
};
</script>

<style scoped lang="scss"></style>
