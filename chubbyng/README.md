[1] setup npm:
    $ npm config set registry http://registry.npm.taobao.org/
    linsong@linsongdeMacBook-Air chubbycodefactory % npm config list

[2] Init ng project:
    linsong@linsongdeMacBook-Air chubbycodefactory % ng new chubbyng  
    linsong@linsongdeMacBook-Air chubbycodefactory % cd chubbyng 
    linsong@linsongdeMacBook-Air chubbyng % ng build
    linsong@linsongdeMacBook-Air chubbyng % ng serve -o

[3] Revision of port number
    In angular.json, add below inside "serve":
        "host": "localhost",
        "port": 5001

[4] MD
    linsong@linsongdeMacBook-Air chubbyng % ng add @angular/material
    ? Choose a prebuilt theme name, or "custom" for a custom theme: Deep Purple/Amber
    ? Set up HammerJS for gesture recognition? Yes
    ? Set up browser animations for Angular Material? Yes

[5] new component
    linsong@linsongdeMacBook-Air chubbyng % ng g c dashboard --module=app

[6] language set
    linsong@linsongdeMacBook-Air chubbyng % npm install flag-icon-css --save
    Add below to angular.json
        "styles": [
              "./node_modules/flag-icon-css/css/flag-icon.min.css"
        ],

[7] Migration from css to scss.
    linsong@linsongdeMacBook-Air chubbyng % ng config schematics.@schematics/angular:component.styleext scss
    and rename all file extension and references from .css to .scss

[8] Translation
    insong@linsongdeMacBook-Air chubbyng % npm install @ngx-translate/core @ngx-translate/http-loader --save
    linsong@linsongdeMacBook-Air chubbyng % ng g s services/langservice

[9] Footer components
    linsong@linsongdeMacBook-Air chubbyng % ng g c footer --module=app

[10] Version service
    linsong@linsongdeMacBook-Air chubbyng % ng g s services/versionservice

[11] Misc components
    linsong@linsongdeMacBook-Air chubbyng % ng g c accounts --module=app
    linsong@linsongdeMacBook-Air chubbyng % ng g c person --module=app
    linsong@linsongdeMacBook-Air chubbyng % ng g c NotFound --module=app
    linsong@linsongdeMacBook-Air chubbyng % ng g c popup --module=app

[12] LazyLoad and nested routing
    linsong@linsongdeMacBook-Air chubbyng % ng g m dashboard --routing      
    linsong@linsongdeMacBook-Air dashboard % pwd
        /Users/linsong/Documents/NG/chubbycodefactory/chubbycodefactory/chubbyng/src/app/dashboard 
    linsong@linsongdeMacBook-Air dashboard % ng g c DashboardConfig
    linsong@linsongdeMacBook-Air dashboard % ng g c DashboardDetail
    linsong@linsongdeMacBook-Air dashboard % ng g c Dashboard404

[13] Pipe
    linsong@linsongdeMacBook-Air chubbyng % ng g pipe pipes/mathSqrt --module=app

[14] Directives
    linsong@linsongdeMacBook-Air chubbyng % ng g directive directives/ChangeText --module=app

[15] Sanitization of HTML
    DomSanitizer included to footer

[16]
    linsong@linsongdeMacBook-Air chubbyng % ng g s services/apiservice

[17] spinner
    linsong@linsongdeMacBook-Air chubbyng % npm install bootstrap --save
    linsong@linsongdeMacBook-Air chubbyng % npm install ngx-spinner --save
    linsong@linsongdeMacBook-Air chubbyng % ng g class model/Employee --spec=false

[18] Redux
    linsong@linsongdeMacBook-Air chubbyng % ng g m person --routing
    linsong@linsongdeMacBook-Air chubbyng % ng g c person/containers/users
    linsong@linsongdeMacBook-Air chubbyng % ng g c person/containers/user
    linsong@linsongdeMacBook-Air chubbyng % npm install @ngrx/core @ngrx/store --save
    linsong@linsongdeMacBook-Air chubbyng % npm install @ngrx/router-store --save
    linsong@linsongdeMacBook-Air chubbyng % npm install @ngrx/effects --save
    linsong@linsongdeMacBook-Air chubbyng % ng g s services/User
    linsong@linsongdeMacBook-Air chubbyng % ng g c person/components/users
    linsong@linsongdeMacBook-Air chubbyng % ng g c person/components/user-details

[19] Build
    linsong@linsongdeMacBook-Air chubbyng % ng build --prod --build--optimizer   
    Dev:    linsong@linsongdeMacBook-Air chubbyng % ng serve -o  
    Prod:   linsong@linsongdeMacBook-Air chubbyng % ng serve --prod

[20] Tool
    linsong@linsongdeMacBook-Air chubbyng % ng g c tool --module=app
    linsong@linsongdeMacBook-Air chubbyng % ng g m tool --routing
    linsong@linsongdeMacBook-Air chubbyng % ng g c tool/ToolAbout
    linsong@linsongdeMacBook-Air chubbyng % ng g c tool/ToolFile 
    linsong@linsongdeMacBook-Air chubbyng % ng g c tool/ToolEdit
    linsong@linsongdeMacBook-Air chubbyng % ng g c tool/ToolCounter

[21] JWT
    linsong@linsongdeMacBook-Air chubbyng % npm install @auth0/angular-jwt --save
    server: 
        linsong@linsongdeMacBook-Air server % npm install jsonwebtoken express-jwt --save
    linsong@linsongdeMacBook-Air chubbyng % ng g component login --skipTests --inline-style --module=app
    linsong@linsongdeMacBook-Air chubbyng % ng g service services/auth --flat --skipTests
    linsong@linsongdeMacBook-Air chubbyng % ng g guard auth --flat --skipTests

[22]
    [root@VM_0_15_centos personalng]# netstat -lnp|grep 80

[23] Responsive Card Grid
    linsong@linsongdeMacBook-Air chubbyng % ng update --next @angular/cli --force
    linsong@linsongdeMacBook-Air chubbyng % npm install typescript@latest
    linsong@linsongdeMacBook-Air chubbyng % npm install -s @angular/flex-layout
    linsong@linsongdeMacBook-Air chubbyng % npm i -s @angular/flex-layout @angular/cdk
    linsong@linsongdeMacBook-Air card-view-demo-master % npm install -g node

[24] bootstrap
    linsong@linsongdeMacBook-Air chubbyng % npm install bootstrap --save
    linsong@linsongdeMacBook-Air chubbyng % npm install jquery --save

[25] upload
    linsong@linsongdeMacBook-Air server % npm install --save connect-multiparty
    linsong@linsongdeMacBook-Air chubbyng % npm install ngx-toastr --save
    linsong@linsongdeMacBook-Air chubbyng % npm install ng2-file-upload --save

[26] 
    linsong@linsongdeMacBook-Air chubbyng % ng g directive directives/counting --module=app
    linsong@linsongdeMacBook-Air chubbyng % ng g directive directives/ExeHighlight --module=app
    linsong@linsongdeMacBook-Air chubbyng % ng g directive directives/exeButtonPress --module=app

[27] 
    linsong@linsongdeMacBook-Air chubbyng % npm install ngx-cookie-service --save

