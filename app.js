// know we want to do this fucking java script stuff know
$(function(){

    //project handeling : 
    let numberOfProjects = 1;
    $("#add-new-proj").on("click",function(){ 
        numberOfProjects++;
        $(this).hide();
        $("#proj-list").append(
        `<li >
                            <div id="temp-proj">
                                <a class="disable">Project ${numberOfProjects}</a>
                                <input maxlength="20" type="text" placeholder="project${numberOfProjects}" class="" name="proj">
                                <div id="icons-proj-btn">    
                                    <button class="btn proj-btn-xs disable" id="edit-proj"><i class="las la-pen"></i></button>
                                    <button class="btn proj-btn-xs disable" id="delete-proj"><i class="las la-minus-circle"></i></button>
                                    <button class="btn proj-btn-xs" id="accept-edit"><i class="las la-check-circle"></i></button>
                                    <button class="btn proj-btn-xs" id="reject-edit"><i class="las la-times-circle"></i></button>
                                </div>
                            </div>        
                        </li>`)
        let lastChild = $("#proj-list").children("li:last");
    });
    $("body").on("click","#accept-edit",function(){
        if($(this).parent().siblings("input").val())
        {
            $(this).parent().siblings("a").text($(this).parent().siblings("input").val());
        }
        $("#add-new-proj").show("slow");
        $(this).parent().siblings("input").addClass("disable").siblings("a").removeClass("disable");
        $(this).siblings("#edit-proj , #delete-proj").removeClass("disable");
        $(this).addClass("disable");
        $(this).siblings("#reject-edit").addClass("disable");
    });
    $("body").on("click","#reject-edit",function(){
        $("#add-new-proj").show("slow");
        $(this).parent().siblings("input").addClass("disable").siblings("a").removeClass("disable");
        $(this).siblings("#edit-proj , #delete-proj").removeClass("disable");
        $(this).addClass("disable");
        $(this).siblings("#accept-edit").addClass("disable");
    });
    $("body").on("click" , "#edit-proj" , function(){
        $("#add-new-proj").hide();
        $(this).parent().siblings("input").removeClass("disable").siblings("a").addClass("disable");
        $(this).siblings(" #delete-proj").addClass("disable");
        $(this).addClass("disable");
        $(this).siblings("#accept-edit , #reject-edit").removeClass("disable");
    });
    $("body").on("click" , "#delete-proj" , function(){
        numberOfProjects--;
        $(this).parents("li").remove();
    });
    // 
    //loading divs of projects : 
    



    //end of project handleing 
    
});
