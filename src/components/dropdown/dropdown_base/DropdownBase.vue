<template>
  <label
    class="fields"
    :for="BaseId"
    :class="{ fieldFocus: focused || userInput !== '' }"
  >
    <span class="fieldText">{{ SetPlaceholder() }}</span>
    <select
      :class="{ passed: passed }"
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
        :value="getAbbv(option)"
        :key="option.name"
      >
        {{ option.name }}
      </option>
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
        filled: false,
      },
    };
  },
  props: {
    Options: {
      type: Array,
    },
    BaseId: {
      type: String,
    },
    BaseName: {
      type: String,
    },
    NotRequired: {
      type: Boolean,
    },
    BaseText: {
      type: String,
      default: "Pick An Option",
    },
    passed: {
      type: Boolean,
    },
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
    },
    getAbbv(option) {
      if (option.abbreviation) {
        return `${option.abbreviation} ${option.name}`;
      } else {
        return option.name;
      }
    },
  },
};
</script>

<style scoped lang="scss">
$small-size: 640px;
.passed {
  border-bottom: #3eaf7c solid 2px;
}
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
    transform: translateY(-1rem);
    transition: 0.3s;
    font-size: 0.7rem;
    @media (max-width: $small-size) {
      transform: translateY(-1rem);
      font-size: 0.7rem;
    }
  }
}
select {
  border: none;
  box-shadow: 0 0 1px 0.5px black;
  transition: 0.5s;
  padding: 0.8rem;
}

select:focus {
  outline: none;
  box-shadow: 0 0 3px 1px black;
  transition: 0.5s ease-in-out;
}
</style>
