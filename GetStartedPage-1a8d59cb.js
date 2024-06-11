import {
    _ as p,
    o as s,
    c,
    r as E,
    k as W,
    W as U,
    l as $,
    n as K,
    a,
    t as f,
    C as H,
    b as d,
    d as m,
    w as l,
    j as u,
    e as Z,
    f as i,
    P as ee,
    B as te,
    m as R,
    p as V,
    q as M,
    A as j,
    S as N,
    s as L,
    F as w,
    h as x,
    g as h,
    u as X,
    v as q,
    L as oe
}
from "./index-6dc36896.js";
import {
    P as O,
    S as D,
    C as G
}
from "./computer-desktop-f6256e82.js";
const se = {
    props: {
        columns: {
            type: Number,
        default:
            9,
            validator: e => e >= 1 && e <= 12
        },
        color: {
            type: String,
        default:
            "transparent"
        }
    },
    computed: {
        styles() {
            const e = this.columns;
            return {
                "--grid-outbreaker-column-width": `calc((100% - (var(--grid-gap-width) * ${e - 1})) / ${e})`,
                "--outbreaker-background-color": this.color
            }
        }
    }
};
function ne(e, r, n, C, _, o) {
    return s(),
    c("div", {
        class: "outbreaker-wrapper",
        style: W(o.styles)
    }, [E(e.$slots, "default", {}, void 0, !0)], 4)
}
const z = p(se, [["render", ne], ["__scopeId", "data-v-ffa4a902"]]);
const ae = {
    components: {
        WorkflowIcon: U
    },
    props: {
        link: {
            type: Boolean,
        default:
            !1
        },
        href: {
            type: String,
        default:
            ""
        }
    },
    emits: ["click"],
    render() {
        const e = this.link ? "router-link" : "div",
        r = this.link ? {
            to: this.href
        }
         : {
            role: "button"
        },
        n = this.link ? {}
         : {
            onClick: () => this.$emit("click")
        };
        return $(e, {
            class: "card",
            ...r,
            ...n
        }, this.$slots.default())
    }
}, P = p(ae, [["__scopeId", "data-v-df9ea1b7"]]);
const ce = {
    props: {
        color: {
            type: String,
        default:
            "default",
            validator: e => ["default", "primary", "light"].includes(e)
        }
    }
};
function re(e, r, n, C, _, o) {
    return s(),
    c("div", {
        class: K(["card-header", {
                default:
                    n.color === "default",
                    primary: n.color === "primary",
                    light: n.color === "light"
                }
            ])
    }, [E(e.$slots, "default")], 2)
}
const J = p(ce, [["render", re], ["__scopeId", "data-v-0d3efbbd"]]);
const de = {
    props: {
        centered: {
            type: Boolean,
        default:
            !0
        },
        padded: {
            type: Boolean,
        default:
            !1
        }
    }
};
function ie(e, r, n, C, _, o) {
    return s(),
    c("div", {
        class: K(["card-content", {
                    centered: n.centered,
                    padded: n.padded
                }
            ])
    }, [E(e.$slots, "default", {}, void 0, !0)], 2)
}
const B = p(de, [["render", ie], ["__scopeId", "data-v-9d9f875d"]]), le = {
    xmlns: "http://www.w3.org/2000/svg",
    stroke: "#000",
    viewBox: "0 0 32 32"
}, _e = a("path", {
    fill: "none",
    "stroke-linejoin": "round",
    d: "M15.9 27.6 4.5 15.9c-2.6-2.6-2.6-6.9 0-9.5s6.9-2.6 9.5 0l1.9 2.1 2-2.1c2.6-2.6 6.9-2.6 9.5 0s2.6 6.9 0 9.5L15.9 27.6z"
}, null, -1), ue = [_e];
function pe(e, r) {
    return s(),
    c("svg", le, ue)
}
const me = {
    render: pe
};
const he = {
    props: {
        text: {
            type: String,
            required: !0
        }
    }
}, fe = {
    class: "avatar"
};
function Ce(e, r, n, C, _, o) {
    return s(),
    c("div", fe, f(n.text), 1)
}
const Q = p(he, [["render", Ce], ["__scopeId", "data-v-71d3f644"]]);
const ye = {
    props: {
        avatar: {
            type: String,
        default:
            null
        }
    },
    render() {
        const e = (this.$slots.icons || []).map(n => $(n.tag, {
                class: "icon"
            }, n.children)),
        r = this.avatar ? [...e, ...this.$slots.default?.() || [], $(Q, {
                    props: {
                        text: this.avatar
                    }
                })] : [...e, ...this.$slots.default?.() || []];
        return $("div", {
            class: "card-footer"
        }, r)
    }
}, ke = p(ye, [["__scopeId", "data-v-13b818a8"]]);
const ve = {
    components: {
        Avatar: Q,
        Card: P,
        CardHeader: J,
        CardContent: B,
        CardFooter: ke,
        WorkflowIcon: U,
        CubeIcon: H,
        PrivateSpaceIcon: O,
        HeartIcon: me,
        ServerIcon: D,
        ComputerDesktopIcon: G
    },
    props: {
        space: {
            type: Object,
            required: !0
        },
        isLocal: {
            type: Boolean,
        default:
            !1
        },
        isServer: {
            type: Boolean,
        default:
            !1
        }
    },
    emits: ["click"],
    computed: {
        icon() {
            return this.isLocal ? G : this.isServer ? D : this.space.private ? O : H
        },
        spaceDescription() {
            return this.isLocal ? "本地空间是计算机上用于存储和访问工作流程和工作流程生成的数据的文件夹." : this.space.description
        }
    }
}, ge = {
    key: 0
}, be = {
    key: 0
};
function Se(e, r, n, C, _, o) {
    const y = d("CardHeader"),
    k = d("CardContent"),
    v = d("CardFooter"),
    g = d("Card");
    return s(),
    m(g, {
        onClick: r[0] || (r[0] = S => e.$emit("click", n.space))
    }, {
    default:
        l(() => [u(y, {
                    color: n.isLocal ? "default" : "light"
                }, {
                default:
                    l(() => [(s(), m(Z(o.icon)))]),
                    _: 1
                }, 8, ["color"]), u(k, {
                    padded: "",
                    centered: !1,
                    class: "space-card-content"
                }, {
                default:
                    l(() => [n.isLocal ? i("", !0) : (s(), c("h5", ge, f(n.space.name), 1)), a("p", null, f(o.spaceDescription), 1)]),
                    _: 1
                }), u(v, {
                    class: "space-card-footer"
                }, {
                default:
                    l(() => [n.isLocal ? i("", !0) : (s(), c("span", be, f(n.space.owner), 1))]),
                    _: 1
                })]),
        _: 1
    })
}
const $e = p(ve, [["render", Se], ["__scopeId", "data-v-7b7bc71b"]]);
const we = {
    components: {
        PlusIcon: ee,
        GridOutbreaker: z,
        SpaceCard: $e,
        Button: te,
        Card: P,
        CardContent: B
    },
    data() {
        return {
            knimeColors: R,
            isConnectingToProvider: null
        }
    },
    computed: {
        ...V("spaces", ["spaceProviders", "spaceBrowser", "isLoadingProvider", "activeSpace"])
    },
    beforeCreate() {
        this.$store.state.spaces.projectPath[M] && this.$router.push({
            name: j.SpaceBrowsingPage
        })
    },
    async created() {
        await this.$store.dispatch("spaces/refreshSpaceProviders")
    },
    methods: {
        async onLogin(e) {
            this.isConnectingToProvider = e,
            await this.$store.dispatch("spaces/connectProvider", {
                spaceProviderId: e
            }),
            this.isConnectingToProvider = null
        },
        async onLogout(e) {
            await this.$store.dispatch("spaces/disconnectProvider", {
                spaceProviderId: e
            })
        },
        onSpaceCardClick({
            space: e,
            spaceProvider: r
        }) {
            this.$store.commit("spaces/setProjectPath", {
                projectId: M,
                value: {
                    spaceId: e.id,
                    spaceProviderId: r.id,
                    itemId: "root"
                }
            }),
            this.$router.push({
                name: j.SpaceBrowsingPage
            })
        },
        isLocalProvider(e) {
            return e.type === N.TypeEnum.LOCAL
        },
        isServerProvider(e) {
            return e.type === N.TypeEnum.SERVER
        },
        isCommunityHub(e) {
            return e.id === "My-KNIME-Hub"
        },
        communityHubLink(e) {
            const r = "https://hub.knime.com";
            return e?.user?.name ? `${r}/${e?.user?.name}` : r
        },
        shouldDisplayAvatar(e) {
            return e.connectionMode !== "AUTOMATIC" && e.connected
        },
        shouldDisplayLoginButton(e) {
            return e.connectionMode !== "AUTOMATIC" && !e.connected
        },
        shouldDisplayLogoutButton(e) {
            return e.connectionMode === "AUTHENTICATED" && e.connected
        },
        async createWorkflowLocally() {
            await this.$store.dispatch("spaces/fetchWorkflowGroupContent", {
                projectId: L
            }),
            this.$store.commit("spaces/setCreateWorkflowModalConfig", {
                isOpen: !0,
                projectId: L
            })
        }
    }
}, T = e => (X("data-v-cc17909d"), e = e(), q(), e), Ie = {
    class: "space-provider-name"
}, Le = {
    key: 0
}, xe = ["href"], Ee = {
    key: 0,
    class: "owner"
}, Pe = {
    class: "owner-name"
}, Be = {
    class: "connection-btn"
}, Te = {
    class: "cards"
}, Ae = {
    class: "icon-wrapper"
}, He = T(() => a("span", null, [h("创建工作流 "), a("br"), h("在本地空间.")], -1)), Me = {
    key: 1,
    class: "skeleton-card"
}, je = {
    key: 2,
    class: "skeleton-card"
}, Ne = {
    key: 0,
    class: "community-hub-text"
}, Oe = {
    key: 1,
    class: "skeletons"
}, De = T(() => a("div", {
            class: "skeleton-text"
        }, null, -1)), Ge = T(() => a("div", {
            class: "cards"
        }, [a("div", {
                    class: "skeleton-card"
                }), a("div", {
                    class: "skeleton-card"
                })], -1)), Fe = [De, Ge];
