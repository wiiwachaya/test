<template>
    <div>
      <div v-if="type === 'A'">
        I am A
      </div>
      <div v-else-if="type === 'B'">
        I am B
      </div>
      <div v-else-if="type === 'C'">
        I am C
      </div>
      <div v-else>
        Not A/B/C
      </div>

      <div>
        <mdb-row>
          <mdb-col col="3" v-for="(item, index) in mData" :key="index">
            <mdb-card>
              <mdb-card-title style="text-align: end">
                <mdb-dropdown>
                  <mdb-dropdown-toggle slot="toggle" size="sm"><mdb-icon fas icon="ellipsis-h" size="lg"/></mdb-dropdown-toggle>
                  <mdb-dropdown-menu>
                    <mdb-dropdown-item>ดูข้อมูล</mdb-dropdown-item>
                    <mdb-dropdown-item>ลบข้อมูล</mdb-dropdown-item>
                  </mdb-dropdown-menu>
                </mdb-dropdown>
              </mdb-card-title>
              <mdb-card-body style="text-align: center">
                <mdb-card-image>
                </mdb-card-image>
                <h1>{{item.name}}</h1><br>
                <p>
                  <mdb-icon icon="phone-alt" size="sm" /> &nbsp;{{item.tel}}<br>
                  <mdb-icon icon="envelope" size="sm" /> &nbsp;{{item.mail}} <br>
                  <mdb-icon fab icon="line" size="sm" /> &nbsp;{{item.line}}
                </p>
              </mdb-card-body>
            </mdb-card><br>
          </mdb-col>
        </mdb-row>
        </div>
    </div>
</template>

<script>
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
  mdbBtnToolbar,
  mdbModal,
  mdbModalHeader,
  mdbModalTitle,
  mdbModalBody,
  mdbModalFooter,
  mdbDropdown,
  mdbDropdownItem,
  mdbDropdownMenu,
  mdbDropdownToggle} from 'mdbvue'
export default {
  name: 'Test',
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
      type: 'A',
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
        }
      ]
    }
  }
}
</script>

<style scoped>

</style>
