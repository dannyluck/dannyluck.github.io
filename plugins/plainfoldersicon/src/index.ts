import { Devs } from "@utils/constants";
import definePlugin from "@utils/types";

export default definePlugin({
    name: "PlainFolderIcon",
    description: "Doesn't show the small guild icons in folders",
    authors: [Devs.botato],
    patches: [{
        find: ".expandedFolderIconWrapper",
        replacement: [{
            match: /\(\w\|\|\w\)&&(\(.{0,40}\(.{1,3}\.animated)/,
            replace: "$1",
        }]
    }]
});
