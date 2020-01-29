<template>
  <section id="task">
    <mdb-card cascade narrow class="mt-5">
      <mdb-view class="gradient-card-header blue darken-2">
        <h4 class="h4-responsive text-white">
          Task
        </h4>
      </mdb-view>
      <mdb-card-body class="text-center">
        <mdb-row>
          <mdb-col>
            <div id="task-btn">
              <mdb-btn-group vertical style="width: 100%">
                <mdb-btn @click.native="showFluidModalRight = true" class="mb-0" color="amber">
                  <div style="text-align: start"><mdb-icon icon="bookmark" /></div>
                </mdb-btn>
                <mdb-btn @click.native="showFluidModalRight = true" class="mb-0" color="amber">
                  <div style="text-align: start"><mdb-icon icon="bookmark" /></div>
                </mdb-btn>
                <mdb-btn @click.native="showFluidModalRight = true" class="mb-0" color="amber">
                  <div style="text-align: start"><mdb-icon icon="bookmark" /></div>
                </mdb-btn>
                <mdb-btn @click.native="showFluidModalRight = true" class="mb-0" color="amber">
                  <div style="text-align: start"><mdb-icon icon="bookmark" /></div>
                </mdb-btn>
                <mdb-btn @click.native="showFluidModalRight = true" class="mb-0" color="amber">
                  <div style="text-align: start"><mdb-icon icon="bookmark" /></div>
                </mdb-btn>
                <mdb-btn @click.native="showFluidModalRight = true" class="mb-0" color="amber">
                  <div style="text-align: start"><mdb-icon icon="bookmark" /></div>
                </mdb-btn>
                <mdb-btn @click.native="showFluidModalRight = true" class="mb-0" color="amber">
                  <div style="text-align: start"><mdb-icon icon="bookmark" /></div>
                </mdb-btn>
                <mdb-btn @click.native="showFluidModalRight = true" class="mb-0" color="amber">
                  <div style="text-align: start"><mdb-icon icon="bookmark" /></div>
                </mdb-btn>
                <mdb-btn @click.native="showFluidModalRight = true" class="mb-0" color="amber">
                  <div style="text-align: start"><mdb-icon icon="bookmark" /></div>
                </mdb-btn>
                <mdb-btn @click.native="showFluidModalRight = true" class="mb-0" color="amber">
                  <div style="text-align: start"><mdb-icon icon="bookmark" /></div>
                </mdb-btn>
              </mdb-btn-group>
            </div>
            <br>
          </mdb-col>
        </mdb-row>
        <mdb-row>
          <mdb-col></mdb-col>
          <mdb-col><mdb-pagination circle>
            <mdb-page-item disabled>First</mdb-page-item>
            <mdb-page-nav prev disabled></mdb-page-nav>
            <mdb-page-item active>1</mdb-page-item>
            <mdb-page-item>2</mdb-page-item>
            <mdb-page-item>3</mdb-page-item>
            <mdb-page-item>4</mdb-page-item>
            <mdb-page-item>5</mdb-page-item>
            <mdb-page-nav next></mdb-page-nav>
            <mdb-page-item>Last</mdb-page-item>
          </mdb-pagination></mdb-col>
          <mdb-col></mdb-col>
        </mdb-row>

        <mdb-modal fullHeight position="right" :show="showFluidModalRight" @close="showFluidModalRight = false">
          <mdb-modal-header>
            <mdb-modal-title>Modal title</mdb-modal-title>
          </mdb-modal-header>
          <mdb-modal-body>...</mdb-modal-body>
          <mdb-modal-footer>
            <mdb-btn color="secondary" @click.native="showFluidModalRight = false">Close</mdb-btn>
            <mdb-btn color="primary">Save changes</mdb-btn>
          </mdb-modal-footer>
        </mdb-modal>
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
  mdbPageNav
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
    mdbPageNav
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  .cascading-admin-card .admin-up {
    margin-left: 4%;
    margin-right: 4%;
    margin-top: -20px;
  }
  .cascading-admin-card .admin-up .fas,
  .cascading-admin-card .admin-up .far {
    box-shadow: 0 2px 9px 0 rgba(0, 0, 0, 0.2), 0 2px 13px 0 rgba(0, 0, 0, 0.19);
    padding: 1.7rem;
    font-size: 2rem;
    color: #fff;
    text-align: left;
    margin-right: 1rem;
    border-radius: 3px;
  }
  .cascading-admin-card .admin-up .data {
    float: right;
    margin-top: 2rem;
    text-align: right;
  }
  .admin-up .data p {
    color: #999999;
    font-size: 12px;
  }
  .classic-admin-card .card-body {
    color: #fff;
    margin-bottom: 0;
    padding: 0.9rem;
  }
  .classic-admin-card .card-body p {
    font-size: 13px;
    opacity: 0.7;
    margin-bottom: 0;
  }
  .classic-admin-card .card-body h4 {
    margin-top: 10px;
  }
</style>
