import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TablesService {
  getTables(){
    return ["Home", "About me", "Projects"]
  }
}
