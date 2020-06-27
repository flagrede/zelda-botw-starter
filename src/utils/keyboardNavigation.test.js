import {
  getMatrixPositionFromIndex,
  getIndexFromMaxtrixPosition,
  goUp,
  goDown,
  goRight,
  goLeft,
} from "./keyboardNavigation";

describe("getMatrixPositionFromIndex", () => {
  it("should convert 6 to x:1, y:1 position", () => {
    // Given
    const index = 6;

    // When
    const result = getMatrixPositionFromIndex(index);

    // Then
    expect(result).toEqual({ x: 1, y: 1 });
  });

  it("should convert 15 to x:1, y:1 position", () => {
    // Given
    const index = 14;

    // When
    const result = getMatrixPositionFromIndex(index);

    // Then
    expect(result).toEqual({ x: 2, y: 4 });
  });
});

describe("getIndexFromMaxtrixPosition", () => {
  it("should convert x:1, y:1 position to 6", () => {
    // Given
    const position = { x: 1, y: 1 };

    // When
    const result = getIndexFromMaxtrixPosition(position);

    // Then
    expect(result).toEqual(6);
  });

  it("should convert x:1, y:1 position to 14", () => {
    // Given
    const position = { x: 2, y: 4 };

    // When
    const result = getIndexFromMaxtrixPosition(position);

    // Then
    expect(result).toEqual(14);
  });
});

describe("goUp", () => {
  it("should move to x:0, y:1", () => {
    // Given
    const position = { x: 1, y: 1 };

    // When
    const result = goUp(position);

    // Then
    expect(result).toEqual({ x: 0, y: 1 });
  });

  it("should move to x:1, y:1", () => {
    // Given
    const position = { x: 2, y: 1 };

    // When
    const result = goUp(position);

    // Then
    expect(result).toEqual({ x: 1, y: 1 });
  });
});

describe("goDown", () => {
  it("should move to x:2, y:1", () => {
    // Given
    const position = { x: 1, y: 1 };

    // When
    const result = goDown(position);

    // Then
    expect(result).toEqual({ x: 2, y: 1 });
  });

  it("should move to x:1, y:1", () => {
    // Given
    const position = { x: 0, y: 1 };

    // When
    const result = goDown(position);

    // Then
    expect(result).toEqual({ x: 1, y: 1 });
  });
});

describe("goRight", () => {
  it("should move to x:1, y:1", () => {
    // Given
    const position = { x: 1, y: 0 };

    // When
    const result = goRight(position);

    // Then
    expect(result).toEqual({ x: 1, y: 1 });
  });

  it("should move to x:1, y:1", () => {
    // Given
    const position = { x: 1, y: 0 };

    // When
    const result = goRight(position);

    // Then
    expect(result).toEqual({ x: 1, y: 1 });
  });
});

describe("goLeft", () => {
  it("should move to x:1, y:0", () => {
    // Given
    const position = { x: 1, y: 1 };

    // When
    const result = goLeft(position);

    // Then
    expect(result).toEqual({ x: 1, y: 0 });
  });

  it("should move to x:1, y:1", () => {
    // Given
    const position = { x: 1, y: 2 };

    // When
    const result = goLeft(position);

    // Then
    expect(result).toEqual({ x: 1, y: 1 });
  });
});
