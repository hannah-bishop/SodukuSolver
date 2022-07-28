import {
  findStartingSpace,
  getSpaceColumn,
  getSpaceSquare,
} from "../retrivingFunctions";
import { Space } from "../sodukuSolver";
import { expect, test } from "vitest";

test("Check column retriving is correct", () => {
  const space1: Space = { row: 0, column: 3 };
  const soduku1 = [
    ["4", "1", "x", "x", "6", "x", "x", "7", "x"],
    ["x", "x", "3", "x", "8", "5", "x", "x", "9"],
    ["x", "2", "x", "3", "7", "x", "5", "x", "1"],
    ["x", "3", "x", "6", "x", "9", "2", "5", "x"],
    ["6", "x", "x", "5", "x", "1", "x", "x", "x"],
    ["x", "x", "9", "x", "2", "x", "x", "x", "3"],
    ["x", "x", "6", "2", "x", "x", "7", "4", "5"],
    ["x", "x", "x", "4", "x", "6", "8", "x", "x"],
    ["2", "8", "4", "x", "x", "x", "1", "9", "6"],
  ];
  expect(getSpaceColumn(space1, soduku1)).toEqual([
    "x",
    "x",
    "3",
    "6",
    "5",
    "x",
    "2",
    "4",
    "x",
  ]);
});

test("Check middle square retriving is correct", () => {
  const space1: Space = { row: 5, column: 3 };
  const soduku1 = [
    ["4", "1", "x", "x", "6", "x", "x", "7", "x"],
    ["x", "x", "3", "x", "8", "5", "x", "x", "9"],
    ["x", "2", "x", "3", "7", "x", "5", "x", "1"],
    ["x", "3", "x", "6", "x", "9", "2", "5", "x"],
    ["6", "x", "x", "5", "x", "1", "x", "x", "x"],
    ["x", "x", "9", "x", "2", "x", "x", "x", "3"],
    ["x", "x", "6", "2", "x", "x", "7", "4", "5"],
    ["x", "x", "x", "4", "x", "6", "8", "x", "x"],
    ["2", "8", "4", "x", "x", "x", "1", "9", "6"],
  ];
  //expect(findStartingSpace(space1)).toEqual({ row: 6, column: 0 });
  expect(getSpaceSquare(space1, soduku1)).toEqual([
    "6",
    "x",
    "9",
    "5",
    "x",
    "1",
    "x",
    "2",
    "x",
  ]);
});

test("Check top-right square retriving is correct", () => {
  const space1: Space = { row: 1, column: 1 };
  const soduku1 = [
    ["4", "1", "x", "x", "6", "x", "x", "7", "x"],
    ["x", "x", "3", "x", "8", "5", "x", "x", "9"],
    ["x", "2", "x", "3", "7", "x", "5", "x", "1"],
    ["x", "3", "x", "6", "x", "9", "2", "5", "x"],
    ["6", "x", "x", "5", "x", "1", "x", "x", "x"],
    ["x", "x", "9", "x", "2", "x", "x", "x", "3"],
    ["x", "x", "6", "2", "x", "x", "7", "4", "5"],
    ["x", "x", "x", "4", "x", "6", "8", "x", "x"],
    ["2", "8", "4", "x", "x", "x", "1", "9", "6"],
  ];
  expect(getSpaceSquare(space1, soduku1)).toEqual([
    "4",
    "1",
    "x",
    "x",
    "x",
    "3",
    "x",
    "2",
    "x",
  ]);
});
