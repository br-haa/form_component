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
              <!--              <div class="thankyou-logo">-->
              <!--&lt;!&ndash;                <img src="~assets/img/logo.png" alt="logo">&ndash;&gt;-->
              <!--              </div>-->
              <div class="thankyou-main-text">
                <svg viewBox="0 0 70 16">
                  <text x="0" y="15">Thank You</text>
                </svg>
                <div class="thankyou-back-row">
                  <button id="back-button" v-on:click="close()">Go back</button>
                  <p>We will be back in touch with you as soon as possible.</p>
                </div>
              </div>
            </div>
            <div class="thankyou-right">
              <svg viewBox="0 0 175 18">
                <text x="0" y="15">For more information visit</text>
              </svg>
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
      default: false
    },
    ClientLink: {
      type: String
    }
  },
  methods: {
    close: function() {
      //the back button that actually just reloads the page lul
      window.location.reload(true);
    }
  }
};
</script>

<style scoped lang="scss">
$accent-color: teal;
$small-size: 640px;
#modal-wrapper {
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.73);
  display: grid;
  z-index: 50;
}
#content-holder {
  grid-area: 1/1/2/2;
  align-self: center;
  justify-self: center;
  display: grid;
}
#XHolder {
  grid-area: 1/1/2/2;
  align-self: start;
  justify-self: end;
  margin: 1.5rem 3rem;
  @media (max-width: $small-size) {
    margin: 0.5rem 0.5rem;
  }
}
#modal-close {
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
  #theXFactor {
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

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
.fall-enter-active,
.fall-leave-active {
  transform: scale(1);
  transition: 0.5s;
}
.fall-enter, .fall-leave-to /* .fall-leave-active below version 2.1.8 */ {
  transform: scale(1.1);
}

.thankyou-wrapper {
  display: grid;
  grid-template-columns: 1fr;
  background: linear-gradient(45deg, #201e5f, #006967);
  height: 100vh;
  width: 100vw;
  position: absolute;
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
  display: grid;
  grid-template-rows: 0.1fr 1fr;
}

@media (max-width: 1050px) {
  .thankyou-left {
    grid-template-rows: 0.1fr 0.1fr;
  }
}

.thankyou-back-row {
  display: grid;
  grid-template-columns: auto 1fr;
  grid-column-gap: 1vw;
}

.thankyou-right {
  display: grid;
  grid-template-rows: 1fr 0.5fr;
}

@media (max-width: 1050px) {
  .thankyou-right {
    grid-template-rows: 0.5fr 0.1fr;
    margin-top: -40rem;
  }
  .thankyou-back-row {
    grid-template-columns: 0.2fr 1fr;
  }
}

@media (max-width: 640px) {
  .thankyou-back-row {
    grid-template-columns: 0.4fr 1fr;
  }
}

.thankyou-client-link {
  display: grid;
  grid-template-columns: 0.6fr 1fr 0.6fr;
  grid-column-gap: 1rem;
  align-self: start;
}

@media (max-width: 600px) {
  .thankyou-client-link {
    grid-template-columns: 0.4fr 1fr 0.4fr;
  }
}

.client-line {
  height: 3px;
  background: white;
  width: 100%;
  align-self: center;
}

.thankyou-main-text svg {
  font-weight: 200;
  fill: white;
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

.thankyou-right svg {
  align-self: end;
  font-weight: 200;
  fill: white;
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

.thankyou-logo {
  justify-self: start;
  display: grid;
  justify-content: center;
  background: rgba(255, 255, 255, 0.5);
  padding: 15px 20px 5px 20px;
  box-shadow: 1px 2px 5px 1px black;
}

.thankyou-logo svg {
  width: 15rem;
}

@media (max-width: 600px) {
  .thankyou-logo img {
    width: 15rem;
  }
  .thankyou-right {
    margin-top: -30rem;
  }
}
</style>
