angular.module('scotchApp.controllers', [])

// create the controller and inject Angular's $scope
.controller('mainController', function($scope, $http, Cart, Recommend_Data, Phone_List, Search_list, User_Info, Card_list, Powerbank_list) {

    //Check load first times.
    var first_time = 0;

    //Hide Div that don't want to show at first
    $('#login_detail_panel').hide();
    $('#accessory_search_panel_powerbank').hide();
    $('#accessory_search_panel_card').hide();

    // Recommend List -> Check whether user or not
    Recommend_Data.clear();
    $scope.recommendList = Recommend_Data.all('none', 0);

    //WEB SERVICE HERE
    //All Phone List
    $scope.allPhone = Phone_List.all();
    //List of Products
    $scope.alliPhone = [];
    $scope.allSamsung = [];
    $scope.allHTC = [];
    $scope.allOppo = [];

    //All Accessories List
    $scope.allCard = Card_list.all();
    $scope.allPowerBank = Powerbank_list.all();

    //All Recommend List Non-User
    $scope.recommedItemDetail = "";

    //Search result List
    $scope.searchList = [];

    //Username use to check
    $scope.username = '';

    //Modal Part
    $scope.registor = function() {
        $("#myRegis").modal({
            backdrop: true
        });
    }

    $scope.cartList = function() {
        $scope.allCartItems = Cart.all();
        // $scope.allCartItems.clear();
        $("#myCart").modal({
            backdrop: true
        });
    }

    //Phone & Power Bank all Modal
    $scope.product_detail_commend = function($index) {
        //Set Data to Show Detail
        $scope.recommedItemDetail = $scope.recommendList[$index];
        $("#product_detail_modal").modal({
            backdrop: true
        });
    }

    $scope.oppo_detail_commend = function($index) {
        //Set Data to Show Detail
        $scope.oppoItemDetail = $scope.allOppo[$index];
        $("#oppo_detail_modal").modal({
            backdrop: true
        });
    }

    $scope.iPhone_detail_commend = function($index) {
        //Set Data to Show Detail
        $scope.iPhoneItemDetail = $scope.alliPhone[$index];
        $("#iPhone_detail_modal").modal({
            backdrop: true
        });
    }

    $scope.HTC_detail_commend = function($index) {
        //Set Data to Show Detail
        $scope.HTCItemDetail = $scope.allHTC[$index];
        $("#HTC_detail_modal").modal({
            backdrop: true
        });
    }

    $scope.samsung_detail_commend = function($index) {
        //Set Data to Show Detail
        $scope.samsungItemDetail = $scope.allSamsung[$index];
        $("#samsung_detail_modal").modal({
            backdrop: true
        });
    }

    $scope.card_detail_commend = function($index) {
        //Set Data to Show Detail
        $scope.cardItemDetail = $scope.allCard[$index];
        $("#card_detail_modal").modal({
            backdrop: true
        });
    }

    $scope.power_detail_commend = function($index) {
        //Set Data to Show Detail
        $scope.powerItemDetail = $scope.allPowerBank[$index];
        $("#power_detail_modal").modal({
            backdrop: true
        });
    }

    $scope.searchPhone_detail_commend = function($index) {
        //Set Data to Show Detail
        $scope.searchPhoneItemDetail = $scope.searchList[$index];
        $("#phoneSearch_detail_modal").modal({
            backdrop: true
        });
    }

    $scope.searchAccessory_detail_commend = function($index) {
        //Set Data to Show Detail
        $scope.searchAccessoryItemDetail = $scope.searchList[$index];
        $("#accessorySearch_detail_modal").modal({
            backdrop: true
        });
    }

    $scope.Recommend_detail_commend = function($index) {
        //Set Data to Show Detail
        $scope.RecommendItemDetail = $scope.recommendList[$index];
        $("#Recommend_detail_modal").modal({
            backdrop: true
        });
    }

    $scope.addToCart_Detail = function(type) {
        if (type == 'recommed') {
            //Check Carting....
            var inCart = Cart.all();

            for (var i = 0; i < inCart.length; i++) {
                if (inCart[i].ProductID == $scope.RecommendItemDetail.ProductID) {
                    sweetAlert("Oops...", "This product is already in your cart. Please try to increase its amount in cart.", "error");
                    return;
                }
            }

            // recommedItemDetail
            var newObj = {
                ProductID: $scope.RecommendItemDetail.ProductID,
                name: $scope.RecommendItemDetail.Model,
                price: $scope.RecommendItemDetail.SellingPrice,
                image: $scope.RecommendItemDetail.Image,
                amount: 1
            };
            Cart.add(newObj);
        } else if (type == 'oppo') {
            //Check Carting....
            var inCart = Cart.all();

            for (var i = 0; i < inCart.length; i++) {
                if (inCart[i].ProductID == $scope.oppoItemDetail.ProductID) {
                    sweetAlert("Oops...", "This product is already in your cart. Please try to increase its amount in cart.", "error");
                    return;
                }
            }

            var newObj = {
                ProductID: $scope.oppoItemDetail.ProductID,
                name: $scope.oppoItemDetail.Model,
                price: $scope.oppoItemDetail.SellingPrice,
                image: $scope.oppoItemDetail.Image,
                amount: 1
            };
            Cart.add(newObj);
        } else if (type == 'iphone') {
            //Check Carting....
            var inCart = $scope.all;

            for (var i = 0; i < inCart.length; i++) {
                if (inCart[i].ProductID == $scope.iPhoneItemDetail.ProductID) {
                    sweetAlert("Oops...", 'This product is already in your cart. Please try to' + ' increase its amount in cart. ' + inCart[i].ProductID + ' ' + $scope.iPhoneItemDetail.ProductID, "error");
                    return;
                }
            }

            var newObj = {
                ProductID: $scope.iPhoneItemDetail.ProductID,
                name: $scope.iPhoneItemDetail.Model,
                price: $scope.iPhoneItemDetail.SellingPrice,
                image: $scope.iPhoneItemDetail.Image,
                amount: 1
            };
            Cart.add(newObj);
        } else if (type == 'HTC') {
            //Check Carting....
            var inCart = Cart.all();

            for (var i = 0; i < inCart.length; i++) {
                if (inCart[i].ProductID == $scope.HTCItemDetail.ProductID) {
                    sweetAlert("Oops...", "This product is already in your cart. Please try to increase its amount in cart.", "error");
                    return;
                }
            }

            var newObj = {
                ProductID: $scope.HTCItemDetail.ProductID,
                name: $scope.HTCItemDetail.Model,
                price: $scope.HTCItemDetail.SellingPrice,
                image: $scope.HTCItemDetail.Image,
                amount: 1
            };
            Cart.add(newObj);
        } else if (type == 'samsung') {
            //Check Carting....
            var inCart = Cart.all();

            for (var i = 0; i < inCart.length; i++) {
                if (inCart[i].ProductID == $scope.samsungItemDetail.ProductID) {
                    sweetAlert("Oops...", "This product is already in your cart. Please try to increase its amount in cart.", "error");
                    return;
                }
            }

            var newObj = {
                ProductID: $scope.samsungItemDetail.ProductID,
                name: $scope.samsungItemDetail.Model,
                price: $scope.samsungItemDetail.SellingPrice,
                image: $scope.samsungItemDetail.Image,
                amount: 1
            };
            Cart.add(newObj);
        } else if (type == 'card') {
            //Check Carting....
            var inCart = Cart.all();

            for (var i = 0; i < inCart.length; i++) {
                if (inCart[i].ProductID == $scope.cardItemDetail.ProductID) {
                    sweetAlert("Oops...", "This product is already in your cart. Please try to increase its amount in cart.", "error");
                    return;
                }
            }

            var newObj = {
                ProductID: $scope.cardItemDetail.ProductID,
                name: $scope.cardItemDetail.Model,
                price: $scope.cardItemDetail.SellingPrice,
                image: $scope.cardItemDetail.Image,
                amount: 1
            };
            Cart.add(newObj);
        } else if (type == 'power') {
            //Check Carting....
            var inCart = Cart.all();

            for (var i = 0; i < inCart.length; i++) {
                if (inCart[i].ProductID == $scope.powerItemDetail.ProductID) {
                    sweetAlert("Oops...", "This product is already in your cart. Please try to increase its amount in cart.", "error");
                    return;
                }
            }

            var newObj = {
                ProductID: $scope.powerItemDetail.ProductID,
                name: $scope.powerItemDetail.Model,
                price: $scope.powerItemDetail.SellingPrice,
                image: $scope.powerItemDetail.Image,
                amount: 1
            };
            Cart.add(newObj);
        } else if (type == 'search_phone') {
            //Check Carting....
            var inCart = Cart.all();

            for (var i = 0; i < inCart.length; i++) {
                if (inCart[i].ProductID == $scope.searchPhoneItemDetail.ProductID) {
                    sweetAlert("Oops...", "This product is already in your cart. Please try to increase its amount in cart.", "error");
                    return;
                }
            }

            var newObj = {
                ProductID: $scope.searchPhoneItemDetail.ProductID,
                name: $scope.searchPhoneItemDetail.Model,
                price: $scope.searchPhoneItemDetail.SellingPrice,
                image: $scope.searchPhoneItemDetail.Image,
                amount: 1
            };
            Cart.add(newObj);
        } else if (type == 'search_acc') {
            //Check Carting....
            var inCart = Cart.all();

            for (var i = 0; i < inCart.length; i++) {
                if (inCart[i].ProductID == $scope.searchAccessoryItemDetail.ProductID) {
                    sweetAlert("Oops...", "This product is already in your cart. Please try to increase its amount in cart.", "error");
                    return;
                }
            }

            var newObj = {
                ProductID: $scope.searchAccessoryItemDetail.ProductID,
                name: $scope.searchAccessoryItemDetail.Model,
                price: $scope.searchAccessoryItemDetail.SellingPrice,
                image: $scope.searchAccessoryItemDetail.Image,
                amount: 1
            };
            Cart.add(newObj);
        }


        swal("​Added!", "Item is added.", "success")
        $('#product_detail_modal').modal('hide');
        //Set Total Price
        $scope.totalPrice = Cart.totalPrice();
        $('#totalPrice_cart').html('Total Price: ' + $scope.totalPrice + ' BTH');
    }

    //ADD TO CART ITEMS
    $scope.addToCart_Rec = function($index) {
        //Check Carting....
        var inCart = Cart.all();

        for (var i = 0; i < inCart.length; i++) {
            if (inCart[i].ProductID == $scope.recommendList[$index].ProductID) {
                sweetAlert("Oops...", "This product is already in your cart. Please try to increase its amount in cart.", "error");
                return;
            }
        }

        var newObj = {
            ProductID: $scope.recommendList[$index].ProductID,
            name: $scope.recommendList[$index].Model,
            price: $scope.recommendList[$index].SellingPrice,
            image: $scope.recommendList[$index].Image,
            amount: 1
        };
        Cart.add(newObj);

        swal("​Added!", "Item is added.", "success")
            //Set Total Price
        $scope.totalPrice = Cart.totalPrice();
        $('#totalPrice_cart').html('Total Price: ' + $scope.totalPrice + ' BTH');
    }

    $scope.addToCart_iPhone = function($index) {
        //Check Carting....
        var inCart = Cart.all();

        for (var i = 0; i < inCart.length; i++) {
            if (inCart[i].ProductID == $scope.alliPhone[$index].ProductID) {
                sweetAlert("Oops...", "This product is already in your cart. Please try to increase its amount in cart.", "error");
                return;
            }
        }

        var newObj = {
            ProductID: $scope.alliPhone[$index].ProductID,
            name: $scope.alliPhone[$index].Model,
            price: $scope.alliPhone[$index].SellingPrice,
            image: $scope.alliPhone[$index].Image,
            amount: 1
        };
        Cart.add(newObj);
        swal("​Added!", "Item is added.", "success")
            //Set Total Price
        $scope.totalPrice = Cart.totalPrice();
        $('#totalPrice_cart').html('Total Price: ' + $scope.totalPrice + ' BTH');
    }

    $scope.addToCart_Oppo = function($index) {
        //Check Carting....
        var inCart = Cart.all();

        for (var i = 0; i < inCart.length; i++) {
            if (inCart[i].ProductID == $scope.allOppo[$index].ProductID) {
                sweetAlert("Oops...", "This product is already in your cart. Please try to increase its amount in cart.", "error");
                return;
            }
        }

        var newObj = {
            ProductID: $scope.allOppo[$index].ProductID,
            name: $scope.allOppo[$index].Model,
            price: $scope.allOppo[$index].SellingPrice,
            image: $scope.allOppo[$index].Image,
            amount: 1
        };
        Cart.add(newObj);
        swal("​Added!", "Item is added.", "success")
            //Set Total Price
        $scope.totalPrice = Cart.totalPrice();
        $('#totalPrice_cart').html('Total Price: ' + $scope.totalPrice + ' BTH');
    }

    $scope.addToCart_HTC = function($index) {
        //Check Carting....
        var inCart = Cart.all();

        for (var i = 0; i < inCart.length; i++) {
            if (inCart[i].ProductID == $scope.allHTC[$index].ProductID) {
                sweetAlert("Oops...", "This product is already in your cart. Please try to increase its amount in cart.", "error");
                return;
            }
        }

        var newObj = {
            ProductID: $scope.allHTC[$index].ProductID,
            name: $scope.allHTC[$index].Model,
            price: $scope.allHTC[$index].SellingPrice,
            image: $scope.allHTC[$index].Image,
            amount: 1
        };
        Cart.add(newObj);
        swal("​Added!", "Item is added.", "success")
            //Set Total Price
        $scope.totalPrice = Cart.totalPrice();
        $('#totalPrice_cart').html('Total Price: ' + $scope.totalPrice + ' BTH');
    }

    $scope.addToCart_Samsung = function($index) {
        //Check Carting....
        var inCart = Cart.all();

        for (var i = 0; i < inCart.length; i++) {
            if (inCart[i].ProductID == $scope.allSamsung[$index].ProductID) {
                sweetAlert("Oops...", "This product is already in your cart. Please try to increase its amount in cart.", "error");
                return;
            }
        }

        var newObj = {
            ProductID: $scope.allSamsung[$index].ProductID,
            name: $scope.allSamsung[$index].Model,
            price: $scope.allSamsung[$index].SellingPrice,
            image: $scope.allSamsung[$index].Image,
            amount: 1
        };
        Cart.add(newObj);
        swal("​Added!", "Item is added.", "success")
            //Set Total Price
        $scope.totalPrice = Cart.totalPrice();
        $('#totalPrice_cart').html('Total Price: ' + $scope.totalPrice + ' BTH');
    }

    $scope.addToCart_CARD = function($index) {
        //Check Carting....
        var inCart = Cart.all();

        for (var i = 0; i < inCart.length; i++) {
            if (inCart[i].ProductID == $scope.allCard[$index].ProductID) {
                sweetAlert("Oops...", "This product is already in your cart. Please try to increase its amount in cart.", "error");
                return;
            }
        }

        var newObj = {
            ProductID: $scope.allCard[$index].ProductID,
            name: $scope.allCard[$index].Model,
            price: $scope.allCard[$index].SellingPrice,
            image: $scope.allCard[$index].Image,
            amount: 1
        };
        Cart.add(newObj);
        swal("​Added!", "Item is added.", "success")
            //Set Total Price
        $scope.totalPrice = Cart.totalPrice();
        $('#totalPrice_cart').html('Total Price: ' + $scope.totalPrice + ' BTH');
    }

    $scope.addToCart_Power = function($index) {
        //Check Carting....
        var inCart = Cart.all();

        for (var i = 0; i < inCart.length; i++) {
            if (inCart[i].ProductID == $scope.allPowerBank[$index].ProductID) {
                sweetAlert("Oops...", "This product is already in your cart. Please try to increase its amount in cart.", "error");
                return;
            }
        }

        var newObj = {
            ProductID: $scope.allPowerBank[$index].ProductID,
            name: $scope.allPowerBank[$index].Model,
            price: $scope.allPowerBank[$index].SellingPrice,
            image: $scope.allPowerBank[$index].Image,
            amount: 1
        };
        Cart.add(newObj);
        swal("​Added!", "Item is added.", "success")
            //Set Total Price
        $scope.totalPrice = Cart.totalPrice();
        $('#totalPrice_cart').html('Total Price: ' + $scope.totalPrice + ' BTH');
    }

    $scope.addToCart_searchPhone = function($index) {
        //Check Carting....
        var inCart = Cart.all();

        for (var i = 0; i < inCart.length; i++) {
            if (inCart[i].ProductID == $scope.searchList[$index].ProductID) {
                sweetAlert("Oops...", "This product is already in your cart. Please try to increase its amount in cart.", "error");
                return;
            }
        }

        var newObj = {
            ProductID: $scope.searchList[$index].ProductID,
            name: $scope.searchList[$index].Model,
            price: $scope.searchList[$index].SellingPrice,
            image: $scope.searchList[$index].Image,
            amount: 1
        };
        Cart.add(newObj);
        swal("​Added!", "Item is added.", "success")
            //Set Total Price
        $scope.totalPrice = Cart.totalPrice();
        $('#totalPrice_cart').html('Total Price: ' + $scope.totalPrice + ' BTH');
    }

    //Amount Carting Setting....
    $scope.activities = [{
        name: 1
    }, {
        name: 2
    }, {
        name: 3
    }, {
        name: 4
    }, {
        name: 5
    }, {
        name: 6
    }, {
        name: 7
    }, {
        name: 8
    }, {
        name: 9
    }, {
        name: 10
    }];

    $scope.activity = $scope.activities[0]; //Bind 2nd activity to the model.
    $scope.amountChange = function($index) {
        Cart.setAmount($index, this.activity.name);
        $scope.totalPrice = Cart.totalPrice();
    }

    //END ADD TO CART ITEM


    $scope.purchase_history = function() {
        //Load Purchasing History
        $http.get('http://omaximumo.asuscomm.com:8087/Service/GetOrderHistory?memberID=' + $scope.userMemberID)
            .then(function(resp) {
                $scope.PurchaseHistory = resp.data;
                console.log($scope.PurchaseHistory);
            })

        //GET DATA HISTORY FROM WEBSERVICE
        $("#history").modal({
            backdrop: true
        });
    }

    //HISTORY DETAIL
    $scope.viewHistoryDetail = function($index) {
        var index = $index;

        //Show Data
        $scope.orderDetail = $scope.PurchaseHistory[$index].OrderDetails;

        console.log($scope.orderDetail);

        $scope.totalAll_Price_Order = 0;

        for (var i = 0; i < $scope.orderDetail.length; i++) {
            $scope.totalAll_Price_Order += $scope.orderDetail[i].TotalPrice;
        }

        //ADD MODAL PRODUCT DETAIL.....
        $("#history_detail").modal({
            backdrop: true
        });
    }

    //End Modal Part

    $scope.aboutUsPage = function() {
        location.href = "#aboutus";
        $('#slideShow_div').hide();
        $("#homepage_tab_class").attr('class', '');
        $("#phonepage_tab_class").attr('class', '');
        $("#accessorypage_tab_class").attr('class', '');
    }


    $scope.homepage = function() {
        location.href = "#home";
        $("#homepage_tab_class").attr('class', 'active');
        $("#phonepage_tab_class").attr('class', '');
        $("#accessorypage_tab_class").attr('class', '');
        $('#slideShow_div').show();
        $('#login_panel').show();
        $('#phone_search_panel').show();
        $('#accessory_search_panel_powerbank').hide();
        $('#accessory_search_panel_card').hide();
    }

    $scope.phonepage = function() {
        if (first_time == 0) {
            //GET DATA FROM WEBSERVICE ALL BAND ALSO
            for (var i = 0; i < $scope.allPhone.length; i++) {
                if ($scope.allPhone[i].Brand.toUpperCase() == 'Oppo'.toUpperCase()) {
                    $scope.allOppo[$scope.allOppo.length] = $scope.allPhone[i];
                } else if ($scope.allPhone[i].Brand.toUpperCase() == 'Apple'.toUpperCase()) {
                    $scope.alliPhone[$scope.alliPhone.length] = $scope.allPhone[i];
                } else if ($scope.allPhone[i].Brand.toUpperCase() == 'Samsung'.toUpperCase()) {
                    $scope.allSamsung[$scope.allSamsung.length] = $scope.allPhone[i];
                } else if ($scope.allHTC[i].Brand.toUpperCase() == 'HTC'.toUpperCase()) {
                    $scope.allHTC[$scope.allHTC.length] = $scope.allPhone[i];
                }
            }
            first_time++;
        }


        location.href = "#phone-iphone";
        $("#homepage_tab_class").attr('class', '');
        $("#phonepage_tab_class").attr('class', 'active');
        $("#accessorypage_tab_class").attr('class', '');
        $('#slideShow_div').hide();
        $('#login_panel').show();

        //SHOW SEARCH
        $('#phone_search_panel').show();
        $('#accessory_search_panel_powerbank').hide();
        $('#accessory_search_panel_card').hide();
    }

    $scope.accessorypage = function() {
        location.href = "#accessory-powerBank";
        $("#homepage_tab_class").attr('class', '');
        $("#phonepage_tab_class").attr('class', '');
        $("#accessorypage_tab_class").attr('class', 'active');
        $('#slideShow_div').hide();
        $('#login_panel').show();
        // location.reload();
        $('#phone_search_panel').hide();
        $('#accessory_search_panel_powerbank').show();
        $('#accessory_search_panel_card').hide();
    }

    //Search Panel
    $scope.search = function(type) {
            if (type == 'phone') {
                var allItem = $scope.allPhone;

                var searchResult = [];
                var searchStep = [];

                var searchText = $('#band_serch_filter').val();
                var searchBand = $('#band_phone_search').val(); // Band Select
                var searchOS = $('#os_phone_search').val(); //Os Select
                var searchScreen = $('#screen_phone_search').val(); //Os Select
                var searchKind = $('#kind_phone_search').val(); //Os Select
                var searchPrice = $('#price_phone_search').val(); //Os Select

                $scope.searchWhat = searchText;

                //Initialize Data from Webservice.
                searchResult = allItem;

                //Search Filter Text
                if (searchText != '') {
                    for (var i = 0; i < allItem.length; i++) {
                        if ((allItem[i].Model.toUpperCase()).indexOf(searchText.toUpperCase()) > -1 ||
                            (allItem[i].Brand.toUpperCase()).indexOf(searchText.toUpperCase()) > -1 ||
                            (allItem[i].OS.toUpperCase()).indexOf(searchText.toUpperCase()) > -1 ||
                            (allItem[i].PhoneType.toUpperCase()).indexOf(searchText.toUpperCase()) > -1){
                            searchStep[searchStep.length] = allItem[i];
                        }
                    }
                    searchResult = searchStep;
                    searchStep = [];
                }


                if (searchBand != 'any') {
                    //Search Band Filter -> Use Search Result
                    for (var i = 0; i < searchResult.length; i++) {
                        if (searchResult[i].Brand.toUpperCase() == searchBand.toUpperCase()) {
                            searchStep[searchStep.length] = searchResult[i];
                        }
                    }
                    searchResult = searchStep;
                    searchStep = [];
                }

                if (searchOS != 'any') {
                    //Seach OS Filter ...
                    for (var i = 0; i < searchResult.length; i++) {
                        if (searchResult[i].OS.toUpperCase() == searchOS.toUpperCase()) {
                            searchStep[searchStep.length] = searchResult[i];
                        }
                    }
                    searchResult = searchStep;
                    searchStep = [];
                }

                //Search Screen Size
                if (searchScreen != 'any') {
                    var rate = parseFloat(searchScreen);
                    for (var i = 0; i < searchResult.length; i++) {
                        if (rate == 6) {
                            if (searchResult[i].DisplaySize >= 4 && searchResult[i].DisplaySize <= 6) {
                                searchStep[searchStep.length] = searchResult[i];
                            }
                        } else if (rate == 8) {
                            if (searchResult[i].DisplaySize > 6 && searchResult[i].DisplaySize <= 8) {
                                searchStep[searchStep.length] = searchResult[i];
                            }
                        } else if (rate == 99) {
                            if (searchResult[i].DisplaySize > 8) {
                                searchStep[searchStep.length] = searchResult[i];
                            }
                        }
                    }
                    searchResult = searchStep;
                    searchStep = [];
                }

                if (searchKind != 'any') {
                    //Seach Kind of Using Filter ...
                    for (var i = 0; i < searchResult.length; i++) {
                        if (searchResult[i].PhoneType.toUpperCase() == searchKind.toUpperCase()) {
                            searchStep[searchStep.length] = searchResult[i];
                        }
                    }
                    searchResult = searchStep;
                    searchStep = [];
                }

                //Search by price rate....
                if (searchPrice != 'any') {
                    var rate = parseFloat(searchPrice);
                    for (var i = 0; i < searchResult.length; i++) {
                        if (rate == 10000) {
                            if (searchResult[i].SellingPrice > 0 && searchResult[i].SellingPrice <= 10000) {
                                searchStep[searchStep.length] = searchResult[i];
                            }
                        } else if (rate == 15000) {
                            if (searchResult[i].SellingPrice > 10001 && searchResult[i].SellingPrice <= 15000) {
                                searchStep[searchStep.length] = searchResult[i];
                            }
                        } else if (rate == 99) {
                            if (searchResult[i].SellingPrice > 15000) {
                                searchStep[searchStep.length] = searchResult[i];
                            }
                        }
                    }
                    searchResult = searchStep;
                    searchStep = [];
                }

                $scope.searchList = searchResult;

                // Change Page
                location.href = "#search-result";
                $('#slideShow_div').hide();
                window.scrollTo(0, 0);

                //Set to default value
                $('#band_serch_filter').val('');
                document.getElementById("band_phone_search").selectedIndex = "0";
                document.getElementById("os_phone_search").selectedIndex = "0";
                document.getElementById("screen_phone_search").selectedIndex = "0";
                document.getElementById("kind_phone_search").selectedIndex = "0";
                document.getElementById("price_phone_search").selectedIndex = "0";

            } else if (type == 'powerbank') {
                var capSearch = $('#powerbank_capacity_search').val();
                var allItem = $scope.allPowerBank;

                var searchResult = [];
                var searchStep = [];

                searchResult = allItem;

                if (capSearch != 'any') {
                    var rate = parseFloat(capSearch);
                    for (var i = 0; i < searchResult.length; i++) {
                        if (rate == 5000) {
                            if (searchResult[i].Capacity > 0 && searchResult[i].Capacity <= 5000) {
                                searchStep[searchStep.length] = searchResult[i];
                            }
                        } else if (rate == 10000) {
                            if (searchResult[i].Capacity > 5000 && searchResult[i].Capacity <= 10000) {
                                searchStep[searchStep.length] = searchResult[i];
                            }
                        } else if (rate == 20000) {
                            if (searchResult[i].Capacity > 10000 && searchResult[i].Capacity <= 20000) {
                                searchStep[searchStep.length] = searchResult[i];
                            }
                        } else if (rate == 99) {
                            if (searchResult[i].Capacity > 20000) {
                                searchStep[searchStep.length] = searchResult[i];
                            }
                        }
                    }
                    searchResult = searchStep;
                    searchStep = [];
                }

                $scope.searchList = searchResult;

                // Change Page
                location.href = "#search-result";
                $('#slideShow_div').hide();
                window.scrollTo(0, 0);

                //Set to default value
                $('#band_serch_filter').val('');
                document.getElementById("powerbank_capacity_search").selectedIndex = "0";
            } else if (type == 'card') {
                var capSearch = $('#card_cap_search').val();
                var typeSearch = $('#card_type_search').val();

                var allItem = $scope.allCard;

                var searchResult = [];
                var searchStep = [];

                searchResult = allItem;

                if (capSearch != 'any') {
                    var rate = parseFloat(capSearch);

                    for (var i = 0; i < searchResult.length; i++) {
                        if (rate == 4) {
                            if (searchResult[i].Capacity > 0 && searchResult[i].Capacity <= 4) {
                                searchStep[searchStep.length] = searchResult[i];
                            }
                        } else if (rate == 16) {
                            if (searchResult[i].Capacity > 4 && searchResult[i].Capacity <= 16) {
                                searchStep[searchStep.length] = searchResult[i];
                            }
                        } else if (rate == 32) {
                            if (searchResult[i].Capacity > 16 && searchResult[i].Capacity <= 32) {
                                searchStep[searchStep.length] = searchResult[i];
                            }
                        } else if (rate == 99) {
                            if (searchResult[i].Capacity > 32) {
                                searchStep[searchStep.length] = searchResult[i];
                            }
                        }
                    }
                    searchResult = searchStep;
                    searchStep = [];
                }

                if (typeSearch != 'any') {
                    for (var i = 0; i < searchResult.length; i++) {
                        if (searchResult[i].CardType.toUpperCase() == typeSearch.toUpperCase()) {
                            searchStep[searchStep.length] = searchResult[i];
                        }
                    }
                    searchResult = searchStep;
                    searchStep = [];
                }

                $scope.searchList = searchResult;

                // Change Page
                location.href = "#search-result";
                $('#slideShow_div').hide();
                window.scrollTo(0, 0);

                //Set to default value
                $('#band_serch_filter').val('');
                document.getElementById("card_cap_search").selectedIndex = "0";
                document.getElementById("card_type_search").selectedIndex = "0";
            }
        }
        //End Search Panel

    //Process click
    $scope.confirm_regis = function() {
        var user = $('#username_regis').val();
        var password = $('#password_regis').val();
        var name = $('#firstname_regis').val();
        var email = $('#email_regis').val();
        var phone = $('#phone_regis').val();
        var date = $('#datepicker').val();
        var address = $('#address_regis').val();
        var zip = $('#zipcode_regis').val();
        var gender = $('#gender_regis').val();

        var dd = date;
        var timeSS = dd.split('/');
        dd = timeSS[2] + '/' + timeSS[0] + '/' + timeSS[1];

        $http.get('http://omaximumo.asuscomm.com:8087/Service/RegisterMember?username=' + user + '&password=' + password +
                '&name=' + name + '&birthDate=' + dd + '&gender=' + gender + '&address=' + address +
                '&email=' + email + '&tel=' + phone)
            .then(function(resp) {

                if (resp.data == 'Registered Successfully') {
                    alert('Successful');
                    //Check Registration Info
                    $scope.clearRegisField();

                    $('#myRegis').modal('hide');
                }
            })
    }

    //Carting Panel

    $scope.confirm_purchase = function() {
        //Check Empty Cart
        if ($scope.allCartItems.length == 0) {
            sweetAlert("Oops...", "The cart is empty. Please add something before confirm.", "error");
            return;
        }

        swal({
            title: "Are you sure?",
            text: "Do you want to submit all of these item(s).",
            type: "info",
            showCancelButton: true,
            confirmButtonColor: "#EF7070",
            confirmButtonText: "Purchase",
            closeOnConfirm: false
        }, function() {
            if ($scope.username == '') {
                // alert('non-member');
                swal("Oops!", "You are not the member-user. So, you have to fill in your address information first.", "info");
                $("#nonuser_modal").modal({
                    backdrop: true
                });
            } else {
                //Get Current Time to comapre with SQL Timestamp
                var date = new Date();
                var useDate = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getUTCDate();

                var cusCurDate = useDate;

                //Loop to get orderList in Carting...... -> productID,amount;
                var cartAll = Cart.all();
                var allOrder = '';

                for (var i = 0; i < cartAll.length; i++) {
                    if (i == cartAll.length - 1) {
                        allOrder += cartAll[i].ProductID + ',' + cartAll[i].amount;
                    } else {
                        allOrder += cartAll[i].ProductID + ',' + cartAll[i].amount + ';';
                    }
                }

                $http.get('http://omaximumo.asuscomm.com:8087/Service/PlaceOrder?name=' + $scope.userName + '&address=' + $scope.userAddress + '&email=' + $scope.userEmail + '&tel=' + $scope.userPhone + '&date=' + cusCurDate + '&memberID=' + $scope.userMemberID + '&orderList=' + allOrder)
                    .then(function(resp) {
                        console.log("Status: " + resp.data);
                    })

                swal("Successful!", "Your purchasing is succesful.", "success");
                Cart.clear();
                //Set Total Price
                $scope.totalPrice = Cart.totalPrice();
                $('#totalPrice_cart').html('Total Price: ' + $scope.totalPrice + ' BTH');

                $('#myCart').modal('hide');

                console.log('http://omaximumo.asuscomm.com:8087/Service/PlaceOrder?name=' + $scope.userName + '&address=' + $scope.userAddress + '&email=' + $scope.userEmail + '&tel=' + $scope.userPhone + '&date=' + cusCurDate + '&memberID=' + $scope.userMemberID + '&orderList=' + allOrder);

                location.reload();
            }
        });
    }

    $scope.confirm_purchase_nonuser = function() {
        //Non-Member
        var cusName = $('#name_nonuser').val();
        var cusAddress = $('#address_nonuser').val();
        var cusEmail = $('#email_nonuser').val();
        var cusTel = $('#phone_nonuser').val();

        //Get Current Time to comapre with SQL Timestamp
        var date = new Date();
        var useDate = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getUTCDate();

        var cusCurDate = useDate;

        //Loop to get orderList in Carting...... -> productID,amount;
        var cartAll = Cart.all();
        var allOrder = '';
        for (var i = 0; i < cartAll.length; i++) {
            if (i == cartAll.length - 1) {
                allOrder += cartAll[i].ProductID + ',' + cartAll[i].amount;
            } else {
                allOrder += cartAll[i].ProductID + ',' + cartAll[i].amount + ';';
            }
        }

        $http.get('http://omaximumo.asuscomm.com:8087/Service/PlaceOrder?name=' + cusName + '&address=' + cusAddress + '&email=' + cusEmail + '&tel=' + cusTel + '&date=' + cusCurDate + '&memberID=""' +
                '&orderList=' + allOrder)
            .then(function(resp) {
                console.log("Status: " + resp.data);
            })

        swal("Successful!", "Your purchasing is succesful.", "success");
        Cart.clear();
        //Set Total Price
        $scope.totalPrice = Cart.totalPrice();
        $('#totalPrice_cart').html('Total Price: ' + $scope.totalPrice + ' BTH');

        $('#myCart').modal('hide');
        $('#nonuser_modal').modal('hide');

        location.reload();
    }

    $scope.del_from_cart = function($index) {
        //Alert Before Delete
        Cart.remove(Cart.getIndex($index));
        $scope.totalPrice = Cart.totalPrice();
        //Set Total Price
        $('#totalPrice_cart').html('Total Price: ' + $scope.totalPrice + ' BTH');
        $scope.allCartItems = Cart.all();
    }

    $scope.clearCart = function() {
        Cart.clear();
        $scope.allCartItems = Cart.all();
        //Set Total Price
        $scope.totalPrice = Cart.totalPrice();
        $('#totalPrice_cart').html('Total Price: ' + $scope.totalPrice + ' BTH');
    }

    //End Cart Panel

    // create slider show MVC variable [More 5 Images]
    var htmlText = '';
    htmlText += '<figure><img src="img/slideshow/SAM.png" alt="class-header-css3"';
    htmlText += ' width="750" height="320" class="alignnone size-full wp-image-172" /><figcaption><strong>CSS3:</strong> CSS3 delivers a wide range of ';
    htmlText += 'stylization and effects, enhancing the web app without sacrificing your semantic structure or performance. Additionally Web ';
    htmlText += 'Open Font Format (WOFF) provides typographic flexibility and control far beyond anything the web has offered before.</figcaption>';
    htmlText += '</figure>';

    htmlText += '<figure><img src="img/slideshow/BASSY.png" alt="class-header-';
    htmlText += 'semantics" width="750" height="320" class="alignnone size-full wp-image-179" /><figcaption><strong>Semantics:</strong> Giving meaning to structure, semantics are front and center with HTML5. A richer set of tags, along with RDFa, microdata, and microformats, are enabling a more useful, data driven web for both programs and your users.</figcaption>';
    htmlText += '</figure>';

    htmlText += '<figure><img src="img/slideshow/available.png" alt="class-header-offline" width="750" height="320" class="alignnone size-large wp-image-178" /><figcaption><strong>Offline &amp; Storage:</strong> Web Apps can start faster and work even if there is no internet connection, thanks to the HTML5 App Cache, as well as the Local Storage, Indexed DB, and the File API specifications.</figcaption></figure>';

    htmlText += '<figure><img src="img/slideshow/Welcome.png" alt="class-header-device" width="750" height="320" class="alignnone size-full wp-image-177" />';
    htmlText += '<figcaption><strong>Device Access:</strong> Beginning with the Geolocation API, Web Applications can present rich, device-aware features and experiences. Incredible device access innovations are being developed and implemented, from audio/video input access to microphones and cameras, to local data such as contacts &amp; events, and even tilt orientation.</figcaption>';
    htmlText += '</figure>';

    htmlText += '<figure><img src="img/slideshow/SAM.png" alt="class-header-connectivity" width="750" height="320" class="alignnone size-large wp-image-176" /><figcaption><strong>Connectivity:</strong> More efficient connectivity means more real-time chats, faster games, and better communication. Web Sockets and Server-Sent Events are pushing (pun intended) data between client and server more efficiently than ever before.</figcaption>';
    htmlText += '</figure>';

    htmlText += '<figure><img src="img/slideshow/BASSY.png" alt="class-header-multimedia" width="750" height="320" class="alignnone size-large wp-image-175" /><figcaption><strong>Multimedia:</strong> Audio and video are first class citizens in the HTML5 web, living in harmony with your apps and sites. Lights, camera, action!</figcaption>';
    htmlText += '</figure>';

    htmlText += '<figure><img src="img/slideshow/available.png" alt="class-header-3d" width="750" height="320" class="alignnone size-large wp-image-174" /><figcaption><strong>3D, Graphics &amp; Effects:</strong> Between SVG, Canvas, WebGL, and CSS3 3D features, you are sure to amaze your users with stunning visuals natively rendered in the browser.</figcaption>';
    htmlText += '</figure>';

    htmlText += '<figure><img src="img/slideshow/Welcome.png" alt="class-header-performance" width="750" height="320" class="alignnone size-large wp-image-173" />';
    htmlText += '<figcaption><strong>Performance &amp; Integration:</strong> Make your Web Apps and dynamic web content faster with a variety of techniques and technologies such as Web Workers and XMLHttpRequest 2. No user should ever wait on your watch.</figcaption></figure>';

    $('#slideshow').html(htmlText);

    //Private use function
    $scope.clearRegisField = function() {
        $('#username_regis').val('');
        $('#password_regis').val('');
        $('#firstname_regis').val('');
        $('#lastname_regis').val('');
        $('#email_regis').val('');
        $('#phone_regis').val('');
        $('#datepicker').val('');
        // Furthers
        $('#address_regis').val('');
        $('#zipcode_regis').val('');
    }

    //Login Panel
    $scope.login = function() {
        var id = $('#username_login').val();
        var password = $('#password_login').val();

        if (id == 'owner' && password == 'owner') {
            location.href = "owner.html";
            // $('#search_panel').hide();
        } else if (id == 'staff' && password == 'staff') {
            location.href = "staff.html";
            // $('#search_panel').hide();
        } else {
            //User Login
            $http.get('http://omaximumo.asuscomm.com:8087/service/GetMember?username=' + id + '&password=' + password)
                .then(function(resp) {
                    console.log(resp.data);
                    //Check to login
                    if (resp.data != '') {
                        //GET DATA
                        $scope.userAddress = resp.data.Address;
                        $scope.userDate = resp.data.DOB;
                        $scope.userEmail = resp.data.Email;
                        $scope.userGender = resp.data.Gender;
                        $scope.userMemberID = resp.data.MemberID;
                        $scope.userName = resp.data.Name;
                        $scope.userPassword = resp.data.Password;
                        $scope.userPhone = resp.data.Phone;
                        $scope.userUsername = resp.data.UserName;

                        $scope.username = $scope.userUsername;
                        $scope.fullname = $scope.userName;
                        $scope.email = $scope.userEmail;
                        $scope.address = $scope.userAddress;

                        $('#login_detail_panel').show();
                        $('#login_field_panel').hide();

                        Recommend_Data.clear();
                        $scope.recommendList = Recommend_Data.all('member', $scope.userMemberID);
                    } else {
                        sweetAlert("Oops...", "Your username or password is incorrect !", "error");
                    }
                })
        }
        $('#username_login').val('');
        $('#password_login').val('');
    }

    $scope.logout = function() {
        location.reload();
    }

    $scope.updateInfo = function() {
        var userInfo = User_Info.all();
        //Set value to show
        $scope.username_update = $scope.userUsername;
        $scope.password_update = $scope.userPassword;

        var nName = $scope.userName.split(' ');

        $scope.firstname_update = nName[0];
        $scope.lastname_update = nName[1];

        $scope.email_update = $scope.userEmail;
        $scope.phone_update = $scope.userPhone;
        $scope.birth_update = $scope.userDate;
        $scope.address_update = $scope.userAddress;

        $scope.fullname = $scope.userName;

        $("#update_info").modal({
            backdrop: true
        });
    }

    $scope.confirm_update = function() {
            //Check confirm Password is correct or not
            var fName = $('#fullname_update').val();
            var email = $('#email_update').val();
            var phone = $('#phone_update').val();
            var add = $('#address_update').val();

            if ($('#password_update').val() == $scope.userPassword) {
                //Query to update user info.....
                $http.get('http://omaximumo.asuscomm.com:8087/service/EditMember?username=' + $scope.username_update + '&password=' + $scope.password_update + '&name=' + fName + '&address=' + add + '&email=' + email + '&tel=' + phone)
                    .then(function(resp) {

                    })
                swal("​Sucessful !", "Your updating is successful.", "success")
                $("#update_info").modal('hide');
            } else {
                swal("Oops !", "Your fill in wrong password !", "error")
            }
        }
        //End Login Panel
})

