(this["webpackJsonp@livechat/chat-widget"] = this["webpackJsonp@livechat/chat-widget"] || []).push([
    [6], {
        653: function(e, n, t) {
            "use strict";
            t.d(n, "a", (function() {
                return l
            }));
            var r = t(0),
                u = t(108);
            var o = function(e) {
                return e = e || Object.create(null), {
                    on: function(n, t) {
                        (e[n] || (e[n] = [])).push(t)
                    },
                    off: function(n, t) {
                        e[n] && e[n].splice(e[n].indexOf(t) >>> 0, 1)
                    },
                    emit: function(n, t) {
                        (e[n] || []).slice().map((function(e) {
                            e(t)
                        })), (e["*"] || []).slice().map((function(e) {
                            e(n, t)
                        }))
                    }
                }
            };

            function c(e) {
                return null !== e ? e === document.body || e.scrollHeight > e.clientHeight ? function(e) {
                    return e === document.body ? {
                        offsetTop: 0,
                        scrollY: window.pageYOffset,
                        height: window.innerHeight,
                        setPosition: function(e) {
                            return window.scrollTo(0, e)
                        }
                    } : {
                        offsetTop: e.getBoundingClientRect().top,
                        scrollY: e.scrollTop,
                        height: e.offsetHeight,
                        setPosition: function(n) {
                            return e.scrollTop = n
                        }
                    }
                }(e) : c(e.parentNode) : null
            }
            var i = "undefined" !== typeof window ? r.useEffect : r.useLayoutEffect;

            function a() {
                var e = Object(r.useState)()[1];
                return Object(r.useCallback)((function() {
                    return e(Object.create(null))
                }), [])
            }
            var f = 0;

            function l(e) {
                var n = e.id,
                    t = void 0 === n ? f++ : n,
                    l = e.initialHighlightedIndex,
                    d = void 0 === l ? 0 : l,
                    s = e.onHighlight,
                    v = e.onSelect,
                    m = e.selected,
                    p = Object(r.useRef)("controller-" + t),
                    b = Object(r.useRef)("list-" + t),
                    h = function(e) {
                        return b.current + "-item-" + e
                    },
                    g = Object(u.a)((function() {
                        return o()
                    })),
                    O = a(),
                    E = Object(r.useRef)(d),
                    y = Object(r.useRef)([]),
                    T = Object(r.useRef)(!0),
                    I = Object(r.useRef)(!1),
                    j = Object(r.useCallback)((function(e) {
                        var n = e.ref,
                            t = e.text,
                            r = e.value,
                            u = y.current.findIndex((function(e) {
                                return e.value === r
                            }));
                        return -1 === u && y.current.length > 0 && !1 === T.current ? I.current = !0 : -1 === u && (u = y.current.length, y.current.push({
                            id: h(u),
                            ref: n,
                            text: t,
                            value: r
                        })), u
                    }), []);
                y.current = [], T.current = !0, i((function() {
                    T.current = !1
                })), Object(r.useEffect)((function() {
                    function e(e) {
                        var n = y.current[e];
                        v && n && v(n.value)
                    }
                    return g.on("SELECT_ITEM", e),
                        function() {
                            g.off("SELECT_ITEM", e)
                        }
                }), [v]);
                var x = Object(r.useRef)(null);

                function w(e) {
                    return "function" === typeof x.current ? x.current(e) : x.current === e
                }

                function k(e) {
                    E.current = e, g.emit("HIGHLIGHT_ITEM", e), s && s(e)
                }

                function N(e) {
                    var n = y.current[e];
                    return n ? n.id : null
                }
                x.current = m;
                var C = Object(r.useCallback)((function() {
                        var e = Object(r.useState)((function() {
                                return N(E.current)
                            })),
                            n = e[0],
                            t = e[1];
                        return Object(r.useEffect)((function() {
                            function e(e) {
                                t(N(e))
                            }
                            return g.on("HIGHLIGHT_ITEM", e),
                                function() {
                                    g.off("HIGHLIGHT_ITEM", e)
                                }
                        }), []), n
                    }), []),
                    H = Object(r.useRef)(""),
                    S = Object(r.useRef)(null);
                var M = Object(r.useCallback)((function(e) {
                    var n = e.ref,
                        t = e.text,
                        f = e.value,
                        l = Object(u.a)((function() {
                            return o()
                        })),
                        d = a(),
                        s = j({
                            ref: n,
                            text: t,
                            value: f
                        }),
                        v = Object(r.useRef)(s);
                    i((function() {
                        I.current && (O(), I.current = !1)
                    })), i((function() {
                        v.current !== s && (v.current = s, d()), l.emit("UPDATE_ITEM_INDEX", s)
                    }), [s]), Object(r.useEffect)((function() {
                        function e(e) {
                            if (v.current === e) {
                                var t = n.current;
                                t && function(e) {
                                    var n = c(e);
                                    if (null !== n) {
                                        var t = e.getBoundingClientRect(),
                                            r = n.scrollY + (t.top - n.offsetTop);
                                        r < n.scrollY ? n.setPosition(r) : r + t.height > n.scrollY + n.height && n.setPosition(r + t.height - n.height)
                                    }
                                }(t)
                            }
                        }
                        return g.on("HIGHLIGHT_ITEM", e),
                            function() {
                                g.off("HIGHLIGHT_ITEM", e)
                            }
                    }), []);
                    var m = Object(r.useCallback)((function() {
                        var e = Object(r.useState)(null),
                            n = e[0],
                            t = e[1];
                        return i((function() {
                            function e(e) {
                                t(v.current === e)
                            }

                            function r(e) {
                                var r = E.current === e;
                                n !== r && t(r)
                            }
                            return g.on("HIGHLIGHT_ITEM", e), l.emit("UPDATE_ITEM_INDEX", r),
                                function() {
                                    g.off("HIGHLIGHT_ITEM", e), l.off("UPDATE_ITEM_INDEX", r)
                                }
                        }), []), i((function() {
                            var e = v.current === E.current;
                            n !== e && t(e)
                        })), n
                    }), []);
                    return {
                        id: h(s),
                        index: v.current,
                        highlight: function() {
                            k(v.current)
                        },
                        select: function() {
                            g.emit("SELECT_ITEM", v.current)
                        },
                        selected: w(f),
                        useHighlighted: m
                    }
                }), []);
                return {
                    controllerId: p.current,
                    listId: b.current,
                    items: y,
                    highlightedIndex: E,
                    setHighlightedItem: k,
                    moveHighlightedItem: function(e, n) {
                        var t, r, u = (void 0 === n ? {} : n).contain,
                            o = void 0 === u || u,
                            c = y.current.length,
                            i = E.current;
                        null === i ? i = e >= 0 ? 0 : c - 1 : ((i += e) < 0 || i >= c) && (i = o ? (t = E.current + e, r = c, t >= 0 ? t % r : (t % r + r) % r) : null), k(i)
                    },
                    clearHighlightedItem: function() {
                        k(null)
                    },
                    selectHighlightedItem: function() {
                        null !== E.current && g.emit("SELECT_ITEM", E.current)
                    },
                    useHighlightedItemId: C,
                    highlightItemByString: function(e, n) {
                        var t;
                        void 0 === n && (n = 300), (function(e) {
                            return e.keyCode >= 48 && e.keyCode <= 57
                        }(e) || function(e) {
                            return e.keyCode >= 65 && e.keyCode <= 90
                        }(e) || function(e) {
                            return e.keyCode >= 188 && e.keyCode <= 190
                        }(e)) && ! function(e) {
                            return e.ctrlKey || e.metaKey || e.altKey
                        }(e) && (e.preventDefault(), t = e.key, H.current += t.toLowerCase(), function(e) {
                            clearTimeout(S.current), S.current = setTimeout((function() {
                                H.current = ""
                            }), e)
                        }(n), function(e) {
                            for (var n = 0; n < y.current.length; n++) {
                                var t = y.current[n];
                                if (0 === (t.text || String(t.value)).toLowerCase().indexOf(e)) {
                                    k(n);
                                    break
                                }
                            }
                        }(H.current))
                    },
                    useItem: M
                }
            }
        },
        655: function(e, n, t) {
            "use strict";
            t.d(n, "a", (function() {
                return i
            }));
            var r = t(0),
                u = t(121),
                o = t(13),
                c = t(1);

            function i(e, n) {
                var t = e.role,
                    i = void 0 === t ? "dialog" : t,
                    a = Object(o.o)();
                a = e["aria-label"] ? void 0 : a;
                var f = Object(o.k)().document;
                return Object(r.useEffect)((function() {
                    if (n.current && !n.current.contains(f.activeElement)) {
                        Object(u.c)(n.current);
                        var e = setTimeout((function() {
                            f.activeElement === n.current && (n.current.blur(), Object(u.c)(n.current))
                        }), 500);
                        return function() {
                            clearTimeout(e)
                        }
                    }
                }), [n]), {
                    dialogProps: Object(c.a)({}, Object(o.c)(e, {
                        labelable: !0
                    }), {
                        role: i,
                        tabIndex: -1,
                        "aria-labelledby": e["aria-labelledby"] || a
                    }),
                    titleProps: {
                        id: a
                    }
                }
            }
        },
        663: function(e, n, t) {
            "use strict";
            t.d(n, "a", (function() {
                return a
            })), t.d(n, "b", (function() {
                return f
            }));
            var r = t(121),
                u = t(0),
                o = t(1),
                c = t(17),
                i = t(13);

            function a(e, n) {
                var t = Object(i.c)(e, {
                        labelable: !0
                    }),
                    r = Object(c.i)({
                        onHoverStart: function() {
                            return null == n ? void 0 : n.open(!0)
                        },
                        onHoverEnd: function() {
                            return null == n ? void 0 : n.close()
                        }
                    }).hoverProps;
                return {
                    tooltipProps: Object(i.h)(t, r, {
                        role: "tooltip"
                    })
                }
            }

            function f(e, n, t) {
                var a = e.isDisabled,
                    f = e.trigger,
                    l = Object(i.l)(),
                    d = Object(u.useRef)(!1),
                    s = Object(u.useRef)(!1),
                    v = Object(i.k)().document,
                    m = function() {
                        (d.current || s.current) && n.open(s.current)
                    },
                    p = function(e) {
                        d.current || s.current || n.close(e)
                    };
                Object(u.useEffect)((function() {
                    var e = function(e) {
                        t && t.current && "Escape" === e.key && n.close(!0)
                    };
                    if (n.isOpen) return v.addEventListener("keydown", e, !0),
                        function() {
                            v.removeEventListener("keydown", e, !0)
                        }
                }), [t, n]);
                var b = Object(c.i)({
                        isDisabled: a,
                        onHoverStart: function() {
                            "focus" !== f && ("pointer" === Object(c.b)() ? d.current = !0 : d.current = !1, m())
                        },
                        onHoverEnd: function() {
                            "focus" !== f && (s.current = !1, d.current = !1, p())
                        }
                    }).hoverProps,
                    h = Object(c.m)({
                        onPressStart: function() {
                            s.current = !1, d.current = !1, p(!0)
                        }
                    }).pressProps,
                    g = Object(r.e)({
                        isDisabled: a,
                        onFocus: function() {
                            Object(c.c)() && (s.current = !0, m())
                        },
                        onBlur: function() {
                            s.current = !1, d.current = !1, p(!0)
                        }
                    }, t).focusableProps;
                return {
                    triggerProps: Object(o.a)({
                        "aria-describedby": n.isOpen ? l : void 0
                    }, Object(i.h)(g, b, h)),
                    tooltipProps: {
                        id: l
                    }
                }
            }
        },
        665: function(e, n, t) {
            "use strict";
            var r = t(7),
                u = t(1),
                o = t(0),
                c = t.n(o),
                i = (t(10), "data-focus-lock"),
                a = "data-focus-lock-disabled";

            function f(e, n) {
                return function(e, n) {
                    var t = Object(o.useState)((function() {
                        return {
                            value: e,
                            callback: n,
                            facade: {
                                get current() {
                                    return t.value
                                },
                                set current(e) {
                                    var n = t.value;
                                    n !== e && (t.value = e, t.callback(e, n))
                                }
                            }
                        }
                    }))[0];
                    return t.callback = n, t.facade
                }(n, (function(n) {
                    return e.forEach((function(e) {
                        return function(e, n) {
                            return "function" === typeof e ? e(n) : e && (e.current = n), e
                        }(e, n)
                    }))
                }))
            }
            var l = {
                    width: "1px",
                    height: "0px",
                    padding: 0,
                    overflow: "hidden",
                    position: "fixed",
                    top: "1px",
                    left: "1px"
                },
                d = function(e) {
                    var n = e.children;
                    return o.createElement(o.Fragment, null, o.createElement("div", {
                        key: "guard-first",
                        "data-focus-guard": !0,
                        "data-focus-auto-guard": !0,
                        style: l
                    }), n, n && o.createElement("div", {
                        key: "guard-last",
                        "data-focus-guard": !0,
                        "data-focus-auto-guard": !0,
                        style: l
                    }))
                };
            d.propTypes = {}, d.defaultProps = {
                children: null
            };
            var s = function() {
                return (s = Object.assign || function(e) {
                    for (var n, t = 1, r = arguments.length; t < r; t++)
                        for (var u in n = arguments[t]) Object.prototype.hasOwnProperty.call(n, u) && (e[u] = n[u]);
                    return e
                }).apply(this, arguments)
            };

            function v(e) {
                return e
            }

            function m(e, n) {
                void 0 === n && (n = v);
                var t = [],
                    r = !1;
                return {
                    read: function() {
                        if (r) throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
                        return t.length ? t[t.length - 1] : e
                    },
                    useMedium: function(e) {
                        var u = n(e, r);
                        return t.push(u),
                            function() {
                                t = t.filter((function(e) {
                                    return e !== u
                                }))
                            }
                    },
                    assignSyncMedium: function(e) {
                        for (r = !0; t.length;) {
                            var n = t;
                            t = [], n.forEach(e)
                        }
                        t = {
                            push: function(n) {
                                return e(n)
                            },
                            filter: function() {
                                return t
                            }
                        }
                    },
                    assignMedium: function(e) {
                        r = !0;
                        var n = [];
                        if (t.length) {
                            var u = t;
                            t = [], u.forEach(e), n = t
                        }
                        var o = function() {
                                var t = n;
                                n = [], t.forEach(e)
                            },
                            c = function() {
                                return Promise.resolve().then(o)
                            };
                        c(), t = {
                            push: function(e) {
                                n.push(e), c()
                            },
                            filter: function(e) {
                                return n = n.filter(e), t
                            }
                        }
                    }
                }
            }

            function p(e, n) {
                return void 0 === n && (n = v), m(e, n)
            }
            var b = p({}, (function(e) {
                    return {
                        target: e.target,
                        currentTarget: e.currentTarget
                    }
                })),
                h = p(),
                g = p(),
                O = function(e) {
                    void 0 === e && (e = {});
                    var n = m(null);
                    return n.options = s({
                        async: !0,
                        ssr: !1
                    }, e), n
                }({
                    async: !0
                }),
                E = [],
                y = o.forwardRef((function(e, n) {
                    var t, r = o.useState(),
                        c = r[0],
                        d = r[1],
                        s = o.useRef(),
                        v = o.useRef(!1),
                        m = o.useRef(null),
                        p = e.children,
                        g = e.disabled,
                        y = e.noFocusGuards,
                        T = e.persistentFocus,
                        I = e.crossFrame,
                        j = e.autoFocus,
                        x = (e.allowTextSelection, e.group),
                        w = e.className,
                        k = e.whiteList,
                        N = e.shards,
                        C = void 0 === N ? E : N,
                        H = e.as,
                        S = void 0 === H ? "div" : H,
                        M = e.lockProps,
                        P = void 0 === M ? {} : M,
                        L = e.sideCar,
                        F = e.returnFocus,
                        _ = e.onActivation,
                        D = e.onDeactivation,
                        A = o.useState({})[0],
                        G = o.useCallback((function() {
                            m.current = m.current || document && document.activeElement, s.current && _ && _(s.current), v.current = !0
                        }), [_]),
                        R = o.useCallback((function() {
                            v.current = !1, D && D(s.current)
                        }), [D]),
                        B = o.useCallback((function(e) {
                            var n = m.current;
                            if (Boolean(F) && n && n.focus) {
                                var t = "object" === typeof F ? F : void 0;
                                m.current = null, e ? Promise.resolve().then((function() {
                                    return n.focus(t)
                                })) : n.focus(t)
                            }
                        }), [F]),
                        U = o.useCallback((function(e) {
                            v.current && b.useMedium(e)
                        }), []),
                        Y = h.useMedium,
                        q = o.useCallback((function(e) {
                            s.current !== e && (s.current = e, d(e))
                        }), []);
                    var W = Object(u.a)(((t = {})[a] = g && "disabled", t[i] = x, t), P),
                        K = !0 !== y,
                        V = K && "tail" !== y,
                        X = f([n, q]);
                    return o.createElement(o.Fragment, null, K && [o.createElement("div", {
                        key: "guard-first",
                        "data-focus-guard": !0,
                        tabIndex: g ? -1 : 0,
                        style: l
                    }), o.createElement("div", {
                        key: "guard-nearest",
                        "data-focus-guard": !0,
                        tabIndex: g ? -1 : 1,
                        style: l
                    })], !g && o.createElement(L, {
                        id: A,
                        sideCar: O,
                        observed: c,
                        disabled: g,
                        persistentFocus: T,
                        crossFrame: I,
                        autoFocus: j,
                        whiteList: k,
                        shards: C,
                        onActivation: G,
                        onDeactivation: R,
                        returnFocus: B
                    }), o.createElement(S, Object(u.a)({
                        ref: X
                    }, W, {
                        className: w,
                        onBlur: Y,
                        onFocus: U
                    }), p), V && o.createElement("div", {
                        "data-focus-guard": !0,
                        tabIndex: g ? -1 : 0,
                        style: l
                    }))
                }));
            y.propTypes = {}, y.defaultProps = {
                children: void 0,
                disabled: !1,
                returnFocus: !1,
                noFocusGuards: !1,
                autoFocus: !0,
                persistentFocus: !1,
                crossFrame: !0,
                allowTextSelection: void 0,
                group: void 0,
                className: void 0,
                whiteList: void 0,
                shards: void 0,
                as: "div",
                lockProps: {},
                onActivation: void 0,
                onDeactivation: void 0
            };
            var T = y,
                I = t(31);
            var j = function(e, n) {
                    return function(t) {
                        var r, u = [];

                        function i() {
                            r = e(u.map((function(e) {
                                return e.props
                            }))), n(r)
                        }
                        var a, f, l, d = function(e) {
                            function n() {
                                return e.apply(this, arguments) || this
                            }
                            Object(I.a)(n, e), n.peek = function() {
                                return r
                            };
                            var o = n.prototype;
                            return o.componentDidMount = function() {
                                u.push(this), i()
                            }, o.componentDidUpdate = function() {
                                i()
                            }, o.componentWillUnmount = function() {
                                var e = u.indexOf(this);
                                u.splice(e, 1), i()
                            }, o.render = function() {
                                return c.a.createElement(t, this.props)
                            }, n
                        }(o.PureComponent);
                        return a = d, f = "displayName", l = "SideEffect(" + function(e) {
                            return e.displayName || e.name || "Component"
                        }(t) + ")", f in a ? Object.defineProperty(a, f, {
                            value: l,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : a[f] = l, d
                    }
                },
                x = function(e) {
                    for (var n = Array(e.length), t = 0; t < e.length; ++t) n[t] = e[t];
                    return n
                },
                w = function(e) {
                    return Array.isArray(e) ? e : [e]
                },
                k = function e(n) {
                    return n.parentNode ? e(n.parentNode) : n
                },
                N = function(e) {
                    return w(e).filter(Boolean).reduce((function(e, n) {
                        var t = n.getAttribute(i);
                        return e.push.apply(e, t ? function(e) {
                            for (var n = new Set, t = e.length, r = 0; r < t; r += 1)
                                for (var u = r + 1; u < t; u += 1) {
                                    var o = e[r].compareDocumentPosition(e[u]);
                                    (o & Node.DOCUMENT_POSITION_CONTAINED_BY) > 0 && n.add(u), (o & Node.DOCUMENT_POSITION_CONTAINS) > 0 && n.add(r)
                                }
                            return e.filter((function(e, t) {
                                return !n.has(t)
                            }))
                        }(x(k(n).querySelectorAll('[data-focus-lock="' + t + '"]:not([' + a + '="disabled"])'))) : [n]), e
                    }), [])
                },
                C = function(e) {
                    return Boolean(x(e.querySelectorAll("iframe")).some((function(e) {
                        return e === document.activeElement
                    })))
                },
                H = function(e) {
                    var n = document && document.activeElement;
                    return !(!n || n.dataset && n.dataset.focusGuard) && N(e).reduce((function(e, t) {
                        return e || t.contains(n) || C(t)
                    }), !1)
                },
                S = function(e) {
                    return "INPUT" === e.tagName && "radio" === e.type
                },
                M = function(e, n) {
                    return S(e) && e.name ? function(e, n) {
                        return n.filter(S).filter((function(n) {
                            return n.name === e.name
                        })).filter((function(e) {
                            return e.checked
                        }))[0] || e
                    }(e, n) : e
                },
                P = function(e) {
                    return e[0] && e.length > 1 ? M(e[0], e) : e[0]
                },
                L = function(e, n) {
                    return e.length > 1 ? e.indexOf(M(e[n], e)) : n
                },
                F = function e(n) {
                    return !n || n === document || n && n.nodeType === Node.DOCUMENT_NODE || !((t = window.getComputedStyle(n, null)) && t.getPropertyValue && ("none" === t.getPropertyValue("display") || "hidden" === t.getPropertyValue("visibility"))) && e(n.parentNode && n.parentNode.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? n.parentNode.host : n.parentNode);
                    var t
                },
                _ = function(e) {
                    return Boolean(e && e.dataset && e.dataset.focusGuard)
                },
                D = function(e) {
                    return !_(e)
                },
                A = function(e) {
                    return Boolean(e)
                },
                G = "NEW_FOCUS",
                R = function(e, n, t, r) {
                    var u = e.length,
                        o = e[0],
                        c = e[u - 1],
                        i = _(t);
                    if (!(e.indexOf(t) >= 0)) {
                        var a = n.indexOf(t),
                            f = r ? n.indexOf(r) : a,
                            l = r ? e.indexOf(r) : -1,
                            d = a - f,
                            s = n.indexOf(o),
                            v = n.indexOf(c),
                            m = function(e) {
                                var n = new Set;
                                return e.forEach((function(t) {
                                    return n.add(M(t, e))
                                })), e.filter((function(e) {
                                    return n.has(e)
                                }))
                            }(n),
                            p = m.indexOf(t) - (r ? m.indexOf(r) : a),
                            b = L(e, 0),
                            h = L(e, u - 1);
                        return -1 === a || -1 === l ? G : !d && l >= 0 ? l : a <= s && i && Math.abs(d) > 1 ? h : a >= v && i && Math.abs(d) > 1 ? b : d && Math.abs(p) > 1 ? l : a <= s ? h : a > v ? b : d ? Math.abs(d) > 1 ? l : (u + l + d) % u : void 0
                    }
                },
                B = function(e, n) {
                    var t = e.tabIndex - n.tabIndex,
                        r = e.index - n.index;
                    if (t) {
                        if (!e.tabIndex) return 1;
                        if (!n.tabIndex) return -1
                    }
                    return t || r
                },
                U = function(e, n, t) {
                    return x(e).map((function(e, n) {
                        return {
                            node: e,
                            index: n,
                            tabIndex: t && -1 === e.tabIndex ? (e.dataset || {}).focusGuard ? 0 : -1 : e.tabIndex
                        }
                    })).filter((function(e) {
                        return !n || e.tabIndex >= 0
                    })).sort(B)
                },
                Y = ["button:enabled", "select:enabled", "textarea:enabled", "input:enabled", "a[href]", "area[href]", "summary", "iframe", "object", "embed", "audio[controls]", "video[controls]", "[tabindex]", "[contenteditable]", "[autofocus]"].join(","),
                q = Y + ", [data-focus-guard]",
                W = function(e, n) {
                    return e.reduce((function(e, t) {
                        return e.concat(x(t.querySelectorAll(n ? q : Y)), t.parentNode ? x(t.parentNode.querySelectorAll(Y)).filter((function(e) {
                            return e === t
                        })) : [])
                    }), [])
                },
                K = function(e) {
                    return x(e).filter((function(e) {
                        return F(e)
                    })).filter((function(e) {
                        return function(e) {
                            return !(("INPUT" === e.tagName || "BUTTON" === e.tagName) && ("hidden" === e.type || e.disabled))
                        }(e)
                    }))
                },
                V = function(e, n) {
                    return U(K(W(e, n)), !0, n)
                },
                X = function(e) {
                    return U(K(W(e)), !1)
                },
                J = function(e) {
                    return K(function(e) {
                        var n = e.querySelectorAll("[data-autofocus-inside]");
                        return x(n).map((function(e) {
                            return W([e])
                        })).reduce((function(e, n) {
                            return e.concat(n)
                        }), [])
                    }(e))
                },
                z = function e(n, t) {
                    return void 0 === t && (t = []), t.push(n), n.parentNode && e(n.parentNode, t), t
                },
                Q = function(e, n) {
                    for (var t = z(e), r = z(n), u = 0; u < t.length; u += 1) {
                        var o = t[u];
                        if (r.indexOf(o) >= 0) return o
                    }
                    return !1
                },
                Z = function(e, n, t) {
                    var r = w(e),
                        u = w(n),
                        o = r[0],
                        c = !1;
                    return u.filter(Boolean).forEach((function(e) {
                        c = Q(c || e, e) || c, t.filter(Boolean).forEach((function(e) {
                            var n = Q(o, e);
                            n && (c = !c || n.contains(c) ? n : Q(n, c))
                        }))
                    })), c
                },
                $ = function(e, n) {
                    var t = document && document.activeElement,
                        r = N(e).filter(D),
                        u = Z(t || e, e, r),
                        o = X(r),
                        c = V(r).filter((function(e) {
                            var n = e.node;
                            return D(n)
                        }));
                    if (c[0] || (c = o)[0]) {
                        var i, a = X([u]).map((function(e) {
                                return e.node
                            })),
                            f = function(e, n) {
                                var t = new Map;
                                return n.forEach((function(e) {
                                    return t.set(e.node, e)
                                })), e.map((function(e) {
                                    return t.get(e)
                                })).filter(A)
                            }(a, c),
                            l = f.map((function(e) {
                                return e.node
                            })),
                            d = R(l, a, t, n);
                        if (d === G) {
                            var s = o.map((function(e) {
                                return e.node
                            })).filter((i = function(e) {
                                return e.reduce((function(e, n) {
                                    return e.concat(J(n))
                                }), [])
                            }(r), function(e) {
                                return e.autofocus || e.dataset && !!e.dataset.autofocus || i.indexOf(e) >= 0
                            }));
                            return {
                                node: s && s.length ? P(s) : P(l)
                            }
                        }
                        return void 0 === d ? d : f[d]
                    }
                },
                ee = 0,
                ne = !1,
                te = function(e, n) {
                    var t, r = $(e, n);
                    if (!ne && r) {
                        if (ee > 2) return console.error("FocusLock: focus-fighting detected. Only one focus management system could be active. See https://github.com/theKashey/focus-lock/#focus-fighting"), ne = !0, void setTimeout((function() {
                            ne = !1
                        }), 1);
                        ee++, (t = r.node).focus(), "contentWindow" in t && t.contentWindow && t.contentWindow.focus(), ee--
                    }
                };

            function re(e) {
                var n = window.setImmediate;
                "undefined" !== typeof n ? n(e) : setTimeout(e, 1)
            }
            var ue = function() {
                    return document && document.activeElement === document.body || document && x(document.querySelectorAll("[data-no-focus-lock]")).some((function(e) {
                        return e.contains(document.activeElement)
                    }))
                },
                oe = null,
                ce = null,
                ie = null,
                ae = !1,
                fe = function() {
                    return !0
                };

            function le(e, n, t, r) {
                var u = null,
                    o = e;
                do {
                    var c = r[o];
                    if (c.guard) c.node.dataset.focusAutoGuard && (u = c);
                    else {
                        if (!c.lockItem) break;
                        if (o !== e) return;
                        u = null
                    }
                } while ((o += t) !== n);
                u && (u.node.tabIndex = 0)
            }
            var de = function(e) {
                    return e && "current" in e ? e.current : e
                },
                se = function() {
                    var e, n = !1;
                    if (oe) {
                        var t = oe,
                            r = t.observed,
                            u = t.persistentFocus,
                            o = t.autoFocus,
                            c = t.shards,
                            i = t.crossFrame,
                            a = r || ie && ie.portaledElement,
                            f = document && document.activeElement;
                        if (a) {
                            var l = [a].concat(c.map(de).filter(Boolean));
                            if (f && ! function(e) {
                                    return (oe.whiteList || fe)(e)
                                }(f) || (u || (i ? Boolean(ae) : "meanwhile" === ae) || !ue() || !ce && o) && (!a || H(l) || (e = f, ie && ie.portaledElement === e) || (document && !ce && f && !o ? (f.blur && f.blur(), document.body.focus()) : (n = te(l, ce), ie = {})), ae = !1, ce = document && document.activeElement), document) {
                                var d = document && document.activeElement,
                                    s = function(e) {
                                        var n = N(e).filter(D),
                                            t = Z(e, e, n),
                                            r = V([t], !0),
                                            u = V(n).filter((function(e) {
                                                var n = e.node;
                                                return D(n)
                                            })).map((function(e) {
                                                return e.node
                                            }));
                                        return r.map((function(e) {
                                            var n = e.node;
                                            return {
                                                node: n,
                                                index: e.index,
                                                lockItem: u.indexOf(n) >= 0,
                                                guard: _(n)
                                            }
                                        }))
                                    }(l),
                                    v = s.map((function(e) {
                                        return e.node
                                    })).indexOf(d);
                                v > -1 && (s.filter((function(e) {
                                    var n = e.guard,
                                        t = e.node;
                                    return n && t.dataset.focusAutoGuard
                                })).forEach((function(e) {
                                    return e.node.removeAttribute("tabIndex")
                                })), le(v, s.length, 1, s), le(v, -1, -1, s))
                            }
                        }
                    }
                    return n
                },
                ve = function(e) {
                    se() && e && (e.stopPropagation(), e.preventDefault())
                },
                me = function() {
                    return re(se)
                },
                pe = function(e) {
                    var n = e.target,
                        t = e.currentTarget;
                    t.contains(n) || (ie = {
                        observerNode: t,
                        portaledElement: n
                    })
                },
                be = function() {
                    ae = "just", setTimeout((function() {
                        ae = "meanwhile"
                    }), 0)
                };
            b.assignSyncMedium(pe), h.assignMedium(me), g.assignMedium((function(e) {
                return e({
                    moveFocusInside: te,
                    focusInside: H
                })
            }));
            var he = j((function(e) {
                    return e.filter((function(e) {
                        return !e.disabled
                    }))
                }), (function(e) {
                    var n = e.slice(-1)[0];
                    n && !oe && (document.addEventListener("focusin", ve, !0), document.addEventListener("focusout", me), window.addEventListener("blur", be));
                    var t = oe,
                        r = t && n && n.id === t.id;
                    oe = n, t && !r && (t.onDeactivation(), e.filter((function(e) {
                        return e.id === t.id
                    })).length || t.returnFocus(!n)), n ? (ce = null, r && t.observed === n.observed || n.onActivation(), se(), re(se)) : (document.removeEventListener("focusin", ve, !0), document.removeEventListener("focusout", me), window.removeEventListener("blur", be), ce = null)
                }))((function() {
                    return null
                })),
                ge = o.forwardRef((function(e, n) {
                    return o.createElement(T, Object(u.a)({
                        sideCar: he,
                        ref: n
                    }, e))
                })),
                Oe = T.propTypes || {};
            Oe.sideCar, Object(r.a)(Oe, ["sideCar"]);
            ge.propTypes = {};
            var Ee = ge;
            n.a = Ee
        },
        667: function(e, n, t) {
            "use strict";
            t.d(n, "a", (function() {
                return d
            }));
            var r = t(29),
                u = t(186);
            var o = t(0),
                c = {},
                i = 0,
                a = !1,
                f = null,
                l = null;

            function d(e) {
                void 0 === e && (e = {});
                var n = e.delay,
                    t = void 0 === n ? 1500 : n,
                    d = function(e) {
                        var n = Object(u.a)(e.isOpen, e.defaultOpen || !1, e.onOpenChange),
                            t = Object(r.a)(n, 2),
                            o = t[0],
                            c = t[1];
                        return {
                            isOpen: o,
                            open: function() {
                                c(!0)
                            },
                            close: function() {
                                c(!1)
                            },
                            toggle: function() {
                                c(!o)
                            }
                        }
                    }(e),
                    s = d.isOpen,
                    v = d.open,
                    m = d.close,
                    p = Object(o.useMemo)((function() {
                        return "" + ++i
                    }), []),
                    b = Object(o.useRef)(),
                    h = function() {
                        c[p] = E
                    },
                    g = function() {
                        for (var e in c) e !== p && (c[e](!0), delete c[e])
                    },
                    O = function() {
                        clearTimeout(b.current), b.current = null, g(), h(), a = !0, v(), f && (clearTimeout(f), f = null), l && (clearTimeout(l), l = null)
                    },
                    E = function(e) {
                        e ? (clearTimeout(b.current), b.current = null, m()) : b.current || (b.current = setTimeout((function() {
                            b.current = null, m()
                        }), 500)), f && (clearTimeout(f), f = null), a && (l && clearTimeout(l), l = setTimeout((function() {
                            delete c[p], l = null, a = !1
                        }), 500))
                    };
                return Object(o.useEffect)((function() {
                    return function() {
                        clearTimeout(b.current), c[p] && delete c[p]
                    }
                }), [p]), {
                    isOpen: s,
                    open: function(e) {
                        !e && t > 0 && !b.current ? (g(), h(), s || f || a ? s || O() : f = setTimeout((function() {
                            f = null, a = !0, O()
                        }), t)) : O()
                    },
                    close: E
                }
            }
        }
    }
]);