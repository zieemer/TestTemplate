
describe('home ctrl is working', function () {

    var scope;
    var ctrlConstructor;

    beforeEach(module('app'));

    beforeEach(inject(function ($controller, $rootScope) {


        scope = $rootScope.$new();
        ctrlConstructor = $controller; //('HomeCtrl', {$scope: scope});

        
    }));

    it('should have controll has a tiltle', function () {

        var ctrl = ctrlConstructor("HomeCtrl", { '$scope': scope })

        expect(scope.title).to.equal("Home");
    });


});
