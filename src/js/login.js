function ready() {
    FB.getLoginStatus(function(response) {
        console.log(response);
    });
};