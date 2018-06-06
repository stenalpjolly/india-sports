let fs = require("fs")


const path = "./data_plugins";
let data_plugins = fs.readdirSync(path);

data_plugins.map(pluginName => {
    let plugin = require(path + "/" + pluginName);
    plugin.loadData();
});