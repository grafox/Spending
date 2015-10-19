'Use Strict';
angular.module('App').controller('homeController', function($scope, $firebaseArray, $firebaseObject, $state, $cordovaOauth, $localStorage, $location, $http, $ionicPopup, Auth, FURL, Utils) {
    var ref = new Firebase(FURL);

    $scope.logOut = function() {
        Auth.logout();
        $location.path("/login");
    };
    /////
  function authDataCallback(authData) {
    if (!authData) {
      $location.path("/login");
    }
  }
  // Register the callback to be fired every time auth state changes
  ref.onAuth(authDataCallback);
  /////
  $scope.name = $localStorage.name;
  $scope.gravatar = $localStorage.gravatar;
  /////
  var MOO = new Firebase(FURL).child("MOO");
  var MOE = new Firebase(FURL).child("MOE");
  var MOH = new Firebase(FURL).child("MOH");
  var MOW = new Firebase(FURL).child("MOW");
  var MOT = new Firebase(FURL).child("MOT");
  var CB = new Firebase(FURL).child("CB");

  //////////////
  var mooPpro = MOO.child('mooPpro');
  var mooIexpo = MOO.child('mooIexpo');
  var mooGaspro = MOO.child('mooGaspro');
  var mooIgas = MOO.child('mooIgas');
  var mooGascons = MOO.child('mooGascons');

  var moeHpro = MOE.child('moeHpro');
  var moeHbaghdad = MOE.child('moeHbaghdad');

  var mohBirths = MOH.child('mohBirths');
  var mohDeaths = MOH.child('mohDeaths');

  var mowWlevel = MOW.child('mowWlevel');
  var mowEgen = MOW.child('mowEgen');
  var mowLstor = MOW.child('mowLstor');
  var mowLforc = MOW.child('mowLforc');

  var motAtravl = MOT.child('motAtravl');
  var motCport = MOT.child('motCport');
  var motGrail = MOT.child('motGrail');
  var motGtruck = MOT.child('motGtruck');
  var motIncome = MOT.child('motIncome');
  var motMarine = MOT.child('motMarine');
  var motPassair = MOT.child('motPassair');
  var motTland = MOT.child('motTland');

  var cbExchange = CB.child('cbExchange');
  var cbEcurrency = CB.child('cbEcurrency');
  var cbFreserve = CB.child('cbFreserve');
  var cbFsale = CB.child('cbFsale');
  ////////////////

  /////////
  $scope.mooPproA = $firebaseArray(mooPpro);
  $scope.mooIexpoA = $firebaseArray(mooIexpo);
  $scope.mooGasproA = $firebaseArray(mooGaspro);
  $scope.mooIgasA = $firebaseArray(mooIgas);
  $scope.mooGasconsA = $firebaseArray(mooGascons);

  $scope.moeHproA = $firebaseArray(moeHpro);
  $scope.moeHbaghdadA = $firebaseArray(moeHbaghdad);

  $scope.mohBirthsA = $firebaseArray(mohBirths);
  $scope.mohDeathsA = $firebaseArray(mohDeaths);

  $scope.mowWlevelA = $firebaseArray(mowWlevel);
  $scope.mowEgenA = $firebaseArray(mowEgen);
  $scope.mowLstorA = $firebaseArray(mowLstor);
  $scope.mowLforcA = $firebaseArray(mowLforc);

  $scope.motAtravlA = $firebaseArray(motAtravl);
  $scope.motCportA = $firebaseArray(motCport);
  $scope.motGrailA = $firebaseArray(motGrail);
  $scope.motGtruckA = $firebaseArray(motGtruck);
  $scope.motIncomeA = $firebaseArray(motIncome);
  $scope.motMarineA = $firebaseArray(motMarine);
  $scope.motPassairA = $firebaseArray(motPassair);
  $scope.motTlandA = $firebaseArray(motTland);

  $scope.cbExchangeA = $firebaseArray(cbExchange);
  $scope.cbEcurrencyA = $firebaseArray(cbEcurrency);
  $scope.cbFreserveA = $firebaseArray(cbFreserve);
  $scope.cbFsaleA = $firebaseArray(cbFsale);
  /////////

    /////
    $scope.config = {
        visible: true, // default: true
        extended: false, // default: false
        disabled: false, // default: false
        autorefresh: true, // default: true
        refreshDataOnly: true, // default: false
        deepWatchOptions: true, // default: true
        deepWatchData: true, // default: false
        deepWatchConfig: true, // default: true
    };
    //////

    ////mooPpro
  $scope.mooPpro = function() {
    var picData = moment($scope.datepickerObjectModal.inputDate).unix() * 1000;
    var item = [picData, this.mooPproValue];

    var filterItem = _.find($scope.mooPproA, {
      0: picData
    });

    if (filterItem) {
      $scope.mooPproA.$remove(filterItem);
      $scope.mooPproA.$add(item);
      //$scope.newValues.$save(filterItem);
    } else {
      $scope.mooPproA.$add(item);
    }
  };
  ///////
  $scope.datamooPpro = [{
    "key": "",
    "bar": true,
    "values": $scope.mooPproA
  }];
//////mooIexpo update
  $scope.mooIexpo = function() {
    var picData = moment($scope.datepickerObjectModal.inputDate).unix() * 1000;
    var item = [picData, this.mooIexpoValue];
  //console.log(item);
    var filterItem = _.find($scope.mooIexpoA, {
      0: picData
    });

    if (filterItem) {
      $scope.mooIexpoA.$remove(filterItem);
      $scope.mooIexpoA.$add(item);
   //   console.log(filterItem);
    } else {
      $scope.mooIexpoA.$add(item);
    }
  };
//////mooIexpo data
  $scope.datamooIexpo = [{
    "key": "",
    "bar": true,
    "values": $scope.mooIexpoA
  }];

//////mooGaspro update
  $scope.mooGaspro = function() {
    var picData = moment($scope.datepickerObjectModal.inputDate).unix() * 1000;
    var item = [picData, this.mooGasproValue];
  //  console.log(item);
    var filterItem = _.find($scope.mooGasproA, {
      0: picData
    });

    if (filterItem) {
      $scope.mooGasproA.$remove(filterItem);
      $scope.mooGasproA.$add(item);
   //   console.log(filterItem);
    } else {
      $scope.mooGasproA.$add(item);
    }
  };
//////mooGaspro data
  $scope.datamooGaspro = [{
    "key": "",
    "bar": true,
    "values": $scope.mooGasproA
  }];

  //////mooIgas update
  $scope.mooIgas = function() {
    var picData = moment($scope.datepickerObjectModal.inputDate).unix() * 1000;
    var item = [picData, this.mooIgasValue];
 //   console.log(item);
    var filterItem = _.find($scope.mooIgasA, {
      0: picData
    });

    if (filterItem) {
      $scope.mooIgasA.$remove(filterItem);
      $scope.mooIgasA.$add(item);
   //   console.log(filterItem);
    } else {
      $scope.mooIgasA.$add(item);
    }
  };
//////mooIgas data
  $scope.datamooIgas = [{
    "key": "Quantity",
    "bar": true,
    "values": $scope.mooIgasA
  }];
  //////////////

  //////mooGascons update
  $scope.mooGascons = function() {
    var picData = moment($scope.datepickerObjectModal.inputDate).unix() * 1000;
    var item = [picData, this.mooGasconsValue];
  //  console.log(item);
    var filterItem = _.find($scope.mooGasconsA, {
      0: picData
    });

    if (filterItem) {
      $scope.mooGasconsA.$remove(filterItem);
      $scope.mooGasconsA.$add(item);
   //   console.log(filterItem);
    } else {
      $scope.mooGasconsA.$add(item);
    }
  };
//////mooGascons data
  $scope.datamooGascons = [{
    "key": "",
    "bar": true,
    "values": $scope.mooGasconsA
  }];

  //////moeHpro update
  $scope.moeHpro = function() {
    var picData = moment($scope.datepickerObjectModal.inputDate).unix() * 1000;
    var item = [picData, this.moeHproValue];
  //  console.log(item);
    var filterItem = _.find($scope.moeHproA, {
      0: picData
    });

    if (filterItem) {
      $scope.moeHproA.$remove(filterItem);
      $scope.moeHproA.$add(item);
   //   console.log(filterItem);
    } else {
      $scope.moeHproA.$add(item);
    }
  };
//////moeHpro data
  $scope.datamoeHpro = [{
    "key": "",
    "bar": true,
    "values": $scope.moeHproA
  }];

  //////moeHbaghdad update
  $scope.moeHbaghdad = function() {
    var picData = moment($scope.datepickerObjectModal.inputDate).unix() * 1000;
    var item = [picData, this.moeHbaghdadValue];
   // console.log(item);
    var filterItem = _.find($scope.moeHbaghdadA, {
      0: picData
    });

    if (filterItem) {
      $scope.moeHbaghdadA.$remove(filterItem);
      $scope.moeHbaghdadA.$add(item);
   //   console.log(filterItem);
    } else {
      $scope.moeHbaghdadA.$add(item);
    }
  };
//////moeHbaghdad data
  $scope.datamoeHbaghdad = [{
    "key": "",
    "bar": true,
    "values": $scope.moeHbaghdadA
  }];

  //////mohBirths update
  $scope.mohBirths = function() {
    var picData = moment($scope.datepickerObjectModal.inputDate).unix() * 1000;
    var item = [picData, this.mohBirthsValue];
  //  console.log(item);
    var filterItem = _.find($scope.mohBirthsA, {
      0: picData
    });

    if (filterItem) {
      $scope.mohBirthsA.$remove(filterItem);
      $scope.mohBirthsA.$add(item);
   //   console.log(filterItem);
    } else {
      $scope.mohBirthsA.$add(item);
    }
  };
//////mohBirths data
  $scope.datamohBirths = [{
    "key": "",
    "bar": true,
    "values": $scope.mohBirthsA
  }];

  //////mohDeaths update
  $scope.mohDeaths = function() {
    var picData = moment($scope.datepickerObjectModal.inputDate).unix() * 1000;
    var item = [picData, this.mohDeathsValue];
   // console.log(item);
    var filterItem = _.find($scope.mohDeathsA, {
      0: picData
    });

    if (filterItem) {
      $scope.mohDeathsA.$remove(filterItem);
      $scope.mohDeathsA.$add(item);
    //  console.log(filterItem);
    } else {
      $scope.mohDeathsA.$add(item);
    }
  };
//////mohDeaths data
  $scope.datamohDeaths = [{
    "key": "",
    "bar": true,
    "values": $scope.mohDeathsA
  }];

  //////mowWlevel update
  $scope.mowWlevel = function() {
    var picData = moment($scope.datepickerObjectModal.inputDate).unix() * 1000;
    var item = [picData, this.mowWlevelValue];
   // console.log(item);
    var filterItem = _.find($scope.mowWlevelA, {
      0: picData
    });

    if (filterItem) {
      $scope.mowWlevelA.$remove(filterItem);
      $scope.mowWlevelA.$add(item);
   //   console.log(filterItem);
    } else {
      $scope.mowWlevelA.$add(item);
    }
  };
//////mowWlevel data
  $scope.datamowWlevel = [{
    "key": "",
    "bar": true,
    "values": $scope.mowWlevelA
  }];

  //////mowEgen update
  $scope.mowEgen = function() {
    var picData = moment($scope.datepickerObjectModal.inputDate).unix() * 1000;
    var item = [picData, this.mowEgenValue];
   // console.log(item);
    var filterItem = _.find($scope.mowEgenA, {
      0: picData
    });

    if (filterItem) {
      $scope.mowEgenA.$remove(filterItem);
      $scope.mowEgenA.$add(item);
    //  console.log(filterItem);
    } else {
      $scope.mowEgenA.$add(item);
    }
  };
//////mowEgen data
  $scope.datamowEgen = [{
    "key": "",
    "bar": true,
    "values": $scope.mowEgenA
  }];

  //////mowLstor update
  $scope.mowLstor = function() {
    var picData = moment($scope.datepickerObjectModal.inputDate).unix() * 1000;
    var item = [picData, this.mowLstorValue];
  //  console.log(item);
    var filterItem = _.find($scope.mowLstorA, {
      0: picData
    });

    if (filterItem) {
      $scope.mowLstorA.$remove(filterItem);
      $scope.mowLstorA.$add(item);
   //   console.log(filterItem);
    } else {
      $scope.mowLstorA.$add(item);
    }
  };
//////mowLstor data
  $scope.datamowLstor = [{
    "key": "",
    "bar": true,
    "values": $scope.mowLstorA
  }];
//////mowLforc update
  $scope.mowLforc = function() {
    var picData = moment($scope.datepickerObjectModal.inputDate).unix() * 1000;
    var item = [picData, this.mowLforcValue];
  //  console.log(item);
    var filterItem = _.find($scope.mowLforcA, {
      0: picData
    });

    if (filterItem) {
      $scope.mowLforcA.$remove(filterItem);
      $scope.mowLforcA.$add(item);
  //    console.log(filterItem);
    } else {
      $scope.mowLforcA.$add(item);
    }
  };
//////mowLforc data
  $scope.datamowLforc = [{
    "key": "",
    "bar": true,
    "values": $scope.mowLforcA
  }];

  //////motAtravl update
  $scope.motAtravl = function() {
    var picData = moment($scope.datepickerObjectModal.inputDate).unix() * 1000;
    var item = [picData, this.motAtravlValue];
   // console.log(item);
    var filterItem = _.find($scope.motAtravlA, {
      0: picData
    });

    if (filterItem) {
      $scope.motAtravlA.$remove(filterItem);
      $scope.motAtravlA.$add(item);
    //  console.log(filterItem);
    } else {
      $scope.motAtravlA.$add(item);
    }
  };
//////motAtravl data
  $scope.datamotAtravl = [{
    "key": "",
    "bar": true,
    "values": $scope.motAtravlA
  }];

//////motTland update
  $scope.motTland = function() {
    var picData = moment($scope.datepickerObjectModal.inputDate).unix() * 1000;
    var item = [picData, this.motTlandValue];
    //console.log(item);
    var filterItem = _.find($scope.motTlandcA, {
      0: picData
    });

    if (filterItem) {
      $scope.motTlandA.$remove(filterItem);
      $scope.motTlandA.$add(item);
   //   console.log(filterItem);
    } else {
      $scope.motTlandA.$add(item);
    }
  };
//////motAtravl data
  $scope.datamotTland = [{
    "key": "",
    "bar": true,
    "values": $scope.motTlandA
  }];

  //////motCport update
  $scope.motCport = function() {
    var picData = moment($scope.datepickerObjectModal.inputDate).unix() * 1000;
    var item = [picData, this.motCportValue];
  //  console.log(item);
    var filterItem = _.find($scope.motCportA, {
      0: picData
    });

    if (filterItem) {
      $scope.motCportA.$remove(filterItem);
      $scope.motCportA.$add(item);
  //    console.log(filterItem);
    } else {
      $scope.motCportA.$add(item);
    }
  };
//////motCport data
  $scope.datamotCport = [{
    "key": "",
    "bar": true,
    "values": $scope.motCportA
  }];

  //////motGtruck update
  $scope.motGtruck = function() {
    var picData = moment($scope.datepickerObjectModal.inputDate).unix() * 1000;
    var item = [picData, this.motGtruckValue];
   // console.log(item);
    var filterItem = _.find($scope.motGtruckA, {
      0: picData
    });

    if (filterItem) {
      $scope.motGtruckA.$remove(filterItem);
      $scope.motGtruckA.$add(item);
    //  console.log(filterItem);
    } else {
      $scope.motGtruckA.$add(item);
    }
  };
//////motGtruck data
  $scope.datamotGtruck = [{
    "key": "",
    "bar": true,
    "values": $scope.motGtruckA
  }];

  //////motGrail update
  $scope.motGrail = function() {
    var picData = moment($scope.datepickerObjectModal.inputDate).unix() * 1000;
    var item = [picData, this.motGrailValue];
   // console.log(item);
    var filterItem = _.find($scope.motGrailA, {
      0: picData
    });

    if (filterItem) {
      $scope.motGrailA.$remove(filterItem);
      $scope.motGrailA.$add(item);
     // console.log(filterItem);
    } else {
      $scope.motGrailA.$add(item);
    }
  };
//////motGrail data
  $scope.datamotGrail = [{
    "key": "",
    "bar": true,
    "values": $scope.motGrailA
  }];

  //////motMarine update
  $scope.motMarine = function() {
    var picData = moment($scope.datepickerObjectModal.inputDate).unix() * 1000;
    var item = [picData, this.motMarineValue];
   // console.log(item);
    var filterItem = _.find($scope.motMarineA, {
      0: picData
    });

    if (filterItem) {
      $scope.motMarineA.$remove(filterItem);
      $scope.motMarineA.$add(item);
     // console.log(filterItem);
    } else {
      $scope.motMarineA.$add(item);
    }
  };
//////motMarine data
  $scope.datamotMarine = [{
    "key": "",
    "bar": true,
    "values": $scope.motMarineA
  }];

  //////motPassair update
  $scope.motPassair = function() {
    var picData = moment($scope.datepickerObjectModal.inputDate).unix() * 1000;
    var item = [picData, this.motPassairValue];
   // console.log(item);
    var filterItem = _.find($scope.motPassairA, {
      0: picData
    });

    if (filterItem) {
      $scope.motPassairA.$remove(filterItem);
      $scope.motPassairA.$add(item);
   //   console.log(filterItem);
    } else {
      $scope.motPassairA.$add(item);
    }
  };
//////motPassair data
  $scope.datamotPassair = [{
    "key": "",
    "bar": true,
    "values": $scope.motPassairA
  }];

  //////motIncome update
  $scope.motIncome = function() {
    var picData = moment($scope.datepickerObjectModal.inputDate).unix() * 1000;
    var item = [picData, this.motIncomeValue];
   // console.log(item);
    var filterItem = _.find($scope.motIncomeA, {
      0: picData
    });

    if (filterItem) {
      $scope.motIncomeA.$remove(filterItem);
      $scope.motIncomeA.$add(item);
   //   console.log(filterItem);
    } else {
      $scope.motIncomeA.$add(item);
    }
  };
//////motIncome data
  $scope.datamotIncome = [{
    "key": "",
    "bar": true,
    "values": $scope.motIncomeA
  }];

  //////cbExchange update
  $scope.cbExchange = function() {
    var picData = moment($scope.datepickerObjectModal.inputDate).unix() * 1000;
    var item = [picData, this.cbExchangeValue];
  //  console.log(item);
    var filterItem = _.find($scope.cbExchangeA, {
      0: picData
    });

    if (filterItem) {
      $scope.cbExchangeA.$remove(filterItem);
      $scope.cbExchangeA.$add(item);
    //  console.log(filterItem);
    } else {
      $scope.cbExchangeA.$add(item);
    }
  };
//////cbExchange data
  $scope.datacbExchange = [{
    "key": "",
    "bar": true,
    "values": $scope.cbExchangeA
  }];

  //////cbEcurrency update
  $scope.cbEcurrency = function() {
    var picData = moment($scope.datepickerObjectModal.inputDate).unix() * 1000;
    var item = [picData, this.cbEcurrencyValue];
   // console.log(item);
    var filterItem = _.find($scope.cbEcurrencyA, {
      0: picData
    });

    if (filterItem) {
      $scope.cbEcurrencyA.$remove(filterItem);
      $scope.cbEcurrencyA.$add(item);
   //   console.log(filterItem);
    } else {
      $scope.cbEcurrencyA.$add(item);
    }
  };
//////cbEcurrency data
  $scope.datacbEcurrency = [{
    "key": "",
    "bar": true,
    "values": $scope.cbEcurrencyA
  }];

  //////cbFreserve update
  $scope.cbFreserve = function() {
    var picData = moment($scope.datepickerObjectModal.inputDate).unix() * 1000;
    var item = [picData, this.cbFreserveValue];
   // console.log(item);
    var filterItem = _.find($scope.cbFreserveA, {
      0: picData
    });

    if (filterItem) {
      $scope.cbFreserveA.$remove(filterItem);
      $scope.cbFreserveA.$add(item);
      console.log(filterItem);
    } else {
      $scope.cbFreserveA.$add(item);
    }
  };
//////cbFreserve data
  $scope.datacbFreserve = [{
    "key": "",
    "bar": true,
    "values": $scope.cbFreserveA
  }];

  //////cbFsale update
  $scope.cbFsale = function() {
    var picData = moment($scope.datepickerObjectModal.inputDate).unix() * 1000;
    var item = [picData, this.cbFsaleValue];
   // console.log(item);
    var filterItem = _.find($scope.cbFsaleA, {
      0: picData
    });

    if (filterItem) {
      $scope.cbFsaleA.$remove(filterItem);
      $scope.cbFsaleA.$add(item);
     // console.log(filterItem);
    } else {
      $scope.cbFsaleA.$add(item);
    }
  };
//////cbFsale data
  $scope.datacbFsale = [{
    "key": "",
    "bar": true,
    "values": $scope.cbFsaleA
  }];
  //console.log(item);
  //$scope.newValues.$add(item);
  //console.log(picData);
  // console.log(item);

  //////
  var colorArray = ['#E01B5D'];
  $scope.colorFunction = function() {
    return function(d, i) {
      return colorArray[i];
    };
  };
  /////////
    //////
    ////
  //////
  $scope.optionsMOO = {
    chart: {
      type: 'historicalBarChart',
            color: ['#A52A2A'],
      height: 400,
      margin: {
        top: 10,
        right: 50,
        bottom: 100,
        left: 80
      },
      x: function(d) {
        return d[0];
      },
      y: function(d) {
        return d[1] / 1;
      },
      showValues: true,
      valueFormat: function(d) {
        return d3.format(',.1f')(d);
      },
      transitionDuration: 500,
      xAxis: {
        axisLabel: '',
        tickFormat: function(d) {
          return d3.time.format('%x')(new Date(d))
        },
        rotateLabels: 70,
        showMaxMin: true
      },
      yAxis: {
        axisLabel: '',
        axisLabelDistance: 10,
        tickFormat: function(d) {
          return d3.format(',.1f')(d);
        }
      }
    }
  };
  ////
  //////
  $scope.optionsMOE = {
    chart: {
      type: 'historicalBarChart',
            color: ['#DC143C'],
      height: 400,
      margin: {
        top: 10,
        right: 50,
        bottom: 100,
        left: 80
      },
      x: function(d) {
        return d[0];
      },
      y: function(d) {
        return d[1] / 1;
      },
      showValues: true,
      valueFormat: function(d) {
        return d3.format(',.1f')(d);
      },
      transitionDuration: 500,
      xAxis: {
        axisLabel: '',
        tickFormat: function(d) {
          return d3.time.format('%x')(new Date(d))
        },
        rotateLabels: 70,
        showMaxMin: true
      },
      yAxis: {
        axisLabel: '',
        axisLabelDistance: 10,
        tickFormat: function(d) {
          return d3.format(',.1f')(d);
        }
      }
    }
  };
  ////
  //////
  $scope.optionsMOH = {
    chart: {
      type: 'historicalBarChart',
            color: ['#006400'],
      height: 400,
      margin: {
        top: 10,
        right: 50,
        bottom: 100,
        left: 80
      },
      x: function(d) {
        return d[0];
      },
      y: function(d) {
        return d[1] / 1;
      },
      showValues: true,
      valueFormat: function(d) {
        return d3.format(',.1f')(d);
      },
      transitionDuration: 500,
      xAxis: {
        axisLabel: '',
        tickFormat: function(d) {
          return d3.time.format('%x')(new Date(d))
        },
        rotateLabels: 70,
        showMaxMin: true
      },
      yAxis: {
        axisLabel: '',
        axisLabelDistance: 10,
        tickFormat: function(d) {
          return d3.format(',.1f')(d);
        }
      }
    }
  };
  ////
  //////
  $scope.optionsMOW = {
    chart: {
      type: 'historicalBarChart',
            color: ['#0000FF'],
      height: 400,
      margin: {
        top: 10,
        right: 50,
        bottom: 100,
        left: 80
      },
      x: function(d) {
        return d[0];
      },
      y: function(d) {
        return d[1] / 1;
      },
      showValues: true,
      valueFormat: function(d) {
        return d3.format(',.1f')(d);
      },
      transitionDuration: 500,
      xAxis: {
        axisLabel: '',
        tickFormat: function(d) {
          return d3.time.format('%x')(new Date(d))
        },
        rotateLabels: 70,
        showMaxMin: true
      },
      yAxis: {
        axisLabel: '',
        axisLabelDistance: 10,
        tickFormat: function(d) {
          return d3.format(',.1f')(d);
        }
      }
    }
  };
  ////
  //////
  $scope.optionsMOT = {
    chart: {
      type: 'historicalBarChart',
            color: ['#556B2F'],
      height: 400,
      margin: {
        top: 10,
        right: 50,
        bottom: 100,
        left: 80
      },
      x: function(d) {
        return d[0];
      },
      y: function(d) {
        return d[1] / 1;
      },
      showValues: true,
      valueFormat: function(d) {
        return d3.format(',.1f')(d);
      },
      transitionDuration: 500,
      xAxis: {
        axisLabel: '',
        tickFormat: function(d) {
          return d3.time.format('%x')(new Date(d))
        },
        rotateLabels: 70,
        showMaxMin: true
      },
      yAxis: {
        axisLabel: '',
        axisLabelDistance: 10,
        tickFormat: function(d) {
          return d3.format(',.1f')(d);
        }
      }
    }
  };
  ////
  //////
  $scope.optionsCB = {
    chart: {
      type: 'historicalBarChart',
            color: ['#FF6347'],
      height: 400,
      margin: {
        top: 10,
        right: 50,
        bottom: 100,
        left: 80
      },
      x: function(d) {
        return d[0];
      },
      y: function(d) {
        return d[1] / 1;
      },
      showValues: true,
      valueFormat: function(d) {
        return d3.format(',.1f')(d);
      },
      transitionDuration: 500,
      xAxis: {
        axisLabel: '',
        tickFormat: function(d) {
          return d3.time.format('%x')(new Date(d))
        },
        rotateLabels: 70,
        showMaxMin: true
      },
      yAxis: {
        axisLabel: '',
        axisLabelDistance: 10,
        tickFormat: function(d) {
          return d3.format(',.1f')(d);
        }
      }
    }
  };
  ////
      ////////////
    var disabledDates = [
        new Date(1437719836326),
        new Date(2015, 7, 10), //months are 0-based, this is August, 10th!
        new Date('Wednesday, August 12, 2015'), //Works with any valid Date formats like long format
        new Date("08-14-2015"), //Short format
        new Date(1439676000000) //UNIX format
    ];
    var monthList = ["Jan", "Feb", "March", "April", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"];
    $scope.datepickerObject = {};
    $scope.datepickerObject.inputDate = new Date();

    $scope.datepickerObjectModal = {
        titleLabel: 'Pick the Date', //Optional
        todayLabel: 'Today', //Optional
        closeLabel: 'Close', //Optional
        setLabel: 'Set', //Optional
        errorMsgLabel: 'Please select time.', //Optional
        setButtonType: 'button-assertive', //Optional
        modalHeaderColor: 'bar-positive', //Optional
        modalFooterColor: 'bar-positive', //Optional
        templateType: 'modal', //Optional
        inputDate: $scope.datepickerObject.inputDate, //Optional
        mondayFirst: false, //Optional
     //   disabledDates: disabledDates, //Optional
        monthList: monthList, //Optional
        from: new Date(2012, 5, 1), //Optional
        to: new Date(2016, 7, 1), //Optional
        callback: function(val) { //Optional
            datePickerCallbackModal(val);
        }
    };
    $scope.datepickerObjectPopup = {
        titleLabel: 'Pick the Date', //Optional
        todayLabel: 'Today', //Optional
        closeLabel: 'Close', //Optional
        setLabel: 'Set', //Optional
        errorMsgLabel: 'Please select time.', //Optional
        setButtonType: 'button-assertive', //Optional
        modalHeaderColor: 'bar-positive', //Optional
        modalFooterColor: 'bar-positive', //Optional
        templateType: 'popup', //Optional
        inputDate: $scope.datepickerObject.inputDate, //Optional
        mondayFirst: false, //Optional
       // disabledDates: disabledDates, //Optional
        monthList: monthList, //Optional
        from: new Date(2014, 5, 1), //Optional
        to: new Date(2016, 7, 1), //Optional
        callback: function(val) { //Optional
            datePickerCallbackPopup(val);
        }
    };

    var datePickerCallbackModal = function(val) {
        if (typeof(val) === 'undefined') {
           // console.log('No date selected');
        } else {
            $scope.datepickerObjectModal.inputDate = val;
          //  console.log('Selected date is : ', val);
        }
    };

    var datePickerCallbackPopup = function(val) {
        if (typeof(val) === 'undefined') {
          //  console.log('No date selected');
        } else {
            $scope.datepickerObjectPopup.inputDate = val;
           // console.log('Selected date is : ', val);
        }
    };
    //////
//////////////
}); //End of module