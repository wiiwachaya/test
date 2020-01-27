<template>
  <div>
    <mdb-container>
    <mdb-list-group>
      <mdb-list-group-item active>
        <div>
          <div class="d-flex w-100 justify-content-between">
            <h5 class="mb-2 h5">List group item heading</h5>
            <small>3 days ago</small>
          </div>
          <p class="mb-2">
            Donec id elit non mi porta gravida at eget metus. Maecenas
            sed diam eget risus varius blandit.
          </p>
          <small>Donec id elit non mi porta.</small>
        </div>
      </mdb-list-group-item>
      <mdb-list-group-item>
        <div>
          <div class="d-flex w-100 justify-content-between">
            <h5 class="mb-2 h5">List group item heading</h5>
            <small>3 days ago</small>
          </div>
          <p class="mb-2">
            Donec id elit non mi porta gravida at eget metus. Maecenas
            sed diam eget risus varius blandit.
          </p>
          <small>Donec id elit non mi porta.</small>
        </div>
      </mdb-list-group-item>
      <mdb-list-group-item>
        <div>
          <div class="d-flex w-100 justify-content-between">
            <h5 class="mb-2 h5">List group item heading</h5>
            <small>3 days ago</small>
          </div>
          <p class="mb-2">
            Donec id elit non mi porta gravida at eget metus. Maecenas
            sed diam eget risus varius blandit.
          </p>
          <small>Donec id elit non mi porta.</small>
        </div>
      </mdb-list-group-item>
    </mdb-list-group>
    <!-- trigger modal button -->
    <mdb-btn rounded color="default" @click.native="modal = true">launch success modal<mdb-icon icon="eye" class="ml-1"/></mdb-btn>
    <!-- Central Modal Medium Success -->
    <mdb-modal side position="right" fullHeight direction="right" :show="modal" @close="modal = false">
      <!--Header-->
      <mdb-modal-header>
        <mdb-modal-title>Success Modal</mdb-modal-title>
      </mdb-modal-header>
      <!--Body-->
      <mdb-modal-body  class="text-center">
        <mdb-icon icon="check" size="4x" class="mb-3 animated rotateIn"/>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit iusto nulla
          aperiam blanditiis ad consequatur in dolores culpa, dignissimos, eius non possimus fugiat.
          Esse ratione fuga, enim, ab officiis totam.
        </p>
      </mdb-modal-body>
      <!--Footer-->
      <mdb-modal-footer center>
        <mdb-btn color="success" @click.native="modal = false">Get it now <mdb-icon icon="diamond" class="ml-1" color="white"/></mdb-btn>
        <mdb-btn outline="success" @click.native="modal = false">No, thanks</mdb-btn>
      </mdb-modal-footer>
    </mdb-modal>
    </mdb-container>
  </div>
</template>

<script>
// eslint-disable-next-line standard/object-curly-even-spacing
import {mdbListGroup, mdbListGroupItem, mdbBtn, mdbIcon, mdbModal, mdbModalHeader, mdbModalTitle, mdbModalBody, mdbModalFooter, mdbNavbar, mdbNavbarNav } from 'mdbvue'
export default {
  name: 'ListGroupPage',
  components: {
    mdbListGroup,
    mdbListGroupItem
  },
  // eslint-disable-next-line no-dupe-keys
  name: 'NavbarPage',
  // eslint-disable-next-line no-dupe-keys
  components: {
    mdbNavbar,
    mdbNavbarNav
  },
  // eslint-disable-next-line no-dupe-keys
  name: 'Task',
  // eslint-disable-next-line no-dupe-keys
  components: {
    mdbBtn,
    mdbIcon,
    mdbModal,
    mdbModalHeader,
    mdbModalTitle,
    mdbModalBody,
    mdbModalFooter
  },
  data () {
    return {
      modal: false
    }
  }
}
</script>

<style scoped>

</style>
