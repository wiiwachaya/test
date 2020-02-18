<template>
  <mdb-container>
    <mdb-row>
      <mdb-col><h1>ผู้ติดต่อ</h1></mdb-col>
      <mdb-col></mdb-col>
      <mdb-col></mdb-col>
      <mdb-col col="2" style="text-align: end">
        <mdb-btn-toolbar style="text-align: end">
          <mdb-btn-group class="mr-2">
            <mdb-btn @click.native="modal = true" style="background: #EE6C4D; color: white" color="#3D5A80">
              สร้าง</mdb-btn>
          </mdb-btn-group>
        </mdb-btn-toolbar>
        <!--Modal-->
        <mdb-modal :show="modal" @close="modal = false">
          <mdb-modal-header style="background-color: #3D5A80 ; color: white">
            <mdb-modal-title>Modal title</mdb-modal-title>
          </mdb-modal-header>
          <mdb-modal-body>
            <mdb-modal-body class="sm-3 grey-text" style="text-align: start">
            <mdb-card style="background-color: #3D5A80">
              <mdb-card-body>
                <mdb-container>
                  <mdb-row class="justify-content-start">
                     <mdb-col col="5">
                       <label style="color: white">Name Surname</label>
                       <label style="color: white">Nickname</label>
                  </mdb-col>
                     <mdb-col col="9">
                       <mdb-input style="background-color: #ffffff">
                  <span class="input-group-text md-addon" slot="prepend" style="color: #3D5A80">ตำแหน่ง:</span>
                </mdb-input>
                  </mdb-col>
                  </mdb-row>
                     <mdb-row class="justify-content-center">
                      <mdb-col col="6">
                         <label style="color: white">ข้อมูลการติดต่อ:</label>
                    <mdb-input style="background-color: #ffffff">
                  <span class="input-group-text md-addon" slot="prepend" style="color: #3D5A80">Email:email</span>
                </mdb-input>
                 <mdb-input style="background-color: #ffffff">
                  <span class="input-group-text md-addon" slot="prepend" style="color: #3D5A80">Tel:000-000-0</span>
                </mdb-input>
                 <mdb-input style="background-color: #ffffff">
                  <span class="input-group-text md-addon" slot="prepend" style="color: #3D5A80">Line:xxxxx</span>
                </mdb-input>
                  </mdb-col>
                    <mdb-col col="6">
                       <label style="color: white">งานที่รับผิดชอบ:</label>
                        <mdb-input style="background-color: #ffffff">
                  <span class="input-group-text md-addon" slot="prepend" style="color: #3D5A80"></span>
                </mdb-input>
                 <mdb-input style="background-color: #ffffff">
                  <span class="input-group-text md-addon" slot="prepend" style="color: #3D5A80"></span>
                </mdb-input>
                 <mdb-input style="background-color: #ffffff">
                  <span class="input-group-text md-addon" slot="prepend" style="color: #3D5A80"></span>
                </mdb-input>
                  </mdb-col>
                  </mdb-row>
                     <mdb-row class="justify-content-end">
                  </mdb-row>
                      <mdb-row class="justify-content-around">
                       <mdb-col col="12">
                        <mdb-input
                    type="textarea"
                    outline
                    wrapperClass="custom-purple-border"
                    placeholder="คำอธิบาย"
                    style="background-color: white"
                  />
                  </mdb-col>
                  </mdb-row>
                    <mdb-row class="justify-content-between">
                 </mdb-row>
                 </mdb-container>
               </mdb-card-body>
            </mdb-card>
          </mdb-modal-body>
            </mdb-modal-body>
          <mdb-modal-footer style="background-color: #3D5A80">
            <mdb-btn color="danger" @click.native="modal = false">Close</mdb-btn>
            <mdb-btn color="primary">Save changes</mdb-btn>
          </mdb-modal-footer>
        </mdb-modal>
        <!--Modal-->
      </mdb-col>
    </mdb-row>
        <mdb-tabs
          :active="0"
          default style="color: #3D5A80"
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
                <mdb-col col="4" v-for="(item, index) in mData" :key="index">
                  <mdb-card>
                    <mdb-card-title style="text-align: end">
                      <mdb-dropdown tag="li" class="nav-item">
                        <mdb-dropdown-toggle tag="a" navLink slot="toggle" size="sm" waves-fixed>
                          <mdb-icon fas icon="ellipsis-h" size="lg"/></mdb-dropdown-toggle>
                        <mdb-dropdown-menu right>
                          <mdb-dropdown-item>ดูข้อมูล</mdb-dropdown-item>
                          <mdb-dropdown-item @click ="remodel(index)">ลบข้อมูล</mdb-dropdown-item>
                        </mdb-dropdown-menu>
                      </mdb-dropdown>
                    </mdb-card-title>
                    <mdb-card-body style="text-align: center">
                      <mdb-card-image>
                      </mdb-card-image>
                      <h1>{{item.name}}</h1><br>
                      <mdb-row>
                        <mdb-col col="1"><mdb-icon icon="phone-alt" size="sm" /></mdb-col>
                        <mdb-col style="text-align: start">{{item.tel}}</mdb-col>
                      </mdb-row>
                      <mdb-row>
                        <mdb-col col="1"><mdb-icon icon="envelope" size="sm" /></mdb-col>
                        <mdb-col style="text-align: start">{{item.mail}}</mdb-col>
                      </mdb-row>
                      <mdb-row>
                        <mdb-col col="1"><mdb-icon fab icon="line" size="sm" /></mdb-col>
                        <mdb-col style="text-align: start">{{item.line}}</mdb-col>
                      </mdb-row>
                    </mdb-card-body>
                  </mdb-card><br>
                </mdb-col>
              </mdb-row>
            </mdb-container>
            <!-------Remove Model-------->
            <mdb-modal :show="rmmodal" @close="rmmodal = false">
              <mdb-modal-header style="background-color: #bdbdbd  ; color: white">
                <mdb-modal-title>ลบข้อมูล</mdb-modal-title>
              </mdb-modal-header>
              <mdb-modal-body>คุณแน่ใจหรือไม่</mdb-modal-body>
              <mdb-modal-footer style="background-color: #EDEDEE ">
                <mdb-btn color="danger" @click.native="rmmodal = false">ปิด</mdb-btn>
                <mdb-btn color="primary" @click="remmodal(index)">ยืนยัน</mdb-btn>
              </mdb-modal-footer>
            </mdb-modal>
            <!--------------->
          </template>
          <template :slot="'Employees'">
            <br>
            <mdb-container>
              <mdb-row>
                <mdb-col col="4" v-for="(item, index) in mData" :key="index">
                  <mdb-card>
                    <mdb-card-title style="text-align: end">
                      <mdb-dropdown tag="li" class="nav-item">
                        <mdb-dropdown-toggle tag="a" navLink slot="toggle" size="sm" waves-fixed>
                          <mdb-icon fas icon="ellipsis-h" size="lg"/></mdb-dropdown-toggle>
                        <mdb-dropdown-menu right>
                          <mdb-dropdown-item>ดูข้อมูล</mdb-dropdown-item>
                          <mdb-dropdown-item @click ="remodel(index)">ลบข้อมูล</mdb-dropdown-item>
                        </mdb-dropdown-menu>
                      </mdb-dropdown>
                    </mdb-card-title>
                    <mdb-card-body style="text-align: center">
                      <mdb-card-image>
                      </mdb-card-image>
                      <h1>{{item.name}}</h1><br>
                      <mdb-row>
                        <mdb-col col="1"><mdb-icon icon="phone-alt" size="sm" /></mdb-col>
                        <mdb-col style="text-align: start">{{item.tel}}</mdb-col>
                      </mdb-row>
                      <mdb-row>
                        <mdb-col col="1"><mdb-icon icon="envelope" size="sm" /></mdb-col>
                        <mdb-col style="text-align: start">{{item.mail}}</mdb-col>
                      </mdb-row>
                      <mdb-row>
                        <mdb-col col="1"><mdb-icon fab icon="line" size="sm" /></mdb-col>
                        <mdb-col style="text-align: start">{{item.line}}</mdb-col>
                      </mdb-row>
                    </mdb-card-body>
                  </mdb-card><br>
                </mdb-col>
              </mdb-row>
            </mdb-container>
          </template>
          <template :slot="'Trainee'">
            <br>
            <mdb-container>
              <mdb-row>
                <mdb-col col="4" v-for="(item, index) in mData" :key="index">
                  <mdb-card>
                    <mdb-card-title style="text-align: end">
                      <mdb-dropdown tag="li" class="nav-item">
                        <mdb-dropdown-toggle tag="a" navLink slot="toggle" size="sm" waves-fixed>
                          <mdb-icon fas icon="ellipsis-h" size="lg"/></mdb-dropdown-toggle>
                        <mdb-dropdown-menu right>
                          <mdb-dropdown-item>ดูข้อมูล</mdb-dropdown-item>
                          <mdb-dropdown-item @click ="remodel(index)">ลบข้อมูล</mdb-dropdown-item>
                        </mdb-dropdown-menu>
                      </mdb-dropdown>
                    </mdb-card-title>
                    <mdb-card-body style="text-align: center">
                      <mdb-card-image>
                      </mdb-card-image>
                      <h1>{{item.name}}</h1><br>
                      <mdb-row>
                        <mdb-col col="1"><mdb-icon icon="phone-alt" size="sm" /></mdb-col>
                        <mdb-col style="text-align: start">{{item.tel}}</mdb-col>
                      </mdb-row>
                      <mdb-row>
                        <mdb-col col="1"><mdb-icon icon="envelope" size="sm" /></mdb-col>
                        <mdb-col style="text-align: start">{{item.mail}}</mdb-col>
                      </mdb-row>
                      <mdb-row>
                        <mdb-col col="1"><mdb-icon fab icon="line" size="sm" /></mdb-col>
                        <mdb-col style="text-align: start">{{item.line}}</mdb-col>
                      </mdb-row>
                    </mdb-card-body>
                  </mdb-card><br>
                </mdb-col>
              </mdb-row>
            </mdb-container>
          </template>
        </mdb-tabs>
  </mdb-container>
