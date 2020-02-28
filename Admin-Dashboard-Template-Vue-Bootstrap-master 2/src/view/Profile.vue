<template>
  <section  id="demo6">
    <mdb-card-title cascade narrow class="mt-2">
      <mdb-view class="gradient-card-header blue darken-2">
        <mdb-row>
        <mdb-col><h2 class="responsive text-white">
        Nesara Ruenpaan
        </h2></mdb-col>
        <mdb-col style="text-align: end">
          <!----- ปุ่มแก้ไขข้อมูล ------>
          <router-link to="/Edit" >
            <mdb-btn color="success" >แก้ไขข้อมูล</mdb-btn>
          </router-link>
        </mdb-col>
        </mdb-row>
      </mdb-view>
    </mdb-card-title>
      <mdb-card-body style="background-color: white">
        <!----- ข้อมูลโซเชี่ยล ------>
      <mdb-card style="background-color: #3D5A80" class="mb-3">
        <mdb-row class="mb-3 my-3">
          <mdb-col col="1"></mdb-col>
          <mdb-col col="3">
              <img src="https://mdbootstrap.com/img/Photos/Avatars/img(31).jpg"
                   class="img-fluid z-depth-1 rounded-circle"
                          alt="Responsive image">
            </mdb-col>
            <mdb-col><br>
              <section class="preview">
                <mdb-input size="3" basic class="mb-4" v-model="applicant.email" disabled>
                  <span class="input-group-text" slot="prepend">Email:</span>
                </mdb-input>
                <mdb-input size="3" basic class="mb-4" v-model="applicant.tel" disabled>
                  <span class="input-group-text" slot="prepend">Tel:</span>
                </mdb-input>
                <mdb-input size="3" basic class="mb-4" v-model="applicant.line" disabled>
                  <span class="input-group-text" slot="prepend">Line:</span>
                </mdb-input>

              </section>
            </mdb-col>
          <mdb-col col="1"></mdb-col>
        </mdb-row>
          </mdb-card>
        <mdb-row>
          <mdb-col>
            <!----- ข้อมูลทั่วไป ------>
            <mdb-card style="background-color: #3D5A80" class="mb-5">
            <mdb-card-title>
              <mdb-view gradient="blue" cascade><br>
              <h3 class="card-header-title" style="color: white ; text-align: center">ข้อมูลทั่วไป</h3>
              </mdb-view>
            </mdb-card-title>
            <mdb-card-body>
              <section class="preview">
                <mdb-input basic aria-label="First name" v-model="applicant.first_name" disabled>
                  <span class="input-group-text" slot="prepend">ชื่อ-นามสกุล:</span>
                  <mdb-input noWrapper aria-label="Last name" v-model="applicant.last_name" disabled/>
                </mdb-input>
              </section>
              <br>
              <mdb-input size="3" basic class="mb-4" v-model="applicant.birthDate" disabled>
                <span class="input-group-text" slot="prepend">วัน/เดือน/ปีเกิด:</span>
              </mdb-input>
              <mdb-input size="4" basic class="mb-4" v-model="applicant.sex" disabled>
                <span class="input-group-text" slot="prepend">เพศ:</span>
              </mdb-input>
              <mdb-input type="textarea" basic v-model="applicant.address" disabled>
                <span class="input-group-text" slot="prepend">ที่อยู่:</span>
              </mdb-input>
              <br>
              <mdb-input size="4" basic class="mb-4" v-model="applicant.university" disabled>
                <span class="input-group-text" slot="prepend">มหาวิทยาลัย:</span>
              </mdb-input>
              <mdb-input size="4" basic class="mb-4" v-model="applicant.faculty" disabled>
                <span class="input-group-text" slot="prepend">คณะ:</span>
              </mdb-input>
              <mdb-input size="4" basic class="mb-4" v-model="applicant.major" disabled>
                <span class="input-group-text" slot="prepend">สาขาวิชา:</span>
              </mdb-input>
            </mdb-card-body></mdb-card>
          </mdb-col>
          <mdb-col>
            <!----- ข้อมูลทั่วไป ------>
            <mdb-card style="background-color: #3D5A80" class="mb-5">
              <mdb-card-title>
                <mdb-view gradient="blue" cascade><br>
                  <h3 class="card-header-title" style="color: white ; text-align: center">ข้อมูลในการทำงาน</h3>
                </mdb-view>
              </mdb-card-title>
              <mdb-card-body>
                <mdb-input size="5" basic class="mb-1" v-model="applicant.position" disabled>
                  <span class="input-group-text" slot="prepend">ตำแหน่ง:</span>
                </mdb-input>
                <br>
                <mdb-input type="textarea" basic v-model="applicant.time_work" disabled>
                  <span class="input-group-text" slot="prepend">ระยะเวลาฝึกงาน:</span>
                </mdb-input>
                <br>
                <mdb-input size="5" basic class="mb-1" v-model="applicant.name" disabled>
                  <span class="input-group-text" slot="prepend">ชื่อพี่เลี้ยง:</span>
                </mdb-input>
                <br>
                <mdb-input size="5" basic class="mb-1" v-model="applicant.positions" disabled>
                  <span class="input-group-text" slot="prepend">ตำแหน่งพี่เลี้ยง:</span>
                </mdb-input>
              </mdb-card-body></mdb-card>
          </mdb-col>
        </mdb-row>
      </mdb-card-body>
     </section>
