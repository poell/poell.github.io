var app = angular.module("bookModule", []) app.controller("bookController", function ($scope) { 
        
        var books = [ 
            { title: "Ben", author: "Male", published: 55000, genre: "London" }, 
            { title: "Sara", author: "Female", published: 68000, genre: "Chennai" }, 
            { title: "Mark", author: "Male", published: 57000, genre: "London" }, 
            { title: "Pam", author: "Female", published: 53000, genre: "Chennai" }, 
            { title: "Todd", author: "Male", published: 60000, genre: "London" }, 
        ]; 
    
    $scope.books = books; 
    });
