import * as iniSource from "ini";

export const ini= {
    ...iniSource,
    parseStripWhitespace: (
        initString => makeSafeConfig(iniSource.parse(initString))
    ) as typeof iniSource['parse']
};

function makeSafeConfig(config: Object): Object {

    for (let key of Object.keys(config))
        switch (typeof config[key]) {
            case "string":
                config[key] = config[key].replace(/[\ \t]+$/, "");
                break;
            case "object":
                makeSafeConfig(config[key]);
                break;
        }

    return config;

}