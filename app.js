// know we want to do this fucking java script stuff know
$(function(){
    class Task{
        constructor(title, id ,date , tags , tempreture)
        {
            this.title = title;
            this.id = id;
            this.date = date;
            this.tags = tags;
            this.tempreture = tempreture;
        }
        //getters & setters
        get getId()
        {return this.id}
        set setId(id)
        {this.id = id}
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
    class Project{
        constructor(name , id)
        {
            this.name = name;
            this.id = id;
        }
        get getId()
        {
            return this.id;
        }
        get getName()
        {
            return this.name;
        }
        set setName(name)
        {
            this.name = name;
        }
        set setId(id)
        {
            this.id = id;
        }
        addTask(task)
        {
            this.tasks.push(task);
        }
        removeTaskByname(taskid)
        {
            this.tasks = this.tasks.filter(elem=>{
                return (taskid !== elem.getId)
            });
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
    let firstproj = new Project("project 1", 1); 
    let projects = [];
    projects.push(firstproj);
    const findProject = (id)=>{
        for(let i =0 ; i <projects.length ; i++)
        {
            if((projects[i].getId) == id)
            {
                return projects[i];
            }
        }
    }
    const deleteProject = (id)=>{
        for(let i =0 ; i <projects.length; i++)
        {
            if(projects[i].getId === id)
            {
                projects.splice(i-1 , 1);
            }
        }
    }
    let numberOfProjects = 1;
    let idOfProj = 1;
    let idOfTask = 1;
    $("#add-new-proj").on("click",function(){ 
        numberOfProjects++;
        idOfProj++;
        let projTemp = new Project(`project ${idOfProj}`, idOfProj);
        if(numberOfProjects >=5)
        {
            $("#proj-list::-webkit-scrollbar").css("display","inline");
        }   
        projects.push(projTemp);
        $(this).hide();
        $("#proj-list").append(
        `<li >
                            <div id="temp-proj">
                                <a data-target="${idOfProj}" class="disable">Project ${numberOfProjects}</a>
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
        $("#sl").append(
            `<div class="proj-root" id="${idOfProj}">
            <div id="proj-title">    
                <h2>project ${numberOfProjects}</h2>
                <div id="proj-btn-title">
                    <button class="btn" id="edit-proj-title"><i class="las la-edit"></i></button>
                    <button class="btn" id="delete-proj-title"><i class="las la-trash-alt"></i></button>
                    <button class="btn" id="more-proj-title"><i class="las la-ellipsis-h"></i></button>
                </div>
            </div>
            <div id="task-projs">
                <div id="tasks-list">
                    <ul class="list-group" id="list-of-tasks">
                 
                    </ul>
                </div>
                <div id="add-tast">
                    <div class="card disable" id="add-task">
                        <div id="new-task">
                            <input type="text" placeholder="im gonna do ..." id="new-task-input">
                            <div id="add-tast-btns">   
                                <div>
                                    <button class="btn" id="task-schedule-btn"><i class="las la-calendar-day"></i>Schedule</button>
                                    <button id="project-choos-btn" class="btn"><i class="las la-project-diagram"></i>Project</button>
                                </div> 
                                <div>    
                                <div class="dropdown">
                                <div class="default-value" target-data="3"> 
                                    <button class="btn" type="button" id="set-tempreture" title="prieorty 3">
                                        <i class="las la-thermometer-half"></i>  
                                    </button>
                                </div>
                                <div class="selets-div disactive">  
                                    <ul>
                                        <li id="option-priorty" val="1">
                                            <div id="hot">
                                                <i class="las la-thermometer-full"></i>
                                                <p>prieorty 1&ThinSpace;</p> 
                                            </div>
                                        </li>
                                        <li id="option-priorty" val="2">
                                            <div id="warm">
                                                <i class="las la-thermometer-three-quarters"></i>
                                                <p>prieorty 2</p> 
                                            </div>
                                        </li>
                                        <li id="option-priorty" val="3">
                                            <div id="cool">
                                                <i class="las la-thermometer-half"></i>
                                                <p>prieorty 3</p> 
                                            </div>
                                        </li>
                                        <li id="option-priorty" val="4">
                                            <div id="cold">
                                                <i class="las la-thermometer-quarter"></i>
                                                <p>prieorty 4</p>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>  <button id="set-tags" class="btn" data-toggle="modal" data-target="#tagmodal"><i class="las la-tag"></i></button>
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
        loadProject(idOfProj);
    });
    $("body").on("click","#accept-edit",function(){
        let val = $(this).parent().siblings("input").val();
        if(val)
        {
            $(this).parent().siblings("a").text(val);
            let numberOfCurentProject = $(this).parent().siblings("a").attr("data-target");
            $("#main").find("#"+numberOfCurentProject).find("h2").text(val);
            let proj = findProject(numberOfCurentProject);
            proj.setName = val;
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
        let currentnum  = $(this).parent().siblings("a").attr("data-target");
        $("main").find("#"+currentnum).remove();
        deleteProject(currentnum);
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
    //add task : 
    let tempTags= [];
    let intempTags = [];
    $("body").on("click", "#add-task-1" , function(){
        $(this).siblings("#add-task").removeClass("disable");
        $(this).addClass("disable");
        $(this).next().removeClass("disable");
        tempTags =[];
        intempTags = [];
    });
    $("body").on("click", "#add-task-2-btn", function(){
        idOfTask++;
        let tasktext = $(this).parents("#add-tast").find("#new-task-input").val();
        let prieorty = $("body").find(".default-value").attr("target-data");
        let newTaskTemp = new Task(tasktext,idOfTask , "" ,tempTags, prieorty);
        tempTags =[];
        intempTags = [];
        if(tasktext)
        {
            $(this).parents("#task-projs").find("#list-of-tasks").append(
                `
                <li>
                    <div id="task">
                        <div id="task-inf">
                            <button class="btn" id="task-radio"><i class="las la-circle"></i></button>
                            <!--<i class="las la-check-circle"></i> after clicked -->
                            <p id="task-name">${newTaskTemp.gettitle}</p>
                        </div>
                        <div id="task-btn">
                            <button class="btn" id="edit-task"><i class="las la-pen"></i></button>
                            <!--scadule again and the sticky note button will be here-->
                        </div>
                    </div>
                </li>
                `
            )
            $(this).parents("#add-tast").find("#new-task-input").val("");
        }else{
            $(this).parents("#add-tast").find("#add-task").css("border-color" , "rgb(197, 61, 61)");
        }
    });
    $("body").on("click" , "#cancel-add-task-btn", function(){
        $(this).parent().addClass("disable");
        $(this).parents("#add-tast").find("#add-task").addClass("disable");
        $(this).parent().siblings("#add-task-1").removeClass("disable");
    })
    //tempruture stuffs : 
    $("body").on("click" , "#set-tempreture" , function(){  
    
        $(this).parents().siblings(".selets-div").toggleClass("disactive");
    });
    $("body > *").on("click" , function(par)
    {
        if( par.target.className!=="las la-thermometer-half")
        {
            $("body").find(" .selets-div").addClass("disactive");
        }
    });
    $("body").on("click" , "#option-priorty",function(){
        $(this).parents(".dropdown").find(".default-value").attr("target-data", $(this).attr("val"));
        $(this).parents(".dropdown").find(".default-value").find("i").removeClass();
        let icontent = $(this).find("i").attr("class");
        $(this).parents(".dropdown").find(".default-value").find("i").addClass(icontent)
        .css("color" , $(this).find("i").css("color"));
        $(this).parents(".dropdown").find(".default-value").attr("title", `prieorty ${$(this).attr("val")}`);
    });
    //add tags : 
    $("body").on("click" , "#set-tags" , function(){
        let htmdiv= "";
        for(let i = 0 ; i<tempTags.length ;i++)
        {
           htmdiv+=`
           <span>${tempTags[i]}
           <button class="btn" id="close-tag-btn">
                <i class="las la-times"></i>
           </button>
           </span>
           `
        }
        $("body").find("#tags-before").html(
                
            )
    })
    $("body").on("input" , "#tag-input"  , function(x)
    {
        let val = $(x.target).val();    
        if(val[val.length-1] === ","  || val[val.length-1] === "/" || val[val.length-1] === ".")
        {
           let tag=  val.substr(0 , val.length -1 );
           tag  = tag.split("");
           tag = tag.filter((elem , index) =>{
               if(elem === " ")
               {
                   let flag = 0;
                   for(let i = index ; i < tag.length ;i++)
                   {
                       if(tag[i] !== " ")
                       {
                            return true;
                       }
                   }
                   return false;
               }else{
                   return true;
               }
           });
           tag = tag.map(elem=>{
               if(elem === " ")
               {
                   return "_";
               }else{
                   return elem;
               }
           })
           tag.unshift("@");
           tag = tag.join("");
           console.log(tag);
           $(x.target).val("").parent().next().find("p").remove();
           $(x.target).val("").parent().next().append(  
               `<span>${tag}
               <button class="btn" id="close-tag-btn">
                    <i class="las la-times"></i>
               </button>
               </span>`
           )
           intempTags.push(tag);
        };
    });
    // render the tags : 
    
    $("body").on("click" , "#save-tags" , function(){
        tempTags = intempTags.slice(0);
    });
    //date picker : 
    //styling project  : 
    $("body").on("mouseenter","#add-task-1", function(){
        $(this).find("i").css("background-color", "rgb(108, 219, 191)");
        $(this).css("text-decoration", "underline");
    });
    $("body").on("mouseleave" , "#add-task-1" , function(){
        $(this).find("i").css("background-color", "rgba(255, 255, 255, 0)");
        $(this).css("text-decoration", "none");
    })
    $("body").on("mouseenter" , "#task-radio" , function(){
        $(this).find("i").css("background-color" , "rgba(172, 172, 172, 0.199)");
        $(this).find("i").removeClass("la-circle").addClass("la-check-circle");
    })
    $("body").on("mouseleave",  "#task-radio",function(){
        $(this).find("i").addClass("la-circle").removeClass("la-check-circle").css("background-color","rgba(255, 255, 255, 0)");
    });
    $("body").on("focus","#new-task-input" ,function(){
        $(this).parents("#add-task").css("border-color" , "rgb(108, 219, 191)");
    });
    $("body").on("focusout" , "#new-task-input" , function(){
        $(this).parents("#add-task").css("border-color", "");
    });

    //diologs : 
    
});

