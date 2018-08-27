#!/bin/bash

PRE_COMMIT_HOOK_DIR=".git/hooks"

if [ ! -d "$PRE_COMMIT_HOOK_DIR" ]; then
  exit 0
fi

if [ -d "$PRE_COMMIT_HOOK_DIR" ]; then
  npm run commit-hook
fi
