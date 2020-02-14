<template>
<div id="app">
  <div id="nav">
    <nav class="navbar navbar-expand-lg navbar-light bg-light mb-3 py-4"><div class="container">
      <a class="navbar-brand" href="#">Navbar</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent" dir="rtl">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item active py-2">
            <router-link to="/" exact class="ml-4">الصفحة الرئيسية</router-link>
          </li>
          <li class="nav-item py-2">
            <router-link to="/req-product" class="ml-4">منتجاتنا</router-link>
          </li>
          <li class="nav-item py-2">
            <router-link to="/fan-m" class="ml-4">مقياس الاستدامة المالية</router-link>
          </li>
          <li class="nav-item py-2">
            <router-link to="/m-info" class="ml-4">حول المقياس</router-link>
          </li>
          <li class="nav-item py-2">
            <router-link to="/about" class="ml-4">من نحن</router-link>
          </li>
          <li class="nav-item py-2">
            <router-link to="/contact-us" class="ml-4">تواصل معنا</router-link>
          </li>
          <li class="nav-item py-2">
            <router-link to="/freq-questions" class="ml-4">الاسئلة الشائعة</router-link>
          </li>
        </ul>
        <li>search</li>
        <!-- <form class="form-inline my-2 my-lg-0">
          <input class="form-control mr-sm-2 d-none" type="search" placeholder="Search" aria-label="Search">
          <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form> -->
      </div></div>
    </nav>
  </div>
  <router-view />
</div>
</template>

<style lang="scss">
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}

#nav {
    a {
        color: #2c3e50;

        &.router-link-exact-active {
            color: #42b983;
        }
    }
}
</style>
