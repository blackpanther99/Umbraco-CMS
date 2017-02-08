(function () {
    "use strict";

    function PartialViewMacrosCreateController($scope, codefileResource, $location, navigationService) {

        var vm = this;
        var node = $scope.dialogOptions.currentNode;

        vm.snippets = [];
        vm.showSnippets = false;
        vm.creatingFolder = false;

        vm.createPartialViewMacro = createPartialViewMacro;
        vm.showCreateFolder = showCreateFolder;
        vm.createFolder = createFolder;
        vm.showCreateFromSnippet = showCreateFromSnippet;

        function onInit() {
            codefileResource.getSnippets('partialViewMacros')
                .then(function(snippets) {
                    vm.snippets = snippets;
                });
        }

        function createPartialViewMacro(selectedSnippet) {

            var snippet = null;

            if(selectedSnippet && selectedSnippet.fileName) {
                snippet = selectedSnippet.fileName;
            }

            $location.path("/developer/partialviewmacros/edit/" + node.id).search("create", "true").search("snippet", snippet);
            navigationService.hideMenu();

        }

        function showCreateFolder() {
            vm.creatingFolder = true;
        }

        function createFolder() {

        }
        
        function showCreateFromSnippet() {
            vm.showSnippets = true;
        }
        
        onInit();

    }

    angular.module("umbraco").controller("Umbraco.Editors.PartialViewMacros.CreateController", PartialViewMacrosCreateController);
})();
