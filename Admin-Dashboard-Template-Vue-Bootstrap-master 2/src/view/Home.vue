<template>
  <div>
    <div class="input-group md-form form-sm form-1 pl-0">
      <div class="input-group-prepend">
        <span class="input-group-text cyan lighten-2" id="basic-text1">
          <mdbIcon icon="search"/>
        </span>
      </div>
      <input class="form-control my-0 py-1" type="text" placeholder="ข่าวสารวันนี้" aria-label="Search">
    </div>
    <mdb-row>
      <mdb-col><mdb-btn active size="lg" color=" blue-gradient">
        <mdb-icon icon="user" class="mr-3"/>ยินดีต้อนรับ</mdb-btn>
      </mdb-col>
      <mdb-col><mdb-btn active size="lg" color=" purple-gradient">
        <mdb-icon icon="calendar-alt" class="mr-3"/>กิจกรรมล่าสุด</mdb-btn>
      </mdb-col>
      <mdb-col><mdb-btn active size="lg" color=" peach-gradient">
        <mdb-icon icon="calendar-check" class="mr-3"/>งานล่าสุด</mdb-btn>
      </mdb-col>
      <mdb-col><mdb-btn active size="lg" color=" aqua-gradient">
        <mdb-icon icon="calendar-check" class="mr-3"/>ผู้ติดต่อล่าสุด</mdb-btn>
      </mdb-col>
    </mdb-row>
    <mdb-col>
      <h2>กิจกรรมที่ต้องเข้าร่วม</h2>
    </mdb-col>
    <mdb-btn tag="a" floating action class="ml-auto mr-5 mdb-color lighten-4">
      <mdb-icon icon="chevron-left" class="pl-2" />
    </mdb-btn>
    <mdb-btn tag="a" floating action class="ml-auto mr-9 mdb-color lighten-4">
      <mdb-icon icon="chevron-right" class="pl-2" />
    </mdb-btn>
    <mdb-masonry :numCols="3" :maxHeight="1000">
      <mdb-masonry-item :order="1" :itemStyle="{'height': '250px'}">ผู้เข้าร่วม</mdb-masonry-item>
      <mdb-masonry-item :order="2" :itemStyle="{'height': '250px'}">ผู้เข้าร่วม</mdb-masonry-item>
      <mdb-masonry-item :order="0" :itemStyle="{'height': '250px'}">ผู้เข้าร่วม</mdb-masonry-item>
    </mdb-masonry>
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
  mdbRating
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
    mdbRating
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
