import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { TokenModel } from './+models/Token.model';
import { BitQueryApi } from './+services/bitquery.api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'coinodamus';
  tokens$: Observable<TokenModel[]>;

  constructor(private readonly _bitQueryApi: BitQueryApi) {
    this.tokens$ = this._bitQueryApi.getTokens();
  }

}

