import { Injectable } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class CacheService {
    private cache = new Map<string, HttpResponse<any>>();

    get(key: string): HttpResponse<any> | undefined {
        return this.cache.get(key);
    }

    put(key: string, value: HttpResponse<any>): void {
        this.cache.set(key, value);
    }

    clear(): void {
        this.cache.clear();
    }
}