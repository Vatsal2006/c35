class Game{
    constructor(){}
    getState(){
        var gameStateRef = database.ref('Gamestate');
        gameStateRef.on("value",function(data){
            Gamestate = data.val();
        })
    }
    update(state){
        database.ref('/').update({
            Gamestate: state
        });
    }
    start(){
        if (Gamestate === 0){
            player = new Player();
            player.getCount();
            form = new Form ();
            form.display();
        }
    }
}