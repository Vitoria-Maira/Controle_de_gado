//1 identificsr quando o usuário utiliza o scroll
//3 Calcular a distancia entre o to´p da pagina e o elemento que deseja animar
//2 Calcular a distandia entre o topo da pagina e o scroll
//4 comparar as duas distancias anteriores
//5 adicionar umas classe com css animation ou transition ao elemento animado

//Debounce do lodash
debounce = function(func, wait, immediate){
    var timeout;
    return function(){
        var context=this,args=arguments;
        var later=function(){
            timeout=null;
            if(!immediate) func.apply(context,args);
        };
        var callNow=immediate && !timeout;
        clearTimeout(timeout);
        timeout= setTimeout(later, wait);
        if(callNow) func.apply(context,args);
       
    };
};





(function(){
var $target = $('.anime'),
animationClass = 'anime-start',
offset = $(window).height() *3/4;

function animeScroll(){
    var documentTop = $(document).scrollTop();

    $target.each(function(){
        var itenTop = $(this).offset().top;
        if(documentTop > itenTop - offset){
            $(this).addClass(animationClass);
        }else{
            $(this).removeClass(animationClass);
        }
    })
}

animeScroll();

$(document).scroll(debounce(function(){
    animeScroll();
    console.log('teste');
},200));

}());





$('#alert').click(function(){
    swal({
    title: "Good job!",
    text: "You clicked the button!",
    icon: "success",
     button: "Aww yiss!",
    });
});
