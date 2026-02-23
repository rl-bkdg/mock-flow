(function () {
  const a = document.createElement("link").relList;
  if (a && a.supports && a.supports("modulepreload")) return;
  for (const s of document.querySelectorAll('link[rel="modulepreload"]')) i(s);
  new MutationObserver((s) => {
    for (const o of s)
      if (o.type === "childList")
        for (const d of o.addedNodes)
          d.tagName === "LINK" && d.rel === "modulepreload" && i(d);
  }).observe(document, { childList: !0, subtree: !0 });
  function r(s) {
    const o = {};
    return (
      s.integrity && (o.integrity = s.integrity),
      s.referrerPolicy && (o.referrerPolicy = s.referrerPolicy),
      s.crossOrigin === "use-credentials"
        ? (o.credentials = "include")
        : s.crossOrigin === "anonymous"
        ? (o.credentials = "omit")
        : (o.credentials = "same-origin"),
      o
    );
  }
  function i(s) {
    if (s.ep) return;
    s.ep = !0;
    const o = r(s);
    fetch(s.href, o);
  }
})();
var Kd = { exports: {} },
  nc = {};
var l1;
function Pb() {
  if (l1) return nc;
  l1 = 1;
  var f = Symbol.for("react.transitional.element"),
    a = Symbol.for("react.fragment");
  function r(i, s, o) {
    var d = null;
    if (
      (o !== void 0 && (d = "" + o),
      s.key !== void 0 && (d = "" + s.key),
      "key" in s)
    ) {
      o = {};
      for (var h in s) h !== "key" && (o[h] = s[h]);
    } else o = s;
    return (
      (s = o.ref),
      { $$typeof: f, type: i, key: d, ref: s !== void 0 ? s : null, props: o }
    );
  }
  return (nc.Fragment = a), (nc.jsx = r), (nc.jsxs = r), nc;
}
var i1;
function Ib() {
  return i1 || ((i1 = 1), (Kd.exports = Pb())), Kd.exports;
}
var x = Ib(),
  Jd = { exports: {} },
  Ae = {};
var r1;
function ex() {
  if (r1) return Ae;
  r1 = 1;
  var f = Symbol.for("react.transitional.element"),
    a = Symbol.for("react.portal"),
    r = Symbol.for("react.fragment"),
    i = Symbol.for("react.strict_mode"),
    s = Symbol.for("react.profiler"),
    o = Symbol.for("react.consumer"),
    d = Symbol.for("react.context"),
    h = Symbol.for("react.forward_ref"),
    p = Symbol.for("react.suspense"),
    g = Symbol.for("react.memo"),
    y = Symbol.for("react.lazy"),
    _ = Symbol.for("react.activity"),
    T = Symbol.iterator;
  function b(z) {
    return z === null || typeof z != "object"
      ? null
      : ((z = (T && z[T]) || z["@@iterator"]),
        typeof z == "function" ? z : null);
  }
  var E = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    S = Object.assign,
    N = {};
  function q(z, L, P) {
    (this.props = z),
      (this.context = L),
      (this.refs = N),
      (this.updater = P || E);
  }
  (q.prototype.isReactComponent = {}),
    (q.prototype.setState = function (z, L) {
      if (typeof z != "object" && typeof z != "function" && z != null)
        throw Error(
          "takes an object of state variables to update or a function which returns an object of state variables."
        );
      this.updater.enqueueSetState(this, z, L, "setState");
    }),
    (q.prototype.forceUpdate = function (z) {
      this.updater.enqueueForceUpdate(this, z, "forceUpdate");
    });
  function X() {}
  X.prototype = q.prototype;
  function K(z, L, P) {
    (this.props = z),
      (this.context = L),
      (this.refs = N),
      (this.updater = P || E);
  }
  var U = (K.prototype = new X());
  (U.constructor = K), S(U, q.prototype), (U.isPureReactComponent = !0);
  var Q = Array.isArray;
  function W() {}
  var R = { H: null, A: null, T: null, S: null },
    H = Object.prototype.hasOwnProperty;
  function J(z, L, P) {
    var ee = P.ref;
    return {
      $$typeof: f,
      type: z,
      key: L,
      ref: ee !== void 0 ? ee : null,
      props: P,
    };
  }
  function I(z, L) {
    return J(z.type, L, z.props);
  }
  function oe(z) {
    return typeof z == "object" && z !== null && z.$$typeof === f;
  }
  function te(z) {
    var L = { "=": "=0", ":": "=2" };
    return (
      "$" +
      z.replace(/[=:]/g, function (P) {
        return L[P];
      })
    );
  }
  var be = /\/+/g;
  function ve(z, L) {
    return typeof z == "object" && z !== null && z.key != null
      ? te("" + z.key)
      : L.toString(36);
  }
  function ye(z) {
    switch (z.status) {
      case "fulfilled":
        return z.value;
      case "rejected":
        throw z.reason;
      default:
        switch (
          (typeof z.status == "string"
            ? z.then(W, W)
            : ((z.status = "pending"),
              z.then(
                function (L) {
                  z.status === "pending" &&
                    ((z.status = "fulfilled"), (z.value = L));
                },
                function (L) {
                  z.status === "pending" &&
                    ((z.status = "rejected"), (z.reason = L));
                }
              )),
          z.status)
        ) {
          case "fulfilled":
            return z.value;
          case "rejected":
            throw z.reason;
        }
    }
    throw z;
  }
  function O(z, L, P, ee, le) {
    var de = typeof z;
    (de === "undefined" || de === "boolean") && (z = null);
    var ae = !1;
    if (z === null) ae = !0;
    else
      switch (de) {
        case "bigint":
        case "string":
        case "number":
          ae = !0;
          break;
        case "object":
          switch (z.$$typeof) {
            case f:
            case a:
              ae = !0;
              break;
            case y:
              return (ae = z._init), O(ae(z._payload), L, P, ee, le);
          }
      }
    if (ae)
      return (
        (le = le(z)),
        (ae = ee === "" ? "." + ve(z, 0) : ee),
        Q(le)
          ? ((P = ""),
            ae != null && (P = ae.replace(be, "$&/") + "/"),
            O(le, L, P, "", function (Kt) {
              return Kt;
            }))
          : le != null &&
            (oe(le) &&
              (le = I(
                le,
                P +
                  (le.key == null || (z && z.key === le.key)
                    ? ""
                    : ("" + le.key).replace(be, "$&/") + "/") +
                  ae
              )),
            L.push(le)),
        1
      );
    ae = 0;
    var Qe = ee === "" ? "." : ee + ":";
    if (Q(z))
      for (var Ce = 0; Ce < z.length; Ce++)
        (ee = z[Ce]), (de = Qe + ve(ee, Ce)), (ae += O(ee, L, P, de, le));
    else if (((Ce = b(z)), typeof Ce == "function"))
      for (z = Ce.call(z), Ce = 0; !(ee = z.next()).done; )
        (ee = ee.value), (de = Qe + ve(ee, Ce++)), (ae += O(ee, L, P, de, le));
    else if (de === "object") {
      if (typeof z.then == "function") return O(ye(z), L, P, ee, le);
      throw (
        ((L = String(z)),
        Error(
          "Objects are not valid as a React child (found: " +
            (L === "[object Object]"
              ? "object with keys {" + Object.keys(z).join(", ") + "}"
              : L) +
            "). If you meant to render a collection of children, use an array instead."
        ))
      );
    }
    return ae;
  }
  function G(z, L, P) {
    if (z == null) return z;
    var ee = [],
      le = 0;
    return (
      O(z, ee, "", "", function (de) {
        return L.call(P, de, le++);
      }),
      ee
    );
  }
  function V(z) {
    if (z._status === -1) {
      var L = z._result;
      (L = L()),
        L.then(
          function (P) {
            (z._status === 0 || z._status === -1) &&
              ((z._status = 1), (z._result = P));
          },
          function (P) {
            (z._status === 0 || z._status === -1) &&
              ((z._status = 2), (z._result = P));
          }
        ),
        z._status === -1 && ((z._status = 0), (z._result = L));
    }
    if (z._status === 1) return z._result.default;
    throw z._result;
  }
  var fe =
      typeof reportError == "function"
        ? reportError
        : function (z) {
            if (
              typeof window == "object" &&
              typeof window.ErrorEvent == "function"
            ) {
              var L = new window.ErrorEvent("error", {
                bubbles: !0,
                cancelable: !0,
                message:
                  typeof z == "object" &&
                  z !== null &&
                  typeof z.message == "string"
                    ? String(z.message)
                    : String(z),
                error: z,
              });
              if (!window.dispatchEvent(L)) return;
            } else if (
              typeof process == "object" &&
              typeof process.emit == "function"
            ) {
              process.emit("uncaughtException", z);
              return;
            }
            console.error(z);
          },
    w = {
      map: G,
      forEach: function (z, L, P) {
        G(
          z,
          function () {
            L.apply(this, arguments);
          },
          P
        );
      },
      count: function (z) {
        var L = 0;
        return (
          G(z, function () {
            L++;
          }),
          L
        );
      },
      toArray: function (z) {
        return (
          G(z, function (L) {
            return L;
          }) || []
        );
      },
      only: function (z) {
        if (!oe(z))
          throw Error(
            "React.Children.only expected to receive a single React element child."
          );
        return z;
      },
    };
  return (
    (Ae.Activity = _),
    (Ae.Children = w),
    (Ae.Component = q),
    (Ae.Fragment = r),
    (Ae.Profiler = s),
    (Ae.PureComponent = K),
    (Ae.StrictMode = i),
    (Ae.Suspense = p),
    (Ae.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = R),
    (Ae.__COMPILER_RUNTIME = {
      __proto__: null,
      c: function (z) {
        return R.H.useMemoCache(z);
      },
    }),
    (Ae.cache = function (z) {
      return function () {
        return z.apply(null, arguments);
      };
    }),
    (Ae.cacheSignal = function () {
      return null;
    }),
    (Ae.cloneElement = function (z, L, P) {
      if (z == null)
        throw Error(
          "The argument must be a React element, but you passed " + z + "."
        );
      var ee = S({}, z.props),
        le = z.key;
      if (L != null)
        for (de in (L.key !== void 0 && (le = "" + L.key), L))
          !H.call(L, de) ||
            de === "key" ||
            de === "__self" ||
            de === "__source" ||
            (de === "ref" && L.ref === void 0) ||
            (ee[de] = L[de]);
      var de = arguments.length - 2;
      if (de === 1) ee.children = P;
      else if (1 < de) {
        for (var ae = Array(de), Qe = 0; Qe < de; Qe++)
          ae[Qe] = arguments[Qe + 2];
        ee.children = ae;
      }
      return J(z.type, le, ee);
    }),
    (Ae.createContext = function (z) {
      return (
        (z = {
          $$typeof: d,
          _currentValue: z,
          _currentValue2: z,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
        }),
        (z.Provider = z),
        (z.Consumer = { $$typeof: o, _context: z }),
        z
      );
    }),
    (Ae.createElement = function (z, L, P) {
      var ee,
        le = {},
        de = null;
      if (L != null)
        for (ee in (L.key !== void 0 && (de = "" + L.key), L))
          H.call(L, ee) &&
            ee !== "key" &&
            ee !== "__self" &&
            ee !== "__source" &&
            (le[ee] = L[ee]);
      var ae = arguments.length - 2;
      if (ae === 1) le.children = P;
      else if (1 < ae) {
        for (var Qe = Array(ae), Ce = 0; Ce < ae; Ce++)
          Qe[Ce] = arguments[Ce + 2];
        le.children = Qe;
      }
      if (z && z.defaultProps)
        for (ee in ((ae = z.defaultProps), ae))
          le[ee] === void 0 && (le[ee] = ae[ee]);
      return J(z, de, le);
    }),
    (Ae.createRef = function () {
      return { current: null };
    }),
    (Ae.forwardRef = function (z) {
      return { $$typeof: h, render: z };
    }),
    (Ae.isValidElement = oe),
    (Ae.lazy = function (z) {
      return { $$typeof: y, _payload: { _status: -1, _result: z }, _init: V };
    }),
    (Ae.memo = function (z, L) {
      return { $$typeof: g, type: z, compare: L === void 0 ? null : L };
    }),
    (Ae.startTransition = function (z) {
      var L = R.T,
        P = {};
      R.T = P;
      try {
        var ee = z(),
          le = R.S;
        le !== null && le(P, ee),
          typeof ee == "object" &&
            ee !== null &&
            typeof ee.then == "function" &&
            ee.then(W, fe);
      } catch (de) {
        fe(de);
      } finally {
        L !== null && P.types !== null && (L.types = P.types), (R.T = L);
      }
    }),
    (Ae.unstable_useCacheRefresh = function () {
      return R.H.useCacheRefresh();
    }),
    (Ae.use = function (z) {
      return R.H.use(z);
    }),
    (Ae.useActionState = function (z, L, P) {
      return R.H.useActionState(z, L, P);
    }),
    (Ae.useCallback = function (z, L) {
      return R.H.useCallback(z, L);
    }),
    (Ae.useContext = function (z) {
      return R.H.useContext(z);
    }),
    (Ae.useDebugValue = function () {}),
    (Ae.useDeferredValue = function (z, L) {
      return R.H.useDeferredValue(z, L);
    }),
    (Ae.useEffect = function (z, L) {
      return R.H.useEffect(z, L);
    }),
    (Ae.useEffectEvent = function (z) {
      return R.H.useEffectEvent(z);
    }),
    (Ae.useId = function () {
      return R.H.useId();
    }),
    (Ae.useImperativeHandle = function (z, L, P) {
      return R.H.useImperativeHandle(z, L, P);
    }),
    (Ae.useInsertionEffect = function (z, L) {
      return R.H.useInsertionEffect(z, L);
    }),
    (Ae.useLayoutEffect = function (z, L) {
      return R.H.useLayoutEffect(z, L);
    }),
    (Ae.useMemo = function (z, L) {
      return R.H.useMemo(z, L);
    }),
    (Ae.useOptimistic = function (z, L) {
      return R.H.useOptimistic(z, L);
    }),
    (Ae.useReducer = function (z, L, P) {
      return R.H.useReducer(z, L, P);
    }),
    (Ae.useRef = function (z) {
      return R.H.useRef(z);
    }),
    (Ae.useState = function (z) {
      return R.H.useState(z);
    }),
    (Ae.useSyncExternalStore = function (z, L, P) {
      return R.H.useSyncExternalStore(z, L, P);
    }),
    (Ae.useTransition = function () {
      return R.H.useTransition();
    }),
    (Ae.version = "19.2.3"),
    Ae
  );
}
var s1;
function Qh() {
  return s1 || ((s1 = 1), (Jd.exports = ex())), Jd.exports;
}
var ge = Qh(),
  Fd = { exports: {} },
  ac = {},
  Wd = { exports: {} },
  $d = {};
var c1;
function tx() {
  return (
    c1 ||
      ((c1 = 1),
      (function (f) {
        function a(O, G) {
          var V = O.length;
          O.push(G);
          e: for (; 0 < V; ) {
            var fe = (V - 1) >>> 1,
              w = O[fe];
            if (0 < s(w, G)) (O[fe] = G), (O[V] = w), (V = fe);
            else break e;
          }
        }
        function r(O) {
          return O.length === 0 ? null : O[0];
        }
        function i(O) {
          if (O.length === 0) return null;
          var G = O[0],
            V = O.pop();
          if (V !== G) {
            O[0] = V;
            e: for (var fe = 0, w = O.length, z = w >>> 1; fe < z; ) {
              var L = 2 * (fe + 1) - 1,
                P = O[L],
                ee = L + 1,
                le = O[ee];
              if (0 > s(P, V))
                ee < w && 0 > s(le, P)
                  ? ((O[fe] = le), (O[ee] = V), (fe = ee))
                  : ((O[fe] = P), (O[L] = V), (fe = L));
              else if (ee < w && 0 > s(le, V))
                (O[fe] = le), (O[ee] = V), (fe = ee);
              else break e;
            }
          }
          return G;
        }
        function s(O, G) {
          var V = O.sortIndex - G.sortIndex;
          return V !== 0 ? V : O.id - G.id;
        }
        if (
          ((f.unstable_now = void 0),
          typeof performance == "object" &&
            typeof performance.now == "function")
        ) {
          var o = performance;
          f.unstable_now = function () {
            return o.now();
          };
        } else {
          var d = Date,
            h = d.now();
          f.unstable_now = function () {
            return d.now() - h;
          };
        }
        var p = [],
          g = [],
          y = 1,
          _ = null,
          T = 3,
          b = !1,
          E = !1,
          S = !1,
          N = !1,
          q = typeof setTimeout == "function" ? setTimeout : null,
          X = typeof clearTimeout == "function" ? clearTimeout : null,
          K = typeof setImmediate < "u" ? setImmediate : null;
        function U(O) {
          for (var G = r(g); G !== null; ) {
            if (G.callback === null) i(g);
            else if (G.startTime <= O)
              i(g), (G.sortIndex = G.expirationTime), a(p, G);
            else break;
            G = r(g);
          }
        }
        function Q(O) {
          if (((S = !1), U(O), !E))
            if (r(p) !== null) (E = !0), W || ((W = !0), te());
            else {
              var G = r(g);
              G !== null && ye(Q, G.startTime - O);
            }
        }
        var W = !1,
          R = -1,
          H = 5,
          J = -1;
        function I() {
          return N ? !0 : !(f.unstable_now() - J < H);
        }
        function oe() {
          if (((N = !1), W)) {
            var O = f.unstable_now();
            J = O;
            var G = !0;
            try {
              e: {
                (E = !1), S && ((S = !1), X(R), (R = -1)), (b = !0);
                var V = T;
                try {
                  t: {
                    for (
                      U(O), _ = r(p);
                      _ !== null && !(_.expirationTime > O && I());

                    ) {
                      var fe = _.callback;
                      if (typeof fe == "function") {
                        (_.callback = null), (T = _.priorityLevel);
                        var w = fe(_.expirationTime <= O);
                        if (((O = f.unstable_now()), typeof w == "function")) {
                          (_.callback = w), U(O), (G = !0);
                          break t;
                        }
                        _ === r(p) && i(p), U(O);
                      } else i(p);
                      _ = r(p);
                    }
                    if (_ !== null) G = !0;
                    else {
                      var z = r(g);
                      z !== null && ye(Q, z.startTime - O), (G = !1);
                    }
                  }
                  break e;
                } finally {
                  (_ = null), (T = V), (b = !1);
                }
                G = void 0;
              }
            } finally {
              G ? te() : (W = !1);
            }
          }
        }
        var te;
        if (typeof K == "function")
          te = function () {
            K(oe);
          };
        else if (typeof MessageChannel < "u") {
          var be = new MessageChannel(),
            ve = be.port2;
          (be.port1.onmessage = oe),
            (te = function () {
              ve.postMessage(null);
            });
        } else
          te = function () {
            q(oe, 0);
          };
        function ye(O, G) {
          R = q(function () {
            O(f.unstable_now());
          }, G);
        }
        (f.unstable_IdlePriority = 5),
          (f.unstable_ImmediatePriority = 1),
          (f.unstable_LowPriority = 4),
          (f.unstable_NormalPriority = 3),
          (f.unstable_Profiling = null),
          (f.unstable_UserBlockingPriority = 2),
          (f.unstable_cancelCallback = function (O) {
            O.callback = null;
          }),
          (f.unstable_forceFrameRate = function (O) {
            0 > O || 125 < O
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
                )
              : (H = 0 < O ? Math.floor(1e3 / O) : 5);
          }),
          (f.unstable_getCurrentPriorityLevel = function () {
            return T;
          }),
          (f.unstable_next = function (O) {
            switch (T) {
              case 1:
              case 2:
              case 3:
                var G = 3;
                break;
              default:
                G = T;
            }
            var V = T;
            T = G;
            try {
              return O();
            } finally {
              T = V;
            }
          }),
          (f.unstable_requestPaint = function () {
            N = !0;
          }),
          (f.unstable_runWithPriority = function (O, G) {
            switch (O) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                O = 3;
            }
            var V = T;
            T = O;
            try {
              return G();
            } finally {
              T = V;
            }
          }),
          (f.unstable_scheduleCallback = function (O, G, V) {
            var fe = f.unstable_now();
            switch (
              (typeof V == "object" && V !== null
                ? ((V = V.delay),
                  (V = typeof V == "number" && 0 < V ? fe + V : fe))
                : (V = fe),
              O)
            ) {
              case 1:
                var w = -1;
                break;
              case 2:
                w = 250;
                break;
              case 5:
                w = 1073741823;
                break;
              case 4:
                w = 1e4;
                break;
              default:
                w = 5e3;
            }
            return (
              (w = V + w),
              (O = {
                id: y++,
                callback: G,
                priorityLevel: O,
                startTime: V,
                expirationTime: w,
                sortIndex: -1,
              }),
              V > fe
                ? ((O.sortIndex = V),
                  a(g, O),
                  r(p) === null &&
                    O === r(g) &&
                    (S ? (X(R), (R = -1)) : (S = !0), ye(Q, V - fe)))
                : ((O.sortIndex = w),
                  a(p, O),
                  E || b || ((E = !0), W || ((W = !0), te()))),
              O
            );
          }),
          (f.unstable_shouldYield = I),
          (f.unstable_wrapCallback = function (O) {
            var G = T;
            return function () {
              var V = T;
              T = G;
              try {
                return O.apply(this, arguments);
              } finally {
                T = V;
              }
            };
          });
      })($d)),
    $d
  );
}
var u1;
function nx() {
  return u1 || ((u1 = 1), (Wd.exports = tx())), Wd.exports;
}
var Pd = { exports: {} },
  gn = {};
var o1;
function ax() {
  if (o1) return gn;
  o1 = 1;
  var f = Qh();
  function a(p) {
    var g = "https://react.dev/errors/" + p;
    if (1 < arguments.length) {
      g += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var y = 2; y < arguments.length; y++)
        g += "&args[]=" + encodeURIComponent(arguments[y]);
    }
    return (
      "Minified React error #" +
      p +
      "; visit " +
      g +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function r() {}
  var i = {
      d: {
        f: r,
        r: function () {
          throw Error(a(522));
        },
        D: r,
        C: r,
        L: r,
        m: r,
        X: r,
        S: r,
        M: r,
      },
      p: 0,
      findDOMNode: null,
    },
    s = Symbol.for("react.portal");
  function o(p, g, y) {
    var _ =
      3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: s,
      key: _ == null ? null : "" + _,
      children: p,
      containerInfo: g,
      implementation: y,
    };
  }
  var d = f.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function h(p, g) {
    if (p === "font") return "";
    if (typeof g == "string") return g === "use-credentials" ? g : "";
  }
  return (
    (gn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = i),
    (gn.createPortal = function (p, g) {
      var y =
        2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!g || (g.nodeType !== 1 && g.nodeType !== 9 && g.nodeType !== 11))
        throw Error(a(299));
      return o(p, g, null, y);
    }),
    (gn.flushSync = function (p) {
      var g = d.T,
        y = i.p;
      try {
        if (((d.T = null), (i.p = 2), p)) return p();
      } finally {
        (d.T = g), (i.p = y), i.d.f();
      }
    }),
    (gn.preconnect = function (p, g) {
      typeof p == "string" &&
        (g
          ? ((g = g.crossOrigin),
            (g =
              typeof g == "string"
                ? g === "use-credentials"
                  ? g
                  : ""
                : void 0))
          : (g = null),
        i.d.C(p, g));
    }),
    (gn.prefetchDNS = function (p) {
      typeof p == "string" && i.d.D(p);
    }),
    (gn.preinit = function (p, g) {
      if (typeof p == "string" && g && typeof g.as == "string") {
        var y = g.as,
          _ = h(y, g.crossOrigin),
          T = typeof g.integrity == "string" ? g.integrity : void 0,
          b = typeof g.fetchPriority == "string" ? g.fetchPriority : void 0;
        y === "style"
          ? i.d.S(p, typeof g.precedence == "string" ? g.precedence : void 0, {
              crossOrigin: _,
              integrity: T,
              fetchPriority: b,
            })
          : y === "script" &&
            i.d.X(p, {
              crossOrigin: _,
              integrity: T,
              fetchPriority: b,
              nonce: typeof g.nonce == "string" ? g.nonce : void 0,
            });
      }
    }),
    (gn.preinitModule = function (p, g) {
      if (typeof p == "string")
        if (typeof g == "object" && g !== null) {
          if (g.as == null || g.as === "script") {
            var y = h(g.as, g.crossOrigin);
            i.d.M(p, {
              crossOrigin: y,
              integrity: typeof g.integrity == "string" ? g.integrity : void 0,
              nonce: typeof g.nonce == "string" ? g.nonce : void 0,
            });
          }
        } else g == null && i.d.M(p);
    }),
    (gn.preload = function (p, g) {
      if (
        typeof p == "string" &&
        typeof g == "object" &&
        g !== null &&
        typeof g.as == "string"
      ) {
        var y = g.as,
          _ = h(y, g.crossOrigin);
        i.d.L(p, y, {
          crossOrigin: _,
          integrity: typeof g.integrity == "string" ? g.integrity : void 0,
          nonce: typeof g.nonce == "string" ? g.nonce : void 0,
          type: typeof g.type == "string" ? g.type : void 0,
          fetchPriority:
            typeof g.fetchPriority == "string" ? g.fetchPriority : void 0,
          referrerPolicy:
            typeof g.referrerPolicy == "string" ? g.referrerPolicy : void 0,
          imageSrcSet:
            typeof g.imageSrcSet == "string" ? g.imageSrcSet : void 0,
          imageSizes: typeof g.imageSizes == "string" ? g.imageSizes : void 0,
          media: typeof g.media == "string" ? g.media : void 0,
        });
      }
    }),
    (gn.preloadModule = function (p, g) {
      if (typeof p == "string")
        if (g) {
          var y = h(g.as, g.crossOrigin);
          i.d.m(p, {
            as: typeof g.as == "string" && g.as !== "script" ? g.as : void 0,
            crossOrigin: y,
            integrity: typeof g.integrity == "string" ? g.integrity : void 0,
          });
        } else i.d.m(p);
    }),
    (gn.requestFormReset = function (p) {
      i.d.r(p);
    }),
    (gn.unstable_batchedUpdates = function (p, g) {
      return p(g);
    }),
    (gn.useFormState = function (p, g, y) {
      return d.H.useFormState(p, g, y);
    }),
    (gn.useFormStatus = function () {
      return d.H.useHostTransitionStatus();
    }),
    (gn.version = "19.2.3"),
    gn
  );
}
var f1;
function lx() {
  if (f1) return Pd.exports;
  f1 = 1;
  function f() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(f);
      } catch (a) {
        console.error(a);
      }
  }
  return f(), (Pd.exports = ax()), Pd.exports;
}
var d1;
function ix() {
  if (d1) return ac;
  d1 = 1;
  var f = nx(),
    a = Qh(),
    r = lx();
  function i(e) {
    var t = "https://react.dev/errors/" + e;
    if (1 < arguments.length) {
      t += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var n = 2; n < arguments.length; n++)
        t += "&args[]=" + encodeURIComponent(arguments[n]);
    }
    return (
      "Minified React error #" +
      e +
      "; visit " +
      t +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function s(e) {
    return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
  }
  function o(e) {
    var t = e,
      n = e;
    if (e.alternate) for (; t.return; ) t = t.return;
    else {
      e = t;
      do (t = e), (t.flags & 4098) !== 0 && (n = t.return), (e = t.return);
      while (e);
    }
    return t.tag === 3 ? n : null;
  }
  function d(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if (
        (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
        t !== null)
      )
        return t.dehydrated;
    }
    return null;
  }
  function h(e) {
    if (e.tag === 31) {
      var t = e.memoizedState;
      if (
        (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
        t !== null)
      )
        return t.dehydrated;
    }
    return null;
  }
  function p(e) {
    if (o(e) !== e) throw Error(i(188));
  }
  function g(e) {
    var t = e.alternate;
    if (!t) {
      if (((t = o(e)), t === null)) throw Error(i(188));
      return t !== e ? null : e;
    }
    for (var n = e, l = t; ; ) {
      var c = n.return;
      if (c === null) break;
      var u = c.alternate;
      if (u === null) {
        if (((l = c.return), l !== null)) {
          n = l;
          continue;
        }
        break;
      }
      if (c.child === u.child) {
        for (u = c.child; u; ) {
          if (u === n) return p(c), e;
          if (u === l) return p(c), t;
          u = u.sibling;
        }
        throw Error(i(188));
      }
      if (n.return !== l.return) (n = c), (l = u);
      else {
        for (var m = !1, v = c.child; v; ) {
          if (v === n) {
            (m = !0), (n = c), (l = u);
            break;
          }
          if (v === l) {
            (m = !0), (l = c), (n = u);
            break;
          }
          v = v.sibling;
        }
        if (!m) {
          for (v = u.child; v; ) {
            if (v === n) {
              (m = !0), (n = u), (l = c);
              break;
            }
            if (v === l) {
              (m = !0), (l = u), (n = c);
              break;
            }
            v = v.sibling;
          }
          if (!m) throw Error(i(189));
        }
      }
      if (n.alternate !== l) throw Error(i(190));
    }
    if (n.tag !== 3) throw Error(i(188));
    return n.stateNode.current === n ? e : t;
  }
  function y(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e;
    for (e = e.child; e !== null; ) {
      if (((t = y(e)), t !== null)) return t;
      e = e.sibling;
    }
    return null;
  }
  var _ = Object.assign,
    T = Symbol.for("react.element"),
    b = Symbol.for("react.transitional.element"),
    E = Symbol.for("react.portal"),
    S = Symbol.for("react.fragment"),
    N = Symbol.for("react.strict_mode"),
    q = Symbol.for("react.profiler"),
    X = Symbol.for("react.consumer"),
    K = Symbol.for("react.context"),
    U = Symbol.for("react.forward_ref"),
    Q = Symbol.for("react.suspense"),
    W = Symbol.for("react.suspense_list"),
    R = Symbol.for("react.memo"),
    H = Symbol.for("react.lazy"),
    J = Symbol.for("react.activity"),
    I = Symbol.for("react.memo_cache_sentinel"),
    oe = Symbol.iterator;
  function te(e) {
    return e === null || typeof e != "object"
      ? null
      : ((e = (oe && e[oe]) || e["@@iterator"]),
        typeof e == "function" ? e : null);
  }
  var be = Symbol.for("react.client.reference");
  function ve(e) {
    if (e == null) return null;
    if (typeof e == "function")
      return e.$$typeof === be ? null : e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case S:
        return "Fragment";
      case q:
        return "Profiler";
      case N:
        return "StrictMode";
      case Q:
        return "Suspense";
      case W:
        return "SuspenseList";
      case J:
        return "Activity";
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case E:
          return "Portal";
        case K:
          return e.displayName || "Context";
        case X:
          return (e._context.displayName || "Context") + ".Consumer";
        case U:
          var t = e.render;
          return (
            (e = e.displayName),
            e ||
              ((e = t.displayName || t.name || ""),
              (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
            e
          );
        case R:
          return (
            (t = e.displayName || null), t !== null ? t : ve(e.type) || "Memo"
          );
        case H:
          (t = e._payload), (e = e._init);
          try {
            return ve(e(t));
          } catch {}
      }
    return null;
  }
  var ye = Array.isArray,
    O = a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    G = r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    V = { pending: !1, data: null, method: null, action: null },
    fe = [],
    w = -1;
  function z(e) {
    return { current: e };
  }
  function L(e) {
    0 > w || ((e.current = fe[w]), (fe[w] = null), w--);
  }
  function P(e, t) {
    w++, (fe[w] = e.current), (e.current = t);
  }
  var ee = z(null),
    le = z(null),
    de = z(null),
    ae = z(null);
  function Qe(e, t) {
    switch ((P(de, t), P(le, e), P(ee, null), t.nodeType)) {
      case 9:
      case 11:
        e = (e = t.documentElement) && (e = e.namespaceURI) ? Eg(e) : 0;
        break;
      default:
        if (((e = t.tagName), (t = t.namespaceURI)))
          (t = Eg(t)), (e = wg(t, e));
        else
          switch (e) {
            case "svg":
              e = 1;
              break;
            case "math":
              e = 2;
              break;
            default:
              e = 0;
          }
    }
    L(ee), P(ee, e);
  }
  function Ce() {
    L(ee), L(le), L(de);
  }
  function Kt(e) {
    e.memoizedState !== null && P(ae, e);
    var t = ee.current,
      n = wg(t, e.type);
    t !== n && (P(le, e), P(ee, n));
  }
  function mt(e) {
    le.current === e && (L(ee), L(le)),
      ae.current === e && (L(ae), (Ps._currentValue = V));
  }
  var gt, qe;
  function Pe(e) {
    if (gt === void 0)
      try {
        throw Error();
      } catch (n) {
        var t = n.stack.trim().match(/\n( *(at )?)/);
        (gt = (t && t[1]) || ""),
          (qe =
            -1 <
            n.stack.indexOf(`
    at`)
              ? " (<anonymous>)"
              : -1 < n.stack.indexOf("@")
              ? "@unknown:0:0"
              : "");
      }
    return (
      `
` +
      gt +
      e +
      qe
    );
  }
  var It = !1;
  function ln(e, t) {
    if (!e || It) return "";
    It = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var l = {
        DetermineComponentFrameRoot: function () {
          try {
            if (t) {
              var $ = function () {
                throw Error();
              };
              if (
                (Object.defineProperty($.prototype, "props", {
                  set: function () {
                    throw Error();
                  },
                }),
                typeof Reflect == "object" && Reflect.construct)
              ) {
                try {
                  Reflect.construct($, []);
                } catch (B) {
                  var k = B;
                }
                Reflect.construct(e, [], $);
              } else {
                try {
                  $.call();
                } catch (B) {
                  k = B;
                }
                e.call($.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (B) {
                k = B;
              }
              ($ = e()) &&
                typeof $.catch == "function" &&
                $.catch(function () {});
            }
          } catch (B) {
            if (B && k && typeof B.stack == "string") return [B.stack, k.stack];
          }
          return [null, null];
        },
      };
      l.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var c = Object.getOwnPropertyDescriptor(
        l.DetermineComponentFrameRoot,
        "name"
      );
      c &&
        c.configurable &&
        Object.defineProperty(l.DetermineComponentFrameRoot, "name", {
          value: "DetermineComponentFrameRoot",
        });
      var u = l.DetermineComponentFrameRoot(),
        m = u[0],
        v = u[1];
      if (m && v) {
        var A = m.split(`
`),
          j = v.split(`
`);
        for (
          c = l = 0;
          l < A.length && !A[l].includes("DetermineComponentFrameRoot");

        )
          l++;
        for (; c < j.length && !j[c].includes("DetermineComponentFrameRoot"); )
          c++;
        if (l === A.length || c === j.length)
          for (
            l = A.length - 1, c = j.length - 1;
            1 <= l && 0 <= c && A[l] !== j[c];

          )
            c--;
        for (; 1 <= l && 0 <= c; l--, c--)
          if (A[l] !== j[c]) {
            if (l !== 1 || c !== 1)
              do
                if ((l--, c--, 0 > c || A[l] !== j[c])) {
                  var Z =
                    `
` + A[l].replace(" at new ", " at ");
                  return (
                    e.displayName &&
                      Z.includes("<anonymous>") &&
                      (Z = Z.replace("<anonymous>", e.displayName)),
                    Z
                  );
                }
              while (1 <= l && 0 <= c);
            break;
          }
      }
    } finally {
      (It = !1), (Error.prepareStackTrace = n);
    }
    return (n = e ? e.displayName || e.name : "") ? Pe(n) : "";
  }
  function Y(e, t) {
    switch (e.tag) {
      case 26:
      case 27:
      case 5:
        return Pe(e.type);
      case 16:
        return Pe("Lazy");
      case 13:
        return e.child !== t && t !== null
          ? Pe("Suspense Fallback")
          : Pe("Suspense");
      case 19:
        return Pe("SuspenseList");
      case 0:
      case 15:
        return ln(e.type, !1);
      case 11:
        return ln(e.type.render, !1);
      case 1:
        return ln(e.type, !0);
      case 31:
        return Pe("Activity");
      default:
        return "";
    }
  }
  function dn(e) {
    try {
      var t = "",
        n = null;
      do (t += Y(e, n)), (n = e), (e = e.return);
      while (e);
      return t;
    } catch (l) {
      return (
        `
Error generating stack: ` +
        l.message +
        `
` +
        l.stack
      );
    }
  }
  var Kn = Object.prototype.hasOwnProperty,
    pa = f.unstable_scheduleCallback,
    ct = f.unstable_cancelCallback,
    Ha = f.unstable_shouldYield,
    Xa = f.unstable_requestPaint,
    Rt = f.unstable_now,
    Yt = f.unstable_getCurrentPriorityLevel,
    Ba = f.unstable_ImmediatePriority,
    yt = f.unstable_UserBlockingPriority,
    hn = f.unstable_NormalPriority,
    Rn = f.unstable_LowPriority,
    ma = f.unstable_IdlePriority,
    zi = f.log,
    wt = f.unstable_setDisableYieldValue,
    Qa = null,
    xt = null;
  function Sn(e) {
    if (
      (typeof zi == "function" && wt(e),
      xt && typeof xt.setStrictMode == "function")
    )
      try {
        xt.setStrictMode(Qa, e);
      } catch {}
  }
  var qt = Math.clz32 ? Math.clz32 : Ne,
    Za = Math.log,
    cl = Math.LN2;
  function Ne(e) {
    return (e >>>= 0), e === 0 ? 32 : (31 - ((Za(e) / cl) | 0)) | 0;
  }
  var ga = 256,
    pn = 262144,
    mn = 4194304;
  function Jt(e) {
    var t = e & 42;
    if (t !== 0) return t;
    switch (e & -e) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
        return 64;
      case 128:
        return 128;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
        return e & 261888;
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return e & 3932160;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return e & 62914560;
      case 67108864:
        return 67108864;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 0;
      default:
        return e;
    }
  }
  function ya(e, t, n) {
    var l = e.pendingLanes;
    if (l === 0) return 0;
    var c = 0,
      u = e.suspendedLanes,
      m = e.pingedLanes;
    e = e.warmLanes;
    var v = l & 134217727;
    return (
      v !== 0
        ? ((l = v & ~u),
          l !== 0
            ? (c = Jt(l))
            : ((m &= v),
              m !== 0
                ? (c = Jt(m))
                : n || ((n = v & ~e), n !== 0 && (c = Jt(n)))))
        : ((v = l & ~u),
          v !== 0
            ? (c = Jt(v))
            : m !== 0
            ? (c = Jt(m))
            : n || ((n = l & ~e), n !== 0 && (c = Jt(n)))),
      c === 0
        ? 0
        : t !== 0 &&
          t !== c &&
          (t & u) === 0 &&
          ((u = c & -c),
          (n = t & -t),
          u >= n || (u === 32 && (n & 4194048) !== 0))
        ? t
        : c
    );
  }
  function va(e, t) {
    return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0;
  }
  function Ya(e, t) {
    switch (e) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return t + 250;
      case 16:
      case 32:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return -1;
      case 67108864:
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function Bl() {
    var e = mn;
    return (mn <<= 1), (mn & 62914560) === 0 && (mn = 4194304), e;
  }
  function Se(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t;
  }
  function he(e, t) {
    (e.pendingLanes |= t),
      t !== 268435456 &&
        ((e.suspendedLanes = 0), (e.pingedLanes = 0), (e.warmLanes = 0));
  }
  function Ke(e, t, n, l, c, u) {
    var m = e.pendingLanes;
    (e.pendingLanes = n),
      (e.suspendedLanes = 0),
      (e.pingedLanes = 0),
      (e.warmLanes = 0),
      (e.expiredLanes &= n),
      (e.entangledLanes &= n),
      (e.errorRecoveryDisabledLanes &= n),
      (e.shellSuspendCounter = 0);
    var v = e.entanglements,
      A = e.expirationTimes,
      j = e.hiddenUpdates;
    for (n = m & ~n; 0 < n; ) {
      var Z = 31 - qt(n),
        $ = 1 << Z;
      (v[Z] = 0), (A[Z] = -1);
      var k = j[Z];
      if (k !== null)
        for (j[Z] = null, Z = 0; Z < k.length; Z++) {
          var B = k[Z];
          B !== null && (B.lane &= -536870913);
        }
      n &= ~$;
    }
    l !== 0 && ne(e, l, 0),
      u !== 0 && c === 0 && e.tag !== 0 && (e.suspendedLanes |= u & ~(m & ~t));
  }
  function ne(e, t, n) {
    (e.pendingLanes |= t), (e.suspendedLanes &= ~t);
    var l = 31 - qt(t);
    (e.entangledLanes |= t),
      (e.entanglements[l] = e.entanglements[l] | 1073741824 | (n & 261930));
  }
  function Te(e, t) {
    var n = (e.entangledLanes |= t);
    for (e = e.entanglements; n; ) {
      var l = 31 - qt(n),
        c = 1 << l;
      (c & t) | (e[l] & t) && (e[l] |= t), (n &= ~c);
    }
  }
  function pe(e, t) {
    var n = t & -t;
    return (
      (n = (n & 42) !== 0 ? 1 : xe(n)),
      (n & (e.suspendedLanes | t)) !== 0 ? 0 : n
    );
  }
  function xe(e) {
    switch (e) {
      case 2:
        e = 1;
        break;
      case 8:
        e = 4;
        break;
      case 32:
        e = 16;
        break;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        e = 128;
        break;
      case 268435456:
        e = 134217728;
        break;
      default:
        e = 0;
    }
    return e;
  }
  function Mt(e) {
    return (
      (e &= -e),
      2 < e ? (8 < e ? ((e & 134217727) !== 0 ? 32 : 268435456) : 8) : 2
    );
  }
  function je() {
    var e = G.p;
    return e !== 0 ? e : ((e = window.event), e === void 0 ? 32 : $g(e.type));
  }
  function vt(e, t) {
    var n = G.p;
    try {
      return (G.p = e), t();
    } finally {
      G.p = n;
    }
  }
  var ft = Math.random().toString(36).slice(2),
    Me = "__reactFiber$" + ft,
    Oe = "__reactProps$" + ft,
    Ze = "__reactContainer$" + ft,
    Tn = "__reactEvents$" + ft,
    dt = "__reactListeners$" + ft,
    An = "__reactHandles$" + ft,
    Jn = "__reactResources$" + ft,
    St = "__reactMarker$" + ft;
  function jt(e) {
    delete e[Me], delete e[Oe], delete e[Tn], delete e[dt], delete e[An];
  }
  function Tt(e) {
    var t = e[Me];
    if (t) return t;
    for (var n = e.parentNode; n; ) {
      if ((t = n[Ze] || n[Me])) {
        if (
          ((n = t.alternate),
          t.child !== null || (n !== null && n.child !== null))
        )
          for (e = kg(e); e !== null; ) {
            if ((n = e[Me])) return n;
            e = kg(e);
          }
        return t;
      }
      (e = n), (n = e.parentNode);
    }
    return null;
  }
  function jn(e) {
    if ((e = e[Me] || e[Ze])) {
      var t = e.tag;
      if (
        t === 5 ||
        t === 6 ||
        t === 13 ||
        t === 31 ||
        t === 26 ||
        t === 27 ||
        t === 3
      )
        return e;
    }
    return null;
  }
  function Ka(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e.stateNode;
    throw Error(i(33));
  }
  function At(e) {
    var t = e[Jn];
    return (
      t ||
        (t = e[Jn] =
          { hoistableStyles: new Map(), hoistableScripts: new Map() }),
      t
    );
  }
  function ke(e) {
    e[St] = !0;
  }
  var Fn = new Set(),
    cr = {};
  function Ja(e, t) {
    _a(e, t), _a(e + "Capture", t);
  }
  function _a(e, t) {
    for (cr[e] = t, e = 0; e < t.length; e++) Fn.add(t[e]);
  }
  var ba = RegExp(
      "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
    ),
    Yl = {},
    Ci = {};
  function Fa(e) {
    return Kn.call(Ci, e)
      ? !0
      : Kn.call(Yl, e)
      ? !1
      : ba.test(e)
      ? (Ci[e] = !0)
      : ((Yl[e] = !0), !1);
  }
  function Bc(e, t, n) {
    if (Fa(t))
      if (n === null) e.removeAttribute(t);
      else {
        switch (typeof n) {
          case "undefined":
          case "function":
          case "symbol":
            e.removeAttribute(t);
            return;
          case "boolean":
            var l = t.toLowerCase().slice(0, 5);
            if (l !== "data-" && l !== "aria-") {
              e.removeAttribute(t);
              return;
            }
        }
        e.setAttribute(t, "" + n);
      }
  }
  function Yc(e, t, n) {
    if (n === null) e.removeAttribute(t);
    else {
      switch (typeof n) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          e.removeAttribute(t);
          return;
      }
      e.setAttribute(t, "" + n);
    }
  }
  function ul(e, t, n, l) {
    if (l === null) e.removeAttribute(n);
    else {
      switch (typeof l) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          e.removeAttribute(n);
          return;
      }
      e.setAttributeNS(t, n, "" + l);
    }
  }
  function xa(e) {
    switch (typeof e) {
      case "bigint":
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return e;
      case "object":
        return e;
      default:
        return "";
    }
  }
  function _p(e) {
    var t = e.type;
    return (
      (e = e.nodeName) &&
      e.toLowerCase() === "input" &&
      (t === "checkbox" || t === "radio")
    );
  }
  function Qv(e, t, n) {
    var l = Object.getOwnPropertyDescriptor(e.constructor.prototype, t);
    if (
      !e.hasOwnProperty(t) &&
      typeof l < "u" &&
      typeof l.get == "function" &&
      typeof l.set == "function"
    ) {
      var c = l.get,
        u = l.set;
      return (
        Object.defineProperty(e, t, {
          configurable: !0,
          get: function () {
            return c.call(this);
          },
          set: function (m) {
            (n = "" + m), u.call(this, m);
          },
        }),
        Object.defineProperty(e, t, { enumerable: l.enumerable }),
        {
          getValue: function () {
            return n;
          },
          setValue: function (m) {
            n = "" + m;
          },
          stopTracking: function () {
            (e._valueTracker = null), delete e[t];
          },
        }
      );
    }
  }
  function Yo(e) {
    if (!e._valueTracker) {
      var t = _p(e) ? "checked" : "value";
      e._valueTracker = Qv(e, t, "" + e[t]);
    }
  }
  function bp(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(),
      l = "";
    return (
      e && (l = _p(e) ? (e.checked ? "true" : "false") : e.value),
      (e = l),
      e !== n ? (t.setValue(e), !0) : !1
    );
  }
  function qc(e) {
    if (
      ((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u")
    )
      return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  var Zv = /[\n"\\]/g;
  function Sa(e) {
    return e.replace(Zv, function (t) {
      return "\\" + t.charCodeAt(0).toString(16) + " ";
    });
  }
  function qo(e, t, n, l, c, u, m, v) {
    (e.name = ""),
      m != null &&
      typeof m != "function" &&
      typeof m != "symbol" &&
      typeof m != "boolean"
        ? (e.type = m)
        : e.removeAttribute("type"),
      t != null
        ? m === "number"
          ? ((t === 0 && e.value === "") || e.value != t) &&
            (e.value = "" + xa(t))
          : e.value !== "" + xa(t) && (e.value = "" + xa(t))
        : (m !== "submit" && m !== "reset") || e.removeAttribute("value"),
      t != null
        ? Lo(e, m, xa(t))
        : n != null
        ? Lo(e, m, xa(n))
        : l != null && e.removeAttribute("value"),
      c == null && u != null && (e.defaultChecked = !!u),
      c != null &&
        (e.checked = c && typeof c != "function" && typeof c != "symbol"),
      v != null &&
      typeof v != "function" &&
      typeof v != "symbol" &&
      typeof v != "boolean"
        ? (e.name = "" + xa(v))
        : e.removeAttribute("name");
  }
  function xp(e, t, n, l, c, u, m, v) {
    if (
      (u != null &&
        typeof u != "function" &&
        typeof u != "symbol" &&
        typeof u != "boolean" &&
        (e.type = u),
      t != null || n != null)
    ) {
      if (!((u !== "submit" && u !== "reset") || t != null)) {
        Yo(e);
        return;
      }
      (n = n != null ? "" + xa(n) : ""),
        (t = t != null ? "" + xa(t) : n),
        v || t === e.value || (e.value = t),
        (e.defaultValue = t);
    }
    (l = l ?? c),
      (l = typeof l != "function" && typeof l != "symbol" && !!l),
      (e.checked = v ? e.checked : !!l),
      (e.defaultChecked = !!l),
      m != null &&
        typeof m != "function" &&
        typeof m != "symbol" &&
        typeof m != "boolean" &&
        (e.name = m),
      Yo(e);
  }
  function Lo(e, t, n) {
    (t === "number" && qc(e.ownerDocument) === e) ||
      e.defaultValue === "" + n ||
      (e.defaultValue = "" + n);
  }
  function ur(e, t, n, l) {
    if (((e = e.options), t)) {
      t = {};
      for (var c = 0; c < n.length; c++) t["$" + n[c]] = !0;
      for (n = 0; n < e.length; n++)
        (c = t.hasOwnProperty("$" + e[n].value)),
          e[n].selected !== c && (e[n].selected = c),
          c && l && (e[n].defaultSelected = !0);
    } else {
      for (n = "" + xa(n), t = null, c = 0; c < e.length; c++) {
        if (e[c].value === n) {
          (e[c].selected = !0), l && (e[c].defaultSelected = !0);
          return;
        }
        t !== null || e[c].disabled || (t = e[c]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function Sp(e, t, n) {
    if (
      t != null &&
      ((t = "" + xa(t)), t !== e.value && (e.value = t), n == null)
    ) {
      e.defaultValue !== t && (e.defaultValue = t);
      return;
    }
    e.defaultValue = n != null ? "" + xa(n) : "";
  }
  function Tp(e, t, n, l) {
    if (t == null) {
      if (l != null) {
        if (n != null) throw Error(i(92));
        if (ye(l)) {
          if (1 < l.length) throw Error(i(93));
          l = l[0];
        }
        n = l;
      }
      n == null && (n = ""), (t = n);
    }
    (n = xa(t)),
      (e.defaultValue = n),
      (l = e.textContent),
      l === n && l !== "" && l !== null && (e.value = l),
      Yo(e);
  }
  function or(e, t) {
    if (t) {
      var n = e.firstChild;
      if (n && n === e.lastChild && n.nodeType === 3) {
        n.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var Kv = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function Ap(e, t, n) {
    var l = t.indexOf("--") === 0;
    n == null || typeof n == "boolean" || n === ""
      ? l
        ? e.setProperty(t, "")
        : t === "float"
        ? (e.cssFloat = "")
        : (e[t] = "")
      : l
      ? e.setProperty(t, n)
      : typeof n != "number" || n === 0 || Kv.has(t)
      ? t === "float"
        ? (e.cssFloat = n)
        : (e[t] = ("" + n).trim())
      : (e[t] = n + "px");
  }
  function zp(e, t, n) {
    if (t != null && typeof t != "object") throw Error(i(62));
    if (((e = e.style), n != null)) {
      for (var l in n)
        !n.hasOwnProperty(l) ||
          (t != null && t.hasOwnProperty(l)) ||
          (l.indexOf("--") === 0
            ? e.setProperty(l, "")
            : l === "float"
            ? (e.cssFloat = "")
            : (e[l] = ""));
      for (var c in t)
        (l = t[c]), t.hasOwnProperty(c) && n[c] !== l && Ap(e, c, l);
    } else for (var u in t) t.hasOwnProperty(u) && Ap(e, u, t[u]);
  }
  function Go(e) {
    if (e.indexOf("-") === -1) return !1;
    switch (e) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var Jv = new Map([
      ["acceptCharset", "accept-charset"],
      ["htmlFor", "for"],
      ["httpEquiv", "http-equiv"],
      ["crossOrigin", "crossorigin"],
      ["accentHeight", "accent-height"],
      ["alignmentBaseline", "alignment-baseline"],
      ["arabicForm", "arabic-form"],
      ["baselineShift", "baseline-shift"],
      ["capHeight", "cap-height"],
      ["clipPath", "clip-path"],
      ["clipRule", "clip-rule"],
      ["colorInterpolation", "color-interpolation"],
      ["colorInterpolationFilters", "color-interpolation-filters"],
      ["colorProfile", "color-profile"],
      ["colorRendering", "color-rendering"],
      ["dominantBaseline", "dominant-baseline"],
      ["enableBackground", "enable-background"],
      ["fillOpacity", "fill-opacity"],
      ["fillRule", "fill-rule"],
      ["floodColor", "flood-color"],
      ["floodOpacity", "flood-opacity"],
      ["fontFamily", "font-family"],
      ["fontSize", "font-size"],
      ["fontSizeAdjust", "font-size-adjust"],
      ["fontStretch", "font-stretch"],
      ["fontStyle", "font-style"],
      ["fontVariant", "font-variant"],
      ["fontWeight", "font-weight"],
      ["glyphName", "glyph-name"],
      ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
      ["glyphOrientationVertical", "glyph-orientation-vertical"],
      ["horizAdvX", "horiz-adv-x"],
      ["horizOriginX", "horiz-origin-x"],
      ["imageRendering", "image-rendering"],
      ["letterSpacing", "letter-spacing"],
      ["lightingColor", "lighting-color"],
      ["markerEnd", "marker-end"],
      ["markerMid", "marker-mid"],
      ["markerStart", "marker-start"],
      ["overlinePosition", "overline-position"],
      ["overlineThickness", "overline-thickness"],
      ["paintOrder", "paint-order"],
      ["panose-1", "panose-1"],
      ["pointerEvents", "pointer-events"],
      ["renderingIntent", "rendering-intent"],
      ["shapeRendering", "shape-rendering"],
      ["stopColor", "stop-color"],
      ["stopOpacity", "stop-opacity"],
      ["strikethroughPosition", "strikethrough-position"],
      ["strikethroughThickness", "strikethrough-thickness"],
      ["strokeDasharray", "stroke-dasharray"],
      ["strokeDashoffset", "stroke-dashoffset"],
      ["strokeLinecap", "stroke-linecap"],
      ["strokeLinejoin", "stroke-linejoin"],
      ["strokeMiterlimit", "stroke-miterlimit"],
      ["strokeOpacity", "stroke-opacity"],
      ["strokeWidth", "stroke-width"],
      ["textAnchor", "text-anchor"],
      ["textDecoration", "text-decoration"],
      ["textRendering", "text-rendering"],
      ["transformOrigin", "transform-origin"],
      ["underlinePosition", "underline-position"],
      ["underlineThickness", "underline-thickness"],
      ["unicodeBidi", "unicode-bidi"],
      ["unicodeRange", "unicode-range"],
      ["unitsPerEm", "units-per-em"],
      ["vAlphabetic", "v-alphabetic"],
      ["vHanging", "v-hanging"],
      ["vIdeographic", "v-ideographic"],
      ["vMathematical", "v-mathematical"],
      ["vectorEffect", "vector-effect"],
      ["vertAdvY", "vert-adv-y"],
      ["vertOriginX", "vert-origin-x"],
      ["vertOriginY", "vert-origin-y"],
      ["wordSpacing", "word-spacing"],
      ["writingMode", "writing-mode"],
      ["xmlnsXlink", "xmlns:xlink"],
      ["xHeight", "x-height"],
    ]),
    Fv =
      /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function Lc(e) {
    return Fv.test("" + e)
      ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')"
      : e;
  }
  function ol() {}
  var Vo = null;
  function Xo(e) {
    return (
      (e = e.target || e.srcElement || window),
      e.correspondingUseElement && (e = e.correspondingUseElement),
      e.nodeType === 3 ? e.parentNode : e
    );
  }
  var fr = null,
    dr = null;
  function Cp(e) {
    var t = jn(e);
    if (t && (e = t.stateNode)) {
      var n = e[Oe] || null;
      e: switch (((e = t.stateNode), t.type)) {
        case "input":
          if (
            (qo(
              e,
              n.value,
              n.defaultValue,
              n.defaultValue,
              n.checked,
              n.defaultChecked,
              n.type,
              n.name
            ),
            (t = n.name),
            n.type === "radio" && t != null)
          ) {
            for (n = e; n.parentNode; ) n = n.parentNode;
            for (
              n = n.querySelectorAll(
                'input[name="' + Sa("" + t) + '"][type="radio"]'
              ),
                t = 0;
              t < n.length;
              t++
            ) {
              var l = n[t];
              if (l !== e && l.form === e.form) {
                var c = l[Oe] || null;
                if (!c) throw Error(i(90));
                qo(
                  l,
                  c.value,
                  c.defaultValue,
                  c.defaultValue,
                  c.checked,
                  c.defaultChecked,
                  c.type,
                  c.name
                );
              }
            }
            for (t = 0; t < n.length; t++)
              (l = n[t]), l.form === e.form && bp(l);
          }
          break e;
        case "textarea":
          Sp(e, n.value, n.defaultValue);
          break e;
        case "select":
          (t = n.value), t != null && ur(e, !!n.multiple, t, !1);
      }
    }
  }
  var Qo = !1;
  function Ep(e, t, n) {
    if (Qo) return e(t, n);
    Qo = !0;
    try {
      var l = e(t);
      return l;
    } finally {
      if (
        ((Qo = !1),
        (fr !== null || dr !== null) &&
          (wu(), fr && ((t = fr), (e = dr), (dr = fr = null), Cp(t), e)))
      )
        for (t = 0; t < e.length; t++) Cp(e[t]);
    }
  }
  function ms(e, t) {
    var n = e.stateNode;
    if (n === null) return null;
    var l = n[Oe] || null;
    if (l === null) return null;
    n = l[t];
    e: switch (t) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (l = !l.disabled) ||
          ((e = e.type),
          (l = !(
            e === "button" ||
            e === "input" ||
            e === "select" ||
            e === "textarea"
          ))),
          (e = !l);
        break e;
      default:
        e = !1;
    }
    if (e) return null;
    if (n && typeof n != "function") throw Error(i(231, t, typeof n));
    return n;
  }
  var fl = !(
      typeof window > "u" ||
      typeof window.document > "u" ||
      typeof window.document.createElement > "u"
    ),
    Zo = !1;
  if (fl)
    try {
      var gs = {};
      Object.defineProperty(gs, "passive", {
        get: function () {
          Zo = !0;
        },
      }),
        window.addEventListener("test", gs, gs),
        window.removeEventListener("test", gs, gs);
    } catch {
      Zo = !1;
    }
  var ql = null,
    Ko = null,
    Gc = null;
  function wp() {
    if (Gc) return Gc;
    var e,
      t = Ko,
      n = t.length,
      l,
      c = "value" in ql ? ql.value : ql.textContent,
      u = c.length;
    for (e = 0; e < n && t[e] === c[e]; e++);
    var m = n - e;
    for (l = 1; l <= m && t[n - l] === c[u - l]; l++);
    return (Gc = c.slice(e, 1 < l ? 1 - l : void 0));
  }
  function Vc(e) {
    var t = e.keyCode;
    return (
      "charCode" in e
        ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
        : (e = t),
      e === 10 && (e = 13),
      32 <= e || e === 13 ? e : 0
    );
  }
  function Xc() {
    return !0;
  }
  function Mp() {
    return !1;
  }
  function kn(e) {
    function t(n, l, c, u, m) {
      (this._reactName = n),
        (this._targetInst = c),
        (this.type = l),
        (this.nativeEvent = u),
        (this.target = m),
        (this.currentTarget = null);
      for (var v in e)
        e.hasOwnProperty(v) && ((n = e[v]), (this[v] = n ? n(u) : u[v]));
      return (
        (this.isDefaultPrevented = (
          u.defaultPrevented != null ? u.defaultPrevented : u.returnValue === !1
        )
          ? Xc
          : Mp),
        (this.isPropagationStopped = Mp),
        this
      );
    }
    return (
      _(t.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var n = this.nativeEvent;
          n &&
            (n.preventDefault
              ? n.preventDefault()
              : typeof n.returnValue != "unknown" && (n.returnValue = !1),
            (this.isDefaultPrevented = Xc));
        },
        stopPropagation: function () {
          var n = this.nativeEvent;
          n &&
            (n.stopPropagation
              ? n.stopPropagation()
              : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
            (this.isPropagationStopped = Xc));
        },
        persist: function () {},
        isPersistent: Xc,
      }),
      t
    );
  }
  var Ei = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    Qc = kn(Ei),
    ys = _({}, Ei, { view: 0, detail: 0 }),
    Wv = kn(ys),
    Jo,
    Fo,
    vs,
    Zc = _({}, ys, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: $o,
      button: 0,
      buttons: 0,
      relatedTarget: function (e) {
        return e.relatedTarget === void 0
          ? e.fromElement === e.srcElement
            ? e.toElement
            : e.fromElement
          : e.relatedTarget;
      },
      movementX: function (e) {
        return "movementX" in e
          ? e.movementX
          : (e !== vs &&
              (vs && e.type === "mousemove"
                ? ((Jo = e.screenX - vs.screenX), (Fo = e.screenY - vs.screenY))
                : (Fo = Jo = 0),
              (vs = e)),
            Jo);
      },
      movementY: function (e) {
        return "movementY" in e ? e.movementY : Fo;
      },
    }),
    Np = kn(Zc),
    $v = _({}, Zc, { dataTransfer: 0 }),
    Pv = kn($v),
    Iv = _({}, ys, { relatedTarget: 0 }),
    Wo = kn(Iv),
    e_ = _({}, Ei, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    t_ = kn(e_),
    n_ = _({}, Ei, {
      clipboardData: function (e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      },
    }),
    a_ = kn(n_),
    l_ = _({}, Ei, { data: 0 }),
    Op = kn(l_),
    i_ = {
      Esc: "Escape",
      Spacebar: " ",
      Left: "ArrowLeft",
      Up: "ArrowUp",
      Right: "ArrowRight",
      Down: "ArrowDown",
      Del: "Delete",
      Win: "OS",
      Menu: "ContextMenu",
      Apps: "ContextMenu",
      Scroll: "ScrollLock",
      MozPrintableKey: "Unidentified",
    },
    r_ = {
      8: "Backspace",
      9: "Tab",
      12: "Clear",
      13: "Enter",
      16: "Shift",
      17: "Control",
      18: "Alt",
      19: "Pause",
      20: "CapsLock",
      27: "Escape",
      32: " ",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "ArrowLeft",
      38: "ArrowUp",
      39: "ArrowRight",
      40: "ArrowDown",
      45: "Insert",
      46: "Delete",
      112: "F1",
      113: "F2",
      114: "F3",
      115: "F4",
      116: "F5",
      117: "F6",
      118: "F7",
      119: "F8",
      120: "F9",
      121: "F10",
      122: "F11",
      123: "F12",
      144: "NumLock",
      145: "ScrollLock",
      224: "Meta",
    },
    s_ = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey",
    };
  function c_(e) {
    var t = this.nativeEvent;
    return t.getModifierState
      ? t.getModifierState(e)
      : (e = s_[e])
      ? !!t[e]
      : !1;
  }
  function $o() {
    return c_;
  }
  var u_ = _({}, ys, {
      key: function (e) {
        if (e.key) {
          var t = i_[e.key] || e.key;
          if (t !== "Unidentified") return t;
        }
        return e.type === "keypress"
          ? ((e = Vc(e)), e === 13 ? "Enter" : String.fromCharCode(e))
          : e.type === "keydown" || e.type === "keyup"
          ? r_[e.keyCode] || "Unidentified"
          : "";
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: $o,
      charCode: function (e) {
        return e.type === "keypress" ? Vc(e) : 0;
      },
      keyCode: function (e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function (e) {
        return e.type === "keypress"
          ? Vc(e)
          : e.type === "keydown" || e.type === "keyup"
          ? e.keyCode
          : 0;
      },
    }),
    o_ = kn(u_),
    f_ = _({}, Zc, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0,
    }),
    Dp = kn(f_),
    d_ = _({}, ys, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: $o,
    }),
    h_ = kn(d_),
    p_ = _({}, Ei, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    m_ = kn(p_),
    g_ = _({}, Zc, {
      deltaX: function (e) {
        return "deltaX" in e
          ? e.deltaX
          : "wheelDeltaX" in e
          ? -e.wheelDeltaX
          : 0;
      },
      deltaY: function (e) {
        return "deltaY" in e
          ? e.deltaY
          : "wheelDeltaY" in e
          ? -e.wheelDeltaY
          : "wheelDelta" in e
          ? -e.wheelDelta
          : 0;
      },
      deltaZ: 0,
      deltaMode: 0,
    }),
    y_ = kn(g_),
    v_ = _({}, Ei, { newState: 0, oldState: 0 }),
    __ = kn(v_),
    b_ = [9, 13, 27, 32],
    Po = fl && "CompositionEvent" in window,
    _s = null;
  fl && "documentMode" in document && (_s = document.documentMode);
  var x_ = fl && "TextEvent" in window && !_s,
    Rp = fl && (!Po || (_s && 8 < _s && 11 >= _s)),
    jp = " ",
    kp = !1;
  function Up(e, t) {
    switch (e) {
      case "keyup":
        return b_.indexOf(t.keyCode) !== -1;
      case "keydown":
        return t.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function Hp(e) {
    return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
  }
  var hr = !1;
  function S_(e, t) {
    switch (e) {
      case "compositionend":
        return Hp(t);
      case "keypress":
        return t.which !== 32 ? null : ((kp = !0), jp);
      case "textInput":
        return (e = t.data), e === jp && kp ? null : e;
      default:
        return null;
    }
  }
  function T_(e, t) {
    if (hr)
      return e === "compositionend" || (!Po && Up(e, t))
        ? ((e = wp()), (Gc = Ko = ql = null), (hr = !1), e)
        : null;
    switch (e) {
      case "paste":
        return null;
      case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
          if (t.char && 1 < t.char.length) return t.char;
          if (t.which) return String.fromCharCode(t.which);
        }
        return null;
      case "compositionend":
        return Rp && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var A_ = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0,
  };
  function Bp(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!A_[e.type] : t === "textarea";
  }
  function Yp(e, t, n, l) {
    fr ? (dr ? dr.push(l) : (dr = [l])) : (fr = l),
      (t = ku(t, "onChange")),
      0 < t.length &&
        ((n = new Qc("onChange", "change", null, n, l)),
        e.push({ event: n, listeners: t }));
  }
  var bs = null,
    xs = null;
  function z_(e) {
    xg(e, 0);
  }
  function Kc(e) {
    var t = Ka(e);
    if (bp(t)) return e;
  }
  function qp(e, t) {
    if (e === "change") return t;
  }
  var Lp = !1;
  if (fl) {
    var Io;
    if (fl) {
      var ef = "oninput" in document;
      if (!ef) {
        var Gp = document.createElement("div");
        Gp.setAttribute("oninput", "return;"),
          (ef = typeof Gp.oninput == "function");
      }
      Io = ef;
    } else Io = !1;
    Lp = Io && (!document.documentMode || 9 < document.documentMode);
  }
  function Vp() {
    bs && (bs.detachEvent("onpropertychange", Xp), (xs = bs = null));
  }
  function Xp(e) {
    if (e.propertyName === "value" && Kc(xs)) {
      var t = [];
      Yp(t, xs, e, Xo(e)), Ep(z_, t);
    }
  }
  function C_(e, t, n) {
    e === "focusin"
      ? (Vp(), (bs = t), (xs = n), bs.attachEvent("onpropertychange", Xp))
      : e === "focusout" && Vp();
  }
  function E_(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return Kc(xs);
  }
  function w_(e, t) {
    if (e === "click") return Kc(t);
  }
  function M_(e, t) {
    if (e === "input" || e === "change") return Kc(t);
  }
  function N_(e, t) {
    return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
  }
  var Wn = typeof Object.is == "function" ? Object.is : N_;
  function Ss(e, t) {
    if (Wn(e, t)) return !0;
    if (
      typeof e != "object" ||
      e === null ||
      typeof t != "object" ||
      t === null
    )
      return !1;
    var n = Object.keys(e),
      l = Object.keys(t);
    if (n.length !== l.length) return !1;
    for (l = 0; l < n.length; l++) {
      var c = n[l];
      if (!Kn.call(t, c) || !Wn(e[c], t[c])) return !1;
    }
    return !0;
  }
  function Qp(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function Zp(e, t) {
    var n = Qp(e);
    e = 0;
    for (var l; n; ) {
      if (n.nodeType === 3) {
        if (((l = e + n.textContent.length), e <= t && l >= t))
          return { node: n, offset: t - e };
        e = l;
      }
      e: {
        for (; n; ) {
          if (n.nextSibling) {
            n = n.nextSibling;
            break e;
          }
          n = n.parentNode;
        }
        n = void 0;
      }
      n = Qp(n);
    }
  }
  function Kp(e, t) {
    return e && t
      ? e === t
        ? !0
        : e && e.nodeType === 3
        ? !1
        : t && t.nodeType === 3
        ? Kp(e, t.parentNode)
        : "contains" in e
        ? e.contains(t)
        : e.compareDocumentPosition
        ? !!(e.compareDocumentPosition(t) & 16)
        : !1
      : !1;
  }
  function Jp(e) {
    e =
      e != null &&
      e.ownerDocument != null &&
      e.ownerDocument.defaultView != null
        ? e.ownerDocument.defaultView
        : window;
    for (var t = qc(e.document); t instanceof e.HTMLIFrameElement; ) {
      try {
        var n = typeof t.contentWindow.location.href == "string";
      } catch {
        n = !1;
      }
      if (n) e = t.contentWindow;
      else break;
      t = qc(e.document);
    }
    return t;
  }
  function tf(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return (
      t &&
      ((t === "input" &&
        (e.type === "text" ||
          e.type === "search" ||
          e.type === "tel" ||
          e.type === "url" ||
          e.type === "password")) ||
        t === "textarea" ||
        e.contentEditable === "true")
    );
  }
  var O_ = fl && "documentMode" in document && 11 >= document.documentMode,
    pr = null,
    nf = null,
    Ts = null,
    af = !1;
  function Fp(e, t, n) {
    var l =
      n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    af ||
      pr == null ||
      pr !== qc(l) ||
      ((l = pr),
      "selectionStart" in l && tf(l)
        ? (l = { start: l.selectionStart, end: l.selectionEnd })
        : ((l = (
            (l.ownerDocument && l.ownerDocument.defaultView) ||
            window
          ).getSelection()),
          (l = {
            anchorNode: l.anchorNode,
            anchorOffset: l.anchorOffset,
            focusNode: l.focusNode,
            focusOffset: l.focusOffset,
          })),
      (Ts && Ss(Ts, l)) ||
        ((Ts = l),
        (l = ku(nf, "onSelect")),
        0 < l.length &&
          ((t = new Qc("onSelect", "select", null, t, n)),
          e.push({ event: t, listeners: l }),
          (t.target = pr))));
  }
  function wi(e, t) {
    var n = {};
    return (
      (n[e.toLowerCase()] = t.toLowerCase()),
      (n["Webkit" + e] = "webkit" + t),
      (n["Moz" + e] = "moz" + t),
      n
    );
  }
  var mr = {
      animationend: wi("Animation", "AnimationEnd"),
      animationiteration: wi("Animation", "AnimationIteration"),
      animationstart: wi("Animation", "AnimationStart"),
      transitionrun: wi("Transition", "TransitionRun"),
      transitionstart: wi("Transition", "TransitionStart"),
      transitioncancel: wi("Transition", "TransitionCancel"),
      transitionend: wi("Transition", "TransitionEnd"),
    },
    lf = {},
    Wp = {};
  fl &&
    ((Wp = document.createElement("div").style),
    "AnimationEvent" in window ||
      (delete mr.animationend.animation,
      delete mr.animationiteration.animation,
      delete mr.animationstart.animation),
    "TransitionEvent" in window || delete mr.transitionend.transition);
  function Mi(e) {
    if (lf[e]) return lf[e];
    if (!mr[e]) return e;
    var t = mr[e],
      n;
    for (n in t) if (t.hasOwnProperty(n) && n in Wp) return (lf[e] = t[n]);
    return e;
  }
  var $p = Mi("animationend"),
    Pp = Mi("animationiteration"),
    Ip = Mi("animationstart"),
    D_ = Mi("transitionrun"),
    R_ = Mi("transitionstart"),
    j_ = Mi("transitioncancel"),
    e0 = Mi("transitionend"),
    t0 = new Map(),
    rf =
      "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
        " "
      );
  rf.push("scrollEnd");
  function qa(e, t) {
    t0.set(e, t), Ja(t, [e]);
  }
  var Jc =
      typeof reportError == "function"
        ? reportError
        : function (e) {
            if (
              typeof window == "object" &&
              typeof window.ErrorEvent == "function"
            ) {
              var t = new window.ErrorEvent("error", {
                bubbles: !0,
                cancelable: !0,
                message:
                  typeof e == "object" &&
                  e !== null &&
                  typeof e.message == "string"
                    ? String(e.message)
                    : String(e),
                error: e,
              });
              if (!window.dispatchEvent(t)) return;
            } else if (
              typeof process == "object" &&
              typeof process.emit == "function"
            ) {
              process.emit("uncaughtException", e);
              return;
            }
            console.error(e);
          },
    Ta = [],
    gr = 0,
    sf = 0;
  function Fc() {
    for (var e = gr, t = (sf = gr = 0); t < e; ) {
      var n = Ta[t];
      Ta[t++] = null;
      var l = Ta[t];
      Ta[t++] = null;
      var c = Ta[t];
      Ta[t++] = null;
      var u = Ta[t];
      if (((Ta[t++] = null), l !== null && c !== null)) {
        var m = l.pending;
        m === null ? (c.next = c) : ((c.next = m.next), (m.next = c)),
          (l.pending = c);
      }
      u !== 0 && n0(n, c, u);
    }
  }
  function Wc(e, t, n, l) {
    (Ta[gr++] = e),
      (Ta[gr++] = t),
      (Ta[gr++] = n),
      (Ta[gr++] = l),
      (sf |= l),
      (e.lanes |= l),
      (e = e.alternate),
      e !== null && (e.lanes |= l);
  }
  function cf(e, t, n, l) {
    return Wc(e, t, n, l), $c(e);
  }
  function Ni(e, t) {
    return Wc(e, null, null, t), $c(e);
  }
  function n0(e, t, n) {
    e.lanes |= n;
    var l = e.alternate;
    l !== null && (l.lanes |= n);
    for (var c = !1, u = e.return; u !== null; )
      (u.childLanes |= n),
        (l = u.alternate),
        l !== null && (l.childLanes |= n),
        u.tag === 22 &&
          ((e = u.stateNode), e === null || e._visibility & 1 || (c = !0)),
        (e = u),
        (u = u.return);
    return e.tag === 3
      ? ((u = e.stateNode),
        c &&
          t !== null &&
          ((c = 31 - qt(n)),
          (e = u.hiddenUpdates),
          (l = e[c]),
          l === null ? (e[c] = [t]) : l.push(t),
          (t.lane = n | 536870912)),
        u)
      : null;
  }
  function $c(e) {
    if (50 < Qs) throw ((Qs = 0), (yd = null), Error(i(185)));
    for (var t = e.return; t !== null; ) (e = t), (t = e.return);
    return e.tag === 3 ? e.stateNode : null;
  }
  var yr = {};
  function k_(e, t, n, l) {
    (this.tag = e),
      (this.key = n),
      (this.sibling =
        this.child =
        this.return =
        this.stateNode =
        this.type =
        this.elementType =
          null),
      (this.index = 0),
      (this.refCleanup = this.ref = null),
      (this.pendingProps = t),
      (this.dependencies =
        this.memoizedState =
        this.updateQueue =
        this.memoizedProps =
          null),
      (this.mode = l),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null);
  }
  function $n(e, t, n, l) {
    return new k_(e, t, n, l);
  }
  function uf(e) {
    return (e = e.prototype), !(!e || !e.isReactComponent);
  }
  function dl(e, t) {
    var n = e.alternate;
    return (
      n === null
        ? ((n = $n(e.tag, t, e.key, e.mode)),
          (n.elementType = e.elementType),
          (n.type = e.type),
          (n.stateNode = e.stateNode),
          (n.alternate = e),
          (e.alternate = n))
        : ((n.pendingProps = t),
          (n.type = e.type),
          (n.flags = 0),
          (n.subtreeFlags = 0),
          (n.deletions = null)),
      (n.flags = e.flags & 65011712),
      (n.childLanes = e.childLanes),
      (n.lanes = e.lanes),
      (n.child = e.child),
      (n.memoizedProps = e.memoizedProps),
      (n.memoizedState = e.memoizedState),
      (n.updateQueue = e.updateQueue),
      (t = e.dependencies),
      (n.dependencies =
        t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
      (n.sibling = e.sibling),
      (n.index = e.index),
      (n.ref = e.ref),
      (n.refCleanup = e.refCleanup),
      n
    );
  }
  function a0(e, t) {
    e.flags &= 65011714;
    var n = e.alternate;
    return (
      n === null
        ? ((e.childLanes = 0),
          (e.lanes = t),
          (e.child = null),
          (e.subtreeFlags = 0),
          (e.memoizedProps = null),
          (e.memoizedState = null),
          (e.updateQueue = null),
          (e.dependencies = null),
          (e.stateNode = null))
        : ((e.childLanes = n.childLanes),
          (e.lanes = n.lanes),
          (e.child = n.child),
          (e.subtreeFlags = 0),
          (e.deletions = null),
          (e.memoizedProps = n.memoizedProps),
          (e.memoizedState = n.memoizedState),
          (e.updateQueue = n.updateQueue),
          (e.type = n.type),
          (t = n.dependencies),
          (e.dependencies =
            t === null
              ? null
              : { lanes: t.lanes, firstContext: t.firstContext })),
      e
    );
  }
  function Pc(e, t, n, l, c, u) {
    var m = 0;
    if (((l = e), typeof e == "function")) uf(e) && (m = 1);
    else if (typeof e == "string")
      m = qb(e, n, ee.current)
        ? 26
        : e === "html" || e === "head" || e === "body"
        ? 27
        : 5;
    else
      e: switch (e) {
        case J:
          return (e = $n(31, n, t, c)), (e.elementType = J), (e.lanes = u), e;
        case S:
          return Oi(n.children, c, u, t);
        case N:
          (m = 8), (c |= 24);
          break;
        case q:
          return (
            (e = $n(12, n, t, c | 2)), (e.elementType = q), (e.lanes = u), e
          );
        case Q:
          return (e = $n(13, n, t, c)), (e.elementType = Q), (e.lanes = u), e;
        case W:
          return (e = $n(19, n, t, c)), (e.elementType = W), (e.lanes = u), e;
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case K:
                m = 10;
                break e;
              case X:
                m = 9;
                break e;
              case U:
                m = 11;
                break e;
              case R:
                m = 14;
                break e;
              case H:
                (m = 16), (l = null);
                break e;
            }
          (m = 29),
            (n = Error(i(130, e === null ? "null" : typeof e, ""))),
            (l = null);
      }
    return (
      (t = $n(m, n, t, c)), (t.elementType = e), (t.type = l), (t.lanes = u), t
    );
  }
  function Oi(e, t, n, l) {
    return (e = $n(7, e, l, t)), (e.lanes = n), e;
  }
  function of(e, t, n) {
    return (e = $n(6, e, null, t)), (e.lanes = n), e;
  }
  function l0(e) {
    var t = $n(18, null, null, 0);
    return (t.stateNode = e), t;
  }
  function ff(e, t, n) {
    return (
      (t = $n(4, e.children !== null ? e.children : [], e.key, t)),
      (t.lanes = n),
      (t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation,
      }),
      t
    );
  }
  var i0 = new WeakMap();
  function Aa(e, t) {
    if (typeof e == "object" && e !== null) {
      var n = i0.get(e);
      return n !== void 0
        ? n
        : ((t = { value: e, source: t, stack: dn(t) }), i0.set(e, t), t);
    }
    return { value: e, source: t, stack: dn(t) };
  }
  var vr = [],
    _r = 0,
    Ic = null,
    As = 0,
    za = [],
    Ca = 0,
    Ll = null,
    Wa = 1,
    $a = "";
  function hl(e, t) {
    (vr[_r++] = As), (vr[_r++] = Ic), (Ic = e), (As = t);
  }
  function r0(e, t, n) {
    (za[Ca++] = Wa), (za[Ca++] = $a), (za[Ca++] = Ll), (Ll = e);
    var l = Wa;
    e = $a;
    var c = 32 - qt(l) - 1;
    (l &= ~(1 << c)), (n += 1);
    var u = 32 - qt(t) + c;
    if (30 < u) {
      var m = c - (c % 5);
      (u = (l & ((1 << m) - 1)).toString(32)),
        (l >>= m),
        (c -= m),
        (Wa = (1 << (32 - qt(t) + c)) | (n << c) | l),
        ($a = u + e);
    } else (Wa = (1 << u) | (n << c) | l), ($a = e);
  }
  function df(e) {
    e.return !== null && (hl(e, 1), r0(e, 1, 0));
  }
  function hf(e) {
    for (; e === Ic; )
      (Ic = vr[--_r]), (vr[_r] = null), (As = vr[--_r]), (vr[_r] = null);
    for (; e === Ll; )
      (Ll = za[--Ca]),
        (za[Ca] = null),
        ($a = za[--Ca]),
        (za[Ca] = null),
        (Wa = za[--Ca]),
        (za[Ca] = null);
  }
  function s0(e, t) {
    (za[Ca++] = Wa),
      (za[Ca++] = $a),
      (za[Ca++] = Ll),
      (Wa = t.id),
      ($a = t.overflow),
      (Ll = e);
  }
  var rn = null,
    ht = null,
    Ve = !1,
    Gl = null,
    Ea = !1,
    pf = Error(i(519));
  function Vl(e) {
    var t = Error(
      i(
        418,
        1 < arguments.length && arguments[1] !== void 0 && arguments[1]
          ? "text"
          : "HTML",
        ""
      )
    );
    throw (zs(Aa(t, e)), pf);
  }
  function c0(e) {
    var t = e.stateNode,
      n = e.type,
      l = e.memoizedProps;
    switch (((t[Me] = e), (t[Oe] = l), n)) {
      case "dialog":
        Ye("cancel", t), Ye("close", t);
        break;
      case "iframe":
      case "object":
      case "embed":
        Ye("load", t);
        break;
      case "video":
      case "audio":
        for (n = 0; n < Ks.length; n++) Ye(Ks[n], t);
        break;
      case "source":
        Ye("error", t);
        break;
      case "img":
      case "image":
      case "link":
        Ye("error", t), Ye("load", t);
        break;
      case "details":
        Ye("toggle", t);
        break;
      case "input":
        Ye("invalid", t),
          xp(
            t,
            l.value,
            l.defaultValue,
            l.checked,
            l.defaultChecked,
            l.type,
            l.name,
            !0
          );
        break;
      case "select":
        Ye("invalid", t);
        break;
      case "textarea":
        Ye("invalid", t), Tp(t, l.value, l.defaultValue, l.children);
    }
    (n = l.children),
      (typeof n != "string" && typeof n != "number" && typeof n != "bigint") ||
      t.textContent === "" + n ||
      l.suppressHydrationWarning === !0 ||
      zg(t.textContent, n)
        ? (l.popover != null && (Ye("beforetoggle", t), Ye("toggle", t)),
          l.onScroll != null && Ye("scroll", t),
          l.onScrollEnd != null && Ye("scrollend", t),
          l.onClick != null && (t.onclick = ol),
          (t = !0))
        : (t = !1),
      t || Vl(e, !0);
  }
  function u0(e) {
    for (rn = e.return; rn; )
      switch (rn.tag) {
        case 5:
        case 31:
        case 13:
          Ea = !1;
          return;
        case 27:
        case 3:
          Ea = !0;
          return;
        default:
          rn = rn.return;
      }
  }
  function br(e) {
    if (e !== rn) return !1;
    if (!Ve) return u0(e), (Ve = !0), !1;
    var t = e.tag,
      n;
    if (
      ((n = t !== 3 && t !== 27) &&
        ((n = t === 5) &&
          ((n = e.type),
          (n =
            !(n !== "form" && n !== "button") || Dd(e.type, e.memoizedProps))),
        (n = !n)),
      n && ht && Vl(e),
      u0(e),
      t === 13)
    ) {
      if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
        throw Error(i(317));
      ht = jg(e);
    } else if (t === 31) {
      if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
        throw Error(i(317));
      ht = jg(e);
    } else
      t === 27
        ? ((t = ht), ai(e.type) ? ((e = Hd), (Hd = null), (ht = e)) : (ht = t))
        : (ht = rn ? Ma(e.stateNode.nextSibling) : null);
    return !0;
  }
  function Di() {
    (ht = rn = null), (Ve = !1);
  }
  function mf() {
    var e = Gl;
    return (
      e !== null &&
        (Yn === null ? (Yn = e) : Yn.push.apply(Yn, e), (Gl = null)),
      e
    );
  }
  function zs(e) {
    Gl === null ? (Gl = [e]) : Gl.push(e);
  }
  var gf = z(null),
    Ri = null,
    pl = null;
  function Xl(e, t, n) {
    P(gf, t._currentValue), (t._currentValue = n);
  }
  function ml(e) {
    (e._currentValue = gf.current), L(gf);
  }
  function yf(e, t, n) {
    for (; e !== null; ) {
      var l = e.alternate;
      if (
        ((e.childLanes & t) !== t
          ? ((e.childLanes |= t), l !== null && (l.childLanes |= t))
          : l !== null && (l.childLanes & t) !== t && (l.childLanes |= t),
        e === n)
      )
        break;
      e = e.return;
    }
  }
  function vf(e, t, n, l) {
    var c = e.child;
    for (c !== null && (c.return = e); c !== null; ) {
      var u = c.dependencies;
      if (u !== null) {
        var m = c.child;
        u = u.firstContext;
        e: for (; u !== null; ) {
          var v = u;
          u = c;
          for (var A = 0; A < t.length; A++)
            if (v.context === t[A]) {
              (u.lanes |= n),
                (v = u.alternate),
                v !== null && (v.lanes |= n),
                yf(u.return, n, e),
                l || (m = null);
              break e;
            }
          u = v.next;
        }
      } else if (c.tag === 18) {
        if (((m = c.return), m === null)) throw Error(i(341));
        (m.lanes |= n),
          (u = m.alternate),
          u !== null && (u.lanes |= n),
          yf(m, n, e),
          (m = null);
      } else m = c.child;
      if (m !== null) m.return = c;
      else
        for (m = c; m !== null; ) {
          if (m === e) {
            m = null;
            break;
          }
          if (((c = m.sibling), c !== null)) {
            (c.return = m.return), (m = c);
            break;
          }
          m = m.return;
        }
      c = m;
    }
  }
  function xr(e, t, n, l) {
    e = null;
    for (var c = t, u = !1; c !== null; ) {
      if (!u) {
        if ((c.flags & 524288) !== 0) u = !0;
        else if ((c.flags & 262144) !== 0) break;
      }
      if (c.tag === 10) {
        var m = c.alternate;
        if (m === null) throw Error(i(387));
        if (((m = m.memoizedProps), m !== null)) {
          var v = c.type;
          Wn(c.pendingProps.value, m.value) ||
            (e !== null ? e.push(v) : (e = [v]));
        }
      } else if (c === ae.current) {
        if (((m = c.alternate), m === null)) throw Error(i(387));
        m.memoizedState.memoizedState !== c.memoizedState.memoizedState &&
          (e !== null ? e.push(Ps) : (e = [Ps]));
      }
      c = c.return;
    }
    e !== null && vf(t, e, n, l), (t.flags |= 262144);
  }
  function eu(e) {
    for (e = e.firstContext; e !== null; ) {
      if (!Wn(e.context._currentValue, e.memoizedValue)) return !0;
      e = e.next;
    }
    return !1;
  }
  function ji(e) {
    (Ri = e),
      (pl = null),
      (e = e.dependencies),
      e !== null && (e.firstContext = null);
  }
  function sn(e) {
    return o0(Ri, e);
  }
  function tu(e, t) {
    return Ri === null && ji(e), o0(e, t);
  }
  function o0(e, t) {
    var n = t._currentValue;
    if (((t = { context: t, memoizedValue: n, next: null }), pl === null)) {
      if (e === null) throw Error(i(308));
      (pl = t),
        (e.dependencies = { lanes: 0, firstContext: t }),
        (e.flags |= 524288);
    } else pl = pl.next = t;
    return n;
  }
  var U_ =
      typeof AbortController < "u"
        ? AbortController
        : function () {
            var e = [],
              t = (this.signal = {
                aborted: !1,
                addEventListener: function (n, l) {
                  e.push(l);
                },
              });
            this.abort = function () {
              (t.aborted = !0),
                e.forEach(function (n) {
                  return n();
                });
            };
          },
    H_ = f.unstable_scheduleCallback,
    B_ = f.unstable_NormalPriority,
    Lt = {
      $$typeof: K,
      Consumer: null,
      Provider: null,
      _currentValue: null,
      _currentValue2: null,
      _threadCount: 0,
    };
  function _f() {
    return { controller: new U_(), data: new Map(), refCount: 0 };
  }
  function Cs(e) {
    e.refCount--,
      e.refCount === 0 &&
        H_(B_, function () {
          e.controller.abort();
        });
  }
  var Es = null,
    bf = 0,
    Sr = 0,
    Tr = null;
  function Y_(e, t) {
    if (Es === null) {
      var n = (Es = []);
      (bf = 0),
        (Sr = Td()),
        (Tr = {
          status: "pending",
          value: void 0,
          then: function (l) {
            n.push(l);
          },
        });
    }
    return bf++, t.then(f0, f0), t;
  }
  function f0() {
    if (--bf === 0 && Es !== null) {
      Tr !== null && (Tr.status = "fulfilled");
      var e = Es;
      (Es = null), (Sr = 0), (Tr = null);
      for (var t = 0; t < e.length; t++) (0, e[t])();
    }
  }
  function q_(e, t) {
    var n = [],
      l = {
        status: "pending",
        value: null,
        reason: null,
        then: function (c) {
          n.push(c);
        },
      };
    return (
      e.then(
        function () {
          (l.status = "fulfilled"), (l.value = t);
          for (var c = 0; c < n.length; c++) (0, n[c])(t);
        },
        function (c) {
          for (l.status = "rejected", l.reason = c, c = 0; c < n.length; c++)
            (0, n[c])(void 0);
        }
      ),
      l
    );
  }
  var d0 = O.S;
  O.S = function (e, t) {
    (Fm = Rt()),
      typeof t == "object" &&
        t !== null &&
        typeof t.then == "function" &&
        Y_(e, t),
      d0 !== null && d0(e, t);
  };
  var ki = z(null);
  function xf() {
    var e = ki.current;
    return e !== null ? e : it.pooledCache;
  }
  function nu(e, t) {
    t === null ? P(ki, ki.current) : P(ki, t.pool);
  }
  function h0() {
    var e = xf();
    return e === null ? null : { parent: Lt._currentValue, pool: e };
  }
  var Ar = Error(i(460)),
    Sf = Error(i(474)),
    au = Error(i(542)),
    lu = { then: function () {} };
  function p0(e) {
    return (e = e.status), e === "fulfilled" || e === "rejected";
  }
  function m0(e, t, n) {
    switch (
      ((n = e[n]),
      n === void 0 ? e.push(t) : n !== t && (t.then(ol, ol), (t = n)),
      t.status)
    ) {
      case "fulfilled":
        return t.value;
      case "rejected":
        throw ((e = t.reason), y0(e), e);
      default:
        if (typeof t.status == "string") t.then(ol, ol);
        else {
          if (((e = it), e !== null && 100 < e.shellSuspendCounter))
            throw Error(i(482));
          (e = t),
            (e.status = "pending"),
            e.then(
              function (l) {
                if (t.status === "pending") {
                  var c = t;
                  (c.status = "fulfilled"), (c.value = l);
                }
              },
              function (l) {
                if (t.status === "pending") {
                  var c = t;
                  (c.status = "rejected"), (c.reason = l);
                }
              }
            );
        }
        switch (t.status) {
          case "fulfilled":
            return t.value;
          case "rejected":
            throw ((e = t.reason), y0(e), e);
        }
        throw ((Hi = t), Ar);
    }
  }
  function Ui(e) {
    try {
      var t = e._init;
      return t(e._payload);
    } catch (n) {
      throw n !== null && typeof n == "object" && typeof n.then == "function"
        ? ((Hi = n), Ar)
        : n;
    }
  }
  var Hi = null;
  function g0() {
    if (Hi === null) throw Error(i(459));
    var e = Hi;
    return (Hi = null), e;
  }
  function y0(e) {
    if (e === Ar || e === au) throw Error(i(483));
  }
  var zr = null,
    ws = 0;
  function iu(e) {
    var t = ws;
    return (ws += 1), zr === null && (zr = []), m0(zr, e, t);
  }
  function Ms(e, t) {
    (t = t.props.ref), (e.ref = t !== void 0 ? t : null);
  }
  function ru(e, t) {
    throw t.$$typeof === T
      ? Error(i(525))
      : ((e = Object.prototype.toString.call(t)),
        Error(
          i(
            31,
            e === "[object Object]"
              ? "object with keys {" + Object.keys(t).join(", ") + "}"
              : e
          )
        ));
  }
  function v0(e) {
    function t(M, C) {
      if (e) {
        var D = M.deletions;
        D === null ? ((M.deletions = [C]), (M.flags |= 16)) : D.push(C);
      }
    }
    function n(M, C) {
      if (!e) return null;
      for (; C !== null; ) t(M, C), (C = C.sibling);
      return null;
    }
    function l(M) {
      for (var C = new Map(); M !== null; )
        M.key !== null ? C.set(M.key, M) : C.set(M.index, M), (M = M.sibling);
      return C;
    }
    function c(M, C) {
      return (M = dl(M, C)), (M.index = 0), (M.sibling = null), M;
    }
    function u(M, C, D) {
      return (
        (M.index = D),
        e
          ? ((D = M.alternate),
            D !== null
              ? ((D = D.index), D < C ? ((M.flags |= 67108866), C) : D)
              : ((M.flags |= 67108866), C))
          : ((M.flags |= 1048576), C)
      );
    }
    function m(M) {
      return e && M.alternate === null && (M.flags |= 67108866), M;
    }
    function v(M, C, D, F) {
      return C === null || C.tag !== 6
        ? ((C = of(D, M.mode, F)), (C.return = M), C)
        : ((C = c(C, D)), (C.return = M), C);
    }
    function A(M, C, D, F) {
      var me = D.type;
      return me === S
        ? Z(M, C, D.props.children, F, D.key)
        : C !== null &&
          (C.elementType === me ||
            (typeof me == "object" &&
              me !== null &&
              me.$$typeof === H &&
              Ui(me) === C.type))
        ? ((C = c(C, D.props)), Ms(C, D), (C.return = M), C)
        : ((C = Pc(D.type, D.key, D.props, null, M.mode, F)),
          Ms(C, D),
          (C.return = M),
          C);
    }
    function j(M, C, D, F) {
      return C === null ||
        C.tag !== 4 ||
        C.stateNode.containerInfo !== D.containerInfo ||
        C.stateNode.implementation !== D.implementation
        ? ((C = ff(D, M.mode, F)), (C.return = M), C)
        : ((C = c(C, D.children || [])), (C.return = M), C);
    }
    function Z(M, C, D, F, me) {
      return C === null || C.tag !== 7
        ? ((C = Oi(D, M.mode, F, me)), (C.return = M), C)
        : ((C = c(C, D)), (C.return = M), C);
    }
    function $(M, C, D) {
      if (
        (typeof C == "string" && C !== "") ||
        typeof C == "number" ||
        typeof C == "bigint"
      )
        return (C = of("" + C, M.mode, D)), (C.return = M), C;
      if (typeof C == "object" && C !== null) {
        switch (C.$$typeof) {
          case b:
            return (
              (D = Pc(C.type, C.key, C.props, null, M.mode, D)),
              Ms(D, C),
              (D.return = M),
              D
            );
          case E:
            return (C = ff(C, M.mode, D)), (C.return = M), C;
          case H:
            return (C = Ui(C)), $(M, C, D);
        }
        if (ye(C) || te(C))
          return (C = Oi(C, M.mode, D, null)), (C.return = M), C;
        if (typeof C.then == "function") return $(M, iu(C), D);
        if (C.$$typeof === K) return $(M, tu(M, C), D);
        ru(M, C);
      }
      return null;
    }
    function k(M, C, D, F) {
      var me = C !== null ? C.key : null;
      if (
        (typeof D == "string" && D !== "") ||
        typeof D == "number" ||
        typeof D == "bigint"
      )
        return me !== null ? null : v(M, C, "" + D, F);
      if (typeof D == "object" && D !== null) {
        switch (D.$$typeof) {
          case b:
            return D.key === me ? A(M, C, D, F) : null;
          case E:
            return D.key === me ? j(M, C, D, F) : null;
          case H:
            return (D = Ui(D)), k(M, C, D, F);
        }
        if (ye(D) || te(D)) return me !== null ? null : Z(M, C, D, F, null);
        if (typeof D.then == "function") return k(M, C, iu(D), F);
        if (D.$$typeof === K) return k(M, C, tu(M, D), F);
        ru(M, D);
      }
      return null;
    }
    function B(M, C, D, F, me) {
      if (
        (typeof F == "string" && F !== "") ||
        typeof F == "number" ||
        typeof F == "bigint"
      )
        return (M = M.get(D) || null), v(C, M, "" + F, me);
      if (typeof F == "object" && F !== null) {
        switch (F.$$typeof) {
          case b:
            return (
              (M = M.get(F.key === null ? D : F.key) || null), A(C, M, F, me)
            );
          case E:
            return (
              (M = M.get(F.key === null ? D : F.key) || null), j(C, M, F, me)
            );
          case H:
            return (F = Ui(F)), B(M, C, D, F, me);
        }
        if (ye(F) || te(F)) return (M = M.get(D) || null), Z(C, M, F, me, null);
        if (typeof F.then == "function") return B(M, C, D, iu(F), me);
        if (F.$$typeof === K) return B(M, C, D, tu(C, F), me);
        ru(C, F);
      }
      return null;
    }
    function ie(M, C, D, F) {
      for (
        var me = null, Je = null, ue = C, we = (C = 0), Ge = null;
        ue !== null && we < D.length;
        we++
      ) {
        ue.index > we ? ((Ge = ue), (ue = null)) : (Ge = ue.sibling);
        var Fe = k(M, ue, D[we], F);
        if (Fe === null) {
          ue === null && (ue = Ge);
          break;
        }
        e && ue && Fe.alternate === null && t(M, ue),
          (C = u(Fe, C, we)),
          Je === null ? (me = Fe) : (Je.sibling = Fe),
          (Je = Fe),
          (ue = Ge);
      }
      if (we === D.length) return n(M, ue), Ve && hl(M, we), me;
      if (ue === null) {
        for (; we < D.length; we++)
          (ue = $(M, D[we], F)),
            ue !== null &&
              ((C = u(ue, C, we)),
              Je === null ? (me = ue) : (Je.sibling = ue),
              (Je = ue));
        return Ve && hl(M, we), me;
      }
      for (ue = l(ue); we < D.length; we++)
        (Ge = B(ue, M, we, D[we], F)),
          Ge !== null &&
            (e &&
              Ge.alternate !== null &&
              ue.delete(Ge.key === null ? we : Ge.key),
            (C = u(Ge, C, we)),
            Je === null ? (me = Ge) : (Je.sibling = Ge),
            (Je = Ge));
      return (
        e &&
          ue.forEach(function (ci) {
            return t(M, ci);
          }),
        Ve && hl(M, we),
        me
      );
    }
    function _e(M, C, D, F) {
      if (D == null) throw Error(i(151));
      for (
        var me = null,
          Je = null,
          ue = C,
          we = (C = 0),
          Ge = null,
          Fe = D.next();
        ue !== null && !Fe.done;
        we++, Fe = D.next()
      ) {
        ue.index > we ? ((Ge = ue), (ue = null)) : (Ge = ue.sibling);
        var ci = k(M, ue, Fe.value, F);
        if (ci === null) {
          ue === null && (ue = Ge);
          break;
        }
        e && ue && ci.alternate === null && t(M, ue),
          (C = u(ci, C, we)),
          Je === null ? (me = ci) : (Je.sibling = ci),
          (Je = ci),
          (ue = Ge);
      }
      if (Fe.done) return n(M, ue), Ve && hl(M, we), me;
      if (ue === null) {
        for (; !Fe.done; we++, Fe = D.next())
          (Fe = $(M, Fe.value, F)),
            Fe !== null &&
              ((C = u(Fe, C, we)),
              Je === null ? (me = Fe) : (Je.sibling = Fe),
              (Je = Fe));
        return Ve && hl(M, we), me;
      }
      for (ue = l(ue); !Fe.done; we++, Fe = D.next())
        (Fe = B(ue, M, we, Fe.value, F)),
          Fe !== null &&
            (e &&
              Fe.alternate !== null &&
              ue.delete(Fe.key === null ? we : Fe.key),
            (C = u(Fe, C, we)),
            Je === null ? (me = Fe) : (Je.sibling = Fe),
            (Je = Fe));
      return (
        e &&
          ue.forEach(function ($b) {
            return t(M, $b);
          }),
        Ve && hl(M, we),
        me
      );
    }
    function at(M, C, D, F) {
      if (
        (typeof D == "object" &&
          D !== null &&
          D.type === S &&
          D.key === null &&
          (D = D.props.children),
        typeof D == "object" && D !== null)
      ) {
        switch (D.$$typeof) {
          case b:
            e: {
              for (var me = D.key; C !== null; ) {
                if (C.key === me) {
                  if (((me = D.type), me === S)) {
                    if (C.tag === 7) {
                      n(M, C.sibling),
                        (F = c(C, D.props.children)),
                        (F.return = M),
                        (M = F);
                      break e;
                    }
                  } else if (
                    C.elementType === me ||
                    (typeof me == "object" &&
                      me !== null &&
                      me.$$typeof === H &&
                      Ui(me) === C.type)
                  ) {
                    n(M, C.sibling),
                      (F = c(C, D.props)),
                      Ms(F, D),
                      (F.return = M),
                      (M = F);
                    break e;
                  }
                  n(M, C);
                  break;
                } else t(M, C);
                C = C.sibling;
              }
              D.type === S
                ? ((F = Oi(D.props.children, M.mode, F, D.key)),
                  (F.return = M),
                  (M = F))
                : ((F = Pc(D.type, D.key, D.props, null, M.mode, F)),
                  Ms(F, D),
                  (F.return = M),
                  (M = F));
            }
            return m(M);
          case E:
            e: {
              for (me = D.key; C !== null; ) {
                if (C.key === me)
                  if (
                    C.tag === 4 &&
                    C.stateNode.containerInfo === D.containerInfo &&
                    C.stateNode.implementation === D.implementation
                  ) {
                    n(M, C.sibling),
                      (F = c(C, D.children || [])),
                      (F.return = M),
                      (M = F);
                    break e;
                  } else {
                    n(M, C);
                    break;
                  }
                else t(M, C);
                C = C.sibling;
              }
              (F = ff(D, M.mode, F)), (F.return = M), (M = F);
            }
            return m(M);
          case H:
            return (D = Ui(D)), at(M, C, D, F);
        }
        if (ye(D)) return ie(M, C, D, F);
        if (te(D)) {
          if (((me = te(D)), typeof me != "function")) throw Error(i(150));
          return (D = me.call(D)), _e(M, C, D, F);
        }
        if (typeof D.then == "function") return at(M, C, iu(D), F);
        if (D.$$typeof === K) return at(M, C, tu(M, D), F);
        ru(M, D);
      }
      return (typeof D == "string" && D !== "") ||
        typeof D == "number" ||
        typeof D == "bigint"
        ? ((D = "" + D),
          C !== null && C.tag === 6
            ? (n(M, C.sibling), (F = c(C, D)), (F.return = M), (M = F))
            : (n(M, C), (F = of(D, M.mode, F)), (F.return = M), (M = F)),
          m(M))
        : n(M, C);
    }
    return function (M, C, D, F) {
      try {
        ws = 0;
        var me = at(M, C, D, F);
        return (zr = null), me;
      } catch (ue) {
        if (ue === Ar || ue === au) throw ue;
        var Je = $n(29, ue, null, M.mode);
        return (Je.lanes = F), (Je.return = M), Je;
      }
    };
  }
  var Bi = v0(!0),
    _0 = v0(!1),
    Ql = !1;
  function Tf(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null,
    };
  }
  function Af(e, t) {
    (e = e.updateQueue),
      t.updateQueue === e &&
        (t.updateQueue = {
          baseState: e.baseState,
          firstBaseUpdate: e.firstBaseUpdate,
          lastBaseUpdate: e.lastBaseUpdate,
          shared: e.shared,
          callbacks: null,
        });
  }
  function Zl(e) {
    return { lane: e, tag: 0, payload: null, callback: null, next: null };
  }
  function Kl(e, t, n) {
    var l = e.updateQueue;
    if (l === null) return null;
    if (((l = l.shared), (We & 2) !== 0)) {
      var c = l.pending;
      return (
        c === null ? (t.next = t) : ((t.next = c.next), (c.next = t)),
        (l.pending = t),
        (t = $c(e)),
        n0(e, null, n),
        t
      );
    }
    return Wc(e, l, t, n), $c(e);
  }
  function Ns(e, t, n) {
    if (
      ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194048) !== 0))
    ) {
      var l = t.lanes;
      (l &= e.pendingLanes), (n |= l), (t.lanes = n), Te(e, n);
    }
  }
  function zf(e, t) {
    var n = e.updateQueue,
      l = e.alternate;
    if (l !== null && ((l = l.updateQueue), n === l)) {
      var c = null,
        u = null;
      if (((n = n.firstBaseUpdate), n !== null)) {
        do {
          var m = {
            lane: n.lane,
            tag: n.tag,
            payload: n.payload,
            callback: null,
            next: null,
          };
          u === null ? (c = u = m) : (u = u.next = m), (n = n.next);
        } while (n !== null);
        u === null ? (c = u = t) : (u = u.next = t);
      } else c = u = t;
      (n = {
        baseState: l.baseState,
        firstBaseUpdate: c,
        lastBaseUpdate: u,
        shared: l.shared,
        callbacks: l.callbacks,
      }),
        (e.updateQueue = n);
      return;
    }
    (e = n.lastBaseUpdate),
      e === null ? (n.firstBaseUpdate = t) : (e.next = t),
      (n.lastBaseUpdate = t);
  }
  var Cf = !1;
  function Os() {
    if (Cf) {
      var e = Tr;
      if (e !== null) throw e;
    }
  }
  function Ds(e, t, n, l) {
    Cf = !1;
    var c = e.updateQueue;
    Ql = !1;
    var u = c.firstBaseUpdate,
      m = c.lastBaseUpdate,
      v = c.shared.pending;
    if (v !== null) {
      c.shared.pending = null;
      var A = v,
        j = A.next;
      (A.next = null), m === null ? (u = j) : (m.next = j), (m = A);
      var Z = e.alternate;
      Z !== null &&
        ((Z = Z.updateQueue),
        (v = Z.lastBaseUpdate),
        v !== m &&
          (v === null ? (Z.firstBaseUpdate = j) : (v.next = j),
          (Z.lastBaseUpdate = A)));
    }
    if (u !== null) {
      var $ = c.baseState;
      (m = 0), (Z = j = A = null), (v = u);
      do {
        var k = v.lane & -536870913,
          B = k !== v.lane;
        if (B ? (Le & k) === k : (l & k) === k) {
          k !== 0 && k === Sr && (Cf = !0),
            Z !== null &&
              (Z = Z.next =
                {
                  lane: 0,
                  tag: v.tag,
                  payload: v.payload,
                  callback: null,
                  next: null,
                });
          e: {
            var ie = e,
              _e = v;
            k = t;
            var at = n;
            switch (_e.tag) {
              case 1:
                if (((ie = _e.payload), typeof ie == "function")) {
                  $ = ie.call(at, $, k);
                  break e;
                }
                $ = ie;
                break e;
              case 3:
                ie.flags = (ie.flags & -65537) | 128;
              case 0:
                if (
                  ((ie = _e.payload),
                  (k = typeof ie == "function" ? ie.call(at, $, k) : ie),
                  k == null)
                )
                  break e;
                $ = _({}, $, k);
                break e;
              case 2:
                Ql = !0;
            }
          }
          (k = v.callback),
            k !== null &&
              ((e.flags |= 64),
              B && (e.flags |= 8192),
              (B = c.callbacks),
              B === null ? (c.callbacks = [k]) : B.push(k));
        } else
          (B = {
            lane: k,
            tag: v.tag,
            payload: v.payload,
            callback: v.callback,
            next: null,
          }),
            Z === null ? ((j = Z = B), (A = $)) : (Z = Z.next = B),
            (m |= k);
        if (((v = v.next), v === null)) {
          if (((v = c.shared.pending), v === null)) break;
          (B = v),
            (v = B.next),
            (B.next = null),
            (c.lastBaseUpdate = B),
            (c.shared.pending = null);
        }
      } while (!0);
      Z === null && (A = $),
        (c.baseState = A),
        (c.firstBaseUpdate = j),
        (c.lastBaseUpdate = Z),
        u === null && (c.shared.lanes = 0),
        (Pl |= m),
        (e.lanes = m),
        (e.memoizedState = $);
    }
  }
  function b0(e, t) {
    if (typeof e != "function") throw Error(i(191, e));
    e.call(t);
  }
  function x0(e, t) {
    var n = e.callbacks;
    if (n !== null)
      for (e.callbacks = null, e = 0; e < n.length; e++) b0(n[e], t);
  }
  var Cr = z(null),
    su = z(0);
  function S0(e, t) {
    (e = Al), P(su, e), P(Cr, t), (Al = e | t.baseLanes);
  }
  function Ef() {
    P(su, Al), P(Cr, Cr.current);
  }
  function wf() {
    (Al = su.current), L(Cr), L(su);
  }
  var Pn = z(null),
    wa = null;
  function Jl(e) {
    var t = e.alternate;
    P(kt, kt.current & 1),
      P(Pn, e),
      wa === null &&
        (t === null || Cr.current !== null || t.memoizedState !== null) &&
        (wa = e);
  }
  function Mf(e) {
    P(kt, kt.current), P(Pn, e), wa === null && (wa = e);
  }
  function T0(e) {
    e.tag === 22
      ? (P(kt, kt.current), P(Pn, e), wa === null && (wa = e))
      : Fl();
  }
  function Fl() {
    P(kt, kt.current), P(Pn, Pn.current);
  }
  function In(e) {
    L(Pn), wa === e && (wa = null), L(kt);
  }
  var kt = z(0);
  function cu(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === 13) {
        var n = t.memoizedState;
        if (n !== null && ((n = n.dehydrated), n === null || kd(n) || Ud(n)))
          return t;
      } else if (
        t.tag === 19 &&
        (t.memoizedProps.revealOrder === "forwards" ||
          t.memoizedProps.revealOrder === "backwards" ||
          t.memoizedProps.revealOrder === "unstable_legacy-backwards" ||
          t.memoizedProps.revealOrder === "together")
      ) {
        if ((t.flags & 128) !== 0) return t;
      } else if (t.child !== null) {
        (t.child.return = t), (t = t.child);
        continue;
      }
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return null;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
    return null;
  }
  var gl = 0,
    Ee = null,
    tt = null,
    Gt = null,
    uu = !1,
    Er = !1,
    Yi = !1,
    ou = 0,
    Rs = 0,
    wr = null,
    L_ = 0;
  function Nt() {
    throw Error(i(321));
  }
  function Nf(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++)
      if (!Wn(e[n], t[n])) return !1;
    return !0;
  }
  function Of(e, t, n, l, c, u) {
    return (
      (gl = u),
      (Ee = t),
      (t.memoizedState = null),
      (t.updateQueue = null),
      (t.lanes = 0),
      (O.H = e === null || e.memoizedState === null ? rm : Zf),
      (Yi = !1),
      (u = n(l, c)),
      (Yi = !1),
      Er && (u = z0(t, n, l, c)),
      A0(e),
      u
    );
  }
  function A0(e) {
    O.H = Us;
    var t = tt !== null && tt.next !== null;
    if (((gl = 0), (Gt = tt = Ee = null), (uu = !1), (Rs = 0), (wr = null), t))
      throw Error(i(300));
    e === null ||
      Vt ||
      ((e = e.dependencies), e !== null && eu(e) && (Vt = !0));
  }
  function z0(e, t, n, l) {
    Ee = e;
    var c = 0;
    do {
      if ((Er && (wr = null), (Rs = 0), (Er = !1), 25 <= c))
        throw Error(i(301));
      if (((c += 1), (Gt = tt = null), e.updateQueue != null)) {
        var u = e.updateQueue;
        (u.lastEffect = null),
          (u.events = null),
          (u.stores = null),
          u.memoCache != null && (u.memoCache.index = 0);
      }
      (O.H = sm), (u = t(n, l));
    } while (Er);
    return u;
  }
  function G_() {
    var e = O.H,
      t = e.useState()[0];
    return (
      (t = typeof t.then == "function" ? js(t) : t),
      (e = e.useState()[0]),
      (tt !== null ? tt.memoizedState : null) !== e && (Ee.flags |= 1024),
      t
    );
  }
  function Df() {
    var e = ou !== 0;
    return (ou = 0), e;
  }
  function Rf(e, t, n) {
    (t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~n);
  }
  function jf(e) {
    if (uu) {
      for (e = e.memoizedState; e !== null; ) {
        var t = e.queue;
        t !== null && (t.pending = null), (e = e.next);
      }
      uu = !1;
    }
    (gl = 0), (Gt = tt = Ee = null), (Er = !1), (Rs = ou = 0), (wr = null);
  }
  function zn() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null,
    };
    return Gt === null ? (Ee.memoizedState = Gt = e) : (Gt = Gt.next = e), Gt;
  }
  function Ut() {
    if (tt === null) {
      var e = Ee.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = tt.next;
    var t = Gt === null ? Ee.memoizedState : Gt.next;
    if (t !== null) (Gt = t), (tt = e);
    else {
      if (e === null)
        throw Ee.alternate === null ? Error(i(467)) : Error(i(310));
      (tt = e),
        (e = {
          memoizedState: tt.memoizedState,
          baseState: tt.baseState,
          baseQueue: tt.baseQueue,
          queue: tt.queue,
          next: null,
        }),
        Gt === null ? (Ee.memoizedState = Gt = e) : (Gt = Gt.next = e);
    }
    return Gt;
  }
  function fu() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function js(e) {
    var t = Rs;
    return (
      (Rs += 1),
      wr === null && (wr = []),
      (e = m0(wr, e, t)),
      (t = Ee),
      (Gt === null ? t.memoizedState : Gt.next) === null &&
        ((t = t.alternate),
        (O.H = t === null || t.memoizedState === null ? rm : Zf)),
      e
    );
  }
  function du(e) {
    if (e !== null && typeof e == "object") {
      if (typeof e.then == "function") return js(e);
      if (e.$$typeof === K) return sn(e);
    }
    throw Error(i(438, String(e)));
  }
  function kf(e) {
    var t = null,
      n = Ee.updateQueue;
    if ((n !== null && (t = n.memoCache), t == null)) {
      var l = Ee.alternate;
      l !== null &&
        ((l = l.updateQueue),
        l !== null &&
          ((l = l.memoCache),
          l != null &&
            (t = {
              data: l.data.map(function (c) {
                return c.slice();
              }),
              index: 0,
            })));
    }
    if (
      (t == null && (t = { data: [], index: 0 }),
      n === null && ((n = fu()), (Ee.updateQueue = n)),
      (n.memoCache = t),
      (n = t.data[t.index]),
      n === void 0)
    )
      for (n = t.data[t.index] = Array(e), l = 0; l < e; l++) n[l] = I;
    return t.index++, n;
  }
  function yl(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function hu(e) {
    var t = Ut();
    return Uf(t, tt, e);
  }
  function Uf(e, t, n) {
    var l = e.queue;
    if (l === null) throw Error(i(311));
    l.lastRenderedReducer = n;
    var c = e.baseQueue,
      u = l.pending;
    if (u !== null) {
      if (c !== null) {
        var m = c.next;
        (c.next = u.next), (u.next = m);
      }
      (t.baseQueue = c = u), (l.pending = null);
    }
    if (((u = e.baseState), c === null)) e.memoizedState = u;
    else {
      t = c.next;
      var v = (m = null),
        A = null,
        j = t,
        Z = !1;
      do {
        var $ = j.lane & -536870913;
        if ($ !== j.lane ? (Le & $) === $ : (gl & $) === $) {
          var k = j.revertLane;
          if (k === 0)
            A !== null &&
              (A = A.next =
                {
                  lane: 0,
                  revertLane: 0,
                  gesture: null,
                  action: j.action,
                  hasEagerState: j.hasEagerState,
                  eagerState: j.eagerState,
                  next: null,
                }),
              $ === Sr && (Z = !0);
          else if ((gl & k) === k) {
            (j = j.next), k === Sr && (Z = !0);
            continue;
          } else
            ($ = {
              lane: 0,
              revertLane: j.revertLane,
              gesture: null,
              action: j.action,
              hasEagerState: j.hasEagerState,
              eagerState: j.eagerState,
              next: null,
            }),
              A === null ? ((v = A = $), (m = u)) : (A = A.next = $),
              (Ee.lanes |= k),
              (Pl |= k);
          ($ = j.action),
            Yi && n(u, $),
            (u = j.hasEagerState ? j.eagerState : n(u, $));
        } else
          (k = {
            lane: $,
            revertLane: j.revertLane,
            gesture: j.gesture,
            action: j.action,
            hasEagerState: j.hasEagerState,
            eagerState: j.eagerState,
            next: null,
          }),
            A === null ? ((v = A = k), (m = u)) : (A = A.next = k),
            (Ee.lanes |= $),
            (Pl |= $);
        j = j.next;
      } while (j !== null && j !== t);
      if (
        (A === null ? (m = u) : (A.next = v),
        !Wn(u, e.memoizedState) && ((Vt = !0), Z && ((n = Tr), n !== null)))
      )
        throw n;
      (e.memoizedState = u),
        (e.baseState = m),
        (e.baseQueue = A),
        (l.lastRenderedState = u);
    }
    return c === null && (l.lanes = 0), [e.memoizedState, l.dispatch];
  }
  function Hf(e) {
    var t = Ut(),
      n = t.queue;
    if (n === null) throw Error(i(311));
    n.lastRenderedReducer = e;
    var l = n.dispatch,
      c = n.pending,
      u = t.memoizedState;
    if (c !== null) {
      n.pending = null;
      var m = (c = c.next);
      do (u = e(u, m.action)), (m = m.next);
      while (m !== c);
      Wn(u, t.memoizedState) || (Vt = !0),
        (t.memoizedState = u),
        t.baseQueue === null && (t.baseState = u),
        (n.lastRenderedState = u);
    }
    return [u, l];
  }
  function C0(e, t, n) {
    var l = Ee,
      c = Ut(),
      u = Ve;
    if (u) {
      if (n === void 0) throw Error(i(407));
      n = n();
    } else n = t();
    var m = !Wn((tt || c).memoizedState, n);
    if (
      (m && ((c.memoizedState = n), (Vt = !0)),
      (c = c.queue),
      qf(M0.bind(null, l, c, e), [e]),
      c.getSnapshot !== t || m || (Gt !== null && Gt.memoizedState.tag & 1))
    ) {
      if (
        ((l.flags |= 2048),
        Mr(9, { destroy: void 0 }, w0.bind(null, l, c, n, t), null),
        it === null)
      )
        throw Error(i(349));
      u || (gl & 127) !== 0 || E0(l, t, n);
    }
    return n;
  }
  function E0(e, t, n) {
    (e.flags |= 16384),
      (e = { getSnapshot: t, value: n }),
      (t = Ee.updateQueue),
      t === null
        ? ((t = fu()), (Ee.updateQueue = t), (t.stores = [e]))
        : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
  }
  function w0(e, t, n, l) {
    (t.value = n), (t.getSnapshot = l), N0(t) && O0(e);
  }
  function M0(e, t, n) {
    return n(function () {
      N0(t) && O0(e);
    });
  }
  function N0(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var n = t();
      return !Wn(e, n);
    } catch {
      return !0;
    }
  }
  function O0(e) {
    var t = Ni(e, 2);
    t !== null && qn(t, e, 2);
  }
  function Bf(e) {
    var t = zn();
    if (typeof e == "function") {
      var n = e;
      if (((e = n()), Yi)) {
        Sn(!0);
        try {
          n();
        } finally {
          Sn(!1);
        }
      }
    }
    return (
      (t.memoizedState = t.baseState = e),
      (t.queue = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: yl,
        lastRenderedState: e,
      }),
      t
    );
  }
  function D0(e, t, n, l) {
    return (e.baseState = n), Uf(e, tt, typeof l == "function" ? l : yl);
  }
  function V_(e, t, n, l, c) {
    if (gu(e)) throw Error(i(485));
    if (((e = t.action), e !== null)) {
      var u = {
        payload: c,
        action: e,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function (m) {
          u.listeners.push(m);
        },
      };
      O.T !== null ? n(!0) : (u.isTransition = !1),
        l(u),
        (n = t.pending),
        n === null
          ? ((u.next = t.pending = u), R0(t, u))
          : ((u.next = n.next), (t.pending = n.next = u));
    }
  }
  function R0(e, t) {
    var n = t.action,
      l = t.payload,
      c = e.state;
    if (t.isTransition) {
      var u = O.T,
        m = {};
      O.T = m;
      try {
        var v = n(c, l),
          A = O.S;
        A !== null && A(m, v), j0(e, t, v);
      } catch (j) {
        Yf(e, t, j);
      } finally {
        u !== null && m.types !== null && (u.types = m.types), (O.T = u);
      }
    } else
      try {
        (u = n(c, l)), j0(e, t, u);
      } catch (j) {
        Yf(e, t, j);
      }
  }
  function j0(e, t, n) {
    n !== null && typeof n == "object" && typeof n.then == "function"
      ? n.then(
          function (l) {
            k0(e, t, l);
          },
          function (l) {
            return Yf(e, t, l);
          }
        )
      : k0(e, t, n);
  }
  function k0(e, t, n) {
    (t.status = "fulfilled"),
      (t.value = n),
      U0(t),
      (e.state = n),
      (t = e.pending),
      t !== null &&
        ((n = t.next),
        n === t ? (e.pending = null) : ((n = n.next), (t.next = n), R0(e, n)));
  }
  function Yf(e, t, n) {
    var l = e.pending;
    if (((e.pending = null), l !== null)) {
      l = l.next;
      do (t.status = "rejected"), (t.reason = n), U0(t), (t = t.next);
      while (t !== l);
    }
    e.action = null;
  }
  function U0(e) {
    e = e.listeners;
    for (var t = 0; t < e.length; t++) (0, e[t])();
  }
  function H0(e, t) {
    return t;
  }
  function B0(e, t) {
    if (Ve) {
      var n = it.formState;
      if (n !== null) {
        e: {
          var l = Ee;
          if (Ve) {
            if (ht) {
              t: {
                for (var c = ht, u = Ea; c.nodeType !== 8; ) {
                  if (!u) {
                    c = null;
                    break t;
                  }
                  if (((c = Ma(c.nextSibling)), c === null)) {
                    c = null;
                    break t;
                  }
                }
                (u = c.data), (c = u === "F!" || u === "F" ? c : null);
              }
              if (c) {
                (ht = Ma(c.nextSibling)), (l = c.data === "F!");
                break e;
              }
            }
            Vl(l);
          }
          l = !1;
        }
        l && (t = n[0]);
      }
    }
    return (
      (n = zn()),
      (n.memoizedState = n.baseState = t),
      (l = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: H0,
        lastRenderedState: t,
      }),
      (n.queue = l),
      (n = am.bind(null, Ee, l)),
      (l.dispatch = n),
      (l = Bf(!1)),
      (u = Qf.bind(null, Ee, !1, l.queue)),
      (l = zn()),
      (c = { state: t, dispatch: null, action: e, pending: null }),
      (l.queue = c),
      (n = V_.bind(null, Ee, c, u, n)),
      (c.dispatch = n),
      (l.memoizedState = e),
      [t, n, !1]
    );
  }
  function Y0(e) {
    var t = Ut();
    return q0(t, tt, e);
  }
  function q0(e, t, n) {
    if (
      ((t = Uf(e, t, H0)[0]),
      (e = hu(yl)[0]),
      typeof t == "object" && t !== null && typeof t.then == "function")
    )
      try {
        var l = js(t);
      } catch (m) {
        throw m === Ar ? au : m;
      }
    else l = t;
    t = Ut();
    var c = t.queue,
      u = c.dispatch;
    return (
      n !== t.memoizedState &&
        ((Ee.flags |= 2048),
        Mr(9, { destroy: void 0 }, X_.bind(null, c, n), null)),
      [l, u, e]
    );
  }
  function X_(e, t) {
    e.action = t;
  }
  function L0(e) {
    var t = Ut(),
      n = tt;
    if (n !== null) return q0(t, n, e);
    Ut(), (t = t.memoizedState), (n = Ut());
    var l = n.queue.dispatch;
    return (n.memoizedState = e), [t, l, !1];
  }
  function Mr(e, t, n, l) {
    return (
      (e = { tag: e, create: n, deps: l, inst: t, next: null }),
      (t = Ee.updateQueue),
      t === null && ((t = fu()), (Ee.updateQueue = t)),
      (n = t.lastEffect),
      n === null
        ? (t.lastEffect = e.next = e)
        : ((l = n.next), (n.next = e), (e.next = l), (t.lastEffect = e)),
      e
    );
  }
  function G0() {
    return Ut().memoizedState;
  }
  function pu(e, t, n, l) {
    var c = zn();
    (Ee.flags |= e),
      (c.memoizedState = Mr(
        1 | t,
        { destroy: void 0 },
        n,
        l === void 0 ? null : l
      ));
  }
  function mu(e, t, n, l) {
    var c = Ut();
    l = l === void 0 ? null : l;
    var u = c.memoizedState.inst;
    tt !== null && l !== null && Nf(l, tt.memoizedState.deps)
      ? (c.memoizedState = Mr(t, u, n, l))
      : ((Ee.flags |= e), (c.memoizedState = Mr(1 | t, u, n, l)));
  }
  function V0(e, t) {
    pu(8390656, 8, e, t);
  }
  function qf(e, t) {
    mu(2048, 8, e, t);
  }
  function Q_(e) {
    Ee.flags |= 4;
    var t = Ee.updateQueue;
    if (t === null) (t = fu()), (Ee.updateQueue = t), (t.events = [e]);
    else {
      var n = t.events;
      n === null ? (t.events = [e]) : n.push(e);
    }
  }
  function X0(e) {
    var t = Ut().memoizedState;
    return (
      Q_({ ref: t, nextImpl: e }),
      function () {
        if ((We & 2) !== 0) throw Error(i(440));
        return t.impl.apply(void 0, arguments);
      }
    );
  }
  function Q0(e, t) {
    return mu(4, 2, e, t);
  }
  function Z0(e, t) {
    return mu(4, 4, e, t);
  }
  function K0(e, t) {
    if (typeof t == "function") {
      e = e();
      var n = t(e);
      return function () {
        typeof n == "function" ? n() : t(null);
      };
    }
    if (t != null)
      return (
        (e = e()),
        (t.current = e),
        function () {
          t.current = null;
        }
      );
  }
  function J0(e, t, n) {
    (n = n != null ? n.concat([e]) : null), mu(4, 4, K0.bind(null, t, e), n);
  }
  function Lf() {}
  function F0(e, t) {
    var n = Ut();
    t = t === void 0 ? null : t;
    var l = n.memoizedState;
    return t !== null && Nf(t, l[1]) ? l[0] : ((n.memoizedState = [e, t]), e);
  }
  function W0(e, t) {
    var n = Ut();
    t = t === void 0 ? null : t;
    var l = n.memoizedState;
    if (t !== null && Nf(t, l[1])) return l[0];
    if (((l = e()), Yi)) {
      Sn(!0);
      try {
        e();
      } finally {
        Sn(!1);
      }
    }
    return (n.memoizedState = [l, t]), l;
  }
  function Gf(e, t, n) {
    return n === void 0 || ((gl & 1073741824) !== 0 && (Le & 261930) === 0)
      ? (e.memoizedState = t)
      : ((e.memoizedState = n), (e = $m()), (Ee.lanes |= e), (Pl |= e), n);
  }
  function $0(e, t, n, l) {
    return Wn(n, t)
      ? n
      : Cr.current !== null
      ? ((e = Gf(e, n, l)), Wn(e, t) || (Vt = !0), e)
      : (gl & 42) === 0 || ((gl & 1073741824) !== 0 && (Le & 261930) === 0)
      ? ((Vt = !0), (e.memoizedState = n))
      : ((e = $m()), (Ee.lanes |= e), (Pl |= e), t);
  }
  function P0(e, t, n, l, c) {
    var u = G.p;
    G.p = u !== 0 && 8 > u ? u : 8;
    var m = O.T,
      v = {};
    (O.T = v), Qf(e, !1, t, n);
    try {
      var A = c(),
        j = O.S;
      if (
        (j !== null && j(v, A),
        A !== null && typeof A == "object" && typeof A.then == "function")
      ) {
        var Z = q_(A, l);
        ks(e, t, Z, na(e));
      } else ks(e, t, l, na(e));
    } catch ($) {
      ks(e, t, { then: function () {}, status: "rejected", reason: $ }, na());
    } finally {
      (G.p = u),
        m !== null && v.types !== null && (m.types = v.types),
        (O.T = m);
    }
  }
  function Z_() {}
  function Vf(e, t, n, l) {
    if (e.tag !== 5) throw Error(i(476));
    var c = I0(e).queue;
    P0(
      e,
      c,
      t,
      V,
      n === null
        ? Z_
        : function () {
            return em(e), n(l);
          }
    );
  }
  function I0(e) {
    var t = e.memoizedState;
    if (t !== null) return t;
    t = {
      memoizedState: V,
      baseState: V,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: yl,
        lastRenderedState: V,
      },
      next: null,
    };
    var n = {};
    return (
      (t.next = {
        memoizedState: n,
        baseState: n,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: yl,
          lastRenderedState: n,
        },
        next: null,
      }),
      (e.memoizedState = t),
      (e = e.alternate),
      e !== null && (e.memoizedState = t),
      t
    );
  }
  function em(e) {
    var t = I0(e);
    t.next === null && (t = e.alternate.memoizedState),
      ks(e, t.next.queue, {}, na());
  }
  function Xf() {
    return sn(Ps);
  }
  function tm() {
    return Ut().memoizedState;
  }
  function nm() {
    return Ut().memoizedState;
  }
  function K_(e) {
    for (var t = e.return; t !== null; ) {
      switch (t.tag) {
        case 24:
        case 3:
          var n = na();
          e = Zl(n);
          var l = Kl(t, e, n);
          l !== null && (qn(l, t, n), Ns(l, t, n)),
            (t = { cache: _f() }),
            (e.payload = t);
          return;
      }
      t = t.return;
    }
  }
  function J_(e, t, n) {
    var l = na();
    (n = {
      lane: l,
      revertLane: 0,
      gesture: null,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
      gu(e)
        ? lm(t, n)
        : ((n = cf(e, t, n, l)), n !== null && (qn(n, e, l), im(n, t, l)));
  }
  function am(e, t, n) {
    var l = na();
    ks(e, t, n, l);
  }
  function ks(e, t, n, l) {
    var c = {
      lane: l,
      revertLane: 0,
      gesture: null,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    };
    if (gu(e)) lm(t, c);
    else {
      var u = e.alternate;
      if (
        e.lanes === 0 &&
        (u === null || u.lanes === 0) &&
        ((u = t.lastRenderedReducer), u !== null)
      )
        try {
          var m = t.lastRenderedState,
            v = u(m, n);
          if (((c.hasEagerState = !0), (c.eagerState = v), Wn(v, m)))
            return Wc(e, t, c, 0), it === null && Fc(), !1;
        } catch {}
      if (((n = cf(e, t, c, l)), n !== null))
        return qn(n, e, l), im(n, t, l), !0;
    }
    return !1;
  }
  function Qf(e, t, n, l) {
    if (
      ((l = {
        lane: 2,
        revertLane: Td(),
        gesture: null,
        action: l,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      gu(e))
    ) {
      if (t) throw Error(i(479));
    } else (t = cf(e, n, l, 2)), t !== null && qn(t, e, 2);
  }
  function gu(e) {
    var t = e.alternate;
    return e === Ee || (t !== null && t === Ee);
  }
  function lm(e, t) {
    Er = uu = !0;
    var n = e.pending;
    n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
      (e.pending = t);
  }
  function im(e, t, n) {
    if ((n & 4194048) !== 0) {
      var l = t.lanes;
      (l &= e.pendingLanes), (n |= l), (t.lanes = n), Te(e, n);
    }
  }
  var Us = {
    readContext: sn,
    use: du,
    useCallback: Nt,
    useContext: Nt,
    useEffect: Nt,
    useImperativeHandle: Nt,
    useLayoutEffect: Nt,
    useInsertionEffect: Nt,
    useMemo: Nt,
    useReducer: Nt,
    useRef: Nt,
    useState: Nt,
    useDebugValue: Nt,
    useDeferredValue: Nt,
    useTransition: Nt,
    useSyncExternalStore: Nt,
    useId: Nt,
    useHostTransitionStatus: Nt,
    useFormState: Nt,
    useActionState: Nt,
    useOptimistic: Nt,
    useMemoCache: Nt,
    useCacheRefresh: Nt,
  };
  Us.useEffectEvent = Nt;
  var rm = {
      readContext: sn,
      use: du,
      useCallback: function (e, t) {
        return (zn().memoizedState = [e, t === void 0 ? null : t]), e;
      },
      useContext: sn,
      useEffect: V0,
      useImperativeHandle: function (e, t, n) {
        (n = n != null ? n.concat([e]) : null),
          pu(4194308, 4, K0.bind(null, t, e), n);
      },
      useLayoutEffect: function (e, t) {
        return pu(4194308, 4, e, t);
      },
      useInsertionEffect: function (e, t) {
        pu(4, 2, e, t);
      },
      useMemo: function (e, t) {
        var n = zn();
        t = t === void 0 ? null : t;
        var l = e();
        if (Yi) {
          Sn(!0);
          try {
            e();
          } finally {
            Sn(!1);
          }
        }
        return (n.memoizedState = [l, t]), l;
      },
      useReducer: function (e, t, n) {
        var l = zn();
        if (n !== void 0) {
          var c = n(t);
          if (Yi) {
            Sn(!0);
            try {
              n(t);
            } finally {
              Sn(!1);
            }
          }
        } else c = t;
        return (
          (l.memoizedState = l.baseState = c),
          (e = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: e,
            lastRenderedState: c,
          }),
          (l.queue = e),
          (e = e.dispatch = J_.bind(null, Ee, e)),
          [l.memoizedState, e]
        );
      },
      useRef: function (e) {
        var t = zn();
        return (e = { current: e }), (t.memoizedState = e);
      },
      useState: function (e) {
        e = Bf(e);
        var t = e.queue,
          n = am.bind(null, Ee, t);
        return (t.dispatch = n), [e.memoizedState, n];
      },
      useDebugValue: Lf,
      useDeferredValue: function (e, t) {
        var n = zn();
        return Gf(n, e, t);
      },
      useTransition: function () {
        var e = Bf(!1);
        return (
          (e = P0.bind(null, Ee, e.queue, !0, !1)),
          (zn().memoizedState = e),
          [!1, e]
        );
      },
      useSyncExternalStore: function (e, t, n) {
        var l = Ee,
          c = zn();
        if (Ve) {
          if (n === void 0) throw Error(i(407));
          n = n();
        } else {
          if (((n = t()), it === null)) throw Error(i(349));
          (Le & 127) !== 0 || E0(l, t, n);
        }
        c.memoizedState = n;
        var u = { value: n, getSnapshot: t };
        return (
          (c.queue = u),
          V0(M0.bind(null, l, u, e), [e]),
          (l.flags |= 2048),
          Mr(9, { destroy: void 0 }, w0.bind(null, l, u, n, t), null),
          n
        );
      },
      useId: function () {
        var e = zn(),
          t = it.identifierPrefix;
        if (Ve) {
          var n = $a,
            l = Wa;
          (n = (l & ~(1 << (32 - qt(l) - 1))).toString(32) + n),
            (t = "_" + t + "R_" + n),
            (n = ou++),
            0 < n && (t += "H" + n.toString(32)),
            (t += "_");
        } else (n = L_++), (t = "_" + t + "r_" + n.toString(32) + "_");
        return (e.memoizedState = t);
      },
      useHostTransitionStatus: Xf,
      useFormState: B0,
      useActionState: B0,
      useOptimistic: function (e) {
        var t = zn();
        t.memoizedState = t.baseState = e;
        var n = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: null,
          lastRenderedState: null,
        };
        return (
          (t.queue = n),
          (t = Qf.bind(null, Ee, !0, n)),
          (n.dispatch = t),
          [e, t]
        );
      },
      useMemoCache: kf,
      useCacheRefresh: function () {
        return (zn().memoizedState = K_.bind(null, Ee));
      },
      useEffectEvent: function (e) {
        var t = zn(),
          n = { impl: e };
        return (
          (t.memoizedState = n),
          function () {
            if ((We & 2) !== 0) throw Error(i(440));
            return n.impl.apply(void 0, arguments);
          }
        );
      },
    },
    Zf = {
      readContext: sn,
      use: du,
      useCallback: F0,
      useContext: sn,
      useEffect: qf,
      useImperativeHandle: J0,
      useInsertionEffect: Q0,
      useLayoutEffect: Z0,
      useMemo: W0,
      useReducer: hu,
      useRef: G0,
      useState: function () {
        return hu(yl);
      },
      useDebugValue: Lf,
      useDeferredValue: function (e, t) {
        var n = Ut();
        return $0(n, tt.memoizedState, e, t);
      },
      useTransition: function () {
        var e = hu(yl)[0],
          t = Ut().memoizedState;
        return [typeof e == "boolean" ? e : js(e), t];
      },
      useSyncExternalStore: C0,
      useId: tm,
      useHostTransitionStatus: Xf,
      useFormState: Y0,
      useActionState: Y0,
      useOptimistic: function (e, t) {
        var n = Ut();
        return D0(n, tt, e, t);
      },
      useMemoCache: kf,
      useCacheRefresh: nm,
    };
  Zf.useEffectEvent = X0;
  var sm = {
    readContext: sn,
    use: du,
    useCallback: F0,
    useContext: sn,
    useEffect: qf,
    useImperativeHandle: J0,
    useInsertionEffect: Q0,
    useLayoutEffect: Z0,
    useMemo: W0,
    useReducer: Hf,
    useRef: G0,
    useState: function () {
      return Hf(yl);
    },
    useDebugValue: Lf,
    useDeferredValue: function (e, t) {
      var n = Ut();
      return tt === null ? Gf(n, e, t) : $0(n, tt.memoizedState, e, t);
    },
    useTransition: function () {
      var e = Hf(yl)[0],
        t = Ut().memoizedState;
      return [typeof e == "boolean" ? e : js(e), t];
    },
    useSyncExternalStore: C0,
    useId: tm,
    useHostTransitionStatus: Xf,
    useFormState: L0,
    useActionState: L0,
    useOptimistic: function (e, t) {
      var n = Ut();
      return tt !== null
        ? D0(n, tt, e, t)
        : ((n.baseState = e), [e, n.queue.dispatch]);
    },
    useMemoCache: kf,
    useCacheRefresh: nm,
  };
  sm.useEffectEvent = X0;
  function Kf(e, t, n, l) {
    (t = e.memoizedState),
      (n = n(l, t)),
      (n = n == null ? t : _({}, t, n)),
      (e.memoizedState = n),
      e.lanes === 0 && (e.updateQueue.baseState = n);
  }
  var Jf = {
    enqueueSetState: function (e, t, n) {
      e = e._reactInternals;
      var l = na(),
        c = Zl(l);
      (c.payload = t),
        n != null && (c.callback = n),
        (t = Kl(e, c, l)),
        t !== null && (qn(t, e, l), Ns(t, e, l));
    },
    enqueueReplaceState: function (e, t, n) {
      e = e._reactInternals;
      var l = na(),
        c = Zl(l);
      (c.tag = 1),
        (c.payload = t),
        n != null && (c.callback = n),
        (t = Kl(e, c, l)),
        t !== null && (qn(t, e, l), Ns(t, e, l));
    },
    enqueueForceUpdate: function (e, t) {
      e = e._reactInternals;
      var n = na(),
        l = Zl(n);
      (l.tag = 2),
        t != null && (l.callback = t),
        (t = Kl(e, l, n)),
        t !== null && (qn(t, e, n), Ns(t, e, n));
    },
  };
  function cm(e, t, n, l, c, u, m) {
    return (
      (e = e.stateNode),
      typeof e.shouldComponentUpdate == "function"
        ? e.shouldComponentUpdate(l, u, m)
        : t.prototype && t.prototype.isPureReactComponent
        ? !Ss(n, l) || !Ss(c, u)
        : !0
    );
  }
  function um(e, t, n, l) {
    (e = t.state),
      typeof t.componentWillReceiveProps == "function" &&
        t.componentWillReceiveProps(n, l),
      typeof t.UNSAFE_componentWillReceiveProps == "function" &&
        t.UNSAFE_componentWillReceiveProps(n, l),
      t.state !== e && Jf.enqueueReplaceState(t, t.state, null);
  }
  function qi(e, t) {
    var n = t;
    if ("ref" in t) {
      n = {};
      for (var l in t) l !== "ref" && (n[l] = t[l]);
    }
    if ((e = e.defaultProps)) {
      n === t && (n = _({}, n));
      for (var c in e) n[c] === void 0 && (n[c] = e[c]);
    }
    return n;
  }
  function om(e) {
    Jc(e);
  }
  function fm(e) {
    console.error(e);
  }
  function dm(e) {
    Jc(e);
  }
  function yu(e, t) {
    try {
      var n = e.onUncaughtError;
      n(t.value, { componentStack: t.stack });
    } catch (l) {
      setTimeout(function () {
        throw l;
      });
    }
  }
  function hm(e, t, n) {
    try {
      var l = e.onCaughtError;
      l(n.value, {
        componentStack: n.stack,
        errorBoundary: t.tag === 1 ? t.stateNode : null,
      });
    } catch (c) {
      setTimeout(function () {
        throw c;
      });
    }
  }
  function Ff(e, t, n) {
    return (
      (n = Zl(n)),
      (n.tag = 3),
      (n.payload = { element: null }),
      (n.callback = function () {
        yu(e, t);
      }),
      n
    );
  }
  function pm(e) {
    return (e = Zl(e)), (e.tag = 3), e;
  }
  function mm(e, t, n, l) {
    var c = n.type.getDerivedStateFromError;
    if (typeof c == "function") {
      var u = l.value;
      (e.payload = function () {
        return c(u);
      }),
        (e.callback = function () {
          hm(t, n, l);
        });
    }
    var m = n.stateNode;
    m !== null &&
      typeof m.componentDidCatch == "function" &&
      (e.callback = function () {
        hm(t, n, l),
          typeof c != "function" &&
            (Il === null ? (Il = new Set([this])) : Il.add(this));
        var v = l.stack;
        this.componentDidCatch(l.value, {
          componentStack: v !== null ? v : "",
        });
      });
  }
  function F_(e, t, n, l, c) {
    if (
      ((n.flags |= 32768),
      l !== null && typeof l == "object" && typeof l.then == "function")
    ) {
      if (
        ((t = n.alternate),
        t !== null && xr(t, n, c, !0),
        (n = Pn.current),
        n !== null)
      ) {
        switch (n.tag) {
          case 31:
          case 13:
            return (
              wa === null ? Mu() : n.alternate === null && Ot === 0 && (Ot = 3),
              (n.flags &= -257),
              (n.flags |= 65536),
              (n.lanes = c),
              l === lu
                ? (n.flags |= 16384)
                : ((t = n.updateQueue),
                  t === null ? (n.updateQueue = new Set([l])) : t.add(l),
                  bd(e, l, c)),
              !1
            );
          case 22:
            return (
              (n.flags |= 65536),
              l === lu
                ? (n.flags |= 16384)
                : ((t = n.updateQueue),
                  t === null
                    ? ((t = {
                        transitions: null,
                        markerInstances: null,
                        retryQueue: new Set([l]),
                      }),
                      (n.updateQueue = t))
                    : ((n = t.retryQueue),
                      n === null ? (t.retryQueue = new Set([l])) : n.add(l)),
                  bd(e, l, c)),
              !1
            );
        }
        throw Error(i(435, n.tag));
      }
      return bd(e, l, c), Mu(), !1;
    }
    if (Ve)
      return (
        (t = Pn.current),
        t !== null
          ? ((t.flags & 65536) === 0 && (t.flags |= 256),
            (t.flags |= 65536),
            (t.lanes = c),
            l !== pf && ((e = Error(i(422), { cause: l })), zs(Aa(e, n))))
          : (l !== pf && ((t = Error(i(423), { cause: l })), zs(Aa(t, n))),
            (e = e.current.alternate),
            (e.flags |= 65536),
            (c &= -c),
            (e.lanes |= c),
            (l = Aa(l, n)),
            (c = Ff(e.stateNode, l, c)),
            zf(e, c),
            Ot !== 4 && (Ot = 2)),
        !1
      );
    var u = Error(i(520), { cause: l });
    if (
      ((u = Aa(u, n)),
      Xs === null ? (Xs = [u]) : Xs.push(u),
      Ot !== 4 && (Ot = 2),
      t === null)
    )
      return !0;
    (l = Aa(l, n)), (n = t);
    do {
      switch (n.tag) {
        case 3:
          return (
            (n.flags |= 65536),
            (e = c & -c),
            (n.lanes |= e),
            (e = Ff(n.stateNode, l, e)),
            zf(n, e),
            !1
          );
        case 1:
          if (
            ((t = n.type),
            (u = n.stateNode),
            (n.flags & 128) === 0 &&
              (typeof t.getDerivedStateFromError == "function" ||
                (u !== null &&
                  typeof u.componentDidCatch == "function" &&
                  (Il === null || !Il.has(u)))))
          )
            return (
              (n.flags |= 65536),
              (c &= -c),
              (n.lanes |= c),
              (c = pm(c)),
              mm(c, e, n, l),
              zf(n, c),
              !1
            );
      }
      n = n.return;
    } while (n !== null);
    return !1;
  }
  var Wf = Error(i(461)),
    Vt = !1;
  function cn(e, t, n, l) {
    t.child = e === null ? _0(t, null, n, l) : Bi(t, e.child, n, l);
  }
  function gm(e, t, n, l, c) {
    n = n.render;
    var u = t.ref;
    if ("ref" in l) {
      var m = {};
      for (var v in l) v !== "ref" && (m[v] = l[v]);
    } else m = l;
    return (
      ji(t),
      (l = Of(e, t, n, m, u, c)),
      (v = Df()),
      e !== null && !Vt
        ? (Rf(e, t, c), vl(e, t, c))
        : (Ve && v && df(t), (t.flags |= 1), cn(e, t, l, c), t.child)
    );
  }
  function ym(e, t, n, l, c) {
    if (e === null) {
      var u = n.type;
      return typeof u == "function" &&
        !uf(u) &&
        u.defaultProps === void 0 &&
        n.compare === null
        ? ((t.tag = 15), (t.type = u), vm(e, t, u, l, c))
        : ((e = Pc(n.type, null, l, t, t.mode, c)),
          (e.ref = t.ref),
          (e.return = t),
          (t.child = e));
    }
    if (((u = e.child), !ld(e, c))) {
      var m = u.memoizedProps;
      if (
        ((n = n.compare), (n = n !== null ? n : Ss), n(m, l) && e.ref === t.ref)
      )
        return vl(e, t, c);
    }
    return (
      (t.flags |= 1),
      (e = dl(u, l)),
      (e.ref = t.ref),
      (e.return = t),
      (t.child = e)
    );
  }
  function vm(e, t, n, l, c) {
    if (e !== null) {
      var u = e.memoizedProps;
      if (Ss(u, l) && e.ref === t.ref)
        if (((Vt = !1), (t.pendingProps = l = u), ld(e, c)))
          (e.flags & 131072) !== 0 && (Vt = !0);
        else return (t.lanes = e.lanes), vl(e, t, c);
    }
    return $f(e, t, n, l, c);
  }
  function _m(e, t, n, l) {
    var c = l.children,
      u = e !== null ? e.memoizedState : null;
    if (
      (e === null &&
        t.stateNode === null &&
        (t.stateNode = {
          _visibility: 1,
          _pendingMarkers: null,
          _retryCache: null,
          _transitions: null,
        }),
      l.mode === "hidden")
    ) {
      if ((t.flags & 128) !== 0) {
        if (((u = u !== null ? u.baseLanes | n : n), e !== null)) {
          for (l = t.child = e.child, c = 0; l !== null; )
            (c = c | l.lanes | l.childLanes), (l = l.sibling);
          l = c & ~u;
        } else (l = 0), (t.child = null);
        return bm(e, t, u, n, l);
      }
      if ((n & 536870912) !== 0)
        (t.memoizedState = { baseLanes: 0, cachePool: null }),
          e !== null && nu(t, u !== null ? u.cachePool : null),
          u !== null ? S0(t, u) : Ef(),
          T0(t);
      else
        return (
          (l = t.lanes = 536870912),
          bm(e, t, u !== null ? u.baseLanes | n : n, n, l)
        );
    } else
      u !== null
        ? (nu(t, u.cachePool), S0(t, u), Fl(), (t.memoizedState = null))
        : (e !== null && nu(t, null), Ef(), Fl());
    return cn(e, t, c, n), t.child;
  }
  function Hs(e, t) {
    return (
      (e !== null && e.tag === 22) ||
        t.stateNode !== null ||
        (t.stateNode = {
          _visibility: 1,
          _pendingMarkers: null,
          _retryCache: null,
          _transitions: null,
        }),
      t.sibling
    );
  }
  function bm(e, t, n, l, c) {
    var u = xf();
    return (
      (u = u === null ? null : { parent: Lt._currentValue, pool: u }),
      (t.memoizedState = { baseLanes: n, cachePool: u }),
      e !== null && nu(t, null),
      Ef(),
      T0(t),
      e !== null && xr(e, t, l, !0),
      (t.childLanes = c),
      null
    );
  }
  function vu(e, t) {
    return (
      (t = bu({ mode: t.mode, children: t.children }, e.mode)),
      (t.ref = e.ref),
      (e.child = t),
      (t.return = e),
      t
    );
  }
  function xm(e, t, n) {
    return (
      Bi(t, e.child, null, n),
      (e = vu(t, t.pendingProps)),
      (e.flags |= 2),
      In(t),
      (t.memoizedState = null),
      e
    );
  }
  function W_(e, t, n) {
    var l = t.pendingProps,
      c = (t.flags & 128) !== 0;
    if (((t.flags &= -129), e === null)) {
      if (Ve) {
        if (l.mode === "hidden")
          return (e = vu(t, l)), (t.lanes = 536870912), Hs(null, e);
        if (
          (Mf(t),
          (e = ht)
            ? ((e = Rg(e, Ea)),
              (e = e !== null && e.data === "&" ? e : null),
              e !== null &&
                ((t.memoizedState = {
                  dehydrated: e,
                  treeContext: Ll !== null ? { id: Wa, overflow: $a } : null,
                  retryLane: 536870912,
                  hydrationErrors: null,
                }),
                (n = l0(e)),
                (n.return = t),
                (t.child = n),
                (rn = t),
                (ht = null)))
            : (e = null),
          e === null)
        )
          throw Vl(t);
        return (t.lanes = 536870912), null;
      }
      return vu(t, l);
    }
    var u = e.memoizedState;
    if (u !== null) {
      var m = u.dehydrated;
      if ((Mf(t), c))
        if (t.flags & 256) (t.flags &= -257), (t = xm(e, t, n));
        else if (t.memoizedState !== null)
          (t.child = e.child), (t.flags |= 128), (t = null);
        else throw Error(i(558));
      else if (
        (Vt || xr(e, t, n, !1), (c = (n & e.childLanes) !== 0), Vt || c)
      ) {
        if (
          ((l = it),
          l !== null && ((m = pe(l, n)), m !== 0 && m !== u.retryLane))
        )
          throw ((u.retryLane = m), Ni(e, m), qn(l, e, m), Wf);
        Mu(), (t = xm(e, t, n));
      } else
        (e = u.treeContext),
          (ht = Ma(m.nextSibling)),
          (rn = t),
          (Ve = !0),
          (Gl = null),
          (Ea = !1),
          e !== null && s0(t, e),
          (t = vu(t, l)),
          (t.flags |= 4096);
      return t;
    }
    return (
      (e = dl(e.child, { mode: l.mode, children: l.children })),
      (e.ref = t.ref),
      (t.child = e),
      (e.return = t),
      e
    );
  }
  function _u(e, t) {
    var n = t.ref;
    if (n === null) e !== null && e.ref !== null && (t.flags |= 4194816);
    else {
      if (typeof n != "function" && typeof n != "object") throw Error(i(284));
      (e === null || e.ref !== n) && (t.flags |= 4194816);
    }
  }
  function $f(e, t, n, l, c) {
    return (
      ji(t),
      (n = Of(e, t, n, l, void 0, c)),
      (l = Df()),
      e !== null && !Vt
        ? (Rf(e, t, c), vl(e, t, c))
        : (Ve && l && df(t), (t.flags |= 1), cn(e, t, n, c), t.child)
    );
  }
  function Sm(e, t, n, l, c, u) {
    return (
      ji(t),
      (t.updateQueue = null),
      (n = z0(t, l, n, c)),
      A0(e),
      (l = Df()),
      e !== null && !Vt
        ? (Rf(e, t, u), vl(e, t, u))
        : (Ve && l && df(t), (t.flags |= 1), cn(e, t, n, u), t.child)
    );
  }
  function Tm(e, t, n, l, c) {
    if ((ji(t), t.stateNode === null)) {
      var u = yr,
        m = n.contextType;
      typeof m == "object" && m !== null && (u = sn(m)),
        (u = new n(l, u)),
        (t.memoizedState =
          u.state !== null && u.state !== void 0 ? u.state : null),
        (u.updater = Jf),
        (t.stateNode = u),
        (u._reactInternals = t),
        (u = t.stateNode),
        (u.props = l),
        (u.state = t.memoizedState),
        (u.refs = {}),
        Tf(t),
        (m = n.contextType),
        (u.context = typeof m == "object" && m !== null ? sn(m) : yr),
        (u.state = t.memoizedState),
        (m = n.getDerivedStateFromProps),
        typeof m == "function" && (Kf(t, n, m, l), (u.state = t.memoizedState)),
        typeof n.getDerivedStateFromProps == "function" ||
          typeof u.getSnapshotBeforeUpdate == "function" ||
          (typeof u.UNSAFE_componentWillMount != "function" &&
            typeof u.componentWillMount != "function") ||
          ((m = u.state),
          typeof u.componentWillMount == "function" && u.componentWillMount(),
          typeof u.UNSAFE_componentWillMount == "function" &&
            u.UNSAFE_componentWillMount(),
          m !== u.state && Jf.enqueueReplaceState(u, u.state, null),
          Ds(t, l, u, c),
          Os(),
          (u.state = t.memoizedState)),
        typeof u.componentDidMount == "function" && (t.flags |= 4194308),
        (l = !0);
    } else if (e === null) {
      u = t.stateNode;
      var v = t.memoizedProps,
        A = qi(n, v);
      u.props = A;
      var j = u.context,
        Z = n.contextType;
      (m = yr), typeof Z == "object" && Z !== null && (m = sn(Z));
      var $ = n.getDerivedStateFromProps;
      (Z =
        typeof $ == "function" ||
        typeof u.getSnapshotBeforeUpdate == "function"),
        (v = t.pendingProps !== v),
        Z ||
          (typeof u.UNSAFE_componentWillReceiveProps != "function" &&
            typeof u.componentWillReceiveProps != "function") ||
          ((v || j !== m) && um(t, u, l, m)),
        (Ql = !1);
      var k = t.memoizedState;
      (u.state = k),
        Ds(t, l, u, c),
        Os(),
        (j = t.memoizedState),
        v || k !== j || Ql
          ? (typeof $ == "function" && (Kf(t, n, $, l), (j = t.memoizedState)),
            (A = Ql || cm(t, n, A, l, k, j, m))
              ? (Z ||
                  (typeof u.UNSAFE_componentWillMount != "function" &&
                    typeof u.componentWillMount != "function") ||
                  (typeof u.componentWillMount == "function" &&
                    u.componentWillMount(),
                  typeof u.UNSAFE_componentWillMount == "function" &&
                    u.UNSAFE_componentWillMount()),
                typeof u.componentDidMount == "function" &&
                  (t.flags |= 4194308))
              : (typeof u.componentDidMount == "function" &&
                  (t.flags |= 4194308),
                (t.memoizedProps = l),
                (t.memoizedState = j)),
            (u.props = l),
            (u.state = j),
            (u.context = m),
            (l = A))
          : (typeof u.componentDidMount == "function" && (t.flags |= 4194308),
            (l = !1));
    } else {
      (u = t.stateNode),
        Af(e, t),
        (m = t.memoizedProps),
        (Z = qi(n, m)),
        (u.props = Z),
        ($ = t.pendingProps),
        (k = u.context),
        (j = n.contextType),
        (A = yr),
        typeof j == "object" && j !== null && (A = sn(j)),
        (v = n.getDerivedStateFromProps),
        (j =
          typeof v == "function" ||
          typeof u.getSnapshotBeforeUpdate == "function") ||
          (typeof u.UNSAFE_componentWillReceiveProps != "function" &&
            typeof u.componentWillReceiveProps != "function") ||
          ((m !== $ || k !== A) && um(t, u, l, A)),
        (Ql = !1),
        (k = t.memoizedState),
        (u.state = k),
        Ds(t, l, u, c),
        Os();
      var B = t.memoizedState;
      m !== $ ||
      k !== B ||
      Ql ||
      (e !== null && e.dependencies !== null && eu(e.dependencies))
        ? (typeof v == "function" && (Kf(t, n, v, l), (B = t.memoizedState)),
          (Z =
            Ql ||
            cm(t, n, Z, l, k, B, A) ||
            (e !== null && e.dependencies !== null && eu(e.dependencies)))
            ? (j ||
                (typeof u.UNSAFE_componentWillUpdate != "function" &&
                  typeof u.componentWillUpdate != "function") ||
                (typeof u.componentWillUpdate == "function" &&
                  u.componentWillUpdate(l, B, A),
                typeof u.UNSAFE_componentWillUpdate == "function" &&
                  u.UNSAFE_componentWillUpdate(l, B, A)),
              typeof u.componentDidUpdate == "function" && (t.flags |= 4),
              typeof u.getSnapshotBeforeUpdate == "function" &&
                (t.flags |= 1024))
            : (typeof u.componentDidUpdate != "function" ||
                (m === e.memoizedProps && k === e.memoizedState) ||
                (t.flags |= 4),
              typeof u.getSnapshotBeforeUpdate != "function" ||
                (m === e.memoizedProps && k === e.memoizedState) ||
                (t.flags |= 1024),
              (t.memoizedProps = l),
              (t.memoizedState = B)),
          (u.props = l),
          (u.state = B),
          (u.context = A),
          (l = Z))
        : (typeof u.componentDidUpdate != "function" ||
            (m === e.memoizedProps && k === e.memoizedState) ||
            (t.flags |= 4),
          typeof u.getSnapshotBeforeUpdate != "function" ||
            (m === e.memoizedProps && k === e.memoizedState) ||
            (t.flags |= 1024),
          (l = !1));
    }
    return (
      (u = l),
      _u(e, t),
      (l = (t.flags & 128) !== 0),
      u || l
        ? ((u = t.stateNode),
          (n =
            l && typeof n.getDerivedStateFromError != "function"
              ? null
              : u.render()),
          (t.flags |= 1),
          e !== null && l
            ? ((t.child = Bi(t, e.child, null, c)),
              (t.child = Bi(t, null, n, c)))
            : cn(e, t, n, c),
          (t.memoizedState = u.state),
          (e = t.child))
        : (e = vl(e, t, c)),
      e
    );
  }
  function Am(e, t, n, l) {
    return Di(), (t.flags |= 256), cn(e, t, n, l), t.child;
  }
  var Pf = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null,
  };
  function If(e) {
    return { baseLanes: e, cachePool: h0() };
  }
  function ed(e, t, n) {
    return (e = e !== null ? e.childLanes & ~n : 0), t && (e |= ta), e;
  }
  function zm(e, t, n) {
    var l = t.pendingProps,
      c = !1,
      u = (t.flags & 128) !== 0,
      m;
    if (
      ((m = u) ||
        (m =
          e !== null && e.memoizedState === null ? !1 : (kt.current & 2) !== 0),
      m && ((c = !0), (t.flags &= -129)),
      (m = (t.flags & 32) !== 0),
      (t.flags &= -33),
      e === null)
    ) {
      if (Ve) {
        if (
          (c ? Jl(t) : Fl(),
          (e = ht)
            ? ((e = Rg(e, Ea)),
              (e = e !== null && e.data !== "&" ? e : null),
              e !== null &&
                ((t.memoizedState = {
                  dehydrated: e,
                  treeContext: Ll !== null ? { id: Wa, overflow: $a } : null,
                  retryLane: 536870912,
                  hydrationErrors: null,
                }),
                (n = l0(e)),
                (n.return = t),
                (t.child = n),
                (rn = t),
                (ht = null)))
            : (e = null),
          e === null)
        )
          throw Vl(t);
        return Ud(e) ? (t.lanes = 32) : (t.lanes = 536870912), null;
      }
      var v = l.children;
      return (
        (l = l.fallback),
        c
          ? (Fl(),
            (c = t.mode),
            (v = bu({ mode: "hidden", children: v }, c)),
            (l = Oi(l, c, n, null)),
            (v.return = t),
            (l.return = t),
            (v.sibling = l),
            (t.child = v),
            (l = t.child),
            (l.memoizedState = If(n)),
            (l.childLanes = ed(e, m, n)),
            (t.memoizedState = Pf),
            Hs(null, l))
          : (Jl(t), td(t, v))
      );
    }
    var A = e.memoizedState;
    if (A !== null && ((v = A.dehydrated), v !== null)) {
      if (u)
        t.flags & 256
          ? (Jl(t), (t.flags &= -257), (t = nd(e, t, n)))
          : t.memoizedState !== null
          ? (Fl(), (t.child = e.child), (t.flags |= 128), (t = null))
          : (Fl(),
            (v = l.fallback),
            (c = t.mode),
            (l = bu({ mode: "visible", children: l.children }, c)),
            (v = Oi(v, c, n, null)),
            (v.flags |= 2),
            (l.return = t),
            (v.return = t),
            (l.sibling = v),
            (t.child = l),
            Bi(t, e.child, null, n),
            (l = t.child),
            (l.memoizedState = If(n)),
            (l.childLanes = ed(e, m, n)),
            (t.memoizedState = Pf),
            (t = Hs(null, l)));
      else if ((Jl(t), Ud(v))) {
        if (((m = v.nextSibling && v.nextSibling.dataset), m)) var j = m.dgst;
        (m = j),
          (l = Error(i(419))),
          (l.stack = ""),
          (l.digest = m),
          zs({ value: l, source: null, stack: null }),
          (t = nd(e, t, n));
      } else if (
        (Vt || xr(e, t, n, !1), (m = (n & e.childLanes) !== 0), Vt || m)
      ) {
        if (
          ((m = it),
          m !== null && ((l = pe(m, n)), l !== 0 && l !== A.retryLane))
        )
          throw ((A.retryLane = l), Ni(e, l), qn(m, e, l), Wf);
        kd(v) || Mu(), (t = nd(e, t, n));
      } else
        kd(v)
          ? ((t.flags |= 192), (t.child = e.child), (t = null))
          : ((e = A.treeContext),
            (ht = Ma(v.nextSibling)),
            (rn = t),
            (Ve = !0),
            (Gl = null),
            (Ea = !1),
            e !== null && s0(t, e),
            (t = td(t, l.children)),
            (t.flags |= 4096));
      return t;
    }
    return c
      ? (Fl(),
        (v = l.fallback),
        (c = t.mode),
        (A = e.child),
        (j = A.sibling),
        (l = dl(A, { mode: "hidden", children: l.children })),
        (l.subtreeFlags = A.subtreeFlags & 65011712),
        j !== null ? (v = dl(j, v)) : ((v = Oi(v, c, n, null)), (v.flags |= 2)),
        (v.return = t),
        (l.return = t),
        (l.sibling = v),
        (t.child = l),
        Hs(null, l),
        (l = t.child),
        (v = e.child.memoizedState),
        v === null
          ? (v = If(n))
          : ((c = v.cachePool),
            c !== null
              ? ((A = Lt._currentValue),
                (c = c.parent !== A ? { parent: A, pool: A } : c))
              : (c = h0()),
            (v = { baseLanes: v.baseLanes | n, cachePool: c })),
        (l.memoizedState = v),
        (l.childLanes = ed(e, m, n)),
        (t.memoizedState = Pf),
        Hs(e.child, l))
      : (Jl(t),
        (n = e.child),
        (e = n.sibling),
        (n = dl(n, { mode: "visible", children: l.children })),
        (n.return = t),
        (n.sibling = null),
        e !== null &&
          ((m = t.deletions),
          m === null ? ((t.deletions = [e]), (t.flags |= 16)) : m.push(e)),
        (t.child = n),
        (t.memoizedState = null),
        n);
  }
  function td(e, t) {
    return (
      (t = bu({ mode: "visible", children: t }, e.mode)),
      (t.return = e),
      (e.child = t)
    );
  }
  function bu(e, t) {
    return (e = $n(22, e, null, t)), (e.lanes = 0), e;
  }
  function nd(e, t, n) {
    return (
      Bi(t, e.child, null, n),
      (e = td(t, t.pendingProps.children)),
      (e.flags |= 2),
      (t.memoizedState = null),
      e
    );
  }
  function Cm(e, t, n) {
    e.lanes |= t;
    var l = e.alternate;
    l !== null && (l.lanes |= t), yf(e.return, t, n);
  }
  function ad(e, t, n, l, c, u) {
    var m = e.memoizedState;
    m === null
      ? (e.memoizedState = {
          isBackwards: t,
          rendering: null,
          renderingStartTime: 0,
          last: l,
          tail: n,
          tailMode: c,
          treeForkCount: u,
        })
      : ((m.isBackwards = t),
        (m.rendering = null),
        (m.renderingStartTime = 0),
        (m.last = l),
        (m.tail = n),
        (m.tailMode = c),
        (m.treeForkCount = u));
  }
  function Em(e, t, n) {
    var l = t.pendingProps,
      c = l.revealOrder,
      u = l.tail;
    l = l.children;
    var m = kt.current,
      v = (m & 2) !== 0;
    if (
      (v ? ((m = (m & 1) | 2), (t.flags |= 128)) : (m &= 1),
      P(kt, m),
      cn(e, t, l, n),
      (l = Ve ? As : 0),
      !v && e !== null && (e.flags & 128) !== 0)
    )
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Cm(e, n, t);
        else if (e.tag === 19) Cm(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    switch (c) {
      case "forwards":
        for (n = t.child, c = null; n !== null; )
          (e = n.alternate),
            e !== null && cu(e) === null && (c = n),
            (n = n.sibling);
        (n = c),
          n === null
            ? ((c = t.child), (t.child = null))
            : ((c = n.sibling), (n.sibling = null)),
          ad(t, !1, c, n, u, l);
        break;
      case "backwards":
      case "unstable_legacy-backwards":
        for (n = null, c = t.child, t.child = null; c !== null; ) {
          if (((e = c.alternate), e !== null && cu(e) === null)) {
            t.child = c;
            break;
          }
          (e = c.sibling), (c.sibling = n), (n = c), (c = e);
        }
        ad(t, !0, n, null, u, l);
        break;
      case "together":
        ad(t, !1, null, null, void 0, l);
        break;
      default:
        t.memoizedState = null;
    }
    return t.child;
  }
  function vl(e, t, n) {
    if (
      (e !== null && (t.dependencies = e.dependencies),
      (Pl |= t.lanes),
      (n & t.childLanes) === 0)
    )
      if (e !== null) {
        if ((xr(e, t, n, !1), (n & t.childLanes) === 0)) return null;
      } else return null;
    if (e !== null && t.child !== e.child) throw Error(i(153));
    if (t.child !== null) {
      for (
        e = t.child, n = dl(e, e.pendingProps), t.child = n, n.return = t;
        e.sibling !== null;

      )
        (e = e.sibling),
          (n = n.sibling = dl(e, e.pendingProps)),
          (n.return = t);
      n.sibling = null;
    }
    return t.child;
  }
  function ld(e, t) {
    return (e.lanes & t) !== 0
      ? !0
      : ((e = e.dependencies), !!(e !== null && eu(e)));
  }
  function $_(e, t, n) {
    switch (t.tag) {
      case 3:
        Qe(t, t.stateNode.containerInfo),
          Xl(t, Lt, e.memoizedState.cache),
          Di();
        break;
      case 27:
      case 5:
        Kt(t);
        break;
      case 4:
        Qe(t, t.stateNode.containerInfo);
        break;
      case 10:
        Xl(t, t.type, t.memoizedProps.value);
        break;
      case 31:
        if (t.memoizedState !== null) return (t.flags |= 128), Mf(t), null;
        break;
      case 13:
        var l = t.memoizedState;
        if (l !== null)
          return l.dehydrated !== null
            ? (Jl(t), (t.flags |= 128), null)
            : (n & t.child.childLanes) !== 0
            ? zm(e, t, n)
            : (Jl(t), (e = vl(e, t, n)), e !== null ? e.sibling : null);
        Jl(t);
        break;
      case 19:
        var c = (e.flags & 128) !== 0;
        if (
          ((l = (n & t.childLanes) !== 0),
          l || (xr(e, t, n, !1), (l = (n & t.childLanes) !== 0)),
          c)
        ) {
          if (l) return Em(e, t, n);
          t.flags |= 128;
        }
        if (
          ((c = t.memoizedState),
          c !== null &&
            ((c.rendering = null), (c.tail = null), (c.lastEffect = null)),
          P(kt, kt.current),
          l)
        )
          break;
        return null;
      case 22:
        return (t.lanes = 0), _m(e, t, n, t.pendingProps);
      case 24:
        Xl(t, Lt, e.memoizedState.cache);
    }
    return vl(e, t, n);
  }
  function wm(e, t, n) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps) Vt = !0;
      else {
        if (!ld(e, n) && (t.flags & 128) === 0) return (Vt = !1), $_(e, t, n);
        Vt = (e.flags & 131072) !== 0;
      }
    else (Vt = !1), Ve && (t.flags & 1048576) !== 0 && r0(t, As, t.index);
    switch (((t.lanes = 0), t.tag)) {
      case 16:
        e: {
          var l = t.pendingProps;
          if (((e = Ui(t.elementType)), (t.type = e), typeof e == "function"))
            uf(e)
              ? ((l = qi(e, l)), (t.tag = 1), (t = Tm(null, t, e, l, n)))
              : ((t.tag = 0), (t = $f(null, t, e, l, n)));
          else {
            if (e != null) {
              var c = e.$$typeof;
              if (c === U) {
                (t.tag = 11), (t = gm(null, t, e, l, n));
                break e;
              } else if (c === R) {
                (t.tag = 14), (t = ym(null, t, e, l, n));
                break e;
              }
            }
            throw ((t = ve(e) || e), Error(i(306, t, "")));
          }
        }
        return t;
      case 0:
        return $f(e, t, t.type, t.pendingProps, n);
      case 1:
        return (l = t.type), (c = qi(l, t.pendingProps)), Tm(e, t, l, c, n);
      case 3:
        e: {
          if ((Qe(t, t.stateNode.containerInfo), e === null))
            throw Error(i(387));
          l = t.pendingProps;
          var u = t.memoizedState;
          (c = u.element), Af(e, t), Ds(t, l, null, n);
          var m = t.memoizedState;
          if (
            ((l = m.cache),
            Xl(t, Lt, l),
            l !== u.cache && vf(t, [Lt], n, !0),
            Os(),
            (l = m.element),
            u.isDehydrated)
          )
            if (
              ((u = { element: l, isDehydrated: !1, cache: m.cache }),
              (t.updateQueue.baseState = u),
              (t.memoizedState = u),
              t.flags & 256)
            ) {
              t = Am(e, t, l, n);
              break e;
            } else if (l !== c) {
              (c = Aa(Error(i(424)), t)), zs(c), (t = Am(e, t, l, n));
              break e;
            } else
              for (
                e = t.stateNode.containerInfo,
                  e.nodeType === 9
                    ? (e = e.body)
                    : (e = e.nodeName === "HTML" ? e.ownerDocument.body : e),
                  ht = Ma(e.firstChild),
                  rn = t,
                  Ve = !0,
                  Gl = null,
                  Ea = !0,
                  n = _0(t, null, l, n),
                  t.child = n;
                n;

              )
                (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
          else {
            if ((Di(), l === c)) {
              t = vl(e, t, n);
              break e;
            }
            cn(e, t, l, n);
          }
          t = t.child;
        }
        return t;
      case 26:
        return (
          _u(e, t),
          e === null
            ? (n = Yg(t.type, null, t.pendingProps, null))
              ? (t.memoizedState = n)
              : Ve ||
                ((n = t.type),
                (e = t.pendingProps),
                (l = Uu(de.current).createElement(n)),
                (l[Me] = t),
                (l[Oe] = e),
                un(l, n, e),
                ke(l),
                (t.stateNode = l))
            : (t.memoizedState = Yg(
                t.type,
                e.memoizedProps,
                t.pendingProps,
                e.memoizedState
              )),
          null
        );
      case 27:
        return (
          Kt(t),
          e === null &&
            Ve &&
            ((l = t.stateNode = Ug(t.type, t.pendingProps, de.current)),
            (rn = t),
            (Ea = !0),
            (c = ht),
            ai(t.type) ? ((Hd = c), (ht = Ma(l.firstChild))) : (ht = c)),
          cn(e, t, t.pendingProps.children, n),
          _u(e, t),
          e === null && (t.flags |= 4194304),
          t.child
        );
      case 5:
        return (
          e === null &&
            Ve &&
            ((c = l = ht) &&
              ((l = Eb(l, t.type, t.pendingProps, Ea)),
              l !== null
                ? ((t.stateNode = l),
                  (rn = t),
                  (ht = Ma(l.firstChild)),
                  (Ea = !1),
                  (c = !0))
                : (c = !1)),
            c || Vl(t)),
          Kt(t),
          (c = t.type),
          (u = t.pendingProps),
          (m = e !== null ? e.memoizedProps : null),
          (l = u.children),
          Dd(c, u) ? (l = null) : m !== null && Dd(c, m) && (t.flags |= 32),
          t.memoizedState !== null &&
            ((c = Of(e, t, G_, null, null, n)), (Ps._currentValue = c)),
          _u(e, t),
          cn(e, t, l, n),
          t.child
        );
      case 6:
        return (
          e === null &&
            Ve &&
            ((e = n = ht) &&
              ((n = wb(n, t.pendingProps, Ea)),
              n !== null
                ? ((t.stateNode = n), (rn = t), (ht = null), (e = !0))
                : (e = !1)),
            e || Vl(t)),
          null
        );
      case 13:
        return zm(e, t, n);
      case 4:
        return (
          Qe(t, t.stateNode.containerInfo),
          (l = t.pendingProps),
          e === null ? (t.child = Bi(t, null, l, n)) : cn(e, t, l, n),
          t.child
        );
      case 11:
        return gm(e, t, t.type, t.pendingProps, n);
      case 7:
        return cn(e, t, t.pendingProps, n), t.child;
      case 8:
        return cn(e, t, t.pendingProps.children, n), t.child;
      case 12:
        return cn(e, t, t.pendingProps.children, n), t.child;
      case 10:
        return (
          (l = t.pendingProps),
          Xl(t, t.type, l.value),
          cn(e, t, l.children, n),
          t.child
        );
      case 9:
        return (
          (c = t.type._context),
          (l = t.pendingProps.children),
          ji(t),
          (c = sn(c)),
          (l = l(c)),
          (t.flags |= 1),
          cn(e, t, l, n),
          t.child
        );
      case 14:
        return ym(e, t, t.type, t.pendingProps, n);
      case 15:
        return vm(e, t, t.type, t.pendingProps, n);
      case 19:
        return Em(e, t, n);
      case 31:
        return W_(e, t, n);
      case 22:
        return _m(e, t, n, t.pendingProps);
      case 24:
        return (
          ji(t),
          (l = sn(Lt)),
          e === null
            ? ((c = xf()),
              c === null &&
                ((c = it),
                (u = _f()),
                (c.pooledCache = u),
                u.refCount++,
                u !== null && (c.pooledCacheLanes |= n),
                (c = u)),
              (t.memoizedState = { parent: l, cache: c }),
              Tf(t),
              Xl(t, Lt, c))
            : ((e.lanes & n) !== 0 && (Af(e, t), Ds(t, null, null, n), Os()),
              (c = e.memoizedState),
              (u = t.memoizedState),
              c.parent !== l
                ? ((c = { parent: l, cache: l }),
                  (t.memoizedState = c),
                  t.lanes === 0 &&
                    (t.memoizedState = t.updateQueue.baseState = c),
                  Xl(t, Lt, l))
                : ((l = u.cache),
                  Xl(t, Lt, l),
                  l !== c.cache && vf(t, [Lt], n, !0))),
          cn(e, t, t.pendingProps.children, n),
          t.child
        );
      case 29:
        throw t.pendingProps;
    }
    throw Error(i(156, t.tag));
  }
  function _l(e) {
    e.flags |= 4;
  }
  function id(e, t, n, l, c) {
    if (((t = (e.mode & 32) !== 0) && (t = !1), t)) {
      if (((e.flags |= 16777216), (c & 335544128) === c))
        if (e.stateNode.complete) e.flags |= 8192;
        else if (tg()) e.flags |= 8192;
        else throw ((Hi = lu), Sf);
    } else e.flags &= -16777217;
  }
  function Mm(e, t) {
    if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0)
      e.flags &= -16777217;
    else if (((e.flags |= 16777216), !Xg(t)))
      if (tg()) e.flags |= 8192;
      else throw ((Hi = lu), Sf);
  }
  function xu(e, t) {
    t !== null && (e.flags |= 4),
      e.flags & 16384 &&
        ((t = e.tag !== 22 ? Bl() : 536870912), (e.lanes |= t), (Rr |= t));
  }
  function Bs(e, t) {
    if (!Ve)
      switch (e.tailMode) {
        case "hidden":
          t = e.tail;
          for (var n = null; t !== null; )
            t.alternate !== null && (n = t), (t = t.sibling);
          n === null ? (e.tail = null) : (n.sibling = null);
          break;
        case "collapsed":
          n = e.tail;
          for (var l = null; n !== null; )
            n.alternate !== null && (l = n), (n = n.sibling);
          l === null
            ? t || e.tail === null
              ? (e.tail = null)
              : (e.tail.sibling = null)
            : (l.sibling = null);
      }
  }
  function pt(e) {
    var t = e.alternate !== null && e.alternate.child === e.child,
      n = 0,
      l = 0;
    if (t)
      for (var c = e.child; c !== null; )
        (n |= c.lanes | c.childLanes),
          (l |= c.subtreeFlags & 65011712),
          (l |= c.flags & 65011712),
          (c.return = e),
          (c = c.sibling);
    else
      for (c = e.child; c !== null; )
        (n |= c.lanes | c.childLanes),
          (l |= c.subtreeFlags),
          (l |= c.flags),
          (c.return = e),
          (c = c.sibling);
    return (e.subtreeFlags |= l), (e.childLanes = n), t;
  }
  function P_(e, t, n) {
    var l = t.pendingProps;
    switch ((hf(t), t.tag)) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return pt(t), null;
      case 1:
        return pt(t), null;
      case 3:
        return (
          (n = t.stateNode),
          (l = null),
          e !== null && (l = e.memoizedState.cache),
          t.memoizedState.cache !== l && (t.flags |= 2048),
          ml(Lt),
          Ce(),
          n.pendingContext &&
            ((n.context = n.pendingContext), (n.pendingContext = null)),
          (e === null || e.child === null) &&
            (br(t)
              ? _l(t)
              : e === null ||
                (e.memoizedState.isDehydrated && (t.flags & 256) === 0) ||
                ((t.flags |= 1024), mf())),
          pt(t),
          null
        );
      case 26:
        var c = t.type,
          u = t.memoizedState;
        return (
          e === null
            ? (_l(t),
              u !== null ? (pt(t), Mm(t, u)) : (pt(t), id(t, c, null, l, n)))
            : u
            ? u !== e.memoizedState
              ? (_l(t), pt(t), Mm(t, u))
              : (pt(t), (t.flags &= -16777217))
            : ((e = e.memoizedProps),
              e !== l && _l(t),
              pt(t),
              id(t, c, e, l, n)),
          null
        );
      case 27:
        if (
          (mt(t),
          (n = de.current),
          (c = t.type),
          e !== null && t.stateNode != null)
        )
          e.memoizedProps !== l && _l(t);
        else {
          if (!l) {
            if (t.stateNode === null) throw Error(i(166));
            return pt(t), null;
          }
          (e = ee.current),
            br(t) ? c0(t) : ((e = Ug(c, l, n)), (t.stateNode = e), _l(t));
        }
        return pt(t), null;
      case 5:
        if ((mt(t), (c = t.type), e !== null && t.stateNode != null))
          e.memoizedProps !== l && _l(t);
        else {
          if (!l) {
            if (t.stateNode === null) throw Error(i(166));
            return pt(t), null;
          }
          if (((u = ee.current), br(t))) c0(t);
          else {
            var m = Uu(de.current);
            switch (u) {
              case 1:
                u = m.createElementNS("http://www.w3.org/2000/svg", c);
                break;
              case 2:
                u = m.createElementNS("http://www.w3.org/1998/Math/MathML", c);
                break;
              default:
                switch (c) {
                  case "svg":
                    u = m.createElementNS("http://www.w3.org/2000/svg", c);
                    break;
                  case "math":
                    u = m.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      c
                    );
                    break;
                  case "script":
                    (u = m.createElement("div")),
                      (u.innerHTML = "<script></script>"),
                      (u = u.removeChild(u.firstChild));
                    break;
                  case "select":
                    (u =
                      typeof l.is == "string"
                        ? m.createElement("select", { is: l.is })
                        : m.createElement("select")),
                      l.multiple
                        ? (u.multiple = !0)
                        : l.size && (u.size = l.size);
                    break;
                  default:
                    u =
                      typeof l.is == "string"
                        ? m.createElement(c, { is: l.is })
                        : m.createElement(c);
                }
            }
            (u[Me] = t), (u[Oe] = l);
            e: for (m = t.child; m !== null; ) {
              if (m.tag === 5 || m.tag === 6) u.appendChild(m.stateNode);
              else if (m.tag !== 4 && m.tag !== 27 && m.child !== null) {
                (m.child.return = m), (m = m.child);
                continue;
              }
              if (m === t) break e;
              for (; m.sibling === null; ) {
                if (m.return === null || m.return === t) break e;
                m = m.return;
              }
              (m.sibling.return = m.return), (m = m.sibling);
            }
            t.stateNode = u;
            e: switch ((un(u, c, l), c)) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                l = !!l.autoFocus;
                break e;
              case "img":
                l = !0;
                break e;
              default:
                l = !1;
            }
            l && _l(t);
          }
        }
        return (
          pt(t),
          id(t, t.type, e === null ? null : e.memoizedProps, t.pendingProps, n),
          null
        );
      case 6:
        if (e && t.stateNode != null) e.memoizedProps !== l && _l(t);
        else {
          if (typeof l != "string" && t.stateNode === null) throw Error(i(166));
          if (((e = de.current), br(t))) {
            if (
              ((e = t.stateNode),
              (n = t.memoizedProps),
              (l = null),
              (c = rn),
              c !== null)
            )
              switch (c.tag) {
                case 27:
                case 5:
                  l = c.memoizedProps;
              }
            (e[Me] = t),
              (e = !!(
                e.nodeValue === n ||
                (l !== null && l.suppressHydrationWarning === !0) ||
                zg(e.nodeValue, n)
              )),
              e || Vl(t, !0);
          } else (e = Uu(e).createTextNode(l)), (e[Me] = t), (t.stateNode = e);
        }
        return pt(t), null;
      case 31:
        if (((n = t.memoizedState), e === null || e.memoizedState !== null)) {
          if (((l = br(t)), n !== null)) {
            if (e === null) {
              if (!l) throw Error(i(318));
              if (
                ((e = t.memoizedState),
                (e = e !== null ? e.dehydrated : null),
                !e)
              )
                throw Error(i(557));
              e[Me] = t;
            } else
              Di(),
                (t.flags & 128) === 0 && (t.memoizedState = null),
                (t.flags |= 4);
            pt(t), (e = !1);
          } else
            (n = mf()),
              e !== null &&
                e.memoizedState !== null &&
                (e.memoizedState.hydrationErrors = n),
              (e = !0);
          if (!e) return t.flags & 256 ? (In(t), t) : (In(t), null);
          if ((t.flags & 128) !== 0) throw Error(i(558));
        }
        return pt(t), null;
      case 13:
        if (
          ((l = t.memoizedState),
          e === null ||
            (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
        ) {
          if (((c = br(t)), l !== null && l.dehydrated !== null)) {
            if (e === null) {
              if (!c) throw Error(i(318));
              if (
                ((c = t.memoizedState),
                (c = c !== null ? c.dehydrated : null),
                !c)
              )
                throw Error(i(317));
              c[Me] = t;
            } else
              Di(),
                (t.flags & 128) === 0 && (t.memoizedState = null),
                (t.flags |= 4);
            pt(t), (c = !1);
          } else
            (c = mf()),
              e !== null &&
                e.memoizedState !== null &&
                (e.memoizedState.hydrationErrors = c),
              (c = !0);
          if (!c) return t.flags & 256 ? (In(t), t) : (In(t), null);
        }
        return (
          In(t),
          (t.flags & 128) !== 0
            ? ((t.lanes = n), t)
            : ((n = l !== null),
              (e = e !== null && e.memoizedState !== null),
              n &&
                ((l = t.child),
                (c = null),
                l.alternate !== null &&
                  l.alternate.memoizedState !== null &&
                  l.alternate.memoizedState.cachePool !== null &&
                  (c = l.alternate.memoizedState.cachePool.pool),
                (u = null),
                l.memoizedState !== null &&
                  l.memoizedState.cachePool !== null &&
                  (u = l.memoizedState.cachePool.pool),
                u !== c && (l.flags |= 2048)),
              n !== e && n && (t.child.flags |= 8192),
              xu(t, t.updateQueue),
              pt(t),
              null)
        );
      case 4:
        return Ce(), e === null && Ed(t.stateNode.containerInfo), pt(t), null;
      case 10:
        return ml(t.type), pt(t), null;
      case 19:
        if ((L(kt), (l = t.memoizedState), l === null)) return pt(t), null;
        if (((c = (t.flags & 128) !== 0), (u = l.rendering), u === null))
          if (c) Bs(l, !1);
          else {
            if (Ot !== 0 || (e !== null && (e.flags & 128) !== 0))
              for (e = t.child; e !== null; ) {
                if (((u = cu(e)), u !== null)) {
                  for (
                    t.flags |= 128,
                      Bs(l, !1),
                      e = u.updateQueue,
                      t.updateQueue = e,
                      xu(t, e),
                      t.subtreeFlags = 0,
                      e = n,
                      n = t.child;
                    n !== null;

                  )
                    a0(n, e), (n = n.sibling);
                  return (
                    P(kt, (kt.current & 1) | 2),
                    Ve && hl(t, l.treeForkCount),
                    t.child
                  );
                }
                e = e.sibling;
              }
            l.tail !== null &&
              Rt() > Cu &&
              ((t.flags |= 128), (c = !0), Bs(l, !1), (t.lanes = 4194304));
          }
        else {
          if (!c)
            if (((e = cu(u)), e !== null)) {
              if (
                ((t.flags |= 128),
                (c = !0),
                (e = e.updateQueue),
                (t.updateQueue = e),
                xu(t, e),
                Bs(l, !0),
                l.tail === null &&
                  l.tailMode === "hidden" &&
                  !u.alternate &&
                  !Ve)
              )
                return pt(t), null;
            } else
              2 * Rt() - l.renderingStartTime > Cu &&
                n !== 536870912 &&
                ((t.flags |= 128), (c = !0), Bs(l, !1), (t.lanes = 4194304));
          l.isBackwards
            ? ((u.sibling = t.child), (t.child = u))
            : ((e = l.last),
              e !== null ? (e.sibling = u) : (t.child = u),
              (l.last = u));
        }
        return l.tail !== null
          ? ((e = l.tail),
            (l.rendering = e),
            (l.tail = e.sibling),
            (l.renderingStartTime = Rt()),
            (e.sibling = null),
            (n = kt.current),
            P(kt, c ? (n & 1) | 2 : n & 1),
            Ve && hl(t, l.treeForkCount),
            e)
          : (pt(t), null);
      case 22:
      case 23:
        return (
          In(t),
          wf(),
          (l = t.memoizedState !== null),
          e !== null
            ? (e.memoizedState !== null) !== l && (t.flags |= 8192)
            : l && (t.flags |= 8192),
          l
            ? (n & 536870912) !== 0 &&
              (t.flags & 128) === 0 &&
              (pt(t), t.subtreeFlags & 6 && (t.flags |= 8192))
            : pt(t),
          (n = t.updateQueue),
          n !== null && xu(t, n.retryQueue),
          (n = null),
          e !== null &&
            e.memoizedState !== null &&
            e.memoizedState.cachePool !== null &&
            (n = e.memoizedState.cachePool.pool),
          (l = null),
          t.memoizedState !== null &&
            t.memoizedState.cachePool !== null &&
            (l = t.memoizedState.cachePool.pool),
          l !== n && (t.flags |= 2048),
          e !== null && L(ki),
          null
        );
      case 24:
        return (
          (n = null),
          e !== null && (n = e.memoizedState.cache),
          t.memoizedState.cache !== n && (t.flags |= 2048),
          ml(Lt),
          pt(t),
          null
        );
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(i(156, t.tag));
  }
  function I_(e, t) {
    switch ((hf(t), t.tag)) {
      case 1:
        return (
          (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 3:
        return (
          ml(Lt),
          Ce(),
          (e = t.flags),
          (e & 65536) !== 0 && (e & 128) === 0
            ? ((t.flags = (e & -65537) | 128), t)
            : null
        );
      case 26:
      case 27:
      case 5:
        return mt(t), null;
      case 31:
        if (t.memoizedState !== null) {
          if ((In(t), t.alternate === null)) throw Error(i(340));
          Di();
        }
        return (
          (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 13:
        if (
          (In(t), (e = t.memoizedState), e !== null && e.dehydrated !== null)
        ) {
          if (t.alternate === null) throw Error(i(340));
          Di();
        }
        return (
          (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 19:
        return L(kt), null;
      case 4:
        return Ce(), null;
      case 10:
        return ml(t.type), null;
      case 22:
      case 23:
        return (
          In(t),
          wf(),
          e !== null && L(ki),
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 24:
        return ml(Lt), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function Nm(e, t) {
    switch ((hf(t), t.tag)) {
      case 3:
        ml(Lt), Ce();
        break;
      case 26:
      case 27:
      case 5:
        mt(t);
        break;
      case 4:
        Ce();
        break;
      case 31:
        t.memoizedState !== null && In(t);
        break;
      case 13:
        In(t);
        break;
      case 19:
        L(kt);
        break;
      case 10:
        ml(t.type);
        break;
      case 22:
      case 23:
        In(t), wf(), e !== null && L(ki);
        break;
      case 24:
        ml(Lt);
    }
  }
  function Ys(e, t) {
    try {
      var n = t.updateQueue,
        l = n !== null ? n.lastEffect : null;
      if (l !== null) {
        var c = l.next;
        n = c;
        do {
          if ((n.tag & e) === e) {
            l = void 0;
            var u = n.create,
              m = n.inst;
            (l = u()), (m.destroy = l);
          }
          n = n.next;
        } while (n !== c);
      }
    } catch (v) {
      et(t, t.return, v);
    }
  }
  function Wl(e, t, n) {
    try {
      var l = t.updateQueue,
        c = l !== null ? l.lastEffect : null;
      if (c !== null) {
        var u = c.next;
        l = u;
        do {
          if ((l.tag & e) === e) {
            var m = l.inst,
              v = m.destroy;
            if (v !== void 0) {
              (m.destroy = void 0), (c = t);
              var A = n,
                j = v;
              try {
                j();
              } catch (Z) {
                et(c, A, Z);
              }
            }
          }
          l = l.next;
        } while (l !== u);
      }
    } catch (Z) {
      et(t, t.return, Z);
    }
  }
  function Om(e) {
    var t = e.updateQueue;
    if (t !== null) {
      var n = e.stateNode;
      try {
        x0(t, n);
      } catch (l) {
        et(e, e.return, l);
      }
    }
  }
  function Dm(e, t, n) {
    (n.props = qi(e.type, e.memoizedProps)), (n.state = e.memoizedState);
    try {
      n.componentWillUnmount();
    } catch (l) {
      et(e, t, l);
    }
  }
  function qs(e, t) {
    try {
      var n = e.ref;
      if (n !== null) {
        switch (e.tag) {
          case 26:
          case 27:
          case 5:
            var l = e.stateNode;
            break;
          case 30:
            l = e.stateNode;
            break;
          default:
            l = e.stateNode;
        }
        typeof n == "function" ? (e.refCleanup = n(l)) : (n.current = l);
      }
    } catch (c) {
      et(e, t, c);
    }
  }
  function Pa(e, t) {
    var n = e.ref,
      l = e.refCleanup;
    if (n !== null)
      if (typeof l == "function")
        try {
          l();
        } catch (c) {
          et(e, t, c);
        } finally {
          (e.refCleanup = null),
            (e = e.alternate),
            e != null && (e.refCleanup = null);
        }
      else if (typeof n == "function")
        try {
          n(null);
        } catch (c) {
          et(e, t, c);
        }
      else n.current = null;
  }
  function Rm(e) {
    var t = e.type,
      n = e.memoizedProps,
      l = e.stateNode;
    try {
      e: switch (t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          n.autoFocus && l.focus();
          break e;
        case "img":
          n.src ? (l.src = n.src) : n.srcSet && (l.srcset = n.srcSet);
      }
    } catch (c) {
      et(e, e.return, c);
    }
  }
  function rd(e, t, n) {
    try {
      var l = e.stateNode;
      xb(l, e.type, n, t), (l[Oe] = t);
    } catch (c) {
      et(e, e.return, c);
    }
  }
  function jm(e) {
    return (
      e.tag === 5 ||
      e.tag === 3 ||
      e.tag === 26 ||
      (e.tag === 27 && ai(e.type)) ||
      e.tag === 4
    );
  }
  function sd(e) {
    e: for (;;) {
      for (; e.sibling === null; ) {
        if (e.return === null || jm(e.return)) return null;
        e = e.return;
      }
      for (
        e.sibling.return = e.return, e = e.sibling;
        e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

      ) {
        if (
          (e.tag === 27 && ai(e.type)) ||
          e.flags & 2 ||
          e.child === null ||
          e.tag === 4
        )
          continue e;
        (e.child.return = e), (e = e.child);
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function cd(e, t, n) {
    var l = e.tag;
    if (l === 5 || l === 6)
      (e = e.stateNode),
        t
          ? (n.nodeType === 9
              ? n.body
              : n.nodeName === "HTML"
              ? n.ownerDocument.body
              : n
            ).insertBefore(e, t)
          : ((t =
              n.nodeType === 9
                ? n.body
                : n.nodeName === "HTML"
                ? n.ownerDocument.body
                : n),
            t.appendChild(e),
            (n = n._reactRootContainer),
            n != null || t.onclick !== null || (t.onclick = ol));
    else if (
      l !== 4 &&
      (l === 27 && ai(e.type) && ((n = e.stateNode), (t = null)),
      (e = e.child),
      e !== null)
    )
      for (cd(e, t, n), e = e.sibling; e !== null; )
        cd(e, t, n), (e = e.sibling);
  }
  function Su(e, t, n) {
    var l = e.tag;
    if (l === 5 || l === 6)
      (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (
      l !== 4 &&
      (l === 27 && ai(e.type) && (n = e.stateNode), (e = e.child), e !== null)
    )
      for (Su(e, t, n), e = e.sibling; e !== null; )
        Su(e, t, n), (e = e.sibling);
  }
  function km(e) {
    var t = e.stateNode,
      n = e.memoizedProps;
    try {
      for (var l = e.type, c = t.attributes; c.length; )
        t.removeAttributeNode(c[0]);
      un(t, l, n), (t[Me] = e), (t[Oe] = n);
    } catch (u) {
      et(e, e.return, u);
    }
  }
  var bl = !1,
    Xt = !1,
    ud = !1,
    Um = typeof WeakSet == "function" ? WeakSet : Set,
    en = null;
  function eb(e, t) {
    if (((e = e.containerInfo), (Nd = Vu), (e = Jp(e)), tf(e))) {
      if ("selectionStart" in e)
        var n = { start: e.selectionStart, end: e.selectionEnd };
      else
        e: {
          n = ((n = e.ownerDocument) && n.defaultView) || window;
          var l = n.getSelection && n.getSelection();
          if (l && l.rangeCount !== 0) {
            n = l.anchorNode;
            var c = l.anchorOffset,
              u = l.focusNode;
            l = l.focusOffset;
            try {
              n.nodeType, u.nodeType;
            } catch {
              n = null;
              break e;
            }
            var m = 0,
              v = -1,
              A = -1,
              j = 0,
              Z = 0,
              $ = e,
              k = null;
            t: for (;;) {
              for (
                var B;
                $ !== n || (c !== 0 && $.nodeType !== 3) || (v = m + c),
                  $ !== u || (l !== 0 && $.nodeType !== 3) || (A = m + l),
                  $.nodeType === 3 && (m += $.nodeValue.length),
                  (B = $.firstChild) !== null;

              )
                (k = $), ($ = B);
              for (;;) {
                if ($ === e) break t;
                if (
                  (k === n && ++j === c && (v = m),
                  k === u && ++Z === l && (A = m),
                  (B = $.nextSibling) !== null)
                )
                  break;
                ($ = k), (k = $.parentNode);
              }
              $ = B;
            }
            n = v === -1 || A === -1 ? null : { start: v, end: A };
          } else n = null;
        }
      n = n || { start: 0, end: 0 };
    } else n = null;
    for (
      Od = { focusedElem: e, selectionRange: n }, Vu = !1, en = t;
      en !== null;

    )
      if (
        ((t = en), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null)
      )
        (e.return = t), (en = e);
      else
        for (; en !== null; ) {
          switch (((t = en), (u = t.alternate), (e = t.flags), t.tag)) {
            case 0:
              if (
                (e & 4) !== 0 &&
                ((e = t.updateQueue),
                (e = e !== null ? e.events : null),
                e !== null)
              )
                for (n = 0; n < e.length; n++)
                  (c = e[n]), (c.ref.impl = c.nextImpl);
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((e & 1024) !== 0 && u !== null) {
                (e = void 0),
                  (n = t),
                  (c = u.memoizedProps),
                  (u = u.memoizedState),
                  (l = n.stateNode);
                try {
                  var ie = qi(n.type, c);
                  (e = l.getSnapshotBeforeUpdate(ie, u)),
                    (l.__reactInternalSnapshotBeforeUpdate = e);
                } catch (_e) {
                  et(n, n.return, _e);
                }
              }
              break;
            case 3:
              if ((e & 1024) !== 0) {
                if (
                  ((e = t.stateNode.containerInfo), (n = e.nodeType), n === 9)
                )
                  jd(e);
                else if (n === 1)
                  switch (e.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      jd(e);
                      break;
                    default:
                      e.textContent = "";
                  }
              }
              break;
            case 5:
            case 26:
            case 27:
            case 6:
            case 4:
            case 17:
              break;
            default:
              if ((e & 1024) !== 0) throw Error(i(163));
          }
          if (((e = t.sibling), e !== null)) {
            (e.return = t.return), (en = e);
            break;
          }
          en = t.return;
        }
  }
  function Hm(e, t, n) {
    var l = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 15:
        Sl(e, n), l & 4 && Ys(5, n);
        break;
      case 1:
        if ((Sl(e, n), l & 4))
          if (((e = n.stateNode), t === null))
            try {
              e.componentDidMount();
            } catch (m) {
              et(n, n.return, m);
            }
          else {
            var c = qi(n.type, t.memoizedProps);
            t = t.memoizedState;
            try {
              e.componentDidUpdate(c, t, e.__reactInternalSnapshotBeforeUpdate);
            } catch (m) {
              et(n, n.return, m);
            }
          }
        l & 64 && Om(n), l & 512 && qs(n, n.return);
        break;
      case 3:
        if ((Sl(e, n), l & 64 && ((e = n.updateQueue), e !== null))) {
          if (((t = null), n.child !== null))
            switch (n.child.tag) {
              case 27:
              case 5:
                t = n.child.stateNode;
                break;
              case 1:
                t = n.child.stateNode;
            }
          try {
            x0(e, t);
          } catch (m) {
            et(n, n.return, m);
          }
        }
        break;
      case 27:
        t === null && l & 4 && km(n);
      case 26:
      case 5:
        Sl(e, n), t === null && l & 4 && Rm(n), l & 512 && qs(n, n.return);
        break;
      case 12:
        Sl(e, n);
        break;
      case 31:
        Sl(e, n), l & 4 && qm(e, n);
        break;
      case 13:
        Sl(e, n),
          l & 4 && Lm(e, n),
          l & 64 &&
            ((e = n.memoizedState),
            e !== null &&
              ((e = e.dehydrated),
              e !== null && ((n = ub.bind(null, n)), Mb(e, n))));
        break;
      case 22:
        if (((l = n.memoizedState !== null || bl), !l)) {
          (t = (t !== null && t.memoizedState !== null) || Xt), (c = bl);
          var u = Xt;
          (bl = l),
            (Xt = t) && !u ? Tl(e, n, (n.subtreeFlags & 8772) !== 0) : Sl(e, n),
            (bl = c),
            (Xt = u);
        }
        break;
      case 30:
        break;
      default:
        Sl(e, n);
    }
  }
  function Bm(e) {
    var t = e.alternate;
    t !== null && ((e.alternate = null), Bm(t)),
      (e.child = null),
      (e.deletions = null),
      (e.sibling = null),
      e.tag === 5 && ((t = e.stateNode), t !== null && jt(t)),
      (e.stateNode = null),
      (e.return = null),
      (e.dependencies = null),
      (e.memoizedProps = null),
      (e.memoizedState = null),
      (e.pendingProps = null),
      (e.stateNode = null),
      (e.updateQueue = null);
  }
  var _t = null,
    Un = !1;
  function xl(e, t, n) {
    for (n = n.child; n !== null; ) Ym(e, t, n), (n = n.sibling);
  }
  function Ym(e, t, n) {
    if (xt && typeof xt.onCommitFiberUnmount == "function")
      try {
        xt.onCommitFiberUnmount(Qa, n);
      } catch {}
    switch (n.tag) {
      case 26:
        Xt || Pa(n, t),
          xl(e, t, n),
          n.memoizedState
            ? n.memoizedState.count--
            : n.stateNode && ((n = n.stateNode), n.parentNode.removeChild(n));
        break;
      case 27:
        Xt || Pa(n, t);
        var l = _t,
          c = Un;
        ai(n.type) && ((_t = n.stateNode), (Un = !1)),
          xl(e, t, n),
          Fs(n.stateNode),
          (_t = l),
          (Un = c);
        break;
      case 5:
        Xt || Pa(n, t);
      case 6:
        if (
          ((l = _t),
          (c = Un),
          (_t = null),
          xl(e, t, n),
          (_t = l),
          (Un = c),
          _t !== null)
        )
          if (Un)
            try {
              (_t.nodeType === 9
                ? _t.body
                : _t.nodeName === "HTML"
                ? _t.ownerDocument.body
                : _t
              ).removeChild(n.stateNode);
            } catch (u) {
              et(n, t, u);
            }
          else
            try {
              _t.removeChild(n.stateNode);
            } catch (u) {
              et(n, t, u);
            }
        break;
      case 18:
        _t !== null &&
          (Un
            ? ((e = _t),
              Og(
                e.nodeType === 9
                  ? e.body
                  : e.nodeName === "HTML"
                  ? e.ownerDocument.body
                  : e,
                n.stateNode
              ),
              Lr(e))
            : Og(_t, n.stateNode));
        break;
      case 4:
        (l = _t),
          (c = Un),
          (_t = n.stateNode.containerInfo),
          (Un = !0),
          xl(e, t, n),
          (_t = l),
          (Un = c);
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        Wl(2, n, t), Xt || Wl(4, n, t), xl(e, t, n);
        break;
      case 1:
        Xt ||
          (Pa(n, t),
          (l = n.stateNode),
          typeof l.componentWillUnmount == "function" && Dm(n, t, l)),
          xl(e, t, n);
        break;
      case 21:
        xl(e, t, n);
        break;
      case 22:
        (Xt = (l = Xt) || n.memoizedState !== null), xl(e, t, n), (Xt = l);
        break;
      default:
        xl(e, t, n);
    }
  }
  function qm(e, t) {
    if (
      t.memoizedState === null &&
      ((e = t.alternate), e !== null && ((e = e.memoizedState), e !== null))
    ) {
      e = e.dehydrated;
      try {
        Lr(e);
      } catch (n) {
        et(t, t.return, n);
      }
    }
  }
  function Lm(e, t) {
    if (
      t.memoizedState === null &&
      ((e = t.alternate),
      e !== null &&
        ((e = e.memoizedState), e !== null && ((e = e.dehydrated), e !== null)))
    )
      try {
        Lr(e);
      } catch (n) {
        et(t, t.return, n);
      }
  }
  function tb(e) {
    switch (e.tag) {
      case 31:
      case 13:
      case 19:
        var t = e.stateNode;
        return t === null && (t = e.stateNode = new Um()), t;
      case 22:
        return (
          (e = e.stateNode),
          (t = e._retryCache),
          t === null && (t = e._retryCache = new Um()),
          t
        );
      default:
        throw Error(i(435, e.tag));
    }
  }
  function Tu(e, t) {
    var n = tb(e);
    t.forEach(function (l) {
      if (!n.has(l)) {
        n.add(l);
        var c = ob.bind(null, e, l);
        l.then(c, c);
      }
    });
  }
  function Hn(e, t) {
    var n = t.deletions;
    if (n !== null)
      for (var l = 0; l < n.length; l++) {
        var c = n[l],
          u = e,
          m = t,
          v = m;
        e: for (; v !== null; ) {
          switch (v.tag) {
            case 27:
              if (ai(v.type)) {
                (_t = v.stateNode), (Un = !1);
                break e;
              }
              break;
            case 5:
              (_t = v.stateNode), (Un = !1);
              break e;
            case 3:
            case 4:
              (_t = v.stateNode.containerInfo), (Un = !0);
              break e;
          }
          v = v.return;
        }
        if (_t === null) throw Error(i(160));
        Ym(u, m, c),
          (_t = null),
          (Un = !1),
          (u = c.alternate),
          u !== null && (u.return = null),
          (c.return = null);
      }
    if (t.subtreeFlags & 13886)
      for (t = t.child; t !== null; ) Gm(t, e), (t = t.sibling);
  }
  var La = null;
  function Gm(e, t) {
    var n = e.alternate,
      l = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        Hn(t, e),
          Bn(e),
          l & 4 && (Wl(3, e, e.return), Ys(3, e), Wl(5, e, e.return));
        break;
      case 1:
        Hn(t, e),
          Bn(e),
          l & 512 && (Xt || n === null || Pa(n, n.return)),
          l & 64 &&
            bl &&
            ((e = e.updateQueue),
            e !== null &&
              ((l = e.callbacks),
              l !== null &&
                ((n = e.shared.hiddenCallbacks),
                (e.shared.hiddenCallbacks = n === null ? l : n.concat(l)))));
        break;
      case 26:
        var c = La;
        if (
          (Hn(t, e),
          Bn(e),
          l & 512 && (Xt || n === null || Pa(n, n.return)),
          l & 4)
        ) {
          var u = n !== null ? n.memoizedState : null;
          if (((l = e.memoizedState), n === null))
            if (l === null)
              if (e.stateNode === null) {
                e: {
                  (l = e.type),
                    (n = e.memoizedProps),
                    (c = c.ownerDocument || c);
                  t: switch (l) {
                    case "title":
                      (u = c.getElementsByTagName("title")[0]),
                        (!u ||
                          u[St] ||
                          u[Me] ||
                          u.namespaceURI === "http://www.w3.org/2000/svg" ||
                          u.hasAttribute("itemprop")) &&
                          ((u = c.createElement(l)),
                          c.head.insertBefore(
                            u,
                            c.querySelector("head > title")
                          )),
                        un(u, l, n),
                        (u[Me] = e),
                        ke(u),
                        (l = u);
                      break e;
                    case "link":
                      var m = Gg("link", "href", c).get(l + (n.href || ""));
                      if (m) {
                        for (var v = 0; v < m.length; v++)
                          if (
                            ((u = m[v]),
                            u.getAttribute("href") ===
                              (n.href == null || n.href === ""
                                ? null
                                : n.href) &&
                              u.getAttribute("rel") ===
                                (n.rel == null ? null : n.rel) &&
                              u.getAttribute("title") ===
                                (n.title == null ? null : n.title) &&
                              u.getAttribute("crossorigin") ===
                                (n.crossOrigin == null ? null : n.crossOrigin))
                          ) {
                            m.splice(v, 1);
                            break t;
                          }
                      }
                      (u = c.createElement(l)),
                        un(u, l, n),
                        c.head.appendChild(u);
                      break;
                    case "meta":
                      if (
                        (m = Gg("meta", "content", c).get(
                          l + (n.content || "")
                        ))
                      ) {
                        for (v = 0; v < m.length; v++)
                          if (
                            ((u = m[v]),
                            u.getAttribute("content") ===
                              (n.content == null ? null : "" + n.content) &&
                              u.getAttribute("name") ===
                                (n.name == null ? null : n.name) &&
                              u.getAttribute("property") ===
                                (n.property == null ? null : n.property) &&
                              u.getAttribute("http-equiv") ===
                                (n.httpEquiv == null ? null : n.httpEquiv) &&
                              u.getAttribute("charset") ===
                                (n.charSet == null ? null : n.charSet))
                          ) {
                            m.splice(v, 1);
                            break t;
                          }
                      }
                      (u = c.createElement(l)),
                        un(u, l, n),
                        c.head.appendChild(u);
                      break;
                    default:
                      throw Error(i(468, l));
                  }
                  (u[Me] = e), ke(u), (l = u);
                }
                e.stateNode = l;
              } else Vg(c, e.type, e.stateNode);
            else e.stateNode = Lg(c, l, e.memoizedProps);
          else
            u !== l
              ? (u === null
                  ? n.stateNode !== null &&
                    ((n = n.stateNode), n.parentNode.removeChild(n))
                  : u.count--,
                l === null
                  ? Vg(c, e.type, e.stateNode)
                  : Lg(c, l, e.memoizedProps))
              : l === null &&
                e.stateNode !== null &&
                rd(e, e.memoizedProps, n.memoizedProps);
        }
        break;
      case 27:
        Hn(t, e),
          Bn(e),
          l & 512 && (Xt || n === null || Pa(n, n.return)),
          n !== null && l & 4 && rd(e, e.memoizedProps, n.memoizedProps);
        break;
      case 5:
        if (
          (Hn(t, e),
          Bn(e),
          l & 512 && (Xt || n === null || Pa(n, n.return)),
          e.flags & 32)
        ) {
          c = e.stateNode;
          try {
            or(c, "");
          } catch (ie) {
            et(e, e.return, ie);
          }
        }
        l & 4 &&
          e.stateNode != null &&
          ((c = e.memoizedProps), rd(e, c, n !== null ? n.memoizedProps : c)),
          l & 1024 && (ud = !0);
        break;
      case 6:
        if ((Hn(t, e), Bn(e), l & 4)) {
          if (e.stateNode === null) throw Error(i(162));
          (l = e.memoizedProps), (n = e.stateNode);
          try {
            n.nodeValue = l;
          } catch (ie) {
            et(e, e.return, ie);
          }
        }
        break;
      case 3:
        if (
          ((Yu = null),
          (c = La),
          (La = Hu(t.containerInfo)),
          Hn(t, e),
          (La = c),
          Bn(e),
          l & 4 && n !== null && n.memoizedState.isDehydrated)
        )
          try {
            Lr(t.containerInfo);
          } catch (ie) {
            et(e, e.return, ie);
          }
        ud && ((ud = !1), Vm(e));
        break;
      case 4:
        (l = La),
          (La = Hu(e.stateNode.containerInfo)),
          Hn(t, e),
          Bn(e),
          (La = l);
        break;
      case 12:
        Hn(t, e), Bn(e);
        break;
      case 31:
        Hn(t, e),
          Bn(e),
          l & 4 &&
            ((l = e.updateQueue),
            l !== null && ((e.updateQueue = null), Tu(e, l)));
        break;
      case 13:
        Hn(t, e),
          Bn(e),
          e.child.flags & 8192 &&
            (e.memoizedState !== null) !=
              (n !== null && n.memoizedState !== null) &&
            (zu = Rt()),
          l & 4 &&
            ((l = e.updateQueue),
            l !== null && ((e.updateQueue = null), Tu(e, l)));
        break;
      case 22:
        c = e.memoizedState !== null;
        var A = n !== null && n.memoizedState !== null,
          j = bl,
          Z = Xt;
        if (
          ((bl = j || c),
          (Xt = Z || A),
          Hn(t, e),
          (Xt = Z),
          (bl = j),
          Bn(e),
          l & 8192)
        )
          e: for (
            t = e.stateNode,
              t._visibility = c ? t._visibility & -2 : t._visibility | 1,
              c && (n === null || A || bl || Xt || Li(e)),
              n = null,
              t = e;
            ;

          ) {
            if (t.tag === 5 || t.tag === 26) {
              if (n === null) {
                A = n = t;
                try {
                  if (((u = A.stateNode), c))
                    (m = u.style),
                      typeof m.setProperty == "function"
                        ? m.setProperty("display", "none", "important")
                        : (m.display = "none");
                  else {
                    v = A.stateNode;
                    var $ = A.memoizedProps.style,
                      k =
                        $ != null && $.hasOwnProperty("display")
                          ? $.display
                          : null;
                    v.style.display =
                      k == null || typeof k == "boolean" ? "" : ("" + k).trim();
                  }
                } catch (ie) {
                  et(A, A.return, ie);
                }
              }
            } else if (t.tag === 6) {
              if (n === null) {
                A = t;
                try {
                  A.stateNode.nodeValue = c ? "" : A.memoizedProps;
                } catch (ie) {
                  et(A, A.return, ie);
                }
              }
            } else if (t.tag === 18) {
              if (n === null) {
                A = t;
                try {
                  var B = A.stateNode;
                  c ? Dg(B, !0) : Dg(A.stateNode, !1);
                } catch (ie) {
                  et(A, A.return, ie);
                }
              }
            } else if (
              ((t.tag !== 22 && t.tag !== 23) ||
                t.memoizedState === null ||
                t === e) &&
              t.child !== null
            ) {
              (t.child.return = t), (t = t.child);
              continue;
            }
            if (t === e) break e;
            for (; t.sibling === null; ) {
              if (t.return === null || t.return === e) break e;
              n === t && (n = null), (t = t.return);
            }
            n === t && (n = null),
              (t.sibling.return = t.return),
              (t = t.sibling);
          }
        l & 4 &&
          ((l = e.updateQueue),
          l !== null &&
            ((n = l.retryQueue),
            n !== null && ((l.retryQueue = null), Tu(e, n))));
        break;
      case 19:
        Hn(t, e),
          Bn(e),
          l & 4 &&
            ((l = e.updateQueue),
            l !== null && ((e.updateQueue = null), Tu(e, l)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        Hn(t, e), Bn(e);
    }
  }
  function Bn(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        for (var n, l = e.return; l !== null; ) {
          if (jm(l)) {
            n = l;
            break;
          }
          l = l.return;
        }
        if (n == null) throw Error(i(160));
        switch (n.tag) {
          case 27:
            var c = n.stateNode,
              u = sd(e);
            Su(e, u, c);
            break;
          case 5:
            var m = n.stateNode;
            n.flags & 32 && (or(m, ""), (n.flags &= -33));
            var v = sd(e);
            Su(e, v, m);
            break;
          case 3:
          case 4:
            var A = n.stateNode.containerInfo,
              j = sd(e);
            cd(e, j, A);
            break;
          default:
            throw Error(i(161));
        }
      } catch (Z) {
        et(e, e.return, Z);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function Vm(e) {
    if (e.subtreeFlags & 1024)
      for (e = e.child; e !== null; ) {
        var t = e;
        Vm(t),
          t.tag === 5 && t.flags & 1024 && t.stateNode.reset(),
          (e = e.sibling);
      }
  }
  function Sl(e, t) {
    if (t.subtreeFlags & 8772)
      for (t = t.child; t !== null; ) Hm(e, t.alternate, t), (t = t.sibling);
  }
  function Li(e) {
    for (e = e.child; e !== null; ) {
      var t = e;
      switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          Wl(4, t, t.return), Li(t);
          break;
        case 1:
          Pa(t, t.return);
          var n = t.stateNode;
          typeof n.componentWillUnmount == "function" && Dm(t, t.return, n),
            Li(t);
          break;
        case 27:
          Fs(t.stateNode);
        case 26:
        case 5:
          Pa(t, t.return), Li(t);
          break;
        case 22:
          t.memoizedState === null && Li(t);
          break;
        case 30:
          Li(t);
          break;
        default:
          Li(t);
      }
      e = e.sibling;
    }
  }
  function Tl(e, t, n) {
    for (n = n && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null; ) {
      var l = t.alternate,
        c = e,
        u = t,
        m = u.flags;
      switch (u.tag) {
        case 0:
        case 11:
        case 15:
          Tl(c, u, n), Ys(4, u);
          break;
        case 1:
          if (
            (Tl(c, u, n),
            (l = u),
            (c = l.stateNode),
            typeof c.componentDidMount == "function")
          )
            try {
              c.componentDidMount();
            } catch (j) {
              et(l, l.return, j);
            }
          if (((l = u), (c = l.updateQueue), c !== null)) {
            var v = l.stateNode;
            try {
              var A = c.shared.hiddenCallbacks;
              if (A !== null)
                for (c.shared.hiddenCallbacks = null, c = 0; c < A.length; c++)
                  b0(A[c], v);
            } catch (j) {
              et(l, l.return, j);
            }
          }
          n && m & 64 && Om(u), qs(u, u.return);
          break;
        case 27:
          km(u);
        case 26:
        case 5:
          Tl(c, u, n), n && l === null && m & 4 && Rm(u), qs(u, u.return);
          break;
        case 12:
          Tl(c, u, n);
          break;
        case 31:
          Tl(c, u, n), n && m & 4 && qm(c, u);
          break;
        case 13:
          Tl(c, u, n), n && m & 4 && Lm(c, u);
          break;
        case 22:
          u.memoizedState === null && Tl(c, u, n), qs(u, u.return);
          break;
        case 30:
          break;
        default:
          Tl(c, u, n);
      }
      t = t.sibling;
    }
  }
  function od(e, t) {
    var n = null;
    e !== null &&
      e.memoizedState !== null &&
      e.memoizedState.cachePool !== null &&
      (n = e.memoizedState.cachePool.pool),
      (e = null),
      t.memoizedState !== null &&
        t.memoizedState.cachePool !== null &&
        (e = t.memoizedState.cachePool.pool),
      e !== n && (e != null && e.refCount++, n != null && Cs(n));
  }
  function fd(e, t) {
    (e = null),
      t.alternate !== null && (e = t.alternate.memoizedState.cache),
      (t = t.memoizedState.cache),
      t !== e && (t.refCount++, e != null && Cs(e));
  }
  function Ga(e, t, n, l) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) Xm(e, t, n, l), (t = t.sibling);
  }
  function Xm(e, t, n, l) {
    var c = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        Ga(e, t, n, l), c & 2048 && Ys(9, t);
        break;
      case 1:
        Ga(e, t, n, l);
        break;
      case 3:
        Ga(e, t, n, l),
          c & 2048 &&
            ((e = null),
            t.alternate !== null && (e = t.alternate.memoizedState.cache),
            (t = t.memoizedState.cache),
            t !== e && (t.refCount++, e != null && Cs(e)));
        break;
      case 12:
        if (c & 2048) {
          Ga(e, t, n, l), (e = t.stateNode);
          try {
            var u = t.memoizedProps,
              m = u.id,
              v = u.onPostCommit;
            typeof v == "function" &&
              v(
                m,
                t.alternate === null ? "mount" : "update",
                e.passiveEffectDuration,
                -0
              );
          } catch (A) {
            et(t, t.return, A);
          }
        } else Ga(e, t, n, l);
        break;
      case 31:
        Ga(e, t, n, l);
        break;
      case 13:
        Ga(e, t, n, l);
        break;
      case 23:
        break;
      case 22:
        (u = t.stateNode),
          (m = t.alternate),
          t.memoizedState !== null
            ? u._visibility & 2
              ? Ga(e, t, n, l)
              : Ls(e, t)
            : u._visibility & 2
            ? Ga(e, t, n, l)
            : ((u._visibility |= 2),
              Nr(e, t, n, l, (t.subtreeFlags & 10256) !== 0 || !1)),
          c & 2048 && od(m, t);
        break;
      case 24:
        Ga(e, t, n, l), c & 2048 && fd(t.alternate, t);
        break;
      default:
        Ga(e, t, n, l);
    }
  }
  function Nr(e, t, n, l, c) {
    for (
      c = c && ((t.subtreeFlags & 10256) !== 0 || !1), t = t.child;
      t !== null;

    ) {
      var u = e,
        m = t,
        v = n,
        A = l,
        j = m.flags;
      switch (m.tag) {
        case 0:
        case 11:
        case 15:
          Nr(u, m, v, A, c), Ys(8, m);
          break;
        case 23:
          break;
        case 22:
          var Z = m.stateNode;
          m.memoizedState !== null
            ? Z._visibility & 2
              ? Nr(u, m, v, A, c)
              : Ls(u, m)
            : ((Z._visibility |= 2), Nr(u, m, v, A, c)),
            c && j & 2048 && od(m.alternate, m);
          break;
        case 24:
          Nr(u, m, v, A, c), c && j & 2048 && fd(m.alternate, m);
          break;
        default:
          Nr(u, m, v, A, c);
      }
      t = t.sibling;
    }
  }
  function Ls(e, t) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) {
        var n = e,
          l = t,
          c = l.flags;
        switch (l.tag) {
          case 22:
            Ls(n, l), c & 2048 && od(l.alternate, l);
            break;
          case 24:
            Ls(n, l), c & 2048 && fd(l.alternate, l);
            break;
          default:
            Ls(n, l);
        }
        t = t.sibling;
      }
  }
  var Gs = 8192;
  function Or(e, t, n) {
    if (e.subtreeFlags & Gs)
      for (e = e.child; e !== null; ) Qm(e, t, n), (e = e.sibling);
  }
  function Qm(e, t, n) {
    switch (e.tag) {
      case 26:
        Or(e, t, n),
          e.flags & Gs &&
            e.memoizedState !== null &&
            Lb(n, La, e.memoizedState, e.memoizedProps);
        break;
      case 5:
        Or(e, t, n);
        break;
      case 3:
      case 4:
        var l = La;
        (La = Hu(e.stateNode.containerInfo)), Or(e, t, n), (La = l);
        break;
      case 22:
        e.memoizedState === null &&
          ((l = e.alternate),
          l !== null && l.memoizedState !== null
            ? ((l = Gs), (Gs = 16777216), Or(e, t, n), (Gs = l))
            : Or(e, t, n));
        break;
      default:
        Or(e, t, n);
    }
  }
  function Zm(e) {
    var t = e.alternate;
    if (t !== null && ((e = t.child), e !== null)) {
      t.child = null;
      do (t = e.sibling), (e.sibling = null), (e = t);
      while (e !== null);
    }
  }
  function Vs(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var n = 0; n < t.length; n++) {
          var l = t[n];
          (en = l), Jm(l, e);
        }
      Zm(e);
    }
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; ) Km(e), (e = e.sibling);
  }
  function Km(e) {
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        Vs(e), e.flags & 2048 && Wl(9, e, e.return);
        break;
      case 3:
        Vs(e);
        break;
      case 12:
        Vs(e);
        break;
      case 22:
        var t = e.stateNode;
        e.memoizedState !== null &&
        t._visibility & 2 &&
        (e.return === null || e.return.tag !== 13)
          ? ((t._visibility &= -3), Au(e))
          : Vs(e);
        break;
      default:
        Vs(e);
    }
  }
  function Au(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var n = 0; n < t.length; n++) {
          var l = t[n];
          (en = l), Jm(l, e);
        }
      Zm(e);
    }
    for (e = e.child; e !== null; ) {
      switch (((t = e), t.tag)) {
        case 0:
        case 11:
        case 15:
          Wl(8, t, t.return), Au(t);
          break;
        case 22:
          (n = t.stateNode),
            n._visibility & 2 && ((n._visibility &= -3), Au(t));
          break;
        default:
          Au(t);
      }
      e = e.sibling;
    }
  }
  function Jm(e, t) {
    for (; en !== null; ) {
      var n = en;
      switch (n.tag) {
        case 0:
        case 11:
        case 15:
          Wl(8, n, t);
          break;
        case 23:
        case 22:
          if (n.memoizedState !== null && n.memoizedState.cachePool !== null) {
            var l = n.memoizedState.cachePool.pool;
            l != null && l.refCount++;
          }
          break;
        case 24:
          Cs(n.memoizedState.cache);
      }
      if (((l = n.child), l !== null)) (l.return = n), (en = l);
      else
        e: for (n = e; en !== null; ) {
          l = en;
          var c = l.sibling,
            u = l.return;
          if ((Bm(l), l === n)) {
            en = null;
            break e;
          }
          if (c !== null) {
            (c.return = u), (en = c);
            break e;
          }
          en = u;
        }
    }
  }
  var nb = {
      getCacheForType: function (e) {
        var t = sn(Lt),
          n = t.data.get(e);
        return n === void 0 && ((n = e()), t.data.set(e, n)), n;
      },
      cacheSignal: function () {
        return sn(Lt).controller.signal;
      },
    },
    ab = typeof WeakMap == "function" ? WeakMap : Map,
    We = 0,
    it = null,
    Be = null,
    Le = 0,
    Ie = 0,
    ea = null,
    $l = !1,
    Dr = !1,
    dd = !1,
    Al = 0,
    Ot = 0,
    Pl = 0,
    Gi = 0,
    hd = 0,
    ta = 0,
    Rr = 0,
    Xs = null,
    Yn = null,
    pd = !1,
    zu = 0,
    Fm = 0,
    Cu = 1 / 0,
    Eu = null,
    Il = null,
    Ft = 0,
    ei = null,
    jr = null,
    zl = 0,
    md = 0,
    gd = null,
    Wm = null,
    Qs = 0,
    yd = null;
  function na() {
    return (We & 2) !== 0 && Le !== 0 ? Le & -Le : O.T !== null ? Td() : je();
  }
  function $m() {
    if (ta === 0)
      if ((Le & 536870912) === 0 || Ve) {
        var e = pn;
        (pn <<= 1), (pn & 3932160) === 0 && (pn = 262144), (ta = e);
      } else ta = 536870912;
    return (e = Pn.current), e !== null && (e.flags |= 32), ta;
  }
  function qn(e, t, n) {
    ((e === it && (Ie === 2 || Ie === 9)) || e.cancelPendingCommit !== null) &&
      (kr(e, 0), ti(e, Le, ta, !1)),
      he(e, n),
      ((We & 2) === 0 || e !== it) &&
        (e === it &&
          ((We & 2) === 0 && (Gi |= n), Ot === 4 && ti(e, Le, ta, !1)),
        Ia(e));
  }
  function Pm(e, t, n) {
    if ((We & 6) !== 0) throw Error(i(327));
    var l = (!n && (t & 127) === 0 && (t & e.expiredLanes) === 0) || va(e, t),
      c = l ? rb(e, t) : _d(e, t, !0),
      u = l;
    do {
      if (c === 0) {
        Dr && !l && ti(e, t, 0, !1);
        break;
      } else {
        if (((n = e.current.alternate), u && !lb(n))) {
          (c = _d(e, t, !1)), (u = !1);
          continue;
        }
        if (c === 2) {
          if (((u = t), e.errorRecoveryDisabledLanes & u)) var m = 0;
          else
            (m = e.pendingLanes & -536870913),
              (m = m !== 0 ? m : m & 536870912 ? 536870912 : 0);
          if (m !== 0) {
            t = m;
            e: {
              var v = e;
              c = Xs;
              var A = v.current.memoizedState.isDehydrated;
              if ((A && (kr(v, m).flags |= 256), (m = _d(v, m, !1)), m !== 2)) {
                if (dd && !A) {
                  (v.errorRecoveryDisabledLanes |= u), (Gi |= u), (c = 4);
                  break e;
                }
                (u = Yn),
                  (Yn = c),
                  u !== null && (Yn === null ? (Yn = u) : Yn.push.apply(Yn, u));
              }
              c = m;
            }
            if (((u = !1), c !== 2)) continue;
          }
        }
        if (c === 1) {
          kr(e, 0), ti(e, t, 0, !0);
          break;
        }
        e: {
          switch (((l = e), (u = c), u)) {
            case 0:
            case 1:
              throw Error(i(345));
            case 4:
              if ((t & 4194048) !== t) break;
            case 6:
              ti(l, t, ta, !$l);
              break e;
            case 2:
              Yn = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(i(329));
          }
          if ((t & 62914560) === t && ((c = zu + 300 - Rt()), 10 < c)) {
            if ((ti(l, t, ta, !$l), ya(l, 0, !0) !== 0)) break e;
            (zl = t),
              (l.timeoutHandle = Mg(
                Im.bind(
                  null,
                  l,
                  n,
                  Yn,
                  Eu,
                  pd,
                  t,
                  ta,
                  Gi,
                  Rr,
                  $l,
                  u,
                  "Throttled",
                  -0,
                  0
                ),
                c
              ));
            break e;
          }
          Im(l, n, Yn, Eu, pd, t, ta, Gi, Rr, $l, u, null, -0, 0);
        }
      }
      break;
    } while (!0);
    Ia(e);
  }
  function Im(e, t, n, l, c, u, m, v, A, j, Z, $, k, B) {
    if (
      ((e.timeoutHandle = -1),
      ($ = t.subtreeFlags),
      $ & 8192 || ($ & 16785408) === 16785408)
    ) {
      ($ = {
        stylesheets: null,
        count: 0,
        imgCount: 0,
        imgBytes: 0,
        suspenseyImages: [],
        waitingForImages: !0,
        waitingForViewTransition: !1,
        unsuspend: ol,
      }),
        Qm(t, u, $);
      var ie =
        (u & 62914560) === u ? zu - Rt() : (u & 4194048) === u ? Fm - Rt() : 0;
      if (((ie = Gb($, ie)), ie !== null)) {
        (zl = u),
          (e.cancelPendingCommit = ie(
            sg.bind(null, e, t, u, n, l, c, m, v, A, Z, $, null, k, B)
          )),
          ti(e, u, m, !j);
        return;
      }
    }
    sg(e, t, u, n, l, c, m, v, A);
  }
  function lb(e) {
    for (var t = e; ; ) {
      var n = t.tag;
      if (
        (n === 0 || n === 11 || n === 15) &&
        t.flags & 16384 &&
        ((n = t.updateQueue), n !== null && ((n = n.stores), n !== null))
      )
        for (var l = 0; l < n.length; l++) {
          var c = n[l],
            u = c.getSnapshot;
          c = c.value;
          try {
            if (!Wn(u(), c)) return !1;
          } catch {
            return !1;
          }
        }
      if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
        (n.return = t), (t = n);
      else {
        if (t === e) break;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e) return !0;
          t = t.return;
        }
        (t.sibling.return = t.return), (t = t.sibling);
      }
    }
    return !0;
  }
  function ti(e, t, n, l) {
    (t &= ~hd),
      (t &= ~Gi),
      (e.suspendedLanes |= t),
      (e.pingedLanes &= ~t),
      l && (e.warmLanes |= t),
      (l = e.expirationTimes);
    for (var c = t; 0 < c; ) {
      var u = 31 - qt(c),
        m = 1 << u;
      (l[u] = -1), (c &= ~m);
    }
    n !== 0 && ne(e, n, t);
  }
  function wu() {
    return (We & 6) === 0 ? (Zs(0), !1) : !0;
  }
  function vd() {
    if (Be !== null) {
      if (Ie === 0) var e = Be.return;
      else (e = Be), (pl = Ri = null), jf(e), (zr = null), (ws = 0), (e = Be);
      for (; e !== null; ) Nm(e.alternate, e), (e = e.return);
      Be = null;
    }
  }
  function kr(e, t) {
    var n = e.timeoutHandle;
    n !== -1 && ((e.timeoutHandle = -1), Ab(n)),
      (n = e.cancelPendingCommit),
      n !== null && ((e.cancelPendingCommit = null), n()),
      (zl = 0),
      vd(),
      (it = e),
      (Be = n = dl(e.current, null)),
      (Le = t),
      (Ie = 0),
      (ea = null),
      ($l = !1),
      (Dr = va(e, t)),
      (dd = !1),
      (Rr = ta = hd = Gi = Pl = Ot = 0),
      (Yn = Xs = null),
      (pd = !1),
      (t & 8) !== 0 && (t |= t & 32);
    var l = e.entangledLanes;
    if (l !== 0)
      for (e = e.entanglements, l &= t; 0 < l; ) {
        var c = 31 - qt(l),
          u = 1 << c;
        (t |= e[c]), (l &= ~u);
      }
    return (Al = t), Fc(), n;
  }
  function eg(e, t) {
    (Ee = null),
      (O.H = Us),
      t === Ar || t === au
        ? ((t = g0()), (Ie = 3))
        : t === Sf
        ? ((t = g0()), (Ie = 4))
        : (Ie =
            t === Wf
              ? 8
              : t !== null &&
                typeof t == "object" &&
                typeof t.then == "function"
              ? 6
              : 1),
      (ea = t),
      Be === null && ((Ot = 1), yu(e, Aa(t, e.current)));
  }
  function tg() {
    var e = Pn.current;
    return e === null
      ? !0
      : (Le & 4194048) === Le
      ? wa === null
      : (Le & 62914560) === Le || (Le & 536870912) !== 0
      ? e === wa
      : !1;
  }
  function ng() {
    var e = O.H;
    return (O.H = Us), e === null ? Us : e;
  }
  function ag() {
    var e = O.A;
    return (O.A = nb), e;
  }
  function Mu() {
    (Ot = 4),
      $l || ((Le & 4194048) !== Le && Pn.current !== null) || (Dr = !0),
      ((Pl & 134217727) === 0 && (Gi & 134217727) === 0) ||
        it === null ||
        ti(it, Le, ta, !1);
  }
  function _d(e, t, n) {
    var l = We;
    We |= 2;
    var c = ng(),
      u = ag();
    (it !== e || Le !== t) && ((Eu = null), kr(e, t)), (t = !1);
    var m = Ot;
    e: do
      try {
        if (Ie !== 0 && Be !== null) {
          var v = Be,
            A = ea;
          switch (Ie) {
            case 8:
              vd(), (m = 6);
              break e;
            case 3:
            case 2:
            case 9:
            case 6:
              Pn.current === null && (t = !0);
              var j = Ie;
              if (((Ie = 0), (ea = null), Ur(e, v, A, j), n && Dr)) {
                m = 0;
                break e;
              }
              break;
            default:
              (j = Ie), (Ie = 0), (ea = null), Ur(e, v, A, j);
          }
        }
        ib(), (m = Ot);
        break;
      } catch (Z) {
        eg(e, Z);
      }
    while (!0);
    return (
      t && e.shellSuspendCounter++,
      (pl = Ri = null),
      (We = l),
      (O.H = c),
      (O.A = u),
      Be === null && ((it = null), (Le = 0), Fc()),
      m
    );
  }
  function ib() {
    for (; Be !== null; ) lg(Be);
  }
  function rb(e, t) {
    var n = We;
    We |= 2;
    var l = ng(),
      c = ag();
    it !== e || Le !== t
      ? ((Eu = null), (Cu = Rt() + 500), kr(e, t))
      : (Dr = va(e, t));
    e: do
      try {
        if (Ie !== 0 && Be !== null) {
          t = Be;
          var u = ea;
          t: switch (Ie) {
            case 1:
              (Ie = 0), (ea = null), Ur(e, t, u, 1);
              break;
            case 2:
            case 9:
              if (p0(u)) {
                (Ie = 0), (ea = null), ig(t);
                break;
              }
              (t = function () {
                (Ie !== 2 && Ie !== 9) || it !== e || (Ie = 7), Ia(e);
              }),
                u.then(t, t);
              break e;
            case 3:
              Ie = 7;
              break e;
            case 4:
              Ie = 5;
              break e;
            case 7:
              p0(u)
                ? ((Ie = 0), (ea = null), ig(t))
                : ((Ie = 0), (ea = null), Ur(e, t, u, 7));
              break;
            case 5:
              var m = null;
              switch (Be.tag) {
                case 26:
                  m = Be.memoizedState;
                case 5:
                case 27:
                  var v = Be;
                  if (m ? Xg(m) : v.stateNode.complete) {
                    (Ie = 0), (ea = null);
                    var A = v.sibling;
                    if (A !== null) Be = A;
                    else {
                      var j = v.return;
                      j !== null ? ((Be = j), Nu(j)) : (Be = null);
                    }
                    break t;
                  }
              }
              (Ie = 0), (ea = null), Ur(e, t, u, 5);
              break;
            case 6:
              (Ie = 0), (ea = null), Ur(e, t, u, 6);
              break;
            case 8:
              vd(), (Ot = 6);
              break e;
            default:
              throw Error(i(462));
          }
        }
        sb();
        break;
      } catch (Z) {
        eg(e, Z);
      }
    while (!0);
    return (
      (pl = Ri = null),
      (O.H = l),
      (O.A = c),
      (We = n),
      Be !== null ? 0 : ((it = null), (Le = 0), Fc(), Ot)
    );
  }
  function sb() {
    for (; Be !== null && !Ha(); ) lg(Be);
  }
  function lg(e) {
    var t = wm(e.alternate, e, Al);
    (e.memoizedProps = e.pendingProps), t === null ? Nu(e) : (Be = t);
  }
  function ig(e) {
    var t = e,
      n = t.alternate;
    switch (t.tag) {
      case 15:
      case 0:
        t = Sm(n, t, t.pendingProps, t.type, void 0, Le);
        break;
      case 11:
        t = Sm(n, t, t.pendingProps, t.type.render, t.ref, Le);
        break;
      case 5:
        jf(t);
      default:
        Nm(n, t), (t = Be = a0(t, Al)), (t = wm(n, t, Al));
    }
    (e.memoizedProps = e.pendingProps), t === null ? Nu(e) : (Be = t);
  }
  function Ur(e, t, n, l) {
    (pl = Ri = null), jf(t), (zr = null), (ws = 0);
    var c = t.return;
    try {
      if (F_(e, c, t, n, Le)) {
        (Ot = 1), yu(e, Aa(n, e.current)), (Be = null);
        return;
      }
    } catch (u) {
      if (c !== null) throw ((Be = c), u);
      (Ot = 1), yu(e, Aa(n, e.current)), (Be = null);
      return;
    }
    t.flags & 32768
      ? (Ve || l === 1
          ? (e = !0)
          : Dr || (Le & 536870912) !== 0
          ? (e = !1)
          : (($l = e = !0),
            (l === 2 || l === 9 || l === 3 || l === 6) &&
              ((l = Pn.current),
              l !== null && l.tag === 13 && (l.flags |= 16384))),
        rg(t, e))
      : Nu(t);
  }
  function Nu(e) {
    var t = e;
    do {
      if ((t.flags & 32768) !== 0) {
        rg(t, $l);
        return;
      }
      e = t.return;
      var n = P_(t.alternate, t, Al);
      if (n !== null) {
        Be = n;
        return;
      }
      if (((t = t.sibling), t !== null)) {
        Be = t;
        return;
      }
      Be = t = e;
    } while (t !== null);
    Ot === 0 && (Ot = 5);
  }
  function rg(e, t) {
    do {
      var n = I_(e.alternate, e);
      if (n !== null) {
        (n.flags &= 32767), (Be = n);
        return;
      }
      if (
        ((n = e.return),
        n !== null &&
          ((n.flags |= 32768), (n.subtreeFlags = 0), (n.deletions = null)),
        !t && ((e = e.sibling), e !== null))
      ) {
        Be = e;
        return;
      }
      Be = e = n;
    } while (e !== null);
    (Ot = 6), (Be = null);
  }
  function sg(e, t, n, l, c, u, m, v, A) {
    e.cancelPendingCommit = null;
    do Ou();
    while (Ft !== 0);
    if ((We & 6) !== 0) throw Error(i(327));
    if (t !== null) {
      if (t === e.current) throw Error(i(177));
      if (
        ((u = t.lanes | t.childLanes),
        (u |= sf),
        Ke(e, n, u, m, v, A),
        e === it && ((Be = it = null), (Le = 0)),
        (jr = t),
        (ei = e),
        (zl = n),
        (md = u),
        (gd = c),
        (Wm = l),
        (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0
          ? ((e.callbackNode = null),
            (e.callbackPriority = 0),
            fb(hn, function () {
              return dg(), null;
            }))
          : ((e.callbackNode = null), (e.callbackPriority = 0)),
        (l = (t.flags & 13878) !== 0),
        (t.subtreeFlags & 13878) !== 0 || l)
      ) {
        (l = O.T), (O.T = null), (c = G.p), (G.p = 2), (m = We), (We |= 4);
        try {
          eb(e, t, n);
        } finally {
          (We = m), (G.p = c), (O.T = l);
        }
      }
      (Ft = 1), cg(), ug(), og();
    }
  }
  function cg() {
    if (Ft === 1) {
      Ft = 0;
      var e = ei,
        t = jr,
        n = (t.flags & 13878) !== 0;
      if ((t.subtreeFlags & 13878) !== 0 || n) {
        (n = O.T), (O.T = null);
        var l = G.p;
        G.p = 2;
        var c = We;
        We |= 4;
        try {
          Gm(t, e);
          var u = Od,
            m = Jp(e.containerInfo),
            v = u.focusedElem,
            A = u.selectionRange;
          if (
            m !== v &&
            v &&
            v.ownerDocument &&
            Kp(v.ownerDocument.documentElement, v)
          ) {
            if (A !== null && tf(v)) {
              var j = A.start,
                Z = A.end;
              if ((Z === void 0 && (Z = j), "selectionStart" in v))
                (v.selectionStart = j),
                  (v.selectionEnd = Math.min(Z, v.value.length));
              else {
                var $ = v.ownerDocument || document,
                  k = ($ && $.defaultView) || window;
                if (k.getSelection) {
                  var B = k.getSelection(),
                    ie = v.textContent.length,
                    _e = Math.min(A.start, ie),
                    at = A.end === void 0 ? _e : Math.min(A.end, ie);
                  !B.extend && _e > at && ((m = at), (at = _e), (_e = m));
                  var M = Zp(v, _e),
                    C = Zp(v, at);
                  if (
                    M &&
                    C &&
                    (B.rangeCount !== 1 ||
                      B.anchorNode !== M.node ||
                      B.anchorOffset !== M.offset ||
                      B.focusNode !== C.node ||
                      B.focusOffset !== C.offset)
                  ) {
                    var D = $.createRange();
                    D.setStart(M.node, M.offset),
                      B.removeAllRanges(),
                      _e > at
                        ? (B.addRange(D), B.extend(C.node, C.offset))
                        : (D.setEnd(C.node, C.offset), B.addRange(D));
                  }
                }
              }
            }
            for ($ = [], B = v; (B = B.parentNode); )
              B.nodeType === 1 &&
                $.push({ element: B, left: B.scrollLeft, top: B.scrollTop });
            for (
              typeof v.focus == "function" && v.focus(), v = 0;
              v < $.length;
              v++
            ) {
              var F = $[v];
              (F.element.scrollLeft = F.left), (F.element.scrollTop = F.top);
            }
          }
          (Vu = !!Nd), (Od = Nd = null);
        } finally {
          (We = c), (G.p = l), (O.T = n);
        }
      }
      (e.current = t), (Ft = 2);
    }
  }
  function ug() {
    if (Ft === 2) {
      Ft = 0;
      var e = ei,
        t = jr,
        n = (t.flags & 8772) !== 0;
      if ((t.subtreeFlags & 8772) !== 0 || n) {
        (n = O.T), (O.T = null);
        var l = G.p;
        G.p = 2;
        var c = We;
        We |= 4;
        try {
          Hm(e, t.alternate, t);
        } finally {
          (We = c), (G.p = l), (O.T = n);
        }
      }
      Ft = 3;
    }
  }
  function og() {
    if (Ft === 4 || Ft === 3) {
      (Ft = 0), Xa();
      var e = ei,
        t = jr,
        n = zl,
        l = Wm;
      (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0
        ? (Ft = 5)
        : ((Ft = 0), (jr = ei = null), fg(e, e.pendingLanes));
      var c = e.pendingLanes;
      if (
        (c === 0 && (Il = null),
        Mt(n),
        (t = t.stateNode),
        xt && typeof xt.onCommitFiberRoot == "function")
      )
        try {
          xt.onCommitFiberRoot(Qa, t, void 0, (t.current.flags & 128) === 128);
        } catch {}
      if (l !== null) {
        (t = O.T), (c = G.p), (G.p = 2), (O.T = null);
        try {
          for (var u = e.onRecoverableError, m = 0; m < l.length; m++) {
            var v = l[m];
            u(v.value, { componentStack: v.stack });
          }
        } finally {
          (O.T = t), (G.p = c);
        }
      }
      (zl & 3) !== 0 && Ou(),
        Ia(e),
        (c = e.pendingLanes),
        (n & 261930) !== 0 && (c & 42) !== 0
          ? e === yd
            ? Qs++
            : ((Qs = 0), (yd = e))
          : (Qs = 0),
        Zs(0);
    }
  }
  function fg(e, t) {
    (e.pooledCacheLanes &= t) === 0 &&
      ((t = e.pooledCache), t != null && ((e.pooledCache = null), Cs(t)));
  }
  function Ou() {
    return cg(), ug(), og(), dg();
  }
  function dg() {
    if (Ft !== 5) return !1;
    var e = ei,
      t = md;
    md = 0;
    var n = Mt(zl),
      l = O.T,
      c = G.p;
    try {
      (G.p = 32 > n ? 32 : n), (O.T = null), (n = gd), (gd = null);
      var u = ei,
        m = zl;
      if (((Ft = 0), (jr = ei = null), (zl = 0), (We & 6) !== 0))
        throw Error(i(331));
      var v = We;
      if (
        ((We |= 4),
        Km(u.current),
        Xm(u, u.current, m, n),
        (We = v),
        Zs(0, !1),
        xt && typeof xt.onPostCommitFiberRoot == "function")
      )
        try {
          xt.onPostCommitFiberRoot(Qa, u);
        } catch {}
      return !0;
    } finally {
      (G.p = c), (O.T = l), fg(e, t);
    }
  }
  function hg(e, t, n) {
    (t = Aa(n, t)),
      (t = Ff(e.stateNode, t, 2)),
      (e = Kl(e, t, 2)),
      e !== null && (he(e, 2), Ia(e));
  }
  function et(e, t, n) {
    if (e.tag === 3) hg(e, e, n);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          hg(t, e, n);
          break;
        } else if (t.tag === 1) {
          var l = t.stateNode;
          if (
            typeof t.type.getDerivedStateFromError == "function" ||
            (typeof l.componentDidCatch == "function" &&
              (Il === null || !Il.has(l)))
          ) {
            (e = Aa(n, e)),
              (n = pm(2)),
              (l = Kl(t, n, 2)),
              l !== null && (mm(n, l, t, e), he(l, 2), Ia(l));
            break;
          }
        }
        t = t.return;
      }
  }
  function bd(e, t, n) {
    var l = e.pingCache;
    if (l === null) {
      l = e.pingCache = new ab();
      var c = new Set();
      l.set(t, c);
    } else (c = l.get(t)), c === void 0 && ((c = new Set()), l.set(t, c));
    c.has(n) ||
      ((dd = !0), c.add(n), (e = cb.bind(null, e, t, n)), t.then(e, e));
  }
  function cb(e, t, n) {
    var l = e.pingCache;
    l !== null && l.delete(t),
      (e.pingedLanes |= e.suspendedLanes & n),
      (e.warmLanes &= ~n),
      it === e &&
        (Le & n) === n &&
        (Ot === 4 || (Ot === 3 && (Le & 62914560) === Le && 300 > Rt() - zu)
          ? (We & 2) === 0 && kr(e, 0)
          : (hd |= n),
        Rr === Le && (Rr = 0)),
      Ia(e);
  }
  function pg(e, t) {
    t === 0 && (t = Bl()), (e = Ni(e, t)), e !== null && (he(e, t), Ia(e));
  }
  function ub(e) {
    var t = e.memoizedState,
      n = 0;
    t !== null && (n = t.retryLane), pg(e, n);
  }
  function ob(e, t) {
    var n = 0;
    switch (e.tag) {
      case 31:
      case 13:
        var l = e.stateNode,
          c = e.memoizedState;
        c !== null && (n = c.retryLane);
        break;
      case 19:
        l = e.stateNode;
        break;
      case 22:
        l = e.stateNode._retryCache;
        break;
      default:
        throw Error(i(314));
    }
    l !== null && l.delete(t), pg(e, n);
  }
  function fb(e, t) {
    return pa(e, t);
  }
  var Du = null,
    Hr = null,
    xd = !1,
    Ru = !1,
    Sd = !1,
    ni = 0;
  function Ia(e) {
    e !== Hr &&
      e.next === null &&
      (Hr === null ? (Du = Hr = e) : (Hr = Hr.next = e)),
      (Ru = !0),
      xd || ((xd = !0), hb());
  }
  function Zs(e, t) {
    if (!Sd && Ru) {
      Sd = !0;
      do
        for (var n = !1, l = Du; l !== null; ) {
          if (e !== 0) {
            var c = l.pendingLanes;
            if (c === 0) var u = 0;
            else {
              var m = l.suspendedLanes,
                v = l.pingedLanes;
              (u = (1 << (31 - qt(42 | e) + 1)) - 1),
                (u &= c & ~(m & ~v)),
                (u = u & 201326741 ? (u & 201326741) | 1 : u ? u | 2 : 0);
            }
            u !== 0 && ((n = !0), vg(l, u));
          } else
            (u = Le),
              (u = ya(
                l,
                l === it ? u : 0,
                l.cancelPendingCommit !== null || l.timeoutHandle !== -1
              )),
              (u & 3) === 0 || va(l, u) || ((n = !0), vg(l, u));
          l = l.next;
        }
      while (n);
      Sd = !1;
    }
  }
  function db() {
    mg();
  }
  function mg() {
    Ru = xd = !1;
    var e = 0;
    ni !== 0 && Tb() && (e = ni);
    for (var t = Rt(), n = null, l = Du; l !== null; ) {
      var c = l.next,
        u = gg(l, t);
      u === 0
        ? ((l.next = null),
          n === null ? (Du = c) : (n.next = c),
          c === null && (Hr = n))
        : ((n = l), (e !== 0 || (u & 3) !== 0) && (Ru = !0)),
        (l = c);
    }
    (Ft !== 0 && Ft !== 5) || Zs(e), ni !== 0 && (ni = 0);
  }
  function gg(e, t) {
    for (
      var n = e.suspendedLanes,
        l = e.pingedLanes,
        c = e.expirationTimes,
        u = e.pendingLanes & -62914561;
      0 < u;

    ) {
      var m = 31 - qt(u),
        v = 1 << m,
        A = c[m];
      A === -1
        ? ((v & n) === 0 || (v & l) !== 0) && (c[m] = Ya(v, t))
        : A <= t && (e.expiredLanes |= v),
        (u &= ~v);
    }
    if (
      ((t = it),
      (n = Le),
      (n = ya(
        e,
        e === t ? n : 0,
        e.cancelPendingCommit !== null || e.timeoutHandle !== -1
      )),
      (l = e.callbackNode),
      n === 0 ||
        (e === t && (Ie === 2 || Ie === 9)) ||
        e.cancelPendingCommit !== null)
    )
      return (
        l !== null && l !== null && ct(l),
        (e.callbackNode = null),
        (e.callbackPriority = 0)
      );
    if ((n & 3) === 0 || va(e, n)) {
      if (((t = n & -n), t === e.callbackPriority)) return t;
      switch ((l !== null && ct(l), Mt(n))) {
        case 2:
        case 8:
          n = yt;
          break;
        case 32:
          n = hn;
          break;
        case 268435456:
          n = ma;
          break;
        default:
          n = hn;
      }
      return (
        (l = yg.bind(null, e)),
        (n = pa(n, l)),
        (e.callbackPriority = t),
        (e.callbackNode = n),
        t
      );
    }
    return (
      l !== null && l !== null && ct(l),
      (e.callbackPriority = 2),
      (e.callbackNode = null),
      2
    );
  }
  function yg(e, t) {
    if (Ft !== 0 && Ft !== 5)
      return (e.callbackNode = null), (e.callbackPriority = 0), null;
    var n = e.callbackNode;
    if (Ou() && e.callbackNode !== n) return null;
    var l = Le;
    return (
      (l = ya(
        e,
        e === it ? l : 0,
        e.cancelPendingCommit !== null || e.timeoutHandle !== -1
      )),
      l === 0
        ? null
        : (Pm(e, l, t),
          gg(e, Rt()),
          e.callbackNode != null && e.callbackNode === n
            ? yg.bind(null, e)
            : null)
    );
  }
  function vg(e, t) {
    if (Ou()) return null;
    Pm(e, t, !0);
  }
  function hb() {
    zb(function () {
      (We & 6) !== 0 ? pa(Ba, db) : mg();
    });
  }
  function Td() {
    if (ni === 0) {
      var e = Sr;
      e === 0 && ((e = ga), (ga <<= 1), (ga & 261888) === 0 && (ga = 256)),
        (ni = e);
    }
    return ni;
  }
  function _g(e) {
    return e == null || typeof e == "symbol" || typeof e == "boolean"
      ? null
      : typeof e == "function"
      ? e
      : Lc("" + e);
  }
  function bg(e, t) {
    var n = t.ownerDocument.createElement("input");
    return (
      (n.name = t.name),
      (n.value = t.value),
      e.id && n.setAttribute("form", e.id),
      t.parentNode.insertBefore(n, t),
      (e = new FormData(e)),
      n.parentNode.removeChild(n),
      e
    );
  }
  function pb(e, t, n, l, c) {
    if (t === "submit" && n && n.stateNode === c) {
      var u = _g((c[Oe] || null).action),
        m = l.submitter;
      m &&
        ((t = (t = m[Oe] || null)
          ? _g(t.formAction)
          : m.getAttribute("formAction")),
        t !== null && ((u = t), (m = null)));
      var v = new Qc("action", "action", null, l, c);
      e.push({
        event: v,
        listeners: [
          {
            instance: null,
            listener: function () {
              if (l.defaultPrevented) {
                if (ni !== 0) {
                  var A = m ? bg(c, m) : new FormData(c);
                  Vf(
                    n,
                    { pending: !0, data: A, method: c.method, action: u },
                    null,
                    A
                  );
                }
              } else
                typeof u == "function" &&
                  (v.preventDefault(),
                  (A = m ? bg(c, m) : new FormData(c)),
                  Vf(
                    n,
                    { pending: !0, data: A, method: c.method, action: u },
                    u,
                    A
                  ));
            },
            currentTarget: c,
          },
        ],
      });
    }
  }
  for (var Ad = 0; Ad < rf.length; Ad++) {
    var zd = rf[Ad],
      mb = zd.toLowerCase(),
      gb = zd[0].toUpperCase() + zd.slice(1);
    qa(mb, "on" + gb);
  }
  qa($p, "onAnimationEnd"),
    qa(Pp, "onAnimationIteration"),
    qa(Ip, "onAnimationStart"),
    qa("dblclick", "onDoubleClick"),
    qa("focusin", "onFocus"),
    qa("focusout", "onBlur"),
    qa(D_, "onTransitionRun"),
    qa(R_, "onTransitionStart"),
    qa(j_, "onTransitionCancel"),
    qa(e0, "onTransitionEnd"),
    _a("onMouseEnter", ["mouseout", "mouseover"]),
    _a("onMouseLeave", ["mouseout", "mouseover"]),
    _a("onPointerEnter", ["pointerout", "pointerover"]),
    _a("onPointerLeave", ["pointerout", "pointerover"]),
    Ja(
      "onChange",
      "change click focusin focusout input keydown keyup selectionchange".split(
        " "
      )
    ),
    Ja(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " "
      )
    ),
    Ja("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    Ja(
      "onCompositionEnd",
      "compositionend focusout keydown keypress keyup mousedown".split(" ")
    ),
    Ja(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" ")
    ),
    Ja(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
    );
  var Ks =
      "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
        " "
      ),
    yb = new Set(
      "beforetoggle cancel close invalid load scroll scrollend toggle"
        .split(" ")
        .concat(Ks)
    );
  function xg(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
      var l = e[n],
        c = l.event;
      l = l.listeners;
      e: {
        var u = void 0;
        if (t)
          for (var m = l.length - 1; 0 <= m; m--) {
            var v = l[m],
              A = v.instance,
              j = v.currentTarget;
            if (((v = v.listener), A !== u && c.isPropagationStopped()))
              break e;
            (u = v), (c.currentTarget = j);
            try {
              u(c);
            } catch (Z) {
              Jc(Z);
            }
            (c.currentTarget = null), (u = A);
          }
        else
          for (m = 0; m < l.length; m++) {
            if (
              ((v = l[m]),
              (A = v.instance),
              (j = v.currentTarget),
              (v = v.listener),
              A !== u && c.isPropagationStopped())
            )
              break e;
            (u = v), (c.currentTarget = j);
            try {
              u(c);
            } catch (Z) {
              Jc(Z);
            }
            (c.currentTarget = null), (u = A);
          }
      }
    }
  }
  function Ye(e, t) {
    var n = t[Tn];
    n === void 0 && (n = t[Tn] = new Set());
    var l = e + "__bubble";
    n.has(l) || (Sg(t, e, 2, !1), n.add(l));
  }
  function Cd(e, t, n) {
    var l = 0;
    t && (l |= 4), Sg(n, e, l, t);
  }
  var ju = "_reactListening" + Math.random().toString(36).slice(2);
  function Ed(e) {
    if (!e[ju]) {
      (e[ju] = !0),
        Fn.forEach(function (n) {
          n !== "selectionchange" && (yb.has(n) || Cd(n, !1, e), Cd(n, !0, e));
        });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[ju] || ((t[ju] = !0), Cd("selectionchange", !1, t));
    }
  }
  function Sg(e, t, n, l) {
    switch ($g(t)) {
      case 2:
        var c = Qb;
        break;
      case 8:
        c = Zb;
        break;
      default:
        c = Gd;
    }
    (n = c.bind(null, t, n, e)),
      (c = void 0),
      !Zo ||
        (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
        (c = !0),
      l
        ? c !== void 0
          ? e.addEventListener(t, n, { capture: !0, passive: c })
          : e.addEventListener(t, n, !0)
        : c !== void 0
        ? e.addEventListener(t, n, { passive: c })
        : e.addEventListener(t, n, !1);
  }
  function wd(e, t, n, l, c) {
    var u = l;
    if ((t & 1) === 0 && (t & 2) === 0 && l !== null)
      e: for (;;) {
        if (l === null) return;
        var m = l.tag;
        if (m === 3 || m === 4) {
          var v = l.stateNode.containerInfo;
          if (v === c) break;
          if (m === 4)
            for (m = l.return; m !== null; ) {
              var A = m.tag;
              if ((A === 3 || A === 4) && m.stateNode.containerInfo === c)
                return;
              m = m.return;
            }
          for (; v !== null; ) {
            if (((m = Tt(v)), m === null)) return;
            if (((A = m.tag), A === 5 || A === 6 || A === 26 || A === 27)) {
              l = u = m;
              continue e;
            }
            v = v.parentNode;
          }
        }
        l = l.return;
      }
    Ep(function () {
      var j = u,
        Z = Xo(n),
        $ = [];
      e: {
        var k = t0.get(e);
        if (k !== void 0) {
          var B = Qc,
            ie = e;
          switch (e) {
            case "keypress":
              if (Vc(n) === 0) break e;
            case "keydown":
            case "keyup":
              B = o_;
              break;
            case "focusin":
              (ie = "focus"), (B = Wo);
              break;
            case "focusout":
              (ie = "blur"), (B = Wo);
              break;
            case "beforeblur":
            case "afterblur":
              B = Wo;
              break;
            case "click":
              if (n.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              B = Np;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              B = Pv;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              B = h_;
              break;
            case $p:
            case Pp:
            case Ip:
              B = t_;
              break;
            case e0:
              B = m_;
              break;
            case "scroll":
            case "scrollend":
              B = Wv;
              break;
            case "wheel":
              B = y_;
              break;
            case "copy":
            case "cut":
            case "paste":
              B = a_;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              B = Dp;
              break;
            case "toggle":
            case "beforetoggle":
              B = __;
          }
          var _e = (t & 4) !== 0,
            at = !_e && (e === "scroll" || e === "scrollend"),
            M = _e ? (k !== null ? k + "Capture" : null) : k;
          _e = [];
          for (var C = j, D; C !== null; ) {
            var F = C;
            if (
              ((D = F.stateNode),
              (F = F.tag),
              (F !== 5 && F !== 26 && F !== 27) ||
                D === null ||
                M === null ||
                ((F = ms(C, M)), F != null && _e.push(Js(C, F, D))),
              at)
            )
              break;
            C = C.return;
          }
          0 < _e.length &&
            ((k = new B(k, ie, null, n, Z)),
            $.push({ event: k, listeners: _e }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (
            ((k = e === "mouseover" || e === "pointerover"),
            (B = e === "mouseout" || e === "pointerout"),
            k &&
              n !== Vo &&
              (ie = n.relatedTarget || n.fromElement) &&
              (Tt(ie) || ie[Ze]))
          )
            break e;
          if (
            (B || k) &&
            ((k =
              Z.window === Z
                ? Z
                : (k = Z.ownerDocument)
                ? k.defaultView || k.parentWindow
                : window),
            B
              ? ((ie = n.relatedTarget || n.toElement),
                (B = j),
                (ie = ie ? Tt(ie) : null),
                ie !== null &&
                  ((at = o(ie)),
                  (_e = ie.tag),
                  ie !== at || (_e !== 5 && _e !== 27 && _e !== 6)) &&
                  (ie = null))
              : ((B = null), (ie = j)),
            B !== ie)
          ) {
            if (
              ((_e = Np),
              (F = "onMouseLeave"),
              (M = "onMouseEnter"),
              (C = "mouse"),
              (e === "pointerout" || e === "pointerover") &&
                ((_e = Dp),
                (F = "onPointerLeave"),
                (M = "onPointerEnter"),
                (C = "pointer")),
              (at = B == null ? k : Ka(B)),
              (D = ie == null ? k : Ka(ie)),
              (k = new _e(F, C + "leave", B, n, Z)),
              (k.target = at),
              (k.relatedTarget = D),
              (F = null),
              Tt(Z) === j &&
                ((_e = new _e(M, C + "enter", ie, n, Z)),
                (_e.target = D),
                (_e.relatedTarget = at),
                (F = _e)),
              (at = F),
              B && ie)
            )
              t: {
                for (_e = vb, M = B, C = ie, D = 0, F = M; F; F = _e(F)) D++;
                F = 0;
                for (var me = C; me; me = _e(me)) F++;
                for (; 0 < D - F; ) (M = _e(M)), D--;
                for (; 0 < F - D; ) (C = _e(C)), F--;
                for (; D--; ) {
                  if (M === C || (C !== null && M === C.alternate)) {
                    _e = M;
                    break t;
                  }
                  (M = _e(M)), (C = _e(C));
                }
                _e = null;
              }
            else _e = null;
            B !== null && Tg($, k, B, _e, !1),
              ie !== null && at !== null && Tg($, at, ie, _e, !0);
          }
        }
        e: {
          if (
            ((k = j ? Ka(j) : window),
            (B = k.nodeName && k.nodeName.toLowerCase()),
            B === "select" || (B === "input" && k.type === "file"))
          )
            var Je = qp;
          else if (Bp(k))
            if (Lp) Je = M_;
            else {
              Je = E_;
              var ue = C_;
            }
          else
            (B = k.nodeName),
              !B ||
              B.toLowerCase() !== "input" ||
              (k.type !== "checkbox" && k.type !== "radio")
                ? j && Go(j.elementType) && (Je = qp)
                : (Je = w_);
          if (Je && (Je = Je(e, j))) {
            Yp($, Je, n, Z);
            break e;
          }
          ue && ue(e, k, j),
            e === "focusout" &&
              j &&
              k.type === "number" &&
              j.memoizedProps.value != null &&
              Lo(k, "number", k.value);
        }
        switch (((ue = j ? Ka(j) : window), e)) {
          case "focusin":
            (Bp(ue) || ue.contentEditable === "true") &&
              ((pr = ue), (nf = j), (Ts = null));
            break;
          case "focusout":
            Ts = nf = pr = null;
            break;
          case "mousedown":
            af = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            (af = !1), Fp($, n, Z);
            break;
          case "selectionchange":
            if (O_) break;
          case "keydown":
          case "keyup":
            Fp($, n, Z);
        }
        var we;
        if (Po)
          e: {
            switch (e) {
              case "compositionstart":
                var Ge = "onCompositionStart";
                break e;
              case "compositionend":
                Ge = "onCompositionEnd";
                break e;
              case "compositionupdate":
                Ge = "onCompositionUpdate";
                break e;
            }
            Ge = void 0;
          }
        else
          hr
            ? Up(e, n) && (Ge = "onCompositionEnd")
            : e === "keydown" &&
              n.keyCode === 229 &&
              (Ge = "onCompositionStart");
        Ge &&
          (Rp &&
            n.locale !== "ko" &&
            (hr || Ge !== "onCompositionStart"
              ? Ge === "onCompositionEnd" && hr && (we = wp())
              : ((ql = Z),
                (Ko = "value" in ql ? ql.value : ql.textContent),
                (hr = !0))),
          (ue = ku(j, Ge)),
          0 < ue.length &&
            ((Ge = new Op(Ge, e, null, n, Z)),
            $.push({ event: Ge, listeners: ue }),
            we
              ? (Ge.data = we)
              : ((we = Hp(n)), we !== null && (Ge.data = we)))),
          (we = x_ ? S_(e, n) : T_(e, n)) &&
            ((Ge = ku(j, "onBeforeInput")),
            0 < Ge.length &&
              ((ue = new Op("onBeforeInput", "beforeinput", null, n, Z)),
              $.push({ event: ue, listeners: Ge }),
              (ue.data = we))),
          pb($, e, j, n, Z);
      }
      xg($, t);
    });
  }
  function Js(e, t, n) {
    return { instance: e, listener: t, currentTarget: n };
  }
  function ku(e, t) {
    for (var n = t + "Capture", l = []; e !== null; ) {
      var c = e,
        u = c.stateNode;
      if (
        ((c = c.tag),
        (c !== 5 && c !== 26 && c !== 27) ||
          u === null ||
          ((c = ms(e, n)),
          c != null && l.unshift(Js(e, c, u)),
          (c = ms(e, t)),
          c != null && l.push(Js(e, c, u))),
        e.tag === 3)
      )
        return l;
      e = e.return;
    }
    return [];
  }
  function vb(e) {
    if (e === null) return null;
    do e = e.return;
    while (e && e.tag !== 5 && e.tag !== 27);
    return e || null;
  }
  function Tg(e, t, n, l, c) {
    for (var u = t._reactName, m = []; n !== null && n !== l; ) {
      var v = n,
        A = v.alternate,
        j = v.stateNode;
      if (((v = v.tag), A !== null && A === l)) break;
      (v !== 5 && v !== 26 && v !== 27) ||
        j === null ||
        ((A = j),
        c
          ? ((j = ms(n, u)), j != null && m.unshift(Js(n, j, A)))
          : c || ((j = ms(n, u)), j != null && m.push(Js(n, j, A)))),
        (n = n.return);
    }
    m.length !== 0 && e.push({ event: t, listeners: m });
  }
  var _b = /\r\n?/g,
    bb = /\u0000|\uFFFD/g;
  function Ag(e) {
    return (typeof e == "string" ? e : "" + e)
      .replace(
        _b,
        `
`
      )
      .replace(bb, "");
  }
  function zg(e, t) {
    return (t = Ag(t)), Ag(e) === t;
  }
  function nt(e, t, n, l, c, u) {
    switch (n) {
      case "children":
        typeof l == "string"
          ? t === "body" || (t === "textarea" && l === "") || or(e, l)
          : (typeof l == "number" || typeof l == "bigint") &&
            t !== "body" &&
            or(e, "" + l);
        break;
      case "className":
        Yc(e, "class", l);
        break;
      case "tabIndex":
        Yc(e, "tabindex", l);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        Yc(e, n, l);
        break;
      case "style":
        zp(e, l, u);
        break;
      case "data":
        if (t !== "object") {
          Yc(e, "data", l);
          break;
        }
      case "src":
      case "href":
        if (l === "" && (t !== "a" || n !== "href")) {
          e.removeAttribute(n);
          break;
        }
        if (
          l == null ||
          typeof l == "function" ||
          typeof l == "symbol" ||
          typeof l == "boolean"
        ) {
          e.removeAttribute(n);
          break;
        }
        (l = Lc("" + l)), e.setAttribute(n, l);
        break;
      case "action":
      case "formAction":
        if (typeof l == "function") {
          e.setAttribute(
            n,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
          );
          break;
        } else
          typeof u == "function" &&
            (n === "formAction"
              ? (t !== "input" && nt(e, t, "name", c.name, c, null),
                nt(e, t, "formEncType", c.formEncType, c, null),
                nt(e, t, "formMethod", c.formMethod, c, null),
                nt(e, t, "formTarget", c.formTarget, c, null))
              : (nt(e, t, "encType", c.encType, c, null),
                nt(e, t, "method", c.method, c, null),
                nt(e, t, "target", c.target, c, null)));
        if (l == null || typeof l == "symbol" || typeof l == "boolean") {
          e.removeAttribute(n);
          break;
        }
        (l = Lc("" + l)), e.setAttribute(n, l);
        break;
      case "onClick":
        l != null && (e.onclick = ol);
        break;
      case "onScroll":
        l != null && Ye("scroll", e);
        break;
      case "onScrollEnd":
        l != null && Ye("scrollend", e);
        break;
      case "dangerouslySetInnerHTML":
        if (l != null) {
          if (typeof l != "object" || !("__html" in l)) throw Error(i(61));
          if (((n = l.__html), n != null)) {
            if (c.children != null) throw Error(i(60));
            e.innerHTML = n;
          }
        }
        break;
      case "multiple":
        e.multiple = l && typeof l != "function" && typeof l != "symbol";
        break;
      case "muted":
        e.muted = l && typeof l != "function" && typeof l != "symbol";
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "ref":
        break;
      case "autoFocus":
        break;
      case "xlinkHref":
        if (
          l == null ||
          typeof l == "function" ||
          typeof l == "boolean" ||
          typeof l == "symbol"
        ) {
          e.removeAttribute("xlink:href");
          break;
        }
        (n = Lc("" + l)),
          e.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", n);
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        l != null && typeof l != "function" && typeof l != "symbol"
          ? e.setAttribute(n, "" + l)
          : e.removeAttribute(n);
        break;
      case "inert":
      case "allowFullScreen":
      case "async":
      case "autoPlay":
      case "controls":
      case "default":
      case "defer":
      case "disabled":
      case "disablePictureInPicture":
      case "disableRemotePlayback":
      case "formNoValidate":
      case "hidden":
      case "loop":
      case "noModule":
      case "noValidate":
      case "open":
      case "playsInline":
      case "readOnly":
      case "required":
      case "reversed":
      case "scoped":
      case "seamless":
      case "itemScope":
        l && typeof l != "function" && typeof l != "symbol"
          ? e.setAttribute(n, "")
          : e.removeAttribute(n);
        break;
      case "capture":
      case "download":
        l === !0
          ? e.setAttribute(n, "")
          : l !== !1 &&
            l != null &&
            typeof l != "function" &&
            typeof l != "symbol"
          ? e.setAttribute(n, l)
          : e.removeAttribute(n);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        l != null &&
        typeof l != "function" &&
        typeof l != "symbol" &&
        !isNaN(l) &&
        1 <= l
          ? e.setAttribute(n, l)
          : e.removeAttribute(n);
        break;
      case "rowSpan":
      case "start":
        l == null || typeof l == "function" || typeof l == "symbol" || isNaN(l)
          ? e.removeAttribute(n)
          : e.setAttribute(n, l);
        break;
      case "popover":
        Ye("beforetoggle", e), Ye("toggle", e), Bc(e, "popover", l);
        break;
      case "xlinkActuate":
        ul(e, "http://www.w3.org/1999/xlink", "xlink:actuate", l);
        break;
      case "xlinkArcrole":
        ul(e, "http://www.w3.org/1999/xlink", "xlink:arcrole", l);
        break;
      case "xlinkRole":
        ul(e, "http://www.w3.org/1999/xlink", "xlink:role", l);
        break;
      case "xlinkShow":
        ul(e, "http://www.w3.org/1999/xlink", "xlink:show", l);
        break;
      case "xlinkTitle":
        ul(e, "http://www.w3.org/1999/xlink", "xlink:title", l);
        break;
      case "xlinkType":
        ul(e, "http://www.w3.org/1999/xlink", "xlink:type", l);
        break;
      case "xmlBase":
        ul(e, "http://www.w3.org/XML/1998/namespace", "xml:base", l);
        break;
      case "xmlLang":
        ul(e, "http://www.w3.org/XML/1998/namespace", "xml:lang", l);
        break;
      case "xmlSpace":
        ul(e, "http://www.w3.org/XML/1998/namespace", "xml:space", l);
        break;
      case "is":
        Bc(e, "is", l);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < n.length) ||
          (n[0] !== "o" && n[0] !== "O") ||
          (n[1] !== "n" && n[1] !== "N")) &&
          ((n = Jv.get(n) || n), Bc(e, n, l));
    }
  }
  function Md(e, t, n, l, c, u) {
    switch (n) {
      case "style":
        zp(e, l, u);
        break;
      case "dangerouslySetInnerHTML":
        if (l != null) {
          if (typeof l != "object" || !("__html" in l)) throw Error(i(61));
          if (((n = l.__html), n != null)) {
            if (c.children != null) throw Error(i(60));
            e.innerHTML = n;
          }
        }
        break;
      case "children":
        typeof l == "string"
          ? or(e, l)
          : (typeof l == "number" || typeof l == "bigint") && or(e, "" + l);
        break;
      case "onScroll":
        l != null && Ye("scroll", e);
        break;
      case "onScrollEnd":
        l != null && Ye("scrollend", e);
        break;
      case "onClick":
        l != null && (e.onclick = ol);
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "innerHTML":
      case "ref":
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        if (!cr.hasOwnProperty(n))
          e: {
            if (
              n[0] === "o" &&
              n[1] === "n" &&
              ((c = n.endsWith("Capture")),
              (t = n.slice(2, c ? n.length - 7 : void 0)),
              (u = e[Oe] || null),
              (u = u != null ? u[n] : null),
              typeof u == "function" && e.removeEventListener(t, u, c),
              typeof l == "function")
            ) {
              typeof u != "function" &&
                u !== null &&
                (n in e
                  ? (e[n] = null)
                  : e.hasAttribute(n) && e.removeAttribute(n)),
                e.addEventListener(t, l, c);
              break e;
            }
            n in e
              ? (e[n] = l)
              : l === !0
              ? e.setAttribute(n, "")
              : Bc(e, n, l);
          }
    }
  }
  function un(e, t, n) {
    switch (t) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "img":
        Ye("error", e), Ye("load", e);
        var l = !1,
          c = !1,
          u;
        for (u in n)
          if (n.hasOwnProperty(u)) {
            var m = n[u];
            if (m != null)
              switch (u) {
                case "src":
                  l = !0;
                  break;
                case "srcSet":
                  c = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(i(137, t));
                default:
                  nt(e, t, u, m, n, null);
              }
          }
        c && nt(e, t, "srcSet", n.srcSet, n, null),
          l && nt(e, t, "src", n.src, n, null);
        return;
      case "input":
        Ye("invalid", e);
        var v = (u = m = c = null),
          A = null,
          j = null;
        for (l in n)
          if (n.hasOwnProperty(l)) {
            var Z = n[l];
            if (Z != null)
              switch (l) {
                case "name":
                  c = Z;
                  break;
                case "type":
                  m = Z;
                  break;
                case "checked":
                  A = Z;
                  break;
                case "defaultChecked":
                  j = Z;
                  break;
                case "value":
                  u = Z;
                  break;
                case "defaultValue":
                  v = Z;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (Z != null) throw Error(i(137, t));
                  break;
                default:
                  nt(e, t, l, Z, n, null);
              }
          }
        xp(e, u, v, A, j, m, c, !1);
        return;
      case "select":
        Ye("invalid", e), (l = m = u = null);
        for (c in n)
          if (n.hasOwnProperty(c) && ((v = n[c]), v != null))
            switch (c) {
              case "value":
                u = v;
                break;
              case "defaultValue":
                m = v;
                break;
              case "multiple":
                l = v;
              default:
                nt(e, t, c, v, n, null);
            }
        (t = u),
          (n = m),
          (e.multiple = !!l),
          t != null ? ur(e, !!l, t, !1) : n != null && ur(e, !!l, n, !0);
        return;
      case "textarea":
        Ye("invalid", e), (u = c = l = null);
        for (m in n)
          if (n.hasOwnProperty(m) && ((v = n[m]), v != null))
            switch (m) {
              case "value":
                l = v;
                break;
              case "defaultValue":
                c = v;
                break;
              case "children":
                u = v;
                break;
              case "dangerouslySetInnerHTML":
                if (v != null) throw Error(i(91));
                break;
              default:
                nt(e, t, m, v, n, null);
            }
        Tp(e, l, c, u);
        return;
      case "option":
        for (A in n)
          n.hasOwnProperty(A) &&
            ((l = n[A]), l != null) &&
            (A === "selected"
              ? (e.selected =
                  l && typeof l != "function" && typeof l != "symbol")
              : nt(e, t, A, l, n, null));
        return;
      case "dialog":
        Ye("beforetoggle", e), Ye("toggle", e), Ye("cancel", e), Ye("close", e);
        break;
      case "iframe":
      case "object":
        Ye("load", e);
        break;
      case "video":
      case "audio":
        for (l = 0; l < Ks.length; l++) Ye(Ks[l], e);
        break;
      case "image":
        Ye("error", e), Ye("load", e);
        break;
      case "details":
        Ye("toggle", e);
        break;
      case "embed":
      case "source":
      case "link":
        Ye("error", e), Ye("load", e);
      case "area":
      case "base":
      case "br":
      case "col":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "track":
      case "wbr":
      case "menuitem":
        for (j in n)
          if (n.hasOwnProperty(j) && ((l = n[j]), l != null))
            switch (j) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(i(137, t));
              default:
                nt(e, t, j, l, n, null);
            }
        return;
      default:
        if (Go(t)) {
          for (Z in n)
            n.hasOwnProperty(Z) &&
              ((l = n[Z]), l !== void 0 && Md(e, t, Z, l, n, void 0));
          return;
        }
    }
    for (v in n)
      n.hasOwnProperty(v) && ((l = n[v]), l != null && nt(e, t, v, l, n, null));
  }
  function xb(e, t, n, l) {
    switch (t) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "input":
        var c = null,
          u = null,
          m = null,
          v = null,
          A = null,
          j = null,
          Z = null;
        for (B in n) {
          var $ = n[B];
          if (n.hasOwnProperty(B) && $ != null)
            switch (B) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                A = $;
              default:
                l.hasOwnProperty(B) || nt(e, t, B, null, l, $);
            }
        }
        for (var k in l) {
          var B = l[k];
          if ((($ = n[k]), l.hasOwnProperty(k) && (B != null || $ != null)))
            switch (k) {
              case "type":
                u = B;
                break;
              case "name":
                c = B;
                break;
              case "checked":
                j = B;
                break;
              case "defaultChecked":
                Z = B;
                break;
              case "value":
                m = B;
                break;
              case "defaultValue":
                v = B;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (B != null) throw Error(i(137, t));
                break;
              default:
                B !== $ && nt(e, t, k, B, l, $);
            }
        }
        qo(e, m, v, A, j, Z, u, c);
        return;
      case "select":
        B = m = v = k = null;
        for (u in n)
          if (((A = n[u]), n.hasOwnProperty(u) && A != null))
            switch (u) {
              case "value":
                break;
              case "multiple":
                B = A;
              default:
                l.hasOwnProperty(u) || nt(e, t, u, null, l, A);
            }
        for (c in l)
          if (
            ((u = l[c]),
            (A = n[c]),
            l.hasOwnProperty(c) && (u != null || A != null))
          )
            switch (c) {
              case "value":
                k = u;
                break;
              case "defaultValue":
                v = u;
                break;
              case "multiple":
                m = u;
              default:
                u !== A && nt(e, t, c, u, l, A);
            }
        (t = v),
          (n = m),
          (l = B),
          k != null
            ? ur(e, !!n, k, !1)
            : !!l != !!n &&
              (t != null ? ur(e, !!n, t, !0) : ur(e, !!n, n ? [] : "", !1));
        return;
      case "textarea":
        B = k = null;
        for (v in n)
          if (
            ((c = n[v]),
            n.hasOwnProperty(v) && c != null && !l.hasOwnProperty(v))
          )
            switch (v) {
              case "value":
                break;
              case "children":
                break;
              default:
                nt(e, t, v, null, l, c);
            }
        for (m in l)
          if (
            ((c = l[m]),
            (u = n[m]),
            l.hasOwnProperty(m) && (c != null || u != null))
          )
            switch (m) {
              case "value":
                k = c;
                break;
              case "defaultValue":
                B = c;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (c != null) throw Error(i(91));
                break;
              default:
                c !== u && nt(e, t, m, c, l, u);
            }
        Sp(e, k, B);
        return;
      case "option":
        for (var ie in n)
          (k = n[ie]),
            n.hasOwnProperty(ie) &&
              k != null &&
              !l.hasOwnProperty(ie) &&
              (ie === "selected"
                ? (e.selected = !1)
                : nt(e, t, ie, null, l, k));
        for (A in l)
          (k = l[A]),
            (B = n[A]),
            l.hasOwnProperty(A) &&
              k !== B &&
              (k != null || B != null) &&
              (A === "selected"
                ? (e.selected =
                    k && typeof k != "function" && typeof k != "symbol")
                : nt(e, t, A, k, l, B));
        return;
      case "img":
      case "link":
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
      case "menuitem":
        for (var _e in n)
          (k = n[_e]),
            n.hasOwnProperty(_e) &&
              k != null &&
              !l.hasOwnProperty(_e) &&
              nt(e, t, _e, null, l, k);
        for (j in l)
          if (
            ((k = l[j]),
            (B = n[j]),
            l.hasOwnProperty(j) && k !== B && (k != null || B != null))
          )
            switch (j) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (k != null) throw Error(i(137, t));
                break;
              default:
                nt(e, t, j, k, l, B);
            }
        return;
      default:
        if (Go(t)) {
          for (var at in n)
            (k = n[at]),
              n.hasOwnProperty(at) &&
                k !== void 0 &&
                !l.hasOwnProperty(at) &&
                Md(e, t, at, void 0, l, k);
          for (Z in l)
            (k = l[Z]),
              (B = n[Z]),
              !l.hasOwnProperty(Z) ||
                k === B ||
                (k === void 0 && B === void 0) ||
                Md(e, t, Z, k, l, B);
          return;
        }
    }
    for (var M in n)
      (k = n[M]),
        n.hasOwnProperty(M) &&
          k != null &&
          !l.hasOwnProperty(M) &&
          nt(e, t, M, null, l, k);
    for ($ in l)
      (k = l[$]),
        (B = n[$]),
        !l.hasOwnProperty($) ||
          k === B ||
          (k == null && B == null) ||
          nt(e, t, $, k, l, B);
  }
  function Cg(e) {
    switch (e) {
      case "css":
      case "script":
      case "font":
      case "img":
      case "image":
      case "input":
      case "link":
        return !0;
      default:
        return !1;
    }
  }
  function Sb() {
    if (typeof performance.getEntriesByType == "function") {
      for (
        var e = 0, t = 0, n = performance.getEntriesByType("resource"), l = 0;
        l < n.length;
        l++
      ) {
        var c = n[l],
          u = c.transferSize,
          m = c.initiatorType,
          v = c.duration;
        if (u && v && Cg(m)) {
          for (m = 0, v = c.responseEnd, l += 1; l < n.length; l++) {
            var A = n[l],
              j = A.startTime;
            if (j > v) break;
            var Z = A.transferSize,
              $ = A.initiatorType;
            Z &&
              Cg($) &&
              ((A = A.responseEnd), (m += Z * (A < v ? 1 : (v - j) / (A - j))));
          }
          if ((--l, (t += (8 * (u + m)) / (c.duration / 1e3)), e++, 10 < e))
            break;
        }
      }
      if (0 < e) return t / e / 1e6;
    }
    return navigator.connection &&
      ((e = navigator.connection.downlink), typeof e == "number")
      ? e
      : 5;
  }
  var Nd = null,
    Od = null;
  function Uu(e) {
    return e.nodeType === 9 ? e : e.ownerDocument;
  }
  function Eg(e) {
    switch (e) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function wg(e, t) {
    if (e === 0)
      switch (t) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
    return e === 1 && t === "foreignObject" ? 0 : e;
  }
  function Dd(e, t) {
    return (
      e === "textarea" ||
      e === "noscript" ||
      typeof t.children == "string" ||
      typeof t.children == "number" ||
      typeof t.children == "bigint" ||
      (typeof t.dangerouslySetInnerHTML == "object" &&
        t.dangerouslySetInnerHTML !== null &&
        t.dangerouslySetInnerHTML.__html != null)
    );
  }
  var Rd = null;
  function Tb() {
    var e = window.event;
    return e && e.type === "popstate"
      ? e === Rd
        ? !1
        : ((Rd = e), !0)
      : ((Rd = null), !1);
  }
  var Mg = typeof setTimeout == "function" ? setTimeout : void 0,
    Ab = typeof clearTimeout == "function" ? clearTimeout : void 0,
    Ng = typeof Promise == "function" ? Promise : void 0,
    zb =
      typeof queueMicrotask == "function"
        ? queueMicrotask
        : typeof Ng < "u"
        ? function (e) {
            return Ng.resolve(null).then(e).catch(Cb);
          }
        : Mg;
  function Cb(e) {
    setTimeout(function () {
      throw e;
    });
  }
  function ai(e) {
    return e === "head";
  }
  function Og(e, t) {
    var n = t,
      l = 0;
    do {
      var c = n.nextSibling;
      if ((e.removeChild(n), c && c.nodeType === 8))
        if (((n = c.data), n === "/$" || n === "/&")) {
          if (l === 0) {
            e.removeChild(c), Lr(t);
            return;
          }
          l--;
        } else if (
          n === "$" ||
          n === "$?" ||
          n === "$~" ||
          n === "$!" ||
          n === "&"
        )
          l++;
        else if (n === "html") Fs(e.ownerDocument.documentElement);
        else if (n === "head") {
          (n = e.ownerDocument.head), Fs(n);
          for (var u = n.firstChild; u; ) {
            var m = u.nextSibling,
              v = u.nodeName;
            u[St] ||
              v === "SCRIPT" ||
              v === "STYLE" ||
              (v === "LINK" && u.rel.toLowerCase() === "stylesheet") ||
              n.removeChild(u),
              (u = m);
          }
        } else n === "body" && Fs(e.ownerDocument.body);
      n = c;
    } while (n);
    Lr(t);
  }
  function Dg(e, t) {
    var n = e;
    e = 0;
    do {
      var l = n.nextSibling;
      if (
        (n.nodeType === 1
          ? t
            ? ((n._stashedDisplay = n.style.display),
              (n.style.display = "none"))
            : ((n.style.display = n._stashedDisplay || ""),
              n.getAttribute("style") === "" && n.removeAttribute("style"))
          : n.nodeType === 3 &&
            (t
              ? ((n._stashedText = n.nodeValue), (n.nodeValue = ""))
              : (n.nodeValue = n._stashedText || "")),
        l && l.nodeType === 8)
      )
        if (((n = l.data), n === "/$")) {
          if (e === 0) break;
          e--;
        } else (n !== "$" && n !== "$?" && n !== "$~" && n !== "$!") || e++;
      n = l;
    } while (n);
  }
  function jd(e) {
    var t = e.firstChild;
    for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
      var n = t;
      switch (((t = t.nextSibling), n.nodeName)) {
        case "HTML":
        case "HEAD":
        case "BODY":
          jd(n), jt(n);
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (n.rel.toLowerCase() === "stylesheet") continue;
      }
      e.removeChild(n);
    }
  }
  function Eb(e, t, n, l) {
    for (; e.nodeType === 1; ) {
      var c = n;
      if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
        if (!l && (e.nodeName !== "INPUT" || e.type !== "hidden")) break;
      } else if (l) {
        if (!e[St])
          switch (t) {
            case "meta":
              if (!e.hasAttribute("itemprop")) break;
              return e;
            case "link":
              if (
                ((u = e.getAttribute("rel")),
                u === "stylesheet" && e.hasAttribute("data-precedence"))
              )
                break;
              if (
                u !== c.rel ||
                e.getAttribute("href") !==
                  (c.href == null || c.href === "" ? null : c.href) ||
                e.getAttribute("crossorigin") !==
                  (c.crossOrigin == null ? null : c.crossOrigin) ||
                e.getAttribute("title") !== (c.title == null ? null : c.title)
              )
                break;
              return e;
            case "style":
              if (e.hasAttribute("data-precedence")) break;
              return e;
            case "script":
              if (
                ((u = e.getAttribute("src")),
                (u !== (c.src == null ? null : c.src) ||
                  e.getAttribute("type") !== (c.type == null ? null : c.type) ||
                  e.getAttribute("crossorigin") !==
                    (c.crossOrigin == null ? null : c.crossOrigin)) &&
                  u &&
                  e.hasAttribute("async") &&
                  !e.hasAttribute("itemprop"))
              )
                break;
              return e;
            default:
              return e;
          }
      } else if (t === "input" && e.type === "hidden") {
        var u = c.name == null ? null : "" + c.name;
        if (c.type === "hidden" && e.getAttribute("name") === u) return e;
      } else return e;
      if (((e = Ma(e.nextSibling)), e === null)) break;
    }
    return null;
  }
  function wb(e, t, n) {
    if (t === "") return null;
    for (; e.nodeType !== 3; )
      if (
        ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") &&
          !n) ||
        ((e = Ma(e.nextSibling)), e === null)
      )
        return null;
    return e;
  }
  function Rg(e, t) {
    for (; e.nodeType !== 8; )
      if (
        ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") &&
          !t) ||
        ((e = Ma(e.nextSibling)), e === null)
      )
        return null;
    return e;
  }
  function kd(e) {
    return e.data === "$?" || e.data === "$~";
  }
  function Ud(e) {
    return (
      e.data === "$!" ||
      (e.data === "$?" && e.ownerDocument.readyState !== "loading")
    );
  }
  function Mb(e, t) {
    var n = e.ownerDocument;
    if (e.data === "$~") e._reactRetry = t;
    else if (e.data !== "$?" || n.readyState !== "loading") t();
    else {
      var l = function () {
        t(), n.removeEventListener("DOMContentLoaded", l);
      };
      n.addEventListener("DOMContentLoaded", l), (e._reactRetry = l);
    }
  }
  function Ma(e) {
    for (; e != null; e = e.nextSibling) {
      var t = e.nodeType;
      if (t === 1 || t === 3) break;
      if (t === 8) {
        if (
          ((t = e.data),
          t === "$" ||
            t === "$!" ||
            t === "$?" ||
            t === "$~" ||
            t === "&" ||
            t === "F!" ||
            t === "F")
        )
          break;
        if (t === "/$" || t === "/&") return null;
      }
    }
    return e;
  }
  var Hd = null;
  function jg(e) {
    e = e.nextSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var n = e.data;
        if (n === "/$" || n === "/&") {
          if (t === 0) return Ma(e.nextSibling);
          t--;
        } else
          (n !== "$" && n !== "$!" && n !== "$?" && n !== "$~" && n !== "&") ||
            t++;
      }
      e = e.nextSibling;
    }
    return null;
  }
  function kg(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var n = e.data;
        if (n === "$" || n === "$!" || n === "$?" || n === "$~" || n === "&") {
          if (t === 0) return e;
          t--;
        } else (n !== "/$" && n !== "/&") || t++;
      }
      e = e.previousSibling;
    }
    return null;
  }
  function Ug(e, t, n) {
    switch (((t = Uu(n)), e)) {
      case "html":
        if (((e = t.documentElement), !e)) throw Error(i(452));
        return e;
      case "head":
        if (((e = t.head), !e)) throw Error(i(453));
        return e;
      case "body":
        if (((e = t.body), !e)) throw Error(i(454));
        return e;
      default:
        throw Error(i(451));
    }
  }
  function Fs(e) {
    for (var t = e.attributes; t.length; ) e.removeAttributeNode(t[0]);
    jt(e);
  }
  var Na = new Map(),
    Hg = new Set();
  function Hu(e) {
    return typeof e.getRootNode == "function"
      ? e.getRootNode()
      : e.nodeType === 9
      ? e
      : e.ownerDocument;
  }
  var Cl = G.d;
  G.d = { f: Nb, r: Ob, D: Db, C: Rb, L: jb, m: kb, X: Hb, S: Ub, M: Bb };
  function Nb() {
    var e = Cl.f(),
      t = wu();
    return e || t;
  }
  function Ob(e) {
    var t = jn(e);
    t !== null && t.tag === 5 && t.type === "form" ? em(t) : Cl.r(e);
  }
  var Br = typeof document > "u" ? null : document;
  function Bg(e, t, n) {
    var l = Br;
    if (l && typeof t == "string" && t) {
      var c = Sa(t);
      (c = 'link[rel="' + e + '"][href="' + c + '"]'),
        typeof n == "string" && (c += '[crossorigin="' + n + '"]'),
        Hg.has(c) ||
          (Hg.add(c),
          (e = { rel: e, crossOrigin: n, href: t }),
          l.querySelector(c) === null &&
            ((t = l.createElement("link")),
            un(t, "link", e),
            ke(t),
            l.head.appendChild(t)));
    }
  }
  function Db(e) {
    Cl.D(e), Bg("dns-prefetch", e, null);
  }
  function Rb(e, t) {
    Cl.C(e, t), Bg("preconnect", e, t);
  }
  function jb(e, t, n) {
    Cl.L(e, t, n);
    var l = Br;
    if (l && e && t) {
      var c = 'link[rel="preload"][as="' + Sa(t) + '"]';
      t === "image" && n && n.imageSrcSet
        ? ((c += '[imagesrcset="' + Sa(n.imageSrcSet) + '"]'),
          typeof n.imageSizes == "string" &&
            (c += '[imagesizes="' + Sa(n.imageSizes) + '"]'))
        : (c += '[href="' + Sa(e) + '"]');
      var u = c;
      switch (t) {
        case "style":
          u = Yr(e);
          break;
        case "script":
          u = qr(e);
      }
      Na.has(u) ||
        ((e = _(
          {
            rel: "preload",
            href: t === "image" && n && n.imageSrcSet ? void 0 : e,
            as: t,
          },
          n
        )),
        Na.set(u, e),
        l.querySelector(c) !== null ||
          (t === "style" && l.querySelector(Ws(u))) ||
          (t === "script" && l.querySelector($s(u))) ||
          ((t = l.createElement("link")),
          un(t, "link", e),
          ke(t),
          l.head.appendChild(t)));
    }
  }
  function kb(e, t) {
    Cl.m(e, t);
    var n = Br;
    if (n && e) {
      var l = t && typeof t.as == "string" ? t.as : "script",
        c =
          'link[rel="modulepreload"][as="' + Sa(l) + '"][href="' + Sa(e) + '"]',
        u = c;
      switch (l) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          u = qr(e);
      }
      if (
        !Na.has(u) &&
        ((e = _({ rel: "modulepreload", href: e }, t)),
        Na.set(u, e),
        n.querySelector(c) === null)
      ) {
        switch (l) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (n.querySelector($s(u))) return;
        }
        (l = n.createElement("link")),
          un(l, "link", e),
          ke(l),
          n.head.appendChild(l);
      }
    }
  }
  function Ub(e, t, n) {
    Cl.S(e, t, n);
    var l = Br;
    if (l && e) {
      var c = At(l).hoistableStyles,
        u = Yr(e);
      t = t || "default";
      var m = c.get(u);
      if (!m) {
        var v = { loading: 0, preload: null };
        if ((m = l.querySelector(Ws(u)))) v.loading = 5;
        else {
          (e = _({ rel: "stylesheet", href: e, "data-precedence": t }, n)),
            (n = Na.get(u)) && Bd(e, n);
          var A = (m = l.createElement("link"));
          ke(A),
            un(A, "link", e),
            (A._p = new Promise(function (j, Z) {
              (A.onload = j), (A.onerror = Z);
            })),
            A.addEventListener("load", function () {
              v.loading |= 1;
            }),
            A.addEventListener("error", function () {
              v.loading |= 2;
            }),
            (v.loading |= 4),
            Bu(m, t, l);
        }
        (m = { type: "stylesheet", instance: m, count: 1, state: v }),
          c.set(u, m);
      }
    }
  }
  function Hb(e, t) {
    Cl.X(e, t);
    var n = Br;
    if (n && e) {
      var l = At(n).hoistableScripts,
        c = qr(e),
        u = l.get(c);
      u ||
        ((u = n.querySelector($s(c))),
        u ||
          ((e = _({ src: e, async: !0 }, t)),
          (t = Na.get(c)) && Yd(e, t),
          (u = n.createElement("script")),
          ke(u),
          un(u, "link", e),
          n.head.appendChild(u)),
        (u = { type: "script", instance: u, count: 1, state: null }),
        l.set(c, u));
    }
  }
  function Bb(e, t) {
    Cl.M(e, t);
    var n = Br;
    if (n && e) {
      var l = At(n).hoistableScripts,
        c = qr(e),
        u = l.get(c);
      u ||
        ((u = n.querySelector($s(c))),
        u ||
          ((e = _({ src: e, async: !0, type: "module" }, t)),
          (t = Na.get(c)) && Yd(e, t),
          (u = n.createElement("script")),
          ke(u),
          un(u, "link", e),
          n.head.appendChild(u)),
        (u = { type: "script", instance: u, count: 1, state: null }),
        l.set(c, u));
    }
  }
  function Yg(e, t, n, l) {
    var c = (c = de.current) ? Hu(c) : null;
    if (!c) throw Error(i(446));
    switch (e) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof n.precedence == "string" && typeof n.href == "string"
          ? ((t = Yr(n.href)),
            (n = At(c).hoistableStyles),
            (l = n.get(t)),
            l ||
              ((l = { type: "style", instance: null, count: 0, state: null }),
              n.set(t, l)),
            l)
          : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (
          n.rel === "stylesheet" &&
          typeof n.href == "string" &&
          typeof n.precedence == "string"
        ) {
          e = Yr(n.href);
          var u = At(c).hoistableStyles,
            m = u.get(e);
          if (
            (m ||
              ((c = c.ownerDocument || c),
              (m = {
                type: "stylesheet",
                instance: null,
                count: 0,
                state: { loading: 0, preload: null },
              }),
              u.set(e, m),
              (u = c.querySelector(Ws(e))) &&
                !u._p &&
                ((m.instance = u), (m.state.loading = 5)),
              Na.has(e) ||
                ((n = {
                  rel: "preload",
                  as: "style",
                  href: n.href,
                  crossOrigin: n.crossOrigin,
                  integrity: n.integrity,
                  media: n.media,
                  hrefLang: n.hrefLang,
                  referrerPolicy: n.referrerPolicy,
                }),
                Na.set(e, n),
                u || Yb(c, e, n, m.state))),
            t && l === null)
          )
            throw Error(i(528, ""));
          return m;
        }
        if (t && l !== null) throw Error(i(529, ""));
        return null;
      case "script":
        return (
          (t = n.async),
          (n = n.src),
          typeof n == "string" &&
          t &&
          typeof t != "function" &&
          typeof t != "symbol"
            ? ((t = qr(n)),
              (n = At(c).hoistableScripts),
              (l = n.get(t)),
              l ||
                ((l = {
                  type: "script",
                  instance: null,
                  count: 0,
                  state: null,
                }),
                n.set(t, l)),
              l)
            : { type: "void", instance: null, count: 0, state: null }
        );
      default:
        throw Error(i(444, e));
    }
  }
  function Yr(e) {
    return 'href="' + Sa(e) + '"';
  }
  function Ws(e) {
    return 'link[rel="stylesheet"][' + e + "]";
  }
  function qg(e) {
    return _({}, e, { "data-precedence": e.precedence, precedence: null });
  }
  function Yb(e, t, n, l) {
    e.querySelector('link[rel="preload"][as="style"][' + t + "]")
      ? (l.loading = 1)
      : ((t = e.createElement("link")),
        (l.preload = t),
        t.addEventListener("load", function () {
          return (l.loading |= 1);
        }),
        t.addEventListener("error", function () {
          return (l.loading |= 2);
        }),
        un(t, "link", n),
        ke(t),
        e.head.appendChild(t));
  }
  function qr(e) {
    return '[src="' + Sa(e) + '"]';
  }
  function $s(e) {
    return "script[async]" + e;
  }
  function Lg(e, t, n) {
    if ((t.count++, t.instance === null))
      switch (t.type) {
        case "style":
          var l = e.querySelector('style[data-href~="' + Sa(n.href) + '"]');
          if (l) return (t.instance = l), ke(l), l;
          var c = _({}, n, {
            "data-href": n.href,
            "data-precedence": n.precedence,
            href: null,
            precedence: null,
          });
          return (
            (l = (e.ownerDocument || e).createElement("style")),
            ke(l),
            un(l, "style", c),
            Bu(l, n.precedence, e),
            (t.instance = l)
          );
        case "stylesheet":
          c = Yr(n.href);
          var u = e.querySelector(Ws(c));
          if (u) return (t.state.loading |= 4), (t.instance = u), ke(u), u;
          (l = qg(n)),
            (c = Na.get(c)) && Bd(l, c),
            (u = (e.ownerDocument || e).createElement("link")),
            ke(u);
          var m = u;
          return (
            (m._p = new Promise(function (v, A) {
              (m.onload = v), (m.onerror = A);
            })),
            un(u, "link", l),
            (t.state.loading |= 4),
            Bu(u, n.precedence, e),
            (t.instance = u)
          );
        case "script":
          return (
            (u = qr(n.src)),
            (c = e.querySelector($s(u)))
              ? ((t.instance = c), ke(c), c)
              : ((l = n),
                (c = Na.get(u)) && ((l = _({}, n)), Yd(l, c)),
                (e = e.ownerDocument || e),
                (c = e.createElement("script")),
                ke(c),
                un(c, "link", l),
                e.head.appendChild(c),
                (t.instance = c))
          );
        case "void":
          return null;
        default:
          throw Error(i(443, t.type));
      }
    else
      t.type === "stylesheet" &&
        (t.state.loading & 4) === 0 &&
        ((l = t.instance), (t.state.loading |= 4), Bu(l, n.precedence, e));
    return t.instance;
  }
  function Bu(e, t, n) {
    for (
      var l = n.querySelectorAll(
          'link[rel="stylesheet"][data-precedence],style[data-precedence]'
        ),
        c = l.length ? l[l.length - 1] : null,
        u = c,
        m = 0;
      m < l.length;
      m++
    ) {
      var v = l[m];
      if (v.dataset.precedence === t) u = v;
      else if (u !== c) break;
    }
    u
      ? u.parentNode.insertBefore(e, u.nextSibling)
      : ((t = n.nodeType === 9 ? n.head : n), t.insertBefore(e, t.firstChild));
  }
  function Bd(e, t) {
    e.crossOrigin == null && (e.crossOrigin = t.crossOrigin),
      e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy),
      e.title == null && (e.title = t.title);
  }
  function Yd(e, t) {
    e.crossOrigin == null && (e.crossOrigin = t.crossOrigin),
      e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy),
      e.integrity == null && (e.integrity = t.integrity);
  }
  var Yu = null;
  function Gg(e, t, n) {
    if (Yu === null) {
      var l = new Map(),
        c = (Yu = new Map());
      c.set(n, l);
    } else (c = Yu), (l = c.get(n)), l || ((l = new Map()), c.set(n, l));
    if (l.has(e)) return l;
    for (
      l.set(e, null), n = n.getElementsByTagName(e), c = 0;
      c < n.length;
      c++
    ) {
      var u = n[c];
      if (
        !(
          u[St] ||
          u[Me] ||
          (e === "link" && u.getAttribute("rel") === "stylesheet")
        ) &&
        u.namespaceURI !== "http://www.w3.org/2000/svg"
      ) {
        var m = u.getAttribute(t) || "";
        m = e + m;
        var v = l.get(m);
        v ? v.push(u) : l.set(m, [u]);
      }
    }
    return l;
  }
  function Vg(e, t, n) {
    (e = e.ownerDocument || e),
      e.head.insertBefore(
        n,
        t === "title" ? e.querySelector("head > title") : null
      );
  }
  function qb(e, t, n) {
    if (n === 1 || t.itemProp != null) return !1;
    switch (e) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (
          typeof t.precedence != "string" ||
          typeof t.href != "string" ||
          t.href === ""
        )
          break;
        return !0;
      case "link":
        if (
          typeof t.rel != "string" ||
          typeof t.href != "string" ||
          t.href === "" ||
          t.onLoad ||
          t.onError
        )
          break;
        return t.rel === "stylesheet"
          ? ((e = t.disabled), typeof t.precedence == "string" && e == null)
          : !0;
      case "script":
        if (
          t.async &&
          typeof t.async != "function" &&
          typeof t.async != "symbol" &&
          !t.onLoad &&
          !t.onError &&
          t.src &&
          typeof t.src == "string"
        )
          return !0;
    }
    return !1;
  }
  function Xg(e) {
    return !(e.type === "stylesheet" && (e.state.loading & 3) === 0);
  }
  function Lb(e, t, n, l) {
    if (
      n.type === "stylesheet" &&
      (typeof l.media != "string" || matchMedia(l.media).matches !== !1) &&
      (n.state.loading & 4) === 0
    ) {
      if (n.instance === null) {
        var c = Yr(l.href),
          u = t.querySelector(Ws(c));
        if (u) {
          (t = u._p),
            t !== null &&
              typeof t == "object" &&
              typeof t.then == "function" &&
              (e.count++, (e = qu.bind(e)), t.then(e, e)),
            (n.state.loading |= 4),
            (n.instance = u),
            ke(u);
          return;
        }
        (u = t.ownerDocument || t),
          (l = qg(l)),
          (c = Na.get(c)) && Bd(l, c),
          (u = u.createElement("link")),
          ke(u);
        var m = u;
        (m._p = new Promise(function (v, A) {
          (m.onload = v), (m.onerror = A);
        })),
          un(u, "link", l),
          (n.instance = u);
      }
      e.stylesheets === null && (e.stylesheets = new Map()),
        e.stylesheets.set(n, t),
        (t = n.state.preload) &&
          (n.state.loading & 3) === 0 &&
          (e.count++,
          (n = qu.bind(e)),
          t.addEventListener("load", n),
          t.addEventListener("error", n));
    }
  }
  var qd = 0;
  function Gb(e, t) {
    return (
      e.stylesheets && e.count === 0 && Gu(e, e.stylesheets),
      0 < e.count || 0 < e.imgCount
        ? function (n) {
            var l = setTimeout(function () {
              if ((e.stylesheets && Gu(e, e.stylesheets), e.unsuspend)) {
                var u = e.unsuspend;
                (e.unsuspend = null), u();
              }
            }, 6e4 + t);
            0 < e.imgBytes && qd === 0 && (qd = 62500 * Sb());
            var c = setTimeout(function () {
              if (
                ((e.waitingForImages = !1),
                e.count === 0 &&
                  (e.stylesheets && Gu(e, e.stylesheets), e.unsuspend))
              ) {
                var u = e.unsuspend;
                (e.unsuspend = null), u();
              }
            }, (e.imgBytes > qd ? 50 : 800) + t);
            return (
              (e.unsuspend = n),
              function () {
                (e.unsuspend = null), clearTimeout(l), clearTimeout(c);
              }
            );
          }
        : null
    );
  }
  function qu() {
    if (
      (this.count--,
      this.count === 0 && (this.imgCount === 0 || !this.waitingForImages))
    ) {
      if (this.stylesheets) Gu(this, this.stylesheets);
      else if (this.unsuspend) {
        var e = this.unsuspend;
        (this.unsuspend = null), e();
      }
    }
  }
  var Lu = null;
  function Gu(e, t) {
    (e.stylesheets = null),
      e.unsuspend !== null &&
        (e.count++,
        (Lu = new Map()),
        t.forEach(Vb, e),
        (Lu = null),
        qu.call(e));
  }
  function Vb(e, t) {
    if (!(t.state.loading & 4)) {
      var n = Lu.get(e);
      if (n) var l = n.get(null);
      else {
        (n = new Map()), Lu.set(e, n);
        for (
          var c = e.querySelectorAll(
              "link[data-precedence],style[data-precedence]"
            ),
            u = 0;
          u < c.length;
          u++
        ) {
          var m = c[u];
          (m.nodeName === "LINK" || m.getAttribute("media") !== "not all") &&
            (n.set(m.dataset.precedence, m), (l = m));
        }
        l && n.set(null, l);
      }
      (c = t.instance),
        (m = c.getAttribute("data-precedence")),
        (u = n.get(m) || l),
        u === l && n.set(null, c),
        n.set(m, c),
        this.count++,
        (l = qu.bind(this)),
        c.addEventListener("load", l),
        c.addEventListener("error", l),
        u
          ? u.parentNode.insertBefore(c, u.nextSibling)
          : ((e = e.nodeType === 9 ? e.head : e),
            e.insertBefore(c, e.firstChild)),
        (t.state.loading |= 4);
    }
  }
  var Ps = {
    $$typeof: K,
    Provider: null,
    Consumer: null,
    _currentValue: V,
    _currentValue2: V,
    _threadCount: 0,
  };
  function Xb(e, t, n, l, c, u, m, v, A) {
    (this.tag = 1),
      (this.containerInfo = e),
      (this.pingCache = this.current = this.pendingChildren = null),
      (this.timeoutHandle = -1),
      (this.callbackNode =
        this.next =
        this.pendingContext =
        this.context =
        this.cancelPendingCommit =
          null),
      (this.callbackPriority = 0),
      (this.expirationTimes = Se(-1)),
      (this.entangledLanes =
        this.shellSuspendCounter =
        this.errorRecoveryDisabledLanes =
        this.expiredLanes =
        this.warmLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = Se(0)),
      (this.hiddenUpdates = Se(null)),
      (this.identifierPrefix = l),
      (this.onUncaughtError = c),
      (this.onCaughtError = u),
      (this.onRecoverableError = m),
      (this.pooledCache = null),
      (this.pooledCacheLanes = 0),
      (this.formState = A),
      (this.incompleteTransitions = new Map());
  }
  function Qg(e, t, n, l, c, u, m, v, A, j, Z, $) {
    return (
      (e = new Xb(e, t, n, m, A, j, Z, $, v)),
      (t = 1),
      u === !0 && (t |= 24),
      (u = $n(3, null, null, t)),
      (e.current = u),
      (u.stateNode = e),
      (t = _f()),
      t.refCount++,
      (e.pooledCache = t),
      t.refCount++,
      (u.memoizedState = { element: l, isDehydrated: n, cache: t }),
      Tf(u),
      e
    );
  }
  function Zg(e) {
    return e ? ((e = yr), e) : yr;
  }
  function Kg(e, t, n, l, c, u) {
    (c = Zg(c)),
      l.context === null ? (l.context = c) : (l.pendingContext = c),
      (l = Zl(t)),
      (l.payload = { element: n }),
      (u = u === void 0 ? null : u),
      u !== null && (l.callback = u),
      (n = Kl(e, l, t)),
      n !== null && (qn(n, e, t), Ns(n, e, t));
  }
  function Jg(e, t) {
    if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
      var n = e.retryLane;
      e.retryLane = n !== 0 && n < t ? n : t;
    }
  }
  function Ld(e, t) {
    Jg(e, t), (e = e.alternate) && Jg(e, t);
  }
  function Fg(e) {
    if (e.tag === 13 || e.tag === 31) {
      var t = Ni(e, 67108864);
      t !== null && qn(t, e, 67108864), Ld(e, 67108864);
    }
  }
  function Wg(e) {
    if (e.tag === 13 || e.tag === 31) {
      var t = na();
      t = xe(t);
      var n = Ni(e, t);
      n !== null && qn(n, e, t), Ld(e, t);
    }
  }
  var Vu = !0;
  function Qb(e, t, n, l) {
    var c = O.T;
    O.T = null;
    var u = G.p;
    try {
      (G.p = 2), Gd(e, t, n, l);
    } finally {
      (G.p = u), (O.T = c);
    }
  }
  function Zb(e, t, n, l) {
    var c = O.T;
    O.T = null;
    var u = G.p;
    try {
      (G.p = 8), Gd(e, t, n, l);
    } finally {
      (G.p = u), (O.T = c);
    }
  }
  function Gd(e, t, n, l) {
    if (Vu) {
      var c = Vd(l);
      if (c === null) wd(e, t, l, Xu, n), Pg(e, l);
      else if (Jb(c, e, t, n, l)) l.stopPropagation();
      else if ((Pg(e, l), t & 4 && -1 < Kb.indexOf(e))) {
        for (; c !== null; ) {
          var u = jn(c);
          if (u !== null)
            switch (u.tag) {
              case 3:
                if (((u = u.stateNode), u.current.memoizedState.isDehydrated)) {
                  var m = Jt(u.pendingLanes);
                  if (m !== 0) {
                    var v = u;
                    for (v.pendingLanes |= 2, v.entangledLanes |= 2; m; ) {
                      var A = 1 << (31 - qt(m));
                      (v.entanglements[1] |= A), (m &= ~A);
                    }
                    Ia(u), (We & 6) === 0 && ((Cu = Rt() + 500), Zs(0));
                  }
                }
                break;
              case 31:
              case 13:
                (v = Ni(u, 2)), v !== null && qn(v, u, 2), wu(), Ld(u, 2);
            }
          if (((u = Vd(l)), u === null && wd(e, t, l, Xu, n), u === c)) break;
          c = u;
        }
        c !== null && l.stopPropagation();
      } else wd(e, t, l, null, n);
    }
  }
  function Vd(e) {
    return (e = Xo(e)), Xd(e);
  }
  var Xu = null;
  function Xd(e) {
    if (((Xu = null), (e = Tt(e)), e !== null)) {
      var t = o(e);
      if (t === null) e = null;
      else {
        var n = t.tag;
        if (n === 13) {
          if (((e = d(t)), e !== null)) return e;
          e = null;
        } else if (n === 31) {
          if (((e = h(t)), e !== null)) return e;
          e = null;
        } else if (n === 3) {
          if (t.stateNode.current.memoizedState.isDehydrated)
            return t.tag === 3 ? t.stateNode.containerInfo : null;
          e = null;
        } else t !== e && (e = null);
      }
    }
    return (Xu = e), null;
  }
  function $g(e) {
    switch (e) {
      case "beforetoggle":
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "toggle":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 2;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 8;
      case "message":
        switch (Yt()) {
          case Ba:
            return 2;
          case yt:
            return 8;
          case hn:
          case Rn:
            return 32;
          case ma:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var Qd = !1,
    li = null,
    ii = null,
    ri = null,
    Is = new Map(),
    ec = new Map(),
    si = [],
    Kb =
      "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
        " "
      );
  function Pg(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        li = null;
        break;
      case "dragenter":
      case "dragleave":
        ii = null;
        break;
      case "mouseover":
      case "mouseout":
        ri = null;
        break;
      case "pointerover":
      case "pointerout":
        Is.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        ec.delete(t.pointerId);
    }
  }
  function tc(e, t, n, l, c, u) {
    return e === null || e.nativeEvent !== u
      ? ((e = {
          blockedOn: t,
          domEventName: n,
          eventSystemFlags: l,
          nativeEvent: u,
          targetContainers: [c],
        }),
        t !== null && ((t = jn(t)), t !== null && Fg(t)),
        e)
      : ((e.eventSystemFlags |= l),
        (t = e.targetContainers),
        c !== null && t.indexOf(c) === -1 && t.push(c),
        e);
  }
  function Jb(e, t, n, l, c) {
    switch (t) {
      case "focusin":
        return (li = tc(li, e, t, n, l, c)), !0;
      case "dragenter":
        return (ii = tc(ii, e, t, n, l, c)), !0;
      case "mouseover":
        return (ri = tc(ri, e, t, n, l, c)), !0;
      case "pointerover":
        var u = c.pointerId;
        return Is.set(u, tc(Is.get(u) || null, e, t, n, l, c)), !0;
      case "gotpointercapture":
        return (
          (u = c.pointerId), ec.set(u, tc(ec.get(u) || null, e, t, n, l, c)), !0
        );
    }
    return !1;
  }
  function Ig(e) {
    var t = Tt(e.target);
    if (t !== null) {
      var n = o(t);
      if (n !== null) {
        if (((t = n.tag), t === 13)) {
          if (((t = d(n)), t !== null)) {
            (e.blockedOn = t),
              vt(e.priority, function () {
                Wg(n);
              });
            return;
          }
        } else if (t === 31) {
          if (((t = h(n)), t !== null)) {
            (e.blockedOn = t),
              vt(e.priority, function () {
                Wg(n);
              });
            return;
          }
        } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
          e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
          return;
        }
      }
    }
    e.blockedOn = null;
  }
  function Qu(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var n = Vd(e.nativeEvent);
      if (n === null) {
        n = e.nativeEvent;
        var l = new n.constructor(n.type, n);
        (Vo = l), n.target.dispatchEvent(l), (Vo = null);
      } else return (t = jn(n)), t !== null && Fg(t), (e.blockedOn = n), !1;
      t.shift();
    }
    return !0;
  }
  function e1(e, t, n) {
    Qu(e) && n.delete(t);
  }
  function Fb() {
    (Qd = !1),
      li !== null && Qu(li) && (li = null),
      ii !== null && Qu(ii) && (ii = null),
      ri !== null && Qu(ri) && (ri = null),
      Is.forEach(e1),
      ec.forEach(e1);
  }
  function Zu(e, t) {
    e.blockedOn === t &&
      ((e.blockedOn = null),
      Qd ||
        ((Qd = !0),
        f.unstable_scheduleCallback(f.unstable_NormalPriority, Fb)));
  }
  var Ku = null;
  function t1(e) {
    Ku !== e &&
      ((Ku = e),
      f.unstable_scheduleCallback(f.unstable_NormalPriority, function () {
        Ku === e && (Ku = null);
        for (var t = 0; t < e.length; t += 3) {
          var n = e[t],
            l = e[t + 1],
            c = e[t + 2];
          if (typeof l != "function") {
            if (Xd(l || n) === null) continue;
            break;
          }
          var u = jn(n);
          u !== null &&
            (e.splice(t, 3),
            (t -= 3),
            Vf(u, { pending: !0, data: c, method: n.method, action: l }, l, c));
        }
      }));
  }
  function Lr(e) {
    function t(A) {
      return Zu(A, e);
    }
    li !== null && Zu(li, e),
      ii !== null && Zu(ii, e),
      ri !== null && Zu(ri, e),
      Is.forEach(t),
      ec.forEach(t);
    for (var n = 0; n < si.length; n++) {
      var l = si[n];
      l.blockedOn === e && (l.blockedOn = null);
    }
    for (; 0 < si.length && ((n = si[0]), n.blockedOn === null); )
      Ig(n), n.blockedOn === null && si.shift();
    if (((n = (e.ownerDocument || e).$$reactFormReplay), n != null))
      for (l = 0; l < n.length; l += 3) {
        var c = n[l],
          u = n[l + 1],
          m = c[Oe] || null;
        if (typeof u == "function") m || t1(n);
        else if (m) {
          var v = null;
          if (u && u.hasAttribute("formAction")) {
            if (((c = u), (m = u[Oe] || null))) v = m.formAction;
            else if (Xd(c) !== null) continue;
          } else v = m.action;
          typeof v == "function" ? (n[l + 1] = v) : (n.splice(l, 3), (l -= 3)),
            t1(n);
        }
      }
  }
  function n1() {
    function e(u) {
      u.canIntercept &&
        u.info === "react-transition" &&
        u.intercept({
          handler: function () {
            return new Promise(function (m) {
              return (c = m);
            });
          },
          focusReset: "manual",
          scroll: "manual",
        });
    }
    function t() {
      c !== null && (c(), (c = null)), l || setTimeout(n, 20);
    }
    function n() {
      if (!l && !navigation.transition) {
        var u = navigation.currentEntry;
        u &&
          u.url != null &&
          navigation.navigate(u.url, {
            state: u.getState(),
            info: "react-transition",
            history: "replace",
          });
      }
    }
    if (typeof navigation == "object") {
      var l = !1,
        c = null;
      return (
        navigation.addEventListener("navigate", e),
        navigation.addEventListener("navigatesuccess", t),
        navigation.addEventListener("navigateerror", t),
        setTimeout(n, 100),
        function () {
          (l = !0),
            navigation.removeEventListener("navigate", e),
            navigation.removeEventListener("navigatesuccess", t),
            navigation.removeEventListener("navigateerror", t),
            c !== null && (c(), (c = null));
        }
      );
    }
  }
  function Zd(e) {
    this._internalRoot = e;
  }
  (Ju.prototype.render = Zd.prototype.render =
    function (e) {
      var t = this._internalRoot;
      if (t === null) throw Error(i(409));
      var n = t.current,
        l = na();
      Kg(n, l, e, t, null, null);
    }),
    (Ju.prototype.unmount = Zd.prototype.unmount =
      function () {
        var e = this._internalRoot;
        if (e !== null) {
          this._internalRoot = null;
          var t = e.containerInfo;
          Kg(e.current, 2, null, e, null, null), wu(), (t[Ze] = null);
        }
      });
  function Ju(e) {
    this._internalRoot = e;
  }
  Ju.prototype.unstable_scheduleHydration = function (e) {
    if (e) {
      var t = je();
      e = { blockedOn: null, target: e, priority: t };
      for (var n = 0; n < si.length && t !== 0 && t < si[n].priority; n++);
      si.splice(n, 0, e), n === 0 && Ig(e);
    }
  };
  var a1 = a.version;
  if (a1 !== "19.2.3") throw Error(i(527, a1, "19.2.3"));
  G.findDOMNode = function (e) {
    var t = e._reactInternals;
    if (t === void 0)
      throw typeof e.render == "function"
        ? Error(i(188))
        : ((e = Object.keys(e).join(",")), Error(i(268, e)));
    return (
      (e = g(t)),
      (e = e !== null ? y(e) : null),
      (e = e === null ? null : e.stateNode),
      e
    );
  };
  var Wb = {
    bundleType: 0,
    version: "19.2.3",
    rendererPackageName: "react-dom",
    currentDispatcherRef: O,
    reconcilerVersion: "19.2.3",
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Fu = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Fu.isDisabled && Fu.supportsFiber)
      try {
        (Qa = Fu.inject(Wb)), (xt = Fu);
      } catch {}
  }
  return (
    (ac.createRoot = function (e, t) {
      if (!s(e)) throw Error(i(299));
      var n = !1,
        l = "",
        c = om,
        u = fm,
        m = dm;
      return (
        t != null &&
          (t.unstable_strictMode === !0 && (n = !0),
          t.identifierPrefix !== void 0 && (l = t.identifierPrefix),
          t.onUncaughtError !== void 0 && (c = t.onUncaughtError),
          t.onCaughtError !== void 0 && (u = t.onCaughtError),
          t.onRecoverableError !== void 0 && (m = t.onRecoverableError)),
        (t = Qg(e, 1, !1, null, null, n, l, null, c, u, m, n1)),
        (e[Ze] = t.current),
        Ed(e),
        new Zd(t)
      );
    }),
    (ac.hydrateRoot = function (e, t, n) {
      if (!s(e)) throw Error(i(299));
      var l = !1,
        c = "",
        u = om,
        m = fm,
        v = dm,
        A = null;
      return (
        n != null &&
          (n.unstable_strictMode === !0 && (l = !0),
          n.identifierPrefix !== void 0 && (c = n.identifierPrefix),
          n.onUncaughtError !== void 0 && (u = n.onUncaughtError),
          n.onCaughtError !== void 0 && (m = n.onCaughtError),
          n.onRecoverableError !== void 0 && (v = n.onRecoverableError),
          n.formState !== void 0 && (A = n.formState)),
        (t = Qg(e, 1, !0, t, n ?? null, l, c, A, u, m, v, n1)),
        (t.context = Zg(null)),
        (n = t.current),
        (l = na()),
        (l = xe(l)),
        (c = Zl(l)),
        (c.callback = null),
        Kl(n, c, l),
        (n = l),
        (t.current.lanes = n),
        he(t, n),
        Ia(t),
        (e[Ze] = t.current),
        Ed(e),
        new Ju(t)
      );
    }),
    (ac.version = "19.2.3"),
    ac
  );
}
var h1;
function rx() {
  if (h1) return Fd.exports;
  h1 = 1;
  function f() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(f);
      } catch (a) {
        console.error(a);
      }
  }
  return f(), (Fd.exports = ix()), Fd.exports;
}
var sx = rx();
function ay(f) {
  var a,
    r,
    i = "";
  if (typeof f == "string" || typeof f == "number") i += f;
  else if (typeof f == "object")
    if (Array.isArray(f)) {
      var s = f.length;
      for (a = 0; a < s; a++)
        f[a] && (r = ay(f[a])) && (i && (i += " "), (i += r));
    } else for (r in f) f[r] && (i && (i += " "), (i += r));
  return i;
}
function cx() {
  for (var f, a, r = 0, i = "", s = arguments.length; r < s; r++)
    (f = arguments[r]) && (a = ay(f)) && (i && (i += " "), (i += a));
  return i;
}
const ux = (f, a) => {
    const r = new Array(f.length + a.length);
    for (let i = 0; i < f.length; i++) r[i] = f[i];
    for (let i = 0; i < a.length; i++) r[f.length + i] = a[i];
    return r;
  },
  ox = (f, a) => ({ classGroupId: f, validator: a }),
  ly = (f = new Map(), a = null, r) => ({
    nextPart: f,
    validators: a,
    classGroupId: r,
  }),
  To = "-",
  p1 = [],
  fx = "arbitrary..",
  dx = (f) => {
    const a = px(f),
      { conflictingClassGroups: r, conflictingClassGroupModifiers: i } = f;
    return {
      getClassGroupId: (d) => {
        if (d.startsWith("[") && d.endsWith("]")) return hx(d);
        const h = d.split(To),
          p = h[0] === "" && h.length > 1 ? 1 : 0;
        return iy(h, p, a);
      },
      getConflictingClassGroupIds: (d, h) => {
        if (h) {
          const p = i[d],
            g = r[d];
          return p ? (g ? ux(g, p) : p) : g || p1;
        }
        return r[d] || p1;
      },
    };
  },
  iy = (f, a, r) => {
    if (f.length - a === 0) return r.classGroupId;
    const s = f[a],
      o = r.nextPart.get(s);
    if (o) {
      const g = iy(f, a + 1, o);
      if (g) return g;
    }
    const d = r.validators;
    if (d === null) return;
    const h = a === 0 ? f.join(To) : f.slice(a).join(To),
      p = d.length;
    for (let g = 0; g < p; g++) {
      const y = d[g];
      if (y.validator(h)) return y.classGroupId;
    }
  },
  hx = (f) =>
    f.slice(1, -1).indexOf(":") === -1
      ? void 0
      : (() => {
          const a = f.slice(1, -1),
            r = a.indexOf(":"),
            i = a.slice(0, r);
          return i ? fx + i : void 0;
        })(),
  px = (f) => {
    const { theme: a, classGroups: r } = f;
    return mx(r, a);
  },
  mx = (f, a) => {
    const r = ly();
    for (const i in f) {
      const s = f[i];
      Zh(s, r, i, a);
    }
    return r;
  },
  Zh = (f, a, r, i) => {
    const s = f.length;
    for (let o = 0; o < s; o++) {
      const d = f[o];
      gx(d, a, r, i);
    }
  },
  gx = (f, a, r, i) => {
    if (typeof f == "string") {
      yx(f, a, r);
      return;
    }
    if (typeof f == "function") {
      vx(f, a, r, i);
      return;
    }
    _x(f, a, r, i);
  },
  yx = (f, a, r) => {
    const i = f === "" ? a : ry(a, f);
    i.classGroupId = r;
  },
  vx = (f, a, r, i) => {
    if (bx(f)) {
      Zh(f(i), a, r, i);
      return;
    }
    a.validators === null && (a.validators = []), a.validators.push(ox(r, f));
  },
  _x = (f, a, r, i) => {
    const s = Object.entries(f),
      o = s.length;
    for (let d = 0; d < o; d++) {
      const [h, p] = s[d];
      Zh(p, ry(a, h), r, i);
    }
  },
  ry = (f, a) => {
    let r = f;
    const i = a.split(To),
      s = i.length;
    for (let o = 0; o < s; o++) {
      const d = i[o];
      let h = r.nextPart.get(d);
      h || ((h = ly()), r.nextPart.set(d, h)), (r = h);
    }
    return r;
  },
  bx = (f) => "isThemeGetter" in f && f.isThemeGetter === !0,
  xx = (f) => {
    if (f < 1) return { get: () => {}, set: () => {} };
    let a = 0,
      r = Object.create(null),
      i = Object.create(null);
    const s = (o, d) => {
      (r[o] = d), a++, a > f && ((a = 0), (i = r), (r = Object.create(null)));
    };
    return {
      get(o) {
        let d = r[o];
        if (d !== void 0) return d;
        if ((d = i[o]) !== void 0) return s(o, d), d;
      },
      set(o, d) {
        o in r ? (r[o] = d) : s(o, d);
      },
    };
  },
  yh = "!",
  m1 = ":",
  Sx = [],
  g1 = (f, a, r, i, s) => ({
    modifiers: f,
    hasImportantModifier: a,
    baseClassName: r,
    maybePostfixModifierPosition: i,
    isExternal: s,
  }),
  Tx = (f) => {
    const { prefix: a, experimentalParseClassName: r } = f;
    let i = (s) => {
      const o = [];
      let d = 0,
        h = 0,
        p = 0,
        g;
      const y = s.length;
      for (let S = 0; S < y; S++) {
        const N = s[S];
        if (d === 0 && h === 0) {
          if (N === m1) {
            o.push(s.slice(p, S)), (p = S + 1);
            continue;
          }
          if (N === "/") {
            g = S;
            continue;
          }
        }
        N === "[" ? d++ : N === "]" ? d-- : N === "(" ? h++ : N === ")" && h--;
      }
      const _ = o.length === 0 ? s : s.slice(p);
      let T = _,
        b = !1;
      _.endsWith(yh)
        ? ((T = _.slice(0, -1)), (b = !0))
        : _.startsWith(yh) && ((T = _.slice(1)), (b = !0));
      const E = g && g > p ? g - p : void 0;
      return g1(o, b, T, E);
    };
    if (a) {
      const s = a + m1,
        o = i;
      i = (d) =>
        d.startsWith(s) ? o(d.slice(s.length)) : g1(Sx, !1, d, void 0, !0);
    }
    if (r) {
      const s = i;
      i = (o) => r({ className: o, parseClassName: s });
    }
    return i;
  },
  Ax = (f) => {
    const a = new Map();
    return (
      f.orderSensitiveModifiers.forEach((r, i) => {
        a.set(r, 1e6 + i);
      }),
      (r) => {
        const i = [];
        let s = [];
        for (let o = 0; o < r.length; o++) {
          const d = r[o],
            h = d[0] === "[",
            p = a.has(d);
          h || p
            ? (s.length > 0 && (s.sort(), i.push(...s), (s = [])), i.push(d))
            : s.push(d);
        }
        return s.length > 0 && (s.sort(), i.push(...s)), i;
      }
    );
  },
  zx = (f) => ({
    cache: xx(f.cacheSize),
    parseClassName: Tx(f),
    sortModifiers: Ax(f),
    ...dx(f),
  }),
  Cx = /\s+/,
  Ex = (f, a) => {
    const {
        parseClassName: r,
        getClassGroupId: i,
        getConflictingClassGroupIds: s,
        sortModifiers: o,
      } = a,
      d = [],
      h = f.trim().split(Cx);
    let p = "";
    for (let g = h.length - 1; g >= 0; g -= 1) {
      const y = h[g],
        {
          isExternal: _,
          modifiers: T,
          hasImportantModifier: b,
          baseClassName: E,
          maybePostfixModifierPosition: S,
        } = r(y);
      if (_) {
        p = y + (p.length > 0 ? " " + p : p);
        continue;
      }
      let N = !!S,
        q = i(N ? E.substring(0, S) : E);
      if (!q) {
        if (!N) {
          p = y + (p.length > 0 ? " " + p : p);
          continue;
        }
        if (((q = i(E)), !q)) {
          p = y + (p.length > 0 ? " " + p : p);
          continue;
        }
        N = !1;
      }
      const X = T.length === 0 ? "" : T.length === 1 ? T[0] : o(T).join(":"),
        K = b ? X + yh : X,
        U = K + q;
      if (d.indexOf(U) > -1) continue;
      d.push(U);
      const Q = s(q, N);
      for (let W = 0; W < Q.length; ++W) {
        const R = Q[W];
        d.push(K + R);
      }
      p = y + (p.length > 0 ? " " + p : p);
    }
    return p;
  },
  wx = (...f) => {
    let a = 0,
      r,
      i,
      s = "";
    for (; a < f.length; )
      (r = f[a++]) && (i = sy(r)) && (s && (s += " "), (s += i));
    return s;
  },
  sy = (f) => {
    if (typeof f == "string") return f;
    let a,
      r = "";
    for (let i = 0; i < f.length; i++)
      f[i] && (a = sy(f[i])) && (r && (r += " "), (r += a));
    return r;
  },
  Mx = (f, ...a) => {
    let r, i, s, o;
    const d = (p) => {
        const g = a.reduce((y, _) => _(y), f());
        return (r = zx(g)), (i = r.cache.get), (s = r.cache.set), (o = h), h(p);
      },
      h = (p) => {
        const g = i(p);
        if (g) return g;
        const y = Ex(p, r);
        return s(p, y), y;
      };
    return (o = d), (...p) => o(wx(...p));
  },
  Nx = [],
  Wt = (f) => {
    const a = (r) => r[f] || Nx;
    return (a.isThemeGetter = !0), a;
  },
  cy = /^\[(?:(\w[\w-]*):)?(.+)\]$/i,
  uy = /^\((?:(\w[\w-]*):)?(.+)\)$/i,
  Ox = /^\d+\/\d+$/,
  Dx = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
  Rx =
    /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
  jx = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/,
  kx = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
  Ux =
    /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,
  Gr = (f) => Ox.test(f),
  De = (f) => !!f && !Number.isNaN(Number(f)),
  ui = (f) => !!f && Number.isInteger(Number(f)),
  Id = (f) => f.endsWith("%") && De(f.slice(0, -1)),
  El = (f) => Dx.test(f),
  Hx = () => !0,
  Bx = (f) => Rx.test(f) && !jx.test(f),
  oy = () => !1,
  Yx = (f) => kx.test(f),
  qx = (f) => Ux.test(f),
  Lx = (f) => !se(f) && !ce(f),
  Gx = (f) => hs(f, hy, oy),
  se = (f) => cy.test(f),
  Vi = (f) => hs(f, py, Bx),
  eh = (f) => hs(f, Kx, De),
  y1 = (f) => hs(f, fy, oy),
  Vx = (f) => hs(f, dy, qx),
  Wu = (f) => hs(f, my, Yx),
  ce = (f) => uy.test(f),
  lc = (f) => ps(f, py),
  Xx = (f) => ps(f, Jx),
  v1 = (f) => ps(f, fy),
  Qx = (f) => ps(f, hy),
  Zx = (f) => ps(f, dy),
  $u = (f) => ps(f, my, !0),
  hs = (f, a, r) => {
    const i = cy.exec(f);
    return i ? (i[1] ? a(i[1]) : r(i[2])) : !1;
  },
  ps = (f, a, r = !1) => {
    const i = uy.exec(f);
    return i ? (i[1] ? a(i[1]) : r) : !1;
  },
  fy = (f) => f === "position" || f === "percentage",
  dy = (f) => f === "image" || f === "url",
  hy = (f) => f === "length" || f === "size" || f === "bg-size",
  py = (f) => f === "length",
  Kx = (f) => f === "number",
  Jx = (f) => f === "family-name",
  my = (f) => f === "shadow",
  Fx = () => {
    const f = Wt("color"),
      a = Wt("font"),
      r = Wt("text"),
      i = Wt("font-weight"),
      s = Wt("tracking"),
      o = Wt("leading"),
      d = Wt("breakpoint"),
      h = Wt("container"),
      p = Wt("spacing"),
      g = Wt("radius"),
      y = Wt("shadow"),
      _ = Wt("inset-shadow"),
      T = Wt("text-shadow"),
      b = Wt("drop-shadow"),
      E = Wt("blur"),
      S = Wt("perspective"),
      N = Wt("aspect"),
      q = Wt("ease"),
      X = Wt("animate"),
      K = () => [
        "auto",
        "avoid",
        "all",
        "avoid-page",
        "page",
        "left",
        "right",
        "column",
      ],
      U = () => [
        "center",
        "top",
        "bottom",
        "left",
        "right",
        "top-left",
        "left-top",
        "top-right",
        "right-top",
        "bottom-right",
        "right-bottom",
        "bottom-left",
        "left-bottom",
      ],
      Q = () => [...U(), ce, se],
      W = () => ["auto", "hidden", "clip", "visible", "scroll"],
      R = () => ["auto", "contain", "none"],
      H = () => [ce, se, p],
      J = () => [Gr, "full", "auto", ...H()],
      I = () => [ui, "none", "subgrid", ce, se],
      oe = () => ["auto", { span: ["full", ui, ce, se] }, ui, ce, se],
      te = () => [ui, "auto", ce, se],
      be = () => ["auto", "min", "max", "fr", ce, se],
      ve = () => [
        "start",
        "end",
        "center",
        "between",
        "around",
        "evenly",
        "stretch",
        "baseline",
        "center-safe",
        "end-safe",
      ],
      ye = () => [
        "start",
        "end",
        "center",
        "stretch",
        "center-safe",
        "end-safe",
      ],
      O = () => ["auto", ...H()],
      G = () => [
        Gr,
        "auto",
        "full",
        "dvw",
        "dvh",
        "lvw",
        "lvh",
        "svw",
        "svh",
        "min",
        "max",
        "fit",
        ...H(),
      ],
      V = () => [f, ce, se],
      fe = () => [...U(), v1, y1, { position: [ce, se] }],
      w = () => ["no-repeat", { repeat: ["", "x", "y", "space", "round"] }],
      z = () => ["auto", "cover", "contain", Qx, Gx, { size: [ce, se] }],
      L = () => [Id, lc, Vi],
      P = () => ["", "none", "full", g, ce, se],
      ee = () => ["", De, lc, Vi],
      le = () => ["solid", "dashed", "dotted", "double"],
      de = () => [
        "normal",
        "multiply",
        "screen",
        "overlay",
        "darken",
        "lighten",
        "color-dodge",
        "color-burn",
        "hard-light",
        "soft-light",
        "difference",
        "exclusion",
        "hue",
        "saturation",
        "color",
        "luminosity",
      ],
      ae = () => [De, Id, v1, y1],
      Qe = () => ["", "none", E, ce, se],
      Ce = () => ["none", De, ce, se],
      Kt = () => ["none", De, ce, se],
      mt = () => [De, ce, se],
      gt = () => [Gr, "full", ...H()];
    return {
      cacheSize: 500,
      theme: {
        animate: ["spin", "ping", "pulse", "bounce"],
        aspect: ["video"],
        blur: [El],
        breakpoint: [El],
        color: [Hx],
        container: [El],
        "drop-shadow": [El],
        ease: ["in", "out", "in-out"],
        font: [Lx],
        "font-weight": [
          "thin",
          "extralight",
          "light",
          "normal",
          "medium",
          "semibold",
          "bold",
          "extrabold",
          "black",
        ],
        "inset-shadow": [El],
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
        perspective: [
          "dramatic",
          "near",
          "normal",
          "midrange",
          "distant",
          "none",
        ],
        radius: [El],
        shadow: [El],
        spacing: ["px", De],
        text: [El],
        "text-shadow": [El],
        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest"],
      },
      classGroups: {
        aspect: [{ aspect: ["auto", "square", Gr, se, ce, N] }],
        container: ["container"],
        columns: [{ columns: [De, se, ce, h] }],
        "break-after": [{ "break-after": K() }],
        "break-before": [{ "break-before": K() }],
        "break-inside": [
          { "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"] },
        ],
        "box-decoration": [{ "box-decoration": ["slice", "clone"] }],
        box: [{ box: ["border", "content"] }],
        display: [
          "block",
          "inline-block",
          "inline",
          "flex",
          "inline-flex",
          "table",
          "inline-table",
          "table-caption",
          "table-cell",
          "table-column",
          "table-column-group",
          "table-footer-group",
          "table-header-group",
          "table-row-group",
          "table-row",
          "flow-root",
          "grid",
          "inline-grid",
          "contents",
          "list-item",
          "hidden",
        ],
        sr: ["sr-only", "not-sr-only"],
        float: [{ float: ["right", "left", "none", "start", "end"] }],
        clear: [{ clear: ["left", "right", "both", "none", "start", "end"] }],
        isolation: ["isolate", "isolation-auto"],
        "object-fit": [
          { object: ["contain", "cover", "fill", "none", "scale-down"] },
        ],
        "object-position": [{ object: Q() }],
        overflow: [{ overflow: W() }],
        "overflow-x": [{ "overflow-x": W() }],
        "overflow-y": [{ "overflow-y": W() }],
        overscroll: [{ overscroll: R() }],
        "overscroll-x": [{ "overscroll-x": R() }],
        "overscroll-y": [{ "overscroll-y": R() }],
        position: ["static", "fixed", "absolute", "relative", "sticky"],
        inset: [{ inset: J() }],
        "inset-x": [{ "inset-x": J() }],
        "inset-y": [{ "inset-y": J() }],
        start: [{ start: J() }],
        end: [{ end: J() }],
        top: [{ top: J() }],
        right: [{ right: J() }],
        bottom: [{ bottom: J() }],
        left: [{ left: J() }],
        visibility: ["visible", "invisible", "collapse"],
        z: [{ z: [ui, "auto", ce, se] }],
        basis: [{ basis: [Gr, "full", "auto", h, ...H()] }],
        "flex-direction": [
          { flex: ["row", "row-reverse", "col", "col-reverse"] },
        ],
        "flex-wrap": [{ flex: ["nowrap", "wrap", "wrap-reverse"] }],
        flex: [{ flex: [De, Gr, "auto", "initial", "none", se] }],
        grow: [{ grow: ["", De, ce, se] }],
        shrink: [{ shrink: ["", De, ce, se] }],
        order: [{ order: [ui, "first", "last", "none", ce, se] }],
        "grid-cols": [{ "grid-cols": I() }],
        "col-start-end": [{ col: oe() }],
        "col-start": [{ "col-start": te() }],
        "col-end": [{ "col-end": te() }],
        "grid-rows": [{ "grid-rows": I() }],
        "row-start-end": [{ row: oe() }],
        "row-start": [{ "row-start": te() }],
        "row-end": [{ "row-end": te() }],
        "grid-flow": [
          { "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"] },
        ],
        "auto-cols": [{ "auto-cols": be() }],
        "auto-rows": [{ "auto-rows": be() }],
        gap: [{ gap: H() }],
        "gap-x": [{ "gap-x": H() }],
        "gap-y": [{ "gap-y": H() }],
        "justify-content": [{ justify: [...ve(), "normal"] }],
        "justify-items": [{ "justify-items": [...ye(), "normal"] }],
        "justify-self": [{ "justify-self": ["auto", ...ye()] }],
        "align-content": [{ content: ["normal", ...ve()] }],
        "align-items": [{ items: [...ye(), { baseline: ["", "last"] }] }],
        "align-self": [{ self: ["auto", ...ye(), { baseline: ["", "last"] }] }],
        "place-content": [{ "place-content": ve() }],
        "place-items": [{ "place-items": [...ye(), "baseline"] }],
        "place-self": [{ "place-self": ["auto", ...ye()] }],
        p: [{ p: H() }],
        px: [{ px: H() }],
        py: [{ py: H() }],
        ps: [{ ps: H() }],
        pe: [{ pe: H() }],
        pt: [{ pt: H() }],
        pr: [{ pr: H() }],
        pb: [{ pb: H() }],
        pl: [{ pl: H() }],
        m: [{ m: O() }],
        mx: [{ mx: O() }],
        my: [{ my: O() }],
        ms: [{ ms: O() }],
        me: [{ me: O() }],
        mt: [{ mt: O() }],
        mr: [{ mr: O() }],
        mb: [{ mb: O() }],
        ml: [{ ml: O() }],
        "space-x": [{ "space-x": H() }],
        "space-x-reverse": ["space-x-reverse"],
        "space-y": [{ "space-y": H() }],
        "space-y-reverse": ["space-y-reverse"],
        size: [{ size: G() }],
        w: [{ w: [h, "screen", ...G()] }],
        "min-w": [{ "min-w": [h, "screen", "none", ...G()] }],
        "max-w": [
          { "max-w": [h, "screen", "none", "prose", { screen: [d] }, ...G()] },
        ],
        h: [{ h: ["screen", "lh", ...G()] }],
        "min-h": [{ "min-h": ["screen", "lh", "none", ...G()] }],
        "max-h": [{ "max-h": ["screen", "lh", ...G()] }],
        "font-size": [{ text: ["base", r, lc, Vi] }],
        "font-smoothing": ["antialiased", "subpixel-antialiased"],
        "font-style": ["italic", "not-italic"],
        "font-weight": [{ font: [i, ce, eh] }],
        "font-stretch": [
          {
            "font-stretch": [
              "ultra-condensed",
              "extra-condensed",
              "condensed",
              "semi-condensed",
              "normal",
              "semi-expanded",
              "expanded",
              "extra-expanded",
              "ultra-expanded",
              Id,
              se,
            ],
          },
        ],
        "font-family": [{ font: [Xx, se, a] }],
        "fvn-normal": ["normal-nums"],
        "fvn-ordinal": ["ordinal"],
        "fvn-slashed-zero": ["slashed-zero"],
        "fvn-figure": ["lining-nums", "oldstyle-nums"],
        "fvn-spacing": ["proportional-nums", "tabular-nums"],
        "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
        tracking: [{ tracking: [s, ce, se] }],
        "line-clamp": [{ "line-clamp": [De, "none", ce, eh] }],
        leading: [{ leading: [o, ...H()] }],
        "list-image": [{ "list-image": ["none", ce, se] }],
        "list-style-position": [{ list: ["inside", "outside"] }],
        "list-style-type": [{ list: ["disc", "decimal", "none", ce, se] }],
        "text-alignment": [
          { text: ["left", "center", "right", "justify", "start", "end"] },
        ],
        "placeholder-color": [{ placeholder: V() }],
        "text-color": [{ text: V() }],
        "text-decoration": [
          "underline",
          "overline",
          "line-through",
          "no-underline",
        ],
        "text-decoration-style": [{ decoration: [...le(), "wavy"] }],
        "text-decoration-thickness": [
          { decoration: [De, "from-font", "auto", ce, Vi] },
        ],
        "text-decoration-color": [{ decoration: V() }],
        "underline-offset": [{ "underline-offset": [De, "auto", ce, se] }],
        "text-transform": [
          "uppercase",
          "lowercase",
          "capitalize",
          "normal-case",
        ],
        "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
        "text-wrap": [{ text: ["wrap", "nowrap", "balance", "pretty"] }],
        indent: [{ indent: H() }],
        "vertical-align": [
          {
            align: [
              "baseline",
              "top",
              "middle",
              "bottom",
              "text-top",
              "text-bottom",
              "sub",
              "super",
              ce,
              se,
            ],
          },
        ],
        whitespace: [
          {
            whitespace: [
              "normal",
              "nowrap",
              "pre",
              "pre-line",
              "pre-wrap",
              "break-spaces",
            ],
          },
        ],
        break: [{ break: ["normal", "words", "all", "keep"] }],
        wrap: [{ wrap: ["break-word", "anywhere", "normal"] }],
        hyphens: [{ hyphens: ["none", "manual", "auto"] }],
        content: [{ content: ["none", ce, se] }],
        "bg-attachment": [{ bg: ["fixed", "local", "scroll"] }],
        "bg-clip": [{ "bg-clip": ["border", "padding", "content", "text"] }],
        "bg-origin": [{ "bg-origin": ["border", "padding", "content"] }],
        "bg-position": [{ bg: fe() }],
        "bg-repeat": [{ bg: w() }],
        "bg-size": [{ bg: z() }],
        "bg-image": [
          {
            bg: [
              "none",
              {
                linear: [
                  { to: ["t", "tr", "r", "br", "b", "bl", "l", "tl"] },
                  ui,
                  ce,
                  se,
                ],
                radial: ["", ce, se],
                conic: [ui, ce, se],
              },
              Zx,
              Vx,
            ],
          },
        ],
        "bg-color": [{ bg: V() }],
        "gradient-from-pos": [{ from: L() }],
        "gradient-via-pos": [{ via: L() }],
        "gradient-to-pos": [{ to: L() }],
        "gradient-from": [{ from: V() }],
        "gradient-via": [{ via: V() }],
        "gradient-to": [{ to: V() }],
        rounded: [{ rounded: P() }],
        "rounded-s": [{ "rounded-s": P() }],
        "rounded-e": [{ "rounded-e": P() }],
        "rounded-t": [{ "rounded-t": P() }],
        "rounded-r": [{ "rounded-r": P() }],
        "rounded-b": [{ "rounded-b": P() }],
        "rounded-l": [{ "rounded-l": P() }],
        "rounded-ss": [{ "rounded-ss": P() }],
        "rounded-se": [{ "rounded-se": P() }],
        "rounded-ee": [{ "rounded-ee": P() }],
        "rounded-es": [{ "rounded-es": P() }],
        "rounded-tl": [{ "rounded-tl": P() }],
        "rounded-tr": [{ "rounded-tr": P() }],
        "rounded-br": [{ "rounded-br": P() }],
        "rounded-bl": [{ "rounded-bl": P() }],
        "border-w": [{ border: ee() }],
        "border-w-x": [{ "border-x": ee() }],
        "border-w-y": [{ "border-y": ee() }],
        "border-w-s": [{ "border-s": ee() }],
        "border-w-e": [{ "border-e": ee() }],
        "border-w-t": [{ "border-t": ee() }],
        "border-w-r": [{ "border-r": ee() }],
        "border-w-b": [{ "border-b": ee() }],
        "border-w-l": [{ "border-l": ee() }],
        "divide-x": [{ "divide-x": ee() }],
        "divide-x-reverse": ["divide-x-reverse"],
        "divide-y": [{ "divide-y": ee() }],
        "divide-y-reverse": ["divide-y-reverse"],
        "border-style": [{ border: [...le(), "hidden", "none"] }],
        "divide-style": [{ divide: [...le(), "hidden", "none"] }],
        "border-color": [{ border: V() }],
        "border-color-x": [{ "border-x": V() }],
        "border-color-y": [{ "border-y": V() }],
        "border-color-s": [{ "border-s": V() }],
        "border-color-e": [{ "border-e": V() }],
        "border-color-t": [{ "border-t": V() }],
        "border-color-r": [{ "border-r": V() }],
        "border-color-b": [{ "border-b": V() }],
        "border-color-l": [{ "border-l": V() }],
        "divide-color": [{ divide: V() }],
        "outline-style": [{ outline: [...le(), "none", "hidden"] }],
        "outline-offset": [{ "outline-offset": [De, ce, se] }],
        "outline-w": [{ outline: ["", De, lc, Vi] }],
        "outline-color": [{ outline: V() }],
        shadow: [{ shadow: ["", "none", y, $u, Wu] }],
        "shadow-color": [{ shadow: V() }],
        "inset-shadow": [{ "inset-shadow": ["none", _, $u, Wu] }],
        "inset-shadow-color": [{ "inset-shadow": V() }],
        "ring-w": [{ ring: ee() }],
        "ring-w-inset": ["ring-inset"],
        "ring-color": [{ ring: V() }],
        "ring-offset-w": [{ "ring-offset": [De, Vi] }],
        "ring-offset-color": [{ "ring-offset": V() }],
        "inset-ring-w": [{ "inset-ring": ee() }],
        "inset-ring-color": [{ "inset-ring": V() }],
        "text-shadow": [{ "text-shadow": ["none", T, $u, Wu] }],
        "text-shadow-color": [{ "text-shadow": V() }],
        opacity: [{ opacity: [De, ce, se] }],
        "mix-blend": [
          { "mix-blend": [...de(), "plus-darker", "plus-lighter"] },
        ],
        "bg-blend": [{ "bg-blend": de() }],
        "mask-clip": [
          {
            "mask-clip": [
              "border",
              "padding",
              "content",
              "fill",
              "stroke",
              "view",
            ],
          },
          "mask-no-clip",
        ],
        "mask-composite": [
          { mask: ["add", "subtract", "intersect", "exclude"] },
        ],
        "mask-image-linear-pos": [{ "mask-linear": [De] }],
        "mask-image-linear-from-pos": [{ "mask-linear-from": ae() }],
        "mask-image-linear-to-pos": [{ "mask-linear-to": ae() }],
        "mask-image-linear-from-color": [{ "mask-linear-from": V() }],
        "mask-image-linear-to-color": [{ "mask-linear-to": V() }],
        "mask-image-t-from-pos": [{ "mask-t-from": ae() }],
        "mask-image-t-to-pos": [{ "mask-t-to": ae() }],
        "mask-image-t-from-color": [{ "mask-t-from": V() }],
        "mask-image-t-to-color": [{ "mask-t-to": V() }],
        "mask-image-r-from-pos": [{ "mask-r-from": ae() }],
        "mask-image-r-to-pos": [{ "mask-r-to": ae() }],
        "mask-image-r-from-color": [{ "mask-r-from": V() }],
        "mask-image-r-to-color": [{ "mask-r-to": V() }],
        "mask-image-b-from-pos": [{ "mask-b-from": ae() }],
        "mask-image-b-to-pos": [{ "mask-b-to": ae() }],
        "mask-image-b-from-color": [{ "mask-b-from": V() }],
        "mask-image-b-to-color": [{ "mask-b-to": V() }],
        "mask-image-l-from-pos": [{ "mask-l-from": ae() }],
        "mask-image-l-to-pos": [{ "mask-l-to": ae() }],
        "mask-image-l-from-color": [{ "mask-l-from": V() }],
        "mask-image-l-to-color": [{ "mask-l-to": V() }],
        "mask-image-x-from-pos": [{ "mask-x-from": ae() }],
        "mask-image-x-to-pos": [{ "mask-x-to": ae() }],
        "mask-image-x-from-color": [{ "mask-x-from": V() }],
        "mask-image-x-to-color": [{ "mask-x-to": V() }],
        "mask-image-y-from-pos": [{ "mask-y-from": ae() }],
        "mask-image-y-to-pos": [{ "mask-y-to": ae() }],
        "mask-image-y-from-color": [{ "mask-y-from": V() }],
        "mask-image-y-to-color": [{ "mask-y-to": V() }],
        "mask-image-radial": [{ "mask-radial": [ce, se] }],
        "mask-image-radial-from-pos": [{ "mask-radial-from": ae() }],
        "mask-image-radial-to-pos": [{ "mask-radial-to": ae() }],
        "mask-image-radial-from-color": [{ "mask-radial-from": V() }],
        "mask-image-radial-to-color": [{ "mask-radial-to": V() }],
        "mask-image-radial-shape": [{ "mask-radial": ["circle", "ellipse"] }],
        "mask-image-radial-size": [
          {
            "mask-radial": [
              { closest: ["side", "corner"], farthest: ["side", "corner"] },
            ],
          },
        ],
        "mask-image-radial-pos": [{ "mask-radial-at": U() }],
        "mask-image-conic-pos": [{ "mask-conic": [De] }],
        "mask-image-conic-from-pos": [{ "mask-conic-from": ae() }],
        "mask-image-conic-to-pos": [{ "mask-conic-to": ae() }],
        "mask-image-conic-from-color": [{ "mask-conic-from": V() }],
        "mask-image-conic-to-color": [{ "mask-conic-to": V() }],
        "mask-mode": [{ mask: ["alpha", "luminance", "match"] }],
        "mask-origin": [
          {
            "mask-origin": [
              "border",
              "padding",
              "content",
              "fill",
              "stroke",
              "view",
            ],
          },
        ],
        "mask-position": [{ mask: fe() }],
        "mask-repeat": [{ mask: w() }],
        "mask-size": [{ mask: z() }],
        "mask-type": [{ "mask-type": ["alpha", "luminance"] }],
        "mask-image": [{ mask: ["none", ce, se] }],
        filter: [{ filter: ["", "none", ce, se] }],
        blur: [{ blur: Qe() }],
        brightness: [{ brightness: [De, ce, se] }],
        contrast: [{ contrast: [De, ce, se] }],
        "drop-shadow": [{ "drop-shadow": ["", "none", b, $u, Wu] }],
        "drop-shadow-color": [{ "drop-shadow": V() }],
        grayscale: [{ grayscale: ["", De, ce, se] }],
        "hue-rotate": [{ "hue-rotate": [De, ce, se] }],
        invert: [{ invert: ["", De, ce, se] }],
        saturate: [{ saturate: [De, ce, se] }],
        sepia: [{ sepia: ["", De, ce, se] }],
        "backdrop-filter": [{ "backdrop-filter": ["", "none", ce, se] }],
        "backdrop-blur": [{ "backdrop-blur": Qe() }],
        "backdrop-brightness": [{ "backdrop-brightness": [De, ce, se] }],
        "backdrop-contrast": [{ "backdrop-contrast": [De, ce, se] }],
        "backdrop-grayscale": [{ "backdrop-grayscale": ["", De, ce, se] }],
        "backdrop-hue-rotate": [{ "backdrop-hue-rotate": [De, ce, se] }],
        "backdrop-invert": [{ "backdrop-invert": ["", De, ce, se] }],
        "backdrop-opacity": [{ "backdrop-opacity": [De, ce, se] }],
        "backdrop-saturate": [{ "backdrop-saturate": [De, ce, se] }],
        "backdrop-sepia": [{ "backdrop-sepia": ["", De, ce, se] }],
        "border-collapse": [{ border: ["collapse", "separate"] }],
        "border-spacing": [{ "border-spacing": H() }],
        "border-spacing-x": [{ "border-spacing-x": H() }],
        "border-spacing-y": [{ "border-spacing-y": H() }],
        "table-layout": [{ table: ["auto", "fixed"] }],
        caption: [{ caption: ["top", "bottom"] }],
        transition: [
          {
            transition: [
              "",
              "all",
              "colors",
              "opacity",
              "shadow",
              "transform",
              "none",
              ce,
              se,
            ],
          },
        ],
        "transition-behavior": [{ transition: ["normal", "discrete"] }],
        duration: [{ duration: [De, "initial", ce, se] }],
        ease: [{ ease: ["linear", "initial", q, ce, se] }],
        delay: [{ delay: [De, ce, se] }],
        animate: [{ animate: ["none", X, ce, se] }],
        backface: [{ backface: ["hidden", "visible"] }],
        perspective: [{ perspective: [S, ce, se] }],
        "perspective-origin": [{ "perspective-origin": Q() }],
        rotate: [{ rotate: Ce() }],
        "rotate-x": [{ "rotate-x": Ce() }],
        "rotate-y": [{ "rotate-y": Ce() }],
        "rotate-z": [{ "rotate-z": Ce() }],
        scale: [{ scale: Kt() }],
        "scale-x": [{ "scale-x": Kt() }],
        "scale-y": [{ "scale-y": Kt() }],
        "scale-z": [{ "scale-z": Kt() }],
        "scale-3d": ["scale-3d"],
        skew: [{ skew: mt() }],
        "skew-x": [{ "skew-x": mt() }],
        "skew-y": [{ "skew-y": mt() }],
        transform: [{ transform: [ce, se, "", "none", "gpu", "cpu"] }],
        "transform-origin": [{ origin: Q() }],
        "transform-style": [{ transform: ["3d", "flat"] }],
        translate: [{ translate: gt() }],
        "translate-x": [{ "translate-x": gt() }],
        "translate-y": [{ "translate-y": gt() }],
        "translate-z": [{ "translate-z": gt() }],
        "translate-none": ["translate-none"],
        accent: [{ accent: V() }],
        appearance: [{ appearance: ["none", "auto"] }],
        "caret-color": [{ caret: V() }],
        "color-scheme": [
          {
            scheme: [
              "normal",
              "dark",
              "light",
              "light-dark",
              "only-dark",
              "only-light",
            ],
          },
        ],
        cursor: [
          {
            cursor: [
              "auto",
              "default",
              "pointer",
              "wait",
              "text",
              "move",
              "help",
              "not-allowed",
              "none",
              "context-menu",
              "progress",
              "cell",
              "crosshair",
              "vertical-text",
              "alias",
              "copy",
              "no-drop",
              "grab",
              "grabbing",
              "all-scroll",
              "col-resize",
              "row-resize",
              "n-resize",
              "e-resize",
              "s-resize",
              "w-resize",
              "ne-resize",
              "nw-resize",
              "se-resize",
              "sw-resize",
              "ew-resize",
              "ns-resize",
              "nesw-resize",
              "nwse-resize",
              "zoom-in",
              "zoom-out",
              ce,
              se,
            ],
          },
        ],
        "field-sizing": [{ "field-sizing": ["fixed", "content"] }],
        "pointer-events": [{ "pointer-events": ["auto", "none"] }],
        resize: [{ resize: ["none", "", "y", "x"] }],
        "scroll-behavior": [{ scroll: ["auto", "smooth"] }],
        "scroll-m": [{ "scroll-m": H() }],
        "scroll-mx": [{ "scroll-mx": H() }],
        "scroll-my": [{ "scroll-my": H() }],
        "scroll-ms": [{ "scroll-ms": H() }],
        "scroll-me": [{ "scroll-me": H() }],
        "scroll-mt": [{ "scroll-mt": H() }],
        "scroll-mr": [{ "scroll-mr": H() }],
        "scroll-mb": [{ "scroll-mb": H() }],
        "scroll-ml": [{ "scroll-ml": H() }],
        "scroll-p": [{ "scroll-p": H() }],
        "scroll-px": [{ "scroll-px": H() }],
        "scroll-py": [{ "scroll-py": H() }],
        "scroll-ps": [{ "scroll-ps": H() }],
        "scroll-pe": [{ "scroll-pe": H() }],
        "scroll-pt": [{ "scroll-pt": H() }],
        "scroll-pr": [{ "scroll-pr": H() }],
        "scroll-pb": [{ "scroll-pb": H() }],
        "scroll-pl": [{ "scroll-pl": H() }],
        "snap-align": [{ snap: ["start", "end", "center", "align-none"] }],
        "snap-stop": [{ snap: ["normal", "always"] }],
        "snap-type": [{ snap: ["none", "x", "y", "both"] }],
        "snap-strictness": [{ snap: ["mandatory", "proximity"] }],
        touch: [{ touch: ["auto", "none", "manipulation"] }],
        "touch-x": [{ "touch-pan": ["x", "left", "right"] }],
        "touch-y": [{ "touch-pan": ["y", "up", "down"] }],
        "touch-pz": ["touch-pinch-zoom"],
        select: [{ select: ["none", "text", "all", "auto"] }],
        "will-change": [
          {
            "will-change": ["auto", "scroll", "contents", "transform", ce, se],
          },
        ],
        fill: [{ fill: ["none", ...V()] }],
        "stroke-w": [{ stroke: [De, lc, Vi, eh] }],
        stroke: [{ stroke: ["none", ...V()] }],
        "forced-color-adjust": [{ "forced-color-adjust": ["auto", "none"] }],
      },
      conflictingClassGroups: {
        overflow: ["overflow-x", "overflow-y"],
        overscroll: ["overscroll-x", "overscroll-y"],
        inset: [
          "inset-x",
          "inset-y",
          "start",
          "end",
          "top",
          "right",
          "bottom",
          "left",
        ],
        "inset-x": ["right", "left"],
        "inset-y": ["top", "bottom"],
        flex: ["basis", "grow", "shrink"],
        gap: ["gap-x", "gap-y"],
        p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
        px: ["pr", "pl"],
        py: ["pt", "pb"],
        m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
        mx: ["mr", "ml"],
        my: ["mt", "mb"],
        size: ["w", "h"],
        "font-size": ["leading"],
        "fvn-normal": [
          "fvn-ordinal",
          "fvn-slashed-zero",
          "fvn-figure",
          "fvn-spacing",
          "fvn-fraction",
        ],
        "fvn-ordinal": ["fvn-normal"],
        "fvn-slashed-zero": ["fvn-normal"],
        "fvn-figure": ["fvn-normal"],
        "fvn-spacing": ["fvn-normal"],
        "fvn-fraction": ["fvn-normal"],
        "line-clamp": ["display", "overflow"],
        rounded: [
          "rounded-s",
          "rounded-e",
          "rounded-t",
          "rounded-r",
          "rounded-b",
          "rounded-l",
          "rounded-ss",
          "rounded-se",
          "rounded-ee",
          "rounded-es",
          "rounded-tl",
          "rounded-tr",
          "rounded-br",
          "rounded-bl",
        ],
        "rounded-s": ["rounded-ss", "rounded-es"],
        "rounded-e": ["rounded-se", "rounded-ee"],
        "rounded-t": ["rounded-tl", "rounded-tr"],
        "rounded-r": ["rounded-tr", "rounded-br"],
        "rounded-b": ["rounded-br", "rounded-bl"],
        "rounded-l": ["rounded-tl", "rounded-bl"],
        "border-spacing": ["border-spacing-x", "border-spacing-y"],
        "border-w": [
          "border-w-x",
          "border-w-y",
          "border-w-s",
          "border-w-e",
          "border-w-t",
          "border-w-r",
          "border-w-b",
          "border-w-l",
        ],
        "border-w-x": ["border-w-r", "border-w-l"],
        "border-w-y": ["border-w-t", "border-w-b"],
        "border-color": [
          "border-color-x",
          "border-color-y",
          "border-color-s",
          "border-color-e",
          "border-color-t",
          "border-color-r",
          "border-color-b",
          "border-color-l",
        ],
        "border-color-x": ["border-color-r", "border-color-l"],
        "border-color-y": ["border-color-t", "border-color-b"],
        translate: ["translate-x", "translate-y", "translate-none"],
        "translate-none": [
          "translate",
          "translate-x",
          "translate-y",
          "translate-z",
        ],
        "scroll-m": [
          "scroll-mx",
          "scroll-my",
          "scroll-ms",
          "scroll-me",
          "scroll-mt",
          "scroll-mr",
          "scroll-mb",
          "scroll-ml",
        ],
        "scroll-mx": ["scroll-mr", "scroll-ml"],
        "scroll-my": ["scroll-mt", "scroll-mb"],
        "scroll-p": [
          "scroll-px",
          "scroll-py",
          "scroll-ps",
          "scroll-pe",
          "scroll-pt",
          "scroll-pr",
          "scroll-pb",
          "scroll-pl",
        ],
        "scroll-px": ["scroll-pr", "scroll-pl"],
        "scroll-py": ["scroll-pt", "scroll-pb"],
        touch: ["touch-x", "touch-y", "touch-pz"],
        "touch-x": ["touch"],
        "touch-y": ["touch"],
        "touch-pz": ["touch"],
      },
      conflictingClassGroupModifiers: { "font-size": ["leading"] },
      orderSensitiveModifiers: [
        "*",
        "**",
        "after",
        "backdrop",
        "before",
        "details-content",
        "file",
        "first-letter",
        "first-line",
        "marker",
        "placeholder",
        "selection",
      ],
    };
  },
  Wx = Mx(Fx);
function Ol(...f) {
  return Wx(cx(f));
}
const $x = {
    title: "Ballistic Pet | Premium Durability. Lab-Certified Safety.",
  },
  el = {
    logo: "BALLISTIC PET",
    links: [
      { label: "Why Us", href: "#problem" },
      { label: "Value", href: "#value" },
      { label: "Reviews", href: "#testimonials" },
      { label: "Results", href: "#transformation" },
    ],
    contactLabel: "Claim 35% Off",
    contactHref: "#cta",
  },
  wl = {
    eyebrow: "Premium Durability // Lab-Certified Safety",
    headline: "Afraid your dog will ignore another expensive toy?",
    subheadline:
      "Join 8,450,000+ dogs who actively engage with our gear. Claim 35% off your first order today. If your dog doesn't play with their new box within the first 14 days, we refund 100% of your purchaseâ€”no return shipping required.",
    ctaText: "Claim 35% Off & Unbox Joy",
    ctaHref: "#cta",
    trustSignals: {
      rating: "4.9/5",
      reviews: "12,500+",
      certification: "100% Lab-Certified Non-Toxic",
    },
    backgroundImage: "./images/hero-bg.jpg",
  },
  th = {
    headline: "Your dog's new obsession is secured.",
    subheadline:
      "You just eliminated the financial risk of trial and error. Here is exactly what happens next:",
    deliverables: [
      { title: "Order Confirmed", description: "Receipt sent to your inbox." },
      {
        title: "Allergy Filtering Applied",
        description:
          "Our algorithm locks out your dog's specific sensitivities.",
      },
      {
        title: "Vacuum-Sealed",
        description:
          "Your gear is sealed to eliminate warehouse dust and odors.",
      },
      {
        title: "Same-Day Shipping",
        description:
          "Orders placed before 2:00 PM ship today. Tracking arrives within 4 hours.",
      },
    ],
  },
  Pu = {
    headline: "Still gambling with unregulated retail gear?",
    problems: [
      {
        title: "Surgically Dissected Toys",
        description:
          "You pay $30 for retail toys that withstand exactly 3 minutes of aggressive chewing.",
        icon: "Scissors",
      },
      {
        title: "Silent Toxins",
        description:
          "Unregulated pet plastics leach endocrine disruptors directly into your dog's bloodstream.",
        icon: "AlertTriangle",
      },
      {
        title: "Hidden Allergens",
        description:
          "Generic treats trigger severe skin reactions and emergency vet visits due to unlisted poultry or grain dust.",
        icon: "XCircle",
      },
    ],
    agitation:
      "Every time you buy off the shelf, you risk exposing your dog to lead and phthalates while throwing money at fabric that tears the same day.",
    transition:
      "We analyzed the remains of 1,200 destroyed retail toys and 500 third-party chemical reports. The data was terrifying. So, we engineered an ecosystem with teeth-of-steel durability and zero chemical trace.",
  },
  Vr = {
    headline:
      "Secure total peace of mind for less than the cost of one retail toy.",
    tiers: [
      {
        title: "The Heavy-Duty Play Kit",
        description:
          "Ballistic nylon gear engineered to withstand 450 lbs of bite force.",
        icon: "Shield",
      },
      {
        title: "Dietary & Sizing Customization",
        description:
          "15 distinct allergy filters and automatic size scaling as your dog grows.",
        icon: "Settings",
      },
      {
        title: "30-Day Aggressive Chew Guarantee",
        description:
          "Breached fabric replaced free, shipping the next morning.",
        icon: "RefreshCw",
      },
      {
        title: "24/7 Vet-Trained Support",
        description:
          "Access to real human experts with an average 45-second response time.",
        icon: "Headphones",
      },
    ],
    pricing: [
      { item: "Heavy-Duty Play Kit", value: "$65.00" },
      { item: "Allergy Customization Algorithm", value: "$15.00" },
      { item: "Unlimited 30-Day Replacement Insurance", value: "$30.00" },
      { item: "24/7 Vet-Trained Support", value: "$40.00" },
    ],
    totalValue: "$150.00",
    yourPrice: "$39.00",
    savings: "74%",
  },
  Ml = {
    label: "Social Proof",
    headline: "Our pack has your back. Real data from heavy chewers.",
    testimonials: [
      {
        quote:
          "My Pitbull destroyed everything in 10 minutes. This ballistic ring lasted 6 months. When the seam finally gave, I texted a photo and had a free replacement tracking to my door in 45 seconds.",
        author: "Mark T.",
        role: "Pitbull Owner",
        highlight: "Saved $120 this year",
        image: "./images/avatar-mark.jpg",
        dogImage: "./images/dog-pitbull.jpg",
        rating: 5,
      },
      {
        quote:
          "Saved me $340 in emergency vet visits this year. The precise 15-point allergy filtering means my Golden Retriever never breaks out in hives anymore.",
        author: "Sarah L.",
        role: "Golden Retriever Owner",
        highlight: "Zero allergic reactions since April",
        image: "./images/avatar-sarah.jpg",
        dogImage: "./images/dog-golden.jpg",
        rating: 5,
      },
      {
        quote:
          "Scanned the QR code on the box and saw the exact toxicology report. Zero lead. Zero phthalates. I finally feel safe letting my puppy sleep with her chew toys.",
        author: "James R.",
        role: "First-Time Dog Owner",
        highlight: "100% Peace of mind",
        image: "./images/avatar-james.jpg",
        dogImage: "./images/dog-pitbull.jpg",
        rating: 5,
      },
    ],
  },
  _1 = {
    headline: "From the first unboxing to years of healthy play.",
    stages: [
      {
        number: "01",
        title: "Quick Win",
        timeframe: "Hours 0-48",
        description:
          "Your vacuum-sealed box arrives smelling like nothing at all. Your dog immediately engages, instantly validating your purchase and triggering the 14-day engagement guarantee.",
      },
      {
        number: "02",
        title: "Momentum",
        timeframe: "Days 3-7",
        description:
          "The gear faces its first heavy thrashing. The ballistic nylon holds up to 450 lbs of bite force without a single frayed seam. No mess on your floor.",
      },
      {
        number: "03",
        title: "Compound Advantage",
        timeframe: "Days 30-60",
        description:
          "You realize you haven't bought a single replacement toy in two months. You've already kept an extra $60+ in your pocket compared to your old buying habits.",
      },
      {
        number: "04",
        title: "10x",
        timeframe: "Year 1 & Beyond",
        description:
          "Total peace of mind. Zero toxic exposure, zero allergic reactions, zero automated customer service fights, and an average annual savings of $242 on pet gear.",
      },
    ],
  },
  Xr = {
    avatarImages: [
      "./images/avatar-1.jpg",
      "./images/avatar-2.jpg",
      "./images/avatar-3.jpg",
      "./images/avatar-4.jpg",
      "./images/avatar-5.jpg",
    ],
    avatarText: "Join 12,500+ verified 5-star pet parents.",
    headline:
      "Ready to stop replacing shredded toys and secure the exact, safe gear your dog needs?",
    buttonText: "Yes, Build My Dog's Custom Box",
    buttonHref: "#cta",
  },
  Qr = {
    logo: "BALLISTIC PET",
    description:
      "Premium pet gear engineered for teeth-of-steel durability and zero chemical trace. Because your dog deserves better than disposable.",
    columns: [
      {
        title: "Shop",
        links: [
          { label: "Heavy-Duty Gear", href: "#" },
          { label: "Custom Boxes", href: "#" },
          { label: "Gift Cards", href: "#" },
          { label: "Wholesale", href: "#" },
        ],
      },
      {
        title: "Safety",
        links: [
          { label: "View Toxicology Reports", href: "#" },
          { label: "The 30-Day Chew Guarantee", href: "#" },
          { label: "Material Sourcing Data", href: "#" },
          { label: "Allergy Guide", href: "#" },
        ],
      },
      {
        title: "Support",
        links: [
          { label: "24/7 Support", href: "#" },
          { label: "Shipping Info", href: "#" },
          { label: "Returns & Replacements", href: "#" },
          { label: "Contact Us", href: "#" },
        ],
      },
    ],
    socialLinks: [
      { iconName: "Instagram", href: "#", label: "Instagram (1.2M+ Dogs)" },
      { iconName: "Youtube", href: "#", label: "TikTok (450k+ Dogs)" },
      { iconName: "Facebook", href: "#", label: "Facebook" },
      { iconName: "Twitter", href: "#", label: "Twitter" },
    ],
    copyright: "2024 Ballistic Pet. All rights reserved.",
    legalLinks: [
      { label: "Privacy Policy", href: "#" },
      { label: "Terms of Service", href: "#" },
      { label: "Material Sourcing Data", href: "#" },
    ],
  },
  Px = { box: "./images/product-box.jpg" };
const Ix = (f) => f.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
  e2 = (f) =>
    f.replace(/^([A-Z])|[\s-_]+(\w)/g, (a, r, i) =>
      i ? i.toUpperCase() : r.toLowerCase()
    ),
  b1 = (f) => {
    const a = e2(f);
    return a.charAt(0).toUpperCase() + a.slice(1);
  },
  gy = (...f) =>
    f
      .filter((a, r, i) => !!a && a.trim() !== "" && i.indexOf(a) === r)
      .join(" ")
      .trim(),
  t2 = (f) => {
    for (const a in f)
      if (a.startsWith("aria-") || a === "role" || a === "title") return !0;
  };
var n2 = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};
const a2 = ge.forwardRef(
  (
    {
      color: f = "currentColor",
      size: a = 24,
      strokeWidth: r = 2,
      absoluteStrokeWidth: i,
      className: s = "",
      children: o,
      iconNode: d,
      ...h
    },
    p
  ) =>
    ge.createElement(
      "svg",
      {
        ref: p,
        ...n2,
        width: a,
        height: a,
        stroke: f,
        strokeWidth: i ? (Number(r) * 24) / Number(a) : r,
        className: gy("lucide", s),
        ...(!o && !t2(h) && { "aria-hidden": "true" }),
        ...h,
      },
      [
        ...d.map(([g, y]) => ge.createElement(g, y)),
        ...(Array.isArray(o) ? o : [o]),
      ]
    )
);
const lt = (f, a) => {
  const r = ge.forwardRef(({ className: i, ...s }, o) =>
    ge.createElement(a2, {
      ref: o,
      iconNode: a,
      className: gy(`lucide-${Ix(b1(f))}`, `lucide-${f}`, i),
      ...s,
    })
  );
  return (r.displayName = b1(f)), r;
};
const l2 = [
    ["path", { d: "M5 12h14", key: "1ays0h" }],
    ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }],
  ],
  yy = lt("arrow-right", l2);
const i2 = [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]],
  ho = lt("check", i2);
const r2 = [["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]],
  s2 = lt("chevron-left", r2);
const c2 = [["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]],
  vy = lt("chevron-right", c2);
const u2 = [
    ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
    ["path", { d: "m15 9-6 6", key: "1uzhvr" }],
    ["path", { d: "m9 9 6 6", key: "z0biqf" }],
  ],
  o2 = lt("circle-x", u2);
const f2 = [
    ["path", { d: "M12 6v6l4 2", key: "mmk7yg" }],
    ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ],
  _y = lt("clock", f2);
const d2 = [
    [
      "path",
      {
        d: "M11.562 3.266a.5.5 0 0 1 .876 0L15.39 8.87a1 1 0 0 0 1.516.294L21.183 5.5a.5.5 0 0 1 .798.519l-2.834 10.246a1 1 0 0 1-.956.734H5.81a1 1 0 0 1-.957-.734L2.02 6.02a.5.5 0 0 1 .798-.519l4.276 3.664a1 1 0 0 0 1.516-.294z",
        key: "1vdc57",
      },
    ],
    ["path", { d: "M5 21h14", key: "11awu3" }],
  ],
  h2 = lt("crown", d2);
const p2 = [
    [
      "path",
      {
        d: "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z",
        key: "1jg4f8",
      },
    ],
  ],
  m2 = lt("facebook", p2);
const g2 = [
    [
      "path",
      {
        d: "M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3",
        key: "1xhozi",
      },
    ],
  ],
  y2 = lt("headphones", g2);
const v2 = [
    [
      "rect",
      {
        width: "20",
        height: "20",
        x: "2",
        y: "2",
        rx: "5",
        ry: "5",
        key: "2e1cvw",
      },
    ],
    [
      "path",
      { d: "M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z", key: "9exkf1" },
    ],
    ["line", { x1: "17.5", x2: "17.51", y1: "6.5", y2: "6.5", key: "r4j83e" }],
  ],
  by = lt("instagram", v2);
const _2 = [
    ["path", { d: "m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7", key: "132q7q" }],
    [
      "rect",
      { x: "2", y: "4", width: "20", height: "16", rx: "2", key: "izxlao" },
    ],
  ],
  vh = lt("mail", _2);
const b2 = [
    ["path", { d: "M4 5h16", key: "1tepv9" }],
    ["path", { d: "M4 12h16", key: "1lakjw" }],
    ["path", { d: "M4 19h16", key: "1djgab" }],
  ],
  x2 = lt("menu", b2);
const S2 = [
    [
      "path",
      {
        d: "M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z",
        key: "1a0edw",
      },
    ],
    ["path", { d: "M12 22V12", key: "d0xqtd" }],
    ["polyline", { points: "3.29 7 12 12 20.71 7", key: "ousv84" }],
    ["path", { d: "m7.5 4.27 9 5.15", key: "1c824w" }],
  ],
  T2 = lt("package", S2);
const A2 = [
    [
      "path",
      {
        d: "M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z",
        key: "rib7q0",
      },
    ],
    [
      "path",
      {
        d: "M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z",
        key: "1ymkrd",
      },
    ],
  ],
  z2 = lt("quote", A2);
const C2 = [
    [
      "path",
      {
        d: "M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",
        key: "v9h5vc",
      },
    ],
    ["path", { d: "M21 3v5h-5", key: "1q7to0" }],
    [
      "path",
      {
        d: "M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",
        key: "3uifl3",
      },
    ],
    ["path", { d: "M8 16H3v5", key: "1cv678" }],
  ],
  E2 = lt("refresh-cw", C2);
const w2 = [
    ["circle", { cx: "6", cy: "6", r: "3", key: "1lh9wr" }],
    ["path", { d: "M8.12 8.12 12 12", key: "1alkpv" }],
    ["path", { d: "M20 4 8.12 15.88", key: "xgtan2" }],
    ["circle", { cx: "6", cy: "18", r: "3", key: "fqmcym" }],
    ["path", { d: "M14.8 14.8 20 20", key: "ptml3r" }],
  ],
  M2 = lt("scissors", w2);
const N2 = [
    [
      "path",
      {
        d: "M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915",
        key: "1i5ecw",
      },
    ],
    ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }],
  ],
  O2 = lt("settings", N2);
const D2 = [
    [
      "path",
      {
        d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
        key: "oel41y",
      },
    ],
  ],
  _i = lt("shield", D2);
const R2 = [
    [
      "path",
      {
        d: "M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",
        key: "1s2grr",
      },
    ],
    ["path", { d: "M20 2v4", key: "1rf3ol" }],
    ["path", { d: "M22 4h-4", key: "gwowj6" }],
    ["circle", { cx: "4", cy: "20", r: "2", key: "6kqj1y" }],
  ],
  j2 = lt("sparkles", R2);
const k2 = [
    [
      "path",
      {
        d: "M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",
        key: "r04s7s",
      },
    ],
  ],
  _h = lt("star", k2);
const U2 = [
    ["path", { d: "M16 7h6v6", key: "box55l" }],
    ["path", { d: "m22 7-8.5 8.5-5-5L2 17", key: "1t1m79" }],
  ],
  xy = lt("trending-up", U2);
const H2 = [
    [
      "path",
      {
        d: "m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",
        key: "wmoenq",
      },
    ],
    ["path", { d: "M12 9v4", key: "juzpu7" }],
    ["path", { d: "M12 17h.01", key: "p32p05" }],
  ],
  bh = lt("triangle-alert", H2);
const B2 = [
    [
      "path",
      {
        d: "M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2",
        key: "wrbu53",
      },
    ],
    ["path", { d: "M15 18H9", key: "1lyqi6" }],
    [
      "path",
      {
        d: "M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14",
        key: "lysw3i",
      },
    ],
    ["circle", { cx: "17", cy: "18", r: "2", key: "332jqn" }],
    ["circle", { cx: "7", cy: "18", r: "2", key: "19iecd" }],
  ],
  Y2 = lt("truck", B2);
const q2 = [
    [
      "path",
      {
        d: "M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z",
        key: "pff0z6",
      },
    ],
  ],
  L2 = lt("twitter", q2);
const G2 = [
    ["path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2", key: "1yyitq" }],
    ["path", { d: "M16 3.128a4 4 0 0 1 0 7.744", key: "16gr8j" }],
    ["path", { d: "M22 21v-2a4 4 0 0 0-3-3.87", key: "kshegd" }],
    ["circle", { cx: "9", cy: "7", r: "4", key: "nufk8" }],
  ],
  V2 = lt("users", G2);
const X2 = [
    ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
    ["path", { d: "m6 6 12 12", key: "d8bk6v" }],
  ],
  Q2 = lt("x", X2);
const Z2 = [
    [
      "path",
      {
        d: "M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17",
        key: "1q2vi4",
      },
    ],
    ["path", { d: "m10 15 5-3-5-3z", key: "1jp15x" }],
  ],
  K2 = lt("youtube", Z2);
const J2 = [
    [
      "path",
      {
        d: "M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",
        key: "1xq2db",
      },
    ],
  ],
  F2 = lt("zap", J2);
function W2() {
  const [f, a] = ge.useState(!1),
    [r, i] = ge.useState(!1),
    [s, o] = ge.useState(!1);
  ge.useEffect(() => {
    const h = setTimeout(() => {
      o(!0);
    }, 1200);
    return () => clearTimeout(h);
  }, []),
    ge.useEffect(() => {
      const h = () => {
        i(window.scrollY > 50);
      };
      return (
        window.addEventListener("scroll", h, { passive: !0 }),
        () => window.removeEventListener("scroll", h)
      );
    }, []);
  const d = (h, p) => {
    h.preventDefault();
    const g = document.querySelector(p);
    g && (g.scrollIntoView({ behavior: "smooth" }), a(!1));
  };
  return x.jsxs(x.Fragment, {
    children: [
      x.jsx("nav", {
        "code-path": "src/components/Navigation.tsx:42:7",
        className: Ol(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          s ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4",
          r ? "backdrop-blur-xl" : "bg-transparent"
        ),
        style: { backgroundColor: r ? "rgba(26, 26, 26, 0.9)" : "transparent" },
        children: x.jsx("div", {
          "code-path": "src/components/Navigation.tsx:54:9",
          className: "w-full px-4 sm:px-6 lg:px-8 py-4",
          children: x.jsxs("div", {
            "code-path": "src/components/Navigation.tsx:55:11",
            className: "flex items-center justify-between",
            children: [
              x.jsxs("a", {
                "code-path": "src/components/Navigation.tsx:58:15",
                href: "#",
                className: "flex items-center gap-2 group",
                children: [
                  x.jsx(_i, {
                    "code-path": "src/components/Navigation.tsx:59:17",
                    className: Ol(
                      "w-7 h-7 transition-colors duration-500",
                      "text-[var(--bp-accent-orange)]"
                    ),
                  }),
                  x.jsx("span", {
                    "code-path": "src/components/Navigation.tsx:65:17",
                    className: Ol(
                      "text-xl font-black tracking-tight transition-colors duration-500",
                      "text-white"
                    ),
                    children: el.logo,
                  }),
                ],
              }),
              el.links.length > 0 &&
                x.jsx("div", {
                  "code-path": "src/components/Navigation.tsx:78:15",
                  className: "hidden lg:flex items-center gap-8",
                  children: el.links.map((h) =>
                    x.jsxs(
                      "a",
                      {
                        "code-path": "src/components/Navigation.tsx:80:19",
                        href: h.href,
                        onClick: (p) => d(p, h.href),
                        className:
                          "text-sm font-medium transition-colors duration-300 relative group text-white/80 hover:text-white",
                        children: [
                          h.label,
                          x.jsx("span", {
                            "code-path": "src/components/Navigation.tsx:87:21",
                            className:
                              "absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full",
                            style: {
                              backgroundColor: "var(--bp-accent-orange)",
                            },
                          }),
                        ],
                      },
                      h.label
                    )
                  ),
                }),
              x.jsx("div", {
                "code-path": "src/components/Navigation.tsx:98:15",
                className: "hidden lg:block",
                children: x.jsx("a", {
                  "code-path": "src/components/Navigation.tsx:99:17",
                  href: el.contactHref,
                  className:
                    "inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold transition-all duration-300 hover:scale-105",
                  style: {
                    backgroundColor: "var(--bp-accent-orange)",
                    color: "white",
                  },
                  children: el.contactLabel,
                }),
              }),
              el.links.length > 0 &&
                x.jsx("button", {
                  "code-path": "src/components/Navigation.tsx:114:15",
                  onClick: () => a(!f),
                  className:
                    "lg:hidden relative w-10 h-10 flex items-center justify-center rounded-lg",
                  style: {
                    backgroundColor: r
                      ? "var(--bp-bg-secondary)"
                      : "rgba(255,255,255,0.1)",
                  },
                  "aria-label": "Toggle menu",
                  children: f
                    ? x.jsx(Q2, {
                        "code-path": "src/components/Navigation.tsx:123:19",
                        className: "w-5 h-5 text-white",
                      })
                    : x.jsx(x2, {
                        "code-path": "src/components/Navigation.tsx:125:19",
                        className: "w-5 h-5 text-white",
                      }),
                }),
            ],
          }),
        }),
      }),
      el.links.length > 0 &&
        x.jsx("div", {
          "code-path": "src/components/Navigation.tsx:135:9",
          className: Ol(
            "fixed inset-0 z-40 transition-all duration-500 lg:hidden",
            f
              ? "opacity-100 visible pointer-events-auto"
              : "opacity-0 invisible pointer-events-none"
          ),
          style: { backgroundColor: "var(--bp-bg-primary)" },
          children: x.jsxs("div", {
            "code-path": "src/components/Navigation.tsx:144:11",
            className:
              "flex flex-col items-center justify-center h-full gap-8 pt-20",
            children: [
              el.links.map((h, p) =>
                x.jsx(
                  "a",
                  {
                    "code-path": "src/components/Navigation.tsx:146:15",
                    href: h.href,
                    onClick: (g) => d(g, h.href),
                    className: Ol(
                      "text-2xl font-semibold text-white transition-all duration-500",
                      f
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-8"
                    ),
                    style: { transitionDelay: f ? `${p * 100}ms` : "0ms" },
                    children: h.label,
                  },
                  h.label
                )
              ),
              x.jsx("a", {
                "code-path": "src/components/Navigation.tsx:162:15",
                href: el.contactHref,
                className: Ol(
                  "mt-4 inline-flex items-center gap-2 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-500",
                  f ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                ),
                style: {
                  backgroundColor: "var(--bp-accent-orange)",
                  color: "white",
                  transitionDelay: f ? "400ms" : "0ms",
                },
                children: el.contactLabel,
              }),
            ],
          }),
        }),
    ],
  });
}
function $2({ isVisible: f }) {
  return x.jsxs("div", {
    "code-path": "src/components/PageOverlay.tsx:11:5",
    className: Ol(
      "fixed inset-0 z-[9999] flex items-center justify-center transition-opacity duration-700",
      f ? "opacity-100" : "opacity-0 pointer-events-none"
    ),
    style: { backgroundColor: "var(--bp-bg-primary)" },
    children: [
      x.jsxs("div", {
        "code-path": "src/components/PageOverlay.tsx:18:7",
        className: "flex flex-col items-center gap-6",
        children: [
          x.jsxs("div", {
            "code-path": "src/components/PageOverlay.tsx:20:9",
            className: "flex items-center gap-3",
            children: [
              x.jsx(_i, {
                "code-path": "src/components/PageOverlay.tsx:21:11",
                className: "w-10 h-10 animate-pulse",
                style: { color: "var(--bp-accent-orange)" },
              }),
              x.jsx("span", {
                "code-path": "src/components/PageOverlay.tsx:25:11",
                className: "text-2xl font-black tracking-tight text-white",
                children: $x.title?.split("|")[0].trim() || "BALLISTIC PET",
              }),
            ],
          }),
          x.jsx("div", {
            "code-path": "src/components/PageOverlay.tsx:33:9",
            className: "w-32 h-1 rounded-full overflow-hidden",
            style: { backgroundColor: "var(--bp-bg-tertiary)" },
            children: x.jsx("div", {
              "code-path": "src/components/PageOverlay.tsx:37:11",
              className:
                "h-full rounded-full animate-[slide_1.2s_ease-in-out_infinite]",
              style: {
                backgroundColor: "var(--bp-accent-orange)",
                width: "33%",
              },
            }),
          }),
          x.jsx("p", {
            "code-path": "src/components/PageOverlay.tsx:46:9",
            className: "text-xs font-mono uppercase tracking-wider",
            style: { color: "var(--bp-text-muted)" },
            children: "Loading Premium Experience",
          }),
        ],
      }),
      x.jsx("style", {
        "code-path": "src/components/PageOverlay.tsx:54:7",
        children: `
        @keyframes slide {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(400%); }
        }
      `,
      }),
    ],
  });
}
function Nl(f) {
  if (f === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return f;
}
function Sy(f, a) {
  (f.prototype = Object.create(a.prototype)),
    (f.prototype.constructor = f),
    (f.__proto__ = a);
}
var fa = {
    autoSleep: 120,
    force3D: "auto",
    nullTargetWarn: 1,
    units: { lineHeight: "" },
  },
  rs = { duration: 0.5, overwrite: !1, delay: 0 },
  Kh,
  fn,
  bt,
  ja = 1e8,
  st = 1 / ja,
  xh = Math.PI * 2,
  P2 = xh / 4,
  I2 = 0,
  Ty = Math.sqrt,
  eS = Math.cos,
  tS = Math.sin,
  an = function (a) {
    return typeof a == "string";
  },
  Dt = function (a) {
    return typeof a == "function";
  },
  Ul = function (a) {
    return typeof a == "number";
  },
  Jh = function (a) {
    return typeof a > "u";
  },
  sl = function (a) {
    return typeof a == "object";
  },
  Gn = function (a) {
    return a !== !1;
  },
  Fh = function () {
    return typeof window < "u";
  },
  Iu = function (a) {
    return Dt(a) || an(a);
  },
  Ay =
    (typeof ArrayBuffer == "function" && ArrayBuffer.isView) || function () {},
  xn = Array.isArray,
  nS = /random\([^)]+\)/g,
  aS = /,\s*/g,
  x1 = /(?:-?\.?\d|\.)+/gi,
  zy = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,
  $r = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
  nh = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,
  Cy = /[+-]=-?[.\d]+/,
  lS = /[^,'"\[\]\s]+/gi,
  iS = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,
  Ct,
  tl,
  Sh,
  Wh,
  da = {},
  Ao = {},
  Ey,
  wy = function (a) {
    return (Ao = ss(a, da)) && Zn;
  },
  $h = function (a, r) {
    return console.warn(
      "Invalid property",
      a,
      "set to",
      r,
      "Missing plugin? gsap.registerPlugin()"
    );
  },
  wc = function (a, r) {
    return !r && console.warn(a);
  },
  My = function (a, r) {
    return (a && (da[a] = r) && Ao && (Ao[a] = r)) || da;
  },
  Mc = function () {
    return 0;
  },
  rS = { suppressEvents: !0, isStart: !0, kill: !1 },
  po = { suppressEvents: !0, kill: !1 },
  sS = { suppressEvents: !0 },
  Ph = {},
  gi = [],
  Th = {},
  Ny,
  ia = {},
  ah = {},
  S1 = 30,
  mo = [],
  Ih = "",
  ep = function (a) {
    var r = a[0],
      i,
      s;
    if ((sl(r) || Dt(r) || (a = [a]), !(i = (r._gsap || {}).harness))) {
      for (s = mo.length; s-- && !mo[s].targetTest(r); );
      i = mo[s];
    }
    for (s = a.length; s--; )
      (a[s] && (a[s]._gsap || (a[s]._gsap = new ev(a[s], i)))) ||
        a.splice(s, 1);
    return a;
  },
  $i = function (a) {
    return a._gsap || ep(ka(a))[0]._gsap;
  },
  Oy = function (a, r, i) {
    return (i = a[r]) && Dt(i)
      ? a[r]()
      : (Jh(i) && a.getAttribute && a.getAttribute(r)) || i;
  },
  Vn = function (a, r) {
    return (a = a.split(",")).forEach(r) || a;
  },
  Ht = function (a) {
    return Math.round(a * 1e5) / 1e5 || 0;
  },
  zt = function (a) {
    return Math.round(a * 1e7) / 1e7 || 0;
  },
  es = function (a, r) {
    var i = r.charAt(0),
      s = parseFloat(r.substr(2));
    return (
      (a = parseFloat(a)),
      i === "+" ? a + s : i === "-" ? a - s : i === "*" ? a * s : a / s
    );
  },
  cS = function (a, r) {
    for (var i = r.length, s = 0; a.indexOf(r[s]) < 0 && ++s < i; );
    return s < i;
  },
  zo = function () {
    var a = gi.length,
      r = gi.slice(0),
      i,
      s;
    for (Th = {}, gi.length = 0, i = 0; i < a; i++)
      (s = r[i]),
        s && s._lazy && (s.render(s._lazy[0], s._lazy[1], !0)._lazy = 0);
  },
  tp = function (a) {
    return !!(a._initted || a._startAt || a.add);
  },
  Dy = function (a, r, i, s) {
    gi.length && !fn && zo(),
      a.render(r, i, !!(fn && r < 0 && tp(a))),
      gi.length && !fn && zo();
  },
  Ry = function (a) {
    var r = parseFloat(a);
    return (r || r === 0) && (a + "").match(lS).length < 2
      ? r
      : an(a)
      ? a.trim()
      : a;
  },
  jy = function (a) {
    return a;
  },
  ha = function (a, r) {
    for (var i in r) i in a || (a[i] = r[i]);
    return a;
  },
  uS = function (a) {
    return function (r, i) {
      for (var s in i)
        s in r || (s === "duration" && a) || s === "ease" || (r[s] = i[s]);
    };
  },
  ss = function (a, r) {
    for (var i in r) a[i] = r[i];
    return a;
  },
  T1 = function f(a, r) {
    for (var i in r)
      i !== "__proto__" &&
        i !== "constructor" &&
        i !== "prototype" &&
        (a[i] = sl(r[i]) ? f(a[i] || (a[i] = {}), r[i]) : r[i]);
    return a;
  },
  Co = function (a, r) {
    var i = {},
      s;
    for (s in a) s in r || (i[s] = a[s]);
    return i;
  },
  mc = function (a) {
    var r = a.parent || Ct,
      i = a.keyframes ? uS(xn(a.keyframes)) : ha;
    if (Gn(a.inherit))
      for (; r; ) i(a, r.vars.defaults), (r = r.parent || r._dp);
    return a;
  },
  oS = function (a, r) {
    for (var i = a.length, s = i === r.length; s && i-- && a[i] === r[i]; );
    return i < 0;
  },
  ky = function (a, r, i, s, o) {
    var d = a[s],
      h;
    if (o) for (h = r[o]; d && d[o] > h; ) d = d._prev;
    return (
      d ? ((r._next = d._next), (d._next = r)) : ((r._next = a[i]), (a[i] = r)),
      r._next ? (r._next._prev = r) : (a[s] = r),
      (r._prev = d),
      (r.parent = r._dp = a),
      r
    );
  },
  ko = function (a, r, i, s) {
    i === void 0 && (i = "_first"), s === void 0 && (s = "_last");
    var o = r._prev,
      d = r._next;
    o ? (o._next = d) : a[i] === r && (a[i] = d),
      d ? (d._prev = o) : a[s] === r && (a[s] = o),
      (r._next = r._prev = r.parent = null);
  },
  bi = function (a, r) {
    a.parent &&
      (!r || a.parent.autoRemoveChildren) &&
      a.parent.remove &&
      a.parent.remove(a),
      (a._act = 0);
  },
  Pi = function (a, r) {
    if (a && (!r || r._end > a._dur || r._start < 0))
      for (var i = a; i; ) (i._dirty = 1), (i = i.parent);
    return a;
  },
  fS = function (a) {
    for (var r = a.parent; r && r.parent; )
      (r._dirty = 1), r.totalDuration(), (r = r.parent);
    return a;
  },
  Ah = function (a, r, i, s) {
    return (
      a._startAt &&
      (fn
        ? a._startAt.revert(po)
        : (a.vars.immediateRender && !a.vars.autoRevert) ||
          a._startAt.render(r, !0, s))
    );
  },
  dS = function f(a) {
    return !a || (a._ts && f(a.parent));
  },
  A1 = function (a) {
    return a._repeat ? cs(a._tTime, (a = a.duration() + a._rDelay)) * a : 0;
  },
  cs = function (a, r) {
    var i = Math.floor((a = zt(a / r)));
    return a && i === a ? i - 1 : i;
  },
  Eo = function (a, r) {
    return (
      (a - r._start) * r._ts +
      (r._ts >= 0 ? 0 : r._dirty ? r.totalDuration() : r._tDur)
    );
  },
  Uo = function (a) {
    return (a._end = zt(
      a._start + (a._tDur / Math.abs(a._ts || a._rts || st) || 0)
    ));
  },
  Ho = function (a, r) {
    var i = a._dp;
    return (
      i &&
        i.smoothChildTiming &&
        a._ts &&
        ((a._start = zt(
          i._time -
            (a._ts > 0
              ? r / a._ts
              : ((a._dirty ? a.totalDuration() : a._tDur) - r) / -a._ts)
        )),
        Uo(a),
        i._dirty || Pi(i, a)),
      a
    );
  },
  Uy = function (a, r) {
    var i;
    if (
      ((r._time ||
        (!r._dur && r._initted) ||
        (r._start < a._time && (r._dur || !r.add))) &&
        ((i = Eo(a.rawTime(), r)),
        (!r._dur || Hc(0, r.totalDuration(), i) - r._tTime > st) &&
          r.render(i, !0)),
      Pi(a, r)._dp && a._initted && a._time >= a._dur && a._ts)
    ) {
      if (a._dur < a.duration())
        for (i = a; i._dp; )
          i.rawTime() >= 0 && i.totalTime(i._tTime), (i = i._dp);
      a._zTime = -st;
    }
  },
  al = function (a, r, i, s) {
    return (
      r.parent && bi(r),
      (r._start = zt(
        (Ul(i) ? i : i || a !== Ct ? Oa(a, i, r) : a._time) + r._delay
      )),
      (r._end = zt(
        r._start + (r.totalDuration() / Math.abs(r.timeScale()) || 0)
      )),
      ky(a, r, "_first", "_last", a._sort ? "_start" : 0),
      zh(r) || (a._recent = r),
      s || Uy(a, r),
      a._ts < 0 && Ho(a, a._tTime),
      a
    );
  },
  Hy = function (a, r) {
    return (
      (da.ScrollTrigger || $h("scrollTrigger", r)) &&
      da.ScrollTrigger.create(r, a)
    );
  },
  By = function (a, r, i, s, o) {
    if ((ap(a, r, o), !a._initted)) return 1;
    if (
      !i &&
      a._pt &&
      !fn &&
      ((a._dur && a.vars.lazy !== !1) || (!a._dur && a.vars.lazy)) &&
      Ny !== sa.frame
    )
      return gi.push(a), (a._lazy = [o, s]), 1;
  },
  hS = function f(a) {
    var r = a.parent;
    return r && r._ts && r._initted && !r._lock && (r.rawTime() < 0 || f(r));
  },
  zh = function (a) {
    var r = a.data;
    return r === "isFromStart" || r === "isStart";
  },
  pS = function (a, r, i, s) {
    var o = a.ratio,
      d =
        r < 0 ||
        (!r &&
          ((!a._start && hS(a) && !(!a._initted && zh(a))) ||
            ((a._ts < 0 || a._dp._ts < 0) && !zh(a))))
          ? 0
          : 1,
      h = a._rDelay,
      p = 0,
      g,
      y,
      _;
    if (
      (h &&
        a._repeat &&
        ((p = Hc(0, a._tDur, r)),
        (y = cs(p, h)),
        a._yoyo && y & 1 && (d = 1 - d),
        y !== cs(a._tTime, h) &&
          ((o = 1 - d), a.vars.repeatRefresh && a._initted && a.invalidate())),
      d !== o || fn || s || a._zTime === st || (!r && a._zTime))
    ) {
      if (!a._initted && By(a, r, s, i, p)) return;
      for (
        _ = a._zTime,
          a._zTime = r || (i ? st : 0),
          i || (i = r && !_),
          a.ratio = d,
          a._from && (d = 1 - d),
          a._time = 0,
          a._tTime = p,
          g = a._pt;
        g;

      )
        g.r(d, g.d), (g = g._next);
      r < 0 && Ah(a, r, i, !0),
        a._onUpdate && !i && ua(a, "onUpdate"),
        p && a._repeat && !i && a.parent && ua(a, "onRepeat"),
        (r >= a._tDur || r < 0) &&
          a.ratio === d &&
          (d && bi(a, 1),
          !i &&
            !fn &&
            (ua(a, d ? "onComplete" : "onReverseComplete", !0),
            a._prom && a._prom()));
    } else a._zTime || (a._zTime = r);
  },
  mS = function (a, r, i) {
    var s;
    if (i > r)
      for (s = a._first; s && s._start <= i; ) {
        if (s.data === "isPause" && s._start > r) return s;
        s = s._next;
      }
    else
      for (s = a._last; s && s._start >= i; ) {
        if (s.data === "isPause" && s._start < r) return s;
        s = s._prev;
      }
  },
  us = function (a, r, i, s) {
    var o = a._repeat,
      d = zt(r) || 0,
      h = a._tTime / a._tDur;
    return (
      h && !s && (a._time *= d / a._dur),
      (a._dur = d),
      (a._tDur = o ? (o < 0 ? 1e10 : zt(d * (o + 1) + a._rDelay * o)) : d),
      h > 0 && !s && Ho(a, (a._tTime = a._tDur * h)),
      a.parent && Uo(a),
      i || Pi(a.parent, a),
      a
    );
  },
  z1 = function (a) {
    return a instanceof On ? Pi(a) : us(a, a._dur);
  },
  gS = { _start: 0, endTime: Mc, totalDuration: Mc },
  Oa = function f(a, r, i) {
    var s = a.labels,
      o = a._recent || gS,
      d = a.duration() >= ja ? o.endTime(!1) : a._dur,
      h,
      p,
      g;
    return an(r) && (isNaN(r) || r in s)
      ? ((p = r.charAt(0)),
        (g = r.substr(-1) === "%"),
        (h = r.indexOf("=")),
        p === "<" || p === ">"
          ? (h >= 0 && (r = r.replace(/=/, "")),
            (p === "<" ? o._start : o.endTime(o._repeat >= 0)) +
              (parseFloat(r.substr(1)) || 0) *
                (g ? (h < 0 ? o : i).totalDuration() / 100 : 1))
          : h < 0
          ? (r in s || (s[r] = d), s[r])
          : ((p = parseFloat(r.charAt(h - 1) + r.substr(h + 1))),
            g && i && (p = (p / 100) * (xn(i) ? i[0] : i).totalDuration()),
            h > 1 ? f(a, r.substr(0, h - 1), i) + p : d + p))
      : r == null
      ? d
      : +r;
  },
  gc = function (a, r, i) {
    var s = Ul(r[1]),
      o = (s ? 2 : 1) + (a < 2 ? 0 : 1),
      d = r[o],
      h,
      p;
    if ((s && (d.duration = r[1]), (d.parent = i), a)) {
      for (h = d, p = i; p && !("immediateRender" in h); )
        (h = p.vars.defaults || {}), (p = Gn(p.vars.inherit) && p.parent);
      (d.immediateRender = Gn(h.immediateRender)),
        a < 2 ? (d.runBackwards = 1) : (d.startAt = r[o - 1]);
    }
    return new Zt(r[0], d, r[o + 1]);
  },
  Ai = function (a, r) {
    return a || a === 0 ? r(a) : r;
  },
  Hc = function (a, r, i) {
    return i < a ? a : i > r ? r : i;
  },
  _n = function (a, r) {
    return !an(a) || !(r = iS.exec(a)) ? "" : r[1];
  },
  yS = function (a, r, i) {
    return Ai(i, function (s) {
      return Hc(a, r, s);
    });
  },
  Ch = [].slice,
  Yy = function (a, r) {
    return (
      a &&
      sl(a) &&
      "length" in a &&
      ((!r && !a.length) || (a.length - 1 in a && sl(a[0]))) &&
      !a.nodeType &&
      a !== tl
    );
  },
  vS = function (a, r, i) {
    return (
      i === void 0 && (i = []),
      a.forEach(function (s) {
        var o;
        return (an(s) && !r) || Yy(s, 1)
          ? (o = i).push.apply(o, ka(s))
          : i.push(s);
      }) || i
    );
  },
  ka = function (a, r, i) {
    return bt && !r && bt.selector
      ? bt.selector(a)
      : an(a) && !i && (Sh || !os())
      ? Ch.call((r || Wh).querySelectorAll(a), 0)
      : xn(a)
      ? vS(a, i)
      : Yy(a)
      ? Ch.call(a, 0)
      : a
      ? [a]
      : [];
  },
  Eh = function (a) {
    return (
      (a = ka(a)[0] || wc("Invalid scope") || {}),
      function (r) {
        var i = a.current || a.nativeElement || a;
        return ka(
          r,
          i.querySelectorAll
            ? i
            : i === a
            ? wc("Invalid scope") || Wh.createElement("div")
            : a
        );
      }
    );
  },
  qy = function (a) {
    return a.sort(function () {
      return 0.5 - Math.random();
    });
  },
  Ly = function (a) {
    if (Dt(a)) return a;
    var r = sl(a) ? a : { each: a },
      i = Ii(r.ease),
      s = r.from || 0,
      o = parseFloat(r.base) || 0,
      d = {},
      h = s > 0 && s < 1,
      p = isNaN(s) || h,
      g = r.axis,
      y = s,
      _ = s;
    return (
      an(s)
        ? (y = _ = { center: 0.5, edges: 0.5, end: 1 }[s] || 0)
        : !h && p && ((y = s[0]), (_ = s[1])),
      function (T, b, E) {
        var S = (E || r).length,
          N = d[S],
          q,
          X,
          K,
          U,
          Q,
          W,
          R,
          H,
          J;
        if (!N) {
          if (((J = r.grid === "auto" ? 0 : (r.grid || [1, ja])[1]), !J)) {
            for (
              R = -ja;
              R < (R = E[J++].getBoundingClientRect().left) && J < S;

            );
            J < S && J--;
          }
          for (
            N = d[S] = [],
              q = p ? Math.min(J, S) * y - 0.5 : s % J,
              X = J === ja ? 0 : p ? (S * _) / J - 0.5 : (s / J) | 0,
              R = 0,
              H = ja,
              W = 0;
            W < S;
            W++
          )
            (K = (W % J) - q),
              (U = X - ((W / J) | 0)),
              (N[W] = Q = g ? Math.abs(g === "y" ? U : K) : Ty(K * K + U * U)),
              Q > R && (R = Q),
              Q < H && (H = Q);
          s === "random" && qy(N),
            (N.max = R - H),
            (N.min = H),
            (N.v = S =
              (parseFloat(r.amount) ||
                parseFloat(r.each) *
                  (J > S
                    ? S - 1
                    : g
                    ? g === "y"
                      ? S / J
                      : J
                    : Math.max(J, S / J)) ||
                0) * (s === "edges" ? -1 : 1)),
            (N.b = S < 0 ? o - S : o),
            (N.u = _n(r.amount || r.each) || 0),
            (i = i && S < 0 ? $y(i) : i);
        }
        return (
          (S = (N[T] - N.min) / N.max || 0),
          zt(N.b + (i ? i(S) : S) * N.v) + N.u
        );
      }
    );
  },
  wh = function (a) {
    var r = Math.pow(10, ((a + "").split(".")[1] || "").length);
    return function (i) {
      var s = zt(Math.round(parseFloat(i) / a) * a * r);
      return (s - (s % 1)) / r + (Ul(i) ? 0 : _n(i));
    };
  },
  Gy = function (a, r) {
    var i = xn(a),
      s,
      o;
    return (
      !i &&
        sl(a) &&
        ((s = i = a.radius || ja),
        a.values
          ? ((a = ka(a.values)), (o = !Ul(a[0])) && (s *= s))
          : (a = wh(a.increment))),
      Ai(
        r,
        i
          ? Dt(a)
            ? function (d) {
                return (o = a(d)), Math.abs(o - d) <= s ? o : d;
              }
            : function (d) {
                for (
                  var h = parseFloat(o ? d.x : d),
                    p = parseFloat(o ? d.y : 0),
                    g = ja,
                    y = 0,
                    _ = a.length,
                    T,
                    b;
                  _--;

                )
                  o
                    ? ((T = a[_].x - h), (b = a[_].y - p), (T = T * T + b * b))
                    : (T = Math.abs(a[_] - h)),
                    T < g && ((g = T), (y = _));
                return (
                  (y = !s || g <= s ? a[y] : d),
                  o || y === d || Ul(d) ? y : y + _n(d)
                );
              }
          : wh(a)
      )
    );
  },
  Vy = function (a, r, i, s) {
    return Ai(xn(a) ? !r : i === !0 ? !!(i = 0) : !s, function () {
      return xn(a)
        ? a[~~(Math.random() * a.length)]
        : (i = i || 1e-5) &&
            (s = i < 1 ? Math.pow(10, (i + "").length - 2) : 1) &&
            Math.floor(
              Math.round((a - i / 2 + Math.random() * (r - a + i * 0.99)) / i) *
                i *
                s
            ) / s;
    });
  },
  _S = function () {
    for (var a = arguments.length, r = new Array(a), i = 0; i < a; i++)
      r[i] = arguments[i];
    return function (s) {
      return r.reduce(function (o, d) {
        return d(o);
      }, s);
    };
  },
  bS = function (a, r) {
    return function (i) {
      return a(parseFloat(i)) + (r || _n(i));
    };
  },
  xS = function (a, r, i) {
    return Qy(a, r, 0, 1, i);
  },
  Xy = function (a, r, i) {
    return Ai(i, function (s) {
      return a[~~r(s)];
    });
  },
  SS = function f(a, r, i) {
    var s = r - a;
    return xn(a)
      ? Xy(a, f(0, a.length), r)
      : Ai(i, function (o) {
          return ((s + ((o - a) % s)) % s) + a;
        });
  },
  TS = function f(a, r, i) {
    var s = r - a,
      o = s * 2;
    return xn(a)
      ? Xy(a, f(0, a.length - 1), r)
      : Ai(i, function (d) {
          return (d = (o + ((d - a) % o)) % o || 0), a + (d > s ? o - d : d);
        });
  },
  Nc = function (a) {
    return a.replace(nS, function (r) {
      var i = r.indexOf("[") + 1,
        s = r.substring(i || 7, i ? r.indexOf("]") : r.length - 1).split(aS);
      return Vy(i ? s : +s[0], i ? 0 : +s[1], +s[2] || 1e-5);
    });
  },
  Qy = function (a, r, i, s, o) {
    var d = r - a,
      h = s - i;
    return Ai(o, function (p) {
      return i + (((p - a) / d) * h || 0);
    });
  },
  AS = function f(a, r, i, s) {
    var o = isNaN(a + r)
      ? 0
      : function (b) {
          return (1 - b) * a + b * r;
        };
    if (!o) {
      var d = an(a),
        h = {},
        p,
        g,
        y,
        _,
        T;
      if ((i === !0 && (s = 1) && (i = null), d))
        (a = { p: a }), (r = { p: r });
      else if (xn(a) && !xn(r)) {
        for (y = [], _ = a.length, T = _ - 2, g = 1; g < _; g++)
          y.push(f(a[g - 1], a[g]));
        _--,
          (o = function (E) {
            E *= _;
            var S = Math.min(T, ~~E);
            return y[S](E - S);
          }),
          (i = r);
      } else s || (a = ss(xn(a) ? [] : {}, a));
      if (!y) {
        for (p in r) np.call(h, a, p, "get", r[p]);
        o = function (E) {
          return rp(E, h) || (d ? a.p : a);
        };
      }
    }
    return Ai(i, o);
  },
  C1 = function (a, r, i) {
    var s = a.labels,
      o = ja,
      d,
      h,
      p;
    for (d in s)
      (h = s[d] - r),
        h < 0 == !!i && h && o > (h = Math.abs(h)) && ((p = d), (o = h));
    return p;
  },
  ua = function (a, r, i) {
    var s = a.vars,
      o = s[r],
      d = bt,
      h = a._ctx,
      p,
      g,
      y;
    if (o)
      return (
        (p = s[r + "Params"]),
        (g = s.callbackScope || a),
        i && gi.length && zo(),
        h && (bt = h),
        (y = p ? o.apply(g, p) : o.call(g)),
        (bt = d),
        y
      );
  },
  cc = function (a) {
    return (
      bi(a),
      a.scrollTrigger && a.scrollTrigger.kill(!!fn),
      a.progress() < 1 && ua(a, "onInterrupt"),
      a
    );
  },
  Pr,
  Zy = [],
  Ky = function (a) {
    if (a)
      if (((a = (!a.name && a.default) || a), Fh() || a.headless)) {
        var r = a.name,
          i = Dt(a),
          s =
            r && !i && a.init
              ? function () {
                  this._props = [];
                }
              : a,
          o = {
            init: Mc,
            render: rp,
            add: np,
            kill: qS,
            modifier: YS,
            rawVars: 0,
          },
          d = {
            targetTest: 0,
            get: 0,
            getSetter: ip,
            aliases: {},
            register: 0,
          };
        if ((os(), a !== s)) {
          if (ia[r]) return;
          ha(s, ha(Co(a, o), d)),
            ss(s.prototype, ss(o, Co(a, d))),
            (ia[(s.prop = r)] = s),
            a.targetTest && (mo.push(s), (Ph[r] = 1)),
            (r =
              (r === "css" ? "CSS" : r.charAt(0).toUpperCase() + r.substr(1)) +
              "Plugin");
        }
        My(r, s), a.register && a.register(Zn, s, Xn);
      } else Zy.push(a);
  },
  rt = 255,
  uc = {
    aqua: [0, rt, rt],
    lime: [0, rt, 0],
    silver: [192, 192, 192],
    black: [0, 0, 0],
    maroon: [128, 0, 0],
    teal: [0, 128, 128],
    blue: [0, 0, rt],
    navy: [0, 0, 128],
    white: [rt, rt, rt],
    olive: [128, 128, 0],
    yellow: [rt, rt, 0],
    orange: [rt, 165, 0],
    gray: [128, 128, 128],
    purple: [128, 0, 128],
    green: [0, 128, 0],
    red: [rt, 0, 0],
    pink: [rt, 192, 203],
    cyan: [0, rt, rt],
    transparent: [rt, rt, rt, 0],
  },
  lh = function (a, r, i) {
    return (
      (a += a < 0 ? 1 : a > 1 ? -1 : 0),
      ((a * 6 < 1
        ? r + (i - r) * a * 6
        : a < 0.5
        ? i
        : a * 3 < 2
        ? r + (i - r) * (2 / 3 - a) * 6
        : r) *
        rt +
        0.5) |
        0
    );
  },
  Jy = function (a, r, i) {
    var s = a ? (Ul(a) ? [a >> 16, (a >> 8) & rt, a & rt] : 0) : uc.black,
      o,
      d,
      h,
      p,
      g,
      y,
      _,
      T,
      b,
      E;
    if (!s) {
      if ((a.substr(-1) === "," && (a = a.substr(0, a.length - 1)), uc[a]))
        s = uc[a];
      else if (a.charAt(0) === "#") {
        if (
          (a.length < 6 &&
            ((o = a.charAt(1)),
            (d = a.charAt(2)),
            (h = a.charAt(3)),
            (a =
              "#" +
              o +
              o +
              d +
              d +
              h +
              h +
              (a.length === 5 ? a.charAt(4) + a.charAt(4) : ""))),
          a.length === 9)
        )
          return (
            (s = parseInt(a.substr(1, 6), 16)),
            [s >> 16, (s >> 8) & rt, s & rt, parseInt(a.substr(7), 16) / 255]
          );
        (a = parseInt(a.substr(1), 16)), (s = [a >> 16, (a >> 8) & rt, a & rt]);
      } else if (a.substr(0, 3) === "hsl") {
        if (((s = E = a.match(x1)), !r))
          (p = (+s[0] % 360) / 360),
            (g = +s[1] / 100),
            (y = +s[2] / 100),
            (d = y <= 0.5 ? y * (g + 1) : y + g - y * g),
            (o = y * 2 - d),
            s.length > 3 && (s[3] *= 1),
            (s[0] = lh(p + 1 / 3, o, d)),
            (s[1] = lh(p, o, d)),
            (s[2] = lh(p - 1 / 3, o, d));
        else if (~a.indexOf("="))
          return (s = a.match(zy)), i && s.length < 4 && (s[3] = 1), s;
      } else s = a.match(x1) || uc.transparent;
      s = s.map(Number);
    }
    return (
      r &&
        !E &&
        ((o = s[0] / rt),
        (d = s[1] / rt),
        (h = s[2] / rt),
        (_ = Math.max(o, d, h)),
        (T = Math.min(o, d, h)),
        (y = (_ + T) / 2),
        _ === T
          ? (p = g = 0)
          : ((b = _ - T),
            (g = y > 0.5 ? b / (2 - _ - T) : b / (_ + T)),
            (p =
              _ === o
                ? (d - h) / b + (d < h ? 6 : 0)
                : _ === d
                ? (h - o) / b + 2
                : (o - d) / b + 4),
            (p *= 60)),
        (s[0] = ~~(p + 0.5)),
        (s[1] = ~~(g * 100 + 0.5)),
        (s[2] = ~~(y * 100 + 0.5))),
      i && s.length < 4 && (s[3] = 1),
      s
    );
  },
  Fy = function (a) {
    var r = [],
      i = [],
      s = -1;
    return (
      a.split(yi).forEach(function (o) {
        var d = o.match($r) || [];
        r.push.apply(r, d), i.push((s += d.length + 1));
      }),
      (r.c = i),
      r
    );
  },
  E1 = function (a, r, i) {
    var s = "",
      o = (a + s).match(yi),
      d = r ? "hsla(" : "rgba(",
      h = 0,
      p,
      g,
      y,
      _;
    if (!o) return a;
    if (
      ((o = o.map(function (T) {
        return (
          (T = Jy(T, r, 1)) &&
          d +
            (r ? T[0] + "," + T[1] + "%," + T[2] + "%," + T[3] : T.join(",")) +
            ")"
        );
      })),
      i && ((y = Fy(a)), (p = i.c), p.join(s) !== y.c.join(s)))
    )
      for (g = a.replace(yi, "1").split($r), _ = g.length - 1; h < _; h++)
        s +=
          g[h] +
          (~p.indexOf(h)
            ? o.shift() || d + "0,0,0,0)"
            : (y.length ? y : o.length ? o : i).shift());
    if (!g)
      for (g = a.split(yi), _ = g.length - 1; h < _; h++) s += g[h] + o[h];
    return s + g[_];
  },
  yi = (function () {
    var f =
        "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",
      a;
    for (a in uc) f += "|" + a + "\\b";
    return new RegExp(f + ")", "gi");
  })(),
  zS = /hsl[a]?\(/,
  Wy = function (a) {
    var r = a.join(" "),
      i;
    if (((yi.lastIndex = 0), yi.test(r)))
      return (
        (i = zS.test(r)),
        (a[1] = E1(a[1], i)),
        (a[0] = E1(a[0], i, Fy(a[1]))),
        !0
      );
  },
  Oc,
  sa = (function () {
    var f = Date.now,
      a = 500,
      r = 33,
      i = f(),
      s = i,
      o = 1e3 / 240,
      d = o,
      h = [],
      p,
      g,
      y,
      _,
      T,
      b,
      E = function S(N) {
        var q = f() - s,
          X = N === !0,
          K,
          U,
          Q,
          W;
        if (
          ((q > a || q < 0) && (i += q - r),
          (s += q),
          (Q = s - i),
          (K = Q - d),
          (K > 0 || X) &&
            ((W = ++_.frame),
            (T = Q - _.time * 1e3),
            (_.time = Q = Q / 1e3),
            (d += K + (K >= o ? 4 : o - K)),
            (U = 1)),
          X || (p = g(S)),
          U)
        )
          for (b = 0; b < h.length; b++) h[b](Q, T, W, N);
      };
    return (
      (_ = {
        time: 0,
        frame: 0,
        tick: function () {
          E(!0);
        },
        deltaRatio: function (N) {
          return T / (1e3 / (N || 60));
        },
        wake: function () {
          Ey &&
            (!Sh &&
              Fh() &&
              ((tl = Sh = window),
              (Wh = tl.document || {}),
              (da.gsap = Zn),
              (tl.gsapVersions || (tl.gsapVersions = [])).push(Zn.version),
              wy(Ao || tl.GreenSockGlobals || (!tl.gsap && tl) || {}),
              Zy.forEach(Ky)),
            (y = typeof requestAnimationFrame < "u" && requestAnimationFrame),
            p && _.sleep(),
            (g =
              y ||
              function (N) {
                return setTimeout(N, (d - _.time * 1e3 + 1) | 0);
              }),
            (Oc = 1),
            E(2));
        },
        sleep: function () {
          (y ? cancelAnimationFrame : clearTimeout)(p), (Oc = 0), (g = Mc);
        },
        lagSmoothing: function (N, q) {
          (a = N || 1 / 0), (r = Math.min(q || 33, a));
        },
        fps: function (N) {
          (o = 1e3 / (N || 240)), (d = _.time * 1e3 + o);
        },
        add: function (N, q, X) {
          var K = q
            ? function (U, Q, W, R) {
                N(U, Q, W, R), _.remove(K);
              }
            : N;
          return _.remove(N), h[X ? "unshift" : "push"](K), os(), K;
        },
        remove: function (N, q) {
          ~(q = h.indexOf(N)) && h.splice(q, 1) && b >= q && b--;
        },
        _listeners: h,
      }),
      _
    );
  })(),
  os = function () {
    return !Oc && sa.wake();
  },
  Xe = {},
  CS = /^[\d.\-M][\d.\-,\s]/,
  ES = /["']/g,
  wS = function (a) {
    for (
      var r = {},
        i = a.substr(1, a.length - 3).split(":"),
        s = i[0],
        o = 1,
        d = i.length,
        h,
        p,
        g;
      o < d;
      o++
    )
      (p = i[o]),
        (h = o !== d - 1 ? p.lastIndexOf(",") : p.length),
        (g = p.substr(0, h)),
        (r[s] = isNaN(g) ? g.replace(ES, "").trim() : +g),
        (s = p.substr(h + 1).trim());
    return r;
  },
  MS = function (a) {
    var r = a.indexOf("(") + 1,
      i = a.indexOf(")"),
      s = a.indexOf("(", r);
    return a.substring(r, ~s && s < i ? a.indexOf(")", i + 1) : i);
  },
  NS = function (a) {
    var r = (a + "").split("("),
      i = Xe[r[0]];
    return i && r.length > 1 && i.config
      ? i.config.apply(
          null,
          ~a.indexOf("{") ? [wS(r[1])] : MS(a).split(",").map(Ry)
        )
      : Xe._CE && CS.test(a)
      ? Xe._CE("", a)
      : i;
  },
  $y = function (a) {
    return function (r) {
      return 1 - a(1 - r);
    };
  },
  Py = function f(a, r) {
    for (var i = a._first, s; i; )
      i instanceof On
        ? f(i, r)
        : i.vars.yoyoEase &&
          (!i._yoyo || !i._repeat) &&
          i._yoyo !== r &&
          (i.timeline
            ? f(i.timeline, r)
            : ((s = i._ease),
              (i._ease = i._yEase),
              (i._yEase = s),
              (i._yoyo = r))),
        (i = i._next);
  },
  Ii = function (a, r) {
    return (a && (Dt(a) ? a : Xe[a] || NS(a))) || r;
  },
  sr = function (a, r, i, s) {
    i === void 0 &&
      (i = function (p) {
        return 1 - r(1 - p);
      }),
      s === void 0 &&
        (s = function (p) {
          return p < 0.5 ? r(p * 2) / 2 : 1 - r((1 - p) * 2) / 2;
        });
    var o = { easeIn: r, easeOut: i, easeInOut: s },
      d;
    return (
      Vn(a, function (h) {
        (Xe[h] = da[h] = o), (Xe[(d = h.toLowerCase())] = i);
        for (var p in o)
          Xe[
            d + (p === "easeIn" ? ".in" : p === "easeOut" ? ".out" : ".inOut")
          ] = Xe[h + "." + p] = o[p];
      }),
      o
    );
  },
  Iy = function (a) {
    return function (r) {
      return r < 0.5 ? (1 - a(1 - r * 2)) / 2 : 0.5 + a((r - 0.5) * 2) / 2;
    };
  },
  ih = function f(a, r, i) {
    var s = r >= 1 ? r : 1,
      o = (i || (a ? 0.3 : 0.45)) / (r < 1 ? r : 1),
      d = (o / xh) * (Math.asin(1 / s) || 0),
      h = function (y) {
        return y === 1 ? 1 : s * Math.pow(2, -10 * y) * tS((y - d) * o) + 1;
      },
      p =
        a === "out"
          ? h
          : a === "in"
          ? function (g) {
              return 1 - h(1 - g);
            }
          : Iy(h);
    return (
      (o = xh / o),
      (p.config = function (g, y) {
        return f(a, g, y);
      }),
      p
    );
  },
  rh = function f(a, r) {
    r === void 0 && (r = 1.70158);
    var i = function (d) {
        return d ? --d * d * ((r + 1) * d + r) + 1 : 0;
      },
      s =
        a === "out"
          ? i
          : a === "in"
          ? function (o) {
              return 1 - i(1 - o);
            }
          : Iy(i);
    return (
      (s.config = function (o) {
        return f(a, o);
      }),
      s
    );
  };
Vn("Linear,Quad,Cubic,Quart,Quint,Strong", function (f, a) {
  var r = a < 5 ? a + 1 : a;
  sr(
    f + ",Power" + (r - 1),
    a
      ? function (i) {
          return Math.pow(i, r);
        }
      : function (i) {
          return i;
        },
    function (i) {
      return 1 - Math.pow(1 - i, r);
    },
    function (i) {
      return i < 0.5
        ? Math.pow(i * 2, r) / 2
        : 1 - Math.pow((1 - i) * 2, r) / 2;
    }
  );
});
Xe.Linear.easeNone = Xe.none = Xe.Linear.easeIn;
sr("Elastic", ih("in"), ih("out"), ih());
(function (f, a) {
  var r = 1 / a,
    i = 2 * r,
    s = 2.5 * r,
    o = function (h) {
      return h < r
        ? f * h * h
        : h < i
        ? f * Math.pow(h - 1.5 / a, 2) + 0.75
        : h < s
        ? f * (h -= 2.25 / a) * h + 0.9375
        : f * Math.pow(h - 2.625 / a, 2) + 0.984375;
    };
  sr(
    "Bounce",
    function (d) {
      return 1 - o(1 - d);
    },
    o
  );
})(7.5625, 2.75);
sr("Expo", function (f) {
  return Math.pow(2, 10 * (f - 1)) * f + f * f * f * f * f * f * (1 - f);
});
sr("Circ", function (f) {
  return -(Ty(1 - f * f) - 1);
});
sr("Sine", function (f) {
  return f === 1 ? 1 : -eS(f * P2) + 1;
});
sr("Back", rh("in"), rh("out"), rh());
Xe.SteppedEase =
  Xe.steps =
  da.SteppedEase =
    {
      config: function (a, r) {
        a === void 0 && (a = 1);
        var i = 1 / a,
          s = a + (r ? 0 : 1),
          o = r ? 1 : 0,
          d = 1 - st;
        return function (h) {
          return (((s * Hc(0, d, h)) | 0) + o) * i;
        };
      },
    };
rs.ease = Xe["quad.out"];
Vn(
  "onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",
  function (f) {
    return (Ih += f + "," + f + "Params,");
  }
);
var ev = function (a, r) {
    (this.id = I2++),
      (a._gsap = this),
      (this.target = a),
      (this.harness = r),
      (this.get = r ? r.get : Oy),
      (this.set = r ? r.getSetter : ip);
  },
  Dc = (function () {
    function f(r) {
      (this.vars = r),
        (this._delay = +r.delay || 0),
        (this._repeat = r.repeat === 1 / 0 ? -2 : r.repeat || 0) &&
          ((this._rDelay = r.repeatDelay || 0),
          (this._yoyo = !!r.yoyo || !!r.yoyoEase)),
        (this._ts = 1),
        us(this, +r.duration, 1, 1),
        (this.data = r.data),
        bt && ((this._ctx = bt), bt.data.push(this)),
        Oc || sa.wake();
    }
    var a = f.prototype;
    return (
      (a.delay = function (i) {
        return i || i === 0
          ? (this.parent &&
              this.parent.smoothChildTiming &&
              this.startTime(this._start + i - this._delay),
            (this._delay = i),
            this)
          : this._delay;
      }),
      (a.duration = function (i) {
        return arguments.length
          ? this.totalDuration(
              this._repeat > 0 ? i + (i + this._rDelay) * this._repeat : i
            )
          : this.totalDuration() && this._dur;
      }),
      (a.totalDuration = function (i) {
        return arguments.length
          ? ((this._dirty = 0),
            us(
              this,
              this._repeat < 0
                ? i
                : (i - this._repeat * this._rDelay) / (this._repeat + 1)
            ))
          : this._tDur;
      }),
      (a.totalTime = function (i, s) {
        if ((os(), !arguments.length)) return this._tTime;
        var o = this._dp;
        if (o && o.smoothChildTiming && this._ts) {
          for (Ho(this, i), !o._dp || o.parent || Uy(o, this); o && o.parent; )
            o.parent._time !==
              o._start +
                (o._ts >= 0
                  ? o._tTime / o._ts
                  : (o.totalDuration() - o._tTime) / -o._ts) &&
              o.totalTime(o._tTime, !0),
              (o = o.parent);
          !this.parent &&
            this._dp.autoRemoveChildren &&
            ((this._ts > 0 && i < this._tDur) ||
              (this._ts < 0 && i > 0) ||
              (!this._tDur && !i)) &&
            al(this._dp, this, this._start - this._delay);
        }
        return (
          (this._tTime !== i ||
            (!this._dur && !s) ||
            (this._initted && Math.abs(this._zTime) === st) ||
            (!this._initted && this._dur && i) ||
            (!i && !this._initted && (this.add || this._ptLookup))) &&
            (this._ts || (this._pTime = i), Dy(this, i, s)),
          this
        );
      }),
      (a.time = function (i, s) {
        return arguments.length
          ? this.totalTime(
              Math.min(this.totalDuration(), i + A1(this)) %
                (this._dur + this._rDelay) || (i ? this._dur : 0),
              s
            )
          : this._time;
      }),
      (a.totalProgress = function (i, s) {
        return arguments.length
          ? this.totalTime(this.totalDuration() * i, s)
          : this.totalDuration()
          ? Math.min(1, this._tTime / this._tDur)
          : this.rawTime() >= 0 && this._initted
          ? 1
          : 0;
      }),
      (a.progress = function (i, s) {
        return arguments.length
          ? this.totalTime(
              this.duration() *
                (this._yoyo && !(this.iteration() & 1) ? 1 - i : i) +
                A1(this),
              s
            )
          : this.duration()
          ? Math.min(1, this._time / this._dur)
          : this.rawTime() > 0
          ? 1
          : 0;
      }),
      (a.iteration = function (i, s) {
        var o = this.duration() + this._rDelay;
        return arguments.length
          ? this.totalTime(this._time + (i - 1) * o, s)
          : this._repeat
          ? cs(this._tTime, o) + 1
          : 1;
      }),
      (a.timeScale = function (i, s) {
        if (!arguments.length) return this._rts === -st ? 0 : this._rts;
        if (this._rts === i) return this;
        var o =
          this.parent && this._ts ? Eo(this.parent._time, this) : this._tTime;
        return (
          (this._rts = +i || 0),
          (this._ts = this._ps || i === -st ? 0 : this._rts),
          this.totalTime(
            Hc(-Math.abs(this._delay), this.totalDuration(), o),
            s !== !1
          ),
          Uo(this),
          fS(this)
        );
      }),
      (a.paused = function (i) {
        return arguments.length
          ? (this._ps !== i &&
              ((this._ps = i),
              i
                ? ((this._pTime =
                    this._tTime || Math.max(-this._delay, this.rawTime())),
                  (this._ts = this._act = 0))
                : (os(),
                  (this._ts = this._rts),
                  this.totalTime(
                    this.parent && !this.parent.smoothChildTiming
                      ? this.rawTime()
                      : this._tTime || this._pTime,
                    this.progress() === 1 &&
                      Math.abs(this._zTime) !== st &&
                      (this._tTime -= st)
                  ))),
            this)
          : this._ps;
      }),
      (a.startTime = function (i) {
        if (arguments.length) {
          this._start = zt(i);
          var s = this.parent || this._dp;
          return (
            s &&
              (s._sort || !this.parent) &&
              al(s, this, this._start - this._delay),
            this
          );
        }
        return this._start;
      }),
      (a.endTime = function (i) {
        return (
          this._start +
          (Gn(i) ? this.totalDuration() : this.duration()) /
            Math.abs(this._ts || 1)
        );
      }),
      (a.rawTime = function (i) {
        var s = this.parent || this._dp;
        return s
          ? i &&
            (!this._ts ||
              (this._repeat && this._time && this.totalProgress() < 1))
            ? this._tTime % (this._dur + this._rDelay)
            : this._ts
            ? Eo(s.rawTime(i), this)
            : this._tTime
          : this._tTime;
      }),
      (a.revert = function (i) {
        i === void 0 && (i = sS);
        var s = fn;
        return (
          (fn = i),
          tp(this) &&
            (this.timeline && this.timeline.revert(i),
            this.totalTime(-0.01, i.suppressEvents)),
          this.data !== "nested" && i.kill !== !1 && this.kill(),
          (fn = s),
          this
        );
      }),
      (a.globalTime = function (i) {
        for (var s = this, o = arguments.length ? i : s.rawTime(); s; )
          (o = s._start + o / (Math.abs(s._ts) || 1)), (s = s._dp);
        return !this.parent && this._sat ? this._sat.globalTime(i) : o;
      }),
      (a.repeat = function (i) {
        return arguments.length
          ? ((this._repeat = i === 1 / 0 ? -2 : i), z1(this))
          : this._repeat === -2
          ? 1 / 0
          : this._repeat;
      }),
      (a.repeatDelay = function (i) {
        if (arguments.length) {
          var s = this._time;
          return (this._rDelay = i), z1(this), s ? this.time(s) : this;
        }
        return this._rDelay;
      }),
      (a.yoyo = function (i) {
        return arguments.length ? ((this._yoyo = i), this) : this._yoyo;
      }),
      (a.seek = function (i, s) {
        return this.totalTime(Oa(this, i), Gn(s));
      }),
      (a.restart = function (i, s) {
        return (
          this.play().totalTime(i ? -this._delay : 0, Gn(s)),
          this._dur || (this._zTime = -st),
          this
        );
      }),
      (a.play = function (i, s) {
        return i != null && this.seek(i, s), this.reversed(!1).paused(!1);
      }),
      (a.reverse = function (i, s) {
        return (
          i != null && this.seek(i || this.totalDuration(), s),
          this.reversed(!0).paused(!1)
        );
      }),
      (a.pause = function (i, s) {
        return i != null && this.seek(i, s), this.paused(!0);
      }),
      (a.resume = function () {
        return this.paused(!1);
      }),
      (a.reversed = function (i) {
        return arguments.length
          ? (!!i !== this.reversed() &&
              this.timeScale(-this._rts || (i ? -st : 0)),
            this)
          : this._rts < 0;
      }),
      (a.invalidate = function () {
        return (this._initted = this._act = 0), (this._zTime = -st), this;
      }),
      (a.isActive = function () {
        var i = this.parent || this._dp,
          s = this._start,
          o;
        return !!(
          !i ||
          (this._ts &&
            this._initted &&
            i.isActive() &&
            (o = i.rawTime(!0)) >= s &&
            o < this.endTime(!0) - st)
        );
      }),
      (a.eventCallback = function (i, s, o) {
        var d = this.vars;
        return arguments.length > 1
          ? (s
              ? ((d[i] = s),
                o && (d[i + "Params"] = o),
                i === "onUpdate" && (this._onUpdate = s))
              : delete d[i],
            this)
          : d[i];
      }),
      (a.then = function (i) {
        var s = this,
          o = s._prom;
        return new Promise(function (d) {
          var h = Dt(i) ? i : jy,
            p = function () {
              var y = s.then;
              (s.then = null),
                o && o(),
                Dt(h) && (h = h(s)) && (h.then || h === s) && (s.then = y),
                d(h),
                (s.then = y);
            };
          (s._initted && s.totalProgress() === 1 && s._ts >= 0) ||
          (!s._tTime && s._ts < 0)
            ? p()
            : (s._prom = p);
        });
      }),
      (a.kill = function () {
        cc(this);
      }),
      f
    );
  })();
ha(Dc.prototype, {
  _time: 0,
  _start: 0,
  _end: 0,
  _tTime: 0,
  _tDur: 0,
  _dirty: 0,
  _repeat: 0,
  _yoyo: !1,
  parent: null,
  _initted: !1,
  _rDelay: 0,
  _ts: 1,
  _dp: 0,
  ratio: 0,
  _zTime: -st,
  _prom: 0,
  _ps: !1,
  _rts: 1,
});
var On = (function (f) {
  Sy(a, f);
  function a(i, s) {
    var o;
    return (
      i === void 0 && (i = {}),
      (o = f.call(this, i) || this),
      (o.labels = {}),
      (o.smoothChildTiming = !!i.smoothChildTiming),
      (o.autoRemoveChildren = !!i.autoRemoveChildren),
      (o._sort = Gn(i.sortChildren)),
      Ct && al(i.parent || Ct, Nl(o), s),
      i.reversed && o.reverse(),
      i.paused && o.paused(!0),
      i.scrollTrigger && Hy(Nl(o), i.scrollTrigger),
      o
    );
  }
  var r = a.prototype;
  return (
    (r.to = function (s, o, d) {
      return gc(0, arguments, this), this;
    }),
    (r.from = function (s, o, d) {
      return gc(1, arguments, this), this;
    }),
    (r.fromTo = function (s, o, d, h) {
      return gc(2, arguments, this), this;
    }),
    (r.set = function (s, o, d) {
      return (
        (o.duration = 0),
        (o.parent = this),
        mc(o).repeatDelay || (o.repeat = 0),
        (o.immediateRender = !!o.immediateRender),
        new Zt(s, o, Oa(this, d), 1),
        this
      );
    }),
    (r.call = function (s, o, d) {
      return al(this, Zt.delayedCall(0, s, o), d);
    }),
    (r.staggerTo = function (s, o, d, h, p, g, y) {
      return (
        (d.duration = o),
        (d.stagger = d.stagger || h),
        (d.onComplete = g),
        (d.onCompleteParams = y),
        (d.parent = this),
        new Zt(s, d, Oa(this, p)),
        this
      );
    }),
    (r.staggerFrom = function (s, o, d, h, p, g, y) {
      return (
        (d.runBackwards = 1),
        (mc(d).immediateRender = Gn(d.immediateRender)),
        this.staggerTo(s, o, d, h, p, g, y)
      );
    }),
    (r.staggerFromTo = function (s, o, d, h, p, g, y, _) {
      return (
        (h.startAt = d),
        (mc(h).immediateRender = Gn(h.immediateRender)),
        this.staggerTo(s, o, h, p, g, y, _)
      );
    }),
    (r.render = function (s, o, d) {
      var h = this._time,
        p = this._dirty ? this.totalDuration() : this._tDur,
        g = this._dur,
        y = s <= 0 ? 0 : zt(s),
        _ = this._zTime < 0 != s < 0 && (this._initted || !g),
        T,
        b,
        E,
        S,
        N,
        q,
        X,
        K,
        U,
        Q,
        W,
        R;
      if (
        (this !== Ct && y > p && s >= 0 && (y = p), y !== this._tTime || d || _)
      ) {
        if (
          (h !== this._time &&
            g &&
            ((y += this._time - h), (s += this._time - h)),
          (T = y),
          (U = this._start),
          (K = this._ts),
          (q = !K),
          _ && (g || (h = this._zTime), (s || !o) && (this._zTime = s)),
          this._repeat)
        ) {
          if (
            ((W = this._yoyo),
            (N = g + this._rDelay),
            this._repeat < -1 && s < 0)
          )
            return this.totalTime(N * 100 + s, o, d);
          if (
            ((T = zt(y % N)),
            y === p
              ? ((S = this._repeat), (T = g))
              : ((Q = zt(y / N)),
                (S = ~~Q),
                S && S === Q && ((T = g), S--),
                T > g && (T = g)),
            (Q = cs(this._tTime, N)),
            !h &&
              this._tTime &&
              Q !== S &&
              this._tTime - Q * N - this._dur <= 0 &&
              (Q = S),
            W && S & 1 && ((T = g - T), (R = 1)),
            S !== Q && !this._lock)
          ) {
            var H = W && Q & 1,
              J = H === (W && S & 1);
            if (
              (S < Q && (H = !H),
              (h = H ? 0 : y % g ? g : y),
              (this._lock = 1),
              (this.render(h || (R ? 0 : zt(S * N)), o, !g)._lock = 0),
              (this._tTime = y),
              !o && this.parent && ua(this, "onRepeat"),
              this.vars.repeatRefresh &&
                !R &&
                ((this.invalidate()._lock = 1), (Q = S)),
              (h && h !== this._time) ||
                q !== !this._ts ||
                (this.vars.onRepeat && !this.parent && !this._act))
            )
              return this;
            if (
              ((g = this._dur),
              (p = this._tDur),
              J &&
                ((this._lock = 2),
                (h = H ? g : -1e-4),
                this.render(h, !0),
                this.vars.repeatRefresh && !R && this.invalidate()),
              (this._lock = 0),
              !this._ts && !q)
            )
              return this;
            Py(this, R);
          }
        }
        if (
          (this._hasPause &&
            !this._forcing &&
            this._lock < 2 &&
            ((X = mS(this, zt(h), zt(T))), X && (y -= T - (T = X._start))),
          (this._tTime = y),
          (this._time = T),
          (this._act = !K),
          this._initted ||
            ((this._onUpdate = this.vars.onUpdate),
            (this._initted = 1),
            (this._zTime = s),
            (h = 0)),
          !h && y && g && !o && !Q && (ua(this, "onStart"), this._tTime !== y))
        )
          return this;
        if (T >= h && s >= 0)
          for (b = this._first; b; ) {
            if (
              ((E = b._next), (b._act || T >= b._start) && b._ts && X !== b)
            ) {
              if (b.parent !== this) return this.render(s, o, d);
              if (
                (b.render(
                  b._ts > 0
                    ? (T - b._start) * b._ts
                    : (b._dirty ? b.totalDuration() : b._tDur) +
                        (T - b._start) * b._ts,
                  o,
                  d
                ),
                T !== this._time || (!this._ts && !q))
              ) {
                (X = 0), E && (y += this._zTime = -st);
                break;
              }
            }
            b = E;
          }
        else {
          b = this._last;
          for (var I = s < 0 ? s : T; b; ) {
            if (((E = b._prev), (b._act || I <= b._end) && b._ts && X !== b)) {
              if (b.parent !== this) return this.render(s, o, d);
              if (
                (b.render(
                  b._ts > 0
                    ? (I - b._start) * b._ts
                    : (b._dirty ? b.totalDuration() : b._tDur) +
                        (I - b._start) * b._ts,
                  o,
                  d || (fn && tp(b))
                ),
                T !== this._time || (!this._ts && !q))
              ) {
                (X = 0), E && (y += this._zTime = I ? -st : st);
                break;
              }
            }
            b = E;
          }
        }
        if (
          X &&
          !o &&
          (this.pause(),
          (X.render(T >= h ? 0 : -st)._zTime = T >= h ? 1 : -1),
          this._ts)
        )
          return (this._start = U), Uo(this), this.render(s, o, d);
        this._onUpdate && !o && ua(this, "onUpdate", !0),
          ((y === p && this._tTime >= this.totalDuration()) || (!y && h)) &&
            (U === this._start || Math.abs(K) !== Math.abs(this._ts)) &&
            (this._lock ||
              ((s || !g) &&
                ((y === p && this._ts > 0) || (!y && this._ts < 0)) &&
                bi(this, 1),
              !o &&
                !(s < 0 && !h) &&
                (y || h || !p) &&
                (ua(
                  this,
                  y === p && s >= 0 ? "onComplete" : "onReverseComplete",
                  !0
                ),
                this._prom &&
                  !(y < p && this.timeScale() > 0) &&
                  this._prom())));
      }
      return this;
    }),
    (r.add = function (s, o) {
      var d = this;
      if ((Ul(o) || (o = Oa(this, o, s)), !(s instanceof Dc))) {
        if (xn(s))
          return (
            s.forEach(function (h) {
              return d.add(h, o);
            }),
            this
          );
        if (an(s)) return this.addLabel(s, o);
        if (Dt(s)) s = Zt.delayedCall(0, s);
        else return this;
      }
      return this !== s ? al(this, s, o) : this;
    }),
    (r.getChildren = function (s, o, d, h) {
      s === void 0 && (s = !0),
        o === void 0 && (o = !0),
        d === void 0 && (d = !0),
        h === void 0 && (h = -ja);
      for (var p = [], g = this._first; g; )
        g._start >= h &&
          (g instanceof Zt
            ? o && p.push(g)
            : (d && p.push(g), s && p.push.apply(p, g.getChildren(!0, o, d)))),
          (g = g._next);
      return p;
    }),
    (r.getById = function (s) {
      for (var o = this.getChildren(1, 1, 1), d = o.length; d--; )
        if (o[d].vars.id === s) return o[d];
    }),
    (r.remove = function (s) {
      return an(s)
        ? this.removeLabel(s)
        : Dt(s)
        ? this.killTweensOf(s)
        : (s.parent === this && ko(this, s),
          s === this._recent && (this._recent = this._last),
          Pi(this));
    }),
    (r.totalTime = function (s, o) {
      return arguments.length
        ? ((this._forcing = 1),
          !this._dp &&
            this._ts &&
            (this._start = zt(
              sa.time -
                (this._ts > 0
                  ? s / this._ts
                  : (this.totalDuration() - s) / -this._ts)
            )),
          f.prototype.totalTime.call(this, s, o),
          (this._forcing = 0),
          this)
        : this._tTime;
    }),
    (r.addLabel = function (s, o) {
      return (this.labels[s] = Oa(this, o)), this;
    }),
    (r.removeLabel = function (s) {
      return delete this.labels[s], this;
    }),
    (r.addPause = function (s, o, d) {
      var h = Zt.delayedCall(0, o || Mc, d);
      return (
        (h.data = "isPause"), (this._hasPause = 1), al(this, h, Oa(this, s))
      );
    }),
    (r.removePause = function (s) {
      var o = this._first;
      for (s = Oa(this, s); o; )
        o._start === s && o.data === "isPause" && bi(o), (o = o._next);
    }),
    (r.killTweensOf = function (s, o, d) {
      for (var h = this.getTweensOf(s, d), p = h.length; p--; )
        fi !== h[p] && h[p].kill(s, o);
      return this;
    }),
    (r.getTweensOf = function (s, o) {
      for (var d = [], h = ka(s), p = this._first, g = Ul(o), y; p; )
        p instanceof Zt
          ? cS(p._targets, h) &&
            (g
              ? (!fi || (p._initted && p._ts)) &&
                p.globalTime(0) <= o &&
                p.globalTime(p.totalDuration()) > o
              : !o || p.isActive()) &&
            d.push(p)
          : (y = p.getTweensOf(h, o)).length && d.push.apply(d, y),
          (p = p._next);
      return d;
    }),
    (r.tweenTo = function (s, o) {
      o = o || {};
      var d = this,
        h = Oa(d, s),
        p = o,
        g = p.startAt,
        y = p.onStart,
        _ = p.onStartParams,
        T = p.immediateRender,
        b,
        E = Zt.to(
          d,
          ha(
            {
              ease: o.ease || "none",
              lazy: !1,
              immediateRender: !1,
              time: h,
              overwrite: "auto",
              duration:
                o.duration ||
                Math.abs(
                  (h - (g && "time" in g ? g.time : d._time)) / d.timeScale()
                ) ||
                st,
              onStart: function () {
                if ((d.pause(), !b)) {
                  var N =
                    o.duration ||
                    Math.abs(
                      (h - (g && "time" in g ? g.time : d._time)) /
                        d.timeScale()
                    );
                  E._dur !== N && us(E, N, 0, 1).render(E._time, !0, !0),
                    (b = 1);
                }
                y && y.apply(E, _ || []);
              },
            },
            o
          )
        );
      return T ? E.render(0) : E;
    }),
    (r.tweenFromTo = function (s, o, d) {
      return this.tweenTo(o, ha({ startAt: { time: Oa(this, s) } }, d));
    }),
    (r.recent = function () {
      return this._recent;
    }),
    (r.nextLabel = function (s) {
      return s === void 0 && (s = this._time), C1(this, Oa(this, s));
    }),
    (r.previousLabel = function (s) {
      return s === void 0 && (s = this._time), C1(this, Oa(this, s), 1);
    }),
    (r.currentLabel = function (s) {
      return arguments.length
        ? this.seek(s, !0)
        : this.previousLabel(this._time + st);
    }),
    (r.shiftChildren = function (s, o, d) {
      d === void 0 && (d = 0);
      var h = this._first,
        p = this.labels,
        g;
      for (s = zt(s); h; )
        h._start >= d && ((h._start += s), (h._end += s)), (h = h._next);
      if (o) for (g in p) p[g] >= d && (p[g] += s);
      return Pi(this);
    }),
    (r.invalidate = function (s) {
      var o = this._first;
      for (this._lock = 0; o; ) o.invalidate(s), (o = o._next);
      return f.prototype.invalidate.call(this, s);
    }),
    (r.clear = function (s) {
      s === void 0 && (s = !0);
      for (var o = this._first, d; o; ) (d = o._next), this.remove(o), (o = d);
      return (
        this._dp && (this._time = this._tTime = this._pTime = 0),
        s && (this.labels = {}),
        Pi(this)
      );
    }),
    (r.totalDuration = function (s) {
      var o = 0,
        d = this,
        h = d._last,
        p = ja,
        g,
        y,
        _;
      if (arguments.length)
        return d.timeScale(
          (d._repeat < 0 ? d.duration() : d.totalDuration()) /
            (d.reversed() ? -s : s)
        );
      if (d._dirty) {
        for (_ = d.parent; h; )
          (g = h._prev),
            h._dirty && h.totalDuration(),
            (y = h._start),
            y > p && d._sort && h._ts && !d._lock
              ? ((d._lock = 1), (al(d, h, y - h._delay, 1)._lock = 0))
              : (p = y),
            y < 0 &&
              h._ts &&
              ((o -= y),
              ((!_ && !d._dp) || (_ && _.smoothChildTiming)) &&
                ((d._start += zt(y / d._ts)), (d._time -= y), (d._tTime -= y)),
              d.shiftChildren(-y, !1, -1 / 0),
              (p = 0)),
            h._end > o && h._ts && (o = h._end),
            (h = g);
        us(d, d === Ct && d._time > o ? d._time : o, 1, 1), (d._dirty = 0);
      }
      return d._tDur;
    }),
    (a.updateRoot = function (s) {
      if ((Ct._ts && (Dy(Ct, Eo(s, Ct)), (Ny = sa.frame)), sa.frame >= S1)) {
        S1 += fa.autoSleep || 120;
        var o = Ct._first;
        if ((!o || !o._ts) && fa.autoSleep && sa._listeners.length < 2) {
          for (; o && !o._ts; ) o = o._next;
          o || sa.sleep();
        }
      }
    }),
    a
  );
})(Dc);
ha(On.prototype, { _lock: 0, _hasPause: 0, _forcing: 0 });
var OS = function (a, r, i, s, o, d, h) {
    var p = new Xn(this._pt, a, r, 0, 1, rv, null, o),
      g = 0,
      y = 0,
      _,
      T,
      b,
      E,
      S,
      N,
      q,
      X;
    for (
      p.b = i,
        p.e = s,
        i += "",
        s += "",
        (q = ~s.indexOf("random(")) && (s = Nc(s)),
        d && ((X = [i, s]), d(X, a, r), (i = X[0]), (s = X[1])),
        T = i.match(nh) || [];
      (_ = nh.exec(s));

    )
      (E = _[0]),
        (S = s.substring(g, _.index)),
        b ? (b = (b + 1) % 5) : S.substr(-5) === "rgba(" && (b = 1),
        E !== T[y++] &&
          ((N = parseFloat(T[y - 1]) || 0),
          (p._pt = {
            _next: p._pt,
            p: S || y === 1 ? S : ",",
            s: N,
            c: E.charAt(1) === "=" ? es(N, E) - N : parseFloat(E) - N,
            m: b && b < 4 ? Math.round : 0,
          }),
          (g = nh.lastIndex));
    return (
      (p.c = g < s.length ? s.substring(g, s.length) : ""),
      (p.fp = h),
      (Cy.test(s) || q) && (p.e = 0),
      (this._pt = p),
      p
    );
  },
  np = function (a, r, i, s, o, d, h, p, g, y) {
    Dt(s) && (s = s(o || 0, a, d));
    var _ = a[r],
      T =
        i !== "get"
          ? i
          : Dt(_)
          ? g
            ? a[
                r.indexOf("set") || !Dt(a["get" + r.substr(3)])
                  ? r
                  : "get" + r.substr(3)
              ](g)
            : a[r]()
          : _,
      b = Dt(_) ? (g ? US : lv) : lp,
      E;
    if (
      (an(s) &&
        (~s.indexOf("random(") && (s = Nc(s)),
        s.charAt(1) === "=" &&
          ((E = es(T, s) + (_n(T) || 0)), (E || E === 0) && (s = E))),
      !y || T !== s || Mh)
    )
      return !isNaN(T * s) && s !== ""
        ? ((E = new Xn(
            this._pt,
            a,
            r,
            +T || 0,
            s - (T || 0),
            typeof _ == "boolean" ? BS : iv,
            0,
            b
          )),
          g && (E.fp = g),
          h && E.modifier(h, this, a),
          (this._pt = E))
        : (!_ && !(r in a) && $h(r, s),
          OS.call(this, a, r, T, s, b, p || fa.stringFilter, g));
  },
  DS = function (a, r, i, s, o) {
    if (
      (Dt(a) && (a = yc(a, o, r, i, s)),
      !sl(a) || (a.style && a.nodeType) || xn(a) || Ay(a))
    )
      return an(a) ? yc(a, o, r, i, s) : a;
    var d = {},
      h;
    for (h in a) d[h] = yc(a[h], o, r, i, s);
    return d;
  },
  tv = function (a, r, i, s, o, d) {
    var h, p, g, y;
    if (
      ia[a] &&
      (h = new ia[a]()).init(
        o,
        h.rawVars ? r[a] : DS(r[a], s, o, d, i),
        i,
        s,
        d
      ) !== !1 &&
      ((i._pt = p = new Xn(i._pt, o, a, 0, 1, h.render, h, 0, h.priority)),
      i !== Pr)
    )
      for (g = i._ptLookup[i._targets.indexOf(o)], y = h._props.length; y--; )
        g[h._props[y]] = p;
    return h;
  },
  fi,
  Mh,
  ap = function f(a, r, i) {
    var s = a.vars,
      o = s.ease,
      d = s.startAt,
      h = s.immediateRender,
      p = s.lazy,
      g = s.onUpdate,
      y = s.runBackwards,
      _ = s.yoyoEase,
      T = s.keyframes,
      b = s.autoRevert,
      E = a._dur,
      S = a._startAt,
      N = a._targets,
      q = a.parent,
      X = q && q.data === "nested" ? q.vars.targets : N,
      K = a._overwrite === "auto" && !Kh,
      U = a.timeline,
      Q,
      W,
      R,
      H,
      J,
      I,
      oe,
      te,
      be,
      ve,
      ye,
      O,
      G;
    if (
      (U && (!T || !o) && (o = "none"),
      (a._ease = Ii(o, rs.ease)),
      (a._yEase = _ ? $y(Ii(_ === !0 ? o : _, rs.ease)) : 0),
      _ &&
        a._yoyo &&
        !a._repeat &&
        ((_ = a._yEase), (a._yEase = a._ease), (a._ease = _)),
      (a._from = !U && !!s.runBackwards),
      !U || (T && !s.stagger))
    ) {
      if (
        ((te = N[0] ? $i(N[0]).harness : 0),
        (O = te && s[te.prop]),
        (Q = Co(s, Ph)),
        S &&
          (S._zTime < 0 && S.progress(1),
          r < 0 && y && h && !b ? S.render(-1, !0) : S.revert(y && E ? po : rS),
          (S._lazy = 0)),
        d)
      ) {
        if (
          (bi(
            (a._startAt = Zt.set(
              N,
              ha(
                {
                  data: "isStart",
                  overwrite: !1,
                  parent: q,
                  immediateRender: !0,
                  lazy: !S && Gn(p),
                  startAt: null,
                  delay: 0,
                  onUpdate:
                    g &&
                    function () {
                      return ua(a, "onUpdate");
                    },
                  stagger: 0,
                },
                d
              )
            ))
          ),
          (a._startAt._dp = 0),
          (a._startAt._sat = a),
          r < 0 && (fn || (!h && !b)) && a._startAt.revert(po),
          h && E && r <= 0 && i <= 0)
        ) {
          r && (a._zTime = r);
          return;
        }
      } else if (y && E && !S) {
        if (
          (r && (h = !1),
          (R = ha(
            {
              overwrite: !1,
              data: "isFromStart",
              lazy: h && !S && Gn(p),
              immediateRender: h,
              stagger: 0,
              parent: q,
            },
            Q
          )),
          O && (R[te.prop] = O),
          bi((a._startAt = Zt.set(N, R))),
          (a._startAt._dp = 0),
          (a._startAt._sat = a),
          r < 0 && (fn ? a._startAt.revert(po) : a._startAt.render(-1, !0)),
          (a._zTime = r),
          !h)
        )
          f(a._startAt, st, st);
        else if (!r) return;
      }
      for (
        a._pt = a._ptCache = 0, p = (E && Gn(p)) || (p && !E), W = 0;
        W < N.length;
        W++
      ) {
        if (
          ((J = N[W]),
          (oe = J._gsap || ep(N)[W]._gsap),
          (a._ptLookup[W] = ve = {}),
          Th[oe.id] && gi.length && zo(),
          (ye = X === N ? W : X.indexOf(J)),
          te &&
            (be = new te()).init(J, O || Q, a, ye, X) !== !1 &&
            ((a._pt = H =
              new Xn(a._pt, J, be.name, 0, 1, be.render, be, 0, be.priority)),
            be._props.forEach(function (V) {
              ve[V] = H;
            }),
            be.priority && (I = 1)),
          !te || O)
        )
          for (R in Q)
            ia[R] && (be = tv(R, Q, a, ye, J, X))
              ? be.priority && (I = 1)
              : (ve[R] = H =
                  np.call(a, J, R, "get", Q[R], ye, X, 0, s.stringFilter));
        a._op && a._op[W] && a.kill(J, a._op[W]),
          K &&
            a._pt &&
            ((fi = a),
            Ct.killTweensOf(J, ve, a.globalTime(r)),
            (G = !a.parent),
            (fi = 0)),
          a._pt && p && (Th[oe.id] = 1);
      }
      I && sv(a), a._onInit && a._onInit(a);
    }
    (a._onUpdate = g),
      (a._initted = (!a._op || a._pt) && !G),
      T && r <= 0 && U.render(ja, !0, !0);
  },
  RS = function (a, r, i, s, o, d, h, p) {
    var g = ((a._pt && a._ptCache) || (a._ptCache = {}))[r],
      y,
      _,
      T,
      b;
    if (!g)
      for (
        g = a._ptCache[r] = [], T = a._ptLookup, b = a._targets.length;
        b--;

      ) {
        if (((y = T[b][r]), y && y.d && y.d._pt))
          for (y = y.d._pt; y && y.p !== r && y.fp !== r; ) y = y._next;
        if (!y)
          return (
            (Mh = 1),
            (a.vars[r] = "+=0"),
            ap(a, h),
            (Mh = 0),
            p ? wc(r + " not eligible for reset") : 1
          );
        g.push(y);
      }
    for (b = g.length; b--; )
      (_ = g[b]),
        (y = _._pt || _),
        (y.s = (s || s === 0) && !o ? s : y.s + (s || 0) + d * y.c),
        (y.c = i - y.s),
        _.e && (_.e = Ht(i) + _n(_.e)),
        _.b && (_.b = y.s + _n(_.b));
  },
  jS = function (a, r) {
    var i = a[0] ? $i(a[0]).harness : 0,
      s = i && i.aliases,
      o,
      d,
      h,
      p;
    if (!s) return r;
    o = ss({}, r);
    for (d in s)
      if (d in o) for (p = s[d].split(","), h = p.length; h--; ) o[p[h]] = o[d];
    return o;
  },
  kS = function (a, r, i, s) {
    var o = r.ease || s || "power1.inOut",
      d,
      h;
    if (xn(r))
      (h = i[a] || (i[a] = [])),
        r.forEach(function (p, g) {
          return h.push({ t: (g / (r.length - 1)) * 100, v: p, e: o });
        });
    else
      for (d in r)
        (h = i[d] || (i[d] = [])),
          d === "ease" || h.push({ t: parseFloat(a), v: r[d], e: o });
  },
  yc = function (a, r, i, s, o) {
    return Dt(a)
      ? a.call(r, i, s, o)
      : an(a) && ~a.indexOf("random(")
      ? Nc(a)
      : a;
  },
  nv = Ih + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",
  av = {};
Vn(nv + ",id,stagger,delay,duration,paused,scrollTrigger", function (f) {
  return (av[f] = 1);
});
var Zt = (function (f) {
  Sy(a, f);
  function a(i, s, o, d) {
    var h;
    typeof s == "number" && ((o.duration = s), (s = o), (o = null)),
      (h = f.call(this, d ? s : mc(s)) || this);
    var p = h.vars,
      g = p.duration,
      y = p.delay,
      _ = p.immediateRender,
      T = p.stagger,
      b = p.overwrite,
      E = p.keyframes,
      S = p.defaults,
      N = p.scrollTrigger,
      q = p.yoyoEase,
      X = s.parent || Ct,
      K = (xn(i) || Ay(i) ? Ul(i[0]) : "length" in s) ? [i] : ka(i),
      U,
      Q,
      W,
      R,
      H,
      J,
      I,
      oe;
    if (
      ((h._targets = K.length
        ? ep(K)
        : wc(
            "GSAP target " + i + " not found. https://gsap.com",
            !fa.nullTargetWarn
          ) || []),
      (h._ptLookup = []),
      (h._overwrite = b),
      E || T || Iu(g) || Iu(y))
    ) {
      if (
        ((s = h.vars),
        (U = h.timeline =
          new On({
            data: "nested",
            defaults: S || {},
            targets: X && X.data === "nested" ? X.vars.targets : K,
          })),
        U.kill(),
        (U.parent = U._dp = Nl(h)),
        (U._start = 0),
        T || Iu(g) || Iu(y))
      ) {
        if (((R = K.length), (I = T && Ly(T)), sl(T)))
          for (H in T) ~nv.indexOf(H) && (oe || (oe = {}), (oe[H] = T[H]));
        for (Q = 0; Q < R; Q++)
          (W = Co(s, av)),
            (W.stagger = 0),
            q && (W.yoyoEase = q),
            oe && ss(W, oe),
            (J = K[Q]),
            (W.duration = +yc(g, Nl(h), Q, J, K)),
            (W.delay = (+yc(y, Nl(h), Q, J, K) || 0) - h._delay),
            !T &&
              R === 1 &&
              W.delay &&
              ((h._delay = y = W.delay), (h._start += y), (W.delay = 0)),
            U.to(J, W, I ? I(Q, J, K) : 0),
            (U._ease = Xe.none);
        U.duration() ? (g = y = 0) : (h.timeline = 0);
      } else if (E) {
        mc(ha(U.vars.defaults, { ease: "none" })),
          (U._ease = Ii(E.ease || s.ease || "none"));
        var te = 0,
          be,
          ve,
          ye;
        if (xn(E))
          E.forEach(function (O) {
            return U.to(K, O, ">");
          }),
            U.duration();
        else {
          W = {};
          for (H in E)
            H === "ease" || H === "easeEach" || kS(H, E[H], W, E.easeEach);
          for (H in W)
            for (
              be = W[H].sort(function (O, G) {
                return O.t - G.t;
              }),
                te = 0,
                Q = 0;
              Q < be.length;
              Q++
            )
              (ve = be[Q]),
                (ye = {
                  ease: ve.e,
                  duration: ((ve.t - (Q ? be[Q - 1].t : 0)) / 100) * g,
                }),
                (ye[H] = ve.v),
                U.to(K, ye, te),
                (te += ye.duration);
          U.duration() < g && U.to({}, { duration: g - U.duration() });
        }
      }
      g || h.duration((g = U.duration()));
    } else h.timeline = 0;
    return (
      b === !0 && !Kh && ((fi = Nl(h)), Ct.killTweensOf(K), (fi = 0)),
      al(X, Nl(h), o),
      s.reversed && h.reverse(),
      s.paused && h.paused(!0),
      (_ ||
        (!g &&
          !E &&
          h._start === zt(X._time) &&
          Gn(_) &&
          dS(Nl(h)) &&
          X.data !== "nested")) &&
        ((h._tTime = -st), h.render(Math.max(0, -y) || 0)),
      N && Hy(Nl(h), N),
      h
    );
  }
  var r = a.prototype;
  return (
    (r.render = function (s, o, d) {
      var h = this._time,
        p = this._tDur,
        g = this._dur,
        y = s < 0,
        _ = s > p - st && !y ? p : s < st ? 0 : s,
        T,
        b,
        E,
        S,
        N,
        q,
        X,
        K,
        U;
      if (!g) pS(this, s, o, d);
      else if (
        _ !== this._tTime ||
        !s ||
        d ||
        (!this._initted && this._tTime) ||
        (this._startAt && this._zTime < 0 !== y) ||
        this._lazy
      ) {
        if (((T = _), (K = this.timeline), this._repeat)) {
          if (((S = g + this._rDelay), this._repeat < -1 && y))
            return this.totalTime(S * 100 + s, o, d);
          if (
            ((T = zt(_ % S)),
            _ === p
              ? ((E = this._repeat), (T = g))
              : ((N = zt(_ / S)),
                (E = ~~N),
                E && E === N ? ((T = g), E--) : T > g && (T = g)),
            (q = this._yoyo && E & 1),
            q && ((U = this._yEase), (T = g - T)),
            (N = cs(this._tTime, S)),
            T === h && !d && this._initted && E === N)
          )
            return (this._tTime = _), this;
          E !== N &&
            (K && this._yEase && Py(K, q),
            this.vars.repeatRefresh &&
              !q &&
              !this._lock &&
              T !== S &&
              this._initted &&
              ((this._lock = d = 1),
              (this.render(zt(S * E), !0).invalidate()._lock = 0)));
        }
        if (!this._initted) {
          if (By(this, y ? s : T, d, o, _)) return (this._tTime = 0), this;
          if (h !== this._time && !(d && this.vars.repeatRefresh && E !== N))
            return this;
          if (g !== this._dur) return this.render(s, o, d);
        }
        if (
          ((this._tTime = _),
          (this._time = T),
          !this._act && this._ts && ((this._act = 1), (this._lazy = 0)),
          (this.ratio = X = (U || this._ease)(T / g)),
          this._from && (this.ratio = X = 1 - X),
          !h && _ && !o && !N && (ua(this, "onStart"), this._tTime !== _))
        )
          return this;
        for (b = this._pt; b; ) b.r(X, b.d), (b = b._next);
        (K && K.render(s < 0 ? s : K._dur * K._ease(T / this._dur), o, d)) ||
          (this._startAt && (this._zTime = s)),
          this._onUpdate &&
            !o &&
            (y && Ah(this, s, o, d), ua(this, "onUpdate")),
          this._repeat &&
            E !== N &&
            this.vars.onRepeat &&
            !o &&
            this.parent &&
            ua(this, "onRepeat"),
          (_ === this._tDur || !_) &&
            this._tTime === _ &&
            (y && !this._onUpdate && Ah(this, s, !0, !0),
            (s || !g) &&
              ((_ === this._tDur && this._ts > 0) || (!_ && this._ts < 0)) &&
              bi(this, 1),
            !o &&
              !(y && !h) &&
              (_ || h || q) &&
              (ua(this, _ === p ? "onComplete" : "onReverseComplete", !0),
              this._prom && !(_ < p && this.timeScale() > 0) && this._prom()));
      }
      return this;
    }),
    (r.targets = function () {
      return this._targets;
    }),
    (r.invalidate = function (s) {
      return (
        (!s || !this.vars.runBackwards) && (this._startAt = 0),
        (this._pt = this._op = this._onUpdate = this._lazy = this.ratio = 0),
        (this._ptLookup = []),
        this.timeline && this.timeline.invalidate(s),
        f.prototype.invalidate.call(this, s)
      );
    }),
    (r.resetTo = function (s, o, d, h, p) {
      Oc || sa.wake(), this._ts || this.play();
      var g = Math.min(this._dur, (this._dp._time - this._start) * this._ts),
        y;
      return (
        this._initted || ap(this, g),
        (y = this._ease(g / this._dur)),
        RS(this, s, o, d, h, y, g, p)
          ? this.resetTo(s, o, d, h, 1)
          : (Ho(this, 0),
            this.parent ||
              ky(
                this._dp,
                this,
                "_first",
                "_last",
                this._dp._sort ? "_start" : 0
              ),
            this.render(0))
      );
    }),
    (r.kill = function (s, o) {
      if ((o === void 0 && (o = "all"), !s && (!o || o === "all")))
        return (
          (this._lazy = this._pt = 0),
          this.parent
            ? cc(this)
            : this.scrollTrigger && this.scrollTrigger.kill(!!fn),
          this
        );
      if (this.timeline) {
        var d = this.timeline.totalDuration();
        return (
          this.timeline.killTweensOf(s, o, fi && fi.vars.overwrite !== !0)
            ._first || cc(this),
          this.parent &&
            d !== this.timeline.totalDuration() &&
            us(this, (this._dur * this.timeline._tDur) / d, 0, 1),
          this
        );
      }
      var h = this._targets,
        p = s ? ka(s) : h,
        g = this._ptLookup,
        y = this._pt,
        _,
        T,
        b,
        E,
        S,
        N,
        q;
      if ((!o || o === "all") && oS(h, p))
        return o === "all" && (this._pt = 0), cc(this);
      for (
        _ = this._op = this._op || [],
          o !== "all" &&
            (an(o) &&
              ((S = {}),
              Vn(o, function (X) {
                return (S[X] = 1);
              }),
              (o = S)),
            (o = jS(h, o))),
          q = h.length;
        q--;

      )
        if (~p.indexOf(h[q])) {
          (T = g[q]),
            o === "all"
              ? ((_[q] = o), (E = T), (b = {}))
              : ((b = _[q] = _[q] || {}), (E = o));
          for (S in E)
            (N = T && T[S]),
              N &&
                ((!("kill" in N.d) || N.d.kill(S) === !0) && ko(this, N, "_pt"),
                delete T[S]),
              b !== "all" && (b[S] = 1);
        }
      return this._initted && !this._pt && y && cc(this), this;
    }),
    (a.to = function (s, o) {
      return new a(s, o, arguments[2]);
    }),
    (a.from = function (s, o) {
      return gc(1, arguments);
    }),
    (a.delayedCall = function (s, o, d, h) {
      return new a(o, 0, {
        immediateRender: !1,
        lazy: !1,
        overwrite: !1,
        delay: s,
        onComplete: o,
        onReverseComplete: o,
        onCompleteParams: d,
        onReverseCompleteParams: d,
        callbackScope: h,
      });
    }),
    (a.fromTo = function (s, o, d) {
      return gc(2, arguments);
    }),
    (a.set = function (s, o) {
      return (o.duration = 0), o.repeatDelay || (o.repeat = 0), new a(s, o);
    }),
    (a.killTweensOf = function (s, o, d) {
      return Ct.killTweensOf(s, o, d);
    }),
    a
  );
})(Dc);
ha(Zt.prototype, { _targets: [], _lazy: 0, _startAt: 0, _op: 0, _onInit: 0 });
Vn("staggerTo,staggerFrom,staggerFromTo", function (f) {
  Zt[f] = function () {
    var a = new On(),
      r = Ch.call(arguments, 0);
    return r.splice(f === "staggerFromTo" ? 5 : 4, 0, 0), a[f].apply(a, r);
  };
});
var lp = function (a, r, i) {
    return (a[r] = i);
  },
  lv = function (a, r, i) {
    return a[r](i);
  },
  US = function (a, r, i, s) {
    return a[r](s.fp, i);
  },
  HS = function (a, r, i) {
    return a.setAttribute(r, i);
  },
  ip = function (a, r) {
    return Dt(a[r]) ? lv : Jh(a[r]) && a.setAttribute ? HS : lp;
  },
  iv = function (a, r) {
    return r.set(r.t, r.p, Math.round((r.s + r.c * a) * 1e6) / 1e6, r);
  },
  BS = function (a, r) {
    return r.set(r.t, r.p, !!(r.s + r.c * a), r);
  },
  rv = function (a, r) {
    var i = r._pt,
      s = "";
    if (!a && r.b) s = r.b;
    else if (a === 1 && r.e) s = r.e;
    else {
      for (; i; )
        (s =
          i.p +
          (i.m ? i.m(i.s + i.c * a) : Math.round((i.s + i.c * a) * 1e4) / 1e4) +
          s),
          (i = i._next);
      s += r.c;
    }
    r.set(r.t, r.p, s, r);
  },
  rp = function (a, r) {
    for (var i = r._pt; i; ) i.r(a, i.d), (i = i._next);
  },
  YS = function (a, r, i, s) {
    for (var o = this._pt, d; o; )
      (d = o._next), o.p === s && o.modifier(a, r, i), (o = d);
  },
  qS = function (a) {
    for (var r = this._pt, i, s; r; )
      (s = r._next),
        (r.p === a && !r.op) || r.op === a
          ? ko(this, r, "_pt")
          : r.dep || (i = 1),
        (r = s);
    return !i;
  },
  LS = function (a, r, i, s) {
    s.mSet(a, r, s.m.call(s.tween, i, s.mt), s);
  },
  sv = function (a) {
    for (var r = a._pt, i, s, o, d; r; ) {
      for (i = r._next, s = o; s && s.pr > r.pr; ) s = s._next;
      (r._prev = s ? s._prev : d) ? (r._prev._next = r) : (o = r),
        (r._next = s) ? (s._prev = r) : (d = r),
        (r = i);
    }
    a._pt = o;
  },
  Xn = (function () {
    function f(r, i, s, o, d, h, p, g, y) {
      (this.t = i),
        (this.s = o),
        (this.c = d),
        (this.p = s),
        (this.r = h || iv),
        (this.d = p || this),
        (this.set = g || lp),
        (this.pr = y || 0),
        (this._next = r),
        r && (r._prev = this);
    }
    var a = f.prototype;
    return (
      (a.modifier = function (i, s, o) {
        (this.mSet = this.mSet || this.set),
          (this.set = LS),
          (this.m = i),
          (this.mt = o),
          (this.tween = s);
      }),
      f
    );
  })();
Vn(
  Ih +
    "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",
  function (f) {
    return (Ph[f] = 1);
  }
);
da.TweenMax = da.TweenLite = Zt;
da.TimelineLite = da.TimelineMax = On;
Ct = new On({
  sortChildren: !1,
  defaults: rs,
  autoRemoveChildren: !0,
  id: "root",
  smoothChildTiming: !0,
});
fa.stringFilter = Wy;
var er = [],
  go = {},
  GS = [],
  w1 = 0,
  VS = 0,
  sh = function (a) {
    return (go[a] || GS).map(function (r) {
      return r();
    });
  },
  Nh = function () {
    var a = Date.now(),
      r = [];
    a - w1 > 2 &&
      (sh("matchMediaInit"),
      er.forEach(function (i) {
        var s = i.queries,
          o = i.conditions,
          d,
          h,
          p,
          g;
        for (h in s)
          (d = tl.matchMedia(s[h]).matches),
            d && (p = 1),
            d !== o[h] && ((o[h] = d), (g = 1));
        g && (i.revert(), p && r.push(i));
      }),
      sh("matchMediaRevert"),
      r.forEach(function (i) {
        return i.onMatch(i, function (s) {
          return i.add(null, s);
        });
      }),
      (w1 = a),
      sh("matchMedia"));
  },
  cv = (function () {
    function f(r, i) {
      (this.selector = i && Eh(i)),
        (this.data = []),
        (this._r = []),
        (this.isReverted = !1),
        (this.id = VS++),
        r && this.add(r);
    }
    var a = f.prototype;
    return (
      (a.add = function (i, s, o) {
        Dt(i) && ((o = s), (s = i), (i = Dt));
        var d = this,
          h = function () {
            var g = bt,
              y = d.selector,
              _;
            return (
              g && g !== d && g.data.push(d),
              o && (d.selector = Eh(o)),
              (bt = d),
              (_ = s.apply(d, arguments)),
              Dt(_) && d._r.push(_),
              (bt = g),
              (d.selector = y),
              (d.isReverted = !1),
              _
            );
          };
        return (
          (d.last = h),
          i === Dt
            ? h(d, function (p) {
                return d.add(null, p);
              })
            : i
            ? (d[i] = h)
            : h
        );
      }),
      (a.ignore = function (i) {
        var s = bt;
        (bt = null), i(this), (bt = s);
      }),
      (a.getTweens = function () {
        var i = [];
        return (
          this.data.forEach(function (s) {
            return s instanceof f
              ? i.push.apply(i, s.getTweens())
              : s instanceof Zt &&
                  !(s.parent && s.parent.data === "nested") &&
                  i.push(s);
          }),
          i
        );
      }),
      (a.clear = function () {
        this._r.length = this.data.length = 0;
      }),
      (a.kill = function (i, s) {
        var o = this;
        if (
          (i
            ? (function () {
                for (var h = o.getTweens(), p = o.data.length, g; p--; )
                  (g = o.data[p]),
                    g.data === "isFlip" &&
                      (g.revert(),
                      g.getChildren(!0, !0, !1).forEach(function (y) {
                        return h.splice(h.indexOf(y), 1);
                      }));
                for (
                  h
                    .map(function (y) {
                      return {
                        g:
                          y._dur ||
                          y._delay ||
                          (y._sat && !y._sat.vars.immediateRender)
                            ? y.globalTime(0)
                            : -1 / 0,
                        t: y,
                      };
                    })
                    .sort(function (y, _) {
                      return _.g - y.g || -1 / 0;
                    })
                    .forEach(function (y) {
                      return y.t.revert(i);
                    }),
                    p = o.data.length;
                  p--;

                )
                  (g = o.data[p]),
                    g instanceof On
                      ? g.data !== "nested" &&
                        (g.scrollTrigger && g.scrollTrigger.revert(), g.kill())
                      : !(g instanceof Zt) && g.revert && g.revert(i);
                o._r.forEach(function (y) {
                  return y(i, o);
                }),
                  (o.isReverted = !0);
              })()
            : this.data.forEach(function (h) {
                return h.kill && h.kill();
              }),
          this.clear(),
          s)
        )
          for (var d = er.length; d--; )
            er[d].id === this.id && er.splice(d, 1);
      }),
      (a.revert = function (i) {
        this.kill(i || {});
      }),
      f
    );
  })(),
  XS = (function () {
    function f(r) {
      (this.contexts = []), (this.scope = r), bt && bt.data.push(this);
    }
    var a = f.prototype;
    return (
      (a.add = function (i, s, o) {
        sl(i) || (i = { matches: i });
        var d = new cv(0, o || this.scope),
          h = (d.conditions = {}),
          p,
          g,
          y;
        bt && !d.selector && (d.selector = bt.selector),
          this.contexts.push(d),
          (s = d.add("onMatch", s)),
          (d.queries = i);
        for (g in i)
          g === "all"
            ? (y = 1)
            : ((p = tl.matchMedia(i[g])),
              p &&
                (er.indexOf(d) < 0 && er.push(d),
                (h[g] = p.matches) && (y = 1),
                p.addListener
                  ? p.addListener(Nh)
                  : p.addEventListener("change", Nh)));
        return (
          y &&
            s(d, function (_) {
              return d.add(null, _);
            }),
          this
        );
      }),
      (a.revert = function (i) {
        this.kill(i || {});
      }),
      (a.kill = function (i) {
        this.contexts.forEach(function (s) {
          return s.kill(i, !0);
        });
      }),
      f
    );
  })(),
  wo = {
    registerPlugin: function () {
      for (var a = arguments.length, r = new Array(a), i = 0; i < a; i++)
        r[i] = arguments[i];
      r.forEach(function (s) {
        return Ky(s);
      });
    },
    timeline: function (a) {
      return new On(a);
    },
    getTweensOf: function (a, r) {
      return Ct.getTweensOf(a, r);
    },
    getProperty: function (a, r, i, s) {
      an(a) && (a = ka(a)[0]);
      var o = $i(a || {}).get,
        d = i ? jy : Ry;
      return (
        i === "native" && (i = ""),
        a &&
          (r
            ? d(((ia[r] && ia[r].get) || o)(a, r, i, s))
            : function (h, p, g) {
                return d(((ia[h] && ia[h].get) || o)(a, h, p, g));
              })
      );
    },
    quickSetter: function (a, r, i) {
      if (((a = ka(a)), a.length > 1)) {
        var s = a.map(function (y) {
            return Zn.quickSetter(y, r, i);
          }),
          o = s.length;
        return function (y) {
          for (var _ = o; _--; ) s[_](y);
        };
      }
      a = a[0] || {};
      var d = ia[r],
        h = $i(a),
        p = (h.harness && (h.harness.aliases || {})[r]) || r,
        g = d
          ? function (y) {
              var _ = new d();
              (Pr._pt = 0),
                _.init(a, i ? y + i : y, Pr, 0, [a]),
                _.render(1, _),
                Pr._pt && rp(1, Pr);
            }
          : h.set(a, p);
      return d
        ? g
        : function (y) {
            return g(a, p, i ? y + i : y, h, 1);
          };
    },
    quickTo: function (a, r, i) {
      var s,
        o = Zn.to(
          a,
          ha(
            ((s = {}), (s[r] = "+=0.1"), (s.paused = !0), (s.stagger = 0), s),
            i || {}
          )
        ),
        d = function (p, g, y) {
          return o.resetTo(r, p, g, y);
        };
      return (d.tween = o), d;
    },
    isTweening: function (a) {
      return Ct.getTweensOf(a, !0).length > 0;
    },
    defaults: function (a) {
      return a && a.ease && (a.ease = Ii(a.ease, rs.ease)), T1(rs, a || {});
    },
    config: function (a) {
      return T1(fa, a || {});
    },
    registerEffect: function (a) {
      var r = a.name,
        i = a.effect,
        s = a.plugins,
        o = a.defaults,
        d = a.extendTimeline;
      (s || "").split(",").forEach(function (h) {
        return (
          h && !ia[h] && !da[h] && wc(r + " effect requires " + h + " plugin.")
        );
      }),
        (ah[r] = function (h, p, g) {
          return i(ka(h), ha(p || {}, o), g);
        }),
        d &&
          (On.prototype[r] = function (h, p, g) {
            return this.add(ah[r](h, sl(p) ? p : (g = p) && {}, this), g);
          });
    },
    registerEase: function (a, r) {
      Xe[a] = Ii(r);
    },
    parseEase: function (a, r) {
      return arguments.length ? Ii(a, r) : Xe;
    },
    getById: function (a) {
      return Ct.getById(a);
    },
    exportRoot: function (a, r) {
      a === void 0 && (a = {});
      var i = new On(a),
        s,
        o;
      for (
        i.smoothChildTiming = Gn(a.smoothChildTiming),
          Ct.remove(i),
          i._dp = 0,
          i._time = i._tTime = Ct._time,
          s = Ct._first;
        s;

      )
        (o = s._next),
          (r ||
            !(
              !s._dur &&
              s instanceof Zt &&
              s.vars.onComplete === s._targets[0]
            )) &&
            al(i, s, s._start - s._delay),
          (s = o);
      return al(Ct, i, 0), i;
    },
    context: function (a, r) {
      return a ? new cv(a, r) : bt;
    },
    matchMedia: function (a) {
      return new XS(a);
    },
    matchMediaRefresh: function () {
      return (
        er.forEach(function (a) {
          var r = a.conditions,
            i,
            s;
          for (s in r) r[s] && ((r[s] = !1), (i = 1));
          i && a.revert();
        }) || Nh()
      );
    },
    addEventListener: function (a, r) {
      var i = go[a] || (go[a] = []);
      ~i.indexOf(r) || i.push(r);
    },
    removeEventListener: function (a, r) {
      var i = go[a],
        s = i && i.indexOf(r);
      s >= 0 && i.splice(s, 1);
    },
    utils: {
      wrap: SS,
      wrapYoyo: TS,
      distribute: Ly,
      random: Vy,
      snap: Gy,
      normalize: xS,
      getUnit: _n,
      clamp: yS,
      splitColor: Jy,
      toArray: ka,
      selector: Eh,
      mapRange: Qy,
      pipe: _S,
      unitize: bS,
      interpolate: AS,
      shuffle: qy,
    },
    install: wy,
    effects: ah,
    ticker: sa,
    updateRoot: On.updateRoot,
    plugins: ia,
    globalTimeline: Ct,
    core: {
      PropTween: Xn,
      globals: My,
      Tween: Zt,
      Timeline: On,
      Animation: Dc,
      getCache: $i,
      _removeLinkedListItem: ko,
      reverting: function () {
        return fn;
      },
      context: function (a) {
        return a && bt && (bt.data.push(a), (a._ctx = bt)), bt;
      },
      suppressOverwrites: function (a) {
        return (Kh = a);
      },
    },
  };
Vn("to,from,fromTo,delayedCall,set,killTweensOf", function (f) {
  return (wo[f] = Zt[f]);
});
sa.add(On.updateRoot);
Pr = wo.to({}, { duration: 0 });
var QS = function (a, r) {
    for (var i = a._pt; i && i.p !== r && i.op !== r && i.fp !== r; )
      i = i._next;
    return i;
  },
  ZS = function (a, r) {
    var i = a._targets,
      s,
      o,
      d;
    for (s in r)
      for (o = i.length; o--; )
        (d = a._ptLookup[o][s]),
          d &&
            (d = d.d) &&
            (d._pt && (d = QS(d, s)),
            d && d.modifier && d.modifier(r[s], a, i[o], s));
  },
  ch = function (a, r) {
    return {
      name: a,
      headless: 1,
      rawVars: 1,
      init: function (s, o, d) {
        d._onInit = function (h) {
          var p, g;
          if (
            (an(o) &&
              ((p = {}),
              Vn(o, function (y) {
                return (p[y] = 1);
              }),
              (o = p)),
            r)
          ) {
            p = {};
            for (g in o) p[g] = r(o[g]);
            o = p;
          }
          ZS(h, o);
        };
      },
    };
  },
  Zn =
    wo.registerPlugin(
      {
        name: "attr",
        init: function (a, r, i, s, o) {
          var d, h, p;
          this.tween = i;
          for (d in r)
            (p = a.getAttribute(d) || ""),
              (h = this.add(
                a,
                "setAttribute",
                (p || 0) + "",
                r[d],
                s,
                o,
                0,
                0,
                d
              )),
              (h.op = d),
              (h.b = p),
              this._props.push(d);
        },
        render: function (a, r) {
          for (var i = r._pt; i; )
            fn ? i.set(i.t, i.p, i.b, i) : i.r(a, i.d), (i = i._next);
        },
      },
      {
        name: "endArray",
        headless: 1,
        init: function (a, r) {
          for (var i = r.length; i--; )
            this.add(a, i, a[i] || 0, r[i], 0, 0, 0, 0, 0, 1);
        },
      },
      ch("roundProps", wh),
      ch("modifiers"),
      ch("snap", Gy)
    ) || wo;
Zt.version = On.version = Zn.version = "3.14.2";
Ey = 1;
Fh() && os();
Xe.Power0;
Xe.Power1;
Xe.Power2;
Xe.Power3;
Xe.Power4;
Xe.Linear;
Xe.Quad;
Xe.Cubic;
Xe.Quart;
Xe.Quint;
Xe.Strong;
Xe.Elastic;
Xe.Back;
Xe.SteppedEase;
Xe.Bounce;
Xe.Sine;
Xe.Expo;
Xe.Circ;
var M1,
  di,
  ts,
  sp,
  Fi,
  N1,
  cp,
  KS = function () {
    return typeof window < "u";
  },
  Hl = {},
  Zi = 180 / Math.PI,
  ns = Math.PI / 180,
  Zr = Math.atan2,
  O1 = 1e8,
  up = /([A-Z])/g,
  JS = /(left|right|width|margin|padding|x)/i,
  FS = /[\s,\(]\S/,
  ll = {
    autoAlpha: "opacity,visibility",
    scale: "scaleX,scaleY",
    alpha: "opacity",
  },
  Oh = function (a, r) {
    return r.set(r.t, r.p, Math.round((r.s + r.c * a) * 1e4) / 1e4 + r.u, r);
  },
  WS = function (a, r) {
    return r.set(
      r.t,
      r.p,
      a === 1 ? r.e : Math.round((r.s + r.c * a) * 1e4) / 1e4 + r.u,
      r
    );
  },
  $S = function (a, r) {
    return r.set(
      r.t,
      r.p,
      a ? Math.round((r.s + r.c * a) * 1e4) / 1e4 + r.u : r.b,
      r
    );
  },
  PS = function (a, r) {
    return r.set(
      r.t,
      r.p,
      a === 1 ? r.e : a ? Math.round((r.s + r.c * a) * 1e4) / 1e4 + r.u : r.b,
      r
    );
  },
  IS = function (a, r) {
    var i = r.s + r.c * a;
    r.set(r.t, r.p, ~~(i + (i < 0 ? -0.5 : 0.5)) + r.u, r);
  },
  uv = function (a, r) {
    return r.set(r.t, r.p, a ? r.e : r.b, r);
  },
  ov = function (a, r) {
    return r.set(r.t, r.p, a !== 1 ? r.b : r.e, r);
  },
  e3 = function (a, r, i) {
    return (a.style[r] = i);
  },
  t3 = function (a, r, i) {
    return a.style.setProperty(r, i);
  },
  n3 = function (a, r, i) {
    return (a._gsap[r] = i);
  },
  a3 = function (a, r, i) {
    return (a._gsap.scaleX = a._gsap.scaleY = i);
  },
  l3 = function (a, r, i, s, o) {
    var d = a._gsap;
    (d.scaleX = d.scaleY = i), d.renderTransform(o, d);
  },
  i3 = function (a, r, i, s, o) {
    var d = a._gsap;
    (d[r] = i), d.renderTransform(o, d);
  },
  Et = "transform",
  Qn = Et + "Origin",
  r3 = function f(a, r) {
    var i = this,
      s = this.target,
      o = s.style,
      d = s._gsap;
    if (a in Hl && o) {
      if (((this.tfm = this.tfm || {}), a !== "transform"))
        (a = ll[a] || a),
          ~a.indexOf(",")
            ? a.split(",").forEach(function (h) {
                return (i.tfm[h] = Dl(s, h));
              })
            : (this.tfm[a] = d.x ? d[a] : Dl(s, a)),
          a === Qn && (this.tfm.zOrigin = d.zOrigin);
      else
        return ll.transform.split(",").forEach(function (h) {
          return f.call(i, h, r);
        });
      if (this.props.indexOf(Et) >= 0) return;
      d.svg &&
        ((this.svgo = s.getAttribute("data-svg-origin")),
        this.props.push(Qn, r, "")),
        (a = Et);
    }
    (o || r) && this.props.push(a, r, o[a]);
  },
  fv = function (a) {
    a.translate &&
      (a.removeProperty("translate"),
      a.removeProperty("scale"),
      a.removeProperty("rotate"));
  },
  s3 = function () {
    var a = this.props,
      r = this.target,
      i = r.style,
      s = r._gsap,
      o,
      d;
    for (o = 0; o < a.length; o += 3)
      a[o + 1]
        ? a[o + 1] === 2
          ? r[a[o]](a[o + 2])
          : (r[a[o]] = a[o + 2])
        : a[o + 2]
        ? (i[a[o]] = a[o + 2])
        : i.removeProperty(
            a[o].substr(0, 2) === "--"
              ? a[o]
              : a[o].replace(up, "-$1").toLowerCase()
          );
    if (this.tfm) {
      for (d in this.tfm) s[d] = this.tfm[d];
      s.svg &&
        (s.renderTransform(),
        r.setAttribute("data-svg-origin", this.svgo || "")),
        (o = cp()),
        (!o || !o.isStart) &&
          !i[Et] &&
          (fv(i),
          s.zOrigin &&
            i[Qn] &&
            ((i[Qn] += " " + s.zOrigin + "px"),
            (s.zOrigin = 0),
            s.renderTransform()),
          (s.uncache = 1));
    }
  },
  dv = function (a, r) {
    var i = { target: a, props: [], revert: s3, save: r3 };
    return (
      a._gsap || Zn.core.getCache(a),
      r &&
        a.style &&
        a.nodeType &&
        r.split(",").forEach(function (s) {
          return i.save(s);
        }),
      i
    );
  },
  hv,
  Dh = function (a, r) {
    var i = di.createElementNS
      ? di.createElementNS(
          (r || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"),
          a
        )
      : di.createElement(a);
    return i && i.style ? i : di.createElement(a);
  },
  oa = function f(a, r, i) {
    var s = getComputedStyle(a);
    return (
      s[r] ||
      s.getPropertyValue(r.replace(up, "-$1").toLowerCase()) ||
      s.getPropertyValue(r) ||
      (!i && f(a, fs(r) || r, 1)) ||
      ""
    );
  },
  D1 = "O,Moz,ms,Ms,Webkit".split(","),
  fs = function (a, r, i) {
    var s = r || Fi,
      o = s.style,
      d = 5;
    if (a in o && !i) return a;
    for (
      a = a.charAt(0).toUpperCase() + a.substr(1);
      d-- && !(D1[d] + a in o);

    );
    return d < 0 ? null : (d === 3 ? "ms" : d >= 0 ? D1[d] : "") + a;
  },
  Rh = function () {
    KS() &&
      window.document &&
      ((M1 = window),
      (di = M1.document),
      (ts = di.documentElement),
      (Fi = Dh("div") || { style: {} }),
      Dh("div"),
      (Et = fs(Et)),
      (Qn = Et + "Origin"),
      (Fi.style.cssText =
        "border-width:0;line-height:0;position:absolute;padding:0"),
      (hv = !!fs("perspective")),
      (cp = Zn.core.reverting),
      (sp = 1));
  },
  R1 = function (a) {
    var r = a.ownerSVGElement,
      i = Dh(
        "svg",
        (r && r.getAttribute("xmlns")) || "http://www.w3.org/2000/svg"
      ),
      s = a.cloneNode(!0),
      o;
    (s.style.display = "block"), i.appendChild(s), ts.appendChild(i);
    try {
      o = s.getBBox();
    } catch {}
    return i.removeChild(s), ts.removeChild(i), o;
  },
  j1 = function (a, r) {
    for (var i = r.length; i--; )
      if (a.hasAttribute(r[i])) return a.getAttribute(r[i]);
  },
  pv = function (a) {
    var r, i;
    try {
      r = a.getBBox();
    } catch {
      (r = R1(a)), (i = 1);
    }
    return (
      (r && (r.width || r.height)) || i || (r = R1(a)),
      r && !r.width && !r.x && !r.y
        ? {
            x: +j1(a, ["x", "cx", "x1"]) || 0,
            y: +j1(a, ["y", "cy", "y1"]) || 0,
            width: 0,
            height: 0,
          }
        : r
    );
  },
  mv = function (a) {
    return !!(a.getCTM && (!a.parentNode || a.ownerSVGElement) && pv(a));
  },
  xi = function (a, r) {
    if (r) {
      var i = a.style,
        s;
      r in Hl && r !== Qn && (r = Et),
        i.removeProperty
          ? ((s = r.substr(0, 2)),
            (s === "ms" || r.substr(0, 6) === "webkit") && (r = "-" + r),
            i.removeProperty(
              s === "--" ? r : r.replace(up, "-$1").toLowerCase()
            ))
          : i.removeAttribute(r);
    }
  },
  hi = function (a, r, i, s, o, d) {
    var h = new Xn(a._pt, r, i, 0, 1, d ? ov : uv);
    return (a._pt = h), (h.b = s), (h.e = o), a._props.push(i), h;
  },
  k1 = { deg: 1, rad: 1, turn: 1 },
  c3 = { grid: 1, flex: 1 },
  Si = function f(a, r, i, s) {
    var o = parseFloat(i) || 0,
      d = (i + "").trim().substr((o + "").length) || "px",
      h = Fi.style,
      p = JS.test(r),
      g = a.tagName.toLowerCase() === "svg",
      y = (g ? "client" : "offset") + (p ? "Width" : "Height"),
      _ = 100,
      T = s === "px",
      b = s === "%",
      E,
      S,
      N,
      q;
    if (s === d || !o || k1[s] || k1[d]) return o;
    if (
      (d !== "px" && !T && (o = f(a, r, i, "px")),
      (q = a.getCTM && mv(a)),
      (b || d === "%") && (Hl[r] || ~r.indexOf("adius")))
    )
      return (
        (E = q ? a.getBBox()[p ? "width" : "height"] : a[y]),
        Ht(b ? (o / E) * _ : (o / 100) * E)
      );
    if (
      ((h[p ? "width" : "height"] = _ + (T ? d : s)),
      (S =
        (s !== "rem" && ~r.indexOf("adius")) ||
        (s === "em" && a.appendChild && !g)
          ? a
          : a.parentNode),
      q && (S = (a.ownerSVGElement || {}).parentNode),
      (!S || S === di || !S.appendChild) && (S = di.body),
      (N = S._gsap),
      N && b && N.width && p && N.time === sa.time && !N.uncache)
    )
      return Ht((o / N.width) * _);
    if (b && (r === "height" || r === "width")) {
      var X = a.style[r];
      (a.style[r] = _ + s), (E = a[y]), X ? (a.style[r] = X) : xi(a, r);
    } else
      (b || d === "%") &&
        !c3[oa(S, "display")] &&
        (h.position = oa(a, "position")),
        S === a && (h.position = "static"),
        S.appendChild(Fi),
        (E = Fi[y]),
        S.removeChild(Fi),
        (h.position = "absolute");
    return (
      p && b && ((N = $i(S)), (N.time = sa.time), (N.width = S[y])),
      Ht(T ? (E * o) / _ : E && o ? (_ / E) * o : 0)
    );
  },
  Dl = function (a, r, i, s) {
    var o;
    return (
      sp || Rh(),
      r in ll &&
        r !== "transform" &&
        ((r = ll[r]), ~r.indexOf(",") && (r = r.split(",")[0])),
      Hl[r] && r !== "transform"
        ? ((o = jc(a, s)),
          (o =
            r !== "transformOrigin"
              ? o[r]
              : o.svg
              ? o.origin
              : No(oa(a, Qn)) + " " + o.zOrigin + "px"))
        : ((o = a.style[r]),
          (!o || o === "auto" || s || ~(o + "").indexOf("calc(")) &&
            (o =
              (Mo[r] && Mo[r](a, r, i)) ||
              oa(a, r) ||
              Oy(a, r) ||
              (r === "opacity" ? 1 : 0))),
      i && !~(o + "").trim().indexOf(" ") ? Si(a, r, o, i) + i : o
    );
  },
  u3 = function (a, r, i, s) {
    if (!i || i === "none") {
      var o = fs(r, a, 1),
        d = o && oa(a, o, 1);
      d && d !== i
        ? ((r = o), (i = d))
        : r === "borderColor" && (i = oa(a, "borderTopColor"));
    }
    var h = new Xn(this._pt, a.style, r, 0, 1, rv),
      p = 0,
      g = 0,
      y,
      _,
      T,
      b,
      E,
      S,
      N,
      q,
      X,
      K,
      U,
      Q;
    if (
      ((h.b = i),
      (h.e = s),
      (i += ""),
      (s += ""),
      s.substring(0, 6) === "var(--" &&
        (s = oa(a, s.substring(4, s.indexOf(")")))),
      s === "auto" &&
        ((S = a.style[r]),
        (a.style[r] = s),
        (s = oa(a, r) || s),
        S ? (a.style[r] = S) : xi(a, r)),
      (y = [i, s]),
      Wy(y),
      (i = y[0]),
      (s = y[1]),
      (T = i.match($r) || []),
      (Q = s.match($r) || []),
      Q.length)
    ) {
      for (; (_ = $r.exec(s)); )
        (N = _[0]),
          (X = s.substring(p, _.index)),
          E
            ? (E = (E + 1) % 5)
            : (X.substr(-5) === "rgba(" || X.substr(-5) === "hsla(") && (E = 1),
          N !== (S = T[g++] || "") &&
            ((b = parseFloat(S) || 0),
            (U = S.substr((b + "").length)),
            N.charAt(1) === "=" && (N = es(b, N) + U),
            (q = parseFloat(N)),
            (K = N.substr((q + "").length)),
            (p = $r.lastIndex - K.length),
            K ||
              ((K = K || fa.units[r] || U),
              p === s.length && ((s += K), (h.e += K))),
            U !== K && (b = Si(a, r, S, K) || 0),
            (h._pt = {
              _next: h._pt,
              p: X || g === 1 ? X : ",",
              s: b,
              c: q - b,
              m: (E && E < 4) || r === "zIndex" ? Math.round : 0,
            }));
      h.c = p < s.length ? s.substring(p, s.length) : "";
    } else h.r = r === "display" && s === "none" ? ov : uv;
    return Cy.test(s) && (h.e = 0), (this._pt = h), h;
  },
  U1 = { top: "0%", bottom: "100%", left: "0%", right: "100%", center: "50%" },
  o3 = function (a) {
    var r = a.split(" "),
      i = r[0],
      s = r[1] || "50%";
    return (
      (i === "top" || i === "bottom" || s === "left" || s === "right") &&
        ((a = i), (i = s), (s = a)),
      (r[0] = U1[i] || i),
      (r[1] = U1[s] || s),
      r.join(" ")
    );
  },
  f3 = function (a, r) {
    if (r.tween && r.tween._time === r.tween._dur) {
      var i = r.t,
        s = i.style,
        o = r.u,
        d = i._gsap,
        h,
        p,
        g;
      if (o === "all" || o === !0) (s.cssText = ""), (p = 1);
      else
        for (o = o.split(","), g = o.length; --g > -1; )
          (h = o[g]),
            Hl[h] && ((p = 1), (h = h === "transformOrigin" ? Qn : Et)),
            xi(i, h);
      p &&
        (xi(i, Et),
        d &&
          (d.svg && i.removeAttribute("transform"),
          (s.scale = s.rotate = s.translate = "none"),
          jc(i, 1),
          (d.uncache = 1),
          fv(s)));
    }
  },
  Mo = {
    clearProps: function (a, r, i, s, o) {
      if (o.data !== "isFromStart") {
        var d = (a._pt = new Xn(a._pt, r, i, 0, 0, f3));
        return (d.u = s), (d.pr = -10), (d.tween = o), a._props.push(i), 1;
      }
    },
  },
  Rc = [1, 0, 0, 1, 0, 0],
  gv = {},
  yv = function (a) {
    return a === "matrix(1, 0, 0, 1, 0, 0)" || a === "none" || !a;
  },
  H1 = function (a) {
    var r = oa(a, Et);
    return yv(r) ? Rc : r.substr(7).match(zy).map(Ht);
  },
  op = function (a, r) {
    var i = a._gsap || $i(a),
      s = a.style,
      o = H1(a),
      d,
      h,
      p,
      g;
    return i.svg && a.getAttribute("transform")
      ? ((p = a.transform.baseVal.consolidate().matrix),
        (o = [p.a, p.b, p.c, p.d, p.e, p.f]),
        o.join(",") === "1,0,0,1,0,0" ? Rc : o)
      : (o === Rc &&
          !a.offsetParent &&
          a !== ts &&
          !i.svg &&
          ((p = s.display),
          (s.display = "block"),
          (d = a.parentNode),
          (!d || (!a.offsetParent && !a.getBoundingClientRect().width)) &&
            ((g = 1), (h = a.nextElementSibling), ts.appendChild(a)),
          (o = H1(a)),
          p ? (s.display = p) : xi(a, "display"),
          g &&
            (h
              ? d.insertBefore(a, h)
              : d
              ? d.appendChild(a)
              : ts.removeChild(a))),
        r && o.length > 6 ? [o[0], o[1], o[4], o[5], o[12], o[13]] : o);
  },
  jh = function (a, r, i, s, o, d) {
    var h = a._gsap,
      p = o || op(a, !0),
      g = h.xOrigin || 0,
      y = h.yOrigin || 0,
      _ = h.xOffset || 0,
      T = h.yOffset || 0,
      b = p[0],
      E = p[1],
      S = p[2],
      N = p[3],
      q = p[4],
      X = p[5],
      K = r.split(" "),
      U = parseFloat(K[0]) || 0,
      Q = parseFloat(K[1]) || 0,
      W,
      R,
      H,
      J;
    i
      ? p !== Rc &&
        (R = b * N - E * S) &&
        ((H = U * (N / R) + Q * (-S / R) + (S * X - N * q) / R),
        (J = U * (-E / R) + Q * (b / R) - (b * X - E * q) / R),
        (U = H),
        (Q = J))
      : ((W = pv(a)),
        (U = W.x + (~K[0].indexOf("%") ? (U / 100) * W.width : U)),
        (Q = W.y + (~(K[1] || K[0]).indexOf("%") ? (Q / 100) * W.height : Q))),
      s || (s !== !1 && h.smooth)
        ? ((q = U - g),
          (X = Q - y),
          (h.xOffset = _ + (q * b + X * S) - q),
          (h.yOffset = T + (q * E + X * N) - X))
        : (h.xOffset = h.yOffset = 0),
      (h.xOrigin = U),
      (h.yOrigin = Q),
      (h.smooth = !!s),
      (h.origin = r),
      (h.originIsAbsolute = !!i),
      (a.style[Qn] = "0px 0px"),
      d &&
        (hi(d, h, "xOrigin", g, U),
        hi(d, h, "yOrigin", y, Q),
        hi(d, h, "xOffset", _, h.xOffset),
        hi(d, h, "yOffset", T, h.yOffset)),
      a.setAttribute("data-svg-origin", U + " " + Q);
  },
  jc = function (a, r) {
    var i = a._gsap || new ev(a);
    if ("x" in i && !r && !i.uncache) return i;
    var s = a.style,
      o = i.scaleX < 0,
      d = "px",
      h = "deg",
      p = getComputedStyle(a),
      g = oa(a, Qn) || "0",
      y,
      _,
      T,
      b,
      E,
      S,
      N,
      q,
      X,
      K,
      U,
      Q,
      W,
      R,
      H,
      J,
      I,
      oe,
      te,
      be,
      ve,
      ye,
      O,
      G,
      V,
      fe,
      w,
      z,
      L,
      P,
      ee,
      le;
    return (
      (y = _ = T = S = N = q = X = K = U = 0),
      (b = E = 1),
      (i.svg = !!(a.getCTM && mv(a))),
      p.translate &&
        ((p.translate !== "none" ||
          p.scale !== "none" ||
          p.rotate !== "none") &&
          (s[Et] =
            (p.translate !== "none"
              ? "translate3d(" +
                (p.translate + " 0 0").split(" ").slice(0, 3).join(", ") +
                ") "
              : "") +
            (p.rotate !== "none" ? "rotate(" + p.rotate + ") " : "") +
            (p.scale !== "none"
              ? "scale(" + p.scale.split(" ").join(",") + ") "
              : "") +
            (p[Et] !== "none" ? p[Et] : "")),
        (s.scale = s.rotate = s.translate = "none")),
      (R = op(a, i.svg)),
      i.svg &&
        (i.uncache
          ? ((V = a.getBBox()),
            (g = i.xOrigin - V.x + "px " + (i.yOrigin - V.y) + "px"),
            (G = ""))
          : (G = !r && a.getAttribute("data-svg-origin")),
        jh(a, G || g, !!G || i.originIsAbsolute, i.smooth !== !1, R)),
      (Q = i.xOrigin || 0),
      (W = i.yOrigin || 0),
      R !== Rc &&
        ((oe = R[0]),
        (te = R[1]),
        (be = R[2]),
        (ve = R[3]),
        (y = ye = R[4]),
        (_ = O = R[5]),
        R.length === 6
          ? ((b = Math.sqrt(oe * oe + te * te)),
            (E = Math.sqrt(ve * ve + be * be)),
            (S = oe || te ? Zr(te, oe) * Zi : 0),
            (X = be || ve ? Zr(be, ve) * Zi + S : 0),
            X && (E *= Math.abs(Math.cos(X * ns))),
            i.svg &&
              ((y -= Q - (Q * oe + W * be)), (_ -= W - (Q * te + W * ve))))
          : ((le = R[6]),
            (P = R[7]),
            (w = R[8]),
            (z = R[9]),
            (L = R[10]),
            (ee = R[11]),
            (y = R[12]),
            (_ = R[13]),
            (T = R[14]),
            (H = Zr(le, L)),
            (N = H * Zi),
            H &&
              ((J = Math.cos(-H)),
              (I = Math.sin(-H)),
              (G = ye * J + w * I),
              (V = O * J + z * I),
              (fe = le * J + L * I),
              (w = ye * -I + w * J),
              (z = O * -I + z * J),
              (L = le * -I + L * J),
              (ee = P * -I + ee * J),
              (ye = G),
              (O = V),
              (le = fe)),
            (H = Zr(-be, L)),
            (q = H * Zi),
            H &&
              ((J = Math.cos(-H)),
              (I = Math.sin(-H)),
              (G = oe * J - w * I),
              (V = te * J - z * I),
              (fe = be * J - L * I),
              (ee = ve * I + ee * J),
              (oe = G),
              (te = V),
              (be = fe)),
            (H = Zr(te, oe)),
            (S = H * Zi),
            H &&
              ((J = Math.cos(H)),
              (I = Math.sin(H)),
              (G = oe * J + te * I),
              (V = ye * J + O * I),
              (te = te * J - oe * I),
              (O = O * J - ye * I),
              (oe = G),
              (ye = V)),
            N &&
              Math.abs(N) + Math.abs(S) > 359.9 &&
              ((N = S = 0), (q = 180 - q)),
            (b = Ht(Math.sqrt(oe * oe + te * te + be * be))),
            (E = Ht(Math.sqrt(O * O + le * le))),
            (H = Zr(ye, O)),
            (X = Math.abs(H) > 2e-4 ? H * Zi : 0),
            (U = ee ? 1 / (ee < 0 ? -ee : ee) : 0)),
        i.svg &&
          ((G = a.getAttribute("transform")),
          (i.forceCSS = a.setAttribute("transform", "") || !yv(oa(a, Et))),
          G && a.setAttribute("transform", G))),
      Math.abs(X) > 90 &&
        Math.abs(X) < 270 &&
        (o
          ? ((b *= -1), (X += S <= 0 ? 180 : -180), (S += S <= 0 ? 180 : -180))
          : ((E *= -1), (X += X <= 0 ? 180 : -180))),
      (r = r || i.uncache),
      (i.x =
        y -
        ((i.xPercent =
          y &&
          ((!r && i.xPercent) ||
            (Math.round(a.offsetWidth / 2) === Math.round(-y) ? -50 : 0)))
          ? (a.offsetWidth * i.xPercent) / 100
          : 0) +
        d),
      (i.y =
        _ -
        ((i.yPercent =
          _ &&
          ((!r && i.yPercent) ||
            (Math.round(a.offsetHeight / 2) === Math.round(-_) ? -50 : 0)))
          ? (a.offsetHeight * i.yPercent) / 100
          : 0) +
        d),
      (i.z = T + d),
      (i.scaleX = Ht(b)),
      (i.scaleY = Ht(E)),
      (i.rotation = Ht(S) + h),
      (i.rotationX = Ht(N) + h),
      (i.rotationY = Ht(q) + h),
      (i.skewX = X + h),
      (i.skewY = K + h),
      (i.transformPerspective = U + d),
      (i.zOrigin = parseFloat(g.split(" ")[2]) || (!r && i.zOrigin) || 0) &&
        (s[Qn] = No(g)),
      (i.xOffset = i.yOffset = 0),
      (i.force3D = fa.force3D),
      (i.renderTransform = i.svg ? h3 : hv ? vv : d3),
      (i.uncache = 0),
      i
    );
  },
  No = function (a) {
    return (a = a.split(" "))[0] + " " + a[1];
  },
  uh = function (a, r, i) {
    var s = _n(r);
    return Ht(parseFloat(r) + parseFloat(Si(a, "x", i + "px", s))) + s;
  },
  d3 = function (a, r) {
    (r.z = "0px"),
      (r.rotationY = r.rotationX = "0deg"),
      (r.force3D = 0),
      vv(a, r);
  },
  Xi = "0deg",
  ic = "0px",
  Qi = ") ",
  vv = function (a, r) {
    var i = r || this,
      s = i.xPercent,
      o = i.yPercent,
      d = i.x,
      h = i.y,
      p = i.z,
      g = i.rotation,
      y = i.rotationY,
      _ = i.rotationX,
      T = i.skewX,
      b = i.skewY,
      E = i.scaleX,
      S = i.scaleY,
      N = i.transformPerspective,
      q = i.force3D,
      X = i.target,
      K = i.zOrigin,
      U = "",
      Q = (q === "auto" && a && a !== 1) || q === !0;
    if (K && (_ !== Xi || y !== Xi)) {
      var W = parseFloat(y) * ns,
        R = Math.sin(W),
        H = Math.cos(W),
        J;
      (W = parseFloat(_) * ns),
        (J = Math.cos(W)),
        (d = uh(X, d, R * J * -K)),
        (h = uh(X, h, -Math.sin(W) * -K)),
        (p = uh(X, p, H * J * -K + K));
    }
    N !== ic && (U += "perspective(" + N + Qi),
      (s || o) && (U += "translate(" + s + "%, " + o + "%) "),
      (Q || d !== ic || h !== ic || p !== ic) &&
        (U +=
          p !== ic || Q
            ? "translate3d(" + d + ", " + h + ", " + p + ") "
            : "translate(" + d + ", " + h + Qi),
      g !== Xi && (U += "rotate(" + g + Qi),
      y !== Xi && (U += "rotateY(" + y + Qi),
      _ !== Xi && (U += "rotateX(" + _ + Qi),
      (T !== Xi || b !== Xi) && (U += "skew(" + T + ", " + b + Qi),
      (E !== 1 || S !== 1) && (U += "scale(" + E + ", " + S + Qi),
      (X.style[Et] = U || "translate(0, 0)");
  },
  h3 = function (a, r) {
    var i = r || this,
      s = i.xPercent,
      o = i.yPercent,
      d = i.x,
      h = i.y,
      p = i.rotation,
      g = i.skewX,
      y = i.skewY,
      _ = i.scaleX,
      T = i.scaleY,
      b = i.target,
      E = i.xOrigin,
      S = i.yOrigin,
      N = i.xOffset,
      q = i.yOffset,
      X = i.forceCSS,
      K = parseFloat(d),
      U = parseFloat(h),
      Q,
      W,
      R,
      H,
      J;
    (p = parseFloat(p)),
      (g = parseFloat(g)),
      (y = parseFloat(y)),
      y && ((y = parseFloat(y)), (g += y), (p += y)),
      p || g
        ? ((p *= ns),
          (g *= ns),
          (Q = Math.cos(p) * _),
          (W = Math.sin(p) * _),
          (R = Math.sin(p - g) * -T),
          (H = Math.cos(p - g) * T),
          g &&
            ((y *= ns),
            (J = Math.tan(g - y)),
            (J = Math.sqrt(1 + J * J)),
            (R *= J),
            (H *= J),
            y &&
              ((J = Math.tan(y)),
              (J = Math.sqrt(1 + J * J)),
              (Q *= J),
              (W *= J))),
          (Q = Ht(Q)),
          (W = Ht(W)),
          (R = Ht(R)),
          (H = Ht(H)))
        : ((Q = _), (H = T), (W = R = 0)),
      ((K && !~(d + "").indexOf("px")) || (U && !~(h + "").indexOf("px"))) &&
        ((K = Si(b, "x", d, "px")), (U = Si(b, "y", h, "px"))),
      (E || S || N || q) &&
        ((K = Ht(K + E - (E * Q + S * R) + N)),
        (U = Ht(U + S - (E * W + S * H) + q))),
      (s || o) &&
        ((J = b.getBBox()),
        (K = Ht(K + (s / 100) * J.width)),
        (U = Ht(U + (o / 100) * J.height))),
      (J =
        "matrix(" + Q + "," + W + "," + R + "," + H + "," + K + "," + U + ")"),
      b.setAttribute("transform", J),
      X && (b.style[Et] = J);
  },
  p3 = function (a, r, i, s, o) {
    var d = 360,
      h = an(o),
      p = parseFloat(o) * (h && ~o.indexOf("rad") ? Zi : 1),
      g = p - s,
      y = s + g + "deg",
      _,
      T;
    return (
      h &&
        ((_ = o.split("_")[1]),
        _ === "short" && ((g %= d), g !== g % (d / 2) && (g += g < 0 ? d : -d)),
        _ === "cw" && g < 0
          ? (g = ((g + d * O1) % d) - ~~(g / d) * d)
          : _ === "ccw" && g > 0 && (g = ((g - d * O1) % d) - ~~(g / d) * d)),
      (a._pt = T = new Xn(a._pt, r, i, s, g, WS)),
      (T.e = y),
      (T.u = "deg"),
      a._props.push(i),
      T
    );
  },
  B1 = function (a, r) {
    for (var i in r) a[i] = r[i];
    return a;
  },
  m3 = function (a, r, i) {
    var s = B1({}, i._gsap),
      o = "perspective,force3D,transformOrigin,svgOrigin",
      d = i.style,
      h,
      p,
      g,
      y,
      _,
      T,
      b,
      E;
    s.svg
      ? ((g = i.getAttribute("transform")),
        i.setAttribute("transform", ""),
        (d[Et] = r),
        (h = jc(i, 1)),
        xi(i, Et),
        i.setAttribute("transform", g))
      : ((g = getComputedStyle(i)[Et]),
        (d[Et] = r),
        (h = jc(i, 1)),
        (d[Et] = g));
    for (p in Hl)
      (g = s[p]),
        (y = h[p]),
        g !== y &&
          o.indexOf(p) < 0 &&
          ((b = _n(g)),
          (E = _n(y)),
          (_ = b !== E ? Si(i, p, g, E) : parseFloat(g)),
          (T = parseFloat(y)),
          (a._pt = new Xn(a._pt, h, p, _, T - _, Oh)),
          (a._pt.u = E || 0),
          a._props.push(p));
    B1(h, s);
  };
Vn("padding,margin,Width,Radius", function (f, a) {
  var r = "Top",
    i = "Right",
    s = "Bottom",
    o = "Left",
    d = (a < 3 ? [r, i, s, o] : [r + o, r + i, s + i, s + o]).map(function (h) {
      return a < 2 ? f + h : "border" + h + f;
    });
  Mo[a > 1 ? "border" + f : f] = function (h, p, g, y, _) {
    var T, b;
    if (arguments.length < 4)
      return (
        (T = d.map(function (E) {
          return Dl(h, E, g);
        })),
        (b = T.join(" ")),
        b.split(T[0]).length === 5 ? T[0] : b
      );
    (T = (y + "").split(" ")),
      (b = {}),
      d.forEach(function (E, S) {
        return (b[E] = T[S] = T[S] || T[((S - 1) / 2) | 0]);
      }),
      h.init(p, b, _);
  };
});
var _v = {
  name: "css",
  register: Rh,
  targetTest: function (a) {
    return a.style && a.nodeType;
  },
  init: function (a, r, i, s, o) {
    var d = this._props,
      h = a.style,
      p = i.vars.startAt,
      g,
      y,
      _,
      T,
      b,
      E,
      S,
      N,
      q,
      X,
      K,
      U,
      Q,
      W,
      R,
      H,
      J;
    sp || Rh(),
      (this.styles = this.styles || dv(a)),
      (H = this.styles.props),
      (this.tween = i);
    for (S in r)
      if (S !== "autoRound" && ((y = r[S]), !(ia[S] && tv(S, r, i, s, a, o)))) {
        if (
          ((b = typeof y),
          (E = Mo[S]),
          b === "function" && ((y = y.call(i, s, a, o)), (b = typeof y)),
          b === "string" && ~y.indexOf("random(") && (y = Nc(y)),
          E)
        )
          E(this, a, S, y, i) && (R = 1);
        else if (S.substr(0, 2) === "--")
          (g = (getComputedStyle(a).getPropertyValue(S) + "").trim()),
            (y += ""),
            (yi.lastIndex = 0),
            yi.test(g) ||
              ((N = _n(g)),
              (q = _n(y)),
              q ? N !== q && (g = Si(a, S, g, q) + q) : N && (y += N)),
            this.add(h, "setProperty", g, y, s, o, 0, 0, S),
            d.push(S),
            H.push(S, 0, h[S]);
        else if (b !== "undefined") {
          if (
            (p && S in p
              ? ((g = typeof p[S] == "function" ? p[S].call(i, s, a, o) : p[S]),
                an(g) && ~g.indexOf("random(") && (g = Nc(g)),
                _n(g + "") ||
                  g === "auto" ||
                  (g += fa.units[S] || _n(Dl(a, S)) || ""),
                (g + "").charAt(1) === "=" && (g = Dl(a, S)))
              : (g = Dl(a, S)),
            (T = parseFloat(g)),
            (X = b === "string" && y.charAt(1) === "=" && y.substr(0, 2)),
            X && (y = y.substr(2)),
            (_ = parseFloat(y)),
            S in ll &&
              (S === "autoAlpha" &&
                (T === 1 && Dl(a, "visibility") === "hidden" && _ && (T = 0),
                H.push("visibility", 0, h.visibility),
                hi(
                  this,
                  h,
                  "visibility",
                  T ? "inherit" : "hidden",
                  _ ? "inherit" : "hidden",
                  !_
                )),
              S !== "scale" &&
                S !== "transform" &&
                ((S = ll[S]), ~S.indexOf(",") && (S = S.split(",")[0]))),
            (K = S in Hl),
            K)
          ) {
            if (
              (this.styles.save(S),
              (J = y),
              b === "string" && y.substring(0, 6) === "var(--")
            ) {
              if (
                ((y = oa(a, y.substring(4, y.indexOf(")")))),
                y.substring(0, 5) === "calc(")
              ) {
                var I = a.style.perspective;
                (a.style.perspective = y),
                  (y = oa(a, "perspective")),
                  I ? (a.style.perspective = I) : xi(a, "perspective");
              }
              _ = parseFloat(y);
            }
            if (
              (U ||
                ((Q = a._gsap),
                (Q.renderTransform && !r.parseTransform) ||
                  jc(a, r.parseTransform),
                (W = r.smoothOrigin !== !1 && Q.smooth),
                (U = this._pt =
                  new Xn(this._pt, h, Et, 0, 1, Q.renderTransform, Q, 0, -1)),
                (U.dep = 1)),
              S === "scale")
            )
              (this._pt = new Xn(
                this._pt,
                Q,
                "scaleY",
                Q.scaleY,
                (X ? es(Q.scaleY, X + _) : _) - Q.scaleY || 0,
                Oh
              )),
                (this._pt.u = 0),
                d.push("scaleY", S),
                (S += "X");
            else if (S === "transformOrigin") {
              H.push(Qn, 0, h[Qn]),
                (y = o3(y)),
                Q.svg
                  ? jh(a, y, 0, W, 0, this)
                  : ((q = parseFloat(y.split(" ")[2]) || 0),
                    q !== Q.zOrigin && hi(this, Q, "zOrigin", Q.zOrigin, q),
                    hi(this, h, S, No(g), No(y)));
              continue;
            } else if (S === "svgOrigin") {
              jh(a, y, 1, W, 0, this);
              continue;
            } else if (S in gv) {
              p3(this, Q, S, T, X ? es(T, X + y) : y);
              continue;
            } else if (S === "smoothOrigin") {
              hi(this, Q, "smooth", Q.smooth, y);
              continue;
            } else if (S === "force3D") {
              Q[S] = y;
              continue;
            } else if (S === "transform") {
              m3(this, y, a);
              continue;
            }
          } else S in h || (S = fs(S) || S);
          if (K || ((_ || _ === 0) && (T || T === 0) && !FS.test(y) && S in h))
            (N = (g + "").substr((T + "").length)),
              _ || (_ = 0),
              (q = _n(y) || (S in fa.units ? fa.units[S] : N)),
              N !== q && (T = Si(a, S, g, q)),
              (this._pt = new Xn(
                this._pt,
                K ? Q : h,
                S,
                T,
                (X ? es(T, X + _) : _) - T,
                !K && (q === "px" || S === "zIndex") && r.autoRound !== !1
                  ? IS
                  : Oh
              )),
              (this._pt.u = q || 0),
              K && J !== y
                ? ((this._pt.b = g), (this._pt.e = J), (this._pt.r = PS))
                : N !== q && q !== "%" && ((this._pt.b = g), (this._pt.r = $S));
          else if (S in h) u3.call(this, a, S, g, X ? X + y : y);
          else if (S in a) this.add(a, S, g || a[S], X ? X + y : y, s, o);
          else if (S !== "parseTransform") {
            $h(S, y);
            continue;
          }
          K ||
            (S in h
              ? H.push(S, 0, h[S])
              : typeof a[S] == "function"
              ? H.push(S, 2, a[S]())
              : H.push(S, 1, g || a[S])),
            d.push(S);
        }
      }
    R && sv(this);
  },
  render: function (a, r) {
    if (r.tween._time || !cp())
      for (var i = r._pt; i; ) i.r(a, i.d), (i = i._next);
    else r.styles.revert();
  },
  get: Dl,
  aliases: ll,
  getSetter: function (a, r, i) {
    var s = ll[r];
    return (
      s && s.indexOf(",") < 0 && (r = s),
      r in Hl && r !== Qn && (a._gsap.x || Dl(a, "x"))
        ? i && N1 === i
          ? r === "scale"
            ? a3
            : n3
          : (N1 = i || {}) && (r === "scale" ? l3 : i3)
        : a.style && !Jh(a.style[r])
        ? e3
        : ~r.indexOf("-")
        ? t3
        : ip(a, r)
    );
  },
  core: { _removeProperty: xi, _getMatrix: op },
};
Zn.utils.checkPrefix = fs;
Zn.core.getStyleSaver = dv;
(function (f, a, r, i) {
  var s = Vn(f + "," + a + "," + r, function (o) {
    Hl[o] = 1;
  });
  Vn(a, function (o) {
    (fa.units[o] = "deg"), (gv[o] = 1);
  }),
    (ll[s[13]] = f + "," + a),
    Vn(i, function (o) {
      var d = o.split(":");
      ll[d[1]] = s[d[0]];
    });
})(
  "x,y,z,scale,scaleX,scaleY,xPercent,yPercent",
  "rotation,rotationX,rotationY,skewX,skewY",
  "transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective",
  "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY"
);
Vn(
  "x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",
  function (f) {
    fa.units[f] = "px";
  }
);
Zn.registerPlugin(_v);
var ot = Zn.registerPlugin(_v) || Zn;
ot.core.Tween;
function g3() {
  const [f, a] = ge.useState(!1),
    [r, i] = ge.useState(!1),
    s = ge.useRef(null),
    o = ge.useRef(null),
    d = ge.useRef(null),
    h = ge.useRef(null),
    p = ge.useRef(null),
    g = ge.useRef(null),
    y = ge.useRef(null);
  return (
    ge.useEffect(() => {
      const _ = setTimeout(() => {
        a(!0);
      }, 300);
      return () => clearTimeout(_);
    }, []),
    ge.useEffect(() => {
      if (f && r) {
        const _ = ot.context(() => {
          ot.timeline({ defaults: { ease: "power3.out" } })
            .fromTo(
              d.current,
              { opacity: 0, y: 20 },
              { opacity: 1, y: 0, duration: 0.6 }
            )
            .fromTo(
              h.current,
              { opacity: 0, y: 30 },
              { opacity: 1, y: 0, duration: 0.8 },
              "-=0.3"
            )
            .fromTo(
              p.current,
              { opacity: 0, y: 30 },
              { opacity: 1, y: 0, duration: 0.8 },
              "-=0.5"
            )
            .fromTo(
              g.current,
              { opacity: 0, y: 30 },
              { opacity: 1, y: 0, duration: 0.6 },
              "-=0.5"
            )
            .fromTo(
              y.current,
              { opacity: 0, y: 20 },
              { opacity: 1, y: 0, duration: 0.6 },
              "-=0.3"
            );
        }, s);
        return () => _.revert();
      }
    }, [f, r]),
    x.jsxs("section", {
      "code-path": "src/sections/Hero.tsx:63:5",
      ref: s,
      id: "hero",
      className: "relative w-full min-h-screen overflow-hidden",
      style: { backgroundColor: "var(--bp-bg-primary)" },
      children: [
        x.jsxs("div", {
          "code-path": "src/sections/Hero.tsx:70:7",
          className: Ol(
            "absolute inset-0 transition-opacity duration-[1800ms]",
            f && r ? "opacity-100" : "opacity-0"
          ),
          children: [
            x.jsx("img", {
              "code-path": "src/sections/Hero.tsx:76:9",
              src: wl.backgroundImage,
              alt: "Hero Background",
              className: "absolute inset-0 w-full h-full object-cover",
              style: {
                filter: "brightness(0.4)",
                objectPosition: "center top",
              },
              onLoad: () => i(!0),
            }),
            x.jsx("div", {
              "code-path": "src/sections/Hero.tsx:87:9",
              className: "absolute inset-0",
              style: {
                background:
                  "linear-gradient(to bottom, rgba(26,26,26,0.3) 0%, rgba(26,26,26,0.8) 60%, rgba(26,26,26,1) 100%)",
              },
            }),
          ],
        }),
        x.jsx("div", {
          "code-path": "src/sections/Hero.tsx:96:7",
          ref: o,
          className:
            "relative z-10 flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8 pt-24 pb-16",
          children: x.jsxs("div", {
            "code-path": "src/sections/Hero.tsx:100:9",
            className: "max-w-4xl mx-auto text-center",
            children: [
              x.jsx("div", {
                "code-path": "src/sections/Hero.tsx:102:11",
                ref: d,
                className: "opacity-0 mb-6",
                children: x.jsx("span", {
                  "code-path": "src/sections/Hero.tsx:106:13",
                  className:
                    "inline-block px-4 py-2 rounded-full text-xs font-mono uppercase tracking-[0.2em]",
                  style: {
                    backgroundColor: "rgba(255, 95, 31, 0.15)",
                    color: "var(--bp-accent-orange)",
                    border: "1px solid rgba(255, 95, 31, 0.3)",
                  },
                  children: wl.eyebrow,
                }),
              }),
              x.jsx("h1", {
                "code-path": "src/sections/Hero.tsx:119:11",
                ref: h,
                className: "opacity-0 text-h1 font-black text-white mb-6",
                style: { letterSpacing: "-0.02em" },
                children: wl.headline,
              }),
              x.jsx("p", {
                "code-path": "src/sections/Hero.tsx:128:11",
                ref: p,
                className:
                  "opacity-0 text-lg sm:text-xl max-w-2xl mx-auto mb-10",
                style: { color: "var(--bp-text-secondary)", lineHeight: "1.7" },
                children: wl.subheadline,
              }),
              x.jsxs("div", {
                "code-path": "src/sections/Hero.tsx:137:11",
                ref: g,
                className: "opacity-0 mb-12",
                children: [
                  x.jsxs("a", {
                    "code-path": "src/sections/Hero.tsx:138:13",
                    href: wl.ctaHref,
                    className:
                      "btn-primary text-lg px-10 py-5 inline-flex items-center gap-3 group",
                    children: [
                      wl.ctaText,
                      x.jsx(vy, {
                        "code-path": "src/sections/Hero.tsx:143:15",
                        className:
                          "w-5 h-5 transition-transform group-hover:translate-x-1",
                      }),
                    ],
                  }),
                  x.jsx("p", {
                    "code-path": "src/sections/Hero.tsx:145:13",
                    className: "mt-4 text-sm font-mono",
                    style: { color: "var(--bp-text-muted)" },
                    children:
                      "14-Day Money-Back Guarantee â€¢ No Return Shipping",
                  }),
                ],
              }),
              x.jsxs("div", {
                "code-path": "src/sections/Hero.tsx:154:11",
                ref: y,
                className:
                  "opacity-0 flex flex-wrap items-center justify-center gap-6 sm:gap-10",
                children: [
                  x.jsxs("div", {
                    "code-path": "src/sections/Hero.tsx:159:13",
                    className: "flex items-center gap-2",
                    children: [
                      x.jsx("div", {
                        "code-path": "src/sections/Hero.tsx:160:15",
                        className: "flex",
                        children: [...Array(5)].map((_, T) =>
                          x.jsx(
                            _h,
                            {
                              "code-path": "src/sections/Hero.tsx:162:19",
                              className: "w-5 h-5 fill-current",
                              style: { color: "var(--bp-accent-gold)" },
                            },
                            T
                          )
                        ),
                      }),
                      x.jsx("span", {
                        "code-path": "src/sections/Hero.tsx:169:15",
                        className: "text-white font-semibold",
                        children: wl.trustSignals.rating,
                      }),
                      x.jsxs("span", {
                        "code-path": "src/sections/Hero.tsx:170:15",
                        className: "text-sm",
                        style: { color: "var(--bp-text-muted)" },
                        children: ["(", wl.trustSignals.reviews, " Reviews)"],
                      }),
                    ],
                  }),
                  x.jsx("div", {
                    "code-path": "src/sections/Hero.tsx:179:13",
                    className: "hidden sm:block w-px h-6",
                    style: { backgroundColor: "var(--bp-border)" },
                  }),
                  x.jsxs("div", {
                    "code-path": "src/sections/Hero.tsx:185:13",
                    className: "flex items-center gap-2",
                    children: [
                      x.jsx(_i, {
                        "code-path": "src/sections/Hero.tsx:186:15",
                        className: "w-5 h-5",
                        style: { color: "var(--bp-accent-orange)" },
                      }),
                      x.jsx("span", {
                        "code-path": "src/sections/Hero.tsx:190:15",
                        className: "text-sm",
                        style: { color: "var(--bp-text-secondary)" },
                        children: wl.trustSignals.certification,
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        }),
        x.jsx("div", {
          "code-path": "src/sections/Hero.tsx:202:7",
          className: Ol(
            "absolute bottom-8 left-1/2 -translate-x-1/2 transition-opacity duration-1000",
            f ? "opacity-100" : "opacity-0"
          ),
          style: { transitionDelay: "1.5s" },
          children: x.jsx("div", {
            "code-path": "src/sections/Hero.tsx:209:9",
            className:
              "w-6 h-10 rounded-full border-2 flex items-start justify-center p-2",
            style: { borderColor: "var(--bp-border)" },
            children: x.jsx("div", {
              "code-path": "src/sections/Hero.tsx:213:11",
              className: "w-1.5 h-1.5 rounded-full animate-bounce",
              style: { backgroundColor: "var(--bp-accent-orange)" },
            }),
          }),
        }),
      ],
    })
  );
}
function y3(f, a) {
  for (var r = 0; r < a.length; r++) {
    var i = a[r];
    (i.enumerable = i.enumerable || !1),
      (i.configurable = !0),
      "value" in i && (i.writable = !0),
      Object.defineProperty(f, i.key, i);
  }
}
function v3(f, a, r) {
  return a && y3(f.prototype, a), f;
}
var on,
  yo,
  ca,
  pi,
  mi,
  as,
  bv,
  Ki,
  vc,
  xv,
  jl,
  Va,
  Sv,
  Tv = function () {
    return (
      on ||
      (typeof window < "u" && (on = window.gsap) && on.registerPlugin && on)
    );
  },
  Av = 1,
  Ir = [],
  He = [],
  rl = [],
  _c = Date.now,
  kh = function (a, r) {
    return r;
  },
  _3 = function () {
    var a = vc.core,
      r = a.bridge || {},
      i = a._scrollers,
      s = a._proxies;
    i.push.apply(i, He),
      s.push.apply(s, rl),
      (He = i),
      (rl = s),
      (kh = function (d, h) {
        return r[d](h);
      });
  },
  vi = function (a, r) {
    return ~rl.indexOf(a) && rl[rl.indexOf(a) + 1][r];
  },
  bc = function (a) {
    return !!~xv.indexOf(a);
  },
  En = function (a, r, i, s, o) {
    return a.addEventListener(r, i, { passive: s !== !1, capture: !!o });
  },
  Cn = function (a, r, i, s) {
    return a.removeEventListener(r, i, !!s);
  },
  eo = "scrollLeft",
  to = "scrollTop",
  Uh = function () {
    return (jl && jl.isPressed) || He.cache++;
  },
  Oo = function (a, r) {
    var i = function s(o) {
      if (o || o === 0) {
        Av && (ca.history.scrollRestoration = "manual");
        var d = jl && jl.isPressed;
        (o = s.v = Math.round(o) || (jl && jl.iOS ? 1 : 0)),
          a(o),
          (s.cacheID = He.cache),
          d && kh("ss", o);
      } else
        (r || He.cache !== s.cacheID || kh("ref")) &&
          ((s.cacheID = He.cache), (s.v = a()));
      return s.v + s.offset;
    };
    return (i.offset = 0), a && i;
  },
  Dn = {
    s: eo,
    p: "left",
    p2: "Left",
    os: "right",
    os2: "Right",
    d: "width",
    d2: "Width",
    a: "x",
    sc: Oo(function (f) {
      return arguments.length
        ? ca.scrollTo(f, Pt.sc())
        : ca.pageXOffset || pi[eo] || mi[eo] || as[eo] || 0;
    }),
  },
  Pt = {
    s: to,
    p: "top",
    p2: "Top",
    os: "bottom",
    os2: "Bottom",
    d: "height",
    d2: "Height",
    a: "y",
    op: Dn,
    sc: Oo(function (f) {
      return arguments.length
        ? ca.scrollTo(Dn.sc(), f)
        : ca.pageYOffset || pi[to] || mi[to] || as[to] || 0;
    }),
  },
  Ln = function (a, r) {
    return (
      ((r && r._ctx && r._ctx.selector) || on.utils.toArray)(a)[0] ||
      (typeof a == "string" && on.config().nullTargetWarn !== !1
        ? console.warn("Element not found:", a)
        : null)
    );
  },
  b3 = function (a, r) {
    for (var i = r.length; i--; ) if (r[i] === a || r[i].contains(a)) return !0;
    return !1;
  },
  Ti = function (a, r) {
    var i = r.s,
      s = r.sc;
    bc(a) && (a = pi.scrollingElement || mi);
    var o = He.indexOf(a),
      d = s === Pt.sc ? 1 : 2;
    !~o && (o = He.push(a) - 1), He[o + d] || En(a, "scroll", Uh);
    var h = He[o + d],
      p =
        h ||
        (He[o + d] =
          Oo(vi(a, i), !0) ||
          (bc(a)
            ? s
            : Oo(function (g) {
                return arguments.length ? (a[i] = g) : a[i];
              })));
    return (
      (p.target = a),
      h || (p.smooth = on.getProperty(a, "scrollBehavior") === "smooth"),
      p
    );
  },
  Hh = function (a, r, i) {
    var s = a,
      o = a,
      d = _c(),
      h = d,
      p = r || 50,
      g = Math.max(500, p * 3),
      y = function (E, S) {
        var N = _c();
        S || N - d > p
          ? ((o = s), (s = E), (h = d), (d = N))
          : i
          ? (s += E)
          : (s = o + ((E - o) / (N - h)) * (d - h));
      },
      _ = function () {
        (o = s = i ? 0 : s), (h = d = 0);
      },
      T = function (E) {
        var S = h,
          N = o,
          q = _c();
        return (
          (E || E === 0) && E !== s && y(E),
          d === h || q - h > g
            ? 0
            : ((s + (i ? N : -N)) / ((i ? q : d) - S)) * 1e3
        );
      };
    return { update: y, reset: _, getVelocity: T };
  },
  rc = function (a, r) {
    return (
      r && !a._gsapAllow && a.preventDefault(),
      a.changedTouches ? a.changedTouches[0] : a
    );
  },
  Y1 = function (a) {
    var r = Math.max.apply(Math, a),
      i = Math.min.apply(Math, a);
    return Math.abs(r) >= Math.abs(i) ? r : i;
  },
  zv = function () {
    (vc = on.core.globals().ScrollTrigger), vc && vc.core && _3();
  },
  Cv = function (a) {
    return (
      (on = a || Tv()),
      !yo &&
        on &&
        typeof document < "u" &&
        document.body &&
        ((ca = window),
        (pi = document),
        (mi = pi.documentElement),
        (as = pi.body),
        (xv = [ca, pi, mi, as]),
        on.utils.clamp,
        (Sv = on.core.context || function () {}),
        (Ki = "onpointerenter" in as ? "pointer" : "mouse"),
        (bv = Bt.isTouch =
          ca.matchMedia &&
          ca.matchMedia("(hover: none), (pointer: coarse)").matches
            ? 1
            : "ontouchstart" in ca ||
              navigator.maxTouchPoints > 0 ||
              navigator.msMaxTouchPoints > 0
            ? 2
            : 0),
        (Va = Bt.eventTypes =
          (
            "ontouchstart" in mi
              ? "touchstart,touchmove,touchcancel,touchend"
              : "onpointerdown" in mi
              ? "pointerdown,pointermove,pointercancel,pointerup"
              : "mousedown,mousemove,mouseup,mouseup"
          ).split(",")),
        setTimeout(function () {
          return (Av = 0);
        }, 500),
        zv(),
        (yo = 1)),
      yo
    );
  };
Dn.op = Pt;
He.cache = 0;
var Bt = (function () {
  function f(r) {
    this.init(r);
  }
  var a = f.prototype;
  return (
    (a.init = function (i) {
      yo || Cv(on) || console.warn("Please gsap.registerPlugin(Observer)"),
        vc || zv();
      var s = i.tolerance,
        o = i.dragMinimum,
        d = i.type,
        h = i.target,
        p = i.lineHeight,
        g = i.debounce,
        y = i.preventDefault,
        _ = i.onStop,
        T = i.onStopDelay,
        b = i.ignore,
        E = i.wheelSpeed,
        S = i.event,
        N = i.onDragStart,
        q = i.onDragEnd,
        X = i.onDrag,
        K = i.onPress,
        U = i.onRelease,
        Q = i.onRight,
        W = i.onLeft,
        R = i.onUp,
        H = i.onDown,
        J = i.onChangeX,
        I = i.onChangeY,
        oe = i.onChange,
        te = i.onToggleX,
        be = i.onToggleY,
        ve = i.onHover,
        ye = i.onHoverEnd,
        O = i.onMove,
        G = i.ignoreCheck,
        V = i.isNormalizer,
        fe = i.onGestureStart,
        w = i.onGestureEnd,
        z = i.onWheel,
        L = i.onEnable,
        P = i.onDisable,
        ee = i.onClick,
        le = i.scrollSpeed,
        de = i.capture,
        ae = i.allowClicks,
        Qe = i.lockAxis,
        Ce = i.onLockAxis;
      (this.target = h = Ln(h) || mi),
        (this.vars = i),
        b && (b = on.utils.toArray(b)),
        (s = s || 1e-9),
        (o = o || 0),
        (E = E || 1),
        (le = le || 1),
        (d = d || "wheel,touch,pointer"),
        (g = g !== !1),
        p || (p = parseFloat(ca.getComputedStyle(as).lineHeight) || 22);
      var Kt,
        mt,
        gt,
        qe,
        Pe,
        It,
        ln,
        Y = this,
        dn = 0,
        Kn = 0,
        pa = i.passive || (!y && i.passive !== !1),
        ct = Ti(h, Dn),
        Ha = Ti(h, Pt),
        Xa = ct(),
        Rt = Ha(),
        Yt =
          ~d.indexOf("touch") &&
          !~d.indexOf("pointer") &&
          Va[0] === "pointerdown",
        Ba = bc(h),
        yt = h.ownerDocument || pi,
        hn = [0, 0, 0],
        Rn = [0, 0, 0],
        ma = 0,
        zi = function () {
          return (ma = _c());
        },
        wt = function (he, Ke) {
          return (
            ((Y.event = he) && b && b3(he.target, b)) ||
            (Ke && Yt && he.pointerType !== "touch") ||
            (G && G(he, Ke))
          );
        },
        Qa = function () {
          Y._vx.reset(), Y._vy.reset(), mt.pause(), _ && _(Y);
        },
        xt = function () {
          var he = (Y.deltaX = Y1(hn)),
            Ke = (Y.deltaY = Y1(Rn)),
            ne = Math.abs(he) >= s,
            Te = Math.abs(Ke) >= s;
          oe && (ne || Te) && oe(Y, he, Ke, hn, Rn),
            ne &&
              (Q && Y.deltaX > 0 && Q(Y),
              W && Y.deltaX < 0 && W(Y),
              J && J(Y),
              te && Y.deltaX < 0 != dn < 0 && te(Y),
              (dn = Y.deltaX),
              (hn[0] = hn[1] = hn[2] = 0)),
            Te &&
              (H && Y.deltaY > 0 && H(Y),
              R && Y.deltaY < 0 && R(Y),
              I && I(Y),
              be && Y.deltaY < 0 != Kn < 0 && be(Y),
              (Kn = Y.deltaY),
              (Rn[0] = Rn[1] = Rn[2] = 0)),
            (qe || gt) &&
              (O && O(Y),
              gt && (N && gt === 1 && N(Y), X && X(Y), (gt = 0)),
              (qe = !1)),
            It && !(It = !1) && Ce && Ce(Y),
            Pe && (z(Y), (Pe = !1)),
            (Kt = 0);
        },
        Sn = function (he, Ke, ne) {
          (hn[ne] += he),
            (Rn[ne] += Ke),
            Y._vx.update(he),
            Y._vy.update(Ke),
            g ? Kt || (Kt = requestAnimationFrame(xt)) : xt();
        },
        qt = function (he, Ke) {
          Qe &&
            !ln &&
            ((Y.axis = ln = Math.abs(he) > Math.abs(Ke) ? "x" : "y"),
            (It = !0)),
            ln !== "y" && ((hn[2] += he), Y._vx.update(he, !0)),
            ln !== "x" && ((Rn[2] += Ke), Y._vy.update(Ke, !0)),
            g ? Kt || (Kt = requestAnimationFrame(xt)) : xt();
        },
        Za = function (he) {
          if (!wt(he, 1)) {
            he = rc(he, y);
            var Ke = he.clientX,
              ne = he.clientY,
              Te = Ke - Y.x,
              pe = ne - Y.y,
              xe = Y.isDragging;
            (Y.x = Ke),
              (Y.y = ne),
              (xe ||
                ((Te || pe) &&
                  (Math.abs(Y.startX - Ke) >= o ||
                    Math.abs(Y.startY - ne) >= o))) &&
                (gt || (gt = xe ? 2 : 1),
                xe || (Y.isDragging = !0),
                qt(Te, pe));
          }
        },
        cl = (Y.onPress = function (Se) {
          wt(Se, 1) ||
            (Se && Se.button) ||
            ((Y.axis = ln = null),
            mt.pause(),
            (Y.isPressed = !0),
            (Se = rc(Se)),
            (dn = Kn = 0),
            (Y.startX = Y.x = Se.clientX),
            (Y.startY = Y.y = Se.clientY),
            Y._vx.reset(),
            Y._vy.reset(),
            En(V ? h : yt, Va[1], Za, pa, !0),
            (Y.deltaX = Y.deltaY = 0),
            K && K(Y));
        }),
        Ne = (Y.onRelease = function (Se) {
          if (!wt(Se, 1)) {
            Cn(V ? h : yt, Va[1], Za, !0);
            var he = !isNaN(Y.y - Y.startY),
              Ke = Y.isDragging,
              ne =
                Ke &&
                (Math.abs(Y.x - Y.startX) > 3 || Math.abs(Y.y - Y.startY) > 3),
              Te = rc(Se);
            !ne &&
              he &&
              (Y._vx.reset(),
              Y._vy.reset(),
              y &&
                ae &&
                on.delayedCall(0.08, function () {
                  if (_c() - ma > 300 && !Se.defaultPrevented) {
                    if (Se.target.click) Se.target.click();
                    else if (yt.createEvent) {
                      var pe = yt.createEvent("MouseEvents");
                      pe.initMouseEvent(
                        "click",
                        !0,
                        !0,
                        ca,
                        1,
                        Te.screenX,
                        Te.screenY,
                        Te.clientX,
                        Te.clientY,
                        !1,
                        !1,
                        !1,
                        !1,
                        0,
                        null
                      ),
                        Se.target.dispatchEvent(pe);
                    }
                  }
                })),
              (Y.isDragging = Y.isGesturing = Y.isPressed = !1),
              _ && Ke && !V && mt.restart(!0),
              gt && xt(),
              q && Ke && q(Y),
              U && U(Y, ne);
          }
        }),
        ga = function (he) {
          return (
            he.touches &&
            he.touches.length > 1 &&
            (Y.isGesturing = !0) &&
            fe(he, Y.isDragging)
          );
        },
        pn = function () {
          return (Y.isGesturing = !1) || w(Y);
        },
        mn = function (he) {
          if (!wt(he)) {
            var Ke = ct(),
              ne = Ha();
            Sn((Ke - Xa) * le, (ne - Rt) * le, 1),
              (Xa = Ke),
              (Rt = ne),
              _ && mt.restart(!0);
          }
        },
        Jt = function (he) {
          if (!wt(he)) {
            (he = rc(he, y)), z && (Pe = !0);
            var Ke =
              (he.deltaMode === 1
                ? p
                : he.deltaMode === 2
                ? ca.innerHeight
                : 1) * E;
            Sn(he.deltaX * Ke, he.deltaY * Ke, 0), _ && !V && mt.restart(!0);
          }
        },
        ya = function (he) {
          if (!wt(he)) {
            var Ke = he.clientX,
              ne = he.clientY,
              Te = Ke - Y.x,
              pe = ne - Y.y;
            (Y.x = Ke),
              (Y.y = ne),
              (qe = !0),
              _ && mt.restart(!0),
              (Te || pe) && qt(Te, pe);
          }
        },
        va = function (he) {
          (Y.event = he), ve(Y);
        },
        Ya = function (he) {
          (Y.event = he), ye(Y);
        },
        Bl = function (he) {
          return wt(he) || (rc(he, y) && ee(Y));
        };
      (mt = Y._dc = on.delayedCall(T || 0.25, Qa).pause()),
        (Y.deltaX = Y.deltaY = 0),
        (Y._vx = Hh(0, 50, !0)),
        (Y._vy = Hh(0, 50, !0)),
        (Y.scrollX = ct),
        (Y.scrollY = Ha),
        (Y.isDragging = Y.isGesturing = Y.isPressed = !1),
        Sv(this),
        (Y.enable = function (Se) {
          return (
            Y.isEnabled ||
              (En(Ba ? yt : h, "scroll", Uh),
              d.indexOf("scroll") >= 0 && En(Ba ? yt : h, "scroll", mn, pa, de),
              d.indexOf("wheel") >= 0 && En(h, "wheel", Jt, pa, de),
              ((d.indexOf("touch") >= 0 && bv) || d.indexOf("pointer") >= 0) &&
                (En(h, Va[0], cl, pa, de),
                En(yt, Va[2], Ne),
                En(yt, Va[3], Ne),
                ae && En(h, "click", zi, !0, !0),
                ee && En(h, "click", Bl),
                fe && En(yt, "gesturestart", ga),
                w && En(yt, "gestureend", pn),
                ve && En(h, Ki + "enter", va),
                ye && En(h, Ki + "leave", Ya),
                O && En(h, Ki + "move", ya)),
              (Y.isEnabled = !0),
              (Y.isDragging = Y.isGesturing = Y.isPressed = qe = gt = !1),
              Y._vx.reset(),
              Y._vy.reset(),
              (Xa = ct()),
              (Rt = Ha()),
              Se && Se.type && cl(Se),
              L && L(Y)),
            Y
          );
        }),
        (Y.disable = function () {
          Y.isEnabled &&
            (Ir.filter(function (Se) {
              return Se !== Y && bc(Se.target);
            }).length || Cn(Ba ? yt : h, "scroll", Uh),
            Y.isPressed &&
              (Y._vx.reset(), Y._vy.reset(), Cn(V ? h : yt, Va[1], Za, !0)),
            Cn(Ba ? yt : h, "scroll", mn, de),
            Cn(h, "wheel", Jt, de),
            Cn(h, Va[0], cl, de),
            Cn(yt, Va[2], Ne),
            Cn(yt, Va[3], Ne),
            Cn(h, "click", zi, !0),
            Cn(h, "click", Bl),
            Cn(yt, "gesturestart", ga),
            Cn(yt, "gestureend", pn),
            Cn(h, Ki + "enter", va),
            Cn(h, Ki + "leave", Ya),
            Cn(h, Ki + "move", ya),
            (Y.isEnabled = Y.isPressed = Y.isDragging = !1),
            P && P(Y));
        }),
        (Y.kill = Y.revert =
          function () {
            Y.disable();
            var Se = Ir.indexOf(Y);
            Se >= 0 && Ir.splice(Se, 1), jl === Y && (jl = 0);
          }),
        Ir.push(Y),
        V && bc(h) && (jl = Y),
        Y.enable(S);
    }),
    v3(f, [
      {
        key: "velocityX",
        get: function () {
          return this._vx.getVelocity();
        },
      },
      {
        key: "velocityY",
        get: function () {
          return this._vy.getVelocity();
        },
      },
    ]),
    f
  );
})();
Bt.version = "3.14.2";
Bt.create = function (f) {
  return new Bt(f);
};
Bt.register = Cv;
Bt.getAll = function () {
  return Ir.slice();
};
Bt.getById = function (f) {
  return Ir.filter(function (a) {
    return a.vars.id === f;
  })[0];
};
Tv() && on.registerPlugin(Bt);
var re,
  Fr,
  Ue,
  ut,
  ra,
  $e,
  fp,
  Do,
  kc,
  xc,
  oc,
  no,
  yn,
  Bo,
  Bh,
  Mn,
  q1,
  L1,
  Wr,
  Ev,
  oh,
  wv,
  wn,
  Yh,
  Mv,
  Nv,
  oi,
  qh,
  dp,
  ls,
  hp,
  Sc,
  Lh,
  fh,
  ao = 1,
  vn = Date.now,
  dh = vn(),
  Ua = 0,
  fc = 0,
  G1 = function (a, r, i) {
    var s = la(a) && (a.substr(0, 6) === "clamp(" || a.indexOf("max") > -1);
    return (i["_" + r + "Clamp"] = s), s ? a.substr(6, a.length - 7) : a;
  },
  V1 = function (a, r) {
    return r && (!la(a) || a.substr(0, 6) !== "clamp(")
      ? "clamp(" + a + ")"
      : a;
  },
  x3 = function f() {
    return fc && requestAnimationFrame(f);
  },
  X1 = function () {
    return (Bo = 1);
  },
  Q1 = function () {
    return (Bo = 0);
  },
  nl = function (a) {
    return a;
  },
  dc = function (a) {
    return Math.round(a * 1e5) / 1e5 || 0;
  },
  Ov = function () {
    return typeof window < "u";
  },
  Dv = function () {
    return re || (Ov() && (re = window.gsap) && re.registerPlugin && re);
  },
  lr = function (a) {
    return !!~fp.indexOf(a);
  },
  Rv = function (a) {
    return (
      (a === "Height" ? hp : Ue["inner" + a]) ||
      ra["client" + a] ||
      $e["client" + a]
    );
  },
  jv = function (a) {
    return (
      vi(a, "getBoundingClientRect") ||
      (lr(a)
        ? function () {
            return (So.width = Ue.innerWidth), (So.height = hp), So;
          }
        : function () {
            return Rl(a);
          })
    );
  },
  S3 = function (a, r, i) {
    var s = i.d,
      o = i.d2,
      d = i.a;
    return (d = vi(a, "getBoundingClientRect"))
      ? function () {
          return d()[s];
        }
      : function () {
          return (r ? Rv(o) : a["client" + o]) || 0;
        };
  },
  T3 = function (a, r) {
    return !r || ~rl.indexOf(a)
      ? jv(a)
      : function () {
          return So;
        };
  },
  il = function (a, r) {
    var i = r.s,
      s = r.d2,
      o = r.d,
      d = r.a;
    return Math.max(
      0,
      (i = "scroll" + s) && (d = vi(a, i))
        ? d() - jv(a)()[o]
        : lr(a)
        ? (ra[i] || $e[i]) - Rv(s)
        : a[i] - a["offset" + s]
    );
  },
  lo = function (a, r) {
    for (var i = 0; i < Wr.length; i += 3)
      (!r || ~r.indexOf(Wr[i + 1])) && a(Wr[i], Wr[i + 1], Wr[i + 2]);
  },
  la = function (a) {
    return typeof a == "string";
  },
  bn = function (a) {
    return typeof a == "function";
  },
  hc = function (a) {
    return typeof a == "number";
  },
  Ji = function (a) {
    return typeof a == "object";
  },
  sc = function (a, r, i) {
    return a && a.progress(r ? 0 : 1) && i && a.pause();
  },
  hh = function (a, r) {
    if (a.enabled) {
      var i = a._ctx
        ? a._ctx.add(function () {
            return r(a);
          })
        : r(a);
      i && i.totalTime && (a.callbackAnimation = i);
    }
  },
  Kr = Math.abs,
  kv = "left",
  Uv = "top",
  pp = "right",
  mp = "bottom",
  tr = "width",
  nr = "height",
  Tc = "Right",
  Ac = "Left",
  zc = "Top",
  Cc = "Bottom",
  Qt = "padding",
  Da = "margin",
  ds = "Width",
  gp = "Height",
  $t = "px",
  Ra = function (a) {
    return Ue.getComputedStyle(a);
  },
  A3 = function (a) {
    var r = Ra(a).position;
    a.style.position = r === "absolute" || r === "fixed" ? r : "relative";
  },
  Z1 = function (a, r) {
    for (var i in r) i in a || (a[i] = r[i]);
    return a;
  },
  Rl = function (a, r) {
    var i =
        r &&
        Ra(a)[Bh] !== "matrix(1, 0, 0, 1, 0, 0)" &&
        re
          .to(a, {
            x: 0,
            y: 0,
            xPercent: 0,
            yPercent: 0,
            rotation: 0,
            rotationX: 0,
            rotationY: 0,
            scale: 1,
            skewX: 0,
            skewY: 0,
          })
          .progress(1),
      s = a.getBoundingClientRect();
    return i && i.progress(0).kill(), s;
  },
  Ro = function (a, r) {
    var i = r.d2;
    return a["offset" + i] || a["client" + i] || 0;
  },
  Hv = function (a) {
    var r = [],
      i = a.labels,
      s = a.duration(),
      o;
    for (o in i) r.push(i[o] / s);
    return r;
  },
  z3 = function (a) {
    return function (r) {
      return re.utils.snap(Hv(a), r);
    };
  },
  yp = function (a) {
    var r = re.utils.snap(a),
      i =
        Array.isArray(a) &&
        a.slice(0).sort(function (s, o) {
          return s - o;
        });
    return i
      ? function (s, o, d) {
          d === void 0 && (d = 0.001);
          var h;
          if (!o) return r(s);
          if (o > 0) {
            for (s -= d, h = 0; h < i.length; h++) if (i[h] >= s) return i[h];
            return i[h - 1];
          } else for (h = i.length, s += d; h--; ) if (i[h] <= s) return i[h];
          return i[0];
        }
      : function (s, o, d) {
          d === void 0 && (d = 0.001);
          var h = r(s);
          return !o || Math.abs(h - s) < d || h - s < 0 == o < 0
            ? h
            : r(o < 0 ? s - a : s + a);
        };
  },
  C3 = function (a) {
    return function (r, i) {
      return yp(Hv(a))(r, i.direction);
    };
  },
  io = function (a, r, i, s) {
    return i.split(",").forEach(function (o) {
      return a(r, o, s);
    });
  },
  nn = function (a, r, i, s, o) {
    return a.addEventListener(r, i, { passive: !s, capture: !!o });
  },
  tn = function (a, r, i, s) {
    return a.removeEventListener(r, i, !!s);
  },
  ro = function (a, r, i) {
    (i = i && i.wheelHandler), i && (a(r, "wheel", i), a(r, "touchmove", i));
  },
  K1 = {
    startColor: "green",
    endColor: "red",
    indent: 0,
    fontSize: "16px",
    fontWeight: "normal",
  },
  so = { toggleActions: "play", anticipatePin: 0 },
  jo = { top: 0, left: 0, center: 0.5, bottom: 1, right: 1 },
  vo = function (a, r) {
    if (la(a)) {
      var i = a.indexOf("="),
        s = ~i ? +(a.charAt(i - 1) + 1) * parseFloat(a.substr(i + 1)) : 0;
      ~i && (a.indexOf("%") > i && (s *= r / 100), (a = a.substr(0, i - 1))),
        (a =
          s +
          (a in jo
            ? jo[a] * r
            : ~a.indexOf("%")
            ? (parseFloat(a) * r) / 100
            : parseFloat(a) || 0));
    }
    return a;
  },
  co = function (a, r, i, s, o, d, h, p) {
    var g = o.startColor,
      y = o.endColor,
      _ = o.fontSize,
      T = o.indent,
      b = o.fontWeight,
      E = ut.createElement("div"),
      S = lr(i) || vi(i, "pinType") === "fixed",
      N = a.indexOf("scroller") !== -1,
      q = S ? $e : i,
      X = a.indexOf("start") !== -1,
      K = X ? g : y,
      U =
        "border-color:" +
        K +
        ";font-size:" +
        _ +
        ";color:" +
        K +
        ";font-weight:" +
        b +
        ";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";
    return (
      (U += "position:" + ((N || p) && S ? "fixed;" : "absolute;")),
      (N || p || !S) &&
        (U += (s === Pt ? pp : mp) + ":" + (d + parseFloat(T)) + "px;"),
      h &&
        (U +=
          "box-sizing:border-box;text-align:left;width:" +
          h.offsetWidth +
          "px;"),
      (E._isStart = X),
      E.setAttribute("class", "gsap-marker-" + a + (r ? " marker-" + r : "")),
      (E.style.cssText = U),
      (E.innerText = r || r === 0 ? a + "-" + r : a),
      q.children[0] ? q.insertBefore(E, q.children[0]) : q.appendChild(E),
      (E._offset = E["offset" + s.op.d2]),
      _o(E, 0, s, X),
      E
    );
  },
  _o = function (a, r, i, s) {
    var o = { display: "block" },
      d = i[s ? "os2" : "p2"],
      h = i[s ? "p2" : "os2"];
    (a._isFlipped = s),
      (o[i.a + "Percent"] = s ? -100 : 0),
      (o[i.a] = s ? "1px" : 0),
      (o["border" + d + ds] = 1),
      (o["border" + h + ds] = 0),
      (o[i.p] = r + "px"),
      re.set(a, o);
  },
  Re = [],
  Gh = {},
  Uc,
  J1 = function () {
    return vn() - Ua > 34 && (Uc || (Uc = requestAnimationFrame(kl)));
  },
  Jr = function () {
    (!wn || !wn.isPressed || wn.startX > $e.clientWidth) &&
      (He.cache++,
      wn ? Uc || (Uc = requestAnimationFrame(kl)) : kl(),
      Ua || rr("scrollStart"),
      (Ua = vn()));
  },
  ph = function () {
    (Nv = Ue.innerWidth), (Mv = Ue.innerHeight);
  },
  pc = function (a) {
    He.cache++,
      (a === !0 ||
        (!yn &&
          !wv &&
          !ut.fullscreenElement &&
          !ut.webkitFullscreenElement &&
          (!Yh ||
            Nv !== Ue.innerWidth ||
            Math.abs(Ue.innerHeight - Mv) > Ue.innerHeight * 0.25))) &&
        Do.restart(!0);
  },
  ir = {},
  E3 = [],
  Bv = function f() {
    return tn(ze, "scrollEnd", f) || Wi(!0);
  },
  rr = function (a) {
    return (
      (ir[a] &&
        ir[a].map(function (r) {
          return r();
        })) ||
      E3
    );
  },
  aa = [],
  Yv = function (a) {
    for (var r = 0; r < aa.length; r += 5)
      (!a || (aa[r + 4] && aa[r + 4].query === a)) &&
        ((aa[r].style.cssText = aa[r + 1]),
        aa[r].getBBox && aa[r].setAttribute("transform", aa[r + 2] || ""),
        (aa[r + 3].uncache = 1));
  },
  qv = function () {
    return He.forEach(function (a) {
      return bn(a) && ++a.cacheID && (a.rec = a());
    });
  },
  vp = function (a, r) {
    var i;
    for (Mn = 0; Mn < Re.length; Mn++)
      (i = Re[Mn]),
        i && (!r || i._ctx === r) && (a ? i.kill(1) : i.revert(!0, !0));
    (Sc = !0), r && Yv(r), r || rr("revert");
  },
  Lv = function (a, r) {
    He.cache++,
      (r || !Nn) &&
        He.forEach(function (i) {
          return bn(i) && i.cacheID++ && (i.rec = 0);
        }),
      la(a) && (Ue.history.scrollRestoration = dp = a);
  },
  Nn,
  ar = 0,
  F1,
  w3 = function () {
    if (F1 !== ar) {
      var a = (F1 = ar);
      requestAnimationFrame(function () {
        return a === ar && Wi(!0);
      });
    }
  },
  Gv = function () {
    $e.appendChild(ls),
      (hp = (!wn && ls.offsetHeight) || Ue.innerHeight),
      $e.removeChild(ls);
  },
  W1 = function (a) {
    return kc(
      ".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end"
    ).forEach(function (r) {
      return (r.style.display = a ? "none" : "block");
    });
  },
  Wi = function (a, r) {
    if (
      ((ra = ut.documentElement),
      ($e = ut.body),
      (fp = [Ue, ut, ra, $e]),
      Ua && !a && !Sc)
    ) {
      nn(ze, "scrollEnd", Bv);
      return;
    }
    Gv(), (Nn = ze.isRefreshing = !0), Sc || qv();
    var i = rr("refreshInit");
    Ev && ze.sort(),
      r || vp(),
      He.forEach(function (s) {
        bn(s) && (s.smooth && (s.target.style.scrollBehavior = "auto"), s(0));
      }),
      Re.slice(0).forEach(function (s) {
        return s.refresh();
      }),
      (Sc = !1),
      Re.forEach(function (s) {
        if (s._subPinOffset && s.pin) {
          var o = s.vars.horizontal ? "offsetWidth" : "offsetHeight",
            d = s.pin[o];
          s.revert(!0, 1), s.adjustPinSpacing(s.pin[o] - d), s.refresh();
        }
      }),
      (Lh = 1),
      W1(!0),
      Re.forEach(function (s) {
        var o = il(s.scroller, s._dir),
          d = s.vars.end === "max" || (s._endClamp && s.end > o),
          h = s._startClamp && s.start >= o;
        (d || h) &&
          s.setPositions(
            h ? o - 1 : s.start,
            d ? Math.max(h ? o : s.start + 1, o) : s.end,
            !0
          );
      }),
      W1(!1),
      (Lh = 0),
      i.forEach(function (s) {
        return s && s.render && s.render(-1);
      }),
      He.forEach(function (s) {
        bn(s) &&
          (s.smooth &&
            requestAnimationFrame(function () {
              return (s.target.style.scrollBehavior = "smooth");
            }),
          s.rec && s(s.rec));
      }),
      Lv(dp, 1),
      Do.pause(),
      ar++,
      (Nn = 2),
      kl(2),
      Re.forEach(function (s) {
        return bn(s.vars.onRefresh) && s.vars.onRefresh(s);
      }),
      (Nn = ze.isRefreshing = !1),
      rr("refresh");
  },
  Vh = 0,
  bo = 1,
  Ec,
  kl = function (a) {
    if (a === 2 || (!Nn && !Sc)) {
      (ze.isUpdating = !0), Ec && Ec.update(0);
      var r = Re.length,
        i = vn(),
        s = i - dh >= 50,
        o = r && Re[0].scroll();
      if (
        ((bo = Vh > o ? -1 : 1),
        Nn || (Vh = o),
        s &&
          (Ua && !Bo && i - Ua > 200 && ((Ua = 0), rr("scrollEnd")),
          (oc = dh),
          (dh = i)),
        bo < 0)
      ) {
        for (Mn = r; Mn-- > 0; ) Re[Mn] && Re[Mn].update(0, s);
        bo = 1;
      } else for (Mn = 0; Mn < r; Mn++) Re[Mn] && Re[Mn].update(0, s);
      ze.isUpdating = !1;
    }
    Uc = 0;
  },
  Xh = [
    kv,
    Uv,
    mp,
    pp,
    Da + Cc,
    Da + Tc,
    Da + zc,
    Da + Ac,
    "display",
    "flexShrink",
    "float",
    "zIndex",
    "gridColumnStart",
    "gridColumnEnd",
    "gridRowStart",
    "gridRowEnd",
    "gridArea",
    "justifySelf",
    "alignSelf",
    "placeSelf",
    "order",
  ],
  xo = Xh.concat([
    tr,
    nr,
    "boxSizing",
    "max" + ds,
    "max" + gp,
    "position",
    Da,
    Qt,
    Qt + zc,
    Qt + Tc,
    Qt + Cc,
    Qt + Ac,
  ]),
  M3 = function (a, r, i) {
    is(i);
    var s = a._gsap;
    if (s.spacerIsNative) is(s.spacerState);
    else if (a._gsap.swappedIn) {
      var o = r.parentNode;
      o && (o.insertBefore(a, r), o.removeChild(r));
    }
    a._gsap.swappedIn = !1;
  },
  mh = function (a, r, i, s) {
    if (!a._gsap.swappedIn) {
      for (var o = Xh.length, d = r.style, h = a.style, p; o--; )
        (p = Xh[o]), (d[p] = i[p]);
      (d.position = i.position === "absolute" ? "absolute" : "relative"),
        i.display === "inline" && (d.display = "inline-block"),
        (h[mp] = h[pp] = "auto"),
        (d.flexBasis = i.flexBasis || "auto"),
        (d.overflow = "visible"),
        (d.boxSizing = "border-box"),
        (d[tr] = Ro(a, Dn) + $t),
        (d[nr] = Ro(a, Pt) + $t),
        (d[Qt] = h[Da] = h[Uv] = h[kv] = "0"),
        is(s),
        (h[tr] = h["max" + ds] = i[tr]),
        (h[nr] = h["max" + gp] = i[nr]),
        (h[Qt] = i[Qt]),
        a.parentNode !== r &&
          (a.parentNode.insertBefore(r, a), r.appendChild(a)),
        (a._gsap.swappedIn = !0);
    }
  },
  N3 = /([A-Z])/g,
  is = function (a) {
    if (a) {
      var r = a.t.style,
        i = a.length,
        s = 0,
        o,
        d;
      for ((a.t._gsap || re.core.getCache(a.t)).uncache = 1; s < i; s += 2)
        (d = a[s + 1]),
          (o = a[s]),
          d
            ? (r[o] = d)
            : r[o] && r.removeProperty(o.replace(N3, "-$1").toLowerCase());
    }
  },
  uo = function (a) {
    for (var r = xo.length, i = a.style, s = [], o = 0; o < r; o++)
      s.push(xo[o], i[xo[o]]);
    return (s.t = a), s;
  },
  O3 = function (a, r, i) {
    for (var s = [], o = a.length, d = i ? 8 : 0, h; d < o; d += 2)
      (h = a[d]), s.push(h, h in r ? r[h] : a[d + 1]);
    return (s.t = a.t), s;
  },
  So = { left: 0, top: 0 },
  $1 = function (a, r, i, s, o, d, h, p, g, y, _, T, b, E) {
    bn(a) && (a = a(p)),
      la(a) &&
        a.substr(0, 3) === "max" &&
        (a = T + (a.charAt(4) === "=" ? vo("0" + a.substr(3), i) : 0));
    var S = b ? b.time() : 0,
      N,
      q,
      X;
    if ((b && b.seek(0), isNaN(a) || (a = +a), hc(a)))
      b &&
        (a = re.utils.mapRange(
          b.scrollTrigger.start,
          b.scrollTrigger.end,
          0,
          T,
          a
        )),
        h && _o(h, i, s, !0);
    else {
      bn(r) && (r = r(p));
      var K = (a || "0").split(" "),
        U,
        Q,
        W,
        R;
      (X = Ln(r, p) || $e),
        (U = Rl(X) || {}),
        (!U || (!U.left && !U.top)) &&
          Ra(X).display === "none" &&
          ((R = X.style.display),
          (X.style.display = "block"),
          (U = Rl(X)),
          R ? (X.style.display = R) : X.style.removeProperty("display")),
        (Q = vo(K[0], U[s.d])),
        (W = vo(K[1] || "0", i)),
        (a = U[s.p] - g[s.p] - y + Q + o - W),
        h && _o(h, W, s, i - W < 20 || (h._isStart && W > 20)),
        (i -= i - W);
    }
    if ((E && ((p[E] = a || -0.001), a < 0 && (a = 0)), d)) {
      var H = a + i,
        J = d._isStart;
      (N = "scroll" + s.d2),
        _o(
          d,
          H,
          s,
          (J && H > 20) ||
            (!J && (_ ? Math.max($e[N], ra[N]) : d.parentNode[N]) <= H + 1)
        ),
        _ &&
          ((g = Rl(h)),
          _ && (d.style[s.op.p] = g[s.op.p] - s.op.m - d._offset + $t));
    }
    return (
      b &&
        X &&
        ((N = Rl(X)),
        b.seek(T),
        (q = Rl(X)),
        (b._caScrollDist = N[s.p] - q[s.p]),
        (a = (a / b._caScrollDist) * T)),
      b && b.seek(S),
      b ? a : Math.round(a)
    );
  },
  D3 = /(webkit|moz|length|cssText|inset)/i,
  P1 = function (a, r, i, s) {
    if (a.parentNode !== r) {
      var o = a.style,
        d,
        h;
      if (r === $e) {
        (a._stOrig = o.cssText), (h = Ra(a));
        for (d in h)
          !+d &&
            !D3.test(d) &&
            h[d] &&
            typeof o[d] == "string" &&
            d !== "0" &&
            (o[d] = h[d]);
        (o.top = i), (o.left = s);
      } else o.cssText = a._stOrig;
      (re.core.getCache(a).uncache = 1), r.appendChild(a);
    }
  },
  Vv = function (a, r, i) {
    var s = r,
      o = s;
    return function (d) {
      var h = Math.round(a());
      return (
        h !== s &&
          h !== o &&
          Math.abs(h - s) > 3 &&
          Math.abs(h - o) > 3 &&
          ((d = h), i && i()),
        (o = s),
        (s = Math.round(d)),
        s
      );
    };
  },
  oo = function (a, r, i) {
    var s = {};
    (s[r.p] = "+=" + i), re.set(a, s);
  },
  I1 = function (a, r) {
    var i = Ti(a, r),
      s = "_scroll" + r.p2,
      o = function d(h, p, g, y, _) {
        var T = d.tween,
          b = p.onComplete,
          E = {};
        g = g || i();
        var S = Vv(i, g, function () {
          T.kill(), (d.tween = 0);
        });
        return (
          (_ = (y && _) || 0),
          (y = y || h - g),
          T && T.kill(),
          (p[s] = h),
          (p.inherit = !1),
          (p.modifiers = E),
          (E[s] = function () {
            return S(g + y * T.ratio + _ * T.ratio * T.ratio);
          }),
          (p.onUpdate = function () {
            He.cache++, d.tween && kl();
          }),
          (p.onComplete = function () {
            (d.tween = 0), b && b.call(T);
          }),
          (T = d.tween = re.to(a, p)),
          T
        );
      };
    return (
      (a[s] = i),
      (i.wheelHandler = function () {
        return o.tween && o.tween.kill() && (o.tween = 0);
      }),
      nn(a, "wheel", i.wheelHandler),
      ze.isTouch && nn(a, "touchmove", i.wheelHandler),
      o
    );
  },
  ze = (function () {
    function f(r, i) {
      Fr ||
        f.register(re) ||
        console.warn("Please gsap.registerPlugin(ScrollTrigger)"),
        qh(this),
        this.init(r, i);
    }
    var a = f.prototype;
    return (
      (a.init = function (i, s) {
        if (
          ((this.progress = this.start = 0),
          this.vars && this.kill(!0, !0),
          !fc)
        ) {
          this.update = this.refresh = this.kill = nl;
          return;
        }
        i = Z1(la(i) || hc(i) || i.nodeType ? { trigger: i } : i, so);
        var o = i,
          d = o.onUpdate,
          h = o.toggleClass,
          p = o.id,
          g = o.onToggle,
          y = o.onRefresh,
          _ = o.scrub,
          T = o.trigger,
          b = o.pin,
          E = o.pinSpacing,
          S = o.invalidateOnRefresh,
          N = o.anticipatePin,
          q = o.onScrubComplete,
          X = o.onSnapComplete,
          K = o.once,
          U = o.snap,
          Q = o.pinReparent,
          W = o.pinSpacer,
          R = o.containerAnimation,
          H = o.fastScrollEnd,
          J = o.preventOverlaps,
          I =
            i.horizontal || (i.containerAnimation && i.horizontal !== !1)
              ? Dn
              : Pt,
          oe = !_ && _ !== 0,
          te = Ln(i.scroller || Ue),
          be = re.core.getCache(te),
          ve = lr(te),
          ye =
            ("pinType" in i
              ? i.pinType
              : vi(te, "pinType") || (ve && "fixed")) === "fixed",
          O = [i.onEnter, i.onLeave, i.onEnterBack, i.onLeaveBack],
          G = oe && i.toggleActions.split(" "),
          V = "markers" in i ? i.markers : so.markers,
          fe = ve ? 0 : parseFloat(Ra(te)["border" + I.p2 + ds]) || 0,
          w = this,
          z =
            i.onRefreshInit &&
            function () {
              return i.onRefreshInit(w);
            },
          L = S3(te, ve, I),
          P = T3(te, ve),
          ee = 0,
          le = 0,
          de = 0,
          ae = Ti(te, I),
          Qe,
          Ce,
          Kt,
          mt,
          gt,
          qe,
          Pe,
          It,
          ln,
          Y,
          dn,
          Kn,
          pa,
          ct,
          Ha,
          Xa,
          Rt,
          Yt,
          Ba,
          yt,
          hn,
          Rn,
          ma,
          zi,
          wt,
          Qa,
          xt,
          Sn,
          qt,
          Za,
          cl,
          Ne,
          ga,
          pn,
          mn,
          Jt,
          ya,
          va,
          Ya;
        if (
          ((w._startClamp = w._endClamp = !1),
          (w._dir = I),
          (N *= 45),
          (w.scroller = te),
          (w.scroll = R ? R.time.bind(R) : ae),
          (mt = ae()),
          (w.vars = i),
          (s = s || i.animation),
          "refreshPriority" in i &&
            ((Ev = 1), i.refreshPriority === -9999 && (Ec = w)),
          (be.tweenScroll = be.tweenScroll || {
            top: I1(te, Pt),
            left: I1(te, Dn),
          }),
          (w.tweenTo = Qe = be.tweenScroll[I.p]),
          (w.scrubDuration = function (ne) {
            (ga = hc(ne) && ne),
              ga
                ? Ne
                  ? Ne.duration(ne)
                  : (Ne = re.to(s, {
                      ease: "expo",
                      totalProgress: "+=0",
                      inherit: !1,
                      duration: ga,
                      paused: !0,
                      onComplete: function () {
                        return q && q(w);
                      },
                    }))
                : (Ne && Ne.progress(1).kill(), (Ne = 0));
          }),
          s &&
            ((s.vars.lazy = !1),
            (s._initted && !w.isReverted) ||
              (s.vars.immediateRender !== !1 &&
                i.immediateRender !== !1 &&
                s.duration() &&
                s.render(0, !0, !0)),
            (w.animation = s.pause()),
            (s.scrollTrigger = w),
            w.scrubDuration(_),
            (Za = 0),
            p || (p = s.vars.id)),
          U &&
            ((!Ji(U) || U.push) && (U = { snapTo: U }),
            "scrollBehavior" in $e.style &&
              re.set(ve ? [$e, ra] : te, { scrollBehavior: "auto" }),
            He.forEach(function (ne) {
              return (
                bn(ne) &&
                ne.target === (ve ? ut.scrollingElement || ra : te) &&
                (ne.smooth = !1)
              );
            }),
            (Kt = bn(U.snapTo)
              ? U.snapTo
              : U.snapTo === "labels"
              ? z3(s)
              : U.snapTo === "labelsDirectional"
              ? C3(s)
              : U.directional !== !1
              ? function (ne, Te) {
                  return yp(U.snapTo)(ne, vn() - le < 500 ? 0 : Te.direction);
                }
              : re.utils.snap(U.snapTo)),
            (pn = U.duration || { min: 0.1, max: 2 }),
            (pn = Ji(pn) ? xc(pn.min, pn.max) : xc(pn, pn)),
            (mn = re
              .delayedCall(U.delay || ga / 2 || 0.1, function () {
                var ne = ae(),
                  Te = vn() - le < 500,
                  pe = Qe.tween;
                if (
                  (Te || Math.abs(w.getVelocity()) < 10) &&
                  !pe &&
                  !Bo &&
                  ee !== ne
                ) {
                  var xe = (ne - qe) / ct,
                    Mt = s && !oe ? s.totalProgress() : xe,
                    je = Te ? 0 : ((Mt - cl) / (vn() - oc)) * 1e3 || 0,
                    vt = re.utils.clamp(-xe, 1 - xe, (Kr(je / 2) * je) / 0.185),
                    ft = xe + (U.inertia === !1 ? 0 : vt),
                    Me,
                    Oe,
                    Ze = U,
                    Tn = Ze.onStart,
                    dt = Ze.onInterrupt,
                    An = Ze.onComplete;
                  if (
                    ((Me = Kt(ft, w)),
                    hc(Me) || (Me = ft),
                    (Oe = Math.max(0, Math.round(qe + Me * ct))),
                    ne <= Pe && ne >= qe && Oe !== ne)
                  ) {
                    if (pe && !pe._initted && pe.data <= Kr(Oe - ne)) return;
                    U.inertia === !1 && (vt = Me - xe),
                      Qe(
                        Oe,
                        {
                          duration: pn(
                            Kr(
                              (Math.max(Kr(ft - Mt), Kr(Me - Mt)) * 0.185) /
                                je /
                                0.05 || 0
                            )
                          ),
                          ease: U.ease || "power3",
                          data: Kr(Oe - ne),
                          onInterrupt: function () {
                            return mn.restart(!0) && dt && dt(w);
                          },
                          onComplete: function () {
                            w.update(),
                              (ee = ae()),
                              s &&
                                !oe &&
                                (Ne
                                  ? Ne.resetTo(
                                      "totalProgress",
                                      Me,
                                      s._tTime / s._tDur
                                    )
                                  : s.progress(Me)),
                              (Za = cl =
                                s && !oe ? s.totalProgress() : w.progress),
                              X && X(w),
                              An && An(w);
                          },
                        },
                        ne,
                        vt * ct,
                        Oe - ne - vt * ct
                      ),
                      Tn && Tn(w, Qe.tween);
                  }
                } else w.isActive && ee !== ne && mn.restart(!0);
              })
              .pause())),
          p && (Gh[p] = w),
          (T = w.trigger = Ln(T || (b !== !0 && b))),
          (Ya = T && T._gsap && T._gsap.stRevert),
          Ya && (Ya = Ya(w)),
          (b = b === !0 ? T : Ln(b)),
          la(h) && (h = { targets: T, className: h }),
          b &&
            (E === !1 ||
              E === Da ||
              (E =
                !E &&
                b.parentNode &&
                b.parentNode.style &&
                Ra(b.parentNode).display === "flex"
                  ? !1
                  : Qt),
            (w.pin = b),
            (Ce = re.core.getCache(b)),
            Ce.spacer
              ? (Ha = Ce.pinState)
              : (W &&
                  ((W = Ln(W)),
                  W && !W.nodeType && (W = W.current || W.nativeElement),
                  (Ce.spacerIsNative = !!W),
                  W && (Ce.spacerState = uo(W))),
                (Ce.spacer = Yt = W || ut.createElement("div")),
                Yt.classList.add("pin-spacer"),
                p && Yt.classList.add("pin-spacer-" + p),
                (Ce.pinState = Ha = uo(b))),
            i.force3D !== !1 && re.set(b, { force3D: !0 }),
            (w.spacer = Yt = Ce.spacer),
            (qt = Ra(b)),
            (zi = qt[E + I.os2]),
            (yt = re.getProperty(b)),
            (hn = re.quickSetter(b, I.a, $t)),
            mh(b, Yt, qt),
            (Rt = uo(b))),
          V)
        ) {
          (Kn = Ji(V) ? Z1(V, K1) : K1),
            (Y = co("scroller-start", p, te, I, Kn, 0)),
            (dn = co("scroller-end", p, te, I, Kn, 0, Y)),
            (Ba = Y["offset" + I.op.d2]);
          var Bl = Ln(vi(te, "content") || te);
          (It = this.markerStart = co("start", p, Bl, I, Kn, Ba, 0, R)),
            (ln = this.markerEnd = co("end", p, Bl, I, Kn, Ba, 0, R)),
            R && (va = re.quickSetter([It, ln], I.a, $t)),
            !ye &&
              !(rl.length && vi(te, "fixedMarkers") === !0) &&
              (A3(ve ? $e : te),
              re.set([Y, dn], { force3D: !0 }),
              (Qa = re.quickSetter(Y, I.a, $t)),
              (Sn = re.quickSetter(dn, I.a, $t)));
        }
        if (R) {
          var Se = R.vars.onUpdate,
            he = R.vars.onUpdateParams;
          R.eventCallback("onUpdate", function () {
            w.update(0, 0, 1), Se && Se.apply(R, he || []);
          });
        }
        if (
          ((w.previous = function () {
            return Re[Re.indexOf(w) - 1];
          }),
          (w.next = function () {
            return Re[Re.indexOf(w) + 1];
          }),
          (w.revert = function (ne, Te) {
            if (!Te) return w.kill(!0);
            var pe = ne !== !1 || !w.enabled,
              xe = yn;
            pe !== w.isReverted &&
              (pe &&
                ((Jt = Math.max(ae(), w.scroll.rec || 0)),
                (de = w.progress),
                (ya = s && s.progress())),
              It &&
                [It, ln, Y, dn].forEach(function (Mt) {
                  return (Mt.style.display = pe ? "none" : "block");
                }),
              pe && ((yn = w), w.update(pe)),
              b &&
                (!Q || !w.isActive) &&
                (pe ? M3(b, Yt, Ha) : mh(b, Yt, Ra(b), wt)),
              pe || w.update(pe),
              (yn = xe),
              (w.isReverted = pe));
          }),
          (w.refresh = function (ne, Te, pe, xe) {
            if (!((yn || !w.enabled) && !Te)) {
              if (b && ne && Ua) {
                nn(f, "scrollEnd", Bv);
                return;
              }
              !Nn && z && z(w),
                (yn = w),
                Qe.tween && !pe && (Qe.tween.kill(), (Qe.tween = 0)),
                Ne && Ne.pause(),
                S &&
                  s &&
                  (s.revert({ kill: !1 }).invalidate(),
                  s.getChildren
                    ? s.getChildren(!0, !0, !1).forEach(function (Fa) {
                        return Fa.vars.immediateRender && Fa.render(0, !0, !0);
                      })
                    : s.vars.immediateRender && s.render(0, !0, !0)),
                w.isReverted || w.revert(!0, !0),
                (w._subPinOffset = !1);
              var Mt = L(),
                je = P(),
                vt = R ? R.duration() : il(te, I),
                ft = ct <= 0.01 || !ct,
                Me = 0,
                Oe = xe || 0,
                Ze = Ji(pe) ? pe.end : i.end,
                Tn = i.endTrigger || T,
                dt = Ji(pe)
                  ? pe.start
                  : i.start || (i.start === 0 || !T ? 0 : b ? "0 0" : "0 100%"),
                An = (w.pinnedContainer =
                  i.pinnedContainer && Ln(i.pinnedContainer, w)),
                Jn = (T && Math.max(0, Re.indexOf(w))) || 0,
                St = Jn,
                jt,
                Tt,
                jn,
                Ka,
                At,
                ke,
                Fn,
                cr,
                Ja,
                _a,
                ba,
                Yl,
                Ci;
              for (
                V &&
                Ji(pe) &&
                ((Yl = re.getProperty(Y, I.p)), (Ci = re.getProperty(dn, I.p)));
                St-- > 0;

              )
                (ke = Re[St]),
                  ke.end || ke.refresh(0, 1) || (yn = w),
                  (Fn = ke.pin),
                  Fn &&
                    (Fn === T || Fn === b || Fn === An) &&
                    !ke.isReverted &&
                    (_a || (_a = []), _a.unshift(ke), ke.revert(!0, !0)),
                  ke !== Re[St] && (Jn--, St--);
              for (
                bn(dt) && (dt = dt(w)),
                  dt = G1(dt, "start", w),
                  qe =
                    $1(
                      dt,
                      T,
                      Mt,
                      I,
                      ae(),
                      It,
                      Y,
                      w,
                      je,
                      fe,
                      ye,
                      vt,
                      R,
                      w._startClamp && "_startClamp"
                    ) || (b ? -0.001 : 0),
                  bn(Ze) && (Ze = Ze(w)),
                  la(Ze) &&
                    !Ze.indexOf("+=") &&
                    (~Ze.indexOf(" ")
                      ? (Ze = (la(dt) ? dt.split(" ")[0] : "") + Ze)
                      : ((Me = vo(Ze.substr(2), Mt)),
                        (Ze = la(dt)
                          ? dt
                          : (R
                              ? re.utils.mapRange(
                                  0,
                                  R.duration(),
                                  R.scrollTrigger.start,
                                  R.scrollTrigger.end,
                                  qe
                                )
                              : qe) + Me),
                        (Tn = T))),
                  Ze = G1(Ze, "end", w),
                  Pe =
                    Math.max(
                      qe,
                      $1(
                        Ze || (Tn ? "100% 0" : vt),
                        Tn,
                        Mt,
                        I,
                        ae() + Me,
                        ln,
                        dn,
                        w,
                        je,
                        fe,
                        ye,
                        vt,
                        R,
                        w._endClamp && "_endClamp"
                      )
                    ) || -0.001,
                  Me = 0,
                  St = Jn;
                St--;

              )
                (ke = Re[St] || {}),
                  (Fn = ke.pin),
                  Fn &&
                    ke.start - ke._pinPush <= qe &&
                    !R &&
                    ke.end > 0 &&
                    ((jt =
                      ke.end -
                      (w._startClamp ? Math.max(0, ke.start) : ke.start)),
                    ((Fn === T && ke.start - ke._pinPush < qe) || Fn === An) &&
                      isNaN(dt) &&
                      (Me += jt * (1 - ke.progress)),
                    Fn === b && (Oe += jt));
              if (
                ((qe += Me),
                (Pe += Me),
                w._startClamp && (w._startClamp += Me),
                w._endClamp &&
                  !Nn &&
                  ((w._endClamp = Pe || -0.001),
                  (Pe = Math.min(Pe, il(te, I)))),
                (ct = Pe - qe || ((qe -= 0.01) && 0.001)),
                ft &&
                  (de = re.utils.clamp(0, 1, re.utils.normalize(qe, Pe, Jt))),
                (w._pinPush = Oe),
                It &&
                  Me &&
                  ((jt = {}),
                  (jt[I.a] = "+=" + Me),
                  An && (jt[I.p] = "-=" + ae()),
                  re.set([It, ln], jt)),
                b && !(Lh && w.end >= il(te, I)))
              )
                (jt = Ra(b)),
                  (Ka = I === Pt),
                  (jn = ae()),
                  (Rn = parseFloat(yt(I.a)) + Oe),
                  !vt &&
                    Pe > 1 &&
                    ((ba = (ve ? ut.scrollingElement || ra : te).style),
                    (ba = {
                      style: ba,
                      value: ba["overflow" + I.a.toUpperCase()],
                    }),
                    ve &&
                      Ra($e)["overflow" + I.a.toUpperCase()] !== "scroll" &&
                      (ba.style["overflow" + I.a.toUpperCase()] = "scroll")),
                  mh(b, Yt, jt),
                  (Rt = uo(b)),
                  (Tt = Rl(b, !0)),
                  (cr = ye && Ti(te, Ka ? Dn : Pt)()),
                  E
                    ? ((wt = [E + I.os2, ct + Oe + $t]),
                      (wt.t = Yt),
                      (St = E === Qt ? Ro(b, I) + ct + Oe : 0),
                      St &&
                        (wt.push(I.d, St + $t),
                        Yt.style.flexBasis !== "auto" &&
                          (Yt.style.flexBasis = St + $t)),
                      is(wt),
                      An &&
                        Re.forEach(function (Fa) {
                          Fa.pin === An &&
                            Fa.vars.pinSpacing !== !1 &&
                            (Fa._subPinOffset = !0);
                        }),
                      ye && ae(Jt))
                    : ((St = Ro(b, I)),
                      St &&
                        Yt.style.flexBasis !== "auto" &&
                        (Yt.style.flexBasis = St + $t)),
                  ye &&
                    ((At = {
                      top: Tt.top + (Ka ? jn - qe : cr) + $t,
                      left: Tt.left + (Ka ? cr : jn - qe) + $t,
                      boxSizing: "border-box",
                      position: "fixed",
                    }),
                    (At[tr] = At["max" + ds] = Math.ceil(Tt.width) + $t),
                    (At[nr] = At["max" + gp] = Math.ceil(Tt.height) + $t),
                    (At[Da] =
                      At[Da + zc] =
                      At[Da + Tc] =
                      At[Da + Cc] =
                      At[Da + Ac] =
                        "0"),
                    (At[Qt] = jt[Qt]),
                    (At[Qt + zc] = jt[Qt + zc]),
                    (At[Qt + Tc] = jt[Qt + Tc]),
                    (At[Qt + Cc] = jt[Qt + Cc]),
                    (At[Qt + Ac] = jt[Qt + Ac]),
                    (Xa = O3(Ha, At, Q)),
                    Nn && ae(0)),
                  s
                    ? ((Ja = s._initted),
                      oh(1),
                      s.render(s.duration(), !0, !0),
                      (ma = yt(I.a) - Rn + ct + Oe),
                      (xt = Math.abs(ct - ma) > 1),
                      ye && xt && Xa.splice(Xa.length - 2, 2),
                      s.render(0, !0, !0),
                      Ja || s.invalidate(!0),
                      s.parent || s.totalTime(s.totalTime()),
                      oh(0))
                    : (ma = ct),
                  ba &&
                    (ba.value
                      ? (ba.style["overflow" + I.a.toUpperCase()] = ba.value)
                      : ba.style.removeProperty("overflow-" + I.a));
              else if (T && ae() && !R)
                for (Tt = T.parentNode; Tt && Tt !== $e; )
                  Tt._pinOffset &&
                    ((qe -= Tt._pinOffset), (Pe -= Tt._pinOffset)),
                    (Tt = Tt.parentNode);
              _a &&
                _a.forEach(function (Fa) {
                  return Fa.revert(!1, !0);
                }),
                (w.start = qe),
                (w.end = Pe),
                (mt = gt = Nn ? Jt : ae()),
                !R && !Nn && (mt < Jt && ae(Jt), (w.scroll.rec = 0)),
                w.revert(!1, !0),
                (le = vn()),
                mn && ((ee = -1), mn.restart(!0)),
                (yn = 0),
                s &&
                  oe &&
                  (s._initted || ya) &&
                  s.progress() !== ya &&
                  s.progress(ya || 0, !0).render(s.time(), !0, !0),
                (ft || de !== w.progress || R || S || (s && !s._initted)) &&
                  (s &&
                    !oe &&
                    (s._initted || de || s.vars.immediateRender !== !1) &&
                    s.totalProgress(
                      R && qe < -0.001 && !de
                        ? re.utils.normalize(qe, Pe, 0)
                        : de,
                      !0
                    ),
                  (w.progress = ft || (mt - qe) / ct === de ? 0 : de)),
                b && E && (Yt._pinOffset = Math.round(w.progress * ma)),
                Ne && Ne.invalidate(),
                isNaN(Yl) ||
                  ((Yl -= re.getProperty(Y, I.p)),
                  (Ci -= re.getProperty(dn, I.p)),
                  oo(Y, I, Yl),
                  oo(It, I, Yl - (xe || 0)),
                  oo(dn, I, Ci),
                  oo(ln, I, Ci - (xe || 0))),
                ft && !Nn && w.update(),
                y && !Nn && !pa && ((pa = !0), y(w), (pa = !1));
            }
          }),
          (w.getVelocity = function () {
            return ((ae() - gt) / (vn() - oc)) * 1e3 || 0;
          }),
          (w.endAnimation = function () {
            sc(w.callbackAnimation),
              s &&
                (Ne
                  ? Ne.progress(1)
                  : s.paused()
                  ? oe || sc(s, w.direction < 0, 1)
                  : sc(s, s.reversed()));
          }),
          (w.labelToScroll = function (ne) {
            return (
              (s &&
                s.labels &&
                (qe || w.refresh() || qe) +
                  (s.labels[ne] / s.duration()) * ct) ||
              0
            );
          }),
          (w.getTrailing = function (ne) {
            var Te = Re.indexOf(w),
              pe =
                w.direction > 0 ? Re.slice(0, Te).reverse() : Re.slice(Te + 1);
            return (
              la(ne)
                ? pe.filter(function (xe) {
                    return xe.vars.preventOverlaps === ne;
                  })
                : pe
            ).filter(function (xe) {
              return w.direction > 0 ? xe.end <= qe : xe.start >= Pe;
            });
          }),
          (w.update = function (ne, Te, pe) {
            if (!(R && !pe && !ne)) {
              var xe = Nn === !0 ? Jt : w.scroll(),
                Mt = ne ? 0 : (xe - qe) / ct,
                je = Mt < 0 ? 0 : Mt > 1 ? 1 : Mt || 0,
                vt = w.progress,
                ft,
                Me,
                Oe,
                Ze,
                Tn,
                dt,
                An,
                Jn;
              if (
                (Te &&
                  ((gt = mt),
                  (mt = R ? ae() : xe),
                  U && ((cl = Za), (Za = s && !oe ? s.totalProgress() : je))),
                N &&
                  b &&
                  !yn &&
                  !ao &&
                  Ua &&
                  (!je && qe < xe + ((xe - gt) / (vn() - oc)) * N
                    ? (je = 1e-4)
                    : je === 1 &&
                      Pe > xe + ((xe - gt) / (vn() - oc)) * N &&
                      (je = 0.9999)),
                je !== vt && w.enabled)
              ) {
                if (
                  ((ft = w.isActive = !!je && je < 1),
                  (Me = !!vt && vt < 1),
                  (dt = ft !== Me),
                  (Tn = dt || !!je != !!vt),
                  (w.direction = je > vt ? 1 : -1),
                  (w.progress = je),
                  Tn &&
                    !yn &&
                    ((Oe = je && !vt ? 0 : je === 1 ? 1 : vt === 1 ? 2 : 3),
                    oe &&
                      ((Ze =
                        (!dt && G[Oe + 1] !== "none" && G[Oe + 1]) || G[Oe]),
                      (Jn =
                        s &&
                        (Ze === "complete" || Ze === "reset" || Ze in s)))),
                  J &&
                    (dt || Jn) &&
                    (Jn || _ || !s) &&
                    (bn(J)
                      ? J(w)
                      : w.getTrailing(J).forEach(function (jn) {
                          return jn.endAnimation();
                        })),
                  oe ||
                    (Ne && !yn && !ao
                      ? (Ne._dp._time - Ne._start !== Ne._time &&
                          Ne.render(Ne._dp._time - Ne._start),
                        Ne.resetTo
                          ? Ne.resetTo("totalProgress", je, s._tTime / s._tDur)
                          : ((Ne.vars.totalProgress = je),
                            Ne.invalidate().restart()))
                      : s && s.totalProgress(je, !!(yn && (le || ne)))),
                  b)
                ) {
                  if ((ne && E && (Yt.style[E + I.os2] = zi), !ye))
                    hn(dc(Rn + ma * je));
                  else if (Tn) {
                    if (
                      ((An =
                        !ne && je > vt && Pe + 1 > xe && xe + 1 >= il(te, I)),
                      Q)
                    )
                      if (!ne && (ft || An)) {
                        var St = Rl(b, !0),
                          jt = xe - qe;
                        P1(
                          b,
                          $e,
                          St.top + (I === Pt ? jt : 0) + $t,
                          St.left + (I === Pt ? 0 : jt) + $t
                        );
                      } else P1(b, Yt);
                    is(ft || An ? Xa : Rt),
                      (xt && je < 1 && ft) ||
                        hn(Rn + (je === 1 && !An ? ma : 0));
                  }
                }
                U && !Qe.tween && !yn && !ao && mn.restart(!0),
                  h &&
                    (dt || (K && je && (je < 1 || !fh))) &&
                    kc(h.targets).forEach(function (jn) {
                      return jn.classList[ft || K ? "add" : "remove"](
                        h.className
                      );
                    }),
                  d && !oe && !ne && d(w),
                  Tn && !yn
                    ? (oe &&
                        (Jn &&
                          (Ze === "complete"
                            ? s.pause().totalProgress(1)
                            : Ze === "reset"
                            ? s.restart(!0).pause()
                            : Ze === "restart"
                            ? s.restart(!0)
                            : s[Ze]()),
                        d && d(w)),
                      (dt || !fh) &&
                        (g && dt && hh(w, g),
                        O[Oe] && hh(w, O[Oe]),
                        K && (je === 1 ? w.kill(!1, 1) : (O[Oe] = 0)),
                        dt || ((Oe = je === 1 ? 1 : 3), O[Oe] && hh(w, O[Oe]))),
                      H &&
                        !ft &&
                        Math.abs(w.getVelocity()) > (hc(H) ? H : 2500) &&
                        (sc(w.callbackAnimation),
                        Ne
                          ? Ne.progress(1)
                          : sc(s, Ze === "reverse" ? 1 : !je, 1)))
                    : oe && d && !yn && d(w);
              }
              if (Sn) {
                var Tt = R ? (xe / R.duration()) * (R._caScrollDist || 0) : xe;
                Qa(Tt + (Y._isFlipped ? 1 : 0)), Sn(Tt);
              }
              va && va((-xe / R.duration()) * (R._caScrollDist || 0));
            }
          }),
          (w.enable = function (ne, Te) {
            w.enabled ||
              ((w.enabled = !0),
              nn(te, "resize", pc),
              ve || nn(te, "scroll", Jr),
              z && nn(f, "refreshInit", z),
              ne !== !1 && ((w.progress = de = 0), (mt = gt = ee = ae())),
              Te !== !1 && w.refresh());
          }),
          (w.getTween = function (ne) {
            return ne && Qe ? Qe.tween : Ne;
          }),
          (w.setPositions = function (ne, Te, pe, xe) {
            if (R) {
              var Mt = R.scrollTrigger,
                je = R.duration(),
                vt = Mt.end - Mt.start;
              (ne = Mt.start + (vt * ne) / je),
                (Te = Mt.start + (vt * Te) / je);
            }
            w.refresh(
              !1,
              !1,
              {
                start: V1(ne, pe && !!w._startClamp),
                end: V1(Te, pe && !!w._endClamp),
              },
              xe
            ),
              w.update();
          }),
          (w.adjustPinSpacing = function (ne) {
            if (wt && ne) {
              var Te = wt.indexOf(I.d) + 1;
              (wt[Te] = parseFloat(wt[Te]) + ne + $t),
                (wt[1] = parseFloat(wt[1]) + ne + $t),
                is(wt);
            }
          }),
          (w.disable = function (ne, Te) {
            if (
              (ne !== !1 && w.revert(!0, !0),
              w.enabled &&
                ((w.enabled = w.isActive = !1),
                Te || (Ne && Ne.pause()),
                (Jt = 0),
                Ce && (Ce.uncache = 1),
                z && tn(f, "refreshInit", z),
                mn &&
                  (mn.pause(), Qe.tween && Qe.tween.kill() && (Qe.tween = 0)),
                !ve))
            ) {
              for (var pe = Re.length; pe--; )
                if (Re[pe].scroller === te && Re[pe] !== w) return;
              tn(te, "resize", pc), ve || tn(te, "scroll", Jr);
            }
          }),
          (w.kill = function (ne, Te) {
            w.disable(ne, Te), Ne && !Te && Ne.kill(), p && delete Gh[p];
            var pe = Re.indexOf(w);
            pe >= 0 && Re.splice(pe, 1),
              pe === Mn && bo > 0 && Mn--,
              (pe = 0),
              Re.forEach(function (xe) {
                return xe.scroller === w.scroller && (pe = 1);
              }),
              pe || Nn || (w.scroll.rec = 0),
              s &&
                ((s.scrollTrigger = null),
                ne && s.revert({ kill: !1 }),
                Te || s.kill()),
              It &&
                [It, ln, Y, dn].forEach(function (xe) {
                  return xe.parentNode && xe.parentNode.removeChild(xe);
                }),
              Ec === w && (Ec = 0),
              b &&
                (Ce && (Ce.uncache = 1),
                (pe = 0),
                Re.forEach(function (xe) {
                  return xe.pin === b && pe++;
                }),
                pe || (Ce.spacer = 0)),
              i.onKill && i.onKill(w);
          }),
          Re.push(w),
          w.enable(!1, !1),
          Ya && Ya(w),
          s && s.add && !ct)
        ) {
          var Ke = w.update;
          (w.update = function () {
            (w.update = Ke), He.cache++, qe || Pe || w.refresh();
          }),
            re.delayedCall(0.01, w.update),
            (ct = 0.01),
            (qe = Pe = 0);
        } else w.refresh();
        b && w3();
      }),
      (f.register = function (i) {
        return (
          Fr ||
            ((re = i || Dv()),
            Ov() && window.document && f.enable(),
            (Fr = fc)),
          Fr
        );
      }),
      (f.defaults = function (i) {
        if (i) for (var s in i) so[s] = i[s];
        return so;
      }),
      (f.disable = function (i, s) {
        (fc = 0),
          Re.forEach(function (d) {
            return d[s ? "kill" : "disable"](i);
          }),
          tn(Ue, "wheel", Jr),
          tn(ut, "scroll", Jr),
          clearInterval(no),
          tn(ut, "touchcancel", nl),
          tn($e, "touchstart", nl),
          io(tn, ut, "pointerdown,touchstart,mousedown", X1),
          io(tn, ut, "pointerup,touchend,mouseup", Q1),
          Do.kill(),
          lo(tn);
        for (var o = 0; o < He.length; o += 3)
          ro(tn, He[o], He[o + 1]), ro(tn, He[o], He[o + 2]);
      }),
      (f.enable = function () {
        if (
          ((Ue = window),
          (ut = document),
          (ra = ut.documentElement),
          ($e = ut.body),
          re &&
            ((kc = re.utils.toArray),
            (xc = re.utils.clamp),
            (qh = re.core.context || nl),
            (oh = re.core.suppressOverwrites || nl),
            (dp = Ue.history.scrollRestoration || "auto"),
            (Vh = Ue.pageYOffset || 0),
            re.core.globals("ScrollTrigger", f),
            $e))
        ) {
          (fc = 1),
            (ls = document.createElement("div")),
            (ls.style.height = "100vh"),
            (ls.style.position = "absolute"),
            Gv(),
            x3(),
            Bt.register(re),
            (f.isTouch = Bt.isTouch),
            (oi =
              Bt.isTouch &&
              /(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent)),
            (Yh = Bt.isTouch === 1),
            nn(Ue, "wheel", Jr),
            (fp = [Ue, ut, ra, $e]),
            re.matchMedia
              ? ((f.matchMedia = function (g) {
                  var y = re.matchMedia(),
                    _;
                  for (_ in g) y.add(_, g[_]);
                  return y;
                }),
                re.addEventListener("matchMediaInit", function () {
                  qv(), vp();
                }),
                re.addEventListener("matchMediaRevert", function () {
                  return Yv();
                }),
                re.addEventListener("matchMedia", function () {
                  Wi(0, 1), rr("matchMedia");
                }),
                re.matchMedia().add("(orientation: portrait)", function () {
                  return ph(), ph;
                }))
              : console.warn("Requires GSAP 3.11.0 or later"),
            ph(),
            nn(ut, "scroll", Jr);
          var i = $e.hasAttribute("style"),
            s = $e.style,
            o = s.borderTopStyle,
            d = re.core.Animation.prototype,
            h,
            p;
          for (
            d.revert ||
              Object.defineProperty(d, "revert", {
                value: function () {
                  return this.time(-0.01, !0);
                },
              }),
              s.borderTopStyle = "solid",
              h = Rl($e),
              Pt.m = Math.round(h.top + Pt.sc()) || 0,
              Dn.m = Math.round(h.left + Dn.sc()) || 0,
              o ? (s.borderTopStyle = o) : s.removeProperty("border-top-style"),
              i || ($e.setAttribute("style", ""), $e.removeAttribute("style")),
              no = setInterval(J1, 250),
              re.delayedCall(0.5, function () {
                return (ao = 0);
              }),
              nn(ut, "touchcancel", nl),
              nn($e, "touchstart", nl),
              io(nn, ut, "pointerdown,touchstart,mousedown", X1),
              io(nn, ut, "pointerup,touchend,mouseup", Q1),
              Bh = re.utils.checkPrefix("transform"),
              xo.push(Bh),
              Fr = vn(),
              Do = re.delayedCall(0.2, Wi).pause(),
              Wr = [
                ut,
                "visibilitychange",
                function () {
                  var g = Ue.innerWidth,
                    y = Ue.innerHeight;
                  ut.hidden
                    ? ((q1 = g), (L1 = y))
                    : (q1 !== g || L1 !== y) && pc();
                },
                ut,
                "DOMContentLoaded",
                Wi,
                Ue,
                "load",
                Wi,
                Ue,
                "resize",
                pc,
              ],
              lo(nn),
              Re.forEach(function (g) {
                return g.enable(0, 1);
              }),
              p = 0;
            p < He.length;
            p += 3
          )
            ro(tn, He[p], He[p + 1]), ro(tn, He[p], He[p + 2]);
        }
      }),
      (f.config = function (i) {
        "limitCallbacks" in i && (fh = !!i.limitCallbacks);
        var s = i.syncInterval;
        (s && clearInterval(no)) || ((no = s) && setInterval(J1, s)),
          "ignoreMobileResize" in i &&
            (Yh = f.isTouch === 1 && i.ignoreMobileResize),
          "autoRefreshEvents" in i &&
            (lo(tn) || lo(nn, i.autoRefreshEvents || "none"),
            (wv = (i.autoRefreshEvents + "").indexOf("resize") === -1));
      }),
      (f.scrollerProxy = function (i, s) {
        var o = Ln(i),
          d = He.indexOf(o),
          h = lr(o);
        ~d && He.splice(d, h ? 6 : 2),
          s && (h ? rl.unshift(Ue, s, $e, s, ra, s) : rl.unshift(o, s));
      }),
      (f.clearMatchMedia = function (i) {
        Re.forEach(function (s) {
          return s._ctx && s._ctx.query === i && s._ctx.kill(!0, !0);
        });
      }),
      (f.isInViewport = function (i, s, o) {
        var d = (la(i) ? Ln(i) : i).getBoundingClientRect(),
          h = d[o ? tr : nr] * s || 0;
        return o
          ? d.right - h > 0 && d.left + h < Ue.innerWidth
          : d.bottom - h > 0 && d.top + h < Ue.innerHeight;
      }),
      (f.positionInViewport = function (i, s, o) {
        la(i) && (i = Ln(i));
        var d = i.getBoundingClientRect(),
          h = d[o ? tr : nr],
          p =
            s == null
              ? h / 2
              : s in jo
              ? jo[s] * h
              : ~s.indexOf("%")
              ? (parseFloat(s) * h) / 100
              : parseFloat(s) || 0;
        return o ? (d.left + p) / Ue.innerWidth : (d.top + p) / Ue.innerHeight;
      }),
      (f.killAll = function (i) {
        if (
          (Re.slice(0).forEach(function (o) {
            return o.vars.id !== "ScrollSmoother" && o.kill();
          }),
          i !== !0)
        ) {
          var s = ir.killAll || [];
          (ir = {}),
            s.forEach(function (o) {
              return o();
            });
        }
      }),
      f
    );
  })();
ze.version = "3.14.2";
ze.saveStyles = function (f) {
  return f
    ? kc(f).forEach(function (a) {
        if (a && a.style) {
          var r = aa.indexOf(a);
          r >= 0 && aa.splice(r, 5),
            aa.push(
              a,
              a.style.cssText,
              a.getBBox && a.getAttribute("transform"),
              re.core.getCache(a),
              qh()
            );
        }
      })
    : aa;
};
ze.revert = function (f, a) {
  return vp(!f, a);
};
ze.create = function (f, a) {
  return new ze(f, a);
};
ze.refresh = function (f) {
  return f ? pc(!0) : (Fr || ze.register()) && Wi(!0);
};
ze.update = function (f) {
  return ++He.cache && kl(f === !0 ? 2 : 0);
};
ze.clearScrollMemory = Lv;
ze.maxScroll = function (f, a) {
  return il(f, a ? Dn : Pt);
};
ze.getScrollFunc = function (f, a) {
  return Ti(Ln(f), a ? Dn : Pt);
};
ze.getById = function (f) {
  return Gh[f];
};
ze.getAll = function () {
  return Re.filter(function (f) {
    return f.vars.id !== "ScrollSmoother";
  });
};
ze.isScrolling = function () {
  return !!Ua;
};
ze.snapDirectional = yp;
ze.addEventListener = function (f, a) {
  var r = ir[f] || (ir[f] = []);
  ~r.indexOf(a) || r.push(a);
};
ze.removeEventListener = function (f, a) {
  var r = ir[f],
    i = r && r.indexOf(a);
  i >= 0 && r.splice(i, 1);
};
ze.batch = function (f, a) {
  var r = [],
    i = {},
    s = a.interval || 0.016,
    o = a.batchMax || 1e9,
    d = function (g, y) {
      var _ = [],
        T = [],
        b = re
          .delayedCall(s, function () {
            y(_, T), (_ = []), (T = []);
          })
          .pause();
      return function (E) {
        _.length || b.restart(!0),
          _.push(E.trigger),
          T.push(E),
          o <= _.length && b.progress(1);
      };
    },
    h;
  for (h in a)
    i[h] =
      h.substr(0, 2) === "on" && bn(a[h]) && h !== "onRefreshInit"
        ? d(h, a[h])
        : a[h];
  return (
    bn(o) &&
      ((o = o()),
      nn(ze, "refresh", function () {
        return (o = a.batchMax());
      })),
    kc(f).forEach(function (p) {
      var g = {};
      for (h in i) g[h] = i[h];
      (g.trigger = p), r.push(ze.create(g));
    }),
    r
  );
};
var ey = function (a, r, i, s) {
    return (
      r > s ? a(s) : r < 0 && a(0),
      i > s ? (s - r) / (i - r) : i < 0 ? r / (r - i) : 1
    );
  },
  gh = function f(a, r) {
    r === !0
      ? a.style.removeProperty("touch-action")
      : (a.style.touchAction =
          r === !0
            ? "auto"
            : r
            ? "pan-" + r + (Bt.isTouch ? " pinch-zoom" : "")
            : "none"),
      a === ra && f($e, r);
  },
  fo = { auto: 1, scroll: 1 },
  R3 = function (a) {
    var r = a.event,
      i = a.target,
      s = a.axis,
      o = (r.changedTouches ? r.changedTouches[0] : r).target,
      d = o._gsap || re.core.getCache(o),
      h = vn(),
      p;
    if (!d._isScrollT || h - d._isScrollT > 2e3) {
      for (
        ;
        o &&
        o !== $e &&
        ((o.scrollHeight <= o.clientHeight && o.scrollWidth <= o.clientWidth) ||
          !(fo[(p = Ra(o)).overflowY] || fo[p.overflowX]));

      )
        o = o.parentNode;
      (d._isScroll =
        o &&
        o !== i &&
        !lr(o) &&
        (fo[(p = Ra(o)).overflowY] || fo[p.overflowX])),
        (d._isScrollT = h);
    }
    (d._isScroll || s === "x") && (r.stopPropagation(), (r._gsapAllow = !0));
  },
  Xv = function (a, r, i, s) {
    return Bt.create({
      target: a,
      capture: !0,
      debounce: !1,
      lockAxis: !0,
      type: r,
      onWheel: (s = s && R3),
      onPress: s,
      onDrag: s,
      onScroll: s,
      onEnable: function () {
        return i && nn(ut, Bt.eventTypes[0], ny, !1, !0);
      },
      onDisable: function () {
        return tn(ut, Bt.eventTypes[0], ny, !0);
      },
    });
  },
  j3 = /(input|label|select|textarea)/i,
  ty,
  ny = function (a) {
    var r = j3.test(a.target.tagName);
    (r || ty) && ((a._gsapAllow = !0), (ty = r));
  },
  k3 = function (a) {
    Ji(a) || (a = {}),
      (a.preventDefault = a.isNormalizer = a.allowClicks = !0),
      a.type || (a.type = "wheel,touch"),
      (a.debounce = !!a.debounce),
      (a.id = a.id || "normalizer");
    var r = a,
      i = r.normalizeScrollX,
      s = r.momentum,
      o = r.allowNestedScroll,
      d = r.onRelease,
      h,
      p,
      g = Ln(a.target) || ra,
      y = re.core.globals().ScrollSmoother,
      _ = y && y.get(),
      T =
        oi &&
        ((a.content && Ln(a.content)) ||
          (_ && a.content !== !1 && !_.smooth() && _.content())),
      b = Ti(g, Pt),
      E = Ti(g, Dn),
      S = 1,
      N =
        (Bt.isTouch && Ue.visualViewport
          ? Ue.visualViewport.scale * Ue.visualViewport.width
          : Ue.outerWidth) / Ue.innerWidth,
      q = 0,
      X = bn(s)
        ? function () {
            return s(h);
          }
        : function () {
            return s || 2.8;
          },
      K,
      U,
      Q = Xv(g, a.type, !0, o),
      W = function () {
        return (U = !1);
      },
      R = nl,
      H = nl,
      J = function () {
        (p = il(g, Pt)),
          (H = xc(oi ? 1 : 0, p)),
          i && (R = xc(0, il(g, Dn))),
          (K = ar);
      },
      I = function () {
        (T._gsap.y = dc(parseFloat(T._gsap.y) + b.offset) + "px"),
          (T.style.transform =
            "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " +
            parseFloat(T._gsap.y) +
            ", 0, 1)"),
          (b.offset = b.cacheID = 0);
      },
      oe = function () {
        if (U) {
          requestAnimationFrame(W);
          var V = dc(h.deltaY / 2),
            fe = H(b.v - V);
          if (T && fe !== b.v + b.offset) {
            b.offset = fe - b.v;
            var w = dc((parseFloat(T && T._gsap.y) || 0) - b.offset);
            (T.style.transform =
              "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " +
              w +
              ", 0, 1)"),
              (T._gsap.y = w + "px"),
              (b.cacheID = He.cache),
              kl();
          }
          return !0;
        }
        b.offset && I(), (U = !0);
      },
      te,
      be,
      ve,
      ye,
      O = function () {
        J(),
          te.isActive() &&
            te.vars.scrollY > p &&
            (b() > p ? te.progress(1) && b(p) : te.resetTo("scrollY", p));
      };
    return (
      T && re.set(T, { y: "+=0" }),
      (a.ignoreCheck = function (G) {
        return (
          (oi && G.type === "touchmove" && oe()) ||
          (S > 1.05 && G.type !== "touchstart") ||
          h.isGesturing ||
          (G.touches && G.touches.length > 1)
        );
      }),
      (a.onPress = function () {
        U = !1;
        var G = S;
        (S = dc(((Ue.visualViewport && Ue.visualViewport.scale) || 1) / N)),
          te.pause(),
          G !== S && gh(g, S > 1.01 ? !0 : i ? !1 : "x"),
          (be = E()),
          (ve = b()),
          J(),
          (K = ar);
      }),
      (a.onRelease = a.onGestureStart =
        function (G, V) {
          if ((b.offset && I(), !V)) ye.restart(!0);
          else {
            He.cache++;
            var fe = X(),
              w,
              z;
            i &&
              ((w = E()),
              (z = w + (fe * 0.05 * -G.velocityX) / 0.227),
              (fe *= ey(E, w, z, il(g, Dn))),
              (te.vars.scrollX = R(z))),
              (w = b()),
              (z = w + (fe * 0.05 * -G.velocityY) / 0.227),
              (fe *= ey(b, w, z, il(g, Pt))),
              (te.vars.scrollY = H(z)),
              te.invalidate().duration(fe).play(0.01),
              ((oi && te.vars.scrollY >= p) || w >= p - 1) &&
                re.to({}, { onUpdate: O, duration: fe });
          }
          d && d(G);
        }),
      (a.onWheel = function () {
        te._ts && te.pause(), vn() - q > 1e3 && ((K = 0), (q = vn()));
      }),
      (a.onChange = function (G, V, fe, w, z) {
        if (
          (ar !== K && J(),
          V && i && E(R(w[2] === V ? be + (G.startX - G.x) : E() + V - w[1])),
          fe)
        ) {
          b.offset && I();
          var L = z[2] === fe,
            P = L ? ve + G.startY - G.y : b() + fe - z[1],
            ee = H(P);
          L && P !== ee && (ve += ee - P), b(ee);
        }
        (fe || V) && kl();
      }),
      (a.onEnable = function () {
        gh(g, i ? !1 : "x"),
          ze.addEventListener("refresh", O),
          nn(Ue, "resize", O),
          b.smooth &&
            ((b.target.style.scrollBehavior = "auto"),
            (b.smooth = E.smooth = !1)),
          Q.enable();
      }),
      (a.onDisable = function () {
        gh(g, !0),
          tn(Ue, "resize", O),
          ze.removeEventListener("refresh", O),
          Q.kill();
      }),
      (a.lockAxis = a.lockAxis !== !1),
      (h = new Bt(a)),
      (h.iOS = oi),
      oi && !b() && b(1),
      oi && re.ticker.add(nl),
      (ye = h._dc),
      (te = re.to(h, {
        ease: "power4",
        paused: !0,
        inherit: !1,
        scrollX: i ? "+=0.1" : "+=0",
        scrollY: "+=0.1",
        modifiers: {
          scrollY: Vv(b, b(), function () {
            return te.pause();
          }),
        },
        onUpdate: kl,
        onComplete: ye.vars.onComplete,
      })),
      h
    );
  };
ze.sort = function (f) {
  if (bn(f)) return Re.sort(f);
  var a = Ue.pageYOffset || 0;
  return (
    ze.getAll().forEach(function (r) {
      return (r._sortY = r.trigger
        ? a + r.trigger.getBoundingClientRect().top
        : r.start + Ue.innerHeight);
    }),
    Re.sort(
      f ||
        function (r, i) {
          return (
            (r.vars.refreshPriority || 0) * -1e6 +
            (r.vars.containerAnimation ? 1e6 : r._sortY) -
            ((i.vars.containerAnimation ? 1e6 : i._sortY) +
              (i.vars.refreshPriority || 0) * -1e6)
          );
        }
    )
  );
};
ze.observe = function (f) {
  return new Bt(f);
};
ze.normalizeScroll = function (f) {
  if (typeof f > "u") return wn;
  if (f === !0 && wn) return wn.enable();
  if (f === !1) {
    wn && wn.kill(), (wn = f);
    return;
  }
  var a = f instanceof Bt ? f : k3(f);
  return wn && wn.target === a.target && wn.kill(), lr(a.target) && (wn = a), a;
};
ze.core = {
  _getVelocityProp: Hh,
  _inputObserver: Xv,
  _scrollers: He,
  _proxies: rl,
  bridge: {
    ss: function () {
      Ua || rr("scrollStart"), (Ua = vn());
    },
    ref: function () {
      return yn;
    },
  },
};
Dv() && re.registerPlugin(ze);
ot.registerPlugin(ze);
const U3 = {
  "Order Confirmed": vh,
  "Allergy Filtering Applied": _i,
  "Vacuum-Sealed": T2,
  "Same-Day Shipping": Y2,
};
function H3() {
  const f = ge.useRef(null),
    a = ge.useRef(null),
    [r, i] = ge.useState(!1);
  return (
    ge.useEffect(() => {
      const s = f.current;
      if (!s) return;
      const o = new IntersectionObserver(
        ([d]) => {
          d.isIntersecting && (i(!0), o.unobserve(s));
        },
        { threshold: 0.2 }
      );
      return o.observe(s), () => o.disconnect();
    }, []),
    ge.useEffect(() => {
      if (r && a.current) {
        const s = a.current.querySelectorAll(".success-item");
        if (s.length === 0) return;
        const o = ot.context(() => {
          ot.fromTo(
            s,
            { opacity: 0, x: -30 },
            {
              opacity: 1,
              x: 0,
              duration: 0.6,
              stagger: 0.15,
              ease: "power3.out",
            }
          );
        }, f);
        return () => o.revert();
      }
    }, [r]),
    x.jsx("section", {
      "code-path": "src/sections/Success.tsx:66:5",
      ref: f,
      id: "success",
      className: "relative w-full py-20 lg:py-28",
      style: { backgroundColor: "var(--bp-bg-primary)" },
      children: x.jsx("div", {
        "code-path": "src/sections/Success.tsx:72:7",
        className: "container-large",
        children: x.jsxs("div", {
          "code-path": "src/sections/Success.tsx:73:9",
          ref: a,
          className: "max-w-3xl mx-auto",
          children: [
            x.jsxs("div", {
              "code-path": "src/sections/Success.tsx:78:11",
              className: "text-center mb-12",
              children: [
                x.jsx("div", {
                  "code-path": "src/sections/Success.tsx:79:13",
                  className:
                    "inline-flex items-center justify-center w-16 h-16 rounded-full mb-6",
                  style: {
                    backgroundColor: "rgba(34, 197, 94, 0.15)",
                    border: "2px solid rgba(34, 197, 94, 0.3)",
                  },
                  children: x.jsx(ho, {
                    "code-path": "src/sections/Success.tsx:86:15",
                    className: "w-8 h-8 text-green-500",
                  }),
                }),
                x.jsx("h2", {
                  "code-path": "src/sections/Success.tsx:88:13",
                  className: "text-h2 font-bold text-white mb-4",
                  style: { letterSpacing: "-0.02em" },
                  children: th.headline,
                }),
                x.jsx("p", {
                  "code-path": "src/sections/Success.tsx:94:13",
                  className: "text-lg",
                  style: { color: "var(--bp-text-secondary)" },
                  children: th.subheadline,
                }),
              ],
            }),
            x.jsx("div", {
              "code-path": "src/sections/Success.tsx:103:11",
              className: "space-y-4",
              children: th.deliverables.map((s, o) => {
                const d = U3[s.title] || ho;
                return x.jsxs(
                  "div",
                  {
                    "code-path": "src/sections/Success.tsx:107:17",
                    className:
                      "success-item opacity-0 flex items-start gap-4 p-5 rounded-xl",
                    style: {
                      backgroundColor: "var(--bp-bg-secondary)",
                      border: "1px solid var(--bp-border)",
                    },
                    children: [
                      x.jsx("div", {
                        "code-path": "src/sections/Success.tsx:115:19",
                        className:
                          "flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center",
                        style: { backgroundColor: "var(--bp-bg-tertiary)" },
                        children: x.jsx(d, {
                          "code-path": "src/sections/Success.tsx:119:21",
                          className: "w-6 h-6",
                          style: { color: "var(--bp-accent-orange)" },
                        }),
                      }),
                      x.jsxs("div", {
                        "code-path": "src/sections/Success.tsx:124:19",
                        children: [
                          x.jsx("h3", {
                            "code-path": "src/sections/Success.tsx:125:21",
                            className: "text-white font-semibold text-lg mb-1",
                            children: s.title,
                          }),
                          x.jsx("p", {
                            "code-path": "src/sections/Success.tsx:128:21",
                            className: "text-sm",
                            style: { color: "var(--bp-text-secondary)" },
                            children: s.description,
                          }),
                        ],
                      }),
                      x.jsx("div", {
                        "code-path": "src/sections/Success.tsx:135:19",
                        className: "flex-shrink-0 ml-auto",
                        children: x.jsx("div", {
                          "code-path": "src/sections/Success.tsx:136:21",
                          className:
                            "w-8 h-8 rounded-full flex items-center justify-center",
                          style: { backgroundColor: "rgba(34, 197, 94, 0.15)" },
                          children: x.jsx(ho, {
                            "code-path": "src/sections/Success.tsx:142:23",
                            className: "w-4 h-4 text-green-500",
                          }),
                        }),
                      }),
                    ],
                  },
                  o
                );
              }),
            }),
            x.jsxs("div", {
              "code-path": "src/sections/Success.tsx:151:11",
              className: "mt-10",
              children: [
                x.jsx("div", {
                  "code-path": "src/sections/Success.tsx:152:13",
                  className: "h-2 rounded-full overflow-hidden",
                  style: { backgroundColor: "var(--bp-bg-secondary)" },
                  children: x.jsx("div", {
                    "code-path": "src/sections/Success.tsx:156:15",
                    className:
                      "h-full rounded-full transition-all duration-1000 ease-out",
                    style: {
                      width: r ? "100%" : "0%",
                      background:
                        "linear-gradient(to right, var(--bp-accent-orange), var(--bp-accent-gold))",
                    },
                  }),
                }),
                x.jsxs("div", {
                  "code-path": "src/sections/Success.tsx:164:13",
                  className: "flex justify-between mt-3",
                  children: [
                    x.jsx("span", {
                      "code-path": "src/sections/Success.tsx:165:15",
                      className: "text-xs font-mono uppercase tracking-wider",
                      style: { color: "var(--bp-text-muted)" },
                      children: "Order Confirmed",
                    }),
                    x.jsx("span", {
                      "code-path": "src/sections/Success.tsx:171:15",
                      className: "text-xs font-mono uppercase tracking-wider",
                      style: { color: "var(--bp-text-muted)" },
                      children: "Shipping Today",
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
      }),
    })
  );
}
ot.registerPlugin(ze);
const B3 = { Scissors: M2, AlertTriangle: bh, XCircle: o2 };
function Y3() {
  const f = ge.useRef(null),
    [a, r] = ge.useState(!1);
  return (
    ge.useEffect(() => {
      const i = f.current;
      if (!i) return;
      const s = new IntersectionObserver(
        ([o]) => {
          o.isIntersecting && (r(!0), s.unobserve(i));
        },
        { threshold: 0.15 }
      );
      return s.observe(i), () => s.disconnect();
    }, []),
    ge.useEffect(() => {
      if (a) {
        const i = ot.context(() => {
          ot.fromTo(
            ".problem-card",
            { opacity: 0, y: 40 },
            {
              opacity: 1,
              y: 0,
              duration: 0.7,
              stagger: 0.15,
              ease: "power3.out",
            }
          ),
            ot.fromTo(
              ".problem-agitation",
              { opacity: 0, y: 30 },
              {
                opacity: 1,
                y: 0,
                duration: 0.8,
                delay: 0.6,
                ease: "power3.out",
              }
            ),
            ot.fromTo(
              ".problem-transition",
              { opacity: 0, y: 30 },
              {
                opacity: 1,
                y: 0,
                duration: 0.8,
                delay: 0.8,
                ease: "power3.out",
              }
            );
        }, f);
        return () => i.revert();
      }
    }, [a]),
    x.jsxs("section", {
      "code-path": "src/sections/Problem.tsx:85:5",
      ref: f,
      id: "problem",
      className: "relative w-full py-20 lg:py-28",
      style: { backgroundColor: "var(--bp-bg-primary)" },
      children: [
        x.jsx("div", {
          "code-path": "src/sections/Problem.tsx:92:7",
          className: "absolute inset-0 opacity-5",
          style: {
            backgroundImage:
              "radial-gradient(circle at 1px 1px, var(--bp-accent-orange) 1px, transparent 0)",
            backgroundSize: "40px 40px",
          },
        }),
        x.jsxs("div", {
          "code-path": "src/sections/Problem.tsx:100:7",
          className: "container-large relative z-10",
          children: [
            x.jsxs("div", {
              "code-path": "src/sections/Problem.tsx:102:9",
              className: "text-center max-w-3xl mx-auto mb-16",
              children: [
                x.jsx("span", {
                  "code-path": "src/sections/Problem.tsx:103:11",
                  className:
                    "inline-block px-3 py-1 rounded-full text-xs font-mono uppercase tracking-wider mb-4",
                  style: {
                    backgroundColor: "rgba(239, 68, 68, 0.15)",
                    color: "#EF4444",
                  },
                  children: "The Problem",
                }),
                x.jsx("h2", {
                  "code-path": "src/sections/Problem.tsx:112:11",
                  className: "text-h2 font-bold text-white",
                  style: { letterSpacing: "-0.02em" },
                  children: Pu.headline,
                }),
              ],
            }),
            x.jsx("div", {
              "code-path": "src/sections/Problem.tsx:121:9",
              className: "grid md:grid-cols-3 gap-6 mb-16",
              children: Pu.problems.map((i, s) => {
                const o = B3[i.icon] || bh;
                return x.jsxs(
                  "div",
                  {
                    "code-path": "src/sections/Problem.tsx:125:15",
                    className: "problem-card opacity-0 p-6 lg:p-8 rounded-2xl",
                    style: {
                      backgroundColor: "var(--bp-bg-secondary)",
                      border: "1px solid var(--bp-border)",
                    },
                    children: [
                      x.jsx("div", {
                        "code-path": "src/sections/Problem.tsx:133:17",
                        className:
                          "w-14 h-14 rounded-xl flex items-center justify-center mb-6",
                        style: {
                          backgroundColor: "rgba(239, 68, 68, 0.15)",
                          border: "1px solid rgba(239, 68, 68, 0.2)",
                        },
                        children: x.jsx(o, {
                          "code-path": "src/sections/Problem.tsx:140:19",
                          className: "w-7 h-7 text-red-500",
                        }),
                      }),
                      x.jsx("h3", {
                        "code-path": "src/sections/Problem.tsx:142:17",
                        className: "text-xl font-bold text-white mb-3",
                        children: i.title,
                      }),
                      x.jsx("p", {
                        "code-path": "src/sections/Problem.tsx:145:17",
                        className: "text-base leading-relaxed",
                        style: { color: "var(--bp-text-secondary)" },
                        children: i.description,
                      }),
                    ],
                  },
                  s
                );
              }),
            }),
            x.jsx("div", {
              "code-path": "src/sections/Problem.tsx:157:9",
              className:
                "problem-agitation opacity-0 max-w-4xl mx-auto p-8 rounded-2xl mb-10",
              style: {
                background:
                  "linear-gradient(135deg, rgba(239, 68, 68, 0.1) 0%, rgba(239, 68, 68, 0.05) 100%)",
                border: "1px solid rgba(239, 68, 68, 0.2)",
              },
              children: x.jsxs("div", {
                "code-path": "src/sections/Problem.tsx:164:11",
                className: "flex items-start gap-4",
                children: [
                  x.jsx(bh, {
                    "code-path": "src/sections/Problem.tsx:165:13",
                    className: "w-6 h-6 text-red-500 flex-shrink-0 mt-1",
                  }),
                  x.jsx("p", {
                    "code-path": "src/sections/Problem.tsx:166:13",
                    className: "text-lg leading-relaxed",
                    style: { color: "var(--bp-text-secondary)" },
                    children: Pu.agitation,
                  }),
                ],
              }),
            }),
            x.jsxs("div", {
              "code-path": "src/sections/Problem.tsx:176:9",
              className:
                "problem-transition opacity-0 max-w-4xl mx-auto text-center",
              children: [
                x.jsxs("div", {
                  "code-path": "src/sections/Problem.tsx:179:11",
                  className:
                    "inline-flex items-center gap-3 px-6 py-4 rounded-xl mb-6",
                  style: {
                    backgroundColor: "var(--bp-bg-secondary)",
                    border: "1px solid var(--bp-border)",
                  },
                  children: [
                    x.jsx(yy, {
                      "code-path": "src/sections/Problem.tsx:186:13",
                      className: "w-5 h-5",
                      style: { color: "var(--bp-accent-orange)" },
                    }),
                    x.jsx("span", {
                      "code-path": "src/sections/Problem.tsx:190:13",
                      className: "text-white font-medium",
                      children: "Our Solution",
                    }),
                  ],
                }),
                x.jsx("p", {
                  "code-path": "src/sections/Problem.tsx:192:11",
                  className: "text-xl leading-relaxed max-w-3xl mx-auto",
                  style: { color: "var(--bp-text-secondary)" },
                  children: Pu.transition,
                }),
              ],
            }),
          ],
        }),
      ],
    })
  );
}
ot.registerPlugin(ze);
const q3 = { Shield: _i, Settings: O2, RefreshCw: E2, Headphones: y2 };
function L3() {
  const f = ge.useRef(null),
    [a, r] = ge.useState(!1);
  return (
    ge.useEffect(() => {
      const i = f.current;
      if (!i) return;
      const s = new IntersectionObserver(
        ([o]) => {
          o.isIntersecting && (r(!0), s.unobserve(i));
        },
        { threshold: 0.1 }
      );
      return s.observe(i), () => s.disconnect();
    }, []),
    ge.useEffect(() => {
      if (a) {
        const i = ot.context(() => {
          ot.fromTo(
            ".value-tier",
            { opacity: 0, y: 40 },
            {
              opacity: 1,
              y: 0,
              duration: 0.6,
              stagger: 0.1,
              ease: "power3.out",
            }
          ),
            ot.fromTo(
              ".pricing-table",
              { opacity: 0, y: 40 },
              {
                opacity: 1,
                y: 0,
                duration: 0.8,
                delay: 0.4,
                ease: "power3.out",
              }
            );
        }, f);
        return () => i.revert();
      }
    }, [a]),
    x.jsx("section", {
      "code-path": "src/sections/ValueStack.tsx:74:5",
      ref: f,
      id: "value",
      className: "relative w-full py-20 lg:py-28",
      style: { backgroundColor: "var(--bp-bg-secondary)" },
      children: x.jsxs("div", {
        "code-path": "src/sections/ValueStack.tsx:80:7",
        className: "container-large",
        children: [
          x.jsxs("div", {
            "code-path": "src/sections/ValueStack.tsx:82:9",
            className: "text-center max-w-3xl mx-auto mb-16",
            children: [
              x.jsx("span", {
                "code-path": "src/sections/ValueStack.tsx:83:11",
                className:
                  "inline-block px-3 py-1 rounded-full text-xs font-mono uppercase tracking-wider mb-4",
                style: {
                  backgroundColor: "rgba(255, 95, 31, 0.15)",
                  color: "var(--bp-accent-orange)",
                },
                children: "The Value Stack",
              }),
              x.jsx("h2", {
                "code-path": "src/sections/ValueStack.tsx:92:11",
                className: "text-h2 font-bold text-white",
                style: { letterSpacing: "-0.02em" },
                children: Vr.headline,
              }),
            ],
          }),
          x.jsx("div", {
            "code-path": "src/sections/ValueStack.tsx:101:9",
            className: "grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16",
            children: Vr.tiers.map((i, s) => {
              const o = q3[i.icon] || _i;
              return x.jsxs(
                "div",
                {
                  "code-path": "src/sections/ValueStack.tsx:105:15",
                  className:
                    "value-tier opacity-0 p-6 rounded-xl group hover:scale-[1.02] transition-transform duration-300",
                  style: {
                    backgroundColor: "var(--bp-bg-tertiary)",
                    border: "1px solid var(--bp-border)",
                  },
                  children: [
                    x.jsx("div", {
                      "code-path": "src/sections/ValueStack.tsx:113:17",
                      className:
                        "w-12 h-12 rounded-lg flex items-center justify-center mb-4 transition-colors duration-300",
                      style: { backgroundColor: "var(--bp-bg-primary)" },
                      children: x.jsx(o, {
                        "code-path": "src/sections/ValueStack.tsx:119:19",
                        className: "w-6 h-6 transition-colors duration-300",
                        style: { color: "var(--bp-accent-orange)" },
                      }),
                    }),
                    x.jsx("h3", {
                      "code-path": "src/sections/ValueStack.tsx:124:17",
                      className: "text-lg font-bold text-white mb-2",
                      children: i.title,
                    }),
                    x.jsx("p", {
                      "code-path": "src/sections/ValueStack.tsx:127:17",
                      className: "text-sm leading-relaxed",
                      style: { color: "var(--bp-text-secondary)" },
                      children: i.description,
                    }),
                  ],
                },
                s
              );
            }),
          }),
          x.jsxs("div", {
            "code-path": "src/sections/ValueStack.tsx:139:9",
            className: "grid lg:grid-cols-2 gap-8 items-center",
            children: [
              x.jsxs("div", {
                "code-path": "src/sections/ValueStack.tsx:141:11",
                className: "pricing-table opacity-0 p-8 rounded-2xl",
                style: {
                  backgroundColor: "var(--bp-bg-tertiary)",
                  border: "1px solid var(--bp-border)",
                },
                children: [
                  x.jsxs("h3", {
                    "code-path": "src/sections/ValueStack.tsx:148:13",
                    className:
                      "text-lg font-bold text-white mb-6 flex items-center gap-2",
                    children: [
                      x.jsx(j2, {
                        "code-path": "src/sections/ValueStack.tsx:151:15",
                        className: "w-5 h-5",
                        style: { color: "var(--bp-accent-gold)" },
                      }),
                      "What's Included",
                    ],
                  }),
                  x.jsx("table", {
                    "code-path": "src/sections/ValueStack.tsx:158:13",
                    className: "w-full",
                    children: x.jsxs("tbody", {
                      "code-path": "src/sections/ValueStack.tsx:159:15",
                      children: [
                        Vr.pricing.map((i, s) =>
                          x.jsxs(
                            "tr",
                            {
                              "code-path": "src/sections/ValueStack.tsx:161:19",
                              className: "border-b",
                              style: { borderColor: "var(--bp-border)" },
                              children: [
                                x.jsx("td", {
                                  "code-path":
                                    "src/sections/ValueStack.tsx:166:21",
                                  className: "py-4 text-sm",
                                  style: { color: "var(--bp-text-secondary)" },
                                  children: i.item,
                                }),
                                x.jsx("td", {
                                  "code-path":
                                    "src/sections/ValueStack.tsx:172:21",
                                  className:
                                    "py-4 text-right text-sm font-mono line-through",
                                  style: { color: "var(--bp-text-muted)" },
                                  children: i.value,
                                }),
                              ],
                            },
                            s
                          )
                        ),
                        x.jsxs("tr", {
                          "code-path": "src/sections/ValueStack.tsx:180:17",
                          children: [
                            x.jsx("td", {
                              "code-path": "src/sections/ValueStack.tsx:181:19",
                              className: "py-4 text-white font-semibold",
                              children: "Total Value",
                            }),
                            x.jsx("td", {
                              "code-path": "src/sections/ValueStack.tsx:186:19",
                              className:
                                "py-4 text-right font-mono font-bold text-white",
                              children: Vr.totalValue,
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                  x.jsxs("div", {
                    "code-path": "src/sections/ValueStack.tsx:196:13",
                    className: "mt-6 p-6 rounded-xl text-center",
                    style: {
                      background:
                        "linear-gradient(135deg, var(--bp-accent-orange) 0%, #E54D00 100%)",
                    },
                    children: [
                      x.jsx("p", {
                        "code-path": "src/sections/ValueStack.tsx:202:15",
                        className:
                          "text-sm font-mono uppercase tracking-wider mb-2",
                        style: { color: "rgba(255,255,255,0.8)" },
                        children: "Your Price Today (35% Off)",
                      }),
                      x.jsx("p", {
                        "code-path": "src/sections/ValueStack.tsx:208:15",
                        className: "text-4xl font-black text-white",
                        children: Vr.yourPrice,
                      }),
                      x.jsxs("p", {
                        "code-path": "src/sections/ValueStack.tsx:211:15",
                        className: "text-sm mt-2",
                        style: { color: "rgba(255,255,255,0.8)" },
                        children: ["Save ", Vr.savings, " vs. Retail"],
                      }),
                    ],
                  }),
                  x.jsxs("a", {
                    "code-path": "src/sections/ValueStack.tsx:220:13",
                    href: "#cta",
                    className: "btn-gold w-full mt-6 text-center",
                    children: [
                      x.jsx(ho, {
                        "code-path": "src/sections/ValueStack.tsx:224:15",
                        className: "w-5 h-5 mr-2",
                      }),
                      "Claim Your Custom Box",
                    ],
                  }),
                ],
              }),
              x.jsxs("div", {
                "code-path": "src/sections/ValueStack.tsx:230:11",
                className: "pricing-table opacity-0 relative",
                children: [
                  x.jsxs("div", {
                    "code-path": "src/sections/ValueStack.tsx:233:13",
                    className:
                      "relative rounded-2xl overflow-hidden aspect-square",
                    style: {
                      backgroundColor: "var(--bp-bg-tertiary)",
                      border: "1px solid var(--bp-border)",
                    },
                    children: [
                      x.jsx("img", {
                        "code-path": "src/sections/ValueStack.tsx:240:15",
                        src: Px.box,
                        alt: "Ballistic Pet Custom Box",
                        className: "w-full h-full object-cover",
                      }),
                      x.jsxs("div", {
                        "code-path": "src/sections/ValueStack.tsx:246:15",
                        className: "absolute top-4 left-4 flex flex-col gap-2",
                        children: [
                          x.jsx("span", {
                            "code-path": "src/sections/ValueStack.tsx:247:17",
                            className:
                              "px-3 py-1 rounded-full text-xs font-bold",
                            style: {
                              backgroundColor: "var(--bp-accent-orange)",
                              color: "white",
                            },
                            children: "35% OFF",
                          }),
                          x.jsx("span", {
                            "code-path": "src/sections/ValueStack.tsx:256:17",
                            className:
                              "px-3 py-1 rounded-full text-xs font-bold",
                            style: {
                              backgroundColor: "var(--bp-accent-gold)",
                              color: "black",
                            },
                            children: "FREE SHIPPING",
                          }),
                        ],
                      }),
                    ],
                  }),
                  x.jsx("div", {
                    "code-path": "src/sections/ValueStack.tsx:269:13",
                    className: "grid grid-cols-3 gap-3 mt-4",
                    children: [
                      { label: "450 lbs", desc: "Bite Force" },
                      { label: "30-Day", desc: "Guarantee" },
                      { label: "24/7", desc: "Support" },
                    ].map((i, s) =>
                      x.jsxs(
                        "div",
                        {
                          "code-path": "src/sections/ValueStack.tsx:275:17",
                          className: "text-center p-3 rounded-lg",
                          style: {
                            backgroundColor: "var(--bp-bg-tertiary)",
                            border: "1px solid var(--bp-border)",
                          },
                          children: [
                            x.jsx("p", {
                              "code-path": "src/sections/ValueStack.tsx:283:19",
                              className: "text-lg font-bold",
                              style: { color: "var(--bp-accent-orange)" },
                              children: i.label,
                            }),
                            x.jsx("p", {
                              "code-path": "src/sections/ValueStack.tsx:289:19",
                              className: "text-xs",
                              style: { color: "var(--bp-text-muted)" },
                              children: i.desc,
                            }),
                          ],
                        },
                        s
                      )
                    ),
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
    })
  );
}
ot.registerPlugin(ze);
function G3() {
  const f = ge.useRef(null),
    [a, r] = ge.useState(!1),
    [i, s] = ge.useState(0);
  ge.useEffect(() => {
    const h = f.current;
    if (!h) return;
    const p = new IntersectionObserver(
      ([g]) => {
        g.isIntersecting && (r(!0), p.unobserve(h));
      },
      { threshold: 0.1 }
    );
    return p.observe(h), () => p.disconnect();
  }, []),
    ge.useEffect(() => {
      if (a) {
        const h = ot.context(() => {
          ot.fromTo(
            ".testimonial-card",
            { opacity: 0, y: 40 },
            {
              opacity: 1,
              y: 0,
              duration: 0.7,
              stagger: 0.15,
              ease: "power3.out",
            }
          );
        }, f);
        return () => h.revert();
      }
    }, [a]),
    ge.useEffect(() => {
      const h = setInterval(() => {
        s((p) => (p + 1) % Ml.testimonials.length);
      }, 6e3);
      return () => clearInterval(h);
    }, []);
  const o = () => {
      s((h) => (h + 1) % Ml.testimonials.length);
    },
    d = () => {
      s((h) => (h - 1 + Ml.testimonials.length) % Ml.testimonials.length);
    };
  return x.jsxs("section", {
    "code-path": "src/sections/Testimonials.tsx:73:5",
    ref: f,
    id: "testimonials",
    className: "relative w-full py-20 lg:py-28",
    style: { backgroundColor: "var(--bp-bg-primary)" },
    children: [
      x.jsx("div", {
        "code-path": "src/sections/Testimonials.tsx:80:7",
        className: "absolute inset-0 opacity-30",
        style: {
          background:
            "radial-gradient(ellipse at center, rgba(255, 95, 31, 0.1) 0%, transparent 70%)",
        },
      }),
      x.jsxs("div", {
        "code-path": "src/sections/Testimonials.tsx:87:7",
        className: "container-large relative z-10",
        children: [
          x.jsxs("div", {
            "code-path": "src/sections/Testimonials.tsx:89:9",
            className: "text-center max-w-3xl mx-auto mb-16",
            children: [
              x.jsx("span", {
                "code-path": "src/sections/Testimonials.tsx:90:11",
                className:
                  "inline-block px-3 py-1 rounded-full text-xs font-mono uppercase tracking-wider mb-4",
                style: {
                  backgroundColor: "rgba(212, 175, 55, 0.15)",
                  color: "var(--bp-accent-gold)",
                },
                children: Ml.label,
              }),
              x.jsx("h2", {
                "code-path": "src/sections/Testimonials.tsx:99:11",
                className: "text-h2 font-bold text-white",
                style: { letterSpacing: "-0.02em" },
                children: Ml.headline,
              }),
            ],
          }),
          x.jsx("div", {
            "code-path": "src/sections/Testimonials.tsx:108:9",
            className: "hidden lg:grid lg:grid-cols-3 gap-6 mb-12",
            children: Ml.testimonials.map((h, p) =>
              x.jsxs(
                "div",
                {
                  "code-path": "src/sections/Testimonials.tsx:110:13",
                  className:
                    "testimonial-card opacity-0 p-8 rounded-2xl flex flex-col",
                  style: {
                    backgroundColor: "var(--bp-bg-secondary)",
                    border: "1px solid var(--bp-border)",
                  },
                  children: [
                    x.jsx(z2, {
                      "code-path": "src/sections/Testimonials.tsx:119:15",
                      className: "w-10 h-10 mb-6 opacity-20",
                      style: { color: "var(--bp-accent-orange)" },
                    }),
                    x.jsx("div", {
                      "code-path": "src/sections/Testimonials.tsx:125:15",
                      className: "flex gap-1 mb-4",
                      children: [...Array(h.rating)].map((g, y) =>
                        x.jsx(
                          _h,
                          {
                            "code-path": "src/sections/Testimonials.tsx:127:19",
                            className: "w-4 h-4 fill-current",
                            style: { color: "var(--bp-accent-gold)" },
                          },
                          y
                        )
                      ),
                    }),
                    x.jsxs("p", {
                      "code-path": "src/sections/Testimonials.tsx:136:15",
                      className: "text-base leading-relaxed mb-6 flex-grow",
                      style: { color: "var(--bp-text-secondary)" },
                      children: ['"', h.quote, '"'],
                    }),
                    x.jsx("div", {
                      "code-path": "src/sections/Testimonials.tsx:144:15",
                      className:
                        "inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold mb-6 w-fit",
                      style: {
                        backgroundColor: "rgba(34, 197, 94, 0.15)",
                        color: "#22C55E",
                      },
                      children: h.highlight,
                    }),
                    x.jsxs("div", {
                      "code-path": "src/sections/Testimonials.tsx:155:15",
                      className: "flex items-center gap-4 mt-auto",
                      children: [
                        x.jsx("img", {
                          "code-path": "src/sections/Testimonials.tsx:156:17",
                          src: h.image,
                          alt: h.author,
                          className: "w-12 h-12 rounded-full object-cover",
                          style: { border: "2px solid var(--bp-border)" },
                        }),
                        x.jsxs("div", {
                          "code-path": "src/sections/Testimonials.tsx:162:17",
                          children: [
                            x.jsx("p", {
                              "code-path":
                                "src/sections/Testimonials.tsx:163:19",
                              className: "text-white font-semibold",
                              children: h.author,
                            }),
                            x.jsx("p", {
                              "code-path":
                                "src/sections/Testimonials.tsx:164:19",
                              className: "text-sm",
                              style: { color: "var(--bp-text-muted)" },
                              children: h.role,
                            }),
                          ],
                        }),
                        x.jsx("img", {
                          "code-path": "src/sections/Testimonials.tsx:171:17",
                          src: h.dogImage,
                          alt: "Dog",
                          className:
                            "w-10 h-10 rounded-full object-cover ml-auto",
                          style: {
                            border: "2px solid var(--bp-accent-orange)",
                          },
                        }),
                      ],
                    }),
                  ],
                },
                p
              )
            ),
          }),
          x.jsxs("div", {
            "code-path": "src/sections/Testimonials.tsx:183:9",
            className: "lg:hidden relative",
            children: [
              x.jsx("div", {
                "code-path": "src/sections/Testimonials.tsx:184:11",
                className: "overflow-hidden",
                children: x.jsx("div", {
                  "code-path": "src/sections/Testimonials.tsx:185:13",
                  className: "flex transition-transform duration-500 ease-out",
                  style: { transform: `translateX(-${i * 100}%)` },
                  children: Ml.testimonials.map((h, p) =>
                    x.jsx(
                      "div",
                      {
                        "code-path": "src/sections/Testimonials.tsx:190:17",
                        className: "w-full flex-shrink-0 px-4",
                        children: x.jsxs("div", {
                          "code-path": "src/sections/Testimonials.tsx:194:19",
                          className: "p-6 rounded-2xl",
                          style: {
                            backgroundColor: "var(--bp-bg-secondary)",
                            border: "1px solid var(--bp-border)",
                          },
                          children: [
                            x.jsx("div", {
                              "code-path":
                                "src/sections/Testimonials.tsx:202:21",
                              className: "flex gap-1 mb-4",
                              children: [...Array(h.rating)].map((g, y) =>
                                x.jsx(
                                  _h,
                                  {
                                    "code-path":
                                      "src/sections/Testimonials.tsx:204:25",
                                    className: "w-4 h-4 fill-current",
                                    style: { color: "var(--bp-accent-gold)" },
                                  },
                                  y
                                )
                              ),
                            }),
                            x.jsxs("p", {
                              "code-path":
                                "src/sections/Testimonials.tsx:213:21",
                              className: "text-sm leading-relaxed mb-4",
                              style: { color: "var(--bp-text-secondary)" },
                              children: ['"', h.quote, '"'],
                            }),
                            x.jsx("div", {
                              "code-path":
                                "src/sections/Testimonials.tsx:221:21",
                              className:
                                "inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold mb-4",
                              style: {
                                backgroundColor: "rgba(34, 197, 94, 0.15)",
                                color: "#22C55E",
                              },
                              children: h.highlight,
                            }),
                            x.jsxs("div", {
                              "code-path":
                                "src/sections/Testimonials.tsx:232:21",
                              className: "flex items-center gap-3",
                              children: [
                                x.jsx("img", {
                                  "code-path":
                                    "src/sections/Testimonials.tsx:233:23",
                                  src: h.image,
                                  alt: h.author,
                                  className:
                                    "w-10 h-10 rounded-full object-cover",
                                  style: {
                                    border: "2px solid var(--bp-border)",
                                  },
                                }),
                                x.jsxs("div", {
                                  "code-path":
                                    "src/sections/Testimonials.tsx:239:23",
                                  children: [
                                    x.jsx("p", {
                                      "code-path":
                                        "src/sections/Testimonials.tsx:240:25",
                                      className:
                                        "text-white font-semibold text-sm",
                                      children: h.author,
                                    }),
                                    x.jsx("p", {
                                      "code-path":
                                        "src/sections/Testimonials.tsx:241:25",
                                      className: "text-xs",
                                      style: { color: "var(--bp-text-muted)" },
                                      children: h.role,
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                      },
                      p
                    )
                  ),
                }),
              }),
              x.jsxs("div", {
                "code-path": "src/sections/Testimonials.tsx:256:11",
                className: "flex items-center justify-center gap-4 mt-6",
                children: [
                  x.jsx("button", {
                    "code-path": "src/sections/Testimonials.tsx:257:13",
                    onClick: d,
                    className:
                      "w-10 h-10 rounded-full flex items-center justify-center transition-colors",
                    style: {
                      backgroundColor: "var(--bp-bg-secondary)",
                      border: "1px solid var(--bp-border)",
                    },
                    children: x.jsx(s2, {
                      "code-path": "src/sections/Testimonials.tsx:265:15",
                      className: "w-5 h-5 text-white",
                    }),
                  }),
                  x.jsx("div", {
                    "code-path": "src/sections/Testimonials.tsx:269:13",
                    className: "flex gap-2",
                    children: Ml.testimonials.map((h, p) =>
                      x.jsx(
                        "button",
                        {
                          "code-path": "src/sections/Testimonials.tsx:271:17",
                          onClick: () => s(p),
                          className:
                            "w-2 h-2 rounded-full transition-all duration-300",
                          style: {
                            backgroundColor:
                              p === i
                                ? "var(--bp-accent-orange)"
                                : "var(--bp-border)",
                            width: p === i ? "1.5rem" : "0.5rem",
                          },
                        },
                        p
                      )
                    ),
                  }),
                  x.jsx("button", {
                    "code-path": "src/sections/Testimonials.tsx:283:13",
                    onClick: o,
                    className:
                      "w-10 h-10 rounded-full flex items-center justify-center transition-colors",
                    style: {
                      backgroundColor: "var(--bp-bg-secondary)",
                      border: "1px solid var(--bp-border)",
                    },
                    children: x.jsx(vy, {
                      "code-path": "src/sections/Testimonials.tsx:291:15",
                      className: "w-5 h-5 text-white",
                    }),
                  }),
                ],
              }),
            ],
          }),
          x.jsx("div", {
            "code-path": "src/sections/Testimonials.tsx:297:9",
            className: "mt-16 grid grid-cols-2 md:grid-cols-4 gap-6",
            children: [
              { value: "12,500+", label: "5-Star Reviews" },
              { value: "8.4M+", label: "Happy Dogs" },
              { value: "$242", label: "Avg. Annual Savings" },
              { value: "450", label: "Lbs Bite Force" },
            ].map((h, p) =>
              x.jsxs(
                "div",
                {
                  "code-path": "src/sections/Testimonials.tsx:306:13",
                  className:
                    "testimonial-card opacity-0 text-center p-6 rounded-xl",
                  style: {
                    backgroundColor: "var(--bp-bg-secondary)",
                    border: "1px solid var(--bp-border)",
                  },
                  children: [
                    x.jsx("p", {
                      "code-path": "src/sections/Testimonials.tsx:314:15",
                      className: "text-2xl md:text-3xl font-black mb-1",
                      style: { color: "var(--bp-accent-orange)" },
                      children: h.value,
                    }),
                    x.jsx("p", {
                      "code-path": "src/sections/Testimonials.tsx:320:15",
                      className: "text-xs font-mono uppercase tracking-wider",
                      style: { color: "var(--bp-text-muted)" },
                      children: h.label,
                    }),
                  ],
                },
                p
              )
            ),
          }),
        ],
      }),
    ],
  });
}
ot.registerPlugin(ze);
const V3 = { "01": _y, "02": F2, "03": xy, "04": h2 };
function X3() {
  const f = ge.useRef(null),
    [a, r] = ge.useState(!1),
    [i, s] = ge.useState(0);
  return (
    ge.useEffect(() => {
      const o = f.current;
      if (!o) return;
      const d = new IntersectionObserver(
        ([h]) => {
          h.isIntersecting && (r(!0), d.unobserve(o));
        },
        { threshold: 0.1 }
      );
      return d.observe(o), () => d.disconnect();
    }, []),
    ge.useEffect(() => {
      if (a) {
        const o = ot.context(() => {
          ot.fromTo(
            ".transformation-stage",
            { opacity: 0, x: -40 },
            {
              opacity: 1,
              x: 0,
              duration: 0.7,
              stagger: 0.2,
              ease: "power3.out",
            }
          );
        }, f);
        return () => o.revert();
      }
    }, [a]),
    x.jsx("section", {
      "code-path": "src/sections/Transformation.tsx:63:5",
      ref: f,
      id: "transformation",
      className: "relative w-full py-20 lg:py-28",
      style: { backgroundColor: "var(--bp-bg-secondary)" },
      children: x.jsxs("div", {
        "code-path": "src/sections/Transformation.tsx:69:7",
        className: "container-large",
        children: [
          x.jsxs("div", {
            "code-path": "src/sections/Transformation.tsx:71:9",
            className: "text-center max-w-3xl mx-auto mb-16",
            children: [
              x.jsx("span", {
                "code-path": "src/sections/Transformation.tsx:72:11",
                className:
                  "inline-block px-3 py-1 rounded-full text-xs font-mono uppercase tracking-wider mb-4",
                style: {
                  backgroundColor: "rgba(34, 197, 94, 0.15)",
                  color: "#22C55E",
                },
                children: "Your Journey",
              }),
              x.jsx("h2", {
                "code-path": "src/sections/Transformation.tsx:81:11",
                className: "text-h2 font-bold text-white",
                style: { letterSpacing: "-0.02em" },
                children: _1.headline,
              }),
            ],
          }),
          x.jsx("div", {
            "code-path": "src/sections/Transformation.tsx:90:9",
            className: "max-w-4xl mx-auto",
            children: x.jsxs("div", {
              "code-path": "src/sections/Transformation.tsx:91:11",
              className: "relative",
              children: [
                x.jsx("div", {
                  "code-path": "src/sections/Transformation.tsx:93:13",
                  className:
                    "hidden lg:block absolute left-8 top-0 bottom-0 w-px",
                  style: { backgroundColor: "var(--bp-border)" },
                }),
                x.jsx("div", {
                  "code-path": "src/sections/Transformation.tsx:99:13",
                  className: "space-y-6 lg:space-y-8",
                  children: _1.stages.map((o, d) => {
                    const h = V3[o.number] || _y,
                      p = i === d;
                    return x.jsxs(
                      "div",
                      {
                        "code-path": "src/sections/Transformation.tsx:105:19",
                        className:
                          "transformation-stage opacity-0 relative lg:pl-20",
                        onMouseEnter: () => s(d),
                        children: [
                          x.jsx("div", {
                            "code-path":
                              "src/sections/Transformation.tsx:111:21",
                            className:
                              "hidden lg:flex absolute left-0 w-16 h-16 rounded-full items-center justify-center z-10 transition-all duration-300",
                            style: {
                              backgroundColor: p
                                ? "var(--bp-accent-orange)"
                                : "var(--bp-bg-tertiary)",
                              border: `2px solid ${
                                p
                                  ? "var(--bp-accent-orange)"
                                  : "var(--bp-border)"
                              }`,
                              boxShadow: p
                                ? "0 0 20px rgba(255, 95, 31, 0.4)"
                                : "none",
                            },
                            children: x.jsx("span", {
                              "code-path":
                                "src/sections/Transformation.tsx:119:23",
                              className: "text-lg font-black",
                              style: {
                                color: p ? "white" : "var(--bp-text-muted)",
                              },
                              children: o.number,
                            }),
                          }),
                          x.jsx("div", {
                            "code-path":
                              "src/sections/Transformation.tsx:128:21",
                            className:
                              "p-6 lg:p-8 rounded-2xl transition-all duration-300",
                            style: {
                              backgroundColor: "var(--bp-bg-tertiary)",
                              border: `1px solid ${
                                p
                                  ? "var(--bp-accent-orange)"
                                  : "var(--bp-border)"
                              }`,
                              boxShadow: p
                                ? "0 10px 40px rgba(0,0,0,0.3)"
                                : "none",
                            },
                            children: x.jsxs("div", {
                              "code-path":
                                "src/sections/Transformation.tsx:136:23",
                              className:
                                "flex flex-col lg:flex-row lg:items-start gap-4 lg:gap-6",
                              children: [
                                x.jsx("div", {
                                  "code-path":
                                    "src/sections/Transformation.tsx:138:25",
                                  className:
                                    "lg:hidden w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0",
                                  style: {
                                    backgroundColor: p
                                      ? "var(--bp-accent-orange)"
                                      : "var(--bp-bg-primary)",
                                    border: `2px solid ${
                                      p
                                        ? "var(--bp-accent-orange)"
                                        : "var(--bp-border)"
                                    }`,
                                  },
                                  children: x.jsx("span", {
                                    "code-path":
                                      "src/sections/Transformation.tsx:145:27",
                                    className: "text-sm font-black",
                                    style: {
                                      color: p
                                        ? "white"
                                        : "var(--bp-text-muted)",
                                    },
                                    children: o.number,
                                  }),
                                }),
                                x.jsxs("div", {
                                  "code-path":
                                    "src/sections/Transformation.tsx:153:25",
                                  className: "flex-grow",
                                  children: [
                                    x.jsxs("div", {
                                      "code-path":
                                        "src/sections/Transformation.tsx:155:27",
                                      className:
                                        "flex flex-wrap items-center gap-3 mb-3",
                                      children: [
                                        x.jsx("h3", {
                                          "code-path":
                                            "src/sections/Transformation.tsx:156:29",
                                          className:
                                            "text-xl lg:text-2xl font-bold text-white",
                                          children: o.title,
                                        }),
                                        x.jsx("span", {
                                          "code-path":
                                            "src/sections/Transformation.tsx:159:29",
                                          className:
                                            "px-3 py-1 rounded-full text-xs font-mono",
                                          style: {
                                            backgroundColor:
                                              "var(--bp-bg-primary)",
                                            color: "var(--bp-accent-orange)",
                                          },
                                          children: o.timeframe,
                                        }),
                                      ],
                                    }),
                                    x.jsx("p", {
                                      "code-path":
                                        "src/sections/Transformation.tsx:171:27",
                                      className: "text-base leading-relaxed",
                                      style: {
                                        color: "var(--bp-text-secondary)",
                                      },
                                      children: o.description,
                                    }),
                                  ],
                                }),
                                x.jsx("div", {
                                  "code-path":
                                    "src/sections/Transformation.tsx:180:25",
                                  className:
                                    "hidden lg:flex w-14 h-14 rounded-xl items-center justify-center flex-shrink-0",
                                  style: {
                                    backgroundColor: p
                                      ? "rgba(255, 95, 31, 0.15)"
                                      : "var(--bp-bg-primary)",
                                    border: `1px solid ${
                                      p
                                        ? "rgba(255, 95, 31, 0.3)"
                                        : "var(--bp-border)"
                                    }`,
                                  },
                                  children: x.jsx(h, {
                                    "code-path":
                                      "src/sections/Transformation.tsx:187:27",
                                    className: "w-6 h-6",
                                    style: {
                                      color: p
                                        ? "var(--bp-accent-orange)"
                                        : "var(--bp-text-muted)",
                                    },
                                  }),
                                }),
                              ],
                            }),
                          }),
                        ],
                      },
                      d
                    );
                  }),
                }),
              ],
            }),
          }),
          x.jsx("div", {
            "code-path": "src/sections/Transformation.tsx:202:9",
            className: "text-center mt-16",
            children: x.jsxs("a", {
              "code-path": "src/sections/Transformation.tsx:203:11",
              href: "#cta",
              className: "btn-primary inline-flex items-center gap-2",
              children: [
                "Start Your Dog's Journey",
                x.jsx(xy, {
                  "code-path": "src/sections/Transformation.tsx:208:13",
                  className: "w-5 h-5",
                }),
              ],
            }),
          }),
        ],
      }),
    })
  );
}
ot.registerPlugin(ze);
function Q3() {
  const f = ge.useRef(null),
    [a, r] = ge.useState(!1);
  return (
    ge.useEffect(() => {
      const i = f.current;
      if (!i) return;
      const s = new IntersectionObserver(
        ([o]) => {
          o.isIntersecting && (r(!0), s.unobserve(i));
        },
        { threshold: 0.2 }
      );
      return s.observe(i), () => s.disconnect();
    }, []),
    ge.useEffect(() => {
      if (a) {
        const i = ot.context(() => {
          ot.fromTo(
            ".cta-content",
            { opacity: 0, y: 40 },
            { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }
          ),
            ot.fromTo(
              ".avatar-item",
              { opacity: 0, scale: 0.8 },
              {
                opacity: 1,
                scale: 1,
                duration: 0.4,
                stagger: 0.1,
                delay: 0.3,
                ease: "back.out(1.7)",
              }
            );
        }, f);
        return () => i.revert();
      }
    }, [a]),
    x.jsxs("section", {
      "code-path": "src/sections/SecondaryCTA.tsx:67:5",
      ref: f,
      id: "cta",
      className: "relative w-full py-20 lg:py-28",
      style: { backgroundColor: "var(--bp-bg-primary)" },
      children: [
        x.jsx("div", {
          "code-path": "src/sections/SecondaryCTA.tsx:74:7",
          className: "absolute inset-0",
          style: {
            background:
              "radial-gradient(ellipse at center bottom, rgba(255, 95, 31, 0.15) 0%, transparent 60%)",
          },
        }),
        x.jsx("div", {
          "code-path": "src/sections/SecondaryCTA.tsx:81:7",
          className: "container-large relative z-10",
          children: x.jsxs("div", {
            "code-path": "src/sections/SecondaryCTA.tsx:82:9",
            className:
              "cta-content opacity-0 max-w-4xl mx-auto text-center p-8 lg:p-12 rounded-3xl",
            style: {
              backgroundColor: "var(--bp-bg-secondary)",
              border: "1px solid var(--bp-border)",
            },
            children: [
              x.jsxs("div", {
                "code-path": "src/sections/SecondaryCTA.tsx:90:11",
                className: "flex flex-col items-center mb-8",
                children: [
                  x.jsxs("div", {
                    "code-path": "src/sections/SecondaryCTA.tsx:91:13",
                    className: "flex items-center -space-x-3 mb-4",
                    children: [
                      Xr.avatarImages.map((i, s) =>
                        x.jsx(
                          "div",
                          {
                            "code-path": "src/sections/SecondaryCTA.tsx:93:17",
                            className: "avatar-item opacity-0 relative",
                            style: { zIndex: Xr.avatarImages.length - s },
                            children: x.jsx("img", {
                              "code-path":
                                "src/sections/SecondaryCTA.tsx:98:19",
                              src: i,
                              alt: `Pet parent ${s + 1}`,
                              className:
                                "w-12 h-12 lg:w-14 lg:h-14 rounded-full object-cover",
                              style: {
                                border: "3px solid var(--bp-bg-secondary)",
                                boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
                              },
                            }),
                          },
                          s
                        )
                      ),
                      x.jsx("div", {
                        "code-path": "src/sections/SecondaryCTA.tsx:109:15",
                        className:
                          "avatar-item opacity-0 w-12 h-12 lg:w-14 lg:h-14 rounded-full flex items-center justify-center",
                        style: {
                          backgroundColor: "var(--bp-accent-orange)",
                          border: "3px solid var(--bp-bg-secondary)",
                          zIndex: 0,
                        },
                        children: x.jsx(V2, {
                          "code-path": "src/sections/SecondaryCTA.tsx:117:17",
                          className: "w-5 h-5 text-white",
                        }),
                      }),
                    ],
                  }),
                  x.jsx("p", {
                    "code-path": "src/sections/SecondaryCTA.tsx:120:13",
                    className: "text-sm font-mono",
                    style: { color: "var(--bp-text-muted)" },
                    children: Xr.avatarText,
                  }),
                ],
              }),
              x.jsx("h2", {
                "code-path": "src/sections/SecondaryCTA.tsx:129:11",
                className: "text-h3 lg:text-h2 font-bold text-white mb-8",
                style: { letterSpacing: "-0.02em" },
                children: Xr.headline,
              }),
              x.jsxs("a", {
                "code-path": "src/sections/SecondaryCTA.tsx:137:11",
                href: Xr.buttonHref,
                className:
                  "btn-primary text-lg px-10 py-5 inline-flex items-center gap-3 group",
                children: [
                  Xr.buttonText,
                  x.jsx(yy, {
                    "code-path": "src/sections/SecondaryCTA.tsx:142:13",
                    className:
                      "w-5 h-5 transition-transform group-hover:translate-x-1",
                  }),
                ],
              }),
              x.jsx("div", {
                "code-path": "src/sections/SecondaryCTA.tsx:146:11",
                className:
                  "flex flex-wrap items-center justify-center gap-6 mt-8",
                children: [
                  "35% Off First Order",
                  "14-Day Guarantee",
                  "Free Shipping",
                ].map((i, s) =>
                  x.jsxs(
                    "div",
                    {
                      "code-path": "src/sections/SecondaryCTA.tsx:152:15",
                      className: "flex items-center gap-2",
                      children: [
                        x.jsx("div", {
                          "code-path": "src/sections/SecondaryCTA.tsx:156:17",
                          className: "w-2 h-2 rounded-full",
                          style: { backgroundColor: "var(--bp-accent-orange)" },
                        }),
                        x.jsx("span", {
                          "code-path": "src/sections/SecondaryCTA.tsx:160:17",
                          className: "text-sm",
                          style: { color: "var(--bp-text-secondary)" },
                          children: i,
                        }),
                      ],
                    },
                    s
                  )
                ),
              }),
            ],
          }),
        }),
      ],
    })
  );
}
const Z3 = { Instagram: by, Youtube: K2, Facebook: m2, Twitter: L2 };
function K3() {
  return x.jsx("footer", {
    "code-path": "src/sections/Footer.tsx:15:5",
    className: "relative w-full py-16 lg:py-20",
    style: {
      backgroundColor: "var(--bp-bg-primary)",
      borderTop: "1px solid var(--bp-border)",
    },
    children: x.jsxs("div", {
      "code-path": "src/sections/Footer.tsx:22:7",
      className: "container-large",
      children: [
        x.jsxs("div", {
          "code-path": "src/sections/Footer.tsx:24:9",
          className: "grid lg:grid-cols-12 gap-12 lg:gap-8 mb-12",
          children: [
            x.jsxs("div", {
              "code-path": "src/sections/Footer.tsx:26:11",
              className: "lg:col-span-4",
              children: [
                x.jsxs("div", {
                  "code-path": "src/sections/Footer.tsx:27:13",
                  className: "flex items-center gap-2 mb-4",
                  children: [
                    x.jsx(_i, {
                      "code-path": "src/sections/Footer.tsx:28:15",
                      className: "w-8 h-8",
                      style: { color: "var(--bp-accent-orange)" },
                    }),
                    x.jsx("span", {
                      "code-path": "src/sections/Footer.tsx:32:15",
                      className: "text-xl font-black tracking-tight",
                      style: { color: "var(--bp-text-primary)" },
                      children: Qr.logo,
                    }),
                  ],
                }),
                x.jsx("p", {
                  "code-path": "src/sections/Footer.tsx:39:13",
                  className: "text-sm leading-relaxed mb-6 max-w-xs",
                  style: { color: "var(--bp-text-secondary)" },
                  children: Qr.description,
                }),
                x.jsx("div", {
                  "code-path": "src/sections/Footer.tsx:47:13",
                  className: "flex gap-3",
                  children: Qr.socialLinks.map((f, a) => {
                    const r = Z3[f.iconName] || by;
                    return x.jsx(
                      "a",
                      {
                        "code-path": "src/sections/Footer.tsx:51:19",
                        href: f.href,
                        className:
                          "w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110",
                        style: {
                          backgroundColor: "var(--bp-bg-secondary)",
                          border: "1px solid var(--bp-border)",
                        },
                        "aria-label": f.label,
                        children: x.jsx(r, {
                          "code-path": "src/sections/Footer.tsx:61:21",
                          className: "w-5 h-5",
                          style: { color: "var(--bp-text-secondary)" },
                        }),
                      },
                      a
                    );
                  }),
                }),
              ],
            }),
            Qr.columns.map((f, a) =>
              x.jsxs(
                "div",
                {
                  "code-path": "src/sections/Footer.tsx:73:13",
                  className: "lg:col-span-2",
                  children: [
                    x.jsx("h4", {
                      "code-path": "src/sections/Footer.tsx:74:15",
                      className:
                        "text-sm font-bold uppercase tracking-wider mb-4",
                      style: { color: "var(--bp-text-primary)" },
                      children: f.title,
                    }),
                    x.jsx("ul", {
                      "code-path": "src/sections/Footer.tsx:80:15",
                      className: "space-y-3",
                      children: f.links.map((r, i) =>
                        x.jsx(
                          "li",
                          {
                            "code-path": "src/sections/Footer.tsx:82:19",
                            children: x.jsx("a", {
                              "code-path": "src/sections/Footer.tsx:83:21",
                              href: r.href,
                              className:
                                "text-sm transition-colors duration-300 hover:text-white",
                              style: { color: "var(--bp-text-secondary)" },
                              children: r.label,
                            }),
                          },
                          i
                        )
                      ),
                    }),
                  ],
                },
                a
              )
            ),
            x.jsxs("div", {
              "code-path": "src/sections/Footer.tsx:97:11",
              className: "lg:col-span-4",
              children: [
                x.jsx("h4", {
                  "code-path": "src/sections/Footer.tsx:98:13",
                  className: "text-sm font-bold uppercase tracking-wider mb-4",
                  style: { color: "var(--bp-text-primary)" },
                  children: "Stay Updated",
                }),
                x.jsx("p", {
                  "code-path": "src/sections/Footer.tsx:104:13",
                  className: "text-sm mb-4",
                  style: { color: "var(--bp-text-secondary)" },
                  children:
                    "Get exclusive deals and safety updates for your pack.",
                }),
                x.jsxs("form", {
                  "code-path": "src/sections/Footer.tsx:110:13",
                  className: "flex gap-2",
                  onSubmit: (f) => f.preventDefault(),
                  children: [
                    x.jsxs("div", {
                      "code-path": "src/sections/Footer.tsx:114:15",
                      className: "relative flex-grow",
                      children: [
                        x.jsx(vh, {
                          "code-path": "src/sections/Footer.tsx:115:17",
                          className:
                            "absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4",
                          style: { color: "var(--bp-text-muted)" },
                        }),
                        x.jsx("input", {
                          "code-path": "src/sections/Footer.tsx:119:17",
                          type: "email",
                          placeholder: "Enter your email",
                          className:
                            "w-full pl-10 pr-4 py-3 rounded-lg text-sm transition-colors focus:outline-none focus:ring-2",
                          style: {
                            backgroundColor: "var(--bp-bg-secondary)",
                            border: "1px solid var(--bp-border)",
                            color: "var(--bp-text-primary)",
                          },
                        }),
                      ],
                    }),
                    x.jsx("button", {
                      "code-path": "src/sections/Footer.tsx:130:15",
                      type: "submit",
                      className:
                        "px-5 py-3 rounded-lg text-sm font-semibold transition-all duration-300 hover:opacity-90",
                      style: {
                        backgroundColor: "var(--bp-accent-orange)",
                        color: "white",
                      },
                      children: "Subscribe",
                    }),
                  ],
                }),
                x.jsx("p", {
                  "code-path": "src/sections/Footer.tsx:141:13",
                  className: "text-xs mt-3",
                  style: { color: "var(--bp-text-muted)" },
                  children: "No spam. Unsubscribe anytime.",
                }),
              ],
            }),
          ],
        }),
        x.jsxs("div", {
          "code-path": "src/sections/Footer.tsx:151:9",
          className:
            "pt-8 flex flex-col md:flex-row items-center justify-between gap-4",
          style: { borderTop: "1px solid var(--bp-border)" },
          children: [
            x.jsx("p", {
              "code-path": "src/sections/Footer.tsx:155:11",
              className: "text-xs",
              style: { color: "var(--bp-text-muted)" },
              children: Qr.copyright,
            }),
            x.jsx("div", {
              "code-path": "src/sections/Footer.tsx:162:11",
              className: "flex flex-wrap items-center justify-center gap-4",
              children: Qr.legalLinks.map((f, a) =>
                x.jsx(
                  "a",
                  {
                    "code-path": "src/sections/Footer.tsx:164:15",
                    href: f.href,
                    className:
                      "text-xs transition-colors duration-300 hover:text-white",
                    style: { color: "var(--bp-text-muted)" },
                    children: f.label,
                  },
                  a
                )
              ),
            }),
          ],
        }),
        x.jsx("div", {
          "code-path": "src/sections/Footer.tsx:177:9",
          className: "mt-8 flex flex-wrap items-center justify-center gap-6",
          children: [
            { icon: _i, label: "Lab Certified" },
            { icon: vh, label: "Secure Checkout" },
          ].map((f, a) => {
            const r = f.icon;
            return x.jsxs(
              "div",
              {
                "code-path": "src/sections/Footer.tsx:184:15",
                className: "flex items-center gap-2",
                children: [
                  x.jsx(r, {
                    "code-path": "src/sections/Footer.tsx:188:17",
                    className: "w-4 h-4",
                    style: { color: "var(--bp-text-muted)" },
                  }),
                  x.jsx("span", {
                    "code-path": "src/sections/Footer.tsx:192:17",
                    className: "text-xs",
                    style: { color: "var(--bp-text-muted)" },
                    children: f.label,
                  }),
                ],
              },
              a
            );
          }),
        }),
      ],
    }),
  });
}
function J3(f = 100) {
  const [a, r] = ge.useState(!1),
    [i, s] = ge.useState(!0);
  return (
    ge.useEffect(() => {
      const o = () => {
        setTimeout(() => {
          s(!1),
            setTimeout(() => {
              r(!0);
            }, 500);
        }, f);
      };
      if (document.readyState === "complete") o();
      else
        return (
          window.addEventListener("load", o),
          () => window.removeEventListener("load", o)
        );
    }, [f]),
    { isLoaded: a, showOverlay: i }
  );
}
ot.registerPlugin(ze);
function F3() {
  const { showOverlay: f } = J3(800);
  return (
    ge.useEffect(
      () => (
        (document.documentElement.style.scrollBehavior = "smooth"),
        ze.refresh(),
        () => {
          document.documentElement.style.scrollBehavior = "auto";
        }
      ),
      []
    ),
    x.jsxs("div", {
      "code-path": "src/App.tsx:34:5",
      className: "min-h-screen",
      style: { backgroundColor: "var(--bp-bg-primary)" },
      children: [
        x.jsx($2, { "code-path": "src/App.tsx:39:7", isVisible: f }),
        x.jsx(W2, { "code-path": "src/App.tsx:42:7" }),
        x.jsxs("main", {
          "code-path": "src/App.tsx:45:7",
          children: [
            x.jsx(g3, { "code-path": "src/App.tsx:46:9" }),
            x.jsx(H3, { "code-path": "src/App.tsx:47:9" }),
            x.jsx(Y3, { "code-path": "src/App.tsx:48:9" }),
            x.jsx(L3, { "code-path": "src/App.tsx:49:9" }),
            x.jsx(G3, { "code-path": "src/App.tsx:50:9" }),
            x.jsx(X3, { "code-path": "src/App.tsx:51:9" }),
            x.jsx(Q3, { "code-path": "src/App.tsx:52:9" }),
          ],
        }),
        x.jsx(K3, { "code-path": "src/App.tsx:56:7" }),
      ],
    })
  );
}
sx.createRoot(document.getElementById("root")).render(
  x.jsx(ge.StrictMode, {
    "code-path": "src/main.tsx:7:3",
    children: x.jsx(F3, { "code-path": "src/main.tsx:8:5" }),
  })
);
