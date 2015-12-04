var scotchApp = angular.module('staffApp', ['staffApp.service'])

.controller('staffCtr', function($scope, Staff) {

    //Hide and Show Panel -> Initialize
    $('#phone_panel').show();
    $('#power_panel').hide();
    $('#mem_panel').hide();

    $scope.increse_amount = 0;
    $scope.currentAmount = 15 + $scope.increse_amount;

    $scope.orderItem = Staff.allPhone();
    // $scope.CardItem = Staff.allCard();
    // $scope.PowerBankItem = Staff.allPowerBank();

    //What view that now staff looking on
    $scope.lookOn = 'phone';

    $scope.allProductKind = function(kind) {
        Staff.clearAll();
        if (kind == 'phone') {
            $scope.orderItem = Staff.allPhone();
            $scope.lookOn = 'phone';
        } else if (kind == 'card') {
            $scope.orderItem = Staff.allCard();
            $scope.lookOn = 'card';
        } else if (kind == 'power') {
            $scope.orderItem = Staff.allPowerBank();
            $scope.lookOn = 'power';
        }
    }

    $scope.addAmount = function($index) {
        //Insert amount....
        $scope.currentAmount = $scope.orderItem[$index].Amount;

        $("#updateAmount_staff").modal({
            backdrop: true
        });
    }

    $scope.sortList = function(kind) {
        if (kind == 'id') {
            $scope.orderItem.sort(function(a, b) {
                var textA = b.ProductID;
                var textB = a.ProductID;
                return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
            });
        }
    }

    $scope.addProduct = function() {
        $scope.clearAllInsert();

        //Other
        $("#addproduct_modal").modal({
            backdrop: true
        });
    }

    $scope.editProduct = function($index) {

        $scope.editItem = $scope.orderItem[$index];

        if ($scope.lookOn == 'phone') {
            //Show Phone Panel
            $('#phone_panel').show();
            $('#power_panel').hide();
            $('#mem_panel').hide();

            //GET VALUE
            $('#insert_band_phone').val($scope.editItem.Brand);
            $('#insert_OS_phone').val($scope.editItem.OS);
            $('#insert_kind_phone').val($scope.editItem.PhoneType);
            $('#insert_purchase_phone').val($scope.editItem.PurchasingPrice);
            $('#insert_screenSize_phone').val($scope.editItem.DisplaySize);
            $('#insert_amount_phone').val($scope.editItem.Amount);
            $('#insert_model_phone').val($scope.editItem.Model);
            $('#insert_selling_phone').val($scope.editItem.SellingPrice);

            var dd = '';
            for (var i = 0; i < $scope.editItem.Description.length; i++) {
                dd += $scope.editItem.Description[i];
            }
            $('#insert_des_phone').val(dd);
        }
        //Other
        $("#addproduct_modal").modal({
            backdrop: true
        });
    }


    $scope.clearAllInsert = function() {
        $('#insert_band_phone').val('');
        $('#insert_OS_phone').val('');
        $('#insert_kind_phone').val('');
        $('#insert_purchase_phone').val('');
        $('#insert_screenSize_phone').val('');
        $('#insert_amount_phone').val('');
        $('#insert_modal_phone').val('');
        $('#insert_des_phone').val('');
        $('#insert_selling_phone').val('');
    }

    function readURL(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();

            reader.onload = function(e) {
                $('#blah').attr('src', e.target.result);
                // console.log(e.target.result);

                var imagebase64All = (e.target.result).split(',');
                //USE [1] as Data
                var base64Img = imagebase64All[1];
                //KEEP FACEBOOK PHOTO TO ACCOUNT.

                console.log(base64Img);
            }

            reader.readAsDataURL(input.files[0]);
        }
    }

    $("#imgInp").change(function() {
        readURL(this);
    });

    //Show, Hide Panel
    $scope.powerbank_panel = function() {
        $('#phone_panel').hide();
        $('#power_panel').show();
        $('#mem_panel').hide();
    }

    $scope.phone_panel = function() {
        $('#phone_panel').show();
        $('#power_panel').hide();
        $('#mem_panel').hide();
    }

    $scope.card_panel = function() {
        $('#phone_panel').hide();
        $('#power_panel').hide();
        $('#mem_panel').show();
    }

    //ADD PRODUCT
    $scope.insertProduct = function() {
        if ($("#phone_panel").is(":visible") == true) {
            //PHONE ADD
            var jsondata = {
                filebyte: $scope.b64image,
                filename: imagename + ".png",
                modtimehhmm: testdate
            };

            console.log(jsondata);
            $http.post("http://www.inventech.co.th/dbo_rb/B2BSERVICES.svc/UPLOAD",
                    jsondata)
                .success(function(suc) {
                    alert("Upload sucessed.");
                })
                .error(function(err) {
                    alert(err);
                });

            alert('phone');
        } else if ($("#power_panel").is(":visible") == true) {
            //POWER BANK ADD
            alert('power');
        } else if ($("#mem_panel").is(":visible") == true) {
            //MEMORY ADD
            alert('card');
        }
    }

    $scope.viewHistoryDetail = function() {
        $("#history_detail").modal({
            backdrop: true
        });
    }

    $scope.staffLogout = function() {
        location.href = "index.html";
    }

})

.controller('ownerCtr', function($scope, Owner) {
    $('#tableContent').hide();
    $('#gender_table').hide();

    $scope.ownerLogin = function() {
        location.href = "index.html";
    }

    $scope.genReport = function() {
        if ($('#gender_check').is(":checked")) {
            $('#gender_table').show();
            $('#tableContent').hide();

        } else {
            $('#tableContent').show();
            $('#gender_table').hide();
        }



    }
})