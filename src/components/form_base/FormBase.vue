<template>
  <div>
    <error-message :received-text="errorText"></error-message>
    <thank-you
      v-if="thankYouActive"
      :activated="thankYouActive"
      :client-link="ClientLink"
      :form-test="FormTest"
      :response="formResponse"
    ></thank-you>
    <transition name="fade">
      <div  v-bind:class="{ 'form-is-modal': IsModal }">
        <div id="form-outside">
          <div class="XHolder" v-if="IsModal">
            <button class="modal-close" v-on:click="$emit(`modal-control`)">
              <span class="theXFactor"></span>
            </button>
          </div>
          <transition name="in-out" appear>
            <div id="form-inside">
              <div class="cta-text">
                <h2>{{ CtaText }}</h2>
                <div class="formSlotHolder">
                  <slot></slot>
                </div>
              </div>
              <form
                id="contact-form"
                :class="{ darkBackground: DarkBackground }"
                :style="{ color: getTextColor }"
              >
                <component v-bind:is="getFormType" :inline="inline">
                  <template v-slot:FirstName>
                    <text-field
                      @validating="trackValidation"
                      :text-text="Placeholders.FirstName"
                      :text-id="'FirstName'"
                    ></text-field>
                  </template>
                  <template v-slot:LastName>
                    <text-field
                      @validating="trackValidation"
                      :text-text="Placeholders.LastName"
                      :text-id="'LastName'"
                    ></text-field>
                  </template>
                  <template v-slot:Email>
                    <email
                      @validating="trackValidation"
                      :email-text="Placeholders.Email"
                    ></email>
                  </template>
                  <template v-slot:Phone>
                    <phone-number
                      @validating="trackValidation"
                      :phone-text="Placeholders.Phone"
                    ></phone-number>
                  </template>
                  <template v-slot:Address>
                    <text-field
                      @validating="trackValidation"
                      :text-text="Placeholders.Address"
                      :text-id="'Address'"
                    ></text-field>
                  </template>
                  <template v-slot:City>
                    <text-field
                      @validating="trackValidation"
                      :text-text="Placeholders.City"
                      :text-id="'City'"
                    ></text-field>
                  </template>
                  <template v-slot:States>
                    <StateDropdown
                      @validating="trackValidation"
                      :state-text="Placeholders.State"
                    ></StateDropdown>
                  </template>
                  <template v-slot:Zip>
                    <Zip
                      @validating="trackValidation"
                      :zip-text="Placeholders.Zip"
                    ></Zip>
                  </template>
                  <template v-slot:Date>
                    <DateInput
                      class="long-span"
                      :date-text="Placeholders.Date"
                      @validating="trackValidation"
                    ></DateInput>
                  </template>
                  <template v-slot:StatesTwo>
                    <StateDropdown
                      class="long-span"
                      @validating="trackValidation"
                      :duplicate="2"
                      :state-text="Placeholders.StateTwo"
                    ></StateDropdown>
                  </template>
                </component>
                <div
                  class="addedFieldsGrid"
                  v-if="AddedFields || AddedDropdowns"
                >
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
                  ></dropdown-field>
                </div>
                <text-area
                  @validating="trackValidation"
                  :text-text="Placeholders.Message"
                  :text-id="'Message'"
                  :not-required="true"
                  :form-type="FormType"
                ></text-area>
                <check-box-holder
                  @validating="trackValidation"
                  v-if="consent"
                  :consent-text="ConsentText"
                  :theme="theme"
                  :accentSkew="accentSkew"
                  :dark-background="DarkBackground"
                ></check-box-holder>
              </form>
              <div class="buttonGrid">
                <div class="line" :style="{ background: getLineColor }"></div>
                <div>
                  <button
                    id="SubmitButton"
                    @click="FormPostStart"
                    class="btn1"
                    :style="{
                      background: `hsl(${theme.accent.h},${theme.accent.s}%,${theme.accent.l}%)`,
                    }"
                  >
                    {{ ButtonText }}
                  </button>
                </div>
                <div class="line" :style="{ background: getLineColor }"></div>
              </div>
            </div>
          </transition>
        </div>
      </div>
    </transition>
  </div>
