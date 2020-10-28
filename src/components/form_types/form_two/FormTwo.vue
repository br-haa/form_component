<template>
  <div class="form2" v-if="FormType === 2">
    <div class="name-grid">
      <text-field
        @validating="trackValidation"
        :text-text="FirstNamePlaceholder"
        :text-id="'FirstName'"
      ></text-field>
      <text-field
        @validating="trackValidation"
        :text-text="LastNamePlaceholder"
        :text-id="'LastName'"
      ></text-field>
    </div>
    <email @validating="trackValidation" :email-text="EmailPlaceholder"></email>
    <phone-number
      @validating="trackValidation"
      :phone-text="PhonePlaceholder"
    ></phone-number>

    <div class="state-zip-grid">
      <StateDropdown
        @validating="trackValidation"
        :state-text="StatePlaceholder"
      ></StateDropdown>
      <Zip @validating="trackValidation" :zip-text="ZipPlaceholder"></Zip>
    </div>
    <div class="addedFieldsGrid" v-if="AddedFields">
      <text-field
        class="BasicField"
        @validating="trackValidation"
        v-for="field in AddedFields"
        :text-text="field.placeholder"
        :key="field.id"
        :text-id="field.id"
        :text-name="field.name"
        :not-required="field.NotRequired"
      ></text-field>
    </div>
    <div class="addedFieldsGrid" v-if="AddedDropdowns">
      <dropdown-field
        class="BasicField"
        @validating="trackValidation"
        v-for="dropdown in AddedDropdowns"
        :key="dropdown.id"
        :base-text="dropdown.placeholder"
        :Options="dropdown.options"
        :base-id="dropdown.id"
        :base-name="dropdown.name"
        :not-required="dropdown.NotRequired"
      >
      </dropdown-field>
    </div>
  </div>
</template>

<script>
export default {
  name: "FormTwo",
};
</script>

<style scoped lang="scss">
.form2 {
  display: grid;
  grid-gap: 1.5rem;
  grid-template-columns: 1fr 1fr 1fr;
  margin-bottom: 1.5rem;
  @media (max-width: 1080px) {
    grid-template-columns: 1fr;
  }
  .addedFieldsGrid {
    grid-column: span 3;
    display: grid;
    grid-gap: 1.5rem;
    grid-template-columns: 1fr 1fr 1fr;
    @media (max-width: 1080px) {
      grid-template-columns: 1fr;
      grid-column: span 1;
    }
  }
}
</style>
