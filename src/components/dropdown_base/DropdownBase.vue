<template>
  <label
    class="fields"
    :for="BaseId"
    :class="{ fieldFocus: focused || userInput !== '' }"
  >
    <span class="fieldText">{{ SetPlaceholder() }}</span>
    <select
      :name="BaseName"
      @change="SendUp"
      @focus="focused = true"
      @blur="
        focused = false;
        SendUp;
      "
      :id="BaseId"
      v-model="userInput"
    >
      <option
        v-for="option in Options"
        :value="option.name"
        :key="option.name"
        >{{ option.name }}</option
      >
    </select>
  </label>
</template>

<script>
export default {
  name: "DropdownBase",
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
    Options: {
      type: Array
    },
    BaseId: {
      type: String
    },
    BaseName: {
      type: String
    },
    NotRequired: {
      type: Boolean
    },
    BaseText: {
      type: String,
      default: "Pick An Option"
    }
  },
  methods: {
    SetPlaceholder() {
      if (this.NotRequired) {
        return this.BaseText;
      } else {
        return `*${this.BaseText}`;
      }
    },
    checkFilled() {
      this.info.filled = this.userInput === "";
    },
    SendUp() {
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
    z-index: 11;
    margin: 5px 0 0 1rem;
    cursor: text;
    transform: translateY(0);
    transition: 0.3s;
    pointer-events: none;
    user-select: none;
  }
  select {
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
select {
  border: none;
  box-shadow: 0 0 1px 0.5px black;
  transition: 0.5s;
  padding: 0.5rem 0.5rem 0.5rem 0.5rem;
}

select:focus {
  outline: none;
  box-shadow: 0 0 3px 1px black;
  transition: 0.5s ease-in-out;
}
</style>
