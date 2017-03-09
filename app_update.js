
  var app = angular.module('todoApp', []); //angular module take two arguments, name of the module and array of dependencies.

// initialize list of todos
    app.controller('todoCtrl', function($scope){
        $scope.todos = [];

        $scope.todoAdd = function(){
          var newTodo={
            done: false,
            text: $scope.todoText,
            updateClick: false,
            text2: $scope.updateText
          }

            $scope.todos.push(newTodo);
            $scope.todoText = '';
            $scope.updateText = '';
           
        }

        $scope.todoStatus = function(todo) {
        	if (!todo.done) {
        		return 'incomplete';
        	} else {
        		return 'completed';
        	}       	
        }

        $scope.todoTotal = function() {
       		return $scope.todos.length;
        };

        $scope.todoIncomplete = function() {
       	var count = 0;
       		angular.forEach($scope.todos, function(todo) {
       			if(todo.done) {
       				count ++;
       			} 
       		});
       	return count;
        }

        $scope.todoCompleted = function() {
        var count = 0;
       		angular.forEach($scope.todos, function(todo) {
       			if(!todo.done) {
       				count ++;
       			} 
       		});
       	return count;
        }
      
        $scope.todoRemove = function(start){
          
          $scope.todos.splice(start, 1);
        }

        $scope.todoUpdate = function(todo) {
           todo.updateClick = true;
        }
        $scope.todoSave = function(todo) {
          todo.text2 = todo.text;
          todo.updateClick = false;
        }
        // $scope.todoCancel = function(todo) {
        //   todo.text2 = todo.text;
        //   todo.updateClick = false;
        // }
    });



