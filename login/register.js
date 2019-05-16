$(function(){
    $(".btn").click(function(){
        var reg=/^\w{5,17}$/;
        var txt=$("#user").val();
        var psd=$("#psd").val();
        var repsd=$("#repsd").val();
        if(!reg.test(txt)){
            $(".infor1").html('账号只能为字母数字下划线，长度6-18位').css('color','red');
            return;
         }
         if(!reg.test(psd)){
            $(".infor2").html('密码只能为字母数字下划线，长度6-18位').css('color','red');
            return;
         }
        if(txt=='' && psd=='' && repsd=='' || txt==''){
            $(".infor1").html('请输入你的用户名').css('color','red');
        }else if(psd==''){
            $(".infor2").html('请输入你的密码').css('color','red');
        }else if(repsd==''){
            $(".infor3").html('请再次输入你的密码').css('color','red');
        }else if(psd!==repsd){
            $(".infor3").html('两次输入的密码不一致，请重新输入').css('color','red');
        }else{
            
               $.get('./register.php',{'username':txt,'password':psd},function(res){
                if(res.username==txt){
                    $(".infor1").html('你输入的用户名存在').css('color','red');
                    }else{
                            alert("恭喜你注册成功");
                           location.href="../rongyao.html"
                        }
               },'json')
            
        }
    })
})