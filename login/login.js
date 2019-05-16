$(function(){
   $(".QR").click(function(){
       $(".main-r").addClass('show').siblings().removeClass('show');
   })
   $(".account").click(function(){
      $(".main-l").addClass('show').siblings().removeClass('show');
   })
   $(".QRP").hover(function(){
       var style={
           'left':'25px'
       } 
       
       $(this).animate(style);
       $(".iph").fadeIn();
   },function(){
    var style1={
        'left':'117px'
        }
    $(".iph").fadeOut();
    $(this).animate(style1);
   })
  
    $(".forget").on('mouseover', function(){
        layer.tips('请不要在公共电脑上选用此项,建议个人电脑上选用此项','.forget',{
            tips:[1,'#3595CC'],
            time:1000
        });
    });
    $(".iphone").on('mouseover', function(){
        layer.tips('短信验证码登陆','.iphone',{
            tips:[3,'#3595CC'],
            time:1000,
            
        });
    });
    $(".more").on('mouseover',function(){
        layer.tips('更多','.more',{
            tips:[3,'#3595CC'],
            time:1000
        });
    });
    $(".more").on('click',function(){
        if( $('.moreMenu').is(':hidden')){
        $('.moreMenu').addClass('show');}
        else{
            $('.moreMenu').removeClass('show');
        }
    })
    
    $(".btn").click(function(){
        var txt=$("#txt").val();
        var psd=$("#psd").val();
        if(txt=='' && psd=='' || txt==''){
            $(".infor").html('请输入你的账号').css('color','red');
        }else if(psd==''){
            $(".infor").html('请输入你的密码').css('color','red');
        }else{
          
             $.get('./login.php',{'username':txt,'password':psd},function(res1){
                if(txt!==res1.username && psd!==res1.password){
                    $(".infor").html('帐号或密码错误').css('color','red');
                }
                if(txt==res1.username && psd==res1.password){
                    
                    location.href=`../rongyao.html?id=${res1.username}`;
                }
             },'json')  
            
        }
    })
   
})