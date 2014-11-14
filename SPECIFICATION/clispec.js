/*:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

            ####   #       #       ####   #####   ######   ####
           #    #  #       #      #       #    #  #       #    #
           #       #       #       ####   #    #  #####   #
           #       #       #           #  #####   #       #
           #    #  #       #      #    #  #       #       #    #
            ####   ######  #       ####   #       ######   ####

  _TABLE_OF_CONTENT _CLI_SPEC
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
