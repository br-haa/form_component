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
      default: true
    },
    FormType: {
      type: Number,
      default: 1
    },
    FormReactor: {
      type: String
    },
    Bjn: {
      type: String
    },
    AddFields: {
      type: Object
    },
    ButtonText: {
      type: String
    },
    CtaText: {
      type: String
    },
    ClientLink: {
      type: String,
      default: ""
    },
    IsModal: {
      type: Boolean,
      default: false
    },
    PostValues: {
      type: Array
    }
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
      PropHideForm: false
    };
  },
  methods: {
    ModalSwitch: function() {
      this.PropHideForm = !this.PropHideForm;
    },
    ModalLoad() {
      if (this.PropIsModal) {
        this.HideForm = true;
      }
    }
  },
  mounted() {
    this.ModalLoad();
  }
};
</script>

<style scoped lang="scss"></style>
