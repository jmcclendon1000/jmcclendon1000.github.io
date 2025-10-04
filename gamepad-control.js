window.RufflePlayer = window.RufflePlayer || {};
        
window.RufflePlayer.config = {
           
    base: '/v0.9a/',
           
    maxExecutionDuration: 120,
       
};
        
window.addEventListener("load", (event) => {

    const ruffle = window.RufflePlayer.newest();

    const player = ruffle.createPlayer();

    const container = document.getElementById("ruffle-player");
            
    container.appendChild(player);

    player.load("/SSF2 v0.9a.swf")
        
});
