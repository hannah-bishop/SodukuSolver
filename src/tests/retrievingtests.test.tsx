import {
  findStartingSpace,
  getSpaceColumn,
  getSpaceSquare,
} from "../ts/retrivingFunctions";
import { Space } from "../ts/sodukuSolver";
import { expect, test } from "vitest";

test("Check column retriving is correct", () => {
  const space1: Space = { row: 0, column: 3 };
  const soduku1 = [
    ["4", "1", "", "", "6", "", "", "7", ""],
    ["", "", "3", "", "8", "5", "", "", "9"],
    ["", "2", "", "3", "7", "", "5", "", "1"],
    ["", "3", "", "6", "", "9", "2", "5", ""],
    ["6", "", "", "5", "", "1", "", "", ""],
    ["", "", "9", "", "2", "", "", "", "3"],
    ["", "", "6", "2", "", "", "7", "4", "5"],
    ["", "", "", "4", "", "6", "8", "", ""],
    ["2", "8", "4", "", "", "", "1", "9", "6"],
  ];
  expect(getSpaceColumn(space1, soduku1)).toEqual([
    "",
    "",
    "3",
    "6",
    "5",
    "",
    "2",
    "4",
    "",
  ]);
});

test("Check middle square retriving is correct", () => {
  const space1: Space = { row: 5, column: 3 };
  const soduku1 = [
    ["4", "1", "", "", "6", "", "", "7", ""],
    ["", "", "3", "", "8", "5", "", "", "9"],
    ["", "2", "", "3", "7", "", "5", "", "1"],
    ["", "3", "", "6", "", "9", "2", "5", ""],
    ["6", "", "", "5", "", "1", "", "", ""],
    ["", "", "9", "", "2", "", "", "", "3"],
    ["", "", "6", "2", "", "", "7", "4", "5"],
    ["", "", "", "4", "", "6", "8", "", ""],
    ["2", "8", "4", "", "", "", "1", "9", "6"],
  ];
  //epect(findStartingSpace(space1)).toEqual({ row: 6, column: 0 });
  expect(getSpaceSquare(space1, soduku1)).toEqual([
    "6",
    "",
    "9",
    "5",
    "",
    "1",
    "",
    "2",
    "",
  ]);
});

test("Check top-right square retriving is correct", () => {
  const space1: Space = { row: 1, column: 1 };
  const soduku1 = [
    ["4", "1", "", "", "6", "", "", "7", ""],
    ["", "", "3", "", "8", "5", "", "", "9"],
    ["", "2", "", "3", "7", "", "5", "", "1"],
    ["", "3", "", "6", "", "9", "2", "5", ""],
    ["6", "", "", "5", "", "1", "", "", ""],
    ["", "", "9", "", "2", "", "", "", "3"],
    ["", "", "6", "2", "", "", "7", "4", "5"],
    ["", "", "", "4", "", "6", "8", "", ""],
    ["2", "8", "4", "", "", "", "1", "9", "6"],
  ];
  expect(getSpaceSquare(space1, soduku1)).toEqual([
    "4",
    "1",
    "",
    "",
    "",
    "3",
    "",
    "2",
    "",
  ]);
});
