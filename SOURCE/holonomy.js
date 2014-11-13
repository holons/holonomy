#! /usr/bin/env node
/*
 *
 * http://not.yet.but.soon
 *
 * v0.0.0 - PLANNING
 *
 * http://www.patorjk.com/software/taag/#p=display&h=0&v=0&f=Banner
 *
 * Copyright (c) 2014 Alexander Praetorius
 * Licensed under the C0 license.
 */
/*:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
  _TABLE_OF_CONTENT

                         #######  #######   #####
                            #     #     #  #     #
                            #     #     #  #
                            #     #     #  #
                            #     #     #  #
                            #     #     #  #     #
                            #     #######   #####
  :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
  _TABLE_OF_CONTENT   - Table of Content
  _DIRECTORY          - Files & Folder Structure
  _INITIALIZE         - Initialize Program
  _HOLONOMY           - Create Holonomy
  _CLI_DESIGN         - Command Line Interface Design
  _CLI_SPEC           - Command Line Interface Specification
  _FILE_FORMAT        - Data File Format
:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::*/
// @TODO: put into closure and provide (window, undefined, ...) as necessary
'use strict';

/*:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
  _DIRECTORY

       #####   #  #####   ######   ####   #####   ####   #####   #   #
       #    #  #  #    #  #       #    #    #    #    #  #    #   # #
       #    #  #  #    #  #####   #         #    #    #  #    #    #
       #    #  #  #####   #       #         #    #    #  #####     #
       #    #  #  #   #   #       #    #    #    #    #  #   #     #
       #####   #  #    #  ######   ####     #     ####   #    #    #

  :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
  ### ROADMAP

// IDEAS:
//  - individual "asset pipeline per data item" => extensions/plugins are always local!, otherwise look at "stack" & "streams"

// <name>/
//   #.git/                      # git stuff
//   #node_modules/              # dependencies
//   #out/                       # build FrontEnd a.k.a public/
//   #backup/                    # backup snapshot
//   src/
                        // Source folder is where you can put your content.
                        // Files or folders whose names are prefixed with _ (underscore) and hidden files will be ignored
                        // except _posts folder. Markdown and HTML files will be processed and put into public folder,
                        // while other files will simply be copied.
//     data/   //ex. documents/  # source a.k.a typed content for rendering - use templates
//            drafts/
//       e.g. posts/             // TYPE
//             post1.html
//             EXAMPLE_CONTENT.md
//       e.g. pages/             // ANOTHER TYPE  ... (one type label is MAIN, others are optional based on duck typing)
//             home/
//               image1.jpg      // SUPPORT CONTENT (css/images/fonts/videos/music/...)
//               index.md        // MAIN CONTENT (text/...)
//             post2/content.md
//       e.g. ...
//     widgets/                  # use node_modules a.k.a scaffolds a.k.a layout & partials (could be from node_modules itself)
//                               # (=LAYOUTS/WIDGET_CONTRACTS) When you create a new post, Hexo will build the file based on the scaffold.
//       draft.md
//       page.md
//       post.md                 === default "holon new"
//       photo.md
                  // e.g.
                  // [photo.md]        // {{ variablename }} - see FRONT MATTER for options
                  //   layout: {{ layout }}
                  //   title: {{ title }}
                  //   date: {{ date }}
                  //   ---
//       /widget1
//         /assets
//         widget1.js
//         widget1.css
//         widget1.html          # or whichever template is used
//     roots/              # a.k.a themes
                        // Hexo will generate files based on the theme.
                        // git clone <repository> themes/<theme-name>
//       default/
//         .holon          # see holon's package.json - here alternative values can be specified to use for certain documents
//         default.html    # LAYOUT file <html>...<div class="CONTANT"></div>...</html> used by admin and default snapshot and browser widget
//                         # allows preview, but no write access, because it opens "just in browser"
//                         # default layout allows to switch to all layouts under roots "on the fly"
//                         # admin view allows to switch "widget" for a document "on the fly"
//   .gitignore
//   package.json                # use for settings.js or .settings instead of docpad.coffee or _config.yml
//                               # http://hexo.io/docs/configuration.html
//   README.md                   # explain project mechanics - thus, THIS FILE !!! :-)
//
//
// API - METHODS
// ########
// create something like "http://hexo.io/docs/events.html"
// to augment everything that is done through COMMANDS
//

site
\u251c\u2500\u2500 index.html
\u251c\u2500\u2500 about.json
\u251c\u2500\u2500 about
|   \u251c\u2500\u2500 index.html
|   \u251c\u2500\u2500 index.json
|   \u2514\u2500\u2500 contact.html
\u2514\u2500\u2500 terms.html

==>

site
\u251c\u2500\u2500 index.html
\u251c\u2500\u2500 about
|   \u251c\u2500\u2500 index.html
|   \u2514\u2500\u2500 contact
|       \u2514\u2500\u2500 index.html
\u2514\u2500\u2500 terms
    \u2514\u2500\u2500 index.html

:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::*/











