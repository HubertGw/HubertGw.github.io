import moment from "moment";
import {
  getCurrentTime,
  getLastElm,
  checkIfSameCoordinate,
  checkIfLstIncludesCoordinate,
  checkIfSink,
  isWinner,
  whichShipCoordinateIsBelong,
  findShipCoordinates,
  findSinkShipNameOfCoordinate,
  makeNewMessages,
  makeMsgForWrongTiles,
  makeMsgForSelectingTiles,
  makeMsgForSinkShip,
  makeMsgForShot,
  validateShipTiles,
} from "./utils";

describe("getCurrentTime", () => {
  it("returns a string in the format of LTS", () => {
    const currentTime = getCurrentTime();
    expect(currentTime).toMatch(/\d{2}:\d{2}:\d{2}\s\w{2}/);
  });
});

describe("getLastElm", () => {
  it("returns the last element of an array", () => {
    const arr = [1, 2, 3];
    expect(getLastElm(arr)).toEqual(3);
  });

  it("returns undefined if the array is empty", () => {
    const arr = [];
    expect(getLastElm(arr)).toBeUndefined();
  });
});

describe("checkIfSameCoordinate", () => {
  it("returns true if the two coordinates have the same row and column", () => {
    const coord1 = { row: 0, column: 0 };
    const coord2 = { row: 0, column: 0 };
    expect(checkIfSameCoordinate(coord1, coord2)).toBe(true);
  });

  it("returns false if the two coordinates have different row or column", () => {
    const coord1 = { row: 0, column: 0 };
    const coord2 = { row: 1, column: 0 };
    expect(checkIfSameCoordinate(coord1, coord2)).toBe(false);
  });
});

describe("checkIfLstIncludesCoordinate", () => {
  it("returns true if the list of coordinates includes the checked coordinate", () => {
    const lst = [{ row: 0, column: 0 }, { row: 1, column: 1 }];
    const coord = { row: 1, column: 1 };
    expect(checkIfLstIncludesCoordinate(lst, coord)).toBe(true);
  });

  it("returns false if the list of coordinates does not include the checked coordinate", () => {
    const lst = [{ row: 0, column: 0 }, { row: 1, column: 1 }];
    const coord = { row: 2, column: 2 };
    expect(checkIfLstIncludesCoordinate(lst, coord)).toBe(false);
  });
});

describe("checkIfSink", () => {
  it("returns true if all the given coordinates are included in the shot", () => {
    const coordinates = [{ row: 0, column: 0 }, { row: 0, column: 1 }];
    const shot = [{ row: 0, column: 0 }, { row: 0, column: 1 }];
    expect(checkIfSink(coordinates, shot)).toBe(true);
  });

  it("returns false if not all the given coordinates are included in the shot", () => {
    const coordinates = [{ row: 0, column: 0 }, { row: 0, column: 1 }];
    const shot = [{ row: 0, column: 0 }];
    expect(checkIfSink(coordinates, shot)).toBe(false);
  });
});
