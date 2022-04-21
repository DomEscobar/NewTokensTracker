import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseService } from '../core/baseService';
import { TokenModel } from '../+models/Token.model';

@Injectable({
  providedIn: 'root'
})
export class BitQueryApi extends BaseService {

  constructor(injector: Injector) {
    super(injector);
  }

  getTokens(): Observable<TokenModel[]> {
    return this.get<TokenModel[]>(`tokens`);
  }
}
