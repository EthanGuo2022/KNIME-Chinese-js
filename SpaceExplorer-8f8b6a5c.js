import {
    o as h,
    c as E,
    a as k,
    aL as ae,
    aM as Ge,
    aN as ct,
    aO as lt,
    aP as dt,
    D as j,
    O as w,
    a6 as Q,
    x as z,
    $ as ut,
    aG as pt,
    aQ as mt,
    aR as gt,
    aS as me,
    aA as fe,
    aT as Ve,
    Q as y,
    aU as Me,
    r as ne,
    j as R,
    aV as Ne,
    _ as V,
    n as ce,
    N as ue,
    aW as vt,
    d as W,
    w as O,
    f as G,
    e as he,
    t as ie,
    aa as ft,
    T as ge,
    aX as Ue,
    E as ze,
    aY as ht,
    aZ as _t,
    b as Y,
    u as Pe,
    v as Ae,
    F as _e,
    h as Te,
    as as qe,
    S as pe,
    a_ as Ie,
    L as Xe,
    ak as se,
    a$ as K,
    b0 as It,
    C as ke,
    af as yt,
    ae as Ke,
    B as $e,
    P as wt,
    I as xt,
    J as je,
    U as St,
    y as kt,
    p as bt,
    b1 as Be,
    b2 as Oe,
    M as Ye,
    b3 as Ct,
    g as be,
    b4 as $t,
    b5 as le,
    A as Et,
    G as Dt,
    b6 as Mt,
    b7 as Pt,
    b8 as At,
    an as Tt,
    b9 as Rt,
    W as jt,
    R as Bt
}
from "./index-6dc36896.js";
import {
    T as Ze
}
from "./trash-c1de9387.js";
import {
    R as Ot
}
from "./pencil-ca93310a.js";
import {
    C as Ft,
    S as Ht,
    P as Ce
}
from "./computer-desktop-f6256e82.js";
import {
    O as Wt,
    H as Lt
}
from "./house-1d05c0b5.js";
const Gt = {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    stroke: "#000",
    "stroke-linejoin": "round",
    viewBox: "0 0 32 32"
}, Vt = k("path", {
    d: "M20.294 1.465h-4.122a.885.885 0 0 0-.883.883V6.47c0 .486.397.883.883.883h4.122a.885.885 0 0 0 .883-.883V2.348a.886.886 0 0 0-.883-.883zM6.437 8.519H2.315a.885.885 0 0 0-.883.883v4.122c0 .486.397.883.883.883h4.122a.885.885 0 0 0 .883-.883V9.402a.884.884 0 0 0-.883-.883zm.884 3.037h3.797V5.143c0-.405.329-.734.734-.734h3.437m-1.84 14.11H11.85a.733.733 0 0 1-.733-.733v-6.231H7.321m17.913 17.98v-8.667c0-.55-.45-1-1-1h-8.667c-.55 0-1 .45-1 1v8.667c0 .55.45 1 1 1h8.667c.55 0 1-.45 1-1zm1.667-1.667c.55 0 1-.45 1-1v-8.667c0-.55-.45-1-1-1h-8.667c-.55 0-1 .45-1 1m12.334 7c.55 0 1-.45 1-1v-8.667c0-.55-.45-1-1-1h-8.667c-.55 0-1 .45-1 1m-4.862 4.805 9.725 9.725"
}, null, -1), Nt = [Vt];
function Ut(o, t) {
    return h(),
    E("svg", Gt, Nt)
}
const zt = {
    render: Ut
}, ve = {
    dragGhostContainer: {
        background: ct,
        font: Ge
    },
    dragGhostBadge: {
        background: lt,
        font: dt
    }
}, Qe = (o, t) => {
    Object.entries(t).forEach(([e, n]) => {
        o.style[e] = n
    })
}, qt = o => {
    const t = document.createElement("div"),
    e = 99;
    t.innerText = o <= e ? o.toString() : "99+",
    t.id = "drag-ghost-badge";
    const n = {
        background: ve.dragGhostBadge.background,
        color: ve.dragGhostBadge.font,
        fontSize: "13px",
        lineHeight: "11px",
        position: "absolute",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        right: "-10px",
        top: "-10px",
        borderRadius: "50%",
        width: "30px",
        height: "30px",
        padding: "5px",
        pointerEvents: "none"
    };
    return Qe(t, n),
    t
}, Xt = o => {
    const t = o.querySelector("svg");
    if (!t)
        return null;
    const e = t.cloneNode(!0);
    return e.style.width = "20px",
    e.style.height = "20px",
    e.style.marginRight = "10px",
    e.style.stroke = Ge,
    e
}, Re = o => ({
    x: o.x + document.documentElement.scrollLeft,
    y: o.y + document.documentElement.scrollTop
}), Fe = ({
    textContent: o,
    target: t,
    badgeCount: e,
    addShadow: n = !1
}) => {
    const s = document.createElement("div");
    s.innerText = o.length > 15 ? `${o.slice(0, 15)}…` : o,
    s.setAttribute("data-id", "drag-ghost");
    const i = getComputedStyle(t).getPropertyValue("font-size"), {
        x: c,
        y: g,
        width: m,
        height: p
    } = t.getBoundingClientRect(),
    v = Re({
        x: c,
        y: g
    }),
    x = {
        background: ve.dragGhostContainer.background,
        color: ve.dragGhostContainer.font,
        position: "absolute",
        top: `${v.y}px`,
        left: `${v.x}px`,
        width: `${m}px`,
        height: `${p}px`,
        zIndex: "9",
        pointerEvents: "none",
        fontSize: i,
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        padding: "0 12px",
        borderRadius: "4px",
        opacity: "1",
        boxShadow: n ? "0px 2px 10px rgba(130, 133, 134, 0.4)" : "initial"
    };
    Qe(s, x);
    const f = Xt(t);
    if (f && s.prepend(f), e) {
        const l = qt(e);
        return s.appendChild(l), {
            ghost: s,
            badge: l
        }
    }
    return {
        ghost: s
    }
}, Kt = o => ({
    clientX: t,
    clientY: e
}) => {
    if (t === 0 && e === 0)
        return;
    const {
        x: n,
        y: r
    } = Re({
        x: t,
        y: e
    });
    o.forEach(s => {
        ae.to(s, {
            left: n,
            top: r,
            width: "200px",
            duration: .35
        })
    })
};
let te = null;
const He = () => {
    te && (te.style.display = "none")
}, Yt = () => {
    te && (te.style.display = "flex")
}, Zt = ({
    badgeCount: o = null,
    selectedTargets: t
}) => {
    (() => {
        const l = document.querySelectorAll('[data-id="drag-ghost"]');
        l.length && l.forEach(a => a.parentNode?.removeChild(a))
    })();
    const [n, ...r] = t, {
        ghost: s,
        badge: i
    } = Fe({
        addShadow: !0,
        textContent: n.textContent,
        badgeCount: o,
        target: n.targetEl
    }),
    c = r.map(({
                textContent: l,
                targetEl: a
            }, d) => {
            const {
                ghost: u
            } = Fe({
                textContent: l,
                target: a,
                addShadow: d < 2
            });
            return {
                ghost: u,
                targetEl: a
            }
        }),
    g = [{
            ghost: s,
            targetEl: n.targetEl
        }, ...c];
    g.reverse().forEach(({
            ghost: l
        }) => {
        document.body.appendChild(l)
    });
    const m = g.map(({
                ghost: l
            }) => l),
    p = Kt(m);
    document.addEventListener("drag", p);
    const v = l => ({
        ghost: a
    }) => {
        a.style.display = l
    };
    return {
        ghosts: m,
        removeGhosts: (l = !0) => {
            const a = ({
                ghost: d
            }) => {
                l || (d.style.display = "none");
                try {
                    document.body.removeChild(d)
                } catch {}
                document.removeEventListener("drag", p)
            };
            if (He(), !l) {
                g.forEach(a);
                return
            }
            g.forEach(({
                    ghost: d,
                    targetEl: u
                }) => {
                const {
                    x: C,
                    y: I,
                    width: D
                } = u.getBoundingClientRect();
                i && ae.to(i, {
                    autoAlpha: 0,
                    duration: .05,
                    onComplete: () => {
                        ae.killTweensOf(i)
                    }
                });
                const {
                    x: M,
                    y: _
                } = Re({
                    x: C,
                    y: I
                });
                ae.to(d, {
                    left: M,
                    top: _,
                    width: D,
                    duration: .2,
                    onComplete: () => {
                        ae.killTweensOf(d),
                        a({
                            ghost: d
                        }),
                        document.removeEventListener("drag", p)
                    }
                })
            })
        },
        replaceGhostPreview: ({
            shouldUseCustomPreview: l,
            ghostPreviewEl: a,
            opts: d = {}
        }) => {
            te = a,
            l ? (document.removeEventListener("drag", p), Yt(), document.addEventListener("drag", u => {
                    te && (te.style.left = `${u.clientX - (d.leftOffset || 0)}px`, te.style.top = `${u.clientY - (d.topOffset || 0)}px`)
                }), g.forEach(v("none"))) : (document.addEventListener("drag", p), He(), g.forEach(v("flex")))
        }
    }
};
let de = null, We = null;
const Ee = new Image(1, 1);
Ee.src = "data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==";
const Qt = o => {
    const {
        items: t,
        itemBACK: e,
        itemRefs: n,
        shouldUseCustomDragPreview: r,
        getCustomPreviewEl: s,
        multiSelection: i,
        isDirectory: c
    } = o,
    g = j(!1),
    m = j(null),
    p = w(() => i.selectedIndexes.value.map(_ => t.value[_])),
    v = w(() => p.value.map(_ => _.id)),
    x = (_, S = !1) => S ? e.value : n.value[_],
    f = (_, S) => {
        if (g.value = !0, m.value = S, Ee.complete && o.draggingAnimationMode.value !== "disabled" && (_.dataTransfer.dropEffect = "move", _.dataTransfer.effectAllowed = "move", _.dataTransfer.setDragImage(Ee, 0, 0)), i.isSelected(S) || (i.resetSelection(), i.handleSelectionClick(S)), o.draggingAnimationMode.value === "disabled")
            return;
        const P = i.selectedIndexes.value.filter(q => S !== q),
        F = q => ({
            targetEl: x(q),
            textContent: t.value[q].name
        }),
        N = [].concat(F(S)).concat(P.map(F)),
        L = Zt({
            dragStartEvent: _,
            badgeCount: i.isMultipleSelectionActive(S) ? P.length + 1 : null,
            selectedTargets: N
        });
        de = L.removeGhosts,
        We = L.replaceGhostPreview
    },
    l = (_, S, P = !1) => {
        g.value && (i.isSelected(S) && !P || S !== m.value && x(S, P).classList.add("dragging-over"))
    },
    a = _ => {
        g.value && _.preventDefault()
    },
    d = (_, S) => ({
        event: _,
        item: S
    });
    Q(o.draggingAnimationMode, (_, S) => {
        _ !== S && S === "disabled" && de?.()
    }),
    Q(r, () => {
        g.value && We?.({
            shouldUseCustomPreview: r.value,
            ghostPreviewEl: s(),
            opts: {
                leftOffset: 35,
                topOffset: 35
            }
        })
    });
    const u = (_, S, P = !1) => {
        x(S, P).classList.remove("dragging-over")
    },
    C = j(!1),
    I = _ => {
        de?.(_),
        de = null
    };
    return {
        isDragging: g,
        onDragStart: f,
        onDragEnter: l,
        onDragOver: a,
        onDrag: d,
        onDragLeave: u,
        onDrop: (_, S, P = !1) => {
            x(S, P).classList.remove("dragging-over"),
            C.value = !0;
            const N = Z => {
                Z && i.resetSelection(),
                I(!Z)
            };
            if (!P && !c(t.value[S]))
                return I(!0), null;
            const L = P ? ".." : t.value[S].id;
            return v.value.includes(L) ? (I(!0), null) : (o.draggingAnimationMode.value === "auto" && N(!0), {
                sourceItems: v.value,
                targetItem: L,
                onComplete: N
            })
        },
        onDragEnd: (_, S) => {
            if (g.value = !1, _.dataTransfer?.dropEffect === "none")
                return I(!0), null;
            if (C.value)
                return C.value = !1, null;
            const P = F => {
                F && i.resetSelection(),
                I(!F)
            };
            return o.draggingAnimationMode.value === "auto" && P(!0), {
                event: _,
                sourceItem: S,
                onComplete: P
            }
        }
    }
}, De = () => ({
    anchorHistory: [],
    anchorExceptions: [],
    selectionRanges: []
}), oe = (o, t) => ({
    ...o,
    ...t
}), Jt = (o, t) => {
    const {
        selectionRanges: e
    } = o;
    if (e.length === 1) {
        const [n] = e, {
            from: r,
            to: s
        } = n;
        if (r === s && r === t)
            return !1
    }
    return e.length !== 0
}, Je = (o, t) => {
    const {
        selectionRanges: e,
        anchorExceptions: n
    } = o,
    r = e.find(s => s.from <= t && s.to >= t);
    return Boolean(r) && !n.includes(t)
}, eo = (o, t) => {
    const {
        anchorHistory: e,
        selectionRanges: n,
        anchorExceptions: r
    } = o,
    s = oe(o, {
        anchorHistory: [...e, t]
    }),
    i = Je(o, t);
    if (!i) {
        const c = {
            from: t,
            to: t
        },
        m = n.find(({
                    from: p,
                    to: v
                }) => p <= c.from && c.to <= v) ? n : [...n, c];
        return oe(s, {
            selectionRanges: m,
            anchorExceptions: r.filter(p => p !== t)
        })
    }
    return i ? oe(s, {
        anchorExceptions: [...r, t]
    }) : o
}, to = (o, t) => {
    const {
        anchorHistory: e,
        selectionRanges: n,
        anchorExceptions: r
    } = o;
    if (n.length === 0) {
        const m = {
            from: t,
            to: t
        };
        return oe(o, {
            selectionRanges: [...n, m],
            anchorHistory: [...e, t]
        })
    }
    const [s] = e.slice(-1),
    i = r.filter(m => {
        const p = Math.min(s, t),
        v = Math.max(s, t);
        return !(p <= m && m <= v)
    }),
    c = oe(o, {
        anchorExceptions: i
    });
    if (n.find(({
                from: m,
                to: p
            }) => m === s || p === s)) {
        const m = n.map(({
                    from: p,
                    to: v
                }) => p === s || v === s ? {
                from: Math.min(s, t),
                to: Math.max(s, t)
            }
                 : {
                from: p,
                to: v
            });
        return oe(c, {
            selectionRanges: m
        })
    } else {
        const m = {
            from: Math.min(s, t),
            to: Math.max(s, t)
        };
        return oe(c, {
            selectionRanges: [...n, m]
        })
    }
}, oo = o => {
    const t = {
        anchorExceptions: [],
        anchorHistory: [o],
        selectionRanges: [{
                from: o,
                to: o
            }
        ]
    };
    return oe(De(), t)
}, no = o => {
    const {
        anchorExceptions: t,
        selectionRanges: e
    } = o;
    return t.reduce((r, s) => {
        const i = r.find(({
                    from: c,
                    to: g
                }) => c <= s && s <= g);
        if (i) {
            const {
                from: c,
                to: g
            } = i;
            return r.reduce((p, v) => {
                if (v.from === c && v.to === g) {
                    const f = s === c,
                    l = s === g,
                    a = {
                        from: f ? s : c,
                        to: f ? s : s - 1
                    },
                    d = {
                        from: l ? s : s + 1,
                        to: l ? s : g
                    };
                    return p.concat(a, d)
                }
                return p.concat(v)
            }, [])
        }
        return r
    }, e).filter(r => !t.includes(r.from) && !t.includes(r.to))
}, so = o => o.reduce((t, e, n, r) => r.find(i => {
            const c = i.from < e.from && e.to < i.to,
            g = i.from <= e.from && e.to < i.to,
            m = i.from < e.from && e.to <= i.to;
            return c || g || m
        }) ? t : t.concat(e), []), ro = o => {
    if (o.length <= 1)
        return o;
    let [t, ...e] = o.slice().sort((s, i) => s.from - i.from),
    n = t.to,
    r = [t];
    for (; e.length; ) {
        const [s] = e;
        if (s.from > n) {
            r.push(s),
            e = e.slice(1);
            continue
        }
        if (s.from <= n && s.to > n) {
            const [c] = r.slice(-1),
            g = {
                from: c.from,
                to: s.to
            };
            n = s.to,
            r = r.slice(0, -1).concat(g),
            e = e.slice(1)
        }
    }
    return r
}, ao = o => {
    const t = no(o),
    e = so(t);
    return ro(e)
}, io = o => ao(o).reduce((e, n) => {
    const {
        to: r,
        from: s
    } = n,
    i = r - s,
    c = new Array(i).fill(0).reduce(g => {
        const [m] = g.slice(-1);
        return g.concat(m + 1)
    }, [s]);
    return e.concat(c)
}, []), co = () => navigator?.userAgent?.toLowerCase()?.includes("mac"), lo = () => co() ? "metaKey" : "ctrlKey", uo = o => {
    const t = j(De()),
    e = p => Je(t.value, p),
    n = w(() => io(t.value)),
    r = p => Jt(t.value, p),
    s = () => {
        t.value = De()
    },
    i = p => {
        t.value = oo(p)
    },
    c = p => {
        t.value = eo(t.value, p)
    },
    g = p => {
        t.value = to(t.value, p)
    };
    return {
        multiSelectionState: t,
        isSelected: e,
        selectedIndexes: n,
        isMultipleSelectionActive: r,
        resetSelection: s,
        handleSelectionClick: (p, v = null) => {
            if (!v || o.singleSelectionOnly.value) {
                i(p);
                return
            }
            const x = lo();
            if (v.shiftKey) {
                g(p);
                return
            }
            if (v[x]) {
                c(p);
                return
            }
            i(p)
        }
    }
}, po = z({
    __name: "FileExplorerContextMenu",
    props: {
        position: {},
        anchor: {},
        selectedItems: {}
    },
    emits: ["itemClick", "close"],
    setup(o, {
        emit: t
    }) {
        const e = o;
        ut(I => ({
                "15c9e5a8": I.$props.position.x,
                "15c9e5a6": I.$props.position.y
            }));
        const n = j(e.anchor.element),
        r = n.value.getBoundingClientRect(),
        s = j(null),
        i = j(!0),
        c = w(() => s.value ? s.value.getBoundingClientRect().height : 0);
        let g;
        pt(() => {
            g = new IntersectionObserver(([I]) => {
                i.value = I.isIntersecting
            }),
            g.observe(e.anchor.element)
        }),
        mt(() => {
            g.disconnect()
        });
        const m = w(() => {
            const I = n.value.getBoundingClientRect();
            return e.position.x - I.left
        }),
        p = w(() => {
            const I = e.position.y - r.top;
            return window.innerHeight - e.position.y < c.value ? I * -1 : (I + c.value) * -1
        }),
        v = w(() => ({
                    name: "offset",
                    options: {
                        offset: [m.value, p.value]
                    }
                })), {
            popperInstance: x
        } = gt({
            popperTarget: s,
            referenceEl: n
        }, {
            placement: "top-start",
            strategy: "fixed",
            modifiers: [v.value]
        }),
        f = async() => {
            await x.value?.setOptions({
                modifiers: [v.value]
            })
        };
        Q(c, async() => {
            await f()
        }),
        Q(me(e, "position"), async() => {
            await f()
        }, {
            deep: !0
        });
        const l = (I, D = {}) => ({
            id: "rename",
            text: "重命名",
            ...D,
            disabled: !I.canBeRenamed || e.selectedItems.length > 1 || D.disabled || !1
        }),
        a = (I, D = {}) => {
            const M = e.selectedItems.some(_ => !_.canBeDeleted);
            return {
                id: "delete",
                text: "删除",
                ...D,
                disabled: !I.canBeDeleted || M || D.disabled || !1
            }
        },
        d = I => {
            const D = I, {
                id: M
            } = D,
            _ = M === "rename",
            S = M === "delete";
            _ && !e.anchor.item.canBeRenamed || S && !e.anchor.item.canBeDeleted || t("itemClick", {
                contextMenuItem: D,
                anchorItem: e.anchor.item,
                isDelete: S,
                isRename: _
            })
        },
        u = w(() => [l(e.anchor.item), a(e.anchor.item)]),
        C = () => {
            x.value?.destroy(),
            t("close")
        };
        return (I, D) => fe((h(), E("div", {
                    ref_key: "menuWrapper",
                    ref: s,
                    class: "menu-wrapper"
                }, [ne(I.$slots, "default", {
                            items: u.value,
                            createRenameOption: l,
                            createDeleteOption: a,
                            onItemClick: d
                        }, () => [R(Ne, {
                                    "menu-aria-label": "File explorer context menu",
                                    items: u.value,
                                    onItemClick: D[0] || (D[0] = (M, _) => d(_))
                                }, null, 8, ["items"])], !0)])), [[Ve, i.value], [y(Me), () => C()]])
    }
});
const mo = V(po, [["__scopeId", "data-v-3d9e3a19"]]), go = z({
    props: {
        isSelected: {
            type: Boolean,
            required: !0
        },
        isDragging: {
            type: Boolean,
            required: !0
        }
    }
});
const vo = {
    class: "item-icon"
};
function fo(o, t, e, n, r, s) {
    return h(),
    E("tr", {
        class: ce(["file-explorer-item-base", {
                    selected: !o.isDragging && o.isSelected,
                    dragging: o.isDragging && o.isSelected
                }
            ]),
        "data-test-id": "file-explorer-item"
    }, [k("td", vo, [ne(o.$slots, "icon")]), ne(o.$slots, "default")], 2)
}
const et = V(go, [["render", fo], ["__scopeId", "data-v-8c494006"]]), ho = {
    key: 0,
    class: "open-indicator"
}, _o = ["title"], Io = {
    key: 0
}, yo = {
    key: 1
}, wo = {
    key: 0,
    class: "item-error"
}, xo = z({
    __name: "FileExplorerItem",
    props: {
        blacklistedNames: {},
        item: {},
        isSelected: {
            type: Boolean
        },
        isDragging: {
            type: Boolean
        },
        isRenameActive: {
            type: Boolean
        },
        itemIconRenderer: {
            type: [Function, null],
        default:
            null
        },
        isDraggingEnabled: {
            type: Boolean
        }
    },
    emits: ["dblclick", "click", "dragstart", "dragenter", "dragover", "drag", "dragleave", "dragend", "drop", "contextmenu", "rename:submit", "rename:clear"],
    setup(o, {
        emit: t
    }) {
        const e = o,
        n = f => f.isDirectory ? Ue : ze, {
            isRenameActive: r,
            blacklistedNames: s
        } = ue(e),
        i = j(null),
        c = j(""), {
            isValid: g,
            errorMessage: m,
            cleanedName: p
        } = vt({
            blacklistedNames: s,
            name: c
        }),
        v = async() => {
            c.value = e.item.name,
            await ht();
            const f = i.value?.$refs?.input;
            f?.setSelectionRange(0, c.value.length),
            f?.focus()
        };
        Q(r, async f => {
            f && await v()
        });
        const x = (f, l = !1) => {
            if (f.key === "Escape" && t("rename:clear"), (f.key === "Enter" || l) && g.value) {
                const a = p.value,
                d = a === e.item.name;
                if (a === "" || d) {
                    t("rename:clear");
                    return
                }
                t("rename:submit", {
                    itemId: e.item.id,
                    newName: a
                }),
                t("rename:clear")
            }
        };
        return (f, l) => (h(), W(et, {
                class: "file-explorer-item",
                "is-dragging": f.isDragging,
                "is-selected": f.isSelected,
                draggable: f.isDraggingEnabled && !y(r),
                onDragstart: l[2] || (l[2] = a => !y(r) && t("dragstart", a)),
                onDragenter: l[3] || (l[3] = a => !y(r) && t("dragenter", a)),
                onDragover: l[4] || (l[4] = a => t("dragover", a)),
                onDragleave: l[5] || (l[5] = a => !y(r) && t("dragleave", a)),
                onDragend: l[6] || (l[6] = a => !y(r) && t("dragend", a)),
                onDrag: l[7] || (l[7] = a => t("drag", a)),
                onClick: l[8] || (l[8] = a => t("click", a)),
                onContextmenu: l[9] || (l[9] = ge(a => !y(r) && t("contextmenu", a), ["prevent"])),
                onDrop: l[10] || (l[10] = ge(a => !y(r) && t("drop", a), ["prevent"])),
                onDblclick: l[11] || (l[11] = a => !y(r) && t("dblclick", a))
            }, {
                icon: O(() => [f.item.isOpen ? (h(), E("span", ho)) : G("", !0), (h(), W(he((f.itemIconRenderer || n)(f.item))))]),
            default:
                O(() => [k("td", {
                            class: ce(["item-content", {
                                        light: !f.item.isDirectory,
                                        "rename-active": y(r)
                                    }
                                ]),
                            title: f.item.name
                        }, [y(r) ? fe((h(), E("div", yo, [R(ft, {
                                                    ref_key: "renameInput",
                                                    ref: i,
                                                    modelValue: c.value,
                                                    "onUpdate:modelValue": l[0] || (l[0] = a => c.value = a),
                                                    class: "rename-input",
                                                    type: "text",
                                                    title: "rename",
                                                    "is-valid": y(g),
                                                    onKeyup: l[1] || (l[1] = a => x(a))
                                                }, null, 8, ["modelValue", "is-valid"]), y(g) ? G("", !0) : (h(), E("div", wo, [k("span", null, ie(y(m)), 1)]))])), [[y(Me), a => x(a, !0)]]) : (h(), E("span", Io, ie(f.item.name), 1))], 10, _o)]),
                _: 1
            }, 8, ["is-dragging", "is-selected", "draggable"]))
    }
});
const So = V(xo, [["__scopeId", "data-v-55dd06ba"]]), ko = z({
    components: {
        ArrowIcon: _t,
        FileExplorerItemBase: et
    },
    props: {
        isDragging: {
            type: Boolean,
            required: !0
        }
    }
});
const bo = o => (Pe("data-v-2692c1ec"), o = o(), Ae(), o), Co = bo(() => k("td", {
            class: "item-name hidden"
        }, "Go back to parent directory", -1));
