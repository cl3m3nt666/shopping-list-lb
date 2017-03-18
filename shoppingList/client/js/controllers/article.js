/**
 * Created by clement on 27/02/2017.
 */

angular
  .module('app')
  .controller('ArticleController', ['Article', '$scope', '$state',
    function(Article, $scope, $state) {
      $scope.article = {
        name: "Pain",
        amount: 1,
        description: ""
      };
      $scope.articles = Article.find();

      $scope.addArticle = function() {
        Article.create( a = {
            name: $scope.article.name,
            amount: $scope.article.amount,
            description: $scope.article.description
          });
        $state.reload();
      };

      $scope.removeArticle = function(ArticleId) {
        Article.deleteById({id: ArticleId}).$promise
          .then(function(response) {
            if (response.count == 1 ){
              console.log("deleted : OK")
            } else {
              console.log("deleted : error");
            }

          });
        $state.reload();
      };
    }]);
