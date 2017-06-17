"use strict";
const fs = require("fs")
const _path = require("path")
const blogDir = "blogs/public"

exports.blog = (req, resp) => {
	if (req.method === "GET") {
		var path = req.path;
		if (!path || path === "/") {
			// for /blog && /blog/ 
			path = "/index.html"
		}

		var blogPath = blogDir + path

		if (fs.existsSync(blogPath)) {
			if (fs.lstatSync(blogPath).isDirectory()) {
				// for each blog
				blogPath = blogPath + "index.html"
			}

			if (fs.existsSync(blogPath)) {
				console.log("blogPath is: " + blogPath)
				resp.sendFile(_path.resolve(blogPath))
				return
			}
		}

		resp.status(404).send("NOT FOUND")
		return
	}

	resp.status(405).send("METHOD NOT ALLOWED")
}