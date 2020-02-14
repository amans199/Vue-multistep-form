import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',

  state: {
    orgName: '',
    orgActivity: '',
    orgPlace: '',
    orgCity: '',
    choosePack:'',
    personName:'',
    presonRank:'',
    chooseCountryCode:'',
    personMobile:'',
    secPersonName:'',
    secPersonRank:'',
    secChooseCountryCode:'',
    secpersonMobile:'',
    secpersonEmail:'',
    extraNotes:''

  },
  mutations: {
    setorgName(state,orginfo){
      state.orgName = orginfo.orgName;
    },
    setorgActivity(state,orginfo) {
      state.orgActivity = orginfo.orgActivity;
    },
    setorgPlace(state,orginfo) {
      state.orgPlace = orginfo.orgPlace;
    },
    setorgCity(state,orginfo) {
      state.orgCity = orginfo.orgCity;
    },
    setchoosePack(state,orginfo) {
      state.choosePack = orginfo.choosePack;
    },
    setpersonName(state,orginfo) {
      state.personName = orginfo.personName;
    },
    setpresonRank(state,orginfo) {
      state.presonRank = orginfo.presonRank;
    },
    setchooseCountryCode(state,orginfo) {
      state.chooseCountryCode = orginfo.chooseCountryCode;
    },
    setpersonMobile(state,orginfo) {
      state.personMobile = orginfo.personMobile;
    },
    setsecPersonName(state,orginfo) {
      state.secPersonName = orginfo.secPersonName;
    },
    setsecPersonRank(state,orginfo) {
      state.secPersonRank = orginfo.secPersonRank;
    },
    setsecChooseCountryCode(state,orginfo) {
      state.secChooseCountryCode = orginfo.secChooseCountryCode;
    },
    setsecpersonMobile(state,orginfo) {
      state.secpersonMobile = orginfo.secpersonMobile;
    },
    setsecpersonEmail(state,orginfo) {
      state.secpersonEmail = orginfo.secpersonEmail;
    },
    setextraNotes(state,orginfo) {
      state.extraNotes = orginfo.extraNotes;
    }

  },
  actions: {},
  modules: {}
});
