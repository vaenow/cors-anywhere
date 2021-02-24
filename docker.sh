#!/usr/bin/env bash

serverName=proxy
crAddr=ccr.ccs.tencentyun.com
version=$1
namespace=
if [ "$1" == "" ]; then
    echo "NEED version param !"
    exit 1
fi

#
echo build...
docker build -t ${namespace}/${serverName}:${version} .

echo tag...
docker tag ${namespace}/${serverName}:${version} ${crAddr}/${namespace}/${serverName}:${version}

echo push...
docker push ${crAddr}/${namespace}/${serverName}:${version}
