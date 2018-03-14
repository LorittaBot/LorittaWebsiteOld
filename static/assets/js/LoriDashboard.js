if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'LoriDashboard'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'LoriDashboard'.");
}
if (typeof LoriUtils === 'undefined') {
  throw new Error("Error loading module 'LoriDashboard'. Its dependency 'LoriUtils' was not found. Please, check whether 'LoriUtils' is loaded prior to 'LoriDashboard'.");
}
var LoriDashboard = function (_, Kotlin, $module$LoriUtils) {
  'use strict';
  var throwUPAE = Kotlin.throwUPAE;
  var stringify = $module$LoriUtils.stringify_s8jyvk$;
  var println = Kotlin.kotlin.io.println_s8jyv4$;
  var BaseLocale = $module$LoriUtils.utils.BaseLocale;
  var toJson = $module$LoriUtils.toJson_s8jyvk$;
  var toString = Kotlin.toString;
  var jq = $module$LoriUtils.jq_61zpoe$;
  var Unit = Kotlin.kotlin.Unit;
  var replace = Kotlin.kotlin.text.replace_680rmw$;
  var equals = Kotlin.equals;
  var json = Kotlin.kotlin.js.json_pyyo18$;
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  var PropertyMetadata = Kotlin.PropertyMetadata;
  var joinToString = Kotlin.kotlin.collections.joinToString_cgipc5$;
  var lazy = Kotlin.kotlin.lazy_klfg04$;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var Enum = Kotlin.kotlin.Enum;
  var throwISE = Kotlin.throwISE;
  ModerationConfig$PunishmentAction.prototype = Object.create(Enum.prototype);
  ModerationConfig$PunishmentAction.prototype.constructor = ModerationConfig$PunishmentAction;
  LorittaPartner$Keyword.prototype = Object.create(Enum.prototype);
  LorittaPartner$Keyword.prototype.constructor = LorittaPartner$Keyword;
  LorittaPartner$Language.prototype = Object.create(Enum.prototype);
  LorittaPartner$Language.prototype.constructor = LorittaPartner$Language;
  LorittaPartner$Type.prototype = Object.create(Enum.prototype);
  LorittaPartner$Type.prototype.constructor = LorittaPartner$Type;
  function ConfigureModerationView() {
    ConfigureModerationView_instance = this;
    this.locale_wine6b$_0 = this.locale_wine6b$_0;
  }
  Object.defineProperty(ConfigureModerationView.prototype, 'locale', {
    get: function () {
      if (this.locale_wine6b$_0 == null)
        return throwUPAE('locale');
      return this.locale_wine6b$_0;
    },
    set: function (locale) {
      this.locale_wine6b$_0 = locale;
    }
  });
  function ConfigureModerationView$start$lambda$lambda$lambda(this$ConfigureModerationView) {
    return function (it) {
      this$ConfigureModerationView.addPunishment_a3smtl$(new ModerationConfig$WarnAction(1, ModerationConfig$PunishmentAction$BAN_getInstance()));
      return Unit;
    };
  }
  function ConfigureModerationView$start$lambda$lambda(this$ConfigureModerationView) {
    return function (data, b, c) {
      var tmp$, tmp$_0;
      LoriDashboard_getInstance().hideLoadingBar();
      println('Data: ' + toString(data));
      var serverConfig = JSON.parse(data);
      tmp$ = serverConfig.moderationConfig.punishmentActions;
      for (tmp$_0 = 0; tmp$_0 !== tmp$.length; ++tmp$_0) {
        var punishment = tmp$[tmp$_0];
        this$ConfigureModerationView.addPunishment_a3smtl$(punishment);
      }
      LoriDashboard_getInstance().applyBlur_puj7f4$('#hiddenIfDisabled', '#cmn-toggle-2');
      return jq('.add-new-action').click(ConfigureModerationView$start$lambda$lambda$lambda(this$ConfigureModerationView));
    };
  }
  function ConfigureModerationView$start$lambda(this$ConfigureModerationView) {
    return function (data, b, c) {
      println('Received locale: ' + stringify(data));
      this$ConfigureModerationView.locale = BaseLocale.Companion.create_qk3xy8$(toJson(data));
      return jQuery.post('https://loritta.website/api/v1/config/get-server-config?guildId=' + guildId, ConfigureModerationView$start$lambda$lambda(this$ConfigureModerationView));
    };
  }
  ConfigureModerationView.prototype.start = function () {
    LoriDashboard_getInstance().showLoadingBar_pdl1vj$('Carregando...');
    jQuery.post('https://loritta.website/api/v1/misc/get-locale', ConfigureModerationView$start$lambda(this));
  };
  function ConfigureModerationView$addPunishment$lambda(closure$action) {
    return function (it) {
      closure$action.remove();
      return Unit;
    };
  }
  ConfigureModerationView.prototype.addPunishment_a3smtl$ = function (warnAction) {
    var tmp$, tmp$_0;
    var action = jq('<div>').append(jq('<button>').attr('class', 'button-discord button-discord-info pure-button remove-action').html('<i class="fas fa-trash"><\/i>')).append(' Ao chegar em ').append(jq('<input>').attr('type', 'number').attr('min', 1).val(warnAction.warnCount).attr('class', 'warnCount')).append(' avisos, ').append("<select class='apply-punishment'>").append(' o usu\xE1rio');
    jq('#warnActions').append(action);
    action.find('.remove-action').click(ConfigureModerationView$addPunishment$lambda(action));
    var applyPunishment = action.find('.apply-punishment');
    tmp$ = ModerationConfig$PunishmentAction$values();
    for (tmp$_0 = 0; tmp$_0 !== tmp$.length; ++tmp$_0) {
      var punishment = tmp$[tmp$_0];
      var option = jq('<option>').attr('name', this.locale.get_25kzsl$(replace(punishment.toString(), '_', '') + '_PunishName', [])).attr('value', punishment.toString()).text(this.locale.get_25kzsl$(replace(punishment.toString(), '_', '') + '_PunishName', []));
      if (equals(warnAction.punishmentAction.toString(), punishment.toString())) {
        option.attr('selected', 'selected');
      }
      applyPunishment.append(option);
    }
  };
  function ConfigureModerationView$prepareSave$lambda$lambda(closure$actions) {
    return function (index, elem) {
      var el = jQuery(elem);
      var json_0 = json([]);
      json_0['punishmentAction'] = ModerationConfig$PunishmentAction$valueOf(el.find('.apply-punishment').val()).toString();
      json_0['warnCount'] = el.find('.warnCount').val();
      return closure$actions.add_11rb$(json_0);
    };
  }
  var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_ww73n8$;
  function ConfigureModerationView$prepareSave$lambda(payload) {
    var actions = ArrayList_init();
    var warnActions = jq('#warnActions');
    var children = warnActions.children();
    children.each(ConfigureModerationView$prepareSave$lambda$lambda(actions));
    payload['punishmentActions'] = actions;
    return Unit;
  }
  ConfigureModerationView.prototype.prepareSave = function () {
    SaveStuff_getInstance().prepareSave('moderation', ConfigureModerationView$prepareSave$lambda);
  };
  ConfigureModerationView.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'ConfigureModerationView',
    interfaces: []
  };
  var ConfigureModerationView_instance = null;
  function ConfigureModerationView_getInstance() {
    if (ConfigureModerationView_instance === null) {
      new ConfigureModerationView();
    }
    return ConfigureModerationView_instance;
  }
  function ConfigurePartnerView() {
    ConfigurePartnerView_instance = this;
    this.vanityUrlInput_jrj3bh$_0 = lazy(ConfigurePartnerView$vanityUrlInput$lambda);
    this.vanityUrlExample_i46b83$_0 = lazy(ConfigurePartnerView$vanityUrlExample$lambda);
    this.addKeyword_7t6lhx$_0 = lazy(ConfigurePartnerView$addKeyword$lambda);
    this.keywords_k89ksp$_0 = lazy(ConfigurePartnerView$keywords$lambda);
    this.keywordList_xlo49m$_0 = lazy(ConfigurePartnerView$keywordList$lambda);
    this.uploadBackground_valcxw$_0 = lazy(ConfigurePartnerView$uploadBackground$lambda);
    this.isPartner = false;
    this.locale_w27tuv$_0 = this.locale_w27tuv$_0;
  }
  Object.defineProperty(ConfigurePartnerView.prototype, 'vanityUrlInput', {
    get: function () {
      var $receiver = this.vanityUrlInput_jrj3bh$_0;
      new PropertyMetadata('vanityUrlInput');
      return $receiver.value;
    }
  });
  Object.defineProperty(ConfigurePartnerView.prototype, 'vanityUrlExample', {
    get: function () {
      var $receiver = this.vanityUrlExample_i46b83$_0;
      new PropertyMetadata('vanityUrlExample');
      return $receiver.value;
    }
  });
  Object.defineProperty(ConfigurePartnerView.prototype, 'addKeyword', {
    get: function () {
      var $receiver = this.addKeyword_7t6lhx$_0;
      new PropertyMetadata('addKeyword');
      return $receiver.value;
    }
  });
  Object.defineProperty(ConfigurePartnerView.prototype, 'keywords', {
    get: function () {
      var $receiver = this.keywords_k89ksp$_0;
      new PropertyMetadata('keywords');
      return $receiver.value;
    }
  });
  Object.defineProperty(ConfigurePartnerView.prototype, 'keywordList', {
    get: function () {
      var $receiver = this.keywordList_xlo49m$_0;
      new PropertyMetadata('keywordList');
      return $receiver.value;
    }
  });
  Object.defineProperty(ConfigurePartnerView.prototype, 'uploadBackground', {
    get: function () {
      var $receiver = this.uploadBackground_valcxw$_0;
      new PropertyMetadata('uploadBackground');
      return $receiver.value;
    }
  });
  Object.defineProperty(ConfigurePartnerView.prototype, 'locale', {
    get: function () {
      if (this.locale_w27tuv$_0 == null)
        return throwUPAE('locale');
      return this.locale_w27tuv$_0;
    },
    set: function (locale) {
      this.locale_w27tuv$_0 = locale;
    }
  });
  function ConfigurePartnerView$start$lambda$lambda$lambda(this$ConfigurePartnerView) {
    return function (f, f_0) {
      var vanityUrl = this$ConfigurePartnerView.vanityUrlInput.val();
      vanityUrl = replace(vanityUrl, ' ', '-');
      vanityUrl = vanityUrl.toLowerCase();
      this$ConfigurePartnerView.vanityUrlInput.val(vanityUrl);
      this$ConfigurePartnerView.changeVanityUrlText();
      return Unit;
    };
  }
  function ConfigurePartnerView$start$lambda$lambda(this$ConfigurePartnerView) {
    return function (data, b, c) {
      var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5, tmp$_6, tmp$_7;
      LoriDashboard_getInstance().hideLoadingBar();
      println('Data: ' + toString(data));
      var serverConfig = JSON.parse(data);
      var serverListConfig = serverConfig.serverListConfig;
      this$ConfigurePartnerView.isPartner = serverListConfig.isPartner;
      println('Keywords: ' + joinToString(serverListConfig.keywords, ', '));
      tmp$ = LorittaPartner$Keyword$values();
      for (tmp$_0 = 0; tmp$_0 !== tmp$.length; ++tmp$_0) {
        var keyword = tmp$[tmp$_0];
        println('Adding keyword ' + keyword + '...');
        tmp$_5 = this$ConfigurePartnerView.keywords;
        tmp$_4 = jq('<div>').addClass('pure-u-1').addClass('pure-u-md-1-3');
        var tmp$_8 = jq('<label>');
        var tmp$_9 = jq('<input>').attr('type', 'checkbox').attr('name', keyword.toString()).attr('value', 'keywords').attr('data-keyword-checkbox', 'true');
        var $receiver = serverListConfig.keywords;
        var firstOrNull$result;
        firstOrNull$break: do {
          var tmp$_10;
          for (tmp$_10 = 0; tmp$_10 !== $receiver.length; ++tmp$_10) {
            var element = $receiver[tmp$_10];
            if (equals(element.toString(), keyword.toString())) {
              firstOrNull$result = element;
              break firstOrNull$break;
            }
          }
          firstOrNull$result = null;
        }
         while (false);
        tmp$_3 = tmp$_8.append(tmp$_9.prop('checked', firstOrNull$result != null));
        tmp$_2 = jq('<span>').text(' ' + this$ConfigurePartnerView.locale.get_25kzsl$('KEYWORD_' + keyword.toString(), [])).addClass('keyword');
        if (keyword === LorittaPartner$Keyword$NSFW_getInstance()) {
          tmp$_1 = 'background-color: rgb(163, 48, 48);';
        }
         else {
          tmp$_1 = '';
        }
        tmp$_5.append(tmp$_4.append(tmp$_3.append(tmp$_2.attr('style', 'margin-left: 6px;' + tmp$_1))));
      }
      this$ConfigurePartnerView.vanityUrlInput.on('input', ConfigurePartnerView$start$lambda$lambda$lambda(this$ConfigurePartnerView));
      this$ConfigurePartnerView.changeVanityUrlText();
      LoriDashboard_getInstance().applyBlur_puj7f4$('#hiddenIfDisabled', '#cmn-toggle-1');
      LoriDashboard_getInstance().applyBlur_puj7f4$('#hiddenIfDisabled3', '#cmn-toggle-2');
      tmp$_6 = serverConfig.textChannels;
      for (tmp$_7 = 0; tmp$_7 !== tmp$_6.length; ++tmp$_7) {
        var textChannel = tmp$_6[tmp$_7];
        var option = jq('<option>').attr('value', textChannel.id).text('#' + textChannel.name);
        if (!textChannel.canTalk) {
          option.attr('disabled', 'disabled');
        }
        if (equals(serverConfig.serverListConfig.voteBroadcastChannelId, textChannel.id)) {
          option.attr('selected', 'selected');
        }
        jq('#chooseChannel').append(option);
      }
      if (!serverListConfig.isPartner && !serverListConfig.isSponsored) {
        jq('#hiddenIfDisabled2').addClass('blurSection');
        jq('#hiddenInfo2').text('Fun\xE7\xF5es exclusivas para partners e patrocinadores');
      }
      return Unit;
    };
  }
  function ConfigurePartnerView$start$lambda(this$ConfigurePartnerView) {
    return function (data, b, c) {
      println('Received locale: ' + stringify(data));
      this$ConfigurePartnerView.locale = BaseLocale.Companion.create_qk3xy8$(toJson(data));
      return jQuery.post('https://loritta.website/api/v1/config/get-server-config?guildId=' + guildId, ConfigurePartnerView$start$lambda$lambda(this$ConfigurePartnerView));
    };
  }
  ConfigurePartnerView.prototype.start = function () {
    LoriDashboard_getInstance().showLoadingBar_pdl1vj$('Carregando...');
    jQuery.post('https://loritta.website/api/v1/misc/get-locale', ConfigurePartnerView$start$lambda(this));
  };
  ConfigurePartnerView.prototype.changeVanityUrlText = function () {
    var vanityUrl = this.vanityUrlInput.val();
    this.vanityUrlExample.text('https://loritta.website/s/' + vanityUrl);
    this.vanityUrlExample.attr('src', 'https://loritta.website/s/' + vanityUrl);
  };
  function ConfigurePartnerView$prepareSave$lambda(closure$reader, this$ConfigurePartnerView) {
    return function (it) {
      var imageAsBase64 = closure$reader.result;
      this$ConfigurePartnerView.save_pdl1vj$(imageAsBase64);
      return Unit;
    };
  }
  ConfigurePartnerView.prototype.prepareSave = function () {
    println('Preparing save... wow!');
    var file = this.uploadBackground.get()[0].files[0];
    if (file != null) {
      var reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = ConfigurePartnerView$prepareSave$lambda(reader, this);
    }
     else {
      this.save_pdl1vj$(null);
    }
  };
  var collectionSizeOrDefault = Kotlin.kotlin.collections.collectionSizeOrDefault_ba2ldo$;
  function ConfigurePartnerView$save$lambda(this$ConfigurePartnerView, closure$imageAsBase64) {
    return function (payload) {
      var $receiver = this$ConfigurePartnerView.keywords.find('[data-keyword-checkbox]').toArray();
      var destination = ArrayList_init();
      var tmp$;
      for (tmp$ = 0; tmp$ !== $receiver.length; ++tmp$) {
        var element = $receiver[tmp$];
        if (element.checked)
          destination.add_11rb$(element);
      }
      var destination_0 = ArrayList_init(collectionSizeOrDefault(destination, 10));
      var tmp$_0;
      tmp$_0 = destination.iterator();
      while (tmp$_0.hasNext()) {
        var item = tmp$_0.next();
        destination_0.add_11rb$(item.getAttribute('name'));
      }
      var addedKeywords = destination_0;
      payload['keywords'] = addedKeywords;
      if (closure$imageAsBase64 != null) {
        payload['backgroundImage'] = closure$imageAsBase64;
      }
      payload['isPartner'] = this$ConfigurePartnerView.isPartner;
      return Unit;
    };
  }
  ConfigurePartnerView.prototype.save_pdl1vj$ = function (imageAsBase64) {
    SaveStuff_getInstance().prepareSave('server_list', ConfigurePartnerView$save$lambda(this, imageAsBase64));
  };
  function ConfigurePartnerView$vanityUrlInput$lambda() {
    return jq('#vanityUrl');
  }
  function ConfigurePartnerView$vanityUrlExample$lambda() {
    return jq('#vanityUrlExample');
  }
  function ConfigurePartnerView$addKeyword$lambda() {
    return jq('#addKeyword');
  }
  function ConfigurePartnerView$keywords$lambda() {
    return jq('#keywords');
  }
  function ConfigurePartnerView$keywordList$lambda() {
    return jq('#keywordList');
  }
  function ConfigurePartnerView$uploadBackground$lambda() {
    return jq('#uploadBackground');
  }
  ConfigurePartnerView.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'ConfigurePartnerView',
    interfaces: []
  };
  var ConfigurePartnerView_instance = null;
  function ConfigurePartnerView_getInstance() {
    if (ConfigurePartnerView_instance === null) {
      new ConfigurePartnerView();
    }
    return ConfigurePartnerView_instance;
  }
  function LoriDashboard() {
    LoriDashboard_instance = this;
    this.wrapper_e2dk2j$_0 = lazy(LoriDashboard$wrapper$lambda);
    this.leftSidebar_bu0mf$_0 = lazy(LoriDashboard$leftSidebar$lambda);
    this.rightSidebar_6drdtm$_0 = lazy(LoriDashboard$rightSidebar$lambda);
    this.loadingScreen_dfu46y$_0 = lazy(LoriDashboard$loadingScreen$lambda);
  }
  Object.defineProperty(LoriDashboard.prototype, 'wrapper', {
    get: function () {
      var $receiver = this.wrapper_e2dk2j$_0;
      new PropertyMetadata('wrapper');
      return $receiver.value;
    }
  });
  Object.defineProperty(LoriDashboard.prototype, 'leftSidebar', {
    get: function () {
      var $receiver = this.leftSidebar_bu0mf$_0;
      new PropertyMetadata('leftSidebar');
      return $receiver.value;
    }
  });
  Object.defineProperty(LoriDashboard.prototype, 'rightSidebar', {
    get: function () {
      var $receiver = this.rightSidebar_6drdtm$_0;
      new PropertyMetadata('rightSidebar');
      return $receiver.value;
    }
  });
  Object.defineProperty(LoriDashboard.prototype, 'loadingScreen', {
    get: function () {
      var $receiver = this.loadingScreen_dfu46y$_0;
      new PropertyMetadata('loadingScreen');
      return $receiver.value;
    }
  });
  LoriDashboard.prototype.showLoadingBar_pdl1vj$ = function (text) {
    if (text === void 0)
      text = 'Salvando...';
    this.leftSidebar.css('filter', 'blur(7px)');
    this.rightSidebar.css('filter', 'blur(7px)');
    if (text != null)
      this.loadingScreen.find('#loading-screen-text').text(text);
    this.loadingScreen.fadeIn(250);
  };
  LoriDashboard.prototype.hideLoadingBar = function () {
    this.leftSidebar.css('filter', '');
    this.rightSidebar.css('filter', '');
    this.loadingScreen.fadeOut(250);
  };
  function LoriDashboard$applyBlur$lambda(closure$toBeHidden, closure$toggle, this$LoriDashboard) {
    return function (it) {
      this$LoriDashboard.toggleBlur_puj7f4$(closure$toBeHidden, closure$toggle);
      return Unit;
    };
  }
  LoriDashboard.prototype.applyBlur_puj7f4$ = function (toBeHidden, toggle) {
    jq(toggle).click(LoriDashboard$applyBlur$lambda(toBeHidden, toggle, this));
    this.toggleBlur_puj7f4$(toBeHidden, toggle);
  };
  LoriDashboard.prototype.toggleBlur_puj7f4$ = function (toBeHidden, toggle) {
    var hide = jq(toBeHidden);
    if (jq(toggle).is(':checked')) {
      hide.removeClass('blurSection');
      hide.addClass('noBlur');
    }
     else {
      hide.removeClass('noBlur');
      hide.addClass('blurSection');
    }
  };
  function LoriDashboard$wrapper$lambda() {
    return jq('#server-configuration');
  }
  function LoriDashboard$leftSidebar$lambda() {
    return jq('#left-sidebar');
  }
  function LoriDashboard$rightSidebar$lambda() {
    return jq('#right-sidebar');
  }
  function LoriDashboard$loadingScreen$lambda() {
    return jq('#loading-screen');
  }
  LoriDashboard.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'LoriDashboard',
    interfaces: []
  };
  var LoriDashboard_instance = null;
  function LoriDashboard_getInstance() {
    if (LoriDashboard_instance === null) {
      new LoriDashboard();
    }
    return LoriDashboard_instance;
  }
  function SaveStuff() {
    SaveStuff_instance = this;
  }
  function SaveStuff$prepareSave$lambda(closure$config) {
    return function (index, _elem) {
      var elem = jQuery(_elem);
      println(elem.attr('type') + ' - ' + elem.attr('id') + ' - ' + toString(elem.val()));
      if (equals(elem.attr('type'), 'checkbox')) {
        println('Handling as checkbox...');
        closure$config[elem.attr('data-internal-name')] = elem.is(':checked');
      }
       else {
        closure$config[elem.attr('data-internal-name')] = elem.val();
      }
      return Unit;
    };
  }
  function SaveStuff$prepareSave$lambda_0(a, b, c) {
    println('Received from server: ' + toString(a));
    LoriDashboard_getInstance().hideLoadingBar();
    return Unit;
  }
  SaveStuff.prototype.prepareSave = function (type, extras, showSaveScreen) {
    if (extras === void 0)
      extras = null;
    if (showSaveScreen === void 0)
      showSaveScreen = true;
    println('Preparing saving stuff...');
    var json_0 = json([]);
    var config = json([]);
    var toBeSaved = jq('[data-internal-name]');
    json_0['type'] = type;
    toBeSaved.each(SaveStuff$prepareSave$lambda(config));
    if (extras != null)
      extras(config);
    json_0['config'] = config;
    if (showSaveScreen)
      LoriDashboard_getInstance().showLoadingBar_pdl1vj$('Salvando...');
    println('Sending save stuff... kthxbye!');
    println('Sending: ' + JSON.stringify(json_0));
    jQuery.post('https://loritta.website/api/v1/config/update-server-config/?guildId=' + guildId, JSON.stringify(json_0), SaveStuff$prepareSave$lambda_0);
  };
  SaveStuff.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'SaveStuff',
    interfaces: []
  };
  var SaveStuff_instance = null;
  function SaveStuff_getInstance() {
    if (SaveStuff_instance === null) {
      new SaveStuff();
    }
    return SaveStuff_instance;
  }
  function ModerationConfig() {
    this.sendPunishmentViaDm = false;
    this.sendToPunishLog = false;
    this.punishmentLogChannelId = null;
    this.punishmentLogMessage = '**Usu\xE1rio punido:** {user}#{#user}**Punido por** {@staff}\n**Motivo:** {reason}';
    this.punishmentActions = [];
    this.warnExpiresIn = null;
  }
  function ModerationConfig$WarnAction(warnCount, punishmentAction) {
    this.warnCount = warnCount;
    this.punishmentAction = punishmentAction;
  }
  ModerationConfig$WarnAction.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'WarnAction',
    interfaces: []
  };
  function ModerationConfig$Warn(reason, time, punishedBy) {
    this.reason = reason;
    this.time = time;
    this.punishedBy = punishedBy;
  }
  ModerationConfig$Warn.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Warn',
    interfaces: []
  };
  function ModerationConfig$PunishmentAction(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function ModerationConfig$PunishmentAction_initFields() {
    ModerationConfig$PunishmentAction_initFields = function () {
    };
    ModerationConfig$PunishmentAction$BAN_instance = new ModerationConfig$PunishmentAction('BAN', 0);
    ModerationConfig$PunishmentAction$SOFT_BAN_instance = new ModerationConfig$PunishmentAction('SOFT_BAN', 1);
    ModerationConfig$PunishmentAction$KICK_instance = new ModerationConfig$PunishmentAction('KICK', 2);
  }
  var ModerationConfig$PunishmentAction$BAN_instance;
  function ModerationConfig$PunishmentAction$BAN_getInstance() {
    ModerationConfig$PunishmentAction_initFields();
    return ModerationConfig$PunishmentAction$BAN_instance;
  }
  var ModerationConfig$PunishmentAction$SOFT_BAN_instance;
  function ModerationConfig$PunishmentAction$SOFT_BAN_getInstance() {
    ModerationConfig$PunishmentAction_initFields();
    return ModerationConfig$PunishmentAction$SOFT_BAN_instance;
  }
  var ModerationConfig$PunishmentAction$KICK_instance;
  function ModerationConfig$PunishmentAction$KICK_getInstance() {
    ModerationConfig$PunishmentAction_initFields();
    return ModerationConfig$PunishmentAction$KICK_instance;
  }
  ModerationConfig$PunishmentAction.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'PunishmentAction',
    interfaces: [Enum]
  };
  function ModerationConfig$PunishmentAction$values() {
    return [ModerationConfig$PunishmentAction$BAN_getInstance(), ModerationConfig$PunishmentAction$SOFT_BAN_getInstance(), ModerationConfig$PunishmentAction$KICK_getInstance()];
  }
  ModerationConfig$PunishmentAction.values = ModerationConfig$PunishmentAction$values;
  function ModerationConfig$PunishmentAction$valueOf(name) {
    switch (name) {
      case 'BAN':
        return ModerationConfig$PunishmentAction$BAN_getInstance();
      case 'SOFT_BAN':
        return ModerationConfig$PunishmentAction$SOFT_BAN_getInstance();
      case 'KICK':
        return ModerationConfig$PunishmentAction$KICK_getInstance();
      default:throwISE('No enum constant userdata.ModerationConfig.PunishmentAction.' + name);
    }
  }
  ModerationConfig$PunishmentAction.valueOf_61zpoe$ = ModerationConfig$PunishmentAction$valueOf;
  ModerationConfig.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ModerationConfig',
    interfaces: []
  };
  function PartnerConfig(keywords, languages) {
    this.keywords = keywords;
    this.languages = languages;
    this.isPartner = false;
    this.isSponsored = false;
    this.vanityUrl = null;
    this.tagline = null;
    this.description = null;
    this.sendOnVote = false;
    this.voteBroadcastChannelId = null;
    this.voteBroadcastMessage = null;
  }
  PartnerConfig.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'PartnerConfig',
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
  function ServerConfig(serverListConfig, moderationConfig, textChannels) {
    this.serverListConfig = serverListConfig;
    this.moderationConfig = moderationConfig;
    this.textChannels = textChannels;
  }
  ServerConfig.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ServerConfig',
    interfaces: []
  };
  function TextChannel(id, name, canTalk) {
    this.id = id;
    this.name = name;
    this.canTalk = canTalk;
  }
  TextChannel.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TextChannel',
    interfaces: []
  };
  Object.defineProperty(_, 'ConfigureModerationView', {
    get: ConfigureModerationView_getInstance
  });
  Object.defineProperty(_, 'ConfigurePartnerView', {
    get: ConfigurePartnerView_getInstance
  });
  Object.defineProperty(_, 'LoriDashboard', {
    get: LoriDashboard_getInstance
  });
  Object.defineProperty(_, 'SaveStuff', {
    get: SaveStuff_getInstance
  });
  ModerationConfig.WarnAction = ModerationConfig$WarnAction;
  ModerationConfig.Warn = ModerationConfig$Warn;
  Object.defineProperty(ModerationConfig$PunishmentAction, 'BAN', {
    get: ModerationConfig$PunishmentAction$BAN_getInstance
  });
  Object.defineProperty(ModerationConfig$PunishmentAction, 'SOFT_BAN', {
    get: ModerationConfig$PunishmentAction$SOFT_BAN_getInstance
  });
  Object.defineProperty(ModerationConfig$PunishmentAction, 'KICK', {
    get: ModerationConfig$PunishmentAction$KICK_getInstance
  });
  ModerationConfig.PunishmentAction = ModerationConfig$PunishmentAction;
  var package$userdata = _.userdata || (_.userdata = {});
  package$userdata.ModerationConfig = ModerationConfig;
  package$userdata.PartnerConfig = PartnerConfig;
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
  var package$utils = _.utils || (_.utils = {});
  Object.defineProperty(package$utils, 'LorittaPartner', {
    get: LorittaPartner_getInstance
  });
  package$utils.ServerConfig = ServerConfig;
  package$utils.TextChannel = TextChannel;
  Kotlin.defineModule('LoriDashboard', _);
  return _;
}(typeof LoriDashboard === 'undefined' ? {} : LoriDashboard, kotlin, LoriUtils);
