<?
    // these functions return values that are customized to each casino group
    define(GROUP_ID, <affiliateGroupId>);
    define(BTAG_COOKIE, 'referrer_banner_id');
    define(DEFAULT_BTAG, <defaultBtag>); 
    define(ROOT_URL, 'https://jackspayaffiliate.com/');
    define(BACKEND_URL,'affil-adm.casinocontroller.com');
    $id = $_COOKIE[BTAG_COOKIE] ? (int) $_COOKIE[BTAG_COOKIE] : DEFAULT_BTAG;
    // if we get an id passed in the URL, set cookie
    if($_GET['id']) {
       setCookie(BTAG_COOKIE, (int) $_GET['id'], time()+60*60*24*30, '/');
       $id = (int) $_GET['id'];
    }
    function get_root_url() {
       return ROOT_URL;
    }
    function get_backend_url(){
       return BACKEND_URL;
    }
    function registerURL($locale=null) {
       global $id;
       return get_backend_url().'/affiliate/new_account?g='.GROUP_ID."&id=$id". (!empty($locale) ? "&l=$locale" : '');
    }
    function forgotPassURL($locale=null) {
       return get_backend_url().'/affiliate/forgot_password?g='.GROUP_ID. (!empty($locale) ? "&l=$locale" : '');
    }
    function getGroupID() {
       return GROUP_ID;
    };

    ?>