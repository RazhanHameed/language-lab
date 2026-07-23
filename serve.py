#!/usr/bin/env python3
"""Static file server that disables browser caching.

This is a no-build app (plain <script> tags), so an edited JS/CSS file must be
picked up on the next reload — not served stale from the browser's HTTP cache.
Plain `python -m http.server` sends no cache headers, which lets Chrome cache
assets heuristically and serve them stale after an edit. This server sends
`Cache-Control: no-store` so every reload gets the current file.

Usage: serve.py <port> [directory]
"""
import http.server
import os
import socketserver
import sys

port = int(sys.argv[1]) if len(sys.argv) > 1 else 8123
root = sys.argv[2] if len(sys.argv) > 2 else os.getcwd()


class Handler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=root, **kwargs)

    def end_headers(self):
        self.send_header("Cache-Control", "no-cache, no-store, must-revalidate")
        self.send_header("Pragma", "no-cache")
        self.send_header("Expires", "0")
        super().end_headers()


socketserver.TCPServer.allow_reuse_address = True
with socketserver.TCPServer(("127.0.0.1", port), Handler) as httpd:
    httpd.serve_forever()
