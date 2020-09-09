# IDM configuration and scripts for IDM chess

## How to deploy
Copy the contents of `conf` and `script` directories to your IDM project's `conf` and `script` directories, respectively. If you have made changes to the existing versions of these files, you may have to merge the files so as to have these changes in addition to yours.

## Managed role
Once IDM starts, a new internal role is needed with conditional membership. The condition is based on users' preference for opting in for games. Following cURL (or equivalent) can be used to create this role:

```
$ curl -X PUT \
  http://<host>:<port>/openidm/internal/role/opted-in-for-games \
  -H 'Content-Type: application/json' \
  -H 'X-OpenIDM-Password: openidm-admin' \
  -H 'X-OpenIDM-Username: openidm-admin' \
  -d '{
    "privileges": [],
    "name": "opted-in-for-games",
    "description": "Opted in for games",
    "condition": "/preferences/games eq true"
}'
```

The username and password for `openidm-admin` above should be replaced by environment specific admin user's credentials.
