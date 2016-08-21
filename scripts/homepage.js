<<<<<<< HEAD
!function(e){function t(a){if(s[a])return s[a].exports;var n=s[a]={exports:{},id:a,loaded:!1};return e[a].call(n.exports,n,n.exports,t),n.loaded=!0,n.exports}var s={};return t.m=e,t.c=s,t.p="/scripts",t(0)}([function(e,t){"use strict";$(function(){function e(){var e=["de","en","es","fr","it","jp","nl","zh"],t=$("html").prop("lang");return/^zh_CN/.test(t)?"zh":e.indexOf(t)!==-1?t:void 0}function t(t){StripeCheckout.open({key:stripeKey,token:function(e){console.log(JSON.parse(JSON.stringify(e))),s(t,e),a()},name:"elementary LLC.",description:releaseTitle+" "+releaseVersion,bitcoin:!0,alipay:"auto",locale:e()||"auto",amount:t})}function s(e,t){var s=$("#amount-ten");window.ga&&ga("send","event",releaseTitle+" "+releaseVersion+" Payment (Actual)","Homepage",e),0!==s.val()&&($("#amounts").html('<input type="hidden" id="amount-ten" value="0">'),o());var a=new XMLHttpRequest;a.open("POST","./backend/payment.php",!0),a.setRequestHeader("Content-type","application/x-www-form-urlencoded"),a.send("description="+encodeURIComponent(releaseTitle+" "+releaseVersion)+"&amount="+e+"&token="+t.id+"&email="+encodeURIComponent(t.email))}function a(){var e=$(".open-modal");console.log("Open the download overlay!"),e.leanModal({top:"15vmin",overlayOpacity:.5,closeButton:".close-modal"}),e.click()}function n(){var e=window.navigator.userAgent;return e.indexOf("Android")>=0?"Android":e.indexOf("Mac OS X")>=0&&e.indexOf("Mobile")>=0?"iOS":e.indexOf("Windows")>=0?"Windows":e.indexOf("Mac_PowerPC")>=0||e.indexOf("Macintosh")>=0?"OS X":e.indexOf("Linux")>=0?"Linux":"Other"}function o(){var e=$("#translate-download").text(),t=$("#translate-purchase").text();$("#amounts").children().length<=1?($("#download").text(e),document.title=e):$("button.payment-button").hasClass("checked")||100*$("#amount-custom").val()>=i?($("#download").text(t),document.title=t):($("#download").text(e),document.title=e)}var i=100,l="amount-ten",r="amount-ten",c=function(e){var t=$(e.target).attr("id"),s=e.type;if(!$(e.target).hasClass("target-amount")&&"amount-custom"===r){var a=document.getElementById("amount-custom");a.validity.valid&&""!==a.value||(t=l,s="click")}"amount-custom"!==t&&"focusin"===s||!$("#"+t).hasClass("target-amount")||("amount-custom"!==t&&(l=t),$(".target-amount").removeClass("checked"),$("#"+t).addClass("checked"),r=t,o())};$(document).on("click focusin",c);var d=function(e){var t=$("#amount-custom").val(),s=e.which||e.keyCode||e.charCode;46===s&&t.indexOf(".")===-1||[8,37,39].indexOf(s)!==-1||!(s<48||s>57)||e.preventDefault()};if($("#amount-custom").keypress(d),$("#download").click(function(){var e=100*$("#"+r).val();console.log("Pay "+r),console.log("Starting payment for "+e),e<i?(window.ga&&ga("send","event",releaseTitle+" "+releaseVersion+" Download (Free)","Homepage",e),a()):(window.ga&&ga("send","event",releaseTitle+" "+releaseVersion+" Payment (Initiated)","Homepage",e),t(e))}),window.ga)for(var g=$("#download-modal").find(".actions").find("a"),u=[{arch:"32-bit",method:"HTTP"},{arch:"32-bit",method:"Magnet"},{arch:"64-bit",method:"HTTP"},{arch:"64-bit",method:"Magnet"}],h=0;h<u.length;h++)!function(e,t){$(t).click(function(){ga("send","event",releaseTitle+" "+releaseVersion+" Download (Architecture)","Homepage",e.arch),ga("send","event",releaseTitle+" "+releaseVersion+" Download (Method)","Homepage",e.method),ga("send","event",releaseTitle+" "+releaseVersion+" Download (OS)","Homepage",n()),ga("send","event",releaseTitle+" "+releaseVersion+" Download (Region)","Homepage",downloadRegion)})}(u[h],g[h]);new Slider({slideContainer:".slide-container",choiceContainer:"#carousel-choices",slides:["photos","music","videos","midori"],fixed:!0}),$(function(){$.getJSON("data/slingshot.json",function(e){$.each(e.grid,function(e,t){var s='<div class="app '+t.position+'"><img src="images/icons/'+t.icon+'.svg" alt="'+t.title+'"/><p>'+t.title+"</p>";$(s).appendTo(".slingshot-grid")}),$.each(e.categories,function(e,t){var s='<div class="app '+t.position+'"><img src="images/icons/'+t.icon+'.svg" alt="'+t.title+'"/><p>'+t.title+"</p>";$(s).appendTo(".slingshot-categories")}),$.each(e.searchone,function(e,t){var s='<div class="search-result"><img class="result-img" src="images/icons/32/'+t.icon+'.svg" alt="'+t.title+'"/><p>'+t.title+"</p>";$(s).appendTo(".searchone")}),$.each(e.searchtwo,function(e,t){var s='<div class="search-result"><img class="result-img" src="images/icons/32/'+t.icon+'.svg" alt="'+t.title+'"/><p>'+t.title+"</p>";$(s).appendTo(".searchtwo")}),$.each(e.searchthree,function(e,t){var s='<div class="search-result"><img class="result-img" src="images/icons/32/'+t.icon+'.svg" alt="'+t.title+'"/><p>'+t.title+"</p>";$(s).appendTo(".searchthree")})})}),$(function(){window.setInterval(function(){$("#slingshot-grid").hasClass("active")?($("#slingshot-grid").addClass("previous"),$("#slingshot-grid").removeClass("active"),$("#slingshot-categories").removeClass("next"),$("#slingshot-categories").addClass("active"),$("#slingshot-categories-button").addClass("active"),$("#slingshot-grid-button").removeClass("active")):$("#slingshot-categories").hasClass("active")?($("#slingshot-categories").addClass("previous"),$("#slingshot-categories").removeClass("active"),$("#slingshot-search").removeClass("next"),$("#slingshot-search").addClass("active"),$(".slingshot .clear-icon").removeClass("inactive"),$(".slingshot .search-term").removeClass("inactive"),$(".searchone").removeClass("inactive"),setTimeout(function(){$(".slingshot-search-results").addClass("inactive"),$(".searchtwo").removeClass("inactive")},700),setTimeout(function(){$(".slingshot-search-results").addClass("inactive"),$(".searchthree").removeClass("inactive")},1200),$(".slingshot .linked").addClass("inactive"),$(".slingshot .entry").addClass("expanded")):$("#slingshot-search").hasClass("active")&&($("#slingshot-search").addClass("next"),$("#slingshot-search").removeClass("active"),$("#slingshot-grid").removeClass("previous"),$("#slingshot-grid").addClass("active"),$("#slingshot-categories").addClass("next"),$("#slingshot-categories").removeClass("previous"),$(".slingshot .clear-icon, .slingshot .search-term, .slingshot-search-results").addClass("inactive"),$(".slingshot .linked").removeClass("inactive"),$(".slingshot .entry").removeClass("expanded"),$("#slingshot-grid-button").addClass("active"),$("#slingshot-categories-button").removeClass("active"))},3e3)}),$("#amounts").on("click",o),$("#amounts input").on("input",o),o(),console.log("Loaded homepage.js")})}]);
=======
/* global ga Slider releaseTitle releaseVersion stripeKey StripeCheckout downloadRegion */

