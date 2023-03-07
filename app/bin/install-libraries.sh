#!/usr/bin/env sh

set -e

public="`dirname "$0"`/../public"

installLibrary() {
    (mkdir -p "$public/$1" && cd "$public/$1" && wget -O - "$2" | tar -xz --strip-components=1)
}

installLibrary flux-eco-ui https://github.com/flux-eco/flux-eco-ui/archive/refs/tags/v2023-03-07-1.tar.gz
sh $public/flux-eco-ui/bin/install-libraries.sh


installToBuild() {
    (mkdir -p "/build/$1" && cd "/build/$1" && wget -O - "$2" | tar -xz --strip-components=1)
}

installToBuild flux-eco-node-http-server https://github.com/flux-eco/flux-eco-node-http-server/archive/refs/tags/v2023-03-06-1.tar.gz
installToBuild flux-eco https://github.com/flux-eco/flux-eco/archive/refs/tags/v2023-03-06-2.tar.gz
