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
import { FormsModule } from '@angular/forms';
import { TetrisCoreModule } from 'ngx-tetris';
import { GameInstructionComponent } from './game-engine/game-instruction/game-instruction.component';
import { GameActionsComponent } from './game-engine/game-actions/game-actions.component';
import { FollowMeComponent } from './game-engine/follow-me/follow-me.component';
import { HotkeyModule } from 'angular2-hotkeys';
import { TetrisCoreComponent } from './game-engine/tetris-core/tetris-core.component';
import { ControllerComponent } from './game-engine/controller/controller.component';

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
    TetrisCoreComponent,
    ControllerComponent,
  ],
  imports: [
    BrowserModule,
    TetrisCoreModule,
    RouterModule.forRoot([
      { path: 'start-page', component: StartPageComponent },
      { path: 'game-engine', component: GameEngineComponent },
      { path: '**', redirectTo: '/start-page', pathMatch: 'full' },
    ]),
    HttpClientModule,
    FormsModule,
    HotkeyModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
