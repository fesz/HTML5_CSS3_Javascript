describe("Function throw dice", function() {

    it("should not return null", function() {
        expect(tira_dados()).not.toBeNull();
    });

    it("should return an integer", function() {
        expect(tira_dados()).toMatch(/\d{1,}/);
    });

    it("should return a number greater than zero", function() {
        expect(tira_dados()).toBeGreaterThan(0);
    });

    it("should return a number less than six", function() {
        expect(tira_dados()).toBeLessThan(7);
    });

    it("should return a number less than six", function() {
        expect(tira_dados()).toBeLessThan(7);
    });

    it("should return a number", function() {
        expect(tira_dados()).toEqual(jasmine.any(Number));
    });

});
