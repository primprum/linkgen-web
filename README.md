# Linkgen Web

Mediafire link generator using R Plumber as backend, and Express JS as frontend.

### Run Plumber
```
Rscript server.R
```

### Run Express
```
npm start
```

### Run over internet
```
plumber::plumb("linkgen.R")$run(host="0.0.0.0", port=8888)
```
