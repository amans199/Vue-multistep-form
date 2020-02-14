<template>
  <div class="firststep">
    <div class="container" dir="rtl">
      <form class="text-right">
        <h3 class="sec_address text-center">بيانات المسؤولين</h3>
        <div class="form-row">
          <div class="form-group col-md-6">
            <label for="personName">اسم المسؤول</label>
            <input type="text" class="form-control" id="personName" placeholder="" name="personName" v-model="personName">
          </div>
          <div class="form-group col-md-6">
            <label for="presonRank">منصبه</label>
            <input type="text" class="form-control" id="presonRank" placeholder="" name="presonRank" v-model="presonRank">
          </div>
        </div>
        <div class="form-group col-md-6 form-row m-0 px-1 align-items-end">
          <!-- <div class="form-group col-md-4 p-0 pl-1">
            <label for="chooseCountryCode">رقم الجوال</label>
            <select id="chooseCountryCode" class="form-control" name="chooseCountryCode" v-model="chooseCountryCode">
              <option selected>Choose...</option>
              <option>...</option>
            </select>
          </div>
          <div class="form-group col-md-8 p-0 pr-1">
            <input type="number" class="form-control" id="personMobile" placeholder="" name="personMobile" v-model="personMobile">
          </div> -->

          <div class="form-group form-row m-0 w-100">
            <!-- <div class="form-group col-md-4 p-0 pl-1">
              <label for="secChooseCountryCode">رقم الجوال</label>
              <select id="secChooseCountryCode" class="form-control" name="secChooseCountryCode" v-model="secChooseCountryCode">
                <option selected>Choose...</option>
                <option>...</option>
              </select>
            </div> -->

            <div class="form-group col-md-4 p-0 pl-1">
              <label class="typo__label">كود الدولة</label>
              <multiselect v-model="value" placeholder="Country Code" label="title" track-by="title"
                            :options="options"
                            :option-height="104"
                            :custom-label="customLabel"
                            :show-labels="false"
                            class="bg-white border-1 w-100 pl-1">
                <template slot="singleLabel" slot-scope="props">
                  <div class="row one_option mx-0 px-0 d-flex align-items-center justify-content-around">
                    <div class="col-md-6 d-flex">
                      <country-flag class="option__image" :country='props.option.code' size='normal'/>
                    </div>
                  <!-- <img class="option__image" :src="props.option.img" alt="No Man’s Sky"> -->
                  <div class="col-md-6">

                  <span class="option__desc">
                    <!-- <span class="option__title">{{ props.option.title }}</span> -->
                    <span class="option__title">{{ props.option.desc }}</span>
                  </span>
                </div>
                </div>
                </template>
                <template slot="option" slot-scope="props">
                  <!-- <img class="option__image" :src="props.option.img" alt="No Man’s Sky"> -->
                  <div class="row one_option mx-0 px-0">
                    <div class="col-md-6 d-flex">
                      <country-flag class="option__image" :country='props.option.code' size='normal'/>
                    </div>
                    <div class="col-md-6">
                      <div class="option__desc">
                        <!-- <span class="option__title">{{ props.option.title }}</span> -->
                        <span class="option__title">{{ props.option.desc }}</span>
                      </div>
                    </div>
                  </div>

                </template>
              </multiselect>
              <!-- <pre class="language-json"><code>{{ value  }}</code></pre> -->

            </div>
            <div class="form-group col-md-8 p-0 pr-1 d-flex align-items-end flex-column">
              <label for="secpersonMobile" class="typo__label w-100">رقم الجوال</label>
              <input type="number" class="form-control" id="secpersonMobile" placeholder="" name="secpersonMobile" v-model="secpersonMobile">
            </div>
          </div>


        </div>
        <div class="form-row">
          <div class="form-group col-md-6">
            <label for="secPersonName">إسم المفوض بالتواصل</label>
            <input type="text" class="form-control" id="secPersonName" placeholder="" name="secPersonName" v-model="secPersonName">
          </div>
          <div class="form-group col-md-6">
            <label for="secPersonRank">منصبه</label>
            <input type="text" class="form-control" id="secPersonRank" placeholder="" name="secPersonRank" v-model="secPersonRank">
          </div>
        </div>
        <div class="form-row">


          <div class="form-group col-md-6 form-row m-0 px-1">
            <!-- <div class="form-group col-md-4 p-0 pl-1">
              <label for="secChooseCountryCode">رقم الجوال</label>
              <select id="secChooseCountryCode" class="form-control" name="secChooseCountryCode" v-model="secChooseCountryCode">
                <option selected>Choose...</option>
                <option>...</option>
              </select>
            </div> -->

            <div class="form-group col-md-4 p-0 pl-1">
              <label class="typo__label">كود الدولة</label>
              <multiselect v-model="value" placeholder="Country Code" label="title" track-by="title"
                            :options="options"
                            :option-height="104"
                            :custom-label="customLabel"
                            :show-labels="false"
                            class="bg-white border-1 w-100 px-1">
                <template slot="singleLabel" slot-scope="props">
                  <div class="row one_option mx-0 px-0 d-flex align-items-center justify-content-around">
                    <div class="col-md-6 d-flex">
                      <country-flag class="option__image" :country='props.option.code' size='normal'/>
                    </div>
                  <!-- <img class="option__image" :src="props.option.img" alt="No Man’s Sky"> -->
                  <div class="col-md-6">

                  <span class="option__desc">
                    <!-- <span class="option__title">{{ props.option.title }}</span> -->
                    <span class="option__title">{{ props.option.desc }}</span>
                  </span>
                </div>
                </div>
                </template>
                <template slot="option" slot-scope="props">
                  <!-- <img class="option__image" :src="props.option.img" alt="No Man’s Sky"> -->
                  <div class="row one_option mx-0 px-0">
                    <div class="col-md-6 d-flex">
                      <country-flag class="option__image" :country='props.option.code' size='normal'/>
                    </div>
                    <div class="col-md-6">
                      <div class="option__desc">
                        <!-- <span class="option__title">{{ props.option.title }}</span> -->
                        <span class="option__title">{{ props.option.desc }}</span>
                      </div>
                    </div>
                  </div>

                </template>
              </multiselect>
              <!-- <pre class="language-json"><code>{{ value  }}</code></pre> -->

            </div>
            <div class="form-group col-md-8 p-0 pr-1 d-flex align-items-end flex-column">
              <label for="secpersonMobile" class="typo__label w-100">رقم الجوال</label>
              <input type="number" class="form-control" id="secpersonMobile" placeholder="" name="secpersonMobile" v-model="secpersonMobile">
            </div>
          </div>

          <div class="form-group col-md-6">
            <label for="secpersonEmail">البريد الالكتروني</label>
            <input type="text" class="form-control" id="secpersonEmail" placeholder="" name="secpersonEmail" v-model="secpersonEmail">
          </div>
        </div>
        <div class="form-group">
          <label for="extraNotes">ملاحظات</label>
          <textarea class="form-control" id="extraNotes" rows="3" name="extraNotes" v-model="extraNotes"></textarea>
        </div>
      </form>
      <Navigation></Navigation>
    </div>
  </div>
