<template>
  <section id="task">
    <mdb-row>
      <mdb-col>
        <h1>Task</h1>
      </mdb-col>
      <mdb-col></mdb-col>
      <mdb-col></mdb-col>
      <mdb-col col="2">
        <mdb-btn @click.native="create=true" class="mb-0" color="success" >สร้าง</mdb-btn>
      </mdb-col>
    </mdb-row>
    <mdb-card cascade narrow class="mt-2">
      <mdb-card-body class="text-center">
        <mdb-row>
          <mdb-col>
            <div id="task-btn">
              <mdb-btn-group vertical style="width: 100%">
                <mdb-btn @click.native="showFluidModalRight = true" class="mb-0" color="indigo">
                  <div style="text-align: start"><mdb-icon icon="bookmark" /></div>
                </mdb-btn>
                <mdb-btn @click.native="showFluidModalRight = true" class="mb-0" color="indigo">
                  <div style="text-align: start"><mdb-icon icon="bookmark" /></div>
                </mdb-btn>
                <mdb-btn @click.native="showFluidModalRight = true" class="mb-0" color="indigo">
                  <div style="text-align: start"><mdb-icon icon="bookmark" /></div>
                </mdb-btn>
                <mdb-btn @click.native="showFluidModalRight = true" class="mb-0" color="indigo">
                  <div style="text-align: start"><mdb-icon icon="bookmark" /></div>
                </mdb-btn>
                <mdb-btn @click.native="showFluidModalRight = true" class="mb-0" color="indigo">
                  <div style="text-align: start"><mdb-icon icon="bookmark" /></div>
                </mdb-btn>
                <mdb-btn @click.native="showFluidModalRight = true" class="mb-0" color="indigo">
                  <div style="text-align: start"><mdb-icon icon="bookmark" /></div>
                </mdb-btn>
                <mdb-btn @click.native="showFluidModalRight = true" class="mb-0" color="indigo">
                  <div style="text-align: start"><mdb-icon icon="bookmark" /></div>
                </mdb-btn>
                <mdb-btn @click.native="showFluidModalRight = true" class="mb-0" color="indigo">
                  <div style="text-align: start"><mdb-icon icon="bookmark" /></div>
                </mdb-btn>
                <mdb-btn @click.native="showFluidModalRight = true" class="mb-0" color="indigo">
                  <div style="text-align: start"><mdb-icon icon="bookmark" /></div>
                </mdb-btn>
                <mdb-btn @click.native="showFluidModalRight = true" class="mb-0" color="indigo">
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
        <!------ Modal Form ------>
        <mdb-modal :show="create" @close="create = false" fullHeight position="right">
          <mdb-modal-header class="text-center" style="background-color: #3D5A80">
            <mdb-btn-group>
              <mdb-popover trigger="click" :options="{placement: 'top'}">
                <span slot="body">แนบ</span>
                <mdb-btn slot="reference" color="#3D5A80" >
                  <mdb-icon fa icon="paperclip" style="color: white" />
                </mdb-btn>
              </mdb-popover>
              <mdb-popover trigger="click" :options="{placement: 'top'}">
                <span slot="body">ที่เกี่ยวข้อง</span>
                <mdb-btn slot="reference" color="#3D5A80">
                  <mdb-icon fa icon="link" style="color: white" />
                </mdb-btn>
              </mdb-popover>
              <mdb-popover trigger="click" :options="{placement: 'top'}">
                <span slot="body">อัพเดท</span>
                <mdb-btn slot="reference" color="#3D5A80">
                  <mdb-icon fa icon="edit" style="color: white" />
                </mdb-btn>
              </mdb-popover>
              <mdb-popover trigger="click" :options="{placement: 'top'}">
                <span slot="body">ลิ้งค์</span>
                <mdb-btn slot="reference" color="#3D5A80">
                  <mdb-icon fa icon="file-alt" style="color: white" />
                </mdb-btn>
              </mdb-popover>
            </mdb-btn-group>
          </mdb-modal-header>
          <mdb-modal-body class="mx-3 grey-text" style="text-align: start">
            <mdb-card style="background-color: #3D5A80">
              <mdb-card-body>
                <label style="color: white">สถานะ :</label>
                <mdb-dropdown>
                  <mdb-dropdown-toggle color="primary" size="md" slot="toggle" class="z-depth-0">โปรดเลือก</mdb-dropdown-toggle>
                  <mdb-dropdown-menu>
                    <mdb-dropdown-item>TO DO</mdb-dropdown-item>
                    <mdb-dropdown-item>DEV TEST</mdb-dropdown-item>
                    <mdb-dropdown-item>IN PROGRESS</mdb-dropdown-item>
                    <mdb-dropdown-item>QA REVIEW</mdb-dropdown-item>
                    <mdb-dropdown-item>DONE</mdb-dropdown-item>
                  </mdb-dropdown-menu>
                </mdb-dropdown>
                <mdb-input style="background-color: #ffffff">
                  <span class="input-group-text md-addon" slot="prepend" style="color: #3D5A80">หัวข้อ :</span>
                </mdb-input>
                <label style="color: white">ความสำคัญ :</label>
                <mdb-dropdown>
                  <mdb-dropdown-toggle color="primary" size="md" slot="toggle" class="z-depth-0">โปรดเลือก</mdb-dropdown-toggle>
                  <mdb-dropdown-menu>
                    <mdb-dropdown-item>ด่วน</mdb-dropdown-item>
                    <mdb-dropdown-item>มาก</mdb-dropdown-item>
                    <mdb-dropdown-item>ปานกลาง</mdb-dropdown-item>
                    <mdb-dropdown-item>น้อย</mdb-dropdown-item>
                  </mdb-dropdown-menu>
                </mdb-dropdown>
                  <mdb-input
                    type="textarea"
                    outline
                    wrapperClass="custom-purple-border"
                    placeholder="คำอธิบาย"
                    style="background-color: white"
                  />
              </mdb-card-body>
            </mdb-card>
          </mdb-modal-body>
          <mdb-modal-footer center>
            <mdb-btn @click.native="create = false">บันทึก</mdb-btn>
          </mdb-modal-footer>
        </mdb-modal>
        <!---->
        <!------ Modal ------>
        <mdb-modal fullHeight position="right" :show="showFluidModalRight" @close="showFluidModalRight = false">
          <mdb-modal-header class="text-center" style="background-color: #3D5A80">
            <mdb-btn-group>
              <mdb-popover trigger="click" :options="{placement: 'top'}">
                <span slot="body">แนบ</span>
                <mdb-btn slot="reference" color="#3D5A80" >
                  <mdb-icon fa icon="paperclip" style="color: white" />
                </mdb-btn>
              </mdb-popover>
              <mdb-popover trigger="click" :options="{placement: 'top'}">
                <span slot="body">ที่เกี่ยวข้อง</span>
                <mdb-btn slot="reference" color="#3D5A80">
                  <mdb-icon fa icon="link" style="color: white" />
                </mdb-btn>
              </mdb-popover>
              <mdb-popover trigger="click" :options="{placement: 'top'}">
                <span slot="body">อัพเดท</span>
                <mdb-btn slot="reference" color="#3D5A80">
                  <mdb-icon fa icon="edit" style="color: white" />
                </mdb-btn>
              </mdb-popover>
              <mdb-popover trigger="click" :options="{placement: 'top'}">
                <span slot="body">ลิ้งค์</span>
                <mdb-btn slot="reference" color="#3D5A80">
                  <mdb-icon fa icon="file-alt" style="color: white" />
                </mdb-btn>
              </mdb-popover>
            </mdb-btn-group>
          </mdb-modal-header>
          <mdb-modal-body class="mx-3 grey-text" style="text-align: start">
            <mdb-card style="background-color: #3D5A80">
              <mdb-card-body>
                <label style="color: white">สถานะ :</label>
                <mdb-dropdown>
                  <mdb-dropdown-toggle color="primary" size="md" slot="toggle" class="z-depth-0" disabled>โปรดเลือก</mdb-dropdown-toggle>
                  <mdb-dropdown-menu>
                    <mdb-dropdown-item>TO DO</mdb-dropdown-item>
                    <mdb-dropdown-item>DEV TEST</mdb-dropdown-item>
                    <mdb-dropdown-item>IN PROGRESS</mdb-dropdown-item>
                    <mdb-dropdown-item>QA REVIEW</mdb-dropdown-item>
                    <mdb-dropdown-item>DONE</mdb-dropdown-item>
                  </mdb-dropdown-menu>
                </mdb-dropdown>
                <mdb-input style="background-color: #ffffff" disabled>
                  <span class="input-group-text md-addon" slot="prepend" style="color: #3D5A80">หัวข้อ :</span>
                </mdb-input>
                <label style="color: white">ความสำคัญ :</label>
                <mdb-dropdown>
                  <mdb-dropdown-toggle color="primary" size="md" slot="toggle" class="z-depth-0" disabled>โปรดเลือก</mdb-dropdown-toggle>
                  <mdb-dropdown-menu disabled>
                    <mdb-dropdown-item>ด่วน</mdb-dropdown-item>
                    <mdb-dropdown-item>มาก</mdb-dropdown-item>
                    <mdb-dropdown-item>ปานกลาง</mdb-dropdown-item>
                    <mdb-dropdown-item>น้อย</mdb-dropdown-item>
                  </mdb-dropdown-menu>
                </mdb-dropdown>
                <mdb-input
                  type="textarea"
                  outline
                  wrapperClass="custom-purple-border"
                  placeholder="คำอธิบาย"
                  style="background-color: white"
                />
              </mdb-card-body>
            </mdb-card>
          </mdb-modal-body>
          <mdb-modal-footer center>
            <mdb-btn @click.native="create = false">แก้ไข</mdb-btn>
          </mdb-modal-footer>
        </mdb-modal>
        <!---->
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
  mdbContainer,
  mdbInput,
  mdbPopover
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
    mdbContainer,
    mdbInput,
    mdbPopover
  },
  data () {
    return {
      create: false,
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
      showModalCreate: false,
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
