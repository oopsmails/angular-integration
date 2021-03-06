import { Component, OnInit } from '@angular/core';
import { OauthToken } from '@app/shared/model/oauthToken';
import { UserTokenService } from '@app/shared/services/user-token/user-token.service';

@Component({
  selector: 'app-oauth-token',
  templateUrl: './oauth-token.component.html'
})
export class OauthTokenComponent implements OnInit {

  oauthToken: OauthToken;
  userTokens = new Array<string>();

  constructor(private usertokenService: UserTokenService) { }

  ngOnInit() {
    this.loadUserTokens();
  }

  loadUserTokens(): void {
    this.usertokenService.getUserTokenSpringCloundAll() //
      .subscribe(oauthToken => {
        this.oauthToken = oauthToken;
        window.sessionStorage.setItem('token', JSON.stringify(oauthToken));
        this.userTokens.push(oauthToken.access_token);
        this.userTokens.push(oauthToken.refresh_token);
      },
        err => {
          console.log(err);
        });
  }
}
