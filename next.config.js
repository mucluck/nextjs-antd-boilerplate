const withLess = require("@zeit/next-less");

module.exports = withLess({
    webpack: (config, options) => {
        config.module.rules.push({
            test: /\.less$/,
            use: [
                {
                    loader: "less-loader", // compiles Less to CSS
                    options: {
                        modifyVars: {
                            "primary-color": "#317A4F",
                            "grid-columns": 12,
                            "screen-xxl": "1200",
                            "layout-header-padding": "0 0",
                            "layout-header-height": "159px"

                            // or
                            // hack: `true; @import "./styles/themes/dark.less";` // Override with less file
                        },
                        javascriptEnabled: true
                    }
                }
            ]
        });

        return config;
    }
});
