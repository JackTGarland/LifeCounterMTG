import { Injectable } from "@angular/core";
import { StateService } from "./state.service";
import { IPlayer } from "../interfaces/player.interface";
import { Observable, find, map } from "rxjs";

interface AppState {
    players: IPlayer[]
}

const initialState: AppState = {
    players: []
};

@Injectable({
    providedIn: 'root'
})
export class AppsStateService extends StateService<AppState>{
    players$: Observable<IPlayer[]> = this.select(state => state.players);

    constructor() {
        super(initialState);
    }

    addPlayer(player: IPlayer) {
        this.setPlayers([...this.state.players, player]);
    }

    setPlayers(players: IPlayer[]) {
        this.setState({ players: [...players] });
    }

    decrementLife(player: IPlayer, amount: number) {
        let players = this.state.players;
        
        for (const element of players) {
            if(element.id == player.id){
                element.life -= amount;
            }           
        }

        this.setPlayers(players);
    }

    incrementLife(player: IPlayer, amount: number) {
        let players = this.state.players;
        
        for (const element of players) {
            if(element.id == player.id){
                element.life += amount;
            }           
        }

        this.setPlayers(players);
    }
}
