/*! For license information please see app.min.js.LICENSE.txt */
(() => {
  var t = {
      546: function (t, e) {
        !(function (t) {
          "use strict";
          function e(t, e) {
            for (var r = 0; r < e.length; r++) {
              var n = e[r];
              (n.enumerable = n.enumerable || !1),
                (n.configurable = !0),
                "value" in n && (n.writable = !0),
                Object.defineProperty(t, n.key, n);
            }
          }
          function r(t, r, n) {
            return r && e(t.prototype, r), n && e(t, n), t;
          }
          var n,
            i,
            o,
            s,
            a,
            l,
            u,
            c,
            f,
            h,
            d,
            p,
            g,
            _ = function () {
              return (
                n ||
                ("undefined" != typeof window &&
                  (n = window.gsap) &&
                  n.registerPlugin &&
                  n)
              );
            },
            m = 1,
            v = [],
            y = [],
            b = [],
            w = Date.now,
            x = function (t, e) {
              return e;
            },
            T = function () {
              var t = f.core,
                e = t.bridge || {},
                r = t._scrollers,
                n = t._proxies;
              r.push.apply(r, y),
                n.push.apply(n, b),
                (y = r),
                (b = n),
                (x = function (t, r) {
                  return e[t](r);
                });
            },
            E = function (t, e) {
              return ~b.indexOf(t) && b[b.indexOf(t) + 1][e];
            },
            k = function (t) {
              return !!~h.indexOf(t);
            },
            A = function (t, e, r, n, i) {
              return t.addEventListener(e, r, { passive: !n, capture: !!i });
            },
            C = function (t, e, r, n) {
              return t.removeEventListener(e, r, !!n);
            },
            M = "scrollLeft",
            S = "scrollTop",
            O = function () {
              return (d && d.isPressed) || y.cache++;
            },
            P = function (t, e) {
              var r = function r(n) {
                if (n || 0 === n) {
                  m && (o.history.scrollRestoration = "manual");
                  var i = d && d.isPressed;
                  (n = r.v = Math.round(n) || (d && d.iOS ? 1 : 0)),
                    t(n),
                    (r.cacheID = y.cache),
                    i && x("ss", n);
                } else
                  (e || y.cache !== r.cacheID || x("ref")) &&
                    ((r.cacheID = y.cache), (r.v = t()));
                return r.v + r.offset;
              };
              return (r.offset = 0), t && r;
            },
            L = {
              s: M,
              p: "left",
              p2: "Left",
              os: "right",
              os2: "Right",
              d: "width",
              d2: "Width",
              a: "x",
              sc: P(function (t) {
                return arguments.length
                  ? o.scrollTo(t, R.sc())
                  : o.pageXOffset || s[M] || a[M] || l[M] || 0;
              }),
            },
            R = {
              s: S,
              p: "top",
              p2: "Top",
              os: "bottom",
              os2: "Bottom",
              d: "height",
              d2: "Height",
              a: "y",
              op: L,
              sc: P(function (t) {
                return arguments.length
                  ? o.scrollTo(L.sc(), t)
                  : o.pageYOffset || s[S] || a[S] || l[S] || 0;
              }),
            },
            D = function (t, e) {
              return (
                ((e && e._ctx && e._ctx.selector) || n.utils.toArray)(t)[0] ||
                ("string" == typeof t && !1 !== n.config().nullTargetWarn
                  ? console.warn("Element not found:", t)
                  : null)
              );
            },
            I = function (t, e) {
              var r = e.s,
                i = e.sc;
              k(t) && (t = s.scrollingElement || a);
              var o = y.indexOf(t),
                l = i === R.sc ? 1 : 2;
              !~o && (o = y.push(t) - 1), y[o + l] || A(t, "scroll", O);
              var u = y[o + l],
                c =
                  u ||
                  (y[o + l] =
                    P(E(t, r), !0) ||
                    (k(t)
                      ? i
                      : P(function (e) {
                          return arguments.length ? (t[r] = e) : t[r];
                        })));
              return (
                (c.target = t),
                u ||
                  (c.smooth = "smooth" === n.getProperty(t, "scrollBehavior")),
                c
              );
            },
            z = function (t, e, r) {
              var n = t,
                i = t,
                o = w(),
                s = o,
                a = e || 50,
                l = Math.max(500, 3 * a),
                u = function (t, e) {
                  var l = w();
                  e || l - o > a
                    ? ((i = n), (n = t), (s = o), (o = l))
                    : r
                    ? (n += t)
                    : (n = i + ((t - i) / (l - s)) * (o - s));
                },
                c = function (t) {
                  var e = s,
                    a = i,
                    c = w();
                  return (
                    (t || 0 === t) && t !== n && u(t),
                    o === s || c - s > l
                      ? 0
                      : ((n + (r ? a : -a)) / ((r ? c : o) - e)) * 1e3
                  );
                };
              return {
                update: u,
                reset: function () {
                  (i = n = r ? 0 : n), (s = o = 0);
                },
                getVelocity: c,
              };
            },
            B = function (t, e) {
              return (
                e && !t._gsapAllow && t.preventDefault(),
                t.changedTouches ? t.changedTouches[0] : t
              );
            },
            F = function (t) {
              var e = Math.max.apply(Math, t),
                r = Math.min.apply(Math, t);
              return Math.abs(e) >= Math.abs(r) ? e : r;
            },
            N = function () {
              (f = n.core.globals().ScrollTrigger) && f.core && T();
            },
            Y = function (t) {
              return (
                (n = t || _()),
                !i &&
                  n &&
                  "undefined" != typeof document &&
                  document.body &&
                  ((o = window),
                  (s = document),
                  (a = s.documentElement),
                  (l = s.body),
                  (h = [o, s, a, l]),
                  n.utils.clamp,
                  (g = n.core.context || function () {}),
                  (c = "onpointerenter" in l ? "pointer" : "mouse"),
                  (u = q.isTouch =
                    o.matchMedia &&
                    o.matchMedia("(hover: none), (pointer: coarse)").matches
                      ? 1
                      : "ontouchstart" in o ||
                        navigator.maxTouchPoints > 0 ||
                        navigator.msMaxTouchPoints > 0
                      ? 2
                      : 0),
                  (p = q.eventTypes =
                    (
                      "ontouchstart" in a
                        ? "touchstart,touchmove,touchcancel,touchend"
                        : "onpointerdown" in a
                        ? "pointerdown,pointermove,pointercancel,pointerup"
                        : "mousedown,mousemove,mouseup,mouseup"
                    ).split(",")),
                  setTimeout(function () {
                    return (m = 0);
                  }, 500),
                  N(),
                  (i = 1)),
                i
              );
            };
          (L.op = R), (y.cache = 0);
          var q = (function () {
            function t(t) {
              this.init(t);
            }
            return (
              (t.prototype.init = function (t) {
                i ||
                  Y(n) ||
                  console.warn("Please gsap.registerPlugin(Observer)"),
                  f || N();
                var e = t.tolerance,
                  r = t.dragMinimum,
                  h = t.type,
                  _ = t.target,
                  m = t.lineHeight,
                  y = t.debounce,
                  b = t.preventDefault,
                  x = t.onStop,
                  T = t.onStopDelay,
                  E = t.ignore,
                  M = t.wheelSpeed,
                  S = t.event,
                  P = t.onDragStart,
                  q = t.onDragEnd,
                  W = t.onDrag,
                  X = t.onPress,
                  U = t.onRelease,
                  H = t.onRight,
                  V = t.onLeft,
                  $ = t.onUp,
                  j = t.onDown,
                  G = t.onChangeX,
                  Q = t.onChangeY,
                  Z = t.onChange,
                  J = t.onToggleX,
                  K = t.onToggleY,
                  tt = t.onHover,
                  et = t.onHoverEnd,
                  rt = t.onMove,
                  nt = t.ignoreCheck,
                  it = t.isNormalizer,
                  ot = t.onGestureStart,
                  st = t.onGestureEnd,
                  at = t.onWheel,
                  lt = t.onEnable,
                  ut = t.onDisable,
                  ct = t.onClick,
                  ft = t.scrollSpeed,
                  ht = t.capture,
                  dt = t.allowClicks,
                  pt = t.lockAxis,
                  gt = t.onLockAxis;
                (this.target = _ = D(_) || a),
                  (this.vars = t),
                  E && (E = n.utils.toArray(E)),
                  (e = e || 1e-9),
                  (r = r || 0),
                  (M = M || 1),
                  (ft = ft || 1),
                  (h = h || "wheel,touch,pointer"),
                  (y = !1 !== y),
                  m || (m = parseFloat(o.getComputedStyle(l).lineHeight) || 22);
                var _t,
                  mt,
                  vt,
                  yt,
                  bt,
                  wt,
                  xt,
                  Tt = this,
                  Et = 0,
                  kt = 0,
                  At = I(_, L),
                  Ct = I(_, R),
                  Mt = At(),
                  St = Ct(),
                  Ot =
                    ~h.indexOf("touch") &&
                    !~h.indexOf("pointer") &&
                    "pointerdown" === p[0],
                  Pt = k(_),
                  Lt = _.ownerDocument || s,
                  Rt = [0, 0, 0],
                  Dt = [0, 0, 0],
                  It = 0,
                  zt = function () {
                    return (It = w());
                  },
                  Bt = function (t, e) {
                    return (
                      ((Tt.event = t) && E && ~E.indexOf(t.target)) ||
                      (e && Ot && "touch" !== t.pointerType) ||
                      (nt && nt(t, e))
                    );
                  },
                  Ft = function () {
                    Tt._vx.reset(), Tt._vy.reset(), mt.pause(), x && x(Tt);
                  },
                  Nt = function () {
                    var t = (Tt.deltaX = F(Rt)),
                      r = (Tt.deltaY = F(Dt)),
                      n = Math.abs(t) >= e,
                      i = Math.abs(r) >= e;
                    Z && (n || i) && Z(Tt, t, r, Rt, Dt),
                      n &&
                        (H && Tt.deltaX > 0 && H(Tt),
                        V && Tt.deltaX < 0 && V(Tt),
                        G && G(Tt),
                        J && Tt.deltaX < 0 != Et < 0 && J(Tt),
                        (Et = Tt.deltaX),
                        (Rt[0] = Rt[1] = Rt[2] = 0)),
                      i &&
                        (j && Tt.deltaY > 0 && j(Tt),
                        $ && Tt.deltaY < 0 && $(Tt),
                        Q && Q(Tt),
                        K && Tt.deltaY < 0 != kt < 0 && K(Tt),
                        (kt = Tt.deltaY),
                        (Dt[0] = Dt[1] = Dt[2] = 0)),
                      (yt || vt) &&
                        (rt && rt(Tt), vt && (W(Tt), (vt = !1)), (yt = !1)),
                      wt && !(wt = !1) && gt && gt(Tt),
                      bt && (at(Tt), (bt = !1)),
                      (_t = 0);
                  },
                  Yt = function (t, e, r) {
                    (Rt[r] += t),
                      (Dt[r] += e),
                      Tt._vx.update(t),
                      Tt._vy.update(e),
                      y ? _t || (_t = requestAnimationFrame(Nt)) : Nt();
                  },
                  qt = function (t, e) {
                    pt &&
                      !xt &&
                      ((Tt.axis = xt = Math.abs(t) > Math.abs(e) ? "x" : "y"),
                      (wt = !0)),
                      "y" !== xt && ((Rt[2] += t), Tt._vx.update(t, !0)),
                      "x" !== xt && ((Dt[2] += e), Tt._vy.update(e, !0)),
                      y ? _t || (_t = requestAnimationFrame(Nt)) : Nt();
                  },
                  Wt = function (t) {
                    if (!Bt(t, 1)) {
                      var e = (t = B(t, b)).clientX,
                        n = t.clientY,
                        i = e - Tt.x,
                        o = n - Tt.y,
                        s = Tt.isDragging;
                      (Tt.x = e),
                        (Tt.y = n),
                        (s ||
                          Math.abs(Tt.startX - e) >= r ||
                          Math.abs(Tt.startY - n) >= r) &&
                          (W && (vt = !0),
                          s || (Tt.isDragging = !0),
                          qt(i, o),
                          s || (P && P(Tt)));
                    }
                  },
                  Xt = (Tt.onPress = function (t) {
                    Bt(t, 1) ||
                      (t && t.button) ||
                      ((Tt.axis = xt = null),
                      mt.pause(),
                      (Tt.isPressed = !0),
                      (t = B(t)),
                      (Et = kt = 0),
                      (Tt.startX = Tt.x = t.clientX),
                      (Tt.startY = Tt.y = t.clientY),
                      Tt._vx.reset(),
                      Tt._vy.reset(),
                      A(it ? _ : Lt, p[1], Wt, b, !0),
                      (Tt.deltaX = Tt.deltaY = 0),
                      X && X(Tt));
                  }),
                  Ut = (Tt.onRelease = function (t) {
                    if (!Bt(t, 1)) {
                      C(it ? _ : Lt, p[1], Wt, !0);
                      var e = !isNaN(Tt.y - Tt.startY),
                        r = Tt.isDragging,
                        i =
                          r &&
                          (Math.abs(Tt.x - Tt.startX) > 3 ||
                            Math.abs(Tt.y - Tt.startY) > 3),
                        s = B(t);
                      !i &&
                        e &&
                        (Tt._vx.reset(),
                        Tt._vy.reset(),
                        b &&
                          dt &&
                          n.delayedCall(0.08, function () {
                            if (w() - It > 300 && !t.defaultPrevented)
                              if (t.target.click) t.target.click();
                              else if (Lt.createEvent) {
                                var e = Lt.createEvent("MouseEvents");
                                e.initMouseEvent(
                                  "click",
                                  !0,
                                  !0,
                                  o,
                                  1,
                                  s.screenX,
                                  s.screenY,
                                  s.clientX,
                                  s.clientY,
                                  !1,
                                  !1,
                                  !1,
                                  !1,
                                  0,
                                  null,
                                ),
                                  t.target.dispatchEvent(e);
                              }
                          })),
                        (Tt.isDragging = Tt.isGesturing = Tt.isPressed = !1),
                        x && r && !it && mt.restart(!0),
                        q && r && q(Tt),
                        U && U(Tt, i);
                    }
                  }),
                  Ht = function (t) {
                    return (
                      t.touches &&
                      t.touches.length > 1 &&
                      (Tt.isGesturing = !0) &&
                      ot(t, Tt.isDragging)
                    );
                  },
                  Vt = function () {
                    return (Tt.isGesturing = !1) || st(Tt);
                  },
                  $t = function (t) {
                    if (!Bt(t)) {
                      var e = At(),
                        r = Ct();
                      Yt((e - Mt) * ft, (r - St) * ft, 1),
                        (Mt = e),
                        (St = r),
                        x && mt.restart(!0);
                    }
                  },
                  jt = function (t) {
                    if (!Bt(t)) {
                      (t = B(t, b)), at && (bt = !0);
                      var e =
                        (1 === t.deltaMode
                          ? m
                          : 2 === t.deltaMode
                          ? o.innerHeight
                          : 1) * M;
                      Yt(t.deltaX * e, t.deltaY * e, 0),
                        x && !it && mt.restart(!0);
                    }
                  },
                  Gt = function (t) {
                    if (!Bt(t)) {
                      var e = t.clientX,
                        r = t.clientY,
                        n = e - Tt.x,
                        i = r - Tt.y;
                      (Tt.x = e),
                        (Tt.y = r),
                        (yt = !0),
                        x && mt.restart(!0),
                        (n || i) && qt(n, i);
                    }
                  },
                  Qt = function (t) {
                    (Tt.event = t), tt(Tt);
                  },
                  Zt = function (t) {
                    (Tt.event = t), et(Tt);
                  },
                  Jt = function (t) {
                    return Bt(t) || (B(t, b) && ct(Tt));
                  };
                (mt = Tt._dc = n.delayedCall(T || 0.25, Ft).pause()),
                  (Tt.deltaX = Tt.deltaY = 0),
                  (Tt._vx = z(0, 50, !0)),
                  (Tt._vy = z(0, 50, !0)),
                  (Tt.scrollX = At),
                  (Tt.scrollY = Ct),
                  (Tt.isDragging = Tt.isGesturing = Tt.isPressed = !1),
                  g(this),
                  (Tt.enable = function (t) {
                    return (
                      Tt.isEnabled ||
                        (A(Pt ? Lt : _, "scroll", O),
                        h.indexOf("scroll") >= 0 &&
                          A(Pt ? Lt : _, "scroll", $t, b, ht),
                        h.indexOf("wheel") >= 0 && A(_, "wheel", jt, b, ht),
                        ((h.indexOf("touch") >= 0 && u) ||
                          h.indexOf("pointer") >= 0) &&
                          (A(_, p[0], Xt, b, ht),
                          A(Lt, p[2], Ut),
                          A(Lt, p[3], Ut),
                          dt && A(_, "click", zt, !1, !0),
                          ct && A(_, "click", Jt),
                          ot && A(Lt, "gesturestart", Ht),
                          st && A(Lt, "gestureend", Vt),
                          tt && A(_, c + "enter", Qt),
                          et && A(_, c + "leave", Zt),
                          rt && A(_, c + "move", Gt)),
                        (Tt.isEnabled = !0),
                        t && t.type && Xt(t),
                        lt && lt(Tt)),
                      Tt
                    );
                  }),
                  (Tt.disable = function () {
                    Tt.isEnabled &&
                      (v.filter(function (t) {
                        return t !== Tt && k(t.target);
                      }).length || C(Pt ? Lt : _, "scroll", O),
                      Tt.isPressed &&
                        (Tt._vx.reset(),
                        Tt._vy.reset(),
                        C(it ? _ : Lt, p[1], Wt, !0)),
                      C(Pt ? Lt : _, "scroll", $t, ht),
                      C(_, "wheel", jt, ht),
                      C(_, p[0], Xt, ht),
                      C(Lt, p[2], Ut),
                      C(Lt, p[3], Ut),
                      C(_, "click", zt, !0),
                      C(_, "click", Jt),
                      C(Lt, "gesturestart", Ht),
                      C(Lt, "gestureend", Vt),
                      C(_, c + "enter", Qt),
                      C(_, c + "leave", Zt),
                      C(_, c + "move", Gt),
                      (Tt.isEnabled = Tt.isPressed = Tt.isDragging = !1),
                      ut && ut(Tt));
                  }),
                  (Tt.kill = Tt.revert =
                    function () {
                      Tt.disable();
                      var t = v.indexOf(Tt);
                      t >= 0 && v.splice(t, 1), d === Tt && (d = 0);
                    }),
                  v.push(Tt),
                  it && k(_) && (d = Tt),
                  Tt.enable(S);
              }),
              r(t, [
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
              t
            );
          })();
          (q.version = "3.12.4"),
            (q.create = function (t) {
              return new q(t);
            }),
            (q.register = Y),
            (q.getAll = function () {
              return v.slice();
            }),
            (q.getById = function (t) {
              return v.filter(function (e) {
                return e.vars.id === t;
              })[0];
            }),
            _() && n.registerPlugin(q);
          var W,
            X,
            U,
            H,
            V,
            $,
            j,
            G,
            Q,
            Z,
            J,
            K,
            tt,
            et,
            rt,
            nt,
            it,
            ot,
            st,
            at,
            lt,
            ut,
            ct,
            ft,
            ht,
            dt,
            pt,
            gt,
            _t,
            mt,
            vt,
            yt,
            bt,
            wt,
            xt,
            Tt,
            Et,
            kt,
            At = 1,
            Ct = Date.now,
            Mt = Ct(),
            St = 0,
            Ot = 0,
            Pt = function (t, e, r) {
              var n =
                $t(t) && ("clamp(" === t.substr(0, 6) || t.indexOf("max") > -1);
              return (
                (r["_" + e + "Clamp"] = n), n ? t.substr(6, t.length - 7) : t
              );
            },
            Lt = function (t, e) {
              return !e || ($t(t) && "clamp(" === t.substr(0, 6))
                ? t
                : "clamp(" + t + ")";
            },
            Rt = function t() {
              return Ot && requestAnimationFrame(t);
            },
            Dt = function () {
              return (et = 1);
            },
            It = function () {
              return (et = 0);
            },
            zt = function (t) {
              return t;
            },
            Bt = function (t) {
              return Math.round(1e5 * t) / 1e5 || 0;
            },
            Ft = function () {
              return "undefined" != typeof window;
            },
            Nt = function () {
              return W || (Ft() && (W = window.gsap) && W.registerPlugin && W);
            },
            Yt = function (t) {
              return !!~j.indexOf(t);
            },
            qt = function (t) {
              return (
                ("Height" === t ? vt : U["inner" + t]) ||
                V["client" + t] ||
                $["client" + t]
              );
            },
            Wt = function (t) {
              return (
                E(t, "getBoundingClientRect") ||
                (Yt(t)
                  ? function () {
                      return (cr.width = U.innerWidth), (cr.height = vt), cr;
                    }
                  : function () {
                      return ve(t);
                    })
              );
            },
            Xt = function (t, e, r) {
              var n = r.d,
                i = r.d2,
                o = r.a;
              return (o = E(t, "getBoundingClientRect"))
                ? function () {
                    return o()[n];
                  }
                : function () {
                    return (e ? qt(i) : t["client" + i]) || 0;
                  };
            },
            Ut = function (t, e) {
              return !e || ~b.indexOf(t)
                ? Wt(t)
                : function () {
                    return cr;
                  };
            },
            Ht = function (t, e) {
              var r = e.s,
                n = e.d2,
                i = e.d,
                o = e.a;
              return Math.max(
                0,
                (r = "scroll" + n) && (o = E(t, r))
                  ? o() - Wt(t)()[i]
                  : Yt(t)
                  ? (V[r] || $[r]) - qt(n)
                  : t[r] - t["offset" + n],
              );
            },
            Vt = function (t, e) {
              for (var r = 0; r < st.length; r += 3)
                (!e || ~e.indexOf(st[r + 1])) && t(st[r], st[r + 1], st[r + 2]);
            },
            $t = function (t) {
              return "string" == typeof t;
            },
            jt = function (t) {
              return "function" == typeof t;
            },
            Gt = function (t) {
              return "number" == typeof t;
            },
            Qt = function (t) {
              return "object" == typeof t;
            },
            Zt = function (t, e, r) {
              return t && t.progress(e ? 0 : 1) && r && t.pause();
            },
            Jt = function (t, e) {
              if (t.enabled) {
                var r = t._ctx
                  ? t._ctx.add(function () {
                      return e(t);
                    })
                  : e(t);
                r && r.totalTime && (t.callbackAnimation = r);
              }
            },
            Kt = Math.abs,
            te = "left",
            ee = "top",
            re = "right",
            ne = "bottom",
            ie = "width",
            oe = "height",
            se = "Right",
            ae = "Left",
            le = "Top",
            ue = "Bottom",
            ce = "padding",
            fe = "margin",
            he = "Width",
            de = "Height",
            pe = "px",
            ge = function (t) {
              return U.getComputedStyle(t);
            },
            _e = function (t) {
              var e = ge(t).position;
              t.style.position =
                "absolute" === e || "fixed" === e ? e : "relative";
            },
            me = function (t, e) {
              for (var r in e) r in t || (t[r] = e[r]);
              return t;
            },
            ve = function (t, e) {
              var r =
                  e &&
                  "matrix(1, 0, 0, 1, 0, 0)" !== ge(t)[rt] &&
                  W.to(t, {
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
                  }).progress(1),
                n = t.getBoundingClientRect();
              return r && r.progress(0).kill(), n;
            },
            ye = function (t, e) {
              var r = e.d2;
              return t["offset" + r] || t["client" + r] || 0;
            },
            be = function (t) {
              var e,
                r = [],
                n = t.labels,
                i = t.duration();
              for (e in n) r.push(n[e] / i);
              return r;
            },
            we = function (t) {
              return function (e) {
                return W.utils.snap(be(t), e);
              };
            },
            xe = function (t) {
              var e = W.utils.snap(t),
                r =
                  Array.isArray(t) &&
                  t.slice(0).sort(function (t, e) {
                    return t - e;
                  });
              return r
                ? function (t, n, i) {
                    var o;
                    if ((void 0 === i && (i = 0.001), !n)) return e(t);
                    if (n > 0) {
                      for (t -= i, o = 0; o < r.length; o++)
                        if (r[o] >= t) return r[o];
                      return r[o - 1];
                    }
                    for (o = r.length, t += i; o--; )
                      if (r[o] <= t) return r[o];
                    return r[0];
                  }
                : function (r, n, i) {
                    void 0 === i && (i = 0.001);
                    var o = e(r);
                    return !n || Math.abs(o - r) < i || o - r < 0 == n < 0
                      ? o
                      : e(n < 0 ? r - t : r + t);
                  };
            },
            Te = function (t) {
              return function (e, r) {
                return xe(be(t))(e, r.direction);
              };
            },
            Ee = function (t, e, r, n) {
              return r.split(",").forEach(function (r) {
                return t(e, r, n);
              });
            },
            ke = function (t, e, r, n, i) {
              return t.addEventListener(e, r, { passive: !n, capture: !!i });
            },
            Ae = function (t, e, r, n) {
              return t.removeEventListener(e, r, !!n);
            },
            Ce = function (t, e, r) {
              (r = r && r.wheelHandler) &&
                (t(e, "wheel", r), t(e, "touchmove", r));
            },
            Me = {
              startColor: "green",
              endColor: "red",
              indent: 0,
              fontSize: "16px",
              fontWeight: "normal",
            },
            Se = { toggleActions: "play", anticipatePin: 0 },
            Oe = { top: 0, left: 0, center: 0.5, bottom: 1, right: 1 },
            Pe = function (t, e) {
              if ($t(t)) {
                var r = t.indexOf("="),
                  n = ~r
                    ? +(t.charAt(r - 1) + 1) * parseFloat(t.substr(r + 1))
                    : 0;
                ~r &&
                  (t.indexOf("%") > r && (n *= e / 100),
                  (t = t.substr(0, r - 1))),
                  (t =
                    n +
                    (t in Oe
                      ? Oe[t] * e
                      : ~t.indexOf("%")
                      ? (parseFloat(t) * e) / 100
                      : parseFloat(t) || 0));
              }
              return t;
            },
            Le = function (t, e, r, n, i, o, s, a) {
              var l = i.startColor,
                u = i.endColor,
                c = i.fontSize,
                f = i.indent,
                h = i.fontWeight,
                d = H.createElement("div"),
                p = Yt(r) || "fixed" === E(r, "pinType"),
                g = -1 !== t.indexOf("scroller"),
                _ = p ? $ : r,
                m = -1 !== t.indexOf("start"),
                v = m ? l : u,
                y =
                  "border-color:" +
                  v +
                  ";font-size:" +
                  c +
                  ";color:" +
                  v +
                  ";font-weight:" +
                  h +
                  ";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";
              return (
                (y += "position:" + ((g || a) && p ? "fixed;" : "absolute;")),
                (g || a || !p) &&
                  (y +=
                    (n === R ? re : ne) + ":" + (o + parseFloat(f)) + "px;"),
                s &&
                  (y +=
                    "box-sizing:border-box;text-align:left;width:" +
                    s.offsetWidth +
                    "px;"),
                (d._isStart = m),
                d.setAttribute(
                  "class",
                  "gsap-marker-" + t + (e ? " marker-" + e : ""),
                ),
                (d.style.cssText = y),
                (d.innerText = e || 0 === e ? t + "-" + e : t),
                _.children[0]
                  ? _.insertBefore(d, _.children[0])
                  : _.appendChild(d),
                (d._offset = d["offset" + n.op.d2]),
                Re(d, 0, n, m),
                d
              );
            },
            Re = function (t, e, r, n) {
              var i = { display: "block" },
                o = r[n ? "os2" : "p2"],
                s = r[n ? "p2" : "os2"];
              (t._isFlipped = n),
                (i[r.a + "Percent"] = n ? -100 : 0),
                (i[r.a] = n ? "1px" : 0),
                (i["border" + o + he] = 1),
                (i["border" + s + he] = 0),
                (i[r.p] = e + "px"),
                W.set(t, i);
            },
            De = [],
            Ie = {},
            ze = function () {
              return Ct() - St > 34 && (xt || (xt = requestAnimationFrame(er)));
            },
            Be = function () {
              (!ct || !ct.isPressed || ct.startX > $.clientWidth) &&
                (y.cache++,
                ct ? xt || (xt = requestAnimationFrame(er)) : er(),
                St || Xe("scrollStart"),
                (St = Ct()));
            },
            Fe = function () {
              (dt = U.innerWidth), (ht = U.innerHeight);
            },
            Ne = function () {
              y.cache++,
                !tt &&
                  !ut &&
                  !H.fullscreenElement &&
                  !H.webkitFullscreenElement &&
                  (!ft ||
                    dt !== U.innerWidth ||
                    Math.abs(U.innerHeight - ht) > 0.25 * U.innerHeight) &&
                  G.restart(!0);
            },
            Ye = {},
            qe = [],
            We = function t() {
              return Ae(mr, "scrollEnd", t) || Je(!0);
            },
            Xe = function (t) {
              return (
                (Ye[t] &&
                  Ye[t].map(function (t) {
                    return t();
                  })) ||
                qe
              );
            },
            Ue = [],
            He = function (t) {
              for (var e = 0; e < Ue.length; e += 5)
                (!t || (Ue[e + 4] && Ue[e + 4].query === t)) &&
                  ((Ue[e].style.cssText = Ue[e + 1]),
                  Ue[e].getBBox &&
                    Ue[e].setAttribute("transform", Ue[e + 2] || ""),
                  (Ue[e + 3].uncache = 1));
            },
            Ve = function (t, e) {
              var r;
              for (nt = 0; nt < De.length; nt++)
                !(r = De[nt]) ||
                  (e && r._ctx !== e) ||
                  (t ? r.kill(1) : r.revert(!0, !0));
              (yt = !0), e && He(e), e || Xe("revert");
            },
            $e = function (t, e) {
              y.cache++,
                (e || !Tt) &&
                  y.forEach(function (t) {
                    return jt(t) && t.cacheID++ && (t.rec = 0);
                  }),
                $t(t) && (U.history.scrollRestoration = _t = t);
            },
            je = 0,
            Ge = function () {
              if (Et !== je) {
                var t = (Et = je);
                requestAnimationFrame(function () {
                  return t === je && Je(!0);
                });
              }
            },
            Qe = function () {
              $.appendChild(mt),
                (vt = (!ct && mt.offsetHeight) || U.innerHeight),
                $.removeChild(mt);
            },
            Ze = function (t) {
              return Q(
                ".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end",
              ).forEach(function (e) {
                return (e.style.display = t ? "none" : "block");
              });
            },
            Je = function (t, e) {
              if (!St || t || yt) {
                Qe(),
                  (Tt = mr.isRefreshing = !0),
                  y.forEach(function (t) {
                    return jt(t) && ++t.cacheID && (t.rec = t());
                  });
                var r = Xe("refreshInit");
                at && mr.sort(),
                  e || Ve(),
                  y.forEach(function (t) {
                    jt(t) &&
                      (t.smooth && (t.target.style.scrollBehavior = "auto"),
                      t(0));
                  }),
                  De.slice(0).forEach(function (t) {
                    return t.refresh();
                  }),
                  (yt = !1),
                  De.forEach(function (t) {
                    if (t._subPinOffset && t.pin) {
                      var e = t.vars.horizontal
                          ? "offsetWidth"
                          : "offsetHeight",
                        r = t.pin[e];
                      t.revert(!0, 1),
                        t.adjustPinSpacing(t.pin[e] - r),
                        t.refresh();
                    }
                  }),
                  (bt = 1),
                  Ze(!0),
                  De.forEach(function (t) {
                    var e = Ht(t.scroller, t._dir),
                      r = "max" === t.vars.end || (t._endClamp && t.end > e),
                      n = t._startClamp && t.start >= e;
                    (r || n) &&
                      t.setPositions(
                        n ? e - 1 : t.start,
                        r ? Math.max(n ? e : t.start + 1, e) : t.end,
                        !0,
                      );
                  }),
                  Ze(!1),
                  (bt = 0),
                  r.forEach(function (t) {
                    return t && t.render && t.render(-1);
                  }),
                  y.forEach(function (t) {
                    jt(t) &&
                      (t.smooth &&
                        requestAnimationFrame(function () {
                          return (t.target.style.scrollBehavior = "smooth");
                        }),
                      t.rec && t(t.rec));
                  }),
                  $e(_t, 1),
                  G.pause(),
                  je++,
                  (Tt = 2),
                  er(2),
                  De.forEach(function (t) {
                    return jt(t.vars.onRefresh) && t.vars.onRefresh(t);
                  }),
                  (Tt = mr.isRefreshing = !1),
                  Xe("refresh");
              } else ke(mr, "scrollEnd", We);
            },
            Ke = 0,
            tr = 1,
            er = function (t) {
              if (2 === t || (!Tt && !yt)) {
                (mr.isUpdating = !0), kt && kt.update(0);
                var e = De.length,
                  r = Ct(),
                  n = r - Mt >= 50,
                  i = e && De[0].scroll();
                if (
                  ((tr = Ke > i ? -1 : 1),
                  Tt || (Ke = i),
                  n &&
                    (St && !et && r - St > 200 && ((St = 0), Xe("scrollEnd")),
                    (J = Mt),
                    (Mt = r)),
                  tr < 0)
                ) {
                  for (nt = e; nt-- > 0; ) De[nt] && De[nt].update(0, n);
                  tr = 1;
                } else for (nt = 0; nt < e; nt++) De[nt] && De[nt].update(0, n);
                mr.isUpdating = !1;
              }
              xt = 0;
            },
            rr = [
              te,
              ee,
              ne,
              re,
              fe + ue,
              fe + se,
              fe + le,
              fe + ae,
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
            nr = rr.concat([
              ie,
              oe,
              "boxSizing",
              "max" + he,
              "max" + de,
              "position",
              fe,
              ce,
              ce + le,
              ce + se,
              ce + ue,
              ce + ae,
            ]),
            ir = function (t, e, r) {
              ar(r);
              var n = t._gsap;
              if (n.spacerIsNative) ar(n.spacerState);
              else if (t._gsap.swappedIn) {
                var i = e.parentNode;
                i && (i.insertBefore(t, e), i.removeChild(e));
              }
              t._gsap.swappedIn = !1;
            },
            or = function (t, e, r, n) {
              if (!t._gsap.swappedIn) {
                for (var i, o = rr.length, s = e.style, a = t.style; o--; )
                  s[(i = rr[o])] = r[i];
                (s.position =
                  "absolute" === r.position ? "absolute" : "relative"),
                  "inline" === r.display && (s.display = "inline-block"),
                  (a[ne] = a[re] = "auto"),
                  (s.flexBasis = r.flexBasis || "auto"),
                  (s.overflow = "visible"),
                  (s.boxSizing = "border-box"),
                  (s[ie] = ye(t, L) + pe),
                  (s[oe] = ye(t, R) + pe),
                  (s[ce] = a[fe] = a[ee] = a[te] = "0"),
                  ar(n),
                  (a[ie] = a["max" + he] = r[ie]),
                  (a[oe] = a["max" + de] = r[oe]),
                  (a[ce] = r[ce]),
                  t.parentNode !== e &&
                    (t.parentNode.insertBefore(e, t), e.appendChild(t)),
                  (t._gsap.swappedIn = !0);
              }
            },
            sr = /([A-Z])/g,
            ar = function (t) {
              if (t) {
                var e,
                  r,
                  n = t.t.style,
                  i = t.length,
                  o = 0;
                for (
                  (t.t._gsap || W.core.getCache(t.t)).uncache = 1;
                  o < i;
                  o += 2
                )
                  (r = t[o + 1]),
                    (e = t[o]),
                    r
                      ? (n[e] = r)
                      : n[e] &&
                        n.removeProperty(e.replace(sr, "-$1").toLowerCase());
              }
            },
            lr = function (t) {
              for (var e = nr.length, r = t.style, n = [], i = 0; i < e; i++)
                n.push(nr[i], r[nr[i]]);
              return (n.t = t), n;
            },
            ur = function (t, e, r) {
              for (var n, i = [], o = t.length, s = r ? 8 : 0; s < o; s += 2)
                (n = t[s]), i.push(n, n in e ? e[n] : t[s + 1]);
              return (i.t = t.t), i;
            },
            cr = { left: 0, top: 0 },
            fr = function (t, e, r, n, i, o, s, a, l, u, c, f, h, d) {
              jt(t) && (t = t(a)),
                $t(t) &&
                  "max" === t.substr(0, 3) &&
                  (t =
                    f + ("=" === t.charAt(4) ? Pe("0" + t.substr(3), r) : 0));
              var p,
                g,
                _,
                m = h ? h.time() : 0;
              if ((h && h.seek(0), isNaN(t) || (t = +t), Gt(t)))
                h &&
                  (t = W.utils.mapRange(
                    h.scrollTrigger.start,
                    h.scrollTrigger.end,
                    0,
                    f,
                    t,
                  )),
                  s && Re(s, r, n, !0);
              else {
                jt(e) && (e = e(a));
                var v,
                  y,
                  b,
                  w,
                  x = (t || "0").split(" ");
                (_ = D(e, a) || $),
                  ((v = ve(_) || {}) && (v.left || v.top)) ||
                    "none" !== ge(_).display ||
                    ((w = _.style.display),
                    (_.style.display = "block"),
                    (v = ve(_)),
                    w
                      ? (_.style.display = w)
                      : _.style.removeProperty("display")),
                  (y = Pe(x[0], v[n.d])),
                  (b = Pe(x[1] || "0", r)),
                  (t = v[n.p] - l[n.p] - u + y + i - b),
                  s && Re(s, b, n, r - b < 20 || (s._isStart && b > 20)),
                  (r -= r - b);
              }
              if ((d && ((a[d] = t || -0.001), t < 0 && (t = 0)), o)) {
                var T = t + r,
                  E = o._isStart;
                (p = "scroll" + n.d2),
                  Re(
                    o,
                    T,
                    n,
                    (E && T > 20) ||
                      (!E &&
                        (c ? Math.max($[p], V[p]) : o.parentNode[p]) <= T + 1),
                  ),
                  c &&
                    ((l = ve(s)),
                    c &&
                      (o.style[n.op.p] = l[n.op.p] - n.op.m - o._offset + pe));
              }
              return (
                h &&
                  _ &&
                  ((p = ve(_)),
                  h.seek(f),
                  (g = ve(_)),
                  (h._caScrollDist = p[n.p] - g[n.p]),
                  (t = (t / h._caScrollDist) * f)),
                h && h.seek(m),
                h ? t : Math.round(t)
              );
            },
            hr = /(webkit|moz|length|cssText|inset)/i,
            dr = function (t, e, r, n) {
              if (t.parentNode !== e) {
                var i,
                  o,
                  s = t.style;
                if (e === $) {
                  for (i in ((t._stOrig = s.cssText), (o = ge(t))))
                    +i ||
                      hr.test(i) ||
                      !o[i] ||
                      "string" != typeof s[i] ||
                      "0" === i ||
                      (s[i] = o[i]);
                  (s.top = r), (s.left = n);
                } else s.cssText = t._stOrig;
                (W.core.getCache(t).uncache = 1), e.appendChild(t);
              }
            },
            pr = function (t, e, r) {
              var n = e,
                i = n;
              return function (e) {
                var o = Math.round(t());
                return (
                  o !== n &&
                    o !== i &&
                    Math.abs(o - n) > 3 &&
                    Math.abs(o - i) > 3 &&
                    ((e = o), r && r()),
                  (i = n),
                  (n = e),
                  e
                );
              };
            },
            gr = function (t, e, r) {
              var n = {};
              (n[e.p] = "+=" + r), W.set(t, n);
            },
            _r = function (t, e) {
              var r = I(t, e),
                n = "_scroll" + e.p2,
                i = function e(i, o, s, a, l) {
                  var u = e.tween,
                    c = o.onComplete,
                    f = {};
                  s = s || r();
                  var h = pr(r, s, function () {
                    u.kill(), (e.tween = 0);
                  });
                  return (
                    (l = (a && l) || 0),
                    (a = a || i - s),
                    u && u.kill(),
                    (o[n] = i),
                    (o.modifiers = f),
                    (f[n] = function () {
                      return h(s + a * u.ratio + l * u.ratio * u.ratio);
                    }),
                    (o.onUpdate = function () {
                      y.cache++, e.tween && er();
                    }),
                    (o.onComplete = function () {
                      (e.tween = 0), c && c.call(u);
                    }),
                    (u = e.tween = W.to(t, o))
                  );
                };
              return (
                (t[n] = r),
                (r.wheelHandler = function () {
                  return i.tween && i.tween.kill() && (i.tween = 0);
                }),
                ke(t, "wheel", r.wheelHandler),
                mr.isTouch && ke(t, "touchmove", r.wheelHandler),
                i
              );
            },
            mr = (function () {
              function t(e, r) {
                X ||
                  t.register(W) ||
                  console.warn("Please gsap.registerPlugin(ScrollTrigger)"),
                  gt(this),
                  this.init(e, r);
              }
              return (
                (t.prototype.init = function (e, r) {
                  if (
                    ((this.progress = this.start = 0),
                    this.vars && this.kill(!0, !0),
                    Ot)
                  ) {
                    var n,
                      i,
                      o,
                      s,
                      a,
                      l,
                      u,
                      c,
                      f,
                      h,
                      d,
                      p,
                      g,
                      _,
                      m,
                      v,
                      w,
                      x,
                      T,
                      k,
                      A,
                      C,
                      M,
                      S,
                      O,
                      P,
                      z,
                      B,
                      F,
                      N,
                      Y,
                      q,
                      X,
                      j,
                      G,
                      K,
                      rt,
                      it,
                      ot,
                      st = (e = me(
                        $t(e) || Gt(e) || e.nodeType ? { trigger: e } : e,
                        Se,
                      )),
                      ut = st.onUpdate,
                      ct = st.toggleClass,
                      ft = st.id,
                      ht = st.onToggle,
                      dt = st.onRefresh,
                      pt = st.scrub,
                      gt = st.trigger,
                      _t = st.pin,
                      mt = st.pinSpacing,
                      vt = st.invalidateOnRefresh,
                      yt = st.anticipatePin,
                      xt = st.onScrubComplete,
                      Et = st.onSnapComplete,
                      Mt = st.once,
                      Rt = st.snap,
                      Dt = st.pinReparent,
                      It = st.pinSpacer,
                      Ft = st.containerAnimation,
                      Nt = st.fastScrollEnd,
                      qt = st.preventOverlaps,
                      Wt =
                        e.horizontal ||
                        (e.containerAnimation && !1 !== e.horizontal)
                          ? L
                          : R,
                      Vt = !pt && 0 !== pt,
                      te = D(e.scroller || U),
                      ee = W.core.getCache(te),
                      re = Yt(te),
                      ne =
                        "fixed" ===
                        ("pinType" in e
                          ? e.pinType
                          : E(te, "pinType") || (re && "fixed")),
                      be = [e.onEnter, e.onLeave, e.onEnterBack, e.onLeaveBack],
                      Ee = Vt && e.toggleActions.split(" "),
                      Ce = "markers" in e ? e.markers : Se.markers,
                      Oe = re
                        ? 0
                        : parseFloat(ge(te)["border" + Wt.p2 + he]) || 0,
                      Re = this,
                      ze =
                        e.onRefreshInit &&
                        function () {
                          return e.onRefreshInit(Re);
                        },
                      Fe = Xt(te, re, Wt),
                      Ye = Ut(te, re),
                      qe = 0,
                      Xe = 0,
                      Ue = 0,
                      He = I(te, Wt);
                    if (
                      ((Re._startClamp = Re._endClamp = !1),
                      (Re._dir = Wt),
                      (yt *= 45),
                      (Re.scroller = te),
                      (Re.scroll = Ft ? Ft.time.bind(Ft) : He),
                      (s = He()),
                      (Re.vars = e),
                      (r = r || e.animation),
                      "refreshPriority" in e &&
                        ((at = 1), -9999 === e.refreshPriority && (kt = Re)),
                      (ee.tweenScroll = ee.tweenScroll || {
                        top: _r(te, R),
                        left: _r(te, L),
                      }),
                      (Re.tweenTo = n = ee.tweenScroll[Wt.p]),
                      (Re.scrubDuration = function (t) {
                        (X = Gt(t) && t)
                          ? q
                            ? q.duration(t)
                            : (q = W.to(r, {
                                ease: "expo",
                                totalProgress: "+=0",
                                duration: X,
                                paused: !0,
                                onComplete: function () {
                                  return xt && xt(Re);
                                },
                              }))
                          : (q && q.progress(1).kill(), (q = 0));
                      }),
                      r &&
                        ((r.vars.lazy = !1),
                        (r._initted && !Re.isReverted) ||
                          (!1 !== r.vars.immediateRender &&
                            !1 !== e.immediateRender &&
                            r.duration() &&
                            r.render(0, !0, !0)),
                        (Re.animation = r.pause()),
                        (r.scrollTrigger = Re),
                        Re.scrubDuration(pt),
                        (N = 0),
                        ft || (ft = r.vars.id)),
                      Rt &&
                        ((Qt(Rt) && !Rt.push) || (Rt = { snapTo: Rt }),
                        "scrollBehavior" in $.style &&
                          W.set(re ? [$, V] : te, { scrollBehavior: "auto" }),
                        y.forEach(function (t) {
                          return (
                            jt(t) &&
                            t.target === (re ? H.scrollingElement || V : te) &&
                            (t.smooth = !1)
                          );
                        }),
                        (o = jt(Rt.snapTo)
                          ? Rt.snapTo
                          : "labels" === Rt.snapTo
                          ? we(r)
                          : "labelsDirectional" === Rt.snapTo
                          ? Te(r)
                          : !1 !== Rt.directional
                          ? function (t, e) {
                              return xe(Rt.snapTo)(
                                t,
                                Ct() - Xe < 500 ? 0 : e.direction,
                              );
                            }
                          : W.utils.snap(Rt.snapTo)),
                        (j = Rt.duration || { min: 0.1, max: 2 }),
                        (j = Qt(j) ? Z(j.min, j.max) : Z(j, j)),
                        (G = W.delayedCall(
                          Rt.delay || X / 2 || 0.1,
                          function () {
                            var t = He(),
                              e = Ct() - Xe < 500,
                              i = n.tween;
                            if (
                              !(e || Math.abs(Re.getVelocity()) < 10) ||
                              i ||
                              et ||
                              qe === t
                            )
                              Re.isActive && qe !== t && G.restart(!0);
                            else {
                              var s = (t - l) / _,
                                a = r && !Vt ? r.totalProgress() : s,
                                c = e ? 0 : ((a - Y) / (Ct() - J)) * 1e3 || 0,
                                f = W.utils.clamp(
                                  -s,
                                  1 - s,
                                  (Kt(c / 2) * c) / 0.185,
                                ),
                                h = s + (!1 === Rt.inertia ? 0 : f),
                                d = Z(0, 1, o(h, Re)),
                                p = Math.round(l + d * _),
                                g = Rt,
                                m = g.onStart,
                                v = g.onInterrupt,
                                y = g.onComplete;
                              if (t <= u && t >= l && p !== t) {
                                if (i && !i._initted && i.data <= Kt(p - t))
                                  return;
                                !1 === Rt.inertia && (f = d - s),
                                  n(
                                    p,
                                    {
                                      duration: j(
                                        Kt(
                                          (0.185 *
                                            Math.max(Kt(h - a), Kt(d - a))) /
                                            c /
                                            0.05 || 0,
                                        ),
                                      ),
                                      ease: Rt.ease || "power3",
                                      data: Kt(p - t),
                                      onInterrupt: function () {
                                        return G.restart(!0) && v && v(Re);
                                      },
                                      onComplete: function () {
                                        Re.update(),
                                          (qe = He()),
                                          q && r && r.progress(d),
                                          (N = Y =
                                            r && !Vt
                                              ? r.totalProgress()
                                              : Re.progress),
                                          Et && Et(Re),
                                          y && y(Re);
                                      },
                                    },
                                    t,
                                    f * _,
                                    p - t - f * _,
                                  ),
                                  m && m(Re, n.tween);
                              }
                            }
                          },
                        ).pause())),
                      ft && (Ie[ft] = Re),
                      (ot =
                        (gt = Re.trigger = D(gt || (!0 !== _t && _t))) &&
                        gt._gsap &&
                        gt._gsap.stRevert) && (ot = ot(Re)),
                      (_t = !0 === _t ? gt : D(_t)),
                      $t(ct) && (ct = { targets: gt, className: ct }),
                      _t &&
                        (!1 === mt ||
                          mt === fe ||
                          (mt =
                            !(
                              !mt &&
                              _t.parentNode &&
                              _t.parentNode.style &&
                              "flex" === ge(_t.parentNode).display
                            ) && ce),
                        (Re.pin = _t),
                        (i = W.core.getCache(_t)).spacer
                          ? (m = i.pinState)
                          : (It &&
                              ((It = D(It)) &&
                                !It.nodeType &&
                                (It = It.current || It.nativeElement),
                              (i.spacerIsNative = !!It),
                              It && (i.spacerState = lr(It))),
                            (i.spacer = x = It || H.createElement("div")),
                            x.classList.add("pin-spacer"),
                            ft && x.classList.add("pin-spacer-" + ft),
                            (i.pinState = m = lr(_t))),
                        !1 !== e.force3D && W.set(_t, { force3D: !0 }),
                        (Re.spacer = x = i.spacer),
                        (F = ge(_t)),
                        (S = F[mt + Wt.os2]),
                        (k = W.getProperty(_t)),
                        (A = W.quickSetter(_t, Wt.a, pe)),
                        or(_t, x, F),
                        (w = lr(_t))),
                      Ce)
                    ) {
                      (p = Qt(Ce) ? me(Ce, Me) : Me),
                        (h = Le("scroller-start", ft, te, Wt, p, 0)),
                        (d = Le("scroller-end", ft, te, Wt, p, 0, h)),
                        (T = h["offset" + Wt.op.d2]);
                      var Ve = D(E(te, "content") || te);
                      (c = this.markerStart =
                        Le("start", ft, Ve, Wt, p, T, 0, Ft)),
                        (f = this.markerEnd =
                          Le("end", ft, Ve, Wt, p, T, 0, Ft)),
                        Ft && (it = W.quickSetter([c, f], Wt.a, pe)),
                        ne ||
                          (b.length && !0 === E(te, "fixedMarkers")) ||
                          (_e(re ? $ : te),
                          W.set([h, d], { force3D: !0 }),
                          (P = W.quickSetter(h, Wt.a, pe)),
                          (B = W.quickSetter(d, Wt.a, pe)));
                    }
                    if (Ft) {
                      var $e = Ft.vars.onUpdate,
                        je = Ft.vars.onUpdateParams;
                      Ft.eventCallback("onUpdate", function () {
                        Re.update(0, 0, 1), $e && $e.apply(Ft, je || []);
                      });
                    }
                    if (
                      ((Re.previous = function () {
                        return De[De.indexOf(Re) - 1];
                      }),
                      (Re.next = function () {
                        return De[De.indexOf(Re) + 1];
                      }),
                      (Re.revert = function (t, e) {
                        if (!e) return Re.kill(!0);
                        var n = !1 !== t || !Re.enabled,
                          i = tt;
                        n !== Re.isReverted &&
                          (n &&
                            ((K = Math.max(He(), Re.scroll.rec || 0)),
                            (Ue = Re.progress),
                            (rt = r && r.progress())),
                          c &&
                            [c, f, h, d].forEach(function (t) {
                              return (t.style.display = n ? "none" : "block");
                            }),
                          n && ((tt = Re), Re.update(n)),
                          !_t ||
                            (Dt && Re.isActive) ||
                            (n ? ir(_t, x, m) : or(_t, x, ge(_t), O)),
                          n || Re.update(n),
                          (tt = i),
                          (Re.isReverted = n));
                      }),
                      (Re.refresh = function (i, o, p, y) {
                        if ((!tt && Re.enabled) || o)
                          if (_t && i && St) ke(t, "scrollEnd", We);
                          else {
                            !Tt && ze && ze(Re),
                              (tt = Re),
                              n.tween && !p && (n.tween.kill(), (n.tween = 0)),
                              q && q.pause(),
                              vt && r && r.revert({ kill: !1 }).invalidate(),
                              Re.isReverted || Re.revert(!0, !0),
                              (Re._subPinOffset = !1);
                            var b,
                              T,
                              E,
                              A,
                              S,
                              P,
                              B,
                              F,
                              N,
                              Y,
                              X,
                              U,
                              j,
                              Q = Fe(),
                              Z = Ye(),
                              J = Ft ? Ft.duration() : Ht(te, Wt),
                              et = _ <= 0.01,
                              nt = 0,
                              it = y || 0,
                              ot = Qt(p) ? p.end : e.end,
                              st = e.endTrigger || gt,
                              at = Qt(p)
                                ? p.start
                                : e.start ||
                                  (0 !== e.start && gt
                                    ? _t
                                      ? "0 0"
                                      : "0 100%"
                                    : 0),
                              ut = (Re.pinnedContainer =
                                e.pinnedContainer && D(e.pinnedContainer, Re)),
                              ct = (gt && Math.max(0, De.indexOf(Re))) || 0,
                              ft = ct;
                            for (
                              Ce &&
                              Qt(p) &&
                              ((U = W.getProperty(h, Wt.p)),
                              (j = W.getProperty(d, Wt.p)));
                              ft--;

                            )
                              (P = De[ft]).end || P.refresh(0, 1) || (tt = Re),
                                !(B = P.pin) ||
                                  (B !== gt && B !== _t && B !== ut) ||
                                  P.isReverted ||
                                  (Y || (Y = []),
                                  Y.unshift(P),
                                  P.revert(!0, !0)),
                                P !== De[ft] && (ct--, ft--);
                            for (
                              jt(at) && (at = at(Re)),
                                at = Pt(at, "start", Re),
                                l =
                                  fr(
                                    at,
                                    gt,
                                    Q,
                                    Wt,
                                    He(),
                                    c,
                                    h,
                                    Re,
                                    Z,
                                    Oe,
                                    ne,
                                    J,
                                    Ft,
                                    Re._startClamp && "_startClamp",
                                  ) || (_t ? -0.001 : 0),
                                jt(ot) && (ot = ot(Re)),
                                $t(ot) &&
                                  !ot.indexOf("+=") &&
                                  (~ot.indexOf(" ")
                                    ? (ot =
                                        ($t(at) ? at.split(" ")[0] : "") + ot)
                                    : ((nt = Pe(ot.substr(2), Q)),
                                      (ot = $t(at)
                                        ? at
                                        : (Ft
                                            ? W.utils.mapRange(
                                                0,
                                                Ft.duration(),
                                                Ft.scrollTrigger.start,
                                                Ft.scrollTrigger.end,
                                                l,
                                              )
                                            : l) + nt),
                                      (st = gt))),
                                ot = Pt(ot, "end", Re),
                                u =
                                  Math.max(
                                    l,
                                    fr(
                                      ot || (st ? "100% 0" : J),
                                      st,
                                      Q,
                                      Wt,
                                      He() + nt,
                                      f,
                                      d,
                                      Re,
                                      Z,
                                      Oe,
                                      ne,
                                      J,
                                      Ft,
                                      Re._endClamp && "_endClamp",
                                    ),
                                  ) || -0.001,
                                nt = 0,
                                ft = ct;
                              ft--;

                            )
                              (B = (P = De[ft]).pin) &&
                                P.start - P._pinPush <= l &&
                                !Ft &&
                                P.end > 0 &&
                                ((b =
                                  P.end -
                                  (Re._startClamp
                                    ? Math.max(0, P.start)
                                    : P.start)),
                                ((B === gt && P.start - P._pinPush < l) ||
                                  B === ut) &&
                                  isNaN(at) &&
                                  (nt += b * (1 - P.progress)),
                                B === _t && (it += b));
                            if (
                              ((l += nt),
                              (u += nt),
                              Re._startClamp && (Re._startClamp += nt),
                              Re._endClamp &&
                                !Tt &&
                                ((Re._endClamp = u || -0.001),
                                (u = Math.min(u, Ht(te, Wt)))),
                              (_ = u - l || ((l -= 0.01) && 0.001)),
                              et &&
                                (Ue = W.utils.clamp(
                                  0,
                                  1,
                                  W.utils.normalize(l, u, K),
                                )),
                              (Re._pinPush = it),
                              c &&
                                nt &&
                                (((b = {})[Wt.a] = "+=" + nt),
                                ut && (b[Wt.p] = "-=" + He()),
                                W.set([c, f], b)),
                              !_t || (bt && Re.end >= Ht(te, Wt)))
                            ) {
                              if (gt && He() && !Ft)
                                for (T = gt.parentNode; T && T !== $; )
                                  T._pinOffset &&
                                    ((l -= T._pinOffset), (u -= T._pinOffset)),
                                    (T = T.parentNode);
                            } else
                              (b = ge(_t)),
                                (A = Wt === R),
                                (E = He()),
                                (C = parseFloat(k(Wt.a)) + it),
                                !J &&
                                  u > 1 &&
                                  ((X = {
                                    style: (X = (
                                      re ? H.scrollingElement || V : te
                                    ).style),
                                    value: X["overflow" + Wt.a.toUpperCase()],
                                  }),
                                  re &&
                                    "scroll" !==
                                      ge($)["overflow" + Wt.a.toUpperCase()] &&
                                    (X.style["overflow" + Wt.a.toUpperCase()] =
                                      "scroll")),
                                or(_t, x, b),
                                (w = lr(_t)),
                                (T = ve(_t, !0)),
                                (F = ne && I(te, A ? L : R)()),
                                mt &&
                                  (((O = [mt + Wt.os2, _ + it + pe]).t = x),
                                  (ft = mt === ce ? ye(_t, Wt) + _ + it : 0) &&
                                    (O.push(Wt.d, ft + pe),
                                    "auto" !== x.style.flexBasis &&
                                      (x.style.flexBasis = ft + pe)),
                                  ar(O),
                                  ut &&
                                    De.forEach(function (t) {
                                      t.pin === ut &&
                                        !1 !== t.vars.pinSpacing &&
                                        (t._subPinOffset = !0);
                                    }),
                                  ne && He(K)),
                                ne &&
                                  (((S = {
                                    top: T.top + (A ? E - l : F) + pe,
                                    left: T.left + (A ? F : E - l) + pe,
                                    boxSizing: "border-box",
                                    position: "fixed",
                                  })[ie] = S["max" + he] =
                                    Math.ceil(T.width) + pe),
                                  (S[oe] = S["max" + de] =
                                    Math.ceil(T.height) + pe),
                                  (S[fe] =
                                    S[fe + le] =
                                    S[fe + se] =
                                    S[fe + ue] =
                                    S[fe + ae] =
                                      "0"),
                                  (S[ce] = b[ce]),
                                  (S[ce + le] = b[ce + le]),
                                  (S[ce + se] = b[ce + se]),
                                  (S[ce + ue] = b[ce + ue]),
                                  (S[ce + ae] = b[ce + ae]),
                                  (v = ur(m, S, Dt)),
                                  Tt && He(0)),
                                r
                                  ? ((N = r._initted),
                                    lt(1),
                                    r.render(r.duration(), !0, !0),
                                    (M = k(Wt.a) - C + _ + it),
                                    (z = Math.abs(_ - M) > 1),
                                    ne && z && v.splice(v.length - 2, 2),
                                    r.render(0, !0, !0),
                                    N || r.invalidate(!0),
                                    r.parent || r.totalTime(r.totalTime()),
                                    lt(0))
                                  : (M = _),
                                X &&
                                  (X.value
                                    ? (X.style[
                                        "overflow" + Wt.a.toUpperCase()
                                      ] = X.value)
                                    : X.style.removeProperty(
                                        "overflow-" + Wt.a,
                                      ));
                            Y &&
                              Y.forEach(function (t) {
                                return t.revert(!1, !0);
                              }),
                              (Re.start = l),
                              (Re.end = u),
                              (s = a = Tt ? K : He()),
                              Ft || Tt || (s < K && He(K), (Re.scroll.rec = 0)),
                              Re.revert(!1, !0),
                              (Xe = Ct()),
                              G && ((qe = -1), G.restart(!0)),
                              (tt = 0),
                              r &&
                                Vt &&
                                (r._initted || rt) &&
                                r.progress() !== rt &&
                                r
                                  .progress(rt || 0, !0)
                                  .render(r.time(), !0, !0),
                              (et || Ue !== Re.progress || Ft) &&
                                (r &&
                                  !Vt &&
                                  r.totalProgress(
                                    Ft && l < -0.001 && !Ue
                                      ? W.utils.normalize(l, u, 0)
                                      : Ue,
                                    !0,
                                  ),
                                (Re.progress =
                                  et || (s - l) / _ === Ue ? 0 : Ue)),
                              _t &&
                                mt &&
                                (x._pinOffset = Math.round(Re.progress * M)),
                              q && q.invalidate(),
                              isNaN(U) ||
                                ((U -= W.getProperty(h, Wt.p)),
                                (j -= W.getProperty(d, Wt.p)),
                                gr(h, Wt, U),
                                gr(c, Wt, U - (y || 0)),
                                gr(d, Wt, j),
                                gr(f, Wt, j - (y || 0))),
                              et && !Tt && Re.update(),
                              !dt || Tt || g || ((g = !0), dt(Re), (g = !1));
                          }
                      }),
                      (Re.getVelocity = function () {
                        return ((He() - a) / (Ct() - J)) * 1e3 || 0;
                      }),
                      (Re.endAnimation = function () {
                        Zt(Re.callbackAnimation),
                          r &&
                            (q
                              ? q.progress(1)
                              : r.paused()
                              ? Vt || Zt(r, Re.direction < 0, 1)
                              : Zt(r, r.reversed()));
                      }),
                      (Re.labelToScroll = function (t) {
                        return (
                          (r &&
                            r.labels &&
                            (l || Re.refresh() || l) +
                              (r.labels[t] / r.duration()) * _) ||
                          0
                        );
                      }),
                      (Re.getTrailing = function (t) {
                        var e = De.indexOf(Re),
                          r =
                            Re.direction > 0
                              ? De.slice(0, e).reverse()
                              : De.slice(e + 1);
                        return (
                          $t(t)
                            ? r.filter(function (e) {
                                return e.vars.preventOverlaps === t;
                              })
                            : r
                        ).filter(function (t) {
                          return Re.direction > 0 ? t.end <= l : t.start >= u;
                        });
                      }),
                      (Re.update = function (t, e, i) {
                        if (!Ft || i || t) {
                          var o,
                            c,
                            f,
                            d,
                            p,
                            g,
                            m,
                            y = !0 === Tt ? K : Re.scroll(),
                            b = t ? 0 : (y - l) / _,
                            T = b < 0 ? 0 : b > 1 ? 1 : b || 0,
                            E = Re.progress;
                          if (
                            (e &&
                              ((a = s),
                              (s = Ft ? He() : y),
                              Rt &&
                                ((Y = N),
                                (N = r && !Vt ? r.totalProgress() : T))),
                            yt &&
                              !T &&
                              _t &&
                              !tt &&
                              !At &&
                              St &&
                              l < y + ((y - a) / (Ct() - J)) * yt &&
                              (T = 1e-4),
                            T !== E && Re.enabled)
                          ) {
                            if (
                              ((d =
                                (p =
                                  (o = Re.isActive = !!T && T < 1) !=
                                  (!!E && E < 1)) || !!T != !!E),
                              (Re.direction = T > E ? 1 : -1),
                              (Re.progress = T),
                              d &&
                                !tt &&
                                ((c =
                                  T && !E ? 0 : 1 === T ? 1 : 1 === E ? 2 : 3),
                                Vt &&
                                  ((f =
                                    (!p && "none" !== Ee[c + 1] && Ee[c + 1]) ||
                                    Ee[c]),
                                  (m =
                                    r &&
                                    ("complete" === f ||
                                      "reset" === f ||
                                      f in r)))),
                              qt &&
                                (p || m) &&
                                (m || pt || !r) &&
                                (jt(qt)
                                  ? qt(Re)
                                  : Re.getTrailing(qt).forEach(function (t) {
                                      return t.endAnimation();
                                    })),
                              Vt ||
                                (!q || tt || At
                                  ? r &&
                                    r.totalProgress(T, !(!tt || (!Xe && !t)))
                                  : (q._dp._time - q._start !== q._time &&
                                      q.render(q._dp._time - q._start),
                                    q.resetTo
                                      ? q.resetTo(
                                          "totalProgress",
                                          T,
                                          r._tTime / r._tDur,
                                        )
                                      : ((q.vars.totalProgress = T),
                                        q.invalidate().restart()))),
                              _t)
                            )
                              if ((t && mt && (x.style[mt + Wt.os2] = S), ne)) {
                                if (d) {
                                  if (
                                    ((g =
                                      !t &&
                                      T > E &&
                                      u + 1 > y &&
                                      y + 1 >= Ht(te, Wt)),
                                    Dt)
                                  )
                                    if (t || (!o && !g)) dr(_t, x);
                                    else {
                                      var k = ve(_t, !0),
                                        O = y - l;
                                      dr(
                                        _t,
                                        $,
                                        k.top + (Wt === R ? O : 0) + pe,
                                        k.left + (Wt === R ? 0 : O) + pe,
                                      );
                                    }
                                  ar(o || g ? v : w),
                                    (z && T < 1 && o) ||
                                      A(C + (1 !== T || g ? 0 : M));
                                }
                              } else A(Bt(C + M * T));
                            Rt && !n.tween && !tt && !At && G.restart(!0),
                              ct &&
                                (p || (Mt && T && (T < 1 || !wt))) &&
                                Q(ct.targets).forEach(function (t) {
                                  return t.classList[
                                    o || Mt ? "add" : "remove"
                                  ](ct.className);
                                }),
                              ut && !Vt && !t && ut(Re),
                              d && !tt
                                ? (Vt &&
                                    (m &&
                                      ("complete" === f
                                        ? r.pause().totalProgress(1)
                                        : "reset" === f
                                        ? r.restart(!0).pause()
                                        : "restart" === f
                                        ? r.restart(!0)
                                        : r[f]()),
                                    ut && ut(Re)),
                                  (!p && wt) ||
                                    (ht && p && Jt(Re, ht),
                                    be[c] && Jt(Re, be[c]),
                                    Mt &&
                                      (1 === T ? Re.kill(!1, 1) : (be[c] = 0)),
                                    p ||
                                      (be[(c = 1 === T ? 1 : 3)] &&
                                        Jt(Re, be[c]))),
                                  Nt &&
                                    !o &&
                                    Math.abs(Re.getVelocity()) >
                                      (Gt(Nt) ? Nt : 2500) &&
                                    (Zt(Re.callbackAnimation),
                                    q
                                      ? q.progress(1)
                                      : Zt(r, "reverse" === f ? 1 : !T, 1)))
                                : Vt && ut && !tt && ut(Re);
                          }
                          if (B) {
                            var L = Ft
                              ? (y / Ft.duration()) * (Ft._caScrollDist || 0)
                              : y;
                            P(L + (h._isFlipped ? 1 : 0)), B(L);
                          }
                          it &&
                            it((-y / Ft.duration()) * (Ft._caScrollDist || 0));
                        }
                      }),
                      (Re.enable = function (e, r) {
                        Re.enabled ||
                          ((Re.enabled = !0),
                          ke(te, "resize", Ne),
                          re || ke(te, "scroll", Be),
                          ze && ke(t, "refreshInit", ze),
                          !1 !== e &&
                            ((Re.progress = Ue = 0), (s = a = qe = He())),
                          !1 !== r && Re.refresh());
                      }),
                      (Re.getTween = function (t) {
                        return t && n ? n.tween : q;
                      }),
                      (Re.setPositions = function (t, e, r, n) {
                        if (Ft) {
                          var i = Ft.scrollTrigger,
                            o = Ft.duration(),
                            s = i.end - i.start;
                          (t = i.start + (s * t) / o),
                            (e = i.start + (s * e) / o);
                        }
                        Re.refresh(
                          !1,
                          !1,
                          {
                            start: Lt(t, r && !!Re._startClamp),
                            end: Lt(e, r && !!Re._endClamp),
                          },
                          n,
                        ),
                          Re.update();
                      }),
                      (Re.adjustPinSpacing = function (t) {
                        if (O && t) {
                          var e = O.indexOf(Wt.d) + 1;
                          (O[e] = parseFloat(O[e]) + t + pe),
                            (O[1] = parseFloat(O[1]) + t + pe),
                            ar(O);
                        }
                      }),
                      (Re.disable = function (e, r) {
                        if (
                          Re.enabled &&
                          (!1 !== e && Re.revert(!0, !0),
                          (Re.enabled = Re.isActive = !1),
                          r || (q && q.pause()),
                          (K = 0),
                          i && (i.uncache = 1),
                          ze && Ae(t, "refreshInit", ze),
                          G &&
                            (G.pause(),
                            n.tween && n.tween.kill() && (n.tween = 0)),
                          !re)
                        ) {
                          for (var o = De.length; o--; )
                            if (De[o].scroller === te && De[o] !== Re) return;
                          Ae(te, "resize", Ne), re || Ae(te, "scroll", Be);
                        }
                      }),
                      (Re.kill = function (t, n) {
                        Re.disable(t, n),
                          q && !n && q.kill(),
                          ft && delete Ie[ft];
                        var o = De.indexOf(Re);
                        o >= 0 && De.splice(o, 1),
                          o === nt && tr > 0 && nt--,
                          (o = 0),
                          De.forEach(function (t) {
                            return t.scroller === Re.scroller && (o = 1);
                          }),
                          o || Tt || (Re.scroll.rec = 0),
                          r &&
                            ((r.scrollTrigger = null),
                            t && r.revert({ kill: !1 }),
                            n || r.kill()),
                          c &&
                            [c, f, h, d].forEach(function (t) {
                              return (
                                t.parentNode && t.parentNode.removeChild(t)
                              );
                            }),
                          kt === Re && (kt = 0),
                          _t &&
                            (i && (i.uncache = 1),
                            (o = 0),
                            De.forEach(function (t) {
                              return t.pin === _t && o++;
                            }),
                            o || (i.spacer = 0)),
                          e.onKill && e.onKill(Re);
                      }),
                      De.push(Re),
                      Re.enable(!1, !1),
                      ot && ot(Re),
                      r && r.add && !_)
                    ) {
                      var Qe = Re.update;
                      (Re.update = function () {
                        (Re.update = Qe), l || u || Re.refresh();
                      }),
                        W.delayedCall(0.01, Re.update),
                        (_ = 0.01),
                        (l = u = 0);
                    } else Re.refresh();
                    _t && Ge();
                  } else this.update = this.refresh = this.kill = zt;
                }),
                (t.register = function (e) {
                  return (
                    X ||
                      ((W = e || Nt()),
                      Ft() && window.document && t.enable(),
                      (X = Ot)),
                    X
                  );
                }),
                (t.defaults = function (t) {
                  if (t) for (var e in t) Se[e] = t[e];
                  return Se;
                }),
                (t.disable = function (t, e) {
                  (Ot = 0),
                    De.forEach(function (r) {
                      return r[e ? "kill" : "disable"](t);
                    }),
                    Ae(U, "wheel", Be),
                    Ae(H, "scroll", Be),
                    clearInterval(K),
                    Ae(H, "touchcancel", zt),
                    Ae($, "touchstart", zt),
                    Ee(Ae, H, "pointerdown,touchstart,mousedown", Dt),
                    Ee(Ae, H, "pointerup,touchend,mouseup", It),
                    G.kill(),
                    Vt(Ae);
                  for (var r = 0; r < y.length; r += 3)
                    Ce(Ae, y[r], y[r + 1]), Ce(Ae, y[r], y[r + 2]);
                }),
                (t.enable = function () {
                  if (
                    ((U = window),
                    (H = document),
                    (V = H.documentElement),
                    ($ = H.body),
                    W &&
                      ((Q = W.utils.toArray),
                      (Z = W.utils.clamp),
                      (gt = W.core.context || zt),
                      (lt = W.core.suppressOverwrites || zt),
                      (_t = U.history.scrollRestoration || "auto"),
                      (Ke = U.pageYOffset),
                      W.core.globals("ScrollTrigger", t),
                      $))
                  ) {
                    (Ot = 1),
                      ((mt = document.createElement("div")).style.height =
                        "100vh"),
                      (mt.style.position = "absolute"),
                      Qe(),
                      Rt(),
                      q.register(W),
                      (t.isTouch = q.isTouch),
                      (pt =
                        q.isTouch &&
                        /(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent)),
                      ke(U, "wheel", Be),
                      (j = [U, H, V, $]),
                      W.matchMedia
                        ? ((t.matchMedia = function (t) {
                            var e,
                              r = W.matchMedia();
                            for (e in t) r.add(e, t[e]);
                            return r;
                          }),
                          W.addEventListener("matchMediaInit", function () {
                            return Ve();
                          }),
                          W.addEventListener("matchMediaRevert", function () {
                            return He();
                          }),
                          W.addEventListener("matchMedia", function () {
                            Je(0, 1), Xe("matchMedia");
                          }),
                          W.matchMedia("(orientation: portrait)", function () {
                            return Fe(), Fe;
                          }))
                        : console.warn("Requires GSAP 3.11.0 or later"),
                      Fe(),
                      ke(H, "scroll", Be);
                    var e,
                      r,
                      n = $.style,
                      i = n.borderTopStyle,
                      o = W.core.Animation.prototype;
                    for (
                      o.revert ||
                        Object.defineProperty(o, "revert", {
                          value: function () {
                            return this.time(-0.01, !0);
                          },
                        }),
                        n.borderTopStyle = "solid",
                        e = ve($),
                        R.m = Math.round(e.top + R.sc()) || 0,
                        L.m = Math.round(e.left + L.sc()) || 0,
                        i
                          ? (n.borderTopStyle = i)
                          : n.removeProperty("border-top-style"),
                        K = setInterval(ze, 250),
                        W.delayedCall(0.5, function () {
                          return (At = 0);
                        }),
                        ke(H, "touchcancel", zt),
                        ke($, "touchstart", zt),
                        Ee(ke, H, "pointerdown,touchstart,mousedown", Dt),
                        Ee(ke, H, "pointerup,touchend,mouseup", It),
                        rt = W.utils.checkPrefix("transform"),
                        nr.push(rt),
                        X = Ct(),
                        G = W.delayedCall(0.2, Je).pause(),
                        st = [
                          H,
                          "visibilitychange",
                          function () {
                            var t = U.innerWidth,
                              e = U.innerHeight;
                            H.hidden
                              ? ((it = t), (ot = e))
                              : (it === t && ot === e) || Ne();
                          },
                          H,
                          "DOMContentLoaded",
                          Je,
                          U,
                          "load",
                          Je,
                          U,
                          "resize",
                          Ne,
                        ],
                        Vt(ke),
                        De.forEach(function (t) {
                          return t.enable(0, 1);
                        }),
                        r = 0;
                      r < y.length;
                      r += 3
                    )
                      Ce(Ae, y[r], y[r + 1]), Ce(Ae, y[r], y[r + 2]);
                  }
                }),
                (t.config = function (e) {
                  "limitCallbacks" in e && (wt = !!e.limitCallbacks);
                  var r = e.syncInterval;
                  (r && clearInterval(K)) || ((K = r) && setInterval(ze, r)),
                    "ignoreMobileResize" in e &&
                      (ft = 1 === t.isTouch && e.ignoreMobileResize),
                    "autoRefreshEvents" in e &&
                      (Vt(Ae) || Vt(ke, e.autoRefreshEvents || "none"),
                      (ut =
                        -1 === (e.autoRefreshEvents + "").indexOf("resize")));
                }),
                (t.scrollerProxy = function (t, e) {
                  var r = D(t),
                    n = y.indexOf(r),
                    i = Yt(r);
                  ~n && y.splice(n, i ? 6 : 2),
                    e && (i ? b.unshift(U, e, $, e, V, e) : b.unshift(r, e));
                }),
                (t.clearMatchMedia = function (t) {
                  De.forEach(function (e) {
                    return e._ctx && e._ctx.query === t && e._ctx.kill(!0, !0);
                  });
                }),
                (t.isInViewport = function (t, e, r) {
                  var n = ($t(t) ? D(t) : t).getBoundingClientRect(),
                    i = n[r ? ie : oe] * e || 0;
                  return r
                    ? n.right - i > 0 && n.left + i < U.innerWidth
                    : n.bottom - i > 0 && n.top + i < U.innerHeight;
                }),
                (t.positionInViewport = function (t, e, r) {
                  $t(t) && (t = D(t));
                  var n = t.getBoundingClientRect(),
                    i = n[r ? ie : oe],
                    o =
                      null == e
                        ? i / 2
                        : e in Oe
                        ? Oe[e] * i
                        : ~e.indexOf("%")
                        ? (parseFloat(e) * i) / 100
                        : parseFloat(e) || 0;
                  return r
                    ? (n.left + o) / U.innerWidth
                    : (n.top + o) / U.innerHeight;
                }),
                (t.killAll = function (t) {
                  if (
                    (De.slice(0).forEach(function (t) {
                      return "ScrollSmoother" !== t.vars.id && t.kill();
                    }),
                    !0 !== t)
                  ) {
                    var e = Ye.killAll || [];
                    (Ye = {}),
                      e.forEach(function (t) {
                        return t();
                      });
                  }
                }),
                t
              );
            })();
          (mr.version = "3.12.4"),
            (mr.saveStyles = function (t) {
              return t
                ? Q(t).forEach(function (t) {
                    if (t && t.style) {
                      var e = Ue.indexOf(t);
                      e >= 0 && Ue.splice(e, 5),
                        Ue.push(
                          t,
                          t.style.cssText,
                          t.getBBox && t.getAttribute("transform"),
                          W.core.getCache(t),
                          gt(),
                        );
                    }
                  })
                : Ue;
            }),
            (mr.revert = function (t, e) {
              return Ve(!t, e);
            }),
            (mr.create = function (t, e) {
              return new mr(t, e);
            }),
            (mr.refresh = function (t) {
              return t ? Ne() : (X || mr.register()) && Je(!0);
            }),
            (mr.update = function (t) {
              return ++y.cache && er(!0 === t ? 2 : 0);
            }),
            (mr.clearScrollMemory = $e),
            (mr.maxScroll = function (t, e) {
              return Ht(t, e ? L : R);
            }),
            (mr.getScrollFunc = function (t, e) {
              return I(D(t), e ? L : R);
            }),
            (mr.getById = function (t) {
              return Ie[t];
            }),
            (mr.getAll = function () {
              return De.filter(function (t) {
                return "ScrollSmoother" !== t.vars.id;
              });
            }),
            (mr.isScrolling = function () {
              return !!St;
            }),
            (mr.snapDirectional = xe),
            (mr.addEventListener = function (t, e) {
              var r = Ye[t] || (Ye[t] = []);
              ~r.indexOf(e) || r.push(e);
            }),
            (mr.removeEventListener = function (t, e) {
              var r = Ye[t],
                n = r && r.indexOf(e);
              n >= 0 && r.splice(n, 1);
            }),
            (mr.batch = function (t, e) {
              var r,
                n = [],
                i = {},
                o = e.interval || 0.016,
                s = e.batchMax || 1e9,
                a = function (t, e) {
                  var r = [],
                    n = [],
                    i = W.delayedCall(o, function () {
                      e(r, n), (r = []), (n = []);
                    }).pause();
                  return function (t) {
                    r.length || i.restart(!0),
                      r.push(t.trigger),
                      n.push(t),
                      s <= r.length && i.progress(1);
                  };
                };
              for (r in e)
                i[r] =
                  "on" === r.substr(0, 2) && jt(e[r]) && "onRefreshInit" !== r
                    ? a(r, e[r])
                    : e[r];
              return (
                jt(s) &&
                  ((s = s()),
                  ke(mr, "refresh", function () {
                    return (s = e.batchMax());
                  })),
                Q(t).forEach(function (t) {
                  var e = {};
                  for (r in i) e[r] = i[r];
                  (e.trigger = t), n.push(mr.create(e));
                }),
                n
              );
            });
          var vr,
            yr = function (t, e, r, n) {
              return (
                e > n ? t(n) : e < 0 && t(0),
                r > n ? (n - e) / (r - e) : r < 0 ? e / (e - r) : 1
              );
            },
            br = function t(e, r) {
              !0 === r
                ? e.style.removeProperty("touch-action")
                : (e.style.touchAction =
                    !0 === r
                      ? "auto"
                      : r
                      ? "pan-" + r + (q.isTouch ? " pinch-zoom" : "")
                      : "none"),
                e === V && t($, r);
            },
            wr = { auto: 1, scroll: 1 },
            xr = function (t) {
              var e,
                r = t.event,
                n = t.target,
                i = t.axis,
                o = (r.changedTouches ? r.changedTouches[0] : r).target,
                s = o._gsap || W.core.getCache(o),
                a = Ct();
              if (!s._isScrollT || a - s._isScrollT > 2e3) {
                for (
                  ;
                  o &&
                  o !== $ &&
                  ((o.scrollHeight <= o.clientHeight &&
                    o.scrollWidth <= o.clientWidth) ||
                    (!wr[(e = ge(o)).overflowY] && !wr[e.overflowX]));

                )
                  o = o.parentNode;
                (s._isScroll =
                  o &&
                  o !== n &&
                  !Yt(o) &&
                  (wr[(e = ge(o)).overflowY] || wr[e.overflowX])),
                  (s._isScrollT = a);
              }
              (s._isScroll || "x" === i) &&
                (r.stopPropagation(), (r._gsapAllow = !0));
            },
            Tr = function (t, e, r, n) {
              return q.create({
                target: t,
                capture: !0,
                debounce: !1,
                lockAxis: !0,
                type: e,
                onWheel: (n = n && xr),
                onPress: n,
                onDrag: n,
                onScroll: n,
                onEnable: function () {
                  return r && ke(H, q.eventTypes[0], kr, !1, !0);
                },
                onDisable: function () {
                  return Ae(H, q.eventTypes[0], kr, !0);
                },
              });
            },
            Er = /(input|label|select|textarea)/i,
            kr = function (t) {
              var e = Er.test(t.target.tagName);
              (e || vr) && ((t._gsapAllow = !0), (vr = e));
            },
            Ar = function (t) {
              Qt(t) || (t = {}),
                (t.preventDefault = t.isNormalizer = t.allowClicks = !0),
                t.type || (t.type = "wheel,touch"),
                (t.debounce = !!t.debounce),
                (t.id = t.id || "normalizer");
              var e,
                r,
                n,
                i,
                o,
                s,
                a,
                l,
                u = t,
                c = u.normalizeScrollX,
                f = u.momentum,
                h = u.allowNestedScroll,
                d = u.onRelease,
                p = D(t.target) || V,
                g = W.core.globals().ScrollSmoother,
                _ = g && g.get(),
                m =
                  pt &&
                  ((t.content && D(t.content)) ||
                    (_ && !1 !== t.content && !_.smooth() && _.content())),
                v = I(p, R),
                b = I(p, L),
                w = 1,
                x =
                  (q.isTouch && U.visualViewport
                    ? U.visualViewport.scale * U.visualViewport.width
                    : U.outerWidth) / U.innerWidth,
                T = 0,
                E = jt(f)
                  ? function () {
                      return f(e);
                    }
                  : function () {
                      return f || 2.8;
                    },
                k = Tr(p, t.type, !0, h),
                A = function () {
                  return (i = !1);
                },
                C = zt,
                M = zt,
                S = function () {
                  (r = Ht(p, R)),
                    (M = Z(pt ? 1 : 0, r)),
                    c && (C = Z(0, Ht(p, L))),
                    (n = je);
                },
                O = function () {
                  (m._gsap.y = Bt(parseFloat(m._gsap.y) + v.offset) + "px"),
                    (m.style.transform =
                      "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " +
                      parseFloat(m._gsap.y) +
                      ", 0, 1)"),
                    (v.offset = v.cacheID = 0);
                },
                P = function () {
                  if (i) {
                    requestAnimationFrame(A);
                    var t = Bt(e.deltaY / 2),
                      r = M(v.v - t);
                    if (m && r !== v.v + v.offset) {
                      v.offset = r - v.v;
                      var n = Bt((parseFloat(m && m._gsap.y) || 0) - v.offset);
                      (m.style.transform =
                        "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " +
                        n +
                        ", 0, 1)"),
                        (m._gsap.y = n + "px"),
                        (v.cacheID = y.cache),
                        er();
                    }
                    return !0;
                  }
                  v.offset && O(), (i = !0);
                },
                z = function () {
                  S(),
                    o.isActive() &&
                      o.vars.scrollY > r &&
                      (v() > r
                        ? o.progress(1) && v(r)
                        : o.resetTo("scrollY", r));
                };
              return (
                m && W.set(m, { y: "+=0" }),
                (t.ignoreCheck = function (t) {
                  return (
                    (pt && "touchmove" === t.type && P()) ||
                    (w > 1.05 && "touchstart" !== t.type) ||
                    e.isGesturing ||
                    (t.touches && t.touches.length > 1)
                  );
                }),
                (t.onPress = function () {
                  i = !1;
                  var t = w;
                  (w = Bt(
                    ((U.visualViewport && U.visualViewport.scale) || 1) / x,
                  )),
                    o.pause(),
                    t !== w && br(p, w > 1.01 || (!c && "x")),
                    (s = b()),
                    (a = v()),
                    S(),
                    (n = je);
                }),
                (t.onRelease = t.onGestureStart =
                  function (t, e) {
                    if ((v.offset && O(), e)) {
                      y.cache++;
                      var n,
                        i,
                        s = E();
                      c &&
                        ((i = (n = b()) + (0.05 * s * -t.velocityX) / 0.227),
                        (s *= yr(b, n, i, Ht(p, L))),
                        (o.vars.scrollX = C(i))),
                        (i = (n = v()) + (0.05 * s * -t.velocityY) / 0.227),
                        (s *= yr(v, n, i, Ht(p, R))),
                        (o.vars.scrollY = M(i)),
                        o.invalidate().duration(s).play(0.01),
                        ((pt && o.vars.scrollY >= r) || n >= r - 1) &&
                          W.to({}, { onUpdate: z, duration: s });
                    } else l.restart(!0);
                    d && d(t);
                  }),
                (t.onWheel = function () {
                  o._ts && o.pause(), Ct() - T > 1e3 && ((n = 0), (T = Ct()));
                }),
                (t.onChange = function (t, e, r, i, o) {
                  if (
                    (je !== n && S(),
                    e &&
                      c &&
                      b(C(i[2] === e ? s + (t.startX - t.x) : b() + e - i[1])),
                    r)
                  ) {
                    v.offset && O();
                    var l = o[2] === r,
                      u = l ? a + t.startY - t.y : v() + r - o[1],
                      f = M(u);
                    l && u !== f && (a += f - u), v(f);
                  }
                  (r || e) && er();
                }),
                (t.onEnable = function () {
                  br(p, !c && "x"),
                    mr.addEventListener("refresh", z),
                    ke(U, "resize", z),
                    v.smooth &&
                      ((v.target.style.scrollBehavior = "auto"),
                      (v.smooth = b.smooth = !1)),
                    k.enable();
                }),
                (t.onDisable = function () {
                  br(p, !0),
                    Ae(U, "resize", z),
                    mr.removeEventListener("refresh", z),
                    k.kill();
                }),
                (t.lockAxis = !1 !== t.lockAxis),
                ((e = new q(t)).iOS = pt),
                pt && !v() && v(1),
                pt && W.ticker.add(zt),
                (l = e._dc),
                (o = W.to(e, {
                  ease: "power4",
                  paused: !0,
                  scrollX: c ? "+=0.1" : "+=0",
                  scrollY: "+=0.1",
                  modifiers: {
                    scrollY: pr(v, v(), function () {
                      return o.pause();
                    }),
                  },
                  onUpdate: er,
                  onComplete: l.vars.onComplete,
                })),
                e
              );
            };
          (mr.sort = function (t) {
            return De.sort(
              t ||
                function (t, e) {
                  return (
                    -1e6 * (t.vars.refreshPriority || 0) +
                    t.start -
                    (e.start + -1e6 * (e.vars.refreshPriority || 0))
                  );
                },
            );
          }),
            (mr.observe = function (t) {
              return new q(t);
            }),
            (mr.normalizeScroll = function (t) {
              if (void 0 === t) return ct;
              if (!0 === t && ct) return ct.enable();
              if (!1 === t) return ct && ct.kill(), void (ct = t);
              var e = t instanceof q ? t : Ar(t);
              return (
                ct && ct.target === e.target && ct.kill(),
                Yt(e.target) && (ct = e),
                e
              );
            }),
            (mr.core = {
              _getVelocityProp: z,
              _inputObserver: Tr,
              _scrollers: y,
              _proxies: b,
              bridge: {
                ss: function () {
                  St || Xe("scrollStart"), (St = Ct());
                },
                ref: function () {
                  return tt;
                },
              },
            }),
            Nt() && W.registerPlugin(mr),
            (t.ScrollTrigger = mr),
            (t.default = mr),
            "undefined" == typeof window || window !== t
              ? Object.defineProperty(t, "__esModule", { value: !0 })
              : delete window.default;
        })(e);
      },
      732: function (t) {
        t.exports = (function () {
          "use strict";
          function t() {
            return (
              (t =
                Object.assign ||
                function (t) {
                  for (var e = 1; e < arguments.length; e++) {
                    var r = arguments[e];
                    for (var n in r)
                      Object.prototype.hasOwnProperty.call(r, n) &&
                        (t[n] = r[n]);
                  }
                  return t;
                }),
              t.apply(this, arguments)
            );
          }
          var e = "undefined" != typeof window,
            r =
              (e && !("onscroll" in window)) ||
              ("undefined" != typeof navigator &&
                /(gle|ing|ro)bot|crawl|spider/i.test(navigator.userAgent)),
            n = e && "IntersectionObserver" in window,
            i = e && "classList" in document.createElement("p"),
            o = e && window.devicePixelRatio > 1,
            s = {
              elements_selector: ".lazy",
              container: r || e ? document : null,
              threshold: 300,
              thresholds: null,
              data_src: "src",
              data_srcset: "srcset",
              data_sizes: "sizes",
              data_bg: "bg",
              data_bg_hidpi: "bg-hidpi",
              data_bg_multi: "bg-multi",
              data_bg_multi_hidpi: "bg-multi-hidpi",
              data_bg_set: "bg-set",
              data_poster: "poster",
              class_applied: "applied",
              class_loading: "loading",
              class_loaded: "loaded",
              class_error: "error",
              class_entered: "entered",
              class_exited: "exited",
              unobserve_completed: !0,
              unobserve_entered: !1,
              cancel_on_exit: !0,
              callback_enter: null,
              callback_exit: null,
              callback_applied: null,
              callback_loading: null,
              callback_loaded: null,
              callback_error: null,
              callback_finish: null,
              callback_cancel: null,
              use_native: !1,
              restore_on_error: !1,
            },
            a = function (e) {
              return t({}, s, e);
            },
            l = function (t, e) {
              var r,
                n = "LazyLoad::Initialized",
                i = new t(e);
              try {
                r = new CustomEvent(n, { detail: { instance: i } });
              } catch (t) {
                (r = document.createEvent("CustomEvent")).initCustomEvent(
                  n,
                  !1,
                  !1,
                  { instance: i },
                );
              }
              window.dispatchEvent(r);
            },
            u = "src",
            c = "srcset",
            f = "sizes",
            h = "poster",
            d = "llOriginalAttrs",
            p = "data",
            g = "loading",
            _ = "loaded",
            m = "applied",
            v = "error",
            y = "native",
            b = "data-",
            w = "ll-status",
            x = function (t, e) {
              return t.getAttribute(b + e);
            },
            T = function (t) {
              return x(t, w);
            },
            E = function (t, e) {
              return (function (t, e, r) {
                var n = "data-ll-status";
                null !== r ? t.setAttribute(n, r) : t.removeAttribute(n);
              })(t, 0, e);
            },
            k = function (t) {
              return E(t, null);
            },
            A = function (t) {
              return null === T(t);
            },
            C = function (t) {
              return T(t) === y;
            },
            M = [g, _, m, v],
            S = function (t, e, r, n) {
              t &&
                "function" == typeof t &&
                (void 0 === n ? (void 0 === r ? t(e) : t(e, r)) : t(e, r, n));
            },
            O = function (t, e) {
              i
                ? t.classList.add(e)
                : (t.className += (t.className ? " " : "") + e);
            },
            P = function (t, e) {
              i
                ? t.classList.remove(e)
                : (t.className = t.className
                    .replace(new RegExp("(^|\\s+)" + e + "(\\s+|$)"), " ")
                    .replace(/^\s+/, "")
                    .replace(/\s+$/, ""));
            },
            L = function (t) {
              return t.llTempImage;
            },
            R = function (t, e) {
              if (e) {
                var r = e._observer;
                r && r.unobserve(t);
              }
            },
            D = function (t, e) {
              t && (t.loadingCount += e);
            },
            I = function (t, e) {
              t && (t.toLoadCount = e);
            },
            z = function (t) {
              for (var e, r = [], n = 0; (e = t.children[n]); n += 1)
                "SOURCE" === e.tagName && r.push(e);
              return r;
            },
            B = function (t, e) {
              var r = t.parentNode;
              r && "PICTURE" === r.tagName && z(r).forEach(e);
            },
            F = function (t, e) {
              z(t).forEach(e);
            },
            N = [u],
            Y = [u, h],
            q = [u, c, f],
            W = [p],
            X = function (t) {
              return !!t[d];
            },
            U = function (t) {
              return t[d];
            },
            H = function (t) {
              return delete t[d];
            },
            V = function (t, e) {
              if (!X(t)) {
                var r = {};
                e.forEach(function (e) {
                  r[e] = t.getAttribute(e);
                }),
                  (t[d] = r);
              }
            },
            $ = function (t, e) {
              if (X(t)) {
                var r = U(t);
                e.forEach(function (e) {
                  !(function (t, e, r) {
                    r ? t.setAttribute(e, r) : t.removeAttribute(e);
                  })(t, e, r[e]);
                });
              }
            },
            j = function (t, e, r) {
              O(t, e.class_applied),
                E(t, m),
                r &&
                  (e.unobserve_completed && R(t, e),
                  S(e.callback_applied, t, r));
            },
            G = function (t, e, r) {
              O(t, e.class_loading),
                E(t, g),
                r && (D(r, 1), S(e.callback_loading, t, r));
            },
            Q = function (t, e, r) {
              r && t.setAttribute(e, r);
            },
            Z = function (t, e) {
              Q(t, f, x(t, e.data_sizes)),
                Q(t, c, x(t, e.data_srcset)),
                Q(t, u, x(t, e.data_src));
            },
            J = {
              IMG: function (t, e) {
                B(t, function (t) {
                  V(t, q), Z(t, e);
                }),
                  V(t, q),
                  Z(t, e);
              },
              IFRAME: function (t, e) {
                V(t, N), Q(t, u, x(t, e.data_src));
              },
              VIDEO: function (t, e) {
                F(t, function (t) {
                  V(t, N), Q(t, u, x(t, e.data_src));
                }),
                  V(t, Y),
                  Q(t, h, x(t, e.data_poster)),
                  Q(t, u, x(t, e.data_src)),
                  t.load();
              },
              OBJECT: function (t, e) {
                V(t, W), Q(t, p, x(t, e.data_src));
              },
            },
            K = ["IMG", "IFRAME", "VIDEO", "OBJECT"],
            tt = function (t, e) {
              !e ||
                (function (t) {
                  return t.loadingCount > 0;
                })(e) ||
                (function (t) {
                  return t.toLoadCount > 0;
                })(e) ||
                S(t.callback_finish, e);
            },
            et = function (t, e, r) {
              t.addEventListener(e, r), (t.llEvLisnrs[e] = r);
            },
            rt = function (t, e, r) {
              t.removeEventListener(e, r);
            },
            nt = function (t) {
              return !!t.llEvLisnrs;
            },
            it = function (t) {
              if (nt(t)) {
                var e = t.llEvLisnrs;
                for (var r in e) {
                  var n = e[r];
                  rt(t, r, n);
                }
                delete t.llEvLisnrs;
              }
            },
            ot = function (t, e, r) {
              !(function (t) {
                delete t.llTempImage;
              })(t),
                D(r, -1),
                (function (t) {
                  t && (t.toLoadCount -= 1);
                })(r),
                P(t, e.class_loading),
                e.unobserve_completed && R(t, r);
            },
            st = function (t, e, r) {
              var n = L(t) || t;
              nt(n) ||
                (function (t, e, r) {
                  nt(t) || (t.llEvLisnrs = {});
                  var n = "VIDEO" === t.tagName ? "loadeddata" : "load";
                  et(t, n, e), et(t, "error", r);
                })(
                  n,
                  function (i) {
                    !(function (t, e, r, n) {
                      var i = C(e);
                      ot(e, r, n),
                        O(e, r.class_loaded),
                        E(e, _),
                        S(r.callback_loaded, e, n),
                        i || tt(r, n);
                    })(0, t, e, r),
                      it(n);
                  },
                  function (i) {
                    !(function (t, e, r, n) {
                      var i = C(e);
                      ot(e, r, n),
                        O(e, r.class_error),
                        E(e, v),
                        S(r.callback_error, e, n),
                        r.restore_on_error && $(e, q),
                        i || tt(r, n);
                    })(0, t, e, r),
                      it(n);
                  },
                );
            },
            at = function (t, e, r) {
              !(function (t) {
                return K.indexOf(t.tagName) > -1;
              })(t)
                ? (function (t, e, r) {
                    !(function (t) {
                      t.llTempImage = document.createElement("IMG");
                    })(t),
                      st(t, e, r),
                      (function (t) {
                        X(t) ||
                          (t[d] = { backgroundImage: t.style.backgroundImage });
                      })(t),
                      (function (t, e, r) {
                        var n = x(t, e.data_bg),
                          i = x(t, e.data_bg_hidpi),
                          s = o && i ? i : n;
                        s &&
                          ((t.style.backgroundImage = 'url("'.concat(s, '")')),
                          L(t).setAttribute(u, s),
                          G(t, e, r));
                      })(t, e, r),
                      (function (t, e, r) {
                        var n = x(t, e.data_bg_multi),
                          i = x(t, e.data_bg_multi_hidpi),
                          s = o && i ? i : n;
                        s && ((t.style.backgroundImage = s), j(t, e, r));
                      })(t, e, r),
                      (function (t, e, r) {
                        var n = x(t, e.data_bg_set);
                        if (n) {
                          var i = n.split("|"),
                            o = i.map(function (t) {
                              return "image-set(".concat(t, ")");
                            });
                          (t.style.backgroundImage = o.join()),
                            "" === t.style.backgroundImage &&
                              ((o = i.map(function (t) {
                                return "-webkit-image-set(".concat(t, ")");
                              })),
                              (t.style.backgroundImage = o.join())),
                            j(t, e, r);
                        }
                      })(t, e, r);
                  })(t, e, r)
                : (function (t, e, r) {
                    st(t, e, r),
                      (function (t, e, r) {
                        var n = J[t.tagName];
                        n && (n(t, e), G(t, e, r));
                      })(t, e, r);
                  })(t, e, r);
            },
            lt = function (t) {
              t.removeAttribute(u), t.removeAttribute(c), t.removeAttribute(f);
            },
            ut = function (t) {
              B(t, function (t) {
                $(t, q);
              }),
                $(t, q);
            },
            ct = {
              IMG: ut,
              IFRAME: function (t) {
                $(t, N);
              },
              VIDEO: function (t) {
                F(t, function (t) {
                  $(t, N);
                }),
                  $(t, Y),
                  t.load();
              },
              OBJECT: function (t) {
                $(t, W);
              },
            },
            ft = function (t, e) {
              (function (t) {
                var e = ct[t.tagName];
                e
                  ? e(t)
                  : (function (t) {
                      if (X(t)) {
                        var e = U(t);
                        t.style.backgroundImage = e.backgroundImage;
                      }
                    })(t);
              })(t),
                (function (t, e) {
                  A(t) ||
                    C(t) ||
                    (P(t, e.class_entered),
                    P(t, e.class_exited),
                    P(t, e.class_applied),
                    P(t, e.class_loading),
                    P(t, e.class_loaded),
                    P(t, e.class_error));
                })(t, e),
                k(t),
                H(t);
            },
            ht = ["IMG", "IFRAME", "VIDEO"],
            dt = function (t) {
              return t.use_native && "loading" in HTMLImageElement.prototype;
            },
            pt = function (t, e, r) {
              t.forEach(function (t) {
                return (function (t) {
                  return t.isIntersecting || t.intersectionRatio > 0;
                })(t)
                  ? (function (t, e, r, n) {
                      var i = (function (t) {
                        return M.indexOf(T(t)) >= 0;
                      })(t);
                      E(t, "entered"),
                        O(t, r.class_entered),
                        P(t, r.class_exited),
                        (function (t, e, r) {
                          e.unobserve_entered && R(t, r);
                        })(t, r, n),
                        S(r.callback_enter, t, e, n),
                        i || at(t, r, n);
                    })(t.target, t, e, r)
                  : (function (t, e, r, n) {
                      A(t) ||
                        (O(t, r.class_exited),
                        (function (t, e, r, n) {
                          r.cancel_on_exit &&
                            (function (t) {
                              return T(t) === g;
                            })(t) &&
                            "IMG" === t.tagName &&
                            (it(t),
                            (function (t) {
                              B(t, function (t) {
                                lt(t);
                              }),
                                lt(t);
                            })(t),
                            ut(t),
                            P(t, r.class_loading),
                            D(n, -1),
                            k(t),
                            S(r.callback_cancel, t, e, n));
                        })(t, e, r, n),
                        S(r.callback_exit, t, e, n));
                    })(t.target, t, e, r);
              });
            },
            gt = function (t) {
              return Array.prototype.slice.call(t);
            },
            _t = function (t) {
              return t.container.querySelectorAll(t.elements_selector);
            },
            mt = function (t) {
              return (function (t) {
                return T(t) === v;
              })(t);
            },
            vt = function (t, e) {
              return (function (t) {
                return gt(t).filter(A);
              })(t || _t(e));
            },
            yt = function (t, r) {
              var i = a(t);
              (this._settings = i),
                (this.loadingCount = 0),
                (function (t, e) {
                  n &&
                    !dt(t) &&
                    (e._observer = new IntersectionObserver(
                      function (r) {
                        pt(r, t, e);
                      },
                      (function (t) {
                        return {
                          root: t.container === document ? null : t.container,
                          rootMargin: t.thresholds || t.threshold + "px",
                        };
                      })(t),
                    ));
                })(i, this),
                (function (t, r) {
                  e &&
                    ((r._onlineHandler = function () {
                      !(function (t, e) {
                        var r;
                        ((r = _t(t)), gt(r).filter(mt)).forEach(function (e) {
                          P(e, t.class_error), k(e);
                        }),
                          e.update();
                      })(t, r);
                    }),
                    window.addEventListener("online", r._onlineHandler));
                })(i, this),
                this.update(r);
            };
          return (
            (yt.prototype = {
              update: function (t) {
                var e,
                  i,
                  o = this._settings,
                  s = vt(t, o);
                I(this, s.length),
                  !r && n
                    ? dt(o)
                      ? (function (t, e, r) {
                          t.forEach(function (t) {
                            -1 !== ht.indexOf(t.tagName) &&
                              (function (t, e, r) {
                                t.setAttribute("loading", "lazy"),
                                  st(t, e, r),
                                  (function (t, e) {
                                    var r = J[t.tagName];
                                    r && r(t, e);
                                  })(t, e),
                                  E(t, y);
                              })(t, e, r);
                          }),
                            I(r, 0);
                        })(s, o, this)
                      : ((i = s),
                        (function (t) {
                          t.disconnect();
                        })((e = this._observer)),
                        (function (t, e) {
                          e.forEach(function (e) {
                            t.observe(e);
                          });
                        })(e, i))
                    : this.loadAll(s);
              },
              destroy: function () {
                this._observer && this._observer.disconnect(),
                  e &&
                    window.removeEventListener("online", this._onlineHandler),
                  _t(this._settings).forEach(function (t) {
                    H(t);
                  }),
                  delete this._observer,
                  delete this._settings,
                  delete this._onlineHandler,
                  delete this.loadingCount,
                  delete this.toLoadCount;
              },
              loadAll: function (t) {
                var e = this,
                  r = this._settings;
                vt(t, r).forEach(function (t) {
                  R(t, e), at(t, r, e);
                });
              },
              restoreAll: function () {
                var t = this._settings;
                _t(t).forEach(function (e) {
                  ft(e, t);
                });
              },
            }),
            (yt.load = function (t, e) {
              var r = a(e);
              at(t, r);
            }),
            (yt.resetStatus = function (t) {
              k(t);
            }),
            e &&
              (function (t, e) {
                if (e)
                  if (e.length) for (var r, n = 0; (r = e[n]); n += 1) l(t, r);
                  else l(t, e);
              })(yt, window.lazyLoadOptions),
            yt
          );
        })();
      },
    },
    e = {};
  function r(n) {
    var i = e[n];
    if (void 0 !== i) return i.exports;
    var o = (e[n] = { exports: {} });
    return t[n].call(o.exports, o, o.exports, r), o.exports;
  }
  (() => {
    "use strict";
    let t = !0,
      e = (e = 500) => {
        let r = document.querySelector("body");
        if (t) {
          let n = document.querySelectorAll("[data-lp]");
          setTimeout(() => {
            for (let t = 0; t < n.length; t++) {
              n[t].style.paddingRight = "0px";
            }
            (r.style.paddingRight = "0px"),
              document.documentElement.classList.remove("lock");
          }, e),
            (t = !1),
            setTimeout(function () {
              t = !0;
            }, e);
        }
      };
    function n(t) {
      setTimeout(() => {
        window.FLS && console.log(t);
      }, 0);
    }
    function i(t) {
      return t.filter(function (t, e, r) {
        return r.indexOf(t) === e;
      });
    }
    let o = (t, r = !1, i = 500, o = 0) => {
      const s = document.querySelector(t);
      if (s) {
        let a = "",
          l = 0;
        r &&
          ((a = "header.header"), (l = document.querySelector(a).offsetHeight));
        let u = {
          speedAsDuration: !0,
          speed: i,
          header: a,
          offset: o,
          easing: "easeOutQuad",
        };
        if (
          (document.documentElement.classList.contains("menu-open") &&
            (e(), document.documentElement.classList.remove("menu-open")),
          "undefined" != typeof SmoothScroll)
        )
          new SmoothScroll().animateScroll(s, "", u);
        else {
          let t = s.getBoundingClientRect().top + scrollY;
          window.scrollTo({ top: l ? t - l : t, behavior: "smooth" });
        }
        n(`[gotoBlock]: Юхуу...едем к ${t}`);
      } else n(`[gotoBlock]: Ой ой..Такого блока нет на странице: ${t}`);
    };
    const s = { inputMaskModule: null, selectModule: null };
    let a = {
      getErrors(t) {
        let e = 0,
          r = t.querySelectorAll("*[data-required]");
        return (
          r.length &&
            r.forEach((t) => {
              (null === t.offsetParent && "SELECT" !== t.tagName) ||
                t.disabled ||
                (e += this.validateInput(t));
            }),
          e
        );
      },
      validateInput(t) {
        let e = 0;
        return (
          "email" === t.dataset.required
            ? ((t.value = t.value.replace(" ", "")),
              this.emailTest(t) ? (this.addError(t), e++) : this.removeError(t))
            : ("checkbox" !== t.type || t.checked) && t.value
            ? this.removeError(t)
            : (this.addError(t), e++),
          e
        );
      },
      addError(t) {
        t.classList.add("_form-error"),
          t.parentElement.classList.add("_form-error");
        let e = t.parentElement.querySelector(".form__error");
        e && t.parentElement.removeChild(e),
          t.dataset.error &&
            t.parentElement.insertAdjacentHTML(
              "beforeend",
              `<div class="form__error">${t.dataset.error}</div>`,
            );
      },
      removeError(t) {
        t.classList.remove("_form-error"),
          t.parentElement.classList.remove("_form-error"),
          t.parentElement.querySelector(".form__error") &&
            t.parentElement.removeChild(
              t.parentElement.querySelector(".form__error"),
            );
      },
      formClean(t) {
        t.reset(),
          setTimeout(() => {
            let e = t.querySelectorAll("input,textarea");
            for (let t = 0; t < e.length; t++) {
              const r = e[t];
              r.parentElement.classList.remove("_form-focus"),
                r.classList.remove("_form-focus"),
                a.removeError(r),
                (r.value = r.dataset.placeholder);
            }
            let r = t.querySelectorAll(".checkbox__input");
            if (r.length > 0)
              for (let t = 0; t < r.length; t++) {
                r[t].checked = !1;
              }
            if (s.selectModule) {
              let e = t.querySelectorAll(".select");
              if (e.length)
                for (let t = 0; t < e.length; t++) {
                  const r = e[t].querySelector("select");
                  s.selectModule.selectBuild(r);
                }
            }
          }, 0);
      },
      emailTest: (t) =>
        !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(t.value),
    };
    new (r(732))({
      elements_selector: "[data-src]",
      class_loaded: "_lazy-loaded",
      use_native: !0,
    });
    class l {
      constructor(t) {
        (this.config = Object.assign({ logging: !0 }, t)),
          this.observer,
          !document.documentElement.classList.contains("watcher") &&
            this.scrollWatcherRun();
      }
      scrollWatcherUpdate() {
        this.scrollWatcherRun();
      }
      scrollWatcherRun() {
        document.documentElement.classList.add("watcher"),
          this.scrollWatcherConstructor(
            document.querySelectorAll("[data-watch]"),
          );
      }
      scrollWatcherConstructor(t) {
        if (t.length) {
          this.scrollWatcherLogging(
            `Проснулся, слежу за объектами (${t.length})...`,
          ),
            i(
              Array.from(t).map(function (t) {
                return `${t.dataset.watchRoot ? t.dataset.watchRoot : null}|${
                  t.dataset.watchMargin ? t.dataset.watchMargin : "0px"
                }|${t.dataset.watchThreshold ? t.dataset.watchThreshold : 0}`;
              }),
            ).forEach((e) => {
              let r = e.split("|"),
                n = { root: r[0], margin: r[1], threshold: r[2] },
                i = Array.from(t).filter(function (t) {
                  let e = t.dataset.watchRoot ? t.dataset.watchRoot : null,
                    r = t.dataset.watchMargin ? t.dataset.watchMargin : "0px",
                    i = t.dataset.watchThreshold ? t.dataset.watchThreshold : 0;
                  if (
                    String(e) === n.root &&
                    String(r) === n.margin &&
                    String(i) === n.threshold
                  )
                    return t;
                }),
                o = this.getScrollWatcherConfig(n);
              this.scrollWatcherInit(i, o);
            });
        } else
          this.scrollWatcherLogging("Сплю, нет объектов для слежения. ZzzZZzz");
      }
      getScrollWatcherConfig(t) {
        let e = {};
        if (
          (document.querySelector(t.root)
            ? (e.root = document.querySelector(t.root))
            : "null" !== t.root &&
              this.scrollWatcherLogging(
                `Эмм... родительского объекта ${t.root} нет на странице`,
              ),
          (e.rootMargin = t.margin),
          !(t.margin.indexOf("px") < 0 && t.margin.indexOf("%") < 0))
        ) {
          if ("prx" === t.threshold) {
            t.threshold = [];
            for (let e = 0; e <= 1; e += 0.005) t.threshold.push(e);
          } else t.threshold = t.threshold.split(",");
          return (e.threshold = t.threshold), e;
        }
        this.scrollWatcherLogging(
          "Ой ой, настройку data-watch-margin нужно задавать в PX или %",
        );
      }
      scrollWatcherCreate(t) {
        this.observer = new IntersectionObserver((t, e) => {
          t.forEach((t) => {
            this.scrollWatcherCallback(t, e);
          });
        }, t);
      }
      scrollWatcherInit(t, e) {
        this.scrollWatcherCreate(e), t.forEach((t) => this.observer.observe(t));
      }
      scrollWatcherIntersecting(t, e) {
        t.isIntersecting
          ? (!e.classList.contains("_watcher-view") &&
              e.classList.add("_watcher-view"),
            this.scrollWatcherLogging(
              `Я вижу ${e.classList}, добавил класс _watcher-view`,
            ))
          : (e.classList.contains("_watcher-view") &&
              e.classList.remove("_watcher-view"),
            this.scrollWatcherLogging(
              `Я не вижу ${e.classList}, убрал класс _watcher-view`,
            ));
      }
      scrollWatcherOff(t, e) {
        e.unobserve(t),
          this.scrollWatcherLogging(`Я перестал следить за ${t.classList}`);
      }
      scrollWatcherLogging(t) {
        this.config.logging && n(`[Наблюдатель]: ${t}`);
      }
      scrollWatcherCallback(t, e) {
        const r = t.target;
        this.scrollWatcherIntersecting(t, r),
          r.hasAttribute("data-watch-once") &&
            t.isIntersecting &&
            this.scrollWatcherOff(r, e),
          document.dispatchEvent(
            new CustomEvent("watcherCallback", { detail: { entry: t } }),
          );
      }
    }
    let u = !1;
    setTimeout(() => {
      if (u) {
        let t = new Event("windowScroll");
        window.addEventListener("scroll", function (e) {
          document.dispatchEvent(t);
        });
      }
    }, 0);
    let c,
      f = document.getElementById("popup-cookies");
    f.querySelector(".popup__close");
    document.addEventListener("click", function (t) {
      (c = t.target), c.closest(".popup__close") && f.classList.add("hidden");
    });
    let h = !0;
    function d(t) {
      if (void 0 === t)
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called",
        );
      return t;
    }
    function p(t, e) {
      (t.prototype = Object.create(e.prototype)),
        (t.prototype.constructor = t),
        (t.__proto__ = e);
    }
    document.addEventListener("click", function (t) {
      let e = t.target;
      h && e.closest(".icon-menu")
        ? (document.documentElement.classList.add("menu-open"),
          document.documentElement.classList.add("lock"),
          (h = !1))
        : e.closest(".menu") ||
          (document.documentElement.classList.remove("menu-open"),
          document.documentElement.classList.remove("lock"),
          (h = !0));
    });
    var g,
      _,
      m,
      v,
      y,
      b,
      w,
      x,
      T,
      E,
      k,
      A,
      C,
      M,
      S,
      O = {
        autoSleep: 120,
        force3D: "auto",
        nullTargetWarn: 1,
        units: { lineHeight: "" },
      },
      P = { duration: 0.5, overwrite: !1, delay: 0 },
      L = 1e8,
      R = 1e-8,
      D = 2 * Math.PI,
      I = D / 4,
      z = 0,
      B = Math.sqrt,
      F = Math.cos,
      N = Math.sin,
      Y = function (t) {
        return "string" == typeof t;
      },
      q = function (t) {
        return "function" == typeof t;
      },
      W = function (t) {
        return "number" == typeof t;
      },
      X = function (t) {
        return void 0 === t;
      },
      U = function (t) {
        return "object" == typeof t;
      },
      H = function (t) {
        return !1 !== t;
      },
      V = function () {
        return "undefined" != typeof window;
      },
      $ = function (t) {
        return q(t) || Y(t);
      },
      j =
        ("function" == typeof ArrayBuffer && ArrayBuffer.isView) ||
        function () {},
      G = Array.isArray,
      Q = /(?:-?\.?\d|\.)+/gi,
      Z = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,
      J = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
      K = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,
      tt = /[+-]=-?[.\d]+/,
      et = /[^,'"\[\]\s]+/gi,
      rt = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,
      nt = {},
      it = {},
      ot = function (t) {
        return (it = Dt(t, nt)) && Ir;
      },
      st = function (t, e) {
        return console.warn(
          "Invalid property",
          t,
          "set to",
          e,
          "Missing plugin? gsap.registerPlugin()",
        );
      },
      at = function (t, e) {
        return !e && console.warn(t);
      },
      lt = function (t, e) {
        return (t && (nt[t] = e) && it && (it[t] = e)) || nt;
      },
      ut = function () {
        return 0;
      },
      ct = { suppressEvents: !0, isStart: !0, kill: !1 },
      ft = { suppressEvents: !0, kill: !1 },
      ht = { suppressEvents: !0 },
      dt = {},
      pt = [],
      gt = {},
      _t = {},
      mt = {},
      vt = 30,
      yt = [],
      bt = "",
      wt = function (t) {
        var e,
          r,
          n = t[0];
        if ((U(n) || q(n) || (t = [t]), !(e = (n._gsap || {}).harness))) {
          for (r = yt.length; r-- && !yt[r].targetTest(n); );
          e = yt[r];
        }
        for (r = t.length; r--; )
          (t[r] && (t[r]._gsap || (t[r]._gsap = new Ge(t[r], e)))) ||
            t.splice(r, 1);
        return t;
      },
      xt = function (t) {
        return t._gsap || wt(he(t))[0]._gsap;
      },
      Tt = function (t, e, r) {
        return (r = t[e]) && q(r)
          ? t[e]()
          : (X(r) && t.getAttribute && t.getAttribute(e)) || r;
      },
      Et = function (t, e) {
        return (t = t.split(",")).forEach(e) || t;
      },
      kt = function (t) {
        return Math.round(1e5 * t) / 1e5 || 0;
      },
      At = function (t) {
        return Math.round(1e7 * t) / 1e7 || 0;
      },
      Ct = function (t, e) {
        var r = e.charAt(0),
          n = parseFloat(e.substr(2));
        return (
          (t = parseFloat(t)),
          "+" === r ? t + n : "-" === r ? t - n : "*" === r ? t * n : t / n
        );
      },
      Mt = function (t, e) {
        for (var r = e.length, n = 0; t.indexOf(e[n]) < 0 && ++n < r; );
        return n < r;
      },
      St = function () {
        var t,
          e,
          r = pt.length,
          n = pt.slice(0);
        for (gt = {}, pt.length = 0, t = 0; t < r; t++)
          (e = n[t]) &&
            e._lazy &&
            (e.render(e._lazy[0], e._lazy[1], !0)._lazy = 0);
      },
      Ot = function (t, e, r, n) {
        pt.length && !_ && St(),
          t.render(e, r, n || (_ && e < 0 && (t._initted || t._startAt))),
          pt.length && !_ && St();
      },
      Pt = function (t) {
        var e = parseFloat(t);
        return (e || 0 === e) && (t + "").match(et).length < 2
          ? e
          : Y(t)
          ? t.trim()
          : t;
      },
      Lt = function (t) {
        return t;
      },
      Rt = function (t, e) {
        for (var r in e) r in t || (t[r] = e[r]);
        return t;
      },
      Dt = function (t, e) {
        for (var r in e) t[r] = e[r];
        return t;
      },
      It = function t(e, r) {
        for (var n in r)
          "__proto__" !== n &&
            "constructor" !== n &&
            "prototype" !== n &&
            (e[n] = U(r[n]) ? t(e[n] || (e[n] = {}), r[n]) : r[n]);
        return e;
      },
      zt = function (t, e) {
        var r,
          n = {};
        for (r in t) r in e || (n[r] = t[r]);
        return n;
      },
      Bt = function (t) {
        var e,
          r = t.parent || v,
          n = t.keyframes
            ? ((e = G(t.keyframes)),
              function (t, r) {
                for (var n in r)
                  n in t ||
                    ("duration" === n && e) ||
                    "ease" === n ||
                    (t[n] = r[n]);
              })
            : Rt;
        if (H(t.inherit))
          for (; r; ) n(t, r.vars.defaults), (r = r.parent || r._dp);
        return t;
      },
      Ft = function (t, e, r, n, i) {
        void 0 === r && (r = "_first"), void 0 === n && (n = "_last");
        var o,
          s = t[n];
        if (i) for (o = e[i]; s && s[i] > o; ) s = s._prev;
        return (
          s
            ? ((e._next = s._next), (s._next = e))
            : ((e._next = t[r]), (t[r] = e)),
          e._next ? (e._next._prev = e) : (t[n] = e),
          (e._prev = s),
          (e.parent = e._dp = t),
          e
        );
      },
      Nt = function (t, e, r, n) {
        void 0 === r && (r = "_first"), void 0 === n && (n = "_last");
        var i = e._prev,
          o = e._next;
        i ? (i._next = o) : t[r] === e && (t[r] = o),
          o ? (o._prev = i) : t[n] === e && (t[n] = i),
          (e._next = e._prev = e.parent = null);
      },
      Yt = function (t, e) {
        t.parent &&
          (!e || t.parent.autoRemoveChildren) &&
          t.parent.remove &&
          t.parent.remove(t),
          (t._act = 0);
      },
      qt = function (t, e) {
        if (t && (!e || e._end > t._dur || e._start < 0))
          for (var r = t; r; ) (r._dirty = 1), (r = r.parent);
        return t;
      },
      Wt = function (t, e, r, n) {
        return (
          t._startAt &&
          (_
            ? t._startAt.revert(ft)
            : (t.vars.immediateRender && !t.vars.autoRevert) ||
              t._startAt.render(e, !0, n))
        );
      },
      Xt = function t(e) {
        return !e || (e._ts && t(e.parent));
      },
      Ut = function (t) {
        return t._repeat ? Ht(t._tTime, (t = t.duration() + t._rDelay)) * t : 0;
      },
      Ht = function (t, e) {
        var r = Math.floor((t /= e));
        return t && r === t ? r - 1 : r;
      },
      Vt = function (t, e) {
        return (
          (t - e._start) * e._ts +
          (e._ts >= 0 ? 0 : e._dirty ? e.totalDuration() : e._tDur)
        );
      },
      $t = function (t) {
        return (t._end = At(
          t._start + (t._tDur / Math.abs(t._ts || t._rts || R) || 0),
        ));
      },
      jt = function (t, e) {
        var r = t._dp;
        return (
          r &&
            r.smoothChildTiming &&
            t._ts &&
            ((t._start = At(
              r._time -
                (t._ts > 0
                  ? e / t._ts
                  : ((t._dirty ? t.totalDuration() : t._tDur) - e) / -t._ts),
            )),
            $t(t),
            r._dirty || qt(r, t)),
          t
        );
      },
      Gt = function (t, e) {
        var r;
        if (
          ((e._time ||
            (!e._dur && e._initted) ||
            (e._start < t._time && (e._dur || !e.add))) &&
            ((r = Vt(t.rawTime(), e)),
            (!e._dur || ae(0, e.totalDuration(), r) - e._tTime > R) &&
              e.render(r, !0)),
          qt(t, e)._dp && t._initted && t._time >= t._dur && t._ts)
        ) {
          if (t._dur < t.duration())
            for (r = t; r._dp; )
              r.rawTime() >= 0 && r.totalTime(r._tTime), (r = r._dp);
          t._zTime = -1e-8;
        }
      },
      Qt = function (t, e, r, n) {
        return (
          e.parent && Yt(e),
          (e._start = At(
            (W(r) ? r : r || t !== v ? ie(t, r, e) : t._time) + e._delay,
          )),
          (e._end = At(
            e._start + (e.totalDuration() / Math.abs(e.timeScale()) || 0),
          )),
          Ft(t, e, "_first", "_last", t._sort ? "_start" : 0),
          te(e) || (t._recent = e),
          n || Gt(t, e),
          t._ts < 0 && jt(t, t._tTime),
          t
        );
      },
      Zt = function (t, e) {
        return (
          (nt.ScrollTrigger || st("scrollTrigger", e)) &&
          nt.ScrollTrigger.create(e, t)
        );
      },
      Jt = function (t, e, r, n, i) {
        return (
          nr(t, e, i),
          t._initted
            ? !r &&
              t._pt &&
              !_ &&
              ((t._dur && !1 !== t.vars.lazy) || (!t._dur && t.vars.lazy)) &&
              T !== ze.frame
              ? (pt.push(t), (t._lazy = [i, n]), 1)
              : void 0
            : 1
        );
      },
      Kt = function t(e) {
        var r = e.parent;
        return (
          r && r._ts && r._initted && !r._lock && (r.rawTime() < 0 || t(r))
        );
      },
      te = function (t) {
        var e = t.data;
        return "isFromStart" === e || "isStart" === e;
      },
      ee = function (t, e, r, n) {
        var i = t._repeat,
          o = At(e) || 0,
          s = t._tTime / t._tDur;
        return (
          s && !n && (t._time *= o / t._dur),
          (t._dur = o),
          (t._tDur = i ? (i < 0 ? 1e10 : At(o * (i + 1) + t._rDelay * i)) : o),
          s > 0 && !n && jt(t, (t._tTime = t._tDur * s)),
          t.parent && $t(t),
          r || qt(t.parent, t),
          t
        );
      },
      re = function (t) {
        return t instanceof Ze ? qt(t) : ee(t, t._dur);
      },
      ne = { _start: 0, endTime: ut, totalDuration: ut },
      ie = function t(e, r, n) {
        var i,
          o,
          s,
          a = e.labels,
          l = e._recent || ne,
          u = e.duration() >= L ? l.endTime(!1) : e._dur;
        return Y(r) && (isNaN(r) || r in a)
          ? ((o = r.charAt(0)),
            (s = "%" === r.substr(-1)),
            (i = r.indexOf("=")),
            "<" === o || ">" === o
              ? (i >= 0 && (r = r.replace(/=/, "")),
                ("<" === o ? l._start : l.endTime(l._repeat >= 0)) +
                  (parseFloat(r.substr(1)) || 0) *
                    (s ? (i < 0 ? l : n).totalDuration() / 100 : 1))
              : i < 0
              ? (r in a || (a[r] = u), a[r])
              : ((o = parseFloat(r.charAt(i - 1) + r.substr(i + 1))),
                s && n && (o = (o / 100) * (G(n) ? n[0] : n).totalDuration()),
                i > 1 ? t(e, r.substr(0, i - 1), n) + o : u + o))
          : null == r
          ? u
          : +r;
      },
      oe = function (t, e, r) {
        var n,
          i,
          o = W(e[1]),
          s = (o ? 2 : 1) + (t < 2 ? 0 : 1),
          a = e[s];
        if ((o && (a.duration = e[1]), (a.parent = r), t)) {
          for (n = a, i = r; i && !("immediateRender" in n); )
            (n = i.vars.defaults || {}), (i = H(i.vars.inherit) && i.parent);
          (a.immediateRender = H(n.immediateRender)),
            t < 2 ? (a.runBackwards = 1) : (a.startAt = e[s - 1]);
        }
        return new lr(e[0], a, e[s + 1]);
      },
      se = function (t, e) {
        return t || 0 === t ? e(t) : e;
      },
      ae = function (t, e, r) {
        return r < t ? t : r > e ? e : r;
      },
      le = function (t, e) {
        return Y(t) && (e = rt.exec(t)) ? e[1] : "";
      },
      ue = [].slice,
      ce = function (t, e) {
        return (
          t &&
          U(t) &&
          "length" in t &&
          ((!e && !t.length) || (t.length - 1 in t && U(t[0]))) &&
          !t.nodeType &&
          t !== y
        );
      },
      fe = function (t, e, r) {
        return (
          void 0 === r && (r = []),
          t.forEach(function (t) {
            var n;
            return (Y(t) && !e) || ce(t, 1)
              ? (n = r).push.apply(n, he(t))
              : r.push(t);
          }) || r
        );
      },
      he = function (t, e, r) {
        return m && !e && m.selector
          ? m.selector(t)
          : !Y(t) || r || (!b && Be())
          ? G(t)
            ? fe(t, r)
            : ce(t)
            ? ue.call(t, 0)
            : t
            ? [t]
            : []
          : ue.call((e || w).querySelectorAll(t), 0);
      },
      de = function (t) {
        return (
          (t = he(t)[0] || at("Invalid scope") || {}),
          function (e) {
            var r = t.current || t.nativeElement || t;
            return he(
              e,
              r.querySelectorAll
                ? r
                : r === t
                ? at("Invalid scope") || w.createElement("div")
                : t,
            );
          }
        );
      },
      pe = function (t) {
        return t.sort(function () {
          return 0.5 - Math.random();
        });
      },
      ge = function (t) {
        if (q(t)) return t;
        var e = U(t) ? t : { each: t },
          r = Ue(e.ease),
          n = e.from || 0,
          i = parseFloat(e.base) || 0,
          o = {},
          s = n > 0 && n < 1,
          a = isNaN(n) || s,
          l = e.axis,
          u = n,
          c = n;
        return (
          Y(n)
            ? (u = c = { center: 0.5, edges: 0.5, end: 1 }[n] || 0)
            : !s && a && ((u = n[0]), (c = n[1])),
          function (t, s, f) {
            var h,
              d,
              p,
              g,
              _,
              m,
              v,
              y,
              b,
              w = (f || e).length,
              x = o[w];
            if (!x) {
              if (!(b = "auto" === e.grid ? 0 : (e.grid || [1, L])[1])) {
                for (
                  v = -L;
                  v < (v = f[b++].getBoundingClientRect().left) && b < w;

                );
                b < w && b--;
              }
              for (
                x = o[w] = [],
                  h = a ? Math.min(b, w) * u - 0.5 : n % b,
                  d = b === L ? 0 : a ? (w * c) / b - 0.5 : (n / b) | 0,
                  v = 0,
                  y = L,
                  m = 0;
                m < w;
                m++
              )
                (p = (m % b) - h),
                  (g = d - ((m / b) | 0)),
                  (x[m] = _ =
                    l ? Math.abs("y" === l ? g : p) : B(p * p + g * g)),
                  _ > v && (v = _),
                  _ < y && (y = _);
              "random" === n && pe(x),
                (x.max = v - y),
                (x.min = y),
                (x.v = w =
                  (parseFloat(e.amount) ||
                    parseFloat(e.each) *
                      (b > w
                        ? w - 1
                        : l
                        ? "y" === l
                          ? w / b
                          : b
                        : Math.max(b, w / b)) ||
                    0) * ("edges" === n ? -1 : 1)),
                (x.b = w < 0 ? i - w : i),
                (x.u = le(e.amount || e.each) || 0),
                (r = r && w < 0 ? We(r) : r);
            }
            return (
              (w = (x[t] - x.min) / x.max || 0),
              At(x.b + (r ? r(w) : w) * x.v) + x.u
            );
          }
        );
      },
      _e = function (t) {
        var e = Math.pow(10, ((t + "").split(".")[1] || "").length);
        return function (r) {
          var n = At(Math.round(parseFloat(r) / t) * t * e);
          return (n - (n % 1)) / e + (W(r) ? 0 : le(r));
        };
      },
      me = function (t, e) {
        var r,
          n,
          i = G(t);
        return (
          !i &&
            U(t) &&
            ((r = i = t.radius || L),
            t.values
              ? ((t = he(t.values)), (n = !W(t[0])) && (r *= r))
              : (t = _e(t.increment))),
          se(
            e,
            i
              ? q(t)
                ? function (e) {
                    return (n = t(e)), Math.abs(n - e) <= r ? n : e;
                  }
                : function (e) {
                    for (
                      var i,
                        o,
                        s = parseFloat(n ? e.x : e),
                        a = parseFloat(n ? e.y : 0),
                        l = L,
                        u = 0,
                        c = t.length;
                      c--;

                    )
                      (i = n
                        ? (i = t[c].x - s) * i + (o = t[c].y - a) * o
                        : Math.abs(t[c] - s)) < l && ((l = i), (u = c));
                    return (
                      (u = !r || l <= r ? t[u] : e),
                      n || u === e || W(e) ? u : u + le(e)
                    );
                  }
              : _e(t),
          )
        );
      },
      ve = function (t, e, r, n) {
        return se(G(t) ? !e : !0 === r ? !!(r = 0) : !n, function () {
          return G(t)
            ? t[~~(Math.random() * t.length)]
            : (r = r || 1e-5) &&
                (n = r < 1 ? Math.pow(10, (r + "").length - 2) : 1) &&
                Math.floor(
                  Math.round(
                    (t - r / 2 + Math.random() * (e - t + 0.99 * r)) / r,
                  ) *
                    r *
                    n,
                ) / n;
        });
      },
      ye = function (t, e, r) {
        return se(r, function (r) {
          return t[~~e(r)];
        });
      },
      be = function (t) {
        for (var e, r, n, i, o = 0, s = ""; ~(e = t.indexOf("random(", o)); )
          (n = t.indexOf(")", e)),
            (i = "[" === t.charAt(e + 7)),
            (r = t.substr(e + 7, n - e - 7).match(i ? et : Q)),
            (s +=
              t.substr(o, e - o) +
              ve(i ? r : +r[0], i ? 0 : +r[1], +r[2] || 1e-5)),
            (o = n + 1);
        return s + t.substr(o, t.length - o);
      },
      we = function (t, e, r, n, i) {
        var o = e - t,
          s = n - r;
        return se(i, function (e) {
          return r + (((e - t) / o) * s || 0);
        });
      },
      xe = function (t, e, r) {
        var n,
          i,
          o,
          s = t.labels,
          a = L;
        for (n in s)
          (i = s[n] - e) < 0 == !!r &&
            i &&
            a > (i = Math.abs(i)) &&
            ((o = n), (a = i));
        return o;
      },
      Te = function (t, e, r) {
        var n,
          i,
          o,
          s = t.vars,
          a = s[e],
          l = m,
          u = t._ctx;
        if (a)
          return (
            (n = s[e + "Params"]),
            (i = s.callbackScope || t),
            r && pt.length && St(),
            u && (m = u),
            (o = n ? a.apply(i, n) : a.call(i)),
            (m = l),
            o
          );
      },
      Ee = function (t) {
        return (
          Yt(t),
          t.scrollTrigger && t.scrollTrigger.kill(!!_),
          t.progress() < 1 && Te(t, "onInterrupt"),
          t
        );
      },
      ke = [],
      Ae = function (t) {
        if (V() && t) {
          var e = (t = (!t.name && t.default) || t).name,
            r = q(t),
            n =
              e && !r && t.init
                ? function () {
                    this._props = [];
                  }
                : t,
            i = {
              init: ut,
              render: mr,
              add: er,
              kill: yr,
              modifier: vr,
              rawVars: 0,
            },
            o = {
              targetTest: 0,
              get: 0,
              getSetter: dr,
              aliases: {},
              register: 0,
            };
          if ((Be(), t !== n)) {
            if (_t[e]) return;
            Rt(n, Rt(zt(t, i), o)),
              Dt(n.prototype, Dt(i, zt(t, o))),
              (_t[(n.prop = e)] = n),
              t.targetTest && (yt.push(n), (dt[e] = 1)),
              (e =
                ("css" === e
                  ? "CSS"
                  : e.charAt(0).toUpperCase() + e.substr(1)) + "Plugin");
          }
          lt(e, n), t.register && t.register(Ir, n, xr);
        } else t && ke.push(t);
      },
      Ce = 255,
      Me = {
        aqua: [0, Ce, Ce],
        lime: [0, Ce, 0],
        silver: [192, 192, 192],
        black: [0, 0, 0],
        maroon: [128, 0, 0],
        teal: [0, 128, 128],
        blue: [0, 0, Ce],
        navy: [0, 0, 128],
        white: [Ce, Ce, Ce],
        olive: [128, 128, 0],
        yellow: [Ce, Ce, 0],
        orange: [Ce, 165, 0],
        gray: [128, 128, 128],
        purple: [128, 0, 128],
        green: [0, 128, 0],
        red: [Ce, 0, 0],
        pink: [Ce, 192, 203],
        cyan: [0, Ce, Ce],
        transparent: [Ce, Ce, Ce, 0],
      },
      Se = function (t, e, r) {
        return (
          ((6 * (t += t < 0 ? 1 : t > 1 ? -1 : 0) < 1
            ? e + (r - e) * t * 6
            : t < 0.5
            ? r
            : 3 * t < 2
            ? e + (r - e) * (2 / 3 - t) * 6
            : e) *
            Ce +
            0.5) |
          0
        );
      },
      Oe = function (t, e, r) {
        var n,
          i,
          o,
          s,
          a,
          l,
          u,
          c,
          f,
          h,
          d = t ? (W(t) ? [t >> 16, (t >> 8) & Ce, t & Ce] : 0) : Me.black;
        if (!d) {
          if (("," === t.substr(-1) && (t = t.substr(0, t.length - 1)), Me[t]))
            d = Me[t];
          else if ("#" === t.charAt(0)) {
            if (
              (t.length < 6 &&
                ((n = t.charAt(1)),
                (i = t.charAt(2)),
                (o = t.charAt(3)),
                (t =
                  "#" +
                  n +
                  n +
                  i +
                  i +
                  o +
                  o +
                  (5 === t.length ? t.charAt(4) + t.charAt(4) : ""))),
              9 === t.length)
            )
              return [
                (d = parseInt(t.substr(1, 6), 16)) >> 16,
                (d >> 8) & Ce,
                d & Ce,
                parseInt(t.substr(7), 16) / 255,
              ];
            d = [(t = parseInt(t.substr(1), 16)) >> 16, (t >> 8) & Ce, t & Ce];
          } else if ("hsl" === t.substr(0, 3))
            if (((d = h = t.match(Q)), e)) {
              if (~t.indexOf("="))
                return (d = t.match(Z)), r && d.length < 4 && (d[3] = 1), d;
            } else
              (s = (+d[0] % 360) / 360),
                (a = +d[1] / 100),
                (n =
                  2 * (l = +d[2] / 100) -
                  (i = l <= 0.5 ? l * (a + 1) : l + a - l * a)),
                d.length > 3 && (d[3] *= 1),
                (d[0] = Se(s + 1 / 3, n, i)),
                (d[1] = Se(s, n, i)),
                (d[2] = Se(s - 1 / 3, n, i));
          else d = t.match(Q) || Me.transparent;
          d = d.map(Number);
        }
        return (
          e &&
            !h &&
            ((n = d[0] / Ce),
            (i = d[1] / Ce),
            (o = d[2] / Ce),
            (l = ((u = Math.max(n, i, o)) + (c = Math.min(n, i, o))) / 2),
            u === c
              ? (s = a = 0)
              : ((f = u - c),
                (a = l > 0.5 ? f / (2 - u - c) : f / (u + c)),
                (s =
                  u === n
                    ? (i - o) / f + (i < o ? 6 : 0)
                    : u === i
                    ? (o - n) / f + 2
                    : (n - i) / f + 4),
                (s *= 60)),
            (d[0] = ~~(s + 0.5)),
            (d[1] = ~~(100 * a + 0.5)),
            (d[2] = ~~(100 * l + 0.5))),
          r && d.length < 4 && (d[3] = 1),
          d
        );
      },
      Pe = function (t) {
        var e = [],
          r = [],
          n = -1;
        return (
          t.split(Re).forEach(function (t) {
            var i = t.match(J) || [];
            e.push.apply(e, i), r.push((n += i.length + 1));
          }),
          (e.c = r),
          e
        );
      },
      Le = function (t, e, r) {
        var n,
          i,
          o,
          s,
          a = "",
          l = (t + a).match(Re),
          u = e ? "hsla(" : "rgba(",
          c = 0;
        if (!l) return t;
        if (
          ((l = l.map(function (t) {
            return (
              (t = Oe(t, e, 1)) &&
              u +
                (e
                  ? t[0] + "," + t[1] + "%," + t[2] + "%," + t[3]
                  : t.join(",")) +
                ")"
            );
          })),
          r && ((o = Pe(t)), (n = r.c).join(a) !== o.c.join(a)))
        )
          for (s = (i = t.replace(Re, "1").split(J)).length - 1; c < s; c++)
            a +=
              i[c] +
              (~n.indexOf(c)
                ? l.shift() || u + "0,0,0,0)"
                : (o.length ? o : l.length ? l : r).shift());
        if (!i)
          for (s = (i = t.split(Re)).length - 1; c < s; c++) a += i[c] + l[c];
        return a + i[s];
      },
      Re = (function () {
        var t,
          e =
            "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b";
        for (t in Me) e += "|" + t + "\\b";
        return new RegExp(e + ")", "gi");
      })(),
      De = /hsl[a]?\(/,
      Ie = function (t) {
        var e,
          r = t.join(" ");
        if (((Re.lastIndex = 0), Re.test(r)))
          return (
            (e = De.test(r)),
            (t[1] = Le(t[1], e)),
            (t[0] = Le(t[0], e, Pe(t[1]))),
            !0
          );
      },
      ze = (function () {
        var t,
          e,
          r,
          n,
          i,
          o,
          s = Date.now,
          a = 500,
          l = 33,
          u = s(),
          c = u,
          f = 1e3 / 240,
          h = f,
          d = [],
          p = function r(p) {
            var g,
              _,
              m,
              v,
              y = s() - c,
              b = !0 === p;
            if (
              (y > a && (u += y - l),
              ((g = (m = (c += y) - u) - h) > 0 || b) &&
                ((v = ++n.frame),
                (i = m - 1e3 * n.time),
                (n.time = m /= 1e3),
                (h += g + (g >= f ? 4 : f - g)),
                (_ = 1)),
              b || (t = e(r)),
              _)
            )
              for (o = 0; o < d.length; o++) d[o](m, i, v, p);
          };
        return (n = {
          time: 0,
          frame: 0,
          tick: function () {
            p(!0);
          },
          deltaRatio: function (t) {
            return i / (1e3 / (t || 60));
          },
          wake: function () {
            x &&
              (!b &&
                V() &&
                ((y = b = window),
                (w = y.document || {}),
                (nt.gsap = Ir),
                (y.gsapVersions || (y.gsapVersions = [])).push(Ir.version),
                ot(it || y.GreenSockGlobals || (!y.gsap && y) || {}),
                (r = y.requestAnimationFrame),
                ke.forEach(Ae)),
              t && n.sleep(),
              (e =
                r ||
                function (t) {
                  return setTimeout(t, (h - 1e3 * n.time + 1) | 0);
                }),
              (k = 1),
              p(2));
          },
          sleep: function () {
            (r ? y.cancelAnimationFrame : clearTimeout)(t), (k = 0), (e = ut);
          },
          lagSmoothing: function (t, e) {
            (a = t || 1 / 0), (l = Math.min(e || 33, a));
          },
          fps: function (t) {
            (f = 1e3 / (t || 240)), (h = 1e3 * n.time + f);
          },
          add: function (t, e, r) {
            var i = e
              ? function (e, r, o, s) {
                  t(e, r, o, s), n.remove(i);
                }
              : t;
            return n.remove(t), d[r ? "unshift" : "push"](i), Be(), i;
          },
          remove: function (t, e) {
            ~(e = d.indexOf(t)) && d.splice(e, 1) && o >= e && o--;
          },
          _listeners: d,
        });
      })(),
      Be = function () {
        return !k && ze.wake();
      },
      Fe = {},
      Ne = /^[\d.\-M][\d.\-,\s]/,
      Ye = /["']/g,
      qe = function (t) {
        for (
          var e,
            r,
            n,
            i = {},
            o = t.substr(1, t.length - 3).split(":"),
            s = o[0],
            a = 1,
            l = o.length;
          a < l;
          a++
        )
          (r = o[a]),
            (e = a !== l - 1 ? r.lastIndexOf(",") : r.length),
            (n = r.substr(0, e)),
            (i[s] = isNaN(n) ? n.replace(Ye, "").trim() : +n),
            (s = r.substr(e + 1).trim());
        return i;
      },
      We = function (t) {
        return function (e) {
          return 1 - t(1 - e);
        };
      },
      Xe = function t(e, r) {
        for (var n, i = e._first; i; )
          i instanceof Ze
            ? t(i, r)
            : !i.vars.yoyoEase ||
              (i._yoyo && i._repeat) ||
              i._yoyo === r ||
              (i.timeline
                ? t(i.timeline, r)
                : ((n = i._ease),
                  (i._ease = i._yEase),
                  (i._yEase = n),
                  (i._yoyo = r))),
            (i = i._next);
      },
      Ue = function (t, e) {
        return (
          (t &&
            (q(t)
              ? t
              : Fe[t] ||
                (function (t) {
                  var e,
                    r,
                    n,
                    i,
                    o = (t + "").split("("),
                    s = Fe[o[0]];
                  return s && o.length > 1 && s.config
                    ? s.config.apply(
                        null,
                        ~t.indexOf("{")
                          ? [qe(o[1])]
                          : ((e = t),
                            (r = e.indexOf("(") + 1),
                            (n = e.indexOf(")")),
                            (i = e.indexOf("(", r)),
                            e.substring(
                              r,
                              ~i && i < n ? e.indexOf(")", n + 1) : n,
                            ))
                              .split(",")
                              .map(Pt),
                      )
                    : Fe._CE && Ne.test(t)
                    ? Fe._CE("", t)
                    : s;
                })(t))) ||
          e
        );
      },
      He = function (t, e, r, n) {
        void 0 === r &&
          (r = function (t) {
            return 1 - e(1 - t);
          }),
          void 0 === n &&
            (n = function (t) {
              return t < 0.5 ? e(2 * t) / 2 : 1 - e(2 * (1 - t)) / 2;
            });
        var i,
          o = { easeIn: e, easeOut: r, easeInOut: n };
        return (
          Et(t, function (t) {
            for (var e in ((Fe[t] = nt[t] = o),
            (Fe[(i = t.toLowerCase())] = r),
            o))
              Fe[
                i +
                  ("easeIn" === e ? ".in" : "easeOut" === e ? ".out" : ".inOut")
              ] = Fe[t + "." + e] = o[e];
          }),
          o
        );
      },
      Ve = function (t) {
        return function (e) {
          return e < 0.5 ? (1 - t(1 - 2 * e)) / 2 : 0.5 + t(2 * (e - 0.5)) / 2;
        };
      },
      $e = function t(e, r, n) {
        var i = r >= 1 ? r : 1,
          o = (n || (e ? 0.3 : 0.45)) / (r < 1 ? r : 1),
          s = (o / D) * (Math.asin(1 / i) || 0),
          a = function (t) {
            return 1 === t ? 1 : i * Math.pow(2, -10 * t) * N((t - s) * o) + 1;
          },
          l =
            "out" === e
              ? a
              : "in" === e
              ? function (t) {
                  return 1 - a(1 - t);
                }
              : Ve(a);
        return (
          (o = D / o),
          (l.config = function (r, n) {
            return t(e, r, n);
          }),
          l
        );
      },
      je = function t(e, r) {
        void 0 === r && (r = 1.70158);
        var n = function (t) {
            return t ? --t * t * ((r + 1) * t + r) + 1 : 0;
          },
          i =
            "out" === e
              ? n
              : "in" === e
              ? function (t) {
                  return 1 - n(1 - t);
                }
              : Ve(n);
        return (
          (i.config = function (r) {
            return t(e, r);
          }),
          i
        );
      };
    Et("Linear,Quad,Cubic,Quart,Quint,Strong", function (t, e) {
      var r = e < 5 ? e + 1 : e;
      He(
        t + ",Power" + (r - 1),
        e
          ? function (t) {
              return Math.pow(t, r);
            }
          : function (t) {
              return t;
            },
        function (t) {
          return 1 - Math.pow(1 - t, r);
        },
        function (t) {
          return t < 0.5
            ? Math.pow(2 * t, r) / 2
            : 1 - Math.pow(2 * (1 - t), r) / 2;
        },
      );
    }),
      (Fe.Linear.easeNone = Fe.none = Fe.Linear.easeIn),
      He("Elastic", $e("in"), $e("out"), $e()),
      (A = 7.5625),
      (M = 1 / (C = 2.75)),
      He(
        "Bounce",
        function (t) {
          return 1 - S(1 - t);
        },
        (S = function (t) {
          return t < M
            ? A * t * t
            : t < 0.7272727272727273
            ? A * Math.pow(t - 1.5 / C, 2) + 0.75
            : t < 0.9090909090909092
            ? A * (t -= 2.25 / C) * t + 0.9375
            : A * Math.pow(t - 2.625 / C, 2) + 0.984375;
        }),
      ),
      He("Expo", function (t) {
        return t ? Math.pow(2, 10 * (t - 1)) : 0;
      }),
      He("Circ", function (t) {
        return -(B(1 - t * t) - 1);
      }),
      He("Sine", function (t) {
        return 1 === t ? 1 : 1 - F(t * I);
      }),
      He("Back", je("in"), je("out"), je()),
      (Fe.SteppedEase =
        Fe.steps =
        nt.SteppedEase =
          {
            config: function (t, e) {
              void 0 === t && (t = 1);
              var r = 1 / t,
                n = t + (e ? 0 : 1),
                i = e ? 1 : 0;
              return function (t) {
                return (((n * ae(0, 0.99999999, t)) | 0) + i) * r;
              };
            },
          }),
      (P.ease = Fe["quad.out"]),
      Et(
        "onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",
        function (t) {
          return (bt += t + "," + t + "Params,");
        },
      );
    var Ge = function (t, e) {
        (this.id = z++),
          (t._gsap = this),
          (this.target = t),
          (this.harness = e),
          (this.get = e ? e.get : Tt),
          (this.set = e ? e.getSetter : dr);
      },
      Qe = (function () {
        function t(t) {
          (this.vars = t),
            (this._delay = +t.delay || 0),
            (this._repeat = t.repeat === 1 / 0 ? -2 : t.repeat || 0) &&
              ((this._rDelay = t.repeatDelay || 0),
              (this._yoyo = !!t.yoyo || !!t.yoyoEase)),
            (this._ts = 1),
            ee(this, +t.duration, 1, 1),
            (this.data = t.data),
            m && ((this._ctx = m), m.data.push(this)),
            k || ze.wake();
        }
        var e = t.prototype;
        return (
          (e.delay = function (t) {
            return t || 0 === t
              ? (this.parent &&
                  this.parent.smoothChildTiming &&
                  this.startTime(this._start + t - this._delay),
                (this._delay = t),
                this)
              : this._delay;
          }),
          (e.duration = function (t) {
            return arguments.length
              ? this.totalDuration(
                  this._repeat > 0 ? t + (t + this._rDelay) * this._repeat : t,
                )
              : this.totalDuration() && this._dur;
          }),
          (e.totalDuration = function (t) {
            return arguments.length
              ? ((this._dirty = 0),
                ee(
                  this,
                  this._repeat < 0
                    ? t
                    : (t - this._repeat * this._rDelay) / (this._repeat + 1),
                ))
              : this._tDur;
          }),
          (e.totalTime = function (t, e) {
            if ((Be(), !arguments.length)) return this._tTime;
            var r = this._dp;
            if (r && r.smoothChildTiming && this._ts) {
              for (
                jt(this, t), !r._dp || r.parent || Gt(r, this);
                r && r.parent;

              )
                r.parent._time !==
                  r._start +
                    (r._ts >= 0
                      ? r._tTime / r._ts
                      : (r.totalDuration() - r._tTime) / -r._ts) &&
                  r.totalTime(r._tTime, !0),
                  (r = r.parent);
              !this.parent &&
                this._dp.autoRemoveChildren &&
                ((this._ts > 0 && t < this._tDur) ||
                  (this._ts < 0 && t > 0) ||
                  (!this._tDur && !t)) &&
                Qt(this._dp, this, this._start - this._delay);
            }
            return (
              (this._tTime !== t ||
                (!this._dur && !e) ||
                (this._initted && Math.abs(this._zTime) === R) ||
                (!t && !this._initted && (this.add || this._ptLookup))) &&
                (this._ts || (this._pTime = t), Ot(this, t, e)),
              this
            );
          }),
          (e.time = function (t, e) {
            return arguments.length
              ? this.totalTime(
                  Math.min(this.totalDuration(), t + Ut(this)) %
                    (this._dur + this._rDelay) || (t ? this._dur : 0),
                  e,
                )
              : this._time;
          }),
          (e.totalProgress = function (t, e) {
            return arguments.length
              ? this.totalTime(this.totalDuration() * t, e)
              : this.totalDuration()
              ? Math.min(1, this._tTime / this._tDur)
              : this.rawTime() > 0
              ? 1
              : 0;
          }),
          (e.progress = function (t, e) {
            return arguments.length
              ? this.totalTime(
                  this.duration() *
                    (!this._yoyo || 1 & this.iteration() ? t : 1 - t) +
                    Ut(this),
                  e,
                )
              : this.duration()
              ? Math.min(1, this._time / this._dur)
              : this.rawTime() > 0
              ? 1
              : 0;
          }),
          (e.iteration = function (t, e) {
            var r = this.duration() + this._rDelay;
            return arguments.length
              ? this.totalTime(this._time + (t - 1) * r, e)
              : this._repeat
              ? Ht(this._tTime, r) + 1
              : 1;
          }),
          (e.timeScale = function (t, e) {
            if (!arguments.length) return -1e-8 === this._rts ? 0 : this._rts;
            if (this._rts === t) return this;
            var r =
              this.parent && this._ts
                ? Vt(this.parent._time, this)
                : this._tTime;
            return (
              (this._rts = +t || 0),
              (this._ts = this._ps || -1e-8 === t ? 0 : this._rts),
              this.totalTime(
                ae(-Math.abs(this._delay), this._tDur, r),
                !1 !== e,
              ),
              $t(this),
              (function (t) {
                for (var e = t.parent; e && e.parent; )
                  (e._dirty = 1), e.totalDuration(), (e = e.parent);
                return t;
              })(this)
            );
          }),
          (e.paused = function (t) {
            return arguments.length
              ? (this._ps !== t &&
                  ((this._ps = t),
                  t
                    ? ((this._pTime =
                        this._tTime || Math.max(-this._delay, this.rawTime())),
                      (this._ts = this._act = 0))
                    : (Be(),
                      (this._ts = this._rts),
                      this.totalTime(
                        this.parent && !this.parent.smoothChildTiming
                          ? this.rawTime()
                          : this._tTime || this._pTime,
                        1 === this.progress() &&
                          Math.abs(this._zTime) !== R &&
                          (this._tTime -= R),
                      ))),
                this)
              : this._ps;
          }),
          (e.startTime = function (t) {
            if (arguments.length) {
              this._start = t;
              var e = this.parent || this._dp;
              return (
                e && (e._sort || !this.parent) && Qt(e, this, t - this._delay),
                this
              );
            }
            return this._start;
          }),
          (e.endTime = function (t) {
            return (
              this._start +
              (H(t) ? this.totalDuration() : this.duration()) /
                Math.abs(this._ts || 1)
            );
          }),
          (e.rawTime = function (t) {
            var e = this.parent || this._dp;
            return e
              ? t &&
                (!this._ts ||
                  (this._repeat && this._time && this.totalProgress() < 1))
                ? this._tTime % (this._dur + this._rDelay)
                : this._ts
                ? Vt(e.rawTime(t), this)
                : this._tTime
              : this._tTime;
          }),
          (e.revert = function (t) {
            void 0 === t && (t = ht);
            var e = _;
            return (
              (_ = t),
              (this._initted || this._startAt) &&
                (this.timeline && this.timeline.revert(t),
                this.totalTime(-0.01, t.suppressEvents)),
              "nested" !== this.data && !1 !== t.kill && this.kill(),
              (_ = e),
              this
            );
          }),
          (e.globalTime = function (t) {
            for (var e = this, r = arguments.length ? t : e.rawTime(); e; )
              (r = e._start + r / (Math.abs(e._ts) || 1)), (e = e._dp);
            return !this.parent && this._sat ? this._sat.globalTime(t) : r;
          }),
          (e.repeat = function (t) {
            return arguments.length
              ? ((this._repeat = t === 1 / 0 ? -2 : t), re(this))
              : -2 === this._repeat
              ? 1 / 0
              : this._repeat;
          }),
          (e.repeatDelay = function (t) {
            if (arguments.length) {
              var e = this._time;
              return (this._rDelay = t), re(this), e ? this.time(e) : this;
            }
            return this._rDelay;
          }),
          (e.yoyo = function (t) {
            return arguments.length ? ((this._yoyo = t), this) : this._yoyo;
          }),
          (e.seek = function (t, e) {
            return this.totalTime(ie(this, t), H(e));
          }),
          (e.restart = function (t, e) {
            return this.play().totalTime(t ? -this._delay : 0, H(e));
          }),
          (e.play = function (t, e) {
            return null != t && this.seek(t, e), this.reversed(!1).paused(!1);
          }),
          (e.reverse = function (t, e) {
            return (
              null != t && this.seek(t || this.totalDuration(), e),
              this.reversed(!0).paused(!1)
            );
          }),
          (e.pause = function (t, e) {
            return null != t && this.seek(t, e), this.paused(!0);
          }),
          (e.resume = function () {
            return this.paused(!1);
          }),
          (e.reversed = function (t) {
            return arguments.length
              ? (!!t !== this.reversed() &&
                  this.timeScale(-this._rts || (t ? -1e-8 : 0)),
                this)
              : this._rts < 0;
          }),
          (e.invalidate = function () {
            return (this._initted = this._act = 0), (this._zTime = -1e-8), this;
          }),
          (e.isActive = function () {
            var t,
              e = this.parent || this._dp,
              r = this._start;
            return !(
              e &&
              !(
                this._ts &&
                this._initted &&
                e.isActive() &&
                (t = e.rawTime(!0)) >= r &&
                t < this.endTime(!0) - R
              )
            );
          }),
          (e.eventCallback = function (t, e, r) {
            var n = this.vars;
            return arguments.length > 1
              ? (e
                  ? ((n[t] = e),
                    r && (n[t + "Params"] = r),
                    "onUpdate" === t && (this._onUpdate = e))
                  : delete n[t],
                this)
              : n[t];
          }),
          (e.then = function (t) {
            var e = this;
            return new Promise(function (r) {
              var n = q(t) ? t : Lt,
                i = function () {
                  var t = e.then;
                  (e.then = null),
                    q(n) && (n = n(e)) && (n.then || n === e) && (e.then = t),
                    r(n),
                    (e.then = t);
                };
              (e._initted && 1 === e.totalProgress() && e._ts >= 0) ||
              (!e._tTime && e._ts < 0)
                ? i()
                : (e._prom = i);
            });
          }),
          (e.kill = function () {
            Ee(this);
          }),
          t
        );
      })();
    Rt(Qe.prototype, {
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
      _zTime: -1e-8,
      _prom: 0,
      _ps: !1,
      _rts: 1,
    });
    var Ze = (function (t) {
      function e(e, r) {
        var n;
        return (
          void 0 === e && (e = {}),
          ((n = t.call(this, e) || this).labels = {}),
          (n.smoothChildTiming = !!e.smoothChildTiming),
          (n.autoRemoveChildren = !!e.autoRemoveChildren),
          (n._sort = H(e.sortChildren)),
          v && Qt(e.parent || v, d(n), r),
          e.reversed && n.reverse(),
          e.paused && n.paused(!0),
          e.scrollTrigger && Zt(d(n), e.scrollTrigger),
          n
        );
      }
      p(e, t);
      var r = e.prototype;
      return (
        (r.to = function (t, e, r) {
          return oe(0, arguments, this), this;
        }),
        (r.from = function (t, e, r) {
          return oe(1, arguments, this), this;
        }),
        (r.fromTo = function (t, e, r, n) {
          return oe(2, arguments, this), this;
        }),
        (r.set = function (t, e, r) {
          return (
            (e.duration = 0),
            (e.parent = this),
            Bt(e).repeatDelay || (e.repeat = 0),
            (e.immediateRender = !!e.immediateRender),
            new lr(t, e, ie(this, r), 1),
            this
          );
        }),
        (r.call = function (t, e, r) {
          return Qt(this, lr.delayedCall(0, t, e), r);
        }),
        (r.staggerTo = function (t, e, r, n, i, o, s) {
          return (
            (r.duration = e),
            (r.stagger = r.stagger || n),
            (r.onComplete = o),
            (r.onCompleteParams = s),
            (r.parent = this),
            new lr(t, r, ie(this, i)),
            this
          );
        }),
        (r.staggerFrom = function (t, e, r, n, i, o, s) {
          return (
            (r.runBackwards = 1),
            (Bt(r).immediateRender = H(r.immediateRender)),
            this.staggerTo(t, e, r, n, i, o, s)
          );
        }),
        (r.staggerFromTo = function (t, e, r, n, i, o, s, a) {
          return (
            (n.startAt = r),
            (Bt(n).immediateRender = H(n.immediateRender)),
            this.staggerTo(t, e, n, i, o, s, a)
          );
        }),
        (r.render = function (t, e, r) {
          var n,
            i,
            o,
            s,
            a,
            l,
            u,
            c,
            f,
            h,
            d,
            p,
            g = this._time,
            m = this._dirty ? this.totalDuration() : this._tDur,
            y = this._dur,
            b = t <= 0 ? 0 : At(t),
            w = this._zTime < 0 != t < 0 && (this._initted || !y);
          if (
            (this !== v && b > m && t >= 0 && (b = m),
            b !== this._tTime || r || w)
          ) {
            if (
              (g !== this._time &&
                y &&
                ((b += this._time - g), (t += this._time - g)),
              (n = b),
              (f = this._start),
              (l = !(c = this._ts)),
              w && (y || (g = this._zTime), (t || !e) && (this._zTime = t)),
              this._repeat)
            ) {
              if (
                ((d = this._yoyo),
                (a = y + this._rDelay),
                this._repeat < -1 && t < 0)
              )
                return this.totalTime(100 * a + t, e, r);
              if (
                ((n = At(b % a)),
                b === m
                  ? ((s = this._repeat), (n = y))
                  : ((s = ~~(b / a)) && s === b / a && ((n = y), s--),
                    n > y && (n = y)),
                (h = Ht(this._tTime, a)),
                !g &&
                  this._tTime &&
                  h !== s &&
                  this._tTime - h * a - this._dur <= 0 &&
                  (h = s),
                d && 1 & s && ((n = y - n), (p = 1)),
                s !== h && !this._lock)
              ) {
                var x = d && 1 & h,
                  T = x === (d && 1 & s);
                if (
                  (s < h && (x = !x),
                  (g = x ? 0 : b % y ? y : b),
                  (this._lock = 1),
                  (this.render(g || (p ? 0 : At(s * a)), e, !y)._lock = 0),
                  (this._tTime = b),
                  !e && this.parent && Te(this, "onRepeat"),
                  this.vars.repeatRefresh &&
                    !p &&
                    (this.invalidate()._lock = 1),
                  (g && g !== this._time) ||
                    l !== !this._ts ||
                    (this.vars.onRepeat && !this.parent && !this._act))
                )
                  return this;
                if (
                  ((y = this._dur),
                  (m = this._tDur),
                  T &&
                    ((this._lock = 2),
                    (g = x ? y : -1e-4),
                    this.render(g, !0),
                    this.vars.repeatRefresh && !p && this.invalidate()),
                  (this._lock = 0),
                  !this._ts && !l)
                )
                  return this;
                Xe(this, p);
              }
            }
            if (
              (this._hasPause &&
                !this._forcing &&
                this._lock < 2 &&
                ((u = (function (t, e, r) {
                  var n;
                  if (r > e)
                    for (n = t._first; n && n._start <= r; ) {
                      if ("isPause" === n.data && n._start > e) return n;
                      n = n._next;
                    }
                  else
                    for (n = t._last; n && n._start >= r; ) {
                      if ("isPause" === n.data && n._start < e) return n;
                      n = n._prev;
                    }
                })(this, At(g), At(n))),
                u && (b -= n - (n = u._start))),
              (this._tTime = b),
              (this._time = n),
              (this._act = !c),
              this._initted ||
                ((this._onUpdate = this.vars.onUpdate),
                (this._initted = 1),
                (this._zTime = t),
                (g = 0)),
              !g && n && !e && !s && (Te(this, "onStart"), this._tTime !== b))
            )
              return this;
            if (n >= g && t >= 0)
              for (i = this._first; i; ) {
                if (
                  ((o = i._next), (i._act || n >= i._start) && i._ts && u !== i)
                ) {
                  if (i.parent !== this) return this.render(t, e, r);
                  if (
                    (i.render(
                      i._ts > 0
                        ? (n - i._start) * i._ts
                        : (i._dirty ? i.totalDuration() : i._tDur) +
                            (n - i._start) * i._ts,
                      e,
                      r,
                    ),
                    n !== this._time || (!this._ts && !l))
                  ) {
                    (u = 0), o && (b += this._zTime = -1e-8);
                    break;
                  }
                }
                i = o;
              }
            else {
              i = this._last;
              for (var E = t < 0 ? t : n; i; ) {
                if (
                  ((o = i._prev), (i._act || E <= i._end) && i._ts && u !== i)
                ) {
                  if (i.parent !== this) return this.render(t, e, r);
                  if (
                    (i.render(
                      i._ts > 0
                        ? (E - i._start) * i._ts
                        : (i._dirty ? i.totalDuration() : i._tDur) +
                            (E - i._start) * i._ts,
                      e,
                      r || (_ && (i._initted || i._startAt)),
                    ),
                    n !== this._time || (!this._ts && !l))
                  ) {
                    (u = 0), o && (b += this._zTime = E ? -1e-8 : R);
                    break;
                  }
                }
                i = o;
              }
            }
            if (
              u &&
              !e &&
              (this.pause(),
              (u.render(n >= g ? 0 : -1e-8)._zTime = n >= g ? 1 : -1),
              this._ts)
            )
              return (this._start = f), $t(this), this.render(t, e, r);
            this._onUpdate && !e && Te(this, "onUpdate", !0),
              ((b === m && this._tTime >= this.totalDuration()) || (!b && g)) &&
                ((f !== this._start && Math.abs(c) === Math.abs(this._ts)) ||
                  this._lock ||
                  ((t || !y) &&
                    ((b === m && this._ts > 0) || (!b && this._ts < 0)) &&
                    Yt(this, 1),
                  e ||
                    (t < 0 && !g) ||
                    (!b && !g && m) ||
                    (Te(
                      this,
                      b === m && t >= 0 ? "onComplete" : "onReverseComplete",
                      !0,
                    ),
                    this._prom &&
                      !(b < m && this.timeScale() > 0) &&
                      this._prom())));
          }
          return this;
        }),
        (r.add = function (t, e) {
          var r = this;
          if ((W(e) || (e = ie(this, e, t)), !(t instanceof Qe))) {
            if (G(t))
              return (
                t.forEach(function (t) {
                  return r.add(t, e);
                }),
                this
              );
            if (Y(t)) return this.addLabel(t, e);
            if (!q(t)) return this;
            t = lr.delayedCall(0, t);
          }
          return this !== t ? Qt(this, t, e) : this;
        }),
        (r.getChildren = function (t, e, r, n) {
          void 0 === t && (t = !0),
            void 0 === e && (e = !0),
            void 0 === r && (r = !0),
            void 0 === n && (n = -L);
          for (var i = [], o = this._first; o; )
            o._start >= n &&
              (o instanceof lr
                ? e && i.push(o)
                : (r && i.push(o),
                  t && i.push.apply(i, o.getChildren(!0, e, r)))),
              (o = o._next);
          return i;
        }),
        (r.getById = function (t) {
          for (var e = this.getChildren(1, 1, 1), r = e.length; r--; )
            if (e[r].vars.id === t) return e[r];
        }),
        (r.remove = function (t) {
          return Y(t)
            ? this.removeLabel(t)
            : q(t)
            ? this.killTweensOf(t)
            : (Nt(this, t),
              t === this._recent && (this._recent = this._last),
              qt(this));
        }),
        (r.totalTime = function (e, r) {
          return arguments.length
            ? ((this._forcing = 1),
              !this._dp &&
                this._ts &&
                (this._start = At(
                  ze.time -
                    (this._ts > 0
                      ? e / this._ts
                      : (this.totalDuration() - e) / -this._ts),
                )),
              t.prototype.totalTime.call(this, e, r),
              (this._forcing = 0),
              this)
            : this._tTime;
        }),
        (r.addLabel = function (t, e) {
          return (this.labels[t] = ie(this, e)), this;
        }),
        (r.removeLabel = function (t) {
          return delete this.labels[t], this;
        }),
        (r.addPause = function (t, e, r) {
          var n = lr.delayedCall(0, e || ut, r);
          return (
            (n.data = "isPause"), (this._hasPause = 1), Qt(this, n, ie(this, t))
          );
        }),
        (r.removePause = function (t) {
          var e = this._first;
          for (t = ie(this, t); e; )
            e._start === t && "isPause" === e.data && Yt(e), (e = e._next);
        }),
        (r.killTweensOf = function (t, e, r) {
          for (var n = this.getTweensOf(t, r), i = n.length; i--; )
            Je !== n[i] && n[i].kill(t, e);
          return this;
        }),
        (r.getTweensOf = function (t, e) {
          for (var r, n = [], i = he(t), o = this._first, s = W(e); o; )
            o instanceof lr
              ? Mt(o._targets, i) &&
                (s
                  ? (!Je || (o._initted && o._ts)) &&
                    o.globalTime(0) <= e &&
                    o.globalTime(o.totalDuration()) > e
                  : !e || o.isActive()) &&
                n.push(o)
              : (r = o.getTweensOf(i, e)).length && n.push.apply(n, r),
              (o = o._next);
          return n;
        }),
        (r.tweenTo = function (t, e) {
          e = e || {};
          var r,
            n = this,
            i = ie(n, t),
            o = e,
            s = o.startAt,
            a = o.onStart,
            l = o.onStartParams,
            u = o.immediateRender,
            c = lr.to(
              n,
              Rt(
                {
                  ease: e.ease || "none",
                  lazy: !1,
                  immediateRender: !1,
                  time: i,
                  overwrite: "auto",
                  duration:
                    e.duration ||
                    Math.abs(
                      (i - (s && "time" in s ? s.time : n._time)) /
                        n.timeScale(),
                    ) ||
                    R,
                  onStart: function () {
                    if ((n.pause(), !r)) {
                      var t =
                        e.duration ||
                        Math.abs(
                          (i - (s && "time" in s ? s.time : n._time)) /
                            n.timeScale(),
                        );
                      c._dur !== t && ee(c, t, 0, 1).render(c._time, !0, !0),
                        (r = 1);
                    }
                    a && a.apply(c, l || []);
                  },
                },
                e,
              ),
            );
          return u ? c.render(0) : c;
        }),
        (r.tweenFromTo = function (t, e, r) {
          return this.tweenTo(e, Rt({ startAt: { time: ie(this, t) } }, r));
        }),
        (r.recent = function () {
          return this._recent;
        }),
        (r.nextLabel = function (t) {
          return void 0 === t && (t = this._time), xe(this, ie(this, t));
        }),
        (r.previousLabel = function (t) {
          return void 0 === t && (t = this._time), xe(this, ie(this, t), 1);
        }),
        (r.currentLabel = function (t) {
          return arguments.length
            ? this.seek(t, !0)
            : this.previousLabel(this._time + R);
        }),
        (r.shiftChildren = function (t, e, r) {
          void 0 === r && (r = 0);
          for (var n, i = this._first, o = this.labels; i; )
            i._start >= r && ((i._start += t), (i._end += t)), (i = i._next);
          if (e) for (n in o) o[n] >= r && (o[n] += t);
          return qt(this);
        }),
        (r.invalidate = function (e) {
          var r = this._first;
          for (this._lock = 0; r; ) r.invalidate(e), (r = r._next);
          return t.prototype.invalidate.call(this, e);
        }),
        (r.clear = function (t) {
          void 0 === t && (t = !0);
          for (var e, r = this._first; r; )
            (e = r._next), this.remove(r), (r = e);
          return (
            this._dp && (this._time = this._tTime = this._pTime = 0),
            t && (this.labels = {}),
            qt(this)
          );
        }),
        (r.totalDuration = function (t) {
          var e,
            r,
            n,
            i = 0,
            o = this,
            s = o._last,
            a = L;
          if (arguments.length)
            return o.timeScale(
              (o._repeat < 0 ? o.duration() : o.totalDuration()) /
                (o.reversed() ? -t : t),
            );
          if (o._dirty) {
            for (n = o.parent; s; )
              (e = s._prev),
                s._dirty && s.totalDuration(),
                (r = s._start) > a && o._sort && s._ts && !o._lock
                  ? ((o._lock = 1), (Qt(o, s, r - s._delay, 1)._lock = 0))
                  : (a = r),
                r < 0 &&
                  s._ts &&
                  ((i -= r),
                  ((!n && !o._dp) || (n && n.smoothChildTiming)) &&
                    ((o._start += r / o._ts), (o._time -= r), (o._tTime -= r)),
                  o.shiftChildren(-r, !1, -Infinity),
                  (a = 0)),
                s._end > i && s._ts && (i = s._end),
                (s = e);
            ee(o, o === v && o._time > i ? o._time : i, 1, 1), (o._dirty = 0);
          }
          return o._tDur;
        }),
        (e.updateRoot = function (t) {
          if ((v._ts && (Ot(v, Vt(t, v)), (T = ze.frame)), ze.frame >= vt)) {
            vt += O.autoSleep || 120;
            var e = v._first;
            if ((!e || !e._ts) && O.autoSleep && ze._listeners.length < 2) {
              for (; e && !e._ts; ) e = e._next;
              e || ze.sleep();
            }
          }
        }),
        e
      );
    })(Qe);
    Rt(Ze.prototype, { _lock: 0, _hasPause: 0, _forcing: 0 });
    var Je,
      Ke,
      tr = function (t, e, r, n, i, o, s) {
        var a,
          l,
          u,
          c,
          f,
          h,
          d,
          p,
          g = new xr(this._pt, t, e, 0, 1, _r, null, i),
          _ = 0,
          m = 0;
        for (
          g.b = r,
            g.e = n,
            r += "",
            (d = ~(n += "").indexOf("random(")) && (n = be(n)),
            o && (o((p = [r, n]), t, e), (r = p[0]), (n = p[1])),
            l = r.match(K) || [];
          (a = K.exec(n));

        )
          (c = a[0]),
            (f = n.substring(_, a.index)),
            u ? (u = (u + 1) % 5) : "rgba(" === f.substr(-5) && (u = 1),
            c !== l[m++] &&
              ((h = parseFloat(l[m - 1]) || 0),
              (g._pt = {
                _next: g._pt,
                p: f || 1 === m ? f : ",",
                s: h,
                c: "=" === c.charAt(1) ? Ct(h, c) - h : parseFloat(c) - h,
                m: u && u < 4 ? Math.round : 0,
              }),
              (_ = K.lastIndex));
        return (
          (g.c = _ < n.length ? n.substring(_, n.length) : ""),
          (g.fp = s),
          (tt.test(n) || d) && (g.e = 0),
          (this._pt = g),
          g
        );
      },
      er = function (t, e, r, n, i, o, s, a, l, u) {
        q(n) && (n = n(i || 0, t, o));
        var c,
          f = t[e],
          h =
            "get" !== r
              ? r
              : q(f)
              ? l
                ? t[
                    e.indexOf("set") || !q(t["get" + e.substr(3)])
                      ? e
                      : "get" + e.substr(3)
                  ](l)
                : t[e]()
              : f,
          d = q(f) ? (l ? fr : cr) : ur;
        if (
          (Y(n) &&
            (~n.indexOf("random(") && (n = be(n)),
            "=" === n.charAt(1) &&
              ((c = Ct(h, n) + (le(h) || 0)) || 0 === c) &&
              (n = c)),
          !u || h !== n || Ke)
        )
          return isNaN(h * n) || "" === n
            ? (!f && !(e in t) && st(e, n),
              tr.call(this, t, e, h, n, d, a || O.stringFilter, l))
            : ((c = new xr(
                this._pt,
                t,
                e,
                +h || 0,
                n - (h || 0),
                "boolean" == typeof f ? gr : pr,
                0,
                d,
              )),
              l && (c.fp = l),
              s && c.modifier(s, this, t),
              (this._pt = c));
      },
      rr = function (t, e, r, n, i, o) {
        var s, a, l, u;
        if (
          _t[t] &&
          !1 !==
            (s = new _t[t]()).init(
              i,
              s.rawVars
                ? e[t]
                : (function (t, e, r, n, i) {
                    if (
                      (q(t) && (t = or(t, i, e, r, n)),
                      !U(t) || (t.style && t.nodeType) || G(t) || j(t))
                    )
                      return Y(t) ? or(t, i, e, r, n) : t;
                    var o,
                      s = {};
                    for (o in t) s[o] = or(t[o], i, e, r, n);
                    return s;
                  })(e[t], n, i, o, r),
              r,
              n,
              o,
            ) &&
          ((r._pt = a = new xr(r._pt, i, t, 0, 1, s.render, s, 0, s.priority)),
          r !== E)
        )
          for (
            l = r._ptLookup[r._targets.indexOf(i)], u = s._props.length;
            u--;

          )
            l[s._props[u]] = a;
        return s;
      },
      nr = function t(e, r, n) {
        var i,
          o,
          s,
          a,
          l,
          u,
          c,
          f,
          h,
          d,
          p,
          m,
          y,
          b = e.vars,
          w = b.ease,
          x = b.startAt,
          T = b.immediateRender,
          E = b.lazy,
          k = b.onUpdate,
          A = b.runBackwards,
          C = b.yoyoEase,
          M = b.keyframes,
          S = b.autoRevert,
          O = e._dur,
          D = e._startAt,
          I = e._targets,
          z = e.parent,
          B = z && "nested" === z.data ? z.vars.targets : I,
          F = "auto" === e._overwrite && !g,
          N = e.timeline;
        if (
          (N && (!M || !w) && (w = "none"),
          (e._ease = Ue(w, P.ease)),
          (e._yEase = C ? We(Ue(!0 === C ? w : C, P.ease)) : 0),
          C &&
            e._yoyo &&
            !e._repeat &&
            ((C = e._yEase), (e._yEase = e._ease), (e._ease = C)),
          (e._from = !N && !!b.runBackwards),
          !N || (M && !b.stagger))
        ) {
          if (
            ((m = (f = I[0] ? xt(I[0]).harness : 0) && b[f.prop]),
            (i = zt(b, dt)),
            D &&
              (D._zTime < 0 && D.progress(1),
              r < 0 && A && T && !S
                ? D.render(-1, !0)
                : D.revert(A && O ? ft : ct),
              (D._lazy = 0)),
            x)
          ) {
            if (
              (Yt(
                (e._startAt = lr.set(
                  I,
                  Rt(
                    {
                      data: "isStart",
                      overwrite: !1,
                      parent: z,
                      immediateRender: !0,
                      lazy: !D && H(E),
                      startAt: null,
                      delay: 0,
                      onUpdate:
                        k &&
                        function () {
                          return Te(e, "onUpdate");
                        },
                      stagger: 0,
                    },
                    x,
                  ),
                )),
              ),
              (e._startAt._dp = 0),
              (e._startAt._sat = e),
              r < 0 && (_ || (!T && !S)) && e._startAt.revert(ft),
              T && O && r <= 0 && n <= 0)
            )
              return void (r && (e._zTime = r));
          } else if (A && O && !D)
            if (
              (r && (T = !1),
              (s = Rt(
                {
                  overwrite: !1,
                  data: "isFromStart",
                  lazy: T && !D && H(E),
                  immediateRender: T,
                  stagger: 0,
                  parent: z,
                },
                i,
              )),
              m && (s[f.prop] = m),
              Yt((e._startAt = lr.set(I, s))),
              (e._startAt._dp = 0),
              (e._startAt._sat = e),
              r < 0 && (_ ? e._startAt.revert(ft) : e._startAt.render(-1, !0)),
              (e._zTime = r),
              T)
            ) {
              if (!r) return;
            } else t(e._startAt, R, R);
          for (
            e._pt = e._ptCache = 0, E = (O && H(E)) || (E && !O), o = 0;
            o < I.length;
            o++
          ) {
            if (
              ((c = (l = I[o])._gsap || wt(I)[o]._gsap),
              (e._ptLookup[o] = d = {}),
              gt[c.id] && pt.length && St(),
              (p = B === I ? o : B.indexOf(l)),
              f &&
                !1 !== (h = new f()).init(l, m || i, e, p, B) &&
                ((e._pt = a =
                  new xr(e._pt, l, h.name, 0, 1, h.render, h, 0, h.priority)),
                h._props.forEach(function (t) {
                  d[t] = a;
                }),
                h.priority && (u = 1)),
              !f || m)
            )
              for (s in i)
                _t[s] && (h = rr(s, i, e, p, l, B))
                  ? h.priority && (u = 1)
                  : (d[s] = a =
                      er.call(e, l, s, "get", i[s], p, B, 0, b.stringFilter));
            e._op && e._op[o] && e.kill(l, e._op[o]),
              F &&
                e._pt &&
                ((Je = e),
                v.killTweensOf(l, d, e.globalTime(r)),
                (y = !e.parent),
                (Je = 0)),
              e._pt && E && (gt[c.id] = 1);
          }
          u && wr(e), e._onInit && e._onInit(e);
        }
        (e._onUpdate = k),
          (e._initted = (!e._op || e._pt) && !y),
          M && r <= 0 && N.render(L, !0, !0);
      },
      ir = function (t, e, r, n) {
        var i,
          o,
          s = e.ease || n || "power1.inOut";
        if (G(e))
          (o = r[t] || (r[t] = [])),
            e.forEach(function (t, r) {
              return o.push({ t: (r / (e.length - 1)) * 100, v: t, e: s });
            });
        else
          for (i in e)
            (o = r[i] || (r[i] = [])),
              "ease" === i || o.push({ t: parseFloat(t), v: e[i], e: s });
      },
      or = function (t, e, r, n, i) {
        return q(t)
          ? t.call(e, r, n, i)
          : Y(t) && ~t.indexOf("random(")
          ? be(t)
          : t;
      },
      sr = bt + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",
      ar = {};
    Et(sr + ",id,stagger,delay,duration,paused,scrollTrigger", function (t) {
      return (ar[t] = 1);
    });
    var lr = (function (t) {
      function e(e, r, n, i) {
        var o;
        "number" == typeof r && ((n.duration = r), (r = n), (n = null));
        var s,
          a,
          l,
          u,
          c,
          f,
          h,
          p,
          _ = (o = t.call(this, i ? r : Bt(r)) || this).vars,
          m = _.duration,
          y = _.delay,
          b = _.immediateRender,
          w = _.stagger,
          x = _.overwrite,
          T = _.keyframes,
          E = _.defaults,
          k = _.scrollTrigger,
          A = _.yoyoEase,
          C = r.parent || v,
          M = (G(e) || j(e) ? W(e[0]) : "length" in r) ? [e] : he(e);
        if (
          ((o._targets = M.length
            ? wt(M)
            : at(
                "GSAP target " + e + " not found. https://gsap.com",
                !O.nullTargetWarn,
              ) || []),
          (o._ptLookup = []),
          (o._overwrite = x),
          T || w || $(m) || $(y))
        ) {
          if (
            ((r = o.vars),
            (s = o.timeline =
              new Ze({
                data: "nested",
                defaults: E || {},
                targets: C && "nested" === C.data ? C.vars.targets : M,
              })).kill(),
            (s.parent = s._dp = d(o)),
            (s._start = 0),
            w || $(m) || $(y))
          ) {
            if (((u = M.length), (h = w && ge(w)), U(w)))
              for (c in w) ~sr.indexOf(c) && (p || (p = {}), (p[c] = w[c]));
            for (a = 0; a < u; a++)
              ((l = zt(r, ar)).stagger = 0),
                A && (l.yoyoEase = A),
                p && Dt(l, p),
                (f = M[a]),
                (l.duration = +or(m, d(o), a, f, M)),
                (l.delay = (+or(y, d(o), a, f, M) || 0) - o._delay),
                !w &&
                  1 === u &&
                  l.delay &&
                  ((o._delay = y = l.delay), (o._start += y), (l.delay = 0)),
                s.to(f, l, h ? h(a, f, M) : 0),
                (s._ease = Fe.none);
            s.duration() ? (m = y = 0) : (o.timeline = 0);
          } else if (T) {
            Bt(Rt(s.vars.defaults, { ease: "none" })),
              (s._ease = Ue(T.ease || r.ease || "none"));
            var S,
              P,
              L,
              R = 0;
            if (G(T))
              T.forEach(function (t) {
                return s.to(M, t, ">");
              }),
                s.duration();
            else {
              for (c in ((l = {}), T))
                "ease" === c || "easeEach" === c || ir(c, T[c], l, T.easeEach);
              for (c in l)
                for (
                  S = l[c].sort(function (t, e) {
                    return t.t - e.t;
                  }),
                    R = 0,
                    a = 0;
                  a < S.length;
                  a++
                )
                  ((L = {
                    ease: (P = S[a]).e,
                    duration: ((P.t - (a ? S[a - 1].t : 0)) / 100) * m,
                  })[c] = P.v),
                    s.to(M, L, R),
                    (R += L.duration);
              s.duration() < m && s.to({}, { duration: m - s.duration() });
            }
          }
          m || o.duration((m = s.duration()));
        } else o.timeline = 0;
        return (
          !0 !== x || g || ((Je = d(o)), v.killTweensOf(M), (Je = 0)),
          Qt(C, d(o), n),
          r.reversed && o.reverse(),
          r.paused && o.paused(!0),
          (b ||
            (!m &&
              !T &&
              o._start === At(C._time) &&
              H(b) &&
              Xt(d(o)) &&
              "nested" !== C.data)) &&
            ((o._tTime = -1e-8), o.render(Math.max(0, -y) || 0)),
          k && Zt(d(o), k),
          o
        );
      }
      p(e, t);
      var r = e.prototype;
      return (
        (r.render = function (t, e, r) {
          var n,
            i,
            o,
            s,
            a,
            l,
            u,
            c,
            f,
            h = this._time,
            d = this._tDur,
            p = this._dur,
            g = t < 0,
            m = t > d - R && !g ? d : t < R ? 0 : t;
          if (p) {
            if (
              m !== this._tTime ||
              !t ||
              r ||
              (!this._initted && this._tTime) ||
              (this._startAt && this._zTime < 0 !== g)
            ) {
              if (((n = m), (c = this.timeline), this._repeat)) {
                if (((s = p + this._rDelay), this._repeat < -1 && g))
                  return this.totalTime(100 * s + t, e, r);
                if (
                  ((n = At(m % s)),
                  m === d
                    ? ((o = this._repeat), (n = p))
                    : ((o = ~~(m / s)) && o === At(m / s) && ((n = p), o--),
                      n > p && (n = p)),
                  (l = this._yoyo && 1 & o) && ((f = this._yEase), (n = p - n)),
                  (a = Ht(this._tTime, s)),
                  n === h && !r && this._initted && o === a)
                )
                  return (this._tTime = m), this;
                o !== a &&
                  (c && this._yEase && Xe(c, l),
                  this.vars.repeatRefresh &&
                    !l &&
                    !this._lock &&
                    this._time !== p &&
                    this._initted &&
                    ((this._lock = r = 1),
                    (this.render(At(s * o), !0).invalidate()._lock = 0)));
              }
              if (!this._initted) {
                if (Jt(this, g ? t : n, r, e, m))
                  return (this._tTime = 0), this;
                if (
                  !(
                    h === this._time ||
                    (r && this.vars.repeatRefresh && o !== a)
                  )
                )
                  return this;
                if (p !== this._dur) return this.render(t, e, r);
              }
              if (
                ((this._tTime = m),
                (this._time = n),
                !this._act && this._ts && ((this._act = 1), (this._lazy = 0)),
                (this.ratio = u = (f || this._ease)(n / p)),
                this._from && (this.ratio = u = 1 - u),
                n && !h && !e && !o && (Te(this, "onStart"), this._tTime !== m))
              )
                return this;
              for (i = this._pt; i; ) i.r(u, i.d), (i = i._next);
              (c &&
                c.render(
                  t < 0 ? t : !n && l ? -1e-8 : c._dur * c._ease(n / this._dur),
                  e,
                  r,
                )) ||
                (this._startAt && (this._zTime = t)),
                this._onUpdate &&
                  !e &&
                  (g && Wt(this, t, 0, r), Te(this, "onUpdate")),
                this._repeat &&
                  o !== a &&
                  this.vars.onRepeat &&
                  !e &&
                  this.parent &&
                  Te(this, "onRepeat"),
                (m !== this._tDur && m) ||
                  this._tTime !== m ||
                  (g && !this._onUpdate && Wt(this, t, 0, !0),
                  (t || !p) &&
                    ((m === this._tDur && this._ts > 0) ||
                      (!m && this._ts < 0)) &&
                    Yt(this, 1),
                  e ||
                    (g && !h) ||
                    !(m || h || l) ||
                    (Te(this, m === d ? "onComplete" : "onReverseComplete", !0),
                    this._prom &&
                      !(m < d && this.timeScale() > 0) &&
                      this._prom()));
            }
          } else
            !(function (t, e, r, n) {
              var i,
                o,
                s,
                a = t.ratio,
                l =
                  e < 0 ||
                  (!e &&
                    ((!t._start && Kt(t) && (t._initted || !te(t))) ||
                      ((t._ts < 0 || t._dp._ts < 0) && !te(t))))
                    ? 0
                    : 1,
                u = t._rDelay,
                c = 0;
              if (
                (u &&
                  t._repeat &&
                  ((c = ae(0, t._tDur, e)),
                  (o = Ht(c, u)),
                  t._yoyo && 1 & o && (l = 1 - l),
                  o !== Ht(t._tTime, u) &&
                    ((a = 1 - l),
                    t.vars.repeatRefresh && t._initted && t.invalidate())),
                l !== a || _ || n || t._zTime === R || (!e && t._zTime))
              ) {
                if (!t._initted && Jt(t, e, n, r, c)) return;
                for (
                  s = t._zTime,
                    t._zTime = e || (r ? R : 0),
                    r || (r = e && !s),
                    t.ratio = l,
                    t._from && (l = 1 - l),
                    t._time = 0,
                    t._tTime = c,
                    i = t._pt;
                  i;

                )
                  i.r(l, i.d), (i = i._next);
                e < 0 && Wt(t, e, 0, !0),
                  t._onUpdate && !r && Te(t, "onUpdate"),
                  c && t._repeat && !r && t.parent && Te(t, "onRepeat"),
                  (e >= t._tDur || e < 0) &&
                    t.ratio === l &&
                    (l && Yt(t, 1),
                    r ||
                      _ ||
                      (Te(t, l ? "onComplete" : "onReverseComplete", !0),
                      t._prom && t._prom()));
              } else t._zTime || (t._zTime = e);
            })(this, t, e, r);
          return this;
        }),
        (r.targets = function () {
          return this._targets;
        }),
        (r.invalidate = function (e) {
          return (
            (!e || !this.vars.runBackwards) && (this._startAt = 0),
            (this._pt =
              this._op =
              this._onUpdate =
              this._lazy =
              this.ratio =
                0),
            (this._ptLookup = []),
            this.timeline && this.timeline.invalidate(e),
            t.prototype.invalidate.call(this, e)
          );
        }),
        (r.resetTo = function (t, e, r, n, i) {
          k || ze.wake(), this._ts || this.play();
          var o = Math.min(
            this._dur,
            (this._dp._time - this._start) * this._ts,
          );
          return (
            this._initted || nr(this, o),
            (function (t, e, r, n, i, o, s, a) {
              var l,
                u,
                c,
                f,
                h = ((t._pt && t._ptCache) || (t._ptCache = {}))[e];
              if (!h)
                for (
                  h = t._ptCache[e] = [],
                    c = t._ptLookup,
                    f = t._targets.length;
                  f--;

                ) {
                  if ((l = c[f][e]) && l.d && l.d._pt)
                    for (l = l.d._pt; l && l.p !== e && l.fp !== e; )
                      l = l._next;
                  if (!l)
                    return (
                      (Ke = 1),
                      (t.vars[e] = "+=0"),
                      nr(t, s),
                      (Ke = 0),
                      a ? at(e + " not eligible for reset") : 1
                    );
                  h.push(l);
                }
              for (f = h.length; f--; )
                ((l = (u = h[f])._pt || u).s =
                  (!n && 0 !== n) || i ? l.s + (n || 0) + o * l.c : n),
                  (l.c = r - l.s),
                  u.e && (u.e = kt(r) + le(u.e)),
                  u.b && (u.b = l.s + le(u.b));
            })(this, t, e, r, n, this._ease(o / this._dur), o, i)
              ? this.resetTo(t, e, r, n, 1)
              : (jt(this, 0),
                this.parent ||
                  Ft(
                    this._dp,
                    this,
                    "_first",
                    "_last",
                    this._dp._sort ? "_start" : 0,
                  ),
                this.render(0))
          );
        }),
        (r.kill = function (t, e) {
          if ((void 0 === e && (e = "all"), !(t || (e && "all" !== e))))
            return (this._lazy = this._pt = 0), this.parent ? Ee(this) : this;
          if (this.timeline) {
            var r = this.timeline.totalDuration();
            return (
              this.timeline.killTweensOf(t, e, Je && !0 !== Je.vars.overwrite)
                ._first || Ee(this),
              this.parent &&
                r !== this.timeline.totalDuration() &&
                ee(this, (this._dur * this.timeline._tDur) / r, 0, 1),
              this
            );
          }
          var n,
            i,
            o,
            s,
            a,
            l,
            u,
            c = this._targets,
            f = t ? he(t) : c,
            h = this._ptLookup,
            d = this._pt;
          if (
            (!e || "all" === e) &&
            (function (t, e) {
              for (
                var r = t.length, n = r === e.length;
                n && r-- && t[r] === e[r];

              );
              return r < 0;
            })(c, f)
          )
            return "all" === e && (this._pt = 0), Ee(this);
          for (
            n = this._op = this._op || [],
              "all" !== e &&
                (Y(e) &&
                  ((a = {}),
                  Et(e, function (t) {
                    return (a[t] = 1);
                  }),
                  (e = a)),
                (e = (function (t, e) {
                  var r,
                    n,
                    i,
                    o,
                    s = t[0] ? xt(t[0]).harness : 0,
                    a = s && s.aliases;
                  if (!a) return e;
                  for (n in ((r = Dt({}, e)), a))
                    if ((n in r))
                      for (i = (o = a[n].split(",")).length; i--; )
                        r[o[i]] = r[n];
                  return r;
                })(c, e))),
              u = c.length;
            u--;

          )
            if (~f.indexOf(c[u]))
              for (a in ((i = h[u]),
              "all" === e
                ? ((n[u] = e), (s = i), (o = {}))
                : ((o = n[u] = n[u] || {}), (s = e)),
              s))
                (l = i && i[a]) &&
                  (("kill" in l.d && !0 !== l.d.kill(a)) || Nt(this, l, "_pt"),
                  delete i[a]),
                  "all" !== o && (o[a] = 1);
          return this._initted && !this._pt && d && Ee(this), this;
        }),
        (e.to = function (t, r) {
          return new e(t, r, arguments[2]);
        }),
        (e.from = function (t, e) {
          return oe(1, arguments);
        }),
        (e.delayedCall = function (t, r, n, i) {
          return new e(r, 0, {
            immediateRender: !1,
            lazy: !1,
            overwrite: !1,
            delay: t,
            onComplete: r,
            onReverseComplete: r,
            onCompleteParams: n,
            onReverseCompleteParams: n,
            callbackScope: i,
          });
        }),
        (e.fromTo = function (t, e, r) {
          return oe(2, arguments);
        }),
        (e.set = function (t, r) {
          return (r.duration = 0), r.repeatDelay || (r.repeat = 0), new e(t, r);
        }),
        (e.killTweensOf = function (t, e, r) {
          return v.killTweensOf(t, e, r);
        }),
        e
      );
    })(Qe);
    Rt(lr.prototype, {
      _targets: [],
      _lazy: 0,
      _startAt: 0,
      _op: 0,
      _onInit: 0,
    }),
      Et("staggerTo,staggerFrom,staggerFromTo", function (t) {
        lr[t] = function () {
          var e = new Ze(),
            r = ue.call(arguments, 0);
          return (
            r.splice("staggerFromTo" === t ? 5 : 4, 0, 0), e[t].apply(e, r)
          );
        };
      });
    var ur = function (t, e, r) {
        return (t[e] = r);
      },
      cr = function (t, e, r) {
        return t[e](r);
      },
      fr = function (t, e, r, n) {
        return t[e](n.fp, r);
      },
      hr = function (t, e, r) {
        return t.setAttribute(e, r);
      },
      dr = function (t, e) {
        return q(t[e]) ? cr : X(t[e]) && t.setAttribute ? hr : ur;
      },
      pr = function (t, e) {
        return e.set(e.t, e.p, Math.round(1e6 * (e.s + e.c * t)) / 1e6, e);
      },
      gr = function (t, e) {
        return e.set(e.t, e.p, !!(e.s + e.c * t), e);
      },
      _r = function (t, e) {
        var r = e._pt,
          n = "";
        if (!t && e.b) n = e.b;
        else if (1 === t && e.e) n = e.e;
        else {
          for (; r; )
            (n =
              r.p +
              (r.m
                ? r.m(r.s + r.c * t)
                : Math.round(1e4 * (r.s + r.c * t)) / 1e4) +
              n),
              (r = r._next);
          n += e.c;
        }
        e.set(e.t, e.p, n, e);
      },
      mr = function (t, e) {
        for (var r = e._pt; r; ) r.r(t, r.d), (r = r._next);
      },
      vr = function (t, e, r, n) {
        for (var i, o = this._pt; o; )
          (i = o._next), o.p === n && o.modifier(t, e, r), (o = i);
      },
      yr = function (t) {
        for (var e, r, n = this._pt; n; )
          (r = n._next),
            (n.p === t && !n.op) || n.op === t
              ? Nt(this, n, "_pt")
              : n.dep || (e = 1),
            (n = r);
        return !e;
      },
      br = function (t, e, r, n) {
        n.mSet(t, e, n.m.call(n.tween, r, n.mt), n);
      },
      wr = function (t) {
        for (var e, r, n, i, o = t._pt; o; ) {
          for (e = o._next, r = n; r && r.pr > o.pr; ) r = r._next;
          (o._prev = r ? r._prev : i) ? (o._prev._next = o) : (n = o),
            (o._next = r) ? (r._prev = o) : (i = o),
            (o = e);
        }
        t._pt = n;
      },
      xr = (function () {
        function t(t, e, r, n, i, o, s, a, l) {
          (this.t = e),
            (this.s = n),
            (this.c = i),
            (this.p = r),
            (this.r = o || pr),
            (this.d = s || this),
            (this.set = a || ur),
            (this.pr = l || 0),
            (this._next = t),
            t && (t._prev = this);
        }
        return (
          (t.prototype.modifier = function (t, e, r) {
            (this.mSet = this.mSet || this.set),
              (this.set = br),
              (this.m = t),
              (this.mt = r),
              (this.tween = e);
          }),
          t
        );
      })();
    Et(
      bt +
        "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",
      function (t) {
        return (dt[t] = 1);
      },
    ),
      (nt.TweenMax = nt.TweenLite = lr),
      (nt.TimelineLite = nt.TimelineMax = Ze),
      (v = new Ze({
        sortChildren: !1,
        defaults: P,
        autoRemoveChildren: !0,
        id: "root",
        smoothChildTiming: !0,
      })),
      (O.stringFilter = Ie);
    var Tr = [],
      Er = {},
      kr = [],
      Ar = 0,
      Cr = 0,
      Mr = function (t) {
        return (Er[t] || kr).map(function (t) {
          return t();
        });
      },
      Sr = function () {
        var t = Date.now(),
          e = [];
        t - Ar > 2 &&
          (Mr("matchMediaInit"),
          Tr.forEach(function (t) {
            var r,
              n,
              i,
              o,
              s = t.queries,
              a = t.conditions;
            for (n in s)
              (r = y.matchMedia(s[n]).matches) && (i = 1),
                r !== a[n] && ((a[n] = r), (o = 1));
            o && (t.revert(), i && e.push(t));
          }),
          Mr("matchMediaRevert"),
          e.forEach(function (t) {
            return t.onMatch(t, function (e) {
              return t.add(null, e);
            });
          }),
          (Ar = t),
          Mr("matchMedia"));
      },
      Or = (function () {
        function t(t, e) {
          (this.selector = e && de(e)),
            (this.data = []),
            (this._r = []),
            (this.isReverted = !1),
            (this.id = Cr++),
            t && this.add(t);
        }
        var e = t.prototype;
        return (
          (e.add = function (t, e, r) {
            q(t) && ((r = e), (e = t), (t = q));
            var n = this,
              i = function () {
                var t,
                  i = m,
                  o = n.selector;
                return (
                  i && i !== n && i.data.push(n),
                  r && (n.selector = de(r)),
                  (m = n),
                  (t = e.apply(n, arguments)),
                  q(t) && n._r.push(t),
                  (m = i),
                  (n.selector = o),
                  (n.isReverted = !1),
                  t
                );
              };
            return (
              (n.last = i),
              t === q
                ? i(n, function (t) {
                    return n.add(null, t);
                  })
                : t
                ? (n[t] = i)
                : i
            );
          }),
          (e.ignore = function (t) {
            var e = m;
            (m = null), t(this), (m = e);
          }),
          (e.getTweens = function () {
            var e = [];
            return (
              this.data.forEach(function (r) {
                return r instanceof t
                  ? e.push.apply(e, r.getTweens())
                  : r instanceof lr &&
                      !(r.parent && "nested" === r.parent.data) &&
                      e.push(r);
              }),
              e
            );
          }),
          (e.clear = function () {
            this._r.length = this.data.length = 0;
          }),
          (e.kill = function (t, e) {
            var r = this;
            if (
              (t
                ? (function () {
                    for (var e, n = r.getTweens(), i = r.data.length; i--; )
                      "isFlip" === (e = r.data[i]).data &&
                        (e.revert(),
                        e.getChildren(!0, !0, !1).forEach(function (t) {
                          return n.splice(n.indexOf(t), 1);
                        }));
                    for (
                      n
                        .map(function (t) {
                          return {
                            g:
                              t._dur ||
                              t._delay ||
                              (t._sat && !t._sat.vars.immediateRender)
                                ? t.globalTime(0)
                                : -1 / 0,
                            t,
                          };
                        })
                        .sort(function (t, e) {
                          return e.g - t.g || -1 / 0;
                        })
                        .forEach(function (e) {
                          return e.t.revert(t);
                        }),
                        i = r.data.length;
                      i--;

                    )
                      (e = r.data[i]) instanceof Ze
                        ? "nested" !== e.data &&
                          (e.scrollTrigger && e.scrollTrigger.revert(),
                          e.kill())
                        : !(e instanceof lr) && e.revert && e.revert(t);
                    r._r.forEach(function (e) {
                      return e(t, r);
                    }),
                      (r.isReverted = !0);
                  })()
                : this.data.forEach(function (t) {
                    return t.kill && t.kill();
                  }),
              this.clear(),
              e)
            )
              for (var n = Tr.length; n--; )
                Tr[n].id === this.id && Tr.splice(n, 1);
          }),
          (e.revert = function (t) {
            this.kill(t || {});
          }),
          t
        );
      })(),
      Pr = (function () {
        function t(t) {
          (this.contexts = []), (this.scope = t);
        }
        var e = t.prototype;
        return (
          (e.add = function (t, e, r) {
            U(t) || (t = { matches: t });
            var n,
              i,
              o,
              s = new Or(0, r || this.scope),
              a = (s.conditions = {});
            for (i in (m && !s.selector && (s.selector = m.selector),
            this.contexts.push(s),
            (e = s.add("onMatch", e)),
            (s.queries = t),
            t))
              "all" === i
                ? (o = 1)
                : (n = y.matchMedia(t[i])) &&
                  (Tr.indexOf(s) < 0 && Tr.push(s),
                  (a[i] = n.matches) && (o = 1),
                  n.addListener
                    ? n.addListener(Sr)
                    : n.addEventListener("change", Sr));
            return (
              o &&
                e(s, function (t) {
                  return s.add(null, t);
                }),
              this
            );
          }),
          (e.revert = function (t) {
            this.kill(t || {});
          }),
          (e.kill = function (t) {
            this.contexts.forEach(function (e) {
              return e.kill(t, !0);
            });
          }),
          t
        );
      })(),
      Lr = {
        registerPlugin: function () {
          for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++)
            e[r] = arguments[r];
          e.forEach(function (t) {
            return Ae(t);
          });
        },
        timeline: function (t) {
          return new Ze(t);
        },
        getTweensOf: function (t, e) {
          return v.getTweensOf(t, e);
        },
        getProperty: function (t, e, r, n) {
          Y(t) && (t = he(t)[0]);
          var i = xt(t || {}).get,
            o = r ? Lt : Pt;
          return (
            "native" === r && (r = ""),
            t
              ? e
                ? o(((_t[e] && _t[e].get) || i)(t, e, r, n))
                : function (e, r, n) {
                    return o(((_t[e] && _t[e].get) || i)(t, e, r, n));
                  }
              : t
          );
        },
        quickSetter: function (t, e, r) {
          if ((t = he(t)).length > 1) {
            var n = t.map(function (t) {
                return Ir.quickSetter(t, e, r);
              }),
              i = n.length;
            return function (t) {
              for (var e = i; e--; ) n[e](t);
            };
          }
          t = t[0] || {};
          var o = _t[e],
            s = xt(t),
            a = (s.harness && (s.harness.aliases || {})[e]) || e,
            l = o
              ? function (e) {
                  var n = new o();
                  (E._pt = 0),
                    n.init(t, r ? e + r : e, E, 0, [t]),
                    n.render(1, n),
                    E._pt && mr(1, E);
                }
              : s.set(t, a);
          return o
            ? l
            : function (e) {
                return l(t, a, r ? e + r : e, s, 1);
              };
        },
        quickTo: function (t, e, r) {
          var n,
            i = Ir.to(
              t,
              Dt((((n = {})[e] = "+=0.1"), (n.paused = !0), n), r || {}),
            ),
            o = function (t, r, n) {
              return i.resetTo(e, t, r, n);
            };
          return (o.tween = i), o;
        },
        isTweening: function (t) {
          return v.getTweensOf(t, !0).length > 0;
        },
        defaults: function (t) {
          return t && t.ease && (t.ease = Ue(t.ease, P.ease)), It(P, t || {});
        },
        config: function (t) {
          return It(O, t || {});
        },
        registerEffect: function (t) {
          var e = t.name,
            r = t.effect,
            n = t.plugins,
            i = t.defaults,
            o = t.extendTimeline;
          (n || "").split(",").forEach(function (t) {
            return (
              t &&
              !_t[t] &&
              !nt[t] &&
              at(e + " effect requires " + t + " plugin.")
            );
          }),
            (mt[e] = function (t, e, n) {
              return r(he(t), Rt(e || {}, i), n);
            }),
            o &&
              (Ze.prototype[e] = function (t, r, n) {
                return this.add(mt[e](t, U(r) ? r : (n = r) && {}, this), n);
              });
        },
        registerEase: function (t, e) {
          Fe[t] = Ue(e);
        },
        parseEase: function (t, e) {
          return arguments.length ? Ue(t, e) : Fe;
        },
        getById: function (t) {
          return v.getById(t);
        },
        exportRoot: function (t, e) {
          void 0 === t && (t = {});
          var r,
            n,
            i = new Ze(t);
          for (
            i.smoothChildTiming = H(t.smoothChildTiming),
              v.remove(i),
              i._dp = 0,
              i._time = i._tTime = v._time,
              r = v._first;
            r;

          )
            (n = r._next),
              (!e &&
                !r._dur &&
                r instanceof lr &&
                r.vars.onComplete === r._targets[0]) ||
                Qt(i, r, r._start - r._delay),
              (r = n);
          return Qt(v, i, 0), i;
        },
        context: function (t, e) {
          return t ? new Or(t, e) : m;
        },
        matchMedia: function (t) {
          return new Pr(t);
        },
        matchMediaRefresh: function () {
          return (
            Tr.forEach(function (t) {
              var e,
                r,
                n = t.conditions;
              for (r in n) n[r] && ((n[r] = !1), (e = 1));
              e && t.revert();
            }) || Sr()
          );
        },
        addEventListener: function (t, e) {
          var r = Er[t] || (Er[t] = []);
          ~r.indexOf(e) || r.push(e);
        },
        removeEventListener: function (t, e) {
          var r = Er[t],
            n = r && r.indexOf(e);
          n >= 0 && r.splice(n, 1);
        },
        utils: {
          wrap: function t(e, r, n) {
            var i = r - e;
            return G(e)
              ? ye(e, t(0, e.length), r)
              : se(n, function (t) {
                  return ((i + ((t - e) % i)) % i) + e;
                });
          },
          wrapYoyo: function t(e, r, n) {
            var i = r - e,
              o = 2 * i;
            return G(e)
              ? ye(e, t(0, e.length - 1), r)
              : se(n, function (t) {
                  return (
                    e + ((t = (o + ((t - e) % o)) % o || 0) > i ? o - t : t)
                  );
                });
          },
          distribute: ge,
          random: ve,
          snap: me,
          normalize: function (t, e, r) {
            return we(t, e, 0, 1, r);
          },
          getUnit: le,
          clamp: function (t, e, r) {
            return se(r, function (r) {
              return ae(t, e, r);
            });
          },
          splitColor: Oe,
          toArray: he,
          selector: de,
          mapRange: we,
          pipe: function () {
            for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++)
              e[r] = arguments[r];
            return function (t) {
              return e.reduce(function (t, e) {
                return e(t);
              }, t);
            };
          },
          unitize: function (t, e) {
            return function (r) {
              return t(parseFloat(r)) + (e || le(r));
            };
          },
          interpolate: function t(e, r, n, i) {
            var o = isNaN(e + r)
              ? 0
              : function (t) {
                  return (1 - t) * e + t * r;
                };
            if (!o) {
              var s,
                a,
                l,
                u,
                c,
                f = Y(e),
                h = {};
              if ((!0 === n && (i = 1) && (n = null), f))
                (e = { p: e }), (r = { p: r });
              else if (G(e) && !G(r)) {
                for (l = [], u = e.length, c = u - 2, a = 1; a < u; a++)
                  l.push(t(e[a - 1], e[a]));
                u--,
                  (o = function (t) {
                    t *= u;
                    var e = Math.min(c, ~~t);
                    return l[e](t - e);
                  }),
                  (n = r);
              } else i || (e = Dt(G(e) ? [] : {}, e));
              if (!l) {
                for (s in r) er.call(h, e, s, "get", r[s]);
                o = function (t) {
                  return mr(t, h) || (f ? e.p : e);
                };
              }
            }
            return se(n, o);
          },
          shuffle: pe,
        },
        install: ot,
        effects: mt,
        ticker: ze,
        updateRoot: Ze.updateRoot,
        plugins: _t,
        globalTimeline: v,
        core: {
          PropTween: xr,
          globals: lt,
          Tween: lr,
          Timeline: Ze,
          Animation: Qe,
          getCache: xt,
          _removeLinkedListItem: Nt,
          reverting: function () {
            return _;
          },
          context: function (t) {
            return t && m && (m.data.push(t), (t._ctx = m)), m;
          },
          suppressOverwrites: function (t) {
            return (g = t);
          },
        },
      };
    Et("to,from,fromTo,delayedCall,set,killTweensOf", function (t) {
      return (Lr[t] = lr[t]);
    }),
      ze.add(Ze.updateRoot),
      (E = Lr.to({}, { duration: 0 }));
    var Rr = function (t, e) {
        for (var r = t._pt; r && r.p !== e && r.op !== e && r.fp !== e; )
          r = r._next;
        return r;
      },
      Dr = function (t, e) {
        return {
          name: t,
          rawVars: 1,
          init: function (t, r, n) {
            n._onInit = function (t) {
              var n, i;
              if (
                (Y(r) &&
                  ((n = {}),
                  Et(r, function (t) {
                    return (n[t] = 1);
                  }),
                  (r = n)),
                e)
              ) {
                for (i in ((n = {}), r)) n[i] = e(r[i]);
                r = n;
              }
              !(function (t, e) {
                var r,
                  n,
                  i,
                  o = t._targets;
                for (r in e)
                  for (n = o.length; n--; )
                    (i = t._ptLookup[n][r]) &&
                      (i = i.d) &&
                      (i._pt && (i = Rr(i, r)),
                      i && i.modifier && i.modifier(e[r], t, o[n], r));
              })(t, r);
            };
          },
        };
      },
      Ir =
        Lr.registerPlugin(
          {
            name: "attr",
            init: function (t, e, r, n, i) {
              var o, s, a;
              for (o in ((this.tween = r), e))
                (a = t.getAttribute(o) || ""),
                  ((s = this.add(
                    t,
                    "setAttribute",
                    (a || 0) + "",
                    e[o],
                    n,
                    i,
                    0,
                    0,
                    o,
                  )).op = o),
                  (s.b = a),
                  this._props.push(o);
            },
            render: function (t, e) {
              for (var r = e._pt; r; )
                _ ? r.set(r.t, r.p, r.b, r) : r.r(t, r.d), (r = r._next);
            },
          },
          {
            name: "endArray",
            init: function (t, e) {
              for (var r = e.length; r--; )
                this.add(t, r, t[r] || 0, e[r], 0, 0, 0, 0, 0, 1);
            },
          },
          Dr("roundProps", _e),
          Dr("modifiers"),
          Dr("snap", me),
        ) || Lr;
    (lr.version = Ze.version = Ir.version = "3.12.4"), (x = 1), V() && Be();
    Fe.Power0,
      Fe.Power1,
      Fe.Power2,
      Fe.Power3,
      Fe.Power4,
      Fe.Linear,
      Fe.Quad,
      Fe.Cubic,
      Fe.Quart,
      Fe.Quint,
      Fe.Strong,
      Fe.Elastic,
      Fe.Back,
      Fe.SteppedEase,
      Fe.Bounce,
      Fe.Sine,
      Fe.Expo,
      Fe.Circ;
    var zr,
      Br,
      Fr,
      Nr,
      Yr,
      qr,
      Wr,
      Xr,
      Ur = {},
      Hr = 180 / Math.PI,
      Vr = Math.PI / 180,
      $r = Math.atan2,
      jr = /([A-Z])/g,
      Gr = /(left|right|width|margin|padding|x)/i,
      Qr = /[\s,\(]\S/,
      Zr = {
        autoAlpha: "opacity,visibility",
        scale: "scaleX,scaleY",
        alpha: "opacity",
      },
      Jr = function (t, e) {
        return e.set(
          e.t,
          e.p,
          Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u,
          e,
        );
      },
      Kr = function (t, e) {
        return e.set(
          e.t,
          e.p,
          1 === t ? e.e : Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u,
          e,
        );
      },
      tn = function (t, e) {
        return e.set(
          e.t,
          e.p,
          t ? Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u : e.b,
          e,
        );
      },
      en = function (t, e) {
        var r = e.s + e.c * t;
        e.set(e.t, e.p, ~~(r + (r < 0 ? -0.5 : 0.5)) + e.u, e);
      },
      rn = function (t, e) {
        return e.set(e.t, e.p, t ? e.e : e.b, e);
      },
      nn = function (t, e) {
        return e.set(e.t, e.p, 1 !== t ? e.b : e.e, e);
      },
      on = function (t, e, r) {
        return (t.style[e] = r);
      },
      sn = function (t, e, r) {
        return t.style.setProperty(e, r);
      },
      an = function (t, e, r) {
        return (t._gsap[e] = r);
      },
      ln = function (t, e, r) {
        return (t._gsap.scaleX = t._gsap.scaleY = r);
      },
      un = function (t, e, r, n, i) {
        var o = t._gsap;
        (o.scaleX = o.scaleY = r), o.renderTransform(i, o);
      },
      cn = function (t, e, r, n, i) {
        var o = t._gsap;
        (o[e] = r), o.renderTransform(i, o);
      },
      fn = "transform",
      hn = fn + "Origin",
      dn = function t(e, r) {
        var n = this,
          i = this.target,
          o = i.style,
          s = i._gsap;
        if (e in Ur && o) {
          if (((this.tfm = this.tfm || {}), "transform" === e))
            return Zr.transform.split(",").forEach(function (e) {
              return t.call(n, e, r);
            });
          if (
            (~(e = Zr[e] || e).indexOf(",")
              ? e.split(",").forEach(function (t) {
                  return (n.tfm[t] = Pn(i, t));
                })
              : (this.tfm[e] = s.x ? s[e] : Pn(i, e)),
            e === hn && (this.tfm.zOrigin = s.zOrigin),
            this.props.indexOf(fn) >= 0)
          )
            return;
          s.svg &&
            ((this.svgo = i.getAttribute("data-svg-origin")),
            this.props.push(hn, r, "")),
            (e = fn);
        }
        (o || r) && this.props.push(e, r, o[e]);
      },
      pn = function (t) {
        t.translate &&
          (t.removeProperty("translate"),
          t.removeProperty("scale"),
          t.removeProperty("rotate"));
      },
      gn = function () {
        var t,
          e,
          r = this.props,
          n = this.target,
          i = n.style,
          o = n._gsap;
        for (t = 0; t < r.length; t += 3)
          r[t + 1]
            ? (n[r[t]] = r[t + 2])
            : r[t + 2]
            ? (i[r[t]] = r[t + 2])
            : i.removeProperty(
                "--" === r[t].substr(0, 2)
                  ? r[t]
                  : r[t].replace(jr, "-$1").toLowerCase(),
              );
        if (this.tfm) {
          for (e in this.tfm) o[e] = this.tfm[e];
          o.svg &&
            (o.renderTransform(),
            n.setAttribute("data-svg-origin", this.svgo || "")),
            ((t = Wr()) && t.isStart) ||
              i[fn] ||
              (pn(i),
              o.zOrigin &&
                i[hn] &&
                ((i[hn] += " " + o.zOrigin + "px"),
                (o.zOrigin = 0),
                o.renderTransform()),
              (o.uncache = 1));
        }
      },
      _n = function (t, e) {
        var r = { target: t, props: [], revert: gn, save: dn };
        return (
          t._gsap || Ir.core.getCache(t),
          e &&
            e.split(",").forEach(function (t) {
              return r.save(t);
            }),
          r
        );
      },
      mn = function (t, e) {
        var r = Br.createElementNS
          ? Br.createElementNS(
              (e || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"),
              t,
            )
          : Br.createElement(t);
        return r && r.style ? r : Br.createElement(t);
      },
      vn = function t(e, r, n) {
        var i = getComputedStyle(e);
        return (
          i[r] ||
          i.getPropertyValue(r.replace(jr, "-$1").toLowerCase()) ||
          i.getPropertyValue(r) ||
          (!n && t(e, bn(r) || r, 1)) ||
          ""
        );
      },
      yn = "O,Moz,ms,Ms,Webkit".split(","),
      bn = function (t, e, r) {
        var n = (e || Yr).style,
          i = 5;
        if (t in n && !r) return t;
        for (
          t = t.charAt(0).toUpperCase() + t.substr(1);
          i-- && !(yn[i] + t in n);

        );
        return i < 0 ? null : (3 === i ? "ms" : i >= 0 ? yn[i] : "") + t;
      },
      wn = function () {
        "undefined" != typeof window &&
          window.document &&
          ((zr = window),
          (Br = zr.document),
          (Fr = Br.documentElement),
          (Yr = mn("div") || { style: {} }),
          mn("div"),
          (fn = bn(fn)),
          (hn = fn + "Origin"),
          (Yr.style.cssText =
            "border-width:0;line-height:0;position:absolute;padding:0"),
          (Xr = !!bn("perspective")),
          (Wr = Ir.core.reverting),
          (Nr = 1));
      },
      xn = function t(e) {
        var r,
          n = mn(
            "svg",
            (this.ownerSVGElement &&
              this.ownerSVGElement.getAttribute("xmlns")) ||
              "http://www.w3.org/2000/svg",
          ),
          i = this.parentNode,
          o = this.nextSibling,
          s = this.style.cssText;
        if (
          (Fr.appendChild(n),
          n.appendChild(this),
          (this.style.display = "block"),
          e)
        )
          try {
            (r = this.getBBox()),
              (this._gsapBBox = this.getBBox),
              (this.getBBox = t);
          } catch (t) {}
        else this._gsapBBox && (r = this._gsapBBox());
        return (
          i && (o ? i.insertBefore(this, o) : i.appendChild(this)),
          Fr.removeChild(n),
          (this.style.cssText = s),
          r
        );
      },
      Tn = function (t, e) {
        for (var r = e.length; r--; )
          if (t.hasAttribute(e[r])) return t.getAttribute(e[r]);
      },
      En = function (t) {
        var e;
        try {
          e = t.getBBox();
        } catch (r) {
          e = xn.call(t, !0);
        }
        return (
          (e && (e.width || e.height)) ||
            t.getBBox === xn ||
            (e = xn.call(t, !0)),
          !e || e.width || e.x || e.y
            ? e
            : {
                x: +Tn(t, ["x", "cx", "x1"]) || 0,
                y: +Tn(t, ["y", "cy", "y1"]) || 0,
                width: 0,
                height: 0,
              }
        );
      },
      kn = function (t) {
        return !(!t.getCTM || (t.parentNode && !t.ownerSVGElement) || !En(t));
      },
      An = function (t, e) {
        if (e) {
          var r,
            n = t.style;
          e in Ur && e !== hn && (e = fn),
            n.removeProperty
              ? (("ms" !== (r = e.substr(0, 2)) &&
                  "webkit" !== e.substr(0, 6)) ||
                  (e = "-" + e),
                n.removeProperty(
                  "--" === r ? e : e.replace(jr, "-$1").toLowerCase(),
                ))
              : n.removeAttribute(e);
        }
      },
      Cn = function (t, e, r, n, i, o) {
        var s = new xr(t._pt, e, r, 0, 1, o ? nn : rn);
        return (t._pt = s), (s.b = n), (s.e = i), t._props.push(r), s;
      },
      Mn = { deg: 1, rad: 1, turn: 1 },
      Sn = { grid: 1, flex: 1 },
      On = function t(e, r, n, i) {
        var o,
          s,
          a,
          l,
          u = parseFloat(n) || 0,
          c = (n + "").trim().substr((u + "").length) || "px",
          f = Yr.style,
          h = Gr.test(r),
          d = "svg" === e.tagName.toLowerCase(),
          p = (d ? "client" : "offset") + (h ? "Width" : "Height"),
          g = 100,
          _ = "px" === i,
          m = "%" === i;
        if (i === c || !u || Mn[i] || Mn[c]) return u;
        if (
          ("px" !== c && !_ && (u = t(e, r, n, "px")),
          (l = e.getCTM && kn(e)),
          (m || "%" === c) && (Ur[r] || ~r.indexOf("adius")))
        )
          return (
            (o = l ? e.getBBox()[h ? "width" : "height"] : e[p]),
            kt(m ? (u / o) * g : (u / 100) * o)
          );
        if (
          ((f[h ? "width" : "height"] = g + (_ ? c : i)),
          (s =
            ~r.indexOf("adius") || ("em" === i && e.appendChild && !d)
              ? e
              : e.parentNode),
          l && (s = (e.ownerSVGElement || {}).parentNode),
          (s && s !== Br && s.appendChild) || (s = Br.body),
          (a = s._gsap) &&
            m &&
            a.width &&
            h &&
            a.time === ze.time &&
            !a.uncache)
        )
          return kt((u / a.width) * g);
        if (!m || ("height" !== r && "width" !== r))
          (m || "%" === c) &&
            !Sn[vn(s, "display")] &&
            (f.position = vn(e, "position")),
            s === e && (f.position = "static"),
            s.appendChild(Yr),
            (o = Yr[p]),
            s.removeChild(Yr),
            (f.position = "absolute");
        else {
          var v = e.style[r];
          (e.style[r] = g + i), (o = e[p]), v ? (e.style[r] = v) : An(e, r);
        }
        return (
          h && m && (((a = xt(s)).time = ze.time), (a.width = s[p])),
          kt(_ ? (o * u) / g : o && u ? (g / o) * u : 0)
        );
      },
      Pn = function (t, e, r, n) {
        var i;
        return (
          Nr || wn(),
          e in Zr &&
            "transform" !== e &&
            ~(e = Zr[e]).indexOf(",") &&
            (e = e.split(",")[0]),
          Ur[e] && "transform" !== e
            ? ((i = Wn(t, n)),
              (i =
                "transformOrigin" !== e
                  ? i[e]
                  : i.svg
                  ? i.origin
                  : Xn(vn(t, hn)) + " " + i.zOrigin + "px"))
            : (!(i = t.style[e]) ||
                "auto" === i ||
                n ||
                ~(i + "").indexOf("calc(")) &&
              (i =
                (In[e] && In[e](t, e, r)) ||
                vn(t, e) ||
                Tt(t, e) ||
                ("opacity" === e ? 1 : 0)),
          r && !~(i + "").trim().indexOf(" ") ? On(t, e, i, r) + r : i
        );
      },
      Ln = function (t, e, r, n) {
        if (!r || "none" === r) {
          var i = bn(e, t, 1),
            o = i && vn(t, i, 1);
          o && o !== r
            ? ((e = i), (r = o))
            : "borderColor" === e && (r = vn(t, "borderTopColor"));
        }
        var s,
          a,
          l,
          u,
          c,
          f,
          h,
          d,
          p,
          g,
          _,
          m = new xr(this._pt, t.style, e, 0, 1, _r),
          v = 0,
          y = 0;
        if (
          ((m.b = r),
          (m.e = n),
          (r += ""),
          "auto" === (n += "") &&
            ((f = t.style[e]),
            (t.style[e] = n),
            (n = vn(t, e) || n),
            f ? (t.style[e] = f) : An(t, e)),
          Ie((s = [r, n])),
          (n = s[1]),
          (l = (r = s[0]).match(J) || []),
          (n.match(J) || []).length)
        ) {
          for (; (a = J.exec(n)); )
            (h = a[0]),
              (p = n.substring(v, a.index)),
              c
                ? (c = (c + 1) % 5)
                : ("rgba(" !== p.substr(-5) && "hsla(" !== p.substr(-5)) ||
                  (c = 1),
              h !== (f = l[y++] || "") &&
                ((u = parseFloat(f) || 0),
                (_ = f.substr((u + "").length)),
                "=" === h.charAt(1) && (h = Ct(u, h) + _),
                (d = parseFloat(h)),
                (g = h.substr((d + "").length)),
                (v = J.lastIndex - g.length),
                g ||
                  ((g = g || O.units[e] || _),
                  v === n.length && ((n += g), (m.e += g))),
                _ !== g && (u = On(t, e, f, g) || 0),
                (m._pt = {
                  _next: m._pt,
                  p: p || 1 === y ? p : ",",
                  s: u,
                  c: d - u,
                  m: (c && c < 4) || "zIndex" === e ? Math.round : 0,
                }));
          m.c = v < n.length ? n.substring(v, n.length) : "";
        } else m.r = "display" === e && "none" === n ? nn : rn;
        return tt.test(n) && (m.e = 0), (this._pt = m), m;
      },
      Rn = {
        top: "0%",
        bottom: "100%",
        left: "0%",
        right: "100%",
        center: "50%",
      },
      Dn = function (t, e) {
        if (e.tween && e.tween._time === e.tween._dur) {
          var r,
            n,
            i,
            o = e.t,
            s = o.style,
            a = e.u,
            l = o._gsap;
          if ("all" === a || !0 === a) (s.cssText = ""), (n = 1);
          else
            for (i = (a = a.split(",")).length; --i > -1; )
              (r = a[i]),
                Ur[r] && ((n = 1), (r = "transformOrigin" === r ? hn : fn)),
                An(o, r);
          n &&
            (An(o, fn),
            l &&
              (l.svg && o.removeAttribute("transform"),
              Wn(o, 1),
              (l.uncache = 1),
              pn(s)));
        }
      },
      In = {
        clearProps: function (t, e, r, n, i) {
          if ("isFromStart" !== i.data) {
            var o = (t._pt = new xr(t._pt, e, r, 0, 0, Dn));
            return (o.u = n), (o.pr = -10), (o.tween = i), t._props.push(r), 1;
          }
        },
      },
      zn = [1, 0, 0, 1, 0, 0],
      Bn = {},
      Fn = function (t) {
        return "matrix(1, 0, 0, 1, 0, 0)" === t || "none" === t || !t;
      },
      Nn = function (t) {
        var e = vn(t, fn);
        return Fn(e) ? zn : e.substr(7).match(Z).map(kt);
      },
      Yn = function (t, e) {
        var r,
          n,
          i,
          o,
          s = t._gsap || xt(t),
          a = t.style,
          l = Nn(t);
        return s.svg && t.getAttribute("transform")
          ? "1,0,0,1,0,0" ===
            (l = [
              (i = t.transform.baseVal.consolidate().matrix).a,
              i.b,
              i.c,
              i.d,
              i.e,
              i.f,
            ]).join(",")
            ? zn
            : l
          : (l !== zn ||
              t.offsetParent ||
              t === Fr ||
              s.svg ||
              ((i = a.display),
              (a.display = "block"),
              ((r = t.parentNode) && t.offsetParent) ||
                ((o = 1), (n = t.nextElementSibling), Fr.appendChild(t)),
              (l = Nn(t)),
              i ? (a.display = i) : An(t, "display"),
              o &&
                (n
                  ? r.insertBefore(t, n)
                  : r
                  ? r.appendChild(t)
                  : Fr.removeChild(t))),
            e && l.length > 6 ? [l[0], l[1], l[4], l[5], l[12], l[13]] : l);
      },
      qn = function (t, e, r, n, i, o) {
        var s,
          a,
          l,
          u = t._gsap,
          c = i || Yn(t, !0),
          f = u.xOrigin || 0,
          h = u.yOrigin || 0,
          d = u.xOffset || 0,
          p = u.yOffset || 0,
          g = c[0],
          _ = c[1],
          m = c[2],
          v = c[3],
          y = c[4],
          b = c[5],
          w = e.split(" "),
          x = parseFloat(w[0]) || 0,
          T = parseFloat(w[1]) || 0;
        r
          ? c !== zn &&
            (a = g * v - _ * m) &&
            ((l = x * (-_ / a) + T * (g / a) - (g * b - _ * y) / a),
            (x = x * (v / a) + T * (-m / a) + (m * b - v * y) / a),
            (T = l))
          : ((x =
              (s = En(t)).x + (~w[0].indexOf("%") ? (x / 100) * s.width : x)),
            (T =
              s.y + (~(w[1] || w[0]).indexOf("%") ? (T / 100) * s.height : T))),
          n || (!1 !== n && u.smooth)
            ? ((y = x - f),
              (b = T - h),
              (u.xOffset = d + (y * g + b * m) - y),
              (u.yOffset = p + (y * _ + b * v) - b))
            : (u.xOffset = u.yOffset = 0),
          (u.xOrigin = x),
          (u.yOrigin = T),
          (u.smooth = !!n),
          (u.origin = e),
          (u.originIsAbsolute = !!r),
          (t.style[hn] = "0px 0px"),
          o &&
            (Cn(o, u, "xOrigin", f, x),
            Cn(o, u, "yOrigin", h, T),
            Cn(o, u, "xOffset", d, u.xOffset),
            Cn(o, u, "yOffset", p, u.yOffset)),
          t.setAttribute("data-svg-origin", x + " " + T);
      },
      Wn = function (t, e) {
        var r = t._gsap || new Ge(t);
        if ("x" in r && !e && !r.uncache) return r;
        var n,
          i,
          o,
          s,
          a,
          l,
          u,
          c,
          f,
          h,
          d,
          p,
          g,
          _,
          m,
          v,
          y,
          b,
          w,
          x,
          T,
          E,
          k,
          A,
          C,
          M,
          S,
          P,
          L,
          R,
          D,
          I,
          z = t.style,
          B = r.scaleX < 0,
          F = "px",
          N = "deg",
          Y = getComputedStyle(t),
          q = vn(t, hn) || "0";
        return (
          (n = i = o = l = u = c = f = h = d = 0),
          (s = a = 1),
          (r.svg = !(!t.getCTM || !kn(t))),
          Y.translate &&
            (("none" === Y.translate &&
              "none" === Y.scale &&
              "none" === Y.rotate) ||
              (z[fn] =
                ("none" !== Y.translate
                  ? "translate3d(" +
                    (Y.translate + " 0 0").split(" ").slice(0, 3).join(", ") +
                    ") "
                  : "") +
                ("none" !== Y.rotate ? "rotate(" + Y.rotate + ") " : "") +
                ("none" !== Y.scale
                  ? "scale(" + Y.scale.split(" ").join(",") + ") "
                  : "") +
                ("none" !== Y[fn] ? Y[fn] : "")),
            (z.scale = z.rotate = z.translate = "none")),
          (_ = Yn(t, r.svg)),
          r.svg &&
            (r.uncache
              ? ((C = t.getBBox()),
                (q = r.xOrigin - C.x + "px " + (r.yOrigin - C.y) + "px"),
                (A = ""))
              : (A = !e && t.getAttribute("data-svg-origin")),
            qn(t, A || q, !!A || r.originIsAbsolute, !1 !== r.smooth, _)),
          (p = r.xOrigin || 0),
          (g = r.yOrigin || 0),
          _ !== zn &&
            ((b = _[0]),
            (w = _[1]),
            (x = _[2]),
            (T = _[3]),
            (n = E = _[4]),
            (i = k = _[5]),
            6 === _.length
              ? ((s = Math.sqrt(b * b + w * w)),
                (a = Math.sqrt(T * T + x * x)),
                (l = b || w ? $r(w, b) * Hr : 0),
                (f = x || T ? $r(x, T) * Hr + l : 0) &&
                  (a *= Math.abs(Math.cos(f * Vr))),
                r.svg &&
                  ((n -= p - (p * b + g * x)), (i -= g - (p * w + g * T))))
              : ((I = _[6]),
                (R = _[7]),
                (S = _[8]),
                (P = _[9]),
                (L = _[10]),
                (D = _[11]),
                (n = _[12]),
                (i = _[13]),
                (o = _[14]),
                (u = (m = $r(I, L)) * Hr),
                m &&
                  ((A = E * (v = Math.cos(-m)) + S * (y = Math.sin(-m))),
                  (C = k * v + P * y),
                  (M = I * v + L * y),
                  (S = E * -y + S * v),
                  (P = k * -y + P * v),
                  (L = I * -y + L * v),
                  (D = R * -y + D * v),
                  (E = A),
                  (k = C),
                  (I = M)),
                (c = (m = $r(-x, L)) * Hr),
                m &&
                  ((v = Math.cos(-m)),
                  (D = T * (y = Math.sin(-m)) + D * v),
                  (b = A = b * v - S * y),
                  (w = C = w * v - P * y),
                  (x = M = x * v - L * y)),
                (l = (m = $r(w, b)) * Hr),
                m &&
                  ((A = b * (v = Math.cos(m)) + w * (y = Math.sin(m))),
                  (C = E * v + k * y),
                  (w = w * v - b * y),
                  (k = k * v - E * y),
                  (b = A),
                  (E = C)),
                u &&
                  Math.abs(u) + Math.abs(l) > 359.9 &&
                  ((u = l = 0), (c = 180 - c)),
                (s = kt(Math.sqrt(b * b + w * w + x * x))),
                (a = kt(Math.sqrt(k * k + I * I))),
                (m = $r(E, k)),
                (f = Math.abs(m) > 2e-4 ? m * Hr : 0),
                (d = D ? 1 / (D < 0 ? -D : D) : 0)),
            r.svg &&
              ((A = t.getAttribute("transform")),
              (r.forceCSS = t.setAttribute("transform", "") || !Fn(vn(t, fn))),
              A && t.setAttribute("transform", A))),
          Math.abs(f) > 90 &&
            Math.abs(f) < 270 &&
            (B
              ? ((s *= -1),
                (f += l <= 0 ? 180 : -180),
                (l += l <= 0 ? 180 : -180))
              : ((a *= -1), (f += f <= 0 ? 180 : -180))),
          (e = e || r.uncache),
          (r.x =
            n -
            ((r.xPercent =
              n &&
              ((!e && r.xPercent) ||
                (Math.round(t.offsetWidth / 2) === Math.round(-n) ? -50 : 0)))
              ? (t.offsetWidth * r.xPercent) / 100
              : 0) +
            F),
          (r.y =
            i -
            ((r.yPercent =
              i &&
              ((!e && r.yPercent) ||
                (Math.round(t.offsetHeight / 2) === Math.round(-i) ? -50 : 0)))
              ? (t.offsetHeight * r.yPercent) / 100
              : 0) +
            F),
          (r.z = o + F),
          (r.scaleX = kt(s)),
          (r.scaleY = kt(a)),
          (r.rotation = kt(l) + N),
          (r.rotationX = kt(u) + N),
          (r.rotationY = kt(c) + N),
          (r.skewX = f + N),
          (r.skewY = h + N),
          (r.transformPerspective = d + F),
          (r.zOrigin = parseFloat(q.split(" ")[2]) || (!e && r.zOrigin) || 0) &&
            (z[hn] = Xn(q)),
          (r.xOffset = r.yOffset = 0),
          (r.force3D = O.force3D),
          (r.renderTransform = r.svg ? Qn : Xr ? Gn : Hn),
          (r.uncache = 0),
          r
        );
      },
      Xn = function (t) {
        return (t = t.split(" "))[0] + " " + t[1];
      },
      Un = function (t, e, r) {
        var n = le(e);
        return kt(parseFloat(e) + parseFloat(On(t, "x", r + "px", n))) + n;
      },
      Hn = function (t, e) {
        (e.z = "0px"),
          (e.rotationY = e.rotationX = "0deg"),
          (e.force3D = 0),
          Gn(t, e);
      },
      Vn = "0deg",
      $n = "0px",
      jn = ") ",
      Gn = function (t, e) {
        var r = e || this,
          n = r.xPercent,
          i = r.yPercent,
          o = r.x,
          s = r.y,
          a = r.z,
          l = r.rotation,
          u = r.rotationY,
          c = r.rotationX,
          f = r.skewX,
          h = r.skewY,
          d = r.scaleX,
          p = r.scaleY,
          g = r.transformPerspective,
          _ = r.force3D,
          m = r.target,
          v = r.zOrigin,
          y = "",
          b = ("auto" === _ && t && 1 !== t) || !0 === _;
        if (v && (c !== Vn || u !== Vn)) {
          var w,
            x = parseFloat(u) * Vr,
            T = Math.sin(x),
            E = Math.cos(x);
          (x = parseFloat(c) * Vr),
            (w = Math.cos(x)),
            (o = Un(m, o, T * w * -v)),
            (s = Un(m, s, -Math.sin(x) * -v)),
            (a = Un(m, a, E * w * -v + v));
        }
        g !== $n && (y += "perspective(" + g + jn),
          (n || i) && (y += "translate(" + n + "%, " + i + "%) "),
          (b || o !== $n || s !== $n || a !== $n) &&
            (y +=
              a !== $n || b
                ? "translate3d(" + o + ", " + s + ", " + a + ") "
                : "translate(" + o + ", " + s + jn),
          l !== Vn && (y += "rotate(" + l + jn),
          u !== Vn && (y += "rotateY(" + u + jn),
          c !== Vn && (y += "rotateX(" + c + jn),
          (f === Vn && h === Vn) || (y += "skew(" + f + ", " + h + jn),
          (1 === d && 1 === p) || (y += "scale(" + d + ", " + p + jn),
          (m.style[fn] = y || "translate(0, 0)");
      },
      Qn = function (t, e) {
        var r,
          n,
          i,
          o,
          s,
          a = e || this,
          l = a.xPercent,
          u = a.yPercent,
          c = a.x,
          f = a.y,
          h = a.rotation,
          d = a.skewX,
          p = a.skewY,
          g = a.scaleX,
          _ = a.scaleY,
          m = a.target,
          v = a.xOrigin,
          y = a.yOrigin,
          b = a.xOffset,
          w = a.yOffset,
          x = a.forceCSS,
          T = parseFloat(c),
          E = parseFloat(f);
        (h = parseFloat(h)),
          (d = parseFloat(d)),
          (p = parseFloat(p)) && ((d += p = parseFloat(p)), (h += p)),
          h || d
            ? ((h *= Vr),
              (d *= Vr),
              (r = Math.cos(h) * g),
              (n = Math.sin(h) * g),
              (i = Math.sin(h - d) * -_),
              (o = Math.cos(h - d) * _),
              d &&
                ((p *= Vr),
                (s = Math.tan(d - p)),
                (i *= s = Math.sqrt(1 + s * s)),
                (o *= s),
                p &&
                  ((s = Math.tan(p)),
                  (r *= s = Math.sqrt(1 + s * s)),
                  (n *= s))),
              (r = kt(r)),
              (n = kt(n)),
              (i = kt(i)),
              (o = kt(o)))
            : ((r = g), (o = _), (n = i = 0)),
          ((T && !~(c + "").indexOf("px")) ||
            (E && !~(f + "").indexOf("px"))) &&
            ((T = On(m, "x", c, "px")), (E = On(m, "y", f, "px"))),
          (v || y || b || w) &&
            ((T = kt(T + v - (v * r + y * i) + b)),
            (E = kt(E + y - (v * n + y * o) + w))),
          (l || u) &&
            ((s = m.getBBox()),
            (T = kt(T + (l / 100) * s.width)),
            (E = kt(E + (u / 100) * s.height))),
          (s =
            "matrix(" +
            r +
            "," +
            n +
            "," +
            i +
            "," +
            o +
            "," +
            T +
            "," +
            E +
            ")"),
          m.setAttribute("transform", s),
          x && (m.style[fn] = s);
      },
      Zn = function (t, e, r, n, i) {
        var o,
          s,
          a = 360,
          l = Y(i),
          u = parseFloat(i) * (l && ~i.indexOf("rad") ? Hr : 1) - n,
          c = n + u + "deg";
        return (
          l &&
            ("short" === (o = i.split("_")[1]) &&
              (u %= a) !== u % 180 &&
              (u += u < 0 ? a : -360),
            "cw" === o && u < 0
              ? (u = ((u + 36e9) % a) - ~~(u / a) * a)
              : "ccw" === o && u > 0 && (u = ((u - 36e9) % a) - ~~(u / a) * a)),
          (t._pt = s = new xr(t._pt, e, r, n, u, Kr)),
          (s.e = c),
          (s.u = "deg"),
          t._props.push(r),
          s
        );
      },
      Jn = function (t, e) {
        for (var r in e) t[r] = e[r];
        return t;
      },
      Kn = function (t, e, r) {
        var n,
          i,
          o,
          s,
          a,
          l,
          u,
          c = Jn({}, r._gsap),
          f = r.style;
        for (i in (c.svg
          ? ((o = r.getAttribute("transform")),
            r.setAttribute("transform", ""),
            (f[fn] = e),
            (n = Wn(r, 1)),
            An(r, fn),
            r.setAttribute("transform", o))
          : ((o = getComputedStyle(r)[fn]),
            (f[fn] = e),
            (n = Wn(r, 1)),
            (f[fn] = o)),
        Ur))
          (o = c[i]) !== (s = n[i]) &&
            "perspective,force3D,transformOrigin,svgOrigin".indexOf(i) < 0 &&
            ((a = le(o) !== (u = le(s)) ? On(r, i, o, u) : parseFloat(o)),
            (l = parseFloat(s)),
            (t._pt = new xr(t._pt, n, i, a, l - a, Jr)),
            (t._pt.u = u || 0),
            t._props.push(i));
        Jn(n, c);
      };
    Et("padding,margin,Width,Radius", function (t, e) {
      var r = "Top",
        n = "Right",
        i = "Bottom",
        o = "Left",
        s = (e < 3 ? [r, n, i, o] : [r + o, r + n, i + n, i + o]).map(
          function (r) {
            return e < 2 ? t + r : "border" + r + t;
          },
        );
      In[e > 1 ? "border" + t : t] = function (t, e, r, n, i) {
        var o, a;
        if (arguments.length < 4)
          return (
            (o = s.map(function (e) {
              return Pn(t, e, r);
            })),
            5 === (a = o.join(" ")).split(o[0]).length ? o[0] : a
          );
        (o = (n + "").split(" ")),
          (a = {}),
          s.forEach(function (t, e) {
            return (a[t] = o[e] = o[e] || o[((e - 1) / 2) | 0]);
          }),
          t.init(e, a, i);
      };
    });
    var ti,
      ei,
      ri,
      ni = {
        name: "css",
        register: wn,
        targetTest: function (t) {
          return t.style && t.nodeType;
        },
        init: function (t, e, r, n, i) {
          var o,
            s,
            a,
            l,
            u,
            c,
            f,
            h,
            d,
            p,
            g,
            _,
            m,
            v,
            y,
            b,
            w,
            x,
            T,
            E,
            k = this._props,
            A = t.style,
            C = r.vars.startAt;
          for (f in (Nr || wn(),
          (this.styles = this.styles || _n(t)),
          (b = this.styles.props),
          (this.tween = r),
          e))
            if (
              "autoRound" !== f &&
              ((s = e[f]), !_t[f] || !rr(f, e, r, n, t, i))
            )
              if (
                ((u = typeof s),
                (c = In[f]),
                "function" === u && (u = typeof (s = s.call(r, n, t, i))),
                "string" === u && ~s.indexOf("random(") && (s = be(s)),
                c)
              )
                c(this, t, f, s, r) && (y = 1);
              else if ("--" === f.substr(0, 2))
                (o = (getComputedStyle(t).getPropertyValue(f) + "").trim()),
                  (s += ""),
                  (Re.lastIndex = 0),
                  Re.test(o) || ((h = le(o)), (d = le(s))),
                  d ? h !== d && (o = On(t, f, o, d) + d) : h && (s += h),
                  this.add(A, "setProperty", o, s, n, i, 0, 0, f),
                  k.push(f),
                  b.push(f, 0, A[f]);
              else if ("undefined" !== u) {
                if (
                  (C && f in C
                    ? ((o =
                        "function" == typeof C[f]
                          ? C[f].call(r, n, t, i)
                          : C[f]),
                      Y(o) && ~o.indexOf("random(") && (o = be(o)),
                      le(o + "") ||
                        "auto" === o ||
                        (o += O.units[f] || le(Pn(t, f)) || ""),
                      "=" === (o + "").charAt(1) && (o = Pn(t, f)))
                    : (o = Pn(t, f)),
                  (l = parseFloat(o)),
                  (p =
                    "string" === u && "=" === s.charAt(1) && s.substr(0, 2)) &&
                    (s = s.substr(2)),
                  (a = parseFloat(s)),
                  f in Zr &&
                    ("autoAlpha" === f &&
                      (1 === l &&
                        "hidden" === Pn(t, "visibility") &&
                        a &&
                        (l = 0),
                      b.push("visibility", 0, A.visibility),
                      Cn(
                        this,
                        A,
                        "visibility",
                        l ? "inherit" : "hidden",
                        a ? "inherit" : "hidden",
                        !a,
                      )),
                    "scale" !== f &&
                      "transform" !== f &&
                      ~(f = Zr[f]).indexOf(",") &&
                      (f = f.split(",")[0])),
                  (g = f in Ur))
                )
                  if (
                    (this.styles.save(f),
                    _ ||
                      (((m = t._gsap).renderTransform && !e.parseTransform) ||
                        Wn(t, e.parseTransform),
                      (v = !1 !== e.smoothOrigin && m.smooth),
                      ((_ = this._pt =
                        new xr(
                          this._pt,
                          A,
                          fn,
                          0,
                          1,
                          m.renderTransform,
                          m,
                          0,
                          -1,
                        )).dep = 1)),
                    "scale" === f)
                  )
                    (this._pt = new xr(
                      this._pt,
                      m,
                      "scaleY",
                      m.scaleY,
                      (p ? Ct(m.scaleY, p + a) : a) - m.scaleY || 0,
                      Jr,
                    )),
                      (this._pt.u = 0),
                      k.push("scaleY", f),
                      (f += "X");
                  else {
                    if ("transformOrigin" === f) {
                      b.push(hn, 0, A[hn]),
                        (x = void 0),
                        (T = void 0),
                        (E = void 0),
                        (x = (w = s).split(" ")),
                        (T = x[0]),
                        (E = x[1] || "50%"),
                        ("top" !== T &&
                          "bottom" !== T &&
                          "left" !== E &&
                          "right" !== E) ||
                          ((w = T), (T = E), (E = w)),
                        (x[0] = Rn[T] || T),
                        (x[1] = Rn[E] || E),
                        (s = x.join(" ")),
                        m.svg
                          ? qn(t, s, 0, v, 0, this)
                          : ((d = parseFloat(s.split(" ")[2]) || 0) !==
                              m.zOrigin && Cn(this, m, "zOrigin", m.zOrigin, d),
                            Cn(this, A, f, Xn(o), Xn(s)));
                      continue;
                    }
                    if ("svgOrigin" === f) {
                      qn(t, s, 1, v, 0, this);
                      continue;
                    }
                    if (f in Bn) {
                      Zn(this, m, f, l, p ? Ct(l, p + s) : s);
                      continue;
                    }
                    if ("smoothOrigin" === f) {
                      Cn(this, m, "smooth", m.smooth, s);
                      continue;
                    }
                    if ("force3D" === f) {
                      m[f] = s;
                      continue;
                    }
                    if ("transform" === f) {
                      Kn(this, s, t);
                      continue;
                    }
                  }
                else f in A || (f = bn(f) || f);
                if (
                  g ||
                  ((a || 0 === a) && (l || 0 === l) && !Qr.test(s) && f in A)
                )
                  a || (a = 0),
                    (h = (o + "").substr((l + "").length)) !==
                      (d = le(s) || (f in O.units ? O.units[f] : h)) &&
                      (l = On(t, f, o, d)),
                    (this._pt = new xr(
                      this._pt,
                      g ? m : A,
                      f,
                      l,
                      (p ? Ct(l, p + a) : a) - l,
                      g || ("px" !== d && "zIndex" !== f) || !1 === e.autoRound
                        ? Jr
                        : en,
                    )),
                    (this._pt.u = d || 0),
                    h !== d &&
                      "%" !== d &&
                      ((this._pt.b = o), (this._pt.r = tn));
                else if (f in A) Ln.call(this, t, f, o, p ? p + s : s);
                else if (f in t) this.add(t, f, o || t[f], p ? p + s : s, n, i);
                else if ("parseTransform" !== f) {
                  st(f, s);
                  continue;
                }
                g || (f in A ? b.push(f, 0, A[f]) : b.push(f, 1, o || t[f])),
                  k.push(f);
              }
          y && wr(this);
        },
        render: function (t, e) {
          if (e.tween._time || !Wr())
            for (var r = e._pt; r; ) r.r(t, r.d), (r = r._next);
          else e.styles.revert();
        },
        get: Pn,
        aliases: Zr,
        getSetter: function (t, e, r) {
          var n = Zr[e];
          return (
            n && n.indexOf(",") < 0 && (e = n),
            e in Ur && e !== hn && (t._gsap.x || Pn(t, "x"))
              ? r && qr === r
                ? "scale" === e
                  ? ln
                  : an
                : (qr = r || {}) && ("scale" === e ? un : cn)
              : t.style && !X(t.style[e])
              ? on
              : ~e.indexOf("-")
              ? sn
              : dr(t, e)
          );
        },
        core: { _removeProperty: An, _getMatrix: Yn },
      };
    (Ir.utils.checkPrefix = bn),
      (Ir.core.getStyleSaver = _n),
      (ri = Et(
        (ti = "x,y,z,scale,scaleX,scaleY,xPercent,yPercent") +
          "," +
          (ei = "rotation,rotationX,rotationY,skewX,skewY") +
          ",transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective",
        function (t) {
          Ur[t] = 1;
        },
      )),
      Et(ei, function (t) {
        (O.units[t] = "deg"), (Bn[t] = 1);
      }),
      (Zr[ri[13]] = ti + "," + ei),
      Et(
        "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY",
        function (t) {
          var e = t.split(":");
          Zr[e[1]] = ri[e[0]];
        },
      ),
      Et(
        "x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",
        function (t) {
          O.units[t] = "px";
        },
      ),
      Ir.registerPlugin(ni);
    var ii = Ir.registerPlugin(ni) || Ir,
      oi = (ii.core.Tween, r(546));
    ii.registerPlugin(oi.ScrollTrigger),
      ii.utils.toArray(".box").forEach((t, e) => {
        oi.ScrollTrigger.create({
          trigger: t,
          start: "top top",
          pin: !0,
          pinSpacing: !1,
        });
      }),
      ii.from(".left-item__info", { x: 300, opacity: 0, duration: 1 }),
      ii.to(".about-us__info", {
        scrollTrigger: {
          trigger: ".page__about-us",
          start: "top top",
          scrub: !0,
        },
        xPercent: 20,
        opacity: 0,
      }),
      ii.from(".info-txt__title", {
        scrollTrigger: { trigger: ".page__about-us", start: "top 70%" },
        x: 300,
        opacity: 0,
        duration: 0.8,
      }),
      ii.from(".info-txt__caption", {
        scrollTrigger: { trigger: ".page__about-us", start: "top 70%" },
        x: 300,
        opacity: 0,
        duration: 1.1,
      }),
      ii.from(".info-txt__descript", {
        scrollTrigger: { trigger: ".page__about-us", start: "top 70%" },
        x: 300,
        opacity: 0,
        duration: 1.3,
      }),
      ii.from(".info-txt__link", {
        scrollTrigger: { trigger: ".page__about-us", start: "top 20%" },
        opacity: 0,
        duration: 1.7,
      }),
      (window.FLS = !1),
      (function (t) {
        let e = new Image();
        (e.onload = e.onerror =
          function () {
            t(2 == e.height);
          }),
          (e.src =
            "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA");
      })(function (t) {
        let e = !0 === t ? "webp" : "no-webp";
        document.documentElement.classList.add(e);
      }),
      (function () {
        const t = document.querySelectorAll(
          "input[placeholder],textarea[placeholder]",
        );
        t.length &&
          t.forEach((t) => {
            t.dataset.placeholder = t.placeholder;
          }),
          document.body.addEventListener("focusin", function (t) {
            const e = t.target;
            ("INPUT" !== e.tagName && "TEXTAREA" !== e.tagName) ||
              (e.dataset.placeholder && (e.placeholder = ""),
              e.classList.add("_form-focus"),
              e.parentElement.classList.add("_form-focus"),
              a.removeError(e));
          }),
          document.body.addEventListener("focusout", function (t) {
            const e = t.target;
            ("INPUT" !== e.tagName && "TEXTAREA" !== e.tagName) ||
              (e.dataset.placeholder && (e.placeholder = e.dataset.placeholder),
              e.classList.remove("_form-focus"),
              e.parentElement.classList.remove("_form-focus"),
              e.hasAttribute("data-validate") && a.validateInput(e));
          });
      })(),
      (function (t) {
        const e = document.forms;
        if (e.length)
          for (const t of e)
            t.addEventListener("submit", function (t) {
              r(t.target, t);
            }),
              t.addEventListener("reset", function (t) {
                const e = t.target;
                a.formClean(e);
              });
        async function r(e, r) {
          if (0 === (t ? a.getErrors(e) : 0)) {
            if (e.hasAttribute("data-ajax")) {
              r.preventDefault();
              const t = e.getAttribute("action")
                  ? e.getAttribute("action").trim()
                  : "#",
                n = e.getAttribute("method")
                  ? e.getAttribute("method").trim()
                  : "GET",
                o = new FormData(e);
              e.classList.add("_sending");
              const s = await fetch(t, { method: n, body: o });
              if (s.ok) {
                await s.json();
                e.classList.remove("_sending"), i(e);
              } else alert("Ошибка"), e.classList.remove("_sending");
            } else e.hasAttribute("data-dev") && (r.preventDefault(), i(e));
          } else {
            r.preventDefault();
            const t = e.querySelector("._form-error");
            t && e.hasAttribute("data-goto-error") && o(t, !0, 1e3);
          }
        }
        function i(t) {
          document.dispatchEvent(
            new CustomEvent("formSent", { detail: { form: t } }),
          ),
            a.formClean(t),
            n(`[Формы]: ${"Форма отправлена!"}`);
        }
      })(!0),
      new l({}),
      (function () {
        function t(t) {
          if ("click" === t.type) {
            const e = t.target;
            if (e.closest("[data-goto]")) {
              const r = e.closest("[data-goto]"),
                n = r.dataset.goto ? r.dataset.goto : "",
                i = !!r.hasAttribute("data-goto-header"),
                s = r.dataset.gotoSpeed ? r.dataset.gotoSpeed : "500";
              o(n, i, s), t.preventDefault();
            }
          } else if ("watcherCallback" === t.type && t.detail) {
            const e = t.detail.entry,
              r = e.target;
            if ("navigator" === r.dataset.watch) {
              let t = r.id;
              document.querySelector("[data-goto]._navigator-active");
              const n = document.querySelector(`[data-goto="#${t}"]`);
              e.isIntersecting
                ? n && n.classList.add("_navigator-active")
                : n && n.classList.remove("_navigator-active");
            }
          }
        }
        document.addEventListener("click", t),
          document.addEventListener("watcherCallback", t);
      })(),
      (function () {
        u = !0;
        const t = document.querySelector("header.header"),
          e = t.hasAttribute("data-scroll-show"),
          r = t.dataset.scrollShow ? t.dataset.scrollShow : 500,
          n = t.dataset.scroll ? t.dataset.scroll : 1;
        let i,
          o = 0;
        document.addEventListener("windowScroll", function (s) {
          const a = window.scrollY;
          clearTimeout(i),
            a >= n
              ? (!t.classList.contains("_header-scroll") &&
                  t.classList.add("_header-scroll"),
                e &&
                  (a > o
                    ? t.classList.contains("_header-show") &&
                      t.classList.remove("_header-show")
                    : !t.classList.contains("_header-show") &&
                      t.classList.add("_header-show"),
                  (i = setTimeout(() => {
                    !t.classList.contains("_header-show") &&
                      t.classList.add("_header-show");
                  }, r))))
              : (t.classList.contains("_header-scroll") &&
                  t.classList.remove("_header-scroll"),
                e &&
                  t.classList.contains("_header-show") &&
                  t.classList.remove("_header-show")),
            (o = a <= 0 ? 0 : a);
        });
      })(),
      (u = !0),
      (function () {
        const t = document.querySelectorAll("[data-sticky]");
        t.length &&
          t.forEach((t) => {
            let e = {
              top: t.dataset.stickyTop ? parseInt(t.dataset.stickyTop) : 0,
              bottom: t.dataset.stickyBottom
                ? parseInt(t.dataset.stickyBottom)
                : 0,
              header: t.hasAttribute("data-sticky-header")
                ? document.querySelector("header.header").offsetHeight
                : 0,
            };
            !(function (t, e) {
              const r = t.querySelector("[data-sticky-item]"),
                n = e.header,
                i = n + e.top,
                o = r.getBoundingClientRect().top + scrollY - i;
              document.addEventListener("windowScroll", function (n) {
                const s =
                  t.offsetHeight +
                  t.getBoundingClientRect().top +
                  scrollY -
                  (i + r.offsetHeight + e.bottom);
                let a = {
                  position: "relative",
                  bottom: "auto",
                  top: "0px",
                  left: "0px",
                  width: "auto",
                };
                i + e.bottom + r.offsetHeight < window.innerHeight &&
                  (scrollY >= o && scrollY <= s
                    ? ((a.position = "fixed"),
                      (a.bottom = "auto"),
                      (a.top = `${i}px`),
                      (a.left = `${r.getBoundingClientRect().left}px`),
                      (a.width = `${r.offsetWidth}px`))
                    : scrollY >= s &&
                      ((a.position = "absolute"),
                      (a.bottom = `${e.bottom}px`),
                      (a.top = "auto"),
                      (a.left = "0px"),
                      (a.width = `${r.offsetWidth}px`))),
                  (function (t, e) {
                    t.style.cssText = `position:${e.position};bottom:${e.bottom};top:${e.top};left:${e.left};width:${e.width};`;
                  })(r, a);
              });
            })(t, e);
          });
      })();
  })();
})();
