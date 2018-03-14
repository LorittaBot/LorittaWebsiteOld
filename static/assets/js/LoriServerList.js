if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'LoriServerList'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'LoriServerList'.");
}
if (typeof LoriUtils === 'undefined') {
  throw new Error("Error loading module 'LoriServerList'. Its dependency 'LoriUtils' was not found. Please, check whether 'LoriUtils' is loaded prior to 'LoriServerList'.");
}
var LoriServerList = function (_, Kotlin, $module$LoriUtils) {
  'use strict';
  var throwUPAE = Kotlin.throwUPAE;
  var println = Kotlin.kotlin.io.println_s8jyv4$;
  var jq = $module$LoriUtils.jq_61zpoe$;
  var Unit = Kotlin.kotlin.Unit;
  var BaseLocale = $module$LoriUtils.utils.BaseLocale;
  var json = Kotlin.kotlin.js.json_pyyo18$;
  var replace = Kotlin.kotlin.text.replace_680rmw$;
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  var ensureNotNull = Kotlin.ensureNotNull;
  var anonymous = $module$LoriUtils;
  var split = Kotlin.kotlin.text.split_ip8yn$;
  var getOrNull = Kotlin.kotlin.collections.getOrNull_yzln2o$;
  var equals = Kotlin.equals;
  var toIntOrNull = Kotlin.kotlin.text.toIntOrNull_pdl1vz$;
  var toString = Kotlin.toString;
  var withIndex = Kotlin.kotlin.collections.withIndex_us0mfu$;
  var numberToInt = Kotlin.numberToInt;
  var joinToString = Kotlin.kotlin.collections.joinToString_cgipc5$;
  var PropertyMetadata = Kotlin.PropertyMetadata;
  var lazy = Kotlin.kotlin.lazy_klfg04$;
  var ShowdownConverter = showdown.Converter;
  var TingleOptions = $module$LoriUtils.utils.TingleOptions;
  var TingleModal = tingle.modal;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var Enum = Kotlin.kotlin.Enum;
  var throwISE = Kotlin.throwISE;
  LorittaPartner$Keyword.prototype = Object.create(Enum.prototype);
  LorittaPartner$Keyword.prototype.constructor = LorittaPartner$Keyword;
  LorittaPartner$Language.prototype = Object.create(Enum.prototype);
  LorittaPartner$Language.prototype.constructor = LorittaPartner$Language;
  LorittaPartner$Type.prototype = Object.create(Enum.prototype);
  LorittaPartner$Type.prototype.constructor = LorittaPartner$Type;
  function DailyView() {
    DailyView_instance = this;
    this.locale_xifq0g$_0 = this.locale_xifq0g$_0;
  }
  Object.defineProperty(DailyView.prototype, 'locale', {
    get: function () {
      if (this.locale_xifq0g$_0 == null)
        return throwUPAE('locale');
      return this.locale_xifq0g$_0;
    },
    set: function (locale) {
      this.locale_xifq0g$_0 = locale;
    }
  });
  function DailyView$start$lambda(closure$backgroundY) {
    return function () {
      jq('.serverListHeader').css('background-position-y', closure$backgroundY.v);
      closure$backgroundY.v = closure$backgroundY.v - 2 | 0;
      return Unit;
    };
  }
  function DailyView$start$lambda$lambda$lambda(it) {
    var json_0 = json([]);
    json_0['redirectUrl'] = 'https://loritta.website/daily';
    window.location.href = 'https://discordapp.com/oauth2/authorize?redirect_uri=https://loritta.website%2Fdashboard&scope=identify%20guilds%20email%20guilds.join&response_type=code&client_id=297153970613387264&state=' + window.btoa(JSON.stringify(json_0));
    return Unit;
  }
  function DailyView$start$lambda$lambda(data, b, c) {
    var tmp$;
    println('Status data: ' + JSON.stringify(data));
    var status = data;
    var code = status['api:code'];
    if (code === 0) {
      jq('.daily-notification').text('Por favor, complete o reCAPTCHA');
      grecaptcha.render(jq('#daily-captcha').get()[0], new RecaptchaOptions('6LfRyUkUAAAAAASo0YM4IZBqvkzxyRWJ1Ydw5weC', 'recaptchaCallback', 'normal'));
    }
     else if (code === 4) {
      jq('.daily-reward-button').addClass('button-discord-success').removeClass('button-discord-disabled').click(DailyView$start$lambda$lambda$lambda);
    }
     else {
      moment.locale('pt-br');
      if (code === 4)
        tmp$ = 'Voc\xEA precisa entrar na sua conta do Discord antes de ganhar seu pr\xEAmio!';
      else if (code === 5) {
        var moment_0 = new moment(status['canPayoutAgain']);
        tmp$ = replace('Voc\xEA j\xE1 recebeu seu pr\xEAmio hoje! Voc\xEA poder\xE1 votar novamente {0}!', '{0}', moment_0.fromNow());
      }
       else if (code === 7)
        tmp$ = 'reCAPTCHA inv\xE1lido!';
      else if (code === 9)
        tmp$ = 'IP bloqueado!';
      else
        tmp$ = 'Error: ' + code;
      var error = tmp$;
      jq('.daily-notification').text(error);
    }
    LoriServerList_getInstance().hideLoadingBar();
    return Unit;
  }
  function DailyView$start$lambda_0(this$DailyView) {
    return function (data, b, c) {
      println('Received locale: ' + JSON.stringify(data));
      this$DailyView.locale = BaseLocale.Companion.create_qk3xy8$(data);
      return jQuery.post('https://loritta.website/api/v1/economy/daily-reward-status', DailyView$start$lambda$lambda);
    };
  }
  DailyView.prototype.start = function () {
    println('LoriServerList - owo');
    LoriServerList_getInstance().showLoadingBar_pdl1vj$('Carregando...');
    var backgroundY = {v: 0};
    window.setInterval(DailyView$start$lambda(backgroundY), 75);
    jQuery.post('https://loritta.website/api/v1/misc/get-locale', DailyView$start$lambda_0(this));
  };
  function DailyView$recaptchaCallback$lambda$lambda$lambda$lambda(closure$cash) {
    return function () {
      println('Finished!!!');
      closure$cash.play();
      return Unit;
    };
  }
  function DailyView$recaptchaCallback$lambda$lambda$lambda(closure$payload, closure$cash) {
    return function () {
      jq('#daily-wrapper').css('position', 'absolute');
      var prepended = jq('#daily-prewrapper').prepend(jq('<div>'));
      prepended.css('opacity', 0);
      prepended.append(jq('<h2>').text('Parab\xE9ns! Hoje voc\xEA ganhou...'));
      prepended.append(jq('<h1>').text('0').attr('id', 'dailyPayout'));
      prepended.append(jq('<h2>').text('Sonhos!'));
      prepended.append(jq('<img>').attr('width', 64).attr('height', 64).attr('src', 'https://cdn.discordapp.com/emojis/399743288673959947.gif?v=1'));
      prepended.append(jq('<p>').text('Volte sempre!'));
      prepended.fadeTo(500, 1);
      var countUp = new CountUp('dailyPayout', 0.0, closure$payload.dailyPayout, 0, 5.5, new CountUpOptions(true, true, '', ''));
      countUp.start(DailyView$recaptchaCallback$lambda$lambda$lambda$lambda(closure$cash));
      return Unit;
    };
  }
  function DailyView$recaptchaCallback$lambda$lambda(closure$cash) {
    return function (data, b, c) {
      var tmp$;
      println('Daily Reward: ' + JSON.stringify(data));
      var json = data;
      var apiCode = json['api:code'];
      if (apiCode === 0) {
        var payload = toJson(data);
        return jq('#daily-wrapper').fadeTo(500, 0, DailyView$recaptchaCallback$lambda$lambda$lambda(payload, closure$cash));
      }
       else {
        if (apiCode === 4)
          tmp$ = 'Voc\xEA precisa entrar na sua conta do Discord antes de ganhar seu pr\xEAmio!';
        else if (apiCode === 5)
          tmp$ = 'Voc\xEA j\xE1 recebeu seu pr\xEAmio hoje!';
        else if (apiCode === 7)
          tmp$ = 'reCAPTCHA inv\xE1lido!';
        else if (apiCode === 9)
          tmp$ = 'IP bloqueado!';
        else
          tmp$ = 'Error: ' + apiCode;
        var error = tmp$;
        return jq('.daily-notification').text(error);
      }
    };
  }
  function DailyView$recaptchaCallback$lambda(closure$response, closure$cash) {
    return function (it) {
      if (jq('.daily-reward-button').hasClass('button-discord-disabled')) {
        return;
      }
      jq('.daily-reward-button').addClass('button-discord-disabled');
      jQuery.post('https://loritta.website/api/v1/economy/daily-reward?recaptcha=' + closure$response, DailyView$recaptchaCallback$lambda$lambda(closure$cash));
      return Unit;
    };
  }
  DailyView.prototype.recaptchaCallback = function (response) {
    var cash = new Audio('http://loritta.website/assets/snd/css1_cash.wav');
    jq('.daily-notification').text('');
    println('owo recaptcha');
    jq('.daily-reward-button').addClass('button-discord-success').removeClass('button-discord-disabled').click(DailyView$recaptchaCallback$lambda(response, cash));
  };
  DailyView.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'DailyView',
    interfaces: []
  };
  var DailyView_instance = null;
  function DailyView_getInstance() {
    if (DailyView_instance === null) {
      new DailyView();
    }
    return DailyView_instance;
  }
  function toJson($receiver) {
    return JSON.parse(JSON.stringify($receiver));
  }
  function toJson_0($receiver) {
    return JSON.parse(JSON.stringify($receiver));
  }
  function stringify($receiver) {
    return JSON.stringify($receiver);
  }
  function LoriServerList() {
    LoriServerList_instance = this;
    this.wrapperBlur_nvkmkt$_0 = lazy(LoriServerList$wrapperBlur$lambda);
    this.loadingScreen_4g6md$_0 = lazy(LoriServerList$loadingScreen$lambda);
  }
  function LoriServerList$start$lambda(it) {
    var test = null;
    ensureNotNull(test);
    return Unit;
  }
  function LoriServerList$start$lambda_0(closure$backgroundY) {
    return function () {
      jq('.serverListHeader').css('background-position-y', closure$backgroundY.v);
      closure$backgroundY.v = closure$backgroundY.v - 2 | 0;
      return Unit;
    };
  }
  function LoriServerList$start$lambda$lambda$lambda(this$LoriServerList) {
    return function (it) {
      this$LoriServerList.showTopRankServers_vux9f0$(50, 0);
      return Unit;
    };
  }
  function LoriServerList$start$lambda$lambda$lambda_0(this$LoriServerList) {
    return function (it) {
      this$LoriServerList.showRecentlyBumpedRankServers_vux9f0$(50, 0);
      return Unit;
    };
  }
  function LoriServerList$start$lambda$lambda(this$LoriServerList) {
    return function (payload, b, c) {
      var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5;
      println('owo payload: ' + toString(payload));
      var payload_0 = toJson(payload);
      println('Sponsored Count: ' + toString(payload_0.sponsoredCount));
      println('Partners Count: ' + toString(payload_0.partnersCount));
      println('Total Count: ' + toString(payload_0.totalCount));
      var sponsorSampleDiv = jq('.sponsored-servers-sample');
      var partnerSampleDiv = jq('.partners-servers-sample');
      var allServersSampleDiv = jq('.all-servers-sample');
      var randomServersSampleDiv = jq('.random-servers-sample');
      var recentlyBumpedServersSampleDiv = jq('.recently-bumped-servers-sample');
      tmp$ = payload_0.sponsored;
      for (tmp$_0 = 0; tmp$_0 !== tmp$.length; ++tmp$_0) {
        var serverSample = tmp$[tmp$_0];
        this$LoriServerList.addServerSample_bewp0m$(serverSample, sponsorSampleDiv, 'pure-u-1 pure-u-md-1-2');
      }
      tmp$_1 = payload_0.partners;
      for (tmp$_2 = 0; tmp$_2 !== tmp$_1.length; ++tmp$_2) {
        var serverSample_0 = tmp$_1[tmp$_2];
        this$LoriServerList.addServerSample_bewp0m$(serverSample_0, partnerSampleDiv, 'pure-u-1 pure-u-md-1-2');
      }
      tmp$_3 = withIndex(payload_0.top).iterator();
      while (tmp$_3.hasNext()) {
        var tmp$_6 = tmp$_3.next();
        var index = tmp$_6.component1()
        , serverSample_1 = tmp$_6.component2();
        if (index % 10 === 5) {
          this$LoriServerList.addAdvertisement_yp3tk2$(allServersSampleDiv);
          this$LoriServerList.injectAdvertisements_yp3tk2$(allServersSampleDiv);
        }
        this$LoriServerList.addServerSample_bewp0m$(serverSample_1, allServersSampleDiv);
      }
      tmp$_4 = payload_0.random;
      for (tmp$_5 = 0; tmp$_5 !== tmp$_4.length; ++tmp$_5) {
        var serverSample_2 = tmp$_4[tmp$_5];
        this$LoriServerList.addServerSample_bewp0m$(serverSample_2, randomServersSampleDiv);
      }
      jq('.view-more-servers').click(LoriServerList$start$lambda$lambda$lambda(this$LoriServerList));
      jq('.view-more-recently-bumped-servers').click(LoriServerList$start$lambda$lambda$lambda_0(this$LoriServerList));
      this$LoriServerList.hideLoadingBar();
      return Unit;
    };
  }
  function LoriServerList$start$lambda_1(this$LoriServerList) {
    return function (data, b, c) {
      var tmp$, tmp$_0;
      println('Received locale... ' + JSON.stringify(data));
      anonymous.locale = BaseLocale.Companion.create_qk3xy8$(toJson_0(data));
      var pathName = window.location.pathname;
      var args = split(pathName, ['/']);
      var arg0 = getOrNull(args, 0);
      var arg1 = getOrNull(args, 1);
      var arg2 = getOrNull(args, 2);
      var arg3 = getOrNull(args, 3);
      if (equals(arg2, 'page') && arg3 != null) {
        var skip = ((tmp$ = toIntOrNull(arg3)) != null ? tmp$ : 1) - 1 | 0;
        skip = skip * 50 | 0;
        return this$LoriServerList.showTopRankServers_vux9f0$(50, skip), Unit;
      }
       else if (equals(arg2, 'bumped') && arg3 != null) {
        var skip_0 = ((tmp$_0 = toIntOrNull(arg3)) != null ? tmp$_0 : 1) - 1 | 0;
        skip_0 = skip_0 * 50 | 0;
        return this$LoriServerList.showRecentlyBumpedRankServers_vux9f0$(50, skip_0), Unit;
      }
       else {
        return jQuery.post('https://loritta.website/api/v1/server-list/get-sample', LoriServerList$start$lambda$lambda(this$LoriServerList));
      }
    };
  }
  LoriServerList.prototype.start = function () {
    println('LoriServerList - owo');
    this.showLoadingBar_pdl1vj$('Carregando...');
    var backgroundY = {v: 0};
    jq('.plz-dont-click').click(LoriServerList$start$lambda);
    window.setInterval(LoriServerList$start$lambda_0(backgroundY), 75);
    jQuery.post('https://loritta.website/api/v1/misc/get-locale', LoriServerList$start$lambda_1(this));
  };
  function LoriServerList$showTopRankServers$lambda$lambda(closure$size, closure$skip, this$LoriServerList) {
    return function (it) {
      this$LoriServerList.showTopRankServers_vux9f0$(closure$size, closure$skip - 50 | 0);
      return Unit;
    };
  }
  function LoriServerList$showTopRankServers$lambda$lambda_0(closure$size, closure$skip, this$LoriServerList) {
    return function (it) {
      this$LoriServerList.showTopRankServers_vux9f0$(closure$size, closure$skip + 50 | 0);
      return Unit;
    };
  }
  function LoriServerList$showTopRankServers$lambda(this$LoriServerList, closure$page, closure$size, closure$skip) {
    return function (data, b, c) {
      var tmp$, tmp$_0;
      println('Received data: ' + stringify(data));
      var payload = toJson(data);
      tmp$ = payload.result;
      for (tmp$_0 = 0; tmp$_0 !== tmp$.length; ++tmp$_0) {
        var serverSample = tmp$[tmp$_0];
        this$LoriServerList.addServerSample_bewp0m$(serverSample, jq('.rank-list-sample'), 'pure-u-1 pure-u-md-1-2');
      }
      jq('.rank-list-sample').after(jq('<div>').attr('id', 'rank-list-sample-buttons').css('text-align', 'center'));
      if (closure$page.v !== 1.0) {
        println('diff page!');
        jq('#rank-list-sample-buttons').append(jq('<button>').attr('class', 'button-discord button-discord-info pure-button').html('<i class="fas fa-arrow-left"><\/i>')).click(LoriServerList$showTopRankServers$lambda$lambda(closure$size, closure$skip, this$LoriServerList));
      }
      if (numberToInt(payload.totalCount) > (closure$skip + closure$size | 0)) {
        jq('#rank-list-sample-buttons').append(jq('<button>').attr('class', 'button-discord button-discord-info pure-button').html('<i class="fas fa-arrow-right"><\/i>')).click(LoriServerList$showTopRankServers$lambda$lambda_0(closure$size, closure$skip, this$LoriServerList));
      }
      window.scroll(0.0, 0.0);
      this$LoriServerList.hideLoadingBar();
      return Unit;
    };
  }
  var Math_0 = Math;
  LoriServerList.prototype.showTopRankServers_vux9f0$ = function (size, skip) {
    jq('#listWrapper').empty();
    jq('#rank-list-sample-buttons').empty();
    jq('#listWrapper').html('\n\t\t\t\t\t<div class="oddWrapper">\n<div class="contentWrapper" style="text-align: center; width: 80%;">\n<div class="sectionHeader">\n<i class="far fa-heart"><\/i> owo whats this???\n<\/div>\n<div class="rank-list-sample pure-g"><\/div>\n<\/div>\n<\/div>');
    this.showLoadingBar_pdl1vj$('Carregando...');
    var x = skip / 50 | 0;
    var page = {v: Math_0.floor(x) + 1};
    window.history.pushState(null, 'owo whats this', '/servers/page/' + page.v);
    jQuery.post('https://loritta.website/api/v1/server-list/get-servers?size=' + size + '&skip=' + skip + '&serverType=top', LoriServerList$showTopRankServers$lambda(this, page, size, skip));
  };
  function LoriServerList$showRecentlyBumpedRankServers$lambda(this$LoriServerList) {
    return function (data, b, c) {
      var tmp$, tmp$_0;
      var payload = toJson(data);
      tmp$ = payload.result;
      for (tmp$_0 = 0; tmp$_0 !== tmp$.length; ++tmp$_0) {
        var serverSample = tmp$[tmp$_0];
        this$LoriServerList.addServerSample_bewp0m$(serverSample, jq('.rank-list-sample'), 'pure-u-1 pure-u-md-1-2');
      }
      window.scroll(0.0, 0.0);
      this$LoriServerList.hideLoadingBar();
      return Unit;
    };
  }
  LoriServerList.prototype.showRecentlyBumpedRankServers_vux9f0$ = function (size, skip) {
    jq('#listWrapper').empty();
    jq('#listWrapper').html('\n\t\t\t\t\t<div class="oddWrapper">\n<div class="contentWrapper" style="text-align: center; width: 80%;">\n<div class="sectionHeader">\n<i class="far fa-heart"><\/i> owo whats this???\n<\/div>\n<div class="rank-list-sample pure-g"><\/div>\n<\/div>\n<\/div>');
    this.showLoadingBar_pdl1vj$('Carregando...');
    var x = skip / 50 | 0;
    var page = Math_0.floor(x) + 1;
    window.history.pushState(null, 'owo whats this', '/servers/bumped/' + page);
    jQuery.post('https://loritta.website/api/v1/server-list/get-servers?size=' + size + '&skip=' + skip + '&serverType=recentlyBumped', LoriServerList$showRecentlyBumpedRankServers$lambda(this));
  };
  function LoriServerList$addServerSample$lambda(it) {
    return '<span class=' + '"' + 'sample-keyword' + '"' + '>' + anonymous.locale.get_25kzsl$('KEYWORD_' + toString(it), []) + '<\/span>';
  }
  function LoriServerList$addServerSample$lambda_0(closure$serverSample) {
    return function (it) {
      PartnerView_getInstance().openServerModal_8zqtbw$(closure$serverSample, false, anonymous.locale);
      return Unit;
    };
  }
  LoriServerList.prototype.addServerSample_bewp0m$ = function (serverSample, div, clazz) {
    if (clazz === void 0)
      clazz = null;
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5, tmp$_6, tmp$_7, tmp$_8;
    if (clazz != null) {
      tmp$ = jq('#server-sample-template').clone().attr('id', null).attr('class', clazz);
    }
     else {
      tmp$ = jq('#server-sample-template').children();
    }
    var serverSampleTemplate = tmp$;
    var template = serverSampleTemplate.clone();
    template.find('.server-tagline').text((tmp$_0 = serverSample.serverListConfig.tagline) != null ? tmp$_0 : ':shrug:');
    var tagline = {v: template.find('.server-tagline').text()};
    var $receiver = serverSample.serverEmotes;
    var tmp$_9;
    for (tmp$_9 = 0; tmp$_9 !== $receiver.length; ++tmp$_9) {
      var element = $receiver[tmp$_9];
      tagline.v = replace(tagline.v, ':' + element.name + ':', '<img class=' + '"' + 'discord-emote' + '"' + ' src=' + '"' + element.imageUrl + '"' + '>');
    }
    var type = getType(serverSample);
    if (equals(type, LorittaPartner$Type$SPONSOR_getInstance()))
      tmp$_1 = 'server-sponsor';
    else if (equals(type, LorittaPartner$Type$PARTNER_getInstance()))
      tmp$_1 = 'server-partner';
    else if (equals(type, LorittaPartner$Type$NORMAL_getInstance()))
      tmp$_1 = 'server-normal';
    else
      tmp$_1 = Kotlin.noWhenBranchMatched();
    template.addClass(tmp$_1);
    template.find('.server-sample-icon').attr('src', (tmp$_3 = (tmp$_2 = serverSample.iconUrl) != null ? replace(tmp$_2, 'jpg', 'png') : null) != null ? tmp$_3 : 'aaa');
    template.find('.server-name').text(serverSample.name);
    template.find('.server-author').text(serverSample.ownerName + '#' + serverSample.ownerDiscriminator);
    template.find('.server-tagline').html((tmp$_4 = tagline.v) != null ? tmp$_4 : ':shrug:');
    template.find('.server-upvotes').html(serverSample.voteCount.toString());
    var keywords = joinToString(serverSample.serverListConfig.keywords, ' ', void 0, void 0, void 0, void 0, LoriServerList$addServerSample$lambda);
    template.find('.server-keywords').html(keywords);
    var serverIcon = (tmp$_6 = (tmp$_5 = serverSample.iconUrl) != null ? replace(tmp$_5, 'jpg', 'png') : null) != null ? tmp$_6 : 'https://loritta.website/assets/img/unknown.png';
    PartnerView_getInstance();
    var partnerInformation = new PartnerView$PartnerInformation(serverSample.id, serverIcon, serverSample.invite, serverSample.name, (tmp$_7 = serverSample.serverListConfig.tagline) != null ? tmp$_7 : ':shrug:', (tmp$_8 = serverSample.serverListConfig.description) != null ? tmp$_8 : ':shrug:', serverSample.serverListConfig.keywords, serverSample.ownerId, serverSample.ownerName, serverSample.ownerDiscriminator, '???', serverSample.memberCount, serverSample.onlineCount, serverSample.serverEmotes, serverSample.canVote, serverSample.cantVoteReason, serverSample.canVoteNext, serverSample.joinedServer);
    template.find('.server-button').click(LoriServerList$addServerSample$lambda_0(serverSample));
    div.append(template);
  };
  LoriServerList.prototype.addAdvertisement_yp3tk2$ = function (div) {
    var advertisement = jq('<ins>').addClass('adsbygoogle').attr('style', 'display:block').attr('data-ad-client', 'ca-pub-9989170954243288').attr('data-ad-slot', '3480163710').attr('data-ad-format', 'auto');
    div.append(advertisement);
  };
  Object.defineProperty(LoriServerList.prototype, 'wrapperBlur', {
    get: function () {
      var $receiver = this.wrapperBlur_nvkmkt$_0;
      new PropertyMetadata('wrapperBlur');
      return $receiver.value;
    }
  });
  Object.defineProperty(LoriServerList.prototype, 'loadingScreen', {
    get: function () {
      var $receiver = this.loadingScreen_4g6md$_0;
      new PropertyMetadata('loadingScreen');
      return $receiver.value;
    }
  });
  LoriServerList.prototype.showLoadingBar_pdl1vj$ = function (text) {
    if (text === void 0)
      text = 'Salvando...';
    this.wrapperBlur.css('filter', 'blur(7px)');
    if (text != null)
      this.loadingScreen.find('#loading-screen-text').text(text);
    this.loadingScreen.fadeIn(250);
  };
  LoriServerList.prototype.hideLoadingBar = function () {
    this.wrapperBlur.css('filter', '');
    this.loadingScreen.fadeOut(250);
  };
  LoriServerList.prototype.injectAdvertisements_yp3tk2$ = function (element) {
    element.find('.guild-advertisement').attr('class', 'adsbygoogle');
    try {
      (adsbygoogle = window.adsbygoogle || []).push({});
    }
     catch (e) {
      println('Error while injecting: ' + toString(e.message));
    }
    println('Advertisement injected!');
  };
  function LoriServerList$wrapperBlur$lambda() {
    return jq('#wrapperBlur');
  }
  function LoriServerList$loadingScreen$lambda() {
    return jq('#loading-screen');
  }
  LoriServerList.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'LoriServerList',
    interfaces: []
  };
  var LoriServerList_instance = null;
  function LoriServerList_getInstance() {
    if (LoriServerList_instance === null) {
      new LoriServerList();
    }
    return LoriServerList_instance;
  }
  function PartnerView() {
    PartnerView_instance = this;
    this.activeInformation = null;
  }
  Object.defineProperty(PartnerView.prototype, 'visibleModal', {
    get: function () {
      return jq('.tingle-modal--visible');
    }
  });
  function PartnerView$start$lambda$lambda(this$PartnerView) {
    return function (data, b, c) {
      var json = toJson_0(data);
      if (equals(json['api:code'], 3)) {
        window.location.href = 'https://loritta.website/servers';
      }
       else {
        LoriServerList_getInstance().hideLoadingBar();
        this$PartnerView.openServerModal_8zqtbw$(toJson(data), true, anonymous.locale);
      }
      return Unit;
    };
  }
  function PartnerView$start$lambda(this$PartnerView) {
    return function (data, b, c) {
      println('Received locale: ' + toString(data));
      anonymous.locale = BaseLocale.Companion.create_qk3xy8$(toJson_0(data));
      return jQuery.post('https://loritta.website/api/v1/server-list/information?guildId=' + guildId, PartnerView$start$lambda$lambda(this$PartnerView));
    };
  }
  PartnerView.prototype.start = function () {
    println('Starting partner view... ^-^ Pulling partner information from Loritta owo');
    LoriServerList_getInstance().showLoadingBar_pdl1vj$('Carregando...');
    jQuery.post('https://loritta.website/api/v1/misc/get-locale', PartnerView$start$lambda(this));
  };
  function PartnerView$openServerModal$lambda$lambda(closure$information) {
    return function (data, b, c) {
      println(stringify(data));
      var payload = toJson_0(data);
      var apiCode = payload['api:code'];
      if (apiCode === LoriWebCodes_getInstance().SUCCESS)
        println('Success!');
      else if (apiCode === LoriWebCodes_getInstance().UNKNOWN_GUILD)
        println('wat');
      else if (apiCode === LoriWebCodes_getInstance().UNAUTHORIZED) {
        var json_0 = json([]);
        json_0['redirectUrl'] = 'https://loritta.website/s/' + closure$information.id + '?force';
        window.location.href = 'https://discordapp.com/oauth2/authorize?redirect_uri=https://loritta.website%2Fdashboard&scope=identify%20guilds%20email%20guilds.join&response_type=code&client_id=297153970613387264&state=' + window.btoa(stringify(json_0));
      }
      return Unit;
    };
  }
  function PartnerView$openServerModal$lambda(closure$information, closure$modal) {
    return function () {
      println('Adding user to guild...');
      jQuery.get('https://loritta.website/api/v1/server-list/join/?guildId=' + closure$information.id, PartnerView$openServerModal$lambda$lambda(closure$information));
      closure$modal.close();
      return Unit;
    };
  }
  function PartnerView$openServerModal$lambda_0() {
    return Unit;
  }
  function PartnerView$openServerModal$lambda_1(closure$modal) {
    return function () {
      println('CLICKED3!!!');
      closure$modal.close();
      return Unit;
    };
  }
  function PartnerView$openServerModal$lambda_2(closure$json) {
    return function (it) {
      window.location.href = 'https://discordapp.com/oauth2/authorize?redirect_uri=https://loritta.website%2Fdashboard&scope=identify%20guilds%20email%20guilds.join&response_type=code&client_id=297153970613387264&state=' + window.btoa(JSON.stringify(closure$json));
      return Unit;
    };
  }
  PartnerView.prototype.openServerModal_8zqtbw$ = function (information, direct, locale) {
    var tmp$, tmp$_0;
    println('Opening server modal... ' + JSON.stringify(information));
    println('Is direct? ' + direct);
    println('---');
    println('Can vote? ' + information.canVote);
    println("Can't vote reason: " + toString(information.cantVoteReason));
    println('Can vote in... ' + toString(information.canVoteNext));
    println('---');
    this.activeInformation = information;
    var converter = new ShowdownConverter();
    var template = jq('#guild-template').clone();
    template.find('.guild-name').text(information.name);
    var description = {v: (tmp$ = information.serverListConfig.description) != null ? tmp$ : ''};
    var $receiver = information.serverEmotes;
    var tmp$_1;
    for (tmp$_1 = 0; tmp$_1 !== $receiver.length; ++tmp$_1) {
      var element = $receiver[tmp$_1];
      description.v = replace(description.v, ':' + element.name + ':', '<img class=' + '"' + 'discord-emote' + '"' + ' src=' + '"' + element.imageUrl + '"' + '>');
    }
    description.v = converter.makeHtml(description.v);
    template.find('.description').html(description.v);
    template.find('.icon').attr('src', ensureNotNull(information.iconUrl) + '?size=1024');
    template.find('.member-count').text(information.memberCount);
    template.find('.online-count').text(information.onlineCount);
    template.find('.guild-owner').text(information.ownerName + '#' + information.ownerDiscriminator);
    if (direct)
      jq('html').css('background', 'url(' + '"' + 'https://loritta.website/assets/img/servers/backgrounds/' + information.id + '.png?v=' + (new Date()).getTime() + '"' + ') no-repeat center center fixed');
    var $receiver_0 = information.serverListConfig.keywords;
    var tmp$_2;
    for (tmp$_2 = 0; tmp$_2 !== $receiver_0.length; ++tmp$_2) {
      var element_0 = $receiver_0[tmp$_2];
      if (element_0 != null) {
        template.find('.keywords').append(jq('<span>').addClass('keyword').text(locale.get_25kzsl$('KEYWORD_' + element_0.toString(), [])));
      }
    }
    var modal = new TingleModal(new TingleOptions(true, void 0, void 0, void 0, ['tingle-modal--overflow']));
    if (!information.joinedServer) {
      modal.addFooterBtn('<i class="fab fa-discord"><\/i> Entrar', 'button-discord button-discord-info pure-button button-discord-modal', PartnerView$openServerModal$lambda(information, modal));
    }
     else {
      modal.addFooterBtn('<i class="fab fa-discord"><\/i> Voc\xEA j\xE1 est\xE1 no Servidor!', 'button-discord button-discord-disabled pure-button button-discord-modal', PartnerView$openServerModal$lambda_0);
    }
    if (!direct) {
      modal.addFooterBtn('<i class="fas fa-times"><\/i> Fechar', 'button-discord pure-button button-discord-modal button-discord-modal-secondary-action', PartnerView$openServerModal$lambda_1(modal));
    }
    modal.setContent(template.html());
    modal.open();
    var visible = jq('.tingle-modal--visible');
    if (information.canVote) {
      visible.find('.upvote-notification').text(locale.get_25kzsl$('UPVOTE_PleaseCompleteCaptcha', []));
    }
     else {
      var code = ensureNotNull(information.cantVoteReason);
      moment.locale('pt-br');
      if (code === 1)
        tmp$_0 = locale.get_25kzsl$('UPVOTE_LogInDiscord', []);
      else if (code === 2)
        tmp$_0 = locale.get_25kzsl$('UPVOTE_NeedsToBeMember', []);
      else if (code === 3)
        tmp$_0 = locale.get_25kzsl$('UPVOTE_JoinedAtLeastOneHour', []);
      else if (code === 4) {
        var moment_0 = new moment(ensureNotNull(information.canVoteNext));
        tmp$_0 = locale.get_25kzsl$('UPVOTE_CanVoteAgain', [moment_0.fromNow()]);
      }
       else
        tmp$_0 = 'Error: ' + code;
      var reason = tmp$_0;
      println('Error code: ' + code);
      if (code !== 1) {
        visible.find('.upvote-notification').text(reason);
        visible.find('.server-upvote-button').addClass('button-discord-disabled').removeClass('button-discord-success');
      }
       else {
        visible.find('.server-upvote-button').addClass('button-discord-success').removeClass('button-discord-disabled');
        var redirectUrl = 'https://loritta.website/s/' + information.id;
        var json_0 = json([]);
        json_0['redirectUrl'] = redirectUrl;
        visible.find('.server-upvote-button').click(PartnerView$openServerModal$lambda_2(json_0));
      }
    }
    jq('.tingle-modal--visible').addClass('tingle-modal--overflow');
    if (information.canVote) {
      grecaptcha.render(visible.find('.g-recaptcha').get()[0], new RecaptchaOptions('6LfRyUkUAAAAAASo0YM4IZBqvkzxyRWJ1Ydw5weC', 'recaptchaCallback', 'compact'));
    }
    LoriServerList_getInstance().injectAdvertisements_yp3tk2$(this.visibleModal);
    LoriServerList_getInstance().injectAdvertisements_yp3tk2$(this.visibleModal);
  };
  function PartnerView$recaptchaCallback$lambda$lambda(this$PartnerView, closure$information) {
    return function (data, b, c) {
      var tmp$;
      println(stringify(data));
      var vote = toJson_0(data);
      var codeResponse = vote['api:code'];
      if (codeResponse === 0) {
        jq('.tingle-modal--visible').find('.server-upvote-button').addClass('button-discord-disabled').removeClass('button-discord-success');
        return this$PartnerView.visibleModal.find('.upvote-notification').text('Obrigado por votar! ^-^');
      }
       else {
        grecaptcha.reset();
        if (codeResponse === LoriWebCodes_getInstance().UNAUTHORIZED)
          tmp$ = anonymous.locale.get_25kzsl$('UPVOTE_LogInDiscord', []);
        else if (codeResponse === LoriWebCodes_getInstance().UNKNOWN_GUILD)
          tmp$ = anonymous.locale.get_25kzsl$('UPVOTE_UnknownGuild', []);
        else if (codeResponse === LoriWebCodes_getInstance().NOT_IN_GUILD)
          tmp$ = anonymous.locale.get_25kzsl$('UPVOTE_NeedsToBeMember', []);
        else if (codeResponse === LoriWebCodes_getInstance().INVALID_CAPTCHA_RESPONSE)
          tmp$ = anonymous.locale.get_25kzsl$('UPVOTE_InvalidCaptchaResponse', []);
        else if (codeResponse === LoriWebCodes_getInstance().ALREADY_VOTED_TODAY) {
          var moment_0 = new moment(ensureNotNull(closure$information.canVoteNext));
          tmp$ = anonymous.locale.get_25kzsl$('UPVOTE_CanVoteAgain', [moment_0.fromNow()]);
        }
         else if (codeResponse === LoriWebCodes_getInstance().NOT_VERIFIED)
          tmp$ = anonymous.locale.get_25kzsl$('UPVOTE_NotVerified', []);
        else if (codeResponse === LoriWebCodes_getInstance().BAD_EMAIL)
          tmp$ = anonymous.locale.get_25kzsl$('UPVOTE_BadEmail', []);
        else if (codeResponse === LoriWebCodes_getInstance().BAD_IP)
          tmp$ = anonymous.locale.get_25kzsl$('UPVOTE_BadIp', []);
        else
          tmp$ = 'Error: ' + codeResponse;
        var error = tmp$;
        jq('.tingle-modal--visible').find('.server-upvote-button').addClass('button-discord-disabled').removeClass('button-discord-success');
        return this$PartnerView.visibleModal.find('.upvote-notification').text(error);
      }
    };
  }
  function PartnerView$recaptchaCallback$lambda(this$PartnerView, closure$information, closure$response) {
    return function (it) {
      if (this$PartnerView.visibleModal.find('.server-upvote-button').hasClass('button-discord-disabled'))
        return;
      this$PartnerView.visibleModal.find('.server-upvote-button').removeClass('button-discord-success').addClass('button-discord-disabled');
      jQuery.post('https://loritta.website/api/v1/server-list/vote?guildId=' + closure$information.id + '&recaptcha=' + closure$response, PartnerView$recaptchaCallback$lambda$lambda(this$PartnerView, closure$information));
      return Unit;
    };
  }
  PartnerView.prototype.recaptchaCallback = function (response) {
    println('reCAPTCHA completed! Activating upvote button...');
    var information = this.activeInformation;
    if (information == null) {
      println('reCAPTCHA complete, but no active information... bug?');
      return;
    }
    this.visibleModal.find('.upvote-notification').text('');
    this.visibleModal.find('.server-upvote-button').addClass('button-discord-success').removeClass('button-discord-disabled').click(PartnerView$recaptchaCallback$lambda(this, information, response));
  };
  function PartnerView$PartnerInformation(id, iconUrl, invite, name, tagline, description, keywords, ownerId, ownerName, ownerDiscriminator, ownerAvatarUrl, memberCount, onlineCount, serverEmotes, canVote, cantVoteReason, canVoteNext, joinedServer) {
    this.id = id;
    this.iconUrl = iconUrl;
    this.invite = invite;
    this.name = name;
    this.tagline = tagline;
    this.description = description;
    this.keywords = keywords;
    this.ownerId = ownerId;
    this.ownerName = ownerName;
    this.ownerDiscriminator = ownerDiscriminator;
    this.ownerAvatarUrl = ownerAvatarUrl;
    this.memberCount = memberCount;
    this.onlineCount = onlineCount;
    this.serverEmotes = serverEmotes;
    this.canVote = canVote;
    this.cantVoteReason = cantVoteReason;
    this.canVoteNext = canVoteNext;
    this.joinedServer = joinedServer;
  }
  PartnerView$PartnerInformation.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'PartnerInformation',
    interfaces: []
  };
  function PartnerView$Emote(name, imageUrl) {
    this.name = name;
    this.imageUrl = imageUrl;
  }
  PartnerView$Emote.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Emote',
    interfaces: []
  };
  PartnerView.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'PartnerView',
    interfaces: []
  };
  var PartnerView_instance = null;
  function PartnerView_getInstance() {
    if (PartnerView_instance === null) {
      new PartnerView();
    }
    return PartnerView_instance;
  }
  function ServerListConfig(keywords, languages, tagline) {
    this.keywords = keywords;
    this.languages = languages;
    this.tagline = tagline;
    this.isPartner = false;
    this.isSponsored = false;
    this.sponsoredUntil = Kotlin.Long.ZERO;
    this.vanityUrl = null;
    this.description = null;
  }
  function ServerListConfig$ServerVote(id, votedAt, canVote) {
    this.id = id;
    this.votedAt = votedAt;
    this.canVote = canVote;
  }
  ServerListConfig$ServerVote.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ServerVote',
    interfaces: []
  };
  ServerListConfig.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ServerListConfig',
    interfaces: []
  };
  function CountUpOptions(useEasing, useGrouping, separator, decimal) {
    this.useEasing = useEasing;
    this.useGrouping = useGrouping;
    this.separator = separator;
    this.decimal = decimal;
  }
  CountUpOptions.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'CountUpOptions',
    interfaces: []
  };
  function LoriWebCodes() {
    LoriWebCodes_instance = this;
    this.SUCCESS = 0;
    this.RATE_LIMITED = 1;
    this.TRYING_TO_SAVE_PARTNER_CONFIG_WHILE_NOT_PARTNER = 2;
    this.UNKNOWN_GUILD = 3;
    this.UNAUTHORIZED = 4;
    this.ALREADY_VOTED_TODAY = 5;
    this.NOT_IN_GUILD = 6;
    this.INVALID_CAPTCHA_RESPONSE = 7;
    this.MISSING_PAYLOAD_HANDLER = 8;
    this.BAD_IP = 9;
    this.NOT_VERIFIED = 10;
    this.BAD_EMAIL = 11;
    this.MISSING_PERMISSION = 12;
  }
  LoriWebCodes.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'LoriWebCodes',
    interfaces: []
  };
  var LoriWebCodes_instance = null;
  function LoriWebCodes_getInstance() {
    if (LoriWebCodes_instance === null) {
      new LoriWebCodes();
    }
    return LoriWebCodes_instance;
  }
  function LorittaDailyPayload(dailyPayout) {
    this.dailyPayout = dailyPayout;
  }
  LorittaDailyPayload.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'LorittaDailyPayload',
    interfaces: []
  };
  function LorittaPartner() {
    LorittaPartner_instance = this;
  }
  function LorittaPartner$Keyword(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function LorittaPartner$Keyword_initFields() {
    LorittaPartner$Keyword_initFields = function () {
    };
    LorittaPartner$Keyword$GAMING_instance = new LorittaPartner$Keyword('GAMING', 0);
    LorittaPartner$Keyword$ENTERTAINMENT_instance = new LorittaPartner$Keyword('ENTERTAINMENT', 1);
    LorittaPartner$Keyword$ANIME_AND_MANGA_instance = new LorittaPartner$Keyword('ANIME_AND_MANGA', 2);
    LorittaPartner$Keyword$TELEVISION_instance = new LorittaPartner$Keyword('TELEVISION', 3);
    LorittaPartner$Keyword$ROLEPLAYING_instance = new LorittaPartner$Keyword('ROLEPLAYING', 4);
    LorittaPartner$Keyword$GIVEAWAYS_instance = new LorittaPartner$Keyword('GIVEAWAYS', 5);
    LorittaPartner$Keyword$MEMES_instance = new LorittaPartner$Keyword('MEMES', 6);
    LorittaPartner$Keyword$COMMUNITY_instance = new LorittaPartner$Keyword('COMMUNITY', 7);
    LorittaPartner$Keyword$PROGRAMMING_instance = new LorittaPartner$Keyword('PROGRAMMING', 8);
    LorittaPartner$Keyword$MUSIC_instance = new LorittaPartner$Keyword('MUSIC', 9);
    LorittaPartner$Keyword$MOVIES_instance = new LorittaPartner$Keyword('MOVIES', 10);
    LorittaPartner$Keyword$YOUTUBER_instance = new LorittaPartner$Keyword('YOUTUBER', 11);
    LorittaPartner$Keyword$STREAMER_instance = new LorittaPartner$Keyword('STREAMER', 12);
    LorittaPartner$Keyword$DISCUSSION_instance = new LorittaPartner$Keyword('DISCUSSION', 13);
    LorittaPartner$Keyword$EMOTES_instance = new LorittaPartner$Keyword('EMOTES', 14);
    LorittaPartner$Keyword$NEWS_instance = new LorittaPartner$Keyword('NEWS', 15);
    LorittaPartner$Keyword$ART_instance = new LorittaPartner$Keyword('ART', 16);
    LorittaPartner$Keyword$BOTS_instance = new LorittaPartner$Keyword('BOTS', 17);
    LorittaPartner$Keyword$FASHION_AND_BEAUTY_instance = new LorittaPartner$Keyword('FASHION_AND_BEAUTY', 18);
    LorittaPartner$Keyword$SOFTWARE_instance = new LorittaPartner$Keyword('SOFTWARE', 19);
    LorittaPartner$Keyword$HARDWARE_instance = new LorittaPartner$Keyword('HARDWARE', 20);
    LorittaPartner$Keyword$AESTHETICS_instance = new LorittaPartner$Keyword('AESTHETICS', 21);
    LorittaPartner$Keyword$HOBBIES_instance = new LorittaPartner$Keyword('HOBBIES', 22);
    LorittaPartner$Keyword$CHIT_CHAT_instance = new LorittaPartner$Keyword('CHIT_CHAT', 23);
    LorittaPartner$Keyword$KPOP_AND_KOREAN_CULTURE_instance = new LorittaPartner$Keyword('KPOP_AND_KOREAN_CULTURE', 24);
    LorittaPartner$Keyword$TERROR_AND_CREEPYPASTA_instance = new LorittaPartner$Keyword('TERROR_AND_CREEPYPASTA', 25);
    LorittaPartner$Keyword$LIFE_STYLE_instance = new LorittaPartner$Keyword('LIFE_STYLE', 26);
    LorittaPartner$Keyword$BOOKS_AND_WRITING_instance = new LorittaPartner$Keyword('BOOKS_AND_WRITING', 27);
    LorittaPartner$Keyword$SPORTS_instance = new LorittaPartner$Keyword('SPORTS', 28);
    LorittaPartner$Keyword$FITNESS_AND_HEALTH_instance = new LorittaPartner$Keyword('FITNESS_AND_HEALTH', 29);
    LorittaPartner$Keyword$INTERNET_CULTURE_instance = new LorittaPartner$Keyword('INTERNET_CULTURE', 30);
    LorittaPartner$Keyword$FOOD_instance = new LorittaPartner$Keyword('FOOD', 31);
    LorittaPartner$Keyword$NATURE_AND_SCIENCE_instance = new LorittaPartner$Keyword('NATURE_AND_SCIENCE', 32);
    LorittaPartner$Keyword$CRYPTOCURRENCY_instance = new LorittaPartner$Keyword('CRYPTOCURRENCY', 33);
    LorittaPartner$Keyword$TECNOLOGY_instance = new LorittaPartner$Keyword('TECNOLOGY', 34);
    LorittaPartner$Keyword$FURRY_instance = new LorittaPartner$Keyword('FURRY', 35);
    LorittaPartner$Keyword$NSFW_instance = new LorittaPartner$Keyword('NSFW', 36);
  }
  var LorittaPartner$Keyword$GAMING_instance;
  function LorittaPartner$Keyword$GAMING_getInstance() {
    LorittaPartner$Keyword_initFields();
    return LorittaPartner$Keyword$GAMING_instance;
  }
  var LorittaPartner$Keyword$ENTERTAINMENT_instance;
  function LorittaPartner$Keyword$ENTERTAINMENT_getInstance() {
    LorittaPartner$Keyword_initFields();
    return LorittaPartner$Keyword$ENTERTAINMENT_instance;
  }
  var LorittaPartner$Keyword$ANIME_AND_MANGA_instance;
  function LorittaPartner$Keyword$ANIME_AND_MANGA_getInstance() {
    LorittaPartner$Keyword_initFields();
    return LorittaPartner$Keyword$ANIME_AND_MANGA_instance;
  }
  var LorittaPartner$Keyword$TELEVISION_instance;
  function LorittaPartner$Keyword$TELEVISION_getInstance() {
    LorittaPartner$Keyword_initFields();
    return LorittaPartner$Keyword$TELEVISION_instance;
  }
  var LorittaPartner$Keyword$ROLEPLAYING_instance;
  function LorittaPartner$Keyword$ROLEPLAYING_getInstance() {
    LorittaPartner$Keyword_initFields();
    return LorittaPartner$Keyword$ROLEPLAYING_instance;
  }
  var LorittaPartner$Keyword$GIVEAWAYS_instance;
  function LorittaPartner$Keyword$GIVEAWAYS_getInstance() {
    LorittaPartner$Keyword_initFields();
    return LorittaPartner$Keyword$GIVEAWAYS_instance;
  }
  var LorittaPartner$Keyword$MEMES_instance;
  function LorittaPartner$Keyword$MEMES_getInstance() {
    LorittaPartner$Keyword_initFields();
    return LorittaPartner$Keyword$MEMES_instance;
  }
  var LorittaPartner$Keyword$COMMUNITY_instance;
  function LorittaPartner$Keyword$COMMUNITY_getInstance() {
    LorittaPartner$Keyword_initFields();
    return LorittaPartner$Keyword$COMMUNITY_instance;
  }
  var LorittaPartner$Keyword$PROGRAMMING_instance;
  function LorittaPartner$Keyword$PROGRAMMING_getInstance() {
    LorittaPartner$Keyword_initFields();
    return LorittaPartner$Keyword$PROGRAMMING_instance;
  }
  var LorittaPartner$Keyword$MUSIC_instance;
  function LorittaPartner$Keyword$MUSIC_getInstance() {
    LorittaPartner$Keyword_initFields();
    return LorittaPartner$Keyword$MUSIC_instance;
  }
  var LorittaPartner$Keyword$MOVIES_instance;
  function LorittaPartner$Keyword$MOVIES_getInstance() {
    LorittaPartner$Keyword_initFields();
    return LorittaPartner$Keyword$MOVIES_instance;
  }
  var LorittaPartner$Keyword$YOUTUBER_instance;
  function LorittaPartner$Keyword$YOUTUBER_getInstance() {
    LorittaPartner$Keyword_initFields();
    return LorittaPartner$Keyword$YOUTUBER_instance;
  }
  var LorittaPartner$Keyword$STREAMER_instance;
  function LorittaPartner$Keyword$STREAMER_getInstance() {
    LorittaPartner$Keyword_initFields();
    return LorittaPartner$Keyword$STREAMER_instance;
  }
  var LorittaPartner$Keyword$DISCUSSION_instance;
  function LorittaPartner$Keyword$DISCUSSION_getInstance() {
    LorittaPartner$Keyword_initFields();
    return LorittaPartner$Keyword$DISCUSSION_instance;
  }
  var LorittaPartner$Keyword$EMOTES_instance;
  function LorittaPartner$Keyword$EMOTES_getInstance() {
    LorittaPartner$Keyword_initFields();
    return LorittaPartner$Keyword$EMOTES_instance;
  }
  var LorittaPartner$Keyword$NEWS_instance;
  function LorittaPartner$Keyword$NEWS_getInstance() {
    LorittaPartner$Keyword_initFields();
    return LorittaPartner$Keyword$NEWS_instance;
  }
  var LorittaPartner$Keyword$ART_instance;
  function LorittaPartner$Keyword$ART_getInstance() {
    LorittaPartner$Keyword_initFields();
    return LorittaPartner$Keyword$ART_instance;
  }
  var LorittaPartner$Keyword$BOTS_instance;
  function LorittaPartner$Keyword$BOTS_getInstance() {
    LorittaPartner$Keyword_initFields();
    return LorittaPartner$Keyword$BOTS_instance;
  }
  var LorittaPartner$Keyword$FASHION_AND_BEAUTY_instance;
  function LorittaPartner$Keyword$FASHION_AND_BEAUTY_getInstance() {
    LorittaPartner$Keyword_initFields();
    return LorittaPartner$Keyword$FASHION_AND_BEAUTY_instance;
  }
  var LorittaPartner$Keyword$SOFTWARE_instance;
  function LorittaPartner$Keyword$SOFTWARE_getInstance() {
    LorittaPartner$Keyword_initFields();
    return LorittaPartner$Keyword$SOFTWARE_instance;
  }
  var LorittaPartner$Keyword$HARDWARE_instance;
  function LorittaPartner$Keyword$HARDWARE_getInstance() {
    LorittaPartner$Keyword_initFields();
    return LorittaPartner$Keyword$HARDWARE_instance;
  }
  var LorittaPartner$Keyword$AESTHETICS_instance;
  function LorittaPartner$Keyword$AESTHETICS_getInstance() {
    LorittaPartner$Keyword_initFields();
    return LorittaPartner$Keyword$AESTHETICS_instance;
  }
  var LorittaPartner$Keyword$HOBBIES_instance;
  function LorittaPartner$Keyword$HOBBIES_getInstance() {
    LorittaPartner$Keyword_initFields();
    return LorittaPartner$Keyword$HOBBIES_instance;
  }
  var LorittaPartner$Keyword$CHIT_CHAT_instance;
  function LorittaPartner$Keyword$CHIT_CHAT_getInstance() {
    LorittaPartner$Keyword_initFields();
    return LorittaPartner$Keyword$CHIT_CHAT_instance;
  }
  var LorittaPartner$Keyword$KPOP_AND_KOREAN_CULTURE_instance;
  function LorittaPartner$Keyword$KPOP_AND_KOREAN_CULTURE_getInstance() {
    LorittaPartner$Keyword_initFields();
    return LorittaPartner$Keyword$KPOP_AND_KOREAN_CULTURE_instance;
  }
  var LorittaPartner$Keyword$TERROR_AND_CREEPYPASTA_instance;
  function LorittaPartner$Keyword$TERROR_AND_CREEPYPASTA_getInstance() {
    LorittaPartner$Keyword_initFields();
    return LorittaPartner$Keyword$TERROR_AND_CREEPYPASTA_instance;
  }
  var LorittaPartner$Keyword$LIFE_STYLE_instance;
  function LorittaPartner$Keyword$LIFE_STYLE_getInstance() {
    LorittaPartner$Keyword_initFields();
    return LorittaPartner$Keyword$LIFE_STYLE_instance;
  }
  var LorittaPartner$Keyword$BOOKS_AND_WRITING_instance;
  function LorittaPartner$Keyword$BOOKS_AND_WRITING_getInstance() {
    LorittaPartner$Keyword_initFields();
    return LorittaPartner$Keyword$BOOKS_AND_WRITING_instance;
  }
  var LorittaPartner$Keyword$SPORTS_instance;
  function LorittaPartner$Keyword$SPORTS_getInstance() {
    LorittaPartner$Keyword_initFields();
    return LorittaPartner$Keyword$SPORTS_instance;
  }
  var LorittaPartner$Keyword$FITNESS_AND_HEALTH_instance;
  function LorittaPartner$Keyword$FITNESS_AND_HEALTH_getInstance() {
    LorittaPartner$Keyword_initFields();
    return LorittaPartner$Keyword$FITNESS_AND_HEALTH_instance;
  }
  var LorittaPartner$Keyword$INTERNET_CULTURE_instance;
  function LorittaPartner$Keyword$INTERNET_CULTURE_getInstance() {
    LorittaPartner$Keyword_initFields();
    return LorittaPartner$Keyword$INTERNET_CULTURE_instance;
  }
  var LorittaPartner$Keyword$FOOD_instance;
  function LorittaPartner$Keyword$FOOD_getInstance() {
    LorittaPartner$Keyword_initFields();
    return LorittaPartner$Keyword$FOOD_instance;
  }
  var LorittaPartner$Keyword$NATURE_AND_SCIENCE_instance;
  function LorittaPartner$Keyword$NATURE_AND_SCIENCE_getInstance() {
    LorittaPartner$Keyword_initFields();
    return LorittaPartner$Keyword$NATURE_AND_SCIENCE_instance;
  }
  var LorittaPartner$Keyword$CRYPTOCURRENCY_instance;
  function LorittaPartner$Keyword$CRYPTOCURRENCY_getInstance() {
    LorittaPartner$Keyword_initFields();
    return LorittaPartner$Keyword$CRYPTOCURRENCY_instance;
  }
  var LorittaPartner$Keyword$TECNOLOGY_instance;
  function LorittaPartner$Keyword$TECNOLOGY_getInstance() {
    LorittaPartner$Keyword_initFields();
    return LorittaPartner$Keyword$TECNOLOGY_instance;
  }
  var LorittaPartner$Keyword$FURRY_instance;
  function LorittaPartner$Keyword$FURRY_getInstance() {
    LorittaPartner$Keyword_initFields();
    return LorittaPartner$Keyword$FURRY_instance;
  }
  var LorittaPartner$Keyword$NSFW_instance;
  function LorittaPartner$Keyword$NSFW_getInstance() {
    LorittaPartner$Keyword_initFields();
    return LorittaPartner$Keyword$NSFW_instance;
  }
  LorittaPartner$Keyword.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Keyword',
    interfaces: [Enum]
  };
  function LorittaPartner$Keyword$values() {
    return [LorittaPartner$Keyword$GAMING_getInstance(), LorittaPartner$Keyword$ENTERTAINMENT_getInstance(), LorittaPartner$Keyword$ANIME_AND_MANGA_getInstance(), LorittaPartner$Keyword$TELEVISION_getInstance(), LorittaPartner$Keyword$ROLEPLAYING_getInstance(), LorittaPartner$Keyword$GIVEAWAYS_getInstance(), LorittaPartner$Keyword$MEMES_getInstance(), LorittaPartner$Keyword$COMMUNITY_getInstance(), LorittaPartner$Keyword$PROGRAMMING_getInstance(), LorittaPartner$Keyword$MUSIC_getInstance(), LorittaPartner$Keyword$MOVIES_getInstance(), LorittaPartner$Keyword$YOUTUBER_getInstance(), LorittaPartner$Keyword$STREAMER_getInstance(), LorittaPartner$Keyword$DISCUSSION_getInstance(), LorittaPartner$Keyword$EMOTES_getInstance(), LorittaPartner$Keyword$NEWS_getInstance(), LorittaPartner$Keyword$ART_getInstance(), LorittaPartner$Keyword$BOTS_getInstance(), LorittaPartner$Keyword$FASHION_AND_BEAUTY_getInstance(), LorittaPartner$Keyword$SOFTWARE_getInstance(), LorittaPartner$Keyword$HARDWARE_getInstance(), LorittaPartner$Keyword$AESTHETICS_getInstance(), LorittaPartner$Keyword$HOBBIES_getInstance(), LorittaPartner$Keyword$CHIT_CHAT_getInstance(), LorittaPartner$Keyword$KPOP_AND_KOREAN_CULTURE_getInstance(), LorittaPartner$Keyword$TERROR_AND_CREEPYPASTA_getInstance(), LorittaPartner$Keyword$LIFE_STYLE_getInstance(), LorittaPartner$Keyword$BOOKS_AND_WRITING_getInstance(), LorittaPartner$Keyword$SPORTS_getInstance(), LorittaPartner$Keyword$FITNESS_AND_HEALTH_getInstance(), LorittaPartner$Keyword$INTERNET_CULTURE_getInstance(), LorittaPartner$Keyword$FOOD_getInstance(), LorittaPartner$Keyword$NATURE_AND_SCIENCE_getInstance(), LorittaPartner$Keyword$CRYPTOCURRENCY_getInstance(), LorittaPartner$Keyword$TECNOLOGY_getInstance(), LorittaPartner$Keyword$FURRY_getInstance(), LorittaPartner$Keyword$NSFW_getInstance()];
  }
  LorittaPartner$Keyword.values = LorittaPartner$Keyword$values;
  function LorittaPartner$Keyword$valueOf(name) {
    switch (name) {
      case 'GAMING':
        return LorittaPartner$Keyword$GAMING_getInstance();
      case 'ENTERTAINMENT':
        return LorittaPartner$Keyword$ENTERTAINMENT_getInstance();
      case 'ANIME_AND_MANGA':
        return LorittaPartner$Keyword$ANIME_AND_MANGA_getInstance();
      case 'TELEVISION':
        return LorittaPartner$Keyword$TELEVISION_getInstance();
      case 'ROLEPLAYING':
        return LorittaPartner$Keyword$ROLEPLAYING_getInstance();
      case 'GIVEAWAYS':
        return LorittaPartner$Keyword$GIVEAWAYS_getInstance();
      case 'MEMES':
        return LorittaPartner$Keyword$MEMES_getInstance();
      case 'COMMUNITY':
        return LorittaPartner$Keyword$COMMUNITY_getInstance();
      case 'PROGRAMMING':
        return LorittaPartner$Keyword$PROGRAMMING_getInstance();
      case 'MUSIC':
        return LorittaPartner$Keyword$MUSIC_getInstance();
      case 'MOVIES':
        return LorittaPartner$Keyword$MOVIES_getInstance();
      case 'YOUTUBER':
        return LorittaPartner$Keyword$YOUTUBER_getInstance();
      case 'STREAMER':
        return LorittaPartner$Keyword$STREAMER_getInstance();
      case 'DISCUSSION':
        return LorittaPartner$Keyword$DISCUSSION_getInstance();
      case 'EMOTES':
        return LorittaPartner$Keyword$EMOTES_getInstance();
      case 'NEWS':
        return LorittaPartner$Keyword$NEWS_getInstance();
      case 'ART':
        return LorittaPartner$Keyword$ART_getInstance();
      case 'BOTS':
        return LorittaPartner$Keyword$BOTS_getInstance();
      case 'FASHION_AND_BEAUTY':
        return LorittaPartner$Keyword$FASHION_AND_BEAUTY_getInstance();
      case 'SOFTWARE':
        return LorittaPartner$Keyword$SOFTWARE_getInstance();
      case 'HARDWARE':
        return LorittaPartner$Keyword$HARDWARE_getInstance();
      case 'AESTHETICS':
        return LorittaPartner$Keyword$AESTHETICS_getInstance();
      case 'HOBBIES':
        return LorittaPartner$Keyword$HOBBIES_getInstance();
      case 'CHIT_CHAT':
        return LorittaPartner$Keyword$CHIT_CHAT_getInstance();
      case 'KPOP_AND_KOREAN_CULTURE':
        return LorittaPartner$Keyword$KPOP_AND_KOREAN_CULTURE_getInstance();
      case 'TERROR_AND_CREEPYPASTA':
        return LorittaPartner$Keyword$TERROR_AND_CREEPYPASTA_getInstance();
      case 'LIFE_STYLE':
        return LorittaPartner$Keyword$LIFE_STYLE_getInstance();
      case 'BOOKS_AND_WRITING':
        return LorittaPartner$Keyword$BOOKS_AND_WRITING_getInstance();
      case 'SPORTS':
        return LorittaPartner$Keyword$SPORTS_getInstance();
      case 'FITNESS_AND_HEALTH':
        return LorittaPartner$Keyword$FITNESS_AND_HEALTH_getInstance();
      case 'INTERNET_CULTURE':
        return LorittaPartner$Keyword$INTERNET_CULTURE_getInstance();
      case 'FOOD':
        return LorittaPartner$Keyword$FOOD_getInstance();
      case 'NATURE_AND_SCIENCE':
        return LorittaPartner$Keyword$NATURE_AND_SCIENCE_getInstance();
      case 'CRYPTOCURRENCY':
        return LorittaPartner$Keyword$CRYPTOCURRENCY_getInstance();
      case 'TECNOLOGY':
        return LorittaPartner$Keyword$TECNOLOGY_getInstance();
      case 'FURRY':
        return LorittaPartner$Keyword$FURRY_getInstance();
      case 'NSFW':
        return LorittaPartner$Keyword$NSFW_getInstance();
      default:throwISE('No enum constant utils.LorittaPartner.Keyword.' + name);
    }
  }
  LorittaPartner$Keyword.valueOf_61zpoe$ = LorittaPartner$Keyword$valueOf;
  function LorittaPartner$Language(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function LorittaPartner$Language_initFields() {
    LorittaPartner$Language_initFields = function () {
    };
  }
  LorittaPartner$Language.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Language',
    interfaces: [Enum]
  };
  function LorittaPartner$Language$values() {
    return [];
  }
  LorittaPartner$Language.values = LorittaPartner$Language$values;
  function LorittaPartner$Language$valueOf(name) {
    throwISE('No enum constant utils.LorittaPartner.Language.' + name);
  }
  LorittaPartner$Language.valueOf_61zpoe$ = LorittaPartner$Language$valueOf;
  function LorittaPartner$Type(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function LorittaPartner$Type_initFields() {
    LorittaPartner$Type_initFields = function () {
    };
    LorittaPartner$Type$SPONSOR_instance = new LorittaPartner$Type('SPONSOR', 0);
    LorittaPartner$Type$PARTNER_instance = new LorittaPartner$Type('PARTNER', 1);
    LorittaPartner$Type$NORMAL_instance = new LorittaPartner$Type('NORMAL', 2);
  }
  var LorittaPartner$Type$SPONSOR_instance;
  function LorittaPartner$Type$SPONSOR_getInstance() {
    LorittaPartner$Type_initFields();
    return LorittaPartner$Type$SPONSOR_instance;
  }
  var LorittaPartner$Type$PARTNER_instance;
  function LorittaPartner$Type$PARTNER_getInstance() {
    LorittaPartner$Type_initFields();
    return LorittaPartner$Type$PARTNER_instance;
  }
  var LorittaPartner$Type$NORMAL_instance;
  function LorittaPartner$Type$NORMAL_getInstance() {
    LorittaPartner$Type_initFields();
    return LorittaPartner$Type$NORMAL_instance;
  }
  LorittaPartner$Type.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Type',
    interfaces: [Enum]
  };
  function LorittaPartner$Type$values() {
    return [LorittaPartner$Type$SPONSOR_getInstance(), LorittaPartner$Type$PARTNER_getInstance(), LorittaPartner$Type$NORMAL_getInstance()];
  }
  LorittaPartner$Type.values = LorittaPartner$Type$values;
  function LorittaPartner$Type$valueOf(name) {
    switch (name) {
      case 'SPONSOR':
        return LorittaPartner$Type$SPONSOR_getInstance();
      case 'PARTNER':
        return LorittaPartner$Type$PARTNER_getInstance();
      case 'NORMAL':
        return LorittaPartner$Type$NORMAL_getInstance();
      default:throwISE('No enum constant utils.LorittaPartner.Type.' + name);
    }
  }
  LorittaPartner$Type.valueOf_61zpoe$ = LorittaPartner$Type$valueOf;
  LorittaPartner.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'LorittaPartner',
    interfaces: []
  };
  var LorittaPartner_instance = null;
  function LorittaPartner_getInstance() {
    if (LorittaPartner_instance === null) {
      new LorittaPartner();
    }
    return LorittaPartner_instance;
  }
  function LorittaSamplePayload(sponsored, partners, top, random, recentlyBumped, sponsoredCount, partnersCount, totalCount) {
    this.sponsored = sponsored;
    this.partners = partners;
    this.top = top;
    this.random = random;
    this.recentlyBumped = recentlyBumped;
    this.sponsoredCount = sponsoredCount;
    this.partnersCount = partnersCount;
    this.totalCount = totalCount;
  }
  LorittaSamplePayload.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'LorittaSamplePayload',
    interfaces: []
  };
  function LorittaServerQueryPayload(result, totalCount) {
    this.result = result;
    this.totalCount = totalCount;
  }
  LorittaServerQueryPayload.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'LorittaServerQueryPayload',
    interfaces: []
  };
  function LorittaServerSample(id, iconUrl, invite, name, ownerId, ownerName, ownerDiscriminator, memberCount, onlineCount, serverEmotes, serverListConfig, voteCount, canVote, cantVoteReason, canVoteNext, joinedServer) {
    this.id = id;
    this.iconUrl = iconUrl;
    this.invite = invite;
    this.name = name;
    this.ownerId = ownerId;
    this.ownerName = ownerName;
    this.ownerDiscriminator = ownerDiscriminator;
    this.memberCount = memberCount;
    this.onlineCount = onlineCount;
    this.serverEmotes = serverEmotes;
    this.serverListConfig = serverListConfig;
    this.voteCount = voteCount;
    this.canVote = canVote;
    this.cantVoteReason = cantVoteReason;
    this.canVoteNext = canVoteNext;
    this.joinedServer = joinedServer;
  }
  LorittaServerSample.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'LorittaServerSample',
    interfaces: []
  };
  function getType($receiver) {
    if ($receiver.serverListConfig.isSponsored) {
      var sponsoredUntil = $receiver.serverListConfig.sponsoredUntil;
      if (true || equals(sponsoredUntil, Kotlin.Long.NEG_ONE) || sponsoredUntil.toNumber() > (new Date()).getTime()) {
        return LorittaPartner$Type$SPONSOR_getInstance();
      }
    }
    if ($receiver.serverListConfig.isPartner) {
      return LorittaPartner$Type$PARTNER_getInstance();
    }
    return LorittaPartner$Type$NORMAL_getInstance();
  }
  function RecaptchaOptions(sitekey, callback, size) {
    this.sitekey = sitekey;
    this.callback = callback;
    this.size = size;
  }
  RecaptchaOptions.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'RecaptchaOptions',
    interfaces: []
  };
  Object.defineProperty(_, 'DailyView', {
    get: DailyView_getInstance
  });
  _.toJson_th5c7u$ = toJson;
  _.toJson_s8jyvk$ = toJson_0;
  _.stringify_s8jyvk$ = stringify;
  Object.defineProperty(_, 'LoriServerList', {
    get: LoriServerList_getInstance
  });
  PartnerView.prototype.PartnerInformation = PartnerView$PartnerInformation;
  PartnerView.prototype.Emote = PartnerView$Emote;
  Object.defineProperty(_, 'PartnerView', {
    get: PartnerView_getInstance
  });
  ServerListConfig.ServerVote = ServerListConfig$ServerVote;
  var package$userdata = _.userdata || (_.userdata = {});
  package$userdata.ServerListConfig = ServerListConfig;
  var package$utils = _.utils || (_.utils = {});
  package$utils.CountUpOptions = CountUpOptions;
  Object.defineProperty(package$utils, 'LoriWebCodes', {
    get: LoriWebCodes_getInstance
  });
  package$utils.LorittaDailyPayload = LorittaDailyPayload;
  Object.defineProperty(LorittaPartner$Keyword, 'GAMING', {
    get: LorittaPartner$Keyword$GAMING_getInstance
  });
  Object.defineProperty(LorittaPartner$Keyword, 'ENTERTAINMENT', {
    get: LorittaPartner$Keyword$ENTERTAINMENT_getInstance
  });
  Object.defineProperty(LorittaPartner$Keyword, 'ANIME_AND_MANGA', {
    get: LorittaPartner$Keyword$ANIME_AND_MANGA_getInstance
  });
  Object.defineProperty(LorittaPartner$Keyword, 'TELEVISION', {
    get: LorittaPartner$Keyword$TELEVISION_getInstance
  });
  Object.defineProperty(LorittaPartner$Keyword, 'ROLEPLAYING', {
    get: LorittaPartner$Keyword$ROLEPLAYING_getInstance
  });
  Object.defineProperty(LorittaPartner$Keyword, 'GIVEAWAYS', {
    get: LorittaPartner$Keyword$GIVEAWAYS_getInstance
  });
  Object.defineProperty(LorittaPartner$Keyword, 'MEMES', {
    get: LorittaPartner$Keyword$MEMES_getInstance
  });
  Object.defineProperty(LorittaPartner$Keyword, 'COMMUNITY', {
    get: LorittaPartner$Keyword$COMMUNITY_getInstance
  });
  Object.defineProperty(LorittaPartner$Keyword, 'PROGRAMMING', {
    get: LorittaPartner$Keyword$PROGRAMMING_getInstance
  });
  Object.defineProperty(LorittaPartner$Keyword, 'MUSIC', {
    get: LorittaPartner$Keyword$MUSIC_getInstance
  });
  Object.defineProperty(LorittaPartner$Keyword, 'MOVIES', {
    get: LorittaPartner$Keyword$MOVIES_getInstance
  });
  Object.defineProperty(LorittaPartner$Keyword, 'YOUTUBER', {
    get: LorittaPartner$Keyword$YOUTUBER_getInstance
  });
  Object.defineProperty(LorittaPartner$Keyword, 'STREAMER', {
    get: LorittaPartner$Keyword$STREAMER_getInstance
  });
  Object.defineProperty(LorittaPartner$Keyword, 'DISCUSSION', {
    get: LorittaPartner$Keyword$DISCUSSION_getInstance
  });
  Object.defineProperty(LorittaPartner$Keyword, 'EMOTES', {
    get: LorittaPartner$Keyword$EMOTES_getInstance
  });
  Object.defineProperty(LorittaPartner$Keyword, 'NEWS', {
    get: LorittaPartner$Keyword$NEWS_getInstance
  });
  Object.defineProperty(LorittaPartner$Keyword, 'ART', {
    get: LorittaPartner$Keyword$ART_getInstance
  });
  Object.defineProperty(LorittaPartner$Keyword, 'BOTS', {
    get: LorittaPartner$Keyword$BOTS_getInstance
  });
  Object.defineProperty(LorittaPartner$Keyword, 'FASHION_AND_BEAUTY', {
    get: LorittaPartner$Keyword$FASHION_AND_BEAUTY_getInstance
  });
  Object.defineProperty(LorittaPartner$Keyword, 'SOFTWARE', {
    get: LorittaPartner$Keyword$SOFTWARE_getInstance
  });
  Object.defineProperty(LorittaPartner$Keyword, 'HARDWARE', {
    get: LorittaPartner$Keyword$HARDWARE_getInstance
  });
  Object.defineProperty(LorittaPartner$Keyword, 'AESTHETICS', {
    get: LorittaPartner$Keyword$AESTHETICS_getInstance
  });
  Object.defineProperty(LorittaPartner$Keyword, 'HOBBIES', {
    get: LorittaPartner$Keyword$HOBBIES_getInstance
  });
  Object.defineProperty(LorittaPartner$Keyword, 'CHIT_CHAT', {
    get: LorittaPartner$Keyword$CHIT_CHAT_getInstance
  });
  Object.defineProperty(LorittaPartner$Keyword, 'KPOP_AND_KOREAN_CULTURE', {
    get: LorittaPartner$Keyword$KPOP_AND_KOREAN_CULTURE_getInstance
  });
  Object.defineProperty(LorittaPartner$Keyword, 'TERROR_AND_CREEPYPASTA', {
    get: LorittaPartner$Keyword$TERROR_AND_CREEPYPASTA_getInstance
  });
  Object.defineProperty(LorittaPartner$Keyword, 'LIFE_STYLE', {
    get: LorittaPartner$Keyword$LIFE_STYLE_getInstance
  });
  Object.defineProperty(LorittaPartner$Keyword, 'BOOKS_AND_WRITING', {
    get: LorittaPartner$Keyword$BOOKS_AND_WRITING_getInstance
  });
  Object.defineProperty(LorittaPartner$Keyword, 'SPORTS', {
    get: LorittaPartner$Keyword$SPORTS_getInstance
  });
  Object.defineProperty(LorittaPartner$Keyword, 'FITNESS_AND_HEALTH', {
    get: LorittaPartner$Keyword$FITNESS_AND_HEALTH_getInstance
  });
  Object.defineProperty(LorittaPartner$Keyword, 'INTERNET_CULTURE', {
    get: LorittaPartner$Keyword$INTERNET_CULTURE_getInstance
  });
  Object.defineProperty(LorittaPartner$Keyword, 'FOOD', {
    get: LorittaPartner$Keyword$FOOD_getInstance
  });
  Object.defineProperty(LorittaPartner$Keyword, 'NATURE_AND_SCIENCE', {
    get: LorittaPartner$Keyword$NATURE_AND_SCIENCE_getInstance
  });
  Object.defineProperty(LorittaPartner$Keyword, 'CRYPTOCURRENCY', {
    get: LorittaPartner$Keyword$CRYPTOCURRENCY_getInstance
  });
  Object.defineProperty(LorittaPartner$Keyword, 'TECNOLOGY', {
    get: LorittaPartner$Keyword$TECNOLOGY_getInstance
  });
  Object.defineProperty(LorittaPartner$Keyword, 'FURRY', {
    get: LorittaPartner$Keyword$FURRY_getInstance
  });
  Object.defineProperty(LorittaPartner$Keyword, 'NSFW', {
    get: LorittaPartner$Keyword$NSFW_getInstance
  });
  LorittaPartner.prototype.Keyword = LorittaPartner$Keyword;
  LorittaPartner.prototype.Language = LorittaPartner$Language;
  Object.defineProperty(LorittaPartner$Type, 'SPONSOR', {
    get: LorittaPartner$Type$SPONSOR_getInstance
  });
  Object.defineProperty(LorittaPartner$Type, 'PARTNER', {
    get: LorittaPartner$Type$PARTNER_getInstance
  });
  Object.defineProperty(LorittaPartner$Type, 'NORMAL', {
    get: LorittaPartner$Type$NORMAL_getInstance
  });
  LorittaPartner.prototype.Type = LorittaPartner$Type;
  Object.defineProperty(package$utils, 'LorittaPartner', {
    get: LorittaPartner_getInstance
  });
  package$utils.LorittaSamplePayload = LorittaSamplePayload;
  package$utils.LorittaServerQueryPayload = LorittaServerQueryPayload;
  package$utils.LorittaServerSample = LorittaServerSample;
  package$utils.getType_17hplk$ = getType;
  package$utils.RecaptchaOptions = RecaptchaOptions;
  Kotlin.defineModule('LoriServerList', _);
  return _;
}(typeof LoriServerList === 'undefined' ? {} : LoriServerList, kotlin, LoriUtils);
