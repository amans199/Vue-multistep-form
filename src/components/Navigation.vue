<template>
  <div>

    <button @click="navigateNext" class="w-50 border-0 p-3 text-white btn btn-primary">
      {{ nextButtonText() }}
    </button><br>
    <button @click="navigatePrevious" v-show="!isFirst()" class="border-0 p-1 bg-transparent"><a href="#">
      الرجوع </a>
    </button>
  </div>
</template>

<script>
function submit(){
  alert('Submittttedd!');
};
export default {
  methods: {
    nextButtonText(){
      if ( this.$route.name === 'secondStep' ){ return 'طلب المنتج' }
       return 'التالي';
    },
    isFirst() {
      return this.$route.name === 'firstStep';
    },

    navigateNext() {
      if ( this.$route.name === 'secondStep' ){ submit() }
      this.$router.push('/personal-info');
    },
    navigatePrevious() {
      if (this.$route.name === 'secondStep'){
        this.$router.push('/organization-info');
      }
    }
  }
}
</script>

<style lang="css" scoped>
</style>
