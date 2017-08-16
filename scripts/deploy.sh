#!/usr/bin/env bash

git fetch origin $TRAVIS_BRANCH --unshallow
git push origin HEAD:refs/heads/master -f
