define(function(){
    var subview1 = function(){};

    subview1.prototype.attached = function(){
        console.log("SUBVIEW1 ATTACHED FIRED");
    }

    return subview1;
});