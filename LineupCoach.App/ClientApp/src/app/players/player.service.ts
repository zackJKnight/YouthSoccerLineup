import { Injectable } from '@angular/core';
import { Player } from './player';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  public players: Player[];

  constructor() {
    this.players = PLAYERS;
  }

  savePlayers(players: Player[]) {
    this.players = players;
  }

  getPlayerById(playerId: number): Player {
    const playerById = this.players.filter(player => player.id === playerId);
    if (!playerById[0].firstName) {
      throw new Error(`Incorrect match for Player with id: ${playerId}`);
    }
    return playerById[0];
  }

  getPlayers(): Observable<Player[]> {
    const subject = new Subject<Player[]>();
    setTimeout(() => {
      subject.next(this.players);
      subject.complete();
    }, 1);
    return subject;
  }

  getPresentPlayers() {
    return this.players
      .filter(player => player.isPresent);
  }

  getPositionNameByPreferenceRank(
    player: Player,
    currentPrefRank: number
  ): string {
    let result: string;
    if (currentPrefRank >= 0 &&
      (typeof player.positionPreferenceRank !== 'undefined') &&
      currentPrefRank + 1 <= player.positionPreferenceRank.ranking.length
    ) {
      result = player.positionPreferenceRank.ranking[currentPrefRank];
    }
    return result;
  }
  playerPlacementIsComplete(playerId: number, periodCount: number) {
    const player: Player = this.players.filter(plyer =>
      plyer.id === playerId)[0];
    return (player.benchIds.length + player.startingPositionIds.length) === periodCount;
  }

  removeBenchPositions() {
    this.players.forEach(player => player.benchIds = []);
    this.savePlayers(this.players);
  }

  removeStartingPositions() {
    this.players.forEach(player => player.startingPositionIds = []);
    this.savePlayers(this.players);
  }

  resetPlayerAttendance() {
    this.players = PLAYERS;
    this.savePlayers(this.players);
  }
}
// TODO dynamically add an empty player (probably bad idea) or better handle empties in placement
const PLAYERS: Player[] = [
  {
    id: 1,
    firstName: 'B.H.',
    lastName: 'Green',
    isPresent: true,
    positionPreferenceRank: {
      ranking: [
        'goalie',
        'defense',
        'forward',
        'mid',
        'bench'
      ]

    },
    startingPositionIds: [],
    placementScore: 0,
    benchIds: []
  },
  {
    id: 2,
    firstName: 'E.C.',
    lastName: 'Blue',
    isPresent: true,
    positionPreferenceRank: {
      ranking: [
        'goalie',
        'forward',
        'defense',
        'mid',
        'bench'
      ]
    },
    startingPositionIds: [],
    placementScore: 0,
    benchIds: []
  },
  {
    id: 3,
    firstName: 'G.R.',
    lastName: 'Orange',
    isPresent: true,
    positionPreferenceRank: {
      ranking: [
        'mid',
        'forward',
        'goalie',
        'defense',
        'bench'
      ]
    },
    startingPositionIds: [],
    placementScore: 0,
    benchIds: []
  },
  {
    id: 4,
    firstName: 'G.G.',
    lastName: 'Brown',
    isPresent: true,
    positionPreferenceRank: {
      ranking: [
        'forward',
        'defense',
        'goalie',
        'mid',
        'bench'
      ]
    },
    startingPositionIds: [],
    placementScore: 0,
    benchIds: []
  },
  {
    id: 5,
    firstName: 'J.F.',
    lastName: 'Red',
    isPresent: true,
    positionPreferenceRank: {
      ranking: [
        'defense',
        'forward',
        'mid',
        'goalie',
        'bench'
      ]
    },
    startingPositionIds: [],
    placementScore: 0,
    benchIds: []
  },
  {
    id: 6,
    firstName: 'M.K.',
    lastName: 'Turquiose',
    isPresent: true,
    positionPreferenceRank: {
      ranking: [
        'mid',
        'defense',
        'goalie',
        'forward',
        'bench'
      ]
    },
    startingPositionIds: [],
    placementScore: 0,
    benchIds: []
  },
  {
    id: 7,
    firstName: 'B.S.',
    lastName: 'Cannon',
    isPresent: true,
    positionPreferenceRank: {
      ranking: [
        'mid',
        'forward',
        'defense',
        'goalie',
        'bench'
      ]
    },
    startingPositionIds: [],
    placementScore: 0,
    benchIds: []
  },
  {
    id: 8,
    firstName: 'J.C.',
    lastName: 'Mauve',
    isPresent: true,
    positionPreferenceRank: {
      ranking: [
        'goalie',
        'mid',
        'forward',
        'defense',
        'bench'
      ]
    },
    startingPositionIds: [],
    placementScore: 0,
    benchIds: []
  },
  {
    id: 9,
    firstName: 'K.T.',
    lastName: 'Yellow',
    isPresent: true,
    positionPreferenceRank: {
      ranking: [
        'forward',
        'mid',
        'defense',
        'goalie',
        'bench'
      ]
    },
    startingPositionIds: [],
    placementScore: 0,
    benchIds: []
  },
  {
    id: 10,
    firstName: 'M.C.',
    lastName: 'LiteUrple',
    isPresent: true,
    positionPreferenceRank: {
      ranking: [
        'goalie',
        'mid',
        'forward',
        'defense',
        'bench'
      ]
    },
    startingPositionIds: [],
    placementScore: 0,
    benchIds: []
  },
  {
    id: 11,
    firstName: 'P.F.',
    lastName: 'Urple',
    isPresent: true,
    positionPreferenceRank: {
      ranking: [
        'goalie',
        'mid',
        'defense',
        'forward',
        'bench'
      ]
    },
    startingPositionIds: [],
    placementScore: 0,
    benchIds: []
  },
  {
    id: 12,
    firstName: 'Br.E.',
    lastName: 'Clear',
    isPresent: true,
    positionPreferenceRank: {
      ranking: [
        'forward',
        'goalie',
        'mid',
        'defense',
        'bench'
      ]
    },
    startingPositionIds: [],
    placementScore: 0,
    benchIds: []
  }
];

