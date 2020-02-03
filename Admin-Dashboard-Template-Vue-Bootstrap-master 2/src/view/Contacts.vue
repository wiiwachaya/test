<template>
  <mdb-container>
    <mdb-row>
      <mdb-col><h1>ผู้ติดต่อ</h1></mdb-col>
      <mdb-col></mdb-col>
      <mdb-col></mdb-col>
      <mdb-col style="text-align: end">
        <mdb-btn-toolbar>
          <mdb-btn-group class="mr-2">
            <mdb-btn color="warning">สร้าง</mdb-btn>
            <mdb-btn color="danger">ลบ</mdb-btn>
          </mdb-btn-group>
        </mdb-btn-toolbar>
      </mdb-col>
    </mdb-row>
        <mdb-tabs
          :active="0"
          default
          :links="[
      { text: 'All', slot: 'custom-slot' },
      { text: 'Employees' },
      { text: 'Trainee' }]"
          :transition-duration="0.5"
          transition-style="linear"
        >
          <template :slot="'All'">
            <br>
            <mdb-container>
              <mdb-row>
                <mdb-col col="3">
                  <mdb-card testimonial style="text-align: center">
                    <br>
                    <mdb-card-up color="indigo" class="lighten-1"></mdb-card-up>
                    <mdb-card-avatar color="white" class="mx-auto"><img src="https://mdbootstrap.com/img/Photos/Avatars/img%20%2810%29.jpg" class="rounded-circle" style="width: 70%"></mdb-card-avatar>
                    <mdb-card-body>
                      <mdb-card-title style="text-align: center">Name</mdb-card-title>
                      <hr />
                      <p>
                        <mdb-icon icon="phone-alt" size="lg" /> 000-000-000 <br>
                        <mdb-icon icon="envelope" size="lg" /> email@mail.com <br>
                        <mdb-icon fab icon="line" size="lg" /> xxxxxx
                      </p>
                    </mdb-card-body>
                  </mdb-card>
                </mdb-col>
                <mdb-col col="3">
                  <mdb-card testimonial style="text-align: center">
                    <br>
                    <mdb-card-up color="indigo" class="lighten-1"></mdb-card-up>
                    <mdb-card-avatar color="white" class="mx-auto"><img src="https://mdbootstrap.com/img/Photos/Avatars/img%20%2810%29.jpg" class="rounded-circle" style="width: 70%"></mdb-card-avatar>
                    <mdb-card-body>
                      <mdb-card-title style="text-align: center">Name</mdb-card-title>
                      <hr />
                      <p>
                        <mdb-icon icon="phone-alt" size="lg" /> 000-000-000 <br>
                        <mdb-icon icon="envelope" size="lg" /> email@mail.com <br>
                        <mdb-icon fab icon="line" size="lg" /> xxxxxx
                      </p>
                    </mdb-card-body>
                  </mdb-card>
                </mdb-col>
                <mdb-col col="3">
                  <mdb-card testimonial style="text-align: center">
                    <br>
                    <mdb-card-up color="indigo" class="lighten-1"></mdb-card-up>
                    <mdb-card-avatar color="white" ><img src="https://mdbootstrap.com/img/Photos/Avatars/img%20%2810%29.jpg" class="rounded-circle" style="width: 70%"></mdb-card-avatar>
                    <mdb-card-body>
                      <mdb-card-title style="text-align: center">Name</mdb-card-title>
                      <hr />
                      <p>
                        <mdb-icon icon="phone-alt" size="lg" /> 000-000-000 <br>
                        <mdb-icon icon="envelope" size="lg" /> email@mail.com <br>
                        <mdb-icon fab icon="line" size="lg" /> xxxxxx
                      </p>
                    </mdb-card-body>
                  </mdb-card>
                </mdb-col>
                <mdb-col col="3">
                  <mdb-card testimonial style="text-align: center">
                    <br>
                    <mdb-card-up color="indigo" class="lighten-1"></mdb-card-up>
                    <mdb-card-avatar color="white" class="mx-auto"><img src="https://mdbootstrap.com/img/Photos/Avatars/img%20%2810%29.jpg" class="rounded-circle" style="width: 70%"></mdb-card-avatar>
                    <mdb-card-body>
                      <mdb-card-title style="text-align: center">Name</mdb-card-title>
                      <hr />
                      <p>
                        <mdb-icon icon="phone-alt" size="lg" /> 000-000-000 <br>
                        <mdb-icon icon="envelope" size="lg" /> email@mail.com <br>
                        <mdb-icon fab icon="line" size="lg" /> xxxxxx
                      </p>
                    </mdb-card-body>
                  </mdb-card>
                </mdb-col>
              </mdb-row>
            </mdb-container>
          </template>
          <template :slot="'Employees'">
            <br>
            <mdb-container>
              <mdb-row>
                <mdb-col col="3">
                  <mdb-card testimonial style="text-align: center">
                    <br>
                    <mdb-card-up color="indigo" class="lighten-1"></mdb-card-up>
                    <mdb-card-avatar color="white" class="mx-auto"><img src="https://mdbootstrap.com/img/Photos/Avatars/img%20%2810%29.jpg" class="rounded-circle" style="width: 70%"></mdb-card-avatar>
                    <mdb-card-body>
                      <mdb-card-title style="text-align: center">Name</mdb-card-title>
                      <hr />
                      <p>
                        <mdb-icon icon="phone-alt" size="lg" /> 000-000-000 <br>
                        <mdb-icon icon="envelope" size="lg" /> email@mail.com <br>
                        <mdb-icon fab icon="line" size="lg" /> xxxxxx
                      </p>
                    </mdb-card-body>
                  </mdb-card>
                </mdb-col>
                <mdb-col col="3">
                  <mdb-card testimonial style="text-align: center">
                    <br>
                    <mdb-card-up color="indigo" class="lighten-1"></mdb-card-up>
                    <mdb-card-avatar color="white" class="mx-auto"><img src="https://mdbootstrap.com/img/Photos/Avatars/img%20%2810%29.jpg" class="rounded-circle" style="width: 70%"></mdb-card-avatar>
                    <mdb-card-body>
                      <mdb-card-title style="text-align: center">Name</mdb-card-title>
                      <hr />
                      <p>
                        <mdb-icon icon="phone-alt" size="lg" /> 000-000-000 <br>
                        <mdb-icon icon="envelope" size="lg" /> email@mail.com <br>
                        <mdb-icon fab icon="line" size="lg" /> xxxxxx
                      </p>
                    </mdb-card-body>
                  </mdb-card>
                </mdb-col>
                <mdb-col col="3">
                  <mdb-card testimonial style="text-align: center">
                    <br>
                    <mdb-card-up color="indigo" class="lighten-1"></mdb-card-up>
                    <mdb-card-avatar color="white" ><img src="https://mdbootstrap.com/img/Photos/Avatars/img%20%2810%29.jpg" class="rounded-circle" style="width: 70%"></mdb-card-avatar>
                    <mdb-card-body>
                      <mdb-card-title style="text-align: center">Name</mdb-card-title>
                      <hr />
                      <p>
                        <mdb-icon icon="phone-alt" size="lg" /> 000-000-000 <br>
                        <mdb-icon icon="envelope" size="lg" /> email@mail.com <br>
                        <mdb-icon fab icon="line" size="lg" /> xxxxxx
                      </p>
                    </mdb-card-body>
                  </mdb-card>
                </mdb-col>
                <mdb-col col="3">
                  <mdb-card testimonial style="text-align: center">
                    <br>
                    <mdb-card-up color="indigo" class="lighten-1"></mdb-card-up>
                    <mdb-card-avatar color="white" class="mx-auto"><img src="https://mdbootstrap.com/img/Photos/Avatars/img%20%2810%29.jpg" class="rounded-circle" style="width: 70%"></mdb-card-avatar>
                    <mdb-card-body>
                      <mdb-card-title style="text-align: center">Name</mdb-card-title>
                      <hr />
                      <p>
                        <mdb-icon icon="phone-alt" size="lg" /> 000-000-000 <br>
                        <mdb-icon icon="envelope" size="lg" /> email@mail.com <br>
                        <mdb-icon fab icon="line" size="lg" /> xxxxxx
                      </p>
                    </mdb-card-body>
                  </mdb-card>
                </mdb-col>
              </mdb-row>
            </mdb-container>
          </template>
          <template :slot="'Trainee'">
            <br>
            <mdb-container>
              <mdb-row>
                <mdb-col col="3">
                  <mdb-card testimonial style="text-align: center">
                    <br>
                    <mdb-card-up color="indigo" class="lighten-1"></mdb-card-up>
                    <mdb-card-avatar color="white" class="mx-auto"><img src="https://mdbootstrap.com/img/Photos/Avatars/img%20%2810%29.jpg" class="rounded-circle" style="width: 70%"></mdb-card-avatar>
                    <mdb-card-body>
                      <mdb-card-title style="text-align: center">Name</mdb-card-title>
                      <hr />
                      <p>
                        <mdb-icon icon="phone-alt" size="lg" /> 000-000-000 <br>
                        <mdb-icon icon="envelope" size="lg" /> email@mail.com <br>
                        <mdb-icon fab icon="line" size="lg" /> xxxxxx
                      </p>
                    </mdb-card-body>
                  </mdb-card>
                </mdb-col>
                <mdb-col col="3">
                  <mdb-card testimonial style="text-align: center">
                    <br>
                    <mdb-card-up color="indigo" class="lighten-1"></mdb-card-up>
                    <mdb-card-avatar color="white" class="mx-auto"><img src="https://mdbootstrap.com/img/Photos/Avatars/img%20%2810%29.jpg" class="rounded-circle" style="width: 70%"></mdb-card-avatar>
                    <mdb-card-body>
                      <mdb-card-title style="text-align: center">Name</mdb-card-title>
                      <hr />
                      <p>
                        <mdb-icon icon="phone-alt" size="lg" /> 000-000-000 <br>
                        <mdb-icon icon="envelope" size="lg" /> email@mail.com <br>
                        <mdb-icon fab icon="line" size="lg" /> xxxxxx
                      </p>
                    </mdb-card-body>
                  </mdb-card>
                </mdb-col>
                <mdb-col col="3">
                  <mdb-card testimonial style="text-align: center">
                    <br>
                    <mdb-card-up color="indigo" class="lighten-1"></mdb-card-up>
                    <mdb-card-avatar color="white" ><img src="https://mdbootstrap.com/img/Photos/Avatars/img%20%2810%29.jpg" class="rounded-circle" style="width: 70%"></mdb-card-avatar>
                    <mdb-card-body>
                      <mdb-card-title style="text-align: center">Name</mdb-card-title>
                      <hr />
                      <p>
                        <mdb-icon icon="phone-alt" size="lg" /> 000-000-000 <br>
                        <mdb-icon icon="envelope" size="lg" /> email@mail.com <br>
                        <mdb-icon fab icon="line" size="lg" /> xxxxxx
                      </p>
                    </mdb-card-body>
                  </mdb-card>
                </mdb-col>
                <mdb-col col="3">
                  <mdb-card testimonial style="text-align: center">
                    <br>
                    <mdb-card-up color="indigo" class="lighten-1"></mdb-card-up>
                    <mdb-card-avatar color="white" class="mx-auto"><img src="https://mdbootstrap.com/img/Photos/Avatars/img%20%2810%29.jpg" class="rounded-circle" style="width: 70%"></mdb-card-avatar>
                    <mdb-card-body>
                      <mdb-card-title style="text-align: center">Name</mdb-card-title>
                      <hr />
                      <p>
                        <mdb-icon icon="phone-alt" size="lg" /> 000-000-000 <br>
                        <mdb-icon icon="envelope" size="lg" /> email@mail.com <br>
                        <mdb-icon fab icon="line" size="lg" /> xxxxxx
                      </p>
                    </mdb-card-body>
                  </mdb-card>
                </mdb-col>
              </mdb-row>
            </mdb-container>
          </template>
        </mdb-tabs>
  </mdb-container>
</template>

<script>
// eslint-disable-next-line standard/object-curly-even-spacing
import { mdbContainer,
  mdbCol,
  mdbRow,
  mdbIcon,
  mdbTabs,
  mdbCard,
  mdbCardImage,
  mdbCardBody,
  mdbCardTitle,
  mdbCardText,
  mdbBtn,
  mdbJumbotron,
  mdbView,
  mdbMask,
  mdbTextarea,
  mdbInput,
  mdbBtnGroup,
  mdbBtnToolbar} from 'mdbvue'
export default {
  name: 'Contacts',
  components: {
    mdbContainer,
    mdbCol,
    mdbRow,
    mdbIcon,
    mdbTabs,
    mdbCard,
    mdbCardImage,
    mdbCardBody,
    mdbCardTitle,
    mdbCardText,
    mdbBtn,
    mdbJumbotron,
    mdbView,
    mdbMask,
    mdbTextarea,
    mdbInput,
    mdbBtnGroup,
    mdbBtnToolbar
  }
}
</script>

<style scoped>

</style>