</template>
<script>
import TextField from "../text_field/TextField.vue";
import Email from "../email/Email.vue";
import PhoneNumber from "../phone_number/PhoneNumber.vue";
import ErrorMessage from "../error_message/ErrorMessage.vue";
import TextArea from "../text_area/text_area/TextArea.vue";
import CheckBoxHolder from "../check_box/check_box_holder/CheckBoxHolder.vue";
import ThankYou from "../thank_you/ThankYou.vue";
import StateDropdown from "../dropdown/state_dropdown/StateDropdown.vue";
import Zip from "../zip_field/Zip.vue";
import DateInput from "../date/date_input/DateInput.vue";
import DropdownField from "../dropdown/dropdown_field/DropdownField";
import FormOne from "../form_types/form_one/FormOne";
import FormTwo from "../form_types/form_two/FormTwo";
import FormThree from "../form_types/form_three/FormThree";
export default {
  components: {
    DropdownField,
    DateInput,
    Zip,
    StateDropdown,
    ThankYou,
    CheckBoxHolder,
    TextArea,
    ErrorMessage,
    PhoneNumber,
    Email,
    TextField,
    FormOne,
    FormTwo,
    FormThree,
  },

  name: "FormBase",
  data: () => ({
    validationObjects: [], // the objects as they get pulled from the fields
    errorText: [], // where the error messages go
    thankYouActive: false, // triggers the thank-you page
    CtmObject: {}, // the final object that gets posted to CTM
    AllData: [], // the combination of the validated objects and Post data
    Placeholders: {
      FirstName: "First Name",
      LastName: "Last Name",
      Email: "Email",
      Phone: "Phone",
      Address: "Address",
      City: "City",
      State: "State",
      Zip: "Zip",
      Date: "Date",
      StateTwo: "State",
      Message: "Message",
    },
    formResponse: "",
  }),
  props: {
    AddedFields: {
      type: Array,
    },
    AddedDropdowns: {
      type: Array,
    },
    ButtonText: {
      type: String,
      default: `Get Started!`,
    },
    FormType: {
      type: Number,
    },
    FormReactor: {
      type: String,
    },
    Bjn: {
      type: String,
    },
    ClientLink: {
      type: String,
    },
    IsModal: {
      type: Boolean,
    },
    CtaText: {
      type: String,
    },
    HideForm: {
      type: Boolean,
    },
    PostValues: {
      type: Array,
    },
    consent: {
      type: Boolean,
    },
    inline: {
      type: Boolean,
    },
    ZapPost: {
      type: String,
    },
    FormTest: {
      type: Boolean,
    },
    ConsentText: {
      type: String,
    },
    hsla: {
      type: Object,
    },
    accentSkew: {
      type: Number,
    },
    CustomPlaceholders: {
      type: Object,
    },
    DarkBackground: {
      type: Boolean,
    },
    theme: {
      type: Object,
    },
  },
  computed: {
    getFormType() {
      if (this.FormType === 1) {
        return "FormOne";
      } else if (this.FormType === 2) {
        return "FormTwo";
      } else if (this.FormType === 3) {
        return "FormThree";
      } else {
        return "FormOne";
      }
    },
    getTextColor() {
      if (this.DarkBackground && this.theme) {
        return `hsla(${this.theme.textColor.h},${this.theme.textColor.s}%,${this.theme.background}%,${this.theme.textColor.a})`;
      } else if (this.theme) {
        return `hsla(${this.theme.textColor.h},${this.theme.textColor.s}%,${this.theme.textColor.l}%,${this.theme.textColor.a})`;
      } else {
        return `black`;
      }
    },
    getLineColor() {
      if (this.DarkBackground) {
        return "white";
      } else if (this.theme) {
        return `hsla(${this.theme.textColor.h},${this.theme.textColor.s}%,${this.theme.textColor.l}%,${this.theme.textColor.a})`;
      } else {
        return "black";
      }
    },
  },
  methods: {
    trackValidation(name, id, value, status) {
      //pulls each of the objects from the fields or rather gets slapped with it at every button press.
      const obj = { name: name, id: id, value: value, status: status };
      let check = [];
      this.validationObjects.forEach((item) => {
        // updates value if found
        if (item.id === id) {
          item.status = status;
          item.value = value;
          check.push(true);
        } else {
          check.push(false);
        }
      });
      if (
        check.some((x) => {
          return x;
        })
      ) {
        // if not found adds to array
        check = [];
      } else {
        this.validationObjects.push(obj);
        check = [];
      }
    },
    FormPostStart() {
      if (
        this.validationObjects.some((item) => {
          return !item.status;
        })
      ) {
        // if a false is found for an object status its goes to error message
        this.errorText = [];
        this.HandleErrorMessage();
      } else {
        this.CreateObject();
      }
    },
    getUrlParams() {
      const queryString = window.location.search;
      const urlParams = new URLSearchParams(queryString);
      const entries = urlParams.entries();
      let arr = [];
      for (const entry of entries) {
        let obj = {};
        obj[entry[0]] = entry[1];
        obj.id = entry[0];
        obj.value = entry[1];
        arr.push(obj);
      }
      console.log(arr);
      return arr;
    },
    CreateObject() {
      // creating the form post object for ctm
      this.CtmObject = {
        country_code: "1", // the expected country code e.g. +1, +44, +55, +61, etc... the plus is excluded
        name: this.search(`FirstName`) + " " + this.search(`LastName`),
        phone: this.search(`Phone`),
        email: this.search(`Email`),
        custom: {},
      };
      if (this.PostValues) {
        this.AllData = this.validationObjects.concat(this.PostValues);
      }
      this.AllData = this.AllData.concat(this.getUrlParams());
      this.setTimeStamp(); // updates time stamp
      console.log("Posting this data"); // console logging the visible form data
      this.AllData.forEach((x) => {
        console.log(x.id + " " + x.value);
      });
      this.AllData.forEach((vo) => {
        // adding all the post values and custom values to the custom object
        if (vo.id !== "Phone" && vo.id !== "Email") {
          // basically just not repeating phone and email
          this.CtmObject.custom[vo.id] = vo.value;
        }
      });
      if (!this.FormTest) {
        this.PostType1();
        if (this.ZapPost) {
          this.sendZapPost();
        }
      } else {
        this.ThankYouPageActivate();
        console.log(
          "%c FORM TEST ACTIVE!!!!!!!!!!!!!!!!!",
          "color: black; background: red"
        );
      }
    },

    HandleErrorMessage() {
      // error message handling. who could have guessed
      this.validationObjects.forEach((x) => {
        if (!x.status) {
          this.errorText.push(`Please check ${x.name} is filled correctly`);
        }
      });
    },
    setTimeStamp() {
      this.pushValues(
        { id: "TimeStamp", value: new Date().getTime() },
        this.AllData
      );
    },
    PostType1() {
      // sending off the data
      // eslint-disable-next-line no-undef
      __ctm.form.track(
        "app.calltrackingmetrics.com",
        this.FormReactor,
        this.Bjn,
        this.CtmObject
      );
      this.ThankYouPageActivate();
    },
    sendZapPost: function () {
      let custom = {};
      this.AllData.forEach((vo) => {
        // adding all the post values and custom values to the custom object
        custom[vo.id] = vo.value;
      });
      console.log(custom);
      let xhr = new XMLHttpRequest(),
        method = "POST",
        url = this.ZapPost; // live
      xhr.open(method, url, true);
      // Set content type header information for sending url encoded variables in the request
      xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
      xhr.send(JSON.stringify(custom));
    },

    search: function (id) {
      // grabbing object value by id name
      for (let i = 0; i < this.validationObjects.length; i++) {
        const oob = this.validationObjects[i];
        if (oob.id === id) {
          return oob.value;
        }
      }
    },
    ThankYouPageActivate() {
      // activating thankyou modal
      this.thankYouActive = true;
    },
    pushValues(value, destination) {
      // pushing variables into designated arrays
      let obj = { id: value.id, value: value.value };
      let check = [];
      destination.forEach((item) => {
        if (item.id === value.id) {
          item.value = value.value;
          check.push(true);
        } else {
          check.push(false);
        }
      });
      if (
        check.some((x) => {
          return x === true;
        })
      ) {
        check = [];
      } else {
        destination.push(obj);
        check = [];
      }
    },
    setPlaceholders() {
      // needs to compare the custom place holder object with the placeholder object and replace the ones with matching names
      if (this.CustomPlaceholders) {
        for (const name in this.CustomPlaceholders) {
          if (
            Object.keys(this.Placeholders).some((k) => {
              return ~k.indexOf(name);
            })
          ) {
            this.Placeholders[name] = this.CustomPlaceholders[name];
          }
        }
      }
    },
  },
  mounted() {
    this.setPlaceholders();
  },
};
</script>