</template>

<script>
import {
  mdbRow,
  mdbCol,
  mdbCard,
  mdbView,
  mdbCardBody,
  mdbBtn,
  mdbCardHeader,
  mdbCardText,
  mdbIcon,
  mdbTbl,
  mdbBarChart,
  mdbPieChart,
  mdbLineChart,
  mdbRadarChart,
  mdbDoughnutChart,
  mdbListGroup,
  mdbListGroupItem,
  mdbBadge,
  mdbModal,
  mdbModalHeader,
  mdbModalTitle,
  mdbModalBody,
  mdbModalFooter,
  mdbBtnGroup, mdbDropdown, mdbDropdownItem, mdbDropdownMenu, mdbDropdownToggle, mdbPagination,
  mdbPageItem,
  mdbPageNav,
  mdbMedia,
  mdbMediaBody,
  mdbMediaImage,
  mdbInput
} from 'mdbvue'

export default {
  name: 'demo6',
  components: {
    mdbRow,
    mdbCol,
    mdbCard,
    mdbView,
    mdbCardBody,
    mdbBtn,
    mdbCardHeader,
    mdbCardText,
    mdbIcon,
    mdbTbl,
    mdbBarChart,
    mdbPieChart,
    mdbLineChart,
    mdbRadarChart,
    mdbDoughnutChart,
    mdbListGroup,
    mdbListGroupItem,
    mdbBadge,
    mdbModal,
    mdbModalHeader,
    mdbModalTitle,
    mdbModalBody,
    mdbModalFooter,
    mdbBtnGroup,
    mdbDropdown,
    mdbDropdownItem,
    mdbDropdownMenu,
    mdbDropdownToggle,
    mdbPagination,
    mdbPageItem,
    mdbPageNav,
    mdbMedia,
    mdbMediaBody,
    mdbMediaImage,
    mdbInput
  },

  data () {
    return {
      applicant: {
        email: 'nesara134@gmail.com',
        tel: '0909121948',
        line: 'nesara',
        birthDate: '04/06/40',
        address: 'ฟ้าฮ่าม 50000',
        university: 'มหาลัยราชภัฎ',
        faculty: 'วิทยาศาสตร์',
        major: 'การโปรแกรม',
        position: 'Front-end Developer',
        name: 'aey rajcharin',
        positions: 'Tech Manager',
        time_work: '4 พ.ย.62 - 21ก.พ.63',
        first_name: 'nesara',
        last_name: 'ruenpaan',
        sex: 'หญิง',
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

<style scoped>

</style>
