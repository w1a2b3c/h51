function ownKeys(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(e);
        t && (i = i.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
        }))),
            n.push.apply(n, i)
    }
    return n
}
function _objectSpread(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2 ? ownKeys(Object(n), !0).forEach((function(t) {
            _defineProperty(e, t, n[t])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ownKeys(Object(n)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
        }))
    }
    return e
}
function _toConsumableArray(e) {
    return _arrayWithoutHoles(e) || _iterableToArray(e) || _unsupportedIterableToArray(e) || _nonIterableSpread()
}
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
}
function _unsupportedIterableToArray(e, t) {
    if (e) {
        if ("string" == typeof e) return _arrayLikeToArray(e, t);
        var n = Object.prototype.toString.call(e).slice(8, -1);
        return "Object" === n && e.constructor && (n = e.constructor.name),
            "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? _arrayLikeToArray(e, t) : void 0
    }
}
function _iterableToArray(e) {
    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
}
function _arrayWithoutHoles(e) {
    if (Array.isArray(e)) return _arrayLikeToArray(e)
}
function _arrayLikeToArray(e, t) { (null == t || t > e.length) && (t = e.length);
    for (var n = 0,
             i = new Array(t); n < t; n++) i[n] = e[n];
    return i
}
function _classCallCheck(e, t) {
    if (! (e instanceof t)) throw new TypeError("Cannot call a class as a function")
}
function _defineProperties(e, t) {
    for (var n = 0; n < t.length; n++) {
        var i = t[n];
        i.enumerable = i.enumerable || !1,
            i.configurable = !0,
        "value" in i && (i.writable = !0),
            Object.defineProperty(e, i.key, i)
    }
}
function _createClass(e, t, n) {
    return t && _defineProperties(e.prototype, t),
    n && _defineProperties(e, n),
        e
}
function _defineProperty(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n,
        e
}
function _typeof(e) {
    return (_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ?
        function(e) {
            return typeof e
        }: function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol": typeof e
        })(e)
}
/* @preserve
 * @name: BUI v1.6.6
 * @detail: BUI 是一个免费的UI交互框架, 用于快速定制开发WebApp,微信,混合移动应用(Bingotouch,Link,Dcloud,Apicloud,Appcan等).
 * @site: http://www.easybui.com/
 * Copyright © 2017-2021 BUI. All Rights Reserved.
 */
!
    function(e) {
        "function" == typeof define && define.amd ? define(e) : e()
    } ((function() {
        "use strict";
        var e;
        function t(e, t, n) {
            return e(n = {
                    path: t,
                    exports: {},
                    require: function(e, t) {
                        return function() {
                            throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")
                        } (null == t && n.path)
                    }
                },
                n.exports),
                n.exports
        }
        window.libs = window.Zepto || window.jQuery || {},
            window.bui = {},
            window.router = {},
            (e = window.bui).debug = !0,
            e.hasRouter = !1,
            e.nativeRouter = !1,
            e.isWebapp,
            e.currentPlatform = "",
            e.log = !0,
            e.trace = !1,
            e.native = {},
            e.config = {},
            e.config.namespace = "bui",
            e.config.classNamePrefix = e.config.namespace + "-",
            e.config.version = "1.6.6",
            e.config.versionCode = 20210802,
            e.version = e.config.version,
            e.versionCode = e.config.versionCode,
            e.config.icon = {
                close: "icon-close",
                minus: "icon-minus",
                plus: "icon-plus",
                search: "icon-search",
                remove: "icon-removefill"
            },
            e.config.viewport = {},
            e.config.init = {
                auto: !0
            },
            e.config.ready = {},
            e.config.ajax = {},
            e.config.get = {},
            e.config.put = {},
            e.config.delete = {},
            e.config.post = {},
            e.config.back = {},
            e.config.load = {},
            e.config.getPageParams = {},
            e.config.refresh = {},
            e.config.run = {},
            e.config.checkVersion = {},
            e.config.component = {
                auto: !0
            },
            e.config.dialog = {},
            e.config.confirm = {},
            e.config.alert = {},
            e.config.hint = {},
            e.config.prompt = {},
            e.config.loading = {},
            e.config.mask = {},
            e.config.list = {},
            e.config.listview = {},
            e.config.scroll = {},
            e.config.pullrefresh = {},
            e.config.select = {},
            e.config.sidebar = {},
            e.config.slide = {},
            e.config.actionsheet = {},
            e.config.dropdown = {},
            e.config.accordion = {},
            e.config.stepbar = {},
            e.config.rating = {},
            e.config.number = {},
            e.config.file = {},
            e.config.fileselect = {},
            e.config.upload = {},
            e.config.download = {},
            e.config.swipe = {},
            e.config.router = {},
            e.config.loader = {},
            e.config.loader.define = {},
            e.config.loader.load = {},
            e.config.loader.component = {},
            e.config.store = {},
            e.config.floor = {},
            function(e, t) {
                e.prefix = function(t) {
                    return e.config.classNamePrefix + t
                },
                    e.showLog = function(t, n) {
                        n = n || "";
                        var i = "";
                        "object" == _typeof(t) && "message" in t && "name" in t ? i = t.message + ":" + t.name + "&&stack:" + t.stack: "string" == typeof t && (i = t),
                        e.log && console.error(n + " " + i),
                        e.trace && console.trace && console.trace(),
                            e.trigger("catcherror", t, n)
                    },
                    e.guid = function(e) {
                        function t() {
                            return (65536 * (1 + Math.random()) | 0).toString(16).substring(1)
                        }
                        return (e = void 0 === e ? "bui": e || "") + t().substr(e.length) + t() + "-" + t() + "-" + t() + "-" + t() + "-" + t() + t() + t()
                    },
                    e.swipeDirection = function(e, t, n, i) {
                        var a = t - e,
                            o = i - n,
                            r = Math.abs(a),
                            l = Math.abs(o);
                        return ! (r < 9 && l < 9) && (r / l > 3 ? a > 0 ? "swiperight": "swipeleft": o > 0 ? "swipedown": "swipeup")
                    },
                    e.obj = function(n, i) {
                        var a = null;
                        i = i || null;
                        var o = e.hasRouter && router.currentPage() || "html",
                            r = t(o = i || o),
                            l = "string" == typeof n;
                        if ("object" === _typeof(n)) return a = t(n);
                        if (l && /^(\d)/.test(n)) return a = r.find("[id='" + n + "']");
                        if (l && /^[a-zA-z]/.test(n)) {
                            var c = /^(html|head|body|header|main|footer|ul|li|section|dt|dd|div|span|img|article|i|strong|input|textarea|select|h1|h2|h3|h4|h5|h6|p|view|component|components|iframe)$/gi.test(n) || /^\[.+\]$/.test(n) || n.indexOf("[") > -1 ? n: "#" + n;
                            return a = r.find(c)
                        }
                        return /^#\d/.test(n) ? a = r.find("[id='" + n.substr(1) + "']") : /^\.\d/.test(n) ? a = r.find("[class='" + n.substr(1) + "']") : n && (a = r.find(n)),
                            a
                    },
                    e.$ = e.obj,
                    e.objId = function(t) {
                        return e.obj(t, "html")
                    },
                    e.selector = function(e) {
                        return void 0 === e ? this: t(e, this)
                    },
                    e.widget = function(e) {
                        return e && e in this ? this[e] : this
                    },
                    e.option = function(n, i) {
                        if ("object" !== e.typeof(n) && void 0 === i) return "string" == typeof n ? this.config[n] : this.config;
                        if ("id" == n) return e.showLog("不允许修改控件的ID参数"),
                            this;
                        if (n && "object" === e.typeof(n)) {
                            var a = t.extend(this.config, n);
                            return this.init(a)
                        }
                        if (this.config.hasOwnProperty(n)) {
                            var o = {};
                            o[n] = i;
                            a = t.extend(this.config, o);
                            return this.init(a)
                        }
                        return this
                    }
            } (window.bui || {},
                window.libs),
            function(e, t) {
                e.emitter = function() {
                    function t() {
                        this.handle = Object.create(null)
                    }
                    return t.prototype.on = function(t, n, i) {
                        return "function" == typeof n ? (i = n, n = this) : (i = i, n = n || this),
                            n.handle = n.handle || {},
                            e.unit.stringToArray(t).forEach((function(e, t) {
                                void 0 === n.handle[e] && (n.handle[e] = []),
                                    n.handle[e].push(i)
                            })),
                            n
                    },
                        t.prototype.off = function(t, n, i) {
                            "function" == typeof n ? (i = n, n = this) : "function" == typeof i ? (i = i, n = n || this) : n = this;
                            var a = e.typeof(t);
                            if (void 0 === t) n.handle = Object.create(null);
                            else if ("string" === a && "function" == typeof i) {
                                var o = n.handle[t] || [];
                                e.array.remove(o, i)
                            } else if ("string" === a || "array" === a) {
                                "object" !== _typeof(n.handle) && (n.handle = {}),
                                    e.unit.stringToArray(t).forEach((function(e, t) {
                                        n.handle[e] = []
                                    }))
                            }
                            return n
                        },
                        t.prototype.one = function(e, t) {
                            var n = this;
                            return this.on(e, (function i() {
                                t && t.apply(n, arguments),
                                    n.off(e, i)
                            })),
                                this
                        },
                        t.prototype.wait = function(t, n) {
                            var i = this,
                                a = e.unit.stringToArray(t),
                                o = [],
                                r = !0;
                            return a.forEach((function(t, l) {
                                i.on(t, (function(t) {
                                    o[l] = t,
                                    o.length === a.length && r && (a.forEach((function(t, n) {
                                        o[n] = e.history.getLast().component[t] || {}
                                    })), n && n.apply(i, o), r = !1)
                                }))
                            })),
                                this
                        },
                        t.prototype.waited = function(t, n) {
                            var i = this,
                                a = e.unit.stringToArray(t),
                                o = [],
                                r = !0;
                            return a.forEach((function(t, l) {
                                i.on(t, (function(t) {
                                    o[l] = t.exports || t,
                                    o.length === a.length && r && (a.forEach((function(t, n) {
                                        var i = e.history.getLast().component[t];
                                        o[n] = i ? i.exports: {}
                                    })), n && n.apply(i, o), r = !1)
                                }))
                            })),
                                this
                        },
                        t.prototype.trigger = function(e) {
                            try {
                                if (this.handle[arguments[0]] instanceof Array) {
                                    var t = this.handle[arguments[0]],
                                        n = [].slice.apply(arguments);
                                    n.shift();
                                    for (var i = 0,
                                             a = t.length; i < a; i++) t[i] && t[i].apply(this.self || this, n)
                                }
                            } catch(e) {}
                            return this
                        },
                        t.prototype.notify = function() {
                            try {
                                for (var e in this.handle) if (this.handle[e] instanceof Array) for (var t = this.handle[e], n = 0, i = t.length; n < i; n++) t[n] && t[n].apply(this.self || this)
                            } catch(e) {}
                            return this
                        },
                        function(e) {
                            return new t
                        }
                } ();
                var n = e.emitter();
                e.on = n.on,
                    e.off = n.off,
                    e.trigger = n.trigger,
                    e.one = n.one
            } (window.bui || {}),
            function(e, t) {
                e.store = function(n) {
                    var i = {
                            el: null,
                            uid: "",
                            scope: "",
                            data: null,
                            extends: null,
                            mixins: [],
                            beforeMounts: [],
                            beforeCompiles: [],
                            compileds: [],
                            beforeUpdates: [],
                            mounteds: [],
                            updateds: [],
                            beforeDestroys: [],
                            destroyeds: [],
                            computed: null,
                            methods: null,
                            watch: null,
                            templates: null,
                            beforeMount: null,
                            mounted: null,
                            beforeCompile: null,
                            compiled: null,
                            beforeUpdate: null,
                            updated: null,
                            beforeDestroy: null,
                            destroyed: null,
                            isPublic: !1,
                            modelEvent: "input",
                            scopeSplit: ".",
                            paramSplit: "|",
                            delayInput: 200,
                            needStatic: !1,
                            needView: !0,
                            needComponent: !1,
                            needCompile: !0,
                            needNative: !1,
                            deep: !0,
                            log: !1,
                            autoinit: !0
                        },
                        a = null,
                        o = !1;
                    function r(n) {
                        var a = null,
                            o = n && n.extends ? [n.extends] : [];
                        e.array.merge(i.mixins, o, n.mixins || [], [n]);
                        var r = t.extend(!0, {},
                            i, e.config.store);
                        return function e(n) {
                            var o = 0;
                            for (o = 0; o < n.length; o++) {
                                var l = n[o];
                                l.beforeMount && i.beforeMounts.push(l.beforeMount),
                                l.beforeCompile && i.beforeCompiles.push(l.beforeCompile),
                                l.beforeUpdate && i.beforeUpdates.push(l.beforeUpdate),
                                l.updated && i.updateds.push(l.updated),
                                l.compiled && i.compileds.push(l.compiled),
                                l.mounted && i.mounteds.push(l.mounted),
                                l.beforeDestroy && i.beforeDestroys.push(l.beforeDestroy),
                                l.destroyed && i.destroyeds.push(l.destroyed),
                                    a = t.extend(!0, r, l),
                                l.mixins && l.mixins.length && o < n.length - 1 && e(l.mixins)
                            }
                        } (i.mixins),
                            a = t.extend(!0, i, a)
                    }
                    var l = "function" == typeof(a = r(n)).data ? a.data.call(_) : a.data,
                        c = a.scope || e.guid(),
                        s = a.computed,
                        u = a.scopeSplit,
                        d = a.methods,
                        f = a.templates,
                        p = a.watch || i.watch;
                    a.delayInput;
                    var h, g = a.isPublic,
                        m = a.modelEvent,
                        v = a.needStatic,
                        b = "",
                        y = !1,
                        w = !0,
                        x = {},
                        k = {},
                        I = {},
                        T = !1,
                        O = {},
                        C = e.emitter(),
                        P = {
                            target: null
                        };
                    a.el ? a.el = a.el: a.el = g ? "body": ".bui-page",
                        h = a.el,
                        b = 0 == h.indexOf(".") || 0 == h.indexOf("#") ? h.substr(1) : h;
                    var S = null,
                        j = null,
                        L = null,
                        E = null,
                        N = [],
                        B = !0,
                        D = l,
                        R = void 0 === a.log ? i.log: a.log,
                        A = /b-text|b-html|b-value|b-show|b-hide|b-checked|b-src|b-href|b-bind|b-style|b-class|b-model|b-id|b-data|b-title|b-visible/gim,
                        M = {
                            "b-text": function(t) {
                                var n = "b-text",
                                    i = ae.call(this, t, n),
                                    a = ie.call(this, n),
                                    o = "",
                                    r = e.typeof(t.value),
                                    l = i.attr(n),
                                    c = ue.call(this, n);
                                c[0].keyname;
                                var s = c[0].param;
                                switch (r) {
                                    case "array":
                                        o = oe(t, l);
                                        break;
                                    case "function":
                                        o = t.value.apply(_, s);
                                        break;
                                    default:
                                        o = t.value
                                }
                                o = a ? !o: o,
                                    i.text(o),
                                    N = []
                            },
                            "b-html": function(t) {
                                var n = "b-html",
                                    i = ae.call(this, t, n),
                                    a = ie.call(this, n),
                                    o = "",
                                    r = e.typeof(t.value),
                                    l = i.attr(n),
                                    c = ue.call(this, n);
                                c[0].keyname;
                                var s = c[0].param;
                                switch (r) {
                                    case "array":
                                        o = oe(t, l);
                                        break;
                                    case "function":
                                        o = t.value.apply(_, s);
                                        break;
                                    default:
                                        o = t.value
                                }
                                o = a ? !o: o,
                                    i.html(o),
                                    N = []
                            },
                            "b-value": function(e) {
                                var t = ae.call(this, e, "b-value");
                                g ? t.each((function(t, n) {
                                    re.call(this, e)
                                })) : re.call(t[0], e);
                                N = []
                            },
                            "b-show": function(e) {
                                var t = ae.call(this, e, "b-show");
                                e.value && e.value.length || "object" !== _typeof(e.value) && 1 == Boolean(e.value) ? this.removeAttribute("style") : ("" === e.value || e.value && !e.value.length || 0 == Boolean(e.value)) && t.css("display", "none");
                                N = []
                            },
                            "b-visible": function(e) {
                                var t = ae.call(this, e, "b-visible");
                                e.value && e.value.length && "object" !== _typeof(e.value) && 1 == Boolean(e.value) ? this.removeAttribute("style") : ("" === e.value || e.value && !e.value.length || 0 == Boolean(e.value)) && t.css("visibility", "hidden");
                                N = []
                            },
                            "b-hide": function(n) {
                                var i = "!" + c + u + n.keyname,
                                    a = g ? t('[b-show="'.concat(i, '"]')) : S(this);
                                "array" === e.typeof(n.value) && n.value.length || "object" !== _typeof(n.value) && 1 == Boolean(n.value) ? a.css("display", "none") : ("" === n.value || n.value && !n.value.length || 0 == Boolean(n.value)) && a.removeAttr("style")
                            },
                            "b-checked": function(e) {
                                this.checked = !!e.value,
                                    N = []
                            },
                            "b-bind": function(e) {
                                var t = ae.call(this, e, "b-bind"),
                                    n = this,
                                    i = e.keyname,
                                    a = e.value;
                                if ("object" === _typeof(a)) {
                                    var o = function(o) {
                                        be(i + "." + o, (function(t) {
                                            ce(ae.call(n, e, "b-bind"), o, t.value)
                                        })),
                                            ce(t, o, a[o])
                                    };
                                    for (var r in a) o(r)
                                } else {
                                    var l = "string" == typeof i && i.split("."),
                                        c = l[l.length - 1];
                                    ce(t, c, a)
                                }
                            },
                            "b-src": function(e) {
                                ae.call(this, e, "b-src").attr("src", e.value),
                                    N = []
                            },
                            "b-title": function(e) {
                                ae.call(this, e, "b-title").attr("title", e.value),
                                    N = []
                            },
                            "b-data": function(e) {
                                ae.call(this, e, "b-data").attr("data", e.value),
                                    N = []
                            },
                            "b-id": function(e) {
                                ae.call(this, e, "b-id").attr("id", e.value),
                                    N = []
                            },
                            "b-href": function(e) {
                                ae.call(this, e, "b-href").attr("href", e.value),
                                    N = []
                            },
                            "b-class": function(n) {
                                var i = ae.call(this, n, "b-class"),
                                    a = this;
                                this.classList;
                                var o = n.keyname || "";
                                if ("object" === _typeof(n.value)) if ("array" === e.typeof(n.value)) {
                                    n.value.length || i.attr("class", ""),
                                        n.value.forEach((function(e, t) { ! i.hasClass(e) && i.addClass(e)
                                        }));
                                    var r = o.indexOf(".$index");
                                    r > -1 ? be(o.substr(0, r) + "." + t(i).index(), (function(e) {
                                        var t = ae.call(a, n, "b-class");
                                        se(t, e.value[t.index()], e.value)
                                    })) : be(o, (function(e) {
                                        var t = ae.call(a, n, "b-class");
                                        se(t, e.value[t.index()], e.value)
                                    }))
                                } else {
                                    var l = function(e) {
                                        var t = n.value[e],
                                            r = n.preValue && n.preValue[e] || "";
                                        be(o + "." + e, (function(t) {
                                            se(ae.call(a, n, "b-class"), e, t.value)
                                        })),
                                            se(i, e, t, r)
                                    };
                                    for (var c in n.value) l(c)
                                } else if ("function" == typeof n.value) {
                                    var s = ue.call(this, "b-class"),
                                        u = s[0].keyname,
                                        d = s[0].param,
                                        f = n.value.apply(_, d);
                                    se(i, u, f, n.preValue)
                                } else {
                                    var p = "string" == typeof n.keyname && n.keyname.split("."),
                                        h = p[p.length - 1];
                                    se(i, h, n.value, n.preValue)
                                }
                                N = []
                            },
                            "b-model": function(e) {
                                var t = ae.call(this, e, "b-model");
                                g ? t.each((function(t, n) {
                                    le.call(this, e)
                                })) : le.call(t[0], e)
                            },
                            "b-style": function(e) {
                                var t = ae.call(this, e, "b-style"),
                                    n = this;
                                if ("object" === _typeof(e.value)) {
                                    var i = function(i) {
                                        be(e.keyname + "." + i, (function(t) {
                                            ae.call(n, e, "b-style").css(i, t.value)
                                        })),
                                            t.css(e.value)
                                    };
                                    for (var a in e.value) i(a)
                                } else t.css(e.keyname, e.value);
                                N = []
                            }
                        },
                        F = {
                            "b-text": [],
                            "b-html": [],
                            "b-value": [],
                            "b-show": [],
                            "b-hide": [],
                            "b-checked": [],
                            "b-bind": [],
                            "b-src": [],
                            "b-title": [],
                            "b-data": [],
                            "b-id": [],
                            "b-href": [],
                            "b-class": [],
                            "b-model": [],
                            "b-style": []
                        },
                        U = {},
                        H = t.extend(!0, {},
                            l, d, p, s, f),
                        _ = {
                            $methods: d,
                            $refs: O,
                            mixin: r,
                            $options: a,
                            $templates: f,
                            config: a,
                            watch: V,
                            nextTick: function(t) {
                                return be("nexttick", (function(n) {
                                    try {
                                        t && t.call(_, n)
                                    } catch(n) {
                                        e.showLog(n)
                                    }
                                })),
                                    this
                            },
                            oneTick: function(t, n) {
                                var i = "nexttick-" + t;
                                if (I.hasOwnProperty(i)) return this;
                                return I[i] = n,
                                    be("nexttick", (function(n) {
                                        if (n.keyname === t) try {
                                            k[t].pop(),
                                            0 == k[t].length && I[i] && I[i].call(_, n)
                                        } catch(n) {
                                            e.showLog(n)
                                        }
                                    })),
                                    this
                            },
                            get: function(t) {
                                if (void 0 === t) return D = D;
                                if ("string" == typeof t) {
                                    var n = e.unit.getKeyValue(t, D);
                                    return N = [],
                                        n
                                }
                                return D
                            },
                            set: ge,
                            setState: function(n, i) {
                                var r = "string" == typeof n,
                                    s = i,
                                    d = "",
                                    f = null,
                                    p = /\.\d$/.test(n);
                                N = [];
                                var h = e.unit.getKeyValue(n, D);
                                if (o = !0, r && void 0 !== i) {
                                    if (R && console.log("set ".concat(n, " ")), T = !0, xe.call(_, "beforeupdate", {
                                        target: null,
                                        value: s,
                                        preValue: h,
                                        action: "setState",
                                        keyname: n,
                                        origin: D
                                    }), a.beforeUpdates.forEach((function(e, t) {
                                        e.call(_, {
                                            target: null,
                                            value: s,
                                            preValue: h,
                                            action: "setState",
                                            keyname: n,
                                            origin: D
                                        })
                                    })), s = i && "object" === e.typeof(i) ? t.extend(!0, {},
                                        h, i) : i, p && (d = n.replace(/\.\d$/, ""), f = e.unit.getKeyValue(d, D)), e.unit.setKeyValue(n, s, l), e.unit.setKeyValue(n, s, D), p) {
                                        var g = e.unit.getKeyValue(d, D);
                                        xe.call(_, d, {
                                            target: null,
                                            value: g,
                                            preValue: f,
                                            action: "setState",
                                            keyname: n,
                                            origin: D
                                        })
                                    }
                                    xe.call(_, n, {
                                        target: null,
                                        value: s,
                                        preValue: h,
                                        action: "setState",
                                        keyname: n,
                                        origin: D
                                    }),
                                        i && "object" === e.typeof(i) ? Object.keys(i).forEach((function(e, t) {
                                            var i = n + "." + e;
                                            xe.call(_, i, {
                                                target: null,
                                                value: s[e],
                                                preValue: h[e],
                                                action: "setState",
                                                keyname: i,
                                                origin: D
                                            })
                                        })) : i && "array" === e.typeof(i) && !p && i.forEach((function(t, i) {
                                            var a = n + "." + i;
                                            xe.call(_, a, {
                                                target: null,
                                                value: t,
                                                preValue: h[i],
                                                action: "setState",
                                                keyname: a,
                                                origin: D
                                            }),
                                            t && "object" === e.typeof(t) && Object.keys(t).forEach((function(e, n) {
                                                var i = a + "." + e;
                                                xe.call(_, i, {
                                                    target: null,
                                                    value: t[e],
                                                    preValue: t[e],
                                                    action: "setState",
                                                    keyname: i,
                                                    origin: D
                                                })
                                            }))
                                        }));
                                    var m = p ? j.find('[b-template*="'.concat(c, ".").concat(d, '"]')) : j.find('[b-template*="'.concat(c, ".").concat(n, '"]'));
                                    m.length && m.each((function(e, n) {
                                        t(n).length && J({
                                            el: t(n),
                                            action: "setState"
                                        })
                                    })),
                                        xe.call(_, "updated", {
                                            target: null,
                                            value: s,
                                            preValue: h,
                                            action: "setState",
                                            keyname: n,
                                            origin: D
                                        }),
                                        a.updateds.forEach((function(e, t) {
                                            e.call(_, {
                                                target: null,
                                                value: s,
                                                preValue: h,
                                                action: "setState",
                                                keyname: n,
                                                origin: D
                                            })
                                        })),
                                    "object" === _typeof(i) && (i instanceof Array ? fe(l, n.split(u)) : fe(i)),
                                        N = []
                                }
                                return this
                            },
                            delete: me,
                            del: me,
                            observer: fe,
                            compile: q,
                            $mount: q,
                            compileHtml: K,
                            clearKey: function() {
                                return N = [],
                                    y = !1,
                                    w = !0,
                                    T = !1,
                                    this
                            },
                            destroy: function() {
                                return N = [],
                                    a.beforeDestroys.forEach((function(e, t) {
                                        e.call(_)
                                    })),
                                    y = !1,
                                    w = !0,
                                    T = !1,
                                    we(),
                                    a.beforeMounts = [],
                                    a.beforeCompiles = [],
                                    a.compileds = [],
                                    a.mounteds = [],
                                    a.beforeUpdates = [],
                                    a.updateds = [],
                                    a.destroyeds.forEach((function(e, t) {
                                        e.call(_)
                                    })),
                                    this
                            },
                            init: z,
                            connect: function(t, n, i) {
                                if ("object" !== _typeof(t) || !t.hasOwnProperty("$refs")) return _;
                                var a = this;
                                if ("string" == typeof n) {
                                    he(t, n);
                                    var o = e.unit.getKeyValue(n, a.$data);
                                    "object" === e.typeof(o) ? d(n, o, i || n) : u(i || n, o, n)
                                } else for (var r = Object.keys(D), l = 0; l < r.length; l++) {
                                    var c = r[l];
                                    if (e.array.compare(pe, c, "field")) break;
                                    if (he(t, c), t.$data.hasOwnProperty(c)) {
                                        t.$data[c];
                                        var s = a.$data[c];
                                        "object" === e.typeof(s) ? d(c, s) : u(c, s)
                                    }
                                }
                                function u(n, i, a) {
                                    "array" === e.typeof(i) ? t[n].$replace(i) : t.set(n, i);
                                    var o = null;
                                    a && (o = V(a, (function(i) {
                                        "array" === e.typeof(i) ? t[n].$replace(i) : t.set(n, i)
                                    }))),
                                    n && (o = V(n, (function(i) {
                                        "array" === e.typeof(i) ? t[n].$replace(i) : t.set(n, i)
                                    })));
                                    var r = e.array.index(pe, n, "field"); (r < 0 || pe[r] && t.$options.el !== pe[r].el) && pe.push({
                                        field: a || n,
                                        el: t.$options.el,
                                        disconnect: o
                                    })
                                }
                                function d(n, o, r) {
                                    for (var l, c = Object.keys(o), s = function(o) {
                                            var r = c[o],
                                                l = n + "." + r,
                                                s = void 0 === i,
                                                u = s || "" == i ? r: i + "." + r;
                                            he(t, l);
                                            var f = e.unit.getKeyValue(l, a.$data);
                                            s ? t.set(l, f) : t.set(u, f);
                                            var p = V(l, (function(e) {
                                                void 0 !== i ? t.set(u, e) : t.set(l, e)
                                            })); ((d = e.array.index(pe, l, "field")) < 0 || pe[d] && t.$options.el !== pe[d].el) && pe.push({
                                                field: l,
                                                el: t.$options.el,
                                                disconnect: p
                                            })
                                        },
                                             u = 0; u < c.length; u++) {
                                        var d;
                                        s(u)
                                    }
                                    t.trigger.call(t, r || n, (_defineProperty(l = {
                                            action: "set",
                                            target: null,
                                            value: D[n],
                                            preValue: null
                                        },
                                        "action", "set"), _defineProperty(l, "keyname", n), _defineProperty(l, "origin", D), l))
                                }
                                return _
                            },
                            disconnect: function(t) {
                                if ("string" == typeof t) {
                                    var n = e.array.get(pe, t, "field");
                                    n && n.disconnect()
                                } else pe.forEach((function(e, t) {
                                    e.disconnect()
                                }));
                                return _
                            },
                            on: be,
                            off: we,
                            one: ye,
                            trigger: xe,
                            emitter: C
                        };
                    try {
                        a.autoinit && z()
                    } catch(t) {
                        e.showLog(t)
                    }
                    function z() {
                        var n, i = (S = e.hasRouter ? router.$: t)(a.el);
                        for (var o in j = "object" === _typeof(a.el) ? t(a.el) : i.length ? i: t(a.el), L = j && j.parent(), E = j && j.children(), _.$el = j, _.$parent = L, _.$children = E, _.$data = l, d) d[o] = d[o].bind(_);
                        return _.$methods = d,
                        d &&
                        function() {
                            try {
                                Object.keys(d).forEach((function(t) {
                                    l.hasOwnProperty(t) ? e.showLog("不能跟data的键值相同:" + t) : Object.defineProperty(_, t, {
                                        get: function() {
                                            return d[t].bind(this)
                                        },
                                        set: function() {}
                                    })
                                }))
                            } catch(t) {
                                e.showLog(t)
                            }
                        } (),
                        f &&
                        function() {
                            try {
                                Object.keys(f).forEach((function(t) {
                                    l.hasOwnProperty(t) ? e.showLog("不能跟data的键值相同:" + t) : Object.defineProperty(_, t, {
                                        get: function() {
                                            return f[t].bind(this)
                                        },
                                        set: function() {}
                                    })
                                }))
                            } catch(t) {
                                e.showLog(t)
                            }
                        } (),
                            xe.call(_, "beforemount"),
                            a.beforeMounts.forEach((function(e, t) {
                                e.call(_)
                            })),
                            fe(l),
                            function() {
                                var e = function(e) {
                                    Object.defineProperty(_, e, {
                                        configurable: !0,
                                        get: function() {
                                            R && console.log("1. module getting ".concat(e), N),
                                                this === _ || !y && w ? (y = !0, w = !1, N = []) : (y = !1, w = !1);
                                            var t = l[e];
                                            return Array.isArray(t) && P.target && (Array.isArray(x[e]) || (x[e] = []), x[e].push(P.target)),
                                                t
                                        },
                                        set: function(t) {
                                            R && console.log("2. module setting ".concat(e), N),
                                                N = [],
                                                l[e] = t,
                                                D[e] = t
                                        }
                                    })
                                };
                                for (var t in l) e(t)
                            } (),
                        p &&
                        function(t) {
                            try {
                                $(t)
                            } catch(t) {
                                e.showLog(t)
                            }
                        } (p),
                        s &&
                        function() {
                            try {
                                Object.keys(s).forEach((function(t) {
                                    if (l.hasOwnProperty(t)) e.showLog("不能跟data的键值相同:" + t);
                                    else {
                                        var n = s[t];
                                        Object.defineProperty(_, t, {
                                            get: function() {
                                                var e, i = "function" == typeof n ? n.bind(this) : n.get.bind(this);
                                                return P.target && (x[t] = [], x[t].push(P.target)),
                                                    P.target = function() {
                                                        var e = i();
                                                        x[t] && x[t].forEach((function(e) {
                                                            return e()
                                                        })),
                                                            xe(t, {
                                                                target: null,
                                                                value: e,
                                                                action: "set",
                                                                keyname: t,
                                                                param: [],
                                                                origin: D
                                                            }),
                                                            P.target = null,
                                                            N = []
                                                    },
                                                    e = i(),
                                                    P.target = null,
                                                    N = [],
                                                    e
                                            },
                                            set: n && "object" === e.typeof(n) && n.set ||
                                                function() {}
                                        })
                                    }
                                }))
                            } catch(t) {
                                e.showLog(t)
                            }
                        } (),
                            g ? a.needCompile && router && router.on("complete", (function(e) {
                                a.needCompile && q(),
                                B && a.mounteds.forEach((function(t, n) {
                                    t.call(_, e)
                                })),
                                    D = t.extend(!0, {},
                                        l),
                                    y = !1,
                                    w = !0,
                                    xe.call(_, "mounted", e),
                                    B = !1,
                                    N = []
                            })) : (B || we(), v && (n = K(n = j.html()), j.html(n)), a.needView ?
                                function(e) {
                                    loader.views({
                                        id: e.id,
                                        loaded: function(e) {
                                            q(e.el)
                                        },
                                        compiled: e.compiled
                                    })
                                } ({
                                    id: j,
                                    compiled: function() {
                                        a.needCompile && q(),
                                            a.mounteds.forEach((function(e, t) {
                                                e.call(_)
                                            }))
                                    }
                                }) : (a.needCompile && q(), a.mounteds.forEach((function(e, t) {
                                    e.call(_)
                                }))), D = t.extend(!0, {},
                                l), y = !1, w = !0, N = [], xe.call(_, "mounted"), B = !1),
                        a.uid && e.history.setUI && e.history.setUI({
                            uid: a.uid,
                            ui: _
                        }),
                            this
                    }
                    function $(t, n, i) {
                        t = t || p;
                        try {
                            var a = Object.keys(t),
                                o = [];
                            a.forEach((function(a, r) {
                                var c = i || ("object" === _typeof(t[a]) ? t[a].handler: t[a]);
                                o.push(a),
                                n && o.unshift(n);
                                var s = o.join("."),
                                    u = t[a];
                                if ("object" === e.typeof(u)) {
                                    var d = u.deep ? Object.keys(l[a]) : Object.keys(t[a]),
                                        f = e.unit.getKeyValue(a, l);
                                    d.forEach((function(t, n) {
                                        var i = s + "." + t,
                                            a = f[t];
                                        "object" === e.typeof(a) && $(a, i, c),
                                            V(i, c),
                                            o = []
                                    })),
                                    u.immediate && u.handler && u.handler.call(_, l[a], D[a])
                                }
                                V(s, c),
                                    o = []
                            }))
                        } catch(t) {
                            e.showLog(t)
                        }
                    }
                    function V(t, n) {
                        var i = function(t) {
                            try {
                                var i = [t.value, t.preValue || "", t];
                                if ("init" !== t.action) {
                                    var a = n;
                                    switch (e.typeof(a)) {
                                        case "function":
                                            a.apply(_, i);
                                            break;
                                        case "array":
                                            a.forEach((function(e, t) {
                                                e.apply(_, i)
                                            }));
                                            break;
                                        case "string":
                                            new Function(a + "(".concat(t.value, ",").concat(t.preValue || "", ")"))();
                                            break;
                                        default:
                                            a.apply(_, i)
                                    }
                                }
                            } catch(t) {
                                e.showLog(t)
                            }
                        };
                        return be(t, i),
                            we.bind(this, t, i)
                    }
                    function q(n) {
                        try {
                            var i = null,
                                o = null;
                            void 0 === n ? (i = j, o = a) : "string" == typeof n ? (i = S(n), o = a) : n && "object" === _typeof(n) && (i = S(n) || t(n), o = t.extend(!0, {},
                                a, n));
                            var r = !0;
                            if (o.beforeCompiles.forEach((function(e, t) {
                                if (!1 === (r = e.call(_, o))) return ! 1
                            })), !1 === r) return N = [],
                                !1;
                            if (te(i), J({
                                el: i,
                                action: "first"
                            }),
                                function(t) {
                                    var n = t,
                                        i = n.find("[b-watch*=".concat(c, "]")),
                                        a = n.find("[b-one*=".concat(c, "]"));
                                    if (i.length) try {
                                        ne(i, "b-watch", be)
                                    } catch(t) {
                                        e.showLog(t)
                                    }
                                    if (a.length) try {
                                        ne(a, "b-one", ye)
                                    } catch(t) {
                                        e.showLog(t)
                                    }
                                } (i), o.needComponent) return loader.components({
                                id: i,
                                compiled: function() {
                                    Z(i),
                                        Q(i),
                                        G(i),
                                        !0,
                                        W(),
                                        N = [],
                                        o.compileds.forEach((function(e, t) {
                                            e.call(_, o)
                                        }))
                                }
                            }),
                                this;
                            Z(i),
                                Q(i),
                                G(i),
                                !0,
                                W(),
                                N = [],
                                o.compileds.forEach((function(e, t) {
                                    e.call(_, o)
                                }))
                        } catch(t) {
                            e.showLog(t)
                        }
                        return this
                    }
                    function W() {
                        return j.find("[ref]").each((function() {
                            var t = this.getAttribute("ref"),
                                n = O.hasOwnProperty(t),
                                i = null;
                            n && "htmldivelement" === e.typeof(O[t]) ? ((i = [O[t]]).push(this), O[t] = i) : n && "array" === e.typeof(O[t]) ? O[t].push(this) : O[t] = this
                        })),
                            this
                    }
                    function K(n) {
                        try {
                            var i = this,
                                a = "string" == typeof n ? n: "",
                                o = new RegExp("{{[\\s]?" + c + u + "(.*?)}}", "mg");
                            return a = a.replace(o, (function(n, a) {
                                var o = a.split(c + u);
                                "" === t.trim(o[0]) && o.shift();
                                var r = o.length > 0 && e.unit.getKeyValue(o.join("."), D) || "";
                                return "function" == typeof r ? r.call(i) : r
                            }))
                        } catch(t) {
                            e.showLog(t)
                        }
                    }
                    function Y(t, n) {
                        var i;
                        return U && U.hasOwnProperty(t) ? i = U[t] : (void 0 === (i = e.unit.getKeyValue(t, n)) && R && console.warn("请检查 ".concat(t, " 在bui.store scope:").concat(c, " 中有没有声明定义")), U[t] = i),
                            i
                    }
                    function J(n) {
                        var i = 1 == n.replace;
                        try {
                            var a = "object" === e.typeof(n) ? n.el: n,
                                o = [],
                                r = (a.prop("outerHTML") || a.html() || "").match(A) || [],
                                l = e.array.uniq(r);
                            l.length && l.forEach((function(r, l) {
                                var s = a.find("[".concat(r, "*=").concat(c, "]"));
                                s.length < 1 && (s = a.closest("[".concat(r, "*=").concat(c, "]"))),
                                s.length && s.each((function(l, s) {
                                    var d = this,
                                        f = "",
                                        p = ue.call(this, "".concat(r)),
                                        h = p[0] && p[0].keyname || "",
                                        m = h.indexOf(".length"),
                                        v = m > -1 ? h.substr(0, m) : h,
                                        b = p[0] && p[0].param;
                                    Y(v, _);
                                    var x = ue.call(this, "b-linked");
                                    if (x.length && x.forEach((function(t, n) {
                                        be(t.keyname, (function(t) {
                                            xe(h, {
                                                target: null,
                                                value: e.unit.getKeyValue(h, _),
                                                action: "set",
                                                keyname: h,
                                                param: b,
                                                origin: D
                                            })
                                        }))
                                    })), "b-show" === r) switch (p[0] && p[0].rule) {
                                        case "!":
                                            f = "b-hide";
                                            break;
                                        default:
                                            f = "b-show"
                                    } else f = r;
                                    if (g) {
                                        var k = e.array.compare(F[f], v); ! k && F[f].push(v),
                                        !k && be(v, M[f].bind(d))
                                    } else {
                                        var I = function(i) {
                                            try {
                                                if (O.indexOf("$index") > -1) {
                                                    var o = v.match(/([0-9]+)/g),
                                                        l = o[o.length - 1],
                                                        c = a.find("[".concat(r, '="').concat(T, '"]')),
                                                        s = c.attr("b-target");
                                                    c.each((function(e, n) {
                                                        s = t(n).attr("b-target")
                                                    }));
                                                    var u = s ? a.find(s).eq(l) : null,
                                                        p = arguments;
                                                    return void(s && u && u.length ? (u.find("[".concat(r, '="').concat(T, '"]')).each((function(e, t) {
                                                        var n = t || d;
                                                        M[f].apply(n, p)
                                                    })), u.closest("[".concat(r, '="').concat(T, '"]')).each((function(e, t) {
                                                        var n = t || d;
                                                        M[f].apply(n, p)
                                                    }))) : (c.each((function(e, t) {
                                                        var i = t || d;
                                                        e != l || "first" !== n.action ? "first" !== n.action && M[f].apply(i, p) : M[f].apply(i, p)
                                                    })), a.closest("[".concat(r, '="').concat(T, '"]')).each((function(e, t) {
                                                        var n = t || d;
                                                        M[f].apply(n, p)
                                                    }))))
                                                }
                                                M[f].apply(d, arguments)
                                            } catch(t) {
                                                e.showLog(t)
                                            }
                                        }; ! B && 0 === l && we(v, I),
                                        i && we(v, I);
                                        var T = this.getAttribute(r) || "",
                                            O = T.replace(c + u, "");
                                        be(v, I.bind(d))
                                    }
                                    e.array.compare(o, v) || o.push(v),
                                        N = [],
                                        y = !1,
                                        w = !0
                                }))
                            })),
                                X(o, n)
                        } catch(t) {
                            e.showLog(t)
                        }
                    }
                    function X(t, n) {
                        t.forEach((function(t, i) {
                            var a = e.unit.getKeyValue(t, _);
                            xe(t, {
                                target: null,
                                action: "object" === e.typeof(n) && n.action || "init",
                                value: a,
                                param: null,
                                keyname: t,
                                origin: D
                            }),
                                N = []
                        }))
                    }
                    function Z(n) {
                        var i = n,
                            o = '[type="text"][b-model*='.concat(c, '],\n                                [type="search"][b-model*=').concat(c, '],\n                                [type="password"][b-model*=').concat(c, '],\n                                [type="url"][b-model*=').concat(c, '],\n                                [type="number"][b-model*=').concat(c, '],\n                                [type="email"][b-model*=').concat(c, '],\n                                [type="range"][b-model*=').concat(c, '],\n                                [type="tel"][b-model*=').concat(c, "],\n                                textarea[b-model*=").concat(c, "]");
                        if ("input" === a.modelEvent) {
                            var r = !1;
                            i.off("input compositionstart compositionend", o).on(m, o, (function(e) {
                                r || l.call(e.target, e)
                            })).on("compositionstart", o, (function(e) {
                                r = !0,
                                    e.stopPropagation()
                            })).on("compositionend", o, (function(e) {
                                r = !1,
                                    l.call(e.target, e),
                                    e.stopPropagation()
                            }))
                        } else i.off(m, o).on(m, o, l);
                        function l(t) {
                            var n = t.target.value,
                                i = ue.call(this, "b-model"),
                                a = i[0] && i[0].keyname || "";
                            if ("" === a) return e.showLog("b-model的值不能为空"),
                                !1;
                            ge(a, n),
                                N = [],
                                t.stopPropagation()
                        }
                        var s = '[type="checkbox"][b-model*='.concat(c, '],\n                                [type="radio"][b-model*=').concat(c, "]");
                        i.off("change", s).on("change", s, (function(t) {
                            try {
                                var n, a = this,
                                    o = this.getAttribute("value") || this.checked,
                                    r = this.getAttribute("type"),
                                    l = ue.call(this, "b-model")[0].keyname,
                                    s = this.getAttribute("check-value"),
                                    u = this.getAttribute("uncheck-value"),
                                    d = this.getAttribute("check"),
                                    f = this.getAttribute("uncheck"); (d || f || s || u) && (o = this.checked ? s || this.value || d: u || f || ""),
                                    n = Y(l, _);
                                var p = /\{.+\}$/g.test(o) ? null: i.find('[type="checkbox"][b-model="'.concat(c + "." + l, '"][value="').concat(o, '"],\n                [type="radio"][b-model="').concat(c + "." + l, '"][value="').concat(o, '"]'));
                                switch (r) {
                                    case "checkbox":
                                        this.checked && (n && "array" === e.typeof(n) ? !e.array.compare(n, o) && e.unit.getKeyValue(l, _).push(o) : ge(l, o), this.checked = !0),
                                        this.checked || (n && "array" === e.typeof(n) ? e.array.remove(e.unit.getKeyValue(l, _), o) : ge(l, o), this.checked = !1),
                                        p && p.each((function(e, t) {
                                            this.checked = a.checked
                                        }));
                                        break;
                                    case "radio":
                                    default:
                                        ge(l, o)
                                }
                                N = [],
                                    t.stopPropagation()
                            } catch(t) {
                                e.showLog(t)
                            }
                        }));
                        var u = "select[b-model*=".concat(c, "]");
                        i.off("change", u).on("change", u, (function(n) {
                            try {
                                var i = t(this).val(),
                                    a = (this.selectedIndex, this.multiple),
                                    o = ue.call(this, "b-model")[0].keyname,
                                    r = null;
                                switch (r = Y(o, _), a) {
                                    case ! 0 : "array" !== e.typeof(r) && e.showLog("".concat(o, "的类型必须为数组")),
                                        i.splice(0, 0, 0, i.length + 1),
                                        r.splice.apply(r, i);
                                        break;
                                    default:
                                        ge(o, i)
                                }
                                N = [],
                                    n.stopPropagation()
                            } catch(n) {
                                e.showLog(n)
                            }
                        }))
                    }
                    function G(e) {
                        e.off("change", "[b-checked*=".concat(c, "]")).on("change", "[b-checked*=".concat(c, "]"), (function(e) {
                            var t = this.checked;
                            ge(ue.call(this, "b-checked")[0].keyname, t),
                                N = [],
                                e.stopPropagation()
                        }))
                    }
                    function Q(e) {
                        var t = e; ["b-click", "b-mousedown", "b-mouseover", "b-mouseup", "b-touchstart", "b-touchmove", "b-touchend", "b-submit", "b-change", "b-scroll", "b-keydown", "b-keyup", "b-keypress", "b-focus", "b-blur"].forEach((function(e, n) {
                            var i = e.substr(2);
                            t.off(i, "[".concat(e, "*=").concat(c, "]")).on(i, "[".concat(e, "*=").concat(c, "]"), (function(t) {
                                var n = ee.call(this, t, e);
                                if (!1 === n) return ! 1;
                                void 0 === n && t.stopPropagation()
                            }))
                        }))
                    }
                    function ee(t, n) {
                        var i = ue.call(this, n),
                            a = i[0].keyname,
                            o = i[0].param,
                            r = null;
                        o.push(t);
                        try {
                            var l = "function" == typeof(r = Y(a, _)) && r.apply(_, o);
                            return N = [],
                                xe(a, {
                                    target: this,
                                    value: r,
                                    action: "set",
                                    keyname: a,
                                    param: o,
                                    origin: D
                                }),
                                l
                        } catch(t) {
                            e.showLog(t)
                        }
                    }
                    function te(t) {
                        var n = t.find("[b-template*=".concat(c, "]")),
                            i = [];
                        if (k = {},
                            n.length) try {
                            n.each((function(t, n) {
                                var a = S(this),
                                    o = ue.call(this, "b-template"),
                                    r = o[0].keyname,
                                    l = o[0].param,
                                    s = c + u;
                                l[0] || console.error('b-template 没有找到数据源, 格式为: b-template="page.template(page.sources)"');
                                var d = "string" == typeof l[0] && l[0].replace(new RegExp(s), "") || "",
                                    p = a.attr("b-command") || "html",
                                    h = a.attr("b-children") || a.children()[0] && a.children()[0].tagName;
                                Y(d, _);
                                g && we(d),
                                    k.hasOwnProperty(d) ? k[d].push(d) : k[d] = [d],
                                    be(d, (function(t) {
                                        try {
                                            var n, i = t.param;
                                            switch (t.action) {
                                                case "push":
                                                case "unshift":
                                                    n = i;
                                                    break;
                                                case "splice":
                                                    n = i.slice(2) || "";
                                                    break;
                                                default:
                                                    n = t.value
                                            }
                                            if (f && f.hasOwnProperty(r)) { (l = l.map((function(e, t) {
                                                return "string" == typeof e && 0 == e.indexOf(c + u) && t > 0 ? Y(e.replace(new RegExp(s), ""), D) : e
                                            })))[0] = n;
                                                var o = void 0 !== n && "undefined" !== n && f[r] && f[r].apply(_, l);
                                                void 0 === o && (o = "", e.showLog("".concat(r, "模板方法需要返回内容，例如：return html;"))),
                                                g && (a = S('[b-template*="'.concat(s + d, '"]')));
                                                var m = t.preValue || [];
                                                0 == m.length && "html" == p && a.empty();
                                                var v = h ? a.children(h) : a.children(),
                                                    b = v,
                                                    y = i && i.length || 0;
                                                switch (B = !0, t.action) {
                                                    case "push":
                                                        if (a.append(o), v = a.children(h), y && y == v.length) J({
                                                            el: v,
                                                            action: "push"
                                                        });
                                                        else if (y > 1) for (var w = b.length,
                                                                                 x = w; x < v.length; x++) J({
                                                            el: v.eq(w + x - 1),
                                                            action: "push"
                                                        });
                                                        else J({
                                                                el: v.last(),
                                                                action: "push"
                                                            });
                                                        break;
                                                    case "unshift":
                                                        if (a.prepend(o), v = a.children(h), y && y == v.length) J({
                                                            el: v,
                                                            action: "unshift"
                                                        });
                                                        else if (y > 1) for (x = 0; x < y; x++) J({
                                                            el: v.eq(x),
                                                            action: "unshift"
                                                        });
                                                        else J({
                                                                el: v.first(),
                                                                action: "unshift"
                                                            });
                                                        break;
                                                    case "pop":
                                                        v.last().remove(),
                                                            J({
                                                                el: (v = a.children(h)).last(),
                                                                action: "pop"
                                                            });
                                                        break;
                                                    case "shift":
                                                        v.first().remove(),
                                                            J({
                                                                el: (v = a.children(h)).first(),
                                                                action: "shift"
                                                            });
                                                        break;
                                                    case "length":
                                                        break;
                                                    case "splice":
                                                        var k = parseInt(i[0]),
                                                            I = parseInt(i[1]);
                                                        I >= m.length && (a.empty(), v = a.children(h));
                                                        var T = v.length,
                                                            O = T > 0,
                                                            C = !1;
                                                        if (0 == I) if (O && T - 1 >= k) {
                                                            v.eq(k).before(o),
                                                                v = a.children(h);
                                                            for (x = 0; x < n.length; x++) J({
                                                                el: v.eq(k + x),
                                                                action: "splice"
                                                            })
                                                        } else {
                                                            a.append(o),
                                                                v = a.children(h);
                                                            for (x = 0; x < n.length; x++) J({
                                                                el: v.eq(T + x),
                                                                action: "splice"
                                                            })
                                                        } else if (I > 0) {
                                                            var P = e.unit.getKeyValue(t.keyname, t.origin);
                                                            if (i[1] - i[0] >= (P && P.length) && (C = !0), void 0 !== i[2]) if (O && T - 1 >= k) {
                                                                v.eq(k).before(o),
                                                                    v = a.children(h);
                                                                for (x = 0; x < n.length; x++) J({
                                                                    el: v.eq(k + x),
                                                                    action: "splice",
                                                                    replace: C
                                                                })
                                                            } else {
                                                                a.append(o),
                                                                    v = a.children(h);
                                                                for (x = 0; x < n.length; x++) J({
                                                                    el: v.eq(T + x),
                                                                    action: "splice",
                                                                    replace: C
                                                                })
                                                            }
                                                            var j = 0;
                                                            switch (p) {
                                                                case "append":
                                                                    j = v.length - t.preValue.length || 0;
                                                                    break;
                                                                case "prepend":
                                                                case "html":
                                                                default:
                                                                    j = 0
                                                            }
                                                            for (x = 0; x < I; x++) v.eq(k + n.length + x + j).remove();
                                                            o && !t.value.length && a.html(o)
                                                        }
                                                        break;
                                                    case "reverse":
                                                    case "sort":
                                                        a.html(o),
                                                            J({
                                                                el: a,
                                                                action: t.action
                                                            });
                                                        break;
                                                    default:
                                                        a[p](o)
                                                } !
                                                    function(t) { ("string" == typeof t ? e.$(t).find("component") : t.find("component")).each((function(e, t) {
                                                        loader.component({
                                                            id: t
                                                        })
                                                    }))
                                                    } (a),
                                                    a.find("[b-template*=".concat(c, "]")).length ? te(a) : xe.call(_, "nexttick", t)
                                            } else e.showLog("找不到对应的模板,请检查下 scope:".concat(c, " 的templates是否存在").concat(r), "bui.store")
                                        } catch(t) {
                                            e.showLog(t)
                                        }
                                    })),
                                e.array.compare(i, d) || i.push(d),
                                    N = []
                            })),
                                X(i)
                        } catch(t) {
                            e.showLog(t)
                        }
                    }
                    function ne(e, t, n) {
                        e.each((function(e, i) {
                            S(this);
                            var a = ue.call(this, t);
                            a[0].keyname;
                            var o = a[0].param,
                                r = c + u;
                            o[0] || console.error("".concat(t, " 没有找到数据源, 格式为: ").concat(t, '="page.doit(page.sources)"')),
                                Y("string" == typeof o[0] && o[0].replace(new RegExp(r), "") || "", _);
                            var l = this;
                            function s(e) {
                                var n = ue.call(l, t),
                                    i = n[0].keyname,
                                    a = n[0].param;
                                a.push(e),
                                    H[i].apply(_, a)
                            }
                            a[0].paramKeyname.forEach((function(e, t) {
                                n(e, s)
                            }))
                        }))
                    }
                    function ie(e) {
                        return 0 == this.getAttribute(e).indexOf("!")
                    }
                    function ae(e, n) {
                        var i = c + u + e.keyname;
                        return g ? t("[".concat(n, '="').concat(i, '"]')) : S(this)
                    }
                    function oe(e, t) {
                        return t.indexOf(".length") > -1 ? e.value.length || 0 : e.value instanceof Array ? e.value.join(",") : e.value
                    }
                    function re(t) {
                        var n = this.getAttribute("type"),
                            i = this.value,
                            a = this,
                            o = this.getAttribute("b-value");
                        switch (n) {
                            case "radio":
                                i == t.value ? this.checked = !0 : this.checked = !1;
                                break;
                            case "checkbox":
                                "array" === e.typeof(t.value) && t.value.forEach((function(e, t) {
                                    i == e && (a.checked = !0)
                                }));
                                break;
                            default:
                                this.value = oe(t, o)
                        }
                    }
                    function le(e) {
                        var n = this.getAttribute("type"),
                            i = this.value;
                        e.param;
                        var a = this;
                        if ("SELECT" === this.nodeName && this.multiple) e.value.length > 1 ? e.value.forEach((function(e, n) {
                            "string" == typeof e ? t(a).find("option[value=".concat(e, "]")).attr("selected", !0) : t(a).find("option[value=".concat(e.value, "]")).attr("selected", !0)
                        })) : this.value = e.value[0];
                        else {
                            switch (n) {
                                case "radio":
                                    i == e.value ? this.checked = !0 : this.checked = !1;
                                    break;
                                case "checkbox":
                                    if (i && e.value instanceof Array) switch (e.action) {
                                        case "push":
                                        case "unshift":
                                            e.param && e.param.filter((function(e, t) {
                                                i !== e || (a.checked = !0)
                                            }));
                                            break;
                                        case "pop":
                                        case "shift":
                                            e.param && e.param.filter((function(e, t) {
                                                i === e && (a.checked = !1)
                                            }));
                                            break;
                                        case "splice":
                                            var o = e.param,
                                                r = o && o[1] && parseInt(o[1]),
                                                l = o && o.slice(2);
                                            0 == r ? l.forEach((function(e, t) {
                                                i === e && (a.checked = !0)
                                            })) : r > 0 && (e.preValue.forEach((function(t, n) {
                                                n <= e.param[1] && (a.checked = !1)
                                            })), e.value.forEach((function(e, t) {
                                                i === e && (a.checked = !0)
                                            })));
                                            break;
                                        case "length":
                                            break;
                                        default:
                                            e.value.filter((function(e, t) {
                                                i == e && (a.checked = !0)
                                            }))
                                    } else e.value === i || 1 == e.value ? this.checked = !0 : this.checked = !1;
                                    break;
                                default:
                                    if (event && event.target && "INPUT" === event.target.nodeName) break;
                                    this.value = e.value
                            }
                            N = []
                        }
                    }
                    function ce(e, t, n) {
                        switch (t) {
                            case "disabled":
                                n ? e.attr(t, n) : e.removeAttr(t);
                                break;
                            case "checked":
                                e.prop(t, n);
                                break;
                            default:
                                var i = "object" === _typeof(n) ? JSON.stringify(n) : n;
                                e.attr(t, i)
                        }
                        N = []
                    }
                    function se(e, t, n, i) {
                        "boolean" == typeof n ? (n && e.addClass(t), !n && e.removeClass(t)) : "string" == typeof n ? (g && e.removeClass(n), i && e.removeClass(i), n && !e.hasClass(n) && e.addClass(n), void 0 !== i && "" === n && e.removeClass(i)) : (Boolean(n) && e.addClass(t), !Boolean(n) && e.removeClass(t))
                    }
                    function ue(t) {
                        var n = [],
                            i = this,
                            o = this.getAttribute(t) || "",
                            r = o.indexOf(a.paramSplit) > -1 ? o.split(a.paramSplit) : o && [o] || [];
                        try {
                            r.forEach((function(e, a) {
                                var o = {},
                                    r = de.call(i, e, t);
                                o.scope = c,
                                    o.rule = r.rule,
                                    o.keyname = r.name,
                                    o.param = r.param,
                                    o.paramKeyname = r.paramKeyname,
                                    o.eventType = r.eventType,
                                    o.eventProperty = r.eventProperty,
                                    n.push(o)
                            }))
                        } catch(t) {
                            e.showLog("参数处理出错")
                        }
                        return n
                    }
                    function de(n, i) {
                        try {
                            var a = n ? n.match(/([^\(|\)]+)/g) : [],
                                o = [],
                                r = "",
                                l = "",
                                s = null,
                                d = [],
                                f = null,
                                p = this,
                                h = "",
                                g = (O = t(p).attr("b-target")) && t(p).parents(O)[0] || p,
                                m = null,
                                v = "",
                                b = "";
                            if (h = (h = (s = a[0] && a[0].indexOf(c + u) > -1 ? a[0].split(c + u) : [c, a[0]])[0].split(c))[0] || h[1] || "", r = c, (l = s[1] || "").indexOf("$index") > -1) {
                                var y = t(g).index();
                                l = l.replace("$index", y)
                            } else if (l.indexOf("$id") > -1) {
                                var w = g.id;
                                l = l.replace("$id", w)
                            } else if (l.indexOf("$parentIndex") > -1) {
                                var x = t(g).parent().index();
                                l = l.replace("$parentIndex", x)
                            }
                            var k = null,
                                I = "";
                            if (n.indexOf("$item") > -1 || n.indexOf("$itemIndex") > -1 || n.indexOf("$itemId") > -1) {
                                I = (k = t(p).closest("[b-template]")) ? k.attr("b-children") || k.children()[0].nodeName: "";
                                var T = (m = t(p).closest(I)).index();
                                l = l.replace("$itemIndex", T)
                            }
                            if (void 0 !== a[1]) {
                                var O, C = (O = t(g).attr("b-target")) && t(g).closest(O)[0] || g,
                                    P = a[1].replace(/\$index/g, t(C).index()) || "";
                                try {
                                    var S = /\{.+\}$/g,
                                        j = /\[.+\]$/g,
                                        L = P ? P.match(/(\'(.*?)\'.*?)|(\"(.*?)\".*?)|(\w[-\w.+]*@([A-Za-z0-9][-A-Za-z0-9]+\.)+[A-Za-z]{2,14})|(^((https|http|ftp|rtsp|mms)?:\/\/)[^\,]+)|([a-zA-Z0-9][-a-zA-Z0-9\._]{0,62})|(\{.+\})|(\[.+])|([$\w\.]+)|([\d\.]+)|([\u4e00-\u9fa5|\w|\d]+)/g) : [];
                                    a[1].split(",").forEach((function(e, n) {
                                        e.indexOf(c + u) > -1 && o.push(e.replace(c + u, "").replace(/\$index/g, t(C).index()))
                                    })),
                                        d = L.map((function(n, a) {
                                            var o = n.replace(/^\"|^\'|\"$|\'$/g, "");
                                            switch (n) {
                                                case "$this":
                                                    o = C;
                                                    break;
                                                case "$index":
                                                    o = t(C).index();
                                                    break;
                                                case "$itemIndex":
                                                    o = m.index();
                                                    break;
                                                case "$itemId":
                                                    o = m.attr("id");
                                                    break;
                                                case "$itemText":
                                                    o = m.text();
                                                    break;
                                                case "$itemHtml":
                                                    o = m.html();
                                                    break;
                                                case "$item":
                                                    o = m[0];
                                                    break;
                                                case "$parentIndex":
                                                    o = t(C).parent().index();
                                                    break;
                                                case "$parent":
                                                    o = C.parentNode;
                                                    break;
                                                case "$children":
                                                    o = t(C).children();
                                                    break;
                                                case "$id":
                                                    o = C.id;
                                                    break;
                                                case "$text":
                                                    o = C.textContent;
                                                    break;
                                                case "$value":
                                                    o = C.value;
                                                    break;
                                                case "$html":
                                                    o = C.innerHTML
                                            }
                                            if ("b-template" !== i) {
                                                var r = c + u;
                                                e.unit.startWithStr(o, r) && (o = e.unit.getKeyValue(o.split(r)[1], _) || o)
                                            }
                                            return o = /^\d+$/.test(o) && o.length < 17 ? parseFloat(o) : o,
                                                S.test(n) || j.test(n) ? JSON.parse(n) : o
                                        }))
                                } catch(t) {
                                    e.showLog(t, "getArguments"),
                                        d = []
                                }
                            }
                            void 0 !== a[2] && (v = (f = a[2].indexOf(".") > -1 ? a[2].split(".") : [a[2]])[0], b = f[1] || "")
                        } catch(t) {
                            e.showLog("参数格式错误:" + n)
                        }
                        return {
                            scope: r,
                            rule: h,
                            name: l,
                            param: d,
                            paramKeyname: o,
                            eventType: v,
                            eventProperty: b
                        }
                    }
                    function fe(n, i) {
                        if (!n || !n.hasOwnProperty("widget") || "function" != typeof n.widget) return function(n, i) {
                            if (i && "array" === e.typeof(i)) {
                                if (i.length > 1) {
                                    var r = i.pop();
                                    s(e.unit.getKeyValue(i.join("."), n), r)
                                } else s(n, i[0]);
                                return
                            }
                            function s(n, i) {
                                var r = n[i];
                                if (function(n, i) {
                                    var r = n[i],
                                        s = "function" == typeof r ? r.call(_) : r,
                                        u = [];
                                    Object.defineProperty(n, i, {
                                        enumerable: !0,
                                        configurable: !0,
                                        get: function() {
                                            return R && console.log("3. data getting ".concat(i, ":"), s),
                                                C.target = this,
                                            (y || !y && w) && N.push(i),
                                            P.target && u.push(P.target),
                                                s
                                        },
                                        set: function(n) {
                                            if (n === s) return N = [],
                                                T = !1,
                                                o = !1,
                                                y = !1,
                                                w = !0,
                                                !0;
                                            C.target === this && (N = []),
                                                C.target = this,
                                            (!w || !y && w) && N.push(i);
                                            var r = N.join("."); ! T && xe.call(_, "beforeupdate", {
                                                action: "set",
                                                value: n,
                                                preValue: s,
                                                keyname: r,
                                                origin: D
                                            }),
                                            !T && a.beforeUpdates.forEach((function(e, t) {
                                                e.call(_, {
                                                    action: "set",
                                                    value: n,
                                                    preValue: s,
                                                    keyname: r,
                                                    origin: D
                                                })
                                            })),
                                            R && console.log("4. data setting ".concat(r), n);
                                            var d = e.unit.getKeyValue(r, D);
                                            s = n,
                                                u.forEach((function(e) {
                                                    return e()
                                                })),
                                            !T && xe(r, {
                                                action: "set",
                                                value: s,
                                                preValue: d,
                                                keyname: r,
                                                origin: D
                                            }),
                                                e.unit.setKeyValue(r, s, D),
                                                s instanceof Array ? fe(l, N) : "object" === e.typeof(s) && (a.deep && fe(n), s && Object.keys(s).forEach((function(e, t) {
                                                    var n = i + "." + e;
                                                    N = [],
                                                        xe(n, {
                                                            target: null,
                                                            value: s[e],
                                                            preValue: d && d[e],
                                                            action: "set",
                                                            keyname: n,
                                                            origin: D
                                                        })
                                                }))),
                                            !T && xe.call(_, "updated", {
                                                action: "set",
                                                value: s,
                                                preValue: d,
                                                keyname: r,
                                                origin: D
                                            }),
                                            !T && a.updateds.forEach((function(e, t) {
                                                e.call(_, {
                                                    action: "set",
                                                    value: s,
                                                    preValue: d,
                                                    keyname: r,
                                                    origin: D
                                                })
                                            }));
                                            var f = j.find('[b-template*="'.concat(c, ".").concat(r, '"]'));
                                            return f.length && !o && f.each((function(e, n) {
                                                J({
                                                    el: t(n),
                                                    action: "set"
                                                })
                                            })),
                                                N = [],
                                                T = !1,
                                                o = !1,
                                                y = !1,
                                                w = !0,
                                                !0
                                        }
                                    })
                                } (n, i), r instanceof Array &&
                                function(t, n) {
                                    var i = [],
                                        o = Array.prototype,
                                        r = Object.create(o); ["push", "pop", "shift", "unshift", "splice", "sort", "reverse"].forEach((function(t) {
                                        var s = o[t];
                                        Object.defineProperty(r, t, {
                                            enumerable: !0,
                                            configurable: !0,
                                            value: function(o) {
                                                var r = Array.prototype.slice.call(arguments);
                                                xe.call(_, "beforeupdate", {
                                                    target: null,
                                                    action: t,
                                                    param: r,
                                                    value: this,
                                                    prevValue: [],
                                                    keyname: n,
                                                    origin: D
                                                }),
                                                    i.push(n),
                                                l.hasOwnProperty(n) || i.unshift(N.join("."));
                                                var u = i.join("."),
                                                    d = this.slice(0),
                                                    f = s.apply(this, r);
                                                switch (R && console.log("5. ".concat(u, " action ").concat(t, ", param:").concat(r, " ")), t) {
                                                    case "pop":
                                                    case "shift":
                                                        r = [f]
                                                }
                                                e.unit.setKeyValue(u, this, D);
                                                var p = j.find('[b-template*="'.concat(c, ".").concat(u, '"]'));
                                                return xe(u, {
                                                    target: p,
                                                    action: t,
                                                    param: r,
                                                    value: this,
                                                    preValue: d,
                                                    keyname: u,
                                                    origin: D
                                                }),
                                                x[i[0]] && "array" === e.typeof(x[i[0]]) && x[i[0]].forEach((function(e) {
                                                    return e()
                                                })),
                                                    i = [],
                                                    N = [],
                                                    y = !1,
                                                    w = !0,
                                                    xe.call(_, "updated", {
                                                        target: p,
                                                        action: t,
                                                        param: r,
                                                        value: this,
                                                        preValue: d,
                                                        keyname: n,
                                                        origin: D
                                                    }),
                                                    a.updateds.forEach((function(e, i) {
                                                        e.call(_, {
                                                            target: p,
                                                            action: t,
                                                            param: r,
                                                            value: this,
                                                            preValue: d,
                                                            keyname: n,
                                                            origin: D
                                                        })
                                                    })),
                                                    f
                                            }
                                        })
                                    })),
                                        r.$index = function(t, n) {
                                            return e.array.index(this, t, n)
                                        },
                                        r.$include = function(t, n) {
                                            return e.array.compare(this, t, n)
                                        },
                                        r.$filter = function(t, n) {
                                            return e.array.filter(this, t, n)
                                        },
                                        r.$empty = function() {
                                            return e.array.empty(this)
                                        },
                                        r.$replace = function(t) {
                                            return e.array.replace(this, t)
                                        },
                                        r.$merge = function() {
                                            var t;
                                            return (t = e.array).merge.apply(t, [this].concat(Array.prototype.slice.call(arguments)))
                                        },
                                        r.$get = function(t, n) {
                                            return e.array.get(this, t, n)
                                        },
                                        r.$set = function(t, n, i) {
                                            return e.array.set(this, t, n, i)
                                        },
                                        r.$delete = function(t, n) {
                                            return e.array.delete(this, t, n)
                                        },
                                        r.$deleteIndex = function(t) {
                                            return e.array.deleteIndex(this, t)
                                        },
                                        t.__proto__ = r
                                } (r, i), r && "object" === e.typeof(r)) return fe(r)
                            }
                            n && Object.keys(n).forEach((function(e) {
                                s(n, e)
                            }))
                        } (n, i)
                    }
                    var pe = [];
                    function he(t, n) {
                        var i = e.array.index(pe, n, "field");
                        return !! (i > -1 && pe[i] && t.$options.el === pe[i].el) && (pe[i].disconnect && pe[i].disconnect(), !0)
                    }
                    function ge(n, i) {
                        var o = "string" == typeof n,
                            r = i;
                        N = [];
                        var c, s, d = e.unit.getKeyValue(n, D);
                        o && void 0 !== i ? (R && console.log("set ".concat(n, " ")), T = !0, xe.call(_, "beforeupdate", (_defineProperty(c = {
                                action: "set",
                                target: null,
                                value: r,
                                preValue: d
                            },
                            "action", "set"), _defineProperty(c, "keyname", n), _defineProperty(c, "origin", D), c)), a.beforeUpdates.forEach((function(e, t) {
                            var i;
                            e.call(_, (_defineProperty(i = {
                                    action: "set",
                                    target: null,
                                    value: r,
                                    preValue: d
                                },
                                "action", "set"), _defineProperty(i, "keyname", n), _defineProperty(i, "origin", D), i))
                        })), i && "object" === e.typeof(i) ? (r = t.extend(!0, {},
                            d, i), Object.keys(i).forEach((function(e, t) {
                            var a = n + "." + e;
                            xe.call(_, a, {
                                target: null,
                                value: i[e],
                                preValue: d,
                                action: "set",
                                keyname: a,
                                origin: D
                            })
                        }))) : r = i, e.unit.setKeyValue(n, r, l), e.unit.setKeyValue(n, r, D), xe.call(_, n, {
                            target: null,
                            value: r,
                            preValue: d,
                            action: "set",
                            keyname: n,
                            origin: D
                        }), xe.call(_, "updated", (_defineProperty(s = {
                                action: "set",
                                target: null,
                                value: r,
                                preValue: d
                            },
                            "action", "set"), _defineProperty(s, "keyname", n), _defineProperty(s, "origin", D), s)), a.updateds.forEach((function(e, t) {
                            var i;
                            e.call(_, (_defineProperty(i = {
                                    action: "set",
                                    target: null,
                                    value: r,
                                    preValue: d
                                },
                                "action", "set"), _defineProperty(i, "keyname", n), _defineProperty(i, "origin", D), i))
                        })), "object" === _typeof(i) && (i instanceof Array ? fe(l, n.split(u)) : fe(i)), N = []) : n && "object" === e.typeof(n) && (D = t.extend(!0, {},
                            D, n), ve(n));
                        return D
                    }
                    function me(t, n) {
                        return function(t, n) {
                            "string" == typeof t && (e.unit.delKey(t, D), n && n.call(_, t))
                        } (t, (function(e) {
                            xe(t)
                        })),
                            D
                    }
                    function ve(t, n) {
                        for (var i in t) {
                            var a = void 0 === n ? i: n + i,
                                o = t[i];
                            xe(a, {
                                target: null,
                                value: o,
                                preValue: D[i] || "undefined",
                                action: "set",
                                param: null,
                                keyname: a,
                                origin: D
                            }),
                            o && "object" === e.typeof(o) && ve(o, i + ".")
                        }
                    }
                    function be(t, n) {
                        var i = "";
                        return i = t && "array" === e.typeof(t) ? t.map((function(e, t) {
                            return b + "_" + c + u + e
                        })) : b + "_" + c + u + t,
                            C.on.call(_, i, n),
                            this
                    }
                    function ye(e, t) {
                        return I.hasOwnProperty(e) || (be(e, t), I[e] = t),
                            this
                    }
                    function we(e, t) {
                        if (e) {
                            var n = b + "_" + c + u + e;
                            C.off.call(_, n, t)
                        } else _.handle = {};
                        return this
                    }
                    function xe(e) {
                        var t = b + "_" + c + u + e;
                        arguments[0] = t;
                        var n = arguments[1] && arguments[1].value || arguments[1];
                        return R && console.warn(t, n, "trigger"),
                            C.trigger.apply(_, arguments),
                            y = !1,
                            w = !0,
                            this
                    }
                    return _
                }
            } (window.bui || {},
                window.libs),
            function(e, t) {
                e.viewport = function(n, i) {
                    e.trigger.call(e, "viewportbefore");
                    var a, o = t.extend(!0, {
                                uid: "",
                                width: "device-width",
                                initScale: 1,
                                maxScale: 1,
                                minScale: 1,
                                fit: "cover",
                                scalable: "no",
                                zoom: !0,
                                base: 750,
                                size: 0,
                                create: !1
                            },
                            e.config.viewport),
                        r = "object" == _typeof(n) ? t.extend(!0, o, n) : o,
                        l = document.querySelector("meta[name=viewport]"),
                        c = "width=".concat(r.width, ", initial-scale=").concat(r.initScale, ", maximum-scale=").concat(r.maxScale, ", minimum-scale=").concat(r.minScale, ", user-scalable=").concat(r.scalable, ",viewport-fit=").concat(r.fit),
                        s = window.devicePixelRatio,
                        u = document.documentElement.clientWidth,
                        d = document.documentElement.clientHeight,
                        f = parseInt(u) * parseInt(s),
                        p = parseInt(d) * parseInt(s);
                    if (u = u > d ? d + 24 : u, r.size = "number" == typeof n ? n: r.size || (u / r.base * 100).toFixed(2), l) r.create && (l.content = c);
                    else {
                        var h = document.createElement("meta");
                        h.name = "viewport",
                            h.content = c,
                            document.head.appendChild(h),
                            h = null
                    }
                    var g = e.array.index([240, 320, 360, 375, 384, 393, 412, 414, 435, 480, 512, 540, 768, 1024, 1080, 1536, 2048, 2732, 534, 854, 750], document.documentElement.clientWidth);
                    g > -1 && void 0 === n ? a = [32, 42.67, 48, 50, 51.2, 52.4, 54.93, 55.2, 58, 64, 68.27, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60][g] : v(r);
                    var m = {
                        width: function(e) {
                            return u || t("body").width() || t("#bui-router").width() || t(".bui-page").width()
                        },
                        height: function(e) {
                            return d || t("body").height() || t("#bui-router").height() || t(".bui-page").height()
                        },
                        fontSize: a,
                        screenWidth: function(e) {
                            return f
                        },
                        screenHeight: function(e) {
                            return p
                        },
                        ratio: function(e) {
                            return s
                        },
                        init: v
                    };
                    function v(t) {
                        var n = document.head.parentNode,
                            i = t.size;
                        return a = i || 48,
                        r.zoom && (n.style.fontSize = a + "px"),
                        r.uid && e.history.setUI && e.history.setUI({
                            uid: r.uid,
                            ui: m
                        }),
                            e.trigger.call(e, "viewportinit"),
                            this
                    }
                    return m
                }
            } (window.bui || {},
                window.libs),
            function(e, t) {
                e.loader = function(n) {
                    var i, o = t.extend({},
                            {
                                cache: !0,
                                log: !1,
                                baseUrl: "",
                                relativePath: "pages",
                                needNative: !1,
                                deepView: !1,
                                viewTag: "view",
                                componentTag: "component",
                                deepComponent: !0,
                                scriptSuffix: ".js"
                            },
                            e.config.loader, n),
                        r = e.emitter(),
                        l = [],
                        c = [],
                        s = {},
                        u = {
                            baseUrl: "",
                            modules: {},
                            globals: {}
                        },
                        d = {},
                        f = {
                            init: function(e) {
                                return e = e || {},
                                    o = t.extend({},
                                        o, e),
                                    f.config = o,
                                    this
                            },
                            config: o,
                            define: function(n, i, a) {
                                var r = {
                                        moduleName: "",
                                        template: "",
                                        script: "",
                                        path: "",
                                        props: null,
                                        isComponent: !1,
                                        params: null,
                                        data: null,
                                        depend: [],
                                        beforeCreate: null,
                                        created: null,
                                        beforeLoad: null,
                                        loaded: null,
                                        hide: null,
                                        exports: null,
                                        show: null,
                                        beforeDestroy: null,
                                        destroyed: null
                                    },
                                    l = {},
                                    c = "";
                                try {
                                    var s = v().name ? v() : function(e) {
                                            var t = window.location.pathname,
                                                n = t.indexOf(".html"),
                                                i = "",
                                                a = "";
                                            a = n > -1 ? (i = t.substr(1, n)) + ".js": (i = t.substr(1)) + ".js";
                                            return {
                                                name: i,
                                                src: a
                                            }
                                        } (),
                                        f = s.name
                                } catch(e) {}
                                var h = [];
                                if (void 0 === n) return e.showLog("define第1个参数不能为空"),
                                    this;
                                "function" == typeof n ? (a = n, c = f, i = []) : "object" === e.typeof(n) ? (c = f, i = n.depend || [], a = n.loaded, l = t.extend(!0, {},
                                    r, n)) : "array" === e.typeof(n) ? (a = i, i = n, c = f) : "function" == typeof i ? (c = n, a = i, i = []) : (c = n, i = i, a = a);
                                var g = d.hasOwnProperty(c) && d[c].script || s.src,
                                    y = window.location.href.substr(0, window.location.href.indexOf("#")).replace("index.html", "");
                                g = g.replace(y, ""),
                                o.log && console.log("define " + c),
                                i.length && (h = m(i, g));
                                if ("string" == typeof c && "function" == typeof a) { (l = n && "object" === e.typeof(n) ? t.extend(!0, {},
                                    r, d[c], e.config.loader.define, n) : t.extend(!0, {},
                                    r, d[c], e.config.loader.define)).moduleName = c,
                                    l.depend = h,
                                    l.style = [],
                                    l.script = g,
                                    l.path = g.substr(0, g.lastIndexOf("/") + 1),
                                    l.loaded = function() {
                                        var e = [b, d[f] && d[f].exports, d[f], u.globals],
                                            t = [];
                                        h.length && h.forEach((function(e, n) {
                                            d[e] && t.push(d[e].exports)
                                        }));
                                        var n = t.concat(e);
                                        return a && a.apply(this, n)
                                    },
                                    l.isDefined = !0,
                                    p(l)
                                } else e.showLog("define " + c + "模块的参数格式不对");
                                return l
                            },
                            global: function(e) {
                                if ("object" === _typeof(e)) p({
                                    globals: e
                                });
                                else {
                                    if ("function" != typeof e) return p().globals;
                                    p({
                                        globals: e.call(f, u.globals)
                                    })
                                }
                                return f
                            },
                            require: b,
                            destroy: function(n) {
                                o.log && console.log("destroy " + n);
                                var i = "string" == typeof n ? d[n] : null;
                                if (i) {
                                    i.beforeDestroy && i.beforeDestroy.call(i);
                                    var a = t('script[name="' + n + '"]').attr("src");
                                    l = e.array.remove(l, a),
                                        t('script[name="' + n + '"]').remove(),
                                        delete u.modules[n],
                                        d = u.modules,
                                    i.destroyed && i.destroyed.call(i)
                                }
                            },
                            map: p,
                            import: S,
                            importCss: function(t, n) {
                                return new Promise((function(i, a) {
                                    if ("string" == typeof t) {
                                        var r = e.hasRouter ? t: e.unit.relativePath(t, o.relativePath),
                                            l = document.createElement("link") || {};
                                        l.href = r + (o.cache ? "": "?t=" + (new Date).getTime()),
                                            l.setAttribute("rel", "stylesheet"),
                                            l.setAttribute("type", "text/css"),
                                        n && l.setAttribute("id", n),
                                        document.head && document.head.appendChild(l),
                                            l = null,
                                            i(t, n)
                                    } else e.showLog(t + "的格式不正确")
                                }))
                            },
                            importSync: j,
                            importHtml: L,
                            load: w,
                            checkLoad: function(t) {
                                var n = !0,
                                    i = [];
                                if (d = u.modules, "string" == typeof t) {
                                    t.indexOf(",") > -1 ? i = t.split(",") : i.push(t)
                                } else t && "array" === e.typeof(t) && (i = t || []);
                                if (i.length) i.forEach((function(e, t) {
                                    d.hasOwnProperty(e) || (n = !1),
                                    d[e] && !1 === d[e].isLoaded && (n = !1)
                                }));
                                else for (var a in d) d[a] && !1 === d[a].isLoaded && (n = !1);
                                return n
                            },
                            components: I,
                            component: k,
                            delay: function(n) {
                                for (var i = t.extend(!0, {
                                        id: "",
                                        deepView: o.deepView,
                                        deepComponent: o.deepComponent,
                                        delay: !1,
                                        everytime: !1,
                                        param: null,
                                        beforeLoad: null,
                                        loaded: null,
                                        compiled: null
                                    },
                                    n), a = e.$(i.id), r = 0; r < a.length; r++) {
                                    var l = a[r],
                                        c = l && l.getAttribute("delay"),
                                        s = l && l.tagName.toLowerCase(); ("true" === c || i.everytime) && ("true" === c && s === o.componentTag || i.everytime ? (i.isSelf = !0, i.id = l, i.everytime ? l.removeAttribute("delay") : l.setAttribute("delay", "false"), k(i)) : "true" === c && s === o.viewTag || i.everytime ? (i.isSelf = !0, i.id = l, l.removeAttribute("delay"), P(i)) : (i.isSelf = !1, s = t(l).find('[delay="true"]')[0] && t(l).find('[delay="true"]')[0].tagName.toLowerCase(), t(l).find('[delay="true"]').removeAttr("delay"), s === o.componentTag && k(i), s === o.viewTag && P(i)))
                                }
                                return this
                            },
                            views: C,
                            view: P,
                            get: function(e) {
                                if ("string" == typeof e) return u.modules[e] || null
                            },
                            set: h,
                            one: function(e, t) {
                                return r.one.apply(f, arguments),
                                    this
                            },
                            wait: function(e, t) {
                                return r.wait.apply(f, arguments),
                                    this
                            },
                            waited: function(e, t) {
                                return r.waited.apply(f, arguments),
                                    this
                            },
                            on: function(t, n) {
                                var i = e.history.getLast("id"),
                                    a = arguments,
                                    o = e.unit.stringToArray(t);
                                return o.forEach((function(e, t) {
                                    a[0] = i + "-" + e,
                                        r.on.apply(f, a)
                                })),
                                    this
                            },
                            off: function(t, n) {
                                var i = e.history.getLast("id"),
                                    a = arguments,
                                    o = e.unit.stringToArray(t);
                                return o.forEach((function(e, t) {
                                    a[0] = i + "-" + e,
                                        r.off.apply(f, a)
                                })),
                                    this
                            },
                            trigger: D
                        };
                    function p(n) {
                        if (void 0 === n) return u;
                        if ("object" === _typeof(n) && (n.hasOwnProperty("modules") || n.hasOwnProperty("baseUrl") || n.hasOwnProperty("globals"))) u = t.extend(!0, {},
                            u, n),
                            d = u.modules;
                        else if ("object" === _typeof(n) && n.hasOwnProperty("moduleName")) {
                            var i = function(n) {
                                var i = {
                                        id: "",
                                        moduleName: "",
                                        template: "",
                                        data: null,
                                        props: null,
                                        isComponent: !1,
                                        params: null,
                                        depend: [],
                                        script: "",
                                        style: [],
                                        isDefined: !1,
                                        isLoaded: !1,
                                        beforeCreate: null,
                                        created: null,
                                        beforeLoad: null,
                                        loaded: null,
                                        show: null,
                                        hide: null,
                                        beforeDestroy: null,
                                        destroyed: null,
                                        path: "",
                                        exports: {},
                                        dependExports: []
                                    },
                                    a = {};
                                d.hasOwnProperty(n.moduleName) && (a = t.extend(!0, {},
                                    d[n.moduleName]));
                                var o = t.extend(!0, {},
                                    i, a, n);
                                n.props && (o.props = n.props);
                                return o.params = e.history.getParams("url"),
                                    o
                            } (n);
                            d[n.moduleName] = i || {},
                                u = t.extend(!0, u, {
                                    modules: d
                                }),
                                d = u.modules
                        }
                        return u
                    }
                    function h(t, n) {
                        if (n && "object" === e.typeof(n)) {
                            if (n.moduleName = t, n.hasOwnProperty("loaded") && "function" == typeof n.loaded) {
                                var i = n.loaded;
                                n.loaded = function() {
                                    d = u.modules;
                                    var e = n.moduleName,
                                        t = d[e].depend,
                                        a = [b, d[e] && d[e].exports, d[e], u.globals],
                                        o = [];
                                    t.length && t.forEach((function(e, t) {
                                        d[e] && o.push(d[e].exports)
                                    }));
                                    var r = o.concat(a);
                                    return i && i.apply(this, r)
                                },
                                    n.script = n.moduleName + ".js",
                                    n.path = n.script.substr(0, n.script.lastIndexOf("/") + 1)
                            }
                            n.depend && n.depend.length && (n.depend = m(n.depend, n.script)),
                                p(n)
                        }
                        return this
                    }
                    function g(e, t) {
                        var n = e,
                            i = t.lastIndexOf("/"),
                            a = t.substr(0, i);
                        return e.indexOf("../") > -1 ? (e = e.replace(/\..\//g, (function(e) {
                            var t = a.lastIndexOf("/");
                            return a = a.substr(0, t),
                                ""
                        })), n = a ? a + "/" + e: e) : e.indexOf("./") > -1 && (n = a + "/" + e.replace(/\.\//g, "")),
                            n
                    }
                    function m(e, t) {
                        for (var n = [], i = 0; i < e.length; i++) {
                            var a = e[i],
                                o = a.indexOf("./") > -1 ? g(a, t) : a;
                            if (o.indexOf(".css") > -1) o.indexOf("css!") > -1 ? styles.push(o.substr(4)) : styles.push(o);
                            else {
                                var r = o.indexOf(".js");
                                r > -1 && (o = o.substr(0, r)),
                                    n.push(o),
                                d.hasOwnProperty(o) || p({
                                    moduleName: o
                                })
                            }
                        }
                        return n
                    }
                    function v() {
                        var e, n = window.location.href,
                            r = [],
                            l = document.currentScript;
                        if (n.indexOf("#") > -1 ? r = n.split("#") : r.push(n), i = r[0].replace("/index.html", "") + "/", l) return e = l.src.replace(i, ""),
                            {
                                name: l.getAttribute("name") || e.substr("0", e.indexOf(o.scriptSuffix)),
                                src: e
                            };
                        try {
                            a()
                        } catch(e) {
                            var c = (c = (e.stack || e.sourceURL || e.stacktrace || "").split(/[@ ]/g).pop().replace(/(:\d+)?:\d+$/i, "")).replace(new RegExp(i, "g"), "");
                            return {
                                name: (l = t('script[src="' + c + '"]')[0]) ? l.getAttribute("name") : c.replace(o.scriptSuffix, ""),
                                src: c
                            }
                        }
                    }
                    function b(t, n, i) {
                        if (o.log && console.log("require " + t), i = 1 == i, "boolean" == typeof n && (i = n, n = function() {}), t && "string" == typeof t) {
                            if (t.indexOf(".css") > -1) return S(t, n);
                            if (t.indexOf(".html") > -1) return S(t, n);
                            t = [t]
                        }
                        if (n && "function" != typeof n && "boolean" != typeof n) return e.showLog("require第2个参数格式为函数或布尔值", "bui.loader.require"),
                            this;
                        try {
                            return function(t, n, i) {
                                var a = [];
                                function r(t, n) {
                                    t = t || [],
                                        d = u.modules;
                                    var i = e.array.uniq(t);
                                    i.length > 1 && i.forEach((function(e, t) {
                                        var n = d[e]; (n && 1 == n.isLoaded || n.loaded) && i.splice(t, 1)
                                    })),
                                        i.forEach((function(t, l) {
                                            var c = d[t];
                                            if (d[t] && d[t].style && d[t] && d[t].style.length && N(d[t].style), e.array.compare(a, t) || a.unshift(t), c && c.isLoaded) {
                                                if (!1 === (c && c.beforeLoad && c.beforeLoad.call(c, c.depend))) return ! 1;
                                                l == i.length - 1 && (n && n.apply(c), a = [])
                                            } else if (c && c.loaded) {
                                                if (s(t, l), !1 === (d[t].beforeCreate && d[t].beforeCreate.call(d[t]))) return ! 1;
                                                d[t].created && d[t].created.call(d[t])
                                            } else E(t, (function() {
                                                var e = d[t];
                                                if (!1 === (e && e.beforeCreate && e.beforeCreate.call(d[t]))) return ! 1;
                                                e && e.style && e.style.length && N(e.style),
                                                e && e.created && e.created.call(d[t]),
                                                    s(t, l)
                                            }), (function() {
                                                l == i.length - 1 && (n && n.apply(null), a = [])
                                            }));
                                            function s(e, t) {
                                                var a = d[e];
                                                return a && (a.isDefined = !0),
                                                    a.id = c ? c.id: "",
                                                    a.props = c ? c.props: {},
                                                !1 !== (a && a.beforeLoad && a.beforeLoad.call(a, a.depend)) && (a && a.depend && a.depend.length ? (o.log && console.warn(a.moduleName + " depend:"), o.log && console.log(a.depend), void r(a.depend, n)) : void(t == i.length - 1 && n && n.apply(a)))
                                            }
                                        }))
                                }
                                return new Promise((function(l, c) {
                                    r(t, (function() {
                                        if (function(e) {
                                            var t = !0,
                                                n = e || [];
                                            if (d = u.modules, n.length) for (var i = 0; i < n.length; i++) {
                                                var a = n[i],
                                                    r = d[a];
                                                if (r && !1 === r.isDefined) return t = !1,
                                                o.log && console.warn("check defined false:" + r.moduleName),
                                                o.log && console.warn("wait modules:"),
                                                o.log && console.warn(n),
                                                    t
                                            } else for (var l in d) if (d[l] && !1 === d[l].isDefined) return t = !1,
                                            o.log && console.warn("check defined false:" + r.moduleName),
                                                t;
                                            return t
                                        } (a)) {
                                            var r = [];
                                            t.forEach((function(a, o) {
                                                h(a, {
                                                    params: e.history.getParams("url")
                                                }),
                                                    y(a, i),
                                                    r.push(d[a] && d[a].exports),
                                                o === t.length - 1 && (n && n.apply(f, r || []), l.apply(f, r || []))
                                            }))
                                        }
                                    }))
                                }))
                            } (t = t.map((function(t, n) {
                                return e.unit.resolvePath(t)
                            })), n, i)
                        } catch(t) {
                            e.showLog(t, "bui.loader.require")
                        }
                        return this
                    }
                    function y(t, n) {
                        d = u.modules;
                        var i = "string" == typeof t ? d[t] || {}: t,
                            a = i.depend || [],
                            r = null,
                            l = [];
                        i.dependExports = [];
                        try {
                            if (a.length) for (var c = 0; c < a.length; c++) {
                                var s = a[c],
                                    f = d[s];
                                f.isLoaded ? l[c] = f.exports: l[c] = y(f) || f.exports,
                                    f.exports = l[c],
                                    i.dependExports.push(l[c]),
                                    f.isLoaded = !0
                            }
                            r = i.isLoaded && !i.isComponent || i.isLoaded && !n ? i.exports: i.loaded && i.loaded.apply(i, l),
                                i.exports = r || d[i.moduleName] && d[i.moduleName].exports,
                                i.isLoaded = !0,
                                D(i.moduleName, i, i.exports),
                            o.log && console.log("execute " + i.moduleName)
                        } catch(t) {
                            e.showLog(t, "bui.loader.execute")
                        }
                        return r
                    }
                    function w(n) {
                        var i = t.extend(!0, {
                                    id: "",
                                    cacheHtml: !1,
                                    cache: !1,
                                    url: "",
                                    script: "",
                                    param: null,
                                    template: null,
                                    beforeLoad: null,
                                    reload: !0,
                                    loaded: null
                                },
                                e.config.loader.load, n),
                            a = t.Deferred();
                        if (i.id) {
                            if (i.url) {
                                if (!1 === ("function" == typeof i.beforeLoad ? i.beforeLoad.call(f) : i.beforeLoad)) return this;
                                var o = function(e) {
                                    var t = d,
                                        n = {},
                                        i = e && e.indexOf(".html");
                                    i > -1 ? (n.url = e, n.module = e.substr(0, i)) : (n.url = t[e] && t[e].template || e + ".html", n.module = e);
                                    return n
                                } (i.url);
                                if (i.script) {
                                    var r = i.script.indexOf(".js");
                                    o.module = i.script.substr(0, r)
                                }
                                var l = "string" == typeof i.id && (i.id.indexOf("#") > -1 || i.id.indexOf(".") > -1) ? i.id.substr(1) : i.id;
                                i.id = l,
                                    i.name = o.module,
                                    i.url = o.url,
                                    p({
                                        id: l,
                                        moduleName: o.module,
                                        props: i.param
                                    }),
                                    e.history.getLast().currentComponent = l,
                                    e.history.setComponent({
                                        id: i.id,
                                        name: i.name,
                                        url: i.url,
                                        param: i.param || null
                                    });
                                var c = p().modules[i.name];
                                if (c && "function" == typeof c.template) {
                                    var s = c.template.call(c) || "";
                                    return ! i.cacheHtml && e.obj(i.id).html(s),
                                        x(i),
                                        this
                                }
                                if (i.cacheHtml) return x(i),
                                    this;
                                if ("function" == typeof o.url) {
                                    var u = o.url(i) || "";
                                    return ! i.cacheHtml && e.obj(i.id).html(u),
                                        x(i),
                                        this
                                }
                                return S(o.url, (function(t) { ! i.cacheHtml && e.obj(i.id).html(t),
                                    x(i)
                                }), (function(e) {
                                    i.onFail && i.onFail.call(this, o),
                                        a.reject.call(this, o)
                                })),
                                    this
                            }
                            e.showLog("url不能为空")
                        } else e.showLog("id不能为空")
                    }
                    function x(n) {
                        var i = p().modules[n.name];
                        if (!1 === (i.beforeLoad && i.beforeLoad.call(i, i.depend))) return ! 1;
                        if (h(n.name, {
                            id: n.id,
                            props: n.param || null,
                            isComponent: !0,
                            $: function(e) {
                                function t(t) {
                                    return e.apply(this, arguments)
                                }
                                return t.toString = function() {
                                    return e.toString()
                                },
                                    t
                            } ((function(e) {
                                return t("#" + n.id).find(e)
                            }))
                        }), i.isLoaded && "function" == typeof i.loaded && !n.cache) {
                            i.id = n.id,
                                i.exports = i.loaded && i.loaded.call(i, i.exports) || i.exports;
                            var a = {
                                id: n.id,
                                name: n.name,
                                url: n.url,
                                param: n.param || null,
                                exports: i.exports || {}
                            };
                            return e.history.setComponent(a),
                            window.store && window.store.$mount && window.store.$mount(n.id),
                            n.loaded && n.loaded.call(i, i.exports),
                                D(n.id, a),
                                f
                        }
                        e.checkLoad(n.name),
                            b(n.name, (function(t) {
                                var a = {
                                    id: n.id,
                                    name: n.name,
                                    url: n.url,
                                    param: n.param || null,
                                    exports: t || {}
                                };
                                e.history.setComponent(a),
                                window.store && window.store.$mount && window.store.$mount(n.id),
                                n.loaded && n.loaded.call(i, t),
                                    D(n.id, a)
                            }), n.reload)
                    }
                    function k(n) {
                        var i = t.extend(!0, {
                                    id: "",
                                    isSelf: !0,
                                    deepComponent: o.deepComponent,
                                    cache: !1,
                                    cacheHtml: !1,
                                    delay: !0,
                                    param: null,
                                    beforeLoad: null,
                                    loaded: null,
                                    compiled: null
                                },
                                e.config.loader.component, n),
                            a = null;
                        a = "" === i.id ? e.$(o.componentTag) : i.isSelf ? e.$(i.id) : e.$(i.id).find(o.componentTag);
                        for (var r = [], l = [], c = [], s = [], u = p().modules, d = 0; d < a.length; d++) {
                            var f = a[d],
                                h = e.guid(); ! f.id && f.setAttribute("id", h);
                            var g = e.unit.getAttributes(f),
                                m = g.parentId = i && i.id || e.history.getLast().id || "bui-page",
                                v = e.$(m).parents("component"),
                                b = i.isSelf ? v[0] && v[0].id: i.id;
                            "array" === e.typeof(m) ? b = i.isSelf ? v && v[0].id: m[0].id: "object" == _typeof(g.parentId) && e.typeof(g.parentId).indexOf("element") > -1 && (b = i.isSelf ? v[0] && v[0].id: m.id);
                            var y = b && e.history.getComponent(b, "name");
                            if (y) g.parentId = b,
                                g.parentName = y;
                            else {
                                var x = e.history.getLast();
                                g.parentId = x.id,
                                    g.parentName = x.name
                            }
                            var k = g.name || f.getAttribute("name"),
                                I = "true" === g.rendered || i.cacheHtml;
                            if (k && (!g.delay || !i.delay)) {
                                g = t.extend(!0, {},
                                    g, i.param);
                                var O = u[k],
                                    C = f.innerHTML,
                                    P = O && "string" == typeof O.template ? O.template: k + ".html",
                                    S = O && O.script ? O.script: k + ".js";
                                P = P || k + ".html",
                                    O && "function" == typeof O.template ? r.push({
                                        id: f.id,
                                        el: f,
                                        name: k,
                                        cacheHtml: I,
                                        cache: i.cache,
                                        deepComponent: i.deepComponent,
                                        template: O.template || "",
                                        url: P,
                                        srcript: S,
                                        slot: C,
                                        param: g
                                    }) : (c.push(P), s.push(S), l.push({
                                        id: f.id,
                                        el: f,
                                        name: k,
                                        cacheHtml: I,
                                        cache: i.cache,
                                        deepComponent: i.deepComponent,
                                        url: P,
                                        srcript: S,
                                        slot: C,
                                        param: g
                                    }))
                            }
                        }
                        return r.length && (r.forEach((function(e, t) {
                            w({
                                id: e.id,
                                url: e.url,
                                param: e.param || null,
                                template: e.template,
                                cacheHtml: e.cacheHtml,
                                cache: e.cache,
                                beforeLoad: i.beforeLoad
                            })
                        })), i.data = r, T(i)),
                            l.length ? (j(e.array.merge(c, s), (function(e) { !
                                function t(n) {
                                    var a = l[n];
                                    return n == l.length ? (i.data = l, T(i), this) : a ? (a.template = e[n], void w({
                                        id: a.id,
                                        url: a.url,
                                        param: a.param || null,
                                        cacheHtml: a.cacheHtml,
                                        cache: a.cache,
                                        beforeLoad: i.beforeLoad,
                                        loaded: function(e) {
                                            t(n + 1)
                                        },
                                        onFail: function() {
                                            t(n + 1)
                                        }
                                    })) : this
                                } (0)
                            })), this) : (i.compiled && i.compiled(i.data), D("componentcompiled", i.data), !1)
                    }
                    function I(e) {
                        return k(t.extend(!0, {
                                id: "",
                                isSelf: !1,
                                deepComponent: o.deepComponent,
                                cache: !1,
                                cacheHtml: !1,
                                beforeLoad: null,
                                loaded: null,
                                compiled: null
                            },
                            e)),
                            this
                    }
                    function T(t) {
                        for (var n = 0; n < t.data.length; n++) {
                            var i = t.data[n];
                            new RegExp("<".concat(o.viewTag, ".+name="), "gi").test(i.template) && C({
                                id: i.id
                            });
                            var a = new RegExp("<".concat(o.componentTag, ".+name="), "gi");
                            new RegExp("<".concat(o.componentTag, '.+name="').concat(i.name, '"'), "gi").test(i.template) ? e.showLog("请检查代码, <".concat(o.componentTag, ' name="').concat(i.name, '"></').concat(o.componentTag, ">的模板里面存在循环嵌套")) : (t.deepComponent && a.test(i.template) && I({
                                id: i.id
                            }), t.loaded && t.loaded(i), D("componentloaded", i))
                        }
                        t.compiled && t.compiled(t.data),
                            D("componentcompiled", t.data)
                    }
                    function O(n) {
                        for (var i = 0; i < n.data.length; i++) {
                            var a = n.data[i];
                            if (!a.cacheHtml) {
                                a.el.innerHTML = a.template;
                                var r = new RegExp("<".concat(o.componentTag, ".+name"), "gi");
                                new RegExp("<".concat(o.componentTag, '.+name="').concat(a.name, '"'), "gi"),
                                r.test(a.template) && I({
                                    id: a.id
                                });
                                var l = new RegExp("<".concat(o.viewTag, '.+name="').concat(a.name, '"'), "gi"),
                                    c = new RegExp("<".concat(o.viewTag, '.+name="').concat(a.name, '"'), "gi");
                                if (c.test(a.template)) {
                                    e.showLog("请检查代码, <".concat(o.viewTag, ' name="').concat(a.name, '"></').concat(o.viewTag, ">的模板里面存在循环嵌套"));
                                    continue
                                }
                                n.deepView && l.test(a.template) && !c.test(a.template) && C({
                                    id: t(a.el)
                                })
                            }
                            n.loaded && n.loaded(a),
                                D("viewloaded", a)
                        }
                        n.compiled && n.compiled(n.data),
                            D("viewcompiled", n.data)
                    }
                    function C(e) {
                        return P(t.extend(!0, {
                                id: "",
                                isSelf: !1,
                                deepView: o.deepView,
                                loaded: null,
                                compiled: null
                            },
                            e)),
                            this
                    }
                    function P(n) {
                        var i = t.extend(!0, {
                                    id: "",
                                    isSelf: !0,
                                    deepView: o.deepView,
                                    loaded: null,
                                    compiled: null
                                },
                                n),
                            a = null;
                        a = "" === i.id ? e.$(o.viewTag) : i.isSelf ? e.$(i.id) : e.$(i.id).find(o.viewTag);
                        for (var r = [], l = [], c = loader.map().modules, s = 0; s < a.length; s++) {
                            var u = a[s],
                                d = u.getAttribute("name"),
                                f = u.getAttribute("delay"),
                                p = c[d],
                                h = "true" === u.getAttribute("rendered"),
                                g = e.guid();
                            if (!u.id && u.setAttribute("id", g), "true" !== f) {
                                var m = u.innerHTML,
                                    v = p && p.template ? p.template: d + ".html";
                                p && "function" == typeof p.template ? l.push({
                                    id: u.id,
                                    el: u,
                                    name: d,
                                    cacheHtml: h,
                                    template: p.template.call(p) || "",
                                    url: v,
                                    slot: m
                                }) : r.push({
                                    id: u.id,
                                    el: u,
                                    name: d,
                                    cacheHtml: h,
                                    url: v,
                                    slot: m
                                })
                            }
                        }
                        return l.length && (l.forEach((function(e, t) {
                            e.el.innerHTML = e.template,
                            window.store && window.store.$mount && window.store.$mount(i.id)
                        })), i.data = l, O(i)),
                            function e(t) {
                                if (t == r.length) return i.data = r,
                                    void O(i);
                                r[t] && L(r[t].url, (function(n) {
                                    r[t].template = n,
                                        e(t + 1)
                                }), (function(n) {
                                    r[t].template = "",
                                        e(t + 1)
                                }))
                            } (0),
                            this
                    }
                    function S(n, i, a) {
                        return new Promise((function(o, r) {
                            if ("string" == typeof n)(n = e.unit.resolvePath(n)).indexOf(".css") > -1 ? (i && i(n), B(n).then((function(e) {
                                o(n)
                            }))) : n.indexOf(".html") > -1 || n.indexOf(".htm") > -1 ? L(n).then((function(e) {
                                if ("function" != typeof i) return t(i).html(e),
                                a && a(e),
                                    void o(e);
                                i && i(e),
                                    o(e)
                            }), (function(e) {
                                a && a(e),
                                    r(e)
                            })) : E(n).then((function(e) {
                                i && i(e),
                                    o(e)
                            }), (function(e) {
                                a && a(e),
                                    r(e)
                            }));
                            else if (n && "array" === e.typeof(n)) {
                                var l = n.map((function(t, n) {
                                    return (t = e.unit.resolvePath(t)).indexOf(".css") > -1 ? B(t) : t.indexOf(".html") > -1 || t.indexOf(".htm") > -1 ? L(t) : E(t)
                                }));
                                Promise.all(l).then((function(e) {
                                    i && i(e),
                                        o(e)
                                }), (function(e) {
                                    a && a(e),
                                        r(e)
                                }))
                            }
                        }))
                    }
                    function j(t, n, i) {
                        return new Promise((function(a, o) {
                            if ("string" == typeof t) S(t, n, i);
                            else if (t && "array" === e.typeof(t)) {
                                var r = []; !
                                    function i(o) {
                                        if (o == t.length) return n && n(r),
                                            void a(r);
                                        var l = e.unit.resolvePath(t[o]);
                                        return l.indexOf(".css") > -1 ? B(l, (function(e) {
                                            r.push(e),
                                                i(o + 1)
                                        })) : l.indexOf(".html") > -1 || l.indexOf(".htm") > -1 ? L(l, (function(e) {
                                            r.push(e),
                                                i(o + 1)
                                        }), (function(e) {
                                            i(o + 1)
                                        })) : E(l, (function(e) {
                                            r.push(e),
                                                i(o + 1)
                                        }), (function(e) {
                                            i(o + 1)
                                        }))
                                    } (0)
                            }
                        }))
                    }
                    function L(t, n, i) {
                        return new Promise((function(a, r) {
                            var l = "function" == typeof n;
                            if (t = e.hasRouter ? t: e.unit.relativePath(t, o.relativePath), s.hasOwnProperty(t)) return l ? n && n.call(f, s[t], 200) : "string" == typeof n && e.$(n).html(s[t]),
                                a(s[t], 200),
                                this;
                            "string" == typeof t && bui.ajax({
                                baseUrl: o.baseUrl,
                                url: t,
                                dataType: "html",
                                contentType: "text/html;charset=UTF-8",
                                mimeType: "html",
                                processData: !1,
                                needNative: o.needNative,
                                cache: o.cache,
                                data: null,
                                success: function(o, r, c) {
                                    s[t] = o,
                                        l ? n && n.call(f, o, r, c) : "string" == typeof n && (e.$(n).html(o), i && i.call(f, o, r, c)),
                                        a(o, r)
                                },
                                error: function(e, t, n) {
                                    l && i && i.call(f, e, t, n),
                                        r(e, t, n)
                                }
                            })
                        }))
                    }
                    function E(n, i, a) {
                        return new Promise((function(r, c) {
                            var s;
                            if (d = u.modules, void 0 === n || "" == n) return a && a.call(this, n),
                                c(n),
                                this;
                            if (n in d) s = n,
                                n = d[n].script || s + o.scriptSuffix;
                            else {
                                var f = n.indexOf(o.scriptSuffix);
                                f > -1 ? s = (n = n).substr(0, f) : (s = n, n += o.scriptSuffix)
                            }
                            n = e.hasRouter ? n: e.unit.relativePath(n, o.relativePath);
                            var p = document.createElement("script") || {},
                                h = o.cache ? "": "?t=" + (new Date).getTime(),
                                g = n.indexOf("http://") > -1 || n.indexOf("https://") > -1;
                            p.type = "text/javascript",
                                p.async = !1,
                                p.src = g ? n + h: u.baseUrl + n + h,
                                p.setAttribute("name", s),
                                p.onload = function() {
                                    o.log && console.log("create " + n),
                                    i && i(n),
                                        r(n)
                                },
                                p.onerror = function(e) {
                                    o.log && console.log("createError " + n),
                                    a && a(n),
                                        c(n)
                                };
                            var m = e.array.index(l, n);
                            return d[s] && d[s].isDefined ? (i && i(n), r(n)) : (m > -1 && d.hasOwnProperty(s) && t('script[name="' + s + '"]').remove(), m > -1 && !d.hasOwnProperty(s) && t('script[name="' + s + '"]').remove(), document.body && document.body.appendChild(p), o.cache && l.push(n)),
                                p = null,
                                this
                        }))
                    }
                    function N(t) {
                        return new Promise((function(n, i) {
                            if (t.length, "array" === e.typeof(t)) {
                                var a = t.map((function(e) {
                                    return B(e)
                                }));
                                return Promise.all(a)
                            }
                            return B(t)
                        }))
                    }
                    function B(t, n) {
                        return new Promise((function(i, a) {
                            if ("string" == typeof t) {
                                if (e.array.index(c, t) < 0) {
                                    var r = e.hasRouter ? t: e.unit.relativePath(t, o.relativePath),
                                        l = document.createElement("link") || {};
                                    l.href = r + (o.cache ? "": "?t=" + (new Date).getTime()),
                                        l.setAttribute("rel", "stylesheet"),
                                        l.setAttribute("type", "text/css"),
                                    document.head && document.head.appendChild(l),
                                        l = null,
                                        c.push(t)
                                }
                                i(t, n)
                            } else e.showLog(t + "的格式不正确")
                        }))
                    }
                    function D(t) {
                        f.self = this == window || this == f ? null: this;
                        var n = e.history.getLast("id");
                        arguments[0] = n + "-" + t,
                            r.trigger.apply(f, arguments)
                    }
                    return f
                },
                    window.loader = e.loader(),
                    e.define = loader.define,
                    e.require = loader.require,
                    e.map = loader.map,
                    e.import = loader.import,
                    e.checkLoad = loader.checkLoad,
                    e.checkDefine = loader.checkDefine,
                    e.checkImport = loader.checkImport
            } (window.bui || {},
                window.libs),
            function(e, t) {
                e.toggle = function(n) {
                    if ("string" == typeof n) {
                        var i = n || ""; (n = {}).id = i
                    }
                    var a, o, r = {
                            show: function(t, n) {
                                if (s) return;
                                if (d = e.objId(l.id), !f && !p) return ! 1;
                                f = !1,
                                    "function" == typeof t ? (t = t, n = n || o || "") : (n = t || o || "", t = null);
                                d[0] && "none" == d[0].style.display && d.css("display", c);
                                d.addClass("animated " + n),
                                    "showIn" == n || "showOut" == n || "none" == n ? (l.revert && d.removeClass("animated " + n), t && t.call(r, this), h = !0, f = !0) : d.one("webkitAnimationEnd", (function() {
                                        try { ! h && d.css("display", c),
                                        l.revert && d.removeClass("animated " + n),
                                        t && t.call(r, this),
                                            h = !0,
                                            f = !0
                                        } catch(t) {
                                            e.showLog(t, "toggle show method")
                                        }
                                    }));
                                return this
                            },
                            hide: function(t, n) {
                                if (s) return;
                                if (d = e.objId(l.id), !f && !p) return;
                                p = !1,
                                    "function" == typeof t ? (t = t, n = n || a || "") : (n = t || a || "", t = null);
                                d.css("display", c).addClass("animated " + n),
                                    "showIn" == n || "showOut" == n || "none" == n ? (d.css("display", "none"), l.revert && d.removeClass("animated " + n), t && t.call(r, this), h = !1, p = !0) : d.one("webkitAnimationEnd", (function() {
                                        try {
                                            d.css("display", "none"),
                                            l.revert && d.removeClass("animated " + n),
                                            t && t.call(r, this),
                                                h = !1,
                                                p = !0
                                        } catch(t) {
                                            e.showLog(t, "toggle hide method")
                                        }
                                    }));
                                return this
                            },
                            remove: function() {
                                return d.remove(),
                                    this
                            },
                            isShow: function() {
                                return h
                            },
                            destroy: function(e) {
                                e = 1 == e;
                                d && (d.off(), e && d.remove());
                                s = !0
                            },
                            widget: function(t) {
                                return e.widget.call({},
                                    t)
                            },
                            option: function(t, n) {
                                return e.option.call(r, t, n)
                            },
                            config: l,
                            init: g
                        },
                        l = r.config = t.extend(!0, {},
                            {
                                id: "",
                                uid: "",
                                effect: "fadeIn",
                                useBox: !1,
                                revert: !0,
                                inOrder: !1
                            },
                            n),
                        c = l.useBox ? "-webkit-box": "block",
                        s = !1,
                        u = {
                            show: ["fadeIn", "fadeInLeft", "fadeInRight", "fadeInDown", "fadeInUp", "fadeInLeftBig", "fadeInRightBig", "fadeInUpBig", "fadeInDownBig", "zoomIn", "bounceIn", "rotateIn", "rollIn", "flipInX", "flipInY", "lightSpeedIn", "showIn", "slideInRight", "slideInLeft", "coverInLeft", "coverInRight", "zoomSlideInLeft", "zoomSlideInRight", "pushInLeft", "pushInRight"],
                            hide: ["fadeOut", "fadeOutLeft", "fadeOutRight", "fadeOutUp", "fadeOutDown", "fadeOutLeftBig", "fadeOutRightBig", "fadeOutDownBig", "fadeOutUpBig", "zoomOut", "bounceOut", "rotateOut", "rollOut", "flipOutX", "flipOutY", "lightSpeedOut", "showOut", "slideOutRight", "slideOutLeft", "coverOutLeft", "coverOutRight", "zoomSlideOutLeft", "zoomSlideOutRight", "pushOutLeft", "pushOutRight"],
                            hideInOrder: ["fadeOut", "fadeOutRight", "fadeOutLeft", "fadeOutDown", "fadeOutUp", "fadeOutRightBig", "fadeOutLeftBig", "fadeOutUpBig", "fadeOutDownBig", "zoomOut", "bounceOut", "rotateOut", "rollOut", "flipOutX", "flipOutY", "lightSpeedOut", "showOut", "slideOutLeft", "slideOutRight", "coverOutRight", "coverOutLeft", "zoomSlideOutRight", "zoomSlideOutLeft", "pushOutRight", "pushOutLeft"]
                        },
                        d = null,
                        f = !0,
                        p = !0,
                        h = !1;
                    function g(t) {
                        if (s = !1, (t = t || l).id) {
                            d = e.objId(t.id),
                                l = r.config = t,
                                d.attr("class");
                            var n = t.effect,
                                i = t.inOrder ? e.array.index(u.hideInOrder, n) : e.array.index(u.hide, n),
                                c = n && (e.array.index(u.show, n) > -1 ? e.array.index(u.show, n) : i);
                            return h = !(d[0] && "none" == d[0].style.display || "none" == d.css("display")),
                                c < 0 ? (o = u.show[0], a = t.inOrder ? u.hideInOrder[0] : u.hide[0]) : (o = u.show[c], a = t.inOrder ? u.hideInOrder[c] : u.hide[c]),
                            t.uid && e.history.setUI && e.history.setUI({
                                uid: t.uid,
                                ui: r
                            }),
                                this
                        }
                        e.showLog("toggle id不能为空", "bui.toggle")
                    }
                    return l.id && g(l),
                        r
                }
            } (window.bui || {},
                window.libs),
            function(e, t) {
                e.unit = {},
                    e.unit.remToPx = function(e) {
                        var t = window && window.viewport && window.viewport.fontSize || 100;
                        return e = (parseFloat(e) * t).toFixed(2)
                    },
                    e.unit.pxToRem = function(e) {
                        var t = window && window.viewport && window.viewport.fontSize || 100;
                        return e = (parseFloat(e) / t).toFixed(2)
                    },
                    e.unit.pxToRemZoom = function(e) {
                        return e = (parseFloat(e) / 100).toFixed(2)
                    },
                    e.unit.debounce = function(e, t, n) {
                        var i;
                        return function() {
                            var a = n || this,
                                o = arguments,
                                r = function() {
                                    i = null,
                                        e.apply(a, o)
                                };
                            clearTimeout(i),
                                i = setTimeout(r, t)
                        }
                    },
                    e.unit.throttle = function(e, t, n) {
                        var i, a;
                        return t || (t = 250),
                            function() {
                                var o = n || this,
                                    r = +new Date,
                                    l = arguments;
                                i && r < i + t ? (clearTimeout(a), a = setTimeout((function() {
                                    i = r,
                                        e.apply(o, l)
                                }), t)) : (i = r, e.apply(o, l))
                            }
                    },
                    e.unit.startWithCss = function(e) {
                        var t = new RegExp("^\\.|^#");
                        return "string" == typeof e && t.test(e)
                    },
                    e.unit.startWithStr = function(e, t) {
                        var n = new RegExp("^" + t);
                        return "string" == typeof e && n.test(e)
                    },
                    e.unit.startWithId = function(e) {
                        var t = new RegExp("^#");
                        return "string" == typeof e && t.test(e)
                    },
                    e.unit.startWithClass = function(e) {
                        var t = new RegExp("^\\.");
                        return "string" == typeof e && t.test(e)
                    },
                    e.unit.endWithImage = function(e) {
                        var t = new RegExp("(.png|.jpg|.gif)$");
                        return "string" == typeof e && t.test(e)
                    },
                    e.unit.tel = function(t) {
                        var n, i = "tel:";
                        return 0 == (t = String(t)).indexOf("+") && (i = "wtai://wp/mc;"),
                            n = t,
                            window.location.href = i + n,
                            e
                    },
                    e.unit.sms = function(t, n) {
                        var i = navigator.userAgent,
                            a = /(iPhone|iPad|iOS)/i.test(i) ? "&": "?";
                        return window.location.href = "sms:" + t + a + "body=" + n,
                            e
                    },
                    e.unit.mailto = function(t) {
                        return "string" == typeof(t = "email" in t ? t: {}).email && t.email.indexOf("@") > 0 ? window.location.href = "mailto:" + t.email + "?subject=" + (t.subject || "") + "&body=" + (t.body || "") + "&cc=" + (t.cc || "") : e.showLog(email + "格式不正确"),
                            e
                    },
                    e.unit.openExtral = function(t) {
                        var n = [],
                            i = "";
                        if ((t = String(t)).indexOf("mailto:") >= 0) if ((i = (n = t.split("mailto:"))[1]).indexOf("?") > -1) {
                            var a = i.split("?"),
                                o = e.unit.keyStringToObject(a[1]);
                            o.email = a[0],
                                e.unit.mailto(o)
                        } else e.unit.mailto({
                            email: i
                        });
                        if (t.indexOf("tel:") >= 0 && (n = t.split("tel:"), i = parseInt(n[1]), e.unit.tel(i)), t.indexOf("sms:") >= 0) if (i = (n = t.split("sms:"))[1], t.indexOf("=") >= 0) {
                            var r = t.split("=")[1];
                            e.unit.sms(i, r)
                        } else e.unit.sms(i);
                        return e
                    },
                    e.unit.objectToKeyString = function(e, t) {
                        var n = "";
                        for (var i in e) {
                            n += "&" + i + "=" + (t ? encodeURIComponent(e[i]) : e[i])
                        }
                        return n.substr(1)
                    },
                    e.unit.keyStringToObject = function(t, n) {
                        var i, a = {},
                            o = [];
                        try {
                            for (o = t.split("&"), i = 0; i < o.length; i++) {
                                var r = n ? decodeURIComponent(o[i].split("=")[1]) : o[i].split("=")[1];
                                a[o[i].split("=")[0]] = r
                            }
                        } catch(t) {
                            e.showLog(t)
                        }
                        return a
                    },
                    e.unit.checkTargetInclude = function(e, n) {
                        var i = n,
                            a = [];
                        if (i.indexOf(",") > -1) {
                            var o, r = (a = i.split(",")).length;
                            for (o = 0; o < r; o++) {
                                var l = a[o];
                                l.indexOf(".") > -1 && (a[o] = l.substr(1))
                            }
                        } else i.indexOf(".") > -1 ? a[0] = i.substr(1) : a[0] = i;
                        var c, s = a.length;
                        for (c = 0; c < s; c++) if (t(e).hasClass(a[c]) || t(e).closest("." + a[c]).length) return ! 0;
                        return ! 1
                    },
                    e.unit.jsonToString = function(t) {
                        return "object" === _typeof(t) ?
                            function(t) {
                                var n;
                                if ("object" === e.typeof(t)) {
                                    for (var i in t) t[i] = a(t, i);
                                    n = JSON.stringify(t)
                                } else "array" === e.typeof(t) ? (t.forEach((function(e, n) {
                                    t[n] = a(t, n)
                                })), n = JSON.stringify(t)) : n = t;
                                function a(t, n) {
                                    var i = t[n];
                                    return i && "object" === e.typeof(i) ? t[n] = function(t) {
                                        if (t && "object" === e.typeof(t)) {
                                            for (var n in t) {
                                                var i = t[n];
                                                "object" === _typeof(i) && (t[n] = JSON.stringify(i))
                                            }
                                            return t
                                        }
                                    } (i) : i && "array" === e.typeof(i) ? t[n] = function(t) {
                                        if (t && "array" === e.typeof(t)) return t.forEach((function(e, n) {
                                            "object" === _typeof(e) && (t[n] = JSON.stringify(e))
                                        })),
                                            t
                                    } (i) : t[n] = i,
                                        t[n]
                                }
                                return n
                            } (t) : t
                    },
                    e.unit.stringToJson = function(t) {
                        return t &&
                            function t(n) {
                                var i, a;
                                try {
                                    if (i = "object" === _typeof(n) ? n: JSON.parse(n), "array" === e.typeof(i)) i.forEach((function(e, n) {
                                        i[n] = t(e)
                                    }));
                                    else if ("object" === e.typeof(i)) for (var o in i) {
                                        var r = i[o];
                                        i[o] = t(r)
                                    }
                                    a = i
                                } catch(e) {
                                    a = n
                                }
                                return a
                            } (t)
                    },
                    e.unit.stringToArray = function(t) {
                        var n = e.typeof(t);
                        return "array" === n ? t: "string" === n && t.indexOf(",") > -1 ? t.split(",") : [t]
                    },
                    e.unit.setKeyValue = function(e, t, n) {
                        var i = e && e.indexOf(".") > -1 ? e.split(".") : [e];
                        return function e(n, a) {
                            if (i.length) return e(i.shift(), a[n] || {});
                            a[n] = t
                        } (i.shift(), n)
                    },
                    e.unit.getKeyValue = function(e, t) {
                        var n = e && e.indexOf(".") > -1 ? e.split(".") : [e];
                        return function e(t, i) {
                            var a = i[t];
                            if (a && "string" == typeof a && a.indexOf("{") > -1 && a.indexOf("}") > -1) try {
                                i[t] = JSON.parse(a)
                            } catch(e) {
                                i[t] = a
                            }
                            return a && void 0 !== a && n.length ? e(n.shift(), a) : a
                        } (n.shift(), t)
                    },
                    e.unit.getKeyObj = function(e, t) {
                        var n = e && e.indexOf(".") > -1 ? e.split(".") : [e];
                        return function e(t, i) {
                            var a = i[t];
                            return ! a instanceof Array && a instanceof Object ? e(n.shift(), a) : a
                        } (n.shift(), t)
                    },
                    e.unit.getKeyName = function(e) {
                        var t = field && field.indexOf(".") > -1 ? field.split(".") : [field];
                        return function e(n, i) {
                            var a = i[n];
                            return ! a instanceof Array && a instanceof Object ? e(t.shift(), a) : a
                        } (t.shift(), e)
                    },
                    e.unit.delKey = function(e, t) {
                        var n = e && e.indexOf(".") > -1 ? e.split(".") : [e];
                        return function e(i, a) {
                            return n.length ? e(n.shift(), a[i]) : (delete a[i], t)
                        } (n.shift(), t)
                    },
                    e.unit.calcHeight = function(e, n) {
                        var i = t(e);
                        i[0] && (i[0].style.height = "calc(100% - " + n + ")")
                    },
                    e.unit.resolvePath = function(t) {
                        if (!e.hasRouter) return t;
                        var n = t = t || "",
                            i = (router && router.history && router.history.getLast() || {
                                url: n
                            }).url || "";
                        if ("function" == typeof i) return n;
                        var a = i.lastIndexOf("/"),
                            o = i.substr(0, a);
                        return t.indexOf("../") > -1 ? (t = t.replace(/\..\//g, (function(e) {
                            var t = o.lastIndexOf("/");
                            return o = o.substr(0, t),
                                ""
                        })), n = o ? o + "/" + t: t) : t.indexOf("./") > -1 && (n = o + "/" + t.replace(/\.\//g, "")),
                            n
                    },
                    e.unit.filterField = function(t, n) {
                        var i = {};
                        if ("object" === _typeof(n)) {
                            var a = "object" === e.typeof(t),
                                o = "object" === e.typeof(n),
                                r = "array" === e.typeof(t),
                                l = "array" === e.typeof(n);
                            if (a) {
                                if (o) for (var c in n) i[c] = n[c] ? t[n[c]] : t[c];
                                else l && n.forEach((function(e, n) {
                                    i[e] = t[e]
                                }));
                                return i
                            }
                            return r ? (i = [], l ? t.forEach((function(e, t) {
                                var a = {};
                                n.forEach((function(t, n) {
                                    a[t] = e[t]
                                })),
                                    i.push(a)
                            })) : o && t.forEach((function(e, t) {
                                var a = {};
                                for (var o in n) a[o] = n[o] ? e[n[o]] : e[o];
                                i.push(a)
                            })), i) : void 0
                        }
                    },
                    e.unit.fixZero = function(e) {
                        return e < 10 ? "0" + e: e
                    },
                    e.unit.getAttributes = function(t) {
                        if ("object" !== _typeof(t)) return null;
                        var n = {},
                            i = /\{.+\}$/g,
                            a = /\[.+\]$/g;
                        return t.attributes && Object.keys(t.attributes).forEach((function(o, r) {
                            var l = t.attributes[o],
                                c = l.value;
                            if (i.test(c) || a.test(c)) try {
                                c = JSON.parse(c)
                            } catch(t) {
                                c = c,
                                    e.showLog(t)
                            }
                            n[l.name] = c
                        })),
                            n
                    },
                    e.unit.resolvePathname = function(e, t) {
                        t = t || 0;
                        var n = e.lastIndexOf("/"),
                            i = e.substring(t, n);
                        return i.indexOf("/") > -1 ? i.split("/") : [i]
                    },
                    e.unit.relativeUrl = function(e, t) {
                        var n = [];
                        return t.length >= e.length ? t.forEach((function(t, i) {
                            var a = e[i];
                            a && t === a || (a && t !== a ? (n.unshift(".."), n.push(t)) : n.push(t))
                        })) : e.forEach((function(e, i) {
                            var a = t[i];
                            a && e === a || (a && e !== a ? (n.unshift(".."), n.push(a)) : n.unshift(".."))
                        })),
                            n
                    },
                    e.unit.relativePath = function(t, n) {
                        n = n || "pages";
                        var i = window.self.location.href;
                        if (i.indexOf("source.html?url=") > -1 && i.indexOf("code=") > -1) return t;
                        if (0 === t.indexOf("http://") || 0 === t.indexOf("https://")) return t;
                        var a = window.location.href,
                            o = a.indexOf(n),
                            r = t && t.indexOf("/") > -1 ? t.split("/") : [t],
                            l = [];
                        if (o < 0) {
                            var c = window.location.pathname.toLocaleLowerCase(),
                                s = c.indexOf("www"),
                                u = c.indexOf("src"),
                                d = c.indexOf("dist");
                            if (s > -1) {
                                var f = e.unit.resolvePathname(c, s + 4);
                                l = e.unit.relativeUrl(f, r)
                            } else if (d > -1) {
                                var p = e.unit.resolvePathname(c, d + 5);
                                l = e.unit.relativeUrl(p, r)
                            } else {
                                if (! (u > -1)) return 0 == t.indexOf("/") ? t.replace("/", "") : t;
                                var h = e.unit.resolvePathname(c, u + 4);
                                l = e.unit.relativeUrl(h, r)
                            }
                        } else {
                            var g = e.unit.resolvePathname(a, o);
                            l = e.unit.relativeUrl(g, r)
                        }
                        return l.join("/")
                    },
                    e.unit.between = function(t, n, i) {
                        var a = !0,
                            o = new Date;
                        if (n = n || 0, i = i || e.date.convert(o.getFullYear + "/12/31").getTime(), "number" == typeof t)(t < n || t > i) && (a = !1);
                        else {
                            n || e.showLog("bui.unit.between 第2个参数为最小日期");
                            try {
                                n = e.date.convert(n).getTime(),
                                    i = e.date.convert(i).getTime(),
                                ((t = e.date.convert(t).getTime()) < n || t > i) && (a = !1)
                            } catch(t) {
                                e.showLog("bui.unit.between 用来检测数字或者日期,请检查参数格式是否正确")
                            }
                        }
                        return a
                    },
                    e.unit.numberunit = function(e) {
                        var t = +e,
                            n = t;
                        return t > 1e4 && (n = parseFloat(t / 1e4).toFixed(1) + "万"),
                            n
                    }
            } (window.bui || {},
                window.libs),
            function(e, t) {
                var n, i, a, o;
                e.history = (a = [], o = {
                    get: function(t, n) {
                        if (void 0 === t) return a;
                        var i = n || "name";
                        return e.array.get(a, t, i)
                    },
                    getLast: function(e) {
                        var t = a.length - 1,
                            n = a[t] || {};
                        return e ? n[e] : n
                    },
                    getPrev: function(e) {
                        var t = a.length - 2,
                            n = a[t] || {};
                        return e ? n[e] : n
                    },
                    getParams: function(e) {
                        var t = this.getLast(),
                            n = {};
                        switch (e) {
                            case "page":
                                n = this.getPageParam() || n;
                                break;
                            case "part":
                            case "component":
                                n = this.getComponentParam() || n;
                                break;
                            case "url":
                                n = t.param || bui.getUrlParams();
                                break;
                            default:
                                n = this.getComponentParam(e) || this.getPageParam(e) || t.param || bui.getUrlParams()
                        }
                        return n
                    },
                    setComponent: function(e) {
                        return this.getLast().component[e.id] = e,
                            e
                    },
                    setUI: function(e) {
                        var t = this.getLast(),
                            n = e.uid;
                        return t.ui[n] = e.ui,
                            o
                    },
                    getUI: function(t) {
                        return t ? this.getLast().ui[t] || null: e.showLog("uid不能为空，指ui自定义唯一的名字")
                    },
                    getComponentParam: function(e) {
                        var t = this.getLast(),
                            n = e || t.currentComponent;
                        return n && t.component[n] && t.component[n].param || null
                    },
                    getComponent: function(t, n) {
                        if (void 0 !== t) {
                            n = n || "exports";
                            var i = this.getLast();
                            return i.component[t] && i.component[t][n] || null
                        }
                        e.showLog("必须传component id才能获取实例")
                    },
                    getParentComponent: function() {
                        var e = this.getComponentParam();
                        return e && e.parentId && this.getComponent(e.parentId) || this.getLast("exports")
                    },
                    getParentParams: function() {
                        var e = this.getComponentParam();
                        return this.getParams(e.parentId) || this.getLast("param") || null
                    },
                    getPage: function(t, n) {
                        if (void 0 !== t) {
                            n = n || "exports";
                            var i = this.getLast(),
                                a = null,
                                o = i.page;
                            if (o.hasOwnProperty(t)) a = o[t] && o[t][n] || {};
                            else if (t) for (var r = Object.keys(o), l = 0; l < r.length; l++) {
                                var c = o[r[l]] || {};
                                if (c.name === t) return c[n]
                            } else {
                                var s = i.currentPage;
                                a = o[s] && o[s][n] || {}
                            }
                            return a
                        }
                        e.showLog("必须传page id 或者 模块名才能获取实例")
                    },
                    getPageDialog: function(t) {
                        if (void 0 !== t) {
                            var n = this.getLast();
                            return n.page[t] && n.page[t].dialog || null
                        }
                        e.showLog("必须传page id才能获取对话框信息")
                    },
                    setPage: function(n) {
                        var i = this.getLast();
                        if ("object" !== _typeof(n)) return n;
                        if (n && n.hasOwnProperty("id")) {
                            var a, o = t.extend(!0, {},
                                i.page[n.id], n);
                            for (a in o.param) o.param[a] && "array" == e.typeof(o.param[a]) && (o.param[a] = n.param[a] || []);
                            return i.page[n.id] = o,
                                n
                        }
                    },
                    getPageParam: function(e) {
                        var t = this.getLast(),
                            n = e || t.currentPage;
                        return n && t.page[n] && t.page[n].param || null
                    },
                    add: function(n) {
                        var i = t.extend(!0, {
                                    id: "",
                                    name: "",
                                    url: "",
                                    replace: !1,
                                    syncHistory: !0,
                                    component: {},
                                    param: {},
                                    ui: {},
                                    part: {},
                                    page: {},
                                    toggle: null,
                                    effect: "push"
                                },
                                n),
                            o = a;
                        if (n.toggle) {
                            var r = t.extend(!0, {},
                                i, n);
                            i.toggle = null,
                                o.push(r)
                        } else o.push(i);
                        var l = window.location.origin + window.location.pathname + "#" + i.name,
                            c = e.setUrlParams(l, i.param);
                        return i.syncHistory && "pushState" in window.history && window.history.pushState(i, null, c),
                            o
                    },
                    replace: function(n) {
                        n = t.extend(!0, {
                                id: "",
                                name: "",
                                url: "",
                                replace: !1,
                                syncHistory: !0,
                                param: {},
                                part: {},
                                ui: {},
                                page: {},
                                toggle: null,
                                effect: "push"
                            },
                            opts);
                        var i = a,
                            o = i.length - 1,
                            r = window.location.origin + window.location.pathname + "#" + n.name,
                            l = e.setUrlParams(r, n.param);
                        if (o > -1) {
                            if (opts.toggle) {
                                var c = t.extend(!0, {},
                                    n, opts);
                                n.toggle = null,
                                    i.splice(o, 1, c)
                            } else i.splice(o, 1, n);
                            n.syncHistory && "replaceState" in window.history && window.history.replaceState(n, null, l)
                        }
                        return i
                    },
                    refresh: function() {
                        if (e.hasRouter) {
                            var n = o.getLast(),
                                i = loader.get(n.name);
                            loader.import(n.url, (function(a) {
                                t("#" + n.id).html(a),
                                e.config.init.auto && e.init(),
                                router.config.needView && loader.views(),
                                    i.loaded(),
                                router.config.needComponent && loader.components()
                            }))
                        } else window.location.reload(!0)
                    },
                    removeNext: function(t) {
                        var n = a,
                            i = t.index;
                        if (parseInt(i) < 0) return e.showLog("index 必须大于或者等于0"),
                            n;
                        var o = n.length - i;
                        n.splice(i, o);
                        var r = this.getLast(),
                            l = window.location.origin + window.location.pathname + "#" + r.name,
                            c = e.setUrlParams(l, r.param);
                        return t.syncHistory && "replaceState" in window.history && window.history.replaceState(r.param, null, c),
                            n
                    },
                    removeLast: function(e) {
                        var t = a.length - 1;
                        return this.removeNext({
                            index: t,
                            syncHistory: !1 !== e
                        })
                    },
                    check: function(t) {
                        var n = a;
                        return e.array.compare(n, t, "name") || e.array.compare(n, t, "url") || e.array.compare(n, t, "id")
                    },
                    checkComponent: function(t) {
                        var n = this.getLast(),
                            i = Object.keys(n.component);
                        return e.array.compare(i, t)
                    },
                    checkPage: function(e, t) {
                        for (var n = this.getLast(), i = Object.keys(n.page), a = 0; a < i.length; a++) {
                            var o = i[a],
                                r = n.page[o];
                            if (r.name === e || r.id === e) return ! 0
                        }
                        return ! 1
                    },
                    epmty: function(e) {
                        return a = []
                    }
                },
                    n = function(t) {
                        var n = (t = t && t.replace(window.location.origin, "") || window.location.pathname).indexOf(".html"),
                            i = t.indexOf("?"),
                            a = "",
                            o = "",
                            r = "",
                            l = null,
                            c = loader.map().modules;
                        if (i > -1) {
                            var s = t.substr(i + 1);
                            l = e.unit.keyStringToObject(s, !0)
                        }
                        return n > -1 ? (o = (a = 0 == t.indexOf("/") ? t.substr(1, n - 1) : t.substr(0, n - 1)) + ".html", r = a + ".js") : (o = c[a = t] && c[a].template || "", r = c[a] && c[a].script || ""),
                            {
                                pid: a,
                                name: a,
                                url: o,
                                src: r,
                                param: l
                            }
                    } (window.location.href), i = e.guid(), t(document).ready((function() {
                    document.body.setAttribute("id", i)
                })), a.push({
                    id: e.guid(),
                    pid: n.pid,
                    name: n.pid,
                    url: n.url,
                    src: n.src,
                    param: n.param,
                    page: {},
                    ui: {},
                    component: {}
                }), o)
            } (window.bui || {},
                window.libs),
            function(e, t) {
                e.router = function(n) {
                    var i, a, o, r = t.extend({},
                            {
                                id: "",
                                uid: "",
                                progress: !1,
                                syncHistory: !0,
                                autoInit: !0,
                                firstAnimate: !1,
                                path: "",
                                indexModule: {
                                    moduleName: "main",
                                    template: "pages/main/main.html",
                                    script: "pages/main/main.js"
                                },
                                repairPath: !0,
                                parseurl: !0,
                                errorPage: "",
                                hash: !1,
                                cache: !0,
                                reloadCache: !1,
                                reload: !1,
                                swipe: !1,
                                swipeBack: !1,
                                distance: 100,
                                startDistance: 5,
                                swipeDistance: 50,
                                onSwipeRight: null,
                                onSwipeLeft: null,
                                onSwipeUp: null,
                                onSwipeDown: null,
                                onBeforeSwipeRight: null,
                                onSwipeCancel: null,
                                pageMove: !0,
                                needNative: !1,
                                needView: !1,
                                needComponent: !0,
                                useScroll: "main,.bui-tab-main>ul>li,.bui-dialog-main,.bui-scroll,.bui-scroll-x",
                                beforeBack: null,
                                beforeLoad: null,
                                loaded: null,
                                store: null,
                                width: 0,
                                height: 0,
                                async: !0,
                                effect: "push",
                                hashPrefix: "#",
                                scriptSuffix: ".js",
                                pageSuffix: ".html"
                            },
                            e.config.router, n),
                        l = null,
                        c = this,
                        s = null,
                        u = null,
                        d = null,
                        f = "",
                        p = "",
                        h = !0,
                        g = !0,
                        m = !1,
                        v = !1,
                        b = {
                            none: {
                                inRight: "showIn",
                                inLeft: "showIn"
                            },
                            fadein: {
                                inRight: "fadeIn",
                                inLeft: "fadeIn"
                            },
                            fadeinslide: {
                                inRight: "fadeInRight",
                                inLeft: "fadeInLeft"
                            },
                            slide: {
                                inRight: "slideInRight",
                                inLeft: "slideInLeft"
                            },
                            push: {
                                inRight: "pushInRight",
                                inLeft: "pushInLeft"
                            },
                            zoom: {
                                inRight: "zoomIn",
                                inLeft: "zoomIn"
                            },
                            cover: {
                                inRight: "coverInRight",
                                inLeft: "coverInLeft"
                            },
                            zoomslide: {
                                inRight: "zoomSlideInRight",
                                inLeft: "zoomSlideInLeft"
                            },
                            fadeinslideback: {
                                inRight: "fadeInLeft",
                                inLeft: "fadeInRight"
                            },
                            slideback: {
                                inRight: "slideInLeft",
                                inLeft: "slideInRight"
                            },
                            pushback: {
                                inRight: "pushInLeft",
                                inLeft: "pushInRight"
                            },
                            coverback: {
                                inRight: "coverInLeft",
                                inLeft: "coverInRight"
                            },
                            zoomslideback: {
                                inRight: "zoomSlideInLeft",
                                inLeft: "zoomSlideInRight"
                            }
                        },
                        y = {},
                        w = {},
                        x = {},
                        k = {},
                        I = !1,
                        T = {},
                        O = {},
                        C = loader.map(r.indexModule),
                        P = e.history.epmty(),
                        S = C.modules,
                        j = e.storage({
                            local: !1
                        });
                    function L(e) {
                        var t = window.location.hash || window.location.search,
                            n = window.location.search,
                            i = n && n.indexOf("?"),
                            a = (e = 0 != e, t && t.indexOf("?")),
                            o = a > -1 ? t && t.substr(1, a - 1) : window.location.hash.substr(1),
                            l = o && o.indexOf(r.pageSuffix),
                            c = l > -1 ? o.substr(0, l) : o,
                            s = l > -1 ? o: o + r.pageSuffix,
                            u = {};
                        function d(t, n) {
                            for (var i = t && t.substr(n + 1), a = i && i.split("&"), o = 0; o < a.length; o++) {
                                var r = e ? decodeURIComponent(a[o].split("=")[1]) : a[o].split("=")[1];
                                u[a[o].split("=")[0]] = r
                            }
                        }
                        return a > -1 && (d(n, i), d(t, a)),
                            {
                                pid: c,
                                url: s,
                                param: u
                            }
                    }
                    function E(n) {
                        var i = {
                                id: "",
                                url: "",
                                param: {},
                                effect: "",
                                command: "html",
                                path: r.path,
                                repairPath: r.repairPath,
                                firstAnimate: r.firstAnimate,
                                progress: r.progress,
                                reload: r.reload,
                                autoInit: r.autoInit,
                                needView: r.needView,
                                needComponent: r.needComponent,
                                replace: !1,
                                iframe: !1,
                                decode: !1,
                                part: !1,
                                cache: r.cache,
                                callback: null,
                                beforeLoad: r.beforeLoad,
                                loaded: r.loaded
                            },
                            c = t.extend(!0, {},
                                i, n),
                            f = t.Deferred(),
                            g = w.getLast() || null;
                        P[P.length - 2],
                        c.url.indexOf("./") > -1 && (c.url = function(e, t) {
                            var n = e,
                                i = t.url.lastIndexOf("/"),
                                a = t.url.substr(0, i);
                            e.indexOf("../") > -1 ? (e = e.replace(/\..\//g, (function(e) {
                                var t = a.lastIndexOf("/");
                                return a = a.substr(0, t),
                                    ""
                            })), n = a ? a + "/" + e: e) : e.indexOf("./") > -1 && (n = a + "/" + e.replace(/\.\//g, ""));
                            return n
                        } (c.url, g)),
                        c.repairPath && 0 === c.url.indexOf("/") && (c.url = c.url.substr(1)),
                        c.path && (c.path = "/" == c.path[c.path.length - 1] ? c.path: c.path + "/"),
                            c.url = c.url in S || c.iframe || c.url.indexOf("http:") > -1 ? c.url: c.path + c.url,
                            document.activeElement.blur();
                        var v = null,
                            b = {};
                        c.id = (c.id && c.id.indexOf("#") > -1 ? c.id.substr(1) : c.id) || "";
                        var k = c.replace || c.part ? g.id: c.id || e.guid(),
                            C = e.objId(k);
                        if (!c.url) return e.showLog("url 不能为空", "bui.router.load"),
                            f.promise();
                        if (c.url = c.decode ? decodeURIComponent(c.url) : c.url, c.url.indexOf("tel:") >= 0 || c.url.indexOf("mailto:") >= 0 || c.url.indexOf("sms:") >= 0) return e.unit.openExtral(c.url),
                            f.promise();
                        if (c.url && c.url.indexOf("?") > -1) {
                            var j = c.url.split("?");
                            b = e.unit.keyStringToObject(j[1]),
                                c.url = j[0]
                        }
                        v = t.extend(!0, {},
                            b, c.param),
                            "wechat_redirect" == c.url ? c.url = "main": "undefined" == c.url && (c.url = r.errorPage || "main"),
                            c.iframe = Boolean(c.iframe) || "true" == v.iframe,
                        1 == c.iframe && (v.iframe = !0);
                        var L = N(c.url),
                            B = L.pid || params.errorPage || "main",
                            D = c.iframe ? c.url: L.url,
                            H = {
                                id: k,
                                pid: B,
                                name: B,
                                url: "function" == typeof D ? c.url: D,
                                replace: c.replace,
                                param: v,
                                component: {},
                                page: {},
                                part: {},
                                ui: {},
                                toggle: null,
                                exports: {},
                                effect: n.effect || r.effect,
                                syncHistory: r.syncHistory
                            },
                            $ = "function" == typeof c.beforeLoad ? c.beforeLoad.call(z, {
                                prevTarget: g,
                                target: H
                            }) : c.beforeLoad;
                        if (_.call(z, "loadbefore", {
                            prevTarget: g,
                            target: H
                        }), _.call(z, "beforeload", {
                            prevTarget: g,
                            target: H
                        }), !1 === $) return h = !1,
                            this;
                        if (c.part, o && o.show(), c.progress && a && a.show(), loader.map({
                            moduleName: B,
                            id: k
                        }), loader.get(H.pid), P.length && c.effect) {
                            var V = P.length - 1;
                            P[V].effect = c.effect
                        } ! m && !c.part && !c.replace && w.add(H),
                        c.replace && w.replace(H);
                        var q = H;
                        if (c.part && (e.history.setComponent({
                            id: k,
                            pid: B,
                            url: D,
                            param: v
                        }), q.currentComponent = k, P.splice(P.length - 1, 1, q)), c.part || H, x[B]) !
                            function(e) {
                                X(T.get(e.pid, "template")),
                                    e.part ? Z(e) : (Y(), !m && J((function() {
                                        e.firstAnimate && (Z(e), e.loaded && e.loaded({
                                            prevTarget: g,
                                            target: H
                                        }), e.callback && e.callback({
                                            prevTarget: g,
                                            target: H
                                        })),
                                        e.progress && a && a.hide()
                                    })), !e.firstAnimate && Z(e))
                            } ({
                                pid: B,
                                progress: c.progress,
                                part: c.part,
                                firstAnimate: c.firstAnimate
                            }),
                            _.call(z, "complete", {
                                prevTarget: g,
                                target: H
                            }),
                        r.needComponent && loader.components(),
                        c.firstAnimate || (c.loaded && c.loaded({
                            prevTarget: g,
                            target: H
                        }), c.callback && c.callback({
                            prevTarget: g,
                            target: H
                        }));
                        else {
                            if (c.iframe) return function(t) {
                                var n = function(t) {
                                    var n = t.url.indexOf(".html") > -1 || 0 == t.url.indexOf("http") ? t.url: t.url + ".html",
                                        i = t.param ? e.setUrlParams(n, t.param) : n,
                                        a = "",
                                        o = e.platform.isIos() ? 'scrolling="no"': "";
                                    return a += '<div id="' + t.id + '" class="bui-router-item bui-router-fixiframe" data-page="' + t.pid + '">',
                                        a += '<iframe class="bui-router-iframe" src="' + i + '" ' + o + ' name="' + t.pid + '"></iframe>',
                                        a += "</div>"
                                } ({
                                    id: t.id,
                                    pid: t.pid,
                                    url: t.url,
                                    param: t.param
                                });
                                s && s.attr("data-main", t.id).append(n),
                                    J((function() {
                                        c.progress && a && a.hide()
                                    }))
                            } ({
                                id: k,
                                pid: B,
                                url: c.url,
                                param: v
                            }),
                                f.promise();
                            if (c.part) return R(D, (function(t, n, i) {
                                e.objId(k)[c.command](t),
                                    K(G),
                                c.cache && T.add(B, {
                                    id: k,
                                    pid: B,
                                    template: t
                                }),
                                o && o.hide(),
                                c.progress && a && a.hide()
                            }), (function(e, t, n) {
                                W(D, e),
                                    _.call(z, "loadfail", e, t, n)
                            })),
                                f.promise();
                            R(D, (function(e, t, n) {
                                if ("object" === _typeof(e)) return W(D, e),
                                    !1;
                                X(e),
                                c.cache && T.add(B, {
                                    id: k,
                                    pid: B,
                                    template: e
                                }),
                                    Y(),
                                    c.firstAnimate ? J((function() {
                                        K(G),
                                        c.progress && a && a.hide(),
                                            O.add(B, {
                                                id: k,
                                                pid: B,
                                                param: v
                                            })
                                    })) : (J((function() {
                                        c.progress && a && a.hide()
                                    })), K(G), O.add(B, {
                                        id: k,
                                        pid: B,
                                        param: v
                                    }))
                            }), (function(e, t, n) {
                                W(D, e),
                                    _.call(z, "loadfail", e, t, n)
                            }))
                        }
                        function W(t, n, i, l) {
                            if (o && o.hide(), c.progress && a && a.hide(), w.removeLast(), f.reject(t), "object" === _typeof(n)) return e.showLog("找不到页面" + t, "bui.router.load"),
                            r.errorPage &&
                            function(e) { !
                                function(e) {
                                    var t, n = window.location.href,
                                        i = (t = (t = n.indexOf(r.hashPrefix)) > -1 ? t: 0) > -1 ? n.substr(0, t) : n;
                                    E({
                                        url: r.errorPage || i,
                                        param: {
                                            error: e
                                        }
                                    }),
                                        _.call(z, "error", {
                                            target: e,
                                            status: 404
                                        })
                                } (e)
                            } (t),
                                !1
                        }
                        function K(n) {
                            loader.set(B, {
                                $: function(e) {
                                    function t(t) {
                                        return e.apply(this, arguments)
                                    }
                                    return t.toString = function() {
                                        return e.toString()
                                    },
                                        t
                                } ((function(e) {
                                    return t("#" + k).find(e)
                                }))
                            }),
                                m || y[B] ? (q.exports = y[B], Z({
                                    pid: B
                                }), I && J(), n && n(), r.needComponent && loader.components()) : (loader.checkLoad(B) ? (Z({
                                    pid: B
                                }), r.needComponent && loader.components(), n && n()) : (r.needComponent && loader.components(), loader.require(B, (function(t) {
                                    try {
                                        if (c.firstAnimate && c.progress && a && a.hide(), y[B] = t || null, H.exports = t, f.resolve(t), h || c.firstAnimate || c.replace) {
                                            var i = loader.get(B);
                                            i && i.show && i.show({
                                                type: "firstload",
                                                target: H
                                            })
                                        }
                                        n && n(),
                                        c.loaded && c.loaded({
                                            prevTarget: g,
                                            target: H
                                        }),
                                        c.callback && c.callback({
                                            prevTarget: g,
                                            target: H
                                        })
                                    } catch(t) {
                                        e.showLog(t, "bui.router.load"),
                                            f.reject()
                                    }
                                }))), _.call(z, "complete", {
                                    prevTarget: g,
                                    target: H
                                }))
                        }
                        function Y() {
                            var t = (l = e.objId(q.id)) && l.find(".bui-page");
                            t && t.length && c.autoInit && e.init({
                                id: t,
                                height: p
                            })
                        }
                        function J(t) {
                            l = e.objId(k),
                                A(),
                                M();
                            try {
                                if (h || m || c.replace || c.part) {
                                    t && t(),
                                    !c.firstAnimate && c.progress && a && a.hide(),
                                    o && o.hide(),
                                    l && l.css("zIndex", 5);
                                    var n = "pageshow-" + w.getLast().pid;
                                    _.call(z, "pageshow", {
                                        type: "load",
                                        target: w.getLast()
                                    }),
                                        _.call(z, n, {
                                            type: "load",
                                            target: w.getLast()
                                        })
                                } else u && u.hide(),
                                d && d.show((function() {
                                    t && t(),
                                    !c.firstAnimate && c.progress && a && a.hide(),
                                    l && l.css("zIndex", 5),
                                    o && o.hide();
                                    var e = P[P.length - 2] || {},
                                        n = w.getLast(),
                                        i = loader.get(n.pid),
                                        r = e && e.pid && loader.get(e.pid) || null,
                                        s = "pageshow-" + n.pid,
                                        u = "pagehide-" + e.pid;
                                    _.call(z, u, {
                                        type: "load",
                                        target: P[P.length - 2]
                                    }),
                                        _.call(z, s, {
                                            type: "load",
                                            target: w.getLast()
                                        }),
                                        _.call(z, "pagehide", {
                                            type: "load",
                                            target: P[P.length - 2]
                                        }),
                                        _.call(z, "pageshow", {
                                            type: "load",
                                            target: w.getLast()
                                        }),
                                    r && r.hide && r.hide({
                                        type: "load",
                                        target: P[P.length - 2]
                                    }),
                                    i && i.show && i.show({
                                        type: "load",
                                        target: w.getLast()
                                    })
                                }))
                            } catch(t) {
                                e.showLog(t, "bui.router.doAnimate")
                            }
                        }
                        function X(t) {
                            var n = "";
                            z.store && (t = z.store.compileHtml(t));
                            var i = e.history.getLast();
                            if (t = t.replace(/#module\.id/g, "#" + i.id), c.part) n = U({
                                content: t
                            }),
                                c.id ? C.html(n) : e.showLog("id 不能为空", "router.loadPart");
                            else if (c.replace) {
                                var a = w.getLast();
                                C = P.length ? e.objId(a.id) : s,
                                    a.pid = B,
                                    a.url = D,
                                    a.param = v,
                                    e.array.index(P, B, "pid"),
                                    n = B in x ? T.get(B, "template") : U({
                                        content: t
                                    }),
                                    C.html(n).attr("data-page", B)
                            } else m || (n = F({
                                id: k,
                                content: t,
                                pid: B
                            }), s && s.attr("data-main", k).append(n));
                            return r.needView && loader.views({
                                compiled: function() {
                                    z.store && !z.store.config.isPublic && z.store.config.needCompile && z.store.compile("#" + k)
                                }
                            }),
                            !z.store || r.needView || z.store.config.isPublic || z.store.config.needCompile && z.store.compile("#" + k),
                                n
                        }
                        function Z(e) {
                            var t = w.getLast(),
                                n = S[e.pid] && S[e.pid] || {},
                                i = n.loaded,
                                a = i && i.apply(n, n.dependExports) || n.exports;
                            y[e.pid] = a || null,
                                n.exports = a,
                                t.exports = a,
                            m && _.call(z, "refresh", {
                                prevTarget: g,
                                target: t
                            }),
                            o && o.hide(),
                                f.resolve(a),
                                m = !1,
                                h = !1
                        }
                        function G() {
                            var e = P[P.length - 2] || null,
                                t = w.getLast();
                            h && !c.part && (_.call(z, "firstload", {
                                prevTarget: e,
                                target: t
                            }), h = !1),
                                c.part ? _.call(z, "loadpart", {
                                    prevTarget: e,
                                    target: t
                                }) : _.call(z, "load", {
                                    prevTarget: e,
                                    target: t
                                })
                        }
                        return f.promise()
                    }
                    function N(e) {
                        var t = "",
                            n = e;
                        C = loader.map(),
                            S = C.modules;
                        var i = n.indexOf(r.pageSuffix);
                        return i > -1 ? (n = (t = n).substr(0, i), S.hasOwnProperty(n) && (t = S[n] && S[n].template || t || "")) : t = S[n = n] && S[n].template || n + r.pageSuffix || "",
                            {
                                pid: n,
                                url: t
                            }
                    }
                    function B(n) {
                        var i = this,
                            a = {};
                        "function" == typeof n ? a.callback = n: a = n || {};
                        var o = t.extend(!0, {
                                    index: -1,
                                    name: "",
                                    beforeBack: r.beforeBack,
                                    callback: null,
                                    loaded: r.backed
                                },
                                a),
                            l = parseInt(o.index),
                            c = P.length;
                        if (C = loader.map(), S = C.modules, !(l > 0)) {
                            var f = w.getLast(),
                                p = c - 1,
                                h = f.toggle;
                            if (h) return h.hide(),
                                void A();
                            var m = "function" == typeof o.beforeBack ? o.beforeBack.call(z, {
                                prevTarget: null,
                                target: f
                            }) : a.beforeBack;
                            _.call(z, "beforeback", {
                                prevTarget: null,
                                target: f
                            });
                            var v = loader.get(f.pid);
                            return v && v.beforeDestroy && v.beforeDestroy(),
                                !1 === m ? this: (o.name && (l = D(o.name)), Math.abs(l) > p && (l = -p), c > 1 && g && (l < -1 && M(l), g = !1, a.effect && (u.option({
                                    effect: a.effect
                                }), d.option({
                                    effect: a.effect
                                })), u && u.show(), d && d.hide((function() {
                                    var n = c + l; !
                                        function(e) {
                                            s.children().each((function(n, i) {
                                                n >= e && t(i).remove()
                                            }))
                                        } (n),
                                        w.removeNext(n),
                                        M();
                                    var a = A(),
                                        r = a.pid;
                                    e.objId(a.id).css("zIndex", 5),
                                        function() {
                                            var e;
                                            e = y[r] || {};
                                            var t = loader.get(a.pid);
                                            o.callback && o.callback.call(i, e, a),
                                            o.backed && o.backed.call(z, {
                                                prevTarget: f,
                                                target: a
                                            }),
                                                _.call(z, "back", {
                                                    prevTarget: f,
                                                    target: a
                                                }),
                                                a;
                                            var n = "pageshow-" + a.pid,
                                                l = "pagehide-" + f.pid;
                                            v && v.hide && v.hide({
                                                type: "back",
                                                target: f
                                            }),
                                            t && t.show && t.show({
                                                type: "back",
                                                target: a
                                            }),
                                                _.call(z, l, {
                                                    type: "back",
                                                    target: f
                                                }),
                                                _.call(z, n, {
                                                    type: "back",
                                                    target: a
                                                }),
                                                _.call(z, "pageshow", {
                                                    type: "back",
                                                    target: a
                                                }),
                                                _.call(z, "pagehide", {
                                                    type: "back",
                                                    target: f
                                                }),
                                            v && v.destroyed && v.destroyed(),
                                                g = !0
                                        } ()
                                }))), this)
                        }
                        e.showLog("index 参数只能是负数", "bui.router.back")
                    }
                    function D(t) {
                        var n, i = e.array.indexs(P, t, "pid"),
                            a = i.length;
                        if (a) {
                            var o = -(P.length - i[a - 1] - 1);
                            n = 0 == o ? -1 : o
                        } else n = -1;
                        return n
                    }
                    function R(t, n, i) {
                        if ("string" == typeof t) {
                            loader.importHtml(t, (function(t, i, a) {
                                t = function(e) {
                                    var t = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
                                        n = /<body[^>]*>([\s\S]*)<\/body>/.exec(e);
                                    if (n && 2 === n.length) return n[1].replace(t, "");
                                    return e
                                } (t),
                                    e.history.getLast(),
                                n && n(t, i, a),
                                    _.call(z, "success", t, i, a)
                            }), (function(e, t, n) {
                                i && i(e, t, n),
                                    _.call(z, "fail", e, t, n)
                            }))
                        } else if ("function" == typeof t) {
                            var a = t && t();
                            n && n(a, 200, {}),
                                _.call(z, "success", a, 200, {})
                        } else e.showLog("url 不能为空", "bui.router.requestUrl")
                    }
                    function A() {
                        var t = w.getLast(),
                            n = t.id || "",
                            i = t.effect || r.effect;
                        return n && (_.call(z, "beforepageshow", {
                            target: t
                        }), d = null, d = e.toggle({
                            id: document.getElementById(n),
                            effect: b[i] && b[i].inRight || ""
                        }), s && s.attr("data-main", n)),
                            t
                    }
                    function M(t) {
                        t = t || -1;
                        var n = P.length + t - 1,
                            i = P[n],
                            a = i && i.id || "",
                            o = i && i.effect || r.effect;
                        return a && (_.call(z, "beforepagehide", {
                            target: i
                        }), u = null, u = e.toggle({
                            id: document.getElementById(a),
                            effect: b[o] && b[o].inLeft || ""
                        })),
                            i
                    }
                    function F(e) {
                        var t = "";
                        return t += '<div id="' + e.id + '" class="bui-router-item" data-page="' + e.pid + '">',
                            t += e.content || "",
                            t += "</div>"
                    }
                    function U(e) {
                        var t = "";
                        return t += e.content
                    }
                    function H(t, n) {
                        return e.on.apply(z, arguments),
                            this
                    }
                    function _(t) {
                        z.self = this == window || this == z ? null: this,
                            e.trigger.apply(z, arguments)
                    }
                    e.hasRouter = !0,
                        w.get = function() {
                            return P
                        },
                        w.add = function(n) {
                            if ((n = n || {}).toggle) {
                                var i = t.extend(!0, {},
                                    n);
                                n.toggle = null,
                                    P.push(i)
                            } else P.push(n);
                            var a = window.location.origin + window.location.pathname + "#" + n.pid,
                                o = e.setUrlParams(a, n.param);
                            if (!h) return r.syncHistory && "pushState" in window.history && window.history.pushState(n, null, o),
                                P;
                            r.syncHistory && "replaceState" in window.history && window.history.replaceState(n, null, o)
                        },
                        w.prepend = function(t) {
                            t = t || {};
                            var n = window.location.origin + window.location.pathname + "#" + t.pid;
                            return e.setUrlParams(n, t.param),
                                P.unshift(t),
                                P
                        },
                        w.replace = function(t) {
                            t = t || {};
                            var n = P.length - 1,
                                i = window.location.origin + window.location.pathname + "#" + t.pid,
                                a = e.setUrlParams(i, t.param);
                            return n > -1 && (P.splice(n, 1, t), r.syncHistory && "replaceState" in window.history && window.history.replaceState(t, null, a)),
                                P
                        },
                        w.getLast = function(e) {
                            var t = P.length - 1,
                                n = P[t] || {};
                            return e ? n[e] : n
                        },
                        w.removeNext = function(t) {
                            var n = P.length - t;
                            P.splice(t, n);
                            var i = w.getLast(),
                                a = window.location.origin + window.location.pathname + "#" + i.pid,
                                o = e.setUrlParams(a, i.param);
                            r.syncHistory && "replaceState" in window.history && window.history.replaceState(i.param, null, o)
                        },
                        w.removeLast = function() {
                            var e = P.length - 1;
                            w.removeNext(e)
                        },
                        w.checkLoad = function(t) {
                            return e.array.compare(P, t, "pid") || e.array.compare(P, t, "url") || e.array.compare(P, t, "id")
                        },
                        T.add = function(e, t) {
                            return x[e] = t || {},
                                x[e]
                        },
                        T.del = function(e) {
                            delete x[e]
                        },
                        T.get = function(e, t) {
                            return t ? (x[e] || {})[t] : x[e]
                        },
                        T.save = function() {
                            if (P.length > 1) {
                                var e = i.html();
                                j.set("cacheHtml", e),
                                    j.set("cacheHistory", P),
                                    j.set("hasCache", "true")
                            }
                        },
                        T.load = function() {
                            var t = j.get("cacheHtml", 0),
                                n = j.get("cacheHistory", 0),
                                a = [];
                            if (n.length > 1) {
                                i.html(t),
                                    s = i.children(".bui-router-main"),
                                    B({
                                        name: L().pid
                                    });
                                try {
                                    n.forEach((function(e, t) {
                                        var n = "string" == typeof e ? JSON.parse(e) : e;
                                        a.push(n)
                                    }));
                                    var o = a[a.length - 1];
                                    o,
                                        loader.require(o.pid, (function(e) {
                                            y[o.pid] = e || null
                                        })),
                                        H("back", (function(e) {
                                            loader.require(e.target.pid, (function(t) {
                                                y[e.target.pid] = t || null
                                            }))
                                        }))
                                } catch(t) {
                                    e.showLog(t)
                                }
                                P = a,
                                    A(),
                                    M(),
                                    h = !1,
                                    I = !0,
                                    T.clear()
                            }
                        },
                        T.clear = function() {
                            j.remove("cacheHistory"),
                                j.remove("cacheHtml"),
                                j.remove("hasCache")
                        },
                        O.add = function(e, t) {
                            return k[e] = t || {},
                                k[e]
                        },
                        O.get = function(e, t) {
                            return t ? (k[e] || {})[t] : k[e]
                        };
                    var z = {
                        init: function(n) {
                            z.store = n.store || null,
                                delete n.store,
                                n = t.extend(!0, {},
                                    r, e.config.router, n),
                                r = z.config = n;
                            var l, u = e.history.getParams("url");
                            if (u.module && n.parseurl) {
                                var d = u.module;
                                delete u.module;
                                var h = e.setUrlParams(d, u);
                                return window.location.href = window.location.origin + window.location.pathname + "#" + h,
                                    this
                            }
                            if ("pages/main/main.html" === n.indexModule.template && "pages/main/main.js" === n.indexModule.script || (C = loader.map(n.indexModule)), v && "effect" in n && P.forEach((function(e, t) {
                                e.effect = n.effect
                            })), !n.id) return e.showLog("id 不能为空", "bui.router.init"),
                                !1;
                            if (i = e.objId(n.id), o = bui.mask({
                                appendTo: i,
                                opacity: 0,
                                autoClose: !1
                            }), a = e.loading({
                                display: "block",
                                width: 30,
                                height: 30,
                                opacity: 0
                            }), s = i.children(".bui-router-main"), f = n.width || window && window.viewport && window.viewport.width() || document.documentElement.clientWidth || "100%", p = n.height || window && window.viewport && window.viewport.height() || document.documentElement.clientHeight || "100%", !s.length) {
                                var g = (l = "", String(f).indexOf("%"), String(p).indexOf("%"), l += '<div class="bui-router-main">', l += "</div>");
                                i.html(g),
                                    s = i.children(".bui-router-main")
                            }
                            return (n.width > 0 || String(n.width).indexOf("%") > -1) && s.width(n.width),
                            (n.height > 0 || String(n.height).indexOf("%") > -1) && s.height(n.height),
                                function(n) {
                                    if (function() {
                                        var t = j.get("hasCache", 0);
                                        Boolean(t) && r.reloadCache ? T.load() : function(t) {
                                            try {
                                                var n = L();
                                                if (n.pid) {
                                                    if (n.pid.indexOf("http://") > -1 || n.pid.indexOf("https://") > -1) return n.param.iframe = !0,
                                                        void E({
                                                            url: n.pid,
                                                            param: n.param,
                                                            iframe: !0
                                                        });
                                                    E({
                                                        url: n.pid,
                                                        param: n.param
                                                    })
                                                } else E({
                                                    url: r.indexModule.moduleName,
                                                    param: n.param || {}
                                                })
                                            } catch(t) {
                                                e.showLog(t, "bui.router.loadUrl")
                                            }
                                        } ()
                                    } (), n.swipe &&
                                    function(n) {
                                        var a = /hp-tablet/gi.test(navigator.appVersion),
                                            o = "ontouchstart" in window && !a,
                                            l = 0,
                                            c = 0,
                                            s = !1,
                                            u = null,
                                            d = null,
                                            f = {
                                                x1: 0,
                                                x2: 0,
                                                y1: 0,
                                                y2: 0,
                                                direction: ""
                                            };
                                        i.on("touchstart", (function(i) {
                                            var a = i.originalEvent && i.originalEvent.targetTouches || i.targetTouches,
                                                l = o ? a[0] : i;
                                            f.x1 = l.pageX,
                                                f.y1 = l.pageY,
                                                s = t(i.target).closest(r.useScroll).length,
                                            P.length > 1 && f.x1 > 0 && f.x1 < n.distance && (u = t("#".concat(w.getLast().id)), d = e.history.getPrev().id ? t("#".concat(e.history.getPrev().id)) : null)
                                        })),
                                            i.on("touchmove", (function(i) {
                                                var a = i.originalEvent && i.originalEvent.targetTouches || i.targetTouches,
                                                    p = o ? a[0] : i;
                                                f.x2 = p.pageX,
                                                    f.y2 = p.pageY,
                                                a.length > 1 || i.scale && 1 !== i.scale || (s = t(i.target).closest(r.useScroll).length, f.x2 - f.x1 > 0 && !s && i.preventDefault(), f.direction || (f.direction = e.swipeDirection(f.x1, f.x2, f.y1, f.y2)), "swipeleft" !== f.direction && "swiperight" !== f.direction || (i.preventDefault(), i.stopPropagation()), l = Math.abs(f.x2 - f.x1), c = Math.abs(f.y2 - f.y1), "swiperight" === f.direction && l > n.startDistance && n.swipeBack && (d && d.css("display", "block"), n.pageMove && u && u.css("transform", "translateX(".concat(l, "px)")), i.preventDefault()))
                                            })),
                                            i.on("touchend", (function(e) { (s = t(e.target).closest(r.useScroll).length, "swiperight" === f.direction && f.x1 > n.distance && n.swipeBack && (l = 0), "swiperight" === f.direction && l > n.swipeDistance) && (!1 !== (n.onBeforeSwipeRight && n.onBeforeSwipeRight()) && n.swipeBack && bui.back(), n.onSwipeRight && n.onSwipeRight(e), _.call(z, "swiperight"));
                                                "swipeleft" === f.direction && l > n.swipeDistance && (n.onSwipeLeft && n.onSwipeLeft(e), _.call(z, "swipeleft")),
                                                "swipeup" === f.direction && c > n.swipeDistance && !s && (n.onSwipeUp && n.onSwipeUp(e), _.call(z, "swipeup")),
                                                "swipedown" === f.direction && c > n.swipeDistance && !s && (n.onSwipeDown && n.onSwipeDown(e), _.call(z, "swipedown")),
                                                l < n.swipeDistance && (d && d.css("display", "none"), u && u.css("transform", "translateX(0)")),
                                                    l = 0,
                                                    s = !1,
                                                    f = {
                                                        x1: 0,
                                                        x2: 0,
                                                        y1: 0,
                                                        y2: 0,
                                                        direction: ""
                                                    },
                                                    u = null,
                                                    d = null,
                                                    e.stopPropagation()
                                            }))
                                    } (n), window.addEventListener("beforeunload", (function(e) {
                                        r.reloadCache && T.save(),
                                            _.call(c, "beforeunload", {
                                                target: P[P.length - 1]
                                            })
                                    })), n.hash) return window.addEventListener("hashchange", (function(t) {
                                        var n = L(),
                                            i = "" == n.pid || "undefined" == n.pid ? "main": n.pid,
                                            a = e.array.indexs(P, i, "pid"),
                                            o = a[a.length - 1];
                                        i = "wechat_redirect" == n.pid ? "main": i,
                                            o > -1 ? (B({
                                                index: -(P.length - o - 1 || 1)
                                            }), _.call(c, "popstate", {
                                                type: "back",
                                                prevTarget: P[o - 1],
                                                target: P[o]
                                            })) : (E({
                                                url: i,
                                                param: n.param,
                                                iframe: "true" == n.param.iframe,
                                                replace: !0
                                            }), _.call(c, "popstate", {
                                                type: "load",
                                                prevTarget: P[P.length - 2],
                                                target: P[P.length - 1]
                                            }))
                                    })),
                                        this;
                                    r.syncHistory && "pushState" in window.history && window.addEventListener("popstate", (function(t) {
                                        var n = L(),
                                            i = "" == n.pid ? r.indexModule.moduleName: n.pid,
                                            a = D(i);
                                        e.array.index(P, i, "pid") > -1 ? (B({
                                            index: a,
                                            param: n.param
                                        }), _.call(c, "popstate", {
                                            type: "back",
                                            prevTarget: P[a - 1],
                                            target: P[a]
                                        })) : (E({
                                            url: i,
                                            param: n.param,
                                            iframe: "true" == n.param.iframe
                                        }), _.call(c, "popstate", {
                                            type: "load",
                                            prevTarget: P[P.length - 2],
                                            target: P[P.length - 1]
                                        }))
                                    }))
                                } (n),
                            n.uid && e.history.setUI && e.history.setUI({
                                uid: n.uid,
                                ui: z
                            }),
                                _.call(this, "init", {
                                    target: i[0]
                                }),
                                z
                        },
                        option: function(t, n) {
                            return v = !0,
                                e.option.call(z, t, n)
                        },
                        config: r,
                        data: {},
                        on: H,
                        off: function(t, n) {
                            return e.off.apply(z, arguments),
                                this
                        },
                        trigger: _,
                        load: E,
                        resize: function(e) {
                            return (e = e || {}).width = e.width || r.width,
                                e.height = e.height || r.height,
                                window.viewport = bui.viewport(),
                                f = e.width || window && window.viewport && window.viewport.width() || document.documentElement.clientWidth || "100%",
                                p = e.height || window && window.viewport && window.viewport.height() || document.documentElement.clientHeight || "100%",
                                s.css({
                                    width: f,
                                    height: p
                                }),
                                _.call(this, "resize", {
                                    target: P[P.length - 1]
                                }),
                                this
                        },
                        destroy: function(t) {
                            return "string" == typeof t && "main" !== t ? (loader.destroy(t), T.del(t), t in y && delete y[t]) : e.showLog("参数只能是字符串"),
                                this
                        },
                        loadPart: function(e) {
                            var n = t.Deferred(),
                                i = t.extend(!0, {},
                                    {
                                        id: "",
                                        url: "",
                                        param: {},
                                        loaded: null
                                    },
                                    e);
                            return i.loaded = function(t) {
                                e.loaded && e.loaded.call(z, t),
                                    n.resolve(t),
                                    _.call(z, "loadpart", t)
                            },
                                loader.load(i),
                                n.promise()
                        },
                        replace: function(e) {
                            return E({
                                url: (e = e || {}).url || "",
                                param: e.param || {},
                                replace: !0
                            }),
                                this
                        },
                        refresh: function() {
                            var t = P.length - 1,
                                n = P[t],
                                i = P.length > 1 ? P[P.length - 2] : null;
                            return e.history.refresh(),
                                _.call(z, "refresh", {
                                    prevTarget: i,
                                    target: n
                                }),
                                this
                        },
                        back: B,
                        isLoad: function(e) {
                            var t;
                            return e && (t = e in y),
                                t
                        },
                        $: function(t) {
                            var n = w.getLast(),
                                i = document.getElementById(n.id) || document;
                            return e.obj(t, i)
                        },
                        currentId: function(e) {
                            return w.getLast().id
                        },
                        currentPage: function() {
                            var e = w.getLast();
                            return document.getElementById(e.id)
                        },
                        currentModule: function() {
                            return w.getLast()
                        },
                        getPageParams: function() {
                            return w.getLast().param
                        },
                        getPartParams: function(t) {
                            return e.history.getComponentParam(t)
                        },
                        getHistory: w.get,
                        preload: function(n) {
                            var i = t.Deferred(),
                                a = function(t, a) {
                                    return R(t.url, (function(i) {
                                        var o = e.guid(),
                                            r = N(t.url).pid;
                                        F({
                                            id: o,
                                            content: i,
                                            pid: r
                                        });
                                        var l = [];
                                        T.add(r, {
                                            id: o,
                                            pid: r,
                                            template: i
                                        }),
                                            l.push(r),
                                            t.style && "array" === e.typeof(t.style) ? t.style.forEach((function(e, t) {
                                                l.push(e)
                                            })) : t.style && "string" === e.typeof(t.style) && l.push(t.style),
                                            t.script && "array" === e.typeof(t.script) ? t.script.forEach((function(e, t) {
                                                l.push(e)
                                            })) : t.script && "string" === e.typeof(t.script) && l.push(t.script),
                                            loader.import(l, (function() {
                                                _.call(z, "preloadafter", {
                                                    prevTarget: null,
                                                    target: null
                                                }),
                                                a && a(n)
                                            }), (function() {
                                                _.call(z, "preloadafter", {
                                                    prevTarget: null,
                                                    target: null
                                                }),
                                                a && a(n)
                                            }))
                                    }), (function(n) {
                                        e.showLog(t.url + "请求失败"),
                                            i.reject(t.url)
                                    })),
                                        i.promise()
                                };
                            return n && "object" === e.typeof(n) ? "url" in n && a(n, (function() {
                                i.resolve(n)
                            })) : n && "array" === e.typeof(n) && n.forEach((function(e, t) {
                                t == n.length - 1 ? "url" in e && a(e, (function() {
                                    i.resolve(n)
                                })) : "url" in e && a(e)
                            })),
                                i
                        },
                        initScroll: function(n) {
                            var i = w.getLast(),
                                a = e.objId(i.id),
                                o = "object" === _typeof(n) ? t(n) : a.find(".bui-page");
                            return o.length && e.init({
                                id: o,
                                height: p
                            }),
                                this
                        },
                        history: {
                            get: w.get,
                            check: w.checkLoad,
                            getLast: w.getLast,
                            add: w.add,
                            removeLast: w.removeLast,
                            replace: w.replace
                        }
                    };
                    return z
                }
            } (window.bui || {},
                window.libs),
            function(e, t) {
                var n = function() {
                    function n(i) {
                        _classCallCheck(this, n),
                            this._default = {
                                log: !1,
                                hasLife: !0,
                                onBeforeInit: null,
                                onInited: null
                            },
                            this._plugin = i || {
                                name: "",
                                depend: null,
                                config: null,
                                param: null,
                                callback: null
                            };
                        var a = e.config.hasOwnProperty(this._plugin.name) ? e.config[this._plugin.name] : null;
                        this.config = t.extend(!0, {},
                            this._default, a, this._plugin.config, this._plugin.param),
                            this.initStatus = !1,
                            this.reinitStatus = !1,
                            this.widgets = Object.create(null),
                            this.init()
                    }
                    return _createClass(n, [{
                        key: "widget",
                        value: function(e) {
                            return e && e in this.widgets ? this.widgets[e] : this.widgets
                        }
                    },
                        {
                            key: "init",
                            value: function(n) {
                                var i = this,
                                    a = n || null;
                                i.config = t.extend(!0, this.config, a);
                                var o = i.config,
                                    r = o.hasLife && o.onBeforeInit && o.onBeforeInit.call(i, o);
                                return o.log && console.log("".concat(i._plugin.name, " before init")),
                                !1 === r || (i._plugin.callback && i._plugin.callback.call(i, o), o.log && console.log("".concat(i._plugin.name, " init")), o.hasLife && o.onInited && o.onInited.call(i, o), o.log && console.log("".concat(i._plugin.name, " after inited")), this.initStatus = !0, i.config.uid && e.history.setUI && e.history.setUI({
                                    uid: i.config.uid,
                                    ui: i
                                })),
                                    i
                            }
                        },
                        {
                            key: "reinit",
                            value: function() {
                                return this.destroy(),
                                    this.init(),
                                this.config.log && console.log("".concat(this._plugin.name, " reinit")),
                                    this
                            }
                        },
                        {
                            key: "destroy",
                            value: function(t) {
                                this.beforeDestroy && this.beforeDestroy(),
                                    this.beforeDestroy = null,
                                    this.widgets = {},
                                    this.off(),
                                    this.initStatus = !1,
                                t && t.call(this);
                                var n = this.config.uid;
                                n && (e.history.getLast().ui[n] = null);
                                return this.config.log && console.log("".concat(this._plugin.name, " destroyed")),
                                    this
                            }
                        },
                        {
                            key: "prefix",
                            value: function(t) {
                                return e.config.classNamePrefix + t
                            }
                        },
                        {
                            key: "showLog",
                            value: function(t, n) {
                                n = n || "";
                                var i = "";
                                return "object" == _typeof(t) && "message" in t && "name" in t ? i = t.message + ":" + t.name + "&&stack:" + t.stack: "string" == typeof t && (i = t),
                                e.log && console.error(n + " " + i),
                                e.trace && console.trace && console.trace(),
                                    this
                            }
                        },
                        {
                            key: "option",
                            value: function(n, i) {
                                if ("object" !== e.typeof(n) && void 0 === i) return "string" == typeof n ? this.config[n] : this.config;
                                if ("id" == n) return e.showLog("不允许修改控件的ID参数"),
                                    this;
                                if (n && "object" === e.typeof(n)) {
                                    var a = t.extend(this.config, n);
                                    return this && this.init(a)
                                }
                                if (this.config.hasOwnProperty(n)) {
                                    var o = {};
                                    o[n] = i;
                                    var r = t.extend(this.config, o);
                                    return instance && instance.init(r)
                                }
                                return this
                            }
                        },
                        {
                            key: "emitter",
                            get: function() {
                                return e.emitter()
                            }
                        },
                        {
                            key: "on",
                            get: function() {
                                return this.emitter.on
                            }
                        },
                        {
                            key: "off",
                            get: function() {
                                return this.emitter.off
                            }
                        },
                        {
                            key: "trigger",
                            get: function() {
                                return this.emitter.trigger
                            }
                        }]),
                        n
                } ();
                e.extend = function(t) {
                    new(function() {
                        function i(e) {
                            _classCallCheck(this, i),
                                this.init(e)
                        }
                        return _createClass(i, [{
                            key: "init",
                            value: function(i) {
                                var a = i.name;
                                return this.checkName(a) ? (e[a] = function(e) {
                                    return t.param = e,
                                        new n(t)
                                },
                                    this) : this
                            }
                        },
                            {
                                key: "checkName",
                                value: function(e) {
                                    return e ? (this.name = e, !0) : (console.warn("插件名字不能为空"), !1)
                                }
                            }]),
                            i
                    } ())(t)
                }
            } (window.bui || {},
                window.libs),
            t((function(e) { !
                function(t, n) {
                    var i;
                    t.extend({
                        name: "page",
                        config: (i = {
                            uid: "",
                            dialogid: "",
                            url: "",
                            param: null,
                            script: "",
                            appendTo: "",
                            className: "bui-dialog-page",
                            effect: "",
                            pageSuffix: ".html",
                            height: 0,
                            width: 0,
                            iframe: !1,
                            openFirst: !0,
                            closeFirst: !1,
                            autoClose: !1,
                            needRemove: !1,
                            useBox: !1,
                            syncHistory: !1,
                            title: "",
                            buttons: null,
                            mask: !1,
                            life: !0,
                            scroll: !1,
                            needView: !1,
                            needComponent: !0,
                            cache: !0,
                            close: !1,
                            autoload: !0,
                            fullscreen: !0
                        },
                            _defineProperty(i, "effect", "fadeInRight"), _defineProperty(i, "onError", null), _defineProperty(i, "beforeClose", null), _defineProperty(i, "closed", null), _defineProperty(i, "beforeOpen", null), _defineProperty(i, "opened", null), _defineProperty(i, "beforeLoad", null), _defineProperty(i, "loaded", null), i),
                        callback: function(i) {
                            var a = this,
                                o = a.config,
                                r = "body" == a.appendTo ? n: t.obj,
                                l = "",
                                c = !1,
                                s = (loader.map().modules, a.widgets.dialog = t.dialog({
                                    autoinit: !1,
                                    needRemove: i.needRemove
                                })),
                                u = null,
                                d = !1;
                            function f(e, n) {
                                var i = "",
                                    a = n.close ? '<div class="bui-dialog-close"><i class="' + t.config.icon.close + '"></i></div>': "",
                                    o = n.title ? '<div class="bui-dialog-head">'.concat(n.title, "</div>") : "";
                                return i += "".concat(o, '<div class="bui-dialog-main">').concat(e, "</div>").concat(a)
                            }
                            function p(e) {
                                var n = loader.map().modules[u.module] || {};
                                if (n.hide && o.life) {
                                    var i = t.hasRouter ? t.history.getLast() : {};
                                    n.hide({
                                        type: "page",
                                        target: i
                                    })
                                }
                                "function" == typeof e && e.call(a, n),
                                o.closed && o.closed.call(a, n)
                            }
                            function h(n, i) {
                                var r = t.history.getLast(),
                                    l = (loader.map().modules || {})[n];
                                if (o.cache && c && !d) return ! o.openFirst && s.open(),
                                "function" == typeof i && i.call(a, l.exports),
                                    a;
                                if (t.history.setPage({
                                    id: s.config.id,
                                    name: n,
                                    url: o.url,
                                    dialog: s,
                                    param: o.param
                                }), d = !1, l && "function" == typeof l.loaded) {
                                    var u = l.loaded && l.loaded.call(e, l.exports) || l.exports;
                                    t.history.setPage({
                                        id: s.config.id,
                                        name: n,
                                        url: o.url,
                                        dialog: s,
                                        exports: u,
                                        param: o.param
                                    });
                                    var f = loader.map().modules[n] || {};
                                    return f.show && o.life && f.show({
                                        type: "page",
                                        target: r
                                    }),
                                    "function" == typeof i && i.call(a, u),
                                        a.compile({
                                            id: s.config.id
                                        }),
                                    o.opened && o.opened.call(a, u),
                                    !o.openFirst && s.open(),
                                        this
                                }
                                loader.require(n, (function(e) {
                                    var l = loader.map().modules[n] || {};
                                    t.history.setPage({
                                        id: s.config.id,
                                        name: n,
                                        url: o.url,
                                        dialog: s,
                                        exports: e,
                                        param: o.param
                                    }),
                                    l.show && o.life && l.show({
                                        type: "page",
                                        target: r
                                    }),
                                    "function" == typeof i && i.call(a, e),
                                        a.compile({
                                            id: s.config.id
                                        }),
                                    o.opened && o.opened.call(a, e)
                                })),
                                    c = !0
                            }
                            function g(e) {
                                var t = loader.map().modules,
                                    n = {},
                                    i = e.indexOf(o.pageSuffix);
                                return i > -1 ? (n.url = e, n.module = e.substr(0, i)) : (n.url = t[e] && t[e].template || e + o.pageSuffix, n.module = e),
                                    n
                            }
                            a.init = function(e) {
                                var i = n.extend(!0, {},
                                    a.config, e);
                                if (i.onClose = function() {
                                    t.hasRouter && i.syncHistory && bui.back(),
                                        p()
                                },
                                    u = g(i.url), i.iframe) {
                                    var o = t.platform.isIos() ? 'scrolling="no"': "";
                                    return i.content = '<iframe class="bui-router-iframe" src="'.concat(i.url, '" ').concat(o, " ></iframe>"),
                                        s.create(i),
                                    i.autoload && s.open(),
                                    i.loaded && i.loaded.call(a, u),
                                        a
                                }
                                if (i.script) {
                                    var c = i.script.indexOf(".js");
                                    u.module = i.script.substr(0, c)
                                }
                                return ! 1 === (i.beforeLoad && i.beforeLoad.call(a, u)) ? this: (loader.import(u.url, (function(e) {
                                    "object" !== _typeof(e) ? (l = f(e, i), i.id ? (s.init(i), r(i.id).html(e)) : (i.content = e, s = s.create(i)), i.autoload && a.open(), i.loaded && i.loaded.call(a, u)) : i.onError && i.onError.call(a, e)
                                })), a)
                            },
                                a.compile = function(e) {
                                    var t = n.extend(!0, {
                                            id: s.config.id,
                                            cacheHtml: !1,
                                            cache: !1,
                                            needComponent: o.needComponent,
                                            needView: o.needView
                                        },
                                        e);
                                    t.needView && loader.views(t),
                                    t.needComponent && loader.components(t)
                                },
                                a.reload = function(e) {
                                    var t = o = n.extend(!1, a.config, o, e);
                                    if (t.param = e.param || {},
                                        d = !0, u = g(t.url), t.script) {
                                        var i = t.script.indexOf(".js");
                                        u.module = t.script.substr(0, i)
                                    }
                                    if (!1 === (t.beforeLoad && t.beforeLoad.call(a, u))) return this;
                                    loader.import(u.url, (function(e) {
                                        "object" !== _typeof(e) ? (l = f(e, t), r("#" + (s.config.id || t.dialogid)).html(l), h(u.module), t.loaded && t.loaded.call(a, u)) : t.onError && t.onError.call(a, e)
                                    }))
                                },
                                a.toggle = function(e, t) {
                                    return a.isOpen() ? a.close(t) : a.open(e),
                                        a
                                },
                                a.isOpen = s.isOpen,
                                a.close = function(e) {
                                    return ! 1 === (i.beforeClose && o.beforeClose.call(a)) ? this: (t.hasRouter && o.syncHistory && t.history.removeLast(o.syncHistory), o.closeFirst ? (s.close((function() {
                                        a.trigger("close"),
                                            p(e)
                                    })), a) : (p(e), s.close(), a.trigger("close"), a))
                                },
                                a.remove = function(e) {
                                    return s.remove(e),
                                        a.trigger("remove"),
                                        a
                                },
                                a.open = function(e) {
                                    if (!1 === (o.beforeOpen && o.beforeOpen.call(a))) return this;
                                    if (o.iframe) return s.open(e),
                                        a;
                                    var n = {
                                        hide: a.close,
                                        show: a.open
                                    };
                                    return t.hasRouter && o.syncHistory && t.history.add({
                                        id: s.config.id,
                                        name: u.module,
                                        url: o.url,
                                        replace: !1,
                                        param: o.param || {},
                                        part: {},
                                        page: {},
                                        effect: "push",
                                        toggle: n,
                                        syncHistory: o.syncHistory
                                    }),
                                        loader.map({
                                            moduleName: u.module,
                                            id: s.config.id
                                        }),
                                        t.history.getLast().currentPage = s.config.id,
                                        o.openFirst ? (s.open((function() {
                                            a.trigger("open"),
                                                h(u.module, e)
                                        })), a) : (h(u.module, e), s.open(), a.trigger("open"), a)
                                },
                                a.setParam = function(e) {
                                    var i = n.extend(!1, {},
                                        o.param, e);
                                    t.history.setPage({
                                        id: s.config.id,
                                        param: i
                                    })
                                },
                                a.init(o)
                        }
                    })
                } (window.bui || {},
                    window.libs)
            })),
            function(e, t) {
                e.setUrlParams = function(t, n, i) {
                    i = 0 != i,
                        n = "object" == _typeof(n) ? n: {};
                    var a = e.unit.objectToKeyString(n, i);
                    return "" == a ? t: t + "?" + a
                },
                    e.getUrlParams = function(t) {
                        t = 0 != t;
                        var n = window.location.href,
                            i = n.indexOf("?"),
                            a = {};
                        if (i > -1) {
                            var o = n.substr(i + 1);
                            a = e.unit.keyStringToObject(o, t)
                        }
                        return a
                    },
                    e.getUrlParam = function(e) {
                        var t = window.location.href,
                            n = new RegExp("(^|&|.)" + e + "=([^&]*)(&|$)", "i"),
                            i = t.substr(1).match(n);
                        return null != i ? decodeURIComponent(i[2]) : null
                    },
                    e.typeof = function(e) {
                        var t = Object.prototype.toString.call(e).slice(8, -1);
                        return t = t.toLowerCase()
                    },
                    e.setting = function(t, n) {
                        return "string" == typeof t && "object" === _typeof(n) ? e.config[t] = n: "string" == typeof t && void 0 === n ? e.config[t] : e.config
                    },
                    e.cmd = function(t) {
                        var n = t.split(":") || [],
                            i = e.history.getUI(n[0]);
                        if (n.length > 1) {
                            var a = [].slice.apply(arguments);
                            a.shift();
                            var o = i[n[1]];
                            return o ? o.apply(i, a) : void e.showLog("找不到该实例的".concat(n[1], "方法"))
                        }
                        return i
                    }
            } (window.bui || {}),
            function(e, t) {
                e.array = {},
                    e.array.index = e.inArray = function(e, t, n) {
                        var i, a;
                        e instanceof Array ? (i = e || [], a = t) : (i = t || [], a = e);
                        for (var o = 0; o < i.length; o++) {
                            var r = i[o];
                            if ((r && r[n] || r) === a) return parseInt(o)
                        }
                        return - 1
                    },
                    e.array.compare = e.compareArray = function(e, t, n) {
                        var i, a;
                        e instanceof Array ? (i = e || [], a = t) : (i = t || [], a = e);
                        for (var o = 0; o < i.length; o++) {
                            var r = i[o];
                            if ((r && r[n] || r) === a) return ! 0
                        }
                        return ! 1
                    },
                    e.array.remove = e.removeArray = function(t, n, i) {
                        var a, o;
                        return t instanceof Array ? (a = t || [], o = n) : (a = n || [], o = t || []),
                            e.array.delete(a, o, i),
                            a
                    },
                    e.array.filter = e.filterArray = function(t, n, i) {
                        var a, o;
                        t instanceof Array ? (a = t || [], o = n) : (a = n || [], o = t);
                        var r = [];
                        for (var l in a) try {
                            var c = a[l] && a[l][i] || a[l];
                            new RegExp(o).test(c) && r.push(a[l])
                        } catch(t) {
                            e.showLog(t)
                        }
                        return r
                    },
                    e.array.indexs = e.indexArray = function(e, t, n) {
                        var i, a;
                        e instanceof Array ? (i = e || [], a = t) : (i = t || [], a = e);
                        var o = [];
                        for (var r in i) { (i[r] && i[r][n] || i[r]) === a && o.push( + r)
                        }
                        return o
                    },
                    e.array.excess = e.excessArray = function(e, t, n) {
                        var i;
                        i = e instanceof Array ? e || [] : t || [];
                        var a = {},
                            o = [];
                        for (var r in i) try {
                            var l = i[r] && i[r][n] || i[r];
                            a[l] !== l && (a[l] = l, o.push(i[r]))
                        } catch(e) {}
                        return o
                    },
                    e.array.uniq = function(t, n) {
                        for (var i = [], a = 0; a < t.length; a++) {
                            var o = void 0 === n,
                                r = t[a],
                                l = o ? r: r[n] || r;
                            e.array.index(i, l, n) < 0 && i.push(r)
                        }
                        return i
                    },
                    e.array.copy = e.copyArray = function(t, n, i) {
                        var a = [];
                        if (n = n || 0, i = i || t && t.length, !t || "array" === e.typeof(t)) return t.forEach((function(e, t) {
                            a.push(e)
                        })),
                        a.splice(n, i) || []
                    },
                    e.array.empty = function(t) {
                        if (!t || "array" === e.typeof(t)) return t.splice(0, t.length)
                    },
                    e.array.replace = function(t, n) {
                        if (! (t && "array" !== e.typeof(t) || n && "array" !== e.typeof(n))) {
                            var i = [0, t.length].concat(n);
                            return t.splice.apply(t, i)
                        }
                    },
                    e.array.merge = function(t) {
                        var n;
                        if (!t || "array" === e.typeof(t)) {
                            var i = arguments,
                                a = i.length - 1,
                                o = i[a],
                                r = "string" == typeof o;
                            if (r && i.length > 1) {
                                for (var l, c = a,
                                         s = [], u = function(e) {
                                        var n = Array.prototype.slice.call(i[e], 0);
                                        t.forEach((function(e, t) {
                                            var i = e[o] || e;
                                            n instanceof Array && n.forEach((function(t, a) {
                                                var r = t[o] || t;
                                                if (i === r) {
                                                    for (var l in t) e[l] = t[l];
                                                    n.splice(a, 1)
                                                }
                                            }))
                                        })),
                                            s.push(n)
                                    },
                                         d = 0; d < c; d++) u(d);
                                return (l = e.array).merge.apply(l, [t].concat(s))
                            }
                            var f = (n = [t.length, 0]).concat.apply(n, _toConsumableArray(Array.prototype.slice.call(arguments, 1)));
                            return t.splice.apply(t, f),
                                t
                        }
                    },
                    e.array.get = function(t, n, i) {
                        if (!t || "array" === e.typeof(t)) {
                            for (var a, o = null,
                                     r = 0; r < t.length; r++) { ((o = t[r]) && o[i] || o) === n && (a = o)
                            }
                            return a
                        }
                    },
                    e.array.getAll = function(e, t, n) {
                        e = e || [];
                        var i = [],
                            a = null;
                        for (var o in e) try {
                            var r = (a = e[o]) && a[n] || a;
                            t && t instanceof Array ? t.forEach((function(e, t) {
                                r === e && i.push(a)
                            })) : r === t && i.push(a)
                        } catch(e) {}
                        return i
                    },
                    e.array.set = function(t, n, i, a) {
                        if (a = a || !0, !t || "array" === e.typeof(t)) {
                            var o = /\d/.test(n) && "number" == typeof n;
                            if (o && void 0 !== i) {
                                var r = t[n] || {};
                                if (!0 === a) return t.splice(n, 1, i),
                                    t;
                                if ("object" === e.typeof(i)) for (var l in i) r[l] = i[l];
                                else "object" !== e.typeof(i) && "string" == typeof a && (r[a] = i);
                                return t.splice(n, 1, r),
                                    t
                            }
                            for (var c = 0; c < t.length; c++) {
                                var s = t[c],
                                    u = void 0 === a ? s: s[a] || s;
                                if (o ? c === n: u === n) {
                                    if ("string" == typeof a) {
                                        if (i && "object" === e.typeof(i)) for (var d in i) s[d] = i[d];
                                        else s[a] = i;
                                        t.splice(c, 1, s)
                                    } else t.splice(c, 1, i);
                                    return t
                                }
                            }
                            return t
                        }
                    },
                    e.array.setAll = function(t, n, i, a) {
                        if (!t || "array" === e.typeof(t)) return t.filter((function(o, r) {
                            var l = void 0 === a ? o: o[a] || o;
                            if (r == n || l === n) if (a) {
                                if (i && "object" === e.typeof(i)) for (var c in i) o[c] = i[c];
                                else o[a] = i;
                                t.splice(r, 1, o)
                            } else t.splice(r, 1, i)
                        })),
                            t
                    },
                    e.array.delete = function(t, n, i) {
                        if (!t || "array" === e.typeof(t)) {
                            var a = [],
                                o = e.array.copy(t);
                            return n && "array" === e.typeof(n) ? n.forEach((function(e, t) {
                                r(void 0 !== i && e[i] || e)
                            })) : r(n),
                                a
                        }
                        function r(e) {
                            for (var n = 0,
                                     r = 0; r < o.length; r++) {
                                var l = r - n,
                                    c = t.length !== o.length,
                                    s = c ? t[l] || {}: t[r] || {},
                                    u = void 0 !== i ? s[i] : s,
                                    d = "function" == typeof u ? u.name.replace("bound ", "") : u,
                                    f = "function" == typeof e ? e.name: e;
                                if (u === e || d === f) return c ? t.splice(l, 1) : t.splice(r, 1),
                                    a.push(r),
                                    void++n
                            }
                        }
                    },
                    e.array.deleteIndex = function(t, n) {
                        if (!t || "array" === e.typeof(t)) {
                            var i = [];
                            return n && "array" === e.typeof(n) ? n.forEach((function(n, a) {
                                i.push(t[n]),
                                    e.array.remove(t, t[n])
                            })) : (i.push(t[n]), e.array.remove(t, t[n])),
                                i
                        }
                    }
            } (window.bui || {}),
            function(e, t) {
                e.storage = function(n) {
                    var i = 1,
                        a = "",
                        o = "",
                        r = null,
                        l = null,
                        c = {
                            size: i,
                            reverse: !0,
                            deep: !1,
                            local: !0,
                            uid: "",
                            prefix: ""
                        },
                        s = {
                            init: u,
                            get: d,
                            getAll: function(e) {
                                for (var t = {},
                                         n = parseInt(e) || 0, i = 0; i < localStorage.length; i++) {
                                    var a = localStorage.key(i);
                                    if (a.substr(o.length), o && 0 === a.indexOf(o)) try {
                                        var r = JSON.parse(l.getItem(a));
                                        t[a] = void 0 !== e ? r[n] : r
                                    } catch(e) {
                                        t[a] = l.getItem(a)
                                    }
                                    if ("" === o) try {
                                        t[a] = JSON.parse(l.getItem(a))
                                    } catch(e) {
                                        t[a] = l.getItem(a)
                                    }
                                }
                                return t
                            },
                            set: function(t, n, r) {
                                t = o + t;
                                var c = 1 == i ? null: l.getItem(t),
                                    s = [],
                                    u = "",
                                    d = r ? n[r] : n;
                                if (null === c) {
                                    s.push(n),
                                        u = JSON.stringify(s);
                                    try {
                                        l.setItem(t, u)
                                    } catch(e) {
                                        "QuotaExceededError" == e.name && console.log("超出本地存储限额！")
                                    }
                                } else {
                                    var f = JSON.parse(c);
                                    if (e.array.compare(f, d, r)) {
                                        e.array.remove(f, d, r),
                                            f[a](n);
                                        try {
                                            u = JSON.stringify(f),
                                                l.setItem(t, u)
                                        } catch(e) {
                                            "QuotaExceededError" == e.name && console.log("超出本地存储限额！")
                                        }
                                    } else {
                                        f[a](n),
                                        f.length > i && 0 != i && ("unshift" == a ? f.pop() : f.shift());
                                        try {
                                            u = JSON.stringify(f),
                                                l.setItem(t, u)
                                        } catch(e) {
                                            "QuotaExceededError" == e.name && console.log("超出本地存储限额！")
                                        }
                                    }
                                }
                                return this
                            },
                            remove: function(t, n, i) {
                                if ("string" != typeof(t = o + t)) return void e.showLog("要删除的字段名只能是字符串", "bui.storage.remove");
                                var a = d(t) || [];
                                if ("number" == typeof n) {
                                    var r = "number" == typeof i ? i: 1;
                                    a.splice(n, r);
                                    try {
                                        var c = JSON.stringify(a) || "";
                                        l.setItem(t, c)
                                    } catch(t) {
                                        e.showLog(t.name + ": " + t.message, "bui.storage.remove")
                                    }
                                } else if ("string" == typeof n) {
                                    var s = e.array.remove(a, n, i);
                                    try {
                                        c = JSON.stringify(s) || "";
                                        l.setItem(t, c)
                                    } catch(t) {
                                        e.showLog(t.name + ": " + t.message, "bui.storage.remove")
                                    }
                                } else l.removeItem(t);
                                return this
                            },
                            clear: function() {
                                if (o) for (var e = 0; e < localStorage.length; e++) {
                                    var t = localStorage.key(e);
                                    0 === t.indexOf(o) && l.removeItem(t)
                                } else l.clear();
                                return this
                            }
                        };
                    function u(n) {
                        var u;
                        return "number" != typeof n && "string" != typeof n || (n = {
                            size: n
                        }),
                            u = r = t.extend(!0, c, n),
                            i = +u.size,
                            o = u.prefix || "",
                            a = u.reverse ? "push": "unshift",
                            l = u.local ? localStorage: sessionStorage,
                        u.uid && e.history.setUI && e.history.setUI({
                            uid: u.uid,
                            ui: s
                        }),
                            this
                    }
                    function d(t, n, i) {
                        t = o + t;
                        var a, c = l.getItem(t) || "";
                        try {
                            a = r.deep ? c && e.unit.stringToJson(c) : c && JSON.parse(c)
                        } catch(t) {
                            a = c,
                                e.showLog(t.name + ": " + t.message, "bui.storage.get")
                        }
                        if ("number" == typeof n && i) a = a && a[n] && a[n][i] || void 0;
                        else if ("string" == typeof n) {
                            var s = e.array.index(a, n, i);
                            a = a && a[s]
                        } else a = "number" == typeof n ? a && a[n] || void 0 : a;
                        return a
                    }
                    return u(n),
                        s
                }
            } (window.bui || {},
                window.libs),
            function(e, t) {
                e.platform = function() {
                    var e = navigator.userAgent;
                    function t() {
                        return n() || i() || a()
                    }
                    function n(t) {
                        return /(Android|Linux)/i.test(e)
                    }
                    function i(t) {
                        return /(iPhone)/i.test(e)
                    }
                    function a(t) {
                        return /(iPad)/i.test(e)
                    }
                    return {
                        isAndroid: n,
                        isIphone: i,
                        isIpad: a,
                        isIos: function(t) {
                            return /(iPhone|iPad|iOS)/i.test(e)
                        },
                        isWeiXin: function(t) {
                            return /(micromessenger)/i.test(e)
                        },
                        isPC: function() {
                            return ! t()
                        },
                        isMobile: t,
                        isWeiXinMini: function(e) {
                            return "miniprogram" === window.__wxjs_environment
                        },
                        isBingotouch: function(t) {
                            return /(crosswalk)/i.test(e)
                        },
                        isMac: function() {
                            return /macintosh;.+mac os x/i.test(e)
                        },
                        isIphoneX: function(e) {
                            var t = !1,
                                n = 3 == window.devicePixelRatio && 375 == window.screen.width && 812 == window.screen.height,
                                i = 2 == window.devicePixelRatio && 414 == window.screen.width && 896 == window.screen.height,
                                a = 3 == window.devicePixelRatio && 414 == window.screen.width && 896 == window.screen.height;
                            return (n || i || a) && (t = !0),
                                t
                        },
                        isWindow: function(t) {
                            return /Windows NT/i.test(e)
                        }
                    }
                } ()
            } (window.bui || {}),
            function(e, t) {
                e.date = {},
                    e.date.format = function(e, t) {
                        if (null == e) return "";
                        var n = this.convert(e);
                        t = t || "yyyy-MM-dd";
                        var i = {
                            "M+": n.getMonth() + 1,
                            "d+": n.getDate(),
                            "h+": n.getHours(),
                            "m+": n.getMinutes(),
                            "s+": n.getSeconds(),
                            "q+": Math.floor((n.getMonth() + 3) / 3),
                            S: n.getMilliseconds()
                        };
                        for (var a in /(y+)/.test(t) && (t = t.replace(RegExp.$1, (n.getFullYear() + "").substr(4 - RegExp.$1.length))), i) new RegExp("(" + a + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? i[a] : ("00" + i[a]).substr(("" + i[a]).length)));
                        return t
                    },
                    e.date.convert = function(e, t) {
                        if (e && e.constructor == Date) return e;
                        if ("number" == typeof e && 13 === String(e).length) return new Date(e);
                        e = String(e);
                        var n = new Date,
                            i = n.getFullYear(),
                            a = n.getMonth() + 1,
                            o = n.getDate();
                        if ((e = e.replace(/[-|年|月]/gim, "/").replace(/[时|分|秒|小时|分钟]/gim, ":").replace(/^(\d{4}\/\d+?)($|\s)/, (function(e, t) {
                            return t + "/1"
                        })).replace(/[日|号]/gim, "").replace(/^(\d{1,2}\/\d{1,2}?)($|\s)/, (function(e, t) {
                            return n.getFullYear() + "/" + t
                        }))).indexOf("T") > -1 && -1 == e.indexOf("GMT")) {
                            var r = (e = e.replace("T", " ")).indexOf(".") > -1 ? e.split(".") : [e];
                            return new Date(r[0])
                        }
                        if (e.indexOf("GMT") > -1) {
                            var l = (r = e.split(" "))[3] + "/" + {
                                Jan: "1",
                                Feb: "2",
                                Mar: "3",
                                Apr: "4",
                                May: "5",
                                Jun: "6",
                                Jul: "7",
                                Aug: "8",
                                Sep: "9",
                                Oct: "10",
                                Nov: "11",
                                Dec: "12"
                            } [r[1]] + "/" + r[2] + " " + r[4];
                            return new Date(l)
                        }
                        return e.indexOf("/") < 0 && e.indexOf(":") > -1 && (e = i + "/" + a + "/" + o + " " + e),
                            4 === e.length ? e += "/1/1 00:00:00": "MM" === t || "M" === t ? e = i + "/" + e + "/1 00:00:00": "dd" !== t && "d" !== t || (e = i + "/" + a + "/" + e + " 00:00:00"),
                            new Date(e)
                    },
                    e.date.after = function(e, t, n) {
                        t = 0 === t ? 0 : t || 1;
                        var i = this.convert(e).getTime() + 1e3 * parseInt(t) * 3600 * 24;
                        return this.format(i, n || "yyyy-MM-dd")
                    },
                    e.date.afterTime = function(e, t, n) {
                        var i = 0 === t ? 0 : t || 30,
                            a = this.format(new Date, "yyyy/MM/dd") + " " + e,
                            o = new Date(a).getTime() + 1e3 * i * 60;
                        return this.format(o, n || "hh:mm")
                    },
                    e.date.count = function(t, n, i) {
                        var a, o;
                        switch (i) {
                            case "number":
                                a = t,
                                    o = n;
                                break;
                            case "hour":
                                var r = this.format(new Date, "yyyy/MM/dd"),
                                    l = r + " " + t,
                                    c = this.convert(l),
                                    s = r + " " + n,
                                    u = this.convert(s);
                                a = c.getTime(),
                                    o = u.getTime();
                                break;
                            case "date":
                            default:
                                a = this.convert(t).getTime(),
                                    o = this.convert(n).getTime()
                        }
                        var d = a - o;
                        d = Math.abs(d);
                        var f = parseInt(d / 1e3 / 3600 / 24, 10),
                            p = parseInt(d / 1e3 / 3600 % 24, 10),
                            h = parseInt(d / 1e3 / 60 % 60, 10),
                            g = parseInt(d / 1e3 % 60, 10);
                        return {
                            value: d,
                            day: f,
                            hour: p,
                            minute: h,
                            second: g,
                            tip: "".concat(f, "天 ").concat(e.unit.fixZero(p), ":").concat(e.unit.fixZero(h), ":").concat(e.unit.fixZero(g))
                        }
                    },
                    e.date.countMonth = function(e) {
                        var t = this.convert(e),
                            n = t.getMonth() + 1;
                        return t.setMonth(n),
                            t.setDate(0),
                            t.getDate()
                    },
                    e.date.toWeek = function(e, t) {
                        var n = this.convert(e),
                            i = null;
                        switch (t) {
                            case 1:
                                i = ["周日", "周一", "周二", "周三", "周四", "周五", "周六"];
                                break;
                            default:
                                i = t || ["星期天", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"]
                        }
                        return i[n.getDay()]
                    },
                    e.date.today = function(e) {
                        return e = e || "M-d",
                            this.format(new Date, e)
                    },
                    e.date.fromnow = function(e) {
                        var t = +new Date,
                            n = this.convert(e).getTime(),
                            i = "",
                            a = this.count(t, n, "date"),
                            o = t > n ? "前": "后";
                        return a.day ? i = a.day + "天" + o: a.hour ? i = a.hour + "小时" + o: a.minute ? i = a.minute + "分钟" + o: a.second && (i = a.second + "秒" + o),
                            i
                    }
            } (window.bui || {}),
            function(e, t) {
                e.animate = function(n) {
                    if ("object" === _typeof(n) && n.id) n = n || {};
                    else {
                        var i = n || ""; (n = {}).id = i
                    }
                    var a, o, r, l, c = {
                            origin: function(e) {
                                var t = String(e);
                                return a.css({
                                    "-webkit-transform-origin": t,
                                    "transform-origin": t
                                }),
                                    this
                            },
                            transition: h,
                            property: function(e, t) {
                                var n = {};
                                "object" === _typeof(e) ? (n = e, t = "") : "string" == typeof e && (n[e] = t || "");
                                return a.css(n),
                                    this
                            },
                            open3D: function(e) {
                                return e = parseFloat(e) || 100,
                                    o = !0,
                                    a.parent().css({
                                        perspective: e + "px"
                                    }),
                                    this
                            },
                            transform: function(e, t) {
                                a.css({
                                    "-webkit-transform": e,
                                    transform: e
                                }),
                                t && "none" != h && a.one("webkitTransitionEnd", (function() {
                                    t.call(c, this)
                                }));
                                return this
                            },
                            start: function(e) {
                                var t = o ? u.join("") + "translateZ(0)": u.join("");
                                try {
                                    d[m] = [],
                                        d[m].push(l.join("")),
                                        l = [],
                                        m++
                                } catch(e) {}
                                a.css({
                                    "-webkit-transform": t,
                                    transform: t
                                }),
                                    "none" != f ? a.one("webkitTransitionEnd", (function() {
                                        e && e.call(c, this)
                                    })) : e && e.call(c, this);
                                return this
                            },
                            stop: function(e) {
                                a.css({
                                    "-webkit-transform": "",
                                    transform: ""
                                }),
                                "none" != f && a.one("webkitTransitionEnd", (function() {
                                    e && e.call(c, this)
                                }));
                                return g(),
                                    this
                            },
                            clear: g,
                            left: function(e) {
                                e = e;
                                var t = Math.abs(parseFloat(e));
                                e = "string" == typeof e && e.indexOf("%") > -1 ? "-" + e: r ? -t / 100 + "rem": -t + "px";
                                var n = "translateX(" + e + ")";
                                return l.push(n),
                                    u.push(n),
                                    this
                            },
                            right: function(e) {
                                e = e;
                                var t = Math.abs(parseFloat(e));
                                e = "string" == typeof e && e.indexOf("%") > -1 ? e: r ? t / 100 + "rem": t + "px";
                                var n = "translateX(" + e + ")";
                                return l.push(n),
                                    u.push(n),
                                    this
                            },
                            up: function(e) {
                                e = e;
                                var t = Math.abs(parseFloat(e));
                                e = "string" == typeof e && e.indexOf("%") > -1 ? "-" + e: r ? -t / 100 + "rem": -t + "px";
                                var n = "translateY(" + e + ")";
                                return l.push(n),
                                    u.push(n),
                                    this
                            },
                            down: function(e) {
                                e = e;
                                var t = Math.abs(parseFloat(e));
                                e = "string" == typeof e && e.indexOf("%") > -1 ? e: r ? t / 100 + "rem": t + "px";
                                var n = "translateY(" + e + ")";
                                return l.push(n),
                                    u.push(n),
                                    this
                            },
                            scale: function(e) {
                                var t = String(e),
                                    n = "scale(" + (e = t.indexOf(",") > -1 ? t: e + ",1") + ")";
                                return l.push(n),
                                    u.push(n),
                                    this
                            },
                            scaleX: function(e) {
                                var t = "scaleX(" + (e = String(e)) + ")";
                                return l.push(t),
                                    u.push(t),
                                    this
                            },
                            scaleY: function(e) {
                                var t = "scaleY(" + (e = String(e)) + ")";
                                return l.push(t),
                                    u.push(t),
                                    this
                            },
                            rotate: function(e) {
                                var t = String(e),
                                    n = "rotate(" + (e = t.indexOf("deg") > -1 ? t: t + "deg") + ")";
                                return l.push(n),
                                    u.push(n),
                                    this
                            },
                            rotateX: function(e) {
                                var t = String(e),
                                    n = "rotateX(" + (e = t.indexOf("deg") > -1 ? t: t + "deg") + ")";
                                return l.push(n),
                                    u.push(n),
                                    this
                            },
                            rotateY: function(e) {
                                var t = String(e),
                                    n = "rotateY(" + (e = t.indexOf("deg") > -1 ? t: t + "deg") + ")";
                                return l.push(n),
                                    u.push(n),
                                    this
                            },
                            skew: function(e) {
                                var n = String(e),
                                    i = [];
                                n.indexOf(",") > -1 ? (i = n.split(","), e = "", t.each(i, (function(t, n) {
                                    t < 2 && (e += n.indexOf("deg") > -1 ? "," + n: "," + n + "deg")
                                })), e = e.substr(1)) : e = n.indexOf("deg") > -1 ? n: n + "deg,0";
                                var a = "skew(" + e + ")";
                                return l.push(a),
                                    u.push(a),
                                    this
                            },
                            skewX: function(e) {
                                var t = String(e),
                                    n = "skewX(" + (e = t.indexOf("deg") > -1 ? t: t + "deg") + ")";
                                return l.push(n),
                                    u.push(n),
                                    this
                            },
                            skewY: function(e) {
                                var t = String(e),
                                    n = "skewY(" + (e = t.indexOf("deg") > -1 ? t: t + "deg") + ")";
                                return l.push(n),
                                    u.push(n),
                                    this
                            },
                            reverse: function(e) {
                                var t, n = 0,
                                    i = d.reverse();
                                return function e(r) {
                                    var l = r[n] || [],
                                        c = r[n + 1] || [];
                                    t = o ? l.join("") + "translateZ(0)": l.join(""),
                                        t = u.join("") + t.replace(/\(.*?\)/g, "(0)"),
                                        a.css({
                                            "-webkit-transform": "",
                                            transform: ""
                                        }),
                                        n++;
                                    try {
                                        a.one("webkitTransitionEnd", (function() {
                                            if (!c || !c.length) return n = 0,
                                                void(historyCache = []);
                                            e(i)
                                        }))
                                    } catch(e) {}
                                } (i),
                                    this
                            },
                            widget: function(t) {
                                return e.widget.call({},
                                    t)
                            },
                            option: function(t, n) {
                                return e.option.call(c, t, n)
                            },
                            config: s,
                            init: p
                        },
                        s = c.config = t.extend(!0, {},
                            {
                                id: "",
                                uid: "",
                                zoom: !0,
                                open3D: !1,
                                animates: []
                            },
                            n),
                        u = [],
                        d = [],
                        f = "all 300ms ease-out";
                    function p(n) {
                        var i = t.extend(!0, s, n);
                        if (i.id) return (a = e.objId(i.id)).css({
                            "-webkit-transition": f,
                            transition: f
                        }),
                            o = i.open3D,
                            r = i.zoom,
                            l = i.animates || [],
                            s = c.config = i,
                        i.uid && e.history.setUI && e.history.setUI({
                            uid: i.uid,
                            ui: c
                        }),
                            this;
                        e.showLog("animate id不能为空", "bui.animate")
                    }
                    function h(e, t) {
                        var n = t || "ease-out";
                        return f = "number" == typeof e ? "all " + e + "ms " + n: 0 == e || "none" == e ? "none": 1 == e ? "all 300ms " + n: e || "all 300ms " + n,
                            a.css({
                                "-webkit-transition": f,
                                transition: f
                            }),
                            this
                    }
                    function g() {
                        return l = [],
                            u = [],
                            d = [],
                            m = 0,
                            this
                    }
                    p(s);
                    var m = 0;
                    return c
                }
            } (window.bui || {},
                window.libs),
            function(e, t) {
                e.mask = function(n) {
                    var i = {
                            id: "",
                            uid: "",
                            appendTo: "",
                            className: "",
                            opacity: .3,
                            background: "",
                            zIndex: 100,
                            autoTrigger: !1,
                            autoClose: !1,
                            onBeforeInit: null,
                            onInited: null,
                            callback: null
                        },
                        a = {
                            name: "mask",
                            handle: {},
                            on: function(t, n) {
                                return e.on.apply(a, arguments),
                                    this
                            },
                            off: y,
                            hide: b,
                            show: function(t) {
                                if (h) return; (d = e.objId(l)) && d.length ? (d.css("display", "block"), !p && u.css("position", "relative"), s = !0) : m(o);
                                return w.call(a, "show"),
                                    this
                            },
                            isShow: function() {
                                return s
                            },
                            remove: v,
                            destroy: function(e) {
                                v(),
                                u && u.off("click.mask");
                                y("show"),
                                    y("hide"),
                                    h = !0
                            },
                            widget: function(t) {
                                return e.widget.call({},
                                    t)
                            },
                            option: function(t, n) {
                                return e.option.call(a, t, n)
                            },
                            config: o,
                            init: g
                        },
                        o = a.config = t.extend(!0, {},
                            i, e.config.mask, n),
                        r = e.guid(),
                        l = o.id ? o.id.indexOf("#") > -1 ? o.id.substring(1) : o.id: r;
                    t("body");
                    var c, s, u = e.objId(o.appendTo),
                        d = null,
                        f = !1,
                        p = !1,
                        h = !1;
                    function g(n) {
                        h = !1;
                        var r = t.extend(!0, i, o, n);
                        return r.onBeforeInit && r.onBeforeInit.call(a, r),
                            r.appendTo = r.appendTo || "body",
                            u = e.objId(r.appendTo),
                            p = u[0] && "COMPONENT" === u[0].tagName,
                            o = a.config = r,
                            c = u.css("position"),
                        r.autoTrigger && m(r),
                            d = e.objId(r.id),
                        r.uid && e.history.setUI && e.history.setUI({
                            uid: r.uid,
                            ui: a
                        }),
                        r.onInited && r.onInited.call(a, r),
                            this
                    }
                    function m(n) {
                        if (!h) {
                            var r = t.extend(!0, {},
                                    i, o, n),
                                c = function(t) {
                                    var n = t.background ? t.background: "rgba(0,0,0," + t.opacity + ")",
                                        i = "";
                                    return i + '<div id="' + l + '" class="' + e.prefix("mask") + " " + t.className + '" style="background:' + n + ";z-index:" + t.zIndex + '"></div>'
                                } (r);
                            return (d = e.objId(l)) && d.length ? d.css("display", "block") : (u.append(c), !p && u.css("position", "relative"), d = e.objId(l)),
                                s = !0,
                                w.call(a, "show"),
                            f ||
                            function(e) {
                                d.off("click.bui").on("click.bui", (function(t) {
                                    e.callback && e.callback.call(a, t),
                                    e.autoClose && b(),
                                        t.stopPropagation()
                                })),
                                    f = !0
                            } (r),
                                this
                        }
                    }
                    function v() {
                        if (!h) return d && d.remove(),
                            d = null,
                            u.css("position", c || "static"),
                            s = !1,
                            f = !1,
                            w.call(a, "hide"),
                            this
                    }
                    function b() {
                        if (!h) return d && d.css("display", "none"),
                        !p && u.css("position", "relative"),
                            s = !1,
                            w.call(a, "hide"),
                            this
                    }
                    function y(t, n) {
                        return e.off.apply(a, arguments),
                            this
                    }
                    function w(t) {
                        a.self = this == window || this == a ? null: this,
                            e.trigger.apply(a, arguments)
                    }
                    return g(o),
                        a
                }
            } (window.bui || {},
                window.libs),
            function(e, t) {
                e.loading = function(n) {
                    var i = {
                            name: "loading",
                            handle: {},
                            on: function(t, n) {
                                return e.on.apply(i, arguments),
                                    this
                            },
                            off: k,
                            start: b,
                            stop: w,
                            isLoading: function() {
                                return f
                            },
                            pause: function() {
                                if (d) return;
                                return s && s.addClass("bui-loading-pause"),
                                    I.call(this, "pause"),
                                    this
                            },
                            text: y,
                            showRing: function() {
                                if (d) return;
                                return s = e.objId(l),
                                    s.children(".bui-loading-cell").css("display", "inline-block"),
                                    s.removeClass("bui-loading-pause"),
                                    this
                            },
                            hideRing: function() {
                                if (d) return;
                                return s = e.objId(l),
                                    s.children(".bui-loading-cell").css("display", "none"),
                                    s.addClass("bui-loading-pause"),
                                    this
                            },
                            show: function(n) {
                                var i = n || {};
                                if (d) return;
                                var o = t.extend(!0, a, i); (s = e.objId(o.id)) && s.length ? (y(o.text), s[0].style.display = "-webkit-box", m && m.show(), o.callback && r.off("click.bui", "#" + l).on("click.bui", "#" + l, o.callback), I.call(this, "show")) : b(o);
                                a.timeout && (p && clearTimeout(p), p = setTimeout((function(e) {
                                    x()
                                }), a.timeout));
                                return f = !0,
                                    this
                            },
                            hide: x,
                            destroy: function(e) {
                                e = 1 == e;
                                w(),
                                r && r.off("click.bui");
                                k("show"),
                                    k("hide"),
                                    k("start"),
                                    k("stop"),
                                    k("pause"),
                                    k("remove"),
                                m && m.destroy(e),
                                    d = !0
                            },
                            widget: function(t) {
                                var n = {
                                    mask: m || {}
                                };
                                return e.widget.call(n, t)
                            },
                            option: function(t, n) {
                                return e.option.call(i, t, n)
                            },
                            config: a,
                            init: v
                        },
                        a = i.config = t.extend(!0, {},
                            {
                                uid: "",
                                appendTo: "",
                                width: 30,
                                height: 30,
                                text: "",
                                onlyText: !1,
                                mask: !0,
                                zIndex: "",
                                autoTrigger: !1,
                                autoClose: !0,
                                timeout: 0,
                                opacity: 0,
                                display: "block",
                                template: null,
                                onBeforeInit: null,
                                onInited: null,
                                callback: null
                            },
                            e.config.loading, n);
                    t("body");
                    var o, r = null,
                        l = e.guid(),
                        c = l + "-mask",
                        s = e.objId(l),
                        u = !1,
                        d = !1,
                        f = !1,
                        p = null;
                    a.id = l;
                    var h = a.callback;
                    a.callback = function(e) {
                        a.autoClose && w(),
                        h && h.call(i, e)
                    };
                    var g = t.extend(!0, {},
                            a, {
                                id: c
                            }),
                        m = a.mask ? e.mask(g) : null;
                    function v(o) {
                        d = !1;
                        var c = t.extend(!0, {},
                            a, o);
                        return c.onBeforeInit && c.onBeforeInit.call(i, n),
                            c.appendTo = c.appendTo || "body",
                            r = t(c.appendTo),
                            a = i.config = c,
                        c.autoTrigger && s.length < 1 && b(c),
                            s = e.objId(l),
                        c.uid && e.history.setUI && e.history.setUI({
                            uid: c.uid,
                            ui: i
                        }),
                        c.onInited && c.onInited.call(i, c),
                            this
                    }
                    function b(n) {
                        if (!d) {
                            var o = t.extend(!0, {},
                                a, n);
                            if (s = e.objId(l), s.children(".bui-loading-cell"), s.hasClass("bui-loading-pause")) s.removeClass("bui-loading-pause"),
                                I.call(this, "start");
                            else {
                                s.length && s.remove();
                                var c = function(t) {
                                    var n = (t = t || {}).text,
                                        a = r.width() || document.documentElement.clientWidth,
                                        o = n && "block" == t.display ? parseInt(t.height) + 30 : parseInt(t.height),
                                        c = -a / 2,
                                        s = -o / 2,
                                        u = "block" == t.display ? e.prefix("loading-block") : e.prefix("loading-inline"),
                                        d = "";
                                    return d += '<div id="' + l + '" class="' + e.prefix("loading") + " " + u + '" style="width:' + a + "px;height:" + o + "px;line-height:" + o + "px;margin-left:" + c + "px;margin-top:" + s + "px;" + (t.zIndex ? "z-index:" + t.zIndex: "") + '" >',
                                    t.onlyText || (d += '<div class="' + e.prefix("loading-cell") + '" style="width:' + parseFloat(t.width) + "px;height:" + parseFloat(t.height) + 'px;"></div>'),
                                        d += '<div class="' + e.prefix("loading-text") + '">' + t.text + "</div>",
                                        d += "</div>",
                                        t && t.template ? t.template.call(i, t) : d
                                } (o);
                                r.append(c),
                                m && m.show(),
                                    I.call(this, "show")
                            }
                            return o.timeout && (p && clearTimeout(p), p = setTimeout((function() {
                                w()
                            }), o.timeout)),
                            u ||
                            function(e) {
                                var t = e || a;
                                r.off("click.bui", "#" + l).on("click.bui", "#" + l, (function(e) {
                                    t.callback && t.callback.call(i, e),
                                        e.stopPropagation()
                                })),
                                    u = !0
                            } (o),
                                f = !0,
                                this
                        }
                    }
                    function y(t) {
                        if (!d) return s = e.objId(l),
                            o = s.children(".bui-loading-text"),
                            void 0 === t ? o && o.text() : (o && o.html(t), this)
                    }
                    function w() {
                        if (!d) return (s = e.objId(l)) && s.remove(),
                            s = null,
                        m && m.remove(),
                            u = !1,
                            f = !1,
                            I.call(this, "remove"),
                            I.call(this, "hide"),
                            this
                    }
                    function x() {
                        if (!d) return s = e.objId(l),
                        (a.appendTo || s && s.length) && (s.css("display", "none"), m && m.hide()),
                            f = !1,
                            I.call(this, "hide"),
                            this
                    }
                    function k(t, n) {
                        return e.off.apply(i, arguments),
                            this
                    }
                    function I(t) {
                        i.self = this == window || this == i ? null: this,
                            e.trigger.apply(i, arguments)
                    }
                    return v(a),
                        i
                }
            } (window.bui || {},
                window.libs),
            function(e, t) {
                e.slide = function(n) {
                    var i, a, o, r, l, c, s, u, d, f, p, h, g, m, v, b, y, w, x, k, I, T, O, C, P, S = {
                            name: "slide",
                            handle: {},
                            on: we,
                            off: xe,
                            trigger: ke,
                            to: ie,
                            load: function(e) {
                                var n = {
                                        id: "",
                                        icon: "",
                                        title: "",
                                        url: "",
                                        name: "",
                                        index: E,
                                        menuTemplate: null,
                                        template: null,
                                        param: {},
                                        animate: !0,
                                        preload: !1,
                                        needRemove: !1,
                                        command: "after",
                                        width: 0,
                                        height: 0,
                                        loaded: null,
                                        beforeLoad: null
                                    },
                                    i = t.extend(!0, {},
                                        n, e);
                                if (!1 === (i.beforeLoad && i.beforeLoad.call(S))) return this;
                                return i.beforeLoad = null,
                                    i.menuTemplate = i.menuTemplate || (i.title ? '<li class="bui-btn">'.concat(i.title, "</li>") : ""),
                                    ge(i),
                                    this
                            },
                            back: function(e) {
                                var n = {
                                        id: "",
                                        url: "",
                                        name: "",
                                        index: E,
                                        loaded: null,
                                        beforeLoad: null
                                    },
                                    i = t.extend(!0, {},
                                        n, e);
                                return i.name = i.url || i.name,
                                    i.loaded = function() {
                                        i.beforeLoad = null,
                                            i.loaded = null,
                                            me(i)
                                    },
                                    le(i),
                                    this
                            },
                            add: ge,
                            remove: me,
                            replace: function(e) {
                                var n = {
                                    id: "",
                                    name: "",
                                    index: E,
                                    param: {},
                                    animate: !1,
                                    preload: !1,
                                    command: "html",
                                    width: 0,
                                    height: 0,
                                    loaded: null,
                                    beforeLoad: null
                                };
                                return ge(t.extend(!0, {},
                                    n, e))
                            },
                            resize: ye,
                            getPageParams: function(e) {
                                return A[e = "number" == typeof e ? e: E] || {}
                            },
                            getPages: J,
                            getData: function() {
                                return j.data
                            },
                            $active: ve,
                            currentMain: ve,
                            currentMenu: function(e) {
                                var t = void 0 === e ? E: e;
                                return o.eq(t)[0]
                            },
                            prev: le,
                            next: ce,
                            stop: oe,
                            start: function(e) {
                                ae(e)
                            },
                            lock: de,
                            index: re,
                            unlock: pe,
                            destroy: function(e) {
                                e = 1 == e;
                                oe(),
                                a && (a.off("click.bui"), e && a.remove());
                                i && (i.off(), e && i.remove());
                                xe("stop"),
                                    xe("play"),
                                    xe("first"),
                                    xe("last"),
                                    xe("to")
                            },
                            widget: function(t) {
                                var n = {
                                    loading: D
                                };
                                return e.widget.call(n, t)
                            },
                            option: function(t, n) {
                                return e.option.call(S, t, n)
                            },
                            config: j,
                            init: W
                        },
                        j = S.config = t.extend(!0, {},
                            {
                                id: "",
                                uid: "",
                                menu: ".bui-slide-head > ul",
                                children: ".bui-slide-main > ul",
                                main: ".bui-slide-main",
                                header: "header",
                                footer: "footer",
                                item: "li",
                                prev: ".bui-slide-prev",
                                next: ".bui-slide-next",
                                alignClassName: "",
                                alignPage: "center",
                                stopHandle: "",
                                stopPropagation: !0,
                                width: 0,
                                height: 0,
                                data: null,
                                zoom: !0,
                                transition: 200,
                                interval: 5e3,
                                relative: !1,
                                swipe: !0,
                                animate: !0,
                                delay: !1,
                                bufferEffect: !0,
                                visibleNum: 1,
                                scrollNum: 1,
                                distance: 40,
                                direction: "x",
                                autoplay: !1,
                                loop: !1,
                                cross: !1,
                                autoheight: !1,
                                autoinit: !0,
                                scroll: !1,
                                index: 0,
                                fullscreen: !1,
                                autopage: !1,
                                autoload: !1,
                                needLoading: !1,
                                async: !0,
                                template: null,
                                callback: null,
                                onBeforeTouchstart: null,
                                onBeforeTouchmove: null,
                                onBeforeTouchend: null,
                                onBeforeTo: null,
                                onBeforeInit: null,
                                onInited: null,
                                onStart: null,
                                onMove: null,
                                onEnd: null
                            },
                            e.config.slide, n),
                        L = {},
                        E = 0,
                        N = !1,
                        B = {},
                        D = null,
                        R = [],
                        A = [],
                        M = !1,
                        F = {
                            x: {},
                            y: {}
                        };
                    /hp-tablet/gi.test(navigator.appVersion);
                    var U, H, _ = "",
                        z = 0,
                        $ = 0,
                        V = !1,
                        q = !1;
                    L = {
                        x1: 0,
                        x2: 0,
                        y1: 0,
                        y2: 0,
                        direction: ""
                    };
                    try {
                        j.autoinit && W(j)
                    } catch(t) {
                        e.showLog(t)
                    }
                    function W(n) {
                        var s = t.extend(!1, j, n);
                        if (!1 === (s.onBeforeInit && s.onBeforeInit.call(S, s))) return this;
                        if (s.id) {
                            if (i = e.obj(s.id), S.$el = i, s.relative) {
                                var u = i.parent().width();
                                s.width = u
                            }
                            if (j = S.config = s, _ = s.direction, "function" == typeof s.template) i.html(s.template.call(S, s.data || []) || "");
                            else if (s.data && !s.template) {
                                if (i.find(s.main).length <= 0) {
                                    var d = function(e) {
                                        return '<div class="'.concat(e.main.substr(1), '">\n              <ul class="bui-slide-main-ul">\n              </ul>\n            </div>')
                                    } (s);
                                    i.html(d)
                                }
                                var f = i.find(s.children),
                                    p = be.call(S, s.data);
                                f.html(p)
                            }
                            if (s.needLoading && (D = bui.loading({
                                appendTo: i
                            })), a = 0 == s.menu.indexOf("#") ? e.obj(s.menu) : i.find(s.menu).eq(0), o = a.children(), r = i.find(s.children).eq(0), l = r.parent(), c = r.children(), C = c.length, s.loop && c.length) {
                                var h = c.eq(c.length - 1).clone(!0),
                                    g = c.eq(0).clone(!0);
                                r.prepend(h).append(g);
                                var m = (c = r.children()).length - 1;
                                xe("afterto"),
                                    we("afterto", (function(e) {
                                        0 == e && ie(m - 1, "none"),
                                        e == m && ie(1, "none")
                                    })),
                                    ie(1, "none"),
                                !i.hasClass(".bui-slide-loop") && i.addClass("bui-slide-loop")
                            }
                            if (s.cross && c.length) {
                                var v = function(e) {
                                    var t = c.eq(e);
                                    t.removeClass("bui-cross-prev").removeClass("bui-cross-next"),
                                        t.prev().removeClass("bui-cross-next").addClass("bui-cross-prev"),
                                        t.next().removeClass("bui-cross-prev").addClass("bui-cross-next")
                                }; ! i.hasClass(".bui-slide-cross") && i.addClass("bui-slide-cross"),
                                    xe("to", v),
                                    we("to", v),
                                    s.loop ? ie(1, "none") : ie(0, "none")
                            }
                            return K(s),
                                Y(s),
                            (O = s.autoplay) && ae(),
                            N || (!
                                function() {
                                    pe(),
                                    j.swipe || de();
                                    var e = function(e) {
                                        var n = t(this).hasClass("active"),
                                            i = t(this).index(),
                                            a = t(this).attr("disabled"),
                                            o = t(this).hasClass("disabled") || "" == a || "true" == a || "disabled" == a;
                                        if (e.currentIndex = i, e.prevIndex = E, !1 === (j.onBeforeTo && j.onBeforeTo.call(S, e))) return ! 1;
                                        ke.call(S, "beforeto", e),
                                        n || o || (j.animate ? ie(i) : ie(i, "none"), O && ae()),
                                            e.stopPropagation()
                                    };
                                    0 == j.menu.indexOf("#") ? a.off("click.bui", "li").on("click.bui", "li", e) : i.off("click.bui", j.menu + " li").on("click.bui", j.menu + " li", e);
                                    i.off("click.bui", j.prev).on("click.bui", j.prev, le),
                                        i.off("click.bui", j.next).on("click.bui", j.next, ce);
                                    var n = j.children + " " + j.item;
                                    j.data && i.off("click.bui", n).on("click.bui", n, (function(e) {
                                        if (q) return ! 1;
                                        var n = t(e.currentTarget),
                                            i = n.attr("href"),
                                            a = "true" == n.attr("data-reload"),
                                            o = "true" == n.attr("data-iframe"),
                                            r = "true" == n.attr("data-page"),
                                            l = "true" == n.attr("data-close"),
                                            c = "true" == n.attr("data-synchistory");
                                        i && r ? bui.page({
                                            url: i,
                                            iframe: o,
                                            close: l,
                                            syncHistory: c
                                        }) : i && bui.load({
                                            url: i,
                                            reload: a,
                                            iframe: o
                                        }),
                                            ke.call(S, "click", e);
                                        var s = j.data[re()] || {};
                                        s.callback && s.callback.call(S, e),
                                        j.callback && j.callback.call(S, e, S),
                                        j.stopPropagation && e.stopPropagation()
                                    })),
                                        N = !0
                                } (), M = !0),
                                E = r.children(".active").length ? r.children(".active").index() : E || s.index,
                                parseInt(s.index) > 0 ? ie(s.index, "none") : ie(E, "none"),
                            s.uid && e.history.setUI && e.history.setUI({
                                uid: s.uid,
                                ui: S
                            }),
                            s.onInited && s.onInited.call(S, s),
                                this
                        }
                        e.showLog("slide id不能为空", "bui.slide.init")
                    }
                    function K(e) {
                        k = document.documentElement.clientWidth,
                            I = document.documentElement.clientHeight,
                            e.height = String(e.height).indexOf("%") > -1 ? parseFloat(e.height) / 100 * I: parseFloat(e.height),
                            e.width = String(e.width).indexOf("%") > -1 ? parseFloat(e.width) / 100 * k: parseFloat(e.width),
                            c = r.children();
                        var t = i.parents(".bui-page");
                        i.parents("main");
                        var n = i[0] && i[0].offsetTop || 0,
                            o = t.children(e.header);
                        o[0] && o[0].offsetHeight;
                        var l = t.children(e.footer),
                            u = l[0] && l[0].offsetHeight || 0;
                        y = I - (u || 0) - n,
                            y = i.parent("main").length ? i.parent("main").height() : y,
                            w = 0 == e.height ? y: e.height;
                        var m = "static" == a.parent().css("position") ? a.css("position") : a.parent().css("position");
                        x = i.find(e.menu).length ? "absolute" == m || "fixed" == m ? w: w - (a[0] && a[0].offsetHeight || 0) : w,
                            h = e.fullscreen ? I: 0 == e.height ? x: e.height,
                            p = e.fullscreen ? k: e.width || k,
                            s = c.length,
                            g = "x" == _ ? p / j.visibleNum: p,
                            b = "y" == _ ? h / j.visibleNum: h,
                            T = "y" == j.direction ? b * j.scrollNum: g * j.scrollNum,
                            d = p * s / j.visibleNum,
                            f = h * s / j.visibleNum
                    }
                    function Y(t) {
                        c = r.children(),
                            C = t.loop ? c.length - 2 : c.length,
                            F = {
                                x: {
                                    swipeDir: "swipeleft",
                                    swipeDir2: "swiperight",
                                    width: T
                                },
                                y: {
                                    swipeDir: "swipeup",
                                    swipeDir2: "swipedown",
                                    width: T
                                }
                            },
                            l[(P = {
                                x: {
                                    parentInitKey: "width",
                                    parentInitValue: d,
                                    boxCss: "display:-webkit-box;display:box;-webkit-box-align: start;-webkit-box-pack: center;width:100%;",
                                    boxItemCSS: "-webkit-box-flex:1;box-flex:1;width:" + g + "px;height:" + b + "px;"
                                },
                                y: {
                                    parentInitKey: "height",
                                    parentInitValue: f,
                                    box: "display:-webkit-box;display:box;-webkit-box-align: start;-webkit-box-pack: center;width:100%;-webkit-box-orient: vertical;box-orient: vertical;",
                                    boxItemCSS: "-webkit-box-flex:1;box-flex:1;width:" + g + "px;height:" + b + "px;"
                                }
                            })[_].parentInitKey](P[_].parentInitValue);
                        var n, a = c.length;
                        for (n = 0; n < a; n++) {
                            var s = c[n].getAttribute("data-scroll"),
                                u = null == s ? j.scroll: "false" != s;
                            P[_].boxItemCSS = P[_].boxItemCSS + (u ? "overflow:auto;": "overflow:hidden;"),
                                c[n].style.cssText = P[_].boxItemCSS
                        }
                        try {
                            r[0] && (r[0].style.cssText = P[_].boxCss)
                        } catch(e) {
                            console.log("请检查下children参数是否正确.", "bui.slide id:" + j.id)
                        }
                        var h = "y" == _ && j.visibleNum > 1 ? x / j.visibleNum: x,
                            m = j.zoom ? w / 100 + "rem": w + "px",
                            v = j.zoom ? h / 100 + "rem": h + "px";
                        if (j.zoom, j.fullscreen ? (e.$("main").css({
                            position: "static"
                        }), i.addClass("bui-slide-fullscreen").css({
                            position: "absolute",
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            "z-index": 10,
                            overflow: "hidden",
                            width: p,
                            height: I
                        }), c.addClass(j.alignClassName || "bui-box-center").css("height", I)) : (i.css({
                            position: "relative",
                            overflow: "hidden",
                            width: p,
                            height: m
                        }), c.addClass(j.alignClassName).height(v)), j.autoheight && i.addClass("bui-slide-autoheight"), j.autopage) {
                            var y = function(e, t) {
                                var n, i = "",
                                    a = (t = t || 1, e);
                                for (i += '<div class="bui-slide-head bui-align-'.concat(j.alignPage, '">'), i += "<ul >", n = 1; n < Number(a) + 1; n++) i += "<li " + (n == t ? 'class="active"': "") + ">" + n + "</li>";
                                return i += "</ul >",
                                    i += "</div >"
                            } (J(), r.find(".active").index() + 1);
                            i.children(".bui-slide-head").remove(),
                                i.append(y),
                                o = i.find(j.menu).eq(0).children()
                        }
                    }
                    function J() {
                        var e = C,
                            t = parseInt(e / j.visibleNum),
                            n = parseInt(e / j.scrollNum),
                            i = 1 == j.visibleNum ? t: t + 1,
                            a = 1 == j.scrollNum ? n: n + 1,
                            o = 1 == j.scrollNum || j.scrollNum == e ? i: a;
                        return o = j.loop ? o + 2 : o
                    }
                    function X(t) {
                        V = !0;
                        var n = t.touches ? t.touches[0] : t;
                        if (L.x1 = n.clientX, L.y1 = n.clientY, L.direction = "", !1 === (j.onBeforeTouchstart && j.onBeforeTouchstart.call(S, t, L))) return ! 1;
                        j.stopHandle && e.unit.checkTargetInclude(t.target, j.stopHandle) ? V = !1 : (U = -E * T, H = -E * T, t.touches && t.touches.length > 1 || t.scale && 1 !== t.scale ? ee("x" == _ ? U: H) : (O && (oe(), O = !0), ke.call(S, "touchstart", t, L), j.onStart && j.onStart.call(S, t, L, S), V = !0, e.platform.isPC() && t.stopPropagation(), e.platform.isPC() && "IMG" === t.target.tagName && t.preventDefault()))
                    }
                    function Z(n) {
                        if (V) {
                            var i = n.touches ? n.touches[0] : n;
                            if (n.touches && n.touches.length > 1 || n.scale && 1 !== n.scale) ee("x" == _ ? U: H);
                            else {
                                if (q = !0, L.x2 = i.clientX, L.y2 = i.clientY, L.direction || (L.direction = e.swipeDirection(L.x1, L.x2, L.y1, L.y2)), !1 === (j.onBeforeTouchmove && j.onBeforeTouchmove.call(S, n, L))) return ! 1;
                                "swipeleft" !== L.direction && "swiperight" !== L.direction || (n.preventDefault(), n.stopPropagation()),
                                    ke.call(S, "touchmove", n, L);
                                try {
                                    if (!e.platform.isPC() && "y" == _ && j.scroll) {
                                        var a = t(n.target).closest(".active"),
                                            o = a[0].scrollTop || 0,
                                            r = a[0].scrollHeight || 0,
                                            l = a[0].offsetHeight || 0;
                                        if ("swipedown" === L.direction && o > 1) return void(q = !1);
                                        if ("swipeup" === L.direction && r - o - l >= 2) return void(q = !1)
                                    }
                                } catch(n) {}
                                m = L.x2 - L.x1,
                                    v = L.y2 - L.y1,
                                    F.x.move = U + m,
                                    F.x.absDelta = Math.abs(m),
                                    F.y.move = H + v,
                                    F.y.absDelta = Math.abs(v);
                                var c = J();
                                L.direction !== F[_].swipeDir && L.direction !== F[_].swipeDir2 || (j.delay && F[_].absDelta > j.distance && ee(F[_].move, "none"), j.delay || ((j.bufferEffect || 0 == E && c > 1 && ("swipeleft" == L.direction || "swipeup" == L.direction) || E == c - 1 && c > 1 && ("swiperight" == L.direction || "swipedown" == L.direction) || E > 0 && E < c - 1 && c > 1) && ee(F[_].move, "none"), n.preventDefault()), j.onMove && j.onMove.call(S, n, L, S))
                            }
                        }
                    }
                    function G(t) {
                        switch (V = !1, ke.call(S, "touchend", t, L), L.direction) {
                            case "swiperight":
                            case "swipedown":
                                t.currentIndex = E - 1;
                                break;
                            case "swipeleft":
                            case "swipeup":
                                t.currentIndex = E + 1
                        }
                        if (t.prevIndex = E, !1 === (j.onBeforeTouchend && j.onBeforeTouchend.call(S, t, L))) return ! 1;
                        if (q) {
                            if (m = L.x2 - L.x1, v = L.y2 - L.y1, Math.abs(m) < 5 && (q = !1), F.x.delta = U, F.x.absDelta = Math.abs(m), F.y.delta = H, F.y.absDelta = Math.abs(v), "x" != j.direction || "swipeleft" != L.direction && "swiperight" != L.direction) {
                                if ("y" == j.direction && ("swipeup" == L.direction || "swipedown" == L.direction)) n = j.onBeforeTo && j.onBeforeTo.call(S, t)
                            } else var n = j.onBeforeTo && j.onBeforeTo.call(S, t);
                            if (!1 === n) return ee(F[_].delta),
                            "swipeleft" != L.direction && "swiperight" != L.direction || t.stopPropagation(),
                                z += L.y2 - L.y1,
                                $ += L.x2 - L.x1,
                                L.lastX = $,
                                L.lastY = z,
                                L = {
                                    x1: 0,
                                    x2: 0,
                                    y1: 0,
                                    y2: 0,
                                    direction: ""
                                },
                                V = !1,
                            !e.platform.isPC() && (q = !1),
                                ne(),
                                !1;
                            F[_].absDelta > j.distance ? (Q.call(this, t, L, F), j.onEnd && j.onEnd.call(S, t, L, S)) : F[_].absDelta < j.distance && ee(F[_].delta),
                            O && ae(),
                            "swipeleft" != L.direction && "swiperight" != L.direction || t.stopPropagation(),
                                z += L.y2 - L.y1,
                                $ += L.x2 - L.x1,
                                L.lastX = $,
                                L.lastY = z,
                                L = {
                                    x1: 0,
                                    x2: 0,
                                    y1: 0,
                                    y2: 0,
                                    direction: ""
                                },
                                V = !1,
                            !e.platform.isPC() && (q = !1),
                                ne()
                        }
                    }
                    function Q(e, t, i) {
                        var a;
                        if (se(), E = r.children(".active").index(), t.direction == i[_].swipeDir) {
                            var o = c.length,
                                l = o - j.visibleNum,
                                s = o % j.scrollNum != 0 ? l + 1 : l / j.scrollNum + 1;
                            if (E >= s - 1) a = E,
                                i[_].delta = -a * i[_].width,
                                ee(i[_].delta),
                                E = a,
                                ue(a),
                                ke.call(S, "last", a);
                            else if (a = E + 1, i[_].delta = -a * i[_].width, ee(i[_].delta), E = a, ue(a), n.autoload) he(E);
                            else {
                                if (c.eq(E), n.loop && E > C) return;
                                ke.call(S, "to", a)
                            }
                            ke.call(S, "next", a)
                        } else if (t.direction == i[_].swipeDir2) if (E > 0) {
                            if (a = E - 1, i[_].delta = -a * i[_].width, ee(i[_].delta), E = a, ue(a), n.autoload) he(E);
                            else {
                                if (c.eq(E), n.loop && 0 == E) return;
                                ke.call(S, "to", a)
                            }
                            ke.call(S, "prev", a)
                        } else a = E,
                            i[_].delta = -a * i[_].width,
                            ee(i[_].delta),
                            E = a,
                            ue(a),
                            ke.call(S, "first", a)
                    }
                    function ee(e, t) {
                        var n = j.transition;
                        t = t || "all " + n + "ms",
                            e = e || 0;
                        switch (_) {
                            case "x":
                                te(e + "px", 0, t, l);
                                break;
                            case "y":
                                te(0, e + "px", t, l)
                        }
                        return this
                    }
                    function te(e, t, n, a) {
                        var o = t || 0;
                        "y" == _ && j.zoom && String(t).indexOf("%") <= -1 && (o = parseInt(t) / 100 + "rem");
                        a = a || i;
                        var r = e = e || 0,
                            l = String(e).indexOf("%") > -1 ? String(e) : r,
                            c = String(t).indexOf("%") > -1 ? String(t) : o;
                        n = "number" == typeof n ? "all " + n + "ms": n || "all 300ms";
                        try {
                            a.css({
                                "-webkit-transition": n,
                                transition: n,
                                "-webkit-transform": "translate(" + l + "," + c + ")",
                                transform: "translate(" + l + "," + c + ")"
                            })
                        } catch(e) {
                            console.log(e.message)
                        }
                    }
                    function ne(e) {
                        l.one("webkitTransitionEnd", (function() {
                            l.css({
                                "-webkit-transition": "none",
                                transition: "none"
                            }),
                                q = !1,
                            e && e.call(S, E),
                                ke.call(S, "afterto", E)
                        }))
                    }
                    function ie(i, a, r) {
                        var l, s = {
                                index: 0,
                                name: "",
                                param: null,
                                transition: "",
                                callback: "function" == typeof a ? a: null,
                                needTrigger: 0 != r
                            },
                            u = s;
                        if ("object" === _typeof(i)) {
                            u = t.extend(!0, s, i);
                            i = u.name || u.index || 0,
                                l = a || u.transition,
                                r = u.needTrigger,
                            "function" == typeof a || u.callback
                        } else i = void 0 !== i ? i: u.name,
                            l = "string" == typeof a ? a: u.transition,
                            r = 0 != r,
                            "object" === _typeof(a) ? u.param = a: u.transition = a || u.transition,
                            u.name = i,
                            u.needTrigger = r,
                            u.callback = "function" == typeof a ? a: s.callback;
                        se();
                        var d = 0;
                        r = 0 != r;
                        if ("string" == typeof i && i.indexOf(".html") > -1) {
                            var f = [];
                            o.each((function(e, n) {
                                var a = t(n).attr("href") || void 0;
                                f[e] = a,
                                a == i && (d = e)
                            }))
                        } else d = parseInt(i);
                        var p = {
                                x: {
                                    transform: -d * parseFloat(T)
                                },
                                y: {
                                    transform: -d * parseFloat(T)
                                }
                            },
                            h = J();
                        if (e.$(".bui-slide-video video").each((function(e, t) {
                            this.pause()
                        })), d >= h || d < 0) return ! 1;
                        if (ee(p[_].transform, l), E = d, ue(d), O && ae(), n.autoload) he(E);
                        else {
                            if (c.eq(E), !r) return;
                            ke.call(S, "to", d, u.param)
                        }
                        return ne(u.callback),
                            this
                    }
                    function ae(e) {
                        e = e || j.interval;
                        oe(),
                            O = !0;
                        var t = E;
                        u = setInterval((function() {
                            var e = J();
                            t >= 0 && t < e - 1 ? t += 1 : t = 0,
                                ie(t)
                        }), e),
                            ke.call(S, "play")
                    }
                    function oe(e) {
                        if (u) try {
                            window.clearInterval(u),
                                O = !1,
                                ke.call(S, "stop")
                        } catch(e) {}
                        return this
                    }
                    function re() {
                        return j.loop ? E - 1 : E
                    }
                    function le(e) {
                        var n = t.extend(!0, {
                                beforeLoad: null,
                                loaded: null
                            },
                            e);
                        if (!1 === (n.beforeLoad && n.beforeLoad.call(S))) return this;
                        var i = E - 1;
                        return j.loop && i < 1 && (i = parseInt(C / j.scrollNum)),
                            n.loaded ? ie(i, n.loaded) : ie(i),
                            ke.call(S, "prev", i),
                            this
                    }
                    function ce(e) {
                        var n = t.extend(!0, {
                                beforeLoad: null,
                                loaded: null
                            },
                            e);
                        if (!1 === (n.beforeLoad && n.beforeLoad.call(S))) return this;
                        var i = E + 1;
                        return j.loop && i > parseInt(C / j.scrollNum) + 1 && (i = 1),
                            n.loaded ? ie(i, n.loaded) : ie(i),
                            ke.call(S, "next", i),
                            this
                    }
                    function se(t) {
                        a = 0 == (t = j).menu.indexOf("#") ? e.obj(t.menu) : i.find(t.menu).eq(0),
                            o = a.children(),
                            r = i.find(t.children).eq(0),
                            l = r.parent(),
                            c = r.children()
                    }
                    function ue(e) {
                        e = e || 0,
                            c.removeClass("active"),
                            c.eq(e).addClass("active"),
                            o.removeClass("active"),
                            o.eq(e).addClass("active")
                    }
                    function de() {
                        var e = fe();
                        return i.off(e.touchstart, j.children, X).off(e.touchmove, j.children, Z).off(e.touchend, j.children, G).off(e.touchcancel),
                            ke.call(S, "lock"),
                            this
                    }
                    function fe() {
                        var t = {
                            touchstart: "touchstart",
                            touchmove: "touchmove",
                            touchend: "touchend",
                            touchcancel: "touchcancel"
                        };
                        return e.platform.isPC() && (t = {
                            touchstart: "mousedown",
                            touchmove: "mousemove",
                            touchend: "mouseup",
                            touchcancel: "mouseleave"
                        }),
                            t
                    }
                    function pe(e) {
                        var t = fe();
                        return i.on(t.touchstart, j.children, X).on(t.touchmove, j.children, Z).on(t.touchend, j.children, G).on(t.touchcancel, (function() {
                            V = !1,
                                q = !1,
                                ie(j.loop ? re() + 1 : re())
                        })),
                            ke.call(S, "unlock"),
                            this
                    }
                    function he(t) {
                        var n = c.eq(t),
                            i = o.eq(t).attr("href") || "";
                        if (e.array.compare(R, t)) return ke.call(S, "to", t, "200"),
                            !1;
                        j.autoload && (i ? (i = e.unit.resolvePath(i)) in B ? (n.html(B[i]), R.push(t), !M && ke.call(S, "load", t, status), !M && ke.call(S, "to", t, status), M = !1) : (B[i] = "", D && D.show(), loader && loader.import(i, (function(e) {
                            B[i] = e,
                                n.html(e),
                                R.push(t),
                                ke.call(S, "load", t, status),
                            !M && ke.call(S, "to", t, status),
                                M = !1,
                            D && D.hide()
                        }), (function(e, n) {
                            ke.call(S, "loadfail", t, n),
                            D && D.hide()
                        }))) : (!M && ke.call(S, "to", t), M = !1))
                    }
                    function ge(n) {
                        var i = t.extend(!0, {},
                            {
                                id: "",
                                icon: "",
                                title: "",
                                name: "",
                                menuTemplate: null,
                                template: null,
                                index: -1,
                                param: {},
                                animate: !0,
                                preload: !1,
                                needRemove: !1,
                                command: "after",
                                width: 0,
                                height: 0,
                                loaded: null,
                                beforeLoad: null
                            },
                            n);
                        c = r.children();
                        var a = i.url || i.name || "",
                            l = i.index > -1 ? i.index: "before" == i.command ? 0 : c.length - 1,
                            s = a && a.indexOf(".html") || 0,
                            u = s > -1 ? a.substr(0, s) : a;
                        i.name = u,
                            i.index = l;
                        var d = function(n) {
                            var i = {
                                    id: "",
                                    name: "",
                                    index: 0,
                                    menuTemplate: null,
                                    template: null,
                                    command: "after",
                                    width: 0,
                                    height: 0
                                },
                                a = t.extend(!0, i, n),
                                r = c.eq(a.index),
                                l = o.eq(a.index),
                                s = a.id && (a.id.indexOf("#") > -1 || a.id.indexOf(".") > -1) ? a.id.substr(1) : a.id || e.guid(),
                                u = '<component id="'.concat(s, '" class="delay-item" name="').concat(a.name, '" delay="true"></component>'),
                                d = '<li style="-webkit-box-flex:1;box-flex:1;width:'.concat(a.width || g, "px;height:").concat(a.height || b, 'px;">\n            ').concat(a.name ? u: a.template ? a.template.call(S) : "", "\n            </li>"),
                                f = a.command,
                                p = "function" == typeof a.menuTemplate ? a.menuTemplate.call(S) : a.menuTemplate || "";
                            "html" === f ? (r.after(d), r.remove(), p && l.after(p), p && l.remove()) : (r[f](d), p && l[f](p));
                            return {
                                id: s
                            }
                        } (i);
                        ye();
                        var f = 0;
                        switch (i.command) {
                            case "html":
                            case "append":
                            case "prepend":
                                f = l;
                                break;
                            case "before":
                                f = l - 1 < 0 ? 0 : l - 1;
                                break;
                            default:
                                f = l + 1
                        }
                        if (ke.call(S, "add", {
                            index: f,
                            prevIndex: E
                        }), a) {
                            if (i.id = d.id || "", loader.delay(i), i.preload) return this;
                            i.animate ? ie(f) : ie(f, "none")
                        }
                        return this
                    }
                    function me(e) {
                        var n = t.extend(!0, {
                                index: -1,
                                beforeLoad: null,
                                loaded: null
                            },
                            e);
                        if (!1 === (n.beforeLoad && n.beforeLoad.call(S))) return this;
                        var i = parseInt(n.index),
                            a = i - 1;
                        if (i < 0) return this;
                        var r = c.eq(i),
                            l = o.eq(i);
                        return r.remove(),
                            l.remove(),
                            ye(),
                            E === i ? a > -1 && ie(a, "none") : ie(E > i ? E - 1 : E, "none"),
                        n.loaded && n.loaded.call(this, n),
                            ke.call(S, "remove", {
                                index: E,
                                prevIndex: i
                            }),
                            this
                    }
                    function ve(e) {
                        var t = void 0 === e ? E: e;
                        return c.eq(t)[0]
                    }
                    function be(e) {
                        var t = "";
                        return (e = e || []).length && e.forEach((function(e, n) {
                            var i = e.title ? '<div class="bui-slide-title">'.concat(e.title, "</div>") : "",
                                a = e.background ? '<div class="bui-slide-img" style="background-image:url('.concat(e.background, ')"></div>') : '<div class="bui-slide-img"><img src="'.concat(e.image, '" alt="').concat(e.title || "", '"/></div>'),
                                o = "";
                            if ("video" == e.type || e.video) {
                                var r = e.video || {};
                                o = '<div class="bui-slide-video">\n                        <video class="bui-video" src="'.concat(e.src || r.src, '" width="').concat(e.width || r.width || "100%", '" height="').concat(e.height || r.height || "100%", '" poster="').concat(e.poster || r.poster || "", '" ').concat(e.preload || r.preload ? "preload": "", " ").concat(e.muted || r.muted ? "muted": "", " ").concat(e.autoplay || r.autoplay ? "autoplay": "", " ").concat(e.controls || r.controls ? "controls": "", " ").concat(e.loop || r.loop ? "loop": "", " ").concat(e.fullscreen || r.fullscreen ? "fullscreen": "", "></video>\n                        </div>")
                            }
                            t += '<li data-id="'.concat(e.id || "", '" href="').concat(e.url || "", '" data-reload="').concat(e.reload || !1, '" data-iframe="').concat(e.iframe || !1, '" data-page="').concat(e.page || !1, '" data-close="').concat(e.page || !0, '" data-synchistory="').concat(e.synchistory || !1, '">\n                  ').concat(o || a, "\n                  ").concat(i, "\n                  </li>")
                        })),
                            t
                    }
                    function ye(e) {
                        var i = t.extend(!0, {},
                            n, e);
                        return K(i),
                            Y(i),
                            ie(E, "none"),
                            this
                    }
                    function we(t, n) {
                        return e.on.apply(S, arguments),
                            this
                    }
                    function xe(t, n) {
                        return e.off.apply(S, arguments),
                            this
                    }
                    function ke(t) {
                        S.self = this == window || this == S ? null: this,
                            e.trigger.apply(S, arguments)
                    }
                    return S
                }
            } (window.bui || {},
                window.libs),
            function(e, t) {
                var n, i;
                e.swipe = (n = null, i = null,
                    function(a) {
                        var o, r, l, c, s, u, d, f, p, h, g, m, v = {
                                name: "swipe",
                                handle: {},
                                active: function() {
                                    return n
                                },
                                isActive: function() {
                                    return A
                                },
                                on: function(t, n) {
                                    return e.on.apply(v, arguments),
                                        this
                                },
                                off: fe,
                                close: function() {
                                    if (!R) return re(),
                                        this
                                },
                                open: function(e) {
                                    if (!R) {
                                        var t = e || {};
                                        t.transition = t.transition || b.transition,
                                            t.index = t.index || 0;
                                        var n, i = t.target;
                                        switch (H = i, i) {
                                            case "swiperight":
                                                t.target = p.eq(t.index),
                                                    n = t.target.parent().index(),
                                                    t.handle = x ? o.children().eq(n).children(b.handle) : r,
                                                    D = t.handle,
                                                    t.target,
                                                    c = p.attr("data-moving") || m,
                                                I && Q(t);
                                                break;
                                            case "swipeleft":
                                                t.target = f.eq(t.index),
                                                    n = t.target.parent().index(),
                                                    t.handle = x ? o.children().eq(n).children(b.handle) : r,
                                                    D = t.handle,
                                                    t.target,
                                                    c = f.attr("data-moving") || m,
                                                T && G(t);
                                                break;
                                            case "swipedown":
                                                t.target = g.eq(t.index),
                                                    n = t.target.parent().index(),
                                                    t.handle = x ? o.children().eq(n).children(b.handle) : r,
                                                    D = t.handle,
                                                    t.target,
                                                    c = g.attr("data-moving") || m,
                                                C && te(t);
                                                break;
                                            case "swipeup":
                                                t.target = h.eq(t.index),
                                                    n = t.target.parent().index(),
                                                    t.handle = x ? o.children().eq(n).children(b.handle) : r,
                                                    D = t.handle,
                                                    t.target,
                                                    c = h.attr("data-moving") || m,
                                                O && ee(t);
                                                break;
                                            default:
                                                t.target = p.eq(t.index),
                                                    n = t.target.parent().index(),
                                                    t.handle = x ? o.children().eq(n).children(b.handle) : r,
                                                    D = t.handle,
                                                    t.target,
                                                I && Q(t)
                                        }
                                        return pe.call(v, "open", i),
                                            this
                                    }
                                },
                                destroy: function(e) {
                                    e = 1 == e,
                                    o && (o.off(), e && o.remove()),
                                        fe("open"),
                                        fe("close"),
                                        R = !0
                                },
                                lock: ue,
                                unlock: de,
                                init: $
                            },
                            b = v.config = t.extend(!0, {},
                                {
                                    id: "",
                                    uid: "",
                                    handle: ".handle",
                                    swiperight: ".swiperight",
                                    swipeleft: ".swipeleft",
                                    swipeup: ".swipeup",
                                    swipedown: ".swipedown",
                                    direction: "x",
                                    stopHandle: "",
                                    relative: !1,
                                    swipe: !0,
                                    hasChild: !1,
                                    handleMove: !0,
                                    targetMove: !0,
                                    alwaysTrigger: !1,
                                    stopPropagation: !1,
                                    width: 0,
                                    height: 0,
                                    movingDistance: 280,
                                    initDistance: 0,
                                    zoom: !1,
                                    autoClose: !0,
                                    distance: 40,
                                    autoinit: !0,
                                    onBeforeTouchstart: null,
                                    onBeforeTouchmove: null,
                                    onBeforeTouchend: null,
                                    onBeforeInit: null,
                                    onInited: null,
                                    transition: 300
                                },
                                e.config.swipe, a),
                            y = {},
                            w = b.direction,
                            x = b.hasChild,
                            k = !1,
                            I = !1,
                            T = !1,
                            O = !1,
                            C = !1,
                            P = !1,
                            S = !1,
                            j = !1,
                            L = !1,
                            E = b.handleMove,
                            N = b.targetMove,
                            B = !1,
                            D = null,
                            R = !1,
                            A = !1;
                        /hp-tablet/gi.test(navigator.appVersion);
                        var M = !1,
                            F = !1,
                            U = !1,
                            H = (y = {
                                x1: 0,
                                x2: 0,
                                y1: 0,
                                y2: 0,
                                direction: "",
                                deltax: 0,
                                movingleft: 0,
                                movingright: 0,
                                movingup: 0,
                                movingdown: 0,
                                scrollObj: null
                            },
                                ""),
                            _ = b.initDistance,
                            z = document.documentElement;
                        function $(i) {
                            var a = t.extend(!0, b, i);
                            if (a.onBeforeInit && a.onBeforeInit.call(v, a), R = !1, a.id) return o = e.obj(a.id),
                                s = a.width > 0 ? a.width: a.relative ? o.width() : z.clientWidth,
                                u = a.height > 0 ? a.height: z.clientHeight,
                                r = o.children(a.handle),
                                l = x ? o.children() : o,
                                f = l.children(a.swipeleft),
                                p = l.children(a.swiperight),
                                h = l.children(a.swipeup),
                                g = l.children(a.swipedown),
                                m = parseFloat(a.movingDistance),
                                c = m,
                                W(),
                            k || (V(), k = !0),
                            n && n.close(),
                            B || (ue(),
                                function(e) {
                                    e.swipe && de(),
                                        B = !0
                                } (a)),
                            a.uid && e.history.setUI && e.history.setUI({
                                uid: a.uid,
                                ui: v
                            }),
                            a.onInited && a.onInited.call(v, a),
                                this;
                            e.showLog("swipe id不能为空", "bui.swipe.init")
                        }
                        function V(e) {
                            l.css({
                                width: s,
                                position: "relative",
                                overflow: "hidden"
                            }),
                            !x && l.css({
                                height: u
                            }),
                                r.css({
                                    position: "relative",
                                    "z-index": 12
                                });
                            try {
                                var t = f.attr("data-moving") || m,
                                    n = p.attr("data-moving") || m,
                                    i = h.attr("data-moving") || m,
                                    a = g.attr("data-moving") || m,
                                    o = q(t),
                                    c = q(n),
                                    d = q(i),
                                    v = q(a);
                                T && f.css({
                                    width: o
                                }),
                                I && p.css({
                                    width: c
                                }),
                                C && g.css({
                                    height: v
                                }),
                                O && h.css({
                                    height: d
                                })
                            } catch(e) {}
                        }
                        function q(e) {
                            return b.zoom ? e / 100 + "rem": e + "px"
                        }
                        function W() {
                            "x" == w ? (I = !!p.length, T = !!f.length) : "y" == w ? (C = !!g.length, O = !!h.length) : "xy" == w && (C = !!g.length, O = !!h.length, T = !!f.length, I = !!p.length)
                        }
                        function K(n) {
                            M = !0;
                            var i = n.touches ? n.touches[0] : n;
                            if (n.touches && n.touches.length > 1 || n.scale && 1 !== n.scale) M = !1;
                            else if (b.stopHandle && e.unit.checkTargetInclude(n.target, b.stopHandle)) M = !1;
                            else {
                                if (y.id = b.id, y.x1 = i.clientX, y.y1 = i.clientY, y.direction = "", d = t(n.target).closest(b.handle), !1 === (b.onBeforeTouchstart && b.onBeforeTouchstart.call(v, n, y))) return ! 1;
                                pe.call(v, "touchstart", n, y);
                                var a = t(n.target).closest(".bui-scroll"),
                                    o = t(n.target).closest(".bui-tab-main li.active"),
                                    c = t(n.target).closest("main"),
                                    s = t(n.target).closest(".swipedown"),
                                    u = t(n.target).closest(".swipeup"),
                                    k = s.length ? s: u.length ? u: d;
                                if (y.scrollObj = a.length ? a: o.length ? o: c.length ? c: s.length ? s: k, y.scrollObj.scrollTop(), x && !A && (l = (r = d).parent(), f = l.children(b.swipeleft), p = l.children(b.swiperight), h = l.children(b.swipeup), g = l.children(b.swipedown), W(), l.index(), V(), (0 == b.height || "" == l[0].style.height) && l.height(d[0] && d[0].offsetHeight)), y.movingleft = parseInt(f.attr("data-moving") || m), y.movingright = parseInt(p.attr("data-moving") || m), y.movingup = parseInt(h.attr("data-moving") || m), y.movingdown = parseInt(g.attr("data-moving") || m), d.length) {
                                    var P = !1;
                                    switch (w) {
                                        case "x":
                                            P = !(!T && !I);
                                            break;
                                        case "y":
                                            P = !(!O && !C);
                                            break;
                                        case "xy":
                                            P = !!(T || I || O || C)
                                    }
                                }
                                M = null == P || 1 == P
                            }
                        }
                        function Y(t) {
                            if (M) {
                                F = !0;
                                var a = t.touches ? t.touches[0] : t;
                                if (t.touches && t.touches.length > 1 || t.scale && 1 !== t.scale) re();
                                else {
                                    if (y.x2 = a.clientX, y.y2 = a.clientY, !1 === (b.onBeforeTouchmove && b.onBeforeTouchmove.call(v, t, y))) return ! 1;
                                    pe.call(v, "touchmove", t, y),
                                    n && t.stopPropagation();
                                    var l = y.scrollObj.scrollTop() <= 0,
                                        s = (y.scrollObj[0] && y.scrollObj[0].scrollHeight) - (y.scrollObj[0] && y.scrollObj[0].offsetHeight) - y.scrollObj.scrollTop() <= 2,
                                        u = y.y2 - y.y1 > 0,
                                        m = y.y2 - y.y1 < 0;
                                    if (j) {
                                        if (u && l) return F = !1,
                                            void t.preventDefault();
                                        if (m && s && t.preventDefault(), m && !s) return void(F = !1);
                                        if (u && !l) return void(F = !1)
                                    }
                                    if (C && !j && (u && l && t.preventDefault(), m && s && t.preventDefault()), !C && u && l && t.preventDefault(), L) {
                                        if (u && l && t.preventDefault(), m && s) return t.preventDefault(),
                                            void(F = !1);
                                        if (m && !s) return void(F = !1);
                                        if (u && !l) return void(F = !1)
                                    }
                                    y.direction || (y.direction = e.swipeDirection(y.x1, y.x2, y.y1, y.y2)),
                                    "swipeleft" !== y.direction && "swiperight" !== y.direction || t.preventDefault();
                                    try {
                                        if ("swipeup" === y.direction || "swipedown" === y.direction) {
                                            var w = o[0].scrollTop || 0,
                                                x = (o[0].scrollHeight, d[0].scrollTop, d[0].scrollHeight, y.scrollObj[0] && y.scrollObj[0].scrollTop || 0),
                                                k = y.scrollObj[0] && y.scrollObj[0].offsetHeight || 0,
                                                B = y.scrollObj[0] && y.scrollObj[0].scrollHeight || 0,
                                                D = !1,
                                                R = !1;
                                            w <= 0 && x <= 0 && (D = !0),
                                            B - x - k <= 2 && (R = !0)
                                        }
                                    } catch(t) {}
                                    var U = "swiperight" == y.direction || "swipeleft" == y.direction ? y.x2 - y.x1: y.y2 - y.y1,
                                        H = 0;
                                    y.deltax = A ? Math.abs(U) : Math.abs(U) + _,
                                        !I || "swiperight" != y.direction || S || A || i ? !D || !C || "swipedown" != y.direction || j || A || i ? !T || "swipeleft" != y.direction || P || A || i ? !R || !O || "swipeup" != y.direction || L || A || i ? "swipeleft" == y.direction && S ? (c = y.movingright, H = X(y, y.movingright), N && ce( - y.deltax, 0, "none", i || p), E && ce( - H, 0, "none", r), pe.call(v, "movingleft", t, y), F = !0, t.stopPropagation()) : "swipeup" == y.direction && j ? (c = y.movingdown, H = X(y, y.movingdown), N && ce(0, -y.deltax, "none", i || g), E && ce(0, -H, "none", r), pe.call(v, "movingup", t, y), F = !0, t.preventDefault(), t.stopPropagation()) : "swiperight" == y.direction && P ? (c = y.movingleft, H = X(y, y.movingleft), N && ce(y.deltax, 0, "none", i || f), E && ce(H, 0, "none", r), pe.call(v, "movingright", t, y), F = !0, t.stopPropagation()) : "swipedown" == y.direction && L && (c = y.movingup, H = X(y, y.movingup), N && ce(0, y.deltax, "none", i || h), E && ce(0, H, "none", r), pe.call(v, "movingdown", t, y), F = !0, t.preventDefault(), t.stopPropagation()) : (c = y.movingup, H = Z(y, y.movingup), N && ce(0, H, "none", h), E && ce(0, -y.deltax, "none", r), pe.call(v, "movingup", t, y), F = !0, t.preventDefault(), t.stopPropagation()) : (c = y.movingleft, H = Z(y, y.movingleft), N && ce(H, 0, "none", f), E && ce( - y.deltax, 0, "none", r), pe.call(v, "movingleft", t, y), F = !0, t.stopPropagation()) : (c = y.movingdown, H = X(y, y.movingdown), N && ce(0, H, "none", g), E && ce(0, y.deltax, "none", r), pe.call(v, "movingdown", t, y), F = !0, t.preventDefault(), t.stopPropagation()) : (c = y.movingright, H = X(y, y.movingright), N && ce(H, 0, "none", p), E && ce(y.deltax, 0, "none", r), pe.call(v, "movingright", t, y), F = !0, t.stopPropagation())
                                }
                            }
                        }
                        function J(t) {
                            if (M = !1, U = !0, pe.call(v, "touchend", t, y), !1 === (b.onBeforeTouchend && b.onBeforeTouchend.call(v, t, y))) return ! 1;
                            if (F) {
                                var n = "",
                                    i = !1,
                                    a = !1,
                                    o = !1,
                                    r = !1;
                                switch (y.direction) {
                                    case "swiperight":
                                        n = "swipeleft",
                                            a = !0;
                                        break;
                                    case "swipeleft":
                                        n = "swiperight",
                                            i = !0;
                                        break;
                                    case "swipeup":
                                        n = "swipedown",
                                            o = !0;
                                        break;
                                    case "swipedown":
                                        n = "swipeup",
                                            r = !0
                                }
                                var l = a || i ? Math.abs(y.x2 - y.x1) : Math.abs(y.y2 - y.y1);
                                if (I && a && l > b.distance && !S && !A) Q(),
                                    pe.call(v, y.direction, t, y),
                                    pe.call(v, "open", y.direction);
                                else if (T && i && l > b.distance && !P && !A) G(),
                                    pe.call(v, y.direction, t, y),
                                    pe.call(v, "open", y.direction);
                                else if (O && o && l > b.distance && !L && !A) ee(),
                                    pe.call(v, y.direction, t, y),
                                    pe.call(v, "open", y.direction);
                                else if (C && r && l > b.distance && !j && !A) te(),
                                    pe.call(v, y.direction, t, y),
                                    pe.call(v, "open", y.direction);
                                else if (A && l < b.distance) T && P && G(),
                                I && S && Q(),
                                O && L && ee(),
                                C && j && te(),
                                    pe.call(v, y.direction, t, y),
                                b.alwaysTrigger && pe.call(v, "open", y.direction);
                                else if (A && l > b.distance) {
                                    var c = T && P && a,
                                        s = I && S && i,
                                        u = O && L && r,
                                        d = C && j && o;
                                    c && ie(),
                                    s && ne(),
                                    u && ae(),
                                    d && oe(),
                                        pe.call(v, y.direction, t, y),
                                    (c || s || u || d) && pe.call(v, "close", n)
                                } else ! A && l < b.distance && (i && T && !P && ie(), a && I && !S && ne(), o && O && !L && ae(), r && C && !j && oe(), b.alwaysTrigger && pe.call(v, "close", n), pe.call(v, y.direction, t, y));
                                H = y.direction,
                                    M = !1,
                                !e.platform.isPC() && (F = !1),
                                b.stopPropagation && t.stopPropagation()
                            }
                        }
                        function X(e, t) {
                            var n = -t + e.deltax;
                            return n = n > 0 ? 0 : n
                        }
                        function Z(e, t) {
                            var n = t - e.deltax;
                            return n = n > t ? t: n
                        }
                        function G(e) { (e = e || {}).transition = e.transition || b.transition,
                            e.target = e.target || f,
                            e.handle = e.handle || r,
                        n && n.close(),
                            A = !0,
                            P = !0,
                        x && (n = v, i = f, z.addEventListener("click", le, !0)),
                        N && ce(0, 0, e.transition, e.target),
                        E && ce( - c, 0, e.transition, e.handle)
                        }
                        function Q(e) { (e = e || {}).transition = e.transition || b.transition,
                            e.target = e.target || p,
                            e.handle = e.handle || r,
                        n && n.close(),
                            A = !0,
                            S = !0,
                        x && (n = v, i = p, z.addEventListener("click", le, !0)),
                        N && ce(0, 0, e.transition, e.target),
                        E && ce(c, 0, e.transition, e.handle)
                        }
                        function ee(e) { (e = e || {}).transition = e.transition || b.transition,
                            e.target = e.target || h,
                            e.handle = e.handle || r,
                        n && n.close(),
                            A = !0,
                            L = !0,
                        x && (n = v, i = h, z.addEventListener("click", le, !0)),
                        N && ce(0, 0, e.transition, e.target),
                        E && ce(0, -c, e.transition, e.handle)
                        }
                        function te(e) { (e = e || {}).transition = e.transition || b.transition,
                            e.target = e.target || g,
                            e.handle = e.handle || r,
                        n && n.close(),
                            A = !0,
                            j = !0,
                        x && (n = v, i = g, z.addEventListener("click", le, !0)),
                        N && ce(0, 0, e.transition, e.target),
                        E && ce(0, c, e.transition, e.handle)
                        }
                        function ne(e) { (e = e || {}).transition = e.transition || b.transition,
                            e.target = p,
                            e.handle = D || r,
                            A = !1,
                            S = !1,
                        x && (n = null, i = null, D = null, z.removeEventListener("click", le, !0)),
                        N && ce( - (c + 1), 0, e.transition, e.target),
                        E && ce(_, 0, e.transition, e.handle)
                        }
                        function ie(e) { (e = e || {}).transition = e.transition || b.transition,
                            e.target = f,
                            e.handle = D || r,
                            A = !1,
                            P = !1,
                        x && (n = null, i = null, D = null, z.removeEventListener("click", le, !0)),
                        N && ce("101%", 0, e.transition, e.target),
                        E && ce( - _, 0, e.transition, e.handle)
                        }
                        function ae(e) { (e = e || {}).transition = e.transition || b.transition,
                            e.target = h,
                            e.handle = D || r,
                            A = !1,
                            L = !1,
                        x && (n = null, i = null, D = null, z.removeEventListener("click", le, !0)),
                        N && ce(0, "100%", e.transition, e.target),
                        E && ce(0, -_, e.transition, e.handle)
                        }
                        function oe(e) { (e = e || {}).transition = e.transition || b.transition,
                            e.target = g,
                            e.handle = D || r,
                            A = !1,
                            j = !1,
                        x && (n = null, i = null, D = null, z.removeEventListener("click", le, !0)),
                        N && ce(0, -c, e.transition, e.target),
                        E && ce(0, _, e.transition, e.handle)
                        }
                        function re() {
                            S && ne(),
                            P && ie(),
                            j && oe(),
                            L && ae(),
                                pe.call(v, "close", H)
                        }
                        function le(e) {
                            if (!F || !U) {
                                var i = t(e.target),
                                    a = i.closest(f).length || i.closest(p).length || i.closest(h).length || i.closest(g).length || e.target.className.indexOf("bui-mask") > -1 || e.target.className.indexOf("bui-click") > -1;
                                n && (a || (n.close(), e.stopPropagation()))
                            }
                        }
                        function ce(e, t, n, i) {
                            var a = i || o,
                                r = (e = e || 0, t = t || 0, b.zoom ? parseFloat(e) / 100 + "rem": parseFloat(e) + "px"),
                                l = b.zoom ? parseFloat(t) / 100 + "rem": parseFloat(t) + "px",
                                c = String(e).indexOf("%") > -1 ? e: r,
                                s = String(t).indexOf("%") > -1 ? t: l;
                            return n = "number" == typeof n ? "all " + n + "ms": n || "all 300ms",
                                a.css({
                                    "-webkit-transition": n,
                                    transition: n,
                                    "-webkit-transform": "translate(" + c + "," + s + ")",
                                    transform: "translate(" + c + "," + s + ")"
                                }).one("webkitTransitionEnd", (function() {
                                    a.css({
                                        "-webkit-transition": "none",
                                        transition: "none"
                                    }),
                                        F = !1
                                })),
                                this
                        }
                        function se() {
                            var t = {
                                touchstart: "touchstart",
                                touchmove: "touchmove",
                                touchend: "touchend",
                                touchcancel: "touchcancel"
                            };
                            return e.platform.isPC() && (t = {
                                touchstart: "mousedown",
                                touchmove: "mousemove",
                                touchend: "mouseup",
                                touchcancel: "mouseleave"
                            }),
                                t
                        }
                        function ue() {
                            if (!R) {
                                var e = se();
                                return o.off(e.touchstart, K).off(e.touchmove, Y).off(e.touchend, J).off(e.touchcancel),
                                    pe.call(v, "lock"),
                                    this
                            }
                        }
                        function de() {
                            if (!R) {
                                var t = se();
                                return o.on(t.touchstart, K).on(t.touchmove, Y).on(t.touchend, J).on(t.touchcancel, (function(t) {
                                    b.autoClose && e.platform.isPC() && (U || F) && (ne(), ie(), oe(), ae(), pe.call(v, "close", H), t.stopPropagation()),
                                        M = !1,
                                        F = !1,
                                        U = !1
                                })),
                                    pe.call(v, "unlock"),
                                    this
                            }
                        }
                        function fe(t, n) {
                            return e.off.apply(v, arguments),
                                this
                        }
                        function pe(t) {
                            v.self = this == window || this == v ? null: this,
                                e.trigger.apply(v, arguments)
                        }
                        return b.autoinit && $(b),
                            v
                    })
            } (window.bui || {},
                window.libs),
            function(e, t) {
                e.sidebar = function(n) {
                    var i, a = {
                            name: "sidebar",
                            handle: {},
                            on: function(t, n) {
                                return e.on.apply(a, arguments),
                                    this
                            },
                            off: h,
                            active: function() {
                                return i.active()
                            },
                            isActive: function() {
                                return c
                            },
                            open: f,
                            close: p,
                            lock: function() {
                                return i.lock(),
                                    g.call(this, "lock"),
                                    this
                            },
                            unlock: function(e) {
                                return i.unlock(),
                                    g.call(this, "unlock"),
                                    this
                            },
                            destroy: function(e) {
                                e = 1 == e;
                                u && u.off("click.bui");
                                h("open"),
                                    h("close"),
                                r && r.destroy(e),
                                i && i.destroy(e)
                            },
                            widget: function(t) {
                                var n = {
                                    swipe: i,
                                    mask: r
                                };
                                return e.widget.call(n, t)
                            },
                            option: function(t, n) {
                                return e.option.call(a, t, n)
                            },
                            config: o,
                            init: d
                        },
                        o = a.config = t.extend(!0, {},
                            {
                                id: "",
                                uid: "",
                                trigger: "",
                                handle: ".bui-page",
                                swiperight: ".swiperight",
                                swipeleft: ".swipeleft",
                                handleMove: !0,
                                swipe: !0,
                                stopHandle: "",
                                zIndex: 121,
                                mask: !0,
                                width: 280,
                                opacity: .1,
                                height: 0,
                                zoom: !0,
                                autoClose: !0,
                                stopPropagation: !1,
                                onBeforeTouchstart: null,
                                onBeforeTouchmove: null,
                                onBeforeTouchend: null,
                                autoinit: !0,
                                onBeforeInit: null,
                                onInited: null,
                                distance: 40
                            },
                            e.config.sidebar, n),
                        r = null,
                        l = null,
                        c = !1,
                        s = !1,
                        u = null;
                    function d(n) {
                        var d = t.extend(!0, o, n);
                        return d.onBeforeInit && d.onBeforeInit.call(a, d),
                            o = a.config = d,
                        d.trigger && (u = e.obj(d.trigger)),
                            l = e.obj(d.handle),
                        i || (i = e.swipe({
                            id: d.id,
                            handle: d.handle,
                            movingDistance: d.width,
                            swipe: d.swipe,
                            swiperight: d.swiperight,
                            swipeleft: d.swipeleft,
                            stopHandle: d.stopHandle,
                            autoClose: d.autoClose,
                            stopPropagation: d.stopPropagation,
                            direction: "x",
                            hasChild: !1,
                            width: 0,
                            height: 0,
                            onBeforeTouchstart: d.onBeforeTouchstart,
                            onBeforeTouchmove: d.onBeforeTouchmove,
                            onBeforeTouchend: d.onBeforeTouchend,
                            handleMove: d.handleMove,
                            zoom: d.zoom,
                            distance: d.distance,
                            transition: 300
                        })),
                        o.mask && !r && (r = bui.mask({
                            id: d.id + "-mask",
                            appendTo: l,
                            autoTrigger: !1,
                            zIndex: d.zIndex - 1,
                            opacity: d.opacity,
                            callback: function() {
                                i.close()
                            }
                        })),
                        s || (!
                            function() {
                                var e = this;
                                i.on("open", (function(t) {
                                    u && u.addClass("active"),
                                    r && r.show(),
                                        l.css("overflow-y", "hidden"),
                                        c = !0,
                                        g.call(e, "open", t)
                                })),
                                    i.on("close", (function() {
                                        u && u.removeClass("active"),
                                        r && r.hide(),
                                            l.css("overflow-y", "auto"),
                                            c = !1,
                                            g.call(e, "close")
                                    })),
                                u && u.off("click.bui").on("click.bui", (function(e) {
                                    if (!t(this).hasClass("disabled")) {
                                        var n = t(this).attr("data-target") || "swiperight";
                                        c ? p() : f({
                                            target: n
                                        })
                                    }
                                })),
                                    s = !0
                            } (), d.height > 0 && e.obj(d.id).height(d.height)),
                        d.uid && e.history.setUI && e.history.setUI({
                            uid: d.uid,
                            ui: a
                        }),
                        d.onInited && d.onInited.call(a, d),
                            this
                    }
                    function f(e) {
                        var t = e || {};
                        return t.target = t.target || "swiperight",
                            t.transition = t.transition || 300,
                            i.open(t),
                            this
                    }
                    function p() {
                        return i.close(),
                            this
                    }
                    function h(t, n) {
                        return e.off.apply(a, arguments),
                            this
                    }
                    function g(t) {
                        a.self = this == window || this == a ? null: this,
                            e.trigger.apply(a, arguments)
                    }
                    return o.autoinit && d(o),
                        a
                }
            } (bui || {},
                libs),
            function(e, t) {
                e.listview = function(n) {
                    var i, a, o, r = {
                            name: "listview",
                            active: function() {
                                return i.active()
                            },
                            lock: function() {
                                return i.lock(),
                                    f.call(this, "lock"),
                                    this
                            },
                            unlock: function(e) {
                                return i.unlock(),
                                    f.call(this, "unlock"),
                                    this
                            },
                            open: function(e) {
                                var t = e || {};
                                return t.target = t.target || ("right" == l.position ? l.swipeleft.substr(1) : l.swiperight.substr(1)),
                                    t.transition = t.transition || 300,
                                    t.index = t.index || 0,
                                    i.open(t),
                                    this
                            },
                            isActive: s,
                            close: function() {
                                return i.close(),
                                    this
                            },
                            destroy: function(e) {
                                e = 1 == e;
                                o && (o.off("click.bui"), o = null);
                                a && (a.off("click.bui"), e && a.remove(), a = null);
                                d("open"),
                                    d("close"),
                                i && i.destroy(e),
                                    l = null,
                                    r = null
                            },
                            widget: function(t) {
                                var n = {
                                    swipe: i
                                };
                                return e.widget.call(n, t)
                            },
                            option: function(t, n) {
                                return e.option.call(r, t, n)
                            },
                            config: l,
                            init: u
                        },
                        l = r.config = t.extend(!0, {},
                            {
                                id: "",
                                uid: "",
                                data: [],
                                handle: ".bui-btn",
                                stopHandle: "",
                                swiperight: ".swiperight",
                                swipeleft: ".swipeleft",
                                position: "right",
                                width: 0,
                                height: 0,
                                relative: !1,
                                menuWidth: 160,
                                menuHeight: 0,
                                distance: 80,
                                swipe: !0,
                                zoom: !1,
                                stopPropagation: !1,
                                autoClose: !0,
                                autoinit: !0,
                                template: null,
                                onBeforeTouchstart: null,
                                onBeforeTouchmove: null,
                                onBeforeTouchend: null,
                                onBeforeInit: null,
                                onInited: null,
                                callback: null
                            },
                            e.config.listview, n),
                        c = !1,
                        s = !1;
                    function u(n) {
                        var u = t.extend(!0, l, n);
                        return u.onBeforeInit && u.onBeforeInit.call(r, u),
                            l = r.config = u,
                            a = e.obj(u.id),
                        (o = a.children()).length &&
                        function(e) {
                            e.height > 0 && a.height(e.height);
                            e.data && e.data.length ? o.each((function(n, i) {
                                var a = t(i),
                                    o = a.attr("status"),
                                    l = e.menuHeight > 0 ? e.menuHeight: i.offsetHeight;
                                if (!o) {
                                    var c = "function" == typeof e.template ? e.template.call(r, e.data) : function(e) {
                                        var n = "",
                                            i = "right" == e.position ? e.swipeleft.substr(1) : e.swiperight.substr(1);
                                        return n += '<div class="bui-listview-menu ' + i + '">',
                                            t.each(e.data, (function(e, t) {
                                                n += '    <div class="bui-btn ' + t.classname + '">' + t.text + "</div>"
                                            })),
                                            n += "</div>"
                                    } (e);
                                    a.append(c).attr("status", "1")
                                }
                                i.style.height || t(i).height(l)
                            })) : o.each((function(n, i) {
                                var a = e.menuHeight > 0 ? e.menuHeight: i.offsetHeight;
                                i.style.height || t(i).height(a)
                            }))
                        } (u),
                        c ||
                        function(t) {
                            var n = this,
                                o = function(e) {
                                    e.ui = r,
                                    t.callback && t.callback.call(r, e, i)
                                };
                            a.off("click.bui", ".bui-listview-menu .bui-btn").on("click.bui", ".bui-listview-menu .bui-btn", o),
                                (i = e.swipe({
                                    id: t.id,
                                    handle: t.handle,
                                    stopHandle: t.stopHandle,
                                    stopPropagation: t.stopPropagation,
                                    movingDistance: t.menuWidth,
                                    swipe: t.swipe,
                                    swiperight: t.swiperight,
                                    swipeleft: t.swipeleft,
                                    direction: "x",
                                    autoClose: t.autoClose,
                                    hasChild: !0,
                                    width: t.width,
                                    relative: t.relative,
                                    height: 0,
                                    zoom: t.zoom,
                                    distance: t.distance,
                                    onBeforeTouchstart: t.onBeforeTouchstart,
                                    onBeforeTouchmove: t.onBeforeTouchmove,
                                    onBeforeTouchend: t.onBeforeTouchend,
                                    transition: 300
                                })).on("open", (function(e) {
                                    s = !0,
                                        f.call(n, "open", e)
                                })),
                                i.on("close", (function(e) {
                                    s = !1,
                                        f.call(n, "close", e)
                                })),
                                c = !0
                        } (u),
                        u.uid && e.history.setUI && e.history.setUI({
                            uid: u.uid,
                            ui: r
                        }),
                        u.onInited && u.onInited.call(r, u),
                            this
                    }
                    function s() {
                        return i && i.isActive()
                    }
                    function d(t, n) {
                        return e.off.apply(r, arguments),
                            this
                    }
                    function f(t) {
                        r.self = this == window || this == r ? null: this,
                            e.trigger.apply(r, arguments)
                    }
                    return l.autoinit && u(l),
                        r
                }
            } (window.bui || {},
                window.libs),
            function(e, t) {
                e.btn = function(n) {
                    var i, a, o, r, l = {},
                        c = {
                            load: function(n) {
                                n = n;
                                var s = 0;
                                i.off("click.bui", r).on("click.bui", r, (function(i) {
                                    var r = t(this),
                                        u = l.beforeCallback || l.beforeLoad;
                                    if (!1 === (u && u.call(c, i))) return i.preventDefault(),
                                        i.stopPropagation(),
                                        !1;
                                    var d = n || r.attr("href"),
                                        f = r.attr("target"),
                                        p = "true" === r.attr("iframe"),
                                        h = "true" === r.attr("firstAnimate"),
                                        g = r.attr("disabled"),
                                        m = r.hasClass("disabled") || "" == g || "true" == g || "disabled" == g;
                                    if (d && !m && !(d && d.indexOf("javascript:") > -1)) {
                                        var v = r.attr("param") || "",
                                            b = v && v.indexOf("{") > -1 && v.indexOf("}") > -1 ? JSON.parse(r.attr("param")) : {}; (r.attr("progress") ? "false" != r.attr("progress") : a) && e.loading({
                                            autoTrigger: !0,
                                            display: "block",
                                            opacity: 0,
                                            timeout: l.timeout
                                        });
                                        var y = +new Date;
                                        if (y - s < 350) return ! 1;
                                        s = y;
                                        var w = {
                                            url: d,
                                            param: b,
                                            replace: o,
                                            firstAnimate: h,
                                            iframe: p
                                        };
                                        return "_blank" == f ? e.run({
                                            id: d,
                                            data: b
                                        }) : e.load(w),
                                            i.preventDefault(),
                                            i.stopPropagation(),
                                            !1
                                    }
                                }))
                            },
                            submit: function(n, a) {
                                a = a || {};
                                var o = null;
                                l.id && l.handle ? i.off("click.bui", r).on("click.bui", r, c) : i.click(c);
                                function c(i) {
                                    if (!1 === (l.beforeCallback && l.beforeCallback.call(this, i))) return i.preventDefault(),
                                        i.stopPropagation(),
                                        !1;
                                    var r = this,
                                        c = t(r).css("background-color");
                                    if (!t(this).hasClass("disabled") && "true" != t(this).attr("disabled")) {
                                        var s = "none" == c ? "#fff": c;
                                        if (a.appendTo = r, a.background = a.background || s, a.display = a.display || "inline", a.width = a.width || 15, a.height = a.height || 15, a.text = a.text || "加载中", a.autoClose = 1 == a.autoClose, a.autoTrigger = 0 != a.autoTrigger, o) {
                                            if (o.isLoading()) return;
                                            o.show()
                                        } else o = e.loading(a);
                                        return n && n.call(r, o, i)
                                    }
                                }
                            },
                            click: function(e) {
                                var n = 0;
                                l.id && l.handle ? i.off("click.bui", r).on("click.bui", r, a) : i.click(a);
                                function a(i) {
                                    if (!1 === (l.beforeCallback && l.beforeCallback.call(this, i))) return i.preventDefault(),
                                        i.stopPropagation(),
                                        !1;
                                    if (!t(this).hasClass("disabled") && "true" != t(this).attr("disabled")) {
                                        var a = +new Date;
                                        return ! (a - n < 350) && (n = a, e && e.call(this, i))
                                    }
                                }
                            },
                            off: function() {
                                return i.off("click.bui", r),
                                    this
                            }
                        };
                    return function(n) {
                        n && "object" === e.typeof(n) ? (l.id = n.id || "", l.handle = n.handle || "", l.progress = "progress" in n && n.progress, l.replace = "replace" in n && n.replace, l.timeout = n.timeout || 3e3, l.beforeCallback = n.beforeCallback || null, i = t(l.id)) : "string" == typeof n && (l.id = n || "", l.handle = "", l.progress = !1, l.replace = !1, l.timeout = 3e3, l.beforeCallback = null, i = e.obj(l.id));
                        r = l.handle,
                            a = l.progress,
                            o = l.replace
                    } (n),
                        c
                }
            } (window.bui || {},
                window.libs),
            function(e, t) {
                e.dialog = function(n) {
                    var i, a, o, r, l = {
                            id: "",
                            dialogid: "",
                            title: "",
                            effect: "zoomIn",
                            content: "",
                            className: "",
                            appendTo: "",
                            position: "center",
                            style: null,
                            fullscreen: !1,
                            useBox: !1,
                            width: 0,
                            height: 0,
                            mask: !0,
                            opacity: .3,
                            render: !1,
                            needRemove: "",
                            autoClose: !0,
                            close: !0,
                            scroll: !0,
                            closeText: "",
                            zoom: !1,
                            zIndex: 101,
                            buttons: [],
                            onBeforeClose: null,
                            onBeforeOpen: null,
                            onBeforeInit: null,
                            autoinit: !0,
                            onInited: null,
                            onMask: null,
                            onClose: null,
                            callback: null
                        },
                        c = {
                            name: "dialog",
                            selector: j,
                            $el: j,
                            $: j,
                            handle: {},
                            on: function(t, n) {
                                return e.on.apply(c, arguments),
                                    this
                            },
                            off: L,
                            open: function(n) {
                                if (m || k || h) return this;
                                var o = {
                                        width: s.width,
                                        height: s.height,
                                        zoom: s.zoom,
                                        fullscreen: s.fullscreen,
                                        position: s.position,
                                        scroll: s.scroll,
                                        onBeforeOpen: s.onBeforeOpen,
                                        useBox: s.useBox,
                                        effect: "",
                                        callback: null
                                    },
                                    l = o;
                                "function" == typeof n ? l.callback = n: "string" == typeof n ? l.effect = n: n && "object" === e.typeof(n) && (l = t.extend(!0, {},
                                    o, n));
                                var u = l.onBeforeOpen && l.onBeforeOpen.call(c, {
                                    toggle: a
                                });
                                if (C.call(c, "beforeopen", {
                                    toggle: a
                                }), !1 === u) return this;
                                var p = s.useBox ? "-webkit-box": "block";
                                if (i && i.css("display", p), 0 == (i.attr("status") || 0)) {
                                    d = String(l.width).indexOf("%") > -1 ? w * parseFloat(l.width) / 100 : l.width || i.width(),
                                        f = String(l.height).indexOf("%") > -1 ? x * parseFloat(l.height) / 100 : l.height || i.height();
                                    var g = e.unit.pxToRemZoom(d),
                                        b = e.unit.pxToRemZoom(f),
                                        y = l.zoom ? g + "rem": d + "px",
                                        I = l.zoom ? b + "rem": f + "px",
                                        T = l.zoom ? "-" + b / 2 + "rem": "-" + f / 2 + "px",
                                        O = l.zoom ? "-" + g / 2 + "rem": "-" + d / 2 + "px";
                                    l.fullscreen && "custom" != l.position || i.css({
                                        width: y,
                                        height: I
                                    }),
                                    "center" != l.position || l.fullscreen || i.css({
                                        top: "50%",
                                        "margin-top": T,
                                        left: "50%",
                                        "margin-left": O,
                                        right: "auto"
                                    }),
                                    l.fullscreen && i.addClass("bui-dialog-fullscreen");
                                    var P = i.children(".bui-dialog-head"),
                                        j = i.children(".bui-dialog-foot"),
                                        L = i.children(".bui-dialog-main");
                                    if (!l.useBox) {
                                        var E = P.length ? P.height() : 0,
                                            N = j.length ? j.height() : 0,
                                            B = i.height() - E - N;
                                        L.css({
                                            height: B
                                        })
                                    }
                                    l.scroll || L.css({
                                        overflow: "hidden"
                                    }),
                                        i.attr("status", "1")
                                }
                                r && r.show(),
                                    a.show((function(e) {
                                        m = !0,
                                        l.callback && l.callback.call(c, {
                                            toggle: a
                                        }),
                                            C.call(c, "openafter", {
                                                toggle: a
                                            }),
                                            C.call(c, "afteropen", {
                                                toggle: a
                                            })
                                    }), l.effect),
                                v || S();
                                return C.call(c, "open", {
                                    toggle: a
                                }),
                                    this
                            },
                            close: O,
                            isOpen: m,
                            disableOpen: function() {
                                return h = !0,
                                    this
                            },
                            enableOpen: function() {
                                return h = !1,
                                    this
                            },
                            disableClose: function() {
                                return g = !0,
                                    this
                            },
                            enableClose: function() {
                                return g = !1,
                                    this
                            },
                            top: function(t) {
                                return t = t || s.zIndex + e.$(".bui-dialog").length,
                                    e.$(".bui-dialog").css("z-index", s.zIndex),
                                    e.$(".bui-mask").css("z-index", s.zIndex - 1),
                                    i.css("z-index", t),
                                r && e.$("#" + r.config.id).css("z-index", t - 1),
                                    c.config.zIndex = t,
                                    s.zIndex = t,
                                    this
                            },
                            template: T,
                            toggle: function(e, t) {
                                c.isOpen() ? c.close(t) : c.open(e);
                                return this
                            },
                            create: function(e) {
                                var n = e || {};
                                l.title = s.title || "提示",
                                    l.content = s.content || "",
                                    l.close = !1,
                                    l.render = !0,
                                    l.autoClose = s.autoClose,
                                    l.mask = s.mask,
                                    l.buttons = s.buttons && s.buttons.length ? s.buttons: ["确定"],
                                    l.callback = s.callback || null;
                                var i = t.extend(!0, l, n);
                                return C.call(c, "create"),
                                    I(i)
                            },
                            remove: P,
                            destroy: function() {
                                var e = 1 == e;
                                i && (i.off("click.bui"), i.remove(), i = null, h = !1);
                                L("open"),
                                    L("close"),
                                r && r.destroy(e),
                                a && a.destroy(e),
                                    k = !0
                            },
                            widget: function(t) {
                                var n = {
                                    toggle: a,
                                    mask: r
                                };
                                return e.widget.call(n, t)
                            },
                            option: function(t, n) {
                                return e.option.call(c, t, n)
                            },
                            config: s,
                            init: I
                        },
                        s = c.config = t.extend(!1, {},
                            l, e.config.dialog, n),
                        u = "",
                        d = "",
                        f = "",
                        p = "fadeInDown",
                        h = !1,
                        g = !1,
                        m = !1,
                        v = !1,
                        b = "" !== s.needRemove ? s.needRemove: !!s.render,
                        y = {},
                        w = window && window.viewport && window.viewport.width() || document.documentElement.clientWidth,
                        x = window && window.viewport && window.viewport.height() || document.documentElement.clientHeight,
                        k = !1;
                    function I(n) {
                        var l = t.extend(!0, s, n);
                        switch (l.onBeforeInit && l.onBeforeInit.call(c, l), l.appendTo = l.appendTo || e.hasRouter && router.currentPage() || "body", k = !1, o = l.effect, b = "" !== l.needRemove ? l.needRemove: !!l.render, w = window && window.viewport && window.viewport.width() || document.documentElement.clientWidth, x = window && window.viewport && window.viewport.height() || document.documentElement.clientHeight, l.position) {
                            case "top":
                                u = "bui-dialog-top",
                                    o = l.effect || "fadeInDown";
                                break;
                            case "bottom":
                                u = "bui-dialog-bottom",
                                    o = l.effect || "fadeInUp";
                                break;
                            case "left":
                                u = "bui-dialog-left",
                                    o = l.effect || "fadeInLeft";
                                break;
                            case "right":
                                u = "bui-dialog-right",
                                    o = l.effect || "fadeInRight";
                                break;
                            case "center":
                                u = "bui-dialog-center",
                                    o = l.effect || p;
                                break;
                            case "custom":
                                u = "bui-dialog-custom",
                                    o = l.effect || p
                        }
                        l.fullscreen && (u = "bui-dialog-fullscreen", o = l.effect || p),
                            l.render ? (l.id = l.dialogid || e.guid(),
                                function(n) {
                                    var i = T(n),
                                        a = e.$("#" + n.id);
                                    a.length && a.remove();
                                    t(n.appendTo).append(i)
                                } (l), i = e.objId(l.id)) : ((i = e.obj(l.id)).addClass(u).css("z-index", l.zIndex), l.useBox && i.addClass("bui-box-vertical")),
                        l.style && i.css(l.style),
                            d = i.width() > w ? w: i.width(),
                            f = i.height() > x ? x: i.height(),
                            i.css("display", "none"),
                        a || (a = e.toggle({
                            id: l.id,
                            effect: o,
                            useBox: l.useBox
                        })),
                            s = c.config = l;
                        try {
                            var h = "object" === _typeof(l.id) ? t(l.id).attr("id") + "-mask": l.id + "-mask";
                            n.mask && !r && (r = e.mask({
                                id: h,
                                opacity: n.opacity,
                                appendTo: i.parent(),
                                autoTrigger: !1,
                                onlyOne: !0,
                                autoClose: !1,
                                zIndex: parseInt(n.zIndex, 10) - 1,
                                callback: function(e) {
                                    if (!1 === (n.onMask && n.onMask.call(c, e))) return ! 1;
                                    s.autoClose && (b ? O(P) : O())
                                }
                            }))
                        } catch(t) {
                            e.showLog(t)
                        }
                        return v && !s.render || S(),
                        l.uid && e.history.setUI && e.history.setUI({
                            uid: l.uid,
                            ui: c
                        }),
                        l.onInited && l.onInited.call(c, l),
                            c
                    }
                    function T(t) {
                        var n = "",
                            i = t.useBox ? "bui-box-vertical ": "";
                        return n += '<div id="' + t.id + '" class="bui-dialog ' + i + u + " " + t.className + '" style="display:block;z-index:' + t.zIndex + '">',
                        t.title && (n += '\t<div class="bui-dialog-head">' + t.title + "</div>"),
                            n += '\t<div class="bui-dialog-main">',
                        t.content && (n += t.content),
                            n += "\t</div>",
                        t.buttons && t.buttons.length && (n += '\t<div class="bui-dialog-foot"><div class="bui-box">', t.buttons.forEach((function(e, t) {
                            n += '\t\t<div class="bui-btn span1 ' + (e.className || "") + '" value="' + (e.value || "") + '">' + (e.name || e) + "</div>"
                        })), n += "\t</div></div>"),
                        t.close && (n += '   <div class="bui-dialog-close">' + (t.closeText ? t.closeText: '<i class="' + e.config.icon.close + '"></i>') + "</div>"),
                            n += "</div>"
                    }
                    function m(e) {
                        return m
                    }
                    function O(t) {
                        if (m && !k && !g) {
                            var n = {};
                            "function" == typeof t ? n.callback = t: "string" == typeof t ? (n.effect = t, n.callback = s.onClose) : t && "object" === e.typeof(t) && (n = t),
                                n.onBeforeClose = s.onBeforeClose;
                            var i = n.onBeforeClose && n.onBeforeClose.call(c, {
                                toggle: a
                            });
                            if (C.call(c, "beforeclose", {
                                toggle: a
                            }), !1 === i) return this;
                            try {
                                a.hide((function(e) {
                                    m = !1,
                                    n.callback && n.callback.call(c, {
                                        toggle: a
                                    })
                                }), n.effect),
                                r && r.hide(),
                                    C.call(this, "close", {
                                        toggle: a
                                    })
                            } catch(t) {
                                e.showLog(t, "bui.dialog.close")
                            }
                            return this
                        }
                    }
                    function C(e, t) {
                        if (y[e] instanceof Array) for (var n = y[e], i = 0, a = n.length; i < a; i++) n[i](t)
                    }
                    function P() {
                        try {
                            i.remove(),
                            r && r.remove(),
                                C.call(this, "remove")
                        } catch(t) {
                            e.showLog(t, "bui.dialog.remove")
                        }
                        return this
                    }
                    function S() {
                        return i.off("click.bui", ".bui-dialog-close").on("click.bui", ".bui-dialog-close", (function(e) {
                            b ? O(P) : O(),
                            s.onClose && s.onClose.call(c, e, c),
                                e.stopPropagation()
                        })),
                            i.on("click.bui", ".bui-dialog-foot .bui-btn", (function(e) {
                                if (e.target = this, !1 === (s.callback && s.callback.call(c, e, c))) return ! 1;
                                s.autoClose && (b ? O(P) : O()),
                                    e.stopPropagation()
                            })),
                            v = !0,
                            this
                    }
                    function j(t) {
                        return e.selector.call(i, t)
                    }
                    function L(t, n) {
                        return e.off.apply(c, arguments),
                            this
                    }
                    function C(t) {
                        c.self = this == window || this == c ? null: this,
                            e.trigger.apply(c, arguments)
                    }
                    return s.id && s.autoinit && I(s),
                        c
                }
            } (bui || {},
                libs),
            function(e, t) {
                e.alert = function(n, i) {
                    var a = e.dialog(),
                        o = {
                            className: "bui-alert",
                            title: "",
                            width: 580,
                            height: 360,
                            scroll: !0,
                            zIndex: 121,
                            position: "center",
                            autoClose: !0,
                            zoom: !0,
                            buttons: [{
                                name: "确定",
                                className: "primary-reverse"
                            }]
                        };
                    o.callback = i ||
                        function() {};
                    var r = t.extend(o, e.config.alert),
                        l = "";
                    try {
                        l = "string" == typeof n && n.indexOf("<") > -1 && n.indexOf(">") > -1 ? "<xmp>" + n + "</xmp>": !n || "object" !== e.typeof(n) && "array" !== e.typeof(n) ? n && "function" === e.typeof(n) ? n.toString() : n: JSON.stringify(n),
                            r.content = '<div class="bui-dialog-text bui-box-center" style="height:100%;">' + l + "</div>"
                    } catch(t) {
                        e.showLog(t, "bui.alert")
                    }
                    return a.create(r).open(),
                        a
                }
            } (window.bui || {},
                window.libs),
            function(e, t) {
                e.confirm = function(n, i) {
                    var a = e.dialog(),
                        o = {
                            className: "bui-confirm",
                            title: "",
                            width: 580,
                            height: 360,
                            scroll: !0,
                            zIndex: 121,
                            autoClose: !0,
                            zoom: !0,
                            position: "center",
                            buttons: [{
                                name: "取消",
                                className: ""
                            },
                                {
                                    name: "确定",
                                    className: "primary-reverse"
                                }]
                        };
                    o.callback = i ||
                        function() {};
                    var r = {};
                    return "object" === _typeof(n) ? (n.content = '<div class="bui-dialog-text bui-box-center" style="height:100%;">' + n.content + "</div>", r = t.extend(o, e.config.confirm, n)) : ((r = t.extend(o, e.config.confirm)).content = '<div class="bui-dialog-text bui-box-center" style="height:100%;">' + n + "</div>", r.callback = i ||
                        function() {}),
                        a.create(r).open(),
                        a
                }
            } (window.bui || {},
                window.libs),
            t((function(e) { !
                function(t, n) {
                    t.prompt = function(i, a) {
                        var o = t.dialog(),
                            r = {
                                className: "bui-prompt",
                                title: "",
                                width: 580,
                                height: 400,
                                scroll: !0,
                                autoClose: !1,
                                needRemove: !1,
                                zoom: !0,
                                zIndex: 121,
                                position: "center",
                                buttons: [{
                                    name: "取消",
                                    className: ""
                                },
                                    {
                                        name: "确定",
                                        className: "primary-reverse"
                                    }]
                            };
                        r.callback = a ||
                            function() {},
                            r.placeholder = "",
                            r.row = 1,
                            r.type = "text",
                            r.value = "",
                            r.onChange = null;
                        var l = {},
                            c = "",
                            s = "";
                        switch ("object" === _typeof(i) ? c = (l = n.extend(r, t.config.prompt, i)).content || "": ((l = n.extend(r, t.config.prompt)).callback = a ||
                            function() {},
                            c = i || ""), l.type) {
                            case "number":
                                l.content = '<div class="bui-prompt-main bui-box-vertical"> <div class="bui-prompt-label">' + c + '</div> <div class="span1"> <input class="bui-prompt-text" placeholder="' + l.placeholder + '" type="' + l.type + '" value="' + l.value + '"/> </div> </div>';
                                break;
                            default:
                                l.content = '<div class="bui-prompt-main bui-box-vertical"> <div class="bui-prompt-label">' + c + '</div> <div class="span1"> <textarea class="bui-prompt-text" placeholder="' + l.placeholder + '" rows="' + l.row + '" >' + l.value + "</textarea> </div> </div>"
                        }
                        return o.create(l).open(),
                            n("#" + o.config.id).on("change", ".bui-prompt-text", (function(t) {
                                s = this.value,
                                l.onChange && l.onChange.call(e, t)
                            })),
                            o.value = function(e) {
                                return void 0 === e ? s: (n("#" + o.config.id).find(".bui-prompt-text").val(e), s = e)
                            },
                            o.focus = function(e) {
                                n("#" + o.config.id).find(".bui-prompt-text").focus()
                            },
                            o
                    }
                } (window.bui || {},
                    window.libs)
            })),
            function(e, t) {
                e.hint = function(n, i) {
                    if ("number" == typeof n || "string" == typeof n) {
                        var a = n || ""; (n = {}).content = a,
                            n.onClose = i || null
                    } else "object" === _typeof(n) && (n = n);
                    var o, r, l = {
                            name: "hint",
                            handle: {},
                            on: function(t, n) {
                                return e.on.apply(l, arguments),
                                    this
                            },
                            off: b,
                            remove: m,
                            hide: function(e, t) {
                                var n = this;
                                "function" == typeof e ? (e = e, t = t || c.effect || "") : (t = e || c.effect || "", e = null);
                                u && u.hide((function() {
                                    p = !1,
                                    e && e.call(l, {
                                        toggle: u
                                    }),
                                    c.onHided && c.onHided.call(l, {
                                        toggle: u
                                    }),
                                        y.call(n, "hide", {
                                            toggle: u
                                        })
                                }), t);
                                return this
                            },
                            show: v,
                            text: function(e) {
                                return d.find(".bui-hint-inner").length && d.find(".bui-hint-inner").html(e),
                                    this
                            },
                            isShow: function() {
                                return p
                            },
                            destroy: function(e) {
                                e = 1 == e;
                                d.off("click.bui"),
                                u && u.destroy(e),
                                    b("show"),
                                    b("hide")
                            },
                            widget: function(t) {
                                var n = {
                                    toggle: u
                                };
                                return e.widget.call(n, t)
                            },
                            option: function(t, n) {
                                return e.option.call(l, t, n)
                            },
                            config: c,
                            init: g
                        },
                        c = l.config = t.extend(!0, {},
                            {
                                appendTo: "",
                                content: "",
                                uid: "",
                                timeout: 2e3,
                                autoClose: !0,
                                showClose: !1,
                                autoTrigger: !0,
                                useBox: !0,
                                opacity: 1,
                                background: "",
                                effect: "fadeInUp",
                                skin: "",
                                position: "bottom",
                                width: 0,
                                height: 0,
                                onBeforeInit: null,
                                onInited: null,
                                onClose: null,
                                onHided: null
                            },
                            e.config.hint, n),
                        s = 0,
                        u = null,
                        d = null,
                        f = "",
                        p = !1,
                        h = !1;
                    function g(n) {
                        var i = t.extend(!0, c, n);
                        return i.onBeforeInit && i.onBeforeInit.call(l, i),
                            o = e.guid(),
                            f = "top" === i.position ? "fadeInDown": "bottom" === i.position ? "fadeInUp": i.effect,
                            c = l.config = i,
                            function(n, i, a, o) {
                                var r, l = "12" + a,
                                    s = o ? e.obj(o) : t("body");
                                switch (c.position) {
                                    case "top":
                                        r = "bui-hint-top";
                                        break;
                                    case "bottom":
                                        r = "bui-hint-bottom";
                                        break;
                                    case "center":
                                        r = "bui-hint-center"
                                }
                                var u = c.height;
                                c.width = String(c.width).indexOf("%") > -1 ? 750 * parseFloat(c.width) / 100 : parseFloat(c.width),
                                    c.height = parseFloat(c.height) || 0;
                                var d = c.background ? "background:" + c.background: "",
                                    f = c.width > 0 ? "width:" + c.width / 100 + "rem;margin-left:-" + c.width / 100 / 2 + "rem;": "",
                                    p = c.height > 0 ? "height:" + c.height / 100 + "rem;": "",
                                    h = "auto" == u ? "height:auto;": p,
                                    g = "center" === c.position && c.width > 0 ? "margin-top:-" + c.height / 100 / 2 + "rem;": "",
                                    m = d + ";display:none;z-index:" + l + ";opacity:" + c.opacity + ";" + f + h + g,
                                    v = '<div id="' + n + '" class="bui-hint ' + r + " " + c.skin + '" style="' + m + '"><span class="bui-hint-inner">' + i + "</span>" + (c.showClose ? '<div class="bui-hint-close"><i class="' + e.config.icon.close + '"></i></div>': "") + "</div>";
                                document.querySelector("#" + n) || s.append(v);
                                o && s.css("position", "relative")
                            } (o, i.content, s, i.appendTo),
                            ++s,
                            d = e.objId(o),
                        u || (u = e.toggle({
                            id: d,
                            effect: f,
                            useBox: i.useBox
                        })),
                        i.autoTrigger && (p = !0, v()),
                        h ||
                        function(e) {
                            e.showClose && d.off("click.bui", ".bui-hint-close").on("click.bui", ".bui-hint-close", (function(t) {
                                e.autoTrigger ? (p = !1, u && u.hide(m)) : (p = !1, u && u.hide(e.onHided)),
                                e.onClose && e.onClose.call(l, t)
                            })),
                                h = !0
                        } (i),
                        i.uid && e.history.setUI && e.history.setUI({
                            uid: i.uid,
                            ui: l
                        }),
                        i.onInited && i.onInited.call(l, i),
                            this
                    }
                    function m(e) {
                        return u && (p = !1, u.remove(), e && e.call(l), y.call(this, "remove", {
                            toggle: u
                        }), u = null),
                            this
                    }
                    function v(e, t) {
                        var n = this;
                        return "function" == typeof e ? (e = e, t = t || c.effect || "") : (t = e || c.effect || "", e = null),
                            d.css("display", "-webkit-box"),
                        u && (p = !0, u.show((function(t) {
                            y.call(n, "show", {
                                toggle: u
                            }),
                            e && e.call(l, {
                                toggle: u
                            })
                        }), t)),
                        c.autoClose && (r && clearTimeout(r), r = setTimeout((function() {
                            c.autoTrigger ? u && u.hide((function() {
                                p = !1,
                                    m()
                            })) : u && u.hide((function() {
                                p = !1
                            })),
                            c.onClose && c.onClose.call(l)
                        }), c.timeout)),
                            this
                    }
                    function b(t, n) {
                        return e.off.apply(l, arguments),
                            this
                    }
                    function y(t) {
                        l.self = this == window || this == l ? null: this,
                            e.trigger.apply(l, arguments)
                    }
                    return g(c),
                        l
                }
            } (window.bui || {},
                window.libs),
            function(e, t) {
                e.pullrefresh = function(n) {
                    var i, a, o, r, l, c, s, u = "." + e.prefix("scroll-head"),
                        d = "." + e.prefix("scroll-main"),
                        f = "." + e.prefix("scroll-foot"),
                        p = {
                            id: "",
                            uid: "",
                            stopHandle: "",
                            childrenTop: u,
                            childrenMain: d,
                            handleMove: "main",
                            header: ".bui-page header",
                            footer: ".bui-page footer",
                            distance: 90,
                            maxDistance: 0,
                            autoLoad: !0,
                            lastUpdated: !1,
                            height: 0,
                            cacheHeight: !0,
                            refreshTips: {
                                start: "刷新中..",
                                release: "松开刷新",
                                end: "下拉刷新",
                                fail: "刷新失败,请检查下网络再试试",
                                success: "刷新成功"
                            },
                            autoinit: !0,
                            stopPropagation: !1,
                            onBeforeTouchstart: null,
                            onBeforeTouchmove: null,
                            onBeforeTouchend: null,
                            onBeforeInit: null,
                            onBeforeRefresh: null,
                            onInited: null,
                            onRefresh: null
                        },
                        h = {
                            name: "pullrefresh",
                            handle: {},
                            on: function(t, n) {
                                return e.on.apply(h, arguments),
                                    this
                            },
                            off: z,
                            reverse: function(e, t, n) {
                                x || (k.show({
                                    text: g.refreshTips.success,
                                    onlyText: !1
                                }), U(e, t), I.one("webkitTransitionEnd", (function() {
                                    k && k.hide().pause(),
                                        x = !1,
                                    n && n.call(h)
                                })));
                                return this
                            },
                            refresh: function() {
                                U(g.distance / 2, !0),
                                    k.start({
                                        text: g.refreshTips.start,
                                        onlyText: !1
                                    }),
                                g.onRefresh && s()
                            },
                            setHeight: _,
                            resize: function(e) {
                                var t = e || {
                                    height: 0,
                                    width: 0
                                };
                                this.setHeight(t),
                                t && t.width > 0 && i.width(t.width);
                                return this
                            },
                            fail: function() {
                                x = !0,
                                    U(),
                                    e.hint(g.refreshTips.fail),
                                    $.call(h, "fail")
                            },
                            lock: function(e) {
                                m = !0;
                                var t = M();
                                return i.off(t.touchstart, N).off(t.touchmove, R).off(t.touchend, A).off(t.touchcancel),
                                    U(),
                                e && e.call(h),
                                    $.call(h, "lock"),
                                    this
                            },
                            unlock: F,
                            destroy: function(e) {
                                e = 1 == e;
                                i && (i.off(), e && i.remove());
                                k && k.destroy(e),
                                    z("refresh"),
                                    z("movingdown"),
                                    z("swipedown")
                            },
                            widget: function(t) {
                                var n = {
                                    loading: k
                                };
                                return e.widget.call(n, t)
                            },
                            option: function(t, n) {
                                return e.option.call(h, t, n)
                            },
                            config: g,
                            init: j
                        },
                        g = h.config = t.extend(!0, {},
                            p, e.config.pullrefresh, n),
                        m = !1,
                        v = (new Date).getTime(),
                        b = 0,
                        y = !1,
                        w = !1,
                        x = !1,
                        k = null;
                    /hp-tablet/gi.test(navigator.appVersion);
                    var I = null,
                        T = 0,
                        O = 0,
                        C = !1,
                        P = !1,
                        S = {
                            x1: 0,
                            x2: 0,
                            y1: 0,
                            y2: 0,
                            direction: ""
                        };
                    function j(n) {
                        var l = t.extend(!0, g, n);
                        if (l.onBeforeInit && l.onBeforeInit.call(h, l), l.id) return i = e.obj(l.id),
                            g = h.config = l,
                            i[0],
                            a = i.children(u),
                            o = i.children(d),
                            r = i.children(f),
                            I = "head" === l.handleMove ? a: o,
                            s = L,
                            c = l.refreshTips.end,
                        k || (k = e.loading({
                            appendTo: a,
                            width: 15,
                            height: 15,
                            autoClose: !1,
                            text: c,
                            onlyText: !0,
                            display: "inline",
                            autoTrigger: !1,
                            mask: !1
                        })),
                        l.autoLoad && (y = !0, k.start({
                            text: l.refreshTips.start,
                            onlyText: !1
                        }), s()),
                        w ||
                        function(e) {
                            m || F();
                            w = !0
                        } (),
                            _(l.height),
                        l.uid && e.history.setUI && e.history.setUI({
                            uid: l.uid,
                            ui: h
                        }),
                        l.onInited && l.onInited.call(h, l),
                            this;
                        e.hint("pullrefresh id不能为空")
                    }
                    function L() {
                        v = (new Date).getTime(),
                        g.onBeforeRefresh && g.onBeforeRefresh.call(h),
                        g.onRefresh && g.onRefresh.call(h),
                            $.call(h, "refresh")
                    }
                    g.autoinit && j(g);
                    var E = 0;
                    function N(n) {
                        C = !0;
                        var o = n.touches ? n.touches[0] : n;
                        if (S.x1 = o.clientX, S.y1 = o.clientY, S.direction = "", E = i.scrollTop(), g.stopHandle && e.unit.checkTargetInclude(n.target, g.stopHandle)) C = !1;
                        else if (n.touches && n.touches > 1 || n.scale && 1 !== n.scale) C = !1;
                        else {
                            var r, l, s;
                            if (!1 === (g.onBeforeTouchstart && g.onBeforeTouchstart.call(h, n, S))) return ! 1;
                            c = g.lastUpdated ? (r = (new Date).getTime() - v, l = Math.floor(r / 36e5), s = Math.floor(r / 6e4), l <= 0 && s <= 0 ? "刚刚更新": l <= 0 && s > 0 ? s + "分钟前更新": "上次更新时间:" + (l < 10 ? "0" + l: l) + ":" + (s < 10 ? "0" + s: s)) : g.refreshTips.end,
                                $.call(h, "touchstart", n, S),
                            "head" === g.handleMove && a.css("zIndex", 10),
                                t(window).scrollTop() <= 0 && E <= 0 && g.onRefresh && !y ? (C = !0, t(this).css("touch-action", "none")) : (C = !1, a.css("zIndex", 0)),
                            g.stopPropagation && n.stopPropagation()
                        }
                    }
                    var B = !1,
                        D = !1;
                    function R(t) {
                        var n = t.touches ? t.touches[0] : t;
                        if (C) if (t.touches && t.touches.length > 1 || t.scale && 1 !== t.scale) U();
                        else {
                            if (S.x2 = n.clientX, S.y2 = n.clientY, !1 === (g.onBeforeTouchmove && g.onBeforeTouchmove.call(h, t, S))) return ! 1;
                            S.direction || (S.direction = e.swipeDirection(S.x1, S.x2, S.y1, S.y2)),
                                $.call(h, "touchmove", t, S),
                            "swipeleft" !== S.direction && "swiperight" !== S.direction || t.preventDefault(),
                            S.y2 - S.y1 > 0 && E <= 0 && t.preventDefault(),
                                "swipedown" == S.direction ? ($.call(h, "movingdown", t, S), U((l = Math.abs(S.y2 - S.y1)) / 2, !1), l >= g.distance ? B || (k.show({
                                    text: g.refreshTips.release,
                                    onlyText: !1
                                }).pause(), B = !0) : D || (k.show({
                                    text: c,
                                    onlyText: !1
                                }).pause(), D = !0), P = !0, g.maxDistance > g.distance && l >= g.maxDistance && (k.show({
                                    text: g.refreshTips.start,
                                    onlyText: !1
                                }), y = !0, g.onRefresh && s(), P = !1, B = !1, D = !1, T += (S = {}).y2 - S.y1, O += S.x2 - S.x1, S.lastX = O, S.lastY = T, S = {
                                    x1: 0,
                                    x2: 0,
                                    y1: 0,
                                    y2: 0,
                                    direction: ""
                                },
                                    C = !1, P = !1), t.preventDefault(), t.stopPropagation()) : "swipeup" == S.direction && ($.call(h, "movingup", t, S), P = !0, t.stopPropagation()),
                            k && k.pause()
                        } else U()
                    }
                    function A(e) {
                        return $.call(h, "touchend", e, S),
                        !1 !== (g.onBeforeTouchend && g.onBeforeTouchend.call(h, e, S)) && (t(this).css("touch-action", "auto"), P ? ("swipedown" == S.direction ? ($.call(h, S.direction, e, S), l >= g.distance ? (U(g.distance / 2), k.show({
                            text: g.refreshTips.start,
                            onlyText: !1
                        }).start(), y = !0, g.onRefresh && s()) : U(), e.stopPropagation(), B = !1, D = !1, S = {}) : "swipeup" == S.direction && ($.call(h, S.direction, e, S), e.stopPropagation()), T += S.y2 - S.y1, O += S.x2 - S.x1, S.lastX = O, S.lastY = T, S = {
                            x1: 0,
                            x2: 0,
                            y1: 0,
                            y2: 0,
                            direction: ""
                        },
                            C = !1, P = !1, void a.css("zIndex", 0)) : (S = {
                            x1: 0,
                            x2: 0,
                            y1: 0,
                            y2: 0,
                            direction: ""
                        },
                            C = !1, void(P = !1)))
                    }
                    function M() {
                        var t = {
                            touchstart: "touchstart",
                            touchmove: "touchmove",
                            touchend: "touchend",
                            touchcancel: "touchcancel"
                        };
                        return e.platform.isPC() && (t = {
                            touchstart: "mousedown",
                            touchmove: "mousemove",
                            touchend: "mouseup",
                            touchcancel: "mouseleave"
                        }),
                            t
                    }
                    function F(t) {
                        var n = M();
                        return m = !1,
                            i.on(n.touchstart, N).on(n.touchmove, R).on(n.touchend, A).on(n.touchcancel, (function(t) {
                                C = !1,
                                    P = !1,
                                !e.platform.isPC() && U(t)
                            })),
                        t && t.call(this),
                            $.call(h, "unlock"),
                            this
                    }
                    function U(e, t) {
                        y = !1;
                        var n = (t = 0 != t) ? "all 300ms ease-out": "none";
                        return H(0, (e = e || 0) + "px", n, I),
                        r.length && ("head" === g.handleMove ? r.find(".bui-loading-text").text("") : H(0, e + "px", n, r)),
                            this
                    }
                    function H(e, t, n, a) {
                        a = a || i;
                        var o = e = e || 0,
                            r = t = t || 0,
                            l = String(e).indexOf("%") > -1 ? String(e) : o,
                            c = String(t).indexOf("%") > -1 ? String(t) : r;
                        n = "number" == typeof n ? "all " + n + "ms": n || "all 300ms";
                        try {
                            a.css({
                                "-webkit-transition": n,
                                transition: n,
                                "-webkit-transform": "translate(" + l + "," + c + ")",
                                transform: "translate(" + l + "," + c + ")"
                            }),
                                a.one("webkitTransitionEnd", (function() {
                                    a.css({
                                        "-webkit-transition": "none",
                                        transition: "none"
                                    })
                                }))
                        } catch(e) {
                            console.log(e.message)
                        }
                    }
                    function _(t) {
                        e.$(".bui-page");
                        var n = i.parents(".active").length ? i.parents(".active") : i.parents(".bui-tab-main"),
                            a = ((n.length ? n.height() : i.parents(".bui-tab").height()) || i.parents(".bui-page").height() || i.parents(".bui-dialog-main")) - (i[0] && i[0].offsetTop),
                            o = t ? parseFloat(t) : a;
                        0 == b && (b = o),
                            g.cacheHeight,
                            i.height(b)
                    }
                    function z(t, n) {
                        return e.off.apply(h, arguments),
                            this
                    }
                    function $(t) {
                        h.self = this == window || this == h ? null: this,
                            e.trigger.apply(h, arguments)
                    }
                    return h
                }
            } (window.bui || {},
                window.libs),
            function(e, t) {
                e.scroll = function(n) {
                    var i, a, o, r, l, c, s, u, d, f = "." + e.prefix("list"),
                        p = "." + e.prefix("scroll-head"),
                        h = "." + e.prefix("scroll-main"),
                        g = "." + e.prefix("scroll-foot"),
                        m = {
                            id: "",
                            uid: "",
                            childrenTop: p,
                            childrenMain: h,
                            childrenBottom: g,
                            children: f,
                            stopHandle: "",
                            header: ".bui-page header",
                            footer: ".bui-page footer",
                            handle: "li",
                            distance: 100,
                            endDistance: 5,
                            height: 0,
                            page: 1,
                            pageSize: 10,
                            stopPropagation: !1,
                            handleMove: "main",
                            lastUpdated: !0,
                            autoRefresh: !1,
                            autoNext: !0,
                            autoScroll: !0,
                            refresh: !0,
                            cacheHeight: !0,
                            refreshPage: !0,
                            scroll: !0,
                            delayTime: 100,
                            direction: "y",
                            scrollTips: {
                                start: "努力加载中..",
                                end: "上拉加载更多",
                                nodata: "没有更多内容",
                                last: "没有更多内容",
                                fail: "点击重新加载"
                            },
                            refreshTips: {
                                start: "刷新中..",
                                release: "松开刷新",
                                end: "下拉刷新",
                                fail: "点击加载",
                                success: "刷新成功"
                            },
                            autoinit: !0,
                            onBeforeTouchstart: null,
                            onBeforeTouchmove: null,
                            onBeforeTouchend: null,
                            onBeforeInit: null,
                            onInited: null,
                            onScrolling: null,
                            onBeforeRefresh: null,
                            onRefresh: null,
                            onBeforeLoad: null,
                            onLoad: null
                        },
                        v = {
                            name: "scroll",
                            handle: {},
                            on: function(t, n) {
                                return e.on.apply(v, arguments),
                                    this
                            },
                            off: F,
                            reverse: function(e) {
                                return u && u.reverse(),
                                e && e.call(v, u),
                                    this
                            },
                            updateCache: R,
                            updatePage: R,
                            getPage: function() {
                                return b.page
                            },
                            getCache: function(e) {
                                return L
                            },
                            clearCache: function(e) {
                                return void(L = {})
                            },
                            resize: function(e) {
                                var t = e || {
                                    height: 0,
                                    width: 0
                                };
                                w = 0,
                                    this.setHeight(t),
                                t && t.width > 0 && i.width(t.width);
                                return this
                            },
                            fail: function(e, t) {
                                return k = !0,
                                    x.show({
                                        text: b.scrollTips.fail,
                                        onlyText: !0,
                                        callback: function(n) {
                                            B(e, t)
                                        }
                                    }).hideRing(),
                                u && u.lock(),
                                    this
                            },
                            filter: function(t, n) {
                                var i, a, o = [];
                                if (t && n) for (i in L) {
                                    var r = e.array.filter(L[i], t, n) || [];
                                    if (r.length) for (a in r) o.push(r[a])
                                }
                                return o
                            },
                            to: A,
                            toBottom: function(e) {
                                i[0] && (i[0].scrollTop = i[0].scrollHeight, e && e.call(v));
                                return this
                            },
                            scrollTop: function(e) {
                                var n = 0;
                                n = "object" === _typeof(e) || "string" == typeof e && e.indexOf("#") > -1 ? t(e)[0].offsetTop: parseInt(e) || 0;
                                return a.scrollTop = n,
                                    this
                            },
                            lock: function() {
                                return i.off("scroll"),
                                    U.call(v, "lock"),
                                    this
                            },
                            unlock: function(t) {
                                return i.on("scroll", e.unit.debounce(N, b.delayTime)),
                                    U.call(v, "unlock"),
                                    this
                            },
                            lockrefresh: function() {
                                return u.lock(),
                                    this
                            },
                            unlockrefresh: function() {
                                return u.unlock(),
                                    this
                            },
                            refresh: function() {
                                return A(1),
                                u && u.refresh(),
                                    this
                            },
                            load: function(e) {
                                return P = e = e || P,
                                s && s.call(v, P, S),
                                    this
                            },
                            nextPage: function() {
                                return s && s.call(v, ++P, S),
                                    this
                            },
                            prevPage: function() {
                                P-->0 && s && s.call(v, P--, S);
                                return this
                            },
                            setHeight: M,
                            isRefresh: function() {
                                return C
                            },
                            destroy: function(e) {
                                e = 1 == e;
                                i && (i.off("scroll"), e && i.remove());
                                u && u.destroy(e),
                                x && x.destroy(e),
                                    F("loadpage"),
                                    F("lastpage"),
                                    F("scrolltop"),
                                    F("scrollbottom"),
                                    F("scrollend")
                            },
                            widget: function(t) {
                                var n = {
                                    pullrefresh: u,
                                    loading: x
                                };
                                return e.widget.call(n, t)
                            },
                            option: function(t, n) {
                                return e.option.call(v, t, n)
                            },
                            config: b,
                            init: E
                        },
                        b = v.config = t.extend(!0, {},
                            m, e.config.scroll, n),
                        y = b.page,
                        w = 0,
                        x = null,
                        k = !1,
                        I = !0,
                        T = !0,
                        O = !1,
                        C = !1,
                        P = b.page,
                        S = b.pageSize,
                        j = !1,
                        L = {};
                    function E(n) {
                        var o = t.extend(!0, b, n);
                        if (o.onBeforeInit && o.onBeforeInit.call(v, o), t(window), o.id) {
                            i = e.obj(o.id),
                                P = o.page,
                                S = o.pageSize,
                                b = v.config = o,
                                I = !0,
                                T = !0,
                                O = !1,
                                C = !1,
                                a = i[0],
                                i.children(p),
                                l = i.children(h),
                                r = i.children(g),
                                l.css({
                                    position: "relative"
                                }),
                            x || (x = e.loading({
                                appendTo: r,
                                width: 20,
                                height: 20,
                                autoClose: !1,
                                text: o.scrollTips.start,
                                zIndex: 10,
                                display: "inline",
                                autoTrigger: !1,
                                mask: !1
                            })),
                                c = D,
                                s = B,
                                u ? u.init({
                                    id: o.id,
                                    onBeforeRefresh: o.onBeforeRefresh,
                                    onRefresh: c,
                                    distance: o.distance,
                                    maxDistance: o.maxDistance,
                                    lastUpdated: o.lastUpdated,
                                    height: o.height,
                                    cacheHeight: o.cacheHeight,
                                    stopPropagation: o.stopPropagation,
                                    handleMove: o.handleMove,
                                    refreshTips: o.refreshTips,
                                    autoLoad: o.autoRefresh
                                }) : o.refresh && o.onRefresh ? ((u = e.pullrefresh({
                                    id: o.id,
                                    onBeforeRefresh: o.onBeforeRefresh,
                                    onRefresh: c,
                                    distance: o.distance,
                                    stopHandle: o.stopHandle,
                                    maxDistance: o.maxDistance,
                                    lastUpdated: o.lastUpdated,
                                    header: o.header,
                                    footer: o.footer,
                                    height: o.height,
                                    handleMove: o.handleMove,
                                    cacheHeight: o.cacheHeight,
                                    stopPropagation: o.stopPropagation,
                                    onBeforeTouchstart: o.onBeforeTouchstart,
                                    onBeforeTouchmove: o.onBeforeTouchmove,
                                    onBeforeTouchend: o.onBeforeTouchend,
                                    refreshTips: o.refreshTips,
                                    autoLoad: o.autoRefresh
                                })).lock(), k = !0) : "y" === o.direction && M(o.height),
                            "x" === o.direction && i.addClass("bui-box-center").attr("direction", "x");
                            try {
                                s && s.call(v, P, S)
                            } catch(t) {
                                e.showLog(t, "bui.scroll.init")
                            }
                            return j || o.scroll &&
                            function(t) {
                                i.off("scroll").on("scroll", e.unit.debounce(N, t.delayTime)),
                                    j = !0
                            } (o),
                            o.uid && e.history.setUI && e.history.setUI({
                                uid: o.uid,
                                ui: v
                            }),
                            o.onInited && o.onInited.call(v, o),
                                this
                        }
                        e.hint("scroll id不能为空")
                    }
                    function N(e) {
                        var t = e.target,
                            n = t.scrollTop || 0,
                            i = t.scrollLeft || 0;
                        "y" === b.direction ? 0 == n ? U.call(v, "scrolltop", e) : t.scrollTop + t.clientHeight >= (t && t.scrollHeight - b.endDistance) && b.onLoad && (b.page = v.config.page = ++P, b.autoScroll && s && s.call(v, b.page, S), U.call(v, "scrollbottom", e)) : 0 == i ? U.call(v, "scrolltop", e) : t.scrollLeft + t.clientWidth >= (t && t.scrollWidth - b.endDistance) && b.onLoad && (b.page = v.config.page = ++P, b.autoScroll && s && s.call(v, b.page, S), U.call(v, "scrollbottom", e)),
                            U.call(v, "scrollend", e),
                        b.onScrolling && b.onScrolling.call(v, e, v)
                    }
                    function B(e, t) {
                        return C = !1,
                        T && !O && (b.page = v.config.page = e, b.onBeforeLoad && b.onBeforeLoad.call(v, e, t), b.onLoad && x && x.start({
                            text: b.scrollTips.start,
                            onlyText: !1
                        }), b.onLoad && b.onLoad.call(v, e, t)),
                        k && b.refresh && u && u.unlock(),
                            this
                    }
                    function D() {
                        T = !0,
                            O = !1,
                            I = !0,
                            C = !0,
                        b.refreshPage && (P = y, S = b.pageSize, L = {}),
                            b.page = v.config.page = P,
                            U.call(v, "refresh", P),
                        b.onRefresh && b.onRefresh.call(v, P, S)
                    }
                    function R(t, n, a) {
                        a = 0 != a;
                        if (!n || "array" != e.typeof(n)) return x && x.stop(),
                            e.showLog("scroll 控件的updatePage 第2个参数,必须是一个数组,如果是list控件,检测field的data映射是否准确", "bui.scroll.updatePage"),
                            void(n = []);
                        n = n,
                        d && clearTimeout(d),
                            d = setTimeout((function() {
                                var e = parseInt(i.height()),
                                    o = parseInt(i.find(b.childrenMain)[0] && i.find(b.childrenMain)[0].scrollHeight);
                                if (a) if (n && n.length > S - 1) {
                                    if (T = !0, O = !1, I = !1, x && x.start({
                                        text: b.scrollTips.end,
                                        onlyText: !0
                                    }), o >= 10 && o < e && b.autoNext && b.onLoad) {
                                        var r = ++P;
                                        s && s.call(v, r, S)
                                    }
                                    U.call(v, "loadpage", n, P)
                                } else {
                                    T = !1,
                                        O = !0;
                                    var l = I && n && n.length < 1 ? b.scrollTips.nodata: b.scrollTips.last;
                                    x && x.start({
                                        text: l,
                                        onlyText: !0
                                    }),
                                        U.call(v, "loadpage", n, P),
                                        U.call(v, "lastpage", n, P)
                                } else T = !1,
                                    O = !0,
                                x && x.stop();
                                return L[t] = n
                            }), 10)
                    }
                    function A(e, t) {
                        e = e || 0;
                        o = i.find(b.children).children(b.handle);
                        var n = i.height(),
                            r = parseFloat(o.height()),
                            l = a.scrollHeight,
                            c = r * parseInt(e) - r;
                        return l > n && (a.scrollTop = c, U.call(v, "to", e), t && t.call(v, parseInt(e))),
                            this
                    }
                    function M(t) {
                        e.$(".bui-page");
                        var n = i.parents(".active").length ? i.parents(".active") : i.parents(".bui-tab-main"),
                            a = ((n.length ? n.height() : i.parents(".bui-tab").height()) || i.parents(".bui-page").height()) - (i[0] && i[0].offsetTop),
                            o = t ? parseFloat(t) : a;
                        0 == w && (w = o),
                            b.cacheHeight,
                            i.height(w)
                    }
                    function F(t, n) {
                        return e.off.apply(v, arguments),
                            this
                    }
                    function U(t) {
                        v.self = this == window || this == v ? null: this,
                            e.trigger.apply(v, arguments)
                    }
                    return b.autoinit && E(b),
                        v
                }
            } (window.bui || {},
                window.libs),
            function(e, t) {
                e.list = function(n) {
                    var i, a, o = {
                            name: "list",
                            handle: {},
                            on: function(t, n) {
                                return e.on.apply(o, arguments),
                                    this
                            },
                            off: x,
                            empty: w,
                            updatePage: function() {
                                var e = f.getPage();
                                return f.updatePage(e, d),
                                    this
                            },
                            getPage: function() {
                                return f.getPage()
                            },
                            getData: function() {
                                return c
                            },
                            getItem: function(t, n) {
                                if (/\d/.test(t) && void 0 === n) {
                                    var i = ( + t - 1) * r.pageSize;
                                    return c.splice(i, r.pageSize)
                                }
                                return t && "string" == typeof n ? e.array.get(c, t, n) : e.array.get(c, t, "id")
                            },
                            refresh: function() {
                                return k.call(this, "refreshbefore"),
                                    f.refresh(),
                                    this
                            },
                            reload: function() {
                                return k.call(this, "refreshbefore"),
                                    y(),
                                    this
                            },
                            replace: function(e) {
                                return w(),
                                    m(_objectSpread({
                                            page: 1
                                        },
                                        e)),
                                    this
                            },
                            resize: function(e) {
                                return f.resize(e),
                                    this
                            },
                            modify: function(e) {
                                return r = o.config = t.extend(!0, {},
                                    o.config, e),
                                    p = r.data,
                                    this
                            },
                            destroy: function(e) {
                                e = 1 == e;
                                i && (i.off("click.bui"), e && i.remove(), i = null);
                                x("refreshbefore"),
                                    x("refresh"),
                                    x("success"),
                                    x("fail"),
                                f && f.destroy(e)
                            },
                            widget: function(t) {
                                var n = {
                                    scroll: f,
                                    ajax: u
                                };
                                return e.widget.call(n, t)
                            },
                            option: function(n, i) {
                                return "data" == n && void 0 !== i ?
                                    function(n, i) {
                                        var a;
                                        if ("string" == typeof i) try {
                                            a = JSON.parse(i)
                                        } catch(t) {
                                            return void e.showLog("data 参数必须为对象", "bui.list.modifyData")
                                        } else a = i;
                                        return p = t.extend(!0, {},
                                            g, a)
                                    } (0, i) : e.option.call(o, n, i)
                            },
                            config: r,
                            init: m
                        },
                        r = o.config = t.extend(!0, {},
                            {
                                id: "",
                                uid: "",
                                url: "",
                                data: {},
                                method: "GET",
                                dataType: "json",
                                headers: {},
                                contentType: null,
                                timeout: 2e4,
                                field: {
                                    page: "page",
                                    size: "pageSize",
                                    data: ""
                                },
                                scrollTips: {
                                    start: "努力加载中..",
                                    end: "上拉加载更多",
                                    nodata: "没有更多内容",
                                    last: "没有更多内容",
                                    fail: "点击重新加载"
                                },
                                refreshTips: {
                                    start: "刷新中..",
                                    release: "松开刷新",
                                    end: "下拉刷新",
                                    fail: "点击加载",
                                    success: "刷新成功"
                                },
                                lastUpdated: !1,
                                cacheHeight: !0,
                                ajax: null,
                                page: 1,
                                pageSize: 10,
                                autoNext: !0,
                                refreshPage: !0,
                                autoUpdatePage: !0,
                                autoScroll: !0,
                                stopPropagation: !1,
                                autoinit: !0,
                                urlrule: !1,
                                native: !0,
                                needNative: !1,
                                relative: !1,
                                refresh: !0,
                                direction: "y",
                                stopHandle: "",
                                children: ".bui-list",
                                handle: ".bui-btn",
                                header: ".bui-page header",
                                footer: ".bui-page footer",
                                height: 0,
                                commandRefresh: "html",
                                commandLoad: "append",
                                scroll: !0,
                                localData: null,
                                template: null,
                                onBeforeTouchstart: null,
                                onBeforeTouchmove: null,
                                onBeforeTouchend: null,
                                onBeforeInit: null,
                                onInited: null,
                                onBeforeRefresh: null,
                                onRefresh: null,
                                onLoad: null,
                                onFail: null,
                                callback: null
                            },
                            e.config.list, n),
                        l = r.url,
                        c = [],
                        s = r.page;
                    r.page;
                    var u, d, f, p = {},
                        h = !1,
                        g = r.data;
                    function m(n) {
                        var l = r = t.extend(!0, r, n);
                        l.onBeforeInit && l.onBeforeInit.call(o, l),
                            i = e.obj(l.id),
                            a = i.find(l.children),
                            r = o.config = l,
                            p = r.data;
                        var c = 0 == r.refresh ? null: y,
                            s = {
                                id: l.id,
                                children: l.children,
                                handle: l.handle,
                                header: l.header,
                                footer: l.footer,
                                page: l.page,
                                pageSize: l.pageSize,
                                distance: l.distance,
                                stopHandle: l.stopHandle,
                                maxDistance: l.maxDistance,
                                height: l.height,
                                refresh: l.refresh,
                                autoNext: l.autoNext,
                                refreshPage: l.refreshPage,
                                autoScroll: l.autoScroll,
                                scroll: l.scroll,
                                cacheHeight: l.cacheHeight,
                                stopPropagation: l.stopPropagation,
                                scrollTips: l.scrollTips,
                                refreshTips: l.refreshTips,
                                direction: l.direction,
                                lastUpdated: l.lastUpdated,
                                handleMove: l.handleMove,
                                onBeforeTouchstart: l.onBeforeTouchstart,
                                onBeforeTouchmove: l.onBeforeTouchmove,
                                onBeforeTouchend: l.onBeforeTouchend,
                                onBeforeRefresh: l.onBeforeRefresh,
                                onBeforeLoad: l.onBeforeLoad,
                                onRefresh: c,
                                onLoad: b
                            };
                        return "html" != l.commandRefresh && (l.refreshPage = !1),
                        l.urlrule && (l.url = v(l)),
                            f ? f.init(s) : f = e.scroll(s),
                            o.toBottom = f.toBottom,
                            o.scrollTop = f.scrollTop,
                            o.to = f.to,
                        h ||
                        function(e) {
                            e.callback && i.off("click.bui", e.handle).on("click.bui", e.handle, (function(t) {
                                e.callback.call(o, t)
                            })),
                                h = !0
                        } (l),
                        l.uid && e.history.setUI && e.history.setUI({
                            uid: l.uid,
                            ui: o
                        }),
                        l.onInited && l.onInited.call(o, l),
                            this
                    }
                    function v(e) {
                        return l.replace("(page)", e.page).replace("(size)", e.pageSize)
                    }
                    function b(i, l, s) {
                        var h = this,
                            m = s || r.commandLoad;
                        if (p = t.extend(!0, {},
                            g, r.data, p), r.field.page.length && e.unit.setKeyValue(r.field.page, i, p), r.field.size.length && e.unit.setKeyValue(r.field.size, l, p), r.page = o.config.page = i, r.data = p, !r.localData) return r.urlrule && (r.url = v(r)),
                            r.success = b,
                            r.fail = function(e, t, n) {
                                k.call(h, "fail", e, i, n),
                                r.onFail && r.onFail.call(o, e, i, n),
                                f && f.fail(i, l, e)
                            },
                            u = r.ajax ? r.ajax(r) : e.ajax(r),
                            this;
                        function b(t, l, s) {
                            var u, p, g;
                            u = "string" == typeof t ? t && JSON.parse(t) || {}: t || {};
                            var v, b, y, w;
                            if ("string" == typeof(p = r && r.field && "" == r.field.data ? u || [] : "object" === e.typeof(u) && e.unit.getKeyValue(r.field.data, u) || []) && /\[?.+\]$/g.test(p)) try {
                                g = JSON.parse(p)
                            } catch(t) {
                                g = p,
                                    e.showLog(t)
                            } else g = p;
                            p = g && "array" === e.typeof(g) ? g: [],
                            r.localData && (v = i, b = r.pageSize, p = (w = (v - 1) * b) + b >= (y = p).length ? y.slice(w, y.length) : y.slice(w, w + b));
                            var x = n.template && n.template.call(o, p, u, i) || "";
                            p.length && e.array.merge(c, p),
                            a && a[m](x);
                            var I = f && f.isRefresh() || !1;
                            k.call(h, "success", t, i, s);
                            try {
                                I ? (r.onRefresh && r.onRefresh.call(o, f, u, s), k.call(h, "refresh", t, i, s), r.refresh && f.reverse()) : (k.call(this, "onloadbefore"), r.onLoad && r.onLoad.call(o, f, u, s), k.call(h, "onload", t, i, s)),
                                    r.localData ? r.autoUpdatePage && h && h.updatePage(i, p) : r.autoUpdatePage && f && f.updatePage(i, p),
                                    d = p
                            } catch(e) {}
                        }
                        "function" == typeof r.localData ? b(r.localData()) : b(r.localData)
                    }
                    function y() {
                        var e = s;
                        r.refreshPage || (e = o.config.page + 1);
                        var t = r.pageSize;
                        return k.call(this, "refreshbefore"),
                            b(e, t, r.commandRefresh),
                            this
                    }
                    function w() {
                        return c = [],
                            a.html(""),
                            this
                    }
                    function x(t, n) {
                        return e.off.apply(o, arguments),
                            this
                    }
                    function k(t) {
                        o.self = this == window || this == o ? null: this,
                            e.trigger.apply(o, arguments)
                    }
                    return r.autoinit && m(r),
                        o
                }
            } (window.bui || {},
                window.libs),
            function(e, t) {
                e.searchbar = function(n) {
                    var i, a, o, r, l = {
                            id: "",
                            uid: "",
                            handle: ".icon-search,.btn-search",
                            handleRemove: "." + e.config.icon.remove,
                            delayTime: 400,
                            onInput: null,
                            onChange: null,
                            onRemove: null,
                            autoinit: !0,
                            onBeforeInit: null,
                            onInited: null,
                            callback: null
                        },
                        c = {
                            name: "searchbar",
                            handle: {},
                            on: function(t, n) {
                                return e.on.apply(c, arguments),
                                    this
                            },
                            off: f,
                            search: function(e) {
                                var t = e || a;
                                return a = t,
                                    p.call(this, "search", {},
                                        t),
                                s.callback && s.callback.call(this, {},
                                    t),
                                    this
                            },
                            reset: function() {
                                return o.val(""),
                                    r.hide(),
                                    this
                            },
                            value: function(e) {
                                if (void 0 === e) return o.val();
                                o.val(e),
                                e && r.show();
                                return c
                            },
                            destroy: function(e) {
                                e = 1 == e;
                                i && (i.off(), e && i.remove());
                                f("search"),
                                    f("remove"),
                                    f("input")
                            },
                            widget: function(t) {
                                return e.widget.call({},
                                    t)
                            },
                            option: function(t, n) {
                                return e.option.call(c, t, n)
                            },
                            config: s,
                            init: d
                        },
                        s = c.config = t.extend(!0, {},
                            l, e.config.searchbar, n),
                        u = !1;
                    function d(n) {
                        var l = t.extend(!0, s, n);
                        return l.onBeforeInit && l.onBeforeInit.call(c, l),
                            i = e.obj(l.id),
                            c.$el = i,
                            s = c.config = l,
                            o = i.find("input"),
                        (r = i.find(l.handleRemove)).length < 1 && (o.after('<i class="' + l.handleRemove.substr(1) + '"></i>'), r = i.find(l.handleRemove)),
                            r.hide(),
                        u ||
                        function(e) {
                            i.off("click.bui", e.handle).on("click.bui", e.handle, (function(t) {
                                document.activeElement.blur();
                                var n = o.val();
                                a = n,
                                    p.call(c, "search", t, n),
                                e.callback && e.callback.call(c, t, n)
                            })),
                                i.off("click.bui", e.handleRemove).on("click.bui", e.handleRemove, (function(n) {
                                    document.activeElement.blur(),
                                        o.val("");
                                    var i = o.val();
                                    a = i,
                                        t(this).hide(),
                                        p.call(c, "remove", n, i),
                                    e.onRemove && e.onRemove.call(c, n, i)
                                }));
                            var n = !1,
                                l = null;
                            e.onInput && i.off("input", "input").on("compositionstart", (function() {
                                n = !0
                            })).on("compositionend", (function(t) {
                                n = !1;
                                var i = o.val();
                                e.onInput.call(c, t, i)
                            })).on("input", "input", (function(t) {
                                var i = o.val();
                                a = i,
                                    i ? r.show() : r.hide(),
                                    p.call(c, "input", t, i),
                                n || (l && clearTimeout(l), l = setTimeout((function() {
                                    e.onInput.call(c, t, i),
                                        l = null
                                }), e.delayTime))
                            })),
                            e.onChange && i.off("change", "input").on("change", "input", (function(t) {
                                var n = o.val();
                                a = n,
                                    n ? r.show() : r.hide(),
                                    p.call(c, "change", t, n),
                                    e.onChange.call(c, t, n)
                            })),
                                u = !0
                        } (l),
                        l.uid && e.history.setUI && e.history.setUI({
                            uid: l.uid,
                            ui: c
                        }),
                        l.onInited && l.onInited.call(c, l),
                            this
                    }
                    function f(t, n) {
                        return e.off.apply(c, arguments),
                            this
                    }
                    function p(t) {
                        c.self = this == window || this == c ? null: this,
                            e.trigger.apply(c, arguments)
                    }
                    return s.autoinit && d(s),
                        c
                }
            } (bui || {},
                libs),
            function(e, t) {
                e.select = function(n) {
                    var i, a, o, r, l, c, s = {
                            name: "select",
                            handle: {},
                            on: function(t, n) {
                                return e.on.apply(s, arguments),
                                    this
                            },
                            off: A,
                            value: N,
                            values: function() {
                                var e = [];
                                return w.forEach((function(t, n) {
                                    e.push({
                                        value: t,
                                        name: y[n],
                                        index: x[n],
                                        icon: k[n]
                                    })
                                })),
                                    e
                            },
                            allValues: function() {
                                var e = [];
                                return u.data && u.data.forEach((function(t, n) {
                                    var i = l.eq(n).find("input").prop("checked");
                                    t.checked = i,
                                        e.push(t)
                                })),
                                    e
                            },
                            index: function() {
                                return x.join(",")
                            },
                            active: D,
                            unactive: function(t) {
                                var n = [];
                                String(t).indexOf(",") > -1 ? n = t.split(",") : n.push(parseInt(t));
                                return n.forEach((function(t, n) {
                                    var i = l.eq(t).find("input"),
                                        a = i.val(),
                                        o = i.attr("text");
                                    e.array.delete(y, o),
                                        e.array.delete(w, a),
                                        i.prop("checked", null)
                                })),
                                    M.call(s, "change", {}),
                                    this
                            },
                            disabled: function() {
                                var e = i;
                                return e && e.addClass("disabled"),
                                    this
                            },
                            enabled: function() {
                                var e = i;
                                return e && e.removeClass("disabled"),
                                    this
                            },
                            disabledSelect: function(e) {
                                if (void 0 === e) l.find("input").attr("disabled", !0);
                                else {
                                    if ("number" != typeof e) return void console.log("index 必须为数字");
                                    l.eq(e).find("input").attr("disabled", !0)
                                }
                                return this
                            },
                            enabledSelect: function(e) {
                                if (void 0 === e) l.find("input").removeAttr("disabled");
                                else {
                                    if ("number" != typeof e) return void console.log("index 必须为数字");
                                    l.eq(e).find("input").removeAttr("disabled")
                                }
                                return this
                            },
                            template: b,
                            empty: function() {
                                return a.html(""),
                                    u.data = [],
                                    T = !1,
                                    this
                            },
                            text: B,
                            show: L,
                            hide: E,
                            selectAll: function() {
                                if ("checkbox" == u.type) {
                                    D(u.data.map((function(e, t) {
                                        return t
                                    })).join(","))
                                } else D(0);
                                return this
                            },
                            selectNone: R,
                            reset: function() {
                                return R(),
                                    B(I),
                                    this
                            },
                            clearSearch: function() {
                                a.find(".bui-searchbar-close").trigger("click")
                            },
                            unselect: function() {
                                if ("checkbox" == u.type) {
                                    var t = y.map((function(e, t) {
                                        return e
                                    }));
                                    w.map((function(e, t) {
                                        return e
                                    })),
                                        y = [],
                                        w = [],
                                    u.data && u.data.forEach((function(n, i) {
                                        var a = l.eq(i).find("input");
                                        e.array.index(t, n[h]) > -1 ? a.prop("checked", null) : (a.prop("checked", !0), y.push(n[h]), w.push(n[g]))
                                    })),
                                        N(w.join(",") || ""),
                                        B(y.join(",") || "")
                                } else R();
                                return this
                            },
                            unselected: function(t) {
                                var n = [];
                                String(t).indexOf(",") > -1 ? n = t.split(",") : n.push(t);
                                return n.forEach((function(t, n) {
                                    u.data.forEach((function(n, i) {
                                        var a = n[h] || n,
                                            o = n[g] || n;
                                        t != o && t != a || (l.eq(i).find("input").prop("checked", null), e.array.remove(y, a), e.array.remove(w, o))
                                    }))
                                })),
                                    M.call(s, "change", {}),
                                    this
                            },
                            destroy: function(e) {
                                e = 1 == e;
                                a && (a.off(), e && a.remove());
                                i && (i.off("click.bui"), e && i.remove());
                                return c && c.destroy(e),
                                    T = !1,
                                    A("show"),
                                    A("hide"),
                                    A("change"),
                                    A("select"),
                                    A("check"),
                                    A("uncheck"),
                                    this
                            },
                            widget: function(t) {
                                var n = {
                                    dialog: c || {}
                                };
                                return e.widget.call(n, t)
                            },
                            option: function(t, n) {
                                return e.option.call(s, t, n)
                            },
                            config: u,
                            init: O
                        },
                        u = s.config = t.extend(!0, {},
                            {
                                id: "",
                                uid: "",
                                trigger: "",
                                triggerChildren: ".span1",
                                handle: ".bui-list .bui-btn",
                                className: "",
                                name: "",
                                appendTo: "",
                                data: [],
                                popup: !0,
                                title: "",
                                autoClose: !1,
                                placeholder: "",
                                field: {
                                    name: "name",
                                    value: "value",
                                    image: "image",
                                    icon: "icon"
                                },
                                height: 0,
                                width: 0,
                                mask: !0,
                                useBox: !1,
                                zIndex: 110,
                                change: !0,
                                toggle: !1,
                                effect: "fadeInUp",
                                type: "select",
                                direction: "left",
                                position: "bottom",
                                fullscreen: !1,
                                needSearch: !1,
                                value: "",
                                buttons: [],
                                onChange: null,
                                autoinit: !0,
                                onBeforeOpen: null,
                                onBeforeInit: null,
                                template: null,
                                onInited: null,
                                callbackHandle: ".bui-dialog-foot .bui-btn",
                                callback: null
                            },
                            e.config.select, n),
                        d = e.guid(),
                        f = u.name || e.guid(),
                        p = !0,
                        h = u.field.name,
                        g = u.field.value,
                        m = u.field.image,
                        v = u.field.icon,
                        b = null,
                        y = [],
                        w = [],
                        x = [],
                        k = [],
                        I = "",
                        T = !1;
                    function O(n) {
                        var f = t.extend(!0, u, n);
                        if (f.onBeforeInit && f.onBeforeInit.call(s, f), f.appendTo = f.appendTo || e.hasRouter && router.currentPage() || "body", y = [], w = [], x = [], k = [], u = s.config = f, b = "function" == typeof f.template ? f.template: j, f.data && f.data.length || T) var h = b.call(this, f.data);
                        if (s.template = b, !f.popup) {
                            if (!f.id) return void e.hint("select id 必须有");
                            a = e.obj(f.id),
                            (f.data && f.data.length || T) && a.html(h)
                        }
                        if (f.popup) if (d = f.id && f.id !== f.trigger && e.obj(f.id).attr("id") || d, a = e.obj(d), c) a.find(".bui-dialog-list").html(h);
                        else {
                            var g = function(n) {
                                var i = "",
                                    a = '<div class="bui-searchbar bui-box">\n                                    <div class="span1">\n                                        <div class="bui-input">\n                                            <i class="'.concat(e.config.icon.search, '"></i>\n                                            <input type="search" value="" placeholder="请输入关键字" />\n                                            <div class="bui-searchbar-close"><i class="').concat(e.config.icon.remove, '"></i></div>\n                                        </div>\n                                    </div>\n                                </div>'),
                                    o = '<div class="bui-dialog-result" style="top:"></div>',
                                    r = u.templateTitle ? u.templateTitle.call(s, u) || "": '<div class="bui-dialog-title">'.concat(u.title, "</div>");
                                u.popup && (i += '<div id="' + d + '" class="bui-dialog bui-dialog-select">', (u.title || u.needSearch) && (i += '<div class="bui-dialog-head">\n                                '.concat(u.title || u.templateTitle ? r: "", "\n                                ").concat(u.needSearch ? a: "", "\n                            </div>")), i += '  <div class="bui-dialog-main">');
                                u.popup && (i += '<div class="bui-dialog-list"></div>', i += "  </div>", u.buttons.length > 0 && (i += '    <div class="bui-dialog-foot bui-box">', t.each(u.buttons, (function(e, t) {
                                    i += '        <div class="span1">',
                                        i += '             <div class="bui-btn ' + (t.className || "") + '" value="' + (t.value || "") + '">' + (t.name || t) + "</div>",
                                        i += "        </div>"
                                })), i += "    </div>"), i += "".concat(u.needSearch ? o: ""), i += "</div>");
                                return i
                            } ();
                            t(f.appendTo).append(g),
                                (a = e.obj(d)).find(".bui-dialog-list").html(h),
                                (c = e.dialog({
                                    id: d,
                                    effect: f.effect,
                                    mask: f.mask,
                                    zIndex: f.zIndex,
                                    position: f.position,
                                    autoClose: !1,
                                    useBox: f.useBox,
                                    height: f.height,
                                    width: f.width,
                                    zoom: !1,
                                    fullscreen: f.fullscreen,
                                    onMask: function(e) {
                                        E()
                                    }
                                })).on("open", (function() {
                                    if (f.needSearch) {
                                        var e = a.find(".bui-dialog-head").height(),
                                            t = a.find(".bui-dialog-foot").height(),
                                            n = a.height() - e - t;
                                        a.find(".bui-dialog-result").css({
                                            top: e + "px",
                                            bottom: t + "px",
                                            height: n + "px"
                                        })
                                    }
                                })),
                            f.appendTo && f.id && f.data && !f.data.length && (t(f.appendTo).append(a.prop("outerHTML")), a.remove(), a = t(f.appendTo).find(f.id))
                        }
                        return s.$el = a,
                            l = a.find(f.handle),
                        f.data && f.data.length < 1 && C(),
                            function(n) {
                                i = e.obj(n.trigger),
                                    I = n.placeholder || i && i.text() || n.title,
                                    r = i && i.find(n.triggerChildren).length ? i.find(n.triggerChildren) : i,
                                n.trigger && n.popup && (o = n.placeholder || t.trim(r.html() || ""), n.placeholder && r.html(n.placeholder), i.off("click.bui").on("click.bui", (function(e) {
                                    var i = n.onBeforeOpen && n.onBeforeOpen.call(s);
                                    t(this).hasClass("disabled") || 0 == i || L()
                                })));
                                function l(e) {
                                    e ? (g.css("display", "block"), h.css("display", "block")) : (g.css("display", "none"), h.css("display", "none"))
                                }
                                var c = function(i) {
                                        var a = t(i.currentTarget).find("input"),
                                            o = a.attr("disabled"),
                                            r = i.target.tagName;
                                        if (!o) {
                                            var l = a.val(),
                                                c = a.attr("text"),
                                                u = a.attr("index"),
                                                d = a.is(":checked");
                                            i.target = a[0],
                                                i.index = u,
                                                (d && "INPUT" !== r || !d && "INPUT" === r) && (n.toggle || "checkbox" == n.type) ? (e.array.remove(y, c), e.array.remove(w, l), e.array.remove(x, u), e.array.remove(k, u), M.call(s, "uncheck", i)) : (P({
                                                    name: c,
                                                    value: l,
                                                    index: u
                                                }), M.call(s, "check", i)),
                                            p && n.onChange && n.onChange.call(s, i),
                                                N(w.join(",") || "", i),
                                                B(y.join(",") || "")
                                        }
                                    },
                                    u = function(e) {
                                        c.call(s, e),
                                        n.popup && n.autoClose && E(),
                                            M.call(s, "select", e),
                                            e.stopPropagation()
                                    },
                                    d = n.needSearch ? ".bui-dialog-list " + n.handle: n.handle;
                                a.off("click.bui", d).on("click.bui", d, u);
                                var f = function(e) {
                                    n.callback && n.callback.call(s, e, s),
                                        e.stopPropagation()
                                };
                                a.off("click.bui", n.callbackHandle).on("click.bui", n.callbackHandle, f);
                                var h = a.find(".bui-searchbar-close"),
                                    g = a.find(".bui-dialog-result"),
                                    m = a.find(".bui-searchbar input");
                                n.data && n.data.length && n.needSearch && (a.find(".btn-search").click((function(e) {
                                    var t = a.find(".bui-searchbar input").val();
                                    S(t),
                                        l(t),
                                        e.stopPropagation()
                                })), m.on("input", (function(e) {
                                    var n = t(this).val();
                                    S(n),
                                        l(n),
                                        e.stopPropagation()
                                })), h.click((function(e) {
                                    m.val(""),
                                        g.css("display", "none"),
                                        t(this).css("display", "none"),
                                        e.stopPropagation()
                                })), a.off("clilck.bui", ".bui-dialog-result .bui-btn").on("click.bui", ".bui-dialog-result .bui-btn", (function(i) {
                                    var a = t(i.currentTarget).find("input"),
                                        o = i.target.tagName,
                                        r = a.is(":checked"),
                                        l = a.attr("text"),
                                        c = a.attr("value"),
                                        u = e.array.index(n.data, c, "value"); (r && "INPUT" !== o || !r && "INPUT" === o) && (n.toggle || "checkbox" == n.type) ? (a.prop("checked", !1), M.call(s, "uncheck", i), e.array.remove(y, l), e.array.remove(w, c), e.array.remove(x, u), e.array.remove(k, u)) : (a.prop("checked", !0), M.call(s, "check", i), P({
                                        name: l,
                                        value: c,
                                        index: u
                                    })),
                                    p && n.onChange && n.onChange.call(s, i),
                                        N(w.join(",") || "", i),
                                        B(y.join(",") || ""),
                                        i.stopPropagation()
                                })));
                                T = !0
                            } (f),
                        f.value && N(f.value),
                        f.uid && e.history.setUI && e.history.setUI({
                            uid: f.uid,
                            ui: s
                        }),
                        f.onInited && f.onInited.call(s, f),
                            this
                    }
                    function C() {
                        var e = [],
                            n = [];
                        return l.find("input").each((function(i, a) {
                            var o = t(this);
                            if (! (o.length < 1)) {
                                var r = o.val(),
                                    l = o.attr("text"),
                                    c = o.attr("image"),
                                    s = o.attr("icon"),
                                    d = o.is(":checked");
                                u.data[i] = {},
                                    u.data[i][h] = l,
                                    u.data[i][g] = r,
                                    u.data[i][m] = c,
                                    u.data[i][v] = s,
                                    e.push(r),
                                    n.push(l),
                                d && P({
                                    name: l,
                                    value: r,
                                    index: i
                                })
                            }
                        })),
                            {
                                value: e,
                                text: n
                            }
                    }
                    function P(e) {
                        var t = parseInt(e.index, 10);
                        switch (u.type) {
                            case "radio":
                            case "select":
                                w = [],
                                    x = [],
                                    k = [],
                                    (y = []).push(e.name),
                                    w.push(e.value),
                                    k.push(e.icon),
                                    x.push(t);
                                break;
                            case "checkbox":
                                y.push(e.name),
                                    w.push(e.value),
                                    k.push(e.icon),
                                    x.push(t)
                        }
                    }
                    function S(t) {
                        var n = e.array.filter(u.data, t, u.field.name),
                            i = '没有与此相关的结果:<span class="danger-reverse">'.concat(t, "</span>"),
                            o = e.guid();
                        n.length && (i = j(n, o)),
                            a.find(".bui-dialog-result").css("display", "block").html(i)
                    }
                    function j(n, i) {
                        var a = i || f,
                            o = "",
                            r = "";
                        return t.each(n, (function(n, i) {
                            var o = "string" == typeof i ? i: i[h] || i || "",
                                l = i && i[m] ? i[m] || i: "",
                                c = i && i[v] ? i[v] || i: "",
                                s = i && i[g] ? i[g] || i: i || o || n,
                                d = {
                                    name: a,
                                    value: s,
                                    text: o,
                                    index: n
                                };
                            l && (d.image = l),
                            c && (d.icon = c),
                                i = i && "object" === e.typeof(i) ? i: {};
                            var f = function(t) {
                                t = t || {};
                                var n = document.createElement("input");
                                for (var i in t)"string" != typeof t[i] && "number" != typeof t[i] || n.setAttribute(i, t[i]);
                                switch (u.type) {
                                    case "mulelect":
                                        n.setAttribute("type", "checkbox"),
                                            n.setAttribute("class", u.className || "bui-choose");
                                        break;
                                    case "select":
                                        n.setAttribute("type", "radio"),
                                            n.setAttribute("class", u.className || "bui-choose");
                                        break;
                                    case "radio":
                                        n.setAttribute("type", "radio"),
                                            n.setAttribute("class", u.className || "bui-radio");
                                        break;
                                    case "checkbox":
                                        n.setAttribute("type", "checkbox"),
                                            n.setAttribute("class", u.className || "bui-choose");
                                        break;
                                    default:
                                        n.setAttribute("type", "checkbox")
                                }
                                return e.array.compare(w, t.value) && n.setAttribute("checked", "true"),
                                    n
                            } (t.extend(!0, {},
                                i, d)).outerHTML;
                            if (r += '    <div class="bui-btn bui-box bui-btn-line">', "left" == u.direction && (r += f), l) {
                                var p = e.unit.endWithImage(l) ? '<div class="thumbnail"><img src="' + l + '" alt="" /></div>': '<div class="thumbnail ' + l + '"></div>';
                                r += p
                            }
                            if (c) {
                                var b = e.unit.endWithImage(c) ? '<i class="icon"><img src="' + c + '" alt="" /></i>': '<i class="icon ' + c + '"></i>';
                                r += b
                            }
                            "center" == u.direction ? (r += '        <div class="span1" align="center">' + o + "</div>", r += f) : r += '        <div class="span1">' + o + "</div>",
                            "right" == u.direction && (r += f),
                                r += "    </div>"
                        })),
                            o += '    <div class="bui-list bui-list-select">',
                            o += r,
                            o += "    </div>"
                    }
                    function L(e) {
                        M.call(this, "beforeshow");
                        var t = {};
                        return "function" == typeof e ? t.callback = function() {
                            e && e.call(s),
                                M.call(s, "show")
                        }: "string" == typeof e ? t.effect = e: "object" === _typeof(e) && (t = e),
                            u.popup && c ? (!c.isOpen() && c.open(t), M.call(s, "show")) : (a.css("display", "block"), t.callback ? t.callback() : M.call(s, "show")),
                            this
                    }
                    function E(e) {
                        M.call(this, "beforehide");
                        var t = {};
                        return "function" == typeof e ? t.callback = function() {
                            e && e.call(s)
                        }: "string" == typeof e ? t.effect = e: "object" === _typeof(e) && (t = e),
                            u.popup && c ? (c.isOpen() && c.close(t.effect || t.callback), M.call(s, "hide")) : (a.css("display", "none"), t.callback ? t.callback() : M.call(s, "hide")),
                            this
                    }
                    function N(t, n) {
                        if (void 0 === t) return w.join(",");
                        n = n || event;
                        var o = u.needSearch ? ".bui-dialog-list " + u.handle: u.handle;
                        l = a.find(o);
                        var c = [],
                            d = [],
                            f = [],
                            m = [],
                            b = [],
                            T = [];
                        "string" == typeof t && t.indexOf(",") > -1 ? T = t.split(",") : t instanceof Array ? T = t: t && T.push(t),
                        (u.data.length < 1 || u.data.length !== l.length) && (u.data = [], console.log(), C()),
                        u.data && u.data.forEach((function(t, n) {
                            var i = t && "object" === e.typeof(t) && t.hasOwnProperty(h) ? String(t[h]) : String(t),
                                a = t && "object" === e.typeof(t) && t.hasOwnProperty(v) ? String(t[v]) : "",
                                o = t && "object" === e.typeof(t) && t.hasOwnProperty(g) ? String(t[g]) : String(t) || String(n),
                                r = l.eq(n).find("input");
                            if ("" == t) return r.prop("checked", !1),
                                y = [],
                                w = [],
                                x = [],
                                void(k = []);
                            var s = e.array.index(T, i);
                            e.array.index(T, o) > -1 || s > -1 ? ("radio" != u.type && "select" != u.type || (d = [], f = [], b = [], m = []), d.push(i), f.push(o), m.push(a), b.push(n), c[n] = r, r.prop("checked", !0)) : r.prop("checked", !1)
                        })),
                            y = d.slice(0),
                            w = f.slice(0),
                            x = b.slice(0),
                            k = m.slice(0);
                        var O = n || {
                            target: c[c.length - 1],
                            index: x
                        };
                        M.call(s, "change", O),
                        !p && u.onChange && u.onChange.call(s, n),
                        i && u.change && (i.attr("value", f.join(",")), r.text(y.join(",") || I)),
                            a.attr("value", f.join(",")),
                            p = !1
                    }
                    function B(e) {
                        return void 0 === e ? y.join(",") : (i && u.change && (i.attr("text", e), r.html(e || o)), a.attr("text", e), this)
                    }
                    function D(e) {
                        var t = [];
                        return String(e).indexOf(",") > -1 ? t = e.split(",") : t.push(parseInt(e)),
                            y = [],
                            w = [],
                            t.forEach((function(e, t) {
                                u.data[e] && y.push(u.data[e][h] || u.data[e]),
                                u.data[e] && w.push(u.data[e][g] || u.data[e] || t)
                            })),
                            "checkbox" == u.type || "mulselect" == u.type ? (B(y.join(",")), N(w.join(","))) : (B(y[0]), N(w[0])),
                            this
                    }
                    function R() {
                        return y = [],
                            w = [],
                            x = [],
                            k = [],
                            l.find("input").prop("checked", null),
                            N(""),
                            B(""),
                            M.call(this, "reset"),
                            this
                    }
                    function A(t, n) {
                        return e.off.apply(s, arguments),
                            this
                    }
                    function M(t) {
                        s.self = this == window || this == s ? null: this,
                            e.trigger.apply(s, arguments)
                    }
                    return u.autoinit && O(u),
                        s
                }
            } (window.bui || {},
                window.libs),
            function(e, t) {
                e.dropdown = function(n) {
                    var i, a, o, r, l, c, s = {
                            name: "dropdown",
                            handle: {},
                            on: function(t, n) {
                                return e.on.apply(s, arguments),
                                    this
                            },
                            off: k,
                            active: b,
                            disabled: function() {
                                var e = a;
                                return e && e.addClass("disabled"),
                                    this
                            },
                            enabled: function() {
                                var e = a;
                                return e && e.removeClass("disabled"),
                                    this
                            },
                            value: v,
                            values: function() {
                                return {
                                    name: g,
                                    value: h
                                }
                            },
                            reset: function() {
                                return h = "",
                                    v(""),
                                    y(p),
                                    w(),
                                    this
                            },
                            text: y,
                            hide: w,
                            show: function() {
                                return a.addClass("active"),
                                    c.css("display", "block"),
                                    I.call(this, "show"),
                                    this
                            },
                            hideAll: x,
                            destroy: function(e) {
                                e = 1 == e;
                                i && (i.off("click.bui"), e && i.remove());
                                a && (a.off("click.bui"), e && a.remove());
                                t("body").off("click.bui"),
                                    k("show"),
                                    k("hide")
                            },
                            widget: function(t) {
                                return e.widget.call({},
                                    t)
                            },
                            option: function(t, n) {
                                return e.option.call(s, t, n)
                            },
                            config: u,
                            init: m
                        },
                        u = s.config = t.extend(!0, {},
                            {
                                id: ".bui-dropdown",
                                handle: ".bui-btn",
                                handleChildren: ".span1",
                                target: ".bui-list",
                                targetHandle: ".bui-btn",
                                data: null,
                                position: "bottom",
                                showArrow: !1,
                                showActive: !0,
                                autoClose: !0,
                                stopPropagation: !1,
                                width: 0,
                                placeholder: "",
                                value: "",
                                relative: !0,
                                change: !0,
                                autoinit: !0,
                                template: null,
                                onBeforeInit: null,
                                onInited: null,
                                callback: null,
                                onChange: null
                            },
                            e.config.dropdown, n),
                        d = document.documentElement.clientWidth,
                        f = !1,
                        p = "",
                        h = "",
                        g = "";
                    function m(n) {
                        var h = t.extend(!0, u, n);
                        if (h.onBeforeInit && h.onBeforeInit.call(s, h), h.id) {
                            if (i = e.obj(h.id), s.$el = i, u = s.config = h, a = i.children(h.handle), c = h.target ? i.find(h.target) : a.next(), h.placeholder && y(h.placeholder), p = h.placeholder || a.text(), h.data && h.data.length) {
                                var g = "function" == typeof h.template ? h.template.call(s, h.data) : function(e) {
                                    var t = "";
                                    return t += '<ul class="bui-list">',
                                        e.map((function(e, n) {
                                            t += '<li class="bui-btn" value="' + e.value + '">' + e.name + "</li>"
                                        })),
                                        t += "</ul>"
                                } (h.data);
                                c.length ? c.remove() && a.after(g) : i.append(g),
                                    c = i.find(h.target)
                            }
                            r = h.relative,
                                o = i.attr("position") || h.position;
                            var m = i[0] && i[0].offsetLeft >= document.documentElement.clientWidth ? 0 : i[0] && i[0].offsetLeft,
                                k = h.width ? "auto": -m + "px",
                                T = {
                                    bottom: {
                                        menuPosition: "bui-menu-bottom",
                                        arrowPosition: "bui-arrow-up",
                                        left: k
                                    },
                                    top: {
                                        menuPosition: "bui-menu-top",
                                        arrowPosition: "bui-arrow-down",
                                        left: k
                                    },
                                    left: {
                                        menuPosition: "bui-menu-left",
                                        arrowPosition: "bui-arrow-right",
                                        left: "auto"
                                    },
                                    right: {
                                        menuPosition: "bui-menu-right",
                                        arrowPosition: "bui-arrow-left",
                                        left: "100%"
                                    }
                                };
                            if (l = h.width > 0 ? h.width: r ? d: h.width, parseFloat(l) > 0 && c.width(l),
                                function(e, t) {
                                    c.addClass(e),
                                    r && c.css({
                                        left: t
                                    })
                                } (h.showArrow ? T[o].arrowPosition + " " + T[o].menuPosition: T[o].menuPosition, T[o].left), h.value) v(h.value);
                            else {
                                var O = c.find(h.targetHandle + ".active").eq(0).index();
                                O > -1 && b(O)
                            }
                            return f ||
                            function(e) {
                                var n = function(n) {
                                        if (!t(this).hasClass("disabled")) {
                                            var i = t(this).hasClass("active"),
                                                a = e.target ? t(this).parent().find(e.target) : t(this).next();
                                            x(),
                                                i ? (t(this).removeClass("active"), a.css("display", "none"), I.call(s, "hide")) : (t(this).addClass("active"), a.css("display", "block"), I.call(s, "show")),
                                                n.stopPropagation()
                                        }
                                    },
                                    o = function(n) {
                                        var i = t(this),
                                            a = i.parent(),
                                            o = v(),
                                            r = i.attr("value") || "";
                                        t.trim(i.text()),
                                            null != a.attr("change") ? a.attr("change") : e.change,
                                        e.showActive && i.addClass("active").siblings().removeClass("active"),
                                            v.call(this, r),
                                        u.autoClose && w(),
                                            n.target = this,
                                        e.callback && e.callback.call(s, n),
                                        o !== r && e.onChange && e.onChange.call(s, n),
                                        u.stopPropagation && n.stopPropagation()
                                    };
                                a.off("click.bui").on("click.bui", n),
                                    i.off("click.bui", e.targetHandle).on("click.bui", e.targetHandle, o);
                                var r = function(e) {
                                    x(),
                                        e.stopPropagation()
                                };
                                u.autoClose && t("body").off("click.bui").on("click.bui", ":not(.bui-dropdown)", r),
                                    f = !0
                            } (h),
                            h.uid && e.history.setUI && e.history.setUI({
                                uid: h.uid,
                                ui: s
                            }),
                            h.onInited && h.onInited.call(s, h),
                                this
                        }
                        e.showLog("dropdown id不能为空", "bui.dropdown.init")
                    }
                    function v(n) {
                        if (void 0 === n) return event && event.target ? t(event.target).attr("value") : a.attr("value");
                        var i = "htmllielement" === e.typeof(this),
                            o = i && t(this).parent(),
                            r = i ? t(this).parents(".bui-dropdown").children(u.handle) : a,
                            l = i ? o.find(u.targetHandle) : c.find(u.targetHandle);
                        if (l.removeClass("active"), u.data && u.data.length) {
                            if ("" == n) return h = "",
                                void r.attr("value", n);
                            var d = e.array.index(u.data, String(n), "value"),
                                f = e.array.index(u.data, String(n), "name");
                            d > -1 ? (l.eq(d).addClass("active"), r.attr("value", n), u.change && y.call(this, u.data[d].name), h = n) : f > -1 && (l.eq(f).addClass("active"), r.attr("value", u.data[f].value), u.change && y.call(this, n), h = u.data[f].value)
                        } else l.each((function(e, i) {
                            var a = i.innerText,
                                o = i.getAttribute("value");
                            a != n && o != n || (t(this).addClass("active"), r.attr("value", o), u.change && y.call(this, a), h = o)
                        }));
                        return u.change || I.call(s, "change"),
                            h
                    }
                    function b(e) {
                        e = parseInt(e);
                        var n = c.find(u.targetHandle).eq(e);
                        n.length >= 0 && (v(n.attr("value") || t.trim(n.text()) || ""), u.showActive && n.addClass("active").siblings().removeClass("active"));
                        return this
                    }
                    function y(n) {
                        if (void 0 === n) return g || t.trim(a.text());
                        var i = "htmllielement" === e.typeof(this) ? t(this).parents(".bui-dropdown").children(u.handle) : a,
                            o = i.children(u.handleChildren);
                        return o.length ? o.text(n) : i.text(n),
                            g = n,
                            I.call(s, "change"),
                            this
                    }
                    function w() {
                        return a.removeClass("active"),
                            c.css("display", "none"),
                            I.call(this, "hide"),
                            this
                    }
                    function x() {
                        return t(".bui-dropdown > .bui-btn").removeClass("active"),
                            t(".bui-dropdown > .bui-list").css("display", "none"),
                            I.call(this, "hide"),
                            this
                    }
                    function k(t, n) {
                        return e.off.apply(s, arguments),
                            this
                    }
                    function I(t) {
                        s.self = this == window || this == s ? null: this,
                            e.trigger.apply(s, arguments)
                    }
                    return u.autoinit && m(u),
                        s
                }
            } (window.bui || {},
                window.libs),
        function(e, t) {
            e.accordion = function(n) {
                var i, a, o = {
                        name: "accordion",
                        handle: {},
                        on: function(t, n) {
                            return e.on.apply(o, arguments),
                                this
                        },
                        off: h,
                        showFirst: function() {
                            l.length > 1 ? l.each((function(e, t) {
                                d(0, t)
                            })) : d(0);
                            return g.call(this, "show", {
                                target: i[0]
                            }),
                                this
                        },
                        showAll: function() {
                            return (i = p()).each((function(e, n) {
                                t(n).addClass("active").next(r.target).css("display", "block")
                            })),
                                g.call(this, "showall", {
                                    target: i
                                }),
                                this
                        },
                        hideAll: f,
                        disabled: function(e) {
                            var t;
                            t = "number" == typeof e ? i.eq(e) : i;
                            return t && t.addClass("disabled"),
                                this
                        },
                        enabled: function(e) {
                            var t;
                            t = "number" == typeof e ? i.eq(e) : i;
                            return t && t.removeClass("disabled"),
                                this
                        },
                        destroy: function(e) {
                            l && (l.off("click.bui"), l.remove(), l = null);
                            h("hide"),
                                h("show")
                        },
                        show: function(e) {
                            e = Number(e) || 0;
                            var t = i.eq(e).length ? i.eq(e) : i,
                                n = a.eq(e).length ? a.eq(e) : t.next(r.target);
                            return t.addClass("active"),
                                n.css("display", "block"),
                                g.call(this, "show", {
                                    target: i[e]
                                }),
                                this
                        },
                        hide: function(e) {
                            e = Number(e) || 0;
                            var t = i.eq(e).length ? i.eq(e) : i,
                                n = a.eq(e).length ? a.eq(e) : t.next(r.target);
                            return t.removeClass("active"),
                                n.css("display", "none"),
                                g.call(this, "hide", {
                                    target: i[e]
                                }),
                                this
                        },
                        widget: function(t) {
                            return e.widget.call({},
                                t)
                        },
                        option: function(t, n) {
                            return e.option.call(o, t, n)
                        },
                        config: r,
                        init: s
                    },
                    r = o.config = t.extend(!0, {},
                        {
                            id: "",
                            handle: "dt",
                            target: "dd",
                            height: 0,
                            targetHeight: 0,
                            single: !1,
                            stopPropagation: !1,
                            lock: !1,
                            data: null,
                            autoinit: !0,
                            onBeforeInit: null,
                            onInited: null,
                            callback: null
                        },
                        e.config.accordion, n),
                    l = null,
                    c = !1;
                function s(n) {
                    var s = t.extend(!0, r, n);
                    return s.onBeforeInit && s.onBeforeInit.call(o, s),
                        document.documentElement.clientWidth,
                        document.documentElement.clientHeight,
                        l = e.obj(s.id) || e.obj("." + e.prefix("accordion")),
                        r = o.config = s,
                        i = p(),
                        a = s.target.indexOf("#") > -1 ? e.obj(s.target) : l.children(s.target),
                        function(e) {
                            i.removeClass("active"),
                                a.css("display", "none"),
                            parseFloat(e.targetHeight) > 0 && a.height(e.targetHeight);
                            parseFloat(e.height) > 0 && l.height(e.height)
                        } (s),
                    c ||
                    function(e) {
                        var n = function(n) {
                            if (!t(this).hasClass("disabled") && !t(this).attr("href")) {
                                if (!1 === (e.callback && e.callback.call(o, n))) return ! 1;
                                u.call(this, n, e),
                                (e.stopPropagation || !t(this).attr("href")) && n.stopPropagation()
                            }
                        };
                        e.handle.indexOf("#") > -1 ? !e.lock && i.off("click.bui").on("click.bui", n) : !e.lock && l.off("click.bui").on("click.bui", e.handle, n);
                        c = !0
                    } (s),
                    s.uid && e.history.setUI && e.history.setUI({
                        uid: s.uid,
                        ui: o
                    }),
                    s.onInited && s.onInited.call(o, s),
                        this
                }
                function u(n, a) {
                    var r = t(this),
                        l = r.hasClass("active");
                    i.index(this);
                    var c = a.target.indexOf("#") > -1 ? e.obj(a.target) : r.next(a.target);
                    a.single ? l ? (r.removeClass("active"), c.css("display", "none"), g.call(o, "hide", n)) : (f(), r.addClass("active"), c.css("display", "block"), g.call(o, "show", n)) : l ? (r.removeClass("active"), c.css("display", "none"), g.call(o, "hide", n)) : (r.addClass("active"), c.css("display", "block"), g.call(o, "show", n))
                }
                function d(e, n) {
                    e = e || 0; (n ? t(n) : l).children(r.handle).eq(e).addClass("active").next(r.target).css("display", "block")
                }
                function f() {
                    return (i = p()).each((function(e, n) {
                        t(n).removeClass("active").next(r.target).css("display", "none")
                    })),
                        g.call(this, "hideall", {
                            target: i
                        }),
                        this
                }
                function p() {
                    return r.handle.indexOf("#") > -1 ? e.obj(r.handle) : l.children(r.handle)
                }
                function h(t, n) {
                    return e.off.apply(o, arguments),
                        this
                }
                function g(t) {
                    o.self = this == window || this == o ? null: this,
                        e.trigger.apply(o, arguments)
                }
                return r.autoinit && s(r),
                    o
            }
        } (window.bui || {},
            window.libs),
        function(e, t) {
            e.rating = function(n) {
                var i, a, o, r, l, c = {
                        name: "rating",
                        handle: {},
                        on: function(t, n) {
                            return e.on.apply(c, arguments),
                                this
                        },
                        off: m,
                        disabled: function(e) { (e = 0 != e) ? (i.off("click.bui", s.handle), v.call(c, "disabled")) : g();
                            return this
                        },
                        enabled: g,
                        show: function(e) {
                            var t = function(e) {
                                var t, n = "",
                                    i = (e = String(e) || String(r), 0),
                                    a = s.stars,
                                    o = [];
                                o = e.indexOf(".") > -1 ? e.split(".") : [e, 0];
                                var l = parseInt(o[0]);
                                for (t = o[1] / 10 * 100 + "%", i = 0; i < a; i++) i < l && (n += '<div class="bui-rating-cell" ><div class="bui-rating-cell-full" style="width:100%;">&nbsp;</div></div>'),
                                i == l && (n += '<div class="bui-rating-cell" ><div class="bui-rating-cell-full" style="width:' + t + ';">&nbsp;</div></div>'),
                                i > l && (n += '<div class="bui-rating-cell" ><div class="bui-rating-cell-full" style="width:0;">&nbsp;</div></div>');
                                return n
                            } (e);
                            i.attr("value", e).html(t),
                                r = e
                        },
                        value: h,
                        reset: function() {
                            return h(s.value),
                                this
                        },
                        destroy: function(e) {
                            e = 1 == e;
                            i && (i.off("click.bui"), e && i.remove());
                            m("change")
                        },
                        widget: function(t) {
                            return e.widget.call({},
                                t)
                        },
                        option: function(t, n) {
                            return e.option.call(c, t, n)
                        },
                        config: s,
                        init: d
                    },
                    s = c.config = t.extend(!0, {},
                        {
                            id: "",
                            uid: "",
                            handle: ".bui-rating-cell",
                            fullClassName: "bui-rating-cell-full",
                            halfClassName: "bui-rating-cell-half",
                            half: !1,
                            stars: 5,
                            value: 0,
                            disabled: !1,
                            render: !0,
                            autoinit: !0,
                            onBeforeInit: null,
                            onChange: null,
                            onInited: null,
                            callback: null
                        },
                        e.config.rating, n),
                    u = !1;
                function d(n) {
                    var r = t.extend(!0, s, n);
                    if (r.onBeforeInit && r.onBeforeInit.call(c, r), r.id) return i = e.obj(r.id),
                        c.$el = i,
                        s = c.config = r,
                        a = r.fullClassName,
                        o = r.halfClassName,
                        function(t) {
                            if (t.render) {
                                var n = function(t) {
                                    e.guid();
                                    var n = "",
                                        i = 0,
                                        a = t.stars;
                                    for (i = 0; i < a; i++) n += '<div class="bui-rating-cell" ></div>';
                                    return n
                                } (t);
                                i.html(n),
                                    l = i.children(t.handle)
                            } else l = i.children(t.handle);
                            h(t.value)
                        } (r),
                    u || f(r),
                    r.uid && e.history.setUI && e.history.setUI({
                        uid: r.uid,
                        ui: c
                    }),
                    r.onInited && r.onInited.call(c, r),
                        this;
                    e.hint("rating id不能为空")
                }
                function f(e) {
                    if (!e.disabled) {
                        var n = String(e.value).indexOf(".") > -1 ? 1 : 0;
                        i.off("click.bui", e.handle).on("click.bui", e.handle, (function(i) {
                            var a = t(this).index(),
                                o = parseInt(h()),
                                r = 0;
                            p(r = e.half && n % 2 == 0 ? a + .5 : a + 1),
                                h(r),
                                n++,
                            o !== r && e.onChange && e.onChange.call(c, i),
                            e.callback && e.callback.call(c, i),
                                i.stopPropagation()
                        }))
                    }
                    u = !0
                }
                function p(e) {
                    var n = [];
                    e = String(e),
                        s.half && e.indexOf(".") > -1 ? n = e.split(".") : n.push(e),
                        l.removeClass(a).removeClass(o),
                        l.each((function(e, i) {
                            var r = parseInt(n[0]);
                            1 == n.length && e < r ? t(i).addClass(a) : 2 == n.length && (e < r && t(i).addClass(a), e == r && t(i).addClass(o))
                        }))
                }
                function h(e) {
                    return void 0 !== e && /^-?\d+(\.\d+)?$/.test(e) ? (i.attr("value", e), p(e), r = e, v.call(c, "change", e)) : r = i.attr("value"),
                        r
                }
                function g(e) {
                    return s.disabled = !1,
                        f(s),
                        v.call(c, "enabled"),
                        this
                }
                function m(t, n) {
                    return e.off.apply(c, arguments),
                        this
                }
                function v(t) {
                    c.self = this == window || this == c ? null: this,
                        e.trigger.apply(c, arguments)
                }
                return s.autoinit && d(s),
                    c
            }
        } (window.bui || {},
            window.libs),
        function(e, t) {
            e.actionsheet = function(n) {
                var i, a, o, r = {
                        name: "actionsheet",
                        handle: {},
                        on: function(t, n) {
                            return e.on.apply(r, arguments),
                                this
                        },
                        off: p,
                        disabled: function(e) {
                            var t = a;
                            return t && t.addClass("disabled"),
                                l.disable = !0,
                                this
                        },
                        enabled: function() {
                            var e = a;
                            return e && e.removeClass("disabled"),
                                l.disable = !1,
                                this
                        },
                        hide: d,
                        show: f,
                        destroy: function(e) {
                            e = 1 == e;
                            a && a.off("click.bui");
                            p("hide"),
                                p("show"),
                            i && i.destroy(e)
                        },
                        widget: function(t) {
                            var n = {
                                dialog: i
                            };
                            return e.widget.call(n, t)
                        },
                        option: function(t, n) {
                            return "buttons" == t && void 0 !== n ?
                                function(t, n) {
                                    if (n && "array" === e.typeof(n)) {
                                        var i = u(n);
                                        e.obj(l.id).find(".bui-list").html(i)
                                    }
                                } (0, n) : e.option.call(r, t, n)
                        },
                        config: l,
                        init: s
                    },
                    l = r.config = t.extend(!1, {},
                        {
                            id: "",
                            appendTo: ".bui-page",
                            trigger: "",
                            handle: ".bui-btn",
                            position: "bottom",
                            effect: "fadeInUp",
                            zIndex: 110,
                            width: 0,
                            mask: !0,
                            opacity: .6,
                            data: null,
                            buttons: [],
                            template: null,
                            cancelText: "取消",
                            disable: !1,
                            autoinit: !0,
                            onMask: null,
                            onBeforeOpen: null,
                            onBeforeClose: null,
                            onBeforeInit: null,
                            onInited: null,
                            callback: null
                        },
                        e.config.actionsheet, n),
                    c = !1;
                function s(n) {
                    var s, p, g = t.extend(!0, l, n);
                    if (g.onBeforeInit && g.onBeforeInit.call(r, g), a = e.obj(g.trigger), l = r.config = g, c) e.obj(l.id).find(".bui-list").html(u(g.data || g.buttons));
                    else {
                        var m = "function" == typeof g.template ? g.template.call(r, g.data || g.buttons) : function(e) {
                            var t = parseFloat(l.width),
                                n = t > 0 ? "width:" + t + "px;left:50%;right:0;margin-left:-" + t / 2 + "px;": "",
                                i = "";
                            e && e.length && (i += '<div id="' + l.id + '" class="bui-actionsheet" style="' + n + '">', i += '    <ul class="bui-list">', i += u(e), i += "    </ul>", l.cancelText && (i += '    <div class="bui-btn" value="cancel">' + l.cancelText + "</div>"), i += "</div>");
                            return i
                        } (g.data || g.buttons);
                        e.obj(g.appendTo).append(m)
                    }
                    return i || (i = e.dialog({
                        id: l.id,
                        position: g.position,
                        mask: g.mask,
                        effect: g.effect,
                        opacity: g.opacity,
                        zIndex: g.zIndex,
                        onBeforeOpen: g.onBeforeOpen,
                        onBeforeClose: g.onBeforeClose,
                        onMask: function() {
                            d(),
                            g.onMask && g.onMask()
                        }
                    })),
                        (o = i.$el()).find(g.handle),
                    c || (s = function(e) {
                        e.target = this,
                        l.callback && l.callback.call(r, e, r),
                            h.call(r, "click", e)
                    },
                        p = function(e) {
                            t(this).hasClass("disabled") || l.disable || f.call(this)
                        },
                    o && o.off("click.bui", l.handle).on("click.bui", l.handle, s), a && a.off("click.bui").on("click.bui", p), c = !0),
                    g.uid && e.history.setUI && e.history.setUI({
                        uid: g.uid,
                        ui: r
                    }),
                    g.onInited && g.onInited.call(r, g),
                        this
                }
                function u(e) {
                    var n = "";
                    return t.each(e, (function(e, t) {
                        n += '        <li class="bui-btn ' + (t.className || "") + '" value="' + (t.value || "") + '">' + (t.name || "") + "</li>"
                    })),
                        n
                }
                function d(e) {
                    h.call(this, "beforehide");
                    var t = {};
                    return "function" == typeof e ? t.callback = function() {
                        e && e.call(r),
                            h.call(r, "hide")
                    }: "string" == typeof e ? t.effect = e: "object" === _typeof(e) && (t = e),
                    i.isOpen() && i.close(t),
                        this
                }
                function f(e) {
                    h.call(this, "beforeshow");
                    var t = {};
                    return "function" == typeof e ? t.callback = function() {
                        e && e.call(r),
                            h.call(r, "show")
                    }: "string" == typeof e ? t.effect = e: "object" === _typeof(e) && (t = e),
                    !i.isOpen() && i.open(t),
                        this
                }
                function p(t, n) {
                    return e.off.apply(r, arguments),
                        this
                }
                function h(t) {
                    r.self = this == window || this == r ? null: this,
                        e.trigger.apply(r, arguments)
                }
                return l.id = l.id || e.guid(),
                l.autoinit && s(l),
                    r
            }
        } (window.bui || {},
            window.libs),
        function(e, t) {
            e.number = function(n) {
                var i, a, o, r = {
                        name: "number",
                        handle: {},
                        on: function(t, n) {
                            return e.on.apply(r, arguments),
                                this
                        },
                        off: b,
                        $el: function(t) {
                            return e.selector.call(o, t)
                        },
                        disabled: function(n) {
                            g();
                            var i = this && "htmldivelement" === e.typeof(this) ? t(this) : a; (n = 0 != n) ? i.attr("disabled", "disabled") : i.removeAttr("disabled");
                            return this
                        },
                        reset: function() {
                            var e = l.value || l.min;
                            return h.call(this, e),
                                e
                        },
                        value: function(e) {
                            var t = 0;
                            void 0 !== e ? (h.call(this, e), t = e) : t = p.call(this);
                            return t
                        },
                        values: function(t) {
                            o.length < 1 && (o = u.find(l.id));
                            if (t && "array" === e.typeof(t)) return Array.prototype.slice.call(o).forEach((function(e, n) { (e.id || e.getAttribute("name") || "") == t[n].id && (e.querySelector("input").value = t[n].value)
                            })),
                                this;
                            var n = [];
                            Array.prototype.slice.call(o).forEach((function(e, t) {
                                var i = e.id || e.getAttribute("name") || "",
                                    a = e.querySelector("input").value;
                                n.push({
                                    id: i,
                                    value: a
                                })
                            }));
                            return n
                        },
                        prev: m,
                        next: v,
                        destroy: function(e) {
                            e = 1 == e; (o = u.find(l.id)) && (o.off("click.bui"), o.off("input"), e && o.remove());
                            b("prev"),
                                b("next"),
                                b("change")
                        },
                        widget: function(t) {
                            return e.widget.call({},
                                t)
                        },
                        option: function(t, n) {
                            return e.option.call(r, t, n)
                        },
                        config: l,
                        init: d
                    },
                    l = r.config = t.extend(!0, {},
                        {
                            parentId: ".bui-page",
                            id: ".bui-number",
                            uid: "",
                            type: "text",
                            min: 0,
                            max: 100,
                            step: 1,
                            value: 1,
                            disabled: !1,
                            render: !0,
                            tips: !1,
                            autocheck: !0,
                            decimal: 1,
                            name: "",
                            prev: ".bui-number-prev",
                            input: "input",
                            next: ".bui-number-next",
                            onInput: null,
                            autoinit: !0,
                            inited: null,
                            onBeforeInit: null,
                            onInited: null,
                            onChange: null,
                            callback: null
                        },
                        e.config.number, n),
                    c = !1,
                    s = !1,
                    u = null;
                function d(n) {
                    var d = t.extend(!0, l, n);
                    return d.onBeforeInit && d.onBeforeInit.call(r, d),
                        d.max,
                        d.min,
                        i = d.step,
                        u = e.obj(d.parentId),
                        "object" === _typeof(d.id) ? (o = e.obj(d.id), s = !1) : "string" == typeof d.id && 0 === d.id.indexOf("#") ? (o = e.obj(d.id), s = !0) : (o = u.find(d.id), s = !1),
                        l = r.config = d,
                    d.render &&
                    function(t) {
                        var n = function(t) {
                            var n = "";
                            return n += '    <div class="bui-number-prev"><i class="' + e.config.icon.minus + '"></i></div>',
                                n += '    <input class="bui-number-input" type="' + t.type + '" name="' + (t.name || e.guid()) + '" value="' + t.value + '" min="' + t.min + '" max="' + t.max + '" step="' + t.step + '"/>',
                                n += '    <div class="bui-number-next"><i class="' + e.config.icon.plus + '"></i></div>'
                        } (t);
                        o.html(n)
                    } (d),
                        o.children(d.prev),
                        o.children(d.next),
                        a = o.children(d.input),
                    c ||
                    function(n) {
                        var i = ".bui-number " + n.input,
                            a = ".bui-number " + n.prev,
                            d = ".bui-number " + n.next,
                            p = function(e) {
                                var i = t(this).val();
                                e.value = f(i),
                                n.onInput && n.onInput.call(r, e),
                                    e.stopPropagation()
                            },
                            g = function(e) {
                                var i = n.autocheck && isNaN(parseFloat(t(this).val(), 10)) ? 0 : parseFloat(t(this).val(), 10);
                                /^[-\\+]?([0-9])+$/i.test(i) && h.call(this, f(i)),
                                    e.value = f(i),
                                n.onChange && n.onChange.call(r, e),
                                    e.stopPropagation()
                            },
                            b = function(e) {
                                var i = t(this).next(l.input);
                                e.value = i.val(),
                                    m.call(i, e),
                                n.callback && n.callback.call(r, e),
                                    e.preventDefault(),
                                    e.stopPropagation()
                            },
                            y = function(e) {
                                var i = t(this).prev(l.input);
                                e.value = i.val(),
                                    v.call(i, e),
                                n.callback && n.callback.call(r, e),
                                    e.preventDefault(),
                                    e.stopPropagation()
                            };
                        s ? (n.onInput && o.off("input", n.input).on("input", n.input, e.unit.debounce(p, 400)), o.off("change", n.input).on("change", n.input, g), o.off("click.bui", n.prev).on("click.bui", n.prev, b), o.off("click.bui", n.next).on("click.bui", n.next, y)) : (n.onInput && u.off("input", i).on("input", i, e.unit.debounce(p, 400)), u.off("change", i).on("change", i, g), u.off("click.bui", a).on("click.bui", a, b), u.off("click.bui", d).on("click.bui", d, y));
                        c = !0
                    } (d),
                    d.disabled && a.attr("disabled", "disabled"),
                        h(d.value),
                        d.target = a,
                        d.value = d.value,
                    d.uid && e.history.setUI && e.history.setUI({
                        uid: d.uid,
                        ui: r
                    }),
                    d.onInited && d.onInited.call(r, d),
                    d.inited && d.inited.call(r, d),
                        this
                }
                function f(e, t, n) {
                    return t = t || l.min,
                        n = n || l.max,
                        e < t ? e = t: e > n && (e = n),
                        e
                }
                function p() {
                    g();
                    var n = this && "htmldivelement" === e.typeof(this) ? t(this) : a;
                    return parseFloat(n.val(), 10)
                }
                function h(n) {
                    g();
                    var i = this && "object" === e.typeof(this) ? a: t(this);
                    return Array.prototype.slice.call(i).forEach((function(t, a) {
                        var o = t.getAttribute("max") || t.parentElement.getAttribute("data-max") || l.max,
                            c = t.getAttribute("min") || t.parentElement.getAttribute("data-min") || l.min,
                            s = l.autocheck ?
                                function(e, t, n) {
                                    var i = e || 0;
                                    i > n && (i = n);
                                    i < t && (i = t);
                                    i && i >= t && i <= n && (i = i);
                                    return i
                                } (parseFloat(n), parseFloat(c), parseFloat(o)) : parseFloat(n);
                        t.value = s,
                        this && e.typeof(this),
                            i.trigger("input"),
                            y.call(r, "change", {
                                target: t,
                                value: n
                            }),
                        l.onChange && l.onChange.call(r, {
                            target: t,
                            value: n
                        })
                    })),
                        this
                }
                function g() {
                    "object" === _typeof(l.id) ? (o = e.obj(l.id), s = !1) : "string" == typeof l.id && 0 === l.id.indexOf("#") ? (o = e.obj(l.id), s = !0) : (o = u.find(l.id), s = !1),
                        o.children(l.prev),
                        o.children(l.next),
                        a = o.children(l.input)
                }
                function m() {
                    g();
                    var n = this && "htmldivelement" === e.typeof(this) ? t(this) : event ? t(event.target).parent().next() : a,
                        o = +n.val();
                    o -= i;
                    var c = /^-?\d*\.\d+$/.test(i) ? parseFloat(o).toFixed(l.decimal) : o;
                    return h.call(n, c),
                        y.call(r, "prev", c),
                        this
                }
                function v() {
                    g();
                    var n = this && "htmldivelement" === e.typeof(this) ? t(this) : event ? t(event.target).parent().prev() : a,
                        o = +n.val() + +i,
                        c = /^-?\d*\.\d+$/.test(i) ? parseFloat(o).toFixed(l.decimal) : parseFloat(o);
                    return h.call(n[0], c),
                        y.call(r, "next", c),
                        this
                }
                function b(t, n) {
                    return e.off.apply(r, arguments),
                        this
                }
                function y(t) {
                    r.self = this == window || this && this.hasOwnProperty("widget") ? null: this,
                        e.trigger.apply(r, arguments)
                }
                return l.autoinit && d(l),
                    r
            }
        } (bui || {},
            libs),
        function(e, t) {
            e.stepbar = function(n) {
                var i, a, o = {
                        name: "stepbar",
                        handle: {},
                        on: function(t, n) {
                            return e.on.apply(o, arguments),
                                this
                        },
                        off: d,
                        value: u,
                        next: function(e) {
                            var t = u() + 1;
                            return f.call(this, "next", t),
                                u(t, e)
                        },
                        prev: function(e) {
                            var t = u() - 1;
                            return f.call(this, "prev", t),
                                u(t, e)
                        },
                        destroy: function(e) {
                            e = 1 == e;
                            i && (i.off("click.bui"), e && i.remove());
                            d("next"),
                                d("prev"),
                                d("change")
                        },
                        widget: function(t) {
                            return e.widget.call({},
                                t)
                        },
                        option: function(t, n) {
                            return e.option.call(o, t, n)
                        },
                        config: r,
                        init: s
                    },
                    r = o.config = t.extend(!0, {},
                        {
                            id: null,
                            uid: "",
                            handle: ".bui-stepbar-cell",
                            hasNumber: !1,
                            lineCenter: !1,
                            click: !0,
                            autoinit: !0,
                            data: [],
                            template: null,
                            direction: "y",
                            value: null,
                            onBeforeInit: null,
                            onInited: null,
                            onChange: null,
                            callback: null
                        },
                        e.config.stepbar, n),
                    l = 0,
                    c = !1;
                function s(n) {
                    var l = t.extend(!0, r, n);
                    if (l.onBeforeInit && l.onBeforeInit.call(o, l), l.id) {
                        i = e.obj(l.id),
                            r = o.config = l;
                        var s, d, f = "function" == typeof l.template ? l.template.call(o, l.data) : (s = l.data, d = "", t.each(s, (function(e, t) {
                            var n = r.hasNumber ? e + 1 : "",
                                i = r.hasNumber ? "bui-stepbar-number ": "",
                                a = t.className || "";
                            d += '<div class="bui-stepbar-cell ' + i + a + '">',
                                d += '    <span class="bui-stepbar-dot">' + n + "</span>",
                                d += '    <div class="bui-stepbar-text">',
                            t.title && (d += "        <h3>" + t.title + "</h3>"),
                            t.subtitle && (d += '        <p class="bui-stepbar-time">' + t.subtitle + "</p>"),
                            t.content && (d += '        <p class="bui-stepbar-desc">' + t.content + "</p>"),
                                d += "    </div>",
                                d += "</div>"
                        })), d);
                        if ("x" == r.direction ? i.addClass("bui-stepbar-center bui-stepbar-line") : (i.addClass("bui-stepbar"), i.removeClass("bui-stepbar-center bui-stepbar-line")), l.data.length && i.html(f), o.$el = i, a = i.children(), c ||
                        function(e) {
                            var n = function(n) {
                                e.click && u(t(this).index());
                                e.callback && e.callback.call(o, n, o)
                            };
                            i.off("click.bui", e.handle).on("click.bui", e.handle, n),
                                c = !0
                        } (l), /^\d/.test(l.value)) {
                            var p = +l.value > l.data.length ? l.data.length - 1 : +l.value;
                            u(p = p < 0 ? 0 : p)
                        }
                        return l.uid && e.history.setUI && e.history.setUI({
                            uid: l.uid,
                            ui: o
                        }),
                        l.onInited && l.onInited.call(o, l),
                            this
                    }
                    e.hint("stepbar id不能为空")
                }
                function u(e, n) {
                    return n = n || "",
                        /\d/.test(e) ? (e = e >= a.length - 1 ? a.length - 1 : e < 0 ? 0 : e, a.each((function(i, a) {
                            i < e && t(a).removeClass("active " + n).addClass("visited"),
                            i == e && t(a).removeClass("visited " + n).addClass("active " + n),
                            i > e && t(a).removeClass("visited active " + n)
                        })), e != l && (f.call(o, "change", e), r.onChange && r.onChange.call(o, e), l = e), e) : e = i.children(".active").index()
                }
                function d(t, n) {
                    return e.off.apply(o, arguments),
                        this
                }
                function f(t) {
                    o.self = this == window || this == o ? null: this,
                        e.trigger.apply(o, arguments)
                }
                return r.autoinit && s(r),
                    o
            }
        } (window.bui || {},
            window.libs);
        var n = function(e) {
            var t = this,
                n = {
                    updateValuesOnTouchmove: !1,
                    rotateEffect: !1,
                    momentumRatio: 7,
                    freeMode: !1
                };
            for (var i in e = e || {},
                n) void 0 === e[i] && (e[i] = n[i]);
            function a(e) {
                return window.cancelAnimationFrame ? window.cancelAnimationFrame(e) : window.webkitCancelAnimationFrame ? window.webkitCancelAnimationFrame(e) : window.mozCancelAnimationFrame ? window.mozCancelAnimationFrame(e) : window.clearTimeout(e)
            }
            function o(e, t) {
                for (var n = 0; n < e.length; n++) {
                    var i = e[n].style;
                    i.webkitTransform = i.MsTransform = i.msTransform = i.MozTransform = i.OTransform = i.transform = t
                }
                return e
            }
            function r(e, t) {
                "string" != typeof t && (t += "ms");
                for (var n = 0; n < e.length; n++) {
                    var i = e[n].style;
                    i.webkitTransitionDuration = i.MsTransitionDuration = i.msTransitionDuration = i.MozTransitionDuration = i.OTransitionDuration = i.transitionDuration = t
                }
                return e
            }
            function l(e, t) {
                var n, i, a, o;
                return void 0 === t && (t = "x"),
                    a = window.getComputedStyle(e, null),
                    window.WebKitCSSMatrix ? ((i = a.transform || a.webkitTransform).split(",").length > 6 && (i = i.split(", ").map((function(e) {
                        return e.replace(",", ".")
                    })).join(", ")), o = new WebKitCSSMatrix("none" === i ? "": i)) : n = (o = a.MozTransform || a.OTransform || a.MsTransform || a.msTransform || a.transform || a.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,")).toString().split(","),
                "x" === t && (i = window.WebKitCSSMatrix ? o.m41: 16 === n.length ? parseFloat(n[12]) : parseFloat(n[4])),
                "y" === t && (i = window.WebKitCSSMatrix ? o.m42: 16 === n.length ? parseFloat(n[13]) : parseFloat(n[5])),
                i || 0
            }
            t.params = e,
                t.cols = [],
                t.initialized = !1;
            var c, s, u, d, f, p, h = (c = navigator.userAgent, s = c.match(/(Android);?[\s\/]+([\d.]+)?/), u = c.match(/(iPad).*OS\s([\d_]+)/), d = c.match(/(iPod)(.*OS\s([\d_]+))?/), f = !u && c.match(/(iPhone\sOS)\s([\d_]+)/), p = !!s, u || d || f || navigator.userAgent.toLowerCase().indexOf("safari") >= 0 && navigator.userAgent.toLowerCase().indexOf("chrome") < 0 && !p);
            return t.setValue = function(e, n) {
                var i = 0;
                if (0 === t.cols.length) return t.value = e,
                    void t.updateValue(e);
                for (var a = 0; a < t.cols.length; a++) t.cols[a] && !t.cols[a].divider && (t.cols[a].setValue(e[i], n), i++)
            },
                t.updateValue = function(e) {
                    for (var n = e || [], i = [], a = 0; a < t.cols.length; a++) t.cols[a].divider || (n.push(t.cols[a].value), i.push(t.cols[a].displayValue));
                    n.indexOf(void 0) >= 0 || (t.value = n, t.displayValue = i, t.params.onChange && t.params.onChange(t, t.value, t.displayValue))
                },
                t.initPickerCol = function(e, n) {
                    var i = $(e),
                        c = i.index(),
                        s = t.cols[c];
                    if (!s.divider) {
                        var u, d, f, p, g;
                        s.container = i,
                            s.wrapper = s.container.find(".picker-items-col-wrapper"),
                            s.items = s.wrapper.find(".picker-item"),
                            s.replaceValues = function(e, n, i) {
                                s.destroyEvents(),
                                    s.values = e,
                                    s.displayValues = n;
                                var a = t.columnHTML(s, !0);
                                s.wrapper.html(a),
                                    s.items = s.wrapper.find(".picker-item"),
                                    s.calcSize(),
                                    s.setValue(i || s.values[0], 0, !0),
                                    s.initEvents()
                            },
                            s.calcSize = function() {
                                var e, n;
                                t.params.rotateEffect && (s.container.removeClass("picker-items-col-absolute"), s.width || (s.container[0].style.width = "")),
                                    e = 0,
                                    n = s.container[0].offsetHeight,
                                    s.wrapper[0].offsetHeight,
                                    u = s.items[0] && s.items[0].offsetHeight || 20,
                                    d = u * s.items.length,
                                    f = n / 2 - d + u / 2,
                                    p = n / 2 - u / 2,
                                s.width && (e = s.width, parseInt(e, 10) === e && (e += "px"), s.container[0].style.width = e),
                                t.params.rotateEffect && (s.width || (s.items.each((function() {
                                    var t = $(this);
                                    t[0].style.width = "auto",
                                        e = Math.max(e, t[0].offsetWidth),
                                        t[0].style.width = ""
                                })), s.container[0].style.width = e + 2 + "px"), s.container.addClass("picker-items-col-absolute"))
                            },
                            s.calcSize(),
                            o(s.wrapper, "translate3d(0," + p + "px,0)"),
                            r(s.wrapper, "0ms"),
                            s.setValue = function(e, t, n) {
                                void 0 === t && (t = "");
                                var i = s.wrapper.find('.picker-item[data-picker-value="' + e + '"]').index();
                                void 0 !== i && -1 !== i || (i = 0);
                                var a = -i * u + p;
                                o(s.wrapper, "translate3d(0," + a + "px,0)"),
                                    r(s.wrapper, t + "ms");
                                try {
                                    s.updateItems(i, a, t, n)
                                } catch(e) {}
                            },
                            s.updateItems = function(e, n, i, a) {
                                void 0 === n && (n = l(s.wrapper[0], "y")),
                                void 0 === e && (e = -Math.round((n - p) / u)),
                                e < 0 && (e = 0),
                                e >= s.items.length && (e = s.items.length - 1);
                                var c = s.activeIndex;
                                s.wrapper.find(".picker-selected").removeClass("picker-selected"),
                                    r(s.items, i);
                                var d = s.items.eq(e).addClass("picker-selected");
                                o(d, ""),
                                t.params.rotateEffect && s.items.each((function() {
                                    var e = $(this),
                                        t = (e.index() * u - (p - n)) / u,
                                        i = Math.ceil(s.height / u / 2) + 1,
                                        a = -18 * t;
                                    a > 180 && (a = 180),
                                    a < -180 && (a = -180),
                                        Math.abs(t) > i ? e.addClass("picker-item-far") : e.removeClass("picker-item-far"),
                                        o(e, "translate3d(0, " + ( - n + p) + "px, " + (h ? -110 : 0) + "px) rotateX(" + a + "deg)")
                                })),
                                (a || void 0 === a) && (s.value = d.attr("data-picker-value"), s.displayValue = s.displayValues ? s.displayValues[e] : s.value, c != e && (s.onChange && s.onChange(t, s.value, s.displayValue), t.updateValue()))
                            },
                        n && s.updateItems(0, p, 0);
                        var m, v, b, y, w, x, k, I, T, O, C = !0;
                        s.initEvents = function(e) {
                            var t = /hp-tablet/gi.test(navigator.appVersion),
                                n = "ontouchstart" in window && !t,
                                i = n ? "touchstart": "mousedown",
                                a = n ? "touchmove": "mousemove",
                                o = n ? "touchend": "mouseup",
                                r = e ? "off": "on";
                            s.container[r](i, P),
                                s.container[r](a, S),
                                s.container[r](o, j),
                            "mouseup" == o && document.documentElement.addEventListener("mouseleave", j, !1),
                                s.items[r]("click", L)
                        },
                            s.destroyEvents = function() {
                                s.initEvents(!0)
                            },
                            s.initEvents()
                    }
                    function P(e) {
                        if (!v && !m) {
                            var t = e.originalEvent || e;
                            t.preventDefault(),
                                m = !0,
                                b = y = t.targetTouches ? t.targetTouches[0].pageY: t.pageY,
                                w = (new Date).getTime(),
                                C = !0,
                                x = I = l(s.wrapper[0], "y")
                        }
                    }
                    function S(e) {
                        if (m) {
                            var n = e.originalEvent || e;
                            n.preventDefault(),
                                C = !1,
                                y = n.targetTouches ? n.targetTouches[0].pageY: n.pageY,
                            v || (a(g), v = !0, x = I = l(s.wrapper[0], "y"), r(s.wrapper, "0ms")),
                                n.preventDefault(),
                                k = void 0,
                            (I = x + (y - b)) < f && (I = f - Math.pow(f - I, .8), k = "min"),
                            I > p && (I = p + Math.pow(I - p, .8), k = "max"),
                                o(s.wrapper, "translate3d(0," + I + "px,0)"),
                                s.updateItems(void 0, I, 0, t.params.updateValuesOnTouchmove),
                                O = I - T || I,
                                (new Date).getTime(),
                                T = I
                        }
                    }
                    function j(e) {
                        if (m && v) {
                            var n;
                            m = v = !1,
                                r(s.wrapper, ""),
                            k && o(s.wrapper, "min" === k ? "translate3d(0," + f + "px,0)": "translate3d(0," + p + "px,0)"),
                                n = (new Date).getTime() - w > 300 ? I: I + O * t.params.momentumRatio,
                                n = Math.max(Math.min(n, p), f);
                            var i = -Math.floor((n - p) / u);
                            t.params.freeMode || (n = -i * u + p),
                                o(s.wrapper, "translate3d(0," + parseInt(n, 10) + "px,0)"),
                                s.updateItems(i, n, "", !0),
                                setTimeout((function() {
                                    C = !0
                                }), 100)
                        } else m = v = !1
                    }
                    function L(e) {
                        if (C) {
                            a(g);
                            var t = $(this).attr("data-picker-value");
                            s.setValue(t)
                        }
                    }
                },
                t.columnHTML = function(e, t) {
                    var n = "",
                        i = "";
                    if (e.divider) i += '<div class="picker-items-col picker-items-col-divider ' + (e.textAlign ? "picker-items-col-" + e.textAlign: "") + " " + (e.cssClass || "") + '">' + e.content + "</div>";
                    else {
                        for (var a = 0; a < e.values.length; a++) n += '<div class="picker-item" data-picker-value="' + e.values[a] + '">' + (e.displayValues ? e.displayValues[a] : e.values[a]) + "</div>";
                        i += '<div class="picker-items-col ' + (e.textAlign ? "picker-items-col-" + e.textAlign: "") + " " + (e.cssClass || "") + '"><div class="picker-items-col-wrapper">' + n + "</div></div>"
                    }
                    return t ? n: i
                },
                t.layout = function() {
                    var e, n;
                    t.cols = [];
                    var i = "";
                    for (n = 0; n < t.params.cols.length; n++) {
                        var a = t.params.cols[n];
                        i += t.columnHTML(t.params.cols[n]),
                            t.cols.push(a)
                    }
                    e = '<div class="' + ("picker-modal picker-columns " + (t.params.cssClass || "") + (t.params.rotateEffect ? " picker-3d": "")) + '"><div class="picker-modal-inner picker-items">' + i + '<div class="picker-center-highlight"></div></div></div>',
                        t.pickerHTML = e
                },
                t.init = function() {
                    t.initialized || (t.layout(), t.container = $(t.pickerHTML), t.container.addClass("picker-modal-inline"), $(t.params.container).html(t.container), t.container.find(".picker-items-col").each((function() {
                        var e = !0; (!t.initialized && t.params.value || t.initialized && t.value) && (e = !1),
                            t.initPickerCol(this, e)
                    })), t.value ? t.setValue(t.value, 0) : t.params.value && t.setValue(t.params.value, 0)),
                        t.initialized = !0
                },
                t.init(),
                t
        }; !
            function(e, t) {
                e.picker = function(e) {
                    return new n(e)
                }
            } (window.bui || {}),
            function(e, t) {
                e.pickerdate = function() {
                    function n(e, t) {
                        if (e && e.constructor == Date) return e;
                        if ("number" == typeof e && 13 === String(e).length) return new Date(e);
                        e = String(e);
                        var n = new Date,
                            i = n.getFullYear(),
                            a = n.getMonth() + 1,
                            o = n.getDate();
                        return (e = e.replace(/[-|年|月]/gim, "/").replace(/[时|分|秒|小时|分钟]/gim, ":").replace(/^(\d{4}\/\d+?)($|\s)/, (function(e, t) {
                            return t + "/1"
                        })).replace(/[日|号]/gim, "").replace(/^(\d{1,2}\/\d{1,2}?)($|\s)/, (function(e, t) {
                            return n.getFullYear() + "/" + t
                        }))).indexOf("/") < 0 && e.indexOf(":") > -1 && (e = i + "/" + a + "/" + o + " " + e),
                            4 === e.length ? e += "/1/1 00:00:00": "MM" === t || "M" === t ? e = i + "/" + e + "/1 00:00:00": "dd" !== t && "d" !== t || (e = i + "/" + a + "/" + e + " 00:00:00"),
                            new Date(e)
                    }
                    function i(i) {
                        var a, o, r, l, c, s, u, d, f, p, h, g = e.guid(),
                            m = {
                                id: g,
                                title: "",
                                uid: "",
                                height: 260,
                                popup: !0,
                                mask: !0,
                                autoinit: !0,
                                zIndex: 110,
                                bindValue: !1,
                                handleParent: "",
                                position: "bottom",
                                effect: "fadeInUp",
                                appendTo: "",
                                rotateEffect: !1,
                                modelEvent: "input",
                                buttons: [{
                                    name: "取消",
                                    className: ""
                                },
                                    {
                                        name: "确定",
                                        className: "primary-reverse"
                                    }],
                                onBeforeInit: null,
                                onInited: null,
                                onMask: function() {
                                    w && w.close()
                                },
                                callback: null
                            },
                            v = null,
                            b = this,
                            y = function() {},
                            w = null,
                            x = t.extend(!0, {},
                                m, i);
                        x.appendTo = x.appendTo || e.hasRouter && router.currentPage() || "body",
                            x.callback = function(e) {
                                var o = i.callback && i.callback.call(b, e);
                                if (!1 === o) return ! 1;
                                if (1 == o || void 0 === o) if ("取消" == t(e.target).text().trim() || "cancel" == t(e.target).text().trim() || "关闭" == t(e.target).text().trim()) try {
                                    var r = n(a);
                                    b.value(r)
                                } catch(e) {} else a = b.value(),
                                    v && v[0] && "INPUT" === v[0].nodeName ? (v.val(a), v.trigger(x.modelEvent)) : v && v.text(a);
                                v = null
                            };
                        var k = {},
                            I = ["FullYear", "Month", "Date"],
                            T = ["Hours", "Minutes", "Seconds"],
                            O = {
                                FullYear: "year",
                                Month: "month",
                                Date: "date",
                                Hours: "hour",
                                Minutes: "minute",
                                Seconds: "second"
                            },
                            C = [];
                        function P(e) {
                            var t = new Date;
                            return C.forEach((function(n, i) {
                                t["set" + n](e[k[n]].value - ("Month" == n ? 1 : 0))
                            })),
                                t
                        }
                        function S(e) {
                            var t = n(e);
                            return C.map((function(e, n) {
                                return t["get" + e]() + ("Month" == e ? 1 : 0)
                            }))
                        }
                        function j() {
                            if (!t(this).hasClass("disabled")) {
                                if (x.bindValue) {
                                    v = t(this),
                                        b.el = this;
                                    var e = v.val() || v.text();
                                    e = d && d.indexOf("y") < 0 && d.indexOf("M") > -1 ? (new Date).getFullYear() + "/" + e: e,
                                        b.value(e)
                                }
                                w && !w.isOpen() && w.open()
                            }
                        }
                        this.config = {},
                            this.option = function() {},
                            this.cols = function(e) {
                                e = e || {};
                                var t = [];
                                return p = [],
                                    f = [],
                                    k = {},
                                    C = [],
                                    I.forEach((function(n, i) {
                                        "none" !== e[O[n]] && (C.push(n), t.push(n))
                                    })),
                                    T.forEach((function(t, n) {
                                        "none" !== e[O[t]] && (C.push(t), p.push(t))
                                    })),
                                    t.forEach((function(t, n) {
                                        k[t] = f.length;
                                        var i = O[t],
                                            a = e[i],
                                            o = N[t](a);
                                        o.type = i,
                                            f.push(o)
                                    })),
                                    p.forEach((function(n, i) {
                                        0 == i && 0 != t.length ? f.push(N.Space()) : f.push(N.Divider()),
                                        0 == t.length && (f[0].content = ""),
                                            k[n] = f.length;
                                        var a = O[n],
                                            o = e[a],
                                            r = N[n](o);
                                        r.type = a,
                                            f.push(r)
                                    })),
                                b.picker && (b.picker.params.cols = f, b.picker.initialized = !1, b.picker.init()),
                                    this
                            },
                            this.id = function(e) {
                                e && !c && (c = e)
                            },
                            this.reset = function() {
                                return b.picker && (b.picker.initialized = !1, b.picker.init()),
                                    this
                            },
                            this.empty = function() {
                                return b.picker && e.obj(i.handle).val(""),
                                    this
                            },
                            this.min = function(e) {
                                var t = (new Date).getFullYear() - 1 + "/01/01 00:00:00";
                                return r = n(e || x.min || t),
                                    this
                            },
                            this.max = function(e) {
                                var t = (new Date).getFullYear() + 1 + "/12/31 00:00:00";
                                return l = n(e || x.max || t),
                                    this
                            },
                            this.value = function(e) {
                                if (e) {
                                    var t = S(n(e, b.config.formatValue));
                                    return b.picker.setValue(t, 0),
                                    v && v[0] && "INPUT" === v[0].nodeName && v.trigger(x.modelEvent),
                                        this
                                }
                                return u(b.picker, b.value, b.displayValue)
                            },
                            this.values = function(t) {
                                if (t && "array" === e.typeof(t)) return t.forEach((function(t, n) {
                                    var i = e.$("#" + t.id);
                                    i.val(t.value),
                                    v && v[0] && "INPUT" === v[0].nodeName && i.trigger(x.modelEvent)
                                })),
                                    this.values();
                                var n = [];
                                return e.$(o).each((function(e, t) {
                                    var i = {};
                                    i.id = t.id,
                                        i.value = t.value,
                                        i.name = t.name || "",
                                        n.push(i)
                                })),
                                    n
                            },
                            this.handler = function(t) {
                                return t && o !== t && (o = t, i.handleParent ? e.$(i.handleParent).off("click.bui", o).on("click.bui", o, j) : e.$(o).off("click.bui").on("click.bui", j), j.hasOpen = !1, o = t),
                                    this
                            };
                        var L = {
                            y: function(e, t) {
                                return e.getFullYear().toString().slice( - t)
                            },
                            M: function(e, t) {
                                return ((t > 1 ? "0": "") + (e.getMonth() + 1)).slice( - 2)
                            },
                            d: function(e, t) {
                                return ((t > 1 ? "0": "") + e.getDate()).slice( - 2)
                            },
                            h: function(e, t) {
                                return ((t > 1 ? "0": "") + e.getHours()).slice( - 2)
                            },
                            m: function(e, t) {
                                return ((t > 1 ? "0": "") + e.getMinutes()).slice( - 2)
                            },
                            s: function(e, t) {
                                var n = t > 1 ? "0": "";
                                return (n + e.getSeconds()).slice( - 2)
                            }
                        };
                        this.formatValue = function(e) {
                            return d = e,
                                u = function(t, n, i) {
                                    var a = P(t.cols);
                                    return e.replace(/y+|M+|d+|h+|m+|s+/g, (function(e) {
                                        return L[e[0]](a, e.length)
                                    }))
                                },
                            b.picker && b.picker.updateValue(),
                                this
                        },
                            this.formatDate = function(e, t) {
                                if (null == e) return "";
                                var i = n(e);
                                t = t || "yyyy-MM-dd";
                                var a = {
                                    "M+": i.getMonth() + 1,
                                    "d+": i.getDate(),
                                    "h+": i.getHours(),
                                    "m+": i.getMinutes(),
                                    "s+": i.getSeconds(),
                                    "q+": Math.floor((i.getMonth() + 3) / 3),
                                    S: i.getMilliseconds()
                                };
                                for (var o in /(y+)/.test(t) && (t = t.replace(RegExp.$1, (i.getFullYear() + "").substr(4 - RegExp.$1.length))), a) new RegExp("(" + o + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? a[o] : ("00" + a[o]).substr(("" + a[o]).length)));
                                return t
                            },
                            this.onChange = function(t) {
                                var n = this;
                                return s = x.bindValue ?
                                    function(i) {
                                        v ? v[0] && "INPUT" === v[0].nodeName ? v.val(i) : v.text(i) : e.obj(o).each((function(e, t) {
                                            "INPUT" === t.nodeName ? t.value = i: t.innerTEXT = i
                                        })),
                                        t && t.call(n, i)
                                    }: t || y,
                                    B.call(this, "change", h),
                                    this
                            },
                            this.popup = function(n) {
                                if (n.popup && !w) {
                                    var i = '<div id="' + g + '" class="bui-dialog" >';
                                    n.title && (i += '<div class="bui-dialog-head">' + n.title + "</div>"),
                                        i += '<div class="bui-dialog-main"><div id="' + g + '-picker"></div></div>',
                                    n.buttons && n.buttons.length && (i += '<div class="bui-dialog-foot bui-box">', t.each(n.buttons, (function(e, t) {
                                        var n = "object" == _typeof(t) && "className" in t ? " " + t.className: "",
                                            a = "object" == _typeof(t) && "name" in t ? t.name: t;
                                        i += '<div class="span1"><div class="bui-btn' + n + '">' + a + "</div></div>"
                                    })), i += "</div>"),
                                        i += "</div>",
                                        t(n.appendTo).append(i),
                                        c = e.obj(g + "-picker")
                                } else c = e.obj(n.id);
                                return this
                            };
                        var E = function(e, t, n) {
                                var i = P(e.cols),
                                    a = r["get" + t](),
                                    o = l["get" + t](),
                                    c = i.getTime(),
                                    s = r.getTime(),
                                    u = l.getTime();
                                return c < s && i["get" + t]() < a ? ("Month" == t && (a += 1), void e.cols[k[t]].setValue(a)) : c > u && i["get" + t]() > o ? ("Month" == t && (o += 1), void e.cols[k[t]].setValue(o)) : void(n && (c < s || c > u) && e.cols[k[n]].onChange(e))
                            },
                            N = {};
                        function B(t) {
                            b.self = this == window || this == b ? null: this,
                                e.trigger.apply(b, arguments)
                        }
                        N.FullYear = function(e) {
                            return {
                                type: "year",
                                values: (e = e || {
                                    values: function() {
                                        for (var e = [], t = r.getFullYear(), n = l.getFullYear(), i = t; i <= n; i++) e.push(i);
                                        return e
                                    } ()
                                }).values,
                                displayValues: e.displayValues,
                                onChange: function(e, t, n) {
                                    E(e, "FullYear", k.Month ? "Month": "")
                                }
                            }
                        },
                            N.Month = function(e) {
                                return {
                                    type: "month",
                                    values: (e = e || {
                                        values: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
                                        displayValues: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"]
                                    }).values,
                                    displayValues: e.displayValues,
                                    textAlign: "right",
                                    onChange: function(e, t, n) {
                                        for (var i = new Date,
                                                 a = e.cols[k.FullYear] ? e.cols[k.FullYear].value: i.getFullYear(), o = e.cols[k.Month] ? e.cols[k.Month].value: i.getMonth() + 1, r = new Date(a, parseInt(o), 0).getDate(), l = [], c = 1; c <= r; c++) l.push(c);
                                        var s = e.cols[k.Date];
                                        s && s.replaceValues && s.replaceValues(l, null, s.value < r ? s.value: r),
                                            E(e, "Month", k.Date ? "Date": "")
                                    }
                                }
                            },
                            N.Date = function(e) {
                                return {
                                    type: "date",
                                    values: (e = e || {
                                        values: function() {
                                            var e = 31,
                                                t = [];
                                            do {
                                                t.unshift(e)
                                            } while ( e --);
                                            return t
                                        } (),
                                        displayValues: function() {
                                            var e = 31,
                                                t = [];
                                            do {
                                                t.unshift(e + "天")
                                            } while ( e --);
                                            return t
                                        } ()
                                    }).values,
                                    displayValues: e.displayValues,
                                    onChange: function(e, t, n) {
                                        E(e, "Date")
                                    }
                                }
                            },
                            N.Space = function() {
                                return {
                                    type: "space",
                                    divider: !0,
                                    content: "  "
                                }
                            },
                            N.Hours = function(e) {
                                return {
                                    type: "hour",
                                    values: (e = e ||
                                        function() {
                                            for (var e = [], t = [], n = 0; n < 24; n++) e.push(n),
                                                t.push(("0" + n).slice( - 2));
                                            return {
                                                type: "hour",
                                                values: e,
                                                displayValues: t
                                            }
                                        } ()).values,
                                    displayValues: e.displayValues,
                                    onChange: function(e, t, n) {
                                        E(e, "Hours", k.Minutes ? "Minutes": "")
                                    }
                                }
                            },
                            N.Divider = function() {
                                return {
                                    type: "divider",
                                    divider: !0,
                                    textAlign: "center",
                                    content: ":"
                                }
                            },
                            N.Minutes = function(e) {
                                return {
                                    type: "minute",
                                    values: (e = e ||
                                        function() {
                                            for (var e = [], t = [], n = 0; n < 60; n++) e.push(n),
                                                t.push(("0" + n).slice( - 2));
                                            return {
                                                type: "minute",
                                                values: e,
                                                displayValues: t
                                            }
                                        } ()).values,
                                    displayValues: e.displayValues,
                                    onChange: function(e, t, n) {
                                        E(e, "Minutes", k.Seconds ? "Seconds": "")
                                    }
                                }
                            },
                            N.Seconds = function(e) {
                                return {
                                    type: "second",
                                    values: (e = e ||
                                        function() {
                                            for (var e = [], t = [], n = 0; n < 60; n++) e.push(n),
                                                t.push(("0" + n).slice( - 2));
                                            return {
                                                type: "second",
                                                values: e,
                                                displayValues: t
                                            }
                                        } ()).values,
                                    displayValues: e.displayValues,
                                    onChange: function(e, t, n) {
                                        E(e, "Seconds")
                                    }
                                }
                            },
                            b.init = function(i) {
                                var o, p, g, m = t.extend(!0, x, i);
                                m.onBeforeInit && m.onBeforeInit.call(b, m),
                                    b.config = m,
                                    b.min(m.min),
                                    b.max(m.max),
                                    b.cols(m.cols),
                                    b.id(m.id),
                                    b.$el = e.obj(m.handle) || null,
                                    b.el = b.$el ? b.$el[0] : null,
                                    b.handler(m.handle),
                                    b.popup(m),
                                    b.onChange(m.onChange),
                                    b.formatValue(m.formatValue || "yyyy-MM-dd hh:mm:ss"),
                                    d = m.formatValue || "yyyy-MM-dd hh:mm:ss",
                                    b.picker = e.picker({
                                        container: c,
                                        rotateEffect: m.rotateEffect,
                                        value: S(m.value ? n(m.value) : (o = r, p = l, g = new Date, g.getTime() < o.getTime() ? o: g.getTime() > p.getTime() ? p: g)),
                                        onChange: function(e, t, n) {
                                            var i = u(e, t, n);
                                            h != i && (h = i, s && s.call(b, i), B.call(this, "change", i))
                                        },
                                        cols: f
                                    });
                                var v = m.uid;
                                m.popup && !w && (delete m.uid, (w = e.dialog.call(b, m)) && w.on("open", (function() {
                                    a = u(b.picker, b.value, b.displayValue),
                                    b.picker && (b.picker.initialized = !1, b.picker.init()),
                                        B.call(b, "show")
                                })), w && w.on("close", (function() {
                                    B.call(b, "hide")
                                }))),
                                v && e.history.setUI && e.history.setUI({
                                    uid: v,
                                    ui: b
                                }),
                                m.onInited && m.onInited.call(b, m)
                            },
                        x.autoinit && b.init(x),
                            this.name = "pickerdate",
                            this.disabled = function() {
                                var t = e.obj(o);
                                return t && t.addClass("disabled"),
                                    this
                            },
                            this.open = function(e) {
                                return w.open(e),
                                    this
                            },
                            this.isOpen = function() {
                                return w.isOpen()
                            },
                            this.close = function(e) {
                                return w.close(e),
                                    this
                            },
                            this.modifyTitle = function(t) {
                                return e.obj(g).find(".bui-dialog-head").html(t),
                                    this
                            },
                            this.enabled = function() {
                                var t = e.obj(o);
                                return t && t.removeClass("disabled"),
                                    this
                            },
                            this.destroy = function(e) {
                                e = 1 == e;
                                this.off("show"),
                                    this.off("hide"),
                                    this.off("change"),
                                w && w.destroy(e),
                                    b = null
                            },
                            this.widget = function(t) {
                                var n = {
                                    dialog: w || {}
                                };
                                return e.widget.call(n, t)
                            },
                            this.on = function(t, n) {
                                return e.on.apply(b, arguments),
                                    this
                            },
                            this.off = function(t, n) {
                                return e.off.apply(b, arguments),
                                    this
                            }
                    }
                    return function(e) {
                        return new i(e)
                    }
                } ()
            } (window.bui || {},
                window.libs),
            function(e, t) {
                e.levelselect = function(n) {
                    var i = t.extend(!0, {},
                            {
                                popup: !0,
                                data: [],
                                uid: "",
                                height: 300,
                                appendTo: "",
                                title: "所在地区",
                                trigger: null,
                                placeholder: "请选择",
                                level: 3,
                                visibleNum: 2,
                                scrollNum: 1,
                                log: !1,
                                mask: !0,
                                zIndex: 121,
                                autoClose: !0,
                                fullscreen: !1,
                                position: "bottom",
                                effect: "fadeInUp",
                                showValue: !0,
                                onMask: null,
                                value: [],
                                autoinit: !0,
                                stopPropagation: !0,
                                onChange: null,
                                onBeforeInit: null,
                                template: null,
                                onInited: null,
                                toggle: !1,
                                field: {
                                    name: "n",
                                    icon: "icon",
                                    image: "image",
                                    value: "",
                                    data: ["c", "a"]
                                }
                            },
                            n),
                        a = [],
                        o = bui.guid(),
                        r = o + "-slide",
                        l = null,
                        c = null,
                        s = 0,
                        u = [],
                        d = null,
                        f = null,
                        p = null,
                        h = [],
                        g = [],
                        m = [],
                        v = [],
                        b = null,
                        y = {
                            name: "levelselect",
                            init: x,
                            show: k,
                            hide: function(e) {
                                j.call(this, "beforehide");
                                var t = {};
                                "function" == typeof e ? t.callback = function() {
                                    e && e.call(y),
                                        j.call(y, "hide")
                                }: "string" == typeof e ? t.effect = e: "object" === _typeof(e) && (t = e);
                                b && b.close(t)
                            },
                            widget: function(t) {
                                var n = {
                                    dialog: b,
                                    slide: d,
                                    select: h
                                };
                                return e.widget.call(n, t)
                            },
                            value: T,
                            reset: function() {
                                return h.forEach((function(e, t) {
                                    e.value(""),
                                        0 == t ? (C(t, i.placeholder), e.text(i.placeholder), d && d.to(t)) : (C(t, ""), e.text(""))
                                })),
                                    this
                            },
                            setNav: C,
                            destroy: function(e) {
                                for (var t = 0; t < h.length; t++) h[t].destroy(),
                                    v[t].text(""),
                                    m[t].off("change"),
                                    g[t].off("click");
                                b.destroy(),
                                    b = null,
                                    d.destroy(),
                                    d = null,
                                    a = [],
                                    l = null,
                                    c = null,
                                    s = 0,
                                    u = [],
                                    h = [],
                                    g = [],
                                    m = [],
                                    v = [],
                                    S("change"),
                                    S("lastchange")
                            },
                            option: function(t, n) {
                                return e.option.call(y, t, n)
                            },
                            to: function(e, t) {
                                return d && d.to(e, t),
                                    this
                            },
                            prev: function() {
                                return d && d.prev(),
                                    this
                            },
                            next: function() {
                                return d && d.next(),
                                    this
                            },
                            on: function(t, n) {
                                return e.on.apply(y, arguments),
                                    this
                            },
                            off: S,
                            trigger: j
                        };
                    n.appendTo = n.appendTo || e.hasRouter && router.currentPage() || "body";
                    var w = n.id ? t(n.id) : t(n.appendTo);
                    function x(n) {
                        var x = i = y.config = t.extend(!0, {},
                            i, n);
                        x.onBeforeInit && x.onBeforeInit.call(y, x);
                        var C = "";
                        x.popup ? (b || (C = function(t) {
                            var n = "";
                            return n += '<div id="' + o + '" class="bui-dialog bui-levelselect" style="display:none;">',
                                n += '    <div class="bui-dialog-head">' + t.title + "</div>",
                                n += '    <div class="bui-dialog-main">',
                                n += P(t),
                                n += "    </div>",
                                n += '    <div class="bui-dialog-close"><i class="' + e.config.icon.close + '"></i></div>',
                                n += "</div>"
                        } (x), w.append(C), b = bui.dialog({
                            id: o,
                            height: x.height,
                            mask: x.mask,
                            scroll: !1,
                            zIndex: x.zIndex,
                            autoClose: x.autoClose,
                            fullscreen: x.fullscreen,
                            position: x.position,
                            effect: x.effect,
                            onMask: x.onMask
                        })), l = e.obj(o)) : (C = P(x), w.append(C), l = e.objId(o)),
                            f = e.$(x.trigger);
                        var S = 0 === x.trigger.indexOf("#") || 1 === f.length;
                        S ? (p = f).empty() : p = f.parent(),
                            y.$el = l,
                            c = e.objId(r);
                        var L = 0,
                            E = function() {
                                var n;
                                function i(e) {
                                    var n = t(this).index(),
                                        i = d && d.index() || 0;
                                    1 == x.visibleNum ? d && d.to(n) : (n > i ? d && d.next() : d && d.prev(), t(this).addClass("active").siblings().removeClass("active")),
                                    x.stopPropagation && e.stopPropagation()
                                }
                                m[n = L] = e.$(".select-level-val-" + n, l),
                                    g[n] = e.$(".select-level-" + n, c),
                                S && p.append('<span class="bui-levelselect-value"></span>'),
                                    v[n] = p.find(S ? ".bui-levelselect-value": x.trigger).eq(n),
                                h[n] || (h[n] = bui.select({
                                    id: g[n],
                                    type: "select",
                                    direction: "right",
                                    field: {
                                        name: x.field.name,
                                        icon: x.field.icon,
                                        image: x.field.image,
                                        value: x.field.value || x.field.name
                                    },
                                    popup: !1,
                                    toggle: x.toggle,
                                    data: [],
                                    template: x.template
                                }), h[n].on("change", (function(i) {
                                    x.log && console.log("change", n);
                                    var o = h[n].index() || 0,
                                        r = h[n].value() || "",
                                        l = h[n].text() || h[n].value();
                                    u[n] = {
                                        name: l,
                                        value: r,
                                        index: o
                                    };
                                    var c = [];
                                    "string" == typeof x.field.data ? c = a[n][o][x.field.data] || a[n][o] : x.field.data && "array" === e.typeof(x.field.data) && x.field.data.forEach((function(e, t) {
                                        a[n][o][x.field.data[t]] && a[n][o][x.field.data[t]].length && (c = a[n][o][x.field.data[t]])
                                    })),
                                        a[n + 1] = c,
                                    h[n + 1] && h[n + 1].option("data", c),
                                    h[n + 2] && h[n + 2].option("data", []),
                                    g[n] && g[n].find(".bui-btn").removeClass("active"),
                                        t(i.target).parents(".bui-btn").addClass("active"),
                                        O(n),
                                    m[n] && m[n].text(l),
                                    m[n + 1] && m[n + 1].text(x.placeholder),
                                    m[n + 2] && m[n + 2].text(""),
                                    v[n] && v[n].text(l),
                                    v[n + 1] && v[n + 1].text(x.placeholder),
                                    v[n + 2] && v[n + 2].text(""),
                                        i.context = {
                                            trigger: v[n],
                                            selector: m[n],
                                            index: n,
                                            select: h[n],
                                            data: a[n]
                                        };
                                    var s = a[n],
                                        f = a[n + 1] || [];
                                    j.call(y, "change", i, s, f),
                                    x.onChange && x.onChange.call(y, i, s, f),
                                    (n == x.level - 1 || f.length < 1) && j.call(y, "lastchange", i, s, f),
                                    1 == x.visibleNum && (x.log && console.log("next"), d.next()),
                                    x.popup && !b.isOpen() || (n == x.level - 1 ? (x.log && console.log("close"), x.autoClose && b && b.close()) : 0 != n && (x.log && console.log("next"), d.next()))
                                })), m[n].on("click.bui", i), v[n].on("click.bui", i))
                            };
                        for (L = 0; L < x.level; L++) E(); !
                            function(t) {
                                e.$(t.trigger).click((function() {
                                    k()
                                }))
                            } (x);
                        var N = window && window.viewport && window.viewport.height() || t(window).height(),
                            B = x.fullscreen ? N: String(x.height).indexOf("%") > -1 ? N * parseFloat(x.height) / 100 : x.height;
                        x.popup && b ? b.on("open", (function(e) {
                            s = B - l.find(".select-value").height() - l.children(".bui-dialog-head").height(),
                                I(x)
                        })) : (s = B, I(x)),
                        m[0] && m[0].text(x.placeholder),
                        v[0] && v[0].text(x.placeholder),
                            a[0] = x.data,
                            h[0].option("data", a[0]),
                        x.uid && e.history.setUI && e.history.setUI({
                            uid: x.uid,
                            ui: y
                        }),
                        x.value && T(x.value),
                        x.onInited && x.onInited.call(this, x)
                    }
                    function k(e) {
                        j.call(this, "beforeshow");
                        var t = {};
                        "function" == typeof e ? t.callback = function() {
                            e && e.call(y),
                                j.call(y, "show")
                        }: "string" == typeof e ? t.effect = e: "object" === _typeof(e) && (t = e),
                        b && b.open(t)
                    }
                    function I(e) {
                        d || (d = bui.tab({
                            id: r,
                            height: s,
                            scroll: !0,
                            zoom: !1,
                            visibleNum: e.visibleNum,
                            scrollNum: e.scrollNum
                        }).lock()).on("to", (function(e) {
                            O(e)
                        }))
                    }
                    function T(t) {
                        if (void 0 === t) return u;
                        t && "array" === e.typeof(t) ? t.forEach((function(e, t) {
                            "string" == typeof e ? h[t].value(e) : "object" === _typeof(e) && (h[t].text(e.name || ""), h[t].value(e.value || ""))
                        })) : e.showLog("levelselect.value() 参数是一个数组类型")
                    }
                    function O(e) {
                        t(".select-value div", l).removeClass("active"),
                            t(".select-value div", l).eq(e).addClass("active")
                    }
                    function C(e, n) {
                        return t(".select-value div", l).eq(e).html(n),
                            v[e].html(n),
                            this
                    }
                    function P(e) {
                        var t = "",
                            n = 0;
                        if (e.popup || (t += '<div id="' + o + '" class="bui-levelselect">'), e.showValue) {
                            for (t += '    <div class="bui-box select-value">', n = 0; n < e.level; n++) t += '        <div class="select-level-val-' + n + '"></div>';
                            t += "    </div>"
                        }
                        for (t += '<div id="' + r + '" class="bui-tab bui-levelselect-tab">', t += '    <div class="bui-tab-main">', t += "        <ul>", n = 0; n < e.level; n++) t += "            <li>",
                            t += '                <div class="select-level-' + n + '"></div>',
                            t += "            </li>";
                        return t += "        </ul>",
                            t += "    </div>",
                            t += "</div>",
                        e.popup || (t += "</div>"),
                            t
                    }
                    function S(t, n) {
                        return e.off.apply(y, arguments),
                            this
                    }
                    function j(t) {
                        y.self = this == window || this == y ? null: this,
                            e.trigger.apply(y, arguments)
                    }
                    return i.onBeforeInit && i.onBeforeInit.call(y, i),
                    i.autoinit && x(i),
                        y
                }
            } (window.bui || {},
                window.libs),
            t((function(e) { !
                function(t, n) {
                    t.tab = function(i) {
                        var a = e.config = n.extend(!0, {},
                                {
                                    id: "",
                                    uid: "",
                                    menu: ".bui-tab-head > ul",
                                    children: ".bui-tab-main > ul",
                                    header: "header",
                                    footer: "footer",
                                    main: ".bui-tab-main",
                                    item: "li",
                                    prev: ".bui-tab-prev",
                                    next: ".bui-tab-next",
                                    data: null,
                                    navscroll: !1,
                                    loadall: !1,
                                    position: "top",
                                    BiconBadge: !0,
                                    iconPosition: "left",
                                    loaded: null,
                                    compiled: null,
                                    sideWidth: 0,
                                    align: "center",
                                    alignClassName: "",
                                    stopHandle: "",
                                    width: 0,
                                    height: 0,
                                    relative: !1,
                                    zoom: !1,
                                    swipe: !0,
                                    animate: !0,
                                    bufferEffect: !1,
                                    visibleNum: 1,
                                    scrollNum: 1,
                                    distance: 40,
                                    direction: "x",
                                    autoplay: !1,
                                    autoheight: !1,
                                    scroll: !0,
                                    index: 0,
                                    fullscreen: !1,
                                    autopage: !1,
                                    autoload: !1,
                                    autoinit: !0,
                                    template: null,
                                    async: !0,
                                    callback: null,
                                    onBeforeInit: null,
                                    onInited: null,
                                    onStart: null,
                                    onMove: null,
                                    onEnd: null
                                },
                                t.config.slide, i),
                            o = null,
                            r = null,
                            l = t.guid(); (o = function(e) {
                            r = n.extend(!0, e.data),
                            e.data && (e.menu = ".".concat(l, "-menu"), e.children = ".".concat(l, "-main"), i = r, o = (a.template || p)(i), t.$(a.id).html(o), e.data = null);
                            var i, o;
                            var c = t.$(".bui-tab-sidenav");
                            if (r && "left" == e.position) {
                                e.sideWidth && c.width(e.sideWidth);
                                var s = e.sideWidth || c.width();
                                e.width = e.width || n(window).width() - s,
                                    t.$(e.id).addClass("bui-tab-left"),
                                    t.$(e.id).css({
                                        "margin-left": s
                                    }),
                                    c.css("left", -s)
                            } else if (r && "right" == e.position) {
                                e.sideWidth && c.width(e.sideWidth);
                                s = e.sideWidth || c.width();
                                e.width = e.width || n(window).width() - s,
                                    t.$(e.id).addClass("bui-tab-right"),
                                    c.css({
                                        left: "100%"
                                    })
                            }
                            var u = t.slide(e);
                            "left" != e.position && "right" != e.position || t.$(e.id).css({
                                overflow: "visible"
                            });
                            r && u.on("to", (function(e, t) {
                                var i = this.index(),
                                    o = r && r[i] || {},
                                    l = a.loadall ? ".delay-item": "#".concat(o.id);
                                loader.delay({
                                    id: l,
                                    param: n.extend({},
                                        o.param, t),
                                    everytime: o.everytime,
                                    loaded: a.loaded,
                                    compiled: a.compiled
                                })
                            })).to(e.index);
                            return e.uid && t.history.setUI && t.history.setUI({
                                uid: e.uid,
                                ui: u
                            }),
                                u
                        } (a)).name = "tab",
                            o.templateNav = d,
                            o.renderNav = function(e, n) {
                                var i = templatesNav(n || r);
                                t.$(e).html(i)
                            },
                            o.addBadge = function(e, n) {
                                if (e && !/[0-9]/.test(e)) return this;
                                var i = t.$(a.id).find(a.menu).children().eq(e),
                                    o = void 0 !== n ? n: "",
                                    r = i.find(".bui-badges"),
                                    l = i.find("i");
                                r.size() ? r.text(n) : l.size() && a.iconBadge ? l.append('<span class="bui-badges">'.concat(o, "</span>")) : i.append('<span class="bui-badges">'.concat(o, "</span>"));
                                return this
                            },
                            o.removeBadge = function(e) {
                                var n = t.$(a.id).find(a.menu).children();
                                void 0 !== e ? n.eq(e).find(".bui-badges").remove() : n.find(".bui-badges").remove();
                                return this
                            };
                        var c = o.add,
                            s = o.remove,
                            u = !1;
                        function d(e) {
                            var t = "left" == a.position || "right" == a.position ? " bui-tab-sidenav": "",
                                n = a.navscroll ? '<div class="bui-navbar">': "",
                                i = "".concat(n, '<ul class="bui-nav ').concat(l, "-menu ").concat(t, '">');
                            return e && e.forEach((function(e, t) {
                                i += f(e)
                            })),
                                i += "</ul>\n                ".concat(a.navscroll ? "</div>": "")
                        }
                        function f(e, t) {
                            var n = "",
                                i = function(e, t) {
                                        return e.icon ? e.icon.indexOf("&#") > -1 ? '<i class="icon">'.concat(e.icon, "</i>") : '<i class="'.concat(e.icon, '"></i>') : ""
                                    } (e) ||
                                    function(e, t) {
                                        return e.image ? '<i class="icon"><img src="'.concat(e.image, '" /></i>') : ""
                                    } (e),
                                o = e.needRemove ? '<i class="icon-close"></i>': "",
                                r = e.className ? "".concat(e.className) : "";
                            switch (a.iconPosition) {
                                case "left":
                                    n += '<li class="bui-btn bui-align-'.concat(a.align, " ").concat(r, '"><span class="bui-text-wrap">').concat(i).concat(e.title).concat(o, "</span></li>");
                                    break;
                                case "right":
                                    n += '<li class="bui-btn bui-align-'.concat(a.align, " bui-box ").concat(r, '"><div class="span1">').concat(e.title, "</div>").concat(i).concat(o, "</li>");
                                    break;
                                case "bottom":
                                    n += '<li class="bui-btn bui-align-'.concat(a.align, " ").concat(i ? "bui-box-vertical": "bui-box", " ").concat(r, '"><div class="span1">').concat(e.title, "</div>").concat(i).concat(o, "</li>");
                                    break;
                                default:
                                    n += '<li class="bui-btn bui-align-'.concat(a.align, " ").concat(i ? "bui-box-vertical": "bui-box", " ").concat(r, '">').concat(i, '<div class="span1">').concat(e.title).concat(o, "</div></li>")
                            }
                            return n
                        }
                        function p(e) {
                            var t = "",
                                n = a.menu.indexOf("#") > -1 ? "": function(e) {
                                    var t = "bottom" == a.position ? "bui-tab-foot": "",
                                        n = '<div class="bui-tab-head '.concat(t, '">');
                                    return n += d(e),
                                    n + "</div>"
                                } (e),
                                i = function(e) {
                                    var t = "left" == a.position || "right" == a.position ? '<div class="span1">': "",
                                        n = "".concat(t, '<div class="bui-tab-main"><ul class="').concat(l, '-main">');
                                    return e && e.forEach((function(e, t) {
                                        n += '<li class="bui-tab-main-item">\n                            <component id="'.concat(e.id, '" class="delay-item" name="').concat(e.name, '" delay="true"></component>\n                        </li>')
                                    })),
                                        n += "</ul></div>",
                                        n += "left" == a.position || "right" == a.position ? "</div>": ""
                                } (e);
                            switch (a.position) {
                                case "top":
                                    t = n + i;
                                    break;
                                case "bottom":
                                    t = i + n;
                                    break;
                                default:
                                    t = n + i
                            }
                            return t
                        }
                        return o.add = function(e) {
                            var i = n.extend(!0, {
                                    title: "",
                                    needRemove: !1,
                                    menuTemplate: null
                                },
                                e);
                            if (i.menuTemplate = e && e.menuTemplate || i.title && f(i) || "", i.needRemove && !u) {
                                var a = t.obj(this.config.id),
                                    r = this.config; (r.menu.indexOf("#") > -1 ? t.obj(r.menu) : a.find(r.menu).eq(0)).off("click.bui", ".icon-close").on("click.bui", ".icon-close", (function(e) {
                                    var t = n(this).parents(".bui-btn").index();
                                    o.remove({
                                        index: t
                                    })
                                })),
                                    u = !0
                            }
                            return c(i)
                        },
                            o.remove = function(e) {
                                var i = n.extend(!0, {
                                            index: -1,
                                            keyname: "id",
                                            target: "",
                                            callback: null
                                        },
                                        e),
                                    a = i.index,
                                    o = i.keyname,
                                    l = i.target.indexOf("#") > -1 ? i.target.substr(1) : i.target || "";
                                return "array" === t.typeof(r) && l && (a = t.array.index(r, l, o)) > -1 && t.array.deleteIndex(r, a),
                                    i.index = a,
                                    s(i)
                            },
                            o.getData = function(e) {
                                return r
                            },
                            o
                    }
                } (window.bui || {},
                    window.libs)
            })),
            function(e, t) {
                e.input = function(n) {
                    var i, a, o, r, l, c = {
                            name: "input",
                            handle: {},
                            empty: function() {
                                return a.val(""),
                                    a.next().css("display", "none"),
                                s.showLength && r.text(0),
                                    this
                            },
                            value: function(e) {
                                if (void 0 !== e) return a.val(e),
                                    l.trigger(s.event),
                                    this;
                                return a.val()
                            },
                            reset: function() {
                                return a.val(""),
                                    l.trigger(s.event),
                                    this
                            },
                            toggleType: function() {
                                "text" == a.attr("type") ? a.attr("type", "password") : a.attr("type", "text");
                                return this
                            },
                            on: function(t, n) {
                                return e.on.apply(c, arguments),
                                    this
                            },
                            off: function(t, n) {
                                return e.off.apply(c, arguments),
                                    this
                            },
                            widget: function(t) {
                                return e.widget.call({},
                                    t)
                            },
                            option: function(t, n) {
                                return e.option.call(c, t, n)
                            },
                            config: s,
                            init: d
                        },
                        s = c.config = t.extend(!0, {},
                            {
                                id: "",
                                uid: "",
                                target: "input,textarea",
                                event: "input",
                                iconClass: ".icon-remove",
                                showIcon: !0,
                                showLength: !1,
                                maxLength: 0,
                                onInput: null,
                                onBlur: null,
                                onFocus: null,
                                autoinit: !0,
                                onBeforeInit: null,
                                onChange: null,
                                onInited: null,
                                callback: null
                            },
                            e.config.searchbar, n),
                        u = !1;
                    function d(n) {
                        var d = t.extend(!0, s, n);
                        if (d.onBeforeInit && d.onBeforeInit.call(c, d), s = c.config = d, "" != d.id && null !== d.id) {
                            if (i = e.obj(d.id), c.$el = i, l = i.find(d.target), a = l.eq(0), o = e.unit.startWithClass(d.iconClass) ? d.iconClass: "." + d.iconClass, !u) {
                                if (function(e) {
                                    var n = !1;
                                    l.on(e.event, (function(i) {
                                        var a = this.value,
                                            s = t(this).parent(),
                                            u = s.find(o);
                                        a.length > 0 && e.showIcon ? u && u.length ? u.css("display", "block") : (s.append('<i class="' + o.replace(/\./g, " ").substr(1) + '"></i>'), u = l.find(o)) : u && u.css("display", "none"),
                                        e.showLength && (r = s.find("em")).text(a.length),
                                        n || (e.onInput && e.onInput.call(c, i), f.call(c, "input", i))
                                    })).on("compositionstart", (function() {
                                        n = !0
                                    })).on("compositionend", (function(t) {
                                        n = !1;
                                        var i = a.val();
                                        e.onInput && e.onInput.call(c, t, i)
                                    })),
                                    e.onChange && l.off("change").on("change", (function(t) {
                                        e.onChange.call(c, t),
                                            f.call(c, "change", t)
                                    })),
                                    e.onFocus && l.off("focus").on("focus", (function(n) {
                                        var r = this.value;
                                        a = t(this),
                                        e.showIcon && (i.find(o).css("display", "none"), r && t(this).next().css("display", "block")),
                                            e.onFocus.call(c, n),
                                            f.call(c, "focus", n)
                                    })),
                                    e.onBlur && l.off("blur").on("blur", (function(t) {
                                        var n = e.onBlur && e.onBlur.call(c, t);
                                        1 != n && null !== n || this.value,
                                            f.call(c, "blur", t)
                                    })),
                                    e.showIcon && i.off("click.bui", o).on("click.bui", o, (function(t) {
                                        e.callback && e.callback.call(c, t),
                                            f.call(c, "click", t)
                                    })),
                                        u = !0
                                } (d), d.showLength) {
                                    var p = function(e) {
                                        return a.parent(),
                                        '<span class="bui-input-length"><em>0</em>/' + e.maxLength + "</span>"
                                    } (d);
                                    i.append(p)
                                }
                                d.maxLength > 0 && l.attr("maxlength", d.maxLength)
                            }
                            return d.uid && e.history.setUI && e.history.setUI({
                                uid: d.uid,
                                ui: c
                            }),
                            d.showLength && l.trigger(d.event),
                            d.onInited && d.onInited.call(c, d),
                                this
                        }
                    }
                    function f(t) {
                        c.self = this == window || this == c ? null: this,
                            e.trigger.apply(c, arguments)
                    }
                    return s.autoinit && d(s),
                        c
                }
            } (bui || {},
                libs),
            function(e, t) {
                e.timer = function(n) {
                    var i = {
                            uid: "",
                            interval: 1e3,
                            target: null,
                            reduce: !0,
                            onEnd: null,
                            onProcess: null,
                            fixZero: !0,
                            type: "number",
                            time: 10,
                            times: 0
                        },
                        a = t.extend({},
                            i, n),
                        o = a.reduce,
                        r = null,
                        l = 0,
                        c = !1,
                        s = a.time,
                        u = !1,
                        d = null,
                        f = null,
                        p = {
                            name: "timer",
                            stop: function(e) {
                                l = 0,
                                    d = g(a),
                                    clearTimeout(f),
                                    f = null,
                                e && e.call(this)
                            },
                            start: o ?
                                function e() {
                                    c && (d = l, c = !1);
                                    var t = m(d);
                                    if (d <= 0) return d = 0,
                                    r && r.text(t.value),
                                    a.onEnd && a.onEnd.call(this, t),
                                        clearTimeout(f),
                                        void(u = !1);
                                    r && r.text(t.value),
                                    a.onProcess && a.onProcess.call(this, t),
                                        d--,
                                        u = !0;
                                    return f = setTimeout((function() {
                                        e()
                                    }), a.interval),
                                        this
                                }: function e() {
                                    c && (d = l, c = !1);
                                    var t = m(d);
                                    if (d >= s) return r && r.text(t.value),
                                        d = s,
                                    a.onEnd && a.onEnd.call(this, t),
                                        clearTimeout(f),
                                        void(u = !1);
                                    r && r.text(t.value),
                                    a.onProcess && a.onProcess.call(this, t),
                                        d++,
                                        u = !0;
                                    return f = setTimeout((function() {
                                        e()
                                    }), a.interval),
                                        this
                                },
                            restart: function() {
                                return l = 0,
                                    d = g(a),
                                    f = clearTimeout(f),
                                    start(),
                                    this
                            },
                            status: function() {
                                return u
                            },
                            pause: function() {
                                return l = d,
                                    c = !0,
                                    clearTimeout(f),
                                    this
                            }
                        };
                    function h(n) {
                        return a = t.extend({},
                            i, n),
                            o = a.reduce,
                            r = a.target ? e.obj(a.target) : null,
                            l = 0,
                            c = !1,
                            s = a.times || a.time,
                            u = !1,
                            d = g(a),
                            f = null,
                        a.uid && e.history.setUI && e.history.setUI({
                            uid: a.uid,
                            ui: p
                        }),
                            this
                    }
                    function g(t) {
                        var n = null;
                        switch (t.type) {
                            case "minute":
                                n = 60 * parseInt(s, 10);
                                break;
                            case "hour":
                                n = 60 * parseInt(s, 10) * 60;
                                break;
                            case "day":
                                n = 60 * parseInt(s, 10) * 60 * 24;
                                break;
                            case "date":
                                n = (e.date.convert(s).getTime() - (new Date).getTime()) / 1e3;
                                break;
                            case "second":
                            default:
                                n = parseInt(s, 10)
                        }
                        return o || (s = n, n = 0),
                            n
                    }
                    function m(t) {
                        var n = new Date,
                            i = e.date.format(n, "yyyy-MM-dd"),
                            o = 0,
                            l = 0,
                            c = 0,
                            s = "",
                            u = parseInt(t % 60, 10);
                        switch (a.type) {
                            case "minute":
                                l = parseInt(t / 60, 10),
                                    s = "".concat(v(l), ":").concat(v(u));
                                break;
                            case "hour":
                                o = parseInt(t / 60 / 60, 10),
                                    l = parseInt(t / 60 % 60, 10),
                                    s = "".concat(v(o), ":").concat(v(l), ":").concat(v(u));
                                break;
                            case "date":
                                i = e.date.format(a.times || a.time, "yyyy-MM-dd"),
                                    c = parseInt(t / 60 / 60 / 24, 10),
                                    o = parseInt(t / 60 / 60 % 24, 10),
                                    l = parseInt(t / 60 % 60, 10),
                                    s = "剩余".concat(c, "天 ").concat(v(o), ":").concat(v(l), ":").concat(v(u));
                                break;
                            case "day":
                                i = e.date.format(n.getTime() + 1e3 * t, "yyyy-MM-dd"),
                                    c = parseInt(t / 60 / 60 / 24, 10),
                                    o = parseInt(t / 60 / 60 % 24, 10),
                                    l = parseInt(t / 60 % 60, 10),
                                    s = "剩余".concat(c, "天 ").concat(v(o), ":").concat(v(l), ":").concat(v(u));
                                break;
                            case "second":
                                l = parseInt(t / 60, 10),
                                    s = "".concat(v(l), ":").concat(v(u));
                                break;
                            case "number":
                                l = parseInt(t / 60, 10),
                                    s = "".concat(v(parseInt(t, 10)))
                        }
                        return {
                            init: h,
                            date: i,
                            day: c,
                            hour: o,
                            minute: l,
                            second: u,
                            count: t,
                            value: s,
                            target: r && r[0]
                        }
                    }
                    function v(e) {
                        return e < 10 && a.fixZero ? "0" + e: e
                    }
                    return h(a),
                        p
                }
            } (window.bui || {},
                window.libs),
            function(e, t) {
                e.extend({
                    name: "floor",
                    config: {
                        id: "",
                        menu: "",
                        handle: ".bui-btn",
                        floorItem: ".bui-floor-item",
                        footer: ".bui-floor-footer",
                        area: .5,
                        delay: 200,
                        height: "inherit",
                        distance: 1,
                        onScroll: null,
                        onScrollTop: null,
                        onScrollBottom: null,
                        onLoaded: null
                    },
                    callback: function(n) {
                        var i = this,
                            a = null,
                            o = null,
                            r = null,
                            l = null,
                            c = !0,
                            s = !1,
                            u = !0,
                            d = !0,
                            f = null,
                            p = 0,
                            h = [];
                        function g() {
                            h = [],
                                l.each((function(e, t) {
                                    var n = {
                                        top: "none" === this.style.display ? -1 : this.offsetTop,
                                        display: this.style.display
                                    };
                                    h.push(n)
                                }))
                        }
                        i.init = function(n) {
                            var l = t.extend(!0, i.config, n);
                            i.config = l,
                            l.id || e.showLog("id 不能为空"),
                                this.resize(l),
                                g(),
                            s ||
                            function(e) {
                                var n = function(n) {
                                    if (c) {
                                        var a = t(this).scrollTop();
                                        0 === a && (n.index = 0, i.trigger("scrolltop", n), e.onScrollTop && e.onScrollTop.call(i, n)),
                                        a > 5 && u && (i.getSelector(e), g(), u = !1);
                                        var o = p * parseFloat(e.area),
                                            l = 0;
                                        for (l = 0; l < h.length; l++) {
                                            var s = h[l];
                                            if (s.top > -1) {
                                                var d = s.top - a;
                                                if (s.top == a && 0 == a) return r && r.removeClass("active"),
                                                r && r.eq(l).addClass("active"),
                                                    n.index = l,
                                                    void i.trigger("scrollto", n);
                                                d < o && (r && r.removeClass("active"), r && r.eq(l).addClass("active"), n.index = l, i.trigger("scrollto", n))
                                            }
                                        }
                                        parseInt(a + this.offsetHeight, 10) == parseInt(this.scrollHeight, 10) && (n.index = h.length - 1, i.trigger("scrollbottom", n), e.onScrollBottom && e.onScrollBottom.call(i, n))
                                    }
                                    i.trigger("scroll", n),
                                    e.onScroll && e.onScroll.call(i, n)
                                };
                                a.scroll(n),
                                o && o.off("click.bui", e.handle).on("click.bui", e.handle, (function(n) {
                                    c = !1,
                                    d && (i.getSelector(e), g(), d = !1);
                                    var a = t(this).index();
                                    i.to(a),
                                        i.trigger("click", n)
                                })),
                                    a.parents("main").css("position", "relative"),
                                    s = !0
                            } (l),
                            l.onLoaded && l.onLoaded.call(i, l)
                        },
                            i.getSelector = function(t) {
                                return a = e.$(t.id),
                                    o = e.$(t.menu),
                                    r = o && o.find(t.handle),
                                    l = a.find(t.floorItem),
                                    a.find(t.footer),
                                    this
                            },
                            i.resize = function(n) {
                                if (this.getSelector(n), "string" == typeof n.height && "inherit" !== n.height) {
                                    var i = t(window).height() - e.$("header").height() - e.$("footer").height() - a[0].offsetTop;
                                    i = n.height.indexOf("%") > -1 ? t(window).height() * parseInt(n.height, 10) / 100 : i,
                                        a.height(i).css("position", "relative"),
                                        p = i
                                } else "number" == typeof n.height && n.height > 0 ? (a.height(n.height).css("position", "relative"), p = n.height) : p = a.height()
                            },
                            i.to = function(e, t) {
                                r = o && o.find(i.config.handle);
                                var n = h[e] && h[e].top || 0;
                                a[0].scrollTop = n,
                                r && r.removeClass("active"),
                                r && r.eq(e).addClass("active"),
                                f && clearTimeout(f),
                                    f = setTimeout((function() {
                                        c = !0
                                    }), i.config.delay),
                                t && t.call(i, e),
                                    i.trigger("to", e);
                                var l = {
                                    target: a[0],
                                    index: e
                                };
                                i.trigger("scrollto", l)
                            },
                            i.destroy = function(e) {
                                e = 1 == e;
                                a && (a.off("click.bui"), a.off("scroll"), e && a.remove(), a = null),
                                o && (o.off("click.bui"), o = null),
                                    i.off("click"),
                                    i.off("to"),
                                    i.off("scroll"),
                                    i.off("scrollto"),
                                    i.off("scrolltop"),
                                    i.off("scrollbottom"),
                                    s = !1
                            },
                            i.init(i.config)
                    }
                })
            } (window.bui || {},
                window.libs),
            function(e, t) {
                e.ajax = function(n) {
                    var i = t.Deferred(),
                        a = null,
                        o = t.extend(!0, {},
                            {
                                baseUrl: "",
                                data: {},
                                method: "GET",
                                dataType: "json",
                                timeout: 6e4,
                                headers: {},
                                processData: !0,
                                mimeType: "none",
                                cache: !0,
                                async: !0,
                                needJsonString: !1,
                                contentType: null,
                                localData: null,
                                transformRequest: null,
                                transformResponse: null,
                                native: !0,
                                needNative: !1
                            },
                            e.config.ajax, n),
                        r = o.success,
                        l = o.fail || o.error;
                    if (null === o.contentType && "get" == o.method.toLocaleLowerCase() ? o.contentType = "text/html;charset=UTF-8": null === o.contentType && "post" == o.method.toLocaleLowerCase() ? o.contentType = "application/x-www-form-urlencoded": o.contentType = o.contentType, "object" === _typeof(n) && void 0 !== n.needNative ? n.needNative: e.isWebapp, o.needJsonString) try {
                        o.data = "object" === _typeof(o.data) ? JSON.stringify(o.data) : o.data
                    } catch(e) {
                        o.data = o.data
                    }
                    if (o.data = o.transformRequest && o.transformRequest.call(i, o.data) || o.data, !o.url) return e.showLog("url不能为空", "bui.ajax"),
                        i;
                    if (o.url.indexOf("://") > -1 ? o.url = o.url: o.url.indexOf("./") > -1 || o.url.indexOf("../") > -1 ? o.url = bui.unit.resolvePath(o.url) : o.url = o.baseUrl + o.url, o.proxy) {
                        var c = o.url.indexOf(o.proxy),
                            s = c > -1 ? c + 1 : -1;
                        o.url = o.url.substr(s)
                    }
                    if (i.abort = function() {
                        a && a.abort()
                    },
                        o.localData) return o.localData = o.transformResponse && o.transformResponse.call(i, o.localData) || o.localData,
                    r && r(o.localData, 200),
                        i.resolve(o.localData, 200),
                        i;
                    if (o.needNative) {
                        if (void 0 === e.native.ajax) return u(o),
                            i;
                        try {
                            i = e.native.ajax && e.native.ajax(o) || i
                        } catch(e) {}
                    } else u(o);
                    function u(e) {
                        e.success = function(t, n, a) {
                            var o = null;
                            if ("string" == typeof t && "json" == e.dataType) try {
                                o = JSON.parse(t)
                            } catch(e) {
                                o = t
                            } else o = t || {};
                            o = e.transformResponse && e.transformResponse.call(i, o) || o,
                            r && r(o, n, a),
                                i.resolve(o, n, a)
                        },
                            e.error = function(t, n, a) {
                                var o;
                                if ("string" == typeof t && "json" == e.dataType) try {
                                    o = JSON.parse(t)
                                } catch(e) {
                                    o = t
                                } else o = t || {};
                                l && l(o, n, a),
                                    i.reject(o, n, a)
                            };
                        var n = e.type && e.type.toUpperCase();
                        e.type = n || e.method.toUpperCase(),
                            a = t.ajax(e)
                    }
                    return i
                },
                    e.get = function(n, i, a) {
                        var o = {
                            method: "GET"
                        };
                        o.url = n,
                            o.data = i || {};
                        var r = null,
                            l = a && a[0];
                        return r = a && "array" === e.typeof(a) && "object" == e.typeof(l) ? t.extend(!0, {},
                            e.config.get, o, l) : o,
                            bui.ajax(r)
                    },
                    e.post = function(n, i, a) {
                        var o = {
                            method: "POST",
                            contentType: "application/x-www-form-urlencoded"
                        };
                        o.url = n,
                            o.data = i || {};
                        var r = null,
                            l = a && a[0];
                        return (r = a && "array" === e.typeof(a) && "object" == e.typeof(l) ? t.extend(!0, {},
                            e.config.post, o, l) : o).contentType.indexOf("application/json") > -1 && (r.data = "object" === _typeof(r.data) ? JSON.stringify(r.data) : r.data),
                            bui.ajax(r)
                    },
                    e.put = function(n, i, a) {
                        var o = {
                            method: "PUT",
                            contentType: "application/json"
                        };
                        o.url = n,
                            o.data = i || {};
                        var r = null,
                            l = a && a[0];
                        return (r = a && "array" === e.typeof(a) && "object" == e.typeof(l) ? t.extend(!0, {},
                            e.config.put, o, l) : o).contentType.indexOf("application/json") > -1 && (r.data = "object" === _typeof(r.data) ? JSON.stringify(r.data) : r.data),
                            bui.ajax(r)
                    },
                    e.delete = function(n, i, a) {
                        var o = {
                            method: "DELETE",
                            contentType: "application/json"
                        };
                        o.url = n,
                            o.data = i || {};
                        var r = null,
                            l = a && a[0];
                        return (r = a && "array" === e.typeof(a) && "object" == e.typeof(l) ? t.extend(!0, {},
                            e.config.delete, o, l) : o).contentType.indexOf("application/json") > -1 && (r.data = "object" === _typeof(r.data) ? JSON.stringify(r.data) : r.data),
                            bui.ajax(r)
                    },
                    e.all = function(n) {
                        var i = null;
                        return i = n && "array" === e.typeof(n) ? n: Array.prototype.slice.apply(arguments),
                            t.when.apply(null, i)
                    }
            } (window.bui || {},
                window.libs),
            function(e, t) {
                e.load = function(n) {
                    var i, a = {
                            url: "",
                            param: {},
                            reload: !!e.hasRouter && router.config.reload,
                            replace: !1,
                            native: !0,
                            needNative: !1
                        },
                        o = t.extend(!0, {},
                            a, e.config.load, n),
                        r = {},
                        l = o.url;
                    if (o.url) if (document.activeElement.blur(), l.indexOf("tel:") >= 0 || l.indexOf("mailto:") >= 0 || l.indexOf("sms:") >= 0) e.unit.openExtral(l);
                    else {
                        if (l && l.indexOf("?") > -1) {
                            var c = l.split("?");
                            r = e.unit.keyStringToObject(c[1]),
                                o.url = c[0]
                        }
                        try {
                            var s = "string" == typeof o.param && JSON.parse(o.param) || o.param || {};
                            o.param = t.extend(!0, {},
                                r, s)
                        } catch(t) {
                            return void e.showLog("param 参数值必须是一个{}对象", "bui.load:web")
                        }
                        n && n.needNative || e.nativeRouter ? e.native.load && e.native.load(o) : (i = e.setUrlParams(o.url, o.param), o.reload ? window.location.href = e.hasRouter ? "index.html#" + i: i: !o.replace || e.hasRouter ? e.hasRouter ? window.router.load(o) : window.location.href = i: window.location.replace(i))
                    } else e.showLog("url 不能为空!", "bui.load:web")
                }
            } (window.bui || {},
                window.libs),
            function(e, t) {
                e.getPageParams = function(n) {
                    var i = t.Deferred(),
                        a = {
                            callback: null,
                            native: !0,
                            needNative: !1
                        };
                    n = n || {};
                    var o = t.extend(!0, {},
                        a, e.config.getPageParams);
                    if ("function" == typeof n ? o.callback = n: n && "object" === e.typeof(n) && (o = t.extend(!0, {},
                        a, e.config.getPageParams, n)), "object" === _typeof(n) && void 0 !== n.needNative ? n.needNative: e.isWebapp, n && n.needNative || e.nativeRouter) return i = e.native.getPageParams && e.native.getPageParams(o) || i;
                    if (e.hasRouter) {
                        var r = window.router.getPageParams && window.router.getPageParams() || e.getUrlParams();
                        o.callback && o.callback(r),
                            i.resolve(r)
                    } else {
                        var l = e.getUrlParams();
                        o.callback && o.callback(l),
                            i.resolve(l)
                    }
                    return i
                }
            } (window.bui || {},
                window.libs),
            function(e, t) {
                e.back = function(n) {
                    var i, a = {
                        index: -1,
                        name: "",
                        delay: !0,
                        param: null,
                        native: !0,
                        beforeBack: !0,
                        callback: null
                    };
                    "function" == typeof n ? (a.callback = n, i = t.extend(!0, {},
                        a, e.config.back)) : i = n && "object" === e.typeof(n) ? t.extend(!0, {},
                        a, e.config.back, n) : t.extend(!0, {},
                        a, e.config.back),
                        "object" === _typeof(n) && void 0 !== n.needNative ? n.needNative: e.isWebapp;
                    var o = e.hasRouter && router.history && router.history.getLast() || null;
                    if (!1 !== ("function" == typeof i.beforeBack ? i.beforeBack.call(this, {
                        prevTarget: null,
                        target: o
                    }) : i.beforeBack)) if (n && n.needNative || e.nativeRouter) e.native.back && e.native.back(i);
                    else {
                        if (e.hasRouter) if (window.router.config.syncHistory) {
                            var r = e.history.get(),
                                l = r.length - 1;
                            if (i.name) {
                                var c = e.array.indexs(r, i.name, "name"),
                                    s = c.length;
                                i.index = s ? -(r.length - c[s - 1] - 1) : -1
                            }
                            if (Math.abs(i.index) >= r.length && (i.index = -l), Math.abs(i.index) >= window.history.length && window.router.config.hash && (i.index = window.router.config.reloadCache ? -l: -(window.history.length - 1)), 0 == i.index && (i.index = -1), window.router.config.hash && !window.router.config.reloadCache) return void d(); (r.length > 1 || window.history.length > 1) && d()
                        } else window.router.back && window.router.back(i);
                        else d();
                        var u = null
                    }
                    function d() {
                        var t = e.hasRouter && e.history.getPrev() || {},
                            n = t.exports || {};
                        if (window.history.go(i.index), e.hasRouter && i.param) {
                            t.param = i.param;
                            var a = window.location.origin + window.location.pathname + "#" + t.pid,
                                o = e.setUrlParams(a, t.param);
                            t.component = {},
                                t.page = {},
                            window.history.hasOwnProperty("replaceState") && window.history.replaceState(t, null, o)
                        }
                        u && clearTimeout(u),
                            i.delay && i.callback ? u = setTimeout((function() {
                                e.hasRouter ? i.callback.call(router, n) : i.callback.call(e, {})
                            }), 500) : i.callback && i.callback()
                    }
                }
            } (window.bui || {},
                window.libs),
            function(e, t) {
                e.refresh = e.history.refresh
            } (window.bui || {}),
            function(e, t) {
                e.run = function(n) {
                    var i = {};
                    "string" == typeof n ? i.id = n: n && "object" === e.typeof(n) && (i = t.extend(!0, {},
                        {
                            id: "",
                            name: "",
                            data: null,
                            onFail: null,
                            native: !0,
                            needNative: !0
                        },
                        e.config.run, n));
                    var a = String(i.id);
                    if ("object" === _typeof(n) && void 0 !== n.needNative ? n.needNative: e.isWebapp, n.needNative) e.native.run && e.native.run(i);
                    else if (a.indexOf("http://") > -1 || a.indexOf("https://") > -1) {
                        var o = e.setUrlParams(i.id, i.data);
                        if (e.platform.isIos()) return void(window.location.href = o); (window.open("", "_blank") || window.open("", "_newtab")).location.href = o
                    }
                }
            } (window.bui || {},
                window.libs),
            function(e, t) {
                e.fileselect = function(n) {
                    var i, a, o, r = t.extend(!0, {},
                            {
                                uid: "",
                                native: !0,
                                needNative: !1,
                                needCompress: !1,
                                appendTo: "",
                                quality: .8,
                                from: "camera",
                                width: 800,
                                height: 800,
                                duration: 10,
                                onSuccess: null,
                                onFail: null,
                                mediaType: "picture"
                            },
                            e.config.fileselect, n),
                        l = this,
                        c = {
                            add: function(n) {
                                s = null;
                                var i = t.extend(!0, {
                                        needChangeData: !0,
                                        needCompress: !1,
                                        name: "resize.jpg"
                                    },
                                    r, n); (u = i).mimeType = n.mimeType ? n.mimeType: "",
                                    f ? (n.from ? "picture" === n.from || "photo" === n.from || "savephoto" === n.from ? a.removeAttr("capture") : a.attr("capture", n.from) : a.removeAttr("capture"), e.platform.isIos() && "function" == typeof FastClick ? a[0].dispatchEvent(new Event("click")) : a.trigger("click")) : o.add(i);
                                return this
                            },
                            remove: function(t, n) {
                                n = n || "name";
                                if (!f) return d = o.remove(t, n);
                                if ("string" == typeof t) {
                                    d.length && e.array.remove(d, t, n);
                                    var i = d.length ? d[d.length - 1].data: null;
                                    return s = i,
                                        a[0].value = "",
                                        d
                                }
                                return this
                            },
                            clear: function() {
                                d = [],
                                    s = null,
                                    f ? a[0].value = "": o.clear();
                                return d
                            },
                            value: function() {
                                s = f ? s: o.value();
                                return s
                            },
                            data: function() {
                                d = f ? d: o.data();
                                return d
                            },
                            toFile: x,
                            toBase64: function(n) {
                                var i = t.extend(!0, {
                                        needCompress: !1,
                                        destinationType: "data",
                                        mimeType: "",
                                        needChangeData: !1
                                    },
                                    n);
                                if (i.data = i.data || s, i.mimeType = n.mimeType ? n.mimeType: i.data && i.data.type || "image/jpeg", f) try {
                                    w(i)
                                } catch(t) {
                                    e.showLog(t)
                                } else o.toBase64(i);
                                return this
                            },
                            resize: w,
                            toBlob: k,
                            currentIndex: function() {
                                var e = "";
                                e = f ? d.length - 1 : o.data().length - 1;
                                return e
                            },
                            currentName: function() {
                                var e = "";
                                e = f ? d[d.length - 1].name: o.value().name;
                                return e
                            },
                            init: y
                        },
                        s = null,
                        u = null,
                        d = [],
                        f = "object" === _typeof(n) && void 0 !== n.needNative ? !n.needNative: e.isWebapp,
                        p = "*",
                        h = !1,
                        g = null,
                        m = null,
                        v = null,
                        b = null;
                    function y(n) {
                        var y = t.extend(!0, r, n);
                        switch (r.appendTo = y.appendTo || e.hasRouter && router.currentPage() || "body", y.mediaType) {
                            case "allmedeia":
                                p = "*";
                                break;
                            case "picture":
                            case "image":
                                p = "image/*";
                                break;
                            case "video":
                                p = "video/*";
                                break;
                            case "audio":
                                p = "audio/*";
                                break;
                            default:
                                p = y.mediaType
                        }
                        return d = [],
                            g = new Image,
                            m = new FileReader,
                            v = document.createElement("canvas"),
                            b = v.getContext("2d"),
                            f ? (!
                                function() {
                                    if (null == a) {
                                        i = bui.guid();
                                        var e = r.from ? 'capture="' + r.from + '"': "",
                                            n = '<input type="file" accept="' + p + '" name="uploadFiles" id="' + i + '" ' + e + ' style="display:none"/>';
                                        t(r.appendTo).append(n),
                                            a = t("#" + i) || t('input[name="uploadFiles"]')
                                    }
                                } (), h || (a.on("change", (function(t) {
                                var n = this.files;
                                if (! (n.length < 1)) {
                                    n.length > 1 && e.showLog("一次只能选一张图片", "bui.fileselect:web");
                                    var i = n[0];
                                    s = i;
                                    var a = {
                                        name: i.name,
                                        data: i,
                                        type: i.type,
                                        size: i.size
                                    };
                                    d.push(a),
                                        u.needCompress ? (u.data = i, u.mimeType = u.mimeType ? u.mimeType: i.type, w(u)) : u.onSuccess && u.onSuccess.call(l, i, d),
                                        this.value = ""
                                }
                            })), h = !0)) : o = e.native.fileselect && e.native.fileselect.call(this, n, {
                                module: c
                            }) || {},
                        y.uid && e.history.setUI && e.history.setUI({
                            uid: y.uid,
                            ui: c
                        }),
                            this
                    }
                    function w(n) {
                        var i = t.extend(!0, {
                                destinationType: "file",
                                data: null,
                                mimeType: "",
                                quality: .8,
                                width: 800,
                                height: 800,
                                needCompress: !0,
                                needChangeData: !1,
                                onSuccess: null,
                                onFail: null
                            },
                            r, n);
                        g.onload = function() {
                            var t = this.width,
                                n = this.height,
                                a = null,
                                o = i.width,
                                r = i.height,
                                c = t,
                                u = n;
                            i.needCompress && (t > o || n > r) && (t / n > o / r ? (c = o, u = Math.round(o * (n / t))) : (u = r, c = Math.round(r * (t / n)))),
                                v.width = c,
                                v.height = u,
                                b.clearRect(0, 0, c, u),
                                b.drawImage(g, 0, 0, c, u);
                            var f = v.toDataURL(i.mimeType || i.data && i.data.type || "image/jpeg", i.quality),
                                p = function(e) {
                                    return e.indexOf(".png") > -1 || e.indexOf(".jpg") > -1 || e.indexOf(".gif") > -1 || e.indexOf(".jpeg") > -1 ? e.substr(0, e.lastIndexOf(".")) : e
                                } (i.data.name) || "";
                            switch (i.destinationType) {
                                case "file":
                                    a = x(f, p);
                                    break;
                                case "blob":
                                    a = k(f);
                                    break;
                                case "data":
                                    a = f
                            }
                            if (i.needChangeData) {
                                s = a;
                                var h = e.array.index(d, i.data.name, "name");
                                h > -1 && (d[h].data = a, a.size && (d[h].size = a.size), a.type && (d[h].type = a.type))
                            }
                            return i.onSuccess && i.onSuccess.call(l, a, d),
                                a
                        },
                            g.onerror = function() {
                                i.onFail && i.onFail.call(l, g.src)
                            },
                            m.onload = function(e) {
                                g.src = e.target.result
                            };
                        try {
                            var a = i.data && i.data.type || "";
                            a = "object" === _typeof(a) ? a.type || "": a || "",
                            i.data && 0 == a.indexOf("image") && m.readAsDataURL(n.data)
                        } catch(t) {
                            e.showLog(t)
                        }
                    }
                    function x(t, n) {
                        try {
                            n = n || "file";
                            for (var i = t.split(","), a = (i[0].match(/:(.*?);/) || [])[1] || "image/jpeg", o = a.split("/")[1], r = atob(i[1]), l = r.length, c = new Uint8Array(l); l--;) c[l] = r.charCodeAt(l);
                            return new File([c], n + "." + o, {
                                type: a
                            })
                        } catch(t) {
                            e.showLog(t)
                        }
                    }
                    function k(e) {
                        for (var t = e.split(","), n = t[0].match(/:(.*?);/)[1], i = atob(t[1]), a = i.length, o = new Uint8Array(a); a--;) o[a] = i.charCodeAt(a);
                        return new Blob([o], {
                            type: n
                        })
                    }
                    return y(r),
                        c
                }
            } (bui || {},
                libs),
            function(e, t) {
                e.file = function(n) {
                    var i, a, o, r, l, c = {
                            getFolder: d,
                            removeFolder: function(e) {
                                var n = t.extend(!0, {},
                                    e);
                                s.needNative ? l.removeFolder(n) : d({
                                    root: n.root,
                                    folderName: n.folderName,
                                    create: n.create,
                                    onSuccess: function(e, t) {
                                        e.removeRecursively((function() {
                                            n.onSuccess && n.onSuccess.call(c, e, t)
                                        }), (function(t) {
                                            var i = {
                                                msg: "删除 " + n.folderName + " 文件失败"
                                            };
                                            n.onFail && n.onFail.call(c, i, e)
                                        }))
                                    },
                                    onFail: function(e) {
                                        var t = {
                                            msg: "删除 " + n.folderName + " 文件失败"
                                        };
                                        n.onFail && n.onFail.call(c, t)
                                    }
                                });
                                return this
                            },
                            getFile: h,
                            getFileName: p,
                            removeFile: function(e) {
                                var n = t.extend(!0, {},
                                    e);
                                s.needNative ? l.removeFile(n) : h({
                                    root: n.root,
                                    create: n.create,
                                    folderName: n.folderName,
                                    fileName: n.fileName,
                                    onSuccess: function(e, t) {
                                        e.remove((function() {
                                            n.onSuccess && n.onSuccess.call(c, e, t)
                                        }), (function(t) {
                                            var i = {
                                                msg: "删除 " + n.fileName + " 文件失败"
                                            };
                                            n.onFail && n.onFail.call(c, i, e)
                                        }))
                                    },
                                    onFail: function(e) {
                                        var t = {
                                            msg: "删除 " + n.fileName + " 文件失败"
                                        };
                                        n.onFail && n.onFail.call(c, t)
                                    }
                                });
                                return this
                            },
                            toBase64: function(e) {
                                return r.toBase64(e),
                                    this
                            },
                            open: function(t) {
                                var n = t || {};
                                if (!n.url) return;
                                s.needNative ? l.open(n) : e.showLog("web暂不支持open方法", "bui.file.open:web");
                                return this
                            },
                            init: u
                        },
                        s = c.config = t.extend(!0, {},
                            {
                                uid: "",
                                size: 10,
                                native: !0,
                                needNative: !1
                            },
                            e.config.file, n);
                    function u(n) {
                        return r = e.fileselect(n),
                            a = function(n) {
                                var a = t.Deferred();
                                n.needNative ? l = e.native.file && e.native.file(n, {
                                    fileselect: r,
                                    module: c
                                }) || {}: (i = "bui.app", o = 1024 * parseInt(s.size) * 1024, window.requestFileSystem = window.requestFileSystem || window.webkitRequestFileSystem, navigator.webkitPersistentStorage && navigator.webkitPersistentStorage.requestQuota(o, (function(e) {
                                    window.requestFileSystem(window.PERSISTENT, e, (function(e) {
                                        a.resolve(e)
                                    }), u)
                                })));
                                function u(e) {
                                    var t = "";
                                    try {
                                        switch (e.code) {
                                            case FileError.QUOTA_EXCEEDED_ERR:
                                                t = "QUOTA_EXCEEDED_ERR";
                                                break;
                                            case FileError.NOT_FOUND_ERR:
                                                t = "NOT_FOUND_ERR";
                                                break;
                                            case FileError.SECURITY_ERR:
                                                t = "SECURITY_ERR";
                                                break;
                                            case FileError.INVALID_MODIFICATION_ERR:
                                                t = "INVALID_MODIFICATION_ERR";
                                                break;
                                            case FileError.INVALID_STATE_ERR:
                                                t = "INVALID_STATE_ERR";
                                                break;
                                            default:
                                                t = "Unknown Error"
                                        }
                                    } catch(e) {}
                                    var n = {
                                        msg: t
                                    };
                                    a.reject(n)
                                }
                                return a
                            } (n),
                        !n.needNative && d({
                            root: !0,
                            create: !0
                        }),
                        n.uid && e.history.setUI && e.history.setUI({
                            uid: n.uid,
                            ui: c
                        }),
                            this
                    }
                    function d(e) {
                        var n = {
                                folderName: i,
                                root: !1,
                                create: !1,
                                msg: "",
                                param: {
                                    create: !1,
                                    exclusive: !1
                                },
                                onSuccess: null,
                                onFail: null
                            },
                            o = t.extend({},
                                n, e),
                            r = "";
                        if (o.create ? (r = "创建 ", o.param.create = !0) : (r = "获取 ", o.param.create = !1), s.needNative) l.getFolder(o);
                        else {
                            var u = f(o.folderName);
                            u = o.root ? u: i + "/" + u,
                                a.done((function(e) {
                                    e.root.getDirectory(u, o.param, (function(t) {
                                        o.onSuccess && o.onSuccess.call(c, t, e)
                                    }), (function(e) {
                                        var t = {
                                            msg: r + u + " 文件夹失败"
                                        };
                                        o.onFail && o.onFail.call(c, t)
                                    }))
                                })).fail((function(e) {
                                    o.onFail && o.onFail.call(c, {
                                        msg: "文件系统还没准备好."
                                    })
                                }))
                        }
                        return this
                    }
                    function f(e) {
                        return "." == e[0] || "/" == e[0] || " " == e[0] ? f(e.slice(1)) : "." != e[0] && "/" != e[0] && " " != e[0] ? e: void 0
                    }
                    function p(e) {
                        return e && e.indexOf("/") > -1 ? e.slice(e.lastIndexOf("/") + 1, e.indexOf("?") > -1 ? e.indexOf("?") : void 0) : e
                    }
                    function h(e) {
                        var n = t.extend({},
                                {
                                    fileName: "",
                                    folderName: "",
                                    root: !1,
                                    create: !1,
                                    param: {
                                        create: !1,
                                        exclusive: !1
                                    },
                                    onSuccess: null,
                                    onFail: null
                                },
                                e),
                            a = "";
                        if (n.create ? (a = "创建 ", n.param.create = !0) : (a = "获取 ", n.param.create = !1), n.fileName && !(n.fileName.indexOf(".") < 0)) {
                            if (s.needNative) l.getFile(n);
                            else {
                                var o = p(n.fileName);
                                d({
                                    root: n.root,
                                    folderName: n.folderName,
                                    create: !0,
                                    onSuccess: function(e, t) {
                                        var r = e.name == i ? e.name + "/" + o: i + "/" + e.name + "/" + o;
                                        t.root.getFile(r, n.param, (function(e) {
                                            n.onSuccess && n.onSuccess.call(c, e, t)
                                        }), (function(e) {
                                            var t = {
                                                msg: a + o + " 文件失败"
                                            };
                                            n.onFail && n.onFail.call(c, t)
                                        }))
                                    },
                                    onFail: function(e) {
                                        n.onFail && n.onFail(e)
                                    }
                                })
                            }
                            return this
                        }
                        n.onFail && n.onFail()
                    }
                    return "object" === _typeof(n) && void 0 !== n.needNative ? n.needNative: e.isWebapp,
                        u(s),
                        c
                }
            } (window.bui || {},
                window.libs),
            function(e, t) {
                e.upload = function(n) {
                    var i, a, o, r, l, c, s, u = {
                            uid: "",
                            url: "",
                            data: null,
                            headers: {},
                            showProgress: !0,
                            timeout: 6e4,
                            contentType: !1,
                            processData: !1,
                            autoClose: !0,
                            native: !0,
                            needNative: !1,
                            method: "POST",
                            fileKey: "file",
                            dataType: "json",
                            mediaType: "picture",
                            from: "picture",
                            onProgress: null,
                            onMask: function() {
                                y()
                            },
                            onSuccess: null,
                            onFail: null
                        },
                        d = t.extend(!0, {},
                            u, e.config.upload, n),
                        f = t.Deferred(),
                        p = {
                            init: m,
                            add: function(e) {
                                return e.onSuccess = e.onSuccess ? e.onSuccess.bind(p) : null,
                                    e.onFail = e.onFail ? e.onFail.bind(p) : null,
                                    a.add(e),
                                    this
                            },
                            remove: function(e, t) {
                                var n = v(),
                                    i = n.length;
                                if (i < 1) return this;
                                /\d/.test(e) && e.indexOf(".") < 0 ? a.remove(n[e].name, t) : "string" == typeof e ? a.remove(e, t) : a.remove(n[i - 1].name, t);
                                return this
                            },
                            resize: function(e) {
                                return a.resize(e),
                                    this
                            },
                            currentIndex: function() {
                                return a.currentIndex()
                            },
                            currentName: function() {
                                return a.currentName()
                            },
                            clear: function() {
                                return a.clear(),
                                    this
                            },
                            data: v,
                            start: b,
                            startAll: function(e) {
                                var n = t.extend(!0, {
                                            needFileinfo: !1
                                        },
                                        d, e),
                                    i = n[n.fileKey] || a.data();
                                n.data || (n.data = {});
                                for (var o = [], r = 0; r < i.length; r++) i[r],
                                    function(e) {
                                        if (! (e > i.length - 1)) {
                                            if (n.data[n.fileKey] = i[e] && i[e].data, n.needFileinfo) for (var t in i[e])"data" !== t && (n.data[t] = i[e] && i[e][t]);
                                            var a = n.onSuccess,
                                                r = n.onFail;
                                            n.onSuccess = function(t) {
                                                a && a.call(p, t),
                                                    o[e] = t,
                                                e == i.length - 1 && n.onEnd && n.onEnd.call(p, o)
                                            },
                                                n.onFail = function(t) {
                                                    r && r.call(p, t),
                                                        o[e] = t,
                                                    e == i.length - 1 && n.onEnd && n.onEnd.call(p, o)
                                                },
                                                b(n)
                                        }
                                    } (r);
                                return f
                            },
                            stop: y,
                            toBase64: function(e) {
                                return a.toBase64(e),
                                    this
                            },
                            widget: function(t) {
                                var n = {
                                    loading: i,
                                    fileselect: a,
                                    ajax: o
                                };
                                return e.widget.call(n, t)
                            }
                        },
                        h = d.showProgress,
                        g = d.onProgress;
                    function m(t) {
                        return i = e.loading({
                            display: "block",
                            width: 30,
                            height: 30,
                            opacity: 0,
                            autoClose: t.autoClose,
                            callback: t.onMask
                        }),
                            a = e.fileselect.call(p, {
                                native: t.native,
                                needNative: t.needNative,
                                from: t.from,
                                mediaType: t.mediaType
                            }),
                        t && t.needNative && (r = e.native.upload && e.native.upload(t, {
                            loading: i,
                            fileselect: a,
                            module: p
                        }) || {}),
                            t.data ? (b(t), t.uid && e.history.setUI && e.history.setUI({
                                uid: t.uid,
                                ui: p
                            }), this) : this
                    }
                    function v() {
                        return a.data()
                    }
                    function b(e) {
                        var n = t.extend(!0, {},
                            d, e);
                        if (c = n.url, l = a.value(), h = n.showProgress, l) {
                            if (h && i.show(), n && n.needNative) return r.start(n) || f;
                            var s = n.data,
                                u = s && "object" === _typeof(s) ? Object.keys(s) : [],
                                g = new FormData,
                                m = !1;
                            return u.forEach((function(e, t) {
                                n.fileKey === e && (m = !0),
                                    g.append(e, s[e])
                            })),
                            !m && g.append(n.fileKey, l),
                                n.data = g,
                                function(e) {
                                    var n = e.onSuccess,
                                        i = e.onFail;
                                    return o = t.ajax({
                                        url: c,
                                        type: e.method,
                                        data: e.data,
                                        cache: e.cache,
                                        headers: e.headers,
                                        dataType: e.dataType,
                                        contentType: e.contentType,
                                        processData: e.processData,
                                        timeout: e.timeout,
                                        xhr: function() {
                                            var e = t.ajaxSettings.xhr();
                                            if (w && e.upload) return e.upload.addEventListener("progress", w, !1),
                                                e
                                        },
                                        success: function(e) {
                                            x(),
                                            n && n.call(p, e),
                                                f.resolve(e)
                                        },
                                        error: function(e, t, n) {
                                            x(),
                                            i && i.call(p, e, t),
                                                f.reject(e, t, n)
                                        }
                                    }),
                                        f
                                } (n)
                        }
                    }
                    function y(e) {
                        return d && d.needNative ? r.stop(e) : (i && i.stop(), o && o.abort(), e && e.call(p, i, o)),
                            this
                    }
                    function w(e) {
                        window.requestAnimationFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame,
                            window.requestAnimationFrame((function() {
                                if (e.lengthComputable) {
                                    var t = Math.round(100 * e.loaded / e.total);
                                    s = t.toString() + "%",
                                        t < 100 ? (n = s, h && i && i.show({
                                            text: n
                                        })) : x(),
                                    g && g.call(p, s)
                                }
                                var n
                            }))
                    }
                    function x() {
                        return i && i.stop(),
                            this
                    }
                    return "object" === _typeof(n) && void 0 !== n.needNative ? n.needNative: e.isWebapp,
                        m(d),
                        p
                }
            } (window.bui || {},
                window.libs),
            function(e, t) {
                e.download = function(n) {
                    var i, a, o, r, l, c = {
                            open: function(e) {
                                return a.open(e),
                                    this
                            },
                            getFile: function(e) {
                                var n = t.extend(!0, {
                                            autoDown: !0
                                        },
                                        s, e),
                                    i = e.fileName || a.getFileName(n.url);
                                a.getFile({
                                    fileName: i,
                                    folderName: n.folderName,
                                    onSuccess: function(e, t) {
                                        n.onSuccess && n.onSuccess.call(c, e.fullPath || e, e, t)
                                    },
                                    onFail: function(e) {
                                        n.autoDown = v(n)
                                    }
                                })
                            },
                            removeFile: function(t) {
                                if (!t.fileName) return e.showLog("请告诉我们你要删除哪个文件, fileName "),
                                    this;
                                return t.folderName = t.folderName || s.folderName,
                                    a.removeFile(t),
                                    this
                            },
                            removeFolder: function(e) {
                                return e.folderName = e.folderName || s.folderName,
                                    a.removeFolder(e),
                                    this
                            },
                            start: v,
                            stop: b,
                            toBase64: function(e) {
                                return a.toBase64(e),
                                    this
                            },
                            init: m,
                            widget: function(t) {
                                var n = {
                                    loading: h,
                                    file: a,
                                    ajax: i
                                };
                                return e.widget.call(n, t)
                            }
                        },
                        s = c.config = t.extend(!0, {},
                            {
                                uid: "",
                                url: "",
                                data: {},
                                headers: {},
                                method: "GET",
                                showProgress: !0,
                                timeout: 6e4,
                                fileName: "",
                                folderName: "download",
                                native: !0,
                                needNative: !0,
                                onProgress: null,
                                onSuccess: null,
                                onFail: null
                            },
                            e.config.download, n),
                        u = "object" === _typeof(n) && void 0 !== n.needNative ? !n.needNative: e.isWebapp,
                        d = s.showProgress,
                        f = s.onProgress,
                        p = s.onFail,
                        h = null,
                        g = null;
                    function m(t) {
                        return h = t.showProgress && e.loading({
                            display: "block",
                            width: 30,
                            height: 30,
                            opacity: 0,
                            callback: function() {
                                b()
                            }
                        }),
                            a = e.file({
                                native: t.native,
                                needNative: t.needNative
                            }),
                            t.needNative ? o = e.native.download && e.native.download(t, {
                                file: a,
                                loading: h,
                                module: c
                            }) || {}: function(e) {
                                if (a.getFolder({
                                    folderName: e.folderName,
                                    create: !1,
                                    onSuccess: function(e, t) {
                                        e.fullPath
                                    },
                                    onFail: function(t) {
                                        a.getFolder({
                                            folderName: e.folderName,
                                            create: !0,
                                            onSuccess: function(e, t) {
                                                e.fullPath
                                            },
                                            onFail: function(e) {
                                                p && p.call(c, e)
                                            }
                                        })
                                    }
                                }), !e.url) return;
                                v(e)
                            } (t),
                        t.uid && e.history.setUI && e.history.setUI({
                            uid: t.uid,
                            ui: c
                        }),
                            this
                    }
                    function v(e) {
                        var n = t.extend(!0, {},
                            s, e);
                        r = n.needEncode ? encodeURI(n.url) : n.url,
                            f = n.onProgress,
                        (d = n.showProgress) && h && h.show({
                            text: "0%"
                        }),
                        e.fileName || a.getFileName(n.url),
                            n.needNative ? o.start(n) : (n.cache = !1, n.contentType = !1, n.processData = !1, i = t.ajax({
                                url: r,
                                type: n.method,
                                data: n.data,
                                cache: n.cache,
                                headers: n.headers,
                                contentType: n.contentType,
                                processData: n.processData,
                                timeout: n.timeout,
                                xhr: function() {
                                    var e = t.ajaxSettings.xhr();
                                    if (y && e) return e.addEventListener("progress", y, !1),
                                        e
                                },
                                success: function(t) {
                                    var i = e.fileName || a.getFileName(n.url);
                                    a.getFile({
                                        fileName: i,
                                        folderName: n.folderName,
                                        create: !0,
                                        onSuccess: function(e, t) {
                                            n.onSuccess && n.onSuccess.call(c, e.fullPath, t)
                                        }
                                    })
                                },
                                fail: function(e) {
                                    w(),
                                    n.onFail && n.onFail.call(c, e)
                                }
                            }))
                    }
                    function b(e) {
                        u ? (w(), i && i.abort(), g && window.cancelAnimationFrame(g)) : o.stop(),
                        e && e.call(c, h, i)
                    }
                    function y(e) {
                        window.requestAnimationFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame,
                            g = window.requestAnimationFrame((function() {
                                if (e.lengthComputable) {
                                    var t = Math.round(100 * e.loaded / e.total);
                                    l = t.toString() + "%",
                                        t < 100 ? (n = l, d && h && h.show({
                                            text: n
                                        })) : w(),
                                    f && f.call(c, l)
                                }
                                var n
                            }))
                    }
                    function w() {
                        d && h && h.stop()
                    }
                    return m(s),
                        c
                }
            } (window.bui || {},
                window.libs),
            function(e, t) {
                e.currentPlatform = "webapp",
                    e.on("pagereadybefore", (function() {
                        e.platform.isPC() ? window.viewport = e.viewport(40) : window.viewport = e.viewport(),
                        e.config.init.auto && e.init(),
                        !e.hasRouter && e.config.component.auto && loader.components({
                            id: "body"
                        })
                    })),
                    e.webready = function(n) {
                        t(document).ready((function() {
                            e.trigger.call(e, "pagereadybefore"),
                            n && n.call(e),
                                e.trigger.call(e, "pageready")
                        }))
                    },
                    e.ready = function(n) {
                        e.isWebapp = void 0 === e.isWebapp ? e.debug: e.isWebapp;
                        var i = t.Deferred();
                        if (e.isWebapp) t(document).ready((function() {
                            e.trigger.call(e, "pagereadybefore"),
                            n && n.call(e),
                                e.trigger.call(e, "pageready"),
                                i.resolve()
                        }));
                        else {
                            if (void 0 === e.native.ready) return e.showLog("当前 bui.isWebapp = false; 但bui.js为webapp版本,不支持原生方法,请使用 buijs update -p xxx, 更换bui.js为对应xxx平台版本;"),
                                e.webready(n),
                                i;
                            i = e.native.ready && e.native.ready(n) || i
                        }
                        return i
                    }
            } (window.bui || {},
                window.libs),
            function(e, t) {
                e.init = function(n) {
                    var i, a = {
                        id: ".bui-page",
                        height: 0,
                        header: "header",
                        main: "main",
                        footer: "footer",
                        reduceRem: 0
                    };
                    if ("object" == e.typeof(n)) i = t.extend({},
                        a, e.config.init, n);
                    else {
                        var o = {};
                        o.height = n,
                            i = t.extend({},
                                a, o)
                    }
                    var r = i.height || document.documentElement.clientHeight || t("body").height() || t("#bui-router").height() || t(".bui-page").height();
                    if (! (e.obj(i.main).length < 1)) {
                        try {
                            var l = e.obj(i.id),
                                c = i.header.indexOf("#") > -1 ? e.obj(i.header)[0] : l.children(i.header)[0],
                                s = i.footer.indexOf("#") > -1 ? e.obj(i.footer)[0] : l.children(i.footer)[0],
                                u = i.main.indexOf("#") > -1 ? e.obj(i.main) : l.children(i.main),
                                d = c ? c.offsetHeight: 0,
                                f = s ? s.offsetHeight: 0,
                                p = i.reduceRem > 0 ? e.unit.remToPx(i.reduceRem) : 0,
                                h = r - d - f - p;
                            if (parseInt(h) > 0) u.height(h);
                            else {
                                var g = d + f + p + "px";
                                e.unit.calcHeight(u, g)
                            }
                        } catch(t) {
                            e.showLog(t, "bui.init")
                        }
                        return h
                    }
                },
                    window.addEventListener ? window.addEventListener("load", (function(t) {
                        e.trigger.call(e, "onload")
                    }), !1) : window.attachEvent("onload", (function(t) {
                        e.trigger.call(e, "onload")
                    })),
                    t(document).ready((function() {
                        e.isWebapp = void 0 === e.isWebapp ? e.debug: e.isWebapp,
                            e.trigger.call(e, "pagebefore"),
                        "function" == typeof FastClick && FastClick.attach(document.body),
                            e.trigger.call(e, "pageinit")
                    }));
                try {
                    var n = "hidden" in document ? "hidden": "webkitHidden" in document ? "webkitHidden": "",
                        i = n.replace(/hidden/i, "visibilitychange");
                    document.addEventListener(i, (function(t) {
                        document[n] ? e.trigger.call(e, "pagehide", t) : e.trigger.call(e, "pageshow", t)
                    }))
                } catch(e) {}
                try {
                    navigator.control.gesture(!1),
                        navigator.control.longpressMenu(!1)
                } catch(e) {}
            } (window.bui || {},
                window.libs)
    }));