/*:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
  _INITIALIZE

         #  #    #  #  #####  #    ##    #       #  ######  ######
         #  ##   #  #    #    #   #  #   #       #      #   #
         #  # #  #  #    #    #  #    #  #       #     #    #####
         #  #  # #  #    #    #  ######  #       #    #     #
         #  #   ##  #    #    #  #    #  #       #   #      #
         #  #    #  #    #    #  #    #  ######  #  ######  ######

:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::*/
var
  exit      = require('exit'),
  fs        = require('graceful-fs'), // https://github.com/isaacs/node-graceful-fs
  subarg    = require('subarg'), // https://github.com/substack/subarg, https://github.com/substack/minimist
  path      = require('path'),
  bulk      = require('bulk-require'),
  pkg       = require(path.join(__dirname,'../package.json')),
  version   = {
    api       : pkg.version, // maybe can divert from cli if methods provided?
    cli       : pkg.version,
    project   : null
  },
  project   = (function meta (projectPath) {
    // @TODO: maybe in order to use "holonomy" go to the "root directory"
    // of the project that contains package.json with "holonomy" attribute
    var settings  = fs.existsSync(projectPath) && require(projectPath);
    if (settings.holonomy) {
      version.project = settings.version;
    } else {
      var errormessage = 'Project is not a holonomy - ' + projectPath;
      console.log(errormessage);
      exit(1);
    }
    return settings.holonomy;
  })(path.join(process.cwd(), 'package.json'))
  // https://www.npmjs.org/doc/misc/npm-scripts.html - consider adding defaults to package.json in postInstall Hook
  // STYLING
  // wordwrap
  // @TODO: camelize          : camelize - https://github.com/substack/camelize
  // @TODO: globbing          : glob
  // @TODO: colors            : chalk, colors
  // @TODO: msee              : markdown terminal comments
  // ...
  // @TODO: um & others       : bash tab completion - https://github.com/Jonovono/um, https://github.com/hij1nx/complete, https://github.com/mklabs/node-tabtab

  // OTHER FEATURES:
  // - stack/middleware
  // - daemon
