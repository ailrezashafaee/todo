// know we want to do this fucking java script stuff know
$(function(){
    class task{
        constructor(title ,date , tags , tempreture)
        {
            this.title = title
            this.date = date;
            this.tags = tags;
            this.tempreture = tempreture;
        }
        //getters & setters
        get gettitle()
        {
            return this.title;
        }
        set settitle(x)
        {
            this.title = x;
        }
        get getdate()
        {
            return this.date;
        }
        set setdate(x)
        {   
            this.date = x;
        }
        get gettags()
        {
            return this.tag;
        }
        set settags(x)
        {
            this.tags = x;
        }
        get gettempretur()
        {
            return this.tempreture;
        }
        set settempreture(x)
        {
            this.tempreture = x;
        }
        //functions : 
        addTag(x)
        {
            this.tags.push(x);
        }
    }   
    //header handeling : 
    //toggle button : 
    let toggleHandelerSideBar = "off";
    $("#btn-bar").on("click", function()
    {  
        if(toggleHandelerSideBar === "off")
        {
            $("#aside").css("margin-left" , "-300px");
            toggleHandelerSideBar = "on";
        }else{
            $("#aside").css("margin-left", "0px");
            toggleHandelerSideBar = "off";
        }
    });
    //project handeling : 
    
    let numberOfProjects = 1;
    $("#add-new-proj").on("click",function(){ 
        numberOfProjects++;
        if(numberOfProjects >=5)
        {
            $("#proj-list::-webkit-scrollbar").css("display","inline");
        }   
        $(this).hide();
        $("#proj-list").append(
        `<li >
                            <div id="temp-proj">
                                <a data-target="${numberOfProjects}" class="disable">Project ${numberOfProjects}</a>
                                <input maxlength="20" type="text" placeholder="project${numberOfProjects}" class="" name="proj">
                                <div id="icons-proj-btn">    
                                    <button class="btn proj-btn-xs disable" id="edit-proj"><i class="las la-pen"></i></button>
                                    <button class="btn proj-btn-xs disable" id="delete-proj"><i class="las la-minus-circle"></i></button>
                                    <button class="btn proj-btn-xs" id="accept-edit"><i class="las la-check-circle"></i></button>
                                    <button class="btn proj-btn-xs" id="reject-edit"><i class="las la-times-circle"></i></button>
                                </div>
                            </div>        
                        </li>`)
        //adding a new div on main part
        $("#main").append(
            `<div class="proj-root" id="${numberOfProjects}">
            <div id="proj-title">    
                <h2>project ${numberOfProjects}</h2>
                <div id="proj-btn-title">
                    <button class="btn" id="edit-proj-title"><i class="las la-edit"></i></button>
                    <button class="btn" id="delete-proj-title"><i class="las la-trash-alt"></i></button>
                    <button class="btn" id="more-proj-title"><i class="las la-ellipsis-h"></i></button>
                </div>
                <!--this will be the place for more ... -->
            </div>
            <div id="task-projs">
                <div id="tasks-list">
                    <ul class="list-group">
                        <!--template for a task : -->
                        <!--place to load the data of the task in it-->
                    </ul>
                </div>
                <div id="add-tast">
                    <div class="card disable" id="add-task">
                        <div id="new-task">
                            <input type="text" placeholder="im gonna do ..." id="new-task-input">
                            <div id="add-tast-btns">   
                                <div>
                                    <button class="btn" id="task-schedule-btn"><i class="las la-calendar-day"></i>Schedule</button>
                                    <button id="project-choos-btn" class="btn"><i class="las la-project-diagram"></i>Project</button><!--this will be on left side only-->
                                </div> 
                                <div>    
                                    <button class="btn"><i class="las la-thermometer-half"></i></button><!--my idea is use tempruture for this -->
                                    <button class="btn"><i class="las la-tag"></i></button>
                                </div>
                            </div>
                        </div>
                    </div>
                      
                    <div id="add-task-1" class="">    
                        <button id="add-task-1-btn" class="btn"><i class="las la-plus"></i></button>
                        <lable for="add-task-1-btn">Add tast</lable>
                    </div>
                    <div id="add-task-2" class="disable"> 
                        <button id="add-task-2-btn" class="btn">Add Task</button>
                        <button id="cancel-add-task-btn" class="btn">Cancel</button>
                    </div>
                </div>
            </div>
        </div>`
        )
            // make the display of any other divs in main side : 
        loadProject(numberOfProjects);
    });
    $("body").on("click","#accept-edit",function(){
        let val = $(this).parent().siblings("input").val()
        if(val)
        {
            $(this).parent().siblings("a").text(val);
            let numberOfCurentProject = $(this).parent().siblings("a").attr("data-target");
            $("#main").find("#"+numberOfCurentProject).find("h2").text(val);
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
    $("body").on("click", "#temp-proj ", function(){
        $("#proj-list li").removeClass("proj-list-active");
        $(this).parents("li").addClass("proj-list-active");
        let currentNumber = $(this).find("a").attr("data-target");
        loadProject(currentNumber);
    });
    // 
    //loading divs of projects : 
    const loadProject = (ref)=>
    {   
        const divs = [...document.querySelectorAll(".proj-root")];
        divs.forEach(elem=>{
            //console.log($(elem).attr("id"));
            if(($(elem).attr("id")) != ref)
            {
                $(elem).addClass("disable");   
            }else{
                $(elem).removeClass("disable");
            }
        });
    }
    //end of project handleing 
    
});
