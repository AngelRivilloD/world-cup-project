import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './components/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CacheInterceptor } from 'src/app/core/interceptor/cache.interceptor';
import { MaterialModule } from './material.module';

// Components
import { AppComponent } from './app.component';
import { TeamMembersComponent } from './components/sidebar/team-members/team-members.component';
import { TeamSelectorComponent } from './components/sidebar/team-selector/team-selector.component';
import { PlayerSelectedComponent } from './components/my-squad/player-selected/player-selected.component';
import { PositionRowComponent } from './components/my-squad/position-row/position-row.component';
import { PlayerComponent } from './components/sidebar/player/player.component';
import { PersonPlaceholderComponent } from './components/shared/person-placeholder/person-placeholder.component';
import { CoachComponent } from './components/my-squad/coach/coach.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { MySquadComponent } from './components/my-squad/my-squad.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TeamMembersComponent,
    TeamSelectorComponent,
    PlayerSelectedComponent,
    PositionRowComponent,
    PlayerComponent,
    PersonPlaceholderComponent,
    CoachComponent,
    SidebarComponent,
    MySquadComponent
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
