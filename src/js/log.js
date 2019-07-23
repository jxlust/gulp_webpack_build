let isDebug = true;
let console = {
    log(){
        //console.log('=============',arguments);
        isDebug ? window.console.log.apply(this,arguments) : '';
    }
}
export{
    console
}