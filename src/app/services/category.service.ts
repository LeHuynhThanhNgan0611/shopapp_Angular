import { Injectable } from "@angular/core";
import { environment } from "../environments/environment";
import { HttpClient, HttpParams } from "@angular/common/http";
import { Category } from "../models/category";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
  })
  export class CategoryService {
    private apiGetCategories  = `${environment.apiBaseUrl}/categories`;
  
    constructor(private http: HttpClient) { }
    getCategories(page: number, limit: number):Observable<Category[]> {
      const params = new HttpParams()
        .set('page', page.toString())
        .set('limit', limit.toString());     
        return this.http.get<Category[]>(this.apiGetCategories, { params });           
    }
  }  