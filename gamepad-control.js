window.RufflePlayer = window.RufflePlayer || {};
        
window.RufflePlayer.config = {
           
    base: 'https://jmcclendon1000.github.io/',
           
    maxExecutionDuration: 120,
           
    allowScriptAccess: true,
           
    showSwfDownload: true,
       
};
        
window.addEventListener("load", (event) => {

    const ruffle = window.RufflePlayer.newest();

    const player = ruffle.createPlayer();

    const container = document.getElementById("ruffle-player");
            
    container.appendChild(player);

    player.load("https://jmcclendon1000.github.io/SSF2 v0.9b.swf")
        
});