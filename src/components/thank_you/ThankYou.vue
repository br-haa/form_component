<template>
  <transition name="fade">
    <div v-show="activated" id="modal-wrapper">
      <div id="XHolder">
        <button id="modal-close" v-on:click="close">
          <span id="theXFactor"></span>
        </button>
      </div>
      <transition name="fall">
        <div id="thankyou" class="thankyou-wrapper">
          <div class="thankyou-grid">
            <div class="thankyou-left">
              <div class="thankyou-main-text">
                <h1 v-if="FormTest">FORM TEST ACTIVE</h1>
                <h1 v-if="!FormTest">Thank You</h1>
                <div class="thankyou-back-row">
                  <button id="back-button" v-on:click="close()">Go back</button>
                  <p>We will be back in touch with you as soon as possible.</p>
                </div>
              </div>
            </div>
            <div class="thankyou-right">
              <h2>For more information visit</h2>
              <p v-if="response">{{ response }}</p>
              <div class="thankyou-client-link">
                <div class="client-line"></div>
                <!--edit the client link in the script tag below-->
                <a v-bind:href="ClientLink" class="thankyou-link">{{
                  ClientLink
                }}</a>
                <div class="client-line"></div>
              </div>
            </div>
          </div>
        </div>
      </transition>
    </div>
  </transition>
</template>

<script>
export default {
  name: "ThankYou",
  props: {
    activated: {
      type: Boolean,
      default: false,
    },
    ClientLink: {
      type: String,
    },
    FormTest: {
      type: Boolean,
      default: false,
    },
    response: {
      type: String,
    },
  },
  methods: {
    close: function () {
      //the back button that actually just reloads the page lul
      window.location.reload(true);
    },
  },
};
</script>

<style scoped lang="scss">
$accent-color: teal;
$small-size: 640px;

.thankyou-wrapper {
  z-index: 9999;
  display: grid;
  grid-template-columns: 1fr;
  background: linear-gradient(45deg, #201e5f, #006967);
  height: 100vh;
  width: 100vw;
  position: fixed;
  left: 0;
  top: 0;
  font-family: "Source Sans Pro", sans-serif;
  -webkit-background-size: cover;
  background-size: cover;
  background-repeat: no-repeat;
}

@media (max-width: 600px) {
  .thankyou-wrapper {
  }
}

.thankyou-grid {
  width: 90%;
  justify-self: center;
  display: grid;
  grid-template-columns: 1fr 1fr;
}

@media (max-width: 1050px) {
  .thankyou-grid {
    grid-template-columns: 1fr;
  }
}
.thankyou-left {
  align-self: start;
  @media (max-width: 1050px) {
    grid-area: 1/1/1/1;
  }
}
.thankyou-back-row {
  display: grid;
  grid-template-columns: auto 1fr;
  grid-column-gap: 1vw;
}

.thankyou-right {
  align-self: center;
  @media (max-width: 1050px) {
    grid-area: 1/1/1/1;
  }
}

@media (max-width: 1050px) {
  .thankyou-back-row {
    grid-template-columns: auto 1fr;
  }
}

@media (max-width: 640px) {
  .thankyou-back-row {
    grid-template-columns: auto 1fr;
  }
}

.thankyou-client-link {
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  grid-column-gap: 1rem;
  align-self: start;
}

@media (max-width: 600px) {
  .thankyou-client-link {
    grid-template-columns: 1fr auto 1fr;
  }
}

.client-line {
  height: 3px;
  background: white;
  width: 100%;
  align-self: center;
}

.thankyou-main-text h1 {
  font-weight: 200;
  color: white;
  font-size: 10vw;
  margin: 0;
}

.thankyou-main-text p {
  color: white;
  font-size: 2rem;
}

@media (max-width: 800px) {
  .thankyou-main-text p {
    font-size: 1.6rem;
  }
}

@media (max-width: 640px) {
  .thankyou-main-text p {
    font-size: 1rem;
  }
}

.thankyou-main-text button {
  height: 30px;
  align-self: center;
  background: rgba(255, 255, 255, 0);
  color: white;
  border: solid white 3px;
  font-weight: bold;
  font-style: italic;
  padding: 5px 10px 5px 10px;
  cursor: pointer;
}
#back-button {
  height: 50px;
}
@media (max-width: 1050px) {
  #back-button {
    height: 60px;
    font-size: 1.5rem;
  }
}

@media (max-width: 800px) {
  #back-button {
    height: 50px;
    font-size: 1.2rem;
  }
}

@media (max-width: 640px) {
  #back-button {
    height: 40px;
    font-size: 1rem;
  }
}

.thankyou-right h2 {
  font-size: 4.3vw;
  margin: 0;
  align-self: end;
  font-weight: 200;
  text-align: center;
  color: white;
}

.thankyou-link {
  text-align: center;
  color: white;
  text-decoration: none;
  font-size: 1.9rem;
}

@media (max-width: 640px) {
  .thankyou-link {
    font-size: 1.2rem;
  }
}
</style>
