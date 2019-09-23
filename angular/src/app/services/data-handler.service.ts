//////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////  IMPORTS
import { Injectable }		from '@angular/core';
import { Subject }			from 'rxjs';

//////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////  DEFINE INJECTABLE
@Injectable({
	providedIn: 'root'
})

//////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////  EXPORT CLASS
export class DataHandlerService {

	// Core
	data: any = {};

	// Onservables
	dataSub$: Subject<any> = new Subject();

	////////////////////////////////////
	constructor() { }

	////////////////////////////////////
	registerData(key, data) {
		this.data[key] = data;
		this.dataSub$.next(this.data);
	}
}
