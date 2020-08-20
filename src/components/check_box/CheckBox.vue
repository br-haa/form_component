<template>
  <div>
    <input
      id="consent"
      type="checkbox"
      v-model="CheckStatus"
      @change="SendUp()"
      name="Consent"
      required
    />
    <label id="myCheck" for="consent">
      <span id="check"></span>
    </label>
  </div>
</template>

<script>
export default {
  name: "CheckBox",
  data() {
    return {
      CheckStatus: false,
    };
  },
  methods: {
    SendUp: function () {
      this.$emit("input", this.CheckStatus);
    },
  },
};
</script>

<style scoped lang="scss">
$accent-color: #4a8aff;
#consent {
  display: none;
}
#myCheck {
  align-self: center;
  cursor: pointer;
  display: block;
  height: 25px;
  width: 25px;
  border: 3px solid dimgrey;
  background: #ffffff;
  box-sizing: border-box;
  #check {
    display: block;
    background: $accent-color;
    height: 100%;
    width: 100%;
    -webkit-clip-path: polygon(
      40% 70%,
      100% 6%,
      100% 38%,
      43% 100%,
      0 73%,
      0 47%
    );
    clip-path: polygon(40% 70%, 100% 6%, 100% 38%, 43% 100%, 0 73%, 0 47%);
    transition: 0.3s ease-in-out;
    transform: scale(0.9);
    opacity: 0;
  }
}
#consent:checked + #myCheck {
  animation: bounce forwards 0.3s ease-in;
  #check {
    transition: 0.2s ease-in-out;
    transform: scale(1.45) translateY(-4px);
    opacity: 1;
  }
}

@keyframes bounce {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(2px);
  }
  100% {
    transform: translateY(0);
  }
}
</style>
