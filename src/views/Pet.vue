
<template>
  <div>
    <h1>{{ pet.name}} {{ $route.params.species }}</h1>
    <p>Age: {{ pet.age }} years old</p>
    <p>Breed: {{ pet.breed }}</p>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data () {
    return {
      pet: {}
    }
  },
  computed: {
    ...mapState(['cats', 'dogs'])
  },
  mounted () {
    const petType = this[this.$route.params.species][this.$route.params.id] // same as doing this.cat or this.dogs / this[variable] dynamically pass the variable that I want
    this.pet = petType
  }
}
</script>