function We(e, r, n, C, _, o) {
    const y = d("Button"),
    k = d("SpaceCard"),
    v = d("PlusIcon"),
    g = d("CardContent"),
    S = d("Card"),
    I = d("GridOutbreaker");
    return s(),
    m(I, {
        color: _.knimeColors.Porcelain
    }, {
    default:
        l(() => [e.spaceProviders ? (s(!0), c(w, {
                        key: 0
                    }, x(e.spaceProviders, t => (s(), c("section", {
                                    key: t.id,
                                    class: "space-provider"
                                }, [a("div", Ie, [a("h2", null, [h(f(o.isCommunityHub(t) ? "KNIME Community Hub" : t.name) + " ", 1), o.isCommunityHub(t) ? (s(), c("span", Le, [h(" ("), a("a", {
                                                                        href: o.communityHubLink(t)
                                                                    }, "hub.knime.com", 8, xe), h(") ")])) : i("", !0)]), o.shouldDisplayAvatar(t) && t.user ? (s(), c("div", Ee, [a("span", Pe, f(t.user.name), 1)])) : i("", !0), a("div", Be, [o.shouldDisplayLogoutButton(t) ? (s(), m(y, {
                                                                key: 0,
                                                                "with-border": "",
                                                                compact: "",
                                                                disabled: e.isLoadingProvider,
                                                                class: "logout",
                                                                onClick: b => o.onLogout(t.id)
                                                            }, {
                                                            default:
                                                                l(() => [h(" Logout ")]),
                                                                _: 2
                                                            }, 1032, ["disabled", "onClick"])) : i("", !0), o.shouldDisplayLoginButton(t) ? (s(), m(y, {
                                                                key: 1,
                                                                primary: "",
                                                                compact: "",
                                                                disabled: e.isLoadingProvider,
                                                                class: "sign-in",
                                                                onClick: b => o.onLogin(t.id)
                                                            }, {
                                                            default:
                                                                l(() => [h(f(t.connectionMode === "AUTHENTICATED" ? "Sign in" : "Connect"), 1)]),
                                                                _: 2
                                                            }, 1032, ["disabled", "onClick"])) : i("", !0)])]), a("div", Te, [(s(!0), c(w, null, x(t.spaces, (b, A) => (s(), m(k, {
                                                                    key: A,
                                                                    space: b,
                                                                    "is-local": o.isLocalProvider(t),
                                                                    "is-server": o.isServerProvider(t),
                                                                    onClick: Y => o.onSpaceCardClick({
                                                                        space: Y,
                                                                        spaceProvider: t
                                                                    })
                                                                }, null, 8, ["space", "is-local", "is-server", "onClick"]))), 128)), o.isLocalProvider(t) ? (s(), m(S, {
                                                        key: 0,
                                                        class: "create-workflow-local",
                                                        onClick: o.createWorkflowLocally
                                                    }, {
                                                    default:
                                                        l(() => [u(g, {
                                                                    padded: ""
                                                                }, {
                                                                default:
                                                                    l(() => [a("div", Ae, [u(v)]), He]),
                                                                    _: 1
                                                                })]),
                                                        _: 1
                                                    }, 8, ["onClick"])) : i("", !0), !o.isLocalProvider(t) && _.isConnectingToProvider === t.id ? (s(), c("div", Me)) : i("", !0), !o.isLocalProvider(t) && _.isConnectingToProvider === t.id ? (s(), c("div", je)) : i("", !0)]), !t.spaces && o.isCommunityHub(t) && !e.isLoadingProvider ? (s(), c("div", Ne, " Connect to the KNIME Community Hub to find workflows, nodes and components, and collaborate in spaces. ")) : i("", !0)]))), 128)) : i("", !0), e.isLoadingProvider && !_.isConnectingToProvider ? (s(), c("section", Oe, Fe)) : i("", !0)]),
        _: 1
    }, 8, ["color"])
}
const Ue = p(we, [["render", We], ["__scopeId", "data-v-cc17909d"]]);
const Ke = 3, F = 3, Re = {
    components: {
        SpaceSelectionPage: Ue,
        LinkExternalIcon: oe,
        GridOutbreaker: z,
        Card: P,
        CardHeader: J,
        CardContent: B
    },
    data() {
        return {
            knimeColors: R
        }
    },
    computed: {
        ...V("application", ["exampleProjects"]),
        displayedExampleProjects() {
            return this.exampleProjects.slice(0, Ke)
        },
        hasExamples() {
            return this.displayedExampleProjects.length > 0
        },
        gridColumns() {
            const {
                length: e
            } = this.displayedExampleProjects;
            return e < F ? 2 : F
        }
    },
    methods: {
        async onExampleClick({
            origin: e
        }) {
            await this.$store.dispatch("spaces/openWorkflow", {
                projectId: L,
                workflowItemId: e.itemId,
                $router: this.$router
            })
        }
    }
}, Ve = e => (X("data-v-9e978bcb"), e = e(), q(), e), Xe = {
    key: 0,
    class: "examples"
}, qe = Ve(() => a("h2", null, "Examples", -1)), ze = {
    class: "example-title"
}, Je = ["src", "alt"], Qe = {
    class: "grid-container more-workflows"
}, Ye = {
    href: "https://knime.com/modern-ui-hub-home-link?src=knimeappmodernui"
};
function Ze(e, r, n, C, _, o) {
    const y = d("CardHeader"),
    k = d("CardContent"),
    v = d("Card"),
    g = d("LinkExternalIcon"),
    S = d("GridOutbreaker"),
    I = d("SpaceSelectionPage");
    return s(),
    c(w, null, [u(S, {
                color: _.knimeColors.SilverSandSemi
            }, {
            default:
                l(() => [o.hasExamples ? (s(), c("section", Xe, [qe, a("div", {
                                        class: "cards",
                                        style: W(`--grid-columns: ${o.gridColumns}`)
                                    }, [(s(!0), c(w, null, x(o.displayedExampleProjects, (t, b) => (s(), m(v, {
                                                                key: `example-${b}`,
                                                                class: "example-card",
                                                                onClick: A => o.onExampleClick(t)
                                                            }, {
                                                            default:
                                                                l(() => [u(y, {
                                                                            title: t.name
                                                                        }, {
                                                                        default:
                                                                            l(() => [a("span", ze, f(t.name), 1)]),
                                                                            _: 2
                                                                        }, 1032, ["title"]), u(k, {
                                                                            padded: ""
                                                                        }, {
                                                                        default:
                                                                            l(() => [a("img", {
                                                                                        class: "card-img",
                                                                                        src: `data:image/svg+xml;base64,${t.svg}`,
                                                                                        alt: `Preview image of ${t.name}`
                                                                                    }, null, 8, Je)]),
                                                                            _: 2
                                                                        }, 1024)]),
                                                                _: 2
                                                            }, 1032, ["onClick"]))), 128))], 4), a("div", Qe, [a("a", Ye, [u(g), h("Find more resources on the KNIME Community Hub ")])])])) : i("", !0)]),
                _: 1
            }, 8, ["color"]), u(I)], 64)
}
const ot = p(Re, [["render", Ze], ["__scopeId", "data-v-9e978bcb"]]);
export {
    ot as default
};
