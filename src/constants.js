import { getCurrentTime } from "./helpers";

export const columnLabel = "ABCDEFGHIJ";

export const NEW_OPPONENT = "NEW_OPPONENT";
export const NEW_TEAM = "NEW_TEAM";
export const NEW_MESSAGE = "NEW_MESSAGE";
export const OPPONENT_LEFT = "OPPONENT_LEFT";
export const NEW_GAME = "NEW_GAME";
export const CLEAR_TILES = "CLEAR_TILES";
export const SELECT_TILE = "SELECT_TILE";
export const CONFIRM_TILES = "CONFIRM_TILES";
export const COMPLETE_SELECTION = "COMPLETE_SELECTION";
export const SET_OPPONENT_SHIPS = "SET_OPPONENT_SHIPS";
export const OPPONENTS_TURN = "OPPONENTS_TURN";
export const SHOT = "SHOT";
export const OPPONENT_SHOT = "OPPONENT_SHOT";
export const END = "END";

export const MISSED = "MISSED";
export const SELECTED = "SELECTED";
export const CONFIRMED = "CONFIRMED";
export const HIT = "HIT";

export const INITIAL_MSG_NO_OPPONENT =
  "Brak graczy, oczekuję na dołączenie...";
export const INITIAL_MSG_HAVE_OPPONENT =
  "Drużyna dołączyła do pokoju!";
export const MSG_HAVE_OPPONENT =
  "Drużyna dołączyła do pokoju. Gra rozpoczęta!";
export const MSG_NO_OPPONENT =
  "Jeden z graczy opuścił grę";
export const MSG_INVALID_TILES =
  "Pola muszą być złączone poziomo lub pionowo";
export const MSG_ATTACK = "Twoja runda. Do ataku!.";
export const MSG_DEFEND = "Runda przeciwnika.";
export const MSG_WAITING_FOR_PLAYER = "Oczekiwanie na dołączenie innych graczy.";
export const MSG_WIN = "Wygrana!";
export const MSG_LOSE = "Przegrana.";
export const MSG_OPPONENT_PLACING_SHIPS = "Przeciwnik umieszcza okręty...";
export const MSG_ENTER_NEW_GAME = "[Nowa Gra] Rozpoczęto nową grę...";

export const ships = [
  { name: "Transportowiec", numOfTiles: 5 },
  { name: "Okręt", numOfTiles: 4 },
  { name: "Krążownik", numOfTiles: 3 },
  { name: "Łódź-podwodna", numOfTiles: 3 },
  { name: "Niszczyciel", numOfTiles: 2 },
];

// initial state used in the hook useGame
export const initialState = () => {
  return {
    gameState: 0,
    shipTilesState: 0,
    messages: [{ time: getCurrentTime(), message: "Witaj w Water Warriors!" }],
    myShips: [],
    myShipsShot: [],
    opponentShips: null,
    chosenTiles: [],
    opponentShipsShot: [],
    opponent: undefined,
    gotInitialOpponent: false,
    haveSendInitialMsg: false,
  };
};
