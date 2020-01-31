<template>
  <div class="flexible-content">
    <!--Navbar-->
    <mdb-navbar class="flexible-navbar white" light position="top" scrolling>
      <mdb-navbar-brand target="_blank"><img alt="" class="img-fluid" src="./assets/D-Trainee.png"/></mdb-navbar-brand>
      <mdb-navbar-toggler>
        <mdb-navbar-nav right>
          <mdb-nav-item href="#!" waves-fixed><mdb-icon icon="search"/></mdb-nav-item>
          <mdb-nav-item href="#!" waves-fixed><mdb-icon icon="bell"/></mdb-nav-item>
          <mdb-nav-item href="#!" waves-fixed><mdb-icon icon="user-alt"/></mdb-nav-item>
        </mdb-navbar-nav>
      </mdb-navbar-toggler>
    </mdb-navbar>
    <!--/.Navbar-->
    <!-- Sidebar -->
    <div class="sidebar-fixed position-fixed">
      <a class="logo-wrapper"><img alt="" class="img-fluid" src="./assets/1_w55hpZI8EkcHxhghZjK-NA 1.png"/></a>
      <mdb-list-group class="list-group-flush">
        <router-link to="/home" @click.native="activeItem = 1">
          <mdb-list-group-item :action="true" :class="activeItem === 1 && 'active'"><mdb-icon icon="home" class="mr-3"/>หน้าหลัก</mdb-list-group-item>
        </router-link>
        <router-link to="/calendar" @click.native="activeItem = 2">
          <mdb-list-group-item :action="true" :class="activeItem === 2 && 'active'"><mdb-icon icon="calendar-alt" class="mr-3"/>ปฏิทิน</mdb-list-group-item>
        </router-link>
        <router-link to="/contacts" @click.native="activeItem = 3">
          <mdb-list-group-item :action="true" :class="activeItem === 3 && 'active'"><mdb-icon icon="address-book" class="mr-3"/>ผู้ติดต่อ</mdb-list-group-item>
        </router-link>
        <router-link to="/task" @click.native="activeItem = 4">
          <mdb-list-group-item :action="true" :class="activeItem === 4 && 'active'"><mdb-icon icon="calendar-check" class="mr-3"/>ทาร์คงาน</mdb-list-group-item>
        </router-link>
        <router-link to="/profile" @click.native="activeItem = 5">
          <mdb-list-group-item :action="true" :class="activeItem === 5 && 'active'"><mdb-icon icon="user" class="mr-3"/>โปร์ไฟล์</mdb-list-group-item>
        </router-link>
      </mdb-list-group>
    </div>
    <!-- /Sidebar  -->
    <main>
      <div class="mt-5 p-5">
        <router-view/>
      </div>
      <ftr color="primary-color-dark" class="text-center font-small darken-2">
        <hr class="my4"/>
        <div class="pb-4">
          <a href="#"><mdb-icon fab icon="facebook-square" class="mr-3"/></a>
          <a href="#"><mdb-icon fab icon="twitter" class="mr-3"/></a>
          <a href="#"><mdb-icon fab icon="youtube" class="mr-3"/></a>
          <a href="#"><mdb-icon fab icon="google-plus" class="mr-3"/></a>
          <a href="#"><mdb-icon fab icon="dribbble" class="mr-3"/></a>
          <a href="#"><mdb-icon fab icon="pinterest" class="mr-3"/></a>
          <a href="#"><mdb-icon fab icon="github" class="mr-3"/></a>
          <a href="#"><mdb-icon fab icon="codepen" class="mr-3"/></a>
        </div>
        <p class="footer-copyright mb-0 py-3 text-center">
          &copy; {{new Date().getFullYear()}} Copyright:
        </p>
      </ftr>
    </main>
  </div>
</template>

<script>
import { mdbContainer, mdbNavbar, mdbNavbarBrand, mdbNavItem, mdbNavbarNav, mdbNavbarToggler, mdbBtn, mdbIcon, mdbListGroup, mdbListGroupItem, mdbCardBody, mdbFooter, waves } from 'mdbvue'
import Dashboard from './components/Dashboard'
import Profile from './components/Profile'

export default {
  name: 'AdminTemplate',
  components: {
    mdbContainer,
    mdbNavbar,
    mdbNavbarBrand,
    mdbNavItem,
    mdbNavbarNav,
    mdbNavbarToggler,
    mdbBtn,
    mdbListGroup,
    mdbListGroupItem,
    mdbIcon,
    mdbCardBody,
    'ftr': mdbFooter,
    Dashboard,
    Profile
  },
  data () {
    return {
      activeItem: 1
    }
  },
  beforeMount () {
    this.activeItem = this.$route.matched[0].props.default.page
  },
  mixins: [waves]
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
main {
  background-color: #EDEDEE;
}

.flexible-content {
  transition: padding-left 0.3s;
  padding-left: 270px;
}

.flexible-navbar {
  transition: padding-left 0.5s;
  padding-left: 270px;
}

.sidebar-fixed {
  left: 0;
  top: 0;
  height: 100vh;
  width: 270px;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
  z-index: 1050;
  background-color: #293241;
  padding: 1.5rem;
  padding-top: 0;
}
.img-fluid {
  width: 100px;
}

.sidebar-fixed .logo-wrapper img{
  width: 100%;
  padding: 2.5rem;
}

.sidebar-fixed .list-group-item {
  display: block !important;
  transition: background-color 0.3s;
}

.sidebar-fixed .list-group .active {
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
  border-radius: 5px;
}

@media (max-width: 1199.98px) {
  .sidebar-fixed {
    display: none;
  }
  .flexible-content {
    padding-left: 0;
  }
  .flexible-navbar {
    padding-left: 10px;
  }
}
</style>
<style>
.navbar-light .navbar-brand {
  margin-left: 15px;
  color: #2196f3 !important;
  font-weight: bolder;
}
</style>
