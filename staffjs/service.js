angular.module('staffApp.service', [])

.factory('Staff', function($http) {
    var self = this;
    var staff_list = [];

    //Phone
    var staff_allPhone = [];
    self.allPhone = function() {
        //CALL ALL PHONE FROM WEBSERVICE
        $http.get('http://omaximumo.asuscomm.com:8087/Service/GetAllPhone')
            .then(function(resp) {
                // console.log(resp.data);
                for (var i = 0; i < resp.data.length; i++) {
                    var des = resp.data[i].Description;
                    var list = des.split(',');

                    var dess = [];

                    for (var j = 0; j < list.length; j++) {
                        dess[dess.length] = {
                            detail: list[j]
                        };
                    }

                    staff_allPhone[staff_allPhone.length] = {
                        ProductID: resp.data[i].ProductID,
                        Brand: resp.data[i].Brand,
                        Description: dess,
                        DisplaySize: resp.data[i].DisplaySize,
                        Image: resp.data[i].Image,
                        Model: resp.data[i].Model,
                        OS: resp.data[i].OS,
                        PhoneType: resp.data[i].PhoneType,
                        SellingPrice: resp.data[i].SellingPrice,
                        Amount: resp.data[i].Amount,
                        PurchasingPrice:resp.data[i].PurchasingPrice
                    };
                }
            })
        return staff_allPhone;
    }

    //Card
    var staff_allCard = [];
    self.allCard = function() {
        //CALL ALL PHONE FROM WEBSERVICE
        $http.get('http://omaximumo.asuscomm.com:8087/Service/GetAllCard')
            .then(function(resp) {
                // console.log(resp.data);
                for (var i = 0; i < resp.data.length; i++) {
                    var des = resp.data[i].Description;
                    var list = des.split(',');

                    var dess = [];

                    for (var j = 0; j < list.length; j++) {
                        dess[dess.length] = {
                            detail: list[j]
                        };
                    }

                    staff_allCard[staff_allCard.length] = {
                        ProductID: resp.data[i].ProductID,
                        Brand: resp.data[i].Brand,
                        Description: dess,
                        Capacity: resp.data[i].Capacity,
                        Image: resp.data[i].Image,
                        Model: resp.data[i].Model,
                        OS: resp.data[i].OS,
                        PhoneType: resp.data[i].PhoneType,
                        SellingPrice: resp.data[i].SellingPrice,
                        CardType: resp.data[i].CardType,
                        Amount: resp.data[i].Amount
                    };
                }
            })
        return staff_allCard;
    }

    //PowerBank
    var staff_PowerBank = [];
    self.allPowerBank = function() {
        //CALL ALL PHONE FROM WEBSERVICE
        $http.get('http://omaximumo.asuscomm.com:8087/Service/GetAllPowerBank')
            .then(function(resp) {
                // console.log(resp.data);
                for (var i = 0; i < resp.data.length; i++) {
                    var des = resp.data[i].Description;
                    var list = des.split(',');

                    var dess = [];

                    for (var j = 0; j < list.length; j++) {
                        dess[dess.length] = {
                            detail: list[j]
                        };
                    }

                    staff_PowerBank[staff_PowerBank.length] = {
                        ProductID: resp.data[i].ProductID,
                        Brand: resp.data[i].Brand,
                        Description: dess,
                        Capacity: resp.data[i].Capacity,
                        Image: resp.data[i].Image,
                        Model: resp.data[i].Model,
                        OS: resp.data[i].OS,
                        PhoneType: resp.data[i].PhoneType,
                        SellingPrice: resp.data[i].SellingPrice,
                        Amount: resp.data[i].Amount
                    };
                }
            })
        return staff_PowerBank;
    }



    self.add = function(newObj) {
        staff_list[staff_list.length] = newObj;
    }

    self.all = function() {
        return staff_list;
    }

    self.remove = function(contact) {
        staff_list.splice(staff_list.indexOf(contact), 1);
    }

    self.clearAll = function(){
        staff_PowerBank = [];
        staff_allCard = [];
        staff_allPhone = [];
    }

    return self;
})

.factory('Owner', function() {
    var self = this;
    var cart_list = [];

    cart_list[cart_list.length] = {
        id: 1,
        name: 'iPhone 6s (64GB)',
        price: 21000,
        image: 'img/recommend/i6s.jpg',
        amount: 0
    };

    self.add = function(newObj) {
        cart_list[cart_list.length] = newObj;
    }

    self.all = function() {
        return cart_list;
    }

    self.remove = function(contact) {
        cart_list.splice(cart_list.indexOf(contact), 1);
    }

    return self;
})