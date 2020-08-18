<template>
  <div style="text-align:center; color:white; font-weight: bold" id="status">
    {{ statusText[0] }}
  </div>
</template>

<script>
export default{
  name: "ErrorMessage",
  data() {
    return {
      statusText: []
    };
  },
  props: {
    ReceivedText: {
      type: Array
    }
  },
  watch: {
    ReceivedText() {
      if (this.ReceivedText.length > 0) {
        this.statusText = this.ReceivedText;
        this.openStatus();
      }
    }
  },
  methods: {
    openStatus() {
      const status = document.getElementById("status");
      const htmlStatus = status;
      htmlStatus.classList.remove("status-close");
      htmlStatus.classList.add("status-open");
      setTimeout(() => {
        this.addOnClick();
      }, 500);
    },

    addOnClick() {
      document.addEventListener("click", this.closeStatus);
    },

    closeStatus() {
      const status = document.getElementById("status");
      const htmlStatus = status;
      htmlStatus.classList.add("status-close");
      htmlStatus.classList.remove("status-open");
      this.statusText = [];
      this.removeOnClick();
    },

    removeOnClick() {
      document.removeEventListener("click", this.closeStatus);
    }
  }
};
</script>

<style scoped lang="scss">
#status {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  margin: auto;
  background: rgba(156, 17, 41, 0.9);
  overflow: hidden;
  display: grid;
  align-content: center;
  justify-content: center;
  box-shadow: 0 3px 5px black;
  font-size: 2rem;
}

.status-closed {
  height: 0;
}

.status-open {
  animation: status-open forwards 0.4s ease-out;
  z-index: 9999;
}
@keyframes status-open {
  from {
    height: 0px;
  }

  to {
    height: 100px;
  }
}
</style>
