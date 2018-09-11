var initialCats =  [
    {
        clickCount : 0,
        name : 'Tabby',
        imgSrc : 'img/434164568_fea0ad4013_z.jpg',
        imgAttribution : 'https://www.flickr.com/photos/bigtallguy/434164568',
        nickname : ["Tabcab","T-Bone","Bear", "Hippo"]
    },
    {
        clickCount : 0,
        name : 'Tiger',
        imgSrc : 'img/4154543904_6e2428c421_z.jpg',
        imgAttribution : 'https://www.flickr.com/photos/xshamx/4154543904',
        nickname : ['fright']
    },
    {
        clickCount : 0,
        name : 'Scaredy',
        imgSrc : 'img/22252709_010df3379e_z.jpg',
        imgAttribution : 'https://www.flickr.com/photos/kpjas/22252709',
        nickname : ['haha']
    },
    {
        clickCount : 0,
        name : 'Shadow',
        imgSrc : 'img/1413379559_412a540d29_z.jpg',
        imgAttribution : 'https://www.flickr.com/photos/malfet/1413379559',
        nickname : ['chasy']
    },
    {
        clickCount : 0,
        name : 'Sleepy',
        imgSrc : 'img/9648464288_2516b35537_z.jpg',
        imgAttribution : 'https://www.flickr.com/photos/onesharp/9648464288',
        nickname : ['zzzzzzzz']
    }
];


var ViewModel = function(){
    var self = this;//保留一个指针，保留一种访问外层“this”的方式
    
    this.catList = ko.observableArray([]);

    // initialCats.forEach(function(catItem){
    //     self.catList.push(new Cat(catItem));
    // });
    initialCats.forEach(element => {
        self.catList.push(new Cat(element));
    });

    this.currentCat = ko.observable(this.catList()[0]);

    this.incrementCounter = function(){
        // this.clickCount(this.clickCount()+1); //usage 1
        self.currentCat().clickCount(self.currentCat().clickCount()+1);//usage 2
    };

    this.setCurrentCat = function(catItem){
        self.currentCat(catItem);//设置currentCat
    }
};

var Cat =function(data){
    this.clickCount = ko.observable(data.clickCount);
    this.name = ko.observable(data.name);
    this.imgSrc = ko.observable(data.imgSrc);
    this.imgAttribution = ko.observable(data.imgAttribution);
    this.nickname = data.nickname;

    this.levelName = ko.observableArray([
        { name: "小乳猫", type: "Bear" },
        { name: "小奶猫", type: "Hippo" },
        { name: "少年猫", type: "Unknown" }
    ]);

    this.level = ko.computed(function() {
        if(this.clickCount()>=0 && this.clickCount()<10){
            return this.name()+"  "+this.levelName()[0].name;
        }else if(this.clickCount()>=10 && this.clickCount()<20){
            return this.name()+"  "+this.levelName()[1].name;
        }else{
            return this.name()+"  "+this.levelName()[2].name;
        }
    }, this);

};  

ko.applyBindings(new ViewModel())

