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