import { Component, OnInit } from '@angular/core';
import { AppsStateService } from './states/app.state';
import { Observable } from 'rxjs';
import { IPlayer } from './interfaces/player.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  players$: Observable<IPlayer[]> = this.appState.players$;

  constructor(private appState: AppsStateService) {
  }

  ngOnInit(): void {
    this.appState.addPlayer({
      id: "1",
      life: 40,
      bgColour: "#27ae60",
      textColour: "#2c3e50",
      orientation: 180
    });

    this.appState.addPlayer({
      id: "2",
      life: 40,
      bgColour: "#2980b9",
      textColour: "#ecf0f1",
      orientation: 180
    });
    
    this.appState.addPlayer({
      id: "3",
      life: 40,
      bgColour: "#2c3e50",
      textColour: "#ecf0f1",
      orientation: 0
    });

    this.appState.addPlayer({
      id: "4",
      life: 40,
      bgColour: "#ecf0f1",
      textColour: "#2c3e50",
      orientation: 0
    });
    
    
  }


  onDecrement(player: IPlayer, amount: number) {
    this.appState.decrementLife(player, amount);
  }

  onIncrement(player: IPlayer, amount: number) {
    this.appState.incrementLife(player, amount);
  }
}
