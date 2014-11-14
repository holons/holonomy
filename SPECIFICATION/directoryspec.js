/*:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

       #####   #  #####   ######   ####   #####   ####   #####   #   #
       #    #  #  #    #  #       #    #    #    #    #  #    #   # #
       #    #  #  #    #  #####   #         #    #    #  #    #    #
       #    #  #  #####   #       #         #    #    #  #####     #
       #    #  #  #   #   #       #    #    #    #    #  #   #     #
       #####   #  #    #  ######   ####     #     ####   #    #    #

  _TABLE_OF_CONTENT _DIRECTORY
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
