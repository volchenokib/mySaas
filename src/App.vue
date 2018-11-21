<template>
  <div id="app">
    <b-navbar class="navbar-top navbar-fixed-top" toggleable="md" type="light" role="navigation">
      <b-container>
        
        <!-- Logo -->
        <b-navbar-brand to="/" tag="span" style="cursor:pointer">my SaaS</b-navbar-brand>

        <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

        <b-collapse is-nav id="nav_collapse">

          <!-- Center aligned nav item -->
          <b-navbar-nav class="ml-md-auto">
            <b-nav-item to="agencies" title="Agencies" >Agencies</b-nav-item>

            <b-nav-item to="in-house">In-House</b-nav-item>

            <b-nav-item-dropdown text="Features">
              <b-dropdown-item to="#">All Features</b-dropdown-item>
              <b-dropdown-item to="#">Communicate</b-dropdown-item>
              <b-dropdown-item to="#">File Management</b-dropdown-item>
              <b-dropdown-item to="#">Automation</b-dropdown-item>
            </b-nav-item-dropdown>

            <b-nav-item to="join">Join</b-nav-item>

            <b-nav-item to="blog">Blog</b-nav-item>

            <b-nav-item-dropdown text="More">
              <b-dropdown-item to="#">Contact</b-dropdown-item>
              <b-dropdown-item to="#">About Us</b-dropdown-item>
              <b-dropdown-item to="#">Careers</b-dropdown-item>
            </b-nav-item-dropdown>
          </b-navbar-nav>

          <!-- Right aligned nav item -->
          <b-nav class="ml-auto button-green" pills>
            <b-nav-item class="login" to="login" active>Log in</b-nav-item>
          </b-nav>

        </b-collapse>
      </b-container>
    </b-navbar>
    <router-view/>
  </div>
</template>

<style lang="scss">
@import './assets/scss/common.scss';
@import './assets/scss/variables.scss';

// ----------------------------------- Navigations start

.navbar-light .navbar-nav .nav-link {
  font-size: 14px;

  &:hover, &:focus{
    color: $hover !important;
  }
}

.login {
 
  // padding-left: 11px;
  // padding-right: 11px;
  // height: 32px;
  line-height: 0;
  // margin-top: 20px;
  // color: #fff;
  // display: inline-block;
  a {
    background-color: $accent !important;
    font-size: 14px;
    font-weight: 600;
    padding: 1rem 1rem;
    &:hover {
      background-color: #03940F!important;
      border-top-color: black !important;
      box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.07), 0 4px 15px 0 rgba(0, 0, 0, 0.12);
      transition: 0.4s;
    }
  }
}

.navbar-toggler {
  border: none !important;
  padding: 4px 0 !important;
    
  &:focus {
    outline: 0;
  }
}

.dropdown-toggle::after {
 border-top-color: #cccccc !important;
 vertical-align: 0.09em !important;
}

// ----------------------------------- Navigations End
</style>
