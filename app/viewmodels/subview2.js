define(function(){
    var subview2 = function(){};

    subview2.prototype.attached = function(){
        console.log("SUBVIEW 2 ATTACHED FIRED");
    }

    return subview2;
});