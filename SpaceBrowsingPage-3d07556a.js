import {
    o as a,
    c as p,
    a as t,
    x as v,
    B as S,
    q as s,
    p as h,
    y as f,
    C as I,
    A as P,
    _ as g,
    b as r,
    j as c,
    w as n,
    d as b,
    e as w
}
from "./index-6dc36896.js";
import {
    C as i,
    S as B,
    P as k
}
from "./computer-desktop-f6256e82.js";
import {
    P as C
}
from "./PageHeader-a42ebd51.js";
import {
    S as j,
    a as A
}
from "./SpaceExplorer-8f8b6a5c.js";
import "./trash-c1de9387.js";
import "./pencil-ca93310a.js";
import "./house-1d05c0b5.js";
const E = {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    stroke: "#000",
    "stroke-linejoin": "round",
    viewBox: "0 0 32 32"
}, $ = t("path", {
    d: "m14.9 27-11-11 11-11m-11 11h24.2"
}, null, -1), x = [$];
function L(e, o) {
    return a(),
    p("svg", E, x)
}
const y = {
    render: L
}, H = v({
    components: {
        ArrowLeftIcon: y,
        SpaceExplorer: j,
        SpaceExplorerActions: A,
        ComputerDesktopIcon: i,
        PageHeader: C,
        Button: S
    },
    setup() {
        return {
            globalSpaceBrowserProjectId: s
        }
    },
    data() {
        return {
            selectedItemIds: []
        }
    },
    computed: {
        ...h("spaces", ["spaceProviders"]),
        ...f("spaces", ["getSpaceInfo", "hasActiveHubSession", "isServerProvider", "isLocalProvider"]),
        activeSpaceInfo() {
            return this.getSpaceInfo(s)
        },
        spaceInfo() {
            if (this.isLocalProvider(s))
                return {
                    title: "本地空间",
                    subtitle: "本地空间",
                    icon: i
                };
            const e = this.activeSpaceInfo.name || "";
            if (this.isServerProvider(s))
                return {
                    title: e,
                    subtitle: "Server",
                    icon: B
                };
            const o = this.activeSpaceInfo.private;
            return {
                title: e,
                subtitle: o ? "Private space" : "Public space",
                icon: o ? k : I
            }
        }
    },
    methods: {
        onBackButtonClick() {
            this.$store.commit("spaces/removeProjectPath", s),
            this.$router.push({
                name: P.EntryPage.GetStartedPage
            })
        }
    }
});
const D = {
    ref: "main"
}, G = {
    title: "Back"
}, N = {
    class: "toolbar-wrapper"
}, V = {
    class: "grid-container"
}, q = {
    class: "grid-item-12"
}, O = {
    class: "toolbar"
}, R = {
    class: "space-explorer-wrapper"
}, T = {
    class: "grid-container"
}, U = {
    class: "grid-item-12"
};
function Y(e, o, z, F, J, K) {
    const l = r("ArrowLeftIcon"),
    d = r("PageHeader"),
    _ = r("SpaceExplorerActions"),
    m = r("SpaceExplorer");
    return a(),
    p("main", D, [c(d, {
                title: e.spaceInfo.title,
                subtitle: e.spaceInfo.subtitle
            }, {
                button: n(() => [t("span", G, [c(l, {
                                    class: "back-button",
                                    onClick: e.onBackButtonClick
                                }, null, 8, ["onClick"])])]),
                icon: n(() => [(a(), b(w(e.spaceInfo.icon)))]),
                _: 1
            }, 8, ["title", "subtitle"]), t("section", N, [t("div", V, [t("div", q, [t("div", O, [c(_, {
                                                "project-id": e.globalSpaceBrowserProjectId,
                                                "selected-item-ids": e.selectedItemIds
                                            }, null, 8, ["project-id", "selected-item-ids"])])])])]), t("section", R, [t("div", T, [t("div", U, [c(m, {
                                        "project-id": e.globalSpaceBrowserProjectId,
                                        onChangeSelection: o[0] || (o[0] = u => e.selectedItemIds = u)
                                    }, null, 8, ["project-id"])])])])], 512)
}
const oe = g(H, [["render", Y], ["__scopeId", "data-v-5dac7e56"]]);
export {
    oe as default
};
