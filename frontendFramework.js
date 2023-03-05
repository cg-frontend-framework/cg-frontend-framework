
// Load the main CSS file
const head  = document.getElementsByTagName('head')[0];
const link  = document.createElement('link');
link.rel  = 'stylesheet';
link.type = 'text/css';
link.href = '../cg-frontend-framework/frontendFramework.css';
link.media = 'all';
head.appendChild(link);


/**
  * @class
  * Initialize frontend framework in your Project.
  * 
  * @param {string} path - Path to the "frontend.config.js"-file in your Project.
  * 
  * @example
  *
  * ```js
  * const frontendFramework = new frontendFramework("../../../my-project/frontend.config.js");
  * ```
  * 
  * 
  */
class frontendFramework {
    constructor(path) {
        const configPath = path;
        const scriptTag = document.createElement("script");
        $("document.body").setAtribute("src", this.configPath);
        $("document.body").setAtribute("type", "module");
        return configPath;
    }

}

const primary = Color.primary();

$("document.body").css("backgroundColor", primary);