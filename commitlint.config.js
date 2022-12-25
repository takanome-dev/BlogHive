module.exports = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "scope-empty": [0, "always"],
    "type-enum": [
      2,
      "always",
      [
        "feat",
        "fix",
        "docs",
        "style",
        "refactor",
        "release",
        "revert",
        "perf",
        "test",
        "deps",
        "chore",
        "wip",
      ],
    ],
    "subject-case": [2, "always", "lower-case"],
  },
};
