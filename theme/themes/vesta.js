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

#e6cdb8
#01806e
#99dbd3
#b33921

*/

/* Base Background(Not visible in Phone) */
#app{
    background: linear-gradient(hsla(0,0%,20%,.9),hsla(0,0%,20%,.9))
    !important;
}
/* Main Background */
.container-main{
    background: #e6cdb8 !important;
}
/* Buttons */
.btn{
    background: #01806e !important;
    color: #e6cdb8 !important;
    border-color: #b33921 !important;
}
/* Event Popups */
.modal-title{
    background: #e6cdb8 !important;
    color: #b33921 !important;
    border-color: #99dbd3 !important;
}
.modal-content{
    background: #e6cdb8 !important;
}
.interaction-modal-content{
    background: #99dbd3 !important;
}
.interaction-modal-content-message{
    background: #e6cdb8 !important;
}
/* Main Progress Bar */
.progress{
    background: #99dbd3 !important;
}
/* Your Progress */
.progress-bar{
    background: #01806e !important;
    color: #e6cdb8 !important;
}
/* Current Stats */
.stats-number{
    background: #01806e !important;
    color: #e6cdb8 !important;
}
/* Characters Img Background */
.img-thumbnail{
    background: #99dbd3 !important;
    border-color: #b33921 !important;
}
/* Family Tree Connectors */
.character-tree-family-wrapper{
    border-color: #01806e !important;
}
/* Character Skill Badges */
.badge-skills{
    background: #01806e !important;
}
/* Character Traits */
.badge-light{
    background: #99dbd3 !important;
}
/* Popups */
.popover{
    background: #99dbd3;
}
/* Footer Alert Box */
.alert{
    background: #99dbd3 !important;
    color: #b33921 !important;
    border-color: #b33921 !important;
}
/* Achievements */
.list-group-item{
    background: #99dbd3 !important;
}
.active{
    background: #99dbd3 !important;
    color: #b33921 !important;
    border-color: #b33921 !important;
}
.nav-link:hover{
    border-color: #b33921 !important;
}
.nav{
    border-color: #b33921 !important;
}
	       `;
	       document.head.appendChild(style);
        }
    }
}
