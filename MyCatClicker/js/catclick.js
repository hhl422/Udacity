
/* ======= Model（模型） ======= */

var model = {
    currentCat = null,
    cats = [
        {
            clickCount : 0,
            name : 'Tabby',
            imgSrc : 'img/434164568_fea0ad4013_z.jpg',
            imgAttribution : 'https://www.flickr.com/photos/bigtallguy/434164568'
        },
        {
            clickCount : 0,
            name : 'Tiger',
            imgSrc : 'img/4154543904_6e2428c421_z.jpg',
            imgAttribution : 'https://www.flickr.com/photos/xshamx/4154543904'
        },
        {
            clickCount : 0,
            name : 'Scaredy',
            imgSrc : 'img/22252709_010df3379e_z.jpg',
            imgAttribution : 'https://www.flickr.com/photos/kpjas/22252709'
        },
        {
            clickCount : 0,
            name : 'Shadow',
            imgSrc : 'img/1413379559_412a540d29_z.jpg',
            imgAttribution : 'https://www.flickr.com/photos/malfet/1413379559'
        },
        {
            clickCount : 0,
            name : 'Sleepy',
            imgSrc : 'img/9648464288_2516b35537_z.jpg',
            imgAttribution : 'https://www.flickr.com/photos/onesharp/9648464288'
        }
    ]
}

/* ======= Octopus（章鱼） ======= */
// 1.刷新数据
// 2.通知视图刷新
var octopus = {
    init : function(){
        model.currentCat = model.cats[0];

        catview.render();
        catlistview.render();
    },

    getCurrentCat = function(){
        return model.currentCat;
    },

    setCurrentCat = function(cat){
        model.currentCat = cat;
    },

    getCats = function(){
        return model.cats;
    },

    incrementCounter = function(cat){
        model.currentCat.clickCount++;
        catview.render();
    }

}

/* ======= = View（视图） ======= */
// 1.渲染视图
// 2.监听点击
var catview = {
    init = function(){
        this.catElem = document.getElementById('cat');
        this.catNameElem = document.getElementById('cat-name');
        this.catImageElem = document.getElementById('cat-img');
        this.countElem = document.getElementById('cat-count');

        this.catImageElem.addEventListener('click',function(){
            
        });
    },

    render = function(){
        this.catNameElem = octopus.getCurrentCat().catNameElem;

    }
    
}

var catlistview = {
    init = function(){
        this.catListElem = document.getElementById('cat-list');
        octopus.currentCat
    },

    render = function(){

    }

}

