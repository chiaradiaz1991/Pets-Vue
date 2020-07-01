
<template>
  <div>
    <h1>Cats</h1>
    <b-table striped hover :items='cats'>
      <!-- slot means where bootstrap are going to put the things we passed -->
      <template v-slot:cell(name)='data'>
        <router-link :to='`/pets/cats/${data.index}`'>{{ data.value }}</router-link>
      </template>
    </b-table>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data () {
    return {}
  },
  computed: {
    ...mapState([
      'cats'
    ])
  }
}
</script>
