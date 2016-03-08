import {bootstrap} from "angular2/platform/browser";
import {HomePage} from "./components/home/home";
import {provide} from "angular2/core";
import {APP_BASE_HREF, ROUTER_PROVIDERS} from "angular2/router";

bootstrap(
    HomePage, [
        ROUTER_PROVIDERS,
        provide(APP_BASE_HREF, { useValue: "/" })
    ]
);