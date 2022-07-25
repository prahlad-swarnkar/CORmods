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

lightgreen
darkgreen
limegreen
black

*/

/* Base Background(Not visible in Phone) */
#app{
    background: linear-gradient(hsla(0,0%,20%,.9),hsla(0,0%,20%,.9)),
    url(file:///C:/Users/Prahlad/AppData/Local/Programs/myDynasty/resources/app.asar/img/bg.cbfecfa0.jpg) 
    !important;
}
/* Main Background */
.container-main{
    background: lightgreen !important;
}
/* Buttons */
.btn{
    background: darkgreen !important;
    color: lightgreen !important;
    border-color: black !important;
}
/* Event Popups */
.modal-title{
    background: lightgreen !important;
    color: black !important;
    border-color: limegreen !important;
}
.modal-content{
    background: lightgreen !important;
}
.interaction-modal-content{
    background: limegreen !important;
}
.interaction-modal-content-message{
    background: lightgreen !important;
}
/* Main Progress Bar */
.progress{
    background: limegreen !important;
}
/* Your Progress */
.progress-bar{
    background: darkgreen !important;
    color: lightgreen !important;
}
/* Current Stats */
.stats-number{
    background: darkgreen !important;
    color: lightgreen !important;
}
/* Characters Img Background */
.img-thumbnail{
    background: limegreen !important;
    border-color: black !important;
}
/* Family Tree Connectors */
.character-tree-family-wrapper{
    border-color: darkgreen !important;
}
/* Character Skill Badges */
.badge-skills{
    background: darkgreen !important;
}
/* Character Traits */
.badge-light{
    background: limegreen !important;
}
/* Popups */
.popover{
    background: limegreen;
}
/* Footer Alert Box */
.alert{
    background: limegreen !important;
    color: black !important;
    border-color: black !important;
}
/* Achievements */
.list-group-item{
    background: limegreen !important;
}
.active{
    background: limegreen !important;
    color: black !important;
    border-color: black !important;
}
.nav-link:hover{
    border-color: black !important;
}
.nav{
    border-color: black !important;
}
	       `;
	       document.head.appendChild(style);
        }
    }
}