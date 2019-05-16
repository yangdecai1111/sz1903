
    //购物车的方法
    function Car(){

    }
    Car.prototype.addCar=function(goods){
        var carlist=this.getcar();
        if(this.hascar(goods.id)){
         
            for(i=0;i<carlist.length;i++){
            if(carlist[i].id===goods.id){
                carlist[i].number+=goods.number;
                break;
            }
            }
        }else{
           
            carlist.push(goods);

        }
        localStorage.setItem('carlist',JSON.stringify(carlist));
    }

    Car.prototype.hascar=function(id){
        var carlist=this.getcar();
        for(var i=0;i<carlist.length;i++){
            if(carlist[i].id===id){
                return true;
            }
        }
        return false;
    }



    Car.prototype.getcar=function(){
        var carlist=JSON.parse(localStorage.getItem('carlist')) ||[];
        return carlist;
    }
    Car.prototype.priceTotal=function(){
        var carlist=this.getcar();
        var pricetotal=0.00;
        for(var i=0;i<carlist.length;i++){
            pricetotal+=carlist[i].number*carlist[i].price;
        }
        return pricetotal;
    }
    Car.prototype.delCar=function(id){
        var carlist=this.getcar();
        for(var i=0;i<carlist.length;i++){
            if(id==carlist[i].id){
                carlist.splice(i,1);
                break;
            }
        }
        localStorage.setItem('carlist',JSON.stringify(carlist));
    }
  
        

    
    $.get('./cart.json',function(res){
        var str1=``;
            str1+=` <a href="#"><img src="${res[0].src}" alt=""></a>  
            <a href="#"> <p class="title">${res[0].title}</p> </a>
            <p class="price">&yen;${res[0].price}</p>`;
        $(".pic1").html(str1);
        var str2=``;
            str2+=` <a href="#"><img src="${res[1].src}" alt=""></a>  
            <a href="#"> <p class="title">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;${res[1].title}</p> </a>
            <p class="price">&yen;${res[1].price}</p>`;
        $(".pic2").html(str2);
        var str3=``;
            str3+=` <a href="#"><img src="${res[2].src}" alt=""></a>  
            <a href="#"> <p class="title">${res[2].title}</p> </a>
            <p class="price">&yen;${res[2].price}</p>`;
        $(".pic3").html(str3);
        var str4=``;
            str4+=` <a href="#"><img src="${res[3].src}" alt=""></a>  
            <a href="#"> <p class="title">${res[3].title}</p> </a>
            <p class="price">&yen;${res[3].price}</p>`;
        $(".pic4").html(str4);
        var str5=``;
            str5+=` <a href="#"><img src="${res[4].src}" alt=""></a>  
            <a href="#"> <p class="title">${res[4].title}</p> </a>
            <p class="price">&yen;${res[4].price}</p>`;
        $(".pic5").html(str5);
    },'json')


   