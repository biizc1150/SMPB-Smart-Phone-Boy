angular.module('scotchApp.services', [])

.factory('Cart', function() {
    var self = this;
    var cart_list = [];

    //     ProductID: $scope.oppoItemDetail.ProductID,
    //     name: $scope.oppoItemDetail.Model,
    //     price: $scope.oppoItemDetail.SellingPrice,
    //     image: $scope.oppoItemDetail.Image,
    //     amount: 0

    self.add = function(newObj) {
        cart_list[cart_list.length] = newObj;
    }

    self.all = function() {
        return cart_list;
    }

    self.get = function(contactId) {
        for (var i in cart_list) {
            var contact = cart_list[i];
            console.log(contact);
            if (contact.id == contactId) {
                return contact;
            }
        }
        return;
    }

    self.getIndex = function(index) {
        return cart_list[index];
    }

    self.clear = function() {
        cart_list = [];
    }

    self.setAmount = function(index, newAmount) {
        cart_list[index].amount = newAmount;
    }

    self.remove = function(contact) {
        cart_list.splice(cart_list.indexOf(contact), 1);
    }

    self.totalPrice = function() {
        var price = 0.0;
        for (var i = 0; i < cart_list.length; i++) {
            price += cart_list[i].price * cart_list[i].amount;
        }
        return price;
    }

    return self;
})

.factory('Recommend_Data', function($http) {
    var self = this;
    var recommend_list = [];

    self.all = function(member, mem_id) {
        if (member == 'member') {
            //CALL ALL PHONE FROM WEBSERVICE
            $http.get('http://omaximumo.asuscomm.com:8087/Service/GetRecommendedPhoneForMember?memberID=' + mem_id)
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

                        recommend_list[recommend_list.length] = {
                            ProductID: resp.data[i].ProductID,
                            Brand: resp.data[i].Brand,
                            Description: dess,
                            DisplaySize: resp.data[i].DisplaySize,
                            Image: resp.data[i].Image,
                            Model: resp.data[i].Model,
                            OS: resp.data[i].OS,
                            PhoneType: resp.data[i].PhoneType,
                            SellingPrice: resp.data[i].SellingPrice,
                            Amount: resp.data[i].Amount
                        };
                    }
                })
            return recommend_list;
        } else if (member == 'none') {
            //CALL ALL PHONE FROM WEBSERVICE
            $http.get('http://omaximumo.asuscomm.com:8087/Service/GetRecommendedPhoneForNonUser')
                .then(function(resp) {
                    console.log(resp.data);
                    for (var i = 0; i < resp.data.length; i++) {
                        var des = resp.data[i].Description;
                        var list = des.split(',');

                        var dess = [];

                        for (var j = 0; j < list.length; j++) {
                            dess[dess.length] = {
                                detail: list[j]
                            };
                        }

                        recommend_list[recommend_list.length] = {
                            ProductID: resp.data[i].ProductID,
                            Brand: resp.data[i].Brand,
                            Description: dess,
                            DisplaySize: resp.data[i].DisplaySize,
                            Image: resp.data[i].Image,
                            Model: resp.data[i].Model,
                            OS: resp.data[i].OS,
                            PhoneType: resp.data[i].PhoneType,
                            SellingPrice: resp.data[i].SellingPrice,
                            Amount: resp.data[i].Amount
                        };
                    }
                })
            return recommend_list;
        }
    }

    self.clear = function() {
        recommend_list = [];
    }

    return self;
})

.factory('Card_list', function($http) {
    var self = this;
    var card_list = [];

    self.all = function() {
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

                    card_list[card_list.length] = {
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
        return card_list;
    }
    return self;
})

.factory('Powerbank_list', function($http) {
    var self = this;
    var power_list = [];

    self.all = function() {
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

                    power_list[power_list.length] = {
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
        return power_list;
    }
    return self;
})

.factory('Phone_List', function($http) {
    var self = this;
    var allphone_list = [];

    self.all = function() {
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

                    allphone_list[allphone_list.length] = {
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
        return allphone_list;
    }

    return self;
})

.factory('User_Info', function() {
    var self = this;
    var userinfo = [];

    userinfo[userinfo.length] = {
        username: 'user',
        password: 'user',
        firstname: 'Wayne',
        lastname: "Rooney",
        email: 'Rooney@gmail.com',
        phone: '0888838383',
        birth: '11/05/2015',
        address: '81/315 Nawamin 81 Soi.6 Khongkhum Bungkhum Bangkok',
        zipcode: '10240'
    };

    self.all = function() {
        return userinfo;
    }

    return self;
})

.factory('Search_list', function(Recommend_Data) {
    var self = this;
    var search_list = [];

    search_list[search_list.length] = {
        name: 'iPhone 6s (64GB)',
        screensize: 4.7,
        os: 'ios',
        using: 'any'
    };
    search_list[search_list.length] = {
        name: 'iPhone 6s (64GB)',
        screensize: 4.7,
        os: 'ios',
        using: 'any'
    };

    self.showData = function() {
        alert(search_list);
    }

    self.all = function() {
        return search_list;
    }

    return self;
})