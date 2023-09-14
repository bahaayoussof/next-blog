const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");
module.exports = phase => {
	webpack: (config, { isServer }) => {
		if (!isServer) {
			config.resolve.fallback.fs = false;
		}
		return config;
	};

	if (phase === PHASE_DEVELOPMENT_SERVER)
		return {
			env: {
				mongodb_username: "zoka",
				mongodb_password: "H2OHXDKOFP18jfDg",
				mongodb_clustername: "cluster0",
				mongodb_database: "next-blog",
			},
		};

	return {
		env: {
			mongodb_username: "zoka",
			mongodb_password: "H2OHXDKOFP18jfDg",
			mongodb_clustername: "cluster0",
			mongodb_database: "next-blog",
		},
	};
};
