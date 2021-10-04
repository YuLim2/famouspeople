var Body = {
    fontColor:function (color){
        $('body').css('color', color);
    },
    backgroundColor:function (color){
        $('body').css('backgroundColor', color);
    }
}
    var Links = {
    SetColor:function(color){
        $('a').css('color',color);
    }
}
    function nightDay(self){
    var target = document.querySelector('body')
        if(self.value === 'night'){
        Body.backgroundColor('black');
        Body.fontColor('white');
        self.value='day';

        Links.SetColor('powderblue');

            } 
        else{
        Body.backgroundColor('white');
        Body.fontColor('black');
        self.value='night';

        Links.SetColor('blue');
            }
        }