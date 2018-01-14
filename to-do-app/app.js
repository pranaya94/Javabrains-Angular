angular.module("toDoApp",[]).controller("toDoCtrl",toDoCtrl);

function toDoCtrl(){
	this.test = "hello";
	this.taskList = [];
	this.buttonText = "Edit";
	this.editModeFlag = false;
	this.updatedTask = "";

	this.add = function(){
		this.taskList.push(this.newTask);		
		console.log(this.taskList);
	}
	
	this.editMode = function(){
		if(this.editModeFlag === false){
		this.editModeFlag = true;
		this.buttonText = "Done";
		}
		else{
			this.editModeFlag = false;
			this.buttonText = "Edit";			
		}
	}
	
	this.delete = function(index){
		this.taskList.splice(index,1)
	}
}
