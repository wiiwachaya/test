<template>
  <div>
    <mdb-container>
    <div class="input-group md-form form-sm form-1 pl-0">
      <div class="input-group-prepend">
        <span class="input-group-text cyan lighten-2" id="basic-text1">
          <mdbIcon icon="search"/>
        </span>
      </div>
      <input class="form-control my-0 py-1" type="text" placeholder="ข่าวสารวันนี้" aria-label="Search">
    </div>
    <mdb-row>
      <router-link to="/home" @click.native="activeItem = 1">
      <mdb-col><mdb-btn active size="lg" color=" blue-gradient">
        <mdb-icon color="white" icon="user"  class="mr-4"/><label style="color : white">ยินดีต้อนรับ</label></mdb-btn>
      </mdb-col>
      </router-link>
      <router-link to="/calendar" @click.native="activeItem = 2">
      <mdb-col><mdb-btn active size="lg" color=" purple-gradient">
        <mdb-icon color="white" icon="calendar-alt"  class="mr-4"/><label style="color : white">กิจกรรมล่าสุด</label></mdb-btn>
      </mdb-col>
      </router-link>
      <router-link to="/task" @click.native="activeItem = 4">
      <mdb-col><mdb-btn active size="lg" color=" peach-gradient">
        <mdb-icon color="white" icon="calendar-check" class="mr-4"/><label style="color : white">งานล่าสุด</label></mdb-btn>
      </mdb-col>
      </router-link>
      <router-link to="/contacts" @click.native="activeItem = 3">
      <mdb-col><mdb-btn active size="lg" color=" aqua-gradient">
        <mdb-icon color="white" icon="calendar-check" class="mr-4"/><label style="color : white">ผู้ติดต่อล่าสุด</label></mdb-btn>
      </mdb-col>
      </router-link>
    </mdb-row>
    <mdb-col>
      <h2>กิจกรรมที่ต้องเข้าร่วม</h2>
    </mdb-col>
    <br>
    <mdb-btn-group>
      <mdb-btn color="primary" @click.native="toggleActiveState5" :active="active5">
        <mdb-card style="width: 15rem;">
          <mdb-card-body>
            <router-link to="/calendar" @click.native="activeItem = 2">
            <mdb-card-title>ผู้เข้าร่วม</mdb-card-title>
            <mdb-card-text>With supporting text below as a natural lead-in to additional content.</mdb-card-text>
            <mdb-btn color="primary">go somewhere</mdb-btn>
            </router-link>
          </mdb-card-body>
        </mdb-card>
      </mdb-btn>
      <mdb-btn color="primary" @click.native="toggleActiveState6" :active="active6">
        <mdb-card style="width: 15rem;">
        <mdb-card-body>
          <router-link to="/calendar" @click.native="activeItem = 2">
          <mdb-card-title>ผู้เข้าร่วม</mdb-card-title>
          <mdb-card-text>With supporting text below as a natural lead-in to additional content.</mdb-card-text>
          <mdb-btn color="primary">go somewhere</mdb-btn>
          </router-link>
        </mdb-card-body>
      </mdb-card>
      </mdb-btn>
      <mdb-btn color="primary" @click.native="toggleActiveState7" :active="active7">
        <mdb-card style="width: 15rem;">
        <mdb-card-body>
          <router-link to="/calendar" @click.native="activeItem = 2">
          <mdb-card-title>ผู้เข้าร่วม</mdb-card-title>
          <mdb-card-text>With supporting text below as a natural lead-in to additional content.</mdb-card-text>
          <mdb-btn color="primary">go somewhere</mdb-btn>
          </router-link>
        </mdb-card-body>
      </mdb-card>
      </mdb-btn>
    </mdb-btn-group>
    </mdb-container>
    </div>
</template>

<script>
// eslint-disable-next-line standard/object-curly-even-spacing
import {
  mdbIcon,
  mdbBtn,
  mdbBtnGroup,
  mdbBtnToolbar,
  mdbContainer,
  mdbRow,
  mdbCol,
  mdbMasonry,
  mdbMasonryItem,
  mdbPagination,
  mdbPageItem,
  mdbPageNav,
  mdbCarousel,
  mdbCard,
  mdbCardBody,
  mdbCardHeader,
  mdbCardTitle,
  mdbCardText
} from 'mdbvue'
export default {
  components: {
    mdbIcon,
    mdbBtn,
    mdbBtnGroup,
    mdbBtnToolbar,
    mdbContainer,
    mdbRow,
    mdbCol,
    mdbMasonry,
    mdbMasonryItem,
    mdbPagination,
    mdbPageItem,
    mdbPageNav,
    mdbCarousel,
    mdbCard,
    mdbCardBody,
    mdbCardHeader,
    mdbCardTitle,
    mdbCardText
  }
}
</script>

<style scoped>
  .input-group.md-form.form-sm.form-1 input{
    border: 1px solid #bdbdbd;
    border-top-right-radius: 0.25rem;
    border-bottom-right-radius: 0.25rem;
  }
  .input-group.md-form.form-sm.form-2 input {
    border: 1px solid #bdbdbd;
    border-top-left-radius: 0.25rem;
    border-bottom-left-radius: 0.25rem;
  }

  .masonry-with-columns div {
    display: flex;
    justify-content: center;
    align-items: center;
    background: #ffffff;
    color:  grey;
    margin: 0.5rem;
    font-weight: 900;
    font-size: 2rem;
  }

</style>
