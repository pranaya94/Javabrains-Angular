var MoreDirectivesModule = angular.module("moreDirectivesApp",[]);
MoreDirectivesModule.controller("MoreDirectivesCtrl",MoreDirectivesCtrl);

function MoreDirectivesCtrl(){

	this.obj = [
	{name:"pdawg",age:23},
	{name:"tman",age:19}];
}