function $o(o, t, e, n, r, s) {
    const i = Y("ArrowIcon"),
    c = Y("FileExplorerItemBase");
    return h(),
    W(c, {
        "is-dragging": o.isDragging,
        "is-selected": !1,
        class: "file-explorer-item-back",
        title: "Go back"
    }, {
        icon: O(() => [R(i, {
                    class: "arrow-icon"
                })]),
    default:
        O(() => [Co]),
        _: 1
    }, 8, ["is-dragging"])
}
const Eo = V(ko, [["render", $o], ["__scopeId", "data-v-2692c1ec"]]), tt = o => (Pe("data-v-31e363e5"), o = o(), Ae(), o), Do = {
    "aria-label": "Current workflow group in Space Explorer"
}, Mo = tt(() => k("thead", null, [k("tr", null, [k("th", {
                            scope: "col"
                        }, "Type"), k("th", {
                            class: "name",
                            scope: "col"
                        }, "Name")])], -1)), Po = {
    key: 1,
    class: "empty"
}, Ao = tt(() => k("td", null, "Folder is empty", -1)), To = [Ao], Ro = z({
    __name: "FileExplorer",
    props: {
        mode: {
        default:
            "normal"
        },
        fullPath: {
        default:
            ""
        },
        isRootFolder: {
            type: Boolean
        },
        items: {},
        itemIconRenderer: {
            type: [Function, null],
        default:
            null
        },
        activeRenamedItemId: {
        default:
            null
        },
        disableContextMenu: {
            type: Boolean,
        default:
            !1
        },
        disableMultiSelect: {
            type: Boolean,
        default:
            !1
        },
        disableDragging: {
            type: Boolean,
        default:
            !1
        },
        draggingAnimationMode: {
        default:
            "auto"
        }
    },
    emits: ["changeSelection", "changeDirectory", "openFile", "deleteItems", "moveItems", "dragend", "drag", "renameFile"],
    setup(o, {
        emit: t
    }) {
        const e = o,
        n = b => b.isDirectory,
        r = b => b.isOpenableFile,
        s = b => t("changeDirectory", b),
        i = uo({
            singleSelectionOnly: me(e, "disableMultiSelect")
        }), {
            multiSelectionState: c,
            handleSelectionClick: g,
            isSelected: m,
            selectedIndexes: p,
            isMultipleSelectionActive: v,
            resetSelection: x
        } = i,
        f = w(() => p.value.map(b => e.items[b])),
        l = w(() => f.value.map(b => b.id));
        Q(c, () => {
            t("changeSelection", l.value)
        });
        const a = j(null),
        d = w(() => e.items.filter(b => b.id !== a.value).map(({
                        name: b
                    }) => b)), {
            activeRenamedItemId: u
        } = ue(e);
        Q(u, () => {
            a.value = e.activeRenamedItemId
        });
        const C = j(null),
        I = j([]),
        D = j(null),
        M = j(null), {
            isDragging: _,
            onDragStart: S,
            onDragEnter: P,
            onDragOver: F,
            onDrag: N,
            onDragLeave: L,
            onDragEnd: q,
            onDrop: Z
        } = Qt({
            itemBACK: w(() => C.value ? C.value.$el : null),
            itemRefs: w(() => I.value ? I.value.map(({
                        $el: b
                    }) => b) : null),
            draggingAnimationMode: me(e, "draggingAnimationMode"),
            isDirectory: n,
            items: ue(e).items,
            multiSelection: i,
            shouldUseCustomDragPreview: w(() => !M.value && e.draggingAnimationMode !== "disabled"),
            getCustomPreviewEl: () => document.querySelector(".custom-preview")
        }),
        X = (b, B) => {
            B !== null && t(b, B)
        },
        J = j(!1),
        ee = j({
            x: 0,
            y: 0
        }),
        $ = j(null),
        T = () => {
            J.value = !1,
            $.value = null
        }, {
            fullPath: re
        } = ue(e);
        Q(re, () => {
            x(),
            T()
        });
        const ye = (b, B, A) => {
            const U = I.value[A].$el;
            ee.value.x = b.clientX,
            ee.value.y = b.clientY,
            $.value = {
                item: B,
                index: A,
                element: U
            },
            m(A) || g(A),
            J.value = !0
        },
        we = b => {
            const {
                isDelete: B,
                isRename: A,
                anchorItem: U
            } = b;
            B && t("deleteItems", {
                items: f.value
            }),
            A && (a.value = U.id),
            x(),
            T()
        },
        xe = (b, B, A) => {
            a.value !== b.id && g(A, B),
            T()
        },
        Se = b => {
            if (n(b)) {
                s(b.id);
                return
            }
            r(b) && t("openFile", b)
        };
        return (b, B) => fe((h(), E("table", Do, [Mo, k("tbody", {
                            class: ce(b.mode)
                        }, [b.isRootFolder ? G("", !0) : (h(), W(Eo, {
                                        key: 0,
                                        ref_key: "itemBack",
                                        ref: C,
                                        "is-dragging": y(_),
                                        onDragenter: B[0] || (B[0] = A => y(P)(A, -1, !0)),
                                        onDragleave: B[1] || (B[1] = A => y(L)(A, -1, !0)),
                                        onDragover: y(F),
                                        onDrop: B[2] || (B[2] = ge(A => X("moveItems", y(Z)(A, -1, !0)), ["prevent"])),
                                        onClick: B[3] || (B[3] = A => s(".."))
                                    }, null, 8, ["is-dragging", "onDragover"])), (h(!0), E(_e, null, Te(b.items, (A, U) => (h(), W(So, {
                                                    key: U,
                                                    ref_for: !0,
                                                    ref_key: "itemRefs",
                                                    ref: I,
                                                    item: A,
                                                    title: A.name,
                                                    "is-dragging": y(_),
                                                    "is-selected": y(m)(U),
                                                    "is-rename-active": A.id === a.value,
                                                    "blacklisted-names": d.value,
                                                    "item-icon-renderer": b.itemIconRenderer,
                                                    "is-dragging-enabled": !b.disableDragging,
                                                    onDragstart: H => y(S)(H, U),
                                                    onDragenter: H => y(P)(H, U),
                                                    onDragover: y(F),
                                                    onDragleave: H => y(L)(H, U),
                                                    onDragend: H => X("dragend", y(q)(H, A)),
                                                    onDrag: H => X("drag", y(N)(H, A)),
                                                    onClick: H => xe(A, H, U),
                                                    onContextmenu: H => ye(H, A, U),
                                                    onDrop: H => X("moveItems", y(Z)(H, U)),
                                                    onDblclick: H => Se(A),
                                                    "onRename:submit": B[4] || (B[4] = H => t("renameFile", H)),
                                                    "onRename:clear": B[5] || (B[5] = H => a.value = null)
                                                }, null, 8, ["item", "title", "is-dragging", "is-selected", "is-rename-active", "blacklisted-names", "item-icon-renderer", "is-dragging-enabled", "onDragstart", "onDragenter", "onDragover", "onDragleave", "onDragend", "onDrag", "onClick", "onContextmenu", "onDrop", "onDblclick"]))), 128)), b.items.length === 0 ? (h(), E("tr", Po, To)) : G("", !0)], 2), b.draggingAnimationMode !== "disabled" ? (h(), E("div", {
                                key: 0,
                                ref_key: "customPreviewContainer",
                                ref: D,
                                class: "custom-preview"
                            }, [ne(b.$slots, "customDragPreview", {}, () => [k("div", {
                                                ref_key: "customDragPreviewPlaceholder",
                                                ref: M
                                            }, null, 512)], !0)], 512)) : G("", !0), !e.disableContextMenu && J.value && $.value ? (h(), W(mo, {
                                key: 1,
                                position: ee.value,
                                anchor: $.value,
                                "selected-items": f.value,
                                onItemClick: we,
                                onClose: T
                            }, {
                            default:
                                O(A => [ne(b.$slots, "contextMenu", qe({
                                                isContextMenuVisible: J.value,
                                                position: ee.value,
                                                anchor: $.value,
                                                closeContextMenu: T,
                                                isMultipleSelectionActive: y(v)($.value.index)
                                            }, A), void 0, !0)]),
                                _: 3
                            }, 8, ["position", "anchor", "selected-items"])) : G("", !0)])), [[y(Me), () => y(x)()]])
    }
});
const jo = V(Ro, [["__scopeId", "data-v-31e363e5"]]), Bo = {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    stroke: "#000",
    "stroke-linejoin": "round",
    viewBox: "0 0 32 32"
}, Oo = k("path", {
    d: "m14.958 12.41 4.531 4.531-4.531 4.531m4.531-4.531h-13m5.183-4.491V7.407h8.656V2.5H3.016v22.093h8.656v-3.841"
}, null, -1), Fo = k("path", {
    "stroke-dasharray": "2",
    d: "M13.7 7.4H29v22H11.7V21"
}, null, -1), Ho = [Oo, Fo];
function Wo(o, t) {
    return h(),
    E("svg", Bo, Ho)
}
const Lo = {
    render: Wo
}, Go = {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    stroke: "#000",
    viewBox: "0 0 32 32"
}, Vo = k("path", {
    "stroke-linejoin": "round",
    d: "M15.267 26.055H4.445V6.175h10.822"
}, null, -1), No = k("path", {
    "stroke-linejoin": "round",
    d: "M13 21.89v-3.525a5.025 5.025 0 0 1 5.025-5.025H27.5"
}, null, -1), Uo = k("path", {
    "stroke-linejoin": "round",
    d: "m21.525 19.565 6.225-6.225-6.225-6.225"
}, null, -1), zo = [Vo, No, Uo];
function qo(o, t) {
    return h(),
    E("svg", Go, zo)
}
const Xo = {
    render: qo
}, Ko = {
    xmlns: "http://www.w3.org/2000/svg",
    stroke: "#000",
    viewBox: "0 0 32 32"
}, Yo = k("path", {
    fill: "none",
    "stroke-linejoin": "round",
    d: "M23.3 23.2c3.6-.4 6.4-3.5 6.4-7.2 0-4-3.3-7.3-7.3-7.3h-.5c-1.1-3.2-4.1-5.5-7.7-5.5C9.7 3.3 6 7 6 11.5c0 .4 0 .8.1 1.2-2.2.7-3.7 2.8-3.7 5.2 0 3 2.4 5.5 5.5 5.5h.9m7.2 5.9v-12m-4 4 4-4 4 4"
}, null, -1), Zo = [Yo];
function Qo(o, t) {
    return h(),
    E("svg", Ko, Zo)
}
const Jo = {
    render: Qo
}, en = {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    stroke: "#000",
    viewBox: "0 0 32 32"
}, tn = k("path", {
    "stroke-linejoin": "round",
    "stroke-miterlimit": "10",
    d: "M24 26c3.652 0 6.208-3.565 6.208-7.273a7.271 7.271 0 0 0-7.273-7.273c-.154 0-.31.009-.463.027C21.352 8.29 18.326 6 14.754 6a8.183 8.183 0 0 0-8.182 8.182c0 .409.037.8.1 1.191a5.447 5.447 0 0 0-3.737 5.172C2.935 23.553 4.992 26 8 26"
}, null, -1), on = k("path", {
    "stroke-linejoin": "round",
    "stroke-miterlimit": "10",
    d: "m21 29-1-1-2-2 2-2 1-1m-9 0 1 1 2 2-2 2-1 1"
}, null, -1), nn = k("path", {
    d: "M10 26h5m3 0h5"
}, null, -1), sn = [tn, on, nn];
function rn(o, t) {
    return h(),
    E("svg", en, sn)
}
const an = {
    render: rn
}, cn = {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    stroke: "#000",
    "stroke-linejoin": "round",
    viewBox: "0 0 32 32"
}, ln = k("path", {
    d: "M23.3 22.7c3.6-.4 6.4-3.5 6.4-7.2 0-4-3.3-7.3-7.3-7.3h-.5c-1.1-3.2-4.1-5.5-7.7-5.5C9.7 2.8 6 6.4 6 10.9c0 .4 0 .8.1 1.2-2.2.7-3.7 2.8-3.7 5.2 0 3 2.4 5.5 5.5 5.5h.9m7.2-6v12.4m4-4-4 4-4-4"
}, null, -1), dn = [ln];
function un(o, t) {
    return h(),
    E("svg", cn, dn)
}
const pn = {
    render: un
}, mn = {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    stroke: "#000",
    "stroke-linejoin": "round",
    viewBox: "0 0 32 32"
}, gn = k("circle", {
    cx: "21.277",
    cy: "8.945",
    r: "5.445"
}, null, -1), vn = k("path", {
    d: "m12.389 24.945-3.556-3.556m8.626-8.626L5.278 24.945 8.833 28.5"
}, null, -1), fn = [gn, vn];
function hn(o, t) {
    return h(),
    E("svg", mn, fn)
}
const _n = {
    render: hn
}, In = {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    stroke: "#000",
    "stroke-linejoin": "round",
    viewBox: "0 0 32 32"
}, yn = k("path", {
    d: "M4.808 6.808A13 13 0 1 0 27 16V3"
}, null, -1), wn = k("path", {
    "stroke-miterlimit": "10",
    d: "M22.24 7.76 27 3l4.76 4.76m-12.695 2.371h-2.473a.532.532 0 0 0-.53.53v2.473c0 .291.238.53.53.53h2.473c.291 0 .53-.238.53-.53v-2.473a.532.532 0 0 0-.53-.53zm-8.312 4.232H8.28a.532.532 0 0 0-.53.53v2.473c0 .29.238.53.53.53h2.473c.291 0 .53-.239.53-.53v-2.473a.532.532 0 0 0-.53-.53zm8.294 4.233h-2.473a.532.532 0 0 0-.53.53v2.473c0 .29.238.53.53.53h2.473c.291 0 .53-.238.53-.53v-2.473a.532.532 0 0 0-.53-.53z"
}, null, -1), xn = k("path", {
    "stroke-miterlimit": "10",
    d: "M11.283 16.185h2.278v-3.847a.44.44 0 0 1 .44-.44h2.062"
}, null, -1), Sn = k("path", {
    "stroke-miterlimit": "10",
    d: "M16.045 20.362H14a.44.44 0 0 1-.439-.44v-3.737h-2.278"
}, null, -1), kn = [yn, wn, xn, Sn];
function bn(o, t) {
    return h(),
    E("svg", In, kn)
}
const ot = {
    render: bn
}, Cn = {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    stroke: "#000",
    "stroke-linejoin": "round",
    viewBox: "0 0 32 32"
}, $n = k("circle", {
    cx: "16",
    cy: "16",
    r: "13"
}, null, -1), En = k("path", {
    d: "M12 22.1V9.9L22.5 16z"
}, null, -1), Dn = [$n, En];
function Mn(o, t) {
    return h(),
    E("svg", Cn, Dn)
}
const Pn = {
    render: Mn
}, An = {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    stroke: "#000",
    "stroke-linejoin": "round",
    viewBox: "0 0 32 32"
}, Tn = k("path", {
    "stroke-miterlimit": "10",
    d: "m16.124 2 12.124 7v14l-12.124 7L4 23V9l12.124-7Zm0 28v-6M4 23l4.94-3.207M28.248 9l-5.287 3.052M28.248 23l-5.131-3.34M4 9l5.093 2.94M16.124 2v6"
}, null, -1), Rn = k("path", {
    "stroke-miterlimit": "10",
    d: "M17.563 12.56 21 15.997l-3.437 3.437M21 15.997H10"
}, null, -1), jn = [Tn, Rn];
function Bn(o, t) {
    return h(),
    E("svg", An, jn)
}
const On = {
    render: Bn
}, nt = (o, t, e) => {
    const n = e.length === 0;
    return {
        id: "downloadToLocalSpace",
        text: "下载到本地空间",
        icon: pn,
        disabled: n,
        title: n ? "Select at least one file to download." : null,
        separator: !0,
        execute: () => {
            o("spaces/copyBetweenSpaces", {
                projectId: t,
                itemIds: e
            })
        }
    }
}, st = (o, t, e) => {
    const n = e.length === 0;
    return {
        id: "moveToSpace",
        text: "移动到...",
        icon: On,
        disabled: n,
        title: n ? "Select at least one item to move." : null,
        separator: !0,
        execute: () => {
            o("spaces/moveOrCopyToSpace", {
                projectId: t,
                isCopy: !1,
                itemIds: e
            })
        }
    }
}, rt = (o, t, e, n, r) => {
    const s = n.length === 0,
    i = {
        id: "upload",
        text: "上传",
        icon: Jo,
        disabled: !t || s,
        title: t ? s && "Select at least one file to upload." || null : "A connection to a hub is required to upload.",
        execute: () => {
            o("spaces/copyBetweenSpaces", {
                projectId: e,
                itemIds: n
            })
        }
    },
    g = Object.values(r || {}).filter(l => l.type !== pe.TypeEnum.LOCAL).filter(l => !l.connected),
    m = g.map(l => ({
                id: `connectToHub-${l.id}`,
                text: l.name,
                execute: () => {
                    o("spaces/connectProvider", {
                        spaceProviderId: l.id
                    })
                }
            }));
    if (m.length === 0)
        return [i];
    const p = g.length === 1,
    [v] = m,
    f = {
        id: "connectToHub",
        text: (() => {
            if (!p)
                return "Connect to";
            const [l] = g;
            return l.type === Ie.TypeEnum.HUB ? "Connect to Hub" : "Connect to Server"
        })(),
        icon: an,
        execute: p ? v.execute : null,
        children: p ? null : m
    };
    return [i, f]
}, at = (o, t, e, n) => {
    const r = e.length === 0,
    s = e.length > 1,
    i = n.type === Ie.TypeEnum.HUB ? "Hub" : "WebPortal";
    return {
        id: "openInBrowser",
        text: `Open in ${i}`,
        icon: Xe,
        disabled: r || s,
        title: r ? `Select one file to open in ${i}.` : null,
        execute: () => {
            o("spaces/openInBrowser", {
                projectId: t,
                itemId: e[0]
            })
        }
    }
}, it = (o, t, e) => {
    const n = e.length === 0,
    r = e.length > 1;
    return {
        id: "openAPIDefinition",
        text: "开放 API 定义",
        icon: Xe,
        disabled: n || r,
        title: n ? "Select one workflow to open in server." : null,
        execute: () => {
            o("spaces/openAPIDefinition", {
                projectId: t,
                itemId: e[0]
            })
        }
    }
}, Fn = (o, t, e) => {
    const n = e.length === 0,
    r = e.length > 1;
    return {
        id: "openPermissionsDialog",
        text: "许可",
        icon: _n,
        disabled: n || r,
        title: n ? "View and edit access permissions" : null,
        execute: () => {
            o("spaces/openPermissionsDialog", {
                projectId: t,
                itemId: e[0]
            })
        }
    }
}, Hn = (o, t, e, n) => {
    const r = e.length === 0,
    s = e.length > 1;
    return {
        id: "displayDeployments",
        text: "显示计划和作业",
        icon: ot,
        disabled: r || s,
        title: r ? "Select a file to display schedules and jobs." : null,
        execute: () => {
            o("spaces/displayDeployments", {
                projectId: t,
                itemId: e[0],
                itemName: n
            })
        }
    }
}, Wn = (o, t, e) => {
    const n = e.length === 0,
    r = e.length > 1;
    return {
        id: "execute",
        text: "执行",
        icon: Pn,
        disabled: n || r,
        title: n ? "Select a file to execute a workflow." : null,
        execute: () => {
            o("spaces/executeWorkflow", {
                projectId: t,
                itemId: e[0]
            })
        }
    }
}, Ln = z({
    __name: "SpaceExplorerContextMenu",
    props: {
        createRenameOption: {
            type: Function
        },
        createDeleteOption: {
            type: Function
        },
        anchor: {},
        isMultipleSelectionActive: {
            type: Boolean
        },
        onItemClick: {
            type: Function
        },
        closeContextMenu: {
            type: Function
        },
        projectId: {},
        selectedItemIds: {}
    },
    emits: ["duplicateItems"],
    setup(o, {
        emit: t
    }) {
        const e = o,
        n = se(),
        r = w(() => n.getters["spaces/getProviderInfo"]),
        s = m => {
            if (m.execute) {
                m.execute(),
                e.closeContextMenu();
                return
            }
            e.onItemClick(m)
        },
        i = (m, p) => m ? [p] : [],
        c = w(() => n.getters["spaces/isLocalProvider"](e.projectId)),
        g = w(() => {
            const {
                createRenameOption: m,
                createDeleteOption: p,
                anchor: {
                    item: v
                },
                isMultipleSelectionActive: x
            } = e,
            f = r.value(e.projectId).type === Ie.TypeEnum.SERVER,
            l = n.getters["spaces/selectionContainsFile"](e.projectId, e.selectedItemIds),
            a = n.getters["spaces/selectionContainsWorkflow"](e.projectId, e.selectedItemIds),
            d = nt(n.dispatch, e.projectId, e.selectedItemIds),
            u = st(n.dispatch, e.projectId, e.selectedItemIds),
            C = at(n.dispatch, e.projectId, e.selectedItemIds, r.value(e.projectId)),
            I = it(n.dispatch, e.projectId, e.selectedItemIds),
            D = rt(n.dispatch, n.getters["spaces/hasActiveHubSession"], e.projectId, e.selectedItemIds, n.state.spaces.spaceProviders),
            M = () => c.value ? D : f ? [] : l ? [d, u] : [d, u, C],
            _ = Hn(n.dispatch, e.projectId, e.selectedItemIds, v.name),
            S = Fn(n.dispatch, e.projectId, e.selectedItemIds),
            P = Wn(n.dispatch, e.projectId, e.selectedItemIds),
            F = () => f ? a ? [d, P, _, C, I, S] : [C, S] : [],
            N = (J, ee, $) => {
                const T = $.length > 1;
                return {
                    id: "export",
                    text: "导出",
                    icon: Xo,
                    disabled: l || T,
                    execute: () => {
                        J("spaces/exportSpaceItem", {
                            projectId: ee,
                            itemId: $[0]
                        })
                    }
                }
            },
            L = v.meta.type === K.TypeEnum.Workflow ? "workflows" : "folders",
            q = () => ({
                id: "duplicate",
                text: "复制",
                icon: Lo,
                title: v.isOpen ? `Open ${L} cannot be duplicated.` : null,
                disabled: v.isOpen,
                execute: () => t("duplicateItems", e.selectedItemIds)
            }),
            Z = v.isOpen ? `Open ${L} cannot be renamed` : "";
            return [...i(!x, m(v, {
                        title: Z,
                        icon: Ot
                    })), p(v, {
                    title: v.canBeDeleted ? "" : "Open folders cannot be deleted",
                    icon: Ze
                }), q(), ...i(c.value, N(n.dispatch, e.projectId, e.selectedItemIds)), ...M(), ...F()]
        });
        return (m, p) => (h(), W(Ne, {
                id: "space-explorer-context-menu",
                "menu-aria-label": "Space explorer context menu",
                class: "menu-items",
                items: g.value,
                onItemClick: p[0] || (p[0] = (v, x) => s(x))
            }, null, 8, ["items"]))
    }
}), Gn = {
    class: "space-selection-dropdown"
}, Vn = {
    class: "selected-text"
}, Nn = z({
    __name: "SpaceSelectionDropdown",
    props: {
        showText: {
            type: Boolean,
        default:
            !0
        },
        projectId: {}
    },
    setup(o) {
        const t = o,
        e = se(),
        n = a => "active" in a,
        r = async({
            metadata: a
        }) => {
            const {
                projectId: d
            } = t, {
                spaceId: u,
                spaceProviderId: C,
                requestSignIn: I = !1
            } = a;
            if (I) {
                await e.dispatch("spaces/connectProvider", {
                    spaceProviderId: C
                });
                return
            }
            e.commit("spaces/setProjectPath", {
                projectId: d,
                value: {
                    spaceId: u,
                    spaceProviderId: C,
                    itemId: "root"
                }
            }),
            await e.dispatch("spaces/fetchWorkflowGroupContent", {
                projectId: d
            })
        },
        s = w(() => e.state.spaces.projectPath[t.projectId]),
        i = w(() => e.state.spaces.spaceProviders),
        c = a => a.type === pe.TypeEnum.LOCAL ? [] : [{
                    text: a.name,
                    selected: !1,
                    sectionHeadline: !0,
                    separator: !0,
                    metadata: {
                        id: a.id
                    }
                }
            ],
        g = (a, d) => ({
            text: d.name,
            selected: a.id === s.value?.spaceProviderId && d.id === s.value?.spaceId,
            icon: d.private ? Ce : ke,
            sectionHeadline: !1,
            separator: !1,
            metadata: {
                id: `${a.id}__${d.id}`,
                spaceId: d.id,
                spaceProviderId: a.id,
                requestSignIn: !1,
                space: d
            }
        }),
        m = a => ({
            text: "登录",
            selected: !1,
            sectionHeadline: !1,
            separator: !1,
            metadata: {
                id: `${a.id}__SIGN_IN`,
                spaceId: null,
                spaceProviderId: a.id,
                requestSignIn: !0
            }
        }),
        p = (a, d) => d.reduce((u, C) => (u[C.owner] = (u[C.owner] ?? []).concat(g(a, C)), u), {}),
        v = a => {
            const {
                spaces: d,
                provider: u
            } = a,
            C = Object.keys(d),
            I = M => M.type === pe.TypeEnum.HUB,
            D = (M, _) => M.type !== pe.TypeEnum.HUB ? null : _.private ? Ce : ke;
            return C.map(M => {
                const _ = u.id === s.value?.spaceProviderId;
                if (I(u)) {
                    const P = d[M].find(F => F.metadata.space.id === s.value?.spaceId);
                    return {
                        text: M,
                        children: d[M],
                        metadata: {
                            active: Boolean(P)
                        }
                    }
                }
                const S = d[M].at(0).metadata.space;
                return {
                    text: S.name,
                    selected: _,
                    icon: D(u, S),
                    metadata: {
                        id: `${u.id}__${S.id}`,
                        spaceId: S.id,
                        spaceProviderId: u.id
                    }
                }
            })
        },
        x = w(() => e.state.spaces.isLoadingProvider ? [{
                        text: "载入…",
                        disabled: !0,
                        icon: It
                    }
                ] : (i.value ? Object.values(i.value) : []).map(u => u.spaces ? {
                    provider: u,
                    spaces: p(u, u.spaces)
                }
                     : {
                    provider: u,
                    spaces: {}
                }).flatMap(({
                        provider: u,
                        spaces: C
                    }) => {
                    const I = c(u),
                    D = v({
                        provider: u,
                        spaces: C
                    });
                    return [].concat(I).concat(u.connected ? D : [m(u)])
                })),
        f = w(() => {
            const a = x.value.find(u => u.metadata && n(u.metadata) ? u.metadata.active : u.selected);
            if (!a)
                return "";
            if (!a.children)
                return a.text;
            const d = (a.children ?? []).find(u => u.selected);
            return d ? `${d.metadata.space.owner} – ${d.metadata.space.name}` : ""
        }),
        l = w(() => {
            const a = e.getters["spaces/getSpaceInfo"](t.projectId),
            d = e.getters["spaces/isLocalProvider"](t.projectId),
            u = e.getters["spaces/isServerProvider"](t.projectId);
            return d ? Ft : u ? Ht : a?.private ? Ce : ke
        });
        return (a, d) => (h(), E("div", Gn, [R(Ke, {
                        "teleport-to-body": !1,
                        items: x.value,
                        class: "submenu",
                        "button-title": "Change space",
                        orientation: "left",
                        onItemClick: d[0] || (d[0] = (u, C) => r(C))
                    }, {
                    default:
                        O(({
                                expanded: u
                            }) => [a.showText ? (h(), E(_e, {
                                        key: 0
                                    }, [(h(), W(he(l.value))), k("span", Vn, ie(f.value), 1)], 64)) : G("", !0), R(y(yt), {
                                    class: ce(["dropdown-icon", {
                                                flip: u
                                            }
                                        ])
                                }, null, 8, ["class"])]),
                        _: 1
                    }, 8, ["items"])]))
    }
});
const Un = V(Nn, [["__scopeId", "data-v-cf2c3696"]]);
const zn = {
    props: {
        text: {
            type: String,
            required: !0
        }
    }
}, qn = {
    class: "tooltip"
}, Xn = {
    key: 0,
    class: "text"
};
function Kn(o, t, e, n, r, s) {
    return h(),
    E("div", qn, [ne(o.$slots, "default", {}, void 0, !0), e.text ? (h(), E("span", Xn, ie(e.text), 1)) : G("", !0)])
}
const Yn = V(zn, [["render", Kn], ["__scopeId", "data-v-20d7d6ae"]]), Zn = z({
    components: {
        Button: $e,
        Tooltip: Yn,
        PlusIcon: wt
    },
    inheritAttrs: !1,
    props: {
        title: {
            type: String,
        default:
            null
        }
    }
});
function Qn(o, t, e, n, r, s) {
    const i = Y("PlusIcon"),
    c = Y("Button");
    return h(),
    W(he(o.title ? "Tooltip" : "div"), {
        text: o.title
    }, {
    default:
        O(() => [R(c, qe({
                        class: "plus-button"
                    }, o.$attrs), {
                default:
                    O(() => [R(i)]),
                    _: 1
                }, 16)]),
        _: 1
    }, 8, ["text"])
}
const Jn = V(Zn, [["render", Qn], ["__scopeId", "data-v-79033dca"]]), es = {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    stroke: "#000",
    "stroke-linejoin": "round",
    viewBox: "0 0 32 32"
}, ts = k("path", {
    d: "M14.269 23.375h8.695m-4.348-4.347v8.694m-8.187-1.836h-7.91V4.278h9.051l4.613 6h13.298v15.608h-2.779m2.779-15.608v-4H13.104"
}, null, -1), os = [ts];
function ns(o, t) {
    return h(),
    E("svg", es, os)
}
const ss = {
    render: ns
}, rs = {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    stroke: "#000",
    viewBox: "0 0 32 32"
}, as = k("path", {
    "stroke-linejoin": "round",
    d: "M5 16h22M16 5v22"
}, null, -1), is = [as];
function cs(o, t) {
    return h(),
    E("svg", rs, is)
}
const ls = {
    render: cs
}, ds = {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    stroke: "#000",
    viewBox: "0 0 32 32"
}, us = k("path", {
    "stroke-linejoin": "round",
    d: "M14.818 8H6.996v19.88h19.885V21"
}, null, -1), ps = k("path", {
    "stroke-linejoin": "round",
    d: "M19.776 19.703V9.978a5.025 5.025 0 0 1 5.025-5.025h3.525"
}, null, -1), ms = k("path", {
    "stroke-linejoin": "round",
    d: "m15.107 15.034 1.557 1.556 3.112 3.113 3.113-3.113 1.556-1.556"
}, null, -1), gs = [us, ps, ms];
function vs(o, t) {
    return h(),
    E("svg", ds, gs)
}
const fs = {
    render: vs
}, hs = {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    stroke: "#000",
    viewBox: "0 0 32 32"
}, _s = k("path", {
    "stroke-linejoin": "round",
    d: "M26.615 8.397h-5.222V3.175m5.222 26H6.241v-26h15.152l5.222 5.222v20.778Z"
}, null, -1), Is = [_s];
function ys(o, t) {
    return h(),
    E("svg", hs, Is)
}
const ws = {
    render: ys
}, xs = {
    components: {
        OptionalSubMenuActionButton: Wt,
        PlusButton: Jn,
        SubMenu: Ke,
        MenuOptionsIcon: xt,
        ReloadIcon: je,
        FunctionButton: St
    },
    props: {
        mode: {
            type: String,
        default:
            "normal"
        },
        selectedItemIds: {
            type: Array,
            required: !0
        },
        projectId: {
            type: [String, null],
            required: !0
        }
    },
    computed: {
        ...kt("spaces", ["getSpaceInfo", "getProviderInfo", "isLocalProvider", "hasActiveHubSession", "selectionContainsFile", "selectionContainsWorkflow"]),
        ...bt("spaces", ["spaceProviders", "isLoadingContent"]),
        isLocal() {
            return this.isLocalProvider(this.projectId)
        },
        isFileSelected() {
            return this.selectionContainsFile(this.projectId, this.selectedItemIds)
        },
        isWorkflowSelected() {
            return this.selectionContainsWorkflow(this.projectId, this.selectedItemIds)
        },
        createWorkflowAction() {
            return {
                id: "createWorkflow",
                text: "创建工作流",
                icon: ls,
                disabled: this.isLoadingContent,
                hidden: this.mode !== "mini",
                execute: () => {
                    this.$store.commit("spaces/setCreateWorkflowModalConfig", {
                        isOpen: !0,
                        projectId: this.projectId
                    })
                }
            }
        },
        actions() {
            const {
                projectId: o
            } = this,
            t = () => {
                const r = rt(this.$store.dispatch, this.hasActiveHubSession, this.projectId, this.selectedItemIds, this.spaceProviders);
                return this.isLocal ? r : []
            },
            e = () => {
                if (this.isLocal)
                    return [];
                const r = nt(this.$store.dispatch, this.projectId, this.selectedItemIds),
                s = at(this.$store.dispatch, this.projectId, this.selectedItemIds, this.getProviderInfo(o)),
                i = st(this.$store.dispatch, this.projectId, this.selectedItemIds),
                c = [r, i];
                return this.isFileSelected ? c : c.concat(s)
            },
            n = () => this.getProviderInfo(o).type !== Ie.TypeEnum.SERVER ? [] : this.isWorkflowSelected ? [it(this.$store.dispatch, this.projectId, this.selectedItemIds)] : [];
            return [...this.mode === "mini" ? [this.createWorkflowAction] : [], {
                    id: "createFolder",
                    text: "创建文件夹",
                    icon: ss,
                    separator: !0,
                    execute: () => {
                        this.$store.dispatch("spaces/createFolder", {
                            projectId: o
                        })
                    }
                }, {
                    id: "importWorkflow",
                    text: "导入工作流",
                    icon: fs,
                    execute: () => {
                        this.$store.dispatch("spaces/importToWorkflowGroup", {
                            projectId: o,
                            importType: "WORKFLOW"
                        })
                    }
                }, {
                    id: "importFiles",
                    text: "添加文件",
                    icon: ws,
                    separator: !0,
                    execute: () => {
                        this.$store.dispatch("spaces/importToWorkflowGroup", {
                            projectId: o,
                            importType: "FILES"
                        })
                    }
                }, ...t(), ...e(), ...n(), {
                    id: "reload",
                    text: "重新载入",
                    icon: je,
                    execute: () => this.reload(),
                    metadata: {
                        hideInMiniMode: !0
                    }
                }
            ]
        },
        createWorkflowButtonTitle() {
            const {
                text: o,
                hotkeyText: t
            } = this.$shortcuts.get("createWorkflow");
            return `${o} (${t})`
        }
    },
    methods: {
        reload() {
            const {
                projectId: o
            } = this;
            o !== null && this.$store.dispatch("spaces/fetchWorkflowGroupContent", {
                projectId: o
            })
        }
    }
};
const Ss = {
    class: "toolbar-buttons"
}, ks = {
    key: 0,
    class: "toolbar-actions-normal"
}, bs = {
    class: "create-workflow-btn"
}, Cs = {
    key: 1,
    class: "toolbar-actions-mini"
};
function $s(o, t, e, n, r, s) {
    const i = Y("OptionalSubMenuActionButton"),
    c = Y("PlusButton"),
    g = Y("ReloadIcon"),
    m = Y("FunctionButton"),
    p = Y("MenuOptionsIcon"),
    v = Y("SubMenu");
    return h(),
    E("div", Ss, [e.mode === "normal" ? (h(), E("div", ks, [(h(!0), E(_e, null, Te(s.actions, x => (h(), W(i, {
                                            id: x.id,
                                            key: x.id,
                                            disabled: o.isLoadingContent,
                                            item: x,
                                            onClick: t[0] || (t[0] = f => f.execute ? f.execute() : null)
                                        }, null, 8, ["id", "disabled", "item"]))), 128)), k("div", bs, [R(c, {
                                    title: s.createWorkflowButtonTitle,
                                    primary: "",
                                    disabled: s.createWorkflowAction.disabled,
                                    onClick: t[1] || (t[1] = x => s.createWorkflowAction.execute())
                                }, null, 8, ["title", "disabled"])])])) : G("", !0), e.mode === "mini" ? (h(), E("div", Cs, [R(m, {
                            class: "reload-button",
                            onClick: s.reload
                        }, {
                        default:
                            O(() => [R(g)]),
                            _: 1
                        }, 8, ["onClick"]), R(v, {
                            items: s.actions.filter(x => !x?.metadata?.hideInMiniMode),
                            disabled: o.isLoadingContent,
                            class: "more-actions",
                            "button-title": "More actions",
                            onToggle: t[2] || (t[2] = ge(() => {}, ["stop"])),
                            onItemClick: t[3] || (t[3] = (x, {
                                    execute: f
                                }) => f())
                        }, {
                        default:
                            O(() => [R(p, {
                                        class: "open-icon"
                                    })]),
                            _: 1
                        }, 8, ["items", "disabled"])])) : G("", !0)])
}
const Es = V(xs, [["render", $s], ["__scopeId", "data-v-71053703"]]), Ds = {
    key: 2,
    class: "no-data"
}, Ms = z({
    __name: "DeploymentsModal",
    setup(o) {
        const t = Be(() => Oe(() => import("./JobsTable-57bbfd40.js"), ["./JobsTable-57bbfd40.js", "./JobsTable.vue_vue_type_script_setup_true_lang-b7e10464.js", "./index-6dc36896.js", "./index-8bfe0c2d.css"], import.meta.url)),
        e = Be(() => Oe(() => import("./SchedulesTable-64159e53.js"), ["./SchedulesTable-64159e53.js", "./JobsTable.vue_vue_type_script_setup_true_lang-b7e10464.js", "./index-6dc36896.js", "./index-8bfe0c2d.css", "./SchedulesTable-b0cac37d.css"], import.meta.url)),
        n = se(),
        r = w(() => n.state.spaces.deploymentsModalConfig.isOpen),
        s = w(() => `Schedules and jobs of “${n.state.spaces.deploymentsModalConfig.name}”`),
        i = w(() => n.state.spaces.jobs),
        c = w(() => n.state.spaces.schedules),
        g = () => {
            n.commit("spaces/setDeploymentsModalConfig", {
                isOpen: !1,
                name: null,
                projectId: null,
                itemId: null
            })
        };
        return (m, p) => fe((h(), W(Ye, {
                    active: r.value,
                    title: s.value,
                    "style-type": "info",
                    class: "modal",
                    onCancel: g
                }, {
                    icon: O(() => [R(y(ot))]),
                    confirmation: O(() => [c.value.length > 0 ? (h(), W(y(e), {
                                    key: 0,
                                    schedules: c.value,
                                    jobs: i.value
                                }, null, 8, ["schedules", "jobs"])) : G("", !0), i.value.length > 0 ? (h(), W(y(t), {
                                    key: 1,
                                    jobs: i.value
                                }, null, 8, ["jobs"])) : G("", !0), i.value.length === 0 && c.value.length === 0 ? (h(), E("span", Ds, "There are no schedules or jobs to display.")) : G("", !0)]),
                    _: 1
                }, 8, ["active", "title"])), [[Ve, r.value]])
    }
});
const Ps = V(Ms, [["__scopeId", "data-v-e8a65165"]]), As = {
    class: "breadcrumb-wrapper"
}, Ts = z({
    __name: "SpaceExplorerBreadcrumbs",
    props: {
        activeWorkflowGroup: {}
    },
    emits: ["click"],
    setup(o, {
        emit: t
    }) {
        const e = o,
        n = w(() => {
            const s = {
                icon: Lt,
                id: "root"
            };
            if (!e.activeWorkflowGroup)
                return [{
                        ...s,
                        text: "首页",
                        clickable: !1
                    }
                ];
            const {
                path: i
            } = e.activeWorkflowGroup,
            c = {
                ...s,
                text: i.length === 0 ? "Home" : null,
                clickable: i.length > 0
            },
            g = i.length - 1;
            return [c].concat(i.map((m, p) => ({
                        icon: null,
                        text: m.name,
                        id: m.id,
                        clickable: p !== g
                    })))
        }),
        r = ({
            id: s
        }) => {
            t("click", s)
        };
        return (s, i) => (h(), E("div", As, [R(Ct, {
                        items: n.value,
                        onClickItem: r
                    }, null, 8, ["items"])]))
    }
});
const Rs = V(Ts, [["__scopeId", "data-v-0f35ad4d"]]), js = o => (Pe("data-v-08c86a15"), o = o(), Ae(), o), Bs = {
    class: "items-to-delete"
}, Os = js(() => k("span", null, "Do you want to delete the following item(s):", -1)), Fs = z({
    __name: "SpaceExplorerDeleteItemModal",
    props: {
        isActive: {
            type: Boolean
        },
        items: {},
        itemIconRenderer: {
            type: Function
        }
    },
    emits: ["accept", "cancel"],
    setup(o, {
        emit: t
    }) {
        return (e, n) => (h(), W(Ye, {
                active: e.isActive,
                title: "Delete",
                "style-type": "info",
                onCancel: n[2] || (n[2] = r => t("cancel"))
            }, {
                icon: O(() => [R(y(Ze))]),
                confirmation: O(() => [k("div", Bs, [Os, k("ul", null, [(h(!0), E(_e, null, Te(e.items, (r, s) => (h(), E("li", {
                                                            key: s
                                                        }, [(h(), W(he(e.itemIconRenderer(r)))), be(" " + ie(r.name), 1)]))), 128))])])]),
                controls: O(() => [R($e, {
                            "with-border": "",
                            onClick: n[0] || (n[0] = r => t("cancel"))
                        }, {
                        default:
                            O(() => [be(" Cancel ")]),
                            _: 1
                        }), R($e, {
                            primary: "",
                            onClick: n[1] || (n[1] = r => t("accept"))
                        }, {
                        default:
                            O(() => [be(" Ok ")]),
                            _: 1
                        })]),
                _: 1
            }, 8, ["active"]))
    }
});
const Hs = V(Fs, [["__scopeId", "data-v-08c86a15"]]), Le = (o, t) => !o && t.meta.type === K.TypeEnum.Component, Ws = o => {
    const t = j(!1),
    e = j(!1),
    n = j(null),
    r = $t(),
    s = se(),
    i = w(() => s.getters["workflow/isWritable"]),
    c = w(() => s.state.spaces.projectPath[o.projectId.value]),
    g = w(() => s.state.canvas.getScrollContainerElement),
    m = w(() => s.getters["canvas/screenToCanvasCoordinates"]),
    p = w(() => s.state.application.fileExtensionToNodeTemplateId),
    v = a => {
        const d = Object.keys(p.value).find(u => a.name.endsWith(u));
        return p.value[d]
    },
    x = async({
        event: a,
        item: d
    }) => {
        e.value = !1;
        const u = v(d),
        C = Le(u, d);
        if (!u && !C)
            return;
        const I = a.clientX - le / 2,
        D = a.clientY - le / 2,
        M = document.elementFromPoint(I, D),
        _ = g.value();
        n.value = C ? {
            isComponent: !0,
            inPorts: [],
            outPorts: [],
            type: d.meta.type
        }
         : await s.dispatch("nodeRepository/getNodeTemplate", u),
        t.value = _.contains(M)
    },
    f = async({
        event: a,
        sourceItem: d,
        onComplete: u
    }) => {
        e.value = !0,
        t.value = !1,
        n.value = null;
        const C = a.clientX - le / 2,
        I = a.clientY - le / 2,
        D = document.elementFromPoint(C, I);
        if (r.name !== Et.WorkflowPage || !i.value) {
            u(!1);
            return
        }
        if (!g.value().contains(D)) {
            u(!1);
            return
        }
        const _ = v(d),
        S = Le(_, d);
        if (!_ && !S) {
            u(!1);
            return
        }
        try {
            const [P, F] = m.value([C, I]),
            N = {
                x: P,
                y: F
            },
            L = {
                providerId: c.value.spaceProviderId,
                spaceId: c.value.spaceId,
                itemId: d.id
            };
            await s.dispatch("workflow/addNode", {
                position: N,
                spaceItemReference: L,
                nodeFactory: S ? null : {
                    className: _
                },
                isComponent: S
            }),
            u(!0)
        } catch (P) {
            throw u(!1),
            consola.error({
                message: "Error adding node via file to workflow",
                error: P
            }),
            P
        }
    };
    return {
        shouldShowCustomPreview: w(() => !e.value && n.value && t.value),
        nodeTemplate: n,
        onDrag: x,
        onDragEnd: f
    }
}, Ls = o => {
    const t = se(),
    e = w(() => t.state.application.openProjects),
    n = w(() => t.getters["spaces/pathToItemId"]),
    r = w(() => t.state.spaces.projectPath[o.projectId.value]),
    s = async({
        sourceItems: c,
        targetItem: g,
        isCopy: m = !1,
        onComplete: p
    }) => {
        const v = e.value.filter(d => c.includes(d?.origin?.itemId)),
        x = e.value.filter(d => {
            if (!d.origin)
                return !1;
            const {
                ancestorItemIds: u = []
            } = d.origin;
            return u.some(C => c.includes(C))
        });
        if (v.length || x.length) {
            const d = v.map(D => D.name),
            u = x.map(D => D.name),
            C = v.length && x.length ? `
`:"",I=m?"copy":"move";alert(`Following workflows are opened:

        ${d.map(D=>`• ${D}`).join(`
`)+C+u.map(D=>`• ${D}`).join(`
`)}
        
To $ {
    I
}
your selected items, they have to be closed first `),p(!1);return}const f=n.value(o.projectId.value,g),a=m&&g==="."?"AUTORENAME":await Dt.desktop.getNameCollisionStrategy({spaceProviderId:r.value?.spaceProviderId,spaceId:r.value?.spaceId,itemIds:c,destinationItemId:f});if(a==="CANCEL"){p(!1);return}try{await t.dispatch("spaces/moveOrCopyItems",{itemIds:c,projectId:o.projectId.value,destWorkflowGroupItemId:f,collisionStrategy:a,isCopy:m}),p(!0)}catch(d){const u=m?"copying":"moving";consola.error(` There was a problem $ {
    u
}
the items `,{error:d}),p(!1)}};return{onMoveItems:s,onDuplicateItems:async c=>{await s({sourceItems:c,targetItem:".",isCopy:!0,onComplete:()=>{}})}}},Gs={key:0,class:"mini-actions-wrapper"},Vs={class:"mini-actions"},Ns=z({__name:"SpaceExplorer",props:{projectId:{},mode:{default:"normal"}},emits:["changeSelection","itemChanged"],setup(o,{emit:t}){const e=o,n=$=>({[K.TypeEnum.WorkflowGroup]:Ue,[K.TypeEnum.Workflow]:jt,[K.TypeEnum.Component]:Bt,[K.TypeEnum.WorkflowTemplate]:zt,[K.TypeEnum.Data]:ze})[$.meta.type],r=se(),s=Mt(),i=Pt(),c=me(e,"projectId"),g=j([]),m=j({isActive:!1,items:[]}),p=w(()=>r.state.spaces.isLoadingContent),v=w(()=>r.state.spaces.activeRenamedItemId),x=w(()=>r.getters["spaces/getOpenedWorkflowItems"]),f=w(()=>r.getters["spaces/getOpenedFolderItems"]),l=w(()=>r.getters["spaces/getWorkflowGroupContent"]),a=w(()=>l.value(e.projectId)),d=w(()=>x.value(e.projectId)),u=w(()=>f.value(e.projectId)),C=w(()=>a.value.items.map($=>{const T=d.value.includes($.id)||u.value.includes($.id);return{...$,isOpen:T,isDirectory:$.type===K.TypeEnum.WorkflowGroup,isOpenableFile:$.type===K.TypeEnum.Workflow||$.type===K.TypeEnum.Component,canBeRenamed:!T,canBeDeleted:!u.value.includes($.id),meta:{type:$.type}}})),I=w(()=>{if(!a.value)return"";const{path:$}=a.value;return["home"].concat($.map(({name:T})=>T)).join("/")}),D=async()=>{e.projectId!==null&&await r.dispatch("spaces/fetchWorkflowGroupContent",{projectId:e.projectId})};Q(c,async()=>{await D()},{immediate:!0});const M=$=>{g.value=$,t("changeSelection",$)},_=async $=>{const{itemId:T}=await r.dispatch("spaces/changeDirectory",{projectId:e.projectId,pathId:$});t("itemChanged",T)},S=async({id:$})=>{await r.dispatch("spaces/openWorkflow",{projectId:e.projectId,workflowItemId:$,$router:s})},P=({itemId:$,newName:T})=>{r.dispatch("spaces/renameItem",{projectId:e.projectId,itemId:$,newName:T}).catch(()=>{i.show({type:"error",headline:"Rename failed",message:` Could not rename the selected item with the new name "${T}".Please, try
    again `})})},F=({items:$})=>{m.value.items=$,m.value.isActive=!0},N=async()=>{m.value.isActive=!1;const $=m.value.items.map(({id:T})=>T);await r.dispatch("spaces/deleteItems",{projectId:e.projectId,itemIds:$,$router:s})},{onMoveItems:L,onDuplicateItems:q}=Ls({projectId:c}),{shouldShowCustomPreview:Z,nodeTemplate:X,onDrag:J,onDragEnd:ee}=Ws({projectId:c});return($,T)=>(h(),E("div",{class:ce([$.mode,"space-explorer"])},[$.mode==="mini"?(h(),E("div",Gs,[k("div",Vs,[R(Un,{"project-id":c.value},null,8,["project-id"]),R(Es,{mode:"mini","project-id":c.value,"selected-item-ids":g.value},null,8,["project-id","selected-item-ids"])])])):G("",!0),R(Rs,{"active-workflow-group":a.value,onClick:_},null,8,["active-workflow-group"]),R(Rt,{class:"smart-loader content",loading:p.value,config:{initialDimensions:{height:"76px"},staggerStageCount:1}},{default:O(()=>[a.value?(h(),W(jo,{key:0,mode:$.mode,items:C.value,"is-root-folder":a.value.path.length===0,"full-path":I.value,"item-icon-renderer":n,"active-renamed-item-id":v.value,"dragging-animation-mode":"manual",onChangeDirectory:_,onChangeSelection:M,onOpenFile:S,onRenameFile:P,onDeleteItems:F,onMoveItems:y(L),onDrag:y(J),onDragend:y(ee)},At({contextMenu:O(({createRenameOption:re,createDeleteOption:ye,anchor:we,onItemClick:xe,isMultipleSelectionActive:Se,closeContextMenu:b})=>[R(Ln,{"create-rename-option":re,"create-delete-option":ye,anchor:we,"on-item-click":xe,"is-multiple-selection-active":Se,"close-context-menu":b,"project-id":c.value,"selected-item-ids":g.value,onDuplicateItems:y(q)},null,8,["create-rename-option","create-delete-option","anchor","on-item-click","is-multiple-selection-active","close-context-menu","project-id","selected-item-ids","onDuplicateItems"])]),_:2},[y(Z)?{name:"customDragPreview",fn:O(()=>[R(Tt,{type:y(X).type,"in-ports":y(X).inPorts,"out-ports":y(X).outPorts,icon:y(X).icon},null,8,["type","in-ports","out-ports","icon"])]),key:"0"}:void 0]),1032,["mode","items","is-root-folder","full-path","active-renamed-item-id","onMoveItems","onDrag","onDragend"])):G("",!0)]),_:1},8,["loading"]),R(Hs,{"is-active":m.value.isActive,items:m.value.items,"item-icon-renderer":n,onAccept:T[0]||(T[0]=re=>N()),onCancel:T[1]||(T[1]=re=>m.value={isActive:!1,items:[]})},null,8,["is-active","items"]),R(Ps)],2))}});const Ys=V(Ns,[["__scopeId","data-v-996abad9"]]);export{Ys as S,Es as a};
