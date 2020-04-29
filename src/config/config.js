(function () {
  'use strict';
  class Config {
    constructor() {
      this.GROUP_ID = 121;
      this.BTAG_COOKIE = 'referrer_banner_id';
      this.DEFAULT_BTAG = 4392484;
      this.ROOT_URL = 'https://jackspayaffiliate.com/';
      this.BACKEND_URL = 'affil-adm.casinocontroller.com';
      this.id = this.getCookie(this.BTAG_COOKIE)
        ? parseInt(this.getCookie(this.BTAG_COOKIE))
        : this.DEFAULT_BTAG;
      if (this.id) {
        this.setCookie(this.BTAG_COOKIE, parseInt(this.id), 1);
      }
    }
  }

  function get_root_url() {
    return this.ROOT_URL;
  }

  function get_backend_url() {
    return this.BACKEND_URL;
  }

  function registerURL($locale = null) {
    return (
      this.get_backend_url() +
      '/affiliate/new_account?g=' +
      this.GROUP_ID +
      '&id=$id'
    );
  }

  function forgotPassURL($locale = null) {
    return (
      this.get_backend_url() + '/affiliate/forgot_password?g=' + this.GROUP_ID
    );
  }

  function getGroupID() {
    return this.GROUP_ID;
  }

  function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
    var expires = 'expires=' + d.toUTCString();
    document.cookie = cname + '=' + cvalue + ';' + expires + ';path=/';
  }

  function getCookie(cname) {
    var name = cname + '=';
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for (var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return '';
  }
})();
