<template>
  <div class="firststep">
    <div class="container" dir="rtl">
      <h2 class="my-5 first_address">نموذج طلب المنتج "هندسة الموسم"</h2>
      <form>
        <h3 class="sec_address">بيانات المنظمة</h3>
        <div class="form-row">
          <div class="form-group col-md-6">
            <label for="orgName">الإسم</label>
            <input type="text" class="form-control" id="orgName" placeholder="" name="orgName" v-model="orgName">
          </div>
          <div class="form-group col-md-6">
            <label for="orgActivity">نشاط المنظمة</label>
            <input type="text" class="form-control" id="orgActivity" placeholder="" name="orgActivity" v-model="orgActivity">
          </div>
        </div>
        <div class="form-row">
          <div class="form-group col-md-6">
            <label for="orgPlace">المنطقة</label>
            <input type="text" class="form-control" id="orgPlace" placeholder="" name="orgPlace" v-model="orgPlace">
          </div>
          <div class="form-group col-md-6">
            <label for="orgCity">المركز / المحافظة</label>
            <input type="text" class="form-control" id="orgCity" placeholder="" name="orgCity" v-model="orgCity">
          </div>
        </div>
        <h3 class="sec_address">الباقة المطلوبة</h3>
        <div class="form-group col-md-6">
          <label for="choosePack">اختر الباقة</label>
          <select id="choosePack" class="form-control" name="choosePack" v-model="choosePack">
            <option selected>Choose...</option>
            <option>...</option>
          </select>
        </div>
      </form>
    </div>

    <!-- <label for="firstName">First Name</label>
    <input type="text" id="firstname" name="firstName" v-model="firstName">

    <label for="email">Email</label>
    <input type="email" id="email" name="email" v-model="email"> -->
    <Navigation></Navigation>
  </div>
</template>

<script>
import Navigation from "../Navigation.vue";

export default {
  components: {Navigation},

  computed:{
    orgName:{
      get(){
        return this.$store.state.orgName
      },
      set(value){
        this.$store.commit('setorgName',{orgName:value})
      }
    },
    orgActivity:{
      get(){
        return this.$store.state.orgActivity
      },
      set(value){
        this.$store.commit('setorgActivity',{orgActivity:value})
      }
    },
    orgPlace:{
      get(){
        return this.$store.state.orgPlace
      },
      set(value){
        this.$store.commit('setorgPlace',{orgPlace:value})
      }
    },
    orgCity:{
      get(){
        return this.$store.state.orgCity
      },
      set(value){
        this.$store.commit('setorgCity',{orgCity:value})
      }
    },
    choosePack:{
      get(){
        return this.$store.state.choosePack
      },
      set(value){
        this.$store.commit('setchoosePack',{choosePack:value})
      }
    }
  }
}
</script>
