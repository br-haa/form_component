<template>
  <label
    class="date-fields"
    :for="BaseId"
    :class="{ 'date-fieldFocus': focused || userInput !== '' }"
  >
    <input
      :class="{ passed: passed }"
      @change="SendUp"
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
  name: "DateBase",
  data() {
    return {
      focused: false,
      userInput: "",
      info: {
        name: this.BaseName,
        filled: false,
      },
    };
  },
  props: {
    BaseText: {
      type: String,
    },
    BaseId: {
      type: String,
    },
    BaseName: {
      type: String,
    },
    BaseType: {
      type: String,
      default: `text`,
    },
    NotRequired: {
      type: Boolean,
    },
    passed:{
      type: Boolean,
    },
  },
  methods: {
    SetPlaceholder: function () {
      if (this.NotRequired) {
        return this.BaseText;
      } else {
        return `*${this.BaseText}`;
      }
    },
    checkFilled() {
      this.info.filled = this.userInput === "";
    },
    SendUp: function () {
      this.$emit("input", this.userInput);
    },
  },
};
</script>

<style scoped lang="scss">
$small-size: 640px;
.passed {
  border-bottom: #3eaf7c solid 2px;
}
.date-fields {
  display: grid;
  .date-fieldText {
    grid-area: 1 / 1 / 2 / 2;
    align-self: start;
    z-index: 11;
    padding: 5px 0 0 1rem;
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
.date-fieldFocus {
  .date-fieldText {
    background: none;
    grid-area: 1 / 1 / 2 / 2;
    z-index: 11;
    padding: 0 0 0 0;
    transform: translateY(-1rem);
    transition: 0.3s;
    font-size: 0.7rem;
    @media (max-width: $small-size) {
      transform: translateY(-1rem);
      font-size: 0.7rem;
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
