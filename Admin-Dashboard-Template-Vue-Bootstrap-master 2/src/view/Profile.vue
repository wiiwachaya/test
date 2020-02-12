<template>
  <section id="task">
    <mdb-card-title cascade narrow class="mt-2">
      <mdb-view class="gradient-card-header blue darken-2">
        <mdb-row>
        <mdb-col><h2 class="responsive text-white">
          Name Surname
        </h2></mdb-col>
        <mdb-col style="text-align: end">
          <!----- ปุ่มแก้ไขข้อมูล ------>
          <mdb-btn color="success">แก้ไขข้อมูล</mdb-btn></mdb-col>
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
                <mdb-input size="3" basic class="mb-4">
                  <span class="input-group-text" slot="prepend">Email:</span>
                </mdb-input>
                <mdb-input size="3" basic class="mb-4">
                  <span class="input-group-text" slot="prepend">Tel:</span>
                </mdb-input>
                <mdb-input size="3" basic class="mb-4">
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
                <mdb-input basic aria-label="First name">
                  <span class="input-group-text" slot="prepend">ชื่อ-นามสกุล:</span>
                  <mdb-input noWrapper aria-label="Last name"/>
                </mdb-input>
              </section>
              <br>
              <mdb-input size="3" basic class="mb-4">
                <span class="input-group-text" slot="prepend">วัน/เดือน/ปีเกิด:</span>
              </mdb-input>
              <mdb-input size="4" basic class="mb-4">
                <span class="input-group-text" slot="prepend">เพศ:</span>
              </mdb-input>
              <mdb-input type="textarea" basic>
                <span class="input-group-text" slot="prepend">ที่อยู่:</span>
              </mdb-input>
              <br>
              <mdb-input type="textarea" basic>
                            <span class="input-group-text" slot="prepend">มหาวิทยาลัย:
                            <br>
                              คณะ:
                              <br>
                              สาขาวิชา:
                            </span>
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
                <mdb-input size="5" basic class="mb-1">
                  <span class="input-group-text" slot="prepend">ตำแหน่ง:</span>
                </mdb-input>
                <br>
                <mdb-input type="textarea" basic>
                              <span class="input-group-text" slot="prepend">พี่เลี้ยง:
                              <br>
                                ตำแหน่ง:
                              </span>
                </mdb-input>
                <br>
                <mdb-input type="textarea" basic>
                  <span class="input-group-text" slot="prepend">ระยะเวลาฝึกงาน:</span>
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
  name: 'Task',
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
      showFrameModalTop: false,
      showFrameModalBottom: false,
      showSideModalTopRight: false,
      showSideModalTopLeft: false,
      showSideModalBottomRight: false,
      showSideModalBottomLeft: false,
      showCentralModalSmall: false,
      showCentralModalMedium: false,
      showCentralModalLarge: false,
      showCentralModalFluid: false,
      showFluidModalRight: false,
      showFluidModalLeft: false,
      showFluidModalTop: false,
      showFluidModalBottom: false,
      barChartData: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
        datasets: [
          {
            label: '#1',
            data: [12, 39, 3, 50, 2, 32, 84],
            backgroundColor: 'rgba(245, 74, 85, 0.5)',
            borderWidth: 1
          }, {
            label: '#2',
            data: [56, 24, 5, 16, 45, 24, 8],
            backgroundColor: 'rgba(90, 173, 246, 0.5)',
            borderWidth: 1
          }, {
            label: '#3',
            data: [12, 25, 54, 3, 15, 44, 3],
            backgroundColor: 'rgba(245, 192, 50, 0.5)',
            borderWidth: 1
          }
        ]
      },
      barChartOptions: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          xAxes: [{
            barPercentage: 1,
            gridLines: {
              display: true,
              color: 'rgba(0, 0, 0, 0.1)'
            }
          }],
          yAxes: [{
            gridLines: {
              display: true,
              color: 'rgba(0, 0, 0, 0.1)'
            },
            ticks: {
              beginAtZero: true
            }
          }]
        }
      },
      pieChartData: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
        datasets: [
          {
            data: [300, 50, 100, 40, 120, 24, 52],
            backgroundColor: ['#F7464A', '#46BFBD', '#FDB45C', '#949FB1', '#4D5360', '#ac64ad'],
            hoverBackgroundColor: ['#FF5A5E', '#5AD3D1', '#FFC870', '#A8B3C5', '#616774', '#da92db']
          }
        ]
      },
      pieChartOptions: {
        responsive: true,
        maintainAspectRatio: false
      },
      lineChartData: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
        datasets: [
          {
            label: '#1',
            backgroundColor: 'rgba(245, 74, 85, 0.5)',
            data: [65, 59, 80, 81, 56, 55, 40]
          },
          {
            label: '#2',
            backgroundColor: 'rgba(90, 173, 246, 0.5)',
            data: [12, 42, 121, 56, 24, 12, 2]
          },
          {
            label: '#3',
            backgroundColor: 'rgba(245, 192, 50, 0.5)',
            data: [2, 123, 154, 76, 54, 23, 5]
          }
        ]
      },
      lineChartOptions: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          xAxes: [{
            gridLines: {
              display: true,
              color: 'rgba(0, 0, 0, 0.1)'
            }
          }],
          yAxes: [{
            gridLines: {
              display: true,
              color: 'rgba(0, 0, 0, 0.1)'
            }
          }]
        }
      },
      radarChartData: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
        datasets: [
          {
            label: '#1',
            backgroundColor: 'rgba(245, 74, 85, 0.5)',
            data: [65, 59, 80, 81, 56, 55, 40]
          },
          {
            label: '#2',
            backgroundColor: 'rgba(90, 173, 246, 0.5)',
            data: [12, 42, 121, 56, 24, 12, 2]
          },
          {
            label: '#3',
            backgroundColor: 'rgba(245, 192, 50, 0.5)',
            data: [2, 123, 154, 76, 54, 23, 5]
          }
        ]
      },
      radarChartOptions: {
        responsive: true,
        maintainAspectRatio: false
      },
      doughnutChartData: {
        labels: ['Red', 'Green', 'Yellow', 'Grey', 'Dark Grey'],
        datasets: [
          {
            data: [300, 50, 100, 40, 120],
            backgroundColor: ['#F7464A', '#46BFBD', '#FDB45C', '#949FB1', '#4D5360'],
            hoverBackgroundColor: ['#FF5A5E', '#5AD3D1', '#FFC870', '#A8B3C5', '#616774']
          }
        ]
      },
      doughnutChartOptions: {
        responsive: true,
        maintainAspectRatio: false
      }
    }
  }
}
</script>

<style scoped>

</style>
