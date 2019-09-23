//////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////  IMPORTS
import { Injectable }			from '@angular/core';
import { HttpClient }			from '@angular/common/http';
import { DataHandlerService }	from './data-handler.service';
declare var require: any;

//////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////  DEFINE INJECTABLE
@Injectable({
	providedIn: 'root'
})

//////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////  EXPORT CLASS
export class DataTransportService {

	////////////////////////////////////
	constructor(private http:HttpClient, private sDataHandler:DataHandlerService) { }

	////////////////////////////////////
	get() {

		let tags = require("../../assets/json/tags.json");
		let npcs = require("../../assets/json/tags.json");
		this.sDataHandler.registerData("tags", tags );
		this.sDataHandler.registerData("npcs", npcs );

		this.http.get("/assets/json/_get.php")
		.subscribe((res) => {
			console.log("RES", res);
		});
	}

	////////////////////////////////////
	save() {
		this.http.post("/assets/json/_save.php", { key:"tags", data:[] })
		.subscribe(res => {
			console.log("SAved", res);
		});
	}
}
