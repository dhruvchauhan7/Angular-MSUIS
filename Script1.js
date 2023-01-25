///reference path ="angular.min.js" />

var myApp = angular.module("myModule", []);

myApp.controller("myController", function ($scope) {
    var employee = {
        firstName: "David",
        lastName: "Guetta",
        gender: "Male",
    };
    $scope.employee = employee;




    var country = {

        name: "India",
        capital: "Delhi",
        flag: "/Images/spider.jpg"
    };
    $scope.country = country

    $scope.message = "Hello World!";




    var emp = [

        { firstName: "Ben", lastName: "Stokes", salary: 10000 },
        { firstName: "Virat", lastName: "KOhli", salary: 15000 },
        { firstName: "Rohit", lastName: "Sharma", salary: 20000 },
    ];
    $scope.emp = emp;




    var countries = [
        {
            name: "UK",
            cities: [
                { name: "London" },
                { name: "Manchester" },
                { name: "West HAM" }
            ]
        },
        {
            name: "US",
            cities: [
                { name: "New York" },
                { name: "LA" },
                { name: "Chicago" }
            ]
        },
        {
            name: "India",
            cities: [
                { name: "Vadodara" },
                { name: "Halol" },
                { name: "MORBI" }
            ]
        }
    ];
    $scope.countries = countries




    var technologies = [
        { name: "C#", likes: 0, dislikes: 0 },
        { name: "Java", likes: 0, dislikes: 0 },
        { name: "C++", likes: 0, dislikes: 0 },
        { name: "Python", likes: 0, dislikes: 0 }
    ];
    $scope.technologies = technologies;
    $scope.incrementlikes = function (technology) {
        technology.likes++;
    }
    $scope.incrementdislikes = function (technology) {
        technology.dislikes++;
    }





    var emp1 = [

        { firstName: "Ben", lastName: "Stokes", salary: 10000, dob: new Date("January 1,2001") },
        { firstName: "Virat", lastName: "KOhli", salary: 15000, dob: new Date("February 2,2000") },
        { firstName: "Rohit", lastName: "Sharma", salary: 20000, dob: new Date("March 3,2001") },
        { firstName: "Mohit", lastName: "Sharma", salary: 20000, dob: new Date("January 4,2001") },
        { firstName: "Sohit", lastName: "Sharma", salary: 20000, dob: new Date("January 5,2001") }
    ];
    $scope.emp1 = emp1;
    $scope.rowLimit = 5;

    $scope.sortColumn = "firstName";

    $scope.reverseSort = false;
    $scope.sortData = function (column) {
        $scope.reverseSort = ($scope.sortColumn == column) ? !$scope.reverseSort : false;
        $scope.sortColumn = column;
    }

    $scope.getSortClass = function (column) {
        if ($scope.sortColumn == column) {
            return $scope.reverseSort ? 'arrow-down' : 'arrow-up';
        }
        // return an empty string so that the method is called only on 1 column
        return '';
    }



    var students = {
        s1: { name: " Dhruv", age: 21 },
        s2: { name: " Vraj", age: 20 },
        s3: { name: " Chintan", age: 211 },
        s4: { name: "Tenzin", age: 212 }
    }
    $scope.students = students;



    var cricketers = [
        { name: "Sachin", gender: "Male", salary: 100, city: "Mumbai" },
        { name: "Kezal", gender: "Female", salary: 8000, city: "Vadodara" },
        { name: "Sehwag", gender: "Male", salary: 300, city: "Delhi" },
        { name: "Ganguly", gender: "Female", salary: 200, city: "Kolkata" },
        { name: "Zaheer", gender: "Male", salary: 700, city: "Hyderabad" },
        { name: "Dhoni", gender: "Female", salary: 500, city: "Ranchi" }
    ];
    $scope.cricketers = cricketers;

    $scope.search = function (item) {
        if ($scope.searchText == undefined) {
            // we want to disable every row even if nothing is typed thats why we make it true
            return true;
        }
        else {
            if (item.name.toLowerCase().indexOf($scope.searchText.toLowerCase()) != -1 || item.city.toLowerCase().indexOf($scope.searchText.toLowerCase()) != -1)
            {
                return true;
            }
        }
        return false;
    }


    /*$scope.selName = '';
    $scope.getVal = function (name) {
        $scope.selName = angular.copy(name);
    };*/

    $scope.n1 = "Dhruv";
    $scope.n2 = "Vraj";
    $scope.n3 = "Jay";
    $scope.n4 = "Chintan";

   


});