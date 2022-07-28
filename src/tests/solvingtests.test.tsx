import { solvePuzzle } from "../sodukuSolver";
import { expect, test } from "vitest";

test("Check easy test is solved", () => {
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
  expect(solvePuzzle(soduku1)).toEqual([
    ["4", "1", "5", "9", "6", "2", "3", "7", "8"],
    ["7", "6", "3", "1", "8", "5", "4", "2", "9"],
    ["9", "2", "8", "3", "7", "4", "5", "6", "1"],
    ["8", "3", "1", "6", "4", "9", "2", "5", "7"],
    ["6", "7", "2", "5", "3", "1", "9", "8", "4"],
    ["5", "4", "9", "8", "2", "7", "6", "1", "3"],
    ["3", "9", "6", "2", "1", "8", "7", "4", "5"],
    ["1", "5", "7", "4", "9", "6", "8", "3", "2"],
    ["2", "8", "4", "7", "5", "3", "1", "9", "6"],
  ]);
});

test("Check medium test is solved", () => {
  const soduku1 = [
    ["x", "x", "3", "9", "1", "6", "x", "x", "8"],
    ["2", "x", "x", "4", "x", "x", "x", "x", "9"],
    ["x", "x", "x", "3", "x", "x", "x", "7", "x"],
    ["x", "x", "x", "x", "9", "x", "6", "2", "x"],
    ["x", "4", "x", "x", "x", "x", "8", "1", "x"],
    ["x", "x", "x", "x", "6", "3", "x", "9", "4"],
    ["9", "x", "x", "x", "x", "x", "x", "x", "1"],
    ["1", "8", "5", "x", "x", "x", "7", "x", "6"],
    ["x", "7", "x", "x", "x", "1", "x", "8", "2"],
  ];
  expect(solvePuzzle(soduku1)).toEqual([
    ["7", "5", "3", "9", "1", "6", "2", "4", "8"],
    ["2", "1", "8", "4", "7", "5", "3", "6", "9"],
    ["4", "9", "6", "3", "8", "2", "1", "7", "5"],
    ["5", "3", "1", "8", "9", "4", "6", "2", "7"],
    ["6", "4", "9", "5", "2", "7", "8", "1", "3"],
    ["8", "2", "7", "1", "6", "3", "5", "9", "4"],
    ["9", "6", "2", "7", "3", "8", "4", "5", "1"],
    ["1", "8", "5", "2", "4", "9", "7", "3", "6"],
    ["3", "7", "4", "6", "5", "1", "9", "8", "2"],
  ]);
});

test("Check hard test is solved", () => {
  const soduku1 = [
    ["4", "x", "x", "9", "x", "x", "8", "6", "x"],
    ["x", "x", "x", "x", "x", "7", "2", "x", "x"],
    ["x", "3", "x", "2", "5", "x", "x", "x", "x"],
    ["x", "1", "7", "x", "x", "5", "x", "2", "9"],
    ["x", "9", "x", "x", "2", "6", "x", "x", "x"],
    ["x", "6", "x", "x", "9", "x", "x", "7", "x"],
    ["x", "x", "x", "4", "x", "x", "5", "x", "x"],
    ["7", "x", "6", "x", "x", "x", "9", "x", "x"],
    ["x", "x", "x", "x", "6", "2", "4", "x", "x"],
  ];
  expect(solvePuzzle(soduku1)).toEqual([
    ["4", "7", "2", "9", "1", "3", "8", "6", "5"],
    ["9", "5", "1", "6", "8", "7", "2", "4", "3"],
    ["6", "3", "8", "2", "5", "4", "7", "9", "1"],
    ["8", "1", "7", "3", "4", "5", "6", "2", "9"],
    ["3", "9", "4", "7", "2", "6", "1", "5", "8"],
    ["2", "6", "5", "8", "9", "1", "3", "7", "4"],
    ["1", "2", "3", "4", "7", "9", "5", "8", "6"],
    ["7", "4", "6", "5", "3", "8", "9", "1", "2"],
    ["5", "8", "9", "1", "6", "2", "4", "3", "7"],
  ]);
});