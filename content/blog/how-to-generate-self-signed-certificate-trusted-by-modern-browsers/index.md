---
title: How To Generate Self Signed SSL Certificate Trusted by Modern Browsers - Quick Way!
date: "2018-12-30T23:46:37.121Z"
---

In this tutorial we will generate self sign certificates that can be trusted by modern browsers in a quick way with help
from [cert-gen](https://github.com/devilbox/cert-gen) tool.

### Get Tool

`git clone https://github.com/devilbox/cert-gen`

It's up to you to have the tool install globally by executing `sudo make install`. But for me, it seems that it is not a common
task i do every day, so use scripts from cloned repo directly is enough and makes more sense. These scripts are allocated in `bin` directory.

### Generate Certificate Authority
`./ca-gen -v -c VN -s HCMC -l HCMC -o "My Company" -u "IT Department" -n "Example App" app-root.key app-root-ca.crt`

On MacOS, you may encounter error "Error Loading extension section v3_ca". To fix that, use alternative openssl version instead:

```bash
brew install openssl
export PATH="/usr/local/opt/openssl/bin:$PATH"
```
    
#### Output

```bash
 0 drwxr-xr-x  6 viet  staff   192 Apr  5 15:30 .
 0 drwxr-xr-x  9 viet  staff   288 Apr  5 15:28 ..
 8 -rw-r--r--  1 viet  staff  1805 Apr  5 15:30 app-root-ca.crt
 8 -rw-r--r--  1 viet  staff  1675 Apr  5 15:30 app-root.key
16 -rwxr-xr-x  1 viet  staff  5045 Apr  5 15:28 ca-gen
16 -rwxr-xr-x  1 viet  staff  5896 Apr  5 15:28 cert-gen
```
    
### Generate self signed SSL certificate

Generate and sign certificate for `myapp.com` domain and all of its subdomains.

`./cert-gen -c VN -s HCMC -l HCMC -o "My Company" -u "IT Department" -n "myapp.com" -a "*.myapp.com" app-root.key app-root-ca.crt myapp.com.key myapp.com.csr myapp.com.crt`

#### Output

```bash
 0 drwxr-xr-x  10 viet  staff   320 Apr  5 15:43 .
 0 drwxr-xr-x   9 viet  staff   288 Apr  5 15:28 ..
 8 -rw-r--r--   1 viet  staff  1805 Apr  5 15:30 app-root-ca.crt
 8 -rw-r--r--   1 viet  staff    17 Apr  5 15:44 app-root-ca.srl
 8 -rw-r--r--   1 viet  staff  1675 Apr  5 15:30 app-root.key
16 -rwxr-xr-x   1 viet  staff  5045 Apr  5 15:28 ca-gen
16 -rwxr-xr-x   1 viet  staff  5896 Apr  5 15:28 cert-gen
 8 -rw-r--r--   1 viet  staff  1371 Apr  5 15:44 myapp.com.crt
 8 -rw-r--r--   1 viet  staff  1009 Apr  5 15:44 myapp.com.csr
 8 -rw-r--r--   1 viet  staff  1700 Apr  5 15:44 myapp.com.key
```

`myapp.com.crt` and `myapp.com.key` are two files you may want for server configuring to have secured connection.

Next step is to import `app-root-ca.crt` to browsers you want to test the certificate. Please refer to tutorial at https://github.com/devilbox/cert-gen#import-ca-into-chrome.