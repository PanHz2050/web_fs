<template>
  <div id="app" class="app"><router-view /></div>
</template>

<script>
import Vue from 'vue'
import { mapActions } from 'vuex'

export default {
  data() {
    return {
      timer: null,
      eventBus: new Vue(),
    }
  },
  mounted() {
    document.getElementById('loader').style.display = 'none'
  },
  provide() {
    // eventBus挂载的事件： addGroup addUser
    return {
      eventBus: this.eventBus,
    }
  },
  methods: {
    ...mapActions(['loginOut']),
  },
}
</script>

<style lang="scss">
.app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  // color: #db4f5b;

  .nav {
    padding: 30px;

    a {
      font-weight: bold;
      color: #31e337;

      &.router-link-exact-active {
        color: #f30152;
      }
    }
  }

  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  input:-webkit-autofill:active {
    transition-delay: 99999s;
    transition: color 99999s ease-out, background-color 99999s ease-out;
  }
}
</style>
