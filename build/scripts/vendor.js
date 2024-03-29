!(function (e, t, n) {
  "use strict";
  function r(e, t) {
    return (
      (t = t || Error),
      function () {
        var n,
          r,
          i = 2,
          o = arguments,
          a = o[0],
          s = "[" + (e ? e + ":" : "") + a + "] ",
          u = o[1];
        for (
          s += u.replace(/\{\d+\}/g, function (e) {
            var t = +e.slice(1, -1),
              n = t + i;
            return n < o.length ? ye(o[n]) : e;
          }),
            s +=
              "\nhttps://errors.angularjs.org/1.4.10/" + (e ? e + "/" : "") + a,
            r = i,
            n = "?";
          r < o.length;
          r++, n = "&"
        )
          s += n + "p" + (r - i) + "=" + encodeURIComponent(ye(o[r]));
        return new t(s);
      }
    );
  }
  function i(e) {
    if (null == e || O(e)) return !1;
    if (Lr(e) || S(e) || (Nr && e instanceof Nr)) return !0;
    var t = "length" in Object(e) && e.length;
    return (
      E(t) &&
      ((t >= 0 && (t - 1 in e || e instanceof Array)) ||
        "function" == typeof e.item)
    );
  }
  function o(e, t, n) {
    var r, a;
    if (e)
      if (A(e))
        for (r in e)
          "prototype" == r ||
            "length" == r ||
            "name" == r ||
            (e.hasOwnProperty && !e.hasOwnProperty(r)) ||
            t.call(n, e[r], r, e);
      else if (Lr(e) || i(e)) {
        var s = "object" != typeof e;
        for (r = 0, a = e.length; a > r; r++)
          (s || r in e) && t.call(n, e[r], r, e);
      } else if (e.forEach && e.forEach !== o) e.forEach(t, n, e);
      else if (x(e)) for (r in e) t.call(n, e[r], r, e);
      else if ("function" == typeof e.hasOwnProperty)
        for (r in e) e.hasOwnProperty(r) && t.call(n, e[r], r, e);
      else for (r in e) kr.call(e, r) && t.call(n, e[r], r, e);
    return e;
  }
  function a(e, t, n) {
    for (var r = Object.keys(e).sort(), i = 0; i < r.length; i++)
      t.call(n, e[r[i]], r[i]);
    return r;
  }
  function s(e) {
    return function (t, n) {
      e(n, t);
    };
  }
  function u() {
    return ++Hr;
  }
  function c(e, t) {
    t ? (e.$$hashKey = t) : delete e.$$hashKey;
  }
  function l(e, t, n) {
    for (var r = e.$$hashKey, i = 0, o = t.length; o > i; ++i) {
      var a = t[i];
      if (w(a) || A(a))
        for (var s = Object.keys(a), u = 0, f = s.length; f > u; u++) {
          var h = s[u],
            p = a[h];
          n && w(p)
            ? C(p)
              ? (e[h] = new Date(p.valueOf()))
              : k(p)
              ? (e[h] = new RegExp(p))
              : p.nodeName
              ? (e[h] = p.cloneNode(!0))
              : D(p)
              ? (e[h] = p.clone())
              : (w(e[h]) || (e[h] = Lr(p) ? [] : {}), l(e[h], [p], !0))
            : (e[h] = p);
        }
    }
    return c(e, r), e;
  }
  function f(e) {
    return l(e, Ir.call(arguments, 1), !1);
  }
  function h(e) {
    return l(e, Ir.call(arguments, 1), !0);
  }
  function p(e) {
    return parseInt(e, 10);
  }
  function d(e, t) {
    return f(Object.create(e), t);
  }
  function $() {}
  function v(e) {
    return e;
  }
  function m(e) {
    return function () {
      return e;
    };
  }
  function g(e) {
    return A(e.toString) && e.toString !== qr;
  }
  function y(e) {
    return "undefined" == typeof e;
  }
  function b(e) {
    return "undefined" != typeof e;
  }
  function w(e) {
    return null !== e && "object" == typeof e;
  }
  function x(e) {
    return null !== e && "object" == typeof e && !_r(e);
  }
  function S(e) {
    return "string" == typeof e;
  }
  function E(e) {
    return "number" == typeof e;
  }
  function C(e) {
    return "[object Date]" === qr.call(e);
  }
  function A(e) {
    return "function" == typeof e;
  }
  function k(e) {
    return "[object RegExp]" === qr.call(e);
  }
  function O(e) {
    return e && e.window === e;
  }
  function M(e) {
    return e && e.$evalAsync && e.$watch;
  }
  function j(e) {
    return "[object File]" === qr.call(e);
  }
  function T(e) {
    return "[object FormData]" === qr.call(e);
  }
  function N(e) {
    return "[object Blob]" === qr.call(e);
  }
  function V(e) {
    return "boolean" == typeof e;
  }
  function P(e) {
    return e && A(e.then);
  }
  function I(e) {
    return e && E(e.length) && zr.test(qr.call(e));
  }
  function D(e) {
    return !(!e || !(e.nodeName || (e.prop && e.attr && e.find)));
  }
  function R(e) {
    var t,
      n = {},
      r = e.split(",");
    for (t = 0; t < r.length; t++) n[r[t]] = !0;
    return n;
  }
  function q(e) {
    return Ar(e.nodeName || (e[0] && e[0].nodeName));
  }
  function _(e, t) {
    var n = e.indexOf(t);
    return n >= 0 && e.splice(n, 1), n;
  }
  function F(e, t) {
    function n(e, t) {
      var n,
        i = t.$$hashKey;
      if (Lr(e)) for (var o = 0, a = e.length; a > o; o++) t.push(r(e[o]));
      else if (x(e)) for (n in e) t[n] = r(e[n]);
      else if (e && "function" == typeof e.hasOwnProperty)
        for (n in e) e.hasOwnProperty(n) && (t[n] = r(e[n]));
      else for (n in e) kr.call(e, n) && (t[n] = r(e[n]));
      return c(t, i), t;
    }
    function r(e) {
      if (!w(e)) return e;
      var t = i.indexOf(e);
      if (-1 !== t) return a[t];
      if (O(e) || M(e))
        throw Fr(
          "cpws",
          "Can't copy! Making copies of Window or Scope instances is not supported."
        );
      var r,
        o = !1;
      return (
        Lr(e)
          ? ((r = []), (o = !0))
          : I(e)
          ? (r = new e.constructor(e))
          : C(e)
          ? (r = new Date(e.getTime()))
          : k(e)
          ? ((r = new RegExp(e.source, e.toString().match(/[^\/]*$/)[0])),
            (r.lastIndex = e.lastIndex))
          : N(e)
          ? (r = new e.constructor([e], { type: e.type }))
          : A(e.cloneNode)
          ? (r = e.cloneNode(!0))
          : ((r = Object.create(_r(e))), (o = !0)),
        i.push(e),
        a.push(r),
        o ? n(e, r) : r
      );
    }
    var i = [],
      a = [];
    if (t) {
      if (I(t))
        throw Fr(
          "cpta",
          "Can't copy! TypedArray destination cannot be mutated."
        );
      if (e === t)
        throw Fr("cpi", "Can't copy! Source and destination are identical.");
      return (
        Lr(t)
          ? (t.length = 0)
          : o(t, function (e, n) {
              "$$hashKey" !== n && delete t[n];
            }),
        i.push(e),
        a.push(t),
        n(e, t)
      );
    }
    return r(e);
  }
  function U(e, t) {
    if (Lr(e)) {
      t = t || [];
      for (var n = 0, r = e.length; r > n; n++) t[n] = e[n];
    } else if (w(e)) {
      t = t || {};
      for (var i in e)
        ("$" === i.charAt(0) && "$" === i.charAt(1)) || (t[i] = e[i]);
    }
    return t || e;
  }
  function H(e, t) {
    if (e === t) return !0;
    if (null === e || null === t) return !1;
    if (e !== e && t !== t) return !0;
    var n,
      r,
      i,
      o = typeof e,
      a = typeof t;
    if (o == a && "object" == o) {
      if (!Lr(e)) {
        if (C(e)) return C(t) ? H(e.getTime(), t.getTime()) : !1;
        if (k(e)) return k(t) ? e.toString() == t.toString() : !1;
        if (M(e) || M(t) || O(e) || O(t) || Lr(t) || C(t) || k(t)) return !1;
        i = ve();
        for (r in e)
          if ("$" !== r.charAt(0) && !A(e[r])) {
            if (!H(e[r], t[r])) return !1;
            i[r] = !0;
          }
        for (r in t)
          if (!(r in i) && "$" !== r.charAt(0) && b(t[r]) && !A(t[r]))
            return !1;
        return !0;
      }
      if (!Lr(t)) return !1;
      if ((n = e.length) == t.length) {
        for (r = 0; n > r; r++) if (!H(e[r], t[r])) return !1;
        return !0;
      }
    }
    return !1;
  }
  function B(e, t, n) {
    return e.concat(Ir.call(t, n));
  }
  function L(e, t) {
    return Ir.call(e, t || 0);
  }
  function z(e, t) {
    var n = arguments.length > 2 ? L(arguments, 2) : [];
    return !A(t) || t instanceof RegExp
      ? t
      : n.length
      ? function () {
          return arguments.length
            ? t.apply(e, B(n, arguments, 0))
            : t.apply(e, n);
        }
      : function () {
          return arguments.length ? t.apply(e, arguments) : t.call(e);
        };
  }
  function W(e, r) {
    var i = r;
    return (
      "string" == typeof e && "$" === e.charAt(0) && "$" === e.charAt(1)
        ? (i = n)
        : O(r)
        ? (i = "$WINDOW")
        : r && t === r
        ? (i = "$DOCUMENT")
        : M(r) && (i = "$SCOPE"),
      i
    );
  }
  function G(e, t) {
    return y(e) ? n : (E(t) || (t = t ? 2 : null), JSON.stringify(e, W, t));
  }
  function J(e) {
    return S(e) ? JSON.parse(e) : e;
  }
  function Y(e, t) {
    e = e.replace(Kr, "");
    var n = Date.parse("Jan 01, 1970 00:00:00 " + e) / 6e4;
    return isNaN(n) ? t : n;
  }
  function K(e, t) {
    return (e = new Date(e.getTime())), e.setMinutes(e.getMinutes() + t), e;
  }
  function Z(e, t, n) {
    n = n ? -1 : 1;
    var r = e.getTimezoneOffset(),
      i = Y(t, r);
    return K(e, n * (i - r));
  }
  function X(e) {
    e = Nr(e).clone();
    try {
      e.empty();
    } catch (t) {}
    var n = Nr("<div>").append(e).html();
    try {
      return e[0].nodeType === ni
        ? Ar(n)
        : n.match(/^(<[^>]+>)/)[1].replace(/^<([\w\-]+)/, function (e, t) {
            return "<" + Ar(t);
          });
    } catch (t) {
      return Ar(n);
    }
  }
  function Q(e) {
    try {
      return decodeURIComponent(e);
    } catch (t) {}
  }
  function ee(e) {
    var t = {};
    return (
      o((e || "").split("&"), function (e) {
        var n, r, i;
        e &&
          ((r = e = e.replace(/\+/g, "%20")),
          (n = e.indexOf("=")),
          -1 !== n && ((r = e.substring(0, n)), (i = e.substring(n + 1))),
          (r = Q(r)),
          b(r) &&
            ((i = b(i) ? Q(i) : !0),
            kr.call(t, r)
              ? Lr(t[r])
                ? t[r].push(i)
                : (t[r] = [t[r], i])
              : (t[r] = i)));
      }),
      t
    );
  }
  function te(e) {
    var t = [];
    return (
      o(e, function (e, n) {
        Lr(e)
          ? o(e, function (e) {
              t.push(re(n, !0) + (e === !0 ? "" : "=" + re(e, !0)));
            })
          : t.push(re(n, !0) + (e === !0 ? "" : "=" + re(e, !0)));
      }),
      t.length ? t.join("&") : ""
    );
  }
  function ne(e) {
    return re(e, !0)
      .replace(/%26/gi, "&")
      .replace(/%3D/gi, "=")
      .replace(/%2B/gi, "+");
  }
  function re(e, t) {
    return encodeURIComponent(e)
      .replace(/%40/gi, "@")
      .replace(/%3A/gi, ":")
      .replace(/%24/g, "$")
      .replace(/%2C/gi, ",")
      .replace(/%3B/gi, ";")
      .replace(/%20/g, t ? "%20" : "+");
  }
  function ie(e, t) {
    var n,
      r,
      i = Zr.length;
    for (r = 0; i > r; ++r)
      if (((n = Zr[r] + t), S((n = e.getAttribute(n))))) return n;
    return null;
  }
  function oe(e, t) {
    var n,
      r,
      i = {};
    o(Zr, function (t) {
      var i = t + "app";
      !n &&
        e.hasAttribute &&
        e.hasAttribute(i) &&
        ((n = e), (r = e.getAttribute(i)));
    }),
      o(Zr, function (t) {
        var i,
          o = t + "app";
        !n &&
          (i = e.querySelector("[" + o.replace(":", "\\:") + "]")) &&
          ((n = i), (r = i.getAttribute(o)));
      }),
      n && ((i.strictDi = null !== ie(n, "strict-di")), t(n, r ? [r] : [], i));
  }
  function ae(n, r, i) {
    w(i) || (i = {});
    var a = { strictDi: !1 };
    i = f(a, i);
    var s = function () {
        if (((n = Nr(n)), n.injector())) {
          var e = n[0] === t ? "document" : X(n);
          throw Fr(
            "btstrpd",
            "App Already Bootstrapped with this Element '{0}'",
            e.replace(/</, "&lt;").replace(/>/, "&gt;")
          );
        }
        (r = r || []),
          r.unshift([
            "$provide",
            function (e) {
              e.value("$rootElement", n);
            },
          ]),
          i.debugInfoEnabled &&
            r.push([
              "$compileProvider",
              function (e) {
                e.debugInfoEnabled(!0);
              },
            ]),
          r.unshift("ng");
        var o = tt(r, i.strictDi);
        return (
          o.invoke([
            "$rootScope",
            "$rootElement",
            "$compile",
            "$injector",
            function (e, t, n, r) {
              e.$apply(function () {
                t.data("$injector", r), n(t)(e);
              });
            },
          ]),
          o
        );
      },
      u = /^NG_ENABLE_DEBUG_INFO!/,
      c = /^NG_DEFER_BOOTSTRAP!/;
    return (
      e &&
        u.test(e.name) &&
        ((i.debugInfoEnabled = !0), (e.name = e.name.replace(u, ""))),
      e && !c.test(e.name)
        ? s()
        : ((e.name = e.name.replace(c, "")),
          (Ur.resumeBootstrap = function (e) {
            return (
              o(e, function (e) {
                r.push(e);
              }),
              s()
            );
          }),
          void (A(Ur.resumeDeferredBootstrap) && Ur.resumeDeferredBootstrap()))
    );
  }
  function se() {
    (e.name = "NG_ENABLE_DEBUG_INFO!" + e.name), e.location.reload();
  }
  function ue(e) {
    var t = Ur.element(e).injector();
    if (!t)
      throw Fr(
        "test",
        "no injector found for element argument to getTestability"
      );
    return t.get("$$testability");
  }
  function ce(e, t) {
    return (
      (t = t || "_"),
      e.replace(Xr, function (e, n) {
        return (n ? t : "") + e.toLowerCase();
      })
    );
  }
  function le() {
    var t;
    if (!Qr) {
      var r = Yr();
      (Vr = y(r) ? e.jQuery : r ? e[r] : n),
        Vr && Vr.fn.on
          ? ((Nr = Vr),
            f(Vr.fn, {
              scope: wi.scope,
              isolateScope: wi.isolateScope,
              controller: wi.controller,
              injector: wi.injector,
              inheritedData: wi.inheritedData,
            }),
            (t = Vr.cleanData),
            (Vr.cleanData = function (e) {
              var n;
              if (Br) Br = !1;
              else
                for (var r, i = 0; null != (r = e[i]); i++)
                  (n = Vr._data(r, "events")),
                    n && n.$destroy && Vr(r).triggerHandler("$destroy");
              t(e);
            }))
          : (Nr = Me),
        (Ur.element = Nr),
        (Qr = !0);
    }
  }
  function fe(e, t, n) {
    if (!e)
      throw Fr("areq", "Argument '{0}' is {1}", t || "?", n || "required");
    return e;
  }
  function he(e, t, n) {
    return (
      n && Lr(e) && (e = e[e.length - 1]),
      fe(
        A(e),
        t,
        "not a function, got " +
          (e && "object" == typeof e
            ? e.constructor.name || "Object"
            : typeof e)
      ),
      e
    );
  }
  function pe(e, t) {
    if ("hasOwnProperty" === e)
      throw Fr("badname", "hasOwnProperty is not a valid {0} name", t);
  }
  function de(e, t, n) {
    if (!t) return e;
    for (var r, i = t.split("."), o = e, a = i.length, s = 0; a > s; s++)
      (r = i[s]), e && (e = (o = e)[r]);
    return !n && A(e) ? z(o, e) : e;
  }
  function $e(e) {
    for (
      var t, n = e[0], r = e[e.length - 1], i = 1;
      n !== r && (n = n.nextSibling);
      i++
    )
      (t || e[i] !== n) && (t || (t = Nr(Ir.call(e, 0, i))), t.push(n));
    return t || e;
  }
  function ve() {
    return Object.create(null);
  }
  function me(e) {
    function t(e, t, n) {
      return e[t] || (e[t] = n());
    }
    var n = r("$injector"),
      i = r("ng"),
      o = t(e, "angular", Object);
    return (
      (o.$$minErr = o.$$minErr || r),
      t(o, "module", function () {
        var e = {};
        return function (r, o, a) {
          var s = function (e, t) {
            if ("hasOwnProperty" === e)
              throw i("badname", "hasOwnProperty is not a valid {0} name", t);
          };
          return (
            s(r, "module"),
            o && e.hasOwnProperty(r) && (e[r] = null),
            t(e, r, function () {
              function e(e, t, n, r) {
                return (
                  r || (r = i),
                  function () {
                    return r[n || "push"]([e, t, arguments]), l;
                  }
                );
              }
              function t(e, t) {
                return function (n, o) {
                  return (
                    o && A(o) && (o.$$moduleName = r),
                    i.push([e, t, arguments]),
                    l
                  );
                };
              }
              if (!o)
                throw n(
                  "nomod",
                  "Module '{0}' is not available! You either misspelled the module name or forgot to load it. If registering a module ensure that you specify the dependencies as the second argument.",
                  r
                );
              var i = [],
                s = [],
                u = [],
                c = e("$injector", "invoke", "push", s),
                l = {
                  _invokeQueue: i,
                  _configBlocks: s,
                  _runBlocks: u,
                  requires: o,
                  name: r,
                  provider: t("$provide", "provider"),
                  factory: t("$provide", "factory"),
                  service: t("$provide", "service"),
                  value: e("$provide", "value"),
                  constant: e("$provide", "constant", "unshift"),
                  decorator: t("$provide", "decorator"),
                  animation: t("$animateProvider", "register"),
                  filter: t("$filterProvider", "register"),
                  controller: t("$controllerProvider", "register"),
                  directive: t("$compileProvider", "directive"),
                  config: c,
                  run: function (e) {
                    return u.push(e), this;
                  },
                };
              return a && c(a), l;
            })
          );
        };
      })
    );
  }
  function ge(e) {
    var t = [];
    return JSON.stringify(e, function (e, n) {
      if (((n = W(e, n)), w(n))) {
        if (t.indexOf(n) >= 0) return "...";
        t.push(n);
      }
      return n;
    });
  }
  function ye(e) {
    return "function" == typeof e
      ? e.toString().replace(/ \{[\s\S]*$/, "")
      : y(e)
      ? "undefined"
      : "string" != typeof e
      ? ge(e)
      : e;
  }
  function be(t) {
    f(t, {
      bootstrap: ae,
      copy: F,
      extend: f,
      merge: h,
      equals: H,
      element: Nr,
      forEach: o,
      injector: tt,
      noop: $,
      bind: z,
      toJson: G,
      fromJson: J,
      identity: v,
      isUndefined: y,
      isDefined: b,
      isString: S,
      isFunction: A,
      isObject: w,
      isNumber: E,
      isElement: D,
      isArray: Lr,
      version: ai,
      isDate: C,
      lowercase: Ar,
      uppercase: Or,
      callbacks: { counter: 0 },
      getTestability: ue,
      $$minErr: r,
      $$csp: Jr,
      reloadWithDebugInfo: se,
    }),
      (Pr = me(e))(
        "ng",
        ["ngLocale"],
        [
          "$provide",
          function (e) {
            e.provider({ $$sanitizeUri: bn }),
              e
                .provider("$compile", ft)
                .directive({
                  a: Ao,
                  input: zo,
                  textarea: zo,
                  form: To,
                  script: Ra,
                  select: Fa,
                  style: Ha,
                  option: Ua,
                  ngBind: Jo,
                  ngBindHtml: Ko,
                  ngBindTemplate: Yo,
                  ngClass: Xo,
                  ngClassEven: ea,
                  ngClassOdd: Qo,
                  ngCloak: ta,
                  ngController: na,
                  ngForm: No,
                  ngHide: Ta,
                  ngIf: oa,
                  ngInclude: aa,
                  ngInit: ua,
                  ngNonBindable: xa,
                  ngPluralize: Aa,
                  ngRepeat: ka,
                  ngShow: ja,
                  ngStyle: Na,
                  ngSwitch: Va,
                  ngSwitchWhen: Pa,
                  ngSwitchDefault: Ia,
                  ngOptions: Ca,
                  ngTransclude: Da,
                  ngModel: ya,
                  ngList: ca,
                  ngChange: Zo,
                  pattern: La,
                  ngPattern: La,
                  required: Ba,
                  ngRequired: Ba,
                  minlength: Wa,
                  ngMinlength: Wa,
                  maxlength: za,
                  ngMaxlength: za,
                  ngValue: Go,
                  ngModelOptions: wa,
                })
                .directive({ ngInclude: sa })
                .directive(ko)
                .directive(ra),
              e.provider({
                $anchorScroll: nt,
                $animate: Di,
                $animateCss: _i,
                $$animateJs: Pi,
                $$animateQueue: Ii,
                $$AnimateRunner: qi,
                $$animateAsyncRun: Ri,
                $browser: ut,
                $cacheFactory: ct,
                $controller: vt,
                $document: mt,
                $exceptionHandler: gt,
                $filter: Pn,
                $$forceReflow: Li,
                $interpolate: Nt,
                $interval: Vt,
                $http: Ot,
                $httpParamSerializer: bt,
                $httpParamSerializerJQLike: wt,
                $httpBackend: jt,
                $xhrFactory: Mt,
                $location: Gt,
                $log: Jt,
                $parse: dn,
                $rootScope: yn,
                $q: $n,
                $$q: vn,
                $sce: En,
                $sceDelegate: Sn,
                $sniffer: Cn,
                $templateCache: lt,
                $templateRequest: An,
                $$testability: kn,
                $timeout: On,
                $window: Tn,
                $$rAF: gn,
                $$jqLite: Ke,
                $$HashMap: Ci,
                $$cookieReader: Vn,
              });
          },
        ]
      );
  }
  function we() {
    return ++ui;
  }
  function xe(e) {
    return e
      .replace(fi, function (e, t, n, r) {
        return r ? n.toUpperCase() : n;
      })
      .replace(hi, "Moz$1");
  }
  function Se(e) {
    return !vi.test(e);
  }
  function Ee(e) {
    var t = e.nodeType;
    return t === ei || !t || t === ii;
  }
  function Ce(e) {
    for (var t in si[e.ng339]) return !0;
    return !1;
  }
  function Ae(e, t) {
    var n,
      r,
      i,
      a,
      s = t.createDocumentFragment(),
      u = [];
    if (Se(e)) u.push(t.createTextNode(e));
    else {
      for (
        n = n || s.appendChild(t.createElement("div")),
          r = (mi.exec(e) || ["", ""])[1].toLowerCase(),
          i = yi[r] || yi._default,
          n.innerHTML = i[1] + e.replace(gi, "<$1></$2>") + i[2],
          a = i[0];
        a--;

      )
        n = n.lastChild;
      (u = B(u, n.childNodes)), (n = s.firstChild), (n.textContent = "");
    }
    return (
      (s.textContent = ""),
      (s.innerHTML = ""),
      o(u, function (e) {
        s.appendChild(e);
      }),
      s
    );
  }
  function ke(e, n) {
    n = n || t;
    var r;
    return (r = $i.exec(e))
      ? [n.createElement(r[1])]
      : (r = Ae(e, n))
      ? r.childNodes
      : [];
  }
  function Oe(e, t) {
    var n = e.parentNode;
    n && n.replaceChild(t, e), t.appendChild(e);
  }
  function Me(e) {
    if (e instanceof Me) return e;
    var t;
    if ((S(e) && ((e = Wr(e)), (t = !0)), !(this instanceof Me))) {
      if (t && "<" != e.charAt(0))
        throw di(
          "nosel",
          "Looking up elements via selectors is not supported by jqLite! See: https://docs.angularjs.org/api/angular.element"
        );
      return new Me(e);
    }
    t ? _e(this, ke(e)) : _e(this, e);
  }
  function je(e) {
    return e.cloneNode(!0);
  }
  function Te(e, t) {
    if ((t || Ve(e), e.querySelectorAll))
      for (var n = e.querySelectorAll("*"), r = 0, i = n.length; i > r; r++)
        Ve(n[r]);
  }
  function Ne(e, t, n, r) {
    if (b(r))
      throw di(
        "offargs",
        "jqLite#off() does not support the `selector` argument"
      );
    var i = Pe(e),
      a = i && i.events,
      s = i && i.handle;
    if (s)
      if (t) {
        var u = function (t) {
          var r = a[t];
          b(n) && _(r || [], n),
            (b(n) && r && r.length > 0) || (li(e, t, s), delete a[t]);
        };
        o(t.split(" "), function (e) {
          u(e), pi[e] && u(pi[e]);
        });
      } else for (t in a) "$destroy" !== t && li(e, t, s), delete a[t];
  }
  function Ve(e, t) {
    var r = e.ng339,
      i = r && si[r];
    if (i) {
      if (t) return void delete i.data[t];
      i.handle && (i.events.$destroy && i.handle({}, "$destroy"), Ne(e)),
        delete si[r],
        (e.ng339 = n);
    }
  }
  function Pe(e, t) {
    var r = e.ng339,
      i = r && si[r];
    return (
      t &&
        !i &&
        ((e.ng339 = r = we()),
        (i = si[r] = { events: {}, data: {}, handle: n })),
      i
    );
  }
  function Ie(e, t, n) {
    if (Ee(e)) {
      var r = b(n),
        i = !r && t && !w(t),
        o = !t,
        a = Pe(e, !i),
        s = a && a.data;
      if (r) s[t] = n;
      else {
        if (o) return s;
        if (i) return s && s[t];
        f(s, t);
      }
    }
  }
  function De(e, t) {
    return e.getAttribute
      ? (" " + (e.getAttribute("class") || "") + " ")
          .replace(/[\n\t]/g, " ")
          .indexOf(" " + t + " ") > -1
      : !1;
  }
  function Re(e, t) {
    t &&
      e.setAttribute &&
      o(t.split(" "), function (t) {
        e.setAttribute(
          "class",
          Wr(
            (" " + (e.getAttribute("class") || "") + " ")
              .replace(/[\n\t]/g, " ")
              .replace(" " + Wr(t) + " ", " ")
          )
        );
      });
  }
  function qe(e, t) {
    if (t && e.setAttribute) {
      var n = (" " + (e.getAttribute("class") || "") + " ").replace(
        /[\n\t]/g,
        " "
      );
      o(t.split(" "), function (e) {
        (e = Wr(e)), -1 === n.indexOf(" " + e + " ") && (n += e + " ");
      }),
        e.setAttribute("class", Wr(n));
    }
  }
  function _e(e, t) {
    if (t)
      if (t.nodeType) e[e.length++] = t;
      else {
        var n = t.length;
        if ("number" == typeof n && t.window !== t) {
          if (n) for (var r = 0; n > r; r++) e[e.length++] = t[r];
        } else e[e.length++] = t;
      }
  }
  function Fe(e, t) {
    return Ue(e, "$" + (t || "ngController") + "Controller");
  }
  function Ue(e, t, n) {
    e.nodeType == ii && (e = e.documentElement);
    for (var r = Lr(t) ? t : [t]; e; ) {
      for (var i = 0, o = r.length; o > i; i++)
        if (b((n = Nr.data(e, r[i])))) return n;
      e = e.parentNode || (e.nodeType === oi && e.host);
    }
  }
  function He(e) {
    for (Te(e, !0); e.firstChild; ) e.removeChild(e.firstChild);
  }
  function Be(e, t) {
    t || Te(e);
    var n = e.parentNode;
    n && n.removeChild(e);
  }
  function Le(t, n) {
    (n = n || e),
      "complete" === n.document.readyState
        ? n.setTimeout(t)
        : Nr(n).on("load", t);
  }
  function ze(e, t) {
    var n = xi[t.toLowerCase()];
    return n && Si[q(e)] && n;
  }
  function We(e) {
    return Ei[e];
  }
  function Ge(e, t) {
    var n = function (n, r) {
      n.isDefaultPrevented = function () {
        return n.defaultPrevented;
      };
      var i = t[r || n.type],
        o = i ? i.length : 0;
      if (o) {
        if (y(n.immediatePropagationStopped)) {
          var a = n.stopImmediatePropagation;
          n.stopImmediatePropagation = function () {
            (n.immediatePropagationStopped = !0),
              n.stopPropagation && n.stopPropagation(),
              a && a.call(n);
          };
        }
        n.isImmediatePropagationStopped = function () {
          return n.immediatePropagationStopped === !0;
        };
        var s = i.specialHandlerWrapper || Je;
        o > 1 && (i = U(i));
        for (var u = 0; o > u; u++)
          n.isImmediatePropagationStopped() || s(e, n, i[u]);
      }
    };
    return (n.elem = e), n;
  }
  function Je(e, t, n) {
    n.call(e, t);
  }
  function Ye(e, t, n) {
    var r = t.relatedTarget;
    (r && (r === e || bi.call(e, r))) || n.call(e, t);
  }
  function Ke() {
    this.$get = function () {
      return f(Me, {
        hasClass: function (e, t) {
          return e.attr && (e = e[0]), De(e, t);
        },
        addClass: function (e, t) {
          return e.attr && (e = e[0]), qe(e, t);
        },
        removeClass: function (e, t) {
          return e.attr && (e = e[0]), Re(e, t);
        },
      });
    };
  }
  function Ze(e, t) {
    var n = e && e.$$hashKey;
    if (n) return "function" == typeof n && (n = e.$$hashKey()), n;
    var r = typeof e;
    return (n =
      "function" == r || ("object" == r && null !== e)
        ? (e.$$hashKey = r + ":" + (t || u)())
        : r + ":" + e);
  }
  function Xe(e, t) {
    if (t) {
      var n = 0;
      this.nextUid = function () {
        return ++n;
      };
    }
    o(e, this.put, this);
  }
  function Qe(e) {
    var t = e.toString().replace(Mi, ""),
      n = t.match(Ai);
    return n
      ? "function(" + (n[1] || "").replace(/[\s\r\n]+/, " ") + ")"
      : "fn";
  }
  function et(e, t, n) {
    var r, i, a, s;
    if ("function" == typeof e) {
      if (!(r = e.$inject)) {
        if (((r = []), e.length)) {
          if (t)
            throw (
              ((S(n) && n) || (n = e.name || Qe(e)),
              ji(
                "strictdi",
                "{0} is not using explicit annotation and cannot be invoked in strict mode",
                n
              ))
            );
          (i = e.toString().replace(Mi, "")),
            (a = i.match(Ai)),
            o(a[1].split(ki), function (e) {
              e.replace(Oi, function (e, t, n) {
                r.push(n);
              });
            });
        }
        e.$inject = r;
      }
    } else
      Lr(e)
        ? ((s = e.length - 1), he(e[s], "fn"), (r = e.slice(0, s)))
        : he(e, "fn", !0);
    return r;
  }
  function tt(e, t) {
    function r(e) {
      return function (t, n) {
        return w(t) ? void o(t, s(e)) : e(t, n);
      };
    }
    function i(e, t) {
      if (
        (pe(e, "service"), (A(t) || Lr(t)) && (t = E.instantiate(t)), !t.$get)
      )
        throw ji("pget", "Provider '{0}' must define $get factory method.", e);
      return (x[e + v] = t);
    }
    function a(e, t) {
      return function () {
        var n = k.invoke(t, this);
        if (y(n))
          throw ji(
            "undef",
            "Provider '{0}' must return a value from $get factory method.",
            e
          );
        return n;
      };
    }
    function u(e, t, n) {
      return i(e, { $get: n !== !1 ? a(e, t) : t });
    }
    function c(e, t) {
      return u(e, [
        "$injector",
        function (e) {
          return e.instantiate(t);
        },
      ]);
    }
    function l(e, t) {
      return u(e, m(t), !1);
    }
    function f(e, t) {
      pe(e, "constant"), (x[e] = t), (C[e] = t);
    }
    function h(e, t) {
      var n = E.get(e + v),
        r = n.$get;
      n.$get = function () {
        var e = k.invoke(r, n);
        return k.invoke(t, null, { $delegate: e });
      };
    }
    function p(e) {
      fe(y(e) || Lr(e), "modulesToLoad", "not an array");
      var t,
        n = [];
      return (
        o(e, function (e) {
          function r(e) {
            var t, n;
            for (t = 0, n = e.length; n > t; t++) {
              var r = e[t],
                i = E.get(r[0]);
              i[r[1]].apply(i, r[2]);
            }
          }
          if (!b.get(e)) {
            b.put(e, !0);
            try {
              S(e)
                ? ((t = Pr(e)),
                  (n = n.concat(p(t.requires)).concat(t._runBlocks)),
                  r(t._invokeQueue),
                  r(t._configBlocks))
                : A(e)
                ? n.push(E.invoke(e))
                : Lr(e)
                ? n.push(E.invoke(e))
                : he(e, "module");
            } catch (i) {
              throw (
                (Lr(e) && (e = e[e.length - 1]),
                i.message &&
                  i.stack &&
                  -1 == i.stack.indexOf(i.message) &&
                  (i = i.message + "\n" + i.stack),
                ji(
                  "modulerr",
                  "Failed to instantiate module {0} due to:\n{1}",
                  e,
                  i.stack || i.message || i
                ))
              );
            }
          }
        }),
        n
      );
    }
    function d(e, n) {
      function r(t, r) {
        if (e.hasOwnProperty(t)) {
          if (e[t] === $)
            throw ji(
              "cdep",
              "Circular dependency found: {0}",
              t + " <- " + g.join(" <- ")
            );
          return e[t];
        }
        try {
          return g.unshift(t), (e[t] = $), (e[t] = n(t, r));
        } catch (i) {
          throw (e[t] === $ && delete e[t], i);
        } finally {
          g.shift();
        }
      }
      function i(e, n, i, o) {
        "string" == typeof i && ((o = i), (i = null));
        var a,
          s,
          u,
          c = [],
          l = tt.$$annotate(e, t, o);
        for (s = 0, a = l.length; a > s; s++) {
          if (((u = l[s]), "string" != typeof u))
            throw ji(
              "itkn",
              "Incorrect injection token! Expected service name as string, got {0}",
              u
            );
          c.push(i && i.hasOwnProperty(u) ? i[u] : r(u, o));
        }
        return Lr(e) && (e = e[a]), e.apply(n, c);
      }
      function o(e, t, n) {
        var r = Object.create((Lr(e) ? e[e.length - 1] : e).prototype || null),
          o = i(e, r, t, n);
        return w(o) || A(o) ? o : r;
      }
      return {
        invoke: i,
        instantiate: o,
        get: r,
        annotate: tt.$$annotate,
        has: function (t) {
          return x.hasOwnProperty(t + v) || e.hasOwnProperty(t);
        },
      };
    }
    t = t === !0;
    var $ = {},
      v = "Provider",
      g = [],
      b = new Xe([], !0),
      x = {
        $provide: {
          provider: r(i),
          factory: r(u),
          service: r(c),
          value: r(l),
          constant: r(f),
          decorator: h,
        },
      },
      E = (x.$injector = d(x, function (e, t) {
        throw (
          (Ur.isString(t) && g.push(t),
          ji("unpr", "Unknown provider: {0}", g.join(" <- ")))
        );
      })),
      C = {},
      k = (C.$injector = d(C, function (e, t) {
        var r = E.get(e + v, t);
        return k.invoke(r.$get, r, n, e);
      }));
    return (
      o(p(e), function (e) {
        e && k.invoke(e);
      }),
      k
    );
  }
  function nt() {
    var e = !0;
    (this.disableAutoScrolling = function () {
      e = !1;
    }),
      (this.$get = [
        "$window",
        "$location",
        "$rootScope",
        function (t, n, r) {
          function i(e) {
            var t = null;
            return (
              Array.prototype.some.call(e, function (e) {
                return "a" === q(e) ? ((t = e), !0) : void 0;
              }),
              t
            );
          }
          function o() {
            var e = s.yOffset;
            if (A(e)) e = e();
            else if (D(e)) {
              var n = e[0],
                r = t.getComputedStyle(n);
              e = "fixed" !== r.position ? 0 : n.getBoundingClientRect().bottom;
            } else E(e) || (e = 0);
            return e;
          }
          function a(e) {
            if (e) {
              e.scrollIntoView();
              var n = o();
              if (n) {
                var r = e.getBoundingClientRect().top;
                t.scrollBy(0, r - n);
              }
            } else t.scrollTo(0, 0);
          }
          function s(e) {
            e = S(e) ? e : n.hash();
            var t;
            e
              ? (t = u.getElementById(e))
                ? a(t)
                : (t = i(u.getElementsByName(e)))
                ? a(t)
                : "top" === e && a(null)
              : a(null);
          }
          var u = t.document;
          return (
            e &&
              r.$watch(
                function () {
                  return n.hash();
                },
                function (e, t) {
                  (e === t && "" === e) ||
                    Le(function () {
                      r.$evalAsync(s);
                    });
                }
              ),
            s
          );
        },
      ]);
  }
  function rt(e, t) {
    return e || t
      ? e
        ? t
          ? (Lr(e) && (e = e.join(" ")),
            Lr(t) && (t = t.join(" ")),
            e + " " + t)
          : e
        : t
      : "";
  }
  function it(e) {
    for (var t = 0; t < e.length; t++) {
      var n = e[t];
      if (n.nodeType === Ni) return n;
    }
  }
  function ot(e) {
    S(e) && (e = e.split(" "));
    var t = ve();
    return (
      o(e, function (e) {
        e.length && (t[e] = !0);
      }),
      t
    );
  }
  function at(e) {
    return w(e) ? e : {};
  }
  function st(e, t, n, r) {
    function i(e) {
      try {
        e.apply(null, L(arguments, 1));
      } finally {
        if ((g--, 0 === g))
          for (; b.length; )
            try {
              b.pop()();
            } catch (t) {
              n.error(t);
            }
      }
    }
    function a(e) {
      var t = e.indexOf("#");
      return -1 === t ? "" : e.substr(t);
    }
    function s() {
      (C = null), c(), l();
    }
    function u() {
      try {
        return p.state;
      } catch (e) {}
    }
    function c() {
      (w = u()), (w = y(w) ? null : w), H(w, O) && (w = O), (O = w);
    }
    function l() {
      (S === f.url() && x === w) ||
        ((S = f.url()),
        (x = w),
        o(A, function (e) {
          e(f.url(), w);
        }));
    }
    var f = this,
      h = (t[0], e.location),
      p = e.history,
      d = e.setTimeout,
      v = e.clearTimeout,
      m = {};
    f.isMock = !1;
    var g = 0,
      b = [];
    (f.$$completeOutstandingRequest = i),
      (f.$$incOutstandingRequestCount = function () {
        g++;
      }),
      (f.notifyWhenNoOutstandingRequests = function (e) {
        0 === g ? e() : b.push(e);
      });
    var w,
      x,
      S = h.href,
      E = t.find("base"),
      C = null;
    c(),
      (x = w),
      (f.url = function (t, n, i) {
        if (
          (y(i) && (i = null),
          h !== e.location && (h = e.location),
          p !== e.history && (p = e.history),
          t)
        ) {
          var o = x === i;
          if (S === t && (!r.history || o)) return f;
          var s = S && qt(S) === qt(t);
          return (
            (S = t),
            (x = i),
            !r.history || (s && o)
              ? ((s && !C) || (C = t),
                n ? h.replace(t) : s ? (h.hash = a(t)) : (h.href = t),
                h.href !== t && (C = t))
              : (p[n ? "replaceState" : "pushState"](i, "", t), c(), (x = w)),
            f
          );
        }
        return C || h.href.replace(/%27/g, "'");
      }),
      (f.state = function () {
        return w;
      });
    var A = [],
      k = !1,
      O = null;
    (f.onUrlChange = function (t) {
      return (
        k ||
          (r.history && Nr(e).on("popstate", s),
          Nr(e).on("hashchange", s),
          (k = !0)),
        A.push(t),
        t
      );
    }),
      (f.$$applicationDestroyed = function () {
        Nr(e).off("hashchange popstate", s);
      }),
      (f.$$checkUrlChange = l),
      (f.baseHref = function () {
        var e = E.attr("href");
        return e ? e.replace(/^(https?\:)?\/\/[^\/]*/, "") : "";
      }),
      (f.defer = function (e, t) {
        var n;
        return (
          g++,
          (n = d(function () {
            delete m[n], i(e);
          }, t || 0)),
          (m[n] = !0),
          n
        );
      }),
      (f.defer.cancel = function (e) {
        return m[e] ? (delete m[e], v(e), i($), !0) : !1;
      });
  }
  function ut() {
    this.$get = [
      "$window",
      "$log",
      "$sniffer",
      "$document",
      function (e, t, n, r) {
        return new st(e, r, t, n);
      },
    ];
  }
  function ct() {
    this.$get = function () {
      function e(e, n) {
        function i(e) {
          e != h &&
            (p ? p == e && (p = e.n) : (p = e),
            o(e.n, e.p),
            o(e, h),
            (h = e),
            (h.n = null));
        }
        function o(e, t) {
          e != t && (e && (e.p = t), t && (t.n = e));
        }
        if (e in t)
          throw r("$cacheFactory")("iid", "CacheId '{0}' is already taken!", e);
        var a = 0,
          s = f({}, n, { id: e }),
          u = ve(),
          c = (n && n.capacity) || Number.MAX_VALUE,
          l = ve(),
          h = null,
          p = null;
        return (t[e] = {
          put: function (e, t) {
            if (!y(t)) {
              if (c < Number.MAX_VALUE) {
                var n = l[e] || (l[e] = { key: e });
                i(n);
              }
              return e in u || a++, (u[e] = t), a > c && this.remove(p.key), t;
            }
          },
          get: function (e) {
            if (c < Number.MAX_VALUE) {
              var t = l[e];
              if (!t) return;
              i(t);
            }
            return u[e];
          },
          remove: function (e) {
            if (c < Number.MAX_VALUE) {
              var t = l[e];
              if (!t) return;
              t == h && (h = t.p),
                t == p && (p = t.n),
                o(t.n, t.p),
                delete l[e];
            }
            e in u && (delete u[e], a--);
          },
          removeAll: function () {
            (u = ve()), (a = 0), (l = ve()), (h = p = null);
          },
          destroy: function () {
            (u = null), (s = null), (l = null), delete t[e];
          },
          info: function () {
            return f({}, s, { size: a });
          },
        });
      }
      var t = {};
      return (
        (e.info = function () {
          var e = {};
          return (
            o(t, function (t, n) {
              e[n] = t.info();
            }),
            e
          );
        }),
        (e.get = function (e) {
          return t[e];
        }),
        e
      );
    };
  }
  function lt() {
    this.$get = [
      "$cacheFactory",
      function (e) {
        return e("templates");
      },
    ];
  }
  function ft(e, r) {
    function i(e, t, n) {
      var r = /^\s*([@&]|=(\*?))(\??)\s*(\w*)\s*$/,
        i = {};
      return (
        o(e, function (e, o) {
          if (e in C) return void (i[o] = C[e]);
          var a = e.match(r);
          if (!a)
            throw Fi(
              "iscp",
              "Invalid {3} for directive '{0}'. Definition: {... {1}: '{2}' ...}",
              t,
              o,
              e,
              n ? "controller bindings definition" : "isolate scope definition"
            );
          (i[o] = {
            mode: a[1][0],
            collection: "*" === a[2],
            optional: "?" === a[3],
            attrName: a[4] || o,
          }),
            a[4] && (C[e] = i[o]);
        }),
        i
      );
    }
    function a(e, t) {
      var n = { isolateScope: null, bindToController: null };
      if (
        (w(e.scope) &&
          (e.bindToController === !0
            ? ((n.bindToController = i(e.scope, t, !0)), (n.isolateScope = {}))
            : (n.isolateScope = i(e.scope, t, !1))),
        w(e.bindToController) &&
          (n.bindToController = i(e.bindToController, t, !0)),
        w(n.bindToController))
      ) {
        var r = e.controller,
          o = e.controllerAs;
        if (!r)
          throw Fi(
            "noctrl",
            "Cannot bind to controller without directive '{0}'s controller.",
            t
          );
        if (!$t(r, o))
          throw Fi(
            "noident",
            "Cannot bind to controller without identifier for directive '{0}'.",
            t
          );
      }
      return n;
    }
    function u(e) {
      var t = e.charAt(0);
      if (!t || t !== Ar(t))
        throw Fi(
          "baddir",
          "Directive name '{0}' is invalid. The first character must be a lowercase letter",
          e
        );
      if (e !== e.trim())
        throw Fi(
          "baddir",
          "Directive name '{0}' is invalid. The name should not contain leading or trailing whitespaces",
          e
        );
    }
    var c = {},
      l = "Directive",
      h = /^\s*directive\:\s*([\w\-]+)\s+(.*)$/,
      p = /(([\w\-]+)(?:\:([^;]+))?;?)/,
      g = R("ngSrc,ngSrcset,src,srcset"),
      x = /^(?:(\^\^?)?(\?)?(\^\^?)?)?/,
      E = /^(on[a-z]+|formaction)$/,
      C = ve();
    (this.directive = function O(t, n) {
      return (
        pe(t, "directive"),
        S(t)
          ? (u(t),
            fe(n, "directiveFactory"),
            c.hasOwnProperty(t) ||
              ((c[t] = []),
              e.factory(t + l, [
                "$injector",
                "$exceptionHandler",
                function (e, n) {
                  var r = [];
                  return (
                    o(c[t], function (i, o) {
                      try {
                        var a = e.invoke(i);
                        A(a)
                          ? (a = { compile: m(a) })
                          : !a.compile && a.link && (a.compile = m(a.link)),
                          (a.priority = a.priority || 0),
                          (a.index = o),
                          (a.name = a.name || t),
                          (a.require = a.require || (a.controller && a.name)),
                          (a.restrict = a.restrict || "EA"),
                          (a.$$moduleName = i.$$moduleName),
                          r.push(a);
                      } catch (s) {
                        n(s);
                      }
                    }),
                    r
                  );
                },
              ])),
            c[t].push(n))
          : o(t, s(O)),
        this
      );
    }),
      (this.aHrefSanitizationWhitelist = function (e) {
        return b(e)
          ? (r.aHrefSanitizationWhitelist(e), this)
          : r.aHrefSanitizationWhitelist();
      }),
      (this.imgSrcSanitizationWhitelist = function (e) {
        return b(e)
          ? (r.imgSrcSanitizationWhitelist(e), this)
          : r.imgSrcSanitizationWhitelist();
      });
    var k = !0;
    (this.debugInfoEnabled = function (e) {
      return b(e) ? ((k = e), this) : k;
    }),
      (this.$get = [
        "$injector",
        "$interpolate",
        "$exceptionHandler",
        "$templateRequest",
        "$parse",
        "$controller",
        "$rootScope",
        "$sce",
        "$animate",
        "$$sanitizeUri",
        function (e, r, i, s, u, m, b, C, O, j) {
          function T(e, t) {
            try {
              e.addClass(t);
            } catch (n) {}
          }
          function N(e, n, r, i, o) {
            e instanceof Nr || (e = Nr(e));
            for (var a = /\S+/, s = 0, u = e.length; u > s; s++) {
              var c = e[s];
              c.nodeType === ni &&
                c.nodeValue.match(a) &&
                Oe(c, (e[s] = t.createElement("span")));
            }
            var l = I(e, n, e, r, i, o);
            N.$$addScopeClass(e);
            var f = null;
            return function (t, n, r) {
              fe(t, "scope"),
                o && o.needsNewScope && (t = t.$parent.$new()),
                (r = r || {});
              var i = r.parentBoundTranscludeFn,
                a = r.transcludeControllers,
                s = r.futureParentElement;
              i && i.$$boundTransclude && (i = i.$$boundTransclude),
                f || (f = P(s));
              var u;
              if (
                ((u =
                  "html" !== f
                    ? Nr(ee(f, Nr("<div>").append(e).html()))
                    : n
                    ? wi.clone.call(e)
                    : e),
                a)
              )
                for (var c in a) u.data("$" + c + "Controller", a[c].instance);
              return (
                N.$$addScopeInfo(u, t), n && n(u, t), l && l(t, u, u, i), u
              );
            };
          }
          function P(e) {
            var t = e && e[0];
            return t && "foreignobject" !== q(t) && t.toString().match(/SVG/)
              ? "svg"
              : "html";
          }
          function I(e, t, r, i, o, a) {
            function s(e, r, i, o) {
              var a, s, u, c, l, f, h, p, v;
              if (d) {
                var m = r.length;
                for (v = new Array(m), l = 0; l < $.length; l += 3)
                  (h = $[l]), (v[h] = r[h]);
              } else v = r;
              for (l = 0, f = $.length; f > l; )
                (u = v[$[l++]]),
                  (a = $[l++]),
                  (s = $[l++]),
                  a
                    ? (a.scope
                        ? ((c = e.$new()), N.$$addScopeInfo(Nr(u), c))
                        : (c = e),
                      (p = a.transcludeOnThisElement
                        ? D(e, a.transclude, o)
                        : !a.templateOnThisElement && o
                        ? o
                        : !o && t
                        ? D(e, t)
                        : null),
                      a(s, c, u, i, p))
                    : s && s(e, u.childNodes, n, o);
            }
            for (var u, c, l, f, h, p, d, $ = [], v = 0; v < e.length; v++)
              (u = new se()),
                (c = R(e[v], [], u, 0 === v ? i : n, o)),
                (l = c.length ? B(c, e[v], u, t, r, null, [], [], a) : null),
                l && l.scope && N.$$addScopeClass(u.$$element),
                (h =
                  (l && l.terminal) || !(f = e[v].childNodes) || !f.length
                    ? null
                    : I(
                        f,
                        l
                          ? (l.transcludeOnThisElement ||
                              !l.templateOnThisElement) &&
                              l.transclude
                          : t
                      )),
                (l || h) && ($.push(v, l, h), (p = !0), (d = d || l)),
                (a = null);
            return p ? s : null;
          }
          function D(e, t, n) {
            var r = function (r, i, o, a, s) {
              return (
                r || ((r = e.$new(!1, s)), (r.$$transcluded = !0)),
                t(r, i, {
                  parentBoundTranscludeFn: n,
                  transcludeControllers: o,
                  futureParentElement: a,
                })
              );
            };
            return r;
          }
          function R(e, t, n, r, i) {
            var o,
              a,
              s = e.nodeType,
              u = n.$attr;
            switch (s) {
              case ei:
                W(t, ht(q(e)), "E", r, i);
                for (
                  var c,
                    l,
                    f,
                    d,
                    $,
                    v,
                    m = e.attributes,
                    g = 0,
                    y = m && m.length;
                  y > g;
                  g++
                ) {
                  var b = !1,
                    x = !1;
                  (c = m[g]),
                    (l = c.name),
                    ($ = Wr(c.value)),
                    (d = ht(l)),
                    (v = pe.test(d)) &&
                      (l = l
                        .replace(Ui, "")
                        .substr(8)
                        .replace(/_(.)/g, function (e, t) {
                          return t.toUpperCase();
                        }));
                  var E = d.match(de);
                  E &&
                    G(E[1]) &&
                    ((b = l),
                    (x = l.substr(0, l.length - 5) + "end"),
                    (l = l.substr(0, l.length - 6))),
                    (f = ht(l.toLowerCase())),
                    (u[f] = l),
                    (!v && n.hasOwnProperty(f)) ||
                      ((n[f] = $), ze(e, f) && (n[f] = !0)),
                    ne(e, t, $, f, v),
                    W(t, f, "A", r, i, b, x);
                }
                if (
                  ((a = e.className), w(a) && (a = a.animVal), S(a) && "" !== a)
                )
                  for (; (o = p.exec(a)); )
                    (f = ht(o[2])),
                      W(t, f, "C", r, i) && (n[f] = Wr(o[3])),
                      (a = a.substr(o.index + o[0].length));
                break;
              case ni:
                if (11 === Tr)
                  for (
                    ;
                    e.parentNode &&
                    e.nextSibling &&
                    e.nextSibling.nodeType === ni;

                  )
                    (e.nodeValue = e.nodeValue + e.nextSibling.nodeValue),
                      e.parentNode.removeChild(e.nextSibling);
                Q(t, e.nodeValue);
                break;
              case ri:
                try {
                  (o = h.exec(e.nodeValue)),
                    o &&
                      ((f = ht(o[1])), W(t, f, "M", r, i) && (n[f] = Wr(o[2])));
                } catch (C) {}
            }
            return t.sort(K), t;
          }
          function F(e, t, n) {
            var r = [],
              i = 0;
            if (t && e.hasAttribute && e.hasAttribute(t)) {
              do {
                if (!e)
                  throw Fi(
                    "uterdir",
                    "Unterminated attribute, found '{0}' but no matching '{1}' found.",
                    t,
                    n
                  );
                e.nodeType == ei &&
                  (e.hasAttribute(t) && i++, e.hasAttribute(n) && i--),
                  r.push(e),
                  (e = e.nextSibling);
              } while (i > 0);
            } else r.push(e);
            return Nr(r);
          }
          function U(e, t, n) {
            return function (r, i, o, a, s) {
              return (i = F(i[0], t, n)), e(r, i, o, a, s);
            };
          }
          function B(e, r, o, a, s, u, c, l, f) {
            function h(e, t, n, r) {
              e &&
                (n && (e = U(e, n, r)),
                (e.require = v.require),
                (e.directiveName = g),
                (j === v || v.$$isolateScope) &&
                  (e = ie(e, { isolateScope: !0 })),
                c.push(e)),
                t &&
                  (n && (t = U(t, n, r)),
                  (t.require = v.require),
                  (t.directiveName = g),
                  (j === v || v.$$isolateScope) &&
                    (t = ie(t, { isolateScope: !0 })),
                  l.push(t));
            }
            function p(e, t, n, r) {
              var i;
              if (S(t)) {
                var o = t.match(x),
                  a = t.substring(o[0].length),
                  s = o[1] || o[3],
                  u = "?" === o[2];
                if (
                  ("^^" === s
                    ? (n = n.parent())
                    : ((i = r && r[a]), (i = i && i.instance)),
                  !i)
                ) {
                  var c = "$" + a + "Controller";
                  i = s ? n.inheritedData(c) : n.data(c);
                }
                if (!i && !u)
                  throw Fi(
                    "ctreq",
                    "Controller '{0}', required by directive '{1}', can't be found!",
                    a,
                    e
                  );
              } else if (Lr(t)) {
                i = [];
                for (var l = 0, f = t.length; f > l; l++)
                  i[l] = p(e, t[l], n, r);
              }
              return i || null;
            }
            function d(e, t, n, r, i, o) {
              var a = ve();
              for (var s in r) {
                var u = r[s],
                  c = {
                    $scope: u === j || u.$$isolateScope ? i : o,
                    $element: e,
                    $attrs: t,
                    $transclude: n,
                  },
                  l = u.controller;
                "@" == l && (l = t[u.name]);
                var f = m(l, c, !0, u.controllerAs);
                (a[u.name] = f),
                  e.data("$" + u.name + "Controller", f.instance);
              }
              return a;
            }
            function $(e, t, i, a, s) {
              function u(e, t, r) {
                var i;
                return (
                  M(e) || ((r = t), (t = e), (e = n)),
                  D && (i = v),
                  r || (r = D ? g.parent() : g),
                  s(e, t, i, r, V)
                );
              }
              var f, h, $, v, m, g, y, b, w;
              r === i
                ? ((y = o), (g = o.$$element))
                : ((g = Nr(i)), (y = new se(g, o))),
                ($ = t),
                j ? (h = t.$new(!0)) : k && ($ = t.$parent),
                s && ((m = u), (m.$$boundTransclude = s)),
                O && (v = d(g, y, m, O, h, t)),
                j &&
                  (N.$$addScopeInfo(
                    g,
                    h,
                    !0,
                    !(T && (T === j || T === j.$$originalDirective))
                  ),
                  N.$$addScopeClass(g, !0),
                  (h.$$isolateBindings = j.$$isolateBindings),
                  (b = ae(t, y, h, h.$$isolateBindings, j)),
                  b && h.$on("$destroy", b));
              for (var x in v) {
                var S = O[x],
                  E = v[x],
                  C = S.$$bindings.bindToController;
                E.identifier && C && (w = ae($, y, E.instance, C, S));
                var A = E();
                A !== E.instance &&
                  ((E.instance = A),
                  g.data("$" + S.name + "Controller", A),
                  w && w(),
                  (w = ae($, y, E.instance, C, S)));
              }
              for (B = 0, W = c.length; W > B; B++)
                (f = c[B]),
                  oe(
                    f,
                    f.isolateScope ? h : t,
                    g,
                    y,
                    f.require && p(f.directiveName, f.require, g, v),
                    m
                  );
              var V = t;
              for (
                j && (j.template || null === j.templateUrl) && (V = h),
                  e && e(V, i.childNodes, n, s),
                  B = l.length - 1;
                B >= 0;
                B--
              )
                (f = l[B]),
                  oe(
                    f,
                    f.isolateScope ? h : t,
                    g,
                    y,
                    f.require && p(f.directiveName, f.require, g, v),
                    m
                  );
            }
            f = f || {};
            for (
              var v,
                g,
                y,
                b,
                E,
                C = -Number.MAX_VALUE,
                k = f.newScopeDirective,
                O = f.controllerDirectives,
                j = f.newIsolateScopeDirective,
                T = f.templateDirective,
                V = f.nonTlbTranscludeDirective,
                P = !1,
                I = !1,
                D = f.hasElementTranscludeDirective,
                q = (o.$$element = Nr(r)),
                _ = u,
                H = a,
                B = 0,
                W = e.length;
              W > B;
              B++
            ) {
              v = e[B];
              var G = v.$$start,
                K = v.$$end;
              if ((G && (q = F(r, G, K)), (y = n), C > v.priority)) break;
              if (
                ((E = v.scope) &&
                  (v.templateUrl ||
                    (w(E)
                      ? (Z("new/isolated scope", j || k, v, q), (j = v))
                      : Z("new/isolated scope", j, v, q)),
                  (k = k || v)),
                (g = v.name),
                !v.templateUrl &&
                  v.controller &&
                  ((E = v.controller),
                  (O = O || ve()),
                  Z("'" + g + "' controller", O[g], v, q),
                  (O[g] = v)),
                (E = v.transclude) &&
                  ((P = !0),
                  v.$$tlb || (Z("transclusion", V, v, q), (V = v)),
                  "element" == E
                    ? ((D = !0),
                      (C = v.priority),
                      (y = q),
                      (q = o.$$element =
                        Nr(t.createComment(" " + g + ": " + o[g] + " "))),
                      (r = q[0]),
                      re(s, L(y), r),
                      (H = N(y, a, C, _ && _.name, {
                        nonTlbTranscludeDirective: V,
                      })))
                    : ((y = Nr(je(r)).contents()),
                      q.empty(),
                      (H = N(y, a, n, n, {
                        needsNewScope: v.$$isolateScope || v.$$newScope,
                      })))),
                v.template)
              )
                if (
                  ((I = !0),
                  Z("template", T, v, q),
                  (T = v),
                  (E = A(v.template) ? v.template(q, o) : v.template),
                  (E = he(E)),
                  v.replace)
                ) {
                  if (
                    ((_ = v),
                    (y = Se(E) ? [] : dt(ee(v.templateNamespace, Wr(E)))),
                    (r = y[0]),
                    1 != y.length || r.nodeType !== ei)
                  )
                    throw Fi(
                      "tplrt",
                      "Template for directive '{0}' must have exactly one root element. {1}",
                      g,
                      ""
                    );
                  re(s, q, r);
                  var Q = { $attr: {} },
                    te = R(r, [], Q),
                    ne = e.splice(B + 1, e.length - (B + 1));
                  (j || k) && z(te, j, k),
                    (e = e.concat(te).concat(ne)),
                    J(o, Q),
                    (W = e.length);
                } else q.html(E);
              if (v.templateUrl)
                (I = !0),
                  Z("template", T, v, q),
                  (T = v),
                  v.replace && (_ = v),
                  ($ = Y(e.splice(B, e.length - B), q, o, s, P && H, c, l, {
                    controllerDirectives: O,
                    newScopeDirective: k !== v && k,
                    newIsolateScopeDirective: j,
                    templateDirective: T,
                    nonTlbTranscludeDirective: V,
                  })),
                  (W = e.length);
              else if (v.compile)
                try {
                  (b = v.compile(q, o, H)),
                    A(b) ? h(null, b, G, K) : b && h(b.pre, b.post, G, K);
                } catch (ue) {
                  i(ue, X(q));
                }
              v.terminal && (($.terminal = !0), (C = Math.max(C, v.priority)));
            }
            return (
              ($.scope = k && k.scope === !0),
              ($.transcludeOnThisElement = P),
              ($.templateOnThisElement = I),
              ($.transclude = H),
              (f.hasElementTranscludeDirective = D),
              $
            );
          }
          function z(e, t, n) {
            for (var r = 0, i = e.length; i > r; r++)
              e[r] = d(e[r], { $$isolateScope: t, $$newScope: n });
          }
          function W(t, n, r, o, s, u, f) {
            if (n === s) return null;
            var h = null;
            if (c.hasOwnProperty(n))
              for (var p, $ = e.get(n + l), v = 0, m = $.length; m > v; v++)
                try {
                  if (
                    ((p = $[v]),
                    (y(o) || o > p.priority) && -1 != p.restrict.indexOf(r))
                  ) {
                    if (
                      (u && (p = d(p, { $$start: u, $$end: f })), !p.$$bindings)
                    ) {
                      var g = (p.$$bindings = a(p, p.name));
                      w(g.isolateScope) &&
                        (p.$$isolateBindings = g.isolateScope);
                    }
                    t.push(p), (h = p);
                  }
                } catch (b) {
                  i(b);
                }
            return h;
          }
          function G(t) {
            if (c.hasOwnProperty(t))
              for (var n, r = e.get(t + l), i = 0, o = r.length; o > i; i++)
                if (((n = r[i]), n.multiElement)) return !0;
            return !1;
          }
          function J(e, t) {
            var n = t.$attr,
              r = e.$attr,
              i = e.$$element;
            o(e, function (r, i) {
              "$" != i.charAt(0) &&
                (t[i] &&
                  t[i] !== r &&
                  (r += ("style" === i ? ";" : " ") + t[i]),
                e.$set(i, r, !0, n[i]));
            }),
              o(t, function (t, o) {
                "class" == o
                  ? (T(i, t),
                    (e["class"] = (e["class"] ? e["class"] + " " : "") + t))
                  : "style" == o
                  ? (i.attr("style", i.attr("style") + ";" + t),
                    (e.style = (e.style ? e.style + ";" : "") + t))
                  : "$" == o.charAt(0) ||
                    e.hasOwnProperty(o) ||
                    ((e[o] = t), (r[o] = n[o]));
              });
          }
          function Y(e, t, n, r, i, a, u, c) {
            var l,
              f,
              h = [],
              p = t[0],
              $ = e.shift(),
              v = d($, {
                templateUrl: null,
                transclude: null,
                replace: null,
                $$originalDirective: $,
              }),
              m = A($.templateUrl) ? $.templateUrl(t, n) : $.templateUrl,
              g = $.templateNamespace;
            return (
              t.empty(),
              s(m).then(function (s) {
                var d, y, b, x;
                if (((s = he(s)), $.replace)) {
                  if (
                    ((b = Se(s) ? [] : dt(ee(g, Wr(s)))),
                    (d = b[0]),
                    1 != b.length || d.nodeType !== ei)
                  )
                    throw Fi(
                      "tplrt",
                      "Template for directive '{0}' must have exactly one root element. {1}",
                      $.name,
                      m
                    );
                  (y = { $attr: {} }), re(r, t, d);
                  var S = R(d, [], y);
                  w($.scope) && z(S, !0), (e = S.concat(e)), J(n, y);
                } else (d = p), t.html(s);
                for (
                  e.unshift(v),
                    l = B(e, d, n, i, t, $, a, u, c),
                    o(r, function (e, n) {
                      e == d && (r[n] = t[0]);
                    }),
                    f = I(t[0].childNodes, i);
                  h.length;

                ) {
                  var E = h.shift(),
                    C = h.shift(),
                    A = h.shift(),
                    k = h.shift(),
                    O = t[0];
                  if (!E.$$destroyed) {
                    if (C !== p) {
                      var M = C.className;
                      (c.hasElementTranscludeDirective && $.replace) ||
                        (O = je(d)),
                        re(A, Nr(C), O),
                        T(Nr(O), M);
                    }
                    (x = l.transcludeOnThisElement ? D(E, l.transclude, k) : k),
                      l(f, E, O, r, x);
                  }
                }
                h = null;
              }),
              function (e, t, n, r, i) {
                var o = i;
                t.$$destroyed ||
                  (h
                    ? h.push(t, n, r, o)
                    : (l.transcludeOnThisElement && (o = D(t, l.transclude, i)),
                      l(f, t, n, r, o)));
              }
            );
          }
          function K(e, t) {
            var n = t.priority - e.priority;
            return 0 !== n
              ? n
              : e.name !== t.name
              ? e.name < t.name
                ? -1
                : 1
              : e.index - t.index;
          }
          function Z(e, t, n, r) {
            function i(e) {
              return e ? " (module: " + e + ")" : "";
            }
            if (t)
              throw Fi(
                "multidir",
                "Multiple directives [{0}{1}, {2}{3}] asking for {4} on: {5}",
                t.name,
                i(t.$$moduleName),
                n.name,
                i(n.$$moduleName),
                e,
                X(r)
              );
          }
          function Q(e, t) {
            var n = r(t, !0);
            n &&
              e.push({
                priority: 0,
                compile: function (e) {
                  var t = e.parent(),
                    r = !!t.length;
                  return (
                    r && N.$$addBindingClass(t),
                    function (e, t) {
                      var i = t.parent();
                      r || N.$$addBindingClass(i),
                        N.$$addBindingInfo(i, n.expressions),
                        e.$watch(n, function (e) {
                          t[0].nodeValue = e;
                        });
                    }
                  );
                },
              });
          }
          function ee(e, n) {
            switch ((e = Ar(e || "html"))) {
              case "svg":
              case "math":
                var r = t.createElement("div");
                return (
                  (r.innerHTML = "<" + e + ">" + n + "</" + e + ">"),
                  r.childNodes[0].childNodes
                );
              default:
                return n;
            }
          }
          function te(e, t) {
            if ("srcdoc" == t) return C.HTML;
            var n = q(e);
            return "xlinkHref" == t ||
              ("form" == n && "action" == t) ||
              ("img" != n && ("src" == t || "ngSrc" == t))
              ? C.RESOURCE_URL
              : void 0;
          }
          function ne(e, t, n, i, o) {
            var a = te(e, i);
            o = g[i] || o;
            var s = r(n, !0, a, o);
            if (s) {
              if ("multiple" === i && "select" === q(e))
                throw Fi(
                  "selmulti",
                  "Binding to the 'multiple' attribute is not supported. Element: {0}",
                  X(e)
                );
              t.push({
                priority: 100,
                compile: function () {
                  return {
                    pre: function (e, t, u) {
                      var c = u.$$observers || (u.$$observers = ve());
                      if (E.test(i))
                        throw Fi(
                          "nodomevents",
                          "Interpolations for HTML DOM event attributes are disallowed.  Please use the ng- versions (such as ng-click instead of onclick) instead."
                        );
                      var l = u[i];
                      l !== n && ((s = l && r(l, !0, a, o)), (n = l)),
                        s &&
                          ((u[i] = s(e)),
                          ((c[i] || (c[i] = [])).$$inter = !0),
                          (
                            (u.$$observers && u.$$observers[i].$$scope) ||
                            e
                          ).$watch(s, function (e, t) {
                            "class" === i && e != t
                              ? u.$updateClass(e, t)
                              : u.$set(i, e);
                          }));
                    },
                  };
                },
              });
            }
          }
          function re(e, n, r) {
            var i,
              o,
              a = n[0],
              s = n.length,
              u = a.parentNode;
            if (e)
              for (i = 0, o = e.length; o > i; i++)
                if (e[i] == a) {
                  e[i++] = r;
                  for (var c = i, l = c + s - 1, f = e.length; f > c; c++, l++)
                    f > l ? (e[c] = e[l]) : delete e[c];
                  (e.length -= s - 1), e.context === a && (e.context = r);
                  break;
                }
            u && u.replaceChild(r, a);
            var h = t.createDocumentFragment();
            h.appendChild(a),
              Nr.hasData(a) &&
                (Nr.data(r, Nr.data(a)),
                Vr
                  ? ((Br = !0), Vr.cleanData([a]))
                  : delete Nr.cache[a[Nr.expando]]);
            for (var p = 1, d = n.length; d > p; p++) {
              var $ = n[p];
              Nr($).remove(), h.appendChild($), delete n[p];
            }
            (n[0] = r), (n.length = 1);
          }
          function ie(e, t) {
            return f(
              function () {
                return e.apply(null, arguments);
              },
              e,
              t
            );
          }
          function oe(e, t, n, r, o, a) {
            try {
              e(t, n, r, o, a);
            } catch (s) {
              i(s, X(n));
            }
          }
          function ae(e, t, n, i, a) {
            var s = [];
            return (
              o(i, function (i, o) {
                var c,
                  l,
                  f,
                  h,
                  p = i.attrName,
                  d = i.optional,
                  v = i.mode;
                switch (v) {
                  case "@":
                    d || kr.call(t, p) || (n[o] = t[p] = void 0),
                      t.$observe(p, function (e) {
                        S(e) && (n[o] = e);
                      }),
                      (t.$$observers[p].$$scope = e),
                      (c = t[p]),
                      S(c) ? (n[o] = r(c)(e)) : V(c) && (n[o] = c);
                    break;
                  case "=":
                    if (!kr.call(t, p)) {
                      if (d) break;
                      t[p] = void 0;
                    }
                    if (d && !t[p]) break;
                    (l = u(t[p])),
                      (h = l.literal
                        ? H
                        : function (e, t) {
                            return e === t || (e !== e && t !== t);
                          }),
                      (f =
                        l.assign ||
                        function () {
                          throw (
                            ((c = n[o] = l(e)),
                            Fi(
                              "nonassign",
                              "Expression '{0}' in attribute '{1}' used with directive '{2}' is non-assignable!",
                              t[p],
                              p,
                              a.name
                            ))
                          );
                        }),
                      (c = n[o] = l(e));
                    var m = function (t) {
                      return (
                        h(t, n[o]) || (h(t, c) ? f(e, (t = n[o])) : (n[o] = t)),
                        (c = t)
                      );
                    };
                    m.$stateful = !0;
                    var g;
                    (g = i.collection
                      ? e.$watchCollection(t[p], m)
                      : e.$watch(u(t[p], m), null, l.literal)),
                      s.push(g);
                    break;
                  case "&":
                    if (((l = t.hasOwnProperty(p) ? u(t[p]) : $), l === $ && d))
                      break;
                    n[o] = function (t) {
                      return l(e, t);
                    };
                }
              }),
              s.length &&
                function () {
                  for (var e = 0, t = s.length; t > e; ++e) s[e]();
                }
            );
          }
          var se = function (e, t) {
            if (t) {
              var n,
                r,
                i,
                o = Object.keys(t);
              for (n = 0, r = o.length; r > n; n++)
                (i = o[n]), (this[i] = t[i]);
            } else this.$attr = {};
            this.$$element = e;
          };
          se.prototype = {
            $normalize: ht,
            $addClass: function (e) {
              e && e.length > 0 && O.addClass(this.$$element, e);
            },
            $removeClass: function (e) {
              e && e.length > 0 && O.removeClass(this.$$element, e);
            },
            $updateClass: function (e, t) {
              var n = pt(e, t);
              n && n.length && O.addClass(this.$$element, n);
              var r = pt(t, e);
              r && r.length && O.removeClass(this.$$element, r);
            },
            $set: function (e, t, n, r) {
              var a,
                s = this.$$element[0],
                u = ze(s, e),
                c = We(e),
                l = e;
              if (
                (u
                  ? (this.$$element.prop(e, t), (r = u))
                  : c && ((this[c] = t), (l = c)),
                (this[e] = t),
                r
                  ? (this.$attr[e] = r)
                  : ((r = this.$attr[e]),
                    r || (this.$attr[e] = r = ce(e, "-"))),
                (a = q(this.$$element)),
                ("a" === a && "href" === e) || ("img" === a && "src" === e))
              )
                this[e] = t = j(t, "src" === e);
              else if ("img" === a && "srcset" === e) {
                for (
                  var f = "",
                    h = Wr(t),
                    p = /(\s+\d+x\s*,|\s+\d+w\s*,|\s+,|,\s+)/,
                    d = /\s/.test(h) ? p : /(,)/,
                    $ = h.split(d),
                    v = Math.floor($.length / 2),
                    m = 0;
                  v > m;
                  m++
                ) {
                  var g = 2 * m;
                  (f += j(Wr($[g]), !0)), (f += " " + Wr($[g + 1]));
                }
                var b = Wr($[2 * m]).split(/\s/);
                (f += j(Wr(b[0]), !0)),
                  2 === b.length && (f += " " + Wr(b[1])),
                  (this[e] = t = f);
              }
              n !== !1 &&
                (null === t || y(t)
                  ? this.$$element.removeAttr(r)
                  : this.$$element.attr(r, t));
              var w = this.$$observers;
              w &&
                o(w[l], function (e) {
                  try {
                    e(t);
                  } catch (n) {
                    i(n);
                  }
                });
            },
            $observe: function (e, t) {
              var n = this,
                r = n.$$observers || (n.$$observers = ve()),
                i = r[e] || (r[e] = []);
              return (
                i.push(t),
                b.$evalAsync(function () {
                  i.$$inter || !n.hasOwnProperty(e) || y(n[e]) || t(n[e]);
                }),
                function () {
                  _(i, t);
                }
              );
            },
          };
          var ue = r.startSymbol(),
            le = r.endSymbol(),
            he =
              "{{" == ue && "}}" == le
                ? v
                : function (e) {
                    return e.replace(/\{\{/g, ue).replace(/}}/g, le);
                  },
            pe = /^ngAttr[A-Z]/,
            de = /^(.+)Start$/;
          return (
            (N.$$addBindingInfo = k
              ? function (e, t) {
                  var n = e.data("$binding") || [];
                  Lr(t) ? (n = n.concat(t)) : n.push(t), e.data("$binding", n);
                }
              : $),
            (N.$$addBindingClass = k
              ? function (e) {
                  T(e, "ng-binding");
                }
              : $),
            (N.$$addScopeInfo = k
              ? function (e, t, n, r) {
                  var i = n
                    ? r
                      ? "$isolateScopeNoTemplate"
                      : "$isolateScope"
                    : "$scope";
                  e.data(i, t);
                }
              : $),
            (N.$$addScopeClass = k
              ? function (e, t) {
                  T(e, t ? "ng-isolate-scope" : "ng-scope");
                }
              : $),
            N
          );
        },
      ]);
  }
  function ht(e) {
    return xe(e.replace(Ui, ""));
  }
  function pt(e, t) {
    var n = "",
      r = e.split(/\s+/),
      i = t.split(/\s+/);
    e: for (var o = 0; o < r.length; o++) {
      for (var a = r[o], s = 0; s < i.length; s++) if (a == i[s]) continue e;
      n += (n.length > 0 ? " " : "") + a;
    }
    return n;
  }
  function dt(e) {
    e = Nr(e);
    var t = e.length;
    if (1 >= t) return e;
    for (; t--; ) {
      var n = e[t];
      n.nodeType === ri && Dr.call(e, t, 1);
    }
    return e;
  }
  function $t(e, t) {
    if (t && S(t)) return t;
    if (S(e)) {
      var n = Bi.exec(e);
      if (n) return n[3];
    }
  }
  function vt() {
    var e = {},
      t = !1;
    (this.register = function (t, n) {
      pe(t, "controller"), w(t) ? f(e, t) : (e[t] = n);
    }),
      (this.allowGlobals = function () {
        t = !0;
      }),
      (this.$get = [
        "$injector",
        "$window",
        function (i, o) {
          function a(e, t, n, i) {
            if (!e || !w(e.$scope))
              throw r("$controller")(
                "noscp",
                "Cannot export controller '{0}' as '{1}'! No $scope object provided via `locals`.",
                i,
                t
              );
            e.$scope[t] = n;
          }
          return function (r, s, u, c) {
            var l, h, p, d;
            if (((u = u === !0), c && S(c) && (d = c), S(r))) {
              if (((h = r.match(Bi)), !h))
                throw Hi(
                  "ctrlfmt",
                  "Badly formed controller string '{0}'. Must match `__name__ as __id__` or `__name__`.",
                  r
                );
              (p = h[1]),
                (d = d || h[3]),
                (r = e.hasOwnProperty(p)
                  ? e[p]
                  : de(s.$scope, p, !0) || (t ? de(o, p, !0) : n)),
                he(r, p, !0);
            }
            if (u) {
              var $ = (Lr(r) ? r[r.length - 1] : r).prototype;
              (l = Object.create($ || null)), d && a(s, d, l, p || r.name);
              var v;
              return (v = f(
                function () {
                  var e = i.invoke(r, l, s, p);
                  return (
                    e !== l &&
                      (w(e) || A(e)) &&
                      ((l = e), d && a(s, d, l, p || r.name)),
                    l
                  );
                },
                { instance: l, identifier: d }
              ));
            }
            return (
              (l = i.instantiate(r, s, p)), d && a(s, d, l, p || r.name), l
            );
          };
        },
      ]);
  }
  function mt() {
    this.$get = [
      "$window",
      function (e) {
        return Nr(e.document);
      },
    ];
  }
  function gt() {
    this.$get = [
      "$log",
      function (e) {
        return function (t, n) {
          e.error.apply(e, arguments);
        };
      },
    ];
  }
  function yt(e) {
    return w(e) ? (C(e) ? e.toISOString() : G(e)) : e;
  }
  function bt() {
    this.$get = function () {
      return function (e) {
        if (!e) return "";
        var t = [];
        return (
          a(e, function (e, n) {
            null === e ||
              y(e) ||
              (Lr(e)
                ? o(e, function (e, r) {
                    t.push(re(n) + "=" + re(yt(e)));
                  })
                : t.push(re(n) + "=" + re(yt(e))));
          }),
          t.join("&")
        );
      };
    };
  }
  function wt() {
    this.$get = function () {
      return function (e) {
        function t(e, r, i) {
          null === e ||
            y(e) ||
            (Lr(e)
              ? o(e, function (e, n) {
                  t(e, r + "[" + (w(e) ? n : "") + "]");
                })
              : w(e) && !C(e)
              ? a(e, function (e, n) {
                  t(e, r + (i ? "" : "[") + n + (i ? "" : "]"));
                })
              : n.push(re(r) + "=" + re(yt(e))));
        }
        if (!e) return "";
        var n = [];
        return t(e, "", !0), n.join("&");
      };
    };
  }
  function xt(e, t) {
    if (S(e)) {
      var n = e.replace(Yi, "").trim();
      if (n) {
        var r = t("Content-Type");
        ((r && 0 === r.indexOf(zi)) || St(n)) && (e = J(n));
      }
    }
    return e;
  }
  function St(e) {
    var t = e.match(Gi);
    return t && Ji[t[0]].test(e);
  }
  function Et(e) {
    function t(e, t) {
      e && (r[e] = r[e] ? r[e] + ", " + t : t);
    }
    var n,
      r = ve();
    return (
      S(e)
        ? o(e.split("\n"), function (e) {
            (n = e.indexOf(":")),
              t(Ar(Wr(e.substr(0, n))), Wr(e.substr(n + 1)));
          })
        : w(e) &&
          o(e, function (e, n) {
            t(Ar(n), Wr(e));
          }),
      r
    );
  }
  function Ct(e) {
    var t;
    return function (n) {
      if ((t || (t = Et(e)), n)) {
        var r = t[Ar(n)];
        return void 0 === r && (r = null), r;
      }
      return t;
    };
  }
  function At(e, t, n, r) {
    return A(r)
      ? r(e, t, n)
      : (o(r, function (r) {
          e = r(e, t, n);
        }),
        e);
  }
  function kt(e) {
    return e >= 200 && 300 > e;
  }
  function Ot() {
    var e = (this.defaults = {
        transformResponse: [xt],
        transformRequest: [
          function (e) {
            return !w(e) || j(e) || N(e) || T(e) ? e : G(e);
          },
        ],
        headers: {
          common: { Accept: "application/json, text/plain, */*" },
          post: U(Wi),
          put: U(Wi),
          patch: U(Wi),
        },
        xsrfCookieName: "XSRF-TOKEN",
        xsrfHeaderName: "X-XSRF-TOKEN",
        paramSerializer: "$httpParamSerializer",
      }),
      t = !1;
    this.useApplyAsync = function (e) {
      return b(e) ? ((t = !!e), this) : t;
    };
    var i = !0;
    this.useLegacyPromiseExtensions = function (e) {
      return b(e) ? ((i = !!e), this) : i;
    };
    var a = (this.interceptors = []);
    this.$get = [
      "$httpBackend",
      "$$cookieReader",
      "$cacheFactory",
      "$rootScope",
      "$q",
      "$injector",
      function (s, u, c, l, h, p) {
        function d(t) {
          function a(e) {
            var t = f({}, e);
            return (
              (t.data = At(e.data, e.headers, e.status, c.transformResponse)),
              kt(e.status) ? t : h.reject(t)
            );
          }
          function s(e, t) {
            var n,
              r = {};
            return (
              o(e, function (e, i) {
                A(e) ? ((n = e(t)), null != n && (r[i] = n)) : (r[i] = e);
              }),
              r
            );
          }
          function u(t) {
            var n,
              r,
              i,
              o = e.headers,
              a = f({}, t.headers);
            o = f({}, o.common, o[Ar(t.method)]);
            e: for (n in o) {
              r = Ar(n);
              for (i in a) if (Ar(i) === r) continue e;
              a[n] = o[n];
            }
            return s(a, U(t));
          }
          if (!Ur.isObject(t))
            throw r("$http")(
              "badreq",
              "Http request configuration must be an object.  Received: {0}",
              t
            );
          if (!S(t.url))
            throw r("$http")(
              "badreq",
              "Http request configuration url must be a string.  Received: {0}",
              t.url
            );
          var c = f(
            {
              method: "get",
              transformRequest: e.transformRequest,
              transformResponse: e.transformResponse,
              paramSerializer: e.paramSerializer,
            },
            t
          );
          (c.headers = u(t)),
            (c.method = Or(c.method)),
            (c.paramSerializer = S(c.paramSerializer)
              ? p.get(c.paramSerializer)
              : c.paramSerializer);
          var l = function (t) {
              var r = t.headers,
                i = At(t.data, Ct(r), n, t.transformRequest);
              return (
                y(i) &&
                  o(r, function (e, t) {
                    "content-type" === Ar(t) && delete r[t];
                  }),
                y(t.withCredentials) &&
                  !y(e.withCredentials) &&
                  (t.withCredentials = e.withCredentials),
                m(t, i).then(a, a)
              );
            },
            d = [l, n],
            $ = h.when(c);
          for (
            o(E, function (e) {
              (e.request || e.requestError) &&
                d.unshift(e.request, e.requestError),
                (e.response || e.responseError) &&
                  d.push(e.response, e.responseError);
            });
            d.length;

          ) {
            var v = d.shift(),
              g = d.shift();
            $ = $.then(v, g);
          }
          return (
            i
              ? (($.success = function (e) {
                  return (
                    he(e, "fn"),
                    $.then(function (t) {
                      e(t.data, t.status, t.headers, c);
                    }),
                    $
                  );
                }),
                ($.error = function (e) {
                  return (
                    he(e, "fn"),
                    $.then(null, function (t) {
                      e(t.data, t.status, t.headers, c);
                    }),
                    $
                  );
                }))
              : (($.success = Zi("success")), ($.error = Zi("error"))),
            $
          );
        }
        function $(e) {
          o(arguments, function (e) {
            d[e] = function (t, n) {
              return d(f({}, n || {}, { method: e, url: t }));
            };
          });
        }
        function v(e) {
          o(arguments, function (e) {
            d[e] = function (t, n, r) {
              return d(f({}, r || {}, { method: e, url: t, data: n }));
            };
          });
        }
        function m(r, i) {
          function o(e, n, r, i) {
            function o() {
              a(n, e, r, i);
            }
            p && (kt(e) ? p.put(E, [e, n, Et(r), i]) : p.remove(E)),
              t ? l.$applyAsync(o) : (o(), l.$$phase || l.$apply());
          }
          function a(e, t, n, i) {
            (t = t >= -1 ? t : 0),
              (kt(t) ? v.resolve : v.reject)({
                data: e,
                status: t,
                headers: Ct(n),
                config: r,
                statusText: i,
              });
          }
          function c(e) {
            a(e.data, e.status, U(e.headers()), e.statusText);
          }
          function f() {
            var e = d.pendingRequests.indexOf(r);
            -1 !== e && d.pendingRequests.splice(e, 1);
          }
          var p,
            $,
            v = h.defer(),
            m = v.promise,
            S = r.headers,
            E = g(r.url, r.paramSerializer(r.params));
          if (
            (d.pendingRequests.push(r),
            m.then(f, f),
            (!r.cache && !e.cache) ||
              r.cache === !1 ||
              ("GET" !== r.method && "JSONP" !== r.method) ||
              (p = w(r.cache) ? r.cache : w(e.cache) ? e.cache : x),
            p &&
              (($ = p.get(E)),
              b($)
                ? P($)
                  ? $.then(c, c)
                  : Lr($)
                  ? a($[1], $[0], U($[2]), $[3])
                  : a($, 200, {}, "OK")
                : p.put(E, m)),
            y($))
          ) {
            var C = jn(r.url) ? u()[r.xsrfCookieName || e.xsrfCookieName] : n;
            C && (S[r.xsrfHeaderName || e.xsrfHeaderName] = C),
              s(
                r.method,
                E,
                i,
                o,
                S,
                r.timeout,
                r.withCredentials,
                r.responseType
              );
          }
          return m;
        }
        function g(e, t) {
          return (
            t.length > 0 && (e += (-1 == e.indexOf("?") ? "?" : "&") + t), e
          );
        }
        var x = c("$http");
        e.paramSerializer = S(e.paramSerializer)
          ? p.get(e.paramSerializer)
          : e.paramSerializer;
        var E = [];
        return (
          o(a, function (e) {
            E.unshift(S(e) ? p.get(e) : p.invoke(e));
          }),
          (d.pendingRequests = []),
          $("get", "delete", "head", "jsonp"),
          v("post", "put", "patch"),
          (d.defaults = e),
          d
        );
      },
    ];
  }
  function Mt() {
    this.$get = function () {
      return function () {
        return new e.XMLHttpRequest();
      };
    };
  }
  function jt() {
    this.$get = [
      "$browser",
      "$window",
      "$document",
      "$xhrFactory",
      function (e, t, n, r) {
        return Tt(e, r, e.defer, t.angular.callbacks, n[0]);
      },
    ];
  }
  function Tt(e, t, n, r, i) {
    function a(e, t, n) {
      var o = i.createElement("script"),
        a = null;
      return (
        (o.type = "text/javascript"),
        (o.src = e),
        (o.async = !0),
        (a = function (e) {
          li(o, "load", a),
            li(o, "error", a),
            i.body.removeChild(o),
            (o = null);
          var s = -1,
            u = "unknown";
          e &&
            ("load" !== e.type || r[t].called || (e = { type: "error" }),
            (u = e.type),
            (s = "error" === e.type ? 404 : 200)),
            n && n(s, u);
        }),
        ci(o, "load", a),
        ci(o, "error", a),
        i.body.appendChild(o),
        a
      );
    }
    return function (i, s, u, c, l, f, h, p) {
      function d() {
        g && g(), w && w.abort();
      }
      function v(t, r, i, o, a) {
        b(E) && n.cancel(E),
          (g = w = null),
          t(r, i, o, a),
          e.$$completeOutstandingRequest($);
      }
      if (
        (e.$$incOutstandingRequestCount(), (s = s || e.url()), "jsonp" == Ar(i))
      ) {
        var m = "_" + (r.counter++).toString(36);
        r[m] = function (e) {
          (r[m].data = e), (r[m].called = !0);
        };
        var g = a(
          s.replace("JSON_CALLBACK", "angular.callbacks." + m),
          m,
          function (e, t) {
            v(c, e, r[m].data, "", t), (r[m] = $);
          }
        );
      } else {
        var w = t(i, s);
        w.open(i, s, !0),
          o(l, function (e, t) {
            b(e) && w.setRequestHeader(t, e);
          }),
          (w.onload = function () {
            var e = w.statusText || "",
              t = "response" in w ? w.response : w.responseText,
              n = 1223 === w.status ? 204 : w.status;
            0 === n && (n = t ? 200 : "file" == Mn(s).protocol ? 404 : 0),
              v(c, n, t, w.getAllResponseHeaders(), e);
          });
        var x = function () {
          v(c, -1, null, null, "");
        };
        if (
          ((w.onerror = x), (w.onabort = x), h && (w.withCredentials = !0), p)
        )
          try {
            w.responseType = p;
          } catch (S) {
            if ("json" !== p) throw S;
          }
        w.send(y(u) ? null : u);
      }
      if (f > 0) var E = n(d, f);
      else P(f) && f.then(d);
    };
  }
  function Nt() {
    var e = "{{",
      t = "}}";
    (this.startSymbol = function (t) {
      return t ? ((e = t), this) : e;
    }),
      (this.endSymbol = function (e) {
        return e ? ((t = e), this) : t;
      }),
      (this.$get = [
        "$parse",
        "$exceptionHandler",
        "$sce",
        function (n, r, i) {
          function o(e) {
            return "\\\\\\" + e;
          }
          function a(n) {
            return n.replace(h, e).replace(p, t);
          }
          function s(e) {
            if (null == e) return "";
            switch (typeof e) {
              case "string":
                break;
              case "number":
                e = "" + e;
                break;
              default:
                e = G(e);
            }
            return e;
          }
          function u(o, u, h, p) {
            function d(e) {
              try {
                return (e = O(e)), p && !b(e) ? e : s(e);
              } catch (t) {
                r(Xi.interr(o, t));
              }
            }
            p = !!p;
            for (
              var $, v, m, g = 0, w = [], x = [], S = o.length, E = [], C = [];
              S > g;

            ) {
              if (
                -1 == ($ = o.indexOf(e, g)) ||
                -1 == (v = o.indexOf(t, $ + c))
              ) {
                g !== S && E.push(a(o.substring(g)));
                break;
              }
              g !== $ && E.push(a(o.substring(g, $))),
                (m = o.substring($ + c, v)),
                w.push(m),
                x.push(n(m, d)),
                (g = v + l),
                C.push(E.length),
                E.push("");
            }
            if ((h && E.length > 1 && Xi.throwNoconcat(o), !u || w.length)) {
              var k = function (e) {
                  for (var t = 0, n = w.length; n > t; t++) {
                    if (p && y(e[t])) return;
                    E[C[t]] = e[t];
                  }
                  return E.join("");
                },
                O = function (e) {
                  return h ? i.getTrusted(h, e) : i.valueOf(e);
                };
              return f(
                function (e) {
                  var t = 0,
                    n = w.length,
                    i = new Array(n);
                  try {
                    for (; n > t; t++) i[t] = x[t](e);
                    return k(i);
                  } catch (a) {
                    r(Xi.interr(o, a));
                  }
                },
                {
                  exp: o,
                  expressions: w,
                  $$watchDelegate: function (e, t) {
                    var n;
                    return e.$watchGroup(x, function (r, i) {
                      var o = k(r);
                      A(t) && t.call(this, o, r !== i ? n : o, e), (n = o);
                    });
                  },
                }
              );
            }
          }
          var c = e.length,
            l = t.length,
            h = new RegExp(e.replace(/./g, o), "g"),
            p = new RegExp(t.replace(/./g, o), "g");
          return (
            (u.startSymbol = function () {
              return e;
            }),
            (u.endSymbol = function () {
              return t;
            }),
            u
          );
        },
      ]);
  }
  function Vt() {
    this.$get = [
      "$rootScope",
      "$window",
      "$q",
      "$$q",
      function (e, t, n, r) {
        function i(i, a, s, u) {
          var c = arguments.length > 4,
            l = c ? L(arguments, 4) : [],
            f = t.setInterval,
            h = t.clearInterval,
            p = 0,
            d = b(u) && !u,
            $ = (d ? r : n).defer(),
            v = $.promise;
          return (
            (s = b(s) ? s : 0),
            v.then(
              null,
              null,
              c
                ? function () {
                    i.apply(null, l);
                  }
                : i
            ),
            (v.$$intervalId = f(function () {
              $.notify(p++),
                s > 0 &&
                  p >= s &&
                  ($.resolve(p), h(v.$$intervalId), delete o[v.$$intervalId]),
                d || e.$apply();
            }, a)),
            (o[v.$$intervalId] = $),
            v
          );
        }
        var o = {};
        return (
          (i.cancel = function (e) {
            return e && e.$$intervalId in o
              ? (o[e.$$intervalId].reject("canceled"),
                t.clearInterval(e.$$intervalId),
                delete o[e.$$intervalId],
                !0)
              : !1;
          }),
          i
        );
      },
    ];
  }
  function Pt(e) {
    for (var t = e.split("/"), n = t.length; n--; ) t[n] = ne(t[n]);
    return t.join("/");
  }
  function It(e, t) {
    var n = Mn(e);
    (t.$$protocol = n.protocol),
      (t.$$host = n.hostname),
      (t.$$port = p(n.port) || eo[n.protocol] || null);
  }
  function Dt(e, t) {
    var n = "/" !== e.charAt(0);
    n && (e = "/" + e);
    var r = Mn(e);
    (t.$$path = decodeURIComponent(
      n && "/" === r.pathname.charAt(0) ? r.pathname.substring(1) : r.pathname
    )),
      (t.$$search = ee(r.search)),
      (t.$$hash = decodeURIComponent(r.hash)),
      t.$$path && "/" != t.$$path.charAt(0) && (t.$$path = "/" + t.$$path);
  }
  function Rt(e, t) {
    return 0 === t.indexOf(e) ? t.substr(e.length) : void 0;
  }
  function qt(e) {
    var t = e.indexOf("#");
    return -1 == t ? e : e.substr(0, t);
  }
  function _t(e) {
    return e.replace(/(#.+)|#$/, "$1");
  }
  function Ft(e) {
    return e.substr(0, qt(e).lastIndexOf("/") + 1);
  }
  function Ut(e) {
    return e.substring(0, e.indexOf("/", e.indexOf("//") + 2));
  }
  function Ht(e, t, n) {
    (this.$$html5 = !0),
      (n = n || ""),
      It(e, this),
      (this.$$parse = function (e) {
        var n = Rt(t, e);
        if (!S(n))
          throw to(
            "ipthprfx",
            'Invalid url "{0}", missing path prefix "{1}".',
            e,
            t
          );
        Dt(n, this), this.$$path || (this.$$path = "/"), this.$$compose();
      }),
      (this.$$compose = function () {
        var e = te(this.$$search),
          n = this.$$hash ? "#" + ne(this.$$hash) : "";
        (this.$$url = Pt(this.$$path) + (e ? "?" + e : "") + n),
          (this.$$absUrl = t + this.$$url.substr(1));
      }),
      (this.$$parseLinkUrl = function (r, i) {
        if (i && "#" === i[0]) return this.hash(i.slice(1)), !0;
        var o, a, s;
        return (
          b((o = Rt(e, r)))
            ? ((a = o), (s = b((o = Rt(n, o))) ? t + (Rt("/", o) || o) : e + a))
            : b((o = Rt(t, r)))
            ? (s = t + o)
            : t == r + "/" && (s = t),
          s && this.$$parse(s),
          !!s
        );
      });
  }
  function Bt(e, t, n) {
    It(e, this),
      (this.$$parse = function (r) {
        function i(e, t, n) {
          var r,
            i = /^\/[A-Z]:(\/.*)/;
          return (
            0 === t.indexOf(n) && (t = t.replace(n, "")),
            i.exec(t) ? e : ((r = i.exec(e)), r ? r[1] : e)
          );
        }
        var o,
          a = Rt(e, r) || Rt(t, r);
        y(a) || "#" !== a.charAt(0)
          ? this.$$html5
            ? (o = a)
            : ((o = ""), y(a) && ((e = r), this.replace()))
          : ((o = Rt(n, a)), y(o) && (o = a)),
          Dt(o, this),
          (this.$$path = i(this.$$path, o, e)),
          this.$$compose();
      }),
      (this.$$compose = function () {
        var t = te(this.$$search),
          r = this.$$hash ? "#" + ne(this.$$hash) : "";
        (this.$$url = Pt(this.$$path) + (t ? "?" + t : "") + r),
          (this.$$absUrl = e + (this.$$url ? n + this.$$url : ""));
      }),
      (this.$$parseLinkUrl = function (t, n) {
        return qt(e) == qt(t) ? (this.$$parse(t), !0) : !1;
      });
  }
  function Lt(e, t, n) {
    (this.$$html5 = !0),
      Bt.apply(this, arguments),
      (this.$$parseLinkUrl = function (r, i) {
        if (i && "#" === i[0]) return this.hash(i.slice(1)), !0;
        var o, a;
        return (
          e == qt(r)
            ? (o = r)
            : (a = Rt(t, r))
            ? (o = e + n + a)
            : t === r + "/" && (o = t),
          o && this.$$parse(o),
          !!o
        );
      }),
      (this.$$compose = function () {
        var t = te(this.$$search),
          r = this.$$hash ? "#" + ne(this.$$hash) : "";
        (this.$$url = Pt(this.$$path) + (t ? "?" + t : "") + r),
          (this.$$absUrl = e + n + this.$$url);
      });
  }
  function zt(e) {
    return function () {
      return this[e];
    };
  }
  function Wt(e, t) {
    return function (n) {
      return y(n) ? this[e] : ((this[e] = t(n)), this.$$compose(), this);
    };
  }
  function Gt() {
    var e = "",
      t = { enabled: !1, requireBase: !0, rewriteLinks: !0 };
    (this.hashPrefix = function (t) {
      return b(t) ? ((e = t), this) : e;
    }),
      (this.html5Mode = function (e) {
        return V(e)
          ? ((t.enabled = e), this)
          : w(e)
          ? (V(e.enabled) && (t.enabled = e.enabled),
            V(e.requireBase) && (t.requireBase = e.requireBase),
            V(e.rewriteLinks) && (t.rewriteLinks = e.rewriteLinks),
            this)
          : t;
      }),
      (this.$get = [
        "$rootScope",
        "$browser",
        "$sniffer",
        "$rootElement",
        "$window",
        function (n, r, i, o, a) {
          function s(e, t, n) {
            var i = c.url(),
              o = c.$$state;
            try {
              r.url(e, t, n), (c.$$state = r.state());
            } catch (a) {
              throw (c.url(i), (c.$$state = o), a);
            }
          }
          function u(e, t) {
            n.$broadcast("$locationChangeSuccess", c.absUrl(), e, c.$$state, t);
          }
          var c,
            l,
            f,
            h = r.baseHref(),
            p = r.url();
          if (t.enabled) {
            if (!h && t.requireBase)
              throw to(
                "nobase",
                "$location in HTML5 mode requires a <base> tag to be present!"
              );
            (f = Ut(p) + (h || "/")), (l = i.history ? Ht : Lt);
          } else (f = qt(p)), (l = Bt);
          var d = Ft(f);
          (c = new l(f, d, "#" + e)),
            c.$$parseLinkUrl(p, p),
            (c.$$state = r.state());
          var $ = /^\s*(javascript|mailto):/i;
          o.on("click", function (e) {
            if (
              t.rewriteLinks &&
              !e.ctrlKey &&
              !e.metaKey &&
              !e.shiftKey &&
              2 != e.which &&
              2 != e.button
            ) {
              for (var i = Nr(e.target); "a" !== q(i[0]); )
                if (i[0] === o[0] || !(i = i.parent())[0]) return;
              var s = i.prop("href"),
                u = i.attr("href") || i.attr("xlink:href");
              w(s) &&
                "[object SVGAnimatedString]" === s.toString() &&
                (s = Mn(s.animVal).href),
                $.test(s) ||
                  !s ||
                  i.attr("target") ||
                  e.isDefaultPrevented() ||
                  (c.$$parseLinkUrl(s, u) &&
                    (e.preventDefault(),
                    c.absUrl() != r.url() &&
                      (n.$apply(),
                      (a.angular["ff-684208-preventDefault"] = !0))));
            }
          }),
            _t(c.absUrl()) != _t(p) && r.url(c.absUrl(), !0);
          var v = !0;
          return (
            r.onUrlChange(function (e, t) {
              return y(Rt(d, e))
                ? void (a.location.href = e)
                : (n.$evalAsync(function () {
                    var r,
                      i = c.absUrl(),
                      o = c.$$state;
                    (e = _t(e)),
                      c.$$parse(e),
                      (c.$$state = t),
                      (r = n.$broadcast(
                        "$locationChangeStart",
                        e,
                        i,
                        t,
                        o
                      ).defaultPrevented),
                      c.absUrl() === e &&
                        (r
                          ? (c.$$parse(i), (c.$$state = o), s(i, !1, o))
                          : ((v = !1), u(i, o)));
                  }),
                  void (n.$$phase || n.$digest()));
            }),
            n.$watch(function () {
              var e = _t(r.url()),
                t = _t(c.absUrl()),
                o = r.state(),
                a = c.$$replace,
                l = e !== t || (c.$$html5 && i.history && o !== c.$$state);
              (v || l) &&
                ((v = !1),
                n.$evalAsync(function () {
                  var t = c.absUrl(),
                    r = n.$broadcast(
                      "$locationChangeStart",
                      t,
                      e,
                      c.$$state,
                      o
                    ).defaultPrevented;
                  c.absUrl() === t &&
                    (r
                      ? (c.$$parse(e), (c.$$state = o))
                      : (l && s(t, a, o === c.$$state ? null : c.$$state),
                        u(e, o)));
                })),
                (c.$$replace = !1);
            }),
            c
          );
        },
      ]);
  }
  function Jt() {
    var e = !0,
      t = this;
    (this.debugEnabled = function (t) {
      return b(t) ? ((e = t), this) : e;
    }),
      (this.$get = [
        "$window",
        function (n) {
          function r(e) {
            return (
              e instanceof Error &&
                (e.stack
                  ? (e =
                      e.message && -1 === e.stack.indexOf(e.message)
                        ? "Error: " + e.message + "\n" + e.stack
                        : e.stack)
                  : e.sourceURL &&
                    (e = e.message + "\n" + e.sourceURL + ":" + e.line)),
              e
            );
          }
          function i(e) {
            var t = n.console || {},
              i = t[e] || t.log || $,
              a = !1;
            try {
              a = !!i.apply;
            } catch (s) {}
            return a
              ? function () {
                  var e = [];
                  return (
                    o(arguments, function (t) {
                      e.push(r(t));
                    }),
                    i.apply(t, e)
                  );
                }
              : function (e, t) {
                  i(e, null == t ? "" : t);
                };
          }
          return {
            log: i("log"),
            info: i("info"),
            warn: i("warn"),
            error: i("error"),
            debug: (function () {
              var n = i("debug");
              return function () {
                e && n.apply(t, arguments);
              };
            })(),
          };
        },
      ]);
  }
  function Yt(e, t) {
    if (
      "__defineGetter__" === e ||
      "__defineSetter__" === e ||
      "__lookupGetter__" === e ||
      "__lookupSetter__" === e ||
      "__proto__" === e
    )
      throw ro(
        "isecfld",
        "Attempting to access a disallowed field in Angular expressions! Expression: {0}",
        t
      );
    return e;
  }
  function Kt(e, t) {
    if (((e += ""), !S(e)))
      throw ro(
        "iseccst",
        "Cannot convert object to primitive value! Expression: {0}",
        t
      );
    return e;
  }
  function Zt(e, t) {
    if (e) {
      if (e.constructor === e)
        throw ro(
          "isecfn",
          "Referencing Function in Angular expressions is disallowed! Expression: {0}",
          t
        );
      if (e.window === e)
        throw ro(
          "isecwindow",
          "Referencing the Window in Angular expressions is disallowed! Expression: {0}",
          t
        );
      if (e.children && (e.nodeName || (e.prop && e.attr && e.find)))
        throw ro(
          "isecdom",
          "Referencing DOM nodes in Angular expressions is disallowed! Expression: {0}",
          t
        );
      if (e === Object)
        throw ro(
          "isecobj",
          "Referencing Object in Angular expressions is disallowed! Expression: {0}",
          t
        );
    }
    return e;
  }
  function Xt(e, t) {
    if (e) {
      if (e.constructor === e)
        throw ro(
          "isecfn",
          "Referencing Function in Angular expressions is disallowed! Expression: {0}",
          t
        );
      if (e === io || e === oo || e === ao)
        throw ro(
          "isecff",
          "Referencing call, apply or bind in Angular expressions is disallowed! Expression: {0}",
          t
        );
    }
  }
  function Qt(e, t) {
    if (
      e &&
      (e === (0).constructor ||
        e === (!1).constructor ||
        e === "".constructor ||
        e === {}.constructor ||
        e === [].constructor ||
        e === Function.constructor)
    )
      throw ro(
        "isecaf",
        "Assigning to a constructor is disallowed! Expression: {0}",
        t
      );
  }
  function en(e, t) {
    return "undefined" != typeof e ? e : t;
  }
  function tn(e, t) {
    return "undefined" == typeof e ? t : "undefined" == typeof t ? e : e + t;
  }
  function nn(e, t) {
    var n = e(t);
    return !n.$stateful;
  }
  function rn(e, t) {
    var n, r;
    switch (e.type) {
      case lo.Program:
        (n = !0),
          o(e.body, function (e) {
            rn(e.expression, t), (n = n && e.expression.constant);
          }),
          (e.constant = n);
        break;
      case lo.Literal:
        (e.constant = !0), (e.toWatch = []);
        break;
      case lo.UnaryExpression:
        rn(e.argument, t),
          (e.constant = e.argument.constant),
          (e.toWatch = e.argument.toWatch);
        break;
      case lo.BinaryExpression:
        rn(e.left, t),
          rn(e.right, t),
          (e.constant = e.left.constant && e.right.constant),
          (e.toWatch = e.left.toWatch.concat(e.right.toWatch));
        break;
      case lo.LogicalExpression:
        rn(e.left, t),
          rn(e.right, t),
          (e.constant = e.left.constant && e.right.constant),
          (e.toWatch = e.constant ? [] : [e]);
        break;
      case lo.ConditionalExpression:
        rn(e.test, t),
          rn(e.alternate, t),
          rn(e.consequent, t),
          (e.constant =
            e.test.constant && e.alternate.constant && e.consequent.constant),
          (e.toWatch = e.constant ? [] : [e]);
        break;
      case lo.Identifier:
        (e.constant = !1), (e.toWatch = [e]);
        break;
      case lo.MemberExpression:
        rn(e.object, t),
          e.computed && rn(e.property, t),
          (e.constant =
            e.object.constant && (!e.computed || e.property.constant)),
          (e.toWatch = [e]);
        break;
      case lo.CallExpression:
        (n = e.filter ? nn(t, e.callee.name) : !1),
          (r = []),
          o(e.arguments, function (e) {
            rn(e, t),
              (n = n && e.constant),
              e.constant || r.push.apply(r, e.toWatch);
          }),
          (e.constant = n),
          (e.toWatch = e.filter && nn(t, e.callee.name) ? r : [e]);
        break;
      case lo.AssignmentExpression:
        rn(e.left, t),
          rn(e.right, t),
          (e.constant = e.left.constant && e.right.constant),
          (e.toWatch = [e]);
        break;
      case lo.ArrayExpression:
        (n = !0),
          (r = []),
          o(e.elements, function (e) {
            rn(e, t),
              (n = n && e.constant),
              e.constant || r.push.apply(r, e.toWatch);
          }),
          (e.constant = n),
          (e.toWatch = r);
        break;
      case lo.ObjectExpression:
        (n = !0),
          (r = []),
          o(e.properties, function (e) {
            rn(e.value, t),
              (n = n && e.value.constant),
              e.value.constant || r.push.apply(r, e.value.toWatch);
          }),
          (e.constant = n),
          (e.toWatch = r);
        break;
      case lo.ThisExpression:
        (e.constant = !1), (e.toWatch = []);
    }
  }
  function on(e) {
    if (1 == e.length) {
      var t = e[0].expression,
        r = t.toWatch;
      return 1 !== r.length ? r : r[0] !== t ? r : n;
    }
  }
  function an(e) {
    return e.type === lo.Identifier || e.type === lo.MemberExpression;
  }
  function sn(e) {
    return 1 === e.body.length && an(e.body[0].expression)
      ? {
          type: lo.AssignmentExpression,
          left: e.body[0].expression,
          right: { type: lo.NGValueParameter },
          operator: "=",
        }
      : void 0;
  }
  function un(e) {
    return (
      0 === e.body.length ||
      (1 === e.body.length &&
        (e.body[0].expression.type === lo.Literal ||
          e.body[0].expression.type === lo.ArrayExpression ||
          e.body[0].expression.type === lo.ObjectExpression))
    );
  }
  function cn(e) {
    return e.constant;
  }
  function ln(e, t) {
    (this.astBuilder = e), (this.$filter = t);
  }
  function fn(e, t) {
    (this.astBuilder = e), (this.$filter = t);
  }
  function hn(e) {
    return "constructor" == e;
  }
  function pn(e) {
    return A(e.valueOf) ? e.valueOf() : ho.call(e);
  }
  function dn() {
    var e = ve(),
      t = ve();
    this.$get = [
      "$filter",
      function (r) {
        function i(n, i, o) {
          var s, p, g;
          switch (((o = o || m), typeof n)) {
            case "string":
              (n = n.trim()), (g = n);
              var y = o ? t : e;
              if (((s = y[g]), !s)) {
                ":" === n.charAt(0) &&
                  ":" === n.charAt(1) &&
                  ((p = !0), (n = n.substring(2)));
                var b = o ? v : d,
                  w = new co(b),
                  x = new fo(w, r, b);
                (s = x.parse(n)),
                  s.constant
                    ? (s.$$watchDelegate = f)
                    : p
                    ? (s.$$watchDelegate = s.literal ? l : c)
                    : s.inputs && (s.$$watchDelegate = u),
                  o && (s = a(s)),
                  (y[g] = s);
              }
              return h(s, i);
            case "function":
              return h(n, i);
            default:
              return h($, i);
          }
        }
        function a(e) {
          function t(t, n, r, i) {
            var o = m;
            m = !0;
            try {
              return e(t, n, r, i);
            } finally {
              m = o;
            }
          }
          if (!e) return e;
          (t.$$watchDelegate = e.$$watchDelegate),
            (t.assign = a(e.assign)),
            (t.constant = e.constant),
            (t.literal = e.literal);
          for (var n = 0; e.inputs && n < e.inputs.length; ++n)
            e.inputs[n] = a(e.inputs[n]);
          return (t.inputs = e.inputs), t;
        }
        function s(e, t) {
          return null == e || null == t
            ? e === t
            : "object" == typeof e && ((e = pn(e)), "object" == typeof e)
            ? !1
            : e === t || (e !== e && t !== t);
        }
        function u(e, t, r, i, o) {
          var a,
            u = i.inputs;
          if (1 === u.length) {
            var c = s;
            return (
              (u = u[0]),
              e.$watch(
                function (e) {
                  var t = u(e);
                  return (
                    s(t, c) || ((a = i(e, n, n, [t])), (c = t && pn(t))), a
                  );
                },
                t,
                r,
                o
              )
            );
          }
          for (var l = [], f = [], h = 0, p = u.length; p > h; h++)
            (l[h] = s), (f[h] = null);
          return e.$watch(
            function (e) {
              for (var t = !1, r = 0, o = u.length; o > r; r++) {
                var c = u[r](e);
                (t || (t = !s(c, l[r]))) && ((f[r] = c), (l[r] = c && pn(c)));
              }
              return t && (a = i(e, n, n, f)), a;
            },
            t,
            r,
            o
          );
        }
        function c(e, t, n, r) {
          var i, o;
          return (i = e.$watch(
            function (e) {
              return r(e);
            },
            function (e, n, r) {
              (o = e),
                A(t) && t.apply(this, arguments),
                b(e) &&
                  r.$$postDigest(function () {
                    b(o) && i();
                  });
            },
            n
          ));
        }
        function l(e, t, n, r) {
          function i(e) {
            var t = !0;
            return (
              o(e, function (e) {
                b(e) || (t = !1);
              }),
              t
            );
          }
          var a, s;
          return (a = e.$watch(
            function (e) {
              return r(e);
            },
            function (e, n, r) {
              (s = e),
                A(t) && t.call(this, e, n, r),
                i(e) &&
                  r.$$postDigest(function () {
                    i(s) && a();
                  });
            },
            n
          ));
        }
        function f(e, t, n, r) {
          var i;
          return (i = e.$watch(
            function (e) {
              return r(e);
            },
            function (e, n, r) {
              A(t) && t.apply(this, arguments), i();
            },
            n
          ));
        }
        function h(e, t) {
          if (!t) return e;
          var n = e.$$watchDelegate,
            r = !1,
            i = n !== l && n !== c,
            o = i
              ? function (n, i, o, a) {
                  var s = r && a ? a[0] : e(n, i, o, a);
                  return t(s, n, i);
                }
              : function (n, r, i, o) {
                  var a = e(n, r, i, o),
                    s = t(a, n, r);
                  return b(a) ? s : a;
                };
          return (
            e.$$watchDelegate && e.$$watchDelegate !== u
              ? (o.$$watchDelegate = e.$$watchDelegate)
              : t.$stateful ||
                ((o.$$watchDelegate = u),
                (r = !e.inputs),
                (o.inputs = e.inputs ? e.inputs : [e])),
            o
          );
        }
        var p = Jr().noUnsafeEval,
          d = { csp: p, expensiveChecks: !1 },
          v = { csp: p, expensiveChecks: !0 },
          m = !1;
        return (
          (i.$$runningExpensiveChecks = function () {
            return m;
          }),
          i
        );
      },
    ];
  }
  function $n() {
    this.$get = [
      "$rootScope",
      "$exceptionHandler",
      function (e, t) {
        return mn(function (t) {
          e.$evalAsync(t);
        }, t);
      },
    ];
  }
  function vn() {
    this.$get = [
      "$browser",
      "$exceptionHandler",
      function (e, t) {
        return mn(function (t) {
          e.defer(t);
        }, t);
      },
    ];
  }
  function mn(e, t) {
    function i(e, t, n) {
      function r(t) {
        return function (n) {
          i || ((i = !0), t.call(e, n));
        };
      }
      var i = !1;
      return [r(t), r(n)];
    }
    function a() {
      this.$$state = { status: 0 };
    }
    function s(e, t) {
      return function (n) {
        t.call(e, n);
      };
    }
    function u(e) {
      var r, i, o;
      (o = e.pending), (e.processScheduled = !1), (e.pending = n);
      for (var a = 0, s = o.length; s > a; ++a) {
        (i = o[a][0]), (r = o[a][e.status]);
        try {
          A(r)
            ? i.resolve(r(e.value))
            : 1 === e.status
            ? i.resolve(e.value)
            : i.reject(e.value);
        } catch (u) {
          i.reject(u), t(u);
        }
      }
    }
    function c(t) {
      !t.processScheduled &&
        t.pending &&
        ((t.processScheduled = !0),
        e(function () {
          u(t);
        }));
    }
    function l() {
      (this.promise = new a()),
        (this.resolve = s(this, this.resolve)),
        (this.reject = s(this, this.reject)),
        (this.notify = s(this, this.notify));
    }
    function h(e) {
      var t = new l(),
        n = 0,
        r = Lr(e) ? [] : {};
      return (
        o(e, function (e, i) {
          n++,
            g(e).then(
              function (e) {
                r.hasOwnProperty(i) || ((r[i] = e), --n || t.resolve(r));
              },
              function (e) {
                r.hasOwnProperty(i) || t.reject(e);
              }
            );
        }),
        0 === n && t.resolve(r),
        t.promise
      );
    }
    var p = r("$q", TypeError),
      d = function () {
        return new l();
      };
    f(a.prototype, {
      then: function (e, t, n) {
        if (y(e) && y(t) && y(n)) return this;
        var r = new l();
        return (
          (this.$$state.pending = this.$$state.pending || []),
          this.$$state.pending.push([r, e, t, n]),
          this.$$state.status > 0 && c(this.$$state),
          r.promise
        );
      },
      catch: function (e) {
        return this.then(null, e);
      },
      finally: function (e, t) {
        return this.then(
          function (t) {
            return m(t, !0, e);
          },
          function (t) {
            return m(t, !1, e);
          },
          t
        );
      },
    }),
      f(l.prototype, {
        resolve: function (e) {
          this.promise.$$state.status ||
            (e === this.promise
              ? this.$$reject(
                  p(
                    "qcycle",
                    "Expected promise to be resolved with value other than itself '{0}'",
                    e
                  )
                )
              : this.$$resolve(e));
        },
        $$resolve: function (e) {
          var n, r;
          r = i(this, this.$$resolve, this.$$reject);
          try {
            (w(e) || A(e)) && (n = e && e.then),
              A(n)
                ? ((this.promise.$$state.status = -1),
                  n.call(e, r[0], r[1], this.notify))
                : ((this.promise.$$state.value = e),
                  (this.promise.$$state.status = 1),
                  c(this.promise.$$state));
          } catch (o) {
            r[1](o), t(o);
          }
        },
        reject: function (e) {
          this.promise.$$state.status || this.$$reject(e);
        },
        $$reject: function (e) {
          (this.promise.$$state.value = e),
            (this.promise.$$state.status = 2),
            c(this.promise.$$state);
        },
        notify: function (n) {
          var r = this.promise.$$state.pending;
          this.promise.$$state.status <= 0 &&
            r &&
            r.length &&
            e(function () {
              for (var e, i, o = 0, a = r.length; a > o; o++) {
                (i = r[o][0]), (e = r[o][3]);
                try {
                  i.notify(A(e) ? e(n) : n);
                } catch (s) {
                  t(s);
                }
              }
            });
        },
      });
    var $ = function (e) {
        var t = new l();
        return t.reject(e), t.promise;
      },
      v = function (e, t) {
        var n = new l();
        return t ? n.resolve(e) : n.reject(e), n.promise;
      },
      m = function (e, t, n) {
        var r = null;
        try {
          A(n) && (r = n());
        } catch (i) {
          return v(i, !1);
        }
        return P(r)
          ? r.then(
              function () {
                return v(e, t);
              },
              function (e) {
                return v(e, !1);
              }
            )
          : v(e, t);
      },
      g = function (e, t, n, r) {
        var i = new l();
        return i.resolve(e), i.promise.then(t, n, r);
      },
      b = g,
      x = function S(e) {
        function t(e) {
          r.resolve(e);
        }
        function n(e) {
          r.reject(e);
        }
        if (!A(e)) throw p("norslvr", "Expected resolverFn, got '{0}'", e);
        if (!(this instanceof S)) return new S(e);
        var r = new l();
        return e(t, n), r.promise;
      };
    return (
      (x.defer = d),
      (x.reject = $),
      (x.when = g),
      (x.resolve = b),
      (x.all = h),
      x
    );
  }
  function gn() {
    this.$get = [
      "$window",
      "$timeout",
      function (e, t) {
        var n = e.requestAnimationFrame || e.webkitRequestAnimationFrame,
          r =
            e.cancelAnimationFrame ||
            e.webkitCancelAnimationFrame ||
            e.webkitCancelRequestAnimationFrame,
          i = !!n,
          o = i
            ? function (e) {
                var t = n(e);
                return function () {
                  r(t);
                };
              }
            : function (e) {
                var n = t(e, 16.66, !1);
                return function () {
                  t.cancel(n);
                };
              };
        return (o.supported = i), o;
      },
    ];
  }
  function yn() {
    function e(e) {
      function t() {
        (this.$$watchers =
          this.$$nextSibling =
          this.$$childHead =
          this.$$childTail =
            null),
          (this.$$listeners = {}),
          (this.$$listenerCount = {}),
          (this.$$watchersCount = 0),
          (this.$id = u()),
          (this.$$ChildScope = null);
      }
      return (t.prototype = e), t;
    }
    var t = 10,
      n = r("$rootScope"),
      a = null,
      s = null;
    (this.digestTtl = function (e) {
      return arguments.length && (t = e), t;
    }),
      (this.$get = [
        "$injector",
        "$exceptionHandler",
        "$parse",
        "$browser",
        function (r, c, l, f) {
          function h(e) {
            e.currentScope.$$destroyed = !0;
          }
          function p(e) {
            9 === Tr &&
              (e.$$childHead && p(e.$$childHead),
              e.$$nextSibling && p(e.$$nextSibling)),
              (e.$parent =
                e.$$nextSibling =
                e.$$prevSibling =
                e.$$childHead =
                e.$$childTail =
                e.$root =
                e.$$watchers =
                  null);
          }
          function d() {
            (this.$id = u()),
              (this.$$phase =
                this.$parent =
                this.$$watchers =
                this.$$nextSibling =
                this.$$prevSibling =
                this.$$childHead =
                this.$$childTail =
                  null),
              (this.$root = this),
              (this.$$destroyed = !1),
              (this.$$listeners = {}),
              (this.$$listenerCount = {}),
              (this.$$watchersCount = 0),
              (this.$$isolateBindings = null);
          }
          function v(e) {
            if (C.$$phase)
              throw n("inprog", "{0} already in progress", C.$$phase);
            C.$$phase = e;
          }
          function m() {
            C.$$phase = null;
          }
          function g(e, t) {
            do e.$$watchersCount += t;
            while ((e = e.$parent));
          }
          function b(e, t, n) {
            do
              (e.$$listenerCount[n] -= t),
                0 === e.$$listenerCount[n] && delete e.$$listenerCount[n];
            while ((e = e.$parent));
          }
          function x() {}
          function S() {
            for (; M.length; )
              try {
                M.shift()();
              } catch (e) {
                c(e);
              }
            s = null;
          }
          function E() {
            null === s &&
              (s = f.defer(function () {
                C.$apply(S);
              }));
          }
          d.prototype = {
            constructor: d,
            $new: function (t, n) {
              var r;
              return (
                (n = n || this),
                t
                  ? ((r = new d()), (r.$root = this.$root))
                  : (this.$$ChildScope || (this.$$ChildScope = e(this)),
                    (r = new this.$$ChildScope())),
                (r.$parent = n),
                (r.$$prevSibling = n.$$childTail),
                n.$$childHead
                  ? ((n.$$childTail.$$nextSibling = r), (n.$$childTail = r))
                  : (n.$$childHead = n.$$childTail = r),
                (t || n != this) && r.$on("$destroy", h),
                r
              );
            },
            $watch: function (e, t, n, r) {
              var i = l(e);
              if (i.$$watchDelegate) return i.$$watchDelegate(this, t, n, i, e);
              var o = this,
                s = o.$$watchers,
                u = { fn: t, last: x, get: i, exp: r || e, eq: !!n };
              return (
                (a = null),
                A(t) || (u.fn = $),
                s || (s = o.$$watchers = []),
                s.unshift(u),
                g(this, 1),
                function () {
                  _(s, u) >= 0 && g(o, -1), (a = null);
                }
              );
            },
            $watchGroup: function (e, t) {
              function n() {
                (u = !1), c ? ((c = !1), t(i, i, s)) : t(i, r, s);
              }
              var r = new Array(e.length),
                i = new Array(e.length),
                a = [],
                s = this,
                u = !1,
                c = !0;
              if (!e.length) {
                var l = !0;
                return (
                  s.$evalAsync(function () {
                    l && t(i, i, s);
                  }),
                  function () {
                    l = !1;
                  }
                );
              }
              return 1 === e.length
                ? this.$watch(e[0], function (e, n, o) {
                    (i[0] = e), (r[0] = n), t(i, e === n ? i : r, o);
                  })
                : (o(e, function (e, t) {
                    var o = s.$watch(e, function (e, o) {
                      (i[t] = e), (r[t] = o), u || ((u = !0), s.$evalAsync(n));
                    });
                    a.push(o);
                  }),
                  function () {
                    for (; a.length; ) a.shift()();
                  });
            },
            $watchCollection: function (e, t) {
              function n(e) {
                o = e;
                var t, n, r, s, u;
                if (!y(o)) {
                  if (w(o))
                    if (i(o)) {
                      a !== p && ((a = p), (v = a.length = 0), f++),
                        (t = o.length),
                        v !== t && (f++, (a.length = v = t));
                      for (var c = 0; t > c; c++)
                        (u = a[c]),
                          (s = o[c]),
                          (r = u !== u && s !== s),
                          r || u === s || (f++, (a[c] = s));
                    } else {
                      a !== d && ((a = d = {}), (v = 0), f++), (t = 0);
                      for (n in o)
                        kr.call(o, n) &&
                          (t++,
                          (s = o[n]),
                          (u = a[n]),
                          n in a
                            ? ((r = u !== u && s !== s),
                              r || u === s || (f++, (a[n] = s)))
                            : (v++, (a[n] = s), f++));
                      if (v > t) {
                        f++;
                        for (n in a) kr.call(o, n) || (v--, delete a[n]);
                      }
                    }
                  else a !== o && ((a = o), f++);
                  return f;
                }
              }
              function r() {
                if (($ ? (($ = !1), t(o, o, u)) : t(o, s, u), c))
                  if (w(o))
                    if (i(o)) {
                      s = new Array(o.length);
                      for (var e = 0; e < o.length; e++) s[e] = o[e];
                    } else {
                      s = {};
                      for (var n in o) kr.call(o, n) && (s[n] = o[n]);
                    }
                  else s = o;
              }
              n.$stateful = !0;
              var o,
                a,
                s,
                u = this,
                c = t.length > 1,
                f = 0,
                h = l(e, n),
                p = [],
                d = {},
                $ = !0,
                v = 0;
              return this.$watch(h, r);
            },
            $digest: function () {
              var e,
                r,
                i,
                o,
                u,
                l,
                h,
                p,
                d,
                $,
                g,
                y,
                b = t,
                w = this,
                E = [];
              v("$digest"),
                f.$$checkUrlChange(),
                this === C && null !== s && (f.defer.cancel(s), S()),
                (a = null);
              do {
                for (p = !1, $ = w; k.length; ) {
                  try {
                    (y = k.shift()), y.scope.$eval(y.expression, y.locals);
                  } catch (M) {
                    c(M);
                  }
                  a = null;
                }
                e: do {
                  if ((l = $.$$watchers))
                    for (h = l.length; h--; )
                      try {
                        if ((e = l[h]))
                          if (
                            ((u = e.get),
                            (r = u($)) === (i = e.last) ||
                              (e.eq
                                ? H(r, i)
                                : "number" == typeof r &&
                                  "number" == typeof i &&
                                  isNaN(r) &&
                                  isNaN(i)))
                          ) {
                            if (e === a) {
                              p = !1;
                              break e;
                            }
                          } else
                            (p = !0),
                              (a = e),
                              (e.last = e.eq ? F(r, null) : r),
                              (o = e.fn),
                              o(r, i === x ? r : i, $),
                              5 > b &&
                                ((g = 4 - b),
                                E[g] || (E[g] = []),
                                E[g].push({
                                  msg: A(e.exp)
                                    ? "fn: " + (e.exp.name || e.exp.toString())
                                    : e.exp,
                                  newVal: r,
                                  oldVal: i,
                                }));
                      } catch (M) {
                        c(M);
                      }
                  if (
                    !(d =
                      ($.$$watchersCount && $.$$childHead) ||
                      ($ !== w && $.$$nextSibling))
                  )
                    for (; $ !== w && !(d = $.$$nextSibling); ) $ = $.$parent;
                } while (($ = d));
                if ((p || k.length) && !b--)
                  throw (
                    (m(),
                    n(
                      "infdig",
                      "{0} $digest() iterations reached. Aborting!\nWatchers fired in the last 5 iterations: {1}",
                      t,
                      E
                    ))
                  );
              } while (p || k.length);
              for (m(); O.length; )
                try {
                  O.shift()();
                } catch (M) {
                  c(M);
                }
            },
            $destroy: function () {
              if (!this.$$destroyed) {
                var e = this.$parent;
                this.$broadcast("$destroy"),
                  (this.$$destroyed = !0),
                  this === C && f.$$applicationDestroyed(),
                  g(this, -this.$$watchersCount);
                for (var t in this.$$listenerCount)
                  b(this, this.$$listenerCount[t], t);
                e &&
                  e.$$childHead == this &&
                  (e.$$childHead = this.$$nextSibling),
                  e &&
                    e.$$childTail == this &&
                    (e.$$childTail = this.$$prevSibling),
                  this.$$prevSibling &&
                    (this.$$prevSibling.$$nextSibling = this.$$nextSibling),
                  this.$$nextSibling &&
                    (this.$$nextSibling.$$prevSibling = this.$$prevSibling),
                  (this.$destroy =
                    this.$digest =
                    this.$apply =
                    this.$evalAsync =
                    this.$applyAsync =
                      $),
                  (this.$on =
                    this.$watch =
                    this.$watchGroup =
                      function () {
                        return $;
                      }),
                  (this.$$listeners = {}),
                  (this.$$nextSibling = null),
                  p(this);
              }
            },
            $eval: function (e, t) {
              return l(e)(this, t);
            },
            $evalAsync: function (e, t) {
              C.$$phase ||
                k.length ||
                f.defer(function () {
                  k.length && C.$digest();
                }),
                k.push({ scope: this, expression: l(e), locals: t });
            },
            $$postDigest: function (e) {
              O.push(e);
            },
            $apply: function (e) {
              try {
                v("$apply");
                try {
                  return this.$eval(e);
                } finally {
                  m();
                }
              } catch (t) {
                c(t);
              } finally {
                try {
                  C.$digest();
                } catch (t) {
                  throw (c(t), t);
                }
              }
            },
            $applyAsync: function (e) {
              function t() {
                n.$eval(e);
              }
              var n = this;
              e && M.push(t), (e = l(e)), E();
            },
            $on: function (e, t) {
              var n = this.$$listeners[e];
              n || (this.$$listeners[e] = n = []), n.push(t);
              var r = this;
              do
                r.$$listenerCount[e] || (r.$$listenerCount[e] = 0),
                  r.$$listenerCount[e]++;
              while ((r = r.$parent));
              var i = this;
              return function () {
                var r = n.indexOf(t);
                -1 !== r && ((n[r] = null), b(i, 1, e));
              };
            },
            $emit: function (e, t) {
              var n,
                r,
                i,
                o = [],
                a = this,
                s = !1,
                u = {
                  name: e,
                  targetScope: a,
                  stopPropagation: function () {
                    s = !0;
                  },
                  preventDefault: function () {
                    u.defaultPrevented = !0;
                  },
                  defaultPrevented: !1,
                },
                l = B([u], arguments, 1);
              do {
                for (
                  n = a.$$listeners[e] || o,
                    u.currentScope = a,
                    r = 0,
                    i = n.length;
                  i > r;
                  r++
                )
                  if (n[r])
                    try {
                      n[r].apply(null, l);
                    } catch (f) {
                      c(f);
                    }
                  else n.splice(r, 1), r--, i--;
                if (s) return (u.currentScope = null), u;
                a = a.$parent;
              } while (a);
              return (u.currentScope = null), u;
            },
            $broadcast: function (e, t) {
              var n = this,
                r = n,
                i = n,
                o = {
                  name: e,
                  targetScope: n,
                  preventDefault: function () {
                    o.defaultPrevented = !0;
                  },
                  defaultPrevented: !1,
                };
              if (!n.$$listenerCount[e]) return o;
              for (var a, s, u, l = B([o], arguments, 1); (r = i); ) {
                for (
                  o.currentScope = r,
                    a = r.$$listeners[e] || [],
                    s = 0,
                    u = a.length;
                  u > s;
                  s++
                )
                  if (a[s])
                    try {
                      a[s].apply(null, l);
                    } catch (f) {
                      c(f);
                    }
                  else a.splice(s, 1), s--, u--;
                if (
                  !(i =
                    (r.$$listenerCount[e] && r.$$childHead) ||
                    (r !== n && r.$$nextSibling))
                )
                  for (; r !== n && !(i = r.$$nextSibling); ) r = r.$parent;
              }
              return (o.currentScope = null), o;
            },
          };
          var C = new d(),
            k = (C.$$asyncQueue = []),
            O = (C.$$postDigestQueue = []),
            M = (C.$$applyAsyncQueue = []);
          return C;
        },
      ]);
  }
  function bn() {
    var e = /^\s*(https?|ftp|mailto|tel|file):/,
      t = /^\s*((https?|ftp|file|blob):|data:image\/)/;
    (this.aHrefSanitizationWhitelist = function (t) {
      return b(t) ? ((e = t), this) : e;
    }),
      (this.imgSrcSanitizationWhitelist = function (e) {
        return b(e) ? ((t = e), this) : t;
      }),
      (this.$get = function () {
        return function (n, r) {
          var i,
            o = r ? t : e;
          return (i = Mn(n).href), "" === i || i.match(o) ? n : "unsafe:" + i;
        };
      });
  }
  function wn(e) {
    if ("self" === e) return e;
    if (S(e)) {
      if (e.indexOf("***") > -1)
        throw po(
          "iwcard",
          "Illegal sequence *** in string matcher.  String: {0}",
          e
        );
      return (
        (e = Gr(e).replace("\\*\\*", ".*").replace("\\*", "[^:/.?&;]*")),
        new RegExp("^" + e + "$")
      );
    }
    if (k(e)) return new RegExp("^" + e.source + "$");
    throw po(
      "imatcher",
      'Matchers may only be "self", string patterns or RegExp objects'
    );
  }
  function xn(e) {
    var t = [];
    return (
      b(e) &&
        o(e, function (e) {
          t.push(wn(e));
        }),
      t
    );
  }
  function Sn() {
    this.SCE_CONTEXTS = $o;
    var e = ["self"],
      t = [];
    (this.resourceUrlWhitelist = function (t) {
      return arguments.length && (e = xn(t)), e;
    }),
      (this.resourceUrlBlacklist = function (e) {
        return arguments.length && (t = xn(e)), t;
      }),
      (this.$get = [
        "$injector",
        function (n) {
          function r(e, t) {
            return "self" === e ? jn(t) : !!e.exec(t.href);
          }
          function i(n) {
            var i,
              o,
              a = Mn(n.toString()),
              s = !1;
            for (i = 0, o = e.length; o > i; i++)
              if (r(e[i], a)) {
                s = !0;
                break;
              }
            if (s)
              for (i = 0, o = t.length; o > i; i++)
                if (r(t[i], a)) {
                  s = !1;
                  break;
                }
            return s;
          }
          function o(e) {
            var t = function (e) {
              this.$$unwrapTrustedValue = function () {
                return e;
              };
            };
            return (
              e && (t.prototype = new e()),
              (t.prototype.valueOf = function () {
                return this.$$unwrapTrustedValue();
              }),
              (t.prototype.toString = function () {
                return this.$$unwrapTrustedValue().toString();
              }),
              t
            );
          }
          function a(e, t) {
            var n = f.hasOwnProperty(e) ? f[e] : null;
            if (!n)
              throw po(
                "icontext",
                "Attempted to trust a value in invalid context. Context: {0}; Value: {1}",
                e,
                t
              );
            if (null === t || y(t) || "" === t) return t;
            if ("string" != typeof t)
              throw po(
                "itype",
                "Attempted to trust a non-string value in a content requiring a string: Context: {0}",
                e
              );
            return new n(t);
          }
          function s(e) {
            return e instanceof l ? e.$$unwrapTrustedValue() : e;
          }
          function u(e, t) {
            if (null === t || y(t) || "" === t) return t;
            var n = f.hasOwnProperty(e) ? f[e] : null;
            if (n && t instanceof n) return t.$$unwrapTrustedValue();
            if (e === $o.RESOURCE_URL) {
              if (i(t)) return t;
              throw po(
                "insecurl",
                "Blocked loading resource from url not allowed by $sceDelegate policy.  URL: {0}",
                t.toString()
              );
            }
            if (e === $o.HTML) return c(t);
            throw po(
              "unsafe",
              "Attempting to use an unsafe value in a safe context."
            );
          }
          var c = function (e) {
            throw po(
              "unsafe",
              "Attempting to use an unsafe value in a safe context."
            );
          };
          n.has("$sanitize") && (c = n.get("$sanitize"));
          var l = o(),
            f = {};
          return (
            (f[$o.HTML] = o(l)),
            (f[$o.CSS] = o(l)),
            (f[$o.URL] = o(l)),
            (f[$o.JS] = o(l)),
            (f[$o.RESOURCE_URL] = o(f[$o.URL])),
            { trustAs: a, getTrusted: u, valueOf: s }
          );
        },
      ]);
  }
  function En() {
    var e = !0;
    (this.enabled = function (t) {
      return arguments.length && (e = !!t), e;
    }),
      (this.$get = [
        "$parse",
        "$sceDelegate",
        function (t, n) {
          if (e && 8 > Tr)
            throw po(
              "iequirks",
              "Strict Contextual Escaping does not support Internet Explorer version < 11 in quirks mode.  You can fix this by adding the text <!doctype html> to the top of your HTML document.  See https://docs.angularjs.org/api/ng.$sce for more information."
            );
          var r = U($o);
          (r.isEnabled = function () {
            return e;
          }),
            (r.trustAs = n.trustAs),
            (r.getTrusted = n.getTrusted),
            (r.valueOf = n.valueOf),
            e ||
              ((r.trustAs = r.getTrusted =
                function (e, t) {
                  return t;
                }),
              (r.valueOf = v)),
            (r.parseAs = function (e, n) {
              var i = t(n);
              return i.literal && i.constant
                ? i
                : t(n, function (t) {
                    return r.getTrusted(e, t);
                  });
            });
          var i = r.parseAs,
            a = r.getTrusted,
            s = r.trustAs;
          return (
            o($o, function (e, t) {
              var n = Ar(t);
              (r[xe("parse_as_" + n)] = function (t) {
                return i(e, t);
              }),
                (r[xe("get_trusted_" + n)] = function (t) {
                  return a(e, t);
                }),
                (r[xe("trust_as_" + n)] = function (t) {
                  return s(e, t);
                });
            }),
            r
          );
        },
      ]);
  }
  function Cn() {
    this.$get = [
      "$window",
      "$document",
      function (e, t) {
        var n,
          r,
          i = {},
          o = p(
            (/android (\d+)/.exec(Ar((e.navigator || {}).userAgent)) || [])[1]
          ),
          a = /Boxee/i.test((e.navigator || {}).userAgent),
          s = t[0] || {},
          u = /^(Moz|webkit|ms)(?=[A-Z])/,
          c = s.body && s.body.style,
          l = !1,
          f = !1;
        if (c) {
          for (var h in c)
            if ((r = u.exec(h))) {
              (n = r[0]), (n = n.substr(0, 1).toUpperCase() + n.substr(1));
              break;
            }
          n || (n = "WebkitOpacity" in c && "webkit"),
            (l = !!("transition" in c || n + "Transition" in c)),
            (f = !!("animation" in c || n + "Animation" in c)),
            !o ||
              (l && f) ||
              ((l = S(c.webkitTransition)), (f = S(c.webkitAnimation)));
        }
        return {
          history: !(!e.history || !e.history.pushState || 4 > o || a),
          hasEvent: function (e) {
            if ("input" === e && 11 >= Tr) return !1;
            if (y(i[e])) {
              var t = s.createElement("div");
              i[e] = "on" + e in t;
            }
            return i[e];
          },
          csp: Jr(),
          vendorPrefix: n,
          transitions: l,
          animations: f,
          android: o,
        };
      },
    ];
  }
  function An() {
    this.$get = [
      "$templateCache",
      "$http",
      "$q",
      "$sce",
      function (e, t, n, r) {
        function i(o, a) {
          function s(e) {
            if (!a)
              throw Fi(
                "tpload",
                "Failed to load template: {0} (HTTP status: {1} {2})",
                o,
                e.status,
                e.statusText
              );
            return n.reject(e);
          }
          i.totalPendingRequests++,
            (S(o) && e.get(o)) || (o = r.getTrustedResourceUrl(o));
          var u = t.defaults && t.defaults.transformResponse;
          Lr(u)
            ? (u = u.filter(function (e) {
                return e !== xt;
              }))
            : u === xt && (u = null);
          var c = { cache: e, transformResponse: u };
          return t
            .get(o, c)
            ["finally"](function () {
              i.totalPendingRequests--;
            })
            .then(function (t) {
              return e.put(o, t.data), t.data;
            }, s);
        }
        return (i.totalPendingRequests = 0), i;
      },
    ];
  }
  function kn() {
    this.$get = [
      "$rootScope",
      "$browser",
      "$location",
      function (e, t, n) {
        var r = {};
        return (
          (r.findBindings = function (e, t, n) {
            var r = e.getElementsByClassName("ng-binding"),
              i = [];
            return (
              o(r, function (e) {
                var r = Ur.element(e).data("$binding");
                r &&
                  o(r, function (r) {
                    if (n) {
                      var o = new RegExp("(^|\\s)" + Gr(t) + "(\\s|\\||$)");
                      o.test(r) && i.push(e);
                    } else -1 != r.indexOf(t) && i.push(e);
                  });
              }),
              i
            );
          }),
          (r.findModels = function (e, t, n) {
            for (
              var r = ["ng-", "data-ng-", "ng\\:"], i = 0;
              i < r.length;
              ++i
            ) {
              var o = n ? "=" : "*=",
                a = "[" + r[i] + "model" + o + '"' + t + '"]',
                s = e.querySelectorAll(a);
              if (s.length) return s;
            }
          }),
          (r.getLocation = function () {
            return n.url();
          }),
          (r.setLocation = function (t) {
            t !== n.url() && (n.url(t), e.$digest());
          }),
          (r.whenStable = function (e) {
            t.notifyWhenNoOutstandingRequests(e);
          }),
          r
        );
      },
    ];
  }
  function On() {
    this.$get = [
      "$rootScope",
      "$browser",
      "$q",
      "$$q",
      "$exceptionHandler",
      function (e, t, n, r, i) {
        function o(o, s, u) {
          A(o) || ((u = s), (s = o), (o = $));
          var c,
            l = L(arguments, 3),
            f = b(u) && !u,
            h = (f ? r : n).defer(),
            p = h.promise;
          return (
            (c = t.defer(function () {
              try {
                h.resolve(o.apply(null, l));
              } catch (t) {
                h.reject(t), i(t);
              } finally {
                delete a[p.$$timeoutId];
              }
              f || e.$apply();
            }, s)),
            (p.$$timeoutId = c),
            (a[c] = h),
            p
          );
        }
        var a = {};
        return (
          (o.cancel = function (e) {
            return e && e.$$timeoutId in a
              ? (a[e.$$timeoutId].reject("canceled"),
                delete a[e.$$timeoutId],
                t.defer.cancel(e.$$timeoutId))
              : !1;
          }),
          o
        );
      },
    ];
  }
  function Mn(e) {
    var t = e;
    return (
      Tr && (vo.setAttribute("href", t), (t = vo.href)),
      vo.setAttribute("href", t),
      {
        href: vo.href,
        protocol: vo.protocol ? vo.protocol.replace(/:$/, "") : "",
        host: vo.host,
        search: vo.search ? vo.search.replace(/^\?/, "") : "",
        hash: vo.hash ? vo.hash.replace(/^#/, "") : "",
        hostname: vo.hostname,
        port: vo.port,
        pathname:
          "/" === vo.pathname.charAt(0) ? vo.pathname : "/" + vo.pathname,
      }
    );
  }
  function jn(e) {
    var t = S(e) ? Mn(e) : e;
    return t.protocol === mo.protocol && t.host === mo.host;
  }
  function Tn() {
    this.$get = m(e);
  }
  function Nn(e) {
    function t(e) {
      try {
        return decodeURIComponent(e);
      } catch (t) {
        return e;
      }
    }
    var n = e[0] || {},
      r = {},
      i = "";
    return function () {
      var e,
        o,
        a,
        s,
        u,
        c = n.cookie || "";
      if (c !== i)
        for (i = c, e = i.split("; "), r = {}, a = 0; a < e.length; a++)
          (o = e[a]),
            (s = o.indexOf("=")),
            s > 0 &&
              ((u = t(o.substring(0, s))),
              y(r[u]) && (r[u] = t(o.substring(s + 1))));
      return r;
    };
  }
  function Vn() {
    this.$get = Nn;
  }
  function Pn(e) {
    function t(r, i) {
      if (w(r)) {
        var a = {};
        return (
          o(r, function (e, n) {
            a[n] = t(n, e);
          }),
          a
        );
      }
      return e.factory(r + n, i);
    }
    var n = "Filter";
    (this.register = t),
      (this.$get = [
        "$injector",
        function (e) {
          return function (t) {
            return e.get(t + n);
          };
        },
      ]),
      t("currency", _n),
      t("date", er),
      t("filter", In),
      t("json", tr),
      t("limitTo", nr),
      t("lowercase", Eo),
      t("number", Fn),
      t("orderBy", rr),
      t("uppercase", Co);
  }
  function In() {
    return function (e, t, n) {
      if (!i(e)) {
        if (null == e) return e;
        throw r("filter")("notarray", "Expected array but received: {0}", e);
      }
      var o,
        a,
        s = qn(t);
      switch (s) {
        case "function":
          o = t;
          break;
        case "boolean":
        case "null":
        case "number":
        case "string":
          a = !0;
        case "object":
          o = Dn(t, n, a);
          break;
        default:
          return e;
      }
      return Array.prototype.filter.call(e, o);
    };
  }
  function Dn(e, t, n) {
    var r,
      i = w(e) && "$" in e;
    return (
      t === !0
        ? (t = H)
        : A(t) ||
          (t = function (e, t) {
            return y(e)
              ? !1
              : null === e || null === t
              ? e === t
              : w(t) || (w(e) && !g(e))
              ? !1
              : ((e = Ar("" + e)), (t = Ar("" + t)), -1 !== e.indexOf(t));
          }),
      (r = function (r) {
        return i && !w(r) ? Rn(r, e.$, t, !1) : Rn(r, e, t, n);
      })
    );
  }
  function Rn(e, t, n, r, i) {
    var o = qn(e),
      a = qn(t);
    if ("string" === a && "!" === t.charAt(0))
      return !Rn(e, t.substring(1), n, r);
    if (Lr(e))
      return e.some(function (e) {
        return Rn(e, t, n, r);
      });
    switch (o) {
      case "object":
        var s;
        if (r) {
          for (s in e) if ("$" !== s.charAt(0) && Rn(e[s], t, n, !0)) return !0;
          return i ? !1 : Rn(e, t, n, !1);
        }
        if ("object" === a) {
          for (s in t) {
            var u = t[s];
            if (!A(u) && !y(u)) {
              var c = "$" === s,
                l = c ? e : e[s];
              if (!Rn(l, u, n, c, c)) return !1;
            }
          }
          return !0;
        }
        return n(e, t);
      case "function":
        return !1;
      default:
        return n(e, t);
    }
  }
  function qn(e) {
    return null === e ? "null" : typeof e;
  }
  function _n(e) {
    var t = e.NUMBER_FORMATS;
    return function (e, n, r) {
      return (
        y(n) && (n = t.CURRENCY_SYM),
        y(r) && (r = t.PATTERNS[1].maxFrac),
        null == e
          ? e
          : Bn(e, t.PATTERNS[1], t.GROUP_SEP, t.DECIMAL_SEP, r).replace(
              /\u00A4/g,
              n
            )
      );
    };
  }
  function Fn(e) {
    var t = e.NUMBER_FORMATS;
    return function (e, n) {
      return null == e
        ? e
        : Bn(e, t.PATTERNS[0], t.GROUP_SEP, t.DECIMAL_SEP, n);
    };
  }
  function Un(e) {
    var t,
      n,
      r,
      i,
      o,
      a = 0;
    for (
      (n = e.indexOf(yo)) > -1 && (e = e.replace(yo, "")),
        (r = e.search(/e/i)) > 0
          ? (0 > n && (n = r), (n += +e.slice(r + 1)), (e = e.substring(0, r)))
          : 0 > n && (n = e.length),
        r = 0;
      e.charAt(r) == bo;
      r++
    );
    if (r == (o = e.length)) (t = [0]), (n = 1);
    else {
      for (o--; e.charAt(o) == bo; ) o--;
      for (n -= r, t = [], i = 0; o >= r; r++, i++) t[i] = +e.charAt(r);
    }
    return (
      n > go && ((t = t.splice(0, go - 1)), (a = n - 1), (n = 1)),
      { d: t, e: a, i: n }
    );
  }
  function Hn(e, t, n, r) {
    var i = e.d,
      o = i.length - e.i;
    t = y(t) ? Math.min(Math.max(n, o), r) : +t;
    var a = t + e.i,
      s = i[a];
    if (a > 0) i.splice(a);
    else {
      (e.i = 1), (i.length = a = t + 1);
      for (var u = 0; a > u; u++) i[u] = 0;
    }
    for (s >= 5 && i[a - 1]++; t > o; o++) i.push(0);
    var c = i.reduceRight(function (e, t, n, r) {
      return (t += e), (r[n] = t % 10), Math.floor(t / 10);
    }, 0);
    c && (i.unshift(c), e.i++);
  }
  function Bn(e, t, n, r, i) {
    if ((!S(e) && !E(e)) || isNaN(e)) return "";
    var o,
      a = !isFinite(e),
      s = !1,
      u = Math.abs(e) + "",
      c = "";
    if (a) c = "∞";
    else {
      (o = Un(u)), Hn(o, i, t.minFrac, t.maxFrac);
      var l = o.d,
        f = o.i,
        h = o.e,
        p = [];
      for (
        s = l.reduce(function (e, t) {
          return e && !t;
        }, !0);
        0 > f;

      )
        l.unshift(0), f++;
      f > 0 ? (p = l.splice(f)) : ((p = l), (l = [0]));
      var d = [];
      for (
        l.length > t.lgSize && d.unshift(l.splice(-t.lgSize).join(""));
        l.length > t.gSize;

      )
        d.unshift(l.splice(-t.gSize).join(""));
      l.length && d.unshift(l.join("")),
        (c = d.join(n)),
        p.length && (c += r + p.join("")),
        h && (c += "e+" + h);
    }
    return 0 > e && !s ? t.negPre + c + t.negSuf : t.posPre + c + t.posSuf;
  }
  function Ln(e, t, n) {
    var r = "";
    for (0 > e && ((r = "-"), (e = -e)), e = "" + e; e.length < t; ) e = bo + e;
    return n && (e = e.substr(e.length - t)), r + e;
  }
  function zn(e, t, n, r) {
    return (
      (n = n || 0),
      function (i) {
        var o = i["get" + e]();
        return (
          (n > 0 || o > -n) && (o += n),
          0 === o && -12 == n && (o = 12),
          Ln(o, t, r)
        );
      }
    );
  }
  function Wn(e, t) {
    return function (n, r) {
      var i = n["get" + e](),
        o = Or(t ? "SHORT" + e : e);
      return r[o][i];
    };
  }
  function Gn(e, t, n) {
    var r = -1 * n,
      i = r >= 0 ? "+" : "";
    return (i +=
      Ln(Math[r > 0 ? "floor" : "ceil"](r / 60), 2) + Ln(Math.abs(r % 60), 2));
  }
  function Jn(e) {
    var t = new Date(e, 0, 1).getDay();
    return new Date(e, 0, (4 >= t ? 5 : 12) - t);
  }
  function Yn(e) {
    return new Date(
      e.getFullYear(),
      e.getMonth(),
      e.getDate() + (4 - e.getDay())
    );
  }
  function Kn(e) {
    return function (t) {
      var n = Jn(t.getFullYear()),
        r = Yn(t),
        i = +r - +n,
        o = 1 + Math.round(i / 6048e5);
      return Ln(o, e);
    };
  }
  function Zn(e, t) {
    return e.getHours() < 12 ? t.AMPMS[0] : t.AMPMS[1];
  }
  function Xn(e, t) {
    return e.getFullYear() <= 0 ? t.ERAS[0] : t.ERAS[1];
  }
  function Qn(e, t) {
    return e.getFullYear() <= 0 ? t.ERANAMES[0] : t.ERANAMES[1];
  }
  function er(e) {
    function t(e) {
      var t;
      if ((t = e.match(n))) {
        var r = new Date(0),
          i = 0,
          o = 0,
          a = t[8] ? r.setUTCFullYear : r.setFullYear,
          s = t[8] ? r.setUTCHours : r.setHours;
        t[9] && ((i = p(t[9] + t[10])), (o = p(t[9] + t[11]))),
          a.call(r, p(t[1]), p(t[2]) - 1, p(t[3]));
        var u = p(t[4] || 0) - i,
          c = p(t[5] || 0) - o,
          l = p(t[6] || 0),
          f = Math.round(1e3 * parseFloat("0." + (t[7] || 0)));
        return s.call(r, u, c, l, f), r;
      }
      return e;
    }
    var n =
      /^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/;
    return function (n, r, i) {
      var a,
        s,
        u = "",
        c = [];
      if (
        ((r = r || "mediumDate"),
        (r = e.DATETIME_FORMATS[r] || r),
        S(n) && (n = So.test(n) ? p(n) : t(n)),
        E(n) && (n = new Date(n)),
        !C(n) || !isFinite(n.getTime()))
      )
        return n;
      for (; r; )
        (s = xo.exec(r)),
          s ? ((c = B(c, s, 1)), (r = c.pop())) : (c.push(r), (r = null));
      var l = n.getTimezoneOffset();
      return (
        i && ((l = Y(i, l)), (n = Z(n, i, !0))),
        o(c, function (t) {
          (a = wo[t]),
            (u += a
              ? a(n, e.DATETIME_FORMATS, l)
              : "''" === t
              ? "'"
              : t.replace(/(^'|'$)/g, "").replace(/''/g, "'"));
        }),
        u
      );
    };
  }
  function tr() {
    return function (e, t) {
      return y(t) && (t = 2), G(e, t);
    };
  }
  function nr() {
    return function (e, t, n) {
      return (
        (t = Math.abs(Number(t)) === 1 / 0 ? Number(t) : p(t)),
        isNaN(t)
          ? e
          : (E(e) && (e = e.toString()),
            Lr(e) || S(e)
              ? ((n = !n || isNaN(n) ? 0 : p(n)),
                (n = 0 > n ? Math.max(0, e.length + n) : n),
                t >= 0
                  ? e.slice(n, n + t)
                  : 0 === n
                  ? e.slice(t, e.length)
                  : e.slice(Math.max(0, n + t), n))
              : e)
      );
    };
  }
  function rr(e) {
    function t(t, n) {
      return (
        (n = n ? -1 : 1),
        t.map(function (t) {
          var r = 1,
            i = v;
          if (A(t)) i = t;
          else if (
            S(t) &&
            (("+" != t.charAt(0) && "-" != t.charAt(0)) ||
              ((r = "-" == t.charAt(0) ? -1 : 1), (t = t.substring(1))),
            "" !== t && ((i = e(t)), i.constant))
          ) {
            var o = i();
            i = function (e) {
              return e[o];
            };
          }
          return { get: i, descending: r * n };
        })
      );
    }
    function n(e) {
      switch (typeof e) {
        case "number":
        case "boolean":
        case "string":
          return !0;
        default:
          return !1;
      }
    }
    function r(e, t) {
      return "function" == typeof e.valueOf && ((e = e.valueOf()), n(e))
        ? e
        : g(e) && ((e = e.toString()), n(e))
        ? e
        : t;
    }
    function o(e, t) {
      var n = typeof e;
      return (
        null === e
          ? ((n = "string"), (e = "null"))
          : "string" === n
          ? (e = e.toLowerCase())
          : "object" === n && (e = r(e, t)),
        { value: e, type: n }
      );
    }
    function a(e, t) {
      var n = 0;
      return (
        e.type === t.type
          ? e.value !== t.value && (n = e.value < t.value ? -1 : 1)
          : (n = e.type < t.type ? -1 : 1),
        n
      );
    }
    return function (e, n, r) {
      function s(e, t) {
        return {
          value: e,
          predicateValues: c.map(function (n) {
            return o(n.get(e), t);
          }),
        };
      }
      function u(e, t) {
        for (
          var n = 0, r = 0, i = c.length;
          i > r &&
          !(n =
            a(e.predicateValues[r], t.predicateValues[r]) * c[r].descending);
          ++r
        );
        return n;
      }
      if (!i(e)) return e;
      Lr(n) || (n = [n]), 0 === n.length && (n = ["+"]);
      var c = t(n, r);
      c.push({
        get: function () {
          return {};
        },
        descending: r ? -1 : 1,
      });
      var l = Array.prototype.map.call(e, s);
      return (
        l.sort(u),
        (e = l.map(function (e) {
          return e.value;
        }))
      );
    };
  }
  function ir(e) {
    return A(e) && (e = { link: e }), (e.restrict = e.restrict || "AC"), m(e);
  }
  function or(e, t) {
    e.$name = t;
  }
  function ar(e, t, r, i, a) {
    var s = this,
      u = [];
    (s.$error = {}),
      (s.$$success = {}),
      (s.$pending = n),
      (s.$name = a(t.name || t.ngForm || "")(r)),
      (s.$dirty = !1),
      (s.$pristine = !0),
      (s.$valid = !0),
      (s.$invalid = !1),
      (s.$submitted = !1),
      (s.$$parentForm = Oo),
      (s.$rollbackViewValue = function () {
        o(u, function (e) {
          e.$rollbackViewValue();
        });
      }),
      (s.$commitViewValue = function () {
        o(u, function (e) {
          e.$commitViewValue();
        });
      }),
      (s.$addControl = function (e) {
        pe(e.$name, "input"),
          u.push(e),
          e.$name && (s[e.$name] = e),
          (e.$$parentForm = s);
      }),
      (s.$$renameControl = function (e, t) {
        var n = e.$name;
        s[n] === e && delete s[n], (s[t] = e), (e.$name = t);
      }),
      (s.$removeControl = function (e) {
        e.$name && s[e.$name] === e && delete s[e.$name],
          o(s.$pending, function (t, n) {
            s.$setValidity(n, null, e);
          }),
          o(s.$error, function (t, n) {
            s.$setValidity(n, null, e);
          }),
          o(s.$$success, function (t, n) {
            s.$setValidity(n, null, e);
          }),
          _(u, e),
          (e.$$parentForm = Oo);
      }),
      wr({
        ctrl: this,
        $element: e,
        set: function (e, t, n) {
          var r = e[t];
          if (r) {
            var i = r.indexOf(n);
            -1 === i && r.push(n);
          } else e[t] = [n];
        },
        unset: function (e, t, n) {
          var r = e[t];
          r && (_(r, n), 0 === r.length && delete e[t]);
        },
        $animate: i,
      }),
      (s.$setDirty = function () {
        i.removeClass(e, ha),
          i.addClass(e, pa),
          (s.$dirty = !0),
          (s.$pristine = !1),
          s.$$parentForm.$setDirty();
      }),
      (s.$setPristine = function () {
        i.setClass(e, ha, pa + " " + Mo),
          (s.$dirty = !1),
          (s.$pristine = !0),
          (s.$submitted = !1),
          o(u, function (e) {
            e.$setPristine();
          });
      }),
      (s.$setUntouched = function () {
        o(u, function (e) {
          e.$setUntouched();
        });
      }),
      (s.$setSubmitted = function () {
        i.addClass(e, Mo), (s.$submitted = !0), s.$$parentForm.$setSubmitted();
      });
  }
  function sr(e) {
    e.$formatters.push(function (t) {
      return e.$isEmpty(t) ? t : t.toString();
    });
  }
  function ur(e, t, n, r, i, o) {
    cr(e, t, n, r, i, o), sr(r);
  }
  function cr(e, t, n, r, i, o) {
    var a = Ar(t[0].type);
    if (!i.android) {
      var s = !1;
      t.on("compositionstart", function (e) {
        s = !0;
      }),
        t.on("compositionend", function () {
          (s = !1), c();
        });
    }
    var u,
      c = function (e) {
        if ((u && (o.defer.cancel(u), (u = null)), !s)) {
          var i = t.val(),
            c = e && e.type;
          "password" === a || (n.ngTrim && "false" === n.ngTrim) || (i = Wr(i)),
            (r.$viewValue !== i || ("" === i && r.$$hasNativeValidators)) &&
              r.$setViewValue(i, c);
        }
      };
    if (i.hasEvent("input")) t.on("input", c);
    else {
      var l = function (e, t, n) {
        u ||
          (u = o.defer(function () {
            (u = null), (t && t.value === n) || c(e);
          }));
      };
      t.on("keydown", function (e) {
        var t = e.keyCode;
        91 === t ||
          (t > 15 && 19 > t) ||
          (t >= 37 && 40 >= t) ||
          l(e, this, this.value);
      }),
        i.hasEvent("paste") && t.on("paste cut", l);
    }
    t.on("change", c),
      Bo[a] &&
        r.$$hasNativeValidators &&
        a === n.type &&
        t.on(Ho, function (e) {
          if (!u) {
            var t = this[Cr],
              n = t.badInput,
              r = t.typeMismatch;
            u = o.defer(function () {
              (u = null), (t.badInput === n && t.typeMismatch === r) || c(e);
            });
          }
        }),
      (r.$render = function () {
        var e = r.$isEmpty(r.$viewValue) ? "" : r.$viewValue;
        t.val() !== e && t.val(e);
      });
  }
  function lr(e, t) {
    if (C(e)) return e;
    if (S(e)) {
      _o.lastIndex = 0;
      var n = _o.exec(e);
      if (n) {
        var r = +n[1],
          i = +n[2],
          o = 0,
          a = 0,
          s = 0,
          u = 0,
          c = Jn(r),
          l = 7 * (i - 1);
        return (
          t &&
            ((o = t.getHours()),
            (a = t.getMinutes()),
            (s = t.getSeconds()),
            (u = t.getMilliseconds())),
          new Date(r, 0, c.getDate() + l, o, a, s, u)
        );
      }
    }
    return NaN;
  }
  function fr(e, t) {
    return function (n, r) {
      var i, a;
      if (C(n)) return n;
      if (S(n)) {
        if (
          ('"' == n.charAt(0) &&
            '"' == n.charAt(n.length - 1) &&
            (n = n.substring(1, n.length - 1)),
          Vo.test(n))
        )
          return new Date(n);
        if (((e.lastIndex = 0), (i = e.exec(n))))
          return (
            i.shift(),
            (a = r
              ? {
                  yyyy: r.getFullYear(),
                  MM: r.getMonth() + 1,
                  dd: r.getDate(),
                  HH: r.getHours(),
                  mm: r.getMinutes(),
                  ss: r.getSeconds(),
                  sss: r.getMilliseconds() / 1e3,
                }
              : { yyyy: 1970, MM: 1, dd: 1, HH: 0, mm: 0, ss: 0, sss: 0 }),
            o(i, function (e, n) {
              n < t.length && (a[t[n]] = +e);
            }),
            new Date(
              a.yyyy,
              a.MM - 1,
              a.dd,
              a.HH,
              a.mm,
              a.ss || 0,
              1e3 * a.sss || 0
            )
          );
      }
      return NaN;
    };
  }
  function hr(e, t, r, i) {
    return function (o, a, s, u, c, l, f) {
      function h(e) {
        return e && !(e.getTime && e.getTime() !== e.getTime());
      }
      function p(e) {
        return b(e) && !C(e) ? r(e) || n : e;
      }
      pr(o, a, s, u), cr(o, a, s, u, c, l);
      var d,
        $ = u && u.$options && u.$options.timezone;
      if (
        ((u.$$parserName = e),
        u.$parsers.push(function (e) {
          if (u.$isEmpty(e)) return null;
          if (t.test(e)) {
            var i = r(e, d);
            return $ && (i = Z(i, $)), i;
          }
          return n;
        }),
        u.$formatters.push(function (e) {
          if (e && !C(e)) throw ma("datefmt", "Expected `{0}` to be a date", e);
          return h(e)
            ? ((d = e), d && $ && (d = Z(d, $, !0)), f("date")(e, i, $))
            : ((d = null), "");
        }),
        b(s.min) || s.ngMin)
      ) {
        var v;
        (u.$validators.min = function (e) {
          return !h(e) || y(v) || r(e) >= v;
        }),
          s.$observe("min", function (e) {
            (v = p(e)), u.$validate();
          });
      }
      if (b(s.max) || s.ngMax) {
        var m;
        (u.$validators.max = function (e) {
          return !h(e) || y(m) || r(e) <= m;
        }),
          s.$observe("max", function (e) {
            (m = p(e)), u.$validate();
          });
      }
    };
  }
  function pr(e, t, r, i) {
    var o = t[0],
      a = (i.$$hasNativeValidators = w(o.validity));
    a &&
      i.$parsers.push(function (e) {
        var r = t.prop(Cr) || {};
        return r.badInput && !r.typeMismatch ? n : e;
      });
  }
  function dr(e, t, r, i, o, a) {
    if (
      (pr(e, t, r, i),
      cr(e, t, r, i, o, a),
      (i.$$parserName = "number"),
      i.$parsers.push(function (e) {
        return i.$isEmpty(e) ? null : Do.test(e) ? parseFloat(e) : n;
      }),
      i.$formatters.push(function (e) {
        if (!i.$isEmpty(e)) {
          if (!E(e)) throw ma("numfmt", "Expected `{0}` to be a number", e);
          e = e.toString();
        }
        return e;
      }),
      b(r.min) || r.ngMin)
    ) {
      var s;
      (i.$validators.min = function (e) {
        return i.$isEmpty(e) || y(s) || e >= s;
      }),
        r.$observe("min", function (e) {
          b(e) && !E(e) && (e = parseFloat(e, 10)),
            (s = E(e) && !isNaN(e) ? e : n),
            i.$validate();
        });
    }
    if (b(r.max) || r.ngMax) {
      var u;
      (i.$validators.max = function (e) {
        return i.$isEmpty(e) || y(u) || u >= e;
      }),
        r.$observe("max", function (e) {
          b(e) && !E(e) && (e = parseFloat(e, 10)),
            (u = E(e) && !isNaN(e) ? e : n),
            i.$validate();
        });
    }
  }
  function $r(e, t, n, r, i, o) {
    cr(e, t, n, r, i, o),
      sr(r),
      (r.$$parserName = "url"),
      (r.$validators.url = function (e, t) {
        var n = e || t;
        return r.$isEmpty(n) || Po.test(n);
      });
  }
  function vr(e, t, n, r, i, o) {
    cr(e, t, n, r, i, o),
      sr(r),
      (r.$$parserName = "email"),
      (r.$validators.email = function (e, t) {
        var n = e || t;
        return r.$isEmpty(n) || Io.test(n);
      });
  }
  function mr(e, t, n, r) {
    y(n.name) && t.attr("name", u());
    var i = function (e) {
      t[0].checked && r.$setViewValue(n.value, e && e.type);
    };
    t.on("click", i),
      (r.$render = function () {
        var e = n.value;
        t[0].checked = e == r.$viewValue;
      }),
      n.$observe("value", r.$render);
  }
  function gr(e, t, n, r, i) {
    var o;
    if (b(r)) {
      if (((o = e(r)), !o.constant))
        throw ma(
          "constexpr",
          "Expected constant expression for `{0}`, but saw `{1}`.",
          n,
          r
        );
      return o(t);
    }
    return i;
  }
  function yr(e, t, n, r, i, o, a, s) {
    var u = gr(s, e, "ngTrueValue", n.ngTrueValue, !0),
      c = gr(s, e, "ngFalseValue", n.ngFalseValue, !1),
      l = function (e) {
        r.$setViewValue(t[0].checked, e && e.type);
      };
    t.on("click", l),
      (r.$render = function () {
        t[0].checked = r.$viewValue;
      }),
      (r.$isEmpty = function (e) {
        return e === !1;
      }),
      r.$formatters.push(function (e) {
        return H(e, u);
      }),
      r.$parsers.push(function (e) {
        return e ? u : c;
      });
  }
  function br(e, t) {
    return (
      (e = "ngClass" + e),
      [
        "$animate",
        function (n) {
          function r(e, t) {
            var n = [];
            e: for (var r = 0; r < e.length; r++) {
              for (var i = e[r], o = 0; o < t.length; o++)
                if (i == t[o]) continue e;
              n.push(i);
            }
            return n;
          }
          function i(e) {
            var t = [];
            return Lr(e)
              ? (o(e, function (e) {
                  t = t.concat(i(e));
                }),
                t)
              : S(e)
              ? e.split(" ")
              : w(e)
              ? (o(e, function (e, n) {
                  e && (t = t.concat(n.split(" ")));
                }),
                t)
              : e;
          }
          return {
            restrict: "AC",
            link: function (a, s, u) {
              function c(e) {
                var t = f(e, 1);
                u.$addClass(t);
              }
              function l(e) {
                var t = f(e, -1);
                u.$removeClass(t);
              }
              function f(e, t) {
                var n = s.data("$classCounts") || ve(),
                  r = [];
                return (
                  o(e, function (e) {
                    (t > 0 || n[e]) &&
                      ((n[e] = (n[e] || 0) + t),
                      n[e] === +(t > 0) && r.push(e));
                  }),
                  s.data("$classCounts", n),
                  r.join(" ")
                );
              }
              function h(e, t) {
                var i = r(t, e),
                  o = r(e, t);
                (i = f(i, 1)),
                  (o = f(o, -1)),
                  i && i.length && n.addClass(s, i),
                  o && o.length && n.removeClass(s, o);
              }
              function p(e) {
                if (t === !0 || a.$index % 2 === t) {
                  var n = i(e || []);
                  if (d) {
                    if (!H(e, d)) {
                      var r = i(d);
                      h(r, n);
                    }
                  } else c(n);
                }
                d = U(e);
              }
              var d;
              a.$watch(u[e], p, !0),
                u.$observe("class", function (t) {
                  p(a.$eval(u[e]));
                }),
                "ngClass" !== e &&
                  a.$watch("$index", function (n, r) {
                    var o = 1 & n;
                    if (o !== (1 & r)) {
                      var s = i(a.$eval(u[e]));
                      o === t ? c(s) : l(s);
                    }
                  });
            },
          };
        },
      ]
    );
  }
  function wr(e) {
    function t(e, t, u) {
      y(t) ? r("$pending", e, u) : i("$pending", e, u),
        V(t)
          ? t
            ? (f(s.$error, e, u), l(s.$$success, e, u))
            : (l(s.$error, e, u), f(s.$$success, e, u))
          : (f(s.$error, e, u), f(s.$$success, e, u)),
        s.$pending
          ? (o(va, !0), (s.$valid = s.$invalid = n), a("", null))
          : (o(va, !1),
            (s.$valid = xr(s.$error)),
            (s.$invalid = !s.$valid),
            a("", s.$valid));
      var c;
      (c =
        s.$pending && s.$pending[e]
          ? n
          : s.$error[e]
          ? !1
          : s.$$success[e]
          ? !0
          : null),
        a(e, c),
        s.$$parentForm.$setValidity(e, c, s);
    }
    function r(e, t, n) {
      s[e] || (s[e] = {}), l(s[e], t, n);
    }
    function i(e, t, r) {
      s[e] && f(s[e], t, r), xr(s[e]) && (s[e] = n);
    }
    function o(e, t) {
      t && !c[e]
        ? (h.addClass(u, e), (c[e] = !0))
        : !t && c[e] && (h.removeClass(u, e), (c[e] = !1));
    }
    function a(e, t) {
      (e = e ? "-" + ce(e, "-") : ""), o(la + e, t === !0), o(fa + e, t === !1);
    }
    var s = e.ctrl,
      u = e.$element,
      c = {},
      l = e.set,
      f = e.unset,
      h = e.$animate;
    (c[fa] = !(c[la] = u.hasClass(la))), (s.$setValidity = t);
  }
  function xr(e) {
    if (e) for (var t in e) if (e.hasOwnProperty(t)) return !1;
    return !0;
  }
  function Sr(e) {
    e[0].hasAttribute("selected") && (e[0].selected = !0);
  }
  var Er = /^\/(.+)\/([a-z]*)$/,
    Cr = "validity",
    Ar = function (e) {
      return S(e) ? e.toLowerCase() : e;
    },
    kr = Object.prototype.hasOwnProperty,
    Or = function (e) {
      return S(e) ? e.toUpperCase() : e;
    },
    Mr = function (e) {
      return S(e)
        ? e.replace(/[A-Z]/g, function (e) {
            return String.fromCharCode(32 | e.charCodeAt(0));
          })
        : e;
    },
    jr = function (e) {
      return S(e)
        ? e.replace(/[a-z]/g, function (e) {
            return String.fromCharCode(-33 & e.charCodeAt(0));
          })
        : e;
    };
  "i" !== "I".toLowerCase() && ((Ar = Mr), (Or = jr));
  var Tr,
    Nr,
    Vr,
    Pr,
    Ir = [].slice,
    Dr = [].splice,
    Rr = [].push,
    qr = Object.prototype.toString,
    _r = Object.getPrototypeOf,
    Fr = r("ng"),
    Ur = e.angular || (e.angular = {}),
    Hr = 0;
  (Tr = t.documentMode), ($.$inject = []), (v.$inject = []);
  var Br,
    Lr = Array.isArray,
    zr =
      /^\[object (?:Uint8|Uint8Clamped|Uint16|Uint32|Int8|Int16|Int32|Float32|Float64)Array\]$/,
    Wr = function (e) {
      return S(e) ? e.trim() : e;
    },
    Gr = function (e) {
      return e
        .replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1")
        .replace(/\x08/g, "\\x08");
    },
    Jr = function () {
      function e() {
        try {
          return new Function(""), !1;
        } catch (e) {
          return !0;
        }
      }
      if (!b(Jr.rules)) {
        var n = t.querySelector("[ng-csp]") || t.querySelector("[data-ng-csp]");
        if (n) {
          var r = n.getAttribute("ng-csp") || n.getAttribute("data-ng-csp");
          Jr.rules = {
            noUnsafeEval: !r || -1 !== r.indexOf("no-unsafe-eval"),
            noInlineStyle: !r || -1 !== r.indexOf("no-inline-style"),
          };
        } else Jr.rules = { noUnsafeEval: e(), noInlineStyle: !1 };
      }
      return Jr.rules;
    },
    Yr = function () {
      if (b(Yr.name_)) return Yr.name_;
      var e,
        n,
        r,
        i,
        o = Zr.length;
      for (n = 0; o > n; ++n)
        if (
          ((r = Zr[n]),
          (e = t.querySelector("[" + r.replace(":", "\\:") + "jq]")))
        ) {
          i = e.getAttribute(r + "jq");
          break;
        }
      return (Yr.name_ = i);
    },
    Kr = /:/g,
    Zr = ["ng-", "data-ng-", "ng:", "x-ng-"],
    Xr = /[A-Z]/g,
    Qr = !1,
    ei = 1,
    ti = 2,
    ni = 3,
    ri = 8,
    ii = 9,
    oi = 11,
    ai = {
      full: "1.4.10",
      major: 1,
      minor: 4,
      dot: 10,
      codeName: "benignant-oscillation",
    };
  Me.expando = "ng339";
  var si = (Me.cache = {}),
    ui = 1,
    ci = function (e, t, n) {
      e.addEventListener(t, n, !1);
    },
    li = function (e, t, n) {
      e.removeEventListener(t, n, !1);
    };
  Me._data = function (e) {
    return this.cache[e[this.expando]] || {};
  };
  var fi = /([\:\-\_]+(.))/g,
    hi = /^moz([A-Z])/,
    pi = { mouseleave: "mouseout", mouseenter: "mouseover" },
    di = r("jqLite"),
    $i = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,
    vi = /<|&#?\w+;/,
    mi = /<([\w:-]+)/,
    gi =
      /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
    yi = {
      option: [1, '<select multiple="multiple">', "</select>"],
      thead: [1, "<table>", "</table>"],
      col: [2, "<table><colgroup>", "</colgroup></table>"],
      tr: [2, "<table><tbody>", "</tbody></table>"],
      td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
      _default: [0, "", ""],
    };
  (yi.optgroup = yi.option),
    (yi.tbody = yi.tfoot = yi.colgroup = yi.caption = yi.thead),
    (yi.th = yi.td);
  var bi =
      Node.prototype.contains ||
      function (e) {
        return !!(16 & this.compareDocumentPosition(e));
      },
    wi = (Me.prototype = {
      ready: function (n) {
        function r() {
          i || ((i = !0), n());
        }
        var i = !1;
        "complete" === t.readyState
          ? setTimeout(r)
          : (this.on("DOMContentLoaded", r), Me(e).on("load", r));
      },
      toString: function () {
        var e = [];
        return (
          o(this, function (t) {
            e.push("" + t);
          }),
          "[" + e.join(", ") + "]"
        );
      },
      eq: function (e) {
        return Nr(e >= 0 ? this[e] : this[this.length + e]);
      },
      length: 0,
      push: Rr,
      sort: [].sort,
      splice: [].splice,
    }),
    xi = {};
  o(
    "multiple,selected,checked,disabled,readOnly,required,open".split(","),
    function (e) {
      xi[Ar(e)] = e;
    }
  );
  var Si = {};
  o(
    "input,select,option,textarea,button,form,details".split(","),
    function (e) {
      Si[e] = !0;
    }
  );
  var Ei = {
    ngMinlength: "minlength",
    ngMaxlength: "maxlength",
    ngMin: "min",
    ngMax: "max",
    ngPattern: "pattern",
  };
  o({ data: Ie, removeData: Ve, hasData: Ce }, function (e, t) {
    Me[t] = e;
  }),
    o(
      {
        data: Ie,
        inheritedData: Ue,
        scope: function (e) {
          return (
            Nr.data(e, "$scope") ||
            Ue(e.parentNode || e, ["$isolateScope", "$scope"])
          );
        },
        isolateScope: function (e) {
          return (
            Nr.data(e, "$isolateScope") || Nr.data(e, "$isolateScopeNoTemplate")
          );
        },
        controller: Fe,
        injector: function (e) {
          return Ue(e, "$injector");
        },
        removeAttr: function (e, t) {
          e.removeAttribute(t);
        },
        hasClass: De,
        css: function (e, t, n) {
          return (t = xe(t)), b(n) ? void (e.style[t] = n) : e.style[t];
        },
        attr: function (e, t, r) {
          var i = e.nodeType;
          if (i !== ni && i !== ti && i !== ri) {
            var o = Ar(t);
            if (xi[o]) {
              if (!b(r))
                return e[t] || (e.attributes.getNamedItem(t) || $).specified
                  ? o
                  : n;
              r
                ? ((e[t] = !0), e.setAttribute(t, o))
                : ((e[t] = !1), e.removeAttribute(o));
            } else if (b(r)) e.setAttribute(t, r);
            else if (e.getAttribute) {
              var a = e.getAttribute(t, 2);
              return null === a ? n : a;
            }
          }
        },
        prop: function (e, t, n) {
          return b(n) ? void (e[t] = n) : e[t];
        },
        text: (function () {
          function e(e, t) {
            if (y(t)) {
              var n = e.nodeType;
              return n === ei || n === ni ? e.textContent : "";
            }
            e.textContent = t;
          }
          return (e.$dv = ""), e;
        })(),
        val: function (e, t) {
          if (y(t)) {
            if (e.multiple && "select" === q(e)) {
              var n = [];
              return (
                o(e.options, function (e) {
                  e.selected && n.push(e.value || e.text);
                }),
                0 === n.length ? null : n
              );
            }
            return e.value;
          }
          e.value = t;
        },
        html: function (e, t) {
          return y(t) ? e.innerHTML : (Te(e, !0), void (e.innerHTML = t));
        },
        empty: He,
      },
      function (e, t) {
        Me.prototype[t] = function (t, n) {
          var r,
            i,
            o = this.length;
          if (e !== He && y(2 == e.length && e !== De && e !== Fe ? t : n)) {
            if (w(t)) {
              for (r = 0; o > r; r++)
                if (e === Ie) e(this[r], t);
                else for (i in t) e(this[r], i, t[i]);
              return this;
            }
            for (
              var a = e.$dv, s = y(a) ? Math.min(o, 1) : o, u = 0;
              s > u;
              u++
            ) {
              var c = e(this[u], t, n);
              a = a ? a + c : c;
            }
            return a;
          }
          for (r = 0; o > r; r++) e(this[r], t, n);
          return this;
        };
      }
    ),
    o(
      {
        removeData: Ve,
        on: function (e, t, r, i) {
          if (b(i))
            throw di(
              "onargs",
              "jqLite#on() does not support the `selector` or `eventData` parameters"
            );
          if (Ee(e)) {
            var o = Pe(e, !0),
              a = o.events,
              s = o.handle;
            s || (s = o.handle = Ge(e, a));
            for (
              var u = t.indexOf(" ") >= 0 ? t.split(" ") : [t],
                c = u.length,
                l = function (t, n, i) {
                  var o = a[t];
                  o ||
                    ((o = a[t] = []),
                    (o.specialHandlerWrapper = n),
                    "$destroy" === t || i || ci(e, t, s)),
                    o.push(r);
                };
              c--;

            )
              (t = u[c]), pi[t] ? (l(pi[t], Ye), l(t, n, !0)) : l(t);
          }
        },
        off: Ne,
        one: function (e, t, n) {
          (e = Nr(e)),
            e.on(t, function r() {
              e.off(t, n), e.off(t, r);
            }),
            e.on(t, n);
        },
        replaceWith: function (e, t) {
          var n,
            r = e.parentNode;
          Te(e),
            o(new Me(t), function (t) {
              n ? r.insertBefore(t, n.nextSibling) : r.replaceChild(t, e),
                (n = t);
            });
        },
        children: function (e) {
          var t = [];
          return (
            o(e.childNodes, function (e) {
              e.nodeType === ei && t.push(e);
            }),
            t
          );
        },
        contents: function (e) {
          return e.contentDocument || e.childNodes || [];
        },
        append: function (e, t) {
          var n = e.nodeType;
          if (n === ei || n === oi) {
            t = new Me(t);
            for (var r = 0, i = t.length; i > r; r++) {
              var o = t[r];
              e.appendChild(o);
            }
          }
        },
        prepend: function (e, t) {
          if (e.nodeType === ei) {
            var n = e.firstChild;
            o(new Me(t), function (t) {
              e.insertBefore(t, n);
            });
          }
        },
        wrap: function (e, t) {
          Oe(e, Nr(t).eq(0).clone()[0]);
        },
        remove: Be,
        detach: function (e) {
          Be(e, !0);
        },
        after: function (e, t) {
          var n = e,
            r = e.parentNode;
          t = new Me(t);
          for (var i = 0, o = t.length; o > i; i++) {
            var a = t[i];
            r.insertBefore(a, n.nextSibling), (n = a);
          }
        },
        addClass: qe,
        removeClass: Re,
        toggleClass: function (e, t, n) {
          t &&
            o(t.split(" "), function (t) {
              var r = n;
              y(r) && (r = !De(e, t)), (r ? qe : Re)(e, t);
            });
        },
        parent: function (e) {
          var t = e.parentNode;
          return t && t.nodeType !== oi ? t : null;
        },
        next: function (e) {
          return e.nextElementSibling;
        },
        find: function (e, t) {
          return e.getElementsByTagName ? e.getElementsByTagName(t) : [];
        },
        clone: je,
        triggerHandler: function (e, t, n) {
          var r,
            i,
            a,
            s = t.type || t,
            u = Pe(e),
            c = u && u.events,
            l = c && c[s];
          l &&
            ((r = {
              preventDefault: function () {
                this.defaultPrevented = !0;
              },
              isDefaultPrevented: function () {
                return this.defaultPrevented === !0;
              },
              stopImmediatePropagation: function () {
                this.immediatePropagationStopped = !0;
              },
              isImmediatePropagationStopped: function () {
                return this.immediatePropagationStopped === !0;
              },
              stopPropagation: $,
              type: s,
              target: e,
            }),
            t.type && (r = f(r, t)),
            (i = U(l)),
            (a = n ? [r].concat(n) : [r]),
            o(i, function (t) {
              r.isImmediatePropagationStopped() || t.apply(e, a);
            }));
        },
      },
      function (e, t) {
        (Me.prototype[t] = function (t, n, r) {
          for (var i, o = 0, a = this.length; a > o; o++)
            y(i)
              ? ((i = e(this[o], t, n, r)), b(i) && (i = Nr(i)))
              : _e(i, e(this[o], t, n, r));
          return b(i) ? i : this;
        }),
          (Me.prototype.bind = Me.prototype.on),
          (Me.prototype.unbind = Me.prototype.off);
      }
    ),
    (Xe.prototype = {
      put: function (e, t) {
        this[Ze(e, this.nextUid)] = t;
      },
      get: function (e) {
        return this[Ze(e, this.nextUid)];
      },
      remove: function (e) {
        var t = this[(e = Ze(e, this.nextUid))];
        return delete this[e], t;
      },
    });
  var Ci = [
      function () {
        this.$get = [
          function () {
            return Xe;
          },
        ];
      },
    ],
    Ai = /^[^\(]*\(\s*([^\)]*)\)/m,
    ki = /,/,
    Oi = /^\s*(_?)(\S+?)\1\s*$/,
    Mi = /((\/\/.*$)|(\/\*[\s\S]*?\*\/))/gm,
    ji = r("$injector");
  tt.$$annotate = et;
  var Ti = r("$animate"),
    Ni = 1,
    Vi = "ng-animate",
    Pi = function () {
      this.$get = function () {};
    },
    Ii = function () {
      var e = new Xe(),
        t = [];
      this.$get = [
        "$$AnimateRunner",
        "$rootScope",
        function (n, r) {
          function i(e, t, n) {
            var r = !1;
            return (
              t &&
                ((t = S(t) ? t.split(" ") : Lr(t) ? t : []),
                o(t, function (t) {
                  t && ((r = !0), (e[t] = n));
                })),
              r
            );
          }
          function a() {
            o(t, function (t) {
              var n = e.get(t);
              if (n) {
                var r = ot(t.attr("class")),
                  i = "",
                  a = "";
                o(n, function (e, t) {
                  var n = !!r[t];
                  e !== n &&
                    (e
                      ? (i += (i.length ? " " : "") + t)
                      : (a += (a.length ? " " : "") + t));
                }),
                  o(t, function (e) {
                    i && qe(e, i), a && Re(e, a);
                  }),
                  e.remove(t);
              }
            }),
              (t.length = 0);
          }
          function s(n, o, s) {
            var u = e.get(n) || {},
              c = i(u, o, !0),
              l = i(u, s, !1);
            (c || l) &&
              (e.put(n, u), t.push(n), 1 === t.length && r.$$postDigest(a));
          }
          return {
            enabled: $,
            on: $,
            off: $,
            pin: $,
            push: function (e, t, r, i) {
              i && i(),
                (r = r || {}),
                r.from && e.css(r.from),
                r.to && e.css(r.to),
                (r.addClass || r.removeClass) &&
                  s(e, r.addClass, r.removeClass);
              var o = new n();
              return o.complete(), o;
            },
          };
        },
      ];
    },
    Di = [
      "$provide",
      function (e) {
        var t = this;
        (this.$$registeredAnimations = Object.create(null)),
          (this.register = function (n, r) {
            if (n && "." !== n.charAt(0))
              throw Ti(
                "notcsel",
                "Expecting class selector starting with '.' got '{0}'.",
                n
              );
            var i = n + "-animation";
            (t.$$registeredAnimations[n.substr(1)] = i), e.factory(i, r);
          }),
          (this.classNameFilter = function (e) {
            if (
              1 === arguments.length &&
              ((this.$$classNameFilter = e instanceof RegExp ? e : null),
              this.$$classNameFilter)
            ) {
              var t = new RegExp("(\\s+|\\/)" + Vi + "(\\s+|\\/)");
              if (t.test(this.$$classNameFilter.toString()))
                throw Ti(
                  "nongcls",
                  '$animateProvider.classNameFilter(regex) prohibits accepting a regex value which matches/contains the "{0}" CSS class.',
                  Vi
                );
            }
            return this.$$classNameFilter;
          }),
          (this.$get = [
            "$$animateQueue",
            function (e) {
              function t(e, t, n) {
                if (n) {
                  var r = it(n);
                  !r || r.parentNode || r.previousElementSibling || (n = null);
                }
                n ? n.after(e) : t.prepend(e);
              }
              return {
                on: e.on,
                off: e.off,
                pin: e.pin,
                enabled: e.enabled,
                cancel: function (e) {
                  e.end && e.end();
                },
                enter: function (n, r, i, o) {
                  return (
                    (r = r && Nr(r)),
                    (i = i && Nr(i)),
                    (r = r || i.parent()),
                    t(n, r, i),
                    e.push(n, "enter", at(o))
                  );
                },
                move: function (n, r, i, o) {
                  return (
                    (r = r && Nr(r)),
                    (i = i && Nr(i)),
                    (r = r || i.parent()),
                    t(n, r, i),
                    e.push(n, "move", at(o))
                  );
                },
                leave: function (t, n) {
                  return e.push(t, "leave", at(n), function () {
                    t.remove();
                  });
                },
                addClass: function (t, n, r) {
                  return (
                    (r = at(r)),
                    (r.addClass = rt(r.addclass, n)),
                    e.push(t, "addClass", r)
                  );
                },
                removeClass: function (t, n, r) {
                  return (
                    (r = at(r)),
                    (r.removeClass = rt(r.removeClass, n)),
                    e.push(t, "removeClass", r)
                  );
                },
                setClass: function (t, n, r, i) {
                  return (
                    (i = at(i)),
                    (i.addClass = rt(i.addClass, n)),
                    (i.removeClass = rt(i.removeClass, r)),
                    e.push(t, "setClass", i)
                  );
                },
                animate: function (t, n, r, i, o) {
                  return (
                    (o = at(o)),
                    (o.from = o.from ? f(o.from, n) : n),
                    (o.to = o.to ? f(o.to, r) : r),
                    (i = i || "ng-inline-animate"),
                    (o.tempClasses = rt(o.tempClasses, i)),
                    e.push(t, "animate", o)
                  );
                },
              };
            },
          ]);
      },
    ],
    Ri = function () {
      this.$get = [
        "$$rAF",
        function (e) {
          function t(t) {
            n.push(t),
              n.length > 1 ||
                e(function () {
                  for (var e = 0; e < n.length; e++) n[e]();
                  n = [];
                });
          }
          var n = [];
          return function () {
            var e = !1;
            return (
              t(function () {
                e = !0;
              }),
              function (n) {
                e ? n() : t(n);
              }
            );
          };
        },
      ];
    },
    qi = function () {
      this.$get = [
        "$q",
        "$sniffer",
        "$$animateAsyncRun",
        "$document",
        "$timeout",
        function (e, t, n, r, i) {
          function a(e) {
            this.setHost(e);
            var t = n(),
              o = function (e) {
                i(e, 0, !1);
              };
            (this._doneCallbacks = []),
              (this._tick = function (e) {
                var n = r[0];
                n && n.hidden ? o(e) : t(e);
              }),
              (this._state = 0);
          }
          var s = 0,
            u = 1,
            c = 2;
          return (
            (a.chain = function (e, t) {
              function n() {
                return r === e.length
                  ? void t(!0)
                  : void e[r](function (e) {
                      return e === !1 ? void t(!1) : (r++, void n());
                    });
              }
              var r = 0;
              n();
            }),
            (a.all = function (e, t) {
              function n(n) {
                (i = i && n), ++r === e.length && t(i);
              }
              var r = 0,
                i = !0;
              o(e, function (e) {
                e.done(n);
              });
            }),
            (a.prototype = {
              setHost: function (e) {
                this.host = e || {};
              },
              done: function (e) {
                this._state === c ? e() : this._doneCallbacks.push(e);
              },
              progress: $,
              getPromise: function () {
                if (!this.promise) {
                  var t = this;
                  this.promise = e(function (e, n) {
                    t.done(function (t) {
                      t === !1 ? n() : e();
                    });
                  });
                }
                return this.promise;
              },
              then: function (e, t) {
                return this.getPromise().then(e, t);
              },
              catch: function (e) {
                return this.getPromise()["catch"](e);
              },
              finally: function (e) {
                return this.getPromise()["finally"](e);
              },
              pause: function () {
                this.host.pause && this.host.pause();
              },
              resume: function () {
                this.host.resume && this.host.resume();
              },
              end: function () {
                this.host.end && this.host.end(), this._resolve(!0);
              },
              cancel: function () {
                this.host.cancel && this.host.cancel(), this._resolve(!1);
              },
              complete: function (e) {
                var t = this;
                t._state === s &&
                  ((t._state = u),
                  t._tick(function () {
                    t._resolve(e);
                  }));
              },
              _resolve: function (e) {
                this._state !== c &&
                  (o(this._doneCallbacks, function (t) {
                    t(e);
                  }),
                  (this._doneCallbacks.length = 0),
                  (this._state = c));
              },
            }),
            a
          );
        },
      ];
    },
    _i = function () {
      this.$get = [
        "$$rAF",
        "$q",
        "$$AnimateRunner",
        function (e, t, n) {
          return function (t, r) {
            function i() {
              return (
                e(function () {
                  o(), s || u.complete(), (s = !0);
                }),
                u
              );
            }
            function o() {
              a.addClass && (t.addClass(a.addClass), (a.addClass = null)),
                a.removeClass &&
                  (t.removeClass(a.removeClass), (a.removeClass = null)),
                a.to && (t.css(a.to), (a.to = null));
            }
            var a = r || {};
            a.$$prepared || (a = F(a)),
              a.cleanupStyles && (a.from = a.to = null),
              a.from && (t.css(a.from), (a.from = null));
            var s,
              u = new n();
            return { start: i, end: i };
          };
        },
      ];
    },
    Fi = r("$compile");
  ft.$inject = ["$provide", "$$sanitizeUriProvider"];
  var Ui = /^((?:x|data)[\:\-_])/i,
    Hi = r("$controller"),
    Bi = /^(\S+)(\s+as\s+([\w$]+))?$/,
    Li = function () {
      this.$get = [
        "$document",
        function (e) {
          return function (t) {
            return (
              t
                ? !t.nodeType && t instanceof Nr && (t = t[0])
                : (t = e[0].body),
              t.offsetWidth + 1
            );
          };
        },
      ];
    },
    zi = "application/json",
    Wi = { "Content-Type": zi + ";charset=utf-8" },
    Gi = /^\[|^\{(?!\{)/,
    Ji = { "[": /]$/, "{": /}$/ },
    Yi = /^\)\]\}',?\n/,
    Ki = r("$http"),
    Zi = function (e) {
      return function () {
        throw Ki(
          "legacy",
          "The method `{0}` on the promise returned from `$http` has been disabled.",
          e
        );
      };
    },
    Xi = (Ur.$interpolateMinErr = r("$interpolate"));
  (Xi.throwNoconcat = function (e) {
    throw Xi(
      "noconcat",
      "Error while interpolating: {0}\nStrict Contextual Escaping disallows interpolations that concatenate multiple expressions when a trusted value is required.  See https://docs.angularjs.org/api/ng.$sce",
      e
    );
  }),
    (Xi.interr = function (e, t) {
      return Xi("interr", "Can't interpolate: {0}\n{1}", e, t.toString());
    });
  var Qi = /^([^\?#]*)(\?([^#]*))?(#(.*))?$/,
    eo = { http: 80, https: 443, ftp: 21 },
    to = r("$location"),
    no = {
      $$html5: !1,
      $$replace: !1,
      absUrl: zt("$$absUrl"),
      url: function (e) {
        if (y(e)) return this.$$url;
        var t = Qi.exec(e);
        return (
          (t[1] || "" === e) && this.path(decodeURIComponent(t[1])),
          (t[2] || t[1] || "" === e) && this.search(t[3] || ""),
          this.hash(t[5] || ""),
          this
        );
      },
      protocol: zt("$$protocol"),
      host: zt("$$host"),
      port: zt("$$port"),
      path: Wt("$$path", function (e) {
        return (
          (e = null !== e ? e.toString() : ""), "/" == e.charAt(0) ? e : "/" + e
        );
      }),
      search: function (e, t) {
        switch (arguments.length) {
          case 0:
            return this.$$search;
          case 1:
            if (S(e) || E(e)) (e = e.toString()), (this.$$search = ee(e));
            else {
              if (!w(e))
                throw to(
                  "isrcharg",
                  "The first argument of the `$location#search()` call must be a string or an object."
                );
              (e = F(e, {})),
                o(e, function (t, n) {
                  null == t && delete e[n];
                }),
                (this.$$search = e);
            }
            break;
          default:
            y(t) || null === t
              ? delete this.$$search[e]
              : (this.$$search[e] = t);
        }
        return this.$$compose(), this;
      },
      hash: Wt("$$hash", function (e) {
        return null !== e ? e.toString() : "";
      }),
      replace: function () {
        return (this.$$replace = !0), this;
      },
    };
  o([Lt, Bt, Ht], function (e) {
    (e.prototype = Object.create(no)),
      (e.prototype.state = function (t) {
        if (!arguments.length) return this.$$state;
        if (e !== Ht || !this.$$html5)
          throw to(
            "nostate",
            "History API state support is available only in HTML5 mode and only in browsers supporting HTML5 History API"
          );
        return (this.$$state = y(t) ? null : t), this;
      });
  });
  var ro = r("$parse"),
    io = Function.prototype.call,
    oo = Function.prototype.apply,
    ao = Function.prototype.bind,
    so = ve();
  o("+ - * / % === !== == != < > <= >= && || ! = |".split(" "), function (e) {
    so[e] = !0;
  });
  var uo = { n: "\n", f: "\f", r: "\r", t: "	", v: "\x0B", "'": "'", '"': '"' },
    co = function (e) {
      this.options = e;
    };
  co.prototype = {
    constructor: co,
    lex: function (e) {
      for (
        this.text = e, this.index = 0, this.tokens = [];
        this.index < this.text.length;

      ) {
        var t = this.text.charAt(this.index);
        if ('"' === t || "'" === t) this.readString(t);
        else if (this.isNumber(t) || ("." === t && this.isNumber(this.peek())))
          this.readNumber();
        else if (this.isIdent(t)) this.readIdent();
        else if (this.is(t, "(){}[].,;:?"))
          this.tokens.push({ index: this.index, text: t }), this.index++;
        else if (this.isWhitespace(t)) this.index++;
        else {
          var n = t + this.peek(),
            r = n + this.peek(2),
            i = so[t],
            o = so[n],
            a = so[r];
          if (i || o || a) {
            var s = a ? r : o ? n : t;
            this.tokens.push({ index: this.index, text: s, operator: !0 }),
              (this.index += s.length);
          } else
            this.throwError(
              "Unexpected next character ",
              this.index,
              this.index + 1
            );
        }
      }
      return this.tokens;
    },
    is: function (e, t) {
      return -1 !== t.indexOf(e);
    },
    peek: function (e) {
      var t = e || 1;
      return this.index + t < this.text.length
        ? this.text.charAt(this.index + t)
        : !1;
    },
    isNumber: function (e) {
      return e >= "0" && "9" >= e && "string" == typeof e;
    },
    isWhitespace: function (e) {
      return (
        " " === e ||
        "\r" === e ||
        "	" === e ||
        "\n" === e ||
        "\x0B" === e ||
        " " === e
      );
    },
    isIdent: function (e) {
      return (
        (e >= "a" && "z" >= e) ||
        (e >= "A" && "Z" >= e) ||
        "_" === e ||
        "$" === e
      );
    },
    isExpOperator: function (e) {
      return "-" === e || "+" === e || this.isNumber(e);
    },
    throwError: function (e, t, n) {
      n = n || this.index;
      var r = b(t)
        ? "s " + t + "-" + this.index + " [" + this.text.substring(t, n) + "]"
        : " " + n;
      throw ro(
        "lexerr",
        "Lexer Error: {0} at column{1} in expression [{2}].",
        e,
        r,
        this.text
      );
    },
    readNumber: function () {
      for (var e = "", t = this.index; this.index < this.text.length; ) {
        var n = Ar(this.text.charAt(this.index));
        if ("." == n || this.isNumber(n)) e += n;
        else {
          var r = this.peek();
          if ("e" == n && this.isExpOperator(r)) e += n;
          else if (
            this.isExpOperator(n) &&
            r &&
            this.isNumber(r) &&
            "e" == e.charAt(e.length - 1)
          )
            e += n;
          else {
            if (
              !this.isExpOperator(n) ||
              (r && this.isNumber(r)) ||
              "e" != e.charAt(e.length - 1)
            )
              break;
            this.throwError("Invalid exponent");
          }
        }
        this.index++;
      }
      this.tokens.push({ index: t, text: e, constant: !0, value: Number(e) });
    },
    readIdent: function () {
      for (var e = this.index; this.index < this.text.length; ) {
        var t = this.text.charAt(this.index);
        if (!this.isIdent(t) && !this.isNumber(t)) break;
        this.index++;
      }
      this.tokens.push({
        index: e,
        text: this.text.slice(e, this.index),
        identifier: !0,
      });
    },
    readString: function (e) {
      var t = this.index;
      this.index++;
      for (var n = "", r = e, i = !1; this.index < this.text.length; ) {
        var o = this.text.charAt(this.index);
        if (((r += o), i)) {
          if ("u" === o) {
            var a = this.text.substring(this.index + 1, this.index + 5);
            a.match(/[\da-f]{4}/i) ||
              this.throwError("Invalid unicode escape [\\u" + a + "]"),
              (this.index += 4),
              (n += String.fromCharCode(parseInt(a, 16)));
          } else {
            var s = uo[o];
            n += s || o;
          }
          i = !1;
        } else if ("\\" === o) i = !0;
        else {
          if (o === e)
            return (
              this.index++,
              void this.tokens.push({
                index: t,
                text: r,
                constant: !0,
                value: n,
              })
            );
          n += o;
        }
        this.index++;
      }
      this.throwError("Unterminated quote", t);
    },
  };
  var lo = function (e, t) {
    (this.lexer = e), (this.options = t);
  };
  (lo.Program = "Program"),
    (lo.ExpressionStatement = "ExpressionStatement"),
    (lo.AssignmentExpression = "AssignmentExpression"),
    (lo.ConditionalExpression = "ConditionalExpression"),
    (lo.LogicalExpression = "LogicalExpression"),
    (lo.BinaryExpression = "BinaryExpression"),
    (lo.UnaryExpression = "UnaryExpression"),
    (lo.CallExpression = "CallExpression"),
    (lo.MemberExpression = "MemberExpression"),
    (lo.Identifier = "Identifier"),
    (lo.Literal = "Literal"),
    (lo.ArrayExpression = "ArrayExpression"),
    (lo.Property = "Property"),
    (lo.ObjectExpression = "ObjectExpression"),
    (lo.ThisExpression = "ThisExpression"),
    (lo.NGValueParameter = "NGValueParameter"),
    (lo.prototype = {
      ast: function (e) {
        (this.text = e), (this.tokens = this.lexer.lex(e));
        var t = this.program();
        return (
          0 !== this.tokens.length &&
            this.throwError("is an unexpected token", this.tokens[0]),
          t
        );
      },
      program: function () {
        for (var e = []; ; )
          if (
            (this.tokens.length > 0 &&
              !this.peek("}", ")", ";", "]") &&
              e.push(this.expressionStatement()),
            !this.expect(";"))
          )
            return { type: lo.Program, body: e };
      },
      expressionStatement: function () {
        return { type: lo.ExpressionStatement, expression: this.filterChain() };
      },
      filterChain: function () {
        for (var e, t = this.expression(); (e = this.expect("|")); )
          t = this.filter(t);
        return t;
      },
      expression: function () {
        return this.assignment();
      },
      assignment: function () {
        var e = this.ternary();
        return (
          this.expect("=") &&
            (e = {
              type: lo.AssignmentExpression,
              left: e,
              right: this.assignment(),
              operator: "=",
            }),
          e
        );
      },
      ternary: function () {
        var e,
          t,
          n = this.logicalOR();
        return this.expect("?") && ((e = this.expression()), this.consume(":"))
          ? ((t = this.expression()),
            {
              type: lo.ConditionalExpression,
              test: n,
              alternate: e,
              consequent: t,
            })
          : n;
      },
      logicalOR: function () {
        for (var e = this.logicalAND(); this.expect("||"); )
          e = {
            type: lo.LogicalExpression,
            operator: "||",
            left: e,
            right: this.logicalAND(),
          };
        return e;
      },
      logicalAND: function () {
        for (var e = this.equality(); this.expect("&&"); )
          e = {
            type: lo.LogicalExpression,
            operator: "&&",
            left: e,
            right: this.equality(),
          };
        return e;
      },
      equality: function () {
        for (
          var e, t = this.relational();
          (e = this.expect("==", "!=", "===", "!=="));

        )
          t = {
            type: lo.BinaryExpression,
            operator: e.text,
            left: t,
            right: this.relational(),
          };
        return t;
      },
      relational: function () {
        for (
          var e, t = this.additive();
          (e = this.expect("<", ">", "<=", ">="));

        )
          t = {
            type: lo.BinaryExpression,
            operator: e.text,
            left: t,
            right: this.additive(),
          };
        return t;
      },
      additive: function () {
        for (var e, t = this.multiplicative(); (e = this.expect("+", "-")); )
          t = {
            type: lo.BinaryExpression,
            operator: e.text,
            left: t,
            right: this.multiplicative(),
          };
        return t;
      },
      multiplicative: function () {
        for (var e, t = this.unary(); (e = this.expect("*", "/", "%")); )
          t = {
            type: lo.BinaryExpression,
            operator: e.text,
            left: t,
            right: this.unary(),
          };
        return t;
      },
      unary: function () {
        var e;
        return (e = this.expect("+", "-", "!"))
          ? {
              type: lo.UnaryExpression,
              operator: e.text,
              prefix: !0,
              argument: this.unary(),
            }
          : this.primary();
      },
      primary: function () {
        var e;
        this.expect("(")
          ? ((e = this.filterChain()), this.consume(")"))
          : this.expect("[")
          ? (e = this.arrayDeclaration())
          : this.expect("{")
          ? (e = this.object())
          : this.constants.hasOwnProperty(this.peek().text)
          ? (e = F(this.constants[this.consume().text]))
          : this.peek().identifier
          ? (e = this.identifier())
          : this.peek().constant
          ? (e = this.constant())
          : this.throwError("not a primary expression", this.peek());
        for (var t; (t = this.expect("(", "[", ".")); )
          "(" === t.text
            ? ((e = {
                type: lo.CallExpression,
                callee: e,
                arguments: this.parseArguments(),
              }),
              this.consume(")"))
            : "[" === t.text
            ? ((e = {
                type: lo.MemberExpression,
                object: e,
                property: this.expression(),
                computed: !0,
              }),
              this.consume("]"))
            : "." === t.text
            ? (e = {
                type: lo.MemberExpression,
                object: e,
                property: this.identifier(),
                computed: !1,
              })
            : this.throwError("IMPOSSIBLE");
        return e;
      },
      filter: function (e) {
        for (
          var t = [e],
            n = {
              type: lo.CallExpression,
              callee: this.identifier(),
              arguments: t,
              filter: !0,
            };
          this.expect(":");

        )
          t.push(this.expression());
        return n;
      },
      parseArguments: function () {
        var e = [];
        if (")" !== this.peekToken().text)
          do e.push(this.expression());
          while (this.expect(","));
        return e;
      },
      identifier: function () {
        var e = this.consume();
        return (
          e.identifier || this.throwError("is not a valid identifier", e),
          { type: lo.Identifier, name: e.text }
        );
      },
      constant: function () {
        return { type: lo.Literal, value: this.consume().value };
      },
      arrayDeclaration: function () {
        var e = [];
        if ("]" !== this.peekToken().text)
          do {
            if (this.peek("]")) break;
            e.push(this.expression());
          } while (this.expect(","));
        return this.consume("]"), { type: lo.ArrayExpression, elements: e };
      },
      object: function () {
        var e,
          t = [];
        if ("}" !== this.peekToken().text)
          do {
            if (this.peek("}")) break;
            (e = { type: lo.Property, kind: "init" }),
              this.peek().constant
                ? (e.key = this.constant())
                : this.peek().identifier
                ? (e.key = this.identifier())
                : this.throwError("invalid key", this.peek()),
              this.consume(":"),
              (e.value = this.expression()),
              t.push(e);
          } while (this.expect(","));
        return this.consume("}"), { type: lo.ObjectExpression, properties: t };
      },
      throwError: function (e, t) {
        throw ro(
          "syntax",
          "Syntax Error: Token '{0}' {1} at column {2} of the expression [{3}] starting at [{4}].",
          t.text,
          e,
          t.index + 1,
          this.text,
          this.text.substring(t.index)
        );
      },
      consume: function (e) {
        if (0 === this.tokens.length)
          throw ro("ueoe", "Unexpected end of expression: {0}", this.text);
        var t = this.expect(e);
        return (
          t ||
            this.throwError(
              "is unexpected, expecting [" + e + "]",
              this.peek()
            ),
          t
        );
      },
      peekToken: function () {
        if (0 === this.tokens.length)
          throw ro("ueoe", "Unexpected end of expression: {0}", this.text);
        return this.tokens[0];
      },
      peek: function (e, t, n, r) {
        return this.peekAhead(0, e, t, n, r);
      },
      peekAhead: function (e, t, n, r, i) {
        if (this.tokens.length > e) {
          var o = this.tokens[e],
            a = o.text;
          if (
            a === t ||
            a === n ||
            a === r ||
            a === i ||
            (!t && !n && !r && !i)
          )
            return o;
        }
        return !1;
      },
      expect: function (e, t, n, r) {
        var i = this.peek(e, t, n, r);
        return i ? (this.tokens.shift(), i) : !1;
      },
      constants: {
        true: { type: lo.Literal, value: !0 },
        false: { type: lo.Literal, value: !1 },
        null: { type: lo.Literal, value: null },
        undefined: { type: lo.Literal, value: n },
        this: { type: lo.ThisExpression },
      },
    }),
    (ln.prototype = {
      compile: function (e, t) {
        var r = this,
          i = this.astBuilder.ast(e);
        (this.state = {
          nextId: 0,
          filters: {},
          expensiveChecks: t,
          fn: { vars: [], body: [], own: {} },
          assign: { vars: [], body: [], own: {} },
          inputs: [],
        }),
          rn(i, r.$filter);
        var a,
          s = "";
        if (((this.stage = "assign"), (a = sn(i)))) {
          this.state.computing = "assign";
          var u = this.nextId();
          this.recurse(a, u),
            this.return_(u),
            (s = "fn.assign=" + this.generateFunction("assign", "s,v,l"));
        }
        var c = on(i.body);
        (r.stage = "inputs"),
          o(c, function (e, t) {
            var n = "fn" + t;
            (r.state[n] = { vars: [], body: [], own: {} }),
              (r.state.computing = n);
            var i = r.nextId();
            r.recurse(e, i),
              r.return_(i),
              r.state.inputs.push(n),
              (e.watchId = t);
          }),
          (this.state.computing = "fn"),
          (this.stage = "main"),
          this.recurse(i);
        var l =
            '"' +
            this.USE +
            " " +
            this.STRICT +
            '";\n' +
            this.filterPrefix() +
            "var fn=" +
            this.generateFunction("fn", "s,l,a,i") +
            s +
            this.watchFns() +
            "return fn;",
          f = new Function(
            "$filter",
            "ensureSafeMemberName",
            "ensureSafeObject",
            "ensureSafeFunction",
            "getStringValue",
            "ensureSafeAssignContext",
            "ifDefined",
            "plus",
            "text",
            l
          )(this.$filter, Yt, Zt, Xt, Kt, Qt, en, tn, e);
        return (
          (this.state = this.stage = n),
          (f.literal = un(i)),
          (f.constant = cn(i)),
          f
        );
      },
      USE: "use",
      STRICT: "strict",
      watchFns: function () {
        var e = [],
          t = this.state.inputs,
          n = this;
        return (
          o(t, function (t) {
            e.push("var " + t + "=" + n.generateFunction(t, "s"));
          }),
          t.length && e.push("fn.inputs=[" + t.join(",") + "];"),
          e.join("")
        );
      },
      generateFunction: function (e, t) {
        return (
          "function(" + t + "){" + this.varsPrefix(e) + this.body(e) + "};"
        );
      },
      filterPrefix: function () {
        var e = [],
          t = this;
        return (
          o(this.state.filters, function (n, r) {
            e.push(n + "=$filter(" + t.escape(r) + ")");
          }),
          e.length ? "var " + e.join(",") + ";" : ""
        );
      },
      varsPrefix: function (e) {
        return this.state[e].vars.length
          ? "var " + this.state[e].vars.join(",") + ";"
          : "";
      },
      body: function (e) {
        return this.state[e].body.join("");
      },
      recurse: function (e, t, r, i, a, s) {
        var u,
          c,
          l,
          f,
          h = this;
        if (((i = i || $), !s && b(e.watchId)))
          return (
            (t = t || this.nextId()),
            void this.if_(
              "i",
              this.lazyAssign(t, this.computedMember("i", e.watchId)),
              this.lazyRecurse(e, t, r, i, a, !0)
            )
          );
        switch (e.type) {
          case lo.Program:
            o(e.body, function (t, r) {
              h.recurse(t.expression, n, n, function (e) {
                c = e;
              }),
                r !== e.body.length - 1
                  ? h.current().body.push(c, ";")
                  : h.return_(c);
            });
            break;
          case lo.Literal:
            (f = this.escape(e.value)), this.assign(t, f), i(f);
            break;
          case lo.UnaryExpression:
            this.recurse(e.argument, n, n, function (e) {
              c = e;
            }),
              (f = e.operator + "(" + this.ifDefined(c, 0) + ")"),
              this.assign(t, f),
              i(f);
            break;
          case lo.BinaryExpression:
            this.recurse(e.left, n, n, function (e) {
              u = e;
            }),
              this.recurse(e.right, n, n, function (e) {
                c = e;
              }),
              (f =
                "+" === e.operator
                  ? this.plus(u, c)
                  : "-" === e.operator
                  ? this.ifDefined(u, 0) + e.operator + this.ifDefined(c, 0)
                  : "(" + u + ")" + e.operator + "(" + c + ")"),
              this.assign(t, f),
              i(f);
            break;
          case lo.LogicalExpression:
            (t = t || this.nextId()),
              h.recurse(e.left, t),
              h.if_(
                "&&" === e.operator ? t : h.not(t),
                h.lazyRecurse(e.right, t)
              ),
              i(t);
            break;
          case lo.ConditionalExpression:
            (t = t || this.nextId()),
              h.recurse(e.test, t),
              h.if_(
                t,
                h.lazyRecurse(e.alternate, t),
                h.lazyRecurse(e.consequent, t)
              ),
              i(t);
            break;
          case lo.Identifier:
            (t = t || this.nextId()),
              r &&
                ((r.context =
                  "inputs" === h.stage
                    ? "s"
                    : this.assign(
                        this.nextId(),
                        this.getHasOwnProperty("l", e.name) + "?l:s"
                      )),
                (r.computed = !1),
                (r.name = e.name)),
              Yt(e.name),
              h.if_(
                "inputs" === h.stage || h.not(h.getHasOwnProperty("l", e.name)),
                function () {
                  h.if_("inputs" === h.stage || "s", function () {
                    a &&
                      1 !== a &&
                      h.if_(
                        h.not(h.nonComputedMember("s", e.name)),
                        h.lazyAssign(h.nonComputedMember("s", e.name), "{}")
                      ),
                      h.assign(t, h.nonComputedMember("s", e.name));
                  });
                },
                t && h.lazyAssign(t, h.nonComputedMember("l", e.name))
              ),
              (h.state.expensiveChecks || hn(e.name)) &&
                h.addEnsureSafeObject(t),
              i(t);
            break;
          case lo.MemberExpression:
            (u = (r && (r.context = this.nextId())) || this.nextId()),
              (t = t || this.nextId()),
              h.recurse(
                e.object,
                u,
                n,
                function () {
                  h.if_(
                    h.notNull(u),
                    function () {
                      a && 1 !== a && h.addEnsureSafeAssignContext(u),
                        e.computed
                          ? ((c = h.nextId()),
                            h.recurse(e.property, c),
                            h.getStringValue(c),
                            h.addEnsureSafeMemberName(c),
                            a &&
                              1 !== a &&
                              h.if_(
                                h.not(h.computedMember(u, c)),
                                h.lazyAssign(h.computedMember(u, c), "{}")
                              ),
                            (f = h.ensureSafeObject(h.computedMember(u, c))),
                            h.assign(t, f),
                            r && ((r.computed = !0), (r.name = c)))
                          : (Yt(e.property.name),
                            a &&
                              1 !== a &&
                              h.if_(
                                h.not(h.nonComputedMember(u, e.property.name)),
                                h.lazyAssign(
                                  h.nonComputedMember(u, e.property.name),
                                  "{}"
                                )
                              ),
                            (f = h.nonComputedMember(u, e.property.name)),
                            (h.state.expensiveChecks || hn(e.property.name)) &&
                              (f = h.ensureSafeObject(f)),
                            h.assign(t, f),
                            r &&
                              ((r.computed = !1), (r.name = e.property.name)));
                    },
                    function () {
                      h.assign(t, "undefined");
                    }
                  ),
                    i(t);
                },
                !!a
              );
            break;
          case lo.CallExpression:
            (t = t || this.nextId()),
              e.filter
                ? ((c = h.filter(e.callee.name)),
                  (l = []),
                  o(e.arguments, function (e) {
                    var t = h.nextId();
                    h.recurse(e, t), l.push(t);
                  }),
                  (f = c + "(" + l.join(",") + ")"),
                  h.assign(t, f),
                  i(t))
                : ((c = h.nextId()),
                  (u = {}),
                  (l = []),
                  h.recurse(e.callee, c, u, function () {
                    h.if_(
                      h.notNull(c),
                      function () {
                        h.addEnsureSafeFunction(c),
                          o(e.arguments, function (e) {
                            h.recurse(e, h.nextId(), n, function (e) {
                              l.push(h.ensureSafeObject(e));
                            });
                          }),
                          u.name
                            ? (h.state.expensiveChecks ||
                                h.addEnsureSafeObject(u.context),
                              (f =
                                h.member(u.context, u.name, u.computed) +
                                "(" +
                                l.join(",") +
                                ")"))
                            : (f = c + "(" + l.join(",") + ")"),
                          (f = h.ensureSafeObject(f)),
                          h.assign(t, f);
                      },
                      function () {
                        h.assign(t, "undefined");
                      }
                    ),
                      i(t);
                  }));
            break;
          case lo.AssignmentExpression:
            if (((c = this.nextId()), (u = {}), !an(e.left)))
              throw ro("lval", "Trying to assign a value to a non l-value");
            this.recurse(
              e.left,
              n,
              u,
              function () {
                h.if_(h.notNull(u.context), function () {
                  h.recurse(e.right, c),
                    h.addEnsureSafeObject(
                      h.member(u.context, u.name, u.computed)
                    ),
                    h.addEnsureSafeAssignContext(u.context),
                    (f =
                      h.member(u.context, u.name, u.computed) + e.operator + c),
                    h.assign(t, f),
                    i(t || f);
                });
              },
              1
            );
            break;
          case lo.ArrayExpression:
            (l = []),
              o(e.elements, function (e) {
                h.recurse(e, h.nextId(), n, function (e) {
                  l.push(e);
                });
              }),
              (f = "[" + l.join(",") + "]"),
              this.assign(t, f),
              i(f);
            break;
          case lo.ObjectExpression:
            (l = []),
              o(e.properties, function (e) {
                h.recurse(e.value, h.nextId(), n, function (t) {
                  l.push(
                    h.escape(
                      e.key.type === lo.Identifier
                        ? e.key.name
                        : "" + e.key.value
                    ) +
                      ":" +
                      t
                  );
                });
              }),
              (f = "{" + l.join(",") + "}"),
              this.assign(t, f),
              i(f);
            break;
          case lo.ThisExpression:
            this.assign(t, "s"), i("s");
            break;
          case lo.NGValueParameter:
            this.assign(t, "v"), i("v");
        }
      },
      getHasOwnProperty: function (e, t) {
        var n = e + "." + t,
          r = this.current().own;
        return (
          r.hasOwnProperty(n) ||
            (r[n] = this.nextId(
              !1,
              e + "&&(" + this.escape(t) + " in " + e + ")"
            )),
          r[n]
        );
      },
      assign: function (e, t) {
        return e ? (this.current().body.push(e, "=", t, ";"), e) : void 0;
      },
      filter: function (e) {
        return (
          this.state.filters.hasOwnProperty(e) ||
            (this.state.filters[e] = this.nextId(!0)),
          this.state.filters[e]
        );
      },
      ifDefined: function (e, t) {
        return "ifDefined(" + e + "," + this.escape(t) + ")";
      },
      plus: function (e, t) {
        return "plus(" + e + "," + t + ")";
      },
      return_: function (e) {
        this.current().body.push("return ", e, ";");
      },
      if_: function (e, t, n) {
        if (e === !0) t();
        else {
          var r = this.current().body;
          r.push("if(", e, "){"),
            t(),
            r.push("}"),
            n && (r.push("else{"), n(), r.push("}"));
        }
      },
      not: function (e) {
        return "!(" + e + ")";
      },
      notNull: function (e) {
        return e + "!=null";
      },
      nonComputedMember: function (e, t) {
        return e + "." + t;
      },
      computedMember: function (e, t) {
        return e + "[" + t + "]";
      },
      member: function (e, t, n) {
        return n ? this.computedMember(e, t) : this.nonComputedMember(e, t);
      },
      addEnsureSafeObject: function (e) {
        this.current().body.push(this.ensureSafeObject(e), ";");
      },
      addEnsureSafeMemberName: function (e) {
        this.current().body.push(this.ensureSafeMemberName(e), ";");
      },
      addEnsureSafeFunction: function (e) {
        this.current().body.push(this.ensureSafeFunction(e), ";");
      },
      addEnsureSafeAssignContext: function (e) {
        this.current().body.push(this.ensureSafeAssignContext(e), ";");
      },
      ensureSafeObject: function (e) {
        return "ensureSafeObject(" + e + ",text)";
      },
      ensureSafeMemberName: function (e) {
        return "ensureSafeMemberName(" + e + ",text)";
      },
      ensureSafeFunction: function (e) {
        return "ensureSafeFunction(" + e + ",text)";
      },
      getStringValue: function (e) {
        this.assign(e, "getStringValue(" + e + ",text)");
      },
      ensureSafeAssignContext: function (e) {
        return "ensureSafeAssignContext(" + e + ",text)";
      },
      lazyRecurse: function (e, t, n, r, i, o) {
        var a = this;
        return function () {
          a.recurse(e, t, n, r, i, o);
        };
      },
      lazyAssign: function (e, t) {
        var n = this;
        return function () {
          n.assign(e, t);
        };
      },
      stringEscapeRegex: /[^ a-zA-Z0-9]/g,
      stringEscapeFn: function (e) {
        return "\\u" + ("0000" + e.charCodeAt(0).toString(16)).slice(-4);
      },
      escape: function (e) {
        if (S(e))
          return (
            "'" + e.replace(this.stringEscapeRegex, this.stringEscapeFn) + "'"
          );
        if (E(e)) return e.toString();
        if (e === !0) return "true";
        if (e === !1) return "false";
        if (null === e) return "null";
        if ("undefined" == typeof e) return "undefined";
        throw ro("esc", "IMPOSSIBLE");
      },
      nextId: function (e, t) {
        var n = "v" + this.state.nextId++;
        return e || this.current().vars.push(n + (t ? "=" + t : "")), n;
      },
      current: function () {
        return this.state[this.state.computing];
      },
    }),
    (fn.prototype = {
      compile: function (e, t) {
        var n = this,
          r = this.astBuilder.ast(e);
        (this.expression = e), (this.expensiveChecks = t), rn(r, n.$filter);
        var i, a;
        (i = sn(r)) && (a = this.recurse(i));
        var s,
          u = on(r.body);
        u &&
          ((s = []),
          o(u, function (e, t) {
            var r = n.recurse(e);
            (e.input = r), s.push(r), (e.watchId = t);
          }));
        var c = [];
        o(r.body, function (e) {
          c.push(n.recurse(e.expression));
        });
        var l =
          0 === r.body.length
            ? function () {}
            : 1 === r.body.length
            ? c[0]
            : function (e, t) {
                var n;
                return (
                  o(c, function (r) {
                    n = r(e, t);
                  }),
                  n
                );
              };
        return (
          a &&
            (l.assign = function (e, t, n) {
              return a(e, n, t);
            }),
          s && (l.inputs = s),
          (l.literal = un(r)),
          (l.constant = cn(r)),
          l
        );
      },
      recurse: function (e, t, r) {
        var i,
          a,
          s,
          u = this;
        if (e.input) return this.inputs(e.input, e.watchId);
        switch (e.type) {
          case lo.Literal:
            return this.value(e.value, t);
          case lo.UnaryExpression:
            return (
              (a = this.recurse(e.argument)), this["unary" + e.operator](a, t)
            );
          case lo.BinaryExpression:
            return (
              (i = this.recurse(e.left)),
              (a = this.recurse(e.right)),
              this["binary" + e.operator](i, a, t)
            );
          case lo.LogicalExpression:
            return (
              (i = this.recurse(e.left)),
              (a = this.recurse(e.right)),
              this["binary" + e.operator](i, a, t)
            );
          case lo.ConditionalExpression:
            return this["ternary?:"](
              this.recurse(e.test),
              this.recurse(e.alternate),
              this.recurse(e.consequent),
              t
            );
          case lo.Identifier:
            return (
              Yt(e.name, u.expression),
              u.identifier(
                e.name,
                u.expensiveChecks || hn(e.name),
                t,
                r,
                u.expression
              )
            );
          case lo.MemberExpression:
            return (
              (i = this.recurse(e.object, !1, !!r)),
              e.computed ||
                (Yt(e.property.name, u.expression), (a = e.property.name)),
              e.computed && (a = this.recurse(e.property)),
              e.computed
                ? this.computedMember(i, a, t, r, u.expression)
                : this.nonComputedMember(
                    i,
                    a,
                    u.expensiveChecks,
                    t,
                    r,
                    u.expression
                  )
            );
          case lo.CallExpression:
            return (
              (s = []),
              o(e.arguments, function (e) {
                s.push(u.recurse(e));
              }),
              e.filter && (a = this.$filter(e.callee.name)),
              e.filter || (a = this.recurse(e.callee, !0)),
              e.filter
                ? function (e, r, i, o) {
                    for (var u = [], c = 0; c < s.length; ++c)
                      u.push(s[c](e, r, i, o));
                    var l = a.apply(n, u, o);
                    return t ? { context: n, name: n, value: l } : l;
                  }
                : function (e, n, r, i) {
                    var o,
                      c = a(e, n, r, i);
                    if (null != c.value) {
                      Zt(c.context, u.expression), Xt(c.value, u.expression);
                      for (var l = [], f = 0; f < s.length; ++f)
                        l.push(Zt(s[f](e, n, r, i), u.expression));
                      o = Zt(c.value.apply(c.context, l), u.expression);
                    }
                    return t ? { value: o } : o;
                  }
            );
          case lo.AssignmentExpression:
            return (
              (i = this.recurse(e.left, !0, 1)),
              (a = this.recurse(e.right)),
              function (e, n, r, o) {
                var s = i(e, n, r, o),
                  c = a(e, n, r, o);
                return (
                  Zt(s.value, u.expression),
                  Qt(s.context),
                  (s.context[s.name] = c),
                  t ? { value: c } : c
                );
              }
            );
          case lo.ArrayExpression:
            return (
              (s = []),
              o(e.elements, function (e) {
                s.push(u.recurse(e));
              }),
              function (e, n, r, i) {
                for (var o = [], a = 0; a < s.length; ++a)
                  o.push(s[a](e, n, r, i));
                return t ? { value: o } : o;
              }
            );
          case lo.ObjectExpression:
            return (
              (s = []),
              o(e.properties, function (e) {
                s.push({
                  key:
                    e.key.type === lo.Identifier
                      ? e.key.name
                      : "" + e.key.value,
                  value: u.recurse(e.value),
                });
              }),
              function (e, n, r, i) {
                for (var o = {}, a = 0; a < s.length; ++a)
                  o[s[a].key] = s[a].value(e, n, r, i);
                return t ? { value: o } : o;
              }
            );
          case lo.ThisExpression:
            return function (e) {
              return t ? { value: e } : e;
            };
          case lo.NGValueParameter:
            return function (e, n, r, i) {
              return t ? { value: r } : r;
            };
        }
      },
      "unary+": function (e, t) {
        return function (n, r, i, o) {
          var a = e(n, r, i, o);
          return (a = b(a) ? +a : 0), t ? { value: a } : a;
        };
      },
      "unary-": function (e, t) {
        return function (n, r, i, o) {
          var a = e(n, r, i, o);
          return (a = b(a) ? -a : 0), t ? { value: a } : a;
        };
      },
      "unary!": function (e, t) {
        return function (n, r, i, o) {
          var a = !e(n, r, i, o);
          return t ? { value: a } : a;
        };
      },
      "binary+": function (e, t, n) {
        return function (r, i, o, a) {
          var s = e(r, i, o, a),
            u = t(r, i, o, a),
            c = tn(s, u);
          return n ? { value: c } : c;
        };
      },
      "binary-": function (e, t, n) {
        return function (r, i, o, a) {
          var s = e(r, i, o, a),
            u = t(r, i, o, a),
            c = (b(s) ? s : 0) - (b(u) ? u : 0);
          return n ? { value: c } : c;
        };
      },
      "binary*": function (e, t, n) {
        return function (r, i, o, a) {
          var s = e(r, i, o, a) * t(r, i, o, a);
          return n ? { value: s } : s;
        };
      },
      "binary/": function (e, t, n) {
        return function (r, i, o, a) {
          var s = e(r, i, o, a) / t(r, i, o, a);
          return n ? { value: s } : s;
        };
      },
      "binary%": function (e, t, n) {
        return function (r, i, o, a) {
          var s = e(r, i, o, a) % t(r, i, o, a);
          return n ? { value: s } : s;
        };
      },
      "binary===": function (e, t, n) {
        return function (r, i, o, a) {
          var s = e(r, i, o, a) === t(r, i, o, a);
          return n ? { value: s } : s;
        };
      },
      "binary!==": function (e, t, n) {
        return function (r, i, o, a) {
          var s = e(r, i, o, a) !== t(r, i, o, a);
          return n ? { value: s } : s;
        };
      },
      "binary==": function (e, t, n) {
        return function (r, i, o, a) {
          var s = e(r, i, o, a) == t(r, i, o, a);
          return n ? { value: s } : s;
        };
      },
      "binary!=": function (e, t, n) {
        return function (r, i, o, a) {
          var s = e(r, i, o, a) != t(r, i, o, a);
          return n ? { value: s } : s;
        };
      },
      "binary<": function (e, t, n) {
        return function (r, i, o, a) {
          var s = e(r, i, o, a) < t(r, i, o, a);
          return n ? { value: s } : s;
        };
      },
      "binary>": function (e, t, n) {
        return function (r, i, o, a) {
          var s = e(r, i, o, a) > t(r, i, o, a);
          return n ? { value: s } : s;
        };
      },
      "binary<=": function (e, t, n) {
        return function (r, i, o, a) {
          var s = e(r, i, o, a) <= t(r, i, o, a);
          return n ? { value: s } : s;
        };
      },
      "binary>=": function (e, t, n) {
        return function (r, i, o, a) {
          var s = e(r, i, o, a) >= t(r, i, o, a);
          return n ? { value: s } : s;
        };
      },
      "binary&&": function (e, t, n) {
        return function (r, i, o, a) {
          var s = e(r, i, o, a) && t(r, i, o, a);
          return n ? { value: s } : s;
        };
      },
      "binary||": function (e, t, n) {
        return function (r, i, o, a) {
          var s = e(r, i, o, a) || t(r, i, o, a);
          return n ? { value: s } : s;
        };
      },
      "ternary?:": function (e, t, n, r) {
        return function (i, o, a, s) {
          var u = e(i, o, a, s) ? t(i, o, a, s) : n(i, o, a, s);
          return r ? { value: u } : u;
        };
      },
      value: function (e, t) {
        return function () {
          return t ? { context: n, name: n, value: e } : e;
        };
      },
      identifier: function (e, t, r, i, o) {
        return function (a, s, u, c) {
          var l = s && e in s ? s : a;
          i && 1 !== i && l && !l[e] && (l[e] = {});
          var f = l ? l[e] : n;
          return t && Zt(f, o), r ? { context: l, name: e, value: f } : f;
        };
      },
      computedMember: function (e, t, n, r, i) {
        return function (o, a, s, u) {
          var c,
            l,
            f = e(o, a, s, u);
          return (
            null != f &&
              ((c = t(o, a, s, u)),
              (c = Kt(c)),
              Yt(c, i),
              r && 1 !== r && (Qt(f), f && !f[c] && (f[c] = {})),
              (l = f[c]),
              Zt(l, i)),
            n ? { context: f, name: c, value: l } : l
          );
        };
      },
      nonComputedMember: function (e, t, r, i, o, a) {
        return function (s, u, c, l) {
          var f = e(s, u, c, l);
          o && 1 !== o && (Qt(f), f && !f[t] && (f[t] = {}));
          var h = null != f ? f[t] : n;
          return (
            (r || hn(t)) && Zt(h, a), i ? { context: f, name: t, value: h } : h
          );
        };
      },
      inputs: function (e, t) {
        return function (n, r, i, o) {
          return o ? o[t] : e(n, r, i);
        };
      },
    });
  var fo = function (e, t, n) {
    (this.lexer = e),
      (this.$filter = t),
      (this.options = n),
      (this.ast = new lo(this.lexer)),
      (this.astCompiler = n.csp ? new fn(this.ast, t) : new ln(this.ast, t));
  };
  fo.prototype = {
    constructor: fo,
    parse: function (e) {
      return this.astCompiler.compile(e, this.options.expensiveChecks);
    },
  };
  var ho = Object.prototype.valueOf,
    po = r("$sce"),
    $o = {
      HTML: "html",
      CSS: "css",
      URL: "url",
      RESOURCE_URL: "resourceUrl",
      JS: "js",
    },
    Fi = r("$compile"),
    vo = t.createElement("a"),
    mo = Mn(e.location.href);
  (Nn.$inject = ["$document"]), (Pn.$inject = ["$provide"]);
  var go = 22,
    yo = ".",
    bo = "0";
  (_n.$inject = ["$locale"]), (Fn.$inject = ["$locale"]);
  var wo = {
      yyyy: zn("FullYear", 4),
      yy: zn("FullYear", 2, 0, !0),
      y: zn("FullYear", 1),
      MMMM: Wn("Month"),
      MMM: Wn("Month", !0),
      MM: zn("Month", 2, 1),
      M: zn("Month", 1, 1),
      dd: zn("Date", 2),
      d: zn("Date", 1),
      HH: zn("Hours", 2),
      H: zn("Hours", 1),
      hh: zn("Hours", 2, -12),
      h: zn("Hours", 1, -12),
      mm: zn("Minutes", 2),
      m: zn("Minutes", 1),
      ss: zn("Seconds", 2),
      s: zn("Seconds", 1),
      sss: zn("Milliseconds", 3),
      EEEE: Wn("Day"),
      EEE: Wn("Day", !0),
      a: Zn,
      Z: Gn,
      ww: Kn(2),
      w: Kn(1),
      G: Xn,
      GG: Xn,
      GGG: Xn,
      GGGG: Qn,
    },
    xo =
      /((?:[^yMdHhmsaZEwG']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|d+|H+|h+|m+|s+|a|Z|G+|w+))(.*)/,
    So = /^\-?\d+$/;
  er.$inject = ["$locale"];
  var Eo = m(Ar),
    Co = m(Or);
  rr.$inject = ["$parse"];
  var Ao = m({
      restrict: "E",
      compile: function (e, t) {
        return t.href || t.xlinkHref
          ? void 0
          : function (e, t) {
              if ("a" === t[0].nodeName.toLowerCase()) {
                var n =
                  "[object SVGAnimatedString]" === qr.call(t.prop("href"))
                    ? "xlink:href"
                    : "href";
                t.on("click", function (e) {
                  t.attr(n) || e.preventDefault();
                });
              }
            };
      },
    }),
    ko = {};
  o(xi, function (e, t) {
    function n(e, n, i) {
      e.$watch(i[r], function (e) {
        i.$set(t, !!e);
      });
    }
    if ("multiple" != e) {
      var r = ht("ng-" + t),
        i = n;
      "checked" === e &&
        (i = function (e, t, i) {
          i.ngModel !== i[r] && n(e, t, i);
        }),
        (ko[r] = function () {
          return { restrict: "A", priority: 100, link: i };
        });
    }
  }),
    o(Ei, function (e, t) {
      ko[t] = function () {
        return {
          priority: 100,
          link: function (e, n, r) {
            if ("ngPattern" === t && "/" == r.ngPattern.charAt(0)) {
              var i = r.ngPattern.match(Er);
              if (i) return void r.$set("ngPattern", new RegExp(i[1], i[2]));
            }
            e.$watch(r[t], function (e) {
              r.$set(t, e);
            });
          },
        };
      };
    }),
    o(["src", "srcset", "href"], function (e) {
      var t = ht("ng-" + e);
      ko[t] = function () {
        return {
          priority: 99,
          link: function (n, r, i) {
            var o = e,
              a = e;
            "href" === e &&
              "[object SVGAnimatedString]" === qr.call(r.prop("href")) &&
              ((a = "xlinkHref"), (i.$attr[a] = "xlink:href"), (o = null)),
              i.$observe(t, function (t) {
                return t
                  ? (i.$set(a, t), void (Tr && o && r.prop(o, i[a])))
                  : void ("href" === e && i.$set(a, null));
              });
          },
        };
      };
    });
  var Oo = {
      $addControl: $,
      $$renameControl: or,
      $removeControl: $,
      $setValidity: $,
      $setDirty: $,
      $setPristine: $,
      $setSubmitted: $,
    },
    Mo = "ng-submitted";
  ar.$inject = ["$element", "$attrs", "$scope", "$animate", "$interpolate"];
  var jo = function (e) {
      return [
        "$timeout",
        "$parse",
        function (t, r) {
          function i(e) {
            return "" === e ? r('this[""]').assign : r(e).assign || $;
          }
          var o = {
            name: "form",
            restrict: e ? "EAC" : "E",
            require: ["form", "^^?form"],
            controller: ar,
            compile: function (r, o) {
              r.addClass(ha).addClass(la);
              var a = o.name ? "name" : e && o.ngForm ? "ngForm" : !1;
              return {
                pre: function (e, r, o, s) {
                  var u = s[0];
                  if (!("action" in o)) {
                    var c = function (t) {
                      e.$apply(function () {
                        u.$commitViewValue(), u.$setSubmitted();
                      }),
                        t.preventDefault();
                    };
                    ci(r[0], "submit", c),
                      r.on("$destroy", function () {
                        t(
                          function () {
                            li(r[0], "submit", c);
                          },
                          0,
                          !1
                        );
                      });
                  }
                  var l = s[1] || u.$$parentForm;
                  l.$addControl(u);
                  var h = a ? i(u.$name) : $;
                  a &&
                    (h(e, u),
                    o.$observe(a, function (t) {
                      u.$name !== t &&
                        (h(e, n),
                        u.$$parentForm.$$renameControl(u, t),
                        (h = i(u.$name))(e, u));
                    })),
                    r.on("$destroy", function () {
                      u.$$parentForm.$removeControl(u), h(e, n), f(u, Oo);
                    });
                },
              };
            },
          };
          return o;
        },
      ];
    },
    To = jo(),
    No = jo(!0),
    Vo =
      /\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z)/,
    Po =
      /^[a-z][a-z\d.+-]*:\/*(?:[^:@]+(?::[^@]+)?@)?(?:[^\s:\/?#]+|\[[a-f\d:]+\])(?::\d+)?(?:\/[^?#]*)?(?:\?[^#]*)?(?:#.*)?$/i,
    Io =
      /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i,
    Do = /^\s*(\-|\+)?(\d+|(\d*(\.\d*)))([eE][+-]?\d+)?\s*$/,
    Ro = /^(\d{4})-(\d{2})-(\d{2})$/,
    qo = /^(\d{4})-(\d\d)-(\d\d)T(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/,
    _o = /^(\d{4})-W(\d\d)$/,
    Fo = /^(\d{4})-(\d\d)$/,
    Uo = /^(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/,
    Ho = "keydown wheel mousedown",
    Bo = ve();
  o("date,datetime-local,month,time,week".split(","), function (e) {
    Bo[e] = !0;
  });
  var Lo = {
      text: ur,
      date: hr("date", Ro, fr(Ro, ["yyyy", "MM", "dd"]), "yyyy-MM-dd"),
      "datetime-local": hr(
        "datetimelocal",
        qo,
        fr(qo, ["yyyy", "MM", "dd", "HH", "mm", "ss", "sss"]),
        "yyyy-MM-ddTHH:mm:ss.sss"
      ),
      time: hr("time", Uo, fr(Uo, ["HH", "mm", "ss", "sss"]), "HH:mm:ss.sss"),
      week: hr("week", _o, lr, "yyyy-Www"),
      month: hr("month", Fo, fr(Fo, ["yyyy", "MM"]), "yyyy-MM"),
      number: dr,
      url: $r,
      email: vr,
      radio: mr,
      checkbox: yr,
      hidden: $,
      button: $,
      submit: $,
      reset: $,
      file: $,
    },
    zo = [
      "$browser",
      "$sniffer",
      "$filter",
      "$parse",
      function (e, t, n, r) {
        return {
          restrict: "E",
          require: ["?ngModel"],
          link: {
            pre: function (i, o, a, s) {
              s[0] && (Lo[Ar(a.type)] || Lo.text)(i, o, a, s[0], t, e, n, r);
            },
          },
        };
      },
    ],
    Wo = /^(true|false|\d+)$/,
    Go = function () {
      return {
        restrict: "A",
        priority: 100,
        compile: function (e, t) {
          return Wo.test(t.ngValue)
            ? function (e, t, n) {
                n.$set("value", e.$eval(n.ngValue));
              }
            : function (e, t, n) {
                e.$watch(n.ngValue, function (e) {
                  n.$set("value", e);
                });
              };
        },
      };
    },
    Jo = [
      "$compile",
      function (e) {
        return {
          restrict: "AC",
          compile: function (t) {
            return (
              e.$$addBindingClass(t),
              function (t, n, r) {
                e.$$addBindingInfo(n, r.ngBind),
                  (n = n[0]),
                  t.$watch(r.ngBind, function (e) {
                    n.textContent = y(e) ? "" : e;
                  });
              }
            );
          },
        };
      },
    ],
    Yo = [
      "$interpolate",
      "$compile",
      function (e, t) {
        return {
          compile: function (n) {
            return (
              t.$$addBindingClass(n),
              function (n, r, i) {
                var o = e(r.attr(i.$attr.ngBindTemplate));
                t.$$addBindingInfo(r, o.expressions),
                  (r = r[0]),
                  i.$observe("ngBindTemplate", function (e) {
                    r.textContent = y(e) ? "" : e;
                  });
              }
            );
          },
        };
      },
    ],
    Ko = [
      "$sce",
      "$parse",
      "$compile",
      function (e, t, n) {
        return {
          restrict: "A",
          compile: function (r, i) {
            var o = t(i.ngBindHtml),
              a = t(i.ngBindHtml, function (e) {
                return (e || "").toString();
              });
            return (
              n.$$addBindingClass(r),
              function (t, r, i) {
                n.$$addBindingInfo(r, i.ngBindHtml),
                  t.$watch(a, function () {
                    r.html(e.getTrustedHtml(o(t)) || "");
                  });
              }
            );
          },
        };
      },
    ],
    Zo = m({
      restrict: "A",
      require: "ngModel",
      link: function (e, t, n, r) {
        r.$viewChangeListeners.push(function () {
          e.$eval(n.ngChange);
        });
      },
    }),
    Xo = br("", !0),
    Qo = br("Odd", 0),
    ea = br("Even", 1),
    ta = ir({
      compile: function (e, t) {
        t.$set("ngCloak", n), e.removeClass("ng-cloak");
      },
    }),
    na = [
      function () {
        return { restrict: "A", scope: !0, controller: "@", priority: 500 };
      },
    ],
    ra = {},
    ia = { blur: !0, focus: !0 };
  o(
    "click dblclick mousedown mouseup mouseover mouseout mousemove mouseenter mouseleave keydown keyup keypress submit focus blur copy cut paste".split(
      " "
    ),
    function (e) {
      var t = ht("ng-" + e);
      ra[t] = [
        "$parse",
        "$rootScope",
        function (n, r) {
          return {
            restrict: "A",
            compile: function (i, o) {
              var a = n(o[t], null, !0);
              return function (t, n) {
                n.on(e, function (n) {
                  var i = function () {
                    a(t, { $event: n });
                  };
                  ia[e] && r.$$phase ? t.$evalAsync(i) : t.$apply(i);
                });
              };
            },
          };
        },
      ];
    }
  );
  var oa = [
      "$animate",
      function (e) {
        return {
          multiElement: !0,
          transclude: "element",
          priority: 600,
          terminal: !0,
          restrict: "A",
          $$tlb: !0,
          link: function (n, r, i, o, a) {
            var s, u, c;
            n.$watch(i.ngIf, function (n) {
              n
                ? u ||
                  a(function (n, o) {
                    (u = o),
                      (n[n.length++] = t.createComment(
                        " end ngIf: " + i.ngIf + " "
                      )),
                      (s = { clone: n }),
                      e.enter(n, r.parent(), r);
                  })
                : (c && (c.remove(), (c = null)),
                  u && (u.$destroy(), (u = null)),
                  s &&
                    ((c = $e(s.clone)),
                    e.leave(c).then(function () {
                      c = null;
                    }),
                    (s = null)));
            });
          },
        };
      },
    ],
    aa = [
      "$templateRequest",
      "$anchorScroll",
      "$animate",
      function (e, t, n) {
        return {
          restrict: "ECA",
          priority: 400,
          terminal: !0,
          transclude: "element",
          controller: Ur.noop,
          compile: function (r, i) {
            var o = i.ngInclude || i.src,
              a = i.onload || "",
              s = i.autoscroll;
            return function (r, i, u, c, l) {
              var f,
                h,
                p,
                d = 0,
                $ = function () {
                  h && (h.remove(), (h = null)),
                    f && (f.$destroy(), (f = null)),
                    p &&
                      (n.leave(p).then(function () {
                        h = null;
                      }),
                      (h = p),
                      (p = null));
                };
              r.$watch(o, function (o) {
                var u = function () {
                    !b(s) || (s && !r.$eval(s)) || t();
                  },
                  h = ++d;
                o
                  ? (e(o, !0).then(
                      function (e) {
                        if (!r.$$destroyed && h === d) {
                          var t = r.$new();
                          c.template = e;
                          var s = l(t, function (e) {
                            $(), n.enter(e, null, i).then(u);
                          });
                          (f = t),
                            (p = s),
                            f.$emit("$includeContentLoaded", o),
                            r.$eval(a);
                        }
                      },
                      function () {
                        r.$$destroyed ||
                          (h === d &&
                            ($(), r.$emit("$includeContentError", o)));
                      }
                    ),
                    r.$emit("$includeContentRequested", o))
                  : ($(), (c.template = null));
              });
            };
          },
        };
      },
    ],
    sa = [
      "$compile",
      function (e) {
        return {
          restrict: "ECA",
          priority: -400,
          require: "ngInclude",
          link: function (n, r, i, o) {
            return /SVG/.test(r[0].toString())
              ? (r.empty(),
                void e(Ae(o.template, t).childNodes)(
                  n,
                  function (e) {
                    r.append(e);
                  },
                  { futureParentElement: r }
                ))
              : (r.html(o.template), void e(r.contents())(n));
          },
        };
      },
    ],
    ua = ir({
      priority: 450,
      compile: function () {
        return {
          pre: function (e, t, n) {
            e.$eval(n.ngInit);
          },
        };
      },
    }),
    ca = function () {
      return {
        restrict: "A",
        priority: 100,
        require: "ngModel",
        link: function (e, t, r, i) {
          var a = t.attr(r.$attr.ngList) || ", ",
            s = "false" !== r.ngTrim,
            u = s ? Wr(a) : a,
            c = function (e) {
              if (!y(e)) {
                var t = [];
                return (
                  e &&
                    o(e.split(u), function (e) {
                      e && t.push(s ? Wr(e) : e);
                    }),
                  t
                );
              }
            };
          i.$parsers.push(c),
            i.$formatters.push(function (e) {
              return Lr(e) ? e.join(a) : n;
            }),
            (i.$isEmpty = function (e) {
              return !e || !e.length;
            });
        },
      };
    },
    la = "ng-valid",
    fa = "ng-invalid",
    ha = "ng-pristine",
    pa = "ng-dirty",
    da = "ng-untouched",
    $a = "ng-touched",
    va = "ng-pending",
    ma = r("ngModel"),
    ga = [
      "$scope",
      "$exceptionHandler",
      "$attrs",
      "$element",
      "$parse",
      "$animate",
      "$timeout",
      "$rootScope",
      "$q",
      "$interpolate",
      function (e, t, r, i, a, s, u, c, l, f) {
        (this.$viewValue = Number.NaN),
          (this.$modelValue = Number.NaN),
          (this.$$rawModelValue = n),
          (this.$validators = {}),
          (this.$asyncValidators = {}),
          (this.$parsers = []),
          (this.$formatters = []),
          (this.$viewChangeListeners = []),
          (this.$untouched = !0),
          (this.$touched = !1),
          (this.$pristine = !0),
          (this.$dirty = !1),
          (this.$valid = !0),
          (this.$invalid = !1),
          (this.$error = {}),
          (this.$$success = {}),
          (this.$pending = n),
          (this.$name = f(r.name || "", !1)(e)),
          (this.$$parentForm = Oo);
        var h,
          p = a(r.ngModel),
          d = p.assign,
          v = p,
          m = d,
          g = null,
          w = this;
        (this.$$setOptions = function (e) {
          if (((w.$options = e), e && e.getterSetter)) {
            var t = a(r.ngModel + "()"),
              n = a(r.ngModel + "($$$p)");
            (v = function (e) {
              var n = p(e);
              return A(n) && (n = t(e)), n;
            }),
              (m = function (e, t) {
                A(p(e)) ? n(e, { $$$p: w.$modelValue }) : d(e, w.$modelValue);
              });
          } else if (!p.assign)
            throw ma(
              "nonassign",
              "Expression '{0}' is non-assignable. Element: {1}",
              r.ngModel,
              X(i)
            );
        }),
          (this.$render = $),
          (this.$isEmpty = function (e) {
            return y(e) || "" === e || null === e || e !== e;
          });
        var x = 0;
        wr({
          ctrl: this,
          $element: i,
          set: function (e, t) {
            e[t] = !0;
          },
          unset: function (e, t) {
            delete e[t];
          },
          $animate: s,
        }),
          (this.$setPristine = function () {
            (w.$dirty = !1),
              (w.$pristine = !0),
              s.removeClass(i, pa),
              s.addClass(i, ha);
          }),
          (this.$setDirty = function () {
            (w.$dirty = !0),
              (w.$pristine = !1),
              s.removeClass(i, ha),
              s.addClass(i, pa),
              w.$$parentForm.$setDirty();
          }),
          (this.$setUntouched = function () {
            (w.$touched = !1), (w.$untouched = !0), s.setClass(i, da, $a);
          }),
          (this.$setTouched = function () {
            (w.$touched = !0), (w.$untouched = !1), s.setClass(i, $a, da);
          }),
          (this.$rollbackViewValue = function () {
            u.cancel(g),
              (w.$viewValue = w.$$lastCommittedViewValue),
              w.$render();
          }),
          (this.$validate = function () {
            if (!E(w.$modelValue) || !isNaN(w.$modelValue)) {
              var e = w.$$lastCommittedViewValue,
                t = w.$$rawModelValue,
                r = w.$valid,
                i = w.$modelValue,
                o = w.$options && w.$options.allowInvalid;
              w.$$runValidators(t, e, function (e) {
                o ||
                  r === e ||
                  ((w.$modelValue = e ? t : n),
                  w.$modelValue !== i && w.$$writeModelToScope());
              });
            }
          }),
          (this.$$runValidators = function (e, t, r) {
            function i() {
              var e = w.$$parserName || "parse";
              return y(h)
                ? (u(e, null), !0)
                : (h ||
                    (o(w.$validators, function (e, t) {
                      u(t, null);
                    }),
                    o(w.$asyncValidators, function (e, t) {
                      u(t, null);
                    })),
                  u(e, h),
                  h);
            }
            function a() {
              var n = !0;
              return (
                o(w.$validators, function (r, i) {
                  var o = r(e, t);
                  (n = n && o), u(i, o);
                }),
                n
                  ? !0
                  : (o(w.$asyncValidators, function (e, t) {
                      u(t, null);
                    }),
                    !1)
              );
            }
            function s() {
              var r = [],
                i = !0;
              o(w.$asyncValidators, function (o, a) {
                var s = o(e, t);
                if (!P(s))
                  throw ma(
                    "nopromise",
                    "Expected asynchronous validator to return a promise but got '{0}' instead.",
                    s
                  );
                u(a, n),
                  r.push(
                    s.then(
                      function () {
                        u(a, !0);
                      },
                      function (e) {
                        (i = !1), u(a, !1);
                      }
                    )
                  );
              }),
                r.length
                  ? l.all(r).then(function () {
                      c(i);
                    }, $)
                  : c(!0);
            }
            function u(e, t) {
              f === x && w.$setValidity(e, t);
            }
            function c(e) {
              f === x && r(e);
            }
            x++;
            var f = x;
            return i() && a() ? void s() : void c(!1);
          }),
          (this.$commitViewValue = function () {
            var e = w.$viewValue;
            u.cancel(g),
              (w.$$lastCommittedViewValue !== e ||
                ("" === e && w.$$hasNativeValidators)) &&
                ((w.$$lastCommittedViewValue = e),
                w.$pristine && this.$setDirty(),
                this.$$parseAndValidate());
          }),
          (this.$$parseAndValidate = function () {
            function t() {
              w.$modelValue !== a && w.$$writeModelToScope();
            }
            var r = w.$$lastCommittedViewValue,
              i = r;
            if ((h = y(i) ? n : !0))
              for (var o = 0; o < w.$parsers.length; o++)
                if (((i = w.$parsers[o](i)), y(i))) {
                  h = !1;
                  break;
                }
            E(w.$modelValue) && isNaN(w.$modelValue) && (w.$modelValue = v(e));
            var a = w.$modelValue,
              s = w.$options && w.$options.allowInvalid;
            (w.$$rawModelValue = i),
              s && ((w.$modelValue = i), t()),
              w.$$runValidators(i, w.$$lastCommittedViewValue, function (e) {
                s || ((w.$modelValue = e ? i : n), t());
              });
          }),
          (this.$$writeModelToScope = function () {
            m(e, w.$modelValue),
              o(w.$viewChangeListeners, function (e) {
                try {
                  e();
                } catch (n) {
                  t(n);
                }
              });
          }),
          (this.$setViewValue = function (e, t) {
            (w.$viewValue = e),
              (w.$options && !w.$options.updateOnDefault) ||
                w.$$debounceViewValueCommit(t);
          }),
          (this.$$debounceViewValueCommit = function (t) {
            var n,
              r = 0,
              i = w.$options;
            i &&
              b(i.debounce) &&
              ((n = i.debounce),
              E(n)
                ? (r = n)
                : E(n[t])
                ? (r = n[t])
                : E(n["default"]) && (r = n["default"])),
              u.cancel(g),
              r
                ? (g = u(function () {
                    w.$commitViewValue();
                  }, r))
                : c.$$phase
                ? w.$commitViewValue()
                : e.$apply(function () {
                    w.$commitViewValue();
                  });
          }),
          e.$watch(function () {
            var t = v(e);
            if (
              t !== w.$modelValue &&
              (w.$modelValue === w.$modelValue || t === t)
            ) {
              (w.$modelValue = w.$$rawModelValue = t), (h = n);
              for (var r = w.$formatters, i = r.length, o = t; i--; )
                o = r[i](o);
              w.$viewValue !== o &&
                ((w.$viewValue = w.$$lastCommittedViewValue = o),
                w.$render(),
                w.$$runValidators(t, o, $));
            }
            return t;
          });
      },
    ],
    ya = [
      "$rootScope",
      function (e) {
        return {
          restrict: "A",
          require: ["ngModel", "^?form", "^?ngModelOptions"],
          controller: ga,
          priority: 1,
          compile: function (t) {
            return (
              t.addClass(ha).addClass(da).addClass(la),
              {
                pre: function (e, t, n, r) {
                  var i = r[0],
                    o = r[1] || i.$$parentForm;
                  i.$$setOptions(r[2] && r[2].$options),
                    o.$addControl(i),
                    n.$observe("name", function (e) {
                      i.$name !== e && i.$$parentForm.$$renameControl(i, e);
                    }),
                    e.$on("$destroy", function () {
                      i.$$parentForm.$removeControl(i);
                    });
                },
                post: function (t, n, r, i) {
                  var o = i[0];
                  o.$options &&
                    o.$options.updateOn &&
                    n.on(o.$options.updateOn, function (e) {
                      o.$$debounceViewValueCommit(e && e.type);
                    }),
                    n.on("blur", function (n) {
                      o.$touched ||
                        (e.$$phase
                          ? t.$evalAsync(o.$setTouched)
                          : t.$apply(o.$setTouched));
                    });
                },
              }
            );
          },
        };
      },
    ],
    ba = /(\s+|^)default(\s+|$)/,
    wa = function () {
      return {
        restrict: "A",
        controller: [
          "$scope",
          "$attrs",
          function (e, t) {
            var n = this;
            (this.$options = F(e.$eval(t.ngModelOptions))),
              b(this.$options.updateOn)
                ? ((this.$options.updateOnDefault = !1),
                  (this.$options.updateOn = Wr(
                    this.$options.updateOn.replace(ba, function () {
                      return (n.$options.updateOnDefault = !0), " ";
                    })
                  )))
                : (this.$options.updateOnDefault = !0);
          },
        ],
      };
    },
    xa = ir({ terminal: !0, priority: 1e3 }),
    Sa = r("ngOptions"),
    Ea =
      /^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+group\s+by\s+([\s\S]+?))?(?:\s+disable\s+when\s+([\s\S]+?))?\s+for\s+(?:([\$\w][\$\w]*)|(?:\(\s*([\$\w][\$\w]*)\s*,\s*([\$\w][\$\w]*)\s*\)))\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?$/,
    Ca = [
      "$compile",
      "$parse",
      function (e, n) {
        function r(e, t, r) {
          function o(e, t, n, r, i) {
            (this.selectValue = e),
              (this.viewValue = t),
              (this.label = n),
              (this.group = r),
              (this.disabled = i);
          }
          function a(e) {
            var t;
            if (!c && i(e)) t = e;
            else {
              t = [];
              for (var n in e)
                e.hasOwnProperty(n) && "$" !== n.charAt(0) && t.push(n);
            }
            return t;
          }
          var s = e.match(Ea);
          if (!s)
            throw Sa(
              "iexp",
              "Expected expression in form of '_select_ (as _label_)? for (_key_,)?_value_ in _collection_' but got '{0}'. Element: {1}",
              e,
              X(t)
            );
          var u = s[5] || s[7],
            c = s[6],
            l = / as /.test(s[0]) && s[1],
            f = s[9],
            h = n(s[2] ? s[1] : u),
            p = l && n(l),
            d = p || h,
            $ = f && n(f),
            v = f
              ? function (e, t) {
                  return $(r, t);
                }
              : function (e) {
                  return Ze(e);
                },
            m = function (e, t) {
              return v(e, S(e, t));
            },
            g = n(s[2] || s[1]),
            y = n(s[3] || ""),
            b = n(s[4] || ""),
            w = n(s[8]),
            x = {},
            S = c
              ? function (e, t) {
                  return (x[c] = t), (x[u] = e), x;
                }
              : function (e) {
                  return (x[u] = e), x;
                };
          return {
            trackBy: f,
            getTrackByValue: m,
            getWatchables: n(w, function (e) {
              var t = [];
              e = e || [];
              for (var n = a(e), i = n.length, o = 0; i > o; o++) {
                var u = e === n ? o : n[o],
                  c = (e[u], S(e[u], u)),
                  l = v(e[u], c);
                if ((t.push(l), s[2] || s[1])) {
                  var f = g(r, c);
                  t.push(f);
                }
                if (s[4]) {
                  var h = b(r, c);
                  t.push(h);
                }
              }
              return t;
            }),
            getOptions: function () {
              for (
                var e = [],
                  t = {},
                  n = w(r) || [],
                  i = a(n),
                  s = i.length,
                  u = 0;
                s > u;
                u++
              ) {
                var c = n === i ? u : i[u],
                  l = n[c],
                  h = S(l, c),
                  p = d(r, h),
                  $ = v(p, h),
                  x = g(r, h),
                  E = y(r, h),
                  C = b(r, h),
                  A = new o($, p, x, E, C);
                e.push(A), (t[$] = A);
              }
              return {
                items: e,
                selectValueMap: t,
                getOptionFromViewValue: function (e) {
                  return t[m(e)];
                },
                getViewValueFromOption: function (e) {
                  return f ? Ur.copy(e.viewValue) : e.viewValue;
                },
              };
            },
          };
        }
        function a(t, n, i, a) {
          function c(e, t) {
            (e.element = t),
              (t.disabled = e.disabled),
              e.label !== t.label &&
                ((t.label = e.label), (t.textContent = e.label)),
              e.value !== t.value && (t.value = e.selectValue);
          }
          function l(e, t, n, r) {
            var i;
            return (
              t && Ar(t.nodeName) === n
                ? (i = t)
                : ((i = r.cloneNode(!1)),
                  t ? e.insertBefore(i, t) : e.appendChild(i)),
              i
            );
          }
          function f(e) {
            for (var t; e; ) (t = e.nextSibling), Be(e), (e = t);
          }
          function h(e) {
            var t = $ && $[0],
              n = x && x[0];
            if (t || n)
              for (
                ;
                e &&
                (e === t ||
                  e === n ||
                  e.nodeType === ri ||
                  ("option" === q(e) && "" === e.value));

              )
                e = e.nextSibling;
            return e;
          }
          function p() {
            var e = S && v.readValue();
            S = E.getOptions();
            var t = {},
              r = n[0].firstChild;
            if (
              (w && n.prepend($),
              (r = h(r)),
              S.items.forEach(function (e) {
                var i, o, a;
                e.group
                  ? ((i = t[e.group]),
                    i ||
                      ((o = l(n[0], r, "optgroup", u)),
                      (r = o.nextSibling),
                      (o.label = e.group),
                      (i = t[e.group] =
                        {
                          groupElement: o,
                          currentOptionElement: o.firstChild,
                        })),
                    (a = l(
                      i.groupElement,
                      i.currentOptionElement,
                      "option",
                      s
                    )),
                    c(e, a),
                    (i.currentOptionElement = a.nextSibling))
                  : ((a = l(n[0], r, "option", s)),
                    c(e, a),
                    (r = a.nextSibling));
              }),
              Object.keys(t).forEach(function (e) {
                f(t[e].currentOptionElement);
              }),
              f(r),
              d.$render(),
              !d.$isEmpty(e))
            ) {
              var i = v.readValue(),
                o = E.trackBy || m;
              (o ? H(e, i) : e === i) || (d.$setViewValue(i), d.$render());
            }
          }
          var d = a[1];
          if (d) {
            for (
              var $,
                v = a[0],
                m = i.multiple,
                g = 0,
                y = n.children(),
                b = y.length;
              b > g;
              g++
            )
              if ("" === y[g].value) {
                $ = y.eq(g);
                break;
              }
            var w = !!$,
              x = Nr(s.cloneNode(!1));
            x.val("?");
            var S,
              E = r(i.ngOptions, n, t),
              C = function () {
                w || n.prepend($),
                  n.val(""),
                  $.prop("selected", !0),
                  $.attr("selected", !0);
              },
              A = function () {
                w || $.remove();
              },
              k = function () {
                n.prepend(x),
                  n.val("?"),
                  x.prop("selected", !0),
                  x.attr("selected", !0);
              },
              O = function () {
                x.remove();
              };
            m
              ? ((d.$isEmpty = function (e) {
                  return !e || 0 === e.length;
                }),
                (v.writeValue = function (e) {
                  S.items.forEach(function (e) {
                    e.element.selected = !1;
                  }),
                    e &&
                      e.forEach(function (e) {
                        var t = S.getOptionFromViewValue(e);
                        t && !t.disabled && (t.element.selected = !0);
                      });
                }),
                (v.readValue = function () {
                  var e = n.val() || [],
                    t = [];
                  return (
                    o(e, function (e) {
                      var n = S.selectValueMap[e];
                      n && !n.disabled && t.push(S.getViewValueFromOption(n));
                    }),
                    t
                  );
                }),
                E.trackBy &&
                  t.$watchCollection(
                    function () {
                      return Lr(d.$viewValue)
                        ? d.$viewValue.map(function (e) {
                            return E.getTrackByValue(e);
                          })
                        : void 0;
                    },
                    function () {
                      d.$render();
                    }
                  ))
              : ((v.writeValue = function (e) {
                  var t = S.getOptionFromViewValue(e);
                  t && !t.disabled
                    ? (n[0].value !== t.selectValue &&
                        (O(),
                        A(),
                        (n[0].value = t.selectValue),
                        (t.element.selected = !0)),
                      t.element.setAttribute("selected", "selected"))
                    : null === e || w
                    ? (O(), C())
                    : (A(), k());
                }),
                (v.readValue = function () {
                  var e = S.selectValueMap[n.val()];
                  return e && !e.disabled
                    ? (A(), O(), S.getViewValueFromOption(e))
                    : null;
                }),
                E.trackBy &&
                  t.$watch(
                    function () {
                      return E.getTrackByValue(d.$viewValue);
                    },
                    function () {
                      d.$render();
                    }
                  )),
              w
                ? ($.remove(), e($)(t), $.removeClass("ng-scope"))
                : ($ = Nr(s.cloneNode(!1))),
              p(),
              t.$watchCollection(E.getWatchables, p);
          }
        }
        var s = t.createElement("option"),
          u = t.createElement("optgroup");
        return {
          restrict: "A",
          terminal: !0,
          require: ["select", "?ngModel"],
          link: {
            pre: function (e, t, n, r) {
              r[0].registerOption = $;
            },
            post: a,
          },
        };
      },
    ],
    Aa = [
      "$locale",
      "$interpolate",
      "$log",
      function (e, t, n) {
        var r = /{}/g,
          i = /^when(Minus)?(.+)$/;
        return {
          link: function (a, s, u) {
            function c(e) {
              s.text(e || "");
            }
            var l,
              f = u.count,
              h = u.$attr.when && s.attr(u.$attr.when),
              p = u.offset || 0,
              d = a.$eval(h) || {},
              v = {},
              m = t.startSymbol(),
              g = t.endSymbol(),
              b = m + f + "-" + p + g,
              w = Ur.noop;
            o(u, function (e, t) {
              var n = i.exec(t);
              if (n) {
                var r = (n[1] ? "-" : "") + Ar(n[2]);
                d[r] = s.attr(u.$attr[t]);
              }
            }),
              o(d, function (e, n) {
                v[n] = t(e.replace(r, b));
              }),
              a.$watch(f, function (t) {
                var r = parseFloat(t),
                  i = isNaN(r);
                if (
                  (i || r in d || (r = e.pluralCat(r - p)),
                  r !== l && !(i && E(l) && isNaN(l)))
                ) {
                  w();
                  var o = v[r];
                  y(o)
                    ? (null != t &&
                        n.debug(
                          "ngPluralize: no rule defined for '" + r + "' in " + h
                        ),
                      (w = $),
                      c())
                    : (w = a.$watch(o, c)),
                    (l = r);
                }
              });
          },
        };
      },
    ],
    ka = [
      "$parse",
      "$animate",
      function (e, a) {
        var s = "$$NG_REMOVED",
          u = r("ngRepeat"),
          c = function (e, t, n, r, i, o, a) {
            (e[n] = r),
              i && (e[i] = o),
              (e.$index = t),
              (e.$first = 0 === t),
              (e.$last = t === a - 1),
              (e.$middle = !(e.$first || e.$last)),
              (e.$odd = !(e.$even = 0 === (1 & t)));
          },
          l = function (e) {
            return e.clone[0];
          },
          f = function (e) {
            return e.clone[e.clone.length - 1];
          };
        return {
          restrict: "A",
          multiElement: !0,
          transclude: "element",
          priority: 1e3,
          terminal: !0,
          $$tlb: !0,
          compile: function (r, h) {
            var p = h.ngRepeat,
              d = t.createComment(" end ngRepeat: " + p + " "),
              $ = p.match(
                /^\s*([\s\S]+?)\s+in\s+([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+track\s+by\s+([\s\S]+?))?\s*$/
              );
            if (!$)
              throw u(
                "iexp",
                "Expected expression in form of '_item_ in _collection_[ track by _id_]' but got '{0}'.",
                p
              );
            var v = $[1],
              m = $[2],
              g = $[3],
              y = $[4];
            if (
              (($ = v.match(
                /^(?:(\s*[\$\w]+)|\(\s*([\$\w]+)\s*,\s*([\$\w]+)\s*\))$/
              )),
              !$)
            )
              throw u(
                "iidexp",
                "'_item_' in '_item_ in _collection_' should be an identifier or '(_key_, _value_)' expression, but got '{0}'.",
                v
              );
            var b = $[3] || $[1],
              w = $[2];
            if (
              g &&
              (!/^[$a-zA-Z_][$a-zA-Z0-9_]*$/.test(g) ||
                /^(null|undefined|this|\$index|\$first|\$middle|\$last|\$even|\$odd|\$parent|\$root|\$id)$/.test(
                  g
                ))
            )
              throw u(
                "badident",
                "alias '{0}' is invalid --- must be a valid JS identifier which is not a reserved name.",
                g
              );
            var x,
              S,
              E,
              C,
              A = { $id: Ze };
            return (
              y
                ? (x = e(y))
                : ((E = function (e, t) {
                    return Ze(t);
                  }),
                  (C = function (e) {
                    return e;
                  })),
              function (e, t, r, h, $) {
                x &&
                  (S = function (t, n, r) {
                    return w && (A[w] = t), (A[b] = n), (A.$index = r), x(e, A);
                  });
                var v = ve();
                e.$watchCollection(m, function (r) {
                  var h,
                    m,
                    y,
                    x,
                    A,
                    k,
                    O,
                    M,
                    j,
                    T,
                    N,
                    V,
                    P = t[0],
                    I = ve();
                  if ((g && (e[g] = r), i(r))) (j = r), (M = S || E);
                  else {
                    (M = S || C), (j = []);
                    for (var D in r)
                      kr.call(r, D) && "$" !== D.charAt(0) && j.push(D);
                  }
                  for (x = j.length, N = new Array(x), h = 0; x > h; h++)
                    if (
                      ((A = r === j ? h : j[h]),
                      (k = r[A]),
                      (O = M(A, k, h)),
                      v[O])
                    )
                      (T = v[O]), delete v[O], (I[O] = T), (N[h] = T);
                    else {
                      if (I[O])
                        throw (
                          (o(N, function (e) {
                            e && e.scope && (v[e.id] = e);
                          }),
                          u(
                            "dupes",
                            "Duplicates in a repeater are not allowed. Use 'track by' expression to specify unique keys. Repeater: {0}, Duplicate key: {1}, Duplicate value: {2}",
                            p,
                            O,
                            k
                          ))
                        );
                      (N[h] = { id: O, scope: n, clone: n }), (I[O] = !0);
                    }
                  for (var R in v) {
                    if (
                      ((T = v[R]),
                      (V = $e(T.clone)),
                      a.leave(V),
                      V[0].parentNode)
                    )
                      for (h = 0, m = V.length; m > h; h++) V[h][s] = !0;
                    T.scope.$destroy();
                  }
                  for (h = 0; x > h; h++)
                    if (
                      ((A = r === j ? h : j[h]),
                      (k = r[A]),
                      (T = N[h]),
                      T.scope)
                    ) {
                      y = P;
                      do y = y.nextSibling;
                      while (y && y[s]);
                      l(T) != y && a.move($e(T.clone), null, P),
                        (P = f(T)),
                        c(T.scope, h, b, k, w, A, x);
                    } else
                      $(function (e, t) {
                        T.scope = t;
                        var n = d.cloneNode(!1);
                        (e[e.length++] = n),
                          a.enter(e, null, P),
                          (P = n),
                          (T.clone = e),
                          (I[T.id] = T),
                          c(T.scope, h, b, k, w, A, x);
                      });
                  v = I;
                });
              }
            );
          },
        };
      },
    ],
    Oa = "ng-hide",
    Ma = "ng-hide-animate",
    ja = [
      "$animate",
      function (e) {
        return {
          restrict: "A",
          multiElement: !0,
          link: function (t, n, r) {
            t.$watch(r.ngShow, function (t) {
              e[t ? "removeClass" : "addClass"](n, Oa, { tempClasses: Ma });
            });
          },
        };
      },
    ],
    Ta = [
      "$animate",
      function (e) {
        return {
          restrict: "A",
          multiElement: !0,
          link: function (t, n, r) {
            t.$watch(r.ngHide, function (t) {
              e[t ? "addClass" : "removeClass"](n, Oa, { tempClasses: Ma });
            });
          },
        };
      },
    ],
    Na = ir(function (e, t, n) {
      e.$watch(
        n.ngStyle,
        function (e, n) {
          n &&
            e !== n &&
            o(n, function (e, n) {
              t.css(n, "");
            }),
            e && t.css(e);
        },
        !0
      );
    }),
    Va = [
      "$animate",
      function (e) {
        return {
          require: "ngSwitch",
          controller: [
            "$scope",
            function () {
              this.cases = {};
            },
          ],
          link: function (n, r, i, a) {
            var s = i.ngSwitch || i.on,
              u = [],
              c = [],
              l = [],
              f = [],
              h = function (e, t) {
                return function () {
                  e.splice(t, 1);
                };
              };
            n.$watch(s, function (n) {
              var r, i;
              for (r = 0, i = l.length; i > r; ++r) e.cancel(l[r]);
              for (l.length = 0, r = 0, i = f.length; i > r; ++r) {
                var s = $e(c[r].clone);
                f[r].$destroy();
                var p = (l[r] = e.leave(s));
                p.then(h(l, r));
              }
              (c.length = 0),
                (f.length = 0),
                (u = a.cases["!" + n] || a.cases["?"]) &&
                  o(u, function (n) {
                    n.transclude(function (r, i) {
                      f.push(i);
                      var o = n.element;
                      r[r.length++] = t.createComment(" end ngSwitchWhen: ");
                      var a = { clone: r };
                      c.push(a), e.enter(r, o.parent(), o);
                    });
                  });
            });
          },
        };
      },
    ],
    Pa = ir({
      transclude: "element",
      priority: 1200,
      require: "^ngSwitch",
      multiElement: !0,
      link: function (e, t, n, r, i) {
        (r.cases["!" + n.ngSwitchWhen] = r.cases["!" + n.ngSwitchWhen] || []),
          r.cases["!" + n.ngSwitchWhen].push({ transclude: i, element: t });
      },
    }),
    Ia = ir({
      transclude: "element",
      priority: 1200,
      require: "^ngSwitch",
      multiElement: !0,
      link: function (e, t, n, r, i) {
        (r.cases["?"] = r.cases["?"] || []),
          r.cases["?"].push({ transclude: i, element: t });
      },
    }),
    Da = ir({
      restrict: "EAC",
      link: function (e, t, n, i, o) {
        if (!o)
          throw r("ngTransclude")(
            "orphan",
            "Illegal use of ngTransclude directive in the template! No parent directive that requires a transclusion found. Element: {0}",
            X(t)
          );
        o(function (e) {
          t.empty(), t.append(e);
        });
      },
    }),
    Ra = [
      "$templateCache",
      function (e) {
        return {
          restrict: "E",
          terminal: !0,
          compile: function (t, n) {
            if ("text/ng-template" == n.type) {
              var r = n.id,
                i = t[0].text;
              e.put(r, i);
            }
          },
        };
      },
    ],
    qa = { $setViewValue: $, $render: $ },
    _a = [
      "$element",
      "$scope",
      "$attrs",
      function (e, r, i) {
        var o = this,
          a = new Xe();
        (o.ngModelCtrl = qa),
          (o.unknownOption = Nr(t.createElement("option"))),
          (o.renderUnknownOption = function (t) {
            var n = "? " + Ze(t) + " ?";
            o.unknownOption.val(n), e.prepend(o.unknownOption), e.val(n);
          }),
          r.$on("$destroy", function () {
            o.renderUnknownOption = $;
          }),
          (o.removeUnknownOption = function () {
            o.unknownOption.parent() && o.unknownOption.remove();
          }),
          (o.readValue = function () {
            return o.removeUnknownOption(), e.val();
          }),
          (o.writeValue = function (t) {
            o.hasOption(t)
              ? (o.removeUnknownOption(),
                e.val(t),
                "" === t && o.emptyOption.prop("selected", !0))
              : null == t && o.emptyOption
              ? (o.removeUnknownOption(), e.val(""))
              : o.renderUnknownOption(t);
          }),
          (o.addOption = function (e, t) {
            if (t[0].nodeType !== ri) {
              pe(e, '"option value"'), "" === e && (o.emptyOption = t);
              var n = a.get(e) || 0;
              a.put(e, n + 1), o.ngModelCtrl.$render(), Sr(t);
            }
          }),
          (o.removeOption = function (e) {
            var t = a.get(e);
            t &&
              (1 === t
                ? (a.remove(e), "" === e && (o.emptyOption = n))
                : a.put(e, t - 1));
          }),
          (o.hasOption = function (e) {
            return !!a.get(e);
          }),
          (o.registerOption = function (e, t, n, r, i) {
            if (r) {
              var a;
              n.$observe("value", function (e) {
                b(a) && o.removeOption(a), (a = e), o.addOption(e, t);
              });
            } else
              i
                ? e.$watch(i, function (e, r) {
                    n.$set("value", e),
                      r !== e && o.removeOption(r),
                      o.addOption(e, t);
                  })
                : o.addOption(n.value, t);
            t.on("$destroy", function () {
              o.removeOption(n.value), o.ngModelCtrl.$render();
            });
          });
      },
    ],
    Fa = function () {
      function e(e, t, n, r) {
        var i = r[1];
        if (i) {
          var a = r[0];
          if (
            ((a.ngModelCtrl = i),
            t.on("change", function () {
              e.$apply(function () {
                i.$setViewValue(a.readValue());
              });
            }),
            n.multiple)
          ) {
            (a.readValue = function () {
              var e = [];
              return (
                o(t.find("option"), function (t) {
                  t.selected && e.push(t.value);
                }),
                e
              );
            }),
              (a.writeValue = function (e) {
                var n = new Xe(e);
                o(t.find("option"), function (e) {
                  e.selected = b(n.get(e.value));
                });
              });
            var s,
              u = NaN;
            e.$watch(function () {
              u !== i.$viewValue ||
                H(s, i.$viewValue) ||
                ((s = U(i.$viewValue)), i.$render()),
                (u = i.$viewValue);
            }),
              (i.$isEmpty = function (e) {
                return !e || 0 === e.length;
              });
          }
        }
      }
      function t(e, t, n, r) {
        var i = r[1];
        if (i) {
          var o = r[0];
          i.$render = function () {
            o.writeValue(i.$viewValue);
          };
        }
      }
      return {
        restrict: "E",
        require: ["select", "?ngModel"],
        controller: _a,
        priority: 1,
        link: { pre: e, post: t },
      };
    },
    Ua = [
      "$interpolate",
      function (e) {
        return {
          restrict: "E",
          priority: 100,
          compile: function (t, n) {
            if (b(n.value)) var r = e(n.value, !0);
            else {
              var i = e(t.text(), !0);
              i || n.$set("value", t.text());
            }
            return function (e, t, n) {
              var o = "$selectController",
                a = t.parent(),
                s = a.data(o) || a.parent().data(o);
              s && s.registerOption(e, t, n, r, i);
            };
          },
        };
      },
    ],
    Ha = m({ restrict: "E", terminal: !1 }),
    Ba = function () {
      return {
        restrict: "A",
        require: "?ngModel",
        link: function (e, t, n, r) {
          r &&
            ((n.required = !0),
            (r.$validators.required = function (e, t) {
              return !n.required || !r.$isEmpty(t);
            }),
            n.$observe("required", function () {
              r.$validate();
            }));
        },
      };
    },
    La = function () {
      return {
        restrict: "A",
        require: "?ngModel",
        link: function (e, t, i, o) {
          if (o) {
            var a,
              s = i.ngPattern || i.pattern;
            i.$observe("pattern", function (e) {
              if (
                (S(e) && e.length > 0 && (e = new RegExp("^" + e + "$")),
                e && !e.test)
              )
                throw r("ngPattern")(
                  "noregexp",
                  "Expected {0} to be a RegExp but was {1}. Element: {2}",
                  s,
                  e,
                  X(t)
                );
              (a = e || n), o.$validate();
            }),
              (o.$validators.pattern = function (e, t) {
                return o.$isEmpty(t) || y(a) || a.test(t);
              });
          }
        },
      };
    },
    za = function () {
      return {
        restrict: "A",
        require: "?ngModel",
        link: function (e, t, n, r) {
          if (r) {
            var i = -1;
            n.$observe("maxlength", function (e) {
              var t = p(e);
              (i = isNaN(t) ? -1 : t), r.$validate();
            }),
              (r.$validators.maxlength = function (e, t) {
                return 0 > i || r.$isEmpty(t) || t.length <= i;
              });
          }
        },
      };
    },
    Wa = function () {
      return {
        restrict: "A",
        require: "?ngModel",
        link: function (e, t, n, r) {
          if (r) {
            var i = 0;
            n.$observe("minlength", function (e) {
              (i = p(e) || 0), r.$validate();
            }),
              (r.$validators.minlength = function (e, t) {
                return r.$isEmpty(t) || t.length >= i;
              });
          }
        },
      };
    };
  return e.angular.bootstrap
    ? void (
        e.console &&
        console.log("WARNING: Tried to load angular more than once.")
      )
    : (le(),
      be(Ur),
      Ur.module(
        "ngLocale",
        [],
        [
          "$provide",
          function (e) {
            function t(e) {
              e += "";
              var t = e.indexOf(".");
              return -1 == t ? 0 : e.length - t - 1;
            }
            function r(e, r) {
              var i = r;
              n === i && (i = Math.min(t(e), 3));
              var o = Math.pow(10, i),
                a = ((e * o) | 0) % o;
              return { v: i, f: a };
            }
            var i = {
              ZERO: "zero",
              ONE: "one",
              TWO: "two",
              FEW: "few",
              MANY: "many",
              OTHER: "other",
            };
            e.value("$locale", {
              DATETIME_FORMATS: {
                AMPMS: ["AM", "PM"],
                DAY: [
                  "Sunday",
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday",
                ],
                ERANAMES: ["Before Christ", "Anno Domini"],
                ERAS: ["BC", "AD"],
                FIRSTDAYOFWEEK: 6,
                MONTH: [
                  "January",
                  "February",
                  "March",
                  "April",
                  "May",
                  "June",
                  "July",
                  "August",
                  "September",
                  "October",
                  "November",
                  "December",
                ],
                SHORTDAY: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
                SHORTMONTH: [
                  "Jan",
                  "Feb",
                  "Mar",
                  "Apr",
                  "May",
                  "Jun",
                  "Jul",
                  "Aug",
                  "Sep",
                  "Oct",
                  "Nov",
                  "Dec",
                ],
                STANDALONEMONTH: [
                  "January",
                  "February",
                  "March",
                  "April",
                  "May",
                  "June",
                  "July",
                  "August",
                  "September",
                  "October",
                  "November",
                  "December",
                ],
                WEEKENDRANGE: [5, 6],
                fullDate: "EEEE, MMMM d, y",
                longDate: "MMMM d, y",
                medium: "MMM d, y h:mm:ss a",
                mediumDate: "MMM d, y",
                mediumTime: "h:mm:ss a",
                short: "M/d/yy h:mm a",
                shortDate: "M/d/yy",
                shortTime: "h:mm a",
              },
              NUMBER_FORMATS: {
                CURRENCY_SYM: "$",
                DECIMAL_SEP: ".",
                GROUP_SEP: ",",
                PATTERNS: [
                  {
                    gSize: 3,
                    lgSize: 3,
                    maxFrac: 3,
                    minFrac: 0,
                    minInt: 1,
                    negPre: "-",
                    negSuf: "",
                    posPre: "",
                    posSuf: "",
                  },
                  {
                    gSize: 3,
                    lgSize: 3,
                    maxFrac: 2,
                    minFrac: 2,
                    minInt: 1,
                    negPre: "-¤",
                    negSuf: "",
                    posPre: "¤",
                    posSuf: "",
                  },
                ],
              },
              id: "en-us",
              localeID: "en_US",
              pluralCat: function (e, t) {
                var n = 0 | e,
                  o = r(e, t);
                return 1 == n && 0 == o.v ? i.ONE : i.OTHER;
              },
            });
          },
        ]
      ),
      void Nr(t).ready(function () {
        oe(t, ae);
      }));
})(window, document),
  !window.angular.$$csp().noInlineStyle &&
    window.angular
      .element(document.head)
      .prepend(
        '<style type="text/css">@charset "UTF-8";[ng\\:cloak],[ng-cloak],[data-ng-cloak],[x-ng-cloak],.ng-cloak,.x-ng-cloak,.ng-hide:not(.ng-hide-animate){display:none !important;}ng\\:form{display:block;}.ng-animate-shim{visibility:hidden;}.ng-anchor{position:absolute;}</style>'
      ),
  "undefined" != typeof module &&
    "undefined" != typeof exports &&
    module.exports === exports &&
    (module.exports = "ui.router"),
  (function (e, t, n) {
    "use strict";
    function r(e, t) {
      return B(new (B(function () {}, { prototype: e }))(), t);
    }
    function i(e) {
      return (
        H(arguments, function (t) {
          t !== e &&
            H(t, function (t, n) {
              e.hasOwnProperty(n) || (e[n] = t);
            });
        }),
        e
      );
    }
    function o(e, t) {
      var n = [];
      for (var r in e.path) {
        if (e.path[r] !== t.path[r]) break;
        n.push(e.path[r]);
      }
      return n;
    }
    function a(e) {
      if (Object.keys) return Object.keys(e);
      var t = [];
      return (
        H(e, function (e, n) {
          t.push(n);
        }),
        t
      );
    }
    function s(e, t) {
      if (Array.prototype.indexOf)
        return e.indexOf(t, Number(arguments[2]) || 0);
      var n = e.length >>> 0,
        r = Number(arguments[2]) || 0;
      for (
        r = 0 > r ? Math.ceil(r) : Math.floor(r), 0 > r && (r += n);
        n > r;
        r++
      )
        if (r in e && e[r] === t) return r;
      return -1;
    }
    function u(e, t, n, r) {
      var i,
        u = o(n, r),
        c = {},
        l = [];
      for (var f in u)
        if (u[f] && u[f].params && ((i = a(u[f].params)), i.length))
          for (var h in i)
            s(l, i[h]) >= 0 || (l.push(i[h]), (c[i[h]] = e[i[h]]));
      return B({}, c, t);
    }
    function c(e, t, n) {
      if (!n) {
        n = [];
        for (var r in e) n.push(r);
      }
      for (var i = 0; i < n.length; i++) {
        var o = n[i];
        if (e[o] != t[o]) return !1;
      }
      return !0;
    }
    function l(e, t) {
      var n = {};
      return (
        H(e, function (e) {
          n[e] = t[e];
        }),
        n
      );
    }
    function f(e) {
      var t = {},
        n = Array.prototype.concat.apply(
          Array.prototype,
          Array.prototype.slice.call(arguments, 1)
        );
      return (
        H(n, function (n) {
          n in e && (t[n] = e[n]);
        }),
        t
      );
    }
    function h(e) {
      var t = {},
        n = Array.prototype.concat.apply(
          Array.prototype,
          Array.prototype.slice.call(arguments, 1)
        );
      for (var r in e) -1 == s(n, r) && (t[r] = e[r]);
      return t;
    }
    function p(e, t) {
      var n = U(e),
        r = n ? [] : {};
      return (
        H(e, function (e, i) {
          t(e, i) && (r[n ? r.length : i] = e);
        }),
        r
      );
    }
    function d(e, t) {
      var n = U(e) ? [] : {};
      return (
        H(e, function (e, r) {
          n[r] = t(e, r);
        }),
        n
      );
    }
    function $(e, t) {
      var r = 1,
        o = 2,
        u = {},
        c = [],
        l = u,
        f = B(e.when(u), { $$promises: u, $$values: u });
      (this.study = function (u) {
        function p(e, n) {
          if (g[n] !== o) {
            if ((m.push(n), g[n] === r))
              throw (
                (m.splice(0, s(m, n)),
                new Error("Cyclic dependency: " + m.join(" -> ")))
              );
            if (((g[n] = r), _(e)))
              v.push(
                n,
                [
                  function () {
                    return t.get(e);
                  },
                ],
                c
              );
            else {
              var i = t.annotate(e);
              H(i, function (e) {
                e !== n && u.hasOwnProperty(e) && p(u[e], e);
              }),
                v.push(n, e, i);
            }
            m.pop(), (g[n] = o);
          }
        }
        function d(e) {
          return F(e) && e.then && e.$$promises;
        }
        if (!F(u)) throw new Error("'invocables' must be an object");
        var $ = a(u || {}),
          v = [],
          m = [],
          g = {};
        return (
          H(u, p),
          (u = m = g = null),
          function (r, o, a) {
            function s() {
              --b ||
                (w || i(y, o.$$values),
                (m.$$values = y),
                (m.$$promises = m.$$promises || !0),
                delete m.$$inheritedValues,
                p.resolve(y));
            }
            function u(e) {
              (m.$$failure = e), p.reject(e);
            }
            function c(n, i, o) {
              function c(e) {
                f.reject(e), u(e);
              }
              function l() {
                if (!R(m.$$failure))
                  try {
                    f.resolve(t.invoke(i, a, y)),
                      f.promise.then(function (e) {
                        (y[n] = e), s();
                      }, c);
                  } catch (e) {
                    c(e);
                  }
              }
              var f = e.defer(),
                h = 0;
              H(o, function (e) {
                g.hasOwnProperty(e) &&
                  !r.hasOwnProperty(e) &&
                  (h++,
                  g[e].then(function (t) {
                    (y[e] = t), --h || l();
                  }, c));
              }),
                h || l(),
                (g[n] = f.promise);
            }
            if ((d(r) && a === n && ((a = o), (o = r), (r = null)), r)) {
              if (!F(r)) throw new Error("'locals' must be an object");
            } else r = l;
            if (o) {
              if (!d(o))
                throw new Error(
                  "'parent' must be a promise returned by $resolve.resolve()"
                );
            } else o = f;
            var p = e.defer(),
              m = p.promise,
              g = (m.$$promises = {}),
              y = B({}, r),
              b = 1 + v.length / 3,
              w = !1;
            if (R(o.$$failure)) return u(o.$$failure), m;
            o.$$inheritedValues && i(y, h(o.$$inheritedValues, $)),
              B(g, o.$$promises),
              o.$$values
                ? ((w = i(y, h(o.$$values, $))),
                  (m.$$inheritedValues = h(o.$$values, $)),
                  s())
                : (o.$$inheritedValues &&
                    (m.$$inheritedValues = h(o.$$inheritedValues, $)),
                  o.then(s, u));
            for (var x = 0, S = v.length; S > x; x += 3)
              r.hasOwnProperty(v[x]) ? s() : c(v[x], v[x + 1], v[x + 2]);
            return m;
          }
        );
      }),
        (this.resolve = function (e, t, n, r) {
          return this.study(e)(t, n, r);
        });
    }
    function v(e, t, n) {
      (this.fromConfig = function (e, t, n) {
        return R(e.template)
          ? this.fromString(e.template, t)
          : R(e.templateUrl)
          ? this.fromUrl(e.templateUrl, t)
          : R(e.templateProvider)
          ? this.fromProvider(e.templateProvider, t, n)
          : null;
      }),
        (this.fromString = function (e, t) {
          return q(e) ? e(t) : e;
        }),
        (this.fromUrl = function (n, r) {
          return (
            q(n) && (n = n(r)),
            null == n
              ? null
              : e
                  .get(n, { cache: t, headers: { Accept: "text/html" } })
                  .then(function (e) {
                    return e.data;
                  })
          );
        }),
        (this.fromProvider = function (e, t, r) {
          return n.invoke(e, null, r || { params: t });
        });
    }
    function m(e, t, i) {
      function o(t, n, r, i) {
        if ((v.push(t), d[t])) return d[t];
        if (!/^\w+([-.]+\w+)*(?:\[\])?$/.test(t))
          throw new Error(
            "Invalid parameter name '" + t + "' in pattern '" + e + "'"
          );
        if ($[t])
          throw new Error(
            "Duplicate parameter name '" + t + "' in pattern '" + e + "'"
          );
        return ($[t] = new W.Param(t, n, r, i)), $[t];
      }
      function a(e, t, n, r) {
        var i = ["", ""],
          o = e.replace(/[\\\[\]\^$*+?.()|{}]/g, "\\$&");
        if (!t) return o;
        switch (n) {
          case !1:
            i = ["(", ")" + (r ? "?" : "")];
            break;
          case !0:
            (o = o.replace(/\/$/, "")), (i = ["(?:/(", ")|/)?"]);
            break;
          default:
            i = ["(" + n + "|", ")?"];
        }
        return o + i[0] + t + i[1];
      }
      function s(i, o) {
        var a, s, u, c, l;
        return (
          (a = i[2] || i[3]),
          (l = t.params[a]),
          (u = e.substring(h, i.index)),
          (s = o ? i[4] : i[4] || ("*" == i[1] ? ".*" : null)),
          s &&
            (c =
              W.type(s) ||
              r(W.type("string"), {
                pattern: new RegExp(s, t.caseInsensitive ? "i" : n),
              })),
          { id: a, regexp: s, segment: u, type: c, cfg: l }
        );
      }
      t = B({ params: {} }, F(t) ? t : {});
      var u,
        c =
          /([:*])([\w\[\]]+)|\{([\w\[\]]+)(?:\:\s*((?:[^{}\\]+|\\.|\{(?:[^{}\\]+|\\.)*\})+))?\}/g,
        l =
          /([:]?)([\w\[\].-]+)|\{([\w\[\].-]+)(?:\:\s*((?:[^{}\\]+|\\.|\{(?:[^{}\\]+|\\.)*\})+))?\}/g,
        f = "^",
        h = 0,
        p = (this.segments = []),
        d = i ? i.params : {},
        $ = (this.params = i ? i.params.$$new() : new W.ParamSet()),
        v = [];
      this.source = e;
      for (
        var m, g, y;
        (u = c.exec(e)) && ((m = s(u, !1)), !(m.segment.indexOf("?") >= 0));

      )
        (g = o(m.id, m.type, m.cfg, "path")),
          (f += a(m.segment, g.type.pattern.source, g.squash, g.isOptional)),
          p.push(m.segment),
          (h = c.lastIndex);
      y = e.substring(h);
      var b = y.indexOf("?");
      if (b >= 0) {
        var w = (this.sourceSearch = y.substring(b));
        if (
          ((y = y.substring(0, b)),
          (this.sourcePath = e.substring(0, h + b)),
          w.length > 0)
        )
          for (h = 0; (u = l.exec(w)); )
            (m = s(u, !0)),
              (g = o(m.id, m.type, m.cfg, "search")),
              (h = c.lastIndex);
      } else (this.sourcePath = e), (this.sourceSearch = "");
      (f += a(y) + (t.strict === !1 ? "/?" : "") + "$"),
        p.push(y),
        (this.regexp = new RegExp(f, t.caseInsensitive ? "i" : n)),
        (this.prefix = p[0]),
        (this.$$paramNames = v);
    }
    function g(e) {
      B(this, e);
    }
    function y() {
      function e(e) {
        return null != e
          ? e.toString().replace(/~/g, "~~").replace(/\//g, "~2F")
          : e;
      }
      function i(e) {
        return null != e
          ? e.toString().replace(/~2F/g, "/").replace(/~~/g, "~")
          : e;
      }
      function o() {
        return { strict: $, caseInsensitive: h };
      }
      function u(e) {
        return q(e) || (U(e) && q(e[e.length - 1]));
      }
      function c() {
        for (; x.length; ) {
          var e = x.shift();
          if (e.pattern)
            throw new Error(
              "You cannot override a type's .pattern at runtime."
            );
          t.extend(b[e.name], f.invoke(e.def));
        }
      }
      function l(e) {
        B(this, e || {});
      }
      W = this;
      var f,
        h = !1,
        $ = !0,
        v = !1,
        b = {},
        w = !0,
        x = [],
        S = {
          string: {
            encode: e,
            decode: i,
            is: function (e) {
              return null == e || !R(e) || "string" == typeof e;
            },
            pattern: /[^\/]*/,
          },
          int: {
            encode: e,
            decode: function (e) {
              return parseInt(e, 10);
            },
            is: function (e) {
              return R(e) && this.decode(e.toString()) === e;
            },
            pattern: /\d+/,
          },
          bool: {
            encode: function (e) {
              return e ? 1 : 0;
            },
            decode: function (e) {
              return 0 !== parseInt(e, 10);
            },
            is: function (e) {
              return e === !0 || e === !1;
            },
            pattern: /0|1/,
          },
          date: {
            encode: function (e) {
              return this.is(e)
                ? [
                    e.getFullYear(),
                    ("0" + (e.getMonth() + 1)).slice(-2),
                    ("0" + e.getDate()).slice(-2),
                  ].join("-")
                : n;
            },
            decode: function (e) {
              if (this.is(e)) return e;
              var t = this.capture.exec(e);
              return t ? new Date(t[1], t[2] - 1, t[3]) : n;
            },
            is: function (e) {
              return e instanceof Date && !isNaN(e.valueOf());
            },
            equals: function (e, t) {
              return (
                this.is(e) && this.is(t) && e.toISOString() === t.toISOString()
              );
            },
            pattern: /[0-9]{4}-(?:0[1-9]|1[0-2])-(?:0[1-9]|[1-2][0-9]|3[0-1])/,
            capture: /([0-9]{4})-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])/,
          },
          json: {
            encode: t.toJson,
            decode: t.fromJson,
            is: t.isObject,
            equals: t.equals,
            pattern: /[^\/]*/,
          },
          any: {
            encode: t.identity,
            decode: t.identity,
            equals: t.equals,
            pattern: /.*/,
          },
        };
      (y.$$getDefaultValue = function (e) {
        if (!u(e.value)) return e.value;
        if (!f)
          throw new Error(
            "Injectable functions cannot be called at configuration time"
          );
        return f.invoke(e.value);
      }),
        (this.caseInsensitive = function (e) {
          return R(e) && (h = e), h;
        }),
        (this.strictMode = function (e) {
          return R(e) && ($ = e), $;
        }),
        (this.defaultSquashPolicy = function (e) {
          if (!R(e)) return v;
          if (e !== !0 && e !== !1 && !_(e))
            throw new Error(
              "Invalid squash policy: " +
                e +
                ". Valid policies: false, true, arbitrary-string"
            );
          return (v = e), e;
        }),
        (this.compile = function (e, t) {
          return new m(e, B(o(), t));
        }),
        (this.isMatcher = function (e) {
          if (!F(e)) return !1;
          var t = !0;
          return (
            H(m.prototype, function (n, r) {
              q(n) && (t = t && R(e[r]) && q(e[r]));
            }),
            t
          );
        }),
        (this.type = function (e, t, n) {
          if (!R(t)) return b[e];
          if (b.hasOwnProperty(e))
            throw new Error(
              "A type named '" + e + "' has already been defined."
            );
          return (
            (b[e] = new g(B({ name: e }, t))),
            n && (x.push({ name: e, def: n }), w || c()),
            this
          );
        }),
        H(S, function (e, t) {
          b[t] = new g(B({ name: t }, e));
        }),
        (b = r(b, {})),
        (this.$get = [
          "$injector",
          function (e) {
            return (
              (f = e),
              (w = !1),
              c(),
              H(S, function (e, t) {
                b[t] || (b[t] = new g(e));
              }),
              this
            );
          },
        ]),
        (this.Param = function (e, r, i, o) {
          function c(e) {
            var t = F(e) ? a(e) : [],
              n =
                -1 === s(t, "value") &&
                -1 === s(t, "type") &&
                -1 === s(t, "squash") &&
                -1 === s(t, "array");
            return (
              n && (e = { value: e }),
              (e.$$fn = u(e.value)
                ? e.value
                : function () {
                    return e.value;
                  }),
              e
            );
          }
          function l(n, r, i) {
            if (n.type && r)
              throw new Error("Param '" + e + "' has two type configurations.");
            return r
              ? r
              : n.type
              ? t.isString(n.type)
                ? b[n.type]
                : n.type instanceof g
                ? n.type
                : new g(n.type)
              : "config" === i
              ? b.any
              : b.string;
          }
          function h() {
            var t = { array: "search" === o ? "auto" : !1 },
              n = e.match(/\[\]$/) ? { array: !0 } : {};
            return B(t, n, i).array;
          }
          function $(e, t) {
            var n = e.squash;
            if (!t || n === !1) return !1;
            if (!R(n) || null == n) return v;
            if (n === !0 || _(n)) return n;
            throw new Error(
              "Invalid squash policy: '" +
                n +
                "'. Valid policies: false, true, or arbitrary string"
            );
          }
          function m(e, t, r, i) {
            var o,
              a,
              u = [
                { from: "", to: r || t ? n : "" },
                { from: null, to: r || t ? n : "" },
              ];
            return (
              (o = U(e.replace) ? e.replace : []),
              _(i) && o.push({ from: i, to: n }),
              (a = d(o, function (e) {
                return e.from;
              })),
              p(u, function (e) {
                return -1 === s(a, e.from);
              }).concat(o)
            );
          }
          function y() {
            if (!f)
              throw new Error(
                "Injectable functions cannot be called at configuration time"
              );
            var e = f.invoke(i.$$fn);
            if (null !== e && e !== n && !S.type.is(e))
              throw new Error(
                "Default value (" +
                  e +
                  ") for parameter '" +
                  S.id +
                  "' is not an instance of Type (" +
                  S.type.name +
                  ")"
              );
            return e;
          }
          function w(e) {
            function t(e) {
              return function (t) {
                return t.from === e;
              };
            }
            function n(e) {
              var n = d(p(S.replace, t(e)), function (e) {
                return e.to;
              });
              return n.length ? n[0] : e;
            }
            return (e = n(e)), R(e) ? S.type.$normalize(e) : y();
          }
          function x() {
            return (
              "{Param:" +
              e +
              " " +
              r +
              " squash: '" +
              A +
              "' optional: " +
              C +
              "}"
            );
          }
          var S = this;
          (i = c(i)), (r = l(i, r, o));
          var E = h();
          (r = E ? r.$asArray(E, "search" === o) : r),
            "string" !== r.name ||
              E ||
              "path" !== o ||
              i.value !== n ||
              (i.value = "");
          var C = i.value !== n,
            A = $(i, C),
            k = m(i, E, C, A);
          B(this, {
            id: e,
            type: r,
            location: o,
            array: E,
            squash: A,
            replace: k,
            isOptional: C,
            value: w,
            dynamic: n,
            config: i,
            toString: x,
          });
        }),
        (l.prototype = {
          $$new: function () {
            return r(this, B(new l(), { $$parent: this }));
          },
          $$keys: function () {
            for (var e = [], t = [], n = this, r = a(l.prototype); n; )
              t.push(n), (n = n.$$parent);
            return (
              t.reverse(),
              H(t, function (t) {
                H(a(t), function (t) {
                  -1 === s(e, t) && -1 === s(r, t) && e.push(t);
                });
              }),
              e
            );
          },
          $$values: function (e) {
            var t = {},
              n = this;
            return (
              H(n.$$keys(), function (r) {
                t[r] = n[r].value(e && e[r]);
              }),
              t
            );
          },
          $$equals: function (e, t) {
            var n = !0,
              r = this;
            return (
              H(r.$$keys(), function (i) {
                var o = e && e[i],
                  a = t && t[i];
                r[i].type.equals(o, a) || (n = !1);
              }),
              n
            );
          },
          $$validates: function (e) {
            var r,
              i,
              o,
              a,
              s,
              u = this.$$keys();
            for (
              r = 0;
              r < u.length &&
              ((i = this[u[r]]),
              (o = e[u[r]]),
              (o !== n && null !== o) || !i.isOptional);
              r++
            ) {
              if (((a = i.type.$normalize(o)), !i.type.is(a))) return !1;
              if (
                ((s = i.type.encode(a)),
                t.isString(s) && !i.type.pattern.exec(s))
              )
                return !1;
            }
            return !0;
          },
          $$parent: n,
        }),
        (this.ParamSet = l);
    }
    function b(e, r) {
      function i(e) {
        var t = /^\^((?:\\[^a-zA-Z0-9]|[^\\\[\]\^$*+?.()|{}]+)*)/.exec(
          e.source
        );
        return null != t ? t[1].replace(/\\(.)/g, "$1") : "";
      }
      function o(e, t) {
        return e.replace(/\$(\$|\d{1,2})/, function (e, n) {
          return t["$" === n ? 0 : Number(n)];
        });
      }
      function a(e, t, n) {
        if (!n) return !1;
        var r = e.invoke(t, t, { $match: n });
        return R(r) ? r : !0;
      }
      function s(r, i, o, a, s) {
        function h(e, t, n) {
          return "/" === v
            ? e
            : t
            ? v.slice(0, -1) + e
            : n
            ? v.slice(1) + e
            : e;
        }
        function p(e) {
          function t(e) {
            var t = e(o, r);
            return t ? (_(t) && r.replace().url(t), !0) : !1;
          }
          if (!e || !e.defaultPrevented) {
            $ && r.url() === $;
            $ = n;
            var i,
              a = c.length;
            for (i = 0; a > i; i++) if (t(c[i])) return;
            l && t(l);
          }
        }
        function d() {
          return (u = u || i.$on("$locationChangeSuccess", p));
        }
        var $,
          v = a.baseHref(),
          m = r.url();
        return (
          f || d(),
          {
            sync: function () {
              p();
            },
            listen: function () {
              return d();
            },
            update: function (e) {
              return e
                ? void (m = r.url())
                : void (r.url() !== m && (r.url(m), r.replace()));
            },
            push: function (e, t, i) {
              var o = e.format(t || {});
              null !== o && t && t["#"] && (o += "#" + t["#"]),
                r.url(o),
                ($ = i && i.$$avoidResync ? r.url() : n),
                i && i.replace && r.replace();
            },
            href: function (n, i, o) {
              if (!n.validates(i)) return null;
              var a = e.html5Mode();
              t.isObject(a) && (a = a.enabled), (a = a && s.history);
              var u = n.format(i);
              if (
                ((o = o || {}),
                a || null === u || (u = "#" + e.hashPrefix() + u),
                null !== u && i && i["#"] && (u += "#" + i["#"]),
                (u = h(u, a, o.absolute)),
                !o.absolute || !u)
              )
                return u;
              var c = !a && u ? "/" : "",
                l = r.port();
              return (
                (l = 80 === l || 443 === l ? "" : ":" + l),
                [r.protocol(), "://", r.host(), l, c, u].join("")
              );
            },
          }
        );
      }
      var u,
        c = [],
        l = null,
        f = !1;
      (this.rule = function (e) {
        if (!q(e)) throw new Error("'rule' must be a function");
        return c.push(e), this;
      }),
        (this.otherwise = function (e) {
          if (_(e)) {
            var t = e;
            e = function () {
              return t;
            };
          } else if (!q(e)) throw new Error("'rule' must be a function");
          return (l = e), this;
        }),
        (this.when = function (e, t) {
          var n,
            s = _(t);
          if ((_(e) && (e = r.compile(e)), !s && !q(t) && !U(t)))
            throw new Error("invalid 'handler' in when()");
          var u = {
              matcher: function (e, t) {
                return (
                  s &&
                    ((n = r.compile(t)),
                    (t = [
                      "$match",
                      function (e) {
                        return n.format(e);
                      },
                    ])),
                  B(
                    function (n, r) {
                      return a(n, t, e.exec(r.path(), r.search()));
                    },
                    { prefix: _(e.prefix) ? e.prefix : "" }
                  )
                );
              },
              regex: function (e, t) {
                if (e.global || e.sticky)
                  throw new Error("when() RegExp must not be global or sticky");
                return (
                  s &&
                    ((n = t),
                    (t = [
                      "$match",
                      function (e) {
                        return o(n, e);
                      },
                    ])),
                  B(
                    function (n, r) {
                      return a(n, t, e.exec(r.path()));
                    },
                    { prefix: i(e) }
                  )
                );
              },
            },
            c = { matcher: r.isMatcher(e), regex: e instanceof RegExp };
          for (var l in c) if (c[l]) return this.rule(u[l](e, t));
          throw new Error("invalid 'what' in when()");
        }),
        (this.deferIntercept = function (e) {
          e === n && (e = !0), (f = e);
        }),
        (this.$get = s),
        (s.$inject = [
          "$location",
          "$rootScope",
          "$injector",
          "$browser",
          "$sniffer",
        ]);
    }
    function w(e, i) {
      function o(e) {
        return 0 === e.indexOf(".") || 0 === e.indexOf("^");
      }
      function h(e, t) {
        if (!e) return n;
        var r = _(e),
          i = r ? e : e.name,
          a = o(i);
        if (a) {
          if (!t)
            throw new Error("No reference point given for path '" + i + "'");
          t = h(t);
          for (var s = i.split("."), u = 0, c = s.length, l = t; c > u; u++)
            if ("" !== s[u] || 0 !== u) {
              if ("^" !== s[u]) break;
              if (!l.parent)
                throw new Error(
                  "Path '" + i + "' not valid for state '" + t.name + "'"
                );
              l = l.parent;
            } else l = t;
          (s = s.slice(u).join(".")),
            (i = l.name + (l.name && s ? "." : "") + s);
        }
        var f = C[i];
        return !f || (!r && (r || (f !== e && f.self !== e))) ? n : f;
      }
      function p(e, t) {
        A[e] || (A[e] = []), A[e].push(t);
      }
      function $(e) {
        for (var t = A[e] || []; t.length; ) v(t.shift());
      }
      function v(t) {
        t = r(t, {
          self: t,
          resolve: t.resolve || {},
          toString: function () {
            return this.name;
          },
        });
        var n = t.name;
        if (!_(n) || n.indexOf("@") >= 0)
          throw new Error("State must have a valid name");
        if (C.hasOwnProperty(n))
          throw new Error("State '" + n + "' is already defined");
        var i =
          -1 !== n.indexOf(".")
            ? n.substring(0, n.lastIndexOf("."))
            : _(t.parent)
            ? t.parent
            : F(t.parent) && _(t.parent.name)
            ? t.parent.name
            : "";
        if (i && !C[i]) return p(i, t.self);
        for (var o in O) q(O[o]) && (t[o] = O[o](t, O.$delegates[o]));
        return (
          (C[n] = t),
          !t[k] &&
            t.url &&
            e.when(t.url, [
              "$match",
              "$stateParams",
              function (e, n) {
                (E.$current.navigable == t && c(e, n)) ||
                  E.transitionTo(t, e, { inherit: !0, location: !1 });
              },
            ]),
          $(n),
          t
        );
      }
      function m(e) {
        return e.indexOf("*") > -1;
      }
      function g(e) {
        for (
          var t = e.split("."),
            n = E.$current.name.split("."),
            r = 0,
            i = t.length;
          i > r;
          r++
        )
          "*" === t[r] && (n[r] = "*");
        return (
          "**" === t[0] && ((n = n.slice(s(n, t[1]))), n.unshift("**")),
          "**" === t[t.length - 1] &&
            (n.splice(s(n, t[t.length - 2]) + 1, Number.MAX_VALUE),
            n.push("**")),
          t.length != n.length ? !1 : n.join("") === t.join("")
        );
      }
      function y(e, t) {
        return _(e) && !R(t)
          ? O[e]
          : q(t) && _(e)
          ? (O[e] && !O.$delegates[e] && (O.$delegates[e] = O[e]),
            (O[e] = t),
            this)
          : this;
      }
      function b(e, t) {
        return F(e) ? (t = e) : (t.name = e), v(t), this;
      }
      function w(e, i, o, s, f, p, $, v, y) {
        function b(t, n, r, o) {
          var a = e.$broadcast("$stateNotFound", t, n, r);
          if (a.defaultPrevented) return $.update(), M;
          if (!a.retry) return null;
          if (o.$retry) return $.update(), j;
          var s = (E.transition = i.when(a.retry));
          return (
            s.then(
              function () {
                return s !== E.transition
                  ? A
                  : ((t.options.$retry = !0),
                    E.transitionTo(t.to, t.toParams, t.options));
              },
              function () {
                return M;
              }
            ),
            $.update(),
            s
          );
        }
        function w(e, n, r, a, u, c) {
          function h() {
            var n = [];
            return (
              H(e.views, function (r, i) {
                var a = r.resolve && r.resolve !== e.resolve ? r.resolve : {};
                (a.$template = [
                  function () {
                    return (
                      o.load(i, {
                        view: r,
                        locals: u.globals,
                        params: p,
                        notify: c.notify,
                      }) || ""
                    );
                  },
                ]),
                  n.push(
                    f.resolve(a, u.globals, u.resolve, e).then(function (n) {
                      if (q(r.controllerProvider) || U(r.controllerProvider)) {
                        var o = t.extend({}, a, u.globals);
                        n.$$controller = s.invoke(
                          r.controllerProvider,
                          null,
                          o
                        );
                      } else n.$$controller = r.controller;
                      (n.$$state = e),
                        (n.$$controllerAs = r.controllerAs),
                        (u[i] = n);
                    })
                  );
              }),
              i.all(n).then(function () {
                return u.globals;
              })
            );
          }
          var p = r ? n : l(e.params.$$keys(), n),
            d = { $stateParams: p };
          u.resolve = f.resolve(e.resolve, d, u.resolve, e);
          var $ = [
            u.resolve.then(function (e) {
              u.globals = e;
            }),
          ];
          return (
            a && $.push(a),
            i
              .all($)
              .then(h)
              .then(function (e) {
                return u;
              })
          );
        }
        var A = i.reject(new Error("transition superseded")),
          O = i.reject(new Error("transition prevented")),
          M = i.reject(new Error("transition aborted")),
          j = i.reject(new Error("transition failed"));
        return (
          (S.locals = { resolve: null, globals: { $stateParams: {} } }),
          (E = { params: {}, current: S.self, $current: S, transition: null }),
          (E.reload = function (e) {
            return E.transitionTo(E.current, p, {
              reload: e || !0,
              inherit: !1,
              notify: !0,
            });
          }),
          (E.go = function (e, t, n) {
            return E.transitionTo(
              e,
              t,
              B({ inherit: !0, relative: E.$current }, n)
            );
          }),
          (E.transitionTo = function (t, n, o) {
            (n = n || {}),
              (o = B(
                {
                  location: !0,
                  inherit: !1,
                  relative: null,
                  notify: !0,
                  reload: !1,
                  $retry: !1,
                },
                o || {}
              ));
            var a,
              c = E.$current,
              f = E.params,
              d = c.path,
              v = h(t, o.relative),
              m = n["#"];
            if (!R(v)) {
              var g = { to: t, toParams: n, options: o },
                y = b(g, c.self, f, o);
              if (y) return y;
              if (
                ((t = g.to),
                (n = g.toParams),
                (o = g.options),
                (v = h(t, o.relative)),
                !R(v))
              ) {
                if (!o.relative) throw new Error("No such state '" + t + "'");
                throw new Error(
                  "Could not resolve '" +
                    t +
                    "' from state '" +
                    o.relative +
                    "'"
                );
              }
            }
            if (v[k])
              throw new Error(
                "Cannot transition to abstract state '" + t + "'"
              );
            if (
              (o.inherit && (n = u(p, n || {}, E.$current, v)),
              !v.params.$$validates(n))
            )
              return j;
            (n = v.params.$$values(n)), (t = v);
            var C = t.path,
              M = 0,
              T = C[M],
              N = S.locals,
              V = [];
            if (o.reload) {
              if (_(o.reload) || F(o.reload)) {
                if (F(o.reload) && !o.reload.name)
                  throw new Error("Invalid reload state object");
                var P = o.reload === !0 ? d[0] : h(o.reload);
                if (o.reload && !P)
                  throw new Error(
                    "No such reload state '" +
                      (_(o.reload) ? o.reload : o.reload.name) +
                      "'"
                  );
                for (; T && T === d[M] && T !== P; )
                  (N = V[M] = T.locals), M++, (T = C[M]);
              }
            } else
              for (; T && T === d[M] && T.ownParams.$$equals(n, f); )
                (N = V[M] = T.locals), M++, (T = C[M]);
            if (x(t, n, c, f, N, o))
              return (
                m && (n["#"] = m),
                (E.params = n),
                L(E.params, p),
                L(l(t.params.$$keys(), p), t.locals.globals.$stateParams),
                o.location &&
                  t.navigable &&
                  t.navigable.url &&
                  ($.push(t.navigable.url, n, {
                    $$avoidResync: !0,
                    replace: "replace" === o.location,
                  }),
                  $.update(!0)),
                (E.transition = null),
                i.when(E.current)
              );
            if (
              ((n = l(t.params.$$keys(), n || {})),
              m && (n["#"] = m),
              o.notify &&
                e.$broadcast("$stateChangeStart", t.self, n, c.self, f, o)
                  .defaultPrevented)
            )
              return (
                e.$broadcast("$stateChangeCancel", t.self, n, c.self, f),
                null == E.transition && $.update(),
                O
              );
            for (var I = i.when(N), D = M; D < C.length; D++, T = C[D])
              (N = V[D] = r(N)), (I = w(T, n, T === t, I, N, o));
            var q = (E.transition = I.then(
              function () {
                var r, i, a;
                if (E.transition !== q) return A;
                for (r = d.length - 1; r >= M; r--)
                  (a = d[r]),
                    a.self.onExit &&
                      s.invoke(a.self.onExit, a.self, a.locals.globals),
                    (a.locals = null);
                for (r = M; r < C.length; r++)
                  (i = C[r]),
                    (i.locals = V[r]),
                    i.self.onEnter &&
                      s.invoke(i.self.onEnter, i.self, i.locals.globals);
                return E.transition !== q
                  ? A
                  : ((E.$current = t),
                    (E.current = t.self),
                    (E.params = n),
                    L(E.params, p),
                    (E.transition = null),
                    o.location &&
                      t.navigable &&
                      $.push(
                        t.navigable.url,
                        t.navigable.locals.globals.$stateParams,
                        { $$avoidResync: !0, replace: "replace" === o.location }
                      ),
                    o.notify &&
                      e.$broadcast("$stateChangeSuccess", t.self, n, c.self, f),
                    $.update(!0),
                    E.current);
              },
              function (r) {
                return E.transition !== q
                  ? A
                  : ((E.transition = null),
                    (a = e.$broadcast(
                      "$stateChangeError",
                      t.self,
                      n,
                      c.self,
                      f,
                      r
                    )),
                    a.defaultPrevented || $.update(),
                    i.reject(r));
              }
            ));
            return q;
          }),
          (E.is = function (e, t, r) {
            r = B({ relative: E.$current }, r || {});
            var i = h(e, r.relative);
            return R(i)
              ? E.$current !== i
                ? !1
                : t
                ? c(i.params.$$values(t), p)
                : !0
              : n;
          }),
          (E.includes = function (e, t, r) {
            if (((r = B({ relative: E.$current }, r || {})), _(e) && m(e))) {
              if (!g(e)) return !1;
              e = E.$current.name;
            }
            var i = h(e, r.relative);
            return R(i)
              ? R(E.$current.includes[i.name])
                ? t
                  ? c(i.params.$$values(t), p, a(t))
                  : !0
                : !1
              : n;
          }),
          (E.href = function (e, t, r) {
            r = B(
              { lossy: !0, inherit: !0, absolute: !1, relative: E.$current },
              r || {}
            );
            var i = h(e, r.relative);
            if (!R(i)) return null;
            r.inherit && (t = u(p, t || {}, E.$current, i));
            var o = i && r.lossy ? i.navigable : i;
            return o && o.url !== n && null !== o.url
              ? $.href(o.url, l(i.params.$$keys().concat("#"), t || {}), {
                  absolute: r.absolute,
                })
              : null;
          }),
          (E.get = function (e, t) {
            if (0 === arguments.length)
              return d(a(C), function (e) {
                return C[e].self;
              });
            var n = h(e, t || E.$current);
            return n && n.self ? n.self : null;
          }),
          E
        );
      }
      function x(e, t, n, r, i, o) {
        function a(e, t, n) {
          function r(t) {
            return "search" != e.params[t].location;
          }
          var i = e.params.$$keys().filter(r),
            o = f.apply({}, [e.params].concat(i)),
            a = new W.ParamSet(o);
          return a.$$equals(t, n);
        }
        return !o.reload &&
          e === n &&
          (i === n.locals || (e.self.reloadOnSearch === !1 && a(n, r, t)))
          ? !0
          : void 0;
      }
      var S,
        E,
        C = {},
        A = {},
        k = "abstract",
        O = {
          parent: function (e) {
            if (R(e.parent) && e.parent) return h(e.parent);
            var t = /^(.+)\.[^.]+$/.exec(e.name);
            return t ? h(t[1]) : S;
          },
          data: function (e) {
            return (
              e.parent &&
                e.parent.data &&
                (e.data = e.self.data = r(e.parent.data, e.data)),
              e.data
            );
          },
          url: function (e) {
            var t = e.url,
              n = { params: e.params || {} };
            if (_(t))
              return "^" == t.charAt(0)
                ? i.compile(t.substring(1), n)
                : (e.parent.navigable || S).url.concat(t, n);
            if (!t || i.isMatcher(t)) return t;
            throw new Error("Invalid url '" + t + "' in state '" + e + "'");
          },
          navigable: function (e) {
            return e.url ? e : e.parent ? e.parent.navigable : null;
          },
          ownParams: function (e) {
            var t = (e.url && e.url.params) || new W.ParamSet();
            return (
              H(e.params || {}, function (e, n) {
                t[n] || (t[n] = new W.Param(n, null, e, "config"));
              }),
              t
            );
          },
          params: function (e) {
            var t = f(e.ownParams, e.ownParams.$$keys());
            return e.parent && e.parent.params
              ? B(e.parent.params.$$new(), t)
              : new W.ParamSet();
          },
          views: function (e) {
            var t = {};
            return (
              H(R(e.views) ? e.views : { "": e }, function (n, r) {
                r.indexOf("@") < 0 && (r += "@" + e.parent.name), (t[r] = n);
              }),
              t
            );
          },
          path: function (e) {
            return e.parent ? e.parent.path.concat(e) : [];
          },
          includes: function (e) {
            var t = e.parent ? B({}, e.parent.includes) : {};
            return (t[e.name] = !0), t;
          },
          $delegates: {},
        };
      (S = v({ name: "", url: "^", views: null, abstract: !0 })),
        (S.navigable = null),
        (this.decorator = y),
        (this.state = b),
        (this.$get = w),
        (w.$inject = [
          "$rootScope",
          "$q",
          "$view",
          "$injector",
          "$resolve",
          "$stateParams",
          "$urlRouter",
          "$location",
          "$urlMatcherFactory",
        ]);
    }
    function x() {
      function e(e, t) {
        return {
          load: function (e, n) {
            var r,
              i = {
                template: null,
                controller: null,
                view: null,
                locals: null,
                notify: !0,
                async: !0,
                params: {},
              };
            return (
              (n = B(i, n)),
              n.view && (r = t.fromConfig(n.view, n.params, n.locals)),
              r
            );
          },
        };
      }
      (this.$get = e), (e.$inject = ["$rootScope", "$templateFactory"]);
    }
    function S() {
      var e = !1;
      (this.useAnchorScroll = function () {
        e = !0;
      }),
        (this.$get = [
          "$anchorScroll",
          "$timeout",
          function (t, n) {
            return e
              ? t
              : function (e) {
                  return n(
                    function () {
                      e[0].scrollIntoView();
                    },
                    0,
                    !1
                  );
                };
          },
        ]);
    }
    function E(e, n, r, i) {
      function o() {
        return n.has
          ? function (e) {
              return n.has(e) ? n.get(e) : null;
            }
          : function (e) {
              try {
                return n.get(e);
              } catch (t) {
                return null;
              }
            };
      }
      function a(e, n) {
        function r(e) {
          return 1 === G && J >= 4
            ? !!c.enabled(e)
            : 1 === G && J >= 2
            ? !!c.enabled()
            : !!u;
        }
        var i = {
          enter: function (e, t, n) {
            t.after(e), n();
          },
          leave: function (e, t) {
            e.remove(), t();
          },
        };
        if (e.noanimation) return i;
        if (c)
          return {
            enter: function (e, n, o) {
              r(e)
                ? t.version.minor > 2
                  ? c.enter(e, null, n).then(o)
                  : c.enter(e, null, n, o)
                : i.enter(e, n, o);
            },
            leave: function (e, n) {
              r(e)
                ? t.version.minor > 2
                  ? c.leave(e).then(n)
                  : c.leave(e, n)
                : i.leave(e, n);
            },
          };
        if (u) {
          var o = u && u(n, e);
          return {
            enter: function (e, t, n) {
              o.enter(e, null, t), n();
            },
            leave: function (e, t) {
              o.leave(e), t();
            },
          };
        }
        return i;
      }
      var s = o(),
        u = s("$animator"),
        c = s("$animate"),
        l = {
          restrict: "ECA",
          terminal: !0,
          priority: 400,
          transclude: "element",
          compile: function (n, o, s) {
            return function (n, o, u) {
              function c() {
                function e() {
                  t && t.remove(), n && n.$destroy();
                }
                var t = f,
                  n = p;
                n && (n._willBeDestroyed = !0),
                  h
                    ? (m.leave(h, function () {
                        e(), (f = null);
                      }),
                      (f = h))
                    : (e(), (f = null)),
                  (h = null),
                  (p = null);
              }
              function l(a) {
                var l,
                  f = A(n, u, o, i),
                  g = f && e.$current && e.$current.locals[f];
                if ((a || g !== d) && !n._willBeDestroyed) {
                  (l = n.$new()),
                    (d = e.$current.locals[f]),
                    l.$emit("$viewContentLoading", f);
                  var y = s(l, function (e) {
                    m.enter(e, o, function () {
                      p && p.$emit("$viewContentAnimationEnded"),
                        ((t.isDefined(v) && !v) || n.$eval(v)) && r(e);
                    }),
                      c();
                  });
                  (h = y),
                    (p = l),
                    p.$emit("$viewContentLoaded", f),
                    p.$eval($);
                }
              }
              var f,
                h,
                p,
                d,
                $ = u.onload || "",
                v = u.autoscroll,
                m = a(u, n);
              n.$on("$stateChangeSuccess", function () {
                l(!1);
              }),
                l(!0);
            };
          },
        };
      return l;
    }
    function C(e, t, n, r) {
      return {
        restrict: "ECA",
        priority: -400,
        compile: function (i) {
          var o = i.html();
          return function (i, a, s) {
            var u = n.$current,
              c = A(i, s, a, r),
              l = u && u.locals[c];
            if (l) {
              a.data("$uiView", { name: c, state: l.$$state }),
                a.html(l.$template ? l.$template : o);
              var f = e(a.contents());
              if (l.$$controller) {
                (l.$scope = i), (l.$element = a);
                var h = t(l.$$controller, l);
                l.$$controllerAs && (i[l.$$controllerAs] = h),
                  a.data("$ngControllerController", h),
                  a.children().data("$ngControllerController", h);
              }
              f(i);
            }
          };
        },
      };
    }
    function A(e, t, n, r) {
      var i = r(t.uiView || t.name || "")(e),
        o = n.inheritedData("$uiView");
      return i.indexOf("@") >= 0 ? i : i + "@" + (o ? o.state.name : "");
    }
    function k(e, t) {
      var n,
        r = e.match(/^\s*({[^}]*})\s*$/);
      if (
        (r && (e = t + "(" + r[1] + ")"),
        (n = e.replace(/\n/g, " ").match(/^([^(]+?)\s*(\((.*)\))?$/)),
        !n || 4 !== n.length)
      )
        throw new Error("Invalid state ref '" + e + "'");
      return { state: n[1], paramExpr: n[3] || null };
    }
    function O(e) {
      var t = e.parent().inheritedData("$uiView");
      return t && t.state && t.state.name ? t.state : void 0;
    }
    function M(e) {
      var t =
          "[object SVGAnimatedString]" ===
          Object.prototype.toString.call(e.prop("href")),
        n = "FORM" === e[0].nodeName;
      return {
        attr: n ? "action" : t ? "xlink:href" : "href",
        isAnchor: "A" === e.prop("tagName").toUpperCase(),
        clickable: !n,
      };
    }
    function j(e, t, n, r, i) {
      return function (o) {
        var a = o.which || o.button,
          s = i();
        if (
          !(a > 1 || o.ctrlKey || o.metaKey || o.shiftKey || e.attr("target"))
        ) {
          var u = n(function () {
            t.go(s.state, s.params, s.options);
          });
          o.preventDefault();
          var c = r.isAnchor && !s.href ? 1 : 0;
          o.preventDefault = function () {
            c-- <= 0 && n.cancel(u);
          };
        }
      };
    }
    function T(e, t) {
      return { relative: O(e) || t.$current, inherit: !0 };
    }
    function N(e, n) {
      return {
        restrict: "A",
        require: ["?^uiSrefActive", "?^uiSrefActiveEq"],
        link: function (r, i, o, a) {
          var s = k(o.uiSref, e.current.name),
            u = { state: s.state, href: null, params: null },
            c = M(i),
            l = a[1] || a[0];
          u.options = B(T(i, e), o.uiSrefOpts ? r.$eval(o.uiSrefOpts) : {});
          var f = function (n) {
            n && (u.params = t.copy(n)),
              (u.href = e.href(s.state, u.params, u.options)),
              l && l.$$addStateInfo(s.state, u.params),
              null !== u.href && o.$set(c.attr, u.href);
          };
          s.paramExpr &&
            (r.$watch(
              s.paramExpr,
              function (e) {
                e !== u.params && f(e);
              },
              !0
            ),
            (u.params = t.copy(r.$eval(s.paramExpr)))),
            f(),
            c.clickable &&
              i.bind(
                "click",
                j(i, e, n, c, function () {
                  return u;
                })
              );
        },
      };
    }
    function V(e, t) {
      return {
        restrict: "A",
        require: ["?^uiSrefActive", "?^uiSrefActiveEq"],
        link: function (n, r, i, o) {
          function a(t) {
            (f.state = t[0]),
              (f.params = t[1]),
              (f.options = t[2]),
              (f.href = e.href(f.state, f.params, f.options)),
              u && u.$$addStateInfo(f.state, f.params),
              f.href && i.$set(s.attr, f.href);
          }
          var s = M(r),
            u = o[1] || o[0],
            c = [i.uiState, i.uiStateParams || null, i.uiStateOpts || null],
            l =
              "[" +
              c
                .map(function (e) {
                  return e || "null";
                })
                .join(", ") +
              "]",
            f = { state: null, params: null, options: null, href: null };
          n.$watch(l, a, !0),
            a(n.$eval(l)),
            s.clickable &&
              r.bind(
                "click",
                j(r, e, t, s, function () {
                  return f;
                })
              );
        },
      };
    }
    function P(e, t, n) {
      return {
        restrict: "A",
        controller: [
          "$scope",
          "$element",
          "$attrs",
          "$timeout",
          function (t, r, i, o) {
            function a(t, n, i) {
              var o = e.get(t, O(r)),
                a = s(t, n);
              $.push({ state: o || { name: t }, params: n, hash: a }),
                (v[a] = i);
            }
            function s(e, n) {
              if (!_(e)) throw new Error("state should be a string");
              return F(n) ? e + z(n) : ((n = t.$eval(n)), F(n) ? e + z(n) : e);
            }
            function u() {
              for (var e = 0; e < $.length; e++)
                f($[e].state, $[e].params)
                  ? c(r, v[$[e].hash])
                  : l(r, v[$[e].hash]),
                  h($[e].state, $[e].params) ? c(r, p) : l(r, p);
            }
            function c(e, t) {
              o(function () {
                e.addClass(t);
              });
            }
            function l(e, t) {
              e.removeClass(t);
            }
            function f(t, n) {
              return e.includes(t.name, n);
            }
            function h(t, n) {
              return e.is(t.name, n);
            }
            var p,
              d,
              $ = [],
              v = {};
            p = n(i.uiSrefActiveEq || "", !1)(t);
            try {
              d = t.$eval(i.uiSrefActive);
            } catch (m) {}
            (d = d || n(i.uiSrefActive || "", !1)(t)),
              F(d) &&
                H(d, function (n, r) {
                  if (_(n)) {
                    var i = k(n, e.current.name);
                    a(i.state, t.$eval(i.paramExpr), r);
                  }
                }),
              (this.$$addStateInfo = function (e, t) {
                (F(d) && $.length > 0) || (a(e, t, d), u());
              }),
              t.$on("$stateChangeSuccess", u),
              u();
          },
        ],
      };
    }
    function I(e) {
      var t = function (t, n) {
        return e.is(t, n);
      };
      return (t.$stateful = !0), t;
    }
    function D(e) {
      var t = function (t, n, r) {
        return e.includes(t, n, r);
      };
      return (t.$stateful = !0), t;
    }
    var R = t.isDefined,
      q = t.isFunction,
      _ = t.isString,
      F = t.isObject,
      U = t.isArray,
      H = t.forEach,
      B = t.extend,
      L = t.copy,
      z = t.toJson;
    t.module("ui.router.util", ["ng"]),
      t.module("ui.router.router", ["ui.router.util"]),
      t.module("ui.router.state", ["ui.router.router", "ui.router.util"]),
      t.module("ui.router", ["ui.router.state"]),
      t.module("ui.router.compat", ["ui.router"]),
      ($.$inject = ["$q", "$injector"]),
      t.module("ui.router.util").service("$resolve", $),
      (v.$inject = ["$http", "$templateCache", "$injector"]),
      t.module("ui.router.util").service("$templateFactory", v);
    var W;
    (m.prototype.concat = function (e, t) {
      var n = {
        caseInsensitive: W.caseInsensitive(),
        strict: W.strictMode(),
        squash: W.defaultSquashPolicy(),
      };
      return new m(this.sourcePath + e + this.sourceSearch, B(n, t), this);
    }),
      (m.prototype.toString = function () {
        return this.source;
      }),
      (m.prototype.exec = function (e, t) {
        function n(e) {
          function t(e) {
            return e.split("").reverse().join("");
          }
          function n(e) {
            return e.replace(/\\-/g, "-");
          }
          var r = t(e).split(/-(?!\\)/),
            i = d(r, t);
          return d(i, n).reverse();
        }
        var r = this.regexp.exec(e);
        if (!r) return null;
        t = t || {};
        var i,
          o,
          a,
          s = this.parameters(),
          u = s.length,
          c = this.segments.length - 1,
          l = {};
        if (c !== r.length - 1)
          throw new Error(
            "Unbalanced capture group in route '" + this.source + "'"
          );
        var f, h;
        for (i = 0; c > i; i++) {
          for (
            a = s[i], f = this.params[a], h = r[i + 1], o = 0;
            o < f.replace.length;
            o++
          )
            f.replace[o].from === h && (h = f.replace[o].to);
          h && f.array === !0 && (h = n(h)),
            R(h) && (h = f.type.decode(h)),
            (l[a] = f.value(h));
        }
        for (; u > i; i++) {
          for (
            a = s[i],
              l[a] = this.params[a].value(t[a]),
              f = this.params[a],
              h = t[a],
              o = 0;
            o < f.replace.length;
            o++
          )
            f.replace[o].from === h && (h = f.replace[o].to);
          R(h) && (h = f.type.decode(h)), (l[a] = f.value(h));
        }
        return l;
      }),
      (m.prototype.parameters = function (e) {
        return R(e) ? this.params[e] || null : this.$$paramNames;
      }),
      (m.prototype.validates = function (e) {
        return this.params.$$validates(e);
      }),
      (m.prototype.format = function (e) {
        function t(e) {
          return encodeURIComponent(e).replace(/-/g, function (e) {
            return "%5C%" + e.charCodeAt(0).toString(16).toUpperCase();
          });
        }
        e = e || {};
        var n = this.segments,
          r = this.parameters(),
          i = this.params;
        if (!this.validates(e)) return null;
        var o,
          a = !1,
          s = n.length - 1,
          u = r.length,
          c = n[0];
        for (o = 0; u > o; o++) {
          var l = s > o,
            f = r[o],
            h = i[f],
            p = h.value(e[f]),
            $ = h.isOptional && h.type.equals(h.value(), p),
            v = $ ? h.squash : !1,
            m = h.type.encode(p);
          if (l) {
            var g = n[o + 1],
              y = o + 1 === s;
            if (v === !1)
              null != m &&
                (c += U(m) ? d(m, t).join("-") : encodeURIComponent(m)),
                (c += g);
            else if (v === !0) {
              var b = c.match(/\/$/) ? /\/?(.*)/ : /(.*)/;
              c += g.match(b)[1];
            } else _(v) && (c += v + g);
            y && h.squash === !0 && "/" === c.slice(-1) && (c = c.slice(0, -1));
          } else {
            if (null == m || ($ && v !== !1)) continue;
            if ((U(m) || (m = [m]), 0 === m.length)) continue;
            (m = d(m, encodeURIComponent).join("&" + f + "=")),
              (c += (a ? "&" : "?") + (f + "=" + m)),
              (a = !0);
          }
        }
        return c;
      }),
      (g.prototype.is = function (e, t) {
        return !0;
      }),
      (g.prototype.encode = function (e, t) {
        return e;
      }),
      (g.prototype.decode = function (e, t) {
        return e;
      }),
      (g.prototype.equals = function (e, t) {
        return e == t;
      }),
      (g.prototype.$subPattern = function () {
        var e = this.pattern.toString();
        return e.substr(1, e.length - 2);
      }),
      (g.prototype.pattern = /.*/),
      (g.prototype.toString = function () {
        return "{Type:" + this.name + "}";
      }),
      (g.prototype.$normalize = function (e) {
        return this.is(e) ? e : this.decode(e);
      }),
      (g.prototype.$asArray = function (e, t) {
        function r(e, t) {
          function r(e, t) {
            return function () {
              return e[t].apply(e, arguments);
            };
          }
          function i(e) {
            return U(e) ? e : R(e) ? [e] : [];
          }
          function o(e) {
            switch (e.length) {
              case 0:
                return n;
              case 1:
                return "auto" === t ? e[0] : e;
              default:
                return e;
            }
          }
          function a(e) {
            return !e;
          }
          function s(e, t) {
            return function (n) {
              if (U(n) && 0 === n.length) return n;
              n = i(n);
              var r = d(n, e);
              return t === !0 ? 0 === p(r, a).length : o(r);
            };
          }
          function u(e) {
            return function (t, n) {
              var r = i(t),
                o = i(n);
              if (r.length !== o.length) return !1;
              for (var a = 0; a < r.length; a++) if (!e(r[a], o[a])) return !1;
              return !0;
            };
          }
          (this.encode = s(r(e, "encode"))),
            (this.decode = s(r(e, "decode"))),
            (this.is = s(r(e, "is"), !0)),
            (this.equals = u(r(e, "equals"))),
            (this.pattern = e.pattern),
            (this.$normalize = s(r(e, "$normalize"))),
            (this.name = e.name),
            (this.$arrayMode = t);
        }
        if (!e) return this;
        if ("auto" === e && !t)
          throw new Error("'auto' array mode is for query parameters only");
        return new r(this, e);
      }),
      t.module("ui.router.util").provider("$urlMatcherFactory", y),
      t.module("ui.router.util").run(["$urlMatcherFactory", function (e) {}]),
      (b.$inject = ["$locationProvider", "$urlMatcherFactoryProvider"]),
      t.module("ui.router.router").provider("$urlRouter", b),
      (w.$inject = ["$urlRouterProvider", "$urlMatcherFactoryProvider"]),
      t
        .module("ui.router.state")
        .factory("$stateParams", function () {
          return {};
        })
        .provider("$state", w),
      (x.$inject = []),
      t.module("ui.router.state").provider("$view", x),
      t.module("ui.router.state").provider("$uiViewScroll", S);
    var G = t.version.major,
      J = t.version.minor;
    (E.$inject = ["$state", "$injector", "$uiViewScroll", "$interpolate"]),
      (C.$inject = ["$compile", "$controller", "$state", "$interpolate"]),
      t.module("ui.router.state").directive("uiView", E),
      t.module("ui.router.state").directive("uiView", C),
      (N.$inject = ["$state", "$timeout"]),
      (V.$inject = ["$state", "$timeout"]),
      (P.$inject = ["$state", "$stateParams", "$interpolate"]),
      t
        .module("ui.router.state")
        .directive("uiSref", N)
        .directive("uiSrefActive", P)
        .directive("uiSrefActiveEq", P)
        .directive("uiState", V),
      (I.$inject = ["$state"]),
      (D.$inject = ["$state"]),
      t
        .module("ui.router.state")
        .filter("isState", I)
        .filter("includedByState", D);
  })(window, window.angular);
