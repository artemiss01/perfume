(() => {
  var t = {
      732: function (t) {
        t.exports = (function () {
          "use strict";
          function t() {
            return (
              (t =
                Object.assign ||
                function (t) {
                  for (var e = 1; e < arguments.length; e++) {
                    var n = arguments[e];
                    for (var o in n)
                      Object.prototype.hasOwnProperty.call(n, o) &&
                        (t[o] = n[o]);
                  }
                  return t;
                }),
              t.apply(this, arguments)
            );
          }
          var e = "undefined" != typeof window,
            n =
              (e && !("onscroll" in window)) ||
              ("undefined" != typeof navigator &&
                /(gle|ing|ro)bot|crawl|spider/i.test(navigator.userAgent)),
            o = e && "IntersectionObserver" in window,
            r = e && "classList" in document.createElement("p"),
            a = e && window.devicePixelRatio > 1,
            s = {
              elements_selector: ".lazy",
              container: n || e ? document : null,
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
            c = function (e) {
              return t({}, s, e);
            },
            l = function (t, e) {
              var n,
                o = "LazyLoad::Initialized",
                r = new t(e);
              try {
                n = new CustomEvent(o, { detail: { instance: r } });
              } catch (t) {
                (n = document.createEvent("CustomEvent")).initCustomEvent(
                  o,
                  !1,
                  !1,
                  { instance: r },
                );
              }
              window.dispatchEvent(n);
            },
            i = "src",
            d = "srcset",
            u = "sizes",
            f = "poster",
            h = "llOriginalAttrs",
            m = "data",
            g = "loading",
            v = "loaded",
            _ = "applied",
            p = "error",
            b = "native",
            E = "data-",
            w = "ll-status",
            L = function (t, e) {
              return t.getAttribute(E + e);
            },
            A = function (t) {
              return L(t, w);
            },
            y = function (t, e) {
              return (function (t, e, n) {
                var o = "data-ll-status";
                null !== n ? t.setAttribute(o, n) : t.removeAttribute(o);
              })(t, 0, e);
            },
            I = function (t) {
              return y(t, null);
            },
            k = function (t) {
              return null === A(t);
            },
            S = function (t) {
              return A(t) === b;
            },
            C = [g, v, _, p],
            x = function (t, e, n, o) {
              t &&
                "function" == typeof t &&
                (void 0 === o ? (void 0 === n ? t(e) : t(e, n)) : t(e, n, o));
            },
            T = function (t, e) {
              r
                ? t.classList.add(e)
                : (t.className += (t.className ? " " : "") + e);
            },
            W = function (t, e) {
              r
                ? t.classList.remove(e)
                : (t.className = t.className
                    .replace(new RegExp("(^|\\s+)" + e + "(\\s+|$)"), " ")
                    .replace(/^\s+/, "")
                    .replace(/\s+$/, ""));
            },
            O = function (t) {
              return t.llTempImage;
            },
            q = function (t, e) {
              if (e) {
                var n = e._observer;
                n && n.unobserve(t);
              }
            },
            M = function (t, e) {
              t && (t.loadingCount += e);
            },
            R = function (t, e) {
              t && (t.toLoadCount = e);
            },
            N = function (t) {
              for (var e, n = [], o = 0; (e = t.children[o]); o += 1)
                "SOURCE" === e.tagName && n.push(e);
              return n;
            },
            $ = function (t, e) {
              var n = t.parentNode;
              n && "PICTURE" === n.tagName && N(n).forEach(e);
            },
            z = function (t, e) {
              N(t).forEach(e);
            },
            B = [i],
            D = [i, f],
            j = [i, d, u],
            P = [m],
            G = function (t) {
              return !!t[h];
            },
            F = function (t) {
              return t[h];
            },
            H = function (t) {
              return delete t[h];
            },
            U = function (t, e) {
              if (!G(t)) {
                var n = {};
                e.forEach(function (e) {
                  n[e] = t.getAttribute(e);
                }),
                  (t[h] = n);
              }
            },
            V = function (t, e) {
              if (G(t)) {
                var n = F(t);
                e.forEach(function (e) {
                  !(function (t, e, n) {
                    n ? t.setAttribute(e, n) : t.removeAttribute(e);
                  })(t, e, n[e]);
                });
              }
            },
            J = function (t, e, n) {
              T(t, e.class_applied),
                y(t, _),
                n &&
                  (e.unobserve_completed && q(t, e),
                  x(e.callback_applied, t, n));
            },
            X = function (t, e, n) {
              T(t, e.class_loading),
                y(t, g),
                n && (M(n, 1), x(e.callback_loading, t, n));
            },
            Y = function (t, e, n) {
              n && t.setAttribute(e, n);
            },
            Z = function (t, e) {
              Y(t, u, L(t, e.data_sizes)),
                Y(t, d, L(t, e.data_srcset)),
                Y(t, i, L(t, e.data_src));
            },
            Q = {
              IMG: function (t, e) {
                $(t, function (t) {
                  U(t, j), Z(t, e);
                }),
                  U(t, j),
                  Z(t, e);
              },
              IFRAME: function (t, e) {
                U(t, B), Y(t, i, L(t, e.data_src));
              },
              VIDEO: function (t, e) {
                z(t, function (t) {
                  U(t, B), Y(t, i, L(t, e.data_src));
                }),
                  U(t, D),
                  Y(t, f, L(t, e.data_poster)),
                  Y(t, i, L(t, e.data_src)),
                  t.load();
              },
              OBJECT: function (t, e) {
                U(t, P), Y(t, m, L(t, e.data_src));
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
                x(t.callback_finish, e);
            },
            et = function (t, e, n) {
              t.addEventListener(e, n), (t.llEvLisnrs[e] = n);
            },
            nt = function (t, e, n) {
              t.removeEventListener(e, n);
            },
            ot = function (t) {
              return !!t.llEvLisnrs;
            },
            rt = function (t) {
              if (ot(t)) {
                var e = t.llEvLisnrs;
                for (var n in e) {
                  var o = e[n];
                  nt(t, n, o);
                }
                delete t.llEvLisnrs;
              }
            },
            at = function (t, e, n) {
              !(function (t) {
                delete t.llTempImage;
              })(t),
                M(n, -1),
                (function (t) {
                  t && (t.toLoadCount -= 1);
                })(n),
                W(t, e.class_loading),
                e.unobserve_completed && q(t, n);
            },
            st = function (t, e, n) {
              var o = O(t) || t;
              ot(o) ||
                (function (t, e, n) {
                  ot(t) || (t.llEvLisnrs = {});
                  var o = "VIDEO" === t.tagName ? "loadeddata" : "load";
                  et(t, o, e), et(t, "error", n);
                })(
                  o,
                  function (r) {
                    !(function (t, e, n, o) {
                      var r = S(e);
                      at(e, n, o),
                        T(e, n.class_loaded),
                        y(e, v),
                        x(n.callback_loaded, e, o),
                        r || tt(n, o);
                    })(0, t, e, n),
                      rt(o);
                  },
                  function (r) {
                    !(function (t, e, n, o) {
                      var r = S(e);
                      at(e, n, o),
                        T(e, n.class_error),
                        y(e, p),
                        x(n.callback_error, e, o),
                        n.restore_on_error && V(e, j),
                        r || tt(n, o);
                    })(0, t, e, n),
                      rt(o);
                  },
                );
            },
            ct = function (t, e, n) {
              !(function (t) {
                return K.indexOf(t.tagName) > -1;
              })(t)
                ? (function (t, e, n) {
                    !(function (t) {
                      t.llTempImage = document.createElement("IMG");
                    })(t),
                      st(t, e, n),
                      (function (t) {
                        G(t) ||
                          (t[h] = { backgroundImage: t.style.backgroundImage });
                      })(t),
                      (function (t, e, n) {
                        var o = L(t, e.data_bg),
                          r = L(t, e.data_bg_hidpi),
                          s = a && r ? r : o;
                        s &&
                          ((t.style.backgroundImage = 'url("'.concat(s, '")')),
                          O(t).setAttribute(i, s),
                          X(t, e, n));
                      })(t, e, n),
                      (function (t, e, n) {
                        var o = L(t, e.data_bg_multi),
                          r = L(t, e.data_bg_multi_hidpi),
                          s = a && r ? r : o;
                        s && ((t.style.backgroundImage = s), J(t, e, n));
                      })(t, e, n),
                      (function (t, e, n) {
                        var o = L(t, e.data_bg_set);
                        if (o) {
                          var r = o.split("|"),
                            a = r.map(function (t) {
                              return "image-set(".concat(t, ")");
                            });
                          (t.style.backgroundImage = a.join()),
                            "" === t.style.backgroundImage &&
                              ((a = r.map(function (t) {
                                return "-webkit-image-set(".concat(t, ")");
                              })),
                              (t.style.backgroundImage = a.join())),
                            J(t, e, n);
                        }
                      })(t, e, n);
                  })(t, e, n)
                : (function (t, e, n) {
                    st(t, e, n),
                      (function (t, e, n) {
                        var o = Q[t.tagName];
                        o && (o(t, e), X(t, e, n));
                      })(t, e, n);
                  })(t, e, n);
            },
            lt = function (t) {
              t.removeAttribute(i), t.removeAttribute(d), t.removeAttribute(u);
            },
            it = function (t) {
              $(t, function (t) {
                V(t, j);
              }),
                V(t, j);
            },
            dt = {
              IMG: it,
              IFRAME: function (t) {
                V(t, B);
              },
              VIDEO: function (t) {
                z(t, function (t) {
                  V(t, B);
                }),
                  V(t, D),
                  t.load();
              },
              OBJECT: function (t) {
                V(t, P);
              },
            },
            ut = function (t, e) {
              (function (t) {
                var e = dt[t.tagName];
                e
                  ? e(t)
                  : (function (t) {
                      if (G(t)) {
                        var e = F(t);
                        t.style.backgroundImage = e.backgroundImage;
                      }
                    })(t);
              })(t),
                (function (t, e) {
                  k(t) ||
                    S(t) ||
                    (W(t, e.class_entered),
                    W(t, e.class_exited),
                    W(t, e.class_applied),
                    W(t, e.class_loading),
                    W(t, e.class_loaded),
                    W(t, e.class_error));
                })(t, e),
                I(t),
                H(t);
            },
            ft = ["IMG", "IFRAME", "VIDEO"],
            ht = function (t) {
              return t.use_native && "loading" in HTMLImageElement.prototype;
            },
            mt = function (t, e, n) {
              t.forEach(function (t) {
                return (function (t) {
                  return t.isIntersecting || t.intersectionRatio > 0;
                })(t)
                  ? (function (t, e, n, o) {
                      var r = (function (t) {
                        return C.indexOf(A(t)) >= 0;
                      })(t);
                      y(t, "entered"),
                        T(t, n.class_entered),
                        W(t, n.class_exited),
                        (function (t, e, n) {
                          e.unobserve_entered && q(t, n);
                        })(t, n, o),
                        x(n.callback_enter, t, e, o),
                        r || ct(t, n, o);
                    })(t.target, t, e, n)
                  : (function (t, e, n, o) {
                      k(t) ||
                        (T(t, n.class_exited),
                        (function (t, e, n, o) {
                          n.cancel_on_exit &&
                            (function (t) {
                              return A(t) === g;
                            })(t) &&
                            "IMG" === t.tagName &&
                            (rt(t),
                            (function (t) {
                              $(t, function (t) {
                                lt(t);
                              }),
                                lt(t);
                            })(t),
                            it(t),
                            W(t, n.class_loading),
                            M(o, -1),
                            I(t),
                            x(n.callback_cancel, t, e, o));
                        })(t, e, n, o),
                        x(n.callback_exit, t, e, o));
                    })(t.target, t, e, n);
              });
            },
            gt = function (t) {
              return Array.prototype.slice.call(t);
            },
            vt = function (t) {
              return t.container.querySelectorAll(t.elements_selector);
            },
            _t = function (t) {
              return (function (t) {
                return A(t) === p;
              })(t);
            },
            pt = function (t, e) {
              return (function (t) {
                return gt(t).filter(k);
              })(t || vt(e));
            },
            bt = function (t, n) {
              var r = c(t);
              (this._settings = r),
                (this.loadingCount = 0),
                (function (t, e) {
                  o &&
                    !ht(t) &&
                    (e._observer = new IntersectionObserver(
                      function (n) {
                        mt(n, t, e);
                      },
                      (function (t) {
                        return {
                          root: t.container === document ? null : t.container,
                          rootMargin: t.thresholds || t.threshold + "px",
                        };
                      })(t),
                    ));
                })(r, this),
                (function (t, n) {
                  e &&
                    ((n._onlineHandler = function () {
                      !(function (t, e) {
                        var n;
                        ((n = vt(t)), gt(n).filter(_t)).forEach(function (e) {
                          W(e, t.class_error), I(e);
                        }),
                          e.update();
                      })(t, n);
                    }),
                    window.addEventListener("online", n._onlineHandler));
                })(r, this),
                this.update(n);
            };
          return (
            (bt.prototype = {
              update: function (t) {
                var e,
                  r,
                  a = this._settings,
                  s = pt(t, a);
                R(this, s.length),
                  !n && o
                    ? ht(a)
                      ? (function (t, e, n) {
                          t.forEach(function (t) {
                            -1 !== ft.indexOf(t.tagName) &&
                              (function (t, e, n) {
                                t.setAttribute("loading", "lazy"),
                                  st(t, e, n),
                                  (function (t, e) {
                                    var n = Q[t.tagName];
                                    n && n(t, e);
                                  })(t, e),
                                  y(t, b);
                              })(t, e, n);
                          }),
                            R(n, 0);
                        })(s, a, this)
                      : ((r = s),
                        (function (t) {
                          t.disconnect();
                        })((e = this._observer)),
                        (function (t, e) {
                          e.forEach(function (e) {
                            t.observe(e);
                          });
                        })(e, r))
                    : this.loadAll(s);
              },
              destroy: function () {
                this._observer && this._observer.disconnect(),
                  e &&
                    window.removeEventListener("online", this._onlineHandler),
                  vt(this._settings).forEach(function (t) {
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
                  n = this._settings;
                pt(t, n).forEach(function (t) {
                  q(t, e), ct(t, n, e);
                });
              },
              restoreAll: function () {
                var t = this._settings;
                vt(t).forEach(function (e) {
                  ut(e, t);
                });
              },
            }),
            (bt.load = function (t, e) {
              var n = c(e);
              ct(t, n);
            }),
            (bt.resetStatus = function (t) {
              I(t);
            }),
            e &&
              (function (t, e) {
                if (e)
                  if (e.length) for (var n, o = 0; (n = e[o]); o += 1) l(t, n);
                  else l(t, e);
              })(bt, window.lazyLoadOptions),
            bt
          );
        })();
      },
    },
    e = {};
  function n(o) {
    var r = e[o];
    if (void 0 !== r) return r.exports;
    var a = (e[o] = { exports: {} });
    return t[o].call(a.exports, a, a.exports, n), a.exports;
  }
  (() => {
    "use strict";
    let t = !0,
      e = (e = 500) => {
        let n = document.querySelector("body");
        if (t) {
          let o = document.querySelectorAll("[data-lp]");
          setTimeout(() => {
            for (let t = 0; t < o.length; t++) {
              o[t].style.paddingRight = "0px";
            }
            (n.style.paddingRight = "0px"),
              document.documentElement.classList.remove("lock");
          }, e),
            (t = !1),
            setTimeout(function () {
              t = !0;
            }, e);
        }
      };
    function o(t) {
      setTimeout(() => {
        window.FLS && console.log(t);
      }, 0);
    }
    function r(t) {
      return t.filter(function (t, e, n) {
        return n.indexOf(t) === e;
      });
    }
    let a = (t, n = !1, r = 500, a = 0) => {
      const s = document.querySelector(t);
      if (s) {
        let c = "",
          l = 0;
        n &&
          ((c = "header.header"), (l = document.querySelector(c).offsetHeight));
        let i = {
          speedAsDuration: !0,
          speed: r,
          header: c,
          offset: a,
          easing: "easeOutQuad",
        };
        if (
          (document.documentElement.classList.contains("menu-open") &&
            (e(), document.documentElement.classList.remove("menu-open")),
          "undefined" != typeof SmoothScroll)
        )
          new SmoothScroll().animateScroll(s, "", i);
        else {
          let t = s.getBoundingClientRect().top + scrollY;
          window.scrollTo({ top: l ? t - l : t, behavior: "smooth" });
        }
        o(`[gotoBlock]: Юхуу...едем к ${t}`);
      } else o(`[gotoBlock]: Ой ой..Такого блока нет на странице: ${t}`);
    };
    const s = { inputMaskModule: null, selectModule: null };
    let c = {
      getErrors(t) {
        let e = 0,
          n = t.querySelectorAll("*[data-required]");
        return (
          n.length &&
            n.forEach((t) => {
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
              const n = e[t];
              n.parentElement.classList.remove("_form-focus"),
                n.classList.remove("_form-focus"),
                c.removeError(n),
                (n.value = n.dataset.placeholder);
            }
            let n = t.querySelectorAll(".checkbox__input");
            if (n.length > 0)
              for (let t = 0; t < n.length; t++) {
                n[t].checked = !1;
              }
            if (s.selectModule) {
              let e = t.querySelectorAll(".select");
              if (e.length)
                for (let t = 0; t < e.length; t++) {
                  const n = e[t].querySelector("select");
                  s.selectModule.selectBuild(n);
                }
            }
          }, 0);
      },
      emailTest: (t) =>
        !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(t.value),
    };
    new (n(732))({
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
            r(
              Array.from(t).map(function (t) {
                return `${t.dataset.watchRoot ? t.dataset.watchRoot : null}|${
                  t.dataset.watchMargin ? t.dataset.watchMargin : "0px"
                }|${t.dataset.watchThreshold ? t.dataset.watchThreshold : 0}`;
              }),
            ).forEach((e) => {
              let n = e.split("|"),
                o = { root: n[0], margin: n[1], threshold: n[2] },
                r = Array.from(t).filter(function (t) {
                  let e = t.dataset.watchRoot ? t.dataset.watchRoot : null,
                    n = t.dataset.watchMargin ? t.dataset.watchMargin : "0px",
                    r = t.dataset.watchThreshold ? t.dataset.watchThreshold : 0;
                  if (
                    String(e) === o.root &&
                    String(n) === o.margin &&
                    String(r) === o.threshold
                  )
                    return t;
                }),
                a = this.getScrollWatcherConfig(o);
              this.scrollWatcherInit(r, a);
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
        this.config.logging && o(`[Наблюдатель]: ${t}`);
      }
      scrollWatcherCallback(t, e) {
        const n = t.target;
        this.scrollWatcherIntersecting(t, n),
          n.hasAttribute("data-watch-once") &&
            t.isIntersecting &&
            this.scrollWatcherOff(n, e),
          document.dispatchEvent(
            new CustomEvent("watcherCallback", { detail: { entry: t } }),
          );
      }
    }
    let i = !1;
    setTimeout(() => {
      if (i) {
        let t = new Event("windowScroll");
        window.addEventListener("scroll", function (e) {
          document.dispatchEvent(t);
        });
      }
    }, 0);
    let d,
      u = document.getElementById("popup-cookies");
    u.querySelector(".popup__close");
    document.addEventListener("click", function (t) {
      (d = t.target), d.closest(".popup__close") && u.classList.add("hidden");
    });
    let f = !0;
    document.addEventListener("click", function (t) {
      let e = t.target;
      f && e.closest(".icon-menu")
        ? (document.documentElement.classList.add("menu-open"),
          document.documentElement.classList.add("lock"),
          (f = !1))
        : e.closest(".menu") ||
          (document.documentElement.classList.remove("menu-open"),
          document.documentElement.classList.remove("lock"),
          (f = !0));
    }),
      (window.FLS = !0),
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
              c.removeError(e));
          }),
          document.body.addEventListener("focusout", function (t) {
            const e = t.target;
            ("INPUT" !== e.tagName && "TEXTAREA" !== e.tagName) ||
              (e.dataset.placeholder && (e.placeholder = e.dataset.placeholder),
              e.classList.remove("_form-focus"),
              e.parentElement.classList.remove("_form-focus"),
              e.hasAttribute("data-validate") && c.validateInput(e));
          });
      })(),
      (function (t) {
        const e = document.forms;
        if (e.length)
          for (const t of e)
            t.addEventListener("submit", function (t) {
              n(t.target, t);
            }),
              t.addEventListener("reset", function (t) {
                const e = t.target;
                c.formClean(e);
              });
        async function n(e, n) {
          if (0 === (t ? c.getErrors(e) : 0)) {
            if (e.hasAttribute("data-ajax")) {
              n.preventDefault();
              const t = e.getAttribute("action")
                  ? e.getAttribute("action").trim()
                  : "#",
                o = e.getAttribute("method")
                  ? e.getAttribute("method").trim()
                  : "GET",
                a = new FormData(e);
              e.classList.add("_sending");
              const s = await fetch(t, { method: o, body: a });
              if (s.ok) {
                await s.json();
                e.classList.remove("_sending"), r(e);
              } else alert("Ошибка"), e.classList.remove("_sending");
            } else e.hasAttribute("data-dev") && (n.preventDefault(), r(e));
          } else {
            n.preventDefault();
            const t = e.querySelector("._form-error");
            t && e.hasAttribute("data-goto-error") && a(t, !0, 1e3);
          }
        }
        function r(t) {
          document.dispatchEvent(
            new CustomEvent("formSent", { detail: { form: t } }),
          ),
            c.formClean(t),
            o(`[Формы]: ${"Форма отправлена!"}`);
        }
      })(!0),
      new l({}),
      (function () {
        function t(t) {
          if ("click" === t.type) {
            const e = t.target;
            if (e.closest("[data-goto]")) {
              const n = e.closest("[data-goto]"),
                o = n.dataset.goto ? n.dataset.goto : "",
                r = !!n.hasAttribute("data-goto-header"),
                s = n.dataset.gotoSpeed ? n.dataset.gotoSpeed : "500";
              a(o, r, s), t.preventDefault();
            }
          } else if ("watcherCallback" === t.type && t.detail) {
            const e = t.detail.entry,
              n = e.target;
            if ("navigator" === n.dataset.watch) {
              let t = n.id;
              document.querySelector("[data-goto]._navigator-active");
              const o = document.querySelector(`[data-goto="#${t}"]`);
              e.isIntersecting
                ? o && o.classList.add("_navigator-active")
                : o && o.classList.remove("_navigator-active");
            }
          }
        }
        document.addEventListener("click", t),
          document.addEventListener("watcherCallback", t);
      })(),
      (function () {
        i = !0;
        const t = document.querySelector("header.header"),
          e = t.hasAttribute("data-scroll-show"),
          n = t.dataset.scrollShow ? t.dataset.scrollShow : 500,
          o = t.dataset.scroll ? t.dataset.scroll : 1;
        let r,
          a = 0;
        document.addEventListener("windowScroll", function (s) {
          const c = window.scrollY;
          clearTimeout(r),
            c >= o
              ? (!t.classList.contains("_header-scroll") &&
                  t.classList.add("_header-scroll"),
                e &&
                  (c > a
                    ? t.classList.contains("_header-show") &&
                      t.classList.remove("_header-show")
                    : !t.classList.contains("_header-show") &&
                      t.classList.add("_header-show"),
                  (r = setTimeout(() => {
                    !t.classList.contains("_header-show") &&
                      t.classList.add("_header-show");
                  }, n))))
              : (t.classList.contains("_header-scroll") &&
                  t.classList.remove("_header-scroll"),
                e &&
                  t.classList.contains("_header-show") &&
                  t.classList.remove("_header-show")),
            (a = c <= 0 ? 0 : c);
        });
      })();
  })();
})();
