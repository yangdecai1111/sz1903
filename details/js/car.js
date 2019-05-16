function Car(){

}
Car.prototype.addCar=function(goods){
    var carlist=this.getcar();
    if(this.hascar(goods.id)){
     
        for(i=0;i<carlist.length;i++){
        if(carlist[i].id==goods.id){
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


// 添加到购物车，通过localstorage
        //1.先查看购物车是否有相同产品function
        //2.没有则添加，有则数量＋1
        //3.
// 获取到购物车内的东西