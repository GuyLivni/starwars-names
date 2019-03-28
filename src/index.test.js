var expect = require("chai").expect;
var starWars = require("./index");

describe("starwars-names", function() {
  describe("starwars-names", function() {
    it("should be an array of strings", function() {
      expect(starWars.all).to.satisfy(isArrayOfStrings);

      function isArrayOfStrings(array) {
        return array.every(function(item) {
          return typeof item === "string";
        });
      }
    });

    it("should contain Guy Skywalker", function() {
      expect(starWars.all).to.include("Guy Skywalker");
    });
  });

  describe("random", function() {
    it("should return a random item from starwars.all", function() {
      var randomItem = starWars.random();
      expect(starWars.all).to.include(randomItem);
    });
  });
});
