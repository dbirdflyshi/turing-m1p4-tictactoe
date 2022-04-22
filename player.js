class Player{
    constructor(pId,token){
        this.playerId = pId;
        this.token = token;
        this.wins = 0;
        this.losses = 0;
        this.draws = 0;
    }
    increaseWins(){
        this.wins ++;
    }
    increaseLosses(){
        this.losses ++;
    }
    increaseTies(){
        this.draws ++;
    }
}