<style scoped lang="scss">
$accent-color: orange !default;
.formSlotHolder {
  margin-bottom: 1rem;
}
.darkBackground {
  .fieldFocus {
    color: white !important;
  }
}
#form-outside {
  scroll-margin-top: 20vh;
}

.addedFieldsGrid {
  display: grid;
  grid-gap: 1.5rem;
  grid-template-columns: 1fr;
  margin-bottom: 1.5rem;
  @media (max-width: 1080px) {
    grid-template-columns: 1fr;
    grid-column: span 1;
  }
}
#contact-form {
}
.buttonGrid {
  display: grid;
  margin-top: 2rem;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  justify-items: center;
  grid-column-gap: 1rem;
  .line {
    width: 100%;
    height: 3px;
    background: black;
  }
  @media (max-width: 640px) {
    margin-top: 1rem;
  }
}
.form-is-modal {
  #form-outside {
    width: 100vw;
    height: 100vh;
    position: fixed;
    z-index: 100;
    top: 0;
    left: 0;
    background: rgba(2, 2, 19, 0.85);
    display: grid;
    padding: 1rem;
    box-sizing: border-box;
    grid-template-rows: auto 1fr;
    overflow: scroll;
    -ms-overflow-style: none;
    scrollbar-width: none;
    &::-webkit-scrollbar {
      display: none;
    }
    #form-inside {
      align-self: center;
      justify-self: center;
      box-sizing: border-box;
      background: rgba(255, 255, 255, 0.8);
      padding: 1rem 2rem;
      box-shadow: 0 0 7px 7px rgba(0, 0, 0, 0.66),
        0 0 5px 3px rgba(0, 0, 0, 0.36), 0 0 3px 1px rgba(0, 0, 0, 0.76);
      margin-top: -2rem;
    }
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
.in-out-enter-active {
  animation: in 0.5s;
}
.in-out-leave-active {
  animation: in 0.3s reverse;
}
@keyframes in {
  0% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
  }
}

