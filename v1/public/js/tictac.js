let ausgabe = "";

for(var i = 1;i<=100;i++){
    
    if(i%3==0&&i%5==0){
        ausgabe += "TicTac";
    }else if(i%3==0){
        ausgabe += "Tic";
    }else if(i%5==0){
        ausgabe += "Tac";
    }else{
        ausgabe += i;
    }
    ausgabe+=" ";
}

console.log(ausgabe);