</template>

<script>
// eslint-disable-next-line standard/object-curly-even-spacing
import {
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
  mdbBtnToolbar,
  mdbModal,
  mdbModalHeader,
  mdbModalTitle,
  mdbModalBody,
  mdbModalFooter, mdbDropdown, mdbDropdownItem, mdbDropdownMenu, mdbDropdownToggle
} from 'mdbvue'
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
    mdbBtnToolbar,
    mdbModal,
    mdbModalHeader,
    mdbModalTitle,
    mdbModalBody,
    mdbModalFooter,
    mdbDropdown,
    mdbDropdownItem,
    mdbDropdownMenu,
    mdbDropdownToggle
  },
  data () {
    return {
      mainProps: { blank: true, blankColor: '#777', width: 75, height: 75, class: 'm1' },
      modal: false,
      rmmodal: false,
      remodel (index) {
        this.mData.splice(index, 1)
      },
      mData: [
        {name: 'test1',
          tel: '001-0000001',
          mail: 'email1@gmail.com',
          line: 'lineline1'
        }, {name: 'test2',
          tel: '002-0000002',
          mail: 'email2@gmail.com',
          line: 'lineline2'
        }, {name: 'test3',
          tel: '003-0000003',
          mail: 'email3@gmail.com',
          line: 'lineline3'
        }, {name: 'test4',
          tel: '004-0000004',
          mail: 'email4@gmail.com',
          line: 'lineline4'
        }, {name: 'test5',
          tel: '005-0000005',
          mail: 'email5@gmail.com',
          line: 'lineline5'
        }, {name: 'test6',
          tel: '006-0000006',
          mail: 'email6@gmail.com',
          line: 'lineline6'
        }, {name: 'test7',
          tel: '007-0000007',
          mail: 'email7@gmail.com',
          line: 'lineline7'
        }, {name: 'test8',
          tel: '008-0000008',
          mail: 'email8@gmail.com',
          line: 'lineline8'
        }, {name: '',
          tel: '',
          mail: '',
          line: ''
        }
      ]
    }
  }
}
</script>

<style scoped>
.modal-content {
  width: 100%;
}
</style>