;
/*:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
  REQUIRE CALL -> HOLONOMY
:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::*/
module.exports = initialize;
function initialize (args) {
  // if args is string, ten split(' ');
  // check if argv is array of command and params or a string representing them
  // holonomy('snapshot aboutpage --public');
  // holonomy('snapshot', 'aboutpage', '--public');
  // holonomy('snapshot', 'aboutpage --public');
  console.info('holonomy from require()');
  var argv = subarg(args); // CHECK: https://github.com/substack/minimist#methods
  holonomy(argv);
}
/*:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
  COMMAND LINE CALL -> HOLONOMY
:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::*/
if (module === require.main) {
  console.info('holonomy from command line');
  var argv = subarg(process.argv.slice(2)); // CHECK: https://github.com/substack/minimist#methods
  holonomy(argv);
}
/*:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
  _HOLONOMY

       #    #   ####   #        ####   #    #   ####   #    #  #   #
       #    #  #    #  #       #    #  ##   #  #    #  ##  ##   # #
       ######  #    #  #       #    #  # #  #  #    #  # ## #    #
       #    #  #    #  #       #    #  #  # #  #    #  #    #    #
       #    #  #    #  #       #    #  #   ##  #    #  #    #    #
       #    #   ####   ######   ####   #    #   ####   #    #    #

:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::*/
function holonomy (argv) {
  //   var userArgs = process.argv;
  //   var searchParam = userArgs[2];
  //   if (userArgs.indexOf('-h') !== -1 || userArgs.indexOf('--help') !== -1 || searchParam === undefined) {
  //       return console.log('cli help');
  //   }
  //   if (userArgs.indexOf('-v') !== -1 || userArgs.indexOf('--version') !== -1) {
  //       return console.log(require('./package').version);
  //   }
  var
    command = argv._.shift(),
    source  = path.join('.',project.source),
    // source  = path.join(process.cwd(),project.source),
    data    = bulk(source, ['**/*.js']),
    finder  = require('findit')(source),  // @TODO: finder or bulk!
    widgets = Object.keys(data)
  ;
/*:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
  _CLI_DESIGN

        ####   #       #      #####   ######   ####   #   ####   #    #
       #    #  #       #      #    #  #       #       #  #    #  ##   #
       #       #       #      #    #  #####    ####   #  #       # #  #
       #       #       #      #    #  #            #  #  #  ###  #  # #
       #    #  #       #      #    #  #       #    #  #  #    #  #   ##
        ####   ######  #      #####   ######   ####   #   ####   #    #

  :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
  ### ROADMAP:

    CONFIG
    - SANITZIER (parseInt, camelize,...)
    PROMPT:
    - password
    - one line
    - multiline
    - choose
    - confirm
    COMMANDS:
    - help
    - version
    ACTIONS:
    - ...
:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::*/
  require('clilib')
    .DESCRIPTION()
    //.alias()  // only for inner commands
    .EXAMPLE()
    // .EXAMPLE() // more examples
    .USAGE()    // FORMAT: ~ $ name command options  -> action - maybe automatically generated
    .DEFAULTS()
    // complain if stuff/arguments are given, which are not defined
    .CHECK()    // validators/required/demand/typecheck/constraints/choices - function with comments
    .OPTION(/*
      #args (*=list, 1,..,n,...), METAVAR for use in USAGE
    */)
    // .OPTION() // more options
    // SUBCOMMANDS
    .COMMAND('help', function (help) {
      help
        .alias('h')
        .option('verbose', {
          alias       : 'v',
          description : 'description of verbose',
          default     : 0, // defaults or certain values can also be read from package.json
          check       : function isValid (values) {
            // {0,1,2,3}
            return /[0123]/.test(values[0]); // = demanded parameter
            return /undefined|[0123]/.test(values[0]); // = optional parameter
          }, // ... ... ... ... ... ... ... ... ... ...
          required    : false,
          type        : integer,    // boolean, string, ...
        })
        .check(function (options) {}) // options = { verbose: 1 }
        .example('holonomy help --verbose 2')
        // usage should be generated from the rest
        // .usage('holonomy help [--verbose=0]') // $0 = process.args[0] = "holonomy" or "node ./holonomy.js"
              // Usage: node ./divide.js -x [num] -y [num]
              //
              // Options:
              //   -x  [required]
              //   -y  [required]
              //
              // Missing required arguments: y
    })
    // .command () // more sub commands
  ;

///////////////////////////////////////////////////////////////////////////////
  console.log('==========================');
  console.log(argv);
  console.log('==========================');
  console.log(command);
  console.log('==========================');
  console.log(version);
  console.log(project);
  console.log('==========================');

  // @TODO: instead of "index.js", make "holonomy" its own globally installable module
  // @TODO: make it useful as library
  // @TODO: make it useful as cli
  // @TODO: make it useful as browserify trasform
  // @TODO: think about usefulness in browser context...
  // @TODO:#T01: use require('fs') to read json directory structure
require('clilib')
  //#T01
  console.log(data.diary.item1);

  finder
    .on('directory', function (dir, stat, stop) {
        var base = path.basename(dir);
        if (base === '.git' || base === 'node_modules') stop()
        else console.log(path.join(dir, '/'));
    })
    .on('file', function (file, stat) {
        console.log(file);
    })
    .on('link', function (link, stat) {
      console.log(link);
    })
  ;
}
// action    = {
//   init      : function initialize (folder) {
//     return console.log("@TODO: Initialize folder: " + folder);
//   },
//   snapshot  : function snapshot () {
//     return console.log("@TODO: Creating snapshot...");
//   },
//   help      : function help () {
//     return fs.createReadStream(__dirname + '/usage.txt')
//       .pipe(process.stdout)
//       .on('close', function () { exit(1) });
//   }
// }
//   var result = isAction(command) ? action[command]() : action['help']();
//   // HELPERS
//   function isAction (command) {
//     // (command === 'help' || argv.help) { // @TODO: check for help with "nested commands" too
//     return typeof action[command] === 'function';
//   }
/*:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
  _CLI_SPEC

            ####   #       #       ####   #####   ######   ####
           #    #  #       #      #       #    #  #       #    #
           #       #       #       ####   #    #  #####   #
           #       #       #           #  #####   #       #
           #    #  #       #      #    #  #       #       #    #
            ####   ######  #       ####   #       ######   ####

  :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
  ### ROADMAP:

// holon             // == holon help
      // executing commands writes description + <a href='..'>more infos</a> to terminal to open everything in MARKDOWN on GITHUB
// holon help        // this + link to documentation of holon and project
// holon init [folder]        // generates structure above and asks questions (UBER-NGEN) (asks for deletion of content of current directory)
                              // Initializes a website. If folder isnât defined, Hexo will set up the website in the current directory.
// holon snapshot    // generates static snapshot to 'out/' directory + backup of current version to 'revision' folder
//                   // changes made in a snapshot are not persisted (indicate visually)
//                   // good error reporting if stuff is missing (e.g. no widget for a certain document in package.json)
//                   // SNAPSHOT generates the same default holon admin interface, where ALL DATA needs to be in "sitemap"
//                   // --view // be able to choose layouts based on alternatives in package.json array and DUCK TYPING options
//                   // be able to also choose for certain "document types" the concrete nodes, e.g. pages/home --customize-widgets (prompting)
//                   // offer to SAVE the chosen set as a new layoutname
//                   // --public (=default) [--all] [--drafts] to define which documents to export into snapshot
//                   // --gpg create snapshot for using "holon serve" API encrypted with gpg and to SIGN stuff
// holon layout / perspective / view    // lists all layouts and eventual tokens or gpg keys associated with them, which could be used by "holon serve"
// holon identity    // create a local user profile with gpg keys to be used with "holon serve"



// holon ss
// holon snapshot <layoutname>
//                   // a certain layout only shows "sub part" of data and "holon serve" only accepts changes from that snapshot,
//                   // thus generates a special TOKEN shipped with the snapshot with which it tries to register, which can be revoked
//                   // generates a snapshot with layoutname as ENTRYPOINT - doesnt need to include ALL DATA (can still be hooked to holon serve)
                                  // Option	Description
                                  // -d, --deploy	Deploy after generate done
                                  // -w, --watch	Watch file changes
                                    // Hexo doesnt watch for configuration file changes.
                                    // You have to restart Hexo to make the new configurations take effects.
                                  // Option	Description
                                  // -o, --output	Output destination
// holon clean           // Cleans the levelDB cache file (db.json) and generated files (public).
// hexo routes           // lists all routes
// hexo version          // Displays version information

// holon admin [--choose] // browserSync serves project live and allows for live manipulations (does 'holon snapshot' if necessary)
//                   // which will cause new 'revisions' for manipulated data + opens it in browser
//                   // and uses holon admin interface (which also exists as a browser plugin - plugin needs 'holon admin' or 'holon serve + auth' to be used with)
// // holon serve       // creates a server, which receives updates from a used 'holon build'
//                   // holon serve pulls/pushes all the ACCESS TOKENS that were generated for snapshots
//                   // real time syncs data, but not view (no browsersync or livereload)
//                   // but notifies owner via email and can configure what users have which rights (mail includes link to "pull request")
                                  // // Option	Description
                                  // // -p, --port	Override default port (=4000), can also be set in _config.yml
                                  // // -s, --static	Only serve static files from public/ without --watch (usually in production)
                                  // // In static mode, only files in public folder will be served and file watching is disabled. You have to run hexo generate before starting the server. Usually used in production.
                                  // // -i <ip> // for custom ip to run under DEFAULT: 0.0.0.0
                                  // // -d, --drafts	Serve drafts as normal posts. https://github.com/expressjs/morgan
                                  // // in _config.yml { logger: true, logger_format: default }
                                  // // -l, --log	Enable logger. Override logger format.
                                  //   // e.g. hexo server -l default

                                  // LOGGING
                                  //   // PREDEFINED FORMATS
                                  //     Format	Description
                                  //     default	:remote-addr - - [:date] ":method :url HTTP/:http-version" :status :res[content-length] ":referrer" ":user-agent"
                                  //     short	:remote-addr - :method :url HTTP/:http-version :status :res[content-length] - :response-time ms
                                  //     tiny	:method :url :status :res[content-length] - :response-time ms
                                  //     dev	concise output colored by response status for development use
                                  //
                                  //     Token	Description
                                  //     :req[header]	Request header (e.g. :req[Accept])
                                  //     :res[header]	Response header (e.g. :res[Content-Length])
                                  //     :http-version	HTTP version
                                  //     :response-time	Response time
                                  //     :remote-addr	Remote IP address
                                  //     :date	Request date
                                  //     :method	Method
                                  //     :url	Request URL
                                  //     :referrer	Referrer
                                  //     :user-agent	User agent
                                  //     :status	Status

//

//
// // holon open        // opens current snapshot in browser (syncing requires login) - pulls updates on demand

// CLI DATA
// cli data [FILTERNAME] [FILTERTYPE]   // lists all data items which match the filter
// cli data [new|show/change/delete] "NAME" [--draft|--publish] // --publish --draft to change visibility
  // if not name, then lists and asks to choose
// cli data new [TYPE] "ITEM NAME"  [--draft|--publish]
// cli data change "ITEM NAME"  [--draft|--publish] [--use terminal|browser|texteditor]
// cli data show "ITEM NAME" [--use terminal|browser|texteditor]
// cli data delete "ITEM NAME"
            // [show] lists info about one document
            // [change] asks for 'terminal dialog', 'browser', 'text editor'
            // [new]
                     // lists all 'document types' (based on widget signature) and allows creation of new data entry
                     // goes through a list of questions to fill out
                     // + opens default editor OR holon admin with that new entry opened by default!
                     // --draft (makes the new document private)
                        // Creates a new article. If layout isnt defined, it will equal the "default_layout" setting in "_config.yml"
                        // If the "title" is more than one word, wrap it with "quotation marks"
                        // => Hexo has 2 default layouts: "post" and "page" under scaffolds/
                        // ==> New articles created with other layouts will be saved in source/_posts by default.

                      // // Hexo will find the scaffold file named photo in the scaffolds folder. If the scaffold not exists, use the post scaffold instead.
                      // hexo new post "post title"        // => "source/_posts/post-title.md" + (with asset folders enabled) "source/_posts/post-title/..." for assets of that post
                      // hexo new page "page title"        // => "source/page-title/index.md"
                      // hexo new draft "draft title"      // => "source/_drafts/draft-title.md"
                      // hexo new "foobar"                 // => "source/_posts/foobar.md"
                      // hexo new doesnotexist "barbaaz"   // => "source/_posts/barbaaz.md"
                      //                               // created filename is subject to "_config.yml"
                      //                               // OPTIONS
                      //                               Variable	   Description
                      //                                 :title	   Escaped title (lower case and replace spaces with dash)
                      //                                 :year	     Created year (4-digit)
                      //                                 :month	   Created month (2-digit)
                      //                                 :i_month	 Created month (Without leading zeros)
                      //                                 :day	     Created day (2-digit)
                      //                                 :i_day	   Created day (Without leading zeros)
                      //
                      // content.md files have front matter
                      //   "layout: false" // => puts out raw content without processing
                      //   hexo new xy     // => puts out raw content in hexo parent layout
                      //   hexo new post   // => uses post layout
                      //   PAGES and DRAFTS are not shown in BLOG STREAM

// WIDGET === HOLON
// CLI WIDGET
            // // ADVANCED
            // holon npm update  // updates the widgets of the project and itself
            // holon npm install       // adds missing holon-widgets to package.json dependencies and runs "npm install"
            // holon npm install xyz   // tries to run "npm install xyz.holon --save"
            // holon npm uninstall xyz // uninstalls, but asks if the widget is used, what to do with the nodes and refuses to uninstall if no alternative is provided
            //                         // which depends on ducktyping of documents and whether installed widget alternatives can be found
            // holon npm query   // finds all npm packages suffixed with ".holon" + prints url https://www.npmjs.org/browse/keyword/holon
            //                   // can be given a query and or keywords like: "holon npm query asdf key:test"
            //                   // --a --b --c ...where a, b, c... are stuff like "most used", 'most stars', ...
            //                   // filtered, sorted, etc.. by ... see baluptons queryEngine for inspiration
// cli widget [FILTERNAME] [--drafts|--installed|--search] // lists all widgets, local, installed or from NPM which match the filter
                                                           // lists all widgets and asks if any of them should be published to NPM using the ".holon" suffix in its NAME + adds KEYWORD to it
                                                           //
// cli widget [new|show/change/delete] "NAME"
// cli widget new "TYPE NAME"  [--draft|--publish|--install] // scaffolds a new HOLON in /WIDGETS which is local only or published to git & npm
                                                    // scaffolds a new widget to be published to github and used by others
                                                    // asks for CONTRACT via prompt dialog, then asks to open in browser+texteditor (use uber-ngen)
// cli widget change "TYPE NAME" [--publish]        // opens in text editor - status: publish become draft when it has unpublished changes
                                                    // -> SEMVER "breaking changes", when INTERFACE changes + asks for "PATCH" to move "old data" to "new data",
                                                    // which MATCHES the changed INTERFACE
// cli widget show "TYPE NAME" [--use terminal|browser|texteditor] // where terminal just shows "CONTRACT", browser LIVESTYLEGUIDE and texteditor SOURCECODE
// cli widget delete "ITEM NAME"                    // will not delete WIDGETS if DATA exists which cannot be shown otherwise

// holon deploy      // asks user for github/ftp/etc webspace to deploy snapshot to + asks for "holon serve" url to be used
                            // // hexo generate --deploy === hexo deploy --generate
                            // hexo deploy                       // deploys your website
                            // hexo d
                            //                                   // Option	Description
                            //                                   // --setup	Setup without deployment
                            //                                   // -g, --generate	Generate before deployment
                            //                                   // -m, --message	Customize commit message

// holon rollback    // lists all dates and further options (see below) ...option --snapshot generate a SNAPSHOT
// holon rollback [FILTERDATE] [--snapshot=LOCATION]
// holon rollback document <document> // lists all dates for that document + all possible affected documents by checking require statements
//                                    // asks yes/no + creates backup of current in "backup/" + layout backup.html
//                                    // + description of how to open backup.html and compare/mark repairs of the list above
//                                    // when finished hints at "holon rollback cleanup"
// holon rollback date <date>         // reverts to date, when given then only document, when given --snapshot, then only generates a snapshot without rollback
// holon rollback cleanup             // if /backup exists, asks to go with current and delete /backup or go with backup and UNDO's current
//

:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::*/




