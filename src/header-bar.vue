<template>
  <div id="header">
    <b-navbar class="navbar has-background-black">
      <template slot="brand">
        <b-navbar-item href="https://www.trevorism.com">
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAH4AAAAaCAIAAAD+JH+TAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAK9SURBVGhD7VjbkcMgDHQz7sANpI5MukgF+U0X95FaUsqVcQLJQiAh7EtyeObY4SM2IK2X5ZVpYKAHrs/p63s6X+ixA86RwTHLB3FZszzoRQf8U+mP4HqNa/zs+40eB/4OQ/puGNJ3w5C+G5rSY4Nr3KBOj/DbaL9M58d0j1Wh9lluaI0sC/XFLBKnW4iGYTnyTJUZfJ6yVmJewg7MzL+e0/WWxZcd50siAz9OS2wREXiKIJv284YoIrc8Hcn28y29z4o4yZEWT1s1jnCiFwHhOzlUUfLPRvg8Tel5hIoiaXBHs/E50jDPjY6khK3Sx8R6MFm1+yPJChaglxy27msAUs848Em8Zi41ij5PQ/o1BeTlUDgJtPRodg6bbAEGjxlTkBghVOVDaGCj9FBM1WrdtZHJGvpSs44KOghBScVwJqzti6RbeMoqcnHrksVhJb0ANof+fNdnCTXtGJTbWitI38oyUnytuaoAdJBaS4a5fDk8AQUZQNUKOSis1czJaMxjDezflN5s4CcoaytewGb7/Lg6Tk+UGhmslVl4gAs+BZqfb/LcNKU2Sm/ywyq/yMgGoXU8pMHblrFG0eEJMGt5UQbnQtXG6cJweB5OenYrC21SbFJ6l/QAIrCW4mQJcML2l97TSKGIho/FDtYO+z7pEcWpXG8hZsee0juLXQ0ZJ5wEaptqh62v9b+THsFnYtnsoNLzbK0dRQyINQe769SvnHBekR6gR/2g0vPEt7sv9n0aGUNAjGzou4YF6sbWZ602AF9cv5ah1XQ6dpVeGB9us+nauYT3IJAZFk0N7YOCFXJsfLC2fZtVHfdKD7dQeITrK4MXnI3rWGfpAcjALHYvNrUbNqmvivzTgrFb+grtQopDSw+YYfWQX4L//wnvFKDPrtw8E/I/RKFkcyvHXumRczP4B6UfGBgYeDem6QfwLXQkECRioAAAAABJRU5ErkJggg==">
        </b-navbar-item>
      </template>
      <template slot="start">
        <b-navbar-dropdown label="Apps">
          <b-navbar-item href="https://www.trevorism.com">
            Home
          </b-navbar-item>
          <b-navbar-item href="https://click.trevorism.com">
            Click
          </b-navbar-item>
          <b-navbar-item href="http://registry.datastore.trevorism.com">
            Service Registry
          </b-navbar-item>
          <b-navbar-item href="http://status.event.trevorism.com">
            Event Status
          </b-navbar-item>
        </b-navbar-dropdown>

        <b-navbar-dropdown label="Articles">
          <b-navbar-item href="https://www.trevorism.com/articles/trends">
            Technology Trends
          </b-navbar-item>
          <b-navbar-item href="https://www.trevorism.com/articles/production">
            Productionalized Service
          </b-navbar-item>
        </b-navbar-dropdown>

        <b-navbar-item href="https://www.trevorism.com/contact">
          Contact
        </b-navbar-item>
        <b-navbar-item href="https://www.trevorism.com/admin" v-if="admin">
          Admin
        </b-navbar-item>
      </template>

      <template slot="end">
        <div v-if="!authenticated">
          <b-navbar-item tag="div">
            <div class="buttons">
              <a class="button is-primary" href="https://www.trevorism.com/register">Register</a>
              <a class="button is-light" :href="loginUrl">Login</a>
            </div>
          </b-navbar-item>
        </div>
        <div v-else>
          <b-navbar-dropdown class="navHeight" :label="username">
            <b-navbar-item href="https://www.trevorism.com/account">
              Account
            </b-navbar-item>
            <b-navbar-item tag="div">
              <a @click="logout()" class="button is-primary">Logout</a>
            </b-navbar-item>
          </b-navbar-dropdown>
        </div>
      </template>

    </b-navbar>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Header',
  data () {
    return {
      authenticated: false,
      username: '',
      admin: false,
      loginUrl: '',
      currentUrl: ''
    }
  },
  methods: {
    checkAuthenticated: function () {
      this.username = this.$cookies.get('user_name')
      this.admin = this.$cookies.get('admin') === 'true'
      this.authenticated = !!this.username
    },
    logout: function () {
      let self = this
      axios.post('https://trevorism.com/api/logout')
          .then(() => {
            self.$cookies.remove('user_name')
            self.$cookies.remove('admin')
            this.checkAuthenticated()
            window.location.href = self.currentUrl
          })
          .catch(() => {

          })
    }
  },
  mounted () {
    this.currentUrl = window.location.origin
    this.loginUrl = 'https://www.trevorism.com/login?return_url=' + this.currentUrl
    this.checkAuthenticated()
  }
}
</script>

<style scoped>
.navHeight {
  height: 52px;
}

</style>
