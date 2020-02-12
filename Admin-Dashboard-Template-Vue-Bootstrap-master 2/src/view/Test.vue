<template>
  <div id="demo6">
    <form v-on:submit.prevent="submit">
      <div>
      <label for="first_name"> FirstName</label>
      <input type="text" name="first_name" v-model="applicant.first_name">
    </div>

      <div>
        <label for="first_name"> LastName</label>
        <input type="text" name="last_name" v-model="applicant.last_name">
      </div>

      <div>
        <label for="first_name">Male</label>
        <input type="radio" name="sex" v-model="applicant.male_name">
        <label for="first_name"> Female</label>
        <input type="radio" name="sex" v-model="applicant.female_name">
      </div>

      <div>
        <select name="courses" v-model="applicant.course">
          <option value="react">21</option>
          <option value="react">22</option>
          <option value="react">23</option>
        </select>
      </div>
      <button type="clear" @click="clear">Clear</button>
      <button type="submit">Submit</button>
  </form>
  </div>
</template>

<script>

export default {
  name: 'demo6',
  data () {
    return {
      applicant: {
        first_name: 'nesara',
        last_name: 'ruenpaan',
        sex: 'male',
        course: 'react'
      }
    }
  },
  methods: {
    submit (event) {
      // event.preventDefault()
      alert(JSON.stringify(this.applicant))
    },
    clear () {
      this.applicant = {
        first_name: '',
        last_name: '',
        sex: 'male',
        course: 'react'
      }
    }
  }
}

</script>
