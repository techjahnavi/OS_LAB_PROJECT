var turn,lock=0;

var flag=[0,0]; //flag[0] and flag[1] are false initially for P1 and P2 simaltaneously
//Time complexity for critical state function is O(1)
function critical_state(id){
    var x=document.getElementById(id);
    x.remove();
    var y=document.getElementById('critical');
    if(lock==0){
        y.innerHTML='<button class=" button" id = '+id+' onclick="exit_state(this.id)">P'+id+'</button>';
        turn=1-id;
        flag[id-1]=1;
        lock=1;    
        document.getElementById('turn_state').innerHTML='<i class="fas fa-sync-alt mr-2"></i>Turn: '+(turn+2);
    
    }
    else{
        alert("Deadlock occures");
        window.location.reload();
        lock=0;
    }
    

}

//Time complexity for exit state is O(1)
function exit_state(id){
    var x=document.getElementById(id);
    x.remove();
    lock=0;
    flag[id-1]=0;
    var y=document.getElementById('exit');
    y.innerHTML+='<button class="button" id = '+id+' onclick="entry_state(this.id)">P'+id+'</button>';
    

}

//Time complexity for entry state is O(1)
function entry_state(id){
    var x=document.getElementById(id);
    x.remove();
    var y=document.getElementById('entry');
    y.innerHTML+='<button class="button" id = '+id+' onclick="critical_state(this.id)">P'+id+'</button>';

}