/*:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
  _FILE_FORMAT

  ######  #  #       ######      ######   ####   #####   #    #    ##    #####
  #       #  #       #           #       #    #  #    #  ##  ##   #  #     #
  #####   #  #       #####       #####   #    #  #    #  # ## #  #    #    #
  #       #  #       #           #       #    #  #####   #    #  ######    #
  #       #  #       #           #       #    #  #   #   #    #  #    #    #
  #       #  ######  ######      #        ####   #    #  #    #  #    #    #

  :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
  ### ROADMAP:

// FORMAT - docpad.coffee or settings.js or package.json
// ######
// [settings.js] // if possible: package.json
// module.exports = {
//   // ...
//   holon: {
//     // FILL IN STUFF HERE
//     widgets: [
//       // needs to include all folder and/or file names used in src/documents
//       // and map them to names, which are present in:
//       // src/widgets/[names]
//       // or missing ones need to be present in "package.json" under "dependencies"
//       // e.g.
//       "pages": "widget1",       // see src/widgets/widget1
//       "posts": "superpost",     // see dependencies, is in node_modules
//       "pages/home": "superpost" // overwrites more generic definitions
//       // this array is extended and entries can even be replaced,
//       // there should be NO FIELD given in "pages/home/index.md" itself,
//       // because duck typing should make suggestions for the package.json field
//       // based on properties and widget descriptions
//       // "field" specified in "home document" itself says something new
//       // or "field" specified here overwrites
//     ]
//   },
//   dependencies: {
//     "superpost": "0.2.4"
//   }
//   // ...
// };
//
//
//
//
// FORMAT - content.md
// ######
// "The more structured a content, the more data in the
// <attributes> area of a document -> there is need for widgets for
// every possible type of content. a generic type which just shows <CONTENT>
// and specialized widgets which only use fields and no generic <CONTENT> at all,
// thus becomes e.g. pure yaml or json..."
// --- # metadata
// title: titleToReferenceThisMetaDataInTheFuture
// date: ..
// ---
// <CONTENT>
//
//
//
// COMMANDS
// ########:
// docpad run                a.k.a blacksmith /path/to/project
//
// e.g. content.md or similar
// 1. input src/[document] // this thing: pre-selected set of data ready for presentation through "WIDGET"
// // goal1: classify "real world experience"
//             ==> refactor dependencies
// // goal2: over time, refactor content into fields
//             THINK:
//             Content should be unique in each document.
//             if content in documents is repetitive, its a strong hint,
//             that a new "widget" would be handy to factor out repetition.
// // goal3: create more specific WIDGETS for document representation
// //    think about asking for 'default widget' and 'duck typing widget' to feed this document into
//         -> infer widget from attributes
//         vs.
//         -> infer widget from type label attribute (check and throw if not compatible)
//           => type label is optional, but during compile time, all options should be listed,
//           => with option to label a document as one or more "types"
//           LABELs will be used to:
//           -----------------------
//           1. typecheck for widget and warn about missing fields
//           2. generate missing fields when possible
//           3. look up more needed details from other sources
//             (-> a label can be a link to more detailed spec)
//             => thus: other CONTENT! (e.g. authorName->authorProfile)
// module.exports =  { // preselection fed into widget[s]
//   // front matter
//   meta        : { // generated by engine based on settings
//     revisions   : [timestamps], // ordered list of key(timestamp)-value(documentversion)-pairs
//     // implicitely generated, thus exported + usable in CONTENT
//     assets      : {paths/to/local/files}, // assets used in content or any fields are discovered during runtime
//     dependencies: contains everything that was required // is generated at runtime
//       e.g. {/documents/authors/author1.json}.lastName
//     //
//   },
//   attributes    : { // but instead of "attributes: { ... }" its attrib1: "..", attrib2, ".." etc...
//     // fields = axiom values | requires() | computed(axiom values, requires(), blob)
//     e.g.
//     - means of data creation
//     - time/date of creation
//     - purpose of data
//     - creator of data
//     - location on computer network during creation
//     - used standards
//     - whatever...
//   },
//   // CONTENT
//   // content is multi line HTML + reactive data binding is "plates template",
//   // which is only synced back if backend is available via "websockets" and creates
//   // new revisions of items
//   // requires() should use "dependencies.xyz" instead
//   // thus, CONTENT can "insert" ATTRIBUTES on the fly in order to e.g. create a blog post flow
//   // which uses content from ATTRIBUTES, which come potentially from other files
//   // think "inline referenced content into markdown" + "github marked parser"
//   // check BLACKSMITH how they do it.
//   content     : "
//     // blob = sample data with goal to be refactored over time into 'oblivion' if possible
//     // SAMPLE, once completely explainable by other things, (=becomes pure metadata)
//     //   can substituted by 'creation' through 'requires'
//     // STRUCTURE of CONTENT + CONTENT BLOB FIELD is
//     //   SAMPLE DATA (can be a lot or little)
//   "
// }
// => {
//   'path/to/my-file.md': {
//     title: 'A Catchy Title',
//     draft: true,
//     contents: new Buffer('An unfinished article...')
//   }
// }
//
//
// 2. pipe through <widgets>
// 3. output out/
//     + contains the rendered project
//     + updates revisions for changed nodes
//     + generates log file with details and stats over about what content has been rendered
//     + ...
//
// ////////////////// ALTERNATIVE HOLON CONTENT ITEM FILE STRUCTURE
// see "holon/WORKBENCH/holonContentFile.js"


/////////////////////////
// HEXO FORMAT to compare
// [EXAMPLE_CONTENT.md]
//   title: Hello World
//   date: 2013/7/13 20:46:25
//   categories:
//   - Diary
//   tags:
//   - PS3
//   - Games
//   ---                       # "---" divides "front-matter" from "content"
//   foobar content of file
//   // its possible t use: http://hexo.io/docs/tag-plugins.html
//
// FRONT MATTER:
// #############
// Write the front-matter in YAML format. Don’t use tabs in the front-matter, use spaces instead. Also, add a space after colons.
// All settings regarding a "content item" can be made in the "front matter"
// Setting	      Description	                            Default
//   layout	     Layout	                                 post/page
//   title	       Title
//   date	       Published date	                         File created date
//   updated	     Last updated date	                     File last updated date
//   comments	   Enables comment feature for the post	   true
//   tags	       Tags (Not available for pages)
//   categories	 Categories (Not available for pages)
//   permalink	   Overrides default permalink of post     Filename           MORE: http://hexo.io/docs/permalinks.html
//
// CATEGORIES & TAGS
// Categories and tags may sound familiar in other systems, but theyâre totally different in Hexo. Categories are hierarchical and ordered, which means Foo, Bar doesnât equal to Bar, Foo. Tags are unordered and flat.
//
// EXCERPTS
// You can hide parts of your post by adding <!-- more --> in the content. Index page will only show the post from the first to the second occurrence of <!-- more -->
//
// CODE SNIPPETS
// ``` [language] [title] [url] [link text]
// code snippet
// ```
//


// <div/iframe src="Fancybox.html"
//   data-param-original="/path/to/image"
//   data-param-thumbnail="/path/to/thumbnail"
//   data- param-title="title"
// >
//
// require('./Fancybox.js')("/path/to/image", "path/to/thumbnail", "title");
//
//
// {% fancybox /path/to/image [/path/to/thumbnail] [title] %}
:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::*/
(function FILE_FORMAT () {
  this.widget  = ['Blockquote', 'Profile'] // default widgets to use :-)
  // this means, that the stuff BELOW should fit the PARAMS specified
  // by the widgets above!
  this.name    = 'hans'
  this.author  = this.name + ' the man!'  // does not "live update" on change of "this.name"; // COMPUTED
  this.prog    = require('fs').toString() // does not "live update"
  this.bla     = require("./holonomy.js").name // copies, because "this.name" is atomic, so no "live update"
  this.content = function(markdown, html){/*
    ## Awsome
    here could be html or whatever, maybe markdown
    http://daringfireball.net/projects/markdown/basics
    ...
    and it can be multiline, because it uses
    https://www.npmjs.org/package/multiline
    ...
    and for markdown of course a markdown compiler
    ...
    and it needs a SYNTAX to reference stuff from above.
    it SHOULD NOT be able to use "require", because
    "require" should be used in the FRONT MATTER above.
    ...
    instead, it would use PLATES (or HOLON)
    ...
    how to use PLATES with MARKDOWN?
    MARKDOWN can use or include HTML,
    this is how, that means, for example:
    ...
    "Hello, my name is <span class="name"></span> :-)"
    ...
    it definitly needs an automatically inserted PREFIX,
    which should be based on the PATH, so that it converts into nice
    BEM STYLE, making it unique !!! :-)
    ... because this file is a JAVASCRIPT FILE, it might help to process it with
    => https://www.npmjs.org/package/falafel
    ...
    would i then be able to use:
    ...https://help.github.com/articles/3d-file-viewer/
        https://embed.githubusercontent.com/view/solid/skalnik/secret-bear-clip/master/stl/clip.stl?
        ???
  */}
  //// alternative:
  this.content = function () { return 'content.md'; } // or return 'content.md.html';
  // ==> this.content = require('holon')('content.md')(this)
}).call({/*module.exports*/});