</template>

<style>
.multiselect {
  width: 166px;
}
.multiselect__content {
  list-style: none;
  padding: 0px;
  max-height: 150px !important;
  z-index: 9999999;
}
.multiselect__content-wrapper {
  max-height: 150px !important;
  overflow-y: scroll;
  width: 166px;
  border: 1px solid #ced4da;
  border-radius: 5px;
  width: 100%;
  z-index: 9999999;
  position: absolute;
  background: #fff;
}

.multiselect__tags {
  border: 1px solid #ced4da;
  border-radius: 5px;
  height: 38px;
  z-index: 9999999;

}

.one_option {
  cursor: pointer;
}

.one_option:hover {
  background: var(--light);
}

.multiselect__input {
  height: 100%;
  border: none;
}
</style>



<script>
import Navigation from "../Navigation.vue";
// import Multiselect from 'vue-multiselect';
import CountryFlag from 'vue-country-flag';

export default {
  components: {Navigation,
    // Multiselect,
    CountryFlag},
  data () {
    return {
      value: {
        "title": "Choose Country",
        "code": "eg",
        "desc": "20"
      },

      options: [
      	{
      		"title": "Afghanistan",
      		"code": "AF",
      		"desc": "93"
      	},
      	{
      		"title": "Åland Islands",
      		"code": "AX",
      		"desc": "358"
      	},
      	{
      		"title": "Albania",
      		"code": "AL",
      		"desc": "355"
      	},
      	{
      		"title": "Algeria",
      		"code": "DZ",
      		"desc": "213"
      	},
      	{
      		"title": "American Samoa",
      		"code": "AS",
      		"desc": "1684"
      	},
      	{
      		"title": "Andorra",
      		"code": "AD",
      		"desc": "376"
      	},
      	{
      		"title": "Angola",
      		"code": "AO",
      		"desc": "244"
      	},
      	{
      		"title": "Anguilla",
      		"code": "AI",
      		"desc": "1264"
      	},
      	{
      		"title": "Antigua and Barbuda",
      		"code": "AG",
      		"desc": "1268"
      	},
      	{
      		"title": "Argentina",
      		"code": "AR",
      		"desc": "54"
      	},
      	{
      		"title": "Armenia",
      		"code": "AM",
      		"desc": "374"
      	},
      	{
      		"title": "Aruba",
      		"code": "AW",
      		"desc": "297"
      	},
      	{
      		"title": "Australia",
      		"code": "AU",
      		"desc": "61"
      	},
      	{
      		"title": "Austria",
      		"code": "AT",
      		"desc": "43"
      	},
      	{
      		"title": "Azerbaijan",
      		"code": "AZ",
      		"desc": "994"
      	},
      	{
      		"title": "Bahamas",
      		"code": "BS",
      		"desc": "1242"
      	},
      	{
      		"title": "Bahrain",
      		"code": "BH",
      		"desc": "973"
      	},
      	{
      		"title": "Bangladesh",
      		"code": "BD",
      		"desc": "880"
      	},
      	{
      		"title": "Barbados",
      		"code": "BB",
      		"desc": "1246"
      	},
      	{
      		"title": "Belarus",
      		"code": "BY",
      		"desc": "375"
      	},
      	{
      		"title": "Belgium",
      		"code": "BE",
      		"desc": "32"
      	},
      	{
      		"title": "Belize",
      		"code": "BZ",
      		"desc": "501"
      	},
      	{
      		"title": "Benin",
      		"code": "BJ",
      		"desc": "229"
      	},
      	{
      		"title": "Bermuda",
      		"code": "BM",
      		"desc": "1441"
      	},
      	{
      		"title": "Bhutan",
      		"code": "BT",
      		"desc": "975"
      	},
      	{
      		"title": "Bolivia",
      		"code": "BO",
      		"desc": "591"
      	},
      	{
      		"title": "Bosnia and Herzegovina",
      		"code": "BA",
      		"desc": "387"
      	},
      	{
      		"title": "Botswana",
      		"code": "BW",
      		"desc": "267"
      	},
      	{
      		"title": "Brazil",
      		"code": "BR",
      		"desc": "55"
      	},
      	{
      		"title": "British Indian Ocean Territory",
      		"code": "IO",
      		"desc": "246"
      	},
      	{
      		"title": "British Virgin Islands",
      		"code": "VG",
      		"desc": "1284"
      	},
      	{
      		"title": "Brunei",
      		"code": "BN",
      		"desc": "673"
      	},
      	{
      		"title": "Bulgaria",
      		"code": "BG",
      		"desc": "359"
      	},
      	{
      		"title": "Burkina Faso",
      		"code": "BF",
      		"desc": "226"
      	},
      	{
      		"title": "Burundi",
      		"code": "BI",
      		"desc": "257"
      	},
      	{
      		"title": "Cambodia",
      		"code": "KH",
      		"desc": "855"
      	},
      	{
      		"title": "Cameroon",
      		"code": "CM",
      		"desc": "237"
      	},
      	{
      		"title": "Canada",
      		"code": "CA",
      		"desc": "1"
      	},
      	{
      		"title": "Cape Verde",
      		"code": "CV",
      		"desc": "238"
      	},
      	{
      		"title": "Cayman Islands",
      		"code": "KY",
      		"desc": "1345"
      	},
      	{
      		"title": "Central African Republic",
      		"code": "CF",
      		"desc": "236"
      	},
      	{
      		"title": "Chad",
      		"code": "TD",
      		"desc": "235"
      	},
      	{
      		"title": "Chile",
      		"code": "CL",
      		"desc": "56"
      	},
      	{
      		"title": "China",
      		"code": "CN",
      		"desc": "86"
      	},
      	{
      		"title": "Christmas Island",
      		"code": "CX",
      		"desc": "61"
      	},
      	{
      		"title": "Cocos (Keeling) Islands",
      		"code": "CC",
      		"desc": "61"
      	},
      	{
      		"title": "Colombia",
      		"code": "CO",
      		"desc": "57"
      	},
      	{
      		"title": "Comoros",
      		"code": "KM",
      		"desc": "269"
      	},
      	{
      		"title": "Cook Islands",
      		"code": "CK",
      		"desc": "682"
      	},
      	{
      		"title": "Costa Rica",
      		"code": "CR",
      		"desc": "506"
      	},
      	{
      		"title": "Croatia",
      		"code": "HR",
      		"desc": "385"
      	},
      	{
      		"title": "Cuba",
      		"code": "CU",
      		"desc": "53"
      	},
      	{
      		"title": "Curaçao",
      		"code": "CW",
      		"desc": "5999"
      	},
      	{
      		"title": "Cyprus",
      		"code": "CY",
      		"desc": "357"
      	},
      	{
      		"title": "Czechia",
      		"code": "CZ",
      		"desc": "420"
      	},
      	{
      		"title": "DR Congo",
      		"code": "CD",
      		"desc": "243"
      	},
      	{
      		"title": "Denmark",
      		"code": "DK",
      		"desc": "45"
      	},
      	{
      		"title": "Djibouti",
      		"code": "DJ",
      		"desc": "253"
      	},
      	{
      		"title": "Dominica",
      		"code": "DM",
      		"desc": "1767"
      	},
      	{
      		"title": "Dominican Republic",
      		"code": "DO",
      		"desc": "1809"
      	},
      	{
      		"title": "Dominican Republic",
      		"code": "DO",
      		"desc": "1829"
      	},
      	{
      		"title": "Dominican Republic",
      		"code": "DO",
      		"desc": "1849"
      	},
      	{
      		"title": "Ecuador",
      		"code": "EC",
      		"desc": "593"
      	},
      	{
      		"title": "Egypt",
      		"code": "EG",
      		"desc": "20"
      	},
      	{
      		"title": "El Salvador",
      		"code": "SV",
      		"desc": "503"
      	},
      	{
      		"title": "Equatorial Guinea",
      		"code": "GQ",
      		"desc": "240"
      	},
      	{
      		"title": "Eritrea",
      		"code": "ER",
      		"desc": "291"
      	},
      	{
      		"title": "Estonia",
      		"code": "EE",
      		"desc": "372"
      	},
      	{
      		"title": "Ethiopia",
      		"code": "ET",
      		"desc": "251"
      	},
      	{
      		"title": "Falkland Islands",
      		"code": "FK",
      		"desc": "500"
      	},
      	{
      		"title": "Faroe Islands",
      		"code": "FO",
      		"desc": "298"
      	},
      	{
      		"title": "Fiji",
      		"code": "FJ",
      		"desc": "679"
      	},
      	{
      		"title": "Finland",
      		"code": "FI",
      		"desc": "358"
      	},
      	{
      		"title": "France",
      		"code": "FR",
      		"desc": "33"
      	},
      	{
      		"title": "French Guiana",
      		"code": "GF",
      		"desc": "594"
      	},
      	{
      		"title": "French Polynesia",
      		"code": "PF",
      		"desc": "689"
      	},
      	{
      		"title": "Gabon",
      		"code": "GA",
      		"desc": "241"
      	},
      	{
      		"title": "Gambia",
      		"code": "GM",
      		"desc": "220"
      	},
      	{
      		"title": "Georgia",
      		"code": "GE",
      		"desc": "995"
      	},
      	{
      		"title": "Germany",
      		"code": "DE",
      		"desc": "49"
      	},
      	{
      		"title": "Ghana",
      		"code": "GH",
      		"desc": "233"
      	},
      	{
      		"title": "Gibraltar",
      		"code": "GI",
      		"desc": "350"
      	},
      	{
      		"title": "Greece",
      		"code": "GR",
      		"desc": "30"
      	},
      	{
      		"title": "Greenland",
      		"code": "GL",
      		"desc": "299"
      	},
      	{
      		"title": "Grenada",
      		"code": "GD",
      		"desc": "1473"
      	},
      	{
      		"title": "Guadeloupe",
      		"code": "GP",
      		"desc": "590"
      	},
      	{
      		"title": "Guam",
      		"code": "GU",
      		"desc": "1671"
      	},
      	{
      		"title": "Guatemala",
      		"code": "GT",
      		"desc": "502"
      	},
      	{
      		"title": "Guernsey",
      		"code": "GG",
      		"desc": "44"
      	},
      	{
      		"title": "Guinea",
      		"code": "GN",
      		"desc": "224"
      	},
      	{
      		"title": "Guinea-Bissau",
      		"code": "GW",
      		"desc": "245"
      	},
      	{
      		"title": "Guyana",
      		"code": "GY",
      		"desc": "592"
      	},
      	{
      		"title": "Haiti",
      		"code": "HT",
      		"desc": "509"
      	},
      	{
      		"title": "Honduras",
      		"code": "HN",
      		"desc": "504"
      	},
      	{
      		"title": "Hong Kong",
      		"code": "HK",
      		"desc": "852"
      	},
      	{
      		"title": "Hungary",
      		"code": "HU",
      		"desc": "36"
      	},
      	{
      		"title": "Iceland",
      		"code": "IS",
      		"desc": "354"
      	},
      	{
      		"title": "India",
      		"code": "IN",
      		"desc": "91"
      	},
      	{
      		"title": "Indonesia",
      		"code": "ID",
      		"desc": "62"
      	},
      	{
      		"title": "Iran",
      		"code": "IR",
      		"desc": "98"
      	},
      	{
      		"title": "Iraq",
      		"code": "IQ",
      		"desc": "964"
      	},
      	{
      		"title": "Ireland",
      		"code": "IE",
      		"desc": "353"
      	},
      	{
      		"title": "Isle of Man",
      		"code": "IM",
      		"desc": "44"
      	},
      	{
      		"title": "Israel",
      		"code": "IL",
      		"desc": "972"
      	},
      	{
      		"title": "Italy",
      		"code": "IT",
      		"desc": "39"
      	},
      	{
      		"title": "Ivory Coast",
      		"code": "CI",
      		"desc": "225"
      	},
      	{
      		"title": "Jamaica",
      		"code": "JM",
      		"desc": "1876"
      	},
      	{
      		"title": "Japan",
      		"code": "JP",
      		"desc": "81"
      	},
      	{
      		"title": "Jersey",
      		"code": "JE",
      		"desc": "44"
      	},
      	{
      		"title": "Jordan",
      		"code": "JO",
      		"desc": "962"
      	},
      	{
      		"title": "Kazakhstan",
      		"code": "KZ",
      		"desc": "77"
      	},
      	{
      		"title": "Kazakhstan",
      		"code": "KZ",
      		"desc": "76"
      	},
      	{
      		"title": "Kenya",
      		"code": "KE",
      		"desc": "254"
      	},
      	{
      		"title": "Kiribati",
      		"code": "KI",
      		"desc": "686"
      	},
      	{
      		"title": "Kosovo",
      		"code": "XK",
      		"desc": "383"
      	},
      	{
      		"title": "Kuwait",
      		"code": "KW",
      		"desc": "965"
      	},
      	{
      		"title": "Kyrgyzstan",
      		"code": "KG",
      		"desc": "996"
      	},
      	{
      		"title": "Laos",
      		"code": "LA",
      		"desc": "856"
      	},
      	{
      		"title": "Latvia",
      		"code": "LV",
      		"desc": "371"
      	},
      	{
      		"title": "Lebanon",
      		"code": "LB",
      		"desc": "961"
      	},
      	{
      		"title": "Lesotho",
      		"code": "LS",
      		"desc": "266"
      	},
      	{
      		"title": "Liberia",
      		"code": "LR",
      		"desc": "231"
      	},
      	{
      		"title": "Libya",
      		"code": "LY",
      		"desc": "218"
      	},
      	{
      		"title": "Liechtenstein",
      		"code": "LI",
      		"desc": "423"
      	},
      	{
      		"title": "Lithuania",
      		"code": "LT",
      		"desc": "370"
      	},
      	{
      		"title": "Luxembourg",
      		"code": "LU",
      		"desc": "352"
      	},
      	{
      		"title": "Macau",
      		"code": "MO",
      		"desc": "853"
      	},
      	{
      		"title": "Macedonia",
      		"code": "MK",
      		"desc": "389"
      	},
      	{
      		"title": "Madagascar",
      		"code": "MG",
      		"desc": "261"
      	},
      	{
      		"title": "Malawi",
      		"code": "MW",
      		"desc": "265"
      	},
      	{
      		"title": "Malaysia",
      		"code": "MY",
      		"desc": "60"
      	},
      	{
      		"title": "Maldives",
      		"code": "MV",
      		"desc": "960"
      	},
      	{
      		"title": "Mali",
      		"code": "ML",
      		"desc": "223"
      	},
      	{
      		"title": "Malta",
      		"code": "MT",
      		"desc": "356"
      	},
      	{
      		"title": "Marshall Islands",
      		"code": "MH",
      		"desc": "692"
      	},
      	{
      		"title": "Martinique",
      		"code": "MQ",
      		"desc": "596"
      	},
      	{
      		"title": "Mauritania",
      		"code": "MR",
      		"desc": "222"
      	},
      	{
      		"title": "Mauritius",
      		"code": "MU",
      		"desc": "230"
      	},
      	{
      		"title": "Mayotte",
      		"code": "YT",
      		"desc": "262"
      	},
      	{
      		"title": "Mexico",
      		"code": "MX",
      		"desc": "52"
      	},
      	{
      		"title": "Micronesia",
      		"code": "FM",
      		"desc": "691"
      	},
      	{
      		"title": "Moldova",
      		"code": "MD",
      		"desc": "373"
      	},
      	{
      		"title": "Monaco",
      		"code": "MC",
      		"desc": "377"
      	},
      	{
      		"title": "Mongolia",
      		"code": "MN",
      		"desc": "976"
      	},
      	{
      		"title": "Montenegro",
      		"code": "ME",
      		"desc": "382"
      	},
      	{
      		"title": "Montserrat",
      		"code": "MS",
      		"desc": "1664"
      	},
      	{
      		"title": "Morocco",
      		"code": "MA",
      		"desc": "212"
      	},
      	{
      		"title": "Mozambique",
      		"code": "MZ",
      		"desc": "258"
      	},
      	{
      		"title": "Myanmar",
      		"code": "MM",
      		"desc": "95"
      	},
      	{
      		"title": "Namibia",
      		"code": "NA",
      		"desc": "264"
      	},
      	{
      		"title": "Nauru",
      		"code": "NR",
      		"desc": "674"
      	},
      	{
      		"title": "Nepal",
      		"code": "NP",
      		"desc": "977"
      	},
      	{
      		"title": "Netherlands",
      		"code": "NL",
      		"desc": "31"
      	},
      	{
      		"title": "New Caledonia",
      		"code": "NC",
      		"desc": "687"
      	},
      	{
      		"title": "New Zealand",
      		"code": "NZ",
      		"desc": "64"
      	},
      	{
      		"title": "Nicaragua",
      		"code": "NI",
      		"desc": "505"
      	},
      	{
      		"title": "Niger",
      		"code": "NE",
      		"desc": "227"
      	},
      	{
      		"title": "Nigeria",
      		"code": "NG",
      		"desc": "234"
      	},
      	{
      		"title": "Niue",
      		"code": "NU",
      		"desc": "683"
      	},
      	{
      		"title": "Norfolk Island",
      		"code": "NF",
      		"desc": "672"
      	},
      	{
      		"title": "North Korea",
      		"code": "KP",
      		"desc": "850"
      	},
      	{
      		"title": "Northern Mariana Islands",
      		"code": "MP",
      		"desc": "1670"
      	},
      	{
      		"title": "Norway",
      		"code": "NO",
      		"desc": "47"
      	},
      	{
      		"title": "Oman",
      		"code": "OM",
      		"desc": "968"
      	},
      	{
      		"title": "Pakistan",
      		"code": "PK",
      		"desc": "92"
      	},
      	{
      		"title": "Palau",
      		"code": "PW",
      		"desc": "680"
      	},
      	{
      		"title": "Palestine",
      		"code": "PS",
      		"desc": "970"
      	},
      	{
      		"title": "Panama",
      		"code": "PA",
      		"desc": "507"
      	},
      	{
      		"title": "Papua New Guinea",
      		"code": "PG",
      		"desc": "675"
      	},
      	{
      		"title": "Paraguay",
      		"code": "PY",
      		"desc": "595"
      	},
      	{
      		"title": "Peru",
      		"code": "PE",
      		"desc": "51"
      	},
      	{
      		"title": "Philippines",
      		"code": "PH",
      		"desc": "63"
      	},
      	{
      		"title": "Pitcairn Islands",
      		"code": "PN",
      		"desc": "64"
      	},
      	{
      		"title": "Poland",
      		"code": "PL",
      		"desc": "48"
      	},
      	{
      		"title": "Portugal",
      		"code": "PT",
      		"desc": "351"
      	},
      	{
      		"title": "Puerto Rico",
      		"code": "PR",
      		"desc": "1787"
      	},
      	{
      		"title": "Puerto Rico",
      		"code": "PR",
      		"desc": "1939"
      	},
      	{
      		"title": "Qatar",
      		"code": "QA",
      		"desc": "974"
      	},
      	{
      		"title": "Republic of the Congo",
      		"code": "CG",
      		"desc": "242"
      	},
      	{
      		"title": "Romania",
      		"code": "RO",
      		"desc": "40"
      	},
      	{
      		"title": "Russia",
      		"code": "RU",
      		"desc": "7"
      	},
      	{
      		"title": "Rwanda",
      		"code": "RW",
      		"desc": "250"
      	},
      	{
      		"title": "Réunion",
      		"code": "RE",
      		"desc": "262"
      	},
      	{
      		"title": "Saint Barthélemy",
      		"code": "BL",
      		"desc": "590"
      	},
      	{
      		"title": "Saint Kitts and Nevis",
      		"code": "KN",
      		"desc": "1869"
      	},
      	{
      		"title": "Saint Lucia",
      		"code": "LC",
      		"desc": "1758"
      	},
      	{
      		"title": "Saint Martin",
      		"code": "MF",
      		"desc": "590"
      	},
      	{
      		"title": "Saint Pierre and Miquelon",
      		"code": "PM",
      		"desc": "508"
      	},
      	{
      		"title": "Saint Vincent and the Grenadines",
      		"code": "VC",
      		"desc": "1784"
      	},
      	{
      		"title": "Samoa",
      		"code": "WS",
      		"desc": "685"
      	},
      	{
      		"title": "San Marino",
      		"code": "SM",
      		"desc": "378"
      	},
      	{
      		"title": "Saudi Arabia",
      		"code": "SA",
      		"desc": "966"
      	},
      	{
      		"title": "Senegal",
      		"code": "SN",
      		"desc": "221"
      	},
      	{
      		"title": "Serbia",
      		"code": "RS",
      		"desc": "381"
      	},
      	{
      		"title": "Seychelles",
      		"code": "SC",
      		"desc": "248"
      	},
      	{
      		"title": "Sierra Leone",
      		"code": "SL",
      		"desc": "232"
      	},
      	{
      		"title": "Singapore",
      		"code": "SG",
      		"desc": "65"
      	},
      	{
      		"title": "Sint Maarten",
      		"code": "SX",
      		"desc": "1721"
      	},
      	{
      		"title": "Slovakia",
      		"code": "SK",
      		"desc": "421"
      	},
      	{
      		"title": "Slovenia",
      		"code": "SI",
      		"desc": "386"
      	},
      	{
      		"title": "Solomon Islands",
      		"code": "SB",
      		"desc": "677"
      	},
      	{
      		"title": "Somalia",
      		"code": "SO",
      		"desc": "252"
      	},
      	{
      		"title": "South Africa",
      		"code": "ZA",
      		"desc": "27"
      	},
      	{
      		"title": "South Georgia",
      		"code": "GS",
      		"desc": "500"
      	},
      	{
      		"title": "South Korea",
      		"code": "KR",
      		"desc": "82"
      	},
      	{
      		"title": "South Sudan",
      		"code": "SS",
      		"desc": "211"
      	},
      	{
      		"title": "Spain",
      		"code": "ES",
      		"desc": "34"
      	},
      	{
      		"title": "Sri Lanka",
      		"code": "LK",
      		"desc": "94"
      	},
      	{
      		"title": "Sudan",
      		"code": "SD",
      		"desc": "249"
      	},
      	{
      		"title": "Suriname",
      		"code": "SR",
      		"desc": "597"
      	},
      	{
      		"title": "Svalbard and Jan Mayen",
      		"code": "SJ",
      		"desc": "4779"
      	},
      	{
      		"title": "Swaziland",
      		"code": "SZ",
      		"desc": "268"
      	},
      	{
      		"title": "Sweden",
      		"code": "SE",
      		"desc": "46"
      	},
      	{
      		"title": "Switzerland",
      		"code": "CH",
      		"desc": "41"
      	},
      	{
      		"title": "Syria",
      		"code": "SY",
      		"desc": "963"
      	},
      	{
      		"title": "São Tomé and Príncipe",
      		"code": "ST",
      		"desc": "239"
      	},
      	{
      		"title": "Taiwan",
      		"code": "TW",
      		"desc": "886"
      	},
      	{
      		"title": "Tajikistan",
      		"code": "TJ",
      		"desc": "992"
      	},
      	{
      		"title": "Tanzania",
      		"code": "TZ",
      		"desc": "255"
      	},
      	{
      		"title": "Thailand",
      		"code": "TH",
      		"desc": "66"
      	},
      	{
      		"title": "Timor-Leste",
      		"code": "TL",
      		"desc": "670"
      	},
      	{
      		"title": "Togo",
      		"code": "TG",
      		"desc": "228"
      	},
      	{
      		"title": "Tokelau",
      		"code": "TK",
      		"desc": "690"
      	},
      	{
      		"title": "Tonga",
      		"code": "TO",
      		"desc": "676"
      	},
      	{
      		"title": "Trinidad and Tobago",
      		"code": "TT",
      		"desc": "1868"
      	},
      	{
      		"title": "Tunisia",
      		"code": "TN",
      		"desc": "216"
      	},
      	{
      		"title": "Turkey",
      		"code": "TR",
      		"desc": "90"
      	},
      	{
      		"title": "Turkmenistan",
      		"code": "TM",
      		"desc": "993"
      	},
      	{
      		"title": "Turks and Caicos Islands",
      		"code": "TC",
      		"desc": "1649"
      	},
      	{
      		"title": "Tuvalu",
      		"code": "TV",
      		"desc": "688"
      	},
      	{
      		"title": "Uganda",
      		"code": "UG",
      		"desc": "256"
      	},
      	{
      		"title": "Ukraine",
      		"code": "UA",
      		"desc": "380"
      	},
      	{
      		"title": "United Arab Emirates",
      		"code": "AE",
      		"desc": "971"
      	},
      	{
      		"title": "United Kingdom",
      		"code": "GB",
      		"desc": "44"
      	},
      	{
      		"title": "United States",
      		"code": "US",
      		"desc": "1"
      	},
      	{
      		"title": "United States Virgin Islands",
      		"code": "VI",
      		"desc": "1340"
      	},
      	{
      		"title": "Uruguay",
      		"code": "UY",
      		"desc": "598"
      	},
      	{
      		"title": "Uzbekistan",
      		"code": "UZ",
      		"desc": "998"
      	},
      	{
      		"title": "Vanuatu",
      		"code": "VU",
      		"desc": "678"
      	},
      	{
      		"title": "Vatican City",
      		"code": "VA",
      		"desc": "379"
      	},
      	{
      		"title": "Venezuela",
      		"code": "VE",
      		"desc": "58"
      	},
      	{
      		"title": "Vietnam",
      		"code": "VN",
      		"desc": "84"
      	},
      	{
      		"title": "Wallis and Futuna",
      		"code": "WF",
      		"desc": "681"
      	},
      	{
      		"title": "Western Sahara",
      		"code": "EH",
      		"desc": "212"
      	},
      	{
      		"title": "Yemen",
      		"code": "YE",
      		"desc": "967"
      	},
      	{
      		"title": "Zambia",
      		"code": "ZM",
      		"desc": "260"
      	},
      	{
      		"title": "Zimbabwe",
      		"code": "ZW",
      		"desc": "263"
      	}
      ]
    }
  },
  methods: {
    customLabel ({ title, desc }) {
      return `${title} – ${desc}`
    }
  },
  computed:{
    personName:{
      get(){
        return this.$store.state.personName
      },
      set(value){
        this.$store.commit('setpersonName',{personName:value})
      }
    },
    presonRank:{
      get(){
        return this.$store.state.presonRank
      },
      set(value){
        this.$store.commit('setpresonRank',{presonRank:value})
      }
    },
    chooseCountryCode:{
      get(){
        return this.$store.state.chooseCountryCode
      },
      set(value){
        this.$store.commit('setchooseCountryCode',{chooseCountryCode:value})
      }
    },
    personMobile:{
      get(){
        return this.$store.state.personMobile
      },
      set(value){
        this.$store.commit('setpersonMobile',{personMobile:value})
      }
    },
    secPersonName:{
      get(){
        return this.$store.state.secPersonName
      },
      set(value){
        this.$store.commit('setsecPersonName',{secPersonName:value})
      }
    },
    secPersonRank:{
      get(){
        return this.$store.state.secPersonRank
      },
      set(value){
        this.$store.commit('setsecPersonRank',{secPersonRank:value})
      }
    },
    secChooseCountryCode:{
      get(){
        return this.$store.state.secChooseCountryCode
      },
      set(value){
        this.$store.commit('setsecChooseCountryCode',{secChooseCountryCode:value})
      }
    },
    secpersonMobile:{
      get(){
        return this.$store.state.secpersonMobile
      },
      set(value){
        this.$store.commit('setsecpersonMobile',{secpersonMobile:value})
      }
    },
    secpersonEmail:{
      get(){
        return this.$store.state.secpersonEmail
      },
      set(value){
        this.$store.commit('setsecpersonEmail',{secpersonEmail:value})
      }
    },
    extraNotes:{
      get(){
        return this.$store.state.extraNotes
      },
      set(value){
        this.$store.commit('setextraNotes',{extraNotes:value})
      }
    }
  }
}

//
// export default {
//   name: "reqproform",
// };
</script>
