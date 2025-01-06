
$(document).ready(function(){

    $('.fa-bars').click(function(){
      $(this).toggleClass('fa-times');
      $('nav').toggleClass("nav-toggle")
   
    });
    $("li").click(function(){
      $('nav').removeClass('nav-toggle');
      $(".fa-bars").toggleClass('fa-times');
    })
  //  $("li").click(function(){
  //   $(".fa-times").toggleClass('.fa-bars');
  //   $("nav").hide()
    // .$('.nav-toggle').toggleClass("nav")
  //  })
    // $(window).on('load scroll',function(){
  
    // if($(window).scrollTop() > 20){
  
    // $('#header').css('top','0');
    
    // $('.fa-bars').removeClass('fa-times');
    // $('nav').removeClass('nav-toggle');
  
    // }else{
    // $('#header').css('top','-100%');
    // }
//    }
//    );
  
  });