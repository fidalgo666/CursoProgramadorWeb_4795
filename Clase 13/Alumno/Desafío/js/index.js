var name = $("#firstName");
$("#firstName").blur(validateName);

function validateName(){
    
    if(name.val().length < 1){
        name.addClass("error");
        nameInfo.text("Debe rellenar su nombre!");
        nameInfo.addClass("error");
        return false;
    }else {
        name.removeClass("error");
        nameInfo.text("");
        nameInfo.removeClass("error");
        return true;
    }
}