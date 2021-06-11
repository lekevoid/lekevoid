const routes = [
	{
		path: "/",
		component: () => import("layouts/MainLayout.vue"),
		children: [
			{ path: "", name: "Work", component: () => import("pages/Index.vue"), meta: { slug: "work", showInNav: true, navOrder: 1 } },
			{ path: "/personal", name: "Personal", component: () => import("pages/Personal.vue"), meta: { slug: "personal", showInNav: true, navOrder: 2 } },
			{ path: "/projects", name: "Projects", component: () => import("pages/Projects.vue"), meta: { slug: "projects", showInNav: false } },
			{ path: "/projects/:project", name: "SingleProject", component: () => import("pages/Projects.vue"), meta: { slug: "projects", showInNav: false } },
		],
	},

	// Always leave this as last one,
	// but you can also remove it
	{
		path: "*",
		component: () => import("pages/Error404.vue"),
	},
];

export default routes;
