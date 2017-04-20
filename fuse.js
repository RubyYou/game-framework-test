const fb = require('fuse-box');

const FuseBox = fb.FuseBox;

const fuse = FuseBox.init({
    homeDir: "src",
    globals: { default: "build"},
    outFile: "build/bundle.js",
    sourceMaps: true,
    modulesFolder: "node_modules",
});

fuse.devServer("> app.ts");


