import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IPlayer } from 'src/app/interfaces/player.interface';

@Component({
  selector: 'app-play-space',
  templateUrl: './play-space.component.html',
  styleUrls: ['./play-space.component.scss']
})
export class PlaySpaceComponent {

  @Input() player: IPlayer | null;

  @Output() onDecrementChange: EventEmitter<number>;
  @Output() onIncrementChange: EventEmitter<number>;
  
  constructor() {
    this.player = null
    this.onDecrementChange = new EventEmitter<number>();
    this.onIncrementChange = new EventEmitter<number>();
  }

  get life(){
    return this.player?.life;
  }
  
  get textColour(){
    return this.player?.textColour;
  }

  get bgColour(){
    return this.player?.bgColour;
  }

  get orientation(){
    return this.player?.orientation;
  }

  onIncrement(amount: number) {
    this.onIncrementChange.emit(amount);
  }

  onDecrement(amount: number) {
    this.onDecrementChange.emit(amount);
  }
}
