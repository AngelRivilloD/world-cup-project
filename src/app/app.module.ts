import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CacheInterceptor } from 'src/app/core/interceptor/cache.interceptor';
import { CoachComponent } from './components/my-squad/coach/coach.component';
import { PlayerSelectedComponent } from './components/my-squad/player-selected/player-selected.component';
import { PositionRowComponent } from './components/my-squad/position-row/position-row.component';
import { PlayerComponent } from './components/team/player/player.component';
import { PlayerSelectedPlaceholderComponent } from './components/my-squad/player-selected-placeholder/player-selected-placeholder.component';
import { TeamSelectorComponent } from './components/team/team-selector/team-selector.component';
import { TeamMembersComponent } from './components/team/team-members/team-members.component';
import { MaterialModule } from './material.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TeamMembersComponent,
    TeamSelectorComponent,
    PlayerSelectedComponent,
    PositionRowComponent,
    PlayerComponent,
    PlayerSelectedPlaceholderComponent,
    CoachComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: CacheInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
