class Form{
    constructor(){}
    display(){
         var title = createElement('h2');
         title.html("Car Racing Game");
         title.position(130,10);
         var input = createInput("Name");
         var button = createButton('Ok');
         var greeting = createElement('h3');
         input.position(130,150);
         button.position(250,200);
         button.mousePressed(function(){
             input.hide();
             button.hide();
             var name = input.value(); 
             playercount++;
             player.update(name);
             player.updateCount(playercount);
             greeting.html("hello" + name + "!");
             greeting.position(130,160);
         });


    }
}