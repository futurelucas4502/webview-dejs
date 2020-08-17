// Importing the webview library
import * as webview from "https://deno.land/x/webview/mod.ts";
import * as dejs from "https://deno.land/x/dejs/mod.ts";
// Creating an HTML page

let output = await dejs.renderFile(`${Deno.cwd()}/views/users.ejs`, {
  title: "world",
});

let html = await Deno.copy(output, Deno.stdout);

// Creating and configuring the webview
const app = new webview.WebView({
  title: "Wow a sad dinosaur app!!",
  url: "data:text/html," + html,
  width: 800,
  height: 600,
  resizable: true,
  debug: true,
  frameless: false,
});
// Running the webview
app.run();




// Creating and configuring the webview
const app2 = new webview.WebView({
  title: "Wow a sad dinosaur app!!",
  url: "data:text/html," + output,
  width: 800,
  height: 600,
  resizable: true,
  debug: true,
  frameless: false,
});
// Running the webview
app2.run();
