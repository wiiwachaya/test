<template>
  <div>
    <mdb-btn v-b-modal.modal-prevent-closing>Open Modal</mdb-btn>

    <div class="mt-3">
      Submitted Names:
      <div v-if="submittedNames.length === 0">--</div>
      <mdb-row v-else class="mb-0 pl-3">
        <mdb-col v-for="(name, index) in submittedNames" :key="index">{{ name }}</mdb-col>
      </mdb-row>
    </div>

    <v-modal
      id="modal-prevent-closing"
      ref="modal"
      title="Submit Your Name"
      @show="resetModal"
      @hidden="resetModal"
      @ok="handleOk"
    >
      <mdb-form ref="form" @submit.stop.prevent="handleSubmit">
        <b-form-group
          :state="nameState"
          label="Name"
          label-for="name-input"
          invalid-feedback="Name is required"
        >
          <b-form-input
            id="name-input"
            v-model="name"
            :state="nameState"
            required
          ></b-form-input>
        </b-form-group>
      </mdb-form>
    </v-modal>
  </div>
</template>

<script>
import {
  mdbBtn,
  mdbCol,
  mdbIcon,
  mdbModal,
  mdbModalBody,
  mdbModalFooter,
  mdbModalHeader,
  mdbModalTitle,
  mdbRow
} from 'mdbvue'

export default {
  components: {
    mdbIcon,
    mdbBtn,
    mdbRow,
    mdbCol,
    mdbModal,
    mdbModalHeader,
    mdbModalTitle,
    mdbModalBody,
    mdbModalFooter
  },
  data () {
    return {
      modal: false,
      name: '',
      nameState: null,
      submittedNames: []
    }
  },
  methods: {
    checkFormValidity () {
      const valid = this.$refs.form.checkValidity()
      this.nameState = valid
      return valid
    },
    resetModal () {
      this.name = ''
      this.nameState = null
    },
    handleOk (bvModalEvt) {
      // Prevent modal from closing
      bvModalEvt.preventDefault()
      // Trigger submit handler
      this.handleSubmit()
    },
    handleSubmit () {
      // Exit when the form isn't valid
      if (!this.checkFormValidity()) {
        return
      }
      // Push the name to submitted names
      this.submittedNames.push(this.name)
      // Hide the modal manually
      this.$nextTick(() => {
        this.$bvModal.hide('modal-prevent-closing')
      })
    }
  }
}
</script>
