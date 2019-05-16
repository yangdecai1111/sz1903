$(function () {

    $(".fork").on('click', function () {
        $("#adver").css("display", "none");
    });

    $(".effects").hover(function () {
        $(this).addClass("active").siblings().removeClass("active");
        var index = $(this).index();
        $(".main").eq(index).addClass("selected").siblings().removeClass("selected");
        $(".mobile").eq(index).css("color", "#00b5e2");

    }, function () {
        $(".mobile").css("color", "#3a3a3a");
    });

    $(".main").on("mouseleave", function () {
        $(this).removeClass("selected");
        $(".effects").removeClass("active");
        $(".mobile").css("color", "#3a3a3a");
    });

    $(".txt").on("click", function () {
        $(".link1").empty();
        $(".link2").empty();
    });


    var index = 0;
    var time = setInterval(autoplay, 2000);
    function autoplay() {
        index++;
        $("#box > li").eq(index).fadeIn().siblings().fadeOut();
        $("ol > li").eq(index).addClass("current").siblings().removeClass("current");
        if (index == $("#box > li").length - 1) {
            index = -1;
        }
    }
    $("ol > li").hover(function () {
        clearInterval(time);
        index = $(this).index() - 1;
        autoplay();
    }, function () {
        time = setInterval(autoplay, 2000);

    })
    $(".yjt").on("click", function () {
        clearInterval(time);
        autoplay();
    });
    $(".zjt").on("click", function () {
        clearInterval(time);
        index--;
        $("#box > li").eq(index).fadeIn().siblings().fadeOut();
        $("ol > li").eq(index).addClass("current").siblings().removeClass("current");
        if (index <= -1) {
            index = 5;
        };

    });
    $(".yjt").hover(
        function () {
            clearInterval(time);
        },
        function () {
            time = setInterval(autoplay, 2000);
        }
    );
    $(".zjt").hover(
        function () {
            clearInterval(time);
        },
        function () {
            time = setInterval(autoplay, 2000);
        }
    );

    $(".start").on("click", function () {
        $(".start").html("返回");
    });

    $.get("./goods.json", function (res) {
        
        var str = ``;
        for(var i=0;i<res.length;i++){
    
        str += `    
                        <a href="details/detailed_information.html?id=${res[i].id}">
                        <figure>
                        <figcaption>${res[i].name}</figcaption>
                        <p>3000万Ai自拍,更美更自然</p>
                        <img src="${res[i].src}">
                        </figure>
                        </a>
                    
                    `,
            $(".z_hot").html(str);
        }
    }, "json");

    $.get("./goods1.json", function (result) {
        var str1=``;
        for(var i=0;i<result.length;i++){
        str1 += `
                <a href="details/detailed_information.html?id=${parseInt(result[i].id)+4}">
                
                <img src="${result[i].src}">
                <span>
                <h1>${result[i].name}</h1>
                <p>十二小时长续航,独显轻薄</p>
                </span>
                
                </a>`
            }
            $(".b_hot").html(str1);
    }, "json");
    

    window.onscroll=function(){
        var top=document.documentElement.scrollTop || document.body.scrollTop;
        if(top>=800){
            $(".xhj").css("display","block");
        }else{
            $(".xhj").css("display","none");
        }
    };

    $(".xhj").on("click",function(){
        var speed=document.documentElement.scrollTop || document.body.scrollTop;
        var timer=setInterval(function(){
            speed-=100;
            document.documentElement.scrollTop =document.body.scrollTop=speed;
            if(speed<=0){
                clearInterval(timer);
            }
        },20);
       
    });

    var href=location.href.split("=")[1];
      if(href){
         $("#login").html(href+"已登陆").css('color','red');
      }
});


