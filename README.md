sls-golb
===

A blog based on [Hexo](https://hexo.io/) driven by [Serverless Google Cloud Functions](https://serverless.com/framework/docs/providers/google/guide/)

## RUN

1. [Config google cloud function](https://serverless.com/framework/docs/providers/google/guide/credentials/) and put your keyfile in `~/.gcloud/keyfile.json`

1. Generate static files, and ensure that all static files are in `blogs/public` folder

1. Run `sls deploy`, and visit the function's addr
