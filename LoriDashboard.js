if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'LoriDashboard'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'LoriDashboard'.");
}
if (typeof this['kotlinx-html-js'] === 'undefined') {
  throw new Error("Error loading module 'LoriDashboard'. Its dependency 'kotlinx-html-js' was not found. Please, check whether 'kotlinx-html-js' is loaded prior to 'LoriDashboard'.");
}
if (typeof LoriUtils === 'undefined') {
  throw new Error("Error loading module 'LoriDashboard'. Its dependency 'LoriUtils' was not found. Please, check whether 'LoriUtils' is loaded prior to 'LoriDashboard'.");
}
var LoriDashboard = function (_, Kotlin, $module$kotlinx_html_js, $module$LoriUtils) {
  'use strict';
  var equals = Kotlin.equals;
  var StringBuilder = Kotlin.kotlin.text.StringBuilder;
  var appendHTML = $module$kotlinx_html_js.kotlinx.html.stream.appendHTML_9kwp7w$;
  var anonymous = $module$LoriUtils;
  var Unit = Kotlin.kotlin.Unit;
  var h2 = $module$kotlinx_html_js.kotlinx.html.h2_eh5gi3$;
  var p = $module$kotlinx_html_js.kotlinx.html.p_8pggrc$;
  var div = $module$kotlinx_html_js.kotlinx.html.div_ri36nr$;
  var set_style = $module$kotlinx_html_js.kotlinx.html.set_style_ueiko3$;
  var ins = $module$kotlinx_html_js.kotlinx.html.ins_g1dqgd$;
  var script = $module$kotlinx_html_js.kotlinx.html.script_fglb7v$;
  var img = $module$kotlinx_html_js.kotlinx.html.img_evw26v$;
  var hr = $module$kotlinx_html_js.kotlinx.html.hr_17yvwq$;
  var joinToString = Kotlin.kotlin.collections.joinToString_cgipc5$;
  var div_0 = $module$kotlinx_html_js.kotlinx.html.div_59el9d$;
  var println = Kotlin.kotlin.io.println_s8jyv4$;
  var jq = $module$LoriUtils.jq_61zpoe$;
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  var throwUPAE = Kotlin.throwUPAE;
  var toString = Kotlin.toString;
  var contains = Kotlin.kotlin.collections.contains_mjy6jw$;
  var replace = Kotlin.kotlin.text.replace_680rmw$;
  var json = Kotlin.kotlin.js.json_pyyo18$;
  var lazy = Kotlin.kotlin.lazy_klfg04$;
  var listOf = Kotlin.kotlin.collections.listOf_mh5how$;
  var listOf_0 = Kotlin.kotlin.collections.listOf_i5x0yv$;
  var hashCode = Kotlin.hashCode;
  var throwCCE = Kotlin.throwCCE;
  var toInt = Kotlin.kotlin.text.toInt_pdl1vz$;
  var roundToInt = Kotlin.kotlin.math.roundToInt_yrwdxr$;
  var last = Kotlin.kotlin.collections.last_2p1efm$;
  var numberToInt = Kotlin.numberToInt;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var to = Kotlin.kotlin.to_ujzrz7$;
  var mapOf = Kotlin.kotlin.collections.mapOf_qfcya0$;
  var Enum = Kotlin.kotlin.Enum;
  var throwISE = Kotlin.throwISE;
  ModerationConfig$PunishmentAction.prototype = Object.create(Enum.prototype);
  ModerationConfig$PunishmentAction.prototype.constructor = ModerationConfig$PunishmentAction;
  CommandCategory.prototype = Object.create(Enum.prototype);
  CommandCategory.prototype.constructor = CommandCategory;
  LorittaPartner$Keyword.prototype = Object.create(Enum.prototype);
  LorittaPartner$Keyword.prototype.constructor = LorittaPartner$Keyword;
  LorittaPartner$Language.prototype = Object.create(Enum.prototype);
  LorittaPartner$Language.prototype.constructor = LorittaPartner$Language;
  LorittaPartner$Type.prototype = Object.create(Enum.prototype);
  LorittaPartner$Type.prototype.constructor = LorittaPartner$Type;
  function CommandsView() {
    CommandsView_instance = this;
  }
  function CommandsView$start$lambda$lambda$addCommandInformation$lambda$lambda(closure$category) {
    return function ($receiver) {
      $receiver.unaryPlus_pdl1vz$(anonymous.locale.get_25kzsl$(closure$category.fancyTitle, []));
      return Unit;
    };
  }
  function CommandsView$start$lambda$lambda$addCommandInformation$lambda$lambda_0(closure$category) {
    return function ($receiver) {
      $receiver.unaryPlus_pdl1vz$(anonymous.locale.get_25kzsl$(closure$category.description, []));
      return Unit;
    };
  }
  function CommandsView$start$lambda$lambda$addCommandInformation$lambda(closure$category) {
    return function ($receiver) {
      h2($receiver, 'sectionHeader', CommandsView$start$lambda$lambda$addCommandInformation$lambda$lambda(closure$category));
      p($receiver, void 0, CommandsView$start$lambda$lambda$addCommandInformation$lambda$lambda_0(closure$category));
      return Unit;
    };
  }
  function CommandsView$start$lambda$lambda$addCommandInformation(closure$category, this$) {
    return function () {
      div(this$, 'sectionText', CommandsView$start$lambda$lambda$addCommandInformation$lambda(closure$category));
    };
  }
  function CommandsView$start$lambda$lambda$lambda$lambda($receiver) {
    set_style($receiver, 'display:block');
    $receiver.attributes.put_xwzc9p$('data-ad-client', 'ca-pub-9989170954243288');
    $receiver.attributes.put_xwzc9p$('data-ad-slot', '4611100335');
    $receiver.attributes.put_xwzc9p$('data-ad-format', 'auto');
    return Unit;
  }
  function CommandsView$start$lambda$lambda$lambda$lambda_0($receiver) {
    $receiver.unaryPlus_pdl1vz$('(adsbygoogle = window.adsbygoogle || []).push({});');
    return Unit;
  }
  function CommandsView$start$lambda$lambda$lambda$lambda$lambda$lambda$lambda($receiver) {
    set_style($receiver, 'width: 100%;');
    return Unit;
  }
  function CommandsView$start$lambda$lambda$lambda$lambda$lambda$lambda(closure$image) {
    return function ($receiver) {
      img($receiver, null, closure$image.v, 'animate-on-scroll-left is-invisible', CommandsView$start$lambda$lambda$lambda$lambda$lambda$lambda$lambda);
      return Unit;
    };
  }
  function CommandsView$start$lambda$lambda$lambda$lambda$lambda$lambda_0(closure$addCommandInformation) {
    return function ($receiver) {
      closure$addCommandInformation();
      return Unit;
    };
  }
  function CommandsView$start$lambda$lambda$lambda$lambda$lambda$lambda_1(closure$addCommandInformation) {
    return function ($receiver) {
      closure$addCommandInformation();
      return Unit;
    };
  }
  function CommandsView$start$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0($receiver) {
    set_style($receiver, 'width: 100%;');
    return Unit;
  }
  function CommandsView$start$lambda$lambda$lambda$lambda$lambda$lambda_2(closure$image) {
    return function ($receiver) {
      img($receiver, null, closure$image.v, 'animate-on-scroll-right is-invisible', CommandsView$start$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0);
      return Unit;
    };
  }
  function CommandsView$start$lambda$lambda$lambda$lambda$lambda(closure$index, closure$image, closure$addCommandInformation) {
    return function ($receiver) {
      if (closure$index % 2 === 0) {
        div($receiver, 'pure-u-1 pure-u-md-1-4', CommandsView$start$lambda$lambda$lambda$lambda$lambda$lambda(closure$image));
        div($receiver, 'pure-u-1 pure-u-md-3-4', CommandsView$start$lambda$lambda$lambda$lambda$lambda$lambda_0(closure$addCommandInformation));
      }
       else {
        div($receiver, 'pure-u-1 pure-u-md-3-4', CommandsView$start$lambda$lambda$lambda$lambda$lambda$lambda_1(closure$addCommandInformation));
        div($receiver, 'pure-u-1 pure-u-md-1-4', CommandsView$start$lambda$lambda$lambda$lambda$lambda$lambda_2(closure$image));
      }
      return Unit;
    };
  }
  function CommandsView$start$lambda$lambda$lambda$lambda_1(closure$index, closure$image, closure$addCommandInformation) {
    return function ($receiver) {
      div($receiver, 'pure-g vertically-centered-content', CommandsView$start$lambda$lambda$lambda$lambda$lambda(closure$index, closure$image, closure$addCommandInformation));
      return Unit;
    };
  }
  function CommandsView$start$lambda$lambda$lambda$lambda_2($receiver) {
    set_style($receiver, 'display:block');
    $receiver.attributes.put_xwzc9p$('data-ad-client', 'ca-pub-9989170954243288');
    $receiver.attributes.put_xwzc9p$('data-ad-slot', '4611100335');
    $receiver.attributes.put_xwzc9p$('data-ad-format', 'auto');
    return Unit;
  }
  function CommandsView$start$lambda$lambda$lambda$lambda_3($receiver) {
    $receiver.unaryPlus_pdl1vz$('(adsbygoogle = window.adsbygoogle || []).push({});');
    return Unit;
  }
  function CommandsView$start$lambda$lambda$lambda$lambda_4($receiver) {
    return Unit;
  }
  function CommandsView$start$lambda$lambda$lambda$lambda$lambda$lambda_3(closure$command, closure$usage) {
    return function ($receiver) {
      set_style($receiver, 'font-weight: bold; font-size: 1.1em;');
      $receiver.unaryPlus_pdl1vz$('+' + closure$command.label + ' ' + closure$usage.v);
      return Unit;
    };
  }
  function CommandsView$start$lambda$lambda$lambda$lambda$lambda$lambda$lambda_1(it) {
    return '+' + it;
  }
  function CommandsView$start$lambda$lambda$lambda$lambda$lambda$lambda_4(closure$command) {
    return function ($receiver) {
      set_style($receiver, 'opacity: 0.6;');
      $receiver.unaryPlus_pdl1vz$(joinToString(closure$command.aliases, ', ', void 0, void 0, void 0, void 0, CommandsView$start$lambda$lambda$lambda$lambda$lambda$lambda$lambda_1));
      return Unit;
    };
  }
  function CommandsView$start$lambda$lambda$lambda$lambda$lambda$lambda_5(closure$command) {
    return function ($receiver) {
      $receiver.unaryPlus_pdl1vz$(closure$command.description);
      return Unit;
    };
  }
  function CommandsView$start$lambda$lambda$lambda$lambda$lambda_0(closure$command) {
    return function ($receiver) {
      var tmp$;
      var usage = {v: (tmp$ = closure$command.usage) != null ? tmp$ : ''};
      p($receiver, void 0, CommandsView$start$lambda$lambda$lambda$lambda$lambda$lambda_3(closure$command, usage));
      p($receiver, void 0, CommandsView$start$lambda$lambda$lambda$lambda$lambda$lambda_4(closure$command));
      p($receiver, void 0, CommandsView$start$lambda$lambda$lambda$lambda$lambda$lambda_5(closure$command));
      return Unit;
    };
  }
  function CommandsView$start$lambda$lambda$lambda$lambda_5(closure$filteredCommands) {
    return function ($receiver) {
      var tmp$;
      tmp$ = closure$filteredCommands.iterator();
      while (tmp$.hasNext()) {
        var command = tmp$.next();
        div($receiver, 'pure-u-1 pure-u-md-1-2', CommandsView$start$lambda$lambda$lambda$lambda$lambda_0(command));
      }
      return Unit;
    };
  }
  function CommandsView$start$lambda$lambda$lambda(closure$index, closure$image, closure$addCommandInformation, closure$filteredCommands) {
    return function ($receiver) {
      ins($receiver, 'adsbygoogle', CommandsView$start$lambda$lambda$lambda$lambda);
      script($receiver, void 0, void 0, CommandsView$start$lambda$lambda$lambda$lambda_0);
      div($receiver, 'vertically-centered-content', CommandsView$start$lambda$lambda$lambda$lambda_1(closure$index, closure$image, closure$addCommandInformation));
      ins($receiver, 'adsbygoogle', CommandsView$start$lambda$lambda$lambda$lambda_2);
      script($receiver, void 0, void 0, CommandsView$start$lambda$lambda$lambda$lambda_3);
      hr($receiver, void 0, CommandsView$start$lambda$lambda$lambda$lambda_4);
      div($receiver, 'pure-g', CommandsView$start$lambda$lambda$lambda$lambda_5(closure$filteredCommands));
      return Unit;
    };
  }
  function CommandsView$start$lambda$lambda(closure$category, closure$index, closure$image, closure$filteredCommands) {
    return function ($receiver) {
      var addCommandInformation = CommandsView$start$lambda$lambda$addCommandInformation(closure$category, $receiver);
      div($receiver, 'contentWrapper', CommandsView$start$lambda$lambda$lambda(closure$index, closure$image, addCommandInformation, closure$filteredCommands));
      return Unit;
    };
  }
  var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_ww73n8$;
  function CommandsView$start$lambda(data, b, c) {
    var tmp$;
    LoriDashboard_getInstance().hideLoadingBar();
    var commands = toJson(data);
    tmp$ = CommandCategory$values();
    for (var index = 0; index !== tmp$.length; ++index) {
      var category = tmp$[index];
      var tmp$_0, tmp$_1;
      var destination = ArrayList_init();
      var tmp$_2;
      for (tmp$_2 = 0; tmp$_2 !== commands.length; ++tmp$_2) {
        var element = commands[tmp$_2];
        if (equals(element.category.toString(), category.toString()))
          destination.add_11rb$(element);
      }
      var filteredCommands = destination;
      var stringBuilder = new StringBuilder();
      switch (category.name) {
        case 'SOCIAL':
          tmp$_0 = 'https://loritta.website/assets/img/social.png';
          break;
        case 'POKEMON':
          tmp$_0 = 'https://loritta.website/assets/img/pokemon.png';
          break;
        case 'MINECRAFT':
          tmp$_0 = 'https://loritta.website/assets/img/loritta_pudim.png';
          break;
        case 'FUN':
          tmp$_0 = 'https://loritta.website/assets/img/vieirinha.png';
          break;
        case 'UTILS':
          tmp$_0 = 'https://loritta.website/assets/img/utils.png';
          break;
        case 'MUSIC':
          tmp$_0 = 'https://loritta.website/assets/img/loritta_headset.png';
          break;
        case 'ANIME':
          tmp$_0 = 'https://loritta.website/assets/img/loritta_anime.png';
          break;
        default:tmp$_0 = 'https://loritta.website/assets/img/loritta_gabizinha_v1.png';
          break;
      }
      var image = {v: tmp$_0};
      div_0(appendHTML(stringBuilder), index % 2 === 0 ? 'evenWrapper' : 'oddWrapper', CommandsView$start$lambda$lambda(category, index, image, filteredCommands));
      tmp$_1 = filteredCommands.iterator();
      while (tmp$_1.hasNext()) {
        var cmd = tmp$_1.next();
      }
      println(category);
      jq('#wrapper').append(stringBuilder.toString());
    }
    return Unit;
  }
  CommandsView.prototype.start = function () {
    LoriDashboard_getInstance().showLoadingBar_pdl1vj$('Carregando...');
    jQuery.post('https://loritta.website/api/v1/misc/get-commands', CommandsView$start$lambda);
  };
  CommandsView.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'CommandsView',
    interfaces: []
  };
  var CommandsView_instance = null;
  function CommandsView_getInstance() {
    if (CommandsView_instance === null) {
      new CommandsView();
    }
    return CommandsView_instance;
  }
  function ConfigureAutoroleView() {
    ConfigureAutoroleView_instance = this;
    this.serverConfig_jibg2x$_0 = this.serverConfig_jibg2x$_0;
  }
  Object.defineProperty(ConfigureAutoroleView.prototype, 'serverConfig', {
    get: function () {
      if (this.serverConfig_jibg2x$_0 == null)
        return throwUPAE('serverConfig');
      return this.serverConfig_jibg2x$_0;
    },
    set: function (serverConfig) {
      this.serverConfig_jibg2x$_0 = serverConfig;
    }
  });
  var wrapFunction = Kotlin.wrapFunction;
  var mapNotNullTo$lambda = wrapFunction(function () {
    return function (closure$transform, closure$destination) {
      return function (element) {
        var tmp$;
        if ((tmp$ = closure$transform(element)) != null) {
          closure$destination.add_11rb$(tmp$);
        }
        return Unit;
      };
    };
  });
  function ConfigureAutoroleView$start$lambda(this$ConfigureAutoroleView) {
    return function (data, b, c) {
      LoriDashboard_getInstance().hideLoadingBar();
      println('Data: ' + toString(data));
      this$ConfigureAutoroleView.serverConfig = JSON.parse(data);
      var $receiver = this$ConfigureAutoroleView.serverConfig.roles;
      var destination = ArrayList_init();
      var tmp$;
      for (tmp$ = 0; tmp$ !== $receiver.length; ++tmp$) {
        var element = $receiver[tmp$];
        if (!element.isPublicRole)
          destination.add_11rb$(element);
      }
      var tmp$_0;
      tmp$_0 = destination.iterator();
      while (tmp$_0.hasNext()) {
        var element_0 = tmp$_0.next();
        var this$ConfigureAutoroleView_0 = this$ConfigureAutoroleView;
        var option = jq('<option>').attr('value', element_0.id).text(element_0.name);
        if (!element_0.canInteract || element_0.isManaged || contains(this$ConfigureAutoroleView_0.serverConfig.autoroleConfig.roles, element_0.id)) {
          option.attr('disabled', 'disabled');
        }
        jq('#chooseRole').append(option);
      }
      var $receiver_0 = this$ConfigureAutoroleView.serverConfig.autoroleConfig.roles;
      var destination_0 = ArrayList_init();
      var tmp$_1;
      for (tmp$_1 = 0; tmp$_1 !== $receiver_0.length; ++tmp$_1) {
        var element_1 = $receiver_0[tmp$_1];
        var tmp$_0_0;
        var $receiver_1 = this$ConfigureAutoroleView.serverConfig.roles;
        var firstOrNull$result;
        firstOrNull$break: do {
          var tmp$_2;
          for (tmp$_2 = 0; tmp$_2 !== $receiver_1.length; ++tmp$_2) {
            var element_2 = $receiver_1[tmp$_2];
            if (equals(element_2.id, element_1)) {
              firstOrNull$result = element_2;
              break firstOrNull$break;
            }
          }
          firstOrNull$result = null;
        }
         while (false);
        if ((tmp$_0_0 = firstOrNull$result) != null) {
          destination_0.add_11rb$(tmp$_0_0);
        }
      }
      var roleList = destination_0;
      var tmp$_3;
      tmp$_3 = roleList.iterator();
      while (tmp$_3.hasNext()) {
        var element_3 = tmp$_3.next();
        this$ConfigureAutoroleView.addRoleToAutoroleList_xat1sd$(element_3);
      }
      LoriDashboard_getInstance().applyBlur_puj7f4$('#hiddenIfDisabled', '#cmn-toggle-1');
      return Unit;
    };
  }
  ConfigureAutoroleView.prototype.start = function () {
    LoriDashboard_getInstance().showLoadingBar_pdl1vj$('Carregando...');
    jQuery.post('https://loritta.website/api/v1/config/get-server-config?guildId=' + guildId, ConfigureAutoroleView$start$lambda(this));
  };
  function ConfigureAutoroleView$addRoleToAutoroleList$lambda(closure$tr) {
    return function (it) {
      closure$tr.remove();
      return Unit;
    };
  }
  ConfigureAutoroleView.prototype.addRoleToAutoroleList_xat1sd$ = function (role) {
    var tr = jq('<tr>').append(jq('<td>').text(role.name).attr('role-id', role.id).addClass('role-entry'));
    tr.click(ConfigureAutoroleView$addRoleToAutoroleList$lambda(tr));
    jq('#roleTable').append(tr);
  };
  ConfigureAutoroleView.prototype.addRoleFromSelection = function () {
    var roleId = jq('#chooseRole').val();
    var $receiver = this.serverConfig.roles;
    var firstOrNull$result;
    firstOrNull$break: do {
      var tmp$;
      for (tmp$ = 0; tmp$ !== $receiver.length; ++tmp$) {
        var element = $receiver[tmp$];
        if (equals(element.id, roleId)) {
          firstOrNull$result = element;
          break firstOrNull$break;
        }
      }
      firstOrNull$result = null;
    }
     while (false);
    var role = firstOrNull$result;
    if (role != null) {
      this.addRoleToAutoroleList_xat1sd$(role);
    }
  };
  function ConfigureAutoroleView$prepareSave$lambda$lambda(closure$roles) {
    return function (index, elem) {
      var el = jQuery(elem);
      var entry = el.find('.role-entry');
      return closure$roles.add_11rb$(entry.attr('role-id'));
    };
  }
  function ConfigureAutoroleView$prepareSave$lambda(payload) {
    var roles = ArrayList_init();
    var rolesVoteRewards = ArrayList_init();
    jq('#roleTable').children().each(ConfigureAutoroleView$prepareSave$lambda$lambda(roles));
    payload['roles'] = roles;
    payload['rolesVoteRewards'] = rolesVoteRewards;
    return Unit;
  }
  ConfigureAutoroleView.prototype.prepareSave = function () {
    SaveStuff_getInstance().prepareSave('autorole', ConfigureAutoroleView$prepareSave$lambda);
  };
  ConfigureAutoroleView.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'ConfigureAutoroleView',
    interfaces: []
  };
  var ConfigureAutoroleView_instance = null;
  function ConfigureAutoroleView_getInstance() {
    if (ConfigureAutoroleView_instance === null) {
      new ConfigureAutoroleView();
    }
    return ConfigureAutoroleView_instance;
  }
  function ConfigureModerationView() {
    ConfigureModerationView_instance = this;
  }
  function ConfigureModerationView$start$lambda$lambda(this$ConfigureModerationView) {
    return function (it) {
      this$ConfigureModerationView.addPunishment_a3smtl$(new ModerationConfig$WarnAction(1, ModerationConfig$PunishmentAction$BAN_getInstance(), null));
      return Unit;
    };
  }
  function ConfigureModerationView$start$lambda(this$ConfigureModerationView) {
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
      return jq('.add-new-action').click(ConfigureModerationView$start$lambda$lambda(this$ConfigureModerationView));
    };
  }
  ConfigureModerationView.prototype.start = function () {
    LoriDashboard_getInstance().showLoadingBar_pdl1vj$('Carregando...');
    jQuery.post('https://loritta.website/api/v1/config/get-server-config?guildId=' + guildId, ConfigureModerationView$start$lambda(this));
  };
  function ConfigureModerationView$addPunishment$lambda(closure$action) {
    return function (it) {
      closure$action.remove();
      return Unit;
    };
  }
  function ConfigureModerationView$addPunishment$lambda_0(closure$action) {
    return function (it) {
      var punishmentAction = ModerationConfig$PunishmentAction$valueOf(closure$action.find('.apply-punishment').val());
      if (equals(punishmentAction.toString(), ModerationConfig$PunishmentAction$MUTE_getInstance().toString())) {
        closure$action.find('.customMetadata').css('height', '48px');
      }
       else {
        closure$action.find('.customMetadata').css('height', '0px');
      }
      return Unit;
    };
  }
  ConfigureModerationView.prototype.addPunishment_a3smtl$ = function (warnAction) {
    var tmp$, tmp$_0;
    var action = jq('<div>').append(jq('<button>').attr('class', 'button-discord button-discord-info pure-button remove-action').html('<i class="fas fa-trash"><\/i>')).append(' Ao chegar em ').append(jq('<input>').attr('type', 'number').attr('min', 1).val(warnAction.warnCount).attr('class', 'warnCount')).append(' avisos, ').append("<select class='apply-punishment'>").append(' o usu\xE1rio').append(jq('<div>').css('height', '0px').css('overflow', 'hidden').css('transition', '2s').addClass('customMetadata').append('O usu\xE1rio dever\xE1 ser silenciado por ').append(jq('<input>').attr('type', 'text').attr('placeholder', '30 minutos').val(warnAction.customMetadata0).attr('class', 'customMetadata0')));
    if (equals(warnAction.punishmentAction.toString(), ModerationConfig$PunishmentAction$MUTE_getInstance().toString())) {
      action.find('.customMetadata').css('height', '48px');
    }
    jq('#warnActions').append(action);
    action.find('.remove-action').click(ConfigureModerationView$addPunishment$lambda(action));
    var applyPunishment = action.find('.apply-punishment');
    tmp$ = ModerationConfig$PunishmentAction$values();
    for (tmp$_0 = 0; tmp$_0 !== tmp$.length; ++tmp$_0) {
      var punishment = tmp$[tmp$_0];
      var option = jq('<option>').attr('name', anonymous.locale.get_25kzsl$(replace(punishment.toString(), '_', '') + '_PunishName', [])).attr('value', punishment.toString()).text(anonymous.locale.get_25kzsl$(replace(punishment.toString(), '_', '') + '_PunishName', []));
      if (equals(warnAction.punishmentAction.toString(), punishment.toString())) {
        option.attr('selected', 'selected');
      }
      applyPunishment.append(option);
    }
    jq('.apply-punishment').click(ConfigureModerationView$addPunishment$lambda_0(action));
  };
  function ConfigureModerationView$prepareSave$lambda$lambda(closure$actions) {
    return function (index, elem) {
      var el = jQuery(elem);
      var json_0 = json([]);
      var punishmentAction = ModerationConfig$PunishmentAction$valueOf(el.find('.apply-punishment').val());
      json_0['punishmentAction'] = punishmentAction.toString();
      json_0['warnCount'] = el.find('.warnCount').val();
      if (equals(punishmentAction.toString(), ModerationConfig$PunishmentAction$MUTE_getInstance().toString())) {
        json_0['customMetadata0'] = el.find('.customMetadata0').val();
      }
      return closure$actions.add_11rb$(json_0);
    };
  }
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
  }
  Object.defineProperty(ConfigurePartnerView.prototype, 'vanityUrlInput', {
    get: function () {
      return this.vanityUrlInput_jrj3bh$_0.value;
    }
  });
  Object.defineProperty(ConfigurePartnerView.prototype, 'vanityUrlExample', {
    get: function () {
      return this.vanityUrlExample_i46b83$_0.value;
    }
  });
  Object.defineProperty(ConfigurePartnerView.prototype, 'addKeyword', {
    get: function () {
      return this.addKeyword_7t6lhx$_0.value;
    }
  });
  Object.defineProperty(ConfigurePartnerView.prototype, 'keywords', {
    get: function () {
      return this.keywords_k89ksp$_0.value;
    }
  });
  Object.defineProperty(ConfigurePartnerView.prototype, 'keywordList', {
    get: function () {
      return this.keywordList_xlo49m$_0.value;
    }
  });
  Object.defineProperty(ConfigurePartnerView.prototype, 'uploadBackground', {
    get: function () {
      return this.uploadBackground_valcxw$_0.value;
    }
  });
  function ConfigurePartnerView$start$lambda$lambda(this$ConfigurePartnerView) {
    return function (f, f_0) {
      var vanityUrl = this$ConfigurePartnerView.vanityUrlInput.val();
      vanityUrl = replace(vanityUrl, ' ', '-');
      vanityUrl = vanityUrl.toLowerCase();
      this$ConfigurePartnerView.vanityUrlInput.val(vanityUrl);
      this$ConfigurePartnerView.changeVanityUrlText();
      return Unit;
    };
  }
  function ConfigurePartnerView$start$lambda(this$ConfigurePartnerView) {
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
        tmp$_2 = jq('<span>').text(' ' + anonymous.locale.get_25kzsl$('KEYWORD_' + keyword.toString(), [])).addClass('keyword');
        if (keyword === LorittaPartner$Keyword$NSFW_getInstance()) {
          tmp$_1 = 'background-color: rgb(163, 48, 48);';
        }
         else {
          tmp$_1 = '';
        }
        tmp$_5.append(tmp$_4.append(tmp$_3.append(tmp$_2.attr('style', 'margin-left: 6px;' + tmp$_1))));
      }
      this$ConfigurePartnerView.vanityUrlInput.on('input', ConfigurePartnerView$start$lambda$lambda(this$ConfigurePartnerView));
      this$ConfigurePartnerView.changeVanityUrlText();
      LoriDashboard_getInstance().applyBlur_puj7f4$('#hiddenIfDisabled', '#cmn-toggle-1');
      LoriDashboard_getInstance().applyBlur_puj7f4$('#hiddenIfDisabled3', '#cmn-toggle-2');
      LoriDashboard_getInstance().applyBlur_puj7f4$('#hiddenIfDisabled4', '#cmn-toggle-3');
      tmp$_6 = serverConfig.textChannels;
      for (tmp$_7 = 0; tmp$_7 !== tmp$_6.length; ++tmp$_7) {
        var textChannel = tmp$_6[tmp$_7];
        var option = jq('<option>').attr('value', textChannel.id).text('#' + textChannel.name);
        if (!textChannel.canTalk) {
          option.attr('disabled', 'disabled');
        }
        var voteSel = option.clone();
        var promoteSel = option.clone();
        if (equals(serverConfig.serverListConfig.voteBroadcastChannelId, textChannel.id)) {
          voteSel.attr('selected', 'selected');
        }
        if (serverConfig.serverListConfig.promoteBroadcastChannelId == textChannel.id) {
          promoteSel.attr('selected', 'selected');
        }
        jq('#chooseChannel').append(voteSel.clone());
        jq('#chooseChannel2').append(promoteSel.clone());
      }
      if (!serverListConfig.isPartner && !serverListConfig.isSponsored) {
        jq('#hiddenIfDisabled2').addClass('blurSection');
        jq('#hiddenInfo2').text('Fun\xE7\xF5es exclusivas para partners e patrocinadores');
      }
      return Unit;
    };
  }
  ConfigurePartnerView.prototype.start = function () {
    LoriDashboard_getInstance().showLoadingBar_pdl1vj$('Carregando...');
    jQuery.post('https://loritta.website/api/v1/config/get-server-config?guildId=' + guildId, ConfigurePartnerView$start$lambda(this));
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
  function ConfigureProfileView() {
    ConfigureProfileView_instance = this;
  }
  ConfigureProfileView.prototype.start = function () {
  };
  ConfigureProfileView.prototype.prepareSave = function () {
    println('Preparing save... wow!');
    SaveStuff_getInstance().prepareSave('profile', void 0, void 0, 'https://loritta.website/api/v1/lori/save-self-profile');
  };
  ConfigureProfileView.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'ConfigureProfileView',
    interfaces: []
  };
  var ConfigureProfileView_instance = null;
  function ConfigureProfileView_getInstance() {
    if (ConfigureProfileView_instance === null) {
      new ConfigureProfileView();
    }
    return ConfigureProfileView_instance;
  }
  function DonateView() {
    DonateView_instance = this;
  }
  function DonateView$start$handleRangeChange$lambda(it) {
    return it.minimum;
  }
  var sortedWith = Kotlin.kotlin.collections.sortedWith_eknfly$;
  var compareBy$lambda = wrapFunction(function () {
    var compareValues = Kotlin.kotlin.comparisons.compareValues_s00gnj$;
    return function (closure$selector) {
      return function (a, b) {
        var selector = closure$selector;
        return compareValues(selector(a), selector(b));
      };
    };
  });
  var Comparator = Kotlin.kotlin.Comparator;
  function Comparator$ObjectLiteral(closure$comparison) {
    this.closure$comparison = closure$comparison;
  }
  Comparator$ObjectLiteral.prototype.compare = function (a, b) {
    return this.closure$comparison(a, b);
  };
  Comparator$ObjectLiteral.$metadata$ = {kind: Kind_CLASS, interfaces: [Comparator]};
  function DonateView$start$handleRangeChange(closure$tiers, closure$tierName, closure$tierIcon, closure$donationRewardsWrapper) {
    return function () {
      var tmp$;
      var value = toInt(typeof (tmp$ = jq('#donation-range').val()) === 'string' ? tmp$ : throwCCE());
      var price = value.toString();
      price += '+';
      jq('#donation-value').text(price);
      var validTier = sortedWith(closure$tiers, new Comparator$ObjectLiteral(compareBy$lambda(DonateView$start$handleRangeChange$lambda))).get_za3lpa$(value);
      if (validTier != null) {
        closure$tierName.text(validTier.title);
        closure$tierIcon.attr('src', validTier.icon);
        jq('#donation-value').text(validTier.minimum.toString() + '+');
        jq('#donation-value-2').text(validTier.minimum.toString());
        jq('#donation-value-machine').text(validTier.minimum.toString());
        var daysInAMonth = 730;
        var percentage = validTier.minimum / 315;
        var daysPaid = daysInAMonth * percentage;
        jq('#donation-value-hours').text(roundToInt(daysPaid));
        var lastHashCode = hashCode(last(validTier.rewards));
        var lastReward = jq('#reward-' + hashCode(validTier) + '-' + lastHashCode);
        var rewardPosition = lastReward.position().top;
        var newHeight = rewardPosition;
        println('New height is ' + newHeight + 'px');
        closure$donationRewardsWrapper.css('height', (numberToInt(newHeight) + numberToInt(lastReward.height()) | 0).toString() + 'px');
      }
    };
  }
  function DonateView$start$lambda(closure$handleRangeChange) {
    return function (event, any) {
      closure$handleRangeChange();
      return Unit;
    };
  }
  DonateView.prototype.start = function () {
    var tmp$, tmp$_0;
    var tiers = ArrayList_init();
    var reward1 = listOf('Obrigado por ajudar a Loritta a ficar online!');
    var reward3 = listOf_0(['A sensa\xE7\xE3o de ser incr\xEDvel!', "Seu nome ser\xE1 adicionado ao comando de <code class='inline'>+contribuidores<\/code>!", "Voc\xEA ter\xE1 acesso a um canal de texto e voz exclusivo apenas para quem contribui para mim, com v\xE1rios assuntos exclusivos para contribuidores! <img src='https://cdn.discordapp.com/emojis/353898172923510784.png?v=1' class='inline-emoji'>", "Voc\xEA ir\xE1 ganhar um cargo exclusivo no <a href='https://loritta.website/support'>meu servidor<\/a>!", "Voc\xEA ir\xE1 receber uma badge exclusiva no <code class='inline'>+perfil<\/code>!", "Voc\xEA poder\xE1 deixar o seu servidor como patrocinado na <a href='https://loritta.website/servers'>Lori's Server List<\/a> por 30 dias! (Quanto mais voc\xEA doar, mais chance de voc\xEA aparecer no topo da lista de servidores patrocinados!)", "Voc\xEA poder\xE1 participar de sorteios que poder\xE3o acontecer no <a href='https://loritta.website/support'>meu servidor<\/a>!", 'Eu n\xE3o queria dizer nada, mas quem doa tem um b\xF4nus:<br><iframe width="280" height="157" src="https://www.youtube.com/embed/J8gWll4ItiU?start=334" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen><\/iframe>']);
    var reward10 = listOf_0(["Voc\xEA poder\xE1 usar o <code class='inline'>+volume<\/code>, para controlar o som do seu batid\xE3o! <img src='https://cdn.discordapp.com/emojis/422448021016543232.gif?v=1' class='inline-emoji'>", "Voc\xEA poder\xE1 alterar a cor do seu nome no <a href='https://loritta.website/support'>meu servidor<\/a>! <img src='https://cdn.discordapp.com/emojis/446735085161545728.gif?v=1' class='inline-emoji'>", "Voc\xEA ter\xE1 o seu nome nos finais dos v\xEDdeos do <a href='https://www.youtube.com/c/MrPowerGamerBR'>meu canal<\/a>! (As vezes... quando ele lembrar de colocar... j\xE1 que ele quase nem grava v\xEDdeos <img src='https://cdn.discordapp.com/emojis/396521773178552331.png?v=1' class='inline-emoji'>)", 'Voc\xEA ter\xE1 prioridade nas sugest\xF5es, precisa de uma fun\xE7\xE3o na Loritta? Ent\xE3o vou fazer ela! (Desde que seja poss\xEDvel fazer, que n\xE3o seja in\xE9tico, que n\xE3o fuja do prop\xF3sito da Loritta e, \xE9 claro, se eu tenho tempo para fazer ela!)']);
    tiers.add_11rb$(new DonateView$RewardTier('\xC9 pouco, mas espero que ajude!', 'https://cdn.discordapp.com/emojis/396521772691881987.png?v=1', 0.01, reward1));
    tiers.add_11rb$(new DonateView$RewardTier('Eu quero ajudar a Loritta!', 'https://cdn.discordapp.com/emojis/425371746930262018.png?v=1', 4.99, reward3));
    tiers.add_11rb$(new DonateView$RewardTier('Eu gosto da Loritta (Como amiga, \xE9 claro)', 'https://cdn.discordapp.com/emojis/414222275223617546.png?v=1', 9.99, reward10));
    tiers.add_11rb$(new DonateView$RewardTier('Eu amo a Loritta! (Como amiga, \xE9 claro)', 'https://cdn.discordapp.com/emojis/417813932380520448.png?v=1', 19.99, listOf_0(['O limite m\xE1ximo de sonhos que voc\xEA pode ganhar no sonhos di\xE1rio ser\xE1 aumentado de 3600 sonhos para 3900 sonhos!', "Tempo de espera entre comandos reduzido na maioria dos comandos! <img src='https://discordemoji.com/assets/emoji/SonicWaiting.gif' class='inline-emoji'>", "Ao receber uma reputa\xE7\xE3o, voc\xEA ter\xE1 5% de chance de eu te dar uma reputa\xE7\xE3o tamb\xE9m! <img src='https://cdn.discordapp.com/emojis/393755269890310164.gif?v=1' class='inline-emoji'>", "Seu nome ficar\xE1 em negrito no <code class='inline'>+contribuidores<\/code>!"])));
    tiers.add_11rb$(new DonateView$RewardTier('Eu adoro a Loritta! (Como amiga, \xE9 claro)', 'https://cdn.discordapp.com/emojis/331179879582269451.png?v=1', 29.99, listOf_0(["Voc\xEA ganhar\xE1 x1.25 XP global! <img src='https://cdn.discordapp.com/emojis/432531424671694849.png?v=1' class='inline-emoji'>", 'Voc\xEA ganhar\xE1 7500 sonhos!', "Caso voc\xEA queria virar um parceiro na Lori's Server List, o requisito de membros ser\xE1 abaixado de 850 membros para 500 membros! (Mas cuidado, voc\xEA ainda ter\xE1 que ter um servidor ativo!)", 'Voc\xEA poder\xE1 adicionar uma vers\xE3o premium minha no seu servidor! ...o que a vers\xE3o premium faz? Nada! Mas voc\xEA pode mostrar como voc\xEA \xE9 ostentador no seu servidor!'])));
    tiers.add_11rb$(new DonateView$RewardTier('Eu venero a Loritta!', 'https://cdn.discordapp.com/emojis/338679059188023296.png?v=1', 39.99, listOf_0(['O limite m\xE1ximo de sonhos que voc\xEA pode ganhar no sonhos di\xE1rio ser\xE1 aumentado de 3600 sonhos para 4200 sonhos!', 'Como b\xF4nus pela sua generosidade, voc\xEA ir\xE1 ganhar +1 key da Loritta para voc\xEA dar para os seus amigos!', "Ao receber uma reputa\xE7\xE3o, voc\xEA ter\xE1 25% de chance de eu te dar uma reputa\xE7\xE3o tamb\xE9m! <img src='https://cdn.discordapp.com/emojis/393755269890310164.gif?v=1' class='inline-emoji'>"])));
    tiers.add_11rb$(new DonateView$RewardTier('Eu cultuo a Loritta!', 'https://cdn.discordapp.com/emojis/357939361079230464.png?v=1', 49.99, listOf_0(["Voc\xEA ganhar\xE1 x1.5 XP global! <img src='https://cdn.discordapp.com/emojis/432531424671694849.png?v=1' class='inline-emoji'>", 'Voc\xEA ganhar\xE1 7500 sonhos!', "Voc\xEA poder\xE1 colocar uma resposta personalizada em todos os servidores ao falar \"@Loritta Morenitta \uD83D\uDE18 insira algo aqui\" e ela ir\xE1 responder algo que voc\xEA queria! (Desde que n\xE3o seja uma resposta inapropriada ou que seja divulga\xE7\xE3o) <a href='https://cdn.discordapp.com/emojis/396521401860751362.png?v=1' class='inline-emoji'>", "Voc\xEA poder\xE1 colocar um convite ao lado do seu nome no <code class='inline'>+contribuidores<\/code>!", "Voc\xEA ganhar\xE1 mais outro cargo exclusivo no <a href='https://loritta.website/support'>meu servidor<\/a>! A diferen\xE7a entre o antigo cargo e novo? O novo \xE9 <b>super<\/b>! <img src='https://cdn.discordapp.com/emojis/429715687317962772.png?v=1' class='inline-emoji'>"])));
    tiers.add_11rb$(new DonateView$RewardTier('Eu idolatro a Loritta!', 'https://cdn.discordapp.com/emojis/432530033186308106.png?v=1', 59.99, listOf_0(['O limite m\xE1ximo de sonhos que voc\xEA pode ganhar no sonhos di\xE1rio ser\xE1 aumentado de 3600 sonhos para 4500 sonhos!', "Voc\xEA poder\xE1 colocar uma rea\xE7\xE3o personalizada em todos os servidores ao falar algo que voc\xEA escolher e ela ir\xE1 reagir com um emoji que voc\xEA escolher! (Existem exce\xE7\xF5es para quando ela vai fazer isto, mas desde que seja uma frase n\xE3o t\xE3o pequena, pode colocar!) <a href='https://cdn.discordapp.com/emojis/396521401860751362.png?v=1' class='inline-emoji'>"])));
    tiers.add_11rb$(new DonateView$RewardTier('Jamais quero ver a Loritta offline!', 'https://cdn.discordapp.com/emojis/441355739307442186.png?v=1', 69.99, listOf_0(["Voc\xEA ganhar\xE1 x1.75 XP global! <img src='https://cdn.discordapp.com/emojis/432531424671694849.png?v=1' class='inline-emoji'>", 'Voc\xEA ganhar\xE1 7500 sonhos!', "Como b\xF4nus pela sua generosidade, voc\xEA ir\xE1 ganhar +1 key da Loritta para voc\xEA dar aos seus amigos! <img src='https://cdn.discordapp.com/emojis/330958171436744716.png?v=1' class='inline-emoji'>"])));
    tiers.add_11rb$(new DonateView$RewardTier('A Loritta ir\xE1 dominar o mundo!', 'https://cdn.discordapp.com/emojis/391738326312550401.png?v=1', 79.99, listOf_0(["Voc\xEA poder\xE1 criar uma badge exclusiva para voc\xEA e para os seus amigos! Quer criar uma badge exclusiva que apenas os membros do seu servidor tem? Voc\xEA poder\xE1 ter isto! <img src='https://cdn.discordapp.com/emojis/430179755304943649.png?v=1' class='inline-emoji'>", 'O limite m\xE1ximo de sonhos que voc\xEA pode ganhar no sonhos di\xE1rio ser\xE1 aumentado de 3600 sonhos para 4800 sonhos!'])));
    tiers.add_11rb$(new DonateView$RewardTier('A Loritta ir\xE1 dominar a gal\xE1xia!', 'https://cdn.discordapp.com/emojis/439868811190206495.png?v=1', 89.99, listOf_0(["Voc\xEA ganhar\xE1 x2.00 XP global! <img src='https://cdn.discordapp.com/emojis/432531424671694849.png?v=1' class='inline-emoji'>", 'Voc\xEA ganhar\xE1 7500 sonhos!', "Voc\xEA poder\xE1 fazer o seu pr\xF3prio design do jeito que voc\xEA quiser (desde que n\xE3o seja algo inapropriado) para o seu <code class='inline'>+perfil<\/code>!"])));
    tiers.add_11rb$(new DonateView$RewardTier('A Loritta \xE9 a minha Deusa!', 'https://cdn.discordapp.com/emojis/412577132007653383.gif?v=1', 99.99, listOf_0(['Eu irei divulgar o seu servidor (desde que n\xE3o seja sobre conte\xFAdo NSFW) em todas as mensagens que eu fizer de @everyone ou para Notificar Novidades que tiverem no meu servidor!', "Voc\xEA ganhar\xE1 mais outro cargo exclusivo no <a href='https://loritta.website/support'>meu servidor<\/a> mostrando o quanto voc\xEA adora a nossa Deusa Loritta! <img src='https://cdn.discordapp.com/emojis/441390573501546497.png?v=1' class='inline-emoji'>"])));
    tiers.add_11rb$(new DonateView$RewardTier('SimSimi > Gaybriela', 'https://cdn.discordapp.com/emojis/383742012559589387.png?v=1', 119.99, listOf_0(["Voc\xEA poder\xE1 usar o <code class='inline'>+simsimi<\/code> no seu servidor!", "Como b\xF4nus pela sua generosidade, voc\xEA ir\xE1 ganhar +1 key da Loritta para voc\xEA dar aos seus amigos e espalhar a maldade do SimSimi para outros servidores. <img src='https://cdn.discordapp.com/emojis/330958171436744716.png?v=1' class='inline-emoji'>", "O convite do seu servidor ser\xE1 mostrado para todos que utilizarem o comando <code class='inline'>+ajuda<\/code>!", 'Seu servidor ser\xE1 colocado em um de nossos banners de propaganda aqui no meu website!'])));
    var donationRewards = jq('#donation-rewards');
    var donationRewardsWrapper = jq('#donation-rewards-wrapper');
    var tierName = jq('#tier-name');
    var tierIcon = jq('#tier-icon');
    tmp$ = tiers.iterator();
    while (tmp$.hasNext()) {
      var tier = tmp$.next();
      donationRewards.append(jq('<div>').addClass('tier-reward-header').text(tier.title + ' (R' + '$' + ' ' + tier.minimum + '+)'));
      donationRewards.append(jq('<img>').css('width', '64px').attr('src', tier.icon));
      tmp$_0 = tier.rewards.iterator();
      while (tmp$_0.hasNext()) {
        var reward = tmp$_0.next();
        donationRewards.append(jq('<li>').html(reward).attr('id', 'reward-' + hashCode(tier) + '-' + hashCode(reward)));
      }
    }
    var donationRange = jq('#donation-range');
    donationRange.attr('max', tiers.size - 1 | 0);
    var handleRangeChange = DonateView$start$handleRangeChange(tiers, tierName, tierIcon, donationRewardsWrapper);
    jq('#donation-range').on('input', DonateView$start$lambda(handleRangeChange));
    handleRangeChange();
  };
  function DonateView$RewardTier(title, icon, minimum, rewards) {
    this.title = title;
    this.icon = icon;
    this.minimum = minimum;
    this.rewards = rewards;
  }
  DonateView$RewardTier.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'RewardTier',
    interfaces: []
  };
  DonateView.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'DonateView',
    interfaces: []
  };
  var DonateView_instance = null;
  function DonateView_getInstance() {
    if (DonateView_instance === null) {
      new DonateView();
    }
    return DonateView_instance;
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
      return this.wrapper_e2dk2j$_0.value;
    }
  });
  Object.defineProperty(LoriDashboard.prototype, 'leftSidebar', {
    get: function () {
      return this.leftSidebar_bu0mf$_0.value;
    }
  });
  Object.defineProperty(LoriDashboard.prototype, 'rightSidebar', {
    get: function () {
      return this.rightSidebar_6drdtm$_0.value;
    }
  });
  Object.defineProperty(LoriDashboard.prototype, 'loadingScreen', {
    get: function () {
      return this.loadingScreen_dfu46y$_0.value;
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
  function toJson($receiver) {
    return JSON.parse(JSON.stringify($receiver));
  }
  function toJson_0($receiver) {
    return JSON.parse(JSON.stringify($receiver));
  }
  function stringify($receiver) {
    return JSON.stringify($receiver);
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
  function SaveStuff$prepareSave$lambda_0() {
    return Unit;
  }
  function SaveStuff$prepareSave$lambda_1() {
    println('Done!');
    LoriDashboard_getInstance().hideLoadingBar();
    return Unit;
  }
  SaveStuff.prototype.prepareSave = function (type, extras, showSaveScreen, endpoint) {
    if (extras === void 0)
      extras = null;
    if (showSaveScreen === void 0)
      showSaveScreen = true;
    if (endpoint === void 0)
      endpoint = 'https://loritta.website/api/v1/guild/config/' + guildId;
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
    var dynamic = SaveStuff$prepareSave$lambda_0;
    dynamic.type = 'PATCH';
    dynamic.data = JSON.stringify(json_0);
    dynamic.headers = mapOf([to('Accept', 'application/json'), to('Content-Type', 'application/json')]);
    dynamic.complete = SaveStuff$prepareSave$lambda_1;
    dynamic.url = endpoint;
    jQuery.ajax(dynamic);
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
  function AutoroleConfig() {
    this.isEnabled = false;
    this.roles = [];
    this.rolesVoteRewards = [];
  }
  function AutoroleConfig$RoleVoteReward(voteCount, roles) {
    this.voteCount = voteCount;
    this.roles = roles;
  }
  AutoroleConfig$RoleVoteReward.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'RoleVoteReward',
    interfaces: []
  };
  AutoroleConfig.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'AutoroleConfig',
    interfaces: []
  };
  function ModerationConfig() {
    this.sendPunishmentViaDm = false;
    this.sendToPunishLog = false;
    this.punishmentLogChannelId = null;
    this.punishmentLogMessage = '**Usu\xE1rio punido:** {user}#{#user}**Punido por** {@staff}\n**Motivo:** {reason}';
    this.punishmentActions = [];
    this.warnExpiresIn = null;
  }
  function ModerationConfig$WarnAction(warnCount, punishmentAction, customMetadata0) {
    this.warnCount = warnCount;
    this.punishmentAction = punishmentAction;
    this.customMetadata0 = customMetadata0;
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
    ModerationConfig$PunishmentAction$MUTE_instance = new ModerationConfig$PunishmentAction('MUTE', 3);
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
  var ModerationConfig$PunishmentAction$MUTE_instance;
  function ModerationConfig$PunishmentAction$MUTE_getInstance() {
    ModerationConfig$PunishmentAction_initFields();
    return ModerationConfig$PunishmentAction$MUTE_instance;
  }
  ModerationConfig$PunishmentAction.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'PunishmentAction',
    interfaces: [Enum]
  };
  function ModerationConfig$PunishmentAction$values() {
    return [ModerationConfig$PunishmentAction$BAN_getInstance(), ModerationConfig$PunishmentAction$SOFT_BAN_getInstance(), ModerationConfig$PunishmentAction$KICK_getInstance(), ModerationConfig$PunishmentAction$MUTE_getInstance()];
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
      case 'MUTE':
        return ModerationConfig$PunishmentAction$MUTE_getInstance();
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
  function AbstractCommand(name, label, aliases, category, description, usage, detailedUsage, example, extendedExamples, requiredUserPermissions, requiredBotPermissions) {
    this.name = name;
    this.label = label;
    this.aliases = aliases;
    this.category = category;
    this.description = description;
    this.usage = usage;
    this.detailedUsage = detailedUsage;
    this.example = example;
    this.extendedExamples = extendedExamples;
    this.requiredUserPermissions = requiredUserPermissions;
    this.requiredBotPermissions = requiredBotPermissions;
  }
  AbstractCommand.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'AbstractCommand',
    interfaces: []
  };
  function CommandCategory(name, ordinal, fancyTitle, description) {
    Enum.call(this);
    this.fancyTitle = fancyTitle;
    this.description = description;
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function CommandCategory_initFields() {
    CommandCategory_initFields = function () {
    };
    CommandCategory$FUN_instance = new CommandCategory('FUN', 0, 'CommandCategory_FUN_Name', 'CommandCategory_FUN_Description');
    CommandCategory$IMAGES_instance = new CommandCategory('IMAGES', 1, 'CommandCategory_IMAGES_Name', 'CommandCategory_IMAGES_Description');
    CommandCategory$MINECRAFT_instance = new CommandCategory('MINECRAFT', 2, 'CommandCategory_MINECRAFT_Name', 'CommandCategory_MINECRAFT_Description');
    CommandCategory$POKEMON_instance = new CommandCategory('POKEMON', 3, 'CommandCategory_POKEMON_Name', 'CommandCategory_POKEMON_Description');
    CommandCategory$UNDERTALE_instance = new CommandCategory('UNDERTALE', 4, 'CommandCategory_UNDERTALE_Name', 'CommandCategory_UNDERTALE_Description');
    CommandCategory$ROBLOX_instance = new CommandCategory('ROBLOX', 5, 'CommandCategory_ROBLOX_Name', 'CommandCategory_ROBLOX_Description');
    CommandCategory$ANIME_instance = new CommandCategory('ANIME', 6, 'CommandCategory_ANIME_Name', 'CommandCategory_ANIME_Description');
    CommandCategory$DISCORD_instance = new CommandCategory('DISCORD', 7, 'CommandCategory_DISCORD_Name', 'CommandCategory_DISCORD_Description');
    CommandCategory$MISC_instance = new CommandCategory('MISC', 8, 'CommandCategory_MISC_Name', 'CommandCategory_MISC_Description');
    CommandCategory$ADMIN_instance = new CommandCategory('ADMIN', 9, 'CommandCategory_ADMIN_Name', 'CommandCategory_ADMIN_Description');
    CommandCategory$UTILS_instance = new CommandCategory('UTILS', 10, 'CommandCategory_UTILS_Name', 'CommandCategory_UTILS_Description');
    CommandCategory$SOCIAL_instance = new CommandCategory('SOCIAL', 11, 'CommandCategory_SOCIAL_Name', 'CommandCategory_SOCIAL_Description');
    CommandCategory$ECONOMY_instance = new CommandCategory('ECONOMY', 12, 'CommandCategory_ECONOMY_Name', 'CommandCategory_ECONOMY_Description');
    CommandCategory$MUSIC_instance = new CommandCategory('MUSIC', 13, 'CommandCategory_MUSIC_Name', 'CommandCategory_MUSIC_Description');
    CommandCategory$MAGIC_instance = new CommandCategory('MAGIC', 14, 'CommandCategory_MAGIC_Name', 'CommandCategory_MAGIC_Description');
  }
  var CommandCategory$FUN_instance;
  function CommandCategory$FUN_getInstance() {
    CommandCategory_initFields();
    return CommandCategory$FUN_instance;
  }
  var CommandCategory$IMAGES_instance;
  function CommandCategory$IMAGES_getInstance() {
    CommandCategory_initFields();
    return CommandCategory$IMAGES_instance;
  }
  var CommandCategory$MINECRAFT_instance;
  function CommandCategory$MINECRAFT_getInstance() {
    CommandCategory_initFields();
    return CommandCategory$MINECRAFT_instance;
  }
  var CommandCategory$POKEMON_instance;
  function CommandCategory$POKEMON_getInstance() {
    CommandCategory_initFields();
    return CommandCategory$POKEMON_instance;
  }
  var CommandCategory$UNDERTALE_instance;
  function CommandCategory$UNDERTALE_getInstance() {
    CommandCategory_initFields();
    return CommandCategory$UNDERTALE_instance;
  }
  var CommandCategory$ROBLOX_instance;
  function CommandCategory$ROBLOX_getInstance() {
    CommandCategory_initFields();
    return CommandCategory$ROBLOX_instance;
  }
  var CommandCategory$ANIME_instance;
  function CommandCategory$ANIME_getInstance() {
    CommandCategory_initFields();
    return CommandCategory$ANIME_instance;
  }
  var CommandCategory$DISCORD_instance;
  function CommandCategory$DISCORD_getInstance() {
    CommandCategory_initFields();
    return CommandCategory$DISCORD_instance;
  }
  var CommandCategory$MISC_instance;
  function CommandCategory$MISC_getInstance() {
    CommandCategory_initFields();
    return CommandCategory$MISC_instance;
  }
  var CommandCategory$ADMIN_instance;
  function CommandCategory$ADMIN_getInstance() {
    CommandCategory_initFields();
    return CommandCategory$ADMIN_instance;
  }
  var CommandCategory$UTILS_instance;
  function CommandCategory$UTILS_getInstance() {
    CommandCategory_initFields();
    return CommandCategory$UTILS_instance;
  }
  var CommandCategory$SOCIAL_instance;
  function CommandCategory$SOCIAL_getInstance() {
    CommandCategory_initFields();
    return CommandCategory$SOCIAL_instance;
  }
  var CommandCategory$ECONOMY_instance;
  function CommandCategory$ECONOMY_getInstance() {
    CommandCategory_initFields();
    return CommandCategory$ECONOMY_instance;
  }
  var CommandCategory$MUSIC_instance;
  function CommandCategory$MUSIC_getInstance() {
    CommandCategory_initFields();
    return CommandCategory$MUSIC_instance;
  }
  var CommandCategory$MAGIC_instance;
  function CommandCategory$MAGIC_getInstance() {
    CommandCategory_initFields();
    return CommandCategory$MAGIC_instance;
  }
  CommandCategory.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'CommandCategory',
    interfaces: [Enum]
  };
  function CommandCategory$values() {
    return [CommandCategory$FUN_getInstance(), CommandCategory$IMAGES_getInstance(), CommandCategory$MINECRAFT_getInstance(), CommandCategory$POKEMON_getInstance(), CommandCategory$UNDERTALE_getInstance(), CommandCategory$ROBLOX_getInstance(), CommandCategory$ANIME_getInstance(), CommandCategory$DISCORD_getInstance(), CommandCategory$MISC_getInstance(), CommandCategory$ADMIN_getInstance(), CommandCategory$UTILS_getInstance(), CommandCategory$SOCIAL_getInstance(), CommandCategory$ECONOMY_getInstance(), CommandCategory$MUSIC_getInstance(), CommandCategory$MAGIC_getInstance()];
  }
  CommandCategory.values = CommandCategory$values;
  function CommandCategory$valueOf(name) {
    switch (name) {
      case 'FUN':
        return CommandCategory$FUN_getInstance();
      case 'IMAGES':
        return CommandCategory$IMAGES_getInstance();
      case 'MINECRAFT':
        return CommandCategory$MINECRAFT_getInstance();
      case 'POKEMON':
        return CommandCategory$POKEMON_getInstance();
      case 'UNDERTALE':
        return CommandCategory$UNDERTALE_getInstance();
      case 'ROBLOX':
        return CommandCategory$ROBLOX_getInstance();
      case 'ANIME':
        return CommandCategory$ANIME_getInstance();
      case 'DISCORD':
        return CommandCategory$DISCORD_getInstance();
      case 'MISC':
        return CommandCategory$MISC_getInstance();
      case 'ADMIN':
        return CommandCategory$ADMIN_getInstance();
      case 'UTILS':
        return CommandCategory$UTILS_getInstance();
      case 'SOCIAL':
        return CommandCategory$SOCIAL_getInstance();
      case 'ECONOMY':
        return CommandCategory$ECONOMY_getInstance();
      case 'MUSIC':
        return CommandCategory$MUSIC_getInstance();
      case 'MAGIC':
        return CommandCategory$MAGIC_getInstance();
      default:throwISE('No enum constant utils.CommandCategory.' + name);
    }
  }
  CommandCategory.valueOf_61zpoe$ = CommandCategory$valueOf;
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
  function Role(id, name, isPublicRole, isManaged, canInteract) {
    this.id = id;
    this.name = name;
    this.isPublicRole = isPublicRole;
    this.isManaged = isManaged;
    this.canInteract = canInteract;
  }
  Role.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Role',
    interfaces: []
  };
  function ServerConfig(serverListConfig, moderationConfig, autoroleConfig, textChannels, roles) {
    this.serverListConfig = serverListConfig;
    this.moderationConfig = moderationConfig;
    this.autoroleConfig = autoroleConfig;
    this.textChannels = textChannels;
    this.roles = roles;
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
  Object.defineProperty(_, 'CommandsView', {
    get: CommandsView_getInstance
  });
  Object.defineProperty(_, 'ConfigureAutoroleView', {
    get: ConfigureAutoroleView_getInstance
  });
  Object.defineProperty(_, 'ConfigureModerationView', {
    get: ConfigureModerationView_getInstance
  });
  Object.defineProperty(_, 'ConfigurePartnerView', {
    get: ConfigurePartnerView_getInstance
  });
  Object.defineProperty(_, 'ConfigureProfileView', {
    get: ConfigureProfileView_getInstance
  });
  DonateView.prototype.RewardTier = DonateView$RewardTier;
  Object.defineProperty(_, 'DonateView', {
    get: DonateView_getInstance
  });
  Object.defineProperty(_, 'LoriDashboard', {
    get: LoriDashboard_getInstance
  });
  _.toJson_th5c7u$ = toJson;
  _.toJson_s8jyvk$ = toJson_0;
  _.stringify_s8jyvk$ = stringify;
  Object.defineProperty(_, 'SaveStuff', {
    get: SaveStuff_getInstance
  });
  AutoroleConfig.RoleVoteReward = AutoroleConfig$RoleVoteReward;
  var package$userdata = _.userdata || (_.userdata = {});
  package$userdata.AutoroleConfig = AutoroleConfig;
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
  Object.defineProperty(ModerationConfig$PunishmentAction, 'MUTE', {
    get: ModerationConfig$PunishmentAction$MUTE_getInstance
  });
  ModerationConfig.PunishmentAction = ModerationConfig$PunishmentAction;
  package$userdata.ModerationConfig = ModerationConfig;
  package$userdata.PartnerConfig = PartnerConfig;
  var package$utils = _.utils || (_.utils = {});
  package$utils.AbstractCommand = AbstractCommand;
  Object.defineProperty(CommandCategory, 'FUN', {
    get: CommandCategory$FUN_getInstance
  });
  Object.defineProperty(CommandCategory, 'IMAGES', {
    get: CommandCategory$IMAGES_getInstance
  });
  Object.defineProperty(CommandCategory, 'MINECRAFT', {
    get: CommandCategory$MINECRAFT_getInstance
  });
  Object.defineProperty(CommandCategory, 'POKEMON', {
    get: CommandCategory$POKEMON_getInstance
  });
  Object.defineProperty(CommandCategory, 'UNDERTALE', {
    get: CommandCategory$UNDERTALE_getInstance
  });
  Object.defineProperty(CommandCategory, 'ROBLOX', {
    get: CommandCategory$ROBLOX_getInstance
  });
  Object.defineProperty(CommandCategory, 'ANIME', {
    get: CommandCategory$ANIME_getInstance
  });
  Object.defineProperty(CommandCategory, 'DISCORD', {
    get: CommandCategory$DISCORD_getInstance
  });
  Object.defineProperty(CommandCategory, 'MISC', {
    get: CommandCategory$MISC_getInstance
  });
  Object.defineProperty(CommandCategory, 'ADMIN', {
    get: CommandCategory$ADMIN_getInstance
  });
  Object.defineProperty(CommandCategory, 'UTILS', {
    get: CommandCategory$UTILS_getInstance
  });
  Object.defineProperty(CommandCategory, 'SOCIAL', {
    get: CommandCategory$SOCIAL_getInstance
  });
  Object.defineProperty(CommandCategory, 'ECONOMY', {
    get: CommandCategory$ECONOMY_getInstance
  });
  Object.defineProperty(CommandCategory, 'MUSIC', {
    get: CommandCategory$MUSIC_getInstance
  });
  Object.defineProperty(CommandCategory, 'MAGIC', {
    get: CommandCategory$MAGIC_getInstance
  });
  package$utils.CommandCategory = CommandCategory;
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
  package$utils.Role = Role;
  package$utils.ServerConfig = ServerConfig;
  package$utils.TextChannel = TextChannel;
  Kotlin.defineModule('LoriDashboard', _);
  return _;
}(typeof LoriDashboard === 'undefined' ? {} : LoriDashboard, kotlin, this['kotlinx-html-js'], LoriUtils);
