<template>
  <form-base
    v-if="loadForm"
    :cta-text="PropCtaText"
    :hide-form="PropHideForm"
    :is-modal="PropIsModal"
    :form-reactor="FormReactor"
    :Bjn="PropBjn"
    :form-type="PropFormType"
    :added-fields="PropAddFields"
    :button-text="PropButtonText"
    :client-link="PropClientLink"
    :post-values="PostValues"
    :consent="consent"
    :inline="inline"
    :zap-post="ZapPost"
    :form-test="FormTest"
    :first-name-placeholder="PropFirstNamePlaceholder"
    :last-name-placeholder="PropLastNamePlaceholder"
    :email-placeholder="PropEmailPlaceholder"
    :phone-placeholder="PropPhonePlaceholder"
    :address-placeholder="PropAddressPlaceholder"
    :city-placeholder="PropCityPlaceholder"
    :state-placeholder="PropState2Placeholder"
    :zip-placeholder="PropZipPlaceholder"
    :date-placeholder="PropDatePlaceholder"
    :state2-placeholder="PropState2Placeholder"
    :message-placeholder="PropMessagePlaceholder"
    :consent-text="PropConsentText"
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
      type: Object,
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
    FirstNamePlaceholder: {
      type: String,
    },
    LastNamePlaceholder: {
      type: String,
    },
    EmailPlaceholder: {
      type: String,
    },
    PhonePlaceholder: {
      type: String,
    },
    MessagePlaceholder: {
      type: String,
    },
    AddressPlaceholder: {
      type: String,
    },
    CityPlaceholder: {
      type: String,
    },
    StatePlaceholder: {
      type: String,
    },
    ZipPlaceholder: {
      type: String,
    },
    DatePlaceholder: {
      type: String,
    },
    State2Placeholder: {
      type: String,
    },
    ConsentText: {
      type: String,
    },
  },
  data() {
    return {
      PropFormType: this.FormType,
      PropFormReactor: this.FormReactor,
      PropBjn: this.PropBjn,
      PropAddFields: this.AddFields, //EXAMPLE [{placeholder: `address`, id: `address`, NotRequired: true,}]
      PropButtonText: this.ButtonText,
      PropCtaText: this.CtaText,
      PropClientLink: this.ClientLink,
      PropIsModal: this.IsModal,
      PropFirstNamePlaceholder: this.FirstNamePlaceholder,
      PropLastNamePlaceholder: this.LastNamePlaceholder,
      PropEmailPlaceholder: this.EmailPlaceholder,
      PropPhonePlaceholder: this.PhonePlaceholder,
      PropAddressPlaceholder: this.AddressPlaceholder,
      PropCityPlaceholder: this.CityPlaceholder,
      PropStatePlaceholder: this.StatePlaceholder,
      PropZipPlaceholder: this.ZipPlaceholder,
      PropDatePlaceholder: this.DatePlaceholder,
      PropState2Placeholder: this.State2Placeholder,
      PropMessagePlaceholder: this.MessagePlaceholder,
      PropConsentText: this.ConsentText,
      PropHideForm: false,
    };
  },
  watch: {
    HideForm: function () {
      this.ModalSwitch();
    },
  },
  methods: {
    ModalSwitch: function () {
      this.loadForm = !this.loadForm;
    },
  },
  mounted() {
    this.ModalLoad();
  },
};
</script>

<style scoped lang="scss"></style>
