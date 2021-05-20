This project serves as a simple test application to verify correct functioning of a Dojo Toolkit based application with
a strict Content Security Policy (no `unsafe-eval`). The test application is configured with:

```
<meta http-equiv="Content-Security-Policy" content="default-src 'self'">
```

Using a strict Content Security Policy with Dojo imposes some restrictions on how Dojo can be used:

## Dojo 1.17+

* declare `dojoConfig` using JavaScript; avoid the `data-dojo-config` script attribute
* `dojoConfig` must include the following:
  * `async: true`
  * `'csp-restrictions': true`
  * `'dojo-v1x-i18n-Api': false`
* use only AMD modules (avoid `dojo/_base/loader.js`)
* `dojo/xhr`, `dojo/request`
  * avoid `handleAs: 'javascript'`
  * avoid the `dojo/io/script` and `dojo/request/script` modules
* avoid using the `dojo/rpc/RpcService` module

## Dojo versions prior to 1.17

All the restrictions above and also:

* avoid using `data-*` attributes (e.g. `data-dojo-props`)
