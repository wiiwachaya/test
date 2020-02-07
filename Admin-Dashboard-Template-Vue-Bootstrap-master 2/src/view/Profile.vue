<template>
  <section id="task">
    <mdb-card cascade narrow class="mt-2">
      <mdb-view class="gradient-card-header blue darken-2">
        <h4 class="h2-responsive text-white">
          Name Surname
        </h4>
      </mdb-view>

      <mdb-modal-footer right>
        <mdb-btn @click.native="แก้ไขข้อมูล = false" color="success">แก้ไขข้อมูล</mdb-btn>
      </mdb-modal-footer>

      <mdb-card-body class="text-center">
        <mdb-row>
          <mdb-col>
            <mdb-container>

              <section class="text-center my-3">
                <h2 class="h1-responsive font-weight-bold my-1"></h2>
                <p class="grey-text w-responsive mx-auto mb-1"></p>
                  <mdb-row>
                  <mdb-col md="12" class="mb-3">
                    <mdb-card  style="background-color: #3D5A80">
                      <div class="text-white text-center d-flex align-items-center px-4 rounded">
                        <div>
                          <h6 class="purple-text">
                          </h6>
                          <ul class="list-unstyled">
                            <mdb-media tag="li">
                              <!-- Grid column -->
                              <mdb-col xl="5" md="4" class="mb-1 text-left">

                                <img src="https://mdbootstrap.com/img/Photos/Avatars/img(31).jpg" class="img-fluid z-depth-1 rounded-circle"
                                     alt="Responsive image">

                              </mdb-col>
                              <!-- Grid column -->
                              <mdb-media-body>
                                <h5 class="mt-0 mb-1 font-weight-bold"></h5>
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
                              </mdb-media-body>
                            </mdb-media>
                          </ul>

                        </div>
                      </div>
                    </mdb-card>
                  </mdb-col>
                  <mdb-col md="6" class="md-0 mb-4">
                    <mdb-card  style="background-color: #3D5A80">
                      <div class="text-white text-center d-flex align-items-center py-5 px-4 rounded">
                        <div>
                          <h6 class="pink-text">

                          </h6>
                          <mdb-view gradient="blue" cascade>
                            <h2 class="card-header-title">ข้อมูลทั่วไป</h2>
                          </mdb-view>
                          <br>
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
                        </div>
                      </div>
                    </mdb-card>
                  </mdb-col>
                  <mdb-col md="6" class="md-0 mb-4">
                    <mdb-card class=" #2196f3 "  style="background-color: #3D5A80">
                      <div class="text-white text-center d-flex align-items-center py-5 px-4 rounded">
                        <div>
                          <h6 class="green-text">

                          </h6>
                          <mdb-view gradient="blue" cascade>
                            <h2 class="card-header-title">ข้อมูลในการทำงาน</h2>
                          </mdb-view>
                          <br>
                          <p class="pb-3">
                            <mdb-input size="5" basic class="mb-1">
                              <span class="input-group-text" slot="prepend">ต่ำแหน่ง:</span>
                            </mdb-input>
                            <br>
                            <mdb-input type="textarea" basic>
                              <span class="input-group-text" slot="prepend">พี่เลี้ยง:
                              <br>
                                ต่ำแหน่ง:
                              </span>
                            </mdb-input>
                            <br>
                            <mdb-input type="textarea" basic>
                              <span class="input-group-text" slot="prepend">ระยะเวลาฝึกงาน:</span>
                            </mdb-input>
                          </p>

                        </div>
                      </div>
                    </mdb-card>
                  </mdb-col>
                </mdb-row>
              </section>
            </mdb-container>

          </mdb-col>
        </mdb-row>
        <mdb-row>

        </mdb-row>

      </mdb-card-body>
    </mdb-card>
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
