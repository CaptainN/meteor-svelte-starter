Meteor Svelte Starter
=====================

This is a starter project for Svelte on Meteor, produced by Kevin Newman (@CaptainN) at NP Dev LLC. It includes configuration for a few of the trickier things.

## Features
- Uses [`svelte:compiler`](https://github.com/meteor-svelte/meteor-svelte) for Svelte integration with Meteor.
- Perfect code splitting with Meteor's `dynamic-imports` through [`npdev:svetle-loadable`](https://github.com/CaptainN/npdev-svelte-loadable). See: `/imports/ui/App.svelte`.
- Routing using [`svelte-routing`](https://github.com/EmilTholin/svelte-routing). See: `/imports/ui/App.svelte`.
- SSR using Meteor's `server-render`, with properly configured code split preloading through `npdev:svelte-loadable`. See: `/server/ssr.js`.
- SSR hydration, with optimized route specific module preloading, using `npdev:svelte-loadable`. See: `/client/main.js`.
- Shows how to load data using Meteor's tracker (see: `/imports/utils/useTracker.js` and `/imports/ui/pages/Page.svelte`).
- Uses [`staringatlights:fast-render`](https://github.com/abecks/meteor-fast-render) to hydrate pub/sub data before hydration (no flash of loading).

## Features TODO
- Proper offline first module code. This can be implemented simply using Meteor's `appcache` package, but I'd like to provide a proper Service Worker.
- A way to provide a generic (no route specific SSR) page template for use with Service Worker Cache (the app shell pattern).

## Structure
The project is set up with a fairly standard Meteor folder structure. It uses Meteor's `mainMondule` entry points defined in `package.json`. Main entry points are `/client/main.js` and `/server/main.js`.

### Folders:
| folder | description |
|:---|:---|
| /client/ | All client specific code and configuration, including styles (SCSS) and main HTML templates, goes here. |
| /server/ | All server specific code and configuration goes here. |
| /imports/ | Most of the package code will be included in this tree in its subdirectories. |
| /imports/api/ | Anything related to data collections, queries, schemas, methods, publications and connectors goes here. |
| /imports/api/collections/ | Collections and Schema definitions go here. |
| /imports/api/publications/ | Collections and Schema definitions go here. |
| /imports/api/connectors/ | Eventually, connectors will go here (preconfigured tracker or other reusable data access functions.) |
| /imports/ui/ | Mostly filled with Svelte components. |
| /imports/ui/layouts/ | Reusable layouts go here. They typically wrap a "route" component, and direct the route content into a main slot. |
| /imports/ui/common/ | Reusable generic components go here. |
| /imports/ui/{route} | Most of the directories directly under `ui` will be route specific. This also roughly maps to code split boundaries. |
| /imports/utils/ | Utilities functions that don't have a natural fit in the rest of the hierarchy go here, other utilities will be placed in domain specific `utils` folders. |
| /packages/ | Custom local packages, or forks of existing packages will go here. |
| /public/ | Static public assets such as images, fonts, etc, will go here. |
| /private/ | Private assets such as security certificates for various services will go here. |
| /tests/ | Automated tests of various kinds will go here. |

## Configuration

In an effort to keep the root of the project uncluttered, most configuration is in `package.json` instead of various dot configs (.rc files), including configuration for npm packages, scripts, Meteor, Svelte, and eslint.

For many npm svelte packages, in order to get them to compile correctly, they must be listed in the Meteor config section in `package.json` under nodeModules -> recompile. This requires at least Meteor version 1.8.2.

```json
{
  "meteor": {
    "mainModule": {
      "client": "client/main.js",
      "server": "server/main.js"
    },
    "testModule": "tests/main.js",
    "nodeModules": {
      "recompile": {
        "svelte-routing": [
          "client",
          "server"
        ],
        "svelte-loadable": [
          "client",
          "server"
        ]
      }
    }
  }
}
```
