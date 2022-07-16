$(function(){
     $(".mosaico-wraper").slick({
         centerMode: false,
         slidesToShow: 3,
         arrow:false,
         responsive:[

            {
                breakpoint:768,
                settings:{
                    arrows:false,
                    centerMode:true,
                    slidesToShow:2
                }
            },


            {
                breakpoint:580,
                settings:{
                    arrows:false,
                    centerMode:true,
                    slidesToShow:1
 
                }
            }
              

         ]
     })


});