/*show login form on button click */
$('.loginBtn').click(function(){
    $('.logIn').Show();
    $('.signUp').hide();
    $('loginBtn') .css({'border-bottom' : '2px solid #ff4141'});
});
/*show signup  form on button click */
$('.signupBtn').click(function(){
    $('.logIn').hide();
    $('.signUp').Show();
    $('signupBtn') .css({'border-bottom' : '2px solid #ff4141'});
}); 