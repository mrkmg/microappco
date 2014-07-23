/// <reference path="lib/jquery.d.ts" />

class MicroApp {
	public AppID:string = "MicroApp";
	public TargetDiv:string = "#Main";

	private InternalApp:jQueryStatic;

	constructor(AppID:string, TargetDiv:string){
		this.InternalApp = $(TargetDiv);
	}


}