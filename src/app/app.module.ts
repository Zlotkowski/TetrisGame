import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StartPageComponent } from './start-page/start-page.component';
import { IntroComponent } from './start-page/intro/intro.component';
import { PlayerFormComponent } from './start-page/player-form/player-form.component';
import { GameEngineComponent } from './game-engine/game-engine.component';
import { GameInfoComponent } from './game-engine/game-info/game-info.component';
import { RouterModule } from '@angular/router';
import { ScoreListComponent } from './game-engine/score-list/score-list.component';
import { HttpClientModule } from '@angular/common/http';
import { ScoreListPipe } from './score-list.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TetrisCoreModule } from 'ngx-tetris';
import { GameInstructionComponent } from './game-engine/game-instruction/game-instruction.component';
import { GameActionsComponent } from './game-engine/game-actions/game-actions.component';
import { FollowMeComponent } from './game-engine/follow-me/follow-me.component';
import { HotkeyModule } from 'angular2-hotkeys';
import { GameActionsPipe } from './game-actions.pipe';

@NgModule({
  declarations: [
    AppComponent,
    StartPageComponent,
    IntroComponent,
    PlayerFormComponent,
    GameEngineComponent,
    GameInfoComponent,
    ScoreListComponent,
    ScoreListPipe,
    GameInstructionComponent,
    GameActionsComponent,
    FollowMeComponent,
    GameActionsPipe,
  ],
  imports: [
    BrowserModule,
    TetrisCoreModule,
    RouterModule.forRoot([
      { path: 'start-page', component: StartPageComponent },
      { path: 'game-engine/:color', component: GameEngineComponent },
      { path: '**', redirectTo: '/start-page', pathMatch: 'full' },
    ]),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    HotkeyModule.forRoot(),
  ],
  providers: [ScoreListPipe, GameActionsPipe],
  bootstrap: [AppComponent],
})
export class AppModule {}
