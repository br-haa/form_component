<template>
  <form-base
    v-if="MainFormSwitch"
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
    :hsla="hsla"
    :accent-skew="accentSkew"
    :custom-placeholders="CustomPlaceholders"
    v-on:modal-control="ModalSwitch()"
  ></form-base>
</template>

<script>
import FormBase from "../form_base/FormBase.vue";
export default {
  name: "FormController",
  components: { FormBase },
  props: {
    loadForm: {
      type: Boolean,
      default: true,
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
      //Todo this can't be right?
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
    hsla: {
      type: Object,
      default() {
        return {
          hue: 200,
          saturation: 100,
          lightness: 50,
          alpha: 1,
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
      MainFormSwitch: true,
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
      if (this.PropIsModal) {
        this.MainFormSwitch = false;
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
