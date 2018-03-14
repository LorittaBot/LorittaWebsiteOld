if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'LoriUtils'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'LoriUtils'.");
}
if (typeof this['kotlinx-html-js'] === 'undefined') {
  throw new Error("Error loading module 'LoriUtils'. Its dependency 'kotlinx-html-js' was not found. Please, check whether 'kotlinx-html-js' is loaded prior to 'LoriUtils'.");
}
var LoriUtils = function (_, Kotlin, $module$kotlinx_html_js) {
  'use strict';
  var throwUPAE = Kotlin.throwUPAE;
  var Any = Object;
  var throwCCE = Kotlin.throwCCE;
  var println = Kotlin.kotlin.io.println_s8jyv4$;
  var equals = Kotlin.equals;
  var toString = Kotlin.toString;
  var trimMargin = Kotlin.kotlin.text.trimMargin_rjktp$;
  var TingleModal = tingle.modal;
  var Unit = Kotlin.kotlin.Unit;
  var StringBuilder = Kotlin.kotlin.text.StringBuilder;
  var appendHTML = $module$kotlinx_html_js.kotlinx.html.stream.appendHTML_9kwp7w$;
  var div = $module$kotlinx_html_js.kotlinx.html.div_59el9d$;
  var p = $module$kotlinx_html_js.kotlinx.html.p_8pggrc$;
  var set_style = $module$kotlinx_html_js.kotlinx.html.set_style_ueiko3$;
  var pre = $module$kotlinx_html_js.kotlinx.html.pre_pcyp7f$;
  var ensureNotNull = Kotlin.ensureNotNull;
  var iterator = Kotlin.kotlin.js.iterator_s8jyvk$;
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  var withIndex = Kotlin.kotlin.collections.withIndex_us0mfu$;
  var replace = Kotlin.kotlin.text.replace_680rmw$;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var locale;
  function get_locale() {
    if (locale == null)
      return throwUPAE('locale');
    return locale;
  }
  function set_locale(locale_0) {
    locale = locale_0;
  }
  function jq(query) {
    var tmp$, tmp$_0;
    tmp$_0 = Kotlin.isType(tmp$ = query, Any) ? tmp$ : throwCCE();
    return jQuery(tmp$_0);
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
  function main$lambda$lambda(closure$modal) {
    return function () {
      closure$modal.close();
      return Unit;
    };
  }
  function main$lambda$lambda_0($receiver) {
    $receiver.unaryPlus_pdl1vz$('oh no, error! :(');
    return Unit;
  }
  function main$lambda$lambda$lambda($receiver) {
    $receiver.unaryPlus_pdl1vz$('Alguma coisa deu errada, sorry :(');
    return Unit;
  }
  function main$lambda$lambda$lambda_0(closure$content) {
    return function ($receiver) {
      set_style($receiver, 'word-wrap: break-word; white-space: pre-wrap;');
      $receiver.unaryPlus_pdl1vz$(window.btoa(closure$content));
      return Unit;
    };
  }
  function main$lambda$lambda_1(closure$content) {
    return function ($receiver) {
      p($receiver, void 0, main$lambda$lambda$lambda);
      pre($receiver, void 0, main$lambda$lambda$lambda_0(closure$content));
      return Unit;
    };
  }
  function main$lambda(message, file, line, col, error) {
    if (!equals(message, 'Uncaught ReferenceError: adsbygoogle is not defined')) {
      println('Erro detectado! Abrindo modal...');
      println('Message: ' + toString(message));
      println('file: ' + file);
      println('line: ' + toString(line));
      println('col: ' + toString(col));
      println('error: ' + toString(error));
      println(error.stack);
      var content = trimMargin('Error: ' + message + '\n' + '\t\t\t|User Agent: ' + window.navigator.userAgent + '\n' + '\t\t\t|Stack:' + '\n' + '\t\t\t|' + error.stack + '\n' + '\t\t');
      var modal = new TingleModal(new TingleOptions(true, void 0, void 0, void 0, ['tingle-modal--overflow']));
      modal.addFooterBtn('<i class="fas fa-times"><\/i> Fechar', 'button-discord pure-button button-discord-modal button-discord-modal-secondary-action', main$lambda$lambda(modal));
      var stringBuilder = new StringBuilder();
      div(appendHTML(div(appendHTML(stringBuilder, false), 'category-name', main$lambda$lambda_0)), void 0, main$lambda$lambda_1(content));
      modal.setContent(stringBuilder.toString());
      modal.open();
      false;
    }
    return Unit;
  }
  function main(args) {
    println('LoriUtils! ^-^');
    window.onerror = main$lambda;
  }
  function testError() {
    var test = null;
    ensureNotNull(test);
  }
  var emptyMap = Kotlin.kotlin.collections.emptyMap_q3lmfv$;
  function BaseLocale() {
    BaseLocale$Companion_getInstance();
    this.strings = emptyMap();
  }
  function BaseLocale$Companion() {
    BaseLocale$Companion_instance = this;
  }
  var LinkedHashMap_init = Kotlin.kotlin.collections.LinkedHashMap_init_q3lmfv$;
  BaseLocale$Companion.prototype.create_qk3xy8$ = function (json) {
    var tmp$, tmp$_0;
    var map = LinkedHashMap_init();
    tmp$ = iterator(Object.keys(json));
    while (tmp$.hasNext()) {
      var key = tmp$.next();
      map.put_xwzc9p$(key, typeof (tmp$_0 = json[key]) === 'string' ? tmp$_0 : throwCCE());
    }
    println('Keys: ' + map.entries.size);
    var $receiver = new BaseLocale();
    $receiver.strings = map;
    return $receiver;
  };
  BaseLocale$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var BaseLocale$Companion_instance = null;
  function BaseLocale$Companion_getInstance() {
    if (BaseLocale$Companion_instance === null) {
      new BaseLocale$Companion();
    }
    return BaseLocale$Companion_instance;
  }
  BaseLocale.prototype.get_25kzsl$ = function (key, arguments_0) {
    var tmp$, tmp$_0;
    tmp$ = this.strings.get_11rb$(key);
    if (tmp$ == null) {
      return key;
    }
    var string = tmp$;
    tmp$_0 = withIndex(arguments_0).iterator();
    while (tmp$_0.hasNext()) {
      var tmp$_1 = tmp$_0.next();
      var index = tmp$_1.component1()
      , arg = tmp$_1.component2();
      string = replace(string, '{' + index + '}', toString(arg));
    }
    return string;
  };
  BaseLocale.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'BaseLocale',
    interfaces: []
  };
  function TingleOptions(footer, stickyFooter, closeMethods, closeLabel, cssClass, onOpen, onClose, beforeClose) {
    if (footer === void 0)
      footer = null;
    if (stickyFooter === void 0)
      stickyFooter = null;
    if (closeMethods === void 0)
      closeMethods = [];
    if (closeLabel === void 0)
      closeLabel = null;
    if (cssClass === void 0)
      cssClass = [];
    if (onOpen === void 0)
      onOpen = null;
    if (onClose === void 0)
      onClose = null;
    if (beforeClose === void 0)
      beforeClose = null;
    this.footer = footer;
    this.stickyFooter = stickyFooter;
    this.closeMethods = closeMethods;
    this.closeLabel = closeLabel;
    this.cssClass = cssClass;
    this.onOpen = onOpen;
    this.onClose = onClose;
    this.beforeClose = beforeClose;
  }
  TingleOptions.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TingleOptions',
    interfaces: []
  };
  Object.defineProperty(_, 'locale', {
    get: get_locale,
    set: set_locale
  });
  _.jq_61zpoe$ = jq;
  _.toJson_th5c7u$ = toJson;
  _.toJson_s8jyvk$ = toJson_0;
  _.stringify_s8jyvk$ = stringify;
  _.main_kand9s$ = main;
  _.testError = testError;
  Object.defineProperty(BaseLocale, 'Companion', {
    get: BaseLocale$Companion_getInstance
  });
  var package$utils = _.utils || (_.utils = {});
  package$utils.BaseLocale = BaseLocale;
  package$utils.TingleOptions = TingleOptions;
  main([]);
  Kotlin.defineModule('LoriUtils', _);
  return _;
}(typeof LoriUtils === 'undefined' ? {} : LoriUtils, kotlin, this['kotlinx-html-js']);
