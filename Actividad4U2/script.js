alert("pilares de la educacion inicial");




/* ID */

/* llamo al id, el uso del metodo css,el primer parametro es la propiedad a 
cambiar y el segundo es el valor */

$('#parrafo'). css("background",  "purple")


/* Clase mensaje */
$('.mensaje').css("font-size","30px").
css("background", "orange")


/* Evento */
$('#creatividad').click(function(){
(this).css("font-size",  "50px")
})




/* pasamos el cursor sobre los elementos */

$('li').mouseover(function(){
	$(this).css("background",   "red")
})





/* cuando quito el cursor del elemento */
$('div').click(function(){
	$(this).css("backgroud" , "brown")
})

$('div').mouseout(function(){
	$(this).css("background", "yellow")

})

