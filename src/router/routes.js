const routes = [
	{
		path: "/",
		name: "LeKevoid",
		component: () => import("layouts/MainLayout.vue"),
		children: [
			{ path: "", name: "Work", component: () => import("pages/Index.vue") },
			{ path: "/personal", name: "Personal", component: () => import("pages/Personal.vue") },
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
