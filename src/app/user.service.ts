import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) {

   }
   create(data: any){
    return this.http.post("https://3306-steep-tree-96465010.eu-ws2.runcode.io/user", data)
   }
   read(){
    return this.http.get("https://3306-steep-tree-96465010.eu-ws2.runcode.io/user")
   }
   update(data: any, id:number){
    return this.http.patch("https://3306-steep-tree-96465010.eu-ws4.runcode.io/user/"+id, data)
   }
   delete(id:number){
    return this.http.delete("https://3306-steep-tree-96465010.eu-ws4.runcode.io/user/"+id)
   }
   login(data: any){
    return this.http.post("https://3306-steep-tree-96465010.eu-ws2.runcode.io/user/login", data)
   }
}
