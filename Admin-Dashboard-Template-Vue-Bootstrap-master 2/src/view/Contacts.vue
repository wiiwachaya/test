<template>
  <mdb-container>
    <mdb-row>
      <mdb-col><h1>ผู้ติดต่อ</h1></mdb-col>
      <mdb-col></mdb-col>
      <mdb-col></mdb-col>
      <mdb-col style="text-align: end">
        <mdb-btn-toolbar>
          <mdb-btn-group class="mr-2">
            <mdb-btn>สร้าง</mdb-btn>
            <mdb-btn>ลบ</mdb-btn>
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
            <mdb-container>
              <mdb-jumbotron class="text-center hoverable">
                <mdb-row>
                  <mdb-col lg="5">
                    <mdb-view class="rounded z-depth-2 mb-lg-0 mb-4" hover>
                      <img class="img-fluid" src="https://mdbootstrap.com/img/Photos/Others/img%20(27).jpg" alt="Sample image" />
                      <a>
                        <mdb-mask overlay="white-slight" waves/>
                      </a>
                    </mdb-view>
                  </mdb-col>
                  <mdb-col lg="7">
                    <a class="green-text">
                      <h6 class="font-weight-bold mb-3">
                        <mdb-icon icon="utensils" class="pr-2" />Food</h6>
                    </a>
                    <h3 class="font-weight-bold mb-3 p-0">
                      <strong>Title of the news</strong>
                    </h3>
                    <p>Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat mdb-iconcere
                      possimus, omnis voluptas assumenda est, omnis dolor repellendus et aut officiis debitis.</p>
                    <p>by
                      <a>
                        <strong>Carine Fox</strong>
                      </a>, 19/08/2018</p>
                    <mdb-btn color="success" size="md" class="waves-light ">Read more</mdb-btn>
                  </mdb-col>
                </mdb-row>
              </mdb-jumbotron>
              <mdb-jumbotron class="text-center hoverable">
                <mdb-row>
                  <mdb-col lg="7">
                    <a class="pink-text">
                      <h6 class="font-weight-bold mb-3">
                        <mdb-icon icon="image" class="pr-2" />Lifestyle
                      </h6>
                    </a>
                    <h3 class="font-weight-bold mb-3 p-0">
                      <strong>Title of the news</strong>
                    </h3>
                    <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti
                      quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.</p>
                    <p>by
                      <a>
                        <strong>Carine Fox</strong>
                      </a>, 14/08/2018</p>
                    <mdb-btn color="pink" size="md" class="mb-lg-0 mb-4 waves-light">Read more</mdb-btn>
                  </mdb-col>
                  <mdb-col lg="5">
                    <mdb-view class="rounded z-depth-2 mb-lg-0 mb-4" hover>
                      <img class="img-fluid" src="https://mdbootstrap.com/img/Photos/Others/img%20(34).jpg" alt="Sample image" />
                      <a>
                        <mdb-mask overlay="white-slight" waves/>
                      </a>
                    </mdb-view>
                  </mdb-col>
                </mdb-row>
              </mdb-jumbotron>
            </mdb-container>
          </template>
          <template :slot="'Trainee'">
            <mdb-container>
              <mdb-jumbotron class="text-center hoverable">
                <form>
                  <p class="h4 text-center mb-4">Write to us</p>
                  <div class="grey-text">
                    <mdb-input label="Your name" icon="user" group type="text" validate error="wrong" success="right"/>
                    <mdb-input label="Your email" icon="envelope" group type="email" validate error="wrong" success="right"/>
                    <mdb-input label="Subject" icon="tag" group type="text" validate error="wrong" success="right"/>
                    <mdb-textarea :rows="2" label="Your message" icon="pencil"/>
                  </div>
                  <div class="text-center">
                    <mdb-btn outline="secondary">Send <mdb-icon far icon="paper-plane" class="ml-1"/></mdb-btn>
                  </div>
                </form>
              </mdb-jumbotron>
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
