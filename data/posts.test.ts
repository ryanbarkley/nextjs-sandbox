import {
  formatSentenceCase,
  formatTitleCase,
  buildPostSlug,
  parsePostSlug,
} from "./posts";

describe("formatSentenceCase", () => {
  test("formats correctly", () => {
    expect(formatSentenceCase("test lowercase string")).toEqual(
      "Test lowercase string"
    );
  });
});

describe("formatTitleCase", () => {
  test("formats correctly", () => {
    expect(formatTitleCase("test lowercase string")).toEqual(
      "Test Lowercase String"
    );
  });
});

describe("buildPostSlug", () => {
  test("builds correctly", () => {
    expect(buildPostSlug({ title: "test lowercase string", id: 1 })).toEqual(
      "1-test-lowercase-string"
    );
  });
});

describe("parsePostSlug", () => {
  test("parses correctly", () => {
    expect(parsePostSlug("1-test-lowercase-string")).toEqual(1);
  });
});