$(function () {
    var paymentMinimum = 100 // Let's make the minimum $1.00 for now

    var previousButton = 'amount-ten'
    var currentAmount = 'amount-ten'

    var amountHandler = function (e) {
        var targetId = $(e.target).attr('id') // avoids null values vs native js
        var targetType = e.type

        // Verify the number
        if (!$(e.target).hasClass('target-amount') && currentAmount === 'amount-custom') {
            var i = document.getElementById('amount-custom')

            // all the things for a 'bad input'
            if (!i.validity.valid || i.value === '') {
                targetId = previousButton
                targetType = 'click'
            }
        }

        // on button / input becoming active. Focus of custom amount with valid input considered becoming active
        if ((targetId === 'amount-custom' || targetType !== 'focusin') && $('#' + targetId).hasClass('target-amount')) {
            if (targetId !== 'amount-custom') previousButton = targetId

            $('.target-amount').removeClass('checked')
            $('#' + targetId).addClass('checked')
            currentAmount = targetId

            updateDownloadButton()
        }
    }

    // Capture all inputs so we can dictate what download amount is in use
    $(document).on('click focusin', amountHandler)

    var amountValidate = function (event) {
        var currentVal = $('#amount-custom').val()
        var code = event.which || event.keyCode || event.charCode

        if ((code !== 46 || currentVal.indexOf('.') !== -1) &&
        [8, 37, 39].indexOf(code) === -1 &&
        (code < 48 || code > 57)) {
            event.preventDefault()
        }
    }

    // Don't allow non-digit input
    $('#amount-custom').keypress(amountValidate)

    $('#download').click(function () {
        var paymentAmount = $('#' + currentAmount).val() * 100

        console.log('Pay ' + currentAmount)
        console.log('Starting payment for ' + paymentAmount)

        if (paymentAmount < paymentMinimum) {
            if (window.ga) {
                ga('send', 'event', releaseTitle + ' ' + releaseVersion + ' Download (Free)', 'Homepage', paymentAmount)
            }

            openDownloadOverlay()
        } else {
            if (window.ga) {
                ga('send', 'event', releaseTitle + ' ' + releaseVersion + ' Payment (Initiated)', 'Homepage', paymentAmount)
            }

            doStripePayment(paymentAmount)
        }
    })

    function stripeLanguage () {
        var stripeLanguages = ['de', 'en', 'es', 'fr', 'it', 'jp', 'nl', 'zh']
        var languageCode = $('html').prop('lang')

        // Stripe supports simplified chinese
        if (/^zh_CN/.test(languageCode)) {
            return 'zh'
        }

        if (stripeLanguages.indexOf(languageCode) !== -1) {
            return languageCode
        }
    }

    function detectOS () {
        var ua = window.navigator.userAgent

        if (ua.indexOf('Android') >= 0) {
            return 'Android'
        }

        if (ua.indexOf('Mac OS X') >= 0 && ua.indexOf('Mobile') >= 0) {
            return 'iOS'
        }

        if (ua.indexOf('Windows') >= 0) {
            return 'Windows'
        }

        if (ua.indexOf('Mac_PowerPC') >= 0 || ua.indexOf('Macintosh') >= 0) {
            return 'OS X'
        }

        if (ua.indexOf('Linux') >= 0) {
            return 'Linux'
        }

        return 'Other'
    }
    var detectedOS = detectOS()

    function doStripePayment (amount) {
        StripeCheckout.open({
            key: stripeKey,
            token: function (token) {
                console.log(JSON.parse(JSON.stringify(token)))

                processPayment(amount, token)
                openDownloadOverlay()
            },
            name: 'elementary LLC.',
            description: releaseTitle + ' ' + releaseVersion,
            bitcoin: true,
            alipay: 'auto',
            locale: stripeLanguage() || 'auto',
            amount: amount
        })
    }

    function processPayment (amount, token) {
        var $amountTen = $('#amount-ten')

        if (window.ga) {
            ga('send', 'event', releaseTitle + ' ' + releaseVersion + ' Payment (Actual)', 'Homepage', amount)
        }

        if ($amountTen.val() !== 0) {
            $('#amounts').html('<input type="hidden" id="amount-ten" value="0">')
            updateDownloadButton()
        }

        var paymentHttp = new XMLHttpRequest()
        paymentHttp.open('POST', './backend/payment.php', true)
        paymentHttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded')
        paymentHttp.send('description=' + encodeURIComponent(releaseTitle + ' ' + releaseVersion) +
                     '&amount=' + amount +
                     '&token=' + token.id +
                     '&email=' + encodeURIComponent(token.email) +
                     '&os=' + detectedOS
        )
    }

    function openDownloadOverlay () {
        var $openModal = $('.open-modal')

        console.log('Open the download overlay!')

        $openModal.leanModal({
            top: '15vmin',
            overlayOpacity: 0.5,
            closeButton: '.close-modal'
        })

        $openModal.click()
    }

    if (window.ga) {
        var downloadLinks = $('#download-modal').find('.actions').find('a')

        var linksData = [
        { arch: '32-bit', method: 'HTTP' },
        { arch: '32-bit', method: 'Magnet' },
        { arch: '64-bit', method: 'HTTP' },
        { arch: '64-bit', method: 'Magnet' }
        ]

        for (var i = 0; i < linksData.length; i++) {
            (function (data, link) {
                $(link).click(function () {
                    ga('send', 'event', releaseTitle + ' ' + releaseVersion + ' Download (Architecture)', 'Homepage', data.arch)
                    ga('send', 'event', releaseTitle + ' ' + releaseVersion + ' Download (Method)', 'Homepage', data.method)
                    ga('send', 'event', releaseTitle + ' ' + releaseVersion + ' Download (OS)', 'Homepage', detectedOS)
                    ga('send', 'event', releaseTitle + ' ' + releaseVersion + ' Download (Region)', 'Homepage', downloadRegion)
                })
            })(linksData[i], downloadLinks[i])
        }
    }

    // Carousel
    // TODO: fix slider actions on load
    // eslint-disable-next-line no-new
    new Slider({
        slideContainer: '.slide-container',
        choiceContainer: '#carousel-choices',
        slides: ['photos', 'music', 'videos', 'midori'],
        fixed: true
    })

    $(function () {
        $.getJSON('data/slingshot.json', function (data) {
            $.each(data.grid, function (i, f) {
                var griditems = '<div class="app ' + f.position + '"><img src="images/icons/' + f.icon + '.svg" alt="' + f.title + '"/><p>' + f.title + '</p>'
                $(griditems).appendTo('.slingshot-grid')
            })
            $.each(data.categories, function (i, f) {
                var categoriesitems = '<div class="app ' + f.position + '"><img src="images/icons/' + f.icon + '.svg" alt="' + f.title + '"/><p>' + f.title + '</p>'
                $(categoriesitems).appendTo('.slingshot-categories')
            })
            $.each(data.searchone, function (i, f) {
                var searchitems = '<div class="search-result"><img class="result-img" src="images/icons/32/' + f.icon + '.svg" alt="' + f.title + '"/><p>' + f.title + '</p>'
                $(searchitems).appendTo('.searchone')
            })
            $.each(data.searchtwo, function (i, f) {
                var searchitems = '<div class="search-result"><img class="result-img" src="images/icons/32/' + f.icon + '.svg" alt="' + f.title + '"/><p>' + f.title + '</p>'
                $(searchitems).appendTo('.searchtwo')
            })
            $.each(data.searchthree, function (i, f) {
                var searchitems = '<div class="search-result"><img class="result-img" src="images/icons/32/' + f.icon + '.svg" alt="' + f.title + '"/><p>' + f.title + '</p>'
                $(searchitems).appendTo('.searchthree')
            })
        })
    })

    $(function () {
        window.setInterval(function () {
            if ($('#slingshot-grid').hasClass('active')) {
                $('#slingshot-grid').addClass('previous')
                $('#slingshot-grid').removeClass('active')
                $('#slingshot-categories').removeClass('next')
                $('#slingshot-categories').addClass('active')
                $('#slingshot-categories-button').addClass('active')
                $('#slingshot-grid-button').removeClass('active')
            } else if ($('#slingshot-categories').hasClass('active')) {
                $('#slingshot-categories').addClass('previous')
                $('#slingshot-categories').removeClass('active')
                $('#slingshot-search').removeClass('next')
                $('#slingshot-search').addClass('active')
                $('.slingshot .clear-icon').removeClass('inactive')
                $('.slingshot .search-term').removeClass('inactive')
                $('.searchone').removeClass('inactive')
                setTimeout(function () {
                    $('.slingshot-search-results').addClass('inactive')
                    $('.searchtwo').removeClass('inactive')
                }, 700)
                setTimeout(function () {
                    $('.slingshot-search-results').addClass('inactive')
                    $('.searchthree').removeClass('inactive')
                }, 1200)
                $('.slingshot .linked').addClass('inactive')
                $('.slingshot .entry').addClass('expanded')
            } else if ($('#slingshot-search').hasClass('active')) {
                $('#slingshot-search').addClass('next')
                $('#slingshot-search').removeClass('active')
                $('#slingshot-grid').removeClass('previous')
                $('#slingshot-grid').addClass('active')
                $('#slingshot-categories').addClass('next')
                $('#slingshot-categories').removeClass('previous')
                $('.slingshot .clear-icon, .slingshot .search-term, .slingshot-search-results').addClass('inactive')
                $('.slingshot .linked').removeClass('inactive')
                $('.slingshot .entry').removeClass('expanded')
                $('#slingshot-grid-button').addClass('active')
                $('#slingshot-categories-button').removeClass('active')
            }
        }, 3000)
    })

    // Change Button text on payment click
    function updateDownloadButton () {
        var translateDownload = $('#translate-download').text()
        var translatePurchase = $('#translate-purchase').text()

        if ($('#amounts').children().length <= 1) {
            $('#download').text(translateDownload)
            document.title = translateDownload
        } else if (
      $('button.payment-button').hasClass('checked') ||
      $('#amount-custom').val() * 100 >= paymentMinimum
    ) {
            $('#download').text(translatePurchase)
            document.title = translatePurchase
        } else {
            $('#download').text(translateDownload)
            document.title = translateDownload
        }
    }

    $('#amounts').on('click', updateDownloadButton)
    $('#amounts input').on('input', updateDownloadButton)
    updateDownloadButton()

    console.log('Loaded homepage.js')
})
>>>>>>> eab16ac5f56bc472a0debdfa145108a7aa1782ce
