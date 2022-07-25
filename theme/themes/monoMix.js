{
    canTriggerIfUnavailable: true,
    checkType: 'general',
    methods: {
        apply() {
            let style = document.getElementById('myStyle')
            if(style == null){
                style = document.createElement('style')
                style.setAttribute('id','myStyle')
            }
            style.innerHTML = `
/*
colors:

#cad2c5
#05668d
#bc8da0
#51344d

*/

/* Base Background(Not visible in Phone) */
#app{
    background: linear-gradient(hsla(0,0%,20%,.9),hsla(0,0%,20%,.9)),
    url(file:///C:/Users/Prahlad/AppData/Local/Programs/myDynasty/resources/app.asar/img/bg.cbfecfa0.jpg) 
    !important;
}
/* Main Background */
.container-main{
    background: #cad2c5 !important;
}
/* Buttons */
.btn{
    background: #05668d !important;
    color: #cad2c5 !important;
    border-color: #51344d !important;
}
/* Event Popups */
.modal-title{
    background: #cad2c5 !important;
    color: #51344d !important;
    border-color: #bc8da0 !important;
}
.modal-content{
    background: #cad2c5 !important;
}
.interaction-modal-content{
    background: #bc8da0 !important;
}
.interaction-modal-content-message{
    background: #cad2c5 !important;
}
/* Main Progress Bar */
.progress{
    background: #bc8da0 !important;
}
/* Your Progress */
.progress-bar{
    background: #05668d !important;
    color: #cad2c5 !important;
}
/* Current Stats */
.stats-number{
    background: #05668d !important;
    color: #cad2c5 !important;
}
/* Characters Img Background */
.img-thumbnail{
    background: #bc8da0 !important;
    border-color: #51344d !important;
}
/* Family Tree Connectors */
.character-tree-family-wrapper{
    border-color: #05668d !important;
}
/* Character Skill Badges */
.badge-skills{
    background: #05668d !important;
}
/* Character Traits */
.badge-light{
    background: #bc8da0 !important;
}
/* Popups */
.popover{
    background: #bc8da0;
}
/* Footer Alert Box */
.alert{
    background: #bc8da0 !important;
    color: #51344d !important;
    border-color: #51344d !important;
}
/* Achievements */
.list-group-item{
    background: #bc8da0 !important;
}
.active{
    background: #bc8da0 !important;
    color: #51344d !important;
    border-color: #51344d !important;
}
.nav-link:hover{
    border-color: #51344d !important;
}
.nav{
    border-color: #51344d !important;
}
	       `;
	       document.head.appendChild(style);
        }
    }
}