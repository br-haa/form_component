<template>
  <label
    class="fields"
    :for="BaseId"
    :class="{ fieldFocus: focused || userInput !== '' }"
  >
    <span class="fieldText">{{ SetPlaceholder() }}</span>
    <input
      @input="SendUp"
      @focus="focused = true"
      @blur="
        focused = false;
        SendUp;
      "
      :id="BaseId"
      :type="BaseType"
      :name="BaseName"
      v-model="userInput"
    />
  </label>
</template>

<script>
export default {
  name: "BaseField",
  data() {
    return {
      focused: false,
      userInput: "",
      info: {
        name: this.BaseName,
        filled: false
      }
    };
  },
  props: {
    BaseText: {
      type: String
    },
    BaseId: {
      type: String
    },
    BaseName: {
      type: String
    },
    BaseType: {
      type: String,
      default: `text`
    },
    NotRequired: {
      type: Boolean
    }
  },
  methods: {
    // sets the asterisk for required fields
    SetPlaceholder: function() {
      if (this.NotRequired) {
        return this.BaseText;
      } else {
        return `*${this.BaseText}`;
      }
    },
    checkFilled() {
      this.info.filled = this.userInput === "";
    },
    SendUp: function() {
      this.$emit("input", this.userInput);
    }
  }
};
</script>

<style scoped lang="scss">
$small-size: 640px;
.fields {
  display: grid;
  .fieldText {
    grid-area: 1 / 1 / 2 / 2;
    align-self: start;
    z-index: 11;
    margin: 5px 0 0 1rem;
    cursor: text;
    transform: translateY(0);
    transition: 0.3s;
    pointer-events: none;
    user-select: none;
  }
  input {
    grid-area: 1 / 1 / 2 / 2;
  }
}
.fieldFocus {
  .fieldText {
    grid-area: 1 / 1 / 2 / 2;
    z-index: 11;
    margin: 0 0 0 0;
    transform: translateY(-1.2rem);
    transition: 0.3s;
    font-size: 1rem;
    @media (max-width: $small-size) {
      transform: translateY(-1rem);
      font-size: 0.8rem;
    }
  }
}
input {
  border: none;
  box-shadow: 0 0 1px 0.5px black;
  transition: 0.5s;
  padding: 0.5rem 0.5rem 0.5rem 0.5rem;
}

input:focus {
  outline: none;
  box-shadow: 0 0 3px 1px black;
  transition: 0.5s ease-in-out;
}
</style>