.controller('aboutController', function($scope, Cart) {
    var newObj = {
        id: 1,
        name: 'Bas',
        phone: '099-999-9999',
        avartar: 'http://i.ytimg.com/vi/vSXk6-8ALro/hqdefault.jpg',
        email: 'bb@email.com'
    };
    Cart.add(newObj);
    $scope.message = 'Look! I am an about page.';
})

.controller('contactController', function($scope) {
    $scope.message = 'Contact us! JK. This is just a demo.';
})

.controller('phoneMenuController', function($scope, Cart) {

    $scope.iPhoneClick = function() {
        location.href = "#phone-iphone";
    }

    $scope.SamsungClick = function() {
        location.href = "#phone-samsung";
    }

    $scope.HTCClick = function() {
        location.href = "#phone-htc";
    }

    $scope.OPPOClick = function() {
        location.href = "#phone-oppo";
    }

    $scope.PowerbankClick = function() {
        location.href = "#accessory-powerBank";
        $('#phone_search_panel').hide();
        $('#accessory_search_panel_powerbank').show();
        $('#accessory_search_panel_card').hide();
    }

    //MEMORY CARD
    $scope.ChargingcableClick = function() {
        location.href = "#accessory-charge";
        $('#phone_search_panel').hide();
        $('#accessory_search_panel_powerbank').hide();
        $('#accessory_search_panel_card').show();
    }

    $scope.EarphoneClick = function() {
        location.href = "#accessory-ear";
    }

    $scope.OtherAccessoryClick = function() {
        location.href = "#accessory-other";
    }
})