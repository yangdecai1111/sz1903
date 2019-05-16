$(function(){
    var inner=` <div class="log1">
    <i class="account">帐号登录</i><i class="st"></i>
    <i class="QR">扫码登录</i>
    <div class="main-l show">
        <p class="infor"></p>
        <input type="text" name="" id="txt" placeholder="请输入账号" autofocus>
        <input type="password" name="" id="psd" placeholder="请输入密码">
        <div class="iphone"><img src="./images/hw (3).png" alt="">短信验证码登陆</div>
        <button class="btn">登陆</button>
        <div class="remenber">  <em class="forget"><input type="checkbox">&nbsp;&nbsp;记住华为账号</em><i class="more">更多</i> <em class="moreMenu">
            <ul>
                <li><a href="#"></a>遇到问题</li>
                <li><a href="#"></a>更换手机号</li>
                <li><a href="#"></a>问题中心</li>
            </ul>
        </em> </div>
        <div class="register1"><a href="./register.html">注册账号</a><span></span><a href="./forget.html">忘记密码?</a></div>
        <div class="other1">
            <i class="title"><img src="./images/hw (10).png" alt="">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 其他方式登陆&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</i> <img src="./images/hw (11).png" alt="">
        <div class="otherApp1">
                <a href="#"></a>
                <a href="#"></a>
                <a href="#"></a>
        </div>
        </div>
        <p class="but">继续访问即代表您已同意<a href="./prototal.html">华为商城服务协议</a>和<a href="./details.html">华为隐私政策</a></p>
    </div>
    <div class="main-r">
        <div class="qrpic">
            <img src="./images/hw (7).png" alt="二维码" class="QRP">
            <img src="./images/hw (6).png" alt="手机" class="iph">
        </div>
        <div class="qrmsg">
            <em>使用<i>华为移动服务APP</i>扫一扫</em>
            <p>若您使用华为手机，请进入“设置”>“华为帐号”扫码登录。</p>
        </div>
    </div>
</div>`;
layer.open({
    title:['','background:#a51b1b'],
    type:1,
    skin:'layui-layer-demo',
    area:['498px','634px'],
    content:inner,
})


$('span.layui-layer-resize').hide();
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
             time:1000
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
                   location.href='../cart/cartindex.html'
                 }
              },'json')  
             
         }
     })
    
 })