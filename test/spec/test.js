describe('web app tests', function () {
    describe('shopping cart controller', function () {
        beforeEach(module('shopApp'));

        var controller;
        
        beforeEach(inject(function($controller) {
            controller = $controller;
        }));
        
        it('should update the line sub total when a product is added', function() {
            var $scope = {};
            controller('shoppingCartController', { $scope: $scope });
            $scope.lines[0].number = 3;
            console.log($scope);
            expect($scope.lines[0].subTotal()).toBe(167.97);
        });
        
        it('should update the order total when a product is added', function() {
            var $scope = {};
            controller('shoppingCartController', { $scope: $scope });
            $scope.lines[0].number = 2;
            expect($scope.total()).toBe(131.96);
        });
        
        it('should update the order total when a product is removed', function() {
            var $scope = {};
            controller('shoppingCartController', { $scope: $scope });
            $scope.removeLine($scope.lines[0]);
            expect($scope.total()).toBe(19.98);
        });
    });
});