.XHolder {
  grid-area: 1/1/2/2;
  align-self: start;
  justify-self: end;
  margin: 1.5rem 3rem;
  @media (max-width: 640px) {
    margin: 0.5rem 0.5rem;
  }
}
.modal-close {
  border: none;
  outline: none;
  background: none;
  height: 60px;
  width: 60px;
  margin: 0;
  padding: 0.5rem;
  box-sizing: border-box;
  justify-self: end;
  cursor: pointer;
  transition: 0.3s ease-out;
  filter: drop-shadow(0 1px 3px black);
  &:hover {
    transform: scale(1.2) rotate(180deg);
    transition: 0.4s ease-out;
    filter: drop-shadow(0 1px 5px black);
  }
  .theXFactor {
    display: block;
    width: 100%;
    height: 100%;
    background: $accent-color;
    clip-path: polygon(
      20% 0%,
      0% 20%,
      30% 50%,
      0% 80%,
      20% 100%,
      50% 70%,
      80% 100%,
      100% 80%,
      70% 50%,
      100% 20%,
      80% 0%,
      50% 30%
    );
    -webkit-clip-path: polygon(
      20% 0%,
      0% 20%,
      30% 50%,
      0% 80%,
      20% 100%,
      50% 70%,
      80% 100%,
      100% 80%,
      70% 50%,
      100% 20%,
      80% 0%,
      50% 30%
    );
  }
}
.cta-text {
  text-align: center;
}
#SubmitButton {
  background: $accent-color;
}
.btn1 {
  cursor: pointer;
  padding: 0.5rem 1rem 0.5rem 1rem;
  border: none;
  box-shadow: 0 0 3px 1px black;
  transition: 0.1s;
  border-radius: 1px;
}
.btn1:hover {
  box-shadow: 0 0 2.5px 1px black;
  transition: 0.1s;
  transform: scale(1.015);
}
.btn1:focus {
  outline: none;
}
.btn1:active {
  box-shadow: 0 0 1px 1px black;
  transition: 0.01s;
  transform: scale(0.99);
}
</style>
