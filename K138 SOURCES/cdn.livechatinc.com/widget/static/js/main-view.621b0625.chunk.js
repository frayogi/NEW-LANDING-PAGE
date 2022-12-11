(this["webpackJsonp@livechat/chat-widget"] = this["webpackJsonp@livechat/chat-widget"] || []).push([
    [4], {
        670: function(e, t, n) {
            "use strict";
            n.r(t);
            var r = n(3),
                i = n(0),
                a = n(28),
                o = n(25),
                c = n(6),
                l = n(9),
                s = n(1),
                u = n(41),
                d = n(2),
                m = n(5),
                b = n(474),
                f = n(90),
                p = n(127),
                g = n(82),
                h = n(18),
                v = n(217),
                j = n(7),
                O = n(14),
                x = n(473),
                y = function(e, t) {
                    var n = new Date(e);
                    return n.toLocaleDateString() === (new Date).toLocaleDateString() ? t.today(n) : function(e) {
                        var t = new Date;
                        return t.setDate(t.getDate() - 1), e.toLocaleDateString() === t.toLocaleDateString()
                    }(n) ? t.yesterday(n) : n.toLocaleDateString([], {
                        year: "numeric",
                        month: "2-digit",
                        day: "2-digit"
                    })
                },
                w = function() {
                    return "IntersectionObserver" in window && "IntersectionObserverEntry" in window
                },
                E = function(e, t, n) {
                    var r = Object(d.Cb)(t).sort((function(e, t) {
                            return e.timestamp - t.timestamp
                        })),
                        i = Object(d.q)((function(t) {
                            return t.node === e
                        }), r);
                    if (i > -1) return {
                        currentTimestamp: r[i].timestamp,
                        previousTimestamp: i > 0 ? r[i - 1].timestamp : n
                    }
                },
                k = function(e, t) {
                    var n = i.useRef({
                            beginingOfTime: t,
                            currentTimestamp: 0,
                            subscribers: [],
                            dividers: {}
                        }),
                        r = function(e) {
                            var t = {
                                timestamp: e,
                                direction: e > n.current.currentTimestamp ? "down" : "up"
                            };
                            n.current.currentTimestamp = e, n.current.subscribers.forEach((function(e) {
                                return e(t)
                            }))
                        },
                        a = function(e) {
                            var t = e.rootRef,
                                n = e.rootMargin,
                                r = e.threshold,
                                a = e.intersectionHandler;
                            if (w()) {
                                var c = i.useRef(null),
                                    l = i.useRef([]),
                                    s = Object(o.m)(a);
                                return i.useEffect((function() {
                                    return c.current = new IntersectionObserver((function(e, t) {
                                            s.current && s.current(e, t)
                                        }), {
                                            root: t.current,
                                            rootMargin: n,
                                            threshold: r
                                        }), l.current.forEach((function(e) {
                                            return c.current.observe(e)
                                        })), l.current = [],
                                        function() {
                                            return c.current.disconnect()
                                        }
                                }), [n, r, t, s]), Object(o.d)((function() {
                                    return {
                                        add: function(e) {
                                            c.current ? c.current.observe(e) : l.current.push(e)
                                        },
                                        remove: function(e) {
                                            c.current ? c.current.unobserve(e) : l.current = l.current.filter((function(t) {
                                                return t !== e
                                            }))
                                        }
                                    }
                                }))
                            }
                        }({
                            rootRef: e,
                            intersectionHandler: function(e) {
                                var t = function(e, t, n) {
                                    var r = e.filter((function(e) {
                                        return e.isIntersecting
                                    })).sort((function(e, t) {
                                        return e.boundingClientRect.top - t.boundingClientRect.top
                                    }))[0];
                                    if (r) {
                                        var i = E(r.target, t, n);
                                        return i && i.previousTimestamp
                                    }
                                    var a = e.filter((function(e) {
                                        return e.boundingClientRect.top <= e.rootBounds.top
                                    })).sort((function(e, t) {
                                        return e.boundingClientRect.top - t.boundingClientRect.top
                                    })).reverse()[0];
                                    if (a) {
                                        var o = E(a.target, t, n);
                                        return o && o.currentTimestamp
                                    }
                                }(e, n.current.dividers, n.current.beginingOfTime);
                                t && r(t)
                            },
                            threshold: .2
                        });
                    return i.useEffect((function() {
                        var e = Object(d.Cb)(n.current.dividers).map((function(e) {
                                return e.timestamp
                            })),
                            t = Math.max.apply(Math, e.concat([n.current.beginingOfTime]));
                        n.current.currentTimestamp = t, n.current.subscribers.forEach((function(e) {
                            return e({
                                timestamp: t,
                                direction: "up"
                            })
                        }))
                    }), []), Object(o.d)((function() {
                        return {
                            add: function(e) {
                                n.current.dividers[e.timestamp] = e, a && a.add(e.node)
                            },
                            remove: function(e) {
                                a && a.remove(e.node), delete n.current.dividers[e.timestamp]
                            },
                            subscribe: function(e) {
                                n.current.subscribers.push(e)
                            },
                            unsubscribe: function(e) {
                                n.current.subscribers = n.current.subscribers.filter((function(t) {
                                    return t !== e
                                }))
                            },
                            setBeginingOfTime: function(e) {
                                n.current.beginingOfTime = e
                            },
                            currentTimestamp: function() {
                                return n.current.currentTimestamp
                            },
                            setToNewestTimestamp: function() {
                                var e = Object.keys(n.current.dividers).map(Number).sort((function(e, t) {
                                    return t - e
                                }))[0];
                                r(e)
                            }
                        }
                    }))
                },
                z = i.createContext(null),
                S = function() {
                    return i.useContext(z)
                },
                C = function(e) {
                    var t = e.children,
                        n = e.rootRef,
                        r = e.beginingOfTime,
                        a = e.isOnBottomSource,
                        o = k(n, r);
                    return i.useEffect((function() {
                        o.setBeginingOfTime(r)
                    })), i.useEffect((function() {
                        return a.subscribe((function(e) {
                            e && o.setToNewestTimestamp()
                        }))
                    }), [a, o]), i.createElement(z.Provider, {
                        value: o
                    }, t)
                };
            var T = Object(m.z)("span", {
                displayName: "DividerLabel",
                target: "eceo2x80"
            })({
                name: "1rpc86p",
                styles: "padding:4px 8px;font-size:12px;position:relative;padding:0 8px;&:before,&:after{content:'';width:50vw;height:0;border-top:1px solid;border-top-color:inherit;position:absolute;top:50%;}&:before{right:100%;}&:after{left:100%;}"
            });

            function _() {
                var e = Object(O.a)(["\n\t&-enter ", ", &-exit ", " {\n\t\tposition: relative;\n\t}\n\n\t&-enter ", " {\n\t\ttop: ", ";\n\t}\n\t&-enter-active ", " {\n\t\ttop: 0;\n\t\ttransition: top ", "ms ease-out;\n\t}\n\n\t&-exit {\n\t\topacity: 1;\n\t}\n\t&-exit-active {\n\t\topacity: 0;\n\t\ttransition: opacity ", "ms ease-out;\n\t}\n\n\t&-exit ", " {\n\t\ttop: 0;\n\t\tposition: relative;\n\t}\n\t&-exit-active ", " {\n\t\ttop: ", ";\n\t\ttransition: top ", "ms ease-out;\n\t}\n"]);
                return _ = function() {
                    return e
                }, e
            }
            var I = {
                    name: "sx4ymz",
                    styles: "opacity:0;pointer-events:none"
                },
                R = Object(m.z)(T, {
                    target: "e1g4em791"
                })("color:", (function(e) {
                    return e.theme.colors.primaryTextColor
                }), ";overflow:hidden;border:1px solid ", (function(e) {
                    return e.theme.colors.divider
                }), ";background-color:", (function(e) {
                    return e.theme.colors.surface
                }), ";border-radius:", (function(e) {
                    return e.theme.borderRadius.md
                }), ";padding:2px 6px;transition:opacity 150ms linear;", (function(e) {
                    return !e.visible && I
                }), ";"),
                A = Object(m.z)("span", {
                    target: "e1g4em790"
                })(""),
                F = 200;
            var M = w() ? function(e) {
                    var t = e.isUserScrollingSource,
                        n = Object(j.a)(e, ["isUserScrollingSource"]),
                        c = Object(o.w)(t),
                        l = S(),
                        u = i.useState({
                            direction: "up",
                            timestamp: l.currentTimestamp()
                        }),
                        d = u[0],
                        m = u[1];
                    return i.useEffect((function() {
                        l.subscribe(m);
                        var e = l.currentTimestamp();
                        return e !== d.timestamp && m({
                                direction: "up",
                                timestamp: e
                            }),
                            function() {
                                return l.unsubscribe(m)
                            }
                    }), [l]), d.timestamp ? i.createElement(a.a, null, (function(e) {
                        var t = y(d.timestamp, {
                            today: function() {
                                return e("today")
                            },
                            yesterday: function() {
                                return e("yesterday")
                            }
                        });
                        return i.createElement(r.a, null, (function(e) {
                            var r = function(e, t) {
                                return e(_(), String(A), String(A), String(A), "up" === t ? "-2em" : "2em", String(A), F, F, String(A), String(A), "up" === t ? "2em" : "-2em", F)
                            }(e.css, d.direction);
                            return i.createElement(b.a, {
                                component: null,
                                childFactory: function(e) {
                                    return i.cloneElement(e, {
                                        classNames: r
                                    })
                                }
                            }, i.createElement(x.a, {
                                key: t,
                                classNames: r,
                                timeout: F
                            }, i.createElement(R, Object(s.a)({}, n, {
                                visible: c
                            }), i.createElement(A, null, t))))
                        }))
                    })) : null
                } : function() {
                    return null
                },
                P = function(e) {
                    var t = S();
                    i.useEffect((function() {
                        var n = {
                            timestamp: e.timestamp,
                            node: e.nodeRef.current
                        };
                        return t.add(n),
                            function() {
                                t.remove(n)
                            }
                    }), [])
                };
            var H = Object(m.z)("div", {
                    target: "ehmqpie0"
                })({
                    name: "1wai6wj",
                    styles: "height:20px;margin:16px -0.5em;text-align:center;overflow:hidden"
                }),
                q = function(e) {
                    var t = e.timestamp,
                        n = i.useRef(null);
                    return P({
                        timestamp: t,
                        nodeRef: n
                    }), i.createElement(a.a, null, (function(e) {
                        return i.createElement(H, {
                            ref: n
                        }, i.createElement(T, null, y(t, {
                            today: function(e) {
                                return e.toLocaleTimeString([], {
                                    hour: "2-digit",
                                    minute: "2-digit"
                                })
                            },
                            yesterday: function() {
                                return e("yesterday")
                            }
                        })))
                    }))
                },
                B = n(32);
            var D = Object(m.z)("div", {
                    displayName: "NewMessageHorizontalDivider",
                    target: "eacid5n1"
                })({
                    name: "gbe43y",
                    styles: "height:27px;margin:16px -0.5em;text-align:center;overflow:hidden"
                }),
                L = Object(m.z)(B.G, {
                    target: "eacid5n0"
                })({
                    name: "1c0l2b2",
                    styles: "display:inline-flex;padding:2px 12px;font-weight:normal;box-shadow:none;height:auto;&:before,&:after{border-top:0;}"
                }),
                V = function(e) {
                    var t = e.unseenCount,
                        n = e.setScrollTargetNode,
                        r = i.useRef(null),
                        c = i.useState(!0),
                        l = c[0],
                        s = c[1];
                    return Object(o.o)((function() {
                        r.current && n(r.current)
                    })), i.useEffect((function() {
                        var e = setTimeout((function() {
                            return s(!1)
                        }), 625);
                        return function() {
                            return clearTimeout(e)
                        }
                    }), []), i.createElement(a.a, null, (function(e) {
                        return i.createElement(D, {
                            ref: r
                        }, i.createElement(L, {
                            animated: l,
                            minScale: .9,
                            maxScale: 1.05
                        }, e(1 === t ? "new_message" : "new_messages")))
                    }))
                },
                U = n(15),
                N = Object(m.z)("div", {
                    displayName: "Divider",
                    target: "evqzb400"
                })("border-top:", (function(e) {
                    return "1px solid " + e.theme.colors.lighterOppositeTitleBarColor
                }), ";margin:0 1em;margin-bottom:-1px;z-index:10;position:relative;"),
                W = Object(m.z)("div", {
                    target: "ekfrplk0"
                })((function(e) {
                    return e.theme.typography.basic
                }), " color:", (function(e) {
                    return e.theme.colors.textPrimary
                }), ";line-height:1.2;color:inherit;display:flex;width:100%;flex-direction:", (function(e) {
                    return e.row ? "row" : "column"
                }), ";"),
                G = n(655),
                Y = n(121),
                K = n(256),
                Q = n(13),
                X = n(51),
                J = n.n(X),
                Z = n(79),
                $ = n(650),
                ee = function(e, t) {
                    return t.getElementById(e)
                },
                te = function(e) {
                    var t = e.portalId,
                        n = void 0 === t ? $.a : t,
                        r = e.children,
                        a = Object(Z.useFrame)().document,
                        c = i.useState((function() {
                            return ee(n, a)
                        })),
                        l = c[0],
                        s = c[1];
                    return Object(o.o)((function() {
                        l || s(ee(n, a))
                    })), l ? X.createPortal(r, l) : null
                },
                ne = n(17);

            function re() {
                var e = Object(O.a)(["\n\t&-enter,\n\t&-appear {\n\t\tbackground-color: rgba(0, 0, 0, 0);\n\t}\n\n\t&-enter-active,\n\t&-appear-active,\n\t&-enter-done,\n\t&-appear-done {\n\t\tbackground-color: ", ";\n\t\ttransition: background-color ", "ms ", ";\n\t}\n\n\t&-exit {\n\t\tbackground-color: ", ";\n\t}\n\n\t&-exit-active,\n\t&-exit-done {\n\t\tbackground-color: rgba(0, 0, 0, 0);\n\t\ttransition: background-color ", "ms ", ";\n\t\ttransition-delay: ", "ms;\n\t}\n"]);
                return re = function() {
                    return e
                }, e
            }
            var ie = 300,
                ae = function(e) {
                    return {
                        enter: ie,
                        exit: e + ie
                    }
                },
                oe = function(e) {
                    return "light" === e ? "rgba(0, 0, 0, 0.5)" : "rgba(0, 0, 0, 0.7)"
                },
                ce = function(e, t, n) {
                    return e(re(), oe(n.variant), ie, n.transitions.easings.smooth, oe(n.variant), ie, n.transitions.easings.smooth, t)
                },
                le = function(e) {
                    var t = e.zIndex;
                    return Object(r.c)("z-index:", t, ";position:absolute;top:0;left:0;right:0;bottom:0;border-radius:inherit;")
                },
                se = function(e) {
                    var t = e.zIndex,
                        n = Object(j.a)(e, ["zIndex"]),
                        a = i.useRef(null);
                    return Object(o.g)("touchmove", a), Object(r.d)("div", Object(s.a)({
                        ref: a,
                        css: le({
                            zIndex: t
                        })
                    }, n))
                },
                ue = function(e) {
                    var t = e.shown,
                        n = e.onPress,
                        i = e.exitDelay,
                        a = void 0 === i ? 100 : i,
                        o = e.zIndex,
                        c = void 0 === o ? 999 : o,
                        l = Object(ne.m)({
                            onPress: n
                        }).pressProps;
                    return Object(r.d)(r.a, null, (function(e) {
                        var n = e.css,
                            i = e.theme;
                        return Object(r.d)(b.a, {
                            appear: !0,
                            component: null
                        }, t && Object(r.d)(x.a, {
                            classNames: ce(n, a, i),
                            timeout: ae(a)
                        }, Object(r.d)(se, Object(s.a)({
                            zIndex: c
                        }, l))))
                    }))
                },
                de = i.memo(ue),
                me = n(107),
                be = n(160);
            var fe = {
                    name: "jubs0u",
                    styles: "margin:0;background:transparent"
                },
                pe = function(e) {
                    return Object(r.c)("position:absolute;z-index:1500;width:calc(100% - 2rem);max-width:290px;top:1em;left:50%;color:", e.colors.primaryTextColor, ";background:", e.colors.surface, ";box-shadow:", e.boxShadow.lg, ";padding:", 1 * e.spaceBase, "px;border-radius:", e.borderRadius.md, ";")
                },
                ge = Object(m.z)("div", {
                    target: "e1yhh5l71"
                })({
                    name: "4hray5",
                    styles: "display:flex;flex-direction:row-reverse"
                }),
                he = Object(m.z)("div", {
                    target: "e1yhh5l70"
                })("padding:", (function(e) {
                    return 1 * e.theme.spaceBase
                }), "px;padding-top:0;"),
                ve = i.forwardRef((function(e, t) {
                    var n = e.onClose,
                        i = void 0 === n ? d.W : n,
                        a = e.children,
                        o = e["aria-label"],
                        c = e["aria-labelledby"],
                        l = e.isPreview,
                        u = Object(j.a)(e, ["onClose", "children", "aria-label", "aria-labelledby", "isPreview"]);
                    Object(K.d)({
                        isDisabled: l
                    });
                    var m = Object(K.c)({
                            isOpen: !0,
                            isDismissable: !0,
                            onClose: i
                        }, t).overlayProps,
                        b = Object(K.b)().modalProps,
                        f = Object(G.a)({
                            "aria-label": o,
                            "aria-labelledby": c
                        }, t).dialogProps;
                    return Object(r.d)(Y.a, {
                        contain: !0,
                        autoFocus: !0,
                        restoreFocus: !0
                    }, Object(r.d)("div", Object(s.a)({}, Object(Q.h)(u, m, b, f), {
                        ref: t,
                        css: pe
                    }), Object(r.d)(ge, null, Object(r.d)(B.n, {
                        css: fe,
                        onPress: i,
                        "aria-label": "Close modal"
                    }, Object(r.d)(B.e, {
                        "aria-hidden": !0
                    }))), Object(r.d)(he, null, a)))
                })),
                je = function(e) {
                    var t = e.onClose,
                        n = void 0 === t ? d.W : t,
                        a = e.shown,
                        o = e.children,
                        c = Object(j.a)(e, ["onClose", "shown", "children"]),
                        l = i.useRef(null),
                        u = Object(me.b)(),
                        m = Object(be.b)();
                    return i.useEffect((function() {
                        return m.setModalOpen(a)
                    }), [a, m]), Object(r.d)(te, null, Object(r.d)(de, {
                        shown: a,
                        onPress: n,
                        exitDelay: 25
                    }), Object(r.d)(b.a, {
                        component: null
                    }, a && Object(r.d)(v.b, {
                        nodeRef: l
                    }, Object(r.d)(ve, Object(s.a)({
                        onClose: n,
                        ref: l,
                        isPreview: u
                    }, c), o))))
                },
                Oe = n(639),
                xe = n(656),
                ye = Object(m.z)("form", {
                    displayName: "Form",
                    section: !0,
                    target: "e1nyj5rz0"
                })(""),
                we = n(638),
                Ee = n(637),
                ke = n(178);
            var ze = Object(m.z)("div", {
                    target: "e1n7ru1l0"
                })({
                    name: "1azakc",
                    styles: "text-align:center"
                }),
                Se = [Ee.e],
                Ce = function(e) {
                    var t = e.id,
                        n = e.children,
                        r = e.initialValues,
                        a = e.submitLabel,
                        c = e.validate,
                        l = e.onSubmit,
                        s = e.disabled,
                        u = "form_" + t;
                    return Object(o.o)((function() {
                        Object(ke.c)() && function(e) {
                            var t = Object(xe.b)(e)();
                            if (t.length) {
                                var n = t[0],
                                    r = n.tagName;
                                ("INPUT" === r && !Object(d.E)(n.type, ["checkbox", "radio"]) || "TEXTAREA" === r) && Object(Q.d)(n)
                            }
                        }(u)
                    })), i.createElement(Oe.a, {
                        decorators: Se,
                        initialValues: r,
                        onSubmit: l,
                        subscription: Ee.a,
                        validate: c
                    }, (function(e) {
                        var t = e.handleSubmit;
                        return i.createElement(ye, {
                            name: u,
                            onSubmit: t
                        }, n, i.createElement(we.j, null), i.createElement(ze, null, i.createElement(Oe.b, {
                            subscription: Ee.b
                        }, (function(e) {
                            var t = e.submitting;
                            return i.createElement(we.i, {
                                submitting: t,
                                label: a,
                                disabled: s
                            })
                        }))))
                    }))
                },
                Te = n(640),
                _e = n(642),
                Ie = function(e) {
                    var t = i.useRef(null),
                        n = e.label,
                        r = e.required,
                        a = Object(Ee.g)(t, Object(s.a)({}, e, {
                            inputElementType: "textarea"
                        })),
                        o = a.inputProps,
                        c = a.labelProps,
                        l = a.errorMessageProps;
                    return i.createElement(Te.a, null, n && i.createElement(_e.a, Object(s.a)({
                        showRequiredMark: r
                    }, c), n), i.createElement(we.h, Object(s.a)({}, o, {
                        errorMessageProps: l,
                        ref: t
                    })))
                };
            var Re = Object(m.z)("div", {
                    target: "e1lbo1s41"
                })({
                    name: "175oc9c",
                    styles: "display:flex;justify-content:center;flex-shrink:0"
                }),
                Ae = Object(m.z)("div", {
                    displayName: "IconLabel",
                    target: "e1lbo1s40"
                })("display:flex;justify-content:center;align-items:center;", (function(e) {
                    var t = e.size,
                        n = e.theme;
                    return {
                        width: t,
                        height: t,
                        borderRadius: n.borderRadius.round,
                        backgroundColor: n.colors.surfaceDecorative
                    }
                }), ";"),
                Fe = function(e) {
                    var t = e.size,
                        n = void 0 === t ? "64px" : t,
                        r = e.children,
                        a = Object(j.a)(e, ["size", "children"]);
                    return i.createElement(Re, null, i.createElement(Ae, Object(s.a)({
                        size: n
                    }, a), r))
                },
                Me = n(663),
                Pe = n(667);
            var He = 10,
                qe = Object(m.z)("div", {
                    displayName: "Tooltip",
                    target: "ezqijrk2"
                })("display:inline-block;background-color:", (function(e) {
                    var t = e.theme,
                        n = e.kind;
                    return t.colors[n + "Surface"]
                }), ";color:", (function(e) {
                    var t = e.theme;
                    return "hint" === e.kind ? t.colors.grayscale[0] : t.colors.primaryTextColor
                }), ";padding:1em;position:fixed;border-radius:", (function(e) {
                    return e.theme.borderRadius.lg
                }), ";z-index:9;font-size:0.8em;font-weight:normal;margin-top:0.5em;margin-bottom:0.5em;box-shadow:", (function(e) {
                    return e.theme.boxShadow.floating
                }), ";transition:", (function(e) {
                    var t = e.theme;
                    return "opacity 200ms " + t.transitions.easings.swift + ", transform 300ms " + t.transitions.easings.swift
                }), ";", (function(e) {
                    var t = e.position;
                    return {
                        left: t.left ? t.left - He + "px" : "auto",
                        right: t.right ? t.right - He + "px" : "auto",
                        top: t.top ? t.top + "px" : "auto",
                        bottom: t.bottom ? t.bottom : "auto",
                        marginRight: t.right ? 0 : "10px",
                        marginLeft: t.left ? 0 : "10px"
                    }
                }), ";"),
                Be = Object(m.z)("svg", {
                    displayName: "TooltipArrow",
                    target: "ezqijrk1"
                })("position:absolute;fill:", (function(e) {
                    var t = e.theme,
                        n = e.kind;
                    return t.colors[n + "Surface"]
                }), ";margin-top:-1.5em;margin-bottom:-1.5em;", (function(e) {
                    var t = e.position,
                        n = e.horizontalFactor,
                        r = e.placement,
                        i = void 0 === r ? "top" : r,
                        a = e.theme;
                    return Object(s.a)({
                        left: t.left ? n - He + ("modern" === a.name ? 3 : -1) + "px" : "auto",
                        right: t.right ? n - He + ("modern" === a.name ? 3 : -1) + "px" : "auto"
                    }, "bottom" === i ? {
                        top: 0
                    } : {
                        bottom: 0,
                        transform: "rotate(180deg)"
                    })
                }), ";"),
                De = Object(m.z)("div", {
                    target: "ezqijrk0"
                })({
                    name: "bjn8wh",
                    styles: "position:relative"
                }),
                Le = function(e, t, n) {
                    var r = e.getBoundingClientRect(),
                        i = r.left,
                        a = r.right,
                        o = r.bottom,
                        c = r.top,
                        l = n.window,
                        u = l.innerWidth,
                        d = l.innerHeight,
                        m = l.pageXOffset,
                        b = l.pageYOffset,
                        f = "top" === t ? {
                            bottom: d - (c + b)
                        } : {
                            top: o + b
                        },
                        p = i + m > u / 2 ? {
                            right: u - (a + m)
                        } : {
                            left: i + m
                        };
                    return Object(s.a)({}, f, p)
                },
                Ve = {
                    position: {
                        top: 0,
                        left: 0
                    },
                    targetWidth: 0
                };
            var Ue = function(e) {
                var t = e.children,
                    n = e.description,
                    r = e.allowTouch,
                    a = e.controlsRef,
                    c = e.animated,
                    l = void 0 !== c && c,
                    u = e.placement,
                    m = void 0 === u ? "bottom" : u,
                    b = e.trigger,
                    f = void 0 === b ? "hover" : b,
                    p = e.onOpenChange,
                    g = void 0 === p ? d.W : p,
                    h = e.kind,
                    v = void 0 === h ? "hint" : h,
                    O = Object(j.a)(e, ["children", "description", "allowTouch", "controlsRef", "animated", "placement", "trigger", "onOpenChange", "kind"]),
                    x = i.useRef(null);
                Object(ne.k)();
                var y = i.useRef(null),
                    w = i.useRef(!1),
                    E = i.useState(Ve),
                    k = E[0],
                    z = E[1],
                    S = i.useState(!1),
                    C = S[0],
                    T = S[1],
                    _ = Object(Z.useFrame)(),
                    I = Object(Pe.a)(Object(s.a)({
                        onOpenChange: function(e) {
                            l && requestAnimationFrame((function() {
                                return T(e)
                            }));
                            var t = function() {
                                g(e, w.current), w.current = !1
                            };
                            e ? (z({
                                position: Le(y.current, m, _),
                                targetWidth: y.current.offsetWidth
                            }), requestAnimationFrame(t)) : t()
                        }
                    }, O));
                (null == a ? void 0 : a.current) && (a.current = {
                    open: function() {
                        w.current = !0, I.open(!0)
                    },
                    close: function() {
                        w.current = !0, I.close(!0)
                    }
                });
                var R, A = Object(Me.b)(O, I, y),
                    F = A.tooltipProps,
                    M = A.triggerProps,
                    P = Object(Me.a)(F, I).tooltipProps,
                    H = Object(ne.m)({
                        onPress: function() {
                            I.open(!0)
                        }
                    }).pressProps;
                return Object(o.n)(x, (function() {
                    I.close(!0)
                }), _), O.isDisabled && I.isOpen && I.close(), i.createElement(Y.b, Object(s.a)({}, "press" === f ? H : r ? Object(Q.h)(M, H) : M, {
                    ref: y
                }), t, I.isOpen && i.createElement(te, {
                    portalId: $.b
                }, i.createElement(qe, Object(s.a)({
                    ref: x,
                    position: k.position,
                    kind: v
                }, "hover" === f && P, l && {
                    style: {
                        opacity: (R = C) ? 1 : 0,
                        transform: "translateY(" + (R ? 0 : 8) + "px)"
                    }
                }), i.createElement(De, null, i.createElement(Be, {
                    placement: m,
                    kind: v,
                    horizontalFactor: k.targetWidth / 2,
                    height: "10",
                    position: k.position,
                    width: "16"
                }, i.createElement("polygon", {
                    points: "0,10 16,10 8,0"
                })), n))))
            };
            var Ne = "add_rate_comment_label",
                We = {
                    name: "1azakc",
                    styles: "text-align:center"
                },
                Ge = {
                    name: "870gjp",
                    styles: "font-size:inherit"
                },
                Ye = {
                    name: "l3iapi",
                    styles: "margin-right:6px;margin-left:0"
                },
                Ke = Object(m.z)(B.n, {
                    target: "e1mt5al70"
                })((function(e) {
                    var t = e.theme;
                    return t.isRtl && "smooth" === t.name && Ye
                }), ";"),
                Qe = Object(a.c)((function(e, t) {
                    var n = t.chatId,
                        r = e.getApplicationState("isPreview"),
                        i = r ? function() {
                            return Promise.resolve()
                        } : function(t) {
                            var r = t.rate,
                                i = t.comment,
                                a = {};
                            return void 0 !== r && (a.rate = r), void 0 !== i && (a.rateComment = i), e.requestUpdateChat(n, {
                                properties: a
                            })
                        };
                    return function(e) {
                        var t = e.getChat(n),
                            a = t.active,
                            o = t.properties,
                            c = o.ended;
                        return {
                            chatRate: o.rate,
                            disabled: !r && (!c && !a),
                            mobile: e.getApplicationState("mobile"),
                            rateChat: i,
                            localize: e.localize,
                            isPreview: r
                        }
                    }
                }))((function(e) {
                    var t = e.chatRate,
                        n = e.disabled,
                        a = e.mobile,
                        o = e.rateChat,
                        c = e.localize,
                        l = e.isPreview,
                        s = i.useState(!1),
                        u = s[0],
                        d = s[1],
                        b = i.useState(t),
                        f = b[0],
                        p = b[1],
                        g = i.useCallback((function(e) {
                            return function() {
                                var n = f === e,
                                    r = n ? null : e;
                                o({
                                    rate: r
                                }).catch((function() {
                                    return p(t)
                                })), p(r), d(!n)
                            }
                        }), [f, t, o]);
                    i.useEffect((function() {
                        p(t)
                    }), [t]);
                    var h = function(e) {
                            return {
                                disabled: n,
                                active: t === e,
                                onPress: g(e),
                                "aria-label": c(t === e ? "cancel_" + e + "_rating" : "rate_" + e + "_and_open_modal")
                            }
                        },
                        v = c("good" === t ? "rate_me_cancel_tooltip" : "rate_me_good_tooltip"),
                        j = c("bad" === t ? "rate_me_cancel_tooltip" : "rate_me_bad_tooltip");
                    return Object(r.d)(i.Fragment, null, Object(r.d)(Ue, {
                        isDisabled: n,
                        description: v
                    }, Object(r.d)(Ke, h("good"), Object(r.d)(B.D, {
                        css: Ge,
                        "aria-hidden": !0
                    }))), Object(r.d)(Ue, {
                        isDisabled: n,
                        description: j
                    }, Object(r.d)(Ke, h("bad"), Object(r.d)(B.C, {
                        css: Ge,
                        "aria-hidden": !0
                    }))), Object(r.d)(je, {
                        shown: u,
                        onClose: function() {
                            return d(!1)
                        }
                    }, Object(r.d)(Fe, null, "good" === f ? Object(r.d)(B.D, {
                        label: c("rate_me_confirmation_good")
                    }) : Object(r.d)(B.C, {
                        label: c("rate_me_confirmation_bad")
                    })), Object(r.d)("p", {
                        id: Ne,
                        css: We
                    }, c("rate_me_add_comment")), Object(r.d)(Ce, {
                        id: "rate_comment",
                        mobile: a,
                        onSubmit: function(e) {
                            o({
                                comment: e.comment
                            }), d(!1)
                        },
                        submitLabel: c("button_add_feedback"),
                        validate: function(e) {
                            return e.comment ? {} : {
                                comment: c("survey_fill_in_required_fields")
                            }
                        },
                        disabled: l
                    }, Object(r.d)(m.q, null, Object(r.d)(Ie, {
                        label: "",
                        serverName: "",
                        type: "textarea",
                        name: "comment",
                        localize: function() {
                            return c("rate_me_placeholder")
                        },
                        ariaLabelledBy: Ne,
                        required: !0
                    })))))
                }));
            var Xe = {
                    name: "1wcfv52",
                    styles: "margin-right:0"
                },
                Je = Object(m.z)("div", {
                    target: "ekqutxs1"
                })("display:flex;align-items:center;position:relative;", (function(e) {
                    var t = e.theme;
                    return Object(r.c)("margin-", t.isRtl ? "left" : "right", ":0.5em;")
                }), ";"),
                Ze = Object(m.z)("div", {
                    target: "ekqutxs0"
                })("position:absolute;", (function(e) {
                    var t = e.availability,
                        n = e.size,
                        r = e.theme;
                    return {
                        width: "small" === n ? r.spaces.space4 : r.spaces.space5,
                        height: "small" === n ? r.spaces.space4 : r.spaces.space5,
                        background: "online" === t ? r.colors.success : r.colors.grayscale[500],
                        border: "2px solid " + r.colors.surface,
                        borderRadius: r.borderRadius.round,
                        top: "-2px",
                        right: "-2px"
                    }
                }), ";"),
                $e = function(e) {
                    var t = e.avatarUrl,
                        n = e.availability,
                        i = e.size,
                        a = void 0 === i ? "normal" : i;
                    return Object(r.d)(Je, null, Object(r.d)(m.b, {
                        css: Xe,
                        imgUrl: t,
                        size: "small" === a ? "24px" : void 0
                    }), n && Object(r.d)(Ze, {
                        availability: n,
                        size: a
                    }))
                },
                et = n(43);
            var tt = {
                    name: "f7ay7b",
                    styles: "justify-content:center"
                },
                nt = Object(m.z)("div", {
                    target: "e10kp68a1"
                })({
                    name: "8xhv84",
                    styles: "width:100%;display:flex"
                }),
                rt = Object(r.c)(tt, " flex:1;"),
                it = Object(r.c)(tt, " min-width:auto;"),
                at = Object(m.z)("img", {
                    target: "e10kp68a0"
                })({
                    name: "1lnnphj",
                    styles: "height:auto;max-height:50px"
                }),
                ot = function(e) {
                    var t = e.agent,
                        n = e.chatId,
                        i = e.showAvatar,
                        a = e.logoPath,
                        o = e.isRatingEnabled,
                        c = "modern" === Object(u.g)().name;
                    return Object(r.d)(nt, null, i && t.avatar && Object(r.d)($e, {
                        avatarUrl: t.avatar,
                        availability: "online"
                    }), Object(r.d)(m.q, {
                        flexFill: !0
                    }, Object(r.d)(m.f, {
                        css: rt,
                        flexFill: !0
                    }, Object(r.d)(m.w, {
                        ellipsis: !0
                    }, Object(r.d)(et.a, null, t.name)), t.properties.jobTitle && Object(r.d)(m.s, {
                        ellipsis: !0
                    }, Object(r.d)(et.a, null, t.properties.jobTitle)), o && c && Object(r.d)(m.q, null, Object(r.d)(Qe, {
                        chatId: n
                    }))), o && !c && Object(r.d)(m.f, {
                        css: tt,
                        noShrink: !0
                    }, Object(r.d)(m.q, null, Object(r.d)(Qe, {
                        chatId: n
                    }))), !!a && Object(r.d)(m.f, {
                        css: it
                    }, Object(r.d)(at, {
                        alt: "",
                        src: a,
                        draggable: !1
                    }))))
                },
                ct = n(141),
                lt = n.n(ct),
                st = n(203),
                ut = n(140),
                dt = function(e) {
                    return void 0 === e && (e = 3), Object(r.c)("-webkit-line-clamp:", e, ";-webkit-box-orient:vertical;-webkit-box-pack:center;display:-webkit-box;text-overflow:ellipsis;overflow:hidden;")
                },
                mt = "top-bar";
            var bt = {
                    name: "l3iapi",
                    styles: "margin-right:6px;margin-left:0"
                },
                ft = Object(m.z)(B.n, {
                    target: "eyohww44"
                })("width:24px;height:24px;opacity:1;background-color:", (function(e) {
                    var t = e.theme;
                    return "modern" === t.name ? "transparent" : t.colors.lighterOppositeAgentBarColor
                }), ";", (function(e) {
                    return e.theme.isRtl && bt
                }), ";"),
                pt = Object(m.z)(B.d, {
                    target: "eyohww43"
                })((function(e) {
                    return "up" === e.direction && {
                        transform: "rotate(180deg)"
                    }
                }), " transition:transform 0.3s ", (function(e) {
                    return e.theme.transitions.easings.swift
                }), ";"),
                gt = Object(m.z)(W, {
                    target: "eyohww42"
                })("display:flex;text-align:left;overflow:hidden;height:auto;width:100%;align-items:", (function(e) {
                    return e.veritcallyCenter ? "center" : "flex-start"
                }), ";transition:height 0.3s ", (function(e) {
                    return e.theme.transitions.easings.swift
                }), ";will-change:height;line-height:1.5;a{color:inherit;}"),
                ht = Object(m.z)("div", {
                    target: "eyohww41"
                })("height:", 42, "px;display:flex;align-items:center;"),
                vt = Object(m.z)(Fe, {
                    target: "eyohww40"
                })("margin:", (function(e) {
                    return e.theme.isRtl ? "4px 0 4px 15px" : "4px 15px 4px 0"
                }), ";background-color:", (function(e) {
                    return e.theme.colors.decorativeOppositeTitleBarColor
                }), ";"),
                jt = function(e) {
                    var t = e.text,
                        n = e.icon,
                        o = e.isLoadingHistory,
                        c = e.forceExpanded,
                        l = e.forceCollapsed,
                        s = e.isUploadDrawerVisible,
                        u = i.useState(!0),
                        d = u[0],
                        m = u[1],
                        b = i.useState(!1),
                        f = b[0],
                        p = b[1],
                        g = i.useState(!1),
                        h = g[0],
                        v = g[1],
                        j = i.useState(null),
                        O = j[0],
                        x = j[1],
                        y = i.useState(!1),
                        w = y[0],
                        E = y[1],
                        k = i.useRef(null),
                        z = Object(Q.l)(),
                        S = i.useCallback((function(e) {
                            var t = (void 0 === e ? {} : e).shouldKeepPrevious,
                                n = void 0 !== t && t;
                            if (d) {
                                var r = k.current.clientHeight;
                                r !== O && x(r), k.current.style.height = r + "px", k.current.scrollTop
                            }
                            k.current.style.height = (d ? 42 : Number(O)) + "px", n && p(d), m((function(e) {
                                return !e
                            }))
                        }), [d, O]),
                        C = function() {
                            d && (k.current.style.height = "auto")
                        },
                        T = o && d,
                        _ = l && d,
                        I = f && !l && !d && !s;
                    return i.useEffect((function() {
                        if (k && !c) {
                            var e = k.current.clientHeight > 42;
                            v(e)
                        }
                        k && c && (k.current.style.height = "auto", v(!1))
                    }), [k, c]), i.useEffect((function() {
                        h && (x(k.current.clientHeight), k.current.style.height = "42px", E(!0), m(!1))
                    }), [h]), i.useEffect((function() {
                        (T || _) && S({
                            shouldKeepPrevious: _
                        })
                    }), [S, T, _]), i.useEffect((function() {
                        I && (p(!1), S())
                    }), [S, I]), Object(r.d)(a.a, null, (function(e) {
                        return Object(r.d)(gt, {
                            ref: k,
                            row: !0,
                            veritcallyCenter: !h,
                            onTransitionEnd: C,
                            textWrap: !0
                        }, Object(r.d)(ht, {
                            "aria-hidden": !0
                        }, Object(r.d)(vt, {
                            size: "24px",
                            isLight: !0
                        }, n)), Object(r.d)("div", {
                            css: !d && h ? dt(2) : "",
                            id: z
                        }, Object(r.d)(lt.a, {
                            component: ut.a
                        }, Object(r.d)(st.a, {
                            template: t,
                            limit: d ? void 0 : 120,
                            root: {
                                component: et.a
                            }
                        }))), h && Object(r.d)(ht, null, Object(r.d)(ft, {
                            onPress: S,
                            "aria-expanded": d,
                            "aria-controls": z,
                            "aria-label": e(d ? "show_less" : "show_more")
                        }, Object(r.d)(pt, {
                            size: 24,
                            direction: w && d ? "up" : "down",
                            "aria-hidden": !0
                        }))))
                    }))
                },
                Ot = n(19),
                xt = {
                    modern: 42,
                    smooth: 56
                },
                yt = Object(m.z)("div", {
                    target: "e8t2lg23"
                })("width:", (function(e) {
                    return e.isVisible ? 100 : 0
                }), "%;height:", (function(e) {
                    return e.isVisible ? 100 : 0
                }), "%;position:absolute;top:0;left:0;z-index:101;"),
                wt = Object(m.z)("div", {
                    target: "e8t2lg22"
                })("position:relative;top:", (function(e) {
                    return e.topOffset
                }), "px;left:0;width:100%;height:", (function(e) {
                    return "calc(100% - " + e.topOffset + "px)"
                }), ";background-color:", (function(e) {
                    var t = e.theme;
                    return Object(Ot.g)(t.colors.surface, .93)
                }), ";padding:", (function(e) {
                    return e.theme.spaces.space3
                }), ";pointer-events:none;"),
                Et = Object(m.z)("div", {
                    target: "e8t2lg21"
                })("display:flex;flex-direction:column;align-items:center;justify-content:center;width:100%;height:100%;border:2px dashed ", (function(e) {
                    return e.theme.colors.border
                }), ";border-radius:", (function(e) {
                    return e.theme.borderRadius.lg
                }), ";color:", (function(e) {
                    return e.theme.colors.primaryTextColor
                }), ";"),
                kt = Object(m.z)("h1", {
                    target: "e8t2lg20"
                })((function(e) {
                    return e.theme.typography.subheading
                }), ";"),
                zt = Object(a.c)((function(e) {
                    return {
                        uploadFile: function(t) {
                            return Object(h.e)(e, t, "drag")
                        },
                        hideDropArea: function() {
                            return e.setApplicationState({
                                dropAreaVisible: !1
                            })
                        },
                        isVisible: e.getApplicationState("dropAreaVisible")
                    }
                }))((function(e) {
                    var t = e.isVisible,
                        n = e.uploadFile,
                        r = e.hideDropArea,
                        o = e.topBarHeight,
                        c = i.useState(!1),
                        l = c[0],
                        s = c[1],
                        d = Object(u.g)(),
                        m = xt[d.name] + o,
                        f = function(e) {
                            e.preventDefault(), e.stopPropagation()
                        };
                    return i.createElement(te, null, i.createElement(yt, {
                        onDragLeave: function() {
                            r()
                        },
                        onDragOver: f,
                        onDrop: function(e) {
                            var t;
                            f(e);
                            var i = null == (t = e.dataTransfer) ? void 0 : t.files;
                            i && Array.prototype.forEach.call(i, n), r()
                        },
                        isVisible: t || l
                    }, i.createElement(b.a, {
                        appear: !0,
                        component: null
                    }, t && i.createElement(v.d, {
                        length: 300,
                        onEnter: function() {
                            return s(!0)
                        },
                        onExited: function() {
                            return s(!1)
                        }
                    }, i.createElement(wt, {
                        topOffset: m
                    }, i.createElement(Et, null, i.createElement(B.g, null), i.createElement(a.a, null, (function(e) {
                        return i.createElement(kt, null, e("drop_files_here"))
                    }))))))))
                }));

            function St() {
                var e = Object(O.a)(["\n\t&-enter,\n\t&-appear {\n\t\ttransform: translateY(-100%);\n\t}\n\n\t&-enter-active,\n\t&-appear-active,\n\t&-enter-done,\n\t&-appear-done {\n\t\ttransform: translateY(0);\n\t\ttransition: transform ", "ms ", ";\n\t}\n\n\t&-exit {\n\t\ttransform: translateY(0);\n\t}\n\n\t&-exit-active {\n\t\ttransform: translateY(-100%);\n\t\ttransition: transform ", "ms ", ";\n\t}\n"]);
                return St = function() {
                    return e
                }, e
            }
            var Ct = Object(m.z)(m.a, {
                    target: "eraual4"
                })("position:relative;box-shadow:", (function(e) {
                    return e.theme.boxShadow.sm
                }), ";"),
                Tt = Object(m.z)("div", {
                    displayName: "TopBar",
                    target: "eraual3"
                })("position:relative;height:auto;bottom:0;z-index:", (function(e) {
                    return e.elevate ? 102 : 1
                }), ";pointer-events:", (function(e) {
                    return e.elevate ? "none" : "all"
                }), ";@media (max-height: 330px){display:none;}"),
                _t = Object(m.z)("div", {
                    target: "eraual2"
                })("min-height:calc(", 42, "px + 2 * ", (function(e) {
                    return e.theme.AgentBar.css.padding
                }), ");"),
                It = {
                    name: "1pc9iid",
                    styles: "position:relative;box-shadow:none;padding:0"
                },
                Rt = Object(m.z)(m.a, {
                    target: "eraual1"
                })("position:absolute;top:0;left:0;width:100%;box-shadow:", (function(e) {
                    return e.theme.boxShadow.sm
                }), ";", (function(e) {
                    return e.collapsed && It
                }), ";"),
                At = Object(m.z)("div", {
                    target: "eraual0"
                })("position:relative;width:100%;z-index:", (function(e) {
                    var t = e.collapsed;
                    return e.elevate ? 102 : t ? 2 : 1
                }), ";pointer-events:", (function(e) {
                    return e.elevate ? "none" : "all"
                }), ";"),
                Ft = "cubic-bezier(0.14, 0, 0, 1)",
                Mt = {
                    enter: 150,
                    exit: 150
                },
                Pt = function(e) {
                    return e(St(), 150, Ft, 150, Ft)
                },
                Ht = {
                    name: "kul0w8",
                    styles: "transition:opacity 100ms ease-in-out;position:relative"
                },
                qt = Object(a.c)((function(e, t) {
                    var n = t.chatId;
                    return function(e) {
                        var t, r = e.getView("Chat/queue"),
                            i = Object(l.ib)(e),
                            a = Object(l.lb)(e),
                            o = Object(l.mb)(e),
                            c = Object(l.h)("logo", e),
                            s = c.enabled && "modern" === Object(l.w)(e);
                        return {
                            agent: Object(l.d)(n, e),
                            chatActive: e.getChat(n).active,
                            showAvatar: Object(l.h)("agentAvatar", e).enabled,
                            isRatingEnabled: Object(l.h)("rating", e).enabled,
                            logoPath: s ? (t = c.path, "https://" + Object(U.l)(t)) : null,
                            showAgentBar: i,
                            showOfflineInformation: a,
                            showQueueInformation: o,
                            offlineInformation: e.localize(e.getApplicationState("limitReached") || !Object(l.K)(e) ? "agents_not_available" : "agents_not_available_continuous"),
                            queueTemplate: Object(l.r)(e),
                            numberInQueue: r && r.numberInQueue,
                            waitingTime: r && r.waitingTime,
                            showTopBar: Object(l.bb)(e),
                            hasNoVisibleEvents: Object(l.F)(e),
                            isDropAreaVisible: e.getApplicationState("dropAreaVisible"),
                            isUploadingFiles: !!Object(l.p)(e).length
                        }
                    }
                }))((function(e) {
                    var t = e.agent,
                        n = e.chatId,
                        a = e.showAvatar,
                        c = e.isRatingEnabled,
                        l = e.logoPath,
                        s = e.showAgentBar,
                        f = e.scrollingDeltaSource,
                        p = e.isOnBottomSource,
                        g = e.showOfflineInformation,
                        h = e.offlineInformation,
                        v = e.showQueueInformation,
                        j = e.queueTemplate,
                        O = e.numberInQueue,
                        y = e.waitingTime,
                        w = e.showTopBar,
                        E = e.isLoadingHistory,
                        k = e.children,
                        z = e.hasNoVisibleEvents,
                        S = e.isDropAreaVisible,
                        C = e.isUploadingFiles,
                        T = i.useRef(),
                        _ = i.useRef(),
                        I = i.useRef(0),
                        R = i.useRef(),
                        A = i.useState(!0),
                        F = A[0],
                        M = A[1],
                        P = "modern" === Object(u.g)().name,
                        H = i.useCallback((function() {
                            M(!0), T.current && (T.current.style.bottom = 0, T.current.style.height = "auto"), _.current && (_.current.style.opacity = 1)
                        }), [T]);
                    Object(o.a)(f, (function(e) {
                        var t = e.y;
                        s && ("auto" === T.current.style.height && (I.current = T.current.offsetHeight), 1 === t && M(!1), !F && t < 1 && M(!0), T.current && (T.current.style.bottom = t * I.current + "px", T.current.style.height = I.current - t * I.current + "px"), _.current && (_.current.style.opacity = 1 - 2 * t))
                    }));
                    return i.useEffect((function() {
                        H()
                    }), [w, H]), i.useEffect((function() {
                        if (p) return p.subscribe((function(e) {
                            e && H()
                        }))
                    }), [p, H]), i.useEffect((function() {
                        T.current && Object(d.vb)(T.current.querySelectorAll("button")).forEach((function(e) {
                            e.tabIndex = F ? 0 : -1
                        }))
                    }), [F]), Object(r.d)("div", {
                        ref: R
                    }, Object(r.d)(zt, {
                        topBarHeight: F && R.current ? R.current.clientHeight : 0
                    }), Object(r.d)(Tt, {
                        id: mt,
                        ref: T,
                        elevate: S
                    }, Object(r.d)(r.a, null, (function(e) {
                        var i = e.css;
                        return Object(r.d)(b.a, {
                            appear: !0,
                            component: null,
                            exit: F
                        }, s && Object(r.d)(x.a, {
                            timeout: Mt,
                            classNames: Pt(i)
                        }, Object(r.d)("div", null, !P && Object(r.d)(N, null), Object(r.d)(Ct, {
                            noShrink: !0
                        }, Object(r.d)(m.q, {
                            flexFill: !0,
                            ref: _,
                            css: Ht
                        }, Object(r.d)(ot, {
                            agent: t,
                            chatId: n,
                            showAvatar: a,
                            logoPath: l,
                            isRatingEnabled: c
                        }))))))
                    }))), Object(r.d)(At, {
                        collapsed: !(v || g),
                        elevate: S
                    }, (v || g) && Object(r.d)(i.Fragment, null, !P && Object(r.d)(N, null), Object(r.d)(_t, null)), Object(r.d)(r.a, null, (function(e) {
                        var t = e.css;
                        return Object(r.d)(b.a, {
                            appear: v || g,
                            component: null
                        }, Object(r.d)(x.a, {
                            timeout: Mt,
                            classNames: Pt(t)
                        }, Object(r.d)(Rt, {
                            collapsed: !(v || g)
                        }, v && Object(r.d)(jt, {
                            text: j.replace(/%number%/g, "**" + O + "**").replace(/%minutes%/g, "**" + Math.floor(y / 60) + "**"),
                            icon: Object(r.d)(B.m, {
                                size: 24
                            }),
                            isLoadingHistory: E,
                            forceExpanded: z,
                            forceCollapsed: S,
                            isUploadDrawerVisible: C
                        }), g && Object(r.d)(jt, {
                            text: h,
                            icon: Object(r.d)(B.p, null),
                            isLoadingHistory: E,
                            forceExpanded: z,
                            forceCollapsed: S,
                            isUploadDrawerVisible: C
                        }), k)))
                    }))))
                })),
                Bt = n(253),
                Dt = n(162),
                Lt = function(e) {
                    var t = e.children;
                    return i.createElement(m.i, {
                        date: "",
                        showMetaOnClick: !1,
                        system: !0
                    }, i.createElement(m.c, null, i.createElement(Dt.a, {
                        text: t
                    })))
                },
                Vt = n(657),
                Ut = n(255);
            var Nt = Object(m.z)(Ut.a, {
                    displayName: "SystemCard",
                    target: "e1r9cm3y0"
                })({
                    name: "1u4gyuh",
                    styles: "padding:8px;margin:2px 0;width:100%;max-width:270px;position:relative"
                }),
                Wt = Object(m.z)("div", {
                    target: "e1q4zsg91"
                })("display:flex;flex-direction:row;position:absolute;top:-21px;left:0;right:0;color:", (function(e) {
                    return e.theme.colors.ctaText
                }), ";"),
                Gt = Object(m.z)("div", {
                    target: "e1q4zsg90"
                })("display:flex;justify-content:center;align-items:center;overflow:hidden;margin:0 auto;border-radius:", (function(e) {
                    return e.theme.borderRadius.round
                }), ";width:", 42, "px;height:", 42, "px;background-color:", (function(e) {
                    var t = e.theme;
                    return e.backgroundColor || t.colors.cta
                }), ";"),
                Yt = function(e) {
                    var t = e.children,
                        n = e.backgroundColor;
                    return i.createElement(Wt, {
                        "aria-hidden": !0
                    }, i.createElement(Gt, {
                        backgroundColor: n
                    }, t))
                },
                Kt = function(e, t) {
                    return Object(r.c)("margin-", e ? "right" : "left", ":4px;margin-top:3px;fill:currentColor;transform:", "scaleY(" + ("up" === t ? -1 : 1) + ")", ";")
                },
                Qt = function(e) {
                    var t = e.direction,
                        n = void 0 === t ? "down" : t,
                        i = Object(j.a)(e, ["direction"]),
                        a = Object(u.g)().isRtl;
                    return Object(r.d)("svg", Object(s.a)({
                        viewBox: "0 0 7 4",
                        width: "7px",
                        height: "4px",
                        css: Kt(a, n)
                    }, i), Object(r.d)("path", {
                        d: "M1.1,0.2C0.9,0,0.5,0,0.4,0.2s-0.2,0.5,0,0.7l2.8,2.8c0.2,0.2,0.5,0.2,0.7,0l2.8-2.8c0.2-0.2,0.2-0.5,0-0.7S6.2,0,6,0.2 L3.5,2.7L1.1,0.2z"
                    }))
                },
                Xt = n(21),
                Jt = Object(m.z)("button", {
                    target: "eentevd0"
                })("display:flex;flex-direction:row;align-items:center;justify-content:center;width:100%;background:none;border:none;margin-top:8px;font-size:12px;text-align:center;cursor:pointer;color:", (function(e) {
                    return function(e) {
                        return "light" === e.variant ? Object(Xt.j)(e.colors.cta) ? Object(Ot.h)(.6, e.colors.cta) : e.colors.cta : Object(Ot.d)(.2, e.colors.cta)
                    }(e.theme)
                }), ";"),
                Zt = Object(m.z)("div", {
                    target: "e1g195pu0"
                })("position:absolute;top:50%;bottom:0;left:0;right:0;pointer-events:none;background:", (function(e) {
                    return "light" === e.theme.variant ? "linear-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.9))" : "linear-gradient(rgba(37, 37, 37, 0), rgba(37, 37, 37, 0.9))"
                }), ";"),
                $t = Object(m.z)("div", {
                    target: "e9s6ynt0"
                })("position:relative;overflow:hidden;height:auto;transition:max-height 300ms ", (function(e) {
                    return e.theme.transitions.easings.swift
                }), ";");
            var en = Object(m.z)("div", {
                    target: "e1cdxu9o0"
                })({
                    name: "11w4ikw",
                    styles: "height:auto;padding:8px"
                }),
                tn = Object(a.c)((function(e, t) {
                    var n = t.icon,
                        r = e.getApplicationState("config").theme;
                    return {
                        showIcon: !!n && "modern" !== r.name,
                        rtl: e.getApplicationState("rtl"),
                        localize: e.localize
                    }
                }))((function(e) {
                    var t, n, a = e.icon,
                        c = e.showIcon,
                        l = e.children,
                        u = e.collapsible,
                        m = void 0 !== u && u,
                        b = e.defaultCollapsed,
                        f = void 0 !== b && b,
                        p = e.collapsedHeight,
                        h = void 0 === p ? 100 : p,
                        v = e.collapseThreshold,
                        j = void 0 === v ? 20 : v,
                        O = e.rtl,
                        x = e.localize,
                        y = e.dataTestId,
                        w = (void 0 === y && g.a, i.useRef(0)),
                        E = i.useRef(!1),
                        k = i.useRef(null),
                        z = i.useRef(null),
                        S = Object(ne.f)(),
                        C = Object(ne.f)(),
                        T = i.useState(!1),
                        _ = T[0],
                        I = T[1],
                        R = i.useState(m),
                        A = R[0],
                        F = R[1],
                        M = Object(o.d)(d.w),
                        P = Object(o.d)((function() {
                            return m && f ? (e = h + "px", Object(r.c)("max-height:", e, ";")) : null;
                            var e
                        })),
                        H = i.useCallback((function(e) {
                            z.current.style.maxHeight = "number" === typeof e ? e + "px" : e
                        }), []),
                        q = i.useCallback((function() {
                            I(!_)
                        }), [_]),
                        B = i.useCallback((function() {
                            _ || H("none")
                        }), [_, H]);
                    return i.useEffect((function() {
                        return function() {
                            return cancelAnimationFrame(w.current)
                        }
                    }), []), i.useEffect((function() {
                        var e = k.current.offsetHeight,
                            t = e > h && e - h > j;
                        F(t && m), !E.current && m && I(t && f), E.current = m
                    }), [m, f, h, j]), i.useEffect((function() {
                        A ? (H(k.current.offsetHeight), _ && (cancelAnimationFrame(w.current), w.current = requestAnimationFrame((function() {
                            return H(h)
                        })))) : H("none")
                    }), [A, _, h, H]), Object(r.d)("div", {
                        css: c && (n = "21px", Object(r.c)("padding-top:", n, ";")),
                        role: "row"
                    }, Object(r.d)(Nt, Object(s.a)({
                        rtl: O,
                        role: "gridcell"
                    }, S), c ? a : null, Object(r.d)($t, {
                        id: M,
                        "aria-hidden": _,
                        ref: z,
                        onTransitionEnd: B,
                        css: [c && (t = "12px", Object(r.c)("margin-top:", t, ";")), P, ""]
                    }, Object(r.d)(en, {
                        ref: k
                    }, l), _ && Object(r.d)(Zt, null)), A && Object(r.d)(Jt, Object(s.a)({
                        onClick: q,
                        "aria-controls": M,
                        "aria-expanded": !_
                    }, C), Object(r.d)("span", null, x(_ ? "show_more" : "show_less")), Object(r.d)(Qt, {
                        direction: _ ? "down" : "up",
                        "aria-hidden": !0
                    }))))
                })),
                nn = n(643),
                rn = n(71),
                an = n(20),
                on = n(35),
                cn = n(45),
                ln = n(257),
                sn = [].concat(Object.values(c.a), [c.k, "https://customer-mobile-app.ngrok.io/chat-widget-moment/"]),
                un = function(e) {
                    var t = Object(ln.a)(e);
                    return sn.some((function(e) {
                        return 0 === t.lastIndexOf(e, 0)
                    }))
                },
                dn = function(e, t) {
                    var n = e.getView("Moment");
                    return {
                        available: Object(l.B)(e),
                        disabled: n.show && !un(n.data.url),
                        showMoment: function() {
                            var n = Object(U.a)({
                                    source: t,
                                    "moment-title": c.h
                                }),
                                r = c.a.production + "?" + n;
                            Object(h.G)(e, {
                                url: r
                            })
                        }
                    }
                };
            var mn = Object(m.z)("label", {
                    target: "e1fikopb9"
                })("display:block;padding-bottom:", (function(e) {
                    return e.single ? "0px" : "12px"
                }), ";color:", (function(e) {
                    return e.theme.colors.primaryTextColor
                }), ";", (function(e) {
                    return e.theme.typography.basic
                }), ";"),
                bn = Object(m.z)(rn.p, {
                    target: "e1fikopb8"
                })({
                    name: "haah45",
                    styles: "margin:0;padding:0;display:flex;width:40px;cursor:pointer;border:1px solid;align-items:center;justify-content:center"
                }),
                fn = Object(m.z)(bn, {
                    target: "e1fikopb7"
                })("border-radius:", (function(e) {
                    return e.theme.borderRadius.none
                }), ";", (function(e) {
                    var t, n = e.theme.isRtl ? "Left" : "Right";
                    return Object(r.c)(((t = {})["borderTop" + n + "Radius"] = 6, t["borderBottom" + n + "Radius"] = 6, t), "")
                }), " color:", (function(e) {
                    var t = e.theme;
                    return e.disabled ? t.colors.disabledContrast : t.colors.ctaText
                }), ";border:1px solid ", (function(e) {
                    var t = e.theme;
                    return e.disabled ? t.colors.secondaryTextColor : t.colors.cta
                }), ";background-color:", (function(e) {
                    var t = e.theme;
                    return e.disabled ? t.colors.disabled : t.colors.cta
                }), ";"),
                pn = Object(m.z)(bn, {
                    target: "e1fikopb6"
                })("color:", (function(e) {
                    return e.theme.colors.primaryTextColor
                }), ";border:none;background-color:transparent;"),
                gn = Object(m.z)("span", {
                    target: "e1fikopb5"
                })("width:100%;align-items:center;padding:8px;margin:1px;color:", (function(e) {
                    return e.theme.colors.primaryTextColor
                }), ";", (function(e) {
                    return e.theme.typography.input
                }), " ", (function(e) {
                    var t = e.active,
                        n = e.theme;
                    return t && Object(r.c)("color:", "dark" === n.variant ? Object(Ot.d)(.2, n.colors.cta) : n.colors.cta, ";")
                }), ";"),
                hn = Object(m.z)("form", {
                    target: "e1fikopb4"
                })({
                    name: "nj1ofm",
                    styles: "display:flex;position:relative;flex-direction:row"
                }),
                vn = Object(m.z)("div", {
                    target: "e1fikopb3"
                })("display:flex;justify-content:center;align-items:center;height:100%;position:absolute;padding:0 6px;color:", (function(e) {
                    return e.theme.colors.primaryTextColor
                }), ";", (function(e) {
                    var t;
                    return (t = {})[e.theme.isRtl ? "right" : "left"] = 0, t
                }), ";"),
                jn = Object(m.z)("div", {
                    target: "e1fikopb2"
                })("border-top:1px solid ", (function(e) {
                    return e.theme.colors.divider
                }), ";margin:", (function(e) {
                    var t = e.theme;
                    return t.spaces.space6 + " " + t.spaces.space0
                }), ";"),
                On = Object(m.z)("div", {
                    target: "e1fikopb1"
                })({
                    name: "192s9p1",
                    styles: "display:flex;flex-direction:row;justify-content:center;align-items:center"
                }),
                xn = function(e) {
                    var t, n = e ? "Left" : "Right",
                        i = e ? "Right" : "Left";
                    return Object(r.c)(((t = {
                        margin: 0,
                        minWidth: 0
                    })["padding" + i] = 34, t["border" + n] = "none", t["borderTop" + n + "Radius"] = 0, t["borderBottom" + n + "Radius"] = 0, t), "")
                },
                yn = Object(a.c)((function(e, t) {
                    var n = t.event,
                        r = t.chatId,
                        i = function(t) {
                            return Object(h.P)(e, {
                                email: t
                            }), new Promise((function(t) {
                                return e.once("customer_updated", t)
                            }))
                        };
                    return function(t) {
                        var a = t.getSessionUser().email,
                            o = t.getApplicationState(),
                            c = o.rtl,
                            l = o.license,
                            s = t.getChat(r),
                            u = s.properties,
                            d = s.serverId,
                            m = dn(t, "ask-for-email");
                        if ("ask_for_email" !== n.properties.formId) return {
                            rtl: c,
                            email: a,
                            chatTransfer: m,
                            license: l,
                            serverChatId: d,
                            submitEmail: function(e) {
                                return Object(on.d)("ask_for_email_form_submitted", {
                                    reason: "agent_offline"
                                }), i(e)
                            },
                            message: t.localize("email_prompt_first_time"),
                            confirmation: t.localize("email_prompt_confirmation"),
                            active: n.thread === u.lastThread,
                            currentAgent: u.currentAgent
                        };
                        var b = n.properties.fields.find((function(e) {
                                return "information" === e.type
                            })),
                            f = t.getEvents(r).find((function(e) {
                                return e.id !== n.id && e.thread === n.thread && e.properties.formId === n.properties.formId
                            }));
                        if (f) return {
                            rtl: c,
                            chatTransfer: m,
                            license: l,
                            serverChatId: d,
                            message: "",
                            active: !1,
                            email: f.properties.fields[0].answer,
                            confirmation: b.label,
                            currentAgent: u.currentAgent
                        };
                        var p = n.properties.fields.find((function(e) {
                            return "email" === e.type
                        }));
                        return p ? {
                            rtl: c,
                            email: a,
                            chatTransfer: m,
                            license: l,
                            serverChatId: d,
                            active: !0,
                            alwaysShowInput: !0,
                            message: p.label,
                            submitEmail: function(t) {
                                return Object(on.d)("ask_for_email_form_submitted", {
                                        reason: "agent_inactivity_timeout"
                                    }),
                                    function(t) {
                                        return Promise.all([i(t), e.requestUpdateEvent(r, n.id, {
                                            properties: {
                                                answers: {
                                                    email: t
                                                }
                                            }
                                        })])
                                    }(t)
                            },
                            confirmation: b.label,
                            hidden: n.thread !== u.lastThread,
                            currentAgent: u.currentAgent
                        } : {
                            rtl: c,
                            chatTransfer: m,
                            license: l,
                            serverChatId: d,
                            email: "",
                            active: !1,
                            confirmation: "",
                            message: b.label,
                            currentAgent: u.currentAgent
                        }
                    }
                }))((function(e) {
                    var t = e.rtl,
                        n = e.email,
                        a = e.active,
                        c = e.hidden,
                        l = e.message,
                        u = e.confirmation,
                        d = e.alwaysShowInput,
                        m = e.chatTransfer,
                        b = e.submitEmail,
                        f = (e.license, e.serverChatId, e.currentAgent),
                        p = Object(Z.useFrame)(),
                        g = i.useRef(null),
                        h = i.useRef(null),
                        v = i.useState(!n),
                        j = v[0],
                        O = v[1],
                        x = i.useState(n || ""),
                        y = x[0],
                        w = x[1],
                        E = n && !d ? u : l,
                        k = Object(Vt.a)({
                            type: "email",
                            autoComplete: "email",
                            placeholder: "Email",
                            value: y,
                            onChange: w,
                            label: E
                        }, h),
                        z = k.inputProps,
                        S = k.labelProps,
                        C = i.useCallback((function() {
                            O(!0), w(n || "")
                        }), [n]),
                        T = i.useCallback((function() {
                            n && O(!1)
                        }), [n]);
                    if (Object(o.n)(g, T, p), c) return null;
                    if (l && !u && !n) return Object(r.d)(tn, null, Object(r.d)(mn, {
                        single: !0
                    }, Object(r.d)(st.a, {
                        preserveLists: !0,
                        template: l,
                        root: {
                            component: et.a
                        }
                    })));
                    var _ = d || (!n || a && j),
                        I = !y;
                    Object(an.f)();
                    return Object(r.d)(tn, null, Object(r.d)(mn, _ && S, Object(r.d)(lt.a, {
                        component: ut.a
                    }, Object(r.d)(st.a, {
                        preserveLists: !0,
                        template: E,
                        root: {
                            component: et.a
                        }
                    }))), Object(r.d)(hn, {
                        ref: g,
                        onSubmit: function(e) {
                            e.preventDefault(),
                                function() {
                                    if (f || n !== y) return b(y).then((function() {
                                        O(!1)
                                    }));
                                    O(!1)
                                }()
                        }
                    }, _ ? Object(r.d)(i.Fragment, null, Object(r.d)(nn.a, Object(s.a)({}, z, {
                        css: xn(t)
                    })), Object(r.d)(vn, null, Object(r.d)(rn.u, {
                        "aria-hidden": !0
                    })), Object(r.d)(fn, {
                        type: "submit",
                        disabled: I,
                        "aria-label": "Submit an email"
                    }, Object(r.d)(rn.a, {
                        "aria-hidden": !0
                    }))) : Object(r.d)(i.Fragment, null, Object(r.d)(gn, {
                        ellipsis: !0,
                        active: a
                    }, n), a && Object(r.d)(pn, {
                        onPress: C,
                        "aria-label": "Edit an email"
                    }, Object(r.d)(rn.i, {
                        "aria-hidden": !0
                    })))), m.available && Object(r.d)(i.Fragment, null, Object(r.d)(jn, null), Object(r.d)(mn, null, "Prefer mobile notifications?"), Object(r.d)(cn.a, {
                        variant: "default",
                        "aria-label": "Download app",
                        disabled: m.disabled,
                        onPress: function() {
                            Object(on.d)("chat_app_button_clicked", {
                                ui_source: "ask_for_email"
                            }), m.showMoment()
                        },
                        label: Object(r.d)(On, null, Object(r.d)(rn.w, {
                            "aria-hidden": !0
                        }), Object(r.d)("span", null, "Get reply via mobile app"))
                    })), !1)
                })),
                wn = n(645);
            var En = Object(m.z)("div", {
                    target: "efus62t2"
                })({
                    name: "17pqesx",
                    styles: "margin-bottom:8px;a{color:inherit;}"
                }),
                kn = Object(m.z)("div", {
                    target: "efus62t1"
                })("width:100%;margin-bottom:2px;font-size:14px;color:", (function(e) {
                    return e.theme.colors.secondaryTextColor
                }), ";"),
                zn = Object(m.z)("div", {
                    target: "efus62t0"
                })("width:100%;font-size:14px;color:", (function(e) {
                    return e.theme.colors.primaryTextColor
                }), ";"),
                Sn = function(e) {
                    var t = e.fields;
                    return i.createElement("div", null, t.map((function(e, t) {
                        var n = e.label,
                            r = e.answer;
                        return i.createElement(En, {
                            key: t
                        }, i.createElement(kn, {
                            textWrap: !0
                        }, i.createElement(lt.a, {
                            component: ut.a
                        }, i.createElement(st.a, {
                            preserveLists: !0,
                            template: n,
                            root: {
                                component: et.a
                            }
                        }))), i.createElement(zn, {
                            textWrap: !0
                        }, i.createElement(et.a, null, "string" === typeof r ? r : r.join(", "))))
                    })))
                },
                Cn = n(31),
                Tn = function(e) {
                    function t() {
                        return e.apply(this, arguments) || this
                    }
                    Object(Cn.a)(t, e);
                    var n = t.prototype;
                    return n.componentWillUnmount = function() {
                        var e = this.props,
                            t = e.form,
                            n = e.name,
                            r = t.getFieldState(n);
                        r && r.value && t.change(n, void 0)
                    }, n.render = function() {
                        return this.props.children
                    }, t
                }(i.Component);
            var _n = function(e) {
                    var t = e.when,
                        n = e.children;
                    return t ? i.createElement(Oe.b, {
                        subscription: Ee.d
                    }, (function(n) {
                        var r = n.form;
                        return n.values[t] ? i.createElement(Tn, Object(s.a)({}, e, {
                            form: r
                        })) : null
                    })) : i.createElement(i.Fragment, null, n)
                },
                In = n(646),
                Rn = (n(651), Object(m.z)("p", {
                    target: "ecj3oet0"
                })("margin:0;color:", (function(e) {
                    return e.theme.colors.primaryTextColor
                }), ";a{color:inherit;}", (function(e) {
                    return e.theme.typography.basic
                }), ";")),
                An = function(e) {
                    var t = e.children;
                    return i.createElement(Rn, null, "string" === typeof t ? i.createElement(lt.a, {
                        component: ut.a
                    }, i.createElement(st.a, {
                        template: t,
                        root: {
                            component: et.a
                        }
                    })) : t)
                },
                Fn = n(647),
                Mn = n(660),
                Pn = n(652),
                Hn = n(644);
            var qn = Object(m.z)(m.q, {
                    target: "egdebj42"
                })((function(e) {
                    var t = e.theme,
                        n = t.spaceBase,
                        r = t.typography,
                        i = t.colors;
                    return Object(s.a)({}, r.basic, {
                        color: i.primaryTextColor,
                        margin: .5 * n + "px 0"
                    })
                }), ";"),
                Bn = Object(m.z)(we.c, {
                    target: "egdebj41"
                })("margin-bottom:0;", (function(e) {
                    var t = e.theme;
                    return Object(r.c)("padding-", t.isRtl ? "right" : "left", ":", t.spaceBase, "px;")
                }), ";"),
                Dn = Object(m.z)("div", {
                    target: "egdebj40"
                })({
                    name: "juo0cq",
                    styles: "width:16px;height:16px;flex-shrink:0;margin-top:2px"
                }),
                Ln = function(e) {
                    var t = e.inputId,
                        n = e.label,
                        i = e.children;
                    return Object(r.d)(qn, null, Object(r.d)(Dn, null, i), Object(r.d)(Bn, {
                        htmlFor: t
                    }, Object(r.d)(et.a, null, n)))
                },
                Vn = function(e) {
                    var t = e.checkboxGroupState,
                        n = e.label,
                        a = e.inputId,
                        o = e.defaultSelected,
                        c = Object(j.a)(e, ["checkboxGroupState", "label", "inputId", "defaultSelected"]),
                        l = i.useRef(null),
                        u = Object(Pn.a)({
                            defaultSelected: o
                        }),
                        d = Object(Mn.a)(Object(s.a)({}, c, {
                            id: a,
                            children: []
                        }), u, l).inputProps;
                    return Object(r.d)(Ln, {
                        inputId: a,
                        label: n
                    }, Object(r.d)(wn.a, Object(s.a)({
                        ref: l
                    }, Object(Q.h)(d, {
                        onChange: function(e) {
                            t.setSelectedValue(e.target.value, e.target.checked)
                        }
                    }))))
                },
                Un = [],
                Nn = function(e) {
                    var t = e.options,
                        n = e.label,
                        i = e.name,
                        a = e.required,
                        o = Object(Oe.c)(i, {
                            defaultValue: Un
                        }),
                        c = function(e) {
                            var t = e.value,
                                n = e.onChange;
                            return {
                                setSelectedValue: function(e, r) {
                                    var i = r ? t.concat(e) : t.filter((function(t) {
                                        return t !== e
                                    }));
                                    n(i)
                                }
                            }
                        }(o.input),
                        l = Object(Ee.h)(o).errorMessageProps,
                        s = Object(ne.h)({
                            onBlurWithin: o.input.onBlur,
                            onFocusWithin: o.input.onFocus
                        }).focusWithinProps;
                    return Object(r.d)(Te.a, null, Object(r.d)(we.b, s, Object(r.d)(Hn.a, {
                        showRequiredMark: a
                    }, n), t.map((function(e, t) {
                        return Object(r.d)(ne.a, {
                            preventFocusOnPress: !0,
                            key: t
                        }, Object(r.d)(Vn, {
                            key: t,
                            inputId: i + "_" + t,
                            label: e.label,
                            value: e.value,
                            checkboxGroupState: c,
                            defaultSelected: Object(d.E)(e.value, o.input.value)
                        }))
                    })), Object(r.d)(we.a, l)))
                },
                Wn = function(e) {
                    var t = i.useRef(null),
                        n = e.label,
                        r = e.required,
                        a = Object(Ee.g)(t, Object(s.a)({}, e, {
                            autoComplete: "name" === e.name ? e.name : "off"
                        })),
                        o = a.inputProps,
                        c = a.labelProps,
                        l = a.errorMessageProps;
                    return i.createElement(Te.a, null, i.createElement(_e.a, Object(s.a)({
                        showRequiredMark: r
                    }, c), n), i.createElement(we.g, Object(s.a)({}, o, {
                        errorMessageProps: l,
                        ref: t
                    })))
                },
                Gn = function(e) {
                    var t = i.useRef(null),
                        n = e.label,
                        r = e.required,
                        a = Object(Ee.g)(t, Object(s.a)({}, e, {
                            type: "email",
                            autoComplete: "email"
                        })),
                        o = a.inputProps,
                        c = a.labelProps,
                        l = a.errorMessageProps;
                    return i.createElement(Te.a, null, n && i.createElement(_e.a, Object(s.a)({
                        showRequiredMark: r
                    }, c), n), i.createElement(we.g, Object(s.a)({}, o, {
                        ref: t,
                        errorMessageProps: l
                    })))
                },
                Yn = n(252),
                Kn = n(363),
                Qn = function(e) {
                    var t = e.radioGroupState,
                        n = e.label,
                        r = e.inputId,
                        a = Object(j.a)(e, ["radioGroupState", "label", "inputId"]),
                        o = Object(Yn.a)(Object(s.a)({}, a, {
                            id: r,
                            children: []
                        }), t, null).inputProps;
                    return i.createElement(Ln, {
                        inputId: r,
                        label: n
                    }, i.createElement(In.a, o))
                },
                Xn = function(e) {
                    var t = e.options,
                        n = e.label,
                        r = e.name,
                        a = e.required,
                        o = Object(Oe.c)(r),
                        c = Object(Kn.a)(o.input),
                        l = Object(Ee.h)(o),
                        u = l.validationState,
                        d = l.errorMessageProps,
                        m = Object(Yn.b)({
                            name: r,
                            label: n,
                            isRequired: a,
                            validationState: u
                        }, c),
                        b = m.radioGroupProps,
                        f = m.labelProps;
                    return i.createElement(Te.a, null, i.createElement(we.b, Object(Q.h)(b, {
                        onBlur: o.input.onBlur,
                        onFocus: o.input.onFocus
                    }), i.createElement(Hn.a, Object(s.a)({
                        showRequiredMark: a
                    }, f), n), t.map((function(e, t) {
                        return i.createElement(ne.a, {
                            preventFocusOnPress: !0,
                            key: t
                        }, i.createElement(Qn, {
                            key: t,
                            inputId: r + "_" + t,
                            label: e.label,
                            value: e.value,
                            radioGroupState: c
                        }))
                    })), i.createElement(we.a, d)))
                },
                Jn = Object(m.z)("option", {
                    target: "e1t56ivc0"
                })("color:", (function(e) {
                    return e.primary ? e.theme.colors.success : "inherit"
                }), ";"),
                Zn = function(e) {
                    var t = e.meta,
                        n = e.name,
                        r = e.label,
                        a = e.value,
                        o = e.localize,
                        c = void 0 !== t && void 0 !== t.online,
                        l = Boolean(t && t.online),
                        s = " (" + o(l ? "skill_status_online" : "skill_status_offline") + ")";
                    return i.createElement(Jn, {
                        name: n,
                        primary: c && l,
                        value: a
                    }, "" + r + (c ? s : ""))
                },
                $n = function(e) {
                    var t = e.options,
                        n = e.label,
                        r = e.name,
                        a = e.localize,
                        o = e.required,
                        c = Object(Oe.c)(r);
                    return i.createElement(Te.a, null, i.createElement(_e.a, {
                        showRequiredMark: o,
                        htmlFor: r
                    }, n), i.createElement(we.f, Object(s.a)({}, c, {
                        id: r,
                        name: r
                    }), i.createElement("option", {
                        value: ""
                    }, a("forms_choose")), t.map((function(e, t) {
                        return i.createElement(Zn, {
                            key: t,
                            meta: e.meta,
                            label: e.label,
                            localize: a,
                            name: r,
                            value: e.value
                        })
                    }))))
                },
                er = function(e) {
                    var t = e.label,
                        n = e.name,
                        r = e.required,
                        a = void 0 !== r && r,
                        o = Object(Oe.c)(n),
                        c = Object(Kn.a)(o.input),
                        l = Object(Yn.b)({
                            name: n,
                            label: t,
                            isRequired: a
                        }, c),
                        u = l.radioGroupProps,
                        d = l.labelProps;
                    return i.createElement(Te.a, null, i.createElement(we.b, Object(Q.h)(u, {
                        onBlur: o.input.onBlur,
                        onFocus: o.input.onFocus
                    }), i.createElement(Hn.a, Object(s.a)({
                        showRequiredMark: a
                    }, d), t), i.createElement(we.e, Object(s.a)({}, o, {
                        required: a
                    }))))
                };
            var tr = Object(m.z)("div", {
                    target: "e12liu9t1"
                })("margin:0;color:", (function(e) {
                    return e.theme.colors.primaryTextColor
                }), ";a{color:inherit;}ul,ol{margin:8px 0;display:inline-block;white-space:normal;width:100%;padding-left:24px;}li{margin:4px 0;}", (function(e) {
                    return e.theme.typography.basic
                }), ";"),
                nr = Object(m.z)("h2", {
                    target: "e12liu9t0"
                })({
                    name: "143wq1t",
                    styles: "font-size:14px;font-weight:normal;margin:0;a{text-decoration:underline;}"
                }),
                rr = {
                    information: function(e) {
                        var t = e.value;
                        return i.createElement(Te.a, null, i.createElement(tr, {
                            preserveLines: !0,
                            textWrap: !0
                        }, i.createElement(nr, null, i.createElement(st.a, {
                            template: t,
                            root: {
                                component: et.a
                            }
                        }))))
                    },
                    text: Wn,
                    textarea: Ie,
                    email: Gn,
                    rating: er,
                    radio: Xn,
                    checkbox: Nn,
                    select: $n
                };
            var ir = function(e) {
                    var t = e.type;
                    return rr[t]
                },
                ar = function(e, t) {
                    switch (t) {
                        case "prechat":
                            return e("prechat_submit_label");
                        case "ticket":
                            return e("offline_form_submit_label");
                        default:
                            return e("submit")
                    }
                },
                or = Object(a.c)((function(e, t) {
                    var n = t.chatId,
                        r = t.eventId,
                        i = t.type,
                        a = function(t) {
                            if ("prechat" === i || "ticket" === i) {
                                var a = t.name,
                                    o = t.email,
                                    c = Object(d.f)({
                                        name: a,
                                        email: o
                                    });
                                Object(d.G)(c) || e.updateUser(e.getSessionUserId(), c)
                            }
                            return e.requestUpdateEvent(n, r, {
                                properties: {
                                    answers: t
                                }
                            })
                        };
                    return function(e) {
                        return {
                            localize: e.localize,
                            mobile: e.getApplicationState("mobile"),
                            sendForm: a,
                            sessionUser: e.getSessionUser()
                        }
                    }
                }))((function(e) {
                    var t = e.id,
                        n = e.type,
                        r = e.fields,
                        a = e.mobile,
                        c = e.localize,
                        l = e.sendForm,
                        u = e.sessionUser,
                        b = Object(o.i)(t + ":" + n),
                        f = Object(o.d)((function() {
                            var e = b.get(),
                                t = function(e, t) {
                                    var n = Object(d.Q)((function(e) {
                                            return "string" === typeof e ? Object(d.zb)(e) : e
                                        }), Object(d.db)(["email", "name"], e)),
                                        r = n.name,
                                        i = n.email;
                                    return r === t("client") ? {
                                        email: i
                                    } : {
                                        email: i,
                                        name: r
                                    }
                                }(u, c);
                            return Object(Ee.f)(r, t, e)
                        })),
                        p = i.useRef({
                            counter: 0,
                            lastValues: null,
                            lastResult: null
                        }),
                        g = i.useCallback((function(e) {
                            p.current.counter++, p.current.lastValues = Object(s.a)({}, e);
                            var t = r.reduce((function(t, n) {
                                var r, i, a = n.required,
                                    o = n.name;
                                return a && !Object(Ee.i)(e[o]) ? Object(s.a)({}, t, ((r = {})[o] = c("survey_fill_in_required_fields"), r)) : "maxLength" in n && "number" === typeof n.maxLength && e[o] && e[o].length > n.maxLength ? Object(s.a)({}, t, ((i = {})[o] = "Cannot be longer than " + n.maxLength + " characters long.", i)) : t
                            }), {});
                            return p.current.lastResult = Object(s.a)({}, t), t
                        }), [r, c]);
                    return i.createElement(Ce, {
                        id: t,
                        mobile: a,
                        initialValues: f,
                        validate: g,
                        onSubmit: function(e) {
                            var t = p.current,
                                n = t.counter,
                                r = t.lastValues,
                                i = t.lastResult,
                                a = g(e);
                            return 0 !== Object.keys(a).length && Object(on.c)("invalid_form_submit_4", null, Object(d.Q)((function(e) {
                                return JSON.stringify(e)
                            }), {
                                validationErrors: a,
                                validationCounter: n,
                                lastValidationValues: r,
                                lastValidationResult: i,
                                values: e
                            })), l(e).then((function() {
                                b.destroy()
                            }), (function(e) {
                                var t;
                                return e || ((t = {})[Fn.a] = c("lost_connection"), t)
                            }))
                        },
                        submitLabel: ar(c, n)
                    }, r.map((function(e, t) {
                        var n = ir(e);
                        return i.createElement(m.q, {
                            key: t
                        }, i.createElement(_n, {
                            name: e.name,
                            when: e.dependOn
                        }, i.createElement(n, Object(s.a)({}, e, {
                            localize: c
                        }))))
                    })), i.createElement(Oe.b, {
                        onChange: function(e) {
                            var t = e.values;
                            e.dirty && b.set(t)
                        },
                        subscription: {
                            values: !0,
                            dirty: !0
                        }
                    }))
                })),
                cr = function() {
                    var e = Object(u.g)();
                    return i.createElement(Yt, {
                        backgroundColor: e.colors.cta
                    }, i.createElement(B.y, {
                        color: e.colors.ctaText
                    }))
                },
                lr = function() {
                    var e = Object(u.g)();
                    return i.createElement(Yt, {
                        backgroundColor: e.colors.cta
                    }, i.createElement(B.B, {
                        color: e.colors.ctaText
                    }))
                },
                sr = function(e) {
                    var t = e.answered,
                        n = Object(u.g)();
                    return i.createElement(Yt, {
                        backgroundColor: t ? n.colors.success : n.colors.cta
                    }, t ? i.createElement(B.E, {
                        color: n.colors.successContrast
                    }) : i.createElement(B.r, {
                        color: n.colors.ctaText
                    }))
                },
                ur = function(e) {
                    var t = e.localize;
                    return i.createElement(An, null, t("offline_message_sent"))
                },
                dr = function(e) {
                    var t = e.chatId,
                        n = e.id,
                        r = e.setScrollTargetNode,
                        c = e.form,
                        u = Object(j.a)(e, ["chatId", "id", "setScrollTargetNode", "form"]),
                        d = c.properties,
                        m = d.formId,
                        b = d.formType,
                        f = d.fields,
                        p = d.answered,
                        g = f.filter((function(e) {
                            return e.answer && e.label
                        })),
                        h = l.P(c),
                        v = i.useRef(null);
                    if (Object(o.o)((function() {
                            !p && v.current && r && r(v.current)
                        })), h) return null;
                    var O = function(e) {
                            switch (e) {
                                case "prechat":
                                    return cr;
                                case "postchat":
                                    return lr;
                                case "ticket":
                                    return sr;
                                default:
                                    return null
                            }
                        }(b),
                        x = function(e) {
                            return "ticket" === e ? ur : Sn
                        }(b);
                    return i.createElement("div", Object(s.a)({
                        ref: v
                    }, u), i.createElement(a.a, null, (function(e) {
                        return i.createElement(tn, {
                            defaultCollapsed: !0,
                            collapsible: p,
                            icon: O && i.createElement(O, {
                                answered: p
                            })
                        }, p ? i.createElement(x, {
                            fields: g,
                            localize: e
                        }) : i.createElement(or, {
                            key: b,
                            chatId: t,
                            eventId: n,
                            id: m,
                            type: b,
                            fields: f
                        }))
                    })))
                };
            var mr = {
                    name: "w1atjl",
                    styles: "width:100%;height:100%"
                },
                br = Object(m.z)("div", {
                    target: "eprpde50"
                })("flex-shrink:0;width:24px;height:24px;border-radius:", (function(e) {
                    return e.theme.borderRadius.md
                }), ";overflow:hidden;"),
                fr = function() {
                    return Object(r.d)(rn.r, null, Object(r.d)(rn.B, null))
                },
                pr = function(e) {
                    var t = e.src;
                    return t ? Object(r.d)(br, null, Object(r.d)(m.h, {
                        src: t,
                        css: mr
                    }, (function(e) {
                        switch (e.imageStatus) {
                            case "pending":
                                return Object(r.d)(rn.r, null);
                            case "failed":
                                return Object(r.d)(fr, null);
                            default:
                                return null
                        }
                    }))) : Object(r.d)(br, null, Object(r.d)(fr, null))
                };
            var gr = Object(m.z)("h2", {
                    target: "e5gms8x0"
                })({
                    name: "k9orpe",
                    styles: "flex-grow:1;flex-basis:100%;font-weight:700;font-size:14px;margin:0 8px"
                }),
                hr = Object(m.z)(m.q, {
                    target: "e1txcupw0"
                })("border-bottom:1px solid ", (function(e) {
                    return e.theme.colors.divider
                }), ";padding:0 0.8em;height:48px;display:flex;align-items:center;");
            var vr = Object(m.z)("form", {
                    target: "ewg5kgh2"
                })({
                    name: "4bgdod",
                    styles: "display:block;position:relative"
                }),
                jr = Object(m.z)(nn.a, {
                    target: "ewg5kgh1"
                })({
                    name: "1syokg1",
                    styles: "height:50px;padding-right:calc(36px + (2 * 8px))"
                }),
                Or = Object(m.z)(B.n, {
                    target: "ewg5kgh0"
                })("width:36px;height:36px;position:absolute;right:8px;top:calc(50% - 18px);display:flex;justify-content:center;align-items:center;transition:background-color 100ms ease-in-out;", (function(e) {
                    var t = e.disabled,
                        n = e.theme;
                    return t ? {
                        backgroundColor: "transparent",
                        color: n.colors.tertiaryTextColor
                    } : {
                        backgroundColor: Object(Xt.j)(n.colors.cta) ? Object(Ot.h)(.6, n.colors.cta) : n.colors.cta,
                        color: n.colors.ctaText
                    }
                }), ";"),
                xr = function(e) {
                    var t = e.label,
                        n = e.titleId,
                        r = e.descriptionId,
                        a = e.onSubmit,
                        o = e.disabled,
                        c = i.useState(""),
                        l = c[0],
                        s = c[1],
                        u = "" === l || o,
                        d = function() {
                            u || a(l)
                        };
                    return i.createElement(vr, {
                        onSubmit: function(e) {
                            e.preventDefault(), d()
                        }
                    }, i.createElement(jr, {
                        type: "text",
                        placeholder: t,
                        disabled: o,
                        value: l,
                        "aria-labelledby": n,
                        "aria-describedby": r,
                        onChange: function(e) {
                            return s(null == e ? void 0 : e.target.value)
                        }
                    }), i.createElement(Or, {
                        disabled: u,
                        "aria-label": t,
                        onPress: d
                    }, i.createElement(B.z, {
                        size: 32
                    })))
                };
            var yr = Object(m.z)(hr, {
                    target: "e1j7xo754"
                })({
                    name: "w8lbxe",
                    styles: "border-bottom:0"
                }),
                wr = Object(m.z)("div", {
                    displayName: "BoosterContainer",
                    target: "e1j7xo753"
                })("width:100%;display:flex;color:", (function(e) {
                    return e.theme.colors.primaryTextColor
                }), ";max-width:", (function(e) {
                    return e.single ? "270px" : "240px"
                }), ";"),
                Er = Object(m.z)("div", {
                    target: "e1j7xo752"
                })({
                    name: "gkg51",
                    styles: "padding:0 0.8em 0.8em 0.8em"
                }),
                kr = Object(m.z)(Ut.a, {
                    target: "e1j7xo751"
                })({
                    name: "1j46qqh",
                    styles: "flex-grow:1;max-width:100%;flex-basis:100%"
                }),
                zr = Object(m.z)("p", {
                    target: "e1j7xo750"
                })(dt(), ";margin:0;margin-bottom:1.2em;", (function(e) {
                    return e.theme.typography.basic
                }), ";"),
                Sr = function(e) {
                    var t = e.id,
                        n = e.icon,
                        r = e.title,
                        a = e.description,
                        o = e.onUserAction,
                        c = e.action,
                        l = e.disabled,
                        s = e.single,
                        u = void 0 !== s && s,
                        d = Object(Q.l)(),
                        m = Object(Q.l)();
                    return i.createElement(wr, {
                        single: u
                    }, i.createElement(kr, {
                        role: "gridcell"
                    }, i.createElement(yr, null, i.createElement(pr, {
                        src: n
                    }), i.createElement(gr, {
                        id: d,
                        ellipsis: !0,
                        flexFill: !0
                    }, r)), i.createElement(Er, null, i.createElement(zr, {
                        id: m
                    }, i.createElement(lt.a, {
                        component: ut.a
                    }, i.createElement(st.a, {
                        preserveLists: !0,
                        template: a,
                        root: {
                            component: et.a
                        }
                    }))), "button" === c.type && i.createElement(cn.a, {
                        ellipsis: !0,
                        variant: "default",
                        label: c.label,
                        onPress: function() {
                            return o(t)
                        },
                        disabled: l
                    }), "search" === c.type && i.createElement(xr, {
                        titleId: d,
                        label: c.label,
                        descriptionId: m,
                        onSubmit: function(e) {
                            return o(t, e)
                        },
                        disabled: l
                    }))))
                };
            var Cr = Object(m.z)("div", {
                    target: "e1ndqyd80"
                })({
                    name: "cmvgoq",
                    styles: "padding-top:0.8em;width:100%;display:flex;justify-content:center;flex-grow:1"
                }),
                Tr = Object(a.c)((function(e) {
                    var t = function(t) {
                            return e.emit("on_chat_booster_launched", t)
                        },
                        n = function(t) {
                            return e.emit("open_in_new_tab", t)
                        };
                    return function(e) {
                        return {
                            emitBoosterLaunched: t,
                            openInNewTab: n,
                            currentMoment: e.getView("Moment")
                        }
                    }
                }))((function(e) {
                    var t = e.boosters,
                        n = e.setScrollTargetNode,
                        r = e.showMoment,
                        a = e.emitBoosterLaunched,
                        c = e.currentMoment,
                        l = e.openInNewTab,
                        u = i.useRef(null);
                    Object(o.o)((function() {
                        u.current && n && n(u.current)
                    }));
                    var d = function(e) {
                            var t, n = e.id;
                            return c.show && (null == (t = c.data) ? void 0 : t.boosterId) !== n
                        },
                        b = function(e, n) {
                            var i = t.find((function(t) {
                                return t.id === e
                            }));
                            if (i) {
                                var o = i.icon,
                                    c = i.title,
                                    u = i.action,
                                    d = u.url,
                                    m = u.type,
                                    b = u.webviewHeight,
                                    f = void 0 === b ? "full" : b;
                                a({
                                    id: e,
                                    title: c
                                }), "support_ua" !== e ? r({
                                    icon: o,
                                    title: c,
                                    boosterId: e,
                                    height: f,
                                    source: "chat_booster",
                                    url: Object(U.c)(d, Object(s.a)({}, c && {
                                        "moment-title": c
                                    }, "search" === m && n && {
                                        query: String(n)
                                    }))
                                }) : l(d)
                            }
                        };
                    return i.createElement(Cr, {
                        ref: u,
                        role: "row"
                    }, 1 === t.length ? i.createElement(Sr, Object(s.a)({}, t[0], {
                        single: !0,
                        onUserAction: b,
                        disabled: d(t[0])
                    })) : i.createElement(m.e, null, t.map((function(e) {
                        return i.createElement(Sr, Object(s.a)({}, e, {
                            key: e.id,
                            onUserAction: b,
                            disabled: d(e)
                        }))
                    }))))
                }));
            var _r = Object(m.z)("div", {
                    target: "e1yucjc71"
                })({
                    name: "12etndg",
                    styles: "width:100%;display:flex;margin-bottom:16px;flex-direction:row;align-items:center;justify-content:center"
                }),
                Ir = Object(m.z)("div", {
                    target: "e1yucjc70"
                })("padding:4px 12px;", (function(e) {
                    var t = e.theme;
                    return Object(r.c)(t.typography.basic, ";color:", t.colors.subtleFeedbackContrast, ";background-color:", t.colors.subtleFeedback, ";border-radius:", t.borderRadius.sm, ";")
                }), ";"),
                Rr = function() {
                    return i.createElement(a.a, null, (function(e) {
                        return i.createElement(_r, null, i.createElement(Ir, null, e("fill_form_to_send")))
                    }))
                },
                Ar = n(653),
                Fr = Object(m.z)("span", {
                    target: "e1v5q6v41"
                })("margin:", (function(e) {
                    return e.theme.spaces.space1
                }), ";padding-left:", (function(e) {
                    return e.theme.spaces.space1
                }), ";width:1.5em;height:1.5em;text-align:center;vertical-align:middle;font-size:1.5em;line-height:1.5em;"),
                Mr = Object(m.z)("div", {
                    target: "e1v5q6v40"
                })("margin:", (function(e) {
                    return e.theme.spaces.space2
                }), ";padding:0;outline:none;cursor:pointer;appearance:none;background:none;border:none;", (function(e) {
                    var t = e.highlighted,
                        n = e.isSelected,
                        i = e.theme,
                        a = "transparent";
                    return t ? a = i.colors.cta : n && (a = i.colors.pressedElement), Object(r.c)(B.o, "{background-color:", a, ";}")
                }), ";"),
                Pr = function(e) {
                    var t = e.onPress,
                        n = e.isSelected,
                        r = e.emoji,
                        a = e.itemList,
                        o = e.actionLabel,
                        c = void 0 === o ? "insert" : o,
                        l = i.useRef(null),
                        s = a.useItem,
                        u = a.clearHighlightedItem,
                        d = s({
                            ref: l,
                            text: r,
                            value: r
                        }),
                        m = d.id,
                        b = d.highlight,
                        f = (0, d.useHighlighted)();
                    return i.createElement(Mr, {
                        id: m,
                        ref: l,
                        highlighted: f,
                        isSelected: n,
                        onClick: t,
                        onMouseOver: b,
                        onMouseOut: u,
                        "aria-label": c + " " + r
                    }, i.createElement(B.o, null, i.createElement(Fr, {
                        "aria-hidden": !0
                    }, r)))
                };

            function Hr() {
                var e = Object(O.a)(["\n\t0% {\n\t\tscale: 1;\n\t}\n\t50% {\n\t\tscale: ", ";\n\t}\n\t100% {\n\t\tscale: 1;\n\t}\n"]);
                return Hr = function() {
                    return e
                }, e
            }
            var qr = {
                    name: "15cfo8l",
                    styles: "font-size:1rem;width:24px;height:24px"
                },
                Br = function(e) {
                    return void 0 === e && (e = 2), Object(r.e)(Hr(), e)
                };
            var Dr = {
                    name: "dgw6hz",
                    styles: "left:-16px;bottom:-10px"
                },
                Lr = {
                    name: "1qhj2dg",
                    styles: "left:4px;bottom:50%"
                },
                Vr = Object(m.z)(B.n, {
                    target: "e83qc9n0"
                })((function(e) {
                    var t = e.isVisible,
                        n = e.isAnimating,
                        i = e.messageHeight,
                        a = e.theme,
                        o = e.isBottom;
                    return Object(r.c)(qr, ";box-shadow:", a.boxShadow.xs, ";background-color:", function(e) {
                        var t = e.isVisible,
                            n = e.theme;
                        return t ? "light" === n.variant ? Object(Ot.i)(.95, n.colors.cta) : Object(Ot.e)(.2, n.colors.cta, n.colors.grayscale[900]) : n.colors.surface
                    }({
                        isVisible: t,
                        theme: a
                    }), ";border-radius:", a.borderRadius.md, ";opacity:", t ? 1 : 0, ";transform:", function(e) {
                        var t = e.isVisible,
                            n = e.isBottom,
                            r = e.isModern,
                            i = e.messageHeight;
                        return t ? "translateY(" + (r ? "50%" : "0") + ")" : n ? "translateY(" + (r ? 8 : 16) + "px) scale(1.3)" : "translateY(-" + (i + 8) + "px) scale(2.5)"
                    }({
                        isVisible: t,
                        isBottom: o,
                        isModern: "modern" === a.name,
                        messageHeight: i
                    }), ";transition:opacity 0.2s ", a.transitions.easings.swift, ",transform 0.4s ", a.transitions.easings.swift, ",background-color 0.4s ", a.transitions.easings.swift, ";will-change:transform,opacity,background-color;position:absolute;", "modern" === a.name ? Lr : Dr, " ", n && Object(r.c)("&:first-child{animation:", Br(1.8), " ", a.transitions.easings.spring, " 1s;}"), ";")
                }), ";");
            var Ur = {
                    name: "1rvwycs",
                    styles: "bottom:-10px"
                },
                Nr = {
                    name: "1hpnkv2",
                    styles: "left:4px;bottom:50%;transform:translateY(50%)"
                },
                Wr = Object(m.z)("div", {
                    target: "e7wqyqi0"
                })(qr, " position:absolute;border-radius:", (function(e) {
                    return e.theme.borderRadius.round
                }), ";box-shadow:", (function(e) {
                    return e.theme.boxShadow.xs
                }), ";display:flex;align-items:center;justify-content:center;", (function(e) {
                    var t = e.isOwn,
                        n = e.isHidden,
                        i = e.isAnimating,
                        a = e.messageHeight,
                        o = e.theme;
                    return t ? function(e) {
                        var t = e.isHidden,
                            n = e.isAnimating,
                            i = e.messageHeight,
                            a = e.theme;
                        return Object(r.c)("right:-12px;background-color:", a.colors.visitorMessageBackground, ";opacity:", t ? 0 : 1, ";transform:translateY(", function(e) {
                            var t = e.isModern,
                                n = e.isHidden,
                                r = e.messageHeight;
                            return n ? "-" + (t ? 8 : r - 16) + "px" : t ? "50%" : "-3px"
                        }({
                            isModern: "modern" === a.name,
                            isHidden: t,
                            messageHeight: i
                        }), ");transition:transform 0.2s ", a.transitions.easings.swift, " 1s,opacity 0.2s ", a.transitions.easings.swift, " 0.2s;will-change:opacity,transform;", n && Object(r.c)("&:first-child{animation:", Br(1.5), " ", a.transitions.easings.swift, " 1s;}"), ";")
                    }({
                        theme: o,
                        isAnimating: i,
                        messageHeight: a,
                        isHidden: n
                    }) : Object(r.c)("left:-16px;opacity:", n ? 0 : 1, ";background-color:", o.colors.surface, ";")
                }), " ", (function(e) {
                    return "modern" === e.theme.name ? Nr : Ur
                }), ";"),
                Gr = Object(m.z)("div", {
                    target: "e1f3ob3i0"
                })("position:absolute;text-align:center;z-index:3;transform:translateY(\n\t\t", (function(e) {
                    return function(e) {
                        var t = e.isBottom,
                            n = e.messageHeight,
                            r = e.hasTranslation;
                        return "calc(" + (t ? "" : "-") + "100% - " + (t ? 48 : n + (r ? 19 : 0)) + "px)"
                    }({
                        isBottom: e.isBottom,
                        messageHeight: e.messageHeight,
                        hasTranslation: e.hasTranslation
                    })
                }), "\n\t);background-color:", (function(e) {
                    return e.theme.colors.floatSurface
                }), ";box-shadow:", (function(e) {
                    return e.theme.boxShadow.floating
                }), ";padding:4px;border-radius:", (function(e) {
                    return e.theme.borderRadius.lg
                }), ";overflow:hidden;");
            var Yr = ["\ud83d\udc4d", "\ud83d\udc4e", "\u2764\ufe0f", "\ud83d\ude15", "\u2705", "\u274c"],
                Kr = Object(m.z)("ul", {
                    target: "e1dw9wle2"
                })({
                    name: "cezn9w",
                    styles: "display:flex;list-style-type:none;padding:0;margin:0;&:focus{outline:none;}"
                }),
                Qr = Object(m.z)("li", {
                    target: "e1dw9wle1"
                })({
                    name: "1usv3rz",
                    styles: "background:transparent;border:0"
                }),
                Xr = Object(m.z)("div", {
                    target: "e1dw9wle0"
                })("position:relative;margin-left:4px;", (function(e) {
                    var t = e.theme,
                        n = e.hasTranslation;
                    return "modern" !== t.name ? Object(r.c)("margin-bottom:", n ? 27 : 8, "px;min-width:32px;min-height:32px;") : Object(r.c)("margin-bottom:", n ? 16 : 0, "px;min-width:24px;min-height:24px;")
                }), ";"),
                Jr = function(e) {
                    var t = e.onReactionPicked,
                        n = e.currentReaction,
                        r = e.reactionWrapperRef,
                        a = e.isActive,
                        c = e.isVisible,
                        l = e.isOwn,
                        s = e.isForceHidden,
                        d = e.scrollToBottom,
                        m = e.hasTranslation,
                        f = i.useState(!1),
                        p = f[0],
                        g = f[1],
                        h = Object(o.z)(!1),
                        j = h[0],
                        O = h[1],
                        x = Object(o.s)(n),
                        y = i.useRef(null),
                        w = Object(Z.useFrame)(),
                        E = function(e, t) {
                            if (!t.current || !t.current.hasChildNodes) return {
                                messageWidth: 0,
                                messageHeight: 0
                            };
                            var n = e.getComputedStyle(t.current.children[0]),
                                r = n.width,
                                i = n.height,
                                a = function(e) {
                                    return parseInt(e.split("px")[0])
                                };
                            return {
                                messageWidth: a(r),
                                messageHeight: a(i)
                            }
                        }(w.window, r),
                        k = E.messageHeight,
                        z = E.messageWidth,
                        S = c && !p && !n,
                        C = k > 200,
                        T = "modern" === Object(u.g)().name;
                    Object(o.n)(y, (function() {
                        return F()
                    }), w);
                    var _ = function(e) {
                            t(e), F()
                        },
                        I = Object(Ar.a)({
                            onSelect: _
                        }),
                        R = I.useHighlightedItemId(),
                        A = function() {
                            Object(ne.c)() ? I.setHighlightedItem(0) : I.clearHighlightedItem(), g(!0), C && d && d({
                                duration: 0
                            })
                        },
                        F = i.useCallback((function() {
                            g(!1), I.clearHighlightedItem()
                        }), [I]);
                    return i.useEffect((function() {
                        p && s && F()
                    }), [s, p, F]), i.useEffect((function() {
                        l && n && x !== n && O()
                    }), [l, x, n, O]), i.createElement(i.Fragment, null, i.createElement(b.a, null, i.createElement(v.c, {
                        isVisible: p,
                        horizontalTravel: z - 32
                    }, i.createElement(Gr, {
                        ref: y,
                        messageHeight: k,
                        messageWidth: z,
                        hasTranslation: m,
                        isBottom: C
                    }, i.createElement(Y.a, {
                        autoFocus: !0,
                        contain: !0,
                        restoreFocus: !0
                    }, i.createElement(Kr, {
                        role: "menu",
                        tabIndex: 0,
                        onKeyDown: function(e) {
                            switch (e.stopPropagation(), e.preventDefault(), e.key) {
                                case "ArrowRight":
                                    return void I.moveHighlightedItem(1);
                                case "ArrowLeft":
                                    return void I.moveHighlightedItem(-1);
                                case "Home":
                                    return void I.setHighlightedItem(0);
                                case "End":
                                    return void I.setHighlightedItem(I.items.current.length - 1);
                                case " ":
                                case "Enter":
                                    return void I.selectHighlightedItem();
                                case "Escape":
                                case "Tab":
                                    return void F();
                                default:
                                    return void I.highlightItemByString(e)
                            }
                        },
                        "aria-activedescendant": R
                    }, Yr.map((function(e) {
                        return i.createElement(Qr, {
                            role: "menuitem",
                            key: e
                        }, i.createElement(Pr, {
                            onPress: function(t) {
                                t.stopPropagation(), _(e)
                            },
                            emoji: e,
                            itemList: I,
                            isSelected: e === n,
                            actionLabel: "react with"
                        }))
                    }))))))), i.createElement(Xr, {
                        hasTranslation: m
                    }, a ? i.createElement(i.Fragment, null, S ? i.createElement(B.n, {
                        "aria-label": "add message reaction",
                        onPress: A
                    }, T ? i.createElement(B.i, null) : i.createElement(B.h, null)) : i.createElement(Vr, {
                        isAnimating: j,
                        onAnimationEnd: O,
                        isVisible: !p && !!n,
                        onPress: A,
                        messageHeight: k,
                        isBottom: C,
                        "aria-label": "change message reaction, current reaction: " + n
                    }, i.createElement("span", null, n))) : i.createElement(Wr, {
                        isHidden: !n,
                        isOwn: l,
                        onAnimationEnd: O,
                        isAnimating: j,
                        messageHeight: k,
                        "aria-label": "message reaction: " + (n || n)
                    }, i.createElement("span", null, n))))
                },
                Zr = Object(m.z)("div", {
                    target: "e5gqefa1"
                })("display:flex;align-items:flex-end;flex-direction:", (function(e) {
                    var t = e.isOwn,
                        n = e.theme;
                    return t && "modern" !== n.name ? "row-reverse" : "row"
                }), ";overflow:visible;max-width:100%;"),
                $r = Object(m.z)("div", {
                    target: "e5gqefa0"
                })("display:flex;flex-direction:column;margin-bottom:", (function(e) {
                    var t = e.withMarginBottom,
                        n = e.theme;
                    return t && "modern" !== n.name ? 6 : 0
                }), "px;transition:margin-bottom 200ms ", (function(e) {
                    return e.theme.transitions.easings.swift
                }), ";transition-delay:300ms;will-change:margin-bottom;max-width:100%;"),
                ei = Object(a.c)((function(e, t) {
                    var n = t.chatId,
                        r = t.id,
                        i = t.showMoment,
                        a = function(t) {
                            l.pb(e, t) || h.m(e)
                        };
                    return function(e, t) {
                        var n;
                        return function(r) {
                            var i = e(r);
                            if (void 0 === i) return n;
                            var a = t(r, i);
                            return n = a, a
                        }
                    }((function(e) {
                        return e.getEvent(n, r)
                    }), (function(e, t) {
                        var o, c = e.getChat(n),
                            s = c.properties.lastThread === t.thread,
                            u = "form" === t.type && !t.properties.answered && l.S(e, n);
                        return {
                            event: t,
                            chatId: n,
                            showMoment: i,
                            handleGreetingDisplayed: a,
                            showFillFormAnnouncement: u,
                            localize: e.localize,
                            isChatActive: c.active,
                            author: e.getUser(t.author),
                            mobile: e.getApplicationState("mobile"),
                            enforceDeliveryStatusDisplay: r === Object(d.N)(Object(d.N)(e.getTimeline(n)).events).id && t.own,
                            isPartOfLastThread: s,
                            deliveryStatus: l.f(e, n, r),
                            rtl: e.getApplicationState("rtl"),
                            addReaction: function(t) {
                                return e.emit("add_message_reaction", {
                                    eventId: r,
                                    reaction: t
                                })
                            },
                            isReconnecting: l.nb(e),
                            isLastAgentEvent: (null == (o = l.j(e)) ? void 0 : o.id) === t.id
                        }
                    }))
                }))((function(e) {
                    var t = e.id,
                        n = e.mobile,
                        a = e.author,
                        c = e.event,
                        l = e.chatId,
                        u = e.localize,
                        f = e.radiusType,
                        p = e.showMoment,
                        g = e.scrollTarget,
                        h = e.deliveryStatus,
                        O = e.enforceDeliveryStatusDisplay,
                        x = e.listItemHandlers,
                        y = e.showMetaOnClick,
                        w = e.setScrollTargetNode,
                        E = e.handleGreetingDisplayed,
                        k = e.showFillFormAnnouncement,
                        z = e.rtl,
                        S = e.addReaction,
                        C = e.isChatActive,
                        T = e.isPartOfLastThread,
                        _ = e.isReconnecting,
                        I = e.isLastAgentEvent,
                        R = e.scrollToBottom,
                        A = i.useRef(null),
                        F = i.useState(c.properties.reaction || ""),
                        M = F[0],
                        P = F[1],
                        H = i.useState(!c.own && !c.seen),
                        q = H[0],
                        B = H[1],
                        D = Object(Xt.d)("message_reactions"),
                        L = !c.own && !!c.serverId && !!c.thread && C && T && !_,
                        V = Object(ne.i)({}),
                        U = V.isHovered,
                        N = V.hoverProps,
                        W = Object(o.z)(!1),
                        G = W[0],
                        Y = W[1],
                        K = Object(o.j)({}),
                        Q = K.isFocused,
                        X = Object(j.a)(K, ["isFocused"]);
                    i.useEffect((function() {
                        P(c.properties.reaction)
                    }), [c.properties.reaction]);
                    var J, Z = "system" === a.type;
                    if ("system_message" === c.type) {
                        var $ = c.properties,
                            ee = $.systemMessageType,
                            te = $.textVariables,
                            re = $.defaultText;
                        return i.createElement(Lt, null, ee ? u(ee, te) : re)
                    }
                    return "email_prompt" === c.type || "ask_for_email" === c.properties.formId ? c.properties.answered ? null : i.createElement(yn, {
                        event: Object(s.a)({}, c, {
                            thread: c.thread
                        }),
                        chatId: l
                    }) : "form" === c.type ? i.createElement(i.Fragment, null, k && i.createElement(Rr, null), i.createElement(r.a, null, (function(e) {
                        var t = e.theme;
                        return i.createElement(b.a, {
                            appear: k,
                            component: null
                        }, i.createElement(v.a, {
                            delay: 100
                        }, i.createElement(dr, {
                            id: c.id,
                            chatId: l,
                            form: c,
                            theme: t,
                            setScrollTargetNode: "form" === g ? w : void 0
                        })))
                    }))) : "boosters" === c.type ? i.createElement(Tr, {
                        boosters: c.properties.boosters,
                        showMoment: p,
                        setScrollTargetNode: "boosters" === g ? w : void 0
                    }) : i.createElement(m.i, Object(s.a)({
                        date: Z ? "" : (J = c.timestamp, new Date(J).toLocaleTimeString([], {
                            hour: "2-digit",
                            minute: "2-digit"
                        })),
                        deliveryStatus: h,
                        enforceDeliveryStatusDisplay: O,
                        failed: c.failed,
                        isOwn: c.own,
                        onSeen: function() {
                            B(!1), x.markAsSeen(t)
                        },
                        seen: !q,
                        sending: !c.delivered && !c.failed,
                        showMetaOnClick: !Z && y,
                        system: Z,
                        ref: function(e) {
                            e && "draft" === g && w && w(e), e && A.current && "carousel" === c.type && (A.current.style.maxWidth = getComputedStyle(e).width)
                        },
                        authorName: i.createElement(et.a, null, c.own && !a.name ? u("client") : a.name)
                    }, N, X), i.createElement(Zr, {
                        onClick: Y,
                        isOwn: c.own
                    }, i.createElement($r, {
                        withMarginBottom: !!M && !c.own && !c.properties.translation,
                        ref: A
                    }, i.createElement(Bt.a, {
                        event: c,
                        mobile: n,
                        radiusType: f,
                        disabledButtons: function() {
                            var e;
                            if (!(null == (e = c.properties.card) ? void 0 : e.buttons)) return [];
                            var t = C && T;
                            if (c.properties.invitation) return c.thread ? c.properties.card.buttons.reduce((function(e, n, r) {
                                return "cancel" === n.type && e.push(r), Object(d.E)(n.type, ["webview", "message"]) && !t && e.push(r), e
                            }), []) : [];
                            return c.properties.card.buttons.reduce((function(e, n, r) {
                                return function(e) {
                                    switch (e.type) {
                                        case "webview":
                                        case "message":
                                            return !t;
                                        default:
                                            return !1
                                    }
                                }(n) && e.push(r), e
                            }), [])
                        }(),
                        onActionButtonClick: x.handleActionButtonClick,
                        rtl: z,
                        onShow: c.properties.invitation ? function() {
                            return E(c)
                        } : void 0
                    })), D ? i.createElement(Jr, {
                        onReactionPicked: function(e) {
                            var t = e === c.properties.reaction ? "" : e;
                            P(t), S(t)
                        },
                        currentReaction: M,
                        reactionWrapperRef: A,
                        isActive: L,
                        isOwn: c.own,
                        isVisible: I || Q || U || n && G,
                        isForceHidden: _,
                        scrollToBottom: I ? R : void 0,
                        hasTranslation: !!c.properties.translation
                    }) : null))
                })),
                ti = n(96),
                ni = Object(m.z)("label", {
                    target: "e1e9gyrb2"
                })("color:", (function(e) {
                    return e.theme.colors.textPrimaryColor
                }), ";cursor:", (function(e) {
                    return e.disabled ? "not-allowed" : "pointer"
                }), ";display:flex;align-items:center;"),
                ri = Object(m.z)("span", {
                    target: "e1e9gyrb1"
                })("display:flex;align-items:center;justify-content:center;&:focus{outline-style:", (function(e) {
                    return e.focusVisible ? "auto" : "none"
                }), ";}"),
                ii = Object(m.z)("span", {
                    target: "e1e9gyrb0"
                })("display:inline-block;", (function(e) {
                    var t = e.theme;
                    return Object(r.c)("margin-", t.isRtl ? "right" : "left", ":5px;")
                }), ";"),
                ai = function(e) {
                    var t = e.disabled,
                        n = e.icon,
                        r = e.label,
                        a = e.fileInputRef,
                        c = Object(u.g)(),
                        l = Object(o.l)((function() {
                            return a.click()
                        })),
                        d = Object(ne.f)(),
                        m = function(e) {
                            return e || B.b
                        }(n);
                    return i.createElement(ni, {
                        flexFit: !0,
                        htmlFor: "fileupload",
                        disabled: t
                    }, i.createElement(ri, Object(s.a)({
                        role: "button",
                        "aria-label": "Send a file",
                        tabIndex: "0"
                    }, l, d), i.createElement(m, {
                        color: t ? c.colors.tertiaryTextColor : "currentColor",
                        "aria-hidden": !0
                    }), r ? i.createElement(ii, null, r) : null))
                };
            var oi = Object(d.d)(["\ud83d\ude42", "\ud83d\ude01", "\ud83d\ude02", "\ud83d\ude0a", "\ud83d\ude0d", "\ud83d\ude10", "\ud83d\ude15", "\ud83d\ude12", "\ud83d\ude22", "\ud83d\ude2d", "\ud83c\udf89", "\u2764\ufe0f", "\ud83d\udc4c", "\ud83d\udc4d", "\ud83d\ude4f"], 5),
                ci = Object(m.z)("div", {
                    target: "e1pkkif43"
                })({
                    name: "14y8lnv",
                    styles: "margin:0;padding:0;outline:none"
                }),
                li = Object(m.z)(B.n, {
                    target: "e1pkkif42"
                })("display:flex;justify-content:center;align-items:center;color:", (function(e) {
                    var t = e.theme;
                    return e.disabled ? t.colors.tertiaryTextColor : t.colors.primaryTextColor
                }), ";will-change:background-color;background-color:", (function(e) {
                    var t = e.theme;
                    return e.active ? t.colors.pressedElement : "transparent"
                }), ";transition:background-color 150ms ease-in-out;opacity:1;"),
                si = Object(m.z)("div", {
                    target: "e1pkkif41"
                })({
                    name: "frpnj0",
                    styles: "display:flex;flex-direction:row;align-items:center;justify-content:flex-start"
                }),
                ui = Object(m.z)("div", {
                    target: "e1pkkif40"
                })({
                    name: "1uuyw89",
                    styles: "display:flex;align-items:center;justify-content:center;flex-shrink:0;flex-grow:0"
                }),
                di = function(e) {
                    var t = e.onEmojiPicked,
                        n = e.disabled,
                        r = i.useRef(null),
                        a = i.useRef(null),
                        o = i.useRef({
                            open: d.W,
                            close: d.W
                        }),
                        c = i.useState(!1),
                        l = c[0],
                        s = c[1],
                        u = function(e) {
                            t(e), o.current.close(), Math.random() < .1 && Object(on.d)("Emoji_inserted_from_picker", {
                                emoji: e
                            })
                        },
                        m = Object(Ar.a)({
                            onSelect: u
                        }),
                        b = m.useHighlightedItemId();
                    i.useEffect((function() {
                        n && l && o.current.close()
                    }), [n, l]);
                    return 0 === oi.length || Object(an.f)() ? null : i.createElement(Ue, {
                        animated: !0,
                        placement: "top",
                        trigger: "press",
                        kind: "float",
                        controlsRef: o,
                        onOpenChange: function(e, t) {
                            var n;
                            if (Object(ne.c)() ? m.setHighlightedItem(0) : m.clearHighlightedItem(), e) null == (n = a.current) || n.focus(), Math.random() < .01 && Object(on.d)("emoji_picker_opened", {});
                            else if (!t) {
                                var i;
                                null == (i = r.current) || i.focus()
                            }
                            s(e)
                        },
                        description: i.createElement(ci, {
                            tabIndex: 0,
                            role: "grid",
                            "aria-label": "emoji picker",
                            ref: a,
                            "aria-activedescendant": b,
                            onKeyDown: function(e) {
                                switch (e.key) {
                                    case "ArrowUp":
                                        m.highlightedIndex.current - 5 >= 0 && m.moveHighlightedItem(-5);
                                        break;
                                    case "ArrowDown":
                                        m.highlightedIndex.current + 5 < m.items.current.length && m.moveHighlightedItem(5);
                                        break;
                                    case "ArrowLeft":
                                        m.highlightedIndex.current - 1 >= 0 && m.moveHighlightedItem(-1);
                                        break;
                                    case "ArrowRight":
                                        m.highlightedIndex.current + 1 < m.items.current.length && m.moveHighlightedItem(1);
                                        break;
                                    case "Home":
                                        m.setHighlightedItem(0);
                                        break;
                                    case "End":
                                        m.setHighlightedItem(m.items.current.length - 1);
                                        break;
                                    case " ":
                                    case "Enter":
                                        e.preventDefault(), m.selectHighlightedItem();
                                        break;
                                    case "Tab":
                                        return void e.preventDefault();
                                    default:
                                        return void m.highlightItemByString(e)
                                }
                                e.preventDefault()
                            }
                        }, oi.map((function(e, t) {
                            return i.createElement(si, {
                                key: t,
                                role: "row"
                            }, e.map((function(e, t) {
                                return i.createElement(ui, {
                                    key: t,
                                    role: "gridcell"
                                }, i.createElement(Pr, {
                                    emoji: e,
                                    itemList: m,
                                    onPress: function() {
                                        return u(e)
                                    }
                                }))
                            })))
                        })))
                    }, i.createElement(li, {
                        "aria-label": "open emoji picker",
                        ref: r,
                        active: l,
                        onPress: function() {
                            l && o.current.close()
                        },
                        disabled: n
                    }, i.createElement(B.j, null)))
                },
                mi = n(12),
                bi = i.createContext({}),
                fi = Object(m.z)("ul", {
                    target: "e1ixnb8m0"
                })("list-style-type:none;position:absolute;z-index:100;background:", (function(e) {
                    return e.theme.colors.floatSurface
                }), ";box-shadow:", (function(e) {
                    return e.theme.boxShadow.md
                }), ";border-radius:", (function(e) {
                    return e.theme.borderRadius.lg
                }), ";margin:0;margin-top:3.2em;margin-left:0.8em;padding:0;min-width:180px;overflow:hidden;&:focus{outline:none;}&>:last-child{border-bottom:0;}"),
                pi = function(e) {
                    var t = function(e) {
                        var t = e.highlightedIndex,
                            n = e.items,
                            r = t.current;
                        return null === r || r < 0 || 0 === n.current.length ? null : n.current[r].ref
                    }(e);
                    return null !== t && "true" !== t.current.getAttribute("aria-disabled")
                };
            var gi = function(e) {
                    var t = e.children,
                        n = e.onClose,
                        r = e.menuButtonRef,
                        a = e.onSelect,
                        c = Object(j.a)(e, ["children", "onClose", "menuButtonRef", "onSelect"]),
                        l = Object(Z.useFrame)(),
                        u = i.useRef(null),
                        d = i.useRef(!1),
                        m = Object(Ar.a)({
                            onSelect: a
                        }),
                        b = m.useHighlightedItemId();
                    return Object(o.n)(u, n, l), Object(o.o)((function() {
                        u.current && u.current.focus()
                    })), i.createElement(te, null, i.createElement(bi.Provider, {
                        value: m
                    }, i.createElement(fi, Object(s.a)({
                        onMouseOut: m.clearHighlightedItem,
                        tabIndex: -1,
                        role: "menu",
                        ref: u,
                        "aria-activedescendant": b,
                        onMouseDown: function() {
                            return d.current = !1
                        },
                        onKeyDown: function(e) {
                            switch (d.current = !0, e.preventDefault(), e.key) {
                                case "ArrowUp":
                                    return void m.moveHighlightedItem(-1);
                                case "ArrowDown":
                                    return void m.moveHighlightedItem(1);
                                case "Home":
                                    return void m.setHighlightedItem(0);
                                case "End":
                                    return void m.setHighlightedItem(m.items.current.length - 1);
                                case " ":
                                    if (!pi(m)) return;
                                    return void m.selectHighlightedItem();
                                case "Enter":
                                    if (!pi(m)) return;
                                    return m.selectHighlightedItem(), n(), void r.current.focus();
                                case "Tab":
                                    return n(), e.shiftKey ? void r.current.focus() : void Object(mi.f)(r.current).focus();
                                case "Escape":
                                    return n(), void r.current.focus();
                                default:
                                    return void m.highlightItemByString(e)
                            }
                        }
                    }, c), t)))
                },
                hi = Object(m.z)("li", {
                    target: "ezmrzej0"
                })("background:transparent;font-family:inherit;font-size:14px;border:0;display:flex;align-items:center;padding:1.3em;width:100%;cursor:pointer;border-bottom:", (function(e) {
                    return "1px solid " + e.theme.colors.divider
                }), ";color:", (function(e) {
                    var t = e.highlighted,
                        n = e.theme;
                    return t ? n.colors.ctaText : n.colors.primaryTextColor
                }), ";background-color:", (function(e) {
                    var t = e.highlighted,
                        n = e.theme;
                    return t && n.colors.cta
                }), ";&[aria-disabled='true']{pointer-events:none;color:", (function(e) {
                    return e.theme.colors.disabledContrast
                }), ";background-color:", (function(e) {
                    return e.theme.colors.disabled
                }), ";}"),
                vi = function(e) {
                    var t = e.disabled,
                        n = e.text,
                        r = e.value,
                        a = Object(j.a)(e, ["disabled", "text", "value"]),
                        o = i.useRef(null),
                        c = i.useContext(bi),
                        l = c.clearHighlightedItem,
                        u = (0, c.useItem)({
                            ref: o,
                            text: n,
                            value: r
                        }),
                        d = u.id,
                        m = u.highlight,
                        b = u.select,
                        f = (0, u.useHighlighted)();
                    return i.createElement(hi, Object(s.a)({
                        role: "menuitem",
                        id: d,
                        ref: o,
                        highlighted: f,
                        onMouseOver: m,
                        onMouseOut: l,
                        onClick: function(e) {
                            1 !== e.nativeEvent.which || t || b()
                        }
                    }, t && {
                        "aria-disabled": !0
                    }, a))
                };
            var ji = function(e) {
                    return Object(r.c)("padding:0;color:", e.colors.tertiaryTextColor, ";border-radius:", e.borderRadius.md, ";transition:background-color 100ms ease-in-out;margin-left:", e.spaces.space1, ";opacity:1;&:disabled{svg *{fill:", e.colors.tertiaryTextColor, ";}}svg *{transition:fill 100ms ease-in-out;will-change:fill;}")
                },
                Oi = Object(m.z)("div", {
                    target: "ex4ls1q3"
                })("position:absolute;top:0;height:100%;display:flex;align-items:center;", (function(e) {
                    return e.position + ": " + (e.dense ? "0.75em" : "1em")
                }), ";color:", (function(e) {
                    return e.theme.colors.primaryTextColor
                }), ";"),
                xi = Object(m.z)(m.q, {
                    target: "ex4ls1q2"
                })({
                    name: "bjn8wh",
                    styles: "position:relative"
                }),
                yi = {
                    name: "1oaeivz",
                    styles: "margin-right:8px"
                },
                wi = {
                    name: "1qkltea",
                    styles: "margin-left:5px"
                },
                Ei = Object(m.z)(B.n, {
                    target: "ex4ls1q1"
                })("display:flex;color:", (function(e) {
                    var t = e.theme;
                    return e.disabled ? t.colors.tertiaryTextColor : t.colors.primaryTextColor
                }), ";will-change:background-color;background-color:", (function(e) {
                    var t = e.theme;
                    return e.active ? t.colors.pressedElement : "transparent"
                }), ";transition:background-color 150ms ease-in-out;opacity:1;svg{display:block;}"),
                ki = Object(m.z)("input", {
                    target: "ex4ls1q0"
                })({
                    name: "eivff4",
                    styles: "display:none"
                }),
                zi = {
                    name: "zefn70",
                    styles: "bottom:4.8em;right:2em"
                };
            var Si = Object(a.c)((function(e, t) {
                    var n = t.chatId,
                        r = function(t, n) {
                            h.e(e, t, n)
                        },
                        i = function(t) {
                            h.B(e, n, t)
                        },
                        a = function(t) {
                            h.E(e, n, t)
                        },
                        o = function() {
                            h.G(e, Object(s.a)({
                                source: "message_box"
                            }, l.y(e)))
                        };
                    return function(e) {
                        return {
                            sendFile: r,
                            sendMessage: i,
                            setMessageDraft: a,
                            openVideoCallMoment: o,
                            reconnecting: l.nb(e),
                            allowInput: l.fb(e),
                            allowFileUpload: l.eb(e),
                            isFileUploadPossible: l.N(e),
                            mobile: e.getApplicationState("mobile"),
                            applicationFocused: e.getApplicationState("applicationFocused"),
                            videoCallButtonState: l.x(e),
                            rtl: e.getApplicationState("rtl"),
                            showAlternativeUploadOption: l.hb(e) && !e.getApplicationState("mobile") && "code" === l.a(e) && l.eb(e)
                        }
                    }
                }))((function(e) {
                    var t = e.allowFileUpload,
                        n = e.isFileUploadPossible,
                        c = e.mobile,
                        l = e.onHeightChange,
                        u = e.onSendMessage,
                        b = e.allowInput,
                        f = e.reconnecting,
                        p = e.sendFile,
                        g = e.sendMessage,
                        h = e.setMessageDraft,
                        v = (e.applicationFocused, e.onFocusChange),
                        O = e.openVideoCallMoment,
                        x = e.videoCallButtonState,
                        y = e.rtl,
                        w = e.showAlternativeUploadOption,
                        E = Object(j.a)(e, ["allowFileUpload", "isFileUploadPossible", "mobile", "onHeightChange", "onSendMessage", "allowInput", "reconnecting", "sendFile", "sendMessage", "setMessageDraft", "applicationFocused", "onFocusChange", "openVideoCallMoment", "videoCallButtonState", "rtl", "showAlternativeUploadOption"]),
                        k = i.useRef(null),
                        z = i.useRef(null),
                        S = i.useRef([0, 0]),
                        C = i.useRef(null),
                        T = Object(o.i)("text-composer"),
                        _ = T.get(),
                        I = i.useState(_ || ""),
                        R = I[0],
                        A = I[1],
                        F = i.useState(!1),
                        M = F[0],
                        P = F[1],
                        H = i.useState(!1),
                        q = H[0],
                        D = H[1],
                        L = i.useMemo((function() {
                            return Object(d.yb)(1500, h)
                        }), [h]),
                        V = Object(o.e)(f),
                        U = Object(me.b)(),
                        N = y ? "rtl" : "ltr",
                        W = Object(Z.useFrame)().document,
                        G = i.useCallback((function(e, t) {
                            return e.forEach((function(e) {
                                return p(e, t)
                            }))
                        }), [p]),
                        Y = i.useCallback((function(e) {
                            switch (P(!1), e) {
                                case "screenshot":
                                    ee(), Object(on.d)("snapshot_selected", {});
                                    break;
                                case "file":
                                    C.current.click()
                            }
                        }), [P, ee]),
                        K = i.useCallback((function() {
                            D(!0), v && v(!0)
                        }), [v]),
                        Q = i.useCallback((function() {
                            D(!1), v && v(!1)
                        }), [v]),
                        X = i.useCallback((function(e) {
                            A(""), g(e), L.cancel(), h(null), T.clear(), u && u()
                        }), [g, u, L, h, T]),
                        $ = i.useCallback((function(e) {
                            G(Object(d.vb)(e.target.files))
                        }), [G]),
                        ee = i.useCallback((function() {
                            Object(Xt.a)().then((function(e) {
                                G([e], "screenshot")
                            })).catch((function(e) {
                                Object(on.d)("snapshot_cancel", {
                                    reason: e.message
                                })
                            }))
                        }), [G]);
                    i.useEffect((function() {
                        var e = k.current,
                            t = function() {
                                S.current = [e.selectionStart, e.selectionEnd]
                            };
                        return e.addEventListener("blur", t),
                            function() {
                                return e.removeEventListener("blur", t)
                            }
                    }), []), i.useEffect((function() {
                        var e = function(e) {
                            var t = Array.from(e.clipboardData.items);
                            if (!t.some((function(e) {
                                    return "text/plain" === e.type
                                }))) {
                                var n = t.reduce((function(e, t) {
                                    var n = t.getAsFile();
                                    return n && e.push(n), e
                                }), []);
                                n.length && (e.preventDefault(), G(n, "clipboard"))
                            }
                        };
                        return t && q && n && W.addEventListener("paste", e),
                            function() {
                                return W.removeEventListener("paste", e)
                            }
                    }), [t, q, n, W, p, G]);
                    var te = function(e) {
                        var t = S.current,
                            n = t[0],
                            r = t[1];
                        J.a.flushSync((function() {
                            A((function(t) {
                                var i = t.slice(0, n) + e + t.slice(r, t.length);
                                return T.set(i), i
                            }))
                        })), J.a.flushSync((function() {
                            k.current.focus();
                            var t = n + e.length;
                            k.current.setSelectionRange(t, t)
                        }))
                    };
                    return Object(r.d)(a.a, null, (function(e) {
                        return Object(r.d)(m.t, Object(s.a)({}, E, {
                            value: R,
                            active: b,
                            disabled: f && !V,
                            mobile: c,
                            defaultValue: _,
                            onSend: X,
                            onValueChange: function(e) {
                                A(e), T.set(e), L(e)
                            }
                        }), Object(r.d)(xi, {
                            verticalAlign: "center"
                        }, x.visible && Object(r.d)(Oi, {
                            position: "left",
                            dense: x.visible
                        }, Object(r.d)(Ue, {
                            placement: "top",
                            description: "Start a video call"
                        }, Object(r.d)(B.n, {
                            onPress: O,
                            disabled: x.disabled,
                            css: function(e) {
                                return {
                                    opacity: 1,
                                    color: x.disabled ? e.colors.tertiaryTextColor : e.colors.primaryTextColor
                                }
                            },
                            "aria-label": "Start a video call"
                        }, Object(r.d)(B.I, null)))), Object(r.d)(m.u, {
                            ref: k,
                            autoFocus: Object(ke.c)(),
                            css: function(e) {
                                return function(e) {
                                    var t = e.disabled,
                                        n = e.leftIcons,
                                        i = e.mobile,
                                        a = e.theme;
                                    return Object(r.c)("font-family:inherit;padding:1.25em ", a.isRtl && !i && "modern" !== a.name ? "8.25em" : "7.75em", " 1.25em ", n ? "3.75em" : "1em", ";overflow-y:auto;margin-top:0;transition:box-shadow 0.1s ease-in-out;color:", t ? a.colors.tertiaryTextColor : a.colors.primaryTextColor, ";background-color:", t ? a.colors.disabled : Object(Ot.h)(.012, a.colors.surface), ";&:focus{background-color:", a.colors.surface, ";}&:disabled{cursor:not-allowed;}")
                                }({
                                    theme: e,
                                    mobile: c,
                                    disabled: f && !V,
                                    leftIcons: x.visible
                                })
                            },
                            disabled: f && !V,
                            flexFill: !0,
                            minRows: 1,
                            onClick: function() {
                                q || k.current.focus()
                            },
                            onBlur: Q,
                            onFocus: K,
                            onHeightChange: l,
                            placeholder: e("embedded_textarea_placeholder"),
                            "aria-label": e("embedded_textarea_placeholder"),
                            enterKeyHint: "send",
                            dir: R ? "auto" : N
                        }), Object(r.d)(Oi, {
                            position: "right",
                            dense: x.visible
                        }, Object(r.d)(di, {
                            onEmojiPicked: te,
                            disabled: f && !V
                        }), t && !w && Object(r.d)(ai, {
                            disabled: !n,
                            handleFileChange: $,
                            fileInputRef: C
                        }), w && Object(r.d)(Ei, {
                            "aria-label": "Add an attachment",
                            ref: z,
                            onClick: function() {
                                return P(!M)
                            },
                            disabled: !n,
                            active: M
                        }, Object(r.d)(B.b, {
                            "aria-hidden": "true"
                        })), M && Object(r.d)(gi, {
                            "aria-label": "File upload menu",
                            menuButtonRef: z,
                            onClose: function() {
                                return P(!1)
                            },
                            css: zi,
                            onSelect: Y
                        }, Object(r.d)(vi, {
                            value: "file"
                        }, Object(r.d)(ai, {
                            disabled: !n,
                            handleFileChange: $,
                            label: "Send a file",
                            icon: B.l
                        })), Object(r.d)(vi, {
                            value: "screenshot"
                        }, Object(r.d)(B.I, {
                            css: function(e) {
                                return function(e) {
                                    return e.isRtl ? wi : yi
                                }(e)
                            },
                            "aria-hidden": !0
                        }), "Attach a screenshot")), Object(r.d)(m.r, {
                            flexFit: !0,
                            icon: Object(r.d)(B.A, null),
                            css: ji,
                            "aria-label": "Send a message"
                        }), !U && Object(r.d)(ki, {
                            multiple: !0,
                            onChange: $,
                            type: "file",
                            value: "",
                            id: "fileupload",
                            ref: C,
                            disabled: !n
                        }))))
                    }))
                })),
                Ci = "set_can_be_shown",
                Ti = "expand",
                _i = "collapse",
                Ii = "toggle_collapsed",
                Ri = "main_transition_start",
                Ai = "main_transition_end",
                Fi = "drawer_transition_end",
                Mi = "reset_collapsed",
                Pi = "show_conifrmation_modal",
                Hi = "hide_conifrmation_modal",
                qi = function() {
                    return {
                        type: Ci
                    }
                },
                Bi = function() {
                    return {
                        type: Ti
                    }
                },
                Di = function() {
                    return {
                        type: _i
                    }
                },
                Li = function() {
                    return {
                        type: Ii
                    }
                },
                Vi = function() {
                    return {
                        type: Ri
                    }
                },
                Ui = function() {
                    return {
                        type: Ai
                    }
                },
                Ni = function() {
                    return {
                        type: Fi
                    }
                },
                Wi = function() {
                    return {
                        type: Mi
                    }
                },
                Gi = function(e) {
                    return {
                        type: Pi,
                        payload: e
                    }
                },
                Yi = function() {
                    return {
                        type: Hi
                    }
                },
                Ki = function(e, t) {
                    switch (t.type) {
                        case Ci:
                            return Object(s.a)({}, e, {
                                canBeShown: !0
                            });
                        case Ti:
                            return Object(s.a)({}, e, {
                                collapsed: !1
                            });
                        case _i:
                            return Object(s.a)({}, e, {
                                collapsed: !0
                            });
                        case Ii:
                            return Object(s.a)({}, e, {
                                collapsed: !e.collapsed
                            });
                        case Mi:
                            return Object(s.a)({}, e, {
                                animationEnded: !1,
                                collapsed: !1
                            });
                        case Ri:
                            return Object(s.a)({}, e, {
                                isAnimating: !0
                            });
                        case Ai:
                            return Object(s.a)({}, e, {
                                isAnimating: !1,
                                animationEnded: !0
                            });
                        case Fi:
                            return Object(s.a)({}, e, {
                                isExpanding: !1
                            });
                        case Pi:
                            return Object(s.a)({}, e, {
                                isConfirmationModalShown: !0,
                                confirmationModalMode: t.payload
                            }, e.collapsed && {
                                isExpanding: !0,
                                collapsed: !1
                            });
                        case Hi:
                            return Object(s.a)({}, e, {
                                isConfirmationModalShown: !1
                            });
                        default:
                            return e
                    }
                };

            function Qi() {
                var e = Object(O.a)(["\n\t&-enter,\n\t&-appear {\n\t\ttransform: translateY(100%);\n\t}\n\t&-enter-active,\n\t&-appear-active,\n\t&-enter-done,\n\t&-appear-done {\n\t\ttransform: translateY(0);\n\t\ttransition: transform ", "ms ", ";\n\t}\n\n\t&-exit {\n\t\ttransform: translateY(0);\n\t}\n\n\t&-exit-active {\n\t\ttransform: translateY(100%);\n\t\ttransition: transform ", "ms\n\t\t\t", ";\n\t}\n"]);
                return Qi = function() {
                    return e
                }, e
            }
            var Xi = function(e) {
                    return {
                        enter: 600,
                        exit: e ? 200 : 400
                    }
                },
                Ji = function(e, t, n, r) {
                    return e(Qi(), (n ? 0 : 600) * t, r.transitions.easings.swift, (n ? 200 : 400) * t, r.transitions.easings.swift)
                },
                Zi = function(e) {
                    var t = e.show,
                        n = e.collapsed,
                        a = e.durationFactor,
                        o = e.onTransitionStart,
                        c = e.onTransitionEnd,
                        l = e.children,
                        s = e.nodeRef;
                    return i.createElement(r.a, null, (function(e) {
                        var r = e.css,
                            u = e.theme;
                        return i.createElement(b.a, {
                            appear: !0,
                            component: null
                        }, t && i.createElement(x.a, {
                            timeout: Xi(n),
                            onExited: c,
                            onEntered: c,
                            onExiting: o,
                            onEntering: o,
                            classNames: Ji(r, a, n, u),
                            nodeRef: s
                        }, l))
                    }))
                },
                $i = n(665),
                ea = "transform, height, bottom, min-height, max-height, box-shadow, z-index, border-radius",
                ta = i.forwardRef((function(e, t) {
                    var n = e.heightPercentage,
                        a = e.collapsed,
                        c = e.children,
                        l = e.animationEnded,
                        u = e.onTransitionEnd,
                        d = e.isFooterHidden,
                        m = Object(j.a)(e, ["heightPercentage", "collapsed", "children", "animationEnded", "onTransitionEnd", "isFooterHidden"]),
                        b = i.useRef(null),
                        f = Object(o.c)(b, t),
                        p = Object(me.b)();
                    return Object(o.g)("touchmove", b), Object(o.b)(p ? null : b), Object(r.d)($i.a, {
                        autoFocus: !1,
                        disabled: a,
                        returnFocus: !0,
                        crossFrame: !1,
                        css: function(e) {
                            return function(e) {
                                var t = e.heightPercentage,
                                    n = e.collapsed,
                                    i = e.animationEnded,
                                    a = e.isFooterHidden,
                                    o = e.theme;
                                return Object(r.c)("position:absolute;z-index:", n ? 100 : 1500, ";display:flex;flex-direction:column;height:", n ? "48px" : 100 * t + "%", ";min-height:", n ? "48px" : "270px", ";max-height:", n ? "48px" : "100%", ";width:100%;bottom:", function(e, t, n) {
                                    return !t || e ? 0 : "modern" === n.name ? 32 : 24
                                }(a, n, o), "px;border-radius:", n ? 0 : "inherit", ";color:", o.colors.primaryTextColor, ";background-color:", o.colors.floatSurface, ";box-shadow:", n ? o.boxShadow.floating : "none", ";", i && {
                                    transitionProperty: ea,
                                    transitionDuration: 600 * t + "ms",
                                    transitionTimingFunction: "" + o.transitions.easings.swift,
                                    willChange: ea
                                }, ";")
                            }({
                                heightPercentage: n,
                                collapsed: a,
                                animationEnded: l,
                                isFooterHidden: d,
                                theme: e
                            })
                        },
                        ref: f,
                        lockProps: Object(s.a)({
                            role: "dialog",
                            "aria-modal": !0,
                            onTransitionEnd: u
                        }, m)
                    }, c)
                })),
                na = n(62),
                ra = {
                    allowtransparency: "true",
                    scrolling: "yes",
                    style: {
                        position: "absolute",
                        minWidth: "100%",
                        minHeight: "100%",
                        height: "1px",
                        width: "1px",
                        margin: "0",
                        padding: "0",
                        background: "none",
                        border: "0"
                    }
                },
                ia = function(e, t) {
                    return Object(s.a)({
                        moment_url: Object(U.e)(e) + Object(U.f)(e),
                        moment_origin: Object(U.e)(e) || ""
                    }, t && {
                        ui_source: t
                    })
                },
                aa = function(e) {
                    return Object(r.c)("flex-grow:1;position:relative;overflow:auto;-webkit-overflow-scrolling:touch;display:", e ? "none" : "block", ";background-color:#ffffff;")
                },
                oa = function(e, t, n) {
                    var r = document.createElement("iframe");
                    return r.allow = n, r.src = t, e.appendChild(r), r
                },
                ca = function(e) {
                    var t = e.id,
                        n = e.url,
                        a = e.close,
                        o = e.hidden,
                        c = e.sendMessage,
                        l = e.sendSystemMessage,
                        s = e.setAttributes,
                        u = e.onLoadingChanged,
                        m = e.onMomentDataChanged,
                        b = e.iframeAllowedProperties,
                        f = e.getCustomerToken,
                        p = e.updateCustomerData,
                        g = e.licenseId,
                        h = e.chatId,
                        v = e.source,
                        j = i.useRef(void 0),
                        O = i.useRef(d.W),
                        x = i.useRef(d.W),
                        y = i.createRef();
                    return O.current = function() {
                        if (n && y.current) {
                            var e = {
                                close: a,
                                sendMessage: c,
                                setAttributes: s,
                                updateCustomerData: p,
                                licenseId: g,
                                chatId: h,
                                setExternalLink: function(e) {
                                    m({
                                        externalLink: e
                                    })
                                },
                                setIsFragile: function(e) {
                                    m({
                                        isFragile: e
                                    })
                                },
                                getIdentityTransferToken: function() {
                                    if (un(n)) return f().then((function(e) {
                                        return function(e) {
                                            var t = e.accessToken;
                                            return Object(na.a)(Object(Xt.b)("accounts") + "/customer/identity_transfer", {
                                                method: "POST",
                                                headers: {
                                                    Authorization: "Bearer " + t
                                                },
                                                body: JSON.stringify({
                                                    bearer_type: "customer",
                                                    client_id: "c5e4f61e1a6c3b1521b541bc5c5a2ac5"
                                                })
                                            }).then((function(e) {
                                                return e.json()
                                            })).then((function(e) {
                                                return Object(d.P)(d.b, e)
                                            }))
                                        }(e)
                                    })).catch((function(e) {
                                        return e
                                    }));
                                    throw new Error("Moment App not authorized")
                                }
                            };
                            l && (e.sendSystemMessage = l), j.current = Object(ln.b)({
                                frame: oa(y.current, n, b),
                                url: n,
                                onConnected: function(e) {
                                    var t = e.data;
                                    u(!1), m(t)
                                }
                            }, e), Object(mi.a)(ra, j.current.frame), u(!0), j.current.frame.addEventListener("load", (function e() {
                                j.current && (u(!1), j.current.frame.removeEventListener("load", e))
                            })), m({
                                title: j.current.title
                            }), Object(on.d)("moment_opened", ia(Object(ln.a)(n), v))
                        }
                    }, x.current = function() {
                        j.current && (j.current.destroy(), y.current && (y.current.innerHTML = ""), m(null), u(!1), j.current = void 0), n && Object(on.d)("moment_closed", ia(Object(ln.a)(n)))
                    }, i.useEffect((function() {
                        return O.current(),
                            function() {
                                return x.current()
                            }
                    }), [n]), Object(r.d)("div", {
                        id: t,
                        ref: y,
                        css: aa(o),
                        onScroll: function(e) {
                            ! function(e) {
                                if (e) {
                                    var t = e.scrollTop,
                                        n = e.scrollHeight - e.offsetHeight;
                                    0 === t ? e.scrollTop = 1 : t === n && (e.scrollTop = n - 1)
                                }
                            }(e.currentTarget)
                        }
                    })
                },
                la = n(219),
                sa = "confirmation-modal-label-id",
                ua = {
                    fragile: function() {
                        return "Any data or connection will be lost after you close this window"
                    },
                    change: function(e) {
                        return 'If you open another app, "' + e + '" will be closed.'
                    },
                    "fragile-change": function(e) {
                        return 'If you open another app, "' + e + "\" will be closed. You'll lose data and connection."
                    }
                },
                da = Object(m.z)("div", {
                    target: "ej1cp8k3"
                })("z-index:1500;position:absolute;top:42px;left:50%;min-width:75%;max-width:285px;display:flex;flex-direction:column;background:", (function(e) {
                    return e.theme.colors.surface
                }), ";box-shadow:", (function(e) {
                    return e.theme.boxShadow.lg
                }), ";padding:", (function(e) {
                    return e.theme.spaces.space6
                }), ";border-radius:", (function(e) {
                    return e.theme.borderRadius.md
                }), ";"),
                ma = Object(m.z)(la.a, {
                    target: "ej1cp8k2"
                })("display:flex;width:auto;flex-grow:", (function(e) {
                    return e.secondary ? 1 : 1.5
                }), ";padding:8px 12px;", (function(e) {
                    var t = e.secondary,
                        n = e.theme;
                    return t && {
                        backgroundColor: n.colors.surfaceDecorative,
                        color: n.colors.primaryTextColor
                    }
                }), " &:first-child{margin-right:", (function(e) {
                    return e.theme.spaces.space4
                }), ";}"),
                ba = Object(m.z)("p", {
                    target: "ej1cp8k1"
                })("margin:0;overflow-wrap:break-word;", (function(e) {
                    return e.theme.typography.basic
                }), ";"),
                fa = Object(m.z)("div", {
                    target: "ej1cp8k0"
                })("width:100%;display:flex;align-self:center;margin-top:", (function(e) {
                    return e.theme.spaces.space4
                }), ";"),
                pa = function(e) {
                    var t = e.shown,
                        n = e.onResponse,
                        r = e.mode,
                        a = e.currentAppName,
                        o = i.useRef(null),
                        c = Object(K.c)({
                            isOpen: !0,
                            isDismissable: !0,
                            onClose: function() {
                                return n("canceled")
                            }
                        }, o).overlayProps,
                        l = Object(K.b)().modalProps,
                        u = Object(G.a)({
                            "aria-labelledby": sa
                        }, o).dialogProps,
                        m = Object(me.b)(),
                        f = "fragile" !== r,
                        p = Object(d.E)("fragile", r);
                    return Object(K.d)({
                        isDisabled: m
                    }), i.createElement(i.Fragment, null, i.createElement(de, {
                        shown: t
                    }), i.createElement(b.a, {
                        component: null
                    }, t && i.createElement(v.b, {
                        nodeRef: o
                    }, i.createElement(Y.a, {
                        contain: !0,
                        restoreFocus: !0,
                        autoFocus: !0
                    }, i.createElement(da, Object(s.a)({}, Object(Q.h)(c, u, l), {
                        ref: o
                    }), i.createElement(ba, {
                        id: sa
                    }, ua[r](a)), i.createElement(fa, null, i.createElement(ma, {
                        secondary: !0,
                        onClick: function() {
                            return n("canceled")
                        }
                    }, f ? "Do nothing" : "Cancel"), i.createElement(ma, {
                        destructive: p,
                        onClick: function() {
                            return n("confirmed")
                        }
                    }, f ? "Open another app" : "Close anyway")))))))
                },
                ga = n(220),
                ha = n(258);
            var va = Object(m.z)(B.d, {
                    target: "e1crrbvm1"
                })((function(e) {
                    return "up" === e.direction && {
                        transform: "scaleY(-1)"
                    }
                }), ";"),
                ja = Object(m.z)("div", {
                    target: "e1crrbvm0"
                })("min-height:", (function(e) {
                    return e.visible ? 48 : 0
                }), "px;transition:min-height 300ms ", (function(e) {
                    return e.theme.transitions.easings.swift
                }), ";"),
                Oa = {
                    full: .8,
                    tall: .5,
                    compact: .3
                },
                xa = {
                    name: "zjik7",
                    styles: "display:flex"
                },
                ya = Object(a.c)((function(e, t) {
                    var n = t.chatId,
                        r = function(t) {
                            return void 0 === t && (t = !1), h.f(e, t)
                        },
                        i = function(t) {
                            return h.P(e, {
                                properties: t
                            })
                        },
                        a = function(t) {
                            ["email", "name"].forEach((function(e) {
                                (t[e] && "string" !== typeof t[e] || "" === t[e]) && delete t[e]
                            })), (t.email || t.name) && h.P(e, t)
                        },
                        o = function(t) {
                            return h.B(e, n, t)
                        },
                        c = Object(ha.a)({
                            allowVideoConferencing: Object(l.E)(e, "microphone"),
                            allowClipboardWrite: Object(l.E)(e, "clipboard_write")
                        }),
                        s = function(t) {
                            return h.A(e, n, t)
                        };
                    return function(e) {
                        var t = e.getView("Moment"),
                            n = t.show,
                            u = t.data,
                            d = u.url,
                            m = Object(j.a)(u, ["url"]),
                            b = e.getApplicationState("license");
                        return {
                            show: n,
                            closeMoment: r,
                            sendMessage: o,
                            sendSystemMessage: s,
                            updateSessionUser: i,
                            onUpdateCustomerData: a,
                            momentData: m,
                            url: d,
                            iframeAllowedProperties: c,
                            getCustomerToken: function() {
                                return new Promise((function(t, n) {
                                    e.once("customer_token_response", t), e.once("customer_token_error", n), e.emit("request_customer_token")
                                }))
                            },
                            licenseId: b,
                            isFooterHidden: Object(l.Y)(e),
                            registerRequestCloseMomentListener: function(t) {
                                return e.on("request_close_moment", t),
                                    function() {
                                        return e.off("request_close_moment", t)
                                    }
                            },
                            registerRequestExpandMomentListener: function(t) {
                                return e.on("request_expand_moment", t),
                                    function() {
                                        return e.off("request_expand_moment", t)
                                    }
                            },
                            minimizeWidget: function(t) {
                                return void 0 === t && (t = !1), h.v(e, !1, t)
                            },
                            setNextMomentData: function(t) {
                                return e.updateView("Moment", {
                                    show: !0,
                                    data: t
                                })
                            },
                            chatId: Object(l.c)(e) || void 0
                        }
                    }
                }))((function(e) {
                    var t = e.iframeAllowedProperties,
                        n = e.show,
                        a = e.url,
                        c = e.updateSessionUser,
                        l = e.sendMessage,
                        u = e.sendSystemMessage,
                        m = e.onSendMessage,
                        b = e.getCustomerToken,
                        f = e.licenseId,
                        p = e.onUpdateCustomerData,
                        g = e.isFooterHidden,
                        h = e.registerRequestCloseMomentListener,
                        v = e.registerRequestExpandMomentListener,
                        j = e.minimizeWidget,
                        O = e.setNextMomentData,
                        x = e.chatId,
                        y = Object(o.i)("moment-collapsed"),
                        w = {
                            canBeShown: !1,
                            collapsed: !1,
                            isExpanding: !0,
                            isAnimating: !1,
                            animationEnded: !1,
                            isConfirmationModalShown: !1,
                            confirmationModalMode: "change"
                        },
                        E = i.useReducer(Ki, w, (function() {
                            var t;
                            return Object(s.a)({}, w, {
                                collapsed: !!(null == (t = y.get()) ? void 0 : t.collapsed) && !e.momentData.wasTriggeredByGreeting
                            })
                        })),
                        k = E[0],
                        z = k.canBeShown,
                        S = k.collapsed,
                        C = k.isExpanding,
                        T = k.isAnimating,
                        _ = k.animationEnded,
                        I = k.isConfirmationModalShown,
                        R = k.confirmationModalMode,
                        A = E[1],
                        F = i.useRef(null),
                        M = i.useRef(null),
                        P = i.useState(!1),
                        H = P[0],
                        q = P[1],
                        D = i.useState({}),
                        L = D[0],
                        V = D[1],
                        U = i.useState(!1),
                        N = U[0],
                        W = U[1],
                        G = i.useRef(!1),
                        Y = i.useRef(null),
                        K = Object(ne.f)(),
                        X = Object(o.f)(z && n, (function() {
                            return e.closeMoment(N)
                        })),
                        J = X[0],
                        Z = X[1],
                        $ = T || H,
                        ee = function(e) {
                            var t = e.height;
                            return t && t in Oa ? Oa[t] : Oa.full
                        }(e.momentData),
                        te = ee / .8,
                        re = Object(Q.l)(),
                        ie = Object(be.b)();
                    Object(d.G)(L) && !Object(d.G)(e.momentData) && V(Object(s.a)({}, L, e.momentData)), Object(o.y)(i.useCallback((function() {
                        return A(qi())
                    }), []), 300), i.useEffect((function() {
                        e.momentData.wasTriggeredByGreeting && _ && O(Object(s.a)({}, e.momentData, {
                            url: a,
                            wasTriggeredByGreeting: !1
                        }))
                    }), [_, a, e.momentData, O]), i.useEffect((function() {
                        var e = h((function() {
                            if (G.current) return W(!0), void A(Gi("fragile"));
                            j(!0)
                        }));
                        return function() {
                            return e()
                        }
                    }), [G, j, h]), i.useEffect((function() {
                        var e = v((function(e) {
                            A(Bi()), (null == e ? void 0 : e.nextMoment) && (Y.current = e.nextMoment, A(Gi(G.current ? "fragile-change" : "change")))
                        }));
                        return function() {
                            return e()
                        }
                    }), [v]), i.useEffect((function() {
                        return y.set({
                            collapsed: S
                        })
                    }), [y, S]), i.useEffect((function() {
                        return ie.setMomentExpand(n && !S)
                    }), [n, S, ie]), i.useEffect((function() {
                        J && Object(Q.d)(M.current)
                    }), [J]), i.useEffect((function() {
                        !J && _ && A(Wi())
                    }), [J, _]);
                    return Object(r.d)(i.Fragment, null, Object(r.d)(de, {
                        shown: n && !S,
                        onPress: function() {
                            _ && A(Di())
                        },
                        zIndex: 99
                    }), Object(r.d)(ja, {
                        visible: n
                    }), Object(r.d)(Zi, {
                        show: J || n && S,
                        collapsed: S,
                        nodeRef: F,
                        onTransitionEnd: function() {
                            A(Ui())
                        },
                        onTransitionStart: function() {
                            A(Vi())
                        },
                        durationFactor: te
                    }, Object(r.d)(ta, {
                        ref: F,
                        heightPercentage: ee,
                        collapsed: S,
                        animationEnded: _,
                        isFooterHidden: g,
                        onTransitionEnd: function() {
                            return A(Ni())
                        }
                    }, Object(r.d)(hr, {
                        noShrink: !0
                    }, Object(r.d)(pr, {
                        src: L.icon,
                        "aria-hidden": !0
                    }), Object(r.d)(gr, Object(s.a)({
                        ellipsis: !0,
                        flexFill: !0,
                        tabIndex: -1,
                        ref: M
                    }, K), L.title), L.externalLink && !S && Object(r.d)(ut.a, {
                        href: L.externalLink,
                        rel: "nofollow noopener noreferrer",
                        css: xa,
                        "aria-label": "Open in a new tab"
                    }, Object(r.d)(B.x, {
                        "aria-hidden": !0
                    })), Object(r.d)(B.n, {
                        onPress: function() {
                            return A(Li())
                        },
                        css: xa,
                        "aria-label": "Toggle modal",
                        "aria-expanded": !S,
                        "aria-controls": re
                    }, Object(r.d)(va, {
                        direction: S ? "up" : "down",
                        "aria-hidden": !0
                    })), Object(r.d)(B.n, {
                        onPress: function() {
                            G.current ? A(Gi("fragile")) : Z()
                        },
                        css: xa,
                        "aria-label": "Close modal"
                    }, Object(r.d)(B.e, null))), Object(r.d)(pa, {
                        shown: !S && !C && !!I,
                        mode: R,
                        currentAppName: L.title,
                        onResponse: function(e) {
                            if (A(Yi()), "canceled" !== e || !Object(d.E)("change", R)) return Y.current ? ("confirmed" === e && (G.current = !1, O(Y.current)), void(Y.current = null)) : void("confirmed" === e && Z());
                            A(Di())
                        }
                    }), Object(r.d)(ca, {
                        id: re,
                        hidden: S || $,
                        close: Z,
                        url: a,
                        licenseId: f,
                        chatId: x,
                        source: L.source,
                        sendMessage: function(e) {
                            var t = e.text;
                            l(t), m && m(t)
                        },
                        sendSystemMessage: u,
                        setAttributes: c,
                        updateCustomerData: p,
                        onMomentDataChanged: function(e) {
                            e && "isFragile" in e && (G.current = !!e.isFragile), V((function(t) {
                                return e ? Object(s.a)({}, t, e) : {}
                            }))
                        },
                        onLoadingChanged: q,
                        iframeAllowedProperties: t,
                        getCustomerToken: b
                    }), !S && $ && Object(r.d)(ga.a, {
                        size: "xlarge",
                        style: {
                            margin: "auto"
                        }
                    }))))
                })),
                wa = n(163),
                Ea = n(99),
                ka = n(85);
            var za = Object(m.z)("span", {
                    target: "e1oq7ugp9"
                })((function(e) {
                    var t = e.failed,
                        n = e.theme;
                    return {
                        color: t ? n.colors.error : n.colors.primaryTextColor
                    }
                }), ";"),
                Sa = Object(m.z)("div", {
                    target: "e1oq7ugp8"
                })("flex:1;display:flex;flex-direction:column;margin:2px;min-width:calc(50% - 4px);max-width:100%;height:", (function(e) {
                    var t = e.theme;
                    return e.mobile || "modern" !== t.name ? 140 : 100
                }), "px;"),
                Ca = Object(m.z)("div", {
                    target: "e1oq7ugp7"
                })("border-radius:", (function(e) {
                    return e.theme.borderRadius.xl
                }), ";flex:1;width:100%;height:100%;display:flex;overflow:hidden;position:relative;align-items:center;justify-content:center;"),
                Ta = Object(m.z)("div", {
                    target: "e1oq7ugp6"
                })("color:", (function(e) {
                    return e.theme.colors.secondaryTextColor
                }), ";background-color:", (function(e) {
                    return e.theme.colors.surfaceDecorative
                }), ";width:100%;height:100%;display:flex;align-items:center;justify-content:center;"),
                _a = Object(m.z)("img", {
                    target: "e1oq7ugp5"
                })({
                    name: "q4dzvk",
                    styles: "width:100%;height:auto"
                }),
                Ia = Object(m.z)("div", {
                    target: "e1oq7ugp4"
                })({
                    name: "1uja423",
                    styles: "position:absolute;top:6px;right:6px;z-index:1"
                }),
                Ra = Object(m.z)("div", {
                    target: "e1oq7ugp3"
                })("height:24px;width:24px;display:flex;border-radius:50%;align-items:center;justify-content:center;", (function(e) {
                    var t = e.theme,
                        n = e.success,
                        r = e.error;
                    return n ? {
                        backgroundColor: t.colors.success,
                        color: t.colors.successContrast
                    } : r ? {
                        backgroundColor: t.colors.error,
                        color: t.colors.errorContrast
                    } : void 0
                }), ";"),
                Aa = Object(m.z)("div", {
                    target: "e1oq7ugp2"
                })("opacity:", (function(e) {
                    return e.visible ? 1 : 0
                }), ";transition:opacity 100ms ", (function(e) {
                    return e.theme.transitions.easings.smooth
                }), ";position:absolute;left:6px;right:6px;bottom:6px;display:flex;flex-direction:row-reverse;align-items:center;justify-content:space-between;z-index:1;", rn.p, "{width:20px;height:20px;}"),
                Fa = Object(m.z)("div", {
                    target: "e1oq7ugp1"
                })("border-radius:", (function(e) {
                    return e.theme.borderRadius.md
                }), ";color:", (function(e) {
                    return e.theme.colors.grayscale[0]
                }), ";padding:2px;display:flex;flex-direction:row;align-items:center;justify-content:center;background-color:rgba(0, 0, 0, 0.6);"),
                Ma = Object(m.z)("span", {
                    target: "e1oq7ugp0"
                })((function(e) {
                    return e.theme.typography.caption
                }), ";color:", (function(e) {
                    return e.theme.colors.grayscale[0]
                }), ";cursor:pointer;margin-right:4px;"),
                Pa = {
                    name: "e0dnmk",
                    styles: "cursor:pointer"
                },
                Ha = function(e) {
                    var t = e.failReason,
                        n = i.useRef(null),
                        a = Object(Y.e)({}, n).focusableProps;
                    return Object(r.d)(Ra, Object(s.a)({
                        "aria-label": t,
                        error: !0
                    }, a, {
                        ref: n,
                        tabIndex: 0
                    }), Object(r.d)(rn.c, {
                        css: Pa,
                        size: 24,
                        "aria-hidden": !0
                    }))
                },
                qa = {
                    name: "1nq59d9",
                    styles: "transition:opacity 100ms linear"
                },
                Ba = function(e) {
                    var t = e.name,
                        n = e.failed,
                        i = e.finished,
                        o = e.url,
                        c = e.fileType,
                        l = e.mobile,
                        s = e.alternativeText,
                        u = e.onCancel,
                        d = e.onAlternativeTextEdit,
                        m = e.progress,
                        b = void 0 === m ? 0 : m,
                        f = e.failReason,
                        p = void 0 === f ? "" : f,
                        g = e.insistHover,
                        h = e.onHoverChange,
                        v = Object(ne.i)({
                            onHoverChange: h
                        }),
                        j = v.hoverProps,
                        O = v.isHovered,
                        x = Object(ne.f)().isFocusVisible;
                    return Object(r.d)(a.a, null, (function(e) {
                        return Object(r.d)(Sa, null, Object(r.d)(Ca, j, Object(r.d)(Ia, null, i && Object(r.d)(Ra, {
                            success: !0
                        }, Object(r.d)(rn.I, {
                            size: 24,
                            "aria-hidden": !0
                        })), n && Object(r.d)(Ue, {
                            description: p,
                            allowTouch: !0
                        }, Object(r.d)(Ha, {
                            failReason: p
                        })), !i && !n && Object(r.d)(ga.a, {
                            size: "medium",
                            progress: b,
                            "aria-hidden": !0
                        })), (u || d) && Object(r.d)(Aa, {
                            visible: g || O || x || l
                        }, u && Object(r.d)(Fa, null, Object(r.d)(rn.p, {
                            onPress: u,
                            "aria-label": "remove the " + t + " file"
                        }, Object(r.d)(rn.C, {
                            size: 20,
                            "aria-hidden": !0
                        }))), "image" === c && d && Object(r.d)(Fa, null, Object(r.d)(rn.p, {
                            onPress: d,
                            "aria-label": "add alternative text to the " + t + " image"
                        }, Object(r.d)(rn.i, {
                            size: 20,
                            "aria-hidden": !0
                        })), Object(r.d)(Ma, {
                            onClick: d
                        }, e("alt_text")))), "image" === c && Object(r.d)(_a, {
                            src: o,
                            alt: s || "",
                            style: {
                                opacity: i ? 1 : .25
                            },
                            css: qa
                        }), "other" === c && Object(r.d)(Ta, null, Object(r.d)(rn.n, {
                            size: 56
                        }))), Object(r.d)(za, {
                            ellipsis: !0,
                            failed: n,
                            finished: i
                        }, t))
                    }))
                };
            var Da = Object(m.z)("p", {
                    target: "eprg9im5"
                })("margin-bottom:", (function(e) {
                    var t = e.theme,
                        n = e.mobile;
                    return "modern" !== t.name && n ? 0 : 4
                }), "px;", (function(e) {
                    return e.theme.typography.caption
                }), " ", dt(), ";color:", (function(e) {
                    return e.theme.colors.primaryTextColor
                }), ";margin:0;padding:0 12px;max-width:100%;max-height:50px;"),
                La = Object(m.z)("div", {
                    target: "eprg9im4"
                })((function(e) {
                    var t = e.theme;
                    return !e.mobile && "modern" === t.name && "max-height: 230px; overflow-y: auto;"
                }), ";"),
                Va = Object(m.z)("div", {
                    target: "eprg9im3"
                })("height:", (function(e) {
                    var t = e.theme;
                    return e.mobile || "modern" !== t.name ? 145 : 140
                }), "px;overflow:hidden;display:flex;align-items:center;justify-content:center;width:100%;"),
                Ua = Object(m.z)("div", {
                    target: "eprg9im2"
                })("padding:", (function(e) {
                    var t = e.theme;
                    return t.spaces.space3 + " " + t.spaces.space5
                }), ";display:flex;flex-direction:row;justify-content:center;align-items:center;max-width:100%;"),
                Na = Object(m.z)(nn.a, {
                    target: "eprg9im1"
                })("height:34px;", (function(e) {
                    var t = e.theme.isRtl ? "left" : "right";
                    return Object(r.c)("border-", t, ":none;border-top-", t, "-radius:0;border-bottom-", t, "-radius:0;")
                }), ";"),
                Wa = Object(m.z)(B.n, {
                    target: "eprg9im0"
                })("color:", (function(e) {
                    var t = e.theme;
                    return e.highlighted ? t.colors.ctaText : t.colors.disabledContrast
                }), ";background-color:", (function(e) {
                    var t = e.theme;
                    return e.highlighted ? t.colors.cta : t.colors.disabled
                }), ";height:34px;width:34px;justify-content:center;align-items:center;display:flex;padding:6px 8px;", (function(e) {
                    var t = e.theme,
                        n = t.isRtl ? "left" : "right",
                        i = t.isRtl ? "right" : "left";
                    return Object(r.c)("border-top-", i, "-radius:0;border-bottom-", i, "-radius:0;border-top-", n, "-radius:6px;")
                }), " transition:background 100ms linear;"),
                Ga = {
                    name: "q4dzvk",
                    styles: "width:100%;height:auto"
                },
                Ya = function(e) {
                    var t = e.url,
                        n = e.alternativeText,
                        o = e.onAlternativeTextChanged,
                        c = e.mobile,
                        l = e.titleId,
                        s = i.useState(n || ""),
                        u = s[0],
                        d = s[1],
                        m = Object(ne.f)().isFocusVisible,
                        b = Object(Q.l)();
                    return Object(r.d)(a.a, null, (function(e) {
                        return Object(r.d)(La, {
                            mobile: c
                        }, Object(r.d)(Va, {
                            mobile: c
                        }, Object(r.d)("img", {
                            src: t,
                            css: Ga,
                            alt: n
                        })), Object(r.d)(Ua, null, Object(r.d)(Na, {
                            autoFocus: !0,
                            "aria-labelledby": l,
                            "aria-describedby": b,
                            maxLength: 16384,
                            value: u,
                            placeholder: e("describe_image"),
                            onChange: function(e) {
                                var t = e.target;
                                return d(t.value)
                            }
                        }), Object(r.d)(Wa, {
                            "aria-label": "save the image's alternative text",
                            highlighted: u !== n || m,
                            disabled: u === n,
                            onPress: function() {
                                o(u)
                            }
                        }, Object(r.d)(B.a, {
                            size: 24
                        }))), Object(r.d)(Da, {
                            id: b,
                            mobile: c
                        }, e("alternative_text_description")))
                    }))
                },
                Ka = n(102);
            var Qa = Object(m.z)("h2", {
                    target: "e1k6tlos7"
                })((function(e) {
                    var t = e.failed,
                        n = e.theme;
                    return t && {
                        color: n.typography.errorCaption.color
                    }
                }), " padding:0 6px;font-size:14px;font-weight:normal;align-self:center;margin:0;"),
                Xa = Object(m.z)("div", {
                    target: "e1k6tlos6"
                })({
                    name: "189qznn",
                    styles: "display:flex;cursor:pointer"
                }),
                Ja = Object(m.z)("div", {
                    target: "e1k6tlos5"
                })("transition:max-height ", (function(e) {
                    return e.longAnimation ? 600 : 400
                }), "ms ", (function(e) {
                    return e.theme.transitions.easings.swift
                }), ";overflow:hidden;max-height:249px;"),
                Za = Object(m.z)("div", {
                    target: "e1k6tlos4"
                })("height:auto;", (function(e) {
                    return e.edit && {
                        margin: "0 -8px"
                    }
                }), ";"),
                $a = Object(m.z)("div", {
                    target: "e1k6tlos3"
                })("max-height:", (function(e) {
                    var t = e.theme;
                    return e.mobile || "modern" !== t.name ? 200 : 125
                }), "px;overflow:auto;display:flex;flex-direction:row;flex-wrap:wrap;padding:4px 0;"),
                eo = Object(m.z)("hr", {
                    target: "e1k6tlos2"
                })("margin:", 8, "px -", 8, "px 0;border:0;border-bottom:1px solid rgba(0, 0, 0, 0.1);"),
                to = Object(m.z)(rn.e, {
                    target: "e1k6tlos1"
                })((function(e) {
                    return "up" === e.direction && {
                        transform: "scaleY(-1)"
                    }
                }), ";"),
                no = {
                    name: "gc6sdx",
                    styles: "padding-left:4px"
                },
                ro = Object(m.z)(B.v, {
                    target: "e1k6tlos0"
                })("padding:", (function(e) {
                    var t = e.theme,
                        n = e.isEdit,
                        r = e.expanded;
                    return !e.mobile && "modern" === t.name && n && r ? "8px 8px 0" : "8px"
                }), ";", (function(e) {
                    return e.theme.typography.basic
                }), ";color:", (function(e) {
                    return e.theme.colors.primaryTextColor
                }), ";overflow:hidden;"),
                io = {
                    name: "x4j9dr",
                    styles: "margin-top:6px;max-width:100%"
                },
                ao = {
                    name: "13fmgtn",
                    styles: "transform:scaleX(-1)"
                },
                oo = Object(ka.createSelector)([d.D], (function(e) {
                    return e.map((function(e) {
                        return Object(s.a)({
                            id: e.id
                        }, e.properties)
                    }))
                })),
                co = Object(a.c)((function(e, t) {
                    var n = t.chatId,
                        r = function(t) {
                            e.emit("cancel_upload", {
                                eventId: t
                            })
                        },
                        i = function(t, r) {
                            e.updateEvent(n, t, {
                                properties: {
                                    alternativeText: r
                                }
                            })
                        },
                        a = function() {
                            e.emit("send_file_events")
                        };
                    return function(e) {
                        var t = e.getApplicationState(),
                            n = t.isSendingFileEvents,
                            o = t.mobile,
                            c = t.config,
                            s = t.license,
                            u = t.group,
                            d = t.requestedGroup,
                            m = oo(Object(l.p)(e));
                        return {
                            mobile: o,
                            persistKey: Object(Ka.a)({
                                license: s,
                                group: u,
                                requestedGroup: d
                            }),
                            isSendingFileEvents: n,
                            uploadEntries: m,
                            cancelUpload: r,
                            setAlternativeText: i,
                            sendFiles: a,
                            localize: e.localize,
                            themeName: c.theme.name
                        }
                    }
                }))((function(e) {
                    var t = e.uploadEntries,
                        n = e.uploadEnabled,
                        a = e.cancelUpload,
                        o = e.localize,
                        c = e.mobile,
                        l = e.persistKey,
                        u = e.sendFiles,
                        m = e.isSendingFileEvents,
                        b = e.setAlternativeText,
                        f = e.themeName,
                        g = e.scrollToBottom,
                        h = Object(Q.l)(),
                        v = Object(Q.l)(),
                        j = i.useState(!0),
                        O = j[0],
                        x = j[1],
                        y = i.useState(!1),
                        w = y[0],
                        E = y[1],
                        k = i.useState(!1),
                        z = k[0],
                        S = k[1],
                        C = i.useState(null),
                        T = C[0],
                        _ = C[1],
                        I = i.useState(""),
                        R = I[0],
                        A = I[1],
                        F = i.useRef(null),
                        M = i.useRef(null),
                        P = function(e, t) {
                            var n = e.filter((function(e) {
                                    return e.failed
                                })),
                                r = e.filter((function(e) {
                                    return e.finished
                                })).length,
                                i = n.length,
                                a = e.length,
                                o = t("file_upload_status").replace("%finishedCount%", String(r)).replace("%totalCount%", String(a));
                            switch (!0) {
                                case i > 0:
                                    return {
                                        failedCount: i,
                                        uploadStatus: "error",
                                        title: i > 1 ? t("files_failed_to_upload").replace("%files%", String(i)) : n[0].failReason
                                    };
                                case r === a:
                                    return {
                                        uploadStatus: "success",
                                        title: o
                                    };
                                default:
                                    return {
                                        uploadStatus: "pending",
                                        title: o
                                    }
                            }
                        }(t, o),
                        H = "error" === P.uploadStatus && t.length === P.failedCount,
                        q = function() {
                            R && A("")
                        },
                        B = i.useCallback((function() {
                            return c || "modern" !== f ? 249 : 228
                        }), [f, c]),
                        D = i.useCallback((function(e) {
                            return (t.length > 2 || e ? B() : 201) + "px"
                        }), [t, B]),
                        L = i.useCallback((function(e) {
                            U(e) && (F.current.style.maxHeight = e)
                        }), []),
                        V = function(e) {
                            return M.current.style.height = e
                        },
                        U = function(e) {
                            return F.current.style.maxHeight !== e
                        },
                        N = i.useCallback((function() {
                            O ? (E(!0), L("0px")) : x(!0)
                        }), [O, L]),
                        W = function(e) {
                            if (O) {
                                var t = D(!!e);
                                !e && U(t) ? (_(null), S(!0), V(M.current.clientHeight + "px"), L(t)) : (L(B() + "px"), _(e))
                            } else _(e)
                        },
                        G = i.useCallback((function() {
                            w ? (x(!1), E(!1)) : z && (V("auto"), S(!1))
                        }), [w, z]);
                    return i.useEffect((function() {
                        t.length && O && !w && L(D(!!T))
                    }), [t.length, O, w, L, D, T]), i.useEffect((function() {
                        if (Object(Ea.b)("session")) {
                            var e = function() {
                                Object(d.G)(t) || function(e, t) {
                                    var n = e.filter((function(e) {
                                        return e.finished
                                    })).map((function(e) {
                                        return Object(s.a)({}, e, {
                                            url: e.serverUrl
                                        })
                                    }));
                                    Object(d.G)(n) || window.sessionStorage.setItem(t, JSON.stringify(n))
                                }(t, l)
                            };
                            return window.addEventListener("beforeunload", e),
                                function() {
                                    return window.removeEventListener("beforeunload", e)
                                }
                        }
                    }), [t, l]), Object(r.d)(ro, {
                        isEdit: T,
                        expanded: !w && O,
                        mobile: c
                    }, Object(r.d)(p.b, {
                        message: P.title,
                        clearOnUnmount: !0,
                        "aria-live": "error" === P.uploadStatus ? "assertive" : "polite"
                    }), Object(r.d)(Xa, {
                        onClick: function(e) {
                            e.stopPropagation(), N()
                        }
                    }, T ? Object(r.d)(rn.p, {
                        "aria-label": "go back to upload list",
                        onPress: function() {
                            W(null)
                        }
                    }, Object(r.d)(rn.a, {
                        size: 24,
                        css: ao,
                        "aria-hidden": !0
                    })) : Object(r.d)(i.Fragment, null, "pending" === P.uploadStatus ? Object(r.d)(ga.a, {
                        size: "medium",
                        "aria-hidden": !0
                    }) : "success" === P.uploadStatus ? Object(r.d)(Ra, {
                        success: !0
                    }, Object(r.d)(rn.I, {
                        size: 24,
                        "aria-label": "Upload success"
                    })) : Object(r.d)(Ra, {
                        error: !0
                    }, Object(r.d)(rn.c, {
                        size: 24,
                        "aria-label": "Upload error"
                    }))), Object(r.d)(Qa, Object(s.a)({
                        id: v,
                        flexFill: !0,
                        ellipsis: !0
                    }, "error" === P.uploadStatus && {
                        failed: !0,
                        title: P.title
                    }), T ? o("add_alternative_text") : P.title), Object(r.d)(rn.p, {
                        css: no,
                        "aria-label": "Toggle upload list",
                        "aria-controls": h,
                        "aria-expanded": O,
                        onPress: N
                    }, Object(r.d)(rn.q, {
                        size: 24,
                        "aria-hidden": !0
                    }, Object(r.d)(to, {
                        direction: O && !w ? "down" : "up",
                        size: 24
                    })))), O && !w && Object(r.d)(eo, null), Object(r.d)(Ja, {
                        ref: F,
                        onTransitionEnd: G,
                        longAnimation: !O || w
                    }, O && Object(r.d)(Za, {
                        id: h,
                        edit: !!T,
                        ref: M
                    }, T ? Object(r.d)(Ya, Object(s.a)({
                        titleId: v
                    }, t.find((function(e) {
                        return e.id === T
                    })), {
                        onAlternativeTextChanged: function(e) {
                            W(null), b(T, e)
                        },
                        mobile: c
                    })) : Object(r.d)(i.Fragment, null, Object(r.d)($a, {
                        mobile: c
                    }, t.map((function(e) {
                        return Object(r.d)(Ba, Object(s.a)({}, e, {
                            key: e.id,
                            mobile: c,
                            failed: !!e.failed,
                            insistHover: R === e.id,
                            onHoverChange: q,
                            onCancel: !m || e.failed ? function() {
                                return function(e) {
                                    if (!c && t.length > 1) {
                                        var n = Object(d.q)((function(t) {
                                                return t.id === e
                                            }), t),
                                            r = n === t.length - 1;
                                        A(t[n + (r ? -1 : 1)].id)
                                    }
                                    a(e)
                                }(e.id)
                            } : null,
                            onAlternativeTextEdit: m ? null : function() {
                                return W(e.id)
                            }
                        }))
                    }))), Object(r.d)(la.a, {
                        onClick: function() {
                            u(), g({
                                duration: 0
                            })
                        },
                        disabled: H || !n,
                        pending: m || "pending" === P.uploadStatus,
                        css: io
                    }, o("send_files"))))))
                }));
            var lo = Object(m.z)("div", {
                    target: "ezpiwsd0"
                })({
                    name: "1u57r43",
                    styles: "position:absolute;bottom:0;left:0;right:0;z-index:100"
                }),
                so = Object(a.c)((function(e, t) {
                    var n = t.markAsSeen,
                        r = function() {
                            l.u(c.d, Date.now(), e).reverse().forEach((function(e) {
                                return n(e.id)
                            }))
                        };
                    return function(e) {
                        var t = !Object(d.G)(l.p(e)),
                            n = e.getApplicationState("mobile"),
                            i = l.k(e, c.d),
                            a = e.getUnseenCount(c.d),
                            o = i && i.properties ? i.properties.text : null;
                        return {
                            isFileUploadAllowed: l.eb(e),
                            isFileUploadPossible: l.N(e),
                            isUploadingFiles: t,
                            previewText: o,
                            unseenCount: a,
                            mobile: n,
                            markAllEventsAsSeen: r,
                            localize: e.localize
                        }
                    }
                }))((function(e) {
                    var t = e.isFileUploadAllowed,
                        n = e.isFileUploadPossible,
                        r = e.isUploadingFiles,
                        a = e.previewText,
                        c = e.unseenCount,
                        l = e.chatId,
                        s = e.mobile,
                        u = e.scrollToBottom,
                        d = e.markAllEventsAsSeen,
                        m = e.isOnBottomSource,
                        f = e.isScrollable,
                        g = e.localize,
                        h = a,
                        j = Object(o.w)(m),
                        O = c > 0 && !j && f,
                        x = i.useState(O),
                        y = x[0],
                        w = x[1];
                    return h || (h = g(c > 1 ? "new_messages" : "new_message")), !O && y && w(!1), i.useEffect((function() {
                        if (O) {
                            var e = setTimeout((function() {
                                return w(!0)
                            }), 300);
                            return function() {
                                return clearTimeout(e)
                            }
                        }
                    }), [O]), i.createElement(lo, null, i.createElement(b.a, {
                        appear: !0,
                        component: null
                    }, t && r && i.createElement(v.a, {
                        key: "upload"
                    }, i.createElement(co, {
                        scrollToBottom: u,
                        chatId: l,
                        uploadEnabled: n
                    })), y && i.createElement(v.a, {
                        key: "unseen"
                    }, i.createElement(B.H, {
                        text: h,
                        stickToEdge: s,
                        unseenCount: c,
                        onClick: u,
                        onClose: d
                    }))), y && i.createElement(p.b, {
                        message: h,
                        clearOnUnmount: !0,
                        "aria-live": "assertive"
                    }))
                })),
                uo = function(e) {
                    var t = Object(u.g)().Maximized.css.background;
                    return i.createElement(ga.a, Object(s.a)({}, e, {
                        adjustToColor: t,
                        ariaLabel: "Loading previous messages"
                    }))
                };
            var mo = Object(m.z)("div", {
                    target: "e1fh44if0"
                })({
                    name: "1f0bicm",
                    styles: "padding:1em;display:flex;flex-direction:column;align-items:center;justify-content:center;font-size:0.9em"
                }),
                bo = function(e) {
                    return i.createElement(mo, null, i.createElement(la.a, e))
                },
                fo = Object(a.c)((function(e) {
                    var t = function() {
                            return h.K(e)
                        },
                        n = function() {
                            return h.L(e, c.d)
                        };
                    return function(e) {
                        var r = "startChatAgain" === l.i(e, c.d),
                            i = e.getChat(c.d).properties,
                            a = i.starting,
                            o = i.startChatAgainPending,
                            s = e.localize(r ? "embedded_start_chat_again" : "embedded_greeting_accept");
                        return {
                            startAction: r ? n : t,
                            buttonLabel: s,
                            isPending: a || o
                        }
                    }
                }))((function(e) {
                    var t = e.isPending,
                        n = e.buttonLabel,
                        r = e.startAction,
                        a = e.onClick,
                        o = void 0 === a ? d.W : a;
                    return i.createElement(bo, {
                        disabled: t,
                        pending: t,
                        onClick: function(e) {
                            r(), o(e)
                        }
                    }, n)
                }));
            var po = Object(m.z)("div", {
                    target: "e1onopp21"
                })("position:absolute;bottom:0;left:0;right:0;background:", (function(e) {
                    return e.theme.colors.caution
                }), ";z-index:2;color:", (function(e) {
                    return e.theme.colors.cautionContrast
                }), ";text-align:center;font-size:0.9em;line-height:2.8em;transform:translateY(100%);"),
                go = Object(m.z)("div", {
                    target: "e1onopp20"
                })({
                    name: "1fgmm64",
                    styles: "flex-grow:1;height:100%;position:relative;min-height:0;z-index:0;-webkit-overflow-scrolling:touch"
                }),
                ho = {
                    name: "jddw9f",
                    styles: "position:absolute;bottom:0;left:50%;z-index:3;transform:translate(-50%, 50%)"
                },
                vo = function(e) {
                    return e.events[0].id
                },
                jo = function(e) {
                    return 0 !== e.length ? vo(e[0]) : null
                },
                Oo = function(e) {
                    var t = Object(d.N)(e);
                    if (!t) return null;
                    var n = Object(d.N)(t.events);
                    return n ? n.id : null
                };
            var xo = Object(f.a)([function(e, t) {
                    return e.getTimeline(t)
                }, d.D], (function(e, t) {
                    var n = l.H(t);
                    return e.map((function(e, r) {
                        var i = 0 === r,
                            a = e.showDate && !i && n;
                        return Object(s.a)({}, e, {
                            isThreadBoundary: a,
                            authorData: t.getUser(e.author)
                        })
                    }))
                }))((function(e, t) {
                    return t
                })),
                yo = Object(a.c)((function(e, t) {
                    var n = t.id,
                        r = e.getApplicationState("isPreview") ? d.W : function() {
                            h.I(e)
                        },
                        i = e.localize,
                        a = function() {
                            return e.updateChat(n, {
                                properties: {
                                    loadingHistory: !0
                                }
                            })
                        },
                        o = function(t) {
                            return e.requestUpdateEvent(n, t, {
                                seen: !0
                            }).catch(d.W)
                        },
                        c = function(t, r) {
                            h.B(e, n, t, r)
                        },
                        s = function(t) {
                            var r = t.eventId,
                                i = t.buttonId,
                                a = l.b(e);
                            e.sendEvent(n, {
                                type: "rich_message_postback",
                                thread: a,
                                properties: {
                                    eventId: r,
                                    postback: {
                                        id: i,
                                        toggled: !0
                                    }
                                }
                            })
                        },
                        u = function(t) {
                            return l.Q(e, t)
                        },
                        m = function(t) {
                            return h.G(e, t)
                        },
                        b = function(t) {
                            return h.P(e, {
                                properties: t
                            })
                        },
                        f = function(t) {
                            var n = t.event,
                                r = t.button;
                            return h.o(e, n, r)
                        };
                    return function(e) {
                        var t = e.getChat(n),
                            d = t.active,
                            p = t.properties,
                            g = p.agentIsTyping,
                            h = p.loadingHistory,
                            v = p.queued,
                            j = p.ended,
                            O = l.d(n, e),
                            x = l.A(e, n),
                            y = e.getUnseenCount(n),
                            w = l.H(e) && l.X(e);
                        return {
                            agent: O,
                            active: d,
                            ended: j,
                            loadHistory: a,
                            isThreadStickerEnabled: w,
                            hasMoreHistory: x,
                            markAsSeen: o,
                            sendMessage: c,
                            queued: v,
                            sendPostback: s,
                            showPrechat: r,
                            localize: i,
                            updateSessionUser: b,
                            showMoment: m,
                            unseenCount: y,
                            timeline: xo(e, n, e.getState()),
                            activeQuickReply: l.s(n, e),
                            agentIsTyping: g && !!O,
                            shouldLoadHistory: x && !h,
                            isLoadingHistory: h,
                            showAvatar: l.h("agentAvatar", e).enabled,
                            pageFocused: e.getApplicationState("pageFocused"),
                            inputMode: l.i(e, n),
                            reconnecting: l.nb(e),
                            displayOfflineInformation: l.lb(e),
                            lastSeenEvent: y > 0 && e.getLastSeenAgentEvent(n),
                            isGreeting: u,
                            handleRichGreetingButtonClicked: f,
                            isFillableFormDisplayed: l.O(e)
                        }
                    }
                }))((function(e) {
                    var t = e.displayOfflineInformation,
                        n = e.active,
                        a = e.ended,
                        l = e.activeQuickReply,
                        f = e.agent,
                        g = e.isThreadStickerEnabled,
                        h = e.hasMoreHistory,
                        j = e.pageFocused,
                        O = e.id,
                        x = e.inputMode,
                        y = e.loadHistory,
                        w = e.localize,
                        E = e.queued,
                        k = e.reconnecting,
                        z = e.shouldLoadHistory,
                        S = e.showAvatar,
                        T = e.showPrechat,
                        _ = e.timeline,
                        I = e.agentIsTyping,
                        R = e.mobile,
                        A = e.unseenCount,
                        F = e.lastSeenEvent,
                        P = e.scrollingDeltaSource,
                        H = e.sendMessage,
                        B = e.showMoment,
                        D = e.handleRichGreetingButtonClicked,
                        L = e.isOnBottomSource,
                        U = e.isFillableFormDisplayed,
                        N = e.isLoadingHistory,
                        W = i.useRef(),
                        G = Object(o.x)(!1),
                        Y = i.useRef(!1),
                        K = i.useRef(),
                        Q = i.useState(A),
                        X = Q[0],
                        J = Q[1],
                        Z = i.useState("hidden"),
                        $ = Z[0],
                        ee = Z[1],
                        te = i.useState(j),
                        ne = te[0],
                        re = te[1],
                        ie = i.useState(F)[0],
                        ae = Object(o.d)((function() {
                            return function(e, t, n, r) {
                                return e.some((function(e) {
                                    return e.type === c.g
                                })) ? "draft" : t ? "newMessageDivider" : r || n || !e.some((function(e) {
                                    return e.events.some((function(e) {
                                        return "boosters" === e.type
                                    }))
                                })) ? "form" : "boosters"
                            }(_, X, n, a)
                        })),
                        oe = Object(o.e)(k),
                        ce = "modern" !== Object(u.g)().name && S;
                    i.useEffect((function() {
                        !j && ne ? re(!1) : j && !ne && re(!0)
                    }), [j, ne]);
                    var le = i.useCallback((function(e) {
                            e && z && y()
                        }), [z, y]),
                        se = i.useCallback((function() {
                            clearTimeout(K.current), K.current = setTimeout((function() {
                                P.next({
                                    deltaX: 0,
                                    deltaY: 40
                                })
                            }), 4e3)
                        }), [P]),
                        ue = i.useCallback((function(e) {
                            L.next(e), re(!0), e && U ? se() : clearTimeout(K.current)
                        }), [L, U, se]);
                    Object(o.p)((function() {
                        clearTimeout(K.current)
                    }));
                    var de = Object(o.u)(W, {
                            firstItemKey: jo(_),
                            lastItemKey: Oo(_),
                            onIsScrolledToTopChanged: le,
                            onIsScrolledToBottomChanged: ue,
                            onIsUserScrollingChanged: G.next,
                            onScrollDeltaChanged: P.next
                        }),
                        me = de.scrollToTop,
                        be = de.scrollToBottom,
                        fe = de.getIsOnBottom,
                        pe = de.onWheel,
                        ge = de.onTouchStart,
                        he = de.getIsScrollable,
                        ve = de.setScrollTargetNode,
                        je = i.useCallback((function(e) {
                            fe() && be(e)
                        }), [fe, be]);
                    i.useEffect((function() {
                        U ? se() : clearTimeout(K.current)
                    }), [U, se]);
                    var Oe = i.useCallback((function() {
                            je({
                                duration: 0
                            })
                        }), [je]),
                        xe = function(e) {
                            return void 0 === e && (e = d.W),
                                function() {
                                    be({
                                        duration: 0
                                    }), e()
                                }
                        },
                        ye = Object(o.r)((function() {
                            fe() ? be() : be({
                                duration: 0
                            }), J(0)
                        })),
                        we = function(e) {
                            var t = i.useRef(e);
                            return i.useEffect((function() {
                                t.current = e
                            })), i.useMemo((function() {
                                return {
                                    handleActionButtonClick: function(e) {
                                        var n = e.button,
                                            r = e.event,
                                            i = t.current,
                                            a = i.active,
                                            o = i.showMoment,
                                            c = i.sendPostback,
                                            l = i.sendMessage,
                                            s = i.handleSendMessage,
                                            u = i.isGreeting,
                                            d = i.handleRichGreetingButtonClicked;
                                        if (u(r)) return d({
                                            event: r,
                                            button: n
                                        }), void("message" === n.type && s());
                                        if (a) switch (n.type) {
                                            case "webview":
                                                return c({
                                                    eventId: r,
                                                    buttonId: n.postbackId
                                                }), void o({
                                                    url: n.value,
                                                    height: n.webviewHeight,
                                                    source: "rich_message"
                                                });
                                            case "message":
                                                return l(n.text, {
                                                    type: "action_button",
                                                    event: r,
                                                    button: n
                                                }), void s();
                                            default:
                                                return void c({
                                                    eventId: r,
                                                    buttonId: n.postbackId
                                                })
                                        }
                                    },
                                    markAsSeen: function(e) {
                                        return t.current.markAsSeen(e)
                                    }
                                }
                            }), [])
                        }(Object(s.a)({}, e, {
                            handleSendMessage: ye
                        })),
                        Ee = i.useCallback((function(e) {
                            Y.current = e
                        }), []),
                        ke = !!(I || E || l || t);
                    return i.useEffect((function() {
                        ke && je()
                    }), [ke, je]), i.useEffect((function() {
                        if (R) {
                            var e = function() {
                                Y.current && be({
                                    duration: 0
                                })
                            };
                            return window.addEventListener("resize", e),
                                function() {
                                    return window.removeEventListener("resize", e)
                                }
                        }
                    }), [R, be]), i.useEffect((function() {
                        return ee("auto")
                    }), []), Object(o.t)({
                        mainElementRef: W,
                        itemsCount: _.reduce((function(e, t) {
                            return e + t.events.length
                        }), 0),
                        tableEdgeReached: function(e) {
                            "previous" === e && me({
                                duration: 0
                            })
                        }
                    }), Object(r.d)(C, {
                        isOnBottomSource: L,
                        beginingOfTime: _.length > 0 ? _[0].timestamp : null,
                        rootRef: W
                    }, Object(r.d)(m.f, {
                        noShrink: !0
                    }, Object(r.d)(qt, {
                        chatId: O,
                        scrollingDeltaSource: P,
                        isOnBottomSource: L,
                        isLoadingHistory: N
                    }, g && Object(r.d)(M, {
                        css: ho,
                        isUserScrollingSource: G
                    }), k && !oe && Object(r.d)(i.Fragment, null, Object(r.d)(p.b, {
                        message: w("reconnecting"),
                        clearOnUnmount: !0,
                        "aria-live": "assertive"
                    }), Object(r.d)(po, null, w("reconnecting") + "\u2026")))), Object(r.d)(b.a, {
                        appear: !0,
                        component: null
                    }, Object(r.d)(v.d, null, Object(r.d)(go, null, Object(r.d)(so, {
                        chatId: O,
                        isScrollable: he(),
                        isOnBottomSource: L,
                        scrollToBottom: be,
                        markAsSeen: we.markAsSeen
                    }), Object(r.d)(m.k, {
                        active: ne,
                        css: function(e) {
                            return function(e) {
                                var t = e.theme,
                                    n = e.overflow;
                                return Object(r.c)("background:transparent;overscroll-behavior:contain;overflow-y:", t.isRtl ? n : "auto", ";position:absolute;top:0;bottom:0;left:0;right:0;")
                            }({
                                theme: e,
                                overflow: $
                            })
                        },
                        onWheel: pe,
                        onTouchStart: ge,
                        ref: W
                    }, h && Object(r.d)(m.q, null, Object(r.d)(uo, {
                        size: "medium",
                        style: {
                            margin: "auto"
                        }
                    })), _.map((function(e) {
                        return Object(r.d)(i.Fragment, {
                            key: vo(e)
                        }, e.isThreadBoundary && Object(r.d)(q, {
                            timestamp: e.timestamp
                        }), ie && X > 0 && e.events.some((function(e) {
                            return e.id === ie.id
                        })) && Object(r.d)(V, {
                            unseenCount: X,
                            setScrollTargetNode: ve
                        }), Object(r.d)(m.j, {
                            isOwn: e.own,
                            onlyFirstWithMeta: !0,
                            avatar: ce && "carousel" !== e.type && e.authorData.avatar ? e.authorData.avatar : void 0
                        }, e.events.map((function(t, n) {
                            return Object(r.d)(ei, {
                                chatId: O,
                                id: t.id,
                                key: t.id,
                                showMetaOnClick: 0 !== n,
                                radiusType: e.radiusType,
                                listItemHandlers: we,
                                scrollTarget: ae,
                                setScrollTargetNode: !X && ve,
                                showMoment: B,
                                scrollToBottom: be
                            })
                        }))))
                    })), l && Object(r.d)("div", {
                        role: "row"
                    }, Object(r.d)("div", {
                        role: "gridcell"
                    }, Object(r.d)(ti.b, {
                        "aria-labelledby": l.id,
                        onSelect: function(e) {
                            var t = l.properties.quickReplies[e];
                            l.properties.invitation ? D({
                                event: l.id,
                                button: t
                            }) : H(t.text, {
                                type: "quick_reply",
                                event: l.id,
                                button: t
                            }), ye()
                        },
                        replies: l.properties.quickReplies
                    }))), I && Object(r.d)(i.Fragment, null, Object(r.d)(p.b, {
                        clearOnUnmount: !0,
                        "aria-live": "polite",
                        message: w("operator_is_typing", {
                            operator: f.name
                        }).replace("...", "")
                    }), Object(r.d)(b.a, {
                        appear: !0,
                        component: null
                    }, Object(r.d)(v.a, {
                        exit: !1
                    }, Object(r.d)(wa.b, {
                        avatar: ce ? f.avatar : null
                    })))))))), "requestPrechat" === x ? Object(r.d)(bo, {
                        onClick: xe(T)
                    }, w("embedded_greeting_accept")) : "startChat" === x || "startChatAgain" === x ? Object(r.d)(fo, {
                        onClick: xe()
                    }) : "text" === x ? Object(r.d)(Si, {
                        chatId: O,
                        onSendMessage: ye,
                        onHeightChange: Oe,
                        onFocusChange: Ee
                    }) : null, Object(r.d)(ya, {
                        chatId: O,
                        onSendMessage: ye
                    }))
                }));

            function wo() {
                var e = Object(O.a)(["\n\t&-enter,\n\t&-appear {\n\t\topacity: 0;\n\t}\n\n\t&-enter&-enter-active,\n\t&-appear&-appear-active {\n\t\topacity: 1;\n\t\ttransition: opacity ", "ms ", ";\n\t}\n\n\t&-exit {\n\t\topacity: 1;\n\t}\n\n\t&-exit&-exit-active {\n\t\topacity: 0;\n\t\ttransition: opacity ", "ms ", ";\n\t}\n"]);
                return wo = function() {
                    return e
                }, e
            }
            var Eo = Object(m.z)("div", {
                    displayName: "View",
                    section: !0,
                    target: "e1u2umur1"
                })({
                    name: "73jfg1",
                    styles: "flex-grow:1;display:flex;height:100%;min-height:0;padding-bottom:1em"
                }),
                ko = Object(m.z)("div", {
                    displayType: "ViewContent",
                    target: "e1u2umur0"
                })("overflow-y:auto;height:100%;flex-grow:1;padding:", (function(e) {
                    return e.full ? "0 !important" : "1em 1em 0 1em"
                }), ";"),
                zo = function(e, t) {
                    return e(wo(), 200, t.transitions.easings.sharp, 200, t.transitions.easings.sharp)
                },
                So = {
                    name: "1d3w5wq",
                    styles: "width:100%"
                },
                Co = function(e) {
                    var t = e.children,
                        n = e.full,
                        i = void 0 !== n && n;
                    return Object(r.d)(Eo, null, Object(r.d)(r.a, null, (function(e) {
                        var n = e.css,
                            a = e.theme;
                        return Object(r.d)(b.a, {
                            css: So
                        }, Object(r.d)(x.a, {
                            appear: !0,
                            classNames: zo(n, a),
                            timeout: 200
                        }, Object(r.d)(ko, {
                            full: i
                        }, t)))
                    })))
                },
                To = Object(m.z)(m.c, {
                    target: "ea4v29u0"
                })("background-color:", (function(e) {
                    return e.theme.colors.surface
                }), ";"),
                _o = function() {
                    return i.createElement(a.a, null, (function(e) {
                        return i.createElement(Co, null, i.createElement(To, null, i.createElement(m.m, null, e("lost_connection"))))
                    }))
                };

            function Io() {
                var e = Object(O.a)(["\n\t50% {\n\t\topacity: 0.0;\n\t}\n"]);
                return Io = function() {
                    return e
                }, e
            }
            var Ro = Object(r.e)(Io()),
                Ao = Object(r.c)("background:currentColor;opacity:0.3;animation:", Ro, " 1.5s linear 0s infinite;"),
                Fo = Object(r.c)(Ao, ";"),
                Mo = Object(m.z)("div", {
                    target: "e1uut4cd4"
                })("width:", (function(e) {
                    return e.width || "10em"
                }), ";height:1em;margin:0.3em;border-radius:", (function(e) {
                    return e.theme.borderRadius.sm
                }), ";", Ao, ";"),
                Po = Object(m.z)("div", {
                    target: "e1uut4cd3"
                })({
                    name: "1d3w5wq",
                    styles: "width:100%"
                }),
                Ho = Object(m.z)("div", {
                    target: "e1uut4cd2"
                })({
                    name: "66u5jz",
                    styles: "padding:1em"
                }),
                qo = Object(m.z)("div", {
                    target: "e1uut4cd1"
                })({
                    name: "10qv9sv",
                    styles: "width:100%;margin-top:0.5em"
                }),
                Bo = Object(m.z)("div", {
                    displayName: "Message",
                    section: !0,
                    target: "e1uut4cd0"
                })(""),
                Do = function() {
                    return Object(r.d)(Co, {
                        full: !0
                    }, Object(r.d)(Po, null, Object(r.d)(m.a, null, Object(r.d)(m.b, {
                        css: Fo,
                        letter: " "
                    })), Object(r.d)(Ho, null, Object(r.d)(qo, null, Object(r.d)(m.q, null, Object(r.d)(Bo, null, Object(r.d)(m.c, null, Object(r.d)(m.m, null, Object(r.d)(Mo, null), Object(r.d)(Mo, {
                        width: "7em"
                    })))))), Object(r.d)(qo, null, Object(r.d)(m.q, {
                        reverse: !0
                    }, Object(r.d)(Bo, null, Object(r.d)(m.c, null, Object(r.d)(m.m, null, Object(r.d)(Mo, null)))))), Object(r.d)(qo, null, Object(r.d)(m.q, null, Object(r.d)(Bo, null, Object(r.d)(m.c, null, Object(r.d)(m.m, null, Object(r.d)(Mo, null)))))))))
                };
            var Lo = Object(m.z)("div", {
                target: "e5cxvfk0"
            })({
                name: "iwp08z",
                styles: "display:flex;justify-content:center;font-size:0.9em"
            });
            var Vo = "close_chat_confirm_label",
                Uo = Object(m.z)("p", {
                    target: "ev8wfi80"
                })({
                    name: "1azakc",
                    styles: "text-align:center"
                }),
                No = function(e) {
                    var t = e.localize,
                        n = e.closeChat,
                        r = e.onModalStateChange,
                        a = i.useState(!1),
                        o = a[0],
                        c = a[1],
                        l = i.useState(!1),
                        s = l[0],
                        u = l[1],
                        d = Object(me.b)(),
                        m = function() {
                            c(!1), r({
                                isOpen: !1
                            })
                        };
                    return i.createElement(i.Fragment, null, i.createElement(Ue, {
                        description: t("close_chat")
                    }, i.createElement(B.n, {
                        onPress: function() {
                            c(!0), r({
                                isOpen: !0
                            })
                        },
                        "aria-label": t("close_chat")
                    }, i.createElement(B.e, {
                        "aria-hidden": !0
                    }))), i.createElement(je, {
                        shown: o,
                        onClose: m,
                        "aria-labelledby": Vo
                    }, i.createElement(Fe, {
                        "aria-hidden": !0
                    }, i.createElement(B.k, null)), i.createElement(Uo, {
                        id: Vo
                    }, t("leave_chat_confirm")), i.createElement(Lo, null, i.createElement(we.i, {
                        destructive: !0,
                        label: t("close_chat"),
                        submitting: s,
                        onClick: function() {
                            d ? m() : (u(!0), n().then((function() {
                                u(!1), m()
                            })).catch((function() {
                                u(!1)
                            })))
                        }
                    }))))
                };
            var Wo = "email-transcript-sent-label",
                Go = "email-transcript-not-sent-label",
                Yo = Object(m.z)("h2", {
                    target: "emwx8nd0"
                })({
                    name: "xvo3ou",
                    styles: "text-align:center;font-size:16px;font-weight:normal"
                }),
                Ko = function(e) {
                    var t = e.email,
                        n = e.localize,
                        r = e.sent,
                        a = e.open,
                        c = e.onClose,
                        l = e.onSubmit,
                        s = e.mobile,
                        u = Object(o.i)("email-transcript"),
                        b = i.useState((function() {
                            return {
                                email: t
                            }
                        })),
                        f = b[0],
                        p = b[1];
                    return i.useEffect((function() {
                        if (a) {
                            var e = u.get();
                            p(e || {
                                email: t
                            })
                        }
                    }), [u, t, a]), i.createElement(je, {
                        shown: a,
                        onClose: c,
                        "aria-labelledby": r ? Wo : Go
                    }, a && (r ? i.createElement(i.Fragment, null, i.createElement(Fe, {
                        "aria-hidden": !0
                    }, i.createElement(B.r, null)), i.createElement(Yo, {
                        id: Wo,
                        textWrap: !0
                    }, n("chat_transcript_sent").replace(/%s/g, t || "")), i.createElement(Lo, null, i.createElement(la.a, {
                        capitalize: !0,
                        onClick: c
                    }, n("hide")))) : i.createElement(i.Fragment, null, i.createElement(Fe, {
                        "aria-hidden": !0
                    }, i.createElement(B.r, null)), i.createElement(Yo, {
                        id: Go
                    }, n("send_transcript_to_email")), i.createElement(Ce, {
                        id: "email_transcript",
                        initialValues: f,
                        mobile: s,
                        onSubmit: function(e) {
                            return Math.random() < .01 && Object(on.d)("chat_transcript_ordered", {}), l(e.email).then((function() {
                                return u.destroy()
                            })).catch((function() {
                                var e;
                                return (e = {})[Fn.a] = n("lost_connection"), e
                            }))
                        },
                        submitLabel: n("send"),
                        validate: function(e) {
                            return e.email ? {} : {
                                email: n("survey_fill_in_required_fields")
                            }
                        }
                    }, i.createElement(m.q, null, i.createElement(Oe.b, {
                        onChange: function(e) {
                            var t = e.values;
                            e.dirty && u.set(t)
                        }
                    }), i.createElement(Gn, {
                        ariaLabel: "Enter your email address",
                        name: "email",
                        required: !0,
                        serverName: "",
                        label: "",
                        type: "email",
                        localize: d.D
                    }))))))
                },
                Qo = Object(m.z)("div", {
                    target: "eleibs71"
                })("display:flex;position:relative;width:44px;height:24px;border-radius:24px;background-color:", (function(e) {
                    return e.theme.colors.inactiveElement
                }), ";will-change:background-color;transition:background-color 0.2s linear;cursor:pointer;outline-offset:2px;&::after{content:'';position:absolute;height:16px;width:16px;border-radius:16px;top:4px;left:4px;background-color:", (function(e) {
                    return e.theme.colors.surface
                }), ";will-change:left;transition:left 0.2s ease-in;}"),
                Xo = Object(m.z)("input", {
                    target: "eleibs70"
                })("position:absolute;left:2137px;&:checked+div{background-color:", (function(e) {
                    return e.theme.colors.success
                }), ";&::after{left:24px;}}"),
                Jo = function(e) {
                    var t = e.checked,
                        n = Object(j.a)(e, ["checked"]);
                    return i.createElement(i.Fragment, null, i.createElement(Xo, Object(s.a)({
                        type: "checkbox",
                        checked: t
                    }, n)), i.createElement(Qo, null))
                };

            function Zo() {
                var e = Object(O.a)(["\n\t&-enter {\n\t\topacity: 0;\n\n\t\t[role='menuitem'],\n\t\t[role='switch'] {\n\t\t\ttransform: translate3d(0, 20%, 0);\n\t\t}\n\t}\n\n\t&-enter-active {\n\t\topacity: 1;\n\t\ttransition: opacity 100ms ease-in-out;\n\t\t[role='menuitem'],\n\t\t[role='switch'] {\n\t\t\ttransform: translate3d(0, 0%, 0);\n\t\t\ttransition: transform 200ms;\n\t\t}\n\t}\n\n\t&-exit {\n\t\topacity: 1;\n\t}\n\n\t&-exit-active {\n\t\topacity: 0;\n\t\ttransition: opacity 100ms ease-in-out;\n\t}\n"]);
                return Zo = function() {
                    return e
                }, e
            }
            var $o = function(e) {
                    return Object(r.c)("margin-" + (e.isRtl ? "left" : "right") + ": 8px;", "")
                },
                ec = Object(m.z)("div", {
                    target: "e1s5h2c81"
                })({
                    name: "s5xdrg",
                    styles: "display:flex;align-items:center"
                }),
                tc = Object(m.z)(vi, {
                    target: "e1s5h2c80"
                })({
                    name: "2o6p8u",
                    styles: "justify-content:space-between"
                }),
                nc = function(e) {
                    return e(Zo())
                },
                rc = Object(a.c)((function(e) {
                    var t = c.d,
                        n = function(n) {
                            return e.requestUpdateChat(t, {
                                properties: {
                                    transcriptSentTo: n
                                }
                            })
                        },
                        r = function() {
                            e.setApplicationState({
                                muted: !e.getApplicationState("muted")
                            })
                        };
                    return function(e) {
                        var i = e.getChat(t),
                            a = i.active,
                            o = i.properties,
                            s = o.transcriptSentTo,
                            u = dn(e, "floating-menu");
                        return {
                            localize: e.localize,
                            muted: e.getApplicationState("muted"),
                            sendTranscript: n,
                            transcriptSentTo: s,
                            enableTranscript: !e.getApplicationState("isPreview") && (a || o.ended),
                            showTranscript: Object(l.h)("emailTranscript", e).enabled,
                            toggleSounds: r,
                            chatTransfer: u,
                            customerEmail: e.getSessionUser().email,
                            showVoiceAssistant: function() {
                                return Object(h.G)(e, {
                                    url: c.k
                                })
                            }
                        }
                    }
                }))((function(e) {
                    var t = e.customerEmail,
                        n = e.enableTranscript,
                        a = e.localize,
                        l = e.muted,
                        s = e.sendTranscript,
                        d = e.showTranscript,
                        m = e.toggleSounds,
                        f = e.chatTransfer,
                        p = e.transcriptSentTo,
                        g = e.showVoiceAssistant,
                        h = i.useState(!1),
                        v = h[0],
                        j = h[1],
                        O = i.useState(!1),
                        y = O[0],
                        w = O[1],
                        E = Object(Z.useFrame)(),
                        k = Object(u.g)(),
                        z = Object(be.b)();
                    Object(o.h)(E);
                    var S = i.useRef(null),
                        C = !!p,
                        T = i.useCallback((function(e) {
                            switch (e) {
                                case "sounds":
                                    return void m();
                                case "transcript":
                                    return j(!1), void w(!0);
                                case "identityTransfer":
                                    return Object(on.d)("chat_app_button_clicked", {
                                        ui_source: "menu"
                                    }), j(!1), void f.showMoment();
                                case "voiceAssistant":
                                    j(!1), g()
                            }
                        }), [m, f, g]);
                    return Object(o.q)((function() {
                        v && Math.random() < .01 && Object(on.d)("meatballs_menu_opened", {})
                    }), [v]), i.useEffect((function() {
                        return z.setMenuOpen(v)
                    }), [v, z]), Object(r.d)(i.Fragment, null, Object(r.d)(Ue, {
                        isDisabled: v,
                        description: a("theme_options")
                    }, Object(r.d)(B.n, {
                        css: Object(r.c)("padding:0;height:32px;background-color:", v ? k.colors.lighterOppositeTitleBarColor : "transparent", ";"),
                        ref: S,
                        onPress: function() {
                            return j((function(e) {
                                return !e
                            }))
                        },
                        active: v,
                        "aria-label": v ? "Close menu" : "Open menu",
                        "aria-expanded": v,
                        "aria-haspopup": !0
                    }, Object(r.d)(B.f, {
                        "aria-hidden": !0,
                        color: k.colors.titleBarText
                    }))), Object(r.d)(r.a, null, (function(e) {
                        var t = e.css;
                        return Object(r.d)(b.a, {
                            component: null
                        }, v && Object(r.d)(x.a, {
                            classNames: nc(t),
                            timeout: 200
                        }, Object(r.d)(gi, {
                            menuButtonRef: S,
                            onClose: function() {
                                return j(!1)
                            },
                            onSelect: T
                        }, d && Object(r.d)(vi, {
                            disabled: !n,
                            text: a("send_transcript"),
                            value: "transcript"
                        }, Object(r.d)(B.r, {
                            css: $o(k),
                            "aria-hidden": !0
                        }), a("send_transcript")), f.available && Object(r.d)(vi, {
                            text: c.h,
                            value: "identityTransfer",
                            disabled: f.disabled
                        }, Object(r.d)(B.t, {
                            css: $o(k),
                            "aria-hidden": !0
                        }), c.h), Object(r.d)(tc, {
                            text: a(l ? "unmute" : "mute"),
                            "aria-label": a(l ? "unmute" : "mute"),
                            value: "sounds"
                        }, Object(r.d)(ec, null, l ? Object(r.d)(B.u, {
                            css: $o(k),
                            "aria-hidden": !0
                        }) : Object(r.d)(B.F, {
                            css: $o(k),
                            "aria-hidden": !0
                        }), Object(r.d)("span", {
                            "aria-hidden": !0
                        }, a("sounds"))), Object(r.d)(Jo, {
                            checked: !l,
                            onChange: function() {
                                return !l
                            },
                            "aria-hidden": !0
                        })), !1)))
                    })), Object(r.d)(Ko, {
                        email: C ? p : t,
                        localize: a,
                        onClose: function() {
                            return w(!1)
                        },
                        onSubmit: s,
                        sent: C,
                        open: y
                    }))
                })),
                ic = n(221);
            var ac = function(e) {
                    return "modern" === e ? 28 : 32
                },
                oc = window.matchMedia("(max-height: 330px)"),
                cc = Object(m.z)("div", {
                    displayName: "IconPlaceholder",
                    target: "e7bf83j4"
                })({
                    name: "febvbf",
                    styles: "width:25px;flex-shrink:0"
                }),
                lc = function(e) {
                    return Object(r.c)("height:30px;line-height:30px;font-size:inherit;font-weight:700;margin-top:0;margin-bottom:0;transition:opacity 100ms ", e.transitions.easings.smooth, ";")
                },
                sc = Object(m.z)("h1", {
                    target: "e7bf83j3"
                })((function(e) {
                    var t = e.theme;
                    return lc(t)
                }), ";"),
                uc = Object(m.z)("button", {
                    target: "e7bf83j2"
                })((function(e) {
                    var t = e.theme;
                    return lc(t)
                }), " width:100%;height:", (function(e) {
                    return "modern" === e.theme.name ? "24px" : "32px"
                }), ";display:flex;flex-direction:row;justify-content:center;align-items:center;position:relative;color:inherit;background:none;border:none;cursor:pointer;appearance:none;"),
                dc = Object(m.z)("span", {
                    target: "e7bf83j1"
                })({
                    name: "ovk77c",
                    styles: "min-width:0"
                }),
                mc = Object(m.z)("div", {
                    target: "e7bf83j0"
                })(""),
                bc = function(e) {
                    return Object(d.hb)(e - 1).map((function(e) {
                        return Object(r.d)(cc, {
                            key: "placeholder_" + e
                        })
                    }))
                },
                fc = {
                    name: "21xn5r",
                    styles: "transform:rotate(180deg)"
                },
                pc = Object(a.c)((function(e) {
                    var t = function(e, t) {
                            return e && e.name && t ? e.name : ""
                        },
                        n = function() {
                            return e.requestUpdateChat(c.d, {
                                active: !1
                            })
                        },
                        r = function() {
                            e.setCurrentView("Homescreen")
                        },
                        i = e.getApplicationState("embedded");
                    return function(e) {
                        var a = Object(l.d)(c.d, e),
                            o = !(Object(l.mb)(e) || Object(l.lb)(e)),
                            s = Object(l.ib)(e);
                        return {
                            embedded: i,
                            closeChat: n,
                            title: e.localize("welcome_title"),
                            alternateTitle: t(a, s),
                            agent: a,
                            showAlternateTitle: o,
                            showCloseButton: e.getChat(c.d).active,
                            localize: e.localize,
                            showAgentBar: s,
                            showAvatar: Object(l.h)("agentAvatar", e).enabled,
                            isDropAreaVisible: e.getApplicationState("dropAreaVisible"),
                            showBackButton: "Homescreen" === e.getDefaultView(),
                            goToHomescreen: r
                        }
                    }
                }))((function(e) {
                    var t = e.showCloseButton,
                        n = e.closeChat,
                        a = e.localize,
                        c = e.showMinimizedButton,
                        l = e.title,
                        d = e.alternateTitle,
                        b = e.onMinimize,
                        f = e.showAgentBar,
                        p = e.showAlternateTitle,
                        g = e.scrollingDeltaSource,
                        h = e.agent,
                        v = e.showAvatar,
                        j = e.isOnBottomSource,
                        O = e.isDropAreaVisible,
                        x = e.showBackButton,
                        y = e.goToHomescreen,
                        w = Object(u.g)(),
                        E = i.useRef(),
                        k = i.useRef(),
                        z = i.useRef(),
                        S = i.useRef(oc.matches),
                        C = i.useState(!0),
                        T = C[0],
                        _ = C[1],
                        I = i.useState(!1),
                        R = I[0],
                        A = I[1],
                        F = Object(ne.f)(),
                        M = w.name,
                        P = i.useCallback((function() {
                            E.current && (E.current.style.opacity = 1), k.current && (k.current.style.opacity = 0), z.current && (z.current.style.transform = "translateY(" + ac(M) + "px)"), _(!0)
                        }), [M]),
                        H = i.useCallback((function() {
                            if (p && (g.next({
                                    deltaX: 0,
                                    deltaY: -50
                                }), F.focusVisible)) {
                                var e = Object(mi.d)(document.getElementById(mt))[0];
                                e && e.focus()
                            }
                        }), [F.focusVisible, g, p]);
                    Object(o.o)(P), Object(o.a)(g, (function(e) {
                        var t = e.y;
                        d && !S.current && (E.current && (E.current.style.opacity = 1 - 2 * t), k.current && (k.current.style.opacity = t), z.current && (z.current.style.transform = 0 === t ? "translateY(" + ac(M) + "px)" : "translateY(" + (ac(M) - 60 * t + ("modern" === M ? 4 : 0)) + "px)"), 1 === t && T ? _(!1) : 0 !== t || T || _(!0))
                    })), i.useEffect((function() {
                        f && d || P()
                    }), [f, P, d]), i.useEffect((function() {
                        var e = function(e) {
                            var t = e.matches;
                            return S.current = t
                        };
                        return oc.addListener(e),
                            function() {
                                return oc.removeListener(e)
                            }
                    }), []), i.useEffect((function() {
                        if (j) return j.subscribe((function(e) {
                            e && P()
                        }))
                    }), [j, P]);
                    var q, D = function(e, t) {
                            var n = e.filter(Boolean),
                                r = t.filter(Boolean);
                            return n.length === r.length ? {
                                leftIcons: n,
                                rightIcons: r
                            } : n.length > r.length ? {
                                leftIcons: n,
                                rightIcons: bc(n.length - r.length).concat(r)
                            } : {
                                leftIcons: n.concat(bc(r.length - n.length)),
                                rightIcons: r
                            }
                        }([x && Object(r.d)(B.n, {
                            key: "back",
                            onPress: y
                        }, Object(r.d)(ic.a, {
                            "aria-hidden": !0,
                            css: fc
                        })), Object(r.d)(rc, {
                            key: "menu"
                        })], [c && Object(r.d)(Ue, {
                            key: "minimize",
                            description: a("embedded_minimize_window")
                        }, Object(r.d)(B.n, {
                            onPress: b,
                            "aria-label": a("embedded_minimize_window")
                        }, Object(r.d)(B.s, {
                            "aria-hidden": !0
                        }))), (t || R) && Object(r.d)(No, {
                            key: "close",
                            closeChat: n,
                            localize: a,
                            onModalStateChange: function(e) {
                                var t = e.isOpen;
                                return A(t)
                            }
                        })]),
                        L = D.leftIcons,
                        V = D.rightIcons,
                        U = "modern" === M ? "small" : "normal";
                    return Object(r.d)(m.x, {
                        css: (q = O, Object(r.c)("overflow:hidden;flex-grow:0;text-align:left;padding:0 0.8em;font-weight:700;display:flex;align-items:center;transition:0.3s background-color;z-index:", q ? 103 : 2, ";pointer-events:", q ? "none" : "all", ";")),
                        leftIcons: L,
                        noShrink: !0,
                        rightIcons: V,
                        title: Object(r.d)(mc, {
                            ref: z
                        }, Object(r.d)(sc, {
                            ellipsis: !0,
                            ref: E,
                            style: {
                                marginBottom: 30
                            },
                            "aria-expanded": T
                        }, Object(r.d)(et.a, null, l)), Object(r.d)(uc, Object(s.a)({
                            ref: k,
                            disabled: T,
                            onClick: H,
                            "aria-expanded": T,
                            "aria-controls": mt,
                            "aria-label": d || l
                        }, F), p && Object(r.d)(i.Fragment, null, h && f && v && Object(r.d)($e, {
                            avatarUrl: h.avatar,
                            size: U,
                            availability: "online"
                        }), h && !v && Object(r.d)($e, {
                            size: U,
                            availability: "online"
                        }), Object(r.d)(dc, {
                            ellipsis: !0
                        }, d))))
                    })
                })),
                gc = n(659),
                hc = n(658),
                vc = i.lazy((function() {
                    return n.e(5).then(n.bind(null, 671))
                }));
            t.default = Object(a.c)((function(e) {
                return {
                    destroyed: e.getApplicationState().destroyed,
                    showLoader: Object(l.jb)(e),
                    product: e.getApplicationState().product,
                    currentView: e.getCurrentView()
                }
            }))((function(e) {
                var t = e.destroyed,
                    n = e.showLoader,
                    i = e.currentView,
                    a = e.product,
                    l = e.onMinimizeButtonPress,
                    s = e.showMinimizedButton,
                    u = Object(o.x)(!0),
                    d = Object(o.x)({
                        x: 0,
                        y: 0
                    });
                return t ? Object(r.d)(_o, null) : "openwidget" === a && i && "Chat" !== i ? Object(r.d)(vc, {
                    currentView: i
                }) : n ? Object(r.d)(Do, null) : Object(r.d)(hc.a, null, Object(r.d)(pc, {
                    isOnBottomSource: u,
                    onMinimize: l,
                    showMinimizedButton: s,
                    scrollingDeltaSource: d
                }), Object(r.d)(yo, {
                    id: c.d,
                    scrollingDeltaSource: d,
                    isOnBottomSource: u
                }), Object(r.d)(gc.a, null))
            }))
        }
    }
]);